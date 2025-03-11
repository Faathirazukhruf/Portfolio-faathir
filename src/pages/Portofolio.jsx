import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import profilePic from '../assets/ppfaathir (1).jpeg';
import pdfFile from '../assets/CV_Faathirazukhruf.pdf';
import './Portofolio.css';
import img1 from "../assets/v17-m1.png";
import img2 from "../assets/web3 (1).png";
import img3 from "../assets/cryptotracker.png";
import img4 from "../assets/ylc.png";
import img5 from "../assets/todolistfaathir.png";
import img6 from "../assets/Cover Majalengkaweb.png";
import img7 from "../assets/covergameberangberang.png";

const Projects = [
  {
    id: 1,
    title: "Chill Movie",
    description: "A web application for browsing movies.",
    images: [img1],
    demoLink: "https://missionharisenin-chillmovie.vercel.app/",
    githubLink: "https://github.com/Faathirazukhruf/mission-harisenin-chillmovie"
  },
  {
    id: 2,
    title: "Web3 Dashboard Analysis",
    description: "Web3 (Daaps) aplication dashboard with Ai analysis for crypto price,connect wallet integration and information for new crypto project Airdrop.",
    images: [img2],
    demoLink: "https://web3-analysis-dashboard.vercel.app/",
    githubLink: "https://github.com/Faathirazukhruf/Web3-Analysis-Dashboard"
  },
  {
    id: 3,
    title: "Crypto price tracker",
    description: "A simple web for tracking crypto price.",
    images: [img3],
    demoLink: "https://cryptotracker-sage.vercel.app/",
    githubLink: "https://github.com/Faathirazukhruf/crypto-tracker-frontend"
  },
  {
    id: 4,
    title: "Yourlifechoices Landing page",
    description: "A Landing page for Yourlifechoices company based in Australia.",
    images: [img4],
    demoLink: "https://yourlifechoices-project.vercel.app/",
    githubLink: "https://github.com/Faathirazukhruf/yourlifechoices-project"
  },
  {
    id: 5,
    title: "To-Do List App",
    description: "A simple and functional to-do list application.",
    images: [img5],
    demoLink: "https://faathirazukhruf.github.io/Aplikasi-todolist-faathircompany/to%20do%20list/",
    githubLink: "https://github.com/Faathirazukhruf/Aplikasi-todolist-faathircompany"
  },
  {
    id: 6,
    title: "Majalengka Profile",
    description: "A profile website for Majalengka city.",
    images: [img6],
    demoLink: "https://faathirazukhruf.github.io/majalengka-web/Majalengka%20profil%20buatan%20Faathir/",
    githubLink: "https://github.com/Faathirazukhruf/majalengka-web"
  },
  {
    id: 7,
    title: "Berang-Berang Game",
    description: "A fun and interactive game about Berang-Berang.",
    images: [img7],
    demoLink: "https://faathirazukhruf.github.io/Gameberangberang/berangberang/",
    githubLink: "https://github.com/Faathirazukhruf/Gameberangberang"
  }
];

const skills = [
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Next.js',
    logo: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'Solidity',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWDswUFU1HZv0r9jrvC3-mfrUqLp1P8cqZw&s'
  },
  {
    name: 'Web3.js',
    logo: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Ether.js',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEUkNZ/////8/Pz///0kNZ4kNaH///sfMZ7//v/8/PslNKEPKZ0cL50jNp36/fpIU6zJzOOUmswzQaXw8vaMlMhcZrIII5nCyOGvt9oZK5xxer0IIZn///je4e87SaiVnchQW64kNpm3vN2AisEfLZsWKKIAHJgAF5qfpdiRldHr7vXa3O1JVKhpcbfk5/DFyt6jqdEAI5TT2/DKze2ssdpaY7nX3es5RK4AGaJfaK9KV6dsbb2iq8+DisY0RJ8TI6GrtdG2u+OprdyFj8qCicsjM6hufLfq8fA7R60+Sp9mcbO5w9i+v9tUXbfW3OPb3vdveq4ABp0qO5TwrIGgAAATxklEQVR4nO1di1/ayBbOZB4JM0l4BIJDAAkCWhAEpXZtRbatWLfXbu/d//+PuWcCCfEN1i60v3zWKpDAfHPOnNc81LQUKVKkSJEiRYoUKVKkSJEiRYoUKVKkSJEiRYoUKVKkSJEiRYoUKVKkSPEi0E034KeAUE4JJ5bnTdui7QlhUG5r8O/3gR0QY9T+ttvM1QanJ829a2800+zfSJyEt9v9so4QBiCGEeoeZD3rd5GhPdOk3DtFAKzIAU3TxEgvH/qgp7+DHHngvT9GD0AftqT2O8jR8IYgMnafIUO9Rvs3kKFllXE4/O4AnsHYPfM33b4fBbfqNXSPXQSToT2P/NpiNN7VHuUHempifOltuo0/BEPrKf18jKTSXqchN93KlwOCmJwyKCFDzFhEdO4y5r9h1r22+aZb+kIQ7h+gW7S6J+NiMT/sRY/VD7N6/MvqKScltrSh7Mv4rdcRUkqvU3gzqMZD0URvRmTTbX0JOLHFIBKWic2Dgq8R9UU0rkkr7yIzNKcYM7dubbq1LwHXpsOFKoI9Oc56RuJF2/Drp5hF+lsWv6DH4MHs2plHMsDkpGXcftW2jfZOPEJZ6RcUIrf9c1RdGMxcy7ojJAoJ4nQn9vs3nc208mUgymxQi9T1hS1BA8148Mr9ZmSIcFbahsE51Wy+9QprE9maCq3+LlJChPqP+HQqe5Gp3fmDWO9sYohpS2x3vkEtTzs7OKrpjFUjh9Dcf0ws8r2+oJipuY6JMnrt6NMZ9e/q9NaAcsvrN7sIJzy6ifTGo2aETN8onz+3RrHn7DbPPItsY27MDf/D8d08EMzM464AzE0XPOK9eJWVs50tJKjJbBndjbJBNhVBHxtYlLR3H2CoeulcbJkDoYR2Ji5ehqELfgy7BeNRhoQbdZfNo3AzcZtKmI8LkmxVNc4WO+hOIg8PwdWd7j953ygHSSIIjVVv943JaheSb1G8ymUZ4XtjUNXWmk/XKfxPTN3G2J3eQRlWo9uU/nfKD2W57iDX7D89nlpng5Nm8+akpt/pHWWjvG2RISXTP2+ZGGX69VyxZO13vOcMhtXp+L7f2S+U8rXqLUXHaHdqb0fpn7cmdwXQzWc9aZCVmxfwmTGdfsjdMsVMP7S2I/833um3nYS7S9sQZc7oyuOI2wF8WdNJQllBnmVP27yigh755Vi7wLiY+Lg+pYTYgJUZUgAHdR9lXRRFexDs4IaxeRlyIkqxBBVRNm4/nEo8D0rtVsM1Eza5Od0Cc0pDlxYNQIQO9oMfeDfSvkpoPNatzWtpYL1Hy8oZRjsj+gOKBVLsnCztMsR8m6+mxqn6XIbHrR9UKyrfo4TWNzdfaiTtbtIRZn80YCbcP2HLaLy2+VxRlpKO8KP/ow3igSwi04kHYv2lZuvVIHYTc4Nu/UcG4QJGNhOHuAydbTyL8poJu9D0X8N9WbWtMjXt06g1DnS4fI040s/FloahvU0zpLwb9zfuipXiNMiK+FPhjh+rBdsChsa1GztDdLJaYZcGBespht5w6S5QXrxSS18Kox7Hyhi/Wa019KJk2E/EKl4+MQ7zG5dhVl8OmjcrtYby+kQ+xVDkI/O8FVpad5catbtSAEJ5YSyeKoeCA4rGIWIbt6W00F2GWOPVGGraCXmqyLS0NBjpjU17fLCly5jt40oMId+q1WdPMcwhJ+o0d/NJvhwsrcIzlcMIdPS92H6CoTWI++ypivm/BZFbNmfgrdQcIv48eaIvrEZcHWY4v/ncQoyXyaFbWGnQ2GKCn5i6Xxoa+Ln5wFuDTCBiCFHbkxYkAjGy7JP/iM+nVPbi+X/Q+81XE+VZnMtBANJaLS4Vp+ahfLjYQcRVbJsRupIbNzSaIb/ExhSVvdWmGsQE5VoPu0Rpd+MOQ8ftLZicsadHS4bdwmopuT37giY+hzg90SGEEE6Jl4sCGtD6r1uxxFa8SRTHKmK12pi3i/S+ZweJXIQSMgssUcZmHNCcb8USDUoK+nLx2orZBbetU+aeTfktf07ItNEL52Tmb/bDVa3XAZmNbmIhmng1605scaYzfW+fxAypITr2UFehaKTy9c1XoeaQfRZXavBHn6xmTv2Jmpf45glLypb0PFmv3EQrcJQYcbe+FYNQgXq55UB0GjJYqefpdFfN/J4U35b6lc/D5mk3ObXG0HFdbs9eBauxzAVwzuMruTCbTydMLVPAi4l8xpbTOwgNxWxb6AGCP24Wi34xGMLiSO1yetakUpv6jVPoExPhaIUDDufF4b9a39fUOoXNT1rMMQvoYLmWwnnbonS1pglr18VVZMbrMEO+qDaZtX5yk9cE4bKkR9bGRO631op9b9ue9rnn4tjbqNUpuYonNh+q3Qa1iTdRKmaGNoK5WUlAjM8bQqIWEsv65U6v23V1tzv4PvzwzpP0bk3SVqs1qa1+UE7I6lPLrwgy/cyWvtrtd8jzI3EBakhvJO169poLIR50gSE7YhtGyzDg9+vCazZ9RfDABykuJ0qHUq6+UJSCbAzLsrj2iG2xiSX89qzQ6Fcq/a/vC5sxQNzvu7E3Y6h2tr9qREKVYyfht31rjZDiLYXfadPs13zzpjn+3M8WuLQ2Nkrb9RxLzPzlSkIaNCB0FcdNtHDSCmQ444Ryy2p5nmjRemlvt9mrDXrNYumdP5KGsVknaYwu1To8trCKzvEl6bTVZthVgi+qLAi1ZGvUEbT+trK7k6vpjtvNjSclTfjCsjcfwtkzIgsH8TSGaYJVLe9dC0881fUwCA2ljKI9FUa91H8zztXCHLjb+3j5tt6SIDke7tLYvAuBKIUbXuFTN1z2BTFYWPTUa83ih2xh5vlCbZixLANgtaSC5/uetGjh8GxSHDaBWRh6693ezptS3ep4MlzdDiaL8lXCpH8JRPCrnKsCMWYu9nBhpqs1fAefJ5V+qXGYPfz2tnTWr1y+OW/elI9r4AqjzKTbuylWshzkZhnbQugeoK8h0es3a/oiFnOc5OauJFgUqmHnS6853Ht7bXQ6ogVy2yaR3QNV3plbnnE4Oc8N3CW1cCOiUt5lkuS4g+/NcX6vVOcCMkQDXDvER/PwhWx+2D0DyNnbngDTMcmPm7njQQ0wANRqx7lcczwsXvYbdRvGpidAJTcSiP0wQgdugZkc+R1goaCMjBD+vu+FvCy+lZsOVgdYQNA1oqJmCJjVLxCPqzWIdvgrV/y2d7ilSJEiRYoUKVL8aiDGPGFNQCSLlpxAdhvVGNRmbGuqjrn6uVUHm6uA8JUSEPFX5S6+Jjegy+tm86tYPMFtTfT/s1N/cn3lK4AHmkHtH9nasYR1qYfbOpNA3eX+ZeOiy5hTWkw10ECeQeo3uPjJSYMtW1n+OuV/WnCr+l2w6vFiPptocg/pGXyzWLxEiXeDHZ1N5M/NGqzDY7379VUWLhpZPXOPYdUcRAyJzCNHx+WYochhXUfFFdcsvBC0pXbydQuvIURgyIDTHS3Fw/b8ZULERhgWXJzRq29fY1GYkc2wjJ7p1ZLo7crFOCPaZhjCp2Sq3dVm1J8BMMzoplvo+F4M34sIgtVWWpr5txlqpH7s1Eqvssw9ZKh3r5P6QJdTKDbdDENt1rIt41V8rmJoZr7UDZrAchZsUwx5wDX6Oke9zGXoPrYUiPKfYkuJrWajyGqzOqpIq9bEvZDxRhgSwjk1pKqkrnQ55dywxAtn355kSNUU5pzhvpRqHVrMsKPmYYwH7zKsu02nFoRIhiGjQIlwObruX172s235WKON5eFTYO5a2crl5dn1s/v/12RoGP3J1VUTxiHrVSpXlYJF+Jwh3lGP+9mLkbh1nC61beHVS5X+oSVAtVRBmMzsGf/a8EYXjUrfmgXchq9R/8RFDGO9V3mYoi2vK9kw3oePpGLS09Xl7k1ptLYYn2DItWPl/k09Y+pVbDLU/WZoc4aZcIbC1Lu5PWu6HEs8MP6onLgmMs1e3pBcTXvaMy2oYbOc6+qM9VrwkHDvE2Nh8JRBbPwgRXHWrep7yltQIrVcFc8DL+xcrh3JLRnGhjTCdBdlAPOozswwhv/eX8jQcaB1TpVlMHKvpvEdRNbLiIHIq3Bxt++pbRc28FGRLVLvhA4Eh0DwBjpnAbP60Fln1PheNZkb+jAa1KDHosu/rH1eSMgQdy+EbC3gRXsg/J2qMyeX0Z1qxjRZrWPPGeogVfh2IBxi5rmYL5IitqwPICwPeyVTxc7nEVFLGb1Q6upZh91MSSAqLMOgj6DZcCH++hDDggtjw1HkA3+MMxnHMZkJXc307LqRXOgPmTNY4vvuIpRo/RcxaBczoaOBHqjln/5ChowpPWW6qYSJ8uERLoSSYMCgIXNAL6BKO5xwDBlCR8EzV21b63wP+wh3BzpC1e8PZZrAUPWrYkhtF6v3cmo1HVXxzdpxjmLoqCZHwIxFFKfFHjCGAaFXXcX9fGYvGGbCx123yhST6gclBrB4TWSq98Ku6gKHMTdrBZyEMjRh5LmnRaERK3BBGPi0YYig2Bz/9ZB5TDCUZ0zJrnkhxV/5j+frB3LzmMaJxwUML5abH6tDwFlI2cmDeoC3EAASxN4CHkvtcDJQ4sA9pdjcKDEddI81S9nGZFDVnQza8e0Fw4y5m7WFUF6+bkKfIdqG2FCIhw9TTjAkH4AhHozg8hk0Yf3p8XAcOjBCIoDCLzepUcKj3GJugxIeX60eabdyuApDMWzK/mloZYt/WJYlZjVlLd26pHOGbGffmlsxIl14Cd3QkeRqAf9DTU4wnJ0hJfK8bKsjJl7g8kMtNROFDMZyid0/T8elJJjVXbAXeAgvGwWkWj7+n1T5yX5D2WC0JxYM0W57kc5SP6fIVwfDt9I36IMZUoKhbakOcVAvfzgFH7v+ZrdF9lTKxqi3Ey8/zZAHtr+D9Uy1t6/2kSiNZcPh+cEQ/ttVCoxvOkuGC79py76Sig4eZXBwOJo91OSkpfEOkHpfhszam4K3/m7yhT+8DhfCzJF8j2dkCGFrX5VtXEnVCRqq4YtNTUjZIJ31OlrE0IsYcjlGysuoyoJ5TqwHNDXJkJJj5ZdNBpd3i1Oy4lr6uwwfi7yfzZ6sBlIMDW57ZXS/pFUbzWIZkoih0RoiMETK0zA0aLTvL2RIaik3CjcQRqirofuOtdmaPv/1GMocvlfTwjWf32WopvhHjZweBm5g15z38l6bEwwhvZl1KrXMPM4zWa+w5sqOV2CYmTMUJ1jFcssDvtXKmnyb3GUIsQ/4Ie/woIewMuP4+EmGNoGxIGRpPFCHZ1VNPPb+dS1dMPSaVcfEg/LR0VF5jqPyXtumdxkq0wJphyFapVw1jL7799aqJhhyDgE8IZZnVGpq7DL3Yr247fUYjg4YmIPa/6aeHxW0fMHte1pKAmsKnh9eEZ1LVxnVg3u7gZMytCV4CUoD3mp/YqpD1iwUvx5DWUIqYrua2nwB0EYgck9L/Q/nVx68Qm1tv6nuub8NPmlL5eS85AUah7fywQM5uLK+DE3TvVOJCqKRsQZDg6gQWXezqsepIWYFqf4Syz0tlW9gjA69WUBBjIOFq1R7OBIHMSwZUnlTRbji00Aj7fe6yk/WPNNmnlt0bXX4X4xRO/JQazDk3jh0zd2K3/E7Wv5v9+M//AGG/AsYGHZg7Hc6746UgWR9MiO8naxQLBkaWRW2Vy+9PzqdRg3Grelo64U1i7i0+WcSn85aa8sQbEe2q5LjKvteLh93IfGqnnj3GVJaU16FdY/LPVdlwngAGZZlF8dny/GVZKgzh5nVQS5XC/MDVJ5qawEYhvbsFqroKvo0Kos4UWsjXJZDhlFoBwwhGe4qGXJRRGBOTT38ewnK1w2IqnqOTuYMF3dAKK+mSszwb+5U1ekfkDZAuJA8cCihpRbc7airwZCGpYXSmqv5jcOMcy8U0dHf8W5RkWd6hh0tGIIBPMJhqB8xBPvCTNdQdSfbO0eqYQs4+MhP3BFldnz/GGfMxZSeY6KmPyOz90oTevFhqAlLYxW6cHnURhN/XlOE6vSSqnmfYS1mKCfw4XjHjxh6yvyh2J4ZF+rlga9qYhrvfP6C2CLPxCr8UHM7fnjHZbydK2g3MTMXFzl5jwfq3Dv8CMNAXp9GZZ0M1itesG56EZ6fe2dyrYomcS5N7R4k63G5iBqH6mS6Zc7ThqARqdx9BoG47WVvuou9fLXPRvhXrajVgHjyeyEqoarKzaQXrhBHbq4hwA1AuHAC7zK5raX63OPblrU7mAdK7s51i1O+7uR3a7JzF+OviV3I1j/5T+8TJW75fpgPjCjAJ9TYGyd8sDG1S3vDcb5yKGI/ru74x0gmEO12I7yo0J73nD0LisPblkbPzCtRqk+m1lnxfFz8ansvmVCEZMbz72DUTmwxtGdgyJPrsi3PU2vR5w+4PRN+ssQPMaeAYKY1S6S2cIfFE29J7UDCRVIaC3FwjQtPLONN40JnGZYpzQmRwBbC81ryZXsyifK2d0BvbZGz4YrkkdbqkR1foKKW5MhQ0yfhFTx5x+JPDkSPebgTSo3c6Bm1qnr5maJSrYIPWkRaanF/eJTqr72oegHoGUt6QRdBFF/b/Ok1PwGzYHpYydcwuCg0bD9//a+HYFo0q1VVbMZusPFDFX8G+IUqsEMgmcGTTZ9W95PwbR4WmWintf0ba14C3hqovd/YnXR+S35qbiBbrvWOJrRlr1s2/GVgCMOfPjr5/VuArL4X/lfFby2/FClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiR4pfH/wFL8q/rJzXTngAAAABJRU5ErkJggg=='
  },
  {
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'Postman',
    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
  }
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <header className="header">
        <div className="logo">FaathirAzukhruf</div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="hamburger"></span>
          </button>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h1>Hi, I'm Faathir Azukhruf</h1>
          <p>Fullstack Developer</p>
          <div className="hero-buttons">
            <a href={pdfFile} download="Faathir_CV.pdf" className="btn primary">
              Download CV
            </a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate Fullstack Developer with expertise in JavaScript, Python, HTML, CSS, and a variety of programming frameworks or tools such as React.js, Next.js, Express.js, IBM loopback, Node.js, Bootstrap, Tailwind, PostgreSql, MySQL, and Postman, I also have skills and passion in web3 programming languages ​​such as Web3.js, Ether.js, and Solidity. Additionally, I am proficient in operating Linux. My enthusiasm for technology has led me to explore fields like AI, machine learning, Web3 blockchain, and cybersecurity, with a particular focus on backend development and data management. However, I also have strong frontend skills, particularly with React.js,Next.js and other frontend frameworks.
              </p>
              <p>
                I am always eager to learn and explore new technologies because I believe the future is shaped by innovation. I'm adaptable and open to continuous learning, yet I remain focused and diligent in my work. Having completed numerous projects, I am confident in my ability to contribute effectively in various roles. And I am also a graduate of Harisenin.com, a Fullstack Developer bootcamp and one of the top bootcamps in Indonesia.
              </p>
              <div className="Skills">
                <h1 className="section-title">Skills</h1>
                <p className="section-description">Check out my programming skills:</p>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {Projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-images">
                  <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
                    {project.images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn small">View Project</a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn small secondary">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Feel free to reach out to me through any of these channels:</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="icon-email"></i>
                  <p>muhammadfaathir004@gmail.com</p>
                </div>
                <div className="contact-item">
                  <i className="icon-phone"></i>
                  <p>+62 83148486316</p>
                </div>
                <div className="contact-item">
                  <i className="icon-location"></i>
                  <p>Majalengka, Indonesia</p>
                </div>
              </div>
              <div className="social-links-container">
                <h4 className="social-heading">Let's connect with me!</h4>
                <div className="social-icons-container">
                  <a href="mailto:muhammadfaathir004@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt="Gmail" className="social-icon" />
                  </a>
                  <a href="https://wa.me/6283148486316" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" className="social-icon" />
                  </a>
                  <a href="https://instagram.com/Faathirazukhruf" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/faathir-azukhruf-61335b307" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon" />
                  </a>
                  <a href="https://github.com/Faathirazukhruf" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Faathir Azukhruf. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
