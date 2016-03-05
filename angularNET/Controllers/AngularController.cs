using System.Web.Mvc;

namespace angularNET.Content
{
    public class AngularController : Controller
    {
        public ActionResult Index()
        {
            return new FilePathResult("~/Views/Shared/Layout.html", "text/html");
        }
    }
}
