import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
import WhatsAppButton from "../ui/whatsapp-button";
function Navbar() {
  const navigate = useNavigate();
  const items = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/",
    },
    {
      title: "Services",
      url: "/",
    },
    {
      title: "Tiktok",
      url: "/",
    },
  ];
  return (
    <div className="bg-black/10 w-full border border-[gray] rounded-full flex items-center justify-center px-10 py-3 relative">
      <div className="w-full">
        <Typography
          fontSize={{ lg: "18px" }}
          fontFamily={"IT Medium"}
          color="white"
        >
          Kenny Motors
        </Typography>
      </div>

      <div className="flex flex-row gap-5 w-full justify-center">
        {items.map((item, index) => (
          <Typography
            fontSize={{ lg: "18px" }}
            color="white"
            sx={{ cursor: "pointer" }}
            key={index}
            fontFamily={"IT Regular"}
            onClick={() => navigate(item.url)}
          >
            {item.title}
          </Typography>
        ))}
      </div>

      <div className="w-full flex flex-row-reverse">
        {/* <Typography
          fontSize={{ lg: "17px" }}
          fontFamily={"IT Regular"}
          color="white"
        >
          Contact Us
        </Typography> */}
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default Navbar;
