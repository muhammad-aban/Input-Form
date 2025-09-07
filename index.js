let name = document.getElementById("name-input")
let email = document.getElementById("email-input")
let phone = document.getElementById("phone-input")
/* let phonearr = [phone] */
let plan = document.getElementById("plan-input")
let billing = document.getElementById("Billing-Interval")
let street = document.getElementById("street-input")
let city = document.getElementById("city-input")
let prov = document.getElementById("Province")
let zipcode = document.getElementById("zip-input")
let country = document.getElementById("country")
let password = document.getElementById("password-input")
let confirmpas = document.getElementById("con-input")
let error = document.getElementById('error')
let btn = document.getElementsByClassName("btn")[0]
let errorbtn = document.getElementById('error-btn')
let fields = false;
let count = 0
btn.addEventListener("click",function(){
    count = 0
    error.innerHTML =""
    if(count < 7){
        errorbtn.innerHTML ="Error:"
    }
    if( name.value ==  "" || email.value == "" || phone == ""||plan == ""||billing =="" || street == ""|| city==""|| prov == ""||zipcode == ""|| country == ""|| password==""||confirmpas==""){
        error.innerHTML ="Fill out All the fields"
        return
    } if(/^[a-zA-Z]+$/.test(name.value)){
         console.log(name.value)
         count++
    }else{
        error.innerHTML ="Name field contains a number or any special char"
        fields = false
        /* console.log(error) */
    }
    if(/^[a-zA-Z0-9@]+$/.test(email.value)&&email.value.includes('@')/* &&email.value.includes('.com') */){
        count++
        console.log(email.value)
    }else{
        fields = false
        error.innerHTML ="Email field doesnot contains a @,number and charac"
    }
    if( !isNaN(phone.value) && phone.value.length == 13 ){
        count++
        console.log("hello")
    }else{
        fields = false
        error.innerHTML ="Phone field doesnt contain 13 digits and number"
    }
    if(/^\d{4}$/.test(zipcode.value)){
        count++
        console.log("zip")
    }else{
        fields = false
        error.innerHTML ="Zip field doent contain 4 and only digits"
    }
    if(/^[a-zA-Z]+$/.test(city.value)){
        count++
        console.log("city")
    }else{
        fields = false
        error.innerHTML ="City field doent contain only alphabets"
    }
    if(password.value.length == 8){
        count++
    }else[
        error.innerHTML ="Password length is not 8"
    ]
    if(password.value == confirmpas.value){
        count++
        console.log(password.value)
    }else{
        error.innerHTML ="Passwords field are not matched"
        fields = false
    }
    if(count === 7){
        errorbtn.innerHTML ="Message:"
        error.innerHTML ="All the fields are filled and successfully submited"
    }
})

