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
        padding: "12px 20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Chat on WhatsApp
    </a>
  );
}
