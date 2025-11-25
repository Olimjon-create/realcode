import { Box, Button, Typography } from "@mui/material";
import img from "../assets/images/header-img.jpeg";

export default function Header() {
  return (
    <Box
      sx={{
        padding: "0 150px",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <Typography variant="h1" sx={{ maxWidth: "400px", width: "100%" }}>
        Zamonaviy kasblarni biz bilar o'rganing
      </Typography>
      <Box>
        <Button
          size="large"
          variant="contained"
          sx={{ mr: 1, background: "#f4ff4f4" }}
        >
          Kurslar
        </Button>
        <Button size="large" variant="outlined">
          Biz bilan bog'lanish
        </Button>
      </Box>
    </Box>
  );
}
