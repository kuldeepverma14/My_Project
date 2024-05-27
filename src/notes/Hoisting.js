const Hoisting = () => {
    getName1()
    console.log(getName1)
    console.log(getName2)


    // printed as
    // ƒ getName1() {
    //     console.log("srsdf");
    //   }
    function getName1() {
        console.log("srsdf")
    }


    //     Cannot access 'getName2' before initialization
    // ReferenceError: Cannot access 'getName2' before initialization
    // at Create (http://localhost:3000/main.8506cfe44be039572313.hot-update.js:29:15)
    //because getName2 act as a variable not a function and 
    const getName2 = () => {
        console.log("srsdf")
    }
    return (
        <>
it is a mechanism in which all the variables and function are moved to the top of their scope regardless their scope is global or local
        </>
    )
}
export default Hoisting