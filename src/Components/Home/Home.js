import React from "react";
import bag from "../../bags.jpg";
import Review from "../Review/Review";
const Home = () => {
    return (
        <>
            <div style={{ backgroundColor: "#F6F6F6", paddingBottom: "10px" }}>
                <div className="container">
                    <div className="hero_section">
                        <div className="row">
                            <div className="col-lg-6  d-flex align-items-center">
                                <div className="hero_detile text-start">
                                    <h1>YOUR NEXT PHONE</h1>
                                    <h1>YOUR BEST PHONE</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Natus rem magnam
                                        pariatur, atque impedit vel blanditiis
                                        cumque quasi qui praesentium quaerat
                                        alias tenetur quam autem. Error possimus
                                        aliquid eum molestias!
                                    </p>
                                    <button className="btn btn-warning bg-gradient px-4 py-2 fw-normal">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero_image">
                                    <img className="w-100" src={bag} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Review></Review>
        </>
    );
};

export default Home;
