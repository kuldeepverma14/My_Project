import axios from "axios";
import { useForm } from "react-hook-form";

const Create = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("https://dummyjson.com/posts/add", data)
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="m-5 grid grid-cols-2 gap-10">
                <div className="flex flex-col"> <label htmlFor="title" >Title</label>
                    <input className="border border-black" {...register("title", { required: true })} />
                    {errors.title && <span>This is required field</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="userId" > User Id </label>
                    <input className="border border-black" {...register("userId", { required: true })} />
                    {errors.userId && <span>This is required field</span>}
                </div>
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}
export default Create