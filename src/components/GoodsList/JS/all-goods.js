const goodsList = [];
const goodsCount = 10;

const imgList = ['bird.jpeg', 'lassock.jpeg', 'swiper1.jpg', 'swiper2.jpeg', 'swiper3.png', 'violet.jpeg'];

class Goods {
  constructor(index) {
    this.index = index;
    this.name = '黑凤梨 那桑眼动言 秀僧更麦言 晕坐和 黑凤梨';
    this.shopName = '某某某的官方旗舰店';
  }

  createImgInfo() {
    const index = imgList.length * Math.random() | 0;
    this.imgName = imgList[index];
    this.imgAlt = '';
  }

  creteOtherInfo() {
    this.createImgInfo();
    this.price = 200 + 200 * Math.random() | 0;
    this.isDiscount = Math.random() > 0.5;
    this.salesVolume = 100 * Math.random() | 0;
    this.delPrice = this.price + 200 * Math.random() | 0;
    this.selfSupport = Math.random() > 0.5;
    this.activities = ['积分', '搭配', '赠'];
  }
}


for(let i = 0; i  < goodsCount; i ++) {
  const goods = new Goods(i);
  goods.creteOtherInfo();
  goodsList.push(goods);
}

export default goodsList;
