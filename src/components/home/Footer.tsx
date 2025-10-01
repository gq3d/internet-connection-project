import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <>
      <footer className="bg-muted/50 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Satellite" size={32} className="text-primary" />
                <span className="text-xl font-bold">NetConnect</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Надежный беспроводной интернет в Московской области
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <div className="space-y-2 text-sm">
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Интернет-подключение</a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Спутниковый интернет</a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Видеонаблюдение</a>
                <Link to="/equipment" className="block text-muted-foreground hover:text-primary transition-colors">Оборудование</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <div className="space-y-2 text-sm">
                <a href="#tariffs" className="block text-muted-foreground hover:text-primary transition-colors">Тарифы</a>
                <a href="#coverage" className="block text-muted-foreground hover:text-primary transition-colors">Покрытие</a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">О компании</a>
                <a href="#contacts" className="block text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <a 
                  href="tel:+79015000078"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
                <a 
                  href="https://wa.me/79015000078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-green-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp
                </a>
                <p className="text-muted-foreground">Московская область</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© 2015 NetConnect. Все права защищены.</p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/79015000078" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
          title="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" size={24} />
        </a>
      </div>
    </>
  );
}
