// import useCounter from "../hooks/use-counter";
import { useReducer } from "react";

import Button from "../components/Button";
import Panel from "../components/Panel";
import { type } from "@testing-library/user-event/dist/type";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "change-value":
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case "submit":
      return {
        // update total count
        count: state.count + state.valueToAdd,
        // then reset valueToAdd
        valueToAdd: 0,
      };

    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: "increment",
    });
  };

  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };

  // input handler checks for value type and converts to 0 any NaN values
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({
      type: "change-value",
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    // avoid default form submission to backend server
    e.preventDefault();

    dispatch({
      type: "submit",
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flox-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ""} // this helps with 0 default value
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300 "
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
