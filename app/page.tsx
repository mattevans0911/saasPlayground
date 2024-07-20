"use client";
import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AppAppBar from "./components/muiLanding/AppAppBar";
import Hero from "./components/muiLanding/Hero";
import LogoCollection from "./components/muiLanding/LogoCollection";
import Highlights from "./components/muiLanding/Highlights";
import Pricing from "./components/muiLanding/Pricing";
import Features from "./components/muiLanding/Features";
import Testimonials from "./components/muiLanding/Testimonials";
import FAQ from "./components/muiLanding/FAQ";
import Footer from "./components/muiLanding/Footer";
import getLPTheme from "./components/muiLanding/getLPTheme";

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function ToggleCustomTheme({
  showCustomTheme,
  toggleCustomTheme,
}: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    ></Box>
  );
}

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <LogoCollection />
        <Features />
        <Testimonials />
        <Highlights />
        <Pricing />
        <FAQ />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
