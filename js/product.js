




function calculateAmount() {
  var selFrst = parseInt(document.getElementById("material").value);
  var selScnd = parseInt(document.getElementById("amounts").value);
  var curIncy = document.getElementById("currency").value;

  var myHeaders = new Headers();
  myHeaders.append("apikey", "IvgZSnhJdsqSe00NG45m81ElzHtpeCT6");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${curIncy}&from=inr&amount=1`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data.result)


      var tot_price;

      if (selScnd && selFrst) {
        if (selFrst == 1200 && curIncy == 'inr') {
          tot_price = (selFrst * selScnd * data.result) + ("₹");
        } else if (selFrst == 1400 && curIncy == 'inr') {
          tot_price = (selFrst * selScnd * data.result) + ("₹");

        } else if (selFrst == 1800 && curIncy == 'inr') {
          tot_price = (selFrst * selScnd * data.result) + ("₹");
        }
        document.getElementById("tot_amount").value = tot_price;



        // usd
        if (selFrst == 1200 && curIncy == 'usd') {
          tot_price = ((selFrst * selScnd * data.result)) + ("$");
        } else if (selFrst == 1400 && curIncy == 'usd') {
          tot_price = ((selFrst * selScnd * data.result)) + ("$");

        } else if (selFrst == 1800 && curIncy == 'usd') {
          tot_price = ((selFrst * selScnd * data.result)) + ("$");
        }
        document.getElementById("tot_amount").value = tot_price;


        // Euro
        if (selFrst == 1200 && curIncy == 'eur') {
          tot_price = ((selFrst * selScnd * data.result)) + ("€");
        } else if (selFrst == 1400 && curIncy == 'eur') {
          tot_price = ((selFrst * selScnd * data.result)) + ("€");

        } else if (selFrst == 1800 && curIncy == 'eur') {
          tot_price = ((selFrst * selScnd * data.result)) + ("€");
        }
        document.getElementById("tot_amount").value = tot_price;
      }
    })
    .catch(error => console.log('error', error));
}




// image hover with 6 images
/**
miImg = document.getElementById('mainImg');
thumb1 = document.getElementById('thumb1');
thumb1src = document.getElementById('thumb1').src;
thumb2 = document.getElementById('thumb2');
thumb2src = document.getElementById('thumb2').src;
thumb3 = document.getElementById('thumb3');
thumb3src = document.getElementById('thumb3').src;
thumb4 = document.getElementById('thumb4');
thumb4src = document.getElementById('thumb4').src;
thumb5 = document.getElementById('thumb5');
thumb5src = document.getElementById('thumb5').src;
thumb6 = document.getElementById('thumb6');
thumb6src = document.getElementById('thumb6').src;


thumb1.addEventListener('click', function () {
  mainImg.src = thumb1src
})
thumb2.addEventListener('click', function () {
  mainImg.src = thumb2src
})
thumb3.addEventListener('click', function () {
  mainImg.src = thumb3src
})
thumb4.addEventListener('click', function () {
  mainImg.src = thumb4src
})
thumb5.addEventListener('click', function () {
  mainImg.src = thumb5src
})
thumb6.addEventListener('click', function () {
  mainImg.src = thumb6src
})
 */
const mainImage = document.querySelector('.mainImage')
const smallImages = document.querySelectorAll('.product-images')


smallImages.forEach(img => {
  img.addEventListener('click', function () {
    mainImage.src = img.src
  })
})




fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(datas => datas.forEach(data => {
    console.log(data)
  }))


// searching



// // Fetch search Bar result - 3rd card
// const search = document.querySelector('#search')
// const searchResult = document.querySelector('.search-result')
// let arr = []
// let arr2 = []
// function inputFn(input) {
//     fetch(`https://newsdata.io/api/1/news?apikey=pub_14363c22656d7d17fe2accf13b2077cd73b53&q=${input}`)
//         .then(res => res.json())
//         .then(data => datasFn(data.results))
//         }
// const datasFn = (datas) => {
//     datas.forEach(data => {
//         arr.push(data.title)
//     arr2=[]
//     searchResult.innerHTML='';
//     });
//     dataCompare(arr)

// }
// let htmlTwo = ''
// function dataCompare(arr) {
//     arr.forEach(arrData => {
//         if (!search.value == '') {
//             if(typeof(arrData)!=='object'){
//             if (arrData.toLowerCase().startsWith(search.value.toLowerCase())) {
//                 arr2.push(arrData)
//             }
//             else {
//                 return
//             }
//             renderData2(arr2)
//         }
//         }
//     })
// }
// function renderData2(data) {
//     data.forEach(dataData => {
//         htmlTwo = `<p>${dataData}</p>`
//         searchResult.insertAdjacentHTML('beforeend', htmlTwo)
//     })
// }

// function overlayShow(){
//     searchResult.classList.remove('hidden')
// }
// function overlayHidden(){
//     searchResult.classList.add('hidden')
// }





// / Fetch search Bar result --  using another API
const search = document.querySelector('#search')
const searchResult = document.querySelector('.search-result')
let arr = []
let arr2 = []
function inputFn(input) {
  fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(data => datasFn(data.entries))
}
const datasFn = (datas) => {
  datas.forEach(data => {
    arr.push(data.API)
    arr2 = []
    searchResult.innerHTML = '';
  });
  dataCompare(arr)
}
let htmlTwo = ''
function dataCompare(arr) {
  arr.forEach(arrData => {
    if (!search.value == '') {
      console.log('function clalled')
      if (arrData.toLowerCase().startsWith(search.value)) {
        arr2.push(arrData)
      }
      else {
        return
      }
      renderData2(arr2)
    }
  })
}
function renderData2(data) {
  data.forEach(dataData => {
    htmlTwo = `<p>${dataData}</p>`
    searchResult.insertAdjacentHTML('beforeend', htmlTwo)
  })
}

function overlayShow() {
  searchResult.classList.remove('hidden')
}
function overlayHidden() {
  searchResult.classList.add('hidden')
}



