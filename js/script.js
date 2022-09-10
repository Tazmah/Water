// show nav
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


const payments = document.querySelectorAll("#pay");
console.log(payments);
for (let i = 0; i < payments.length; i++) {
    // payments[i].addEventListener("click", function () {
    //     console.log("WELCOME");
    // })
    // console.log(payments[i]);
    // payments[i].addEventListener("click", function () {
    //     console.log("WELCOME");
    // })
    // console.log(
    //     payments[i].addEventListener("click", function () {
    //         console.log("WELCOME");
    //     })
    // );
}


const faqs = document.querySelectorAll(".faq");


menuBtn.addEventListener("click", () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})
closeBtn.addEventListener("click", () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
})



//show / hide faq


faqs.forEach(faq => {
    faq.addEventListener("click", function () {
        this.classList.toggle("open")
        // console.log(this);

        const icon = faq.querySelectorAll(".faq__icon i")
        if (icon.clasName === "fas fa-bars") {
            icon.clasName = "fas fa-x";
        } else {
            icon.clasName === "fas fa-bars";
        }
    })
});

// payment
