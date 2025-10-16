import { useNavigate } from 'react-router-dom';

export const useAnchorScroll = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (anchorId: string, retries = 0) => {
    const section = document.getElementById(anchorId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (retries < 10) {
      // Retry up to 10 times (1 second total) if element not found yet
      setTimeout(() => scrollToSection(anchorId, retries + 1), 100);
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string) => {
    e.preventDefault();
    
    // Remove leading # if present
    const cleanAnchor = anchorId.startsWith('#') ? anchorId.substring(1) : anchorId;
    
    if (window.location.pathname === '/') {
      // Already on homepage - just scroll
      scrollToSection(cleanAnchor);
    } else {
      // Navigate to homepage with anchor using React Router
      navigate('/', { state: { scrollTo: cleanAnchor } });
    }
  };

  return { handleAnchorClick };
};