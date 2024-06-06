import React from "react"
import { Link } from "gatsby"
import { CONFIG } from "./config.js"

const Header = () => {
  const showHeader = CONFIG.showHeader

  return (
    <>
      <div id="pagehead" style={{ display: showHeader ? "block" : "none" }}>
        <div id="headlogo">
          <Link to="/">
            <img
              src="/images/company/mk1.png"
              alt="Raja Rathanam"
              title="Raja Rathanam"
              className="desktop-logo"
            />
            <img
              src="/images/company/mk4.png"
              alt="Raja Rathanam"
              title="Raja Rathanam"
              className="mobile-logo"
            />
 
          </Link>
        </div>
        <div id="menutabs">
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
           
            <li>
              <Link to="/Food-Cantaring" activeClassName="active">
                Food Cantering
              </Link>
            </li>
            <li>
              <Link to="/Convention" activeClassName="active">
                Convention Hall
              </Link>
            </li>
          
            <li>
              <Link to="/Room-Booking" activeClassName="active">
                Room Booking
              </Link>
            </li>
            <li>
              <Link to="/Suppliers" activeClassName="active">
                Supplier Items
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
            {/* ... other navigation items */}
          </ul>
        </div>
      </div>
  
    </>
  )
}

export default Header
