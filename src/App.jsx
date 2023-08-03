import "./App.css";
import { useRef, useState } from "react";
const operators = ["+", "-", "*", "=", "(", ")"];
const tags = [
  { name: "SUM" },
  { name: "payment processing fees" },
  { name: "payroll bonuses G&A" },
  { name: "Payroll Bonuses S&M" },
  { name: "Salary Increase Month" },
];

const Operator = ({ name }) => {
  return <span className="operator">{name}</span>;
};

const Tag = ({ name, handleRemove }) => {
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(undefined);
  const handleVisiblity = () => {
    setVisible(!visible);
  };
  const handleXValueChange = (event) => {
    setX(event.target.value);
  };
  return (
    <div className="wrp">
      <button onClick={handleVisiblity} className="tag-button">
        {name} | [{x == undefined ? "x" : x}]
      </button>
      {visible && (
        <div className="inr">
          <input
            type="number"
            placeholder="x value"
            onChange={handleXValueChange}
          />
          <button onClick={handleRemove}>Delete</button>
        </div>
      )}
    </div>
  );
};

function App() {
  const inputRef = useRef(null);
  const [state, setState] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key == " ") {
      if (operators.includes(value)) {
        setState([...state, { name: value, type: "operator" }]);
        setValue("");
      }
    }
  };

  return (
    <>
      <div>
        <h1>
          developed by{" "}
          <a href="https://github.com/deepakvishwakarma-hh">
            {" "}
            @deepakvishwakarma-hh
          </a>
        </h1>
        <div>
          <div className="container">
            {state.map((v, i) =>
              v.type == "tag" ? (
                <Tag
                  index={i}
                  name={v.name}
                  handleRemove={() => {
                    setState(state.filter((_, index) => index !== i));
                  }}
                />
              ) : (
                <Operator name={v.name} />
              )
            )}

            <div className="input-wrapper">
              <input
                value={value}
                ref={inputRef}
                className="input"
                onChange={handleChange}
                onKeyDown={handleOnKeyDown}
              />

              {value.trim() !== "" && (
                <div className="input-suggetions">
                  {tags
                    .filter((name) =>
                      name.name.toLowerCase().includes(value.toLowerCase())
                    )
                    .map((f) => (
                      <button
                        key={f.name}
                        onClick={() => {
                          setState([...state, { type: "tag", name: f.name }]);
                          setValue("");
                        }}
                      >
                        {f.name} <span>calculation</span>
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>press space when add arthematic operators [+,-,*,(, )]</li>
      </ul>
    </>
  );
}

export default App;
