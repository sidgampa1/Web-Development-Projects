import ReviewsDAO from "../dao/ReviewsDAO.js"

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
       try {
        console.log("Posting new review");
        console.log(req.body);
        const movieId = req.body.movieId;
        const review = req.body.review;
        const user = req.body.user;

        const reviewResponse = await ReviewsDAO.addReview(
            movieId,
            review,
            user
        );
        res.json({status:"success"});
        }
        catch (e) {
        res.status(500).json({error: e.message});
        }

    }

    static async apiGetReview(req, res, next) {
        try {
            let id = req.params.id || {};
            let review = await ReviewsDAO.getReview(id);
            if (!review) {
                res.status(400).json({error: "Not Found"});
                return;
            }
            res.json(review);

        } catch (e) {
            console.log(`api ${e}`);
            res.status(500).json({error: e});
        }
    }

    static async apiUpdateReview(req, res, next) {
        try {
        const id = req.params.id;
        const review = req.body.review;
        const user = req.body.user;

        let reviewResponse = await ReviewsDAO.updateReview(
            id,
            user,
            review
        );

        var { error } = reviewResponse;

        if (error) {
            res.status(400).json({error});
        }

        if (reviewResponse.modifiedCount === 0) {
            throw new Error("Unable to update review");
        }

        res.json({status: "success"});
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async apiDeleteReview(req, res, next) {
        try {
            const reviewID = req.params.id;
            let reviewResponse = await ReviewsDAO.deleteReview(reviewID);
            res.json({status: "success"});
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async apiGetReviews(req, res, next) {
        try {
        let id = req.params.id || {};
        let reviews = await ReviewsDAO.getReviewsByMovieID(id);

        if (!reviews) {
            res.status(400).json({error: "Not Found"});
            return;
        }
        res.json(reviews);
        } catch (e) {
            console.log(`api ${e}`);
            res.status(500).json({error: e});
        }
    }
}