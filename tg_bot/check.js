let tg = window.Telegram.WebApp;
tg.expand()

let form = document.getElementById('form')
const check = (e) => {
  e.preventDefault();
  let fields = document.querySelectorAll('input');
  let values = {};
  fields.forEach(field => {
    let {name, value} = field;
    values[name] = value
    if (values['density'].replace(/,/, ".") > 970 || values['density'].replace(/,/, ".") < 800) {
      alert("Введите значение от 800 до 960 кг/м3");
  }
  // console.log(Object.values(values)[0])
  // console.log(values['density']);
  });
  tg.sendData(JSON.stringify(values));
  tg.close()
}


// let form = document.getElementById('form')
//   function check(event){
//     event.preventDefault();
//       if (document.forms.density.value > "970") {
//         alert ('Wrong!');
//         document.mailform.density.focus();
//   }
// form.addEventListener('submit', check);
// }




// function check(){
//   if (document.form.density.value > "970") {
//     alert ('Wrong!');
//     console.log(document.form.density.value)
//     document.mailform.density.focus();
//   }
// }
