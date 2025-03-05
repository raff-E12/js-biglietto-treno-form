//FASI DEL PROGETTO:
//Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
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
    let calc_km_op = 0;
    let calc_perc = 0;
    if (value_name !== '' && value_km !== 0 && value_select !== '') {
        if (value_select === 'Minorenne') {
            calc_km_op = value_km * base_km_bg;
            calc_perc = (calc_km_op * 20) / 100;
            calc_perc.toFixed(2);
        } else if(value_select === 'Maggiorenne'){
            calc_km_op = value_km * base_km_bg;
            calc_perc = (calc_km_op * 20) / 100;
            calc_perc.toFixed(2);
        } else if (value_select === 'Adulto'){
            calc_km_op = value_km * base_km_bg;
            calc_perc = (calc_km_op * 40) / 100;
            calc_perc.toFixed(2);
        }
        console.log(`Biglietto è di ${value_name} è ${value_select} il suo costo principale è di $${calc_perc}`);
    } else {
        window.alert('Valori negli input corrispondenti');
    }
}

//Creazione di funzione del reset in questione

function HandleClickReset(e){
    e.preventDefault();
    Form_Inp_sc.reset();
}

Form_Inp_sc.addEventListener('submit', (e)=>{ e.preventDefault()});
Inp_btn_gen.addEventListener('click', HandleClickForm);
Inp_btn_reset.addEventListener('click', HandleClickReset);