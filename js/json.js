let Work = [];
function onclick_submit() {
        //Puts info into array
        let Subject = {
            Subject: document.getElementById('Subject').value,
            Importance: document.getElementById('Importance').value,
            Due: document.getElementById('Due').value
        }
    
    //Clears previouse info
    document.forms[0].reset();

    //Pushes Info
    Work.push(Subject);

    //Tells console info is added
    console.warn('added', { Work });

    //Saves to localStorage
        localStorage.setItem('MyWorkList', JSON.stringify(Work));
    
    //Finds table
    var table = document.getElementById("myTable");

    //Creates empty <tr>
    var row = table.insertRow(1);

    //Inserts new cells 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    //Adds info to the cells
    for (let i = 0; i <= Work.length - 1; i++) {

        cell1.innerHTML = Work[i].Subject;
        cell2.innerHTML = Work[i].Importance;
        cell3.innerHTML = Work[i].Due;

    }
}
let Game = [];
function onclick_submit2() {

    //Puts info into array
    let Data = {
        Username: document.getElementById('Username').value,
        Application: document.getElementById('Application').value,
        PlayMins: document.getElementById('PlayMins').value,
        Score: document.getElementById('Score').value,
        Level: document.getElementById('Level').value
    }

    //Clears previouse info
    document.forms[0].reset();

    //Pushes Info
    Game.push(Data);

    //Tells console info is added
    console.warn('added', { Game });

    //Saves to localStorage
    localStorage.setItem('Default', JSON.stringify(Game));
}