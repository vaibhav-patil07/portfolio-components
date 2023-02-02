<h2>This repository provides components of portfolio website</h2><br>

List of components:
<ul>
    <li>Header</li>
    <li>Home</li>
    <li>About</li>
    <li>Project</li>
    <li>Card</li>
</ul>

```javascript
//To add a component
import { Header } from "path/to/Header.js";
const myHeader = new Header(data); //You can find data properties in ./data/header.json
myHeader.mount(node); // Mount appends header component to node element
```

This application extends App.js which has runApp function.This function will create and mount components as provided by the config file.

config file: This file has classSelector, components, and componentMountOrder properties.

runApp() function finds all nodes from dom provided in the classSelector,it creates new objects from classes provided in the components property and passes args to the objects.Finally it iterates through componentMountOrder and mount all objects to to respective parent node provided with config file.

<p>
example ->

```python
config {
    classSelector :[
        {
            name : "header", //variable name of node
            class : "header" //class name of node
        }
    ],
    components:[
        {
            name: "myHeader", //name for variable 
            class: "Header", //Class from which the component will initialized
            args: [data]
        }
        // above object will produce result like:
        // myHeader = new Header(...data);
    ]
    componentMountOrder:[
        {
            name : "myHeader", //same as component name
            args: ["header"] // This is the name of node where myHeader will be mounted
        }
        // above object will produce result like:
        // myHeader.mount(header);
    ]
}
```
</p>
