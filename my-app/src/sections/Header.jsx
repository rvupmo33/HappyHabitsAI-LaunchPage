import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/lgo.png";

function Header() {
  return (
    <div className="headerContainer">
      <div className="barContainer">
        <div className="bar">
          <p>Build your confidence</p>
          <a href="#waitlist">
            Sign Up For Our Waitlist
            <FontAwesomeIcon
              icon={faArrowRightLong}
              size="xs"
              style={{ color: "#ffffff", marginLeft: "8px", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
      <header className="Screen">
        <div className="companyNameContainer">
          <img className="logoImg" src={Logo} alt="" />
          <h3>HAPPYHABITS</h3>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#about-us">Who Are We</a>
          <a href="#waitlist">
            <button className="btn btn-header">Join Waitlist</button>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
