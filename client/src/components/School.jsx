import logo from '../images/logogb.png'

const Profile = () => {
  return (
    <div className="w-full py-3 px-4 bg-green-100 flex flex-col justify-center items-center">
        <img className='h-[150px] w-[150px]' src={logo} />
        <p>DMI ST EUGENE UNIVERSITY-CHIBOMBO</p>
        <p>Computer Science and Information Technology</p>
    </div>
  )
}

export default Profile