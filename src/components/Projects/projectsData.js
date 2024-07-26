import quizguruImage from '../../assets/images/project_images/quizguru.png';
import reactportfolioImage from '../../assets/images/project_images/react-portfolio.png';
import weatherwebsiteImage from '../../assets/images/project_images/weather-website.png';
import imagebgremoverImage from '../../assets/images/project_images/image-bg-remover.png';
import portfolioImage from '../../assets/images/project_images/portfolio.png';

const projects = [
    {
        index: 1,
        id: 'quizguru',
        title: 'QuizGuru',
        info: `I developed a real-time quiz platform named "QuizGuru". This full-stack application features a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js and Express.js. To store user data and quiz information securely, MongoDB was integrated into the project.

        QuizGuru offers a variety of quizzes, allowing users to test their knowledge on different topics. The platform includes user authentication to personalize the experience and track progress. Real-time score updates add an engaging element to the quiz-taking process`,
        tech: ['HTML5', 'CSS3', 'JS', 'NodeJS', 'ExpressJs', 'MongoDB'],
        image: quizguruImage,
        liveLink: 'https://quizguru.onrender.com/',
        sourceLink: 'https://github.com/ChanduDevelops/QuizGuru-v1',
    },
    {
        index: 2,
        id: 'reactportfolio',
        title: 'React Portfolio',
        info: `Dive into a dynamic showcase of my work, crafted with React and brought to life using Vite for lightning-fast performance. This portfolio is more than just a static display; it's an immersive experience featuring captivating animations that highlight my design sensibilities and development skills.

        Explore my projects, each a testament to my ability to blend aesthetics with functionality. Discover how I've leveraged React's power to create interactive and engaging user experiences. I invite you to navigate through my digital world and witness firsthand the synergy between design and development.`,
        tech: ['ReactJs', 'HTML5', 'CSS3', 'JS', 'NodeJS'],
        image: reactportfolioImage,
        liveLink: 'https://chandusreactportfolio.netlify.app/',
        sourceLink: 'https://github.com/ChanduDevelops/React-Portfolio',
    },
    {
        index: 3,
        id: 'weatherwebsite',
        title: 'Weather Website',
        info: `This project involved creating a responsive weather website built using HTML, CSS, and JavaScript. The website delivers real-time weather information based on user-specified locations. Users can easily input their desired location, and the website will then display current weather conditions in a dynamic format.
        
        A primary goal of the project was to provide a user-friendly and visually appealing interface. By incorporating interactive elements and clear presentation of weather data, the website aims to offer a valuable resource for users seeking quick and accurate weather updates. This project was completed in December 2023.`,
        tech: ['HTML5', 'CSS3', 'JS'],
        image: weatherwebsiteImage,
        liveLink: 'https://surfweather.netlify.app/',
        sourceLink: 'https://github.com/ChanduDevelops/Weather-website',
    },
    {
        index: 4,
        id: 'imagebgremover',
        title: 'Image BgRemover',
        info: `I developed a web application designed to efficiently remove backgrounds from images. This project leveraged the capabilities of HTML, CSS, and JavaScript to create a user-friendly interface. At the core of the application is the integration of the remove.bg API, which performs the background removal process.
        
        Once an image is uploaded, the API processes it and generates a version without the background. The processed image is then made available for download directly from the website. A key focus during development was to ensure the website's responsiveness, providing an optimal user experience across various devices.`,
        tech: ['HTML5', 'CSS3', 'JS'],
        image: imagebgremoverImage,
        liveLink: 'https://removemybg.netlify.app/',
        sourceLink:
            'https://github.com/ChanduDevelops/Image-Background-Remover',
    },
    {
        index: 5,
        id: 'portfolio',
        title: 'Portfolio',
        info: `This online portfolio is a curated collection of my professional work. Here, you'll find a comprehensive overview of my skills, experiences, and the projects I've been fortunate to contribute to. I invite you to explore my projects, learn about my approach to problem-solving, and discover how my expertise can potentially benefit your endeavors.

        Feel free to navigate through my portfolio at your leisure. If you have any questions, require further information, or are interested in collaborating on a project, please don't hesitate to reach out. I look forward to connecting with you.`,
        tech: ['HTML5', 'CSS3', 'JS'],
        image: portfolioImage,
        liveLink: 'https://chandu-personal-portfolio.netlify.app/',
        sourceLink: 'https://github.com/ChanduDevelops/My-Portfolio',
    },
];

export default projects;
