import { Product, Product_One } from "../../interface/product";

export const PRODUCT: Product[] = [
  {
    name: 'HyperX Cloud Stinger 2 Core',
    img: 'assets/img/product/hyper/Headphones_hyperX.webp',
    price: 299,
    discountPrice: 249,
    score: '4',
    id: 1,
    quantity: 2
  },
  {
    name: 'TV Samsung',
    img: 'assets/img/product/TV_SAMSUNG.jpg',
    price: 858,
    discountPrice: 820,
    score: '4.5',
    id: 2,
    quantity: 1
  },
  {
    name: 'PlayStation 5 Slim',
    img: 'assets/img/product/PlayStation_5_slim.webp',
    price: 649,
    discountPrice: 599,
    score: '5',
    id: 3,
    quantity: 5
  },
  {
    name: 'Monitor Philips',
    img: 'assets/img/product/Monitor_Philips.webp',
    price: 499,
    discountPrice: NaN,
    score: '5',
    id: 4,
    quantity: 3
  },
  {
    name: 'TV LG',
    img: 'assets/img/product/TV_LG.webp',
    price: 999,
    discountPrice: 899,
    score: '4',
    id: 5,
    quantity: 2
  },
  {
    name: 'Monitor MSI OPTIX BLACK',
    img: 'assets/img/product/Monitor_msi_optix_g24c4_black.jpg',
    price: 649,
    discountPrice: 599,
    score: '5',
    id: 6,
    quantity: 2
  },
];

export const PRODUCT_ONE: Product_One[] = [
  {
    name: 'HyperX Cloud Stinger 2 Core',
    img: [
      { image: 'assets/img/product/hyper/Headphones_hyperX.webp', id: 1 },
      { image: 'assets/img/product/hyper/Headphones_hyperX2.jpg', id: 2 },
      { image: 'assets/img/product/hyper/Headphones_hyperX3.webp', id: 3 },
      { image: 'assets/img/product/hyper/Headphones_hyperX5.jpg', id: 4 },
      { image: 'assets/img/product/hyper/Headphones_hyperX4.webp', id: 5 },
    ],
    feedback: [
      {
        id: 1,
        text: "Bought two days ago and i think it's the best purchase I have ever bought",
        author: { firstName: 'Steve', lastName: 'Sliden', id: 1 },
        rating: 5,
        advantage: 'Sound is simply divine',
        disadvantage: ''
      },
      {
        id: 2,
        text: 'I ready to buy all of your staffs',
        author: { firstName: 'Mark', lastName: 'Zuckerberg', id: 2 },
        rating: 5,
        advantage: 'I do not hear my wife screaming anymore',
        disadvantage: '-'
      },
      {
        id: 3,
        text: 'Like hands of freedom that keep you from hell',
        author: { firstName: 'Fridrih', lastName: 'Nicshe', id: 3 },
        rating: 4,
        advantage: 'My demons are disappeared',
        disadvantage: 'I can not hear myself'
      },
      {
        id: 4,
        text: "It's a shame to hide your weakness behind this",
        author: { firstName: 'Arthur', lastName: 'Shopengauer', id: 4 },
        rating: 1,
        advantage: '',
        disadvantage: 'You do not even need to say smth here, it is all so obviously'
      },
    ],
    characteristic: [
      { 
        name: "Headphone type", value : ['Full size'],
      }, 
      {
        name: "Features", value : ['Android compatibility', 'Apple compatibility', 'Micro']
      },
      {
        name: "Connection type", value : ['Wired']
      },
      {
        name: "Connection interface", value : ['3.5 mm (mini-Jack)']
      },
      {
        name: "Microphone", value : ['Built-in']
      },
      {
        name: "Color", value : ['Black']
      },
      {
        name: "Presence of active noise reduction", value : ['Without active noise reduction']
      },
      {
        name: "Fastening type", value : ['With the title']
      },
      {
        name: "The material of the ear pads", value : ['Cloth']
      },
      {
        name: "Cord length, m", value : ['2']
      },
      {
        name: "Headphone frequency range", value : ['10 - 25,000 Hz']
      },
      {
        name: "Impedance, Ohm", value : ['32']
      },
    ],
    
    question: [
      {
        id: 1,
        text: "Can i use this under the water",
        author: { firstName: 'Steve', lastName: 'Sliden', id: 1 },
      },
      {
        id: 2,
        text: 'And for eyes do you have something?',
        author: { firstName: 'Fridrih', lastName: 'Nicshe', id: 3 },
      },
    ],
    price: 299,
    discountPrice: 249,
    id: 1,
  },
];

export const PRODUCTS: Product[] = [
  {
    name: 'Porsche Design BOOK ONE',
    img: 'assets/img/product/laptop-porsche.jpg',
    price: 2499,
    discountPrice: 2399,
    score: '4',
    id: 1,
    quantity: 1
  },
  {
    name: 'LG Twin Wash',
    img: 'assets/img/product/washing-machine.jpg',
    price: 5149,
    discountPrice: 5099,
    score: '5',
    id: 2,
    quantity: 2
  },
  {
    name: 'iPad air',
    img: 'assets/img/product/iPad-air.jpg',
    price: 799,
    discountPrice: NaN,
    score: '5',
    id: 3,
    quantity: 2
  },
  {
    name: 'Filmadora Profissional Xdcam Pxw-z150 4k Sony',
    img: 'assets/img/product/camera-sony.jpg',
    price: 2258,
    discountPrice: 2220,
    score: '4.5',
    id: 4,
    quantity: 7
  },
  {
    name: 'Porsche Design BOOK ONE',
    img: 'assets/img/product/laptop-porsche.jpg',
    price: 2499,
    discountPrice: 2399,
    score: '4',
    id: 5,
    quantity: 5
  },
  {
    name: 'LG Twin Wash',
    img: 'assets/img/product/washing-machine.jpg',
    price: 5149,
    discountPrice: 5099,
    score: '5',
    id: 6,
    quantity: 2
  },
  {
    name: 'iPad air',
    img: 'assets/img/product/iPad-air.jpg',
    price: 799,
    discountPrice: NaN,
    score: '5',
    id: 7,
    quantity: 2
  },
  {
    name: 'Filmadora Profissional Xdcam Pxw-z150 4k Sony',
    img: 'assets/img/product/camera-sony.jpg',
    price: 2258,
    discountPrice: 2220,
    score: '4.5',
    id: 8,
    quantity: 6
  },
  {
    name: 'Porsche Design BOOK ONE',
    img: 'assets/img/product/laptop-porsche.jpg',
    price: 2499,
    discountPrice: 2399,
    score: '4',
    id: 9,
    quantity: 2
  },
  {
    name: 'LG Twin Wash',
    img: 'assets/img/product/washing-machine.jpg',
    price: 5149,
    discountPrice: 5099,
    score: '5',
    id: 10,
    quantity: 2
  },
  {
    name: 'iPad air',
    img: 'assets/img/product/iPad-air.jpg',
    price: 799,
    discountPrice: NaN,
    score: '5',
    id: 11,
    quantity: 2
  },
  {
    name: 'Filmadora Profissional Xdcam Pxw-z150 4k Sony',
    img: 'assets/img/product/camera-sony.jpg',
    price: 2258,
    discountPrice: 2220,
    score: '4.5',
    id: 12,
    quantity: 1
  },
  {
    name: 'Porsche Design BOOK ONE',
    img: 'assets/img/product/laptop-porsche.jpg',
    price: 2499,
    discountPrice: 2399,
    score: '4',
    id: 13,
    quantity: 2
  },
  {
    name: 'LG Twin Wash',
    img: 'assets/img/product/washing-machine.jpg',
    price: 5149,
    discountPrice: 5099,
    score: '5',
    id: 14,
    quantity: 8
  },
  {
    name: 'iPad air',
    img: 'assets/img/product/iPad-air.jpg',
    price: 799,
    discountPrice: NaN,
    score: '5',
    id: 15,
    quantity: 2
  },
  {
    name: 'Filmadora Profissional Xdcam Pxw-z150 4k Sony',
    img: 'assets/img/product/camera-sony.jpg',
    price: 2258,
    discountPrice: 2220,
    score: '4.5',
    id: 16,
    quantity: 2
  },
  {
    name: 'Porsche Design BOOK ONE',
    img: 'assets/img/product/laptop-porsche.jpg',
    price: 2499,
    discountPrice: 2399,
    score: '4',
    id: 17,
    quantity: 2
  },
  {
    name: 'LG Twin Wash',
    img: 'assets/img/product/washing-machine.jpg',
    price: 5149,
    discountPrice: 5099,
    score: '5',
    id: 18,
    quantity: 3
  },
];

export const STAR = 'assets/img/product/star.png';
export const SHOPPING_CART = 'assets/img/header/shopping-cart.png';
