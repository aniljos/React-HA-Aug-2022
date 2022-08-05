
import {Link} from 'react-router-dom';
import {appRoutes} from '../routes/routes';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Training
          </a>
          <ul className="nav">

            {appRoutes.filter(item => item.isMenuItem).map((item , index) => {
                return (
                    <li key={item.path} className="nav-item">
                            <Link className="nav-link" to={item.path}>{item.title}</Link>
                    </li>
                )
            })}


            {/* <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
