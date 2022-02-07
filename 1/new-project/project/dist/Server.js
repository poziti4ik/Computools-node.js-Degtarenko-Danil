"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 8080; // default port to listen
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    // render the index template
    res.render("index");
    // tslint:disable-next-line:no-console
    console.log("server runing main-page");
});
// define a route handler for the default home page
app.get("/echo", (req, res) => {
    // render the index template
    res.render("info_server", { title: 'test' });
    // tslint:disable-next-line:no-console
    console.log("server runing echo page");
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=Server.js.map