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
it is a mechanism in which all the variables and function are moved to the top of their scope regardless their scope is global or local during the compile phase(compilation)This means that no matter where you declare your variables and functions in the code, JavaScript will handle them as if they were declared at the top of their scope (either the global scope or a function scope).

However, it's important to note that only the declarations are hoisted, not the initializations. Let's break this down with examples:

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
Here’s what happens during the execution:

Hoisting Phase: JavaScript moves the declaration of x to the top of the scope.

Code After Hoisting: The code effectively looks like this:
var x;
console.log(x); // Output: undefined
x = 5;
console.log(x); // Output: 5

        </>
    )
}
export default Hoisting