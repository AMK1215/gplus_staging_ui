import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import Marquee from './components/Marquee';
import SubTopBar from './components/SubTopBar';
import DailyBoard from './components/DailyBoard';
import MostPopular from './components/MostPopular';
import BigWin from './components/BigWin';
import SlotGame from './components/SlotGame';
import LiveCasinoGame from './components/LiveCasinoGame';
import CardGames from './pages/CardGames';
import Games from './pages/Games';
import DepositPage from './pages/DepositPage';
import WithdrawPage from './pages/WithdrawPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './routes/ProtectedRoute';

// Main app content (add this back!)
function Home() {
  return (
    <div>
      <TopBar />
      <div className="container-fluid mt-3">
        <Banner />
        <Marquee />
        <SubTopBar />
        <DailyBoard />
        <MostPopular />
        <BigWin />
        <SlotGame />
        <LiveCasinoGame />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      {/* Background and Sparkle are SIBLINGS, not WRAPPERS */}
      <div className="casino-bg" aria-hidden="true"></div>
      {/* <CasinoSparkle /> */}
      <div className="main-app">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/games" element={<ProtectedRoute><Games /></ProtectedRoute>} />
          <Route path="/account/deposit" element={<ProtectedRoute><DepositPage /></ProtectedRoute>} />
          <Route path="/account/withdrawl" element={<ProtectedRoute><WithdrawPage /></ProtectedRoute>} />
          <Route path="/account/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
