import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import FlipGame from "./Games/FlipCard/FlipCard";
import SnakeGame from "./Games/SnakeGame/SnakeGame";
import GTH from "./Games/GuessTheColor/GTH";
import EmojiIntruderHunt from "./Games/EmojiIntruder/EmojiIntruder";
import RockPaperScissors from "./Games/RockPaper Scissors/Game";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flipcard" element={<FlipGame />} />
            <Route path="/snakegame" element={<SnakeGame />} />
            <Route path="/gth" element={<GTH />} />
            <Route path="/emojiintruder" element={<EmojiIntruderHunt />} />
            <Route path="/rckpapsc" element={<RockPaperScissors />} />
            {/* Add more routes for other games */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
