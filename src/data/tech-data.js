//css
import css3 from '../img/css3.png';
import sass from '../img/sass.png';
import bootstrap from '../img/bootstrap.png';
import foundation from '../img/yeti.png';
import flexbox from '../img/flex-box.png';
//js
import jsLogo from '../img/js-logo.png';
import reactLogo from '../img/react-icon.png';
import reactRouterIcon from '../img/react-router.png';
import webpackLogo from '../img/webpack.png';

const techData = [
    {   
        id: 1,
        caption: 'CSS',
        skills: [
            {
                img: css3,
                name: "CSS3"
            },
            {
                img: flexbox,
                name: 'Flex-box'
            },
            {
                img: sass,
                name: "SASS"
            },
            {
                img: bootstrap,
                name: 'Bootstrap'
            },
            {
                img: foundation,
                name: 'Foundation'
            }
        ]
    },
    {   
        id: 2,
        caption: 'JS',
        article: 'js and frameworks',
        hiddenText: 'hidden text display here',
        skills: [
            {
                img: jsLogo,
                name: "JS ES6"
            },
            {
                img: webpackLogo,
                name: "Webpack"
            },
            {
                img: reactLogo,
                name: "React JS"
            },
            {
                img: reactRouterIcon,
                name: 'React-Router'
            }
        ]
    },
    {   
        id: 3,
        caption: 'Other soft',
        article: 'other techs like os and some things',
        hiddenText: 'hidden text display here',
    },
    {   
        id: 4,
        caption: 'Other soft',
        article: 'other techs like os and some things',
        hiddenText: 'hidden text display here',
        
    }
]

export default techData;