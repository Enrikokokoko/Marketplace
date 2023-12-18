export const CATEGORIES = [
  {
    name: 'Laptops and computers',
    img_slider: 'assets/img/categories/slider/laptops-slider.jpg',
    img_category: 'assets/img/categories/img/laptop.jpg',
    url: '',
    id: 1,
    subcategories: [
      { name: 'Computers, monoblocks', img: 'assets/img/categories/img/sub-img/computer-product.jpg', id: '1', url: '' },
      { name: 'Tablets', img: 'assets/img/categories/img/sub-img/tablet-product.jpeg', id: '2', url: '' },
      { name: 'Monitors', img: 'assets/img/categories/img/sub-img/monitor-product.jpg', id: '3', url: '' },
      { name: 'Laptop', img: 'assets/img/categories/img/sub-img/laptop-product.jpg', id: '4', url: '' },
    ],
  },
  {
    name: 'Smartphones, TV and Electronics',
    img_slider: 'assets/img/categories/slider/smartphone-slider.jpg',
    img_category: 'assets/img/categories/img/smartphone.jpg',
    url: '',
    id: 2,
    subcategories: [
      { name: 'IPhone', img: 'assets/img/categories/img/sub-img/iphone-product.jpg', id: '1', url: '' },
      { name: 'Android', img: 'assets/img/categories/img/sub-img/andriod-product.jpg', id: '2', url: '' },
      { name: 'Apple Watch', img: 'assets/img/categories/img/sub-img/apple-watch-product.jpg', id: '3', url: '' },
      { name: 'Headphones', img: 'assets/img/categories/img/sub-img/earbud-product.jpg', id: '4', url: '' },
      { name: 'Television set', img: 'assets/img/categories/img/sub-img/tv-product.jpeg', id: '5', url: '' },
      { name: 'Power banks and charging stations', img: 'assets/img/categories/img/sub-img/powerbank-product.jpg', id: '6', url: '' },
    ],
  },
  {
    name: 'Home appliances',
    img_slider: 'assets/img/categories/slider/home-appliances-slider.jpg',
    img_category: 'assets/img/categories/img/home-appliance.jpg',
    url: '',
    id: 3,
    subcategories: [
      { name: 'Refrigerator', img: '', id: '1', url: '' },
      { name: 'washing machine', img: '', id: '2', url: '' },
      { name: 'Microwave oven', img: '', id: '3', url: '' },
      { name: 'Cavomachines', img: '', id: '4', url: '' },
      { name: 'Multicooker ', img: '', id: '5', url: '' },
      { name: 'Vacuuming robots', img: '', id: '6', url: '' }
    ],
  },
  {
    name: 'Electronics',
    img_slider: 'assets/img/categories/slider/electronics-slider.jpg',
    img_category: 'assets/img/categories/img/audio-equipment.jpeg',
    url: '',
    id: 4,
    subcategories: [
      { name: 'Audio equipment', img: '', id: '1', url: '' },
      { name: 'Projection equipment', img: '', id: '2', url: '' },
      { name: 'Accessories for mobile phones', img: '', id: '3', url: '' },
      { name: 'Accessories for TVs', img: '', id: '4', url: '' },
    ],
  },
  {
    name: 'Gaming products',
    img_slider: 'assets/img/categories/slider/gaming-products-slider.jpg',
    img_category: 'assets/img/categories/img/gaming-products.jpg',
    url: '',
    id: 5,
    subcategories: [
      { name: 'Game consoles', img: '', id: '1', url: '' },
      { name: 'Games', img: '', id: '2', url: '' },
      { name: 'Armchairs for gamers', img: '', id: '3', url: '' },
      { name: 'Virtual reality glasses and helmets', img: '', id: '4', url: '' },
      { name: 'Gaming peripherals', img: '', id: '5', url: '' },
    ],
  },
  {
    name: 'Books',
    img_slider: 'assets/img/categories/slider/books-slider.jpeg',
    img_category: 'assets/img/categories/img/books.jpeg',
    url: '',
    id: 6,
    subcategories: [
      { name: 'Fiction', img: '', id: '1', url: '' },
      { name: 'Textbooks, scientific and methodological literature', img: '', id: '2', url: '' },
      { name: 'Comics', img: '', id: '3', url: '' },
      { name: 'Dictionaries and encyclopedias', img: '', id: '4', url: '' },
      { name: 'Biographies and memoirs', img: '', id: '5', url: '' },
      { name: 'Psychology', img: '', id: '6', url: '' },
      { name: 'Philosophy', img: '', id: '7', url: '' },
    ],
  },
];

export const LIST = 'assets/img/categories/categories.png';

export const CATEGORY_CONFIG = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: true,
  infinite: true,
  dots: true,
};
