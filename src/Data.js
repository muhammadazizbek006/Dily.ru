// locations
export const locations = [
    { id: 1, location: 'Москва' },
    { id: 2, location: 'Санкт-Петербург' },
    { id: 3, location: 'Новосибирск' },
    { id: 4, location: 'Екатеринбург' },
    { id: 5, location: 'Нижний Новгород' },
    { id: 6, location: 'Казань' },
    { id: 7, location: 'Челябинск' },
    { id: 8, location: 'Омск' },
    { id: 9, location: 'Самара' },
    { id: 10, location: 'Ростов-на-Дону' },
    { id: 11, location: 'Уфа' },
    { id: 12, location: 'Красноярск' },
    { id: 13, location: 'Воронеж' },
    { id: 14, location: 'Пермь' },
    { id: 15, location: 'Волгоград' },
    { id: 16, location: 'Краснодар' },
];

// hero
import hero1 from './assets/hero/hero1.png'
import hero2 from './assets/hero/hero2.png'
import hero3 from './assets/hero/hero3.png'
import hero4 from './assets/hero/hero4.png'
// export const HeroSwiper = [

//     {
//         id:1,
//         title:`Ремонт`,
//         sharx:`Отремонтируем любую вещь быстро и качественно`,
//         img:hero1,
//         class:'text-2xl font-bold text-nav'
//     },
//     {
//         id:2,
//         title:`Помоги другим`,
//         sharx:`Передайте ваши вещи детским домам и благотворительным организациям`,
//         img:hero2,
//     },
//     {
//         id:3,
//         title:`Доставка`,
//         sharx:`Проверка при получении и возможность бесплатно вернуть товар`,
//         img:hero3,
//     },
//     {
//         id:4,
//         title:`Продайте нам`,
//         sharx:`Нет времени ждать? Продайте свой товар нам и получите деньги уже сейчас`,
//         img:hero4,
//     },
// ]

// Products
// src/data.js


export const HeroSwiper = [
    {
        id: 1,
        title: `Ремонт`,
        sharx: `Отремонтируем любую вещь быстро и качественно`,
        img: hero1,
        styles: {
            container: 'p-6 rounded-lg shadow-lg', // Har bir slayd konteyner uchun asosiy uslublar
            backgroundGradient: 'linear-gradient(228.84deg, #00C65E 26.24%, rgba(0, 198, 94, 0) 91.23%)',
            title: 'text-2xl font-bold text-green-500', 
            text: 'text-base text-gray-600',  
            img: 'w-1/3 h-auto', 
        },
    },
    {
        id: 2,
        title: `Помоги другим`,
        sharx: `Передайте ваши вещи детским домам и благотворительным организациям`,
        img: hero2,
        styles: {
            container: 'p-6 rounded-lg shadow-lg',
            backgroundGradient: 'linear-gradient(224.65deg, #FFFFFF 25.5%, #00C65E 72.75%)',
            title: 'text-2xl font-semibold text-white',
            text: 'text-base text-white',
            img: 'w-1/3 h-auto',
        },
    },
    {
        id: 3,
        title: `Доставка`,
        sharx: `Проверка при получении и возможность бесплатно вернуть товар`,
        img: hero3,
        styles: {
            container: 'p-6 rounded-lg shadow-lg',
            backgroundGradient: 'linear-gradient(57.7deg, #FBB762 -8.8%, rgba(255, 255, 255, 0.54) 63.05%)',
            title: 'text-2xl font-bold text-gray-700',
            text: 'text-base text-gray-700',
            img: 'w-1/3 h-auto',
        },
    },
    {
        id: 4,
        title: `Продайте нам`,
        sharx: `Нет времени ждать? Продайте свой товар нам и получите деньги уже сейчас`,
        img: hero4,
        styles: {
            container: 'p-6 rounded-lg shadow-lg',
            backgroundGradient: 'conic-gradient(from 141deg at 66.28% 59.34%, #FFB762 -167.23deg, rgba(255, 255, 255, 0.22) 11.82deg, #FFB762 192.77deg, rgba(255, 255, 255, 0.22) 371.82deg)',
            title: 'text-2xl font-semibold text-black',
            text: 'text-base text-gray-600',
            img: 'w-1/3 h-auto',
        },
    },
];


import produc1 from './imgs/smartfon/tel1.jpg'
import produc2 from './imgs/smartfon/tel2.jpg'
import produc3 from './imgs/smartfon/tel3.jpg'
import produc4 from './imgs/smartfon/tel4.jpg'
import produc5 from './imgs/smartfon/tel5.jpg'
import produc6 from './imgs/smartfon/tel6.jpg'

import produc7 from './imgs/noutbook/noutbook1.jpg'
import produc8 from './imgs/noutbook/noutbook2.jpg'
import produc9 from './imgs/noutbook/noutbook3.jpg'
import produc10 from './imgs/noutbook/noutbook4.jpg'
import produc11 from './imgs/noutbook/noutbook5.jpg'

export const Products = [
    {
        id:1,
        img:produc1,
        brend:`redmi`,
        type:`phone`,
        title:`Телефон Xiaomi Redmi `,
        price:`10 000 ₽ `,
        location:`Москва`
    },
    {
        id:2,
        img:produc2,
        brend:`apple`,
        type:`phone`,
        title:`Ipnon 12 mini`,
        price:`89 999 ₽ `,
        location:`Москва`
    },

    {
        id:3,
        img:produc3,
        brend:`HUAWEI`,
        type:`phone`,
        title:`Смартфон HUAWEI `,
        price:`7990 ₽`,
        location:`Москва`
    },
    {
        id:4,
        img:produc4,
        brend:`Samsung`,
        type:`phone`,
        title:`Samsung Galaxy`,
        price:`9990 ₽`,
        location:`Москва`
    },
    
    {
        id:5,
        img:produc5,
        brend:`ASUS`,
        type:`noutbook`,
        title:`ASUS Zenbook`,
        price:`30 000  ₽`,
        location:`Москва`
    },
    {
        id:6,
        img:produc6,
        brend:`HP`,
        type:`noutbook`,
        title:`Ноутбук HP`,
        price:`15 000 ₽`,
        location:`Москва`
    },
    
    {
        id:7,
        img:produc7,
        brend:`HUAWEI`,
        type:`noutbook`,
        title:`HUAWEI MateBook `,
        price:`50 000 ₽`,
        location:`Москва`
    },
    {
        id:8,
        img:produc8,
        brend:`HP`,
        type:`noutbook`,
        title:`Ноутбук HP 15s`,
        price:`20 000 ₽`,
        location:`Москва`
    },
    {
        id:9,
        img:produc9,
        brend:`Apple`,
        type:`noutbook`,
        title:`Apple MacBook Air 13`,
        price:`50 000 ₽`,
        location:`Москва`
    },
]