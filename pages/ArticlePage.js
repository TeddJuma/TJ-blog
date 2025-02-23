function ArticlePage({ article }) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto px-4 py-12" data-name="article-page">
            <article className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-96 object-cover rounded-xl"
                        data-name="article-hero-image"
                    />
                </div>

                <header className="mb-8">
                    <div className="flex items-center gap-4 mb-4" data-name="article-meta">
                        <img
                            src={`https://ui-avatars.com/api/?name=${article.author}`}
                            alt={article.author}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="font-semibold text-red-400">{article.author}</h3>
                            <p className="text-sm text-gray-400">{article.date}</p>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold mb-4" data-name="article-title">
                        {article.title}
                    </h1>
                    <p className="text-xl text-gray-300 mb-4" data-name="article-excerpt">
                        {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4" data-name="article-sharing">
                        <span className="text-gray-400">Share:</span>
                        <SocialShare url={window.location.href} title={article.title} />
                    </div>
                </header>

                <div 
                    className="prose prose-invert prose-red max-w-none"
                    data-name="article-content"
                >
                    {article.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800" data-name="article-footer">
                    <h3 className="text-2xl font-bold mb-4 text-red-400">Related Articles</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {fetchArticles()
                            .filter(a => a.category === article.category && a.id !== article.id)
                            .slice(0, 2)
                            .map(relatedArticle => (
                                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                            ))
                        }
                    </div>
                </div>
            </article>
        </div>
    );
}
