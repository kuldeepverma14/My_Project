import axios from "axios"
import { useEffect, useState } from "react"

const GetData = () => {
    const [mapData, setMapData] = useState(null)
    const data = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log("sdaf", res)
            if (res?.status === 200) {
                setMapData(res?.data)
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
            <table>
                <tr>
                    <th>ID</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                {mapData?.map((item, i) => (
                    <tr key={i}>
                        <td className="text-center">{item.id}</td>
                        <td className="text-center">{item.userId}</td>
                        <td className="flex justify-center  ">{item.title}</td>
                        <td className="text-center">{item?.completed.toString().charAt(0).toUpperCase()}{item?.completed.toString().slice(1)}</td>
                        {/* we have added toString( because i m getting item?.completed in boolean form not in string form) */}
                    </tr>))}
            </table>
        </div>
    )
}
export default GetData