import { useGlobal } from "../context/GlobalContext";

function History() {
  const { state, dispatch } = useGlobal();
  console.log(state);

  function handleClick(item) {
    dispatch({ type: "remove", payload: item.text });
  }

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {state.map((item) => (
          <li className="minus" key={item.text}>
            {item.text} <span>{item.amount}</span>
            <button className="delete-btn" onClick={() => handleClick(item)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default History;
