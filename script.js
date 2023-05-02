const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
const btn = document.querySelectorAll(".btn");
// console.log(btn);
btn.forEach(function(button, index){
  console.log(button, index);
  button.addEventListener("click",function(event){{
    var btnItems = event.target;
    var product = btnItems.parentElement;
    var productIMG = product.querySelector("img").src;
    var productName = product.querySelector(".name").innerText
    var productPrice = product.querySelector(".price").innerText
    // console.log(productPrice,productIMG,productName)
    addcart(productPrice,productIMG,productName)
  }})
})

function addcart(productPrice,productIMG,productName) {
  var addtr = document.createElement("tr")
  var cartItems = document.querySelectorAll("tbody tr")
  for ( var i=0; i<cartItems.length; i++) {
    var productT = document.querySelectorAll(".title")
    if (productT[i].innerHTML == productName) {
      alert("San pham cua ban da co trong gio hang")
      return
    }
  }
  var trcontent = '<tr><td style="display: flex; align-items: center;"><img class="input" style="width: 70px;" src="'+productIMG+'" alt=""><span class="title">'+productName+'</span></td> <td><p><span class="prices">'+productPrice+'</span><sup></sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xoa</span></td></tr>'
  addtr.innerHTML = trcontent
  var carttable = document.querySelector("tbody")
  // console.log(carttable)
  carttable.append(addtr)
  carttotal()
  deleteCart()
}

function carttotal () {
  var cartItems = document.querySelectorAll("tbody tr")
  var totalC = 0;
  for (var i = 0; i<cartItems.length; i++) {
    var inputValues = cartItems[i].querySelector("input").value
    var productPrices = cartItems[i].querySelector(".prices").innerHTML
    var ProductPrices = parseFloat(productPrices)
    tong = inputValues * ProductPrices * 1000;
    totalC= totalC + tong;
    // totalD = totalC.toLocaleString('de-DE')
  }
  var cartTotalA = document.querySelector(".price-total span")
  var cartPrice = document.querySelector(".cart-icon span")
  cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
  cartPrice.innerHTML = totalC.toLocaleString('de-DE')
  inputchange()
}

function deleteCart () {
  var cartItems = document.querySelectorAll("tbody tr")
  for (var i=0; i<cartItems.length; i++) {
    var productT = document.querySelectorAll(".cart-delete")
    productT[i].addEventListener("click", function(event) {
      var cartDelete = event.target
      var cartitemR = cartDelete.parentElement.parentElement
      cartitemR.remove()
      carttotal()
    })
  }
}

function inputchange () {
  var cartItems = document.querySelectorAll("tbody tr")
  for (var i=0; i<cartItems.length; i++) {
    var inputvalues = cartItems[i].querySelector("input")
    inputvalues.addEventListener("change", function() {
      carttotal();
    })
  }
}

  const cartbtn = document.querySelector(".icon")
  const cartshow = document.querySelector(".shopping-cart")
  cartshow.addEventListener("click", function () {
  document.querySelector(".cart").style.left = "0"
  })
  cartbtn.addEventListener("click", function () {
  document.querySelector(".cart").style.left = "100%"
  })

//   function hamDropdown() {
//     document.querySelectorAll(".cart").classList.toggle(".hienThi");
// }

var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

function register(e) {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = form.elements['username'].value;
    const password = form.elements['password'].value;
    const email = form.elements['email'].value;
    const confirmPassword = form.elements['confirmPassword'].value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      // Save user registration data to database or localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('email', email)
      localStorage.setItem('password', password);
      alert('Registration successful!');
      // Redirect to the login page
      window.location.href = 'login.html';
    }
  });
}

function login(e) {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = form.elements['username'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    if (username === 'keith' && email === 'vuongtuankiet33@gmail.com' && password === '123') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password!');
      window.location.href = 'index.html';
    }
  });
}


