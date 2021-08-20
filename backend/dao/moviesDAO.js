let movies;

export default class MoviesDAO {
  static async injectDB(conn) {
    if (movies) {
      return
    }
    try {
      movies = await conn.db(process.env.MOVIEREVIEWS_NS)
        .collection('movies');
    } catch (e) {
      console.errror(`unable to connect in MoviesDAO: ${e}`);
    }
  }
  
  static async getMovies({
    // default fiter 
    filters = null,
    page = 0,
    moviesPerPage = 20
  } = {}){
      let query
      if(filters) {
        if("title" in filters) {
          query = {$text: {$search: filers['title']}}
        } else if ('rated' in filters) {
          query = {'rated': {$eq: filters['rated']}}
        }
      }

      let cursor
      try{
        cursor = await movies.find(query).limit(moviesPerPage).skip(moviesPerPage*page)
          const movies = await cursor.toArray()
          const totalNumMovies = await movies.countDocuments(query)
          return {movieList, totalNumMovies}
      }
      catch(e) {
      console.error(`Unable to issue find comand, ${e}`)
      return {moviesList: [], totalNumMovies: 0}
    }
  }
}
