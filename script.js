const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
const header=document.querySelector("header");
const topBtn=document.getElementById("topBtn");

if(menuBtn&&navLinks){
    menuBtn.addEventListener("click",()=>{
        const open=navLinks.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded",open);
    });

    navLinks.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click",()=>{
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded","false");
        });
    });
}

window.addEventListener("scroll",()=>{
    header.classList.toggle("scroll",window.scrollY>30);
    topBtn.classList.toggle("visible",window.scrollY>500);
},{passive:true});

if(topBtn){
    topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
}

const sections=document.querySelectorAll("section");
const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
},{threshold:0.08});

sections.forEach(section=>{
    section.classList.add("hidden");
    revealObserver.observe(section);
});