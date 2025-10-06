import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Icon from "@/components/ui/icon";

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Устанавливаем HTTP-статус 404 для SSR и пререндеринга
    if (typeof window !== 'undefined' && window.history) {
      window.history.replaceState({}, '', location.pathname);
    }
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Страница не найдена | NetConnect</title>
        <meta name="prerender-status-code" content="404" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-background to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <Icon name="AlertCircle" size={80} className="text-primary mx-auto mb-6" />
            </div>
            
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Страница не найдена</h2>
            <p className="text-xl text-muted-foreground mb-8">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                <Icon name="Satellite" size={20} className="mr-2" />
                Наши услуги
              </Link>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Популярные разделы:</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/tariffs" className="text-primary hover:underline">Тарифы</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/coverage" className="text-primary hover:underline">Покрытие</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/signal-boost" className="text-primary hover:underline">Усиление сигнала</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/faq" className="text-primary hover:underline">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFoundPage;
