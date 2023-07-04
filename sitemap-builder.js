require("babel-register");

const router = require("./src/router").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router).build("http://drivesphere.tech").save("./sitemap.xml");
