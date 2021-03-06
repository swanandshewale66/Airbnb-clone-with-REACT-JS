import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/SearchSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a Host</p>
        <LanguageSharpIcon />
        <ExpandMoreSharpIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
