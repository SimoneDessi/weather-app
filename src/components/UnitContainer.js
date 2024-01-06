const UnitContainer = ({ handleClick, unit }) => {
  return (
    <div className="unit-container">
      <button
        className={unit === "celsius" ? null : "greyed"}
        onClick={handleClick}
        id="celsius"
      >
        °C
      </button>
      <button
        className={unit === "fahrenheit" ? null : "greyed"}
        onClick={handleClick}
        id="fahrenheit"
      >
        °F
      </button>
      <button
        className={unit === "kelvin" ? null : "greyed"}
        onClick={handleClick}
        id="kelvin"
      >
        K
      </button>
    </div>
  );
};

export default UnitContainer;
