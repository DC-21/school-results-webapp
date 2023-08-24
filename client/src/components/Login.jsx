
const Login = () => {
  return (
    <div className='bg-gradient-to-r from-purple-300 to-blue-200 flex w-full h-screen justify-center items-center'>
        <div className="w-[380px] flex flex-col h-[500px] bg-white justify-center items-center rounded shadow-lg shadow-blue-400">
            <p className="flex text-center">Login PLease</p>
            <div className="w-full flex flex-col items-center mt-2">
                <label>Register Number</label>
                <input style={{ textAlign:"center"}} type="number" placeholder="register number" className="border border-blue-950 rounded h-10 mt-4" />
            </div>
            <div className="w-full flex flex-col items-center mt-2">
                <label>Password</label>
                <input style={{ textAlign:"center"}} type="password" placeholder="password" className="border border-blue-950 rounded h-10 mt-4" />
            </div>
        </div>
    </div>
  )
}

export default Login