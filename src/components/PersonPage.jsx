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
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";

const drawerWidth = 240;
function PersonPage(props) {
  const [person, setPerson] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        ` http://localhost:8080/api/person/controller/person/pays/${params.personid}`
      )
      .then((resp) => {
        console.log(resp.data);
        console.log(params.personid);
        setPerson(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Stack>
        <Box>
          <Card
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <CardMedia height="140" />
            <CardContent>
              <div
                className="divnomprenom"
                sx={{
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  ml: { sm: `${drawerWidth}px` },
                }}
              >
                <Typography fontSize={35}>
                  {person.prenom + ", " + person.nom}
                </Typography>
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" color="text.secondary">
                <table data-testid="person-identity">
                  <tr>
                    <td>nom: </td>
                    <td>{person.nom}</td>
                  </tr>
                  <tr>
                    <td>prenom: </td>
                    <td>{person.prenom}</td>
                  </tr>
                  <tr>
                    <td>age: </td>
                    <td>{person.age}</td>
                  </tr>
                  <tr>
                    <td>pays: </td>
                    <td>{person.nompays}</td>
                  </tr>
                  <tr>
                    <td>paysid: </td>
                    <td>
                      <Link to={`/pays/${person.nationaliteid}`}>
                        {person.nationaliteid}
                      </Link>
                    </td>
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

export default PersonPage;
