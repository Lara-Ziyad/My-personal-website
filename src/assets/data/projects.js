import { v4 as uuidv4 } from 'uuid';
import EmojiImg from '../images/projects/emoji/1.png';
import EmojiCover from '../images/projects/emoji/emoji-project1.jpg';
import ContactCover from '../images/projects/contact/contact.jpg';
import ContactModal from '../images/projects/contact/C1.png';
import CoinTrackerImg from '../images/projects/workTeam/Team-project.webp';
import TeamModal from '../images/projects/workTeam/w1.png';
import LaraCover from '../images/projects/My website/LaraP.jpg';
import LaraModal from '../images/projects/My website/L1.png';
import GameCover from '../images/projects/Games/G11.png';
import GameModal from '../images/projects/Games/g1.png';
import JavaModal from '../images/projects/JavaScript/j1.png';
import JavaCover from '../images/projects/JavaScript/JC1.png';
const projects = [
  {
    
    id: uuidv4(),
    name: 'Emoji Tela',
    desc:
      'As a graduate project, four students and I have used Agiles project managment to create a  Social platform for writers to write short stories inspired by five random updatable emojis. It is a central place for writers to show their writings and fellow other writers and readers to read, like, and comment on their stories.',
    img: EmojiCover ,
    github: 'https://github.com/Lara-Ziyad/Emoji-Tale',
    tech: "Full stack MERN social platform with React hooks, context for State Mangment, Sass and Material UI for design, build an API & JWT authentication.",
    modalImg:EmojiImg,
  },
 {
    id: uuidv4(),
    name: "Contact App",
    desc: 'An application to save the contacts information, which includes the name, telephone number, email, and the type of the contacts. All data are editable, all contact endpoints are protected, and each registered user has their contacts. Brad Traversy directed the application functionality during the Udemy React course I completed, and I created my own style.',
    img: ContactCover,
    tech: "Full stack MERN contact application with React hooks, context for State Managment, CSS for design, build an API & JWT authentication. ",
    github: 'https://github.com/Lara-Ziyad/Contact-App',
    modalImg:ContactModal,
  },
  
  {
    id: uuidv4(),
    name: 'Team Work App',
    desc:
      'An application to track team members, tasks and issues with the ability to highlight the tasks or problems that need attention and add more members to the team.',
    img: CoinTrackerImg,
    github: 'https://github.com/Lara-Ziyad/Team-Work-App',
    tech: "React hooks uses Redux for state management, JSON-Server as a mock backend and MaterializeCSS for design. ",
    modalImg:TeamModal,
  },
  

  {
    id: uuidv4(),
    name: 'JavaScript - jQuery ',
    desc:
      'Sharpen my skills by building several quick, unique & fun mini projects.',
    img: JavaCover,
    github:'https://github.com/Lara-Ziyad/JavaScript-jQuey-Mini-Projects',
    tech: "HTML, CSS & JavaScript that relate to the DOM (Document Object Model).",
    modalImg:JavaModal,
  },
  {
    id: uuidv4(),
    name: 'Lara Kamper',
    desc: "A clean design with full responsiveness for my personal portfolio.",
    img: LaraCover,
    github: 'https://github.com/Lara-Ziyad/My-personal-website',
    tech: "React hooks responsive website, designed with Styled Components, used React Icons and Swiper js for interactive UI.",
    modalImg:LaraModal,
  },
  
  {
    id: uuidv4(),
    name: "Games",
    desc: '3 Simple games created using JavaScript, two of them were directed by Jonas Schmedtmann during the Udemy JavaScript course I completed.',
    img: GameCover,
    github: 'https://github.com/Lara-Ziyad/Games',
    tech: "Html file designed with CSS, used JavaScript for functionality.  ",
    modalImg:GameModal,
  },
 
];

export default projects;
