"use client"

import React from 'react';
import Image from 'next/image';

import img1 from '../public/gallery/img1.png';
import img2 from '../public/gallery/img2.png';
import img3 from '../public/gallery/img3.png';
import img4 from '../public/gallery/img4.png';
import img5 from '../public/gallery/img5.png';
import img6 from '../public/gallery/img-6.png';
import img7 from '../public/gallery/img-7.png';
import mainLogo from '../public/mainlogo.svg';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const images = [
    [img5],
    [img1, img6],
    [img2],
    [img7, img3],
    [img4],
];

const contact = [
    {
        name: 'Sharon',
        number: '8848898282'
    },
    {
        name: 'Samriddhi',
        number: '8105544849'
    },
    {
        name: 'Anchal',
        number: '8707353650'
    },
    {
        name: 'Aprana',
        number: '9880205520'
    },
    {
        name: 'yeshwant',
        number: '9110635678'
    },
    {
        name: 'shuheb',
        number: '7676657686'
    },
]

const Footer = () => {


    return (

        <section className='footer'>
            <div className="container" id='contact'>
                <div className="sec-1">
                    <div className="outer">
                        <div className="empty"></div>
                        <div className="heading text-capitalize ">
                            in the middle of every difficulty lies <br /> <span className='green'> opportunity</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link className="get-start green" href={'/#home'} >Get Started</Link>
                    </div>
                </div>

                <div className="sec-2-gallery mt-5">
                    <div className="gallery">
                        <div className="list">
                            {images.map((group, groupIndex) => (
                                <div className="item" key={groupIndex}>
                                    {group.map((src, index) => (
                                        <Image key={index} src={src} alt={src} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="contact py-3">
                    <div className="content">
                        <div className="detial ">Contact Details</div>
                        <div className="name-number white text-capitalize d-flex flex-wrap">
                            {contact.map((ele, item) => (
                                <div className="item-1 mx-3" key={item}>
                                    {ele.name} : <span className='green'>{ele.number}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="links">
                    <div className="span-left"></div>
                    <div className="span-logo"><Image src={mainLogo} height={40} width={40} alt='logo' /></div>
                    <div className="span-right"></div>
                </div>

                <div className="social-links pb-5">
                    <div className="green mx-3">SAATI</div>

                    <div className="d-flex">
                        <FaInstagram size={15} className='mx-3' fill='#fff' />
                        <FaLinkedin size={15} className='mx-3' fill='#fff' />
                        <FaFacebook size={15} className='mx-3' fill='#fff' />
                        <FaTwitter size={15} className='mx-3' fill='#fff' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
