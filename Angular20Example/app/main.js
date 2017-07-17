"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main entry point
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var tasks_module_1 = require("./tasks.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(tasks_module_1.TasksModule);
//# sourceMappingURL=main.js.map