import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <span>NotFound</span>
      <br />
      <button onClick={() => navigate("/")}>home</button>
    </div>
  );
}

export default NotFound;