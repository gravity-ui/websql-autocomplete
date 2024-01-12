import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";
import { MySqlParserListener } from "./MySqlParserListener.js";
import { MySqlParserVisitor } from "./MySqlParserVisitor.js";
export declare class MySqlParser extends antlr.Parser {
    static readonly SPACE = 1;
    static readonly SPEC_MYSQL_COMMENT = 2;
    static readonly COMMENT_INPUT = 3;
    static readonly LINE_COMMENT = 4;
    static readonly ADD = 5;
    static readonly ALL = 6;
    static readonly ALTER = 7;
    static readonly ALWAYS = 8;
    static readonly ANALYZE = 9;
    static readonly AND = 10;
    static readonly ARRAY = 11;
    static readonly AS = 12;
    static readonly ASC = 13;
    static readonly ATTRIBUTE = 14;
    static readonly BEFORE = 15;
    static readonly BETWEEN = 16;
    static readonly BOTH = 17;
    static readonly BUCKETS = 18;
    static readonly BY = 19;
    static readonly CALL = 20;
    static readonly CASCADE = 21;
    static readonly CASE = 22;
    static readonly CAST = 23;
    static readonly CHANGE = 24;
    static readonly CHARACTER = 25;
    static readonly CHECK = 26;
    static readonly COLLATE = 27;
    static readonly COLUMN = 28;
    static readonly CONDITION = 29;
    static readonly CONSTRAINT = 30;
    static readonly CONTINUE = 31;
    static readonly CONVERT = 32;
    static readonly CREATE = 33;
    static readonly CROSS = 34;
    static readonly CURRENT = 35;
    static readonly CURRENT_ROLE = 36;
    static readonly CURRENT_USER = 37;
    static readonly CURSOR = 38;
    static readonly DATABASE = 39;
    static readonly DATABASES = 40;
    static readonly DECLARE = 41;
    static readonly DEFAULT = 42;
    static readonly DELAYED = 43;
    static readonly DELETE = 44;
    static readonly DESC = 45;
    static readonly DESCRIBE = 46;
    static readonly DETERMINISTIC = 47;
    static readonly DIAGNOSTICS = 48;
    static readonly DISTINCT = 49;
    static readonly DISTINCTROW = 50;
    static readonly DROP = 51;
    static readonly EACH = 52;
    static readonly ELSE = 53;
    static readonly ELSEIF = 54;
    static readonly EMPTY = 55;
    static readonly ENCLOSED = 56;
    static readonly ENFORCED = 57;
    static readonly ESCAPED = 58;
    static readonly EXCEPT = 59;
    static readonly EXISTS = 60;
    static readonly EXIT = 61;
    static readonly EXPLAIN = 62;
    static readonly FALSE = 63;
    static readonly FETCH = 64;
    static readonly FOR = 65;
    static readonly FORCE = 66;
    static readonly FOREIGN = 67;
    static readonly FROM = 68;
    static readonly FULLTEXT = 69;
    static readonly GENERATED = 70;
    static readonly GET = 71;
    static readonly GRANT = 72;
    static readonly GROUP = 73;
    static readonly HAVING = 74;
    static readonly HIGH_PRIORITY = 75;
    static readonly HISTOGRAM = 76;
    static readonly IF = 77;
    static readonly IGNORE = 78;
    static readonly IGNORED = 79;
    static readonly IN = 80;
    static readonly INDEX = 81;
    static readonly INFILE = 82;
    static readonly INNER = 83;
    static readonly INOUT = 84;
    static readonly INSERT = 85;
    static readonly INTERVAL = 86;
    static readonly INTO = 87;
    static readonly IS = 88;
    static readonly ITERATE = 89;
    static readonly JOIN = 90;
    static readonly KEY = 91;
    static readonly KEYS = 92;
    static readonly KILL = 93;
    static readonly LATERAL = 94;
    static readonly LEADING = 95;
    static readonly LEAVE = 96;
    static readonly LEFT = 97;
    static readonly LIKE = 98;
    static readonly LIMIT = 99;
    static readonly LINEAR = 100;
    static readonly LINES = 101;
    static readonly LOAD = 102;
    static readonly LOCK = 103;
    static readonly LOCKED = 104;
    static readonly LOOP = 105;
    static readonly LOW_PRIORITY = 106;
    static readonly MASTER_BIND = 107;
    static readonly MASTER_SSL_VERIFY_SERVER_CERT = 108;
    static readonly MATCH = 109;
    static readonly MAXVALUE = 110;
    static readonly MINVALUE = 111;
    static readonly MODIFIES = 112;
    static readonly NATURAL = 113;
    static readonly NOT = 114;
    static readonly NO_WRITE_TO_BINLOG = 115;
    static readonly NULL_LITERAL = 116;
    static readonly NUMBER = 117;
    static readonly ON = 118;
    static readonly OPTIMIZE = 119;
    static readonly OPTION = 120;
    static readonly OPTIONAL = 121;
    static readonly OPTIONALLY = 122;
    static readonly OR = 123;
    static readonly ORDER = 124;
    static readonly OUT = 125;
    static readonly OUTER = 126;
    static readonly OUTFILE = 127;
    static readonly OVER = 128;
    static readonly PARTITION = 129;
    static readonly PRIMARY = 130;
    static readonly PROCEDURE = 131;
    static readonly PURGE = 132;
    static readonly RANGE = 133;
    static readonly READ = 134;
    static readonly READS = 135;
    static readonly REFERENCES = 136;
    static readonly REGEXP = 137;
    static readonly RELEASE = 138;
    static readonly RENAME = 139;
    static readonly REPEAT = 140;
    static readonly REPLACE = 141;
    static readonly REQUIRE = 142;
    static readonly RESIGNAL = 143;
    static readonly RESTRICT = 144;
    static readonly RETAIN = 145;
    static readonly RETURN = 146;
    static readonly REVOKE = 147;
    static readonly RIGHT = 148;
    static readonly RLIKE = 149;
    static readonly SCHEMA = 150;
    static readonly SCHEMAS = 151;
    static readonly SELECT = 152;
    static readonly SET = 153;
    static readonly SEPARATOR = 154;
    static readonly SHOW = 155;
    static readonly SIGNAL = 156;
    static readonly SKIP_ = 157;
    static readonly SKIP_QUERY_REWRITE = 158;
    static readonly SPATIAL = 159;
    static readonly SQL = 160;
    static readonly SQLEXCEPTION = 161;
    static readonly SQLSTATE = 162;
    static readonly SQLWARNING = 163;
    static readonly SQL_BIG_RESULT = 164;
    static readonly SQL_CALC_FOUND_ROWS = 165;
    static readonly SQL_SMALL_RESULT = 166;
    static readonly SSL = 167;
    static readonly STACKED = 168;
    static readonly STARTING = 169;
    static readonly STATEMENT = 170;
    static readonly STRAIGHT_JOIN = 171;
    static readonly TABLE = 172;
    static readonly TERMINATED = 173;
    static readonly THEN = 174;
    static readonly TO = 175;
    static readonly TRAILING = 176;
    static readonly TRIGGER = 177;
    static readonly TRUE = 178;
    static readonly UNDO = 179;
    static readonly UNION = 180;
    static readonly UNIQUE = 181;
    static readonly UNLOCK = 182;
    static readonly UNSIGNED = 183;
    static readonly UPDATE = 184;
    static readonly USAGE = 185;
    static readonly USE = 186;
    static readonly USING = 187;
    static readonly VALUES = 188;
    static readonly WHEN = 189;
    static readonly WHERE = 190;
    static readonly WHILE = 191;
    static readonly WITH = 192;
    static readonly WRITE = 193;
    static readonly XOR = 194;
    static readonly ZEROFILL = 195;
    static readonly TINYINT = 196;
    static readonly SMALLINT = 197;
    static readonly MEDIUMINT = 198;
    static readonly MIDDLEINT = 199;
    static readonly INT = 200;
    static readonly INT1 = 201;
    static readonly INT2 = 202;
    static readonly INT3 = 203;
    static readonly INT4 = 204;
    static readonly INT8 = 205;
    static readonly INTEGER = 206;
    static readonly BIGINT = 207;
    static readonly REAL = 208;
    static readonly DOUBLE = 209;
    static readonly PRECISION = 210;
    static readonly FLOAT = 211;
    static readonly FLOAT4 = 212;
    static readonly FLOAT8 = 213;
    static readonly DECIMAL = 214;
    static readonly DEC = 215;
    static readonly NUMERIC = 216;
    static readonly DATE = 217;
    static readonly TIME = 218;
    static readonly TIMESTAMP = 219;
    static readonly DATETIME = 220;
    static readonly YEAR = 221;
    static readonly CHAR = 222;
    static readonly VARCHAR = 223;
    static readonly NVARCHAR = 224;
    static readonly NATIONAL = 225;
    static readonly BINARY = 226;
    static readonly VARBINARY = 227;
    static readonly TINYBLOB = 228;
    static readonly BLOB = 229;
    static readonly MEDIUMBLOB = 230;
    static readonly LONG = 231;
    static readonly LONGBLOB = 232;
    static readonly TINYTEXT = 233;
    static readonly TEXT = 234;
    static readonly MEDIUMTEXT = 235;
    static readonly LONGTEXT = 236;
    static readonly ENUM = 237;
    static readonly VARYING = 238;
    static readonly SERIAL = 239;
    static readonly YEAR_MONTH = 240;
    static readonly DAY_HOUR = 241;
    static readonly DAY_MINUTE = 242;
    static readonly DAY_SECOND = 243;
    static readonly HOUR_MINUTE = 244;
    static readonly HOUR_SECOND = 245;
    static readonly MINUTE_SECOND = 246;
    static readonly SECOND_MICROSECOND = 247;
    static readonly MINUTE_MICROSECOND = 248;
    static readonly HOUR_MICROSECOND = 249;
    static readonly DAY_MICROSECOND = 250;
    static readonly JSON_ARRAY = 251;
    static readonly JSON_ARRAYAGG = 252;
    static readonly JSON_ARRAY_APPEND = 253;
    static readonly JSON_ARRAY_INSERT = 254;
    static readonly JSON_CONTAINS = 255;
    static readonly JSON_CONTAINS_PATH = 256;
    static readonly JSON_DEPTH = 257;
    static readonly JSON_EXTRACT = 258;
    static readonly JSON_INSERT = 259;
    static readonly JSON_KEYS = 260;
    static readonly JSON_LENGTH = 261;
    static readonly JSON_MERGE = 262;
    static readonly JSON_MERGE_PATCH = 263;
    static readonly JSON_MERGE_PRESERVE = 264;
    static readonly JSON_OBJECT = 265;
    static readonly JSON_OBJECTAGG = 266;
    static readonly JSON_OVERLAPS = 267;
    static readonly JSON_PRETTY = 268;
    static readonly JSON_QUOTE = 269;
    static readonly JSON_REMOVE = 270;
    static readonly JSON_REPLACE = 271;
    static readonly JSON_SCHEMA_VALID = 272;
    static readonly JSON_SCHEMA_VALIDATION_REPORT = 273;
    static readonly JSON_SEARCH = 274;
    static readonly JSON_SET = 275;
    static readonly JSON_STORAGE_FREE = 276;
    static readonly JSON_STORAGE_SIZE = 277;
    static readonly JSON_TABLE = 278;
    static readonly JSON_TYPE = 279;
    static readonly JSON_UNQUOTE = 280;
    static readonly JSON_VALID = 281;
    static readonly JSON_VALUE = 282;
    static readonly NESTED = 283;
    static readonly ORDINALITY = 284;
    static readonly PATH = 285;
    static readonly AVG = 286;
    static readonly BIT_AND = 287;
    static readonly BIT_OR = 288;
    static readonly BIT_XOR = 289;
    static readonly COUNT = 290;
    static readonly CUME_DIST = 291;
    static readonly DENSE_RANK = 292;
    static readonly FIRST_VALUE = 293;
    static readonly GROUP_CONCAT = 294;
    static readonly LAG = 295;
    static readonly LAST_VALUE = 296;
    static readonly LEAD = 297;
    static readonly MAX = 298;
    static readonly MIN = 299;
    static readonly NTILE = 300;
    static readonly NTH_VALUE = 301;
    static readonly PERCENT_RANK = 302;
    static readonly RANK = 303;
    static readonly ROW_NUMBER = 304;
    static readonly STD = 305;
    static readonly STDDEV = 306;
    static readonly STDDEV_POP = 307;
    static readonly STDDEV_SAMP = 308;
    static readonly SUM = 309;
    static readonly VAR_POP = 310;
    static readonly VAR_SAMP = 311;
    static readonly VARIANCE = 312;
    static readonly CURRENT_DATE = 313;
    static readonly CURRENT_TIME = 314;
    static readonly CURRENT_TIMESTAMP = 315;
    static readonly LOCALTIME = 316;
    static readonly CURDATE = 317;
    static readonly CURTIME = 318;
    static readonly DATE_ADD = 319;
    static readonly DATE_SUB = 320;
    static readonly EXTRACT = 321;
    static readonly LOCALTIMESTAMP = 322;
    static readonly NOW = 323;
    static readonly POSITION = 324;
    static readonly SUBSTR = 325;
    static readonly SUBSTRING = 326;
    static readonly SYSDATE = 327;
    static readonly TRIM = 328;
    static readonly UTC_DATE = 329;
    static readonly UTC_TIME = 330;
    static readonly UTC_TIMESTAMP = 331;
    static readonly ACCOUNT = 332;
    static readonly ACTION = 333;
    static readonly AFTER = 334;
    static readonly AGGREGATE = 335;
    static readonly ALGORITHM = 336;
    static readonly ANY = 337;
    static readonly AT = 338;
    static readonly AUTHORS = 339;
    static readonly AUTOCOMMIT = 340;
    static readonly AUTOEXTEND_SIZE = 341;
    static readonly AUTO_INCREMENT = 342;
    static readonly AVG_ROW_LENGTH = 343;
    static readonly BEGIN = 344;
    static readonly BINLOG = 345;
    static readonly BIT = 346;
    static readonly BLOCK = 347;
    static readonly BOOL = 348;
    static readonly BOOLEAN = 349;
    static readonly BTREE = 350;
    static readonly CACHE = 351;
    static readonly CASCADED = 352;
    static readonly CHAIN = 353;
    static readonly CHANGED = 354;
    static readonly CHANNEL = 355;
    static readonly CHECKSUM = 356;
    static readonly PAGE_CHECKSUM = 357;
    static readonly CIPHER = 358;
    static readonly CLASS_ORIGIN = 359;
    static readonly CLIENT = 360;
    static readonly CLOSE = 361;
    static readonly CLUSTERING = 362;
    static readonly COALESCE = 363;
    static readonly CODE = 364;
    static readonly COLUMNS = 365;
    static readonly COLUMN_FORMAT = 366;
    static readonly COLUMN_NAME = 367;
    static readonly COMMENT = 368;
    static readonly COMMIT = 369;
    static readonly COMPACT = 370;
    static readonly COMPLETION = 371;
    static readonly COMPRESSED = 372;
    static readonly COMPRESSION = 373;
    static readonly CONCURRENT = 374;
    static readonly CONNECT = 375;
    static readonly CONNECTION = 376;
    static readonly CONSISTENT = 377;
    static readonly CONSTRAINT_CATALOG = 378;
    static readonly CONSTRAINT_SCHEMA = 379;
    static readonly CONSTRAINT_NAME = 380;
    static readonly CONTAINS = 381;
    static readonly CONTEXT = 382;
    static readonly CONTRIBUTORS = 383;
    static readonly COPY = 384;
    static readonly CPU = 385;
    static readonly CYCLE = 386;
    static readonly CURSOR_NAME = 387;
    static readonly DATA = 388;
    static readonly DATAFILE = 389;
    static readonly DEALLOCATE = 390;
    static readonly DEFAULT_AUTH = 391;
    static readonly DEFINER = 392;
    static readonly DELAY_KEY_WRITE = 393;
    static readonly DES_KEY_FILE = 394;
    static readonly DIRECTORY = 395;
    static readonly DISABLE = 396;
    static readonly DISCARD = 397;
    static readonly DISK = 398;
    static readonly DO = 399;
    static readonly DUMPFILE = 400;
    static readonly DUPLICATE = 401;
    static readonly DYNAMIC = 402;
    static readonly ENABLE = 403;
    static readonly ENCRYPTED = 404;
    static readonly ENCRYPTION = 405;
    static readonly ENCRYPTION_KEY_ID = 406;
    static readonly END = 407;
    static readonly ENDS = 408;
    static readonly ENGINE = 409;
    static readonly ENGINES = 410;
    static readonly ERROR = 411;
    static readonly ERRORS = 412;
    static readonly ESCAPE = 413;
    static readonly EVEN = 414;
    static readonly EVENT = 415;
    static readonly EVENTS = 416;
    static readonly EVERY = 417;
    static readonly EXCHANGE = 418;
    static readonly EXCLUSIVE = 419;
    static readonly EXPIRE = 420;
    static readonly EXPORT = 421;
    static readonly EXTENDED = 422;
    static readonly EXTENT_SIZE = 423;
    static readonly FAILED_LOGIN_ATTEMPTS = 424;
    static readonly FAST = 425;
    static readonly FAULTS = 426;
    static readonly FIELDS = 427;
    static readonly FILE_BLOCK_SIZE = 428;
    static readonly FILTER = 429;
    static readonly FIRST = 430;
    static readonly FIXED = 431;
    static readonly FLUSH = 432;
    static readonly FOLLOWING = 433;
    static readonly FOLLOWS = 434;
    static readonly FOUND = 435;
    static readonly FULL = 436;
    static readonly FUNCTION = 437;
    static readonly GENERAL = 438;
    static readonly GLOBAL = 439;
    static readonly GRANTS = 440;
    static readonly GROUP_REPLICATION = 441;
    static readonly HANDLER = 442;
    static readonly HASH = 443;
    static readonly HELP = 444;
    static readonly HISTORY = 445;
    static readonly HOST = 446;
    static readonly HOSTS = 447;
    static readonly IDENTIFIED = 448;
    static readonly IGNORE_SERVER_IDS = 449;
    static readonly IMPORT = 450;
    static readonly INCREMENT = 451;
    static readonly INDEXES = 452;
    static readonly INITIAL_SIZE = 453;
    static readonly INPLACE = 454;
    static readonly INSERT_METHOD = 455;
    static readonly INSTALL = 456;
    static readonly INSTANCE = 457;
    static readonly INSTANT = 458;
    static readonly INVISIBLE = 459;
    static readonly INVOKER = 460;
    static readonly IO = 461;
    static readonly IO_THREAD = 462;
    static readonly IPC = 463;
    static readonly ISOLATION = 464;
    static readonly ISSUER = 465;
    static readonly JSON = 466;
    static readonly KEY_BLOCK_SIZE = 467;
    static readonly LANGUAGE = 468;
    static readonly LAST = 469;
    static readonly LEAVES = 470;
    static readonly LESS = 471;
    static readonly LEVEL = 472;
    static readonly LIST = 473;
    static readonly LOCAL = 474;
    static readonly LOGFILE = 475;
    static readonly LOGS = 476;
    static readonly MASTER = 477;
    static readonly MASTER_AUTO_POSITION = 478;
    static readonly MASTER_CONNECT_RETRY = 479;
    static readonly MASTER_DELAY = 480;
    static readonly MASTER_HEARTBEAT_PERIOD = 481;
    static readonly MASTER_HOST = 482;
    static readonly MASTER_LOG_FILE = 483;
    static readonly MASTER_LOG_POS = 484;
    static readonly MASTER_PASSWORD = 485;
    static readonly MASTER_PORT = 486;
    static readonly MASTER_RETRY_COUNT = 487;
    static readonly MASTER_SSL = 488;
    static readonly MASTER_SSL_CA = 489;
    static readonly MASTER_SSL_CAPATH = 490;
    static readonly MASTER_SSL_CERT = 491;
    static readonly MASTER_SSL_CIPHER = 492;
    static readonly MASTER_SSL_CRL = 493;
    static readonly MASTER_SSL_CRLPATH = 494;
    static readonly MASTER_SSL_KEY = 495;
    static readonly MASTER_TLS_VERSION = 496;
    static readonly MASTER_USER = 497;
    static readonly MAX_CONNECTIONS_PER_HOUR = 498;
    static readonly MAX_QUERIES_PER_HOUR = 499;
    static readonly MAX_ROWS = 500;
    static readonly MAX_SIZE = 501;
    static readonly MAX_UPDATES_PER_HOUR = 502;
    static readonly MAX_USER_CONNECTIONS = 503;
    static readonly MEDIUM = 504;
    static readonly MEMBER = 505;
    static readonly MERGE = 506;
    static readonly MESSAGE_TEXT = 507;
    static readonly MID = 508;
    static readonly MIGRATE = 509;
    static readonly MIN_ROWS = 510;
    static readonly MODE = 511;
    static readonly MODIFY = 512;
    static readonly MUTEX = 513;
    static readonly MYSQL = 514;
    static readonly MYSQL_ERRNO = 515;
    static readonly NAME = 516;
    static readonly NAMES = 517;
    static readonly NCHAR = 518;
    static readonly NEVER = 519;
    static readonly NEXT = 520;
    static readonly NO = 521;
    static readonly NOCACHE = 522;
    static readonly NOCOPY = 523;
    static readonly NOCYCLE = 524;
    static readonly NOMAXVALUE = 525;
    static readonly NOMINVALUE = 526;
    static readonly NOWAIT = 527;
    static readonly NODEGROUP = 528;
    static readonly NONE = 529;
    static readonly ODBC = 530;
    static readonly OFFLINE = 531;
    static readonly OFFSET = 532;
    static readonly OF = 533;
    static readonly OJ = 534;
    static readonly OLD_PASSWORD = 535;
    static readonly ONE = 536;
    static readonly ONLINE = 537;
    static readonly ONLY = 538;
    static readonly OPEN = 539;
    static readonly OPTIMIZER_COSTS = 540;
    static readonly OPTIONS = 541;
    static readonly OWNER = 542;
    static readonly PACK_KEYS = 543;
    static readonly PAGE = 544;
    static readonly PAGE_COMPRESSED = 545;
    static readonly PAGE_COMPRESSION_LEVEL = 546;
    static readonly PARSER = 547;
    static readonly PARTIAL = 548;
    static readonly PARTITIONING = 549;
    static readonly PARTITIONS = 550;
    static readonly PASSWORD = 551;
    static readonly PASSWORD_LOCK_TIME = 552;
    static readonly PHASE = 553;
    static readonly PLUGIN = 554;
    static readonly PLUGIN_DIR = 555;
    static readonly PLUGINS = 556;
    static readonly PORT = 557;
    static readonly PRECEDES = 558;
    static readonly PRECEDING = 559;
    static readonly PREPARE = 560;
    static readonly PRESERVE = 561;
    static readonly PREV = 562;
    static readonly PROCESSLIST = 563;
    static readonly PROFILE = 564;
    static readonly PROFILES = 565;
    static readonly PROXY = 566;
    static readonly QUERY = 567;
    static readonly QUICK = 568;
    static readonly REBUILD = 569;
    static readonly RECOVER = 570;
    static readonly RECURSIVE = 571;
    static readonly REDO_BUFFER_SIZE = 572;
    static readonly REDUNDANT = 573;
    static readonly RELAY = 574;
    static readonly RELAY_LOG_FILE = 575;
    static readonly RELAY_LOG_POS = 576;
    static readonly RELAYLOG = 577;
    static readonly REMOVE = 578;
    static readonly REORGANIZE = 579;
    static readonly REPAIR = 580;
    static readonly REPLICATE_DO_DB = 581;
    static readonly REPLICATE_DO_TABLE = 582;
    static readonly REPLICATE_IGNORE_DB = 583;
    static readonly REPLICATE_IGNORE_TABLE = 584;
    static readonly REPLICATE_REWRITE_DB = 585;
    static readonly REPLICATE_WILD_DO_TABLE = 586;
    static readonly REPLICATE_WILD_IGNORE_TABLE = 587;
    static readonly REPLICATION = 588;
    static readonly RESET = 589;
    static readonly RESTART = 590;
    static readonly RESUME = 591;
    static readonly RETURNED_SQLSTATE = 592;
    static readonly RETURNING = 593;
    static readonly RETURNS = 594;
    static readonly REUSE = 595;
    static readonly ROLE = 596;
    static readonly ROLLBACK = 597;
    static readonly ROLLUP = 598;
    static readonly ROTATE = 599;
    static readonly ROW = 600;
    static readonly ROWS = 601;
    static readonly ROW_FORMAT = 602;
    static readonly RTREE = 603;
    static readonly SAVEPOINT = 604;
    static readonly SCHEDULE = 605;
    static readonly SECURITY = 606;
    static readonly SEQUENCE = 607;
    static readonly SERVER = 608;
    static readonly SESSION = 609;
    static readonly SHARE = 610;
    static readonly SHARED = 611;
    static readonly SIGNED = 612;
    static readonly SIMPLE = 613;
    static readonly SLAVE = 614;
    static readonly SLOW = 615;
    static readonly SNAPSHOT = 616;
    static readonly SOCKET = 617;
    static readonly SOME = 618;
    static readonly SONAME = 619;
    static readonly SOUNDS = 620;
    static readonly SOURCE = 621;
    static readonly SQL_AFTER_GTIDS = 622;
    static readonly SQL_AFTER_MTS_GAPS = 623;
    static readonly SQL_BEFORE_GTIDS = 624;
    static readonly SQL_BUFFER_RESULT = 625;
    static readonly SQL_CACHE = 626;
    static readonly SQL_NO_CACHE = 627;
    static readonly SQL_THREAD = 628;
    static readonly START = 629;
    static readonly STARTS = 630;
    static readonly STATS_AUTO_RECALC = 631;
    static readonly STATS_PERSISTENT = 632;
    static readonly STATS_SAMPLE_PAGES = 633;
    static readonly STATUS = 634;
    static readonly STOP = 635;
    static readonly STORAGE = 636;
    static readonly STORED = 637;
    static readonly STRING = 638;
    static readonly SUBCLASS_ORIGIN = 639;
    static readonly SUBJECT = 640;
    static readonly SUBPARTITION = 641;
    static readonly SUBPARTITIONS = 642;
    static readonly SUSPEND = 643;
    static readonly SWAPS = 644;
    static readonly SWITCHES = 645;
    static readonly TABLE_NAME = 646;
    static readonly TABLESPACE = 647;
    static readonly TABLE_TYPE = 648;
    static readonly TEMPORARY = 649;
    static readonly TEMPTABLE = 650;
    static readonly THAN = 651;
    static readonly TRADITIONAL = 652;
    static readonly TRANSACTION = 653;
    static readonly TRANSACTIONAL = 654;
    static readonly TRIGGERS = 655;
    static readonly TRUNCATE = 656;
    static readonly UNBOUNDED = 657;
    static readonly UNDEFINED = 658;
    static readonly UNDOFILE = 659;
    static readonly UNDO_BUFFER_SIZE = 660;
    static readonly UNINSTALL = 661;
    static readonly UNKNOWN = 662;
    static readonly UNTIL = 663;
    static readonly UPGRADE = 664;
    static readonly USER = 665;
    static readonly USE_FRM = 666;
    static readonly USER_RESOURCES = 667;
    static readonly VALIDATION = 668;
    static readonly VALUE = 669;
    static readonly VARIABLES = 670;
    static readonly VIEW = 671;
    static readonly VIRTUAL = 672;
    static readonly VISIBLE = 673;
    static readonly WAIT = 674;
    static readonly WARNINGS = 675;
    static readonly WINDOW = 676;
    static readonly WITHOUT = 677;
    static readonly WORK = 678;
    static readonly WRAPPER = 679;
    static readonly X509 = 680;
    static readonly XA = 681;
    static readonly XML = 682;
    static readonly YES = 683;
    static readonly EUR = 684;
    static readonly USA = 685;
    static readonly JIS = 686;
    static readonly ISO = 687;
    static readonly INTERNAL = 688;
    static readonly QUARTER = 689;
    static readonly MONTH = 690;
    static readonly DAY = 691;
    static readonly HOUR = 692;
    static readonly MINUTE = 693;
    static readonly WEEK = 694;
    static readonly SECOND = 695;
    static readonly MICROSECOND = 696;
    static readonly ADMIN = 697;
    static readonly APPLICATION_PASSWORD_ADMIN = 698;
    static readonly AUDIT_ABORT_EXEMPT = 699;
    static readonly AUDIT_ADMIN = 700;
    static readonly AUTHENTICATION_POLICY_ADMIN = 701;
    static readonly BACKUP_ADMIN = 702;
    static readonly BINLOG_ADMIN = 703;
    static readonly BINLOG_ENCRYPTION_ADMIN = 704;
    static readonly CLONE_ADMIN = 705;
    static readonly CONNECTION_ADMIN = 706;
    static readonly ENCRYPTION_KEY_ADMIN = 707;
    static readonly EXECUTE = 708;
    static readonly FILE = 709;
    static readonly FIREWALL_ADMIN = 710;
    static readonly FIREWALL_EXEMPT = 711;
    static readonly FIREWALL_USER = 712;
    static readonly FLUSH_OPTIMIZER_COSTS = 713;
    static readonly FLUSH_STATUS = 714;
    static readonly FLUSH_TABLES = 715;
    static readonly FLUSH_USER_RESOURCES = 716;
    static readonly GROUP_REPLICATION_ADMIN = 717;
    static readonly INNODB_REDO_LOG_ARCHIVE = 718;
    static readonly INNODB_REDO_LOG_ENABLE = 719;
    static readonly INVOKE = 720;
    static readonly LAMBDA = 721;
    static readonly NDB_STORED_USER = 722;
    static readonly PASSWORDLESS_USER_ADMIN = 723;
    static readonly PERSIST_RO_VARIABLES_ADMIN = 724;
    static readonly PRIVILEGES = 725;
    static readonly PROCESS = 726;
    static readonly RELOAD = 727;
    static readonly REPLICATION_APPLIER = 728;
    static readonly REPLICATION_SLAVE_ADMIN = 729;
    static readonly RESOURCE_GROUP_ADMIN = 730;
    static readonly RESOURCE_GROUP_USER = 731;
    static readonly ROLE_ADMIN = 732;
    static readonly ROUTINE = 733;
    static readonly S3 = 734;
    static readonly SERVICE_CONNECTION_ADMIN = 735;
    static readonly SESSION_VARIABLES_ADMIN = 736;
    static readonly SET_USER_ID = 737;
    static readonly SHOW_ROUTINE = 738;
    static readonly SHUTDOWN = 739;
    static readonly SUPER = 740;
    static readonly SYSTEM_VARIABLES_ADMIN = 741;
    static readonly TABLES = 742;
    static readonly TABLE_ENCRYPTION_ADMIN = 743;
    static readonly VERSION_TOKEN_ADMIN = 744;
    static readonly XA_RECOVER_ADMIN = 745;
    static readonly ARMSCII8 = 746;
    static readonly ASCII = 747;
    static readonly BIG5 = 748;
    static readonly CP1250 = 749;
    static readonly CP1251 = 750;
    static readonly CP1256 = 751;
    static readonly CP1257 = 752;
    static readonly CP850 = 753;
    static readonly CP852 = 754;
    static readonly CP866 = 755;
    static readonly CP932 = 756;
    static readonly DEC8 = 757;
    static readonly EUCJPMS = 758;
    static readonly EUCKR = 759;
    static readonly GB18030 = 760;
    static readonly GB2312 = 761;
    static readonly GBK = 762;
    static readonly GEOSTD8 = 763;
    static readonly GREEK = 764;
    static readonly HEBREW = 765;
    static readonly HP8 = 766;
    static readonly KEYBCS2 = 767;
    static readonly KOI8R = 768;
    static readonly KOI8U = 769;
    static readonly LATIN1 = 770;
    static readonly LATIN2 = 771;
    static readonly LATIN5 = 772;
    static readonly LATIN7 = 773;
    static readonly MACCE = 774;
    static readonly MACROMAN = 775;
    static readonly SJIS = 776;
    static readonly SWE7 = 777;
    static readonly TIS620 = 778;
    static readonly UCS2 = 779;
    static readonly UJIS = 780;
    static readonly UTF16 = 781;
    static readonly UTF16LE = 782;
    static readonly UTF32 = 783;
    static readonly UTF8 = 784;
    static readonly UTF8MB3 = 785;
    static readonly UTF8MB4 = 786;
    static readonly ARCHIVE = 787;
    static readonly BLACKHOLE = 788;
    static readonly CSV = 789;
    static readonly FEDERATED = 790;
    static readonly INNODB = 791;
    static readonly MEMORY = 792;
    static readonly MRG_MYISAM = 793;
    static readonly MYISAM = 794;
    static readonly NDB = 795;
    static readonly NDBCLUSTER = 796;
    static readonly PERFORMANCE_SCHEMA = 797;
    static readonly TOKUDB = 798;
    static readonly REPEATABLE = 799;
    static readonly COMMITTED = 800;
    static readonly UNCOMMITTED = 801;
    static readonly SERIALIZABLE = 802;
    static readonly GEOMETRYCOLLECTION = 803;
    static readonly GEOMCOLLECTION = 804;
    static readonly GEOMETRY = 805;
    static readonly LINESTRING = 806;
    static readonly MULTILINESTRING = 807;
    static readonly MULTIPOINT = 808;
    static readonly MULTIPOLYGON = 809;
    static readonly POINT = 810;
    static readonly POLYGON = 811;
    static readonly ABS = 812;
    static readonly ACOS = 813;
    static readonly ADDDATE = 814;
    static readonly ADDTIME = 815;
    static readonly AES_DECRYPT = 816;
    static readonly AES_ENCRYPT = 817;
    static readonly AREA = 818;
    static readonly ASBINARY = 819;
    static readonly ASIN = 820;
    static readonly ASTEXT = 821;
    static readonly ASWKB = 822;
    static readonly ASWKT = 823;
    static readonly ASYMMETRIC_DECRYPT = 824;
    static readonly ASYMMETRIC_DERIVE = 825;
    static readonly ASYMMETRIC_ENCRYPT = 826;
    static readonly ASYMMETRIC_SIGN = 827;
    static readonly ASYMMETRIC_VERIFY = 828;
    static readonly ATAN = 829;
    static readonly ATAN2 = 830;
    static readonly BENCHMARK = 831;
    static readonly BIN = 832;
    static readonly BIT_COUNT = 833;
    static readonly BIT_LENGTH = 834;
    static readonly BUFFER = 835;
    static readonly CATALOG_NAME = 836;
    static readonly CEIL = 837;
    static readonly CEILING = 838;
    static readonly CENTROID = 839;
    static readonly CHARACTER_LENGTH = 840;
    static readonly CHARSET = 841;
    static readonly CHAR_LENGTH = 842;
    static readonly COERCIBILITY = 843;
    static readonly COLLATION = 844;
    static readonly COMPRESS = 845;
    static readonly CONCAT = 846;
    static readonly CONCAT_WS = 847;
    static readonly CONNECTION_ID = 848;
    static readonly CONV = 849;
    static readonly CONVERT_TZ = 850;
    static readonly COS = 851;
    static readonly COT = 852;
    static readonly CRC32 = 853;
    static readonly CREATE_ASYMMETRIC_PRIV_KEY = 854;
    static readonly CREATE_ASYMMETRIC_PUB_KEY = 855;
    static readonly CREATE_DH_PARAMETERS = 856;
    static readonly CREATE_DIGEST = 857;
    static readonly CROSSES = 858;
    static readonly DATEDIFF = 859;
    static readonly DATE_FORMAT = 860;
    static readonly DAYNAME = 861;
    static readonly DAYOFMONTH = 862;
    static readonly DAYOFWEEK = 863;
    static readonly DAYOFYEAR = 864;
    static readonly DECODE = 865;
    static readonly DEGREES = 866;
    static readonly DES_DECRYPT = 867;
    static readonly DES_ENCRYPT = 868;
    static readonly DIMENSION = 869;
    static readonly DISJOINT = 870;
    static readonly ELT = 871;
    static readonly ENCODE = 872;
    static readonly ENCRYPT = 873;
    static readonly ENDPOINT = 874;
    static readonly ENGINE_ATTRIBUTE = 875;
    static readonly ENVELOPE = 876;
    static readonly EQUALS = 877;
    static readonly EXP = 878;
    static readonly EXPORT_SET = 879;
    static readonly EXTERIORRING = 880;
    static readonly EXTRACTVALUE = 881;
    static readonly FIELD = 882;
    static readonly FIND_IN_SET = 883;
    static readonly FLOOR = 884;
    static readonly FORMAT = 885;
    static readonly FOUND_ROWS = 886;
    static readonly FROM_BASE64 = 887;
    static readonly FROM_DAYS = 888;
    static readonly FROM_UNIXTIME = 889;
    static readonly GEOMCOLLFROMTEXT = 890;
    static readonly GEOMCOLLFROMWKB = 891;
    static readonly GEOMETRYCOLLECTIONFROMTEXT = 892;
    static readonly GEOMETRYCOLLECTIONFROMWKB = 893;
    static readonly GEOMETRYFROMTEXT = 894;
    static readonly GEOMETRYFROMWKB = 895;
    static readonly GEOMETRYN = 896;
    static readonly GEOMETRYTYPE = 897;
    static readonly GEOMFROMTEXT = 898;
    static readonly GEOMFROMWKB = 899;
    static readonly GET_FORMAT = 900;
    static readonly GET_LOCK = 901;
    static readonly GLENGTH = 902;
    static readonly GREATEST = 903;
    static readonly GTID_SUBSET = 904;
    static readonly GTID_SUBTRACT = 905;
    static readonly HEX = 906;
    static readonly IFNULL = 907;
    static readonly INET6_ATON = 908;
    static readonly INET6_NTOA = 909;
    static readonly INET_ATON = 910;
    static readonly INET_NTOA = 911;
    static readonly INSTR = 912;
    static readonly INTERIORRINGN = 913;
    static readonly INTERSECTS = 914;
    static readonly ISCLOSED = 915;
    static readonly ISEMPTY = 916;
    static readonly ISNULL = 917;
    static readonly ISSIMPLE = 918;
    static readonly IS_FREE_LOCK = 919;
    static readonly IS_IPV4 = 920;
    static readonly IS_IPV4_COMPAT = 921;
    static readonly IS_IPV4_MAPPED = 922;
    static readonly IS_IPV6 = 923;
    static readonly IS_USED_LOCK = 924;
    static readonly LAST_INSERT_ID = 925;
    static readonly LCASE = 926;
    static readonly LEAST = 927;
    static readonly LENGTH = 928;
    static readonly LINEFROMTEXT = 929;
    static readonly LINEFROMWKB = 930;
    static readonly LINESTRINGFROMTEXT = 931;
    static readonly LINESTRINGFROMWKB = 932;
    static readonly LN = 933;
    static readonly LOAD_FILE = 934;
    static readonly LOCATE = 935;
    static readonly LOG = 936;
    static readonly LOG10 = 937;
    static readonly LOG2 = 938;
    static readonly LOWER = 939;
    static readonly LPAD = 940;
    static readonly LTRIM = 941;
    static readonly MAKEDATE = 942;
    static readonly MAKETIME = 943;
    static readonly MAKE_SET = 944;
    static readonly MASTER_POS_WAIT = 945;
    static readonly MBRCONTAINS = 946;
    static readonly MBRDISJOINT = 947;
    static readonly MBREQUAL = 948;
    static readonly MBRINTERSECTS = 949;
    static readonly MBROVERLAPS = 950;
    static readonly MBRTOUCHES = 951;
    static readonly MBRWITHIN = 952;
    static readonly MD5 = 953;
    static readonly MLINEFROMTEXT = 954;
    static readonly MLINEFROMWKB = 955;
    static readonly MONTHNAME = 956;
    static readonly MPOINTFROMTEXT = 957;
    static readonly MPOINTFROMWKB = 958;
    static readonly MPOLYFROMTEXT = 959;
    static readonly MPOLYFROMWKB = 960;
    static readonly MULTILINESTRINGFROMTEXT = 961;
    static readonly MULTILINESTRINGFROMWKB = 962;
    static readonly MULTIPOINTFROMTEXT = 963;
    static readonly MULTIPOINTFROMWKB = 964;
    static readonly MULTIPOLYGONFROMTEXT = 965;
    static readonly MULTIPOLYGONFROMWKB = 966;
    static readonly NAME_CONST = 967;
    static readonly NULLIF = 968;
    static readonly NUMGEOMETRIES = 969;
    static readonly NUMINTERIORRINGS = 970;
    static readonly NUMPOINTS = 971;
    static readonly OCT = 972;
    static readonly OCTET_LENGTH = 973;
    static readonly ORD = 974;
    static readonly OVERLAPS = 975;
    static readonly PERIOD_ADD = 976;
    static readonly PERIOD_DIFF = 977;
    static readonly PI = 978;
    static readonly POINTFROMTEXT = 979;
    static readonly POINTFROMWKB = 980;
    static readonly POINTN = 981;
    static readonly POLYFROMTEXT = 982;
    static readonly POLYFROMWKB = 983;
    static readonly POLYGONFROMTEXT = 984;
    static readonly POLYGONFROMWKB = 985;
    static readonly POW = 986;
    static readonly POWER = 987;
    static readonly QUOTE = 988;
    static readonly RADIANS = 989;
    static readonly RAND = 990;
    static readonly RANDOM = 991;
    static readonly RANDOM_BYTES = 992;
    static readonly RELEASE_LOCK = 993;
    static readonly REVERSE = 994;
    static readonly ROUND = 995;
    static readonly ROW_COUNT = 996;
    static readonly RPAD = 997;
    static readonly RTRIM = 998;
    static readonly SEC_TO_TIME = 999;
    static readonly SECONDARY_ENGINE_ATTRIBUTE = 1000;
    static readonly SESSION_USER = 1001;
    static readonly SHA = 1002;
    static readonly SHA1 = 1003;
    static readonly SHA2 = 1004;
    static readonly SCHEMA_NAME = 1005;
    static readonly SIGN = 1006;
    static readonly SIN = 1007;
    static readonly SLEEP = 1008;
    static readonly SOUNDEX = 1009;
    static readonly SQL_THREAD_WAIT_AFTER_GTIDS = 1010;
    static readonly SQRT = 1011;
    static readonly SRID = 1012;
    static readonly STARTPOINT = 1013;
    static readonly STRCMP = 1014;
    static readonly STR_TO_DATE = 1015;
    static readonly ST_AREA = 1016;
    static readonly ST_ASBINARY = 1017;
    static readonly ST_ASTEXT = 1018;
    static readonly ST_ASWKB = 1019;
    static readonly ST_ASWKT = 1020;
    static readonly ST_BUFFER = 1021;
    static readonly ST_CENTROID = 1022;
    static readonly ST_CONTAINS = 1023;
    static readonly ST_CROSSES = 1024;
    static readonly ST_DIFFERENCE = 1025;
    static readonly ST_DIMENSION = 1026;
    static readonly ST_DISJOINT = 1027;
    static readonly ST_DISTANCE = 1028;
    static readonly ST_ENDPOINT = 1029;
    static readonly ST_ENVELOPE = 1030;
    static readonly ST_EQUALS = 1031;
    static readonly ST_EXTERIORRING = 1032;
    static readonly ST_GEOMCOLLFROMTEXT = 1033;
    static readonly ST_GEOMCOLLFROMTXT = 1034;
    static readonly ST_GEOMCOLLFROMWKB = 1035;
    static readonly ST_GEOMETRYCOLLECTIONFROMTEXT = 1036;
    static readonly ST_GEOMETRYCOLLECTIONFROMWKB = 1037;
    static readonly ST_GEOMETRYFROMTEXT = 1038;
    static readonly ST_GEOMETRYFROMWKB = 1039;
    static readonly ST_GEOMETRYN = 1040;
    static readonly ST_GEOMETRYTYPE = 1041;
    static readonly ST_GEOMFROMTEXT = 1042;
    static readonly ST_GEOMFROMWKB = 1043;
    static readonly ST_INTERIORRINGN = 1044;
    static readonly ST_INTERSECTION = 1045;
    static readonly ST_INTERSECTS = 1046;
    static readonly ST_ISCLOSED = 1047;
    static readonly ST_ISEMPTY = 1048;
    static readonly ST_ISSIMPLE = 1049;
    static readonly ST_LINEFROMTEXT = 1050;
    static readonly ST_LINEFROMWKB = 1051;
    static readonly ST_LINESTRINGFROMTEXT = 1052;
    static readonly ST_LINESTRINGFROMWKB = 1053;
    static readonly ST_NUMGEOMETRIES = 1054;
    static readonly ST_NUMINTERIORRING = 1055;
    static readonly ST_NUMINTERIORRINGS = 1056;
    static readonly ST_NUMPOINTS = 1057;
    static readonly ST_OVERLAPS = 1058;
    static readonly ST_POINTFROMTEXT = 1059;
    static readonly ST_POINTFROMWKB = 1060;
    static readonly ST_POINTN = 1061;
    static readonly ST_POLYFROMTEXT = 1062;
    static readonly ST_POLYFROMWKB = 1063;
    static readonly ST_POLYGONFROMTEXT = 1064;
    static readonly ST_POLYGONFROMWKB = 1065;
    static readonly ST_SRID = 1066;
    static readonly ST_STARTPOINT = 1067;
    static readonly ST_SYMDIFFERENCE = 1068;
    static readonly ST_TOUCHES = 1069;
    static readonly ST_UNION = 1070;
    static readonly ST_WITHIN = 1071;
    static readonly ST_X = 1072;
    static readonly ST_Y = 1073;
    static readonly SUBDATE = 1074;
    static readonly SUBSTRING_INDEX = 1075;
    static readonly SUBTIME = 1076;
    static readonly SYSTEM_USER = 1077;
    static readonly TAN = 1078;
    static readonly TIMEDIFF = 1079;
    static readonly TIMESTAMPADD = 1080;
    static readonly TIMESTAMPDIFF = 1081;
    static readonly TIME_FORMAT = 1082;
    static readonly TIME_TO_SEC = 1083;
    static readonly TOUCHES = 1084;
    static readonly TO_BASE64 = 1085;
    static readonly TO_DAYS = 1086;
    static readonly TO_SECONDS = 1087;
    static readonly TP_CONNECTION_ADMIN = 1088;
    static readonly UCASE = 1089;
    static readonly UNCOMPRESS = 1090;
    static readonly UNCOMPRESSED_LENGTH = 1091;
    static readonly UNHEX = 1092;
    static readonly UNIX_TIMESTAMP = 1093;
    static readonly UPDATEXML = 1094;
    static readonly UPPER = 1095;
    static readonly UUID = 1096;
    static readonly UUID_SHORT = 1097;
    static readonly VALIDATE_PASSWORD_STRENGTH = 1098;
    static readonly VERSION = 1099;
    static readonly WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS = 1100;
    static readonly WEEKDAY = 1101;
    static readonly WEEKOFYEAR = 1102;
    static readonly WEIGHT_STRING = 1103;
    static readonly WITHIN = 1104;
    static readonly YEARWEEK = 1105;
    static readonly Y_FUNCTION = 1106;
    static readonly X_FUNCTION = 1107;
    static readonly VAR_ASSIGN = 1108;
    static readonly PLUS_ASSIGN = 1109;
    static readonly MINUS_ASSIGN = 1110;
    static readonly MULT_ASSIGN = 1111;
    static readonly DIV_ASSIGN = 1112;
    static readonly MOD_ASSIGN = 1113;
    static readonly AND_ASSIGN = 1114;
    static readonly XOR_ASSIGN = 1115;
    static readonly OR_ASSIGN = 1116;
    static readonly STAR = 1117;
    static readonly DIVIDE = 1118;
    static readonly MODULE = 1119;
    static readonly PLUS = 1120;
    static readonly MINUS = 1121;
    static readonly DIV = 1122;
    static readonly MOD = 1123;
    static readonly EQUAL_SYMBOL = 1124;
    static readonly GREATER_SYMBOL = 1125;
    static readonly LESS_SYMBOL = 1126;
    static readonly EXCLAMATION_SYMBOL = 1127;
    static readonly BIT_NOT_OP = 1128;
    static readonly BIT_OR_OP = 1129;
    static readonly BIT_AND_OP = 1130;
    static readonly BIT_XOR_OP = 1131;
    static readonly DOT = 1132;
    static readonly LR_BRACKET = 1133;
    static readonly RR_BRACKET = 1134;
    static readonly COMMA = 1135;
    static readonly SEMI = 1136;
    static readonly AT_SIGN = 1137;
    static readonly ZERO_DECIMAL = 1138;
    static readonly ONE_DECIMAL = 1139;
    static readonly TWO_DECIMAL = 1140;
    static readonly SINGLE_QUOTE_SYMB = 1141;
    static readonly DOUBLE_QUOTE_SYMB = 1142;
    static readonly REVERSE_QUOTE_SYMB = 1143;
    static readonly COLON_SYMB = 1144;
    static readonly CHARSET_REVERSE_QOUTE_STRING = 1145;
    static readonly FILESIZE_LITERAL = 1146;
    static readonly START_NATIONAL_STRING_LITERAL = 1147;
    static readonly STRING_LITERAL = 1148;
    static readonly DECIMAL_LITERAL = 1149;
    static readonly HEXADECIMAL_LITERAL = 1150;
    static readonly REAL_LITERAL = 1151;
    static readonly NULL_SPEC_LITERAL = 1152;
    static readonly BIT_STRING = 1153;
    static readonly STRING_CHARSET_NAME = 1154;
    static readonly DOT_ID = 1155;
    static readonly ID = 1156;
    static readonly REVERSE_QUOTE_ID = 1157;
    static readonly HOST_IP_ADDRESS = 1158;
    static readonly LOCAL_ID = 1159;
    static readonly GLOBAL_ID = 1160;
    static readonly ERROR_RECONGNIGION = 1161;
    static readonly RULE_root = 0;
    static readonly RULE_sqlStatements = 1;
    static readonly RULE_sqlStatement = 2;
    static readonly RULE_emptyStatement_ = 3;
    static readonly RULE_ddlStatement = 4;
    static readonly RULE_dmlStatement = 5;
    static readonly RULE_transactionStatement = 6;
    static readonly RULE_replicationStatement = 7;
    static readonly RULE_preparedStatement = 8;
    static readonly RULE_compoundStatement = 9;
    static readonly RULE_administrationStatement = 10;
    static readonly RULE_utilityStatement = 11;
    static readonly RULE_createDatabase = 12;
    static readonly RULE_createEvent = 13;
    static readonly RULE_createIndex = 14;
    static readonly RULE_createLogfileGroup = 15;
    static readonly RULE_createProcedure = 16;
    static readonly RULE_createFunction = 17;
    static readonly RULE_createRole = 18;
    static readonly RULE_createServer = 19;
    static readonly RULE_createTable = 20;
    static readonly RULE_createTablespaceInnodb = 21;
    static readonly RULE_createTablespaceNdb = 22;
    static readonly RULE_createTrigger = 23;
    static readonly RULE_withClause = 24;
    static readonly RULE_commonTableExpressions = 25;
    static readonly RULE_cteName = 26;
    static readonly RULE_cteColumnName = 27;
    static readonly RULE_createView = 28;
    static readonly RULE_createDatabaseOption = 29;
    static readonly RULE_charSet = 30;
    static readonly RULE_currentUserExpression = 31;
    static readonly RULE_ownerStatement = 32;
    static readonly RULE_scheduleExpression = 33;
    static readonly RULE_timestampValue = 34;
    static readonly RULE_intervalExpr = 35;
    static readonly RULE_intervalType = 36;
    static readonly RULE_enableType = 37;
    static readonly RULE_indexType = 38;
    static readonly RULE_indexOption = 39;
    static readonly RULE_procedureParameter = 40;
    static readonly RULE_functionParameter = 41;
    static readonly RULE_routineOption = 42;
    static readonly RULE_serverOption = 43;
    static readonly RULE_createDefinitions = 44;
    static readonly RULE_createDefinition = 45;
    static readonly RULE_columnDefinition = 46;
    static readonly RULE_columnConstraint = 47;
    static readonly RULE_tableConstraint = 48;
    static readonly RULE_referenceDefinition = 49;
    static readonly RULE_referenceAction = 50;
    static readonly RULE_referenceControlType = 51;
    static readonly RULE_indexColumnDefinition = 52;
    static readonly RULE_tableOption = 53;
    static readonly RULE_tableType = 54;
    static readonly RULE_tablespaceStorage = 55;
    static readonly RULE_partitionDefinitions = 56;
    static readonly RULE_partitionFunctionDefinition = 57;
    static readonly RULE_subpartitionFunctionDefinition = 58;
    static readonly RULE_partitionDefinition = 59;
    static readonly RULE_partitionDefinerAtom = 60;
    static readonly RULE_partitionDefinerVector = 61;
    static readonly RULE_subpartitionDefinition = 62;
    static readonly RULE_partitionOption = 63;
    static readonly RULE_alterDatabase = 64;
    static readonly RULE_alterEvent = 65;
    static readonly RULE_alterFunction = 66;
    static readonly RULE_alterInstance = 67;
    static readonly RULE_alterLogfileGroup = 68;
    static readonly RULE_alterProcedure = 69;
    static readonly RULE_alterServer = 70;
    static readonly RULE_alterTable = 71;
    static readonly RULE_alterTablespace = 72;
    static readonly RULE_alterView = 73;
    static readonly RULE_alterSpecification = 74;
    static readonly RULE_alterPartitionSpecification = 75;
    static readonly RULE_dropDatabase = 76;
    static readonly RULE_dropEvent = 77;
    static readonly RULE_dropIndex = 78;
    static readonly RULE_dropLogfileGroup = 79;
    static readonly RULE_dropProcedure = 80;
    static readonly RULE_dropFunction = 81;
    static readonly RULE_dropServer = 82;
    static readonly RULE_dropTable = 83;
    static readonly RULE_dropTablespace = 84;
    static readonly RULE_dropTrigger = 85;
    static readonly RULE_dropView = 86;
    static readonly RULE_dropRole = 87;
    static readonly RULE_setRole = 88;
    static readonly RULE_renameTable = 89;
    static readonly RULE_renameTableClause = 90;
    static readonly RULE_truncateTable = 91;
    static readonly RULE_callStatement = 92;
    static readonly RULE_deleteStatement = 93;
    static readonly RULE_doStatement = 94;
    static readonly RULE_handlerStatement = 95;
    static readonly RULE_insertStatement = 96;
    static readonly RULE_loadDataStatement = 97;
    static readonly RULE_loadXmlStatement = 98;
    static readonly RULE_replaceStatement = 99;
    static readonly RULE_selectStatement = 100;
    static readonly RULE_updateStatement = 101;
    static readonly RULE_valuesStatement = 102;
    static readonly RULE_insertStatementValue = 103;
    static readonly RULE_updatedElement = 104;
    static readonly RULE_assignmentField = 105;
    static readonly RULE_lockClause = 106;
    static readonly RULE_singleDeleteStatement = 107;
    static readonly RULE_multipleDeleteStatement = 108;
    static readonly RULE_handlerOpenStatement = 109;
    static readonly RULE_handlerReadIndexStatement = 110;
    static readonly RULE_handlerReadStatement = 111;
    static readonly RULE_handlerCloseStatement = 112;
    static readonly RULE_singleUpdateStatement = 113;
    static readonly RULE_multipleUpdateStatement = 114;
    static readonly RULE_orderByClause = 115;
    static readonly RULE_orderByExpression = 116;
    static readonly RULE_tableSources = 117;
    static readonly RULE_tableSource = 118;
    static readonly RULE_tableSourceItem = 119;
    static readonly RULE_indexHint = 120;
    static readonly RULE_indexHintType = 121;
    static readonly RULE_joinPart = 122;
    static readonly RULE_joinSpec = 123;
    static readonly RULE_queryExpression = 124;
    static readonly RULE_queryExpressionNointo = 125;
    static readonly RULE_querySpecification = 126;
    static readonly RULE_querySpecificationNointo = 127;
    static readonly RULE_unionParenthesis = 128;
    static readonly RULE_unionStatement = 129;
    static readonly RULE_lateralStatement = 130;
    static readonly RULE_jsonTable = 131;
    static readonly RULE_jsonColumnList = 132;
    static readonly RULE_jsonColumn = 133;
    static readonly RULE_jsonOnEmpty = 134;
    static readonly RULE_jsonOnError = 135;
    static readonly RULE_selectSpec = 136;
    static readonly RULE_selectElements = 137;
    static readonly RULE_selectElement = 138;
    static readonly RULE_selectIntoExpression = 139;
    static readonly RULE_selectFieldsInto = 140;
    static readonly RULE_selectLinesInto = 141;
    static readonly RULE_fromClause = 142;
    static readonly RULE_groupByClause = 143;
    static readonly RULE_havingClause = 144;
    static readonly RULE_windowClause = 145;
    static readonly RULE_groupByItem = 146;
    static readonly RULE_limitClause = 147;
    static readonly RULE_limitClauseAtom = 148;
    static readonly RULE_startTransaction = 149;
    static readonly RULE_beginWork = 150;
    static readonly RULE_commitWork = 151;
    static readonly RULE_rollbackWork = 152;
    static readonly RULE_savepointStatement = 153;
    static readonly RULE_rollbackStatement = 154;
    static readonly RULE_releaseStatement = 155;
    static readonly RULE_lockTables = 156;
    static readonly RULE_unlockTables = 157;
    static readonly RULE_setAutocommitStatement = 158;
    static readonly RULE_setTransactionStatement = 159;
    static readonly RULE_transactionMode = 160;
    static readonly RULE_lockTableElement = 161;
    static readonly RULE_lockAction = 162;
    static readonly RULE_transactionOption = 163;
    static readonly RULE_transactionLevel = 164;
    static readonly RULE_changeMaster = 165;
    static readonly RULE_changeReplicationFilter = 166;
    static readonly RULE_purgeBinaryLogs = 167;
    static readonly RULE_resetMaster = 168;
    static readonly RULE_resetSlave = 169;
    static readonly RULE_startSlave = 170;
    static readonly RULE_stopSlave = 171;
    static readonly RULE_startGroupReplication = 172;
    static readonly RULE_stopGroupReplication = 173;
    static readonly RULE_masterOption = 174;
    static readonly RULE_stringMasterOption = 175;
    static readonly RULE_decimalMasterOption = 176;
    static readonly RULE_boolMasterOption = 177;
    static readonly RULE_channelOption = 178;
    static readonly RULE_replicationFilter = 179;
    static readonly RULE_tablePair = 180;
    static readonly RULE_threadType = 181;
    static readonly RULE_untilOption = 182;
    static readonly RULE_connectionOption = 183;
    static readonly RULE_gtuidSet = 184;
    static readonly RULE_xaStartTransaction = 185;
    static readonly RULE_xaEndTransaction = 186;
    static readonly RULE_xaPrepareStatement = 187;
    static readonly RULE_xaCommitWork = 188;
    static readonly RULE_xaRollbackWork = 189;
    static readonly RULE_xaRecoverWork = 190;
    static readonly RULE_prepareStatement = 191;
    static readonly RULE_executeStatement = 192;
    static readonly RULE_deallocatePrepare = 193;
    static readonly RULE_routineBody = 194;
    static readonly RULE_blockStatement = 195;
    static readonly RULE_caseStatement = 196;
    static readonly RULE_ifStatement = 197;
    static readonly RULE_iterateStatement = 198;
    static readonly RULE_leaveStatement = 199;
    static readonly RULE_loopStatement = 200;
    static readonly RULE_repeatStatement = 201;
    static readonly RULE_returnStatement = 202;
    static readonly RULE_whileStatement = 203;
    static readonly RULE_cursorStatement = 204;
    static readonly RULE_declareVariable = 205;
    static readonly RULE_declareCondition = 206;
    static readonly RULE_declareCursor = 207;
    static readonly RULE_declareHandler = 208;
    static readonly RULE_handlerConditionValue = 209;
    static readonly RULE_procedureSqlStatement = 210;
    static readonly RULE_caseAlternative = 211;
    static readonly RULE_elifAlternative = 212;
    static readonly RULE_alterUser = 213;
    static readonly RULE_createUser = 214;
    static readonly RULE_dropUser = 215;
    static readonly RULE_grantStatement = 216;
    static readonly RULE_roleOption = 217;
    static readonly RULE_grantProxy = 218;
    static readonly RULE_renameUser = 219;
    static readonly RULE_revokeStatement = 220;
    static readonly RULE_revokeProxy = 221;
    static readonly RULE_setPasswordStatement = 222;
    static readonly RULE_userSpecification = 223;
    static readonly RULE_userAuthOption = 224;
    static readonly RULE_authOptionClause = 225;
    static readonly RULE_authenticationRule = 226;
    static readonly RULE_tlsOption = 227;
    static readonly RULE_userResourceOption = 228;
    static readonly RULE_userPasswordOption = 229;
    static readonly RULE_userLockOption = 230;
    static readonly RULE_privelegeClause = 231;
    static readonly RULE_privilege = 232;
    static readonly RULE_privilegeLevel = 233;
    static readonly RULE_renameUserClause = 234;
    static readonly RULE_analyzeTable = 235;
    static readonly RULE_checkTable = 236;
    static readonly RULE_checksumTable = 237;
    static readonly RULE_optimizeTable = 238;
    static readonly RULE_repairTable = 239;
    static readonly RULE_checkTableOption = 240;
    static readonly RULE_createUdfunction = 241;
    static readonly RULE_installPlugin = 242;
    static readonly RULE_uninstallPlugin = 243;
    static readonly RULE_setStatement = 244;
    static readonly RULE_showStatement = 245;
    static readonly RULE_variableClause = 246;
    static readonly RULE_showCommonEntity = 247;
    static readonly RULE_showFilter = 248;
    static readonly RULE_showGlobalInfoClause = 249;
    static readonly RULE_showSchemaEntity = 250;
    static readonly RULE_showProfileType = 251;
    static readonly RULE_binlogStatement = 252;
    static readonly RULE_cacheIndexStatement = 253;
    static readonly RULE_flushStatement = 254;
    static readonly RULE_killStatement = 255;
    static readonly RULE_loadIndexIntoCache = 256;
    static readonly RULE_resetStatement = 257;
    static readonly RULE_shutdownStatement = 258;
    static readonly RULE_tableIndexes = 259;
    static readonly RULE_flushOption = 260;
    static readonly RULE_flushTableOption = 261;
    static readonly RULE_loadedTableIndexes = 262;
    static readonly RULE_simpleDescribeStatement = 263;
    static readonly RULE_fullDescribeStatement = 264;
    static readonly RULE_helpStatement = 265;
    static readonly RULE_useStatement = 266;
    static readonly RULE_signalStatement = 267;
    static readonly RULE_resignalStatement = 268;
    static readonly RULE_signalConditionInformation = 269;
    static readonly RULE_withStatement = 270;
    static readonly RULE_tableStatement = 271;
    static readonly RULE_diagnosticsStatement = 272;
    static readonly RULE_diagnosticsConditionInformationName = 273;
    static readonly RULE_describeObjectClause = 274;
    static readonly RULE_fullId = 275;
    static readonly RULE_tableName = 276;
    static readonly RULE_roleName = 277;
    static readonly RULE_fullColumnName = 278;
    static readonly RULE_indexColumnName = 279;
    static readonly RULE_simpleUserName = 280;
    static readonly RULE_hostName = 281;
    static readonly RULE_userName = 282;
    static readonly RULE_mysqlVariable = 283;
    static readonly RULE_charsetName = 284;
    static readonly RULE_collationName = 285;
    static readonly RULE_engineName = 286;
    static readonly RULE_engineNameBase = 287;
    static readonly RULE_uuidSet = 288;
    static readonly RULE_xid = 289;
    static readonly RULE_xuidStringId = 290;
    static readonly RULE_authPlugin = 291;
    static readonly RULE_uid = 292;
    static readonly RULE_simpleId = 293;
    static readonly RULE_dottedId = 294;
    static readonly RULE_decimalLiteral = 295;
    static readonly RULE_fileSizeLiteral = 296;
    static readonly RULE_stringLiteral = 297;
    static readonly RULE_booleanLiteral = 298;
    static readonly RULE_hexadecimalLiteral = 299;
    static readonly RULE_nullNotnull = 300;
    static readonly RULE_constant = 301;
    static readonly RULE_dataType = 302;
    static readonly RULE_collectionOptions = 303;
    static readonly RULE_convertedDataType = 304;
    static readonly RULE_lengthOneDimension = 305;
    static readonly RULE_lengthTwoDimension = 306;
    static readonly RULE_lengthTwoOptionalDimension = 307;
    static readonly RULE_uidList = 308;
    static readonly RULE_fullColumnNameList = 309;
    static readonly RULE_tables = 310;
    static readonly RULE_indexColumnNames = 311;
    static readonly RULE_expressions = 312;
    static readonly RULE_expressionsWithDefaults = 313;
    static readonly RULE_constants = 314;
    static readonly RULE_simpleStrings = 315;
    static readonly RULE_userVariables = 316;
    static readonly RULE_defaultValue = 317;
    static readonly RULE_currentTimestamp = 318;
    static readonly RULE_expressionOrDefault = 319;
    static readonly RULE_ifExists = 320;
    static readonly RULE_ifNotExists = 321;
    static readonly RULE_orReplace = 322;
    static readonly RULE_waitNowaitClause = 323;
    static readonly RULE_functionCall = 324;
    static readonly RULE_specificFunction = 325;
    static readonly RULE_caseFuncAlternative = 326;
    static readonly RULE_levelsInWeightString = 327;
    static readonly RULE_levelInWeightListElement = 328;
    static readonly RULE_aggregateWindowedFunction = 329;
    static readonly RULE_nonAggregateWindowedFunction = 330;
    static readonly RULE_overClause = 331;
    static readonly RULE_windowSpec = 332;
    static readonly RULE_windowName = 333;
    static readonly RULE_frameClause = 334;
    static readonly RULE_frameUnits = 335;
    static readonly RULE_frameExtent = 336;
    static readonly RULE_frameBetween = 337;
    static readonly RULE_frameRange = 338;
    static readonly RULE_partitionClause = 339;
    static readonly RULE_scalarFunctionName = 340;
    static readonly RULE_passwordFunctionClause = 341;
    static readonly RULE_functionArgs = 342;
    static readonly RULE_functionArg = 343;
    static readonly RULE_expression = 344;
    static readonly RULE_predicate = 345;
    static readonly RULE_expressionAtom = 346;
    static readonly RULE_unaryOperator = 347;
    static readonly RULE_comparisonOperator = 348;
    static readonly RULE_logicalOperator = 349;
    static readonly RULE_bitOperator = 350;
    static readonly RULE_multOperator = 351;
    static readonly RULE_addOperator = 352;
    static readonly RULE_jsonOperator = 353;
    static readonly RULE_charsetNameBase = 354;
    static readonly RULE_transactionLevelBase = 355;
    static readonly RULE_privilegesBase = 356;
    static readonly RULE_intervalTypeBase = 357;
    static readonly RULE_dataTypeBase = 358;
    static readonly RULE_keywordsCanBeId = 359;
    static readonly RULE_functionNameBase = 360;
    static readonly literalNames: (string | null)[];
    static readonly symbolicNames: (string | null)[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException;
    constructor(input: antlr.TokenStream);
    root(): RootContext;
    sqlStatements(): SqlStatementsContext;
    sqlStatement(): SqlStatementContext;
    emptyStatement_(): EmptyStatement_Context;
    ddlStatement(): DdlStatementContext;
    dmlStatement(): DmlStatementContext;
    transactionStatement(): TransactionStatementContext;
    replicationStatement(): ReplicationStatementContext;
    preparedStatement(): PreparedStatementContext;
    compoundStatement(): CompoundStatementContext;
    administrationStatement(): AdministrationStatementContext;
    utilityStatement(): UtilityStatementContext;
    createDatabase(): CreateDatabaseContext;
    createEvent(): CreateEventContext;
    createIndex(): CreateIndexContext;
    createLogfileGroup(): CreateLogfileGroupContext;
    createProcedure(): CreateProcedureContext;
    createFunction(): CreateFunctionContext;
    createRole(): CreateRoleContext;
    createServer(): CreateServerContext;
    createTable(): CreateTableContext;
    createTablespaceInnodb(): CreateTablespaceInnodbContext;
    createTablespaceNdb(): CreateTablespaceNdbContext;
    createTrigger(): CreateTriggerContext;
    withClause(): WithClauseContext;
    commonTableExpressions(): CommonTableExpressionsContext;
    cteName(): CteNameContext;
    cteColumnName(): CteColumnNameContext;
    createView(): CreateViewContext;
    createDatabaseOption(): CreateDatabaseOptionContext;
    charSet(): CharSetContext;
    currentUserExpression(): CurrentUserExpressionContext;
    ownerStatement(): OwnerStatementContext;
    scheduleExpression(): ScheduleExpressionContext;
    timestampValue(): TimestampValueContext;
    intervalExpr(): IntervalExprContext;
    intervalType(): IntervalTypeContext;
    enableType(): EnableTypeContext;
    indexType(): IndexTypeContext;
    indexOption(): IndexOptionContext;
    procedureParameter(): ProcedureParameterContext;
    functionParameter(): FunctionParameterContext;
    routineOption(): RoutineOptionContext;
    serverOption(): ServerOptionContext;
    createDefinitions(): CreateDefinitionsContext;
    createDefinition(): CreateDefinitionContext;
    columnDefinition(): ColumnDefinitionContext;
    columnConstraint(): ColumnConstraintContext;
    tableConstraint(): TableConstraintContext;
    referenceDefinition(): ReferenceDefinitionContext;
    referenceAction(): ReferenceActionContext;
    referenceControlType(): ReferenceControlTypeContext;
    indexColumnDefinition(): IndexColumnDefinitionContext;
    tableOption(): TableOptionContext;
    tableType(): TableTypeContext;
    tablespaceStorage(): TablespaceStorageContext;
    partitionDefinitions(): PartitionDefinitionsContext;
    partitionFunctionDefinition(): PartitionFunctionDefinitionContext;
    subpartitionFunctionDefinition(): SubpartitionFunctionDefinitionContext;
    partitionDefinition(): PartitionDefinitionContext;
    partitionDefinerAtom(): PartitionDefinerAtomContext;
    partitionDefinerVector(): PartitionDefinerVectorContext;
    subpartitionDefinition(): SubpartitionDefinitionContext;
    partitionOption(): PartitionOptionContext;
    alterDatabase(): AlterDatabaseContext;
    alterEvent(): AlterEventContext;
    alterFunction(): AlterFunctionContext;
    alterInstance(): AlterInstanceContext;
    alterLogfileGroup(): AlterLogfileGroupContext;
    alterProcedure(): AlterProcedureContext;
    alterServer(): AlterServerContext;
    alterTable(): AlterTableContext;
    alterTablespace(): AlterTablespaceContext;
    alterView(): AlterViewContext;
    alterSpecification(): AlterSpecificationContext;
    alterPartitionSpecification(): AlterPartitionSpecificationContext;
    dropDatabase(): DropDatabaseContext;
    dropEvent(): DropEventContext;
    dropIndex(): DropIndexContext;
    dropLogfileGroup(): DropLogfileGroupContext;
    dropProcedure(): DropProcedureContext;
    dropFunction(): DropFunctionContext;
    dropServer(): DropServerContext;
    dropTable(): DropTableContext;
    dropTablespace(): DropTablespaceContext;
    dropTrigger(): DropTriggerContext;
    dropView(): DropViewContext;
    dropRole(): DropRoleContext;
    setRole(): SetRoleContext;
    renameTable(): RenameTableContext;
    renameTableClause(): RenameTableClauseContext;
    truncateTable(): TruncateTableContext;
    callStatement(): CallStatementContext;
    deleteStatement(): DeleteStatementContext;
    doStatement(): DoStatementContext;
    handlerStatement(): HandlerStatementContext;
    insertStatement(): InsertStatementContext;
    loadDataStatement(): LoadDataStatementContext;
    loadXmlStatement(): LoadXmlStatementContext;
    replaceStatement(): ReplaceStatementContext;
    selectStatement(): SelectStatementContext;
    updateStatement(): UpdateStatementContext;
    valuesStatement(): ValuesStatementContext;
    insertStatementValue(): InsertStatementValueContext;
    updatedElement(): UpdatedElementContext;
    assignmentField(): AssignmentFieldContext;
    lockClause(): LockClauseContext;
    singleDeleteStatement(): SingleDeleteStatementContext;
    multipleDeleteStatement(): MultipleDeleteStatementContext;
    handlerOpenStatement(): HandlerOpenStatementContext;
    handlerReadIndexStatement(): HandlerReadIndexStatementContext;
    handlerReadStatement(): HandlerReadStatementContext;
    handlerCloseStatement(): HandlerCloseStatementContext;
    singleUpdateStatement(): SingleUpdateStatementContext;
    multipleUpdateStatement(): MultipleUpdateStatementContext;
    orderByClause(): OrderByClauseContext;
    orderByExpression(): OrderByExpressionContext;
    tableSources(): TableSourcesContext;
    tableSource(): TableSourceContext;
    tableSourceItem(): TableSourceItemContext;
    indexHint(): IndexHintContext;
    indexHintType(): IndexHintTypeContext;
    joinPart(): JoinPartContext;
    joinSpec(): JoinSpecContext;
    queryExpression(): QueryExpressionContext;
    queryExpressionNointo(): QueryExpressionNointoContext;
    querySpecification(): QuerySpecificationContext;
    querySpecificationNointo(): QuerySpecificationNointoContext;
    unionParenthesis(): UnionParenthesisContext;
    unionStatement(): UnionStatementContext;
    lateralStatement(): LateralStatementContext;
    jsonTable(): JsonTableContext;
    jsonColumnList(): JsonColumnListContext;
    jsonColumn(): JsonColumnContext;
    jsonOnEmpty(): JsonOnEmptyContext;
    jsonOnError(): JsonOnErrorContext;
    selectSpec(): SelectSpecContext;
    selectElements(): SelectElementsContext;
    selectElement(): SelectElementContext;
    selectIntoExpression(): SelectIntoExpressionContext;
    selectFieldsInto(): SelectFieldsIntoContext;
    selectLinesInto(): SelectLinesIntoContext;
    fromClause(): FromClauseContext;
    groupByClause(): GroupByClauseContext;
    havingClause(): HavingClauseContext;
    windowClause(): WindowClauseContext;
    groupByItem(): GroupByItemContext;
    limitClause(): LimitClauseContext;
    limitClauseAtom(): LimitClauseAtomContext;
    startTransaction(): StartTransactionContext;
    beginWork(): BeginWorkContext;
    commitWork(): CommitWorkContext;
    rollbackWork(): RollbackWorkContext;
    savepointStatement(): SavepointStatementContext;
    rollbackStatement(): RollbackStatementContext;
    releaseStatement(): ReleaseStatementContext;
    lockTables(): LockTablesContext;
    unlockTables(): UnlockTablesContext;
    setAutocommitStatement(): SetAutocommitStatementContext;
    setTransactionStatement(): SetTransactionStatementContext;
    transactionMode(): TransactionModeContext;
    lockTableElement(): LockTableElementContext;
    lockAction(): LockActionContext;
    transactionOption(): TransactionOptionContext;
    transactionLevel(): TransactionLevelContext;
    changeMaster(): ChangeMasterContext;
    changeReplicationFilter(): ChangeReplicationFilterContext;
    purgeBinaryLogs(): PurgeBinaryLogsContext;
    resetMaster(): ResetMasterContext;
    resetSlave(): ResetSlaveContext;
    startSlave(): StartSlaveContext;
    stopSlave(): StopSlaveContext;
    startGroupReplication(): StartGroupReplicationContext;
    stopGroupReplication(): StopGroupReplicationContext;
    masterOption(): MasterOptionContext;
    stringMasterOption(): StringMasterOptionContext;
    decimalMasterOption(): DecimalMasterOptionContext;
    boolMasterOption(): BoolMasterOptionContext;
    channelOption(): ChannelOptionContext;
    replicationFilter(): ReplicationFilterContext;
    tablePair(): TablePairContext;
    threadType(): ThreadTypeContext;
    untilOption(): UntilOptionContext;
    connectionOption(): ConnectionOptionContext;
    gtuidSet(): GtuidSetContext;
    xaStartTransaction(): XaStartTransactionContext;
    xaEndTransaction(): XaEndTransactionContext;
    xaPrepareStatement(): XaPrepareStatementContext;
    xaCommitWork(): XaCommitWorkContext;
    xaRollbackWork(): XaRollbackWorkContext;
    xaRecoverWork(): XaRecoverWorkContext;
    prepareStatement(): PrepareStatementContext;
    executeStatement(): ExecuteStatementContext;
    deallocatePrepare(): DeallocatePrepareContext;
    routineBody(): RoutineBodyContext;
    blockStatement(): BlockStatementContext;
    caseStatement(): CaseStatementContext;
    ifStatement(): IfStatementContext;
    iterateStatement(): IterateStatementContext;
    leaveStatement(): LeaveStatementContext;
    loopStatement(): LoopStatementContext;
    repeatStatement(): RepeatStatementContext;
    returnStatement(): ReturnStatementContext;
    whileStatement(): WhileStatementContext;
    cursorStatement(): CursorStatementContext;
    declareVariable(): DeclareVariableContext;
    declareCondition(): DeclareConditionContext;
    declareCursor(): DeclareCursorContext;
    declareHandler(): DeclareHandlerContext;
    handlerConditionValue(): HandlerConditionValueContext;
    procedureSqlStatement(): ProcedureSqlStatementContext;
    caseAlternative(): CaseAlternativeContext;
    elifAlternative(): ElifAlternativeContext;
    alterUser(): AlterUserContext;
    createUser(): CreateUserContext;
    dropUser(): DropUserContext;
    grantStatement(): GrantStatementContext;
    roleOption(): RoleOptionContext;
    grantProxy(): GrantProxyContext;
    renameUser(): RenameUserContext;
    revokeStatement(): RevokeStatementContext;
    revokeProxy(): RevokeProxyContext;
    setPasswordStatement(): SetPasswordStatementContext;
    userSpecification(): UserSpecificationContext;
    userAuthOption(): UserAuthOptionContext;
    authOptionClause(): AuthOptionClauseContext;
    authenticationRule(): AuthenticationRuleContext;
    tlsOption(): TlsOptionContext;
    userResourceOption(): UserResourceOptionContext;
    userPasswordOption(): UserPasswordOptionContext;
    userLockOption(): UserLockOptionContext;
    privelegeClause(): PrivelegeClauseContext;
    privilege(): PrivilegeContext;
    privilegeLevel(): PrivilegeLevelContext;
    renameUserClause(): RenameUserClauseContext;
    analyzeTable(): AnalyzeTableContext;
    checkTable(): CheckTableContext;
    checksumTable(): ChecksumTableContext;
    optimizeTable(): OptimizeTableContext;
    repairTable(): RepairTableContext;
    checkTableOption(): CheckTableOptionContext;
    createUdfunction(): CreateUdfunctionContext;
    installPlugin(): InstallPluginContext;
    uninstallPlugin(): UninstallPluginContext;
    setStatement(): SetStatementContext;
    showStatement(): ShowStatementContext;
    variableClause(): VariableClauseContext;
    showCommonEntity(): ShowCommonEntityContext;
    showFilter(): ShowFilterContext;
    showGlobalInfoClause(): ShowGlobalInfoClauseContext;
    showSchemaEntity(): ShowSchemaEntityContext;
    showProfileType(): ShowProfileTypeContext;
    binlogStatement(): BinlogStatementContext;
    cacheIndexStatement(): CacheIndexStatementContext;
    flushStatement(): FlushStatementContext;
    killStatement(): KillStatementContext;
    loadIndexIntoCache(): LoadIndexIntoCacheContext;
    resetStatement(): ResetStatementContext;
    shutdownStatement(): ShutdownStatementContext;
    tableIndexes(): TableIndexesContext;
    flushOption(): FlushOptionContext;
    flushTableOption(): FlushTableOptionContext;
    loadedTableIndexes(): LoadedTableIndexesContext;
    simpleDescribeStatement(): SimpleDescribeStatementContext;
    fullDescribeStatement(): FullDescribeStatementContext;
    helpStatement(): HelpStatementContext;
    useStatement(): UseStatementContext;
    signalStatement(): SignalStatementContext;
    resignalStatement(): ResignalStatementContext;
    signalConditionInformation(): SignalConditionInformationContext;
    withStatement(): WithStatementContext;
    tableStatement(): TableStatementContext;
    diagnosticsStatement(): DiagnosticsStatementContext;
    diagnosticsConditionInformationName(): DiagnosticsConditionInformationNameContext;
    describeObjectClause(): DescribeObjectClauseContext;
    fullId(): FullIdContext;
    tableName(): TableNameContext;
    roleName(): RoleNameContext;
    fullColumnName(): FullColumnNameContext;
    indexColumnName(): IndexColumnNameContext;
    simpleUserName(): SimpleUserNameContext;
    hostName(): HostNameContext;
    userName(): UserNameContext;
    mysqlVariable(): MysqlVariableContext;
    charsetName(): CharsetNameContext;
    collationName(): CollationNameContext;
    engineName(): EngineNameContext;
    engineNameBase(): EngineNameBaseContext;
    uuidSet(): UuidSetContext;
    xid(): XidContext;
    xuidStringId(): XuidStringIdContext;
    authPlugin(): AuthPluginContext;
    uid(): UidContext;
    simpleId(): SimpleIdContext;
    dottedId(): DottedIdContext;
    decimalLiteral(): DecimalLiteralContext;
    fileSizeLiteral(): FileSizeLiteralContext;
    stringLiteral(): StringLiteralContext;
    booleanLiteral(): BooleanLiteralContext;
    hexadecimalLiteral(): HexadecimalLiteralContext;
    nullNotnull(): NullNotnullContext;
    constant(): ConstantContext;
    dataType(): DataTypeContext;
    collectionOptions(): CollectionOptionsContext;
    convertedDataType(): ConvertedDataTypeContext;
    lengthOneDimension(): LengthOneDimensionContext;
    lengthTwoDimension(): LengthTwoDimensionContext;
    lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext;
    uidList(): UidListContext;
    fullColumnNameList(): FullColumnNameListContext;
    tables(): TablesContext;
    indexColumnNames(): IndexColumnNamesContext;
    expressions(): ExpressionsContext;
    expressionsWithDefaults(): ExpressionsWithDefaultsContext;
    constants(): ConstantsContext;
    simpleStrings(): SimpleStringsContext;
    userVariables(): UserVariablesContext;
    defaultValue(): DefaultValueContext;
    currentTimestamp(): CurrentTimestampContext;
    expressionOrDefault(): ExpressionOrDefaultContext;
    ifExists(): IfExistsContext;
    ifNotExists(): IfNotExistsContext;
    orReplace(): OrReplaceContext;
    waitNowaitClause(): WaitNowaitClauseContext;
    functionCall(): FunctionCallContext;
    specificFunction(): SpecificFunctionContext;
    caseFuncAlternative(): CaseFuncAlternativeContext;
    levelsInWeightString(): LevelsInWeightStringContext;
    levelInWeightListElement(): LevelInWeightListElementContext;
    aggregateWindowedFunction(): AggregateWindowedFunctionContext;
    nonAggregateWindowedFunction(): NonAggregateWindowedFunctionContext;
    overClause(): OverClauseContext;
    windowSpec(): WindowSpecContext;
    windowName(): WindowNameContext;
    frameClause(): FrameClauseContext;
    frameUnits(): FrameUnitsContext;
    frameExtent(): FrameExtentContext;
    frameBetween(): FrameBetweenContext;
    frameRange(): FrameRangeContext;
    partitionClause(): PartitionClauseContext;
    scalarFunctionName(): ScalarFunctionNameContext;
    passwordFunctionClause(): PasswordFunctionClauseContext;
    functionArgs(): FunctionArgsContext;
    functionArg(): FunctionArgContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    predicate(): PredicateContext;
    predicate(_p: number): PredicateContext;
    expressionAtom(): ExpressionAtomContext;
    expressionAtom(_p: number): ExpressionAtomContext;
    unaryOperator(): UnaryOperatorContext;
    comparisonOperator(): ComparisonOperatorContext;
    logicalOperator(): LogicalOperatorContext;
    bitOperator(): BitOperatorContext;
    multOperator(): MultOperatorContext;
    addOperator(): AddOperatorContext;
    jsonOperator(): JsonOperatorContext;
    charsetNameBase(): CharsetNameBaseContext;
    transactionLevelBase(): TransactionLevelBaseContext;
    privilegesBase(): PrivilegesBaseContext;
    intervalTypeBase(): IntervalTypeBaseContext;
    dataTypeBase(): DataTypeBaseContext;
    keywordsCanBeId(): KeywordsCanBeIdContext;
    functionNameBase(): FunctionNameBaseContext;
    sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    private predicate_sempred;
    private expressionAtom_sempred;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): antlr.ATN;
    private static readonly vocabulary;
    get vocabulary(): antlr.Vocabulary;
    private static readonly decisionsToDFA;
}
export declare class RootContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EOF(): antlr.TerminalNode;
    sqlStatements(): SqlStatementsContext | null;
    MINUS(): antlr.TerminalNode[];
    MINUS(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SqlStatementsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    sqlStatement(): SqlStatementContext[];
    sqlStatement(i: number): SqlStatementContext | null;
    emptyStatement_(): EmptyStatement_Context[];
    emptyStatement_(i: number): EmptyStatement_Context | null;
    SEMI(): antlr.TerminalNode[];
    SEMI(i: number): antlr.TerminalNode | null;
    MINUS(): antlr.TerminalNode[];
    MINUS(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SqlStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ddlStatement(): DdlStatementContext | null;
    dmlStatement(): DmlStatementContext | null;
    transactionStatement(): TransactionStatementContext | null;
    replicationStatement(): ReplicationStatementContext | null;
    preparedStatement(): PreparedStatementContext | null;
    administrationStatement(): AdministrationStatementContext | null;
    utilityStatement(): UtilityStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class EmptyStatement_Context extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SEMI(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DdlStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    createDatabase(): CreateDatabaseContext | null;
    createEvent(): CreateEventContext | null;
    createIndex(): CreateIndexContext | null;
    createLogfileGroup(): CreateLogfileGroupContext | null;
    createProcedure(): CreateProcedureContext | null;
    createFunction(): CreateFunctionContext | null;
    createServer(): CreateServerContext | null;
    createTable(): CreateTableContext | null;
    createTablespaceInnodb(): CreateTablespaceInnodbContext | null;
    createTablespaceNdb(): CreateTablespaceNdbContext | null;
    createTrigger(): CreateTriggerContext | null;
    createView(): CreateViewContext | null;
    createRole(): CreateRoleContext | null;
    alterDatabase(): AlterDatabaseContext | null;
    alterEvent(): AlterEventContext | null;
    alterFunction(): AlterFunctionContext | null;
    alterInstance(): AlterInstanceContext | null;
    alterLogfileGroup(): AlterLogfileGroupContext | null;
    alterProcedure(): AlterProcedureContext | null;
    alterServer(): AlterServerContext | null;
    alterTable(): AlterTableContext | null;
    alterTablespace(): AlterTablespaceContext | null;
    alterView(): AlterViewContext | null;
    dropDatabase(): DropDatabaseContext | null;
    dropEvent(): DropEventContext | null;
    dropIndex(): DropIndexContext | null;
    dropLogfileGroup(): DropLogfileGroupContext | null;
    dropProcedure(): DropProcedureContext | null;
    dropFunction(): DropFunctionContext | null;
    dropServer(): DropServerContext | null;
    dropTable(): DropTableContext | null;
    dropTablespace(): DropTablespaceContext | null;
    dropTrigger(): DropTriggerContext | null;
    dropView(): DropViewContext | null;
    dropRole(): DropRoleContext | null;
    setRole(): SetRoleContext | null;
    renameTable(): RenameTableContext | null;
    truncateTable(): TruncateTableContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DmlStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    selectStatement(): SelectStatementContext | null;
    insertStatement(): InsertStatementContext | null;
    updateStatement(): UpdateStatementContext | null;
    deleteStatement(): DeleteStatementContext | null;
    replaceStatement(): ReplaceStatementContext | null;
    callStatement(): CallStatementContext | null;
    loadDataStatement(): LoadDataStatementContext | null;
    loadXmlStatement(): LoadXmlStatementContext | null;
    doStatement(): DoStatementContext | null;
    handlerStatement(): HandlerStatementContext | null;
    valuesStatement(): ValuesStatementContext | null;
    withStatement(): WithStatementContext | null;
    tableStatement(): TableStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    startTransaction(): StartTransactionContext | null;
    beginWork(): BeginWorkContext | null;
    commitWork(): CommitWorkContext | null;
    rollbackWork(): RollbackWorkContext | null;
    savepointStatement(): SavepointStatementContext | null;
    rollbackStatement(): RollbackStatementContext | null;
    releaseStatement(): ReleaseStatementContext | null;
    lockTables(): LockTablesContext | null;
    unlockTables(): UnlockTablesContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReplicationStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    changeMaster(): ChangeMasterContext | null;
    changeReplicationFilter(): ChangeReplicationFilterContext | null;
    purgeBinaryLogs(): PurgeBinaryLogsContext | null;
    resetMaster(): ResetMasterContext | null;
    resetSlave(): ResetSlaveContext | null;
    startSlave(): StartSlaveContext | null;
    stopSlave(): StopSlaveContext | null;
    startGroupReplication(): StartGroupReplicationContext | null;
    stopGroupReplication(): StopGroupReplicationContext | null;
    xaStartTransaction(): XaStartTransactionContext | null;
    xaEndTransaction(): XaEndTransactionContext | null;
    xaPrepareStatement(): XaPrepareStatementContext | null;
    xaCommitWork(): XaCommitWorkContext | null;
    xaRollbackWork(): XaRollbackWorkContext | null;
    xaRecoverWork(): XaRecoverWorkContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PreparedStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    prepareStatement(): PrepareStatementContext | null;
    executeStatement(): ExecuteStatementContext | null;
    deallocatePrepare(): DeallocatePrepareContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CompoundStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    blockStatement(): BlockStatementContext | null;
    caseStatement(): CaseStatementContext | null;
    ifStatement(): IfStatementContext | null;
    leaveStatement(): LeaveStatementContext | null;
    loopStatement(): LoopStatementContext | null;
    repeatStatement(): RepeatStatementContext | null;
    whileStatement(): WhileStatementContext | null;
    iterateStatement(): IterateStatementContext | null;
    returnStatement(): ReturnStatementContext | null;
    cursorStatement(): CursorStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AdministrationStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    alterUser(): AlterUserContext | null;
    createUser(): CreateUserContext | null;
    dropUser(): DropUserContext | null;
    grantStatement(): GrantStatementContext | null;
    grantProxy(): GrantProxyContext | null;
    renameUser(): RenameUserContext | null;
    revokeStatement(): RevokeStatementContext | null;
    revokeProxy(): RevokeProxyContext | null;
    analyzeTable(): AnalyzeTableContext | null;
    checkTable(): CheckTableContext | null;
    checksumTable(): ChecksumTableContext | null;
    optimizeTable(): OptimizeTableContext | null;
    repairTable(): RepairTableContext | null;
    createUdfunction(): CreateUdfunctionContext | null;
    installPlugin(): InstallPluginContext | null;
    uninstallPlugin(): UninstallPluginContext | null;
    setStatement(): SetStatementContext | null;
    showStatement(): ShowStatementContext | null;
    binlogStatement(): BinlogStatementContext | null;
    cacheIndexStatement(): CacheIndexStatementContext | null;
    flushStatement(): FlushStatementContext | null;
    killStatement(): KillStatementContext | null;
    loadIndexIntoCache(): LoadIndexIntoCacheContext | null;
    resetStatement(): ResetStatementContext | null;
    shutdownStatement(): ShutdownStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UtilityStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    simpleDescribeStatement(): SimpleDescribeStatementContext | null;
    fullDescribeStatement(): FullDescribeStatementContext | null;
    helpStatement(): HelpStatementContext | null;
    useStatement(): UseStatementContext | null;
    signalStatement(): SignalStatementContext | null;
    resignalStatement(): ResignalStatementContext | null;
    diagnosticsStatement(): DiagnosticsStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateDatabaseContext extends antlr.ParserRuleContext {
    _dbFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    uid(): UidContext;
    DATABASE(): antlr.TerminalNode | null;
    SCHEMA(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    createDatabaseOption(): CreateDatabaseOptionContext[];
    createDatabaseOption(i: number): CreateDatabaseOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateEventContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    EVENT(): antlr.TerminalNode;
    fullId(): FullIdContext;
    ON(): antlr.TerminalNode[];
    ON(i: number): antlr.TerminalNode | null;
    SCHEDULE(): antlr.TerminalNode;
    scheduleExpression(): ScheduleExpressionContext;
    DO(): antlr.TerminalNode;
    routineBody(): RoutineBodyContext;
    ownerStatement(): OwnerStatementContext | null;
    ifNotExists(): IfNotExistsContext | null;
    COMPLETION(): antlr.TerminalNode | null;
    PRESERVE(): antlr.TerminalNode | null;
    enableType(): EnableTypeContext | null;
    COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateIndexContext extends antlr.ParserRuleContext {
    _intimeAction?: Token | null;
    _indexCategory?: Token | null;
    _algType?: Token | null;
    _lockType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    INDEX(): antlr.TerminalNode;
    uid(): UidContext;
    ON(): antlr.TerminalNode;
    tableName(): TableNameContext;
    indexColumnNames(): IndexColumnNamesContext;
    indexType(): IndexTypeContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    ALGORITHM(): antlr.TerminalNode[];
    ALGORITHM(i: number): antlr.TerminalNode | null;
    LOCK(): antlr.TerminalNode[];
    LOCK(i: number): antlr.TerminalNode | null;
    ONLINE(): antlr.TerminalNode | null;
    OFFLINE(): antlr.TerminalNode | null;
    UNIQUE(): antlr.TerminalNode | null;
    FULLTEXT(): antlr.TerminalNode | null;
    SPATIAL(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode[];
    DEFAULT(i: number): antlr.TerminalNode | null;
    INPLACE(): antlr.TerminalNode[];
    INPLACE(i: number): antlr.TerminalNode | null;
    COPY(): antlr.TerminalNode[];
    COPY(i: number): antlr.TerminalNode | null;
    NONE(): antlr.TerminalNode[];
    NONE(i: number): antlr.TerminalNode | null;
    SHARED(): antlr.TerminalNode[];
    SHARED(i: number): antlr.TerminalNode | null;
    EXCLUSIVE(): antlr.TerminalNode[];
    EXCLUSIVE(i: number): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateLogfileGroupContext extends antlr.ParserRuleContext {
    _undoFile?: Token | null;
    _initSize?: FileSizeLiteralContext;
    _undoSize?: FileSizeLiteralContext;
    _redoSize?: FileSizeLiteralContext;
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    LOGFILE(): antlr.TerminalNode;
    GROUP(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    ADD(): antlr.TerminalNode;
    UNDOFILE(): antlr.TerminalNode;
    ENGINE(): antlr.TerminalNode;
    engineName(): EngineNameContext;
    STRING_LITERAL(): antlr.TerminalNode[];
    STRING_LITERAL(i: number): antlr.TerminalNode | null;
    INITIAL_SIZE(): antlr.TerminalNode | null;
    UNDO_BUFFER_SIZE(): antlr.TerminalNode | null;
    REDO_BUFFER_SIZE(): antlr.TerminalNode | null;
    NODEGROUP(): antlr.TerminalNode | null;
    WAIT(): antlr.TerminalNode | null;
    COMMENT(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    fileSizeLiteral(): FileSizeLiteralContext[];
    fileSizeLiteral(i: number): FileSizeLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateProcedureContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    PROCEDURE(): antlr.TerminalNode;
    fullId(): FullIdContext;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    routineBody(): RoutineBodyContext;
    ownerStatement(): OwnerStatementContext | null;
    procedureParameter(): ProcedureParameterContext[];
    procedureParameter(i: number): ProcedureParameterContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    routineOption(): RoutineOptionContext[];
    routineOption(i: number): RoutineOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    FUNCTION(): antlr.TerminalNode;
    fullId(): FullIdContext;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    RETURNS(): antlr.TerminalNode;
    dataType(): DataTypeContext;
    routineBody(): RoutineBodyContext | null;
    returnStatement(): ReturnStatementContext | null;
    ownerStatement(): OwnerStatementContext | null;
    AGGREGATE(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    functionParameter(): FunctionParameterContext[];
    functionParameter(i: number): FunctionParameterContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    routineOption(): RoutineOptionContext[];
    routineOption(i: number): RoutineOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateRoleContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    ROLE(): antlr.TerminalNode;
    roleName(): RoleNameContext[];
    roleName(i: number): RoleNameContext | null;
    ifNotExists(): IfNotExistsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateServerContext extends antlr.ParserRuleContext {
    _wrapperName?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    SERVER(): antlr.TerminalNode;
    uid(): UidContext;
    FOREIGN(): antlr.TerminalNode;
    DATA(): antlr.TerminalNode;
    WRAPPER(): antlr.TerminalNode;
    OPTIONS(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    serverOption(): ServerOptionContext[];
    serverOption(i: number): ServerOptionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    MYSQL(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CreateTableContext): void;
}
export declare class CopyCreateTableContext extends CreateTableContext {
    _parenthesisTable?: TableNameContext;
    constructor(ctx: CreateTableContext);
    CREATE(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext | null;
    LIKE(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    TEMPORARY(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnCreateTableContext extends CreateTableContext {
    constructor(ctx: CreateTableContext);
    CREATE(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    createDefinitions(): CreateDefinitionsContext;
    TEMPORARY(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    tableOption(): TableOptionContext[];
    tableOption(i: number): TableOptionContext | null;
    partitionDefinitions(): PartitionDefinitionsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryCreateTableContext extends CreateTableContext {
    _keyViolate?: Token | null;
    constructor(ctx: CreateTableContext);
    CREATE(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    selectStatement(): SelectStatementContext;
    TEMPORARY(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    createDefinitions(): CreateDefinitionsContext | null;
    tableOption(): TableOptionContext[];
    tableOption(i: number): TableOptionContext | null;
    partitionDefinitions(): PartitionDefinitionsContext | null;
    AS(): antlr.TerminalNode | null;
    IGNORE(): antlr.TerminalNode | null;
    REPLACE(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateTablespaceInnodbContext extends antlr.ParserRuleContext {
    _datafile?: Token | null;
    _fileBlockSize?: FileSizeLiteralContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    TABLESPACE(): antlr.TerminalNode;
    uid(): UidContext;
    ADD(): antlr.TerminalNode;
    DATAFILE(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    FILE_BLOCK_SIZE(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    ENGINE(): antlr.TerminalNode | null;
    engineName(): EngineNameContext | null;
    fileSizeLiteral(): FileSizeLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateTablespaceNdbContext extends antlr.ParserRuleContext {
    _datafile?: Token | null;
    _extentSize?: FileSizeLiteralContext;
    _initialSize?: FileSizeLiteralContext;
    _autoextendSize?: FileSizeLiteralContext;
    _maxSize?: FileSizeLiteralContext;
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    TABLESPACE(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    ADD(): antlr.TerminalNode;
    DATAFILE(): antlr.TerminalNode;
    USE(): antlr.TerminalNode;
    LOGFILE(): antlr.TerminalNode;
    GROUP(): antlr.TerminalNode;
    ENGINE(): antlr.TerminalNode;
    engineName(): EngineNameContext;
    STRING_LITERAL(): antlr.TerminalNode[];
    STRING_LITERAL(i: number): antlr.TerminalNode | null;
    EXTENT_SIZE(): antlr.TerminalNode | null;
    INITIAL_SIZE(): antlr.TerminalNode | null;
    AUTOEXTEND_SIZE(): antlr.TerminalNode | null;
    MAX_SIZE(): antlr.TerminalNode | null;
    NODEGROUP(): antlr.TerminalNode | null;
    WAIT(): antlr.TerminalNode | null;
    COMMENT(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    fileSizeLiteral(): FileSizeLiteralContext[];
    fileSizeLiteral(i: number): FileSizeLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateTriggerContext extends antlr.ParserRuleContext {
    _thisTrigger?: FullIdContext;
    _triggerTime?: Token | null;
    _triggerEvent?: Token | null;
    _triggerPlace?: Token | null;
    _otherTrigger?: FullIdContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    TRIGGER(): antlr.TerminalNode;
    ON(): antlr.TerminalNode;
    tableName(): TableNameContext;
    FOR(): antlr.TerminalNode;
    EACH(): antlr.TerminalNode;
    ROW(): antlr.TerminalNode;
    routineBody(): RoutineBodyContext;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext | null;
    BEFORE(): antlr.TerminalNode | null;
    AFTER(): antlr.TerminalNode | null;
    INSERT(): antlr.TerminalNode | null;
    UPDATE(): antlr.TerminalNode | null;
    DELETE(): antlr.TerminalNode | null;
    ownerStatement(): OwnerStatementContext | null;
    FOLLOWS(): antlr.TerminalNode | null;
    PRECEDES(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WithClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WITH(): antlr.TerminalNode;
    commonTableExpressions(): CommonTableExpressionsContext;
    RECURSIVE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CommonTableExpressionsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    cteName(): CteNameContext;
    AS(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    dmlStatement(): DmlStatementContext;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    cteColumnName(): CteColumnNameContext[];
    cteColumnName(i: number): CteColumnNameContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    commonTableExpressions(): CommonTableExpressionsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CteNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CteColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateViewContext extends antlr.ParserRuleContext {
    _algType?: Token | null;
    _secContext?: Token | null;
    _checkOption?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    VIEW(): antlr.TerminalNode;
    fullId(): FullIdContext;
    AS(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    selectStatement(): SelectStatementContext | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    orReplace(): OrReplaceContext | null;
    ALGORITHM(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    ownerStatement(): OwnerStatementContext | null;
    SQL(): antlr.TerminalNode | null;
    SECURITY(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    UNDEFINED(): antlr.TerminalNode | null;
    MERGE(): antlr.TerminalNode | null;
    TEMPTABLE(): antlr.TerminalNode | null;
    DEFINER(): antlr.TerminalNode | null;
    INVOKER(): antlr.TerminalNode | null;
    withClause(): WithClauseContext | null;
    WITH(): antlr.TerminalNode | null;
    CHECK(): antlr.TerminalNode | null;
    OPTION(): antlr.TerminalNode | null;
    CASCADED(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateDatabaseOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    charSet(): CharSetContext | null;
    charsetName(): CharsetNameContext | null;
    DEFAULT(): antlr.TerminalNode[];
    DEFAULT(i: number): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    COLLATE(): antlr.TerminalNode | null;
    collationName(): CollationNameContext | null;
    ENCRYPTION(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    READ(): antlr.TerminalNode | null;
    ONLY(): antlr.TerminalNode | null;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CharSetContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CHARACTER(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode | null;
    CHARSET(): antlr.TerminalNode | null;
    CHAR(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CurrentUserExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CURRENT_USER(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OwnerStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DEFINER(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    userName(): UserNameContext | null;
    currentUserExpression(): CurrentUserExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ScheduleExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ScheduleExpressionContext): void;
}
export declare class PreciseScheduleContext extends ScheduleExpressionContext {
    constructor(ctx: ScheduleExpressionContext);
    AT(): antlr.TerminalNode;
    timestampValue(): TimestampValueContext;
    intervalExpr(): IntervalExprContext[];
    intervalExpr(i: number): IntervalExprContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalScheduleContext extends ScheduleExpressionContext {
    _startTimestamp?: TimestampValueContext;
    _intervalExpr?: IntervalExprContext;
    _startIntervals: IntervalExprContext[];
    _endTimestamp?: TimestampValueContext;
    _endIntervals: IntervalExprContext[];
    constructor(ctx: ScheduleExpressionContext);
    EVERY(): antlr.TerminalNode;
    intervalType(): IntervalTypeContext;
    decimalLiteral(): DecimalLiteralContext | null;
    expression(): ExpressionContext | null;
    STARTS(): antlr.TerminalNode | null;
    ENDS(): antlr.TerminalNode | null;
    timestampValue(): TimestampValueContext[];
    timestampValue(i: number): TimestampValueContext | null;
    intervalExpr(): IntervalExprContext[];
    intervalExpr(i: number): IntervalExprContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TimestampValueContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    decimalLiteral(): DecimalLiteralContext | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    PLUS(): antlr.TerminalNode;
    INTERVAL(): antlr.TerminalNode;
    intervalType(): IntervalTypeContext;
    decimalLiteral(): DecimalLiteralContext | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    intervalTypeBase(): IntervalTypeBaseContext | null;
    YEAR(): antlr.TerminalNode | null;
    YEAR_MONTH(): antlr.TerminalNode | null;
    DAY_HOUR(): antlr.TerminalNode | null;
    DAY_MINUTE(): antlr.TerminalNode | null;
    DAY_SECOND(): antlr.TerminalNode | null;
    HOUR_MINUTE(): antlr.TerminalNode | null;
    HOUR_SECOND(): antlr.TerminalNode | null;
    MINUTE_SECOND(): antlr.TerminalNode | null;
    SECOND_MICROSECOND(): antlr.TerminalNode | null;
    MINUTE_MICROSECOND(): antlr.TerminalNode | null;
    HOUR_MICROSECOND(): antlr.TerminalNode | null;
    DAY_MICROSECOND(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class EnableTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ENABLE(): antlr.TerminalNode | null;
    DISABLE(): antlr.TerminalNode | null;
    ON(): antlr.TerminalNode | null;
    SLAVE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    USING(): antlr.TerminalNode;
    BTREE(): antlr.TerminalNode | null;
    HASH(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KEY_BLOCK_SIZE(): antlr.TerminalNode | null;
    fileSizeLiteral(): FileSizeLiteralContext | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    indexType(): IndexTypeContext | null;
    WITH(): antlr.TerminalNode | null;
    PARSER(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    VISIBLE(): antlr.TerminalNode | null;
    INVISIBLE(): antlr.TerminalNode | null;
    ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
    SECONDARY_ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ProcedureParameterContext extends antlr.ParserRuleContext {
    _direction?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext;
    dataType(): DataTypeContext;
    IN(): antlr.TerminalNode | null;
    OUT(): antlr.TerminalNode | null;
    INOUT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionParameterContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext;
    dataType(): DataTypeContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: RoutineOptionContext): void;
}
export declare class RoutineBehaviorContext extends RoutineOptionContext {
    constructor(ctx: RoutineOptionContext);
    DETERMINISTIC(): antlr.TerminalNode;
    NOT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineLanguageContext extends RoutineOptionContext {
    constructor(ctx: RoutineOptionContext);
    LANGUAGE(): antlr.TerminalNode;
    SQL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineCommentContext extends RoutineOptionContext {
    constructor(ctx: RoutineOptionContext);
    COMMENT(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineSecurityContext extends RoutineOptionContext {
    _context?: Token | null;
    constructor(ctx: RoutineOptionContext);
    SQL(): antlr.TerminalNode;
    SECURITY(): antlr.TerminalNode;
    DEFINER(): antlr.TerminalNode | null;
    INVOKER(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineDataContext extends RoutineOptionContext {
    constructor(ctx: RoutineOptionContext);
    CONTAINS(): antlr.TerminalNode | null;
    SQL(): antlr.TerminalNode | null;
    NO(): antlr.TerminalNode | null;
    READS(): antlr.TerminalNode | null;
    DATA(): antlr.TerminalNode | null;
    MODIFIES(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ServerOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    HOST(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    DATABASE(): antlr.TerminalNode | null;
    USER(): antlr.TerminalNode | null;
    PASSWORD(): antlr.TerminalNode | null;
    SOCKET(): antlr.TerminalNode | null;
    OWNER(): antlr.TerminalNode | null;
    PORT(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateDefinitionsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    createDefinition(): CreateDefinitionContext[];
    createDefinition(i: number): CreateDefinitionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CreateDefinitionContext): void;
}
export declare class ColumnDeclarationContext extends CreateDefinitionContext {
    constructor(ctx: CreateDefinitionContext);
    fullColumnName(): FullColumnNameContext;
    columnDefinition(): ColumnDefinitionContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintDeclarationContext extends CreateDefinitionContext {
    constructor(ctx: CreateDefinitionContext);
    tableConstraint(): TableConstraintContext;
    NOT(): antlr.TerminalNode | null;
    ENFORCED(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexDeclarationContext extends CreateDefinitionContext {
    constructor(ctx: CreateDefinitionContext);
    indexColumnDefinition(): IndexColumnDefinitionContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    dataType(): DataTypeContext;
    columnConstraint(): ColumnConstraintContext[];
    columnConstraint(i: number): ColumnConstraintContext | null;
    NOT(): antlr.TerminalNode | null;
    ENFORCED(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnConstraintContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ColumnConstraintContext): void;
}
export declare class StorageColumnConstraintContext extends ColumnConstraintContext {
    _storageval?: Token | null;
    constructor(ctx: ColumnConstraintContext);
    STORAGE(): antlr.TerminalNode;
    DISK(): antlr.TerminalNode | null;
    MEMORY(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class VisibilityColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    VISIBLE(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AutoIncrementColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    AUTO_INCREMENT(): antlr.TerminalNode | null;
    ON(): antlr.TerminalNode | null;
    UPDATE(): antlr.TerminalNode | null;
    currentTimestamp(): CurrentTimestampContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CommentColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    COMMENT(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UniqueKeyColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    UNIQUE(): antlr.TerminalNode;
    KEY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SerialDefaultColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    SERIAL(): antlr.TerminalNode;
    DEFAULT(): antlr.TerminalNode;
    VALUE(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GeneratedColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    AS(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    GENERATED(): antlr.TerminalNode | null;
    ALWAYS(): antlr.TerminalNode | null;
    VIRTUAL(): antlr.TerminalNode | null;
    STORED(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FormatColumnConstraintContext extends ColumnConstraintContext {
    _colformat?: Token | null;
    constructor(ctx: ColumnConstraintContext);
    COLUMN_FORMAT(): antlr.TerminalNode;
    FIXED(): antlr.TerminalNode | null;
    DYNAMIC(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollateColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    COLLATE(): antlr.TerminalNode;
    collationName(): CollationNameContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrimaryKeyColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    KEY(): antlr.TerminalNode;
    PRIMARY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CheckColumnConstraintContext extends ColumnConstraintContext {
    _name?: UidContext;
    constructor(ctx: ColumnConstraintContext);
    CHECK(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    CONSTRAINT(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NullColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    nullNotnull(): NullNotnullContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefaultColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    DEFAULT(): antlr.TerminalNode;
    defaultValue(): DefaultValueContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReferenceColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    referenceDefinition(): ReferenceDefinitionContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InvisibilityColumnConstraintContext extends ColumnConstraintContext {
    constructor(ctx: ColumnConstraintContext);
    INVISIBLE(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableConstraintContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TableConstraintContext): void;
}
export declare class UniqueKeyTableConstraintContext extends TableConstraintContext {
    _name?: UidContext;
    _indexFormat?: Token | null;
    _index?: UidContext;
    constructor(ctx: TableConstraintContext);
    UNIQUE(): antlr.TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    CONSTRAINT(): antlr.TerminalNode | null;
    indexType(): IndexTypeContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CheckTableConstraintContext extends TableConstraintContext {
    _name?: UidContext;
    constructor(ctx: TableConstraintContext);
    CHECK(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    CONSTRAINT(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrimaryKeyTableConstraintContext extends TableConstraintContext {
    _name?: UidContext;
    _index?: UidContext;
    constructor(ctx: TableConstraintContext);
    PRIMARY(): antlr.TerminalNode;
    KEY(): antlr.TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    CONSTRAINT(): antlr.TerminalNode | null;
    indexType(): IndexTypeContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ForeignKeyTableConstraintContext extends TableConstraintContext {
    _name?: UidContext;
    _index?: UidContext;
    constructor(ctx: TableConstraintContext);
    FOREIGN(): antlr.TerminalNode;
    KEY(): antlr.TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    referenceDefinition(): ReferenceDefinitionContext;
    CONSTRAINT(): antlr.TerminalNode | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReferenceDefinitionContext extends antlr.ParserRuleContext {
    _matchType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    REFERENCES(): antlr.TerminalNode;
    tableName(): TableNameContext;
    indexColumnNames(): IndexColumnNamesContext | null;
    MATCH(): antlr.TerminalNode | null;
    referenceAction(): ReferenceActionContext | null;
    FULL(): antlr.TerminalNode | null;
    PARTIAL(): antlr.TerminalNode | null;
    SIMPLE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReferenceActionContext extends antlr.ParserRuleContext {
    _onDelete?: ReferenceControlTypeContext;
    _onUpdate?: ReferenceControlTypeContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ON(): antlr.TerminalNode[];
    ON(i: number): antlr.TerminalNode | null;
    DELETE(): antlr.TerminalNode | null;
    referenceControlType(): ReferenceControlTypeContext[];
    referenceControlType(i: number): ReferenceControlTypeContext | null;
    UPDATE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReferenceControlTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RESTRICT(): antlr.TerminalNode | null;
    CASCADE(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode | null;
    NULL_LITERAL(): antlr.TerminalNode | null;
    NO(): antlr.TerminalNode | null;
    ACTION(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexColumnDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: IndexColumnDefinitionContext): void;
}
export declare class SpecialIndexDeclarationContext extends IndexColumnDefinitionContext {
    _indexFormat?: Token | null;
    constructor(ctx: IndexColumnDefinitionContext);
    indexColumnNames(): IndexColumnNamesContext;
    FULLTEXT(): antlr.TerminalNode | null;
    SPATIAL(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleIndexDeclarationContext extends IndexColumnDefinitionContext {
    _indexFormat?: Token | null;
    constructor(ctx: IndexColumnDefinitionContext);
    indexColumnNames(): IndexColumnNamesContext;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    indexType(): IndexTypeContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TableOptionContext): void;
}
export declare class TableOptionEngineContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    ENGINE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    engineName(): EngineNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionMaxRowsContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    MAX_ROWS(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionCollateContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    COLLATE(): antlr.TerminalNode;
    collationName(): CollationNameContext;
    DEFAULT(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPersistentContext extends TableOptionContext {
    _extBoolValue?: Token | null;
    constructor(ctx: TableOptionContext);
    STATS_PERSISTENT(): antlr.TerminalNode;
    DEFAULT(): antlr.TerminalNode | null;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionTablespaceContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    TABLESPACE(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    tablespaceStorage(): TablespaceStorageContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionAutoextendSizeContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    AUTOEXTEND_SIZE(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPageCompressedContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    PAGE_COMPRESSED(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionStartTransactionContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    START(): antlr.TerminalNode;
    TRANSACTION(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPackKeysContext extends TableOptionContext {
    _extBoolValue?: Token | null;
    constructor(ctx: TableOptionContext);
    PACK_KEYS(): antlr.TerminalNode;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPasswordContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    PASSWORD(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionUnionContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    UNION(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    tables(): TablesContext;
    RR_BRACKET(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionSamplePageContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    STATS_SAMPLE_PAGES(): antlr.TerminalNode;
    DEFAULT(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionCharsetContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    charSet(): CharSetContext;
    charsetName(): CharsetNameContext | null;
    DEFAULT(): antlr.TerminalNode[];
    DEFAULT(i: number): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionIndexDirectoryContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    INDEX(): antlr.TerminalNode;
    DIRECTORY(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionTableTypeContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    TABLE_TYPE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    tableType(): TableTypeContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionKeyBlockSizeContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    KEY_BLOCK_SIZE(): antlr.TerminalNode;
    fileSizeLiteral(): FileSizeLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionEncryptionContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    ENCRYPTION(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionDataDirectoryContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    DIRECTORY(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    DATA(): antlr.TerminalNode | null;
    INDEX(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionRecalculationContext extends TableOptionContext {
    _extBoolValue?: Token | null;
    constructor(ctx: TableOptionContext);
    STATS_AUTO_RECALC(): antlr.TerminalNode;
    DEFAULT(): antlr.TerminalNode | null;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionAutoIncrementContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    AUTO_INCREMENT(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionEncryptionKeyIdContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    ENCRYPTION_KEY_ID(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionChecksumContext extends TableOptionContext {
    _boolValue?: Token | null;
    constructor(ctx: TableOptionContext);
    CHECKSUM(): antlr.TerminalNode | null;
    PAGE_CHECKSUM(): antlr.TerminalNode | null;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionDelayContext extends TableOptionContext {
    _boolValue?: Token | null;
    constructor(ctx: TableOptionContext);
    DELAY_KEY_WRITE(): antlr.TerminalNode;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionConnectionContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    CONNECTION(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionTransactionalContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    TRANSACTIONAL(): antlr.TerminalNode;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPageCompressionLevelContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    decimalLiteral(): DecimalLiteralContext;
    PAGE_COMPRESSION_LEVEL(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionSecondaryEngineAttributeContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    SECONDARY_ENGINE_ATTRIBUTE(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionCommentContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    COMMENT(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionAverageContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    AVG_ROW_LENGTH(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionRowFormatContext extends TableOptionContext {
    _rowFormat?: Token | null;
    constructor(ctx: TableOptionContext);
    ROW_FORMAT(): antlr.TerminalNode;
    DEFAULT(): antlr.TerminalNode | null;
    DYNAMIC(): antlr.TerminalNode | null;
    FIXED(): antlr.TerminalNode | null;
    COMPRESSED(): antlr.TerminalNode | null;
    REDUNDANT(): antlr.TerminalNode | null;
    COMPACT(): antlr.TerminalNode | null;
    ID(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionCompressionContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    COMPRESSION(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode | null;
    ID(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionInsertMethodContext extends TableOptionContext {
    _insertMethod?: Token | null;
    constructor(ctx: TableOptionContext);
    INSERT_METHOD(): antlr.TerminalNode;
    NO(): antlr.TerminalNode | null;
    FIRST(): antlr.TerminalNode | null;
    LAST(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionEngineAttributeContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    ENGINE_ATTRIBUTE(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionMinRowsContext extends TableOptionContext {
    constructor(ctx: TableOptionContext);
    MIN_ROWS(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    MYSQL(): antlr.TerminalNode | null;
    ODBC(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TablespaceStorageContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STORAGE(): antlr.TerminalNode;
    DISK(): antlr.TerminalNode | null;
    MEMORY(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinitionsContext extends antlr.ParserRuleContext {
    _count?: DecimalLiteralContext;
    _subCount?: DecimalLiteralContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    PARTITION(): antlr.TerminalNode;
    BY(): antlr.TerminalNode[];
    BY(i: number): antlr.TerminalNode | null;
    partitionFunctionDefinition(): PartitionFunctionDefinitionContext;
    PARTITIONS(): antlr.TerminalNode | null;
    SUBPARTITION(): antlr.TerminalNode | null;
    subpartitionFunctionDefinition(): SubpartitionFunctionDefinitionContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    partitionDefinition(): PartitionDefinitionContext[];
    partitionDefinition(i: number): PartitionDefinitionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    SUBPARTITIONS(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFunctionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PartitionFunctionDefinitionContext): void;
}
export declare class PartitionFunctionKeyContext extends PartitionFunctionDefinitionContext {
    _algType?: Token | null;
    constructor(ctx: PartitionFunctionDefinitionContext);
    KEY(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    LINEAR(): antlr.TerminalNode | null;
    ALGORITHM(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    TWO_DECIMAL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFunctionHashContext extends PartitionFunctionDefinitionContext {
    constructor(ctx: PartitionFunctionDefinitionContext);
    HASH(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    LINEAR(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFunctionListContext extends PartitionFunctionDefinitionContext {
    constructor(ctx: PartitionFunctionDefinitionContext);
    LIST(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    COLUMNS(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFunctionRangeContext extends PartitionFunctionDefinitionContext {
    constructor(ctx: PartitionFunctionDefinitionContext);
    RANGE(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    COLUMNS(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubpartitionFunctionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SubpartitionFunctionDefinitionContext): void;
}
export declare class SubPartitionFunctionHashContext extends SubpartitionFunctionDefinitionContext {
    constructor(ctx: SubpartitionFunctionDefinitionContext);
    HASH(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    LINEAR(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubPartitionFunctionKeyContext extends SubpartitionFunctionDefinitionContext {
    _algType?: Token | null;
    constructor(ctx: SubpartitionFunctionDefinitionContext);
    KEY(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): antlr.TerminalNode;
    LINEAR(): antlr.TerminalNode | null;
    ALGORITHM(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    TWO_DECIMAL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PartitionDefinitionContext): void;
}
export declare class PartitionComparisonContext extends PartitionDefinitionContext {
    constructor(ctx: PartitionDefinitionContext);
    PARTITION(): antlr.TerminalNode;
    uid(): UidContext;
    VALUES(): antlr.TerminalNode;
    LESS(): antlr.TerminalNode;
    THAN(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    partitionDefinerAtom(): PartitionDefinerAtomContext[];
    partitionDefinerAtom(i: number): PartitionDefinerAtomContext | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext | null;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionListAtomContext extends PartitionDefinitionContext {
    constructor(ctx: PartitionDefinitionContext);
    PARTITION(): antlr.TerminalNode;
    uid(): UidContext;
    VALUES(): antlr.TerminalNode;
    IN(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    partitionDefinerAtom(): PartitionDefinerAtomContext[];
    partitionDefinerAtom(i: number): PartitionDefinerAtomContext | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext | null;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionListVectorContext extends PartitionDefinitionContext {
    constructor(ctx: PartitionDefinitionContext);
    PARTITION(): antlr.TerminalNode;
    uid(): UidContext;
    VALUES(): antlr.TerminalNode;
    IN(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    partitionDefinerVector(): PartitionDefinerVectorContext[];
    partitionDefinerVector(i: number): PartitionDefinerVectorContext | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext | null;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionSimpleContext extends PartitionDefinitionContext {
    constructor(ctx: PartitionDefinitionContext);
    PARTITION(): antlr.TerminalNode;
    uid(): UidContext;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinerAtomContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    constant(): ConstantContext | null;
    expression(): ExpressionContext | null;
    MAXVALUE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinerVectorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    partitionDefinerAtom(): PartitionDefinerAtomContext[];
    partitionDefinerAtom(i: number): PartitionDefinerAtomContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubpartitionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SUBPARTITION(): antlr.TerminalNode;
    uid(): UidContext;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PartitionOptionContext): void;
}
export declare class PartitionOptionCommentContext extends PartitionOptionContext {
    _comment?: Token | null;
    constructor(ctx: PartitionOptionContext);
    COMMENT(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionNodeGroupContext extends PartitionOptionContext {
    _nodegroup?: UidContext;
    constructor(ctx: PartitionOptionContext);
    NODEGROUP(): antlr.TerminalNode;
    uid(): UidContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionIndexDirectoryContext extends PartitionOptionContext {
    _indexDirectory?: Token | null;
    constructor(ctx: PartitionOptionContext);
    INDEX(): antlr.TerminalNode;
    DIRECTORY(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionMaxRowsContext extends PartitionOptionContext {
    _maxRows?: DecimalLiteralContext;
    constructor(ctx: PartitionOptionContext);
    MAX_ROWS(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionTablespaceContext extends PartitionOptionContext {
    _tablespace?: UidContext;
    constructor(ctx: PartitionOptionContext);
    TABLESPACE(): antlr.TerminalNode;
    uid(): UidContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionEngineContext extends PartitionOptionContext {
    constructor(ctx: PartitionOptionContext);
    ENGINE(): antlr.TerminalNode;
    engineName(): EngineNameContext;
    DEFAULT(): antlr.TerminalNode | null;
    STORAGE(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionMinRowsContext extends PartitionOptionContext {
    _minRows?: DecimalLiteralContext;
    constructor(ctx: PartitionOptionContext);
    MIN_ROWS(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionDataDirectoryContext extends PartitionOptionContext {
    _dataDirectory?: Token | null;
    constructor(ctx: PartitionOptionContext);
    DATA(): antlr.TerminalNode;
    DIRECTORY(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterDatabaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AlterDatabaseContext): void;
}
export declare class AlterUpgradeNameContext extends AlterDatabaseContext {
    _dbFormat?: Token | null;
    constructor(ctx: AlterDatabaseContext);
    ALTER(): antlr.TerminalNode;
    uid(): UidContext;
    UPGRADE(): antlr.TerminalNode;
    DATA(): antlr.TerminalNode;
    DIRECTORY(): antlr.TerminalNode;
    NAME(): antlr.TerminalNode;
    DATABASE(): antlr.TerminalNode | null;
    SCHEMA(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterSimpleDatabaseContext extends AlterDatabaseContext {
    _dbFormat?: Token | null;
    constructor(ctx: AlterDatabaseContext);
    ALTER(): antlr.TerminalNode;
    DATABASE(): antlr.TerminalNode | null;
    SCHEMA(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    createDatabaseOption(): CreateDatabaseOptionContext[];
    createDatabaseOption(i: number): CreateDatabaseOptionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterEventContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    EVENT(): antlr.TerminalNode;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext | null;
    ownerStatement(): OwnerStatementContext | null;
    ON(): antlr.TerminalNode[];
    ON(i: number): antlr.TerminalNode | null;
    SCHEDULE(): antlr.TerminalNode | null;
    scheduleExpression(): ScheduleExpressionContext | null;
    COMPLETION(): antlr.TerminalNode | null;
    PRESERVE(): antlr.TerminalNode | null;
    RENAME(): antlr.TerminalNode | null;
    TO(): antlr.TerminalNode | null;
    enableType(): EnableTypeContext | null;
    COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    DO(): antlr.TerminalNode | null;
    routineBody(): RoutineBodyContext | null;
    NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    FUNCTION(): antlr.TerminalNode;
    fullId(): FullIdContext;
    routineOption(): RoutineOptionContext[];
    routineOption(i: number): RoutineOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterInstanceContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    INSTANCE(): antlr.TerminalNode;
    ROTATE(): antlr.TerminalNode;
    INNODB(): antlr.TerminalNode;
    MASTER(): antlr.TerminalNode;
    KEY(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterLogfileGroupContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    LOGFILE(): antlr.TerminalNode;
    GROUP(): antlr.TerminalNode;
    uid(): UidContext;
    ADD(): antlr.TerminalNode;
    UNDOFILE(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    ENGINE(): antlr.TerminalNode;
    engineName(): EngineNameContext;
    INITIAL_SIZE(): antlr.TerminalNode | null;
    fileSizeLiteral(): FileSizeLiteralContext | null;
    WAIT(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterProcedureContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    PROCEDURE(): antlr.TerminalNode;
    fullId(): FullIdContext;
    routineOption(): RoutineOptionContext[];
    routineOption(i: number): RoutineOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterServerContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    SERVER(): antlr.TerminalNode;
    uid(): UidContext;
    OPTIONS(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    serverOption(): ServerOptionContext[];
    serverOption(i: number): ServerOptionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableContext extends antlr.ParserRuleContext {
    _intimeAction?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    IGNORE(): antlr.TerminalNode | null;
    waitNowaitClause(): WaitNowaitClauseContext | null;
    alterSpecification(): AlterSpecificationContext[];
    alterSpecification(i: number): AlterSpecificationContext | null;
    partitionDefinitions(): PartitionDefinitionsContext | null;
    ONLINE(): antlr.TerminalNode | null;
    OFFLINE(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterTablespaceContext extends antlr.ParserRuleContext {
    _objectAction?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    TABLESPACE(): antlr.TerminalNode;
    uid(): UidContext;
    DATAFILE(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    ENGINE(): antlr.TerminalNode;
    engineName(): EngineNameContext;
    ADD(): antlr.TerminalNode | null;
    DROP(): antlr.TerminalNode | null;
    INITIAL_SIZE(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    fileSizeLiteral(): FileSizeLiteralContext | null;
    WAIT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterViewContext extends antlr.ParserRuleContext {
    _algType?: Token | null;
    _secContext?: Token | null;
    _checkOpt?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALTER(): antlr.TerminalNode;
    VIEW(): antlr.TerminalNode;
    fullId(): FullIdContext;
    AS(): antlr.TerminalNode;
    selectStatement(): SelectStatementContext;
    ALGORITHM(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    ownerStatement(): OwnerStatementContext | null;
    SQL(): antlr.TerminalNode | null;
    SECURITY(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode | null;
    CHECK(): antlr.TerminalNode | null;
    OPTION(): antlr.TerminalNode | null;
    UNDEFINED(): antlr.TerminalNode | null;
    MERGE(): antlr.TerminalNode | null;
    TEMPTABLE(): antlr.TerminalNode | null;
    DEFINER(): antlr.TerminalNode | null;
    INVOKER(): antlr.TerminalNode | null;
    CASCADED(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterSpecificationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AlterSpecificationContext): void;
}
export declare class AlterByAlterColumnDefaultContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    ALTER(): antlr.TerminalNode;
    uid(): UidContext;
    SET(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    DROP(): antlr.TerminalNode | null;
    COLUMN(): antlr.TerminalNode | null;
    VISIBLE(): antlr.TerminalNode | null;
    INVISIBLE(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDisableKeysContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    DISABLE(): antlr.TerminalNode;
    KEYS(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDefaultCharsetContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    CHARACTER(): antlr.TerminalNode;
    SET(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    charsetName(): CharsetNameContext;
    DEFAULT(): antlr.TerminalNode | null;
    COLLATE(): antlr.TerminalNode | null;
    collationName(): CollationNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRenameColumnContext extends AlterSpecificationContext {
    _oldColumn?: UidContext;
    _newColumn?: UidContext;
    constructor(ctx: AlterSpecificationContext);
    RENAME(): antlr.TerminalNode;
    COLUMN(): antlr.TerminalNode;
    TO(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByConvertCharsetContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    CONVERT(): antlr.TerminalNode;
    TO(): antlr.TerminalNode;
    charsetName(): CharsetNameContext;
    CHARSET(): antlr.TerminalNode | null;
    CHARACTER(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode | null;
    COLLATE(): antlr.TerminalNode | null;
    collationName(): CollationNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddForeignKeyContext extends AlterSpecificationContext {
    _name?: UidContext;
    _indexName?: UidContext;
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    FOREIGN(): antlr.TerminalNode;
    KEY(): antlr.TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    referenceDefinition(): ReferenceDefinitionContext;
    CONSTRAINT(): antlr.TerminalNode | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRenameIndexContext extends AlterSpecificationContext {
    _indexFormat?: Token | null;
    constructor(ctx: AlterSpecificationContext);
    RENAME(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    TO(): antlr.TerminalNode;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRenameContext extends AlterSpecificationContext {
    _renameFormat?: Token | null;
    constructor(ctx: AlterSpecificationContext);
    RENAME(): antlr.TerminalNode;
    uid(): UidContext | null;
    fullId(): FullIdContext | null;
    TO(): antlr.TerminalNode | null;
    AS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByImportTablespaceContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    IMPORT(): antlr.TerminalNode;
    TABLESPACE(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddDefinitionsContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    createDefinition(): CreateDefinitionContext[];
    createDefinition(i: number): CreateDefinitionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COLUMN(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAlterCheckTableConstraintContext extends AlterSpecificationContext {
    _name?: UidContext;
    constructor(ctx: AlterSpecificationContext);
    ALTER(): antlr.TerminalNode;
    CHECK(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    stringLiteral(): StringLiteralContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    CONSTRAINT(): antlr.TerminalNode | null;
    NOT(): antlr.TerminalNode | null;
    ENFORCED(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropConstraintCheckContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    DROP(): antlr.TerminalNode;
    uid(): UidContext;
    CONSTRAINT(): antlr.TerminalNode | null;
    CHECK(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddColumnsContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    columnDefinition(): ColumnDefinitionContext[];
    columnDefinition(i: number): ColumnDefinitionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COLUMN(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAlterIndexVisibilityContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    ALTER(): antlr.TerminalNode;
    INDEX(): antlr.TerminalNode;
    uid(): UidContext;
    VISIBLE(): antlr.TerminalNode | null;
    INVISIBLE(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropForeignKeyContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    DROP(): antlr.TerminalNode;
    FOREIGN(): antlr.TerminalNode;
    KEY(): antlr.TerminalNode;
    uid(): UidContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddCheckTableConstraintContext extends AlterSpecificationContext {
    _name?: UidContext;
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    CHECK(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    stringLiteral(): StringLiteralContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    CONSTRAINT(): antlr.TerminalNode | null;
    NOT(): antlr.TerminalNode | null;
    ENFORCED(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterPartitionContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    alterPartitionSpecification(): AlterPartitionSpecificationContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddIndexContext extends AlterSpecificationContext {
    _indexFormat?: Token | null;
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    indexType(): IndexTypeContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropColumnContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    DROP(): antlr.TerminalNode;
    uid(): UidContext;
    COLUMN(): antlr.TerminalNode | null;
    RESTRICT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByChangeDefaultContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    ALTER(): antlr.TerminalNode;
    uid(): UidContext;
    SET(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    defaultValue(): DefaultValueContext | null;
    DROP(): antlr.TerminalNode | null;
    COLUMN(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByForceContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    FORCE(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddSpecialIndexContext extends AlterSpecificationContext {
    _keyType?: Token | null;
    _indexFormat?: Token | null;
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    FULLTEXT(): antlr.TerminalNode | null;
    SPATIAL(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByModifyColumnContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    MODIFY(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    columnDefinition(): ColumnDefinitionContext;
    COLUMN(): antlr.TerminalNode | null;
    FIRST(): antlr.TerminalNode | null;
    AFTER(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByTableOptionContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    tableOption(): TableOptionContext[];
    tableOption(i: number): TableOptionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropPrimaryKeyContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    DROP(): antlr.TerminalNode;
    PRIMARY(): antlr.TerminalNode;
    KEY(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByLockContext extends AlterSpecificationContext {
    _lockType?: Token | null;
    constructor(ctx: AlterSpecificationContext);
    LOCK(): antlr.TerminalNode;
    DEFAULT(): antlr.TerminalNode | null;
    NONE(): antlr.TerminalNode | null;
    SHARED(): antlr.TerminalNode | null;
    EXCLUSIVE(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDiscardTablespaceContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    DISCARD(): antlr.TerminalNode;
    TABLESPACE(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByValidateContext extends AlterSpecificationContext {
    _validationFormat?: Token | null;
    constructor(ctx: AlterSpecificationContext);
    VALIDATION(): antlr.TerminalNode;
    WITHOUT(): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddPrimaryKeyContext extends AlterSpecificationContext {
    _name?: UidContext;
    _index?: UidContext;
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    PRIMARY(): antlr.TerminalNode;
    KEY(): antlr.TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    CONSTRAINT(): antlr.TerminalNode | null;
    indexType(): IndexTypeContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByEnableKeysContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    ENABLE(): antlr.TerminalNode;
    KEYS(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterBySetAlgorithmContext extends AlterSpecificationContext {
    _algType?: Token | null;
    constructor(ctx: AlterSpecificationContext);
    ALGORITHM(): antlr.TerminalNode;
    DEFAULT(): antlr.TerminalNode | null;
    INSTANT(): antlr.TerminalNode | null;
    INPLACE(): antlr.TerminalNode | null;
    COPY(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByChangeColumnContext extends AlterSpecificationContext {
    _oldColumn?: UidContext;
    _newColumn?: UidContext;
    _afterColumn?: UidContext;
    constructor(ctx: AlterSpecificationContext);
    CHANGE(): antlr.TerminalNode;
    columnDefinition(): ColumnDefinitionContext;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COLUMN(): antlr.TerminalNode | null;
    FIRST(): antlr.TerminalNode | null;
    AFTER(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddUniqueKeyContext extends AlterSpecificationContext {
    _name?: UidContext;
    _indexFormat?: Token | null;
    _indexName?: UidContext;
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    UNIQUE(): antlr.TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    CONSTRAINT(): antlr.TerminalNode | null;
    indexType(): IndexTypeContext | null;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropIndexContext extends AlterSpecificationContext {
    _indexFormat?: Token | null;
    constructor(ctx: AlterSpecificationContext);
    DROP(): antlr.TerminalNode;
    uid(): UidContext;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddColumnContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    ADD(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    columnDefinition(): ColumnDefinitionContext;
    COLUMN(): antlr.TerminalNode | null;
    FIRST(): antlr.TerminalNode | null;
    AFTER(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByOrderContext extends AlterSpecificationContext {
    constructor(ctx: AlterSpecificationContext);
    ORDER(): antlr.TerminalNode;
    BY(): antlr.TerminalNode;
    uidList(): UidListContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterPartitionSpecificationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AlterPartitionSpecificationContext): void;
}
export declare class AlterByImportPartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    IMPORT(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    TABLESPACE(): antlr.TerminalNode;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropPartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    DROP(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uidList(): UidListContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDiscardPartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    DISCARD(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    TABLESPACE(): antlr.TerminalNode;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddPartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    ADD(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    partitionDefinition(): PartitionDefinitionContext[];
    partitionDefinition(i: number): PartitionDefinitionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRemovePartitioningContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    REMOVE(): antlr.TerminalNode;
    PARTITIONING(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByOptimizePartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    OPTIMIZE(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByCheckPartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    CHECK(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByCoalescePartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    COALESCE(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByReorganizePartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    REORGANIZE(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uidList(): UidListContext;
    INTO(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    partitionDefinition(): PartitionDefinitionContext[];
    partitionDefinition(i: number): PartitionDefinitionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAnalyzePartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    ANALYZE(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRebuildPartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    REBUILD(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByUpgradePartitioningContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    UPGRADE(): antlr.TerminalNode;
    PARTITIONING(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByTruncatePartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    TRUNCATE(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRepairPartitionContext extends AlterPartitionSpecificationContext {
    constructor(ctx: AlterPartitionSpecificationContext);
    REPAIR(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByExchangePartitionContext extends AlterPartitionSpecificationContext {
    _validationFormat?: Token | null;
    constructor(ctx: AlterPartitionSpecificationContext);
    EXCHANGE(): antlr.TerminalNode;
    PARTITION(): antlr.TerminalNode;
    uid(): UidContext;
    WITH(): antlr.TerminalNode[];
    WITH(i: number): antlr.TerminalNode | null;
    TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    VALIDATION(): antlr.TerminalNode | null;
    WITHOUT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropDatabaseContext extends antlr.ParserRuleContext {
    _dbFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    uid(): UidContext;
    DATABASE(): antlr.TerminalNode | null;
    SCHEMA(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropEventContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    EVENT(): antlr.TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropIndexContext extends antlr.ParserRuleContext {
    _intimeAction?: Token | null;
    _algType?: Token | null;
    _lockType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    INDEX(): antlr.TerminalNode;
    uid(): UidContext;
    ON(): antlr.TerminalNode;
    tableName(): TableNameContext;
    ALGORITHM(): antlr.TerminalNode[];
    ALGORITHM(i: number): antlr.TerminalNode | null;
    LOCK(): antlr.TerminalNode[];
    LOCK(i: number): antlr.TerminalNode | null;
    ONLINE(): antlr.TerminalNode | null;
    OFFLINE(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode[];
    DEFAULT(i: number): antlr.TerminalNode | null;
    INPLACE(): antlr.TerminalNode[];
    INPLACE(i: number): antlr.TerminalNode | null;
    COPY(): antlr.TerminalNode[];
    COPY(i: number): antlr.TerminalNode | null;
    NONE(): antlr.TerminalNode[];
    NONE(i: number): antlr.TerminalNode | null;
    SHARED(): antlr.TerminalNode[];
    SHARED(i: number): antlr.TerminalNode | null;
    EXCLUSIVE(): antlr.TerminalNode[];
    EXCLUSIVE(i: number): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropLogfileGroupContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    LOGFILE(): antlr.TerminalNode;
    GROUP(): antlr.TerminalNode;
    uid(): UidContext;
    ENGINE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    engineName(): EngineNameContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropProcedureContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    PROCEDURE(): antlr.TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    FUNCTION(): antlr.TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropServerContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    SERVER(): antlr.TerminalNode;
    uid(): UidContext;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropTableContext extends antlr.ParserRuleContext {
    _dropType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tables(): TablesContext;
    TEMPORARY(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    RESTRICT(): antlr.TerminalNode | null;
    CASCADE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropTablespaceContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    TABLESPACE(): antlr.TerminalNode;
    uid(): UidContext;
    ENGINE(): antlr.TerminalNode | null;
    engineName(): EngineNameContext | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropTriggerContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    TRIGGER(): antlr.TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropViewContext extends antlr.ParserRuleContext {
    _dropType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    VIEW(): antlr.TerminalNode;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext | null;
    ifExists(): IfExistsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    RESTRICT(): antlr.TerminalNode | null;
    CASCADE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropRoleContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    ROLE(): antlr.TerminalNode;
    roleName(): RoleNameContext[];
    roleName(i: number): RoleNameContext | null;
    ifExists(): IfExistsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetRoleContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SET(): antlr.TerminalNode;
    DEFAULT(): antlr.TerminalNode | null;
    ROLE(): antlr.TerminalNode;
    TO(): antlr.TerminalNode | null;
    NONE(): antlr.TerminalNode | null;
    ALL(): antlr.TerminalNode | null;
    roleName(): RoleNameContext[];
    roleName(i: number): RoleNameContext | null;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    roleOption(): RoleOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RenameTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RENAME(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    renameTableClause(): RenameTableClauseContext[];
    renameTableClause(i: number): RenameTableClauseContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RenameTableClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext | null;
    TO(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TruncateTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    TRUNCATE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    TABLE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CallStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CALL(): antlr.TerminalNode;
    fullId(): FullIdContext;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    constants(): ConstantsContext | null;
    expressions(): ExpressionsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeleteStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    singleDeleteStatement(): SingleDeleteStatementContext | null;
    multipleDeleteStatement(): MultipleDeleteStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DoStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DO(): antlr.TerminalNode;
    expressions(): ExpressionsContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    handlerOpenStatement(): HandlerOpenStatementContext | null;
    handlerReadIndexStatement(): HandlerReadIndexStatementContext | null;
    handlerReadStatement(): HandlerReadStatementContext | null;
    handlerCloseStatement(): HandlerCloseStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InsertStatementContext extends antlr.ParserRuleContext {
    _priority?: Token | null;
    _partitions?: UidListContext;
    _columns?: FullColumnNameListContext;
    _setFirst?: UpdatedElementContext;
    _updatedElement?: UpdatedElementContext;
    _setElements: UpdatedElementContext[];
    _duplicatedFirst?: UpdatedElementContext;
    _duplicatedElements: UpdatedElementContext[];
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    INSERT(): antlr.TerminalNode;
    tableName(): TableNameContext;
    insertStatementValue(): InsertStatementValueContext | null;
    SET(): antlr.TerminalNode | null;
    IGNORE(): antlr.TerminalNode | null;
    INTO(): antlr.TerminalNode | null;
    PARTITION(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext | null;
    ON(): antlr.TerminalNode | null;
    DUPLICATE(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    UPDATE(): antlr.TerminalNode | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    DELAYED(): antlr.TerminalNode | null;
    HIGH_PRIORITY(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    AS(): antlr.TerminalNode | null;
    fullColumnNameList(): FullColumnNameListContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoadDataStatementContext extends antlr.ParserRuleContext {
    _priority?: Token | null;
    _filename?: Token | null;
    _violation?: Token | null;
    _charset?: CharsetNameContext;
    _fieldsFormat?: Token | null;
    _linesFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOAD(): antlr.TerminalNode;
    DATA(): antlr.TerminalNode;
    INFILE(): antlr.TerminalNode;
    INTO(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    STRING_LITERAL(): antlr.TerminalNode;
    LOCAL(): antlr.TerminalNode | null;
    PARTITION(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    CHARACTER(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode[];
    SET(i: number): antlr.TerminalNode | null;
    LINES(): antlr.TerminalNode[];
    LINES(i: number): antlr.TerminalNode | null;
    IGNORE(): antlr.TerminalNode[];
    IGNORE(i: number): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    assignmentField(): AssignmentFieldContext[];
    assignmentField(i: number): AssignmentFieldContext | null;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext | null;
    charsetName(): CharsetNameContext | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    CONCURRENT(): antlr.TerminalNode | null;
    REPLACE(): antlr.TerminalNode | null;
    FIELDS(): antlr.TerminalNode | null;
    COLUMNS(): antlr.TerminalNode | null;
    ROWS(): antlr.TerminalNode | null;
    selectFieldsInto(): SelectFieldsIntoContext[];
    selectFieldsInto(i: number): SelectFieldsIntoContext | null;
    selectLinesInto(): SelectLinesIntoContext[];
    selectLinesInto(i: number): SelectLinesIntoContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoadXmlStatementContext extends antlr.ParserRuleContext {
    _priority?: Token | null;
    _filename?: Token | null;
    _violation?: Token | null;
    _charset?: CharsetNameContext;
    _tag?: Token | null;
    _linesFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOAD(): antlr.TerminalNode;
    XML(): antlr.TerminalNode;
    INFILE(): antlr.TerminalNode;
    INTO(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    STRING_LITERAL(): antlr.TerminalNode[];
    STRING_LITERAL(i: number): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    CHARACTER(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode[];
    SET(i: number): antlr.TerminalNode | null;
    ROWS(): antlr.TerminalNode[];
    ROWS(i: number): antlr.TerminalNode | null;
    IDENTIFIED(): antlr.TerminalNode | null;
    BY(): antlr.TerminalNode | null;
    LESS_SYMBOL(): antlr.TerminalNode | null;
    GREATER_SYMBOL(): antlr.TerminalNode | null;
    IGNORE(): antlr.TerminalNode[];
    IGNORE(i: number): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    assignmentField(): AssignmentFieldContext[];
    assignmentField(i: number): AssignmentFieldContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext | null;
    charsetName(): CharsetNameContext | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    CONCURRENT(): antlr.TerminalNode | null;
    REPLACE(): antlr.TerminalNode | null;
    LINES(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReplaceStatementContext extends antlr.ParserRuleContext {
    _priority?: Token | null;
    _partitions?: UidListContext;
    _columns?: UidListContext;
    _setFirst?: UpdatedElementContext;
    _updatedElement?: UpdatedElementContext;
    _setElements: UpdatedElementContext[];
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    REPLACE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    insertStatementValue(): InsertStatementValueContext | null;
    SET(): antlr.TerminalNode | null;
    INTO(): antlr.TerminalNode | null;
    PARTITION(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext | null;
    uidList(): UidListContext[];
    uidList(i: number): UidListContext | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    DELAYED(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SelectStatementContext): void;
}
export declare class UnionSelectContext extends SelectStatementContext {
    _unionType?: Token | null;
    constructor(ctx: SelectStatementContext);
    querySpecificationNointo(): QuerySpecificationNointoContext | null;
    queryExpressionNointo(): QueryExpressionNointoContext | null;
    unionStatement(): UnionStatementContext[];
    unionStatement(i: number): UnionStatementContext | null;
    UNION(): antlr.TerminalNode | null;
    orderByClause(): OrderByClauseContext | null;
    limitClause(): LimitClauseContext | null;
    lockClause(): LockClauseContext | null;
    querySpecification(): QuerySpecificationContext | null;
    queryExpression(): QueryExpressionContext | null;
    ALL(): antlr.TerminalNode | null;
    DISTINCT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UnionParenthesisSelectContext extends SelectStatementContext {
    _unionType?: Token | null;
    constructor(ctx: SelectStatementContext);
    queryExpressionNointo(): QueryExpressionNointoContext;
    unionParenthesis(): UnionParenthesisContext[];
    unionParenthesis(i: number): UnionParenthesisContext | null;
    UNION(): antlr.TerminalNode | null;
    queryExpression(): QueryExpressionContext | null;
    orderByClause(): OrderByClauseContext | null;
    limitClause(): LimitClauseContext | null;
    lockClause(): LockClauseContext | null;
    ALL(): antlr.TerminalNode | null;
    DISTINCT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleSelectContext extends SelectStatementContext {
    constructor(ctx: SelectStatementContext);
    querySpecification(): QuerySpecificationContext;
    lockClause(): LockClauseContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ParenthesisSelectContext extends SelectStatementContext {
    constructor(ctx: SelectStatementContext);
    queryExpression(): QueryExpressionContext;
    lockClause(): LockClauseContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WithLateralStatementContext extends SelectStatementContext {
    constructor(ctx: SelectStatementContext);
    querySpecificationNointo(): QuerySpecificationNointoContext;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    lateralStatement(): LateralStatementContext[];
    lateralStatement(i: number): LateralStatementContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UpdateStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    singleUpdateStatement(): SingleUpdateStatementContext | null;
    multipleUpdateStatement(): MultipleUpdateStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ValuesStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    VALUES(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    expressionsWithDefaults(): ExpressionsWithDefaultsContext[];
    expressionsWithDefaults(i: number): ExpressionsWithDefaultsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InsertStatementValueContext extends antlr.ParserRuleContext {
    _insertFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    selectStatement(): SelectStatementContext | null;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    VALUES(): antlr.TerminalNode | null;
    VALUE(): antlr.TerminalNode | null;
    expressionsWithDefaults(): ExpressionsWithDefaultsContext[];
    expressionsWithDefaults(i: number): ExpressionsWithDefaultsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UpdatedElementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    fullColumnName(): FullColumnNameContext;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    expression(): ExpressionContext | null;
    DEFAULT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AssignmentFieldContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext | null;
    LOCAL_ID(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LockClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    FOR(): antlr.TerminalNode | null;
    UPDATE(): antlr.TerminalNode | null;
    LOCK(): antlr.TerminalNode | null;
    IN(): antlr.TerminalNode | null;
    SHARE(): antlr.TerminalNode | null;
    MODE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SingleDeleteStatementContext extends antlr.ParserRuleContext {
    _priority?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DELETE(): antlr.TerminalNode;
    FROM(): antlr.TerminalNode;
    tableName(): TableNameContext;
    QUICK(): antlr.TerminalNode | null;
    IGNORE(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    PARTITION(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    orderByClause(): OrderByClauseContext | null;
    LIMIT(): antlr.TerminalNode | null;
    limitClauseAtom(): LimitClauseAtomContext | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MultipleDeleteStatementContext extends antlr.ParserRuleContext {
    _priority?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DELETE(): antlr.TerminalNode;
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext | null;
    FROM(): antlr.TerminalNode | null;
    tableSources(): TableSourcesContext | null;
    USING(): antlr.TerminalNode | null;
    QUICK(): antlr.TerminalNode | null;
    IGNORE(): antlr.TerminalNode | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    STAR(): antlr.TerminalNode[];
    STAR(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerOpenStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    HANDLER(): antlr.TerminalNode;
    tableName(): TableNameContext;
    OPEN(): antlr.TerminalNode;
    uid(): UidContext | null;
    AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerReadIndexStatementContext extends antlr.ParserRuleContext {
    _index?: UidContext;
    _moveOrder?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    HANDLER(): antlr.TerminalNode;
    tableName(): TableNameContext;
    READ(): antlr.TerminalNode;
    uid(): UidContext;
    comparisonOperator(): ComparisonOperatorContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    constants(): ConstantsContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    LIMIT(): antlr.TerminalNode | null;
    limitClauseAtom(): LimitClauseAtomContext | null;
    FIRST(): antlr.TerminalNode | null;
    NEXT(): antlr.TerminalNode | null;
    PREV(): antlr.TerminalNode | null;
    LAST(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerReadStatementContext extends antlr.ParserRuleContext {
    _moveOrder?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    HANDLER(): antlr.TerminalNode;
    tableName(): TableNameContext;
    READ(): antlr.TerminalNode;
    FIRST(): antlr.TerminalNode | null;
    NEXT(): antlr.TerminalNode | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    LIMIT(): antlr.TerminalNode | null;
    limitClauseAtom(): LimitClauseAtomContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerCloseStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    HANDLER(): antlr.TerminalNode;
    tableName(): TableNameContext;
    CLOSE(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SingleUpdateStatementContext extends antlr.ParserRuleContext {
    _priority?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    UPDATE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    SET(): antlr.TerminalNode;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext | null;
    IGNORE(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    orderByClause(): OrderByClauseContext | null;
    limitClause(): LimitClauseContext | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MultipleUpdateStatementContext extends antlr.ParserRuleContext {
    _priority?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    UPDATE(): antlr.TerminalNode;
    tableSources(): TableSourcesContext;
    SET(): antlr.TerminalNode;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext | null;
    IGNORE(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OrderByClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ORDER(): antlr.TerminalNode;
    BY(): antlr.TerminalNode;
    orderByExpression(): OrderByExpressionContext[];
    orderByExpression(i: number): OrderByExpressionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OrderByExpressionContext extends antlr.ParserRuleContext {
    _order?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expression(): ExpressionContext;
    ASC(): antlr.TerminalNode | null;
    DESC(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourcesContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableSource(): TableSourceContext[];
    tableSource(i: number): TableSourceContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TableSourceContext): void;
}
export declare class TableJsonContext extends TableSourceContext {
    constructor(ctx: TableSourceContext);
    jsonTable(): JsonTableContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceNestedContext extends TableSourceContext {
    constructor(ctx: TableSourceContext);
    LR_BRACKET(): antlr.TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    RR_BRACKET(): antlr.TerminalNode;
    joinPart(): JoinPartContext[];
    joinPart(i: number): JoinPartContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceBaseContext extends TableSourceContext {
    constructor(ctx: TableSourceContext);
    tableSourceItem(): TableSourceItemContext;
    joinPart(): JoinPartContext[];
    joinPart(i: number): JoinPartContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceItemContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TableSourceItemContext): void;
}
export declare class SubqueryTableItemContext extends TableSourceItemContext {
    _parenthesisSubquery?: SelectStatementContext;
    _alias?: UidContext;
    constructor(ctx: TableSourceItemContext);
    uid(): UidContext;
    selectStatement(): SelectStatementContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    AS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AtomTableItemContext extends TableSourceItemContext {
    _alias?: UidContext;
    constructor(ctx: TableSourceItemContext);
    tableName(): TableNameContext;
    PARTITION(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    indexHint(): IndexHintContext[];
    indexHint(i: number): IndexHintContext | null;
    uid(): UidContext | null;
    AS(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourcesItemContext extends TableSourceItemContext {
    constructor(ctx: TableSourceItemContext);
    LR_BRACKET(): antlr.TerminalNode;
    tableSources(): TableSourcesContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexHintContext extends antlr.ParserRuleContext {
    _indexHintAction?: Token | null;
    _keyFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): antlr.TerminalNode;
    USE(): antlr.TerminalNode | null;
    IGNORE(): antlr.TerminalNode | null;
    FORCE(): antlr.TerminalNode | null;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    FOR(): antlr.TerminalNode | null;
    indexHintType(): IndexHintTypeContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexHintTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    JOIN(): antlr.TerminalNode | null;
    ORDER(): antlr.TerminalNode | null;
    BY(): antlr.TerminalNode | null;
    GROUP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JoinPartContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: JoinPartContext): void;
}
export declare class InnerJoinContext extends JoinPartContext {
    constructor(ctx: JoinPartContext);
    JOIN(): antlr.TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    LATERAL(): antlr.TerminalNode | null;
    joinSpec(): JoinSpecContext[];
    joinSpec(i: number): JoinSpecContext | null;
    INNER(): antlr.TerminalNode | null;
    CROSS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NaturalJoinContext extends JoinPartContext {
    constructor(ctx: JoinPartContext);
    NATURAL(): antlr.TerminalNode;
    JOIN(): antlr.TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    LEFT(): antlr.TerminalNode | null;
    RIGHT(): antlr.TerminalNode | null;
    OUTER(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OuterJoinContext extends JoinPartContext {
    constructor(ctx: JoinPartContext);
    JOIN(): antlr.TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    LEFT(): antlr.TerminalNode | null;
    RIGHT(): antlr.TerminalNode | null;
    OUTER(): antlr.TerminalNode | null;
    LATERAL(): antlr.TerminalNode | null;
    joinSpec(): JoinSpecContext[];
    joinSpec(i: number): JoinSpecContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StraightJoinContext extends JoinPartContext {
    constructor(ctx: JoinPartContext);
    STRAIGHT_JOIN(): antlr.TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    ON(): antlr.TerminalNode[];
    ON(i: number): antlr.TerminalNode | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JoinSpecContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ON(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    USING(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    querySpecification(): QuerySpecificationContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    queryExpression(): QueryExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryExpressionNointoContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    querySpecificationNointo(): QuerySpecificationNointoContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    queryExpressionNointo(): QueryExpressionNointoContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QuerySpecificationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SELECT(): antlr.TerminalNode;
    selectElements(): SelectElementsContext;
    fromClause(): FromClauseContext;
    selectSpec(): SelectSpecContext[];
    selectSpec(i: number): SelectSpecContext | null;
    selectIntoExpression(): SelectIntoExpressionContext | null;
    groupByClause(): GroupByClauseContext | null;
    havingClause(): HavingClauseContext | null;
    windowClause(): WindowClauseContext | null;
    orderByClause(): OrderByClauseContext | null;
    limitClause(): LimitClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QuerySpecificationNointoContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SELECT(): antlr.TerminalNode;
    selectElements(): SelectElementsContext;
    fromClause(): FromClauseContext;
    selectSpec(): SelectSpecContext[];
    selectSpec(i: number): SelectSpecContext | null;
    groupByClause(): GroupByClauseContext | null;
    havingClause(): HavingClauseContext | null;
    windowClause(): WindowClauseContext | null;
    orderByClause(): OrderByClauseContext | null;
    limitClause(): LimitClauseContext | null;
    unionStatement(): UnionStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UnionParenthesisContext extends antlr.ParserRuleContext {
    _unionType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    UNION(): antlr.TerminalNode;
    queryExpressionNointo(): QueryExpressionNointoContext;
    ALL(): antlr.TerminalNode | null;
    DISTINCT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UnionStatementContext extends antlr.ParserRuleContext {
    _unionType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    UNION(): antlr.TerminalNode;
    querySpecificationNointo(): QuerySpecificationNointoContext | null;
    queryExpressionNointo(): QueryExpressionNointoContext | null;
    ALL(): antlr.TerminalNode | null;
    DISTINCT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LateralStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LATERAL(): antlr.TerminalNode;
    querySpecificationNointo(): QuerySpecificationNointoContext | null;
    queryExpressionNointo(): QueryExpressionNointoContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    JSON_TABLE(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode[];
    STRING_LITERAL(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode;
    COLUMNS(): antlr.TerminalNode;
    jsonColumnList(): JsonColumnListContext;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    uid(): UidContext | null;
    AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonColumnListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    jsonColumn(): JsonColumnContext[];
    jsonColumn(i: number): JsonColumnContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonColumnContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    fullColumnName(): FullColumnNameContext | null;
    FOR(): antlr.TerminalNode | null;
    ORDINALITY(): antlr.TerminalNode | null;
    dataType(): DataTypeContext | null;
    PATH(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    EXISTS(): antlr.TerminalNode | null;
    jsonOnEmpty(): JsonOnEmptyContext | null;
    jsonOnError(): JsonOnErrorContext | null;
    NESTED(): antlr.TerminalNode | null;
    COLUMNS(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    jsonColumnList(): JsonColumnListContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonOnEmptyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ON(): antlr.TerminalNode;
    EMPTY(): antlr.TerminalNode;
    NULL_LITERAL(): antlr.TerminalNode | null;
    ERROR(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    defaultValue(): DefaultValueContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonOnErrorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ON(): antlr.TerminalNode;
    ERROR(): antlr.TerminalNode[];
    ERROR(i: number): antlr.TerminalNode | null;
    NULL_LITERAL(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    defaultValue(): DefaultValueContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectSpecContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALL(): antlr.TerminalNode | null;
    DISTINCT(): antlr.TerminalNode | null;
    DISTINCTROW(): antlr.TerminalNode | null;
    HIGH_PRIORITY(): antlr.TerminalNode | null;
    STRAIGHT_JOIN(): antlr.TerminalNode | null;
    SQL_SMALL_RESULT(): antlr.TerminalNode | null;
    SQL_BIG_RESULT(): antlr.TerminalNode | null;
    SQL_BUFFER_RESULT(): antlr.TerminalNode | null;
    SQL_CACHE(): antlr.TerminalNode | null;
    SQL_NO_CACHE(): antlr.TerminalNode | null;
    SQL_CALC_FOUND_ROWS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectElementsContext extends antlr.ParserRuleContext {
    _star?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    selectElement(): SelectElementContext[];
    selectElement(i: number): SelectElementContext | null;
    STAR(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectElementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SelectElementContext): void;
}
export declare class SelectExpressionElementContext extends SelectElementContext {
    constructor(ctx: SelectElementContext);
    expression(): ExpressionContext;
    LOCAL_ID(): antlr.TerminalNode | null;
    VAR_ASSIGN(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    AS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectFunctionElementContext extends SelectElementContext {
    constructor(ctx: SelectElementContext);
    functionCall(): FunctionCallContext;
    uid(): UidContext | null;
    AS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectStarElementContext extends SelectElementContext {
    constructor(ctx: SelectElementContext);
    fullId(): FullIdContext;
    DOT(): antlr.TerminalNode;
    STAR(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectColumnElementContext extends SelectElementContext {
    constructor(ctx: SelectElementContext);
    fullColumnName(): FullColumnNameContext;
    uid(): UidContext | null;
    AS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectIntoExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SelectIntoExpressionContext): void;
}
export declare class SelectIntoVariablesContext extends SelectIntoExpressionContext {
    constructor(ctx: SelectIntoExpressionContext);
    INTO(): antlr.TerminalNode;
    assignmentField(): AssignmentFieldContext[];
    assignmentField(i: number): AssignmentFieldContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectIntoTextFileContext extends SelectIntoExpressionContext {
    _filename?: Token | null;
    _charset?: CharsetNameContext;
    _fieldsFormat?: Token | null;
    constructor(ctx: SelectIntoExpressionContext);
    INTO(): antlr.TerminalNode | null;
    OUTFILE(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    CHARACTER(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode | null;
    LINES(): antlr.TerminalNode | null;
    charsetName(): CharsetNameContext | null;
    FIELDS(): antlr.TerminalNode | null;
    COLUMNS(): antlr.TerminalNode | null;
    selectFieldsInto(): SelectFieldsIntoContext[];
    selectFieldsInto(i: number): SelectFieldsIntoContext | null;
    selectLinesInto(): SelectLinesIntoContext[];
    selectLinesInto(i: number): SelectLinesIntoContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectIntoDumpFileContext extends SelectIntoExpressionContext {
    constructor(ctx: SelectIntoExpressionContext);
    INTO(): antlr.TerminalNode;
    DUMPFILE(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectFieldsIntoContext extends antlr.ParserRuleContext {
    _terminationField?: Token | null;
    _enclosion?: Token | null;
    _escaping?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    TERMINATED(): antlr.TerminalNode | null;
    BY(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    ENCLOSED(): antlr.TerminalNode | null;
    OPTIONALLY(): antlr.TerminalNode | null;
    ESCAPED(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectLinesIntoContext extends antlr.ParserRuleContext {
    _starting?: Token | null;
    _terminationLine?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STARTING(): antlr.TerminalNode | null;
    BY(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    TERMINATED(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FromClauseContext extends antlr.ParserRuleContext {
    _whereExpr?: ExpressionContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    FROM(): antlr.TerminalNode | null;
    tableSources(): TableSourcesContext | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GroupByClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    GROUP(): antlr.TerminalNode;
    BY(): antlr.TerminalNode;
    groupByItem(): GroupByItemContext[];
    groupByItem(i: number): GroupByItemContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode | null;
    ROLLUP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HavingClauseContext extends antlr.ParserRuleContext {
    _havingExpr?: ExpressionContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    HAVING(): antlr.TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WindowClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WINDOW(): antlr.TerminalNode;
    windowName(): WindowNameContext[];
    windowName(i: number): WindowNameContext | null;
    AS(): antlr.TerminalNode[];
    AS(i: number): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    windowSpec(): WindowSpecContext[];
    windowSpec(i: number): WindowSpecContext | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GroupByItemContext extends antlr.ParserRuleContext {
    _order?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expression(): ExpressionContext;
    ASC(): antlr.TerminalNode | null;
    DESC(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LimitClauseContext extends antlr.ParserRuleContext {
    _offset?: LimitClauseAtomContext;
    _limit?: LimitClauseAtomContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LIMIT(): antlr.TerminalNode;
    OFFSET(): antlr.TerminalNode | null;
    limitClauseAtom(): LimitClauseAtomContext[];
    limitClauseAtom(i: number): LimitClauseAtomContext | null;
    COMMA(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LimitClauseAtomContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    decimalLiteral(): DecimalLiteralContext | null;
    mysqlVariable(): MysqlVariableContext | null;
    simpleId(): SimpleIdContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StartTransactionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    START(): antlr.TerminalNode;
    TRANSACTION(): antlr.TerminalNode;
    transactionMode(): TransactionModeContext[];
    transactionMode(i: number): TransactionModeContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BeginWorkContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    BEGIN(): antlr.TerminalNode;
    WORK(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CommitWorkContext extends antlr.ParserRuleContext {
    _nochain?: Token | null;
    _norelease?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    COMMIT(): antlr.TerminalNode;
    WORK(): antlr.TerminalNode | null;
    AND(): antlr.TerminalNode | null;
    CHAIN(): antlr.TerminalNode | null;
    RELEASE(): antlr.TerminalNode | null;
    NO(): antlr.TerminalNode[];
    NO(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RollbackWorkContext extends antlr.ParserRuleContext {
    _nochain?: Token | null;
    _norelease?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ROLLBACK(): antlr.TerminalNode;
    WORK(): antlr.TerminalNode | null;
    AND(): antlr.TerminalNode | null;
    CHAIN(): antlr.TerminalNode | null;
    RELEASE(): antlr.TerminalNode | null;
    NO(): antlr.TerminalNode[];
    NO(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SavepointStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SAVEPOINT(): antlr.TerminalNode;
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RollbackStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ROLLBACK(): antlr.TerminalNode;
    TO(): antlr.TerminalNode;
    uid(): UidContext;
    WORK(): antlr.TerminalNode | null;
    SAVEPOINT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReleaseStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RELEASE(): antlr.TerminalNode;
    SAVEPOINT(): antlr.TerminalNode;
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LockTablesContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOCK(): antlr.TerminalNode;
    lockTableElement(): LockTableElementContext[];
    lockTableElement(i: number): LockTableElementContext | null;
    TABLE(): antlr.TerminalNode | null;
    TABLES(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    waitNowaitClause(): WaitNowaitClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UnlockTablesContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    UNLOCK(): antlr.TerminalNode;
    TABLES(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetAutocommitStatementContext extends antlr.ParserRuleContext {
    _autocommitValue?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SET(): antlr.TerminalNode;
    AUTOCOMMIT(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetTransactionStatementContext extends antlr.ParserRuleContext {
    _transactionContext?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SET(): antlr.TerminalNode;
    TRANSACTION(): antlr.TerminalNode;
    transactionOption(): TransactionOptionContext[];
    transactionOption(i: number): TransactionOptionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    GLOBAL(): antlr.TerminalNode | null;
    SESSION(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionModeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WITH(): antlr.TerminalNode | null;
    CONSISTENT(): antlr.TerminalNode | null;
    SNAPSHOT(): antlr.TerminalNode | null;
    READ(): antlr.TerminalNode | null;
    WRITE(): antlr.TerminalNode | null;
    ONLY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LockTableElementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableName(): TableNameContext;
    lockAction(): LockActionContext;
    uid(): UidContext | null;
    AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LockActionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    READ(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    WRITE(): antlr.TerminalNode | null;
    LOW_PRIORITY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ISOLATION(): antlr.TerminalNode | null;
    LEVEL(): antlr.TerminalNode | null;
    transactionLevel(): TransactionLevelContext | null;
    READ(): antlr.TerminalNode | null;
    WRITE(): antlr.TerminalNode | null;
    ONLY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionLevelContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    REPEATABLE(): antlr.TerminalNode | null;
    READ(): antlr.TerminalNode | null;
    COMMITTED(): antlr.TerminalNode | null;
    UNCOMMITTED(): antlr.TerminalNode | null;
    SERIALIZABLE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChangeMasterContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CHANGE(): antlr.TerminalNode;
    MASTER(): antlr.TerminalNode;
    TO(): antlr.TerminalNode;
    masterOption(): MasterOptionContext[];
    masterOption(i: number): MasterOptionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    channelOption(): ChannelOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChangeReplicationFilterContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CHANGE(): antlr.TerminalNode;
    REPLICATION(): antlr.TerminalNode;
    FILTER(): antlr.TerminalNode;
    replicationFilter(): ReplicationFilterContext[];
    replicationFilter(i: number): ReplicationFilterContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PurgeBinaryLogsContext extends antlr.ParserRuleContext {
    _purgeFormat?: Token | null;
    _fileName?: Token | null;
    _timeValue?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    PURGE(): antlr.TerminalNode;
    LOGS(): antlr.TerminalNode;
    BINARY(): antlr.TerminalNode | null;
    MASTER(): antlr.TerminalNode | null;
    TO(): antlr.TerminalNode | null;
    BEFORE(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResetMasterContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RESET(): antlr.TerminalNode;
    MASTER(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResetSlaveContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RESET(): antlr.TerminalNode;
    SLAVE(): antlr.TerminalNode;
    ALL(): antlr.TerminalNode | null;
    channelOption(): ChannelOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StartSlaveContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    START(): antlr.TerminalNode;
    SLAVE(): antlr.TerminalNode;
    threadType(): ThreadTypeContext[];
    threadType(i: number): ThreadTypeContext | null;
    UNTIL(): antlr.TerminalNode | null;
    untilOption(): UntilOptionContext | null;
    connectionOption(): ConnectionOptionContext[];
    connectionOption(i: number): ConnectionOptionContext | null;
    channelOption(): ChannelOptionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StopSlaveContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STOP(): antlr.TerminalNode;
    SLAVE(): antlr.TerminalNode;
    threadType(): ThreadTypeContext[];
    threadType(i: number): ThreadTypeContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StartGroupReplicationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    START(): antlr.TerminalNode;
    GROUP_REPLICATION(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StopGroupReplicationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STOP(): antlr.TerminalNode;
    GROUP_REPLICATION(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: MasterOptionContext): void;
}
export declare class MasterStringOptionContext extends MasterOptionContext {
    constructor(ctx: MasterOptionContext);
    stringMasterOption(): StringMasterOptionContext;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterRealOptionContext extends MasterOptionContext {
    constructor(ctx: MasterOptionContext);
    MASTER_HEARTBEAT_PERIOD(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    REAL_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterBoolOptionContext extends MasterOptionContext {
    _boolVal?: Token | null;
    constructor(ctx: MasterOptionContext);
    boolMasterOption(): BoolMasterOptionContext;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterUidListOptionContext extends MasterOptionContext {
    constructor(ctx: MasterOptionContext);
    IGNORE_SERVER_IDS(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterDecimalOptionContext extends MasterOptionContext {
    constructor(ctx: MasterOptionContext);
    decimalMasterOption(): DecimalMasterOptionContext;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringMasterOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    MASTER_BIND(): antlr.TerminalNode | null;
    MASTER_HOST(): antlr.TerminalNode | null;
    MASTER_USER(): antlr.TerminalNode | null;
    MASTER_PASSWORD(): antlr.TerminalNode | null;
    MASTER_LOG_FILE(): antlr.TerminalNode | null;
    RELAY_LOG_FILE(): antlr.TerminalNode | null;
    MASTER_SSL_CA(): antlr.TerminalNode | null;
    MASTER_SSL_CAPATH(): antlr.TerminalNode | null;
    MASTER_SSL_CERT(): antlr.TerminalNode | null;
    MASTER_SSL_CRL(): antlr.TerminalNode | null;
    MASTER_SSL_CRLPATH(): antlr.TerminalNode | null;
    MASTER_SSL_KEY(): antlr.TerminalNode | null;
    MASTER_SSL_CIPHER(): antlr.TerminalNode | null;
    MASTER_TLS_VERSION(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DecimalMasterOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    MASTER_PORT(): antlr.TerminalNode | null;
    MASTER_CONNECT_RETRY(): antlr.TerminalNode | null;
    MASTER_RETRY_COUNT(): antlr.TerminalNode | null;
    MASTER_DELAY(): antlr.TerminalNode | null;
    MASTER_LOG_POS(): antlr.TerminalNode | null;
    RELAY_LOG_POS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BoolMasterOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    MASTER_AUTO_POSITION(): antlr.TerminalNode | null;
    MASTER_SSL(): antlr.TerminalNode | null;
    MASTER_SSL_VERIFY_SERVER_CERT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChannelOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    FOR(): antlr.TerminalNode;
    CHANNEL(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReplicationFilterContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ReplicationFilterContext): void;
}
export declare class WildIgnoreTableReplicationContext extends ReplicationFilterContext {
    constructor(ctx: ReplicationFilterContext);
    REPLICATE_WILD_IGNORE_TABLE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    simpleStrings(): SimpleStringsContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DoTableReplicationContext extends ReplicationFilterContext {
    constructor(ctx: ReplicationFilterContext);
    REPLICATE_DO_TABLE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    tables(): TablesContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IgnoreTableReplicationContext extends ReplicationFilterContext {
    constructor(ctx: ReplicationFilterContext);
    REPLICATE_IGNORE_TABLE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    tables(): TablesContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RewriteDbReplicationContext extends ReplicationFilterContext {
    constructor(ctx: ReplicationFilterContext);
    REPLICATE_REWRITE_DB(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    tablePair(): TablePairContext[];
    tablePair(i: number): TablePairContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DoDbReplicationContext extends ReplicationFilterContext {
    constructor(ctx: ReplicationFilterContext);
    REPLICATE_DO_DB(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IgnoreDbReplicationContext extends ReplicationFilterContext {
    constructor(ctx: ReplicationFilterContext);
    REPLICATE_IGNORE_DB(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WildDoTableReplicationContext extends ReplicationFilterContext {
    constructor(ctx: ReplicationFilterContext);
    REPLICATE_WILD_DO_TABLE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    simpleStrings(): SimpleStringsContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TablePairContext extends antlr.ParserRuleContext {
    _firstTable?: TableNameContext;
    _secondTable?: TableNameContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ThreadTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    IO_THREAD(): antlr.TerminalNode | null;
    SQL_THREAD(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UntilOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: UntilOptionContext): void;
}
export declare class GtidsUntilOptionContext extends UntilOptionContext {
    _gtids?: Token | null;
    constructor(ctx: UntilOptionContext);
    EQUAL_SYMBOL(): antlr.TerminalNode;
    gtuidSet(): GtuidSetContext;
    SQL_BEFORE_GTIDS(): antlr.TerminalNode | null;
    SQL_AFTER_GTIDS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SqlGapsUntilOptionContext extends UntilOptionContext {
    constructor(ctx: UntilOptionContext);
    SQL_AFTER_MTS_GAPS(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterLogUntilOptionContext extends UntilOptionContext {
    constructor(ctx: UntilOptionContext);
    MASTER_LOG_FILE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode;
    MASTER_LOG_POS(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RelayLogUntilOptionContext extends UntilOptionContext {
    constructor(ctx: UntilOptionContext);
    RELAY_LOG_FILE(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode;
    RELAY_LOG_POS(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConnectionOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ConnectionOptionContext): void;
}
export declare class PluginDirConnectionOptionContext extends ConnectionOptionContext {
    _conOptPluginDir?: Token | null;
    constructor(ctx: ConnectionOptionContext);
    PLUGIN_DIR(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserConnectionOptionContext extends ConnectionOptionContext {
    _conOptUser?: Token | null;
    constructor(ctx: ConnectionOptionContext);
    USER(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefaultAuthConnectionOptionContext extends ConnectionOptionContext {
    _conOptDefAuth?: Token | null;
    constructor(ctx: ConnectionOptionContext);
    DEFAULT_AUTH(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PasswordConnectionOptionContext extends ConnectionOptionContext {
    _conOptPassword?: Token | null;
    constructor(ctx: ConnectionOptionContext);
    PASSWORD(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GtuidSetContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uuidSet(): UuidSetContext[];
    uuidSet(i: number): UuidSetContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaStartTransactionContext extends antlr.ParserRuleContext {
    _xaStart?: Token | null;
    _xaAction?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    XA(): antlr.TerminalNode;
    xid(): XidContext;
    START(): antlr.TerminalNode | null;
    BEGIN(): antlr.TerminalNode | null;
    JOIN(): antlr.TerminalNode | null;
    RESUME(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaEndTransactionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    XA(): antlr.TerminalNode;
    END(): antlr.TerminalNode;
    xid(): XidContext;
    SUSPEND(): antlr.TerminalNode | null;
    FOR(): antlr.TerminalNode | null;
    MIGRATE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaPrepareStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    XA(): antlr.TerminalNode;
    PREPARE(): antlr.TerminalNode;
    xid(): XidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaCommitWorkContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    XA(): antlr.TerminalNode;
    COMMIT(): antlr.TerminalNode;
    xid(): XidContext;
    ONE(): antlr.TerminalNode | null;
    PHASE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaRollbackWorkContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    XA(): antlr.TerminalNode;
    ROLLBACK(): antlr.TerminalNode;
    xid(): XidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaRecoverWorkContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    XA(): antlr.TerminalNode;
    RECOVER(): antlr.TerminalNode;
    CONVERT(): antlr.TerminalNode | null;
    xid(): XidContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrepareStatementContext extends antlr.ParserRuleContext {
    _query?: Token | null;
    _variable?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    PREPARE(): antlr.TerminalNode;
    uid(): UidContext;
    FROM(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode | null;
    LOCAL_ID(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExecuteStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EXECUTE(): antlr.TerminalNode;
    uid(): UidContext;
    USING(): antlr.TerminalNode | null;
    userVariables(): UserVariablesContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeallocatePrepareContext extends antlr.ParserRuleContext {
    _dropFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    PREPARE(): antlr.TerminalNode;
    uid(): UidContext;
    DEALLOCATE(): antlr.TerminalNode | null;
    DROP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineBodyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    blockStatement(): BlockStatementContext | null;
    sqlStatement(): SqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BlockStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    BEGIN(): antlr.TerminalNode;
    END(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COLON_SYMB(): antlr.TerminalNode | null;
    declareVariable(): DeclareVariableContext[];
    declareVariable(i: number): DeclareVariableContext | null;
    SEMI(): antlr.TerminalNode[];
    SEMI(i: number): antlr.TerminalNode | null;
    declareCondition(): DeclareConditionContext[];
    declareCondition(i: number): DeclareConditionContext | null;
    declareCursor(): DeclareCursorContext[];
    declareCursor(i: number): DeclareCursorContext | null;
    declareHandler(): DeclareHandlerContext[];
    declareHandler(i: number): DeclareHandlerContext | null;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CASE(): antlr.TerminalNode[];
    CASE(i: number): antlr.TerminalNode | null;
    END(): antlr.TerminalNode;
    uid(): UidContext | null;
    expression(): ExpressionContext | null;
    caseAlternative(): CaseAlternativeContext[];
    caseAlternative(i: number): CaseAlternativeContext | null;
    ELSE(): antlr.TerminalNode | null;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IfStatementContext extends antlr.ParserRuleContext {
    _procedureSqlStatement?: ProcedureSqlStatementContext;
    _thenStatements: ProcedureSqlStatementContext[];
    _elseStatements: ProcedureSqlStatementContext[];
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    IF(): antlr.TerminalNode[];
    IF(i: number): antlr.TerminalNode | null;
    expression(): ExpressionContext;
    THEN(): antlr.TerminalNode;
    END(): antlr.TerminalNode;
    elifAlternative(): ElifAlternativeContext[];
    elifAlternative(i: number): ElifAlternativeContext | null;
    ELSE(): antlr.TerminalNode | null;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IterateStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ITERATE(): antlr.TerminalNode;
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LeaveStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LEAVE(): antlr.TerminalNode;
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoopStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOOP(): antlr.TerminalNode[];
    LOOP(i: number): antlr.TerminalNode | null;
    END(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COLON_SYMB(): antlr.TerminalNode | null;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RepeatStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    REPEAT(): antlr.TerminalNode[];
    REPEAT(i: number): antlr.TerminalNode | null;
    UNTIL(): antlr.TerminalNode;
    expression(): ExpressionContext;
    END(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COLON_SYMB(): antlr.TerminalNode | null;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReturnStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RETURN(): antlr.TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WhileStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WHILE(): antlr.TerminalNode[];
    WHILE(i: number): antlr.TerminalNode | null;
    expression(): ExpressionContext;
    DO(): antlr.TerminalNode;
    END(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COLON_SYMB(): antlr.TerminalNode | null;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CursorStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CursorStatementContext): void;
}
export declare class CloseCursorContext extends CursorStatementContext {
    constructor(ctx: CursorStatementContext);
    CLOSE(): antlr.TerminalNode;
    uid(): UidContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OpenCursorContext extends CursorStatementContext {
    constructor(ctx: CursorStatementContext);
    OPEN(): antlr.TerminalNode;
    uid(): UidContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FetchCursorContext extends CursorStatementContext {
    constructor(ctx: CursorStatementContext);
    FETCH(): antlr.TerminalNode;
    uid(): UidContext;
    INTO(): antlr.TerminalNode;
    uidList(): UidListContext;
    FROM(): antlr.TerminalNode | null;
    NEXT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeclareVariableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DECLARE(): antlr.TerminalNode;
    uidList(): UidListContext;
    dataType(): DataTypeContext;
    DEFAULT(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeclareConditionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DECLARE(): antlr.TerminalNode;
    uid(): UidContext;
    CONDITION(): antlr.TerminalNode;
    FOR(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext | null;
    SQLSTATE(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    VALUE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeclareCursorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DECLARE(): antlr.TerminalNode;
    uid(): UidContext;
    CURSOR(): antlr.TerminalNode;
    FOR(): antlr.TerminalNode;
    selectStatement(): SelectStatementContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeclareHandlerContext extends antlr.ParserRuleContext {
    _handlerAction?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DECLARE(): antlr.TerminalNode;
    HANDLER(): antlr.TerminalNode;
    FOR(): antlr.TerminalNode;
    handlerConditionValue(): HandlerConditionValueContext[];
    handlerConditionValue(i: number): HandlerConditionValueContext | null;
    routineBody(): RoutineBodyContext;
    CONTINUE(): antlr.TerminalNode | null;
    EXIT(): antlr.TerminalNode | null;
    UNDO(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionValueContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: HandlerConditionValueContext): void;
}
export declare class HandlerConditionWarningContext extends HandlerConditionValueContext {
    constructor(ctx: HandlerConditionValueContext);
    SQLWARNING(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionCodeContext extends HandlerConditionValueContext {
    constructor(ctx: HandlerConditionValueContext);
    decimalLiteral(): DecimalLiteralContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionNotfoundContext extends HandlerConditionValueContext {
    constructor(ctx: HandlerConditionValueContext);
    NOT(): antlr.TerminalNode;
    FOUND(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionStateContext extends HandlerConditionValueContext {
    constructor(ctx: HandlerConditionValueContext);
    SQLSTATE(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    VALUE(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionExceptionContext extends HandlerConditionValueContext {
    constructor(ctx: HandlerConditionValueContext);
    SQLEXCEPTION(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionNameContext extends HandlerConditionValueContext {
    constructor(ctx: HandlerConditionValueContext);
    uid(): UidContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ProcedureSqlStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SEMI(): antlr.TerminalNode;
    compoundStatement(): CompoundStatementContext | null;
    sqlStatement(): SqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseAlternativeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WHEN(): antlr.TerminalNode;
    THEN(): antlr.TerminalNode;
    constant(): ConstantContext | null;
    expression(): ExpressionContext | null;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ElifAlternativeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ELSEIF(): antlr.TerminalNode;
    expression(): ExpressionContext;
    THEN(): antlr.TerminalNode;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterUserContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AlterUserContext): void;
}
export declare class AlterUserMysqlV80Context extends AlterUserContext {
    _tlsNone?: Token | null;
    constructor(ctx: AlterUserContext);
    ALTER(): antlr.TerminalNode;
    USER(): antlr.TerminalNode;
    userAuthOption(): UserAuthOptionContext[];
    userAuthOption(i: number): UserAuthOptionContext | null;
    ifExists(): IfExistsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    REQUIRE(): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode | null;
    userPasswordOption(): UserPasswordOptionContext[];
    userPasswordOption(i: number): UserPasswordOptionContext | null;
    userLockOption(): UserLockOptionContext[];
    userLockOption(i: number): UserLockOptionContext | null;
    COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    ATTRIBUTE(): antlr.TerminalNode | null;
    tlsOption(): TlsOptionContext[];
    tlsOption(i: number): TlsOptionContext | null;
    NONE(): antlr.TerminalNode | null;
    userResourceOption(): UserResourceOptionContext[];
    userResourceOption(i: number): UserResourceOptionContext | null;
    AND(): antlr.TerminalNode[];
    AND(i: number): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    ROLE(): antlr.TerminalNode | null;
    roleOption(): RoleOptionContext | null;
    userName(): UserNameContext | null;
    uid(): UidContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterUserMysqlV56Context extends AlterUserContext {
    constructor(ctx: AlterUserContext);
    ALTER(): antlr.TerminalNode;
    USER(): antlr.TerminalNode;
    userSpecification(): UserSpecificationContext[];
    userSpecification(i: number): UserSpecificationContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateUserContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CreateUserContext): void;
}
export declare class CreateUserMysqlV56Context extends CreateUserContext {
    constructor(ctx: CreateUserContext);
    CREATE(): antlr.TerminalNode;
    USER(): antlr.TerminalNode;
    userAuthOption(): UserAuthOptionContext[];
    userAuthOption(i: number): UserAuthOptionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateUserMysqlV80Context extends CreateUserContext {
    _tlsNone?: Token | null;
    constructor(ctx: CreateUserContext);
    CREATE(): antlr.TerminalNode;
    USER(): antlr.TerminalNode;
    userAuthOption(): UserAuthOptionContext[];
    userAuthOption(i: number): UserAuthOptionContext | null;
    ifNotExists(): IfNotExistsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    ROLE(): antlr.TerminalNode | null;
    roleOption(): RoleOptionContext | null;
    REQUIRE(): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode | null;
    userPasswordOption(): UserPasswordOptionContext[];
    userPasswordOption(i: number): UserPasswordOptionContext | null;
    userLockOption(): UserLockOptionContext[];
    userLockOption(i: number): UserLockOptionContext | null;
    COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    ATTRIBUTE(): antlr.TerminalNode | null;
    tlsOption(): TlsOptionContext[];
    tlsOption(i: number): TlsOptionContext | null;
    NONE(): antlr.TerminalNode | null;
    userResourceOption(): UserResourceOptionContext[];
    userResourceOption(i: number): UserResourceOptionContext | null;
    AND(): antlr.TerminalNode[];
    AND(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropUserContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DROP(): antlr.TerminalNode;
    USER(): antlr.TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    ifExists(): IfExistsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GrantStatementContext extends antlr.ParserRuleContext {
    _privilegeObject?: Token | null;
    _tlsNone?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    GRANT(): antlr.TerminalNode[];
    GRANT(i: number): antlr.TerminalNode | null;
    privelegeClause(): PrivelegeClauseContext[];
    privelegeClause(i: number): PrivelegeClauseContext | null;
    ON(): antlr.TerminalNode | null;
    privilegeLevel(): PrivilegeLevelContext | null;
    TO(): antlr.TerminalNode;
    userAuthOption(): UserAuthOptionContext[];
    userAuthOption(i: number): UserAuthOptionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    REQUIRE(): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode[];
    WITH(i: number): antlr.TerminalNode | null;
    AS(): antlr.TerminalNode | null;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    ROLE(): antlr.TerminalNode | null;
    roleOption(): RoleOptionContext | null;
    TABLE(): antlr.TerminalNode | null;
    FUNCTION(): antlr.TerminalNode | null;
    PROCEDURE(): antlr.TerminalNode | null;
    tlsOption(): TlsOptionContext[];
    tlsOption(i: number): TlsOptionContext | null;
    NONE(): antlr.TerminalNode | null;
    OPTION(): antlr.TerminalNode[];
    OPTION(i: number): antlr.TerminalNode | null;
    userResourceOption(): UserResourceOptionContext[];
    userResourceOption(i: number): UserResourceOptionContext | null;
    AND(): antlr.TerminalNode[];
    AND(i: number): antlr.TerminalNode | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    ADMIN(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoleOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DEFAULT(): antlr.TerminalNode | null;
    NONE(): antlr.TerminalNode | null;
    ALL(): antlr.TerminalNode | null;
    EXCEPT(): antlr.TerminalNode | null;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GrantProxyContext extends antlr.ParserRuleContext {
    _fromFirst?: UserNameContext;
    _toFirst?: UserNameContext;
    _userName?: UserNameContext;
    _toOther: UserNameContext[];
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    GRANT(): antlr.TerminalNode[];
    GRANT(i: number): antlr.TerminalNode | null;
    PROXY(): antlr.TerminalNode;
    ON(): antlr.TerminalNode;
    TO(): antlr.TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode | null;
    OPTION(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RenameUserContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RENAME(): antlr.TerminalNode;
    USER(): antlr.TerminalNode;
    renameUserClause(): RenameUserClauseContext[];
    renameUserClause(i: number): RenameUserClauseContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RevokeStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: RevokeStatementContext): void;
}
export declare class DetailRevokeContext extends RevokeStatementContext {
    _privilegeObject?: Token | null;
    constructor(ctx: RevokeStatementContext);
    REVOKE(): antlr.TerminalNode;
    privelegeClause(): PrivelegeClauseContext[];
    privelegeClause(i: number): PrivelegeClauseContext | null;
    ON(): antlr.TerminalNode;
    privilegeLevel(): PrivilegeLevelContext;
    FROM(): antlr.TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    TABLE(): antlr.TerminalNode | null;
    FUNCTION(): antlr.TerminalNode | null;
    PROCEDURE(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoleRevokeContext extends RevokeStatementContext {
    constructor(ctx: RevokeStatementContext);
    REVOKE(): antlr.TerminalNode;
    FROM(): antlr.TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShortRevokeContext extends RevokeStatementContext {
    constructor(ctx: RevokeStatementContext);
    REVOKE(): antlr.TerminalNode;
    ALL(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    GRANT(): antlr.TerminalNode;
    OPTION(): antlr.TerminalNode;
    FROM(): antlr.TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    PRIVILEGES(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RevokeProxyContext extends antlr.ParserRuleContext {
    _onUser?: UserNameContext;
    _fromFirst?: UserNameContext;
    _userName?: UserNameContext;
    _fromOther: UserNameContext[];
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    REVOKE(): antlr.TerminalNode;
    PROXY(): antlr.TerminalNode;
    ON(): antlr.TerminalNode;
    FROM(): antlr.TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetPasswordStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SET(): antlr.TerminalNode;
    PASSWORD(): antlr.TerminalNode;
    EQUAL_SYMBOL(): antlr.TerminalNode;
    passwordFunctionClause(): PasswordFunctionClauseContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    FOR(): antlr.TerminalNode | null;
    userName(): UserNameContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserSpecificationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    userName(): UserNameContext;
    userPasswordOption(): UserPasswordOptionContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserAuthOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: UserAuthOptionContext): void;
}
export declare class SimpleAuthOptionContext extends UserAuthOptionContext {
    constructor(ctx: UserAuthOptionContext);
    userName(): UserNameContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ModuleAuthOptionContext extends UserAuthOptionContext {
    constructor(ctx: UserAuthOptionContext);
    userName(): UserNameContext;
    IDENTIFIED(): antlr.TerminalNode;
    WITH(): antlr.TerminalNode;
    authenticationRule(): AuthenticationRuleContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RandomAuthOptionContext extends UserAuthOptionContext {
    constructor(ctx: UserAuthOptionContext);
    userName(): UserNameContext;
    IDENTIFIED(): antlr.TerminalNode;
    BY(): antlr.TerminalNode;
    RANDOM(): antlr.TerminalNode;
    PASSWORD(): antlr.TerminalNode;
    authOptionClause(): AuthOptionClauseContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringAuthOptionContext extends UserAuthOptionContext {
    constructor(ctx: UserAuthOptionContext);
    userName(): UserNameContext;
    IDENTIFIED(): antlr.TerminalNode;
    BY(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    authOptionClause(): AuthOptionClauseContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HashAuthOptionContext extends UserAuthOptionContext {
    _hashed?: Token | null;
    constructor(ctx: UserAuthOptionContext);
    userName(): UserNameContext;
    IDENTIFIED(): antlr.TerminalNode;
    BY(): antlr.TerminalNode;
    PASSWORD(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AuthOptionClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    REPLACE(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    RETAIN(): antlr.TerminalNode | null;
    CURRENT(): antlr.TerminalNode | null;
    PASSWORD(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AuthenticationRuleContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AuthenticationRuleContext): void;
}
export declare class PasswordModuleOptionContext extends AuthenticationRuleContext {
    constructor(ctx: AuthenticationRuleContext);
    authPlugin(): AuthPluginContext;
    USING(): antlr.TerminalNode;
    passwordFunctionClause(): PasswordFunctionClauseContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ModuleContext extends AuthenticationRuleContext {
    constructor(ctx: AuthenticationRuleContext);
    authPlugin(): AuthPluginContext;
    authOptionClause(): AuthOptionClauseContext | null;
    BY(): antlr.TerminalNode | null;
    USING(): antlr.TerminalNode | null;
    AS(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    RANDOM(): antlr.TerminalNode | null;
    PASSWORD(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TlsOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SSL(): antlr.TerminalNode | null;
    X509(): antlr.TerminalNode | null;
    CIPHER(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    ISSUER(): antlr.TerminalNode | null;
    SUBJECT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserResourceOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    MAX_QUERIES_PER_HOUR(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext;
    MAX_UPDATES_PER_HOUR(): antlr.TerminalNode | null;
    MAX_CONNECTIONS_PER_HOUR(): antlr.TerminalNode | null;
    MAX_USER_CONNECTIONS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserPasswordOptionContext extends antlr.ParserRuleContext {
    _expireType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    PASSWORD(): antlr.TerminalNode | null;
    EXPIRE(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    DAY(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    NEVER(): antlr.TerminalNode | null;
    INTERVAL(): antlr.TerminalNode | null;
    HISTORY(): antlr.TerminalNode | null;
    REUSE(): antlr.TerminalNode | null;
    REQUIRE(): antlr.TerminalNode | null;
    CURRENT(): antlr.TerminalNode | null;
    OPTIONAL(): antlr.TerminalNode | null;
    FAILED_LOGIN_ATTEMPTS(): antlr.TerminalNode | null;
    PASSWORD_LOCK_TIME(): antlr.TerminalNode | null;
    UNBOUNDED(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserLockOptionContext extends antlr.ParserRuleContext {
    _lockType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ACCOUNT(): antlr.TerminalNode;
    LOCK(): antlr.TerminalNode | null;
    UNLOCK(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivelegeClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    privilege(): PrivilegeContext;
    LR_BRACKET(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALL(): antlr.TerminalNode | null;
    PRIVILEGES(): antlr.TerminalNode | null;
    ALTER(): antlr.TerminalNode | null;
    ROUTINE(): antlr.TerminalNode | null;
    CREATE(): antlr.TerminalNode | null;
    TEMPORARY(): antlr.TerminalNode | null;
    TABLES(): antlr.TerminalNode | null;
    VIEW(): antlr.TerminalNode | null;
    USER(): antlr.TerminalNode | null;
    TABLESPACE(): antlr.TerminalNode | null;
    ROLE(): antlr.TerminalNode | null;
    DELETE(): antlr.TerminalNode | null;
    DROP(): antlr.TerminalNode | null;
    EVENT(): antlr.TerminalNode | null;
    EXECUTE(): antlr.TerminalNode | null;
    FILE(): antlr.TerminalNode | null;
    GRANT(): antlr.TerminalNode | null;
    OPTION(): antlr.TerminalNode | null;
    INDEX(): antlr.TerminalNode | null;
    INSERT(): antlr.TerminalNode | null;
    LOCK(): antlr.TerminalNode | null;
    PROCESS(): antlr.TerminalNode | null;
    PROXY(): antlr.TerminalNode | null;
    REFERENCES(): antlr.TerminalNode | null;
    RELOAD(): antlr.TerminalNode | null;
    REPLICATION(): antlr.TerminalNode | null;
    CLIENT(): antlr.TerminalNode | null;
    SLAVE(): antlr.TerminalNode | null;
    SELECT(): antlr.TerminalNode | null;
    SHOW(): antlr.TerminalNode | null;
    DATABASES(): antlr.TerminalNode | null;
    SHUTDOWN(): antlr.TerminalNode | null;
    SUPER(): antlr.TerminalNode | null;
    TRIGGER(): antlr.TerminalNode | null;
    UPDATE(): antlr.TerminalNode | null;
    USAGE(): antlr.TerminalNode | null;
    APPLICATION_PASSWORD_ADMIN(): antlr.TerminalNode | null;
    AUDIT_ABORT_EXEMPT(): antlr.TerminalNode | null;
    AUDIT_ADMIN(): antlr.TerminalNode | null;
    AUTHENTICATION_POLICY_ADMIN(): antlr.TerminalNode | null;
    BACKUP_ADMIN(): antlr.TerminalNode | null;
    BINLOG_ADMIN(): antlr.TerminalNode | null;
    BINLOG_ENCRYPTION_ADMIN(): antlr.TerminalNode | null;
    CLONE_ADMIN(): antlr.TerminalNode | null;
    CONNECTION_ADMIN(): antlr.TerminalNode | null;
    ENCRYPTION_KEY_ADMIN(): antlr.TerminalNode | null;
    FIREWALL_ADMIN(): antlr.TerminalNode | null;
    FIREWALL_EXEMPT(): antlr.TerminalNode | null;
    FIREWALL_USER(): antlr.TerminalNode | null;
    FLUSH_OPTIMIZER_COSTS(): antlr.TerminalNode | null;
    FLUSH_STATUS(): antlr.TerminalNode | null;
    FLUSH_TABLES(): antlr.TerminalNode | null;
    FLUSH_USER_RESOURCES(): antlr.TerminalNode | null;
    GROUP_REPLICATION_ADMIN(): antlr.TerminalNode | null;
    INNODB_REDO_LOG_ARCHIVE(): antlr.TerminalNode | null;
    INNODB_REDO_LOG_ENABLE(): antlr.TerminalNode | null;
    NDB_STORED_USER(): antlr.TerminalNode | null;
    PASSWORDLESS_USER_ADMIN(): antlr.TerminalNode | null;
    PERSIST_RO_VARIABLES_ADMIN(): antlr.TerminalNode | null;
    REPLICATION_APPLIER(): antlr.TerminalNode | null;
    REPLICATION_SLAVE_ADMIN(): antlr.TerminalNode | null;
    RESOURCE_GROUP_ADMIN(): antlr.TerminalNode | null;
    RESOURCE_GROUP_USER(): antlr.TerminalNode | null;
    ROLE_ADMIN(): antlr.TerminalNode | null;
    SERVICE_CONNECTION_ADMIN(): antlr.TerminalNode | null;
    SESSION_VARIABLES_ADMIN(): antlr.TerminalNode | null;
    SET_USER_ID(): antlr.TerminalNode | null;
    SKIP_QUERY_REWRITE(): antlr.TerminalNode | null;
    SHOW_ROUTINE(): antlr.TerminalNode | null;
    SYSTEM_USER(): antlr.TerminalNode | null;
    SYSTEM_VARIABLES_ADMIN(): antlr.TerminalNode | null;
    TABLE_ENCRYPTION_ADMIN(): antlr.TerminalNode | null;
    TP_CONNECTION_ADMIN(): antlr.TerminalNode | null;
    VERSION_TOKEN_ADMIN(): antlr.TerminalNode | null;
    XA_RECOVER_ADMIN(): antlr.TerminalNode | null;
    LOAD(): antlr.TerminalNode | null;
    FROM(): antlr.TerminalNode | null;
    S3(): antlr.TerminalNode | null;
    INTO(): antlr.TerminalNode | null;
    INVOKE(): antlr.TerminalNode | null;
    LAMBDA(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeLevelContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PrivilegeLevelContext): void;
}
export declare class DefiniteSchemaPrivLevelContext extends PrivilegeLevelContext {
    constructor(ctx: PrivilegeLevelContext);
    uid(): UidContext;
    DOT(): antlr.TerminalNode;
    STAR(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefiniteFullTablePrivLevel2Context extends PrivilegeLevelContext {
    constructor(ctx: PrivilegeLevelContext);
    uid(): UidContext;
    dottedId(): DottedIdContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefiniteFullTablePrivLevelContext extends PrivilegeLevelContext {
    constructor(ctx: PrivilegeLevelContext);
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    DOT(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GlobalPrivLevelContext extends PrivilegeLevelContext {
    constructor(ctx: PrivilegeLevelContext);
    STAR(): antlr.TerminalNode[];
    STAR(i: number): antlr.TerminalNode | null;
    DOT(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefiniteTablePrivLevelContext extends PrivilegeLevelContext {
    constructor(ctx: PrivilegeLevelContext);
    uid(): UidContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CurrentSchemaPriviLevelContext extends PrivilegeLevelContext {
    constructor(ctx: PrivilegeLevelContext);
    STAR(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RenameUserClauseContext extends antlr.ParserRuleContext {
    _fromFirst?: UserNameContext;
    _toFirst?: UserNameContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    TO(): antlr.TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AnalyzeTableContext extends antlr.ParserRuleContext {
    _actionOption?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ANALYZE(): antlr.TerminalNode;
    tables(): TablesContext;
    TABLE(): antlr.TerminalNode | null;
    TABLES(): antlr.TerminalNode | null;
    UPDATE(): antlr.TerminalNode | null;
    HISTOGRAM(): antlr.TerminalNode[];
    HISTOGRAM(i: number): antlr.TerminalNode | null;
    ON(): antlr.TerminalNode[];
    ON(i: number): antlr.TerminalNode | null;
    fullColumnName(): FullColumnNameContext[];
    fullColumnName(i: number): FullColumnNameContext | null;
    DROP(): antlr.TerminalNode | null;
    NO_WRITE_TO_BINLOG(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    BUCKETS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CheckTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CHECK(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tables(): TablesContext;
    checkTableOption(): CheckTableOptionContext[];
    checkTableOption(i: number): CheckTableOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChecksumTableContext extends antlr.ParserRuleContext {
    _actionOption?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CHECKSUM(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tables(): TablesContext;
    QUICK(): antlr.TerminalNode | null;
    EXTENDED(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OptimizeTableContext extends antlr.ParserRuleContext {
    _actionOption?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    OPTIMIZE(): antlr.TerminalNode;
    tables(): TablesContext;
    TABLE(): antlr.TerminalNode | null;
    TABLES(): antlr.TerminalNode | null;
    NO_WRITE_TO_BINLOG(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RepairTableContext extends antlr.ParserRuleContext {
    _actionOption?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    REPAIR(): antlr.TerminalNode;
    TABLE(): antlr.TerminalNode;
    tables(): TablesContext;
    QUICK(): antlr.TerminalNode | null;
    EXTENDED(): antlr.TerminalNode | null;
    USE_FRM(): antlr.TerminalNode | null;
    NO_WRITE_TO_BINLOG(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CheckTableOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    FOR(): antlr.TerminalNode | null;
    UPGRADE(): antlr.TerminalNode | null;
    QUICK(): antlr.TerminalNode | null;
    FAST(): antlr.TerminalNode | null;
    MEDIUM(): antlr.TerminalNode | null;
    EXTENDED(): antlr.TerminalNode | null;
    CHANGED(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateUdfunctionContext extends antlr.ParserRuleContext {
    _returnType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CREATE(): antlr.TerminalNode;
    FUNCTION(): antlr.TerminalNode;
    uid(): UidContext;
    RETURNS(): antlr.TerminalNode;
    SONAME(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    STRING(): antlr.TerminalNode | null;
    INTEGER(): antlr.TerminalNode | null;
    REAL(): antlr.TerminalNode | null;
    DECIMAL(): antlr.TerminalNode | null;
    AGGREGATE(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InstallPluginContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    INSTALL(): antlr.TerminalNode;
    PLUGIN(): antlr.TerminalNode;
    uid(): UidContext;
    SONAME(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UninstallPluginContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    UNINSTALL(): antlr.TerminalNode;
    PLUGIN(): antlr.TerminalNode;
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SetStatementContext): void;
}
export declare class SetTransactionContext extends SetStatementContext {
    constructor(ctx: SetStatementContext);
    setTransactionStatement(): SetTransactionStatementContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetCharsetContext extends SetStatementContext {
    constructor(ctx: SetStatementContext);
    SET(): antlr.TerminalNode;
    charSet(): CharSetContext;
    charsetName(): CharsetNameContext | null;
    DEFAULT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetNamesContext extends SetStatementContext {
    constructor(ctx: SetStatementContext);
    SET(): antlr.TerminalNode;
    NAMES(): antlr.TerminalNode;
    charsetName(): CharsetNameContext | null;
    DEFAULT(): antlr.TerminalNode | null;
    COLLATE(): antlr.TerminalNode | null;
    collationName(): CollationNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetPasswordContext extends SetStatementContext {
    constructor(ctx: SetStatementContext);
    setPasswordStatement(): SetPasswordStatementContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetAutocommitContext extends SetStatementContext {
    constructor(ctx: SetStatementContext);
    setAutocommitStatement(): SetAutocommitStatementContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetNewValueInsideTriggerContext extends SetStatementContext {
    constructor(ctx: SetStatementContext);
    SET(): antlr.TerminalNode;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    VAR_ASSIGN(): antlr.TerminalNode[];
    VAR_ASSIGN(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetVariableContext extends SetStatementContext {
    constructor(ctx: SetStatementContext);
    SET(): antlr.TerminalNode;
    variableClause(): VariableClauseContext[];
    variableClause(i: number): VariableClauseContext | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    VAR_ASSIGN(): antlr.TerminalNode[];
    VAR_ASSIGN(i: number): antlr.TerminalNode | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    ON(): antlr.TerminalNode[];
    ON(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ShowStatementContext): void;
}
export declare class ShowOpenTablesContext extends ShowStatementContext {
    _schemaFormat?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    OPEN(): antlr.TerminalNode;
    TABLES(): antlr.TerminalNode;
    uid(): UidContext | null;
    showFilter(): ShowFilterContext | null;
    FROM(): antlr.TerminalNode | null;
    IN(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowGlobalInfoContext extends ShowStatementContext {
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    showGlobalInfoClause(): ShowGlobalInfoClauseContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateFullIdObjectContext extends ShowStatementContext {
    _namedEntity?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    CREATE(): antlr.TerminalNode;
    fullId(): FullIdContext;
    EVENT(): antlr.TerminalNode | null;
    FUNCTION(): antlr.TerminalNode | null;
    PROCEDURE(): antlr.TerminalNode | null;
    TABLE(): antlr.TerminalNode | null;
    TRIGGER(): antlr.TerminalNode | null;
    VIEW(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateUserContext extends ShowStatementContext {
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    CREATE(): antlr.TerminalNode;
    USER(): antlr.TerminalNode;
    userName(): UserNameContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowErrorsContext extends ShowStatementContext {
    _errorFormat?: Token | null;
    _offset?: DecimalLiteralContext;
    _rowCount?: DecimalLiteralContext;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    ERRORS(): antlr.TerminalNode | null;
    WARNINGS(): antlr.TerminalNode | null;
    LIMIT(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    COMMA(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCountErrorsContext extends ShowStatementContext {
    _errorFormat?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    COUNT(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    STAR(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    ERRORS(): antlr.TerminalNode | null;
    WARNINGS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowObjectFilterContext extends ShowStatementContext {
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    showCommonEntity(): ShowCommonEntityContext;
    showFilter(): ShowFilterContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateDbContext extends ShowStatementContext {
    _schemaFormat?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    CREATE(): antlr.TerminalNode;
    uid(): UidContext;
    DATABASE(): antlr.TerminalNode | null;
    SCHEMA(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowEngineContext extends ShowStatementContext {
    _engineOption?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    ENGINE(): antlr.TerminalNode;
    engineName(): EngineNameContext;
    STATUS(): antlr.TerminalNode | null;
    MUTEX(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowSchemaFilterContext extends ShowStatementContext {
    _schemaFormat?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    showSchemaEntity(): ShowSchemaEntityContext;
    uid(): UidContext | null;
    showFilter(): ShowFilterContext | null;
    FROM(): antlr.TerminalNode | null;
    IN(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowIndexesContext extends ShowStatementContext {
    _indexFormat?: Token | null;
    _tableFormat?: Token | null;
    _schemaFormat?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    tableName(): TableNameContext;
    INDEX(): antlr.TerminalNode | null;
    INDEXES(): antlr.TerminalNode | null;
    KEYS(): antlr.TerminalNode | null;
    FROM(): antlr.TerminalNode[];
    FROM(i: number): antlr.TerminalNode | null;
    IN(): antlr.TerminalNode[];
    IN(i: number): antlr.TerminalNode | null;
    uid(): UidContext | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowLogEventsContext extends ShowStatementContext {
    _logFormat?: Token | null;
    _filename?: Token | null;
    _fromPosition?: DecimalLiteralContext;
    _offset?: DecimalLiteralContext;
    _rowCount?: DecimalLiteralContext;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    EVENTS(): antlr.TerminalNode;
    BINLOG(): antlr.TerminalNode | null;
    RELAYLOG(): antlr.TerminalNode | null;
    IN(): antlr.TerminalNode | null;
    FROM(): antlr.TerminalNode | null;
    LIMIT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    COMMA(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowMasterLogsContext extends ShowStatementContext {
    _logFormat?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    LOGS(): antlr.TerminalNode;
    BINARY(): antlr.TerminalNode | null;
    MASTER(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowGrantsContext extends ShowStatementContext {
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    GRANTS(): antlr.TerminalNode;
    FOR(): antlr.TerminalNode | null;
    userName(): UserNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowSlaveStatusContext extends ShowStatementContext {
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    SLAVE(): antlr.TerminalNode;
    STATUS(): antlr.TerminalNode;
    FOR(): antlr.TerminalNode | null;
    CHANNEL(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowRoutineContext extends ShowStatementContext {
    _routine?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    CODE(): antlr.TerminalNode;
    fullId(): FullIdContext;
    FUNCTION(): antlr.TerminalNode | null;
    PROCEDURE(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowProfileContext extends ShowStatementContext {
    _queryCount?: DecimalLiteralContext;
    _offset?: DecimalLiteralContext;
    _rowCount?: DecimalLiteralContext;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    PROFILE(): antlr.TerminalNode;
    showProfileType(): ShowProfileTypeContext[];
    showProfileType(i: number): ShowProfileTypeContext | null;
    LIMIT(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    FOR(): antlr.TerminalNode | null;
    QUERY(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowColumnsContext extends ShowStatementContext {
    _columnsFormat?: Token | null;
    _tableFormat?: Token | null;
    _schemaFormat?: Token | null;
    constructor(ctx: ShowStatementContext);
    SHOW(): antlr.TerminalNode;
    tableName(): TableNameContext;
    COLUMNS(): antlr.TerminalNode | null;
    FIELDS(): antlr.TerminalNode | null;
    FROM(): antlr.TerminalNode[];
    FROM(i: number): antlr.TerminalNode | null;
    IN(): antlr.TerminalNode[];
    IN(i: number): antlr.TerminalNode | null;
    FULL(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    showFilter(): ShowFilterContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class VariableClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOCAL_ID(): antlr.TerminalNode | null;
    GLOBAL_ID(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    GLOBAL(): antlr.TerminalNode | null;
    SESSION(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    AT_SIGN(): antlr.TerminalNode[];
    AT_SIGN(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCommonEntityContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CHARACTER(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode | null;
    COLLATION(): antlr.TerminalNode | null;
    DATABASES(): antlr.TerminalNode | null;
    SCHEMAS(): antlr.TerminalNode | null;
    FUNCTION(): antlr.TerminalNode | null;
    STATUS(): antlr.TerminalNode | null;
    PROCEDURE(): antlr.TerminalNode | null;
    VARIABLES(): antlr.TerminalNode | null;
    GLOBAL(): antlr.TerminalNode | null;
    SESSION(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowFilterContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LIKE(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    WHERE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowGlobalInfoClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ENGINES(): antlr.TerminalNode | null;
    STORAGE(): antlr.TerminalNode | null;
    MASTER(): antlr.TerminalNode | null;
    STATUS(): antlr.TerminalNode | null;
    PLUGINS(): antlr.TerminalNode | null;
    PRIVILEGES(): antlr.TerminalNode | null;
    PROCESSLIST(): antlr.TerminalNode | null;
    FULL(): antlr.TerminalNode | null;
    PROFILES(): antlr.TerminalNode | null;
    SLAVE(): antlr.TerminalNode | null;
    HOSTS(): antlr.TerminalNode | null;
    AUTHORS(): antlr.TerminalNode | null;
    CONTRIBUTORS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowSchemaEntityContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EVENTS(): antlr.TerminalNode | null;
    TABLE(): antlr.TerminalNode | null;
    STATUS(): antlr.TerminalNode | null;
    TABLES(): antlr.TerminalNode | null;
    FULL(): antlr.TerminalNode | null;
    TRIGGERS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowProfileTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ALL(): antlr.TerminalNode | null;
    BLOCK(): antlr.TerminalNode | null;
    IO(): antlr.TerminalNode | null;
    CONTEXT(): antlr.TerminalNode | null;
    SWITCHES(): antlr.TerminalNode | null;
    CPU(): antlr.TerminalNode | null;
    IPC(): antlr.TerminalNode | null;
    MEMORY(): antlr.TerminalNode | null;
    PAGE(): antlr.TerminalNode | null;
    FAULTS(): antlr.TerminalNode | null;
    SOURCE(): antlr.TerminalNode | null;
    SWAPS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BinlogStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    BINLOG(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CacheIndexStatementContext extends antlr.ParserRuleContext {
    _schema?: UidContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CACHE(): antlr.TerminalNode;
    INDEX(): antlr.TerminalNode;
    tableIndexes(): TableIndexesContext[];
    tableIndexes(i: number): TableIndexesContext | null;
    IN(): antlr.TerminalNode;
    uid(): UidContext;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    PARTITION(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FlushStatementContext extends antlr.ParserRuleContext {
    _flushFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    FLUSH(): antlr.TerminalNode;
    flushOption(): FlushOptionContext[];
    flushOption(i: number): FlushOptionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    NO_WRITE_TO_BINLOG(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class KillStatementContext extends antlr.ParserRuleContext {
    _connectionFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KILL(): antlr.TerminalNode;
    expression(): ExpressionContext;
    CONNECTION(): antlr.TerminalNode | null;
    QUERY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoadIndexIntoCacheContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOAD(): antlr.TerminalNode;
    INDEX(): antlr.TerminalNode;
    INTO(): antlr.TerminalNode;
    CACHE(): antlr.TerminalNode;
    loadedTableIndexes(): LoadedTableIndexesContext[];
    loadedTableIndexes(i: number): LoadedTableIndexesContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResetStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RESET(): antlr.TerminalNode;
    QUERY(): antlr.TerminalNode;
    CACHE(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShutdownStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SHUTDOWN(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableIndexesContext extends antlr.ParserRuleContext {
    _indexFormat?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableName(): TableNameContext;
    LR_BRACKET(): antlr.TerminalNode | null;
    uidList(): UidListContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FlushOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FlushOptionContext): void;
}
export declare class TableFlushOptionContext extends FlushOptionContext {
    constructor(ctx: FlushOptionContext);
    TABLE(): antlr.TerminalNode | null;
    TABLES(): antlr.TerminalNode | null;
    tables(): TablesContext | null;
    flushTableOption(): FlushTableOptionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChannelFlushOptionContext extends FlushOptionContext {
    constructor(ctx: FlushOptionContext);
    RELAY(): antlr.TerminalNode;
    LOGS(): antlr.TerminalNode;
    channelOption(): ChannelOptionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleFlushOptionContext extends FlushOptionContext {
    constructor(ctx: FlushOptionContext);
    DES_KEY_FILE(): antlr.TerminalNode | null;
    HOSTS(): antlr.TerminalNode | null;
    LOGS(): antlr.TerminalNode | null;
    OPTIMIZER_COSTS(): antlr.TerminalNode | null;
    PRIVILEGES(): antlr.TerminalNode | null;
    QUERY(): antlr.TerminalNode | null;
    CACHE(): antlr.TerminalNode | null;
    STATUS(): antlr.TerminalNode | null;
    USER_RESOURCES(): antlr.TerminalNode | null;
    TABLES(): antlr.TerminalNode | null;
    WITH(): antlr.TerminalNode | null;
    READ(): antlr.TerminalNode | null;
    LOCK(): antlr.TerminalNode | null;
    BINARY(): antlr.TerminalNode | null;
    ENGINE(): antlr.TerminalNode | null;
    ERROR(): antlr.TerminalNode | null;
    GENERAL(): antlr.TerminalNode | null;
    RELAY(): antlr.TerminalNode | null;
    SLOW(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FlushTableOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WITH(): antlr.TerminalNode | null;
    READ(): antlr.TerminalNode | null;
    LOCK(): antlr.TerminalNode | null;
    FOR(): antlr.TerminalNode | null;
    EXPORT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoadedTableIndexesContext extends antlr.ParserRuleContext {
    _partitionList?: UidListContext;
    _indexFormat?: Token | null;
    _indexList?: UidListContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableName(): TableNameContext;
    PARTITION(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    IGNORE(): antlr.TerminalNode | null;
    LEAVES(): antlr.TerminalNode | null;
    uidList(): UidListContext[];
    uidList(i: number): UidListContext | null;
    ALL(): antlr.TerminalNode | null;
    INDEX(): antlr.TerminalNode | null;
    KEY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleDescribeStatementContext extends antlr.ParserRuleContext {
    _command?: Token | null;
    _column?: UidContext;
    _pattern?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableName(): TableNameContext;
    EXPLAIN(): antlr.TerminalNode | null;
    DESCRIBE(): antlr.TerminalNode | null;
    DESC(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FullDescribeStatementContext extends antlr.ParserRuleContext {
    _command?: Token | null;
    _formatType?: Token | null;
    _formatValue?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    describeObjectClause(): DescribeObjectClauseContext;
    EXPLAIN(): antlr.TerminalNode | null;
    DESCRIBE(): antlr.TerminalNode | null;
    DESC(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    EXTENDED(): antlr.TerminalNode | null;
    PARTITIONS(): antlr.TerminalNode | null;
    FORMAT(): antlr.TerminalNode | null;
    TRADITIONAL(): antlr.TerminalNode | null;
    JSON(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HelpStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    HELP(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UseStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    USE(): antlr.TerminalNode;
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SignalStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SIGNAL(): antlr.TerminalNode;
    ID(): antlr.TerminalNode | null;
    REVERSE_QUOTE_ID(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode | null;
    signalConditionInformation(): SignalConditionInformationContext[];
    signalConditionInformation(i: number): SignalConditionInformationContext | null;
    SQLSTATE(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    VALUE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResignalStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    RESIGNAL(): antlr.TerminalNode;
    ID(): antlr.TerminalNode | null;
    REVERSE_QUOTE_ID(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode | null;
    signalConditionInformation(): SignalConditionInformationContext[];
    signalConditionInformation(i: number): SignalConditionInformationContext | null;
    SQLSTATE(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    VALUE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SignalConditionInformationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EQUAL_SYMBOL(): antlr.TerminalNode;
    CLASS_ORIGIN(): antlr.TerminalNode | null;
    SUBCLASS_ORIGIN(): antlr.TerminalNode | null;
    MESSAGE_TEXT(): antlr.TerminalNode | null;
    MYSQL_ERRNO(): antlr.TerminalNode | null;
    CONSTRAINT_CATALOG(): antlr.TerminalNode | null;
    CONSTRAINT_SCHEMA(): antlr.TerminalNode | null;
    CONSTRAINT_NAME(): antlr.TerminalNode | null;
    CATALOG_NAME(): antlr.TerminalNode | null;
    SCHEMA_NAME(): antlr.TerminalNode | null;
    TABLE_NAME(): antlr.TerminalNode | null;
    COLUMN_NAME(): antlr.TerminalNode | null;
    CURSOR_NAME(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    DECIMAL_LITERAL(): antlr.TerminalNode | null;
    mysqlVariable(): MysqlVariableContext | null;
    simpleId(): SimpleIdContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WithStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WITH(): antlr.TerminalNode;
    commonTableExpressions(): CommonTableExpressionsContext[];
    commonTableExpressions(i: number): CommonTableExpressionsContext | null;
    RECURSIVE(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    orderByClause(): OrderByClauseContext | null;
    limitClause(): LimitClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DiagnosticsStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    GET(): antlr.TerminalNode;
    DIAGNOSTICS(): antlr.TerminalNode;
    CURRENT(): antlr.TerminalNode | null;
    STACKED(): antlr.TerminalNode | null;
    variableClause(): VariableClauseContext[];
    variableClause(i: number): VariableClauseContext | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    CONDITION(): antlr.TerminalNode | null;
    diagnosticsConditionInformationName(): DiagnosticsConditionInformationNameContext[];
    diagnosticsConditionInformationName(i: number): DiagnosticsConditionInformationNameContext | null;
    NUMBER(): antlr.TerminalNode[];
    NUMBER(i: number): antlr.TerminalNode | null;
    ROW_COUNT(): antlr.TerminalNode[];
    ROW_COUNT(i: number): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DiagnosticsConditionInformationNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CLASS_ORIGIN(): antlr.TerminalNode | null;
    SUBCLASS_ORIGIN(): antlr.TerminalNode | null;
    RETURNED_SQLSTATE(): antlr.TerminalNode | null;
    MESSAGE_TEXT(): antlr.TerminalNode | null;
    MYSQL_ERRNO(): antlr.TerminalNode | null;
    CONSTRAINT_CATALOG(): antlr.TerminalNode | null;
    CONSTRAINT_SCHEMA(): antlr.TerminalNode | null;
    CONSTRAINT_NAME(): antlr.TerminalNode | null;
    CATALOG_NAME(): antlr.TerminalNode | null;
    SCHEMA_NAME(): antlr.TerminalNode | null;
    TABLE_NAME(): antlr.TerminalNode | null;
    COLUMN_NAME(): antlr.TerminalNode | null;
    CURSOR_NAME(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DescribeObjectClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DescribeObjectClauseContext): void;
}
export declare class DescribeStatementsContext extends DescribeObjectClauseContext {
    constructor(ctx: DescribeObjectClauseContext);
    selectStatement(): SelectStatementContext | null;
    deleteStatement(): DeleteStatementContext | null;
    insertStatement(): InsertStatementContext | null;
    replaceStatement(): ReplaceStatementContext | null;
    updateStatement(): UpdateStatementContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DescribeConnectionContext extends DescribeObjectClauseContext {
    constructor(ctx: DescribeObjectClauseContext);
    FOR(): antlr.TerminalNode;
    CONNECTION(): antlr.TerminalNode;
    uid(): UidContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FullIdContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    DOT_ID(): antlr.TerminalNode | null;
    DOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    fullId(): FullIdContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoleNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    userName(): UserNameContext | null;
    uid(): UidContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FullColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext | null;
    dottedId(): DottedIdContext[];
    dottedId(i: number): DottedIdContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexColumnNameContext extends antlr.ParserRuleContext {
    _sortType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expression(): ExpressionContext | null;
    uid(): UidContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    ASC(): antlr.TerminalNode | null;
    DESC(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleUserNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode | null;
    ID(): antlr.TerminalNode | null;
    ADMIN(): antlr.TerminalNode | null;
    keywordsCanBeId(): KeywordsCanBeIdContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HostNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOCAL_ID(): antlr.TerminalNode | null;
    HOST_IP_ADDRESS(): antlr.TerminalNode | null;
    AT_SIGN(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    simpleUserName(): SimpleUserNameContext | null;
    hostName(): HostNameContext | null;
    currentUserExpression(): CurrentUserExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MysqlVariableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOCAL_ID(): antlr.TerminalNode | null;
    GLOBAL_ID(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CharsetNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    BINARY(): antlr.TerminalNode | null;
    charsetNameBase(): CharsetNameBaseContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    CHARSET_REVERSE_QOUTE_STRING(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollationNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class EngineNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    engineNameBase(): EngineNameBaseContext | null;
    ID(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class EngineNameBaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ARCHIVE(): antlr.TerminalNode | null;
    BLACKHOLE(): antlr.TerminalNode | null;
    CONNECT(): antlr.TerminalNode | null;
    CSV(): antlr.TerminalNode | null;
    FEDERATED(): antlr.TerminalNode | null;
    INNODB(): antlr.TerminalNode | null;
    MEMORY(): antlr.TerminalNode | null;
    MRG_MYISAM(): antlr.TerminalNode | null;
    MYISAM(): antlr.TerminalNode | null;
    NDB(): antlr.TerminalNode | null;
    NDBCLUSTER(): antlr.TerminalNode | null;
    PERFORMANCE_SCHEMA(): antlr.TerminalNode | null;
    TOKUDB(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UuidSetContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    MINUS(): antlr.TerminalNode[];
    MINUS(i: number): antlr.TerminalNode | null;
    COLON_SYMB(): antlr.TerminalNode[];
    COLON_SYMB(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XidContext extends antlr.ParserRuleContext {
    _globalTableUid?: XuidStringIdContext;
    _qualifier?: XuidStringIdContext;
    _idFormat?: DecimalLiteralContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    xuidStringId(): XuidStringIdContext[];
    xuidStringId(i: number): XuidStringIdContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XuidStringIdContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode | null;
    BIT_STRING(): antlr.TerminalNode | null;
    HEXADECIMAL_LITERAL(): antlr.TerminalNode[];
    HEXADECIMAL_LITERAL(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AuthPluginContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UidContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    simpleId(): SimpleIdContext | null;
    CHARSET_REVERSE_QOUTE_STRING(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleIdContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ID(): antlr.TerminalNode | null;
    charsetNameBase(): CharsetNameBaseContext | null;
    transactionLevelBase(): TransactionLevelBaseContext | null;
    engineNameBase(): EngineNameBaseContext | null;
    privilegesBase(): PrivilegesBaseContext | null;
    intervalTypeBase(): IntervalTypeBaseContext | null;
    dataTypeBase(): DataTypeBaseContext | null;
    keywordsCanBeId(): KeywordsCanBeIdContext | null;
    scalarFunctionName(): ScalarFunctionNameContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DottedIdContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DOT_ID(): antlr.TerminalNode | null;
    DOT(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DecimalLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DECIMAL_LITERAL(): antlr.TerminalNode | null;
    ZERO_DECIMAL(): antlr.TerminalNode | null;
    ONE_DECIMAL(): antlr.TerminalNode | null;
    TWO_DECIMAL(): antlr.TerminalNode | null;
    REAL_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FileSizeLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    FILESIZE_LITERAL(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode[];
    STRING_LITERAL(i: number): antlr.TerminalNode | null;
    START_NATIONAL_STRING_LITERAL(): antlr.TerminalNode | null;
    STRING_CHARSET_NAME(): antlr.TerminalNode | null;
    COLLATE(): antlr.TerminalNode | null;
    collationName(): CollationNameContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BooleanLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    TRUE(): antlr.TerminalNode | null;
    FALSE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HexadecimalLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    HEXADECIMAL_LITERAL(): antlr.TerminalNode;
    STRING_CHARSET_NAME(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NullNotnullContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    NULL_LITERAL(): antlr.TerminalNode | null;
    NULL_SPEC_LITERAL(): antlr.TerminalNode | null;
    NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConstantContext extends antlr.ParserRuleContext {
    _nullLiteral?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    stringLiteral(): StringLiteralContext | null;
    decimalLiteral(): DecimalLiteralContext | null;
    MINUS(): antlr.TerminalNode | null;
    hexadecimalLiteral(): HexadecimalLiteralContext | null;
    booleanLiteral(): BooleanLiteralContext | null;
    REAL_LITERAL(): antlr.TerminalNode | null;
    BIT_STRING(): antlr.TerminalNode | null;
    NULL_LITERAL(): antlr.TerminalNode | null;
    NULL_SPEC_LITERAL(): antlr.TerminalNode | null;
    NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DataTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DataTypeContext): void;
}
export declare class SpatialDataTypeContext extends DataTypeContext {
    _typeName?: Token | null;
    constructor(ctx: DataTypeContext);
    GEOMETRYCOLLECTION(): antlr.TerminalNode | null;
    GEOMCOLLECTION(): antlr.TerminalNode | null;
    LINESTRING(): antlr.TerminalNode | null;
    MULTILINESTRING(): antlr.TerminalNode | null;
    MULTIPOINT(): antlr.TerminalNode | null;
    MULTIPOLYGON(): antlr.TerminalNode | null;
    POINT(): antlr.TerminalNode | null;
    POLYGON(): antlr.TerminalNode | null;
    JSON(): antlr.TerminalNode | null;
    GEOMETRY(): antlr.TerminalNode | null;
    SRID(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LongVarbinaryDataTypeContext extends DataTypeContext {
    constructor(ctx: DataTypeContext);
    LONG(): antlr.TerminalNode;
    VARBINARY(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollectionDataTypeContext extends DataTypeContext {
    _typeName?: Token | null;
    constructor(ctx: DataTypeContext);
    collectionOptions(): CollectionOptionsContext;
    ENUM(): antlr.TerminalNode | null;
    SET(): antlr.TerminalNode | null;
    BINARY(): antlr.TerminalNode | null;
    charSet(): CharSetContext | null;
    charsetName(): CharsetNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NationalVaryingStringDataTypeContext extends DataTypeContext {
    _typeName?: Token | null;
    constructor(ctx: DataTypeContext);
    NATIONAL(): antlr.TerminalNode;
    VARYING(): antlr.TerminalNode;
    CHAR(): antlr.TerminalNode | null;
    CHARACTER(): antlr.TerminalNode | null;
    lengthOneDimension(): LengthOneDimensionContext | null;
    BINARY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DimensionDataTypeContext extends DataTypeContext {
    _typeName?: Token | null;
    constructor(ctx: DataTypeContext);
    TINYINT(): antlr.TerminalNode | null;
    SMALLINT(): antlr.TerminalNode | null;
    MEDIUMINT(): antlr.TerminalNode | null;
    INT(): antlr.TerminalNode | null;
    INTEGER(): antlr.TerminalNode | null;
    BIGINT(): antlr.TerminalNode | null;
    MIDDLEINT(): antlr.TerminalNode | null;
    INT1(): antlr.TerminalNode | null;
    INT2(): antlr.TerminalNode | null;
    INT3(): antlr.TerminalNode | null;
    INT4(): antlr.TerminalNode | null;
    INT8(): antlr.TerminalNode | null;
    lengthOneDimension(): LengthOneDimensionContext | null;
    SIGNED(): antlr.TerminalNode[];
    SIGNED(i: number): antlr.TerminalNode | null;
    UNSIGNED(): antlr.TerminalNode[];
    UNSIGNED(i: number): antlr.TerminalNode | null;
    ZEROFILL(): antlr.TerminalNode[];
    ZEROFILL(i: number): antlr.TerminalNode | null;
    REAL(): antlr.TerminalNode | null;
    lengthTwoDimension(): LengthTwoDimensionContext | null;
    DOUBLE(): antlr.TerminalNode | null;
    PRECISION(): antlr.TerminalNode | null;
    DECIMAL(): antlr.TerminalNode | null;
    DEC(): antlr.TerminalNode | null;
    FIXED(): antlr.TerminalNode | null;
    NUMERIC(): antlr.TerminalNode | null;
    FLOAT(): antlr.TerminalNode | null;
    FLOAT4(): antlr.TerminalNode | null;
    FLOAT8(): antlr.TerminalNode | null;
    lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | null;
    BIT(): antlr.TerminalNode | null;
    TIME(): antlr.TerminalNode | null;
    TIMESTAMP(): antlr.TerminalNode | null;
    DATETIME(): antlr.TerminalNode | null;
    BINARY(): antlr.TerminalNode | null;
    VARBINARY(): antlr.TerminalNode | null;
    BLOB(): antlr.TerminalNode | null;
    YEAR(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringDataTypeContext extends DataTypeContext {
    _typeName?: Token | null;
    constructor(ctx: DataTypeContext);
    CHAR(): antlr.TerminalNode | null;
    CHARACTER(): antlr.TerminalNode | null;
    VARCHAR(): antlr.TerminalNode | null;
    TINYTEXT(): antlr.TerminalNode | null;
    TEXT(): antlr.TerminalNode | null;
    MEDIUMTEXT(): antlr.TerminalNode | null;
    LONGTEXT(): antlr.TerminalNode | null;
    NCHAR(): antlr.TerminalNode | null;
    NVARCHAR(): antlr.TerminalNode | null;
    LONG(): antlr.TerminalNode | null;
    VARYING(): antlr.TerminalNode | null;
    lengthOneDimension(): LengthOneDimensionContext | null;
    BINARY(): antlr.TerminalNode[];
    BINARY(i: number): antlr.TerminalNode | null;
    charSet(): CharSetContext | null;
    charsetName(): CharsetNameContext | null;
    COLLATE(): antlr.TerminalNode | null;
    collationName(): CollationNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LongVarcharDataTypeContext extends DataTypeContext {
    _typeName?: Token | null;
    constructor(ctx: DataTypeContext);
    LONG(): antlr.TerminalNode;
    VARCHAR(): antlr.TerminalNode | null;
    BINARY(): antlr.TerminalNode | null;
    charSet(): CharSetContext | null;
    charsetName(): CharsetNameContext | null;
    COLLATE(): antlr.TerminalNode | null;
    collationName(): CollationNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NationalStringDataTypeContext extends DataTypeContext {
    _typeName?: Token | null;
    constructor(ctx: DataTypeContext);
    NATIONAL(): antlr.TerminalNode | null;
    VARCHAR(): antlr.TerminalNode | null;
    CHARACTER(): antlr.TerminalNode | null;
    CHAR(): antlr.TerminalNode | null;
    lengthOneDimension(): LengthOneDimensionContext | null;
    BINARY(): antlr.TerminalNode | null;
    NCHAR(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleDataTypeContext extends DataTypeContext {
    _typeName?: Token | null;
    constructor(ctx: DataTypeContext);
    DATE(): antlr.TerminalNode | null;
    TINYBLOB(): antlr.TerminalNode | null;
    MEDIUMBLOB(): antlr.TerminalNode | null;
    LONGBLOB(): antlr.TerminalNode | null;
    BOOL(): antlr.TerminalNode | null;
    BOOLEAN(): antlr.TerminalNode | null;
    SERIAL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollectionOptionsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode[];
    STRING_LITERAL(i: number): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConvertedDataTypeContext extends antlr.ParserRuleContext {
    _typeName?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CHAR(): antlr.TerminalNode | null;
    SIGNED(): antlr.TerminalNode | null;
    UNSIGNED(): antlr.TerminalNode | null;
    ARRAY(): antlr.TerminalNode | null;
    BINARY(): antlr.TerminalNode | null;
    NCHAR(): antlr.TerminalNode | null;
    FLOAT(): antlr.TerminalNode | null;
    DATE(): antlr.TerminalNode | null;
    DATETIME(): antlr.TerminalNode | null;
    TIME(): antlr.TerminalNode | null;
    YEAR(): antlr.TerminalNode | null;
    JSON(): antlr.TerminalNode | null;
    INT(): antlr.TerminalNode | null;
    INTEGER(): antlr.TerminalNode | null;
    DOUBLE(): antlr.TerminalNode | null;
    DECIMAL(): antlr.TerminalNode | null;
    DEC(): antlr.TerminalNode | null;
    lengthOneDimension(): LengthOneDimensionContext | null;
    charSet(): CharSetContext | null;
    charsetName(): CharsetNameContext | null;
    lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LengthOneDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    RR_BRACKET(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LengthTwoDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    COMMA(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LengthTwoOptionalDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UidListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FullColumnNameListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    fullColumnName(): FullColumnNameContext[];
    fullColumnName(i: number): FullColumnNameContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TablesContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexColumnNamesContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    indexColumnName(): IndexColumnNameContext[];
    indexColumnName(i: number): IndexColumnNameContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionsWithDefaultsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expressionOrDefault(): ExpressionOrDefaultContext[];
    expressionOrDefault(i: number): ExpressionOrDefaultContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConstantsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    constant(): ConstantContext[];
    constant(i: number): ConstantContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleStringsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode[];
    STRING_LITERAL(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserVariablesContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LOCAL_ID(): antlr.TerminalNode[];
    LOCAL_ID(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefaultValueContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    NULL_LITERAL(): antlr.TerminalNode | null;
    CAST(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    AS(): antlr.TerminalNode | null;
    convertedDataType(): ConvertedDataTypeContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    constant(): ConstantContext | null;
    unaryOperator(): UnaryOperatorContext | null;
    currentTimestamp(): CurrentTimestampContext[];
    currentTimestamp(i: number): CurrentTimestampContext | null;
    ON(): antlr.TerminalNode | null;
    UPDATE(): antlr.TerminalNode | null;
    fullId(): FullIdContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CurrentTimestampContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    NOW(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
    LOCALTIME(): antlr.TerminalNode | null;
    LOCALTIMESTAMP(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionOrDefaultContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expression(): ExpressionContext | null;
    DEFAULT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IfExistsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    IF(): antlr.TerminalNode;
    EXISTS(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IfNotExistsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    IF(): antlr.TerminalNode;
    NOT(): antlr.TerminalNode;
    EXISTS(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OrReplaceContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    OR(): antlr.TerminalNode;
    REPLACE(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WaitNowaitClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WAIT(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    NOWAIT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionCallContext): void;
}
export declare class SpecificFunctionCallContext extends FunctionCallContext {
    constructor(ctx: FunctionCallContext);
    specificFunction(): SpecificFunctionContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PasswordFunctionCallContext extends FunctionCallContext {
    constructor(ctx: FunctionCallContext);
    passwordFunctionClause(): PasswordFunctionClauseContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UdfFunctionCallContext extends FunctionCallContext {
    constructor(ctx: FunctionCallContext);
    fullId(): FullIdContext;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    functionArgs(): FunctionArgsContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NonAggregateFunctionCallContext extends FunctionCallContext {
    constructor(ctx: FunctionCallContext);
    nonAggregateWindowedFunction(): NonAggregateWindowedFunctionContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AggregateFunctionCallContext extends FunctionCallContext {
    constructor(ctx: FunctionCallContext);
    aggregateWindowedFunction(): AggregateWindowedFunctionContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ScalarFunctionCallContext extends FunctionCallContext {
    constructor(ctx: FunctionCallContext);
    scalarFunctionName(): ScalarFunctionNameContext;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    functionArgs(): FunctionArgsContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SpecificFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SpecificFunctionContext): void;
}
export declare class PositionFunctionCallContext extends SpecificFunctionContext {
    _positionString?: StringLiteralContext;
    _positionExpression?: ExpressionContext;
    _inString?: StringLiteralContext;
    _inExpression?: ExpressionContext;
    constructor(ctx: SpecificFunctionContext);
    POSITION(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    IN(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    stringLiteral(): StringLiteralContext[];
    stringLiteral(i: number): StringLiteralContext | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TrimFunctionCallContext extends SpecificFunctionContext {
    _positioinForm?: Token | null;
    _sourceString?: StringLiteralContext;
    _sourceExpression?: ExpressionContext;
    _fromString?: StringLiteralContext;
    _fromExpression?: ExpressionContext;
    constructor(ctx: SpecificFunctionContext);
    TRIM(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    FROM(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    BOTH(): antlr.TerminalNode | null;
    LEADING(): antlr.TerminalNode | null;
    TRAILING(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext[];
    stringLiteral(i: number): StringLiteralContext | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonValueFunctionCallContext extends SpecificFunctionContext {
    constructor(ctx: SpecificFunctionContext);
    JSON_VALUE(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    COMMA(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    RETURNING(): antlr.TerminalNode | null;
    convertedDataType(): ConvertedDataTypeContext | null;
    jsonOnEmpty(): JsonOnEmptyContext | null;
    jsonOnError(): JsonOnErrorContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseFunctionCallContext extends SpecificFunctionContext {
    _elseArg?: FunctionArgContext;
    constructor(ctx: SpecificFunctionContext);
    CASE(): antlr.TerminalNode;
    END(): antlr.TerminalNode;
    caseFuncAlternative(): CaseFuncAlternativeContext[];
    caseFuncAlternative(i: number): CaseFuncAlternativeContext | null;
    ELSE(): antlr.TerminalNode | null;
    functionArg(): FunctionArgContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExtractFunctionCallContext extends SpecificFunctionContext {
    _sourceString?: StringLiteralContext;
    _sourceExpression?: ExpressionContext;
    constructor(ctx: SpecificFunctionContext);
    EXTRACT(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    intervalType(): IntervalTypeContext;
    FROM(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    stringLiteral(): StringLiteralContext | null;
    expression(): ExpressionContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DataTypeFunctionCallContext extends SpecificFunctionContext {
    _separator?: Token | null;
    constructor(ctx: SpecificFunctionContext);
    CONVERT(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    convertedDataType(): ConvertedDataTypeContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode | null;
    USING(): antlr.TerminalNode | null;
    charsetName(): CharsetNameContext | null;
    CAST(): antlr.TerminalNode | null;
    AS(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ValuesFunctionCallContext extends SpecificFunctionContext {
    constructor(ctx: SpecificFunctionContext);
    VALUES(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    fullColumnName(): FullColumnNameContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseExpressionFunctionCallContext extends SpecificFunctionContext {
    _elseArg?: FunctionArgContext;
    constructor(ctx: SpecificFunctionContext);
    CASE(): antlr.TerminalNode;
    expression(): ExpressionContext;
    END(): antlr.TerminalNode;
    caseFuncAlternative(): CaseFuncAlternativeContext[];
    caseFuncAlternative(i: number): CaseFuncAlternativeContext | null;
    ELSE(): antlr.TerminalNode | null;
    functionArg(): FunctionArgContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CurrentUserContext extends SpecificFunctionContext {
    constructor(ctx: SpecificFunctionContext);
    currentUserExpression(): CurrentUserExpressionContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleFunctionCallContext extends SpecificFunctionContext {
    constructor(ctx: SpecificFunctionContext);
    CURRENT_DATE(): antlr.TerminalNode | null;
    CURRENT_TIME(): antlr.TerminalNode | null;
    CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
    LOCALTIME(): antlr.TerminalNode | null;
    UTC_TIMESTAMP(): antlr.TerminalNode | null;
    SCHEMA(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CharFunctionCallContext extends SpecificFunctionContext {
    constructor(ctx: SpecificFunctionContext);
    CHAR(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    functionArgs(): FunctionArgsContext;
    RR_BRACKET(): antlr.TerminalNode;
    USING(): antlr.TerminalNode | null;
    charsetName(): CharsetNameContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WeightFunctionCallContext extends SpecificFunctionContext {
    _stringFormat?: Token | null;
    constructor(ctx: SpecificFunctionContext);
    WEIGHT_STRING(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    expression(): ExpressionContext | null;
    AS(): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext | null;
    levelsInWeightString(): LevelsInWeightStringContext | null;
    CHAR(): antlr.TerminalNode | null;
    BINARY(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GetFormatFunctionCallContext extends SpecificFunctionContext {
    _datetimeFormat?: Token | null;
    constructor(ctx: SpecificFunctionContext);
    GET_FORMAT(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode;
    stringLiteral(): StringLiteralContext;
    RR_BRACKET(): antlr.TerminalNode;
    DATE(): antlr.TerminalNode | null;
    TIME(): antlr.TerminalNode | null;
    DATETIME(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubstrFunctionCallContext extends SpecificFunctionContext {
    _sourceString?: StringLiteralContext;
    _sourceExpression?: ExpressionContext;
    _fromDecimal?: DecimalLiteralContext;
    _fromExpression?: ExpressionContext;
    _forDecimal?: DecimalLiteralContext;
    _forExpression?: ExpressionContext;
    constructor(ctx: SpecificFunctionContext);
    LR_BRACKET(): antlr.TerminalNode;
    FROM(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    SUBSTR(): antlr.TerminalNode | null;
    SUBSTRING(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    FOR(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseFuncAlternativeContext extends antlr.ParserRuleContext {
    _condition?: FunctionArgContext;
    _consequent?: FunctionArgContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    WHEN(): antlr.TerminalNode;
    THEN(): antlr.TerminalNode;
    functionArg(): FunctionArgContext[];
    functionArg(i: number): FunctionArgContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LevelsInWeightStringContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: LevelsInWeightStringContext): void;
}
export declare class LevelWeightRangeContext extends LevelsInWeightStringContext {
    _firstLevel?: DecimalLiteralContext;
    _lastLevel?: DecimalLiteralContext;
    constructor(ctx: LevelsInWeightStringContext);
    LEVEL(): antlr.TerminalNode;
    MINUS(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LevelWeightListContext extends LevelsInWeightStringContext {
    constructor(ctx: LevelsInWeightStringContext);
    LEVEL(): antlr.TerminalNode;
    levelInWeightListElement(): LevelInWeightListElementContext[];
    levelInWeightListElement(i: number): LevelInWeightListElementContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LevelInWeightListElementContext extends antlr.ParserRuleContext {
    _orderType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    decimalLiteral(): DecimalLiteralContext;
    ASC(): antlr.TerminalNode | null;
    DESC(): antlr.TerminalNode | null;
    REVERSE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AggregateWindowedFunctionContext extends antlr.ParserRuleContext {
    _aggregator?: Token | null;
    _starArg?: Token | null;
    _separator?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    functionArg(): FunctionArgContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    AVG(): antlr.TerminalNode | null;
    MAX(): antlr.TerminalNode | null;
    MIN(): antlr.TerminalNode | null;
    SUM(): antlr.TerminalNode | null;
    overClause(): OverClauseContext | null;
    ALL(): antlr.TerminalNode | null;
    DISTINCT(): antlr.TerminalNode | null;
    COUNT(): antlr.TerminalNode | null;
    functionArgs(): FunctionArgsContext | null;
    STAR(): antlr.TerminalNode | null;
    BIT_AND(): antlr.TerminalNode | null;
    BIT_OR(): antlr.TerminalNode | null;
    BIT_XOR(): antlr.TerminalNode | null;
    STD(): antlr.TerminalNode | null;
    STDDEV(): antlr.TerminalNode | null;
    STDDEV_POP(): antlr.TerminalNode | null;
    STDDEV_SAMP(): antlr.TerminalNode | null;
    VAR_POP(): antlr.TerminalNode | null;
    VAR_SAMP(): antlr.TerminalNode | null;
    VARIANCE(): antlr.TerminalNode | null;
    GROUP_CONCAT(): antlr.TerminalNode | null;
    ORDER(): antlr.TerminalNode | null;
    BY(): antlr.TerminalNode | null;
    orderByExpression(): OrderByExpressionContext[];
    orderByExpression(i: number): OrderByExpressionContext | null;
    SEPARATOR(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NonAggregateWindowedFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    overClause(): OverClauseContext;
    LAG(): antlr.TerminalNode | null;
    LEAD(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    FIRST_VALUE(): antlr.TerminalNode | null;
    LAST_VALUE(): antlr.TerminalNode | null;
    CUME_DIST(): antlr.TerminalNode | null;
    DENSE_RANK(): antlr.TerminalNode | null;
    PERCENT_RANK(): antlr.TerminalNode | null;
    RANK(): antlr.TerminalNode | null;
    ROW_NUMBER(): antlr.TerminalNode | null;
    NTH_VALUE(): antlr.TerminalNode | null;
    NTILE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OverClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    OVER(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode | null;
    windowSpec(): WindowSpecContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    windowName(): WindowNameContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WindowSpecContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    windowName(): WindowNameContext | null;
    partitionClause(): PartitionClauseContext | null;
    orderByClause(): OrderByClauseContext | null;
    frameClause(): FrameClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WindowNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    frameUnits(): FrameUnitsContext;
    frameExtent(): FrameExtentContext;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameUnitsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ROWS(): antlr.TerminalNode | null;
    RANGE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameExtentContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    frameRange(): FrameRangeContext | null;
    frameBetween(): FrameBetweenContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameBetweenContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    BETWEEN(): antlr.TerminalNode;
    frameRange(): FrameRangeContext[];
    frameRange(i: number): FrameRangeContext | null;
    AND(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameRangeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    CURRENT(): antlr.TerminalNode | null;
    ROW(): antlr.TerminalNode | null;
    UNBOUNDED(): antlr.TerminalNode | null;
    PRECEDING(): antlr.TerminalNode | null;
    FOLLOWING(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    PARTITION(): antlr.TerminalNode;
    BY(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ScalarFunctionNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    functionNameBase(): FunctionNameBaseContext | null;
    ASCII(): antlr.TerminalNode | null;
    CURDATE(): antlr.TerminalNode | null;
    CURRENT_DATE(): antlr.TerminalNode | null;
    CURRENT_TIME(): antlr.TerminalNode | null;
    CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
    CURTIME(): antlr.TerminalNode | null;
    DATE_ADD(): antlr.TerminalNode | null;
    DATE_SUB(): antlr.TerminalNode | null;
    IF(): antlr.TerminalNode | null;
    INSERT(): antlr.TerminalNode | null;
    LOCALTIME(): antlr.TerminalNode | null;
    LOCALTIMESTAMP(): antlr.TerminalNode | null;
    MID(): antlr.TerminalNode | null;
    NOW(): antlr.TerminalNode | null;
    REPEAT(): antlr.TerminalNode | null;
    REPLACE(): antlr.TerminalNode | null;
    SUBSTR(): antlr.TerminalNode | null;
    SUBSTRING(): antlr.TerminalNode | null;
    SYSDATE(): antlr.TerminalNode | null;
    TRIM(): antlr.TerminalNode | null;
    UTC_DATE(): antlr.TerminalNode | null;
    UTC_TIME(): antlr.TerminalNode | null;
    UTC_TIMESTAMP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PasswordFunctionClauseContext extends antlr.ParserRuleContext {
    _functionName?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    functionArg(): FunctionArgContext;
    RR_BRACKET(): antlr.TerminalNode;
    PASSWORD(): antlr.TerminalNode | null;
    OLD_PASSWORD(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionArgsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    constant(): ConstantContext[];
    constant(i: number): ConstantContext | null;
    fullColumnName(): FullColumnNameContext[];
    fullColumnName(i: number): FullColumnNameContext | null;
    functionCall(): FunctionCallContext[];
    functionCall(i: number): FunctionCallContext | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionArgContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    constant(): ConstantContext | null;
    fullColumnName(): FullColumnNameContext | null;
    functionCall(): FunctionCallContext | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class IsExpressionContext extends ExpressionContext {
    _testValue?: Token | null;
    constructor(ctx: ExpressionContext);
    predicate(): PredicateContext;
    IS(): antlr.TerminalNode;
    TRUE(): antlr.TerminalNode | null;
    FALSE(): antlr.TerminalNode | null;
    UNKNOWN(): antlr.TerminalNode | null;
    NOT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NotExpressionContext extends ExpressionContext {
    _notOperator?: Token | null;
    constructor(ctx: ExpressionContext);
    expression(): ExpressionContext;
    NOT(): antlr.TerminalNode | null;
    EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LogicalExpressionContext extends ExpressionContext {
    constructor(ctx: ExpressionContext);
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    logicalOperator(): LogicalOperatorContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PredicateExpressionContext extends ExpressionContext {
    constructor(ctx: ExpressionContext);
    predicate(): PredicateContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PredicateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PredicateContext): void;
}
export declare class SoundsLikePredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext | null;
    SOUNDS(): antlr.TerminalNode;
    LIKE(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionAtomPredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    expressionAtom(): ExpressionAtomContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubqueryComparisonPredicateContext extends PredicateContext {
    _quantifier?: Token | null;
    constructor(ctx: PredicateContext);
    predicate(): PredicateContext;
    comparisonOperator(): ComparisonOperatorContext;
    LR_BRACKET(): antlr.TerminalNode;
    selectStatement(): SelectStatementContext;
    RR_BRACKET(): antlr.TerminalNode;
    ALL(): antlr.TerminalNode | null;
    ANY(): antlr.TerminalNode | null;
    SOME(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonMemberOfPredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext | null;
    MEMBER(): antlr.TerminalNode;
    OF(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BinaryComparisonPredicateContext extends PredicateContext {
    _left?: PredicateContext;
    _right?: PredicateContext;
    constructor(ctx: PredicateContext);
    comparisonOperator(): ComparisonOperatorContext;
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InPredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    predicate(): PredicateContext;
    IN(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    selectStatement(): SelectStatementContext | null;
    expressions(): ExpressionsContext | null;
    NOT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BetweenPredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext | null;
    BETWEEN(): antlr.TerminalNode;
    AND(): antlr.TerminalNode;
    NOT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IsNullPredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    predicate(): PredicateContext;
    IS(): antlr.TerminalNode;
    nullNotnull(): NullNotnullContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LikePredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext | null;
    LIKE(): antlr.TerminalNode;
    NOT(): antlr.TerminalNode | null;
    ESCAPE(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RegexpPredicateContext extends PredicateContext {
    _regex?: Token | null;
    constructor(ctx: PredicateContext);
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext | null;
    REGEXP(): antlr.TerminalNode | null;
    RLIKE(): antlr.TerminalNode | null;
    NOT(): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionAtomContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionAtomContext): void;
}
export declare class UnaryExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    unaryOperator(): UnaryOperatorContext;
    expressionAtom(): ExpressionAtomContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollateExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    expressionAtom(): ExpressionAtomContext;
    COLLATE(): antlr.TerminalNode;
    collationName(): CollationNameContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class VariableAssignExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    LOCAL_ID(): antlr.TerminalNode;
    VAR_ASSIGN(): antlr.TerminalNode;
    expressionAtom(): ExpressionAtomContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MysqlVariableExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    mysqlVariable(): MysqlVariableContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NestedExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NestedRowExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    ROW(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MathExpressionAtomContext extends ExpressionAtomContext {
    _left?: ExpressionAtomContext;
    _right?: ExpressionAtomContext;
    constructor(ctx: ExpressionAtomContext);
    multOperator(): MultOperatorContext | null;
    expressionAtom(): ExpressionAtomContext[];
    expressionAtom(i: number): ExpressionAtomContext | null;
    addOperator(): AddOperatorContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExistsExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    EXISTS(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    selectStatement(): SelectStatementContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    INTERVAL(): antlr.TerminalNode;
    expression(): ExpressionContext;
    intervalType(): IntervalTypeContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonExpressionAtomContext extends ExpressionAtomContext {
    _left?: ExpressionAtomContext;
    _right?: ExpressionAtomContext;
    constructor(ctx: ExpressionAtomContext);
    jsonOperator(): JsonOperatorContext;
    expressionAtom(): ExpressionAtomContext[];
    expressionAtom(i: number): ExpressionAtomContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubqueryExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    LR_BRACKET(): antlr.TerminalNode;
    selectStatement(): SelectStatementContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConstantExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    constant(): ConstantContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionCallExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    functionCall(): FunctionCallContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BinaryExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    BINARY(): antlr.TerminalNode;
    expressionAtom(): ExpressionAtomContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FullColumnNameExpressionAtomContext extends ExpressionAtomContext {
    constructor(ctx: ExpressionAtomContext);
    fullColumnName(): FullColumnNameContext;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BitExpressionAtomContext extends ExpressionAtomContext {
    _left?: ExpressionAtomContext;
    _right?: ExpressionAtomContext;
    constructor(ctx: ExpressionAtomContext);
    bitOperator(): BitOperatorContext;
    expressionAtom(): ExpressionAtomContext[];
    expressionAtom(i: number): ExpressionAtomContext | null;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UnaryOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
    BIT_NOT_OP(): antlr.TerminalNode | null;
    PLUS(): antlr.TerminalNode | null;
    MINUS(): antlr.TerminalNode | null;
    NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    GREATER_SYMBOL(): antlr.TerminalNode | null;
    LESS_SYMBOL(): antlr.TerminalNode | null;
    EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LogicalOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    AND(): antlr.TerminalNode | null;
    BIT_AND_OP(): antlr.TerminalNode[];
    BIT_AND_OP(i: number): antlr.TerminalNode | null;
    XOR(): antlr.TerminalNode | null;
    OR(): antlr.TerminalNode | null;
    BIT_OR_OP(): antlr.TerminalNode[];
    BIT_OR_OP(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BitOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LESS_SYMBOL(): antlr.TerminalNode[];
    LESS_SYMBOL(i: number): antlr.TerminalNode | null;
    GREATER_SYMBOL(): antlr.TerminalNode[];
    GREATER_SYMBOL(i: number): antlr.TerminalNode | null;
    BIT_AND_OP(): antlr.TerminalNode | null;
    BIT_XOR_OP(): antlr.TerminalNode | null;
    BIT_OR_OP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MultOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STAR(): antlr.TerminalNode | null;
    DIVIDE(): antlr.TerminalNode | null;
    MODULE(): antlr.TerminalNode | null;
    DIV(): antlr.TerminalNode | null;
    MOD(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AddOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    PLUS(): antlr.TerminalNode | null;
    MINUS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    MINUS(): antlr.TerminalNode;
    GREATER_SYMBOL(): antlr.TerminalNode[];
    GREATER_SYMBOL(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CharsetNameBaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ARMSCII8(): antlr.TerminalNode | null;
    ASCII(): antlr.TerminalNode | null;
    BIG5(): antlr.TerminalNode | null;
    BINARY(): antlr.TerminalNode | null;
    CP1250(): antlr.TerminalNode | null;
    CP1251(): antlr.TerminalNode | null;
    CP1256(): antlr.TerminalNode | null;
    CP1257(): antlr.TerminalNode | null;
    CP850(): antlr.TerminalNode | null;
    CP852(): antlr.TerminalNode | null;
    CP866(): antlr.TerminalNode | null;
    CP932(): antlr.TerminalNode | null;
    DEC8(): antlr.TerminalNode | null;
    EUCJPMS(): antlr.TerminalNode | null;
    EUCKR(): antlr.TerminalNode | null;
    GB18030(): antlr.TerminalNode | null;
    GB2312(): antlr.TerminalNode | null;
    GBK(): antlr.TerminalNode | null;
    GEOSTD8(): antlr.TerminalNode | null;
    GREEK(): antlr.TerminalNode | null;
    HEBREW(): antlr.TerminalNode | null;
    HP8(): antlr.TerminalNode | null;
    KEYBCS2(): antlr.TerminalNode | null;
    KOI8R(): antlr.TerminalNode | null;
    KOI8U(): antlr.TerminalNode | null;
    LATIN1(): antlr.TerminalNode | null;
    LATIN2(): antlr.TerminalNode | null;
    LATIN5(): antlr.TerminalNode | null;
    LATIN7(): antlr.TerminalNode | null;
    MACCE(): antlr.TerminalNode | null;
    MACROMAN(): antlr.TerminalNode | null;
    SJIS(): antlr.TerminalNode | null;
    SWE7(): antlr.TerminalNode | null;
    TIS620(): antlr.TerminalNode | null;
    UCS2(): antlr.TerminalNode | null;
    UJIS(): antlr.TerminalNode | null;
    UTF16(): antlr.TerminalNode | null;
    UTF16LE(): antlr.TerminalNode | null;
    UTF32(): antlr.TerminalNode | null;
    UTF8(): antlr.TerminalNode | null;
    UTF8MB3(): antlr.TerminalNode | null;
    UTF8MB4(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionLevelBaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    REPEATABLE(): antlr.TerminalNode | null;
    COMMITTED(): antlr.TerminalNode | null;
    UNCOMMITTED(): antlr.TerminalNode | null;
    SERIALIZABLE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegesBaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    TABLES(): antlr.TerminalNode | null;
    ROUTINE(): antlr.TerminalNode | null;
    EXECUTE(): antlr.TerminalNode | null;
    FILE(): antlr.TerminalNode | null;
    PROCESS(): antlr.TerminalNode | null;
    RELOAD(): antlr.TerminalNode | null;
    SHUTDOWN(): antlr.TerminalNode | null;
    SUPER(): antlr.TerminalNode | null;
    PRIVILEGES(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalTypeBaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    QUARTER(): antlr.TerminalNode | null;
    MONTH(): antlr.TerminalNode | null;
    DAY(): antlr.TerminalNode | null;
    HOUR(): antlr.TerminalNode | null;
    MINUTE(): antlr.TerminalNode | null;
    WEEK(): antlr.TerminalNode | null;
    SECOND(): antlr.TerminalNode | null;
    MICROSECOND(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DataTypeBaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DATE(): antlr.TerminalNode | null;
    TIME(): antlr.TerminalNode | null;
    TIMESTAMP(): antlr.TerminalNode | null;
    DATETIME(): antlr.TerminalNode | null;
    YEAR(): antlr.TerminalNode | null;
    ENUM(): antlr.TerminalNode | null;
    TEXT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class KeywordsCanBeIdContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ACCOUNT(): antlr.TerminalNode | null;
    ACTION(): antlr.TerminalNode | null;
    ADMIN(): antlr.TerminalNode | null;
    AFTER(): antlr.TerminalNode | null;
    AGGREGATE(): antlr.TerminalNode | null;
    ALGORITHM(): antlr.TerminalNode | null;
    ANY(): antlr.TerminalNode | null;
    ARRAY(): antlr.TerminalNode | null;
    AT(): antlr.TerminalNode | null;
    AUDIT_ADMIN(): antlr.TerminalNode | null;
    AUDIT_ABORT_EXEMPT(): antlr.TerminalNode | null;
    AUTHORS(): antlr.TerminalNode | null;
    AUTOCOMMIT(): antlr.TerminalNode | null;
    AUTOEXTEND_SIZE(): antlr.TerminalNode | null;
    AUTO_INCREMENT(): antlr.TerminalNode | null;
    AUTHENTICATION_POLICY_ADMIN(): antlr.TerminalNode | null;
    AVG(): antlr.TerminalNode | null;
    AVG_ROW_LENGTH(): antlr.TerminalNode | null;
    ATTRIBUTE(): antlr.TerminalNode | null;
    BACKUP_ADMIN(): antlr.TerminalNode | null;
    BEGIN(): antlr.TerminalNode | null;
    BINLOG(): antlr.TerminalNode | null;
    BINLOG_ADMIN(): antlr.TerminalNode | null;
    BINLOG_ENCRYPTION_ADMIN(): antlr.TerminalNode | null;
    BIT(): antlr.TerminalNode | null;
    BIT_AND(): antlr.TerminalNode | null;
    BIT_OR(): antlr.TerminalNode | null;
    BIT_XOR(): antlr.TerminalNode | null;
    BLOCK(): antlr.TerminalNode | null;
    BOOL(): antlr.TerminalNode | null;
    BOOLEAN(): antlr.TerminalNode | null;
    BTREE(): antlr.TerminalNode | null;
    BUCKETS(): antlr.TerminalNode | null;
    CACHE(): antlr.TerminalNode | null;
    CASCADED(): antlr.TerminalNode | null;
    CHAIN(): antlr.TerminalNode | null;
    CHANGED(): antlr.TerminalNode | null;
    CHANNEL(): antlr.TerminalNode | null;
    CHECKSUM(): antlr.TerminalNode | null;
    PAGE_CHECKSUM(): antlr.TerminalNode | null;
    CATALOG_NAME(): antlr.TerminalNode | null;
    CIPHER(): antlr.TerminalNode | null;
    CLASS_ORIGIN(): antlr.TerminalNode | null;
    CLIENT(): antlr.TerminalNode | null;
    CLONE_ADMIN(): antlr.TerminalNode | null;
    CLOSE(): antlr.TerminalNode | null;
    CLUSTERING(): antlr.TerminalNode | null;
    COALESCE(): antlr.TerminalNode | null;
    CODE(): antlr.TerminalNode | null;
    COLUMNS(): antlr.TerminalNode | null;
    COLUMN_FORMAT(): antlr.TerminalNode | null;
    COLUMN_NAME(): antlr.TerminalNode | null;
    COMMENT(): antlr.TerminalNode | null;
    COMMIT(): antlr.TerminalNode | null;
    COMPACT(): antlr.TerminalNode | null;
    COMPLETION(): antlr.TerminalNode | null;
    COMPRESSED(): antlr.TerminalNode | null;
    COMPRESSION(): antlr.TerminalNode | null;
    CONCURRENT(): antlr.TerminalNode | null;
    CONDITION(): antlr.TerminalNode | null;
    CONNECT(): antlr.TerminalNode | null;
    CONNECTION(): antlr.TerminalNode | null;
    CONNECTION_ADMIN(): antlr.TerminalNode | null;
    CONSISTENT(): antlr.TerminalNode | null;
    CONSTRAINT_CATALOG(): antlr.TerminalNode | null;
    CONSTRAINT_NAME(): antlr.TerminalNode | null;
    CONSTRAINT_SCHEMA(): antlr.TerminalNode | null;
    CONTAINS(): antlr.TerminalNode | null;
    CONTEXT(): antlr.TerminalNode | null;
    CONTRIBUTORS(): antlr.TerminalNode | null;
    COPY(): antlr.TerminalNode | null;
    COUNT(): antlr.TerminalNode | null;
    CPU(): antlr.TerminalNode | null;
    CURRENT(): antlr.TerminalNode | null;
    CURRENT_USER(): antlr.TerminalNode | null;
    CURSOR_NAME(): antlr.TerminalNode | null;
    DATA(): antlr.TerminalNode | null;
    DATAFILE(): antlr.TerminalNode | null;
    DEALLOCATE(): antlr.TerminalNode | null;
    DEFAULT(): antlr.TerminalNode | null;
    DEFAULT_AUTH(): antlr.TerminalNode | null;
    DEFINER(): antlr.TerminalNode | null;
    DELAY_KEY_WRITE(): antlr.TerminalNode | null;
    DES_KEY_FILE(): antlr.TerminalNode | null;
    DIAGNOSTICS(): antlr.TerminalNode | null;
    DIRECTORY(): antlr.TerminalNode | null;
    DISABLE(): antlr.TerminalNode | null;
    DISCARD(): antlr.TerminalNode | null;
    DISK(): antlr.TerminalNode | null;
    DO(): antlr.TerminalNode | null;
    DUMPFILE(): antlr.TerminalNode | null;
    DUPLICATE(): antlr.TerminalNode | null;
    DYNAMIC(): antlr.TerminalNode | null;
    EMPTY(): antlr.TerminalNode | null;
    ENABLE(): antlr.TerminalNode | null;
    ENCRYPTION(): antlr.TerminalNode | null;
    ENCRYPTION_KEY_ADMIN(): antlr.TerminalNode | null;
    END(): antlr.TerminalNode | null;
    ENDS(): antlr.TerminalNode | null;
    ENGINE(): antlr.TerminalNode | null;
    ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
    ENGINES(): antlr.TerminalNode | null;
    ENFORCED(): antlr.TerminalNode | null;
    ERROR(): antlr.TerminalNode | null;
    ERRORS(): antlr.TerminalNode | null;
    ESCAPE(): antlr.TerminalNode | null;
    EUR(): antlr.TerminalNode | null;
    EVEN(): antlr.TerminalNode | null;
    EVENT(): antlr.TerminalNode | null;
    EVENTS(): antlr.TerminalNode | null;
    EVERY(): antlr.TerminalNode | null;
    EXCEPT(): antlr.TerminalNode | null;
    EXCHANGE(): antlr.TerminalNode | null;
    EXCLUSIVE(): antlr.TerminalNode | null;
    EXPIRE(): antlr.TerminalNode | null;
    EXPORT(): antlr.TerminalNode | null;
    EXTENDED(): antlr.TerminalNode | null;
    EXTENT_SIZE(): antlr.TerminalNode | null;
    FAILED_LOGIN_ATTEMPTS(): antlr.TerminalNode | null;
    FAST(): antlr.TerminalNode | null;
    FAULTS(): antlr.TerminalNode | null;
    FIELDS(): antlr.TerminalNode | null;
    FILE_BLOCK_SIZE(): antlr.TerminalNode | null;
    FILTER(): antlr.TerminalNode | null;
    FIREWALL_ADMIN(): antlr.TerminalNode | null;
    FIREWALL_EXEMPT(): antlr.TerminalNode | null;
    FIREWALL_USER(): antlr.TerminalNode | null;
    FIRST(): antlr.TerminalNode | null;
    FIXED(): antlr.TerminalNode | null;
    FLUSH(): antlr.TerminalNode | null;
    FOLLOWS(): antlr.TerminalNode | null;
    FOUND(): antlr.TerminalNode | null;
    FULL(): antlr.TerminalNode | null;
    FUNCTION(): antlr.TerminalNode | null;
    GENERAL(): antlr.TerminalNode | null;
    GLOBAL(): antlr.TerminalNode | null;
    GRANTS(): antlr.TerminalNode | null;
    GROUP(): antlr.TerminalNode | null;
    GROUP_CONCAT(): antlr.TerminalNode | null;
    GROUP_REPLICATION(): antlr.TerminalNode | null;
    GROUP_REPLICATION_ADMIN(): antlr.TerminalNode | null;
    HANDLER(): antlr.TerminalNode | null;
    HASH(): antlr.TerminalNode | null;
    HELP(): antlr.TerminalNode | null;
    HISTORY(): antlr.TerminalNode | null;
    HOST(): antlr.TerminalNode | null;
    HOSTS(): antlr.TerminalNode | null;
    IDENTIFIED(): antlr.TerminalNode | null;
    IGNORED(): antlr.TerminalNode | null;
    IGNORE_SERVER_IDS(): antlr.TerminalNode | null;
    IMPORT(): antlr.TerminalNode | null;
    INDEXES(): antlr.TerminalNode | null;
    INITIAL_SIZE(): antlr.TerminalNode | null;
    INNODB_REDO_LOG_ARCHIVE(): antlr.TerminalNode | null;
    INPLACE(): antlr.TerminalNode | null;
    INSERT_METHOD(): antlr.TerminalNode | null;
    INSTALL(): antlr.TerminalNode | null;
    INSTANCE(): antlr.TerminalNode | null;
    INSTANT(): antlr.TerminalNode | null;
    INTERNAL(): antlr.TerminalNode | null;
    INVOKE(): antlr.TerminalNode | null;
    INVOKER(): antlr.TerminalNode | null;
    IO(): antlr.TerminalNode | null;
    IO_THREAD(): antlr.TerminalNode | null;
    IPC(): antlr.TerminalNode | null;
    ISO(): antlr.TerminalNode | null;
    ISOLATION(): antlr.TerminalNode | null;
    ISSUER(): antlr.TerminalNode | null;
    JIS(): antlr.TerminalNode | null;
    JSON(): antlr.TerminalNode | null;
    KEY_BLOCK_SIZE(): antlr.TerminalNode | null;
    LAMBDA(): antlr.TerminalNode | null;
    LANGUAGE(): antlr.TerminalNode | null;
    LAST(): antlr.TerminalNode | null;
    LATERAL(): antlr.TerminalNode | null;
    LEAVES(): antlr.TerminalNode | null;
    LESS(): antlr.TerminalNode | null;
    LEVEL(): antlr.TerminalNode | null;
    LIST(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    LOGFILE(): antlr.TerminalNode | null;
    LOGS(): antlr.TerminalNode | null;
    MASTER(): antlr.TerminalNode | null;
    MASTER_AUTO_POSITION(): antlr.TerminalNode | null;
    MASTER_CONNECT_RETRY(): antlr.TerminalNode | null;
    MASTER_DELAY(): antlr.TerminalNode | null;
    MASTER_HEARTBEAT_PERIOD(): antlr.TerminalNode | null;
    MASTER_HOST(): antlr.TerminalNode | null;
    MASTER_LOG_FILE(): antlr.TerminalNode | null;
    MASTER_LOG_POS(): antlr.TerminalNode | null;
    MASTER_PASSWORD(): antlr.TerminalNode | null;
    MASTER_PORT(): antlr.TerminalNode | null;
    MASTER_RETRY_COUNT(): antlr.TerminalNode | null;
    MASTER_SSL(): antlr.TerminalNode | null;
    MASTER_SSL_CA(): antlr.TerminalNode | null;
    MASTER_SSL_CAPATH(): antlr.TerminalNode | null;
    MASTER_SSL_CERT(): antlr.TerminalNode | null;
    MASTER_SSL_CIPHER(): antlr.TerminalNode | null;
    MASTER_SSL_CRL(): antlr.TerminalNode | null;
    MASTER_SSL_CRLPATH(): antlr.TerminalNode | null;
    MASTER_SSL_KEY(): antlr.TerminalNode | null;
    MASTER_TLS_VERSION(): antlr.TerminalNode | null;
    MASTER_USER(): antlr.TerminalNode | null;
    MAX_CONNECTIONS_PER_HOUR(): antlr.TerminalNode | null;
    MAX_QUERIES_PER_HOUR(): antlr.TerminalNode | null;
    MAX(): antlr.TerminalNode | null;
    MAX_ROWS(): antlr.TerminalNode | null;
    MAX_SIZE(): antlr.TerminalNode | null;
    MAX_UPDATES_PER_HOUR(): antlr.TerminalNode | null;
    MAX_USER_CONNECTIONS(): antlr.TerminalNode | null;
    MEDIUM(): antlr.TerminalNode | null;
    MEMBER(): antlr.TerminalNode | null;
    MEMORY(): antlr.TerminalNode | null;
    MERGE(): antlr.TerminalNode | null;
    MESSAGE_TEXT(): antlr.TerminalNode | null;
    MID(): antlr.TerminalNode | null;
    MIGRATE(): antlr.TerminalNode | null;
    MIN(): antlr.TerminalNode | null;
    MIN_ROWS(): antlr.TerminalNode | null;
    MODE(): antlr.TerminalNode | null;
    MODIFY(): antlr.TerminalNode | null;
    MUTEX(): antlr.TerminalNode | null;
    MYSQL(): antlr.TerminalNode | null;
    MYSQL_ERRNO(): antlr.TerminalNode | null;
    NAME(): antlr.TerminalNode | null;
    NAMES(): antlr.TerminalNode | null;
    NCHAR(): antlr.TerminalNode | null;
    NDB_STORED_USER(): antlr.TerminalNode | null;
    NESTED(): antlr.TerminalNode | null;
    NEVER(): antlr.TerminalNode | null;
    NEXT(): antlr.TerminalNode | null;
    NO(): antlr.TerminalNode | null;
    NOCOPY(): antlr.TerminalNode | null;
    NODEGROUP(): antlr.TerminalNode | null;
    NONE(): antlr.TerminalNode | null;
    NOWAIT(): antlr.TerminalNode | null;
    NUMBER(): antlr.TerminalNode | null;
    ODBC(): antlr.TerminalNode | null;
    OFFLINE(): antlr.TerminalNode | null;
    OFFSET(): antlr.TerminalNode | null;
    OF(): antlr.TerminalNode | null;
    OJ(): antlr.TerminalNode | null;
    OLD_PASSWORD(): antlr.TerminalNode | null;
    ONE(): antlr.TerminalNode | null;
    ONLINE(): antlr.TerminalNode | null;
    ONLY(): antlr.TerminalNode | null;
    OPEN(): antlr.TerminalNode | null;
    OPTIMIZER_COSTS(): antlr.TerminalNode | null;
    OPTIONAL(): antlr.TerminalNode | null;
    OPTIONS(): antlr.TerminalNode | null;
    ORDER(): antlr.TerminalNode | null;
    ORDINALITY(): antlr.TerminalNode | null;
    OWNER(): antlr.TerminalNode | null;
    PACK_KEYS(): antlr.TerminalNode | null;
    PAGE(): antlr.TerminalNode | null;
    PARSER(): antlr.TerminalNode | null;
    PARTIAL(): antlr.TerminalNode | null;
    PARTITIONING(): antlr.TerminalNode | null;
    PARTITIONS(): antlr.TerminalNode | null;
    PASSWORD(): antlr.TerminalNode | null;
    PASSWORDLESS_USER_ADMIN(): antlr.TerminalNode | null;
    PASSWORD_LOCK_TIME(): antlr.TerminalNode | null;
    PATH(): antlr.TerminalNode | null;
    PERSIST_RO_VARIABLES_ADMIN(): antlr.TerminalNode | null;
    PHASE(): antlr.TerminalNode | null;
    PLUGINS(): antlr.TerminalNode | null;
    PLUGIN_DIR(): antlr.TerminalNode | null;
    PLUGIN(): antlr.TerminalNode | null;
    PORT(): antlr.TerminalNode | null;
    PRECEDES(): antlr.TerminalNode | null;
    PREPARE(): antlr.TerminalNode | null;
    PRESERVE(): antlr.TerminalNode | null;
    PREV(): antlr.TerminalNode | null;
    PRIMARY(): antlr.TerminalNode | null;
    PROCESSLIST(): antlr.TerminalNode | null;
    PROFILE(): antlr.TerminalNode | null;
    PROFILES(): antlr.TerminalNode | null;
    PROXY(): antlr.TerminalNode | null;
    QUERY(): antlr.TerminalNode | null;
    QUICK(): antlr.TerminalNode | null;
    REBUILD(): antlr.TerminalNode | null;
    RECOVER(): antlr.TerminalNode | null;
    RECURSIVE(): antlr.TerminalNode | null;
    REDO_BUFFER_SIZE(): antlr.TerminalNode | null;
    REDUNDANT(): antlr.TerminalNode | null;
    RELAY(): antlr.TerminalNode | null;
    RELAYLOG(): antlr.TerminalNode | null;
    RELAY_LOG_FILE(): antlr.TerminalNode | null;
    RELAY_LOG_POS(): antlr.TerminalNode | null;
    REMOVE(): antlr.TerminalNode | null;
    REORGANIZE(): antlr.TerminalNode | null;
    REPAIR(): antlr.TerminalNode | null;
    REPLICATE_DO_DB(): antlr.TerminalNode | null;
    REPLICATE_DO_TABLE(): antlr.TerminalNode | null;
    REPLICATE_IGNORE_DB(): antlr.TerminalNode | null;
    REPLICATE_IGNORE_TABLE(): antlr.TerminalNode | null;
    REPLICATE_REWRITE_DB(): antlr.TerminalNode | null;
    REPLICATE_WILD_DO_TABLE(): antlr.TerminalNode | null;
    REPLICATE_WILD_IGNORE_TABLE(): antlr.TerminalNode | null;
    REPLICATION(): antlr.TerminalNode | null;
    REPLICATION_APPLIER(): antlr.TerminalNode | null;
    REPLICATION_SLAVE_ADMIN(): antlr.TerminalNode | null;
    RESET(): antlr.TerminalNode | null;
    RESOURCE_GROUP_ADMIN(): antlr.TerminalNode | null;
    RESOURCE_GROUP_USER(): antlr.TerminalNode | null;
    RESUME(): antlr.TerminalNode | null;
    RETURNED_SQLSTATE(): antlr.TerminalNode | null;
    RETURNS(): antlr.TerminalNode | null;
    REUSE(): antlr.TerminalNode | null;
    ROLE(): antlr.TerminalNode | null;
    ROLE_ADMIN(): antlr.TerminalNode | null;
    ROLLBACK(): antlr.TerminalNode | null;
    ROLLUP(): antlr.TerminalNode | null;
    ROTATE(): antlr.TerminalNode | null;
    ROW(): antlr.TerminalNode | null;
    ROWS(): antlr.TerminalNode | null;
    ROW_FORMAT(): antlr.TerminalNode | null;
    RTREE(): antlr.TerminalNode | null;
    S3(): antlr.TerminalNode | null;
    SAVEPOINT(): antlr.TerminalNode | null;
    SCHEDULE(): antlr.TerminalNode | null;
    SCHEMA_NAME(): antlr.TerminalNode | null;
    SECURITY(): antlr.TerminalNode | null;
    SECONDARY_ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
    SERIAL(): antlr.TerminalNode | null;
    SERVER(): antlr.TerminalNode | null;
    SESSION(): antlr.TerminalNode | null;
    SESSION_VARIABLES_ADMIN(): antlr.TerminalNode | null;
    SET_USER_ID(): antlr.TerminalNode | null;
    SHARE(): antlr.TerminalNode | null;
    SHARED(): antlr.TerminalNode | null;
    SHOW_ROUTINE(): antlr.TerminalNode | null;
    SIGNED(): antlr.TerminalNode | null;
    SIMPLE(): antlr.TerminalNode | null;
    SLAVE(): antlr.TerminalNode | null;
    SLOW(): antlr.TerminalNode | null;
    SKIP_QUERY_REWRITE(): antlr.TerminalNode | null;
    SNAPSHOT(): antlr.TerminalNode | null;
    SOCKET(): antlr.TerminalNode | null;
    SOME(): antlr.TerminalNode | null;
    SONAME(): antlr.TerminalNode | null;
    SOUNDS(): antlr.TerminalNode | null;
    SOURCE(): antlr.TerminalNode | null;
    SQL_AFTER_GTIDS(): antlr.TerminalNode | null;
    SQL_AFTER_MTS_GAPS(): antlr.TerminalNode | null;
    SQL_BEFORE_GTIDS(): antlr.TerminalNode | null;
    SQL_BUFFER_RESULT(): antlr.TerminalNode | null;
    SQL_CACHE(): antlr.TerminalNode | null;
    SQL_NO_CACHE(): antlr.TerminalNode | null;
    SQL_THREAD(): antlr.TerminalNode | null;
    STACKED(): antlr.TerminalNode | null;
    START(): antlr.TerminalNode | null;
    STARTS(): antlr.TerminalNode | null;
    STATS_AUTO_RECALC(): antlr.TerminalNode | null;
    STATS_PERSISTENT(): antlr.TerminalNode | null;
    STATS_SAMPLE_PAGES(): antlr.TerminalNode | null;
    STATUS(): antlr.TerminalNode | null;
    STD(): antlr.TerminalNode | null;
    STDDEV(): antlr.TerminalNode | null;
    STDDEV_POP(): antlr.TerminalNode | null;
    STDDEV_SAMP(): antlr.TerminalNode | null;
    STOP(): antlr.TerminalNode | null;
    STORAGE(): antlr.TerminalNode | null;
    STRING(): antlr.TerminalNode | null;
    SUBCLASS_ORIGIN(): antlr.TerminalNode | null;
    SUBJECT(): antlr.TerminalNode | null;
    SUBPARTITION(): antlr.TerminalNode | null;
    SUBPARTITIONS(): antlr.TerminalNode | null;
    SUM(): antlr.TerminalNode | null;
    SUSPEND(): antlr.TerminalNode | null;
    SWAPS(): antlr.TerminalNode | null;
    SWITCHES(): antlr.TerminalNode | null;
    SYSTEM_VARIABLES_ADMIN(): antlr.TerminalNode | null;
    TABLE_NAME(): antlr.TerminalNode | null;
    TABLESPACE(): antlr.TerminalNode | null;
    TABLE_ENCRYPTION_ADMIN(): antlr.TerminalNode | null;
    TABLE_TYPE(): antlr.TerminalNode | null;
    TEMPORARY(): antlr.TerminalNode | null;
    TEMPTABLE(): antlr.TerminalNode | null;
    THAN(): antlr.TerminalNode | null;
    TP_CONNECTION_ADMIN(): antlr.TerminalNode | null;
    TRADITIONAL(): antlr.TerminalNode | null;
    TRANSACTION(): antlr.TerminalNode | null;
    TRANSACTIONAL(): antlr.TerminalNode | null;
    TRIGGERS(): antlr.TerminalNode | null;
    TRUNCATE(): antlr.TerminalNode | null;
    UNBOUNDED(): antlr.TerminalNode | null;
    UNDEFINED(): antlr.TerminalNode | null;
    UNDOFILE(): antlr.TerminalNode | null;
    UNDO_BUFFER_SIZE(): antlr.TerminalNode | null;
    UNINSTALL(): antlr.TerminalNode | null;
    UNKNOWN(): antlr.TerminalNode | null;
    UNTIL(): antlr.TerminalNode | null;
    UPGRADE(): antlr.TerminalNode | null;
    USA(): antlr.TerminalNode | null;
    USER(): antlr.TerminalNode | null;
    USE_FRM(): antlr.TerminalNode | null;
    USER_RESOURCES(): antlr.TerminalNode | null;
    VALIDATION(): antlr.TerminalNode | null;
    VALUE(): antlr.TerminalNode | null;
    VAR_POP(): antlr.TerminalNode | null;
    VAR_SAMP(): antlr.TerminalNode | null;
    VARIABLES(): antlr.TerminalNode | null;
    VARIANCE(): antlr.TerminalNode | null;
    VERSION_TOKEN_ADMIN(): antlr.TerminalNode | null;
    VIEW(): antlr.TerminalNode | null;
    VIRTUAL(): antlr.TerminalNode | null;
    WAIT(): antlr.TerminalNode | null;
    WARNINGS(): antlr.TerminalNode | null;
    WITHOUT(): antlr.TerminalNode | null;
    WORK(): antlr.TerminalNode | null;
    WRAPPER(): antlr.TerminalNode | null;
    X509(): antlr.TerminalNode | null;
    XA(): antlr.TerminalNode | null;
    XA_RECOVER_ADMIN(): antlr.TerminalNode | null;
    XML(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameBaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ABS(): antlr.TerminalNode | null;
    ACOS(): antlr.TerminalNode | null;
    ADDDATE(): antlr.TerminalNode | null;
    ADDTIME(): antlr.TerminalNode | null;
    AES_DECRYPT(): antlr.TerminalNode | null;
    AES_ENCRYPT(): antlr.TerminalNode | null;
    AREA(): antlr.TerminalNode | null;
    ASBINARY(): antlr.TerminalNode | null;
    ASIN(): antlr.TerminalNode | null;
    ASTEXT(): antlr.TerminalNode | null;
    ASWKB(): antlr.TerminalNode | null;
    ASWKT(): antlr.TerminalNode | null;
    ASYMMETRIC_DECRYPT(): antlr.TerminalNode | null;
    ASYMMETRIC_DERIVE(): antlr.TerminalNode | null;
    ASYMMETRIC_ENCRYPT(): antlr.TerminalNode | null;
    ASYMMETRIC_SIGN(): antlr.TerminalNode | null;
    ASYMMETRIC_VERIFY(): antlr.TerminalNode | null;
    ATAN(): antlr.TerminalNode | null;
    ATAN2(): antlr.TerminalNode | null;
    BENCHMARK(): antlr.TerminalNode | null;
    BIN(): antlr.TerminalNode | null;
    BIT_COUNT(): antlr.TerminalNode | null;
    BIT_LENGTH(): antlr.TerminalNode | null;
    BUFFER(): antlr.TerminalNode | null;
    CEIL(): antlr.TerminalNode | null;
    CEILING(): antlr.TerminalNode | null;
    CENTROID(): antlr.TerminalNode | null;
    CHARACTER_LENGTH(): antlr.TerminalNode | null;
    CHARSET(): antlr.TerminalNode | null;
    CHAR_LENGTH(): antlr.TerminalNode | null;
    COERCIBILITY(): antlr.TerminalNode | null;
    COLLATION(): antlr.TerminalNode | null;
    COMPRESS(): antlr.TerminalNode | null;
    CONCAT(): antlr.TerminalNode | null;
    CONCAT_WS(): antlr.TerminalNode | null;
    CONNECTION_ID(): antlr.TerminalNode | null;
    CONV(): antlr.TerminalNode | null;
    CONVERT_TZ(): antlr.TerminalNode | null;
    COS(): antlr.TerminalNode | null;
    COT(): antlr.TerminalNode | null;
    COUNT(): antlr.TerminalNode | null;
    CRC32(): antlr.TerminalNode | null;
    CREATE_ASYMMETRIC_PRIV_KEY(): antlr.TerminalNode | null;
    CREATE_ASYMMETRIC_PUB_KEY(): antlr.TerminalNode | null;
    CREATE_DH_PARAMETERS(): antlr.TerminalNode | null;
    CREATE_DIGEST(): antlr.TerminalNode | null;
    CROSSES(): antlr.TerminalNode | null;
    CUME_DIST(): antlr.TerminalNode | null;
    DATABASE(): antlr.TerminalNode | null;
    DATE(): antlr.TerminalNode | null;
    DATEDIFF(): antlr.TerminalNode | null;
    DATE_FORMAT(): antlr.TerminalNode | null;
    DAY(): antlr.TerminalNode | null;
    DAYNAME(): antlr.TerminalNode | null;
    DAYOFMONTH(): antlr.TerminalNode | null;
    DAYOFWEEK(): antlr.TerminalNode | null;
    DAYOFYEAR(): antlr.TerminalNode | null;
    DECODE(): antlr.TerminalNode | null;
    DEGREES(): antlr.TerminalNode | null;
    DENSE_RANK(): antlr.TerminalNode | null;
    DES_DECRYPT(): antlr.TerminalNode | null;
    DES_ENCRYPT(): antlr.TerminalNode | null;
    DIMENSION(): antlr.TerminalNode | null;
    DISJOINT(): antlr.TerminalNode | null;
    ELT(): antlr.TerminalNode | null;
    ENCODE(): antlr.TerminalNode | null;
    ENCRYPT(): antlr.TerminalNode | null;
    ENDPOINT(): antlr.TerminalNode | null;
    ENVELOPE(): antlr.TerminalNode | null;
    EQUALS(): antlr.TerminalNode | null;
    EXP(): antlr.TerminalNode | null;
    EXPORT_SET(): antlr.TerminalNode | null;
    EXTERIORRING(): antlr.TerminalNode | null;
    EXTRACTVALUE(): antlr.TerminalNode | null;
    FIELD(): antlr.TerminalNode | null;
    FIND_IN_SET(): antlr.TerminalNode | null;
    FIRST_VALUE(): antlr.TerminalNode | null;
    FLOOR(): antlr.TerminalNode | null;
    FORMAT(): antlr.TerminalNode | null;
    FOUND_ROWS(): antlr.TerminalNode | null;
    FROM_BASE64(): antlr.TerminalNode | null;
    FROM_DAYS(): antlr.TerminalNode | null;
    FROM_UNIXTIME(): antlr.TerminalNode | null;
    GEOMCOLLFROMTEXT(): antlr.TerminalNode | null;
    GEOMCOLLFROMWKB(): antlr.TerminalNode | null;
    GEOMETRYCOLLECTION(): antlr.TerminalNode | null;
    GEOMETRYCOLLECTIONFROMTEXT(): antlr.TerminalNode | null;
    GEOMETRYCOLLECTIONFROMWKB(): antlr.TerminalNode | null;
    GEOMETRYFROMTEXT(): antlr.TerminalNode | null;
    GEOMETRYFROMWKB(): antlr.TerminalNode | null;
    GEOMETRYN(): antlr.TerminalNode | null;
    GEOMETRYTYPE(): antlr.TerminalNode | null;
    GEOMFROMTEXT(): antlr.TerminalNode | null;
    GEOMFROMWKB(): antlr.TerminalNode | null;
    GET_FORMAT(): antlr.TerminalNode | null;
    GET_LOCK(): antlr.TerminalNode | null;
    GLENGTH(): antlr.TerminalNode | null;
    GREATEST(): antlr.TerminalNode | null;
    GTID_SUBSET(): antlr.TerminalNode | null;
    GTID_SUBTRACT(): antlr.TerminalNode | null;
    HEX(): antlr.TerminalNode | null;
    HOUR(): antlr.TerminalNode | null;
    IFNULL(): antlr.TerminalNode | null;
    INET6_ATON(): antlr.TerminalNode | null;
    INET6_NTOA(): antlr.TerminalNode | null;
    INET_ATON(): antlr.TerminalNode | null;
    INET_NTOA(): antlr.TerminalNode | null;
    INSTR(): antlr.TerminalNode | null;
    INTERIORRINGN(): antlr.TerminalNode | null;
    INTERSECTS(): antlr.TerminalNode | null;
    INVISIBLE(): antlr.TerminalNode | null;
    ISCLOSED(): antlr.TerminalNode | null;
    ISEMPTY(): antlr.TerminalNode | null;
    ISNULL(): antlr.TerminalNode | null;
    ISSIMPLE(): antlr.TerminalNode | null;
    IS_FREE_LOCK(): antlr.TerminalNode | null;
    IS_IPV4(): antlr.TerminalNode | null;
    IS_IPV4_COMPAT(): antlr.TerminalNode | null;
    IS_IPV4_MAPPED(): antlr.TerminalNode | null;
    IS_IPV6(): antlr.TerminalNode | null;
    IS_USED_LOCK(): antlr.TerminalNode | null;
    LAG(): antlr.TerminalNode | null;
    LAST_INSERT_ID(): antlr.TerminalNode | null;
    LAST_VALUE(): antlr.TerminalNode | null;
    LCASE(): antlr.TerminalNode | null;
    LEAD(): antlr.TerminalNode | null;
    LEAST(): antlr.TerminalNode | null;
    LEFT(): antlr.TerminalNode | null;
    LENGTH(): antlr.TerminalNode | null;
    LINEFROMTEXT(): antlr.TerminalNode | null;
    LINEFROMWKB(): antlr.TerminalNode | null;
    LINESTRING(): antlr.TerminalNode | null;
    LINESTRINGFROMTEXT(): antlr.TerminalNode | null;
    LINESTRINGFROMWKB(): antlr.TerminalNode | null;
    LN(): antlr.TerminalNode | null;
    LOAD_FILE(): antlr.TerminalNode | null;
    LOCATE(): antlr.TerminalNode | null;
    LOG(): antlr.TerminalNode | null;
    LOG10(): antlr.TerminalNode | null;
    LOG2(): antlr.TerminalNode | null;
    LOWER(): antlr.TerminalNode | null;
    LPAD(): antlr.TerminalNode | null;
    LTRIM(): antlr.TerminalNode | null;
    MAKEDATE(): antlr.TerminalNode | null;
    MAKETIME(): antlr.TerminalNode | null;
    MAKE_SET(): antlr.TerminalNode | null;
    MASTER_POS_WAIT(): antlr.TerminalNode | null;
    MBRCONTAINS(): antlr.TerminalNode | null;
    MBRDISJOINT(): antlr.TerminalNode | null;
    MBREQUAL(): antlr.TerminalNode | null;
    MBRINTERSECTS(): antlr.TerminalNode | null;
    MBROVERLAPS(): antlr.TerminalNode | null;
    MBRTOUCHES(): antlr.TerminalNode | null;
    MBRWITHIN(): antlr.TerminalNode | null;
    MD5(): antlr.TerminalNode | null;
    MICROSECOND(): antlr.TerminalNode | null;
    MINUTE(): antlr.TerminalNode | null;
    MLINEFROMTEXT(): antlr.TerminalNode | null;
    MLINEFROMWKB(): antlr.TerminalNode | null;
    MOD(): antlr.TerminalNode | null;
    MONTH(): antlr.TerminalNode | null;
    MONTHNAME(): antlr.TerminalNode | null;
    MPOINTFROMTEXT(): antlr.TerminalNode | null;
    MPOINTFROMWKB(): antlr.TerminalNode | null;
    MPOLYFROMTEXT(): antlr.TerminalNode | null;
    MPOLYFROMWKB(): antlr.TerminalNode | null;
    MULTILINESTRING(): antlr.TerminalNode | null;
    MULTILINESTRINGFROMTEXT(): antlr.TerminalNode | null;
    MULTILINESTRINGFROMWKB(): antlr.TerminalNode | null;
    MULTIPOINT(): antlr.TerminalNode | null;
    MULTIPOINTFROMTEXT(): antlr.TerminalNode | null;
    MULTIPOINTFROMWKB(): antlr.TerminalNode | null;
    MULTIPOLYGON(): antlr.TerminalNode | null;
    MULTIPOLYGONFROMTEXT(): antlr.TerminalNode | null;
    MULTIPOLYGONFROMWKB(): antlr.TerminalNode | null;
    NAME_CONST(): antlr.TerminalNode | null;
    NTH_VALUE(): antlr.TerminalNode | null;
    NTILE(): antlr.TerminalNode | null;
    NULLIF(): antlr.TerminalNode | null;
    NUMGEOMETRIES(): antlr.TerminalNode | null;
    NUMINTERIORRINGS(): antlr.TerminalNode | null;
    NUMPOINTS(): antlr.TerminalNode | null;
    OCT(): antlr.TerminalNode | null;
    OCTET_LENGTH(): antlr.TerminalNode | null;
    ORD(): antlr.TerminalNode | null;
    OVERLAPS(): antlr.TerminalNode | null;
    PERCENT_RANK(): antlr.TerminalNode | null;
    PERIOD_ADD(): antlr.TerminalNode | null;
    PERIOD_DIFF(): antlr.TerminalNode | null;
    PI(): antlr.TerminalNode | null;
    POINT(): antlr.TerminalNode | null;
    POINTFROMTEXT(): antlr.TerminalNode | null;
    POINTFROMWKB(): antlr.TerminalNode | null;
    POINTN(): antlr.TerminalNode | null;
    POLYFROMTEXT(): antlr.TerminalNode | null;
    POLYFROMWKB(): antlr.TerminalNode | null;
    POLYGON(): antlr.TerminalNode | null;
    POLYGONFROMTEXT(): antlr.TerminalNode | null;
    POLYGONFROMWKB(): antlr.TerminalNode | null;
    POSITION(): antlr.TerminalNode | null;
    POW(): antlr.TerminalNode | null;
    POWER(): antlr.TerminalNode | null;
    QUARTER(): antlr.TerminalNode | null;
    QUOTE(): antlr.TerminalNode | null;
    RADIANS(): antlr.TerminalNode | null;
    RAND(): antlr.TerminalNode | null;
    RANDOM(): antlr.TerminalNode | null;
    RANK(): antlr.TerminalNode | null;
    RANDOM_BYTES(): antlr.TerminalNode | null;
    RELEASE_LOCK(): antlr.TerminalNode | null;
    REVERSE(): antlr.TerminalNode | null;
    RIGHT(): antlr.TerminalNode | null;
    ROUND(): antlr.TerminalNode | null;
    ROW_COUNT(): antlr.TerminalNode | null;
    ROW_NUMBER(): antlr.TerminalNode | null;
    RPAD(): antlr.TerminalNode | null;
    RTRIM(): antlr.TerminalNode | null;
    SCHEMA(): antlr.TerminalNode | null;
    SECOND(): antlr.TerminalNode | null;
    SEC_TO_TIME(): antlr.TerminalNode | null;
    SESSION_USER(): antlr.TerminalNode | null;
    SESSION_VARIABLES_ADMIN(): antlr.TerminalNode | null;
    SHA(): antlr.TerminalNode | null;
    SHA1(): antlr.TerminalNode | null;
    SHA2(): antlr.TerminalNode | null;
    SIGN(): antlr.TerminalNode | null;
    SIN(): antlr.TerminalNode | null;
    SLEEP(): antlr.TerminalNode | null;
    SOUNDEX(): antlr.TerminalNode | null;
    SQL_THREAD_WAIT_AFTER_GTIDS(): antlr.TerminalNode | null;
    SQRT(): antlr.TerminalNode | null;
    SRID(): antlr.TerminalNode | null;
    STARTPOINT(): antlr.TerminalNode | null;
    STRCMP(): antlr.TerminalNode | null;
    STR_TO_DATE(): antlr.TerminalNode | null;
    ST_AREA(): antlr.TerminalNode | null;
    ST_ASBINARY(): antlr.TerminalNode | null;
    ST_ASTEXT(): antlr.TerminalNode | null;
    ST_ASWKB(): antlr.TerminalNode | null;
    ST_ASWKT(): antlr.TerminalNode | null;
    ST_BUFFER(): antlr.TerminalNode | null;
    ST_CENTROID(): antlr.TerminalNode | null;
    ST_CONTAINS(): antlr.TerminalNode | null;
    ST_CROSSES(): antlr.TerminalNode | null;
    ST_DIFFERENCE(): antlr.TerminalNode | null;
    ST_DIMENSION(): antlr.TerminalNode | null;
    ST_DISJOINT(): antlr.TerminalNode | null;
    ST_DISTANCE(): antlr.TerminalNode | null;
    ST_ENDPOINT(): antlr.TerminalNode | null;
    ST_ENVELOPE(): antlr.TerminalNode | null;
    ST_EQUALS(): antlr.TerminalNode | null;
    ST_EXTERIORRING(): antlr.TerminalNode | null;
    ST_GEOMCOLLFROMTEXT(): antlr.TerminalNode | null;
    ST_GEOMCOLLFROMTXT(): antlr.TerminalNode | null;
    ST_GEOMCOLLFROMWKB(): antlr.TerminalNode | null;
    ST_GEOMETRYCOLLECTIONFROMTEXT(): antlr.TerminalNode | null;
    ST_GEOMETRYCOLLECTIONFROMWKB(): antlr.TerminalNode | null;
    ST_GEOMETRYFROMTEXT(): antlr.TerminalNode | null;
    ST_GEOMETRYFROMWKB(): antlr.TerminalNode | null;
    ST_GEOMETRYN(): antlr.TerminalNode | null;
    ST_GEOMETRYTYPE(): antlr.TerminalNode | null;
    ST_GEOMFROMTEXT(): antlr.TerminalNode | null;
    ST_GEOMFROMWKB(): antlr.TerminalNode | null;
    ST_INTERIORRINGN(): antlr.TerminalNode | null;
    ST_INTERSECTION(): antlr.TerminalNode | null;
    ST_INTERSECTS(): antlr.TerminalNode | null;
    ST_ISCLOSED(): antlr.TerminalNode | null;
    ST_ISEMPTY(): antlr.TerminalNode | null;
    ST_ISSIMPLE(): antlr.TerminalNode | null;
    ST_LINEFROMTEXT(): antlr.TerminalNode | null;
    ST_LINEFROMWKB(): antlr.TerminalNode | null;
    ST_LINESTRINGFROMTEXT(): antlr.TerminalNode | null;
    ST_LINESTRINGFROMWKB(): antlr.TerminalNode | null;
    ST_NUMGEOMETRIES(): antlr.TerminalNode | null;
    ST_NUMINTERIORRING(): antlr.TerminalNode | null;
    ST_NUMINTERIORRINGS(): antlr.TerminalNode | null;
    ST_NUMPOINTS(): antlr.TerminalNode | null;
    ST_OVERLAPS(): antlr.TerminalNode | null;
    ST_POINTFROMTEXT(): antlr.TerminalNode | null;
    ST_POINTFROMWKB(): antlr.TerminalNode | null;
    ST_POINTN(): antlr.TerminalNode | null;
    ST_POLYFROMTEXT(): antlr.TerminalNode | null;
    ST_POLYFROMWKB(): antlr.TerminalNode | null;
    ST_POLYGONFROMTEXT(): antlr.TerminalNode | null;
    ST_POLYGONFROMWKB(): antlr.TerminalNode | null;
    ST_SRID(): antlr.TerminalNode | null;
    ST_STARTPOINT(): antlr.TerminalNode | null;
    ST_SYMDIFFERENCE(): antlr.TerminalNode | null;
    ST_TOUCHES(): antlr.TerminalNode | null;
    ST_UNION(): antlr.TerminalNode | null;
    ST_WITHIN(): antlr.TerminalNode | null;
    ST_X(): antlr.TerminalNode | null;
    ST_Y(): antlr.TerminalNode | null;
    SUBDATE(): antlr.TerminalNode | null;
    SUBSTRING_INDEX(): antlr.TerminalNode | null;
    SUBTIME(): antlr.TerminalNode | null;
    SYSTEM_USER(): antlr.TerminalNode | null;
    TAN(): antlr.TerminalNode | null;
    TIME(): antlr.TerminalNode | null;
    TIMEDIFF(): antlr.TerminalNode | null;
    TIMESTAMP(): antlr.TerminalNode | null;
    TIMESTAMPADD(): antlr.TerminalNode | null;
    TIMESTAMPDIFF(): antlr.TerminalNode | null;
    TIME_FORMAT(): antlr.TerminalNode | null;
    TIME_TO_SEC(): antlr.TerminalNode | null;
    TOUCHES(): antlr.TerminalNode | null;
    TO_BASE64(): antlr.TerminalNode | null;
    TO_DAYS(): antlr.TerminalNode | null;
    TO_SECONDS(): antlr.TerminalNode | null;
    UCASE(): antlr.TerminalNode | null;
    UNCOMPRESS(): antlr.TerminalNode | null;
    UNCOMPRESSED_LENGTH(): antlr.TerminalNode | null;
    UNHEX(): antlr.TerminalNode | null;
    UNIX_TIMESTAMP(): antlr.TerminalNode | null;
    UPDATEXML(): antlr.TerminalNode | null;
    UPPER(): antlr.TerminalNode | null;
    UUID(): antlr.TerminalNode | null;
    UUID_SHORT(): antlr.TerminalNode | null;
    VALIDATE_PASSWORD_STRENGTH(): antlr.TerminalNode | null;
    VERSION(): antlr.TerminalNode | null;
    VISIBLE(): antlr.TerminalNode | null;
    WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS(): antlr.TerminalNode | null;
    WEEK(): antlr.TerminalNode | null;
    WEEKDAY(): antlr.TerminalNode | null;
    WEEKOFYEAR(): antlr.TerminalNode | null;
    WEIGHT_STRING(): antlr.TerminalNode | null;
    WITHIN(): antlr.TerminalNode | null;
    YEAR(): antlr.TerminalNode | null;
    YEARWEEK(): antlr.TerminalNode | null;
    Y_FUNCTION(): antlr.TerminalNode | null;
    X_FUNCTION(): antlr.TerminalNode | null;
    JSON_ARRAY(): antlr.TerminalNode | null;
    JSON_OBJECT(): antlr.TerminalNode | null;
    JSON_QUOTE(): antlr.TerminalNode | null;
    JSON_CONTAINS(): antlr.TerminalNode | null;
    JSON_CONTAINS_PATH(): antlr.TerminalNode | null;
    JSON_EXTRACT(): antlr.TerminalNode | null;
    JSON_KEYS(): antlr.TerminalNode | null;
    JSON_OVERLAPS(): antlr.TerminalNode | null;
    JSON_SEARCH(): antlr.TerminalNode | null;
    JSON_VALUE(): antlr.TerminalNode | null;
    JSON_ARRAY_APPEND(): antlr.TerminalNode | null;
    JSON_ARRAY_INSERT(): antlr.TerminalNode | null;
    JSON_INSERT(): antlr.TerminalNode | null;
    JSON_MERGE(): antlr.TerminalNode | null;
    JSON_MERGE_PATCH(): antlr.TerminalNode | null;
    JSON_MERGE_PRESERVE(): antlr.TerminalNode | null;
    JSON_REMOVE(): antlr.TerminalNode | null;
    JSON_REPLACE(): antlr.TerminalNode | null;
    JSON_SET(): antlr.TerminalNode | null;
    JSON_UNQUOTE(): antlr.TerminalNode | null;
    JSON_DEPTH(): antlr.TerminalNode | null;
    JSON_LENGTH(): antlr.TerminalNode | null;
    JSON_TYPE(): antlr.TerminalNode | null;
    JSON_VALID(): antlr.TerminalNode | null;
    JSON_TABLE(): antlr.TerminalNode | null;
    JSON_SCHEMA_VALID(): antlr.TerminalNode | null;
    JSON_SCHEMA_VALIDATION_REPORT(): antlr.TerminalNode | null;
    JSON_PRETTY(): antlr.TerminalNode | null;
    JSON_STORAGE_FREE(): antlr.TerminalNode | null;
    JSON_STORAGE_SIZE(): antlr.TerminalNode | null;
    JSON_ARRAYAGG(): antlr.TerminalNode | null;
    JSON_OBJECTAGG(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: MySqlParserListener): void;
    exitRule(listener: MySqlParserListener): void;
    accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
