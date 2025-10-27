import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { IoTrophyOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
export default function WhyRealCode() {
  return (
    <Box sx={{ padding: "0 100px", mb: 8 }}>
      <Box>
        <Typography variant="h3">Nima uchun Real Code ?</Typography>
        <Typography
          variant="subtitle1"
          sx={{ maxWidth: "700px", width: "100%", mb: 3 }}
        >
          RealCode - IT Academy zamonaviy kasblar yordamida insonlar hayotini
          yaxshilovchi va kelajakka bo'lgan ishonchni mustahkamlovchi maskan
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardContent sx={{ height: "390px", backgroundColor: "#f9fafb" }}>
              <Box
                sx={{
                  backgroundColor: "#041E42",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <BsBarChart
                  style={{ color: "#fff", width: "45px", height: "45px" }}
                />
              </Box>
              <Typography variant="h4" mb={1}>
                Natijador kurslar
              </Typography>
              <Typography variant="body1" sx={{ color: "#7e7e7e" }}>
                Kurs yakuniga faqatgina saralangan o'quvchilar yetib boradi va
                maxsus amaliy mashg'ulotga jalb qilinadi
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent sx={{ backgroundColor: "#f9fafb" }}>
              <Box
                sx={{
                  backgroundColor: "#041E42",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <BsPeople
                  style={{ color: "#fff", width: "45px", height: "45px" }}
                />
              </Box>
              <Typography variant="h4" mb={1}>
                Mentorlar
              </Typography>
              <Typography variant="body1" sx={{ color: "#7e7e7e" }}>
                Ustozlar haqiqiy praktik Xalqaro toifadagi Dasturchilar
                hisoblanib, hozirda turli Xalqaro IT - kompaniyalarida faoliyat
                yurutib kelishmoqda
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent sx={{ backgroundColor: "#f9fafb" }}>
              <Box
                sx={{
                  backgroundColor: "#041E42",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <IoTrophyOutline
                  style={{ color: "#fff", width: "45px", height: "45px" }}
                />
              </Box>
              <Typography variant="h4" mb={1}>
                Intensiv ta'lim
              </Typography>
              <Typography variant="body1" sx={{ color: "#7e7e7e" }}>
                Dasturlash uchun eng kerakli muhit va sharoitda Intensive ta`lim
                oling, bunda o'quvchilar bor e'tiborlarini dasturlashga
                qaratishadi
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
