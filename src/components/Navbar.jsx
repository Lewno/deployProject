import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className='w-full flex p-3 justify-between items-center'>
      <img src={logo} alt="" className='w-[5rem]' />
      <Link to={"/login"}>
        <button className=' bg-orange-400 p-1 px-4 rounded-3xl text-sm'>INICIAR SESIÓN</button>
      </Link>
    </nav>
  )
}

export default Navbar