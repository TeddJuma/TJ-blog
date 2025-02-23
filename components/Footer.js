function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800" data-name="footer">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div data-name="footer-about">
                        <h3 className="text-xl font-bold mb-4">Modern Tech Blog</h3>
                        <p className="text-gray-400">
                        Embracing creativity and innovation from the heart of Kenya—let's connect!
                        </p>
                    </div>
                    <div data-name="footer-links">
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#articles" className="text-gray-400 hover:text-white">Articles</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-categories">
                        <h4 className="text-lg font-bold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href= "#articles" className="text-gray-400 hover:text-white">AI & Machine Learning</a></li>
                            <li><a href="#articles" className="text-gray-400 hover:text-white">Web Development</a></li>
                            <li><a href="#articles" className="text-gray-400 hover:text-white">Cybersecurity</a></li>
                            <li><a href="#articles" className="text-gray-400 hover:text-white">Innovation</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-social">
                        <h4 className="text-lg font-bold mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-name="footer-copyright">
                    © {new Date().getFullYear()} Tedd's Tech Blog. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
