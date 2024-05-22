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
        data()
    }, [])
    console.log(mapData)
    return (
        <div className="m-5">
            <h3>This is Data Table</h3>
            <table>
                <tr>
                    <th>ID</th>
                    <th>UserId</th>
                    <th>Title</th>
                    {/* <th>Completed</th> */}
                </tr>
                {mapData?.map((item, i) => (
                    <tr key={i}>
                        <td className="text-center">{item.id}</td>
                        <td>{item.userId}</td>
                        <td className="flex justify-center  ">{item.title}</td>
                        {/* <td>{item.completed}</td> */}
                    </tr>))}
            </table>
        </div>
    )
}
export default GetData