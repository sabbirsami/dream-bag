import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import SingleReview from "../SingleReview/SingleReview";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setReviews(data.slice(0, 3)));
    }, []);
    console.log(reviews);
    return (
        <div className="py-5">
            <h1>Customer Reviews</h1>
            <div className="container">
                <div className="row">
                    {reviews.map((review) => (
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
