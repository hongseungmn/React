import { Box, useTheme, Typography} from "@mui/material"
import  Accordion  from "@mui/material/Accordion";
import  AccordionSummary  from "@mui/material/AccordionSummary";
import  AccordionDetails  from "@mui/material/AccordionDetails";
import ExpandeMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
  <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amit, consetuetu adiplisng elit, Syspendissse
          mediansdem sax, skdec, akswmccas
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Another Important question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amit, consetuetu adiplisng elit, Syspendissse
          mediansdem sax, skdec, akswmccas
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Yout Favorite Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amit, consetuetu adiplisng elit, Syspendissse
          mediansdem sax, skdec, akswmccas
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Some Random Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amit, consetuetu adiplisng elit, Syspendissse
          mediansdem sax, skdec, akswmccas
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          The Final Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amit, consetuetu adiplisng elit, Syspendissse
          mediansdem sax, skdec, akswmccas
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>)
}

export default FAQ;