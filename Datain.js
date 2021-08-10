let country = "https://covid19.mathdro.id/api/confirmed";
let opsi = {
    method: 'GET'
}

let dataglobal = [];
let tablecount = "<tr><th>Negara</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";

fetch(country, opsi)
.then(response => response.json())
.then(data => {
    console.log(data)     
    data.forEach(elementglobal => {
       dataglobal.push(elementglobal)
        tablecount += '<tr>'
        tablecount += '<td>'+ (elementglobal.countryRegion).toUpperCase() +'</td>'
        tablecount += '<td>'+ (elementglobal.confirmed).toLocaleString("id-ID") +'</td>'
        tablecount += '<td>'+ (elementglobal.recovered) +'</td>'
        tablecount += '<td>'+ (elementglobal.deaths).toLocaleString("id-ID") +'</td>'
        tablecount += '</tr>'
    }); 
    document.getElementById("dataglobal").innerHTML = tablecount

})
.catch(err => {console.log(err)});

let search = document.getElementById("searchGlobal");
let countries = document.getElementById("dataCountry").addEventListener("click", () => searchdata(keyword.value));
const searchdata = async (countries) => {
    let response = await fetch (`https://covid19.mathdro.id/api/countries/${countries}`,
        {
           method: "GET", 
        }
    );

    response = await response.json();
    console.log(response);

    if(response.error) {
        let Data = `<p> Unknown 404 <br> 
            <img src="undraw_not_found_60pq.png">
            </p>`
        document.getElementById("dataglobal").innerHTML = Data
    }
    
    let tableglobal = `<tr><th>Negara</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>
    <tr>
        <td>${countries.toUpperCase()}</td>
        <td>${(response.confirmed.value).toLocaleString("id-ID")}</td>
        <td>${(response.recovered.value).toLocaleString("id-ID")}</td>
        <td>${(response.deaths.value).toLocaleString("id-ID")}</td>
        </tr>`
    document.getElementById("dataglobal").innerHTML = tableglobal
    
}



