/**
 * Bouncy Ball game restored with Bridge.NET
 * @version 1.0.0.0
 * @compiler Bridge.NET 17.10.0
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
                this.graphics = new Microsoft.Xna.Framework.GraphicsDeviceManager(Bridge.cast(this, Microsoft.Xna.Framework.Game));
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
                var $t, $t1, $t2, $t3;
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
                            this.multiplayerColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.Next$1(256), this.random.Next$1(256), this.random.Next$1(256), this.random.Next$1(256));
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
                        this.x = this.random.Next$2(0, ((this.GraphicsDevice.Viewport.Bounds.Width + 1) | 0));
                        var random = this.random;
                        var minValue = 0;
                        viewport = this.GraphicsDevice.Viewport.$clone();
                        var maxValue = (viewport.Bounds.Height + 1) | 0;
                        this.y = random.Next$2(minValue, maxValue);
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.C) && !(Microsoft.Xna.Framework.Color.op_Equality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone()))) {
                        this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.Next$2(0, 256), this.random.Next$2(0, 256), this.random.Next$2(0, 256), this.random.Next$2(0, 256));
                        this.actualColor = this.ballColor.$clone();
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                        this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.Next$2(0, 256), this.random.Next$2(0, 256), this.random.Next$2(0, 256), 0);
                        this.actualColor = this.ballColor.$clone();
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemQuotes)) {
                        this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.Next$2(0, 256), this.random.Next$2(0, 256), this.random.Next$2(0, 256), this.ballColor.A);
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
                        this.BackroundColor = new Microsoft.Xna.Framework.Color.$ctor6(this.random.Next$2(0, 256), this.random.Next$2(0, 256), this.random.Next$2(0, 256));
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
                        this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(255, 255, 255, this.random.Next$2(0, 256));
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
                            ($t = this.actualColor.$clone()).A = ($t.A + 1) & 255;
                            ($t1 = this.ballColor.$clone()).A = ($t1.A + 1) & 255;
                        }
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemSemicolon)) {
                        if (this.actualColor.A > 0) {
                            ($t2 = this.actualColor.$clone()).A = ($t2.A - 1) & 255;
                            ($t3 = this.ballColor.$clone()).A = ($t3.A - 1) & 255;
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
                    game.System$IDisposable$Dispose();
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJCb3VuY3lCYWxsLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJHYW1lMS5jcyIsIlByb2dyYW0uY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBc0N1Q0E7aUNBQ0xBO3dDQUNPQTs4QkFDVEEsSUFBSUE7Ozs7OztnQkFXeEJBLGdCQUFnQkEsSUFBSUEsOENBQXNCQSxZQUFNQTtnQkFDaERBOzs7OztnQkFLQUEsbUJBQW1CQTtnQkFDbkJBLDhCQUE4QkE7Z0JBQzlCQTs7O2dCQUtBQSxrQkFBa0JBO2dCQUNsQkEsZUFBZUE7Z0JBQ2ZBLG1CQUFtQkEsSUFBSUEsNkNBQVlBO2dCQUNuQ0E7Ozs4QkFPMkJBO2dCQUUzQkEseURBQVlBOzs0QkFHYUE7O2dCQUV6QkEsSUFBSUE7b0JBRUFBLElBQUlBO3dCQUVBQSxJQUFJQTs0QkFDQUEsc0JBQXNCQSxJQUFJQSxxQ0FBTUEsQUFBT0EsQ0FBQ0EsU0FBU0EsQUFBUUEsNENBQTJDQSxBQUFPQSxDQUFDQSxTQUFTQSxBQUFRQSw0Q0FBMkNBLFdBQVdBLEFBQU9BOzt3QkFDOUxBLDBCQUEwQkE7d0JBQzFCQSxJQUFJQTs0QkFFQUEsaUJBQWlCQSxJQUFJQSxxQ0FBTUEsQUFBT0EsQ0FBQ0EsU0FBU0EsQUFBUUEsNENBQTJDQSxBQUFPQSxDQUFDQSxTQUFTQSxBQUFRQSw0Q0FBMkNBLFdBQVdBLEFBQU9BOzRCQUNyTEEsbUJBQW1CQTs7O29CQUczQkE7b0JBQ0FBO29CQUNBQSx3QkFBc0JBLGNBQWNBLElBQUlBLHVDQUFRQSxRQUFRQSxTQUFTQTtvQkFDakVBLElBQUlBO3dCQUNBQSx3QkFBc0JBLGNBQWNBLElBQUlBLHVDQUFRQSxtQkFBbUJBLG9CQUFvQkE7O29CQUMzRkE7O2dCQUVKQSxVQUFVQTtn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b3NvZnQuWG5hLkZyYW1ld29yay5HcmFwaGljcztcclxudXNpbmcgTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuSW5wdXQ7XHJcbnVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBCb3VuY3lfQmFsbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgR2FtZTEgOiBHYW1lXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIE1vdXNlTW92ZUJhc2VQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgRm9sbG93QmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIGNsZWFyID0gdHJ1ZTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIGZsb2F0IG11bHRpcGxheWVyeCA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCBtdWx0aXBsYXllcnkgPSAwLjBmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgbXVsdGlwbGF5ZXJ2eCA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCBtdWx0aXBsYXllcnZ5ID0gMC4wZjtcclxuICAgICAgICBwcml2YXRlIGJvb2wgZWRnZW9mc2NyZWVubG9zZSA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBib3VuY3kgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIGZsb2F0IHggPSAwLjBmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgeSA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCB2eCA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCB2eSA9IDAuMGY7XHJcbiAgICAgICAgcHJpdmF0ZSBmbG9hdCB4ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgeWRyYWcgPSAwLjk5ZjtcclxuICAgICAgICBwcml2YXRlIGZsb2F0IGFjY2VsID0gMC4xZjtcclxuICAgICAgICBwcml2YXRlIGZsb2F0IGdyYXZpdHkgPSAwLjBmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgZ3Jhdml0eV9lZmZlY3QgPSAwLjBmO1xyXG4gICAgICAgIHByaXZhdGUgZmxvYXQgYmx1ZSA9IDFmO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBTdG9wV2hlbk5vdE1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBieXRlIGFscGhhID0gMjU1O1xyXG4gICAgICAgIHByaXZhdGUgQ29sb3IgQmFja3JvdW5kQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICBwcml2YXRlIENvbG9yIGJhbGxDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgIHByaXZhdGUgQ29sb3IgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgIHByaXZhdGUgUmFuZG9tIHJhbmRvbSA9IG5ldyBSYW5kb20oKTtcclxuICAgICAgICBwcml2YXRlIGJvb2wgTF9QcmVzc2VkX0xhc3RfRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIFNwcml0ZUZvbnQgc3ByaXRlRm9udDtcclxuICAgICAgICBwcml2YXRlIEdyYXBoaWNzRGV2aWNlTWFuYWdlciBncmFwaGljcztcclxuICAgICAgICBwcml2YXRlIFNwcml0ZUJhdGNoIHNwcml0ZUJhdGNoO1xyXG4gICAgICAgIHByaXZhdGUgVGV4dHVyZTJEIHRleHR1cmU7XHJcbiAgICAgICAgcHJpdmF0ZSBDb2xvciBhY3R1YWxDb2xvcjtcclxuICAgICAgICBwcml2YXRlIENvbG9yIGFjdHVhbE11bHRpcGxheWVyQ29sb3I7XHJcblxyXG4gICAgICAgIHB1YmxpYyBHYW1lMSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzRGV2aWNlTWFuYWdlcigoR2FtZSl0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5Db250ZW50LlJvb3REaXJlY3RvcnkgPSBcIkNvbnRlbnRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvciA9IHRoaXMuYmFsbENvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSB0aGlzLm11bHRpcGxheWVyQ29sb3I7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgTG9hZENvbnRlbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVGb250ID0gdGhpcy5Db250ZW50LkxvYWQ8U3ByaXRlRm9udD4oXCJBcmlhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5Db250ZW50LkxvYWQ8VGV4dHVyZTJEPihcImJhbGxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2ggPSBuZXcgU3ByaXRlQmF0Y2godGhpcy5HcmFwaGljc0RldmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMuSXNNb3VzZVZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgVW5sb2FkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgVXBkYXRlKEdhbWVUaW1lIGdhbWVUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5VcGRhdGUoZ2FtZVRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgRHJhdyhHYW1lVGltZSBnYW1lVGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlVwZGF0ZUJhY2tncm91bmRDb2xvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5CYWNrcm91bmRDb2xvciA9IG5ldyBDb2xvcigoZmxvYXQpKE1hdGguQ29zKChkb3VibGUpdGhpcy54ICogMC4wMDk5OTk5OTk3NzY0ODI1OCkgKyAxLjApIC8gMmYsIChmbG9hdCkoTWF0aC5Db3MoKGRvdWJsZSl0aGlzLnkgKiAwLjAwOTk5OTk5OTc3NjQ4MjU4KSArIDEuMCkgLyAyZiwgdGhpcy5ibHVlLCAoZmxvYXQpdGhpcy5hbHBoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HcmFwaGljc0RldmljZS5DbGVhcih0aGlzLkJhY2tyb3VuZENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Gb2xsb3dCYWNrZ3JvdW5kQ29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGxDb2xvciA9IG5ldyBDb2xvcigoZmxvYXQpKE1hdGguQ29zKChkb3VibGUpdGhpcy54ICogMC4wMDk5OTk5OTk3NzY0ODI1OCkgKyAxLjApIC8gMmYsIChmbG9hdCkoTWF0aC5Db3MoKGRvdWJsZSl0aGlzLnkgKiAwLjAwOTk5OTk5OTc3NjQ4MjU4KSArIDEuMCkgLyAyZiwgdGhpcy5ibHVlLCAoZmxvYXQpdGhpcy5hbHBoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSB0aGlzLmJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkRyYXcodGhpcy50ZXh0dXJlLCBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSksIHRoaXMuYmFsbENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guRHJhdyh0aGlzLnRleHR1cmUsIG5ldyBWZWN0b3IyKHRoaXMubXVsdGlwbGF5ZXJ4LCB0aGlzLm11bHRpcGxheWVyeSksIHRoaXMubXVsdGlwbGF5ZXJDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4O1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuZ3Jhdml0eV9lZmZlY3Q7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsYXllcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuQSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4IC09IHRoaXMuYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnggKz0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlVwKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlcpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52eSAtPSB0aGlzLmFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRG93bikgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5TKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnkgKz0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggKz0gdGhpcy5tdWx0aXBsYXllcnZ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgKz0gdGhpcy5tdWx0aXBsYXllcnZ5O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNlbmFibGVkICYmIHRoaXMubXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4IC09IHRoaXMuYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5BKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ4IC09IDAuMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52eCArPSB0aGlzLmFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCArPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlVwKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnkgLT0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnkgLT0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Eb3duKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnkgKz0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnkgKz0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0U2hpZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodFNoaWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGdlb2ZzY3JlZW5sb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0Q29udHJvbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodENvbnRyb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5DYXBzTG9jaykgJiYgdGhpcy5tdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gbmV3IENvbG9yKHRoaXMucmFuZG9tLk5leHQoMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgyNTYpLCB0aGlzLnJhbmRvbS5OZXh0KDI1NiksIHRoaXMucmFuZG9tLk5leHQoMjU2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IHRoaXMubXVsdGlwbGF5ZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5UcmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GNikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb2xvciA9IHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GNykgJiYgdGhpcy5tdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GOCkgJiYgdGhpcy5tdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gQ29sb3IuQmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLkJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GOSkgJiYgdGhpcy5tdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gQ29sb3IuSG90UGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuSG90UGluaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjEwKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMTEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAoZmxvYXQpKHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ5ID0gKGZsb2F0KSh0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRGVsZXRlKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKChkb3VibGUpdGhpcy5tdWx0aXBsYXllcnggPj0gKGRvdWJsZSl0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLk11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCA9IHRoaXMubXVsdGlwbGF5ZXJ2eCAtIHRoaXMubXVsdGlwbGF5ZXJ2eCAqIDJmO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAoZmxvYXQpLXRoaXMudGV4dHVyZS5XaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChkb3VibGUpdGhpcy5tdWx0aXBsYXllcnggPCAoZG91YmxlKS10aGlzLnRleHR1cmUuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5NdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAoZmxvYXQpTWF0aC5BYnModGhpcy5tdWx0aXBsYXllcnZ4KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gKGZsb2F0KXRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKChkb3VibGUpdGhpcy5tdWx0aXBsYXllcnkgPj0gKGRvdWJsZSl0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5NdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ID0gdGhpcy5tdWx0aXBsYXllcnZ5IC0gdGhpcy5tdWx0aXBsYXllcnZ5ICogMmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeSA9IChmbG9hdCktdGhpcy50ZXh0dXJlLkhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChkb3VibGUpdGhpcy5tdWx0aXBsYXllcnkgPCAoZG91YmxlKS10aGlzLnRleHR1cmUuSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ID0gKGZsb2F0KU1hdGguQWJzKHRoaXMubXVsdGlwbGF5ZXJ2eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeSA9IChmbG9hdCl0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnkgKj0gdGhpcy55ZHJhZztcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCAqPSB0aGlzLnhkcmFnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBWaWV3cG9ydCB2aWV3cG9ydDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5ENikgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ2KSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0b3BXaGVuTm90TW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQ3KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDcpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcFdoZW5Ob3RNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQ0KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gKGZsb2F0KXRoaXMucmFuZG9tLk5leHQoMCwgdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBSYW5kb20gcmFuZG9tID0gdGhpcy5yYW5kb207XHJcbiAgICAgICAgICAgICAgICAgICAgaW50IG1pblZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50IG1heFZhbHVlID0gdmlld3BvcnQuQm91bmRzLkhlaWdodCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gKGZsb2F0KXJhbmRvbS5OZXh0KG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5DKSAmJiAhKHRoaXMuYmFsbENvbG9yID09IENvbG9yLlRyYW5zcGFyZW50KSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGxDb2xvciA9IG5ldyBDb2xvcih0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NiksIHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpLCB0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IgPSB0aGlzLmJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGxDb2xvciA9IG5ldyBDb2xvcih0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NiksIHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yID0gdGhpcy5iYWxsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1RdW90ZXMpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gbmV3IENvbG9yKHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpLCB0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NiksIChpbnQpdGhpcy5iYWxsQ29sb3IuQSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvciA9IHRoaXMuYmFsbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuQikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IChmbG9hdCkodmlld3BvcnQuQm91bmRzLldpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IChmbG9hdCkodmlld3BvcnQuQm91bmRzLkhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuSSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IgPSBDb2xvci5UcmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gdGhpcy5hY3R1YWxDb2xvcjtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlApICYmICEodGhpcy5iYWxsQ29sb3IgPT0gQ29sb3IuVHJhbnNwYXJlbnQpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gQ29sb3IuSG90UGluaztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yID0gdGhpcy5iYWxsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5YKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlfZWZmZWN0ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRXNjYXBlKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlciAtIGp1c3QgcmVzZXQgaW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgICAgIFJlc2V0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3VuY3kgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuWikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3VuY3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkwpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5MX1ByZXNzZWRfTGFzdF9GcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAtdGhpcy52eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52eSA9IC10aGlzLnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxfUHJlc3NlZF9MYXN0X0ZyYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5VXAoS2V5cy5MKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHkgKz0gKGZsb2F0KSgxLjAgLyAxMDAwLjApO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTykgJiYgKGRvdWJsZSl0aGlzLmdyYXZpdHkgPiAwLjApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5IC09IChmbG9hdCkoMS4wIC8gMTAwMC4wKTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlEpICYmIHRoaXMuYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvciA9IHRoaXMuYmFsbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkopKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGRyYWcgPSAxZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnlkcmFnID0gMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuU3BhY2UpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBSZXNldEdhbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc2VuYWJsZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRBbHQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHRBbHQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGRyYWcgPSAwLjk5ZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnlkcmFnID0gMC45OWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5LKSAmJiAoZG91YmxlKXRoaXMuYmx1ZSAhPSAoZG91YmxlKWJ5dGUuTWF4VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibHVlICs9IDYzZjtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkYpICYmIChkb3VibGUpdGhpcy5ibHVlICE9IDAuMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdWUgLT0gNjNmO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuWSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxheWVyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRTaGlmdCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodFNoaWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGdlb2ZzY3JlZW5sb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0Q29udHJvbCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodENvbnRyb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkcpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbENvbG9yID0gQ29sb3IuQmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvciA9IENvbG9yLkJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjIpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGdlb2ZzY3JlZW5sb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMykpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc2VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbVBlcmlvZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb3VzZU1vdmVCYXNlUGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbVF1ZXN0aW9uKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdXNlTW92ZUJhc2VQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkRpdmlkZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJhY2tyb3VuZENvbG9yID0gbmV3IENvbG9yKHRoaXMucmFuZG9tLk5leHQoMCwgMjU2KSwgdGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpLCB0aGlzLnJhbmRvbS5OZXh0KDAsIDI1NikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVGFiKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnkgPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1NaW51cykpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtUGx1cykpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMTIpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVydnggPSAwLjBmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJ2eSA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1Mb2NrKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuSG9tZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDMpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkMykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChkb3VibGUpdGhpcy52eCA8IDAuMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnggLT0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChkb3VibGUpdGhpcy52eCA+IDAuMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudnggKz0gdGhpcy5hY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZG91YmxlKXRoaXMudnkgPCAwLjApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5IC09IHRoaXMuYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoZG91YmxlKXRoaXMudnkgPiAwLjApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ICs9IHRoaXMuYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQwKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDApKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWwgKz0gKGZsb2F0KSgxLjAgLyAxMDAwLjApO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDEpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkMSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbCAtPSAoZmxvYXQpKDEuMCAvIDEwMDAuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChkb3VibGUpdGhpcy5hY2NlbCA8IDAuMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbCA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EMikgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQyKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsID0gMC4xZjtcclxuICAgICAgICAgICAgICAgIGlmICgoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EOCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ4KSkgJiYgdGhpcy5iYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IgPSBuZXcgQ29sb3IoKGludClieXRlLk1heFZhbHVlLCAoaW50KWJ5dGUuTWF4VmFsdWUsIChpbnQpYnl0ZS5NYXhWYWx1ZSwgdGhpcy5yYW5kb20uTmV4dCgwLCAyNTYpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yID0gdGhpcy5iYWxsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EOSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ5KSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZvbGxvd0JhY2tncm91bmRDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5CYWNrKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZvbGxvd0JhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgTW91c2VTdGF0ZSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Nb3VzZU1vdmVCYXNlUGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gKGZsb2F0KU1vdXNlLkdldFN0YXRlKCkuWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gKGZsb2F0KU1vdXNlLkdldFN0YXRlKCkuWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gTW91c2UuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAoZmxvYXQpc3RhdGUuWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBNb3VzZS5HZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeSA9IChmbG9hdClzdGF0ZS5ZO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXRlID0gTW91c2UuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5SaWdodEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5Nb3VzZU1vdmVCYXNlUGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBNb3VzZS5HZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAoZmxvYXQpc3RhdGUuWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBNb3VzZS5HZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAoZmxvYXQpc3RhdGUuWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gTW91c2UuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAoZmxvYXQpc3RhdGUuWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBNb3VzZS5HZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeSA9IChmbG9hdClzdGF0ZS5ZO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlBhZ2VVcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlBhZ2VEb3duKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZUJhY2tncm91bmRDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbmQpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmFja3JvdW5kQ29sb3IgPSBDb2xvci5PcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbU9wZW5CcmFja2V0cykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IgPSBDb2xvci5PcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvciA9IENvbG9yLk9yYW5nZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbUNsb3NlQnJhY2tldHMpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsQ29sb3IuQSA9IGJ5dGUuTWF4VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IuQSA9IGJ5dGUuTWF4VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1CYWNrc2xhc2gpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdHVhbENvbG9yLkEgPCAyNTUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yLkErKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IuQSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbVNlbWljb2xvbikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0dWFsQ29sb3IuQSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yLkEtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsQ29sb3IuQS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEZpbGUgSS9PIHJlbW92ZWQgLSBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GNCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICBTcHJpdGVCYXRjaCBzcHJpdGVCYXRjaCA9IHRoaXMuc3ByaXRlQmF0Y2g7XHJcbiAgICAgICAgICAgICAgICBTcHJpdGVGb250IHNwcml0ZUZvbnQgPSB0aGlzLnNwcml0ZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgdGV4dCA9IFwiR2FtZSBPdmVyIVxcblByZXNzIFNwYWNlIHRvIFJlc3RhcnRcIjtcclxuICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydDtcclxuICAgICAgICAgICAgICAgIGRvdWJsZSBudW0xID0gKGRvdWJsZSkodmlld3BvcnQuV2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydDtcclxuICAgICAgICAgICAgICAgIGRvdWJsZSBudW0yID0gKGRvdWJsZSkodmlld3BvcnQuSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICBWZWN0b3IyIHBvc2l0aW9uID0gbmV3IFZlY3RvcjIoKGZsb2F0KW51bTEsIChmbG9hdCludW0yKTtcclxuICAgICAgICAgICAgICAgIENvbG9yIGdvbGQgPSBDb2xvci5Hb2xkO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCB0ZXh0LCBwb3NpdGlvbiwgZ29sZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoaW50KXRoaXMuYWN0dWFsQ29sb3IuQSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb2xvci5BID0gYnl0ZS5NYXhWYWx1ZTtcclxuICAgICAgICAgICAgZG91YmxlIG51bTMgPSAoZG91YmxlKXRoaXMueDtcclxuICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICBkb3VibGUgbnVtNCA9IChkb3VibGUpdmlld3BvcnQuQm91bmRzLldpZHRoO1xyXG4gICAgICAgICAgICBpZiAobnVtMyA+PSBudW00KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lZGdlb2ZzY3JlZW5sb3NlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBTcHJpdGVCYXRjaCBzcHJpdGVCYXRjaCA9IHRoaXMuc3ByaXRlQmF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgU3ByaXRlRm9udCBzcHJpdGVGb250ID0gdGhpcy5zcHJpdGVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyB0ZXh0ID0gXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydDtcclxuICAgICAgICAgICAgICAgICAgICBkb3VibGUgbnVtMSA9IChkb3VibGUpKHZpZXdwb3J0LldpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZSBudW0yID0gKGRvdWJsZSkodmlld3BvcnQuSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yMiBwb3NpdGlvbiA9IG5ldyBWZWN0b3IyKChmbG9hdCludW0xLCAoZmxvYXQpbnVtMik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3IgZ29sZCA9IENvbG9yLkdvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCB0ZXh0LCBwb3NpdGlvbiwgZ29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSB0aGlzLnZ4IC0gdGhpcy52eCAqIDJmO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IChmbG9hdCktdGhpcy50ZXh0dXJlLldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChkb3VibGUpdGhpcy54IDwgKGRvdWJsZSktdGhpcy50ZXh0dXJlLldpZHRoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lZGdlb2ZzY3JlZW5sb3NlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBTcHJpdGVCYXRjaCBzcHJpdGVCYXRjaCA9IHRoaXMuc3ByaXRlQmF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgU3ByaXRlRm9udCBzcHJpdGVGb250ID0gdGhpcy5zcHJpdGVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyB0ZXh0ID0gXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydDtcclxuICAgICAgICAgICAgICAgICAgICBkb3VibGUgbnVtMSA9IChkb3VibGUpKHZpZXdwb3J0LldpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZSBudW0yID0gKGRvdWJsZSkodmlld3BvcnQuSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yMiBwb3NpdGlvbiA9IG5ldyBWZWN0b3IyKChmbG9hdCludW0xLCAoZmxvYXQpbnVtMik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3IgZ29sZCA9IENvbG9yLkdvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCB0ZXh0LCBwb3NpdGlvbiwgZ29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYm91bmN5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAoZmxvYXQpTWF0aC5BYnModGhpcy52eCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IChmbG9hdCl2aWV3cG9ydC5Cb3VuZHMuV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG91YmxlIG51bTUgPSAoZG91YmxlKXRoaXMueTtcclxuICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICBkb3VibGUgbnVtNiA9IChkb3VibGUpdmlld3BvcnQuQm91bmRzLkhlaWdodDtcclxuICAgICAgICAgICAgaWYgKG51bTUgPj0gbnVtNilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWRnZW9mc2NyZWVubG9zZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgU3ByaXRlQmF0Y2ggc3ByaXRlQmF0Y2ggPSB0aGlzLnNwcml0ZUJhdGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIFNwcml0ZUZvbnQgc3ByaXRlRm9udCA9IHRoaXMuc3ByaXRlRm9udDtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgdGV4dCA9IFwiR2FtZSBPdmVyIVxcblByZXNzIFNwYWNlIHRvIFJlc3RhcnRcIjtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IHRoaXMuR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlIG51bTEgPSAoZG91YmxlKSh2aWV3cG9ydC5XaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydDtcclxuICAgICAgICAgICAgICAgICAgICBkb3VibGUgbnVtMiA9IChkb3VibGUpKHZpZXdwb3J0LkhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFZlY3RvcjIgcG9zaXRpb24gPSBuZXcgVmVjdG9yMigoZmxvYXQpbnVtMSwgKGZsb2F0KW51bTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvbG9yIGdvbGQgPSBDb2xvci5Hb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgdGV4dCwgcG9zaXRpb24sIGdvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAtIHRoaXMudnkgKiAyZjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAoZmxvYXQpLXRoaXMudGV4dHVyZS5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGRvdWJsZSl0aGlzLnkgPCAoZG91YmxlKS10aGlzLnRleHR1cmUuSGVpZ2h0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lZGdlb2ZzY3JlZW5sb3NlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBTcHJpdGVCYXRjaCBzcHJpdGVCYXRjaCA9IHRoaXMuc3ByaXRlQmF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgU3ByaXRlRm9udCBzcHJpdGVGb250ID0gdGhpcy5zcHJpdGVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyB0ZXh0ID0gXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gdGhpcy5HcmFwaGljc0RldmljZS5WaWV3cG9ydDtcclxuICAgICAgICAgICAgICAgICAgICBkb3VibGUgbnVtMSA9IChkb3VibGUpKHZpZXdwb3J0LldpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZSBudW0yID0gKGRvdWJsZSkodmlld3BvcnQuSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yMiBwb3NpdGlvbiA9IG5ldyBWZWN0b3IyKChmbG9hdCludW0xLCAoZmxvYXQpbnVtMik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3IgZ29sZCA9IENvbG9yLkdvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCB0ZXh0LCBwb3NpdGlvbiwgZ29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYm91bmN5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAoZmxvYXQpTWF0aC5BYnModGhpcy52eSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQgPSB0aGlzLkdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IChmbG9hdCl2aWV3cG9ydC5Cb3VuZHMuSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlN0b3BXaGVuTm90TW92aW5nICYmICF0aGlzLm1vdmVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMC4wZjtcclxuICAgICAgICAgICAgICAgIHRoaXMudnkgPSAwLjBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudnggKj0gdGhpcy54ZHJhZztcclxuICAgICAgICAgICAgdGhpcy52eSAqPSB0aGlzLnlkcmFnO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlfZWZmZWN0ICo9IHRoaXMueWRyYWc7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eV9lZmZlY3QgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICBiYXNlLkRyYXcoZ2FtZVRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFJlc2V0R2FtZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUJhY2tncm91bmRDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuU3RvcFdoZW5Ob3RNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMueGRyYWcgPSAwLjk5ZjtcclxuICAgICAgICAgICAgdGhpcy55ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZWwgPSAwLjFmO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlfZWZmZWN0ID0gMC4wZjtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4wZjtcclxuICAgICAgICAgICAgdGhpcy54ID0gMC4wZjtcclxuICAgICAgICAgICAgdGhpcy55ID0gMC4wZjtcclxuICAgICAgICAgICAgdGhpcy52eCA9IDAuMGY7XHJcbiAgICAgICAgICAgIHRoaXMudnkgPSAwLjBmO1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5jeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJsdWUgPSAxZjtcclxuICAgICAgICAgICAgdGhpcy5lZGdlb2ZzY3JlZW5sb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnggPSAwLjBmO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyeSA9IDAuMGY7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ5ID0gMC4wZjtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcnZ4ID0gMC4wZjtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkZvbGxvd0JhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgQm91bmN5X0JhbGxcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2luZyAodmFyIGdhbWUgPSBuZXcgR2FtZTEoKSlcclxuICAgICAgICAgICAgICAgIGdhbWUuUnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
