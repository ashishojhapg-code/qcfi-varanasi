
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu) menu.onclick=()=>links.classList.toggle('open');
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
document.querySelectorAll('.form').forEach(f=>f.onsubmit=e=>{e.preventDefault();alert('Thank you for contacting QCFI Varanasi Chapter.');});

const heroSlides=document.querySelectorAll('.hero-slide'), heroDots=document.querySelectorAll('.dots i');
if(heroSlides.length){let heroIndex=0; const showHero=(n)=>{heroIndex=n; heroSlides.forEach((x,i)=>x.classList.toggle('active',i===n)); heroDots.forEach((x,i)=>x.classList.toggle('active',i===n));}; heroDots.forEach((d,i)=>d.addEventListener('click',()=>showHero(i))); setInterval(()=>showHero((heroIndex+1)%heroSlides.length),5000);}

function openLightbox(src, alt) {
    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-img");

    image.src = src;
    image.alt = alt;
    lightbox.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.style.overflow = "";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});