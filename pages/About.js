function About() {
    return (
        <div className="min-h-screen pt-20" data-name="about-page">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8" data-name="about-title">
                        About Tech Blog
                    </h1>
                    
                    <div className="prose prose-invert max-w-none" data-name="about-content">
                        <p className="text-xl text-gray-300 mb-6">
                        Welcome to my corner of the digital world, where creativity meets technology and 
                        innovation knows no bounds. This blog is a space for exploring the latest trends 
                        and ideas in tech, from the exciting possibilities of artificial intelligence to 
                        the evolving landscape of web development. Through a blend of curiosity and passion, 
                        I aim to share insights and perspectives that inspire and inform. Whether you're a 
                        fellow tech enthusiast or just curious about the future of technology, I invite you 
                        to join me on this journey of discovery and exploration.
                        </p>
                        
                        <div className="bg-gray-800/50 p-8 rounded-lg mb-8" data-name="mission-section">
                            <h2 className="text-2xl font-bold mb-4">Mission</h2>
                            <p className="text-gray-300">
                            To create a platform where creativity meets technology, 
                            empowering individuals to explore and shape the future.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12" data-name="stats-section">
                            <div className="bg-gray-800/30 p-6 rounded-lg text-center">
                                <div className="text-4xl font-bold text-primary-main mb-2">100+</div>
                                <div className="text-gray-300">Monthly Readers</div>
                            </div>
                            <div className="bg-gray-800/30 p-6 rounded-lg text-center">
                                <div className="text-4xl font-bold text-primary-main mb-2">10+</div>
                                <div className="text-gray-300">Published Articles</div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4">The Team</h2>
                        <div className="grid md:grid-cols-3 gap-6" data-name="team-section">
                            {[
                                {
                                    name: "Tedd Juma",
                                    role: "Editor in Chief",
                                    image: "https://ui-avatars.com/api/?name=Tedd+Juma"
                                },
                                {
                                    name: "Tedd Juma",
                                    role: "Tech Writer",
                                    image: "https://ui-avatars.com/api/?name=Tedd+Juma"
                                },
                                {
                                    name: "Tedd Juma",
                                    role: "Tech Analyst",
                                    image: "https://ui-avatars.com/api/?name=Tedd+Juma"
                                }
                            ].map(member => (
                                <div key={member.name} className="text-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="font-bold">{member.name}</h3>
                                    <p className="text-gray-400">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
