import React, { useContext }  from 'react'
import { Link} from 'react-router-dom'
import { MusicContext } from '../Context';

export default function SignUpNavbar() {

  const musicContext = useContext(MusicContext);
  const handleLogout = musicContext.handleLogout;



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Music App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {!localStorage.getItem('token')?
            <form className="d-flex " role="search">
              <Link className="btn btn-primary mx-2" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-2" to="/signup" role="button">
                SignUp
              </Link>
            </form>: <button className='btn btn-primary' onClick={handleLogout}>Logout</button> }
          </div>
        </div>
      </nav>
    </div>
  );
}
