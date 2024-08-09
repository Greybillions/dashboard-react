import './Navbar.css';

const Navbar = ({ userName }) => {
  return (
    <div className='navbar'>
      <div className='header'>
        <img
          className='logo'
          src='https://img.icons8.com/?size=100&id=2G7Q_vA8UNZu&format=png&color=228BE6'
          alt=''
        />

        <div>
          <h2>Welcome, {userName}</h2>
          <p>Your personal dashboard overview</p>
        </div>
      </div>

      <div className='search-user'>
        <i className='fas fa-search'></i>
        <input type='text' placeholder='Search' />
        <div className='user'>
          <i className='far fa-user'></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
