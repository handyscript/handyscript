import webpackBrowserConfig from "./webpack/browser.config.cjs";
import webpackServerConfig from "./webpack/node.config.cjs";

export default [webpackServerConfig, webpackBrowserConfig];