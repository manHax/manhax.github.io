const aa = document.getElementById("footergen");
let yeard = new Date().getFullYear();
ftext = `${aa.innerText[0]} ${yeard} Manhakkim`;
aa.innerText = ftext;

function mailtoo() {
  const subject = document.getElementById("subjecte").value;
  const body = document.getElementById("bodye").value;
  window.location.href = `mailto:lhakim1762@gmail.com?subject=${subject}&body=${body}`;
}

function setact(bScroll) {}

window.onscroll = function () {
  var sections = document.querySelectorAll("section");
  const navv = document.getElementsByClassName("nav-link");
  var tamp = [];

  var bScroll = document.documentElement.scrollTop + 2;
  console.log(`bs = ${bScroll}`);
  for (var i = 1; i < sections.length; i++) {
    var sHeight = sections[i].offsetHeight;
    var offsets = sections[i].offsetTop - 50;
    console.log(sections[i]);
    console.log(sHeight, offsets);

    tamp.push([sHeight, offsets]);

    if (bScroll > offsets && bScroll < offsets + sHeight) {
      navv[i - 1].className = "nav-link active";
    } else {
      navv[i - 1].className = "nav-link";
    }
  }
};
// if (bScroll > offsets && bScroll < offsets + sHeight) {
//   navv[i-1].className = "nav-link active"
// } else {
//   navv[i-1].className = "nav-link"
// }
