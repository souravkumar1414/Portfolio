// Navigation functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    document.querySelectorAll('.about-card, .project-card, .timeline-item, .skill-category').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Load projects data
    loadProjects();
    
    // Load experience data
    loadExperience();
    
    // Load skills data
    loadSkills();
    
    // Load certifications data
    loadCertifications();
});

// Projects data and rendering
const projects = [
    {
        title: "Stock Prediction Model",
        description: "Developed multiple stock price prediction models using Machine Learning and Deep Learning techniques, improving forecasting accuracy by evaluating and comparing model performance across algorithms such as LSTM, ARIMA, and Prophet.",
        technologies: ["Python", "Numpy", "LSTM", "Matplotlib"],
        image: "📊",
        links: {
            github: "https://github.com/souravkumar1414/Stock-Market"
        }
    },
    {
        title: "CineScope- Movie Discovery App",
        description: " Designed a responsive, single-page app using React 19, Tailwind CSS , and Vite, enabling users to browse movie details via TMDBAPI, with a clean UI optimized for engagement.",
        technologies: ["React.js", "Tailwind CSS", "Vite", "Appwrite", "TMDB API"],
        image: "📱",
        links: {
            github: "https://github.com/souravkumar1414/CineScope"
        }
    },
    {
        title: "NeuroFin- Classification Tool(Transfer Learning)",
        description: "Trained an image classification model using transfer learning with MobileNetV3-Large and a dataset of 9,000 images to accurately classify 9 fish species with 90% overall accuracy and reducing reliance on manual inspection.",
        technologies: ["Python","Image Preprocessing", "Data Augmentation"],
        image: "🤖",
        links: {
            github: "#"
        }
    },
    {
        title: "Tech Company Dax Project and Power BI Dashboard",
        description: "Consists of  Business Intelligence solution built using Microsoft Power BI Desktop. Our main aim  was to take a large and messy dataset of a technology company and turn it into a clean, interactive, and visually appealing dashboard that anyone can use to understand the business performance at a glance.",
        technologies: ["Microsoft Excel", "DAX", "Power Query Editor", "VeriPaq Engine"],
        image: "📊",
        links: {
            github: "#"
        }
    }
    
];

function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.links.github}" target="main" class="project-link link-secondary">GitHub</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        observer.observe(projectCard);
    });
}

// Experience data and rendering
const experiences = [
    {
        date: "Jun 2025 - July 2025",
        title: "Healthcare Cost Prediction",
        company: "IBM India",
        description: " Assisted in collecting and preprocessing structured healthcare datasets. Supported exploratory data analysis (EDA) to uncover cost-driving factors."
    },
    {
        date: "June 2024 - Feb 2024",
        title: "Social Work Intern",
        company: "Samadhaan Foundation",
        description: "Assisted in community outreach programs. Conducteddata analysis and helped in digital management initiatives."
    },
];

function loadExperience() {
    const timeline = document.getElementById('timeline');
    
    experiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-description">${exp.description}</p>
            </div>
            <div class="timeline-dot"></div>
        `;
        
        timeline.appendChild(timelineItem);
        observer.observe(timelineItem);
    });
}

// Skills data and rendering
const skillsData = {
    "Programming Languages": [
        { name: "JavaScript", icon: "💻" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "SQL", icon: "🗃️" }
    ],
    "Tools & Platforms": [
        { name: "Git", icon: "🔧" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Google Colab", icon: "🐘" },
        { name: "Pycharm", icon: "🔥" }
    ]
};

function loadSkills() {
    const skillsContainer = document.getElementById('skills-categories');
    
    Object.entries(skillsData).forEach(([category, skills]) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category fade-in';
        
        skillCategory.innerHTML = `
            <h3>${category}</h3>
            <div class="skills-list">
                ${skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-icon">${skill.icon}</div>
                        <div class="skill-name">${skill.name}</div>
                    </div>
                `).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(skillCategory);
        observer.observe(skillCategory);
    });
}

// Certifications data and rendering
const certifications = [
    {
        name: "Data Strcture and Alogrithms(DSA)",
        issuer: "CourseEra"
    },
    {
        name: "Healthcare Cost Prediction",
        issuer: "IBM Certified Internship"
    },
    {
        name: "Python Programming",
        issuer: "Code with Harry"
    },
    {
        name: "CS50's IntroductiontoArtificial Intelligence with Python",
        issuer: "HarvardCS50AI"
    },
    {
        name: "Microsoft certified",
        issuer: "Azure AI fundamentals(AI-900)"
    }
];

function loadCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    
    certifications.forEach((cert, index) => {
        const certItem = document.createElement('div');
        certItem.className = 'certification-item';
        certItem.style.animationDelay = `${index * 0.1}s`;
        
        certItem.innerHTML = `
            <div class="certification-name">${cert.name}</div>
            <div class="certification-issuer">${cert.issuer}</div>
        `;
        
        certificationsGrid.appendChild(certItem);
    });
}

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

// Navigation background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.borderBottomColor = 'rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.borderBottomColor = 'rgba(0, 0, 0, 0.05)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        typeWriter(heroName, 'Adhway', 150);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero::before');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
