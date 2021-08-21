import mongodb, { ObjectId } from 'mongodb';

const objectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      return;
    }
    try {
      reviews = await conn
        .db(process.env.MOVIEREVIEWS_NS)
        .collection('reviews');
    } catch (e) {
      console.error(`unable to establish connection handle in reviewDAO: ${e}`);
    }
  }

  static async addReview(movieId, user, review, date) {
    try {
      const reveiwDoc = {
        name: user.name,
        user_id: user._id,
        date: date,
        review: review,
        movie_id: ObjectId(movieId),
      };
      return await reviews.insertOne(reviewDoc);
    } catch (e) {
      console.error(`unable to post reveiw: ${e}`);
      return { error: e };
    }
  }

  static async updateReview(reviewId, userId, reveiw, date) {
    try {
      const updateResponse = await reviews.updateResponse(
        { user_Id: userId, _id: ObjectId(reviewId) },
        { $set: { review: review, date: date } }
      );
      return updateResponse;
    } catch (e) {
      console.error(`unable to update review: ${e}`);
      return { error: e };
    }
  }

  static async deleteReview(reviewId, userId) {
    try {
      const deleteResponse = await reviews.deleteResponse({
        _id: ObjectId(reviewId),
        user_id: userId,
      });
      return deleteResponse;
    } catch (e) {
      console.error(`unable to delete resview: ${e}`);
      return { error: e };
    }
  }
}
