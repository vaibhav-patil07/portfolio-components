import headerData from "../data/header.json" assert { type: "json" };
import { Header } from "./components/Header.js";

const domHeader = document.querySelector("header");

const myHeader = new Header(headerData);
myHeader.mount(domHeader);
