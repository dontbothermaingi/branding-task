import { Typography, useMediaQuery } from "@mui/material";
// import { ArrowRight } from "lucide-react";
import WhatsAppButton from "../ui/whatsapp-button";

function Footer() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="bg-[#1f1f1f] flex flex-col px-6 md:px-20 lg:px-40 py-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <Typography
            fontFamily={"IT Regular"}
            color="white"
            fontSize={isMobile ? "36px" : "60px"}
            lineHeight={1.1}
          >
            Let’s work together <br /> and make cool things!
          </Typography>

          <div>
            <WhatsAppButton />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 w-full lg:w-1/2">
          <div className="flex flex-col gap-2">
            <Typography
              fontFamily={"IT Medium"}
              color="white"
              fontSize={{ lg: "20px" }}
            >
              Contact
            </Typography>
            {/* <Typography fontFamily={"IT Light"} color="gray">
              104, The Offices, 22nd street - 3rd - Arjan - Al Barsha South -
              Dubai
            </Typography> */}
            <Typography fontFamily={"IT Light"} color="gray">
              info@kennymotors.ae
            </Typography>
            <Typography fontFamily={"IT Light"} color="gray">
              +256762932954
            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <Typography
              fontFamily={"IT Medium"}
              color="white"
              fontSize={{ lg: "20px" }}
            >
              Follow Us
            </Typography>

            {/* <a href="https://www.linkedin.com/company/amana-homes-real-estate/">
              <Typography fontFamily={"IT Light"} color="gray">
                LinkedIn
              </Typography>
            </a> */}

            {/* <a href="https://www.facebook.com/amanahomesrealestate/">
              <Typography fontFamily={"IT Light"} color="gray">
                Facebook
              </Typography>
            </a> */}

            {/* <a href="https://www.instagram.com/amanahomes_realestate/">
              <Typography fontFamily={"IT Light"} color="gray">
                Instagram
              </Typography>
            </a> */}

            {/* <a href="https://www.snapchat.com/add/amanahomes">
              <Typography fontFamily={"IT Light"} color="gray">
                Snapchat
              </Typography>
            </a> */}

            {/* <a href="https://www.youtube.com/@AmanaHomesRealEstate">
              <Typography fontFamily={"IT Light"} color="gray">
                YouTube
              </Typography>
            </a> */}

            <a href="https://www.tiktok.com/@kennyelitemotors1">
              <Typography fontFamily={"IT Light"} color="gray">
                Tiktok
              </Typography>
            </a>

            {/* <a href=" https://x.com/amanahomesllc">
              <Typography fontFamily={"IT Light"} color="gray">
                Twitter
              </Typography>
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10">
        <Typography
          fontFamily={"IT Medium"}
          fontSize={isMobile ? "60px" : "150px"}
          color="white"
          textAlign={"center"}
        >
          Kenny Motors
        </Typography>

        <div className="border-t border-[gray] w-full mt-5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 pt-5">
          <Typography fontFamily={"IT Light"} color="gray" textAlign="center">
            © Designed by Maingi, Powered by Kenny Motors
          </Typography>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {/* <Typography fontFamily={"IT Light"} color="gray">
              Home
            </Typography>
            <Typography fontFamily={"IT Light"} color="gray">
              About
            </Typography>
            <Typography fontFamily={"IT Light"} color="gray">
              Properties
            </Typography>
            <Typography fontFamily={"IT Light"} color="gray">
              Agents
            </Typography> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
