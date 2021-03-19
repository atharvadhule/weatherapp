const apiKey = "984187adff3a2f9c195fc9cf17a71a19";
const sub = () => {
  let unit = document.getElementById("unit");
  let cityVal = document.getElementById("val").value;
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apiKey}&units=metric`,
    true
  );
  xhr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("alert").style.display = "none";

      let data = JSON.parse(this.responseText);
      let dataObj = {
        des: data.weather[0].main,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        tempmin: data.main.temp_min,
        tempmax: data.main.temp_max,
        date: data.dt,
        name: data.name,
      };
      document.getElementById("main-con").innerHTML = `
      <div id="cityinfo">
          <h1 style="font-size:40px;color:white ;">${dataObj.name}</h1>
          <h3>${dataObj.temp}C</h3>
      </div>
      <div id="icon">
           <img src="http://openweathermap.org/img/wn/${dataObj.icon}@2x.png" alt="">
      </div>
      <div id="des">
          <p>${dataObj.des}</p>
      </div>`;

    document.getElementById("temp").innerHTML = `
    <div id="max-temp">
      <h3>Max-Tem</h3>
      <h5>${dataObj.tempmax}C</h5>
    </div>
    <div id="vr"></div>
    <div id="min-temp">
      <h3>Max-Tem</h3>
      <h5>${dataObj.tempmin}C</h5>
    </div>`;
    }
    else {
      document.getElementById("alert").style.display = "block";
      document.getElementById("alert").innerHTML = `
      <h5 style="color:orange;">Error,City Not Found</h5>`;
    }
  };

  xhr.send();
};
window.onload = () => {
  async function harry() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`
    );
    const users = await response.json();

    return users;
  }
  let a = harry();
  a.then((data) => {
    let dataObj = {
      des: data.weather[0].main,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      tempmin: data.main.temp_min,
      tempmax: data.main.temp_max,
      date: data.dt,
      name: data.name,
    };
    document.getElementById("main-con").innerHTML = `
  
    <div id="cityinfo">
    <h1 style="font-size:40px;color:white ;">${dataObj.name}</h1>
    <h3>${dataObj.temp}C</h3>
    </div>
    <div id="icon">
        <img src="http://openweathermap.org/img/wn/${dataObj.icon}@2x.png" alt="">
    </div>
    <div id="des">
        <p>${dataObj.des}</p>
    </div>
    `;
    document.getElementById("temp").innerHTML = `
    <div id="max-temp">
    <h3>Max-Tem</h3>
    <h4>${dataObj.tempmax}C</h4>
</div>
<div id="vr"></div>
<div id="min-temp">
    <h3>Max-Tem</h3>
    <h4>${dataObj.tempmin}C</h4>
</div>
    `;
  });
};
