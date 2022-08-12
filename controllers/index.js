function getProduct() {
    // const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get('productid');
    // console.log('params', myParam);

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: JSON,
    })
    promise.then(function (result) {
        console.log(result.data);
        renderProduct(result.data.content);
        // loadProductDetails(result.data.content)
    })
    promise.catch(function (error) {
        console.log(error);
    })
}

function renderProduct(arrProduct) {
    var htmlStrCardBody = '';

    for (var i = 0; i < arrProduct.length; i++) {
        var product = arrProduct[i];

        htmlStrCardBody += `<div class="col-4">
                                <div class="card form-group">
                                    <div class="card-body" id="card-item">
                                        <div class="item-img" id="item-img">
                                            <img src="${product.image}">
                                        </div>
                                        <p class="item-name" id="item-name">${product.name}</p>
                                        <p class="item-description" id="item-shortDescripton">${product.shortDescription}</p>
                                    </div>

                                    <div class="card-footer">
                                        <div class="card-footer-left">
                                            <a href="./details.html?productid=${product.id}">
                                                <button class="btn">Buy now</button>
                                            </a>
                                        </div>
                                        <div class="card-footer-right" id="item-footer-price">
                                            <b id="item-price">$${product.price}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `;

        document.querySelector('#rowItem').innerHTML = htmlStrCardBody;
    }
};

getProduct();