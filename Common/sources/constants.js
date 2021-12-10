/*
 * (c) Copyright Ascensio System SIA 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

'use strict';

exports.DOC_ID_PATTERN = '0-9-.a-zA-Z_=';
exports.DOC_ID_REGEX = new RegExp("^[" + exports.DOC_ID_PATTERN + "]*$", 'i');
exports.DOC_ID_REPLACE_REGEX = new RegExp("[^" + exports.DOC_ID_PATTERN + "]", 'g');
exports.DOC_ID_MAX_LENGTH = 240;
exports.USER_ID_MAX_LENGTH = 240;//255-240=15 symbols to make user id unique
exports.USER_NAME_MAX_LENGTH = 255;
exports.PASSWORD_MAX_LENGTH = 255;//set password limit for DoS protection with long password
exports.EXTENTION_REGEX = /^[a-zA-Z0-9]*$/;
exports.CHAR_DELIMITER = String.fromCharCode(5);
exports.OUTPUT_NAME = 'output';
exports.ONLY_OFFICE_URL_PARAM = 'ooname';
exports.DISPLAY_PREFIX = 'display';
exports.CHANGES_NAME = 'changes';

exports.RIGHTS = {
  None    : 0,
  Edit    : 1,
  Review  : 2,
  Comment : 3,
  View    : 4
};

exports.LICENSE_MODE = {
  None: 0,
  Trial: 1,
  Developer: 2,
  Limited: 4
};

exports.LICENSE_RESULT = {
  Error         : 1,
  Expired       : 2,
  Success       : 3,
  UnknownUser   : 4,
  Connections   : 5,
  ExpiredTrial  : 6,
  SuccessLimit  : 7,
  UsersCount    : 8,
  ConnectionsOS : 9,
  UsersCountOS  : 10,
  ExpiredLimited: 11
};

exports.LICENSE_CONNECTIONS = 20;
exports.LICENSE_EXPIRE_USERS_ONE_DAY = 24 * 60 * 60; // day in seconds

exports.AVS_OFFICESTUDIO_FILE_UNKNOWN =  0x0000;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT = 0x0040;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_DOCX = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0001;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_DOC = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0002;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_ODT = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0003;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_RTF = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0004;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_TXT = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0005;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_HTML = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0006;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_MHT = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0007;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_EPUB = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0008;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_FB2 = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0009;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_MOBI = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x000a;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_DOCM = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x000b;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_DOTX = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x000c;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_DOTM = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x000d;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_ODT_FLAT = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x000e;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_OTT = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x000f;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_DOC_FLAT = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0010;
exports.AVS_OFFICESTUDIO_FILE_DOCUMENT_HTML_IN_CONTAINER = exports.AVS_OFFICESTUDIO_FILE_DOCUMENT + 0x0011;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION = 0x0080;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_PPTX = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0001;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_PPT = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0002;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_ODP = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0003;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_PPSX = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0004;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_PPTM = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0005;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_PPSM = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0006;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_POTX = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0007;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_POTM = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0008;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_ODP_FLAT = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x0009;
exports.AVS_OFFICESTUDIO_FILE_PRESENTATION_OTP = exports.AVS_OFFICESTUDIO_FILE_PRESENTATION + 0x000a;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET = 0x0100;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_XLSX = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0001;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_XLS = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0002;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_ODS = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0003;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_CSV = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0004;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_XLSM = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0005;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_XLTX = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0006;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_XLTM = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0007;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_ODS_FLAT = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0008;
exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET_OTS = exports.AVS_OFFICESTUDIO_FILE_SPREADSHEET + 0x0009;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM = 0x0200;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_PDF = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0001;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_SWF = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0002;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_DJVU = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0003;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_XPS = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0004;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_SVG = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0005;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_HTMLR = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0006;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_HTMLR_MENU = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0007;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_HTMLR_CANVAS = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0008;
exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM_PDFA = exports.AVS_OFFICESTUDIO_FILE_CROSSPLATFORM + 0x0009;
exports.AVS_OFFICESTUDIO_FILE_IMAGE = 0x0400;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_JPG = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0001;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_TIFF = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0002;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_TGA = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0003;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_GIF = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0004;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_PNG = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0005;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_EMF = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0006;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_WMF = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0007;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_BMP = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0008;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_CR2 = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x0009;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_PCX = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x000a;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_RAS = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x000b;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_PSD = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x000c;
exports.AVS_OFFICESTUDIO_FILE_IMAGE_ICO = exports.AVS_OFFICESTUDIO_FILE_IMAGE + 0x000d;
exports.AVS_OFFICESTUDIO_FILE_OTHER = 0x0800;
exports.AVS_OFFICESTUDIO_FILE_OTHER_EXTRACT_IMAGE = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x0001;
exports.AVS_OFFICESTUDIO_FILE_OTHER_MS_OFFCRYPTO = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x0002;
exports.AVS_OFFICESTUDIO_FILE_OTHER_HTMLZIP = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x0003;
exports.AVS_OFFICESTUDIO_FILE_OTHER_OLD_DOCUMENT = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x0004;
exports.AVS_OFFICESTUDIO_FILE_OTHER_OLD_PRESENTATION = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x0005;
exports.AVS_OFFICESTUDIO_FILE_OTHER_OLD_DRAWING = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x0006;
exports.AVS_OFFICESTUDIO_FILE_OTHER_OOXML = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x0007;
exports.AVS_OFFICESTUDIO_FILE_OTHER_JSON = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x0008; // Для mail-merge
exports.AVS_OFFICESTUDIO_FILE_OTHER_ODF = exports.AVS_OFFICESTUDIO_FILE_OTHER + 0x000a;
exports.AVS_OFFICESTUDIO_FILE_TEAMLAB = 0x1000;
exports.AVS_OFFICESTUDIO_FILE_TEAMLAB_DOCY = exports.AVS_OFFICESTUDIO_FILE_TEAMLAB + 0x0001;
exports.AVS_OFFICESTUDIO_FILE_TEAMLAB_XLSY = exports.AVS_OFFICESTUDIO_FILE_TEAMLAB + 0x0002;
exports.AVS_OFFICESTUDIO_FILE_TEAMLAB_PPTY = exports.AVS_OFFICESTUDIO_FILE_TEAMLAB + 0x0003;
exports.AVS_OFFICESTUDIO_FILE_CANVAS = 0x2000;
exports.AVS_OFFICESTUDIO_FILE_CANVAS_WORD = exports.AVS_OFFICESTUDIO_FILE_CANVAS + 0x0001;
exports.AVS_OFFICESTUDIO_FILE_CANVAS_SPREADSHEET = exports.AVS_OFFICESTUDIO_FILE_CANVAS + 0x0002;
exports.AVS_OFFICESTUDIO_FILE_CANVAS_PRESENTATION = exports.AVS_OFFICESTUDIO_FILE_CANVAS + 0x0003;

exports.NO_ERROR = 0;
exports.UNKNOWN = -1;
exports.READ_REQUEST_STREAM = -3;
exports.WEB_REQUEST = -4;
exports.CHANGE_DOC_INFO = -5;
exports.TASK_QUEUE = -20;
exports.TASK_RESULT = -40;
exports.STORAGE = -60;
exports.STORAGE_FILE_NO_FOUND = -61;
exports.STORAGE_READ = -62;
exports.STORAGE_WRITE = -63;
exports.STORAGE_REMOVE_DIR = -64;
exports.STORAGE_CREATE_DIR = -65;
exports.STORAGE_GET_INFO = -66;
exports.CONVERT = -80;
exports.CONVERT_DOWNLOAD = -81;
exports.CONVERT_UNKNOWN_FORMAT = -82;
exports.CONVERT_TIMEOUT = -83;
exports.CONVERT_READ_FILE = -84;
exports.CONVERT_CORRUPTED = -86;
exports.CONVERT_LIBREOFFICE = -87;
exports.CONVERT_PARAMS = -88;
exports.CONVERT_NEED_PARAMS = -89;
exports.CONVERT_DRM = -90;
exports.CONVERT_PASSWORD = -91;
exports.CONVERT_ICU = -92;
exports.CONVERT_LIMITS = -93;
exports.CONVERT_DEAD_LETTER = -99;
exports.UPLOAD = -100;
exports.UPLOAD_CONTENT_LENGTH = -101;
exports.UPLOAD_EXTENSION = -102;
exports.UPLOAD_COUNT_FILES = -103;
exports.UPLOAD_URL = -104;
exports.VKEY = -120;
exports.VKEY_ENCRYPT = -121;
exports.VKEY_KEY_EXPIRE = -122;
exports.VKEY_USER_COUNT_EXCEED = -123;
exports.VKEY_TIME_EXPIRE = -124;
exports.VKEY_TIME_INCORRECT = -125;
exports.EDITOR_CHANGES = -160;
exports.PASSWORD = -180;

exports.QUEUE_PRIORITY_VERY_LOW = 0;
exports.QUEUE_PRIORITY_LOW = 1;
exports.QUEUE_PRIORITY_NORMAL = 2;
exports.QUEUE_PRIORITY_HIGH = 3;
exports.QUEUE_PRIORITY_VERY_HIGH = 4;

exports.EDITOR_TYPE_WORD = 0;
exports.EDITOR_TYPE_SPREADSHEET = 1;
exports.EDITOR_TYPE_PRESENTATION = 2;
exports.EDITOR_TYPE_CONVERTATION = 3;

exports.PACKAGE_TYPE_OS = 0;
exports.PACKAGE_TYPE_I = 1;
exports.PACKAGE_TYPE_D = 2;

exports.REDIS_KEY_PUBSUB = 'pubsub';
exports.REDIS_KEY_SAVE_LOCK = 'savelock:';
exports.REDIS_KEY_PRESENCE_HASH = 'presence:hash:';
exports.REDIS_KEY_PRESENCE_SET = 'presence:set:';
exports.REDIS_KEY_PRESENCE_UNIQUE_USERS = 'presence:unique:users';
exports.REDIS_KEY_PRESENCE_UNIQUE_USERS_HASH = 'presence:unique:users:hash';
exports.REDIS_KEY_LOCKS = 'locks:';
exports.REDIS_KEY_LOCK_DOCUMENT = 'lockdocument:';
exports.REDIS_KEY_MESSAGE = 'message:';
exports.REDIS_KEY_DOCUMENTS = 'documents';
exports.REDIS_KEY_LAST_SAVE = 'lastsave:';
exports.REDIS_KEY_FORCE_SAVE = 'forcesave:';
exports.REDIS_KEY_FORCE_SAVE_TIMER = 'forcesavetimer';
exports.REDIS_KEY_FORCE_SAVE_TIMER_LOCK = 'forcesavetimerlock:';
exports.REDIS_KEY_SAVED = 'saved:';
exports.REDIS_KEY_SHUTDOWN = 'shutdown';
exports.REDIS_KEY_COLLECT_LOST = 'collectlost';
exports.REDIS_KEY_LICENSE = 'license';
exports.REDIS_KEY_LICENSE_T = 'licenseT';
exports.REDIS_KEY_EDITOR_CONNECTIONS = 'editorconnections';
exports.REDIS_KEY_SHARD_CONNECTIONS_EDIT_ZSET = 'shardconnections:edit:zset';
exports.REDIS_KEY_SHARD_CONNECTIONS_EDIT_HASH = 'shardconnections:edit:hash';
exports.REDIS_KEY_SHARD_CONNECTIONS_VIEW_ZSET = 'shardconnections:view:zset';
exports.REDIS_KEY_SHARD_CONNECTIONS_VIEW_HASH = 'shardconnections:view:hash';

exports.SHUTDOWN_CODE = 4001;
exports.SHUTDOWN_REASON = 'server shutdown';
exports.SESSION_IDLE_CODE = 4002;
exports.SESSION_IDLE_REASON = 'idle session expires';
exports.SESSION_ABSOLUTE_CODE = 4003;
exports.SESSION_ABSOLUTE_REASON = 'absolute session expires';
exports.ACCESS_DENIED_CODE = 4004;
exports.ACCESS_DENIED_REASON = 'access deny';
exports.JWT_EXPIRED_CODE = 4005;
exports.JWT_EXPIRED_REASON = 'token:';
exports.JWT_ERROR_CODE = 4006;
exports.JWT_ERROR_REASON = 'token:';
exports.DROP_CODE = 4007;
exports.DROP_REASON = 'drop';
exports.UPDATE_VERSION_CODE = 4008;
exports.UPDATE_VERSION = 'update version';
exports.NO_CACHE_CODE = 4009;
exports.NO_CACHE = 'no cache';

exports.CONTENT_DISPOSITION_INLINE = 'inline';
exports.CONTENT_DISPOSITION_ATTACHMENT = 'attachment';

exports.CONN_CLOSED = 3;

exports.FILE_STATUS_OK = 'ok';
exports.FILE_STATUS_UPDATE_VERSION = 'updateversion';

exports.ACTIVEMQ_QUEUE_PREFIX = 'queue://';
exports.ACTIVEMQ_TOPIC_PREFIX = 'topic://';
