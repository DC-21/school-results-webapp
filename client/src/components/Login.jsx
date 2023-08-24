import Image from '../images/login.jpeg'

const Login = () => {
  return (
    <div style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className='flex w-full h-screen justify-center items-center'>
        <div className="w-[340px] flex flex-col h-[400px] bg-transparent justify-center items-center border-2 border-gray-700 opacity-100 rounded shadow-lg shadow-black">
            <p className="flex text-center text-xl">Login</p>
            <div className="w-full flex flex-col items-center mt-4 px-4">
                <label>Register Number</label>
                <input style={{ textAlign:"center"}} type="number" placeholder="register number" className="border border-blue-950 rounded h-10 md:w-[250px] w-full mt-4" />
            </div>
            <div className="w-full flex flex-col items-center mt-2 px-4">
                <label>Password</label>
                <input style={{ textAlign:"center"}} type="password" placeholder="password" className="border border-blue-950 rounded h-10 md:w-[250px] w-full mt-4" />
            </div>
            <div className="w-full flex flex-col items-center mt-2 px-4">
            <button className="text-white cursor-pointer mt-4 rounded py-2 px-2 bg-gray-800 hover:bg-gray-600 md:w-[100px] w-full">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login