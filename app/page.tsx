"use client";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

const [selectedColor, setSelectedColor] = useState("Черный");

const [selectedSize, setSelectedSize] = useState("M");

const [quantity, setQuantity] = useState(1);
  const catalog = [
  {
  image: "/catalog-1.jpeg",
  name: "Футболка Classic",
  price: "8 900 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
  {
  image: "/catalog-2.jpeg",
  name: "Футболка Classic",
  price: "8 900 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
  {
  image: "/catalog-3.jpeg",
  name: "Футболка Classic",
  price: "6 500 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
  {
  image: "/catalog-4.jpeg",
  name: "Футболка Classic",
  price: "6 500 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
  {
  image: "/catalog-5.jpeg",
  name: "Футболка Oversize",
  price: "7 700 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
  {
  image: "/catalog-6.jpeg",
  name: "Футболка Oversize",
  price: "7 700 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
  {
  image: "/catalog-7.jpeg",
  name: "Футболка Classic",
  price: "6 500 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
  {
  image: "/catalog-8.jpeg",
  name: "Футболка Oversize",
  price: "7 700 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
  {
  image: "/catalog-9.jpeg",
  name: "Футболка Oversize",
  price: "7 700 ₸",

  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#ffffff" },
    { name: "Графит", hex: "#4B4B4B" },
    { name: "Темно-синий", hex: "#1D2F6F" },
    { name: "Электрик", hex: "#007BFF" },
    { name: "Голубой", hex: "#6EC6FF" },
    { name: "Красный", hex: "#D62828" },
    { name: "Фиолетовый", hex: "#7B2CBF" },
    { name: "Зеленый", hex: "#2E8B57" },
    { name: "Какао", hex: "#8B5E3C" }
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
  ]
},
];
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* HEADER */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-8">

          <h1 className="text-xl md:text-2xl font-black tracking-[0.35em]">
            CLOTHES SYSTEM
          </h1>

          <nav className="hidden gap-10 text-sm uppercase tracking-[3px] md:flex">

            <a href="#catalog" className="transition duration-300 hover:text-white hover:opacity-100 opacity-70">
              Каталог
            </a>

            <a href="#works" className="transition duration-300 hover:text-white hover:opacity-100 opacity-70">
              Наши работы
            </a>

            <a href="#contacts" className="transition duration-300 hover:text-white hover:opacity-100 opacity-70">
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
<div className="mx-auto mt-24 h-px max-w-[1600px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
  href="https://wa.me/77067075261?text=Здравствуйте! Хочу создать свой дизайн."
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-110 hover:shadow-2xl"
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
  src="/black-shirt.png"
  alt="Hero"
  width={1400}
  height={1700}
  priority
  className="relative w-[750px] xl:w-[900px] h-auto"
/>

          </div>

        </div>

      </section>      {/* CATALOG */}


      <section
        id="works"
        className="py-20"
      >

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 uppercase tracking-[8px] text-neutral-500">
            НАШИ РАБОТЫ
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
  НАШИ
<br />
РАБОТЫ
</h2>

<div className="mt-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">

  <div onClick={() => setSelectedImage("/work1.jpeg")} className="cursor-pointer">
    <Image
      src="/work1.jpeg"
      alt="work"
      width={900}
      height={900}
      className="w-full aspect-square rounded-2xl object-cover transition duration-300 hover:scale-110 active:scale-95"
    />
  </div>

  <div onClick={() => setSelectedImage("/work2.jpeg")} className="cursor-pointer">
    <Image
      src="/work2.jpeg"
      alt="work"
      width={900}
      height={900}
      className="w-full aspect-square rounded-2xl object-cover transition duration-300 hover:scale-110 active:scale-95"
    />
  </div>

  <div onClick={() => setSelectedImage("/work3.jpeg")} className="cursor-pointer">
    <Image
      src="/work3.jpeg"
      alt="work"
      width={900}
      height={900}
      className="w-full aspect-square rounded-2xl object-cover transition duration-300 hover:scale-110 active:scale-95"
    />
  </div>

  <div onClick={() => setSelectedImage("/work4.jpeg")} className="cursor-pointer">
    <Image
      src="/work4.jpeg"
      alt="work"
      width={900}
      height={900}
      className="w-full aspect-square rounded-2xl object-cover transition duration-300 hover:scale-110 active:scale-95"
    />
  </div>

  <div onClick={() => setSelectedImage("/work5.jpeg")} className="cursor-pointer">
    <Image
      src="/work5.jpeg"
      alt="work"
      width={900}
      height={900}
      className="w-full aspect-square rounded-2xl object-cover transition duration-300 hover:scale-110 active:scale-95"
    />
  </div>

  <div onClick={() => setSelectedImage("/work6.jpeg")} className="cursor-pointer">
    <Image
      src="/work6.jpeg"
      alt="work"
      width={900}
      height={900}
      className="w-full aspect-square rounded-2xl object-cover transition duration-300 hover:scale-110 active:scale-95"
    />
  </div>

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

        <div className="mx-auto max-w-[1600px] px-8">

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
            href="https://wa.me/77067075261?text=Здравствуйте! Хочу сделать заказ."
            className="mt-14 inline-block rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-110 active:scale-95"
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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

{catalog.map((item, index) => (

       <div
  key={index}
  onClick={() => {
    setSelectedProduct(item);
    setSelectedColor("Черный");
    setSelectedSize("M");
    setQuantity(1);
  }}
  className="group cursor-pointer overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(255,255,255,0.08)]"
>

  <Image
    src={item.image}
    alt={item.name}
    width={700}
    height={900}
    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
  />

  <div className="p-6">

    <h3 className="text-2xl font-semibold tracking-wide">
      {item.name}
    </h3>

    <p className="mt-2 text-neutral-400">
      Premium хлопок · Индивидуальный принт
    </p>

    <div className="mt-6 flex items-center justify-between">

      <span className="text-2xl font-black">
        {item.price}
      </span>

      <button
  className="rounded-full border border-white px-5 py-2 text-sm transition hover:bg-white hover:text-black"
>
  Заказать
</button>

    </div>

  </div>

</div>

))}

    </div>

  </div>
</section>
    <footer className="border-t border-white/10 py-16">

  <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-8 md:flex-row md:justify-between">

    <div>
      <h2 className="text-2xl font-black tracking-[8px]">
        CLOTHES SYSTEM
      </h2>

      <p className="mt-5 max-w-sm leading-8 text-neutral-400">
        Премиальная одежда с индивидуальной печатью.
        Изготавливаем футболки, худи и мерч от 1 экземпляра.
      </p>
    </div>

    <div>
      <h3 className="mb-4 text-sm uppercase tracking-[4px] text-neutral-500">
        Контакты
      </h3>

      <div className="space-y-3">

        <a
          href="https://wa.me/77067075261"
          className="block transition hover:text-white"
        >
          WhatsApp
        </a>

        <a
          href="https://www.instagram.com/clothes_system.print"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition hover:text-white"
        >
          Instagram
        </a>

      </div>
    </div>

    <div className="text-right">

      <h3 className="mb-4 text-sm uppercase tracking-[4px] text-neutral-500">
        Информация
      </h3>

      <p className="text-neutral-400">
        Алматы
      </p>

      <p className="mt-2 text-neutral-400">
        Изготовление 1–2 дня
      </p>

      <p className="mt-8 text-sm text-neutral-600">
        © 2026 CLOTHES SYSTEM
      </p>

    </div>

  </div>

</footer>
{selectedImage && (
  <div
  onClick={() => setSelectedImage(null)}
  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
>
    <Image
  src={selectedImage}
  alt="preview"
  width={1800}
  height={1800}
  className="max-h-[95vh] max-w-[95vw] rounded-[32px] object-contain animate-[fadeIn_.25s_ease]"
/>
  </div>
)}
{selectedProduct && (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6 animate-[fadeIn_.2s_ease]"
    onClick={() => setSelectedProduct(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 animate-[zoom_.25s_ease]"
    >
      <div className="grid md:grid-cols-2">

        <div className="bg-black">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={900}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-10 flex flex-col">
          <button
  onClick={() => setSelectedProduct(null)}
  className="absolute right-6 top-6 text-4xl leading-none text-white/60 transition hover:text-white"
>
  ×
</button>
<button
  onClick={() => setSelectedProduct(null)}
  className="absolute right-6 top-6 text-4xl leading-none text-white/60 transition hover:text-white"
>
  ×
</button>
          <h2 className="text-4xl font-black">
            {selectedProduct.name}
          </h2>

          <p className="mt-3 text-2xl font-bold">
            {selectedProduct.price}
          </p>

          <div className="mt-10">

            <p className="mb-3 text-neutral-400">
              Цвет
            </p>

            <div className="grid grid-cols-5 gap-3">

              {selectedProduct.colors.map((color: any) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`rounded-full border px-5 py-2 transition ${
                    selectedColor === color.name
                      ? "border-white bg-white text-black"
                      : "border-white/20"
                  }`}
                >
                  <div
  className={`h-7 w-7 rounded-full border-4 transition duration-300 ${
    selectedColor === color.name
      ? "border-white scale-110"
      : "border-transparent"
  }`}
  style={{
    backgroundColor: color.hex,
  }}
/>
                </button>
              ))}

            </div>

          </div>

          <div className="mt-8">

            <p className="mb-3 text-neutral-400">
              Размер
            </p>

            <div className="flex flex-wrap gap-2">

              {selectedProduct.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={()=>setSelectedSize(size)}
                  className={`h-12 w-12 rounded-xl border transition ${
                    selectedSize===size
                      ? "border-white bg-white text-black"
                      : "border-white/20"
                  }`}
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          <div className="mt-8">

            <p className="mb-3 text-neutral-400">
              Количество
            </p>

            <div className="flex items-center gap-4">

              <button
                onClick={()=>
                  setQuantity(Math.max(1,quantity-1))
                }
                className="h-12 w-12 rounded-xl border border-white/20 transition hover:bg-white hover:text-black active:scale-95"
              >
                −
              </button>

              <span className="text-2xl font-bold">
                {quantity}
              </span>

              <button
                onClick={()=>
                  setQuantity(quantity+1)
                }
                className="h-12 w-12 rounded-xl border border-white/20 transition hover:bg-white hover:text-black active:scale-95"
              >
                +
              </button>

            </div>

          </div>

          <a
            className="mt-10 rounded-2xl bg-white py-5 text-center font-bold text-black transition hover:opacity-90"
            href={`https://wa.me/77067075261?text=${encodeURIComponent(
`Здравствуйте!

Хочу заказать:

Товар: ${selectedProduct.name}

Цвет: ${selectedColor}

Размер: ${selectedSize}

Количество: ${quantity}

Спасибо!`
            )}`}
            target="_blank"
          >
            Заказать в WhatsApp
          </a>

        </div>

      </div>
    </div>
  </div>
)}
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