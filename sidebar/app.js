const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar =document.querySelector(".sidebar");

toggleBtn.addEventListener("click",function(){
    // if(sideBar.classList.contains("show-sidebar")){
    //     sideBar.classList.remove("show-sidebar");
    // } else {
    //     sideBar.classList.add("show-sidebar");
    // }
                     //OR
    sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click",function(){
    sideBar.classList.contains("show-sidebar");
});