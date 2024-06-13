const Debouncing = () => {


    let count = 0
    const handleUpdate = () => {
        count++
        console.log(count)
    }



    return (
        <div> <input className="border border-red-400" onKeyUp={handleUpdate} />{count } </div>
    )
}
export default Debouncing