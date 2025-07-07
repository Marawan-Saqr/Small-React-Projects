import { useState } from 'react';
import Container from "@mui/material/Container";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Switch from '@mui/material/Switch';


const Material = () => {

  // Component Logic
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [divHeight, setDivHeight] = useState("100px");


  // Increase Height
  const increaseHeight = () => {
    if (divHeight === "100px") {
      setDivHeight("300px");
    } else {
      setDivHeight("100px");
    }
  }


  return (
    <div className="material">
      <Container maxWidth="lg">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails style={{textAlign: "center"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails style={{textAlign: "center"}}>
            <Switch {...label} color="success" onClick={()=> increaseHeight()} />
          </AccordionDetails>
        </Accordion>
        <div style={{transition: "0.5s", width: "100%", backgroundColor: "orange", textAlign: "center", height: divHeight === "100px" ? "100px" : "300px"}}>
          <h2 style={{color: "white"}}>Hello World</h2>
        </div>
      </Container>
    </div>
  );
};



export default Material;