import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";

function Form() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { dispatch } = useGlobal();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: {
        text,
        amount,
      },
    });
    setText("");
    setAmount(0);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default Form;
