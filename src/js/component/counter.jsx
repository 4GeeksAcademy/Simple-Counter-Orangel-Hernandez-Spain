import React from "react";


export const Counter = ({value}) => {
    return (
        <div className="bg-dark text-white text-center fs-1 border-light m-1 " style={{ width: "5rem", height: "5rem"}}>
            {value}
      </div>
    );
}
