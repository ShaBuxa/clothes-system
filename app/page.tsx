export default function Home() {
  return (
    <main className="bg-[#090909] text-white overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-screen">

        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8">

          {/* LEFT */}

          <div className="max-w-2xl">

            <p className="mb-6 text-sm uppercase tracking-[10px] text-neutral-500">
              CLOTHES SYSTEM
            </p>

            <h1 className="text-6xl font-black leading-[0.9] md:text-8xl xl:text-9xl">
              WEAR
              <br />
              YOUR
              <br />
              IDEA.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-400">

              Создай футболку, худи или мерч
              со своим дизайном.

              <br />

              От одного экземпляра.

              Быстро.

              Качественно.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105">

                Создать дизайн

              </button>

              <button className="rounded-full border border-white px-8 py-4 transition duration-300 hover:bg-white hover:text-black">

                Каталог

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hidden lg:flex">

            <div className="relative">

              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

              <img
                src="/hero-shirt.png"
                alt="Create your own design"
                className="relative w-[520px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
              />

            </div>

          </div>

        </div>

      </section>      {/* WHY US */}

      <section className="border-t border-white/10 py-32">

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 uppercase tracking-[8px] text-neutral-500">
            Почему мы
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Почему выбирают
            <br />
            CLOTHES SYSTEM
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-white/30">
              <div className="mb-6 text-5xl">⚡</div>
              <h3 className="mb-4 text-2xl font-bold">
                Быстро
              </h3>
              <p className="text-neutral-400">
                Изготовление большинства заказов
                занимает всего 1–2 дня.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-white/30">
              <div className="mb-6 text-5xl">🎨</div>
              <h3 className="mb-4 text-2xl font-bold">
                Любой дизайн
              </h3>
              <p className="text-neutral-400">
                Напечатаем логотип,
                фотографию,
                надпись
                или полноценный принт.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-white/30">
              <div className="mb-6 text-5xl">🔥</div>
              <h3 className="mb-4 text-2xl font-bold">
                Премиум качество
              </h3>
              <p className="text-neutral-400">
                Используем качественные ткани
                и профессиональную печать,
                которая не трескается.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-white/30">
              <div className="mb-6 text-5xl">🚚</div>
              <h3 className="mb-4 text-2xl font-bold">
                Доставка
              </h3>
              <p className="text-neutral-400">
                Отправляем заказы
                по Алматы
                и всему Казахстану.
              </p>
            </div>

          </div>

        </div>

      </section>      {/* CATALOG */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 uppercase tracking-[8px] text-neutral-500">
            Каталог
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Выберите
            <br />
            изделие
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:scale-[1.03]">

              <img
                src="/shirt.jpg"
                alt="Футболка"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Футболки
                </h3>

                <p className="mt-3 text-neutral-400">
                  Классические и Oversize
                </p>

              </div>

            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:scale-[1.03]">

              <img
                src="/hoodie.jpg"
                alt="Худи"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Худи
                </h3>

                <p className="mt-3 text-neutral-400">
                  Oversize Premium
                </p>

              </div>

            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:scale-[1.03]">

              <img
                src="/sweatshirt.jpg"
                alt="Свитшоты"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Свитшоты
                </h3>

                <p className="mt-3 text-neutral-400">
                  Для любых принтов
                </p>

              </div>

            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:scale-[1.03]">

              <img
                src="/cap.jpg"
                alt="Кепки"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Кепки
                </h3>

                <p className="mt-3 text-neutral-400">
                  Индивидуальная вышивка и печать
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>      {/* GALLERY */}

      <section className="border-t border-white/10 py-32">

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 uppercase tracking-[8px] text-neutral-500">
            Наши работы
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Реальные
            <br />
            заказы
          </h2>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            <img
              src="/work1.jpg"
              alt="Работа 1"
              className="h-[420px] w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02]"
            />

            <img
              src="/work2.jpg"
              alt="Работа 2"
              className="h-[420px] w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02]"
            />

            <img
              src="/work3.jpg"
              alt="Работа 3"
              className="h-[420px] w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02]"
            />

            <img
              src="/work4.jpg"
              alt="Работа 4"
              className="h-[420px] w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02]"
            />

            <img
              src="/work5.jpg"
              alt="Работа 5"
              className="h-[420px] w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02]"
            />

            <img
              src="/work6.jpg"
              alt="Работа 6"
              className="h-[420px] w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02]"
            />

          </div>

        </div>

      </section>      {/* REVIEWS */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 uppercase tracking-[8px] text-neutral-500">
            Отзывы
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Нам доверяют
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <div className="mb-6 text-3xl">★★★★★</div>

              <p className="leading-8 text-neutral-300">
                Заказывал футболку со своим дизайном.
                Качество ткани и печати просто отличное.
              </p>

              <p className="mt-8 font-bold">
                — Артем
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <div className="mb-6 text-3xl">★★★★★</div>

              <p className="leading-8 text-neutral-300">
                Сделали за один день.
                Всё именно так, как хотел.
              </p>

              <p className="mt-8 font-bold">
                — Максим
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <div className="mb-6 text-3xl">★★★★★</div>

              <p className="leading-8 text-neutral-300">
                Уже второй раз заказываю.
                Лучшее качество печати,
                которое видел.
              </p>

              <p className="mt-8 font-bold">
                — Данияр
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-y border-white/10 py-40">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="uppercase tracking-[8px] text-neutral-500">
            CLOTHES SYSTEM
          </p>

          <h2 className="mt-6 text-6xl font-black leading-tight md:text-8xl">

            НЕ ИЩИ.

            <br />

            СОЗДАЙ СВОЁ.

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-neutral-400">

            Создай одежду,
            которую невозможно купить
            в магазине.

          </p>

          <div className="mt-14 flex justify-center gap-6">

            <button className="rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-105">

              Создать дизайн

            </button>

            <button className="rounded-full border border-white px-10 py-5 text-lg transition hover:bg-white hover:text-black">

              WhatsApp

            </button>

          </div>

        </div>

      </section>   
    </main>
  );
}