import {
  alpha,
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  InputBase,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import "../components/CountriesFilter.css";
import { Link } from "react-router-dom";
import Drawersidebar from "./DrawerSidebar";
import qatarpic from "./qatar_city.png";
import api from "./AxiosConfig";

// CONSTANTES DE STYLE
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//THE PRINCIPAL FUNCTION
function CountryList({ window }) {
  const drawerWidth = 240;

  //CONSTANTE contenant les elements du sidebar

  //TABLE CONSTANTES
  const [countries, setCountries] = useState([]);
  const [nom, setNom] = useState("");
  // const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/api/countries/controller/countries")
      .then((resp) => {
        //const produits = resp.data;
        console.log(resp.data);
        setCountries(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* useEffect(() => {
    if (!nom) return;
    setCountries(countries.filter((country) => country.nom === search));
    console.log(nom);
  }, [search]);
 */
  const container =
    window !== undefined ? () => window().document.body : undefined;

  //CONSTANTES du NAVBAR

  const mobileMenuId = "primary-search-account-menu-mobile";

  // RENDER METHOD -----------------------------------------------------------------------------
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            style={{ background: "#2E3B55", color: "#FFFFFF" }}
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <Box /* sx={{ display: { xs: "flex", md: "none" } }} */>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  color="inherit"
                  component="a"
                  href="/home"
                >
                  <HomeIcon />
                </IconButton>
              </Box>
              <Search
                onChange={(e) => {
                  setNom(e.target.value);
                }}
                value={nom}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            // style={{ background: "#93C572" }}
            style={{ background: "#93C572", color: "#FF5733" }}
            // onClose = {() => handleOpen(false)}
            variant="temporary"
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
            <Drawersidebar />
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
          >
            <Drawersidebar />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <img src={qatarpic} alt="" width="700" height="500" />
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            marginBottom={10}
            marginTop={5}
          >
            The 2022 FIFA World Cup was an international football tournament
            contested by the men's national teams of FIFA's member associations
            and 22nd edition of the FIFA World Cup. It took place in Qatar from
            20 November to 18 December 2022, making it the first World Cup held
            in the Arab world and Muslim world, and the second held entirely in
            Asia after the 2002 tournament in South Korea and Japan. [A]This
            tournament was the last with 32 participating teams, with the number
            of teams being increased to 48 for the 2026 edition. To avoid the
            extremes of Qatar's hot climate,[B] the event was held during
            November and December.[C] It was held over a reduced time frame of
            29 days with 64 matches played in eight venues across five cities.
            Qatar entered the event—their first World Cup—automatically as the
            host's national team, alongside 31 teams determined by the
            qualification process. Argentina were crowned the champions after
            winning the final against the title holder France 4–2 on penalties
            following a 3–3 draw after extra time. It was Argentina's third
            title and their first since 1986, as well being the first nation
            from South America to win the tournament since 2002. French player
            Kylian Mbappé became the first player to score a hat-trick in a
            World Cup final since Geoff Hurst in the 1966 final and won the
            Golden Boot as he scored the most goals (eight) during the
            tournament. Argentine captain Lionel Messi was voted the
            tournament's best player, winning the Golden Ball. Teammates
            Emiliano Martínez and Enzo Fernández won the Golden Glove, awarded
            to the tournament's best goalkeeper, and the Young Player Award,
            awarded to the tournament's best young player, respectively. The
            tournament, with 172 goals, set a new record for the highest number
            of goals scored with the 32 team format. The choice to host the
            World Cup in Qatar attracted significant criticism, with concerns
            raised over the country's treatment of migrant workers, women and
            members of the LGBT community, as well as Qatar's climate, lack of a
            strong football culture, scheduling changes, and allegations of
            bribery for hosting rights and wider FIFA corruption.[D]
          </Typography>
        </Box>
      </Box>
      <Typography>
        <div>
          <div
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchIcon sx={{ paddingTop: 1 }} />
            <input
              className="search-input"
              onChange={(e) => {
                console.log("the name is " + e.target.value);
                setNom(e.target.value);
              }}
              value={nom}
              placeholder="search..."
            />
            {/* <Button
              onClick={(e) => {
                setSearch(nom);
              }}
            >
              click!
            </Button> */}
          </div>
          <TableContainer component={Paper}>
            <Table
              aria-label="simple table"
              sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                marginTop: 5,
              }}
            >
              <TableHead>
                <TableRow style={{ background: "#ECFFDC" }}>
                  <TableCell>paysid</TableCell>
                  <TableCell>nom</TableCell>
                  <TableCell>habitants</TableCell>
                  <TableCell>cdms&nbsp;(Entier)</TableCell>
                  <TableCell>superficie</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countries
                  .filter((pays) => pays.nom.toLowerCase().includes(nom))
                  .map((row) => (
                    <TableRow
                      key={row.paysid}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {console.log(row)}
                      <TableCell align="left">
                        <Link to={`/pays/${row.paysid}`}>{row.paysid}</Link>
                      </TableCell>
                      {/*  <TableCell align="left">{row.paysid}</TableCell> */}
                      <TableCell align="left">{row.nom}</TableCell>
                      <TableCell align="left">{row.habitants}</TableCell>
                      <TableCell align="left">{row.cdms}</TableCell>
                      <TableCell align="left">{row.superficie}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Typography>
    </>
  );
}

export default CountryList;
