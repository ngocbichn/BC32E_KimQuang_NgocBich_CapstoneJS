//POST user 
document.querySelector('#btnSubmit').onclick = function () {
    var user = new User();
    user.email = document.querySelector('#inputEmail').value;
    user.password = document.querySelector('#inputPassword').value;
    user.name = document.querySelector('#inputName').value;
    // user.gender = document.getElementsByName('gender');
    user.phone = document.querySelector('#inputPhone').value;

    var radios = document.getElementsByName('gender');
    user.gender = true;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == !1) {
                user.gender = false;
            }
            break;
        }
    }
    // Call API to POST
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user,
    })
    promise.then(function (result) {
        console.log(result.data);
    })
    promise.catch(function (err) {
        console.log(err);
    })
}
