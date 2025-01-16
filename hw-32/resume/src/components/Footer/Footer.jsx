import { List, ListItem, Link, Paper, Typography } from "@mui/material";

// import Link from "../Link/Link";

const Footer = () => (
  <Paper
    component="footer"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
      marginTop: "auto",
    }}
  >
    <Typography variant="h4" component="h4" color="secondary">
      OlgaK
    </Typography>
    <List>
      <ListItem>
        Phone:
        <Link
          href="tel:+123456789"
          sx={{
            textDecoration: "none",
            marginLeft: "4px",
          }}
        >
          +380991234567
        </Link>
      </ListItem>
      <ListItem>
        Email:
        <Link
          href="mailto: myemail@gmail.com"
          sx={{
            textDecoration: "none",
            marginLeft: "4px",
          }}
        >
          myemail@gmail.com
        </Link>
      </ListItem>
      <ListItem>
        GitHub:
        <Link
          href="https://github.com/CodeOlga"
          sx={{
            textDecoration: "none",
            marginLeft: "4px",
          }}
        >
          https://github.com/
        </Link>
      </ListItem>
    </List>
  </Paper>
);

export default Footer;
