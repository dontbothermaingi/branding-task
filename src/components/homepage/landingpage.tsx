import { Typography } from "@mui/material";
import Navbar from "../homepage/navbar";
import { Button } from "../ui/button";

function LandingPage() {
  return (
    <div className="h-screen bg-[url('/l3.jpg')] bg-cover bg-center lg:bg-left relative">
      <div className="absolute bg-gradient-to-r from-black/60 to-black/10 h-full w-full" />

      {/* Navbar */}
      <div className="px-6 md:px-20 pt-6 md:pt-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="absolute bottom-10 md:bottom-20 left-5 md:left-20 flex flex-col gap-4 max-w-[90%] md:max-w-[60%]">
        <Typography
          color="white"
          fontFamily={"IT Medium"}
          fontSize={{ xs: "28px", sm: "40px", md: "50px", lg: "60px" }}
          lineHeight={1.1}
        >
          Your One-Stop Destination for <br /> Auto Parts and Cars.
        </Typography>

        <Typography
          color="white"
          fontFamily={"IT Light"}
          fontSize={{ xs: "14px", sm: "16px", lg: "18px" }}
        >
          Find the right spares, upgrade your vehicle, and drive worry-free —
          all in one place.
        </Typography>

        <div>
          <Button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4">
            <Typography
              fontFamily={"IT Bold"}
              fontSize={{ xs: "14px", sm: "16px" }}
            >
              Learn More
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
