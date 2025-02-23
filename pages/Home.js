function Home({ articles }) {
    const [featuredPosts, setFeaturedPosts] = React.useState([]);
    const [recentPosts, setRecentPosts] = React.useState([]);

    React.useEffect(() => {
        try {
            setFeaturedPosts(articles.slice(0, 3));
            setRecentPosts(articles.slice(3, 9));
        } catch (error) {
            reportError(error);
        }
    }, [articles]);

    return (
        <div className="min-h-screen" id="home" data-name="home-page">
            <section className="relative h-screen flex items-center justify-center overflow-hidden" data-name="hero-section">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 opacity-90"></div>
                <div className="absolute inset-0">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://source.unsplash.com/1920x1080/?technology"
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-elements-12810-large.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-red-300 to-red-500" data-name="hero-title">
                        Explore the Future of Tech
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8" data-name="hero-subtitle">
                    A unique viewpoint on tech and life, crafted through the creative lens of a Kenyan student.
                    </p>
                    {/* <SearchBar onSearch={() => {}} /> */}
                </div>
                {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <i className="fas fa-chevron-down text-2xl text-red-500"></i>
                </div> */}
            </section>

            <section className="container mx-auto px-4 py-16" data-name="featured-section">
                <h2 className="text-3xl font-bold mb-8 text-red-500">Featured Posts</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {featuredPosts.map(post => (
                        <FeaturedPost key={post.id} post={post} />
                    ))}
                </div>
            </section>

            <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16" data-name="recent-section">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-red-400">Recent Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map(post => (
                            <ArticleCard key={post.id} article={post} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
