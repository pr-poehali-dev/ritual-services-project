import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Организация похорон",
      description: "Полный комплекс услуг по организации похорон. Профессиональная помощь в трудную минуту.",
      imageUrl: "https://images.unsplash.com/photo-1595212483088-20cca41c158a?q=80&w=600&auto=format&fit=crop",
      link: "#services"
    },
    {
      title: "Памятники",
      description: "Изготовление и установка памятников из гранита, мрамора и других материалов. Индивидуальный дизайн.",
      imageUrl: "https://images.unsplash.com/photo-1567705232329-9ebd11a01462?q=80&w=600&auto=format&fit=crop",
      link: "#monuments"
    },
    {
      title: "Венки и цветы",
      description: "Большой выбор ритуальных венков и цветочных композиций для церемонии прощания.",
      imageUrl: "https://images.unsplash.com/photo-1605126914174-6eb1bff470ec?q=80&w=600&auto=format&fit=crop",
      link: "#wreaths"
    }
  ];

  const monuments = [
    {
      title: "Гранитные памятники",
      description: "Долговечные памятники из гранита различных цветов и форм. Возможность художественного оформления.",
      imageUrl: "https://images.unsplash.com/photo-1599820239365-4c756e72dba3?q=80&w=600&auto=format&fit=crop",
      link: "#monuments"
    },
    {
      title: "Мраморные памятники",
      description: "Элегантные памятники из мрамора. Изысканный внешний вид и индивидуальные решения.",
      imageUrl: "https://images.unsplash.com/photo-1598713323196-8b6b76fa28b5?q=80&w=600&auto=format&fit=crop",
      link: "#monuments"
    },
    {
      title: "Комплексное благоустройство",
      description: "Установка памятников, оград, плитки, столиков и лавочек. Создание цветников и озеленение.",
      imageUrl: "https://images.unsplash.com/photo-1603969879348-16155f49c595?q=80&w=600&auto=format&fit=crop",
      link: "#monuments"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
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
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Полный спектр ритуальных услуг</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наша компания предоставляет все необходимые услуги для организации достойных похорон. Мы поможем вам в трудную минуту.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Monuments Section */}
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
      
      {/* Wreaths Section */}
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
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Ритуальные венки любых размеров</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Живые и искусственные цветочные композиции</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Индивидуальный дизайн</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Доставка в любую точку города</span>
                </li>
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
      
      {/* Burials Section */}
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
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Подготовка места захоронения</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Оформление документов</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Ритуальный транспорт</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Организация прощания</span>
                </li>
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
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Связаться с нами</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы доступны 24 часа в сутки без выходных. Свяжитесь с нами любым удобным способом.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Первый Ритуальный</h3>
              <p className="text-sm opacity-80">
                Полный спектр ритуальных услуг. Мы помогаем организовать достойные проводы близкого человека.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3">Контакты</h3>
              <p className="text-sm opacity-80 mb-1">г. Москва, ул. Ритуальная, д. 1</p>
              <p className="text-sm opacity-80 mb-1">Телефон: 8 (800) 123-45-67</p>
              <p className="text-sm opacity-80">Email: info@ritual-service.ru</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3">Режим работы</h3>
              <p className="text-sm opacity-80">
                Круглосуточно, без выходных и праздничных дней
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-80">
            <p>© {new Date().getFullYear()} Первый Ритуальный. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
