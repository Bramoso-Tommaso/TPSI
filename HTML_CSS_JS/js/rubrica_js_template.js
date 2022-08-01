function create_div_studente(nome, cognome) {
    let div_studente = document.createElement("div");
    div_studente.classList.add("section");
    div_studente.id = cognome + nome;

    return div_studente;
}

function add_student_name(nome, cognome) {
    let span_studente = document.createElement("span");
    span_studente.classList.add("student");
    span_studente.classList.add("grassetto");
    span_studente.innerText = nome + " " + cognome;
    
    return span_studente;
}

function add_input_materia(nome, cognome) {
    let materia_studente = document.createElement("input");
    materia_studente.type = "text";
    materia_studente.id = "input_materia_" + cognome + nome;
    materia_studente.placeholder = "Materia";

    return materia_studente;
}

function add_input_voto(nome, cognome) {
    let voto_studente = document.createElement("input");
    voto_studente.type = "number";
    voto_studente.min = 2;
    voto_studente.max = 10;
    voto_studente.step = 0.5;
    voto_studente.id = "input_voto_" + cognome + nome;
    voto_studente.placeholder = "Voto";

    return voto_studente;
}

function add_icon_studente() {
    let span_icon_studente = document.createElement("span");
    span_icon_studente.classList.add("material-icons");
    span_icon_studente.classList.add("icona-button");
    span_icon_studente.classList.add("icona-adjust");
    span_icon_studente.innerText = "add";

    return span_icon_studente;
}

function add_icon_average() {
    let span_icon_average = document.createElement("span");
    span_icon_average.classList.add("material-icons");
    span_icon_average.classList.add("icona-button");
    span_icon_average.classList.add("icona-adjust");
    span_icon_average.innerText = "timeline";

    return span_icon_average;
}


function add_student() {
    //leggo nome e cognome dello studente
    let cognome = document.getElementById("cognome_studente").value;
    let nome = document.getElementById("nome_studente").value;

    if (cognome.length == 0 || nome.length == 0) {
        alert("Per cortesia inserire Nome e Cognome!!!");
        return;
    }

    //creo la sezione per il nuovo studente
    let div_studente = create_div_studente(nome, cognome);
    let span_studente = add_student_name(nome, cognome);
    let materia_studente = add_input_materia(nome, cognome);
    let voto_studente = add_input_voto(nome, cognome);
    let span_icon_studente = add_icon_studente();
    let span_icon_average = add_icon_average();

    span_icon_studente.onclick = function() { add_materia(div_studente.id);};
    span_icon_average.onclick = function() { update_average(div_studente.id);};
    
    div_studente.append(span_studente);
    div_studente.append(materia_studente);
    div_studente.append(voto_studente);
    div_studente.append(span_icon_studente);
    div_studente.append(span_icon_average);
    document.body.append(div_studente);

    //cancello i campi per un nuovo inserimento
    clean_field("cognome_studente");
    clean_field("nome_studente");
}

function clean_field(id) {
    let el = document.getElementById(id);
    el.value = "";
}

function create_table_materie(studente) {
    let table_materie = document.createElement("table");
    table_materie.id = "table_" + studente;
    let tr_head  = document.createElement("tr");
    
    let th_materia = document.createElement("th");
    let th_voto = document.createElement("th");
    th_materia.innerText = "Materia";
    th_voto.innerText = "Voto";
    tr_head.append(th_materia);
    tr_head.append(th_voto);
    table_materie.append(tr_head);

    return table_materie;
}

function add_materia_voto(studente, materia, voto) {
    let tr_materia = document.createElement("tr");
    let td_materia = document.createElement("td");
    let td_voto = document.createElement("td");

    td_materia.innerText = materia;
    td_voto.innerText = voto;
    td_voto.classList.add("td_voto_" + studente);

    tr_materia.append(td_materia);
    tr_materia.append(td_voto);

    return tr_materia;
}

function add_materia(studente) {
    //leggo materia e voto
    let materia = document.getElementById("input_materia_" + studente).value;
    let voto = document.getElementById("input_voto_" + studente).value;

    if (materia.length == 0 || voto.length == 0) {
        alert("Per cortesia inserire Materia e Voto!!!");
        return;
    }

    //verifico se la tabella è già presente
    let table_materie = document.getElementById("table_" + studente);

    //se non presente creo la tabella con le materie
    if (!table_materie) {
        table_materie = create_table_materie(studente); 
        document.body.append(table_materie);
    }

    //verifico se le linee della media sono presenti e le rimuovo
    let average_liens = table_materie.getElementsByClassName("average_" + studente);
    for(let i = average_liens.length; i > 0 ; i--) 
        average_liens[i - 1].remove();
    
    //aggiungo una nuova linea per una materia
    let tr_materia  = add_materia_voto(studente, materia, voto);
    table_materie.append(tr_materia);

    //clean input fileds
    clean_field("input_materia_" + studente);
    clean_field("input_voto_" + studente);
}

function calc_average(voti) {
    let media = 0;

    console.log(voti.length);

    for(let i = 0; i < voti.length; i++)
        media += Number(voti[i].innerText);
    
    return Math.round(media / voti.length * 100) / 100  ;
}

function update_average(studente) {
    //get the table for the student
    let table_materie = document.getElementById("table_" + studente);
    
    if (!table_materie) {
        alert("Non ci sono voti presenti!!!");
        return;
    }
    
    //calculate average for table
    let voti = table_materie.getElementsByClassName("td_voto_" + studente);
    let average = calc_average(voti);

    //add average lines

    let empty_tr = document.createElement("tr");
    let empty_td = document.createElement("td");
    empty_tr.classList.add("average_" + studente);
    empty_tr.append(empty_td);
    empty_tr.append(empty_td);
    table_materie.append(empty_tr);

    let average_tr = document.createElement("tr");
    let average_td = document.createElement("td");
    let vote_td = document.createElement("td");
    average_tr.classList.add("average_" + studente);
    average_td.classList.add("grassetto");
    average_td.innerText = "Media";
    vote_td.classList.add("grassetto");
    vote_td.innerHTML = "<mark>" + average + "</mark>";

    average_tr.append(average_td);
    average_tr.append(vote_td);

    table_materie.append(empty_tr);
    table_materie.append(average_tr);
}