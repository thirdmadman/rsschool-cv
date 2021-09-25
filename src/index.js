import TestLogger from "./js/TestLogger.js";
import "./sass/style.scss";

let gg = new TestLogger();
gg.addToLog("Start");
gg.addToLog("End");
gg.printLog();