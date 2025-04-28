import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Первый Ритуальный</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-accent transition-colors">
            Услуги
          </a>
          <a href="#monuments" className="hover:text-accent transition-colors">
            Памятники
          </a>
          <a href="#wreaths" className="hover:text-accent transition-colors">
            Венки
          </a>
          <a href="#burials" className="hover:text-accent transition-colors">
            Захоронения
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Контакты
          </a>
        </div>

        <Button variant="outline" size="sm" className="hidden md:block">
          <a href="tel:+78001234567">8 (800) 123-45-67</a>
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-foreground" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-primary-foreground pt-2 pb-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a 
              href="#services" 
              className="py-2 border-b border-primary-foreground/20"
              onClick={toggleMenu}
            >
              Услуги
            </a>
            <a 
              href="#monuments" 
              className="py-2 border-b border-primary-foreground/20"
              onClick={toggleMenu}
            >
              Памятники
            </a>
            <a 
              href="#wreaths" 
              className="py-2 border-b border-primary-foreground/20"
              onClick={toggleMenu}
            >
              Венки
            </a>
            <a 
              href="#burials" 
              className="py-2 border-b border-primary-foreground/20"
              onClick={toggleMenu}
            >
              Захоронения
            </a>
            <a 
              href="#contact" 
              className="py-2"
              onClick={toggleMenu}
            >
              Контакты
            </a>
            <Button variant="outline" size="sm" className="mt-2">
              <a href="tel:+78001234567">8 (800) 123-45-67</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
