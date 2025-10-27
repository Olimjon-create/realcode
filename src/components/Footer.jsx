import { Divider, Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ padding: "0 150px" }}>
      <Divider />
      <Box
        my={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ color: "#667085" }}>
          © Copyright 2024 RealCode - IT Academy.
        </Typography>
        <Typography variant="caption" sx={{ color: "#667085" }}>
          realcode.uz
        </Typography>
      </Box>
    </Box>
  );
}
