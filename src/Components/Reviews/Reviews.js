import useReview from "../hooks/useReview";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <div className="py-4">
            <h1 className="p-4">Customers Review</h1>
            <div className="container">
                <div className="row">
                    {reviews.map((review) => (
                        <SingleReview
                            key={review.id}
                            review={review}
                        ></SingleReview>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
