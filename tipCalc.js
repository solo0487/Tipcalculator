//Wenwen's code - Add mouseover and click event to the quality of service//

let a = document.getElementById('qualityOfService');
a.addEventListener('click', function(event){
	alert('clicked!');
})

let b = document.getElementById('quality');
b.addEventListener('mouseover', (event) => {
	event.target.style.color = "purple";
    setTimeout(() => {
        event.target.style.color = "";
    }, 5000);
},false
)