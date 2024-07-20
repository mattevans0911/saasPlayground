import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SavingsIcon from "@mui/icons-material/Savings";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <AutoAwesomeIcon />,
    title: "AI-Powered Product Descriptions",
    description:
      "Upload images and let our AI create accurate, engaging descriptions, enhancing your product listings and appealing to buyers.",
  },
  {
    icon: <AttachMoneyIcon />,
    title: "Accurate Price Estimates",
    description:
      "Our system evaluates item condition and provides market-based price points, setting realistic expectations and improving auction outcomes.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "User-Friendly Interface",
    description:
      "AuctionMaster's intuitive platform simplifies your workflow. Upload images, and our AI handles the rest efficiently.",
  },
  {
    icon: <SavingsIcon />,
    title: "Time and Cost Efficiency",
    description:
      "Automate descriptions and price research with AuctionMaster, allowing you to focus on running successful auctions and growing your business.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 8, lg: 20 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
