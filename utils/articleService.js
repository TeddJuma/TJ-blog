function fetchArticles() {
    try {
        // Simulate local articles since CMS is not configured
        return [
            {
                id: 1,
                title: "The Future of Artificial Intelligence",
                excerpt: "Artificial intelligence is set to redefine the future, transforming industries, education, and the way we interact with technology in ways we are only beginning to imagine.",
                content: `Artificial intelligence (AI) is no longer a distant concept confined to science fiction; it is a rapidly advancing technology shaping the world around us. From healthcare to education, AI is transforming how we live, work, and solve problems. As we look to the future, its potential seems limitless, with advancements poised to revolutionize nearly every aspect of our lives.
                        One of the most anticipated developments in AI is the rise of autonomous systems that can perform complex tasks independently. These systems will go beyond simple automation to become intelligent assistants capable of managing schedules, analyzing data, and even making decisions based on context. This shift will blur the lines between human effort and machine efficiency, creating opportunities for greater productivity across industries.
                        In education, AI holds immense promise for personalization. Imagine a classroom where every student has access to an AI-powered tutor tailored to their individual learning style and pace. Such systems could identify gaps in understanding and adapt lessons in real time, ensuring that no student is left behind. This level of customization could make education more inclusive and effective, especially in areas where resources are limited.
                        Industries like healthcare and finance are already seeing remarkable applications of AI. In healthcare, AI-powered diagnostic tools can analyze medical data with unprecedented speed and accuracy, enabling earlier detection of diseases and more effective treatments. In finance, algorithms are being used to detect fraud, assess risks, and optimize investments. Manufacturing is also being transformed by AI-driven robotics that streamline production processes while reducing errors and costs.
                        Despite its many benefits, the rise of AI also brings challenges that must be addressed. Concerns about job displacement due to automation are valid, but history has shown that technological advancements often create new roles while reshaping existing ones. The future workforce will need to focus on skills that complement AI—such as creativity, critical thinking, and emotional intelligence—rather than compete with it.
                        Ethics will play a crucial role in shaping the future of artificial intelligence. Issues such as data privacy, algorithmic bias, and accountability must be carefully managed to ensure that AI serves humanity responsibly and equitably. As society grows increasingly reliant on these systems, transparency in how they operate will be essential for building trust and avoiding unintended consequences.
                        The future of artificial intelligence is both exciting and complex. It promises groundbreaking innovations that could solve some of humanity's most pressing challenges while also demanding thoughtful consideration of its implications. By balancing progress with responsibility, we can harness the power of AI to create a better world—one where technology enhances our lives without compromising our values.
                `,
                author: "Tedd Juma",
                date: "2025-02-23",
                category: "AI",
                image: "https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
            },
            {
                id: 2,
                title: "Web Development Trends 2025",
                excerpt: "Web development in 2025 is set to be revolutionized by advancements in AI, immersive technologies, and new frameworks, shaping a more efficient, user-centric digital landscape.",
                content: `As we step into 2025, the landscape of web development is evolving at an unprecedented pace. Emerging technologies and changing user expectations are driving significant trends that promise to reshape how websites are built and experienced. Understanding these trends is crucial for developers and businesses aiming to stay ahead in the competitive digital space.
                        Artificial Intelligence (AI) continues to be a transformative force in web development. In 2025, AI tools will enhance workflows by automating repetitive tasks, optimizing user experiences, and providing data-driven insights. Developers will increasingly rely on AI for dynamic personalization, enabling websites to tailor content based on user behavior. This shift not only improves engagement but also helps businesses make informed decisions about their online strategies.
                        Another major trend is the rise of Progressive Web Apps (PWAs). PWAs combine the best of web and mobile applications, offering users a seamless experience regardless of their device. With features like offline access and push notifications, PWAs are becoming essential for businesses looking to enhance user engagement and retention.
                        The integration of immersive technologies such as Augmented Reality (AR) and Virtual Reality (VR) is also gaining traction. In 2025, developers will create more interactive web experiences that blur the lines between physical and digital worlds. This trend has significant implications for sectors like e-commerce, where customers can virtually try products before purchasing, enhancing their shopping experience.
                        Blockchain technology is set to disrupt traditional web architectures by offering decentralized solutions that prioritize security and user control. As concerns about data privacy grow, more web applications will leverage blockchain for secure data storage and identity management. This shift could lead to a more transparent internet where users have greater control over their information.
                        Low-code and no-code platforms are democratizing web development by allowing individuals with minimal coding knowledge to create complex applications. These platforms are maturing rapidly, offering enhanced customization options and integrations that empower non-developers to contribute to the digital landscape. While professional developers will still play a crucial role, these tools will accelerate time-to-market for many projects.
                        The focus on web performance will intensify in 2025, with metrics such as Google's Core Web Vitals becoming critical for search engine optimization (SEO) and user experience. Developers will need to prioritize loading speed, interactivity, and visual stability to meet user expectations and improve site rankings.
                        JavaScript frameworks continue to dominate the web development scene. While established frameworks like React and Angular remain popular, new contenders such as SolidJS and Svelte are emerging with innovative approaches that enhance performance and developer experience. Keeping an eye on these developments will be essential for developers looking to leverage the latest technologies.
                        In conclusion, the trends shaping web development in 2025 reflect a growing emphasis on efficiency, user experience, and security. By embracing these advancements—ranging from AI integration to immersive technologies—developers can create more engaging and responsive websites that meet the evolving needs of users in an increasingly digital world. Staying informed about these trends will be vital for anyone looking to thrive in the fast-paced realm of web development.
                `,
                author: "Tedd Juma",
                date: "2025-02-16",
                category: "Web Development",
                image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
            },
            {
                id: 3,
                title: "Cybersecurity in the Age of AI",
                excerpt: "As artificial intelligence reshapes the cybersecurity landscape, organizations must navigate an evolving threat environment where AI is both a tool for defense and a weapon for cybercriminals.",
                content: `The integration of artificial intelligence (AI) into cybersecurity is transforming how organizations protect themselves against an ever-evolving array of threats. As we move through 2025, the dual role of AI—as both a defender and an adversary—presents unique challenges and opportunities for cybersecurity professionals.
                        In recent years, cybercriminals have increasingly harnessed AI to enhance their malicious activities. This trend is expected to accelerate, with adversaries deploying sophisticated AI-driven tactics to execute highly targeted phishing campaigns and develop advanced malware. The ability of AI to analyze vast amounts of data quickly allows attackers to identify vulnerabilities and craft personalized attacks that can bypass traditional security measures. As a result, the volume and sophistication of cyber threats are outpacing human defenses, making it imperative for organizations to adopt more robust security strategies.
                        One significant concern is the rise of generative AI technologies that can create convincing deepfake audio and video. These tools enable attackers to impersonate individuals or authority figures, increasing the effectiveness of social engineering attacks. The use of AI in reconnaissance also allows cybercriminals to automate information-gathering processes, making it easier to identify potential targets and exploit weaknesses in security configurations.
                        On the defensive side, organizations are increasingly leveraging AI to bolster their cybersecurity efforts. By implementing AI-driven tools, companies can monitor networks in real-time, analyze patterns in user behavior, and detect anomalies that may indicate a security breach. Predictive analytics powered by machine learning can help cybersecurity teams anticipate emerging threats based on historical data and trends, allowing for proactive measures rather than reactive responses.
                        The implementation of autonomous incident response systems is another promising development in the field. These systems can autonomously detect threats, quarantine malware, and isolate affected systems without human intervention. This capability not only enhances response times but also reduces the burden on cybersecurity teams, allowing them to focus on more complex tasks that require human expertise.
                        However, as AI becomes more prevalent in cybersecurity, ethical considerations must be addressed. The potential for misuse of AI technologies raises questions about accountability and transparency in both offensive and defensive applications. Organizations must ensure that their use of AI aligns with ethical standards while also protecting sensitive data from exploitation.
                        As we look ahead, collaboration within the cybersecurity community will be crucial for combating AI-driven threats. Sharing intelligence about emerging vulnerabilities and attack vectors can help organizations stay one step ahead of cybercriminals. Additionally, training employees to recognize sophisticated phishing attempts—especially those crafted using AI—will be essential for building a resilient workforce capable of defending against these advanced threats.
                        In conclusion, the age of AI presents both challenges and opportunities for cybersecurity. While malicious actors are increasingly leveraging AI to enhance their attacks, organizations have access to powerful tools that can improve their defenses. By embracing these technologies responsibly and fostering collaboration within the industry, we can navigate the complexities of cybersecurity in an era defined by artificial intelligence.
                `,
                author: "Tedd Juma",
                date: "2024-01-13",
                category: "Cybersecurity",
                image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3liZXIlMjBTZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
            },
            {
                id: 4,
                title: "The Rise of Quantum Computing",
                excerpt: "Understanding the potential of quantum computers",
                author: "Tedd Juma",
                date: "2024-01-12",
                category: "Innovation",
                image: "https://plus.unsplash.com/premium_photo-1690297732750-88ff82cb8542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFF1YW50dW0lMjBDb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
                content: "Quantum computing represents a fundamental shift in how we process information..."
            },
            {
                id: 5,
                title: "5G Technology and IoT",
                excerpt: "How 5G is revolutionizing the Internet of Things",
                author: "Tedd Juma",
                date: "2024-01-11",
                category: "Innovation",
                image: "https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SU9UfGVufDB8fDB8fHww",
                content: "The rollout of 5G networks is creating new possibilities for IoT devices and applications..."
            },
            {
                id: 6,
                title: "Machine Learning in Healthcare",
                excerpt: "Transforming patient care with AI",
                author: "Tedd Juma",
                date: "2024-01-10",
                category: "AI",
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhvc3BpdGFsfGVufDB8fDB8fHww",
                content: "Machine learning algorithms are revolutionizing healthcare diagnosis and treatment..."
            },
            {
                id: 7,
                title: "The Future of Cloud Computing",
                excerpt: "Next-generation cloud technologies",
                author: "Tedd Juma",
                date: "2024-01-09",
                category: "Web Development",
                image: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENsb3VkJTIwQ29tcHV0aW5nfGVufDB8fDB8fHww",
                content: "Cloud computing continues to evolve with new services and capabilities..."
            },
            {
                id: 8,
                title: "Blockchain Beyond Cryptocurrency",
                excerpt: "Exploring practical applications of blockchain",
                author: "Tedd Juma",
                date: "2024-01-08",
                category: "Innovation",
                image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3J5cHRvfGVufDB8fDB8fHww",
                content: "Blockchain technology is finding new applications beyond cryptocurrency..."
            }
        ];
    } catch (error) {
        reportError(error);
        return [];
    }
}

function searchArticles(query) {
    try {
        const articles = fetchArticles();
        if (!query) return articles;
        
        const lowercaseQuery = query.toLowerCase();
        return articles.filter(article => 
            article.title.toLowerCase().includes(lowercaseQuery) ||
            article.content.toLowerCase().includes(lowercaseQuery) ||
            article.excerpt.toLowerCase().includes(lowercaseQuery) ||
            article.category.toLowerCase().includes(lowercaseQuery)
        );
    } catch (error) {
        reportError(error);
        return [];
    }
}

function getArticlesByCategory(category) {
    try {
        const articles = fetchArticles();
        if (category === 'all') return articles;
        return articles.filter(article => article.category === category);
    } catch (error) {
        reportError(error);
        return [];
    }
}

function getFeaturedArticles() {
    try {
        const articles = fetchArticles();
        return articles.slice(0, 3);
    } catch (error) {
        reportError(error);
        return [];
    }
}

function getRecentArticles() {
    try {
        const articles = fetchArticles();
        return articles.slice(3, 9);
    } catch (error) {
        reportError(error);
        return [];
    }
}

