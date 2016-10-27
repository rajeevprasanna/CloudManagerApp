import java.nio.charset.Charset

enablePlugins(ScalaJSPlugin)

name := "cloud-manager-app"
version := "1.0.0"
scalaVersion := "2.11.8"
scalacOptions ++= Seq("-unchecked", "-deprecation", "-feature")

libraryDependencies ++= Seq(
  "org.scala-js"  %%% "scalajs-dom"      % "0.9.1",
  "com.mscharley" %%% "scalajs-nodejs"   % "0.1.0"
)

skip in packageJSDependencies := false
scalaJSModuleKind := ModuleKind.CommonJSModule

lazy val ElectronQuickStartSbt = (project in file(".")).
  settings(
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
                        require('./${name.value}-opt.js').CloudConnectionComponent().main();
                     """
        IO.write(file,  code, Charset.forName("UTF-8"))
        Attributed(file)(AttributeMap.empty.put(name.key, mainCl))
      } getOrElse {
        sys.error("Cannot write launcher file, since there is no or multiple mainClasses")
      }
    }
  )