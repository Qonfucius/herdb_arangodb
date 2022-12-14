export enum QUERY_ERROR {
  NO_ERROR = 0,
  FAILED = 1,
  SYS_ERROR = 2,
  OUT_OF_MEMORY = 3,
  INTERNAL = 4,
  ILLEGAL_NUMBER = 5,
  NUMERIC_OVERFLOW = 6,
  ILLEGAL_OPTION = 7,
  DEAD_PID = 8,
  NOT_IMPLEMENTED = 9,
  BAD_PARAMETER = 10,
  FORBIDDEN = 11,
  OUT_OF_MEMORY_MMAP = 12,
  CORRUPTED_CSV = 13,
  FILE_NOT_FOUND = 14,
  CANNOT_WRITE_FILE = 15,
  CANNOT_OVERWRITE_FILE = 16,
  TYPE_ERROR = 17,
  LOCK_TIMEOUT = 18,
  CANNOT_CREATE_DIRECTORY = 19,
  CANNOT_CREATE_TEMP_FILE = 20,
  REQUEST_CANCELED = 21,
  DEBUG = 22,
  IP_ADDRESS_INVALID = 25,
  FILE_EXISTS = 27,
  LOCKED = 28,
  DEADLOCK = 29,
  SHUTTING_DOWN = 30,
  ONLY_ENTERPRISE = 31,
  RESOURCE_LIMIT = 32,
  ARANGO_ICU_ERROR = 33,
  CANNOT_READ_FILE = 34,
  INCOMPATIBLE_VERSION = 35,
  DISABLED = 36,
  MALFORMED_JSON = 37,
  STARTING_UP = 38,
  HTTP_BAD_PARAMETER = 400,
  HTTP_UNAUTHORIZED = 401,
  HTTP_FORBIDDEN = 403,
  HTTP_NOT_FOUND = 404,
  HTTP_METHOD_NOT_ALLOWED = 405,
  HTTP_NOT_ACCEPTABLE = 406,
  HTTP_REQUEST_TIMEOUT = 408,
  HTTP_CONFLICT = 409,
  HTTP_GONE = 410,
  HTTP_PRECONDITION_FAILED = 412,
  HTTP_SERVER_ERROR = 500,
  HTTP_NOT_IMPLEMENTED = 501,
  HTTP_SERVICE_UNAVAILABLE = 503,
  HTTP_GATEWAY_TIMEOUT = 504,
  HTTP_CORRUPTED_JSON = 600,
  HTTP_SUPERFLUOUS_SUFFICES = 601,
  ARANGO_ILLEGAL_STATE = 1000,
  ARANGO_DATAFILE_SEALED = 1002,
  ARANGO_READ_ONLY = 1004,
  ARANGO_DUPLICATE_IDENTIFIER = 1005,
  ARANGO_DATAFILE_UNREADABLE = 1006,
  ARANGO_DATAFILE_EMPTY = 1007,
  ARANGO_RECOVERY = 1008,
  ARANGO_DATAFILE_STATISTICS_NOT_FOUND = 1009,
  ARANGO_CORRUPTED_DATAFILE = 1100,
  ARANGO_ILLEGAL_PARAMETER_FILE = 1101,
  ARANGO_CORRUPTED_COLLECTION = 1102,
  ARANGO_MMAP_FAILED = 1103,
  ARANGO_FILESYSTEM_FULL = 1104,
  ARANGO_NO_JOURNAL = 1105,
  ARANGO_DATAFILE_ALREADY_EXISTS = 1106,
  ARANGO_DATADIR_LOCKED = 1107,
  ARANGO_COLLECTION_DIRECTORY_ALREADY_EXISTS = 1108,
  ARANGO_MSYNC_FAILED = 1109,
  ARANGO_DATADIR_UNLOCKABLE = 1110,
  ARANGO_SYNC_TIMEOUT = 1111,
  ARANGO_CONFLICT = 1200,
  ARANGO_DATADIR_INVALID = 1201,
  ARANGO_DOCUMENT_NOT_FOUND = 1202,
  ARANGO_DATA_SOURCE_NOT_FOUND = 1203,
  ARANGO_COLLECTION_PARAMETER_MISSING = 1204,
  ARANGO_DOCUMENT_HANDLE_BAD = 1205,
  ARANGO_MAXIMAL_SIZE_TOO_SMALL = 1206,
  ARANGO_DUPLICATE_NAME = 1207,
  ARANGO_ILLEGAL_NAME = 1208,
  ARANGO_NO_INDEX = 1209,
  ARANGO_UNIQUE_CONSTRAINT_VIOLATED = 1210,
  ARANGO_INDEX_NOT_FOUND = 1212,
  ARANGO_CROSS_COLLECTION_REQUEST = 1213,
  ARANGO_INDEX_HANDLE_BAD = 1214,
  ARANGO_DOCUMENT_TOO_LARGE = 1216,
  ARANGO_COLLECTION_NOT_UNLOADED = 1217,
  ARANGO_COLLECTION_TYPE_INVALID = 1218,
  ARANGO_ATTRIBUTE_PARSER_FAILED = 1220,
  ARANGO_DOCUMENT_KEY_BAD = 1221,
  ARANGO_DOCUMENT_KEY_UNEXPECTED = 1222,
  ARANGO_DATADIR_NOT_WRITABLE = 1224,
  ARANGO_OUT_OF_KEYS = 1225,
  ARANGO_DOCUMENT_KEY_MISSING = 1226,
  ARANGO_DOCUMENT_TYPE_INVALID = 1227,
  ARANGO_DATABASE_NOT_FOUND = 1228,
  ARANGO_DATABASE_NAME_INVALID = 1229,
  ARANGO_USE_SYSTEM_DATABASE = 1230,
  ARANGO_INVALID_KEY_GENERATOR = 1232,
  ARANGO_INVALID_EDGE_ATTRIBUTE = 1233,
  ARANGO_INDEX_CREATION_FAILED = 1235,
  ARANGO_WRITE_THROTTLE_TIMEOUT = 1236,
  ARANGO_COLLECTION_TYPE_MISMATCH = 1237,
  ARANGO_COLLECTION_NOT_LOADED = 1238,
  ARANGO_DOCUMENT_REV_BAD = 1239,
  ARANGO_INCOMPLETE_READ = 1240,
  ARANGO_DATAFILE_FULL = 1300,
  ARANGO_EMPTY_DATADIR = 1301,
  ARANGO_TRY_AGAIN = 1302,
  ARANGO_BUSY = 1303,
  ARANGO_MERGE_IN_PROGRESS = 1304,
  ARANGO_IO_ERROR = 1305,
  REPLICATION_NO_RESPONSE = 1400,
  REPLICATION_INVALID_RESPONSE = 1401,
  REPLICATION_LEADER_ERROR = 1402,
  REPLICATION_LEADER_INCOMPATIBLE = 1403,
  REPLICATION_LEADER_CHANGE = 1404,
  REPLICATION_LOOP = 1405,
  REPLICATION_UNEXPECTED_MARKER = 1406,
  REPLICATION_INVALID_APPLIER_STATE = 1407,
  REPLICATION_UNEXPECTED_TRANSACTION = 1408,
  REPLICATION_SHARD_SYNC_ATTEMPT_TIMEOUT_EXCEEDED = 1409,
  REPLICATION_INVALID_APPLIER_CONFIGURATION = 1410,
  REPLICATION_RUNNING = 1411,
  REPLICATION_APPLIER_STOPPED = 1412,
  REPLICATION_NO_START_TICK = 1413,
  REPLICATION_START_TICK_NOT_PRESENT = 1414,
  REPLICATION_WRONG_CHECKSUM = 1416,
  REPLICATION_SHARD_NONEMPTY = 1417,
  REPLICATION_REPLICATED_LOG_NOT_FOUND = 1418,
  REPLICATION_REPLICATED_LOG_NOT_THE_LEADER = 1419,
  REPLICATION_REPLICATED_LOG_NOT_A_FOLLOWER = 1420,
  REPLICATION_REPLICATED_LOG_APPEND_ENTRIES_REJECTED = 1421,
  REPLICATION_REPLICATED_LOG_LEADER_RESIGNED = 1422,
  REPLICATION_REPLICATED_LOG_FOLLOWER_RESIGNED = 1423,
  REPLICATION_REPLICATED_LOG_PARTICIPANT_GONE = 1424,
  REPLICATION_REPLICATED_LOG_INVALID_TERM = 1425,
  CLUSTER_NOT_FOLLOWER = 1446,
  CLUSTER_FOLLOWER_TRANSACTION_COMMIT_PERFORMED = 1447,
  CLUSTER_CREATE_COLLECTION_PRECONDITION_FAILED = 1448,
  CLUSTER_SERVER_UNKNOWN = 1449,
  CLUSTER_TOO_MANY_SHARDS = 1450,
  CLUSTER_COULD_NOT_CREATE_COLLECTION_IN_PLAN = 1454,
  CLUSTER_COULD_NOT_CREATE_COLLECTION = 1456,
  CLUSTER_TIMEOUT = 1457,
  CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_PLAN = 1458,
  CLUSTER_COULD_NOT_CREATE_DATABASE_IN_PLAN = 1460,
  CLUSTER_COULD_NOT_CREATE_DATABASE = 1461,
  CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_PLAN = 1462,
  CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_CURRENT = 1463,
  CLUSTER_SHARD_GONE = 1464,
  CLUSTER_CONNECTION_LOST = 1465,
  CLUSTER_MUST_NOT_SPECIFY_KEY = 1466,
  CLUSTER_GOT_CONTRADICTING_ANSWERS = 1467,
  CLUSTER_NOT_ALL_SHARDING_ATTRIBUTES_GIVEN = 1468,
  CLUSTER_MUST_NOT_CHANGE_SHARDING_ATTRIBUTES = 1469,
  CLUSTER_UNSUPPORTED = 1470,
  CLUSTER_ONLY_ON_COORDINATOR = 1471,
  CLUSTER_READING_PLAN_AGENCY = 1472,
  CLUSTER_COULD_NOT_TRUNCATE_COLLECTION = 1473,
  CLUSTER_AQL_COMMUNICATION = 1474,
  CLUSTER_ONLY_ON_DBSERVER = 1477,
  CLUSTER_BACKEND_UNAVAILABLE = 1478,
  CLUSTER_AQL_COLLECTION_OUT_OF_SYNC = 1481,
  CLUSTER_COULD_NOT_CREATE_INDEX_IN_PLAN = 1482,
  CLUSTER_COULD_NOT_DROP_INDEX_IN_PLAN = 1483,
  CLUSTER_CHAIN_OF_DISTRIBUTESHARDSLIKE = 1484,
  CLUSTER_MUST_NOT_DROP_COLL_OTHER_DISTRIBUTESHARDSLIKE = 1485,
  CLUSTER_UNKNOWN_DISTRIBUTESHARDSLIKE = 1486,
  CLUSTER_INSUFFICIENT_DBSERVERS = 1487,
  CLUSTER_COULD_NOT_DROP_FOLLOWER = 1488,
  CLUSTER_SHARD_LEADER_REFUSES_REPLICATION = 1489,
  CLUSTER_SHARD_FOLLOWER_REFUSES_OPERATION = 1490,
  CLUSTER_SHARD_LEADER_RESIGNED = 1491,
  CLUSTER_AGENCY_COMMUNICATION_FAILED = 1492,
  CLUSTER_LEADERSHIP_CHALLENGE_ONGOING = 1495,
  CLUSTER_NOT_LEADER = 1496,
  CLUSTER_COULD_NOT_CREATE_VIEW_IN_PLAN = 1497,
  CLUSTER_VIEW_ID_EXISTS = 1498,
  CLUSTER_COULD_NOT_DROP_COLLECTION = 1499,
  QUERY_KILLED = 1500,
  QUERY_PARSE = 1501,
  QUERY_EMPTY = 1502,
  QUERY_SCRIPT = 1503,
  QUERY_NUMBER_OUT_OF_RANGE = 1504,
  QUERY_INVALID_GEO_VALUE = 1505,
  QUERY_VARIABLE_NAME_INVALID = 1510,
  QUERY_VARIABLE_REDECLARED = 1511,
  QUERY_VARIABLE_NAME_UNKNOWN = 1512,
  QUERY_COLLECTION_LOCK_FAILED = 1521,
  QUERY_TOO_MANY_COLLECTIONS = 1522,
  QUERY_TOO_MUCH_NESTING = 1524,
  QUERY_INVALID_OPTIONS_ATTRIBUTE = 1539,
  QUERY_FUNCTION_NAME_UNKNOWN = 1540,
  QUERY_FUNCTION_ARGUMENT_NUMBER_MISMATCH = 1541,
  QUERY_FUNCTION_ARGUMENT_TYPE_MISMATCH = 1542,
  QUERY_INVALID_REGEX = 1543,
  QUERY_BIND_PARAMETERS_INVALID = 1550,
  QUERY_BIND_PARAMETER_MISSING = 1551,
  QUERY_BIND_PARAMETER_UNDECLARED = 1552,
  QUERY_BIND_PARAMETER_TYPE = 1553,
  QUERY_INVALID_ARITHMETIC_VALUE = 1561,
  QUERY_DIVISION_BY_ZERO = 1562,
  QUERY_ARRAY_EXPECTED = 1563,
  QUERY_COLLECTION_USED_IN_EXPRESSION = 1568,
  QUERY_FAIL_CALLED = 1569,
  QUERY_GEO_INDEX_MISSING = 1570,
  QUERY_FULLTEXT_INDEX_MISSING = 1571,
  QUERY_INVALID_DATE_VALUE = 1572,
  QUERY_MULTI_MODIFY = 1573,
  QUERY_INVALID_AGGREGATE_EXPRESSION = 1574,
  QUERY_COMPILE_TIME_OPTIONS = 1575,
  QUERY_FORCED_INDEX_HINT_UNUSABLE = 1577,
  QUERY_DISALLOWED_DYNAMIC_CALL = 1578,
  QUERY_ACCESS_AFTER_MODIFICATION = 1579,
  QUERY_FUNCTION_INVALID_NAME = 1580,
  QUERY_FUNCTION_INVALID_CODE = 1581,
  QUERY_FUNCTION_NOT_FOUND = 1582,
  QUERY_FUNCTION_RUNTIME_ERROR = 1583,
  QUERY_BAD_JSON_PLAN = 1590,
  QUERY_NOT_FOUND = 1591,
  QUERY_USER_ASSERT = 1593,
  QUERY_USER_WARN = 1594,
  QUERY_WINDOW_AFTER_MODIFICATION = 1595,
  CURSOR_NOT_FOUND = 1600,
  CURSOR_BUSY = 1601,
  VALIDATION_FAILED = 1620,
  VALIDATION_BAD_PARAMETER = 1621,
  TRANSACTION_INTERNAL = 1650,
  TRANSACTION_NESTED = 1651,
  TRANSACTION_UNREGISTERED_COLLECTION = 1652,
  TRANSACTION_DISALLOWED_OPERATION = 1653,
  TRANSACTION_ABORTED = 1654,
  TRANSACTION_NOT_FOUND = 1655,
  USER_INVALID_NAME = 1700,
  USER_DUPLICATE = 1702,
  USER_NOT_FOUND = 1703,
  USER_EXTERNAL = 1705,
  SERVICE_DOWNLOAD_FAILED = 1752,
  SERVICE_UPLOAD_FAILED = 1753,
  LDAP_CANNOT_INIT = 1800,
  LDAP_CANNOT_SET_OPTION = 1801,
  LDAP_CANNOT_BIND = 1802,
  LDAP_CANNOT_UNBIND = 1803,
  LDAP_CANNOT_SEARCH = 1804,
  LDAP_CANNOT_START_TLS = 1805,
  LDAP_FOUND_NO_OBJECTS = 1806,
  LDAP_NOT_ONE_USER_FOUND = 1807,
  LDAP_USER_NOT_IDENTIFIED = 1808,
  LDAP_OPERATIONS_ERROR = 1809,
  LDAP_INVALID_MODE = 1820,
  TASK_INVALID_ID = 1850,
  TASK_DUPLICATE_ID = 1851,
  TASK_NOT_FOUND = 1852,
  GRAPH_INVALID_GRAPH = 1901,
  GRAPH_INVALID_EDGE = 1906,
  GRAPH_TOO_MANY_ITERATIONS = 1909,
  GRAPH_INVALID_FILTER_RESULT = 1910,
  GRAPH_COLLECTION_MULTI_USE = 1920,
  GRAPH_COLLECTION_USE_IN_MULTI_GRAPHS = 1921,
  GRAPH_CREATE_MISSING_NAME = 1922,
  GRAPH_CREATE_MALFORMED_EDGE_DEFINITION = 1923,
  GRAPH_NOT_FOUND = 1924,
  GRAPH_DUPLICATE = 1925,
  GRAPH_VERTEX_COL_DOES_NOT_EXIST = 1926,
  GRAPH_WRONG_COLLECTION_TYPE_VERTEX = 1927,
  GRAPH_NOT_IN_ORPHAN_COLLECTION = 1928,
  GRAPH_COLLECTION_USED_IN_EDGE_DEF = 1929,
  GRAPH_EDGE_COLLECTION_NOT_USED = 1930,
  GRAPH_NO_GRAPH_COLLECTION = 1932,
  GRAPH_INVALID_NUMBER_OF_ARGUMENTS = 1935,
  GRAPH_INVALID_PARAMETER = 1936,
  GRAPH_COLLECTION_USED_IN_ORPHANS = 1938,
  GRAPH_EDGE_COL_DOES_NOT_EXIST = 1939,
  GRAPH_EMPTY = 1940,
  GRAPH_INTERNAL_DATA_CORRUPT = 1941,
  GRAPH_CREATE_MALFORMED_ORPHAN_LIST = 1943,
  GRAPH_EDGE_DEFINITION_IS_DOCUMENT = 1944,
  GRAPH_COLLECTION_IS_INITIAL = 1945,
  GRAPH_NO_INITIAL_COLLECTION = 1946,
  GRAPH_REFERENCED_VERTEX_COLLECTION_NOT_USED = 1947,
  GRAPH_NEGATIVE_EDGE_WEIGHT = 1948,
  SESSION_UNKNOWN = 1950,
  SESSION_EXPIRED = 1951,
  SIMPLE_CLIENT_UNKNOWN_ERROR = 2000,
  SIMPLE_CLIENT_COULD_NOT_CONNECT = 2001,
  SIMPLE_CLIENT_COULD_NOT_WRITE = 2002,
  SIMPLE_CLIENT_COULD_NOT_READ = 2003,
  WAS_ERLAUBE = 2019,
  INTERNAL_AQL = 2200,
  WROTE_TOO_FEW_OUTPUT_REGISTERS = 2201,
  WROTE_TOO_MANY_OUTPUT_REGISTERS = 2202,
  WROTE_OUTPUT_REGISTER_TWICE = 2203,
  WROTE_IN_WRONG_REGISTER = 2204,
  INPUT_REGISTERS_NOT_COPIED = 2205,
  MALFORMED_MANIFEST_FILE = 3000,
  INVALID_SERVICE_MANIFEST = 3001,
  SERVICE_FILES_MISSING = 3002,
  SERVICE_FILES_OUTDATED = 3003,
  INVALID_FOXX_OPTIONS = 3004,
  INVALID_MOUNTPOINT = 3007,
  SERVICE_NOT_FOUND = 3009,
  SERVICE_NEEDS_CONFIGURATION = 3010,
  SERVICE_MOUNTPOINT_CONFLICT = 3011,
  SERVICE_MANIFEST_NOT_FOUND = 3012,
  SERVICE_OPTIONS_MALFORMED = 3013,
  SERVICE_SOURCE_NOT_FOUND = 3014,
  SERVICE_SOURCE_ERROR = 3015,
  SERVICE_UNKNOWN_SCRIPT = 3016,
  SERVICE_API_DISABLED = 3099,
  MODULE_NOT_FOUND = 3100,
  MODULE_SYNTAX_ERROR = 3101,
  MODULE_FAILURE = 3103,
  NO_SMART_COLLECTION = 4000,
  NO_SMART_GRAPH_ATTRIBUTE = 4001,
  CANNOT_DROP_SMART_COLLECTION = 4002,
  KEY_MUST_BE_PREFIXED_WITH_SMART_GRAPH_ATTRIBUTE = 4003,
  ILLEGAL_SMART_GRAPH_ATTRIBUTE = 4004,
  SMART_GRAPH_ATTRIBUTE_MISMATCH = 4005,
  INVALID_SMART_JOIN_ATTRIBUTE = 4006,
  KEY_MUST_BE_PREFIXED_WITH_SMART_JOIN_ATTRIBUTE = 4007,
  NO_SMART_JOIN_ATTRIBUTE = 4008,
  CLUSTER_MUST_NOT_CHANGE_SMART_JOIN_ATTRIBUTE = 4009,
  INVALID_DISJOINT_SMART_EDGE = 4010,
  UNSUPPORTED_CHANGE_IN_SMART_TO_SATELLITE_DISJOINT_EDGE_DIRECTION = 4011,
  AGENCY_MALFORMED_GOSSIP_MESSAGE = 20001,
  AGENCY_MALFORMED_INQUIRE_REQUEST = 20002,
  AGENCY_INFORM_MUST_BE_OBJECT = 20011,
  AGENCY_INFORM_MUST_CONTAIN_TERM = 20012,
  AGENCY_INFORM_MUST_CONTAIN_ID = 20013,
  AGENCY_INFORM_MUST_CONTAIN_ACTIVE = 20014,
  AGENCY_INFORM_MUST_CONTAIN_POOL = 20015,
  AGENCY_INFORM_MUST_CONTAIN_MIN_PING = 20016,
  AGENCY_INFORM_MUST_CONTAIN_MAX_PING = 20017,
  AGENCY_INFORM_MUST_CONTAIN_TIMEOUT_MULT = 20018,
  AGENCY_CANNOT_REBUILD_DBS = 20021,
  AGENCY_MALFORMED_TRANSACTION = 20030,
  SUPERVISION_GENERAL_FAILURE = 20501,
  QUEUE_FULL = 21003,
  QUEUE_TIME_REQUIREMENT_VIOLATED = 21004,
  ACTION_OPERATION_UNABORTABLE = 6002,
  ACTION_UNFINISHED = 6003,
  HOT_BACKUP_INTERNAL = 7001,
  HOT_RESTORE_INTERNAL = 7002,
  BACKUP_TOPOLOGY = 7003,
  NO_SPACE_LEFT_ON_DEVICE = 7004,
  FAILED_TO_UPLOAD_BACKUP = 7005,
  FAILED_TO_DOWNLOAD_BACKUP = 7006,
  NO_SUCH_HOT_BACKUP = 7007,
  REMOTE_REPOSITORY_CONFIG_BAD = 7008,
  LOCAL_LOCK_FAILED = 7009,
  LOCAL_LOCK_RETRY = 7010,
  HOT_BACKUP_CONFLICT = 7011,
  HOT_BACKUP_DBSERVERS_AWOL = 7012,
  CLUSTER_COULD_NOT_MODIFY_ANALYZERS_IN_PLAN = 7021,
  AIR_EXECUTION_ERROR = 8001,
  LICENSE_EXPIRED_OR_INVALID = 9001,
  LICENSE_SIGNATURE_VERIFICATION = 9002,
  LICENSE_NON_MATCHING_ID = 9003,
  LICENSE_FEATURE_NOT_ENABLED = 9004,
  LICENSE_RESOURCE_EXHAUSTED = 9005,
  LICENSE_INVALID = 9006,
  LICENSE_CONFLICT = 9007,
  LICENSE_VALIDATION_FAILED = 9008,
}
