import "./styles.css";

const BtnRounded = ({ text, color, functionClick, width, type, hidden }) => {
  return (
    <div className="btn-rounded-container">
      <button
        type={type ? type : "button"}
        className={`btn-rounded ${color} ${width}`}
        onClick={functionClick}
      >
        {text}
      </button>
    </div>
  );
};

export default BtnRounded;
