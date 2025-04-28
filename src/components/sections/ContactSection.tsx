import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
