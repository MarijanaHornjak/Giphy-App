import React from "react";

const ResultImg = (props) =>{

    const data = props.img


    return (
    <div className="slika">
       <img src={data.images.downsized_medium.url}></img>
       {/* <h4>{data.title}</h4> */}
    </div>
    );
}






export default ResultImg;