using Bridge.Html5;
using System;
using System.Collections.Generic;

namespace Bouncy_Ball
{
    /// <summary>
    /// localStorage wrapper to replace System.IO file operations
    /// </summary>
    public static class Storage
    {
        private const string PREFIX = "BouncyBall_";
        private const string SAVES_KEY = PREFIX + "SavesList";
        private const string SAVINGS_KEY = PREFIX + "Savings";

        public static void Initialize()
        {
            // Initialize savings counter if not present
            if (Window.LocalStorage.GetItem(SAVINGS_KEY) == null)
            {
                Window.LocalStorage.SetItem(SAVINGS_KEY, "0");
            }
        }

        public static bool DirectoryExists(string path)
        {
            // Check if save exists
            string key = PathToKey(path);
            return Window.LocalStorage.GetItem(key + "_exists") != null;
        }

        public static void CreateDirectory(string path)
        {
            string key = PathToKey(path);
            Window.LocalStorage.SetItem(key + "_exists", "true");

            // Add to saves list
            var saves = GetSavesList();
            if (!saves.Contains(key))
            {
                saves.Add(key);
                SaveSavesList(saves);
            }
        }

        public static void DeleteDirectory(string path)
        {
            string key = PathToKey(path);
            // Remove all items with this prefix
            var keysToRemove = new List<string>();
            for (int i = 0; i < Window.LocalStorage.Length; i++)
            {
                string k = Window.LocalStorage.Key(i);
                if (k != null && k.StartsWith(key))
                {
                    keysToRemove.Add(k);
                }
            }
            foreach (var k in keysToRemove)
            {
                Window.LocalStorage.RemoveItem(k);
            }

            // Remove from saves list
            var saves = GetSavesList();
            saves.Remove(key);
            SaveSavesList(saves);
        }

        public static bool FileExists(string path)
        {
            string key = PathToKey(path);
            return Window.LocalStorage.GetItem(key) != null;
        }

        public static string ReadAllText(string path)
        {
            string key = PathToKey(path);
            return (string)Window.LocalStorage.GetItem(key) ?? "";
        }

        public static void WriteAllText(string path, string content)
        {
            string key = PathToKey(path);
            Window.LocalStorage.SetItem(key, content);
        }

        public static string[] ReadAllLines(string path)
        {
            string content = ReadAllText(path);
            if (string.IsNullOrEmpty(content))
                return new string[0];
            return content.Split('\n');
        }

        public static void WriteAllLines(string path, string[] lines)
        {
            WriteAllText(path, string.Join("\n", lines));
        }

        public static string[] GetDirectories(string basePath)
        {
            var saves = GetSavesList();
            return saves.ToArray();
        }

        public static int GetSavingsCount()
        {
            string val = (string)Window.LocalStorage.GetItem(SAVINGS_KEY);
            return val != null ? int.Parse(val) : 0;
        }

        public static void SetSavingsCount(int count)
        {
            Window.LocalStorage.SetItem(SAVINGS_KEY, count.ToString());
        }

        public static void IncrementSavingsCount()
        {
            SetSavingsCount(GetSavingsCount() + 1);
        }

        private static string PathToKey(string path)
        {
            // Convert Windows-style paths to storage keys
            // Remove the C:/Users/.../AppData/Local/Michael/Bouncy Ball/ prefix
            string key = path;
            int idx = key.IndexOf("Bouncy Ball/");
            if (idx >= 0)
            {
                key = key.Substring(idx + "Bouncy Ball/".Length);
            }
            // Also handle just the save name
            key = key.Replace("/", "_").Replace("\\", "_").Replace(".txt", "").Replace(".png", "_img");
            return PREFIX + key;
        }

        private static List<string> GetSavesList()
        {
            string json = (string)Window.LocalStorage.GetItem(SAVES_KEY);
            if (string.IsNullOrEmpty(json))
                return new List<string>();

            // Simple parsing - just split by comma
            var list = new List<string>();
            if (!string.IsNullOrEmpty(json))
            {
                foreach (var item in json.Split(','))
                {
                    if (!string.IsNullOrEmpty(item))
                        list.Add(item);
                }
            }
            return list;
        }

        private static void SaveSavesList(List<string> saves)
        {
            Window.LocalStorage.SetItem(SAVES_KEY, string.Join(",", saves));
        }
    }
}
