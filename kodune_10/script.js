
const tegevusteListElement = document.getElementById('tegevuste-list');

const tyhiListElement = document.getElementById('tyhi-list');

const inputElement = document.getElementById('tegevuse-sisestus')

const tegevus = [];

function renderList() {
    if (tegevus.length == 0) {
        tegevusteListElement.style.display = 'none';
        tyhiListElement.style.display = 'flex';
    }
    else {
        tyhiListElement.style.display = 'none';
        tegevusteListElement.style.display = 'flex'
    }

    tegevusteListElement.innerHTML = '';

    for (let i=0; i<tegevus.length; i++) {
        tegevusteListElement.innerHTML += `
            <div class="tegevus">
                <div class="tegevuse-pealis">${tegevus[i]}</div>
                <div class="tegevuse-kustutamine">x</div> 
            </div>
        `;
    }
}

inputElement.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
       if (inputElement.value != '') {
            tegevus.push(inputElement.value);
            inputElement.value = '';
            renderList()
        }
    }    
} );

renderList();





