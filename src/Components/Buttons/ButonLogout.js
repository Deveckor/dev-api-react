import {useNavigate} from 'react-router-dom'


function ButtonLogout(props) {
  let navigate = useNavigate();
    const {setToken, setIsLogin} = props;

    const buttonLogout = ()=>{
        setToken('')
        setIsLogin(false)
        navigate('/')
      }

    return(
        

        <button onClick={buttonLogout} className="btn-log">
            <b>Log out</b>
          </button>
        
    )
}

export default ButtonLogout