class App{
    constructor(config){
        this.config = config;
    }
    getDocumentByID =(id) => {
        return document.getElementById(id);
    };
    getDocumentByClass =(domClass)=>{
        return document.querySelector(domClass);
    };
    runApp = ()=> {
        let domNodes = {};
        let myComponents = {};
        this.config.classSelectors.forEach((obj) => {
          domNodes[obj.name] = this.getDocumentByClass(obj.class);
        });
        this.config.components.forEach((component) => {
          myComponents[component.name] = new component.class(...component.args);
        });
      
        this.config.componentMountOrder.forEach((component) => {
          myComponents[component.name].mount(domNodes[component.args]);
        });
    };
}

export {App}