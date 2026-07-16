import Image from "next/image";

export default function Home() {
  const catalog = [
  {
    image: "/catalog-1.jpeg",
    name: "Футболка Oversize",
    price: "8 900 ₸",
  },
  {
    image: "/catalog-2.jpeg",
    name: "Футболка Oversize",
    price: "8 900 ₸",
  },
  {
    image: "/catalog-3.jpeg",
    name: "Футболка Oversize",
    price: "6 500 ₸",
  },
  {
    image: "/catalog-4.jpeg",
    name: "Футболка Oversize",
    price: "6 500 ₸",
  },
  {
    image: "/catalog-5.jpeg",
    name: "Футболка Oversize",
    price: "6 500 ₸",
  },
  {
    image: "/catalog-6.jpeg",
    name: "Футболка Oversize",
    price: "7 500 ₸",
  },
  {
    image: "/catalog-7.jpeg",
    name: "Футболка Oversize",
    price: "6 500 ₸",
  },
  {
    image: "/catalog-8.jpeg",
    name: "Футболка Oversize",
    price: "7 500 ₸",
  },
  {
    image: "/catalog-9.jpeg",
    name: "Футболка Oversize",
    price: "7 500 ₸",
  },
];
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* HEADER */}

      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

          <h1 className="text-xl font-black tracking-[6px]">
            CLOTHES SYSTEM
          </h1>

          <nav className="hidden gap-10 text-sm uppercase tracking-[3px] md:flex">

            <a href="#catalog" className="hover:text-neutral-400">
              Каталог
            </a>

            <a href="#works" className="hover:text-neutral-400">
              Наши работы
            </a>

            <a href="#contacts" className="hover:text-neutral-400">
              Контакты
            </a>

          </nav>

          <a
            href="https://wa.me/77067075261"
            className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
          >
            WhatsApp
          </a>

        </div>

      </header>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center">

        <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 pt-24 lg:grid-cols-2">

          <div>

            <p className="mb-6 uppercase tracking-[10px] text-neutral-500">
              PREMIUM STREETWEAR
            </p>

            <h1 className="text-6xl font-black leading-[0.9] md:text-8xl">

              DON'T LOOK.

              <br />

              CREATE

              <br />

              YOUR OWN.

            </h1>

            <p className="mt-10 max-w-xl text-xl leading-9 text-neutral-400">

              Создай футболку, худи или мерч
              со своим дизайном.

              <br />

              От одного экземпляра.

            </p>

            <div className="mt-14 flex flex-wrap gap-5">

              <a
  href="https://www.instagram.com/clothes_system.print?igsh=enpxcDV5ZjVxNnF0"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
>
  Создать дизайн
</a>

<a
  href="#catalog"
  className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
>
  Смотреть каталог
</a>

            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute h-[650px] w-[650px] rounded-full bg-white/10 blur-[140px]" />

            <Image
              src="/hero-shirt.png"
              alt="Hero"
              width={700}
              height={850}
              priority
              className="relative w-[650px] h-auto"
            />

          </div>

        </div>

      </section>      {/* CATALOG */}


      <section
        id="works"
        className="py-32"
      >

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 uppercase tracking-[8px] text-neutral-500">
            НАШИ РАБОТЫ
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            РЕАЛЬНЫЕ
            <br />
            ЗАКАЗЫ
          </h2>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            <Image
              src="/work1.jpg"
              alt="work"
              width={900}
              height={900}
              className="rounded-3xl object-cover transition duration-500 hover:scale-[1.02]"
            />

            <Image
              src="/work2.jpg"
              alt="work"
              width={900}
              height={900}
              className="rounded-3xl object-cover transition duration-500 hover:scale-[1.02]"
            />

            <Image
              src="/work3.jpg"
              alt="work"
              width={900}
              height={900}
              className="rounded-3xl object-cover transition duration-500 hover:scale-[1.02]"
            />

          </div>

        </div>

      </section>

      {/* ADVANTAGES */}

      <section className="border-y border-white/10 py-32">

        <div className="mx-auto grid max-w-7xl gap-10 px-8 md:grid-cols-2 xl:grid-cols-4">

          <div>

            <h3 className="text-3xl font-black">
              01
            </h3>

            <p className="mt-4 text-2xl font-semibold">
              Premium качество
            </p>

            <p className="mt-3 leading-8 text-neutral-400">
              Плотный хлопок,
              качественная печать
              и долговечные материалы.
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-black">
              02
            </h3>

            <p className="mt-4 text-2xl font-semibold">
              От 1 штуки
            </p>

            <p className="mt-3 leading-8 text-neutral-400">
              Не нужен большой тираж.
              Сделаем даже одну футболку.
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-black">
              03
            </h3>

            <p className="mt-4 text-2xl font-semibold">
              Быстро
            </p>

            <p className="mt-3 leading-8 text-neutral-400">
              Большинство заказов
              готовы за 1–2 дня.
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-black">
              04
            </h3>

            <p className="mt-4 text-2xl font-semibold">
              Любой дизайн
            </p>

            <p className="mt-3 leading-8 text-neutral-400">
              Фото,
              логотипы,
              надписи,
              брендирование
              и мерч.
            </p>

          </div>

        </div>

      </section>      {/* REVIEWS */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 uppercase tracking-[8px] text-neutral-500">
            ОТЗЫВЫ
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            НАМ
            <br />
            ДОВЕРЯЮТ
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 p-8">
              <p className="text-neutral-300 leading-8">
                Отличное качество. Принт получился даже лучше, чем ожидал.
              </p>

              <h3 className="mt-8 font-bold">
                ★★★★★
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <p className="text-neutral-300 leading-8">
                Сделали очень быстро. Буду заказывать ещё.
              </p>

              <h3 className="mt-8 font-bold">
                ★★★★★
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <p className="text-neutral-300 leading-8">
                Лучшее качество печати, которое видел в Алматы.
              </p>

              <h3 className="mt-8 font-bold">
                ★★★★★
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contacts"
        className="border-t border-white/10 py-32"
      >

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-5xl font-black md:text-7xl">
            ГОТОВ
            <br />
            СОЗДАТЬ
            <br />
            СВОЙ ДИЗАЙН?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-neutral-400">
            Напиши нам в WhatsApp и мы поможем реализовать любую идею.
          </p>

          <a
            href="https://wa.me/77067075261"
            className="mt-14 inline-block rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
          >
            Написать в WhatsApp
          </a>

        </div>

      </section>
<section id="catalog" className="py-24 border-t border-white/10">
  <div className="mx-auto max-w-7xl px-8">

    <h2 className="text-5xl font-black text-center mb-16">
      КАТАЛОГ
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{catalog.map((item, index) => (

        <div
  key={index}
  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition duration-300 hover:-translate-y-2 hover:border-white/30"
>

  <Image
    src={item.image}
    alt={item.name}
    width={700}
    height={900}
    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
  />

  <div className="p-6">

    <h3 className="text-xl font-bold">
      {item.name}
    </h3>

    <p className="mt-2 text-neutral-400">
      Premium хлопок · Индивидуальный принт
    </p>

    <div className="mt-5 flex items-center justify-between">

      <span className="text-xl font-bold">
        {item.price}
      </span>

      <a
        href="https://wa.me/77067075261"
        className="rounded-full border border-white px-5 py-2 text-sm transition hover:bg-white hover:text-black"
      >
        Заказать
            </a>

    </div>

  </div>

</div>

))}

    </div>

  </div>
</section>
      <footer className="border-t border-white/10 py-12">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">

          <h2 className="text-xl font-black tracking-[6px]">
            CLOTHES SYSTEM
          </h2>

          <p className="text-neutral-500">
            © 2026 Clothes System. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}