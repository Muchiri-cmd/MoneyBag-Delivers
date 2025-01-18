import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='h-16 w-100 flex justify-between items-center px-24 shadow-lg shadow-slate-100'>
      <h1 className='font-bold text-3xl cursor-pointer'>
        <Link to='/'>
            <span className='cursor-pointer'>FREELANCER</span>
        </Link>
      </h1>
      <ul className='flex gap-12 text-xl'>
        <Link to='/'>
          <li className='cursor-pointer'>Home</li>
        </Link>
        <Link to='/dashboard'>
          <li className='cursor-pointer'>Dashboard</li>
        </Link>
        <Link to='/prospects'>
          <li className='cursor-pointer'>Prospects</li>
        </Link>
        <Link to='/proposals'>
          <li className='cursor-pointer'>Proposals</li>
        </Link>
        <Link to='/'>
          <li className='cursor-pointer'>
            <IoMdPerson />
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBar
