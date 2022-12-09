document.addEventListener('DOMContentLoaded', () => {

    //Kártyáknak a lehetőségei
    const cardArray = [
        {
            name: 'ajandek',
            img: 'karacsonyikepek/ajandek.png'
        },
        {
            name: 'ajandek',
            img: 'karacsonyikepek/ajandek.png'
        },
        {
            name: 'ho',
            img: 'karacsonyikepek/ho.png'
        },
        {
            name: 'ho',
            img: 'karacsonyikepek/ho.png'
        },
        {
            name: 'karacsonyfa',
            img: 'karacsonyikepek/karacsonyfa.png'
        },
        {
            name: 'karacsonyfa',
            img: 'karacsonyikepek/karacsonyfa.png'
        },
        {
            name: 'mikulas',
            img: 'karacsonyikepek/mikulas.png'
        },
        {
            name: 'mikulas',
            img: 'karacsonyikepek/mikulas.png'
        },
        {
            name: 'sapka',
            img: 'karacsonyikepekek/sapka.png'
        },
        {
            name: 'sapka',
            img: 'karacsonyikepek/sapka.png'
        },
        {
            name: 'szarvas',
            img: 'karacsonyikepek/szarvas.png'
        },
        {
            name: 'szarvas',
            img: 'karacsonyikepek/szarvas.png'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#eredmeny')
    var karytavalasztas = []
    var kartyparok = []

//Pályakészítés
    function Palyakeszul() {
        for (let i = 0; i < cardArray.length; i++)
        var kartya = document.createElement('img')
        kartya.setAttribute('src', 'karacsonyikepek/logo.png')
        kartya.setAttribute('data-id', i)
        kartya.addEventListener('click', kartyaforditas)
        grid.appendChild(kartya)
    }
})

//Párok nézése
function keresspart() {
    var kartya = document.querySelectorAll('img')
    const elsoopcio = karytavalasztasId[0]
    const masodikopcio = karytavalasztasId[1]
    if (karytavalasztas[0] === karytavalasztas[1]) {
        alert('Találtál egy párt! :D')
        kartya[elsoopcio].setAttribute('src', 'karacsonyikepek/megvan.png')
        kartya[masodikopcio].setAttribute('src', 'karacsonyikepek/megvan.png')
        kartyparok.push(karytavalasztas)
    } else {
        cards[elsoopcio].setAttribute('src', 'karacsonyikepek/logo.png')
        cards[masodikopcio].setAttribute('src', 'karacsonyikepek/logo.png')
        alert('Próbálkozz újra! :D')
    }
    karytavalasztas = []
    karytavalasztasId = []
    resultDisplay.textContent = kartyparok.length
    if (kartyparok.length === cardArray.length/2) {
        resultDisplay.textContent = "Gratulálok, minden párt megtaláltál!"
    }
}

//Kártya fordítása
function kartyaforditas() {
    var cardId = this.getAttribute('data-id')
    karytavalasztas.push(cardArray[cardId].name)
    karytavalasztasId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (karytavalasztas.length === 2) {
        setTimeout(keresspart, 500) 
    }
}

//https://www.youtube.com/watch?v=tjyDOHzKN0w