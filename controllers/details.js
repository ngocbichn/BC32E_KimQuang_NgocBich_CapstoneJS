function getProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + myParam,
        method: 'GET',
        ResponseType: JSON,
    })
    promise.then(function (result) {
        console.log(result.data);
        loadProductDetails(result.data.content)
    })
    promise.catch(function (error) {
        console.log(error);
    })
}

function loadProductDetails(product) {
    var htmlStrImg = '';
    var htmlStrDetails = '';

    document.querySelector('#prod-img').innerHTML = htmlStrImg;
    document.querySelector('#prod-details-cont').innerHTML = htmlStrDetails;

    htmlStrImg += `
                <div class="prod-img-cont">
                    <img src="${product.image}" alt="">
                </div>
            `;

    htmlStrDetails += `
            <p class="item-name">${product.name}</p>
            <p class="item-description">${product.description}</p>
            <p class="item-status">Available Sizes</p>
            <div class="item-sizes">
                <span class="size-box">38</span>
                <span class="size-box">39</span>
                <span class="size-box">40</span>
                <span class="size-box">41</span>
                <span class="size-box">42</span>
            </div>
            <p class="item-price">$${product.price}</p>
            <button class="btn">Add to Cart</button>
            `;

    document.querySelector('#prod-img').innerHTML = htmlStrImg;
    document.querySelector('#prod-details-cont').innerHTML = htmlStrDetails;
};

getProductDetails();