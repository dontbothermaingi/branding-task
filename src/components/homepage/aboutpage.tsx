import { Typography } from "@mui/material";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function AboutPage() {
  const values = [
    {
      quality: "Trustworthy",
      text: "We understand that buying a car is a big decision, which is why trust is at the heart of everything we do. From sourcing to delivery, we are transparent in our processes and only deal with genuine, well-maintained vehicles that meet our strict standards.",
    },
    {
      quality: "Service-Oriented",
      text: "Our clients come first. We take pride in guiding each customer through the car-buying journey with personalized support, clear communication, and a commitment to making car ownership simple and stress-free.",
    },
    {
      quality: "Fair-Minded",
      text: "We believe everyone deserves access to quality vehicles at fair prices. By negotiating on your behalf and eliminating unnecessary costs, we ensure that you get real value without compromising on reliability.",
    },
  ];

  return (
    <div className="h-screen bg-white flex px-50 py-30 gap-5">
      <section className="w-1/3  border-black">
        <Typography
          color="#ff6900"
          fontFamily={"IT Medium"}
          fontSize={{ lg: "70px" }}
        >
          About Us
        </Typography>
      </section>
      <section className="w-2/3  border-black flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <Typography fontFamily={"IT Regular"} fontSize={{ lg: "20px" }}>
            At [Business Name], we specialize in connecting Ugandan car buyers
            with high-quality used vehicles imported directly from Dubai. Acting
            as a trusted middleman, we take the stress out of car sourcing by
            ensuring that every vehicle is carefully selected, thoroughly
            checked, and fairly priced.
          </Typography>
          <Typography fontFamily={"IT Light"} fontSize={{ lg: "20px" }}>
            Our mission is simple: to make car ownership more accessible by
            offering reliable, genuine, and well-maintained cars that meet the
            unique needs of our clients. Behind the business is a passion for
            service and integrity.
          </Typography>
          <Typography fontFamily={"IT Light"} fontSize={{ lg: "20px" }}>
            We believe buying a car should be a transparent and personal
            experience, built on trust and long-term relationships—not just
            transactions. Whether you’re purchasing your first car or upgrading
            to your dream ride, we’re here to guide you every step of the way.
          </Typography>
        </div>

        <div className="fle flex-col py-5">
          {/* <Typography fontFamily={"IT Medium"} fontSize={{ lg: "30px" }}>
            Our Values
          </Typography> */}
          <div className="flex gap-5">
            {values.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <Typography
                      fontFamily={"IT Medium"}
                      fontSize={{ lg: "20px" }}
                      color="#ff6900"
                    >
                      {item.quality}
                    </Typography>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography fontFamily={"IT Light"}>{item.text}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
