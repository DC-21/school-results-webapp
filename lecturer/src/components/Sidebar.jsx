
const Sidebar = () => {
  return (
    <div className="w-[150px] h-screen py-2 bg-green-500 justify-between flex flex-col">
        <div className="w-full justify-start flex flex-col text-white font-medium">
            <a className="hover:bg-green-700 px-1 py-2">My Class</a>
            <a className="hover:bg-green-700 px-1 py-2">Enter Results</a>
            <a className="hover:bg-green-700 px-1 py-2">Update Results</a>
            <a></a>
        </div>
        <p>Zulu</p>
    </div>
  )
}

export default Sidebar