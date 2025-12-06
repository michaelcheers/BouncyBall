using System;

namespace Bouncy_Ball
{
    public class Program
    {
        public static void Main()
        {
            using (var game = new Game1())
                game.Run();
        }
    }
}
