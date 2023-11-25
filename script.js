const cloud_pct=document.querySelector('.cloud_pct');
const feels_like=document.querySelector('.feels_like');
const humidity=document.querySelector('.humidity');
const max_temp=document.querySelector('.max_temp');
const min_temp=document.querySelector('.min_temp');
const sunrise=document.querySelector('.sunrise');
const sunset=document.querySelector('.sunset');
const temp=document.querySelector('.temp');
const wind_degrees=document.querySelector('.wind_degrees');
const wind_speed=document.querySelector('.wind_speed');
const heading=document.querySelector('#heading');
const submit=document.querySelector('#submit');
const searchcity=document.querySelector('#searchcity');
const img=document.querySelector('#img');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9044959c7mshe4ba5b73e59bb3ap15729djsn2e3e6225090a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const Weather=  (city) => {
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response =>response.json())
	.then(response => {
		console.log(response)
		img.src="https://source.unsplash.com/1600x700/?"+city;
		heading.innerHTML=city;
		cloud_pct.innerHTML=response.cloud_pct;
		feels_like.innerHTML=response.feels_like;
		humidity.innerHTML=response.humidity;
		max_temp.innerHTML=response.max_temp;
		min_temp.innerHTML=response.min_temp;
		sunrise.innerHTML=response.sunrise;
		sunset.innerHTML=response.sunset;
		temp.innerHTML=response.temp;
		wind_degrees.innerHTML=response.wind_degrees;
		wind_speed.innerHTML=response.wind_speed;

	})
	.catch(err => console.error(err))
	
}

submit.addEventListener('click',(e)=>{
	e.preventDefault()
	Weather(searchcity.value)
})








