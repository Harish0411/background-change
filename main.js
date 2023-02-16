let array = ["red", "skyblue", "green", "blue", "yellow", "violet"]

let btn = document.getElementById("btn");


btn.addEventListener("click", function(e){
      e.preventDefault();
	 
	 document.body.style.background = array[Math.round(Math.random()*array.length)];
	 

})