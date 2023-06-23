import Illustrator from '../../../assets/icons/adobe-illustrator.svg'
import Photoshop from '../../../assets/icons/adobe-photoshop.svg'
import C from '../../../assets/icons/c.png'
import Cpp from '../../../assets/icons/c++.png'
import Css from '../../../assets/icons/css.png'
import Html from '../../../assets/icons/html.png'
import Java from '../../../assets/icons/java.png'
import Javascript from '../../../assets/icons/js.png'
import Node from '../../../assets/icons/nodejs.png'
import canva from '../../../assets/icons/canva.png'
import react from '../../../assets/icons/react.png'
import figma from '../../../assets/icons/figma.svg'
import firebase from '../../../assets/icons/Firebase.png'
import git from '../../../assets/icons/git.png'
import github from '../../../assets/icons/github.png'
import ps from '../../../assets/icons/photoshop.png'
import powerpoint from '../../../assets/icons/powerpoint.png'
import IRL from '../../../assets/icons/irl.jpeg'
import Ureckon from '../../../assets/icons/ureckon.png'

export default function HomeLogic () {

    const contributions = [
        {
            title: 'Ureckon',
            icon: Ureckon,
            link: 'https://ureckon.uem.edu.in/',
            position: 'Full Stack Developer',
            type: 'Part Time',
            description: `At Ureckon, UEM Kolkata's techno management festival, I took on the role of a full stack MERN developer. One of my notable contributions was the development of the complete registration portal for the event. The portal featured config-driven forms, where I leveraged Redux to efficiently manage the form's state, and utilized MongoDB to securely store all user data.\n\nThis project was a collaborative effort, as I worked in a team that included junior developers. Apart from the registration portal, I also developed various other pages, such as the events page, and actively participated in reviewing and providing feedback on pull requests on GitHub. Additionally, I had the opportunity to lead and manage the team, ensuring smooth progress and supporting the growth of the junior members.`,
        },
        {
            title: 'Ureckon (Debugger)',
            icon: Ureckon,
            link: 'https://ureckon.uem.edu.in/',
            position: 'Lead Coordinator',
            description: `As a lead coordinator of Debugger, an event at Ureckon, I effectively managed a team of five individuals to orchestrate a successful two-day event. Debugger is a coding quiz event that challenges participants to identify bugs in code. To facilitate this, I developed a quiz application from scratch using ReactJS. To ensure seamless access for approximately 70 computers, we hosted the application on our university's local network.\n\nThe application's success was further highlighted when another event, called Spyder, utilized it for their own event. This accomplishment showcased my ability to lead a team, create a functional application, and contribute to the overall success of the event.`
        },
        {
            title: 'IRL Amigo',
            icon: IRL,
            link: 'https://irlamigo.com/',
            position: 'Front End Developer',
            type: 'Part Time',
            description: 'I have contributed as a frontend developer specializing in React.js and Next.js within the IRL Amigo open-source web3 community. As part of my contributions, I have developed several components for the landing page, enhancing its functionality and user experience.',
        },
    ]

    return {
        contributions
    }

}

export const icons = [
    Illustrator,
    Photoshop,
    C,
    Cpp,
    Css,
    Html,
    Java,
    Javascript,
    Node,
    canva,
    react,
    figma,
    firebase,
    git,
    github,
    ps,
    powerpoint
]

