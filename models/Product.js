// id": 1,
//       "name": "Adidas Prophere",
//       "alias": "adidas-prophere",
//       "price": 350,
//       "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//       "size": "[36,37,38,39,40,41,42]",
//       "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//       "quantity": 995,
//       "deleted": false,
//       "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
//       "relatedProducts": "[2,3,5]",
//       "feature": true,
//       "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"

function Product() {
    this.name = '';
    this.alias = '';
    this.price = 0;
    this.description = '';
    this.size = 0;
    this.shortDescription = '';
    this.quantity = 0;
    this.deleted = true;
    this.categories = '';
    this.relatedProducts = [];
    this.feature = true;
    this.image = '';
};