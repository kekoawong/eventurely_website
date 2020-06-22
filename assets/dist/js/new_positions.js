function add_position_element(position, location, description) {
    let position_element = document.createElement('tr');
    position_element.className = "table-light";
    position_element.innerHTML = `<th scope="row">${position}</th><td>${location}</td><td>${description}</td>`;
    document.getElementById('positions').appendChild(position_element);
}

window.onload = setTimeout(function () {

        // load data if it session storage item exists
        if (sessionStorage.getItem("data")){
            let data = JSON.parse(sessionStorage.getItem("data"));
            let positions = data[0];
            for (let i = 0; i < positions.length; i++) {
                let p = positions[i];
                add_position_element(p[0], p[1], p[2]);
            }
        }

        // fetch it if it does not exist
        
    }, 1000);