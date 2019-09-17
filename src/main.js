import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import GreeterComponent from "./GreeterComponent.vue";

const CustomElement = wrap(Vue, GreeterComponent);

window.customElements.define("greeter-component", CustomElement);
