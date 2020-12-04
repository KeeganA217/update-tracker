import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper red accent-2">
        <div className="container">
          <a href="#" class="brand-logo black-text">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
