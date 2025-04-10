import Card from "../../utils/Card";
const Home = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Welcome to Ring Chasers</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <Card title="Live Drafing 🔥" description="You are able to draft players in real-time with your friends (you need at least 2 people in a game in order to start a draft)" buttonName="Start a Draft" to="/draft" />
        <Card title="Real-Time Leaderboard 📊" description="You can see a leaderboard of all the best players in Ring Chasers and a leaderboard of you and your friends" buttonName="See Leaderboard" to="/leaderboard" />
        <Card title="Simulated Data 🧠" description="This application runs on simulated data so it can start at any time, no need to wait for a specific time to start" buttonName="Start a League" to="/start-league" />
      </div>

    </div>

  )
}

export default Home;