import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Satellite" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">NetConnect</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium hover:text-success transition-colors">Главная</a>
            <a href="/#services" className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
            <a href="/#tariffs" className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
            <a href="/#pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</a>
            <a href="/engineer-pricing" className="text-sm font-medium hover:text-success transition-colors">Услуги инженера</a>
            <a href="/#esim" className="text-sm font-medium hover:text-success transition-colors">eSIM</a>
            <a href="/#coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</a>
            <a href="/#about" className="text-sm font-medium hover:text-success transition-colors">О компании</a>
            <a href="/#contacts" className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
}