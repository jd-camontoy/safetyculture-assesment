export default function Header({ toggleModalFn }) {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="/assets/sc-logo-color.svg" alt="SafetyCulture Logo" />
            </div>
            <div className="header__search-box">
                <input type="text" placeholder="Search anything... (e.g devices)"></input>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header__user-actions">
                <div className="header__language-selector margin-right-20">
                    <i className="fa-solid fa-globe margin-right-8"></i>
                    <span>English (US)</span>
                    <i className="fa-solid fa-chevron-down margin-left-4"></i>
                </div>
                <button className="btn btn--primary btn--hollow margin-right-10">
                    <i className="fa-solid fa-arrow-right-to-bracket margin-right-5"></i>
                    Log in
                </button>
                <button className="btn btn--primary">
                    Contact us
                </button>
            </div>
            <div className="header__user-actions--mobile">
                <button className="btn btn--primary btn--hollow" onClick={toggleModalFn}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </header>
    );
}