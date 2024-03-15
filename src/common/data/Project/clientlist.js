import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar2 from '../../../assets/images/avatar2.jpg'
import { faFacebook, faLinkedin, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';



const clientdata = [
    {
        imgclient: avatar1,
        name: 'Michelle Green',
        email: 'jason-porter@info.com',
        socialLinks: [
            { icon: faFacebook, link: 'http://www.facebook.com' },
            { icon: faTwitter, link: 'http://www.twitter.com' },
            { icon: faLinkedin, link: '/#' },
            { icon: faInstagram, link: 'http://www.instagram.com' }
        ],
        projects: 7,
        dealAmount: 2510,
        ribbonText: 'New',
        ribbonColor: 'green'
    },

    {
        imgclient: avatar2,
        name: 'David Wallace',
        email: 'Michelle@info.com',
        socialLinks: [
            { icon: faTwitter, link: 'http://www.twitter.com' },
            { icon: faFacebook, link: 'http://www.facebook.com' },
            { icon: faLinkedin, link: '/#' },
            { icon: faInstagram, link: 'http://www.instagram.com' }
        ],
        projects: 14,
        dealAmount: 7510,
        ribbonText: 'India',
        ribbonColor: 'orange'
    },
    
];

export  {clientdata};