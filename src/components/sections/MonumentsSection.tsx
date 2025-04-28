import ServiceCard from "@/components/ServiceCard";
import { monuments } from "@/data/services";

const MonumentsSection = () => {
  return (
    <section id="monuments" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Памятники и мемориалы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Изготовление и установка памятников любой сложности. Индивидуальный подход к каждому заказу.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {monuments.map((monument, index) => (
            <ServiceCard key={index} {...monument} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonumentsSection;
