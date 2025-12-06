using System;

namespace Bouncy_Ball
{
    public class Program
    {
        public static void Main()
        {
            using (var game = new Game1())
            {
                game.Run();
                Bridge.Html5.Document.Body.AppendChild(new Bridge.Html5.HTMLAnchorElement
                {
                    TextContent = "How to Play",
                    Href = "how-to-play.html",
                    ClassName = "help-link",
                    Target = "_blank"
                });
            }
        }
    }
}
