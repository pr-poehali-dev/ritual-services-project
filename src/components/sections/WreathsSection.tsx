import { Button } from "@/components/ui/button";
import { wreathsFeatures } from "@/data/services";

const WreathsSection = () => {
  return (
    <section id="wreaths" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Венки и цветочные композиции</h2>
            <p className="mb-4 text-muted-foreground">
              Мы предлагаем широкий выбор ритуальных венков и цветочных композиций для церемонии прощания. 
              Наши флористы создают уникальные композиции, которые выражают уважение и память к усопшему.
            </p>
            <ul className="space-y-2 mb-6">
              {wreathsFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button>Заказать венок</Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1605126914174-6eb1bff470ec?q=80&w=800&auto=format&fit=crop" 
              alt="Венки" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WreathsSection;
