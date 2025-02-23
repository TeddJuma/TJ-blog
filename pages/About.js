function About() {
    return (
        <div className="min-h-screen pt-20" data-name="about-page">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8" data-name="about-title">
                        About Modern Tech Blog
                    </h1>
                    
                    <div className="prose prose-invert max-w-none" data-name="about-content">
                        <p className="text-xl text-gray-300 mb-6">
                            We are passionate about bringing you the latest insights and innovations 
                            in the world of technology.
                        </p>
                        
                        <div className="bg-gray-800/50 p-8 rounded-lg mb-8" data-name="mission-section">
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-300">
                                To provide cutting-edge technology news, insights, and analysis that 
                                helps our readers stay ahead in the rapidly evolving digital world.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12" data-name="stats-section">
                            <div className="bg-gray-800/30 p-6 rounded-lg text-center">
                                <div className="text-4xl font-bold text-primary-main mb-2">50K+</div>
                                <div className="text-gray-300">Monthly Readers</div>
                            </div>
                            <div className="bg-gray-800/30 p-6 rounded-lg text-center">
                                <div className="text-4xl font-bold text-primary-main mb-2">1000+</div>
                                <div className="text-gray-300">Published Articles</div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                        <div className="grid md:grid-cols-3 gap-6" data-name="team-section">
                            {[
                                {
                                    name: "John Smith",
                                    role: "Editor in Chief",
                                    image: "https://ui-avatars.com/api/?name=John+Smith"
                                },
                                {
                                    name: "Sarah Johnson",
                                    role: "Tech Writer",
                                    image: "https://ui-avatars.com/api/?name=Sarah+Johnson"
                                },
                                {
                                    name: "Mike Wilson",
                                    role: "Tech Analyst",
                                    image: "https://ui-avatars.com/api/?name=Mike+Wilson"
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
