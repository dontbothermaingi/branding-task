import { Typography } from "@mui/material";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function Services() {
  const services = [
    {
      title: "Importing Cars Directly from Dubai",
      description:
        "We specialize in sourcing and importing high-quality vehicles straight from Dubai, giving you access to a wide selection of trusted brands and competitive prices. Our direct connections ensure transparency, reliability, and value for your investment.",
    },
    {
      title: "Vehicle Sourcing on Request",
      description:
        "Looking for something specific? We take the hassle out of finding your ideal car by sourcing vehicles based on your exact preferences, budget, and requirements. From luxury models to everyday rides, we make sure you get the perfect match.",
    },
    {
      title: "Assisting with Shipping and Clearing to Uganda",
      description:
        "We handle all the logistics involved in getting your car safely to Uganda, from shipping arrangements to customs clearance. Our experience and network make the process smooth, efficient, and stress-free for you.",
    },
    {
      title: "After-Sales Support and Advice",
      description:
        "Our commitment doesn’t end when your car arrives. We provide ongoing support and expert advice to help you maintain, register, and get the most out of your vehicle, ensuring long-term satisfaction and peace of mind.",
    },
  ];

  return (
    <div className="bg-[#ff6900] w-full flex flex-col lg:flex-row gap-10 px-6 md:px-20 py-10 md:py-20">
      {/* Left Section (Title & Description) */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-20 lg:h-50">
        <Typography
          color="white"
          fontFamily={"IT Medium"}
          fontSize={{ xs: "40px", sm: "50px", md: "60px", lg: "70px" }}
          lineHeight={1.1}
        >
          Services
        </Typography>
        <Typography
          color="white"
          fontFamily={"IT Regular"}
          fontSize={{ xs: "14px", md: "19px" }}
          className="mt-4"
        >
          Our services are designed to provide you with reliable solutions that
          make a real difference. Whether you’re looking for expert guidance,
          hands-on support, or tailored strategies, we focus on understanding
          your needs and delivering results that align with your goals. With a
          commitment to quality and attention to detail, we aim to create
          lasting value and help you move forward with confidence.
        </Typography>
      </div>

      {/* Right Section (Cards) */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-5">
          {services.map((item, index) => (
            <Card key={index} className="h-auto lg:h-60">
              <CardHeader>
                <CardTitle>
                  <Typography
                    fontFamily={"IT Medium"}
                    fontSize={{ xs: "16px", md: "20px" }}
                    color="#ff6900"
                  >
                    {item.title}
                  </Typography>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Typography
                  fontFamily={"IT Light"}
                  fontSize={{ xs: "14px", md: "16px" }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
