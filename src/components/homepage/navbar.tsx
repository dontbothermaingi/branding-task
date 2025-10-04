import WhatsAppButton from "../ui/whatsapp-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Typography } from "@mui/material";

interface NavbarProps {
  scrollToAbout: () => void;
  scrollToServices: () => void;
  scrollToTiktok: () => void;
}

function Navbar({
  scrollToAbout,
  scrollToServices,
  scrollToTiktok,
}: NavbarProps) {
  const items = [
    { title: "Home", url: "/", refr: scrollToAbout },
    { title: "About", url: "/", refr: scrollToAbout },
    { title: "Services", url: "/", refr: scrollToServices },
    { title: "Tiktok", url: "/", refr: scrollToTiktok },
  ];

  return (
    <div className="bg-black/10 w-full border border-[gray] rounded-full flex items-center justify-between px-6 md:px-10 py-3 relative">
      <div className="flex items-center gap-2">
        {/* Left (Logo) */}
        <div className="">
          <img
            src="/logo3.png"
            alt="logo"
            className="object-cover w-25 h-12 lg:w-35 lg:h-17 text-white"
          />
        </div>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="hidden lg:flex flex-row gap-6 justify-center">
        {items.map((item, index) => (
          <Typography
            key={index}
            color="white"
            fontFamily={"IT Medium"}
            fontSize={"19px"}
            onClick={item.refr}
            sx={{ cursor: "pointer" }}
          >
            {item.title}
          </Typography>
        ))}
      </div>

      {/* Right (WhatsApp + Mobile Menu) */}
      <div className="flex items-center gap-3">
        {/* WhatsApp button (desktop only) */}
        <div className="hidden md:flex">
          <WhatsAppButton />
        </div>

        {/* Mobile Drawer Trigger */}
        <Drawer>
          <DrawerTrigger className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </DrawerTrigger>
          <DrawerContent className="bg-white text-[white]">
            <DrawerHeader>
              <DrawerTitle className="text-[black] text-lg font-medium">
                Kenny Motors
              </DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col gap-4 px-4">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={item.refr}
                  className="text-[black] text-base text-left"
                >
                  {item.title}
                </button>
              ))}
            </div>

            <DrawerFooter className="mt-auto flex flex-col gap-4">
              <WhatsAppButton />
              <a href="tel:‎+971 55 147 5589">
                <Button style={{ fontFamily: "IT Bold" }} className="w-full">
                  Call
                </Button>
              </a>
              <DrawerClose>
                <Button
                  variant="outline"
                  className="w-full bg-red-600 flex items-center gap-2"
                >
                  <X className="w-4 h-4" /> Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
