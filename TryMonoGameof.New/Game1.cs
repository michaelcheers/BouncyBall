// Decompiled with JetBrains decompiler
// Type: Bouncy_Ball.Game1
// Assembly: Bouncy Ball, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 772B0793-14B8-4078-BDA9-0D381912CDBE
// Assembly location: C:\Users\Michael\Desktop\Bouncy Ball\Visual Studio 2010 Daddy\Projects\Bouncy Ball\Bouncy Ball\Bouncy Ball\bin\x86\Debug\Bouncy Ball.exe

using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using System;
using System.Diagnostics;
using System.IO;

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
    private BlendState blendState = BlendState.AlphaBlend;
    private SpriteSortMode spriteSortMode = SpriteSortMode.Deferred;
    private SpriteFont spriteFont;
    private GraphicsDeviceManager graphics;
    private SpriteBatch spriteBatch;
    private Texture2D texture;
    private Color actualColor;
    private Color actualMultiplayerColor;

    public Game1()
    {
      this.graphics = new GraphicsDeviceManager((Game) this);
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
      if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed)
        this.Exit();
      base.Update(gameTime);
    }
      
    protected override void Draw(GameTime gameTime)
    {
      if (this.enabled)
      {
        if (this.clear)
        {
          if (this.UpdateBackgroundColor)
            this.BackroundColor = new Color((float) (Math.Cos((double) this.x * 0.00999999977648258) + 1.0) / 2f, (float) (Math.Cos((double) this.y * 0.00999999977648258) + 1.0) / 2f, this.blue, (float) this.alpha);
          this.GraphicsDevice.Clear(this.BackroundColor);
          if (this.FollowBackgroundColor)
          {
            this.ballColor = new Color((float) (Math.Cos((double) this.x * 0.00999999977648258) + 1.0) / 2f, (float) (Math.Cos((double) this.y * 0.00999999977648258) + 1.0) / 2f, this.blue, (float) this.alpha);
            this.actualColor = this.ballColor;
          }
        }
        this.moved = false;
        this.spriteBatch.Begin(this.spriteSortMode, this.blendState);
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
          if (Keyboard.GetState().IsKeyDown(Keys.Left) || Keyboard.GetState().IsKeyDown(Keys.A))
          {
            this.vx -= this.accel;
            this.moved = true;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.Right) || Keyboard.GetState().IsKeyDown(Keys.D))
          {
            this.vx += this.accel;
            this.moved = true;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.Up) || Keyboard.GetState().IsKeyDown(Keys.W))
          {
            this.vy -= this.accel;
            this.moved = true;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.Down) || Keyboard.GetState().IsKeyDown(Keys.S))
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
          if (Keyboard.GetState().IsKeyDown(Keys.Left))
          {
            this.vx -= this.accel;
            this.moved = true;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.A))
            this.multiplayervx -= 0.1f;
          if (Keyboard.GetState().IsKeyDown(Keys.Right))
          {
            this.vx += this.accel;
            this.moved = true;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.D))
            this.multiplayervx += 0.1f;
          if (Keyboard.GetState().IsKeyDown(Keys.Up))
          {
            this.vy -= this.accel;
            this.moved = true;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.W))
            this.multiplayervy -= 0.1f;
          if (Keyboard.GetState().IsKeyDown(Keys.Down))
          {
            this.vy += this.accel;
            this.moved = true;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.S))
            this.multiplayervy += 0.1f;
          if (Keyboard.GetState().IsKeyDown(Keys.LeftShift))
            this.multiplayeredgeofscreendie = true;
          if (Keyboard.GetState().IsKeyDown(Keys.RightShift))
            this.edgeofscreenlose = true;
          if (Keyboard.GetState().IsKeyDown(Keys.LeftControl))
            this.multiplayeredgeofscreendie = false;
          if (Keyboard.GetState().IsKeyDown(Keys.RightControl))
            this.edgeofscreenlose = false;
          if (Keyboard.GetState().IsKeyDown(Keys.CapsLock) && this.multiplayerColor != Color.Transparent)
          {
            this.multiplayerColor = new Color(this.random.Next(256), this.random.Next(256), this.random.Next(256), this.random.Next(256));
            this.actualMultiplayerColor = this.multiplayerColor;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.F5))
            this.multiplayerColor = Color.Transparent;
          if (Keyboard.GetState().IsKeyDown(Keys.F6))
            this.multiplayerColor = this.actualMultiplayerColor;
          if (Keyboard.GetState().IsKeyDown(Keys.F7) && this.multiplayerColor != Color.Transparent)
          {
            this.multiplayerColor = Color.White;
            this.actualMultiplayerColor = Color.White;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.F8) && this.multiplayerColor != Color.Transparent)
          {
            this.multiplayerColor = Color.Black;
            this.actualMultiplayerColor = Color.Black;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.F9) && this.multiplayerColor != Color.Transparent)
          {
            this.multiplayerColor = Color.HotPink;
            this.actualMultiplayerColor = Color.HotPink;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.F10))
          {
            this.multiplayerx = 0.0f;
            this.multiplayery = 0.0f;
          }
          if (Keyboard.GetState().IsKeyDown(Keys.F11))
          {
            this.multiplayerx = (float) (this.GraphicsDevice.Viewport.Bounds.Width / 2);
            this.multiplayery = (float) (this.GraphicsDevice.Viewport.Bounds.Height / 2);
          }
          if (Keyboard.GetState().IsKeyDown(Keys.Delete))
          {
            this.multiplayervx = 0.0f;
            this.multiplayervy = 0.0f;
          }
        }
        if ((double) this.multiplayerx >= (double) this.GraphicsDevice.Viewport.Bounds.Width)
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
            this.multiplayerx = (float) -this.texture.Width;
        }
        else if ((double) this.multiplayerx < (double) -this.texture.Width)
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
            this.multiplayervx = Math.Abs(this.multiplayervx);
          else
            this.multiplayerx = (float) this.GraphicsDevice.Viewport.Bounds.Width;
        }
        if ((double) this.multiplayery >= (double) this.GraphicsDevice.Viewport.Bounds.Height)
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
            this.multiplayery = (float) -this.texture.Height;
        }
        else if ((double) this.multiplayery < (double) -this.texture.Height)
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
            this.multiplayervy = Math.Abs(this.multiplayervy);
          else
            this.multiplayery = (float) this.GraphicsDevice.Viewport.Bounds.Height;
        }
        this.multiplayervy *= this.ydrag;
        this.multiplayervx *= this.xdrag;
        this.multiplayervy += this.gravity;
      }
      Viewport viewport;
      if (this.controlsenabled)
      {
        if (Keyboard.GetState().IsKeyDown(Keys.D6) || Keyboard.GetState().IsKeyDown(Keys.NumPad6))
          this.StopWhenNotMoving = true;
        if (Keyboard.GetState().IsKeyDown(Keys.D7) || Keyboard.GetState().IsKeyDown(Keys.NumPad7))
          this.StopWhenNotMoving = false;
        if (Keyboard.GetState().IsKeyDown(Keys.D4) || Keyboard.GetState().IsKeyDown(Keys.NumPad4))
          this.clear = false;
        if (Keyboard.GetState().IsKeyDown(Keys.NumPad5) || Keyboard.GetState().IsKeyDown(Keys.D5))
          this.clear = true;
        if (Keyboard.GetState().IsKeyDown(Keys.T))
        {
          this.x = (float) this.random.Next(0, this.GraphicsDevice.Viewport.Bounds.Width + 1);
          Random random = this.random;
          int minValue = 0;
          viewport = this.GraphicsDevice.Viewport;
          int maxValue = viewport.Bounds.Height + 1;
          this.y = (float) random.Next(minValue, maxValue);
        }
        if (Keyboard.GetState().IsKeyDown(Keys.C) && !(this.ballColor == Color.Transparent))
        {
          this.ballColor = new Color(this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256));
          this.actualColor = this.ballColor;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.Enter))
        {
          this.ballColor = new Color(this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256), 0);
          this.actualColor = this.ballColor;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.OemQuotes))
        {
          this.ballColor = new Color(this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256), (int) this.ballColor.A);
          this.actualColor = this.ballColor;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.B))
        {
          this.x = 0.0f;
          this.y = 0.0f;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.M))
        {
          viewport = this.GraphicsDevice.Viewport;
          this.x = (float) (viewport.Bounds.Width / 2);
          viewport = this.GraphicsDevice.Viewport;
          this.y = (float) (viewport.Bounds.Height / 2);
        }
        if (Keyboard.GetState().IsKeyDown(Keys.I))
          this.ballColor = Color.Transparent;
        if (Keyboard.GetState().IsKeyDown(Keys.H))
          this.ballColor = this.actualColor;
        if (Keyboard.GetState().IsKeyDown(Keys.P) && !(this.ballColor == Color.Transparent))
        {
          this.ballColor = Color.HotPink;
          this.actualColor = this.ballColor;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.X))
        {
          this.vx = 0.0f;
          this.vy = 0.0f;
          this.gravity_effect = 0.0f;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.E) || Keyboard.GetState().IsKeyDown(Keys.Escape))
        {
          foreach (Process process in Process.GetProcessesByName("Variable Changer"))
            process.Kill();
          Environment.Exit(0);
        }
        if (Keyboard.GetState().IsKeyDown(Keys.V))
          this.bouncy = true;
        if (Keyboard.GetState().IsKeyDown(Keys.Z))
          this.bouncy = false;
        if (Keyboard.GetState().IsKeyDown(Keys.L))
        {
          if (!this.L_Pressed_Last_Frame)
          {
            this.vx = -this.vx;
            this.vy = -this.vy;
          }
          this.L_Pressed_Last_Frame = true;
        }
        if (Keyboard.GetState().IsKeyUp(Keys.L))
          this.L_Pressed_Last_Frame = false;
        if (Keyboard.GetState().IsKeyDown(Keys.N))
          this.gravity += (float)(1.0 / 1000.0);
        if (Keyboard.GetState().IsKeyDown(Keys.O) && (double) this.gravity > 0.0)
          this.gravity -= (float)(1.0 / 1000.0);
        if (Keyboard.GetState().IsKeyDown(Keys.Q) && this.ballColor != Color.Transparent)
        {
          this.ballColor = Color.White;
          this.actualColor = this.ballColor;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.R))
          this.gravity = 0.0f;
        if (Keyboard.GetState().IsKeyDown(Keys.J))
        {
          this.xdrag = 1f;
          this.ydrag = 1f;
        }
      }
      if (Keyboard.GetState().IsKeyDown(Keys.Space))
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
      if (this.controlsenabled)
      {
        if (Keyboard.GetState().IsKeyDown(Keys.LeftAlt) || Keyboard.GetState().IsKeyDown(Keys.RightAlt))
          this.multiplayer = false;
        if (Keyboard.GetState().IsKeyDown(Keys.U))
        {
          this.xdrag = 0.99f;
          this.ydrag = 0.99f;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.K) && (double) this.blue != (double) byte.MaxValue)
          this.blue += 63f;
        if (Keyboard.GetState().IsKeyDown(Keys.F) && (double) this.blue != 0.0)
          this.blue -= 63f;
        if (Keyboard.GetState().IsKeyDown(Keys.Y))
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
          if (Keyboard.GetState().IsKeyDown(Keys.LeftShift) || Keyboard.GetState().IsKeyDown(Keys.RightShift))
            this.edgeofscreenlose = true;
          if (Keyboard.GetState().IsKeyDown(Keys.LeftControl) || Keyboard.GetState().IsKeyDown(Keys.RightControl))
            this.edgeofscreenlose = false;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.G))
        {
          this.ballColor = Color.Black;
          this.actualColor = Color.Black;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.F1))
          this.enabled = false;
        if (Keyboard.GetState().IsKeyDown(Keys.F2))
        {
          this.enabled = true;
          this.edgeofscreenlose = false;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.F3))
          this.controlsenabled = false;
        if (Keyboard.GetState().IsKeyDown(Keys.OemPeriod))
          this.MouseMoveBasePlayer = true;
        if (Keyboard.GetState().IsKeyDown(Keys.OemQuestion))
          this.MouseMoveBasePlayer = false;
        if (Keyboard.GetState().IsKeyDown(Keys.Divide))
        {
          this.UpdateBackgroundColor = false;
          this.BackroundColor = new Color(this.random.Next(0, 256), this.random.Next(0, 256), this.random.Next(0, 256));
        }
        if (Keyboard.GetState().IsKeyDown(Keys.Tab))
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
        if (Keyboard.GetState().IsKeyDown(Keys.OemMinus))
          this.multiplayercontrolsenabled = false;
        if (Keyboard.GetState().IsKeyDown(Keys.OemPlus))
          this.multiplayercontrolsenabled = true;
        if (Keyboard.GetState().IsKeyDown(Keys.F12))
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
        if (Keyboard.GetState().IsKeyDown(Keys.NumLock))
          this.MultiplayerDieMultiplayerDissipear = true;
        if (Keyboard.GetState().IsKeyDown(Keys.Home))
        {
          this.multiplayer = true;
          this.multiplayerColor = Color.White;
          this.actualMultiplayerColor = Color.White;
          this.multiplayeredgeofscreendie = false;
          this.multiplayercontrolsenabled = true;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.D3) || Keyboard.GetState().IsKeyDown(Keys.NumPad3))
        {
          if ((double) this.vx < 0.0)
          {
            this.vx -= this.accel;
            this.moved = true;
          }
          else if ((double) this.vx > 0.0)
          {
            this.vx += this.accel;
            this.moved = true;
          }
          if ((double) this.vy < 0.0)
          {
            this.vy -= this.accel;
            this.moved = true;
          }
          else if ((double) this.vy > 0.0)
          {
            this.vy += this.accel;
            this.moved = true;
          }
        }
        if (Keyboard.GetState().IsKeyDown(Keys.D0) || Keyboard.GetState().IsKeyDown(Keys.NumPad0))
          this.accel += (float)(1.0 / 1000.0);
        if (Keyboard.GetState().IsKeyDown(Keys.D1) || Keyboard.GetState().IsKeyDown(Keys.NumPad1))
        {
          this.accel -= (float)(1.0 / 1000.0);
          if ((double) this.accel < 0.0)
            this.accel = 0.0f;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.D2) || Keyboard.GetState().IsKeyDown(Keys.NumPad2))
          this.accel = 0.1f;
        if ((Keyboard.GetState().IsKeyDown(Keys.D8) || Keyboard.GetState().IsKeyDown(Keys.NumPad8)) && this.ballColor != Color.Transparent)
        {
          this.ballColor = new Color((int) byte.MaxValue, (int) byte.MaxValue, (int) byte.MaxValue, this.random.Next(0, 256));
          this.actualColor = this.ballColor;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.D9) || Keyboard.GetState().IsKeyDown(Keys.NumPad9))
          this.FollowBackgroundColor = true;
        if (Keyboard.GetState().IsKeyDown(Keys.Back))
          this.FollowBackgroundColor = false;
        MouseState state;
        if (Mouse.GetState().LeftButton == ButtonState.Pressed)
        {
          if (this.MouseMoveBasePlayer)
          {
            this.x = (float) Mouse.GetState().X;
            this.y = (float) Mouse.GetState().Y;
          }
          else
          {
            this.multiplayer = true;
            state = Mouse.GetState();
            this.multiplayerx = (float) state.X;
            state = Mouse.GetState();
            this.multiplayery = (float) state.Y;
          }
        }
        state = Mouse.GetState();
        if (state.RightButton == ButtonState.Pressed)
        {
          if (!this.MouseMoveBasePlayer)
          {
            state = Mouse.GetState();
            this.x = (float) state.X;
            state = Mouse.GetState();
            this.y = (float) state.Y;
          }
          else
          {
            this.multiplayer = true;
            state = Mouse.GetState();
            this.multiplayerx = (float) state.X;
            state = Mouse.GetState();
            this.multiplayery = (float) state.Y;
          }
        }
        if (Keyboard.GetState().IsKeyDown(Keys.PageUp))
          this.UpdateBackgroundColor = false;
        if (Keyboard.GetState().IsKeyDown(Keys.PageDown))
          this.UpdateBackgroundColor = true;
        if (Keyboard.GetState().IsKeyDown(Keys.End))
        {
          this.BackroundColor = Color.Orange;
          this.UpdateBackgroundColor = false;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.OemOpenBrackets))
        {
          this.ballColor = Color.Orange;
          this.actualColor = Color.Orange;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.OemCloseBrackets))
        {
          this.actualColor.A = byte.MaxValue;
          this.ballColor.A = byte.MaxValue;
        }
        if (Keyboard.GetState().IsKeyDown(Keys.OemBackslash))
        {
          try
          {
            ++this.actualColor.A;
            ++this.ballColor.A;
          }
          catch (OverflowException ex)
          {
          }
        }
        if (Keyboard.GetState().IsKeyDown(Keys.OemSemicolon))
        {
          try
          {
            --this.actualColor.A;
            --this.ballColor.A;
          }
          catch (OverflowException ex)
          {
          }
        }
        if (Keyboard.GetState().IsKeyDown(Keys.OemComma))
        {
          StreamWriter streamWriter1 = new StreamWriter("../drag.txt");
          streamWriter1.Write(this.xdrag);
          ((TextWriter) streamWriter1).Flush();
          streamWriter1.Close();
          StreamWriter streamWriter2 = new StreamWriter("../gravity.txt");
          streamWriter2.Write(this.gravity);
          ((TextWriter) streamWriter2).Flush();
          streamWriter2.Close();
          //Process.Start("..\\..\\..\\..\\..\\..\\..\\..\\Visual Studio 2013 Daddy\\Projects\\Variable Changer\\Variable Changer\\bin\\Release\\Variable Changer.exe");
          //foreach (Process process in Process.GetProcessesByName("Variable Changer"))
          //  process.WaitForExit();
          StreamReader streamReader1 = new StreamReader("..\\gravity.txt");
          try
          {
            this.gravity = float.Parse(streamReader1.ReadLine());
          }
          catch (ArgumentNullException ex)
          {
          }
          catch (FormatException ex)
          {
          }
          catch (OverflowException ex)
          {
          }
          streamReader1.Close();
          StreamReader streamReader2 = new StreamReader("../drag.txt");
          try
          {
            this.xdrag = float.Parse(streamReader2.ReadLine());
          }
          catch (FormatException ex)
          {
          }
          catch (OverflowException ex)
          {
          }
          catch (ArgumentNullException ex)
          {
          }
          streamReader2.Close();
          this.ydrag = this.xdrag;
          StreamReader streamReader3 = new StreamReader("../Aceeleration.txt");
          try
          {
            this.accel = float.Parse(streamReader3.ReadLine());
          }
          catch (FormatException ex)
          {
          }
          catch (OverflowException ex)
          {
          }
          catch (ArgumentNullException ex)
          {
          }
          streamReader3.Close();
        }
      }
      if (Keyboard.GetState().IsKeyDown(Keys.F4))
        this.controlsenabled = true;
      if (!this.enabled)
      {
        this.spriteBatch.Begin();
        SpriteBatch spriteBatch = this.spriteBatch;
        SpriteFont spriteFont = this.spriteFont;
        string text = "Game Over!\nPress Space to Restart and Press esc or e to quit";
        viewport = this.GraphicsDevice.Viewport;
        double num1 = (double) (viewport.Width / 2);
        viewport = this.GraphicsDevice.Viewport;
        double num2 = (double) (viewport.Height / 2);
        Vector2 position = new Vector2((float) num1, (float) num2);
        Color gold = Color.Gold;
        spriteBatch.DrawString(spriteFont, text, position, gold);
        this.spriteBatch.End();
      }
      if ((int) this.actualColor.A == 0)
        this.actualColor.A = byte.MaxValue;
      double num3 = (double) this.x;
      viewport = this.GraphicsDevice.Viewport;
      double num4 = (double) viewport.Bounds.Width;
      if (num3 >= num4)
      {
        if (this.edgeofscreenlose)
        {
          this.spriteBatch.Begin();
          SpriteBatch spriteBatch = this.spriteBatch;
          SpriteFont spriteFont = this.spriteFont;
          string text = "Game Over!\nPress Space to Restart and Press esc or e to quit";
          viewport = this.GraphicsDevice.Viewport;
          double num1 = (double) (viewport.Width / 2);
          viewport = this.GraphicsDevice.Viewport;
          double num2 = (double) (viewport.Height / 2);
          Vector2 position = new Vector2((float) num1, (float) num2);
          Color gold = Color.Gold;
          spriteBatch.DrawString(spriteFont, text, position, gold);
          this.spriteBatch.End();
          this.enabled = false;
        }
        else if (this.bouncy)
          this.vx = this.vx - this.vx * 2f;
        else
          this.x = (float) -this.texture.Width;
      }
      else if ((double) this.x < (double) -this.texture.Width)
      {
        if (this.edgeofscreenlose)
        {
          this.spriteBatch.Begin();
          SpriteBatch spriteBatch = this.spriteBatch;
          SpriteFont spriteFont = this.spriteFont;
          string text = "Game Over!\nPress Space to Restart and Press esc or e to quit";
          viewport = this.GraphicsDevice.Viewport;
          double num1 = (double) (viewport.Width / 2);
          viewport = this.GraphicsDevice.Viewport;
          double num2 = (double) (viewport.Height / 2);
          Vector2 position = new Vector2((float) num1, (float) num2);
          Color gold = Color.Gold;
          spriteBatch.DrawString(spriteFont, text, position, gold);
          this.spriteBatch.End();
          this.enabled = false;
        }
        else if (this.bouncy)
        {
          this.vx = Math.Abs(this.vx);
        }
        else
        {
          viewport = this.GraphicsDevice.Viewport;
          this.x = (float) viewport.Bounds.Width;
        }
      }
      double num5 = (double) this.y;
      viewport = this.GraphicsDevice.Viewport;
      double num6 = (double) viewport.Bounds.Height;
      if (num5 >= num6)
      {
        if (this.edgeofscreenlose)
        {
          this.spriteBatch.Begin();
          SpriteBatch spriteBatch = this.spriteBatch;
          SpriteFont spriteFont = this.spriteFont;
          string text = "Game Over!\nPress Space to Restart and Press esc or e to quit";
          viewport = this.GraphicsDevice.Viewport;
          double num1 = (double) (viewport.Width / 2);
          viewport = this.GraphicsDevice.Viewport;
          double num2 = (double) (viewport.Height / 2);
          Vector2 position = new Vector2((float) num1, (float) num2);
          Color gold = Color.Gold;
          spriteBatch.DrawString(spriteFont, text, position, gold);
          this.spriteBatch.End();
          this.enabled = false;
        }
        else if (this.bouncy)
          this.vy = this.vy - this.vy * 2f;
        else
          this.y = (float) -this.texture.Height;
      }
      else if ((double) this.y < (double) -this.texture.Height)
      {
        if (this.edgeofscreenlose)
        {
          this.spriteBatch.Begin();
          SpriteBatch spriteBatch = this.spriteBatch;
          SpriteFont spriteFont = this.spriteFont;
          string text = "Game Over!\nPress Space to Restart and Press esc or e to quit";
          viewport = this.GraphicsDevice.Viewport;
          double num1 = (double) (viewport.Width / 2);
          viewport = this.GraphicsDevice.Viewport;
          double num2 = (double) (viewport.Height / 2);
          Vector2 position = new Vector2((float) num1, (float) num2);
          Color gold = Color.Gold;
          spriteBatch.DrawString(spriteFont, text, position, gold);
          this.spriteBatch.End();
          this.enabled = false;
        }
        else if (this.bouncy)
        {
          this.vy = Math.Abs(this.vy);
        }
        else
        {
          viewport = this.GraphicsDevice.Viewport;
          this.y = (float) viewport.Bounds.Height;
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
  }
}
