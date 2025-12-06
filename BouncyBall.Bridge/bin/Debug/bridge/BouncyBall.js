/**
 * Bouncy Ball game restored with Bridge.NET
 * @version 1.0.0.0
 * @compiler Bridge.NET 16.0.0-beta3
 */
Bridge.assembly("BouncyBall", function ($asm, globals) {
    "use strict";

    Bridge.define("Bouncy_Ball.Game1", {
        inherits: [Microsoft.Xna.Framework.Game],
        fields: {
            MouseMoveBasePlayer: false,
            FollowBackgroundColor: false,
            clear: false,
            multiplayercontrolsenabled: false,
            controlsenabled: false,
            enabled: false,
            multiplayeredgeofscreendie: false,
            multiplayer: false,
            multiplayerx: 0,
            multiplayery: 0,
            multiplayervx: 0,
            multiplayervy: 0,
            edgeofscreenlose: false,
            bouncy: false,
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            xdrag: 0,
            ydrag: 0,
            accel: 0,
            gravity: 0,
            gravity_effect: 0,
            blue: 0,
            moved: false,
            StopWhenNotMoving: false,
            UpdateBackgroundColor: false,
            MultiplayerDieMultiplayerDissipear: false,
            alpha: 0,
            BackroundColor: null,
            ballColor: null,
            multiplayerColor: null,
            random: null,
            L_Pressed_Last_Frame: false,
            spriteFont: null,
            graphics: null,
            spriteBatch: null,
            texture: null,
            actualColor: null,
            actualMultiplayerColor: null
        },
        ctors: {
            init: function () {
                this.BackroundColor = new Microsoft.Xna.Framework.Color();
                this.ballColor = new Microsoft.Xna.Framework.Color();
                this.multiplayerColor = new Microsoft.Xna.Framework.Color();
                this.actualColor = new Microsoft.Xna.Framework.Color();
                this.actualMultiplayerColor = new Microsoft.Xna.Framework.Color();
                this.MouseMoveBasePlayer = false;
                this.FollowBackgroundColor = false;
                this.clear = true;
                this.multiplayercontrolsenabled = true;
                this.controlsenabled = true;
                this.enabled = true;
                this.multiplayeredgeofscreendie = false;
                this.multiplayer = false;
                this.multiplayerx = 0.0;
                this.multiplayery = 0.0;
                this.multiplayervx = 0.0;
                this.multiplayervy = 0.0;
                this.edgeofscreenlose = false;
                this.bouncy = false;
                this.x = 0.0;
                this.y = 0.0;
                this.vx = 0.0;
                this.vy = 0.0;
                this.xdrag = 0.99;
                this.ydrag = 0.99;
                this.accel = 0.1;
                this.gravity = 0.0;
                this.gravity_effect = 0.0;
                this.blue = 1.0;
                this.moved = false;
                this.StopWhenNotMoving = false;
                this.UpdateBackgroundColor = true;
                this.MultiplayerDieMultiplayerDissipear = false;
                this.alpha = 255;
                this.BackroundColor = Microsoft.Xna.Framework.Color.White.$clone();
                this.ballColor = Microsoft.Xna.Framework.Color.White.$clone();
                this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                this.random = new System.Random.ctor();
                this.L_Pressed_Last_Frame = false;
            },
            ctor: function () {
                this.$initialize();
                Microsoft.Xna.Framework.Game.ctor.call(this);
                var $t;
                this.graphics = ($t = new Microsoft.Xna.Framework.GraphicsDeviceManager(Bridge.cast(this, Microsoft.Xna.Framework.Game)), $t.IsFullScreen = true, $t.PreferredBackBufferWidth = 800, $t.PreferredBackBufferHeight = 600, $t);
                this.Content.RootDirectory = "Content";
        }
    },
    methods: {
        Initialize: function () {
            this.actualColor = this.ballColor.$clone();
            this.actualMultiplayerColor = this.multiplayerColor.$clone();
            Microsoft.Xna.Framework.Game.prototype.Initialize.call(this);
        },
        LoadContent: function () {
            this.spriteFont = this.Content.Load(Microsoft.Xna.Framework.Graphics.SpriteFont, "Arial");
            this.texture = this.Content.Load(Microsoft.Xna.Framework.Graphics.Texture2D, "ball");
            this.spriteBatch = new Microsoft.Xna.Framework.Graphics.SpriteBatch(this.GraphicsDevice);
            this.IsMouseVisible = true;
        },
        UnloadContent: function () { },
        Update: function (gameTime) {
            Microsoft.Xna.Framework.Game.prototype.Update.call(this, gameTime);
        },
        Draw: function (gameTime) {
            if (this.enabled) {
                if (this.clear) {
                    if (this.UpdateBackgroundColor) {
                        this.BackroundColor = new Microsoft.Xna.Framework.Color.$ctor9((Math.cos(this.x * 0.00999999977648258) + 1.0) / 2.0, (Math.cos(this.y * 0.00999999977648258) + 1.0) / 2.0, this.blue, this.alpha);
                    }
                    this.GraphicsDevice.Clear(this.BackroundColor.$clone());
                    if (this.FollowBackgroundColor) {
                        this.ballColor = new Microsoft.Xna.Framework.Color.$ctor9((Math.cos(this.x * 0.00999999977648258) + 1.0) / 2.0, (Math.cos(this.y * 0.00999999977648258) + 1.0) / 2.0, this.blue, this.alpha);
                        this.actualColor = this.ballColor.$clone();
                    }
                }
                this.moved = false;
                this.spriteBatch.Begin();
                this.spriteBatch.Draw$3(this.texture, new Microsoft.Xna.Framework.Vector2.$ctor2(this.x, this.y), this.ballColor.$clone());
                if (this.multiplayer) {
                    this.spriteBatch.Draw$3(this.texture, new Microsoft.Xna.Framework.Vector2.$ctor2(this.multiplayerx, this.multiplayery), this.multiplayerColor.$clone());
                }
                this.spriteBatch.End();
            }
            this.x += this.vx;
            this.y += this.vy;
            this.y += this.gravity_effect;
            if (!this.multiplayer) {
                if (this.controlsenabled) {
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Left) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.A)) {
                        this.vx -= this.accel;
                        this.moved = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Right) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D)) {
                        this.vx += this.accel;
                        this.moved = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Up) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.W)) {
                        this.vy -= this.accel;
                        this.moved = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Down) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.S)) {
                        this.vy += this.accel;
                        this.moved = true;
                    }
                }
            } else {
                this.multiplayerx += this.multiplayervx;
                this.multiplayery += this.multiplayervy;
                if (this.controlsenabled && this.multiplayercontrolsenabled) {
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Left)) {
                        this.vx -= this.accel;
                        this.moved = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.A)) {
                        this.multiplayervx -= 0.1;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Right)) {
                        this.vx += this.accel;
                        this.moved = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D)) {
                        this.multiplayervx += 0.1;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Up)) {
                        this.vy -= this.accel;
                        this.moved = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.W)) {
                        this.multiplayervy -= 0.1;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Down)) {
                        this.vy += this.accel;
                        this.moved = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.S)) {
                        this.multiplayervy += 0.1;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftShift)) {
                        this.multiplayeredgeofscreendie = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightShift)) {
                        this.edgeofscreenlose = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftControl)) {
                        this.multiplayeredgeofscreendie = false;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightControl)) {
                        this.edgeofscreenlose = false;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.CapsLock) && Microsoft.Xna.Framework.Color.op_Inequality(this.multiplayerColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                        this.multiplayerColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.next$1(256), this.random.next$1(256), this.random.next$1(256), this.random.next$1(256));
                        this.actualMultiplayerColor = this.multiplayerColor.$clone();
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F5)) {
                        this.multiplayerColor = Microsoft.Xna.Framework.Color.Transparent.$clone();
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F6)) {
                        this.multiplayerColor = this.actualMultiplayerColor.$clone();
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F7) && Microsoft.Xna.Framework.Color.op_Inequality(this.multiplayerColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                        this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                        this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F8) && Microsoft.Xna.Framework.Color.op_Inequality(this.multiplayerColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                        this.multiplayerColor = Microsoft.Xna.Framework.Color.Black.$clone();
                        this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.Black.$clone();
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F9) && Microsoft.Xna.Framework.Color.op_Inequality(this.multiplayerColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                        this.multiplayerColor = Microsoft.Xna.Framework.Color.HotPink.$clone();
                        this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.HotPink.$clone();
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F10)) {
                        this.multiplayerx = 0.0;
                        this.multiplayery = 0.0;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F11)) {
                        this.multiplayerx = ((Bridge.Int.div(this.GraphicsDevice.Viewport.Bounds.Width, 2)) | 0);
                        this.multiplayery = ((Bridge.Int.div(this.GraphicsDevice.Viewport.Bounds.Height, 2)) | 0);
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Delete)) {
                        this.multiplayervx = 0.0;
                        this.multiplayervy = 0.0;
                    }
                }
                if (this.multiplayerx >= this.GraphicsDevice.Viewport.Bounds.Width) {
                    if (this.multiplayeredgeofscreendie) {
                        if (this.MultiplayerDieMultiplayerDissipear) {
                            this.multiplayer = false;
                        } else {
                            this.multiplayervx = 0.0;
                            this.multiplayervy = 0.0;
                            this.multiplayerx = 0.0;
                            this.multiplayery = 0.0;
                            this.multiplayer = false;
                            this.multiplayer = true;
                        }
                    } else if (this.bouncy) {
                        this.multiplayervx = this.multiplayervx - this.multiplayervx * 2.0;
                    } else {
                        this.multiplayerx = -this.texture.Width;
                    }
                } else if (this.multiplayerx < -this.texture.Width) {
                    if (this.multiplayeredgeofscreendie) {
                        if (this.MultiplayerDieMultiplayerDissipear) {
                            this.multiplayer = false;
                        } else {
                            this.multiplayervx = 0.0;
                            this.multiplayervy = 0.0;
                            this.multiplayerx = 0.0;
                            this.multiplayery = 0.0;
                            this.multiplayer = false;
                            this.multiplayer = true;
                        }
                    } else if (this.bouncy) {
                        this.multiplayervx = Math.abs(this.multiplayervx);
                    } else {
                        this.multiplayerx = this.GraphicsDevice.Viewport.Bounds.Width;
                    }
                }
                if (this.multiplayery >= this.GraphicsDevice.Viewport.Bounds.Height) {
                    if (this.multiplayeredgeofscreendie) {
                        if (this.MultiplayerDieMultiplayerDissipear) {
                            this.multiplayer = false;
                        } else {
                            this.multiplayervx = 0.0;
                            this.multiplayervy = 0.0;
                            this.multiplayerx = 0.0;
                            this.multiplayery = 0.0;
                            this.multiplayer = false;
                            this.multiplayer = true;
                        }
                        this.multiplayer = true;
                    } else if (this.bouncy) {
                        this.multiplayervy = this.multiplayervy - this.multiplayervy * 2.0;
                    } else {
                        this.multiplayery = -this.texture.Height;
                    }
                } else if (this.multiplayery < -this.texture.Height) {
                    if (this.multiplayeredgeofscreendie) {
                        if (this.MultiplayerDieMultiplayerDissipear) {
                            this.multiplayer = false;
                        } else {
                            this.multiplayervx = 0.0;
                            this.multiplayervy = 0.0;
                            this.multiplayerx = 0.0;
                            this.multiplayery = 0.0;
                            this.multiplayer = false;
                            this.multiplayer = true;
                        }
                    } else if (this.bouncy) {
                        this.multiplayervy = Math.abs(this.multiplayervy);
                    } else {
                        this.multiplayery = this.GraphicsDevice.Viewport.Bounds.Height;
                    }
                }
                this.multiplayervy *= this.ydrag;
                this.multiplayervx *= this.xdrag;
                this.multiplayervy += this.gravity;
            }
            var viewport = new Microsoft.Xna.Framework.Graphics.Viewport();
            if (this.controlsenabled) {
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D6) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad6)) {
                    this.StopWhenNotMoving = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D7) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad7)) {
                    this.StopWhenNotMoving = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D4) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad4)) {
                    this.clear = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad5) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D5)) {
                    this.clear = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.T)) {
                    this.x = this.random.next$2(0, ((this.GraphicsDevice.Viewport.Bounds.Width + 1) | 0));
                    var random = this.random;
                    var minValue = 0;
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var maxValue = (viewport.Bounds.Height + 1) | 0;
                    this.y = random.next$2(minValue, maxValue);
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.C) && !(Microsoft.Xna.Framework.Color.op_Equality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone()))) {
                    this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.next$2(0, 256), this.random.next$2(0, 256), this.random.next$2(0, 256), this.random.next$2(0, 256));
                    this.actualColor = this.ballColor.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                    this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.next$2(0, 256), this.random.next$2(0, 256), this.random.next$2(0, 256), 0);
                    this.actualColor = this.ballColor.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemQuotes)) {
                    this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.next$2(0, 256), this.random.next$2(0, 256), this.random.next$2(0, 256), this.ballColor.A);
                    this.actualColor = this.ballColor.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.B)) {
                    this.x = 0.0;
                    this.y = 0.0;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.M)) {
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    this.x = ((Bridge.Int.div(viewport.Bounds.Width, 2)) | 0);
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    this.y = ((Bridge.Int.div(viewport.Bounds.Height, 2)) | 0);
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.I)) {
                    this.ballColor = Microsoft.Xna.Framework.Color.Transparent.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.H)) {
                    this.ballColor = this.actualColor.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.P) && !(Microsoft.Xna.Framework.Color.op_Equality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone()))) {
                    this.ballColor = Microsoft.Xna.Framework.Color.HotPink.$clone();
                    this.actualColor = this.ballColor.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.X)) {
                    this.vx = 0.0;
                    this.vy = 0.0;
                    this.gravity_effect = 0.0;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.E) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Escape)) {
                    // Exit not supported in browser - just reset instead
                    this.ResetGame();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.V)) {
                    this.bouncy = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Z)) {
                    this.bouncy = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.L)) {
                    if (!this.L_Pressed_Last_Frame) {
                        this.vx = -this.vx;
                        this.vy = -this.vy;
                    }
                    this.L_Pressed_Last_Frame = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyUp(Microsoft.Xna.Framework.Input.Keys.L)) {
                    this.L_Pressed_Last_Frame = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.N)) {
                    this.gravity += 0.001;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.O) && this.gravity > 0.0) {
                    this.gravity -= 0.001;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Q) && Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                    this.ballColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.actualColor = this.ballColor.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.R)) {
                    this.gravity = 0.0;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.J)) {
                    this.xdrag = 1.0;
                    this.ydrag = 1.0;
                }
            }
            if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Space)) {
                this.ResetGame();
            }
            if (this.controlsenabled) {
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftAlt) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightAlt)) {
                    this.multiplayer = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.U)) {
                    this.xdrag = 0.99;
                    this.ydrag = 0.99;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.K) && this.blue !== 255.0) {
                    this.blue += 63.0;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F) && this.blue !== 0.0) {
                    this.blue -= 63.0;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Y)) {
                    this.multiplayer = true;
                    this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.multiplayeredgeofscreendie = false;
                    this.multiplayervx = 0.0;
                    this.multiplayervy = 0.0;
                    this.multiplayerx = 0.0;
                    this.multiplayery = 0.0;
                }
                if (!this.multiplayer) {
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftShift) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightShift)) {
                        this.edgeofscreenlose = true;
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftControl) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightControl)) {
                        this.edgeofscreenlose = false;
                    }
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.G)) {
                    this.ballColor = Microsoft.Xna.Framework.Color.Black.$clone();
                    this.actualColor = Microsoft.Xna.Framework.Color.Black.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F1)) {
                    this.enabled = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F2)) {
                    this.enabled = true;
                    this.edgeofscreenlose = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F3)) {
                    this.controlsenabled = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemPeriod)) {
                    this.MouseMoveBasePlayer = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemQuestion)) {
                    this.MouseMoveBasePlayer = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Divide)) {
                    this.UpdateBackgroundColor = false;
                    this.BackroundColor = new Microsoft.Xna.Framework.Color.$ctor6(this.random.next$2(0, 256), this.random.next$2(0, 256), this.random.next$2(0, 256));
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Tab)) {
                    this.multiplayerx = 0.0;
                    this.multiplayery = 0.0;
                    this.multiplayer = true;
                    this.multiplayervx = 0.0;
                    this.multiplayervy = 0.0;
                    this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.multiplayeredgeofscreendie = false;
                    this.multiplayercontrolsenabled = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemMinus)) {
                    this.multiplayercontrolsenabled = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemPlus)) {
                    this.multiplayercontrolsenabled = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F12)) {
                    this.MultiplayerDieMultiplayerDissipear = false;
                    this.multiplayer = true;
                    this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.multiplayeredgeofscreendie = false;
                    this.multiplayervx = 0.0;
                    this.multiplayervy = 0.0;
                    this.multiplayercontrolsenabled = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumLock)) {
                    this.MultiplayerDieMultiplayerDissipear = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Home)) {
                    this.multiplayer = true;
                    this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                    this.multiplayeredgeofscreendie = false;
                    this.multiplayercontrolsenabled = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D3) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad3)) {
                    if (this.vx < 0.0) {
                        this.vx -= this.accel;
                        this.moved = true;
                    } else if (this.vx > 0.0) {
                        this.vx += this.accel;
                        this.moved = true;
                    }
                    if (this.vy < 0.0) {
                        this.vy -= this.accel;
                        this.moved = true;
                    } else if (this.vy > 0.0) {
                        this.vy += this.accel;
                        this.moved = true;
                    }
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D0) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad0)) {
                    this.accel += 0.001;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D1) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad1)) {
                    this.accel -= 0.001;
                    if (this.accel < 0.0) {
                        this.accel = 0.0;
                    }
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D2) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad2)) {
                    this.accel = 0.1;
                }
                if ((Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D8) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad8)) && Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                    this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(255, 255, 255, this.random.next$2(0, 256));
                    this.actualColor = this.ballColor.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D9) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad9)) {
                    this.FollowBackgroundColor = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Back)) {
                    this.FollowBackgroundColor = false;
                }
                var state = new Microsoft.Xna.Framework.Input.MouseState();
                if (Microsoft.Xna.Framework.Input.Mouse.GetState().LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed) {
                    if (this.MouseMoveBasePlayer) {
                        this.x = Microsoft.Xna.Framework.Input.Mouse.GetState().X;
                        this.y = Microsoft.Xna.Framework.Input.Mouse.GetState().Y;
                    } else {
                        this.multiplayer = true;
                        state = Microsoft.Xna.Framework.Input.Mouse.GetState();
                        this.multiplayerx = state.X;
                        state = Microsoft.Xna.Framework.Input.Mouse.GetState();
                        this.multiplayery = state.Y;
                    }
                }
                state = Microsoft.Xna.Framework.Input.Mouse.GetState();
                if (state.RightButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed) {
                    if (!this.MouseMoveBasePlayer) {
                        state = Microsoft.Xna.Framework.Input.Mouse.GetState();
                        this.x = state.X;
                        state = Microsoft.Xna.Framework.Input.Mouse.GetState();
                        this.y = state.Y;
                    } else {
                        this.multiplayer = true;
                        state = Microsoft.Xna.Framework.Input.Mouse.GetState();
                        this.multiplayerx = state.X;
                        state = Microsoft.Xna.Framework.Input.Mouse.GetState();
                        this.multiplayery = state.Y;
                    }
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.PageUp)) {
                    this.UpdateBackgroundColor = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.PageDown)) {
                    this.UpdateBackgroundColor = true;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.End)) {
                    this.BackroundColor = Microsoft.Xna.Framework.Color.Orange.$clone();
                    this.UpdateBackgroundColor = false;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemOpenBrackets)) {
                    this.ballColor = Microsoft.Xna.Framework.Color.Orange.$clone();
                    this.actualColor = Microsoft.Xna.Framework.Color.Orange.$clone();
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemCloseBrackets)) {
                    this.actualColor.A = 255;
                    this.ballColor.A = 255;
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemBackslash)) {
                    if (this.actualColor.A < 255) {
                        this.actualColor.A = (this.actualColor.A + 1) & 255;
                        this.ballColor.A = (this.ballColor.A + 1) & 255;
                    }
                }
                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemSemicolon)) {
                    if (this.actualColor.A > 0) {
                        this.actualColor.A = (this.actualColor.A - 1) & 255;
                        this.ballColor.A = (this.ballColor.A - 1) & 255;
                    }
                }
                // File I/O removed - not supported in browser
            }
            if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F4)) {
                this.controlsenabled = true;
            }
            if (!this.enabled) {
                this.spriteBatch.Begin();
                var spriteBatch = this.spriteBatch;
                var spriteFont = this.spriteFont;
                var text = "Game Over!\nPress Space to Restart";
                viewport = this.GraphicsDevice.Viewport.$clone();
                var num1 = ((Bridge.Int.div(viewport.Width, 2)) | 0);
                viewport = this.GraphicsDevice.Viewport.$clone();
                var num2 = ((Bridge.Int.div(viewport.Height, 2)) | 0);
                var position = new Microsoft.Xna.Framework.Vector2.$ctor2(num1, num2);
                var gold = Microsoft.Xna.Framework.Color.Gold.$clone();
                spriteBatch.DrawString(spriteFont, text, position.$clone(), gold.$clone());
                this.spriteBatch.End();
            }
            if (this.actualColor.A === 0) {
                this.actualColor.A = 255;
            }
            var num3 = this.x;
            viewport = this.GraphicsDevice.Viewport.$clone();
            var num4 = viewport.Bounds.Width;
            if (num3 >= num4) {
                if (this.edgeofscreenlose) {
                    this.spriteBatch.Begin();
                    var spriteBatch1 = this.spriteBatch;
                    var spriteFont1 = this.spriteFont;
                    var text1 = "Game Over!\nPress Space to Restart";
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var num11 = ((Bridge.Int.div(viewport.Width, 2)) | 0);
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var num21 = ((Bridge.Int.div(viewport.Height, 2)) | 0);
                    var position1 = new Microsoft.Xna.Framework.Vector2.$ctor2(num11, num21);
                    var gold1 = Microsoft.Xna.Framework.Color.Gold.$clone();
                    spriteBatch1.DrawString(spriteFont1, text1, position1.$clone(), gold1.$clone());
                    this.spriteBatch.End();
                    this.enabled = false;
                } else if (this.bouncy) {
                    this.vx = this.vx - this.vx * 2.0;
                } else {
                    this.x = -this.texture.Width;
                }
            } else if (this.x < -this.texture.Width) {
                if (this.edgeofscreenlose) {
                    this.spriteBatch.Begin();
                    var spriteBatch2 = this.spriteBatch;
                    var spriteFont2 = this.spriteFont;
                    var text2 = "Game Over!\nPress Space to Restart";
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var num12 = ((Bridge.Int.div(viewport.Width, 2)) | 0);
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var num22 = ((Bridge.Int.div(viewport.Height, 2)) | 0);
                    var position2 = new Microsoft.Xna.Framework.Vector2.$ctor2(num12, num22);
                    var gold2 = Microsoft.Xna.Framework.Color.Gold.$clone();
                    spriteBatch2.DrawString(spriteFont2, text2, position2.$clone(), gold2.$clone());
                    this.spriteBatch.End();
                    this.enabled = false;
                } else if (this.bouncy) {
                    this.vx = Math.abs(this.vx);
                } else {
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    this.x = viewport.Bounds.Width;
                }
            }
            var num5 = this.y;
            viewport = this.GraphicsDevice.Viewport.$clone();
            var num6 = viewport.Bounds.Height;
            if (num5 >= num6) {
                if (this.edgeofscreenlose) {
                    this.spriteBatch.Begin();
                    var spriteBatch3 = this.spriteBatch;
                    var spriteFont3 = this.spriteFont;
                    var text3 = "Game Over!\nPress Space to Restart";
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var num13 = ((Bridge.Int.div(viewport.Width, 2)) | 0);
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var num23 = ((Bridge.Int.div(viewport.Height, 2)) | 0);
                    var position3 = new Microsoft.Xna.Framework.Vector2.$ctor2(num13, num23);
                    var gold3 = Microsoft.Xna.Framework.Color.Gold.$clone();
                    spriteBatch3.DrawString(spriteFont3, text3, position3.$clone(), gold3.$clone());
                    this.spriteBatch.End();
                    this.enabled = false;
                } else if (this.bouncy) {
                    this.vy = this.vy - this.vy * 2.0;
                } else {
                    this.y = -this.texture.Height;
                }
            } else if (this.y < -this.texture.Height) {
                if (this.edgeofscreenlose) {
                    this.spriteBatch.Begin();
                    var spriteBatch4 = this.spriteBatch;
                    var spriteFont4 = this.spriteFont;
                    var text4 = "Game Over!\nPress Space to Restart";
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var num14 = ((Bridge.Int.div(viewport.Width, 2)) | 0);
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    var num24 = ((Bridge.Int.div(viewport.Height, 2)) | 0);
                    var position4 = new Microsoft.Xna.Framework.Vector2.$ctor2(num14, num24);
                    var gold4 = Microsoft.Xna.Framework.Color.Gold.$clone();
                    spriteBatch4.DrawString(spriteFont4, text4, position4.$clone(), gold4.$clone());
                    this.spriteBatch.End();
                    this.enabled = false;
                } else if (this.bouncy) {
                    this.vy = Math.abs(this.vy);
                } else {
                    viewport = this.GraphicsDevice.Viewport.$clone();
                    this.y = viewport.Bounds.Height;
                }
            }
            if (this.StopWhenNotMoving && !this.moved) {
                this.vx = 0.0;
                this.vy = 0.0;
            }
            this.vx *= this.xdrag;
            this.vy *= this.ydrag;
            this.gravity_effect *= this.ydrag;
            this.gravity_effect += this.gravity;
            Microsoft.Xna.Framework.Game.prototype.Draw.call(this, gameTime);
        },
        ResetGame: function () {
            this.UpdateBackgroundColor = true;
            this.StopWhenNotMoving = false;
            this.clear = true;
            this.xdrag = 0.99;
            this.ydrag = 0.99;
            this.ballColor = Microsoft.Xna.Framework.Color.White.$clone();
            this.actualColor = Microsoft.Xna.Framework.Color.White.$clone();
            this.accel = 0.1;
            this.gravity_effect = 0.0;
            this.gravity = 0.0;
            this.x = 0.0;
            this.y = 0.0;
            this.vx = 0.0;
            this.vy = 0.0;
            this.bouncy = false;
            this.blue = 1.0;
            this.edgeofscreenlose = false;
            this.multiplayer = false;
            this.multiplayerx = 0.0;
            this.multiplayery = 0.0;
            this.enabled = true;
            this.controlsenabled = true;
            this.multiplayervy = 0.0;
            this.multiplayervx = 0.0;
            this.multiplayeredgeofscreendie = false;
            this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
            this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
            this.multiplayercontrolsenabled = true;
            this.FollowBackgroundColor = false;
        }
    }
    });

    Bridge.define("Bouncy_Ball.Program", {
        main: function Main () {
            var game = new Bouncy_Ball.Game1();
            try {
                game.Run();
            }
            finally {
                if (Bridge.hasValue(game)) {
                    game.System$IDisposable$dispose();
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJCb3VuY3lCYWxsLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJHYW1lMS5jcyIsIlByb2dyYW0uY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFzQzZCQTtzQ0FDVUE7aUNBQ0xBO3dDQUNPQTs4QkFDVEEsSUFBSUE7Ozs7Ozs7Z0JBV3hCQSxnQkFBZ0JBLFVBQUlBLDhDQUFzQkEsWUFBTUE7Z0JBTWhEQTs7Ozs7WUFLQUEsbUJBQW1CQTtZQUNuQkEsOEJBQThCQTtZQUM5QkE7OztZQUtBQSxrQkFBa0JBO1lBQ2xCQSxlQUFlQTtZQUNmQSxtQkFBbUJBLElBQUlBLDZDQUFZQTtZQUNuQ0E7OzswQkFPMkJBO1lBRTNCQSx5REFBWUE7O3dCQUdhQTtZQUV6QkEsSUFBSUE7Z0JBRUFBLElBQUlBO29CQUVBQSxJQUFJQTt3QkFDQUEsc0JBQXNCQSxJQUFJQSxxQ0FBTUEsQUFBT0EsQ0FBQ0EsU0FBU0EsQUFBUUEsNENBQTJDQSxBQUFPQSxDQUFDQSxTQUFTQSxBQUFRQSw0Q0FBMkNBLFdBQVdBLEFBQU9BOztvQkFDOUxBLDBCQUEwQkE7b0JBQzFCQSxJQUFJQTt3QkFFQUEsaUJBQWlCQSxJQUFJQSxxQ0FBTUEsQUFBT0EsQ0FBQ0EsU0FBU0EsQUFBUUEsNENBQTJDQSxBQUFPQSxDQUFDQSxTQUFTQSxBQUFRQSw0Q0FBMkNBLFdBQVdBLEFBQU9BO3dCQUNyTEEsbUJBQW1CQTs7O2dCQUczQkE7Z0JBQ0FBO2dCQUNBQSx3QkFBc0JBLGNBQWNBLElBQUlBLHVDQUFRQSxRQUFRQSxTQUFTQTtnQkFDakVBLElBQUlBO29CQUNBQSx3QkFBc0JBLGNBQWNBLElBQUlBLHVDQUFRQSxtQkFBbUJBLG9CQUFvQkE7O2dCQUMzRkE7O1lBRUpBLFVBQVVBO1lBQ1ZB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O29CQUNuREE7b0JBQ0FBO3VCQUVDQSxJQUFJQTtvQkFDTEEsVUFBVUEsVUFBVUE7O29CQUVwQkEsU0FBU0EsQUFBT0EsQ0FBQ0E7O21CQUVwQkEsSUFBSUEsQUFBUUEsU0FBU0EsQUFBUUEsQ0FBQ0E7Z0JBRS9CQSxJQUFJQTtvQkFFQUE7b0JBQ0FBLG1CQUEwQkE7b0JBQzFCQSxrQkFBd0JBO29CQUN4QkE7b0JBQ0FBLFdBQVdBO29CQUNYQSxZQUFjQSxBQUFRQSxBQUFDQTtvQkFDdkJBLFdBQVdBO29CQUNYQSxZQUFjQSxBQUFRQSxBQUFDQTtvQkFDdkJBLGdCQUFtQkEsSUFBSUEsdUNBQVFBLEFBQU9BLE9BQU1BLEFBQU9BO29CQUNuREEsWUFBYUE7b0JBQ2JBLHdCQUF1QkEsYUFBWUEsT0FBTUEsb0JBQVVBO29CQUNuREE7b0JBQ0FBO3VCQUVDQSxJQUFJQTtvQkFFTEEsVUFBVUEsQUFBT0EsU0FBU0E7O29CQUkxQkEsV0FBV0E7b0JBQ1hBLFNBQVNBLEFBQU9BOzs7WUFHeEJBLElBQUlBLDBCQUEwQkEsQ0FBQ0E7Z0JBRTNCQTtnQkFDQUE7O1lBRUpBLFdBQVdBO1lBQ1hBLFdBQVdBO1lBQ1hBLHVCQUF1QkE7WUFDdkJBLHVCQUF1QkE7WUFDdkJBLHVEQUFVQTs7O1lBS1ZBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBLGlCQUFpQkE7WUFDakJBLG1CQUFtQkE7WUFDbkJBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBLHdCQUF3QkE7WUFDeEJBLDhCQUE4QkE7WUFDOUJBO1lBQ0FBOzs7Ozs7O1lDbHhCQUEsV0FBa0JBLElBQUlBOztnQkFDbEJBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIE1pY3Jvc29mdC5YbmEuRnJhbWV3b3JrO1xyXG51c2luZyBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5HcmFwaGljcztcclxudXNpbmcgTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuSW5wdXQ7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgSW5wdXRLZXlzID0gTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuSW5wdXQuS2V5cztcclxuXHJcbm5hbWVzcGFjZSBCb3VuY3lfQmFsbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgR2FtZTEgOiBHYW1lXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIE1vdXNlTW92ZUJhc2VQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgRm9sbG93QmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIGNsZWFyID0gdHJ1ZTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIGZsb2F0IG11bHRpcGxheWVyeCA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCBtdWx0aXBsYXllcnkgPSAwLjBmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgbXVsdGlwbGF5ZXJ2eCA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCBtdWx0aXBsYXllcnZ5ID0gMC4wZjtcclxuICAgICAgICBwcml2YXRlIGJvb2wgZWRnZW9mc2NyZWVubG9zZSA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBib3VuY3kgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIGZsb2F0IHggPSAwLjBmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgeSA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCB2eCA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCB2eSA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCB4ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgeWRyYWcgPSAwLjk5ZjtcclxuICAgICAgICBwcml2YXRlIGZsb2F0IGFjY2VsID0gMC4xZjtcclxuICAgICAgICBwcml2YXRlIGZsb2F0IGdyYXZpdHkgPSAwLjBmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgZ3Jhdml0eV9lZmZlY3QgPSAwLjBmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgYmx1ZSA9IDFmO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBTdG9wV2hlbk5vdE1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBieXRlIGFscGhhID0gYnl0ZS5NYXhWYWx1ZTtcclxuICAgICAgICBwcml2YXRlIENvbG9yIEJhY2tyb3VuZENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgcHJpdmF0ZSBDb2xvciBiYWxsQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICBwcml2YXRlIENvbG9yIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICBwcml2YXRlIFJhbmRvbSByYW5kb20gPSBuZXcgUmFuZG9tKCk7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIExfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBTcHJpdGVGb250IHNwcml0ZUZvbnQ7XHJcbiAgICAgICAgcHJpdmF0ZSBHcmFwaGljc0RldmljZU1hbmFnZXIgZ3JhcGhpY3M7XHJcbiAgICAgICAgcHJpdmF0ZSBTcHJpdGVCYXRjaCBzcHJpdGVCYXRjaDtcclxuICAgICAgICBwcml2YXRlIFRleHR1cmUyRCB0ZXh0dXJlO1xyXG4gICAgICAgIHByaXZhdGUgQ29sb3IgYWN0dWFsQ29sb3I7XHJcbiAgICAgICAgcHJpdmF0ZSBDb2xvciBhY3R1YWxNdWx0aXBsYXllckNvbG9yO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2FtZTEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0RldmljZU1hbmFnZXIoKEdhbWUpdGhpcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgSXNGdWxsU2NyZWVuID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFByZWZlcnJlZEJhY2tCdWZmZXJXaWR0aCA9IDgwMCxcclxuICAgICAgICAgICAgICAgIFByZWZlcnJlZEJhY2tCdWZmZXJIZWlnaHQgPSA2MDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5Db250ZW50LlJvb3REaXJlY3RvcnkgPSBcIkNvbnRlbnRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvciA9IHRoaXMuYmFsbENvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSB0aGlzLm11bHRpcGxheWVyQ29sb3I7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgTG9hZENvbnRlbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVGb250ID0gdGhpcy5Db250ZW50LkxvYWQ8U3ByaXRlRm9udD4oXCJBcmlhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5Db250ZW50LkxvYWQ8VGV4dHVyZTJEPihcImJhbGxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2ggPSBuZXcgU3ByaXRlQmF0Y2godGhpcy5HcmFwaGljc0RldmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMuSXNNb3VzZVZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgVW5sb2FkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgVXBkYXRlKEdhbWVUaW1lIGdhbWVUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5VcGRhdGUoZ2FtZVRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgRHJhdyhHYW1lVGltZSBnYW1lVGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlVwZGF0ZUJhY2tncm91bmRDb2xvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5CYWNrcm91bmRDb2xvciA9IG5ldyBDb2xvcigoZmxvYXQpKE1hdGguQ29zKChkb3VibGUpdGhpcy54ICogMC4wMDk5OTk5OTk3NzY0ODI1OCkgKyAxLjApIC8gMmYsIChmbG9hdCkoTWF0aC5Db3MoKGRvdWJsZSl0aGlzLnkgKiAwLjAwOTk5OTk5OTc3NjQ4MjU4KSArIDEuMCkgLyAyZiwgdGhpcy5ibHVlLCAoZmxvYXQpdGhpcy5hbHBoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HcmFwaGljc0RldmljZS5DbGVhcih0aGlzLkJhY2tyb3VuZENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Gb2xsb3dCYWNrZ3JvdW5kQ29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGxDb2xvciA9IG5ldyBDb2xvcigoZmxvYXQpKE1hdGguQ29zKChkb3VibGUpdGhpcy54ICogMC4wMDk5OTk5OTk3NzY0ODI1OCkgKyAxLjApIC8gMmYsIChmbG9hdCkoTWF0aC5Db3MoKGRvdWJsZSl0aGlzLnkgKiAwLjAwOTk5OTk5OTc3NjQ4MjU4KSArIDEuMCkgLyAyZiwgdGhpcy5ibHVlLCAoZmxvYXQpdGhpcy5hbHBoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSB0aGlzLmJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkRyYXcodGhpcy50ZXh0dXJlLCBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSksIHRoaXMuYmFsbENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guRHJhdyh0aGlzLnRleHR1cmUsIG5ldyBWZWN0b3IyKHRoaXMubXVsdGlwbGF5ZXJ4LCB0aGlzLm11bHRpcGxheWVyeSksIHRoaXMubXVsdGlwbGF5ZXJDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4O1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuZ3Jhdml0eV9lZmZlY3Q7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsYXllcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuTGVmdCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52eCAtPSB0aGlzLmFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5SaWdodCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52eCArPSB0aGlzLmFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5VcCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlcpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52eSAtPSB0aGlzLmFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5Eb3duKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuUykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ICs9IHRoaXMuYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ICs9IHRoaXMubXVsdGlwbGF5ZXJ2eDtcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ5ICs9IHRoaXMubXVsdGlwbGF5ZXJ2eTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzZW5hYmxlZCAmJiB0aGlzLm11bHRpcGxheWVyY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuTGVmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4IC09IHRoaXMuYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggLT0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlJpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnggKz0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCArPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuVXApKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52eSAtPSB0aGlzLmFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5XKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5IC09IDAuMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5Eb3duKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnkgKz0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuUykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSArPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuTGVmdFNoaWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5SaWdodFNoaWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGdlb2ZzY3JlZW5sb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkxlZnRDb250cm9sKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuUmlnaHRDb250cm9sKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGdlb2ZzY3JlZW5sb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5DYXBzTG9jaykgJiYgdGhpcy5tdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gbmV3IENvbG9yKHRoaXMucmFuZG9tLk5leHQoMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgyNTYpLCB0aGlzLnJhbmRvbS5OZXh0KDI1NiksIHRoaXMucmFuZG9tLk5leHQoMjU2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IHRoaXMubXVsdGlwbGF5ZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5GNSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLlRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRjYpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29sb3IgPSB0aGlzLmFjdHVhbE11bHRpcGxheWVyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5GNykgJiYgdGhpcy5tdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkY4KSAmJiB0aGlzLm11bHRpcGxheWVyQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5CbGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuQmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRjkpICYmIHRoaXMubXVsdGlwbGF5ZXJDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLkhvdFBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLkhvdFBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRjEwKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkYxMSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeCA9IChmbG9hdCkodGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAoZmxvYXQpKHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkRlbGV0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgoZG91YmxlKXRoaXMubXVsdGlwbGF5ZXJ4ID49IChkb3VibGUpdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5NdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSB0aGlzLm11bHRpcGxheWVydnggLSB0aGlzLm11bHRpcGxheWVydnggKiAyZjtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gKGZsb2F0KS10aGlzLnRleHR1cmUuV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoZG91YmxlKXRoaXMubXVsdGlwbGF5ZXJ4IDwgKGRvdWJsZSktdGhpcy50ZXh0dXJlLldpZHRoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ4ID0gKGZsb2F0KU1hdGguQWJzKHRoaXMubXVsdGlwbGF5ZXJ2eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeCA9IChmbG9hdCl0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgoZG91YmxlKXRoaXMubXVsdGlwbGF5ZXJ5ID49IChkb3VibGUpdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IHRoaXMubXVsdGlwbGF5ZXJ2eSAtIHRoaXMubXVsdGlwbGF5ZXJ2eSAqIDJmO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAoZmxvYXQpLXRoaXMudGV4dHVyZS5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoZG91YmxlKXRoaXMubXVsdGlwbGF5ZXJ5IDwgKGRvdWJsZSktdGhpcy50ZXh0dXJlLkhlaWdodClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLk11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IChmbG9hdClNYXRoLkFicyh0aGlzLm11bHRpcGxheWVydnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAoZmxvYXQpdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ICo9IHRoaXMueWRyYWc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggKj0gdGhpcy54ZHJhZztcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVmlld3BvcnQgdmlld3BvcnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzZW5hYmxlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5ENikgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLk51bVBhZDYpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcFdoZW5Ob3RNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5ENykgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLk51bVBhZDcpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcFdoZW5Ob3RNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRDQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5OdW1QYWQ0KSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLk51bVBhZDUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5ENSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlQpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IChmbG9hdCl0aGlzLnJhbmRvbS5OZXh0KDAsIHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUmFuZG9tIHJhbmRvbSA9IHRoaXMucmFuZG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGludCBtaW5WYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIGludCBtYXhWYWx1ZSA9IHZpZXdwb3J0LkJvdW5kcy5IZWlnaHQgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IChmbG9hdClyYW5kb20uTmV4dChtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5DKSAmJiAhKHRoaXMuYmFsbENvbG9yID09IENvbG9yLlRyYW5zcGFyZW50KSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGxDb2xvciA9IG5ldyBDb2xvcih0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NiksIHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpLCB0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSB0aGlzLmJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gbmV3IENvbG9yKHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpLCB0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NiksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSB0aGlzLmJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuT2VtUXVvdGVzKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGxDb2xvciA9IG5ldyBDb2xvcih0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NiksIHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpLCAoaW50KXRoaXMuYmFsbENvbG9yLkEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSB0aGlzLmJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuQikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5NKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gKGZsb2F0KSh2aWV3cG9ydC5Cb3VuZHMuV2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gKGZsb2F0KSh2aWV3cG9ydC5Cb3VuZHMuSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkkpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gQ29sb3IuVHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gdGhpcy5hY3R1YWxDb2xvcjtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuUCkgJiYgISh0aGlzLmJhbGxDb2xvciA9PSBDb2xvci5UcmFuc3BhcmVudCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IgPSBDb2xvci5Ib3RQaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSB0aGlzLmJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuWCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5X2VmZmVjdCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5Fc2NhcGUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIC0ganVzdCByZXNldCBpbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgUmVzZXRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlYpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm91bmN5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuWikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3VuY3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuTCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLkxfUHJlc3NlZF9MYXN0X0ZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC10aGlzLnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gLXRoaXMudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTF9QcmVzc2VkX0xhc3RfRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlVcChJbnB1dEtleXMuTCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MX1ByZXNzZWRfTGFzdF9GcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5OKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHkgKz0gKGZsb2F0KSgxLjAgLyAxMDAwLjApO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5PKSAmJiAoZG91YmxlKXRoaXMuZ3Jhdml0eSA+IDAuMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHkgLT0gKGZsb2F0KSgxLjAgLyAxMDAwLjApO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5RKSAmJiB0aGlzLmJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGxDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSB0aGlzLmJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuUikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuSikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ZHJhZyA9IDFmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWRyYWcgPSAxZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlNwYWNlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUmVzZXRHYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkxlZnRBbHQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5SaWdodEFsdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5VKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnhkcmFnID0gMC45OWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5LKSAmJiAoZG91YmxlKXRoaXMuYmx1ZSAhPSAoZG91YmxlKWJ5dGUuTWF4VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibHVlICs9IDYzZjtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRikgJiYgKGRvdWJsZSl0aGlzLmJsdWUgIT0gMC4wKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmx1ZSAtPSA2M2Y7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlkpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsYXllcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkxlZnRTaGlmdCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlJpZ2h0U2hpZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkZ2VvZnNjcmVlbmxvc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuTGVmdENvbnRyb2wpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5SaWdodENvbnRyb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IgPSBDb2xvci5CbGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yID0gQ29sb3IuQmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkYxKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRjIpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGdlb2ZzY3JlZW5sb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkYzKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5PZW1QZXJpb2QpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTW91c2VNb3ZlQmFzZVBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLk9lbVF1ZXN0aW9uKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdXNlTW92ZUJhc2VQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRGl2aWRlKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZUJhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmFja3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IodGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpLCB0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NiksIHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlRhYikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5PZW1NaW51cykpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5PZW1QbHVzKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRjEyKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5OdW1Mb2NrKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5Ib21lKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkQzKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuTnVtUGFkMykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChkb3VibGUpdGhpcy52eCA8IDAuMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnggLT0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChkb3VibGUpdGhpcy52eCA+IDAuMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnggKz0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZG91YmxlKXRoaXMudnkgPCAwLjApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5IC09IHRoaXMuYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoZG91YmxlKXRoaXMudnkgPiAwLjApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ICs9IHRoaXMuYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRDApIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5OdW1QYWQwKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsICs9IChmbG9hdCkoMS4wIC8gMTAwMC4wKTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRDEpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5OdW1QYWQxKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsIC09IChmbG9hdCkoMS4wIC8gMTAwMC4wKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGRvdWJsZSl0aGlzLmFjY2VsIDwgMC4wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsID0gMC4wZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRDIpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5OdW1QYWQyKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsID0gMC4xZjtcclxuICAgICAgICAgICAgICAgIGlmICgoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkQ4KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuTnVtUGFkOCkpICYmIHRoaXMuYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gbmV3IENvbG9yKChpbnQpYnl0ZS5NYXhWYWx1ZSwgKGludClieXRlLk1heFZhbHVlLCAoaW50KWJ5dGUuTWF4VmFsdWUsIHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvciA9IHRoaXMuYmFsbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKElucHV0S2V5cy5EOSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLk51bVBhZDkpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRm9sbG93QmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuQmFjaykpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Gb2xsb3dCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIE1vdXNlU3RhdGUgc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuTW91c2VNb3ZlQmFzZVBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IChmbG9hdClNb3VzZS5HZXRTdGF0ZSgpLlg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IChmbG9hdClNb3VzZS5HZXRTdGF0ZSgpLlk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IE1vdXNlLkdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gKGZsb2F0KXN0YXRlLlg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gTW91c2UuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAoZmxvYXQpc3RhdGUuWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IE1vdXNlLkdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuUmlnaHRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuTW91c2VNb3ZlQmFzZVBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gTW91c2UuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gKGZsb2F0KXN0YXRlLlg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gTW91c2UuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gKGZsb2F0KXN0YXRlLlk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IE1vdXNlLkdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gKGZsb2F0KXN0YXRlLlg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gTW91c2UuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAoZmxvYXQpc3RhdGUuWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLlBhZ2VVcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuUGFnZURvd24pKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuRW5kKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJhY2tyb3VuZENvbG9yID0gQ29sb3IuT3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlQmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLk9lbU9wZW5CcmFja2V0cykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IgPSBDb2xvci5PcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvciA9IENvbG9yLk9yYW5nZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuT2VtQ2xvc2VCcmFja2V0cykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvci5BID0gYnl0ZS5NYXhWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGxDb2xvci5BID0gYnl0ZS5NYXhWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihJbnB1dEtleXMuT2VtQmFja3NsYXNoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3R1YWxDb2xvci5BIDwgMjU1KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvci5BKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yLkErKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLk9lbVNlbWljb2xvbikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0dWFsQ29sb3IuQSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yLkEtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IuQS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEZpbGUgSS9PIHJlbW92ZWQgLSBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oSW5wdXRLZXlzLkY0KSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgIFNwcml0ZUJhdGNoIHNwcml0ZUJhdGNoID0gdGhpcy5zcHJpdGVCYXRjaDtcclxuICAgICAgICAgICAgICAgIFNwcml0ZUZvbnQgc3ByaXRlRm9udCA9IHRoaXMuc3ByaXRlRm9udDtcclxuICAgICAgICAgICAgICAgIHN0cmluZyB0ZXh0ID0gXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydFwiO1xyXG4gICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgZG91YmxlIG51bTEgPSAoZG91YmxlKSh2aWV3cG9ydC5XaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgZG91YmxlIG51bTIgPSAoZG91YmxlKSh2aWV3cG9ydC5IZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIFZlY3RvcjIgcG9zaXRpb24gPSBuZXcgVmVjdG9yMigoZmxvYXQpbnVtMSwgKGZsb2F0KW51bTIpO1xyXG4gICAgICAgICAgICAgICAgQ29sb3IgZ29sZCA9IENvbG9yLkdvbGQ7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIHRleHQsIHBvc2l0aW9uLCBnb2xkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChpbnQpdGhpcy5hY3R1YWxDb2xvci5BID09IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yLkEgPSBieXRlLk1heFZhbHVlO1xyXG4gICAgICAgICAgICBkb3VibGUgbnVtMyA9IChkb3VibGUpdGhpcy54O1xyXG4gICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgIGRvdWJsZSBudW00ID0gKGRvdWJsZSl2aWV3cG9ydC5Cb3VuZHMuV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChudW0zID49IG51bTQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkZ2VvZnNjcmVlbmxvc2UpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNwcml0ZUJhdGNoIHNwcml0ZUJhdGNoID0gdGhpcy5zcHJpdGVCYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICBTcHJpdGVGb250IHNwcml0ZUZvbnQgPSB0aGlzLnNwcml0ZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nIHRleHQgPSBcIkdhbWUgT3ZlciFcXG5QcmVzcyBTcGFjZSB0byBSZXN0YXJ0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZSBudW0xID0gKGRvdWJsZSkodmlld3BvcnQuV2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlIG51bTIgPSAoZG91YmxlKSh2aWV3cG9ydC5IZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBWZWN0b3IyIHBvc2l0aW9uID0gbmV3IFZlY3RvcjIoKGZsb2F0KW51bTEsIChmbG9hdCludW0yKTtcclxuICAgICAgICAgICAgICAgICAgICBDb2xvciBnb2xkID0gQ29sb3IuR29sZDtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIHRleHQsIHBvc2l0aW9uLCBnb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IHRoaXMudnggLSB0aGlzLnZ4ICogMmY7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gKGZsb2F0KS10aGlzLnRleHR1cmUuV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGRvdWJsZSl0aGlzLnggPCAoZG91YmxlKS10aGlzLnRleHR1cmUuV2lkdGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkZ2VvZnNjcmVlbmxvc2UpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNwcml0ZUJhdGNoIHNwcml0ZUJhdGNoID0gdGhpcy5zcHJpdGVCYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICBTcHJpdGVGb250IHNwcml0ZUZvbnQgPSB0aGlzLnNwcml0ZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nIHRleHQgPSBcIkdhbWUgT3ZlciFcXG5QcmVzcyBTcGFjZSB0byBSZXN0YXJ0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZSBudW0xID0gKGRvdWJsZSkodmlld3BvcnQuV2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlIG51bTIgPSAoZG91YmxlKSh2aWV3cG9ydC5IZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBWZWN0b3IyIHBvc2l0aW9uID0gbmV3IFZlY3RvcjIoKGZsb2F0KW51bTEsIChmbG9hdCludW0yKTtcclxuICAgICAgICAgICAgICAgICAgICBDb2xvciBnb2xkID0gQ29sb3IuR29sZDtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIHRleHQsIHBvc2l0aW9uLCBnb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3VuY3kpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IChmbG9hdClNYXRoLkFicyh0aGlzLnZ4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gKGZsb2F0KXZpZXdwb3J0LkJvdW5kcy5XaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3VibGUgbnVtNSA9IChkb3VibGUpdGhpcy55O1xyXG4gICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgIGRvdWJsZSBudW02ID0gKGRvdWJsZSl2aWV3cG9ydC5Cb3VuZHMuSGVpZ2h0O1xyXG4gICAgICAgICAgICBpZiAobnVtNSA+PSBudW02KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lZGdlb2ZzY3JlZW5sb3NlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBTcHJpdGVCYXRjaCBzcHJpdGVCYXRjaCA9IHRoaXMuc3ByaXRlQmF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgU3ByaXRlRm9udCBzcHJpdGVGb250ID0gdGhpcy5zcHJpdGVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyB0ZXh0ID0gXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydDtcclxuICAgICAgICAgICAgICAgICAgICBkb3VibGUgbnVtMSA9IChkb3VibGUpKHZpZXdwb3J0LldpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZSBudW0yID0gKGRvdWJsZSkodmlld3BvcnQuSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yMiBwb3NpdGlvbiA9IG5ldyBWZWN0b3IyKChmbG9hdCludW0xLCAoZmxvYXQpbnVtMik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3IgZ29sZCA9IENvbG9yLkdvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCB0ZXh0LCBwb3NpdGlvbiwgZ29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSB0aGlzLnZ5IC0gdGhpcy52eSAqIDJmO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IChmbG9hdCktdGhpcy50ZXh0dXJlLkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgoZG91YmxlKXRoaXMueSA8IChkb3VibGUpLXRoaXMudGV4dHVyZS5IZWlnaHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkZ2VvZnNjcmVlbmxvc2UpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNwcml0ZUJhdGNoIHNwcml0ZUJhdGNoID0gdGhpcy5zcHJpdGVCYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICBTcHJpdGVGb250IHNwcml0ZUZvbnQgPSB0aGlzLnNwcml0ZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nIHRleHQgPSBcIkdhbWUgT3ZlciFcXG5QcmVzcyBTcGFjZSB0byBSZXN0YXJ0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZSBudW0xID0gKGRvdWJsZSkodmlld3BvcnQuV2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlIG51bTIgPSAoZG91YmxlKSh2aWV3cG9ydC5IZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBWZWN0b3IyIHBvc2l0aW9uID0gbmV3IFZlY3RvcjIoKGZsb2F0KW51bTEsIChmbG9hdCludW0yKTtcclxuICAgICAgICAgICAgICAgICAgICBDb2xvciBnb2xkID0gQ29sb3IuR29sZDtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIHRleHQsIHBvc2l0aW9uLCBnb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3VuY3kpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eSA9IChmbG9hdClNYXRoLkFicyh0aGlzLnZ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gKGZsb2F0KXZpZXdwb3J0LkJvdW5kcy5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuU3RvcFdoZW5Ob3RNb3ZpbmcgJiYgIXRoaXMubW92ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IDAuMGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52eCAqPSB0aGlzLnhkcmFnO1xyXG4gICAgICAgICAgICB0aGlzLnZ5ICo9IHRoaXMueWRyYWc7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eV9lZmZlY3QgKj0gdGhpcy55ZHJhZztcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5X2VmZmVjdCArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgICAgICAgIGJhc2UuRHJhdyhnYW1lVGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgUmVzZXRHYW1lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5TdG9wV2hlbk5vdE1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy54ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgICAgICB0aGlzLnlkcmFnID0gMC45OWY7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgdGhpcy5hY2NlbCA9IDAuMWY7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eV9lZmZlY3QgPSAwLjBmO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjBmO1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwLjBmO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAwLjBmO1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gMC4wZjtcclxuICAgICAgICAgICAgdGhpcy52eSA9IDAuMGY7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmx1ZSA9IDFmO1xyXG4gICAgICAgICAgICB0aGlzLmVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeCA9IDAuMGY7XHJcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ5ID0gMC4wZjtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnkgPSAwLjBmO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAwLjBmO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuRm9sbG93QmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBCb3VuY3lfQmFsbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZ3JhbVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzaW5nICh2YXIgZ2FtZSA9IG5ldyBHYW1lMSgpKVxyXG4gICAgICAgICAgICAgICAgZ2FtZS5SdW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
