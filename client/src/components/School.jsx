import logo from '../images/logogb.png'

const Profile = () => {
  return (
    <div className="w-full py-3 px-4 bg-green-100 flex flex-col justify-center items-center">
        <img className='md:h-[150px] h-[100px] md:w-[150px] w-[90px]' src={logo} />
        <p className='md:text-[20px] text-[15px] text-center'>DMI ST EUGENE UNIVERSITY-CHIBOMBO</p>
        <p className='text-center'>Computer Science and Information Technology</p>
    </div>
  )
}

export default Profile