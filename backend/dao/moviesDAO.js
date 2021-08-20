let movies;

export default class MoviesDAO {
  static async injectDB(conn) {
    if (movies) {
      try {
        movies = await conn
          .injectDB(prcess.env.MOVIEREVIEWS_NS)
          .collection('movies');
      } catch (e) {
        console.errror(`unable to connect in MoviesDAO: ${e}`);
      }
    }
  }
}
