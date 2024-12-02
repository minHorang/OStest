import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Main from './pages/main/Main';
import Login from './pages/Login/Login';
import MyPageWrapper from './pages/MyPage/MyPageWrapper';
import Workadd from './pages/MyPage/workadd';
import Author from './pages/Author/Author';
import AuctionOngoing from './pages/Auction/AuctionOngoing';
import ArtWork from './pages/ArtWork/ArtWork';
import ArtDetail from './pages/ArtWork/ArtDetail';
import SignupStep1 from './pages/SignUp/SignUpStep1';
import SignupStep2 from './pages/SignUp/SignUpStep2';
import AuctionAdd from './pages/MyPage/auctionadd';
import AuctionCompleted from './pages/Auction/AuctionCompleted';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 최상위 App 컴포넌트 */}
        <Route path="/" element={<App />}>
          {/* 기본 경로 Main */}
          <Route index element={<Main />} />
          {/* 로그인 */}
          <Route path="login" element={<Login />} />
          {/* 회원가입 */}
          <Route path="signup" element={<SignupStep1 />} />
          <Route path="signup/step2" element={<SignupStep2 />} />
          {/* 마이페이지 */}
          <Route path="mypage" element={<MyPageWrapper />} />
          <Route path="mypage/auctionadd" element={<AuctionAdd />} />
          <Route path="mypage/workadd" element={<Workadd />} />
          {/* 아트워크 */}
          <Route path="artwork" element={<ArtWork />} />
          <Route path="artwork/:id" element={<ArtDetail />} />
          {/* 작가 페이지 */}
          <Route path="author" element={<Author />} />
          {/* 경매 */}
          <Route path="auction/ongoing" element={<AuctionOngoing />} />
          <Route path="auction/completed" element={<AuctionCompleted />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
