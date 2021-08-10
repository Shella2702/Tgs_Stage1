// get data countries indonesia
const dataIndonesia = fetch(
    "https://covid19.mathdro.id/api/countries/Indonesia"
  )
    .then((response) => response.json())
    .then(
      (data) =>
        // menampilkan data dalam DOM
        (document.getElementById("konfirmasi-indo").innerHTML =
         `Konfirmasi: ${data.confirmed.value}`) +
        (document.getElementById("sembuh-indo").innerHTML = 
        `Sembuh : ${data.recovered.value}`) +
        (document.getElementById("meninggal-indo").innerHTML = 
        `Meninggal: ${data.deaths.value}`)
    );
  
    const dataGlobal = fetch('https://covid19.mathdro.id/api')
    .then((response) => response.json())
    .then ((data)=>
      (document.getElementById("konfirmasi-dunia").innerHTML = 
      `Konfirmasi: ${data.confirmed.value}`) +
      (document.getElementById("sembuh-dunia").innerHTML = 
      `Sembuh: ${data.recovered.value}`) +
      (document.getElementById("meninggal-dunia").innerHTML = 
      `Meninggal: ${data.deaths.value}`)
    );



  // untuk function searching
  const searchCountry = () => {
    // untuk mengambil data dari input
    search = document.querySelector(".input-search").value;
    console.log("tes", search);
  
    document.querySelector(".display-country").innerHTML = search;
  
    // ambil data menggunakan template literal string
    fetch(`https://covid19.mathdro.id/api/countries/${search}`)
      .then((response) => response.json())
      .then(
        (data) =>
          // untuk menampilkan data sesuai hasil searching
          (document.querySelector(".display-countrt-confirmed").innerHTML =
            data.confirmed.value)
            (document.querySelector(".sembuh-indonesia").innerHTML = 
          data.recovered.value)
          (document.querySelector(".meninggal-indonesia").innerHTML = 
          data.deaths.value)
      );
  };
  