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
      const navLinkContainer = document.createElement("div");
      const navLink = document.createElement("a");
      navLink.innerText = element.title;
      navLink.href = element.href;
      navLink.classList.add("nav__item");
      navLinkContainer.classList.add(
        "nav__item-container",
        this.displayFlex,
        this.flexAlignItemCenter,
        this.flexJustifyContentCenter
      );
      navLinkContainer.appendChild(navLink);
      nav.appendChild(navLinkContainer);
    });
    logo.src = this.logo;
    title.innerText = this.title;

    title.classList.add("header__title");
    container.classList.add(
      "header",
      this.displayFlex,
      this.flexAlignItemCenter
    );
    logoNameContainer.classList.add(
      "header__logo-name-container",
      this.displayFlex,
      this.flexAlignItemCenter
    );
    nav.classList.add(
      "header__nav",
      this.displayFlex,
      this.flexAlignItemCenter,
      this.flexJustifyContentCenter
    );
    logo.classList.add("header__logo");

    logoNameContainer.appendChild(logo);
    logoNameContainer.appendChild(title);
    container.appendChild(logoNameContainer);
    container.appendChild(nav);

    return container;
  }
}

export { Header };
