import UniqueId from "../utils/UniqueId.js";
import Component from "../components/Component.js";

class Card extends Component {
  constructor(data) {
    super();
    this.data = data;
  }
  render() {
    const container = document.createElement("div");
    const title = document.createElement("div");
    const about = document.createElement("p");
    const subTitle = document.createElement("div");
    const techStack = document.createElement("div");

    container.classList.add(
      "about--work-card",
      this.displayFlex,
      this.flexDirectionCol,
      this.flexAlignItemCenter
    );
    title.classList.add("about--work-card-title");
    about.classList.add("about--work-card-content");
    subTitle.classList.add("about--work-card-title");
    techStack.classList.add("tech-stack",this.displayFlex);

    this.data.technolgyStack.forEach((technolgy) => {
      const techDiv = document.createElement("div");
      techDiv.classList.add("tech");
      techDiv.innerText = technolgy;
      techStack.appendChild(techDiv);
    });

    title.innerText = this.data.title;
    about.innerText = this.data.about;
    subTitle.innerText = this.data.subTitle;

    container.appendChild(title);
    container.appendChild(about);
    container.appendChild(subTitle);
    container.appendChild(techStack);

    return container;
  }
}

export { Card };
