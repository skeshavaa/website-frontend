import migrant from '../images/migrant.png'
import homesplit from '../images/homesplit.png'
import hyred from '../images/hyred.png'
import shell from '../images/shell.png'
import artsideout from '../images/artsideout.PNG'
import ftb from '../images/ftb.PNG'
import indieThreads from '../images/indie-threads.PNG'
import onboarding from '../images/onboarding2.PNG'

const projects = [
    {
        name: 'Indie Threads',
        desc: 'A forum website for indie game developers and lovers to share their games. Users can submit and discuss about various indie games!',
        tags: [
            'React',
            'Firebase',
        ],
        image: [indieThreads],
        code: 'https://github.com/anjali-001/indie-threads',
        project: ''
    },
    {
        name: 'Front to Back Generator',
        desc: 'A CLI tool to help developers create frontend, backend and fullstack applications with options to configure a database, documentation and deployment with docker',
        tags: [
            'React',
            'Django',
            'MongoDB',
            'Docker',
            'Swagger'
        ],
        image: [ftb],
        code: 'https://github.com/GunaShekar02/generator-front-to-back',
        project: 'https://www.npmjs.com/package/generator-front-to-back'
    },
    {
        name: 'Onboarding Bot',
        desc: 'A slack bot for onboarding new developers to request access to developer resources and groups. Used by 100+ developer teams!',
        tags: [
            'Python',
            'Flask',
            'Slack API'
        ],
        image: [onboarding],
        code: 'https://www.linkedin.com/posts/keshavaa_onboarding-bot-team-6-3rd-place-rbc-innovation-activity-6730891008944459776-Ia3W/',
        project: 'https://www.linkedin.com/posts/keshavaa_onboarding-bot-team-6-3rd-place-rbc-innovation-activity-6730891008944459776-Ia3W/'
    },
    {
        name: 'ARTSIDEOUT',
        desc: 'Lead a team of 5 developers to develop a flutter app for UofTs annual art exhibition. App is enhanced for both in person and virtual exhibits',
        tags: [
            'Flutter on the Web',
            'GraphCMS',
        ],
        image: [artsideout],
        code: 'https://github.com/skeshavaa/artsideout_app',
        project: 'https://artsideout.ca/'
    },
    {
        name: 'Stories of Canadian Immigrants',
        desc: 'Built a blog to showcase the challenges and stories of Canadian Immigrants. In collaboration with Professor Azhar from Seneca College',
        tags: [
            'React',
            'Gatsby',
            'GraphQL',
            'Contenful CMS',
            'Algolia'
        ],
        image: [migrant],
        code: 'https://github.com/skeshavaa/Pear-Impact-Project',
        project: 'https://canadian-immigrants.netlify.app/'
    }, 
    {
        name: 'Hyred',
        desc: 'Built a mobile app that allows Canadian immigrants to find quick employment when they arrive in Canada. Submission for the Google DSC Solution\'s challenege 2020',
        tags: [
            'Flutter',
            'Firebase',
            'Firestore',
        ],
        image: [hyred],
        code: 'https://github.com/dart-dinosaurs/hyred',
        project: 'https://www.youtube.com/watch?v=vw_pRcdN08k'
    },
    {
        name: 'Java Mock Shell',
        desc: 'Built a mock shell built in Java to support various shell commands. Implemented Object Orientated programming and custom data structure to support directory system',
        tags: [
            'Java',
            'JUnit',
        ],
        image: [shell],
        code:  'https://github.com/ShawnGeorge03/CSCB07-MockShell'
    },
    {
        name: 'Homesplit',
        desc: 'Built a web application for roomates to log costs and receive cost break down of who owes whom.',
        tags: [
            'React',
            'Firebase',
            'Redux'
        ],
        image: [homesplit],
        code: 'https://github.com/skeshavaa/Homesplit',
        project: 'https://homesplit-abb79.web.app/signin'
    },
]

export default projects