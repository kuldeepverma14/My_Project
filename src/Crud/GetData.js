import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const GetData = () => {
    const [mapData, setMapData] = useState(null)
    const data = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products')
            console.log("sdaf", res)
            if (res?.status === 200) {
                setMapData(res?.data?.products)
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        data();
    }, [])

    return (
        <div className="m-5">
            <h1>This is Data Table</h1>
            <Link  to="/create" > Add </Link>
            <table className="mt-10">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Tags</th>
                    <th>Dimensions width</th>
                    <th className="text-red-500">Action</th>
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
                            <button>Update</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                        {/* <td className="text-center">{item?.completed.toString().charAt(0).toUpperCase()}{item?.completed.toString().slice(1)}</td> */}
                        {/* we have added toString( because i m getting item?.completed in boolean form not in string form) */}
                    </tr>))}
            </table>
        </div>
    )
}
export default GetData