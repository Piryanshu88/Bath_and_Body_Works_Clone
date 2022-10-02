const Button = ({ disabled = false, btnText, onClick }) => {
    return (
      <button onClick={onClick} disabled={disabled}>
        {btnText}
      </button>
    );
  };
  
  export default Button;
  