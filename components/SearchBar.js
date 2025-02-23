function SearchBar({ onSearch }) {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState([]);
    const [isSearching, setIsSearching] = React.useState(false);

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const handleSearch = React.useCallback(
        debounce((searchQuery) => {
            try {
                if (searchQuery.trim()) {
                    setIsSearching(true);
                    const searchResults = searchArticles(searchQuery);
                    setResults(searchResults);
                    onSearch(searchResults);
                } else {
                    setResults([]);
                    onSearch([]);
                }
                setIsSearching(false);
            } catch (error) {
                reportError(error);
                setIsSearching(false);
            }
        }, 300),
        []
    );

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        handleSearch(value);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto" data-name="search-container">
            <div className="relative">
                <input
                    type="text"
                    className="search-input pl-10 pr-4 py-3 rounded-xl border-2 border-red-500/30 focus:border-red-500"
                    placeholder="Search articles..."
                    value={query}
                    onChange={handleChange}
                    data-name="search-input"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <i className="fas fa-search"></i>
                </span>
                {isSearching && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                        <i className="fas fa-spinner fa-spin"></i>
                    </span>
                )}
            </div>

            {results.length > 0 && query && (
                <div className="absolute w-full mt-2 bg-gray-800 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto" data-name="search-results">
                    {results.map(article => (
                        <div
                            key={article.id}
                            className="p-4 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-0"
                            data-name="search-result-item"
                        >
                            <h4 className="text-red-400 font-semibold">{article.title}</h4>
                            <p className="text-sm text-gray-400">{article.excerpt}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
