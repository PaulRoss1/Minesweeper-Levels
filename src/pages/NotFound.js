import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="ms-not-found">
      <div className="gradient"></div>

      <span className="ms-not-found__message">Page Not Found</span>
      <br />
      <button onClick={() => navigate("/")}>home</button>
    </div>
  );
}

export default NotFound;
