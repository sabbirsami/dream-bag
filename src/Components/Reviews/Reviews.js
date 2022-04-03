import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    console.log(reviews);
    return (
        <div className="py-5">
            <h1>Customar Reviews</h1>
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
