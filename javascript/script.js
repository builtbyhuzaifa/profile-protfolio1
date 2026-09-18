let btn = document.getElementById("hirebtn");

btn.addEventListener("click", function(){
    alert("Hello Sir/Mam!")
})

let themebutton = document.getElementById("theme");

themebutton.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")){
        themebutton.innerHTML = "Dark Mode";
    }
    else {
        themebutton.innerHTML = "Light Mode"
    }
})

let texttotype = "Web Developer. ";

let typewriterelemet = document.getElementById("typing");

let charIndex = 0;
function typeText() {
    if (charIndex < texttotype.length){
        typewriterelemet.innerText += texttotype.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    }
}
typeText();
