
let uudis1 = {
    pealkiri: 'Tähtis uudis',
    autor: 'Jaak Sarapuu',
    sisu0: 'Vestibulum eu ipsum vel nisl luctus cursus Nulla vel lectus mattis, viverra quam non, venenatis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eleifend, nulla sit amet pharetra maximus, erat sapien maximus nisl, porttitor condimentum sapien tellus eget quam.',
    pilt: './assets/telefon1.jpg'
}

let uudis2 = {
    pealkiri: 'Keskmine uudis',
    autor: 'Tiina Vaher',
    sisu0: 'Vestibulum eu ipsum vel nisl luctus cursus Nulla vel lectus mattis, viverra quam non, venenatis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eleifend, nulla sit amet pharetra maximus, erat sapien maximus nisl, porttitor condimentum sapien tellus eget quam.',
    pilt: './assets/telefon2.jpg'
}

let uudis3 = {
    pealkiri: 'Vähetähtis uudis',
    autor: 'Vello Sepp',
    sisu0: 'Vestibulum eu ipsum vel nisl luctus cursus Nulla vel lectus mattis, viverra quam non, venenatis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eleifend, nulla sit amet pharetra maximus, erat sapien maximus nisl, porttitor condimentum sapien tellus eget quam.',
    pilt: './assets/telefon3.jpg'
}

let uudised = [uudis1, uudis2, uudis3];

let sisuHTMLElement = document.getElementById('sisu');

for (let i = 0; i < uudised.length; i++) {
    sisuHTMLElement.innerHTML += '<div><div>' + uudised[i].pealkiri + '</div><img src="' + uudised[i].pilt +'" width="50"></div>';
}
