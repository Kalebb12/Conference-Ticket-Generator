import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <header className="px-5 md:px-20 lg:px-30 py-10">
      <div className="border-line py-3 px-4 flex justify-between items-center rounded-3xl">
        <img src="/logo.svg" alt="ticz ticket logo" />

        <nav className="hidden px-2 lg:flex gap-4">
          <NavLink to="/" className="p-[10px] text-lg">Events</NavLink>
          <NavLink to="/myTickets" className="p-[10px] text-lg">My Tickets</NavLink>
          <NavLink to="/about" className="p-[10px] text-lg">About Project</NavLink>
        </nav>
        
        <Button type={'white'} className='md:text-[16px] text-sm'>My Tickets <img src="/arrow right.svg" alt="arrow right" /></Button>
      </div>
    </header>
  );
};

export default Navbar;
