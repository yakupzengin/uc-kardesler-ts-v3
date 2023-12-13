import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./TopNavbar.css"
const TopNavbar = () => {
    return (
        <div className='topbar'>
            <div className="topbar-container">
                <div className="row">
                    <div className="topbar-left">
                        <div className="top-info">
                            <div className='address-info'>

                                <CiLocationOn className='icon-left' />
                                <div className="icon-content">
                                    <span>Bursa</span>
                                </div>
                            </div>
                            <div className='address-info'>
                                <IoCallOutline className="icon-left" />
                                <div className="icon-content">
                                    <span>0553 803 64 75</span>
                                </div>
                            </div>
                            <div className='address-info'>
                                <CiClock1 className="icon-left" />
                                <div className="icon-content">
                                    <span>7/24 Kombi & Klima & Beyaz Eşya Servisi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topbar-right">
                        <div className="top-element">
                            <ul className='socials'>
                                <li>
                                    <a href="https://www.instagram.com/your_instagram_account" target='_blank' className='icon-instagram'>
                                        <FaInstagram className="icon-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/your_facebook_account" target='_blank' className='icon-facebook'>
                                        <CiFacebook  className="icon-facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/05538036475" target='_blank' className='icon-whatsapp'>
                                        <FaWhatsapp className="icon-whatsapp" />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:yakupzengin0@outlook.com.tr" target='_blank' className='icon-email'>
                                        <MdOutlineEmail className="icon-email" />  
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar 
