export default function Debugger() {
    function star() {
        // debugger;
        for (var i = 0; i < 3; i++) {  // Change the condition to i < numOfStar
            console.log("*")
        }
    }
    star();
    return <>
        debugger
    </>;
}
