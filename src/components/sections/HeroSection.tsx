import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-primary to-accent/80 text-white">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">Ритуальные услуги с заботой и вниманием</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">Мы поможем вам организовать достойные проводы близкого человека в трудную минуту</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            <a href="#services">Наши услуги</a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            <Phone className="mr-2 h-4 w-4" />
            <a href="tel:+78001234567">8 (800) 123-45-67</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
