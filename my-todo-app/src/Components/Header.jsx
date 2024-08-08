import React, {useState} from 'react';

function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                Today's Tasks
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="/ContactForm">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Header;