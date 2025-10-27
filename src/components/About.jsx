import { Box, Grid, IconButton, Typography } from "@mui/material";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
};
const center = {
  lat: 40.138259142658725, // default latitude
  lng: 67.82139170468653, // default longitude
};
export default function About() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_zbzyuMh4kE2BZ-VsWcnQSQr_hHyM5LY",
    libraries,
  });
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <Grid container spacing={3} sx={{ padding: "0 150px", mb: 8 }}>
      <Grid item xs={6}>
        <Typography variant="h1" sx={{ mb: 4 }}>
          Kontaktlar
        </Typography>
        <Box>
          <Typography variant="subtitle1" sx={{ color: "#667085" }}>
            Telefon raqam:
          </Typography>
          <Typography variant="body1">+998 (95) 727-22-12</Typography>
        </Box>
        <Box my={3}>
          <Typography variant="subtitle1" sx={{ color: "#667085" }}>
            Elekron pochta:
          </Typography>
          <Typography variant="body1">realcode.info@gmail.com</Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="subtitle1" sx={{ color: "#667085" }}>
            Manzilimiz:
          </Typography>
          <Typography variant="body1">
            Jizzax shahri, Rashidov ko'chasi <br /> (Asaka bank ro'parasi)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ backgroundColor: "primary.main" }}>
            <FaTelegramPlane style={{ color: "white" }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: "primary.main", mx: "5px" }}>
            <AiFillInstagram style={{ color: "white" }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: "primary.main" }}>
            <FaYoutube style={{ color: "white" }} />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </Grid>
    </Grid>
  );
}
