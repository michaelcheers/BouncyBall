/**
 * Bouncy Ball game restored with Bridge.NET
 * @version 1.0.0.0
 * @compiler Bridge.NET 17.10.0
 */
Bridge.assembly("BouncyBall", function ($asm, globals) {
    "use strict";

    Bridge.define("Bouncy_Ball.Button", {
        $kind: "enum",
        statics: {
            fields: {
                NewGame: 0,
                LoadGame: 1,
                Exit: 2
            }
        }
    });

    Bridge.define("Bouncy_Ball.Buttons_Load_File_Right_Click", {
        $kind: "enum",
        statics: {
            fields: {
                Play: 0,
                Delete: 1,
                Rename: 2
            }
        }
    });

    Bridge.define("Bouncy_Ball.ClipboardHelper");

    /** @namespace Bouncy_Ball */

    /**
     * This is the main type for your game
     *
     * @public
     * @class Bouncy_Ball.Game1
     * @augments Microsoft.Xna.Framework.Game
     */
    Bridge.define("Bouncy_Ball.Game1", {
        inherits: [Microsoft.Xna.Framework.Game],
        statics: {
            methods: {
                GetKeyState: function (keyCode) {
                    return 0;
                }
            }
        },
        fields: {
            spriteFont: null,
            graphics: null,
            keys: null,
            capital: null,
            spriteBatch: null,
            texture: null,
            button: null,
            world_name: null,
            asking_world_name: false,
            Game_Over: null,
            Bounce: null,
            Music: null,
            instance: null,
            ball: null,
            black_ball: null,
            sound_playing_temp: false,
            lastActionTime: 0,
            comma_pressed_last_frame: false,
            looking_at_saved_games: false,
            MouseMoveBasePlayer: false,
            FollowBackgroundColor: false,
            clear: false,
            multiplayercontrolsenabled: false,
            windows_pressed_last_frame: false,
            asking_name: false,
            controlsenabled: false,
            enabled: false,
            multiplayeredgeofscreendie: false,
            multiplayer: false,
            played_music_last_frame: false,
            multiplayerx: 0,
            multiplayery: 0,
            Multiplayer_Moved: false,
            name: null,
            multiplayervx: 0,
            from_saved_game_code: false,
            multiplayervy: 0,
            edgeofscreenlose: false,
            bouncy: false,
            subtract_Pressed_Last_Frame: false,
            autosave: false,
            world_names: null,
            names: null,
            saved_game_code: null,
            saved_game_destnation: null,
            x: 0,
            y: 0,
            vx: 0,
            speed: 0,
            vy: 0,
            Cpu_Multiplayer: false,
            Cpu_vx: 0,
            Cpu_vy: 0,
            Cpu_x: 0,
            Cpu_y: 0,
            xdrag: 0,
            ydrag: 0,
            accel: 0,
            gravity: 0,
            gravity_effect: 0,
            blue: 0,
            playing: false,
            game_overed: false,
            moved: false,
            StopWhenNotMoving: false,
            UpdateBackgroundColor: false,
            buttons: null,
            buttons_right_click_load_file: null,
            MultiplayerDieMultiplayerDissipear: false,
            Cpu_Moved: false,
            alpha: 0,
            saved_games: null,
            BackroundColor: null,
            actualColor: null,
            ballColor: null,
            multiplayerColor: null,
            actualMultiplayerColor: null,
            random: null,
            L_Pressed_Last_Frame: false,
            distance: 0,
            Multiply_Pressed_Last_Frame: false,
            secs: 0,
            full_screen_temp: false,
            maximun: 0,
            tag: false,
            last_tag: false,
            _firstDraw: false
        },
        ctors: {
            init: function () {
                this.BackroundColor = new Microsoft.Xna.Framework.Color();
                this.actualColor = new Microsoft.Xna.Framework.Color();
                this.ballColor = new Microsoft.Xna.Framework.Color();
                this.multiplayerColor = new Microsoft.Xna.Framework.Color();
                this.actualMultiplayerColor = new Microsoft.Xna.Framework.Color();
                this.keys = new (System.Collections.Generic.Dictionary$2(System.Char,System.Array.type(Microsoft.Xna.Framework.Input.Keys))).$ctor4(26);
                this.capital = new (System.Collections.Generic.Dictionary$2(System.Array.type(Microsoft.Xna.Framework.Input.Keys),System.Char)).$ctor4(26);
                this.world_name = "";
                this.asking_world_name = false;
                this.lastActionTime = 0;
                this.comma_pressed_last_frame = false;
                this.looking_at_saved_games = false;
                this.MouseMoveBasePlayer = false;
                this.FollowBackgroundColor = false;
                this.clear = true;
                this.multiplayercontrolsenabled = true;
                this.windows_pressed_last_frame = false;
                this.asking_name = true;
                this.controlsenabled = true;
                this.enabled = true;
                this.multiplayeredgeofscreendie = false;
                this.multiplayer = false;
                this.played_music_last_frame = false;
                this.multiplayerx = 0.0;
                this.multiplayery = 0.0;
                this.Multiplayer_Moved = false;
                this.name = "";
                this.multiplayervx = 0.0;
                this.from_saved_game_code = false;
                this.multiplayervy = 0.0;
                this.edgeofscreenlose = false;
                this.bouncy = false;
                this.subtract_Pressed_Last_Frame = false;
                this.autosave = true;
                this.saved_game_code = "K.w.tyn.hflsor...thgr";
                this.x = 0;
                this.y = 0;
                this.vx = 0;
                this.speed = 0;
                this.vy = 0;
                this.Cpu_Multiplayer = false;
                this.Cpu_vx = 0;
                this.Cpu_vy = 0;
                this.Cpu_x = 0;
                this.Cpu_y = 0;
                this.xdrag = 0.99;
                this.ydrag = 0.99;
                this.accel = 0.1;
                this.gravity = 0.0;
                this.gravity_effect = 0.0;
                this.blue = 1.0;
                this.playing = false;
                this.game_overed = false;
                this.moved = false;
                this.StopWhenNotMoving = false;
                this.UpdateBackgroundColor = true;
                this.buttons = System.Array.init([new Microsoft.Xna.Framework.Vector2.$ctor2(92.5, 42.5), new Microsoft.Xna.Framework.Vector2.$ctor2(142.5, 117.0), new Microsoft.Xna.Framework.Vector2.$ctor2(92.5, 160.0)], Microsoft.Xna.Framework.Vector2);
                this.buttons_right_click_load_file = System.Array.init([new Microsoft.Xna.Framework.Vector2.$ctor2(92.5, 42.5), new Microsoft.Xna.Framework.Vector2.$ctor2(142.5, 117.0), new Microsoft.Xna.Framework.Vector2.$ctor2(92.5, 160.0)], Microsoft.Xna.Framework.Vector2);
                this.MultiplayerDieMultiplayerDissipear = false;
                this.Cpu_Moved = false;
                this.alpha = 255;
                this.BackroundColor = Microsoft.Xna.Framework.Color.White.$clone();
                this.ballColor = Microsoft.Xna.Framework.Color.White.$clone();
                this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                this.random = new System.Random.ctor();
                this.L_Pressed_Last_Frame = false;
                this.distance = 0.0;
                this.Multiply_Pressed_Last_Frame = false;
                this.secs = 0;
                this.full_screen_temp = false;
                this.maximun = 0;
            },
            ctor: function () {
                this.$initialize();
                Microsoft.Xna.Framework.Game.ctor.call(this);
                this.graphics = new Microsoft.Xna.Framework.GraphicsDeviceManager(this);
                this.Content.RootDirectory = "Content";
            }
        },
        methods: {
            CapitilizeKeys: function () {
                var $t, $t1, $t2, $t3, $t4, $t5;
                var keyscount = this.keys.Count;
                for (var n = 0; n < keyscount; n = (n + 1) | 0) {
                    this.keys.add(String.fromCharCode(($t = System.Char, System.Linq.Enumerable.from(this.keys.Keys, $t).toList($t)).getItem(n)).toUpperCase().charCodeAt(0), System.Array.init([Microsoft.Xna.Framework.Input.Keys.LeftShift, ($t1 = ($t2 = System.Array.type(Microsoft.Xna.Framework.Input.Keys), System.Linq.Enumerable.from(this.keys.Values, $t2).toList($t2)).getItem(n))[System.Array.index(0, $t1)]], Microsoft.Xna.Framework.Input.Keys));
                    this.capital.add(System.Array.init([Microsoft.Xna.Framework.Input.Keys.RightShift, ($t3 = ($t4 = System.Array.type(Microsoft.Xna.Framework.Input.Keys), System.Linq.Enumerable.from(this.keys.Values, $t4).toList($t4)).getItem(n))[System.Array.index(0, $t3)]], Microsoft.Xna.Framework.Input.Keys), String.fromCharCode(($t5 = System.Char, System.Linq.Enumerable.from(this.keys.Keys, $t5).toList($t5)).getItem(n)).toUpperCase().charCodeAt(0));
                }
            },
            /**
             * Allows the game to perform any initialization it needs to before starting to run.
             This is where it can query for any required services and ( any non-graphic
             related content.  Calling base.Initialize will enumerate through any components
             and initialize them as well.
             *
             * @instance
             * @protected
             * @override
             * @this Bouncy_Ball.Game1
             * @memberof Bouncy_Ball.Game1
             * @return  {void}
             */
            Initialize: function () {
                // TODO: Add your initialization logic here
                this.saved_game_destnation = this.saved_game_code;
                this.actualColor = this.ballColor.$clone();
                this.actualMultiplayerColor = this.multiplayerColor.$clone();
                this.keys.add(97, System.Array.init([Microsoft.Xna.Framework.Input.Keys.A], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(98, System.Array.init([Microsoft.Xna.Framework.Input.Keys.B], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(99, System.Array.init([Microsoft.Xna.Framework.Input.Keys.C], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(100, System.Array.init([Microsoft.Xna.Framework.Input.Keys.D], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(101, System.Array.init([Microsoft.Xna.Framework.Input.Keys.E], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(102, System.Array.init([Microsoft.Xna.Framework.Input.Keys.F], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(103, System.Array.init([Microsoft.Xna.Framework.Input.Keys.G], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(104, System.Array.init([Microsoft.Xna.Framework.Input.Keys.H], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(105, System.Array.init([Microsoft.Xna.Framework.Input.Keys.I], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(106, System.Array.init([Microsoft.Xna.Framework.Input.Keys.J], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(107, System.Array.init([Microsoft.Xna.Framework.Input.Keys.K], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(108, System.Array.init([Microsoft.Xna.Framework.Input.Keys.L], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(109, System.Array.init([Microsoft.Xna.Framework.Input.Keys.M], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(110, System.Array.init([Microsoft.Xna.Framework.Input.Keys.N], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(111, System.Array.init([Microsoft.Xna.Framework.Input.Keys.O], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(112, System.Array.init([Microsoft.Xna.Framework.Input.Keys.P], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(113, System.Array.init([Microsoft.Xna.Framework.Input.Keys.Q], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(114, System.Array.init([Microsoft.Xna.Framework.Input.Keys.R], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(115, System.Array.init([Microsoft.Xna.Framework.Input.Keys.S], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(116, System.Array.init([Microsoft.Xna.Framework.Input.Keys.T], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(117, System.Array.init([Microsoft.Xna.Framework.Input.Keys.U], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(118, System.Array.init([Microsoft.Xna.Framework.Input.Keys.V], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(119, System.Array.init([Microsoft.Xna.Framework.Input.Keys.W], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(120, System.Array.init([Microsoft.Xna.Framework.Input.Keys.X], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(121, System.Array.init([Microsoft.Xna.Framework.Input.Keys.Y], Microsoft.Xna.Framework.Input.Keys));
                this.keys.add(122, System.Array.init([Microsoft.Xna.Framework.Input.Keys.Z], Microsoft.Xna.Framework.Input.Keys));
                //CapitilizeKeys();
                this.keys.add(32, System.Array.init([Microsoft.Xna.Framework.Input.Keys.Space], Microsoft.Xna.Framework.Input.Keys));
                // Initialize localStorage
                Bouncy_Ball.Storage.Initialize();
                Microsoft.Xna.Framework.Game.prototype.Initialize.call(this);
            },
            StartPlaying: function (gameTime) {
                if (!this.CanPerformAction()) {
                    return;
                }
                if (this.sound_playing_temp) {
                    this.instance.Play();
                }
                this.playing = true;
            },
            StopPlaying: function (gameTime) {
                if (!this.CanPerformAction()) {
                    return;
                }
                this.instance.Stop();
                this.playing = false;
            },
            CanPerformAction: function () {
                var now = window.performance.now();
                if (now - this.lastActionTime > 250) {
                    this.lastActionTime = now;
                    return true;
                }
                return false;
            },
            /**
             * LoadContent will be called once per game and is the place to load
             all of your content.
             *
             * @instance
             * @protected
             * @override
             * @this Bouncy_Ball.Game1
             * @memberof Bouncy_Ball.Game1
             * @return  {void}
             */
            LoadContent: function () {
                this.spriteFont = this.Content.Load(Microsoft.Xna.Framework.Graphics.SpriteFont, "Arial");
                this.ball = this.Content.Load(Microsoft.Xna.Framework.Graphics.Texture2D, "ball");
                this.black_ball = this.Content.Load(Microsoft.Xna.Framework.Graphics.Texture2D, "black ball");
                this.Game_Over = this.Content.Load(Microsoft.Xna.Framework.Audio.SoundEffect, "Reject 2");
                this.Bounce = this.Content.Load(Microsoft.Xna.Framework.Audio.SoundEffect, "bounce");
                this.Music = this.Content.Load(Microsoft.Xna.Framework.Audio.SoundEffect, "on the floor");
                this.instance = this.Music.CreateInstance();
                this.button = this.Content.Load(Microsoft.Xna.Framework.Graphics.Texture2D, "Button");
                // Create a new SpriteBatch, which can be used to draw textures.
                this.spriteBatch = new Microsoft.Xna.Framework.Graphics.SpriteBatch(this.GraphicsDevice);

                this.instance.IsLooped = true;
                this.IsMouseVisible = true;
                if (System.Environment.GetCommandLineArgs().length > 1) {
                    while (true) {
                        try {
                            this.Load(System.Linq.Enumerable.from(System.Environment.GetCommandLineArgs(), System.String).last());
                            break;
                        } catch ($e1) {
                            $e1 = System.Exception.create($e1);
                        }
                    }
                }
                // TODO: use this.Content to load your game content here
            },
            BeingPressed: function (key) {
                var $t;
                var result = true;
                $t = Bridge.getEnumerator(key);
                try {
                    while ($t.moveNext()) {
                        var k = $t.Current;
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyUp(k)) {
                            result = false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            SaveTo: function (savingdirectory) {
                Bouncy_Ball.Storage.CreateDirectory(savingdirectory);
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/PlayingSound.txt", System.Boolean.toString((this.instance.State === Microsoft.Xna.Framework.Audio.SoundState.Playing)));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/FullScreen.txt", System.Boolean.toString(this.graphics.IsFullScreen));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/distance.txt", System.Single.format(this.distance));
                // Skip texture save - not supported in browser, will use default ball
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/MouseMoveBasePlayer.txt", System.Boolean.toString(this.MouseMoveBasePlayer));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/FollowBackroundColor.txt", System.Boolean.toString(this.FollowBackgroundColor));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/clear.txt", System.Boolean.toString(this.clear));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/multiplayercontrolsenabled.txt", System.Boolean.toString(this.multiplayercontrolsenabled));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/controlsenabled.txt", System.Boolean.toString(this.controlsenabled));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/enabled.txt", System.Boolean.toString(this.enabled));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/multiplayeredgeofscreendie.txt", System.Boolean.toString(this.multiplayeredgeofscreendie));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/multiplayer.txt", System.Boolean.toString(this.multiplayer));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/multiplayerx.txt", System.Single.format(this.multiplayerx));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/multiplayery.txt", System.Single.format(this.multiplayery));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/name.txt", this.name);
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/world_name.txt", this.world_name);
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/multiplayervx.txt", System.Single.format(this.multiplayervx));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/edgeofscreenlose.txt", System.Boolean.toString(this.edgeofscreenlose));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/bouncy.txt", System.Boolean.toString(this.bouncy));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/x.txt", System.Single.format(this.x));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/y.txt", System.Single.format(this.y));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/vx.txt", System.Single.format(this.vx));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/vy.txt", System.Single.format(this.vy));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/Cpu_Multiplayer.txt", System.Boolean.toString(this.Cpu_Multiplayer));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/Cpu_vx.txt", System.Single.format(this.Cpu_vx));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/Cpu_vy.txt", System.Single.format(this.Cpu_vy));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/Cpu_y.txt", System.Single.format(this.Cpu_y));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/Cpu_x.txt", System.Single.format(this.Cpu_x));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/drag.txt", System.Single.format(this.xdrag));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/accel.txt", System.Single.format(this.accel));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/gravity.txt", System.Single.format(this.gravity));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/gravity_effect.txt", System.Single.format(this.gravity_effect));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/blue.txt", System.Single.format(this.blue));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/game_overred.txt", System.Boolean.toString(this.game_overed));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/StopWhenNotMoving.txt", System.Boolean.toString(this.StopWhenNotMoving));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/UpdateBackgroundColor.txt", System.Boolean.toString(this.UpdateBackgroundColor));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/MultiplayerDieMultiplayerDissipear.txt", System.Boolean.toString(this.MultiplayerDieMultiplayerDissipear));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/alpha.txt", Bridge.toString(this.alpha));
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/BackroundColor.txt", this.BackroundColor.A + "\n" + this.BackroundColor.B + "\n" + this.BackroundColor.G + "\n" + this.BackroundColor.R);
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/ballColor.txt", this.ballColor.A + "\n" + this.ballColor.B + "\n" + this.ballColor.G + "\n" + this.ballColor.R);
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/actualColor.txt", this.actualColor.A + "\n" + this.actualColor.B + "\n" + this.actualColor.G + "\n" + this.actualColor.R);
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/multiplayerColor.txt", this.multiplayerColor.A + "\n" + this.multiplayerColor.B + "\n" + this.multiplayerColor.G + "\n" + this.multiplayerColor.R);
                Bouncy_Ball.Storage.WriteAllText((savingdirectory || "") + "/actualMultiplayerColor.txt", this.actualMultiplayerColor.A + "\n" + this.actualMultiplayerColor.B + "\n" + this.actualMultiplayerColor.G + "\n" + this.actualMultiplayerColor.R);
                Bouncy_Ball.Storage.IncrementSavingsCount();
            },
            Load: function (s) {
                this.looking_at_saved_games = false;
                this.MouseMoveBasePlayer = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/MouseMoveBasePlayer.txt"));
                this.sound_playing_temp = Bridge.referenceEquals(Bouncy_Ball.Storage.ReadAllText((s || "") + "/PlayingSound.txt"), "True");
                this.full_screen_temp = Bridge.referenceEquals(Bouncy_Ball.Storage.ReadAllText((s || "") + "/FullScreen.txt"), "True");
                if (!Bouncy_Ball.Storage.FileExists((s || "") + "/distance.txt")) {
                    Bouncy_Ball.Storage.WriteAllText((s || "") + "/distance.txt", "0");
                }
                // Texture loading not supported in browser - use default ball
                this.texture = this.ball;
                this.distance = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/distance.txt"));
                this.FollowBackgroundColor = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/FollowBackroundColor.txt"));
                this.clear = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/clear.txt"));
                this.multiplayercontrolsenabled = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/multiplayercontrolsenabled.txt"));
                this.controlsenabled = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/controlsenabled.txt"));
                this.enabled = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/enabled.txt"));
                this.multiplayeredgeofscreendie = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/multiplayeredgeofscreendie.txt"));
                this.multiplayer = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/multiplayer.txt"));
                this.multiplayerx = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/multiplayerx.txt"));
                this.multiplayery = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/multiplayery.txt"));
                this.asking_world_name = true;
                this.multiplayervx = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/multiplayervx.txt"));
                this.edgeofscreenlose = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/edgeofscreenlose.txt"));
                this.bouncy = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/bouncy.txt"));
                this.x = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/x.txt"));
                this.y = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/y.txt"));
                this.vx = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/vx.txt"));
                this.vy = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/vy.txt"));
                this.Cpu_Multiplayer = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/Cpu_Multiplayer.txt"));
                this.Cpu_vx = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/Cpu_vx.txt"));
                this.Cpu_vy = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/Cpu_vy.txt"));
                this.Cpu_y = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/Cpu_y.txt"));
                this.Cpu_x = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/Cpu_x.txt"));
                this.xdrag = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/drag.txt"));
                this.ydrag = this.xdrag;
                this.accel = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/accel.txt"));
                this.gravity = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/gravity.txt"));
                this.gravity_effect = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/gravity_effect.txt"));
                this.blue = System.Single.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/blue.txt"));
                this.game_overed = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/game_overred.txt"));
                this.StopWhenNotMoving = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/StopWhenNotMoving.txt"));
                this.UpdateBackgroundColor = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/UpdateBackgroundColor.txt"));
                this.MultiplayerDieMultiplayerDissipear = System.Convert.toBoolean(Bouncy_Ball.Storage.ReadAllText((s || "") + "/MultiplayerDieMultiplayerDissipear.txt"));
                this.alpha = System.Byte.parse(Bouncy_Ball.Storage.ReadAllText((s || "") + "/alpha.txt"));
                var BackroundColors = Bouncy_Ball.Storage.ReadAllLines((s || "") + "/BackroundColor.txt");
                this.BackroundColor = new Microsoft.Xna.Framework.Color.$ctor5(System.Byte.parse(BackroundColors[System.Array.index(3, BackroundColors)]), System.Byte.parse(BackroundColors[System.Array.index(2, BackroundColors)]), System.Byte.parse(BackroundColors[System.Array.index(1, BackroundColors)]), System.Byte.parse(BackroundColors[System.Array.index(0, BackroundColors)]));
                var ballColors = Bouncy_Ball.Storage.ReadAllLines((s || "") + "/ballColor.txt");
                this.ballColor = new Microsoft.Xna.Framework.Color.$ctor5(System.Byte.parse(ballColors[System.Array.index(3, ballColors)]), System.Byte.parse(ballColors[System.Array.index(2, ballColors)]), System.Byte.parse(ballColors[System.Array.index(1, ballColors)]), System.Byte.parse(ballColors[System.Array.index(0, ballColors)]));
                var actualColors = Bouncy_Ball.Storage.ReadAllLines((s || "") + "/actualColor.txt");
                this.actualColor = new Microsoft.Xna.Framework.Color.$ctor5(System.Byte.parse(actualColors[System.Array.index(3, actualColors)]), System.Byte.parse(actualColors[System.Array.index(2, actualColors)]), System.Byte.parse(actualColors[System.Array.index(1, actualColors)]), System.Byte.parse(actualColors[System.Array.index(0, actualColors)]));
                var multiplayerColors = Bouncy_Ball.Storage.ReadAllLines((s || "") + "/multiplayerColor.txt");
                this.multiplayerColor = new Microsoft.Xna.Framework.Color.$ctor5(System.Byte.parse(multiplayerColors[System.Array.index(3, multiplayerColors)]), System.Byte.parse(multiplayerColors[System.Array.index(2, multiplayerColors)]), System.Byte.parse(multiplayerColors[System.Array.index(1, multiplayerColors)]), System.Byte.parse(multiplayerColors[System.Array.index(0, multiplayerColors)]));
                var actualMultiplayerColors = Bouncy_Ball.Storage.ReadAllLines((s || "") + "/actualMultiplayerColor.txt");
                this.actualMultiplayerColor = new Microsoft.Xna.Framework.Color.$ctor5(System.Byte.parse(actualMultiplayerColors[System.Array.index(3, actualMultiplayerColors)]), System.Byte.parse(actualMultiplayerColors[System.Array.index(2, actualMultiplayerColors)]), System.Byte.parse(actualMultiplayerColors[System.Array.index(1, actualMultiplayerColors)]), System.Byte.parse(actualMultiplayerColors[System.Array.index(0, actualMultiplayerColors)]));
                this.asking_world_name = true;
                this.spriteBatch.End();
            },
            Close: function () {
                // Process not available in browser - just exit the game
                this.Exit();
            },
            /**
             * UnloadContent will be called once per game and is the place to unload
             all content.
             *
             * @instance
             * @protected
             * @override
             * @this Bouncy_Ball.Game1
             * @memberof Bouncy_Ball.Game1
             * @return  {void}
             */
            UnloadContent: function () {
                // TODO: Unload any non ContentManager content here
            },
            /**
             * Allows the game to run logic such as updating the world,
             checking for collisions, gathering input, and playing audio.
             *
             * @instance
             * @protected
             * @override
             * @this Bouncy_Ball.Game1
             * @memberof Bouncy_Ball.Game1
             * @param   {Microsoft.Xna.Framework.GameTime}    gameTime    Provides a snapshot of timing values.
             * @return  {void}
             */
            Update: function (gameTime) {
                // Allows the game to exit
                if (Microsoft.Xna.Framework.Input.GamePad.GetState(Microsoft.Xna.Framework.PlayerIndex.One).Buttons.Back === Microsoft.Xna.Framework.Input.ButtonState.Pressed) {
                    this.Exit();
                }

                // TODO: Add your update logic here

                Microsoft.Xna.Framework.Game.prototype.Update.call(this, gameTime);
            },
            MakeFloatPerfect: function (input) {
                return (Bridge.Math.round(input * 100, 0, 6) / 100);
            },
            Save: function () {
                var savingdirectory = Bridge.toString(Bouncy_Ball.Storage.GetSavingsCount());
                this.SaveTo(savingdirectory);
            },
            MakeGravityPerfect: function (input) {
                return (Bridge.Math.round(input * 10000, 0, 6) / 10000);
            },
            /**
             * This is called when the game should draw itself.
             *
             * @instance
             * @protected
             * @override
             * @this Bouncy_Ball.Game1
             * @memberof Bouncy_Ball.Game1
             * @param   {Microsoft.Xna.Framework.GameTime}    gameTime    Provides a snapshot of timing values.
             * @return  {void}
             */
            Draw: function (gameTime) {
                var $t, $t1, $t2, $t3, $t4, $t5, $t6, $t7, $t8, $t9, $t10, $t11, $t12;
                if (!this._firstDraw) {
                    document.body.appendChild(($t = document.createElement("a"), $t.textContent = "How to Play", $t.href = "how-to-play.html", $t.className = "help-link", $t.target = "_blank", $t));
                    this._firstDraw = true;
                }
                if (this.asking_world_name) {
                    this.GraphicsDevice.Clear(Microsoft.Xna.Framework.Color.Red.$clone());
                }
                if (this.playing) {
                    if (this.clear) {
                        if (this.enabled) {
                            // TODO: Add your drawing code here

                            if (this.UpdateBackgroundColor) {
                                this.BackroundColor = new Microsoft.Xna.Framework.Color.$ctor9((Math.cos(this.x * 0.01) + 1) / 2, (Math.cos(this.y * 0.01) + 1) / 2, this.blue, this.alpha);
                            }
                            this.GraphicsDevice.Clear(this.BackroundColor.$clone());
                            if (this.FollowBackgroundColor) {
                                this.ballColor = new Microsoft.Xna.Framework.Color.$ctor9((Math.cos(this.x * 0.01) + 1) / 2, (Math.cos(this.y * 0.01) + 1) / 2, this.blue, this.alpha);
                                this.actualColor = this.ballColor.$clone();
                            }

                            this.moved = false;
                            this.spriteBatch.Begin();
                            this.spriteBatch.Draw$3(this.texture, new Microsoft.Xna.Framework.Vector2.$ctor2(this.x, this.y), this.ballColor.$clone());
                            this.spriteBatch.DrawString(this.spriteFont, "Speed: " + System.Single.format(this.speed) + "pix/frame", new Microsoft.Xna.Framework.Vector2.$ctor2(((this.GraphicsDevice.Viewport.Width - 250) | 0), 0), Microsoft.Xna.Framework.Color.Green.$clone());
                            this.spriteBatch.DrawString(this.spriteFont, "Maximun Speed: " + System.Single.format(this.maximun) + "pix/frame", new Microsoft.Xna.Framework.Vector2.$ctor2(((this.GraphicsDevice.Viewport.Width - 250) | 0), 15), Microsoft.Xna.Framework.Color.Green.$clone());
                            this.spriteBatch.DrawString(this.spriteFont, "Elevation: " + System.Single.format((-this.y + this.GraphicsDevice.Viewport.Height)) + "pix", new Microsoft.Xna.Framework.Vector2.$ctor2(((this.GraphicsDevice.Viewport.Width - 250) | 0), 30), Microsoft.Xna.Framework.Color.Green.$clone());
                            this.spriteBatch.DrawString(this.spriteFont, "Distance: " + System.Single.format(this.distance) + "pix", new Microsoft.Xna.Framework.Vector2.$ctor2(((this.GraphicsDevice.Viewport.Width - 250) | 0), 45), Microsoft.Xna.Framework.Color.Green.$clone());

                            if (this.gravity !== 0) {
                                this.spriteBatch.DrawString(this.spriteFont, "Gravity: " + System.Single.format(this.MakeGravityPerfect(this.gravity)) + "pix/frame", new Microsoft.Xna.Framework.Vector2.$ctor2(((this.GraphicsDevice.Viewport.Width - 250) | 0), 60), Microsoft.Xna.Framework.Color.Green.$clone());
                            }

                            if (this.multiplayer) {
                                this.spriteBatch.Draw$3(this.ball, new Microsoft.Xna.Framework.Vector2.$ctor2(this.multiplayerx, this.multiplayery), this.multiplayerColor.$clone());
                            }
                            if (this.Cpu_Multiplayer) {
                                this.spriteBatch.Draw$3(this.ball, new Microsoft.Xna.Framework.Vector2.$ctor2(this.Cpu_x, this.Cpu_y), Microsoft.Xna.Framework.Color.White.$clone());
                            }
                            this.spriteBatch.End();
                        }
                        this.x += this.vx;
                        this.y += this.vy;
                        this.y += this.gravity_effect;
                        if (this.Cpu_Multiplayer) {
                            this.Cpu_Moved = false;
                            if (this.vx > 0) {
                                this.Cpu_vx += this.accel;
                                this.Cpu_Moved = true;
                            } else if (this.vx < 0) {
                                this.Cpu_vx -= this.accel;
                                this.Cpu_Moved = true;
                            }
                            if (this.vy > 0) {
                                this.Cpu_vy += this.accel;
                                this.Cpu_Moved = true;
                            } else if (this.vy < 0) {
                                this.Cpu_vy -= this.accel;
                                this.Cpu_Moved = true;
                            }
                            this.Cpu_x += this.Cpu_vx;
                            this.Cpu_y += this.Cpu_vy;
                            if (this.Cpu_x >= this.GraphicsDevice.Viewport.Bounds.Width) {
                                if (this.bouncy) {
                                    this.Cpu_vx = this.Cpu_vx - (this.Cpu_vx * 2);
                                    this.Bounce.Play();
                                } else {
                                    this.Cpu_x = (-this.texture.Width) | 0;
                                }
                            } else if (this.Cpu_x < ((-this.texture.Width) | 0)) {
                                if (this.bouncy) {
                                    this.Cpu_vx = Math.abs(this.Cpu_vx);
                                    this.Bounce.Play();
                                } else {
                                    this.Cpu_x = this.GraphicsDevice.Viewport.Bounds.Width;
                                }
                            }
                            if (this.Cpu_y >= this.GraphicsDevice.Viewport.Bounds.Height) {
                                if (this.bouncy) {
                                    this.Cpu_vy = this.Cpu_vy - (this.Cpu_vy * 2);
                                    this.Bounce.Play();
                                } else {
                                    this.Cpu_y = (-this.texture.Height) | 0;
                                }
                            } else if (this.Cpu_y < ((-this.texture.Height) | 0)) {
                                if (this.bouncy) {
                                    this.Cpu_vy = Math.abs(this.Cpu_vy);
                                    this.Bounce.Play();
                                } else {
                                    this.Cpu_y = this.GraphicsDevice.Viewport.Bounds.Height;
                                }
                            }
                            if (this.StopWhenNotMoving && !this.Cpu_Moved) {
                                this.Cpu_vx = 0;
                                this.Cpu_vy = 0;
                            }
                            this.Cpu_vy *= this.ydrag;
                            this.Cpu_vx *= this.xdrag;
                            this.Cpu_vy += this.gravity;
                        }
                    }
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
                        if (this.controlsenabled) {
                            this.Multiplayer_Moved = false;
                            if (this.multiplayercontrolsenabled) {
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Left)) {
                                    this.vx -= this.accel;
                                    this.moved = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.A)) {
                                    this.multiplayervx -= 0.1;
                                    this.Multiplayer_Moved = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Right)) {
                                    this.vx += this.accel;
                                    this.moved = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D)) {
                                    this.multiplayervx += 0.1;
                                    this.Multiplayer_Moved = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Up)) {
                                    this.vy -= this.accel;
                                    this.moved = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.W)) {
                                    this.multiplayervy -= 0.1;
                                    this.Multiplayer_Moved = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Down)) {
                                    this.vy += this.accel;
                                    this.moved = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.S)) {
                                    this.multiplayervy += 0.1;
                                    this.Multiplayer_Moved = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftShift)) {
                                    this.multiplayeredgeofscreendie = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightShift)) {
                                    this.edgeofscreenlose = true;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftControl) && !Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.T)) {
                                    this.multiplayeredgeofscreendie = false;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftControl) && Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.T)) {
                                    if (!this.last_tag) {
                                        this.tag = !this.tag;
                                    }
                                    this.last_tag = true;
                                } else {
                                    this.last_tag = false;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightControl)) {
                                    this.edgeofscreenlose = false;
                                }

                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.CapsLock)) {
                                    if (Microsoft.Xna.Framework.Color.op_Inequality(this.multiplayerColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                        this.multiplayerColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.Next$1(256), this.random.Next$1(256), this.random.Next$1(256), this.random.Next$1(256));
                                        this.actualMultiplayerColor = this.multiplayerColor.$clone();
                                    }
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F5)) {
                                    this.multiplayerColor = Microsoft.Xna.Framework.Color.Transparent.$clone();
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F6)) {
                                    this.multiplayerColor = this.actualMultiplayerColor.$clone();
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F7)) {
                                    if (Microsoft.Xna.Framework.Color.op_Inequality(this.multiplayerColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                        this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                                        this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                                    }
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F8)) {
                                    if (Microsoft.Xna.Framework.Color.op_Inequality(this.multiplayerColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                        this.multiplayerColor = Microsoft.Xna.Framework.Color.Black.$clone();
                                        this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.Black.$clone();
                                    }
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F9)) {
                                    if (Microsoft.Xna.Framework.Color.op_Inequality(this.multiplayerColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                        this.multiplayerColor = Microsoft.Xna.Framework.Color.HotPink.$clone();
                                        this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.HotPink.$clone();
                                    }
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F10)) {
                                    this.multiplayerx = 0;
                                    this.multiplayery = 0;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F11)) {
                                    this.multiplayerx = (Bridge.Int.div(this.GraphicsDevice.Viewport.Bounds.Width, 2)) | 0;
                                    this.multiplayery = (Bridge.Int.div(this.GraphicsDevice.Viewport.Bounds.Height, 2)) | 0;
                                }
                                if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Delete)) {
                                    this.multiplayervx = 0;
                                    this.multiplayervy = 0;
                                }

                            }
                            /* if (Math.Sqrt((multiplayerx - x) * (multiplayerx - x)) + ((multiplayery - y) * (multiplayery - y)) <= 16)
                            {
                               vx -= -vx;
                               vy -= -vy;
                               multiplayervy = -multiplayervy;
                               multiplayervx = -multiplayervx;
                            }*/
                        }
                        if (this.multiplayerx >= this.GraphicsDevice.Viewport.Bounds.Width) {
                            if (this.multiplayeredgeofscreendie) {
                                if (this.MultiplayerDieMultiplayerDissipear) {
                                    this.multiplayer = false;
                                } else {
                                    this.multiplayervx = 0;
                                    this.multiplayervy = 0;
                                    this.multiplayerx = 0;
                                    this.multiplayery = 0;
                                    this.multiplayer = false;
                                    this.multiplayer = true;
                                }
                            } else if (this.bouncy) {
                                this.multiplayervx = this.multiplayervx - (this.multiplayervx * 2);
                                this.Bounce.Play();
                            } else {
                                this.multiplayerx = (-this.texture.Width) | 0;
                            }
                        } else if (this.multiplayerx < ((-this.texture.Width) | 0)) {
                            if (this.multiplayeredgeofscreendie) {
                                if (this.MultiplayerDieMultiplayerDissipear) {
                                    this.multiplayer = false;
                                } else {
                                    this.multiplayervx = 0;
                                    this.multiplayervy = 0;
                                    this.multiplayerx = 0;
                                    this.multiplayery = 0;
                                    this.multiplayer = false;
                                    this.multiplayer = true;
                                }
                            } else if (this.bouncy) {
                                this.multiplayervx = Math.abs(this.multiplayervx);
                                this.Bounce.Play();
                            } else {
                                this.multiplayerx = this.GraphicsDevice.Viewport.Bounds.Width;
                            }
                        }
                        if (this.multiplayery >= this.GraphicsDevice.Viewport.Bounds.Height) {
                            if (this.multiplayeredgeofscreendie) {
                                if (this.MultiplayerDieMultiplayerDissipear) {
                                    this.multiplayer = false;
                                } else {
                                    this.multiplayervx = 0;
                                    this.multiplayervy = 0;
                                    this.multiplayerx = 0;
                                    this.multiplayery = 0;
                                    this.multiplayer = false;
                                    this.multiplayer = true;
                                }
                                this.multiplayer = true;
                            } else if (this.bouncy) {
                                this.multiplayervy = this.multiplayervy - (this.multiplayervy * 2);
                                this.Bounce.Play();
                            } else {
                                this.multiplayery = (-this.texture.Height) | 0;
                            }
                        } else if (this.multiplayery < ((-this.texture.Height) | 0)) {
                            if (this.multiplayeredgeofscreendie) {
                                if (this.MultiplayerDieMultiplayerDissipear) {
                                    this.multiplayer = false;
                                } else {
                                    this.multiplayervx = 0;
                                    this.multiplayervy = 0;
                                    this.multiplayerx = 0;
                                    this.multiplayery = 0;
                                    this.multiplayer = false;
                                    this.multiplayer = true;
                                }
                            } else if (this.bouncy) {
                                this.multiplayervy = Math.abs(this.multiplayervy);
                                this.Bounce.Play();
                            } else {
                                this.multiplayery = this.GraphicsDevice.Viewport.Bounds.Height;
                            }
                        }
                        if (this.StopWhenNotMoving && !this.Multiplayer_Moved) {
                            this.multiplayervx = 0;
                            this.multiplayervy = 0;
                        }
                        this.multiplayervy *= this.ydrag;
                        this.multiplayervx *= this.xdrag;
                        this.multiplayervy += this.gravity;
                    }

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
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.T) && !Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftControl)) {
                            this.x = this.random.Next$2(0, ((this.GraphicsDevice.Viewport.Bounds.Width + 1) | 0));
                            this.y = this.random.Next$2(0, ((this.GraphicsDevice.Viewport.Bounds.Height + 1) | 0));
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.C)) {
                            var a = this.random.Next$2(0, 256);
                            var b = this.random.Next$2(0, 256);
                            var c = this.random.Next$2(0, 256);
                            var d = this.random.Next$2(0, 256);
                            if (Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(a, b, c, d);
                            }
                            this.actualColor = new Microsoft.Xna.Framework.Color.$ctor7(a, b, c, d);
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                            var a1 = this.random.Next$2(0, 256);
                            var b1 = this.random.Next$2(0, 256);
                            var c1 = this.random.Next$2(0, 256);
                            var d1 = this.random.Next$2(0, 256);
                            if (Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                this.ballColor = new Microsoft.Xna.Framework.Color.$ctor7(a1, b1, c1, d1);
                            }
                            this.actualColor = new Microsoft.Xna.Framework.Color.$ctor7(a1, b1, c1, d1);
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemQuotes)) {
                            this.actualColor = new Microsoft.Xna.Framework.Color.$ctor7(this.random.Next$2(0, 256), this.random.Next$2(0, 256), this.random.Next$2(0, 256), this.ballColor.A);
                            if (Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                this.ballColor = this.actualColor.$clone();
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.B)) {
                            this.x = 0;
                            this.y = 0;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.M)) {
                            this.x = (Bridge.Int.div(this.GraphicsDevice.Viewport.Bounds.Width, 2)) | 0;
                            this.y = (Bridge.Int.div(this.GraphicsDevice.Viewport.Bounds.Height, 2)) | 0;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.I)) {
                            this.ballColor = Microsoft.Xna.Framework.Color.Transparent.$clone();
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.H)) {
                            this.ballColor = this.actualColor.$clone();
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.P)) {
                            if (!(Microsoft.Xna.Framework.Color.op_Equality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone()))) {
                                this.ballColor = Microsoft.Xna.Framework.Color.HotPink.$clone();
                            }
                            this.actualColor = this.ballColor.$clone();
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.X)) {
                            this.vx = 0;
                            this.vy = 0;
                            this.gravity_effect = 0;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.E) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Escape)) {
                            if (this.autosave) {
                                this.Save();
                            }
                            this.playing = false;
                            this.instance.Stop();
                            this.asking_world_name = false;
                            this.asking_name = false;
                            if (this.graphics.IsFullScreen) {
                                this.graphics.ToggleFullScreen();
                            }
                            // Debounce handled by button state tracking
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
                                this.Bounce.Play();
                            }
                            this.L_Pressed_Last_Frame = true;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyUp(Microsoft.Xna.Framework.Input.Keys.L)) {
                            this.L_Pressed_Last_Frame = false;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.N)) {
                            this.gravity += 0.001;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.O)) {
                            if (!(this.gravity <= 0)) {
                                this.gravity -= 0.001;
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Q)) {
                            if (Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                this.ballColor = Microsoft.Xna.Framework.Color.White.$clone();
                            }
                            this.actualColor = Microsoft.Xna.Framework.Color.White.$clone();
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.R)) {
                            this.gravity = 0;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.J)) {
                            this.xdrag = 1.0;
                            this.ydrag = 1.0;
                        }
                    }
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Space)) {
                        if (this.graphics.IsFullScreen === true) {
                            this.graphics.ToggleFullScreen();
                        }
                        this.texture = this.ball;
                        this.maximun = 0;
                        this.distance = 0;
                        this.Cpu_Moved = false;
                        this.Cpu_Multiplayer = false;
                        this.Cpu_vx = 0;
                        this.Cpu_vy = 0;
                        this.game_overed = false;
                        this.instance.Stop();
                        this.instance.Play();
                        this.UpdateBackgroundColor = true;
                        this.StopWhenNotMoving = false;
                        this.clear = true;
                        this.xdrag = 0.99;
                        this.ydrag = 0.99;
                        this.ballColor = Microsoft.Xna.Framework.Color.White.$clone();
                        this.actualColor = Microsoft.Xna.Framework.Color.White.$clone();
                        this.accel = 0.1;
                        this.gravity_effect = 0;
                        this.gravity = 0;
                        this.x = 0;
                        this.y = 0;
                        this.vx = 0;
                        this.vy = 0;
                        this.bouncy = false;
                        this.blue = 1;
                        this.edgeofscreenlose = false;
                        this.multiplayer = false;
                        this.multiplayerx = 0;
                        this.multiplayery = 0;
                        this.enabled = true;
                        this.controlsenabled = true;
                        this.multiplayervy = 0;
                        this.multiplayervx = 0;
                        this.multiplayeredgeofscreendie = false;
                        this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                        this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                        this.multiplayercontrolsenabled = true;
                        this.FollowBackgroundColor = false;
                    }
                    if (this.controlsenabled) {
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftAlt) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightAlt)) {
                            this.multiplayer = false;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.U)) {
                            this.xdrag = 0.99;
                            this.ydrag = 0.99;
                        }
                        if ((Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.K))) {
                            if (!(this.blue === 255)) {
                                this.blue += 63;
                            }
                        }
                        if ((Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F))) {
                            if ((!(this.blue === 0))) {
                                this.blue -= 63;
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Y)) {
                            this.multiplayer = true;
                            this.multiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                            this.actualMultiplayerColor = Microsoft.Xna.Framework.Color.White.$clone();
                            this.multiplayeredgeofscreendie = false;
                            this.multiplayervx = 0;
                            this.multiplayervy = 0;
                            this.multiplayerx = 0;
                            this.multiplayery = 0;
                        }

                        if (!this.multiplayer) {
                            if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftShift) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightShift)) {
                                this.edgeofscreenlose = true;
                            }

                            if ((Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftControl) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightControl)) && !Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.T)) {
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
                            this.game_overed = false;
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
                            this.multiplayerx = 0;
                            this.multiplayery = 0;
                            this.multiplayer = true;
                            this.multiplayervx = 0;
                            this.multiplayervy = 0;
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
                            this.multiplayervx = 0;
                            this.multiplayervy = 0;
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
                            if (this.vx < 0) {
                                this.vx -= this.accel;
                                this.moved = true;
                            } else if (this.vx > 0) {
                                this.vx += this.accel;
                                this.moved = true;
                            }
                            if (this.vy < 0) {
                                this.vy -= this.accel;
                                this.moved = true;
                            } else if (this.vy > 0) {
                                this.vy += this.accel;
                                this.moved = true;
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D0) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad0)) {
                            this.accel += 0.001;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D1) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad1)) {
                            this.accel -= 0.001;
                            if (this.accel < 0) {
                                this.accel = 0;
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D2) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad2)) {
                            this.accel = 0.1;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D8) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad8)) {
                            this.actualColor = new Microsoft.Xna.Framework.Color.$ctor7(255, 255, 255, this.random.Next$2(0, 256));
                            if (Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                this.ballColor = this.actualColor.$clone();
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.D9) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.NumPad9)) {
                            this.FollowBackgroundColor = true;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Back)) {
                            this.FollowBackgroundColor = false;
                        }
                        if (Microsoft.Xna.Framework.Input.Mouse.GetState().LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed) {
                            if (this.MouseMoveBasePlayer) {
                                this.x = Microsoft.Xna.Framework.Input.Mouse.GetState().X;
                                this.y = Microsoft.Xna.Framework.Input.Mouse.GetState().Y;
                            } else {
                                this.multiplayer = true;
                                this.multiplayerx = Microsoft.Xna.Framework.Input.Mouse.GetState().X;
                                this.multiplayery = Microsoft.Xna.Framework.Input.Mouse.GetState().Y;
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Mouse.GetState().RightButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed) {
                            if (!this.MouseMoveBasePlayer) {
                                this.x = Microsoft.Xna.Framework.Input.Mouse.GetState().X;
                                this.y = Microsoft.Xna.Framework.Input.Mouse.GetState().Y;
                            } else {
                                this.multiplayer = true;
                                this.multiplayerx = Microsoft.Xna.Framework.Input.Mouse.GetState().X;
                                this.multiplayery = Microsoft.Xna.Framework.Input.Mouse.GetState().Y;
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
                            if (Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                this.ballColor = Microsoft.Xna.Framework.Color.Orange.$clone();
                            }
                            this.actualColor = Microsoft.Xna.Framework.Color.Orange.$clone();
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemCloseBrackets)) {
                            if (Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                this.ballColor.A = 255;
                            }
                            this.actualColor.A = 255;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemBackslash)) {
                            try {
                                ($t = this.actualColor.$clone()).A = ($t.A + 1) & 255;
                                ($t1 = this.ballColor.$clone()).A = ($t1.A + 1) & 255;
                            } catch ($e1) {
                                $e1 = System.Exception.create($e1);
                                if (Bridge.is($e1, System.OverflowException)) {

                                } else {
                                    throw $e1;
                                }
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemSemicolon)) {
                            try {
                                if (Microsoft.Xna.Framework.Color.op_Inequality(this.ballColor.$clone(), Microsoft.Xna.Framework.Color.Transparent.$clone())) {
                                    ($t2 = this.ballColor.$clone()).A = ($t2.A - 1) & 255;
                                }
                                ($t3 = this.actualColor.$clone()).A = ($t3.A - 1) & 255;
                            } catch ($e2) {
                                $e2 = System.Exception.create($e2);
                                if (Bridge.is($e2, System.OverflowException)) {

                                } else {
                                    throw $e2;
                                }
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Subtract)) {
                            if (!this.subtract_Pressed_Last_Frame) {
                                this.graphics.ToggleFullScreen();
                            }
                            this.subtract_Pressed_Last_Frame = true;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyUp(Microsoft.Xna.Framework.Input.Keys.Subtract)) {
                            this.subtract_Pressed_Last_Frame = false;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.LeftWindows) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightWindows)) {
                            if (!this.windows_pressed_last_frame) {
                                this.Cpu_Multiplayer = true;
                                this.Cpu_x = this.x;
                                this.Cpu_y = this.y;
                            }
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyUp(Microsoft.Xna.Framework.Input.Keys.LeftWindows) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.RightWindows)) {
                            this.windows_pressed_last_frame = false;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Multiply)) {
                            if (!this.Multiply_Pressed_Last_Frame) {
                                if (this.instance.State === Microsoft.Xna.Framework.Audio.SoundState.Stopped) {
                                    this.instance.Play();
                                } else {
                                    this.instance.Stop();
                                }
                            }
                            this.Multiply_Pressed_Last_Frame = true;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyUp(Microsoft.Xna.Framework.Input.Keys.Multiply)) {
                            this.Multiply_Pressed_Last_Frame = false;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyUp(Microsoft.Xna.Framework.Input.Keys.OemComma)) {
                            this.comma_pressed_last_frame = false;
                        }
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.OemComma)) {
                            if (!this.comma_pressed_last_frame) {
                                if (Bridge.equals(this.texture, this.ball)) {
                                    this.texture = this.black_ball;
                                } else {
                                    this.texture = this.ball;
                                }
                            }
                            this.comma_pressed_last_frame = true;
                            /* System.IO.StreamWriter dragwriter = new System.IO.StreamWriter("../drag.txt");
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
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.F4)) {
                        this.controlsenabled = true;
                    }
                    if (!this.enabled) {
                        if (!this.game_overed) {
                            this.Game_Over.Play();
                            this.game_overed = true;
                        }
                        if (this.clear) {
                            this.spriteBatch.Begin();
                            this.spriteBatch.DrawString(this.spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Microsoft.Xna.Framework.Vector2.$ctor2(((Bridge.Int.div(this.GraphicsDevice.Viewport.Width, 2)) | 0), ((Bridge.Int.div(this.GraphicsDevice.Viewport.Height, 2)) | 0)), Microsoft.Xna.Framework.Color.Gold.$clone());
                            this.spriteBatch.End();
                        }
                    }
                    if (this.actualColor.A === 0) {
                        this.actualColor.A = 255;
                    }
                    this.speed = this.MakeFloatPerfect(Math.abs(Math.sqrt((this.vx * this.vx) + ((this.vy + this.gravity_effect) * (this.vy + this.gravity_effect)))));
                    this.distance += this.speed;
                    if (this.speed > this.maximun) {
                        this.maximun = this.speed;
                    }
                    if (this.clear) {
                        if (this.x >= this.GraphicsDevice.Viewport.Bounds.Width) {
                            if (this.edgeofscreenlose) {
                                this.spriteBatch.Begin();
                                this.spriteBatch.DrawString(this.spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Microsoft.Xna.Framework.Vector2.$ctor2(((Bridge.Int.div(this.GraphicsDevice.Viewport.Width, 2)) | 0), ((Bridge.Int.div(this.GraphicsDevice.Viewport.Height, 2)) | 0)), Microsoft.Xna.Framework.Color.Gold.$clone());
                                this.spriteBatch.End();
                                this.enabled = false;
                            } else if (this.bouncy) {
                                this.vx = this.vx - (this.vx * 2);
                                this.Bounce.Play();
                            } else {
                                this.x = (-this.texture.Width) | 0;
                            }
                        } else if (this.x < ((-this.texture.Width) | 0)) {
                            if (this.edgeofscreenlose) {
                                this.spriteBatch.Begin();
                                this.spriteBatch.DrawString(this.spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Microsoft.Xna.Framework.Vector2.$ctor2(((Bridge.Int.div(this.GraphicsDevice.Viewport.Width, 2)) | 0), ((Bridge.Int.div(this.GraphicsDevice.Viewport.Height, 2)) | 0)), Microsoft.Xna.Framework.Color.Gold.$clone());
                                this.spriteBatch.End();
                                this.enabled = false;
                            } else if (this.bouncy) {
                                this.vx = Math.abs(this.vx);
                                this.Bounce.Play();
                            } else {
                                this.x = this.GraphicsDevice.Viewport.Bounds.Width;
                            }
                        }
                        if (this.y >= this.GraphicsDevice.Viewport.Bounds.Height) {
                            if (this.edgeofscreenlose) {
                                this.spriteBatch.Begin();
                                this.spriteBatch.DrawString(this.spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Microsoft.Xna.Framework.Vector2.$ctor2(((Bridge.Int.div(this.GraphicsDevice.Viewport.Width, 2)) | 0), ((Bridge.Int.div(this.GraphicsDevice.Viewport.Height, 2)) | 0)), Microsoft.Xna.Framework.Color.Gold.$clone());
                                this.spriteBatch.End();
                                this.enabled = false;
                            } else if (this.bouncy) {
                                this.vy = this.vy - (this.vy * 2);
                                this.gravity_effect = -this.gravity_effect;
                                this.Bounce.Play();
                            } else {
                                this.y = (-this.texture.Height) | 0;
                            }
                        } else if (this.y < ((-this.texture.Height) | 0)) {
                            if (this.edgeofscreenlose) {
                                this.spriteBatch.Begin();
                                this.spriteBatch.DrawString(this.spriteFont, "Game Over!\nPress Space to Restart and Press esc or e to quit", new Microsoft.Xna.Framework.Vector2.$ctor2(((Bridge.Int.div(this.GraphicsDevice.Viewport.Width, 2)) | 0), ((Bridge.Int.div(this.GraphicsDevice.Viewport.Height, 2)) | 0)), Microsoft.Xna.Framework.Color.Gold.$clone());
                                this.spriteBatch.End();
                                this.enabled = false;
                            } else if (this.bouncy) {
                                this.vy = Math.abs(this.vy);
                                this.gravity_effect = -this.gravity_effect;
                                this.Bounce.Play();
                            } else {
                                this.y = this.GraphicsDevice.Viewport.Bounds.Height;
                            }
                        }
                        if (this.StopWhenNotMoving && !this.moved) {
                            this.vx = 0;
                            this.vy = 0;
                        }
                        this.vx *= this.xdrag;
                        this.vy *= this.ydrag;
                        this.gravity_effect *= this.ydrag;
                        this.gravity_effect += this.gravity;
                        var positions = Bridge.fn.bind(this, $asm.$.Bouncy_Ball.Game1.f1)(new (System.Collections.Generic.List$1(Microsoft.Xna.Framework.Vector2)).ctor());
                        positions.add(new Microsoft.Xna.Framework.Vector2.$ctor2(this.multiplayerx, this.multiplayery));
                        positions.add(new Microsoft.Xna.Framework.Vector2.$ctor2(this.Cpu_x, this.Cpu_y));
                        for (var x = 0; x < positions.Count; x = (x + 1) | 0) {
                            for (var y = 0; y < positions.Count; y = (y + 1) | 0) {
                                if (x === y) {
                                    continue;
                                }
                                var rectA = new Microsoft.Xna.Framework.Rectangle.$ctor1(positions.getItem(x).$clone().ToPoint(), new Microsoft.Xna.Framework.Point.$ctor2(32, 32));
                                var rectB = new Microsoft.Xna.Framework.Rectangle.$ctor1(positions.getItem(y).$clone().ToPoint(), new Microsoft.Xna.Framework.Point.$ctor2(32, 32));
                                if (rectA.Contains$2(positions.getItem(y).$clone()) || rectB.Contains$2(positions.getItem(x).$clone())) {
                                } // Empty block - original code was incomplete
                            }
                        }
                    }
                } else if (this.asking_world_name) {
                    {
                        this.spriteBatch.Begin();
                        this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(329, 259, 152, 27), Microsoft.Xna.Framework.Color.Black.$clone());
                        this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(330, 260, 150, 25), Microsoft.Xna.Framework.Color.White.$clone());
                        if (this.secs === 5) {
                            if (this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.Back], Microsoft.Xna.Framework.Input.Keys))) {
                                if (System.Linq.Enumerable.from(this.world_name, System.Char).count() === 0) {

                                } else {
                                    this.world_name = System.String.remove(this.world_name, ((System.Linq.Enumerable.from(this.world_name, System.Char).count() - 1) | 0));
                                }
                            }
                            if (this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.Enter], Microsoft.Xna.Framework.Input.Keys))) {
                                this.asking_world_name = false;
                                if (!this.from_saved_game_code) {
                                    this.StartPlaying(gameTime);
                                }
                                if (this.full_screen_temp) {
                                    this.graphics.ToggleFullScreen();
                                }
                                if (this.sound_playing_temp) {
                                    this.instance.Play();
                                }
                                this.sound_playing_temp = false;
                                this.full_screen_temp = false;
                            }
                            if (this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.Escape], Microsoft.Xna.Framework.Input.Keys)) && this.CanPerformAction()) {
                                this.asking_world_name = false;
                            }
                            if (this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.LeftControl, Microsoft.Xna.Framework.Input.Keys.V], Microsoft.Xna.Framework.Input.Keys)) || this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.RightControl, Microsoft.Xna.Framework.Input.Keys.V], Microsoft.Xna.Framework.Input.Keys))) {
                                navigator.clipboard.readText().then(Bridge.fn.bind(this, $asm.$.Bouncy_Ball.Game1.f2));
                            }
                            var n = 0;
                            $t4 = Bridge.getEnumerator(this.keys.Values);
                            try {
                                while ($t4.moveNext()) {
                                    var k = $t4.Current;
                                    if (this.BeingPressed(k)) {
                                        if ((((Bouncy_Ball.Game1.GetKeyState(20)) & 65535) & 65535) !== 0) {
                                            this.world_name = (this.world_name || "") + String.fromCharCode((String.fromCharCode(($t5 = System.Char, System.Linq.Enumerable.from(this.keys.Keys, $t5).toList($t5)).getItem(n)).toUpperCase().charCodeAt(0)));
                                        } else {
                                            this.world_name = (this.world_name || "") + String.fromCharCode(($t6 = System.Char, System.Linq.Enumerable.from(this.keys.Keys, $t6).toList($t6)).getItem(n));
                                        }
                                    }
                                    n = (n + 1) | 0;
                                }
                            } finally {
                                if (Bridge.is($t4, System.IDisposable)) {
                                    $t4.System$IDisposable$Dispose();
                                }
                            }
                        }
                    }
                    if (this.secs > 5) {
                        this.secs = 0;
                    }
                    this.secs = (this.secs + 1) | 0;
                    if (Bridge.referenceEquals(this.world_name, "")) {
                        this.spriteBatch.DrawString(this.spriteFont, "World Name...", new Microsoft.Xna.Framework.Vector2.$ctor2(345, 260), Microsoft.Xna.Framework.Color.LightGray.$clone());
                    } else {
                        this.spriteBatch.DrawString(this.spriteFont, this.world_name, new Microsoft.Xna.Framework.Vector2.$ctor2(345, 260), Microsoft.Xna.Framework.Color.Black.$clone());
                    }
                    this.spriteBatch.DrawString(this.spriteFont, "What's the name of your world?", new Microsoft.Xna.Framework.Vector2.$ctor2(345, 225), Microsoft.Xna.Framework.Color.White.$clone());
                    this.spriteBatch.End();
                } else if (this.asking_name) {
                    var state = Microsoft.Xna.Framework.Input.Keyboard.GetState();
                    this.GraphicsDevice.Clear(Microsoft.Xna.Framework.Color.Red.$clone());
                    this.spriteBatch.Begin();
                    this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(329, 259, 152, 27), Microsoft.Xna.Framework.Color.Black.$clone());
                    this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(330, 260, 150, 25), Microsoft.Xna.Framework.Color.White.$clone());
                    var n1 = 0;
                    if (this.secs === 5) {
                        this.secs = 0;
                        if (this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.Back], Microsoft.Xna.Framework.Input.Keys))) {
                            if (System.Linq.Enumerable.from(this.name, System.Char).count() === 0) {

                            } else {
                                this.name = System.String.remove(this.name, ((System.Linq.Enumerable.from(this.name, System.Char).count() - 1) | 0));
                            }
                        }
                        if (this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.Enter], Microsoft.Xna.Framework.Input.Keys)) && this.CanPerformAction()) {
                            this.asking_name = false;
                        }
                        if (this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.Escape], Microsoft.Xna.Framework.Input.Keys))) {
                            this.Close();
                        }
                        if (this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.LeftControl, Microsoft.Xna.Framework.Input.Keys.V], Microsoft.Xna.Framework.Input.Keys)) || this.BeingPressed(System.Array.init([Microsoft.Xna.Framework.Input.Keys.RightControl, Microsoft.Xna.Framework.Input.Keys.V], Microsoft.Xna.Framework.Input.Keys))) {
                            navigator.clipboard.readText().then(Bridge.fn.bind(this, $asm.$.Bouncy_Ball.Game1.f3));
                        }
                        $t7 = Bridge.getEnumerator(this.keys.Values);
                        try {
                            while ($t7.moveNext()) {
                                var k1 = $t7.Current;
                                if (this.BeingPressed(k1)) {
                                    if ((((Bouncy_Ball.Game1.GetKeyState(20)) & 65535) & 65535) !== 0) {
                                        this.name = (this.name || "") + String.fromCharCode((String.fromCharCode(($t8 = System.Char, System.Linq.Enumerable.from(this.keys.Keys, $t8).toList($t8)).getItem(n1)).toUpperCase().charCodeAt(0)));
                                    } else {
                                        this.name = (this.name || "") + String.fromCharCode(($t9 = System.Char, System.Linq.Enumerable.from(this.keys.Keys, $t9).toList($t9)).getItem(n1));
                                    }
                                }
                                n1 = (n1 + 1) | 0;
                            }
                        } finally {
                            if (Bridge.is($t7, System.IDisposable)) {
                                $t7.System$IDisposable$Dispose();
                            }
                        }
                    }
                    if (Bridge.referenceEquals(this.name, "")) {
                        this.spriteBatch.DrawString(this.spriteFont, "Name...", new Microsoft.Xna.Framework.Vector2.$ctor2(345, 260), Microsoft.Xna.Framework.Color.LightGray.$clone());
                    } else {
                        this.spriteBatch.DrawString(this.spriteFont, this.name, new Microsoft.Xna.Framework.Vector2.$ctor2(345, 260), Microsoft.Xna.Framework.Color.Black.$clone());
                    }
                    this.spriteBatch.DrawString(this.spriteFont, "What's your name?", new Microsoft.Xna.Framework.Vector2.$ctor2(345, 225), Microsoft.Xna.Framework.Color.White.$clone());
                    this.spriteBatch.End();
                    this.secs = (this.secs + 1) | 0;
                } else if (!Bridge.referenceEquals(this.saved_game_code, this.saved_game_destnation)) {
                    this.GraphicsDevice.Clear(Microsoft.Xna.Framework.Color.Blue.$clone());
                    if (this.from_saved_game_code) {
                        Bouncy_Ball.Storage.WriteAllText((this.saved_game_destnation || "") + "/world_name.txt", this.world_name);
                        this.saved_game_destnation = this.saved_game_code;
                        this.looking_at_saved_games = true;
                        this.from_saved_game_code = false;
                        this.world_name = "";
                        this.saved_games = Bouncy_Ball.Storage.GetDirectories("");
                        var n2 = 0;
                        this.names = System.Array.init(this.saved_games.length, null, System.String);
                        this.world_names = System.Array.init(this.saved_games.length, null, System.String);
                        $t10 = Bridge.getEnumerator(this.saved_games);
                        try {
                            while ($t10.moveNext()) {
                                var s = $t10.Current;
                                try {
                                    var lines = Bouncy_Ball.Storage.ReadAllLines((s || "") + "/name.txt");
                                    this.names[System.Array.index(n2, this.names)] = lines.length > 0 ? lines[System.Array.index(0, lines)] : "";
                                } catch ($e3) {
                                    $e3 = System.Exception.create($e3);
                                    this.names[System.Array.index(n2, this.names)] = "";
                                }
                                try {
                                    var lines1 = Bouncy_Ball.Storage.ReadAllLines((s || "") + "/world_name.txt");
                                    this.world_names[System.Array.index(n2, this.world_names)] = lines1.length > 0 ? lines1[System.Array.index(0, lines1)] : "";
                                } catch ($e4) {
                                    $e4 = System.Exception.create($e4);
                                    this.names[System.Array.index(n2, this.names)] = "";
                                }
                                n2 = (n2 + 1) | 0;
                            }
                        } finally {
                            if (Bridge.is($t10, System.IDisposable)) {
                                $t10.System$IDisposable$Dispose();
                            }
                        }
                    } else {
                        this.spriteBatch.Begin();
                        if (this.secs % 5 === 0) {
                            if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Up)) {
                                var button = new Bouncy_Ball.Buttons_Load_File_Right_Click();
                                if (Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 85) {
                                    button = Bouncy_Ball.Buttons_Load_File_Right_Click.Play;
                                } else {
                                    if (Microsoft.Xna.Framework.Input.Mouse.GetState().Y >= 100 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 134) {
                                        button = Bouncy_Ball.Buttons_Load_File_Right_Click.Delete;
                                    } else {
                                        button = Bouncy_Ball.Buttons_Load_File_Right_Click.Rename;
                                    }
                                }
                                try {
                                    Microsoft.Xna.Framework.Input.Mouse.SetPosition(Bridge.Int.clip32(this.buttons_right_click_load_file[System.Array.index(((button - 1) | 0), this.buttons_right_click_load_file)].X), Bridge.Int.clip32(this.buttons_right_click_load_file[System.Array.index(((button - 1) | 0), this.buttons_right_click_load_file)].Y));
                                } catch ($e5) {
                                    $e5 = System.Exception.create($e5);
                                    Microsoft.Xna.Framework.Input.Mouse.SetPosition(Bridge.Int.clip32(System.Linq.Enumerable.from(this.buttons_right_click_load_file, Microsoft.Xna.Framework.Vector2).last().X), Bridge.Int.clip32(System.Linq.Enumerable.from(this.buttons_right_click_load_file, Microsoft.Xna.Framework.Vector2).last().Y));
                                }
                            } else if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Down)) {
                                var button1 = new Bouncy_Ball.Buttons_Load_File_Right_Click();
                                if (Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 85) {
                                    button1 = Bouncy_Ball.Buttons_Load_File_Right_Click.Play;
                                } else {
                                    if (Microsoft.Xna.Framework.Input.Mouse.GetState().Y >= 100 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 134) {
                                        button1 = Bouncy_Ball.Buttons_Load_File_Right_Click.Delete;
                                    } else {
                                        button1 = Bouncy_Ball.Buttons_Load_File_Right_Click.Rename;
                                    }
                                }
                                try {
                                    Microsoft.Xna.Framework.Input.Mouse.SetPosition(Bridge.Int.clip32(this.buttons_right_click_load_file[System.Array.index(((button1 + 1) | 0), this.buttons_right_click_load_file)].X), Bridge.Int.clip32(this.buttons_right_click_load_file[System.Array.index(((button1 + 1) | 0), this.buttons_right_click_load_file)].Y));
                                } catch ($e6) {
                                    $e6 = System.Exception.create($e6);
                                    Microsoft.Xna.Framework.Input.Mouse.SetPosition(Bridge.Int.clip32(this.buttons_right_click_load_file[System.Array.index(0, this.buttons_right_click_load_file)].X), Bridge.Int.clip32(this.buttons_right_click_load_file[System.Array.index(0, this.buttons_right_click_load_file)].Y));
                                }
                            }
                        }

                        this.secs = (this.secs + 1) | 0;
                        if (Microsoft.Xna.Framework.Input.Mouse.GetState().X >= 35 && Microsoft.Xna.Framework.Input.Mouse.GetState().X <= 150 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 85) {
                            this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(49, 49, 102, 37), Microsoft.Xna.Framework.Color.Black.$clone());
                            this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(50, 50, 100, 35), new Microsoft.Xna.Framework.Color.$ctor6(234, 241, 248));
                            if ((Microsoft.Xna.Framework.Input.Mouse.GetState().LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) && this.CanPerformAction()) {
                                this.Load(this.saved_game_destnation);
                                this.saved_game_destnation = this.saved_game_code;
                                return;
                            }
                        }
                        this.spriteBatch.DrawString(this.spriteFont, "Play", new Microsoft.Xna.Framework.Vector2.$ctor2(62, 57), Microsoft.Xna.Framework.Color.Black.$clone());
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.E) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Escape)) {
                            this.looking_at_saved_games = true;
                            this.saved_game_destnation = this.saved_game_code;
                        }
                        //next button load saved saved game
                        if (Microsoft.Xna.Framework.Input.Mouse.GetState().X >= 35 && Microsoft.Xna.Framework.Input.Mouse.GetState().X <= 250 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y >= 100 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 134) {
                            this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(49, 99, 102, 37), Microsoft.Xna.Framework.Color.Black.$clone());
                            this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(50, 100, 100, 35), new Microsoft.Xna.Framework.Color.$ctor6(234, 241, 248));
                            if (Microsoft.Xna.Framework.Input.Mouse.GetState().LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                                Bouncy_Ball.Storage.DeleteDirectory(this.saved_game_destnation);
                                this.saved_game_destnation = this.saved_game_code;
                            }
                        }
                        this.spriteBatch.DrawString(this.spriteFont, "Delete", new Microsoft.Xna.Framework.Vector2.$ctor2(62, 107), Microsoft.Xna.Framework.Color.Black.$clone());
                        if (Microsoft.Xna.Framework.Input.Mouse.GetState().X >= 35 && Microsoft.Xna.Framework.Input.Mouse.GetState().X <= 150 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y >= 135 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 185) {
                            this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(49, 149, 102, 37), Microsoft.Xna.Framework.Color.Black.$clone());
                            this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(50, 150, 100, 35), new Microsoft.Xna.Framework.Color.$ctor6(234, 241, 248));
                            if (Microsoft.Xna.Framework.Input.Mouse.GetState().LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                                this.asking_world_name = true;
                                this.from_saved_game_code = true;

                            }
                        }
                        this.spriteBatch.DrawString(this.spriteFont, "Rename", new Microsoft.Xna.Framework.Vector2.$ctor2(62, 157), Microsoft.Xna.Framework.Color.Black.$clone());
                        this.spriteBatch.End();
                    }
                } else if (this.looking_at_saved_games) {

                    if ((Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Escape) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.E)) && this.CanPerformAction()) {
                        this.looking_at_saved_games = false;
                    }
                    var keys = Microsoft.Xna.Framework.Input.Keyboard.GetState();
                    var mouse = Microsoft.Xna.Framework.Input.Mouse.GetState();
                    var n3 = 0;
                    var y1 = 0;
                    $t11 = Bridge.getEnumerator(this.saved_games);
                    try {
                        while ($t11.moveNext()) {
                            var s1 = $t11.Current;
                            this.spriteBatch.Begin();
                            this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(0, Bridge.Int.mul(y1, 15), 401, 16), Microsoft.Xna.Framework.Color.Black.$clone());
                            if (mouse.Y >= Bridge.Int.mul(y1, 15) && mouse.Y <= ((((Bridge.Int.mul(y1, 15)) + 15) | 0))) {
                                if (mouse.LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed || keys.IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                                    this.Load(s1);
                                    if (this.graphics.IsFullScreen) {
                                        this.graphics.ToggleFullScreen();
                                    }
                                    break;
                                }
                                if (mouse.RightButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed) {
                                    this.looking_at_saved_games = false;
                                    this.saved_game_destnation = s1;
                                }
                                this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(0, Bridge.Int.mul(y1, 15), 400, 15), Microsoft.Xna.Framework.Color.Orange.$clone());
                            } else {
                                this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(0, Bridge.Int.mul(y1, 15), 400, 15), Microsoft.Xna.Framework.Color.DarkOrange.$clone());
                            }
                            this.spriteBatch.DrawString(this.spriteFont, (this.world_names[System.Array.index(n3, this.world_names)] || "") + " by " + (this.names[System.Array.index(n3, this.names)] || ""), new Microsoft.Xna.Framework.Vector2.$ctor2(0, Bridge.Int.mul(y1, 15)), Microsoft.Xna.Framework.Color.Black.$clone());

                            n3 = (n3 + 1) | 0;
                            y1 = (y1 + 1) | 0;
                            this.spriteBatch.End();
                        }
                    } finally {
                        if (Bridge.is($t11, System.IDisposable)) {
                            $t11.System$IDisposable$Dispose();
                        }
                    }
                } else {
                    this.GraphicsDevice.Clear(Microsoft.Xna.Framework.Color.Blue.$clone());
                    this.spriteBatch.Begin();
                    if (this.secs % 5 === 0) {
                        if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Up)) {
                            var button2 = new Bouncy_Ball.Button();
                            if (Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 85) {
                                button2 = Bouncy_Ball.Button.NewGame;
                            } else {
                                if (Microsoft.Xna.Framework.Input.Mouse.GetState().Y >= 100 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 134) {
                                    button2 = Bouncy_Ball.Button.LoadGame;
                                } else {
                                    button2 = Bouncy_Ball.Button.Exit;
                                }
                            }
                            try {
                                Microsoft.Xna.Framework.Input.Mouse.SetPosition(Bridge.Int.clip32(this.buttons[System.Array.index(((button2 - 1) | 0), this.buttons)].X), Bridge.Int.clip32(this.buttons[System.Array.index(((button2 - 1) | 0), this.buttons)].Y));
                            } catch ($e7) {
                                $e7 = System.Exception.create($e7);
                                Microsoft.Xna.Framework.Input.Mouse.SetPosition(Bridge.Int.clip32(System.Linq.Enumerable.from(this.buttons, Microsoft.Xna.Framework.Vector2).last().X), Bridge.Int.clip32(System.Linq.Enumerable.from(this.buttons, Microsoft.Xna.Framework.Vector2).last().Y));
                            }
                        } else if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Down)) {
                            var button3 = new Bouncy_Ball.Button();
                            if (Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 85) {
                                button3 = Bouncy_Ball.Button.NewGame;
                            } else {
                                if (Microsoft.Xna.Framework.Input.Mouse.GetState().Y >= 100 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 134) {
                                    button3 = Bouncy_Ball.Button.LoadGame;
                                } else {
                                    button3 = Bouncy_Ball.Button.Exit;
                                }
                            }
                            try {
                                Microsoft.Xna.Framework.Input.Mouse.SetPosition(Bridge.Int.clip32(this.buttons[System.Array.index(((button3 + 1) | 0), this.buttons)].X), Bridge.Int.clip32(this.buttons[System.Array.index(((button3 + 1) | 0), this.buttons)].Y));
                            } catch ($e8) {
                                $e8 = System.Exception.create($e8);
                                Microsoft.Xna.Framework.Input.Mouse.SetPosition(Bridge.Int.clip32(this.buttons[System.Array.index(0, this.buttons)].X), Bridge.Int.clip32(this.buttons[System.Array.index(0, this.buttons)].Y));
                            }
                        }
                    }
                    if (Microsoft.Xna.Framework.Input.Mouse.GetState().X >= 35 && Microsoft.Xna.Framework.Input.Mouse.GetState().X <= 150 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 85) {
                        this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(49, 49, 102, 37), Microsoft.Xna.Framework.Color.Black.$clone());
                        this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(50, 50, 100, 35), new Microsoft.Xna.Framework.Color.$ctor6(234, 241, 248));
                        if (Microsoft.Xna.Framework.Input.Mouse.GetState().LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                            this.asking_world_name = true;
                            this.asking_name = false;
                            this.texture = this.ball;
                            this.sound_playing_temp = true;
                        }
                    }
                    this.spriteBatch.DrawString(this.spriteFont, "New Game", new Microsoft.Xna.Framework.Vector2.$ctor2(62, 57), Microsoft.Xna.Framework.Color.Black.$clone());
                    if (Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.E) || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Escape)) {
                        this.Close();
                    }
                    //next button load saved saved game
                    if (Microsoft.Xna.Framework.Input.Mouse.GetState().X >= 35 && Microsoft.Xna.Framework.Input.Mouse.GetState().X <= 250 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y >= 100 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 134) {
                        this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(49, 99, 102, 37), Microsoft.Xna.Framework.Color.Black.$clone());
                        this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(50, 100, 100, 35), new Microsoft.Xna.Framework.Color.$ctor6(234, 241, 248));
                        if (Microsoft.Xna.Framework.Input.Mouse.GetState().LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                            this.looking_at_saved_games = true;
                            this.asking_name = false;
                            this.asking_world_name = false;
                            this.saved_games = Bouncy_Ball.Storage.GetDirectories("");
                            var n4 = 0;
                            this.names = System.Array.init(this.saved_games.length, null, System.String);
                            this.world_names = System.Array.init(this.saved_games.length, null, System.String);
                            $t12 = Bridge.getEnumerator(this.saved_games);
                            try {
                                while ($t12.moveNext()) {
                                    var s2 = $t12.Current;
                                    try {
                                        var lines2 = Bouncy_Ball.Storage.ReadAllLines((s2 || "") + "/name.txt");
                                        this.names[System.Array.index(n4, this.names)] = lines2.length > 0 ? lines2[System.Array.index(0, lines2)] : "";
                                    } catch ($e9) {
                                        $e9 = System.Exception.create($e9);
                                        this.names[System.Array.index(n4, this.names)] = "";
                                    }
                                    try {
                                        var lines3 = Bouncy_Ball.Storage.ReadAllLines((s2 || "") + "/world_name.txt");
                                        this.world_names[System.Array.index(n4, this.world_names)] = lines3.length > 0 ? lines3[System.Array.index(0, lines3)] : "";
                                    } catch ($e10) {
                                        $e10 = System.Exception.create($e10);
                                        this.names[System.Array.index(n4, this.names)] = "";
                                    }
                                    n4 = (n4 + 1) | 0;
                                }
                            } finally {
                                if (Bridge.is($t12, System.IDisposable)) {
                                    $t12.System$IDisposable$Dispose();
                                }
                            }
                            this.asking_name = false;
                        }
                    }
                    this.spriteBatch.DrawString(this.spriteFont, "Load Game", new Microsoft.Xna.Framework.Vector2.$ctor2(62, 107), Microsoft.Xna.Framework.Color.Black.$clone());
                    // new button exit
                    if (Microsoft.Xna.Framework.Input.Mouse.GetState().X >= 35 && Microsoft.Xna.Framework.Input.Mouse.GetState().X <= 150 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y >= 135 && Microsoft.Xna.Framework.Input.Mouse.GetState().Y <= 185) {
                        this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(49, 149, 102, 37), Microsoft.Xna.Framework.Color.Black.$clone());
                        this.spriteBatch.Draw(this.button, new Microsoft.Xna.Framework.Rectangle.$ctor2(50, 150, 100, 35), new Microsoft.Xna.Framework.Color.$ctor6(234, 241, 248));
                        if (Microsoft.Xna.Framework.Input.Mouse.GetState().LeftButton === Microsoft.Xna.Framework.Input.ButtonState.Pressed || Microsoft.Xna.Framework.Input.Keyboard.GetState().IsKeyDown(Microsoft.Xna.Framework.Input.Keys.Enter)) {
                            this.Close();
                        }
                    }
                    this.spriteBatch.DrawString(this.spriteFont, "Quit", new Microsoft.Xna.Framework.Vector2.$ctor2(62, 157), Microsoft.Xna.Framework.Color.Black.$clone());
                    /* // new button play music
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
                    this.spriteBatch.End();
                    this.secs = (this.secs + 1) | 0;
                }
                Microsoft.Xna.Framework.Game.prototype.Draw.call(this, gameTime);
            }
        }
    });

    Bridge.ns("Bouncy_Ball.Game1", $asm.$);

    Bridge.apply($asm.$.Bouncy_Ball.Game1, {
        f1: function (_o1) {
            _o1.add(new Microsoft.Xna.Framework.Vector2.$ctor2(this.x, this.y));
            return _o1;
        },
        f2: function (text) {
            this.world_name = text;
        },
        f3: function (text) {
            this.name = (this.name || "") + (text || "");
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

    /**
     * localStorage wrapper to replace System.IO file operations
     *
     * @static
     * @abstract
     * @public
     * @class Bouncy_Ball.Storage
     */
    Bridge.define("Bouncy_Ball.Storage", {
        statics: {
            fields: {
                PREFIX: null,
                SAVES_KEY: null,
                SAVINGS_KEY: null
            },
            ctors: {
                init: function () {
                    this.PREFIX = "BouncyBall_";
                    this.SAVES_KEY = "BouncyBall_SavesList";
                    this.SAVINGS_KEY = "BouncyBall_Savings";
                }
            },
            methods: {
                Initialize: function () {
                    // Initialize savings counter if not present
                    if (window.localStorage.getItem(Bouncy_Ball.Storage.SAVINGS_KEY) == null) {
                        window.localStorage.setItem(Bouncy_Ball.Storage.SAVINGS_KEY, "0");
                    }
                },
                DirectoryExists: function (path) {
                    // Check if save exists
                    var key = Bouncy_Ball.Storage.PathToKey(path);
                    return window.localStorage.getItem((key || "") + "_exists") != null;
                },
                CreateDirectory: function (path) {
                    var key = Bouncy_Ball.Storage.PathToKey(path);
                    window.localStorage.setItem((key || "") + "_exists", "true");

                    // Add to saves list
                    var saves = Bouncy_Ball.Storage.GetSavesList();
                    if (!saves.contains(key)) {
                        saves.add(key);
                        Bouncy_Ball.Storage.SaveSavesList(saves);
                    }
                },
                DeleteDirectory: function (path) {
                    var $t;
                    var key = Bouncy_Ball.Storage.PathToKey(path);
                    // Remove all items with this prefix
                    var keysToRemove = new (System.Collections.Generic.List$1(System.String)).ctor();
                    for (var i = 0; i < window.localStorage.length; i = (i + 1) | 0) {
                        var k = window.localStorage.key(i);
                        if (k != null && System.String.startsWith(k, key)) {
                            keysToRemove.add(k);
                        }
                    }
                    $t = Bridge.getEnumerator(keysToRemove);
                    try {
                        while ($t.moveNext()) {
                            var k1 = $t.Current;
                            window.localStorage.removeItem(k1);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    // Remove from saves list
                    var saves = Bouncy_Ball.Storage.GetSavesList();
                    saves.remove(key);
                    Bouncy_Ball.Storage.SaveSavesList(saves);
                },
                FileExists: function (path) {
                    var key = Bouncy_Ball.Storage.PathToKey(path);
                    return window.localStorage.getItem(key) != null;
                },
                ReadAllText: function (path) {
                    var $t;
                    var key = Bouncy_Ball.Storage.PathToKey(path);
                    return ($t = Bridge.cast(window.localStorage.getItem(key), System.String), $t != null ? $t : "");
                },
                WriteAllText: function (path, content) {
                    var key = Bouncy_Ball.Storage.PathToKey(path);
                    window.localStorage.setItem(key, content);
                },
                ReadAllLines: function (path) {
                    var content = Bouncy_Ball.Storage.ReadAllText(path);
                    if (System.String.isNullOrEmpty(content)) {
                        return System.Array.init(0, null, System.String);
                    }
                    return System.String.split(content, [10].map(function (i) {{ return String.fromCharCode(i); }}));
                },
                WriteAllLines: function (path, lines) {
                    Bouncy_Ball.Storage.WriteAllText(path, (lines).join("\n"));
                },
                GetDirectories: function (basePath) {
                    var saves = Bouncy_Ball.Storage.GetSavesList();
                    return saves.ToArray();
                },
                GetSavingsCount: function () {
                    var val = Bridge.cast(window.localStorage.getItem(Bouncy_Ball.Storage.SAVINGS_KEY), System.String);
                    return val != null ? System.Int32.parse(val) : 0;
                },
                SetSavingsCount: function (count) {
                    window.localStorage.setItem(Bouncy_Ball.Storage.SAVINGS_KEY, Bridge.toString(count));
                },
                IncrementSavingsCount: function () {
                    Bouncy_Ball.Storage.SetSavingsCount(((Bouncy_Ball.Storage.GetSavingsCount() + 1) | 0));
                },
                PathToKey: function (path) {
                    // Convert Windows-style paths to storage keys
                    // Remove the C:/Users/.../AppData/Local/Michael/Bouncy Ball/ prefix
                    var key = path;
                    var idx = System.String.indexOf(key, "Bouncy Ball/");
                    if (idx >= 0) {
                        key = key.substr(((idx + ("Bouncy Ball/").length) | 0));
                    }
                    // Also handle just the save name
                    key = System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(key, "/", "_"), "\\", "_"), ".txt", ""), ".png", "_img");
                    return (Bouncy_Ball.Storage.PREFIX || "") + (key || "");
                },
                GetSavesList: function () {
                    var $t;
                    var json = Bridge.cast(window.localStorage.getItem(Bouncy_Ball.Storage.SAVES_KEY), System.String);
                    if (System.String.isNullOrEmpty(json)) {
                        return new (System.Collections.Generic.List$1(System.String)).ctor();
                    }

                    // Simple parsing - just split by comma
                    var list = new (System.Collections.Generic.List$1(System.String)).ctor();
                    if (!System.String.isNullOrEmpty(json)) {
                        $t = Bridge.getEnumerator(System.String.split(json, [44].map(function (i) {{ return String.fromCharCode(i); }})));
                        try {
                            while ($t.moveNext()) {
                                var item = $t.Current;
                                if (!System.String.isNullOrEmpty(item)) {
                                    list.add(item);
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    return list;
                },
                SaveSavesList: function (saves) {
                    window.localStorage.setItem(Bouncy_Ball.Storage.SAVES_KEY, Bridge.toArray(saves).join(","));
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJCb3VuY3lCYWxsLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJHYW1lMS5jcyIsIlByb2dyYW0uY3MiLCJTdG9yYWdlLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBdUt3Q0E7b0JBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQXZJZkEsS0FBSUE7K0JBQ0RBLEtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkEwVW5CQSxtQkFBZ0JBLElBQUlBLG9EQUF1QkEsSUFBSUEsc0RBQXVCQSxJQUFJQTtxREFDcERBLG1CQUFnQkEsSUFBSUEsb0RBQXVCQSxJQUFJQSxzREFBdUJBLElBQUlBOzs7O3NDQUs3RkE7aUNBRUxBO3dDQUNPQTs4QkFFVEEsSUFBSUE7Ozs7Ozs7Ozs7O2dCQTNVaEJBLGdCQUFXQSxJQUFJQSw4Q0FBc0JBO2dCQUNyQ0E7Ozs7OztnQkFJQUEsZ0JBQWdCQTtnQkFDaEJBLEtBQUtBLFdBQVdBLElBQUlBLFdBQVdBO29CQUUzQkEsY0FBU0Esb0JBQWFBLE1BQThCQSx5Q0FBTUEsd0NBQVdBLGlDQUFLQSxtQkFBYUEsOENBQWdCQSxjQUE4QkEsbUZBQVFBLDRDQUFhQTtvQkFDMUpBLGlCQUFZQSxtQkFBYUEsK0NBQWlCQSxjQUE4QkEsbUZBQVFBLDRDQUFhQSx1RUFBU0Esb0JBQWFBLE9BQThCQSx5Q0FBTUEsMENBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBWXRLQSw2QkFBd0JBO2dCQUN4QkEsbUJBQWNBO2dCQUNkQSw4QkFBeUJBO2dCQUN6QkEsa0JBQWNBLG1CQUFhQTtnQkFDM0JBLGtCQUFjQSxtQkFB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QUlBLDRCQUFxQkE7d0JBQ3JCQSxPQUFPQSxLQUFJQTs7OztvQkFHZkEsV0FBV0EsS0FBSUE7b0JBQ2ZBLElBQUlBLENBQUNBLDRCQUFxQkE7d0JBRXRCQSwwQkFBcUJBOzs7O2dDQUVqQkEsSUFBSUEsQ0FBQ0EsNEJBQXFCQTtvQ0FDdEJBLFNBQVNBOzs7Ozs7Ozs7b0JBR3JCQSxPQUFPQTs7eUNBR3VCQTtvQkFFOUJBLDRCQUE0QkEsK0JBQVdBLGVBQWlCQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgTWljcm9zb2Z0LlhuYS5GcmFtZXdvcms7XHJcbnVzaW5nIE1pY3Jvc29mdC5YbmEuRnJhbWV3b3JrLkF1ZGlvO1xyXG51c2luZyBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5Db250ZW50O1xyXG51c2luZyBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5HcmFwaGljcztcclxudXNpbmcgTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuSW5wdXQ7XHJcbnVzaW5nIEJvdW5jeV9CYWxsO1xyXG4vLyBSZW1vdmVkOiBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5NZWRpYSwgU3lzdGVtLkRpYWdub3N0aWNzLCBTeXN0ZW0uTWVkaWEsIFN5c3RlbS5SdW50aW1lLkludGVyb3BTZXJ2aWNlc1xyXG5cclxubmFtZXNwYWNlIEJvdW5jeV9CYWxsXHJcbntcclxuICAgIGVudW0gQnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgTmV3R2FtZSxcclxuICAgICAgICBMb2FkR2FtZSxcclxuICAgICAgICBFeGl0XHJcbiAgICB9XHJcbiAgICBlbnVtIEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrXHJcbiAgICB7XHJcbiAgICAgICAgUGxheSxcclxuICAgICAgICBEZWxldGUsXHJcbiAgICAgICAgUmVuYW1lXHJcbiAgICB9XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gVGhpcyBpcyB0aGUgbWFpbiB0eXBlIGZvciB5b3VyIGdhbWVcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2xhc3MgR2FtZTEgOiBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5HYW1lXHJcbiAgICB7XHJcbiAgICAgICAgU3ByaXRlRm9udCBzcHJpdGVGb250O1xyXG4gICAgICAgIEdyYXBoaWNzRGV2aWNlTWFuYWdlciBncmFwaGljcztcclxuICAgICAgICBEaWN0aW9uYXJ5PGNoYXIsIEtleXNbXT4ga2V5cyA9IG5ldyBEaWN0aW9uYXJ5PGNoYXIsIEtleXNbXT4oMjYpO1xyXG4gICAgICAgIERpY3Rpb25hcnk8S2V5c1tdLCBjaGFyPiBjYXBpdGFsID0gbmV3IERpY3Rpb25hcnk8S2V5c1tdLCBjaGFyPigyNik7XHJcbiAgICAgICAgU3ByaXRlQmF0Y2ggc3ByaXRlQmF0Y2g7XHJcbiAgICAgICAgVGV4dHVyZTJEIHRleHR1cmU7XHJcbiAgICAgICAgVGV4dHVyZTJEIGJ1dHRvbjtcclxuICAgICAgICBzdHJpbmcgd29ybGRfbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgYm9vbCBhc2tpbmdfd29ybGRfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgIFNvdW5kRWZmZWN0IEdhbWVfT3ZlcjtcclxuICAgICAgICBTb3VuZEVmZmVjdCBCb3VuY2U7XHJcbiAgICAgICAgcHVibGljIEdhbWUxKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzRGV2aWNlTWFuYWdlcih0aGlzKTtcclxuICAgICAgICAgICAgQ29udGVudC5Sb290RGlyZWN0b3J5ID0gXCJDb250ZW50XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENhcGl0aWxpemVLZXlzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCBrZXlzY291bnQgPSBrZXlzLkNvdW50O1xyXG4gICAgICAgICAgICBmb3IgKGludCBuID0gMDsgbiA8IGtleXNjb3VudDsgbisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLkFkZChDaGFyLlRvVXBwZXIoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8Y2hhcj4oa2V5cy5LZXlzKVtuXSksIG5ldyBLZXlzW10geyBLZXlzLkxlZnRTaGlmdCwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8S2V5c1tdPihrZXlzLlZhbHVlcylbbl1bMF0gfSk7XHJcbiAgICAgICAgICAgICAgICBjYXBpdGFsLkFkZChuZXcgS2V5c1tdIHsgS2V5cy5SaWdodFNoaWZ0LCBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlRvTGlzdDxLZXlzW10+KGtleXMuVmFsdWVzKVtuXVswXSB9LCBDaGFyLlRvVXBwZXIoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8Y2hhcj4oa2V5cy5LZXlzKVtuXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQWxsb3dzIHRoZSBnYW1lIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uIGl0IG5lZWRzIHRvIGJlZm9yZSBzdGFydGluZyB0byBydW4uXHJcbiAgICAgICAgLy8vIFRoaXMgaXMgd2hlcmUgaXQgY2FuIHF1ZXJ5IGZvciBhbnkgcmVxdWlyZWQgc2VydmljZXMgYW5kICggYW55IG5vbi1ncmFwaGljXHJcbiAgICAgICAgLy8vIHJlbGF0ZWQgY29udGVudC4gIENhbGxpbmcgYmFzZS5Jbml0aWFsaXplIHdpbGwgZW51bWVyYXRlIHRocm91Z2ggYW55IGNvbXBvbmVudHNcclxuICAgICAgICAvLy8gYW5kIGluaXRpYWxpemUgdGhlbSBhcyB3ZWxsLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdGlhbGl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBBZGQgeW91ciBpbml0aWFsaXphdGlvbiBsb2dpYyBoZXJlXHJcbiAgICAgICAgICAgIHNhdmVkX2dhbWVfZGVzdG5hdGlvbiA9IHNhdmVkX2dhbWVfY29kZTtcclxuICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBiYWxsQ29sb3I7XHJcbiAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBtdWx0aXBsYXllckNvbG9yO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnYScsIG5ldyBLZXlzW10geyBLZXlzLkEgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdiJywgbmV3IEtleXNbXSB7IEtleXMuQiB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2MnLCBuZXcgS2V5c1tdIHsgS2V5cy5DIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnZCcsIG5ldyBLZXlzW10geyBLZXlzLkQgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdlJywgbmV3IEtleXNbXSB7IEtleXMuRSB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2YnLCBuZXcgS2V5c1tdIHsgS2V5cy5GIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnZycsIG5ldyBLZXlzW10geyBLZXlzLkcgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdoJywgbmV3IEtleXNbXSB7IEtleXMuSCB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2knLCBuZXcgS2V5c1tdIHsgS2V5cy5JIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnaicsIG5ldyBLZXlzW10geyBLZXlzLkogfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdrJywgbmV3IEtleXNbXSB7IEtleXMuSyB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2wnLCBuZXcgS2V5c1tdIHsgS2V5cy5MIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnbScsIG5ldyBLZXlzW10geyBLZXlzLk0gfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCduJywgbmV3IEtleXNbXSB7IEtleXMuTiB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ28nLCBuZXcgS2V5c1tdIHsgS2V5cy5PIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgncCcsIG5ldyBLZXlzW10geyBLZXlzLlAgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdxJywgbmV3IEtleXNbXSB7IEtleXMuUSB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3InLCBuZXcgS2V5c1tdIHsgS2V5cy5SIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgncycsIG5ldyBLZXlzW10geyBLZXlzLlMgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCd0JywgbmV3IEtleXNbXSB7IEtleXMuVCB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3UnLCBuZXcgS2V5c1tdIHsgS2V5cy5VIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgndicsIG5ldyBLZXlzW10geyBLZXlzLlYgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCd3JywgbmV3IEtleXNbXSB7IEtleXMuVyB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3gnLCBuZXcgS2V5c1tdIHsgS2V5cy5YIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgneScsIG5ldyBLZXlzW10geyBLZXlzLlkgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCd6JywgbmV3IEtleXNbXSB7IEtleXMuWiB9KTtcclxuICAgICAgICAgICAgLy9DYXBpdGlsaXplS2V5cygpO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnICcsIG5ldyBLZXlzW10geyBLZXlzLlNwYWNlIH0pO1xyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICBTdG9yYWdlLkluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgYmFzZS5Jbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIFN0YXJ0UGxheWluZyhHYW1lVGltZSBnYW1lVGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghQ2FuUGVyZm9ybUFjdGlvbigpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChzb3VuZF9wbGF5aW5nX3RlbXApXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgIHBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBTdG9wUGxheWluZyhHYW1lVGltZSBnYW1lVGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghQ2FuUGVyZm9ybUFjdGlvbigpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGluc3RhbmNlLlN0b3AoKTtcclxuICAgICAgICAgICAgcGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTb3VuZEVmZmVjdCBNdXNpYztcclxuICAgICAgICBTb3VuZEVmZmVjdEluc3RhbmNlIGluc3RhbmNlO1xyXG4gICAgICAgIFRleHR1cmUyRCBiYWxsO1xyXG4gICAgICAgIFRleHR1cmUyRCBibGFja19iYWxsO1xyXG4gICAgICAgIGJvb2wgc291bmRfcGxheWluZ190ZW1wO1xyXG4gICAgICAgIC8vIERlYm91bmNlIGhlbHBlciAtIHRyYWNrcyBsYXN0IGFjdGlvbiB0aW1lXHJcbiAgICAgICAgcHJpdmF0ZSBkb3VibGUgbGFzdEFjdGlvblRpbWUgPSAwO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBDYW5QZXJmb3JtQWN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRvdWJsZSBub3cgPSBCcmlkZ2UuSHRtbDUuV2luZG93LlBlcmZvcm1hbmNlLk5vdygpO1xyXG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdEFjdGlvblRpbWUgPiAyNTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhc3RBY3Rpb25UaW1lID0gbm93O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExvYWRDb250ZW50IHdpbGwgYmUgY2FsbGVkIG9uY2UgcGVyIGdhbWUgYW5kIGlzIHRoZSBwbGFjZSB0byBsb2FkXHJcbiAgICAgICAgLy8vIGFsbCBvZiB5b3VyIGNvbnRlbnQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBMb2FkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzcHJpdGVGb250ID0gQ29udGVudC5Mb2FkPFNwcml0ZUZvbnQ+KFwiQXJpYWxcIik7XHJcbiAgICAgICAgICAgIGJhbGwgPSBDb250ZW50LkxvYWQ8VGV4dHVyZTJEPihcImJhbGxcIik7XHJcbiAgICAgICAgICAgIGJsYWNrX2JhbGwgPSBDb250ZW50LkxvYWQ8VGV4dHVyZTJEPihcImJsYWNrIGJhbGxcIik7XHJcbiAgICAgICAgICAgIEdhbWVfT3ZlciA9IENvbnRlbnQuTG9hZDxTb3VuZEVmZmVjdD4oXCJSZWplY3QgMlwiKTtcclxuICAgICAgICAgICAgQm91bmNlID0gQ29udGVudC5Mb2FkPFNvdW5kRWZmZWN0PihcImJvdW5jZVwiKTtcclxuICAgICAgICAgICAgTXVzaWMgPSBDb250ZW50LkxvYWQ8U291bmRFZmZlY3Q+KFwib24gdGhlIGZsb29yXCIpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IE11c2ljLkNyZWF0ZUluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IENvbnRlbnQuTG9hZDxUZXh0dXJlMkQ+KFwiQnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgU3ByaXRlQmF0Y2gsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGRyYXcgdGV4dHVyZXMuXHJcbiAgICAgICAgICAgIHNwcml0ZUJhdGNoID0gbmV3IFNwcml0ZUJhdGNoKEdyYXBoaWNzRGV2aWNlKTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbmNlLklzTG9vcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Jc01vdXNlVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChFbnZpcm9ubWVudC5HZXRDb21tYW5kTGluZUFyZ3MoKS5MZW5ndGggPiAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWQoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5MYXN0PHN0cmluZz4oRW52aXJvbm1lbnQuR2V0Q29tbWFuZExpbmVBcmdzKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPOiB1c2UgdGhpcy5Db250ZW50IHRvIGxvYWQgeW91ciBnYW1lIGNvbnRlbnQgaGVyZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbGxJbXBvcnQgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyXHJcbiAgICAgICAgLy8gW0RsbEltcG9ydChcInVzZXIzMi5kbGxcIiwgQ2hhclNldCA9IENoYXJTZXQuQXV0bywgRXhhY3RTcGVsbGluZyA9IHRydWUsIENhbGxpbmdDb252ZW50aW9uID0gQ2FsbGluZ0NvbnZlbnRpb24uV2luYXBpKV1cclxuICAgICAgICAvLyBwdWJsaWMgc3RhdGljIGV4dGVybiBzaG9ydCBHZXRLZXlTdGF0ZShpbnQga2V5Q29kZSk7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzaG9ydCBHZXRLZXlTdGF0ZShpbnQga2V5Q29kZSkgeyByZXR1cm4gMDsgfSAvLyBTdHViXHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgQmVpbmdQcmVzc2VkKEtleXNbXSBrZXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib29sIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKEtleXMgayBpbiBrZXkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5VXAoaykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgU2F2ZVRvKHN0cmluZyBzYXZpbmdkaXJlY3RvcnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTdG9yYWdlLkNyZWF0ZURpcmVjdG9yeShzYXZpbmdkaXJlY3RvcnkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9QbGF5aW5nU291bmQudHh0XCIsIChpbnN0YW5jZS5TdGF0ZSA9PSBTb3VuZFN0YXRlLlBsYXlpbmcpLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9GdWxsU2NyZWVuLnR4dFwiLCBncmFwaGljcy5Jc0Z1bGxTY3JlZW4uVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2Rpc3RhbmNlLnR4dFwiLCBkaXN0YW5jZS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgLy8gU2tpcCB0ZXh0dXJlIHNhdmUgLSBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIsIHdpbGwgdXNlIGRlZmF1bHQgYmFsbFxyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9Nb3VzZU1vdmVCYXNlUGxheWVyLnR4dFwiLCBNb3VzZU1vdmVCYXNlUGxheWVyLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9Gb2xsb3dCYWNrcm91bmRDb2xvci50eHRcIiwgRm9sbG93QmFja2dyb3VuZENvbG9yLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9jbGVhci50eHRcIiwgY2xlYXIuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL211bHRpcGxheWVyY29udHJvbHNlbmFibGVkLnR4dFwiLCBtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvY29udHJvbHNlbmFibGVkLnR4dFwiLCBjb250cm9sc2VuYWJsZWQuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2VuYWJsZWQudHh0XCIsIGVuYWJsZWQuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL211bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllLnR4dFwiLCBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXIudHh0XCIsIG11bHRpcGxheWVyLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9tdWx0aXBsYXllcngudHh0XCIsIG11bHRpcGxheWVyeC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXJ5LnR4dFwiLCBtdWx0aXBsYXllcnkuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL25hbWUudHh0XCIsIG5hbWUpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi93b3JsZF9uYW1lLnR4dFwiLCB3b3JsZF9uYW1lKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXJ2eC50eHRcIiwgbXVsdGlwbGF5ZXJ2eC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZWRnZW9mc2NyZWVubG9zZS50eHRcIiwgZWRnZW9mc2NyZWVubG9zZS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvYm91bmN5LnR4dFwiLCBib3VuY3kuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL3gudHh0XCIsIHguVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL3kudHh0XCIsIHkuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL3Z4LnR4dFwiLCB2eC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvdnkudHh0XCIsIHZ5LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9DcHVfTXVsdGlwbGF5ZXIudHh0XCIsIENwdV9NdWx0aXBsYXllci5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvQ3B1X3Z4LnR4dFwiLCBDcHVfdnguVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL0NwdV92eS50eHRcIiwgQ3B1X3Z5LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9DcHVfeS50eHRcIiwgQ3B1X3kuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL0NwdV94LnR4dFwiLCBDcHVfeC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZHJhZy50eHRcIiwgeGRyYWcuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2FjY2VsLnR4dFwiLCBhY2NlbC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZ3Jhdml0eS50eHRcIiwgZ3Jhdml0eS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZ3Jhdml0eV9lZmZlY3QudHh0XCIsIGdyYXZpdHlfZWZmZWN0LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9ibHVlLnR4dFwiLCBibHVlLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9nYW1lX292ZXJyZWQudHh0XCIsIGdhbWVfb3ZlcmVkLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9TdG9wV2hlbk5vdE1vdmluZy50eHRcIiwgU3RvcFdoZW5Ob3RNb3ZpbmcuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL1VwZGF0ZUJhY2tncm91bmRDb2xvci50eHRcIiwgVXBkYXRlQmFja2dyb3VuZENvbG9yLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9NdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyLnR4dFwiLCBNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9hbHBoYS50eHRcIiwgYWxwaGEuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL0JhY2tyb3VuZENvbG9yLnR4dFwiLCBCYWNrcm91bmRDb2xvci5BICsgXCJcXG5cIiArIEJhY2tyb3VuZENvbG9yLkIgKyBcIlxcblwiICsgQmFja3JvdW5kQ29sb3IuRyArIFwiXFxuXCIgKyBCYWNrcm91bmRDb2xvci5SKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvYmFsbENvbG9yLnR4dFwiLCBiYWxsQ29sb3IuQSArIFwiXFxuXCIgKyBiYWxsQ29sb3IuQiArIFwiXFxuXCIgKyBiYWxsQ29sb3IuRyArIFwiXFxuXCIgKyBiYWxsQ29sb3IuUik7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2FjdHVhbENvbG9yLnR4dFwiLCBhY3R1YWxDb2xvci5BICsgXCJcXG5cIiArIGFjdHVhbENvbG9yLkIgKyBcIlxcblwiICsgYWN0dWFsQ29sb3IuRyArIFwiXFxuXCIgKyBhY3R1YWxDb2xvci5SKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXJDb2xvci50eHRcIiwgbXVsdGlwbGF5ZXJDb2xvci5BICsgXCJcXG5cIiArIG11bHRpcGxheWVyQ29sb3IuQiArIFwiXFxuXCIgKyBtdWx0aXBsYXllckNvbG9yLkcgKyBcIlxcblwiICsgbXVsdGlwbGF5ZXJDb2xvci5SKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvYWN0dWFsTXVsdGlwbGF5ZXJDb2xvci50eHRcIiwgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvci5BICsgXCJcXG5cIiArIGFjdHVhbE11bHRpcGxheWVyQ29sb3IuQiArIFwiXFxuXCIgKyBhY3R1YWxNdWx0aXBsYXllckNvbG9yLkcgKyBcIlxcblwiICsgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvci5SKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5JbmNyZW1lbnRTYXZpbmdzQ291bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgTG9hZChzdHJpbmcgcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgTW91c2VNb3ZlQmFzZVBsYXllciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL01vdXNlTW92ZUJhc2VQbGF5ZXIudHh0XCIpKTtcclxuICAgICAgICAgICAgc291bmRfcGxheWluZ190ZW1wID0gU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvUGxheWluZ1NvdW5kLnR4dFwiKSA9PSBcIlRydWVcIjtcclxuICAgICAgICAgICAgZnVsbF9zY3JlZW5fdGVtcCA9IFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0Z1bGxTY3JlZW4udHh0XCIpID09IFwiVHJ1ZVwiO1xyXG4gICAgICAgICAgICBpZiAoIVN0b3JhZ2UuRmlsZUV4aXN0cyhzICsgXCIvZGlzdGFuY2UudHh0XCIpKVxyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQocyArIFwiL2Rpc3RhbmNlLnR4dFwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgIC8vIFRleHR1cmUgbG9hZGluZyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIgLSB1c2UgZGVmYXVsdCBiYWxsXHJcbiAgICAgICAgICAgIHRleHR1cmUgPSBiYWxsO1xyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2Rpc3RhbmNlLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIEZvbGxvd0JhY2tncm91bmRDb2xvciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0ZvbGxvd0JhY2tyb3VuZENvbG9yLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGNsZWFyID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvY2xlYXIudHh0XCIpKTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZC50eHRcIikpO1xyXG4gICAgICAgICAgICBjb250cm9sc2VuYWJsZWQgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9jb250cm9sc2VuYWJsZWQudHh0XCIpKTtcclxuICAgICAgICAgICAgZW5hYmxlZCA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2VuYWJsZWQudHh0XCIpKTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZS50eHRcIikpO1xyXG4gICAgICAgICAgICBtdWx0aXBsYXllciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL211bHRpcGxheWVyLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL211bHRpcGxheWVyeC50eHRcIikpO1xyXG4gICAgICAgICAgICBtdWx0aXBsYXllcnkgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9tdWx0aXBsYXllcnkudHh0XCIpKTtcclxuICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvbXVsdGlwbGF5ZXJ2eC50eHRcIikpO1xyXG4gICAgICAgICAgICBlZGdlb2ZzY3JlZW5sb3NlID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvZWRnZW9mc2NyZWVubG9zZS50eHRcIikpO1xyXG4gICAgICAgICAgICBib3VuY3kgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9ib3VuY3kudHh0XCIpKTtcclxuICAgICAgICAgICAgeCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL3gudHh0XCIpKTtcclxuICAgICAgICAgICAgdGhpcy55ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIveS50eHRcIikpO1xyXG4gICAgICAgICAgICB2eCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL3Z4LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHZ5ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvdnkudHh0XCIpKTtcclxuICAgICAgICAgICAgQ3B1X011bHRpcGxheWVyID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvQ3B1X011bHRpcGxheWVyLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIENwdV92eCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0NwdV92eC50eHRcIikpO1xyXG4gICAgICAgICAgICBDcHVfdnkgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9DcHVfdnkudHh0XCIpKTtcclxuICAgICAgICAgICAgQ3B1X3kgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9DcHVfeS50eHRcIikpO1xyXG4gICAgICAgICAgICBDcHVfeCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0NwdV94LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHhkcmFnID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvZHJhZy50eHRcIikpO1xyXG4gICAgICAgICAgICB5ZHJhZyA9IHhkcmFnO1xyXG4gICAgICAgICAgICBhY2NlbCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2FjY2VsLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGdyYXZpdHkgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9ncmF2aXR5LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGdyYXZpdHlfZWZmZWN0ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvZ3Jhdml0eV9lZmZlY3QudHh0XCIpKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2JsdWUudHh0XCIpKTtcclxuICAgICAgICAgICAgZ2FtZV9vdmVyZWQgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9nYW1lX292ZXJyZWQudHh0XCIpKTtcclxuICAgICAgICAgICAgU3RvcFdoZW5Ob3RNb3ZpbmcgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9TdG9wV2hlbk5vdE1vdmluZy50eHRcIikpO1xyXG4gICAgICAgICAgICBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9VcGRhdGVCYWNrZ3JvdW5kQ29sb3IudHh0XCIpKTtcclxuICAgICAgICAgICAgTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL011bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIudHh0XCIpKTtcclxuICAgICAgICAgICAgYWxwaGEgPSBieXRlLlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2FscGhhLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHN0cmluZ1tdIEJhY2tyb3VuZENvbG9ycyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi9CYWNrcm91bmRDb2xvci50eHRcIik7XHJcbiAgICAgICAgICAgIEJhY2tyb3VuZENvbG9yID0gbmV3IENvbG9yKGJ5dGUuUGFyc2UoQmFja3JvdW5kQ29sb3JzWzNdKSwgYnl0ZS5QYXJzZShCYWNrcm91bmRDb2xvcnNbMl0pLCBieXRlLlBhcnNlKEJhY2tyb3VuZENvbG9yc1sxXSksIGJ5dGUuUGFyc2UoQmFja3JvdW5kQ29sb3JzWzBdKSk7XHJcbiAgICAgICAgICAgIHN0cmluZ1tdIGJhbGxDb2xvcnMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvYmFsbENvbG9yLnR4dFwiKTtcclxuICAgICAgICAgICAgYmFsbENvbG9yID0gbmV3IENvbG9yKGJ5dGUuUGFyc2UoYmFsbENvbG9yc1szXSksIGJ5dGUuUGFyc2UoYmFsbENvbG9yc1syXSksIGJ5dGUuUGFyc2UoYmFsbENvbG9yc1sxXSksIGJ5dGUuUGFyc2UoYmFsbENvbG9yc1swXSkpO1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBhY3R1YWxDb2xvcnMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvYWN0dWFsQ29sb3IudHh0XCIpO1xyXG4gICAgICAgICAgICBhY3R1YWxDb2xvciA9IG5ldyBDb2xvcihieXRlLlBhcnNlKGFjdHVhbENvbG9yc1szXSksIGJ5dGUuUGFyc2UoYWN0dWFsQ29sb3JzWzJdKSwgYnl0ZS5QYXJzZShhY3R1YWxDb2xvcnNbMV0pLCBieXRlLlBhcnNlKGFjdHVhbENvbG9yc1swXSkpO1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBtdWx0aXBsYXllckNvbG9ycyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi9tdWx0aXBsYXllckNvbG9yLnR4dFwiKTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IG5ldyBDb2xvcihieXRlLlBhcnNlKG11bHRpcGxheWVyQ29sb3JzWzNdKSwgYnl0ZS5QYXJzZShtdWx0aXBsYXllckNvbG9yc1syXSksIGJ5dGUuUGFyc2UobXVsdGlwbGF5ZXJDb2xvcnNbMV0pLCBieXRlLlBhcnNlKG11bHRpcGxheWVyQ29sb3JzWzBdKSk7XHJcbiAgICAgICAgICAgIHN0cmluZ1tdIGFjdHVhbE11bHRpcGxheWVyQ29sb3JzID0gU3RvcmFnZS5SZWFkQWxsTGluZXMocyArIFwiL2FjdHVhbE11bHRpcGxheWVyQ29sb3IudHh0XCIpO1xyXG4gICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gbmV3IENvbG9yKGJ5dGUuUGFyc2UoYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcnNbM10pLCBieXRlLlBhcnNlKGFjdHVhbE11bHRpcGxheWVyQ29sb3JzWzJdKSwgYnl0ZS5QYXJzZShhY3R1YWxNdWx0aXBsYXllckNvbG9yc1sxXSksIGJ5dGUuUGFyc2UoYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcnNbMF0pKTtcclxuICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBDbG9zZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIG5vdCBhdmFpbGFibGUgaW4gYnJvd3NlciAtIGp1c3QgZXhpdCB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLkV4aXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmxvYWRDb250ZW50IHdpbGwgYmUgY2FsbGVkIG9uY2UgcGVyIGdhbWUgYW5kIGlzIHRoZSBwbGFjZSB0byB1bmxvYWRcclxuICAgICAgICAvLy8gYWxsIGNvbnRlbnQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBVbmxvYWRDb250ZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFVubG9hZCBhbnkgbm9uIENvbnRlbnRNYW5hZ2VyIGNvbnRlbnQgaGVyZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBBbGxvd3MgdGhlIGdhbWUgdG8gcnVuIGxvZ2ljIHN1Y2ggYXMgdXBkYXRpbmcgdGhlIHdvcmxkLFxyXG4gICAgICAgIC8vLyBjaGVja2luZyBmb3IgY29sbGlzaW9ucywgZ2F0aGVyaW5nIGlucHV0LCBhbmQgcGxheWluZyBhdWRpby5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImdhbWVUaW1lXCI+UHJvdmlkZXMgYSBzbmFwc2hvdCBvZiB0aW1pbmcgdmFsdWVzLjwvcGFyYW0+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgVXBkYXRlKEdhbWVUaW1lIGdhbWVUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gQWxsb3dzIHRoZSBnYW1lIHRvIGV4aXRcclxuICAgICAgICAgICAgaWYgKEdhbWVQYWQuR2V0U3RhdGUoUGxheWVySW5kZXguT25lKS5CdXR0b25zLkJhY2sgPT0gQnV0dG9uU3RhdGUuUHJlc3NlZClcclxuICAgICAgICAgICAgICAgIHRoaXMuRXhpdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogQWRkIHlvdXIgdXBkYXRlIGxvZ2ljIGhlcmVcclxuXHJcbiAgICAgICAgICAgIGJhc2UuVXBkYXRlKGdhbWVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9vbCBjb21tYV9wcmVzc2VkX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBib29sIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSBmYWxzZTtcclxuICAgICAgICBib29sIE1vdXNlTW92ZUJhc2VQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICBib29sIEZvbGxvd0JhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgY2xlYXIgPSB0cnVlO1xyXG4gICAgICAgIGJvb2wgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJvb2wgd2luZG93c19wcmVzc2VkX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBib29sIGFza2luZ19uYW1lID0gdHJ1ZTtcclxuICAgICAgICBib29sIGNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgYm9vbCBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBib29sIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgcGxheWVkX211c2ljX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBmbG9hdCBtdWx0aXBsYXllcnggPSAwZjtcclxuICAgICAgICBmbG9hdCBtdWx0aXBsYXllcnkgPSAwZjtcclxuICAgICAgICBib29sIE11bHRpcGxheWVyX01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgc3RyaW5nIG5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGZsb2F0IG11bHRpcGxheWVydnggPSAwZjtcclxuICAgICAgICBib29sIGZyb21fc2F2ZWRfZ2FtZV9jb2RlID0gZmFsc2U7XHJcbiAgICAgICAgZmxvYXQgbXVsdGlwbGF5ZXJ2eSA9IDBmO1xyXG4gICAgICAgIGJvb2wgZWRnZW9mc2NyZWVubG9zZSA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgYm91bmN5ID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBzdWJ0cmFjdF9QcmVzc2VkX0xhc3RfRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBib29sIGF1dG9zYXZlID0gdHJ1ZTtcclxuICAgICAgICBzdHJpbmdbXSB3b3JsZF9uYW1lcztcclxuICAgICAgICBzdHJpbmdbXSBuYW1lcztcclxuICAgICAgICBzdHJpbmcgc2F2ZWRfZ2FtZV9jb2RlID0gXCJLLncudHluLmhmbHNvci4uLnRoZ3JcIjtcclxuICAgICAgICBzdHJpbmcgc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uO1xyXG4gICAgICAgIGZsb2F0IHggPSAwO1xyXG4gICAgICAgIGZsb2F0IHkgPSAwO1xyXG4gICAgICAgIGZsb2F0IHZ4ID0gMDtcclxuICAgICAgICBmbG9hdCBzcGVlZCA9IDA7XHJcbiAgICAgICAgZmxvYXQgdnkgPSAwO1xyXG4gICAgICAgIGJvb2wgQ3B1X011bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgZmxvYXQgQ3B1X3Z4ID0gMDtcclxuICAgICAgICBmbG9hdCBDcHVfdnkgPSAwO1xyXG4gICAgICAgIGZsb2F0IENwdV94ID0gMDtcclxuICAgICAgICBmbG9hdCBDcHVfeSA9IDA7XHJcbiAgICAgICAgZmxvYXQgeGRyYWcgPSAwLjk5ZjtcclxuICAgICAgICBmbG9hdCB5ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgIGZsb2F0IGFjY2VsID0gMC4xZjtcclxuICAgICAgICBmbG9hdCBncmF2aXR5ID0gMGY7XHJcbiAgICAgICAgZmxvYXQgZ3Jhdml0eV9lZmZlY3QgPSAwZjtcclxuICAgICAgICBmbG9hdCBibHVlID0gMWY7XHJcbiAgICAgICAgYm9vbCBwbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBnYW1lX292ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgbW92ZWQgPSBmYWxzZTtcclxuICAgICAgICBib29sIFN0b3BXaGVuTm90TW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgIFZlY3RvcjJbXSBidXR0b25zID0gbmV3IFZlY3RvcjJbXSB7IG5ldyBWZWN0b3IyKDkyLjVmLCA0Mi41ZiksIG5ldyBWZWN0b3IyKDE0Mi41ZiwgMTE3ZiksIG5ldyBWZWN0b3IyKDkyLjVmLCAxNjBmKSB9O1xyXG4gICAgICAgIFZlY3RvcjJbXSBidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZSA9IG5ldyBWZWN0b3IyW10geyBuZXcgVmVjdG9yMig5Mi41ZiwgNDIuNWYpLCBuZXcgVmVjdG9yMigxNDIuNWYsIDExN2YpLCBuZXcgVmVjdG9yMig5Mi41ZiwgMTYwZikgfTtcclxuICAgICAgICBib29sIE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIgPSBmYWxzZTtcclxuICAgICAgICBib29sIENwdV9Nb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ5dGUgYWxwaGEgPSAyNTU7XHJcbiAgICAgICAgc3RyaW5nW10gc2F2ZWRfZ2FtZXM7XHJcbiAgICAgICAgQ29sb3IgQmFja3JvdW5kQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICBDb2xvciBhY3R1YWxDb2xvcjtcclxuICAgICAgICBDb2xvciBiYWxsQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICBDb2xvciBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgQ29sb3IgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcjtcclxuICAgICAgICBSYW5kb20gcmFuZG9tID0gbmV3IFJhbmRvbSgpO1xyXG4gICAgICAgIGJvb2wgTF9QcmVzc2VkX0xhc3RfRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBmbG9hdCBkaXN0YW5jZSA9IDBmO1xyXG4gICAgICAgIGJvb2wgTXVsdGlwbHlfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgLy8gQmxlbmRTdGF0ZSBhbmQgU3ByaXRlU29ydE1vZGUgbm90IHN1cHBvcnRlZCBpbiBCcmlkZ2UgLSB1c2luZyBkZWZhdWx0c1xyXG4gICAgICAgIGludCBzZWNzID0gMDtcclxuICAgICAgICBib29sIGZ1bGxfc2NyZWVuX3RlbXAgPSBmYWxzZTtcclxuICAgICAgICBmbG9hdCBtYXhpbXVuID0gMDtcclxuICAgICAgICBwcm90ZWN0ZWQgZmxvYXQgTWFrZUZsb2F0UGVyZmVjdChmbG9hdCBpbnB1dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKGZsb2F0KU1hdGguUm91bmQoaW5wdXQgKiAxMDApIC8gMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgU2F2ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgc2F2aW5nZGlyZWN0b3J5ID0gU3RvcmFnZS5HZXRTYXZpbmdzQ291bnQoKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICBTYXZlVG8oc2F2aW5nZGlyZWN0b3J5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT25FeGl0aW5nIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlclxyXG4gICAgICAgIC8vIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uRXhpdGluZyhPYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgYXJncylcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmIChwbGF5aW5nICYmIGF1dG9zYXZlKVxyXG4gICAgICAgIC8vICAgICAgICAgU2F2ZSgpO1xyXG4gICAgICAgIC8vICAgICBiYXNlLk9uRXhpdGluZyhzZW5kZXIsIGFyZ3MpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBwcm90ZWN0ZWQgZmxvYXQgTWFrZUdyYXZpdHlQZXJmZWN0KGZsb2F0IGlucHV0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoZmxvYXQpTWF0aC5Sb3VuZChpbnB1dCAqIDEwMDAwKSAvIDEwMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgdGFnLCBsYXN0X3RhZztcclxuICAgICAgICBwcml2YXRlIGJvb2wgX2ZpcnN0RHJhdztcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIGdhbWUgc2hvdWxkIGRyYXcgaXRzZWxmLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiZ2FtZVRpbWVcIj5Qcm92aWRlcyBhIHNuYXBzaG90IG9mIHRpbWluZyB2YWx1ZXMuPC9wYXJhbT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEcmF3KEdhbWVUaW1lIGdhbWVUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCFfZmlyc3REcmF3KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuSHRtbDUuRG9jdW1lbnQuQm9keS5BcHBlbmRDaGlsZChuZXcgQnJpZGdlLkh0bWw1LkhUTUxBbmNob3JFbGVtZW50XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGV4dENvbnRlbnQgPSBcIkhvdyB0byBQbGF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSHJlZiA9IFwiaG93LXRvLXBsYXkuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIENsYXNzTmFtZSA9IFwiaGVscC1saW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVGFyZ2V0ID0gXCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBfZmlyc3REcmF3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXNraW5nX3dvcmxkX25hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGV2aWNlLkNsZWFyKENvbG9yLlJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBsYXlpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEFkZCB5b3VyIGRyYXdpbmcgY29kZSBoZXJlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVXBkYXRlQmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrcm91bmRDb2xvciA9IG5ldyBDb2xvcigoZmxvYXQpKE1hdGguQ29zKHggKiAwLjAxZikgKyAxKSAvIDIsIChmbG9hdCkoTWF0aC5Db3MoeSAqIDAuMDFmKSArIDEpIC8gMiwgYmx1ZSwgYWxwaGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyYXBoaWNzRGV2aWNlLkNsZWFyKEJhY2tyb3VuZENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZvbGxvd0JhY2tncm91bmRDb2xvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gbmV3IENvbG9yKChmbG9hdCkoTWF0aC5Db3MoeCAqIDAuMDFmKSArIDEpIC8gMiwgKGZsb2F0KShNYXRoLkNvcyh5ICogMC4wMWYpICsgMSkgLyAyLCBibHVlLCBhbHBoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IGJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyh0ZXh0dXJlLCBuZXcgVmVjdG9yMih4LCB5KSwgYmFsbENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIlNwZWVkOiBcIiArIHNwZWVkICsgXCJwaXgvZnJhbWVcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLSAyNTAsIDApLCBDb2xvci5HcmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJNYXhpbXVuIFNwZWVkOiBcIiArIG1heGltdW4gKyBcInBpeC9mcmFtZVwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAtIDI1MCwgMTUpLCBDb2xvci5HcmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJFbGV2YXRpb246IFwiICsgKC15ICsgR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuSGVpZ2h0KSArIFwicGl4XCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC0gMjUwLCAzMCksIENvbG9yLkdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkRpc3RhbmNlOiBcIiArIGRpc3RhbmNlICsgXCJwaXhcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLSAyNTAsIDQ1KSwgQ29sb3IuR3JlZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyYXZpdHkgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJHcmF2aXR5OiBcIiArIE1ha2VHcmF2aXR5UGVyZmVjdChncmF2aXR5KSArIFwicGl4L2ZyYW1lXCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC0gMjUwLCA2MCksIENvbG9yLkdyZWVuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhiYWxsLCBuZXcgVmVjdG9yMihtdWx0aXBsYXllcngsIG11bHRpcGxheWVyeSksIG11bHRpcGxheWVyQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDcHVfTXVsdGlwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYmFsbCwgbmV3IFZlY3RvcjIoQ3B1X3gsIENwdV95KSwgQ29sb3IuV2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB4ICs9IHZ4O1xyXG4gICAgICAgICAgICAgICAgICAgIHkgKz0gdnk7XHJcbiAgICAgICAgICAgICAgICAgICAgeSArPSBncmF2aXR5X2VmZmVjdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ3B1X011bHRpcGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2eCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eCArPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV9Nb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodnggPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnggLT0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2eSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eSArPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV9Nb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodnkgPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnkgLT0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENwdV94ICs9IENwdV92eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3kgKz0gQ3B1X3Z5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ3B1X3ggPj0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eCA9IENwdV92eCAtIChDcHVfdnggKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV94ID0gLXRleHR1cmUuV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQ3B1X3ggPCAtdGV4dHVyZS5XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnggPSAoZmxvYXQpTWF0aC5BYnMoQ3B1X3Z4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV94ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDcHVfeSA+PSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eSA9IENwdV92eSAtIChDcHVfdnkgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV95ID0gLXRleHR1cmUuSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKENwdV95IDwgLXRleHR1cmUuSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eSA9IChmbG9hdClNYXRoLkFicyhDcHVfdnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3kgPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTdG9wV2hlbk5vdE1vdmluZyAmJiAhQ3B1X01vdmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnkgKj0geWRyYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eCAqPSB4ZHJhZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z5ICs9IGdyYXZpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFtdWx0aXBsYXllcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5BKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggLT0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4ICs9IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlVwKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSAtPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Eb3duKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSArPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggKz0gbXVsdGlwbGF5ZXJ2eDtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgKz0gbXVsdGlwbGF5ZXJ2eTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbGF5ZXJfTW92ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCAtPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5BKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4IC09IDAuMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbGF5ZXJfTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4ICs9IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggKz0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBsYXllcl9Nb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5VcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgLT0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSAtPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGxheWVyX01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkRvd24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5ICs9IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgKz0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBsYXllcl9Nb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0U2hpZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0U2hpZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VvZnNjcmVlbmxvc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdENvbnRyb2wpICYmICFLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0Q29udHJvbCkgJiYgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5UKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxhc3RfdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcgPSAhdGFnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfdGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X3RhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHRDb250cm9sKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlb2ZzY3JlZW5sb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuQ2Fwc0xvY2spKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IG5ldyBDb2xvcihyYW5kb20uTmV4dCgyNTYpLCByYW5kb20uTmV4dCgyNTYpLCByYW5kb20uTmV4dCgyNTYpLCByYW5kb20uTmV4dCgyNTYpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IG11bHRpcGxheWVyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5UcmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkY2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkY3KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkY4KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5CbGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLkJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkY5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5Ib3RQaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuSG90UGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMTApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkYxMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkRlbGV0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qaWYgKE1hdGguU3FydCgobXVsdGlwbGF5ZXJ4IC0geCkgKiAobXVsdGlwbGF5ZXJ4IC0geCkpICsgKChtdWx0aXBsYXllcnkgLSB5KSAqIChtdWx0aXBsYXllcnkgLSB5KSkgPD0gMTYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4IC09IC12eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5IC09IC12eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAtbXVsdGlwbGF5ZXJ2eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAtbXVsdGlwbGF5ZXJ2eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllcnggPj0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSBtdWx0aXBsYXllcnZ4IC0gKG11bHRpcGxheWVydnggKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAtdGV4dHVyZS5XaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtdWx0aXBsYXllcnggPCAtdGV4dHVyZS5XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gKGZsb2F0KU1hdGguQWJzKG11bHRpcGxheWVydngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJ5ID49IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IG11bHRpcGxheWVydnkgLSAobXVsdGlwbGF5ZXJ2eSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IC10ZXh0dXJlLkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtdWx0aXBsYXllcnkgPCAtdGV4dHVyZS5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IChmbG9hdClNYXRoLkFicyhtdWx0aXBsYXllcnZ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdG9wV2hlbk5vdE1vdmluZyAmJiAhTXVsdGlwbGF5ZXJfTW92ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgKj0geWRyYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCAqPSB4ZHJhZztcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ICs9IGdyYXZpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5ENikgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ2KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3BXaGVuTm90TW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDcpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkNykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9wV2hlbk5vdE1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5ENCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ0KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5UKSAmJiAhS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0Q29udHJvbCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gcmFuZG9tLk5leHQoMCwgR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSByYW5kb20uTmV4dCgwLCBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IGEgPSByYW5kb20uTmV4dCgwLCAyNTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgYiA9IHJhbmRvbS5OZXh0KDAsIDI1Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBjID0gcmFuZG9tLk5leHQoMCwgMjU2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IGQgPSByYW5kb20uTmV4dCgwLCAyNTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBuZXcgQ29sb3IoYSwgYiwgYywgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBuZXcgQ29sb3IoYSwgYiwgYywgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBhID0gcmFuZG9tLk5leHQoMCwgMjU2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IGIgPSByYW5kb20uTmV4dCgwLCAyNTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgYyA9IHJhbmRvbS5OZXh0KDAsIDI1Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBkID0gcmFuZG9tLk5leHQoMCwgMjU2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gbmV3IENvbG9yKGEsIGIsIGMsIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gbmV3IENvbG9yKGEsIGIsIGMsIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1RdW90ZXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBuZXcgQ29sb3IocmFuZG9tLk5leHQoMCwgMjU2KSwgcmFuZG9tLk5leHQoMCwgMjU2KSwgcmFuZG9tLk5leHQoMCwgMjU2KSwgYmFsbENvbG9yLkEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBhY3R1YWxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5CKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5JKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IENvbG9yLlRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5IKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IGFjdHVhbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5QKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGJhbGxDb2xvciA9PSBDb2xvci5UcmFuc3BhcmVudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IENvbG9yLkhvdFBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBiYWxsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHlfZWZmZWN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Fc2NhcGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9zYXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLlN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyYXBoaWNzLklzRnVsbFNjcmVlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuVG9nZ2xlRnVsbFNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlYm91bmNlIGhhbmRsZWQgYnkgYnV0dG9uIHN0YXRlIHRyYWNraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlYpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm91bmN5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuWikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuY3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUxfUHJlc3NlZF9MYXN0X0ZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCA9IC12eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5ID0gLXZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMX1ByZXNzZWRfTGFzdF9GcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5VXAoS2V5cy5MKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk4pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eSArPSAwLjAwMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk8pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ3Jhdml0eSA8PSAwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eSAtPSAwLjAwMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5KKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhkcmFnID0gMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlkcmFnID0gMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuU3BhY2UpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmFwaGljcy5Jc0Z1bGxTY3JlZW4gPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLlRvZ2dsZUZ1bGxTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSA9IGJhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11biA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIENwdV9Nb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIENwdV9NdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIENwdV92eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgQ3B1X3Z5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lX292ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLlN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBTdG9wV2hlbk5vdE1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB4ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHlkcmFnID0gMC45OWY7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBhY2NlbCA9IDAuMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eV9lZmZlY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm91bmN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYmx1ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZW9mc2NyZWVubG9zZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3dCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sc2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdEFsdCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodEFsdCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5VKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhkcmFnID0gMC45OWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlkcmFnID0gMC45OWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5LKSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShibHVlID09IDI1NSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdWUgKz0gMTI3IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRikpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCghKGJsdWUgPT0gMCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVlIC09IDEyNyAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuWSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW11bHRpcGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdFNoaWZ0KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0U2hpZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlb2ZzY3JlZW5sb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRDb250cm9sKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0Q29udHJvbCkpICYmICFLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlb2ZzY3JlZW5sb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBDb2xvci5CbGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBDb2xvci5CbGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZW9mc2NyZWVubG9zZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lX292ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc2VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtUGVyaW9kKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlTW92ZUJhc2VQbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1RdWVzdGlvbikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3VzZU1vdmVCYXNlUGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkRpdmlkZSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IocmFuZG9tLk5leHQoMCwgMjU2KSwgcmFuZG9tLk5leHQoMCwgMjU2KSwgcmFuZG9tLk5leHQoMCwgMjU2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlRhYikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtTWludXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtUGx1cykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkYxMikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1Mb2NrKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Ib21lKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDMpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkMykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnggPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCAtPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2eCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4ICs9IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2eSA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5IC09IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZ5ID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgKz0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDApIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkMCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlbCArPSAwLjAwMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQxKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZWwgLT0gMC4wMDFmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZWwgPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDIpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkMikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlbCA9IDAuMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQ4KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgcmFuZG9tLk5leHQoMCwgMjU2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IGFjdHVhbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQ5KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDkpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93QmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuQmFjaykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb2xsb3dCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlTW92ZUJhc2VQbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNb3VzZS5HZXRTdGF0ZSgpLlg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gTW91c2UuR2V0U3RhdGUoKS5ZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gTW91c2UuR2V0U3RhdGUoKS5YO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gTW91c2UuR2V0U3RhdGUoKS5ZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlJpZ2h0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU1vdXNlTW92ZUJhc2VQbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNb3VzZS5HZXRTdGF0ZSgpLlg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gTW91c2UuR2V0U3RhdGUoKS5ZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gTW91c2UuR2V0U3RhdGUoKS5YO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gTW91c2UuR2V0U3RhdGUoKS5ZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlBhZ2VVcCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUGFnZURvd24pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW5kKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tyb3VuZENvbG9yID0gQ29sb3IuT3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtT3BlbkJyYWNrZXRzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IENvbG9yLk9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IENvbG9yLk9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtQ2xvc2VCcmFja2V0cykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IuQSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvci5BID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1CYWNrc2xhc2gpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yLkErKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvci5BKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKE92ZXJmbG93RXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbVNlbWljb2xvbikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IuQS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IuQS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChPdmVyZmxvd0V4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5TdWJ0cmFjdCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN1YnRyYWN0X1ByZXNzZWRfTGFzdF9GcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLlRvZ2dsZUZ1bGxTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidHJhY3RfUHJlc3NlZF9MYXN0X0ZyYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlVcChLZXlzLlN1YnRyYWN0KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRyYWN0X1ByZXNzZWRfTGFzdF9GcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0V2luZG93cykgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodFdpbmRvd3MpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dzX3ByZXNzZWRfbGFzdF9mcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X011bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV94ID0geDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV95ID0geTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleVVwKEtleXMuTGVmdFdpbmRvd3MpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHRXaW5kb3dzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd3NfcHJlc3NlZF9sYXN0X2ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk11bHRpcGx5KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTXVsdGlwbHlfUHJlc3NlZF9MYXN0X0ZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuU3RhdGUgPT0gU291bmRTdGF0ZS5TdG9wcGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5TdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbHlfUHJlc3NlZF9MYXN0X0ZyYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlVcChLZXlzLk11bHRpcGx5KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGx5X1ByZXNzZWRfTGFzdF9GcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleVVwKEtleXMuT2VtQ29tbWEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFfcHJlc3NlZF9sYXN0X2ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbUNvbW1hKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tbWFfcHJlc3NlZF9sYXN0X2ZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZS5FcXVhbHMoYmFsbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSA9IGJsYWNrX2JhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSA9IGJhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFfcHJlc3NlZF9sYXN0X2ZyYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypTeXN0ZW0uSU8uU3RyZWFtV3JpdGVyIGRyYWd3cml0ZXIgPSBuZXcgU3lzdGVtLklPLlN0cmVhbVdyaXRlcihcIi4uL2RyYWcudHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnd3JpdGVyLldyaXRlKHhkcmFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ3dyaXRlci5GbHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnd3JpdGVyLkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN5c3RlbS5JTy5TdHJlYW1Xcml0ZXIgZ3Jhdml0eXdyaXRlciA9IG5ldyBTeXN0ZW0uSU8uU3RyZWFtV3JpdGVyKFwiLi4vZ3Jhdml0eS50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHl3cml0ZXIuV3JpdGUoZ3Jhdml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHl3cml0ZXIuRmx1c2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eXdyaXRlci5DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9jZXNzLlN0YXJ0KEBcIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcVmlzdWFsIFN0dWRpbyAyMDEzIERhZGR5XFxQcm9qZWN0c1xcVmFyaWFibGUgQ2hhbmdlclxcVmFyaWFibGUgQ2hhbmdlclxcYmluXFxEZWJ1Z1xcVmFyaWFibGUgQ2hhbmdlci5leGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2Nlc3NbXSBXYWl0ID0gUHJvY2Vzcy5HZXRQcm9jZXNzZXNCeU5hbWUoXCJWYXJpYWJsZSBDaGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JlYWNoIChQcm9jZXNzIHAgaW4gV2FpdClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5XYWl0Rm9yRXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN5c3RlbS5JTy5TdHJlYW1SZWFkZXIgZ3Jhdml0eXAgPSBuZXcgU3lzdGVtLklPLlN0cmVhbVJlYWRlcihAXCIuLlxcZ3Jhdml0eS50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5ID0gZmxvYXQuUGFyc2UoZ3Jhdml0eXAuUmVhZExpbmUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKEFyZ3VtZW50TnVsbEV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoRm9ybWF0RXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChPdmVyZmxvd0V4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5cC5DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0uSU8uU3RyZWFtUmVhZGVyIGRyYWdwID0gbmV3IFN5c3RlbS5JTy5TdHJlYW1SZWFkZXIoXCIuLi9kcmFnLnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhkcmFnID0gZmxvYXQuUGFyc2UoZHJhZ3AuUmVhZExpbmUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKEZvcm1hdEV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoT3ZlcmZsb3dFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKEFyZ3VtZW50TnVsbEV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFncC5DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZHJhZyA9IHhkcmFnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0FjY2VsZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0uSU8uU3RyZWFtUmVhZGVyIGFjY2VscCA9IG5ldyBTeXN0ZW0uSU8uU3RyZWFtUmVhZGVyKFwiLi4vQWNlZWxlcmF0aW9uLnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VsID0gZmxvYXQuUGFyc2UoYWNjZWxwLlJlYWRMaW5lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChGb3JtYXRFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKE92ZXJmbG93RXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChBcmd1bWVudE51bGxFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZWxwLkNsb3NlKCk7Ki9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GNCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVfb3ZlcmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZV9PdmVyLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZV9vdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYXIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiR2FtZSBPdmVyIVxcblByZXNzIFNwYWNlIHRvIFJlc3RhcnQgYW5kIFByZXNzIGVzYyBvciBlIHRvIHF1aXRcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLyAyLCBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5IZWlnaHQgLyAyKSwgQ29sb3IuR29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxDb2xvci5BID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IuQSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwZWVkID0gTWFrZUZsb2F0UGVyZmVjdCgoZmxvYXQpKE1hdGguQWJzKE1hdGguU3FydCgodnggKiB2eCkgKyAoKHZ5ICsgZ3Jhdml0eV9lZmZlY3QpICogKHZ5ICsgZ3Jhdml0eV9lZmZlY3QpKSkpKSk7XHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSArPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVlZCA+IG1heGltdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11biA9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID49IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlZGdlb2ZzY3JlZW5sb3NlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkdhbWUgT3ZlciFcXG5QcmVzcyBTcGFjZSB0byBSZXN0YXJ0IGFuZCBQcmVzcyBlc2Mgb3IgZSB0byBxdWl0XCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC8gMiwgR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuSGVpZ2h0IC8gMiksIENvbG9yLkdvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCA9IHZ4IC0gKHZ4ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IC10ZXh0dXJlLldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh4IDwgLXRleHR1cmUuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZW9mc2NyZWVubG9zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydCBhbmQgUHJlc3MgZXNjIG9yIGUgdG8gcXVpdFwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAvIDIsIEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkhlaWdodCAvIDIpLCBDb2xvci5Hb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggPSAoZmxvYXQpTWF0aC5BYnModngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPj0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlZGdlb2ZzY3JlZW5sb3NlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkdhbWUgT3ZlciFcXG5QcmVzcyBTcGFjZSB0byBSZXN0YXJ0IGFuZCBQcmVzcyBlc2Mgb3IgZSB0byBxdWl0XCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC8gMiwgR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuSGVpZ2h0IC8gMiksIENvbG9yLkdvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSA9IHZ5IC0gKHZ5ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5X2VmZmVjdCA9IC1ncmF2aXR5X2VmZmVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gLXRleHR1cmUuSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHkgPCAtdGV4dHVyZS5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZW9mc2NyZWVubG9zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydCBhbmQgUHJlc3MgZXNjIG9yIGUgdG8gcXVpdFwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAvIDIsIEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkhlaWdodCAvIDIpLCBDb2xvci5Hb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgPSAoZmxvYXQpTWF0aC5BYnModnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eV9lZmZlY3QgPSAtZ3Jhdml0eV9lZmZlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0b3BXaGVuTm90TW92aW5nICYmICFtb3ZlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2eCAqPSB4ZHJhZztcclxuICAgICAgICAgICAgICAgICAgICB2eSAqPSB5ZHJhZztcclxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5X2VmZmVjdCAqPSB5ZHJhZztcclxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5X2VmZmVjdCArPSBncmF2aXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIExpc3Q8VmVjdG9yMj4gcG9zaXRpb25zID0gZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkNhbGxGb3IobmV3IExpc3Q8VmVjdG9yMj4oKSwoX28xKT0+e19vMS5BZGQobmV3IFZlY3RvcjIoeCwgeSkpO3JldHVybiBfbzE7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zLkFkZChuZXcgVmVjdG9yMihtdWx0aXBsYXllcngsIG11bHRpcGxheWVyeSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5BZGQobmV3IFZlY3RvcjIoQ3B1X3gsIENwdV95KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgeCA9IDA7IHggPCBwb3NpdGlvbnMuQ291bnQ7IHgrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaW50IHkgPSAwOyB5IDwgcG9zaXRpb25zLkNvdW50OyB5KyspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ID09IHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWN0YW5nbGUgcmVjdEEgPSBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uc1t4XS5Ub1BvaW50KCksIG5ldyBQb2ludCgzMiwgMzIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY3RhbmdsZSByZWN0QiA9IG5ldyBSZWN0YW5nbGUocG9zaXRpb25zW3ldLlRvUG9pbnQoKSwgbmV3IFBvaW50KDMyLCAzMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3RBLkNvbnRhaW5zKHBvc2l0aW9uc1t5XSkgfHwgcmVjdEIuQ29udGFpbnMocG9zaXRpb25zW3hdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgfSAvLyBFbXB0eSBibG9jayAtIG9yaWdpbmFsIGNvZGUgd2FzIGluY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhc2tpbmdfd29ybGRfbmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoMzI5LCAyNTksIDE1MiwgMjcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoMzMwLCAyNjAsIDE1MCwgMjUpLCBDb2xvci5XaGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3MgPT0gNSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuQmFjayB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQ291bnQ8Y2hhcj4od29ybGRfbmFtZSkgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ybGRfbmFtZSA9IHdvcmxkX25hbWUuUmVtb3ZlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQ291bnQ8Y2hhcj4od29ybGRfbmFtZSkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLkVudGVyIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfd29ybGRfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tX3NhdmVkX2dhbWVfY29kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydFBsYXlpbmcoZ2FtZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bGxfc2NyZWVuX3RlbXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuVG9nZ2xlRnVsbFNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdW5kX3BsYXlpbmdfdGVtcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VuZF9wbGF5aW5nX3RlbXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxfc2NyZWVuX3RlbXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLkVzY2FwZSB9KSAmJiBDYW5QZXJmb3JtQWN0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ193b3JsZF9uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5MZWZ0Q29udHJvbCwgS2V5cy5WIH0pIHx8IEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5SaWdodENvbnRyb2wsIEtleXMuViB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpcGJvYXJkSGVscGVyLlJlYWRDbGlwYm9hcmRUZXh0KChBY3Rpb248c3RyaW5nPikodGV4dCA9PiB7IHdvcmxkX25hbWUgPSB0ZXh0OyB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IG4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JlYWNoIChLZXlzW10gayBpbiBrZXlzLlZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChrKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCgodXNob3J0KUdldEtleVN0YXRlKDB4MTQpKSAmIDB4ZmZmZikgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ybGRfbmFtZSArPSBDaGFyLlRvVXBwZXIoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8Y2hhcj4oa2V5cy5LZXlzKVtuXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JsZF9uYW1lICs9IFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9MaXN0PGNoYXI+KGtleXMuS2V5cylbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjcyA+IDUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWNzKys7XHJcbiAgICAgICAgICAgICAgICBpZiAod29ybGRfbmFtZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJXb3JsZCBOYW1lLi4uXCIsIG5ldyBWZWN0b3IyKDM0NSwgMjYwKSwgQ29sb3IuTGlnaHRHcmF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIHdvcmxkX25hbWUsIG5ldyBWZWN0b3IyKDM0NSwgMjYwKSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIldoYXQncyB0aGUgbmFtZSBvZiB5b3VyIHdvcmxkP1wiLCBuZXcgVmVjdG9yMigzNDUsIDIyNSksIENvbG9yLldoaXRlKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFza2luZ19uYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBLZXlib2FyZFN0YXRlIHN0YXRlID0gS2V5Ym9hcmQuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGV2aWNlLkNsZWFyKENvbG9yLlJlZCk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoMzI5LCAyNTksIDE1MiwgMjcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSgzMzAsIDI2MCwgMTUwLCAyNSksIENvbG9yLldoaXRlKTtcclxuICAgICAgICAgICAgICAgIGludCBuID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNzID09IDUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5CYWNrIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQ291bnQ8Y2hhcj4obmFtZSkgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gbmFtZS5SZW1vdmUoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Db3VudDxjaGFyPihuYW1lKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLkVudGVyIH0pICYmIENhblBlcmZvcm1BY3Rpb24oKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ19uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuRXNjYXBlIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5MZWZ0Q29udHJvbCwgS2V5cy5WIH0pIHx8IEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5SaWdodENvbnRyb2wsIEtleXMuViB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpcGJvYXJkSGVscGVyLlJlYWRDbGlwYm9hcmRUZXh0KChBY3Rpb248c3RyaW5nPikodGV4dCA9PiB7IG5hbWUgKz0gdGV4dDsgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmVhY2ggKEtleXNbXSBrIGluIGtleXMuVmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChrKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoKHVzaG9ydClHZXRLZXlTdGF0ZSgweDE0KSkgJiAweGZmZmYpICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBDaGFyLlRvVXBwZXIoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8Y2hhcj4oa2V5cy5LZXlzKVtuXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlRvTGlzdDxjaGFyPihrZXlzLktleXMpW25dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJOYW1lLi4uXCIsIG5ldyBWZWN0b3IyKDM0NSwgMjYwKSwgQ29sb3IuTGlnaHRHcmF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIG5hbWUsIG5ldyBWZWN0b3IyKDM0NSwgMjYwKSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIldoYXQncyB5b3VyIG5hbWU/XCIsIG5ldyBWZWN0b3IyKDM0NSwgMjI1KSwgQ29sb3IuV2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICBzZWNzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2F2ZWRfZ2FtZV9jb2RlICE9IHNhdmVkX2dhbWVfZGVzdG5hdGlvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEZXZpY2UuQ2xlYXIoQ29sb3IuQmx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJvbV9zYXZlZF9nYW1lX2NvZGUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uICsgXCIvd29ybGRfbmFtZS50eHRcIiwgd29ybGRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uID0gc2F2ZWRfZ2FtZV9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb21fc2F2ZWRfZ2FtZV9jb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGRfbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRfZ2FtZXMgPSBTdG9yYWdlLkdldERpcmVjdG9yaWVzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGludCBuID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lcyA9IG5ldyBzdHJpbmdbc2F2ZWRfZ2FtZXMuTGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZF9uYW1lcyA9IG5ldyBzdHJpbmdbc2F2ZWRfZ2FtZXMuTGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JlYWNoIChzdHJpbmcgcyBpbiBzYXZlZF9nYW1lcylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvbmFtZS50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc1tuXSA9IGxpbmVzLkxlbmd0aCA+IDAgPyBsaW5lc1swXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNbbl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvd29ybGRfbmFtZS50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JsZF9uYW1lc1tuXSA9IGxpbmVzLkxlbmd0aCA+IDAgPyBsaW5lc1swXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNbbl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VjcyAlIDUgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlVwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uc19Mb2FkX0ZpbGVfUmlnaHRfQ2xpY2sgYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWSA8PSA4NSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGljay5QbGF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoTW91c2UuR2V0U3RhdGUoKS5ZID49IDEwMCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMTM0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrLkRlbGV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGljay5SZW5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3VzZS5TZXRQb3NpdGlvbigoaW50KWJ1dHRvbnNfcmlnaHRfY2xpY2tfbG9hZF9maWxlWyhpbnQpYnV0dG9uIC0gMV0uWCwgKGludClidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZVsoaW50KWJ1dHRvbiAtIDFdLlkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3VzZS5TZXRQb3NpdGlvbigoaW50KVN5c3RlbS5MaW5xLkVudW1lcmFibGUuTGFzdDxWZWN0b3IyPihidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZSkuWCwgKGludClTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkxhc3Q8VmVjdG9yMj4oYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGUpLlkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRG93bikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrIGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gODUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uc19Mb2FkX0ZpbGVfUmlnaHRfQ2xpY2suUGxheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxMDAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDEzNClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGljay5EZWxldGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uc19Mb2FkX0ZpbGVfUmlnaHRfQ2xpY2suUmVuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW91c2UuU2V0UG9zaXRpb24oKGludClidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZVsoaW50KWJ1dHRvbiArIDFdLlgsIChpbnQpYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGVbKGludClidXR0b24gKyAxXS5ZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW91c2UuU2V0UG9zaXRpb24oKGludClidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZVswXS5YLCAoaW50KWJ1dHRvbnNfcmlnaHRfY2xpY2tfbG9hZF9maWxlWzBdLlkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWNzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWCA+PSAzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlggPD0gMTUwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSA4NSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDQ5LCA0OSwgMTAyLCAzNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNTAsIDUwLCAxMDAsIDM1KSwgbmV3IENvbG9yKDIzNCwgMjQxLCAyNDgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSkgJiYgQ2FuUGVyZm9ybUFjdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkKHNhdmVkX2dhbWVfZGVzdG5hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZF9nYW1lX2Rlc3RuYXRpb24gPSBzYXZlZF9nYW1lX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIlBsYXlcIiwgbmV3IFZlY3RvcjIoNjIsIDU3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRXNjYXBlKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZF9nYW1lX2Rlc3RuYXRpb24gPSBzYXZlZF9nYW1lX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dCBidXR0b24gbG9hZCBzYXZlZCBzYXZlZCBnYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWCA+PSAzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlggPD0gMjUwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxMDAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDEzNClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDQ5LCA5OSwgMTAyLCAzNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNTAsIDEwMCwgMTAwLCAzNSksIG5ldyBDb2xvcigyMzQsIDI0MSwgMjQ4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5EZWxldGVEaXJlY3Rvcnkoc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkX2dhbWVfZGVzdG5hdGlvbiA9IHNhdmVkX2dhbWVfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiRGVsZXRlXCIsIG5ldyBWZWN0b3IyKDYyLCAxMDcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWCA+PSAzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlggPD0gMTUwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDE4NSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDQ5LCAxNDksIDEwMiwgMzcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDUwLCAxNTAsIDEwMCwgMzUpLCBuZXcgQ29sb3IoMjM0LCAyNDEsIDI0OCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbnRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ193b3JsZF9uYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fc2F2ZWRfZ2FtZV9jb2RlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIlJlbmFtZVwiLCBuZXcgVmVjdG9yMig2MiwgMTU3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMpXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRXNjYXBlKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkUpKSAmJiBDYW5QZXJmb3JtQWN0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9va2luZ19hdF9zYXZlZF9nYW1lcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgS2V5Ym9hcmRTdGF0ZSBrZXlzID0gS2V5Ym9hcmQuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIE1vdXNlU3RhdGUgbW91c2UgPSBNb3VzZS5HZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaW50IG4gPSAwO1xyXG4gICAgICAgICAgICAgICAgaW50IHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIHMgaW4gc2F2ZWRfZ2FtZXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSgwLCB5ICogMTUsIDQwMSwgMTYpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdXNlLlkgPj0geSAqIDE1ICYmIG1vdXNlLlkgPD0gKCh5ICogMTUpICsgMTUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdXNlLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCBrZXlzLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZChzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmFwaGljcy5Jc0Z1bGxTY3JlZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuVG9nZ2xlRnVsbFNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdXNlLlJpZ2h0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkX2dhbWVfZGVzdG5hdGlvbiA9IHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoMCwgeSAqIDE1LCA0MDAsIDE1KSwgQ29sb3IuT3JhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSgwLCB5ICogMTUsIDQwMCwgMTUpLCBDb2xvci5EYXJrT3JhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIHdvcmxkX25hbWVzW25dICsgXCIgYnkgXCIgKyBuYW1lc1tuXSwgbmV3IFZlY3RvcjIoMCwgeSAqIDE1KSwgQ29sb3IuQmxhY2spO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuKys7XHJcbiAgICAgICAgICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEZXZpY2UuQ2xlYXIoQ29sb3IuQmx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3MgJSA1ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVXApKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uIGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWSA8PSA4NSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbi5OZXdHYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTAwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAxMzQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b24uTG9hZEdhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbi5FeGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW91c2UuU2V0UG9zaXRpb24oKGludClidXR0b25zWyhpbnQpYnV0dG9uIC0gMV0uWCwgKGludClidXR0b25zWyhpbnQpYnV0dG9uIC0gMV0uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW91c2UuU2V0UG9zaXRpb24oKGludClTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkxhc3Q8VmVjdG9yMj4oYnV0dG9ucykuWCwgKGludClTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkxhc3Q8VmVjdG9yMj4oYnV0dG9ucykuWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Eb3duKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbiBidXR0b247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gODUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b24uTmV3R2FtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoTW91c2UuR2V0U3RhdGUoKS5ZID49IDEwMCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMTM0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uLkxvYWRHYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b24uRXhpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlLlNldFBvc2l0aW9uKChpbnQpYnV0dG9uc1soaW50KWJ1dHRvbiArIDFdLlgsIChpbnQpYnV0dG9uc1soaW50KWJ1dHRvbiArIDFdLlkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlLlNldFBvc2l0aW9uKChpbnQpYnV0dG9uc1swXS5YLCAoaW50KWJ1dHRvbnNbMF0uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5YID49IDM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWCA8PSAxNTAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDg1KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDQ5LCA0OSwgMTAyLCAzNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg1MCwgNTAsIDEwMCwgMzUpLCBuZXcgQ29sb3IoMjM0LCAyNDEsIDI0OCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ193b3JsZF9uYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSA9IGJhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kX3BsYXlpbmdfdGVtcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIk5ldyBHYW1lXCIsIG5ldyBWZWN0b3IyKDYyLCA1NyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRXNjYXBlKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9uZXh0IGJ1dHRvbiBsb2FkIHNhdmVkIHNhdmVkIGdhbWVcclxuICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlggPj0gMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5YIDw9IDI1MCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTAwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAxMzQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNDksIDk5LCAxMDIsIDM3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDUwLCAxMDAsIDEwMCwgMzUpLCBuZXcgQ29sb3IoMjM0LCAyNDEsIDI0OCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfd29ybGRfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZF9nYW1lcyA9IFN0b3JhZ2UuR2V0RGlyZWN0b3JpZXMoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBuID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMgPSBuZXcgc3RyaW5nW3NhdmVkX2dhbWVzLkxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmxkX25hbWVzID0gbmV3IHN0cmluZ1tzYXZlZF9nYW1lcy5MZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JlYWNoIChzdHJpbmcgcyBpbiBzYXZlZF9nYW1lcylcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gU3RvcmFnZS5SZWFkQWxsTGluZXMocyArIFwiL25hbWUudHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzW25dID0gbGluZXMuTGVuZ3RoID4gMCA/IGxpbmVzWzBdIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNbbl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gU3RvcmFnZS5SZWFkQWxsTGluZXMocyArIFwiL3dvcmxkX25hbWUudHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmxkX25hbWVzW25dID0gbGluZXMuTGVuZ3RoID4gMCA/IGxpbmVzWzBdIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNbbl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ19uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkxvYWQgR2FtZVwiLCBuZXcgVmVjdG9yMig2MiwgMTA3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgLy8gbmV3IGJ1dHRvbiBleGl0XHJcbiAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5YID49IDM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWCA8PSAxNTAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZID49IDEzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMTg1KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDQ5LCAxNDksIDEwMiwgMzcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNTAsIDE1MCwgMTAwLCAzNSksIG5ldyBDb2xvcigyMzQsIDI0MSwgMjQ4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiUXVpdFwiLCBuZXcgVmVjdG9yMig2MiwgMTU3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgLyovLyBuZXcgYnV0dG9uIHBsYXkgbXVzaWNcclxuICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlggPj0gMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5YIDw9IDE1MCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTg1ICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAyMzUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNDksIDE5OSwgMTAyLCAzNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg1MCwgMjAwLCAxMDAsIDM1KSwgbmV3IENvbG9yKDIzNCwgMjQxLCAyNDgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbnRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVkX211c2ljX2xhc3RfZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5TdGF0ZSA9PSBTb3VuZFN0YXRlLlN0b3BwZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5zdGFuY2UuU3RhdGUgPT0gU291bmRTdGF0ZS5QbGF5aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLlN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZWRfbXVzaWNfbGFzdF9mcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllZF9tdXNpY19sYXN0X2ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLlN0YXRlID09IFNvdW5kU3RhdGUuU3RvcHBlZClcclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJQbGF5IE11c2ljXCIsIG5ldyBWZWN0b3IyKDYyLCAyMDcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIlN0b3AgTXVzaWNcIiwgbmV3IFZlY3RvcjIoNjIsIDIwNyksIENvbG9yLkJsYWNrKTsqL1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICBzZWNzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFzZS5EcmF3KGdhbWVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xuXG5uYW1lc3BhY2UgQm91bmN5X0JhbGxcbntcbiAgICBwdWJsaWMgY2xhc3MgUHJvZ3JhbVxuICAgIHtcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxuICAgICAgICB7XG4gICAgICAgICAgICB1c2luZyAodmFyIGdhbWUgPSBuZXcgR2FtZTEoKSlcbiAgICAgICAgICAgICAgICBnYW1lLlJ1bigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwidXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIEJvdW5jeV9CYWxsXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBsb2NhbFN0b3JhZ2Ugd3JhcHBlciB0byByZXBsYWNlIFN5c3RlbS5JTyBmaWxlIG9wZXJhdGlvbnNcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIFN0b3JhZ2VcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IHN0cmluZyBQUkVGSVggPSBcIkJvdW5jeUJhbGxfXCI7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBzdHJpbmcgU0FWRVNfS0VZID0gXCJCb3VuY3lCYWxsX1NhdmVzTGlzdFwiO1xyXG4gICAgICAgIHByaXZhdGUgY29uc3Qgc3RyaW5nIFNBVklOR1NfS0VZID0gXCJCb3VuY3lCYWxsX1NhdmluZ3NcIjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzYXZpbmdzIGNvdW50ZXIgaWYgbm90IHByZXNlbnRcclxuICAgICAgICAgICAgaWYgKFdpbmRvdy5Mb2NhbFN0b3JhZ2UuR2V0SXRlbShTQVZJTkdTX0tFWSkgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgV2luZG93LkxvY2FsU3RvcmFnZS5TZXRJdGVtKFNBVklOR1NfS0VZLCBcIjBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBEaXJlY3RvcnlFeGlzdHMoc3RyaW5nIHBhdGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBzYXZlIGV4aXN0c1xyXG4gICAgICAgICAgICBzdHJpbmcga2V5ID0gUGF0aFRvS2V5KHBhdGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKGtleSArIFwiX2V4aXN0c1wiKSAhPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIENyZWF0ZURpcmVjdG9yeShzdHJpbmcgcGF0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBrZXkgPSBQYXRoVG9LZXkocGF0aCk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5Mb2NhbFN0b3JhZ2UuU2V0SXRlbShrZXkgKyBcIl9leGlzdHNcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHRvIHNhdmVzIGxpc3RcclxuICAgICAgICAgICAgdmFyIHNhdmVzID0gR2V0U2F2ZXNMaXN0KCk7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZXMuQ29udGFpbnMoa2V5KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2F2ZXMuQWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICBTYXZlU2F2ZXNMaXN0KHNhdmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIERlbGV0ZURpcmVjdG9yeShzdHJpbmcgcGF0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBrZXkgPSBQYXRoVG9LZXkocGF0aCk7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgaXRlbXMgd2l0aCB0aGlzIHByZWZpeFxyXG4gICAgICAgICAgICB2YXIga2V5c1RvUmVtb3ZlID0gbmV3IExpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IFdpbmRvdy5Mb2NhbFN0b3JhZ2UuTGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyBrID0gV2luZG93LkxvY2FsU3RvcmFnZS5LZXkoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoayAhPSBudWxsICYmIGsuU3RhcnRzV2l0aChrZXkpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXNUb1JlbW92ZS5BZGQoayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGsgaW4ga2V5c1RvUmVtb3ZlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBXaW5kb3cuTG9jYWxTdG9yYWdlLlJlbW92ZUl0ZW0oayk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIHNhdmVzIGxpc3RcclxuICAgICAgICAgICAgdmFyIHNhdmVzID0gR2V0U2F2ZXNMaXN0KCk7XHJcbiAgICAgICAgICAgIHNhdmVzLlJlbW92ZShrZXkpO1xyXG4gICAgICAgICAgICBTYXZlU2F2ZXNMaXN0KHNhdmVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBGaWxlRXhpc3RzKHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFdpbmRvdy5Mb2NhbFN0b3JhZ2UuR2V0SXRlbShrZXkpICE9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBSZWFkQWxsVGV4dChzdHJpbmcgcGF0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBrZXkgPSBQYXRoVG9LZXkocGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoc3RyaW5nKVdpbmRvdy5Mb2NhbFN0b3JhZ2UuR2V0SXRlbShrZXkpID8/IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgV3JpdGVBbGxUZXh0KHN0cmluZyBwYXRoLCBzdHJpbmcgY29udGVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBrZXkgPSBQYXRoVG9LZXkocGF0aCk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5Mb2NhbFN0b3JhZ2UuU2V0SXRlbShrZXksIGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdHJpbmdbXSBSZWFkQWxsTGluZXMoc3RyaW5nIHBhdGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgY29udGVudCA9IFJlYWRBbGxUZXh0KHBhdGgpO1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nLklzTnVsbE9yRW1wdHkoY29udGVudCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHN0cmluZ1swXTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuU3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFdyaXRlQWxsTGluZXMoc3RyaW5nIHBhdGgsIHN0cmluZ1tdIGxpbmVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV3JpdGVBbGxUZXh0KHBhdGgsIHN0cmluZy5Kb2luKFwiXFxuXCIsIGxpbmVzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZ1tdIEdldERpcmVjdG9yaWVzKHN0cmluZyBiYXNlUGF0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzYXZlcyA9IEdldFNhdmVzTGlzdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2F2ZXMuVG9BcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbnQgR2V0U2F2aW5nc0NvdW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyB2YWwgPSAoc3RyaW5nKVdpbmRvdy5Mb2NhbFN0b3JhZ2UuR2V0SXRlbShTQVZJTkdTX0tFWSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwgIT0gbnVsbCA/IGludC5QYXJzZSh2YWwpIDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTZXRTYXZpbmdzQ291bnQoaW50IGNvdW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV2luZG93LkxvY2FsU3RvcmFnZS5TZXRJdGVtKFNBVklOR1NfS0VZLCBjb3VudC5Ub1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBJbmNyZW1lbnRTYXZpbmdzQ291bnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2V0U2F2aW5nc0NvdW50KEdldFNhdmluZ3NDb3VudCgpICsgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzdHJpbmcgUGF0aFRvS2V5KHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gQ29udmVydCBXaW5kb3dzLXN0eWxlIHBhdGhzIHRvIHN0b3JhZ2Uga2V5c1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIEM6L1VzZXJzLy4uLi9BcHBEYXRhL0xvY2FsL01pY2hhZWwvQm91bmN5IEJhbGwvIHByZWZpeFxyXG4gICAgICAgICAgICBzdHJpbmcga2V5ID0gcGF0aDtcclxuICAgICAgICAgICAgaW50IGlkeCA9IGtleS5JbmRleE9mKFwiQm91bmN5IEJhbGwvXCIpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID49IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5TdWJzdHJpbmcoaWR4ICsgXCJCb3VuY3kgQmFsbC9cIi5MZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEFsc28gaGFuZGxlIGp1c3QgdGhlIHNhdmUgbmFtZVxyXG4gICAgICAgICAgICBrZXkgPSBrZXkuUmVwbGFjZShcIi9cIiwgXCJfXCIpLlJlcGxhY2UoXCJcXFxcXCIsIFwiX1wiKS5SZXBsYWNlKFwiLnR4dFwiLCBcIlwiKS5SZXBsYWNlKFwiLnBuZ1wiLCBcIl9pbWdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQUkVGSVggKyBrZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBMaXN0PHN0cmluZz4gR2V0U2F2ZXNMaXN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBqc29uID0gKHN0cmluZylXaW5kb3cuTG9jYWxTdG9yYWdlLkdldEl0ZW0oU0FWRVNfS0VZKTtcclxuICAgICAgICAgICAgaWYgKHN0cmluZy5Jc051bGxPckVtcHR5KGpzb24pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXN0PHN0cmluZz4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpbXBsZSBwYXJzaW5nIC0ganVzdCBzcGxpdCBieSBjb21tYVxyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IG5ldyBMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmcuSXNOdWxsT3JFbXB0eShqc29uKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yZWFjaCAodmFyIGl0ZW0gaW4ganNvbi5TcGxpdCgnLCcpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RyaW5nLklzTnVsbE9yRW1wdHkoaXRlbSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuQWRkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBTYXZlU2F2ZXNMaXN0KExpc3Q8c3RyaW5nPiBzYXZlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpbmRvdy5Mb2NhbFN0b3JhZ2UuU2V0SXRlbShTQVZFU19LRVksIHN0cmluZy5Kb2luKFwiLFwiLCBzYXZlcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
