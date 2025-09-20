import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
  );
}