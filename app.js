function App() {
    const [articles, setArticles] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [footerLoaded, setFooterLoaded] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(window.location.hash.slice(1) || 'home');

    React.useEffect(() => {
        try {
            const fetchedArticles = fetchArticles();
            setArticles(fetchedArticles);
            setLoading(false);

            // Initialize scroll animations
            const scrollElements = document.querySelectorAll('[data-scroll]');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            scrollElements.forEach(element => observer.observe(element));

            return () => {
                scrollElements.forEach(element => observer.unobserve(element));
            };
        } catch (error) {
            reportError(error);
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setFooterLoaded(true);
        }, 500);

        const handleHashChange = () => {
            setCurrentPage(window.location.hash.slice(1) || 'home');
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = () => {
        if (currentPage.startsWith('article-')) {
            const articleId = parseInt(currentPage.split('-')[1]);
            const article = articles.find(a => a.id === articleId);
            return article ? <ArticlePage article={article} /> : <div>Article not found</div>;
        }

        switch (currentPage) {
            case 'home':
                return <Home articles={articles} />;
            case 'articles':
                return <Articles articles={articles} />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            default:
                return <Home articles={articles} />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800" data-name="app-container">
            <Navbar currentPage={currentPage} />
            
            <main className="pt-20">
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <i className="fas fa-spinner fa-spin text-4xl text-red-500"></i>
                    </div>
                ) : (
                    renderPage()
                )}
            </main>

            {footerLoaded && <Footer />}
        </div>
    );
}

// Initialize React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
