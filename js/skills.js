const skillSection = document.getElementById("skills");
const progressBar = document.querySelectorAll(".progress-bar");

function showProgress(){
    progressBar.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 5;
        progressBar.style.width = `${value}%`;
    });
}
function hideProgress(){
    progressBar.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener("scroll", () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
})