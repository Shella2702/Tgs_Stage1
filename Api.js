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

function table_prov(){
    var input, filter, table, tr,td, i, txtValue;
    input = document.getElementById("form-control mr-sm-2");
    filter = input.value.toUpperCase();
    table = document.getElementById(dataProvinsi);
    tr = table.getElementsByTagName("td")[0];
    if (td){
        txtValue= td.textContent || td.innerTxt;
        if(txtValue.toUpperCase().indexOf(filter)>-1){
            tr[i].style.display = "";
        } else {
            tr [i].style.display = "None"
        }
    }
}
