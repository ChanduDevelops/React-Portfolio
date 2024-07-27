import PortfolioImage from '../assets/images/sinchan_nobg0.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import { MdMail } from 'react-icons/md';
import { useReducer } from 'react';

const Home = () => {
  const [subtitleWord] = useTypewriter({
    words: [
      'Software Engineer.',
      'FullStack Developer.',
      'Coder.',
      'Designer.',
    ],
    loop: true,
  });

  const visibilityIntialStates = {
    resumeBtnVisible: false,
    linkedinBtnVisible: false,
    gitHubBtnVisible: false,
    mailBtnVisible: false,
  };
  const visibilityReducer = (state, action) => {
    switch (action.type) {
      case 'SHOW_RESUME':
        return { ...state, resumeBtnVisible: true };
      case 'SHOW_LINKEDIN':
        return { ...state, linkedinBtnVisible: true };
      case 'SHOW_GITHUB':
        return { ...state, gitHubBtnVisible: true };
      case 'SHOW_MAIL':
        return { ...state, mailBtnVisible: true };

      case 'HIDE_RESUME':
        return { ...state, resumeBtnVisible: false };
      case 'HIDE_LINKEDIN':
        return { ...state, linkedinBtnVisible: false };
      case 'HIDE_GITHUB':
        return { ...state, gitHubBtnVisible: false };
      case 'HIDE_MAIL':
        return { ...state, mailBtnVisible: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(
    visibilityReducer,
    visibilityIntialStates
  );
  const name = 'BHUVAN CHANDU';

  return (
    <section id='home'>
      <div className='left'>
        <div className='title'>
          Hello, I&apos;m <br />
          <span
            className='name'
            data-name={name}>
            {name}
          </span>
        </div>

        <div className='sub-title'>
          <span className='static-txt'> I am a</span>
          <div className='dynamic-txt'>
            {subtitleWord}
            <Cursor
              cursorColor='#ff6464'
              cursorStyle='_'
            />
          </div>
        </div>
        <div className='about'>
          As a recent CSE graduate with a strong academic background in Computer
          Science and hands-on experience in Full Stack Web development, I am
          seeking an entry-level position that allows me to utilize my technical
          skills and eagerness to learn.
        </div>

        <div className='contacts'>
          <div
            className='btn cv'
            onMouseOver={() => {
              dispatch({ type: 'SHOW_RESUME' });
            }}
            onMouseOut={() => {
              dispatch({ type: 'HIDE_RESUME' });
            }}>
            <a href='https://drive.google.com/uc?export=download&id=1qmwBCNbCirlc-seWCTYG1BIEURadX_Fd'>
              {state.resumeBtnVisible ? (
                <>
                  <FaDownload className='icon' />
                  <span>Resume</span>
                </>
              ) : (
                <IoDocumentText className='icon' />
              )}
            </a>
          </div>
          <div
            className='linkedin btn'
            onMouseOver={() => {
              dispatch({ type: 'SHOW_LINKEDIN' });
            }}
            onMouseOut={() => {
              dispatch({ type: 'HIDE_LINKEDIN' });
            }}>
            <a
              href='https://www.linkedin.com/in/chandu-cs/'
              target='_blank'>
              <FaLinkedinIn className='icon' />
              {state.linkedinBtnVisible ? <span>LinkedIn</span> : null}
            </a>
          </div>
          <div
            className='github btn'
            onMouseOver={() => {
              dispatch({ type: 'SHOW_GITHUB' });
            }}
            onMouseOut={() => {
              dispatch({ type: 'HIDE_GITHUB' });
            }}>
            <a
              href='https://github.com/ChanduDevelops'
              target='_blank'>
              <FaGithub className='icon' />
              {state.gitHubBtnVisible ? <span>GitHub</span> : ''}
            </a>
          </div>
          <div
            className='mail btn'
            onMouseOver={() => {
              dispatch({ type: 'SHOW_MAIL' });
            }}
            onMouseOut={() => {
              dispatch({ type: 'HIDE_MAIL' });
            }}>
            <a href='mailto:bhuvanchandumidde3@gmail.com'>
              <MdMail className='icon' />
              {state.mailBtnVisible ? <span>Mail</span> : ''}
            </a>
          </div>
        </div>
      </div>
      <div className='right'>
        <div></div>
        <div className='img-wrapper'>
          <img
            className='portfolio-image'
            src={PortfolioImage}
            alt='Hero_Image'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
