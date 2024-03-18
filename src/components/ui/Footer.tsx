import { Separator } from "./separator";

export const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-xl text-white font-bold tracking-tight">
          MernEats.com
        </span>
        <Separator className="md:hidden w-60" />
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span className="text-xs md:text-base">Privacy Policy</span>
          <span className="text-xs md:text-base">Terms of Service</span>
        </span>
      </div>
    </div>
  );
};
