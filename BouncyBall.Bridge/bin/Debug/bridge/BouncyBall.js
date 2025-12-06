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
            last_tag: false
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJCb3VuY3lCYWxsLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJHYW1lMS5jcyIsIlByb2dyYW0uY3MiLCJTdG9yYWdlLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBdUt3Q0E7b0JBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBdklmQSxLQUFJQTsrQkFDREEsS0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQTBVbkJBLG1CQUFnQkEsSUFBSUEsb0RBQXVCQSxJQUFJQSxzREFBdUJBLElBQUlBO3FEQUNwREEsbUJBQWdCQSxJQUFJQSxvREFBdUJBLElBQUlBLHNEQUF1QkEsSUFBSUE7Ozs7c0NBSzdGQTtpQ0FFTEE7d0NBQ09BOzhCQUVUQSxJQUFJQTs7Ozs7Ozs7Ozs7Z0JBM1VoQkEsZ0JBQVdBLElBQUlBLDhDQUFzQkE7Z0JBQ3JDQTs7Ozs7O2dCQUlBQSxnQkFBZ0JBO2dCQUNoQkEsS0FBS0EsV0FBV0EsSUFBSUEsV0FBV0E7b0JBRTNCQSxjQUFTQSxvQkFBYUEsTUFBOEJBLHlDQUFNQSx3Q0FBV0EsaUNBQUtBLG1CQUFhQSw4Q0FBZ0JBLGNBQThCQSxtRkFBUUEsNENBQWFBO29CQUMxSkEsaUJBQVlBLG1CQUFhQSwrQ0FBaUJBLGNBQThCQSxtRkFBUUEsNENBQWFBLHVFQUFTQSxvQkFBYUEsT0FBOEJBLHlDQUFNQSwwQ0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFZdEtBLDZCQUF3QkE7Z0JBQ3hCQSxtQkFBY0E7Z0JBQ2RBLDhCQUF5QkE7Z0JBQ3pCQSxrQkFBY0EsbUJBQWFBO2dCQUMzQkEsa0JBQWNBLG1CQUFh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QVdBLEtBQUlBO29CQUNmQSxJQUFJQSxDQUFDQSw0QkFBcUJBO3dCQUV0QkEsMEJBQXFCQTs7OztnQ0FFakJBLElBQUlBLENBQUNBLDRCQUFxQkE7b0NBQ3RCQSxTQUFTQTs7Ozs7Ozs7O29CQUdyQkEsT0FBT0E7O3lDQUd1QkE7b0JBRTlCQSw0QkFBNEJBLCtCQUFXQSxlQUFpQkEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIE1pY3Jvc29mdC5YbmEuRnJhbWV3b3JrO1xyXG51c2luZyBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5BdWRpbztcclxudXNpbmcgTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuQ29udGVudDtcclxudXNpbmcgTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuR3JhcGhpY3M7XHJcbnVzaW5nIE1pY3Jvc29mdC5YbmEuRnJhbWV3b3JrLklucHV0O1xyXG51c2luZyBCb3VuY3lfQmFsbDtcclxuLy8gUmVtb3ZlZDogTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuTWVkaWEsIFN5c3RlbS5EaWFnbm9zdGljcywgU3lzdGVtLk1lZGlhLCBTeXN0ZW0uUnVudGltZS5JbnRlcm9wU2VydmljZXNcclxuXHJcbm5hbWVzcGFjZSBCb3VuY3lfQmFsbFxyXG57XHJcbiAgICBlbnVtIEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIE5ld0dhbWUsXHJcbiAgICAgICAgTG9hZEdhbWUsXHJcbiAgICAgICAgRXhpdFxyXG4gICAgfVxyXG4gICAgZW51bSBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGlja1xyXG4gICAge1xyXG4gICAgICAgIFBsYXksXHJcbiAgICAgICAgRGVsZXRlLFxyXG4gICAgICAgIFJlbmFtZVxyXG4gICAgfVxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFRoaXMgaXMgdGhlIG1haW4gdHlwZSBmb3IgeW91ciBnYW1lXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNsYXNzIEdhbWUxIDogTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuR2FtZVxyXG4gICAge1xyXG4gICAgICAgIFNwcml0ZUZvbnQgc3ByaXRlRm9udDtcclxuICAgICAgICBHcmFwaGljc0RldmljZU1hbmFnZXIgZ3JhcGhpY3M7XHJcbiAgICAgICAgRGljdGlvbmFyeTxjaGFyLCBLZXlzW10+IGtleXMgPSBuZXcgRGljdGlvbmFyeTxjaGFyLCBLZXlzW10+KDI2KTtcclxuICAgICAgICBEaWN0aW9uYXJ5PEtleXNbXSwgY2hhcj4gY2FwaXRhbCA9IG5ldyBEaWN0aW9uYXJ5PEtleXNbXSwgY2hhcj4oMjYpO1xyXG4gICAgICAgIFNwcml0ZUJhdGNoIHNwcml0ZUJhdGNoO1xyXG4gICAgICAgIFRleHR1cmUyRCB0ZXh0dXJlO1xyXG4gICAgICAgIFRleHR1cmUyRCBidXR0b247XHJcbiAgICAgICAgc3RyaW5nIHdvcmxkX25hbWUgPSBcIlwiO1xyXG4gICAgICAgIGJvb2wgYXNraW5nX3dvcmxkX25hbWUgPSBmYWxzZTtcclxuICAgICAgICBTb3VuZEVmZmVjdCBHYW1lX092ZXI7XHJcbiAgICAgICAgU291bmRFZmZlY3QgQm91bmNlO1xyXG4gICAgICAgIHB1YmxpYyBHYW1lMSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBncmFwaGljcyA9IG5ldyBHcmFwaGljc0RldmljZU1hbmFnZXIodGhpcyk7XHJcbiAgICAgICAgICAgIENvbnRlbnQuUm9vdERpcmVjdG9yeSA9IFwiQ29udGVudFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBDYXBpdGlsaXplS2V5cygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnQga2V5c2NvdW50ID0ga2V5cy5Db3VudDtcclxuICAgICAgICAgICAgZm9yIChpbnQgbiA9IDA7IG4gPCBrZXlzY291bnQ7IG4rKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5cy5BZGQoQ2hhci5Ub1VwcGVyKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9MaXN0PGNoYXI+KGtleXMuS2V5cylbbl0pLCBuZXcgS2V5c1tdIHsgS2V5cy5MZWZ0U2hpZnQsIFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9MaXN0PEtleXNbXT4oa2V5cy5WYWx1ZXMpW25dWzBdIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FwaXRhbC5BZGQobmV3IEtleXNbXSB7IEtleXMuUmlnaHRTaGlmdCwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8S2V5c1tdPihrZXlzLlZhbHVlcylbbl1bMF0gfSwgQ2hhci5Ub1VwcGVyKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9MaXN0PGNoYXI+KGtleXMuS2V5cylbbl0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEFsbG93cyB0aGUgZ2FtZSB0byBwZXJmb3JtIGFueSBpbml0aWFsaXphdGlvbiBpdCBuZWVkcyB0byBiZWZvcmUgc3RhcnRpbmcgdG8gcnVuLlxyXG4gICAgICAgIC8vLyBUaGlzIGlzIHdoZXJlIGl0IGNhbiBxdWVyeSBmb3IgYW55IHJlcXVpcmVkIHNlcnZpY2VzIGFuZCAoIGFueSBub24tZ3JhcGhpY1xyXG4gICAgICAgIC8vLyByZWxhdGVkIGNvbnRlbnQuICBDYWxsaW5nIGJhc2UuSW5pdGlhbGl6ZSB3aWxsIGVudW1lcmF0ZSB0aHJvdWdoIGFueSBjb21wb25lbnRzXHJcbiAgICAgICAgLy8vIGFuZCBpbml0aWFsaXplIHRoZW0gYXMgd2VsbC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogQWRkIHlvdXIgaW5pdGlhbGl6YXRpb24gbG9naWMgaGVyZVxyXG4gICAgICAgICAgICBzYXZlZF9nYW1lX2Rlc3RuYXRpb24gPSBzYXZlZF9nYW1lX2NvZGU7XHJcbiAgICAgICAgICAgIGFjdHVhbENvbG9yID0gYmFsbENvbG9yO1xyXG4gICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gbXVsdGlwbGF5ZXJDb2xvcjtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2EnLCBuZXcgS2V5c1tdIHsgS2V5cy5BIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnYicsIG5ldyBLZXlzW10geyBLZXlzLkIgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdjJywgbmV3IEtleXNbXSB7IEtleXMuQyB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2QnLCBuZXcgS2V5c1tdIHsgS2V5cy5EIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnZScsIG5ldyBLZXlzW10geyBLZXlzLkUgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdmJywgbmV3IEtleXNbXSB7IEtleXMuRiB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2cnLCBuZXcgS2V5c1tdIHsgS2V5cy5HIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnaCcsIG5ldyBLZXlzW10geyBLZXlzLkggfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdpJywgbmV3IEtleXNbXSB7IEtleXMuSSB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2onLCBuZXcgS2V5c1tdIHsgS2V5cy5KIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnaycsIG5ldyBLZXlzW10geyBLZXlzLksgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdsJywgbmV3IEtleXNbXSB7IEtleXMuTCB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ20nLCBuZXcgS2V5c1tdIHsgS2V5cy5NIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnbicsIG5ldyBLZXlzW10geyBLZXlzLk4gfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdvJywgbmV3IEtleXNbXSB7IEtleXMuTyB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3AnLCBuZXcgS2V5c1tdIHsgS2V5cy5QIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgncScsIG5ldyBLZXlzW10geyBLZXlzLlEgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdyJywgbmV3IEtleXNbXSB7IEtleXMuUiB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3MnLCBuZXcgS2V5c1tdIHsgS2V5cy5TIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgndCcsIG5ldyBLZXlzW10geyBLZXlzLlQgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCd1JywgbmV3IEtleXNbXSB7IEtleXMuVSB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3YnLCBuZXcgS2V5c1tdIHsgS2V5cy5WIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgndycsIG5ldyBLZXlzW10geyBLZXlzLlcgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCd4JywgbmV3IEtleXNbXSB7IEtleXMuWCB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3knLCBuZXcgS2V5c1tdIHsgS2V5cy5ZIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgneicsIG5ldyBLZXlzW10geyBLZXlzLlogfSk7XHJcbiAgICAgICAgICAgIC8vQ2FwaXRpbGl6ZUtleXMoKTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJyAnLCBuZXcgS2V5c1tdIHsgS2V5cy5TcGFjZSB9KTtcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgU3RvcmFnZS5Jbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBTdGFydFBsYXlpbmcoR2FtZVRpbWUgZ2FtZVRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIUNhblBlcmZvcm1BY3Rpb24oKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoc291bmRfcGxheWluZ190ZW1wKVxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICBwbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgU3RvcFBsYXlpbmcoR2FtZVRpbWUgZ2FtZVRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIUNhblBlcmZvcm1BY3Rpb24oKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5TdG9wKCk7XHJcbiAgICAgICAgICAgIHBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU291bmRFZmZlY3QgTXVzaWM7XHJcbiAgICAgICAgU291bmRFZmZlY3RJbnN0YW5jZSBpbnN0YW5jZTtcclxuICAgICAgICBUZXh0dXJlMkQgYmFsbDtcclxuICAgICAgICBUZXh0dXJlMkQgYmxhY2tfYmFsbDtcclxuICAgICAgICBib29sIHNvdW5kX3BsYXlpbmdfdGVtcDtcclxuICAgICAgICAvLyBEZWJvdW5jZSBoZWxwZXIgLSB0cmFja3MgbGFzdCBhY3Rpb24gdGltZVxyXG4gICAgICAgIHByaXZhdGUgZG91YmxlIGxhc3RBY3Rpb25UaW1lID0gMDtcclxuICAgICAgICBwcml2YXRlIGJvb2wgQ2FuUGVyZm9ybUFjdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkb3VibGUgbm93ID0gQnJpZGdlLkh0bWw1LldpbmRvdy5QZXJmb3JtYW5jZS5Ob3coKTtcclxuICAgICAgICAgICAgaWYgKG5vdyAtIGxhc3RBY3Rpb25UaW1lID4gMjUwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYXN0QWN0aW9uVGltZSA9IG5vdztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMb2FkQ29udGVudCB3aWxsIGJlIGNhbGxlZCBvbmNlIHBlciBnYW1lIGFuZCBpcyB0aGUgcGxhY2UgdG8gbG9hZFxyXG4gICAgICAgIC8vLyBhbGwgb2YgeW91ciBjb250ZW50LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgTG9hZENvbnRlbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3ByaXRlRm9udCA9IENvbnRlbnQuTG9hZDxTcHJpdGVGb250PihcIkFyaWFsXCIpO1xyXG4gICAgICAgICAgICBiYWxsID0gQ29udGVudC5Mb2FkPFRleHR1cmUyRD4oXCJiYWxsXCIpO1xyXG4gICAgICAgICAgICBibGFja19iYWxsID0gQ29udGVudC5Mb2FkPFRleHR1cmUyRD4oXCJibGFjayBiYWxsXCIpO1xyXG4gICAgICAgICAgICBHYW1lX092ZXIgPSBDb250ZW50LkxvYWQ8U291bmRFZmZlY3Q+KFwiUmVqZWN0IDJcIik7XHJcbiAgICAgICAgICAgIEJvdW5jZSA9IENvbnRlbnQuTG9hZDxTb3VuZEVmZmVjdD4oXCJib3VuY2VcIik7XHJcbiAgICAgICAgICAgIE11c2ljID0gQ29udGVudC5Mb2FkPFNvdW5kRWZmZWN0PihcIm9uIHRoZSBmbG9vclwiKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBNdXNpYy5DcmVhdGVJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBidXR0b24gPSBDb250ZW50LkxvYWQ8VGV4dHVyZTJEPihcIkJ1dHRvblwiKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFNwcml0ZUJhdGNoLCB3aGljaCBjYW4gYmUgdXNlZCB0byBkcmF3IHRleHR1cmVzLlxyXG4gICAgICAgICAgICBzcHJpdGVCYXRjaCA9IG5ldyBTcHJpdGVCYXRjaChHcmFwaGljc0RldmljZSk7XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZS5Jc0xvb3BlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuSXNNb3VzZVZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoRW52aXJvbm1lbnQuR2V0Q29tbWFuZExpbmVBcmdzKCkuTGVuZ3RoID4gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuTGFzdDxzdHJpbmc+KEVudmlyb25tZW50LkdldENvbW1hbmRMaW5lQXJncygpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVE9ETzogdXNlIHRoaXMuQ29udGVudCB0byBsb2FkIHlvdXIgZ2FtZSBjb250ZW50IGhlcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGxsSW1wb3J0IG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlclxyXG4gICAgICAgIC8vIFtEbGxJbXBvcnQoXCJ1c2VyMzIuZGxsXCIsIENoYXJTZXQgPSBDaGFyU2V0LkF1dG8sIEV4YWN0U3BlbGxpbmcgPSB0cnVlLCBDYWxsaW5nQ29udmVudGlvbiA9IENhbGxpbmdDb252ZW50aW9uLldpbmFwaSldXHJcbiAgICAgICAgLy8gcHVibGljIHN0YXRpYyBleHRlcm4gc2hvcnQgR2V0S2V5U3RhdGUoaW50IGtleUNvZGUpO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2hvcnQgR2V0S2V5U3RhdGUoaW50IGtleUNvZGUpIHsgcmV0dXJuIDA7IH0gLy8gU3R1YlxyXG4gICAgICAgIHByb3RlY3RlZCBib29sIEJlaW5nUHJlc3NlZChLZXlzW10ga2V5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm9vbCByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3JlYWNoIChLZXlzIGsgaW4ga2V5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleVVwKGspKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIFNhdmVUbyhzdHJpbmcgc2F2aW5nZGlyZWN0b3J5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3RvcmFnZS5DcmVhdGVEaXJlY3Rvcnkoc2F2aW5nZGlyZWN0b3J5KTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvUGxheWluZ1NvdW5kLnR4dFwiLCAoaW5zdGFuY2UuU3RhdGUgPT0gU291bmRTdGF0ZS5QbGF5aW5nKS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvRnVsbFNjcmVlbi50eHRcIiwgZ3JhcGhpY3MuSXNGdWxsU2NyZWVuLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9kaXN0YW5jZS50eHRcIiwgZGlzdGFuY2UuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIC8vIFNraXAgdGV4dHVyZSBzYXZlIC0gbm90IHN1cHBvcnRlZCBpbiBicm93c2VyLCB3aWxsIHVzZSBkZWZhdWx0IGJhbGxcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvTW91c2VNb3ZlQmFzZVBsYXllci50eHRcIiwgTW91c2VNb3ZlQmFzZVBsYXllci5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvRm9sbG93QmFja3JvdW5kQ29sb3IudHh0XCIsIEZvbGxvd0JhY2tncm91bmRDb2xvci5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvY2xlYXIudHh0XCIsIGNsZWFyLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZC50eHRcIiwgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2NvbnRyb2xzZW5hYmxlZC50eHRcIiwgY29udHJvbHNlbmFibGVkLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9lbmFibGVkLnR4dFwiLCBlbmFibGVkLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZS50eHRcIiwgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL211bHRpcGxheWVyLnR4dFwiLCBtdWx0aXBsYXllci5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXJ4LnR4dFwiLCBtdWx0aXBsYXllcnguVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL211bHRpcGxheWVyeS50eHRcIiwgbXVsdGlwbGF5ZXJ5LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9uYW1lLnR4dFwiLCBuYW1lKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvd29ybGRfbmFtZS50eHRcIiwgd29ybGRfbmFtZSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL211bHRpcGxheWVydngudHh0XCIsIG11bHRpcGxheWVydnguVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2VkZ2VvZnNjcmVlbmxvc2UudHh0XCIsIGVkZ2VvZnNjcmVlbmxvc2UuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2JvdW5jeS50eHRcIiwgYm91bmN5LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi94LnR4dFwiLCB4LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi95LnR4dFwiLCB5LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi92eC50eHRcIiwgdnguVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL3Z5LnR4dFwiLCB2eS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvQ3B1X011bHRpcGxheWVyLnR4dFwiLCBDcHVfTXVsdGlwbGF5ZXIuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL0NwdV92eC50eHRcIiwgQ3B1X3Z4LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9DcHVfdnkudHh0XCIsIENwdV92eS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvQ3B1X3kudHh0XCIsIENwdV95LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9DcHVfeC50eHRcIiwgQ3B1X3guVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2RyYWcudHh0XCIsIHhkcmFnLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9hY2NlbC50eHRcIiwgYWNjZWwuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2dyYXZpdHkudHh0XCIsIGdyYXZpdHkuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2dyYXZpdHlfZWZmZWN0LnR4dFwiLCBncmF2aXR5X2VmZmVjdC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvYmx1ZS50eHRcIiwgYmx1ZS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZ2FtZV9vdmVycmVkLnR4dFwiLCBnYW1lX292ZXJlZC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvU3RvcFdoZW5Ob3RNb3ZpbmcudHh0XCIsIFN0b3BXaGVuTm90TW92aW5nLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9VcGRhdGVCYWNrZ3JvdW5kQ29sb3IudHh0XCIsIFVwZGF0ZUJhY2tncm91bmRDb2xvci5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhci50eHRcIiwgTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhci5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvYWxwaGEudHh0XCIsIGFscGhhLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9CYWNrcm91bmRDb2xvci50eHRcIiwgQmFja3JvdW5kQ29sb3IuQSArIFwiXFxuXCIgKyBCYWNrcm91bmRDb2xvci5CICsgXCJcXG5cIiArIEJhY2tyb3VuZENvbG9yLkcgKyBcIlxcblwiICsgQmFja3JvdW5kQ29sb3IuUik7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2JhbGxDb2xvci50eHRcIiwgYmFsbENvbG9yLkEgKyBcIlxcblwiICsgYmFsbENvbG9yLkIgKyBcIlxcblwiICsgYmFsbENvbG9yLkcgKyBcIlxcblwiICsgYmFsbENvbG9yLlIpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9hY3R1YWxDb2xvci50eHRcIiwgYWN0dWFsQ29sb3IuQSArIFwiXFxuXCIgKyBhY3R1YWxDb2xvci5CICsgXCJcXG5cIiArIGFjdHVhbENvbG9yLkcgKyBcIlxcblwiICsgYWN0dWFsQ29sb3IuUik7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL211bHRpcGxheWVyQ29sb3IudHh0XCIsIG11bHRpcGxheWVyQ29sb3IuQSArIFwiXFxuXCIgKyBtdWx0aXBsYXllckNvbG9yLkIgKyBcIlxcblwiICsgbXVsdGlwbGF5ZXJDb2xvci5HICsgXCJcXG5cIiArIG11bHRpcGxheWVyQ29sb3IuUik7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2FjdHVhbE11bHRpcGxheWVyQ29sb3IudHh0XCIsIGFjdHVhbE11bHRpcGxheWVyQ29sb3IuQSArIFwiXFxuXCIgKyBhY3R1YWxNdWx0aXBsYXllckNvbG9yLkIgKyBcIlxcblwiICsgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvci5HICsgXCJcXG5cIiArIGFjdHVhbE11bHRpcGxheWVyQ29sb3IuUik7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuSW5jcmVtZW50U2F2aW5nc0NvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIExvYWQoc3RyaW5nIHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsb29raW5nX2F0X3NhdmVkX2dhbWVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIE1vdXNlTW92ZUJhc2VQbGF5ZXIgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9Nb3VzZU1vdmVCYXNlUGxheWVyLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHNvdW5kX3BsYXlpbmdfdGVtcCA9IFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL1BsYXlpbmdTb3VuZC50eHRcIikgPT0gXCJUcnVlXCI7XHJcbiAgICAgICAgICAgIGZ1bGxfc2NyZWVuX3RlbXAgPSBTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9GdWxsU2NyZWVuLnR4dFwiKSA9PSBcIlRydWVcIjtcclxuICAgICAgICAgICAgaWYgKCFTdG9yYWdlLkZpbGVFeGlzdHMocyArIFwiL2Rpc3RhbmNlLnR4dFwiKSlcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHMgKyBcIi9kaXN0YW5jZS50eHRcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAvLyBUZXh0dXJlIGxvYWRpbmcgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIC0gdXNlIGRlZmF1bHQgYmFsbFxyXG4gICAgICAgICAgICB0ZXh0dXJlID0gYmFsbDtcclxuICAgICAgICAgICAgZGlzdGFuY2UgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9kaXN0YW5jZS50eHRcIikpO1xyXG4gICAgICAgICAgICBGb2xsb3dCYWNrZ3JvdW5kQ29sb3IgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9Gb2xsb3dCYWNrcm91bmRDb2xvci50eHRcIikpO1xyXG4gICAgICAgICAgICBjbGVhciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2NsZWFyLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQudHh0XCIpKTtcclxuICAgICAgICAgICAgY29udHJvbHNlbmFibGVkID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvY29udHJvbHNlbmFibGVkLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGVuYWJsZWQgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9lbmFibGVkLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUudHh0XCIpKTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9tdWx0aXBsYXllci50eHRcIikpO1xyXG4gICAgICAgICAgICBtdWx0aXBsYXllcnggPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9tdWx0aXBsYXllcngudHh0XCIpKTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvbXVsdGlwbGF5ZXJ5LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGFza2luZ193b3JsZF9uYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL211bHRpcGxheWVydngudHh0XCIpKTtcclxuICAgICAgICAgICAgZWRnZW9mc2NyZWVubG9zZSA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2VkZ2VvZnNjcmVlbmxvc2UudHh0XCIpKTtcclxuICAgICAgICAgICAgYm91bmN5ID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvYm91bmN5LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHggPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi94LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL3kudHh0XCIpKTtcclxuICAgICAgICAgICAgdnggPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi92eC50eHRcIikpO1xyXG4gICAgICAgICAgICB2eSA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL3Z5LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIENwdV9NdWx0aXBsYXllciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0NwdV9NdWx0aXBsYXllci50eHRcIikpO1xyXG4gICAgICAgICAgICBDcHVfdnggPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9DcHVfdngudHh0XCIpKTtcclxuICAgICAgICAgICAgQ3B1X3Z5ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvQ3B1X3Z5LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIENwdV95ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvQ3B1X3kudHh0XCIpKTtcclxuICAgICAgICAgICAgQ3B1X3ggPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9DcHVfeC50eHRcIikpO1xyXG4gICAgICAgICAgICB4ZHJhZyA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2RyYWcudHh0XCIpKTtcclxuICAgICAgICAgICAgeWRyYWcgPSB4ZHJhZztcclxuICAgICAgICAgICAgYWNjZWwgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9hY2NlbC50eHRcIikpO1xyXG4gICAgICAgICAgICBncmF2aXR5ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvZ3Jhdml0eS50eHRcIikpO1xyXG4gICAgICAgICAgICBncmF2aXR5X2VmZmVjdCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2dyYXZpdHlfZWZmZWN0LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGJsdWUgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9ibHVlLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGdhbWVfb3ZlcmVkID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvZ2FtZV9vdmVycmVkLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIFN0b3BXaGVuTm90TW92aW5nID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvU3RvcFdoZW5Ob3RNb3ZpbmcudHh0XCIpKTtcclxuICAgICAgICAgICAgVXBkYXRlQmFja2dyb3VuZENvbG9yID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvVXBkYXRlQmFja2dyb3VuZENvbG9yLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9NdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGFscGhhID0gYnl0ZS5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9hbHBoYS50eHRcIikpO1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBCYWNrcm91bmRDb2xvcnMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvQmFja3JvdW5kQ29sb3IudHh0XCIpO1xyXG4gICAgICAgICAgICBCYWNrcm91bmRDb2xvciA9IG5ldyBDb2xvcihieXRlLlBhcnNlKEJhY2tyb3VuZENvbG9yc1szXSksIGJ5dGUuUGFyc2UoQmFja3JvdW5kQ29sb3JzWzJdKSwgYnl0ZS5QYXJzZShCYWNrcm91bmRDb2xvcnNbMV0pLCBieXRlLlBhcnNlKEJhY2tyb3VuZENvbG9yc1swXSkpO1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBiYWxsQ29sb3JzID0gU3RvcmFnZS5SZWFkQWxsTGluZXMocyArIFwiL2JhbGxDb2xvci50eHRcIik7XHJcbiAgICAgICAgICAgIGJhbGxDb2xvciA9IG5ldyBDb2xvcihieXRlLlBhcnNlKGJhbGxDb2xvcnNbM10pLCBieXRlLlBhcnNlKGJhbGxDb2xvcnNbMl0pLCBieXRlLlBhcnNlKGJhbGxDb2xvcnNbMV0pLCBieXRlLlBhcnNlKGJhbGxDb2xvcnNbMF0pKTtcclxuICAgICAgICAgICAgc3RyaW5nW10gYWN0dWFsQ29sb3JzID0gU3RvcmFnZS5SZWFkQWxsTGluZXMocyArIFwiL2FjdHVhbENvbG9yLnR4dFwiKTtcclxuICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBuZXcgQ29sb3IoYnl0ZS5QYXJzZShhY3R1YWxDb2xvcnNbM10pLCBieXRlLlBhcnNlKGFjdHVhbENvbG9yc1syXSksIGJ5dGUuUGFyc2UoYWN0dWFsQ29sb3JzWzFdKSwgYnl0ZS5QYXJzZShhY3R1YWxDb2xvcnNbMF0pKTtcclxuICAgICAgICAgICAgc3RyaW5nW10gbXVsdGlwbGF5ZXJDb2xvcnMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvbXVsdGlwbGF5ZXJDb2xvci50eHRcIik7XHJcbiAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBuZXcgQ29sb3IoYnl0ZS5QYXJzZShtdWx0aXBsYXllckNvbG9yc1szXSksIGJ5dGUuUGFyc2UobXVsdGlwbGF5ZXJDb2xvcnNbMl0pLCBieXRlLlBhcnNlKG11bHRpcGxheWVyQ29sb3JzWzFdKSwgYnl0ZS5QYXJzZShtdWx0aXBsYXllckNvbG9yc1swXSkpO1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBhY3R1YWxNdWx0aXBsYXllckNvbG9ycyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi9hY3R1YWxNdWx0aXBsYXllckNvbG9yLnR4dFwiKTtcclxuICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IG5ldyBDb2xvcihieXRlLlBhcnNlKGFjdHVhbE11bHRpcGxheWVyQ29sb3JzWzNdKSwgYnl0ZS5QYXJzZShhY3R1YWxNdWx0aXBsYXllckNvbG9yc1syXSksIGJ5dGUuUGFyc2UoYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcnNbMV0pLCBieXRlLlBhcnNlKGFjdHVhbE11bHRpcGxheWVyQ29sb3JzWzBdKSk7XHJcbiAgICAgICAgICAgIGFza2luZ193b3JsZF9uYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gUHJvY2VzcyBub3QgYXZhaWxhYmxlIGluIGJyb3dzZXIgLSBqdXN0IGV4aXQgdGhlIGdhbWVcclxuICAgICAgICAgICAgdGhpcy5FeGl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5sb2FkQ29udGVudCB3aWxsIGJlIGNhbGxlZCBvbmNlIHBlciBnYW1lIGFuZCBpcyB0aGUgcGxhY2UgdG8gdW5sb2FkXHJcbiAgICAgICAgLy8vIGFsbCBjb250ZW50LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgVW5sb2FkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBVbmxvYWQgYW55IG5vbiBDb250ZW50TWFuYWdlciBjb250ZW50IGhlcmVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQWxsb3dzIHRoZSBnYW1lIHRvIHJ1biBsb2dpYyBzdWNoIGFzIHVwZGF0aW5nIHRoZSB3b3JsZCxcclxuICAgICAgICAvLy8gY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMsIGdhdGhlcmluZyBpbnB1dCwgYW5kIHBsYXlpbmcgYXVkaW8uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJnYW1lVGltZVwiPlByb3ZpZGVzIGEgc25hcHNob3Qgb2YgdGltaW5nIHZhbHVlcy48L3BhcmFtPlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIFVwZGF0ZShHYW1lVGltZSBnYW1lVGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEFsbG93cyB0aGUgZ2FtZSB0byBleGl0XHJcbiAgICAgICAgICAgIGlmIChHYW1lUGFkLkdldFN0YXRlKFBsYXllckluZGV4Lk9uZSkuQnV0dG9ucy5CYWNrID09IEJ1dHRvblN0YXRlLlByZXNzZWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkV4aXQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCB5b3VyIHVwZGF0ZSBsb2dpYyBoZXJlXHJcblxyXG4gICAgICAgICAgICBiYXNlLlVwZGF0ZShnYW1lVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvb2wgY29tbWFfcHJlc3NlZF9sYXN0X2ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBsb29raW5nX2F0X3NhdmVkX2dhbWVzID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBNb3VzZU1vdmVCYXNlUGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBGb2xsb3dCYWNrZ3JvdW5kQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICBib29sIGNsZWFyID0gdHJ1ZTtcclxuICAgICAgICBib29sIG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBib29sIHdpbmRvd3NfcHJlc3NlZF9sYXN0X2ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBhc2tpbmdfbmFtZSA9IHRydWU7XHJcbiAgICAgICAgYm9vbCBjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJvb2wgZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgYm9vbCBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICBib29sIHBsYXllZF9tdXNpY19sYXN0X2ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgZmxvYXQgbXVsdGlwbGF5ZXJ4ID0gMGY7XHJcbiAgICAgICAgZmxvYXQgbXVsdGlwbGF5ZXJ5ID0gMGY7XHJcbiAgICAgICAgYm9vbCBNdWx0aXBsYXllcl9Nb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHN0cmluZyBuYW1lID0gXCJcIjtcclxuICAgICAgICBmbG9hdCBtdWx0aXBsYXllcnZ4ID0gMGY7XHJcbiAgICAgICAgYm9vbCBmcm9tX3NhdmVkX2dhbWVfY29kZSA9IGZhbHNlO1xyXG4gICAgICAgIGZsb2F0IG11bHRpcGxheWVydnkgPSAwZjtcclxuICAgICAgICBib29sIGVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICBib29sIGJvdW5jeSA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgc3VidHJhY3RfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBhdXRvc2F2ZSA9IHRydWU7XHJcbiAgICAgICAgc3RyaW5nW10gd29ybGRfbmFtZXM7XHJcbiAgICAgICAgc3RyaW5nW10gbmFtZXM7XHJcbiAgICAgICAgc3RyaW5nIHNhdmVkX2dhbWVfY29kZSA9IFwiSy53LnR5bi5oZmxzb3IuLi50aGdyXCI7XHJcbiAgICAgICAgc3RyaW5nIHNhdmVkX2dhbWVfZGVzdG5hdGlvbjtcclxuICAgICAgICBmbG9hdCB4ID0gMDtcclxuICAgICAgICBmbG9hdCB5ID0gMDtcclxuICAgICAgICBmbG9hdCB2eCA9IDA7XHJcbiAgICAgICAgZmxvYXQgc3BlZWQgPSAwO1xyXG4gICAgICAgIGZsb2F0IHZ5ID0gMDtcclxuICAgICAgICBib29sIENwdV9NdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgIGZsb2F0IENwdV92eCA9IDA7XHJcbiAgICAgICAgZmxvYXQgQ3B1X3Z5ID0gMDtcclxuICAgICAgICBmbG9hdCBDcHVfeCA9IDA7XHJcbiAgICAgICAgZmxvYXQgQ3B1X3kgPSAwO1xyXG4gICAgICAgIGZsb2F0IHhkcmFnID0gMC45OWY7XHJcbiAgICAgICAgZmxvYXQgeWRyYWcgPSAwLjk5ZjtcclxuICAgICAgICBmbG9hdCBhY2NlbCA9IDAuMWY7XHJcbiAgICAgICAgZmxvYXQgZ3Jhdml0eSA9IDBmO1xyXG4gICAgICAgIGZsb2F0IGdyYXZpdHlfZWZmZWN0ID0gMGY7XHJcbiAgICAgICAgZmxvYXQgYmx1ZSA9IDFmO1xyXG4gICAgICAgIGJvb2wgcGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgZ2FtZV9vdmVyZWQgPSBmYWxzZTtcclxuICAgICAgICBib29sIG1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBTdG9wV2hlbk5vdE1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgVXBkYXRlQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcclxuICAgICAgICBWZWN0b3IyW10gYnV0dG9ucyA9IG5ldyBWZWN0b3IyW10geyBuZXcgVmVjdG9yMig5Mi41ZiwgNDIuNWYpLCBuZXcgVmVjdG9yMigxNDIuNWYsIDExN2YpLCBuZXcgVmVjdG9yMig5Mi41ZiwgMTYwZikgfTtcclxuICAgICAgICBWZWN0b3IyW10gYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGUgPSBuZXcgVmVjdG9yMltdIHsgbmV3IFZlY3RvcjIoOTIuNWYsIDQyLjVmKSwgbmV3IFZlY3RvcjIoMTQyLjVmLCAxMTdmKSwgbmV3IFZlY3RvcjIoOTIuNWYsIDE2MGYpIH07XHJcbiAgICAgICAgYm9vbCBNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBDcHVfTW92ZWQgPSBmYWxzZTtcclxuICAgICAgICBieXRlIGFscGhhID0gMjU1O1xyXG4gICAgICAgIHN0cmluZ1tdIHNhdmVkX2dhbWVzO1xyXG4gICAgICAgIENvbG9yIEJhY2tyb3VuZENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgQ29sb3IgYWN0dWFsQ29sb3I7XHJcbiAgICAgICAgQ29sb3IgYmFsbENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgQ29sb3IgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgIENvbG9yIGFjdHVhbE11bHRpcGxheWVyQ29sb3I7XHJcbiAgICAgICAgUmFuZG9tIHJhbmRvbSA9IG5ldyBSYW5kb20oKTtcclxuICAgICAgICBib29sIExfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgZmxvYXQgZGlzdGFuY2UgPSAwZjtcclxuICAgICAgICBib29sIE11bHRpcGx5X1ByZXNzZWRfTGFzdF9GcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIEJsZW5kU3RhdGUgYW5kIFNwcml0ZVNvcnRNb2RlIG5vdCBzdXBwb3J0ZWQgaW4gQnJpZGdlIC0gdXNpbmcgZGVmYXVsdHNcclxuICAgICAgICBpbnQgc2VjcyA9IDA7XHJcbiAgICAgICAgYm9vbCBmdWxsX3NjcmVlbl90ZW1wID0gZmFsc2U7XHJcbiAgICAgICAgZmxvYXQgbWF4aW11biA9IDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIGZsb2F0IE1ha2VGbG9hdFBlcmZlY3QoZmxvYXQgaW5wdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKChmbG9hdClNYXRoLlJvdW5kKGlucHV0ICogMTAwKSAvIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIFNhdmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHNhdmluZ2RpcmVjdG9yeSA9IFN0b3JhZ2UuR2V0U2F2aW5nc0NvdW50KCkuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgU2F2ZVRvKHNhdmluZ2RpcmVjdG9yeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9uRXhpdGluZyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXJcclxuICAgICAgICAvLyBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbkV4aXRpbmcoT2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGFyZ3MpXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZiAocGxheWluZyAmJiBhdXRvc2F2ZSlcclxuICAgICAgICAvLyAgICAgICAgIFNhdmUoKTtcclxuICAgICAgICAvLyAgICAgYmFzZS5PbkV4aXRpbmcoc2VuZGVyLCBhcmdzKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGZsb2F0IE1ha2VHcmF2aXR5UGVyZmVjdChmbG9hdCBpbnB1dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKGZsb2F0KU1hdGguUm91bmQoaW5wdXQgKiAxMDAwMCkgLyAxMDAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIHRhZywgbGFzdF90YWc7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBnYW1lIHNob3VsZCBkcmF3IGl0c2VsZi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImdhbWVUaW1lXCI+UHJvdmlkZXMgYSBzbmFwc2hvdCBvZiB0aW1pbmcgdmFsdWVzLjwvcGFyYW0+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgRHJhdyhHYW1lVGltZSBnYW1lVGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChhc2tpbmdfd29ybGRfbmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEZXZpY2UuQ2xlYXIoQ29sb3IuUmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGxheWluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQWRkIHlvdXIgZHJhd2luZyBjb2RlIGhlcmVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVcGRhdGVCYWNrZ3JvdW5kQ29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tyb3VuZENvbG9yID0gbmV3IENvbG9yKChmbG9hdCkoTWF0aC5Db3MoeCAqIDAuMDFmKSArIDEpIC8gMiwgKGZsb2F0KShNYXRoLkNvcyh5ICogMC4wMWYpICsgMSkgLyAyLCBibHVlLCBhbHBoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3JhcGhpY3NEZXZpY2UuQ2xlYXIoQmFja3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoRm9sbG93QmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBuZXcgQ29sb3IoKGZsb2F0KShNYXRoLkNvcyh4ICogMC4wMWYpICsgMSkgLyAyLCAoZmxvYXQpKE1hdGguQ29zKHkgKiAwLjAxZikgKyAxKSAvIDIsIGJsdWUsIGFscGhhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gYmFsbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KHRleHR1cmUsIG5ldyBWZWN0b3IyKHgsIHkpLCBiYWxsQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiU3BlZWQ6IFwiICsgc3BlZWQgKyBcInBpeC9mcmFtZVwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAtIDI1MCwgMCksIENvbG9yLkdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIk1heGltdW4gU3BlZWQ6IFwiICsgbWF4aW11biArIFwicGl4L2ZyYW1lXCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC0gMjUwLCAxNSksIENvbG9yLkdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkVsZXZhdGlvbjogXCIgKyAoLXkgKyBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5IZWlnaHQpICsgXCJwaXhcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLSAyNTAsIDMwKSwgQ29sb3IuR3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiRGlzdGFuY2U6IFwiICsgZGlzdGFuY2UgKyBcInBpeFwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAtIDI1MCwgNDUpLCBDb2xvci5HcmVlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Jhdml0eSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkdyYXZpdHk6IFwiICsgTWFrZUdyYXZpdHlQZXJmZWN0KGdyYXZpdHkpICsgXCJwaXgvZnJhbWVcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLSAyNTAsIDYwKSwgQ29sb3IuR3JlZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJhbGwsIG5ldyBWZWN0b3IyKG11bHRpcGxheWVyeCwgbXVsdGlwbGF5ZXJ5KSwgbXVsdGlwbGF5ZXJDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENwdV9NdWx0aXBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhiYWxsLCBuZXcgVmVjdG9yMihDcHVfeCwgQ3B1X3kpLCBDb2xvci5XaGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHggKz0gdng7XHJcbiAgICAgICAgICAgICAgICAgICAgeSArPSB2eTtcclxuICAgICAgICAgICAgICAgICAgICB5ICs9IGdyYXZpdHlfZWZmZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDcHVfTXVsdGlwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcHVfTW92ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZ4ID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z4ICs9IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2eCA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eCAtPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV9Nb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZ5ID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z5ICs9IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2eSA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eSAtPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV9Nb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3ggKz0gQ3B1X3Z4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcHVfeSArPSBDcHVfdnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDcHVfeCA+PSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z4ID0gQ3B1X3Z4IC0gKENwdV92eCAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3ggPSAtdGV4dHVyZS5XaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChDcHVfeCA8IC10ZXh0dXJlLldpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eCA9IChmbG9hdClNYXRoLkFicyhDcHVfdngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3ggPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENwdV95ID49IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z5ID0gQ3B1X3Z5IC0gKENwdV92eSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3kgPSAtdGV4dHVyZS5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQ3B1X3kgPCAtdGV4dHVyZS5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z5ID0gKGZsb2F0KU1hdGguQWJzKENwdV92eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfeSA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFN0b3BXaGVuTm90TW92aW5nICYmICFDcHVfTW92ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eSAqPSB5ZHJhZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z4ICo9IHhkcmFnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnkgKz0gZ3Jhdml0eTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIW11bHRpcGxheWVyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sc2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCAtPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggKz0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVXApIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5IC09IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkRvd24pIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5ICs9IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCArPSBtdWx0aXBsYXllcnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSArPSBtdWx0aXBsYXllcnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sc2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBsYXllcl9Nb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4IC09IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggLT0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBsYXllcl9Nb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggKz0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCArPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGxheWVyX01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlVwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSAtPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5XKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5IC09IDAuMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbGF5ZXJfTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRG93bikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgKz0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSArPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGxheWVyX01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRTaGlmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHRTaGlmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZW9mc2NyZWVubG9zZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0Q29udHJvbCkgJiYgIUtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRDb250cm9sKSAmJiBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGFzdF90YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA9ICF0YWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF90YWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfdGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodENvbnRyb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5DYXBzTG9jaykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gbmV3IENvbG9yKHJhbmRvbS5OZXh0KDI1NiksIHJhbmRvbS5OZXh0KDI1NiksIHJhbmRvbS5OZXh0KDI1NiksIHJhbmRvbS5OZXh0KDI1NikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gbXVsdGlwbGF5ZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GNSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLlRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjYpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBhY3R1YWxNdWx0aXBsYXllckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLkJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuQmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllckNvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLkhvdFBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5Ib3RQaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkYxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjExKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRGVsZXRlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyppZiAoTWF0aC5TcXJ0KChtdWx0aXBsYXllcnggLSB4KSAqIChtdWx0aXBsYXllcnggLSB4KSkgKyAoKG11bHRpcGxheWVyeSAtIHkpICogKG11bHRpcGxheWVyeSAtIHkpKSA8PSAxNilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggLT0gLXZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgLT0gLXZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IC1tdWx0aXBsYXllcnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IC1tdWx0aXBsYXllcnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyeCA+PSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IG11bHRpcGxheWVydnggLSAobXVsdGlwbGF5ZXJ2eCAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IC10ZXh0dXJlLldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG11bHRpcGxheWVyeCA8IC10ZXh0dXJlLldpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAoZmxvYXQpTWF0aC5BYnMobXVsdGlwbGF5ZXJ2eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllcnkgPj0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gbXVsdGlwbGF5ZXJ2eSAtIChtdWx0aXBsYXllcnZ5ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gLXRleHR1cmUuSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG11bHRpcGxheWVyeSA8IC10ZXh0dXJlLkhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gKGZsb2F0KU1hdGguQWJzKG11bHRpcGxheWVydnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0b3BXaGVuTm90TW92aW5nICYmICFNdWx0aXBsYXllcl9Nb3ZlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSAqPSB5ZHJhZztcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ICo9IHhkcmFnO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgKz0gZ3Jhdml0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQ2KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDYpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcFdoZW5Ob3RNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5ENykgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ3KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3BXaGVuTm90TW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQ0KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkNSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5ENSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlQpICYmICFLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRDb250cm9sKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSByYW5kb20uTmV4dCgwLCBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHJhbmRvbS5OZXh0KDAsIEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuQykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgYSA9IHJhbmRvbS5OZXh0KDAsIDI1Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBiID0gcmFuZG9tLk5leHQoMCwgMjU2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IGMgPSByYW5kb20uTmV4dCgwLCAyNTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgZCA9IHJhbmRvbS5OZXh0KDAsIDI1Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IG5ldyBDb2xvcihhLCBiLCBjLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IG5ldyBDb2xvcihhLCBiLCBjLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IGEgPSByYW5kb20uTmV4dCgwLCAyNTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgYiA9IHJhbmRvbS5OZXh0KDAsIDI1Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBjID0gcmFuZG9tLk5leHQoMCwgMjU2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IGQgPSByYW5kb20uTmV4dCgwLCAyNTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBuZXcgQ29sb3IoYSwgYiwgYywgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBuZXcgQ29sb3IoYSwgYiwgYywgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbVF1b3RlcykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IG5ldyBDb2xvcihyYW5kb20uTmV4dCgwLCAyNTYpLCByYW5kb20uTmV4dCgwLCAyNTYpLCByYW5kb20uTmV4dCgwLCAyNTYpLCBiYWxsQ29sb3IuQSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IGFjdHVhbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5NKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkkpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gQ29sb3IuVHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gYWN0dWFsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlApKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoYmFsbENvbG9yID09IENvbG9yLlRyYW5zcGFyZW50KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gQ29sb3IuSG90UGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IGJhbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuWCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eV9lZmZlY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVzY2FwZSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b3NhdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuU3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfd29ybGRfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhcGhpY3MuSXNGdWxsU2NyZWVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5Ub2dnbGVGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVib3VuY2UgaGFuZGxlZCBieSBidXR0b24gc3RhdGUgdHJhY2tpbmdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuY3kgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5aKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5jeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTF9QcmVzc2VkX0xhc3RfRnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4ID0gLXZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgPSAtdnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExfUHJlc3NlZF9MYXN0X0ZyYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlVcChLZXlzLkwpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTF9QcmVzc2VkX0xhc3RfRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5ICs9IDAuMDAxZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShncmF2aXR5IDw9IDApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5IC09IDAuMDAxZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5RKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkopKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeGRyYWcgPSAxZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWRyYWcgPSAxZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5TcGFjZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyYXBoaWNzLklzRnVsbFNjcmVlbiA9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuVG9nZ2xlRnVsbFNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlID0gYmFsbDtcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVuID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgQ3B1X01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgQ3B1X011bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgQ3B1X3Z4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBDcHVfdnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVfb3ZlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuU3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFN0b3BXaGVuTm90TW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHhkcmFnID0gMC45OWY7XHJcbiAgICAgICAgICAgICAgICAgICAgeWRyYWcgPSAwLjk5ZjtcclxuICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VsID0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5X2VmZmVjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBib3VuY3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBibHVlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBlZGdlb2ZzY3JlZW5sb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvd0JhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0QWx0KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0QWx0KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeGRyYWcgPSAwLjk5ZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWRyYWcgPSAwLjk5ZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkspKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGJsdWUgPT0gMjU1KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1ZSArPSAxMjcgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GKSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCEoYmx1ZSA9PSAwKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdWUgLT0gMTI3IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5ZKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbXVsdGlwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0U2hpZnQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHRTaGlmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VvZnNjcmVlbmxvc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdENvbnRyb2wpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHRDb250cm9sKSkgJiYgIUtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5HKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IENvbG9yLkJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IENvbG9yLkJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkYyKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlb2ZzY3JlZW5sb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVfb3ZlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkYzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1QZXJpb2QpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTW91c2VNb3ZlQmFzZVBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbVF1ZXN0aW9uKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlTW92ZUJhc2VQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRGl2aWRlKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZUJhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrcm91bmRDb2xvciA9IG5ldyBDb2xvcihyYW5kb20uTmV4dCgwLCAyNTYpLCByYW5kb20uTmV4dCgwLCAyNTYpLCByYW5kb20uTmV4dCgwLCAyNTYpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVGFiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1NaW51cykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1QbHVzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjEyKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bUxvY2spKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkhvbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EMykgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2eCA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4IC09IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZ4ID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggKz0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZ5IDwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgLT0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodnkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSArPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EMCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQwKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VsICs9IDAuMDAxZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDEpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkMSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlbCAtPSAwLjAwMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NlbCA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EMikgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQyKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VsID0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDgpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkOCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCByYW5kb20uTmV4dCgwLCAyNTYpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gYWN0dWFsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDkpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkOSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb2xsb3dCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5CYWNrKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvbGxvd0JhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2VNb3ZlQmFzZVBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IE1vdXNlLkdldFN0YXRlKCkuWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNb3VzZS5HZXRTdGF0ZSgpLlk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSBNb3VzZS5HZXRTdGF0ZSgpLlg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSBNb3VzZS5HZXRTdGF0ZSgpLlk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuUmlnaHRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTW91c2VNb3ZlQmFzZVBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IE1vdXNlLkdldFN0YXRlKCkuWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNb3VzZS5HZXRTdGF0ZSgpLlk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSBNb3VzZS5HZXRTdGF0ZSgpLlg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSBNb3VzZS5HZXRTdGF0ZSgpLlk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUGFnZVVwKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZUJhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5QYWdlRG93bikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbmQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja3JvdW5kQ29sb3IgPSBDb2xvci5PcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZUJhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1PcGVuQnJhY2tldHMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gQ29sb3IuT3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gQ29sb3IuT3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1DbG9zZUJyYWNrZXRzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvci5BID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yLkEgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbUJhY2tzbGFzaCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IuQSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yLkErKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoT3ZlcmZsb3dFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtU2VtaWNvbG9uKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvci5BLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvci5BLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKE92ZXJmbG93RXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlN1YnRyYWN0KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3VidHJhY3RfUHJlc3NlZF9MYXN0X0ZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuVG9nZ2xlRnVsbFNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0cmFjdF9QcmVzc2VkX0xhc3RfRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleVVwKEtleXMuU3VidHJhY3QpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidHJhY3RfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRXaW5kb3dzKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0V2luZG93cykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvd3NfcHJlc3NlZF9sYXN0X2ZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfTXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3ggPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3kgPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5VXAoS2V5cy5MZWZ0V2luZG93cykgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodFdpbmRvd3MpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93c19wcmVzc2VkX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTXVsdGlwbHkpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFNdWx0aXBseV9QcmVzc2VkX0xhc3RfRnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5TdGF0ZSA9PSBTb3VuZFN0YXRlLlN0b3BwZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLlN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBseV9QcmVzc2VkX0xhc3RfRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleVVwKEtleXMuTXVsdGlwbHkpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbHlfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5VXAoS2V5cy5PZW1Db21tYSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYV9wcmVzc2VkX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtQ29tbWEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21tYV9wcmVzc2VkX2xhc3RfZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlLkVxdWFscyhiYWxsKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlID0gYmxhY2tfYmFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlID0gYmFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYV9wcmVzc2VkX2xhc3RfZnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlN5c3RlbS5JTy5TdHJlYW1Xcml0ZXIgZHJhZ3dyaXRlciA9IG5ldyBTeXN0ZW0uSU8uU3RyZWFtV3JpdGVyKFwiLi4vZHJhZy50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWd3cml0ZXIuV3JpdGUoeGRyYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnd3JpdGVyLkZsdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWd3cml0ZXIuQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3lzdGVtLklPLlN0cmVhbVdyaXRlciBncmF2aXR5d3JpdGVyID0gbmV3IFN5c3RlbS5JTy5TdHJlYW1Xcml0ZXIoXCIuLi9ncmF2aXR5LnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eXdyaXRlci5Xcml0ZShncmF2aXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eXdyaXRlci5GbHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5d3JpdGVyLkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2Nlc3MuU3RhcnQoQFwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxWaXN1YWwgU3R1ZGlvIDIwMTMgRGFkZHlcXFByb2plY3RzXFxWYXJpYWJsZSBDaGFuZ2VyXFxWYXJpYWJsZSBDaGFuZ2VyXFxiaW5cXERlYnVnXFxWYXJpYWJsZSBDaGFuZ2VyLmV4ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc1tdIFdhaXQgPSBQcm9jZXNzLkdldFByb2Nlc3Nlc0J5TmFtZShcIlZhcmlhYmxlIENoYW5nZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmVhY2ggKFByb2Nlc3MgcCBpbiBXYWl0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLldhaXRGb3JFeGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3lzdGVtLklPLlN0cmVhbVJlYWRlciBncmF2aXR5cCA9IG5ldyBTeXN0ZW0uSU8uU3RyZWFtUmVhZGVyKEBcIi4uXFxncmF2aXR5LnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHkgPSBmbG9hdC5QYXJzZShncmF2aXR5cC5SZWFkTGluZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoQXJndW1lbnROdWxsRXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChGb3JtYXRFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKE92ZXJmbG93RXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHlwLkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN5c3RlbS5JTy5TdHJlYW1SZWFkZXIgZHJhZ3AgPSBuZXcgU3lzdGVtLklPLlN0cmVhbVJlYWRlcihcIi4uL2RyYWcudHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGRyYWcgPSBmbG9hdC5QYXJzZShkcmFncC5SZWFkTGluZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoRm9ybWF0RXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChPdmVyZmxvd0V4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoQXJndW1lbnROdWxsRXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdwLkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlkcmFnID0geGRyYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQWNjZWxlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN5c3RlbS5JTy5TdHJlYW1SZWFkZXIgYWNjZWxwID0gbmV3IFN5c3RlbS5JTy5TdHJlYW1SZWFkZXIoXCIuLi9BY2VlbGVyYXRpb24udHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZWwgPSBmbG9hdC5QYXJzZShhY2NlbHAuUmVhZExpbmUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKEZvcm1hdEV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoT3ZlcmZsb3dFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKEFyZ3VtZW50TnVsbEV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlbHAuQ2xvc2UoKTsqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkY0KSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZV9vdmVyZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lX092ZXIuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lX292ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydCBhbmQgUHJlc3MgZXNjIG9yIGUgdG8gcXVpdFwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAvIDIsIEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkhlaWdodCAvIDIpLCBDb2xvci5Hb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbENvbG9yLkEgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvci5BID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BlZWQgPSBNYWtlRmxvYXRQZXJmZWN0KChmbG9hdCkoTWF0aC5BYnMoTWF0aC5TcXJ0KCh2eCAqIHZ4KSArICgodnkgKyBncmF2aXR5X2VmZmVjdCkgKiAodnkgKyBncmF2aXR5X2VmZmVjdCkpKSkpKTtcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlICs9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gbWF4aW11bilcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVuID0gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPj0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2VvZnNjcmVlbmxvc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiR2FtZSBPdmVyIVxcblByZXNzIFNwYWNlIHRvIFJlc3RhcnQgYW5kIFByZXNzIGVzYyBvciBlIHRvIHF1aXRcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLyAyLCBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5IZWlnaHQgLyAyKSwgQ29sb3IuR29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4ID0gdnggLSAodnggKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gLXRleHR1cmUuV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPCAtdGV4dHVyZS5XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlZGdlb2ZzY3JlZW5sb3NlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkdhbWUgT3ZlciFcXG5QcmVzcyBTcGFjZSB0byBSZXN0YXJ0IGFuZCBQcmVzcyBlc2Mgb3IgZSB0byBxdWl0XCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC8gMiwgR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuSGVpZ2h0IC8gMiksIENvbG9yLkdvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCA9IChmbG9hdClNYXRoLkFicyh2eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeSA+PSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2VvZnNjcmVlbmxvc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiR2FtZSBPdmVyIVxcblByZXNzIFNwYWNlIHRvIFJlc3RhcnQgYW5kIFByZXNzIGVzYyBvciBlIHRvIHF1aXRcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLyAyLCBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5IZWlnaHQgLyAyKSwgQ29sb3IuR29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5ID0gdnkgLSAodnkgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHlfZWZmZWN0ID0gLWdyYXZpdHlfZWZmZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSAtdGV4dHVyZS5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeSA8IC10ZXh0dXJlLkhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlZGdlb2ZzY3JlZW5sb3NlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkdhbWUgT3ZlciFcXG5QcmVzcyBTcGFjZSB0byBSZXN0YXJ0IGFuZCBQcmVzcyBlc2Mgb3IgZSB0byBxdWl0XCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC8gMiwgR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuSGVpZ2h0IC8gMiksIENvbG9yLkdvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSA9IChmbG9hdClNYXRoLkFicyh2eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5X2VmZmVjdCA9IC1ncmF2aXR5X2VmZmVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RvcFdoZW5Ob3RNb3ZpbmcgJiYgIW1vdmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZ4ICo9IHhkcmFnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZ5ICo9IHlkcmFnO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlfZWZmZWN0ICo9IHlkcmFnO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlfZWZmZWN0ICs9IGdyYXZpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdDxWZWN0b3IyPiBwb3NpdGlvbnMgPSBnbG9iYWw6OkJyaWRnZS5TY3JpcHQuQ2FsbEZvcihuZXcgTGlzdDxWZWN0b3IyPigpLChfbzEpPT57X28xLkFkZChuZXcgVmVjdG9yMih4LCB5KSk7cmV0dXJuIF9vMTt9KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMuQWRkKG5ldyBWZWN0b3IyKG11bHRpcGxheWVyeCwgbXVsdGlwbGF5ZXJ5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zLkFkZChuZXcgVmVjdG9yMihDcHVfeCwgQ3B1X3kpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGludCB4ID0gMDsgeCA8IHBvc2l0aW9ucy5Db3VudDsgeCsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgeSA9IDA7IHkgPCBwb3NpdGlvbnMuQ291bnQ7IHkrKylcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPT0geSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY3RhbmdsZSByZWN0QSA9IG5ldyBSZWN0YW5nbGUocG9zaXRpb25zW3hdLlRvUG9pbnQoKSwgbmV3IFBvaW50KDMyLCAzMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjdGFuZ2xlIHJlY3RCID0gbmV3IFJlY3RhbmdsZShwb3NpdGlvbnNbeV0uVG9Qb2ludCgpLCBuZXcgUG9pbnQoMzIsIDMyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjdEEuQ29udGFpbnMocG9zaXRpb25zW3ldKSB8fCByZWN0Qi5Db250YWlucyhwb3NpdGlvbnNbeF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB9IC8vIEVtcHR5IGJsb2NrIC0gb3JpZ2luYWwgY29kZSB3YXMgaW5jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFza2luZ193b3JsZF9uYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSgzMjksIDI1OSwgMTUyLCAyNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSgzMzAsIDI2MCwgMTUwLCAyNSksIENvbG9yLldoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VjcyA9PSA1KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5CYWNrIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Db3VudDxjaGFyPih3b3JsZF9uYW1lKSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JsZF9uYW1lID0gd29ybGRfbmFtZS5SZW1vdmUoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Db3VudDxjaGFyPih3b3JsZF9uYW1lKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuRW50ZXIgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ193b3JsZF9uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZyb21fc2F2ZWRfZ2FtZV9jb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0UGxheWluZyhnYW1lVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnVsbF9zY3JlZW5fdGVtcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5Ub2dnbGVGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc291bmRfcGxheWluZ190ZW1wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kX3BsYXlpbmdfdGVtcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbF9zY3JlZW5fdGVtcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuRXNjYXBlIH0pICYmIENhblBlcmZvcm1BY3Rpb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLkxlZnRDb250cm9sLCBLZXlzLlYgfSkgfHwgQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLlJpZ2h0Q29udHJvbCwgS2V5cy5WIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGlwYm9hcmRIZWxwZXIuUmVhZENsaXBib2FyZFRleHQoKEFjdGlvbjxzdHJpbmc+KSh0ZXh0ID0+IHsgd29ybGRfbmFtZSA9IHRleHQ7IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmVhY2ggKEtleXNbXSBrIGluIGtleXMuVmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKGspKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKCh1c2hvcnQpR2V0S2V5U3RhdGUoMHgxNCkpICYgMHhmZmZmKSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JsZF9uYW1lICs9IENoYXIuVG9VcHBlcihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlRvTGlzdDxjaGFyPihrZXlzLktleXMpW25dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmxkX25hbWUgKz0gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8Y2hhcj4oa2V5cy5LZXlzKVtuXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZWNzID4gNSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWNzID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlY3MrKztcclxuICAgICAgICAgICAgICAgIGlmICh3b3JsZF9uYW1lID09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIldvcmxkIE5hbWUuLi5cIiwgbmV3IFZlY3RvcjIoMzQ1LCAyNjApLCBDb2xvci5MaWdodEdyYXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgd29ybGRfbmFtZSwgbmV3IFZlY3RvcjIoMzQ1LCAyNjApLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiV2hhdCdzIHRoZSBuYW1lIG9mIHlvdXIgd29ybGQ/XCIsIG5ldyBWZWN0b3IyKDM0NSwgMjI1KSwgQ29sb3IuV2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYXNraW5nX25hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEtleWJvYXJkU3RhdGUgc3RhdGUgPSBLZXlib2FyZC5HZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEZXZpY2UuQ2xlYXIoQ29sb3IuUmVkKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSgzMjksIDI1OSwgMTUyLCAyNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDMzMCwgMjYwLCAxNTAsIDI1KSwgQ29sb3IuV2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgaW50IG4gPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3MgPT0gNSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWNzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLkJhY2sgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Db3VudDxjaGFyPihuYW1lKSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLlJlbW92ZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkNvdW50PGNoYXI+KG5hbWUpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuRW50ZXIgfSkgJiYgQ2FuUGVyZm9ybUFjdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5Fc2NhcGUgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLkxlZnRDb250cm9sLCBLZXlzLlYgfSkgfHwgQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLlJpZ2h0Q29udHJvbCwgS2V5cy5WIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGlwYm9hcmRIZWxwZXIuUmVhZENsaXBib2FyZFRleHQoKEFjdGlvbjxzdHJpbmc+KSh0ZXh0ID0+IHsgbmFtZSArPSB0ZXh0OyB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yZWFjaCAoS2V5c1tdIGsgaW4ga2V5cy5WYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKGspKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCgodXNob3J0KUdldEtleVN0YXRlKDB4MTQpKSAmIDB4ZmZmZikgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICs9IENoYXIuVG9VcHBlcihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlRvTGlzdDxjaGFyPihrZXlzLktleXMpW25dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICs9IFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9MaXN0PGNoYXI+KGtleXMuS2V5cylbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIk5hbWUuLi5cIiwgbmV3IFZlY3RvcjIoMzQ1LCAyNjApLCBDb2xvci5MaWdodEdyYXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgbmFtZSwgbmV3IFZlY3RvcjIoMzQ1LCAyNjApLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiV2hhdCdzIHlvdXIgbmFtZT9cIiwgbmV3IFZlY3RvcjIoMzQ1LCAyMjUpLCBDb2xvci5XaGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgIHNlY3MrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzYXZlZF9nYW1lX2NvZGUgIT0gc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RldmljZS5DbGVhcihDb2xvci5CbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChmcm9tX3NhdmVkX2dhbWVfY29kZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZlZF9nYW1lX2Rlc3RuYXRpb24gKyBcIi93b3JsZF9uYW1lLnR4dFwiLCB3b3JsZF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlZF9nYW1lX2Rlc3RuYXRpb24gPSBzYXZlZF9nYW1lX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9va2luZ19hdF9zYXZlZF9nYW1lcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9zYXZlZF9nYW1lX2NvZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZF9uYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlZF9nYW1lcyA9IFN0b3JhZ2UuR2V0RGlyZWN0b3JpZXMoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50IG4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzID0gbmV3IHN0cmluZ1tzYXZlZF9nYW1lcy5MZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkX25hbWVzID0gbmV3IHN0cmluZ1tzYXZlZF9nYW1lcy5MZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBzIGluIHNhdmVkX2dhbWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi9uYW1lLnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzW25dID0gbGluZXMuTGVuZ3RoID4gMCA/IGxpbmVzWzBdIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc1tuXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi93b3JsZF9uYW1lLnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmxkX25hbWVzW25dID0gbGluZXMuTGVuZ3RoID4gMCA/IGxpbmVzWzBdIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc1tuXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWNzICUgNSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVXApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGljayBidXR0b247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDg1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrLlBsYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTAwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAxMzQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uc19Mb2FkX0ZpbGVfUmlnaHRfQ2xpY2suRGVsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrLlJlbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlLlNldFBvc2l0aW9uKChpbnQpYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGVbKGludClidXR0b24gLSAxXS5YLCAoaW50KWJ1dHRvbnNfcmlnaHRfY2xpY2tfbG9hZF9maWxlWyhpbnQpYnV0dG9uIC0gMV0uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlLlNldFBvc2l0aW9uKChpbnQpU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5MYXN0PFZlY3RvcjI+KGJ1dHRvbnNfcmlnaHRfY2xpY2tfbG9hZF9maWxlKS5YLCAoaW50KVN5c3RlbS5MaW5xLkVudW1lcmFibGUuTGFzdDxWZWN0b3IyPihidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZSkuWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Eb3duKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uc19Mb2FkX0ZpbGVfUmlnaHRfQ2xpY2sgYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWSA8PSA4NSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGljay5QbGF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoTW91c2UuR2V0U3RhdGUoKS5ZID49IDEwMCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMTM0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrLkRlbGV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGljay5SZW5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3VzZS5TZXRQb3NpdGlvbigoaW50KWJ1dHRvbnNfcmlnaHRfY2xpY2tfbG9hZF9maWxlWyhpbnQpYnV0dG9uICsgMV0uWCwgKGludClidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZVsoaW50KWJ1dHRvbiArIDFdLlkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3VzZS5TZXRQb3NpdGlvbigoaW50KWJ1dHRvbnNfcmlnaHRfY2xpY2tfbG9hZF9maWxlWzBdLlgsIChpbnQpYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGVbMF0uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3MrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5YID49IDM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWCA8PSAxNTAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDg1KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNDksIDQ5LCAxMDIsIDM3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg1MCwgNTAsIDEwMCwgMzUpLCBuZXcgQ29sb3IoMjM0LCAyNDEsIDI0OCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKE1vdXNlLkdldFN0YXRlKCkuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW50ZXIpKSAmJiBDYW5QZXJmb3JtQWN0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWQoc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkX2dhbWVfZGVzdG5hdGlvbiA9IHNhdmVkX2dhbWVfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiUGxheVwiLCBuZXcgVmVjdG9yMig2MiwgNTcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Fc2NhcGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9va2luZ19hdF9zYXZlZF9nYW1lcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkX2dhbWVfZGVzdG5hdGlvbiA9IHNhdmVkX2dhbWVfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0IGJ1dHRvbiBsb2FkIHNhdmVkIHNhdmVkIGdhbWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5YID49IDM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWCA8PSAyNTAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZID49IDEwMCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMTM0KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNDksIDk5LCAxMDIsIDM3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg1MCwgMTAwLCAxMDAsIDM1KSwgbmV3IENvbG9yKDIzNCwgMjQxLCAyNDgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLkRlbGV0ZURpcmVjdG9yeShzYXZlZF9nYW1lX2Rlc3RuYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uID0gc2F2ZWRfZ2FtZV9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJEZWxldGVcIiwgbmV3IFZlY3RvcjIoNjIsIDEwNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5YID49IDM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWCA8PSAxNTAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZID49IDEzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMTg1KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNDksIDE0OSwgMTAyLCAzNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNTAsIDE1MCwgMTAwLCAzNSksIG5ldyBDb2xvcigyMzQsIDI0MSwgMjQ4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbV9zYXZlZF9nYW1lX2NvZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiUmVuYW1lXCIsIG5ldyBWZWN0b3IyKDYyLCAxNTcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobG9va2luZ19hdF9zYXZlZF9nYW1lcylcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Fc2NhcGUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRSkpICYmIENhblBlcmZvcm1BY3Rpb24oKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsb29raW5nX2F0X3NhdmVkX2dhbWVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBLZXlib2FyZFN0YXRlIGtleXMgPSBLZXlib2FyZC5HZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgTW91c2VTdGF0ZSBtb3VzZSA9IE1vdXNlLkdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpbnQgbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBpbnQgeSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3JlYWNoIChzdHJpbmcgcyBpbiBzYXZlZF9nYW1lcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDAsIHkgKiAxNSwgNDAxLCAxNiksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW91c2UuWSA+PSB5ICogMTUgJiYgbW91c2UuWSA8PSAoKHkgKiAxNSkgKyAxNSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW91c2UuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IGtleXMuSXNLZXlEb3duKEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkKHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyYXBoaWNzLklzRnVsbFNjcmVlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5Ub2dnbGVGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW91c2UuUmlnaHRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9va2luZ19hdF9zYXZlZF9nYW1lcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uID0gcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSgwLCB5ICogMTUsIDQwMCwgMTUpLCBDb2xvci5PcmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDAsIHkgKiAxNSwgNDAwLCAxNSksIENvbG9yLkRhcmtPcmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgd29ybGRfbmFtZXNbbl0gKyBcIiBieSBcIiArIG5hbWVzW25dLCBuZXcgVmVjdG9yMigwLCB5ICogMTUpLCBDb2xvci5CbGFjayk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG4rKztcclxuICAgICAgICAgICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RldmljZS5DbGVhcihDb2xvci5CbHVlKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjcyAlIDUgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5VcCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXR0b24gYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDg1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uLk5ld0dhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxMDAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDEzNClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbi5Mb2FkR2FtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uLkV4aXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3VzZS5TZXRQb3NpdGlvbigoaW50KWJ1dHRvbnNbKGludClidXR0b24gLSAxXS5YLCAoaW50KWJ1dHRvbnNbKGludClidXR0b24gLSAxXS5ZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3VzZS5TZXRQb3NpdGlvbigoaW50KVN5c3RlbS5MaW5xLkVudW1lcmFibGUuTGFzdDxWZWN0b3IyPihidXR0b25zKS5YLCAoaW50KVN5c3RlbS5MaW5xLkVudW1lcmFibGUuTGFzdDxWZWN0b3IyPihidXR0b25zKS5ZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkRvd24pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uIGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWSA8PSA4NSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbi5OZXdHYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTAwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAxMzQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b24uTG9hZEdhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbi5FeGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW91c2UuU2V0UG9zaXRpb24oKGludClidXR0b25zWyhpbnQpYnV0dG9uICsgMV0uWCwgKGludClidXR0b25zWyhpbnQpYnV0dG9uICsgMV0uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW91c2UuU2V0UG9zaXRpb24oKGludClidXR0b25zWzBdLlgsIChpbnQpYnV0dG9uc1swXS5ZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlggPj0gMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5YIDw9IDE1MCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gODUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNDksIDQ5LCAxMDIsIDM3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDUwLCA1MCwgMTAwLCAzNSksIG5ldyBDb2xvcigyMzQsIDI0MSwgMjQ4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlID0gYmFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmRfcGxheWluZ190ZW1wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiTmV3IEdhbWVcIiwgbmV3IFZlY3RvcjIoNjIsIDU3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Fc2NhcGUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL25leHQgYnV0dG9uIGxvYWQgc2F2ZWQgc2F2ZWQgZ2FtZVxyXG4gICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWCA+PSAzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlggPD0gMjUwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxMDAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDEzNClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg0OSwgOTksIDEwMiwgMzcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNTAsIDEwMCwgMTAwLCAzNSksIG5ldyBDb2xvcigyMzQsIDI0MSwgMjQ4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9va2luZ19hdF9zYXZlZF9nYW1lcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ19uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ193b3JsZF9uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkX2dhbWVzID0gU3RvcmFnZS5HZXREaXJlY3RvcmllcyhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IG4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lcyA9IG5ldyBzdHJpbmdbc2F2ZWRfZ2FtZXMuTGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ybGRfbmFtZXMgPSBuZXcgc3RyaW5nW3NhdmVkX2dhbWVzLkxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBzIGluIHNhdmVkX2dhbWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvbmFtZS50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNbbl0gPSBsaW5lcy5MZW5ndGggPiAwID8gbGluZXNbMF0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc1tuXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvd29ybGRfbmFtZS50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ybGRfbmFtZXNbbl0gPSBsaW5lcy5MZW5ndGggPiAwID8gbGluZXNbMF0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc1tuXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiTG9hZCBHYW1lXCIsIG5ldyBWZWN0b3IyKDYyLCAxMDcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAvLyBuZXcgYnV0dG9uIGV4aXRcclxuICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlggPj0gMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5YIDw9IDE1MCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAxODUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNDksIDE0OSwgMTAyLCAzNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg1MCwgMTUwLCAxMDAsIDM1KSwgbmV3IENvbG9yKDIzNCwgMjQxLCAyNDgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbnRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJRdWl0XCIsIG5ldyBWZWN0b3IyKDYyLCAxNTcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAvKi8vIG5ldyBidXR0b24gcGxheSBtdXNpY1xyXG4gICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWCA+PSAzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlggPD0gMTUwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxODUgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDIzNSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg0OSwgMTk5LCAxMDIsIDM3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDUwLCAyMDAsIDEwMCwgMzUpLCBuZXcgQ29sb3IoMjM0LCAyNDEsIDI0OCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZWRfbXVzaWNfbGFzdF9mcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLlN0YXRlID09IFNvdW5kU3RhdGUuU3RvcHBlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnN0YW5jZS5TdGF0ZSA9PSBTb3VuZFN0YXRlLlBsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuU3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllZF9tdXNpY19sYXN0X2ZyYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVkX211c2ljX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuU3RhdGUgPT0gU291bmRTdGF0ZS5TdG9wcGVkKVxyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIlBsYXkgTXVzaWNcIiwgbmV3IFZlY3RvcjIoNjIsIDIwNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiU3RvcCBNdXNpY1wiLCBuZXcgVmVjdG9yMig2MiwgMjA3KSwgQ29sb3IuQmxhY2spOyovXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgIHNlY3MrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLkRyYXcoZ2FtZVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XG5cbm5hbWVzcGFjZSBCb3VuY3lfQmFsbFxue1xuICAgIHB1YmxpYyBjbGFzcyBQcm9ncmFtXG4gICAge1xuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVzaW5nICh2YXIgZ2FtZSA9IG5ldyBHYW1lMSgpKVxuICAgICAgICAgICAgICAgIGdhbWUuUnVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ1c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQm91bmN5X0JhbGxcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIGxvY2FsU3RvcmFnZSB3cmFwcGVyIHRvIHJlcGxhY2UgU3lzdGVtLklPIGZpbGUgb3BlcmF0aW9uc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgU3RvcmFnZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgY29uc3Qgc3RyaW5nIFBSRUZJWCA9IFwiQm91bmN5QmFsbF9cIjtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IHN0cmluZyBTQVZFU19LRVkgPSBcIkJvdW5jeUJhbGxfU2F2ZXNMaXN0XCI7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBzdHJpbmcgU0FWSU5HU19LRVkgPSBcIkJvdW5jeUJhbGxfU2F2aW5nc1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgSW5pdGlhbGl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHNhdmluZ3MgY291bnRlciBpZiBub3QgcHJlc2VudFxyXG4gICAgICAgICAgICBpZiAoV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKFNBVklOR1NfS0VZKSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBXaW5kb3cuTG9jYWxTdG9yYWdlLlNldEl0ZW0oU0FWSU5HU19LRVksIFwiMFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIERpcmVjdG9yeUV4aXN0cyhzdHJpbmcgcGF0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHNhdmUgZXhpc3RzXHJcbiAgICAgICAgICAgIHN0cmluZyBrZXkgPSBQYXRoVG9LZXkocGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBXaW5kb3cuTG9jYWxTdG9yYWdlLkdldEl0ZW0oa2V5ICsgXCJfZXhpc3RzXCIpICE9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgQ3JlYXRlRGlyZWN0b3J5KHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgV2luZG93LkxvY2FsU3RvcmFnZS5TZXRJdGVtKGtleSArIFwiX2V4aXN0c1wiLCBcInRydWVcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgdG8gc2F2ZXMgbGlzdFxyXG4gICAgICAgICAgICB2YXIgc2F2ZXMgPSBHZXRTYXZlc0xpc3QoKTtcclxuICAgICAgICAgICAgaWYgKCFzYXZlcy5Db250YWlucyhrZXkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzYXZlcy5BZGQoa2V5KTtcclxuICAgICAgICAgICAgICAgIFNhdmVTYXZlc0xpc3Qoc2F2ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgRGVsZXRlRGlyZWN0b3J5KHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBpdGVtcyB3aXRoIHRoaXMgcHJlZml4XHJcbiAgICAgICAgICAgIHZhciBrZXlzVG9SZW1vdmUgPSBuZXcgTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgV2luZG93LkxvY2FsU3RvcmFnZS5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nIGsgPSBXaW5kb3cuTG9jYWxTdG9yYWdlLktleShpKTtcclxuICAgICAgICAgICAgICAgIGlmIChrICE9IG51bGwgJiYgay5TdGFydHNXaXRoKGtleSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5c1RvUmVtb3ZlLkFkZChrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgayBpbiBrZXlzVG9SZW1vdmUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFdpbmRvdy5Mb2NhbFN0b3JhZ2UuUmVtb3ZlSXRlbShrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gc2F2ZXMgbGlzdFxyXG4gICAgICAgICAgICB2YXIgc2F2ZXMgPSBHZXRTYXZlc0xpc3QoKTtcclxuICAgICAgICAgICAgc2F2ZXMuUmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgIFNhdmVTYXZlc0xpc3Qoc2F2ZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIEZpbGVFeGlzdHMoc3RyaW5nIHBhdGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcga2V5ID0gUGF0aFRvS2V5KHBhdGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKGtleSkgIT0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIFJlYWRBbGxUZXh0KHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChzdHJpbmcpV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKGtleSkgPz8gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBXcml0ZUFsbFRleHQoc3RyaW5nIHBhdGgsIHN0cmluZyBjb250ZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgV2luZG93LkxvY2FsU3RvcmFnZS5TZXRJdGVtKGtleSwgY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZ1tdIFJlYWRBbGxMaW5lcyhzdHJpbmcgcGF0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBjb250ZW50ID0gUmVhZEFsbFRleHQocGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChzdHJpbmcuSXNOdWxsT3JFbXB0eShjb250ZW50KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgc3RyaW5nWzBdO1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGVudC5TcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgV3JpdGVBbGxMaW5lcyhzdHJpbmcgcGF0aCwgc3RyaW5nW10gbGluZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXcml0ZUFsbFRleHQocGF0aCwgc3RyaW5nLkpvaW4oXCJcXG5cIiwgbGluZXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nW10gR2V0RGlyZWN0b3JpZXMoc3RyaW5nIGJhc2VQYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNhdmVzID0gR2V0U2F2ZXNMaXN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlcy5Ub0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGludCBHZXRTYXZpbmdzQ291bnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHZhbCA9IChzdHJpbmcpV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKFNBVklOR1NfS0VZKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbCAhPSBudWxsID8gaW50LlBhcnNlKHZhbCkgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFNldFNhdmluZ3NDb3VudChpbnQgY291bnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaW5kb3cuTG9jYWxTdG9yYWdlLlNldEl0ZW0oU0FWSU5HU19LRVksIGNvdW50LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEluY3JlbWVudFNhdmluZ3NDb3VudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXRTYXZpbmdzQ291bnQoR2V0U2F2aW5nc0NvdW50KCkgKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHN0cmluZyBQYXRoVG9LZXkoc3RyaW5nIHBhdGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IFdpbmRvd3Mtc3R5bGUgcGF0aHMgdG8gc3RvcmFnZSBrZXlzXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgQzovVXNlcnMvLi4uL0FwcERhdGEvTG9jYWwvTWljaGFlbC9Cb3VuY3kgQmFsbC8gcHJlZml4XHJcbiAgICAgICAgICAgIHN0cmluZyBrZXkgPSBwYXRoO1xyXG4gICAgICAgICAgICBpbnQgaWR4ID0ga2V5LkluZGV4T2YoXCJCb3VuY3kgQmFsbC9cIik7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LlN1YnN0cmluZyhpZHggKyBcIkJvdW5jeSBCYWxsL1wiLkxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWxzbyBoYW5kbGUganVzdCB0aGUgc2F2ZSBuYW1lXHJcbiAgICAgICAgICAgIGtleSA9IGtleS5SZXBsYWNlKFwiL1wiLCBcIl9cIikuUmVwbGFjZShcIlxcXFxcIiwgXCJfXCIpLlJlcGxhY2UoXCIudHh0XCIsIFwiXCIpLlJlcGxhY2UoXCIucG5nXCIsIFwiX2ltZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFBSRUZJWCArIGtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIExpc3Q8c3RyaW5nPiBHZXRTYXZlc0xpc3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGpzb24gPSAoc3RyaW5nKVdpbmRvdy5Mb2NhbFN0b3JhZ2UuR2V0SXRlbShTQVZFU19LRVkpO1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nLklzTnVsbE9yRW1wdHkoanNvbikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpc3Q8c3RyaW5nPigpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2ltcGxlIHBhcnNpbmcgLSBqdXN0IHNwbGl0IGJ5IGNvbW1hXHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbmV3IExpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZy5Jc051bGxPckVtcHR5KGpzb24pKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3JlYWNoICh2YXIgaXRlbSBpbiBqc29uLlNwbGl0KCcsJykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHJpbmcuSXNOdWxsT3JFbXB0eShpdGVtKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5BZGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIFNhdmVTYXZlc0xpc3QoTGlzdDxzdHJpbmc+IHNhdmVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV2luZG93LkxvY2FsU3RvcmFnZS5TZXRJdGVtKFNBVkVTX0tFWSwgc3RyaW5nLkpvaW4oXCIsXCIsIHNhdmVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
