import { Box, Button, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="24px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: {
            lg: "44px",
            sm: "40px",
          },
        }}
        mb="24px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="35px" mb={4}>
        Checkout the most effecting exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#FF2625"
        sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="Hero Banner"
        className="hero-banner__image"
      />
    </Box>
  );
};

export default HeroBanner;
