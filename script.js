const movies = [
  {
    title: "Avengers",
    genre: "Action",
    year: 2019,
    img: "https://tse2.mm.bing.net/th/id/OIP.RGaepzSi75oBuJF4F-33owHaKk?pid=Api&P=0&h=180",
    desc: "Superheroes save the world.",
  },
  {
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    img: "https://in.images.search.yahoo.com/images/view;_ylt=Awrx.TuQC7xpXMEXOrm9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzNlMjFkMjVjYTY5YmRlZWQ4ZTA1NjZjNGI1NWRkYmRkBGdwb3MDOQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DInception%2Bimage%26ei%3DUTF-8%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D9&w=891&h=1390&imgurl=c8.alamy.com%2Fcomp%2F2JKYD0T%2Fmovie-poster-inception-2010-2JKYD0T.jpg&rurl=https%3A%2F%2Fwww.alamy.com%2Fmovie-poster-inception-2010-image476961320.html&size=191KB&p=Inception+image&oid=3e21d25ca69bdeed8e0566c4b55ddbdd&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=MOVIE+POSTER%2C+INCEPTION%2C+2010+Stock+Photo+-+Alamy&b=0&ni=200&no=9&ts=&tab=organic&sigr=1i6Z0ER6vruQ&sigb=.ZG9xxQ5Nayn&sigi=HQTOufRByK3f&sigt=VB.fvqZ5xddO&.crumb=G476w4RGKEL&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN885G0",
    desc: "Dream within a dream concept.",
  },
  {
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    img: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKGGzBC7xpc7oaJWa9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzQ3OTYxYTY1NmY0NGU2YjhhNDQxMGNmOTBkODZjNjUzBGdwb3MDMTUEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DTitanic%2Bimage%26ei%3DUTF-8%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D15&w=360&h=360&imgurl=png.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20240715%2Fpngtree-tragedic-titanic-ship-on-the-ocean-image_16011295.jpg&rurl=https%3A%2F%2Fpngtree.com%2Ffreebackground%2Ftragedic-titanic-ship-on-the-ocean_15584535.html&size=45KB&p=Titanic+image&oid=47961a656f44e6b8a4410cf90d86c653&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Tragedic+Titanic+Ship+On+The+Ocean+Background%2C+Famous+Sinking+...&b=0&ni=200&no=15&ts=&tab=organic&sigr=Od8ltiHZCBox&sigb=TvqnBDZtGDZL&sigi=m4LzAevbrnCM&sigt=BhEWhtrbMsW0&.crumb=G476w4RGKEL&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN885G0",
    desc: "A tragic love story.",
  },
  {
    title: "Avengers",
    genre: "Action",
    year: 2019,
    img: "https://tse2.mm.bing.net/th/id/OIP.RGaepzSi75oBuJF4F-33owHaKk?pid=Api&P=0&h=180",
    desc: "Superheroes save the world.",
  },
  {
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    img: "https://in.images.search.yahoo.com/images/view;_ylt=Awrx.TuQC7xpXMEXOrm9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzNlMjFkMjVjYTY5YmRlZWQ4ZTA1NjZjNGI1NWRkYmRkBGdwb3MDOQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DInception%2Bimage%26ei%3DUTF-8%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D9&w=891&h=1390&imgurl=c8.alamy.com%2Fcomp%2F2JKYD0T%2Fmovie-poster-inception-2010-2JKYD0T.jpg&rurl=https%3A%2F%2Fwww.alamy.com%2Fmovie-poster-inception-2010-image476961320.html&size=191KB&p=Inception+image&oid=3e21d25ca69bdeed8e0566c4b55ddbdd&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=MOVIE+POSTER%2C+INCEPTION%2C+2010+Stock+Photo+-+Alamy&b=0&ni=200&no=9&ts=&tab=organic&sigr=1i6Z0ER6vruQ&sigb=.ZG9xxQ5Nayn&sigi=HQTOufRByK3f&sigt=VB.fvqZ5xddO&.crumb=G476w4RGKEL&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN885G0",
    desc: "Dream within a dream concept.",
  },
  {
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    img: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKGGzBC7xpc7oaJWa9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzQ3OTYxYTY1NmY0NGU2YjhhNDQxMGNmOTBkODZjNjUzBGdwb3MDMTUEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DTitanic%2Bimage%26ei%3DUTF-8%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D15&w=360&h=360&imgurl=png.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20240715%2Fpngtree-tragedic-titanic-ship-on-the-ocean-image_16011295.jpg&rurl=https%3A%2F%2Fpngtree.com%2Ffreebackground%2Ftragedic-titanic-ship-on-the-ocean_15584535.html&size=45KB&p=Titanic+image&oid=47961a656f44e6b8a4410cf90d86c653&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Tragedic+Titanic+Ship+On+The+Ocean+Background%2C+Famous+Sinking+...&b=0&ni=200&no=15&ts=&tab=organic&sigr=Od8ltiHZCBox&sigb=TvqnBDZtGDZL&sigi=m4LzAevbrnCM&sigt=BhEWhtrbMsW0&.crumb=G476w4RGKEL&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN885G0",
    desc: "A tragic love story.",
  },
];

const container = document.getElementById("movieContainer");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.getElementById("close");

function displayMovies(list) {
  container.innerHTML = "";
  list.forEach((movie, index) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.img}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.genre} | ${movie.year}</p>
        <div class="rating" data-index="${index}">
          ${[1, 2, 3, 4, 5]
            .map((num) => `<span data-value="${num}">★</span>`)
            .join("")}
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      modal.style.display = "block";
      modalTitle.innerText = movie.title;
      modalDesc.innerText = movie.desc;
    });

    container.appendChild(card);
  });

  addRatingEvents();
}

function addRatingEvents() {
  document.querySelectorAll(".rating span").forEach((star) => {
    star.addEventListener("click", function (e) {
      e.stopPropagation();

      let value = this.getAttribute("data-value");
      let parent = this.parentElement;

      parent.querySelectorAll("span").forEach((s) => {
        s.classList.remove("active");
        if (s.getAttribute("data-value") <= value) {
          s.classList.add("active");
        }
      });
    });
  });
}

document.getElementById("search").addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  let filtered = movies.filter((m) => m.title.toLowerCase().includes(value));
  displayMovies(filtered);
});

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

displayMovies(movies);