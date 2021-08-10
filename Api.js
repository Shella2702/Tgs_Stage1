function getDataProvinsi() {

  let dataProvinsi = "<tr><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";
  fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  .then(response => response.json())
  .then(data => {
       console.log(data)
       data.data.forEach(function(item) {
            dataProvinsi += '<tr>'
           dataProvinsi += '<td>'+ item.provinsi + '</td>'
           dataProvinsi += '<td>'+ item.kasusPosi + '</td>'
           dataProvinsi += '<td>'+ item.kasusSemb + '</td>'
           dataProvinsi += '<td>'+ item.kasusMeni + '</td>'
           dataProvinsi += '</tr>'
        })

        document.getElementById("dataindo").innerHTML = dataProvinsi
    })
    .catch(err => {
        console.log(err)
    });
}
document.addEventListener("DOMContentLoaded", function() {
getDataProvinsi();
})

//===

