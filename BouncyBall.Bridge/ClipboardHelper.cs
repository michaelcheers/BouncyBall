using Bridge;
using Bridge.Html5;
using System;

namespace Bouncy_Ball
{
    public static class ClipboardHelper
    {
        [Template("navigator.clipboard.readText().then({callback})")]
        public static extern void ReadClipboardText(Action<string> callback);
    }
}
