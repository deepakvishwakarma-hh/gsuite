// import { useState } from "react";
// import "./App.css";

import { useState } from "react";

function App() {
const [state, setState] = useState([]);

const [value, setValue] = useState("");

return (
<>
{JSON.stringify(state)}
<div>
<div className="box">
<div>
{state.map((v) => (
<button key={v.name}>{v.name} [x] </button>
))}
</div>

          <input
            onChange={(e) => setValue(e.target.value)}
            id=""
            type="text"
            name=""
            value={value}
          />
        </div>

        {value !== "" && (
          <div>
            {list
              .filter((name) => name.name.includes(value.toLowerCase()))
              .map((f) => (
                <button
                  key={f.name}
                  onClick={() => {
                    setState([...state, f]);
                    setValue("");
                  }}
                >
                  {f.name}
                </button>
              ))}
          </div>
        )}
      </div>
    </>

);
}

export default App;

const list = [{ name: "apple" }, { name: "ball" }, { name: "cat" }];
