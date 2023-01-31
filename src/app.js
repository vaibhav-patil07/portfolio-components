import headerData from "../data/header.json" assert { type: "json" };
import homeData from "../data/home.json" assert { type: "json" };
import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";

const domHeader = document.querySelector("header");
const domMain = document.querySelector("main");
const myHeader = new Header(headerData);
myHeader.mount(domHeader);

const myHome = new Home(homeData);
myHome.mount(domMain);
