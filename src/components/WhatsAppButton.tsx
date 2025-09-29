import Icon from '@/components/ui/icon';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/79999999999', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Связаться в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform" />
    </button>
  );
}