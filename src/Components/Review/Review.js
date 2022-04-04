import { Link } from "react-router-dom";
import useReview from "../hooks/useReview";
import SingleReview from "../SingleReview/SingleReview";

const Review = () => {
    const [reviews, setReviews] = useReview([]);

    console.log(reviews);
    return (
        <div className="py-5">
            <div className="container">
                <h1 className="pb-4 text-start">Customer Reviews</h1>
                <div className="row">
                    {reviews.slice(0, 3).map((review) => (
                        <SingleReview
                            key={review.id}
                            review={review}
                        ></SingleReview>
                    ))}
                </div>
                <div className="d-flex justify-content-start">
                    <Link
                        to="/reviews"
                        className="btn btn-warning bg-gradient fs-5 px-5 py-2 fw-normal my-4"
                    >
                        Show All Reviews
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Review;
