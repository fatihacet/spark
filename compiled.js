(function(){var f, h = this;
function m() {
}
function aa(a) {
  a.fa = function() {
    return a.gb ? a.gb : a.gb = new a;
  };
}
function ba(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function n(a) {
  return "array" == ba(a);
}
function ca(a) {
  var b = ba(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function p(a) {
  return "string" == typeof a;
}
function da(a) {
  return "number" == typeof a;
}
function r(a) {
  return "function" == ba(a);
}
function ea(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function fa(a) {
  return a[ha] || (a[ha] = ++ia);
}
var ha = "closure_uid_" + (1E9 * Math.random() >>> 0), ia = 0;
function ja(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
function s(a, b) {
  var c = a.split("."), d = h;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function t(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.b = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.$d = function(a, c, g) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;var ka;
function la(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function ma(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function na(a) {
  var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;var u = Array.prototype, oa = u.indexOf ? function(a, b, c) {
  return u.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (p(a)) {
    return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, v = u.forEach ? function(a, b, c) {
  u.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a);
  }
}, pa = u.filter ? function(a, b, c) {
  return u.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], g = 0, k = p(a) ? a.split("") : a, l = 0;l < d;l++) {
    if (l in k) {
      var q = k[l];
      b.call(c, q, l, a) && (e[g++] = q);
    }
  }
  return e;
}, qa = u.every ? function(a, b, c) {
  return u.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, g = 0;g < d;g++) {
    if (g in e && !b.call(c, e[g], g, a)) {
      return!1;
    }
  }
  return!0;
};
function w(a, b) {
  return 0 <= oa(a, b);
}
function ra(a, b) {
  var c = oa(a, b), d;
  (d = 0 <= c) && u.splice.call(a, c, 1);
  return d;
}
function sa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function ta(a, b, c) {
  return 2 >= arguments.length ? u.slice.call(a, b) : u.slice.call(a, b, c);
}
;function ua(a) {
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function va(a, b) {
  for (var c = ua(a), d = ta(arguments, 1), e = c.length + d.length, g = c, k = 0;k < d.length;k++) {
    w(g, d[k]) || g.push(d[k]);
  }
  a.className = c.join(" ");
  return c.length == e;
}
function wa(a, b) {
  var c = ua(a), d = ta(arguments, 1), e = xa(c, d);
  a.className = e.join(" ");
  return e.length == c.length - d.length;
}
function xa(a, b) {
  return pa(a, function(a) {
    return!w(b, a);
  });
}
;function ya(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function za(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
}
var Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ba(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < Aa.length;g++) {
      c = Aa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;var Ca;
a: {
  var Da = h.navigator;
  if (Da) {
    var Ea = Da.userAgent;
    if (Ea) {
      Ca = Ea;
      break a;
    }
  }
  Ca = "";
}
function x(a) {
  return-1 != Ca.indexOf(a);
}
;var y = x("Opera") || x("OPR"), z = x("Trident") || x("MSIE"), A = x("Gecko") && !x("WebKit") && !(x("Trident") || x("MSIE")), B = x("WebKit"), Fa = h.navigator || null, C = -1 != (Fa && Fa.platform || "").indexOf("Mac");
function Ga() {
  var a = h.document;
  return a ? a.documentMode : void 0;
}
var Ha = function() {
  var a = "", b;
  if (y && h.opera) {
    return a = h.opera.version, r(a) ? a() : a;
  }
  A ? b = /rv\:([^\);]+)(\)|;)/ : z ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : B && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Ca)) ? a[1] : "");
  return z && (b = Ga(), b > parseFloat(a)) ? String(b) : a;
}(), Ia = {};
function D(a) {
  var b;
  if (!(b = Ia[a])) {
    b = 0;
    for (var c = String(Ha).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var k = c[g] || "", l = d[g] || "", q = RegExp("(\\d*)(\\D*)", "g"), S = RegExp("(\\d*)(\\D*)", "g");
      do {
        var L = q.exec(k) || ["", "", ""], ga = S.exec(l) || ["", "", ""];
        if (0 == L[0].length && 0 == ga[0].length) {
          break;
        }
        b = la(0 == L[1].length ? 0 : parseInt(L[1], 10), 0 == ga[1].length ? 0 : parseInt(ga[1], 10)) || la(0 == L[2].length, 0 == ga[2].length) || la(L[2], ga[2]);
      } while (0 == b);
    }
    b = Ia[a] = 0 <= b;
  }
  return b;
}
var Ja = h.document, Ka = Ja && z ? Ga() || ("CSS1Compat" == Ja.compatMode ? parseInt(Ha, 10) : 5) : void 0;
!A && !z || z && z && 9 <= Ka || A && D("1.9.1");
z && D("9");
function La(a) {
  return a ? new Ma(Na(a)) : ka || (ka = new Ma);
}
function Oa(a, b, c) {
  function d(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var g = c[e];
    if (!ca(g) || ea(g) && 0 < g.nodeType) {
      d(g);
    } else {
      var k;
      a: {
        if (g && "number" == typeof g.length) {
          if (ea(g)) {
            k = "function" == typeof g.item || "string" == typeof g.item;
            break a;
          }
          if (r(g)) {
            k = "function" == typeof g.item;
            break a;
          }
        }
        k = !1;
      }
      v(k ? sa(g) : g, d);
    }
  }
}
function Pa(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
}
function Qa(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function Ra(a, b) {
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  }
  for (;b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
}
function Na(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Sa(a, b) {
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (3 == a.nodeType) {
      a.data = b;
    } else {
      if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        Pa(a), a.appendChild(Na(a).createTextNode(String(b)));
      }
    }
  }
}
function Ta(a) {
  a = a.getAttributeNode("tabindex");
  return null != a && a.specified;
}
function Ua(a) {
  a = a.tabIndex;
  return da(a) && 0 <= a && 32768 > a;
}
function Ma(a) {
  this.G = a || h.document || document;
}
f = Ma.prototype;
f.Ya = La;
f.a = function(a) {
  return p(a) ? this.G.getElementById(a) : a;
};
f.createElement = function(a) {
  return this.G.createElement(a);
};
f.createTextNode = function(a) {
  return this.G.createTextNode(String(a));
};
f.appendChild = function(a, b) {
  a.appendChild(b);
};
f.append = function(a, b) {
  Oa(Na(a), a, arguments);
};
f.canHaveChildren = function(a) {
  if (1 != a.nodeType) {
    return!1;
  }
  switch(a.tagName) {
    case "APPLET":
    ;
    case "AREA":
    ;
    case "BASE":
    ;
    case "BR":
    ;
    case "COL":
    ;
    case "COMMAND":
    ;
    case "EMBED":
    ;
    case "FRAME":
    ;
    case "HR":
    ;
    case "IMG":
    ;
    case "INPUT":
    ;
    case "IFRAME":
    ;
    case "ISINDEX":
    ;
    case "KEYGEN":
    ;
    case "LINK":
    ;
    case "NOFRAMES":
    ;
    case "NOSCRIPT":
    ;
    case "META":
    ;
    case "OBJECT":
    ;
    case "PARAM":
    ;
    case "SCRIPT":
    ;
    case "SOURCE":
    ;
    case "STYLE":
    ;
    case "TRACK":
    ;
    case "WBR":
      return!1;
  }
  return!0;
};
f.removeNode = Qa;
f.contains = Ra;
f.Fa = function(a) {
  var b;
  (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Ta(a) || Ua(a)) : Ta(a) && Ua(a)) && z ? (a = r(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height:a.offsetHeight, width:a.offsetWidth}, a = null != a && 0 < a.height && 0 < a.width) : a = b;
  return a;
};
z && D(8);
function E(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
}
f = E.prototype;
f.clone = function() {
  return new E(this.top, this.right, this.bottom, this.left);
};
f.toString = function() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
f.contains = function(a) {
  return this && a ? a instanceof E ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
};
f.expand = function(a, b, c, d) {
  ea(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this;
};
f.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
f.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
f.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
f.translate = function(a, b) {
  this.left += a;
  this.right += a;
  da(b) && (this.top += b, this.bottom += b);
  return this;
};
f.scale = function(a, b) {
  var c = da(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this;
};
function Va(a, b) {
  p(b) ? Wa(a, void 0, b) : ya(b, ja(Wa, a));
}
function Wa(a, b, c) {
  var d;
  a: {
    if (d = ma(c), void 0 === a.style[d] && (c = (B ? "Webkit" : A ? "Moz" : z ? "ms" : y ? "O" : null) + na(c), void 0 !== a.style[c])) {
      d = c;
      break a;
    }
  }
  d && (a.style[d] = b);
}
function F(a, b) {
  var c = Na(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
}
var Xa = A ? "MozUserSelect" : B ? "WebkitUserSelect" : null;
function Ya(a, b) {
  if (/^\d+px?$/.test(b)) {
    return parseInt(b, 10);
  }
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var e = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return e;
}
function Za(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? Ya(a, c) : 0;
}
function $a(a) {
  if (z) {
    var b = Za(a, "paddingLeft"), c = Za(a, "paddingRight"), d = Za(a, "paddingTop");
    a = Za(a, "paddingBottom");
    return new E(d, c, a, b);
  }
  b = F(a, "paddingLeft");
  c = F(a, "paddingRight");
  d = F(a, "paddingTop");
  a = F(a, "paddingBottom");
  return new E(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
var ab = {thin:2, medium:4, thick:6};
function bb(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0;
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return c in ab ? ab[c] : Ya(a, c);
}
function cb(a) {
  if (z && !(z && 9 <= Ka)) {
    var b = bb(a, "borderLeft"), c = bb(a, "borderRight"), d = bb(a, "borderTop");
    a = bb(a, "borderBottom");
    return new E(d, c, a, b);
  }
  b = F(a, "borderLeftWidth");
  c = F(a, "borderRightWidth");
  d = F(a, "borderTopWidth");
  a = F(a, "borderBottomWidth");
  return new E(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
;function db(a) {
  return B ? "webkit" + a : y ? "o" + a.toLowerCase() : a.toLowerCase();
}
var eb = {hc:"click", qc:"dblclick", Uc:"mousedown", $c:"mouseup", Zc:"mouseover", Yc:"mouseout", Xc:"mousemove", Vc:"mouseenter", Wc:"mouseleave", Nd:"selectstart", Jc:"keypress", Ic:"keydown", Kc:"keyup", fc:"blur", Bc:"focus", rc:"deactivate", Cc:z ? "focusin" : "DOMFocusIn", Dc:z ? "focusout" : "DOMFocusOut", gc:"change", Md:"select", Qd:"submit", Hc:"input", Hd:"propertychange", yc:"dragstart", tc:"drag", vc:"dragenter", xc:"dragover", wc:"dragleave", zc:"drop", uc:"dragend", Vd:"touchstart", 
Ud:"touchmove", Td:"touchend", Sd:"touchcancel", ec:"beforeunload", mc:"consolemessage", nc:"contextmenu", sc:"DOMContentLoaded", ERROR:"error", Gc:"help", Lc:"load", Rc:"losecapture", ud:"orientationchange", Id:"readystatechange", Jd:"resize", Ld:"scroll", Xd:"unload", Fc:"hashchange", vd:"pagehide", wd:"pageshow", Gd:"popstate", oc:"copy", xd:"paste", pc:"cut", bc:"beforecopy", cc:"beforecut", dc:"beforepaste", td:"online", sd:"offline", Tc:"message", lc:"connect", ac:db("AnimationStart"), Zb:db("AnimationEnd"), 
$b:db("AnimationIteration"), Wd:db("TransitionEnd"), zd:"pointerdown", Fd:"pointerup", yd:"pointercancel", Cd:"pointermove", Ed:"pointerover", Dd:"pointerout", Ad:"pointerenter", Bd:"pointerleave", Ec:"gotpointercapture", Sc:"lostpointercapture", ad:"MSGestureChange", bd:"MSGestureEnd", cd:"MSGestureHold", dd:"MSGestureStart", ed:"MSGestureTap", fd:"MSGotPointerCapture", gd:"MSInertiaStart", hd:"MSLostPointerCapture", jd:"MSPointerCancel", kd:"MSPointerDown", ld:"MSPointerEnter", md:"MSPointerHover", 
nd:"MSPointerLeave", od:"MSPointerMove", pd:"MSPointerOut", qd:"MSPointerOver", rd:"MSPointerUp", Rd:"textinput", jc:"compositionstart", kc:"compositionupdate", ic:"compositionend", Ac:"exit", Mc:"loadabort", Nc:"loadcommit", Oc:"loadredirect", Pc:"loadstart", Qc:"loadstop", Kd:"responsive", Od:"sizechanged", Yd:"unresponsive", Zd:"visibilitychange", Pd:"storage"};
function fb(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function gb(a, b) {
  return a.classList ? a.classList.contains(b) : w(fb(a), b);
}
function hb(a) {
  var b = ib;
  a.classList ? a.classList.remove(b) : gb(a, b) && (a.className = pa(fb(a), function(a) {
    return a != b;
  }).join(" "));
}
;var jb = "closure_listenable_" + (1E6 * Math.random() | 0);
function kb(a) {
  try {
    return!(!a || !a[jb]);
  } catch (b) {
    return!1;
  }
}
var lb = 0;
function mb(a, b, c, d, e) {
  this.u = a;
  this.sa = null;
  this.src = b;
  this.type = c;
  this.ca = !!d;
  this.ja = e;
  this.key = ++lb;
  this.L = this.ba = !1;
}
function nb(a) {
  a.L = !0;
  a.u = null;
  a.sa = null;
  a.src = null;
  a.ja = null;
}
;function G(a) {
  this.src = a;
  this.e = {};
  this.$ = 0;
}
G.prototype.add = function(a, b, c, d, e) {
  var g = a.toString();
  a = this.e[g];
  a || (a = this.e[g] = [], this.$++);
  var k = ob(a, b, d, e);
  -1 < k ? (b = a[k], c || (b.ba = !1)) : (b = new mb(b, this.src, g, !!d, e), b.ba = c, a.push(b));
  return b;
};
G.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.e)) {
    return!1;
  }
  var e = this.e[a];
  b = ob(e, b, c, d);
  return-1 < b ? (nb(e[b]), u.splice.call(e, b, 1), 0 == e.length && (delete this.e[a], this.$--), !0) : !1;
};
function pb(a, b) {
  var c = b.type;
  if (!(c in a.e)) {
    return!1;
  }
  var d = ra(a.e[c], b);
  d && (nb(b), 0 == a.e[c].length && (delete a.e[c], a.$--));
  return d;
}
G.prototype.kb = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.e) {
    if (!a || c == a) {
      for (var d = this.e[c], e = 0;e < d.length;e++) {
        ++b, nb(d[e]);
      }
      delete this.e[c];
      this.$--;
    }
  }
  return b;
};
G.prototype.W = function(a, b, c, d) {
  a = this.e[a.toString()];
  var e = -1;
  a && (e = ob(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function ob(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var g = a[e];
    if (!g.L && g.u == b && g.ca == !!c && g.ja == d) {
      return e;
    }
  }
  return-1;
}
;var qb = !z || z && 9 <= Ka, rb = !z || z && 9 <= Ka, sb = z && !D("9");
!B || D("528");
A && D("1.9b") || z && D("8") || y && D("9.5") || B && D("528");
A && !D("8") || z && D("9");
function tb() {
  0 != ub && fa(this);
}
var ub = 0;
tb.prototype.wb = !1;
function H(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.B = !1;
  this.lb = !0;
}
H.prototype.stopPropagation = function() {
  this.B = !0;
};
H.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.lb = !1;
};
function vb(a) {
  vb[" "](a);
  return a;
}
vb[" "] = m;
function I(a, b) {
  H.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.La = !1;
  this.p = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (A) {
        var e;
        a: {
          try {
            vb(d.nodeName);
            e = !0;
            break a;
          } catch (g) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.La = C ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.p = a;
    a.defaultPrevented && this.preventDefault();
  }
}
t(I, H);
var wb = [1, 4, 2];
function xb(a) {
  return qb ? 0 == a.p.button : "click" == a.type ? !0 : !!(a.p.button & wb[0]);
}
I.prototype.stopPropagation = function() {
  I.b.stopPropagation.call(this);
  this.p.stopPropagation ? this.p.stopPropagation() : this.p.cancelBubble = !0;
};
I.prototype.preventDefault = function() {
  I.b.preventDefault.call(this);
  var a = this.p;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, sb) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var yb = "closure_lm_" + (1E6 * Math.random() | 0), zb = {}, Ab = 0;
function J(a, b, c, d, e) {
  if (n(b)) {
    for (var g = 0;g < b.length;g++) {
      J(a, b[g], c, d, e);
    }
    return null;
  }
  c = Bb(c);
  return kb(a) ? a.c(b, c, d, e) : Cb(a, b, c, !1, d, e);
}
function Cb(a, b, c, d, e, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var k = !!e, l = Db(a);
  l || (a[yb] = l = new G(a));
  c = l.add(b, c, d, e, g);
  if (c.sa) {
    return c;
  }
  d = Eb();
  c.sa = d;
  d.src = a;
  d.u = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, k) : a.attachEvent(Fb(b.toString()), d);
  Ab++;
  return c;
}
function Eb() {
  var a = Gb, b = rb ? function(c) {
    return a.call(b.src, b.u, c);
  } : function(c) {
    c = a.call(b.src, b.u, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Hb(a, b, c, d, e) {
  if (n(b)) {
    for (var g = 0;g < b.length;g++) {
      Hb(a, b[g], c, d, e);
    }
    return null;
  }
  c = Bb(c);
  return kb(a) ? a.ib(b, c, d, e) : Cb(a, b, c, !0, d, e);
}
function Ib(a, b, c, d, e) {
  if (n(b)) {
    for (var g = 0;g < b.length;g++) {
      Ib(a, b[g], c, d, e);
    }
  } else {
    c = Bb(c), kb(a) ? a.l(b, c, d, e) : a && (a = Db(a)) && (b = a.W(b, c, !!d, e)) && K(b);
  }
}
function K(a) {
  if (da(a) || !a || a.L) {
    return!1;
  }
  var b = a.src;
  if (kb(b)) {
    return pb(b.t, a);
  }
  var c = a.type, d = a.sa;
  b.removeEventListener ? b.removeEventListener(c, d, a.ca) : b.detachEvent && b.detachEvent(Fb(c), d);
  Ab--;
  (c = Db(b)) ? (pb(c, a), 0 == c.$ && (c.src = null, b[yb] = null)) : nb(a);
  return!0;
}
function Fb(a) {
  return a in zb ? zb[a] : zb[a] = "on" + a;
}
function Jb(a, b, c, d) {
  var e = 1;
  if (a = Db(a)) {
    if (b = a.e[b.toString()]) {
      for (b = sa(b), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.ca == c && !g.L && (e &= !1 !== Kb(g, d));
      }
    }
  }
  return Boolean(e);
}
function Kb(a, b) {
  var c = a.u, d = a.ja || a.src;
  a.ba && K(a);
  return c.call(d, b);
}
function Gb(a, b) {
  if (a.L) {
    return!0;
  }
  if (!rb) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = h, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new I(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var g = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (k) {
            g = !0;
          }
        }
        if (g || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (g = c.currentTarget;g;g = g.parentNode) {
        e.push(g);
      }
      for (var g = a.type, l = e.length - 1;!c.B && 0 <= l;l--) {
        c.currentTarget = e[l], d &= Jb(e[l], g, !0, c);
      }
      for (l = 0;!c.B && l < e.length;l++) {
        c.currentTarget = e[l], d &= Jb(e[l], g, !1, c);
      }
    }
    return d;
  }
  return Kb(a, new I(b, this));
}
function Db(a) {
  a = a[yb];
  return a instanceof G ? a : null;
}
var Lb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Bb(a) {
  return r(a) ? a : a[Lb] || (a[Lb] = function(b) {
    return a.handleEvent(b);
  });
}
;function Mb(a) {
  tb.call(this);
  this.Da = a;
  this.Y = {};
}
t(Mb, tb);
var Nb = [];
f = Mb.prototype;
f.c = function(a, b, c, d) {
  n(b) || (b && (Nb[0] = b.toString()), b = Nb);
  for (var e = 0;e < b.length;e++) {
    var g = J(a, b[e], c || this.handleEvent, d || !1, this.Da || this);
    if (!g) {
      break;
    }
    this.Y[g.key] = g;
  }
  return this;
};
f.ib = function(a, b, c, d) {
  return Ob(this, a, b, c, d);
};
function Ob(a, b, c, d, e, g) {
  if (n(c)) {
    for (var k = 0;k < c.length;k++) {
      Ob(a, b, c[k], d, e, g);
    }
  } else {
    b = Hb(b, c, d || a.handleEvent, e, g || a.Da || a);
    if (!b) {
      return a;
    }
    a.Y[b.key] = b;
  }
  return a;
}
f.l = function(a, b, c, d, e) {
  if (n(b)) {
    for (var g = 0;g < b.length;g++) {
      this.l(a, b[g], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.Da || this, c = Bb(c), d = !!d, b = kb(a) ? a.W(b, c, d, e) : a ? (a = Db(a)) ? a.W(b, c, d, e) : null : null, b && (K(b), delete this.Y[b.key]);
  }
  return this;
};
f.kb = function() {
  ya(this.Y, K);
  this.Y = {};
};
f.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Pb() {
}
aa(Pb);
Pb.prototype.Tb = 0;
function M() {
  tb.call(this);
  this.t = new G(this);
  this.sb = this;
}
t(M, tb);
M.prototype[jb] = !0;
f = M.prototype;
f.Ka = null;
f.Qa = function(a) {
  this.Ka = a;
};
f.addEventListener = function(a, b, c, d) {
  J(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  Ib(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  var b, c = this.Ka;
  if (c) {
    for (b = [];c;c = c.Ka) {
      b.push(c);
    }
  }
  var c = this.sb, d = a.type || a;
  if (p(a)) {
    a = new H(a, c);
  } else {
    if (a instanceof H) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new H(d, c);
      Ba(a, e);
    }
  }
  var e = !0, g;
  if (b) {
    for (var k = b.length - 1;!a.B && 0 <= k;k--) {
      g = a.currentTarget = b[k], e = Qb(g, d, !0, a) && e;
    }
  }
  a.B || (g = a.currentTarget = c, e = Qb(g, d, !0, a) && e, a.B || (e = Qb(g, d, !1, a) && e));
  if (b) {
    for (k = 0;!a.B && k < b.length;k++) {
      g = a.currentTarget = b[k], e = Qb(g, d, !1, a) && e;
    }
  }
  return e;
};
f.c = function(a, b, c, d) {
  return this.t.add(String(a), b, !1, c, d);
};
f.ib = function(a, b, c, d) {
  return this.t.add(String(a), b, !0, c, d);
};
f.l = function(a, b, c, d) {
  return this.t.remove(String(a), b, c, d);
};
function Qb(a, b, c, d) {
  b = a.t.e[String(b)];
  if (!b) {
    return!0;
  }
  b = sa(b);
  for (var e = !0, g = 0;g < b.length;++g) {
    var k = b[g];
    if (k && !k.L && k.ca == c) {
      var l = k.u, q = k.ja || k.src;
      k.ba && pb(a.t, k);
      e = !1 !== l.call(q, d) && e;
    }
  }
  return e && 0 != d.lb;
}
f.W = function(a, b, c, d) {
  return this.t.W(String(a), b, c, d);
};
function N(a) {
  M.call(this);
  this.R = a || La();
  this.Z = Rb;
}
t(N, M);
N.prototype.Ob = Pb.fa();
var Rb = null;
function Sb(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close";
  }
  throw Error("Invalid component state");
}
f = N.prototype;
f.la = null;
f.n = !1;
f.g = null;
f.Z = null;
f.s = null;
f.Aa = null;
f.F = null;
function Tb(a, b) {
  if (a.s && a.s.F) {
    var c = a.s.F, d = a.la;
    d in c && delete c[d];
    c = a.s.F;
    if (b in c) {
      throw Error('The object already contains the key "' + b + '"');
    }
    c[b] = a;
  }
  a.la = b;
}
f.a = function() {
  return this.g;
};
function Ub(a) {
  a.ga || (a.ga = new Mb(a));
  return a.ga;
}
f.getParent = function() {
  return this.s;
};
f.Qa = function(a) {
  if (this.s && this.s != a) {
    throw Error("Method not supported");
  }
  N.b.Qa.call(this, a);
};
f.Ya = function() {
  return this.R;
};
f.Q = function(a) {
  if (this.n) {
    throw Error("Component already rendered");
  }
  if (a && this.P(a)) {
    var b = Na(a);
    this.R && this.R.G == b || (this.R = La(a));
    this.Wa(a);
    this.H();
  } else {
    throw Error("Invalid element to decorate");
  }
};
f.P = function() {
  return!0;
};
f.Wa = function(a) {
  this.g = a;
};
f.H = function() {
  this.n = !0;
  Vb(this, function(a) {
    !a.n && a.a() && a.H();
  });
};
f.ea = function() {
  Vb(this, function(a) {
    a.n && a.ea();
  });
  this.ga && this.ga.kb();
  this.n = !1;
};
f.U = function() {
  return this.g;
};
f.M = function(a) {
  if (this.n) {
    throw Error("Component already rendered");
  }
  this.Z = a;
};
function Vb(a, b) {
  a.Aa && v(a.Aa, b, void 0);
}
f.removeChild = function(a, b) {
  if (a) {
    var c = p(a) ? a : a.la || (a.la = ":" + (a.Ob.Tb++).toString(36)), d;
    this.F && c ? (d = this.F, d = (c in d ? d[c] : void 0) || null) : d = null;
    a = d;
    if (c && a) {
      d = this.F;
      c in d && delete d[c];
      ra(this.Aa, a);
      b && (a.ea(), a.g && Qa(a.g));
      c = a;
      if (null == c) {
        throw Error("Unable to set parent component");
      }
      c.s = null;
      N.b.Qa.call(c, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
var Wb;
function Xb(a, b, c) {
  ca(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (Wb || (Wb = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = Wb, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
}
;function Yb() {
}
var Zb;
aa(Yb);
f = Yb.prototype;
f.U = function(a) {
  return a;
};
f.S = function(a, b, c) {
  if (a = a.a ? a.a() : a) {
    if (z && !D("7")) {
      var d = $b(ua(a), b);
      d.push(b);
      ja(c ? va : wa, a).apply(null, d);
    } else {
      c ? va(a, b) : wa(a, b);
    }
  }
};
f.P = function() {
  return!0;
};
f.Q = function(a, b) {
  b.id && Tb(a, b.id);
  var c = this.U(b);
  c && c.firstChild && ac(c.firstChild.nextSibling ? sa(c.childNodes) : c.firstChild);
  var d = 0, e = this.V(), g = this.V(), k = !1, l = !1, c = !1, q = ua(b);
  v(q, function(a) {
    if (k || a != e) {
      if (l || a != g) {
        var b = d;
        this.rb || (this.da || bc(this), this.rb = za(this.da));
        a = parseInt(this.rb[a], 10);
        d = b | (isNaN(a) ? 0 : a);
      } else {
        l = !0;
      }
    } else {
      k = !0, g == e && (l = !0);
    }
  }, this);
  a.d = d;
  k || (q.push(e), g == e && (l = !0));
  l || q.push(g);
  var S = a.m;
  S && q.push.apply(q, S);
  if (z && !D("7")) {
    var L = $b(q);
    0 < L.length && (q.push.apply(q, L), c = !0);
  }
  if (!k || !l || S || c) {
    b.className = q.join(" ");
  }
  cc(this, a, b);
  return b;
};
function cc(a, b, c) {
  b.O || Xb(c, "hidden", !b.O);
  b.isEnabled() || a.N(c, 1, !b.isEnabled());
  b.k & 8 && a.N(c, 8, !!(b.d & 8));
  b.k & 16 && a.N(c, 16, b.oa());
  b.k & 64 && a.N(c, 64, !!(b.d & 64));
}
f.ta = function(a, b) {
  var c = !b, d = z || y ? a.getElementsByTagName("*") : null;
  if (Xa) {
    if (c = c ? "none" : "", a.style[Xa] = c, d) {
      for (var e = 0, g;g = d[e];e++) {
        g.style[Xa] = c;
      }
    }
  } else {
    if (z || y) {
      if (c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for (e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c);
        }
      }
    }
  }
};
f.M = function(a, b) {
  this.S(a, this.V() + "-rtl", b);
};
f.Fa = function(a) {
  var b;
  return a.k & 32 && (b = a.I()) ? Ta(b) && Ua(b) : !1;
};
f.Pa = function(a, b) {
  var c;
  if (a.k & 32 && (c = a.I())) {
    if (!b && a.d & 32) {
      try {
        c.blur();
      } catch (d) {
      }
      a.d & 32 && a.Za();
    }
    (Ta(c) && Ua(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")));
  }
};
f.j = function(a, b, c) {
  var d = a.a();
  if (d) {
    var e;
    this.da || bc(this);
    (e = this.da[b]) && this.S(a, e, c);
    this.N(d, b, c);
  }
};
f.N = function(a, b, c) {
  Zb || (Zb = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Zb[b]) && Xb(a, b, c);
};
f.C = function(a, b) {
  var c = this.U(a);
  if (c && (Pa(c), b)) {
    if (p(b)) {
      Sa(c, b);
    } else {
      var d = function(a) {
        if (a) {
          var b = Na(c);
          c.appendChild(p(a) ? b.createTextNode(a) : a);
        }
      };
      n(b) ? v(b, d) : !ca(b) || "nodeType" in b ? d(b) : v(sa(b), d);
    }
  }
};
f.I = function(a) {
  return a.a();
};
f.V = function() {
  return "goog-control";
};
function $b(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  v([], function(d) {
    !qa(d, ja(w, a)) || b && !w(d, b) || c.push(d.join("_"));
  });
  return c;
}
function bc(a) {
  var b = a.V();
  a.da = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"};
}
;function dc() {
}
t(dc, Yb);
aa(dc);
f = dc.prototype;
f.Q = function(a, b) {
  ec(a);
  a.xa &= -256;
  if (a.n && a.d & 32) {
    throw Error("Component already rendered");
  }
  a.d & 32 && a.j(32, !1);
  a.k &= -33;
  dc.b.Q.call(this, a, b);
  a.C(b.value);
  return b;
};
f.P = function(a) {
  return "TEXTAREA" == a.tagName;
};
f.M = m;
f.Fa = function(a) {
  return a.isEnabled();
};
f.Pa = m;
f.j = function(a, b, c) {
  dc.b.j.call(this, a, b, c);
  (a = a.a()) && 1 == b && (a.disabled = c);
};
f.N = m;
f.C = function(a, b) {
  a && (a.value = b);
};
f.V = function() {
  return "goog-textarea";
};
var fc = {};
function gc(a, b, c, d, e) {
  if (!(z || B && D("525"))) {
    return!0;
  }
  if (C && e) {
    return hc(a);
  }
  if (e && !d) {
    return!1;
  }
  da(b) && (b = ic(b));
  if (!c && (17 == b || 18 == b || C && 91 == b)) {
    return!1;
  }
  if (B && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return!1;
    }
  }
  if (z && d && b == a) {
    return!1;
  }
  switch(a) {
    case 13:
      return!(z && z && 9 <= Ka);
    case 27:
      return!B;
  }
  return hc(a);
}
function hc(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || B && 0 == a) {
    return!0;
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return!0;
    default:
      return!1;
  }
}
function ic(a) {
  if (A) {
    a = jc(a);
  } else {
    if (C && B) {
      a: {
        switch(a) {
          case 93:
            a = 91;
            break a;
        }
      }
    }
  }
  return a;
}
function jc(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a;
  }
}
;function kc(a, b) {
  M.call(this);
  a && lc(this, a, b);
}
t(kc, M);
f = kc.prototype;
f.g = null;
f.pa = null;
f.Ga = null;
f.qa = null;
f.i = -1;
f.r = -1;
f.wa = !1;
var mc = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, nc = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, oc = z || 
B && D("525"), pc = C && A;
f = kc.prototype;
f.Kb = function(a) {
  B && (17 == this.i && !a.ctrlKey || 18 == this.i && !a.altKey || C && 91 == this.i && !a.metaKey) && (this.r = this.i = -1);
  -1 == this.i && (a.ctrlKey && 17 != a.keyCode ? this.i = 17 : a.altKey && 18 != a.keyCode ? this.i = 18 : a.metaKey && 91 != a.keyCode && (this.i = 91));
  oc && !gc(a.keyCode, this.i, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.r = ic(a.keyCode), pc && (this.wa = a.altKey));
};
f.Mb = function(a) {
  this.r = this.i = -1;
  this.wa = a.altKey;
};
f.handleEvent = function(a) {
  var b = a.p, c, d, e = b.altKey;
  z && "keypress" == a.type ? (c = this.r, d = 13 != c && 27 != c ? b.keyCode : 0) : B && "keypress" == a.type ? (c = this.r, d = 0 <= b.charCode && 63232 > b.charCode && hc(c) ? b.charCode : 0) : y ? (c = this.r, d = hc(c) ? b.keyCode : 0) : (c = b.keyCode || this.r, d = b.charCode || 0, pc && (e = this.wa), C && 63 == d && 224 == c && (c = 191));
  var g = c = ic(c), k = b.keyIdentifier;
  c ? 63232 <= c && c in mc ? g = mc[c] : 25 == c && a.shiftKey && (g = 9) : k && k in nc && (g = nc[k]);
  a = g == this.i;
  this.i = g;
  b = new qc(g, d, a, b);
  b.altKey = e;
  this.dispatchEvent(b);
};
f.a = function() {
  return this.g;
};
function lc(a, b, c) {
  a.qa && a.detach();
  a.g = b;
  a.pa = J(a.g, "keypress", a, c);
  a.Ga = J(a.g, "keydown", a.Kb, c, a);
  a.qa = J(a.g, "keyup", a.Mb, c, a);
}
f.detach = function() {
  this.pa && (K(this.pa), K(this.Ga), K(this.qa), this.qa = this.Ga = this.pa = null);
  this.g = null;
  this.r = this.i = -1;
};
function qc(a, b, c, d) {
  I.call(this, d);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
}
t(qc, I);
function O(a, b, c) {
  N.call(this, c);
  if (!(a = b)) {
    a = this.constructor;
    for (var d;a;) {
      d = fa(a);
      if (d = fc[d]) {
        break;
      }
      a = a.b ? a.b.constructor : null;
    }
    a = d ? r(d.fa) ? d.fa() : new d : null;
  }
  this.h = a;
}
t(O, N);
f = O.prototype;
f.d = 0;
f.k = 39;
f.xa = 255;
f.Wb = 0;
f.O = !0;
f.m = null;
f.Ca = !0;
f.va = !1;
f.Ub = null;
function ec(a) {
  a.n && 0 != a.Ca && rc(a, !1);
  a.Ca = !1;
}
f.I = function() {
  return this.h.I(this);
};
f.S = function(a, b) {
  b ? a && (this.m ? w(this.m, a) || this.m.push(a) : this.m = [a], this.h.S(this, a, !0)) : a && this.m && ra(this.m, a) && (0 == this.m.length && (this.m = null), this.h.S(this, a, !1));
};
f.U = function() {
  return this.h.U(this.a());
};
f.P = function(a) {
  return this.h.P(a);
};
f.Wa = function(a) {
  this.g = a = this.h.Q(this, a);
  var b = this.Ub || void 0;
  if (b) {
    var c = a;
    b ? c.setAttribute("role", b) : c.removeAttribute("role");
  }
  this.va || this.h.ta(a, !1);
  this.O = "none" != a.style.display;
};
f.H = function() {
  O.b.H.call(this);
  var a = this.h;
  if (null == this.Z) {
    var b = this.n ? this.g : this.R.G.body;
    this.Z = "rtl" == (F(b, "direction") || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction);
  }
  this.Z && a.M(this.a(), !0);
  this.isEnabled() && a.Pa(this, this.O);
  this.k & -2 && (this.Ca && rc(this, !0), this.k & 32 && (a = this.I())) && (b = this.Ha || (this.Ha = new kc), lc(b, a), Ub(this).c(b, "key", this.Lb).c(a, "focus", this.Jb).c(a, "blur", this.Za));
};
function rc(a, b) {
  var c = Ub(a), d = a.a();
  b ? (c.c(d, "mouseover", a.cb).c(d, "mousedown", a.ab).c(d, "mouseup", a.eb).c(d, "mouseout", a.bb), a.ia != m && c.c(d, "contextmenu", a.ia), z && c.c(d, "dblclick", a.$a)) : (c.l(d, "mouseover", a.cb).l(d, "mousedown", a.ab).l(d, "mouseup", a.eb).l(d, "mouseout", a.bb), a.ia != m && c.l(d, "contextmenu", a.ia), z && c.l(d, "dblclick", a.$a));
}
f.ea = function() {
  O.b.ea.call(this);
  this.Ha && this.Ha.detach();
  this.O && this.isEnabled() && this.h.Pa(this, !1);
};
f.C = function(a) {
  this.h.C(this.a(), a);
};
function ac() {
}
f.M = function(a) {
  O.b.M.call(this, a);
  var b = this.a();
  b && this.h.M(b, a);
};
f.ta = function(a) {
  this.va = a;
  var b = this.a();
  b && this.h.ta(b, a);
};
f.isEnabled = function() {
  return!(this.d & 1);
};
function sc(a, b) {
  P(a, 2, b) && a.j(2, b);
}
f.setActive = function(a) {
  P(this, 4, a) && this.j(4, a);
};
f.oa = function() {
  return!!(this.d & 16);
};
f.j = function(a, b) {
  this.k & a && b != !!(this.d & a) && (this.h.j(this, a, b), this.d = b ? this.d | a : this.d & ~a);
};
function Q(a, b) {
  return!!(a.xa & b) && !!(a.k & b);
}
function P(a, b, c) {
  return!!(a.k & b) && !!(a.d & b) != c && (!(a.Wb & b) || a.dispatchEvent(Sb(b, c))) && !a.wb;
}
f.cb = function(a) {
  (!a.relatedTarget || !Ra(this.a(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Q(this, 2) && sc(this, !0);
};
f.bb = function(a) {
  a.relatedTarget && Ra(this.a(), a.relatedTarget) || !this.dispatchEvent("leave") || (Q(this, 4) && this.setActive(!1), Q(this, 2) && sc(this, !1));
};
f.ia = m;
f.ab = function(a) {
  this.isEnabled() && (Q(this, 2) && sc(this, !0), !xb(a) || B && C && a.ctrlKey || (Q(this, 4) && this.setActive(!0), this.h.Fa(this) && this.I().focus()));
  this.va || !xb(a) || B && C && a.ctrlKey || a.preventDefault();
};
f.eb = function(a) {
  this.isEnabled() && (Q(this, 2) && sc(this, !0), this.d & 4 && tc(this, a) && Q(this, 4) && this.setActive(!1));
};
f.$a = function(a) {
  this.isEnabled() && tc(this, a);
};
function tc(a, b) {
  if (Q(a, 16)) {
    var c = !a.oa();
    P(a, 16, c) && a.j(16, c);
  }
  Q(a, 8) && P(a, 8, !0) && a.j(8, !0);
  Q(a, 64) && (c = !(a.d & 64), P(a, 64, c) && a.j(64, c));
  c = new H("action", a);
  b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.La = b.La);
  return a.dispatchEvent(c);
}
f.Jb = function() {
  Q(this, 32) && P(this, 32, !0) && this.j(32, !0);
};
f.Za = function() {
  Q(this, 4) && this.setActive(!1);
  Q(this, 32) && P(this, 32, !1) && this.j(32, !1);
};
f.Lb = function(a) {
  return this.O && this.isEnabled() && 13 == a.keyCode && tc(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
};
if (!r(O)) {
  throw Error("Invalid component class " + O);
}
if (!r(Yb)) {
  throw Error("Invalid renderer class " + Yb);
}
var uc = fa(O);
fc[uc] = Yb;
function vc() {
  return new O;
}
if (!r(vc)) {
  throw Error("Invalid decorator function " + vc);
}
;function R(a, b, c) {
  O.call(this, 0, b || dc.fa(), c);
  ec(this);
  this.ta(!0);
  this.J = "" != a;
}
t(R, O);
var wc = A || B;
f = R.prototype;
f.K = !1;
f.ka = !1;
f.J = !1;
f.q = 0;
f.Rb = 0;
f.jb = 0;
f.fb = !1;
f.ra = !1;
f.Oa = !1;
f.Na = !1;
f.A = "";
f.Ra = function(a) {
  this.A = a;
  this.a() && xc(this);
};
function yc(a) {
  return a.w.top + a.w.bottom + a.ya.top + a.ya.bottom;
}
function zc(a) {
  var b = a.jb, c = a.a();
  b && c && a.ra && (b -= yc(a));
  return b;
}
f.D = function(a) {
  this.C(String(a));
};
f.Ba = function() {
  return this.a().value != this.A || Ac(this) || this.J ? this.a().value : "";
};
f.C = function(a) {
  R.b.C.call(this, a);
  this.J = "" != a;
  this.resize();
};
f.resize = function() {
  this.a() && this.ha();
};
function Ac(a) {
  return "placeholder" in a.a();
}
function xc(a) {
  if (a.A) {
    if (Ac(a)) {
      a.a().placeholder = a.A;
    } else {
      if (a.a() && !a.J && !a.ka) {
        var b = a.a(), c = ib;
        b.classList ? b.classList.add(c) : gb(b, c) || (b.className += 0 < b.className.length ? " " + c : c);
        a.a().value = a.A;
      }
    }
  }
}
f.H = function() {
  R.b.H.call(this);
  var a = this.a();
  Va(a, {overflowY:"hidden", overflowX:"auto", boxSizing:"border-box", MsBoxSizing:"border-box", WebkitBoxSizing:"border-box", MozBoxSizing:"border-box"});
  this.w = $a(a);
  this.ya = cb(a);
  Ub(this).c(a, "scroll", this.ha).c(a, "focus", this.ha).c(a, "keyup", this.ha).c(a, "mouseup", this.Sb).c(a, "blur", this.ub);
  xc(this);
  this.resize();
};
function Bc(a) {
  if (!a.fb) {
    var b = a.a().cloneNode(!1);
    Va(b, {position:"absolute", height:"auto", top:"-9999px", margin:"0", padding:"1px", border:"1px solid #000", overflow:"hidden"});
    a.Ya().G.body.appendChild(b);
    var c = b.scrollHeight;
    b.style.padding = "10px";
    var d = b.scrollHeight;
    a.Oa = d > c;
    b.style.borderWidth = "10px";
    a.Na = b.scrollHeight > d;
    b.style.height = "100px";
    100 != b.offsetHeight && (a.ra = !0);
    Qa(b);
    a.fb = !0;
  }
  b = a.a();
  isNaN(a.w.top) && (a.w = $a(b), a.ya = cb(b));
  var c = a.a().scrollHeight, e = a.a(), d = e.offsetHeight - e.clientHeight;
  if (!a.Oa) {
    var g = a.w, d = d - (g.top + g.bottom)
  }
  a.Na || (e = cb(e), d -= e.top + e.bottom);
  c += 0 < d ? d : 0;
  a.ra ? c -= yc(a) : (a.Oa || (d = a.w, c += d.top + d.bottom), a.Na || (a = cb(b), c += a.top + a.bottom));
  return c;
}
function Cc(a, b) {
  a.q != b && (a.q = b, a.a().style.height = b + "px");
}
function Dc(a) {
  a = a.a();
  a.style.height = "auto";
  var b = a.value.match(/\n/g) || [];
  a.rows = b.length + 1;
}
var ib = "textarea-placeholder-input";
R.prototype.ub = function() {
  Ac(this) || (this.ka = !1, "" == this.a().value && (this.J = !1, xc(this)));
};
R.prototype.ha = function(a) {
  if (!this.K) {
    var b = this.a();
    !Ac(this) && a && "focus" == a.type && (b.value == this.A && this.A && !this.ka && (hb(b), b.value = ""), this.ka = !0, this.J = "" != b.value);
    var c = !1;
    this.K = !0;
    a = this.q;
    if (b.scrollHeight) {
      var d = !1, e = !1, g = Bc(this), k = b.offsetHeight, l = zc(this), q;
      q = this.Rb;
      var S = this.a();
      q && S && this.ra && (q -= yc(this));
      l && g < l ? (Cc(this, l), d = !0) : q && g > q ? (Cc(this, q), b.style.overflowY = "", e = !0) : k != g ? Cc(this, g) : this.q || (this.q = g);
      d || e || !wc || (c = !0);
    } else {
      Dc(this);
    }
    this.K = !1;
    c && (b = this.a(), this.K || (this.K = !0, (e = b.scrollHeight) ? (g = Bc(this), c = zc(this), c && g <= c || (d = this.w, b.style.paddingBottom = d.bottom + 1 + "px", Bc(this) == g && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = Bc(this) - e, e >= c ? Cc(this, e) : Cc(this, c)), b.style.paddingBottom = d.bottom + "px")) : Dc(this), this.K = !1));
    a != this.q && this.dispatchEvent("resize");
  }
};
R.prototype.Sb = function() {
  var a = this.a(), b = a.offsetHeight;
  a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
  b != this.q && (this.q = this.jb = b);
};
function T(a, b) {
  null == a && (a = {});
  T.b.constructor.apply(this, arguments);
  a && this.pb(a);
  b && this.setData(b);
  fa(this);
}
t(T, M);
s("spark.core.Object", T);
T.prototype.pb = function(a) {
  return this.options = a;
};
T.prototype.setOptions = T.prototype.pb;
T.prototype.Hb = function() {
  return this.options;
};
T.prototype.getOptions = T.prototype.Hb;
T.prototype.Gb = function(a) {
  return this.options[a] || null;
};
T.prototype.getOption = T.prototype.Gb;
T.prototype.setData = function(a) {
  return this.data = a;
};
T.prototype.setData = T.prototype.setData;
T.prototype.getData = function() {
  return this.data;
};
T.prototype.getData = T.prototype.getData;
T.prototype.Ib = function() {
  return fa(this);
};
T.prototype.getUid = T.prototype.Ib;
T.prototype.v = function(a, b) {
  return J(this, a, b);
};
T.prototype.on = T.prototype.v;
T.prototype.Ja = function(a, b) {
  return Hb(this, a, b);
};
T.prototype.once = T.prototype.Ja;
T.prototype.xb = function(a, b) {
  return this.dispatchEvent({type:a, data:b});
};
T.prototype.emit = T.prototype.xb;
T.prototype.Ia = function(a, b) {
  return this.l(a, b);
};
T.prototype.off = T.prototype.Ia;
function U(a) {
  var b, c, d, e;
  c = [];
  d = 0;
  for (e = arguments.length;d < e;d++) {
    b = arguments[d], "string" === typeof b && c.push(b);
  }
  return Array.prototype.join.call(c, " ");
}
s("spark.utils.concatString", U);
function V(a, b) {
  null == a && (a = {});
  a.f = a.cssClass = "" + U("view", a.f || a.cssClass);
  a.tagName || (a.tagName = a.tagName || "div");
  a.Xa || (a.Xa = a.domId || null);
  a.ua || (a.ua = a.template || null);
  a.disabled || (a.disabled = a.disabled || !1);
  a.T || (a.T = a.eventHandlers || {});
  V.b.constructor.call(this, a, b);
  this.children = [];
  var c, d, e, g;
  g = this.options;
  e = g.tagName;
  d = g.Xa;
  c = g.f;
  g = g.ua;
  this.element = document.createElement(e);
  this.mb(c);
  d && this.nb(d);
  g && this.qb(g);
  var k;
  d = Ec;
  e = this.options.T;
  g = [];
  for (k in e) {
    c = e[k], d[k] && "function" === typeof c ? g.push(this.v(eb[d[k]], c)) : g.push(void 0);
  }
  a.disabled && this.disable();
}
t(V, T);
s("spark.core.View", V);
V.prototype.nb = function(a) {
  return this.a().id = a;
};
V.prototype.setDomId = V.prototype.nb;
V.prototype.Cb = function() {
  return this.a().id || null;
};
V.prototype.getDomId = V.prototype.Cb;
V.prototype.mb = function(a) {
  return this.a().className = a;
};
V.prototype.setClass = V.prototype.mb;
V.prototype.Ab = function() {
  return this.a().className;
};
V.prototype.getClass = V.prototype.Ab;
V.prototype.Bb = function() {
  return this.a().classList;
};
V.prototype.getClassList = V.prototype.Bb;
V.prototype.aa = function(a) {
  return this.a().classList.add(a);
};
V.prototype.addClass = V.prototype.aa;
V.prototype.Ma = function(a) {
  return this.a().classList.remove(a);
};
V.prototype.removeClass = V.prototype.Ma;
V.prototype.Nb = function(a) {
  return this.a().classList.contains(a);
};
V.prototype.hasClass = V.prototype.Nb;
V.prototype.a = function() {
  return this.element;
};
V.prototype.getElement = V.prototype.a;
V.prototype.qb = function(a) {
  return this.a().innerHTML = a;
};
V.prototype.setTemplate = V.prototype.qb;
V.prototype.tb = function() {
  return document.body.appendChild(this.a());
};
V.prototype.appendToDocumentBody = V.prototype.tb;
V.prototype.Vb = function() {
  var a, b;
  a = this.a();
  b = a.parentNode;
  if (!b) {
    return!1;
  }
  b.removeChild(a);
  return!0;
};
V.prototype.removeFromDocument = V.prototype.Vb;
V.prototype.o = function(a) {
  var b;
  a instanceof V ? -1 < this.children.indexOf(a) && (b = "This view already appended to target view.") : b = "View should be an instance of spark.core.View";
  if (b) {
    throw Error(b);
  }
  this.children.push(a);
  return this.a().appendChild(a.a());
};
V.prototype.appendView = V.prototype.o;
V.prototype.setAttribute = function(a, b) {
  return this.a().setAttribute(a, b);
};
V.prototype.setAttribute = V.prototype.setAttribute;
V.prototype.getAttribute = function(a) {
  return this.a().getAttribute(a);
};
V.prototype.getAttribute = V.prototype.getAttribute;
V.prototype.removeAttribute = function(a) {
  return this.a().removeAttribute(a);
};
V.prototype.removeAttribute = V.prototype.removeAttribute;
V.prototype.disable = function() {
  this.aa("disabled");
  this.setAttribute("disabled", "disabled");
  return this.disabled = !0;
};
V.prototype.disable = V.prototype.disable;
V.prototype.enable = function() {
  this.Ma("disabled");
  this.removeAttribute("disabled");
  return this.disabled = !1;
};
V.prototype.enable = V.prototype.enable;
V.prototype.toggle = function() {
  return this.hb() ? this.enable() : this.disable();
};
V.prototype.toggle = V.prototype.toggle;
V.prototype.hb = function() {
  return this.disabled || !1;
};
V.prototype.isDisabled = V.prototype.hb;
V.prototype.v = function(a, b) {
  Ec[a] && J(this.a(), a, b);
  return J(this, a, b);
};
V.prototype.on = V.prototype.v;
V.prototype.Ja = function(a, b) {
  Ec[a] && Hb(this.a(), a, b);
  return Hb(this, a, b);
};
V.prototype.once = V.prototype.Ja;
V.prototype.Ia = function(a, b) {
  Ib(this.a(), a, b);
  return this.l(a, b);
};
V.prototype.off = V.prototype.Ia;
var Ec = za(eb);
function W(a, b) {
  null == a && (a = {});
  a.f = a.cssClass = "" + U("input", a.type, a.f || a.cssClass);
  a.tagName || (a.tagName = a.tagName || "input");
  a.type || (a.type = a.type || "text");
  a.name || (a.name = a.name || null);
  a.value || (a.value = a.value || "");
  W.b.constructor.call(this, a, b);
  this.setAttribute("type", a.type);
  a.value && this.D(a.value);
  a.name && this.ob(a.name);
}
t(W, V);
s("spark.components.Field", W);
W.prototype.D = function(a) {
  return this.a().value = a;
};
W.prototype.setValue = W.prototype.D;
W.prototype.Ba = function() {
  return this.a().value;
};
W.prototype.getValue = W.prototype.Ba;
W.prototype.ob = function(a) {
  return this.setAttribute("name", a);
};
W.prototype.setName = W.prototype.ob;
W.prototype.getName = function() {
  return this.a().name;
};
W.prototype.getName = W.prototype.getName;
function X(a, b) {
  null == a && (a = {});
  a.tagName = a.tagName = "textarea";
  X.b.constructor.call(this, a, b);
  this.Sa = new R(this.options.value);
  this.Sa.Q(this.a());
  this.resize();
}
t(X, W);
s("spark.components.Textarea", X);
X.prototype.D = function(a) {
  X.b.D.apply(this, arguments);
  return this.resize();
};
X.prototype.setValue = X.prototype.D;
X.prototype.resize = function() {
  if (this.Sa) {
    return this.Sa.resize();
  }
};
X.prototype.resize = X.prototype.resize;
function Fc(a, b) {
  null == a && (a = {});
  a.tagName = a.tagName = "label";
  a.f = a.cssClass = "" + U("label", a.f || a.cssClass);
  a.label || (a.label = a.label || "Input Label");
  a.ua = a.label;
  Fc.b.constructor.call(this, a, b);
}
t(Fc, V);
s("spark.components.Label", Fc);
function Gc(a, b) {
  var c, d;
  null == a && (a = {});
  a.tagName = a.tagName = "button";
  a.f = a.cssClass = "" + U("button", a.f || a.cssClass);
  a.title || (a.title = a.title || null);
  a.Ta || (a.Ta = a.callback || null);
  a.Ea || (a.Ea = a.iconClass || null);
  a.T || (a.T = a.eventHandlers || {});
  c = a.Ta;
  "function" === typeof c && (a.T.click = c);
  d = c = "";
  a.Ea && (c = "<span class='icon " + a.Ea + "'></span>");
  a.title && (d = "<span>" + a.title + "</span>");
  a.ua = "" + c + d;
  Gc.b.constructor.call(this, a, b);
}
t(Gc, V);
s("spark.components.Button", Gc);
function Y(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "checkbox");
  a.checked || (a.checked = a.checked || !1);
  Y.b.constructor.call(this, a, b);
  !0 === a.checked && this.check();
}
t(Y, W);
s("spark.components.Checkbox", Y);
Y.prototype.check = function() {
  return this.a().checked = !0;
};
Y.prototype.check = Y.prototype.check;
Y.prototype.Yb = function() {
  return this.a().checked = !1;
};
Y.prototype.uncheck = Y.prototype.Yb;
Y.prototype.oa = function() {
  return this.a().checked;
};
Y.prototype.isChecked = Y.prototype.oa;
function Z(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  a.placeholder || (a.placeholder = a.placeholder || null);
  Z.b.constructor.call(this, a, b);
  a.placeholder && this.Ra(a.placeholder);
  this.v("focus", function(a) {
    return function() {
      return a.aa("focus");
    };
  }(this));
  this.v("blur", function(a) {
    return function() {
      return a.Ma("focus");
    };
  }(this));
}
t(Z, W);
s("spark.components.Input", Z);
Z.prototype.Ra = function(a) {
  return this.setAttribute("placeholder", a);
};
Z.prototype.setPlaceholder = Z.prototype.Ra;
Z.prototype.vb = function() {
  return this.removeAttribute("placeholder");
};
Z.prototype.clearPlaceholder = Z.prototype.vb;
Z.prototype.focus = function() {
  this.a().focus();
  return this.aa("focus");
};
Z.prototype.focus = Z.prototype.focus;
function Hc(a, b) {
  var c, d;
  null == a && (a = {});
  a.f = a.cssClass = "" + U("labeled-input", a.f);
  Hc.b.constructor.call(this, a, b);
  d = a.Qb || a.labelOptions;
  c = a.Pb || a.inputOptions;
  this.label = new Fc(d, b);
  this.input = Ic(c, b);
  this.o(this.label);
  this.o(this.input);
  this.label.v("click", function(a) {
    return function() {
      return a.input.focus();
    };
  }(this));
}
t(Hc, V);
s("spark.components.LabeledInput", Hc);
function Jc(a, b) {
  null == a && (a = {});
  a.type = a.type = "radio";
  Jc.b.constructor.call(this, a, b);
}
t(Jc, Y);
s("spark.components.Radio", Jc);
function Ic(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  return new Ic.Xb[a.type](a, b);
}
s("spark.components.FieldFactory", Ic);
Ic.Xb = {text:Z, input:Z, radio:Jc, checkbox:Y, label:Fc, button:Gc};
function $(a, b) {
  var c, d;
  null == a && (a = {});
  a.f = a.cssClass = "" + U("form", a.f || a.cssClass);
  $.b.constructor.call(this, a, b);
  this.X = [];
  this.buttons = [];
  this.ma = {};
  d = a.X || a.inputs;
  c = a.buttons || a.buttons;
  this.na = new V({f:"input-container"});
  this.za = new V({f:"buttons-container"});
  this.o(this.na);
  this.o(this.za);
  d && d.forEach(function(a) {
    return function(b) {
      return a.Va(b);
    };
  }(this));
  c && c.forEach(function(a) {
    return function(b) {
      return a.Ua(b);
    };
  }(this));
  this.setData(b);
}
t($, V);
s("spark.components.Form", $);
$.prototype.Va = function(a) {
  var b;
  b = a.name;
  a.label ? (a = new Hc({Qb:a, Pb:a}), this.na.o(a), this.X.push(a = a.input)) : (a = Ic(a), this.na.o(a), this.X.push(a));
  if (b) {
    return this.ma[b] = a;
  }
};
$.prototype.createInput = $.prototype.Va;
$.prototype.Ua = function(a) {
  a = new Gc(a);
  this.buttons.push(a);
  return this.za.o(a);
};
$.prototype.createButton = $.prototype.Ua;
$.prototype.setData = function(a) {
  var b, c, d, e;
  if (this.ma) {
    e = [];
    for (c in a) {
      d = a[c], (b = this.ma[c]) ? e.push(b.D(d)) : e.push(void 0);
    }
    return e;
  }
};
$.prototype.setData = $.prototype.setData;
$.prototype.getData = function() {
  var a, b, c, d, e;
  a = {};
  e = this.X;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], a[b.getName()] = b.Ba();
  }
  return a;
};
$.prototype.getData = $.prototype.getData;
$.prototype.Fb = function() {
  return this.na;
};
$.prototype.getInputsContainer = $.prototype.Fb;
$.prototype.zb = function() {
  return this.za;
};
$.prototype.getButtonsContainer = $.prototype.zb;
$.prototype.Eb = function() {
  return this.X;
};
$.prototype.getInputs = $.prototype.Eb;
$.prototype.yb = function() {
  return this.buttons;
};
$.prototype.getButtons = $.prototype.yb;
$.prototype.Db = function(a) {
  return this.ma[a] || null;
};
$.prototype.getInputByName = $.prototype.Db;
window.addEventListener("load", function() {
  return!0;
}, !1);
})();
