import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import { Link, useHistory} from "react-router-dom";
function Header({backButton}) {
  const history = useHistory();
  return (
    // BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      )}
      <Link to="/">

      <IconButton>
        <img
          className="header__icon"
          src="https://tinder.com/static/tinder.png"
          alt="tinder log"
        />
      </IconButton>
      </Link>
      <Link to="/chat">
        <IconButton>
          <MessageIcon className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
