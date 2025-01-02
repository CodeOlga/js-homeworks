/* eslint-disable react/prop-types */
const Button = ({ className, onClick, title }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
