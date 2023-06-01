import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectID

let reviews;

export default class reviewsDAO {

    static async injectDB(conn) {
        if (reviews) {
            console.log("reviews DAO already connected");
            console.log(reviews);
            return;
        }

        try {
            console.log("Attempting connection to reviews DAO");
            reviews = await conn.db("reviews").collection("reviews");
            console.log("retrieved connection to DAO");
            console.log(reviews);
        }
        catch (e) {
            console.error(`Unable to establish connection to DAO: ${e}`)
        }
    }

    static async addReview(movieID, review, user) {
        try {
            const reviewDoc = {
                movieID: movieID,
                review: review,
                user: user
            }
            console.log("In DAO, adding review");
            console.log(reviews);
            console.log(reviewDoc);

            return await reviews.insertOne(reviewDoc);
        } catch (e) {
            console.error(`Unable to post review: ${e}`);
            return {error: e};
        }
    }

    static async getReview(reviewID) {
        try {
            return await reviews.findOne({_id: ObjectId(reviewID) });
        } catch (e) {
            console.error(`Unable to get review: ${e}`);
            return {error: e};
        }
    }

    static async updateReview(reviewID, user, review) {
        try {
            const response = reviews.updateOne({_id: ObjectId(reviewID)},
            {$set : {user: user, review: review}});

            return response;
        } catch (e) {
            console.error(`Unable to update reviewa: ${e}`);
            return {error: e};
        }
    }

    static async deleteReview(reviewID) {
        try {
            return await reviews.deleteOne({_id: ObjectId(reviewID) });
        } catch (e) {
            console.error(`Unable to delete review: ${e}`);
            return {error: e};
        }
    }

    static async getReviewsByMovieId(movieId) {
        try{
        const resp = await reviews.find({movieId : parseInt(movieId)});
        return resp.toArray();
        } catch (e) {
            console.error(`Unable to get reviews: ${e}`);
            return {error: e};
        }
    }
}