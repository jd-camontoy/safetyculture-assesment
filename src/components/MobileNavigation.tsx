export default function MobileNavigation({ toggleModalFn }) {
  return (
    <nav className="navigation--mobile">
      <div className="navigation--mobile__header">
        <img src="assets/sc-logo-color.svg" alt="SafetyCulture Logo" />
        <div className="navigation--mobile__header-actions">
          <button className="btn btn--primary btn--hollow margin-right-10">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="btn btn--icon-only" onClick={toggleModalFn}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <ul className="navigation--mobile__list">
        <li>
          <a href="#">Get started</a>
        </li>
        <li>
          <a href="#">Using SafetyCulture</a>
        </li>
        <li>
          <a href="#">Administration</a>
        </li>
        <li>
          <a href="#">Integrations</a>
        </li>
        <li>
          <a href="#">Account settings</a>
        </li>
        <li>
          <a href="#">Fixing problems</a>
        </li>
      </ul>
      <div className="navigation--mobile__language">
        <i className="fa-solid fa-globe margin-right-8"></i>
        <span>English (US)</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="navigation--mobile__user-actions">
        <button className="btn btn--primary btn--hollow margin-right-10">
          <i className="fa-solid fa-arrow-right-to-bracket margin-right-5"></i>
          Log in
        </button>
        <button className="btn btn--primary">Contact us</button>
      </div>
    </nav>
  );
}
