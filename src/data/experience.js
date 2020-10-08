import validus from '../images/validus.png'
import rbc from '../images/rbc.png'

const experience = [
    {
        company: 'Royal Bank of Canada',
        title: 'Backend Developer',
        date: 'Sept 2020 - Present',
        bullets: [
            'Building a data API for distributing testing data for 1000+ developers that is hit 1,000,000+ times per year with ReactJS and ExpressJS.',
            'Implemented Jenkins batch functions to update MongoDB instances with 1000+ test client\'s information.',
            'Building out backend and frontend for single click client card creation tool for test business accounts.'
        ],
        tags: [
            'React',
            'Express JS',
            'MongoDB',
            'MySQL',
            'Jenkins',
            'Swagger',
            'Jira'
        ],
        image: [rbc]
    },
    {
        company: 'Valldus Research',
        title: 'Frontend Developer',
        date: 'June 2018 - Sept 2018',
        bullets: [
            'Built and maintained company\'s intranet frontend for 100+ network administrators to access company resources.',
            'Designed layout and built user interface using VueJS'
        ],
        tags: [
            'VueJS',
            'HTML',
            'CSS',
            'JavaScript',
        ],
        image: [validus]
    }, 
]

export default experience