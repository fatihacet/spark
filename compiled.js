(function(){var g, h = this;
function m() {
}
function aa(a) {
  a.ja = function() {
    return a.ob ? a.ob : a.ob = new a;
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
function fa(a) {
  return a[ga] || (a[ga] = ++ha);
}
var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b) {
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
  a.se = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;var ja;
var ka = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
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
;function oa() {
  0 != pa && fa(this);
  this.Ea = this.Ea;
  this.bc = this.bc;
}
var pa = 0;
oa.prototype.Ea = !1;
var qa = "closure_listenable_" + (1E6 * Math.random() | 0);
function ra(a) {
  return!(!a || !a[qa]);
}
var sa = 0;
function ta(a, b, c, d, e) {
  this.A = a;
  this.ua = null;
  this.src = b;
  this.type = c;
  this.fa = !!d;
  this.ma = e;
  this.key = ++sa;
  this.R = this.ea = !1;
}
function ua(a) {
  a.R = !0;
  a.A = null;
  a.ua = null;
  a.src = null;
  a.ma = null;
}
;var u = Array.prototype, va = u.indexOf ? function(a, b, c) {
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
}, wa = u.filter ? function(a, b, c) {
  return u.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, k = p(a) ? a.split("") : a, l = 0;l < d;l++) {
    if (l in k) {
      var r = k[l];
      b.call(c, r, l, a) && (e[f++] = r);
    }
  }
  return e;
}, xa = u.every ? function(a, b, c) {
  return u.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return!1;
    }
  }
  return!0;
};
function ya(a, b) {
  return 0 <= va(a, b);
}
function za(a, b) {
  var c = va(a, b), d;
  (d = 0 <= c) && u.splice.call(a, c, 1);
  return d;
}
function Aa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
;function Ba(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
}
var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Da(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ca.length;f++) {
      c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function w(a) {
  this.src = a;
  this.e = {};
  this.da = 0;
}
w.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.e[f];
  a || (a = this.e[f] = [], this.da++);
  var k = Ea(a, b, d, e);
  -1 < k ? (b = a[k], c || (b.ea = !1)) : (b = new ta(b, this.src, f, !!d, e), b.ea = c, a.push(b));
  return b;
};
w.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.e)) {
    return!1;
  }
  var e = this.e[a];
  b = Ea(e, b, c, d);
  return-1 < b ? (ua(e[b]), u.splice.call(e, b, 1), 0 == e.length && (delete this.e[a], this.da--), !0) : !1;
};
function Fa(a, b) {
  var c = b.type;
  if (!(c in a.e)) {
    return!1;
  }
  var d = za(a.e[c], b);
  d && (ua(b), 0 == a.e[c].length && (delete a.e[c], a.da--));
  return d;
}
w.prototype.sb = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.e) {
    if (!a || c == a) {
      for (var d = this.e[c], e = 0;e < d.length;e++) {
        ++b, ua(d[e]);
      }
      delete this.e[c];
      this.da--;
    }
  }
  return b;
};
w.prototype.$ = function(a, b, c, d) {
  a = this.e[a.toString()];
  var e = -1;
  a && (e = Ea(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function Ea(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.R && f.A == b && f.fa == !!c && f.ma == d) {
      return e;
    }
  }
  return-1;
}
;function x(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.F = !1;
  this.tb = !0;
}
x.prototype.stopPropagation = function() {
  this.F = !0;
};
x.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.tb = !1;
};
var y;
a: {
  var Ga = h.navigator;
  if (Ga) {
    var Ha = Ga.userAgent;
    if (Ha) {
      y = Ha;
      break a;
    }
  }
  y = "";
}
function A(a) {
  return-1 != y.indexOf(a);
}
;var B = A("Opera") || A("OPR"), C = A("Trident") || A("MSIE"), D = A("Gecko") && -1 == y.toLowerCase().indexOf("webkit") && !(A("Trident") || A("MSIE")), E = -1 != y.toLowerCase().indexOf("webkit"), Ia = h.navigator || null, F = -1 != (Ia && Ia.platform || "").indexOf("Mac");
function Ja() {
  var a = h.document;
  return a ? a.documentMode : void 0;
}
var Ka = function() {
  var a = "", b;
  if (B && h.opera) {
    return a = h.opera.version, q(a) ? a() : a;
  }
  D ? b = /rv\:([^\);]+)(\)|;)/ : C ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : E && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(y)) ? a[1] : "");
  return C && (b = Ja(), b > parseFloat(a)) ? String(b) : a;
}(), La = {};
function G(a) {
  var b;
  if (!(b = La[a])) {
    b = 0;
    for (var c = ka(String(Ka)).split("."), d = ka(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var k = c[f] || "", l = d[f] || "", r = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
      do {
        var I = r.exec(k) || ["", "", ""], Q = z.exec(l) || ["", "", ""];
        if (0 == I[0].length && 0 == Q[0].length) {
          break;
        }
        b = la(0 == I[1].length ? 0 : parseInt(I[1], 10), 0 == Q[1].length ? 0 : parseInt(Q[1], 10)) || la(0 == I[2].length, 0 == Q[2].length) || la(I[2], Q[2]);
      } while (0 == b);
    }
    b = La[a] = 0 <= b;
  }
  return b;
}
var Ma = h.document, Na = Ma && C ? Ja() || ("CSS1Compat" == Ma.compatMode ? parseInt(Ka, 10) : 5) : void 0;
var Oa = !C || C && 9 <= Na, Pa = !C || C && 9 <= Na, Qa = C && !G("9");
!E || G("528");
D && G("1.9b") || C && G("8") || B && G("9.5") || E && G("528");
D && !G("8") || C && G("9");
function Ra(a) {
  return E ? "webkit" + a : B ? "o" + a.toLowerCase() : a.toLowerCase();
}
var Sa = {qc:"click", ae:"rightclick", zc:"dblclick", kd:"mousedown", qd:"mouseup", pd:"mouseover", od:"mouseout", nd:"mousemove", ld:"mouseenter", md:"mouseleave", de:"selectstart", re:"wheel", Zc:"keypress", Yc:"keydown", $c:"keyup", oc:"blur", Rc:"focus", Ac:"deactivate", Sc:C ? "focusin" : "DOMFocusIn", Tc:C ? "focusout" : "DOMFocusOut", pc:"change", ce:"select", ge:"submit", Xc:"input", Xd:"propertychange", Oc:"dragstart", Jc:"drag", Lc:"dragenter", Nc:"dragover", Mc:"dragleave", Pc:"drop", 
Kc:"dragend", me:"touchstart", le:"touchmove", ke:"touchend", je:"touchcancel", nc:"beforeunload", vc:"consolemessage", wc:"contextmenu", Dc:"DOMContentLoaded", ERROR:"error", Wc:"help", ad:"load", gd:"losecapture", Kd:"orientationchange", Yd:"readystatechange", Zd:"resize", be:"scroll", oe:"unload", Vc:"hashchange", Ld:"pagehide", Md:"pageshow", Wd:"popstate", xc:"copy", Nd:"paste", yc:"cut", kc:"beforecopy", lc:"beforecut", mc:"beforepaste", Jd:"online", Id:"offline", jd:"message", uc:"connect", 
jc:Ra("AnimationStart"), hc:Ra("AnimationEnd"), ic:Ra("AnimationIteration"), ne:Ra("TransitionEnd"), Pd:"pointerdown", Vd:"pointerup", Od:"pointercancel", Sd:"pointermove", Ud:"pointerover", Td:"pointerout", Qd:"pointerenter", Rd:"pointerleave", Uc:"gotpointercapture", hd:"lostpointercapture", rd:"MSGestureChange", sd:"MSGestureEnd", td:"MSGestureHold", ud:"MSGestureStart", vd:"MSGestureTap", wd:"MSGotPointerCapture", xd:"MSInertiaStart", yd:"MSLostPointerCapture", zd:"MSPointerCancel", Ad:"MSPointerDown", 
Bd:"MSPointerEnter", Cd:"MSPointerHover", Dd:"MSPointerLeave", Ed:"MSPointerMove", Fd:"MSPointerOut", Gd:"MSPointerOver", Hd:"MSPointerUp", he:"text", ie:"textInput", sc:"compositionstart", tc:"compositionupdate", rc:"compositionend", Qc:"exit", bd:"loadabort", cd:"loadcommit", dd:"loadredirect", ed:"loadstart", fd:"loadstop", $d:"responsive", ee:"sizechanged", pe:"unresponsive", qe:"visibilitychange", fe:"storage", Ic:"DOMSubtreeModified", Ec:"DOMNodeInserted", Gc:"DOMNodeRemoved", Hc:"DOMNodeRemovedFromDocument", 
Fc:"DOMNodeInsertedIntoDocument", Bc:"DOMAttrModified", Cc:"DOMCharacterDataModified"};
function Ta(a) {
  Ta[" "](a);
  return a;
}
Ta[" "] = m;
function H(a, b) {
  x.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.Pa = !1;
  this.r = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (D) {
        var e;
        a: {
          try {
            Ta(d.nodeName);
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
    this.offsetX = E || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = E || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
    this.Pa = F ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.r = a;
    a.defaultPrevented && this.preventDefault();
  }
}
t(H, x);
var Ua = [1, 4, 2];
function Va(a) {
  return Oa ? 0 == a.r.button : "click" == a.type ? !0 : !!(a.r.button & Ua[0]);
}
H.prototype.stopPropagation = function() {
  H.b.stopPropagation.call(this);
  this.r.stopPropagation ? this.r.stopPropagation() : this.r.cancelBubble = !0;
};
H.prototype.preventDefault = function() {
  H.b.preventDefault.call(this);
  var a = this.r;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Qa) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Wa = "closure_lm_" + (1E6 * Math.random() | 0), Xa = {}, Ya = 0;
function J(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      J(a, b[f], c, d, e);
    }
    return null;
  }
  c = Za(c);
  return ra(a) ? a.c(b, c, d, e) : $a(a, b, c, !1, d, e);
}
function $a(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var k = !!e, l = ab(a);
  l || (a[Wa] = l = new w(a));
  c = l.add(b, c, d, e, f);
  if (c.ua) {
    return c;
  }
  d = bb();
  c.ua = d;
  d.src = a;
  d.A = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, k) : a.attachEvent(cb(b.toString()), d);
  Ya++;
  return c;
}
function bb() {
  var a = db, b = Pa ? function(c) {
    return a.call(b.src, b.A, c);
  } : function(c) {
    c = a.call(b.src, b.A, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function eb(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      eb(a, b[f], c, d, e);
    }
    return null;
  }
  c = Za(c);
  return ra(a) ? a.qb(b, c, d, e) : $a(a, b, c, !0, d, e);
}
function fb(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      fb(a, b[f], c, d, e);
    }
  } else {
    c = Za(c), ra(a) ? a.m(b, c, d, e) : a && (a = ab(a)) && (b = a.$(b, c, !!d, e)) && K(b);
  }
}
function K(a) {
  if (da(a) || !a || a.R) {
    return!1;
  }
  var b = a.src;
  if (ra(b)) {
    return Fa(b.w, a);
  }
  var c = a.type, d = a.ua;
  b.removeEventListener ? b.removeEventListener(c, d, a.fa) : b.detachEvent && b.detachEvent(cb(c), d);
  Ya--;
  (c = ab(b)) ? (Fa(c, a), 0 == c.da && (c.src = null, b[Wa] = null)) : ua(a);
  return!0;
}
function cb(a) {
  return a in Xa ? Xa[a] : Xa[a] = "on" + a;
}
function gb(a, b, c, d) {
  var e = 1;
  if (a = ab(a)) {
    if (b = a.e[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.fa == c && !f.R && (e &= !1 !== hb(f, d));
      }
    }
  }
  return Boolean(e);
}
function hb(a, b) {
  var c = a.A, d = a.ma || a.src;
  a.ea && K(a);
  return c.call(d, b);
}
function db(a, b) {
  if (a.R) {
    return!0;
  }
  if (!Pa) {
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
    c = new H(e, this);
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
      for (var f = a.type, l = e.length - 1;!c.F && 0 <= l;l--) {
        c.currentTarget = e[l], d &= gb(e[l], f, !0, c);
      }
      for (l = 0;!c.F && l < e.length;l++) {
        c.currentTarget = e[l], d &= gb(e[l], f, !1, c);
      }
    }
    return d;
  }
  return hb(a, new H(b, this));
}
function ab(a) {
  a = a[Wa];
  return a instanceof w ? a : null;
}
var ib = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Za(a) {
  if (q(a)) {
    return a;
  }
  a[ib] || (a[ib] = function(b) {
    return a.handleEvent(b);
  });
  return a[ib];
}
;function L() {
  oa.call(this);
  this.w = new w(this);
  this.Bb = this;
  this.Oa = null;
}
t(L, oa);
L.prototype[qa] = !0;
g = L.prototype;
g.Ua = function(a) {
  this.Oa = a;
};
g.addEventListener = function(a, b, c, d) {
  J(this, a, b, c, d);
};
g.removeEventListener = function(a, b, c, d) {
  fb(this, a, b, c, d);
};
g.dispatchEvent = function(a) {
  var b, c = this.Oa;
  if (c) {
    for (b = [];c;c = c.Oa) {
      b.push(c);
    }
  }
  var c = this.Bb, d = a.type || a;
  if (p(a)) {
    a = new x(a, c);
  } else {
    if (a instanceof x) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new x(d, c);
      Da(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var k = b.length - 1;!a.F && 0 <= k;k--) {
      f = a.currentTarget = b[k], e = jb(f, d, !0, a) && e;
    }
  }
  a.F || (f = a.currentTarget = c, e = jb(f, d, !0, a) && e, a.F || (e = jb(f, d, !1, a) && e));
  if (b) {
    for (k = 0;!a.F && k < b.length;k++) {
      f = a.currentTarget = b[k], e = jb(f, d, !1, a) && e;
    }
  }
  return e;
};
g.c = function(a, b, c, d) {
  return this.w.add(String(a), b, !1, c, d);
};
g.qb = function(a, b, c, d) {
  return this.w.add(String(a), b, !0, c, d);
};
g.m = function(a, b, c, d) {
  return this.w.remove(String(a), b, c, d);
};
function jb(a, b, c, d) {
  b = a.w.e[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var k = b[f];
    if (k && !k.R && k.fa == c) {
      var l = k.A, r = k.ma || k.src;
      k.ea && Fa(a.w, k);
      e = !1 !== l.call(r, d) && e;
    }
  }
  return e && 0 != d.tb;
}
g.$ = function(a, b, c, d) {
  return this.w.$(String(a), b, c, d);
};
function M(a, b) {
  null == a && (a = {});
  M.b.constructor.apply(this, arguments);
  a && this.xb(a);
  b && this.setData(b);
  fa(this);
}
t(M, L);
s("spark.core.Object", M);
M.prototype.xb = function(a) {
  return this.options = a;
};
M.prototype.setOptions = M.prototype.xb;
M.prototype.Pb = function() {
  return this.options;
};
M.prototype.getOptions = M.prototype.Pb;
M.prototype.Ob = function(a) {
  return this.options[a] || null;
};
M.prototype.getOption = M.prototype.Ob;
M.prototype.setData = function(a) {
  return this.data = a;
};
M.prototype.setData = M.prototype.setData;
M.prototype.getData = function() {
  return this.data;
};
M.prototype.getData = M.prototype.getData;
M.prototype.Qb = function() {
  return fa(this);
};
M.prototype.getUid = M.prototype.Qb;
M.prototype.B = function(a, b) {
  return J(this, a, b);
};
M.prototype.on = M.prototype.B;
M.prototype.Na = function(a, b) {
  return eb(this, a, b);
};
M.prototype.once = M.prototype.Na;
M.prototype.ha = function(a, b) {
  return this.dispatchEvent({type:a, data:b});
};
M.prototype.emit = M.prototype.ha;
M.prototype.Ma = function(a, b) {
  return this.m(a, b);
};
M.prototype.off = M.prototype.Ma;
function kb(a) {
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
s("spark.utils.concatString", kb);
function N(a, b) {
  var c;
  null == a && (a = {});
  a.tagName || (a.tagName = a.tagName || "div");
  a.cb || (a.cb = a.domId || null);
  a.I || (a.I = a.template || null);
  a.attributes || (a.attributes = a.attributes || {});
  a.v || (a.v = a.eventHandlers || {});
  null == a.disabled && (a.disabled = null != (c = a.disabled) ? c : !1);
  this.h(a);
  N.b.constructor.call(this, a, b);
  this.children = [];
  var d, e, f, k, l;
  c = this.options;
  k = c.tagName;
  e = c.cb;
  d = c.q;
  l = c.I;
  c = c.attributes;
  this.element = document.createElement(k);
  this.ub(d);
  e && this.vb(e);
  l && this.yb(l);
  e = [];
  for (f in c) {
    d = c[f], e.push(this.setAttribute(f, d));
  }
  var r;
  c = lb;
  d = this.options.v;
  e = [];
  for (r in d) {
    f = d[r], c[r] && "function" === typeof f ? e.push(this.B(Sa[c[r]], f)) : e.push(void 0);
  }
  a.disabled && this.disable();
}
t(N, M);
s("spark.core.View", N);
N.prototype.vb = function(a) {
  return this.a().id = a;
};
N.prototype.setDomId = N.prototype.vb;
N.prototype.Jb = function() {
  return this.a().id || null;
};
N.prototype.getDomId = N.prototype.Jb;
N.prototype.ub = function(a) {
  return this.a().className = a;
};
N.prototype.setClass = N.prototype.ub;
N.prototype.Hb = function() {
  return this.a().className;
};
N.prototype.getClass = N.prototype.Hb;
N.prototype.Ib = function() {
  return this.a().classList;
};
N.prototype.getClassList = N.prototype.Ib;
N.prototype.U = function(a) {
  return this.a().classList.add(a);
};
N.prototype.addClass = N.prototype.U;
N.prototype.Qa = function(a) {
  return this.a().classList.remove(a);
};
N.prototype.removeClass = N.prototype.Qa;
N.prototype.Vb = function(a) {
  return this.a().classList.contains(a);
};
N.prototype.hasClass = N.prototype.Vb;
N.prototype.a = function() {
  return this.element;
};
N.prototype.getElement = N.prototype.a;
N.prototype.yb = function(a) {
  return this.a().innerHTML = a;
};
N.prototype.setTemplate = N.prototype.yb;
N.prototype.Cb = function() {
  return document.body.appendChild(this.a());
};
N.prototype.appendToDocumentBody = N.prototype.Cb;
N.prototype.dc = function() {
  var a, b;
  a = this.a();
  b = a.parentNode;
  if (!b) {
    return!1;
  }
  b.removeChild(a);
  return!0;
};
N.prototype.removeFromDocument = N.prototype.dc;
N.prototype.i = function(a) {
  var b;
  a instanceof N ? -1 < this.children.indexOf(a) && (b = "This view already appended to target view.") : b = "View should be an instance of spark.core.View";
  if (b) {
    throw Error(b);
  }
  this.children.push(a);
  return this.a().appendChild(a.a());
};
N.prototype.appendView = N.prototype.i;
N.prototype.setAttribute = function(a, b) {
  return this.a().setAttribute(a, b);
};
N.prototype.setAttribute = N.prototype.setAttribute;
N.prototype.getAttribute = function(a) {
  return this.a().getAttribute(a);
};
N.prototype.getAttribute = N.prototype.getAttribute;
N.prototype.removeAttribute = function(a) {
  return this.a().removeAttribute(a);
};
N.prototype.removeAttribute = N.prototype.removeAttribute;
N.prototype.disable = function() {
  this.U("disabled");
  this.setAttribute("disabled", "disabled");
  return this.disabled = !0;
};
N.prototype.disable = N.prototype.disable;
N.prototype.enable = function() {
  this.Qa("disabled");
  this.removeAttribute("disabled");
  return this.disabled = !1;
};
N.prototype.enable = N.prototype.enable;
N.prototype.toggle = function() {
  return this.pb() ? this.enable() : this.disable();
};
N.prototype.toggle = N.prototype.toggle;
N.prototype.pb = function() {
  return this.disabled || !1;
};
N.prototype.isDisabled = N.prototype.pb;
N.prototype.B = function(a, b) {
  lb[a] && J(this.a(), a, b);
  return J(this, a, b);
};
N.prototype.on = N.prototype.B;
N.prototype.Na = function(a, b) {
  lb[a] && eb(this.a(), a, b);
  return eb(this, a, b);
};
N.prototype.once = N.prototype.Na;
N.prototype.Ma = function(a, b) {
  fb(this.a(), a, b);
  return this.m(a, b);
};
N.prototype.off = N.prototype.Ma;
N.prototype.h = function(a, b) {
  var c;
  c = kb("view", a.q || a.cssClass, b);
  return a.q = a.cssClass = c;
};
var lb = Ba(Sa);
function mb(a, b) {
  var c, d;
  null == a && (a = {});
  a.tagName = a.tagName = "button";
  a.title || (a.title = a.title || null);
  a.u || (a.u = a.callback || null);
  a.Ia || (a.Ia = a.iconClass || null);
  a.v || (a.v = a.eventHandlers || {});
  this.h(a, "button");
  c = a.u;
  "function" === typeof c && (a.v.click = c);
  d = c = "";
  a.Ia && (c = "<span class='icon " + a.Ia + "'></span>");
  a.title && (d = "<span>" + a.title + "</span>");
  a.I = "" + c + d;
  mb.b.constructor.call(this, a, b);
}
t(mb, N);
s("spark.components.Button", mb);
function O(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
}
g = O.prototype;
g.clone = function() {
  return new O(this.top, this.right, this.bottom, this.left);
};
g.toString = function() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
g.contains = function(a) {
  return this && a ? a instanceof O ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
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
!D && !C || C && C && 9 <= Na || D && G("1.9.1");
C && G("9");
function nb(a) {
  return a ? new ob(pb(a)) : ja || (ja = new ob);
}
function qb(a, b, c) {
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
      v(k ? Aa(f) : f, d);
    }
  }
}
function rb(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
}
function sb(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function tb(a, b) {
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
function pb(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function ub(a, b) {
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
        rb(a), a.appendChild(pb(a).createTextNode(String(b)));
      }
    }
  }
}
function vb(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
}
function wb(a) {
  a = a.getAttributeNode("tabindex");
  return null != a && a.specified;
}
function xb(a) {
  a = a.tabIndex;
  return da(a) && 0 <= a && 32768 > a;
}
function ob(a) {
  this.L = a || h.document || document;
}
g = ob.prototype;
g.fb = nb;
g.a = function(a) {
  return p(a) ? this.L.getElementById(a) : a;
};
g.createElement = function(a) {
  return this.L.createElement(a);
};
g.createTextNode = function(a) {
  return this.L.createTextNode(String(a));
};
g.appendChild = function(a, b) {
  a.appendChild(b);
};
g.append = function(a, b) {
  qb(pb(a), a, arguments);
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
g.removeNode = sb;
g.contains = tb;
g.Ja = function(a) {
  var b;
  (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!wb(a) || xb(a)) : wb(a) && xb(a)) && C ? (a = q(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height:a.offsetHeight, width:a.offsetWidth}, a = null != a && 0 < a.height && 0 < a.width) : a = b;
  return a;
};
function yb(a, b) {
  if (p(b)) {
    var c = zb(a, b);
    c && (a.style[c] = void 0);
  } else {
    for (c in b) {
      var d = a, e = b[c], f = zb(d, c);
      f && (d.style[f] = e);
    }
  }
}
function zb(a, b) {
  var c = ma(b);
  if (void 0 === a.style[c]) {
    var d = (E ? "Webkit" : D ? "Moz" : C ? "ms" : B ? "O" : null) + na(c);
    if (void 0 !== a.style[d]) {
      return d;
    }
  }
  return c;
}
function P(a, b) {
  var c = pb(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
}
var Ab = D ? "MozUserSelect" : E ? "WebkitUserSelect" : null;
function Bb(a, b) {
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
function Cb(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? Bb(a, c) : 0;
}
function Db(a) {
  if (C) {
    var b = Cb(a, "paddingLeft"), c = Cb(a, "paddingRight"), d = Cb(a, "paddingTop");
    a = Cb(a, "paddingBottom");
    return new O(d, c, a, b);
  }
  b = P(a, "paddingLeft");
  c = P(a, "paddingRight");
  d = P(a, "paddingTop");
  a = P(a, "paddingBottom");
  return new O(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
var Eb = {thin:2, medium:4, thick:6};
function Fb(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0;
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return c in Eb ? Eb[c] : Bb(a, c);
}
function Gb(a) {
  if (C && !(C && 9 <= Na)) {
    var b = Fb(a, "borderLeft"), c = Fb(a, "borderRight"), d = Fb(a, "borderTop");
    a = Fb(a, "borderBottom");
    return new O(d, c, a, b);
  }
  b = P(a, "borderLeftWidth");
  c = P(a, "borderRightWidth");
  d = P(a, "borderTopWidth");
  a = P(a, "borderBottomWidth");
  return new O(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
;function Hb(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function Ib(a, b) {
  return a.classList ? a.classList.contains(b) : ya(Hb(a), b);
}
function Jb(a, b) {
  a.classList ? a.classList.add(b) : Ib(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function Kb(a, b) {
  if (a.classList) {
    v(b, function(b) {
      Jb(a, b);
    });
  } else {
    var c = {};
    v(Hb(a), function(a) {
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
function Lb(a, b) {
  a.classList ? a.classList.remove(b) : Ib(a, b) && (a.className = wa(Hb(a), function(a) {
    return a != b;
  }).join(" "));
}
function Mb(a, b) {
  a.classList ? v(b, function(b) {
    Lb(a, b);
  }) : a.className = wa(Hb(a), function(a) {
    return!ya(b, a);
  }).join(" ");
}
;function Nb(a) {
  oa.call(this);
  this.Ha = a;
  this.ca = {};
}
t(Nb, oa);
var Ob = [];
g = Nb.prototype;
g.c = function(a, b, c, d) {
  n(b) || (b && (Ob[0] = b.toString()), b = Ob);
  for (var e = 0;e < b.length;e++) {
    var f = J(a, b[e], c || this.handleEvent, d || !1, this.Ha || this);
    if (!f) {
      break;
    }
    this.ca[f.key] = f;
  }
  return this;
};
g.qb = function(a, b, c, d) {
  return Pb(this, a, b, c, d);
};
function Pb(a, b, c, d, e, f) {
  if (n(c)) {
    for (var k = 0;k < c.length;k++) {
      Pb(a, b, c[k], d, e, f);
    }
  } else {
    b = eb(b, c, d || a.handleEvent, e, f || a.Ha || a);
    if (!b) {
      return a;
    }
    a.ca[b.key] = b;
  }
  return a;
}
g.m = function(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      this.m(a, b[f], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.Ha || this, c = Za(c), d = !!d, b = ra(a) ? a.$(b, c, d, e) : a ? (a = ab(a)) ? a.$(b, c, d, e) : null : null, b && (K(b), delete this.ca[b.key]);
  }
  return this;
};
g.sb = function() {
  var a = this.ca, b = K, c;
  for (c in a) {
    b.call(void 0, a[c], c, a);
  }
  this.ca = {};
};
g.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Qb() {
}
aa(Qb);
Qb.prototype.ac = 0;
function R(a) {
  L.call(this);
  this.X = a || nb();
  this.va = Rb;
  this.oa = null;
  this.p = !1;
  this.g = null;
  this.aa = void 0;
  this.K = this.Da = this.t = null;
}
t(R, L);
R.prototype.Wb = Qb.ja();
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
function Tb(a, b) {
  if (a.t && a.t.K) {
    var c = a.t.K, d = a.oa;
    d in c && delete c[d];
    c = a.t.K;
    if (b in c) {
      throw Error('The object already contains the key "' + b + '"');
    }
    c[b] = a;
  }
  a.oa = b;
}
g = R.prototype;
g.a = function() {
  return this.g;
};
function Ub(a) {
  a.aa || (a.aa = new Nb(a));
  return a.aa;
}
g.getParent = function() {
  return this.t;
};
g.Ua = function(a) {
  if (this.t && this.t != a) {
    throw Error("Method not supported");
  }
  R.b.Ua.call(this, a);
};
g.fb = function() {
  return this.X;
};
g.W = function(a) {
  if (this.p) {
    throw Error("Component already rendered");
  }
  if (a && this.V(a)) {
    var b = pb(a);
    this.X && this.X.L == b || (this.X = nb(a));
    this.bb(a);
    this.M();
  } else {
    throw Error("Invalid element to decorate");
  }
};
g.V = function() {
  return!0;
};
g.bb = function(a) {
  this.g = a;
};
g.M = function() {
  this.p = !0;
  Vb(this, function(a) {
    !a.p && a.a() && a.M();
  });
};
g.ia = function() {
  Vb(this, function(a) {
    a.p && a.ia();
  });
  this.aa && this.aa.sb();
  this.p = !1;
};
g.Z = function() {
  return this.g;
};
g.S = function(a) {
  if (this.p) {
    throw Error("Component already rendered");
  }
  this.va = a;
};
function Vb(a, b) {
  a.Da && v(a.Da, b, void 0);
}
g.removeChild = function(a, b) {
  if (a) {
    var c = p(a) ? a : a.oa || (a.oa = ":" + (a.Wb.ac++).toString(36)), d;
    this.K && c ? (d = this.K, d = (c in d ? d[c] : void 0) || null) : d = null;
    a = d;
    if (c && a) {
      d = this.K;
      c in d && delete d[c];
      za(this.Da, a);
      b && (a.ia(), a.g && sb(a.g));
      c = a;
      if (null == c) {
        throw Error("Unable to set parent component");
      }
      c.t = null;
      R.b.Ua.call(c, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
var Wb;
function Xb(a, b, c) {
  n(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (Wb || (Wb = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = Wb, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
}
;function Yb() {
}
var Zb;
aa(Yb);
var $b = {button:"pressed", checkbox:"checked", menuitem:"selected", menuitemcheckbox:"checked", menuitemradio:"checked", radio:"checked", tab:"selected", treeitem:"selected"};
g = Yb.prototype;
g.Z = function(a) {
  return a;
};
g.Y = function(a, b, c) {
  if (a = a.a ? a.a() : a) {
    var d = [b];
    C && !G("7") && (d = ac(Hb(a), b), d.push(b));
    (c ? Kb : Mb)(a, d);
  }
};
g.V = function() {
  return!0;
};
g.W = function(a, b) {
  b.id && Tb(a, b.id);
  var c = this.Z(b);
  c && c.firstChild && bc(c.firstChild.nextSibling ? Aa(c.childNodes) : c.firstChild);
  var d = 0, e = this.h(), f = this.h(), k = !1, l = !1, r = !1, z = Aa(Hb(b));
  v(z, function(a) {
    k || a != e ? l || a != f ? d |= cc(this, a) : l = !0 : (k = !0, f == e && (l = !0));
    1 == cc(this, a) && wb(c) && xb(c) && vb(c, !1);
  }, this);
  a.d = d;
  k || (z.push(e), f == e && (l = !0));
  l || z.push(f);
  var I = a.n;
  I && z.push.apply(z, I);
  if (C && !G("7")) {
    var Q = ac(z);
    0 < Q.length && (z.push.apply(z, Q), r = !0);
  }
  if (!k || !l || I || r) {
    b.className = z.join(" ");
  }
  dc(this, a, b);
  return b;
};
function dc(a, b, c) {
  b.J || Xb(c, "hidden", !b.J);
  b.isEnabled() || a.T(c, 1, !b.isEnabled());
  b.l & 8 && a.T(c, 8, !!(b.d & 8));
  b.l & 16 && a.T(c, 16, b.qa());
  b.l & 64 && a.T(c, 64, !!(b.d & 64));
}
g.wa = function(a, b) {
  var c = !b, d = C || B ? a.getElementsByTagName("*") : null;
  if (Ab) {
    if (c = c ? "none" : "", a.style[Ab] = c, d) {
      for (var e = 0, f;f = d[e];e++) {
        f.style[Ab] = c;
      }
    }
  } else {
    if (C || B) {
      if (c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for (e = 0;f = d[e];e++) {
          f.setAttribute("unselectable", c);
        }
      }
    }
  }
};
g.S = function(a, b) {
  this.Y(a, this.h() + "-rtl", b);
};
g.Ja = function(a) {
  var b;
  return a.l & 32 && (b = a.N()) ? wb(b) && xb(b) : !1;
};
g.xa = function(a, b) {
  var c;
  if (a.l & 32 && (c = a.N())) {
    if (!b && a.d & 32) {
      try {
        c.blur();
      } catch (d) {
      }
      a.d & 32 && a.gb();
    }
    (wb(c) && xb(c)) != b && vb(c, b);
  }
};
g.k = function(a, b, c) {
  var d = a.a();
  if (d) {
    var e;
    this.ga || ec(this);
    (e = this.ga[b]) && this.Y(a, e, c);
    this.T(d, b, c);
  }
};
g.T = function(a, b, c) {
  Zb || (Zb = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  b = Zb[b];
  var d = a.getAttribute("role") || null;
  d && (d = $b[d] || b, b = "checked" == b || "selected" == b ? d : b);
  b && Xb(a, b, c);
};
g.G = function(a, b) {
  var c = this.Z(a);
  if (c && (rb(c), b)) {
    if (p(b)) {
      ub(c, b);
    } else {
      var d = function(a) {
        if (a) {
          var b = pb(c);
          c.appendChild(p(a) ? b.createTextNode(a) : a);
        }
      };
      n(b) ? v(b, d) : !ca(b) || "nodeType" in b ? d(b) : v(Aa(b), d);
    }
  }
};
g.N = function(a) {
  return a.a();
};
g.h = function() {
  return "goog-control";
};
function ac(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  v([], function(d) {
    !xa(d, ia(ya, a)) || b && !ya(d, b) || c.push(d.join("_"));
  });
  return c;
}
function cc(a, b) {
  a.zb || (a.ga || ec(a), a.zb = Ba(a.ga));
  var c = parseInt(a.zb[b], 10);
  return isNaN(c) ? 0 : c;
}
function ec(a) {
  var b = a.h();
  b.replace(/\xa0|\s/g, " ");
  a.ga = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"};
}
;function fc() {
}
t(fc, Yb);
aa(fc);
g = fc.prototype;
g.W = function(a, b) {
  gc(a);
  a.Aa &= -256;
  if (a.p && a.d & 32) {
    throw Error("Component already rendered");
  }
  a.d & 32 && a.k(32, !1);
  a.l &= -33;
  fc.b.W.call(this, a, b);
  a.G(b.value);
  return b;
};
g.V = function(a) {
  return "TEXTAREA" == a.tagName;
};
g.S = m;
g.Ja = function(a) {
  return a.isEnabled();
};
g.xa = m;
g.k = function(a, b, c) {
  fc.b.k.call(this, a, b, c);
  (a = a.a()) && 1 == b && (a.disabled = c);
};
g.T = m;
g.G = function(a, b) {
  a && (a.value = b);
};
g.h = function() {
  return "goog-textarea";
};
var hc = {};
function ic(a, b, c, d, e) {
  if (!(C || E && G("525"))) {
    return!0;
  }
  if (F && e) {
    return jc(a);
  }
  if (e && !d) {
    return!1;
  }
  da(b) && (b = kc(b));
  if (!c && (17 == b || 18 == b || F && 91 == b)) {
    return!1;
  }
  if (E && d && c) {
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
  if (C && d && b == a) {
    return!1;
  }
  switch(a) {
    case 13:
      return!0;
    case 27:
      return!E;
  }
  return jc(a);
}
function jc(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || E && 0 == a) {
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
function kc(a) {
  if (D) {
    a = lc(a);
  } else {
    if (F && E) {
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
function lc(a) {
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
;function mc(a, b) {
  L.call(this);
  a && nc(this, a, b);
}
t(mc, L);
g = mc.prototype;
g.g = null;
g.ra = null;
g.Ka = null;
g.sa = null;
g.j = -1;
g.s = -1;
g.za = !1;
var oc = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, pc = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, qc = C || 
E && G("525"), rc = F && D;
g = mc.prototype;
g.Sb = function(a) {
  E && (17 == this.j && !a.ctrlKey || 18 == this.j && !a.altKey || F && 91 == this.j && !a.metaKey) && (this.s = this.j = -1);
  -1 == this.j && (a.ctrlKey && 17 != a.keyCode ? this.j = 17 : a.altKey && 18 != a.keyCode ? this.j = 18 : a.metaKey && 91 != a.keyCode && (this.j = 91));
  qc && !ic(a.keyCode, this.j, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.s = kc(a.keyCode), rc && (this.za = a.altKey));
};
g.Ub = function(a) {
  this.s = this.j = -1;
  this.za = a.altKey;
};
g.handleEvent = function(a) {
  var b = a.r, c, d, e = b.altKey;
  C && "keypress" == a.type ? (c = this.s, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.s, d = 0 <= b.charCode && 63232 > b.charCode && jc(c) ? b.charCode : 0) : B ? (c = this.s, d = jc(c) ? b.keyCode : 0) : (c = b.keyCode || this.s, d = b.charCode || 0, rc && (e = this.za), F && 63 == d && 224 == c && (c = 191));
  var f = c = kc(c), k = b.keyIdentifier;
  c ? 63232 <= c && c in oc ? f = oc[c] : 25 == c && a.shiftKey && (f = 9) : k && k in pc && (f = pc[k]);
  a = f == this.j;
  this.j = f;
  b = new sc(f, d, a, b);
  b.altKey = e;
  this.dispatchEvent(b);
};
g.a = function() {
  return this.g;
};
function nc(a, b, c) {
  a.sa && a.detach();
  a.g = b;
  a.ra = J(a.g, "keypress", a, c);
  a.Ka = J(a.g, "keydown", a.Sb, c, a);
  a.sa = J(a.g, "keyup", a.Ub, c, a);
}
g.detach = function() {
  this.ra && (K(this.ra), K(this.Ka), K(this.sa), this.sa = this.Ka = this.ra = null);
  this.g = null;
  this.s = this.j = -1;
};
function sc(a, b, c, d) {
  H.call(this, d);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
}
t(sc, H);
function S(a, b, c) {
  R.call(this, c);
  if (!(a = b)) {
    a = this.constructor;
    for (var d;a;) {
      d = fa(a);
      if (d = hc[d]) {
        break;
      }
      a = a.b ? a.b.constructor : null;
    }
    a = d ? q(d.ja) ? d.ja() : new d : null;
  }
  this.f = a;
}
t(S, R);
g = S.prototype;
g.d = 0;
g.l = 39;
g.Aa = 255;
g.ec = 0;
g.J = !0;
g.n = null;
g.Ga = !0;
g.ya = !1;
g.cc = null;
function gc(a) {
  a.p && 0 != a.Ga && tc(a, !1);
  a.Ga = !1;
}
g.N = function() {
  return this.f.N(this);
};
g.Y = function(a, b) {
  b ? a && (this.n ? ya(this.n, a) || this.n.push(a) : this.n = [a], this.f.Y(this, a, !0)) : a && this.n && za(this.n, a) && (0 == this.n.length && (this.n = null), this.f.Y(this, a, !1));
};
g.Z = function() {
  return this.f.Z(this.a());
};
g.V = function(a) {
  return this.f.V(a);
};
g.bb = function(a) {
  var b = this.g = a = this.f.W(this, a), c = this.cc || void 0;
  if (c) {
    var d = b.getAttribute("role") || null;
    c != d && (c ? b.setAttribute("role", c) : b.removeAttribute("role"));
  }
  this.ya || this.f.wa(a, !1);
  this.J = "none" != a.style.display;
};
g.M = function() {
  S.b.M.call(this);
  var a = this.f;
  if (null == this.va) {
    var b = this.p ? this.g : this.X.L.body;
    this.va = "rtl" == (P(b, "direction") || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction);
  }
  this.va && a.S(this.a(), !0);
  this.isEnabled() && a.xa(this, this.J);
  this.l & -2 && (this.Ga && tc(this, !0), this.l & 32 && (a = this.N())) && (b = this.La || (this.La = new mc), nc(b, a), Ub(this).c(b, "key", this.Tb).c(a, "focus", this.Rb).c(a, "blur", this.gb));
};
function tc(a, b) {
  var c = Ub(a), d = a.a();
  b ? (c.c(d, "mouseover", a.kb).c(d, "mousedown", a.ib).c(d, "mouseup", a.lb).c(d, "mouseout", a.jb), a.la != m && c.c(d, "contextmenu", a.la), C && c.c(d, "dblclick", a.hb)) : (c.m(d, "mouseover", a.kb).m(d, "mousedown", a.ib).m(d, "mouseup", a.lb).m(d, "mouseout", a.jb), a.la != m && c.m(d, "contextmenu", a.la), C && c.m(d, "dblclick", a.hb));
}
g.ia = function() {
  S.b.ia.call(this);
  this.La && this.La.detach();
  this.J && this.isEnabled() && this.f.xa(this, !1);
};
g.G = function(a) {
  this.f.G(this.a(), a);
};
function bc() {
}
g.S = function(a) {
  S.b.S.call(this, a);
  var b = this.a();
  b && this.f.S(b, a);
};
g.wa = function(a) {
  this.ya = a;
  var b = this.a();
  b && this.f.wa(b, a);
};
g.isEnabled = function() {
  return!(this.d & 1);
};
g.Ta = function(a) {
  var b = this.getParent();
  b && "function" == typeof b.isEnabled && !b.isEnabled() || !T(this, 1, !a) || (a || (this.setActive(!1), uc(this, !1)), this.J && this.f.xa(this, a), this.k(1, !a, !0));
};
function uc(a, b) {
  T(a, 2, b) && a.k(2, b);
}
g.setActive = function(a) {
  T(this, 4, a) && this.k(4, a);
};
g.qa = function() {
  return!!(this.d & 16);
};
g.k = function(a, b, c) {
  c || 1 != a ? this.l & a && b != !!(this.d & a) && (this.f.k(this, a, b), this.d = b ? this.d | a : this.d & ~a) : this.Ta(!b);
};
function U(a, b) {
  return!!(a.Aa & b) && !!(a.l & b);
}
function T(a, b, c) {
  return!!(a.l & b) && !!(a.d & b) != c && (!(a.ec & b) || a.dispatchEvent(Sb(b, c))) && !a.Ea;
}
g.kb = function(a) {
  (!a.relatedTarget || !tb(this.a(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && U(this, 2) && uc(this, !0);
};
g.jb = function(a) {
  a.relatedTarget && tb(this.a(), a.relatedTarget) || !this.dispatchEvent("leave") || (U(this, 4) && this.setActive(!1), U(this, 2) && uc(this, !1));
};
g.la = m;
g.ib = function(a) {
  this.isEnabled() && (U(this, 2) && uc(this, !0), !Va(a) || E && F && a.ctrlKey || (U(this, 4) && this.setActive(!0), this.f.Ja(this) && this.N().focus()));
  this.ya || !Va(a) || E && F && a.ctrlKey || a.preventDefault();
};
g.lb = function(a) {
  this.isEnabled() && (U(this, 2) && uc(this, !0), this.d & 4 && vc(this, a) && U(this, 4) && this.setActive(!1));
};
g.hb = function(a) {
  this.isEnabled() && vc(this, a);
};
function vc(a, b) {
  if (U(a, 16)) {
    var c = !a.qa();
    T(a, 16, c) && a.k(16, c);
  }
  U(a, 8) && T(a, 8, !0) && a.k(8, !0);
  U(a, 64) && (c = !(a.d & 64), T(a, 64, c) && a.k(64, c));
  c = new x("action", a);
  b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.Pa = b.Pa);
  return a.dispatchEvent(c);
}
g.Rb = function() {
  U(this, 32) && T(this, 32, !0) && this.k(32, !0);
};
g.gb = function() {
  U(this, 4) && this.setActive(!1);
  U(this, 32) && T(this, 32, !1) && this.k(32, !1);
};
g.Tb = function(a) {
  return this.J && this.isEnabled() && 13 == a.keyCode && vc(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
};
if (!q(S)) {
  throw Error("Invalid component class " + S);
}
if (!q(Yb)) {
  throw Error("Invalid renderer class " + Yb);
}
var wc = fa(S);
hc[wc] = Yb;
function xc() {
  return new S;
}
if (!q(xc)) {
  throw Error("Invalid decorator function " + xc);
}
;function V(a, b, c) {
  S.call(this, 0, b || fc.ja(), c);
  gc(this);
  this.wa(!0);
  this.O = "" != a;
}
t(V, S);
var yc = D || E || C && C && 11 <= Na;
g = V.prototype;
g.Q = !1;
g.na = !1;
g.O = !1;
g.o = 0;
g.Zb = 0;
g.rb = 0;
g.mb = !1;
g.ta = !1;
g.Sa = !1;
g.Ra = !1;
g.D = "";
g.Va = function(a) {
  this.D = a;
  this.a() && zc(this);
};
function Ac(a) {
  return a.C.top + a.C.bottom + a.Ba.top + a.Ba.bottom;
}
function Bc(a) {
  var b = a.rb, c = a.a();
  b && c && a.ta && (b -= Ac(a));
  return b;
}
g.H = function(a) {
  this.G(String(a));
};
g.Fa = function() {
  return this.a().value != this.D || Cc(this) || this.O ? this.a().value : "";
};
g.G = function(a) {
  V.b.G.call(this, a);
  this.O = "" != a;
  this.resize();
};
g.Ta = function(a) {
  V.b.Ta.call(this, a);
  this.a().disabled = !a;
};
g.resize = function() {
  this.a() && this.ka();
};
function Cc(a) {
  return "placeholder" in a.a();
}
function zc(a) {
  a.D && (Cc(a) ? a.a().placeholder = a.D : !a.a() || a.O || a.na || (Jb(a.a(), Dc), a.a().value = a.D));
}
g.M = function() {
  V.b.M.call(this);
  var a = this.a();
  yb(a, {overflowY:"hidden", overflowX:"auto", boxSizing:"border-box", MsBoxSizing:"border-box", WebkitBoxSizing:"border-box", MozBoxSizing:"border-box"});
  this.C = Db(a);
  this.Ba = Gb(a);
  Ub(this).c(a, "scroll", this.ka).c(a, "focus", this.ka).c(a, "keyup", this.ka).c(a, "mouseup", this.$b).c(a, "blur", this.Db);
  zc(this);
  this.resize();
};
function Ec(a) {
  if (!a.mb) {
    var b = a.a().cloneNode(!1);
    yb(b, {position:"absolute", height:"auto", top:"-9999px", margin:"0", padding:"1px", border:"1px solid #000", overflow:"hidden"});
    a.fb().L.body.appendChild(b);
    var c = b.scrollHeight;
    b.style.padding = "10px";
    var d = b.scrollHeight;
    a.Sa = d > c;
    b.style.borderWidth = "10px";
    a.Ra = b.scrollHeight > d;
    b.style.height = "100px";
    100 != b.offsetHeight && (a.ta = !0);
    sb(b);
    a.mb = !0;
  }
  b = a.a();
  isNaN(a.C.top) && (a.C = Db(b), a.Ba = Gb(b));
  var c = a.a().scrollHeight, e = a.a(), d = e.offsetHeight - e.clientHeight;
  if (!a.Sa) {
    var f = a.C, d = d - (f.top + f.bottom)
  }
  a.Ra || (e = Gb(e), d -= e.top + e.bottom);
  c += 0 < d ? d : 0;
  a.ta ? c -= Ac(a) : (a.Sa || (d = a.C, c += d.top + d.bottom), a.Ra || (a = Gb(b), c += a.top + a.bottom));
  return c;
}
function Fc(a, b) {
  a.o != b && (a.o = b, a.a().style.height = b + "px");
}
function Gc(a) {
  var b = a.a();
  b.style.height = "auto";
  var c = b.value.match(/\n/g) || [];
  b.rows = c.length + 1;
  a.o = 0;
}
var Dc = "textarea-placeholder-input";
V.prototype.Db = function() {
  Cc(this) || (this.na = !1, "" == this.a().value && (this.O = !1, zc(this)));
};
V.prototype.ka = function(a) {
  if (!this.Q) {
    var b = this.a();
    !Cc(this) && a && "focus" == a.type && (b.value == this.D && this.D && !this.na && (Lb(b, Dc), b.value = ""), this.na = !0, this.O = "" != b.value);
    var c = !1;
    this.Q = !0;
    a = this.o;
    if (b.scrollHeight) {
      var d = !1, e = !1, f = Ec(this), k = b.offsetHeight, l = Bc(this), r;
      r = this.Zb;
      var z = this.a();
      r && z && this.ta && (r -= Ac(this));
      l && f < l ? (Fc(this, l), d = !0) : r && f > r ? (Fc(this, r), b.style.overflowY = "", e = !0) : k != f ? Fc(this, f) : this.o || (this.o = f);
      d || e || !yc || (c = !0);
    } else {
      Gc(this);
    }
    this.Q = !1;
    c && (b = this.a(), this.Q || (this.Q = !0, (e = b.scrollHeight) ? (f = Ec(this), c = Bc(this), c && f <= c || (d = this.C, b.style.paddingBottom = d.bottom + 1 + "px", Ec(this) == f && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = Ec(this) - e, e >= c ? Fc(this, e) : Fc(this, c)), b.style.paddingBottom = d.bottom + "px")) : Gc(this), this.Q = !1));
    a != this.o && this.dispatchEvent("resize");
  }
};
V.prototype.$b = function() {
  var a = this.a(), b = a.offsetHeight;
  a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
  b != this.o && (this.o = this.rb = b);
};
function W(a, b) {
  null == a && (a = {});
  a.tagName || (a.tagName = a.tagName || "input");
  a.type || (a.type = a.type || "text");
  a.name || (a.name = a.name || null);
  a.value || (a.value = a.value || "");
  this.h(a, "input " + a.type);
  W.b.constructor.call(this, a, b);
  this.setAttribute("type", a.type);
  a.value && this.H(a.value);
  a.name && this.wb(a.name);
}
t(W, N);
s("spark.components.Field", W);
W.prototype.H = function(a) {
  return this.a().value = a;
};
W.prototype.setValue = W.prototype.H;
W.prototype.Fa = function() {
  return this.a().value;
};
W.prototype.getValue = W.prototype.Fa;
W.prototype.wb = function(a) {
  return this.setAttribute("name", a);
};
W.prototype.setName = W.prototype.wb;
W.prototype.getName = function() {
  return this.a().name;
};
W.prototype.getName = W.prototype.getName;
function X(a, b) {
  null == a && (a = {});
  a.tagName = a.tagName = "textarea";
  this.h(a, "textarea");
  X.b.constructor.call(this, a, b);
  this.Wa = new V(this.options.value);
  this.Wa.W(this.a());
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
  if (this.Wa) {
    return this.Wa.resize();
  }
};
X.prototype.resize = X.prototype.resize;
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
Y.prototype.gc = function() {
  return this.a().checked = !1;
};
Y.prototype.uncheck = Y.prototype.gc;
Y.prototype.qa = function() {
  return this.a().checked;
};
Y.prototype.isChecked = Y.prototype.qa;
function Z(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  a.placeholder || (a.placeholder = a.placeholder || null);
  Z.b.constructor.call(this, a, b);
  a.placeholder && this.Va(a.placeholder);
  this.B("focus", function(a) {
    return function() {
      return a.U("focus");
    };
  }(this));
  this.B("blur", function(a) {
    return function() {
      return a.Qa("focus");
    };
  }(this));
}
t(Z, W);
s("spark.components.Input", Z);
Z.prototype.Va = function(a) {
  return this.setAttribute("placeholder", a);
};
Z.prototype.setPlaceholder = Z.prototype.Va;
Z.prototype.Eb = function() {
  return this.removeAttribute("placeholder");
};
Z.prototype.clearPlaceholder = Z.prototype.Eb;
Z.prototype.focus = function() {
  this.a().focus();
  return this.U("focus");
};
Z.prototype.focus = Z.prototype.focus;
function Hc(a, b) {
  null == a && (a = {});
  a.tagName = a.tagName = "label";
  a.label || (a.label = a.label || "Input Label");
  a.I = a.label;
  this.h(a, "label");
  Hc.b.constructor.call(this, a, b);
}
t(Hc, N);
s("spark.components.Label", Hc);
function Ic(a, b) {
  var c, d;
  null == a && (a = {});
  this.h(a, "labeled-input");
  Ic.b.constructor.call(this, a, b);
  d = a.Yb || a.labelOptions;
  c = a.Xb || a.inputOptions;
  this.label = new Hc(d, b);
  this.input = Jc(c, b);
  this.i(this.label);
  this.i(this.input);
  this.label.B("click", function(a) {
    return function() {
      return a.input.focus();
    };
  }(this));
}
t(Ic, N);
s("spark.components.LabeledInput", Ic);
function Kc(a, b) {
  null == a && (a = {});
  a.type = a.type = "password";
  Kc.b.constructor.call(this, a, b);
}
t(Kc, Z);
s("spark.components.Password", Kc);
function Lc(a, b) {
  null == a && (a = {});
  a.type = a.type = "radio";
  Lc.b.constructor.call(this, a, b);
}
t(Lc, Y);
s("spark.components.Radio", Lc);
function Jc(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  return new Jc.fc[a.type](a, b);
}
s("spark.components.FieldFactory", Jc);
Jc.fc = {text:Z, input:Z, password:Kc, radio:Lc, checkbox:Y, label:Hc, button:mb};
function $(a, b) {
  var c, d;
  null == a && (a = {});
  this.h(a, "form");
  $.b.constructor.call(this, a, b);
  this.P = [];
  this.buttons = [];
  this.pa = {};
  d = a.P || a.inputs;
  c = a.buttons || a.buttons;
  this.ba = new N({q:"input-container"});
  this.Ca = new N({q:"buttons-container"});
  this.i(this.ba);
  this.i(this.Ca);
  d && d.forEach(function(a) {
    return function(b) {
      return a.ab(b);
    };
  }(this));
  c && c.forEach(function(a) {
    return function(b) {
      return a.$a(b);
    };
  }(this));
  this.setData(b);
}
t($, N);
s("spark.components.Form", $);
$.prototype.ab = function(a) {
  var b;
  b = a.name;
  a.label ? (a = new Ic({Yb:a, Xb:a}), this.ba.i(a), this.P.push(a = a.input)) : (a = Jc(a), this.ba.i(a), this.P.push(a));
  if (b) {
    return this.pa[b] = a;
  }
};
$.prototype.createInput = $.prototype.ab;
$.prototype.$a = function(a) {
  a = new mb(a);
  this.buttons.push(a);
  return this.Ca.i(a);
};
$.prototype.createButton = $.prototype.$a;
$.prototype.setData = function(a) {
  var b, c, d, e;
  if (this.pa) {
    e = [];
    for (c in a) {
      d = a[c], (b = this.pa[c]) ? e.push(b.H(d)) : e.push(void 0);
    }
    return e;
  }
};
$.prototype.setData = $.prototype.setData;
$.prototype.getData = function() {
  var a, b, c, d, e;
  a = {};
  e = this.P;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], a[b.getName()] = b.Fa();
  }
  return a;
};
$.prototype.getData = $.prototype.getData;
$.prototype.Nb = function() {
  return this.ba;
};
$.prototype.getInputsContainer = $.prototype.Nb;
$.prototype.Gb = function() {
  return this.Ca;
};
$.prototype.getButtonsContainer = $.prototype.Gb;
$.prototype.Mb = function() {
  return this.P;
};
$.prototype.getInputs = $.prototype.Mb;
$.prototype.Fb = function() {
  return this.buttons;
};
$.prototype.getButtons = $.prototype.Fb;
$.prototype.Lb = function(a) {
  return this.pa[a] || null;
};
$.prototype.getInputByName = $.prototype.Lb;
function Mc(a, b) {
  var c;
  null == a && (a = {});
  null == a.Ab && (a.Ab = null != (c = a.withImage) ? c : !0);
  a.nb || (a.nb = a.imageUrl || "http://lorempixel.com/460/144/city/4");
  a.title || (a.title = a.title || "Sign Up");
  a.Za || (a.Za = a.buttonTitle || "Sign Up");
  a.Ya || (a.Ya = a.buttonColor || "green");
  a.u || (a.u = a.callback || null);
  a.eb || (a.eb = a.forgotPasswordCallback || null);
  a.Xa || (a.Xa = a.alreadyRegisteredCallback || null);
  this.h(a, "sign-up-widget");
  Mc.b.constructor.call(this, a, b);
  a.Ab && (c = new N({tagName:"img", attributes:{src:this.options.nb}}), this.i(c), this.U("with-image"));
  c = new N({I:this.options.title, q:"title"});
  this.i(c);
  this.form = new $(Nc(this));
  this.i(this.form);
  Oc(this);
}
t(Mc, N);
s("spark.widgets.SignUp", Mc);
function Oc(a) {
  var b, c, d, e;
  c = a.options;
  d = c.eb;
  b = c.Xa;
  e = new N({tagName:"a", I:"Already Registered?", q:"already-registered", attributes:{href:"#"}, v:{click:function(a) {
    return function() {
      b && b.call(a);
      return a.ha("AlreadyRegisteredLinkClicked");
    };
  }(a)}});
  c = new N({tagName:"a", I:"Forgot password?", q:"forgot-password", attributes:{href:"#"}, v:{click:function(a) {
    return function() {
      d && d.call(a);
      return a.ha("ForgotPasswordLinkClicked");
    };
  }(a)}});
  a.i(e);
  a.form.ba.i(c);
}
function Nc(a) {
  var b;
  b = a.options;
  return{P:[{type:"text", placeholder:"Email or username", name:"username"}, {type:"password", placeholder:"Password", name:"password"}], buttons:[{title:b.Za, q:b.Ya, u:function(a) {
    return function() {
      b.u && b.u.call(a);
      return a.ha("SignUpFormPosted");
    };
  }(a)}]};
}
Mc.prototype.Kb = function() {
  return this.form;
};
Mc.prototype.getForm = Mc.prototype.Kb;
window.addEventListener("load", function() {
  return!0;
}, !1);
})();
