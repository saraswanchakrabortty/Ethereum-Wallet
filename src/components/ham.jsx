import "../styles/ham.scss";

function Ham({isThere,task}) {
  return (
    <button
      id="ham"
      title="Ham"
      onClick={task}
      className={isThere ? "active" : ""}
    >
      <div></div>
    </button>
  );
}

export default Ham;
