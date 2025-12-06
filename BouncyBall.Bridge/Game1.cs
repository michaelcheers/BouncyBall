using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using System;
using InputKeys = Microsoft.Xna.Framework.Input.Keys;

namespace Bouncy_Ball
{
    public class Game1 : Game
    {
        private bool MouseMoveBasePlayer = false;
        private bool FollowBackgroundColor = false;
        private bool clear = true;
        private bool multiplayercontrolsenabled = true;
        private bool controlsenabled = true;
        private bool enabled = true;
        private bool multiplayeredgeofscreendie = false;
        private bool multiplayer = false;
        private float multiplayerx = 0.0f;
        private float multiplayery = 0.0f;
        private float multiplayervx = 0.0f;
        private float multiplayervy = 0.0f;
        private bool edgeofscreenlose = false;
        private bool bouncy = false;
        private float x = 0.0f;
        private float y = 0.0f;
        private float vx = 0.0f;
        private float vy = 0.0f;
        private float xdrag = 0.99f;
        private float ydrag = 0.99f;
        private float accel = 0.1f;
        private float gravity = 0.0f;
        private float gravity_effect = 0.0f;
        private float blue = 1f;
        private bool moved = false;
        private bool StopWhenNotMoving = false;
        private bool UpdateBackgroundColor = true;
        private bool MultiplayerDieMultiplayerDissipear = false;
        private byte alpha = byte.MaxValue;
        private Color BackroundColor = Color.White;
        private Color ballColor = Color.White;
        private Color multiplayerColor = Color.White;
        private Random random = new Random();
        private bool L_Pressed_Last_Frame = false;
        private SpriteFont spriteFont;
        private GraphicsDeviceManager graphics;
        private SpriteBatch spriteBatch;
        private Texture2D texture;
        private Color actualColor;
        private Color actualMultiplayerColor;

        public Game1()
        {
            this.graphics = new GraphicsDeviceManager((Game)this)
            {
                IsFullScreen = true,
                PreferredBackBufferWidth = 800,
                PreferredBackBufferHeight = 600
            };
            this.Content.RootDirectory = "Content";
        }

        protected override void Initialize()
        {
            this.actualColor = this.ballColor;
            this.actualMultiplayerColor = this.multiplayerColor;
            base.Initialize();
        }

        protected override void LoadContent()
        {
            this.spriteFont = this.Content.Load<SpriteFont>("Arial");
            this.texture = this.Content.Load<Texture2D>("ball");
            this.spriteBatch = new SpriteBatch(this.GraphicsDevice);
            this.IsMouseVisible = true;
        }

        protected override void UnloadContent()
        {
        }

        protected override void Update(GameTime gameTime)
        {
            base.Update(gameTime);
        }

        protected override void Draw(GameTime gameTime)
        {
            if (this.enabled)
            {
                if (this.clear)
                {
                    if (this.UpdateBackgroundColor)
                        this.BackroundColor = new Color((float)(Math.Cos((double)this.x * 0.00999999977648258) + 1.0) / 2f, (float)(Math.Cos((double)this.y * 0.00999999977648258) + 1.0) / 2f, this.blue, (float)this.alpha);
                    this.GraphicsDevice.Clear(this.BackroundColor);
                    if (this.FollowBackgroundColor)
                    {
                        this.ballColor = new Color((float)(Math.Cos((double)this.x * 0.00999999977648258) + 1.0) / 2f, (float)(Math.Cos((double)this.y * 0.00999999977648258) + 1.0) / 2f, this.blue, (float)this.alpha);
                        this.actualColor = this.ballColor;
                    }
                }
                this.moved = false;
                this.spriteBatch.Begin();
                this.spriteBatch.Draw(this.texture, new Vector2(this.x, this.y), this.ballColor);
                if (this.multiplayer)
                    this.spriteBatch.Draw(this.texture, new Vector2(this.multiplayerx, this.multiplayery), this.multiplayerColor);
                this.spriteBatch.End();
            }
            this.x += this.vx;
            this.y += this.vy;
            this.y += this.gravity_effect;
            if (!this.multiplayer)
            {
                if (this.controlsenabled)
                {
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Left) || Keyboard.GetState().IsKeyDown(InputKeys.A))
                    {
                        this.vx -= this.accel;
                        this.moved = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Right) || Keyboard.GetState().IsKeyDown(InputKeys.D))
                    {
                        this.vx += this.accel;
                        this.moved = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Up) || Keyboard.GetState().IsKeyDown(InputKeys.W))
                    {
                        this.vy -= this.accel;
                        this.moved = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Down) || Keyboard.GetState().IsKeyDown(InputKeys.S))
                    {
                        this.vy += this.accel;
                        this.moved = true;
                    }
                }
            }
            else
            {
                this.multiplayerx += this.multiplayervx;
                this.multiplayery += this.multiplayervy;
                if (this.controlsenabled && this.multiplayercontrolsenabled)
                {
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Left))
                    {
                        this.vx -= this.accel;
                        this.moved = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.A))
                        this.multiplayervx -= 0.1f;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Right))
                    {
                        this.vx += this.accel;
                        this.moved = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.D))
                        this.multiplayervx += 0.1f;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Up))
                    {
                        this.vy -= this.accel;
                        this.moved = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.W))
                        this.multiplayervy -= 0.1f;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Down))
                    {
                        this.vy += this.accel;
                        this.moved = true;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.S))
                        this.multiplayervy += 0.1f;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.LeftShift))
                        this.multiplayeredgeofscreendie = true;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.RightShift))
                        this.edgeofscreenlose = true;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.LeftControl))
                        this.multiplayeredgeofscreendie = false;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.RightControl))
                        this.edgeofscreenlose = false;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.CapsLock) && this.multiplayerColor != Color.Transparent)
                    {
                        this.multiplayerColor = new Color(this.random.Next(256), this.random.Next(256), this.random.Next(256), this.random.Next(256));
                        this.actualMultiplayerColor = this.multiplayerColor;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.F5))
                        this.multiplayerColor = Color.Transparent;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.F6))
                        this.multiplayerColor = this.actualMultiplayerColor;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.F7) && this.multiplayerColor != Color.Transparent)
                    {
                        this.multiplayerColor = Color.White;
                        this.actualMultiplayerColor = Color.White;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.F8) && this.multiplayerColor != Color.Transparent)
                    {
                        this.multiplayerColor = Color.Black;
                        this.actualMultiplayerColor = Color.Black;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.F9) && this.multiplayerColor != Color.Transparent)
                    {
                        this.multiplayerColor = Color.HotPink;
                        this.actualMultiplayerColor = Color.HotPink;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.F10))
                    {
                        this.multiplayerx = 0.0f;
                        this.multiplayery = 0.0f;
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.F11))
                    {
                        this.multiplayerx = (float)(this.GraphicsDevice.Viewport.Bounds.Width / 2);
                        this.multiplayery = (float)(this.GraphicsDevice.Viewport.Bounds.Height / 2);
                    }
                    if (Keyboard.GetState().IsKeyDown(InputKeys.Delete))
                    {
                        this.multiplayervx = 0.0f;
                        this.multiplayervy = 0.0f;
                    }
                }
                if ((double)this.multiplayerx >= (double)this.GraphicsDevice.Viewport.Bounds.Width)
                {
                    if (this.multiplayeredgeofscreendie)
                    {
                        if (this.MultiplayerDieMultiplayerDissipear)
                        {
                            this.multiplayer = false;
                        }
                        else
                        {
                            this.multiplayervx = 0.0f;
                            this.multiplayervy = 0.0f;
                            this.multiplayerx = 0.0f;
                            this.multiplayery = 0.0f;
                            this.multiplayer = false;
                            this.multiplayer = true;
                        }
                    }
                    else if (this.bouncy)
                        this.multiplayervx = this.multiplayervx - this.multiplayervx * 2f;
                    else
                        this.multiplayerx = (float)-this.texture.Width;
                }
                else if ((double)this.multiplayerx < (double)-this.texture.Width)
                {
                    if (this.multiplayeredgeofscreendie)
                    {
                        if (this.MultiplayerDieMultiplayerDissipear)
                        {
                            this.multiplayer = false;
                        }
                        else
                        {
                            this.multiplayervx = 0.0f;
                            this.multiplayervy = 0.0f;
                            this.multiplayerx = 0.0f;
                            this.multiplayery = 0.0f;
                            this.multiplayer = false;
                            this.multiplayer = true;
                        }
                    }
                    else if (this.bouncy)
                        this.multiplayervx = (float)Math.Abs(this.multiplayervx);
                    else
                        this.multiplayerx = (float)this.GraphicsDevice.Viewport.Bounds.Width;
                }
                if ((double)this.multiplayery >= (double)this.GraphicsDevice.Viewport.Bounds.Height)
                {
                    if (this.multiplayeredgeofscreendie)
                    {
                        if (this.MultiplayerDieMultiplayerDissipear)
                        {
                            this.multiplayer = false;
                        }
                        else
                        {
                            this.multiplayervx = 0.0f;
                            this.multiplayervy = 0.0f;
                            this.multiplayerx = 0.0f;
                            this.multiplayery = 0.0f;
                            this.multiplayer = false;
                            this.multiplayer = true;
                        }
                        this.multiplayer = true;
                    }
                    else if (this.bouncy)
                        this.multiplayervy = this.multiplayervy - this.multiplayervy * 2f;
                    else
                        this.multiplayery = (float)-this.texture.Height;
                }
                else if ((double)this.multiplayery < (double)-this.texture.Height)
                {
                    if (this.multiplayeredgeofscreendie)
                    {
                        if (this.MultiplayerDieMultiplayerDissipear)
                        {
                            this.multiplayer = false;
                        }
                        else
                        {
                            this.multiplayervx = 0.0f;
                            this.multiplayervy = 0.0f;
                            this.multiplayerx = 0.0f;
                            this.multiplayery = 0.0f;
                            this.multiplayer = false;
                            this.multiplayer = true;
                        }
                    }
                    else if (this.bouncy)
                        this.multiplayervy = (float)Math.Abs(this.multiplayervy);
                    else
                        this.multiplayery = (float)this.GraphicsDevice.Viewport.Bounds.Height;
                }
                this.multiplayervy *= this.ydrag;
                this.multiplayervx *= this.xdrag;
                this.multiplayervy += this.gravity;
            }
            Viewport viewport;
            if (this.controlsenabled)
            {
                if (Keyboard.GetState().IsKeyDown(InputKeys.D6) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad6))
                    this.StopWhenNotMoving = true;
                if (Keyboard.GetState().IsKeyDown(InputKeys.D7) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad7))
                    this.StopWhenNotMoving = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.D4) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad4))
                    this.clear = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.NumPad5) || Keyboard.GetState().IsKeyDown(InputKeys.D5))
                    this.clear = true;
                if (Keyboard.GetState().IsKeyDown(InputKeys.T))
                {
                    this.x = (float)this.random.Next(0, this.GraphicsDevice.Viewport.Bounds.Width + 1);
                    Random random = this.random;
                    int minValue = 0;
                    viewport = this.GraphicsDevice.Viewport;
                    int maxValue = viewport.Bounds.Height + 1;
                    this.y = (float)random.Next(minValue, maxValue);
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.C) && !(this.ballColor == Color.Transparent))
                {
                    this.ballColor = new Color(this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256));
                    this.actualColor = this.ballColor;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.Enter))
                {
                    this.ballColor = new Color(this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256), 0);
                    this.actualColor = this.ballColor;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemQuotes))
                {
                    this.ballColor = new Color(this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256), (int)this.ballColor.A);
                    this.actualColor = this.ballColor;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.B))
                {
                    this.x = 0.0f;
                    this.y = 0.0f;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.M))
                {
                    viewport = this.GraphicsDevice.Viewport;
                    this.x = (float)(viewport.Bounds.Width / 2);
                    viewport = this.GraphicsDevice.Viewport;
                    this.y = (float)(viewport.Bounds.Height / 2);
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.I))
                    this.ballColor = Color.Transparent;
                if (Keyboard.GetState().IsKeyDown(InputKeys.H))
                    this.ballColor = this.actualColor;
                if (Keyboard.GetState().IsKeyDown(InputKeys.P) && !(this.ballColor == Color.Transparent))
                {
                    this.ballColor = Color.HotPink;
                    this.actualColor = this.ballColor;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.X))
                {
                    this.vx = 0.0f;
                    this.vy = 0.0f;
                    this.gravity_effect = 0.0f;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.E) || Keyboard.GetState().IsKeyDown(InputKeys.Escape))
                {
                    // Exit not supported in browser - just reset instead
                    ResetGame();
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.V))
                    this.bouncy = true;
                if (Keyboard.GetState().IsKeyDown(InputKeys.Z))
                    this.bouncy = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.L))
                {
                    if (!this.L_Pressed_Last_Frame)
                    {
                        this.vx = -this.vx;
                        this.vy = -this.vy;
                    }
                    this.L_Pressed_Last_Frame = true;
                }
                if (Keyboard.GetState().IsKeyUp(InputKeys.L))
                    this.L_Pressed_Last_Frame = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.N))
                    this.gravity += (float)(1.0 / 1000.0);
                if (Keyboard.GetState().IsKeyDown(InputKeys.O) && (double)this.gravity > 0.0)
                    this.gravity -= (float)(1.0 / 1000.0);
                if (Keyboard.GetState().IsKeyDown(InputKeys.Q) && this.ballColor != Color.Transparent)
                {
                    this.ballColor = Color.White;
                    this.actualColor = this.ballColor;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.R))
                    this.gravity = 0.0f;
                if (Keyboard.GetState().IsKeyDown(InputKeys.J))
                {
                    this.xdrag = 1f;
                    this.ydrag = 1f;
                }
            }
            if (Keyboard.GetState().IsKeyDown(InputKeys.Space))
            {
                ResetGame();
            }
            if (this.controlsenabled)
            {
                if (Keyboard.GetState().IsKeyDown(InputKeys.LeftAlt) || Keyboard.GetState().IsKeyDown(InputKeys.RightAlt))
                    this.multiplayer = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.U))
                {
                    this.xdrag = 0.99f;
                    this.ydrag = 0.99f;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.K) && (double)this.blue != (double)byte.MaxValue)
                    this.blue += 63f;
                if (Keyboard.GetState().IsKeyDown(InputKeys.F) && (double)this.blue != 0.0)
                    this.blue -= 63f;
                if (Keyboard.GetState().IsKeyDown(InputKeys.Y))
                {
                    this.multiplayer = true;
                    this.multiplayerColor = Color.White;
                    this.actualMultiplayerColor = Color.White;
                    this.multiplayeredgeofscreendie = false;
                    this.multiplayervx = 0.0f;
                    this.multiplayervy = 0.0f;
                    this.multiplayerx = 0.0f;
                    this.multiplayery = 0.0f;
                }
                if (!this.multiplayer)
                {
                    if (Keyboard.GetState().IsKeyDown(InputKeys.LeftShift) || Keyboard.GetState().IsKeyDown(InputKeys.RightShift))
                        this.edgeofscreenlose = true;
                    if (Keyboard.GetState().IsKeyDown(InputKeys.LeftControl) || Keyboard.GetState().IsKeyDown(InputKeys.RightControl))
                        this.edgeofscreenlose = false;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.G))
                {
                    this.ballColor = Color.Black;
                    this.actualColor = Color.Black;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.F1))
                    this.enabled = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.F2))
                {
                    this.enabled = true;
                    this.edgeofscreenlose = false;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.F3))
                    this.controlsenabled = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemPeriod))
                    this.MouseMoveBasePlayer = true;
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemQuestion))
                    this.MouseMoveBasePlayer = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.Divide))
                {
                    this.UpdateBackgroundColor = false;
                    this.BackroundColor = new Color(this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256));
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.Tab))
                {
                    this.multiplayerx = 0.0f;
                    this.multiplayery = 0.0f;
                    this.multiplayer = true;
                    this.multiplayervx = 0.0f;
                    this.multiplayervy = 0.0f;
                    this.actualMultiplayerColor = Color.White;
                    this.multiplayerColor = Color.White;
                    this.multiplayeredgeofscreendie = false;
                    this.multiplayercontrolsenabled = true;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemMinus))
                    this.multiplayercontrolsenabled = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemPlus))
                    this.multiplayercontrolsenabled = true;
                if (Keyboard.GetState().IsKeyDown(InputKeys.F12))
                {
                    this.MultiplayerDieMultiplayerDissipear = false;
                    this.multiplayer = true;
                    this.multiplayerColor = Color.White;
                    this.actualMultiplayerColor = Color.White;
                    this.multiplayeredgeofscreendie = false;
                    this.multiplayervx = 0.0f;
                    this.multiplayervy = 0.0f;
                    this.multiplayercontrolsenabled = true;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.NumLock))
                    this.MultiplayerDieMultiplayerDissipear = true;
                if (Keyboard.GetState().IsKeyDown(InputKeys.Home))
                {
                    this.multiplayer = true;
                    this.multiplayerColor = Color.White;
                    this.actualMultiplayerColor = Color.White;
                    this.multiplayeredgeofscreendie = false;
                    this.multiplayercontrolsenabled = true;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.D3) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad3))
                {
                    if ((double)this.vx < 0.0)
                    {
                        this.vx -= this.accel;
                        this.moved = true;
                    }
                    else if ((double)this.vx > 0.0)
                    {
                        this.vx += this.accel;
                        this.moved = true;
                    }
                    if ((double)this.vy < 0.0)
                    {
                        this.vy -= this.accel;
                        this.moved = true;
                    }
                    else if ((double)this.vy > 0.0)
                    {
                        this.vy += this.accel;
                        this.moved = true;
                    }
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.D0) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad0))
                    this.accel += (float)(1.0 / 1000.0);
                if (Keyboard.GetState().IsKeyDown(InputKeys.D1) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad1))
                {
                    this.accel -= (float)(1.0 / 1000.0);
                    if ((double)this.accel < 0.0)
                        this.accel = 0.0f;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.D2) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad2))
                    this.accel = 0.1f;
                if ((Keyboard.GetState().IsKeyDown(InputKeys.D8) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad8)) && this.ballColor != Color.Transparent)
                {
                    this.ballColor = new Color((int)byte.MaxValue, (int)byte.MaxValue, (int)byte.MaxValue, this.random.Next(0, 256));
                    this.actualColor = this.ballColor;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.D9) || Keyboard.GetState().IsKeyDown(InputKeys.NumPad9))
                    this.FollowBackgroundColor = true;
                if (Keyboard.GetState().IsKeyDown(InputKeys.Back))
                    this.FollowBackgroundColor = false;
                MouseState state;
                if (Mouse.GetState().LeftButton == ButtonState.Pressed)
                {
                    if (this.MouseMoveBasePlayer)
                    {
                        this.x = (float)Mouse.GetState().X;
                        this.y = (float)Mouse.GetState().Y;
                    }
                    else
                    {
                        this.multiplayer = true;
                        state = Mouse.GetState();
                        this.multiplayerx = (float)state.X;
                        state = Mouse.GetState();
                        this.multiplayery = (float)state.Y;
                    }
                }
                state = Mouse.GetState();
                if (state.RightButton == ButtonState.Pressed)
                {
                    if (!this.MouseMoveBasePlayer)
                    {
                        state = Mouse.GetState();
                        this.x = (float)state.X;
                        state = Mouse.GetState();
                        this.y = (float)state.Y;
                    }
                    else
                    {
                        this.multiplayer = true;
                        state = Mouse.GetState();
                        this.multiplayerx = (float)state.X;
                        state = Mouse.GetState();
                        this.multiplayery = (float)state.Y;
                    }
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.PageUp))
                    this.UpdateBackgroundColor = false;
                if (Keyboard.GetState().IsKeyDown(InputKeys.PageDown))
                    this.UpdateBackgroundColor = true;
                if (Keyboard.GetState().IsKeyDown(InputKeys.End))
                {
                    this.BackroundColor = Color.Orange;
                    this.UpdateBackgroundColor = false;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemOpenBrackets))
                {
                    this.ballColor = Color.Orange;
                    this.actualColor = Color.Orange;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemCloseBrackets))
                {
                    this.actualColor.A = byte.MaxValue;
                    this.ballColor.A = byte.MaxValue;
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemBackslash))
                {
                    if (this.actualColor.A < 255)
                    {
                        this.actualColor.A++;
                        this.ballColor.A++;
                    }
                }
                if (Keyboard.GetState().IsKeyDown(InputKeys.OemSemicolon))
                {
                    if (this.actualColor.A > 0)
                    {
                        this.actualColor.A--;
                        this.ballColor.A--;
                    }
                }
                // File I/O removed - not supported in browser
            }
            if (Keyboard.GetState().IsKeyDown(InputKeys.F4))
                this.controlsenabled = true;
            if (!this.enabled)
            {
                this.spriteBatch.Begin();
                SpriteBatch spriteBatch = this.spriteBatch;
                SpriteFont spriteFont = this.spriteFont;
                string text = "Game Over!\nPress Space to Restart";
                viewport = this.GraphicsDevice.Viewport;
                double num1 = (double)(viewport.Width / 2);
                viewport = this.GraphicsDevice.Viewport;
                double num2 = (double)(viewport.Height / 2);
                Vector2 position = new Vector2((float)num1, (float)num2);
                Color gold = Color.Gold;
                spriteBatch.DrawString(spriteFont, text, position, gold);
                this.spriteBatch.End();
            }
            if ((int)this.actualColor.A == 0)
                this.actualColor.A = byte.MaxValue;
            double num3 = (double)this.x;
            viewport = this.GraphicsDevice.Viewport;
            double num4 = (double)viewport.Bounds.Width;
            if (num3 >= num4)
            {
                if (this.edgeofscreenlose)
                {
                    this.spriteBatch.Begin();
                    SpriteBatch spriteBatch = this.spriteBatch;
                    SpriteFont spriteFont = this.spriteFont;
                    string text = "Game Over!\nPress Space to Restart";
                    viewport = this.GraphicsDevice.Viewport;
                    double num1 = (double)(viewport.Width / 2);
                    viewport = this.GraphicsDevice.Viewport;
                    double num2 = (double)(viewport.Height / 2);
                    Vector2 position = new Vector2((float)num1, (float)num2);
                    Color gold = Color.Gold;
                    spriteBatch.DrawString(spriteFont, text, position, gold);
                    this.spriteBatch.End();
                    this.enabled = false;
                }
                else if (this.bouncy)
                    this.vx = this.vx - this.vx * 2f;
                else
                    this.x = (float)-this.texture.Width;
            }
            else if ((double)this.x < (double)-this.texture.Width)
            {
                if (this.edgeofscreenlose)
                {
                    this.spriteBatch.Begin();
                    SpriteBatch spriteBatch = this.spriteBatch;
                    SpriteFont spriteFont = this.spriteFont;
                    string text = "Game Over!\nPress Space to Restart";
                    viewport = this.GraphicsDevice.Viewport;
                    double num1 = (double)(viewport.Width / 2);
                    viewport = this.GraphicsDevice.Viewport;
                    double num2 = (double)(viewport.Height / 2);
                    Vector2 position = new Vector2((float)num1, (float)num2);
                    Color gold = Color.Gold;
                    spriteBatch.DrawString(spriteFont, text, position, gold);
                    this.spriteBatch.End();
                    this.enabled = false;
                }
                else if (this.bouncy)
                {
                    this.vx = (float)Math.Abs(this.vx);
                }
                else
                {
                    viewport = this.GraphicsDevice.Viewport;
                    this.x = (float)viewport.Bounds.Width;
                }
            }
            double num5 = (double)this.y;
            viewport = this.GraphicsDevice.Viewport;
            double num6 = (double)viewport.Bounds.Height;
            if (num5 >= num6)
            {
                if (this.edgeofscreenlose)
                {
                    this.spriteBatch.Begin();
                    SpriteBatch spriteBatch = this.spriteBatch;
                    SpriteFont spriteFont = this.spriteFont;
                    string text = "Game Over!\nPress Space to Restart";
                    viewport = this.GraphicsDevice.Viewport;
                    double num1 = (double)(viewport.Width / 2);
                    viewport = this.GraphicsDevice.Viewport;
                    double num2 = (double)(viewport.Height / 2);
                    Vector2 position = new Vector2((float)num1, (float)num2);
                    Color gold = Color.Gold;
                    spriteBatch.DrawString(spriteFont, text, position, gold);
                    this.spriteBatch.End();
                    this.enabled = false;
                }
                else if (this.bouncy)
                    this.vy = this.vy - this.vy * 2f;
                else
                    this.y = (float)-this.texture.Height;
            }
            else if ((double)this.y < (double)-this.texture.Height)
            {
                if (this.edgeofscreenlose)
                {
                    this.spriteBatch.Begin();
                    SpriteBatch spriteBatch = this.spriteBatch;
                    SpriteFont spriteFont = this.spriteFont;
                    string text = "Game Over!\nPress Space to Restart";
                    viewport = this.GraphicsDevice.Viewport;
                    double num1 = (double)(viewport.Width / 2);
                    viewport = this.GraphicsDevice.Viewport;
                    double num2 = (double)(viewport.Height / 2);
                    Vector2 position = new Vector2((float)num1, (float)num2);
                    Color gold = Color.Gold;
                    spriteBatch.DrawString(spriteFont, text, position, gold);
                    this.spriteBatch.End();
                    this.enabled = false;
                }
                else if (this.bouncy)
                {
                    this.vy = (float)Math.Abs(this.vy);
                }
                else
                {
                    viewport = this.GraphicsDevice.Viewport;
                    this.y = (float)viewport.Bounds.Height;
                }
            }
            if (this.StopWhenNotMoving && !this.moved)
            {
                this.vx = 0.0f;
                this.vy = 0.0f;
            }
            this.vx *= this.xdrag;
            this.vy *= this.ydrag;
            this.gravity_effect *= this.ydrag;
            this.gravity_effect += this.gravity;
            base.Draw(gameTime);
        }

        private void ResetGame()
        {
            this.UpdateBackgroundColor = true;
            this.StopWhenNotMoving = false;
            this.clear = true;
            this.xdrag = 0.99f;
            this.ydrag = 0.99f;
            this.ballColor = Color.White;
            this.actualColor = Color.White;
            this.accel = 0.1f;
            this.gravity_effect = 0.0f;
            this.gravity = 0.0f;
            this.x = 0.0f;
            this.y = 0.0f;
            this.vx = 0.0f;
            this.vy = 0.0f;
            this.bouncy = false;
            this.blue = 1f;
            this.edgeofscreenlose = false;
            this.multiplayer = false;
            this.multiplayerx = 0.0f;
            this.multiplayery = 0.0f;
            this.enabled = true;
            this.controlsenabled = true;
            this.multiplayervy = 0.0f;
            this.multiplayervx = 0.0f;
            this.multiplayeredgeofscreendie = false;
            this.multiplayerColor = Color.White;
            this.actualMultiplayerColor = Color.White;
            this.multiplayercontrolsenabled = true;
            this.FollowBackgroundColor = false;
        }
    }
}
