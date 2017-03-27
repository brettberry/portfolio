import React from 'react';
import FaCode from 'react-icons/lib/fa/code';
import './footer.styles.scss';

function Footer() {
    return (
      <div className="footerContainer">
        <a target="_blank"
           className="link"
           href="https://github.com/brettberry/portfolio">
           <div className="sourceContainer">
                <FaCode className="icon"/>
                <h3 className="footer">source code</h3>
                <FaCode className="icon"/>
            </div>
        </a>
      </div>
    );
}

export default Footer;
