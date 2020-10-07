import migrant from '../images/migrant.png'
import homesplit from '../images/homesplit.png'
import hyred from '../images/hyred.png'
import shell from '../images/shell.png'

const projects = [
    {
        name: 'Migrant Moments',
        desc: 'Built a blog to showcase the challenges and stories of Canadian Immigrants. In collaboration with Professor Azhar from Seneca College',
        tags: [
            'React',
            'Gatsby',
            'GraphQL',
            'Contenful CMS',
            'Algolia'
        ],
        image: [migrant]
    }, 
    {
        name: 'Hyred',
        desc: 'Built a mobile app that allows Canadian immigrants to find quick employment when they arrive in Canada. Submission for the Google DSC Solution\'s challenege 2020',
        tags: [
            'Flutter',
            'Firebase',
            'Firestore',
        ],
        image: [hyred]
    },
    {
        name: 'Java Mock Shell',
        desc: 'Built a mock shell built in Java to support various shell commands. Implemented Object Orientated programming and custom data structure to support directory system',
        tags: [
            'Java',
            'JUnit',
        ],
        image: [shell]
    },
    {
        name: 'Homesplit',
        desc: 'Built a web application for roomates to log costs and receive cost break down of who owes whom.',
        tags: [
            'React',
            'Firebase',
            'Redux'
        ],
        image: [homesplit]
    },
]

export default projects