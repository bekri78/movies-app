import React from 'react';
import Particule from "../Particules";
 
 
import Typography from "@mui/material/Typography";
 
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import './Home.css'
export default function Home() {
  return (
    <div className="puzzle3d">
    <Particule />

    <div className="conteneurBtn">
      <Typography
        variant="h2"
        component="h4"
        color="#00000"
        width={"70%"}
        paddingBottom={5}
      >
        Decouvrez une experience unique
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        color="#00000"
        width={"70%"}
        paddingBottom={5}
      >
        Les meilleurs films réunis au meme endroit
      </Typography>
      <Button variant="contained" endIcon={<KeyboardArrowRightIcon />}>
        Commencer
      </Button>
    </div>
  </div>
  )
}
