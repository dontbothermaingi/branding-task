import { Typography } from "@mui/material";
import Navbar from "../homepage/navbar";
import { Button } from "../ui/button";

function LandingPage() {
  return (
    <div className="h-screen bg-[url('/l3.jpg')] bg-cover bg-left relative">
      <div className="absolute bg-gradient-to-r from-black/60 to-black/10 h-full w-full" />

      <div className="px-30 pt-10">
        <Navbar />
      </div>

      <div className="absolute bottom-20 left-20 flex flex-col gap-4">
        <Typography
          color="white"
          fontFamily={"IT Medium"}
          fontSize={{ lg: "60px" }}
          lineHeight={1.0}
        >
          Your One-Stop Destination for <br /> Auto Parts and Cars.
        </Typography>

        <Typography
          color="white"
          fontFamily={"IT Light"}
          fontSize={{ lg: "18px" }}
        >
          Find the right spares, upgrade your vehicle, and drive worry-free —
          all in one place.
        </Typography>
        <div>
          <Button className="px-10 py-4">
            <Typography fontFamily={"IT Bold"}>Learn More</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
