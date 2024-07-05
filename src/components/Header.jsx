import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id='header'>
      <nav className='navbar'>
        <p
          id='logo'
          onClick={() => scroll.scrollToTop()}>
          CHANDU
        </p>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className={`link ${
                  activeLink === link.toLowerCase() ? 'active' : ''
                }`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
