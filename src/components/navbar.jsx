import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='flex bg-white justify-around items-center'>
      <div>
        <img className='w-40' src={logo} alt='logo' />
      </div>
      <div>
        <ul className='flex gap-10 font-medium'>
          <Link to='/'><li className='text-[#41CB5B]'>Home</li></Link>
          <Link to='/about-us'><li>About</li></Link>
          <Link to='/service'><li>Services</li></Link>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className='greenColor text-white font-medium px-6 py-4 rounded-full cursor-pointer'>
        <button>Download App</button>
      </div>
    </div>
  )
}

export default Navbar
