

let idName = document.getElementById('Product-item')




const xmls = new XMLHttpRequest();

xmls.open('get' ,'https://fakestoreapi.com/products');


xmls.onload = function(){
   if(this.status == 200 && this.readyState ==4){
    let Far = JSON.parse(this.responseText)

    for(let i =0 ; i < Far.length ; i++){
        let Div = document.createElement('div')
        let P = document.createElement('p')
        let img = document.createElement('img')
        let span = document.createElement('span')
        let count = document .createElement('span')
        img.setAttribute('src',`${Far[i].image}`)
        P.innerText = Far[i].title;
        span.innerText = Far[i].price;
        count.innerText = Far[i].category;

        Div.appendChild(img)
        Div.appendChild(P)
        Div.appendChild(span)
        Div.appendChild(count)
        Div.classList.add('product')
        idName.append(Div)

    }
   }
}

xmls.send();