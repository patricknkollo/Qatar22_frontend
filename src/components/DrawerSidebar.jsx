import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsIcon from "@mui/icons-material/Sports";
import StadiumSharpIcon from "@mui/icons-material/StadiumSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const draweri = (
  <div className="drawer_sidebar">
    <Toolbar />

    <Divider />
    <List>
      <ListItem
        id="buteurs"
        key={"Email"}
        disablePadding
        component="a"
        href="http://localhost:3000/buteurs"
        style={{ color: "initial" }}
      >
        <ListItemButton className="ball">
          <ListItemIcon>
            <SportsSoccerIcon style={{ color: "#93C572" }} />
          </ListItemIcon>
          <ListItemText primary={"buteurs"} styled={{ color: "#000000" }} />
        </ListItemButton>
      </ListItem>
      <ListItem
        id="pays"
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
        id="referees"
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
        id="games"
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
        id="individu"
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
        id="players"
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
        id="clubs"
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
      <ListItem
        id="pays-filtre"
        /* key={text} */ disablePadding
        component="a"
        href="http://localhost:3000/pays/filtre"
        style={{ color: "initial" }}
      >
        <ListItemButton>
          <ListItemIcon>
            <FilterAltIcon style={{ color: "#FFEA00" }} />
          </ListItemIcon>
          <ListItemText primary="pays-filtre" />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider />
  </div>
);
function Drawer_sidebar() {
  return <>{draweri}</>;
}

export default Drawer_sidebar;
