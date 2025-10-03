import { Typography } from "@mui/material";
import Navbar from "../homepage/navbar";
import WhatsAppButton from "../ui/whatsapp-button";

interface LandingPageProps {
  scrollToAbout: () => void;
  scrollToServices: () => void;
  scrollToTiktok: () => void;
}

function LandingPage({
  scrollToAbout,
  scrollToServices,
  scrollToTiktok,
}: LandingPageProps) {
  return (
    <div className="h-screen bg-[url('/l3.jpg')] bg-cover bg-center lg:bg-left relative">
      <div className="absolute bg-gradient-to-t lg:bg-gradient-to-r from-black/90 to-black/10 h-full w-full" />

      {/* Navbar */}
      <div className="px-6 md:px-20 pt-6 md:pt-10">
        <Navbar
          scrollToAbout={scrollToAbout}
          scrollToServices={scrollToServices}
          scrollToTiktok={scrollToTiktok}
        />
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
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
