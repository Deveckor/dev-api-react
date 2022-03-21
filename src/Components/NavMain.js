import {Link} from 'react-router-dom';
import Style from './NavMain.scss'

function NavMain() {
    

    return (
        <nav className="mt-4">
            <Link to={'post'}>

          <span href=""><b>Post</b></span>
            </Link>
            <Link to={'writers'}>

          <span href="">Writers</span>
            </Link>
            <Link to={'CreatePost'}>

          <span href="">Create Post</span>
            </Link>
        </nav>

    )
}

export default NavMain;