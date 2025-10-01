import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами для подключения или консультации
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-4">Телефон</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-muted-foreground">+7 (901) 500-00-78</p>
                <a 
                  href="https://wa.me/79015000078" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={16} className="mr-1" />
                  WhatsApp
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">+7 (901) 500-00-87</p>
                <a 
                  href="https://wa.me/79015000087" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={16} className="mr-1" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-4">Email</h3>
            <p className="text-muted-foreground">info@mosoblconnect.ru</p>
          </div>
          
          <div className="text-center">
            <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-4">Адрес</h3>
            <p className="text-muted-foreground">Москва, Партийный пер., дом 1</p>
          </div>
          
          <div className="text-center">
            <Icon name="Clock" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <p className="text-muted-foreground">24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
