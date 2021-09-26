import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export const Loading = () => {

    return(
        <Loader 
            type="ThreeDots"
            color="#FFE811"
            height={50}
            width={50}
            timeout={3000}
        />
    )
}