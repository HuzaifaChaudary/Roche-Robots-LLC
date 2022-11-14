const links = [
  {
    link: "https://www.facebook.com/Roche-Robots-108933881918473/",
    icon: "<i class='fa-brands fa-facebook-f'></i>",
  },
  {
    link: "https://www.instagram.com/roche_robots/",
    icon: "<i class='fa-brands fa-instagram'></i>",
  },

  {
    link: "https://twitter.com/rocherobotics",
    icon: "<i class='fa-brands fa-twitter'></i>",
  },
  {
    link: "https://www.youtube.com/channel/UCfUkARb1WMNYF0xJFq07caQ",
    icon: "<i class='fa-brands fa-youtube'></i>",
  },
  {
    link: "https://www.linkedin.com/in/roche-robots/",
    icon: "<i class='fa-brands fa-linkedin-in'></i>",
  },
];

// Create elements and add
const styleLink = document.createElement("link");
styleLink.setAttribute("rel", "stylesheet");
styleLink.setAttribute("href", "../src/social.css");
document.querySelector("head").appendChild(styleLink);

let btncontainer = document.createElement("div");
btncontainer.classList.add("btncontainer", "hidden");

const linkList = document.createElement("ul");
links.forEach((el) => {
  const btn = document.createElement("li");
  btn.innerHTML = el.icon;
  const link = document.createElement("a");
  link.setAttribute("target", "blank");
  link.setAttribute("href", el.link);
  link.appendChild(btn);
  linkList.appendChild(link);
});

btncontainer.appendChild(linkList);

document.querySelector("body").appendChild(btncontainer);

// SCroll appear

btncontainer = document.querySelector(".btncontainer");

window.onscroll = () => {
  btncontainer.classList.add("hidden");
  const factor = (window.innerHeight + btncontainer.clientHeight) / 2;
  if (window.scrollY > factor) {
    btncontainer.classList.remove("hidden");
  }
};
