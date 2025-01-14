/* eslint-disable react/prop-types */
const Button = ({ className, onClick, title, ...rest }) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {title}
    </button>
  );
};

export default Button;
