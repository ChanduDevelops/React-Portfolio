const Header = () => {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <header id='header'>
      <nav className='navbar'>
        <p id='logo'>CHANDU</p>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
