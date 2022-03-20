



function ButtonLogin(props) {
    const {setbuttonlogin} = props;
    const buttonLogin = ()=>{
        setbuttonlogin(true)
        
      }
    return(
        <button onClick={buttonLogin} className="btn-log">
            <b>Log in</b>
          </button>
    )
}

export default ButtonLogin