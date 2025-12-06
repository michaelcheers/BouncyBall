using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Audio;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Bouncy_Ball;
// Removed: Microsoft.Xna.Framework.Media, System.Diagnostics, System.Media, System.Runtime.InteropServices

namespace Bouncy_Ball
{
    enum Button
    {
        NewGame,
        LoadGame,
        Exit
    }
    enum Buttons_Load_File_Right_Click
    {
        Play,
        Delete,
        Rename
    }
    /// <summary>
    /// This is the main type for your game
    /// </summary>
    public class Game1 : Microsoft.Xna.Framework.Game
    {
        SpriteFont spriteFont;
        GraphicsDeviceManager graphics;
        Dictionary<char, Keys[]> keys = new Dictionary<char, Keys[]>(26);
        Dictionary<Keys[], char> capital = new Dictionary<Keys[], char>(26);
        SpriteBatch spriteBatch;
        Texture2D texture;
        Texture2D button;
        string world_name = "";
        bool asking_world_name = false;
        SoundEffect Game_Over;
        SoundEffect Bounce;
        public Game1()
        {
            graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
        }
        protected void CapitilizeKeys()
        {
            int keyscount = keys.Count;
            for (int n = 0; n < keyscount; n++)
            {
                keys.Add(Char.ToUpper(keys.Keys.ToList()[n]), new Keys[] { Keys.LeftShift, keys.Values.ToList()[n][0] });
                capital.Add(new Keys[] { Keys.RightShift, keys.Values.ToList()[n][0] }, Char.ToUpper(keys.Keys.ToList()[n]));
            }
        }
        /// <summary>
        /// Allows the game to perform any initialization it needs to before starting to run.
        /// This is where it can query for any required services and ( any non-graphic
        /// related content.  Calling base.Initialize will enumerate through any components
        /// and initialize them as well.
        /// </summary>
        protected override void Initialize()
        {
            // TODO: Add your initialization logic here
            saved_game_destnation = saved_game_code;
            actualColor = ballColor;
            actualMultiplayerColor = multiplayerColor;
            keys.Add('a', new Keys[] { Keys.A });
            keys.Add('b', new Keys[] { Keys.B });
            keys.Add('c', new Keys[] { Keys.C });
            keys.Add('d', new Keys[] { Keys.D });
            keys.Add('e', new Keys[] { Keys.E });
            keys.Add('f', new Keys[] { Keys.F });
            keys.Add('g', new Keys[] { Keys.G });
            keys.Add('h', new Keys[] { Keys.H });
            keys.Add('i', new Keys[] { Keys.I });
            keys.Add('j', new Keys[] { Keys.J });
            keys.Add('k', new Keys[] { Keys.K });
            keys.Add('l', new Keys[] { Keys.L });
            keys.Add('m', new Keys[] { Keys.M });
            keys.Add('n', new Keys[] { Keys.N });
            keys.Add('o', new Keys[] { Keys.O });
            keys.Add('p', new Keys[] { Keys.P });
            keys.Add('q', new Keys[] { Keys.Q });
            keys.Add('r', new Keys[] { Keys.R });
            keys.Add('s', new Keys[] { Keys.S });
            keys.Add('t', new Keys[] { Keys.T });
            keys.Add('u', new Keys[] { Keys.U });
            keys.Add('v', new Keys[] { Keys.V });
            keys.Add('w', new Keys[] { Keys.W });
            keys.Add('x', new Keys[] { Keys.X });
            keys.Add('y', new Keys[] { Keys.Y });
            keys.Add('z', new Keys[] { Keys.Z });
            //CapitilizeKeys();
            keys.Add(' ', new Keys[] { Keys.Space });
            // Initialize localStorage
            Storage.Initialize();
            base.Initialize();
        }
        protected void StartPlaying(GameTime gameTime)
        {
            if (!CanPerformAction()) return;
            if (sound_playing_temp)
                instance.Play();
            playing = true;
        }
        protected void StopPlaying(GameTime gameTime)
        {
            if (!CanPerformAction()) return;
            instance.Stop();
            playing = false;
        }
        SoundEffect Music;
        SoundEffectInstance instance;
        Texture2D ball;
        Texture2D black_ball;
        bool sound_playing_temp;
        // Debounce helper - tracks last action time
        private double lastActionTime = 0;
        private bool CanPerformAction()
        {
            double now = Bridge.Html5.Window.Performance.Now();
            if (now - lastActionTime > 250)
            {
                lastActionTime = now;
                return true;
            }
            return false;
        }
        /// <summary>
        /// LoadContent will be called once per game and is the place to load
        /// all of your content.
        /// </summary>
        protected override void LoadContent()
        {
            spriteFont = Content.Load<SpriteFont>("Arial");
            ball = Content.Load<Texture2D>("ball");
            black_ball = Content.Load<Texture2D>("black ball");
            Game_Over = Content.Load<SoundEffect>("Reject 2");
            Bounce = Content.Load<SoundEffect>("bounce");
            Music = Content.Load<SoundEffect>("on the floor");
            instance = Music.CreateInstance();
            button = Content.Load<Texture2D>("Button");
            // Create a new SpriteBatch, which can be used to draw textures.
            spriteBatch = new SpriteBatch(GraphicsDevice);

            instance.IsLooped = true;
            this.IsMouseVisible = true;
            if (Environment.GetCommandLineArgs().Length > 1)
            {
                while (true)
                {
                    try
                    {
                        Load(Environment.GetCommandLineArgs().Last());
                        break;
                    }
                    catch
                    {
                    }
                }
            }
            // TODO: use this.Content to load your game content here
        }
        // DllImport not supported in browser
        // [DllImport("user32.dll", CharSet = CharSet.Auto, ExactSpelling = true, CallingConvention = CallingConvention.Winapi)]
        // public static extern short GetKeyState(int keyCode);
        public static short GetKeyState(int keyCode) { return 0; } // Stub
        protected bool BeingPressed(Keys[] key)
        {
            bool result = true;
            foreach (Keys k in key)
            {
                if (Keyboard.GetState().IsKeyUp(k))
                {
                    result = false;
                }
            }
            return result;
        }
        protected void SaveTo(string savingdirectory)
        {
            Storage.CreateDirectory(savingdirectory);
            Storage.WriteAllText(savingdirectory + "/PlayingSound.txt", (instance.State == SoundState.Playing).ToString());
            Storage.WriteAllText(savingdirectory + "/FullScreen.txt", graphics.IsFullScreen.ToString());
            Storage.WriteAllText(savingdirectory + "/distance.txt", distance.ToString());
            // Skip texture save - not supported in browser, will use default ball
            Storage.WriteAllText(savingdirectory + "/MouseMoveBasePlayer.txt", MouseMoveBasePlayer.ToString());
            Storage.WriteAllText(savingdirectory + "/FollowBackroundColor.txt", FollowBackgroundColor.ToString());
            Storage.WriteAllText(savingdirectory + "/clear.txt", clear.ToString());
            Storage.WriteAllText(savingdirectory + "/multiplayercontrolsenabled.txt", multiplayercontrolsenabled.ToString());
            Storage.WriteAllText(savingdirectory + "/controlsenabled.txt", controlsenabled.ToString());
            Storage.WriteAllText(savingdirectory + "/enabled.txt", enabled.ToString());
            Storage.WriteAllText(savingdirectory + "/multiplayeredgeofscreendie.txt", multiplayeredgeofscreendie.ToString());
            Storage.WriteAllText(savingdirectory + "/multiplayer.txt", multiplayer.ToString());
            Storage.WriteAllText(savingdirectory + "/multiplayerx.txt", multiplayerx.ToString());
            Storage.WriteAllText(savingdirectory + "/multiplayery.txt", multiplayery.ToString());
            Storage.WriteAllText(savingdirectory + "/name.txt", name);
            Storage.WriteAllText(savingdirectory + "/world_name.txt", world_name);
            Storage.WriteAllText(savingdirectory + "/multiplayervx.txt", multiplayervx.ToString());
            Storage.WriteAllText(savingdirectory + "/edgeofscreenlose.txt", edgeofscreenlose.ToString());
            Storage.WriteAllText(savingdirectory + "/bouncy.txt", bouncy.ToString());
            Storage.WriteAllText(savingdirectory + "/x.txt", x.ToString());
            Storage.WriteAllText(savingdirectory + "/y.txt", y.ToString());
            Storage.WriteAllText(savingdirectory + "/vx.txt", vx.ToString());
            Storage.WriteAllText(savingdirectory + "/vy.txt", vy.ToString());
            Storage.WriteAllText(savingdirectory + "/Cpu_Multiplayer.txt", Cpu_Multiplayer.ToString());
            Storage.WriteAllText(savingdirectory + "/Cpu_vx.txt", Cpu_vx.ToString());
            Storage.WriteAllText(savingdirectory + "/Cpu_vy.txt", Cpu_vy.ToString());
            Storage.WriteAllText(savingdirectory + "/Cpu_y.txt", Cpu_y.ToString());
            Storage.WriteAllText(savingdirectory + "/Cpu_x.txt", Cpu_x.ToString());
            Storage.WriteAllText(savingdirectory + "/drag.txt", xdrag.ToString());
            Storage.WriteAllText(savingdirectory + "/accel.txt", accel.ToString());
            Storage.WriteAllText(savingdirectory + "/gravity.txt", gravity.ToString());
            Storage.WriteAllText(savingdirectory + "/gravity_effect.txt", gravity_effect.ToString());
            Storage.WriteAllText(savingdirectory + "/blue.txt", blue.ToString());
            Storage.WriteAllText(savingdirectory + "/game_overred.txt", game_overed.ToString());
            Storage.WriteAllText(savingdirectory + "/StopWhenNotMoving.txt", StopWhenNotMoving.ToString());
            Storage.WriteAllText(savingdirectory + "/UpdateBackgroundColor.txt", UpdateBackgroundColor.ToString());
            Storage.WriteAllText(savingdirectory + "/MultiplayerDieMultiplayerDissipear.txt", MultiplayerDieMultiplayerDissipear.ToString());
            Storage.WriteAllText(savingdirectory + "/alpha.txt", alpha.ToString());
            Storage.WriteAllText(savingdirectory + "/BackroundColor.txt", BackroundColor.A + "\n" + BackroundColor.B + "\n" + BackroundColor.G + "\n" + BackroundColor.R);
            Storage.WriteAllText(savingdirectory + "/ballColor.txt", ballColor.A + "\n" + ballColor.B + "\n" + ballColor.G + "\n" + ballColor.R);
            Storage.WriteAllText(savingdirectory + "/actualColor.txt", actualColor.A + "\n" + actualColor.B + "\n" + actualColor.G + "\n" + actualColor.R);
            Storage.WriteAllText(savingdirectory + "/multiplayerColor.txt", multiplayerColor.A + "\n" + multiplayerColor.B + "\n" + multiplayerColor.G + "\n" + multiplayerColor.R);
            Storage.WriteAllText(savingdirectory + "/actualMultiplayerColor.txt", actualMultiplayerColor.A + "\n" + actualMultiplayerColor.B + "\n" + actualMultiplayerColor.G + "\n" + actualMultiplayerColor.R);
            Storage.IncrementSavingsCount();
        }
        protected void Load(string s)
        {
            looking_at_saved_games = false;
            MouseMoveBasePlayer = Convert.ToBoolean(Storage.ReadAllText(s + "/MouseMoveBasePlayer.txt"));
            sound_playing_temp = Storage.ReadAllText(s + "/PlayingSound.txt") == "True";
            full_screen_temp = Storage.ReadAllText(s + "/FullScreen.txt") == "True";
            if (!Storage.FileExists(s + "/distance.txt"))
                Storage.WriteAllText(s + "/distance.txt", "0");
            // Texture loading not supported in browser - use default ball
            texture = ball;
            distance = float.Parse(Storage.ReadAllText(s + "/distance.txt"));
            FollowBackgroundColor = Convert.ToBoolean(Storage.ReadAllText(s + "/FollowBackroundColor.txt"));
            clear = Convert.ToBoolean(Storage.ReadAllText(s + "/clear.txt"));
            multiplayercontrolsenabled = Convert.ToBoolean(Storage.ReadAllText(s + "/multiplayercontrolsenabled.txt"));
            controlsenabled = Convert.ToBoolean(Storage.ReadAllText(s + "/controlsenabled.txt"));
            enabled = Convert.ToBoolean(Storage.ReadAllText(s + "/enabled.txt"));
            multiplayeredgeofscreendie = Convert.ToBoolean(Storage.ReadAllText(s + "/multiplayeredgeofscreendie.txt"));
            multiplayer = Convert.ToBoolean(Storage.ReadAllText(s + "/multiplayer.txt"));
            multiplayerx = float.Parse(Storage.ReadAllText(s + "/multiplayerx.txt"));
            multiplayery = float.Parse(Storage.ReadAllText(s + "/multiplayery.txt"));
            asking_world_name = true;
            multiplayervx = float.Parse(Storage.ReadAllText(s + "/multiplayervx.txt"));
            edgeofscreenlose = Convert.ToBoolean(Storage.ReadAllText(s + "/edgeofscreenlose.txt"));
            bouncy = Convert.ToBoolean(Storage.ReadAllText(s + "/bouncy.txt"));
            x = float.Parse(Storage.ReadAllText(s + "/x.txt"));
            this.y = float.Parse(Storage.ReadAllText(s + "/y.txt"));
            vx = float.Parse(Storage.ReadAllText(s + "/vx.txt"));
            vy = float.Parse(Storage.ReadAllText(s + "/vy.txt"));
            Cpu_Multiplayer = Convert.ToBoolean(Storage.ReadAllText(s + "/Cpu_Multiplayer.txt"));
            Cpu_vx = float.Parse(Storage.ReadAllText(s + "/Cpu_vx.txt"));
            Cpu_vy = float.Parse(Storage.ReadAllText(s + "/Cpu_vy.txt"));
            Cpu_y = float.Parse(Storage.ReadAllText(s + "/Cpu_y.txt"));
            Cpu_x = float.Parse(Storage.ReadAllText(s + "/Cpu_x.txt"));
            xdrag = float.Parse(Storage.ReadAllText(s + "/drag.txt"));
            ydrag = xdrag;
            accel = float.Parse(Storage.ReadAllText(s + "/accel.txt"));
            gravity = float.Parse(Storage.ReadAllText(s + "/gravity.txt"));
            gravity_effect = float.Parse(Storage.ReadAllText(s + "/gravity_effect.txt"));
            blue = float.Parse(Storage.ReadAllText(s + "/blue.txt"));
            game_overed = Convert.ToBoolean(Storage.ReadAllText(s + "/game_overred.txt"));
            StopWhenNotMoving = Convert.ToBoolean(Storage.ReadAllText(s + "/StopWhenNotMoving.txt"));
            UpdateBackgroundColor = Convert.ToBoolean(Storage.ReadAllText(s + "/UpdateBackgroundColor.txt"));
            MultiplayerDieMultiplayerDissipear = Convert.ToBoolean(Storage.ReadAllText(s + "/MultiplayerDieMultiplayerDissipear.txt"));
            alpha = byte.Parse(Storage.ReadAllText(s + "/alpha.txt"));
            string[] BackroundColors = Storage.ReadAllLines(s + "/BackroundColor.txt");
            BackroundColor = new Color(byte.Parse(BackroundColors[3]), byte.Parse(BackroundColors[2]), byte.Parse(BackroundColors[1]), byte.Parse(BackroundColors[0]));
            string[] ballColors = Storage.ReadAllLines(s + "/ballColor.txt");
            ballColor = new Color(byte.Parse(ballColors[3]), byte.Parse(ballColors[2]), byte.Parse(ballColors[1]), byte.Parse(ballColors[0]));
            string[] actualColors = Storage.ReadAllLines(s + "/actualColor.txt");
            actualColor = new Color(byte.Parse(actualColors[3]), byte.Parse(actualColors[2]), byte.Parse(actualColors[1]), byte.Parse(actualColors[0]));
            string[] multiplayerColors = Storage.ReadAllLines(s + "/multiplayerColor.txt");
            multiplayerColor = new Color(byte.Parse(multiplayerColors[3]), byte.Parse(multiplayerColors[2]), byte.Parse(multiplayerColors[1]), byte.Parse(multiplayerColors[0]));
            string[] actualMultiplayerColors = Storage.ReadAllLines(s + "/actualMultiplayerColor.txt");
            actualMultiplayerColor = new Color(byte.Parse(actualMultiplayerColors[3]), byte.Parse(actualMultiplayerColors[2]), byte.Parse(actualMultiplayerColors[1]), byte.Parse(actualMultiplayerColors[0]));
            asking_world_name = true;
            this.spriteBatch.End();
        }
        protected void Close()
        {
            // Process not available in browser - just exit the game
            this.Exit();
        }
        /// <summary>
        /// UnloadContent will be called once per game and is the place to unload
        /// all content.
        /// </summary>
        protected override void UnloadContent()
        {
            // TODO: Unload any non ContentManager content here
        }

        /// <summary>
        /// Allows the game to run logic such as updating the world,
        /// checking for collisions, gathering input, and playing audio.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Update(GameTime gameTime)
        {
            // Allows the game to exit
            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed)
                this.Exit();

            // TODO: Add your update logic here

            base.Update(gameTime);
        }
        bool comma_pressed_last_frame = false;
        bool looking_at_saved_games = false;
        bool MouseMoveBasePlayer = false;
        bool FollowBackgroundColor = false;
        bool clear = true;
        bool multiplayercontrolsenabled = true;
        bool windows_pressed_last_frame = false;
        bool asking_name = true;
        bool controlsenabled = true;
        bool enabled = true;
        bool multiplayeredgeofscreendie = false;
        bool multiplayer = false;
        bool played_music_last_frame = false;
        float multiplayerx = 0f;
        float multiplayery = 0f;
        bool Multiplayer_Moved = false;
        string name = "";
        float multiplayervx = 0f;
        bool from_saved_game_code = false;
        float multiplayervy = 0f;
        bool edgeofscreenlose = false;
        bool bouncy = false;
        bool subtract_Pressed_Last_Frame = false;
        bool autosave = true;
        string[] world_names;
        string[] names;
        string saved_game_code = "K.w.tyn.hflsor...thgr";
        string saved_game_destnation;
        float x = 0;
        float y = 0;
        float vx = 0;
        float speed = 0;
        float vy = 0;
        bool Cpu_Multiplayer = false;
        float Cpu_vx = 0;
        float Cpu_vy = 0;
        float Cpu_x = 0;
        float Cpu_y = 0;
        float xdrag = 0.99f;
        float ydrag = 0.99f;
        float accel = 0.1f;
        float gravity = 0f;
        float gravity_effect = 0f;
        float blue = 1f;
        bool playing = false;
        bool game_overed = false;
        bool moved = false;
        bool StopWhenNotMoving = false;
        bool UpdateBackgroundColor = true;
        Vector2[] buttons = new Vector2[] { new Vector2(92.5f, 42.5f), new Vector2(142.5f, 117f), new Vector2(92.5f, 160f) };
        Vector2[] buttons_right_click_load_file = new Vector2[] { new Vector2(92.5f, 42.5f), new Vector2(142.5f, 117f), new Vector2(92.5f, 160f) };
        bool MultiplayerDieMultiplayerDissipear = false;
        bool Cpu_Moved = false;
        byte alpha = 255;
        string[] saved_games;
        Color BackroundColor = Color.White;
        Color actualColor;
        Color ballColor = Color.White;
        Color multiplayerColor = Color.White;
        Color actualMultiplayerColor;
        Random random = new Random();
        bool L_Pressed_Last_Frame = false;
        float distance = 0f;
        bool Multiply_Pressed_Last_Frame = false;
        // BlendState and SpriteSortMode not supported in Bridge - using defaults
        int secs = 0;
        bool full_screen_temp = false;
        float maximun = 0;
        protected float MakeFloatPerfect(float input)
        {
            return ((float)Math.Round(input * 100) / 100);
        }
        protected void Save()
        {
            string savingdirectory = Storage.GetSavingsCount().ToString();
            SaveTo(savingdirectory);
        }
        // OnExiting not supported in browser
        // protected override void OnExiting(Object sender, EventArgs args)
        // {
        //     if (playing && autosave)
        //         Save();
        //     base.OnExiting(sender, args);
        // }
        protected float MakeGravityPerfect(float input)
        {
            return ((float)Math.Round(input * 10000) / 10000);
        }
        public bool tag, last_tag;
        private bool _firstDraw;
        /// <summary>
        /// This is called when the game should draw itself.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Draw(GameTime gameTime)
        {
            if (!_firstDraw)
            {
                Bridge.Html5.Document.Body.AppendChild(new Bridge.Html5.HTMLAnchorElement
                {
                    TextContent = "How to Play",
                    Href = "how-to-play.html",
                    ClassName = "help-link",
                    Target = "_blank"
                });
                _firstDraw = true;
            }
            if (asking_world_name)
            {
                GraphicsDevice.Clear(Color.Red);
            }
            if (playing)
            {
                if (clear)
                {
                    if (enabled)
                    {
                        // TODO: Add your drawing code here

                        if (UpdateBackgroundColor)
                        {
                            BackroundColor = new Color((float)(Math.Cos(x * 0.01f) + 1) / 2, (float)(Math.Cos(y * 0.01f) + 1) / 2, blue, alpha);
                        }
                        GraphicsDevice.Clear(BackroundColor);
                        if (FollowBackgroundColor)
                        {
                            ballColor = new Color((float)(Math.Cos(x * 0.01f) + 1) / 2, (float)(Math.Cos(y * 0.01f) + 1) / 2, blue, alpha);
                            actualColor = ballColor;
                        }

                        moved = false;
                        spriteBatch.Begin();
                        spriteBatch.Draw(texture, new Vector2(x, y), ballColor);
                        spriteBatch.DrawString(spriteFont, "Speed: " + speed + "pix/frame", new Vector2(GraphicsDevice.Viewport.Width - 250, 0), Color.Green);
                        spriteBatch.DrawString(spriteFont, "Maximun Speed: " + maximun + "pix/frame", new Vector2(GraphicsDevice.Viewport.Width - 250, 15), Color.Green);
                        spriteBatch.DrawString(spriteFont, "Elevation: " + (-y + GraphicsDevice.Viewport.Height) + "pix", new Vector2(GraphicsDevice.Viewport.Width - 250, 30), Color.Green);
                        spriteBatch.DrawString(spriteFont, "Distance: " + distance + "pix", new Vector2(GraphicsDevice.Viewport.Width - 250, 45), Color.Green);

                        if (gravity != 0)
                            spriteBatch.DrawString(spriteFont, "Gravity: " + MakeGravityPerfect(gravity) + "pix/frame", new Vector2(GraphicsDevice.Viewport.Width - 250, 60), Color.Green);

                        if (multiplayer)
                        {
                            spriteBatch.Draw(ball, new Vector2(multiplayerx, multiplayery), multiplayerColor);
                        }
                        if (Cpu_Multiplayer)
                        {
                            spriteBatch.Draw(ball, new Vector2(Cpu_x, Cpu_y), Color.White);
                        }
                        spriteBatch.End();
                    }
                    x += vx;
                    y += vy;
                    y += gravity_effect;
                    if (Cpu_Multiplayer)
                    {
                        Cpu_Moved = false;
                        if (vx > 0)
                        {
                            Cpu_vx += accel;
                            Cpu_Moved = true;
                        }
                        else if (vx < 0)
                        {
                            Cpu_vx -= accel;
                            Cpu_Moved = true;
                        }
                        if (vy > 0)
                        {
                            Cpu_vy += accel;
                            Cpu_Moved = true;
                        }
                        else if (vy < 0)
                        {
                            Cpu_vy -= accel;
                            Cpu_Moved = true;
                        }
                        Cpu_x += Cpu_vx;
                        Cpu_y += Cpu_vy;
                        if (Cpu_x >= GraphicsDevice.Viewport.Bounds.Width)
                        {
                            if (bouncy)
                            {
                                Cpu_vx = Cpu_vx - (Cpu_vx * 2);
                                Bounce.Play();
                            }
                            else
                            {
                                Cpu_x = -texture.Width;
                            }
                        }
                        else if (Cpu_x < -texture.Width)
                        {
                            if (bouncy)
                            {
                                Cpu_vx = (float)Math.Abs(Cpu_vx);
                                Bounce.Play();
                            }
                            else
                            {
                                Cpu_x = GraphicsDevice.Viewport.Bounds.Width;
                            }
                        }
                        if (Cpu_y >= GraphicsDevice.Viewport.Bounds.Height)
                        {
                            if (bouncy)
                            {
                                Cpu_vy = Cpu_vy - (Cpu_vy * 2);
                                Bounce.Play();
                            }
                            else
                            {
                                Cpu_y = -texture.Height;
                            }
                        }
                        else if (Cpu_y < -texture.Height)
                        {
                            if (bouncy)
                            {
                                Cpu_vy = (float)Math.Abs(Cpu_vy);
                                Bounce.Play();
                            }
                            else
                            {
                                Cpu_y = GraphicsDevice.Viewport.Bounds.Height;
                            }
                        }
                        if (StopWhenNotMoving && !Cpu_Moved)
                        {
                            Cpu_vx = 0;
                            Cpu_vy = 0;
                        }
                        Cpu_vy *= ydrag;
                        Cpu_vx *= xdrag;
                        Cpu_vy += gravity;
                    }
                }
                if (!multiplayer)
                {
                    if (controlsenabled)
                    {
                        if (Keyboard.GetState().IsKeyDown(Keys.Left) || Keyboard.GetState().IsKeyDown(Keys.A))
                        {
                            vx -= accel;
                            moved = true;
                        }
                        if (Keyboard.GetState().IsKeyDown(Keys.Right) || Keyboard.GetState().IsKeyDown(Keys.D))
                        {
                            vx += accel;
                            moved = true;
                        }
                        if (Keyboard.GetState().IsKeyDown(Keys.Up) || Keyboard.GetState().IsKeyDown(Keys.W))
                        {
                            vy -= accel;
                            moved = true;
                        }
                        if (Keyboard.GetState().IsKeyDown(Keys.Down) || Keyboard.GetState().IsKeyDown(Keys.S))
                        {
                            vy += accel;
                            moved = true;
                        }
                    }
                }
                else
                {
                    multiplayerx += multiplayervx;
                    multiplayery += multiplayervy;
                    if (controlsenabled)
                    {
                        Multiplayer_Moved = false;
                        if (multiplayercontrolsenabled)
                        {
                            if (Keyboard.GetState().IsKeyDown(Keys.Left))
                            {
                                vx -= accel;
                                moved = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.A))
                            {
                                multiplayervx -= 0.1f;
                                Multiplayer_Moved = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.Right))
                            {
                                vx += accel;
                                moved = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.D))
                            {
                                multiplayervx += 0.1f;
                                Multiplayer_Moved = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.Up))
                            {
                                vy -= accel;
                                moved = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.W))
                            {
                                multiplayervy -= 0.1f;
                                Multiplayer_Moved = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.Down))
                            {
                                vy += accel;
                                moved = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.S))
                            {
                                multiplayervy += 0.1f;
                                Multiplayer_Moved = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.LeftShift))
                            {
                                multiplayeredgeofscreendie = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.RightShift))
                            {
                                edgeofscreenlose = true;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.LeftControl) && !Keyboard.GetState().IsKeyDown(Keys.T))
                            {
                                multiplayeredgeofscreendie = false;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.LeftControl) && Keyboard.GetState().IsKeyDown(Keys.T))
                            {
                                if (!last_tag)
                                    tag = !tag;
                                last_tag = true;
                            }
                            else
                                last_tag = false;
                            if (Keyboard.GetState().IsKeyDown(Keys.RightControl))
                            {
                                edgeofscreenlose = false;
                            }

                            if (Keyboard.GetState().IsKeyDown(Keys.CapsLock))
                            {
                                if (multiplayerColor != Color.Transparent)
                                {
                                    multiplayerColor = new Color(random.Next(256), random.Next(256), random.Next(256), random.Next(256));
                                    actualMultiplayerColor = multiplayerColor;
                                }
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.F5))
                            {
                                multiplayerColor = Color.Transparent;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.F6))
                            {
                                multiplayerColor = actualMultiplayerColor;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.F7))
                            {
                                if (multiplayerColor != Color.Transparent)
                                {
                                    multiplayerColor = Color.White;
                                    actualMultiplayerColor = Color.White;
                                }
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.F8))
                            {
                                if (multiplayerColor != Color.Transparent)
                                {
                                    multiplayerColor = Color.Black;
                                    actualMultiplayerColor = Color.Black;
                                }
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.F9))
                            {
                                if (multiplayerColor != Color.Transparent)
                                {
                                    multiplayerColor = Color.HotPink;
                                    actualMultiplayerColor = Color.HotPink;
                                }
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.F10))
                            {
                                multiplayerx = 0;
                                multiplayery = 0;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.F11))
                            {
                                multiplayerx = GraphicsDevice.Viewport.Bounds.Width / 2;
                                multiplayery = GraphicsDevice.Viewport.Bounds.Height / 2;
                            }
                            if (Keyboard.GetState().IsKeyDown(Keys.Delete))
                            {
                                multiplayervx = 0;
                                multiplayervy = 0;
                            }

                        }
                        /*if (Math.Sqrt((multiplayerx - x) * (multiplayerx - x)) + ((multiplayery - y) * (multiplayery - y)) <= 16)
                        {
                            vx -= -vx;
                            vy -= -vy;
                            multiplayervy = -multiplayervy;
                            multiplayervx = -multiplayervx;
                        }*/
                    }
                    if (multiplayerx >= GraphicsDevice.Viewport.Bounds.Width)
                    {
                        if (multiplayeredgeofscreendie)
                        {
                            if (MultiplayerDieMultiplayerDissipear)
                            {
                                multiplayer = false;
                            }
                            else
                            {
                                multiplayervx = 0;
                                multiplayervy = 0;
                                multiplayerx = 0;
                                multiplayery = 0;
                                multiplayer = false;
                                multiplayer = true;
                            }
                        }
                        else if (bouncy)
                        {
                            multiplayervx = multiplayervx - (multiplayervx * 2);
                            Bounce.Play();
                        }
                        else
                        {
                            multiplayerx = -texture.Width;
                        }
                    }
                    else if (multiplayerx < -texture.Width)
                    {
                        if (multiplayeredgeofscreendie)
                        {
                            if (MultiplayerDieMultiplayerDissipear)
                            {
                                multiplayer = false;
                            }
                            else
                            {
                                multiplayervx = 0;
                                multiplayervy = 0;
                                multiplayerx = 0;
                                multiplayery = 0;
                                multiplayer = false;
                                multiplayer = true;
                            }
                        }
                        else if (bouncy)
                        {
                            multiplayervx = (float)Math.Abs(multiplayervx);
                            Bounce.Play();
                        }
                        else
                        {
                            multiplayerx = GraphicsDevice.Viewport.Bounds.Width;
                        }
                    }
                    if (multiplayery >= GraphicsDevice.Viewport.Bounds.Height)
                    {
                        if (multiplayeredgeofscreendie)
                        {
                            if (MultiplayerDieMultiplayerDissipear)
                            {
                                multiplayer = false;
                            }
                            else
                            {
                                multiplayervx = 0;
                                multiplayervy = 0;
                                multiplayerx = 0;
                                multiplayery = 0;
                                multiplayer = false;
                                multiplayer = true;
                            }
                            multiplayer = true;
                        }
                        else if (bouncy)
                        {
                            multiplayervy = multiplayervy - (multiplayervy * 2);
                            Bounce.Play();
                        }
                        else
                        {
                            multiplayery = -texture.Height;
                        }
                    }
                    else if (multiplayery < -texture.Height)
                    {
                        if (multiplayeredgeofscreendie)
                        {
                            if (MultiplayerDieMultiplayerDissipear)
                            {
                                multiplayer = false;
                            }
                            else
                            {
                                multiplayervx = 0;
                                multiplayervy = 0;
                                multiplayerx = 0;
                                multiplayery = 0;
                                multiplayer = false;
                                multiplayer = true;
                            }
                        }
                        else if (bouncy)
                        {
                            multiplayervy = (float)Math.Abs(multiplayervy);
                            Bounce.Play();
                        }
                        else
                        {
                            multiplayery = GraphicsDevice.Viewport.Bounds.Height;
                        }
                    }
                    if (StopWhenNotMoving && !Multiplayer_Moved)
                    {
                        multiplayervx = 0;
                        multiplayervy = 0;
                    }
                    multiplayervy *= ydrag;
                    multiplayervx *= xdrag;
                    multiplayervy += gravity;
                }

                if (controlsenabled)
                {
                    if (Keyboard.GetState().IsKeyDown(Keys.D6) || Keyboard.GetState().IsKeyDown(Keys.NumPad6))
                    {
                        StopWhenNotMoving = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.D7) || Keyboard.GetState().IsKeyDown(Keys.NumPad7))
                    {
                        StopWhenNotMoving = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.D4) || Keyboard.GetState().IsKeyDown(Keys.NumPad4))
                    {
                        clear = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.NumPad5) || Keyboard.GetState().IsKeyDown(Keys.D5))
                    {
                        clear = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.T) && !Keyboard.GetState().IsKeyDown(Keys.LeftControl))
                    {
                        x = random.Next(0, GraphicsDevice.Viewport.Bounds.Width + 1);
                        y = random.Next(0, GraphicsDevice.Viewport.Bounds.Height + 1);
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.C))
                    {
                        int a = random.Next(0, 256);
                        int b = random.Next(0, 256);
                        int c = random.Next(0, 256);
                        int d = random.Next(0, 256);
                        if (ballColor != Color.Transparent)
                        {
                            ballColor = new Color(a, b, c, d);
                        }
                        actualColor = new Color(a, b, c, d);
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Enter))
                    {
                        int a = random.Next(0, 256);
                        int b = random.Next(0, 256);
                        int c = random.Next(0, 256);
                        int d = random.Next(0, 256);
                        if (ballColor != Color.Transparent)
                        {
                            ballColor = new Color(a, b, c, d);
                        }
                        actualColor = new Color(a, b, c, d);
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemQuotes))
                    {
                        actualColor = new Color(random.Next(0, 256), random.Next(0, 256), random.Next(0, 256), ballColor.A);
                        if (ballColor != Color.Transparent)
                        {
                            ballColor = actualColor;
                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.B))
                    {
                        x = 0;
                        y = 0;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.M))
                    {
                        x = GraphicsDevice.Viewport.Bounds.Width / 2;
                        y = GraphicsDevice.Viewport.Bounds.Height / 2;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.I))
                    {
                        ballColor = Color.Transparent;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.H))
                    {
                        ballColor = actualColor;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.P))
                    {
                        if (!(ballColor == Color.Transparent))
                        {
                            ballColor = Color.HotPink;
                        }
                        actualColor = ballColor;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.X))
                    {
                        vx = 0;
                        vy = 0;
                        gravity_effect = 0;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.E) || Keyboard.GetState().IsKeyDown(Keys.Escape))
                    {
                        if (autosave)
                            Save();
                        playing = false;
                        instance.Stop();
                        asking_world_name = false;
                        asking_name = false;
                        if (graphics.IsFullScreen)
                        {
                            graphics.ToggleFullScreen();
                        }
                        // Debounce handled by button state tracking
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.V))
                    {
                        bouncy = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Z))
                    {
                        bouncy = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.L))
                    {
                        if (!L_Pressed_Last_Frame)
                        {
                            vx = -vx;
                            vy = -vy;
                            Bounce.Play();
                        }
                        L_Pressed_Last_Frame = true;
                    }
                    if (Keyboard.GetState().IsKeyUp(Keys.L))
                    {
                        L_Pressed_Last_Frame = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.N))
                    {
                        gravity += 0.001f;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.O))
                    {
                        if (!(gravity <= 0))
                        {
                            gravity -= 0.001f;
                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Q))
                    {
                        if (ballColor != Color.Transparent)
                        {
                            ballColor = Color.White;
                        }
                        actualColor = Color.White;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.R))
                    {
                        gravity = 0;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.J))
                    {
                        xdrag = 1f;
                        ydrag = 1f;
                    }
                }
                if (Keyboard.GetState().IsKeyDown(Keys.Space))
                {
                    if (graphics.IsFullScreen == true)
                    {
                        graphics.ToggleFullScreen();
                    }
                    texture = ball;
                    maximun = 0;
                    distance = 0;
                    Cpu_Moved = false;
                    Cpu_Multiplayer = false;
                    Cpu_vx = 0;
                    Cpu_vy = 0;
                    game_overed = false;
                    instance.Stop();
                    instance.Play();
                    UpdateBackgroundColor = true;
                    StopWhenNotMoving = false;
                    clear = true;
                    xdrag = 0.99f;
                    ydrag = 0.99f;
                    ballColor = Color.White;
                    actualColor = Color.White;
                    accel = 0.1f;
                    gravity_effect = 0;
                    gravity = 0;
                    x = 0;
                    y = 0;
                    vx = 0;
                    vy = 0;
                    bouncy = false;
                    blue = 1;
                    edgeofscreenlose = false;
                    multiplayer = false;
                    multiplayerx = 0;
                    multiplayery = 0;
                    enabled = true;
                    controlsenabled = true;
                    multiplayervy = 0;
                    multiplayervx = 0;
                    multiplayeredgeofscreendie = false;
                    multiplayerColor = Color.White;
                    actualMultiplayerColor = Color.White;
                    multiplayercontrolsenabled = true;
                    FollowBackgroundColor = false;
                }
                if (controlsenabled)
                {
                    if (Keyboard.GetState().IsKeyDown(Keys.LeftAlt) || Keyboard.GetState().IsKeyDown(Keys.RightAlt))
                    {
                        multiplayer = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.U))
                    {
                        xdrag = 0.99f;
                        ydrag = 0.99f;
                    }
                    if ((Keyboard.GetState().IsKeyDown(Keys.K)))
                    {
                        if (!(blue == 255))
                        {
                            blue += 127 / 2;
                        }
                    }
                    if ((Keyboard.GetState().IsKeyDown(Keys.F)))
                    {
                        if ((!(blue == 0)))
                        {
                            blue -= 127 / 2;
                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Y))
                    {
                        multiplayer = true;
                        multiplayerColor = Color.White;
                        actualMultiplayerColor = Color.White;
                        multiplayeredgeofscreendie = false;
                        multiplayervx = 0;
                        multiplayervy = 0;
                        multiplayerx = 0;
                        multiplayery = 0;
                    }

                    if (!multiplayer)
                    {
                        if (Keyboard.GetState().IsKeyDown(Keys.LeftShift) || Keyboard.GetState().IsKeyDown(Keys.RightShift))
                        {
                            edgeofscreenlose = true;
                        }

                        if ((Keyboard.GetState().IsKeyDown(Keys.LeftControl) || Keyboard.GetState().IsKeyDown(Keys.RightControl)) && !Keyboard.GetState().IsKeyDown(Keys.T))
                        {
                            edgeofscreenlose = false;
                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.G))
                    {
                        ballColor = Color.Black;
                        actualColor = Color.Black;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.F1))
                    {
                        enabled = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.F2))
                    {
                        enabled = true;
                        edgeofscreenlose = false;
                        game_overed = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.F3))
                    {
                        controlsenabled = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemPeriod))
                    {
                        MouseMoveBasePlayer = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemQuestion))
                    {
                        MouseMoveBasePlayer = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Divide))
                    {
                        UpdateBackgroundColor = false;
                        BackroundColor = new Color(random.Next(0, 256), random.Next(0, 256), random.Next(0, 256));
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Tab))
                    {
                        multiplayerx = 0;
                        multiplayery = 0;
                        multiplayer = true;
                        multiplayervx = 0;
                        multiplayervy = 0;
                        actualMultiplayerColor = Color.White;
                        multiplayerColor = Color.White;
                        multiplayeredgeofscreendie = false;
                        multiplayercontrolsenabled = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemMinus))
                    {
                        multiplayercontrolsenabled = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemPlus))
                    {
                        multiplayercontrolsenabled = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.F12))
                    {
                        MultiplayerDieMultiplayerDissipear = false;
                        multiplayer = true;
                        multiplayerColor = Color.White;
                        actualMultiplayerColor = Color.White;
                        multiplayeredgeofscreendie = false;
                        multiplayervx = 0;
                        multiplayervy = 0;
                        multiplayercontrolsenabled = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.NumLock))
                    {
                        MultiplayerDieMultiplayerDissipear = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Home))
                    {
                        multiplayer = true;
                        multiplayerColor = Color.White;
                        actualMultiplayerColor = Color.White;
                        multiplayeredgeofscreendie = false;
                        multiplayercontrolsenabled = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.D3) || Keyboard.GetState().IsKeyDown(Keys.NumPad3))
                    {
                        if (vx < 0)
                        {
                            vx -= accel;
                            moved = true;
                        }
                        else if (vx > 0)
                        {
                            vx += accel;
                            moved = true;
                        }
                        if (vy < 0)
                        {
                            vy -= accel;
                            moved = true;
                        }
                        else if (vy > 0)
                        {
                            vy += accel;
                            moved = true;
                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.D0) || Keyboard.GetState().IsKeyDown(Keys.NumPad0))
                    {
                        accel += 0.001f;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.D1) || Keyboard.GetState().IsKeyDown(Keys.NumPad1))
                    {
                        accel -= 0.001f;
                        if (accel < 0)
                        {
                            accel = 0;
                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.D2) || Keyboard.GetState().IsKeyDown(Keys.NumPad2))
                    {
                        accel = 0.1f;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.D8) || Keyboard.GetState().IsKeyDown(Keys.NumPad8))
                    {
                        actualColor = new Color(255, 255, 255, random.Next(0, 256));
                        if (ballColor != Color.Transparent)
                        {
                            ballColor = actualColor;
                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.D9) || Keyboard.GetState().IsKeyDown(Keys.NumPad9))
                    {
                        FollowBackgroundColor = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Back))
                    {
                        FollowBackgroundColor = false;
                    }
                    if (Mouse.GetState().LeftButton == ButtonState.Pressed)
                    {
                        if (MouseMoveBasePlayer)
                        {
                            x = Mouse.GetState().X;
                            y = Mouse.GetState().Y;
                        }
                        else
                        {
                            multiplayer = true;
                            multiplayerx = Mouse.GetState().X;
                            multiplayery = Mouse.GetState().Y;
                        }
                    }
                    if (Mouse.GetState().RightButton == ButtonState.Pressed)
                    {
                        if (!MouseMoveBasePlayer)
                        {
                            x = Mouse.GetState().X;
                            y = Mouse.GetState().Y;
                        }
                        else
                        {
                            multiplayer = true;
                            multiplayerx = Mouse.GetState().X;
                            multiplayery = Mouse.GetState().Y;
                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.PageUp))
                    {
                        UpdateBackgroundColor = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.PageDown))
                    {
                        UpdateBackgroundColor = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.End))
                    {
                        BackroundColor = Color.Orange;
                        UpdateBackgroundColor = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemOpenBrackets))
                    {
                        if (ballColor != Color.Transparent)
                        {
                            ballColor = Color.Orange;
                        }
                        actualColor = Color.Orange;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemCloseBrackets))
                    {
                        if (ballColor != Color.Transparent)
                        {
                            ballColor.A = 255;
                        }
                        actualColor.A = 255;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemBackslash))
                    {
                        try
                        {
                            actualColor.A++;
                            ballColor.A++;
                        }
                        catch (OverflowException)
                        {

                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemSemicolon))
                    {
                        try
                        {
                            if (ballColor != Color.Transparent)
                            {
                                ballColor.A--;
                            }
                            actualColor.A--;
                        }
                        catch (OverflowException)
                        {

                        }
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Subtract))
                    {
                        if (!subtract_Pressed_Last_Frame)
                            graphics.ToggleFullScreen();
                        subtract_Pressed_Last_Frame = true;
                    }
                    if (Keyboard.GetState().IsKeyUp(Keys.Subtract))
                    {
                        subtract_Pressed_Last_Frame = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.LeftWindows) || Keyboard.GetState().IsKeyDown(Keys.RightWindows))
                    {
                        if (!windows_pressed_last_frame)
                        {
                            Cpu_Multiplayer = true;
                            Cpu_x = x;
                            Cpu_y = y;
                        }
                    }
                    if (Keyboard.GetState().IsKeyUp(Keys.LeftWindows) || Keyboard.GetState().IsKeyDown(Keys.RightWindows))
                    {
                        windows_pressed_last_frame = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.Multiply))
                    {
                        if (!Multiply_Pressed_Last_Frame)
                        {
                            if (instance.State == SoundState.Stopped)
                            {
                                instance.Play();
                            }
                            else
                                instance.Stop();
                        }
                        Multiply_Pressed_Last_Frame = true;
                    }
                    if (Keyboard.GetState().IsKeyUp(Keys.Multiply))
                    {
                        Multiply_Pressed_Last_Frame = false;
                    }
                    if (Keyboard.GetState().IsKeyUp(Keys.OemComma))
                    {
                        comma_pressed_last_frame = false;
                    }
                    if (Keyboard.GetState().IsKeyDown(Keys.OemComma))
                    {
                        if (!comma_pressed_last_frame)
                        {
                            if (texture.Equals(ball))
                            {
                                texture = black_ball;
                            }
                            else
                            {
                                texture = ball;
                            }
                        }
                        comma_pressed_last_frame = true;
                        /*System.IO.StreamWriter dragwriter = new System.IO.StreamWriter("../drag.txt");
                        dragwriter.Write(xdrag);
                        dragwriter.Flush();
                        dragwriter.Close();
                        System.IO.StreamWriter gravitywriter = new System.IO.StreamWriter("../gravity.txt");
                        gravitywriter.Write(gravity);
                        gravitywriter.Flush();
                        gravitywriter.Close();
                        Process.Start(@"..\..\..\..\..\..\..\..\Visual Studio 2013 Daddy\Projects\Variable Changer\Variable Changer\bin\Debug\Variable Changer.exe");
                        Process[] Wait = Process.GetProcessesByName("Variable Changer");
                        foreach (Process p in Wait)
                        {
                            p.WaitForExit();
                        }
                        System.IO.StreamReader gravityp = new System.IO.StreamReader(@"..\gravity.txt");
                        try
                        {
                            gravity = float.Parse(gravityp.ReadLine());
                        }
                        catch (ArgumentNullException)
                        {

                        }
                        catch (FormatException)
                        {

                        }
                        catch (OverflowException)
                        {

                        }
                        gravityp.Close();
                        System.IO.StreamReader dragp = new System.IO.StreamReader("../drag.txt");
                        try
                        {
                            xdrag = float.Parse(dragp.ReadLine());
                        }
                        catch (FormatException)
                        {

                        }
                        catch (OverflowException)
                        {

                        }
                        catch (ArgumentNullException)
                        {

                        }
                        dragp.Close();
                        ydrag = xdrag;
                        //Acceleration
                        System.IO.StreamReader accelp = new System.IO.StreamReader("../Aceeleration.txt");
                        try
                        {
                            accel = float.Parse(accelp.ReadLine());
                        }
                        catch (FormatException)
                        {

                        }
                        catch (OverflowException)
                        {

                        }
                        catch (ArgumentNullException)
                        {

                        }
                        accelp.Close();*/
                    }
                }
                if (Keyboard.GetState().IsKeyDown(Keys.F4))
                {
                    controlsenabled = true;
                }
                if (!enabled)
                {
                    if (!game_overed)
                    {
                        Game_Over.Play();
                        game_overed = true;
                    }
                    if (clear)
                    {
                        spriteBatch.Begin();
                        spriteBatch.DrawString(spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Vector2(GraphicsDevice.Viewport.Width / 2, GraphicsDevice.Viewport.Height / 2), Color.Gold);
                        spriteBatch.End();
                    }
                }
                if (actualColor.A == 0)
                {
                    actualColor.A = 255;
                }
                speed = MakeFloatPerfect((float)(Math.Abs(Math.Sqrt((vx * vx) + ((vy + gravity_effect) * (vy + gravity_effect))))));
                distance += speed;
                if (speed > maximun)
                    maximun = speed;
                if (clear)
                {
                    if (x >= GraphicsDevice.Viewport.Bounds.Width)
                    {
                        if (edgeofscreenlose)
                        {
                            spriteBatch.Begin();
                            spriteBatch.DrawString(spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Vector2(GraphicsDevice.Viewport.Width / 2, GraphicsDevice.Viewport.Height / 2), Color.Gold);
                            spriteBatch.End();
                            enabled = false;
                        }
                        else if (bouncy)
                        {
                            vx = vx - (vx * 2);
                            Bounce.Play();
                        }
                        else
                        {
                            x = -texture.Width;
                        }
                    }

                    else if (x < -texture.Width)
                    {
                        if (edgeofscreenlose)
                        {
                            spriteBatch.Begin();
                            spriteBatch.DrawString(spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Vector2(GraphicsDevice.Viewport.Width / 2, GraphicsDevice.Viewport.Height / 2), Color.Gold);
                            spriteBatch.End();
                            enabled = false;
                        }
                        else if (bouncy)
                        {
                            vx = (float)Math.Abs(vx);
                            Bounce.Play();
                        }
                        else
                        {
                            x = GraphicsDevice.Viewport.Bounds.Width;
                        }
                    }
                    if (y >= GraphicsDevice.Viewport.Bounds.Height)
                    {
                        if (edgeofscreenlose)
                        {
                            spriteBatch.Begin();
                            spriteBatch.DrawString(spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Vector2(GraphicsDevice.Viewport.Width / 2, GraphicsDevice.Viewport.Height / 2), Color.Gold);
                            spriteBatch.End();
                            enabled = false;
                        }
                        else if (bouncy)
                        {
                            vy = vy - (vy * 2);
                            gravity_effect = -gravity_effect;
                            Bounce.Play();
                        }
                        else
                        {
                            y = -texture.Height;
                        }
                    }
                    else if (y < -texture.Height)
                    {
                        if (edgeofscreenlose)
                        {
                            spriteBatch.Begin();
                            spriteBatch.DrawString(spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Vector2(GraphicsDevice.Viewport.Width / 2, GraphicsDevice.Viewport.Height / 2), Color.Gold);
                            spriteBatch.End();
                            enabled = false;
                        }
                        else if (bouncy)
                        {
                            vy = (float)Math.Abs(vy);
                            gravity_effect = -gravity_effect;
                            Bounce.Play();
                        }
                        else
                        {
                            y = GraphicsDevice.Viewport.Bounds.Height;
                        }
                    }
                    if (StopWhenNotMoving && !moved)
                    {
                        vx = 0;
                        vy = 0;
                    }
                    vx *= xdrag;
                    vy *= ydrag;
                    gravity_effect *= ydrag;
                    gravity_effect += gravity;
                    List<Vector2> positions = new List<Vector2> { new Vector2(x, y) };
                    positions.Add(new Vector2(multiplayerx, multiplayery));
                    positions.Add(new Vector2(Cpu_x, Cpu_y));
                    for (int x = 0; x < positions.Count; x++)
                    {
                        for (int y = 0; y < positions.Count; y++)
                        {
                            if (x == y)
                                continue;
                            Rectangle rectA = new Rectangle(positions[x].ToPoint(), new Point(32, 32));
                            Rectangle rectB = new Rectangle(positions[y].ToPoint(), new Point(32, 32));
                            if (rectA.Contains(positions[y]) || rectB.Contains(positions[x]))
                            { } // Empty block - original code was incomplete
                        }
                    }
                }
            }
            else if (asking_world_name)
            {
                {
                    spriteBatch.Begin();
                    spriteBatch.Draw(button, new Rectangle(329, 259, 152, 27), Color.Black);
                    spriteBatch.Draw(button, new Rectangle(330, 260, 150, 25), Color.White);
                    if (secs == 5)
                    {
                        if (BeingPressed(new Keys[] { Keys.Back }))
                        {
                            if (world_name.Count() == 0)
                            {

                            }
                            else
                                world_name = world_name.Remove(world_name.Count() - 1);
                        }
                        if (BeingPressed(new Keys[] { Keys.Enter }))
                        {
                            asking_world_name = false;
                            if (!from_saved_game_code)
                                StartPlaying(gameTime);
                            if (full_screen_temp)
                            {
                                graphics.ToggleFullScreen();
                            }
                            if (sound_playing_temp)
                            {
                                instance.Play();
                            }
                            sound_playing_temp = false;
                            full_screen_temp = false;
                        }
                        if (BeingPressed(new Keys[] { Keys.Escape }) && CanPerformAction())
                        {
                            asking_world_name = false;
                        }
                        if (BeingPressed(new Keys[] { Keys.LeftControl, Keys.V }) || BeingPressed(new Keys[] { Keys.RightControl, Keys.V }))
                        {
                            ClipboardHelper.ReadClipboardText(text => { world_name = text; });
                        }
                        int n = 0;
                        foreach (Keys[] k in keys.Values)
                        {
                            if (BeingPressed(k))
                            {
                                if ((((ushort)GetKeyState(0x14)) & 0xffff) != 0)
                                    world_name += Char.ToUpper(keys.Keys.ToList()[n]);
                                else
                                    world_name += keys.Keys.ToList()[n];
                            }
                            n++;
                        }
                    }
                }
                if (secs > 5)
                {
                    secs = 0;
                }
                secs++;
                if (world_name == "")
                {
                    spriteBatch.DrawString(spriteFont, "World Name...", new Vector2(345, 260), Color.LightGray);
                }
                else
                {
                    spriteBatch.DrawString(spriteFont, world_name, new Vector2(345, 260), Color.Black);
                }
                spriteBatch.DrawString(spriteFont, "What's the name of your world?", new Vector2(345, 225), Color.White);
                spriteBatch.End();
            }
            else if (asking_name)
            {
                KeyboardState state = Keyboard.GetState();
                GraphicsDevice.Clear(Color.Red);
                spriteBatch.Begin();
                spriteBatch.Draw(button, new Rectangle(329, 259, 152, 27), Color.Black);
                spriteBatch.Draw(button, new Rectangle(330, 260, 150, 25), Color.White);
                int n = 0;
                if (secs == 5)
                {
                    secs = 0;
                    if (BeingPressed(new Keys[] { Keys.Back }))
                    {
                        if (name.Count() == 0)
                        {

                        }
                        else
                            name = name.Remove(name.Count() - 1);
                    }
                    if (BeingPressed(new Keys[] { Keys.Enter }) && CanPerformAction())
                    {
                        asking_name = false;
                    }
                    if (BeingPressed(new Keys[] { Keys.Escape }))
                    {
                        Close();
                    }
                    if (BeingPressed(new Keys[] { Keys.LeftControl, Keys.V }) || BeingPressed(new Keys[] { Keys.RightControl, Keys.V }))
                        ClipboardHelper.ReadClipboardText(text => { name += text; });
                    foreach (Keys[] k in keys.Values)
                    {
                        if (BeingPressed(k))
                        {
                            if ((((ushort)GetKeyState(0x14)) & 0xffff) != 0)
                                name += Char.ToUpper(keys.Keys.ToList()[n]);
                            else
                                name += keys.Keys.ToList()[n];
                        }
                        n++;
                    }
                }
                if (name == "")
                {
                    spriteBatch.DrawString(spriteFont, "Name...", new Vector2(345, 260), Color.LightGray);
                }
                else
                {
                    spriteBatch.DrawString(spriteFont, name, new Vector2(345, 260), Color.Black);
                }
                spriteBatch.DrawString(spriteFont, "What's your name?", new Vector2(345, 225), Color.White);
                spriteBatch.End();
                secs++;
            }
            else if (saved_game_code != saved_game_destnation)
            {
                GraphicsDevice.Clear(Color.Blue);
                if (from_saved_game_code)
                {
                    Storage.WriteAllText(saved_game_destnation + "/world_name.txt", world_name);
                    saved_game_destnation = saved_game_code;
                    looking_at_saved_games = true;
                    from_saved_game_code = false;
                    world_name = "";
                    saved_games = Storage.GetDirectories("");
                    int n = 0;
                    names = new string[saved_games.Length];
                    world_names = new string[saved_games.Length];
                    foreach (string s in saved_games)
                    {
                        try
                        {
                            var lines = Storage.ReadAllLines(s + "/name.txt");
                            names[n] = lines.Length > 0 ? lines[0] : "";
                        }
                        catch
                        {
                            names[n] = "";
                        }
                        try
                        {
                            var lines = Storage.ReadAllLines(s + "/world_name.txt");
                            world_names[n] = lines.Length > 0 ? lines[0] : "";
                        }
                        catch
                        {
                            names[n] = "";
                        }
                        n++;
                    }
                }
                else
                {
                    spriteBatch.Begin();
                    if (secs % 5 == 0)
                    {
                        if (Keyboard.GetState().IsKeyDown(Keys.Up))
                        {
                            Buttons_Load_File_Right_Click button;
                            if (Mouse.GetState().Y <= 85)
                                button = Buttons_Load_File_Right_Click.Play;
                            else if (Mouse.GetState().Y >= 100 && Mouse.GetState().Y <= 134)
                                button = Buttons_Load_File_Right_Click.Delete;
                            else
                                button = Buttons_Load_File_Right_Click.Rename;
                            try
                            {
                                Mouse.SetPosition((int)buttons_right_click_load_file[(int)button - 1].X, (int)buttons_right_click_load_file[(int)button - 1].Y);
                            }
                            catch
                            {
                                Mouse.SetPosition((int)buttons_right_click_load_file.Last().X, (int)buttons_right_click_load_file.Last().Y);
                            }
                        }
                        else if (Keyboard.GetState().IsKeyDown(Keys.Down))
                        {
                            Buttons_Load_File_Right_Click button;
                            if (Mouse.GetState().Y <= 85)
                                button = Buttons_Load_File_Right_Click.Play;
                            else if (Mouse.GetState().Y >= 100 && Mouse.GetState().Y <= 134)
                                button = Buttons_Load_File_Right_Click.Delete;
                            else
                                button = Buttons_Load_File_Right_Click.Rename;
                            try
                            {
                                Mouse.SetPosition((int)buttons_right_click_load_file[(int)button + 1].X, (int)buttons_right_click_load_file[(int)button + 1].Y);
                            }
                            catch
                            {
                                Mouse.SetPosition((int)buttons_right_click_load_file[0].X, (int)buttons_right_click_load_file[0].Y);
                            }
                        }
                    }

                    secs++;
                    if (Mouse.GetState().X >= 35 && Mouse.GetState().X <= 150 && Mouse.GetState().Y <= 85)
                    {
                        spriteBatch.Draw(button, new Rectangle(49, 49, 102, 37), Color.Black);
                        spriteBatch.Draw(button, new Rectangle(50, 50, 100, 35), new Color(234, 241, 248));
                        if ((Mouse.GetState().LeftButton == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Enter)) && CanPerformAction())
                        {
                            Load(saved_game_destnation);
                            saved_game_destnation = saved_game_code;
                            return;
                        }
                    }
                    spriteBatch.DrawString(spriteFont, "Play", new Vector2(62, 57), Color.Black);
                    if (Keyboard.GetState().IsKeyDown(Keys.E) || Keyboard.GetState().IsKeyDown(Keys.Escape))
                    {
                        looking_at_saved_games = true;
                        saved_game_destnation = saved_game_code;
                    }
                    //next button load saved saved game
                    if (Mouse.GetState().X >= 35 && Mouse.GetState().X <= 250 && Mouse.GetState().Y >= 100 && Mouse.GetState().Y <= 134)
                    {
                        spriteBatch.Draw(button, new Rectangle(49, 99, 102, 37), Color.Black);
                        spriteBatch.Draw(button, new Rectangle(50, 100, 100, 35), new Color(234, 241, 248));
                        if (Mouse.GetState().LeftButton == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Enter))
                        {
                            Storage.DeleteDirectory(saved_game_destnation);
                            saved_game_destnation = saved_game_code;
                        }
                    }
                    spriteBatch.DrawString(spriteFont, "Delete", new Vector2(62, 107), Color.Black);
                    if (Mouse.GetState().X >= 35 && Mouse.GetState().X <= 150 && Mouse.GetState().Y >= 135 && Mouse.GetState().Y <= 185)
                    {
                        spriteBatch.Draw(button, new Rectangle(49, 149, 102, 37), Color.Black);
                        spriteBatch.Draw(button, new Rectangle(50, 150, 100, 35), new Color(234, 241, 248));
                        if (Mouse.GetState().LeftButton == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Enter))
                        {
                            asking_world_name = true;
                            from_saved_game_code = true;

                        }
                    }
                    spriteBatch.DrawString(spriteFont, "Rename", new Vector2(62, 157), Color.Black);
                    spriteBatch.End();
                }
            }
            else if (looking_at_saved_games)
            {

                if ((Keyboard.GetState().IsKeyDown(Keys.Escape) || Keyboard.GetState().IsKeyDown(Keys.E)) && CanPerformAction())
                {
                    looking_at_saved_games = false;
                }
                KeyboardState keys = Keyboard.GetState();
                MouseState mouse = Mouse.GetState();
                int n = 0;
                int y = 0;
                foreach (string s in saved_games)
                {
                    spriteBatch.Begin();
                    spriteBatch.Draw(button, new Rectangle(0, y * 15, 401, 16), Color.Black);
                    if (mouse.Y >= y * 15 && mouse.Y <= ((y * 15) + 15))
                    {
                        if (mouse.LeftButton == ButtonState.Pressed || keys.IsKeyDown(Keys.Enter))
                        {
                            Load(s);
                            if (graphics.IsFullScreen)
                            {
                                graphics.ToggleFullScreen();
                            }
                            break;
                        }
                        if (mouse.RightButton == ButtonState.Pressed)
                        {
                            looking_at_saved_games = false;
                            saved_game_destnation = s;
                        }
                        spriteBatch.Draw(button, new Rectangle(0, y * 15, 400, 15), Color.Orange);
                    }
                    else
                        spriteBatch.Draw(button, new Rectangle(0, y * 15, 400, 15), Color.DarkOrange);
                    spriteBatch.DrawString(spriteFont, world_names[n] + " by " + names[n], new Vector2(0, y * 15), Color.Black);

                    n++;
                    y++;
                    spriteBatch.End();
                }
            }
            else
            {
                GraphicsDevice.Clear(Color.Blue);
                spriteBatch.Begin();
                if (secs % 5 == 0)
                {
                    if (Keyboard.GetState().IsKeyDown(Keys.Up))
                    {
                        Button button;
                        if (Mouse.GetState().Y <= 85)
                            button = Button.NewGame;
                        else if (Mouse.GetState().Y >= 100 && Mouse.GetState().Y <= 134)
                            button = Button.LoadGame;
                        else
                            button = Button.Exit;
                        try
                        {
                            Mouse.SetPosition((int)buttons[(int)button - 1].X, (int)buttons[(int)button - 1].Y);
                        }
                        catch
                        {
                            Mouse.SetPosition((int)buttons.Last().X, (int)buttons.Last().Y);
                        }
                    }
                    else if (Keyboard.GetState().IsKeyDown(Keys.Down))
                    {
                        Button button;
                        if (Mouse.GetState().Y <= 85)
                            button = Button.NewGame;
                        else if (Mouse.GetState().Y >= 100 && Mouse.GetState().Y <= 134)
                            button = Button.LoadGame;
                        else
                            button = Button.Exit;
                        try
                        {
                            Mouse.SetPosition((int)buttons[(int)button + 1].X, (int)buttons[(int)button + 1].Y);
                        }
                        catch
                        {
                            Mouse.SetPosition((int)buttons[0].X, (int)buttons[0].Y);
                        }
                    }
                }
                if (Mouse.GetState().X >= 35 && Mouse.GetState().X <= 150 && Mouse.GetState().Y <= 85)
                {
                    spriteBatch.Draw(button, new Rectangle(49, 49, 102, 37), Color.Black);
                    spriteBatch.Draw(button, new Rectangle(50, 50, 100, 35), new Color(234, 241, 248));
                    if (Mouse.GetState().LeftButton == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Enter))
                    {
                        asking_world_name = true;
                        asking_name = false;
                        texture = ball;
                        sound_playing_temp = true;
                    }
                }
                spriteBatch.DrawString(spriteFont, "New Game", new Vector2(62, 57), Color.Black);
                if (Keyboard.GetState().IsKeyDown(Keys.E) || Keyboard.GetState().IsKeyDown(Keys.Escape))
                {
                    Close();
                }
                //next button load saved saved game
                if (Mouse.GetState().X >= 35 && Mouse.GetState().X <= 250 && Mouse.GetState().Y >= 100 && Mouse.GetState().Y <= 134)
                {
                    spriteBatch.Draw(button, new Rectangle(49, 99, 102, 37), Color.Black);
                    spriteBatch.Draw(button, new Rectangle(50, 100, 100, 35), new Color(234, 241, 248));
                    if (Mouse.GetState().LeftButton == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Enter))
                    {
                        looking_at_saved_games = true;
                        asking_name = false;
                        asking_world_name = false;
                        saved_games = Storage.GetDirectories("");
                        int n = 0;
                        names = new string[saved_games.Length];
                        world_names = new string[saved_games.Length];
                        foreach (string s in saved_games)
                        {
                            try
                            {
                                var lines = Storage.ReadAllLines(s + "/name.txt");
                                names[n] = lines.Length > 0 ? lines[0] : "";
                            }
                            catch
                            {
                                names[n] = "";
                            }
                            try
                            {
                                var lines = Storage.ReadAllLines(s + "/world_name.txt");
                                world_names[n] = lines.Length > 0 ? lines[0] : "";
                            }
                            catch
                            {
                                names[n] = "";
                            }
                            n++;
                        }
                        asking_name = false;
                    }
                }
                spriteBatch.DrawString(spriteFont, "Load Game", new Vector2(62, 107), Color.Black);
                // new button exit
                if (Mouse.GetState().X >= 35 && Mouse.GetState().X <= 150 && Mouse.GetState().Y >= 135 && Mouse.GetState().Y <= 185)
                {
                    spriteBatch.Draw(button, new Rectangle(49, 149, 102, 37), Color.Black);
                    spriteBatch.Draw(button, new Rectangle(50, 150, 100, 35), new Color(234, 241, 248));
                    if (Mouse.GetState().LeftButton == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Enter))
                    {
                        Close();
                    }
                }
                spriteBatch.DrawString(spriteFont, "Quit", new Vector2(62, 157), Color.Black);
                /*// new button play music
                if (Mouse.GetState().X >= 35 && Mouse.GetState().X <= 150 && Mouse.GetState().Y >= 185 && Mouse.GetState().Y <= 235)
                {
                    spriteBatch.Draw(button, new Rectangle(49, 199, 102, 37), Color.Black);
                    spriteBatch.Draw(button, new Rectangle(50, 200, 100, 35), new Color(234, 241, 248));
                    if (Mouse.GetState().LeftButton == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Enter))
                    {
                        if (played_music_last_frame)
                        {
                            if (instance.State == SoundState.Stopped)
                                instance.Play();
                            else if (instance.State == SoundState.Playing)
                                instance.Stop();
                        }
                        played_music_last_frame = true;
                    }
                    else
                    {
                        played_music_last_frame = false;
                    }
                }
                if (instance.State == SoundState.Stopped)
                spriteBatch.DrawString(spriteFont, "Play Music", new Vector2(62, 207), Color.Black);
                else
                    spriteBatch.DrawString(spriteFont, "Stop Music", new Vector2(62, 207), Color.Black);*/
                spriteBatch.End();
                secs++;
            }
            base.Draw(gameTime);
        }
    }
}
