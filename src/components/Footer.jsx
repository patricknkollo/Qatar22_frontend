import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

function Footer() {
  return (
    <>
      <div className="footer">
        <Box
          sx={{
            position: "static",
            width: `calc(100%-240px)`,
            height: "auto",
            backgroundColor: "secondary.main",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            alignContent: "center",
            mt: 10,
          }}
        >
          <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
              <Grid item xs={12}>
                <Typography color="black" variant="h5">
                  React Starter-App Nkollo
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="textSecondary" variant="subtitle1">
                  {`${new Date()} | React | Material UI | React Router`}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default Footer;
