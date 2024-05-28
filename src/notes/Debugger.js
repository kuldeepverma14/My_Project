export default function Debugger() {
    function star() {
        // debugger;
        for (var i = 0; i < 3; i++) {  // Change the condition to i < numOfStar
            document.write("*") //it prints star(*) just double time of i < 3 condition because of memory allocation and code execution  
            console.log("*")
        }
    }
    star();
    return <>
        debugger
    </>;
}
