interface CityFooterProps {
  cityName: string;
}

export default function CityFooter({ cityName }: CityFooterProps) {
  return (
    <footer className="py-8 border-t bg-muted/30">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; 2024 NetConnect. Беспроводной интернет в {cityName} — качественное подключение дач и коттеджей.</p>
      </div>
    </footer>
  );
}
