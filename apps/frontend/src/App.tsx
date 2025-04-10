import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Draft from "./pages/Draft/Draft.tsx";
import Matchups from "./pages/Matchups/Matchups.tsx";
import Leaderboard from "./pages/Leaderboard/Leaderboard.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Signup from './pages/Signup/Signup.tsx';
import Login from './pages/Login/Login.tsx';
import StartLeague from './pages/StartLeague/StartLeague.tsx';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-league" element={<StartLeague/>} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/matchups" element={<Matchups />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
