const Api_Key= '80d3011ea7e189b6c1622d8680c1aeb7' ;
const input = document.querySelector('#input');
const humidity = document.querySelector('#humidity');
const pressure = document.querySelector('#pressure');
const temp_rn = document.querySelector('#temp_rn'); // temperature right now feeling //
const wind_speed = document.querySelector('#wind_flow');
const city = document.querySelector('#city_name');
const main_temp = document.querySelector('#main_temp');
const status = document.querySelector('#status');
const img = document.querySelector('.img');
const search_icon = document.querySelector('#search').addEventListener('click',()=>{
   if(input.value!==''&& weatherapi ){
      weatherapi();
      input.value='';
   }else{
      console.log('Type something please...');
   }
  
})
////--------Function for fetching the weather details-----////~~~
async function weatherapi(){
   let value = input.value.trim();
   let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=9730f15c21a9a01ae9d804dbac848c7b&units=metric`);
   let data = await response.json();
   console.log(data);
   const abstemp=Math.round(data.main.temp);
   city.innerHTML=data.name;
   humidity.innerHTML=`${data.main.humidity}%`;
   pressure.innerHTML=`${data.main.pressure}hPa`;
   temp_rn.innerHTML=`${Math.round(data.main.feels_like)}<span><sup>&deg;</sup></span>C`;
   main_temp.innerHTML=`${Math.round(data.main.temp)}<span><sup>&deg;</sup></span>C`;
   status.innerHTML=`${data.weather[0].main}`;
   wind_speed.innerHTML=`${data.wind.speed}km/h`;
   img.innerHTML=`<img id="img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`;
}
onload = ()=>{
  let value = input.value='Lahore';
  weatherapi();
  input.value='';
}