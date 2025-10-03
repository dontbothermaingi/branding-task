import { Typography } from "@mui/material";
import { Card, CardContent } from "@/components/ui/card";

function Whatwedeal() {
  const cars = [
    {
      title: "Super Cars",
      image: "/w2.jpg",
      description:
        "Experience the ultimate blend of speed, luxury, and innovation — where engineering meets adrenaline.",
    },
    {
      title: "Luxury Rides",
      image: "/luxury.jpg",
      description:
        "Step into pure elegance and comfort with handcrafted interiors and timeless design.",
    },
    {
      title: "Electric Future",
      image: "/electric.jpg",
      description:
        "Silent power meets cutting-edge technology — redefining the way we drive tomorrow.",
    },
    {
      title: "Off-Road Beasts",
      image: "/offroad2.jpg",
      description:
        "Conquer every terrain with rugged power and unstoppable performance.",
    },
    {
      title: "Classic Legends",
      image: "/classic.jpg",
      description:
        "A tribute to timeless icons — where heritage meets pure driving passion.",
    },
  ];

  return (
    <div className="pb-30 px-5 md:px-10 lg:px-20 bg-[#1f1f1f]">
      <div className="flex flex-col justify-center items-center py-15">
        <Typography
          fontFamily={"IT Medium"}
          fontSize={{ lg: "50px", md: "40px", xs: "32px" }}
          textAlign={"center"}
          color="white"
        >
          Explore What We Can Help You Access
        </Typography>
        <div className="max-w-3xl w-full">
          <Typography
            fontFamily={"IT Light"}
            fontSize={{ lg: "18px", md: "16px", xs: "14px" }}
            textAlign={"center"}
            color="white"
          >
            From modern supercars to timeless classics, we specialize in
            connecting buyers with vehicles that match their lifestyle and
            ambitions.
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {cars.map((car, index) => (
          <Card
            style={{ backgroundImage: `url(${car.image})` }}
            key={index}
            className="group w-full bg-cover h-80 sm:h-96 lg:h-100 relative transition-all duration-500 ease-out border border-gray-400"
          >
            <div className="absolute inset-0 bg-gradient-to-t rounded-2xl from-black/60 to-black/20 h-full w-full group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:to-black/20" />
            <CardContent className="absolute bottom-5 left-0 px-4 sm:px-6">
              <Typography
                fontFamily={"IT Bold"}
                fontSize={{ lg: "40px", md: "32px", xs: "28px" }}
                color="white"
                className="relative lg:translate-y-13 lg:group-hover:translate-y-0 transition-all duration-500 ease-out"
              >
                {car.title}
              </Typography>

              <p
                style={{ fontFamily: "IT Regular" }}
                className="text-white text-sm sm:text-base lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 ease-out"
              >
                {car.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Whatwedeal;
