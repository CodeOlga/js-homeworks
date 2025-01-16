// /* eslint-disable react/prop-types */
// const Button = ({ className, onClick, title, ...rest }) => {
//   return (
//     <button className={className} onClick={onClick} {...rest}>
//       {title}
//     </button>
//   );
// };

// export default Button;

/* eslint-disable react/prop-types */
import MuiButton from "@mui/material/Button";

const Button = ({ onClick, title, ...rest }) => {
  return (
    <MuiButton
      variant="outlined"
      sx={{ backgroundColor: "primary.main" }}
      onClick={onClick}
      {...rest}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
