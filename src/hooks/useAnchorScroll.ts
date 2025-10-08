import { useLocation, useNavigate } from 'react-router-dom';

export const useAnchorScroll = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string) => {
    e.preventDefault();
    
    // Remove leading # if present
    const cleanAnchor = anchorId.startsWith('#') ? anchorId.substring(1) : anchorId;
    
    if (location.pathname === '/') {
      // Already on homepage - just scroll
      const section = document.getElementById(cleanAnchor);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(cleanAnchor);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return { handleAnchorClick };
};
