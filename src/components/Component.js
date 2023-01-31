class Component {
  displayFlex = "display--flex";
  flexDirectionCol = "flex--direction-col";
  flexJustifyContentCenter = "flex--justify-c-center";
  flexAlignItemCenter = "flex--align-i-center";
  constructor() {}
  mount(el) {
    const container = el || document.body;
    container.appendChild(this.render());
    return;
  }
}
export default Component;
