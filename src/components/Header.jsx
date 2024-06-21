const Header = () => {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const linksMapped = links.map((link, index) => (
    <li key={index}>
      <a href={`#${link}`}>{link}</a>
    </li>
  ));
  return (
    <header id='header'>
      <div className='nav'>
        <p id='logo'>CHANDU</p>
        <ul>{linksMapped}</ul>
      </div>
    </header>
  );
};

export default Header;
