import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { storeInfo } from "@/data/services";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setPhone("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Свяжитесь с нами</CardTitle>
          <CardDescription>
            Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full" disabled={submitted}>
              {submitted ? "Отправлено" : "Отправить"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Контактная информация</CardTitle>
          <CardDescription>
            Круглосуточная поддержка и консультация по всем вопросам
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {storeInfo.phones.map((phoneInfo, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium">Телефон</h4>
                <p className="text-sm text-muted-foreground">{phoneInfo.number}</p>
                <p className="text-sm text-muted-foreground">{phoneInfo.schedule}</p>
              </div>
            </div>
          ))}
          
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-sm text-muted-foreground">{storeInfo.email}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Адрес</h4>
              <p className="text-sm text-muted-foreground">{storeInfo.address}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Режим работы</h4>
              <p className="text-sm text-muted-foreground">{storeInfo.workHours}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
