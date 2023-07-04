require("@babel/preset-env");
require("@babel/preset-react");

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const router = require("./src/router").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router).build("http://drivesphere.tech").save("./sitemap.xml");
