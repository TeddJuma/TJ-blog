function FeaturedPost({ post }) {

    return (
        <div
            className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
            data-name="featured-post"
            onClick={() => {
                window.location.hash = `article-${post.id}`
            }} 
        >
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-name="featured-image"
            />
        
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                    <div className="text-sm text-gray-300 mb-2" data-name="featured-meta">
                        {post.date} · {post.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2" data-name="featured-title">
                        {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4" data-name="featured-excerpt">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center" data-name="featured-author">
                            <img
                                src={`https://ui-avatars.com/api/?name=${post.author}`}
                                alt={post.author}
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-gray-300">{post.author}</span>
                        </div>
                        <SocialShare url={`/article/${post.id}`} title={post.title} />
                    </div>
                </div>
            </div>
        </div>
    );
}
