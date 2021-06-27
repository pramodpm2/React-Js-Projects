import React from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Mysore from "../images/mysore.jpg";
import Card from "./card";
function Hometab() {
  return (
    <div>
      <Grid align="center" className="header">
        "One State, Many Worlds"
      </Grid>
      <Paper
        variant="outlined"
        xs={12}
        style={{
          marginTop: "2%",
          boxShadow: "0 2px 4px 0 rgba(7,17,55,0.06)",
          margin: "2%",
        }}
      >
        <Grid className="header1">Karnataka, India</Grid>

        <Grid xs={12} style={{ color: "#3A435E", margin: "1%" }}>
          <p>
            Ranked the 4th most popular tourist state in the country, Karnataka
            has a bouquet of attractions to offer you. Expanded from Belgaum in
            the North to Bangalore in the south, it has something to offer to
            everybody; from beautiful landscapes to rich cultural heritage,
            serene beaches and scrumptious food, Karnataka is indeed a world in
            itself! The Malayalis, the Tamilians, Konkanis, Kannadigas, even the
            Muslims and Christians have made Karnataka their home.
          </p>
          <p>
            It has the second highest number of protected monuments in India,
            Hampi being one which houses the maximum of them, was the capital of
            Vijayanagar Empire. The world's largest monolith structure, the
            statue of Lord Gomteshwar in Shravanabelagola sees tens of thousands
            of pilgrims during Mahamastakabhisheka festival every 12 years.
            Apart from history, Karnataka is also rich in nature's bounty and
            wildlife. It has 5 National Parks and over 25 wildlife sanctuaries
            of which Bandipur and Nagarhole national parks are most famous.
            Bengaluru, the capital of the state and the "Silicon Valley of
            India" is known as the city of startups and IT companies and
            attracts thousands of tourists every year. Coorg is one of the top
            destinations in Karnataka for its coffee plantations. Mysore, famous
            for the Mysore Palace, Hampi, famous for the ruins of Vijayanagara
            Empire and Chikmagalur, a hill station in the Malnad region of
            Karnataka are a few other popular places among the tourists.
          </p>
        </Grid>
      </Paper>
      <Grid
        variant="outlined"
        xs={12}
        style={{
          marginTop: "2%",
          boxShadow: "0 2px 4px 0 rgba(7,17,55,0.06)",
          marginLeft: "5%",
        }}
      >
        <Card></Card>
      </Grid>
    </div>
  );
}

export default Hometab;
