import axios from "axios";
import { useForm } from "react-hook-form";

const Create = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('https://dummyjson.com/products/add', data)
            console.log(res)
            if(res.status===200){
                alert("Created")
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="m-4">
            JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used with the React library to describe what the UI should look like.
            JSX allows you to write HTML-like code within JavaScript, which then gets transformed into JavaScript objects that the React library can render.<br />
            Register Function: Function to register input fields for validation. <br />
            watch: Function to monitor changes to specific form fields <br />

            The ... (spread operator) is used in JavaScript (and specifically in frameworks like React) to spread the properties of an object into another object.<br /><br />
            <b>What handleSubmit Does</b>    <br />
            HandleSubmit takes onSubmit(callback function ) to invoke onSubmit .<br />
            Form Validation: handleSubmit automatically validates the form based on the rules you've specified using the register function or schema validation.<br />
            Data Collection: It collects the data from all registered inputs.<br />
            Callback Execution: If the form is valid, it passes the collected data to the callback function you provide. If the form is invalid, it handles displaying the errors appropriately.<br />

            <b> The formState object includes several properties that provide information about the form's current state. Here are some of the key properties:</b> <br />

            errors: An object containing validation errors for each field.<br />
            isDirty: Boolean indicating whether any field has been modified.<br />
            isValid: Boolean indicating whether the form is valid.<br />
            isSubmitting: Boolean indicating whether the form is currently being submitted.<br />
            isSubmitSuccessful: Boolean indicating whether the form submission was successful.<br />
            isValidating: Boolean indicating whether the form is currently being validated.<br />
            touchedFields: Object containing the fields that have been touched.<br />
            dirtyFields: Object containing the fields that have been modified.<br /><br />

            <b>async await:</b> <br />
            The async and await keywords in JavaScript are used to handle asynchronous operations in a more readable and straightforward way.<br />
            <b>async Keyword</b><br />
            The async keyword is used to declare an asynchronous function. When a function is marked as async, it automatically returns a promise. Inside this function, you can use the await keyword to pause the execution until a promise is resolved.<br />

            <b>await Keyword</b><br />
            The await keyword is used to wait for a promise to resolve. It can only be used inside an async function. When await is called, it pauses the execution of the async function until the promise is resolved, and then returns the resolved value. If the promise is rejected, await throws the rejected value as an error.<br />
            <form onSubmit={handleSubmit(onSubmit)} className="m-5 grid grid-cols-2 gap-10">
                <div className="flex flex-col"> <label htmlFor="title" >Title</label>
                    <input className="border border-black" {...register("title", { required: true })} />
                    {errors.title && <span>This is required field</span>}
                    {/* { required: true } is compulsory to show errors */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="tags" > Tags </label>
                    <input className="border border-black" {...register("tags", { required: true })} />
                    {errors.tags && <span>This is required field</span>}
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default Create