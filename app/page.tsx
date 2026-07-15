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

      </section>      {/* ABOUT */}

      <section className="border-y border-white/10 py-40">

        <div className="mx-auto max-w-6xl px-8 text-center">

          <p className="mb-6 text-sm uppercase tracking-[8px] text-neutral-500">
            О НАС
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Одежда,
            <br />
            которая выглядит
            <br />
            дорого.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-neutral-400">
            Мы создаем одежду с индивидуальными принтами,
            брендированием и дизайном.

            <br /><br />

            Каждая вещь производится
            под конкретный заказ.
            Без складов.
            Без шаблонов.
            Только твоя идея.
          </p>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-40">

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-6 text-sm uppercase tracking-[8px] text-neutral-500">
            ЧТО МЫ ДЕЛАЕМ
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 p-10">
              <h3 className="mb-4 text-3xl font-bold">
                Футболки
              </h3>

              <p className="leading-8 text-neutral-400">
                Oversize,
                классические,
                премиальный хлопок,
                любые размеры.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <h3 className="mb-4 text-3xl font-bold">
                Худи
              </h3>

              <p className="leading-8 text-neutral-400">
                Индивидуальный дизайн,
                логотипы,
                надписи,
                брендирование.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <h3 className="mb-4 text-3xl font-bold">
                Мерч
              </h3>

              <p className="leading-8 text-neutral-400">
                Для брендов,
                компаний,
                мероприятий
                и команд.
              </p>
            </div>

          </div>

        </div>

      </section>      {/* CTA */}

      <section className="border-t border-white/10 py-40">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="mb-6 text-sm uppercase tracking-[8px] text-neutral-500">
            ГОТОВ?
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            СОЗДАЙ
            <br />
            СВОЕ.
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