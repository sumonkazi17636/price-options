
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";




const Navbar = () => {
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/portfolio', name: 'Portfolio', id: 'portfolio' }
      ];

      const [open,setOpen] = useState(false)
    return (
        <nav className="p-6 bg-yellow-200">
            <div className="md:hidden text-3xl " onClick={()=>setOpen(!open)}>
                {
                    open === true?
                    <IoMdClose></IoMdClose>:
                    <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
            
            <ul className={`md:flex  duration-1000 absolute md:static
            ${
                open?'top-17':'-top-60'
            }
            px-6 bg-yellow-200 rounded-lg`}>
            {
               routes.map(route =><Link key={route.id} route={route}></Link>) 
            }
            </ul>
        </nav>
    );
};

export default Navbar;