import { useNavigate } from "react-router";
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

function Navbar() {
  const navigate = useNavigate();

  const items = [
    { title: "Home", url: "/" },
    { title: "About", url: "/" },
    { title: "Services", url: "/" },
    { title: "Tiktok", url: "/" },
  ];

  return (
    <div className="bg-black/10 w-full border border-[gray] rounded-full flex items-center justify-between px-6 md:px-10 py-3 relative">
      {/* Left (Logo) */}
      <span className="text-white font-medium text-lg">Kenny Motors</span>

      {/* Center (Desktop Menu) */}
      <div className="hidden lg:flex flex-row gap-6 justify-center">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-white cursor-pointer text-base"
            onClick={() => navigate(item.url)}
          >
            {item.title}
          </span>
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
                  onClick={() => navigate(item.url)}
                  className="text-[black] text-base text-left"
                >
                  {item.title}
                </button>
              ))}
            </div>

            <DrawerFooter className="mt-auto flex flex-col gap-4">
              <WhatsAppButton />
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
