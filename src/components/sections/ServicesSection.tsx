import ServiceCard from "@/components/ServiceCard";
import { mainServices } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Полный спектр ритуальных услуг</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наша компания предоставляет все необходимые услуги для организации достойных похорон. Мы поможем вам в трудную минуту.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
