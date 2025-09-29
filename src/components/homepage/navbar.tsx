import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
function Navbar() {
  const navigate = useNavigate();
  const items = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Option 1",
      url: "/",
    },
    {
      title: "Option 2",
      url: "/",
    },
    {
      title: "Option 3",
      url: "/",
    },
  ];
  return (
    <div className="bg-black/10 w-full border border-[gray] rounded-full flex items-center justify-center px-10 py-7 relative">
      <div className="w-full">
        <Typography
          fontSize={{ lg: "17px" }}
          fontFamily={"IT Regular"}
          color="white"
        >
          Name
        </Typography>
      </div>

      <div className="flex flex-row gap-5 w-full justify-center">
        {items.map((item, index) => (
          <Typography
            fontSize={{ lg: "17px" }}
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
        <Typography
          fontSize={{ lg: "17px" }}
          fontFamily={"IT Regular"}
          color="white"
        >
          Contact Us
        </Typography>
      </div>
    </div>
  );
}

export default Navbar;
