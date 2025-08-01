document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("open");
});


window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const message = this.querySelector("textarea").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Message Sent!\n\n" + "Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

  this.reset();
  });

