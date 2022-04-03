import React from "react";
import notFound from "../../notfound.jpg";

const NotFound = () => {
    return (
        <div>
            <img
                className="w-50"
                style={{ hight: "95vh" }}
                src={notFound}
                alt=""
            />
        </div>
    );
};

export default NotFound;
