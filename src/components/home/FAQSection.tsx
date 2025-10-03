import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    question: 'Как быстро можно подключить интернет?',
    answer: 'Подключение занимает 1-2 дня с момента заявки. Наши специалисты приедут, установят оборудование и настроят всё под ключ.'
  },
  {
    question: 'Какая зона покрытия вашей сети?',
    answer: 'Мы покрываем Московскую область и прилегающие районы. Для уточнения доступности интернета по вашему адресу свяжитесь с нами по телефону или WhatsApp.'
  },
  {
    question: 'Нужно ли покупать оборудование?',
    answer: 'Нет, всё оборудование предоставляется в аренду и входит в стоимость тарифа. Вы получаете профессиональную антенну и роутер с поддержкой Wi-Fi.'
  },
  {
    question: 'Что делать, если интернет пропал?',
    answer: 'Наша служба поддержки работает 24/7. Позвоните нам, и мы оперативно решим проблему. В большинстве случаев неполадки устраняются удалённо за несколько минут.'
  },
  {
    question: 'Можно ли сменить тариф?',
    answer: 'Да, вы можете изменить тариф в любой момент. Просто свяжитесь с нами, и мы подберём оптимальный вариант под ваши потребности.'
  },
  {
    question: 'Есть ли ограничения по трафику?',
    answer: 'Нет, все наши тарифы включают безлимитный интернет без ограничений по объёму данных. Пользуйтесь сколько нужно!'
  },
  {
    question: 'Работает ли интернет в плохую погоду?',
    answer: 'Да, технология 4G LTE стабильно работает в любую погоду. Профессиональное оборудование обеспечивает надёжную связь даже при сильном ветре, дожде или снеге.'
  },
  {
    question: 'Можно ли подключить несколько устройств?',
    answer: 'Конечно! Наш роутер поддерживает одновременное подключение множества устройств: ноутбуки, смартфоны, планшеты, Smart TV, умный дом и другие гаджеты.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о подключении и работе интернета
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <Icon 
                  name="ChevronDown" 
                  size={24} 
                  className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a 
            href="#contacts" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Свяжитесь с нами
          </a>
        </div>
      </div>
    </section>
  );
}
