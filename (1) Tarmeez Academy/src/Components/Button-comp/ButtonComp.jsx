import "./ButtonComp.css";

const ButtonComp = ({ children }) => {
  return (
    <div className="tag-button">
      <button style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        Tag Button
        {children}
      </button>
    </div>
  );
};


export default ButtonComp;