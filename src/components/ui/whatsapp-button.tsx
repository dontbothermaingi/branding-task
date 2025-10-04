import { Button } from "./button";

export default function WhatsAppButton() {
  const phoneNumber = "+256762932954"; // client’s WhatsApp number
  const message = "Hi, I'm interested in your cars!"; // optional message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        textDecoration: "none",
        fontWeight: "bold",
        fontFamily: "IT Bold",
      }}
    >
      <Button className="bg-[#25D366]">Chat on WhatsApp</Button>
    </a>
  );
}
