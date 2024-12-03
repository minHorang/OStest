import React, { useState } from 'react'; // useState 추가
import './MainNavBar.css';
import Logo from '../../img/MainLogo.png';
import SearchIcon from '../../img/SearchIcon.png';
import { Link, useLocation } from 'react-router-dom';

const MainNavBar = () => {
  const [showAuctionMenu, setShowAuctionMenu] = useState(false); // 상태 추가
  let Title = 'Main';
  const location = useLocation();

  if (location.pathname === '/') {
    Title = 'Main';
  } else if (location.pathname.startsWith('/artwork')) {
    Title = 'ArtWork';
  } else if (location.pathname.startsWith('/author')) {
    Title = 'Artist';
  } else if (location.pathname.startsWith('/auction')) {
    Title = 'Auction';
  } else if (location.pathname.startsWith('/mypage')) {
    Title = 'Mypage';
  } else {
    Title = 'Main';
  }

  return (
    <header className="Mainheader">
      <div className="header-left">
        <Link to="/">
          <img src={Logo} alt="팔아보자GO" className="header-logo" />
        </Link>
      </div>

      <div className="header-center">
        <h1 className="header-title">{Title}</h1>
        <div className="header-search">
          <img src={SearchIcon} alt="돗보기" className="search-icon" />
          <input type="text" placeholder="검색" className="search-input" />
        </div>
      </div>

      <div className="header-right">
        <Link to="/login" className="header-link">
          login
        </Link>
        <span className="divider">|</span>
        <Link to="/mypage" className="header-link">
          mypage
        </Link>
      </div>

      <div className="header-bottom">
        <nav className="header-nav">
          <Link to="/artwork" className="nav-link">
            작품
          </Link>
          <Link to="/author" className="nav-link">
            작가
          </Link>
          <div
            className="nav-link auction-link"
            onMouseEnter={() => setShowAuctionMenu(true)}
            onMouseLeave={() => setShowAuctionMenu(false)}
          >
            경매
            {showAuctionMenu && (
              <div className="dropdown-menu">
                <Link to="/auction/ongoing" className="dropdown-item">
                  진행중 경매
                </Link>
                <Link to="/auction/completed" className="dropdown-item">
                  완료된 경매
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainNavBar;
