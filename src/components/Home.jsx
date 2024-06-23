import PortfolioImage from '../assets/images/portfolio image.jpeg';

const Home = () => {
  return (
    <section id='home'>
      <div className='left'>
        <div className='title'>
          Hello, I&apos;m <span className='name'>BHUVAN CHANDU</span>
        </div>
        <div className='sub-title'>
          <span className='static-txt'> I am a</span>
          <ul className='dynamic-txts'>
            <li>
              <span>Software Engineer</span>
            </li>
            <li>
              <span>FullStack Developer</span>
            </li>
          </ul>
        </div>
        <div className='contacts'></div>
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
