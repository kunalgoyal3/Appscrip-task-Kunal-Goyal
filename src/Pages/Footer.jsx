import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import usd_img from '../Components/Assets/usd_img.png';
import partner1_img from '../Components/Assets/partner1.png';
import partner2_img from '../Components/Assets/partner2.png';
import linkedin_icon from '../Components/Assets/linkedin_icon.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer1'>

                <div className="left-content">
                    <h2>BE THE FIRST TO KNOW</h2>
                    <p>Sign up for updates from Metta House.</p>
                    <div className="email-box">
                        <input type="email" placeholder="Enter your e-mail" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="right-content">
                    <div>
                        <h2>CONTACT US</h2>
                        <p>+44 434 34 4343</p>
                        <p>customercare@gamil.com</p>
                    </div>
                    <div>
                        <h2>CURRENCY</h2>
                        <div className="currency-info">
                            <img src={usd_img} alt="Currency" />
                            <p>USD</p>
                        </div>
                        <p>Transactions will be completed in Euros and a currency reference is available on hover</p>
                    </div>
                </div>
            </div>
            <div className='smallLine'></div>
            <div className='footer2'>

                <div className="footer2-content">
                    <div className='metta_muse'>
                        <h3>Metta Muse</h3>
                        <p><a href="#">About Us</a></p>
                        <p><a href="#">Stories</a></p>
                        <p><a href="#">Artisans</a></p>
                        <p><a href="#">Boutiques</a></p>
                        <p><a href="#">Contact Us</a></p>
                        <p><a href="#">EU Compliances Docs</a></p>
                    </div>
                    <div className='quick_links'>
                        <h3>QUICK LINKS</h3>
                        <p><a href="#">Orders & Shipping</a></p>
                        <p><a href="#">Join/Login as a Seller</a></p>
                        <p><a href="#">Payment & Pricing</a></p>
                        <p><a href="#">Return & Refunds</a></p>
                        <p><a href="#">FAQs</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Terms & Conditions</a></p>
                    </div>
                    <div className='follow'>
                        <h3>FOLLOW US</h3>
                        <div className="social-icons">
                            <img src={linkedin_icon} alt="Social Icon" />
                            <img src={linkedin_icon} alt="Social Icon" />
                        </div>
                        <h3>METTA HOUSE ACCEPTS</h3>
                        <div className="partner-icons">
                            <img src={partner1_img} alt="Partner Icon" />
                            <img src={partner2_img} alt="Partner Icon" />
                            <img src={partner1_img} alt="Partner Icon" />
                            <img src={partner2_img} alt="Partner Icon" />
                            <img src={partner1_img} alt="Partner Icon" />
                        </div>
                    </div>
                </div>
                    <div className='copyright'>
                        <p>Copyright 2023 mettamuse. All rights reserved</p>
                    </div>
            </div>

        </footer>
    );
}

export default Footer;
