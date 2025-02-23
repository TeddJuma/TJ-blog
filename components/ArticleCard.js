function ArticleCard({ article }) {
    const handleClick = () => {
        window.location.hash = `article-${article.id}`;
    };

    return (
        <div 
            className="card hover-scale cursor-pointer rotate-in" 
            onClick={handleClick}
            data-name="article-card"
            data-scroll
        >
            <div className="card-content">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    data-name="article-image"
                />
                <div className="p-6">
                    <div className="text-sm text-gray-400 mb-2" data-name="article-meta">
                        {article.date} · {article.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2" data-name="article-title">
                        {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4" data-name="article-excerpt">
                        {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center" data-name="article-author">
                            <img
                                src={`https://ui-avatars.com/api/?name=${article.author}`}
                                alt={article.author}
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-sm text-gray-400">{article.author}</span>
                        </div>
                        <span className="text-red-400 hover:text-red-500">Read More →</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
