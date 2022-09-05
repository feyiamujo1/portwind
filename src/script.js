// const hamburger = document.getElementById("hamburger")
// const menu = document.getElementById("menu")

// hamburger.addEventListener('click', ()=>{
//     menu.classList.toggle("hidden"),
//     hamburger.classList.toggle(bg-white)
// })

const Togglemenu = (e) =>{
    let nav_links = document.getElementById("nav_links");
    e.name === 'menu' ? (e.name = 'close', nav_links.classList.toggle('hidden')) 
    : (e.name = 'menu', nav_links.classList.toggle('hidden'))
};

const ToggleMode = () =>{
    document.getElementById("page_body").classList.toggle('dark')
}