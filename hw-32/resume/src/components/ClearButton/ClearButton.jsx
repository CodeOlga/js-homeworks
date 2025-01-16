import { useDispatch, useSelector } from "react-redux";
import { Button, Box } from "@mui/material";

import { clearData } from "../../redux/slice/swapiSlice";
import { isLoading } from "../../redux/slice/selectors";

const ClearButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Button
        variant="contained"
        color="error"
        onClick={handleClear}
        disabled={loading}
        sx={{
          padding: "10px 20px",
        }}
      >
        Clear
      </Button>
    </Box>
  );
};

export default ClearButton;

//========with custom button=============

// import { useDispatch, useSelector } from "react-redux";

// import Button from "../Button/Button"; // Ваш кастомный компонент кнопки
// import { clearData } from "../../redux/slice/swapiSlice";
// import { isLoading } from "../../redux/slice/selectors";

// const ClearButton = () => {
//   const dispatch = useDispatch();
//   const loading = useSelector(isLoading);

//   const handleClear = () => {
//     dispatch(clearData());
//   };

//   return (
//     <Button
//       title="Clear"
//       onClick={handleClear}
//       disabled={loading}
//       sx={{
//         mt: 3, // Добавление отступа сверху
//         backgroundColor: "error.main", // Красный цвет для кнопки
//         color: "white", // Белый текст
//         "&:hover": {
//           backgroundColor: "error.dark", // Темнее при наведении
//         },
//       }}
//     />
//   );
// };

// export default ClearButton;
