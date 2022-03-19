import React from 'react'


function Header(props) {
    
    return(
        <header className="header">
            <section className="container-xl header-sec">
        <div className="header-left">
          <button className="btn-hamburger">
           
          </button>
          <div className="logo">
            <b>DEV</b>
          </div>
          <input
            type="search"
            name="search"
            className="search-input"
            placeholder="Search..."
          />
          <button className="btn-search">
            
           
          </button>
        </div>
        <div className="header-right">
          <button className="btn-log">
            <b>Log in</b>
          </button>
          <button className="btn-account">
            <b>Create account</b>
          </button>
        </div>
      </section>
        </header>
    )
}

export default Header