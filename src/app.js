import headerData from "../data/header.json" assert { type: "json" };
import homeData from "../data/home.json" assert { type: "json" };
import aboutData from "../data/about.json" assert { type: "json" };
import projectData from "../data/project.json" assert { type: "json" };

import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Project } from "./components/Project.js";
import { App } from "./utils/App.js";

const config = {
  classSelectors: [
    {
      name: "domHeader",
      class: "header",
    },
    {
      name: "domMain",
      class: "main",
    },
  ],
  components: [
    {
      name: "myHeader",
      class: Header,
      args: [headerData],
    },
    {
      name: "myHome",
      class: Home,
      args: [homeData],
    },
    {
      name: "myProject",
      class: Project,
      args: [projectData],
    },
    {
      name: "myAbout",
      class: About,
      args: [aboutData],
    },
  ],
  componentMountOrder: [
    {
      name: "myHeader",
      args: ["domHeader"],
    },
    {
      name: "myHome",
      args: ["domMain"],
    },
    {
      name: "myAbout",
      args: ["domMain"],
    },
    {
      name: "myProject",
      args: ["domMain"],
    },
  ],
};

class PortFolioApp extends App {
  constructor(config) {
    super(config);
  }
}

const myPortFolio = new PortFolioApp(config);
myPortFolio.runApp();
