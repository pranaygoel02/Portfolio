import MedEasy from '../../assets/images/medeasy.png'
import ytaudio from '../../assets/images/ytaudio2.png'
import currently from '../../assets/images/currently2.png'
import spotlight from '../../assets/images/spotlight.png'
import dotmd from '../../assets/images/dotmd.png'
import qhub from '../../assets/images/qhub.png'
import bibliophilia from '../../assets/images/bibliophilia.png'
import blackjack from '../../assets/images/blackjack.png'
import nft from '../../assets/images/nft.png'
import qr from '../../assets/images/qr.png'
import stats from '../../assets/images/stats.png'
import column from '../../assets/images/column.png'

const reactProjects = [
    {
        title: 'SpotLight',
        description: 'Spotlight is a RSVP and Event Management Web App for Individual Creators that streamlines event planning process, effortlessly manage RSVPs, and unleash the creative vision with this intuitive platform.',
        stack: ['React.js', 'Appwrite', 'TailwindCSS', 'CSS'],
        image: spotlight,
        year: 2023,
        git: 'https://github.com/pranaygoel02/SpotLight',
        live: 'https://spot-light-appwrite.vercel.app/',
        color: 'rgb(256,100,50)'
    },
    {
        title: 'MedEasy',
        description: 'MedEasy is a web application that enables the user to search for doctors and book their appointments online.',
        stack: ['React.js', 'TailwindCSS', 'MongoDB', 'Node.js', 'Express.js'],
        image: MedEasy,
        year: 2023,
        git: 'https://github.com/pranaygoel02/MedEasy-Client',
        live: 'https://med-easy-client.vercel.app/',
        color: 'rgb(50,256,100)'
    },
    {
        title: 'YTAudio',
        description: 'YTAudio is a realtime music web application that enables the user to stream songs online. Users can make playlists, search for songs, and play them in the background.',
        stack: ['React.js', 'Redux', 'MaterialUI', 'ShazamApi'],
        image: ytaudio,
        year: 2023,
        git: 'https://github.com/pranaygoel02/YTAudio',
        live: 'https://yt-audio.vercel.app/',
        color: '#7209b7'
    },
    {
        title: 'Portfolio Website (Old)',
        description: 'This is my old portfolio website. It is hosted on Vercel. It is a responsive website and is mobile friendly.',
        stack: ['React.js', 'CSS', 'MaterialUI'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: 2022,
        git: 'https://github.com/pranaygoel02/Portfolio/tree/master/portfolio',
        live: 'https://pranaygoel.vercel.app/',
        color: 'rgb(256,100,50)'
    },
    {
        title: 'Debugger Quiz Application',
        description: 'Debugger Quiz is a web application that enables the user to take quizzes on various topics.',
        stack: ['React.js', 'TailwindCSS','Node.js', 'Express.js', 'MongoDB'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d71e854126521.594e1be39b6b1.png',
        year: 2022,
        git: 'https://github.com/pranaygoel02/Debugger-Quiz/tree/master',
        live: ''
    },
    {
        title: 'Currently.in',
        description: 'Currently.in is a realtime weather application that enables the user to login to the web-app natively or using Google authentication, and save/bookmark their favourite locations to look its weather quickly. It has a very responsive UI and is powered by the Accuweather API.',
        stack: ['React.js', 'Firebase', 'CSS', 'MaterialUI', 'accuweatherApi'],
        image: currently,
        year: 2022,
        git: 'https://github.com/pranaygoel02/Weather-App/tree/dev',
        live: 'https://currently--in.web.app/',
        color: '#f72585'
    },
]

const reactNativeProjects = [
    {
        title: 'QHub',
        description: 'QHub is a realtime Q&A web application that enables the user to login to the web-app natively or using Google authentication, and ask questions in the Q&A section. It has a very responsive UI and is powered by the StackOverflow API.',
        stack: ['React Native', 'Expo', 'Firebase', 'CSS', 'MaterialUI'],
        image: qhub,
        year: 2022,
        git: 'https://github.com/pranaygoel02/React-Native-User-Authentication-App/tree/dev',
        live: 'https://expo.dev/@pranay_goel/QHub?serviceType=classic&distributiion=expo-go',
        color: 'rgb(50,100,256)'
    }
]

const nextjsProjects = [
    {
        title: 'Dotmd',
        description: 'Dotmd is a web application that enables the user to write blogs and share them with the world. It has a very responsive UI and is powered by the Next.js framework.',
        stack: ['Next.js', 'TailwindCSS', 'OpenAi API'],
        image: dotmd,
        year: 2023,
        git: 'https://github.com/pranaygoel02/Github-Profile-Readme-Generator',
        live: 'https://dotmd.vercel.app/',
        color: 'rgb(256,100,50)'
    }
]

const jsProjects = [
    {
        title: 'Bibliophilia',
        description: "Bibliophilia is a mock E-book application venture which happened as a part of UEMK's entrepreneurship subject. I made a static website to showcase an E-book subscription service.",
        stack: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        image: bibliophilia,
        year: 2021,
        git: 'https://github.com/pranaygoel02/bibliophilia',
        live: 'https://pranaygoel02.github.io/bibliophilia/',
    },
    {
        title: 'Blackjack Game',
        description: 'Blackjack is a popular card game. I have tried to implement the game logic via my code. I have also given the game a user friendly graphical interface that players would like.',
        stack: ['HTML', 'CSS', 'JQuery', 'Javascript'],
        image: blackjack,
        year: 2021,
        git: 'https://github.com/pranaygoel02/Blackjack-Game',
        live: 'https://pranaygoel02.github.io/Blackjack-Game/'
    },
]

const frontendMentorProjects = [
    {
        title: '3 Column Preview Card',
        stack: ['HTML', 'CSS', 'Javascript'],
        image: column,
        year: 2021,
        git: 'https://github.com/pranaygoel02/3-Column-Car-preview-card',
        live: 'https://pranaygoel02.github.io/3-Column-Car-preview-card/'
    },
    {
        title: 'Statistics Card',
        image: stats,
        stack: ['HTML', 'CSS', 'Javascript'],
        year: 2021,
        git: 'https://github.com/pranaygoel02/Stats-Preview-Card',
        live: 'https://pranaygoel02.github.io/Stats-Preview-Card/'
    },
    {
        title: 'NFT Card',
        stack: ['HTML', 'CSS', 'Javascript'],
        image: nft,
        year: 2021,
        git: 'https://github.com/pranaygoel02/NFT-preview-card',
        live: 'https://pranaygoel02.github.io/NFT-preview-card/'
    },
    {
        title: 'QR Code Card',
        stack: ['HTML', 'CSS', 'Javascript'],
        image: qr,
        year: 2021,
        git: 'https://github.com/pranaygoel02/QR-Code-Element-Card',
        live: 'https://pranaygoel02.github.io/QR-Code-Element-Card/'
    }
]

const projects = {
    react: {
        name: 'ReactJs',
        projects: reactProjects
    },
    'react-native': {
        name: 'React Native',
        projects: reactNativeProjects
    },
    next: {
        name: 'NextJs',
        projects: nextjsProjects
    },
    javascript: {
        name: 'JS',
        projects: jsProjects
    },
    'frontend-mentor-challenge': {
        name: 'Frontend Mentor Challenge',
        projects: frontendMentorProjects
    }
}

export default projects;