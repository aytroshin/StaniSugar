let tg = window.Telegram.WebApp;
tg.expand()
let form = document.getElementById('form');
function getValues(event){
  event.preventDefault();
  let fields = document.querySelectorAll('input');
  let values = {};
  fields.forEach(field => {
    let {name, value} = field;

    values[name] = value;
});
  if (values['Density'].replace(/,/, ".") > 970 || values['Density'].replace(/,/, ".") < 800) {
    alert("Введите значение плотности нефти от 800,0 до 960,0 кг/м3");
    let den = document.getElementById("Density");
    den.focus();
    return;
  }
  if (values['Viscousity'].replace(/,/, ".") > 4000 || values['Viscousity'].replace(/,/, ".") < 1) {
    alert("Введите значение вязкости от 1,0 до 4000,0 мм2/с");
    let vis = document.getElementById("Viscousity");
    vis.focus();
    return;
  }
  if (values['Asphaltene'].replace(/,/, ".") > 10 || values['Asphaltene'].replace(/,/, ".") < 0) {
    alert("Введите содержание асфальтенов от 0,1 до 10,0 масс. %");
    let asph = document.getElementById("Asphaltene");
    asph.focus();
    return;
  }
  if (values['Gums'].replace(/,/, ".") > 40 || values['Gums'].replace(/,/, ".") < 1)  {
    alert("Введите содержание смол от 1,0 до 40,0 масс. %");
    let gum = document.getElementById("Gums");
    gum.focus();
    return;
  }
  if (values['Parafins'].replace(/,/, ".") > 10 || values['Parafins'].replace(/,/, ".") < 0)  {
    alert("Введите содержание парафинов от 0 до 10,0 масс. %");
    let prf = document.getElementById("Parafins");
    prf.focus();
    return;
  }
  if (values['Water_density'].replace(/,/, ".") > 1300 || values['Water_density'].replace(/,/, ".") < 1000)  {
    alert("Введите значение плотности воды от 1000,0 до 1250,0 кг/м3");
    let w_den = document.getElementById("Water_density");
    w_den.focus();
    return;
  }
  if (values['Water_pH'].replace(/,/, ".") > 12 || values['Water_pH'].replace(/,/, ".") < 3)  {
    alert("Введите значение pH воды от 1000,0 до 1300,0 ед.pH");
    let ph = document.getElementById("Water_pH");
    ph.focus();
    return;
  }
  if (values['Start_water'].replace(/,/, ".") > 80 || values['Start_water'].replace(/,/, ".") < 5)  {
    alert("Введите начальное одержание воды от 5,0 до 80,0 % об.");
    let str_w = document.getElementById("Start_water");
    str_w.focus();
    return;
  }
  if (values['Start_water'].replace(/,/, ".") > 30 || values['Start_water'].replace(/,/, ".") < 0.5)  {
    alert("Введите конечное одержание воды от 0,5 до 30,0 % об.");
    let fin_w = document.getElementById("Start_water");
    fin_w.focus();
    return;
  }
  tg.sendData(JSON.stringify(values));
  tg.close()
 }
 form.addEventListener('submit', getValues);
