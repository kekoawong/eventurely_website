/*
function get_data() {
    if (sessionStorage.getItem("data") === null) {
        fetch('https://docs.google.com/spreadsheets/d/1Zau7lllYN6Rvu1V_Ge0Hci4SPqlOvIT-Evi17tOT-SM/edit#gid=0')
            .then(function (response) {
                return response.text();
            }).then(function (text) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(text, "text/html");
            let table = doc.getElementById("0-grid-table-container").querySelector("tbody");
            let positions = [];
            let updates = [];

            // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
            for (let i = 3; i < 30; i++) {
                // GET THE CELLS COLLECTION OF THE CURRENT ROW.
                let table_rows = table.rows.item(i);
                let objCells = table_rows.querySelectorAll("td");

                let position = [objCells[0].innerText, objCells[1].innerText, objCells[2].innerText];
                let update = [objCells[3].innerText, objCells[4].innerText, objCells[5].innerText];

                // append to positions if name exists
                if (position[0]) {
                    positions.push(position);
                }
                // append to updates if name exists
                if (update[0]) {
                    updates.push(update);
                }
            }
            // put to session storage
            let data = [positions, updates];
            sessionStorage.setItem("data", JSON.stringify(data));
        });
    }
}
*/

function get_data(number) {
    return new Promise((resolve, reject) => {
        if (number > 2) {
            resolve('success');
        }
        else {
            reject('nope');
        }
    })
}

get_data(234);