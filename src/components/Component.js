class Component{
    constructor(){}
    mount(el){
        const container = el || document.body;
        container.appendChild(this.render());
        return;
    }
}
export default Component;