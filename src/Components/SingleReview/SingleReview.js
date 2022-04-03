import React from "react";

const SingleReview = ({ review }) => {
    return (
        <div className="col-lg-4 p-3">
            <div className="card" style={{ backgroundColor: "#F6F6F6" }}>
                <div className="card-body text-start">
                    <h5 className="card-title">{review.name}</h5>
                    <hr />
                    <p className="card-text">{review.comment}</p>
                    <p>
                        <small>Rating: {review.rate} ster</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
