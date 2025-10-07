import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import {
    faArtstation,
    faDigitalOcean,
    faCreativeCommonsSa,
} from "@fortawesome/free-brands-svg-icons";

const steps = [
    {
        id: 1,
        icon: faGlobeAfrica,
        title: "Initial Consultation",
        desc: "The process begins with an initial consultation where a representative from Inspired Interiors meets with the client to discuss their project requirements, goals, and vision.",
    },
    {
        id: 2,
        icon: faArtstation,
        title: "Project Assessment and Space Analysis",
        desc: "The design team conducts a thorough assessment of the space, taking measurements, photographs, and gathering any relevant architectural drawings or floor plans.",
    },
    {
        id: 3,
        icon: faDigitalOcean,
        title: "Design Concept Development",
        desc: "Based on the client's preferences and the information gathered during the assessment, Inspired Interiors develops a design concept.",
    },
    {
        id: 4,
        icon: faCreativeCommonsSa,
        title: "Design Presentation and Approval",
        desc: "Inspired Interiors presents the design concept and space plans to the client, utilizing visual aids such as 3D renderings, sketches, and material samples.",
    },
];

const Section3 = () => {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 10 },
                backgroundColor: "#fff",
            }}
        >
            <Grid
                container
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{
                    maxWidth: "1200px",
                    mx: "auto",
                    px: { xs: 2, sm: 4 },
                    position: "relative",
                    textAlign: "center",
                }}
            >
                {steps.map((step) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={step.id}
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", sm: "flex-start", md: "center" }, // ✅ center only on mobile
                            textAlign: { xs: "center", sm: "left", md: "center" }, // ✅ text center only on mobile
                            px: { xs: 2, md: 0 },
                            mb: { xs: 6, md: 0 },
                        }}
                    >
                        {/* Icon Circle */}
                        <Box
                            sx={{
                                position: "relative",
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    backgroundColor: "#0b2a4a",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    fontSize: "32px",
                                    mx: { xs: "auto", sm: 0 }, // ✅ center icon horizontally on mobile only
                                }}
                            >
                                <FontAwesomeIcon icon={step.icon} />
                            </Box>

                            {/* Number bubble */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "-15px",
                                    right: "-10px",
                                    width: 26,
                                    height: 26,
                                    borderRadius: "50%",
                                    backgroundColor: "#0b2a4a",
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                }}
                            >
                                {step.id}.
                            </Box>
                        </Box>

                        {/* Title */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                mb: 1,
                                color: "#0b2a4a",
                                fontSize: "1.05rem",
                                textAlign: { xs: "center", sm: "left", md: "center" }, // ✅ center title only on mobile
                            }}
                        >
                            {step.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#444",
                                lineHeight: 1.6,
                                maxWidth: "260px",
                                textAlign: { xs: "center", sm: "left", md: "center" }, // ✅ center text only on mobile
                                mx: { xs: "auto", sm: 0 }, // ✅ center description block on mobile
                            }}
                        >
                            {step.desc}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

            {/* Section Heading */}
            <Typography
                variant="h2"
                sx={{
                    mt: { xs: 8, md: 12 },
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    color: "#0b2a4a",
                }}
            >
                Project Timeline and <br /> Execution
            </Typography>
        </Box>
    );
};

export default Section3;
