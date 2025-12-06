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
            var $t;
            var game = new Bouncy_Ball.Game1();
            try {
                game.Run();
                document.body.appendChild(($t = document.createElement("a"), $t.textContent = "How to Play", $t.href = "how-to-play.html", $t.className = "help-link", $t.target = "_blank", $t));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJCb3VuY3lCYWxsLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJHYW1lMS5jcyIsIlByb2dyYW0uY3MiLCJTdG9yYWdlLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBdUt3Q0E7b0JBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBdklmQSxLQUFJQTsrQkFDREEsS0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQTBVbkJBLG1CQUFnQkEsSUFBSUEsb0RBQXVCQSxJQUFJQSxzREFBdUJBLElBQUlBO3FEQUNwREEsbUJBQWdCQSxJQUFJQSxvREFBdUJBLElBQUlBLHNEQUF1QkEsSUFBSUE7Ozs7c0NBSzdGQTtpQ0FFTEE7d0NBQ09BOzhCQUVUQSxJQUFJQTs7Ozs7Ozs7Ozs7Z0JBM1VoQkEsZ0JBQVdBLElBQUlBLDhDQUFzQkE7Z0JBQ3JDQTs7Ozs7O2dCQUlBQSxnQkFBZ0JBO2dCQUNoQkEsS0FBS0EsV0FBV0EsSUFBSUEsV0FBV0E7b0JBRTNCQSxjQUFTQSxvQkFBYUEsTUFBOEJBLHlDQUFNQSx3Q0FBV0EsaUNBQUtBLG1CQUFhQSw4Q0FBZ0JBLGNBQThCQSxtRkFBUUEsNENBQWFBO29CQUMxSkEsaUJBQVlBLG1CQUFhQSwrQ0FBaUJBLGNBQThCQSxtRkFBUUEsNENBQWFBLHVFQUFTQSxvQkFBYUEsT0FBOEJBLHlDQUFNQSwwQ0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFZdEtBLDZCQUF3QkE7Z0JBQ3hCQSxtQkFBY0E7Z0JBQ2RBLDhCQUF5QkE7Z0JBQ3pCQSxrQkFBY0EsbUJBQWFBO2dCQUMzQkEsa0JBQWNBLG1CQUFh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QUFJQTs7OztvQkFHZkEsV0FBV0EsS0FBSUE7b0JBQ2ZBLElBQUlBLENBQUNBLDRCQUFxQkE7d0JBRXRCQSwwQkFBcUJBOzs7O2dDQUVqQkEsSUFBSUEsQ0FBQ0EsNEJBQXFCQTtvQ0FDdEJBLFNBQVNBOzs7Ozs7Ozs7b0JBR3JCQSxPQUFPQTs7eUNBR3VCQTtvQkFFOUJBLDRCQUE0QkEsK0JBQVdBLGVBQWlCQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgTWljcm9zb2Z0LlhuYS5GcmFtZXdvcms7XHJcbnVzaW5nIE1pY3Jvc29mdC5YbmEuRnJhbWV3b3JrLkF1ZGlvO1xyXG51c2luZyBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5Db250ZW50O1xyXG51c2luZyBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5HcmFwaGljcztcclxudXNpbmcgTWljcm9zb2Z0LlhuYS5GcmFtZXdvcmsuSW5wdXQ7XHJcbnVzaW5nIEJvdW5jeV9CYWxsO1xyXG4vLyBSZW1vdmVkOiBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5NZWRpYSwgU3lzdGVtLkRpYWdub3N0aWNzLCBTeXN0ZW0uTWVkaWEsIFN5c3RlbS5SdW50aW1lLkludGVyb3BTZXJ2aWNlc1xyXG5cclxubmFtZXNwYWNlIEJvdW5jeV9CYWxsXHJcbntcclxuICAgIGVudW0gQnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgTmV3R2FtZSxcclxuICAgICAgICBMb2FkR2FtZSxcclxuICAgICAgICBFeGl0XHJcbiAgICB9XHJcbiAgICBlbnVtIEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrXHJcbiAgICB7XHJcbiAgICAgICAgUGxheSxcclxuICAgICAgICBEZWxldGUsXHJcbiAgICAgICAgUmVuYW1lXHJcbiAgICB9XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gVGhpcyBpcyB0aGUgbWFpbiB0eXBlIGZvciB5b3VyIGdhbWVcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2xhc3MgR2FtZTEgOiBNaWNyb3NvZnQuWG5hLkZyYW1ld29yay5HYW1lXHJcbiAgICB7XHJcbiAgICAgICAgU3ByaXRlRm9udCBzcHJpdGVGb250O1xyXG4gICAgICAgIEdyYXBoaWNzRGV2aWNlTWFuYWdlciBncmFwaGljcztcclxuICAgICAgICBEaWN0aW9uYXJ5PGNoYXIsIEtleXNbXT4ga2V5cyA9IG5ldyBEaWN0aW9uYXJ5PGNoYXIsIEtleXNbXT4oMjYpO1xyXG4gICAgICAgIERpY3Rpb25hcnk8S2V5c1tdLCBjaGFyPiBjYXBpdGFsID0gbmV3IERpY3Rpb25hcnk8S2V5c1tdLCBjaGFyPigyNik7XHJcbiAgICAgICAgU3ByaXRlQmF0Y2ggc3ByaXRlQmF0Y2g7XHJcbiAgICAgICAgVGV4dHVyZTJEIHRleHR1cmU7XHJcbiAgICAgICAgVGV4dHVyZTJEIGJ1dHRvbjtcclxuICAgICAgICBzdHJpbmcgd29ybGRfbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgYm9vbCBhc2tpbmdfd29ybGRfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgIFNvdW5kRWZmZWN0IEdhbWVfT3ZlcjtcclxuICAgICAgICBTb3VuZEVmZmVjdCBCb3VuY2U7XHJcbiAgICAgICAgcHVibGljIEdhbWUxKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzRGV2aWNlTWFuYWdlcih0aGlzKTtcclxuICAgICAgICAgICAgQ29udGVudC5Sb290RGlyZWN0b3J5ID0gXCJDb250ZW50XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENhcGl0aWxpemVLZXlzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCBrZXlzY291bnQgPSBrZXlzLkNvdW50O1xyXG4gICAgICAgICAgICBmb3IgKGludCBuID0gMDsgbiA8IGtleXNjb3VudDsgbisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLkFkZChDaGFyLlRvVXBwZXIoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8Y2hhcj4oa2V5cy5LZXlzKVtuXSksIG5ldyBLZXlzW10geyBLZXlzLkxlZnRTaGlmdCwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8S2V5c1tdPihrZXlzLlZhbHVlcylbbl1bMF0gfSk7XHJcbiAgICAgICAgICAgICAgICBjYXBpdGFsLkFkZChuZXcgS2V5c1tdIHsgS2V5cy5SaWdodFNoaWZ0LCBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlRvTGlzdDxLZXlzW10+KGtleXMuVmFsdWVzKVtuXVswXSB9LCBDaGFyLlRvVXBwZXIoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8Y2hhcj4oa2V5cy5LZXlzKVtuXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQWxsb3dzIHRoZSBnYW1lIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uIGl0IG5lZWRzIHRvIGJlZm9yZSBzdGFydGluZyB0byBydW4uXHJcbiAgICAgICAgLy8vIFRoaXMgaXMgd2hlcmUgaXQgY2FuIHF1ZXJ5IGZvciBhbnkgcmVxdWlyZWQgc2VydmljZXMgYW5kICggYW55IG5vbi1ncmFwaGljXHJcbiAgICAgICAgLy8vIHJlbGF0ZWQgY29udGVudC4gIENhbGxpbmcgYmFzZS5Jbml0aWFsaXplIHdpbGwgZW51bWVyYXRlIHRocm91Z2ggYW55IGNvbXBvbmVudHNcclxuICAgICAgICAvLy8gYW5kIGluaXRpYWxpemUgdGhlbSBhcyB3ZWxsLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdGlhbGl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBBZGQgeW91ciBpbml0aWFsaXphdGlvbiBsb2dpYyBoZXJlXHJcbiAgICAgICAgICAgIHNhdmVkX2dhbWVfZGVzdG5hdGlvbiA9IHNhdmVkX2dhbWVfY29kZTtcclxuICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBiYWxsQ29sb3I7XHJcbiAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBtdWx0aXBsYXllckNvbG9yO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnYScsIG5ldyBLZXlzW10geyBLZXlzLkEgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdiJywgbmV3IEtleXNbXSB7IEtleXMuQiB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2MnLCBuZXcgS2V5c1tdIHsgS2V5cy5DIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnZCcsIG5ldyBLZXlzW10geyBLZXlzLkQgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdlJywgbmV3IEtleXNbXSB7IEtleXMuRSB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2YnLCBuZXcgS2V5c1tdIHsgS2V5cy5GIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnZycsIG5ldyBLZXlzW10geyBLZXlzLkcgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdoJywgbmV3IEtleXNbXSB7IEtleXMuSCB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2knLCBuZXcgS2V5c1tdIHsgS2V5cy5JIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnaicsIG5ldyBLZXlzW10geyBLZXlzLkogfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdrJywgbmV3IEtleXNbXSB7IEtleXMuSyB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ2wnLCBuZXcgS2V5c1tdIHsgS2V5cy5MIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnbScsIG5ldyBLZXlzW10geyBLZXlzLk0gfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCduJywgbmV3IEtleXNbXSB7IEtleXMuTiB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ28nLCBuZXcgS2V5c1tdIHsgS2V5cy5PIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgncCcsIG5ldyBLZXlzW10geyBLZXlzLlAgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCdxJywgbmV3IEtleXNbXSB7IEtleXMuUSB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3InLCBuZXcgS2V5c1tdIHsgS2V5cy5SIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgncycsIG5ldyBLZXlzW10geyBLZXlzLlMgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCd0JywgbmV3IEtleXNbXSB7IEtleXMuVCB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3UnLCBuZXcgS2V5c1tdIHsgS2V5cy5VIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgndicsIG5ldyBLZXlzW10geyBLZXlzLlYgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCd3JywgbmV3IEtleXNbXSB7IEtleXMuVyB9KTtcclxuICAgICAgICAgICAga2V5cy5BZGQoJ3gnLCBuZXcgS2V5c1tdIHsgS2V5cy5YIH0pO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgneScsIG5ldyBLZXlzW10geyBLZXlzLlkgfSk7XHJcbiAgICAgICAgICAgIGtleXMuQWRkKCd6JywgbmV3IEtleXNbXSB7IEtleXMuWiB9KTtcclxuICAgICAgICAgICAgLy9DYXBpdGlsaXplS2V5cygpO1xyXG4gICAgICAgICAgICBrZXlzLkFkZCgnICcsIG5ldyBLZXlzW10geyBLZXlzLlNwYWNlIH0pO1xyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICBTdG9yYWdlLkluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgYmFzZS5Jbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIFN0YXJ0UGxheWluZyhHYW1lVGltZSBnYW1lVGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghQ2FuUGVyZm9ybUFjdGlvbigpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChzb3VuZF9wbGF5aW5nX3RlbXApXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgIHBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBTdG9wUGxheWluZyhHYW1lVGltZSBnYW1lVGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghQ2FuUGVyZm9ybUFjdGlvbigpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGluc3RhbmNlLlN0b3AoKTtcclxuICAgICAgICAgICAgcGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTb3VuZEVmZmVjdCBNdXNpYztcclxuICAgICAgICBTb3VuZEVmZmVjdEluc3RhbmNlIGluc3RhbmNlO1xyXG4gICAgICAgIFRleHR1cmUyRCBiYWxsO1xyXG4gICAgICAgIFRleHR1cmUyRCBibGFja19iYWxsO1xyXG4gICAgICAgIGJvb2wgc291bmRfcGxheWluZ190ZW1wO1xyXG4gICAgICAgIC8vIERlYm91bmNlIGhlbHBlciAtIHRyYWNrcyBsYXN0IGFjdGlvbiB0aW1lXHJcbiAgICAgICAgcHJpdmF0ZSBkb3VibGUgbGFzdEFjdGlvblRpbWUgPSAwO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBDYW5QZXJmb3JtQWN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRvdWJsZSBub3cgPSBCcmlkZ2UuSHRtbDUuV2luZG93LlBlcmZvcm1hbmNlLk5vdygpO1xyXG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdEFjdGlvblRpbWUgPiAyNTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhc3RBY3Rpb25UaW1lID0gbm93O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExvYWRDb250ZW50IHdpbGwgYmUgY2FsbGVkIG9uY2UgcGVyIGdhbWUgYW5kIGlzIHRoZSBwbGFjZSB0byBsb2FkXHJcbiAgICAgICAgLy8vIGFsbCBvZiB5b3VyIGNvbnRlbnQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBMb2FkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzcHJpdGVGb250ID0gQ29udGVudC5Mb2FkPFNwcml0ZUZvbnQ+KFwiQXJpYWxcIik7XHJcbiAgICAgICAgICAgIGJhbGwgPSBDb250ZW50LkxvYWQ8VGV4dHVyZTJEPihcImJhbGxcIik7XHJcbiAgICAgICAgICAgIGJsYWNrX2JhbGwgPSBDb250ZW50LkxvYWQ8VGV4dHVyZTJEPihcImJsYWNrIGJhbGxcIik7XHJcbiAgICAgICAgICAgIEdhbWVfT3ZlciA9IENvbnRlbnQuTG9hZDxTb3VuZEVmZmVjdD4oXCJSZWplY3QgMlwiKTtcclxuICAgICAgICAgICAgQm91bmNlID0gQ29udGVudC5Mb2FkPFNvdW5kRWZmZWN0PihcImJvdW5jZVwiKTtcclxuICAgICAgICAgICAgTXVzaWMgPSBDb250ZW50LkxvYWQ8U291bmRFZmZlY3Q+KFwib24gdGhlIGZsb29yXCIpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IE11c2ljLkNyZWF0ZUluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IENvbnRlbnQuTG9hZDxUZXh0dXJlMkQ+KFwiQnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgU3ByaXRlQmF0Y2gsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGRyYXcgdGV4dHVyZXMuXHJcbiAgICAgICAgICAgIHNwcml0ZUJhdGNoID0gbmV3IFNwcml0ZUJhdGNoKEdyYXBoaWNzRGV2aWNlKTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbmNlLklzTG9vcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Jc01vdXNlVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChFbnZpcm9ubWVudC5HZXRDb21tYW5kTGluZUFyZ3MoKS5MZW5ndGggPiAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWQoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5MYXN0PHN0cmluZz4oRW52aXJvbm1lbnQuR2V0Q29tbWFuZExpbmVBcmdzKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPOiB1c2UgdGhpcy5Db250ZW50IHRvIGxvYWQgeW91ciBnYW1lIGNvbnRlbnQgaGVyZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbGxJbXBvcnQgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyXHJcbiAgICAgICAgLy8gW0RsbEltcG9ydChcInVzZXIzMi5kbGxcIiwgQ2hhclNldCA9IENoYXJTZXQuQXV0bywgRXhhY3RTcGVsbGluZyA9IHRydWUsIENhbGxpbmdDb252ZW50aW9uID0gQ2FsbGluZ0NvbnZlbnRpb24uV2luYXBpKV1cclxuICAgICAgICAvLyBwdWJsaWMgc3RhdGljIGV4dGVybiBzaG9ydCBHZXRLZXlTdGF0ZShpbnQga2V5Q29kZSk7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzaG9ydCBHZXRLZXlTdGF0ZShpbnQga2V5Q29kZSkgeyByZXR1cm4gMDsgfSAvLyBTdHViXHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgQmVpbmdQcmVzc2VkKEtleXNbXSBrZXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib29sIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKEtleXMgayBpbiBrZXkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5VXAoaykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgU2F2ZVRvKHN0cmluZyBzYXZpbmdkaXJlY3RvcnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTdG9yYWdlLkNyZWF0ZURpcmVjdG9yeShzYXZpbmdkaXJlY3RvcnkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9QbGF5aW5nU291bmQudHh0XCIsIChpbnN0YW5jZS5TdGF0ZSA9PSBTb3VuZFN0YXRlLlBsYXlpbmcpLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9GdWxsU2NyZWVuLnR4dFwiLCBncmFwaGljcy5Jc0Z1bGxTY3JlZW4uVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2Rpc3RhbmNlLnR4dFwiLCBkaXN0YW5jZS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgLy8gU2tpcCB0ZXh0dXJlIHNhdmUgLSBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIsIHdpbGwgdXNlIGRlZmF1bHQgYmFsbFxyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9Nb3VzZU1vdmVCYXNlUGxheWVyLnR4dFwiLCBNb3VzZU1vdmVCYXNlUGxheWVyLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9Gb2xsb3dCYWNrcm91bmRDb2xvci50eHRcIiwgRm9sbG93QmFja2dyb3VuZENvbG9yLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9jbGVhci50eHRcIiwgY2xlYXIuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL211bHRpcGxheWVyY29udHJvbHNlbmFibGVkLnR4dFwiLCBtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvY29udHJvbHNlbmFibGVkLnR4dFwiLCBjb250cm9sc2VuYWJsZWQuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2VuYWJsZWQudHh0XCIsIGVuYWJsZWQuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL211bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllLnR4dFwiLCBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXIudHh0XCIsIG11bHRpcGxheWVyLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9tdWx0aXBsYXllcngudHh0XCIsIG11bHRpcGxheWVyeC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXJ5LnR4dFwiLCBtdWx0aXBsYXllcnkuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL25hbWUudHh0XCIsIG5hbWUpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi93b3JsZF9uYW1lLnR4dFwiLCB3b3JsZF9uYW1lKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXJ2eC50eHRcIiwgbXVsdGlwbGF5ZXJ2eC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZWRnZW9mc2NyZWVubG9zZS50eHRcIiwgZWRnZW9mc2NyZWVubG9zZS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvYm91bmN5LnR4dFwiLCBib3VuY3kuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL3gudHh0XCIsIHguVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL3kudHh0XCIsIHkuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL3Z4LnR4dFwiLCB2eC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvdnkudHh0XCIsIHZ5LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9DcHVfTXVsdGlwbGF5ZXIudHh0XCIsIENwdV9NdWx0aXBsYXllci5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvQ3B1X3Z4LnR4dFwiLCBDcHVfdnguVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL0NwdV92eS50eHRcIiwgQ3B1X3Z5LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9DcHVfeS50eHRcIiwgQ3B1X3kuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL0NwdV94LnR4dFwiLCBDcHVfeC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZHJhZy50eHRcIiwgeGRyYWcuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2FjY2VsLnR4dFwiLCBhY2NlbC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZ3Jhdml0eS50eHRcIiwgZ3Jhdml0eS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvZ3Jhdml0eV9lZmZlY3QudHh0XCIsIGdyYXZpdHlfZWZmZWN0LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9ibHVlLnR4dFwiLCBibHVlLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9nYW1lX292ZXJyZWQudHh0XCIsIGdhbWVfb3ZlcmVkLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9TdG9wV2hlbk5vdE1vdmluZy50eHRcIiwgU3RvcFdoZW5Ob3RNb3ZpbmcuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL1VwZGF0ZUJhY2tncm91bmRDb2xvci50eHRcIiwgVXBkYXRlQmFja2dyb3VuZENvbG9yLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9NdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyLnR4dFwiLCBNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLldyaXRlQWxsVGV4dChzYXZpbmdkaXJlY3RvcnkgKyBcIi9hbHBoYS50eHRcIiwgYWxwaGEuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL0JhY2tyb3VuZENvbG9yLnR4dFwiLCBCYWNrcm91bmRDb2xvci5BICsgXCJcXG5cIiArIEJhY2tyb3VuZENvbG9yLkIgKyBcIlxcblwiICsgQmFja3JvdW5kQ29sb3IuRyArIFwiXFxuXCIgKyBCYWNrcm91bmRDb2xvci5SKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvYmFsbENvbG9yLnR4dFwiLCBiYWxsQ29sb3IuQSArIFwiXFxuXCIgKyBiYWxsQ29sb3IuQiArIFwiXFxuXCIgKyBiYWxsQ29sb3IuRyArIFwiXFxuXCIgKyBiYWxsQ29sb3IuUik7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmluZ2RpcmVjdG9yeSArIFwiL2FjdHVhbENvbG9yLnR4dFwiLCBhY3R1YWxDb2xvci5BICsgXCJcXG5cIiArIGFjdHVhbENvbG9yLkIgKyBcIlxcblwiICsgYWN0dWFsQ29sb3IuRyArIFwiXFxuXCIgKyBhY3R1YWxDb2xvci5SKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvbXVsdGlwbGF5ZXJDb2xvci50eHRcIiwgbXVsdGlwbGF5ZXJDb2xvci5BICsgXCJcXG5cIiArIG11bHRpcGxheWVyQ29sb3IuQiArIFwiXFxuXCIgKyBtdWx0aXBsYXllckNvbG9yLkcgKyBcIlxcblwiICsgbXVsdGlwbGF5ZXJDb2xvci5SKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQoc2F2aW5nZGlyZWN0b3J5ICsgXCIvYWN0dWFsTXVsdGlwbGF5ZXJDb2xvci50eHRcIiwgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvci5BICsgXCJcXG5cIiArIGFjdHVhbE11bHRpcGxheWVyQ29sb3IuQiArIFwiXFxuXCIgKyBhY3R1YWxNdWx0aXBsYXllckNvbG9yLkcgKyBcIlxcblwiICsgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvci5SKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5JbmNyZW1lbnRTYXZpbmdzQ291bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgTG9hZChzdHJpbmcgcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgTW91c2VNb3ZlQmFzZVBsYXllciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL01vdXNlTW92ZUJhc2VQbGF5ZXIudHh0XCIpKTtcclxuICAgICAgICAgICAgc291bmRfcGxheWluZ190ZW1wID0gU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvUGxheWluZ1NvdW5kLnR4dFwiKSA9PSBcIlRydWVcIjtcclxuICAgICAgICAgICAgZnVsbF9zY3JlZW5fdGVtcCA9IFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0Z1bGxTY3JlZW4udHh0XCIpID09IFwiVHJ1ZVwiO1xyXG4gICAgICAgICAgICBpZiAoIVN0b3JhZ2UuRmlsZUV4aXN0cyhzICsgXCIvZGlzdGFuY2UudHh0XCIpKVxyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5Xcml0ZUFsbFRleHQocyArIFwiL2Rpc3RhbmNlLnR4dFwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgIC8vIFRleHR1cmUgbG9hZGluZyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIgLSB1c2UgZGVmYXVsdCBiYWxsXHJcbiAgICAgICAgICAgIHRleHR1cmUgPSBiYWxsO1xyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2Rpc3RhbmNlLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIEZvbGxvd0JhY2tncm91bmRDb2xvciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0ZvbGxvd0JhY2tyb3VuZENvbG9yLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGNsZWFyID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvY2xlYXIudHh0XCIpKTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9tdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZC50eHRcIikpO1xyXG4gICAgICAgICAgICBjb250cm9sc2VuYWJsZWQgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9jb250cm9sc2VuYWJsZWQudHh0XCIpKTtcclxuICAgICAgICAgICAgZW5hYmxlZCA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2VuYWJsZWQudHh0XCIpKTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9tdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZS50eHRcIikpO1xyXG4gICAgICAgICAgICBtdWx0aXBsYXllciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL211bHRpcGxheWVyLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL211bHRpcGxheWVyeC50eHRcIikpO1xyXG4gICAgICAgICAgICBtdWx0aXBsYXllcnkgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9tdWx0aXBsYXllcnkudHh0XCIpKTtcclxuICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvbXVsdGlwbGF5ZXJ2eC50eHRcIikpO1xyXG4gICAgICAgICAgICBlZGdlb2ZzY3JlZW5sb3NlID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvZWRnZW9mc2NyZWVubG9zZS50eHRcIikpO1xyXG4gICAgICAgICAgICBib3VuY3kgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9ib3VuY3kudHh0XCIpKTtcclxuICAgICAgICAgICAgeCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL3gudHh0XCIpKTtcclxuICAgICAgICAgICAgdGhpcy55ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIveS50eHRcIikpO1xyXG4gICAgICAgICAgICB2eCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL3Z4LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHZ5ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvdnkudHh0XCIpKTtcclxuICAgICAgICAgICAgQ3B1X011bHRpcGxheWVyID0gQ29udmVydC5Ub0Jvb2xlYW4oU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvQ3B1X011bHRpcGxheWVyLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIENwdV92eCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0NwdV92eC50eHRcIikpO1xyXG4gICAgICAgICAgICBDcHVfdnkgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9DcHVfdnkudHh0XCIpKTtcclxuICAgICAgICAgICAgQ3B1X3kgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9DcHVfeS50eHRcIikpO1xyXG4gICAgICAgICAgICBDcHVfeCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL0NwdV94LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHhkcmFnID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvZHJhZy50eHRcIikpO1xyXG4gICAgICAgICAgICB5ZHJhZyA9IHhkcmFnO1xyXG4gICAgICAgICAgICBhY2NlbCA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2FjY2VsLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGdyYXZpdHkgPSBmbG9hdC5QYXJzZShTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9ncmF2aXR5LnR4dFwiKSk7XHJcbiAgICAgICAgICAgIGdyYXZpdHlfZWZmZWN0ID0gZmxvYXQuUGFyc2UoU3RvcmFnZS5SZWFkQWxsVGV4dChzICsgXCIvZ3Jhdml0eV9lZmZlY3QudHh0XCIpKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGZsb2F0LlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2JsdWUudHh0XCIpKTtcclxuICAgICAgICAgICAgZ2FtZV9vdmVyZWQgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9nYW1lX292ZXJyZWQudHh0XCIpKTtcclxuICAgICAgICAgICAgU3RvcFdoZW5Ob3RNb3ZpbmcgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9TdG9wV2hlbk5vdE1vdmluZy50eHRcIikpO1xyXG4gICAgICAgICAgICBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSBDb252ZXJ0LlRvQm9vbGVhbihTdG9yYWdlLlJlYWRBbGxUZXh0KHMgKyBcIi9VcGRhdGVCYWNrZ3JvdW5kQ29sb3IudHh0XCIpKTtcclxuICAgICAgICAgICAgTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhciA9IENvbnZlcnQuVG9Cb29sZWFuKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL011bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIudHh0XCIpKTtcclxuICAgICAgICAgICAgYWxwaGEgPSBieXRlLlBhcnNlKFN0b3JhZ2UuUmVhZEFsbFRleHQocyArIFwiL2FscGhhLnR4dFwiKSk7XHJcbiAgICAgICAgICAgIHN0cmluZ1tdIEJhY2tyb3VuZENvbG9ycyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi9CYWNrcm91bmRDb2xvci50eHRcIik7XHJcbiAgICAgICAgICAgIEJhY2tyb3VuZENvbG9yID0gbmV3IENvbG9yKGJ5dGUuUGFyc2UoQmFja3JvdW5kQ29sb3JzWzNdKSwgYnl0ZS5QYXJzZShCYWNrcm91bmRDb2xvcnNbMl0pLCBieXRlLlBhcnNlKEJhY2tyb3VuZENvbG9yc1sxXSksIGJ5dGUuUGFyc2UoQmFja3JvdW5kQ29sb3JzWzBdKSk7XHJcbiAgICAgICAgICAgIHN0cmluZ1tdIGJhbGxDb2xvcnMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvYmFsbENvbG9yLnR4dFwiKTtcclxuICAgICAgICAgICAgYmFsbENvbG9yID0gbmV3IENvbG9yKGJ5dGUuUGFyc2UoYmFsbENvbG9yc1szXSksIGJ5dGUuUGFyc2UoYmFsbENvbG9yc1syXSksIGJ5dGUuUGFyc2UoYmFsbENvbG9yc1sxXSksIGJ5dGUuUGFyc2UoYmFsbENvbG9yc1swXSkpO1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBhY3R1YWxDb2xvcnMgPSBTdG9yYWdlLlJlYWRBbGxMaW5lcyhzICsgXCIvYWN0dWFsQ29sb3IudHh0XCIpO1xyXG4gICAgICAgICAgICBhY3R1YWxDb2xvciA9IG5ldyBDb2xvcihieXRlLlBhcnNlKGFjdHVhbENvbG9yc1szXSksIGJ5dGUuUGFyc2UoYWN0dWFsQ29sb3JzWzJdKSwgYnl0ZS5QYXJzZShhY3R1YWxDb2xvcnNbMV0pLCBieXRlLlBhcnNlKGFjdHVhbENvbG9yc1swXSkpO1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBtdWx0aXBsYXllckNvbG9ycyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi9tdWx0aXBsYXllckNvbG9yLnR4dFwiKTtcclxuICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IG5ldyBDb2xvcihieXRlLlBhcnNlKG11bHRpcGxheWVyQ29sb3JzWzNdKSwgYnl0ZS5QYXJzZShtdWx0aXBsYXllckNvbG9yc1syXSksIGJ5dGUuUGFyc2UobXVsdGlwbGF5ZXJDb2xvcnNbMV0pLCBieXRlLlBhcnNlKG11bHRpcGxheWVyQ29sb3JzWzBdKSk7XHJcbiAgICAgICAgICAgIHN0cmluZ1tdIGFjdHVhbE11bHRpcGxheWVyQ29sb3JzID0gU3RvcmFnZS5SZWFkQWxsTGluZXMocyArIFwiL2FjdHVhbE11bHRpcGxheWVyQ29sb3IudHh0XCIpO1xyXG4gICAgICAgICAgICBhY3R1YWxNdWx0aXBsYXllckNvbG9yID0gbmV3IENvbG9yKGJ5dGUuUGFyc2UoYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcnNbM10pLCBieXRlLlBhcnNlKGFjdHVhbE11bHRpcGxheWVyQ29sb3JzWzJdKSwgYnl0ZS5QYXJzZShhY3R1YWxNdWx0aXBsYXllckNvbG9yc1sxXSksIGJ5dGUuUGFyc2UoYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcnNbMF0pKTtcclxuICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBDbG9zZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIG5vdCBhdmFpbGFibGUgaW4gYnJvd3NlciAtIGp1c3QgZXhpdCB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLkV4aXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmxvYWRDb250ZW50IHdpbGwgYmUgY2FsbGVkIG9uY2UgcGVyIGdhbWUgYW5kIGlzIHRoZSBwbGFjZSB0byB1bmxvYWRcclxuICAgICAgICAvLy8gYWxsIGNvbnRlbnQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBVbmxvYWRDb250ZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFVubG9hZCBhbnkgbm9uIENvbnRlbnRNYW5hZ2VyIGNvbnRlbnQgaGVyZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBBbGxvd3MgdGhlIGdhbWUgdG8gcnVuIGxvZ2ljIHN1Y2ggYXMgdXBkYXRpbmcgdGhlIHdvcmxkLFxyXG4gICAgICAgIC8vLyBjaGVja2luZyBmb3IgY29sbGlzaW9ucywgZ2F0aGVyaW5nIGlucHV0LCBhbmQgcGxheWluZyBhdWRpby5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImdhbWVUaW1lXCI+UHJvdmlkZXMgYSBzbmFwc2hvdCBvZiB0aW1pbmcgdmFsdWVzLjwvcGFyYW0+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgVXBkYXRlKEdhbWVUaW1lIGdhbWVUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gQWxsb3dzIHRoZSBnYW1lIHRvIGV4aXRcclxuICAgICAgICAgICAgaWYgKEdhbWVQYWQuR2V0U3RhdGUoUGxheWVySW5kZXguT25lKS5CdXR0b25zLkJhY2sgPT0gQnV0dG9uU3RhdGUuUHJlc3NlZClcclxuICAgICAgICAgICAgICAgIHRoaXMuRXhpdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogQWRkIHlvdXIgdXBkYXRlIGxvZ2ljIGhlcmVcclxuXHJcbiAgICAgICAgICAgIGJhc2UuVXBkYXRlKGdhbWVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9vbCBjb21tYV9wcmVzc2VkX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBib29sIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSBmYWxzZTtcclxuICAgICAgICBib29sIE1vdXNlTW92ZUJhc2VQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICBib29sIEZvbGxvd0JhY2tncm91bmRDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgY2xlYXIgPSB0cnVlO1xyXG4gICAgICAgIGJvb2wgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJvb2wgd2luZG93c19wcmVzc2VkX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBib29sIGFza2luZ19uYW1lID0gdHJ1ZTtcclxuICAgICAgICBib29sIGNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgYm9vbCBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBib29sIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgcGxheWVkX211c2ljX2xhc3RfZnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBmbG9hdCBtdWx0aXBsYXllcnggPSAwZjtcclxuICAgICAgICBmbG9hdCBtdWx0aXBsYXllcnkgPSAwZjtcclxuICAgICAgICBib29sIE11bHRpcGxheWVyX01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgc3RyaW5nIG5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGZsb2F0IG11bHRpcGxheWVydnggPSAwZjtcclxuICAgICAgICBib29sIGZyb21fc2F2ZWRfZ2FtZV9jb2RlID0gZmFsc2U7XHJcbiAgICAgICAgZmxvYXQgbXVsdGlwbGF5ZXJ2eSA9IDBmO1xyXG4gICAgICAgIGJvb2wgZWRnZW9mc2NyZWVubG9zZSA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgYm91bmN5ID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBzdWJ0cmFjdF9QcmVzc2VkX0xhc3RfRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBib29sIGF1dG9zYXZlID0gdHJ1ZTtcclxuICAgICAgICBzdHJpbmdbXSB3b3JsZF9uYW1lcztcclxuICAgICAgICBzdHJpbmdbXSBuYW1lcztcclxuICAgICAgICBzdHJpbmcgc2F2ZWRfZ2FtZV9jb2RlID0gXCJLLncudHluLmhmbHNvci4uLnRoZ3JcIjtcclxuICAgICAgICBzdHJpbmcgc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uO1xyXG4gICAgICAgIGZsb2F0IHggPSAwO1xyXG4gICAgICAgIGZsb2F0IHkgPSAwO1xyXG4gICAgICAgIGZsb2F0IHZ4ID0gMDtcclxuICAgICAgICBmbG9hdCBzcGVlZCA9IDA7XHJcbiAgICAgICAgZmxvYXQgdnkgPSAwO1xyXG4gICAgICAgIGJvb2wgQ3B1X011bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgZmxvYXQgQ3B1X3Z4ID0gMDtcclxuICAgICAgICBmbG9hdCBDcHVfdnkgPSAwO1xyXG4gICAgICAgIGZsb2F0IENwdV94ID0gMDtcclxuICAgICAgICBmbG9hdCBDcHVfeSA9IDA7XHJcbiAgICAgICAgZmxvYXQgeGRyYWcgPSAwLjk5ZjtcclxuICAgICAgICBmbG9hdCB5ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgIGZsb2F0IGFjY2VsID0gMC4xZjtcclxuICAgICAgICBmbG9hdCBncmF2aXR5ID0gMGY7XHJcbiAgICAgICAgZmxvYXQgZ3Jhdml0eV9lZmZlY3QgPSAwZjtcclxuICAgICAgICBmbG9hdCBibHVlID0gMWY7XHJcbiAgICAgICAgYm9vbCBwbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBnYW1lX292ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJvb2wgbW92ZWQgPSBmYWxzZTtcclxuICAgICAgICBib29sIFN0b3BXaGVuTm90TW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgYm9vbCBVcGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgIFZlY3RvcjJbXSBidXR0b25zID0gbmV3IFZlY3RvcjJbXSB7IG5ldyBWZWN0b3IyKDkyLjVmLCA0Mi41ZiksIG5ldyBWZWN0b3IyKDE0Mi41ZiwgMTE3ZiksIG5ldyBWZWN0b3IyKDkyLjVmLCAxNjBmKSB9O1xyXG4gICAgICAgIFZlY3RvcjJbXSBidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZSA9IG5ldyBWZWN0b3IyW10geyBuZXcgVmVjdG9yMig5Mi41ZiwgNDIuNWYpLCBuZXcgVmVjdG9yMigxNDIuNWYsIDExN2YpLCBuZXcgVmVjdG9yMig5Mi41ZiwgMTYwZikgfTtcclxuICAgICAgICBib29sIE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIgPSBmYWxzZTtcclxuICAgICAgICBib29sIENwdV9Nb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ5dGUgYWxwaGEgPSAyNTU7XHJcbiAgICAgICAgc3RyaW5nW10gc2F2ZWRfZ2FtZXM7XHJcbiAgICAgICAgQ29sb3IgQmFja3JvdW5kQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICBDb2xvciBhY3R1YWxDb2xvcjtcclxuICAgICAgICBDb2xvciBiYWxsQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICBDb2xvciBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgQ29sb3IgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvcjtcclxuICAgICAgICBSYW5kb20gcmFuZG9tID0gbmV3IFJhbmRvbSgpO1xyXG4gICAgICAgIGJvb2wgTF9QcmVzc2VkX0xhc3RfRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBmbG9hdCBkaXN0YW5jZSA9IDBmO1xyXG4gICAgICAgIGJvb2wgTXVsdGlwbHlfUHJlc3NlZF9MYXN0X0ZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgLy8gQmxlbmRTdGF0ZSBhbmQgU3ByaXRlU29ydE1vZGUgbm90IHN1cHBvcnRlZCBpbiBCcmlkZ2UgLSB1c2luZyBkZWZhdWx0c1xyXG4gICAgICAgIGludCBzZWNzID0gMDtcclxuICAgICAgICBib29sIGZ1bGxfc2NyZWVuX3RlbXAgPSBmYWxzZTtcclxuICAgICAgICBmbG9hdCBtYXhpbXVuID0gMDtcclxuICAgICAgICBwcm90ZWN0ZWQgZmxvYXQgTWFrZUZsb2F0UGVyZmVjdChmbG9hdCBpbnB1dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKGZsb2F0KU1hdGguUm91bmQoaW5wdXQgKiAxMDApIC8gMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgU2F2ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgc2F2aW5nZGlyZWN0b3J5ID0gU3RvcmFnZS5HZXRTYXZpbmdzQ291bnQoKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICBTYXZlVG8oc2F2aW5nZGlyZWN0b3J5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT25FeGl0aW5nIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlclxyXG4gICAgICAgIC8vIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uRXhpdGluZyhPYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgYXJncylcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlmIChwbGF5aW5nICYmIGF1dG9zYXZlKVxyXG4gICAgICAgIC8vICAgICAgICAgU2F2ZSgpO1xyXG4gICAgICAgIC8vICAgICBiYXNlLk9uRXhpdGluZyhzZW5kZXIsIGFyZ3MpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBwcm90ZWN0ZWQgZmxvYXQgTWFrZUdyYXZpdHlQZXJmZWN0KGZsb2F0IGlucHV0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoZmxvYXQpTWF0aC5Sb3VuZChpbnB1dCAqIDEwMDAwKSAvIDEwMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgdGFnLCBsYXN0X3RhZztcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIGdhbWUgc2hvdWxkIGRyYXcgaXRzZWxmLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiZ2FtZVRpbWVcIj5Qcm92aWRlcyBhIHNuYXBzaG90IG9mIHRpbWluZyB2YWx1ZXMuPC9wYXJhbT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEcmF3KEdhbWVUaW1lIGdhbWVUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGFza2luZ193b3JsZF9uYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RldmljZS5DbGVhcihDb2xvci5SZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwbGF5aW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBBZGQgeW91ciBkcmF3aW5nIGNvZGUgaGVyZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFVwZGF0ZUJhY2tncm91bmRDb2xvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoKGZsb2F0KShNYXRoLkNvcyh4ICogMC4wMWYpICsgMSkgLyAyLCAoZmxvYXQpKE1hdGguQ29zKHkgKiAwLjAxZikgKyAxKSAvIDIsIGJsdWUsIGFscGhhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmFwaGljc0RldmljZS5DbGVhcihCYWNrcm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGb2xsb3dCYWNrZ3JvdW5kQ29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IG5ldyBDb2xvcigoZmxvYXQpKE1hdGguQ29zKHggKiAwLjAxZikgKyAxKSAvIDIsIChmbG9hdCkoTWF0aC5Db3MoeSAqIDAuMDFmKSArIDEpIC8gMiwgYmx1ZSwgYWxwaGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBiYWxsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcodGV4dHVyZSwgbmV3IFZlY3RvcjIoeCwgeSksIGJhbGxDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJTcGVlZDogXCIgKyBzcGVlZCArIFwicGl4L2ZyYW1lXCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC0gMjUwLCAwKSwgQ29sb3IuR3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiTWF4aW11biBTcGVlZDogXCIgKyBtYXhpbXVuICsgXCJwaXgvZnJhbWVcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLSAyNTAsIDE1KSwgQ29sb3IuR3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiRWxldmF0aW9uOiBcIiArICgteSArIEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkhlaWdodCkgKyBcInBpeFwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAtIDI1MCwgMzApLCBDb2xvci5HcmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJEaXN0YW5jZTogXCIgKyBkaXN0YW5jZSArIFwicGl4XCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC0gMjUwLCA0NSksIENvbG9yLkdyZWVuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmF2aXR5ICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiR3Jhdml0eTogXCIgKyBNYWtlR3Jhdml0eVBlcmZlY3QoZ3Jhdml0eSkgKyBcInBpeC9mcmFtZVwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAtIDI1MCwgNjApLCBDb2xvci5HcmVlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYmFsbCwgbmV3IFZlY3RvcjIobXVsdGlwbGF5ZXJ4LCBtdWx0aXBsYXllcnkpLCBtdWx0aXBsYXllckNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ3B1X011bHRpcGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJhbGwsIG5ldyBWZWN0b3IyKENwdV94LCBDcHVfeSksIENvbG9yLldoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeCArPSB2eDtcclxuICAgICAgICAgICAgICAgICAgICB5ICs9IHZ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHkgKz0gZ3Jhdml0eV9lZmZlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENwdV9NdWx0aXBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENwdV9Nb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnggKz0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZ4IDwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z4IC09IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnkgKz0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZ5IDwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z5IC09IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcHVfeCArPSBDcHVfdng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENwdV95ICs9IENwdV92eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENwdV94ID49IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnggPSBDcHVfdnggLSAoQ3B1X3Z4ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfeCA9IC10ZXh0dXJlLldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKENwdV94IDwgLXRleHR1cmUuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z4ID0gKGZsb2F0KU1hdGguQWJzKENwdV92eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfeCA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ3B1X3kgPj0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnkgPSBDcHVfdnkgLSAoQ3B1X3Z5ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfeSA9IC10ZXh0dXJlLkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChDcHVfeSA8IC10ZXh0dXJlLkhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnkgPSAoZmxvYXQpTWF0aC5BYnMoQ3B1X3Z5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV95ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU3RvcFdoZW5Ob3RNb3ZpbmcgJiYgIUNwdV9Nb3ZlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3B1X3Z5ICo9IHlkcmFnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcHVfdnggKj0geGRyYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENwdV92eSArPSBncmF2aXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghbXVsdGlwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzZW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuQSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4IC09IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCArPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5VcCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5XKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgLT0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRG93bikgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5TKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgKz0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ICs9IG11bHRpcGxheWVydng7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ICs9IG11bHRpcGxheWVydnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzZW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGxheWVyX01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggLT0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuQSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCAtPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGxheWVyX01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCArPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ICs9IDAuMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbGF5ZXJfTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVXApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5IC09IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgLT0gMC4xZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBsYXllcl9Nb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5Eb3duKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSArPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5TKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ICs9IDAuMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbGF5ZXJfTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdFNoaWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodFNoaWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlb2ZzY3JlZW5sb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRDb250cm9sKSAmJiAhS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5UKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdENvbnRyb2wpICYmIEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsYXN0X3RhZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnID0gIXRhZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X3RhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF90YWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0Q29udHJvbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZW9mc2NyZWVubG9zZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkNhcHNMb2NrKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBuZXcgQ29sb3IocmFuZG9tLk5leHQoMjU2KSwgcmFuZG9tLk5leHQoMjU2KSwgcmFuZG9tLk5leHQoMjU2KSwgcmFuZG9tLk5leHQoMjU2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBtdWx0aXBsYXllckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkY1KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuVHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GNikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IGFjdHVhbE11bHRpcGxheWVyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GNykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GOCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuQmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5CbGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GOSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuSG90UGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLkhvdFBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjEwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMTEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EZWxldGUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKmlmIChNYXRoLlNxcnQoKG11bHRpcGxheWVyeCAtIHgpICogKG11bHRpcGxheWVyeCAtIHgpKSArICgobXVsdGlwbGF5ZXJ5IC0geSkgKiAobXVsdGlwbGF5ZXJ5IC0geSkpIDw9IDE2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCAtPSAtdng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSAtPSAtdnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gLW11bHRpcGxheWVydnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gLW11bHRpcGxheWVydng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJ4ID49IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE11bHRpcGxheWVyRGllTXVsdGlwbGF5ZXJEaXNzaXBlYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm91bmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gbXVsdGlwbGF5ZXJ2eCAtIChtdWx0aXBsYXllcnZ4ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gLXRleHR1cmUuV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobXVsdGlwbGF5ZXJ4IDwgLXRleHR1cmUuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IChmbG9hdClNYXRoLkFicyhtdWx0aXBsYXllcnZ4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyeSA+PSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSBtdWx0aXBsYXllcnZ5IC0gKG11bHRpcGxheWVydnkgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAtdGV4dHVyZS5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobXVsdGlwbGF5ZXJ5IDwgLXRleHR1cmUuSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAoZmxvYXQpTWF0aC5BYnMobXVsdGlwbGF5ZXJ2eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RvcFdoZW5Ob3RNb3ZpbmcgJiYgIU11bHRpcGxheWVyX01vdmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ5ICo9IHlkcmFnO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggKj0geGRyYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSArPSBncmF2aXR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sc2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDYpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkNikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9wV2hlbk5vdE1vdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQ3KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDcpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcFdoZW5Ob3RNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRDQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtUGFkNCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ1KSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQ1KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVCkgJiYgIUtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdENvbnRyb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHJhbmRvbS5OZXh0KDAsIEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gcmFuZG9tLk5leHQoMCwgR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLkhlaWdodCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5DKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBhID0gcmFuZG9tLk5leHQoMCwgMjU2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IGIgPSByYW5kb20uTmV4dCgwLCAyNTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgYyA9IHJhbmRvbS5OZXh0KDAsIDI1Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBkID0gcmFuZG9tLk5leHQoMCwgMjU2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gbmV3IENvbG9yKGEsIGIsIGMsIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gbmV3IENvbG9yKGEsIGIsIGMsIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbnRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgYSA9IHJhbmRvbS5OZXh0KDAsIDI1Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBiID0gcmFuZG9tLk5leHQoMCwgMjU2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50IGMgPSByYW5kb20uTmV4dCgwLCAyNTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgZCA9IHJhbmRvbS5OZXh0KDAsIDI1Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IG5ldyBDb2xvcihhLCBiLCBjLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvciA9IG5ldyBDb2xvcihhLCBiLCBjLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtUXVvdGVzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gbmV3IENvbG9yKHJhbmRvbS5OZXh0KDAsIDI1NiksIHJhbmRvbS5OZXh0KDAsIDI1NiksIHJhbmRvbS5OZXh0KDAsIDI1NiksIGJhbGxDb2xvci5BKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gYWN0dWFsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuQikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5XaWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuSSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBDb2xvci5UcmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuSCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBhY3R1YWxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShiYWxsQ29sb3IgPT0gQ29sb3IuVHJhbnNwYXJlbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBDb2xvci5Ib3RQaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gYmFsbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5YKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5X2VmZmVjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkUpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRXNjYXBlKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdXRvc2F2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5TdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ193b3JsZF9uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ19uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmFwaGljcy5Jc0Z1bGxTY3JlZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLlRvZ2dsZUZ1bGxTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWJvdW5jZSBoYW5kbGVkIGJ5IGJ1dHRvbiBzdGF0ZSB0cmFja2luZ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5WKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5jeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlopKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm91bmN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkwpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFMX1ByZXNzZWRfTGFzdF9GcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggPSAtdng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSA9IC12eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTF9QcmVzc2VkX0xhc3RfRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleVVwKEtleXMuTCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMX1ByZXNzZWRfTGFzdF9GcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHkgKz0gMC4wMDFmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdyYXZpdHkgPD0gMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHkgLT0gMC4wMDFmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuSikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ZHJhZyA9IDFmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZHJhZyA9IDFmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlNwYWNlKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhcGhpY3MuSXNGdWxsU2NyZWVuID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5Ub2dnbGVGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBiYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBDcHVfTW92ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBDcHVfTXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBDcHVfdnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIENwdV92eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZV9vdmVyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5TdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZUJhY2tncm91bmRDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvcFdoZW5Ob3RNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgeGRyYWcgPSAwLjk5ZjtcclxuICAgICAgICAgICAgICAgICAgICB5ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZWwgPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlfZWZmZWN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyZWRnZW9mc2NyZWVuZGllID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgRm9sbG93QmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbHNlbmFibGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRBbHQpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHRBbHQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuVSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZHJhZyA9IDAuOTlmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuSykpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoYmx1ZSA9PSAyNTUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVlICs9IDEyNyAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkYpKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoIShibHVlID09IDApKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1ZSAtPSAxMjcgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlkpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllckNvbG9yID0gQ29sb3IuV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJlZGdlb2ZzY3JlZW5kaWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVydnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtdWx0aXBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkxlZnRTaGlmdCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodFNoaWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZW9mc2NyZWVubG9zZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5MZWZ0Q29udHJvbCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5SaWdodENvbnRyb2wpKSAmJiAhS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5UKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZW9mc2NyZWVubG9zZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkcpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yID0gQ29sb3IuQmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gQ29sb3IuQmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkYxKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VvZnNjcmVlbmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZV9vdmVyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHNlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbVBlcmlvZCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3VzZU1vdmVCYXNlUGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtUXVlc3Rpb24pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTW91c2VNb3ZlQmFzZVBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EaXZpZGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlQmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tyb3VuZENvbG9yID0gbmV3IENvbG9yKHJhbmRvbS5OZXh0KDAsIDI1NiksIHJhbmRvbS5OZXh0KDAsIDI1NiksIHJhbmRvbS5OZXh0KDAsIDI1NikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5UYWIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbE11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbU1pbnVzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbVBsdXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJjb250cm9sc2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5GMTIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbGF5ZXJEaWVNdWx0aXBsYXllckRpc3NpcGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGF5ZXJ2eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyY29udHJvbHNlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTnVtTG9jaykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBsYXllckRpZU11bHRpcGxheWVyRGlzc2lwZWFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuSG9tZSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyQ29sb3IgPSBDb2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTXVsdGlwbGF5ZXJDb2xvciA9IENvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmVkZ2VvZnNjcmVlbmRpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsYXllcmNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQzKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZ4IDwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggLT0gYWNjZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodnggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCArPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnkgPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSAtPSBhY2NlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2eSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5ICs9IGFjY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQwKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDApKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZWwgKz0gMC4wMDFmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EMSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQxKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VsIC09IDAuMDAxZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY2VsIDwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkQyKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk51bVBhZDIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZWwgPSAwLjFmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EOCkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ4KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yID0gbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIHJhbmRvbS5OZXh0KDAsIDI1NikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBhY3R1YWxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5EOSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5OdW1QYWQ5KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvbGxvd0JhY2tncm91bmRDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkJhY2spKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93QmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZU1vdmVCYXNlUGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gTW91c2UuR2V0U3RhdGUoKS5YO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IE1vdXNlLkdldFN0YXRlKCkuWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IE1vdXNlLkdldFN0YXRlKCkuWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IE1vdXNlLkdldFN0YXRlKCkuWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5SaWdodEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFNb3VzZU1vdmVCYXNlUGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gTW91c2UuR2V0U3RhdGUoKS5YO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IE1vdXNlLkdldFN0YXRlKCkuWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeCA9IE1vdXNlLkdldFN0YXRlKCkuWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxheWVyeSA9IE1vdXNlLkdldFN0YXRlKCkuWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5QYWdlVXApKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlQmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlBhZ2VEb3duKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZUJhY2tncm91bmRDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVuZCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrcm91bmRDb2xvciA9IENvbG9yLk9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlQmFja2dyb3VuZENvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbU9wZW5CcmFja2V0cykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbENvbG9yICE9IENvbG9yLlRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBDb2xvci5PcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IgPSBDb2xvci5PcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLk9lbUNsb3NlQnJhY2tldHMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxDb2xvciAhPSBDb2xvci5UcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yLkEgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ29sb3IuQSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuT2VtQmFja3NsYXNoKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDb2xvci5BKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IuQSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChPdmVyZmxvd0V4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1TZW1pY29sb24pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWxsQ29sb3IgIT0gQ29sb3IuVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbENvbG9yLkEtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yLkEtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoT3ZlcmZsb3dFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuU3VidHJhY3QpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJ0cmFjdF9QcmVzc2VkX0xhc3RfRnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5Ub2dnbGVGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRyYWN0X1ByZXNzZWRfTGFzdF9GcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5VXAoS2V5cy5TdWJ0cmFjdCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0cmFjdF9QcmVzc2VkX0xhc3RfRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuTGVmdFdpbmRvd3MpIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuUmlnaHRXaW5kb3dzKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93c19wcmVzc2VkX2xhc3RfZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENwdV9NdWx0aXBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfeCA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcHVfeSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlVcChLZXlzLkxlZnRXaW5kb3dzKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlJpZ2h0V2luZG93cykpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dzX3ByZXNzZWRfbGFzdF9mcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5NdWx0aXBseSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU11bHRpcGx5X1ByZXNzZWRfTGFzdF9GcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLlN0YXRlID09IFNvdW5kU3RhdGUuU3RvcHBlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuU3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGx5X1ByZXNzZWRfTGFzdF9GcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5VXAoS2V5cy5NdWx0aXBseSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBseV9QcmVzc2VkX0xhc3RfRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlVcChLZXlzLk9lbUNvbW1hKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hX3ByZXNzZWRfbGFzdF9mcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5PZW1Db21tYSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbW1hX3ByZXNzZWRfbGFzdF9mcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmUuRXF1YWxzKGJhbGwpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBibGFja19iYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBiYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hX3ByZXNzZWRfbGFzdF9mcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qU3lzdGVtLklPLlN0cmVhbVdyaXRlciBkcmFnd3JpdGVyID0gbmV3IFN5c3RlbS5JTy5TdHJlYW1Xcml0ZXIoXCIuLi9kcmFnLnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ3dyaXRlci5Xcml0ZSh4ZHJhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWd3cml0ZXIuRmx1c2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ3dyaXRlci5DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0uSU8uU3RyZWFtV3JpdGVyIGdyYXZpdHl3cml0ZXIgPSBuZXcgU3lzdGVtLklPLlN0cmVhbVdyaXRlcihcIi4uL2dyYXZpdHkudHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5d3JpdGVyLldyaXRlKGdyYXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5d3JpdGVyLkZsdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHl3cml0ZXIuQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2Vzcy5TdGFydChAXCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFZpc3VhbCBTdHVkaW8gMjAxMyBEYWRkeVxcUHJvamVjdHNcXFZhcmlhYmxlIENoYW5nZXJcXFZhcmlhYmxlIENoYW5nZXJcXGJpblxcRGVidWdcXFZhcmlhYmxlIENoYW5nZXIuZXhlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9jZXNzW10gV2FpdCA9IFByb2Nlc3MuR2V0UHJvY2Vzc2VzQnlOYW1lKFwiVmFyaWFibGUgQ2hhbmdlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yZWFjaCAoUHJvY2VzcyBwIGluIFdhaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuV2FpdEZvckV4aXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0uSU8uU3RyZWFtUmVhZGVyIGdyYXZpdHlwID0gbmV3IFN5c3RlbS5JTy5TdHJlYW1SZWFkZXIoQFwiLi5cXGdyYXZpdHkudHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eSA9IGZsb2F0LlBhcnNlKGdyYXZpdHlwLlJlYWRMaW5lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChBcmd1bWVudE51bGxFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKEZvcm1hdEV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoT3ZlcmZsb3dFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eXAuQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3lzdGVtLklPLlN0cmVhbVJlYWRlciBkcmFncCA9IG5ldyBTeXN0ZW0uSU8uU3RyZWFtUmVhZGVyKFwiLi4vZHJhZy50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ZHJhZyA9IGZsb2F0LlBhcnNlKGRyYWdwLlJlYWRMaW5lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChGb3JtYXRFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKE92ZXJmbG93RXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChBcmd1bWVudE51bGxFeGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ3AuQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWRyYWcgPSB4ZHJhZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9BY2NlbGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3lzdGVtLklPLlN0cmVhbVJlYWRlciBhY2NlbHAgPSBuZXcgU3lzdGVtLklPLlN0cmVhbVJlYWRlcihcIi4uL0FjZWVsZXJhdGlvbi50eHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlbCA9IGZsb2F0LlBhcnNlKGFjY2VscC5SZWFkTGluZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoRm9ybWF0RXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChPdmVyZmxvd0V4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoQXJndW1lbnROdWxsRXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VscC5DbG9zZSgpOyovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRjQpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lX292ZXJlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVfT3Zlci5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVfb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkdhbWUgT3ZlciFcXG5QcmVzcyBTcGFjZSB0byBSZXN0YXJ0IGFuZCBQcmVzcyBlc2Mgb3IgZSB0byBxdWl0XCIsIG5ldyBWZWN0b3IyKEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LldpZHRoIC8gMiwgR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuSGVpZ2h0IC8gMiksIENvbG9yLkdvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsQ29sb3IuQSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbENvbG9yLkEgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGVlZCA9IE1ha2VGbG9hdFBlcmZlY3QoKGZsb2F0KShNYXRoLkFicyhNYXRoLlNxcnQoKHZ4ICogdngpICsgKCh2eSArIGdyYXZpdHlfZWZmZWN0KSAqICh2eSArIGdyYXZpdHlfZWZmZWN0KSkpKSkpO1xyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPiBtYXhpbXVuKVxyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW4gPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA+PSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZW9mc2NyZWVubG9zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydCBhbmQgUHJlc3MgZXNjIG9yIGUgdG8gcXVpdFwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAvIDIsIEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkhlaWdodCAvIDIpLCBDb2xvci5Hb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnggPSB2eCAtICh2eCAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSAtdGV4dHVyZS5XaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA8IC10ZXh0dXJlLldpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2VvZnNjcmVlbmxvc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiR2FtZSBPdmVyIVxcblByZXNzIFNwYWNlIHRvIFJlc3RhcnQgYW5kIFByZXNzIGVzYyBvciBlIHRvIHF1aXRcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLyAyLCBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5IZWlnaHQgLyAyKSwgQ29sb3IuR29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ4ID0gKGZsb2F0KU1hdGguQWJzKHZ4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdW5jZS5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuQm91bmRzLldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5ID49IEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkJvdW5kcy5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZW9mc2NyZWVubG9zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJHYW1lIE92ZXIhXFxuUHJlc3MgU3BhY2UgdG8gUmVzdGFydCBhbmQgUHJlc3MgZXNjIG9yIGUgdG8gcXVpdFwiLCBuZXcgVmVjdG9yMihHcmFwaGljc0RldmljZS5WaWV3cG9ydC5XaWR0aCAvIDIsIEdyYXBoaWNzRGV2aWNlLlZpZXdwb3J0LkhlaWdodCAvIDIpLCBDb2xvci5Hb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvdW5jeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgPSB2eSAtICh2eSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eV9lZmZlY3QgPSAtZ3Jhdml0eV9lZmZlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3VuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IC10ZXh0dXJlLkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh5IDwgLXRleHR1cmUuSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2VvZnNjcmVlbmxvc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiR2FtZSBPdmVyIVxcblByZXNzIFNwYWNlIHRvIFJlc3RhcnQgYW5kIFByZXNzIGVzYyBvciBlIHRvIHF1aXRcIiwgbmV3IFZlY3RvcjIoR3JhcGhpY3NEZXZpY2UuVmlld3BvcnQuV2lkdGggLyAyLCBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5IZWlnaHQgLyAyKSwgQ29sb3IuR29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib3VuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ5ID0gKGZsb2F0KU1hdGguQWJzKHZ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHlfZWZmZWN0ID0gLWdyYXZpdHlfZWZmZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm91bmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBHcmFwaGljc0RldmljZS5WaWV3cG9ydC5Cb3VuZHMuSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdG9wV2hlbk5vdE1vdmluZyAmJiAhbW92ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2eCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdnggKj0geGRyYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgdnkgKj0geWRyYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eV9lZmZlY3QgKj0geWRyYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eV9lZmZlY3QgKz0gZ3Jhdml0eTtcclxuICAgICAgICAgICAgICAgICAgICBMaXN0PFZlY3RvcjI+IHBvc2l0aW9ucyA9IGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5DYWxsRm9yKG5ldyBMaXN0PFZlY3RvcjI+KCksKF9vMSk9PntfbzEuQWRkKG5ldyBWZWN0b3IyKHgsIHkpKTtyZXR1cm4gX28xO30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5BZGQobmV3IFZlY3RvcjIobXVsdGlwbGF5ZXJ4LCBtdWx0aXBsYXllcnkpKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMuQWRkKG5ldyBWZWN0b3IyKENwdV94LCBDcHVfeSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaW50IHggPSAwOyB4IDwgcG9zaXRpb25zLkNvdW50OyB4KyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGludCB5ID0gMDsgeSA8IHBvc2l0aW9ucy5Db3VudDsgeSsrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PSB5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjdGFuZ2xlIHJlY3RBID0gbmV3IFJlY3RhbmdsZShwb3NpdGlvbnNbeF0uVG9Qb2ludCgpLCBuZXcgUG9pbnQoMzIsIDMyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWN0YW5nbGUgcmVjdEIgPSBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uc1t5XS5Ub1BvaW50KCksIG5ldyBQb2ludCgzMiwgMzIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWN0QS5Db250YWlucyhwb3NpdGlvbnNbeV0pIHx8IHJlY3RCLkNvbnRhaW5zKHBvc2l0aW9uc1t4XSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IH0gLy8gRW1wdHkgYmxvY2sgLSBvcmlnaW5hbCBjb2RlIHdhcyBpbmNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYXNraW5nX3dvcmxkX25hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5CZWdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDMyOSwgMjU5LCAxNTIsIDI3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDMzMCwgMjYwLCAxNTAsIDI1KSwgQ29sb3IuV2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWNzID09IDUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLkJhY2sgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkNvdW50PGNoYXI+KHdvcmxkX25hbWUpID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmxkX25hbWUgPSB3b3JsZF9uYW1lLlJlbW92ZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkNvdW50PGNoYXI+KHdvcmxkX25hbWUpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5FbnRlciB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZnJvbV9zYXZlZF9nYW1lX2NvZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRQbGF5aW5nKGdhbWVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdWxsX3NjcmVlbl90ZW1wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLlRvZ2dsZUZ1bGxTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VuZF9wbGF5aW5nX3RlbXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291bmRfcGxheWluZ190ZW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsX3NjcmVlbl90ZW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5Fc2NhcGUgfSkgJiYgQ2FuUGVyZm9ybUFjdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfd29ybGRfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuTGVmdENvbnRyb2wsIEtleXMuViB9KSB8fCBCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuUmlnaHRDb250cm9sLCBLZXlzLlYgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaXBib2FyZEhlbHBlci5SZWFkQ2xpcGJvYXJkVGV4dCgoQWN0aW9uPHN0cmluZz4pKHRleHQgPT4geyB3b3JsZF9uYW1lID0gdGV4dDsgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCBuID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yZWFjaCAoS2V5c1tdIGsgaW4ga2V5cy5WYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQoaykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoKHVzaG9ydClHZXRLZXlTdGF0ZSgweDE0KSkgJiAweGZmZmYpICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmxkX25hbWUgKz0gQ2hhci5Ub1VwcGVyKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9MaXN0PGNoYXI+KGtleXMuS2V5cylbbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ybGRfbmFtZSArPSBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlRvTGlzdDxjaGFyPihrZXlzLktleXMpW25dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3MgPiA1KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VjcysrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdvcmxkX25hbWUgPT0gXCJcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiV29ybGQgTmFtZS4uLlwiLCBuZXcgVmVjdG9yMigzNDUsIDI2MCksIENvbG9yLkxpZ2h0R3JheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCB3b3JsZF9uYW1lLCBuZXcgVmVjdG9yMigzNDUsIDI2MCksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJXaGF0J3MgdGhlIG5hbWUgb2YgeW91ciB3b3JsZD9cIiwgbmV3IFZlY3RvcjIoMzQ1LCAyMjUpLCBDb2xvci5XaGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhc2tpbmdfbmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgS2V5Ym9hcmRTdGF0ZSBzdGF0ZSA9IEtleWJvYXJkLkdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RldmljZS5DbGVhcihDb2xvci5SZWQpO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDMyOSwgMjU5LCAxNTIsIDI3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoMzMwLCAyNjAsIDE1MCwgMjUpLCBDb2xvci5XaGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBpbnQgbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjcyA9PSA1KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuQmFjayB9KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkNvdW50PGNoYXI+KG5hbWUpID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUuUmVtb3ZlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQ291bnQ8Y2hhcj4obmFtZSkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJlaW5nUHJlc3NlZChuZXcgS2V5c1tdIHsgS2V5cy5FbnRlciB9KSAmJiBDYW5QZXJmb3JtQWN0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQmVpbmdQcmVzc2VkKG5ldyBLZXlzW10geyBLZXlzLkVzY2FwZSB9KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuTGVmdENvbnRyb2wsIEtleXMuViB9KSB8fCBCZWluZ1ByZXNzZWQobmV3IEtleXNbXSB7IEtleXMuUmlnaHRDb250cm9sLCBLZXlzLlYgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaXBib2FyZEhlbHBlci5SZWFkQ2xpcGJvYXJkVGV4dCgoQWN0aW9uPHN0cmluZz4pKHRleHQgPT4geyBuYW1lICs9IHRleHQ7IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JlYWNoIChLZXlzW10gayBpbiBrZXlzLlZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCZWluZ1ByZXNzZWQoaykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKCh1c2hvcnQpR2V0S2V5U3RhdGUoMHgxNCkpICYgMHhmZmZmKSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gQ2hhci5Ub1VwcGVyKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9MaXN0PGNoYXI+KGtleXMuS2V5cylbbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0xpc3Q8Y2hhcj4oa2V5cy5LZXlzKVtuXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiTmFtZS4uLlwiLCBuZXcgVmVjdG9yMigzNDUsIDI2MCksIENvbG9yLkxpZ2h0R3JheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBuYW1lLCBuZXcgVmVjdG9yMigzNDUsIDI2MCksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJXaGF0J3MgeW91ciBuYW1lP1wiLCBuZXcgVmVjdG9yMigzNDUsIDIyNSksIENvbG9yLldoaXRlKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgc2VjcysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNhdmVkX2dhbWVfY29kZSAhPSBzYXZlZF9nYW1lX2Rlc3RuYXRpb24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGV2aWNlLkNsZWFyKENvbG9yLkJsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyb21fc2F2ZWRfZ2FtZV9jb2RlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuV3JpdGVBbGxUZXh0KHNhdmVkX2dhbWVfZGVzdG5hdGlvbiArIFwiL3dvcmxkX25hbWUudHh0XCIsIHdvcmxkX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVkX2dhbWVfZGVzdG5hdGlvbiA9IHNhdmVkX2dhbWVfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICBsb29raW5nX2F0X3NhdmVkX2dhbWVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tX3NhdmVkX2dhbWVfY29kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkX25hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVkX2dhbWVzID0gU3RvcmFnZS5HZXREaXJlY3RvcmllcyhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnQgbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXMgPSBuZXcgc3RyaW5nW3NhdmVkX2dhbWVzLkxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGRfbmFtZXMgPSBuZXcgc3RyaW5nW3NhdmVkX2dhbWVzLkxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIHMgaW4gc2F2ZWRfZ2FtZXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gU3RvcmFnZS5SZWFkQWxsTGluZXMocyArIFwiL25hbWUudHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNbbl0gPSBsaW5lcy5MZW5ndGggPiAwID8gbGluZXNbMF0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzW25dID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gU3RvcmFnZS5SZWFkQWxsTGluZXMocyArIFwiL3dvcmxkX25hbWUudHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ybGRfbmFtZXNbbl0gPSBsaW5lcy5MZW5ndGggPiAwID8gbGluZXNbMF0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzW25dID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3MgJSA1ID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5VcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrIGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gODUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uc19Mb2FkX0ZpbGVfUmlnaHRfQ2xpY2suUGxheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxMDAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDEzNClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGljay5EZWxldGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uc19Mb2FkX0ZpbGVfUmlnaHRfQ2xpY2suUmVuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW91c2UuU2V0UG9zaXRpb24oKGludClidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZVsoaW50KWJ1dHRvbiAtIDFdLlgsIChpbnQpYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGVbKGludClidXR0b24gLSAxXS5ZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW91c2UuU2V0UG9zaXRpb24oKGludClTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkxhc3Q8VmVjdG9yMj4oYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGUpLlgsIChpbnQpU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5MYXN0PFZlY3RvcjI+KGJ1dHRvbnNfcmlnaHRfY2xpY2tfbG9hZF9maWxlKS5ZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkRvd24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXR0b25zX0xvYWRfRmlsZV9SaWdodF9DbGljayBidXR0b247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDg1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrLlBsYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTAwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAxMzQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uc19Mb2FkX0ZpbGVfUmlnaHRfQ2xpY2suRGVsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbnNfTG9hZF9GaWxlX1JpZ2h0X0NsaWNrLlJlbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlLlNldFBvc2l0aW9uKChpbnQpYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGVbKGludClidXR0b24gKyAxXS5YLCAoaW50KWJ1dHRvbnNfcmlnaHRfY2xpY2tfbG9hZF9maWxlWyhpbnQpYnV0dG9uICsgMV0uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlLlNldFBvc2l0aW9uKChpbnQpYnV0dG9uc19yaWdodF9jbGlja19sb2FkX2ZpbGVbMF0uWCwgKGludClidXR0b25zX3JpZ2h0X2NsaWNrX2xvYWRfZmlsZVswXS5ZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlggPj0gMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5YIDw9IDE1MCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gODUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg0OSwgNDksIDEwMiwgMzcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDUwLCA1MCwgMTAwLCAzNSksIG5ldyBDb2xvcigyMzQsIDI0MSwgMjQ4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbnRlcikpICYmIENhblBlcmZvcm1BY3Rpb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZChzYXZlZF9nYW1lX2Rlc3RuYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uID0gc2F2ZWRfZ2FtZV9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJQbGF5XCIsIG5ldyBWZWN0b3IyKDYyLCA1NyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVzY2FwZSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29raW5nX2F0X3NhdmVkX2dhbWVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRfZ2FtZV9kZXN0bmF0aW9uID0gc2F2ZWRfZ2FtZV9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL25leHQgYnV0dG9uIGxvYWQgc2F2ZWQgc2F2ZWQgZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlggPj0gMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5YIDw9IDI1MCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTAwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAxMzQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg0OSwgOTksIDEwMiwgMzcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDUwLCAxMDAsIDEwMCwgMzUpLCBuZXcgQ29sb3IoMjM0LCAyNDEsIDI0OCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbnRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuRGVsZXRlRGlyZWN0b3J5KHNhdmVkX2dhbWVfZGVzdG5hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZF9nYW1lX2Rlc3RuYXRpb24gPSBzYXZlZF9nYW1lX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIkRlbGV0ZVwiLCBuZXcgVmVjdG9yMig2MiwgMTA3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlggPj0gMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5YIDw9IDE1MCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPj0gMTM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSAxODUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg0OSwgMTQ5LCAxMDIsIDM3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg1MCwgMTUwLCAxMDAsIDM1KSwgbmV3IENvbG9yKDIzNCwgMjQxLCAyNDgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfd29ybGRfbmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX3NhdmVkX2dhbWVfY29kZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJSZW5hbWVcIiwgbmV3IFZlY3RvcjIoNjIsIDE1NyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsb29raW5nX2F0X3NhdmVkX2dhbWVzKVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVzY2FwZSkgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FKSkgJiYgQ2FuUGVyZm9ybUFjdGlvbigpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvb2tpbmdfYXRfc2F2ZWRfZ2FtZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEtleWJvYXJkU3RhdGUga2V5cyA9IEtleWJvYXJkLkdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBNb3VzZVN0YXRlIG1vdXNlID0gTW91c2UuR2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIGludCBuID0gMDtcclxuICAgICAgICAgICAgICAgIGludCB5ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBzIGluIHNhdmVkX2dhbWVzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoMCwgeSAqIDE1LCA0MDEsIDE2KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3VzZS5ZID49IHkgKiAxNSAmJiBtb3VzZS5ZIDw9ICgoeSAqIDE1KSArIDE1KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3VzZS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwga2V5cy5Jc0tleURvd24oS2V5cy5FbnRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWQocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhcGhpY3MuSXNGdWxsU2NyZWVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLlRvZ2dsZUZ1bGxTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3VzZS5SaWdodEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29raW5nX2F0X3NhdmVkX2dhbWVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZF9nYW1lX2Rlc3RuYXRpb24gPSBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDAsIHkgKiAxNSwgNDAwLCAxNSksIENvbG9yLk9yYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoMCwgeSAqIDE1LCA0MDAsIDE1KSwgQ29sb3IuRGFya09yYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCB3b3JsZF9uYW1lc1tuXSArIFwiIGJ5IFwiICsgbmFtZXNbbl0sIG5ldyBWZWN0b3IyKDAsIHkgKiAxNSksIENvbG9yLkJsYWNrKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIHkrKztcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5FbmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGV2aWNlLkNsZWFyKENvbG9yLkJsdWUpO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guQmVnaW4oKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNzICUgNSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLlVwKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbiBidXR0b247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gODUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b24uTmV3R2FtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoTW91c2UuR2V0U3RhdGUoKS5ZID49IDEwMCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMTM0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uLkxvYWRHYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBCdXR0b24uRXhpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlLlNldFBvc2l0aW9uKChpbnQpYnV0dG9uc1soaW50KWJ1dHRvbiAtIDFdLlgsIChpbnQpYnV0dG9uc1soaW50KWJ1dHRvbiAtIDFdLlkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdXNlLlNldFBvc2l0aW9uKChpbnQpU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5MYXN0PFZlY3RvcjI+KGJ1dHRvbnMpLlgsIChpbnQpU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5MYXN0PFZlY3RvcjI+KGJ1dHRvbnMpLlkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRG93bikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXR0b24gYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDg1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uLk5ld0dhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxMDAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDEzNClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IEJ1dHRvbi5Mb2FkR2FtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gQnV0dG9uLkV4aXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3VzZS5TZXRQb3NpdGlvbigoaW50KWJ1dHRvbnNbKGludClidXR0b24gKyAxXS5YLCAoaW50KWJ1dHRvbnNbKGludClidXR0b24gKyAxXS5ZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3VzZS5TZXRQb3NpdGlvbigoaW50KWJ1dHRvbnNbMF0uWCwgKGludClidXR0b25zWzBdLlkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWCA+PSAzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlggPD0gMTUwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA8PSA4NSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg0OSwgNDksIDEwMiwgMzcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNTAsIDUwLCAxMDAsIDM1KSwgbmV3IENvbG9yKDIzNCwgMjQxLCAyNDgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbnRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfd29ybGRfbmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFza2luZ19uYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBiYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZF9wbGF5aW5nX3RlbXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJOZXcgR2FtZVwiLCBuZXcgVmVjdG9yMig2MiwgNTcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FKSB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVzY2FwZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vbmV4dCBidXR0b24gbG9hZCBzYXZlZCBzYXZlZCBnYW1lXHJcbiAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5YID49IDM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWCA8PSAyNTAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZID49IDEwMCAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMTM0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDQ5LCA5OSwgMTAyLCAzNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg1MCwgMTAwLCAxMDAsIDM1KSwgbmV3IENvbG9yKDIzNCwgMjQxLCAyNDgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5MZWZ0QnV0dG9uID09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgS2V5Ym9hcmQuR2V0U3RhdGUoKS5Jc0tleURvd24oS2V5cy5FbnRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29raW5nX2F0X3NhdmVkX2dhbWVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNraW5nX3dvcmxkX25hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRfZ2FtZXMgPSBTdG9yYWdlLkdldERpcmVjdG9yaWVzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQgbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzID0gbmV3IHN0cmluZ1tzYXZlZF9nYW1lcy5MZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JsZF9uYW1lcyA9IG5ldyBzdHJpbmdbc2F2ZWRfZ2FtZXMuTGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIHMgaW4gc2F2ZWRfZ2FtZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi9uYW1lLnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc1tuXSA9IGxpbmVzLkxlbmd0aCA+IDAgPyBsaW5lc1swXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzW25dID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IFN0b3JhZ2UuUmVhZEFsbExpbmVzKHMgKyBcIi93b3JsZF9uYW1lLnR4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JsZF9uYW1lc1tuXSA9IGxpbmVzLkxlbmd0aCA+IDAgPyBsaW5lc1swXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzW25dID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2tpbmdfbmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJMb2FkIEdhbWVcIiwgbmV3IFZlY3RvcjIoNjIsIDEwNyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgIC8vIG5ldyBidXR0b24gZXhpdFxyXG4gICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuWCA+PSAzNSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlggPD0gMTUwICYmIE1vdXNlLkdldFN0YXRlKCkuWSA+PSAxMzUgJiYgTW91c2UuR2V0U3RhdGUoKS5ZIDw9IDE4NSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3KGJ1dHRvbiwgbmV3IFJlY3RhbmdsZSg0OSwgMTQ5LCAxMDIsIDM3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDUwLCAxNTAsIDEwMCwgMzUpLCBuZXcgQ29sb3IoMjM0LCAyNDEsIDI0OCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNb3VzZS5HZXRTdGF0ZSgpLkxlZnRCdXR0b24gPT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCBLZXlib2FyZC5HZXRTdGF0ZSgpLklzS2V5RG93bihLZXlzLkVudGVyKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhd1N0cmluZyhzcHJpdGVGb250LCBcIlF1aXRcIiwgbmV3IFZlY3RvcjIoNjIsIDE1NyksIENvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgICAgIC8qLy8gbmV3IGJ1dHRvbiBwbGF5IG11c2ljXHJcbiAgICAgICAgICAgICAgICBpZiAoTW91c2UuR2V0U3RhdGUoKS5YID49IDM1ICYmIE1vdXNlLkdldFN0YXRlKCkuWCA8PSAxNTAgJiYgTW91c2UuR2V0U3RhdGUoKS5ZID49IDE4NSAmJiBNb3VzZS5HZXRTdGF0ZSgpLlkgPD0gMjM1KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXcoYnV0dG9uLCBuZXcgUmVjdGFuZ2xlKDQ5LCAxOTksIDEwMiwgMzcpLCBDb2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQmF0Y2guRHJhdyhidXR0b24sIG5ldyBSZWN0YW5nbGUoNTAsIDIwMCwgMTAwLCAzNSksIG5ldyBDb2xvcigyMzQsIDI0MSwgMjQ4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1vdXNlLkdldFN0YXRlKCkuTGVmdEJ1dHRvbiA9PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IEtleWJvYXJkLkdldFN0YXRlKCkuSXNLZXlEb3duKEtleXMuRW50ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllZF9tdXNpY19sYXN0X2ZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuU3RhdGUgPT0gU291bmRTdGF0ZS5TdG9wcGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluc3RhbmNlLlN0YXRlID09IFNvdW5kU3RhdGUuUGxheWluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5TdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVkX211c2ljX2xhc3RfZnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZWRfbXVzaWNfbGFzdF9mcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5TdGF0ZSA9PSBTb3VuZFN0YXRlLlN0b3BwZWQpXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCYXRjaC5EcmF3U3RyaW5nKHNwcml0ZUZvbnQsIFwiUGxheSBNdXNpY1wiLCBuZXcgVmVjdG9yMig2MiwgMjA3KSwgQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkRyYXdTdHJpbmcoc3ByaXRlRm9udCwgXCJTdG9wIE11c2ljXCIsIG5ldyBWZWN0b3IyKDYyLCAyMDcpLCBDb2xvci5CbGFjayk7Ki9cclxuICAgICAgICAgICAgICAgIHNwcml0ZUJhdGNoLkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgc2VjcysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UuRHJhdyhnYW1lVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcblxubmFtZXNwYWNlIEJvdW5jeV9CYWxsXG57XG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cbiAgICB7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcbiAgICAgICAge1xuICAgICAgICAgICAgdXNpbmcgKHZhciBnYW1lID0gbmV3IEdhbWUxKCkpXHJcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnYW1lLlJ1bigpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkh0bWw1LkRvY3VtZW50LkJvZHkuQXBwZW5kQ2hpbGQobmV3IEJyaWRnZS5IdG1sNS5IVE1MQW5jaG9yRWxlbWVudFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFRleHRDb250ZW50ID0gXCJIb3cgdG8gUGxheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEhyZWYgPSBcImhvdy10by1wbGF5Lmh0bWxcIixcclxuICAgICAgICAgICAgICAgICAgICBDbGFzc05hbWUgPSBcImhlbHAtbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFRhcmdldCA9IFwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ1c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQm91bmN5X0JhbGxcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIGxvY2FsU3RvcmFnZSB3cmFwcGVyIHRvIHJlcGxhY2UgU3lzdGVtLklPIGZpbGUgb3BlcmF0aW9uc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgU3RvcmFnZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgY29uc3Qgc3RyaW5nIFBSRUZJWCA9IFwiQm91bmN5QmFsbF9cIjtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IHN0cmluZyBTQVZFU19LRVkgPSBcIkJvdW5jeUJhbGxfU2F2ZXNMaXN0XCI7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBzdHJpbmcgU0FWSU5HU19LRVkgPSBcIkJvdW5jeUJhbGxfU2F2aW5nc1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgSW5pdGlhbGl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHNhdmluZ3MgY291bnRlciBpZiBub3QgcHJlc2VudFxyXG4gICAgICAgICAgICBpZiAoV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKFNBVklOR1NfS0VZKSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBXaW5kb3cuTG9jYWxTdG9yYWdlLlNldEl0ZW0oU0FWSU5HU19LRVksIFwiMFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIERpcmVjdG9yeUV4aXN0cyhzdHJpbmcgcGF0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHNhdmUgZXhpc3RzXHJcbiAgICAgICAgICAgIHN0cmluZyBrZXkgPSBQYXRoVG9LZXkocGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBXaW5kb3cuTG9jYWxTdG9yYWdlLkdldEl0ZW0oa2V5ICsgXCJfZXhpc3RzXCIpICE9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgQ3JlYXRlRGlyZWN0b3J5KHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgV2luZG93LkxvY2FsU3RvcmFnZS5TZXRJdGVtKGtleSArIFwiX2V4aXN0c1wiLCBcInRydWVcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgdG8gc2F2ZXMgbGlzdFxyXG4gICAgICAgICAgICB2YXIgc2F2ZXMgPSBHZXRTYXZlc0xpc3QoKTtcclxuICAgICAgICAgICAgaWYgKCFzYXZlcy5Db250YWlucyhrZXkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzYXZlcy5BZGQoa2V5KTtcclxuICAgICAgICAgICAgICAgIFNhdmVTYXZlc0xpc3Qoc2F2ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgRGVsZXRlRGlyZWN0b3J5KHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBpdGVtcyB3aXRoIHRoaXMgcHJlZml4XHJcbiAgICAgICAgICAgIHZhciBrZXlzVG9SZW1vdmUgPSBuZXcgTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgV2luZG93LkxvY2FsU3RvcmFnZS5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nIGsgPSBXaW5kb3cuTG9jYWxTdG9yYWdlLktleShpKTtcclxuICAgICAgICAgICAgICAgIGlmIChrICE9IG51bGwgJiYgay5TdGFydHNXaXRoKGtleSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5c1RvUmVtb3ZlLkFkZChrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgayBpbiBrZXlzVG9SZW1vdmUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFdpbmRvdy5Mb2NhbFN0b3JhZ2UuUmVtb3ZlSXRlbShrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gc2F2ZXMgbGlzdFxyXG4gICAgICAgICAgICB2YXIgc2F2ZXMgPSBHZXRTYXZlc0xpc3QoKTtcclxuICAgICAgICAgICAgc2F2ZXMuUmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgIFNhdmVTYXZlc0xpc3Qoc2F2ZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIEZpbGVFeGlzdHMoc3RyaW5nIHBhdGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcga2V5ID0gUGF0aFRvS2V5KHBhdGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKGtleSkgIT0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIFJlYWRBbGxUZXh0KHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChzdHJpbmcpV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKGtleSkgPz8gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBXcml0ZUFsbFRleHQoc3RyaW5nIHBhdGgsIHN0cmluZyBjb250ZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGtleSA9IFBhdGhUb0tleShwYXRoKTtcclxuICAgICAgICAgICAgV2luZG93LkxvY2FsU3RvcmFnZS5TZXRJdGVtKGtleSwgY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZ1tdIFJlYWRBbGxMaW5lcyhzdHJpbmcgcGF0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBjb250ZW50ID0gUmVhZEFsbFRleHQocGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChzdHJpbmcuSXNOdWxsT3JFbXB0eShjb250ZW50KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgc3RyaW5nWzBdO1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGVudC5TcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgV3JpdGVBbGxMaW5lcyhzdHJpbmcgcGF0aCwgc3RyaW5nW10gbGluZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXcml0ZUFsbFRleHQocGF0aCwgc3RyaW5nLkpvaW4oXCJcXG5cIiwgbGluZXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nW10gR2V0RGlyZWN0b3JpZXMoc3RyaW5nIGJhc2VQYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNhdmVzID0gR2V0U2F2ZXNMaXN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlcy5Ub0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGludCBHZXRTYXZpbmdzQ291bnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHZhbCA9IChzdHJpbmcpV2luZG93LkxvY2FsU3RvcmFnZS5HZXRJdGVtKFNBVklOR1NfS0VZKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbCAhPSBudWxsID8gaW50LlBhcnNlKHZhbCkgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFNldFNhdmluZ3NDb3VudChpbnQgY291bnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaW5kb3cuTG9jYWxTdG9yYWdlLlNldEl0ZW0oU0FWSU5HU19LRVksIGNvdW50LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEluY3JlbWVudFNhdmluZ3NDb3VudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXRTYXZpbmdzQ291bnQoR2V0U2F2aW5nc0NvdW50KCkgKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHN0cmluZyBQYXRoVG9LZXkoc3RyaW5nIHBhdGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IFdpbmRvd3Mtc3R5bGUgcGF0aHMgdG8gc3RvcmFnZSBrZXlzXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgQzovVXNlcnMvLi4uL0FwcERhdGEvTG9jYWwvTWljaGFlbC9Cb3VuY3kgQmFsbC8gcHJlZml4XHJcbiAgICAgICAgICAgIHN0cmluZyBrZXkgPSBwYXRoO1xyXG4gICAgICAgICAgICBpbnQgaWR4ID0ga2V5LkluZGV4T2YoXCJCb3VuY3kgQmFsbC9cIik7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LlN1YnN0cmluZyhpZHggKyBcIkJvdW5jeSBCYWxsL1wiLkxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWxzbyBoYW5kbGUganVzdCB0aGUgc2F2ZSBuYW1lXHJcbiAgICAgICAgICAgIGtleSA9IGtleS5SZXBsYWNlKFwiL1wiLCBcIl9cIikuUmVwbGFjZShcIlxcXFxcIiwgXCJfXCIpLlJlcGxhY2UoXCIudHh0XCIsIFwiXCIpLlJlcGxhY2UoXCIucG5nXCIsIFwiX2ltZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFBSRUZJWCArIGtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIExpc3Q8c3RyaW5nPiBHZXRTYXZlc0xpc3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGpzb24gPSAoc3RyaW5nKVdpbmRvdy5Mb2NhbFN0b3JhZ2UuR2V0SXRlbShTQVZFU19LRVkpO1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nLklzTnVsbE9yRW1wdHkoanNvbikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpc3Q8c3RyaW5nPigpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2ltcGxlIHBhcnNpbmcgLSBqdXN0IHNwbGl0IGJ5IGNvbW1hXHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbmV3IExpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZy5Jc051bGxPckVtcHR5KGpzb24pKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3JlYWNoICh2YXIgaXRlbSBpbiBqc29uLlNwbGl0KCcsJykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHJpbmcuSXNOdWxsT3JFbXB0eShpdGVtKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5BZGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIFNhdmVTYXZlc0xpc3QoTGlzdDxzdHJpbmc+IHNhdmVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV2luZG93LkxvY2FsU3RvcmFnZS5TZXRJdGVtKFNBVkVTX0tFWSwgc3RyaW5nLkpvaW4oXCIsXCIsIHNhdmVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
