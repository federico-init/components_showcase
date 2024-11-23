// import useCounter from "../hooks/use-counter";
import { useReducer } from "react";

import Button from "../components/Button";
import Panel from "../components/Panel";

// defining constants to help with action strings
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE = "change-value";
const SUBMIT = "submit";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case SUBMIT:
      return {
        ...state,
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
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  // input handler checks for value type and converts to 0 any NaN values
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    // avoid default form submission to backend server
    e.preventDefault();

    dispatch({
      type: SUBMIT,
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
