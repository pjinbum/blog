import React from "react";
import { Link } from "react-router-dom";

function Sub1(){
    return(
     <div>
         <div>Sub1</div>
         <li>
            <Link to='/sub1'>서브페이지</Link>
         </li>
     </div>
    )
}

export default Sub1