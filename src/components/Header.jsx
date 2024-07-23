import { Link } from 'react-scroll';
import { GrLinkTop } from 'react-icons/gr'


const Header = () => {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <header id='header'>
      <nav className='navbar'>
        <Link to="home" smooth={true} duration={500}>
          <h1 id='logo'>
            CHANDU
          </h1>
        </Link>
        <ul>
          {links.map((link) => (
            <li key={link.toLowerCase()}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className='link'>
                {link}
              </Link>
            </li>
          ))}
        </ul>

      </nav>
      <a href="#home" className='move-top' title='Scroll Top'>
        <GrLinkTop />
      </a>
    </header>
  );
};

export default Header;