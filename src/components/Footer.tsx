export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__mobile-app-links">
                <img className="img--logo" src="assets/sc-logo-color.svg" alt="SafetyCulture Logo" />
                <img className="img--apple-badge" src="assets/app-store.svg" alt="SafetyCulture Apple App Store Badge" />
                <img className="img--google-badge" src="assets/google-play-store.svg" alt="SafetyCulture Google Play Store Badge" />
            </div>
            <div className="footer__links">
                <div className="footer__nav">
                    <ul>
                        <li>
                            <a href="#">Status</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="#">Security</a>
                        </li>
                        <li>
                            &copy; SafetyCulture 2023
                        </li>
                    </ul>
                </div>
                <div className="footer__socials">
                    <a href="#">
                        <img src="assets/socials/instagram.svg" alt="Instagram Icon for SafetyCulture social" />
                    </a>
                    <a href="#">
                        <img src="assets/socials/twitter.svg" alt="Twitter Icon for SafetyCulture social" />
                    </a>
                    <a href="#">
                        <img src="assets/socials/linkedin.svg" alt="LinkedIn Icon for SafetyCulture social" />
                    </a>
                    <a href="#">
                        <img src="assets/socials/youtube.svg" alt="YouTube Icon for SafetyCulture social" />
                    </a>
                </div>
            </div>
        </footer>
    );
}