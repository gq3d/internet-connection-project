import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <>
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Satellite" size={24} className="text-primary" />
              <span className="text-lg font-semibold">NetConnect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2015 NetConnect. Все права защищены.
            </p>
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
