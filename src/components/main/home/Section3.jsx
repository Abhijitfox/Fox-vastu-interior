import React from "react";
import { Box, Typography } from "@mui/material"; // removed Grid import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faFileInvoiceDollar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    id: 1,
    icon: faUserCheck,
    title: "“Designers never understand what I want.”",
    desc: "We conduct our first meeting to understand your daily routine, preferences, and energy needs. We don't make any assumptions, only listen.",
  },
  {
    id: 2,
    icon: faFileInvoiceDollar,
    title: "“I’m scared of hidden costs.”",
    desc: "Every proposal we give is 100% transparent and includes factors such as materials, labor, and timeline. You’ll never find a surprise or hidden costs on your bill.",
  },
  {
    id: 3,
    icon: faStarHalfAlt,
    title: "“I don’t want my space to look like everyone else’s.”",
    desc: "Good. We don’t do cookie-cutter work. We customize design concepts to your lifestyle and Vastu alignment, not Pinterest trends.",
  },
];

const Section3 = () => {
  return (
    <Box
      id="pain-points"
      sx={{
        width: "100%",
        py: { xs: 6, md: 12 },
        background: "linear-gradient(180deg, #f7fbfd 0%, #ffffff 60%)",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          mb: { xs: 5, md: 8 },
          fontWeight: 800,
          textAlign: "center",
          fontSize: { xs: "1.6rem", sm: "2rem", md: "2.6rem" },
          color: "#0b2545",
          lineHeight: 1.15,
          px: 2,
        }}
      >
        What are The Pain Points We Solve?
      </Typography>

      {/* FLEX ROW: force 3 cards in a single row */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, md: 3 },
          justifyContent: "center",
          alignItems: "stretch",
          mx: "auto",
          px: { xs: 2, sm: 4 },
          maxWidth: 1180,
          // prevent wrapping so all three stay in one row
          flexWrap: "nowrap",
          // allow shrinking on very small screens but prefer all-in-one row
          overflowX: { xs: "auto", md: "visible" },
        }}
      >
        {steps.map((step) => (
          <Box
            key={step.id}
            sx={{
              // each card takes one-third of the available width
              flex: "0 0 calc(33.333% - 16px)",
              maxWidth: 380,
              minWidth: 260,
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              background: "rgba(255,255,255,0.78)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(15,23,42,0.06)",
              boxShadow: "0 8px 24px rgba(2,6,23,0.06)",
              textAlign: "center",
              position: "relative",
              transition: "transform .24s ease, box-shadow .24s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 18px 40px rgba(2,6,23,0.12)",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {/* Icon circle */}
            <Box
              sx={{
                width: { xs: 64, md: 76 },
                height: { xs: 64, md: 76 },
                borderRadius: "50%",
                background: "linear-gradient(135deg,#fff,#f1f5f9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: { xs: 40, md: 46 },
                  height: { xs: 40, md: 46 },
                  borderRadius: "50%",
                  backgroundColor: "#0b2545",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: { xs: 16, md: 18 },
                }}
              >
                <FontAwesomeIcon icon={step.icon} />
              </Box>
            </Box>

            {/* Number badge */}
            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "#7dd3fc",
                color: "#0b2545",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 14px rgba(13,71,90,0.08)",
                fontSize: 13,
              }}
            >
              {step.id}
            </Box>

            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                mt: 0,
                fontWeight: 700,
                color: "#083047",
                fontSize: { xs: "0.97rem", md: "1.02rem" },
                textAlign: "center",
                px: 1,
              }}
            >
              {step.title}
            </Typography>

            {/* push desc to bottom for alignment */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: "#55606a",
                lineHeight: 1.6,
                fontSize: { xs: "0.84rem", md: "0.92rem" },
                maxWidth: 320,
                px: 1,
              }}
            >
              {step.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section3;
