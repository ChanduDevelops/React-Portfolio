import aboutImage from '../assets/images/sinchan2_nobg.png';
import { FaCalendarAlt } from 'react-icons/fa';

export default function About() {
  return (
    <section id='about'>
      <h1>
        About <span>Me</span>
      </h1>
      <div className='container'>
        <div className='img-c'>
          <img
            src={aboutImage}
            alt='About_Image'
            loading='lazy'
          />
        </div>
        <div className='content'>
          <p className='about-txt'>
            I&apos;m a recent BTech CSE graduate, looking for an entry-level
            job. I have experience with programming languages such as Python,
            JavaScript, and Java, as well as front-end technologies like HTML,
            CSS, and ReactJS. Additionally, I have expertise in SQL, MongoDB,
            ExpressJS, NodeJS, Tailwind CSS, and along with an understanding of
            computer networks and operating systems. I am results-driven and
            thrive in a collaborative environment. I am a quick learner and
            excited about the opportunity to contribute my skills and knowledge
            to a dynamic software development team.
          </p>
          <div className='education'>
            <span className='line'>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </span>

            <ul>
              <li className='ed-content'>
                <div className='content'>
                  <div className='year'>
                    <FaCalendarAlt />
                    2020 - 2024
                  </div>
                  <p className='ed-details'>
                    B.Tech - Raghu Engineering College, Visakhapatnam, Andhra
                    Pradesh 531162.
                  </p>
                </div>
              </li>

              <li className='ed-content'>
                <div className='content'>
                  <div className='year'>
                    <FaCalendarAlt />
                    2018 - 2020
                  </div>
                  <p className='ed-details'>
                    Intermediate - Sri Chaitanya Junior College,
                    Jangareddygudem, Andhra Pradesh 534447.
                  </p>
                </div>
              </li>

              <li className='ed-content'>
                <div className='content'>
                  <div className='year'>
                    <FaCalendarAlt />
                    2018
                  </div>
                  <p className='ed-details'>
                    SSC - Sri Chaitanya High School, Yerraguntapalli, Andhra
                    Pradesh 534457.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
