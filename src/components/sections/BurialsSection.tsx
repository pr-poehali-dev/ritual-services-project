import { Button } from "@/components/ui/button";
import { burialsFeatures } from "@/data/services";

const BurialsSection = () => {
  return (
    <section id="burials" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Организация захоронения</h2>
            <p className="mb-4 text-muted-foreground">
              Мы предоставляем полный комплекс услуг по организации захоронения, включая подготовку места,
              проведение церемонии и все необходимые ритуальные принадлежности.
            </p>
            <ul className="space-y-2 mb-6">
              {burialsFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button>Подробнее об услуге</Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1601056639638-c53c50e13ead?q=80&w=800&auto=format&fit=crop" 
              alt="Захоронение" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurialsSection;
