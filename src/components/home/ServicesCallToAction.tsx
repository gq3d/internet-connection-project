import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function ServicesCallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Wifi" size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Полный спектр телекоммуникационных услуг
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Интернет, видеонаблюдение, Wi-Fi оборудование, охранные системы и многое другое
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  Все наши услуги
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Link>
                
                <a 
                  href="#contacts"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white/30 transition-all"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}