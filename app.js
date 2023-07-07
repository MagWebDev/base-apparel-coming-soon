const btn = document.getElementById('submit');
const myForm = document.getElementById("email");
const alertText = document.getElementById("alert-text")
const alertIcon = document.getElementById("icon")
btn.addEventListener('click', function ValidateEmail(mail) 
{
  mail.preventDefault();
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.value))
  {
    return (true)
  }
   
    myForm.classList.add("alert");
    alertText.style.display = "block";
    alertIcon.style.display = "block";
}
)