import { Typography } from "@mui/material";
import { useEffect } from "react";

function Tiktok() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen relative py-16 flex flex-col gap-8 px-4">
      {/* Background watermark */}
      <div className="absolute inset-0 bg-[url('tiktok.svg')] bg-no-repeat bg-contain bg-left opacity-10 pointer-events-none lg:w-200 lg:h-200 -ml-60" />

      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="max-w-3xl flex flex-col justify-center items-center gap-4 text-center">
          <Typography
            sx={{
              fontFamily: "IT Medium",
              fontSize: { xs: "32px", sm: "40px", md: "50px", lg: "60px" },
              lineHeight: 1.1,
            }}
          >
            Discover More on TikTok
          </Typography>
          <Typography
            sx={{
              fontFamily: "IT Light",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            From sleek sedans to powerful SUVs, our TikTok feed showcases the
            vehicles we have ready for you. Follow along and find your match.
          </Typography>
        </div>
      </div>

      {/* TikTok Embed */}
      <div className="flex justify-center">
        <blockquote
          className="tiktok-embed w-full max-w-[780px]"
          cite="https://www.tiktok.com/@kennyelitemotors1"
          data-unique-id="kennyelitemotors1"
          data-embed-type="creator"
          style={{ minWidth: "288px" }}
        >
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@kennyelitemotors1?refer=creator_embed"
            >
              @kennyelitemotors1
            </a>
          </section>
        </blockquote>
      </div>
    </div>
  );
}

export default Tiktok;
