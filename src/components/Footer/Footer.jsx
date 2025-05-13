import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer">
            <hr className="footer-top-divider" aria-hidden="true" />

            <div className="footer-top">
                <div className="footer-section-container">
                    <h3 className="section-title">In Edicola</h3>
                    <div className="footer-content-box">
                        <img src="https://placehold.co/270x155" alt="Universo funghi" className="footer-image" />
                        <h4 className="content-title">Universo funghi</h4>
                        <a href="#" className="scopri-btn">Scopri</a>
                    </div>
                </div>

                <div className="footer-section-container">
                    <h3 className="section-title">Le Riviste</h3>
                    <div className="footer-content-box">
                        <img src="https://placehold.co/270x155" alt="Moltobene" className="footer-image" />
                        <h4 className="content-title">Moltobene</h4>
                        <a href="#" className="scopri-btn">Scopri</a>
                    </div>
                </div>

                <div className="footer-section-container">
                    <h3 className="section-title">Il quotidiano</h3>
                    <div className="footer-content-box blue-box">
                        <img src="https://placehold.co/270x155" alt="Gazzetta di Mantova" className="footer-image newspaper-img" />
                        <a href="#" className="abbonati-btn">Abbonati</a>
                        <a href="#" className="login-link">Già abbonato? Accedi</a>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" aria-hidden="true" />

            <div className="footer-middle">
                <div className="footer-nav-row">
                    <div className="footer-links">
                        <a href="#">Pubblicità</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookie</a>
                        <a href="#">Consensi</a>
                        <a href="#">Contatti</a>
                        <a href="#">Chi siamo</a>
                    </div>
                    <div className="footer-right-items">
                        <div className="footer-social">
                            <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
                            <a href="#" aria-label="Youtube"><FaYoutube /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
                        </div>
                        <a href="#" className="necrologie-link">Necrologie</a>
                        <a href="#" className="abbonati-link">Abbonati</a>
                    </div>
                </div>
            </div>

            <hr className="footer-bottom-divider" aria-hidden="true" />

            <div className="footer-bottom">
                <div className="gruppo-section">
                    <h4 className="gruppo-title">IL GRUPPO</h4>
                    <div className="group-logos">
                        <img src="https://placehold.co/70x46" alt="Athesis" className="group-logo" />
                        <img src="https://placehold.co/70x46" alt="L'Arena" className="group-logo" />
                        <img src="https://placehold.co/70x46" alt="Il Giornale di Vicenza" className="group-logo" />
                        <img src="https://placehold.co/75x46" alt="Bresciaoggi" className="group-logo" />
                        <img src="https://placehold.co/75x46" alt="Gazzetta di Mantova" className="group-logo" />
                        <img src="https://placehold.co/77x46" alt="Publiadige" className="group-logo" />
                        <img src="https://placehold.co/65x46" alt="Radio Verona" className="group-logo" />
                        <img src="https://placehold.co/77x46" alt="Telearena" className="group-logo" />
                        <img src="https://placehold.co/70x46" alt="Telenuovo" className="group-logo" />
                        <img src="https://placehold.co/70x46" alt="Neri Pozza" className="group-logo" />
                        <img src="https://placehold.co/75x46" alt="ITS" className="group-logo" />
                        <img src="https://placehold.co/65x46" alt="ZEEP!" className="group-logo" />
                    </div>
                </div>
                <div className="company-section">
                    <p className="company-info">Gazzetta di Mantova S.r.l. – Corso Porta Nuova, 67 – I-37122 Verona (VR) – REA VR-461759 – Cap. soc. i.v.: 5.000.000,00 Euro – P.IVA e C.F. 04990130231</p>
                    <p className="copyright">Copyright © 2025 – Tutti i diritti riservati</p>
                </div>
                <span className="footer-number">117</span>
            </div>
        </footer>
    );
};

export default Footer;
