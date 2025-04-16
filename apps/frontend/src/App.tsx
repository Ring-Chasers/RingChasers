import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Draft from "./pages/League/Draft/Draft.tsx";
import Matchups from "./pages/League/Matchups/Matchups.tsx";
import Leaderboard from "./pages/Leaderboard/Leaderboard.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Signup from './pages/Signup/Signup.tsx';
import Login from './pages/Login/Login.tsx';
import StartLeague from './pages/League/StartLeague/StartLeague.tsx';
import CreateLeague from './pages/League/CreateLeague/CreateLeague.tsx';
import League from './pages/League/League.tsx';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/league" element={<League />} />
        <Route path="/league/start" element={<StartLeague/>} />
        <Route path="/league/create" element={<CreateLeague />} />
        <Route path="/league/draft" element={<Draft />} />
        <Route path="/league/matchups" element={<Matchups />} />
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
