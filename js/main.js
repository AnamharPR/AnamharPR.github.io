var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    // Remove "active" class from all other FAQ elements
    var otherFaqs = document.getElementsByClassName("faq-page");
    for (var j = 0; j < otherFaqs.length; j++) {
      if (otherFaqs[j] !== this) {
        otherFaqs[j].classList.remove("active");
        otherFaqs[j].nextElementSibling.style.display = "none";
      }
    }

    // Toggle "active" class on the current FAQ element
    this.classList.toggle("active");

    // Toggle visibility of the answer
    var body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}

// Rest of your code remains the same...

const agreeButton = document.getElementById("agreeButton");

if (agreeButton) {
  agreeButton.addEventListener("click", function () {
    alert("Terima kasih telah menyetujui syarat dan ketentuan kami.");
    // Setelah pengguna mengklik "Saya Setuju", Anda bisa mengarahkan mereka ke halaman utama atau halaman lainnya
    window.location.href = "index.html"; // Ganti dengan halaman tujuan yang diinginkan
  });
}

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
