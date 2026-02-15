function calculateStress(){
    let score = parseInt(document.getElementById("q1").value);
    let result = document.getElementById("result");

    if(score === 1){
        result.textContent = "Low stress level. Keep up the healthy balance!";
    } else if(score === 2){
        result.textContent = "Moderate stress. Try applying coping strategies.";
    } else {
        result.textContent = "High stress detected. Consider speaking to a counselor.";
    }
}

function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth"});
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMessage").textContent = 
    "Thank you! Your message has been successfully submitted.";
});
