import logo from "../images/dmi.png";

const Navbar = () => {
  return (
    <div className="w-full justify-center items-center px-4 py-2 flex bg-green-700">
      <div className="w-full flex justify-between items-center">
        <img className="w-[100px] h-[80px] rounded" src={logo} alt="logo" />
        <a className="text-white text-xl">DMI ST EUGENE UNIVERSITY</a>
        <div className="gap-4 flex">
          <a className="text-white text-lg">My Class</a>
          <a className="text-white text-lg">Profile</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
