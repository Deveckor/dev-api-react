import React from 'react'
import Style from './Header.scss'
import ButtonLogin from './Buttons/BottonLogin'
import ButtonLogout from './Buttons/ButonLogout'

function Header(props) {
      const {setbuttonlogin, token, setToken} = props

      
      

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
          {!token ? 
          <ButtonLogin
          setbuttonlogin = {setbuttonlogin}
          />
          : <ButtonLogout
          setToken = {setToken}
          />}
          <button  className="btn-account">
            <b>Create account</b>
          </button>
        </div>
      </section>
        </header>
    )
}

export default Header