
                      var addGlobalProps = function(obj) {
                        obj.require = require;
                        obj.__dirname = __dirname;
                      }

                      if((typeof __ScalaJSEnv === "object") && typeof __ScalaJSEnv.global === "object") {
                        addGlobalProps(__ScalaJSEnv.global);
                      } else if(typeof  global === "object") {
                        addGlobalProps(global);
                      } else if(typeof __ScalaJSEnv === "object") {
                        __ScalaJSEnv.global = {};
                        addGlobalProps(__ScalaJSEnv.global);
                      } else {
                        var __ScalaJSEnv = { global: {} };
                        addGlobalProps(__ScalaJSEnv.global)
                      }
                   'use strict';
require("source-map-support").install();
require('./cloud-manager-app-jsdeps');
require('./cloud-manager-app');
CloudConnectionComponent.App(__dirname, require).main();
