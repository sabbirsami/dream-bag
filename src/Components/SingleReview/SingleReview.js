import React from "react";
import "./SingleReview.css";

const SingleReview = ({ review }) => {
    return (
        <div className="col-lg-4 p-3">
            <div className="card_section">
                <div
                    className="card_style card"
                    style={{ backgroundColor: "#F6F6F6" }}
                >
                    <div className="card-body text-start">
                        <h5 className="card-title">{review.name}</h5>
                        <hr />
                        <p className="card-text">{review.comment}</p>
                        <p>
                            <small>Rating: {review.rate}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
