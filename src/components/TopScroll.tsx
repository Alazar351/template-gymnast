import { ChevronsUp } from "lucide-react";

export default function TopScroll() {
  return (
    <a
      href="#"
      className="fixed bottom-4 right-5 flex size-10 animate-bounce items-center justify-center border-2 border-[#E31C25] text-[#E31C25] hover:bg-[#E31C25] hover:text-white"
    >
      <ChevronsUp size={20} />
    </a>
  );
}
