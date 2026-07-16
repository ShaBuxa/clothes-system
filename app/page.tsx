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
              className="rounded-3xl object-cover transition duration-700 hover:scale-105"
            />

            <Image
              src="/work2.jpg"
              alt="work"
              width={900}
              height={900}
              className="rounded-3xl object-cover transition duration-700 hover:scale-105"
            />

            <Image
              src="/work3.jpg"
              alt="work"
              width={900}
              height={900}
              className="rounded-3xl object-cover transition duration-700 hover:scale-105"
            />
            <Image
  src="/work4.jpg"
  alt="work"
  width={900}
  height={900}
  className="rounded-3xl object-cover transition duration-700 hover:scale-105"
/>

<Image
  src="/work5.jpg"
  alt="work"
  width={900}
  height={900}
  className="rounded-3xl object-cover transition duration-700 hover:scale-105"
/>

<Image
  src="/work6.jpg"
  alt="work"
  width={900}
  height={900}
  className="rounded-3xl object-cover transition duration-700 hover:scale-105"
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
<a
  href="https://wa.me/77067075261"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 shadow-2xl transition duration-300 hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M20.52 3.48A11.79 11.79 0 0 0 12.03 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.17 1.59 5.99L0 24l6.18-1.61A11.9 11.9 0 0 0 12.03 24C18.66 24 24 18.62 24 12a11.8 11.8 0 0 0-3.48-8.52ZM12.03 21.8a9.74 9.74 0 0 1-4.97-1.37l-.36-.21-3.67.96.98-3.58-.24-.37A9.76 9.76 0 1 1 12.03 21.8Zm5.36-7.32c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.91 1.15-.17.19-.33.22-.62.08-.29-.15-1.2-.44-2.29-1.4-.85-.76-1.42-1.69-1.58-1.98-.17-.29-.02-.45.12-.6.13-.13.29-.33.44-.49.15-.17.19-.29.29-.48.1-.19.05-.37-.02-.52-.08-.15-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.51h-.56c-.19 0-.49.07-.75.37-.26.29-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.15.19 1.96 2.99 4.75 4.19.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.72-.7 1.96-1.38.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.33Z"/>
  </svg>
</a>
    </main>
  );
}