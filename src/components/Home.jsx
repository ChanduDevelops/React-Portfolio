import PortfolioImage from '../assets/images/portfolio image.jpeg';
import Resume from '../assets/files/BHUVAN_CHANDU_2024.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdMail } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';
import { useState } from 'react';

const Home = () => {
  const [subtitleWord] = useTypewriter({
    words: ['Software Engineer', 'FullStack Developer', 'Coder', 'Designer'],
    loop: true,
  });
  const [btnVisible, setBtnVisible] = useState(false);

  const toggleButtonVisibility = () => {
    setBtnVisible(true);
  };

  const hideButtonVisibility = () => {
    setBtnVisible(false);
  };
  return (
    <section id='home'>
      <div className='left'>
        <div className='title'>
          Hello, I&apos;m <br /><span className='name'>BHUVAN CHANDU</span>
        </div>

        <div className='sub-title'>
          <span className='static-txt'> I am a</span>
          <div className='dynamic-txt'>
            {subtitleWord}
            <Cursor
              cursorColor='#ff6464'
              cursorStyle='_' />
          </div>

        </div>
        <div className="about">As a recent CSE graduate with a strong academic background in Computer Science and hands-on experience in Full Stack Web development, I am seeking an entry-level position that allows me to utilize my technical skills and eagerness to learn.
        </div>

        <div className='contacts'>
          <div className='cv btn' onMouseOver={toggleButtonVisibility} onMouseOut={hideButtonVisibility}>
            {
              btnVisible ?
                <a href={Resume} download className='btn'><FaDownload /> Resume</a> : <IoDocumentText />
            }
          </div>
          <a className='linkedin btn' href='https://www.linkedin.com/in/chandu-cs/' target='_blank'>
            <FaLinkedin />
          </a>
          <a className='github btn' href='https://github.com/ChanduDevelops' target='_blank'>
            <FaGithub />
          </a>
          <a className='mail btn' href='mailto:bhuvanchandumidde3@gmail.com'>
            <MdMail />
          </a>
        </div>

      </div>
      <div className='right'>
        <img
          src={PortfolioImage}
          alt='My_image'
        />
      </div>
    </section>
  );
};

export default Home;
