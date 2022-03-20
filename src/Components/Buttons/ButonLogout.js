
function ButtonLogout(props) {
    const {setToken} = props;

    const buttonLogout = ()=>{
        setToken('')
        
      }

    return(
        <button onClick={buttonLogout} className="btn-log">
            <b>Log out</b>
          </button>
    )
}

export default ButtonLogout