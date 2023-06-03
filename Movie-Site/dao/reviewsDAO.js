import mongodb from 'mongodb'
// const ObjectId = mongodb.ObjectID

global.reviewsColl;
export default class reviewsDAO {

    static async injectDB(conn) {
        if (this.reviews) {
            console.log("reviews DAO already connected");
            return;
        }

        try {
            console.log("Attempting connection to reviews DAO");
            global.reviewsColl = await conn.db("reviews").collection("reviews");
            console.log("retrieved connection to DAO");
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
            // console.log(global.reviewsColl);
            // console.log(reviewDoc);
            
            return await reviewsColl.insertOne(reviewDoc);
            
        } catch (e) {
            console.error(`Unable to post review: ${e}`);
            return {error: e};
        }
    }

    static async getReview(reviewID) {
        try {
            const ObjectId = new mongodb.ObjectId(reviewID) 
            return await reviewsColl.findOne({_id: ObjectId });
        } catch (e) {
            console.error(`Unable to get review: ${e}`);
            return {error: e};
        }
    }

    static async updateReview(reviewID, user, review) {
        try {
            const ObjectId = new mongodb.ObjectId(reviewID) 
            const response = reviewsColl.updateOne({_id: ObjectId},
            {$set : {user: user, review: review}});

            return response;
        } catch (e) {
            console.error(`Unable to update reviewa: ${e}`);
            return {error: e};
        }
    }

    static async deleteReview(reviewID) {
        try {
            const ObjectId = new mongodb.ObjectId(reviewID) 
            return await reviewsColl.deleteOne({_id: ObjectId });
        } catch (e) {
            console.error(`Unable to delete review: ${e}`);
            return {error: e};
        }
    }

    static async getReviewsByMovieID(movieId) {
        try{
            
        const resp = await reviewsColl.find({movieID : parseInt(movieId)});
        return resp.toArray();
        } catch (e) {
            console.error(`Unable to get reviews: ${e}`);
            return {error: e};
        }
    }
}