import { List, ListItem, Paper, Typography } from "@mui/material";

import Link from "../Link/Link";
import Toggle from "../Toggle/Toggle";

const Header = () => (
  <Paper
    component="header"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
    }}
  >
    <Typography variant="h4" component="h4" color="secondary">
      OlgaK
    </Typography>

    <List component="ul" sx={{ display: "flex", alignItems: "center" }}>
      <ListItem component="li">
        <Link to="/">Main</Link>
      </ListItem>
      <ListItem component="li">
        <Link to="/todo">Todo</Link>
      </ListItem>
      <ListItem component="li">
        <Link to="/swapi">Swapi</Link>
      </ListItem>
    </List>
    <Toggle />
  </Paper>
);

export default Header;
