//your JS code here. If required.
const forms =document.querySelector("#form");
const username =document.querySelector("#username");
const password =document.querySelector("#password");
const checkbox =document.querySelector("#checkbox");
const existing =document.querySelector("#existing");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if(savedUsername && savedPassword){
	existing.style.display="block"
}
else{
	existing.style.display="none"
}
forms.addEventListener("submit",(evt)=>{
	evt.preventDefault()

	const user = username.value
	const pass = password.value
	alert(`Logged in as ${user}`)

	if(checkbox.checked){
		localStorage.setItem("username",user);
		localStorage.setItem("password",pass);

		existing.style.display = "block"
	}
	else{
		localStorage.removeItem("username")
		localStorage.removeItem("password")

		existing.style.dispay = "none"
	}
});

existing.addEventListener("click",()=>{
	const savedUsername = localStorage.getItem("username");

	alert(`Logged in as ${savedUsername}`)
})


