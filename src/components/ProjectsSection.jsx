import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
//add projects
    {
        id: 1,
        title: "Spring Boot Job portal",
        description: "A modern Job Portal built with Spring Boot that enables users to search for jobs, apply online, and manage their applications. Admins can manage postings and oversee user activity.",
        image: '/projects/project1.png',
        tags: ['Java', 'Spring Boot','JWT/OAuth2', 'Maven' ,'MySQL', 'Hibernate', 'HTML/CSS/JS/Thymeleaf'],
        url: 'https://springboot-job-portal-production.up.railway.app/',
        githubUrl: 'https://github.com/Ulugbek999/SpringBoot-job-portal',
    },
    {
        id: 2,
        title: "AI Chatbot Assistants",
        description: "AI Chatbot Portfolio Project is a multi-persona chatbot web application built with Flask. It features three distinct chatbots: a Clothing Store Assistant, a Tech Support Assistant, and a Travel Agency Assistant. The chatbots leverage OpenAI's GPT model for dynamic conversation, store user data in SQLite databases, and feature smooth, responsive UI animations.",
        image: '/projects/project2.png',
        tags: ['Python', 'SQLite', 'OpenAI Api', 'HTML/CSS/JS'],
        url: 'https://ai-chatbot-assistant-jz2s.onrender.com/',
        githubUrl: 'https://github.com/Ulugbek999/ai_chatbot_assistant',
    },    
    {
        id: 3,
        title: "One Good Thing mobile app",
        description: "One Good Thing is a thoughtfully crafted React Native app (built with Expo and Appwrite) that helps users reflect, record, and celebrate the positive moments in their lives — one day at a time. The app combines a beautiful themed UI, seamless authentication, a calendar-based tracker, and full CRUD support for daily entries.",
        image: '/projects/project3.png',
        tags: ['React-Native', 'Expo', 'Appwrite'],
        url: 'https://youtu.be/nJus8e-8JhM',
        githubUrl: 'https://github.com/Ulugbek999/One-good-thing-mobile-app',
    },
    {
        id: 4,
        title: "React Tic-Tac-Toe game",
        description: "An interactive React Tic-Tac-Toe game for two players!",
        image: '/projects/project4.png',
        tags: ['React', 'JavaScript'],
        url: 'https://github.com/Ulugbek999/React-Tic-Tac-Toe-game',
        githubUrl: 'https://github.com/Ulugbek999/React-Tic-Tac-Toe-game',
    },
    {
        id: 5,
        title: "React Investment Calculator",
        description: "A React-based investment calculator that lets you enter your initial investment, annual contribution, expected return rate, and duration, then calculates and displays your investment growth over time.",
        image: '/projects/project5.png',
        tags: ['React', 'JavaScript'],
        url: 'https://github.com/Ulugbek999/react-investment-calculator',
        githubUrl: 'https://github.com/Ulugbek999/react-investment-calculator',
    },
    {
        id: 6,
        title: "Unifier Database User Comparison Tool",
        description: "This Python-based tool was initially created to compare usernames across two large datasets (each with 6000+ entries) to identify mismatches and ensure consistency across systems. It’s designed to help developers, data engineers, or IT professionals perform fast, accurate username verification between databases.",
        image: '/projects/project6.png',
        tags: ['Python', 'Pandas', 'NumPy', 'Tkinter'],
        url: 'https://github.com/Ulugbek999/Username-comparison-tool',
        githubUrl: 'https://github.com/Ulugbek999/Username-comparison-tool',
    },        
]

export const ProjectsSection = () => {


    return (

        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
                    Some of my recent project, crafted with attention to detail, curiosity and passion!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-55 overflow-hidden">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-sx font-medium rounded-full bg-secondary text-secondary-force">{tag}</span>
                                        ))}
                                    </div>
                                
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.url} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink/>
                                        </a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github/>
                                        </a>
                                    </div>

                                </div>
                            </div>    
                        </div>
                    )) }
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/Ulugbek999" 
                        target="_blank"
                    >
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>    
            </div>
        </section>

    )
}