function Navbar({ currentPage }) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (page) => {
        window.location.hash = page;
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div data-name="navbar-container">
            <nav 
                className={`fixed w-11/12 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-xl mt-4
                    ${isScrolled ? 'bg-gray-900/20' : 'bg-gray-900/30'}`}
                data-name="navbar"
            >
                <div className="container mx-auto px-6 flex items-center justify-between py-4">
                    <div 
                        className="text-2xl font-bold cursor-pointer text-red-500" 
                        onClick={() => handleNavigation('home')}
                        data-name="logo"
                    >
                        TechBlog
                    </div>
                    <div className="hidden md:flex space-x-8" data-name="nav-links">
                        {[
                            { id: 'home', label: 'Home' },
                            { id: 'articles', label: 'Articles' },
                            { id: 'about', label: 'About' },
                            { id: 'contact', label: 'Contact' }
                        ].map(link => (
                            <a
                                key={link.id}
                                onClick={() => handleNavigation(link.id)}
                                className={`nav-link cursor-pointer ${
                                    currentPage === link.id ? 'text-red-500' : 'text-gray-300 hover:text-red-400'
                                }`}
                                data-name={`${link.id}-link`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <button 
                        className="md:hidden text-red-500 z-50" 
                        onClick={toggleMobileMenu}
                        data-name="mobile-menu-button"
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div 
                className={`fixed inset-0 bg-gray-900/95 z-40 transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
                data-name="mobile-menu"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {[
                        { id: 'home', label: 'Home' },
                        { id: 'articles', label: 'Articles' },
                        { id: 'about', label: 'About' },
                        { id: 'contact', label: 'Contact' }
                    ].map(link => (
                        <a
                            key={link.id}
                            onClick={() => handleNavigation(link.id)}
                            className={`text-2xl ${
                                currentPage === link.id ? 'text-red-500' : 'text-gray-300 hover:text-red-400'
                            } transition-colors duration-200`}
                            data-name={`mobile-${link.id}-link`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
