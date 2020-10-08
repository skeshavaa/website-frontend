import migrant from '../images/migrant.png'
import homesplit from '../images/homesplit.png'
import hyred from '../images/hyred.png'
import shell from '../images/shell.png'

const projects = [
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
        project: ''
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