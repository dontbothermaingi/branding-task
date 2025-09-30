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
    <div className="h-screen relative py-20 flex flex-col gap-5">
      <div className="bg-[url('tiktok.svg')] inset-5 bg-no-repeat bg-contain bg-left absolute w-200 h-200 opacity-10 -ml-70" />
      <div className="flex items-center justify-center">
        <div className="w-200 flex flex-col justify-center items-center">
          <Typography
            textAlign={"center"}
            fontFamily={"IT Medium"}
            fontSize={{ lg: "60px" }}
            lineHeight={{ lg: 1.1 }}
          >
            Discover More on TikTok
          </Typography>
          <Typography
            fontFamily={"IT Light"}
            fontSize={{ lg: "18px" }}
            textAlign={"center"}
          >
            From sleek sedans to powerful SUVs, our TikTok feed showcases the
            vehicles we have ready for you. Follow along and find your match.
          </Typography>
        </div>
      </div>
      <div className="">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@kennyelitemotors1"
          data-unique-id="kennyelitemotors1"
          data-embed-type="creator"
          style={{ maxWidth: "780px", minWidth: "288px" }}
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

      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
}

export default Tiktok;
