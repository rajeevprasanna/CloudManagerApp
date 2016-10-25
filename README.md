# CloudManagerApp

This is a sample app created to learn electron with scala.js


Run this app with below command :

    npm install && npm start


Error occured with the app start : 
    target/scala-2.11/cloud-manager-app.js.map -> src/main/electron/cloud-manager-app.js.map
    App threw an error during load
    ReferenceError: $i_electron is not defined
        at ta (/Users/rajeevprasanna/Desktop/cloudManager/CloudManagerApp/src/main/electron/file:/Users/rajeevprasanna/Desktop/cloudManager/CloudManagerApp/src/main/scala/CloudConnectionComponent.scala:31:18
        )
        at T.main (/Users/rajeevprasanna/Desktop/cloudManager/CloudManagerApp/src/main/electron/file:/Users/rajeevprasanna/Desktop/cloudManager/CloudManagerApp/src/main/scala/CloudConnectionComponent.scala:29:4)
        at Object.<anonymous> (/Users/rajeevprasanna/Desktop/cloudManager/CloudManagerApp/src/main/electron/cloud-manager-app-launcher.js:22:50)
        at Module._compile (module.js:556:32)
        at Object.Module._extensions..js (module.js:565:10)
        at Module.load (module.js:473:32)
        at tryModuleLoad (module.js:432:12)
        at Function.Module._load (module.js:424:3)
        at loadApplicationPackage (/Users/rajeevprasanna/Desktop/cloudManager/CloudManagerApp/node_modules/electron-prebuilt/dist/Electron.app/Contents/Resources/default_app.asar/main.js:288:12)
        at Object.<anonymous> (/Users/rajeevprasanna/Desktop/cloudManager/CloudManagerApp/node_modules/electron-prebuilt/dist/Electron.app/Contents/Resources/default_app.asar/main.js:330:5)
