import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePlayClick = () => {
    navigate("/game", { state: { playerName: name } });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && name.length > 0) {
      handlePlayClick();
    }
  };

  return (
    <div className="home-page">
      <div className="gradient"></div>
      <h2>MINESWEEPER LEVELS</h2>

      <div className="menu">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="ENTER NAME"
          onKeyDown={handleKeyDown}
        />
        <br />
        <button onClick={handlePlayClick} disabled={name.length === 0}>
          play
        </button>
        <br />
        <button onClick={() => navigate("/high-scores")}>high scores</button>
      </div>
    </div>
  );
}

export default HomePage;
