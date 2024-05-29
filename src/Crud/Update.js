import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Update() {
   const {id}  =  useParams()  
   console.log(id)
//    console.js:273 No routes matched location "/update/1"  
//        at Routes (http://localhost:3000/static/js/bundle.js:40922:5)
//        at Router (http://localhost:3000/static/js/bundle.js:40856:15)
//        at BrowserRouter (http://localhost:3000/static/js/bundle.js:38809:5)
//        at App


  
    return (
        <div className="m-5">

asdedr
        </div>
    )
}