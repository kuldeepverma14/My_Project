import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"


const GetData = () => {
    const navigate = useNavigate()
    const [mapData, setMapData] = useState(null)
    const [updateData, setUpdateData] = useState(null)
    const [idUpdate, setIdUpdate] = useState(null)
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleUpdate = (id) => {
        setIdUpdate(id)
        console.log(id)
    };
   
    const data = async () => {
        try {
            // debugger;
            const res = await axios.get('https://dummyjson.com/products')
            console.log("sdaf", res)
            if (res?.status === 200) {
                setMapData(res?.data?.products)
                if (idUpdate !== null) {
                    const filteredData = res?.data?.products?.filter(item => item?.id === idUpdate)
                    console.log(filteredData)
                    setUpdateData(filteredData)
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        data();
    }, [idUpdate])

    // UPDATE started
    console.log("updateData", updateData)
    // const handleUpdate = (id)=>{
    //     alert("dfg")
    //     navigate(`/update/${id}`)
    // }

    const onClose = () => {
        setIdUpdate(null)
        setEdit(false)
    }
    const onSubmit = async () => {
        try {
            const updateRes = await axios.put(`https://dummyjson.com/products/${idUpdate}`)
            console.log("upadted", updateRes)
            if (updateRes.status === 200) {
                data()
                onClose()
            }
        } catch (err) { console.log(err) }
    }
    // console.log("dirt", edit)

    const handleDelete = async(id) => {
        console.log(id)
        try{
            const deleteRes = await axios.delete(`https://dummyjson.com/products/${id}`)
            console.log(deleteRes)
        }catch(err){
            console.log(err)
        }
    };

    return (
        <div className="m-5 h-screen">
            <h1>This is Data Table</h1>
            <Link to="/create" > Add </Link>
            <table className="mt-10">
                <tr>
                    <th className="px-2">ID</th>
                    <th className="px-2">Title</th>
                    <th className="px-2">Tags</th>
                    <th className="px-2">Dimensions width</th>
                    <th className="text-red-500 px-2">Action</th>
                </tr>
                {mapData?.map((item, i) => (
                    <tr key={i}>
                        <td className="text-center">{item.id}</td>
                        <td className="text-center">{item.title}</td>
                        {item?.tags?.map((item, i) => (
                            <tr key={i} className="flex justify-center  ">{item}</tr>
                        ))}
                        <td className="text-center">{item?.dimensions?.width}</td>
                        <td className="flex flex-col text-center ">
                            <button type="button" onClick={() => handleUpdate(item?.id)}>Update</button>
                            <button className="text-red-500" onClick={() => handleDelete(item?.id)}>Delete</button>
                        </td>
                        {/* <td className="text-center">{item?.completed.toString().charAt(0).toUpperCase()}{item?.completed.toString().slice(1)}</td> */}
                        {/* we have added toString( because i m getting item?.completed in boolean form not in string form) */}
                    </tr>))}
            </table>
            {idUpdate !== null && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50  z-50">
                    <div className="shadow-lg p-4 bg-white flex flex-col rounded-lg">
                        <button onClick={onClose} className="text-end text-red-500">Close</button>
                        {!edit && updateData?.map((item, i) => (
                            <div className="mt-5 " key={i}>
                                <input className="border border-black rounded-sm px-2" value={item.title} />
                            </div>
                        ))}
                        {!edit ? <button className="mt-5 text-start" onClick={() => setEdit(true)}> Edit </button> :
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <input className="border border-black"  {...register("title", { required: true })} /> <br />
                                {errors.title && <span className="text-red-500"> This is a required field </span>} <br />
                                <div className="flex gap-5">
                                    <button type="submit"  >Update</button>
                                    <button onClick={() => setEdit(false)}>Cancel</button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}
export default GetData