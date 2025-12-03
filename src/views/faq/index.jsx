import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "@/components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "@/theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faqData = [
    {
      question: "An Important Question",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis.",
    },
    {
      question: "Another Important Question",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis.",
    },
    {
      question: "Your Favorite Question",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis.",
    },
    {
      question: "Some Random Question",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis.",
    },
    {
      question: "The Final Question",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis.",
    },
  ];

  return (
    <Box mx="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {faqData.map((item, index) => (
        <Accordion
          key={index}
          defaultExpanded
          sx={{
            mb: 2,
            backgroundColor: colors.primary[400],
            color: colors.grey[400], 
            "&:before": { display: "none" },
            "& .MuiAccordionSummary-root": {
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiAccordionSummary-content": {
              color: colors.greenAccent[400],
            },
            "& .MuiAccordionDetails-root": {
              backgroundColor: colors.primary[400],
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
