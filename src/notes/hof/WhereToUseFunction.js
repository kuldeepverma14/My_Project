export default function WhereToUseFunction() {
    //   HOF
    //   A higher-order function is a function that does at least one of the following:

    // Takes one or more functions as arguments.
    // Returns a function as its result.
    // Higher-order function that takes a function as an argument

    function higherOrderFunction(fn) {
        return function (value) {
            return fn(value);
        };
    }

    // Callback function to be passed as an argument
    function greet(name) {
        return `this is an, ${name}!`;
    }

    // Using the higher-order function
    const greetUser = higherOrderFunction(greet);
    console.log(greetUser('CallBack Function')); // Output: Hello, Alice!

    return <>

    </>
}