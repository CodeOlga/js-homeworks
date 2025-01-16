import { List, ListItem, Link, Paper, Typography } from "@mui/material";

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

    <List
      component="ul"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItem component="li">
        <Link
          href="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Main
        </Link>
      </ListItem>
      <ListItem component="li">
        <Link
          href="/todo"
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Todo
        </Link>
      </ListItem>
      <ListItem component="li">
        <Link
          href="/swapi"
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Swapi
        </Link>
      </ListItem>
    </List>

    <Toggle />
  </Paper>
);

export default Header;
