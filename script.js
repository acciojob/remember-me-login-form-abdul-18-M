//your JS code here. If required.
const forms =document.querySelector("#form");
const username =document.querySelector("#username");
const password =document.querySelector("#password");
const checkbox =document.querySelector("#checkbox");
const existing =document.querySelector("#existing");

if(localStorage.getItem("username") && localStorage.getItem("password")){
	existing.style.display = "block";
}
forms.addEventListener("submit",(evt)=>{
	evt.preventDefault();
	const user = username.value;
	const pass = password.value;

	alert(`Logged in as ${user}`)

	if(checkbox.checked){
		localStorage.setItem("username","user")
		localStorage.setItem("password","pass")

		existing.style.display = "none";
	}
})

existing.addEventListener("click",()={
	const savedUsername = localStorage.getItem("username")

	alert(`Logged in as ${savedUsername}`)
})
