function SocialShare({ url, title }) {
    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    return (
        <div className="flex space-x-3" data-name="social-share">
            <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-main transition-colors"
                data-name="twitter-share"
            >
                <i className="fab fa-twitter"></i>
            </a>
            <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-main transition-colors"
                data-name="facebook-share"
            >
                <i className="fab fa-facebook"></i>
            </a>
            <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-main transition-colors"
                data-name="linkedin-share"
            >
                <i className="fab fa-linkedin"></i>
            </a>
        </div>
    );
}
