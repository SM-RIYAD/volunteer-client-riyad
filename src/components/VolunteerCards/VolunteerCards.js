import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import "../VolunteerCards/VolunteerCards.css";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

const VolunteerCards = (props) => {
  console.log("this is",props);
  return (
    <div className="back-img">
      <div class="grid-item">
        <Link
          to={`/register/${props.vols.title} `}
          style={{ textDecoration: "none" }}
        >
          <Card
            sx={{
              maxWidth: 345,
              height: 300,
              backgroundColor: "rgb(1, 128, 255)",
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecq0bomrTnVSN4KqHKQ3ZBc-s1T8SmREGEQ&usqp=CAU"
           
            />
           
            <CardContent>
              <div class="bgm">
                <Typography
                  sx={{ textDecoration: "none" }}
                  gutterBottom
                  variant="p"
                >
                  {" "}
                  <div class="title-center">
                    {props.vols.title}
                    {/* gutterBottom */}
                  </div>
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerCards;
