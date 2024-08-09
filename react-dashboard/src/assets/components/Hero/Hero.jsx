import './Hero.css';
import img from '../../img/img.jpg';
const Hero = () => {
  return (
    <div className='Hero'>
      <div className='profile-card'>
        <div className='title'>
          <p>Profile</p>
          <i className='fas fa-redo'></i>
        </div>
        <div className='profile-img'>
          <img src={img} alt='' />
          <img
            src='https://img.icons8.com/?size=100&id=sCAoc49GJKH6&format=png&color=000000'
            alt='icon'
          />
        </div>
        <div className='title-content'>
          <p>Graham Boyle</p>
          <p>Software Engineer</p>
        </div>
        <div className='title-icon'>
          <i className='fas fa-user-group'>
            <span>11</span>
          </i>
          <i className='fas fa-circle-check'>
            <span>56</span>
          </i>
          <i className='fas fa-trophy'>
            <span>12</span>
          </i>
        </div>
      </div>
      <div className='card'>
        <div className='card-title'>
          <p>
            Prioritized <br /> tasks
          </p>
          <div className='card-icon'>
            <i className='fas fa-stopwatch'></i>
          </div>
        </div>
        <div className='card-avg'>
          <h2>83%</h2>
          <p>Avg. Completed</p>
        </div>
      </div>
      <div className='card'>
        <div className='card-title'>
          <p>
            Additional <br /> tasks
          </p>
          <div className='card-icon'>
            <i className='far fa-circle-check'></i>
          </div>
        </div>
        <div className='card-avg'>
          <h2>56%</h2>
          <p>Avg. Completed</p>
        </div>
      </div>
      <div className='trackers-card'>
        <div className='tracker-text'>
          <h2>Trackers connected</h2>
          <p>3 active connections</p>
        </div>
        <div className='tracker-icons'>
          <img
            className='tracker-icon'
            src='https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000'
            alt=''
          />
          <img
            className='tracker-icon'
            src='https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000'
            alt=''
          />
          <img
            className='tracker-icon'
            src='https://img.icons8.com/?size=100&id=kikR2jIn6485&format=png&color=000000'
            alt=''
          />
        </div>
        <div>
          <i className='fas fa-ellipsis'></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
