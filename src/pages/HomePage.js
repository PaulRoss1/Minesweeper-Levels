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

  return (
    <div className="home-page">
      <h2>HomePage</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <button onClick={handlePlayClick} disabled={name.length === 0}>
        play
      </button>
      <br />
      <button onClick={() => navigate("/high-scores")}>high scores</button>
    </div>
  );
}

export default HomePage;
