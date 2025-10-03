import { Typography } from "@mui/material";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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
    <div>
      <div className=" bg-white flex flex-col md:flex-row px-6 md:px-20 py-10 md:py-20 gap-10">
        {/* Left Section (About Title) */}
        <section className="w-full md:w-1/3">
          <Typography
            color=""
            fontFamily={"IT Medium"}
            fontSize={{ xs: "40px", sm: "50px", md: "60px", lg: "70px" }}
            lineHeight={1.1}
          >
            About Us
          </Typography>
        </section>

        {/* Right Section (Content + Values) */}
        <section className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Typography
              fontFamily={"IT Regular"}
              fontSize={{ xs: "16px", md: "20px" }}
            >
              At Kenny Motors, we specialize in connecting Ugandan car buyers
              with high-quality used vehicles imported directly from Dubai.
              Acting as a trusted middleman, we take the stress out of car
              sourcing by ensuring that every vehicle is carefully selected,
              thoroughly checked, and fairly priced.
            </Typography>
            <Typography
              fontFamily={"IT Light"}
              fontSize={{ xs: "16px", md: "20px" }}
            >
              Our mission is simple: to make car ownership more accessible by
              offering reliable, genuine, and well-maintained cars that meet the
              unique needs of our clients. Behind the business is a passion for
              service and integrity.
            </Typography>
            <Typography
              fontFamily={"IT Light"}
              fontSize={{ xs: "16px", md: "20px" }}
            >
              We believe buying a car should be a transparent and personal
              experience, built on trust and long-term relationships—not just
              transactions. Whether you’re purchasing your first car or
              upgrading to your dream ride, we’re here to guide you every step
              of the way.
            </Typography>
          </div>

          {/* Our Values Section */}
          <div className="py-5">
            <div className="flex flex-col lg:flex-row gap-5">
              {values.map((item, index) => (
                <Card key={index} className="flex-1">
                  <CardHeader>
                    <CardTitle>
                      <Typography
                        fontFamily={"IT Medium"}
                        fontSize={{ xs: "18px", md: "20px" }}
                        color="#ff6900"
                      >
                        {item.quality}
                      </Typography>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Typography
                      fontFamily={"IT Light"}
                      fontSize={{ xs: "14px", md: "16px" }}
                    >
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
