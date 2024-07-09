class Coffee {

    static async getAllCoffee(a) {
        try {
            let response = await fetch('https://api.sampleapis.com/coffee/hot');
            let coffeeJson = await response.json();
            console.log(coffeeJson);
            this.#forElem(coffeeJson, a);
        } catch (error) {
            console.error('Error fetching coffee data:', error);
            return;
        }
    }

    static #forElem(coffee, a) {
        const cont = document.querySelector('.string2');
        if (a > coffee.length) alert("Данные закончились");
        for (let i = a == 5 ? 0 : a - 5; i < a; i++) {
            let div = document.createElement('div');
            let img = document.createElement('img');
            let span = document.createElement('span');
            let p = document.createElement('p');
            img.src = coffee[i].image;
            div.append(img);
            div.id = `coffee${i}`;
            div.className = "coffeeBox";

            span.innerHTML = `title: ${coffee[i].title}`;
            div.append(span);

      

            div.onmouseenter = (e) => {
                Coffee.Mouse(e, coffee); 
            };

            cont.append(div);

            setTimeout(() => {
                div.classList.add('loaded');
            }, i * 100);
        }
    }

    static Mouse(e, coffee) {
        let d = /\d+/;
        let coffeeOne = coffee[e.currentTarget.id.match(d)[0]]; 
let clientWidth = document.body.clientWidth;

if(clientWidth<523) {
    e.currentTarget.style.width = '360px'; 

    let nm = document.querySelector(`#${e.currentTarget.id} span`);
    nm.style.marginLeft = '-190px';

    let pText = document.createElement('p');
    pText.id = coffeeOne.id;
    pText.innerHTML = coffeeOne.description;
    document.querySelector(`#${e.currentTarget.id}`).appendChild(pText);

    let pIngridients = document.createElement('line')

    pIngridients.innerHTML = coffeeOne.ingredients.join(' ');
    document.querySelector(`#${e.currentTarget.id}`).appendChild(pIngridients);

    
    e.currentTarget.onmouseleave = (el) => {
        el.target.style.width = '152px';
        pText.remove();
        pIngridients.remove()
        document.querySelector(`#${el.target.id} span`).style.marginLeft = '0px';
    };
}else{
    e.currentTarget.style.width = '396px'; 

    let nm = document.querySelector(`#${e.currentTarget.id} span`);
    nm.style.marginLeft = '-190px';

    let pText = document.createElement('p');
    pText.id = coffeeOne.id;
    pText.innerHTML = coffeeOne.description;
    document.querySelector(`#${e.currentTarget.id}`).appendChild(pText);

    let pIngridients = document.createElement('line')

    pIngridients.innerHTML = coffeeOne.ingredients.join(' ');
    document.querySelector(`#${e.currentTarget.id}`).appendChild(pIngridients);

    
    e.currentTarget.onmouseleave = (el) => {
        el.target.style.width = '204px';
        pText.remove();
        pIngridients.remove()
        document.querySelector(`#${el.target.id} span`).style.marginLeft = '0px';
    };
}

    }
}

let count = 0;
let btn = document.querySelector('.button');
btn.addEventListener('click', () => {
    Coffee.getAllCoffee(count += 5);
});
