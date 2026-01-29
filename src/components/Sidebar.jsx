import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsIcon from "@mui/icons-material/Sports";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import { Divider, Stack, Toolbar } from "@mui/material";

import StadiumSharpIcon from "@mui/icons-material/StadiumSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CssBaseline from "@mui/material/CssBaseline";


const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <List>
        <ListItem
          key={"Email"}
          disablePadding
          component="a"
          href="http://localhost:3000/buteurs"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SportsSoccerIcon style={{ color: "#93C572" }} />
            </ListItemIcon>
            <ListItemText primary={"buteurs"} styled={{ color: "#000000" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          /* key={text} */ disablePadding
          component="a"
          href="http://localhost:3000/pays"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <LanguageSharpIcon style={{ color: "#FFEA00" }} />
            </ListItemIcon>
            <ListItemText primary="pays" />
          </ListItemButton>
        </ListItem>
        <ListItem
          /* key={text} */ disablePadding
          component="a"
          href="http://localhost:3000/referees"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SportsIcon style={{ color: "#93C572" }} />
            </ListItemIcon>
            <ListItemText primary="referees" />
          </ListItemButton>
        </ListItem>

        <ListItem
          /* key={text} */ disablePadding
          component="a"
          href="http://localhost:3000/match"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <StadiumSharpIcon />
            </ListItemIcon>
            <ListItemText primary="matches" />
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
      <Divider />
      <List>
        <ListItem
          key={"Email"}
          disablePadding
          component="a"
          href="http://localhost:3000/persons"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonSharpIcon style={{ color: "#93C572" }} />
            </ListItemIcon>
            <ListItemText primary={"persons"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Email"}
          disablePadding
          component="a"
          href="http://localhost:3000/joueurs"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonSharpIcon style={{ color: "#93C572" }} />
            </ListItemIcon>
            <ListItemText primary={"joueurs"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          /* key={text} */ disablePadding
          component="a"
          href="http://localhost:3000/clubs"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <GroupsSharpIcon />
            </ListItemIcon>
            <ListItemText primary="clubs" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="row"
        spacing={2}
        style={{ paddingTop: 35, paddingLeft: 10 }}
      >
        <Button
          href="http://localhost:8080/api/person/controller/person/report"
          variant="contained"
          color="success"
        >
          pdf
        </Button>
      </Stack>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
