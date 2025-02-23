function Articles() {
    const [articles, setArticles] = React.useState([]);
    const [filteredArticles, setFilteredArticles] = React.useState([]);
    const [activeCategory, setActiveCategory] = React.useState('all');
    const [loading, setLoading] = React.useState(true);

    const categories = ['all', 'AI', 'Web Development', 'Cybersecurity', 'Innovation'];

    React.useEffect(() => {
        try {
            const fetchedArticles = fetchArticles();
            setArticles(fetchedArticles);
            setFilteredArticles(fetchedArticles);
            setLoading(false);
        } catch (error) {
            reportError(error);
            setLoading(false);
        }
    }, []);

    const handleSearch = (query) => {
        try {
            const results = searchArticles(query);
            setFilteredArticles(results);
        } catch (error) {
            reportError(error);
        }
    };

    const filterByCategory = (category) => {
        setActiveCategory(category);
        if (category === 'all') {
            setFilteredArticles(articles);
        } else {
            setFilteredArticles(articles.filter(article => article.category === category));
        }
    };

    return (
        <div className="min-h-screen pt-20" data-name="articles-page">
            <div className="container mx-auto px-4">
                <header className="py-12 text-center">
                    <h1 className="text-4xl font-bold mb-6" data-name="articles-title">
                        Latest Articles
                    </h1>
                    {/* <SearchBar onSearch={handleSearch} /> */}
                </header>

                <div className="flex flex-wrap gap-4 justify-center mb-8" data-name="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => filterByCategory(category)}
                            className={`px-4 py-2 rounded-full ${
                                activeCategory === category
                                    ? 'bg-primary-main text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                            data-name={`category-${category}`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="text-center py-20" data-name="loading">
                        <i className="fas fa-spinner fa-spin text-4xl"></i>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
