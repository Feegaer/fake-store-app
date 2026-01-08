export class Product {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly category: string;
  readonly image: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
  }
}