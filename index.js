let menu = document.getElementById("menu-logo")
let navTabs = document.getElementById("nav-tabs-container")
let vetNavtabs = document.getElementById("vertical-nav-tabs-container")

window.onresize = function(event) {
  if(window.innerWidth < 1025){
    navTabs.style.display = "none";
    vetNavtabs.style.display = "block"
  }
  if(window.innerWidth > 1025){
    navTabs.style.display = "flex";
    vetNavtabs.style.display = "none"
  }
};

function toggleMenu(){
  console.log(window.innerWidth)
  console.log(vetNavtabs);
  if(window.innerWidth <= 1025 && vetNavtabs.style.display === "block"){
    vetNavtabs.style.display = "none"
  }else if(window.innerWidth <= 1025 && vetNavtabs.style.display === "none"){
    vetNavtabs.style.display = "block"
  }else if(window.innerWidth > 1025 && navTabs.style.display === "flex"){
    navTabs.style.display = "none"
  }else if(window.innerWidth > 1025 && navTabs.style.display === "none"){
    navTabs.style.display = "flex"
  }
}
