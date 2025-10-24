import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const seasonalOffers = [
    {
      title: "Зимняя коллекция 2024",
      description: "Пончики с праздничными вкусами: имбирный пряник, клюква в сахаре, глинтвейн",
      badge: "Новинка",
      discount: "-20%",
      validUntil: "до 31 декабря"
    },
    {
      title: "Счастливые часы",
      description: "С 14:00 до 16:00 каждый день — скидка 30% на все пончики",
      badge: "Каждый день",
      discount: "-30%",
      validUntil: "14:00 - 16:00"
    },
    {
      title: "День рождения? Бесплатно!",
      description: "В день рождения дарим коробку из 6 пончиков на выбор",
      badge: "Подарок",
      discount: "🎁",
      validUntil: "круглый год"
    }
  ];

  const menuCategories = [
    {
      name: "Классика",
      items: [
        { name: "Розовый", price: 150, emoji: "🍩" },
        { name: "Шоколад", price: 150, emoji: "🍫" },
        { name: "Ваниль", price: 140, emoji: "🤍" },
      ]
    },
    {
      name: "Премиум",
      items: [
        { name: "Орео-крем", price: 180, emoji: "⚫" },
        { name: "Карамель", price: 170, emoji: "🍯" },
        { name: "Мятный", price: 170, emoji: "💚" },
      ]
    },
    {
      name: "Сезонные",
      items: [
        { name: "Клюква", price: 190, emoji: "🔴" },
        { name: "Глинтвейн", price: 200, emoji: "🍷" },
        { name: "Имбирный пряник", price: 190, emoji: "🍪" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFB6C1]/20 via-white to-[#B4E7FF]/20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FFB6C1]/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-3xl font-heading font-bold text-primary">Sweet Donuts 🍩</h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-sm font-medium hover:text-[#FFB6C1] transition-colors">Главная</a>
              <a href="#menu" className="text-sm font-medium hover:text-[#FFB6C1] transition-colors">Меню</a>
              <a href="#about" className="text-sm font-medium hover:text-[#FFB6C1] transition-colors">О нас</a>
              <a href="#delivery" className="text-sm font-medium hover:text-[#FFB6C1] transition-colors">Доставка</a>
            </div>
            <Button className="bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90 rounded-full px-6">
              Заказать
            </Button>
          </nav>
        </div>
      </header>

      <section id="home" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-[#FFE4B5] text-[#2D2D2D] hover:bg-[#FFE4B5]/90 rounded-full px-4 py-1">
              Ручная работа
            </Badge>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#2D2D2D] leading-tight">
              Пончики, которые делают день лучше
            </h2>
            <p className="text-lg text-gray-600">
              Каждый пончик создан вручную с любовью и заботой. 
              Свежая выпечка каждый день, натуральные ингредиенты.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90 rounded-full px-8 py-6 text-lg">
                Смотреть меню
              </Button>
              <Button variant="outline" className="border-[#2D2D2D] text-[#2D2D2D] hover:bg-[#FFB6C1]/10 rounded-full px-8 py-6 text-lg">
                Акции
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFB6C1] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#B4E7FF] rounded-full opacity-20 blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/70202e0a-c98e-4a71-8324-7f597733689d.png" 
              alt="Sweet Donuts"
              className="relative z-10 w-full rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#FFB6C1]/30 to-[#B4E7FF]/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <Badge className="bg-white text-[#2D2D2D] mb-4">Специальные предложения</Badge>
            <h3 className="text-4xl font-heading font-bold text-[#2D2D2D] mb-3">
              Сезонные акции
            </h3>
            <p className="text-gray-600">Успей попробовать уникальные вкусы и получить скидки!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {seasonalOffers.map((offer, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#FFB6C1]/20 rounded-3xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-[#FFE4B5] text-[#2D2D2D]">{offer.badge}</Badge>
                  <span className="text-3xl font-heading font-bold text-[#FFB6C1]">{offer.discount}</span>
                </div>
                <h4 className="text-xl font-heading font-bold text-[#2D2D2D] mb-2">
                  {offer.title}
                </h4>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon name="Clock" size={16} />
                  <span>{offer.validUntil}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-4xl font-heading font-bold text-[#2D2D2D] mb-3">
            Наше меню
          </h3>
          <p className="text-gray-600">Выбери свой любимый вкус</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, catIndex) => (
            <Card key={catIndex} className="p-6 bg-white border-2 border-[#B4E7FF]/20 rounded-3xl hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${catIndex * 0.15}s` }}>
              <h4 className="text-2xl font-heading font-bold text-[#2D2D2D] mb-6 text-center">
                {category.name}
              </h4>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-3 hover:bg-[#FFB6C1]/5 rounded-2xl transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="font-medium text-[#2D2D2D]">{item.name}</span>
                    </div>
                    <span className="font-heading font-bold text-[#2D2D2D]">{item.price}₽</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gradient-to-r from-[#FFE4B5]/30 to-[#FFB6C1]/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h3 className="text-4xl font-heading font-bold text-[#2D2D2D] mb-6">
              О нас
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sweet Donuts — это семейная пекарня, где каждый пончик создается вручную 
              с любовью и вниманием к деталям. Мы используем только натуральные ингредиенты 
              и проверенные рецепты, чтобы каждый укус приносил настоящее удовольствие.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFB6C1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                <h4 className="font-heading font-bold text-[#2D2D2D] mb-2">Ручная работа</h4>
                <p className="text-gray-600 text-sm">Каждый пончик лепим вручную</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B4E7FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <h4 className="font-heading font-bold text-[#2D2D2D] mb-2">Свежесть</h4>
                <p className="text-gray-600 text-sm">Выпечка каждый день</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFE4B5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" size={32} className="text-[#2D2D2D]" />
                </div>
                <h4 className="font-heading font-bold text-[#2D2D2D] mb-2">Натуральность</h4>
                <p className="text-gray-600 text-sm">Без искусственных добавок</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-4xl font-heading font-bold text-[#2D2D2D] mb-3">
              Доставка и контакты
            </h3>
            <p className="text-gray-600">Привезем свежие пончики к вам</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white border-2 border-[#FFB6C1]/20 rounded-3xl animate-fade-in">
              <Icon name="Truck" size={40} className="text-[#FFB6C1] mb-4" />
              <h4 className="text-2xl font-heading font-bold text-[#2D2D2D] mb-4">Доставка</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-[#FFB6C1] mt-1" />
                  <span>Бесплатная доставка от 1000₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-[#FFB6C1] mt-1" />
                  <span>Доставка по городу 30-60 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-[#FFB6C1] mt-1" />
                  <span>Работаем с 9:00 до 21:00</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-[#B4E7FF]/20 rounded-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="MapPin" size={40} className="text-[#B4E7FF] mb-4" />
              <h4 className="text-2xl font-heading font-bold text-[#2D2D2D] mb-4">Контакты</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" size={20} className="text-[#B4E7FF] mt-1" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Mail" size={20} className="text-[#B4E7FF] mt-1" />
                  <span>hello@sweetdonuts.ru</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={20} className="text-[#B4E7FF] mt-1" />
                  <span>г. Москва, ул. Пончиковая, 12</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-white border-2 border-[#FFE4B5]/20 rounded-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-2xl font-heading font-bold text-[#2D2D2D] mb-6">Частые вопросы</h4>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium">Как заказать пончики?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Позвоните нам по телефону или оформите заказ через сайт. 
                  Мы подберем для вас свежие пончики и доставим в удобное время.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium">Можно ли заказать на мероприятие?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да! Мы делаем большие заказы для праздников, корпоративов и мероприятий. 
                  Предупредите нас за 24 часа, и мы подготовим нужное количество.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium">Есть ли веганские варианты?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да, у нас есть линейка веганских пончиков на растительном молоке 
                  без яиц и молочных продуктов. Уточняйте наличие при заказе.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Sweet Donuts 🍩</h2>
          <p className="text-gray-400 mb-6">Пончики ручной работы с любовью</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-[#FFB6C1] transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-[#FFB6C1] transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-[#FFB6C1] transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Sweet Donuts. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
