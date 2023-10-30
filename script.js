let form = document.getElementById("MyForm");
form.addEventListener("submit", volume_sphere);
function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let radius = form.radius.value;
	let volume = 4*(Math.PI)*(radius**3)/3;
	volume = volume.toFixed(4);
	form.volume.value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
