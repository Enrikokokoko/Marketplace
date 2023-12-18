export interface Product {
  name: string;
  img: string;
  price: number;
  discountPrice: number;
  score: string;
  id: number;
  quantity: number;
}


export interface Product_One {
  name: string;
  img: img[];
  price: number;
  discountPrice: number;
  characteristic: Characteristics[] | Characteristic[],
  feedback: feedback[],
  question: question[],
  id: number;
}

export interface img {
  image: string;
  id: number;
}

export interface feedback {
  id: number;
  text: string;
  author: { 
    firstName: string;
    lastName: string;
    id: number;
  }
  rating: number;
  advantage: string;
  disadvantage: string;
}

export interface question {
  id: number;
  text: string;
  author: { 
    firstName: string;
    lastName: string;
    id: number;
  }
}

export interface Characteristics {
 title: string;
  subinfo : Characteristic
}

export interface Characteristic {
  name: string;
  value: string[]
}