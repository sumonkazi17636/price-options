import Link from "../Link/Link";


const Navbar = () => {
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/portfolio', name: 'Portfolio', id: 'portfolio' }
      ];
    return (
        <nav>
            <ul className="md:flex">
            {
               routes.map(route =><Link key={route.id} route={route}></Link>) 
            }
            </ul>
        </nav>
    );
};

export default Navbar;