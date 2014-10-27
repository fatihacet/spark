(function(){var f, h = this;
function m() {
}
function aa(a) {
  a.ja = function() {
    return a.mb ? a.mb : a.mb = new a;
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
  a.ge = function(a, c, g) {
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
  return a ? new Ma(E(a)) : ka || (ka = new Ma);
}
function Na(a, b, c) {
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
function Oa(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
}
function Pa(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function Qa(a, b) {
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
function E(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Ra(a, b) {
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
        Oa(a), a.appendChild(E(a).createTextNode(String(b)));
      }
    }
  }
}
function Sa(a) {
  a = a.getAttributeNode("tabindex");
  return null != a && a.specified;
}
function Ta(a) {
  a = a.tabIndex;
  return da(a) && 0 <= a && 32768 > a;
}
function Ma(a) {
  this.K = a || h.document || document;
}
f = Ma.prototype;
f.cb = La;
f.a = function(a) {
  return p(a) ? this.K.getElementById(a) : a;
};
f.createElement = function(a) {
  return this.K.createElement(a);
};
f.createTextNode = function(a) {
  return this.K.createTextNode(String(a));
};
f.appendChild = function(a, b) {
  a.appendChild(b);
};
f.append = function(a, b) {
  Na(E(a), a, arguments);
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
f.removeNode = Pa;
f.contains = Qa;
f.Ha = function(a) {
  var b;
  (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Sa(a) || Ta(a)) : Sa(a) && Ta(a)) && z ? (a = r(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height:a.offsetHeight, width:a.offsetWidth}, a = null != a && 0 < a.height && 0 < a.width) : a = b;
  return a;
};
z && D(8);
function F(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
}
f = F.prototype;
f.clone = function() {
  return new F(this.top, this.right, this.bottom, this.left);
};
f.toString = function() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
f.contains = function(a) {
  return this && a ? a instanceof F ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
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
function Ua(a, b) {
  p(b) ? Va(a, void 0, b) : ya(b, ja(Va, a));
}
function Va(a, b, c) {
  var d;
  a: {
    if (d = ma(c), void 0 === a.style[d] && (c = (B ? "Webkit" : A ? "Moz" : z ? "ms" : y ? "O" : null) + na(c), void 0 !== a.style[c])) {
      d = c;
      break a;
    }
  }
  d && (a.style[d] = b);
}
function G(a, b) {
  var c = E(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
}
var Wa = A ? "MozUserSelect" : B ? "WebkitUserSelect" : null;
function Xa(a, b) {
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
function Ya(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? Xa(a, c) : 0;
}
function Za(a) {
  if (z) {
    var b = Ya(a, "paddingLeft"), c = Ya(a, "paddingRight"), d = Ya(a, "paddingTop");
    a = Ya(a, "paddingBottom");
    return new F(d, c, a, b);
  }
  b = G(a, "paddingLeft");
  c = G(a, "paddingRight");
  d = G(a, "paddingTop");
  a = G(a, "paddingBottom");
  return new F(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
var $a = {thin:2, medium:4, thick:6};
function ab(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0;
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return c in $a ? $a[c] : Xa(a, c);
}
function bb(a) {
  if (z && !(z && 9 <= Ka)) {
    var b = ab(a, "borderLeft"), c = ab(a, "borderRight"), d = ab(a, "borderTop");
    a = ab(a, "borderBottom");
    return new F(d, c, a, b);
  }
  b = G(a, "borderLeftWidth");
  c = G(a, "borderRightWidth");
  d = G(a, "borderTopWidth");
  a = G(a, "borderBottomWidth");
  return new F(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
;function cb(a) {
  return B ? "webkit" + a : y ? "o" + a.toLowerCase() : a.toLowerCase();
}
var db = {oc:"click", xc:"dblclick", ad:"mousedown", gd:"mouseup", fd:"mouseover", ed:"mouseout", dd:"mousemove", bd:"mouseenter", cd:"mouseleave", Ud:"selectstart", Qc:"keypress", Pc:"keydown", Rc:"keyup", mc:"blur", Ic:"focus", yc:"deactivate", Jc:z ? "focusin" : "DOMFocusIn", Kc:z ? "focusout" : "DOMFocusOut", nc:"change", Td:"select", Xd:"submit", Oc:"input", Od:"propertychange", Fc:"dragstart", Ac:"drag", Cc:"dragenter", Ec:"dragover", Dc:"dragleave", Gc:"drop", Bc:"dragend", be:"touchstart", 
ae:"touchmove", $d:"touchend", Zd:"touchcancel", lc:"beforeunload", tc:"consolemessage", uc:"contextmenu", zc:"DOMContentLoaded", ERROR:"error", Nc:"help", Sc:"load", Yc:"losecapture", Bd:"orientationchange", Pd:"readystatechange", Qd:"resize", Sd:"scroll", de:"unload", Mc:"hashchange", Cd:"pagehide", Dd:"pageshow", Nd:"popstate", vc:"copy", Ed:"paste", wc:"cut", ic:"beforecopy", jc:"beforecut", kc:"beforepaste", Ad:"online", zd:"offline", $c:"message", sc:"connect", hc:cb("AnimationStart"), fc:cb("AnimationEnd"), 
gc:cb("AnimationIteration"), ce:cb("TransitionEnd"), Gd:"pointerdown", Md:"pointerup", Fd:"pointercancel", Jd:"pointermove", Ld:"pointerover", Kd:"pointerout", Hd:"pointerenter", Id:"pointerleave", Lc:"gotpointercapture", Zc:"lostpointercapture", hd:"MSGestureChange", jd:"MSGestureEnd", kd:"MSGestureHold", ld:"MSGestureStart", md:"MSGestureTap", nd:"MSGotPointerCapture", od:"MSInertiaStart", pd:"MSLostPointerCapture", qd:"MSPointerCancel", rd:"MSPointerDown", sd:"MSPointerEnter", td:"MSPointerHover", 
ud:"MSPointerLeave", vd:"MSPointerMove", wd:"MSPointerOut", xd:"MSPointerOver", yd:"MSPointerUp", Yd:"textinput", qc:"compositionstart", rc:"compositionupdate", pc:"compositionend", Hc:"exit", Tc:"loadabort", Uc:"loadcommit", Vc:"loadredirect", Wc:"loadstart", Xc:"loadstop", Rd:"responsive", Vd:"sizechanged", ee:"unresponsive", fe:"visibilitychange", Wd:"storage"};
function eb(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function fb(a, b) {
  return a.classList ? a.classList.contains(b) : w(eb(a), b);
}
function gb(a) {
  var b = hb;
  a.classList ? a.classList.remove(b) : fb(a, b) && (a.className = pa(eb(a), function(a) {
    return a != b;
  }).join(" "));
}
;var ib = "closure_listenable_" + (1E6 * Math.random() | 0);
function jb(a) {
  try {
    return!(!a || !a[ib]);
  } catch (b) {
    return!1;
  }
}
var kb = 0;
function lb(a, b, c, d, e) {
  this.A = a;
  this.va = null;
  this.src = b;
  this.type = c;
  this.fa = !!d;
  this.na = e;
  this.key = ++kb;
  this.Q = this.ea = !1;
}
function mb(a) {
  a.Q = !0;
  a.A = null;
  a.va = null;
  a.src = null;
  a.na = null;
}
;function H(a) {
  this.src = a;
  this.e = {};
  this.da = 0;
}
H.prototype.add = function(a, b, c, d, e) {
  var g = a.toString();
  a = this.e[g];
  a || (a = this.e[g] = [], this.da++);
  var k = nb(a, b, d, e);
  -1 < k ? (b = a[k], c || (b.ea = !1)) : (b = new lb(b, this.src, g, !!d, e), b.ea = c, a.push(b));
  return b;
};
H.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.e)) {
    return!1;
  }
  var e = this.e[a];
  b = nb(e, b, c, d);
  return-1 < b ? (mb(e[b]), u.splice.call(e, b, 1), 0 == e.length && (delete this.e[a], this.da--), !0) : !1;
};
function ob(a, b) {
  var c = b.type;
  if (!(c in a.e)) {
    return!1;
  }
  var d = ra(a.e[c], b);
  d && (mb(b), 0 == a.e[c].length && (delete a.e[c], a.da--));
  return d;
}
H.prototype.qb = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.e) {
    if (!a || c == a) {
      for (var d = this.e[c], e = 0;e < d.length;e++) {
        ++b, mb(d[e]);
      }
      delete this.e[c];
      this.da--;
    }
  }
  return b;
};
H.prototype.$ = function(a, b, c, d) {
  a = this.e[a.toString()];
  var e = -1;
  a && (e = nb(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function nb(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var g = a[e];
    if (!g.Q && g.A == b && g.fa == !!c && g.na == d) {
      return e;
    }
  }
  return-1;
}
;var pb = !z || z && 9 <= Ka, qb = !z || z && 9 <= Ka, rb = z && !D("9");
!B || D("528");
A && D("1.9b") || z && D("8") || y && D("9.5") || B && D("528");
A && !D("8") || z && D("9");
function sb() {
  0 != tb && fa(this);
}
var tb = 0;
sb.prototype.Db = !1;
function I(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.F = !1;
  this.rb = !0;
}
I.prototype.stopPropagation = function() {
  this.F = !0;
};
I.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.rb = !1;
};
function ub(a) {
  ub[" "](a);
  return a;
}
ub[" "] = m;
function J(a, b) {
  I.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.Na = !1;
  this.q = null;
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
            ub(d.nodeName);
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
    this.Na = C ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.q = a;
    a.defaultPrevented && this.preventDefault();
  }
}
t(J, I);
var vb = [1, 4, 2];
function wb(a) {
  return pb ? 0 == a.q.button : "click" == a.type ? !0 : !!(a.q.button & vb[0]);
}
J.prototype.stopPropagation = function() {
  J.b.stopPropagation.call(this);
  this.q.stopPropagation ? this.q.stopPropagation() : this.q.cancelBubble = !0;
};
J.prototype.preventDefault = function() {
  J.b.preventDefault.call(this);
  var a = this.q;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, rb) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var xb = "closure_lm_" + (1E6 * Math.random() | 0), yb = {}, zb = 0;
function K(a, b, c, d, e) {
  if (n(b)) {
    for (var g = 0;g < b.length;g++) {
      K(a, b[g], c, d, e);
    }
    return null;
  }
  c = Ab(c);
  return jb(a) ? a.c(b, c, d, e) : Bb(a, b, c, !1, d, e);
}
function Bb(a, b, c, d, e, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var k = !!e, l = Cb(a);
  l || (a[xb] = l = new H(a));
  c = l.add(b, c, d, e, g);
  if (c.va) {
    return c;
  }
  d = Db();
  c.va = d;
  d.src = a;
  d.A = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, k) : a.attachEvent(Eb(b.toString()), d);
  zb++;
  return c;
}
function Db() {
  var a = Fb, b = qb ? function(c) {
    return a.call(b.src, b.A, c);
  } : function(c) {
    c = a.call(b.src, b.A, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Gb(a, b, c, d, e) {
  if (n(b)) {
    for (var g = 0;g < b.length;g++) {
      Gb(a, b[g], c, d, e);
    }
    return null;
  }
  c = Ab(c);
  return jb(a) ? a.ob(b, c, d, e) : Bb(a, b, c, !0, d, e);
}
function Hb(a, b, c, d, e) {
  if (n(b)) {
    for (var g = 0;g < b.length;g++) {
      Hb(a, b[g], c, d, e);
    }
  } else {
    c = Ab(c), jb(a) ? a.m(b, c, d, e) : a && (a = Cb(a)) && (b = a.$(b, c, !!d, e)) && M(b);
  }
}
function M(a) {
  if (da(a) || !a || a.Q) {
    return!1;
  }
  var b = a.src;
  if (jb(b)) {
    return ob(b.w, a);
  }
  var c = a.type, d = a.va;
  b.removeEventListener ? b.removeEventListener(c, d, a.fa) : b.detachEvent && b.detachEvent(Eb(c), d);
  zb--;
  (c = Cb(b)) ? (ob(c, a), 0 == c.da && (c.src = null, b[xb] = null)) : mb(a);
  return!0;
}
function Eb(a) {
  return a in yb ? yb[a] : yb[a] = "on" + a;
}
function Ib(a, b, c, d) {
  var e = 1;
  if (a = Cb(a)) {
    if (b = a.e[b.toString()]) {
      for (b = sa(b), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.fa == c && !g.Q && (e &= !1 !== Jb(g, d));
      }
    }
  }
  return Boolean(e);
}
function Jb(a, b) {
  var c = a.A, d = a.na || a.src;
  a.ea && M(a);
  return c.call(d, b);
}
function Fb(a, b) {
  if (a.Q) {
    return!0;
  }
  if (!qb) {
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
    c = new J(e, this);
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
      for (var g = a.type, l = e.length - 1;!c.F && 0 <= l;l--) {
        c.currentTarget = e[l], d &= Ib(e[l], g, !0, c);
      }
      for (l = 0;!c.F && l < e.length;l++) {
        c.currentTarget = e[l], d &= Ib(e[l], g, !1, c);
      }
    }
    return d;
  }
  return Jb(a, new J(b, this));
}
function Cb(a) {
  a = a[xb];
  return a instanceof H ? a : null;
}
var Kb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Ab(a) {
  return r(a) ? a : a[Kb] || (a[Kb] = function(b) {
    return a.handleEvent(b);
  });
}
;function Lb(a) {
  sb.call(this);
  this.Fa = a;
  this.ba = {};
}
t(Lb, sb);
var Mb = [];
f = Lb.prototype;
f.c = function(a, b, c, d) {
  n(b) || (b && (Mb[0] = b.toString()), b = Mb);
  for (var e = 0;e < b.length;e++) {
    var g = K(a, b[e], c || this.handleEvent, d || !1, this.Fa || this);
    if (!g) {
      break;
    }
    this.ba[g.key] = g;
  }
  return this;
};
f.ob = function(a, b, c, d) {
  return Nb(this, a, b, c, d);
};
function Nb(a, b, c, d, e, g) {
  if (n(c)) {
    for (var k = 0;k < c.length;k++) {
      Nb(a, b, c[k], d, e, g);
    }
  } else {
    b = Gb(b, c, d || a.handleEvent, e, g || a.Fa || a);
    if (!b) {
      return a;
    }
    a.ba[b.key] = b;
  }
  return a;
}
f.m = function(a, b, c, d, e) {
  if (n(b)) {
    for (var g = 0;g < b.length;g++) {
      this.m(a, b[g], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.Fa || this, c = Ab(c), d = !!d, b = jb(a) ? a.$(b, c, d, e) : a ? (a = Cb(a)) ? a.$(b, c, d, e) : null : null, b && (M(b), delete this.ba[b.key]);
  }
  return this;
};
f.qb = function() {
  ya(this.ba, M);
  this.ba = {};
};
f.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Ob() {
}
aa(Ob);
Ob.prototype.$b = 0;
function N() {
  sb.call(this);
  this.w = new H(this);
  this.zb = this;
}
t(N, sb);
N.prototype[ib] = !0;
f = N.prototype;
f.Ma = null;
f.Sa = function(a) {
  this.Ma = a;
};
f.addEventListener = function(a, b, c, d) {
  K(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  Hb(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  var b, c = this.Ma;
  if (c) {
    for (b = [];c;c = c.Ma) {
      b.push(c);
    }
  }
  var c = this.zb, d = a.type || a;
  if (p(a)) {
    a = new I(a, c);
  } else {
    if (a instanceof I) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new I(d, c);
      Ba(a, e);
    }
  }
  var e = !0, g;
  if (b) {
    for (var k = b.length - 1;!a.F && 0 <= k;k--) {
      g = a.currentTarget = b[k], e = Pb(g, d, !0, a) && e;
    }
  }
  a.F || (g = a.currentTarget = c, e = Pb(g, d, !0, a) && e, a.F || (e = Pb(g, d, !1, a) && e));
  if (b) {
    for (k = 0;!a.F && k < b.length;k++) {
      g = a.currentTarget = b[k], e = Pb(g, d, !1, a) && e;
    }
  }
  return e;
};
f.c = function(a, b, c, d) {
  return this.w.add(String(a), b, !1, c, d);
};
f.ob = function(a, b, c, d) {
  return this.w.add(String(a), b, !0, c, d);
};
f.m = function(a, b, c, d) {
  return this.w.remove(String(a), b, c, d);
};
function Pb(a, b, c, d) {
  b = a.w.e[String(b)];
  if (!b) {
    return!0;
  }
  b = sa(b);
  for (var e = !0, g = 0;g < b.length;++g) {
    var k = b[g];
    if (k && !k.Q && k.fa == c) {
      var l = k.A, q = k.na || k.src;
      k.ea && ob(a.w, k);
      e = !1 !== l.call(q, d) && e;
    }
  }
  return e && 0 != d.rb;
}
f.$ = function(a, b, c, d) {
  return this.w.$(String(a), b, c, d);
};
function O(a) {
  N.call(this);
  this.X = a || La();
  this.ca = Qb;
}
t(O, N);
O.prototype.Vb = Ob.ja();
var Qb = null;
function Rb(a, b) {
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
f = O.prototype;
f.pa = null;
f.o = !1;
f.f = null;
f.ca = null;
f.t = null;
f.Ca = null;
f.J = null;
function Sb(a, b) {
  if (a.t && a.t.J) {
    var c = a.t.J, d = a.pa;
    d in c && delete c[d];
    c = a.t.J;
    if (b in c) {
      throw Error('The object already contains the key "' + b + '"');
    }
    c[b] = a;
  }
  a.pa = b;
}
f.a = function() {
  return this.f;
};
function Tb(a) {
  a.ka || (a.ka = new Lb(a));
  return a.ka;
}
f.getParent = function() {
  return this.t;
};
f.Sa = function(a) {
  if (this.t && this.t != a) {
    throw Error("Method not supported");
  }
  O.b.Sa.call(this, a);
};
f.cb = function() {
  return this.X;
};
f.W = function(a) {
  if (this.o) {
    throw Error("Component already rendered");
  }
  if (a && this.V(a)) {
    var b = E(a);
    this.X && this.X.K == b || (this.X = La(a));
    this.$a(a);
    this.L();
  } else {
    throw Error("Invalid element to decorate");
  }
};
f.V = function() {
  return!0;
};
f.$a = function(a) {
  this.f = a;
};
f.L = function() {
  this.o = !0;
  Ub(this, function(a) {
    !a.o && a.a() && a.L();
  });
};
f.ia = function() {
  Ub(this, function(a) {
    a.o && a.ia();
  });
  this.ka && this.ka.qb();
  this.o = !1;
};
f.Z = function() {
  return this.f;
};
f.R = function(a) {
  if (this.o) {
    throw Error("Component already rendered");
  }
  this.ca = a;
};
function Ub(a, b) {
  a.Ca && v(a.Ca, b, void 0);
}
f.removeChild = function(a, b) {
  if (a) {
    var c = p(a) ? a : a.pa || (a.pa = ":" + (a.Vb.$b++).toString(36)), d;
    this.J && c ? (d = this.J, d = (c in d ? d[c] : void 0) || null) : d = null;
    a = d;
    if (c && a) {
      d = this.J;
      c in d && delete d[c];
      ra(this.Ca, a);
      b && (a.ia(), a.f && Pa(a.f));
      c = a;
      if (null == c) {
        throw Error("Unable to set parent component");
      }
      c.t = null;
      O.b.Sa.call(c, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
var Vb;
function Wb(a, b, c) {
  ca(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (Vb || (Vb = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = Vb, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
}
;function Xb() {
}
var Yb;
aa(Xb);
f = Xb.prototype;
f.Z = function(a) {
  return a;
};
f.Y = function(a, b, c) {
  if (a = a.a ? a.a() : a) {
    if (z && !D("7")) {
      var d = Zb(ua(a), b);
      d.push(b);
      ja(c ? va : wa, a).apply(null, d);
    } else {
      c ? va(a, b) : wa(a, b);
    }
  }
};
f.V = function() {
  return!0;
};
f.W = function(a, b) {
  b.id && Sb(a, b.id);
  var c = this.Z(b);
  c && c.firstChild && $b(c.firstChild.nextSibling ? sa(c.childNodes) : c.firstChild);
  var d = 0, e = this.g(), g = this.g(), k = !1, l = !1, c = !1, q = ua(b);
  v(q, function(a) {
    if (k || a != e) {
      if (l || a != g) {
        var b = d;
        this.xb || (this.ga || ac(this), this.xb = za(this.ga));
        a = parseInt(this.xb[a], 10);
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
  var S = a.n;
  S && q.push.apply(q, S);
  if (z && !D("7")) {
    var L = Zb(q);
    0 < L.length && (q.push.apply(q, L), c = !0);
  }
  if (!k || !l || S || c) {
    b.className = q.join(" ");
  }
  bc(this, a, b);
  return b;
};
function bc(a, b, c) {
  b.T || Wb(c, "hidden", !b.T);
  b.isEnabled() || a.S(c, 1, !b.isEnabled());
  b.l & 8 && a.S(c, 8, !!(b.d & 8));
  b.l & 16 && a.S(c, 16, b.ra());
  b.l & 64 && a.S(c, 64, !!(b.d & 64));
}
f.wa = function(a, b) {
  var c = !b, d = z || y ? a.getElementsByTagName("*") : null;
  if (Wa) {
    if (c = c ? "none" : "", a.style[Wa] = c, d) {
      for (var e = 0, g;g = d[e];e++) {
        g.style[Wa] = c;
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
f.R = function(a, b) {
  this.Y(a, this.g() + "-rtl", b);
};
f.Ha = function(a) {
  var b;
  return a.l & 32 && (b = a.M()) ? Sa(b) && Ta(b) : !1;
};
f.Ra = function(a, b) {
  var c;
  if (a.l & 32 && (c = a.M())) {
    if (!b && a.d & 32) {
      try {
        c.blur();
      } catch (d) {
      }
      a.d & 32 && a.eb();
    }
    (Sa(c) && Ta(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")));
  }
};
f.k = function(a, b, c) {
  var d = a.a();
  if (d) {
    var e;
    this.ga || ac(this);
    (e = this.ga[b]) && this.Y(a, e, c);
    this.S(d, b, c);
  }
};
f.S = function(a, b, c) {
  Yb || (Yb = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Yb[b]) && Wb(a, b, c);
};
f.G = function(a, b) {
  var c = this.Z(a);
  if (c && (Oa(c), b)) {
    if (p(b)) {
      Ra(c, b);
    } else {
      var d = function(a) {
        if (a) {
          var b = E(c);
          c.appendChild(p(a) ? b.createTextNode(a) : a);
        }
      };
      n(b) ? v(b, d) : !ca(b) || "nodeType" in b ? d(b) : v(sa(b), d);
    }
  }
};
f.M = function(a) {
  return a.a();
};
f.g = function() {
  return "goog-control";
};
function Zb(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  v([], function(d) {
    !qa(d, ja(w, a)) || b && !w(d, b) || c.push(d.join("_"));
  });
  return c;
}
function ac(a) {
  var b = a.g();
  a.ga = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"};
}
;function cc() {
}
t(cc, Xb);
aa(cc);
f = cc.prototype;
f.W = function(a, b) {
  dc(a);
  a.za &= -256;
  if (a.o && a.d & 32) {
    throw Error("Component already rendered");
  }
  a.d & 32 && a.k(32, !1);
  a.l &= -33;
  cc.b.W.call(this, a, b);
  a.G(b.value);
  return b;
};
f.V = function(a) {
  return "TEXTAREA" == a.tagName;
};
f.R = m;
f.Ha = function(a) {
  return a.isEnabled();
};
f.Ra = m;
f.k = function(a, b, c) {
  cc.b.k.call(this, a, b, c);
  (a = a.a()) && 1 == b && (a.disabled = c);
};
f.S = m;
f.G = function(a, b) {
  a && (a.value = b);
};
f.g = function() {
  return "goog-textarea";
};
var ec = {};
function fc(a, b, c, d, e) {
  if (!(z || B && D("525"))) {
    return!0;
  }
  if (C && e) {
    return gc(a);
  }
  if (e && !d) {
    return!1;
  }
  da(b) && (b = hc(b));
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
  return gc(a);
}
function gc(a) {
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
function hc(a) {
  if (A) {
    a = ic(a);
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
function ic(a) {
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
;function jc(a, b) {
  N.call(this);
  a && kc(this, a, b);
}
t(jc, N);
f = jc.prototype;
f.f = null;
f.sa = null;
f.Ia = null;
f.ta = null;
f.j = -1;
f.s = -1;
f.ya = !1;
var lc = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, mc = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, nc = z || 
B && D("525"), oc = C && A;
f = jc.prototype;
f.Rb = function(a) {
  B && (17 == this.j && !a.ctrlKey || 18 == this.j && !a.altKey || C && 91 == this.j && !a.metaKey) && (this.s = this.j = -1);
  -1 == this.j && (a.ctrlKey && 17 != a.keyCode ? this.j = 17 : a.altKey && 18 != a.keyCode ? this.j = 18 : a.metaKey && 91 != a.keyCode && (this.j = 91));
  nc && !fc(a.keyCode, this.j, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.s = hc(a.keyCode), oc && (this.ya = a.altKey));
};
f.Tb = function(a) {
  this.s = this.j = -1;
  this.ya = a.altKey;
};
f.handleEvent = function(a) {
  var b = a.q, c, d, e = b.altKey;
  z && "keypress" == a.type ? (c = this.s, d = 13 != c && 27 != c ? b.keyCode : 0) : B && "keypress" == a.type ? (c = this.s, d = 0 <= b.charCode && 63232 > b.charCode && gc(c) ? b.charCode : 0) : y ? (c = this.s, d = gc(c) ? b.keyCode : 0) : (c = b.keyCode || this.s, d = b.charCode || 0, oc && (e = this.ya), C && 63 == d && 224 == c && (c = 191));
  var g = c = hc(c), k = b.keyIdentifier;
  c ? 63232 <= c && c in lc ? g = lc[c] : 25 == c && a.shiftKey && (g = 9) : k && k in mc && (g = mc[k]);
  a = g == this.j;
  this.j = g;
  b = new pc(g, d, a, b);
  b.altKey = e;
  this.dispatchEvent(b);
};
f.a = function() {
  return this.f;
};
function kc(a, b, c) {
  a.ta && a.detach();
  a.f = b;
  a.sa = K(a.f, "keypress", a, c);
  a.Ia = K(a.f, "keydown", a.Rb, c, a);
  a.ta = K(a.f, "keyup", a.Tb, c, a);
}
f.detach = function() {
  this.sa && (M(this.sa), M(this.Ia), M(this.ta), this.ta = this.Ia = this.sa = null);
  this.f = null;
  this.s = this.j = -1;
};
function pc(a, b, c, d) {
  J.call(this, d);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
}
t(pc, J);
function P(a, b, c) {
  O.call(this, c);
  if (!(a = b)) {
    a = this.constructor;
    for (var d;a;) {
      d = fa(a);
      if (d = ec[d]) {
        break;
      }
      a = a.b ? a.b.constructor : null;
    }
    a = d ? r(d.ja) ? d.ja() : new d : null;
  }
  this.h = a;
}
t(P, O);
f = P.prototype;
f.d = 0;
f.l = 39;
f.za = 255;
f.cc = 0;
f.T = !0;
f.n = null;
f.Ea = !0;
f.xa = !1;
f.ac = null;
function dc(a) {
  a.o && 0 != a.Ea && qc(a, !1);
  a.Ea = !1;
}
f.M = function() {
  return this.h.M(this);
};
f.Y = function(a, b) {
  b ? a && (this.n ? w(this.n, a) || this.n.push(a) : this.n = [a], this.h.Y(this, a, !0)) : a && this.n && ra(this.n, a) && (0 == this.n.length && (this.n = null), this.h.Y(this, a, !1));
};
f.Z = function() {
  return this.h.Z(this.a());
};
f.V = function(a) {
  return this.h.V(a);
};
f.$a = function(a) {
  this.f = a = this.h.W(this, a);
  var b = this.ac || void 0;
  if (b) {
    var c = a;
    b ? c.setAttribute("role", b) : c.removeAttribute("role");
  }
  this.xa || this.h.wa(a, !1);
  this.T = "none" != a.style.display;
};
f.L = function() {
  P.b.L.call(this);
  var a = this.h;
  if (null == this.ca) {
    var b = this.o ? this.f : this.X.K.body;
    this.ca = "rtl" == (G(b, "direction") || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction);
  }
  this.ca && a.R(this.a(), !0);
  this.isEnabled() && a.Ra(this, this.T);
  this.l & -2 && (this.Ea && qc(this, !0), this.l & 32 && (a = this.M())) && (b = this.Ja || (this.Ja = new jc), kc(b, a), Tb(this).c(b, "key", this.Sb).c(a, "focus", this.Qb).c(a, "blur", this.eb));
};
function qc(a, b) {
  var c = Tb(a), d = a.a();
  b ? (c.c(d, "mouseover", a.ib).c(d, "mousedown", a.gb).c(d, "mouseup", a.jb).c(d, "mouseout", a.hb), a.ma != m && c.c(d, "contextmenu", a.ma), z && c.c(d, "dblclick", a.fb)) : (c.m(d, "mouseover", a.ib).m(d, "mousedown", a.gb).m(d, "mouseup", a.jb).m(d, "mouseout", a.hb), a.ma != m && c.m(d, "contextmenu", a.ma), z && c.m(d, "dblclick", a.fb));
}
f.ia = function() {
  P.b.ia.call(this);
  this.Ja && this.Ja.detach();
  this.T && this.isEnabled() && this.h.Ra(this, !1);
};
f.G = function(a) {
  this.h.G(this.a(), a);
};
function $b() {
}
f.R = function(a) {
  P.b.R.call(this, a);
  var b = this.a();
  b && this.h.R(b, a);
};
f.wa = function(a) {
  this.xa = a;
  var b = this.a();
  b && this.h.wa(b, a);
};
f.isEnabled = function() {
  return!(this.d & 1);
};
function rc(a, b) {
  Q(a, 2, b) && a.k(2, b);
}
f.setActive = function(a) {
  Q(this, 4, a) && this.k(4, a);
};
f.ra = function() {
  return!!(this.d & 16);
};
f.k = function(a, b) {
  this.l & a && b != !!(this.d & a) && (this.h.k(this, a, b), this.d = b ? this.d | a : this.d & ~a);
};
function R(a, b) {
  return!!(a.za & b) && !!(a.l & b);
}
function Q(a, b, c) {
  return!!(a.l & b) && !!(a.d & b) != c && (!(a.cc & b) || a.dispatchEvent(Rb(b, c))) && !a.Db;
}
f.ib = function(a) {
  (!a.relatedTarget || !Qa(this.a(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && R(this, 2) && rc(this, !0);
};
f.hb = function(a) {
  a.relatedTarget && Qa(this.a(), a.relatedTarget) || !this.dispatchEvent("leave") || (R(this, 4) && this.setActive(!1), R(this, 2) && rc(this, !1));
};
f.ma = m;
f.gb = function(a) {
  this.isEnabled() && (R(this, 2) && rc(this, !0), !wb(a) || B && C && a.ctrlKey || (R(this, 4) && this.setActive(!0), this.h.Ha(this) && this.M().focus()));
  this.xa || !wb(a) || B && C && a.ctrlKey || a.preventDefault();
};
f.jb = function(a) {
  this.isEnabled() && (R(this, 2) && rc(this, !0), this.d & 4 && sc(this, a) && R(this, 4) && this.setActive(!1));
};
f.fb = function(a) {
  this.isEnabled() && sc(this, a);
};
function sc(a, b) {
  if (R(a, 16)) {
    var c = !a.ra();
    Q(a, 16, c) && a.k(16, c);
  }
  R(a, 8) && Q(a, 8, !0) && a.k(8, !0);
  R(a, 64) && (c = !(a.d & 64), Q(a, 64, c) && a.k(64, c));
  c = new I("action", a);
  b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.Na = b.Na);
  return a.dispatchEvent(c);
}
f.Qb = function() {
  R(this, 32) && Q(this, 32, !0) && this.k(32, !0);
};
f.eb = function() {
  R(this, 4) && this.setActive(!1);
  R(this, 32) && Q(this, 32, !1) && this.k(32, !1);
};
f.Sb = function(a) {
  return this.T && this.isEnabled() && 13 == a.keyCode && sc(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
};
if (!r(P)) {
  throw Error("Invalid component class " + P);
}
if (!r(Xb)) {
  throw Error("Invalid renderer class " + Xb);
}
var tc = fa(P);
ec[tc] = Xb;
function uc() {
  return new P;
}
if (!r(uc)) {
  throw Error("Invalid decorator function " + uc);
}
;function T(a, b, c) {
  P.call(this, 0, b || cc.ja(), c);
  dc(this);
  this.wa(!0);
  this.N = "" != a;
}
t(T, P);
var vc = A || B;
f = T.prototype;
f.P = !1;
f.oa = !1;
f.N = !1;
f.r = 0;
f.Yb = 0;
f.pb = 0;
f.kb = !1;
f.ua = !1;
f.Qa = !1;
f.Pa = !1;
f.D = "";
f.Ta = function(a) {
  this.D = a;
  this.a() && wc(this);
};
function xc(a) {
  return a.C.top + a.C.bottom + a.Aa.top + a.Aa.bottom;
}
function yc(a) {
  var b = a.pb, c = a.a();
  b && c && a.ua && (b -= xc(a));
  return b;
}
f.H = function(a) {
  this.G(String(a));
};
f.Da = function() {
  return this.a().value != this.D || zc(this) || this.N ? this.a().value : "";
};
f.G = function(a) {
  T.b.G.call(this, a);
  this.N = "" != a;
  this.resize();
};
f.resize = function() {
  this.a() && this.la();
};
function zc(a) {
  return "placeholder" in a.a();
}
function wc(a) {
  if (a.D) {
    if (zc(a)) {
      a.a().placeholder = a.D;
    } else {
      if (a.a() && !a.N && !a.oa) {
        var b = a.a(), c = hb;
        b.classList ? b.classList.add(c) : fb(b, c) || (b.className += 0 < b.className.length ? " " + c : c);
        a.a().value = a.D;
      }
    }
  }
}
f.L = function() {
  T.b.L.call(this);
  var a = this.a();
  Ua(a, {overflowY:"hidden", overflowX:"auto", boxSizing:"border-box", MsBoxSizing:"border-box", WebkitBoxSizing:"border-box", MozBoxSizing:"border-box"});
  this.C = Za(a);
  this.Aa = bb(a);
  Tb(this).c(a, "scroll", this.la).c(a, "focus", this.la).c(a, "keyup", this.la).c(a, "mouseup", this.Zb).c(a, "blur", this.Bb);
  wc(this);
  this.resize();
};
function Ac(a) {
  if (!a.kb) {
    var b = a.a().cloneNode(!1);
    Ua(b, {position:"absolute", height:"auto", top:"-9999px", margin:"0", padding:"1px", border:"1px solid #000", overflow:"hidden"});
    a.cb().K.body.appendChild(b);
    var c = b.scrollHeight;
    b.style.padding = "10px";
    var d = b.scrollHeight;
    a.Qa = d > c;
    b.style.borderWidth = "10px";
    a.Pa = b.scrollHeight > d;
    b.style.height = "100px";
    100 != b.offsetHeight && (a.ua = !0);
    Pa(b);
    a.kb = !0;
  }
  b = a.a();
  isNaN(a.C.top) && (a.C = Za(b), a.Aa = bb(b));
  var c = a.a().scrollHeight, e = a.a(), d = e.offsetHeight - e.clientHeight;
  if (!a.Qa) {
    var g = a.C, d = d - (g.top + g.bottom)
  }
  a.Pa || (e = bb(e), d -= e.top + e.bottom);
  c += 0 < d ? d : 0;
  a.ua ? c -= xc(a) : (a.Qa || (d = a.C, c += d.top + d.bottom), a.Pa || (a = bb(b), c += a.top + a.bottom));
  return c;
}
function Bc(a, b) {
  a.r != b && (a.r = b, a.a().style.height = b + "px");
}
function Cc(a) {
  a = a.a();
  a.style.height = "auto";
  var b = a.value.match(/\n/g) || [];
  a.rows = b.length + 1;
}
var hb = "textarea-placeholder-input";
T.prototype.Bb = function() {
  zc(this) || (this.oa = !1, "" == this.a().value && (this.N = !1, wc(this)));
};
T.prototype.la = function(a) {
  if (!this.P) {
    var b = this.a();
    !zc(this) && a && "focus" == a.type && (b.value == this.D && this.D && !this.oa && (gb(b), b.value = ""), this.oa = !0, this.N = "" != b.value);
    var c = !1;
    this.P = !0;
    a = this.r;
    if (b.scrollHeight) {
      var d = !1, e = !1, g = Ac(this), k = b.offsetHeight, l = yc(this), q;
      q = this.Yb;
      var S = this.a();
      q && S && this.ua && (q -= xc(this));
      l && g < l ? (Bc(this, l), d = !0) : q && g > q ? (Bc(this, q), b.style.overflowY = "", e = !0) : k != g ? Bc(this, g) : this.r || (this.r = g);
      d || e || !vc || (c = !0);
    } else {
      Cc(this);
    }
    this.P = !1;
    c && (b = this.a(), this.P || (this.P = !0, (e = b.scrollHeight) ? (g = Ac(this), c = yc(this), c && g <= c || (d = this.C, b.style.paddingBottom = d.bottom + 1 + "px", Ac(this) == g && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = Ac(this) - e, e >= c ? Bc(this, e) : Bc(this, c)), b.style.paddingBottom = d.bottom + "px")) : Cc(this), this.P = !1));
    a != this.r && this.dispatchEvent("resize");
  }
};
T.prototype.Zb = function() {
  var a = this.a(), b = a.offsetHeight;
  a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
  b != this.r && (this.r = this.pb = b);
};
function U(a, b) {
  null == a && (a = {});
  U.b.constructor.apply(this, arguments);
  a && this.vb(a);
  b && this.setData(b);
  fa(this);
}
t(U, N);
s("spark.core.Object", U);
U.prototype.vb = function(a) {
  return this.options = a;
};
U.prototype.setOptions = U.prototype.vb;
U.prototype.Ob = function() {
  return this.options;
};
U.prototype.getOptions = U.prototype.Ob;
U.prototype.Nb = function(a) {
  return this.options[a] || null;
};
U.prototype.getOption = U.prototype.Nb;
U.prototype.setData = function(a) {
  return this.data = a;
};
U.prototype.setData = U.prototype.setData;
U.prototype.getData = function() {
  return this.data;
};
U.prototype.getData = U.prototype.getData;
U.prototype.Pb = function() {
  return fa(this);
};
U.prototype.getUid = U.prototype.Pb;
U.prototype.B = function(a, b) {
  return K(this, a, b);
};
U.prototype.on = U.prototype.B;
U.prototype.La = function(a, b) {
  return Gb(this, a, b);
};
U.prototype.once = U.prototype.La;
U.prototype.ha = function(a, b) {
  return this.dispatchEvent({type:a, data:b});
};
U.prototype.emit = U.prototype.ha;
U.prototype.Ka = function(a, b) {
  return this.m(a, b);
};
U.prototype.off = U.prototype.Ka;
function Dc(a) {
  var b, c, d, e, g, k, l;
  c = [];
  d = 0;
  for (g = arguments.length;d < g;d++) {
    if (b = arguments[d], "string" === typeof b) {
      if (-1 < b.indexOf(" ")) {
        for (l = b.split(" "), e = 0, k = l.length;e < k;e++) {
          b = l[e], -1 === c.indexOf(b) && c.push(b);
        }
      } else {
        c.push(b);
      }
    }
  }
  return Array.prototype.join.call(c, " ");
}
s("spark.utils.concatString", Dc);
function V(a, b) {
  var c;
  null == a && (a = {});
  a.tagName || (a.tagName = a.tagName || "div");
  a.ab || (a.ab = a.domId || null);
  a.I || (a.I = a.template || null);
  a.attributes || (a.attributes = a.attributes || {});
  a.v || (a.v = a.eventHandlers || {});
  null == a.disabled && (a.disabled = null != (c = a.disabled) ? c : !1);
  this.g(a);
  V.b.constructor.call(this, a, b);
  this.children = [];
  var d, e, g, k, l;
  c = this.options;
  k = c.tagName;
  e = c.ab;
  d = c.p;
  l = c.I;
  c = c.attributes;
  this.element = document.createElement(k);
  this.sb(d);
  e && this.tb(e);
  l && this.wb(l);
  e = [];
  for (g in c) {
    d = c[g], e.push(this.setAttribute(g, d));
  }
  var q;
  c = Ec;
  d = this.options.v;
  e = [];
  for (q in d) {
    g = d[q], c[q] && "function" === typeof g ? e.push(this.B(db[c[q]], g)) : e.push(void 0);
  }
  a.disabled && this.disable();
}
t(V, U);
s("spark.core.View", V);
V.prototype.tb = function(a) {
  return this.a().id = a;
};
V.prototype.setDomId = V.prototype.tb;
V.prototype.Ib = function() {
  return this.a().id || null;
};
V.prototype.getDomId = V.prototype.Ib;
V.prototype.sb = function(a) {
  return this.a().className = a;
};
V.prototype.setClass = V.prototype.sb;
V.prototype.Gb = function() {
  return this.a().className;
};
V.prototype.getClass = V.prototype.Gb;
V.prototype.Hb = function() {
  return this.a().classList;
};
V.prototype.getClassList = V.prototype.Hb;
V.prototype.U = function(a) {
  return this.a().classList.add(a);
};
V.prototype.addClass = V.prototype.U;
V.prototype.Oa = function(a) {
  return this.a().classList.remove(a);
};
V.prototype.removeClass = V.prototype.Oa;
V.prototype.Ub = function(a) {
  return this.a().classList.contains(a);
};
V.prototype.hasClass = V.prototype.Ub;
V.prototype.a = function() {
  return this.element;
};
V.prototype.getElement = V.prototype.a;
V.prototype.wb = function(a) {
  return this.a().innerHTML = a;
};
V.prototype.setTemplate = V.prototype.wb;
V.prototype.Ab = function() {
  return document.body.appendChild(this.a());
};
V.prototype.appendToDocumentBody = V.prototype.Ab;
V.prototype.bc = function() {
  var a, b;
  a = this.a();
  b = a.parentNode;
  if (!b) {
    return!1;
  }
  b.removeChild(a);
  return!0;
};
V.prototype.removeFromDocument = V.prototype.bc;
V.prototype.i = function(a) {
  var b;
  a instanceof V ? -1 < this.children.indexOf(a) && (b = "This view already appended to target view.") : b = "View should be an instance of spark.core.View";
  if (b) {
    throw Error(b);
  }
  this.children.push(a);
  return this.a().appendChild(a.a());
};
V.prototype.appendView = V.prototype.i;
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
  this.U("disabled");
  this.setAttribute("disabled", "disabled");
  return this.disabled = !0;
};
V.prototype.disable = V.prototype.disable;
V.prototype.enable = function() {
  this.Oa("disabled");
  this.removeAttribute("disabled");
  return this.disabled = !1;
};
V.prototype.enable = V.prototype.enable;
V.prototype.toggle = function() {
  return this.nb() ? this.enable() : this.disable();
};
V.prototype.toggle = V.prototype.toggle;
V.prototype.nb = function() {
  return this.disabled || !1;
};
V.prototype.isDisabled = V.prototype.nb;
V.prototype.B = function(a, b) {
  Ec[a] && K(this.a(), a, b);
  return K(this, a, b);
};
V.prototype.on = V.prototype.B;
V.prototype.La = function(a, b) {
  Ec[a] && Gb(this.a(), a, b);
  return Gb(this, a, b);
};
V.prototype.once = V.prototype.La;
V.prototype.Ka = function(a, b) {
  Hb(this.a(), a, b);
  return this.m(a, b);
};
V.prototype.off = V.prototype.Ka;
V.prototype.g = function(a, b) {
  var c;
  c = Dc("view", a.p || a.cssClass, b);
  return a.p = a.cssClass = c;
};
var Ec = za(db);
function W(a, b) {
  null == a && (a = {});
  a.tagName || (a.tagName = a.tagName || "input");
  a.type || (a.type = a.type || "text");
  a.name || (a.name = a.name || null);
  a.value || (a.value = a.value || "");
  this.g(a, "input " + a.type);
  W.b.constructor.call(this, a, b);
  this.setAttribute("type", a.type);
  a.value && this.H(a.value);
  a.name && this.ub(a.name);
}
t(W, V);
s("spark.components.Field", W);
W.prototype.H = function(a) {
  return this.a().value = a;
};
W.prototype.setValue = W.prototype.H;
W.prototype.Da = function() {
  return this.a().value;
};
W.prototype.getValue = W.prototype.Da;
W.prototype.ub = function(a) {
  return this.setAttribute("name", a);
};
W.prototype.setName = W.prototype.ub;
W.prototype.getName = function() {
  return this.a().name;
};
W.prototype.getName = W.prototype.getName;
function X(a, b) {
  null == a && (a = {});
  a.tagName = a.tagName = "textarea";
  this.g(a, "textarea");
  X.b.constructor.call(this, a, b);
  this.Ua = new T(this.options.value);
  this.Ua.W(this.a());
  this.resize();
}
t(X, W);
s("spark.components.Textarea", X);
X.prototype.H = function(a) {
  X.b.H.apply(this, arguments);
  return this.resize();
};
X.prototype.setValue = X.prototype.H;
X.prototype.resize = function() {
  if (this.Ua) {
    return this.Ua.resize();
  }
};
X.prototype.resize = X.prototype.resize;
function Fc(a, b) {
  null == a && (a = {});
  a.tagName = a.tagName = "label";
  a.label || (a.label = a.label || "Input Label");
  a.I = a.label;
  this.g(a, "label");
  Fc.b.constructor.call(this, a, b);
}
t(Fc, V);
s("spark.components.Label", Fc);
function Gc(a, b) {
  var c, d;
  null == a && (a = {});
  a.tagName = a.tagName = "button";
  a.title || (a.title = a.title || null);
  a.u || (a.u = a.callback || null);
  a.Ga || (a.Ga = a.iconClass || null);
  a.v || (a.v = a.eventHandlers || {});
  this.g(a, "button");
  c = a.u;
  "function" === typeof c && (a.v.click = c);
  d = c = "";
  a.Ga && (c = "<span class='icon " + a.Ga + "'></span>");
  a.title && (d = "<span>" + a.title + "</span>");
  a.I = "" + c + d;
  Gc.b.constructor.call(this, a, b);
}
t(Gc, V);
s("spark.components.Button", Gc);
function Y(a, b) {
  var c;
  null == a && (a = {});
  a.type || (a.type = a.type || "checkbox");
  null == a.checked && (a.checked = null != (c = a.checked) ? c : !1);
  Y.b.constructor.call(this, a, b);
  !0 === a.checked && this.check();
}
t(Y, W);
s("spark.components.Checkbox", Y);
Y.prototype.check = function() {
  return this.a().checked = !0;
};
Y.prototype.check = Y.prototype.check;
Y.prototype.ec = function() {
  return this.a().checked = !1;
};
Y.prototype.uncheck = Y.prototype.ec;
Y.prototype.ra = function() {
  return this.a().checked;
};
Y.prototype.isChecked = Y.prototype.ra;
function Z(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  a.placeholder || (a.placeholder = a.placeholder || null);
  Z.b.constructor.call(this, a, b);
  a.placeholder && this.Ta(a.placeholder);
  this.B("focus", function(a) {
    return function() {
      return a.U("focus");
    };
  }(this));
  this.B("blur", function(a) {
    return function() {
      return a.Oa("focus");
    };
  }(this));
}
t(Z, W);
s("spark.components.Input", Z);
Z.prototype.Ta = function(a) {
  return this.setAttribute("placeholder", a);
};
Z.prototype.setPlaceholder = Z.prototype.Ta;
Z.prototype.Cb = function() {
  return this.removeAttribute("placeholder");
};
Z.prototype.clearPlaceholder = Z.prototype.Cb;
Z.prototype.focus = function() {
  this.a().focus();
  return this.U("focus");
};
Z.prototype.focus = Z.prototype.focus;
function Hc(a, b) {
  var c, d;
  null == a && (a = {});
  this.g(a, "labeled-input");
  Hc.b.constructor.call(this, a, b);
  d = a.Xb || a.labelOptions;
  c = a.Wb || a.inputOptions;
  this.label = new Fc(d, b);
  this.input = Ic(c, b);
  this.i(this.label);
  this.i(this.input);
  this.label.B("click", function(a) {
    return function() {
      return a.input.focus();
    };
  }(this));
}
t(Hc, V);
s("spark.components.LabeledInput", Hc);
function Jc(a, b) {
  null == a && (a = {});
  a.type = a.type = "password";
  Jc.b.constructor.call(this, a, b);
}
t(Jc, Z);
s("spark.components.Password", Jc);
function Kc(a, b) {
  null == a && (a = {});
  a.type = a.type = "radio";
  Kc.b.constructor.call(this, a, b);
}
t(Kc, Y);
s("spark.components.Radio", Kc);
function Ic(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  return new Ic.dc[a.type](a, b);
}
s("spark.components.FieldFactory", Ic);
Ic.dc = {text:Z, input:Z, password:Jc, radio:Kc, checkbox:Y, label:Fc, button:Gc};
function $(a, b) {
  var c, d;
  null == a && (a = {});
  this.g(a, "form");
  $.b.constructor.call(this, a, b);
  this.O = [];
  this.buttons = [];
  this.qa = {};
  d = a.O || a.inputs;
  c = a.buttons || a.buttons;
  this.aa = new V({p:"input-container"});
  this.Ba = new V({p:"buttons-container"});
  this.i(this.aa);
  this.i(this.Ba);
  d && d.forEach(function(a) {
    return function(b) {
      return a.Za(b);
    };
  }(this));
  c && c.forEach(function(a) {
    return function(b) {
      return a.Ya(b);
    };
  }(this));
  this.setData(b);
}
t($, V);
s("spark.components.Form", $);
$.prototype.Za = function(a) {
  var b;
  b = a.name;
  a.label ? (a = new Hc({Xb:a, Wb:a}), this.aa.i(a), this.O.push(a = a.input)) : (a = Ic(a), this.aa.i(a), this.O.push(a));
  if (b) {
    return this.qa[b] = a;
  }
};
$.prototype.createInput = $.prototype.Za;
$.prototype.Ya = function(a) {
  a = new Gc(a);
  this.buttons.push(a);
  return this.Ba.i(a);
};
$.prototype.createButton = $.prototype.Ya;
$.prototype.setData = function(a) {
  var b, c, d, e;
  if (this.qa) {
    e = [];
    for (c in a) {
      d = a[c], (b = this.qa[c]) ? e.push(b.H(d)) : e.push(void 0);
    }
    return e;
  }
};
$.prototype.setData = $.prototype.setData;
$.prototype.getData = function() {
  var a, b, c, d, e;
  a = {};
  e = this.O;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], a[b.getName()] = b.Da();
  }
  return a;
};
$.prototype.getData = $.prototype.getData;
$.prototype.Mb = function() {
  return this.aa;
};
$.prototype.getInputsContainer = $.prototype.Mb;
$.prototype.Fb = function() {
  return this.Ba;
};
$.prototype.getButtonsContainer = $.prototype.Fb;
$.prototype.Lb = function() {
  return this.O;
};
$.prototype.getInputs = $.prototype.Lb;
$.prototype.Eb = function() {
  return this.buttons;
};
$.prototype.getButtons = $.prototype.Eb;
$.prototype.Kb = function(a) {
  return this.qa[a] || null;
};
$.prototype.getInputByName = $.prototype.Kb;
function Lc(a, b) {
  var c;
  null == a && (a = {});
  null == a.yb && (a.yb = null != (c = a.withImage) ? c : !0);
  a.lb || (a.lb = a.imageUrl || "http://lorempixel.com/460/144/city/4");
  a.title || (a.title = a.title || "Sign Up");
  a.Xa || (a.Xa = a.buttonTitle || "Sign Up");
  a.Wa || (a.Wa = a.buttonColor || "green");
  a.u || (a.u = a.callback || null);
  a.bb || (a.bb = a.forgotPasswordCallback || null);
  a.Va || (a.Va = a.alreadyRegisteredCallback || null);
  this.g(a, "sign-up-widget");
  Lc.b.constructor.call(this, a, b);
  a.yb && (c = new V({tagName:"img", attributes:{src:this.options.lb}}), this.i(c), this.U("with-image"));
  c = new V({I:this.options.title, p:"title"});
  this.i(c);
  this.form = new $(Mc(this));
  this.i(this.form);
  Nc(this);
}
t(Lc, V);
s("spark.widgets.SignUp", Lc);
function Nc(a) {
  var b, c, d, e;
  c = a.options;
  d = c.bb;
  b = c.Va;
  e = new V({tagName:"a", I:"Already Registered?", p:"already-registered", attributes:{href:"#"}, v:{click:function(a) {
    return function() {
      b && b.call(a);
      return a.ha("AlreadyRegisteredLinkClicked");
    };
  }(a)}});
  c = new V({tagName:"a", I:"Forgot password?", p:"forgot-password", attributes:{href:"#"}, v:{click:function(a) {
    return function() {
      d && d.call(a);
      return a.ha("ForgotPasswordLinkClicked");
    };
  }(a)}});
  a.i(e);
  a.form.aa.i(c);
}
function Mc(a) {
  var b;
  b = a.options;
  return{O:[{type:"text", placeholder:"Email or username", name:"username"}, {type:"password", placeholder:"Password", name:"password"}], buttons:[{title:b.Xa, p:b.Wa, u:function(a) {
    return function() {
      b.u && b.u.call(a);
      return a.ha("SignUpFormPosted");
    };
  }(a)}]};
}
Lc.prototype.Jb = function() {
  return this.form;
};
Lc.prototype.getForm = Lc.prototype.Jb;
window.addEventListener("load", function() {
  return!0;
}, !1);
})();
