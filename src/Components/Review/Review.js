import { Link } from "react-router-dom";
import useReview from "../hooks/useReview";
import SingleReview from "../SingleReview/SingleReview";

const Review = () => {
    const [reviews, setReviews] = useReview([]);

    console.log(reviews);
    return (
        <div className="py-5">
            <h1>Customer Reviews</h1>
            <div className="container">
                <div className="row">
                    {reviews.slice(0, 3).map((review) => (
                        <SingleReview
                            key={review.id}
                            review={review}
                        ></SingleReview>
                    ))}
                </div>
                <Link to="/reviews" className="btn btn-warning">
                    Show All Reviews
                </Link>
            </div>
        </div>
    );
};

export default Review;
