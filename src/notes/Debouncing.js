import { useState } from "react"

const Debouncing = () => {

const [a,setA] =useState([])
    let count = 0
    const handleUpdate = () => {
        count++
        console.log("count",count)
        setA([...a,2,5])
    }

    const debounce = (handleUpdate,delay)=>{
        // console.log("this",this.kd)
        let c=0
        let timer; //we have declared this variable here to clear previouus timer
        return function(){
            c++
            console.log("c",c)
            clearTimeout(timer)
         timer= setTimeout(()=>{
            handleUpdate()
          },delay)
        }
    }

// conclusion handleUpdate will be invoked after 400ms after the keyup
    return (
        // <div> <input className="border border-red-400" onKeyUp={handleUpdate} />
        <div> <input className="border border-red-400" onKeyUp={debounce(handleUpdate,400)} />
        {a}
        
        <p>{count } it will not change due to change in count++ because count is a regular variablr and react does not track this type of variable </p>
         </div>
    )
}
export default Debouncing