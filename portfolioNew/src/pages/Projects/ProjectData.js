import MedEasy from '../../../assets/images/medeasy.png'
import ytaudio from '../../../assets/images/ytaudio.png'
import currently from '../../../assets/images/currently.png'

export const reactProjects = [
    {
        title: 'QHub',
        description: 'QHub is a realtime Q&A web application that enables the user to login to the web-app natively or using Google authentication, and ask questions in the Q&A section. It has a very responsive UI and is powered by the StackOverflow API.',
        stack: ['react native', 'expo', 'firebase', 'css', 'materialUi'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: 2022,
        color: 'rgb(50,100,256)'
    },
    {
        title: 'MedEasy',
        description: 'MedEasy is a web application that enables the user to search for doctors and book their appointments online. It has a very clean and responsive UI.',
        stack: ['react', 'tailwindcss', 'mongodb', 'nodejs', 'expressjs'],
        image: MedEasy,
        year: 2023,
        git: 'https://github.com/pranaygoel02/MedEasy-Client',
        live: 'https://med-easy-client.vercel.app/',
        color: 'rgb(50,256,100)'
    },
    {
        title: 'YTAudio',
        description: 'YTAudio is a realtime music web application that enables the user to stream songs online. Users can make playlists, search for songs, and play them in the background.',
        stack: ['react', 'redux', 'materialUi', 'shazamApi'],
        image: ytaudio,
        year: 2023,
        git: 'https://github.com/pranaygoel02/YTAudio',
        live: 'https://yt-audio.vercel.app/',
        color: '#7209b7'
    },
    {
        title: 'Quiz Application',
        description: 'Quiz Application is a web application that enables the user to take quizzes on various topics. It has a very clean and responsive UI.',
        stack: ['react', 'tailwindcss'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: 2022,
        git: 'https://github.com/pranaygoel02/Debugger-Quiz/tree/master',
        color: '#1982c4'
    },
    {
        title: 'Currently.in',
        description: 'Currently.in is a realtime weather application that enables the user to login to the web-app natively or using Google authentication, and save/bookmark their favourite locations to look its weather quickly. It has a very responsive UI and is powered by the Accuweather API.',
        stack: ['react', 'firebase', 'css', 'materialUi', 'accuweatherApi'],
        image: currently,
        year: 2022,
        git: 'https://github.com/pranaygoel02/Weather-App/tree/dev',
        live: 'https://currently--in.web.app/',
        color: '#f72585'
    },
]

export const jsProjects = [
    {
        title: 'Bibliophilia',
        description: "Bibliophilia is a mock E-book application venture which happened as a part of UEMK's entrepreneurship subject. I made a static website to showcase an E-book subscription service.",
        stack: ['html', 'css', 'bootstrap', 'javascript'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: 2021,
    },
    {
        title: 'Blackjack Game',
        description: 'Blackjack is a popular card game. I have tried to implement the game logic via my code. I have also given the game a user friendly graphical interface that players would like.',
        stack: ['html', 'css', 'jquery', 'javascript'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: '2021',
    },
]

export const frontendMentorProjects = [
    {
        title: '3 Column Preview Card',
        stack: ['html', 'css', 'javascript'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: '2021',
    },
    {
        title: 'Statistics Card',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        stack: ['html', 'css', 'javascript'],
        year: '2021',
    },
    {
        title: 'NFT Card',
        stack: ['html', 'css', 'javascript'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: '2021',
    },
    {
        title: 'QR Code Card',
        stack: ['html', 'css', 'javascript'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: '2021',
    }
]

export const projects = [...reactProjects, ...jsProjects, ...frontendMentorProjects]

export const links = [
    {
        query: 'all',
        name: 'All',
        projects: projects
    },
    {
        query: 'react',
        name: 'React',
        projects: reactProjects
    },
    {
        query: 'javascript',
        name: 'JS',
        projects: jsProjects
    },
    {
        query: 'frontend-mentor-challenge',
        name: 'Frontend Mentor Challenge',
        projects: frontendMentorProjects
    },
]

