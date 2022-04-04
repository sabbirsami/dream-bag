import React from "react";
import "./SingleReview.css";

const SingleReview = ({ review }) => {
    const { name, comment, rate } = review;
    return (
        <div className="col-lg-4 p-3">
            <div className="card_section">
                <div
                    className="card_style card"
                    style={{ backgroundColor: "#F6F6F6" }}
                >
                    <div className="card-body text-start">
                        <h5 className="card-title">{name}</h5>
                        <hr />
                        <p className="card-text">{comment}</p>
                        <p>
                            <small>Rating: {rate}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
