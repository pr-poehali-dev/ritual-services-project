import { storeInfo } from "@/data/services";

const Footer = () => {
  return (
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
            <p className="text-sm opacity-80 mb-1">{storeInfo.address}</p>
            {storeInfo.phones.map((phoneInfo, index) => (
              <p key={index} className="text-sm opacity-80 mb-1">
                {phoneInfo.number} ({phoneInfo.schedule})
              </p>
            ))}
            <p className="text-sm opacity-80">Email: {storeInfo.email}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Режим работы</h3>
            <p className="text-sm opacity-80">
              {storeInfo.workHours}
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Первый Ритуальный. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
