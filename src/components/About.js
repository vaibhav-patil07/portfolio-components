import UniqueId from "../utils/UniqueId.js";
import Component from "../components/Component.js";

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
    console.log(hobbyImages.length);
    while (i < hobbyImages.length) {
        console.log(i);
      if (i % 2 == 1) {
        const row = document.createElement("div");
        console.log(i);
        row.classList.add(this.displayFlex);
        row.appendChild(hobbyImages[i - 1]);
        row.appendChild(hobbyImages[i]);
        aboutHobbyImages.appendChild(row);
      }
      i += 2;
    }
    title.innerText = this.data.title;
    aboutMeText.innerHTML = this.data.introduction;
    aboutHobbyText.innerHTML = this.data.hobby.about;
    container.appendChild(title);
    aboutMe.appendChild(aboutMeText);
    aboutMe.appendChild(aboutHobby);
    aboutHobby.appendChild(aboutHobbyText);
    aboutHobby.appendChild(aboutHobbyImages);
    aboutMe.appendChild(aboutWork);
    aboutMe.appendChild(aboutAchivements);
    container.appendChild(aboutMe);

    return container;
  }
}

export { About };
