import java.nio.charset.Charset

enablePlugins(ScalaJSPlugin)

lazy val ElectronQuickStartSbt = (project in file(".")).
  settings(
    name := "cloud-manager-app",
    version := "1.0.0",
    scalaVersion := "2.11.8",
    scalacOptions ++= Seq("-unchecked", "-deprecation", "-feature"),

    skip in packageJSDependencies := false,

    persistLauncher in Compile := true,
    persistLauncher in Test := false,
    scalaJSModuleKind := ModuleKind.CommonJSModule,

      mainClass in Compile := Some("CloudConnectionComponent"),

    artifactPath in (Compile, fastOptJS) :=
      ((crossTarget in (Compile, fastOptJS)).value /
        ((moduleName in (Compile, fastOptJS)).value + ".js")),
    artifactPath in (Compile, fullOptJS) := (artifactPath in (Compile, fastOptJS)).value,
    packageScalaJSLauncher in Compile <<= Def.task {

      (mainClass in Compile).value map { mainCl =>
        val log = streams.value.log
        val file: sbt.File = (artifactPath in (Compile, packageScalaJSLauncher)).value

        val code = s"""'use strict';
require("source-map-support").install();
require('./${name.value}-jsdeps');
require('./${name.value}');
${mainCl}(__dirname, require).main();
"""
        // hack to get require and __dirname to work in the main process
        // see https://gitter.im/scala-js/scala-js/archives/2015/04/25
        val hack = """
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
                   """

        log.info(s"Creating launcher ${file}")
        IO.write(file, hack + code, Charset.forName("UTF-8"))

        // Attach the name of the main class used, (ab?)using the name key
        Attributed(file)(AttributeMap.empty.put(name.key, mainCl))
      } getOrElse {
        sys.error("Cannot write launcher file, since there is no or multiple mainClasses")
      }
    },

    resolvers += Resolver.sonatypeRepo("public"),
    resolvers += Resolver.sonatypeRepo("releases"),
    resolvers += "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots",

    libraryDependencies ++= Seq(
      "org.scala-js"  %%% "scalajs-dom"      % "0.9.1",
      "com.mscharley" %%% "scalajs-nodejs"   % "0.1.0"
    )
  )