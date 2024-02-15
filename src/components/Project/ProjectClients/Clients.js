import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar2 from '../../../assets/images/avatar2.jpg'
import { Link } from 'react-router-dom';

const Clients = () => {


    const cardsData = [
        {
            imgclient: avatar1,
            name: 'Michelle Green',
            email: 'jason-porter@info.com',
            socialLinks: [
                { icon: faFacebook, link: '/#' },
                { icon: faTwitter, link: '/#' },
                { icon: faLinkedin, link: '/#' },
                { icon: faInstagram, link: '/#' }
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
                { icon: faTwitter, link: '/#' },
                { icon: faFacebook, link: '/#' },
                { icon: faLinkedin, link: '/#' },
                { icon: faInstagram, link: '/#' }
            ],
            projects: 14,
            dealAmount: 7510,
            ribbonText: 'India',
            ribbonColor: 'orange'
        },
        
    ];

    const Card = ({ imgclient, name, email, socialLinks, projects, dealAmount, ribbonText, ribbonColor }) => (
        <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
            <div className="card">
                <div className="card-body text-center ribbon">
                    <div className={`ribbon-box ${ribbonColor}`}>{ribbonText}</div>
                    <img className="rounded-circle img-thumbnail w100" src={imgclient} alt="fake_url" />
                    <h6 className="mt-3 mb-0">{name}</h6>
                    <span>{email}</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        {socialLinks.map((item, index) => (
                            <li key={index}>
                                <Link className="p-3" target="_blank" to={item.link}>
                                    <FontAwesomeIcon icon={item.icon} className='client-social-icon'/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-default btn-sm client-view-btn">View Profile</button>
                    <button className="btn btn-default btn-sm client-view-btn mx-2" href={`mailto:${email}`}>Email</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                            <label className="mb-0">Project</label>
                            <h4 className="font-18">{projects}</h4>
                        </div>
                        <div className="col-lg-6">
                            <label className="mb-0">Deal</label>
                            <h4 className="font-18">${dealAmount}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="row">
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}

        </div>
    );
};

export default Clients;
