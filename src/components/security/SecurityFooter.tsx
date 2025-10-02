import Icon from '@/components/ui/icon';

const SecurityFooter = () => {
  return (
    <footer className="bg-secondary/5 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Icon name="Satellite" size={24} className="text-primary" />
            <span className="text-lg font-semibold text-primary">NetConnect</span>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            © 2024 NetConnect. Системы безопасности в Московской области
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SecurityFooter;
