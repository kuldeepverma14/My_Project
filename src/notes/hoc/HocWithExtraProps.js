const HocWithExtraProps = (SimpleComponent) => {

    // Higher-Order Component (HOC)

    // Higher-Order Components: Specific to React, used to add behavior or props to components.
    // Higher-Order Components: Return a new component.
    // A higher-order component is a pattern in React that allows you to reuse component logic. An HOC is a function that takes a component and returns a new component with additional props or behavior.

    // Why Use HOCs?
    // Code Reusability: Share common functionality between components.
    // Abstraction: Abstract away complex logic from components.
    // Separation of Concerns: Keep your components clean and focused on rendering.
    // Conditional Rendering: When you need to render a component conditionally based on some props or state.


    // use Of {...props}

    // The ...props syntax in the provided code is a spread operator used to pass all the original props received by the higher-order component (HOC) to the wrapped component. This ensures that the wrapped component receives not only the new props introduced by the HOC (in this case, extraprops), but also any props that were originally passed to the HOC.


    return (props) => {
        return <SimpleComponent extraprops={"i m a extra props"} {...props} />
    }
}
export default HocWithExtraProps