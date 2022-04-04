import React from "react";
import bag from "../../bags.jpg";
import Review from "../Review/Review";
import "./Home.css";
const Home = () => {
    return (
        <>
            <div style={{ backgroundColor: "#F6F6F6", paddingBottom: "10px" }}>
                <div className="container">
                    <div className="hero_section">
                        <div className="row">
                            <div className="col-lg-6  d-flex align-items-center">
                                <div className="hero_details text-start">
                                    <h1 className="fs-10">
                                        YOUR NEXT DREAM BAG
                                    </h1>
                                    {/* <h1>FOR BEST SERVICE</h1> */}
                                    <p className="fs-5">
                                        Our shop will provide you best services
                                        then any other shop in online. You can
                                        receive your product in shortest time
                                        also with best offer.
                                    </p>
                                    <button className="btn btn-warning bg-gradient fs-5 px-5 py-2 fw-normal">
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
