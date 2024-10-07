import { useState } from "react";
import "../styles/Test.css";

function Gauge({ value }) {
    const angle = (value / 100) * 180; // Convert value to a degree angle
  
    return (
     <div className="gauges-container">
      <div className="gauge">
        <div className="gauge-body">
          <div
            className="gauge-fill"
            style={{ transform: `rotate(${angle}deg)` }}
          ></div>
          <div className="gauge-cover"></div>
        </div>
        <div className="gauge-label">
          <span>{value}%</span>
        </div>
      </div>
     </div>
    );
  }

const Test = () => {
  const [value, setValue] = useState(0); // Initial value of 50%

  return (
    <div className="App">
      <h1>React CSS Gauge</h1>
      <Gauge value={value} />

      {/* Slider to change the gauge value */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

 
export default Test;