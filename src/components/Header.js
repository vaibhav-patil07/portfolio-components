import UniqueId from "../utils/UniqueId.js";
import Component from "../components/Component.js";

class Header extends Component {
  constructor(data) {
    super();
    this.logo = data.logo;
    this.title = data.title;
    this.navBar = data.navBar;
  }
  render() {
    const container = document.createElement("div");
    const logoNameContainer = document.createElement("div");
    const logo = document.createElement("img");
    const title = document.createElement("div");
    const nav = document.createElement("nav");

    this.navBar.forEach((element) => {
      const navLink = document.createElement("a");
      navLink.innerText = element.title;
      navLink.href = element.href;
      nav.appendChild(navLink);
    });
    logo.src = this.logo;
    title.innerText = this.title;

    logoNameContainer.appendChild(logo);
    logoNameContainer.appendChild(title);
    container.appendChild(logoNameContainer);
    container.appendChild(nav);

    return container;
  }
}

export { Header };
