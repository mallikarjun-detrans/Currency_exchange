// / Fetch search Bar result --  using another API
const search = document.querySelector('#search')
const searchResult = document.querySelector('.search-result')
let arr = []
let arr2 = []
function inputFn() {
    fetch('https://api.publicapis.org/entries')
        .then(res => res.json())
        .then(data => datasFn(data.entries))
}
const datasFn = (datas) => {
    datas.forEach(data => {
        arr.push(data.API)
    arr2=[]
    searchResult.innerHTML='';
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

function overlayShow(){
    searchResult.classList.remove('hidden')
}
function overlayHidden(){
    searchResult.classList.add('hidden')
}



// i lsot --- requests -- for this search bar code


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