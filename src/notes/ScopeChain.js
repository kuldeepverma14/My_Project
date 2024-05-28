const ScopeChain = () => {
    // 1 case
    function a() {
        console.log(b)
    }
    var b = 10
    a()

    // 2 case
    function c() {
        e()
        function e() {
            console.log(d)
        }
    }
    var d = 20
    c()
    // e()   Line 15:5:  'e' is not defined  no-undef


    // 3 case
    function f() {
        var g = 15
    }
    // console.log(g)  Line 25:13:  'g' is not defined  no-undef
    f()
    // console.log(g)  Line 25:13:  'g' is not defined  no-undef
    return (<>
        <b>Scope </b>  : where u can access any specific variable and function in our code.<br />
        <b> Scope chain </b>  : function e is inside function c ,and function c is inside global execution context.<br />
        Whenever execution context is created, lexical environment is also created with it
        Here in above case 2  function e is lexically inside function c so we can say function c is lexical parent of function e.<br />

        Any function and variable can be accessible from only its own and its parent lexical environment<br />
    </>)
}
export default ScopeChain