import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <span className="logo-text">
          air<strong>BNC</strong>
        </span>
      </div>
      <div className="header-nav">
        <span className="nav-item">
          <a>Properties</a>
        </span>
        <span className="nav-item">
          <a>Your Profile</a>
        </span>
        <span className="dark-toggle">
          <FontAwesomeIcon icon="fa-solid fa-moon" />
          <FontAwesomeIcon icon="fa-solid fa-sun" />
        </span>
      </div>
    </div>
  );
}
