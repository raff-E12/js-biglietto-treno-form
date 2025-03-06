//FASI DEL PROGETTO:
//Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 30% per i maggiorenni
// - va applicato uno sconto del 40% per gli over 65.

//Nominazione delle seguenti variabili
let Inp_name_user = document.getElementById('input-name');
let Inp_km_user = document.getElementById('input-km');
let Inp_select_gender = document.getElementById('input-select-gender');
const Inp_btn_gen = document.getElementById('button-sub');
const Inp_btn_reset = document.getElementById('reset-btn');
const Form_Inp_sc = document.getElementById('form-inp');

//Creazione sul relativo procedimento di calcolo del biglietto

function HandleClickForm(e){
    e.preventDefault();
    let base_km_bg = 0.21;
    let value_name = Inp_name_user.value;
    let value_km = Number(Inp_km_user.value);
    let value_select = Inp_select_gender.value;
    let ticket_set_number = Math.ceil(Math.random() * 20);
    let calc_km_op = 0;
    let calc_perc = 0;
    if (value_name !== '' && value_km !== 0 && value_select !== '') {
        if (value_select === 'Minorenne') {
            calc_km_op = value_km * base_km_bg;
            calc_perc = (calc_km_op * 20) / 100;
            calc_perc.toFixed(2);
        } else if(value_select === 'Maggiorenne'){
            calc_km_op = value_km * base_km_bg;
            calc_perc = (calc_km_op * 30) / 100;
            calc_perc.toFixed(2);
        } else if (value_select === 'Adulto'){
            calc_km_op = value_km * base_km_bg;
            calc_perc = (calc_km_op * 40) / 100;
            calc_perc.toFixed(2);
        }
        HandleTicketGen(value_name, value_select, calc_perc, ticket_set_number);
       
    } else {
        window.alert('Gentile utente deve inserire i dati corrispondenti nei rispettivi campi, quindi riprova gentilmente.');
    }
}

//Implemantazione e interzione degli elementi nei respettivi nodi del DOM

function HandleTicketGen(name, age, price, set){
    const text_end = document.querySelector('.text-bottom');
    const ticket_sc = document.querySelector('.ticket-sc');
    let text_name = document.getElementById('name-txt');
    let text_age = document.getElementById('age-txt');
    let text_type_ticket = document.getElementById('type-txt');
    let text_number_seat = document.getElementById('number-train-seat-txt');
    let text_price = document.getElementById('price-txt');

  if (ticket_sc.classList.contains('none')) {
    ticket_sc.classList.remove('none');
    text_end.classList.remove('none');
  }
    if (age === 'Minorenne') {
        text_age.innerHTML = `Età:<b>${age}</b>`;
        text_name.innerHTML = `Nome:<b>${name}</b>`;
        text_price.innerHTML = `Prezzo:<b>€${price + '0'}</b>`;
        text_type_ticket.innerHTML = `Tipo di Biglietto:<b>JuniorGo</b>`;
        text_number_seat.innerHTML = `<b>${set}</b><i class="fa-solid fa-couch"></i>`;
    } else if(age === 'Maggiorenne'){
        text_age.innerHTML = `Età:<b>${age}</b>`;
        text_name.innerHTML = `Nome:<b>${name}</b>`;
        text_price.innerHTML = `Prezzo:<b>€${price + '0'}</b>`;
        text_type_ticket.innerHTML = `Tipo di Biglietto:<b>TeenGo</b>`;
        text_number_seat.innerHTML = `<b>${set}</b><i class="fa-solid fa-couch"></i>`;
    } else if(age === 'Adulto'){
        text_age.innerHTML = `Età <b>${age}</b>`;
        text_name.innerHTML = `Nome <b>${name}</b>`;
        text_price.innerHTML = `Prezzo: <b>€${price + '0'}</b>`;
        text_type_ticket.innerHTML = `Tipo di Biglietto <b>TrenoPass</b>`;
        text_number_seat.innerHTML = `<b>${set}</b><i class="fa-solid fa-couch"></i>`;
    }
}

//Creazione di funzione del reset in questione

function HandleClickReset(e){
    e.preventDefault();
    Form_Inp_sc.reset();
}

//Collegazione delle seguenti funzioni agli eventi
Form_Inp_sc.addEventListener('submit', (e)=>{ e.preventDefault()});
Inp_btn_gen.addEventListener('click', HandleClickForm);
Inp_btn_reset.addEventListener('click', HandleClickReset);