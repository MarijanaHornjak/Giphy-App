import React from "react";
import ResultImg from "./ResultImg";


const ResultColumn = (props) =>{

    const gifovi = props.data;

    return ( 

         <div className="result-col">
             {gifovi.map((element) => <ResultImg img={element}/>)}
        </div>
    
    );
};




export default ResultColumn;