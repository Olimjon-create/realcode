import { AppBar, Button, Box, Grid, Typography } from "@mui/material";
import { FiMenu, FiPhone } from "react-icons/fi";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const languages = {
  en: "/static/icons/uk_flag.svg",
  de: "/static/icons/de_flag.svg",
};

const MainNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === "light"
    ? {
        boxShadow: theme.shadows[3],
      }
    : {
        backgroundColor: theme.palette.background.paper,
        borderBottomColor: theme.palette.divider,
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        boxShadow: "none",
      }),
}));

export default function MainNavbar(props) {
  const { onOpenSidebar, ...other } = props;

  return (
    <AppBar
      sx={{
        background: "white",
        color: "black",
        padding: "20px 100px",
      }}
    >
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "16px" }} variant="subtitle1">
                Online Kurslar
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px" }} variant="subtitle1">
                Offline kurslar
              </Typography>
            </Box>
            <Box>
              <Button size="small" variant="outlined">
                <FiPhone />
                <Typography
                  sx={{ fontSize: "16px", ml: 1 }}
                  variant="subtitle1"
                >
                  +998 (95) 727-22-12
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          onClick={onOpenSidebar}
          sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none',
            },
          }}
        >
          <FiMenu />
        </IconButton>
      </Toolbar> */}
    </AppBar>
  );
}

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

MainNavbar.defaultProps = {
  onOpenSidebar: null,
};
