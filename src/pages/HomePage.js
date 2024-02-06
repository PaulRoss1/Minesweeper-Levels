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
    <div className="ms-home-page">
      <div className="gradient"></div>
      <h2 className="ms-home-page__title">MINESWEEPER LEVELS</h2>

      <div className="ms-home-page__menu">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="ENTER NAME"
          onKeyDown={handleKeyDown}
          maxLength="8"
        />
        <button
          className="ms-home-page__play"
          onClick={handlePlayClick}
          disabled={name.length === 0}
          style={
            name.length === 0
              ? { backgroundColor: "#b3b3b3", cursor: "default" }
              : {}
          }
        >
          PLAY
        </button>
        <button onClick={() => navigate("/high-scores")}>HIGH SCORES</button>
      </div>
    </div>
  );
}

export default HomePage;
