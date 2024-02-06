export default function Timer({ time }) {
  return (
    <div className="ms-game__time">
      {/* <span>⏰</span> */}
      <img
        src={require("../images/clock.png")}
        alt="clock"
        style={{ width: "30px", height: "30px" }}
      />
      {time}
    </div>
  );
}
