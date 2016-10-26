
import scala.scalajs.js
import js.annotation._
import scala.scalajs.js.annotation.JSExport

/**
  * Created by rajeevprasanna on 10/20/16.
  */
@JSExport("CloudConnectionComponent")
object CloudConnectionComponent extends js.JSApp {

  @ScalaJSDefined
  trait BrowserWindowOptions extends js.Object {
    def width: Double
    def height: Double
  }

  @js.native
  @JSImport("electron", "BrowserWindow")
  class BrowserWindow(options: BrowserWindowOptions) extends js.Object {
    def on(eventName: String, handler: js.Function0[Any]): Unit = js.native
    def openDevTools():Unit = js.native
    def loadUrl(url:String) :Unit = js.native
  }

  val dropboxOAuthUrl = "https://www.dropbox.com/1/oauth2/authorize?client_id=8343b03llcys1pw&response_type=token&redirect_uri=http://localhost:3000/auth/db/callback&state=433"
  var mainWindow:BrowserWindow = null

  @JSExport
  def main() = {
    mainWindow = new BrowserWindow(new BrowserWindowOptions {
      val width = 800.0
      val height = 600.0
    })

    mainWindow.loadUrl(dropboxOAuthUrl)
    mainWindow.openDevTools()
    mainWindow.on("closed", () => {
      mainWindow = null
    })
  }

}
