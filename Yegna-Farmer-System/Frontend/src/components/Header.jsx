import React,{useState} from "react";
import logoImage from "../assets/logo1.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        {href:'#home', label:'Home'},
        {href:'#services', label:'Services'},
        {href:'#about', label:'About US'},
        {href:'#contact', label:'Contact Us'},
        /* {href:'#appointment', label:'Book Appointment'}, */
    ];
    return (
        //menu
        <header className="sticky top-0 z-50" style={{ backgroundColor: '#003501',boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.7)', }}>
            <div className="w-full py-4 flex justify-between items-center pl-6">
                <a href="/" >
                    <img src={logoImage} alt="YengaFarm" className="h-[50px] w-auto transform scale-100 hover:scale-105 transition-transform" />
                </a>
                <nav aria-label="Primary navigation">
                    <ul className="hidden md:flex space-x-18"> 
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a 
                                href={link.href} 
                                className="text-white hover:text-[#63a800] transition-colors duration-200
                                 ">
                                {link.label}
                                </a>
                                </li>
                                ))}
                    </ul>
                </nav>
                <button className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#63a800] rounded"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu">
                    <svg className="w-6 h-6 " fill="none"  stroke="currentColor" viewBox="0 0 24 24" >
                        {isMenuOpen ? (
                            // X icon
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                                ):(
                            // Hamburger icon
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                            )
                        }
                    </svg>  
                </button>
                {isMenuOpen && (
                    <aside 
                    id="mobile-menu" 
                    className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4"
                    aria-label="Mobile menu"
                    >
                        <nav aria-label="Mobile navigation">
                            <ul className="flex flex-col space-y-4">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                        href={link.href}
                                        className="block text-gray-700 hover:text-pink-600 transition-colors duration-200  
                                        py-2 px-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:rounded"
                                        onClick={toggleMenu}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}

                            </ul>

                        </nav>
                    </aside>
                )}
                <nav className="hidden md:flex items-center bg-[#63a800] rounded-l-full shadow-md px-6 py-2 mr-0">
                    {/* Circular icon */}
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#63a800]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                        </svg>
                    </div>

                    {/* Links */}
                    <a
                        href="#signup"
                        className="text-white font-semibold hover:underline cursor-pointer"
                    >
                        Sign Up
                    </a>

                    {/* Separator */}
                    <span className="mx-3 h-6 border-l border-white"></span>

                    <a
                        href="#login"
                        className="text-white font-semibold hover:underline cursor-pointer"
                    >
                        Log In
                    </a>
                </nav>



            </div>

        </header>
    );
};

export default Header;