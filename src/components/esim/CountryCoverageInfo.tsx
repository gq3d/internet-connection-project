import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function CountryCoverageInfo() {
  const [showAllCountries, setShowAllCountries] = useState(false);

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Техническая информация о покрытии
        </h2>
        <p className="text-muted-foreground text-lg">
          Полный список из 106 стран с указанием операторов и поддерживаемых технологий связи
        </p>
      </div>

      <div className="bg-card rounded-2xl border-2 border-border overflow-hidden">
        <button
          onClick={() => setShowAllCountries(!showAllCountries)}
          className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Icon name="Globe" size={24} className="text-primary" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Список всех 106 стран</h3>
              <p className="text-sm text-muted-foreground">
                {showAllCountries ? "Скрыть подробную информацию" : "Показать операторов и технологии связи"}
              </p>
            </div>
          </div>
          <Icon 
            name={showAllCountries ? "ChevronUp" : "ChevronDown"} 
            size={28} 
            className="text-primary transition-transform"
          />
        </button>

        {showAllCountries && (
          <div className="p-6 pt-0 border-t border-border">
            <div className="bg-muted/30 rounded-xl p-6 max-h-[600px] overflow-y-auto">
              <div className="space-y-3 text-sm leading-relaxed">
                
                <div>
                  <p className="font-semibold mb-1">🌐 Aland Islands (Аландские острова)</p>
                  <p className="text-muted-foreground">Aalands Telekommunikation Ab: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇦🇱 Albania (Албания)</p>
                  <p className="text-muted-foreground">ALBtelecom sh.a.: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Vodafone - Albania: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇦🇩 Andorra (Андорра)</p>
                  <p className="text-muted-foreground">Andorra Telecom, S.A.U.: 2G, 3G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇦🇷 Argentina (Аргентина)</p>
                  <p className="text-muted-foreground">Telefonica Moviles Argentina S.A.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇦🇺 Australia (Австралия)</p>
                  <p className="text-muted-foreground">SingTel Optus Pty Limited: 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Telstra Corporation Limited: 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇦🇹 Austria (Австрия)</p>
                  <p className="text-muted-foreground">Hutchison Drei Austria GmbH: 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇧🇪 Belgium (Бельгия)</p>
                  <p className="text-muted-foreground">Telenet Group BVBA/SPRL: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">ORANGE Belgium nv/SA: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Proximus PLC: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇧🇴 Bolivia (Боливия)</p>
                  <p className="text-muted-foreground">Telefonica Celular de Bolivia S.A.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇧🇦 Bosnia Herzegovina (Босния и Герцеговина)</p>
                  <p className="text-muted-foreground">BH Telecom JSC Sarajevo: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇧🇷 Brazil (Бразилия)</p>
                  <p className="text-muted-foreground">Vivo S.A.: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇧🇬 Bulgaria (Болгария)</p>
                  <p className="text-muted-foreground">A1 Bulgaria EAD: 2G, 3G</p>
                  <p className="text-muted-foreground">Telenor Bulgaria EAD: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Bulgarian Telecommunications Company EAD: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇲 Cameroon (Камерун)</p>
                  <p className="text-muted-foreground">MTN: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Orange Cameroun SA: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇦 Canada (Канада)</p>
                  <p className="text-muted-foreground">Rogers Communications Canada Inc.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">TELUS Communications Inc.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Bell Mobility: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">SaskTel Mobility: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇱 Chile (Чили)</p>
                  <p className="text-muted-foreground">Telefonica Movil de Chile S.A.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇳 China (Китай)</p>
                  <p className="text-muted-foreground">China Mobile Limited: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇴 Colombia (Колумбия)</p>
                  <p className="text-muted-foreground">Colombia Telecomunicaciones S.A. ESP: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇷 Costa Rica (Коста-Рика)</p>
                  <p className="text-muted-foreground">Millicom: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇭🇷 Croatia (Хорватия)</p>
                  <p className="text-muted-foreground">A1 Hrvatska d.o.o: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Tele2 d.o.o za telekomunikacijske usluge: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇾 Cyprus (Кипр)</p>
                  <p className="text-muted-foreground">MTN Cyprus Limited: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">PrimeTel PLC: 2G, 4G</p>
                  <p className="text-muted-foreground">Cyprus Telecommunications Authority: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇿 Czech (Чехия)</p>
                  <p className="text-muted-foreground">O2 Czech Republic a.s.: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone Czech Republic a.s.: 2G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇩🇰 Denmark (Дания)</p>
                  <p className="text-muted-foreground">HI3G Denmark ApS: 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Telia Denmark: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇪🇨 Ecuador (Эквадор)</p>
                  <p className="text-muted-foreground">Otecel Sociedad Anonima: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇪🇬 Egypt (Египет)</p>
                  <p className="text-muted-foreground">Etisalat - Misr: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Orange Egypt: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇸🇻 El Salvador (Сальвадор)</p>
                  <p className="text-muted-foreground">Telefonica Moviles El Salvador, S.A de C.V.: 2G, 3G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇪🇪 Estonia (Эстония)</p>
                  <p className="text-muted-foreground">Telia Eesti AS: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Tele2 Eesti Aktsiaselts: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Elisa Eesti AS: 2G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇫🇮 Finland (Финляндия)</p>
                  <p className="text-muted-foreground">Elisa Corporation: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Telia Finland Oyj: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇫🇷 France (Франция)</p>
                  <p className="text-muted-foreground">Bouygues Telecom: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Societe Francaise du Radiotelephone S.A.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Orange: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇩🇪 Germany (Германия)</p>
                  <p className="text-muted-foreground">Telefonica Germany GmbH & Co. OHG: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone GmbH: 2G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇬🇮 Gibraltar (Гибралтар)</p>
                  <p className="text-muted-foreground">Gibtelecom Limited: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇬🇷 Greece (Греция)</p>
                  <p className="text-muted-foreground">Vodafone-Panafon Hellenic Telecommunications Company S.A.: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">Wind Hellas Telecommunications S.A.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇬🇺 Guam (Гуам)</p>
                  <p className="text-muted-foreground">PTI Pacifica Inc.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇬🇹 Guatemala (Гватемала)</p>
                  <p className="text-muted-foreground">Telecomunicaciones de Guatemala, S.A. (TELGUA): 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇬🇬 Guernsey (Гернси)</p>
                  <p className="text-muted-foreground">JT (Jersey) Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇬🇾 Guyana (Гайана)</p>
                  <p className="text-muted-foreground">Digicel Guyana: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇭🇰 Hong Kong (Гонконг)</p>
                  <p className="text-muted-foreground">Hong Kong Telecommunications (HKT) Limited: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Hutchison Telecommunications Hong Kong Holdings Limited: 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇭🇺 Hungary (Венгрия)</p>
                  <p className="text-muted-foreground">Vodafone Hungary Mobile Telecommunications Company Limited: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Telenor Magyarorszag Zartkoruen Mukodo Reszvenytarsasag: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇮🇸 Iceland (Исландия)</p>
                  <p className="text-muted-foreground">Siminn h.f.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇮🇳 India (Индия)</p>
                  <p className="text-muted-foreground">Vodafone Idea Limited: 2G, 4G</p>
                  <p className="text-muted-foreground">Bharti Airtel Limited: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">Reliance Jio Infocomm Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇮🇩 Indonesia (Индонезия)</p>
                  <p className="text-muted-foreground">PT. Hutchison 3 Indonesia: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">PT Indosat Tbk: 2G, 4G</p>
                  <p className="text-muted-foreground">PT Telekomunikasi Selular: 2G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇮🇶 Iraq (Ирак)</p>
                  <p className="text-muted-foreground">Atheer Telecommunications Iraq Limited: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Korek Telecom Company: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇮🇪 Ireland (Ирландия)</p>
                  <p className="text-muted-foreground">Vodafone Ireland Limited: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Three Ireland (Hutchison) Limited: 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇮🇲 Isle of Man (Остров Мэн)</p>
                  <p className="text-muted-foreground">Manx Telecom Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇮🇱 Palestine/Israel (Израиль)</p>
                  <p className="text-muted-foreground">Hot Mobile Ltd.: 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Partner Communications Company Ltd.: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Pelephone Communication Ltd.: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇮🇹 Italy (Италия)</p>
                  <p className="text-muted-foreground">ILIAD Italia S.p.A.: 3G, 4G</p>
                  <p className="text-muted-foreground">Vodafone Italia S.p.A: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">WINDTRE: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇯🇵 Japan (Япония)</p>
                  <p className="text-muted-foreground">NTT Docomo, Inc.: 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">KDDI Corporation: 4G, 5G</p>
                  <p className="text-muted-foreground">Softbank: 4G, 5G</p>
                  <p className="text-muted-foreground">Rakuten Mobile: 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇯🇪 Jersey (Джерси)</p>
                  <p className="text-muted-foreground">JT (Jersey) Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇯🇴 Jordan (Иордания)</p>
                  <p className="text-muted-foreground">Umniah Mobile Company: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Zain Jordan: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇰🇿 Kazakhstan (Казахстан)</p>
                  <p className="text-muted-foreground">Mobile Telecom-Service LLP: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">KaR-Tel LLP: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇰🇪 Kenya (Кения)</p>
                  <p className="text-muted-foreground">Airtel Networks Kenya Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇰🇼 Kuwait (Кувейт)</p>
                  <p className="text-muted-foreground">Viva: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Mobile Telecommunications Company: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇱🇻 Latvia (Латвия)</p>
                  <p className="text-muted-foreground">Latvijas Mobilais Telefons: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Tele2 SIA: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">SIA Bite Mobile: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇱🇮 Liechtenstein (Лихтенштейн)</p>
                  <p className="text-muted-foreground">Telecom Liechtenstein AG: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Salt (Liechtenstein) AG: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇱🇹 Lithuania (Литва)</p>
                  <p className="text-muted-foreground">Telia Lietuva AB: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">Bite Lithuania: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">UAB Tele2: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇱🇺 Luxembourg (Люксембург)</p>
                  <p className="text-muted-foreground">Proximus Luxembourg S.A.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">POST Luxembourg: 2G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇴 Macau (Макао)</p>
                  <p className="text-muted-foreground">Hutchison Telephone (Macau) Company Limited: 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇬 Madagascar (Мадагаскар)</p>
                  <p className="text-muted-foreground">Airtel Madagascar SA: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇾 Malaysia (Малайзия)</p>
                  <p className="text-muted-foreground">Maxis Communications Berhad: 2G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇹 Malta (Мальта)</p>
                  <p className="text-muted-foreground">GO p.l.c.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone Malta Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇺 Mauritius (Маврикий)</p>
                  <p className="text-muted-foreground">Cellplus Mobile Communications Ltd.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇽 Mexico (Мексика)</p>
                  <p className="text-muted-foreground">Pegaso PCS, S.A. de C.V.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇩 Moldova (Молдова)</p>
                  <p className="text-muted-foreground">Moldtelecom S.A: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Orange Moldova S.A.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇪 Montenegro (Черногория)</p>
                  <p className="text-muted-foreground">One: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">MTEL d.o.o. Podgorica: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇦 Morocco (Марокко)</p>
                  <p className="text-muted-foreground">Orange Maroc: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Itissalat Al-Maghrib S.A.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇳🇱 Netherlands (Нидерланды)</p>
                  <p className="text-muted-foreground">KPN B.V.: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone Libertel B.V.: 2G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇳🇿 New Zealand (Новая Зеландия)</p>
                  <p className="text-muted-foreground">One New Zealand: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Spark New Zealand: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇳🇮 Nicaragua (Никарагуа)</p>
                  <p className="text-muted-foreground">Millicom: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇳🇬 Nigeria (Нигерия)</p>
                  <p className="text-muted-foreground">Airtel Networks Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇲🇰 North Macedonia (Северная Македония)</p>
                  <p className="text-muted-foreground">one.Vip DOOEL Skopje: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇳🇴 Norway (Норвегия)</p>
                  <p className="text-muted-foreground">Telia Norge AS: 2G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇴🇲 Oman (Оман)</p>
                  <p className="text-muted-foreground">Omani Qatari Telecommunication Company SAOG: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇵🇰 Pakistan (Пакистан)</p>
                  <p className="text-muted-foreground">Jazz: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇵🇦 Panama (Панама)</p>
                  <p className="text-muted-foreground">Tigo Panamá: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇵🇾 Paraguay (Парагвай)</p>
                  <p className="text-muted-foreground">Telefonica Celular Del Paraguay S.A. (Telecel S.A.): 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇵🇪 Peru (Перу)</p>
                  <p className="text-muted-foreground">Telefonica Moviles S.A.C.: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Entel Peru: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇵🇱 Poland (Польша)</p>
                  <p className="text-muted-foreground">Orange Polska S.A.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">P4 Sp. z o.o.: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇵🇹 Portugal (Португалия)</p>
                  <p className="text-muted-foreground">NOS Comunicacoes, S.A.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">MEO - Servicos de Comunicacoes e Multimedia SA: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone Portugal: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇶🇦 Qatar (Катар)</p>
                  <p className="text-muted-foreground">Ooredoo QSC: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇷🇪 Reunion (Реюньон)</p>
                  <p className="text-muted-foreground">Orange Reunion: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">SRR: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇷🇴 Romania (Румыния)</p>
                  <p className="text-muted-foreground">S.C. Orange Romania S.A.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">S.C. RCS & RDS S.A.: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone Romania: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇷🇺 Russia (Россия)</p>
                  <p className="text-muted-foreground">MegaFon PJSC: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Beeline: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇸🇦 Saudi Arabia (Саудовская Аравия)</p>
                  <p className="text-muted-foreground">Etihad Etisalat Company: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">MTC Saudi Arabia (Zain): 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇷🇸 Serbia (Сербия)</p>
                  <p className="text-muted-foreground">Yettel Serbia: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Telekom Srbija a.d.: 2G, 3G</p>
                  <p className="text-muted-foreground">Vip mobile d.o.o.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇸🇨 Seychelles (Сейшелы)</p>
                  <p className="text-muted-foreground">Airtel (Seychelles) Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇸🇬 Singapore (Сингапур)</p>
                  <p className="text-muted-foreground">StarHub Mobile Pte Ltd: 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">SingTel Mobile Singapore Pte. Ltd.: 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇸🇰 Slovakia (Словакия)</p>
                  <p className="text-muted-foreground">Orange Slovensko, a.s.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">O2 Slovakia, s.r.o.: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇸🇮 Slovenia (Словения)</p>
                  <p className="text-muted-foreground">Telekom Slovenije d.d.: 2G, 4G, 5G</p>
                  <p className="text-muted-foreground">Telemach d.o.o.: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇿🇦 South Africa (Южная Африка)</p>
                  <p className="text-muted-foreground">Mobile Telephone Networks (Pty) Ltd.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodacom Group (Pty) Ltd.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇰🇷 South Korea (Южная Корея)</p>
                  <p className="text-muted-foreground">SK Telecom: 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇪🇸 Spain (Испания)</p>
                  <p className="text-muted-foreground">Telefonica Moviles Espana S.A.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Orange Spain: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone Espana, S.A.U.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Xfera Moviles, S.A.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇱🇰 Sri Lanka (Шри-Ланка)</p>
                  <p className="text-muted-foreground">Mobitel (Pvt) Ltd: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Dialog Axiata PLC: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Hutch Sri Lanka: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇸🇪 Sweden (Швеция)</p>
                  <p className="text-muted-foreground">Tele2 AB: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Telia Company AB: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Hi3G Access AB: 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇨🇭 Switzerland (Швейцария)</p>
                  <p className="text-muted-foreground">Sunrise LLC: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇹🇼 Taiwan (Тайвань)</p>
                  <p className="text-muted-foreground">Taiwan Mobile Co.Ltd: 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇹🇿 Tanzania (Танзания)</p>
                  <p className="text-muted-foreground">Airtel Tanzania Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇹🇭 Thailand (Таиланд)</p>
                  <p className="text-muted-foreground">Advanced Wireless Network Company Limited: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇹🇳 Tunisia (Тунис)</p>
                  <p className="text-muted-foreground">Ooredoo Tunisie SA: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Orange Tunisie, SA: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇹🇷 Turkey (Турция)</p>
                  <p className="text-muted-foreground">Avea Iletisim Hizmetleri A.S.: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Turkcell Iletisim Hizmetleri A.S.: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇺🇬 Uganda (Уганда)</p>
                  <p className="text-muted-foreground">Airtel Uganda Limited: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇺🇦 Ukraine (Украина)</p>
                  <p className="text-muted-foreground">lifecell LLC: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">Kyivstar, Private Joint Stock Company: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇦🇪 United Arab Emirates (ОАЭ)</p>
                  <p className="text-muted-foreground">Du: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇬🇧 United Kingdom (Великобритания)</p>
                  <p className="text-muted-foreground">Hutchison 3G UK Limited: 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Vodafone Ltd: 2G, 3G, 4G, 5G</p>
                  <p className="text-muted-foreground">Telefonica UK Limited: 2G, 3G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇺🇸 United States (США)</p>
                  <p className="text-muted-foreground">AT&T Mobility: 4G, 5G</p>
                  <p className="text-muted-foreground">T-Mobile: 2G, 4G, 5G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇺🇾 Uruguay (Уругвай)</p>
                  <p className="text-muted-foreground">Telefonica Moviles Del Uruguay S.A.: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇺🇿 Uzbekistan (Узбекистан)</p>
                  <p className="text-muted-foreground">Unitel LLC: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇻🇳 Vietnam (Вьетнам)</p>
                  <p className="text-muted-foreground">Vietnamobile Telecommunications Joint Stock Company: 2G, 3G, 4G</p>
                  <p className="text-muted-foreground">MOBIFONE CORPORATION: 2G, 3G, 4G</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">🇿🇲 Zambia (Замбия)</p>
                  <p className="text-muted-foreground">MTN (Zambia) Ltd: 2G, 3G</p>
                  <p className="text-muted-foreground">Airtel Networks Zambia Plc.: 2G, 3G, 4G</p>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
