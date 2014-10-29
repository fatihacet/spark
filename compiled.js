(function(){var g, h = this;
function m() {
}
function aa(a) {
  a.ka = function() {
    return a.sb ? a.sb : a.sb = new a;
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
function q(a) {
  return "function" == ba(a);
}
function ea(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(a, b) {
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
  a.we = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;var ia;
ia = Math.floor(2147483648 * Math.random());
function ja() {
  return(ia++).toString(36);
}
s("spark.utils.getUid", ja);
function ka(a) {
  var b, c, d, e, f, k, l;
  c = [];
  d = 0;
  for (f = arguments.length;d < f;d++) {
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
s("spark.utils.concatString", ka);
var la;
var ma = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function na(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function oa(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function pa(a) {
  var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;function qa() {
  0 != ra && (this[fa] || (this[fa] = ++ga));
  this.Fa = this.Fa;
  this.gc = this.gc;
}
var ra = 0;
qa.prototype.Fa = !1;
var sa = "closure_listenable_" + (1E6 * Math.random() | 0);
function ta(a) {
  return!(!a || !a[sa]);
}
var ua = 0;
function va(a, b, c, d, e) {
  this.C = a;
  this.ua = null;
  this.src = b;
  this.type = c;
  this.ha = !!d;
  this.na = e;
  this.key = ++ua;
  this.T = this.ga = !1;
}
function wa(a) {
  a.T = !0;
  a.C = null;
  a.ua = null;
  a.src = null;
  a.na = null;
}
;var u = Array.prototype, xa = u.indexOf ? function(a, b, c) {
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
  for (var d = a.length, e = p(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, ya = u.filter ? function(a, b, c) {
  return u.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, k = p(a) ? a.split("") : a, l = 0;l < d;l++) {
    if (l in k) {
      var r = k[l];
      b.call(c, r, l, a) && (e[f++] = r);
    }
  }
  return e;
}, za = u.every ? function(a, b, c) {
  return u.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return!1;
    }
  }
  return!0;
};
function Aa(a, b) {
  return 0 <= xa(a, b);
}
function Ba(a, b) {
  var c = xa(a, b), d;
  (d = 0 <= c) && u.splice.call(a, c, 1);
  return d;
}
function Ca(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
;function Da(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
}
var Ea = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Fa(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ea.length;f++) {
      c = Ea[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function w(a) {
  this.src = a;
  this.g = {};
  this.fa = 0;
}
w.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.g[f];
  a || (a = this.g[f] = [], this.fa++);
  var k = Ga(a, b, d, e);
  -1 < k ? (b = a[k], c || (b.ga = !1)) : (b = new va(b, this.src, f, !!d, e), b.ga = c, a.push(b));
  return b;
};
w.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.g)) {
    return!1;
  }
  var e = this.g[a];
  b = Ga(e, b, c, d);
  return-1 < b ? (wa(e[b]), u.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.fa--), !0) : !1;
};
function Ha(a, b) {
  var c = b.type;
  if (!(c in a.g)) {
    return!1;
  }
  var d = Ba(a.g[c], b);
  d && (wa(b), 0 == a.g[c].length && (delete a.g[c], a.fa--));
  return d;
}
w.prototype.wb = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.g) {
    if (!a || c == a) {
      for (var d = this.g[c], e = 0;e < d.length;e++) {
        ++b, wa(d[e]);
      }
      delete this.g[c];
      this.fa--;
    }
  }
  return b;
};
w.prototype.ba = function(a, b, c, d) {
  a = this.g[a.toString()];
  var e = -1;
  a && (e = Ga(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function Ga(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.T && f.C == b && f.ha == !!c && f.na == d) {
      return e;
    }
  }
  return-1;
}
;function x(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.H = !1;
  this.xb = !0;
}
x.prototype.stopPropagation = function() {
  this.H = !0;
};
x.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.xb = !1;
};
var Ia;
a: {
  var Ja = h.navigator;
  if (Ja) {
    var Ka = Ja.userAgent;
    if (Ka) {
      Ia = Ka;
      break a;
    }
  }
  Ia = "";
}
function y(a) {
  return-1 != Ia.indexOf(a);
}
;var A = y("Opera") || y("OPR"), B = y("Trident") || y("MSIE"), C = y("Gecko") && -1 == Ia.toLowerCase().indexOf("webkit") && !(y("Trident") || y("MSIE")), D = -1 != Ia.toLowerCase().indexOf("webkit"), La = h.navigator || null, E = -1 != (La && La.platform || "").indexOf("Mac");
function Ma() {
  var a = h.document;
  return a ? a.documentMode : void 0;
}
var Na = function() {
  var a = "", b;
  if (A && h.opera) {
    return a = h.opera.version, q(a) ? a() : a;
  }
  C ? b = /rv\:([^\);]+)(\)|;)/ : B ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : D && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Ia)) ? a[1] : "");
  return B && (b = Ma(), b > parseFloat(a)) ? String(b) : a;
}(), Oa = {};
function F(a) {
  var b;
  if (!(b = Oa[a])) {
    b = 0;
    for (var c = ma(String(Na)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var k = c[f] || "", l = d[f] || "", r = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
      do {
        var K = r.exec(k) || ["", "", ""], S = z.exec(l) || ["", "", ""];
        if (0 == K[0].length && 0 == S[0].length) {
          break;
        }
        b = na(0 == K[1].length ? 0 : parseInt(K[1], 10), 0 == S[1].length ? 0 : parseInt(S[1], 10)) || na(0 == K[2].length, 0 == S[2].length) || na(K[2], S[2]);
      } while (0 == b);
    }
    b = Oa[a] = 0 <= b;
  }
  return b;
}
var Pa = h.document, Qa = Pa && B ? Ma() || ("CSS1Compat" == Pa.compatMode ? parseInt(Na, 10) : 5) : void 0;
var Ra = !B || B && 9 <= Qa, Sa = !B || B && 9 <= Qa, Ta = B && !F("9");
!D || F("528");
C && F("1.9b") || B && F("8") || A && F("9.5") || D && F("528");
C && !F("8") || B && F("9");
function Ua(a) {
  return D ? "webkit" + a : A ? "o" + a.toLowerCase() : a.toLowerCase();
}
var Va = {uc:"click", ee:"rightclick", Dc:"dblclick", od:"mousedown", ud:"mouseup", td:"mouseover", sd:"mouseout", rd:"mousemove", pd:"mouseenter", qd:"mouseleave", he:"selectstart", ve:"wheel", cd:"keypress", bd:"keydown", dd:"keyup", sc:"blur", Vc:"focus", Ec:"deactivate", Wc:B ? "focusin" : "DOMFocusIn", Xc:B ? "focusout" : "DOMFocusOut", tc:"change", ge:"select", ke:"submit", ad:"input", ae:"propertychange", Sc:"dragstart", Nc:"drag", Pc:"dragenter", Rc:"dragover", Qc:"dragleave", Tc:"drop", 
Oc:"dragend", qe:"touchstart", pe:"touchmove", oe:"touchend", ne:"touchcancel", rc:"beforeunload", zc:"consolemessage", Ac:"contextmenu", Hc:"DOMContentLoaded", ERROR:"error", $c:"help", ed:"load", ld:"losecapture", Od:"orientationchange", be:"readystatechange", ce:"resize", fe:"scroll", se:"unload", Zc:"hashchange", Pd:"pagehide", Qd:"pageshow", $d:"popstate", Bc:"copy", Rd:"paste", Cc:"cut", oc:"beforecopy", pc:"beforecut", qc:"beforepaste", Nd:"online", Md:"offline", nd:"message", yc:"connect", 
nc:Ua("AnimationStart"), lc:Ua("AnimationEnd"), mc:Ua("AnimationIteration"), re:Ua("TransitionEnd"), Td:"pointerdown", Zd:"pointerup", Sd:"pointercancel", Wd:"pointermove", Yd:"pointerover", Xd:"pointerout", Ud:"pointerenter", Vd:"pointerleave", Yc:"gotpointercapture", md:"lostpointercapture", vd:"MSGestureChange", wd:"MSGestureEnd", xd:"MSGestureHold", yd:"MSGestureStart", zd:"MSGestureTap", Ad:"MSGotPointerCapture", Bd:"MSInertiaStart", Cd:"MSLostPointerCapture", Dd:"MSPointerCancel", Ed:"MSPointerDown", 
Fd:"MSPointerEnter", Gd:"MSPointerHover", Hd:"MSPointerLeave", Id:"MSPointerMove", Jd:"MSPointerOut", Kd:"MSPointerOver", Ld:"MSPointerUp", le:"text", me:"textInput", wc:"compositionstart", xc:"compositionupdate", vc:"compositionend", Uc:"exit", fd:"loadabort", gd:"loadcommit", hd:"loadredirect", jd:"loadstart", kd:"loadstop", de:"responsive", ie:"sizechanged", te:"unresponsive", ue:"visibilitychange", je:"storage", Mc:"DOMSubtreeModified", Ic:"DOMNodeInserted", Kc:"DOMNodeRemoved", Lc:"DOMNodeRemovedFromDocument", 
Jc:"DOMNodeInsertedIntoDocument", Fc:"DOMAttrModified", Gc:"DOMCharacterDataModified"};
function Wa(a) {
  Wa[" "](a);
  return a;
}
Wa[" "] = m;
function G(a, b) {
  x.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.Ua = !1;
  this.r = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (C) {
        var e;
        a: {
          try {
            Wa(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = D || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = D || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
    this.Ua = E ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.r = a;
    a.defaultPrevented && this.preventDefault();
  }
}
t(G, x);
var Xa = [1, 4, 2];
function Ya(a) {
  return Ra ? 0 == a.r.button : "click" == a.type ? !0 : !!(a.r.button & Xa[0]);
}
G.prototype.stopPropagation = function() {
  G.b.stopPropagation.call(this);
  this.r.stopPropagation ? this.r.stopPropagation() : this.r.cancelBubble = !0;
};
G.prototype.preventDefault = function() {
  G.b.preventDefault.call(this);
  var a = this.r;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Ta) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Za = "closure_lm_" + (1E6 * Math.random() | 0), $a = {}, ab = 0;
function H(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      H(a, b[f], c, d, e);
    }
    return null;
  }
  c = bb(c);
  return ta(a) ? a.c(b, c, d, e) : cb(a, b, c, !1, d, e);
}
function cb(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var k = !!e, l = db(a);
  l || (a[Za] = l = new w(a));
  c = l.add(b, c, d, e, f);
  if (c.ua) {
    return c;
  }
  d = eb();
  c.ua = d;
  d.src = a;
  d.C = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, k) : a.attachEvent(fb(b.toString()), d);
  ab++;
  return c;
}
function eb() {
  var a = gb, b = Sa ? function(c) {
    return a.call(b.src, b.C, c);
  } : function(c) {
    c = a.call(b.src, b.C, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function hb(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      hb(a, b[f], c, d, e);
    }
    return null;
  }
  c = bb(c);
  return ta(a) ? a.ub(b, c, d, e) : cb(a, b, c, !0, d, e);
}
function ib(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      ib(a, b[f], c, d, e);
    }
  } else {
    c = bb(c), ta(a) ? a.m(b, c, d, e) : a && (a = db(a)) && (b = a.ba(b, c, !!d, e)) && I(b);
  }
}
function I(a) {
  if (da(a) || !a || a.T) {
    return!1;
  }
  var b = a.src;
  if (ta(b)) {
    return Ha(b.A, a);
  }
  var c = a.type, d = a.ua;
  b.removeEventListener ? b.removeEventListener(c, d, a.ha) : b.detachEvent && b.detachEvent(fb(c), d);
  ab--;
  (c = db(b)) ? (Ha(c, a), 0 == c.fa && (c.src = null, b[Za] = null)) : wa(a);
  return!0;
}
function fb(a) {
  return a in $a ? $a[a] : $a[a] = "on" + a;
}
function jb(a, b, c, d) {
  var e = 1;
  if (a = db(a)) {
    if (b = a.g[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.ha == c && !f.T && (e &= !1 !== kb(f, d));
      }
    }
  }
  return Boolean(e);
}
function kb(a, b) {
  var c = a.C, d = a.na || a.src;
  a.ga && I(a);
  return c.call(d, b);
}
function gb(a, b) {
  if (a.T) {
    return!0;
  }
  if (!Sa) {
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
    c = new G(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (k) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, l = e.length - 1;!c.H && 0 <= l;l--) {
        c.currentTarget = e[l], d &= jb(e[l], f, !0, c);
      }
      for (l = 0;!c.H && l < e.length;l++) {
        c.currentTarget = e[l], d &= jb(e[l], f, !1, c);
      }
    }
    return d;
  }
  return kb(a, new G(b, this));
}
function db(a) {
  a = a[Za];
  return a instanceof w ? a : null;
}
var lb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function bb(a) {
  if (q(a)) {
    return a;
  }
  a[lb] || (a[lb] = function(b) {
    return a.handleEvent(b);
  });
  return a[lb];
}
;function J() {
  qa.call(this);
  this.A = new w(this);
  this.Gb = this;
  this.Ta = null;
}
t(J, qa);
J.prototype[sa] = !0;
g = J.prototype;
g.Za = function(a) {
  this.Ta = a;
};
g.addEventListener = function(a, b, c, d) {
  H(this, a, b, c, d);
};
g.removeEventListener = function(a, b, c, d) {
  ib(this, a, b, c, d);
};
g.dispatchEvent = function(a) {
  var b, c = this.Ta;
  if (c) {
    for (b = [];c;c = c.Ta) {
      b.push(c);
    }
  }
  var c = this.Gb, d = a.type || a;
  if (p(a)) {
    a = new x(a, c);
  } else {
    if (a instanceof x) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new x(d, c);
      Fa(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var k = b.length - 1;!a.H && 0 <= k;k--) {
      f = a.currentTarget = b[k], e = mb(f, d, !0, a) && e;
    }
  }
  a.H || (f = a.currentTarget = c, e = mb(f, d, !0, a) && e, a.H || (e = mb(f, d, !1, a) && e));
  if (b) {
    for (k = 0;!a.H && k < b.length;k++) {
      f = a.currentTarget = b[k], e = mb(f, d, !1, a) && e;
    }
  }
  return e;
};
g.c = function(a, b, c, d) {
  return this.A.add(String(a), b, !1, c, d);
};
g.ub = function(a, b, c, d) {
  return this.A.add(String(a), b, !0, c, d);
};
g.m = function(a, b, c, d) {
  return this.A.remove(String(a), b, c, d);
};
function mb(a, b, c, d) {
  b = a.A.g[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var k = b[f];
    if (k && !k.T && k.ha == c) {
      var l = k.C, r = k.na || k.src;
      k.ga && Ha(a.A, k);
      e = !1 !== l.call(r, d) && e;
    }
  }
  return e && 0 != d.xb;
}
g.ba = function(a, b, c, d) {
  return this.A.ba(String(a), b, c, d);
};
function L(a, b) {
  null == a && (a = {});
  L.b.constructor.apply(this, arguments);
  a && this.Bb(a);
  b && this.setData(b);
  this.Eb = ja();
}
t(L, J);
s("spark.core.Object", L);
L.prototype.Bb = function(a) {
  return this.options = a;
};
L.prototype.setOptions = L.prototype.Bb;
L.prototype.Wb = function() {
  return this.options;
};
L.prototype.getOptions = L.prototype.Wb;
L.prototype.Vb = function(a) {
  return this.options[a] || null;
};
L.prototype.getOption = L.prototype.Vb;
L.prototype.setData = function(a) {
  return this.data = a;
};
L.prototype.setData = L.prototype.setData;
L.prototype.getData = function() {
  return this.data;
};
L.prototype.getData = L.prototype.getData;
L.prototype.Xb = function() {
  return this.Eb;
};
L.prototype.getUid = L.prototype.Xb;
L.prototype.D = function(a, b) {
  return H(this, a, b);
};
L.prototype.on = L.prototype.D;
L.prototype.Sa = function(a, b) {
  return hb(this, a, b);
};
L.prototype.once = L.prototype.Sa;
L.prototype.v = function(a, b) {
  return this.dispatchEvent({type:a, data:b});
};
L.prototype.emit = L.prototype.v;
L.prototype.Ra = function(a, b) {
  return this.m(a, b);
};
L.prototype.off = L.prototype.Ra;
function M(a, b) {
  var c;
  null == a && (a = {});
  a.tagName || (a.tagName = a.tagName || "div");
  a.Ga || (a.Ga = a.domId || null);
  a.K || (a.K = a.template || null);
  a.attributes || (a.attributes = a.attributes || {});
  a.w || (a.w = a.eventHandlers || {});
  null == a.disabled && (a.disabled = null != (c = a.disabled) ? c : !1);
  this.f(a);
  M.b.constructor.call(this, a, b);
  this.children = [];
  var d, e, f, k, l;
  c = this.options;
  k = c.tagName;
  e = c.Ga;
  d = c.n;
  l = c.K;
  c = c.attributes;
  this.element = document.createElement(k);
  this.yb(d);
  e && this.zb(e);
  l && this.Cb(l);
  e = [];
  for (f in c) {
    d = c[f], e.push(this.setAttribute(f, d));
  }
  var r;
  c = nb;
  d = this.options.w;
  e = [];
  for (r in d) {
    f = d[r], c[r] && "function" === typeof f ? e.push(this.D(Va[c[r]], f)) : e.push(void 0);
  }
  a.disabled && this.disable();
}
t(M, L);
s("spark.core.View", M);
M.prototype.zb = function(a) {
  return this.a().id = a;
};
M.prototype.setDomId = M.prototype.zb;
M.prototype.Ob = function() {
  return this.a().id || null;
};
M.prototype.getDomId = M.prototype.Ob;
M.prototype.yb = function(a) {
  return this.a().className = a;
};
M.prototype.setClass = M.prototype.yb;
M.prototype.Mb = function() {
  return this.a().className;
};
M.prototype.getClass = M.prototype.Mb;
M.prototype.Nb = function() {
  return this.a().classList;
};
M.prototype.getClassList = M.prototype.Nb;
M.prototype.W = function(a) {
  return this.a().classList.add(a);
};
M.prototype.addClass = M.prototype.W;
M.prototype.Va = function(a) {
  return this.a().classList.remove(a);
};
M.prototype.removeClass = M.prototype.Va;
M.prototype.bc = function(a) {
  return this.a().classList.contains(a);
};
M.prototype.hasClass = M.prototype.bc;
M.prototype.a = function() {
  return this.element;
};
M.prototype.getElement = M.prototype.a;
M.prototype.Cb = function(a) {
  return this.a().innerHTML = a;
};
M.prototype.setTemplate = M.prototype.Cb;
M.prototype.Hb = function() {
  return document.body.appendChild(this.a());
};
M.prototype.appendToDocumentBody = M.prototype.Hb;
M.prototype.ic = function() {
  var a, b;
  a = this.a();
  b = a.parentNode;
  if (!b) {
    return!1;
  }
  b.removeChild(a);
  return!0;
};
M.prototype.removeFromDocument = M.prototype.ic;
M.prototype.e = function(a) {
  var b;
  a instanceof M ? -1 < this.children.indexOf(a) && (b = "This view already appended to target view.") : b = "View should be an instance of spark.core.View";
  if (b) {
    throw Error(b);
  }
  this.children.push(a);
  return this.a().appendChild(a.a());
};
M.prototype.appendView = M.prototype.e;
M.prototype.setAttribute = function(a, b) {
  return this.a().setAttribute(a, b);
};
M.prototype.setAttribute = M.prototype.setAttribute;
M.prototype.getAttribute = function(a) {
  return this.a().getAttribute(a);
};
M.prototype.getAttribute = M.prototype.getAttribute;
M.prototype.removeAttribute = function(a) {
  return this.a().removeAttribute(a);
};
M.prototype.removeAttribute = M.prototype.removeAttribute;
M.prototype.disable = function() {
  this.W("disabled");
  this.setAttribute("disabled", "disabled");
  return this.disabled = !0;
};
M.prototype.disable = M.prototype.disable;
M.prototype.enable = function() {
  this.Va("disabled");
  this.removeAttribute("disabled");
  return this.disabled = !1;
};
M.prototype.enable = M.prototype.enable;
M.prototype.toggle = function() {
  return this.tb() ? this.enable() : this.disable();
};
M.prototype.toggle = M.prototype.toggle;
M.prototype.tb = function() {
  return this.disabled || !1;
};
M.prototype.isDisabled = M.prototype.tb;
M.prototype.D = function(a, b) {
  nb[a] && H(this.a(), a, b);
  return H(this, a, b);
};
M.prototype.on = M.prototype.D;
M.prototype.Sa = function(a, b) {
  nb[a] && hb(this.a(), a, b);
  return hb(this, a, b);
};
M.prototype.once = M.prototype.Sa;
M.prototype.Ra = function(a, b) {
  ib(this.a(), a, b);
  return this.m(a, b);
};
M.prototype.off = M.prototype.Ra;
M.prototype.f = function(a, b) {
  var c;
  c = ka("view", a.n || a.cssClass, b);
  return a.n = a.cssClass = c;
};
var nb = Da(Va);
function ob(a, b) {
  var c, d;
  null == a && (a = {});
  a.tagName = a.tagName = "button";
  a.title || (a.title = a.title || null);
  a.u || (a.u = a.callback || null);
  a.Ka || (a.Ka = a.iconClass || null);
  a.w || (a.w = a.eventHandlers || {});
  this.f(a, "button");
  c = a.u;
  "function" === typeof c && (a.w.click = c);
  d = c = "";
  a.Ka && (c = "<span class='icon " + a.Ka + "'></span>");
  a.title && (d = "<span>" + a.title + "</span>");
  a.K = "" + c + d;
  ob.b.constructor.call(this, a, b);
}
t(ob, M);
s("spark.components.Button", ob);
function N(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
}
g = N.prototype;
g.clone = function() {
  return new N(this.top, this.right, this.bottom, this.left);
};
g.toString = function() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
g.contains = function(a) {
  return this && a ? a instanceof N ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
};
g.expand = function(a, b, c, d) {
  ea(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this;
};
g.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
g.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
g.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
g.translate = function(a, b) {
  this.left += a;
  this.right += a;
  da(b) && (this.top += b, this.bottom += b);
  return this;
};
g.scale = function(a, b) {
  var c = da(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this;
};
!C && !B || B && B && 9 <= Qa || C && F("1.9.1");
B && F("9");
function pb(a) {
  return a ? new qb(rb(a)) : la || (la = new qb);
}
function sb(a, b, c) {
  function d(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    if (!ca(f) || ea(f) && 0 < f.nodeType) {
      d(f);
    } else {
      var k;
      a: {
        if (f && "number" == typeof f.length) {
          if (ea(f)) {
            k = "function" == typeof f.item || "string" == typeof f.item;
            break a;
          }
          if (q(f)) {
            k = "function" == typeof f.item;
            break a;
          }
        }
        k = !1;
      }
      v(k ? Ca(f) : f, d);
    }
  }
}
function tb(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
}
function ub(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function vb(a, b) {
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
function rb(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function wb(a, b) {
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
        tb(a), a.appendChild(rb(a).createTextNode(String(b)));
      }
    }
  }
}
function xb(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
}
function yb(a) {
  a = a.getAttributeNode("tabindex");
  return null != a && a.specified;
}
function zb(a) {
  a = a.tabIndex;
  return da(a) && 0 <= a && 32768 > a;
}
function qb(a) {
  this.N = a || h.document || document;
}
g = qb.prototype;
g.jb = pb;
g.a = function(a) {
  return p(a) ? this.N.getElementById(a) : a;
};
g.createElement = function(a) {
  return this.N.createElement(a);
};
g.createTextNode = function(a) {
  return this.N.createTextNode(String(a));
};
g.appendChild = function(a, b) {
  a.appendChild(b);
};
g.append = function(a, b) {
  sb(rb(a), a, arguments);
};
g.canHaveChildren = function(a) {
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
g.removeNode = ub;
g.contains = vb;
g.Na = function(a) {
  var b;
  (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!yb(a) || zb(a)) : yb(a) && zb(a)) && B ? (a = q(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height:a.offsetHeight, width:a.offsetWidth}, a = null != a && 0 < a.height && 0 < a.width) : a = b;
  return a;
};
function Ab(a, b) {
  if (p(b)) {
    var c = Bb(a, b);
    c && (a.style[c] = void 0);
  } else {
    for (c in b) {
      var d = a, e = b[c], f = Bb(d, c);
      f && (d.style[f] = e);
    }
  }
}
function Bb(a, b) {
  var c = oa(b);
  if (void 0 === a.style[c]) {
    var d = (D ? "Webkit" : C ? "Moz" : B ? "ms" : A ? "O" : null) + pa(c);
    if (void 0 !== a.style[d]) {
      return d;
    }
  }
  return c;
}
function O(a, b) {
  var c = rb(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
}
var Cb = C ? "MozUserSelect" : D ? "WebkitUserSelect" : null;
function Db(a, b) {
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
function Eb(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? Db(a, c) : 0;
}
function Fb(a) {
  if (B) {
    var b = Eb(a, "paddingLeft"), c = Eb(a, "paddingRight"), d = Eb(a, "paddingTop");
    a = Eb(a, "paddingBottom");
    return new N(d, c, a, b);
  }
  b = O(a, "paddingLeft");
  c = O(a, "paddingRight");
  d = O(a, "paddingTop");
  a = O(a, "paddingBottom");
  return new N(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
var Gb = {thin:2, medium:4, thick:6};
function Hb(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0;
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return c in Gb ? Gb[c] : Db(a, c);
}
function Ib(a) {
  if (B && !(B && 9 <= Qa)) {
    var b = Hb(a, "borderLeft"), c = Hb(a, "borderRight"), d = Hb(a, "borderTop");
    a = Hb(a, "borderBottom");
    return new N(d, c, a, b);
  }
  b = O(a, "borderLeftWidth");
  c = O(a, "borderRightWidth");
  d = O(a, "borderTopWidth");
  a = O(a, "borderBottomWidth");
  return new N(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
;function Jb(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function Kb(a, b) {
  return a.classList ? a.classList.contains(b) : Aa(Jb(a), b);
}
function Lb(a, b) {
  a.classList ? a.classList.add(b) : Kb(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function Mb(a, b) {
  if (a.classList) {
    v(b, function(b) {
      Lb(a, b);
    });
  } else {
    var c = {};
    v(Jb(a), function(a) {
      c[a] = !0;
    });
    v(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var d in c) {
      a.className += 0 < a.className.length ? " " + d : d;
    }
  }
}
function Nb(a, b) {
  a.classList ? a.classList.remove(b) : Kb(a, b) && (a.className = ya(Jb(a), function(a) {
    return a != b;
  }).join(" "));
}
function Ob(a, b) {
  a.classList ? v(b, function(b) {
    Nb(a, b);
  }) : a.className = ya(Jb(a), function(a) {
    return!Aa(b, a);
  }).join(" ");
}
;function Pb(a) {
  qa.call(this);
  this.Ja = a;
  this.ea = {};
}
t(Pb, qa);
var Qb = [];
g = Pb.prototype;
g.c = function(a, b, c, d) {
  n(b) || (b && (Qb[0] = b.toString()), b = Qb);
  for (var e = 0;e < b.length;e++) {
    var f = H(a, b[e], c || this.handleEvent, d || !1, this.Ja || this);
    if (!f) {
      break;
    }
    this.ea[f.key] = f;
  }
  return this;
};
g.ub = function(a, b, c, d) {
  return Rb(this, a, b, c, d);
};
function Rb(a, b, c, d, e, f) {
  if (n(c)) {
    for (var k = 0;k < c.length;k++) {
      Rb(a, b, c[k], d, e, f);
    }
  } else {
    b = hb(b, c, d || a.handleEvent, e, f || a.Ja || a);
    if (!b) {
      return a;
    }
    a.ea[b.key] = b;
  }
  return a;
}
g.m = function(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      this.m(a, b[f], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.Ja || this, c = bb(c), d = !!d, b = ta(a) ? a.ba(b, c, d, e) : a ? (a = db(a)) ? a.ba(b, c, d, e) : null : null, b && (I(b), delete this.ea[b.key]);
  }
  return this;
};
g.wb = function() {
  var a = this.ea, b = I, c;
  for (c in a) {
    b.call(void 0, a[c], c, a);
  }
  this.ea = {};
};
g.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Sb() {
}
aa(Sb);
Sb.prototype.fc = 0;
function Tb(a) {
  J.call(this);
  this.Z = a || pb();
  this.va = Ub;
  this.pa = null;
  this.q = !1;
  this.i = null;
  this.ca = void 0;
  this.M = this.Ea = this.t = null;
}
t(Tb, J);
Tb.prototype.cc = Sb.ka();
var Ub = null;
function Vb(a, b) {
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
function Wb(a, b) {
  if (a.t && a.t.M) {
    var c = a.t.M, d = a.pa;
    d in c && delete c[d];
    c = a.t.M;
    if (b in c) {
      throw Error('The object already contains the key "' + b + '"');
    }
    c[b] = a;
  }
  a.pa = b;
}
g = Tb.prototype;
g.a = function() {
  return this.i;
};
function Xb(a) {
  a.ca || (a.ca = new Pb(a));
  return a.ca;
}
g.getParent = function() {
  return this.t;
};
g.Za = function(a) {
  if (this.t && this.t != a) {
    throw Error("Method not supported");
  }
  Tb.b.Za.call(this, a);
};
g.jb = function() {
  return this.Z;
};
g.Y = function(a) {
  if (this.q) {
    throw Error("Component already rendered");
  }
  if (a && this.X(a)) {
    var b = rb(a);
    this.Z && this.Z.N == b || (this.Z = pb(a));
    this.hb(a);
    this.O();
  } else {
    throw Error("Invalid element to decorate");
  }
};
g.X = function() {
  return!0;
};
g.hb = function(a) {
  this.i = a;
};
g.O = function() {
  this.q = !0;
  Yb(this, function(a) {
    !a.q && a.a() && a.O();
  });
};
g.ja = function() {
  Yb(this, function(a) {
    a.q && a.ja();
  });
  this.ca && this.ca.wb();
  this.q = !1;
};
g.aa = function() {
  return this.i;
};
g.U = function(a) {
  if (this.q) {
    throw Error("Component already rendered");
  }
  this.va = a;
};
function Yb(a, b) {
  a.Ea && v(a.Ea, b, void 0);
}
g.removeChild = function(a, b) {
  if (a) {
    var c = p(a) ? a : a.pa || (a.pa = ":" + (a.cc.fc++).toString(36)), d;
    this.M && c ? (d = this.M, d = (c in d ? d[c] : void 0) || null) : d = null;
    a = d;
    if (c && a) {
      d = this.M;
      c in d && delete d[c];
      Ba(this.Ea, a);
      b && (a.ja(), a.i && ub(a.i));
      c = a;
      if (null == c) {
        throw Error("Unable to set parent component");
      }
      c.t = null;
      Tb.b.Za.call(c, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
var Zb;
function $b(a, b, c) {
  n(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (Zb || (Zb = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = Zb, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
}
;function ac() {
}
var bc;
aa(ac);
var cc = {button:"pressed", checkbox:"checked", menuitem:"selected", menuitemcheckbox:"checked", menuitemradio:"checked", radio:"checked", tab:"selected", treeitem:"selected"};
g = ac.prototype;
g.aa = function(a) {
  return a;
};
g.$ = function(a, b, c) {
  if (a = a.a ? a.a() : a) {
    var d = [b];
    B && !F("7") && (d = dc(Jb(a), b), d.push(b));
    (c ? Mb : Ob)(a, d);
  }
};
g.X = function() {
  return!0;
};
g.Y = function(a, b) {
  b.id && Wb(a, b.id);
  var c = this.aa(b);
  c && c.firstChild && ec(c.firstChild.nextSibling ? Ca(c.childNodes) : c.firstChild);
  var d = 0, e = this.f(), f = this.f(), k = !1, l = !1, r = !1, z = Ca(Jb(b));
  v(z, function(a) {
    k || a != e ? l || a != f ? d |= fc(this, a) : l = !0 : (k = !0, f == e && (l = !0));
    1 == fc(this, a) && yb(c) && zb(c) && xb(c, !1);
  }, this);
  a.d = d;
  k || (z.push(e), f == e && (l = !0));
  l || z.push(f);
  var K = a.o;
  K && z.push.apply(z, K);
  if (B && !F("7")) {
    var S = dc(z);
    0 < S.length && (z.push.apply(z, S), r = !0);
  }
  if (!k || !l || K || r) {
    b.className = z.join(" ");
  }
  gc(this, a, b);
  return b;
};
function gc(a, b, c) {
  b.L || $b(c, "hidden", !b.L);
  b.isEnabled() || a.V(c, 1, !b.isEnabled());
  b.l & 8 && a.V(c, 8, !!(b.d & 8));
  b.l & 16 && a.V(c, 16, b.B());
  b.l & 64 && a.V(c, 64, !!(b.d & 64));
}
g.wa = function(a, b) {
  var c = !b, d = B || A ? a.getElementsByTagName("*") : null;
  if (Cb) {
    if (c = c ? "none" : "", a.style[Cb] = c, d) {
      for (var e = 0, f;f = d[e];e++) {
        f.style[Cb] = c;
      }
    }
  } else {
    if (B || A) {
      if (c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for (e = 0;f = d[e];e++) {
          f.setAttribute("unselectable", c);
        }
      }
    }
  }
};
g.U = function(a, b) {
  this.$(a, this.f() + "-rtl", b);
};
g.Na = function(a) {
  var b;
  return a.l & 32 && (b = a.P()) ? yb(b) && zb(b) : !1;
};
g.xa = function(a, b) {
  var c;
  if (a.l & 32 && (c = a.P())) {
    if (!b && a.d & 32) {
      try {
        c.blur();
      } catch (d) {
      }
      a.d & 32 && a.kb();
    }
    (yb(c) && zb(c)) != b && xb(c, b);
  }
};
g.k = function(a, b, c) {
  var d = a.a();
  if (d) {
    var e;
    this.ia || hc(this);
    (e = this.ia[b]) && this.$(a, e, c);
    this.V(d, b, c);
  }
};
g.V = function(a, b, c) {
  bc || (bc = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  b = bc[b];
  var d = a.getAttribute("role") || null;
  d && (d = cc[d] || b, b = "checked" == b || "selected" == b ? d : b);
  b && $b(a, b, c);
};
g.I = function(a, b) {
  var c = this.aa(a);
  if (c && (tb(c), b)) {
    if (p(b)) {
      wb(c, b);
    } else {
      var d = function(a) {
        if (a) {
          var b = rb(c);
          c.appendChild(p(a) ? b.createTextNode(a) : a);
        }
      };
      n(b) ? v(b, d) : !ca(b) || "nodeType" in b ? d(b) : v(Ca(b), d);
    }
  }
};
g.P = function(a) {
  return a.a();
};
g.f = function() {
  return "goog-control";
};
function dc(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  v([], function(d) {
    !za(d, ha(Aa, a)) || b && !Aa(d, b) || c.push(d.join("_"));
  });
  return c;
}
function fc(a, b) {
  a.Db || (a.ia || hc(a), a.Db = Da(a.ia));
  var c = parseInt(a.Db[b], 10);
  return isNaN(c) ? 0 : c;
}
function hc(a) {
  var b = a.f();
  b.replace(/\xa0|\s/g, " ");
  a.ia = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"};
}
;function ic() {
}
t(ic, ac);
aa(ic);
g = ic.prototype;
g.Y = function(a, b) {
  jc(a);
  a.Ba &= -256;
  if (a.q && a.d & 32) {
    throw Error("Component already rendered");
  }
  a.d & 32 && a.k(32, !1);
  a.l &= -33;
  ic.b.Y.call(this, a, b);
  a.I(b.value);
  return b;
};
g.X = function(a) {
  return "TEXTAREA" == a.tagName;
};
g.U = m;
g.Na = function(a) {
  return a.isEnabled();
};
g.xa = m;
g.k = function(a, b, c) {
  ic.b.k.call(this, a, b, c);
  (a = a.a()) && 1 == b && (a.disabled = c);
};
g.V = m;
g.I = function(a, b) {
  a && (a.value = b);
};
g.f = function() {
  return "goog-textarea";
};
var kc = {};
function lc(a, b, c, d, e) {
  if (!(B || D && F("525"))) {
    return!0;
  }
  if (E && e) {
    return mc(a);
  }
  if (e && !d) {
    return!1;
  }
  da(b) && (b = nc(b));
  if (!c && (17 == b || 18 == b || E && 91 == b)) {
    return!1;
  }
  if (D && d && c) {
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
  if (B && d && b == a) {
    return!1;
  }
  switch(a) {
    case 13:
      return!0;
    case 27:
      return!D;
  }
  return mc(a);
}
function mc(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || D && 0 == a) {
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
function nc(a) {
  if (C) {
    a = oc(a);
  } else {
    if (E && D) {
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
function oc(a) {
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
;function pc(a, b) {
  J.call(this);
  a && qc(this, a, b);
}
t(pc, J);
g = pc.prototype;
g.i = null;
g.ra = null;
g.Oa = null;
g.sa = null;
g.j = -1;
g.s = -1;
g.Aa = !1;
var rc = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, sc = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, tc = B || 
D && F("525"), uc = E && C;
g = pc.prototype;
g.Zb = function(a) {
  D && (17 == this.j && !a.ctrlKey || 18 == this.j && !a.altKey || E && 91 == this.j && !a.metaKey) && (this.s = this.j = -1);
  -1 == this.j && (a.ctrlKey && 17 != a.keyCode ? this.j = 17 : a.altKey && 18 != a.keyCode ? this.j = 18 : a.metaKey && 91 != a.keyCode && (this.j = 91));
  tc && !lc(a.keyCode, this.j, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.s = nc(a.keyCode), uc && (this.Aa = a.altKey));
};
g.ac = function(a) {
  this.s = this.j = -1;
  this.Aa = a.altKey;
};
g.handleEvent = function(a) {
  var b = a.r, c, d, e = b.altKey;
  B && "keypress" == a.type ? (c = this.s, d = 13 != c && 27 != c ? b.keyCode : 0) : D && "keypress" == a.type ? (c = this.s, d = 0 <= b.charCode && 63232 > b.charCode && mc(c) ? b.charCode : 0) : A ? (c = this.s, d = mc(c) ? b.keyCode : 0) : (c = b.keyCode || this.s, d = b.charCode || 0, uc && (e = this.Aa), E && 63 == d && 224 == c && (c = 191));
  var f = c = nc(c), k = b.keyIdentifier;
  c ? 63232 <= c && c in rc ? f = rc[c] : 25 == c && a.shiftKey && (f = 9) : k && k in sc && (f = sc[k]);
  a = f == this.j;
  this.j = f;
  b = new vc(f, d, a, b);
  b.altKey = e;
  this.dispatchEvent(b);
};
g.a = function() {
  return this.i;
};
function qc(a, b, c) {
  a.sa && a.detach();
  a.i = b;
  a.ra = H(a.i, "keypress", a, c);
  a.Oa = H(a.i, "keydown", a.Zb, c, a);
  a.sa = H(a.i, "keyup", a.ac, c, a);
}
g.detach = function() {
  this.ra && (I(this.ra), I(this.Oa), I(this.sa), this.sa = this.Oa = this.ra = null);
  this.i = null;
  this.s = this.j = -1;
};
function vc(a, b, c, d) {
  G.call(this, d);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
}
t(vc, G);
function P(a, b, c) {
  Tb.call(this, c);
  if (!(a = b)) {
    a = this.constructor;
    for (var d;a;) {
      d = a[fa] || (a[fa] = ++ga);
      if (d = kc[d]) {
        break;
      }
      a = a.b ? a.b.constructor : null;
    }
    a = d ? q(d.ka) ? d.ka() : new d : null;
  }
  this.h = a;
}
t(P, Tb);
g = P.prototype;
g.d = 0;
g.l = 39;
g.Ba = 255;
g.jc = 0;
g.L = !0;
g.o = null;
g.Ia = !0;
g.za = !1;
g.hc = null;
function jc(a) {
  a.q && 0 != a.Ia && wc(a, !1);
  a.Ia = !1;
}
g.P = function() {
  return this.h.P(this);
};
g.$ = function(a, b) {
  b ? a && (this.o ? Aa(this.o, a) || this.o.push(a) : this.o = [a], this.h.$(this, a, !0)) : a && this.o && Ba(this.o, a) && (0 == this.o.length && (this.o = null), this.h.$(this, a, !1));
};
g.aa = function() {
  return this.h.aa(this.a());
};
g.X = function(a) {
  return this.h.X(a);
};
g.hb = function(a) {
  var b = this.i = a = this.h.Y(this, a), c = this.hc || void 0;
  if (c) {
    var d = b.getAttribute("role") || null;
    c != d && (c ? b.setAttribute("role", c) : b.removeAttribute("role"));
  }
  this.za || this.h.wa(a, !1);
  this.L = "none" != a.style.display;
};
g.O = function() {
  P.b.O.call(this);
  var a = this.h;
  if (null == this.va) {
    var b = this.q ? this.i : this.Z.N.body;
    this.va = "rtl" == (O(b, "direction") || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction);
  }
  this.va && a.U(this.a(), !0);
  this.isEnabled() && a.xa(this, this.L);
  this.l & -2 && (this.Ia && wc(this, !0), this.l & 32 && (a = this.P())) && (b = this.Pa || (this.Pa = new pc), qc(b, a), Xb(this).c(b, "key", this.$b).c(a, "focus", this.Yb).c(a, "blur", this.kb));
};
function wc(a, b) {
  var c = Xb(a), d = a.a();
  b ? (c.c(d, "mouseover", a.ob).c(d, "mousedown", a.mb).c(d, "mouseup", a.pb).c(d, "mouseout", a.nb), a.ma != m && c.c(d, "contextmenu", a.ma), B && c.c(d, "dblclick", a.lb)) : (c.m(d, "mouseover", a.ob).m(d, "mousedown", a.mb).m(d, "mouseup", a.pb).m(d, "mouseout", a.nb), a.ma != m && c.m(d, "contextmenu", a.ma), B && c.m(d, "dblclick", a.lb));
}
g.ja = function() {
  P.b.ja.call(this);
  this.Pa && this.Pa.detach();
  this.L && this.isEnabled() && this.h.xa(this, !1);
};
g.I = function(a) {
  this.h.I(this.a(), a);
};
function ec() {
}
g.U = function(a) {
  P.b.U.call(this, a);
  var b = this.a();
  b && this.h.U(b, a);
};
g.wa = function(a) {
  this.za = a;
  var b = this.a();
  b && this.h.wa(b, a);
};
g.isEnabled = function() {
  return!(this.d & 1);
};
g.Ya = function(a) {
  var b = this.getParent();
  b && "function" == typeof b.isEnabled && !b.isEnabled() || !Q(this, 1, !a) || (a || (this.setActive(!1), xc(this, !1)), this.L && this.h.xa(this, a), this.k(1, !a, !0));
};
function xc(a, b) {
  Q(a, 2, b) && a.k(2, b);
}
g.setActive = function(a) {
  Q(this, 4, a) && this.k(4, a);
};
g.B = function() {
  return!!(this.d & 16);
};
g.k = function(a, b, c) {
  c || 1 != a ? this.l & a && b != !!(this.d & a) && (this.h.k(this, a, b), this.d = b ? this.d | a : this.d & ~a) : this.Ya(!b);
};
function R(a, b) {
  return!!(a.Ba & b) && !!(a.l & b);
}
function Q(a, b, c) {
  return!!(a.l & b) && !!(a.d & b) != c && (!(a.jc & b) || a.dispatchEvent(Vb(b, c))) && !a.Fa;
}
g.ob = function(a) {
  (!a.relatedTarget || !vb(this.a(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && R(this, 2) && xc(this, !0);
};
g.nb = function(a) {
  a.relatedTarget && vb(this.a(), a.relatedTarget) || !this.dispatchEvent("leave") || (R(this, 4) && this.setActive(!1), R(this, 2) && xc(this, !1));
};
g.ma = m;
g.mb = function(a) {
  this.isEnabled() && (R(this, 2) && xc(this, !0), !Ya(a) || D && E && a.ctrlKey || (R(this, 4) && this.setActive(!0), this.h.Na(this) && this.P().focus()));
  this.za || !Ya(a) || D && E && a.ctrlKey || a.preventDefault();
};
g.pb = function(a) {
  this.isEnabled() && (R(this, 2) && xc(this, !0), this.d & 4 && yc(this, a) && R(this, 4) && this.setActive(!1));
};
g.lb = function(a) {
  this.isEnabled() && yc(this, a);
};
function yc(a, b) {
  if (R(a, 16)) {
    var c = !a.B();
    Q(a, 16, c) && a.k(16, c);
  }
  R(a, 8) && Q(a, 8, !0) && a.k(8, !0);
  R(a, 64) && (c = !(a.d & 64), Q(a, 64, c) && a.k(64, c));
  c = new x("action", a);
  b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.Ua = b.Ua);
  return a.dispatchEvent(c);
}
g.Yb = function() {
  R(this, 32) && Q(this, 32, !0) && this.k(32, !0);
};
g.kb = function() {
  R(this, 4) && this.setActive(!1);
  R(this, 32) && Q(this, 32, !1) && this.k(32, !1);
};
g.$b = function(a) {
  return this.L && this.isEnabled() && 13 == a.keyCode && yc(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
};
if (!q(P)) {
  throw Error("Invalid component class " + P);
}
if (!q(ac)) {
  throw Error("Invalid renderer class " + ac);
}
var zc = P[fa] || (P[fa] = ++ga);
kc[zc] = ac;
function Ac() {
  return new P;
}
if (!q(Ac)) {
  throw Error("Invalid decorator function " + Ac);
}
;function T(a, b, c) {
  P.call(this, 0, b || ic.ka(), c);
  jc(this);
  this.wa(!0);
  this.Q = "" != a;
}
t(T, P);
var Bc = C || D || B && B && 11 <= Qa;
g = T.prototype;
g.S = !1;
g.oa = !1;
g.Q = !1;
g.p = 0;
g.dc = 0;
g.vb = 0;
g.qb = !1;
g.ta = !1;
g.Xa = !1;
g.Wa = !1;
g.G = "";
g.$a = function(a) {
  this.G = a;
  this.a() && Cc(this);
};
function Dc(a) {
  return a.F.top + a.F.bottom + a.Ca.top + a.Ca.bottom;
}
function Ec(a) {
  var b = a.vb, c = a.a();
  b && c && a.ta && (b -= Dc(a));
  return b;
}
g.J = function(a) {
  this.I(String(a));
};
g.Ha = function() {
  return this.a().value != this.G || Fc(this) || this.Q ? this.a().value : "";
};
g.I = function(a) {
  T.b.I.call(this, a);
  this.Q = "" != a;
  this.resize();
};
g.Ya = function(a) {
  T.b.Ya.call(this, a);
  this.a().disabled = !a;
};
g.resize = function() {
  this.a() && this.la();
};
function Fc(a) {
  return "placeholder" in a.a();
}
function Cc(a) {
  a.G && (Fc(a) ? a.a().placeholder = a.G : !a.a() || a.Q || a.oa || (Lb(a.a(), Gc), a.a().value = a.G));
}
g.O = function() {
  T.b.O.call(this);
  var a = this.a();
  Ab(a, {overflowY:"hidden", overflowX:"auto", boxSizing:"border-box", MsBoxSizing:"border-box", WebkitBoxSizing:"border-box", MozBoxSizing:"border-box"});
  this.F = Fb(a);
  this.Ca = Ib(a);
  Xb(this).c(a, "scroll", this.la).c(a, "focus", this.la).c(a, "keyup", this.la).c(a, "mouseup", this.ec).c(a, "blur", this.Ib);
  Cc(this);
  this.resize();
};
function Hc(a) {
  if (!a.qb) {
    var b = a.a().cloneNode(!1);
    Ab(b, {position:"absolute", height:"auto", top:"-9999px", margin:"0", padding:"1px", border:"1px solid #000", overflow:"hidden"});
    a.jb().N.body.appendChild(b);
    var c = b.scrollHeight;
    b.style.padding = "10px";
    var d = b.scrollHeight;
    a.Xa = d > c;
    b.style.borderWidth = "10px";
    a.Wa = b.scrollHeight > d;
    b.style.height = "100px";
    100 != b.offsetHeight && (a.ta = !0);
    ub(b);
    a.qb = !0;
  }
  b = a.a();
  isNaN(a.F.top) && (a.F = Fb(b), a.Ca = Ib(b));
  var c = a.a().scrollHeight, e = a.a(), d = e.offsetHeight - e.clientHeight;
  if (!a.Xa) {
    var f = a.F, d = d - (f.top + f.bottom)
  }
  a.Wa || (e = Ib(e), d -= e.top + e.bottom);
  c += 0 < d ? d : 0;
  a.ta ? c -= Dc(a) : (a.Xa || (d = a.F, c += d.top + d.bottom), a.Wa || (a = Ib(b), c += a.top + a.bottom));
  return c;
}
function Ic(a, b) {
  a.p != b && (a.p = b, a.a().style.height = b + "px");
}
function Jc(a) {
  var b = a.a();
  b.style.height = "auto";
  var c = b.value.match(/\n/g) || [];
  b.rows = c.length + 1;
  a.p = 0;
}
var Gc = "textarea-placeholder-input";
T.prototype.Ib = function() {
  Fc(this) || (this.oa = !1, "" == this.a().value && (this.Q = !1, Cc(this)));
};
T.prototype.la = function(a) {
  if (!this.S) {
    var b = this.a();
    !Fc(this) && a && "focus" == a.type && (b.value == this.G && this.G && !this.oa && (Nb(b, Gc), b.value = ""), this.oa = !0, this.Q = "" != b.value);
    var c = !1;
    this.S = !0;
    a = this.p;
    if (b.scrollHeight) {
      var d = !1, e = !1, f = Hc(this), k = b.offsetHeight, l = Ec(this), r;
      r = this.dc;
      var z = this.a();
      r && z && this.ta && (r -= Dc(this));
      l && f < l ? (Ic(this, l), d = !0) : r && f > r ? (Ic(this, r), b.style.overflowY = "", e = !0) : k != f ? Ic(this, f) : this.p || (this.p = f);
      d || e || !Bc || (c = !0);
    } else {
      Jc(this);
    }
    this.S = !1;
    c && (b = this.a(), this.S || (this.S = !0, (e = b.scrollHeight) ? (f = Hc(this), c = Ec(this), c && f <= c || (d = this.F, b.style.paddingBottom = d.bottom + 1 + "px", Hc(this) == f && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = Hc(this) - e, e >= c ? Ic(this, e) : Ic(this, c)), b.style.paddingBottom = d.bottom + "px")) : Jc(this), this.S = !1));
    a != this.p && this.dispatchEvent("resize");
  }
};
T.prototype.ec = function() {
  var a = this.a(), b = a.offsetHeight;
  a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
  b != this.p && (this.p = this.vb = b);
};
function U(a, b) {
  null == a && (a = {});
  a.tagName || (a.tagName = a.tagName || "input");
  a.type || (a.type = a.type || "text");
  a.name || (a.name = a.name || null);
  a.value || (a.value = a.value || "");
  this.f(a, "input " + a.type);
  U.b.constructor.call(this, a, b);
  this.setAttribute("type", a.type);
  a.value && this.J(a.value);
  a.name && this.Ab(a.name);
}
t(U, M);
s("spark.components.Field", U);
U.prototype.J = function(a) {
  return this.a().value = a;
};
U.prototype.setValue = U.prototype.J;
U.prototype.Ha = function() {
  return this.a().value;
};
U.prototype.getValue = U.prototype.Ha;
U.prototype.Ab = function(a) {
  return this.setAttribute("name", a);
};
U.prototype.setName = U.prototype.Ab;
U.prototype.getName = function() {
  return this.a().name;
};
U.prototype.getName = U.prototype.getName;
function V(a, b) {
  null == a && (a = {});
  a.tagName = a.tagName = "textarea";
  this.f(a, "textarea");
  V.b.constructor.call(this, a, b);
  this.ab = new T(this.options.value);
  this.ab.Y(this.a());
  this.resize();
}
t(V, U);
s("spark.components.Textarea", V);
V.prototype.J = function(a) {
  V.b.J.apply(this, arguments);
  return this.resize();
};
V.prototype.setValue = V.prototype.J;
V.prototype.resize = function() {
  if (this.ab) {
    return this.ab.resize();
  }
};
V.prototype.resize = V.prototype.resize;
function W(a, b) {
  var c;
  null == a && (a = {});
  a.type || (a.type = a.type || "checkbox");
  null == a.checked && (a.checked = null != (c = a.checked) ? c : !1);
  W.b.constructor.call(this, a, b);
  !0 === a.checked && this.check();
}
t(W, U);
s("spark.components.Checkbox", W);
W.prototype.check = function() {
  this.a().checked = !0;
  return this.v("StateChanged", !0);
};
W.prototype.check = W.prototype.check;
W.prototype.ya = function() {
  this.a().checked = !1;
  return this.v("StateChanged", !1);
};
W.prototype.uncheck = W.prototype.ya;
W.prototype.B = function() {
  return this.a().checked;
};
W.prototype.isChecked = W.prototype.B;
function X(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  a.placeholder || (a.placeholder = a.placeholder || null);
  X.b.constructor.call(this, a, b);
  a.placeholder && this.$a(a.placeholder);
  this.D("focus", function(a) {
    return function() {
      return a.W("focus");
    };
  }(this));
  this.D("blur", function(a) {
    return function() {
      return a.Va("focus");
    };
  }(this));
}
t(X, U);
s("spark.components.Input", X);
X.prototype.$a = function(a) {
  return this.setAttribute("placeholder", a);
};
X.prototype.setPlaceholder = X.prototype.$a;
X.prototype.Jb = function() {
  return this.removeAttribute("placeholder");
};
X.prototype.clearPlaceholder = X.prototype.Jb;
X.prototype.focus = function() {
  this.a().focus();
  return this.W("focus");
};
X.prototype.focus = X.prototype.focus;
function Kc(a, b) {
  var c;
  null == a && (a = {});
  a.tagName = a.tagName = "label";
  null == a.label && (a.label = null != (c = a.label) ? c : "Input Label");
  a.K = a.label;
  this.f(a, "label");
  Kc.b.constructor.call(this, a, b);
}
t(Kc, M);
s("spark.components.Label", Kc);
function Y(a, b) {
  var c, d, e, f;
  null == a && (a = {});
  null == a.La && (a.La = null != (c = a.inputFirst) ? c : !1);
  this.f(a, a.n || a.cssClass || "labeled-input");
  Y.b.constructor.call(this, a, b);
  e = a.Qa || a.labelOptions || {};
  d = a.Ma || a.inputOptions || {};
  c = d.Ga || d.domId;
  f = this.Eb;
  e.attributes || (e.attributes = {});
  d.attributes || (d.attributes = {});
  e.attributes["for"] = c || f;
  d.attributes.name = c || f;
  d.attributes.id = c || f;
  this.label = new Kc(e, b);
  this.input = Lc(d, b);
  a.La ? (this.e(this.input), this.e(this.label)) : (this.e(this.label), this.e(this.input));
}
t(Y, M);
s("spark.components.LabeledInput", Y);
Y.prototype.Qb = function() {
  return this.input;
};
Y.prototype.getInput = Y.prototype.Qb;
Y.prototype.Ub = function() {
  return this.label;
};
Y.prototype.getLabel = Y.prototype.Ub;
function Mc(a, b) {
  null == a && (a = {});
  a.type = a.type = "password";
  Mc.b.constructor.call(this, a, b);
}
t(Mc, X);
s("spark.components.Password", Mc);
function Nc(a, b) {
  null == a && (a = {});
  a.type = a.type = "radio";
  Nc.b.constructor.call(this, a, b);
}
t(Nc, W);
s("spark.components.Radio", Nc);
function Lc(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  return new Lc.kc[a.type](a, b);
}
s("spark.components.FieldFactory", Lc);
Lc.kc = {text:X, input:X, password:Mc, radio:Nc, checkbox:W, label:Kc, button:ob};
function Z(a, b) {
  var c, d;
  null == a && (a = {});
  this.f(a, "form");
  Z.b.constructor.call(this, a, b);
  this.R = [];
  this.buttons = [];
  this.qa = {};
  d = a.R || a.inputs;
  c = a.buttons || a.buttons;
  this.da = new M({n:"input-container"});
  this.Da = new M({n:"buttons-container"});
  this.e(this.da);
  this.e(this.Da);
  d && d.forEach(function(a) {
    return function(b) {
      return a.gb(b);
    };
  }(this));
  c && c.forEach(function(a) {
    return function(b) {
      return a.fb(b);
    };
  }(this));
  this.setData(b);
}
t(Z, M);
s("spark.components.Form", Z);
Z.prototype.gb = function(a) {
  var b;
  b = a.name;
  a.label ? (a = new Y({Qa:a, Ma:a}), this.da.e(a), this.R.push(a = a.input)) : (a = Lc(a), this.da.e(a), this.R.push(a));
  if (b) {
    return this.qa[b] = a;
  }
};
Z.prototype.createInput = Z.prototype.gb;
Z.prototype.fb = function(a) {
  a = new ob(a);
  this.buttons.push(a);
  return this.Da.e(a);
};
Z.prototype.createButton = Z.prototype.fb;
Z.prototype.setData = function(a) {
  var b, c, d, e;
  if (this.qa) {
    e = [];
    for (c in a) {
      d = a[c], (b = this.qa[c]) ? e.push(b.J(d)) : e.push(void 0);
    }
    return e;
  }
};
Z.prototype.setData = Z.prototype.setData;
Z.prototype.getData = function() {
  var a, b, c, d, e;
  a = {};
  e = this.R;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], a[b.getName()] = b.Ha();
  }
  return a;
};
Z.prototype.getData = Z.prototype.getData;
Z.prototype.Tb = function() {
  return this.da;
};
Z.prototype.getInputsContainer = Z.prototype.Tb;
Z.prototype.Lb = function() {
  return this.Da;
};
Z.prototype.getButtonsContainer = Z.prototype.Lb;
Z.prototype.Sb = function() {
  return this.R;
};
Z.prototype.getInputs = Z.prototype.Sb;
Z.prototype.Kb = function() {
  return this.buttons;
};
Z.prototype.getButtons = Z.prototype.Kb;
Z.prototype.Rb = function(a) {
  return this.qa[a] || null;
};
Z.prototype.getInputByName = Z.prototype.Rb;
function $(a, b) {
  var c, d;
  null == a && (a = {});
  a.n = this.f(a, "toggle-switch");
  a.La = !0;
  a.name || (a.name = a.name || null);
  null == a.checked && (a.checked = null != (c = a.checked) ? c : !1);
  d = a.Qa || a.labelOptions || {};
  d.label = "";
  c = a.Ma || a.inputOptions || {};
  c.type = "checkbox";
  a.name && (c.name = a.name);
  a.Qa = d;
  a.Ma = c;
  $.b.constructor.call(this, a, b);
  a.checked && this.check();
  this.input.D("StateChanged", function(a) {
    return function(b) {
      return a.v("StateChanged", b.data);
    };
  }(this));
}
t($, Y);
s("spark.components.ToggleSwitch", $);
$.prototype.check = function() {
  return this.input.check();
};
$.prototype.check = $.prototype.check;
$.prototype.ya = function() {
  return this.input.ya();
};
$.prototype.uncheck = $.prototype.ya;
$.prototype.B = function() {
  return this.input.B();
};
$.prototype.isChecked = $.prototype.B;
function Oc(a, b) {
  var c;
  null == a && (a = {});
  null == a.Fb && (a.Fb = null != (c = a.withImage) ? c : !0);
  a.rb || (a.rb = a.imageUrl || "http://lorempixel.com/460/144/city/4");
  a.title || (a.title = a.title || "Sign Up");
  a.eb || (a.eb = a.buttonTitle || "Sign Up");
  a.cb || (a.cb = a.buttonColor || "green");
  a.u || (a.u = a.callback || null);
  a.ib || (a.ib = a.forgotPasswordCallback || null);
  a.bb || (a.bb = a.alreadyRegisteredCallback || null);
  this.f(a, "sign-up-widget");
  Oc.b.constructor.call(this, a, b);
  a.Fb && (c = new M({tagName:"img", attributes:{src:this.options.rb}}), this.e(c), this.W("with-image"));
  c = new M({K:this.options.title, n:"title"});
  this.e(c);
  this.form = new Z(Pc(this));
  this.e(this.form);
  Qc(this);
}
t(Oc, M);
s("spark.widgets.SignUp", Oc);
function Qc(a) {
  var b, c, d, e;
  c = a.options;
  d = c.ib;
  b = c.bb;
  e = new M({tagName:"a", K:"Already Registered?", n:"already-registered", attributes:{href:"#"}, w:{click:function(a) {
    return function() {
      b && b.call(a);
      return a.v("AlreadyRegisteredLinkClicked");
    };
  }(a)}});
  c = new M({tagName:"a", K:"Forgot password?", n:"forgot-password", attributes:{href:"#"}, w:{click:function(a) {
    return function() {
      d && d.call(a);
      return a.v("ForgotPasswordLinkClicked");
    };
  }(a)}});
  a.e(e);
  a.form.da.e(c);
}
function Pc(a) {
  var b;
  b = a.options;
  return{R:[{type:"text", placeholder:"Email or username", name:"username"}, {type:"password", placeholder:"Password", name:"password"}], buttons:[{title:b.eb, n:b.cb, u:function(a) {
    return function() {
      b.u && b.u.call(a);
      return a.v("SignUpFormPosted");
    };
  }(a)}]};
}
Oc.prototype.Pb = function() {
  return this.form;
};
Oc.prototype.getForm = Oc.prototype.Pb;
window.addEventListener("load", function() {
  return!0;
}, !1);
})();
