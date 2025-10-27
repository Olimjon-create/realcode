import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

export default function ContactUs() {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#152443",
        mb: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 350px",
      }}
    >
      <Typography variant="h3" sx={{ color: "#ffcc19" }} mb={1}>
        Qo'shimcha ma'lumotlar olmoqchimisiz?
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
          color: "#bac5e3",
          mb: 4,
        }}
      >
        Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq <br />
        qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
      </Typography>
      <Formik
        initialValues={INITIAL_VALUES}
        // validationSchema={VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        {(formikProps) => <Form {...formikProps} />}
      </Formik>
    </Box>
  );
}

function Form(props) {
  const {
    t,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Grid container spacing={3} sx={{ alignItems: "center" }}>
        <Grid item xs={2} />
        <Grid xs={4} item>
          <Typography variant="subtitle2" sx={{ mb: "3px", color: "#bac5e3" }}>
            Ismingiz
          </Typography>
          <TextField
            fullWidth
            placeholder="Ismingiz"
            size="small"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.name && errors.name}
            InputLabelProps={{
              style: { fontSize: "16px" }, // O'zgartirilgan o'lchamdagi harf kichikligi
            }}
          />
        </Grid>
        <Grid xs={4} item>
          <Typography variant="subtitle2" sx={{ mb: "3px", color: "#bac5e3" }}>
            Telefon Raqamingiz
          </Typography>
          <TextField
            fullWidth
            placeholder="+998"
            size="small"
            name="phone"
            value={values.phone}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Box sx={{ display: "flex", justifyContent: " center" }}>
            <Button
              size="large"
              sx={{ backgroundColor: "#11B181" }}
              variant="contained"
            >
              Yuborish
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

const INITIAL_VALUES = {
  name: "",
  phone: "",
};
