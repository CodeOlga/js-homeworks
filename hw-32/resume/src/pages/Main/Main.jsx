import {
  Box,
  Container,
  Paper,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const Main = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        About Me
      </Typography>
      <Paper
        sx={{
          padding: "20px 60px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Typography variant="h3" component="h2" color="secondary">
          Olga Kryvutsenko
        </Typography>
        <Typography variant="body1" component="p">
          Junior Frontend Developer
        </Typography>
        <Typography variant="body2" component="p">
          Hello, I&apos;m Olga, and I&apos;m studying web development. I&apos;m
          passionate about creating modern websites and learning new
          technologies. Currently, I&apos;m exploring React and building
          projects to improve my skills.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box type="section">
            <Typography variant="h4" component="h4">
              Tech Skills
            </Typography>
            <List>
              <ListItem>HTML5/CSS3</ListItem>
              <ListItem>Vanilla JavaScript</ListItem>
              <ListItem>React, Redux</ListItem>
              <ListItem>Responsive/Adaptive Design</ListItem>
              <ListItem>GIT/GitHub</ListItem>
              <ListItem>REST API</ListItem>
              <ListItem>Webpack, Vite</ListItem>
            </List>
          </Box>

          <Box type="section">
            <Typography variant="h4" component="h4">
              Soft Skills
            </Typography>
            <List>
              <ListItem>Effective Communication</ListItem>
              <ListItem>Problem-Solving Abilities</ListItem>
              <ListItem>Strong Time Management</ListItem>
              <ListItem>Collaborative Team Player</ListItem>
              <ListItem>Adaptability to New Technologies</ListItem>
            </List>
          </Box>
        </Box>

        <Box type="section">
          <Typography variant="h4" component="h4">
            Projects
          </Typography>
          <List>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Typography variant="h5" component="h5">
                Todo List
              </Typography>
              <Typography variant="body2" component="p">
                HTML, CSS, React, Vite, Git
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Typography variant="h5" component="h5">
                SWAPI
              </Typography>
              <Typography variant="body2" component="p">
                HTML, CSS, React, API, Vite, Git
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default Main;
