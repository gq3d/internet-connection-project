import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 group"
          aria-label="Прокрутить наверх"
        >
          <Icon name="ArrowUp" size={24} className="group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
}
