import React from "react";
import ResultColumn from "./ResultColumn";


const SearchResult = (props) =>{

    const slike = props.data;
    const colNum = 4

 return (
    <div className="search-results">
        <ResultColumn data={slike.filter((e,i) => i % colNum === 0)}/>
        <ResultColumn data={slike.filter((e,i) => i% colNum === 1)}/>
        <ResultColumn data={slike.filter((e,i) => i% colNum === 2)}/>
        <ResultColumn data={slike.filter((e,i) => i% colNum === 3)}/>
    </div>
 );
}





export default SearchResult;