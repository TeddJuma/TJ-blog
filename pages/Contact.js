function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Implement form submission logic here
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            reportError(error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen pt-20" data-name="contact-page">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center" data-name="contact-title">
                        Get in Touch
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-12" data-name="contact-info">
                        <a href="tel:+254701105908" className="text-gray-300 hover:text-red-500">
                            <div className="text-center">
                                <i className="fas fa-envelope text-3xl text-primary-main mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Email Me</h3>
                                <p className="text-gray-300">tedd.juma.0@gmail.com</p>
                            </div>
                        </a>
                        <a href="maito:tedd.juma.0@gmail.com" className="text-gray-300 hover:text-red-500">
                            <div className="text-center" >
                                <i className="fas fa-phone text-3xl text-primary-main mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Call Me</h3>
                                <p className="text-gray-300 ">+254 701 105 908</p>
                            </div>
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" data-name="contact-form">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="search-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="search-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="search-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="search-input"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="button w-full">
                            Send Message
                        </button>
                    </form>

                    {status === 'success' && (
                        <div className="mt-4 p-4 bg-green-800/50 text-green-200 rounded" data-name="success-message">
                            Message sent successfully!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mt-4 p-4 bg-red-800/50 text-red-200 rounded" data-name="error-message">
                            Failed to send message. Please try again.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
