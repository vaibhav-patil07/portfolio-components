import UniqueId from "../utils/UniqueId.js";
import Component from "../components/Component.js";
import { Card } from "../components/Card.js";

class About extends Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    const container = document.createElement("div");
    const title = document.createElement("div");
    const aboutMe = document.createElement("div");
    const aboutMeText = document.createElement("div");
    const aboutHobby = document.createElement("div");
    const aboutWork = document.createElement("div");
    const aboutAchivements = document.createElement("div");
    const aboutHobbyText = document.createElement("div");
    const aboutHobbyImages = document.createElement("div");
    const aboutWorkText = document.createElement("div");
    const aboutWorkCards = document.createElement("div");
    const aboutAchivementsText = document.createElement("div");
    const aboutAchivementsList = document.createElement("ul");
    const t = document.createElement("div");

    container.classList.add(
      "about",
      this.displayFlex,
      this.flexDirectionCol,
      this.flexAlignItemCenter
    );
    title.classList.add("about__title");
    aboutMe.classList.add("about__me", "section--top-margin");
    aboutMeText.classList.add("about__me-text", "border--bottom");
    aboutHobby.classList.add(
      "about__hobby",
      "section--top-margin",
      "border--bottom"
    );
    aboutWork.classList.add(
      "about__work-experience",
      "section--top-margin",
      "border--bottom"
    );
    aboutAchivements.classList.add("about__achivements", "section--top-margin");
    aboutHobbyImages.classList.add(
      "about__hobby-cards",
      this.displayFlex,
      this.flexDirectionCol
    );
    aboutWorkCards.classList.add(
      "about__work-experience-cards",
      this.displayFlex,
      this.flexAlignItemCenter
    );

    aboutAchivementsList.classList.add("about__achivements-list");

    container.id = "About";
    const hobbyImages = new Array();

    this.data.hobby.images.forEach((image) => {
      const imageContainer = document.createElement("div");
      const img = document.createElement("img");
      imageContainer.classList.add("hobby--card");
      img.classList.add("hobby--image");
      img.src = image.src;
      img.alt = image.alt;
      imageContainer.appendChild(img);
      hobbyImages.push(imageContainer);
    });

    let i = 1;
    while (i < hobbyImages.length) {
      if (i % 2 == 1) {
        const row = document.createElement("div");
        row.classList.add(this.displayFlex);
        row.appendChild(hobbyImages[i - 1]);
        row.appendChild(hobbyImages[i]);
        aboutHobbyImages.appendChild(row);
      }
      i += 2;
    }

    this.data.work.experiences.forEach((experience) => {
      const workCard = new Card(experience);
      workCard.mount(aboutWorkCards);
    });
    this.data.achivements.competitions.forEach((competition)=>{
        const compItem = document.createElement("li");
        compItem.innerHTML = competition;
        aboutAchivementsList.appendChild(compItem);
    })

    title.innerText = this.data.title;
    aboutMeText.innerHTML = this.data.introduction;
    aboutHobbyText.innerHTML = this.data.hobby.about;
    aboutWorkText.innerText = this.data.work.about;
    aboutAchivementsText .innerText= this.data.achivements.about;

    container.appendChild(title);
    aboutMe.appendChild(aboutMeText);
    aboutMe.appendChild(aboutHobby);
    aboutHobby.appendChild(aboutHobbyText);
    aboutHobby.appendChild(aboutHobbyImages);
    aboutMe.appendChild(aboutWork);
    aboutWork.appendChild(aboutWorkText);
    aboutWork.appendChild(aboutWorkCards);
    aboutMe.appendChild(aboutAchivements);
    aboutAchivements.appendChild(aboutAchivementsText);
    aboutAchivements.appendChild(aboutAchivementsList);
    container.appendChild(aboutMe);

    return container;
  }
}

export { About };
