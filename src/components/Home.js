import UniqueId from "../utils/UniqueId.js";
import Component from "../components/Component.js";

class Home extends Component {
  constructor(data) {
    super();
    this.title = data.title;
    this.introduction = data.introduction;
    this.socials = data.socials;
  }
  render() {
    const container = document.createElement("div");
    const homeDiv = document.createElement("div");
    const socials = document.createElement("div");
    const title = document.createElement("div");
    const introduction = document.createElement("div");
    this.socials.forEach((social) => {
      const socialIconContainer = document.createElement("div");
      const socialLink = document.createElement("a");
      const iconImage = document.createElement("img");

      socialLink.href = social.href;
      iconImage.src = social.icon;
      iconImage.alt = social.alt;

      socialIconContainer.classList.add("social__icon", this.displayFlex);
      iconImage.classList.add("social__icon__image");

      socialLink.appendChild(iconImage);
      socialIconContainer.appendChild(socialLink);
      socials.appendChild(socialIconContainer);
    });
    container.id = "Home";
    title.innerText = this.title;
    introduction.innerText = this.introduction;

    container.classList.add(
      "container",
      this.displayFlex,
      this.flexDirectionCol
    );
    homeDiv.classList.add("home");
    title.classList.add("home__title");
    introduction.classList.add("home__introduction");
    socials.classList.add("socials", this.displayFlex);

    homeDiv.appendChild(title);
    homeDiv.appendChild(introduction);
    container.appendChild(homeDiv);
    container.appendChild(socials);

    return container;
  }
}

export { Home };
