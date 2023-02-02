import UniqueId from "../utils/UniqueId.js";
import Component from "../components/Component.js";
import { Card } from "../components/Card.js";

class Project extends Component {
  constructor(data) {
    super();
    this.data = data;
  }
  render() {
    const container = document.createElement("div");
    const title = document.createElement("div");

    container.id = "Projects";
    container.classList.add(
      "projects",
      this.displayFlex,
      this.flexDirectionCol,
      this.flexAlignItemCenter
    );
    title.classList.add("about__title");

    title.innerText = this.data.title;
    container.appendChild(title);
    const projectCards = new Array();
    this.data.projects.forEach((project) => {
      projectCards.push(new Card(project));
    });
    let i = 0;
    while (i < projectCards.length) {
      const row = document.createElement("div");
      row.classList.add(
        "project__cards",
        this.displayFlex,
        this.flexJustifyContentCenter
      );
      projectCards[i].mount(row);
      i++;
      if (i < projectCards.length) {
        projectCards[i].mount(row);
      }
      i++;
      container.appendChild(row);
    }

    return container;
  }
}

export { Project };
