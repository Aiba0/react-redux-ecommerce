import React from "react";
import './Footer.css'
import whatsapp from '../../assets/img/whatsapp.svg'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer-logo">
                        Concept
                    </div>
                    <div className="social">
                        <div className='social__wp'> 
                        <img src='../../assets/img/whatsapp.svg' alt=""/></div>
                        <div className='social__fb'> </div>
                        <div className='social__yt'> </div>
                    </div>
                    <div className="numbers">+7 (708) 380 - 70 - 09</div>
                </div>
            </div>
        </div>
    )
}
