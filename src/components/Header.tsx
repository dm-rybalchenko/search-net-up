import { memo, useState } from 'react';

export default memo(function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    document.body.classList.toggle('block');
    setShowMenu(status => !status);
  };

  return (
    <>
      <header className={'header' + (showMenu ? ' active' : '')}>
        <a href='./' className='header__logo'>
          <img src='/img/logo/logo_netup.svg' alt='main-logo' />
        </a>
        <nav className='nav'>
          <a href='./' className='nav__item nav_discover'>
            Discover
          </a>
          <a href='./' className='nav__item nav_live'>
            Live TV
          </a>
          <a href='./' className='nav__item nav_shows'>
            TV Shows
          </a>
          <a href='./' className='nav__item nav_movies'>
            Movies
          </a>
          <a href='./' className='nav__item nav_stuff'>
            My Stuff
          </a>
        </nav>
        <div className='header__user'>
          <a className='header__search'></a>
          <a href='./' className='header__user-btn'></a>
        </div>
      </header>
      <div onClick={handleClick} className='header__burger'>
        <span></span>
      </div>
    </>
  );
});
