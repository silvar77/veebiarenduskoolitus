let kasutajaNimi = '';
while (kasutajaNimi == '' || kasutajaNimi == null) {
    kasutajaNimi = prompt('Sisesta kasutajanimi');
}

let nimi = kasutajaNimi;

if 
(nimi.length < 6) {
    komplimendiElement = 'Küll sul on lühike nimi';
}
    
else {
    komplimendiElement = 'Küll sul on pikk nimi'; 
}

document.getElementById('nimepikkus').innerHTML = komplimendiElement;



  






