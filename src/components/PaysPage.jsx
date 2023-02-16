import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PersonPage.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Drawer,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import Drawer_sidebar from "./DrawerSidebar";

const drawerWidth = 240;
function PaysPage(props) {
  const [pays, setPays] = useState([]);
  const params = useParams();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    axios
      .get(
        ` http://localhost:8080/api/countries/controller/country/${params.paysid}`
      )
      .then((resp) => {
        console.log(resp.data);
        console.log(params.personid);
        setPays(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Stack>
        <Box sx={{ display: "flex" }}>
          <Card
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <CardMedia />
            <CardContent>
              <div
                className="divnomprenom"
                sx={{
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  ml: { sm: `${drawerWidth}px` },
                }}
              >
                <Typography fontSize={35}>{pays.nom}</Typography>
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" color="text.secondary">
                <table>
                  <tr>
                    <td>superficie: </td>
                    <td>{pays.superficie}</td>
                  </tr>
                  <tr>
                    <td>coupes du monde: </td>
                    <td>{pays.cdms}</td>
                  </tr>
                  <tr>
                    <td>pays: </td>
                    <td>{pays.nom}</td>
                  </tr>
                  <tr>
                    <td>habitants: </td>
                    <td>{pays.habitants}</td>
                  </tr>
                </table>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
        <Box></Box>
      </Stack>
    </>
  );
}

export default PaysPage;
