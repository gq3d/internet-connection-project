import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEO from '@/components/SEO';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function Equipment() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Оборудование для интернета: антенны MIMO, роутеры 4G/LTE — примеры от NetConnect"
        description="Примеры профессионального оборудования для беспроводного интернета в МО: MIMO антенны (усиление до 24 dBi, дальность до 35 км), 4G/LTE роутеры от MikroTik, Ubiquiti, TP-Link, Huawei. Индивидуальный подбор под ваши условия. Консультация: +7 (901) 500-00-78"
        keywords="оборудование беспроводного интернета, антенны mimo, 4g lte роутер, антенны mikrotik, ubiquiti lte, tp-link archer, huawei роутер, оборудование для дачи интернет, антенна для приема 4g, направленная антенна lte, yagi mimo антенна"
        ogTitle="Примеры оборудования для беспроводного интернета — антенны и роутеры | NetConnect"
        ogDescription="Профессиональные MIMO антенны (2x18-24 dBi) и 4G/LTE роутеры для стабильного интернета. Подбираем оптимальное оборудование для вашего объекта индивидуально."
        canonical="https://wiline.ru/equipment"
      />
      
      <Header />
      
      <main className="flex-grow pt-16">
        <div className="bg-gradient-to-br from-primary/5 via-background to-success/5">
          <Breadcrumbs items={[{ label: 'Оборудование' }]} />
        </div>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20 px-6 py-2 rounded-full mb-6">
                <Icon name="Cpu" className="text-primary" size={20} />
                <span className="font-semibold text-primary">Профессиональное оборудование</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-success to-primary bg-clip-text text-transparent">
                Примеры оборудования
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Используем только проверенное оборудование от ведущих мировых производителей
              </p>
            </div>

            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-success text-white rounded-full shadow-lg">
                  <Icon name="Antenna" size={24} />
                  <h2 className="text-2xl font-bold">Антенны MIMO для LTE/4G</h2>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    img: "/img/1df3afaa-b915-4f88-af94-9f4b80b2ad20.jpg",
                    title: "MIMO Панельная антенна",
                    desc: "Двухполяризационная антенна с усилением 2x18 dBi",
                    specs: ["Частоты 700-2700 МГц", "Дальность до 15 км", "Защита IP65"],
                    color: "blue"
                  },
                  {
                    img: "/img/20a5c8b2-9fd0-47f2-a678-f813b6b23c30.jpg",
                    title: "MIMO Направленная",
                    desc: "Узконаправленная антенна высокого усиления",
                    specs: ["Усиление 2x21 dBi", "Дальность до 25 км", "Узкий луч 45°"],
                    color: "indigo"
                  },
                  {
                    img: "/img/fc1f839a-e663-4701-89c0-35b836c59c99.jpg",
                    title: "Ubiquiti LTE Antenna",
                    desc: "Всепогодная антенна для уличной установки",
                    specs: ["Частоты 698-3800 МГц", "Защита IP67", "Температура -40°C до +70°C"],
                    color: "cyan"
                  },
                  {
                    img: "/img/9a11cbc2-a0c5-453b-8a95-3a39781f5d59.jpg",
                    title: "MIMO Панельная 4G",
                    desc: "Компактная панельная антенна для городских условий",
                    specs: ["Усиление 2x15 dBi", "Дальность до 10 км", "Угол раскрыва 60°"],
                    color: "purple"
                  },
                  {
                    img: "/img/d968e880-92f2-4798-8edf-d20af6da290f.jpg",
                    title: "MIMO Yagi высокого усиления",
                    desc: "Для максимальной дальности связи",
                    specs: ["Усиление 2x24 dBi", "Дальность до 35 км", "Узкий луч 30°"],
                    color: "teal"
                  },
                  {
                    img: "/img/d9df5deb-9f8e-4400-8067-623c5507de4f.jpg",
                    title: "MIMO Всенаправленная",
                    desc: "Универсальная антенна для любых направлений",
                    specs: ["Усиление 2x7 dBi", "Обзор 360°", "Компактный размер"],
                    color: "orange"
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        loading="lazy"
                        width="400"
                        height="400"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                      <div className="space-y-2">
                        {item.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-success" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon name="Antenna" size={20} className="text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-success/30 to-transparent"></div>
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-success to-primary text-white rounded-full shadow-lg">
                  <Icon name="Router" size={24} />
                  <h2 className="text-2xl font-bold">LTE/4G роутеры и модемы</h2>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-success/30 to-transparent"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    img: "/img/3322b870-367a-4774-992a-82f2d3840a3c.jpg",
                    brand: "ZyXel",
                    title: "ZyXel LTE3301-PLUS",
                    desc: "Профессиональный LTE роутер с поддержкой Cat.4",
                    specs: ["До 150 Мбит/с", "Wi-Fi 802.11ac", "До 32 устройств"],
                    color: "green"
                  },
                  {
                    img: "/img/8324dfb5-8278-4070-893f-c6753227a566.jpg",
                    brand: "TP-Link",
                    title: "TP-Link Archer MR600",
                    desc: "Двухдиапазонный 4G+ роутер Cat.6",
                    specs: ["До 300 Мбит/с", "Dual-band AC1200", "4 порта Gigabit Ethernet"],
                    color: "blue"
                  },
                  {
                    img: "/img/98e7d6a2-f1ce-40d6-944b-ca439925b607.jpg",
                    brand: "Huawei",
                    title: "Huawei B535-232",
                    desc: "Флагманский LTE CPE роутер Cat.7",
                    specs: ["До 300 Мбит/с", "Wi-Fi AC1200", "До 64 устройств"],
                    color: "red"
                  },
                  {
                    img: "/img/c09917e1-d13f-4d48-b12e-d163abc9f528.jpg",
                    brand: "Mikrotik",
                    title: "MikroTik LtAP LTE kit",
                    desc: "Профессиональный роутер с GPS и 4G",
                    specs: ["До 150 Мбит/с", "Wi-Fi 802.11n", "Встроенный GPS"],
                    color: "purple"
                  },
                  {
                    img: "/img/6f959ded-245f-48d6-8d35-5debcdf9496d.jpg",
                    brand: "Netgear",
                    title: "Netgear Nighthawk M2",
                    desc: "Мобильный роутер премиум класса Cat.20",
                    specs: ["До 2 Гбит/с", "Wi-Fi 6 (802.11ax)", "До 24 часов работы"],
                    color: "teal"
                  },
                  {
                    img: "/img/3a3bd3f7-51ce-4a57-8111-d4521c2c786e.jpg",
                    brand: "D-Link",
                    title: "D-Link DWR-953",
                    desc: "Надежный LTE роутер для дома и офиса",
                    specs: ["До 300 Мбит/с", "Wi-Fi AC1200", "4 порта LAN"],
                    color: "orange"
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        loading="lazy"
                        width="400"
                        height="400"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
                        {item.brand}
                      </div>
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                      <div className="space-y-2">
                        {item.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-success" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-success/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon name="Wifi" size={20} className="text-success" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-gradient-to-br from-primary/5 to-success/5 border border-primary/20 rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Надежность и качество</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Профессиональное оборудование работает стабильно 24/7, выдерживает перепады температур, влажности и обеспечивает заявленную скорость даже при большой нагрузке.
                </p>
              </div>

              <div className="bg-gradient-to-br from-success/5 to-primary/5 border border-success/20 rounded-2xl p-8">
                <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Settings" size={28} className="text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Индивидуальный подбор</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Конкретная модель определяется при подключении с учетом типа связи, оператора, расстояния до вышки и вашего бюджета для оптимального результата.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary via-success to-secondary text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJWMThoMnYxNnptMCAyMGgtMnYtMTZoMnYxNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
              <div className="relative z-10">
                <Icon name="Phone" size={56} className="mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Подберём оптимальное оборудование</h2>
                <p className="text-lg sm:text-xl mb-8 opacity-90">Наши специалисты проведут замеры сигнала и предложат лучшее решение</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+79015000078"
                    className="inline-flex items-center justify-center px-6 py-4 bg-white text-primary rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
                  >
                    <Icon name="Phone" size={20} className="mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">+7 (901) 500-00-78</span>
                  </a>
                  <a 
                    href="https://wa.me/79015000078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
                  >
                    <Icon name="MessageCircle" size={24} className="mr-3" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Оборудование для беспроводного интернета NetConnect",
          "description": "Профессиональное оборудование для беспроводного интернета: MIMO антенны (усиление 2x18-24 dBi, дальность до 35 км), 4G/LTE роутеры от MikroTik, Ubiquiti, TP-Link, Huawei, Netgear. Индивидуальный подбор под ваши условия.",
          "brand": {
            "@type": "Brand",
            "name": "NetConnect"
          },
          "image": "https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "RUB",
            "lowPrice": "3000",
            "highPrice": "25000",
            "offerCount": "12",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1500",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Главная",
              "item": "https://mosoblconnect.ru/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Оборудование",
              "item": "https://mosoblconnect.ru/equipment"
            }
          ]
        })}
      </script>
    </div>
  );
}