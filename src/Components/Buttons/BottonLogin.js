import {Link} from 'react-router-dom'



function ButtonLogin() {
   
   
    return(
        <Link to={'login'}>

        <button className="btn-log">
            <b>Log in</b>
          </button>
        </Link>
    )
}

export default ButtonLogin