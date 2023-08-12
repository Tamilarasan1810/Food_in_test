export class ShopOrderListItemsOwner {
  public productId: string;
  public name: string;
  public shopId: string;
  public category: string;
  public review: string;
  public rating: number;
  public price: number;
  public quantity: number;

  constructor(
    Id: string,
    productName: string,
    shopId: string,
    category: string,
    review: string,
    rating: number,
    price: number,
    quantity: number
  ) {
    this.productId = Id;
    this.name = productName;
    this.shopId = shopId;
    this.category = category;
    this.review = review;
    this.rating = rating;
    this.price = price;
    this.quantity = quantity;
  }
}
