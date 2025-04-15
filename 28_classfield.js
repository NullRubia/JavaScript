class Product {
  name = "상품명 없음"; // 객체 생성시 힙에 올라감
  price = 0; // 객체 생성시 힙에 올라감
  static productName = "컴퓨터"; //힙에 먼저 올라감
  static productPrice = 100000; //힙에 먼저 올라감

  showInfo() {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
  }

  static showStaticInfo() {
    console.log(`${this.productName}의 가격은 ${this.productPrice}원입니다.`);
  }
}

const p = new Product();
p.showInfo();
//p.showStaticInfo();
Product.showStaticInfo();
