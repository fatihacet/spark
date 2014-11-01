(function(){var e, k = this;
function aa() {
}
function ba(a) {
  a.S = function() {
    return a.tc ? a.tc : a.tc = new a;
  };
}
function ca(a) {
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
function m(a) {
  return "array" == ca(a);
}
function da(a) {
  var b = ca(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function n(a) {
  return "string" == typeof a;
}
function p(a) {
  return "number" == typeof a;
}
function ea(a) {
  return "function" == ca(a);
}
function ga(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function ha(a) {
  return a[ia] || (a[ia] = ++ja);
}
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ja = 0;
function ka(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
function q(a, b) {
  var c = a.split("."), d = k;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var f;c.length && (f = c.shift());) {
    c.length || void 0 === b ? d = d[f] ? d[f] : d[f] = {} : d[f] = b;
  }
}
function r(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.b = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Rf = function(a, c, g) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;var la;
la = Math.floor(2147483648 * Math.random());
function ma() {
  return(la++).toString(36);
}
q("spark.utils.getUid", ma);
function na(a) {
  var b, c, d, f, g, h, l;
  c = [];
  d = 0;
  for (g = arguments.length;d < g;d++) {
    if (b = arguments[d], "string" === typeof b) {
      if (-1 < b.indexOf(" ")) {
        for (l = b.split(" "), f = 0, h = l.length;f < h;f++) {
          b = l[f], -1 === c.indexOf(b) && c.push(b);
        }
      } else {
        c.push(b);
      }
    }
  }
  return Array.prototype.join.call(c, " ");
}
q("spark.utils.concatString", na);
var oa;
function pa(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
}
var qa = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function ra(a) {
  if (!sa.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(ta, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ua, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(va, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(wa, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(xa, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(ya, "&#0;"));
  return a;
}
var ta = /&/g, ua = /</g, va = />/g, wa = /"/g, xa = /'/g, ya = /\x00/g, sa = /[\x00&<>"']/;
function za(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Aa(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function Ba(a) {
  var b = n(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, f) {
    return b + f.toUpperCase();
  });
}
;function Ca() {
  0 != Da && (Ea[ha(this)] = this);
  this.Ga = this.Ga;
  this.qb = this.qb;
}
var Da = 0, Ea = {};
Ca.prototype.Ga = !1;
Ca.prototype.ga = function() {
  if (!this.Ga && (this.Ga = !0, this.p(), 0 != Da)) {
    var a = ha(this);
    delete Ea[a];
  }
};
Ca.prototype.p = function() {
  if (this.qb) {
    for (;this.qb.length;) {
      this.qb.shift()();
    }
  }
};
var Fa = "closure_listenable_" + (1E6 * Math.random() | 0);
function Ga(a) {
  return!(!a || !a[Fa]);
}
var Ha = 0;
function Ia(a, b, c, d, f) {
  this.ma = a;
  this.rb = null;
  this.src = b;
  this.type = c;
  this.ab = !!d;
  this.kb = f;
  this.key = ++Ha;
  this.za = this.$a = !1;
}
function Ja(a) {
  a.za = !0;
  a.ma = null;
  a.rb = null;
  a.src = null;
  a.kb = null;
}
;var s = Array.prototype, Ka = s.indexOf ? function(a, b, c) {
  return s.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (n(a)) {
    return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, u = s.forEach ? function(a, b, c) {
  s.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, f = n(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a);
  }
}, La = s.filter ? function(a, b, c) {
  return s.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, f = [], g = 0, h = n(a) ? a.split("") : a, l = 0;l < d;l++) {
    if (l in h) {
      var t = h[l];
      b.call(c, t, l, a) && (f[g++] = t);
    }
  }
  return f;
}, Ma = s.map ? function(a, b, c) {
  return s.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, f = Array(d), g = n(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (f[h] = b.call(c, g[h], h, a));
  }
  return f;
}, Na = s.every ? function(a, b, c) {
  return s.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, f = n(a) ? a.split("") : a, g = 0;g < d;g++) {
    if (g in f && !b.call(c, f[g], g, a)) {
      return!1;
    }
  }
  return!0;
};
function Oa(a, b) {
  return 0 <= Ka(a, b);
}
function Pa(a, b) {
  var c = Ka(a, b), d;
  (d = 0 <= c) && s.splice.call(a, c, 1);
  return d;
}
function Qa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Ra(a, b, c, d) {
  s.splice.apply(a, Sa(arguments, 1));
}
function Sa(a, b, c) {
  return 2 >= arguments.length ? s.slice.call(a, b) : s.slice.call(a, b, c);
}
;function Ta(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Ua(a, b, c) {
  if (b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  a[b] = c;
}
function Va(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
}
var Wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Xa(a, b) {
  for (var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < Wa.length;g++) {
      c = Wa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Ya(a) {
  this.src = a;
  this.r = {};
  this.Va = 0;
}
Ya.prototype.add = function(a, b, c, d, f) {
  var g = a.toString();
  a = this.r[g];
  a || (a = this.r[g] = [], this.Va++);
  var h = Za(a, b, d, f);
  -1 < h ? (b = a[h], c || (b.$a = !1)) : (b = new Ia(b, this.src, g, !!d, f), b.$a = c, a.push(b));
  return b;
};
Ya.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.r)) {
    return!1;
  }
  var f = this.r[a];
  b = Za(f, b, c, d);
  return-1 < b ? (Ja(f[b]), s.splice.call(f, b, 1), 0 == f.length && (delete this.r[a], this.Va--), !0) : !1;
};
function $a(a, b) {
  var c = b.type;
  if (!(c in a.r)) {
    return!1;
  }
  var d = Pa(a.r[c], b);
  d && (Ja(b), 0 == a.r[c].length && (delete a.r[c], a.Va--));
  return d;
}
Ya.prototype.sb = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.r) {
    if (!a || c == a) {
      for (var d = this.r[c], f = 0;f < d.length;f++) {
        ++b, Ja(d[f]);
      }
      delete this.r[c];
      this.Va--;
    }
  }
  return b;
};
Ya.prototype.Ka = function(a, b, c, d) {
  a = this.r[a.toString()];
  var f = -1;
  a && (f = Za(a, b, c, d));
  return-1 < f ? a[f] : null;
};
function Za(a, b, c, d) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.za && g.ma == b && g.ab == !!c && g.kb == d) {
      return f;
    }
  }
  return-1;
}
;function v(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.qa = !1;
  this.Ac = !0;
}
v.prototype.p = function() {
};
v.prototype.ga = function() {
};
v.prototype.stopPropagation = function() {
  this.qa = !0;
};
v.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Ac = !1;
};
var ab;
a: {
  var bb = k.navigator;
  if (bb) {
    var cb = bb.userAgent;
    if (cb) {
      ab = cb;
      break a;
    }
  }
  ab = "";
}
function db(a) {
  return-1 != ab.indexOf(a);
}
;var w = db("Opera") || db("OPR"), x = db("Trident") || db("MSIE"), y = db("Gecko") && -1 == ab.toLowerCase().indexOf("webkit") && !(db("Trident") || db("MSIE")), z = -1 != ab.toLowerCase().indexOf("webkit"), eb = k.navigator || null, A = -1 != (eb && eb.platform || "").indexOf("Mac");
function fb() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var gb = function() {
  var a = "", b;
  if (w && k.opera) {
    return a = k.opera.version, ea(a) ? a() : a;
  }
  y ? b = /rv\:([^\);]+)(\)|;)/ : x ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(ab)) ? a[1] : "");
  return x && (b = fb(), b > parseFloat(a)) ? String(b) : a;
}(), hb = {};
function B(a) {
  var b;
  if (!(b = hb[a])) {
    b = 0;
    for (var c = qa(String(gb)).split("."), d = qa(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var h = c[g] || "", l = d[g] || "", t = RegExp("(\\d*)(\\D*)", "g"), E = RegExp("(\\d*)(\\D*)", "g");
      do {
        var Y = t.exec(h) || ["", "", ""], fa = E.exec(l) || ["", "", ""];
        if (0 == Y[0].length && 0 == fa[0].length) {
          break;
        }
        b = za(0 == Y[1].length ? 0 : parseInt(Y[1], 10), 0 == fa[1].length ? 0 : parseInt(fa[1], 10)) || za(0 == Y[2].length, 0 == fa[2].length) || za(Y[2], fa[2]);
      } while (0 == b);
    }
    b = hb[a] = 0 <= b;
  }
  return b;
}
var ib = k.document, jb = ib && x ? fb() || ("CSS1Compat" == ib.compatMode ? parseInt(gb, 10) : 5) : void 0;
var kb = !x || x && 9 <= jb, lb = !x || x && 9 <= jb, mb = x && !B("9");
!z || B("528");
y && B("1.9b") || x && B("8") || w && B("9.5") || z && B("528");
y && !B("8") || x && B("9");
function nb(a) {
  return z ? "webkit" + a : w ? "o" + a.toLowerCase() : a.toLowerCase();
}
var ob = {Pd:"click", zf:"rightclick", Yd:"dblclick", Ie:"mousedown", Oe:"mouseup", Ne:"mouseover", Me:"mouseout", Le:"mousemove", Je:"mouseenter", Ke:"mouseleave", Cf:"selectstart", Qf:"wheel", xe:"keypress", we:"keydown", ye:"keyup", Nd:"blur", pe:"focus", Zd:"deactivate", qe:x ? "focusin" : "DOMFocusIn", re:x ? "focusout" : "DOMFocusOut", Od:"change", Bf:"select", Ff:"submit", ve:"input", vf:"propertychange", me:"dragstart", he:"drag", je:"dragenter", le:"dragover", ke:"dragleave", ne:"drop", 
ie:"dragend", Lf:"touchstart", Kf:"touchmove", Jf:"touchend", If:"touchcancel", Md:"beforeunload", Ud:"consolemessage", Vd:"contextmenu", be:"DOMContentLoaded", ERROR:"error", ue:"help", ze:"load", Fe:"losecapture", hf:"orientationchange", wf:"readystatechange", xf:"resize", Af:"scroll", Nf:"unload", te:"hashchange", jf:"pagehide", kf:"pageshow", uf:"popstate", Wd:"copy", lf:"paste", Xd:"cut", Jd:"beforecopy", Kd:"beforecut", Ld:"beforepaste", gf:"online", ff:"offline", He:"message", Td:"connect", 
Id:nb("AnimationStart"), Gd:nb("AnimationEnd"), Hd:nb("AnimationIteration"), Mf:nb("TransitionEnd"), nf:"pointerdown", tf:"pointerup", mf:"pointercancel", qf:"pointermove", sf:"pointerover", rf:"pointerout", of:"pointerenter", pf:"pointerleave", se:"gotpointercapture", Ge:"lostpointercapture", Pe:"MSGestureChange", Qe:"MSGestureEnd", Re:"MSGestureHold", Se:"MSGestureStart", Te:"MSGestureTap", Ue:"MSGotPointerCapture", Ve:"MSInertiaStart", We:"MSLostPointerCapture", Xe:"MSPointerCancel", Ye:"MSPointerDown", 
Ze:"MSPointerEnter", $e:"MSPointerHover", af:"MSPointerLeave", bf:"MSPointerMove", cf:"MSPointerOut", df:"MSPointerOver", ef:"MSPointerUp", Gf:"text", Hf:"textInput", Rd:"compositionstart", Sd:"compositionupdate", Qd:"compositionend", oe:"exit", Ae:"loadabort", Be:"loadcommit", Ce:"loadredirect", De:"loadstart", Ee:"loadstop", yf:"responsive", Df:"sizechanged", Of:"unresponsive", Pf:"visibilitychange", Ef:"storage", ge:"DOMSubtreeModified", ce:"DOMNodeInserted", ee:"DOMNodeRemoved", fe:"DOMNodeRemovedFromDocument", 
de:"DOMNodeInsertedIntoDocument", $d:"DOMAttrModified", ae:"DOMCharacterDataModified"};
function pb(a) {
  pb[" "](a);
  return a;
}
pb[" "] = aa;
function C(a, b) {
  v.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.Vb = !1;
  this.Z = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (y) {
        var f;
        a: {
          try {
            pb(d.nodeName);
            f = !0;
            break a;
          } catch (g) {
          }
          f = !1;
        }
        f || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = z || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = z || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
    this.Vb = A ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.Z = a;
    a.defaultPrevented && this.preventDefault();
  }
}
r(C, v);
var qb = [1, 4, 2];
function rb(a) {
  return kb ? 0 == a.Z.button : "click" == a.type ? !0 : !!(a.Z.button & qb[0]);
}
C.prototype.stopPropagation = function() {
  C.b.stopPropagation.call(this);
  this.Z.stopPropagation ? this.Z.stopPropagation() : this.Z.cancelBubble = !0;
};
C.prototype.preventDefault = function() {
  C.b.preventDefault.call(this);
  var a = this.Z;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, mb) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
C.prototype.p = function() {
};
var sb = "closure_lm_" + (1E6 * Math.random() | 0), tb = {}, ub = 0;
function D(a, b, c, d, f) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      D(a, b[g], c, d, f);
    }
    return null;
  }
  c = vb(c);
  return Ga(a) ? a.f(b, c, d, f) : wb(a, b, c, !1, d, f);
}
function wb(a, b, c, d, f, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!f, l = xb(a);
  l || (a[sb] = l = new Ya(a));
  c = l.add(b, c, d, f, g);
  if (c.rb) {
    return c;
  }
  d = yb();
  c.rb = d;
  d.src = a;
  d.ma = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(zb(b.toString()), d);
  ub++;
  return c;
}
function yb() {
  var a = Ab, b = lb ? function(c) {
    return a.call(b.src, b.ma, c);
  } : function(c) {
    c = a.call(b.src, b.ma, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Bb(a, b, c, d, f) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      Bb(a, b[g], c, d, f);
    }
    return null;
  }
  c = vb(c);
  return Ga(a) ? a.wc(b, c, d, f) : wb(a, b, c, !0, d, f);
}
function Cb(a, b, c, d, f) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      Cb(a, b[g], c, d, f);
    }
  } else {
    c = vb(c), Ga(a) ? a.w(b, c, d, f) : a && (a = xb(a)) && (b = a.Ka(b, c, !!d, f)) && Db(b);
  }
}
function Db(a) {
  if (p(a) || !a || a.za) {
    return!1;
  }
  var b = a.src;
  if (Ga(b)) {
    return $a(b.R, a);
  }
  var c = a.type, d = a.rb;
  b.removeEventListener ? b.removeEventListener(c, d, a.ab) : b.detachEvent && b.detachEvent(zb(c), d);
  ub--;
  (c = xb(b)) ? ($a(c, a), 0 == c.Va && (c.src = null, b[sb] = null)) : Ja(a);
  return!0;
}
function zb(a) {
  return a in tb ? tb[a] : tb[a] = "on" + a;
}
function Eb(a, b, c, d) {
  var f = 1;
  if (a = xb(a)) {
    if (b = a.r[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.ab == c && !g.za && (f &= !1 !== Fb(g, d));
      }
    }
  }
  return Boolean(f);
}
function Fb(a, b) {
  var c = a.ma, d = a.kb || a.src;
  a.$a && Db(a);
  return c.call(d, b);
}
function Ab(a, b) {
  if (a.za) {
    return!0;
  }
  if (!lb) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = k, f;f = c.shift();) {
          if (null != d[f]) {
            d = d[f];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    f = c;
    c = new C(f, this);
    d = !0;
    if (!(0 > f.keyCode || void 0 != f.returnValue)) {
      a: {
        var g = !1;
        if (0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a;
          } catch (h) {
            g = !0;
          }
        }
        if (g || void 0 == f.returnValue) {
          f.returnValue = !0;
        }
      }
      f = [];
      for (g = c.currentTarget;g;g = g.parentNode) {
        f.push(g);
      }
      for (var g = a.type, l = f.length - 1;!c.qa && 0 <= l;l--) {
        c.currentTarget = f[l], d &= Eb(f[l], g, !0, c);
      }
      for (l = 0;!c.qa && l < f.length;l++) {
        c.currentTarget = f[l], d &= Eb(f[l], g, !1, c);
      }
    }
    return d;
  }
  return Fb(a, new C(b, this));
}
function xb(a) {
  a = a[sb];
  return a instanceof Ya ? a : null;
}
var Gb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function vb(a) {
  if (ea(a)) {
    return a;
  }
  a[Gb] || (a[Gb] = function(b) {
    return a.handleEvent(b);
  });
  return a[Gb];
}
;function F() {
  Ca.call(this);
  this.R = new Ya(this);
  this.Pc = this;
  this.Ub = null;
}
r(F, Ca);
F.prototype[Fa] = !0;
e = F.prototype;
e.gb = function() {
  return this.Ub;
};
e.$b = function(a) {
  this.Ub = a;
};
e.addEventListener = function(a, b, c, d) {
  D(this, a, b, c, d);
};
e.removeEventListener = function(a, b, c, d) {
  Cb(this, a, b, c, d);
};
e.dispatchEvent = function(a) {
  var b, c = this.gb();
  if (c) {
    for (b = [];c;c = c.gb()) {
      b.push(c);
    }
  }
  var c = this.Pc, d = a.type || a;
  if (n(a)) {
    a = new v(a, c);
  } else {
    if (a instanceof v) {
      a.target = a.target || c;
    } else {
      var f = a;
      a = new v(d, c);
      Xa(a, f);
    }
  }
  var f = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.qa && 0 <= h;h--) {
      g = a.currentTarget = b[h], f = Hb(g, d, !0, a) && f;
    }
  }
  a.qa || (g = a.currentTarget = c, f = Hb(g, d, !0, a) && f, a.qa || (f = Hb(g, d, !1, a) && f));
  if (b) {
    for (h = 0;!a.qa && h < b.length;h++) {
      g = a.currentTarget = b[h], f = Hb(g, d, !1, a) && f;
    }
  }
  return f;
};
e.p = function() {
  F.b.p.call(this);
  this.R && this.R.sb(void 0);
  this.Ub = null;
};
e.f = function(a, b, c, d) {
  return this.R.add(String(a), b, !1, c, d);
};
e.wc = function(a, b, c, d) {
  return this.R.add(String(a), b, !0, c, d);
};
e.w = function(a, b, c, d) {
  return this.R.remove(String(a), b, c, d);
};
function Hb(a, b, c, d) {
  b = a.R.r[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var f = !0, g = 0;g < b.length;++g) {
    var h = b[g];
    if (h && !h.za && h.ab == c) {
      var l = h.ma, t = h.kb || h.src;
      h.$a && $a(a.R, h);
      f = !1 !== l.call(t, d) && f;
    }
  }
  return f && 0 != d.Ac;
}
e.Ka = function(a, b, c, d) {
  return this.R.Ka(String(a), b, c, d);
};
function G(a, b) {
  null == a && (a = {});
  G.b.constructor.apply(this, arguments);
  a && this.Gc(a);
  b && this.setData(b);
  this.Lc = ma();
}
r(G, F);
q("spark.core.Object", G);
G.prototype.Gc = function(a) {
  return this.options = a;
};
G.prototype.setOptions = G.prototype.Gc;
G.prototype.jd = function() {
  return this.options;
};
G.prototype.getOptions = G.prototype.jd;
G.prototype.hd = function(a) {
  return this.options[a] || null;
};
G.prototype.getOption = G.prototype.hd;
G.prototype.setData = function(a) {
  return this.data = a;
};
G.prototype.setData = G.prototype.setData;
G.prototype.getData = function() {
  return this.data;
};
G.prototype.getData = G.prototype.getData;
G.prototype.nd = function() {
  return this.Lc;
};
G.prototype.getUid = G.prototype.nd;
G.prototype.da = function(a, b) {
  return D(this, a, b);
};
G.prototype.on = G.prototype.da;
G.prototype.Tb = function(a, b) {
  return Bb(this, a, b);
};
G.prototype.once = G.prototype.Tb;
G.prototype.Y = function(a, b) {
  return this.dispatchEvent({type:a, data:b});
};
G.prototype.emit = G.prototype.Y;
G.prototype.Sb = function(a, b) {
  return this.w(a, b);
};
G.prototype.off = G.prototype.Sb;
function H(a, b) {
  var c;
  null == a && (a = {});
  a.tagName || (a.tagName = a.tagName || "div");
  a.Db || (a.Db = a.domId || null);
  a.X || (a.X = a.template || null);
  a.attributes || (a.attributes = a.attributes || {});
  a.ja || (a.ja = a.eventHandlers || {});
  null == a.disabled && (a.disabled = null != (c = a.disabled) ? c : !1);
  this.d(a);
  H.b.constructor.call(this, a, b);
  this.children = [];
  var d, f, g, h, l;
  c = this.options;
  h = c.tagName;
  f = c.Db;
  d = c.B;
  l = c.X;
  c = c.attributes;
  this.element = document.createElement(h);
  this.Dc(d);
  f && this.Ec(f);
  l && this.bc(l);
  f = [];
  for (g in c) {
    d = c[g], f.push(this.setAttribute(g, d));
  }
  Ib(this);
  a.disabled && this.disable();
}
r(H, G);
q("spark.core.View", H);
H.prototype.Ec = function(a) {
  return this.a().id = a;
};
H.prototype.setDomId = H.prototype.Ec;
H.prototype.Zc = function() {
  return this.a().id || null;
};
H.prototype.getDomId = H.prototype.Zc;
H.prototype.Dc = function(a) {
  return this.a().className = a;
};
H.prototype.setClass = H.prototype.Dc;
H.prototype.Xc = function() {
  return this.a().className;
};
H.prototype.getClass = H.prototype.Xc;
H.prototype.Yc = function() {
  return this.a().classList;
};
H.prototype.getClassList = H.prototype.Yc;
H.prototype.sa = function(a) {
  return this.a().classList.add(a);
};
H.prototype.addClass = H.prototype.sa;
H.prototype.tb = function(a) {
  return this.a().classList.remove(a);
};
H.prototype.removeClass = H.prototype.tb;
H.prototype.wd = function(a) {
  return this.a().classList.contains(a);
};
H.prototype.hasClass = H.prototype.wd;
H.prototype.a = function() {
  return this.element;
};
H.prototype.getElement = H.prototype.a;
H.prototype.bc = function(a) {
  return this.a().innerHTML = a;
};
H.prototype.setTemplate = H.prototype.bc;
H.prototype.Sc = function() {
  return document.body.appendChild(this.a());
};
H.prototype.appendToDocumentBody = H.prototype.Sc;
H.prototype.Dd = function() {
  var a, b;
  a = this.a();
  b = a.parentNode;
  if (!b) {
    return!1;
  }
  b.removeChild(a);
  return!0;
};
H.prototype.removeFromDocument = H.prototype.Dd;
H.prototype.o = function(a) {
  var b;
  a instanceof H ? -1 < this.children.indexOf(a) && (b = "This view already appended to target view.") : b = "View should be an instance of spark.core.View";
  if (b) {
    throw Error(b);
  }
  this.children.push(a);
  return this.a().appendChild(a.a());
};
H.prototype.appendView = H.prototype.o;
H.prototype.setAttribute = function(a, b) {
  return this.a().setAttribute(a, b);
};
H.prototype.setAttribute = H.prototype.setAttribute;
H.prototype.getAttribute = function(a) {
  return this.a().getAttribute(a);
};
H.prototype.getAttribute = H.prototype.getAttribute;
H.prototype.removeAttribute = function(a) {
  return this.a().removeAttribute(a);
};
H.prototype.removeAttribute = H.prototype.removeAttribute;
H.prototype.disable = function() {
  this.sa("disabled");
  this.setAttribute("disabled", "disabled");
  return this.disabled = !0;
};
H.prototype.disable = H.prototype.disable;
H.prototype.enable = function() {
  this.tb("disabled");
  this.removeAttribute("disabled");
  return this.disabled = !1;
};
H.prototype.enable = H.prototype.enable;
H.prototype.toggle = function() {
  return this.uc() ? this.enable() : this.disable();
};
H.prototype.toggle = H.prototype.toggle;
H.prototype.uc = function() {
  return this.disabled || !1;
};
H.prototype.isDisabled = H.prototype.uc;
H.prototype.da = function(a, b) {
  Jb[a] && D(this.a(), a, b);
  return D(this, a, b);
};
H.prototype.on = H.prototype.da;
H.prototype.Tb = function(a, b) {
  Jb[a] && Bb(this.a(), a, b);
  return Bb(this, a, b);
};
H.prototype.once = H.prototype.Tb;
H.prototype.Sb = function(a, b) {
  Cb(this.a(), a, b);
  return this.w(a, b);
};
H.prototype.off = H.prototype.Sb;
function Ib(a) {
  var b;
  b = Jb;
  Ta(a.options.ja, function(a) {
    return function(d, f) {
      if (b[f] && "function" === typeof d) {
        return a.da(ob[b[f]], d);
      }
    };
  }(a));
}
H.prototype.d = function(a, b) {
  var c;
  c = na("view", a.B || a.cssClass, b);
  return a.B = a.cssClass = c;
};
var Jb = Va(ob);
function Kb(a, b) {
  var c, d;
  null == a && (a = {});
  a.tagName = a.tagName = "button";
  a.title || (a.title = a.title || null);
  a.fa || (a.fa = a.callback || null);
  a.Mb || (a.Mb = a.iconClass || null);
  a.ja || (a.ja = a.eventHandlers || {});
  this.d(a, "button");
  c = a.fa;
  "function" === typeof c && (a.ja.click = c);
  d = c = "";
  a.Mb && (c = "<span class='icon " + a.Mb + "'></span>");
  a.title && (d = "<span>" + a.title + "</span>");
  a.X = "" + c + d;
  Kb.b.constructor.call(this, a, b);
}
r(Kb, H);
q("spark.components.Button", Kb);
function I(a, b) {
  this.x = void 0 !== a ? a : 0;
  this.y = void 0 !== b ? b : 0;
}
e = I.prototype;
e.clone = function() {
  return new I(this.x, this.y);
};
e.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
};
e.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
e.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
e.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
e.translate = function(a, b) {
  a instanceof I ? (this.x += a.x, this.y += a.y) : (this.x += a, p(b) && (this.y += b));
  return this;
};
e.scale = function(a, b) {
  var c = p(b) ? b : a;
  this.x *= a;
  this.y *= c;
  return this;
};
function Lb(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
}
e = Lb.prototype;
e.clone = function() {
  return new Lb(this.top, this.right, this.bottom, this.left);
};
e.toString = function() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
e.contains = function(a) {
  return this && a ? a instanceof Lb ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
};
e.expand = function(a, b, c, d) {
  ga(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this;
};
e.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
e.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
e.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
e.translate = function(a, b) {
  a instanceof I ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, p(b) && (this.top += b, this.bottom += b));
  return this;
};
e.scale = function(a, b) {
  var c = p(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this;
};
var Mb = !x || x && 9 <= jb;
!y && !x || x && x && 9 <= jb || y && B("1.9.1");
var Nb = x && !B("9");
function Ob(a) {
  return a ? new Pb(J(a)) : oa || (oa = new Pb);
}
function Qb(a, b) {
  Ta(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Rb ? a.setAttribute(Rb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Rb = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Sb(a, b, c, d) {
  function f(c) {
    c && b.appendChild(n(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var g = c[d];
    if (!da(g) || ga(g) && 0 < g.nodeType) {
      f(g);
    } else {
      var h;
      a: {
        if (g && "number" == typeof g.length) {
          if (ga(g)) {
            h = "function" == typeof g.item || "string" == typeof g.item;
            break a;
          }
          if (ea(g)) {
            h = "function" == typeof g.item;
            break a;
          }
        }
        h = !1;
      }
      u(h ? Qa(g) : g, f);
    }
  }
}
function Tb(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
}
function Ub(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function Vb(a, b) {
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
function J(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Wb(a, b) {
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
        Tb(a), a.appendChild(J(a).createTextNode(String(b)));
      }
    }
  }
}
var Xb = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Yb = {IMG:" ", BR:"\n"};
function Zb(a) {
  return $b(a) && ac(a);
}
function bc(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
}
function $b(a) {
  a = a.getAttributeNode("tabindex");
  return null != a && a.specified;
}
function ac(a) {
  a = a.tabIndex;
  return p(a) && 0 <= a && 32768 > a;
}
function cc(a) {
  var b = [];
  dc(a, b, !1);
  return b.join("");
}
function dc(a, b, c) {
  if (!(a.nodeName in Xb)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Yb) {
        b.push(Yb[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          dc(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Pb(a) {
  this.I = a || k.document || document;
}
e = Pb.prototype;
e.K = Ob;
e.a = function(a) {
  return n(a) ? this.I.getElementById(a) : a;
};
e.j = function(a, b, c) {
  var d = this.I, f = arguments, g = f[0], h = f[1];
  if (!Mb && h && (h.name || h.type)) {
    g = ["<", g];
    h.name && g.push(' name="', ra(h.name), '"');
    if (h.type) {
      g.push(' type="', ra(h.type), '"');
      var l = {};
      Xa(l, h);
      delete l.type;
      h = l;
    }
    g.push(">");
    g = g.join("");
  }
  g = d.createElement(g);
  h && (n(h) ? g.className = h : m(h) ? g.className = h.join(" ") : Qb(g, h));
  2 < f.length && Sb(d, g, f, 2);
  return g;
};
e.createElement = function(a) {
  return this.I.createElement(a);
};
e.createTextNode = function(a) {
  return this.I.createTextNode(String(a));
};
e.appendChild = function(a, b) {
  a.appendChild(b);
};
e.append = function(a, b) {
  Sb(J(a), a, arguments, 1);
};
e.canHaveChildren = function(a) {
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
e.removeNode = Ub;
e.contains = Vb;
e.V = function(a) {
  var b;
  (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!$b(a) || ac(a)) : Zb(a)) && x ? (a = ea(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height:a.offsetHeight, width:a.offsetWidth}, a = null != a && 0 < a.height && 0 < a.width) : a = b;
  return a;
};
function ec(a, b) {
  if (n(b)) {
    var c = fc(a, b);
    c && (a.style[c] = void 0);
  } else {
    for (c in b) {
      var d = a, f = b[c], g = fc(d, c);
      g && (d.style[g] = f);
    }
  }
}
function fc(a, b) {
  var c = Aa(b);
  if (void 0 === a.style[c]) {
    var d = (z ? "Webkit" : y ? "Moz" : x ? "ms" : w ? "O" : null) + Ba(c);
    if (void 0 !== a.style[d]) {
      return d;
    }
  }
  return c;
}
function K(a, b) {
  var c = J(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
}
function gc(a, b) {
  return K(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
}
function hc(a) {
  if (x && !(x && 8 <= jb)) {
    return a.offsetParent;
  }
  var b = J(a), c = gc(a, "position"), d = "fixed" == c || "absolute" == c;
  for (a = a.parentNode;a && a != b;a = a.parentNode) {
    if (c = gc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a;
    }
  }
  return null;
}
function ic(a) {
  var b, c = J(a), d = gc(a, "position"), f = y && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), g = new I(0, 0), h;
  b = c ? J(c) : document;
  (h = !x || x && 9 <= jb) || (h = "CSS1Compat" == Ob(b).I.compatMode);
  h = h ? b.documentElement : b.body;
  if (a == h) {
    return g;
  }
  if (a.getBoundingClientRect) {
    a: {
      var l;
      try {
        l = a.getBoundingClientRect();
      } catch (t) {
        b = {left:0, top:0, right:0, bottom:0};
        break a;
      }
      x && a.ownerDocument.body && (b = a.ownerDocument, l.left -= b.documentElement.clientLeft + b.body.clientLeft, l.top -= b.documentElement.clientTop + b.body.clientTop);
      b = l;
    }
    a = Ob(c).I;
    c = z || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
    a = a.parentWindow || a.defaultView;
    c = x && B("10") && a.pageYOffset != c.scrollTop ? new I(c.scrollLeft, c.scrollTop) : new I(a.pageXOffset || c.scrollLeft, a.pageYOffset || c.scrollTop);
    g.x = b.left + c.x;
    g.y = b.top + c.y;
  } else {
    if (c.getBoxObjectFor && !f) {
      b = c.getBoxObjectFor(a), c = c.getBoxObjectFor(h), g.x = b.screenX - c.screenX, g.y = b.screenY - c.screenY;
    } else {
      b = a;
      do {
        g.x += b.offsetLeft;
        g.y += b.offsetTop;
        b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
        if (z && "fixed" == gc(b, "position")) {
          g.x += c.body.scrollLeft;
          g.y += c.body.scrollTop;
          break;
        }
        b = b.offsetParent;
      } while (b && b != a);
      if (w || z && "absolute" == d) {
        g.y -= c.body.offsetTop;
      }
      for (b = a;(b = hc(b)) && b != c.body && b != h;) {
        g.x -= b.scrollLeft, w && "TR" == b.tagName || (g.y -= b.scrollTop);
      }
    }
  }
  return g;
}
var jc = y ? "MozUserSelect" : z ? "WebkitUserSelect" : null;
function kc(a, b, c) {
  c = c ? null : a.getElementsByTagName("*");
  if (jc) {
    if (b = b ? "none" : "", a.style[jc] = b, c) {
      a = 0;
      for (var d;d = c[a];a++) {
        d.style[jc] = b;
      }
    }
  } else {
    if (x || w) {
      if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for (a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b);
        }
      }
    }
  }
}
function lc(a, b) {
  if (/^\d+px?$/.test(b)) {
    return parseInt(b, 10);
  }
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var f = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return f;
}
function mc(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? lc(a, c) : 0;
}
function nc(a) {
  if (x) {
    var b = mc(a, "paddingLeft"), c = mc(a, "paddingRight"), d = mc(a, "paddingTop");
    a = mc(a, "paddingBottom");
    return new Lb(d, c, a, b);
  }
  b = K(a, "paddingLeft");
  c = K(a, "paddingRight");
  d = K(a, "paddingTop");
  a = K(a, "paddingBottom");
  return new Lb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
var oc = {thin:2, medium:4, thick:6};
function pc(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0;
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return c in oc ? oc[c] : lc(a, c);
}
function qc(a) {
  if (x && !(x && 9 <= jb)) {
    var b = pc(a, "borderLeft"), c = pc(a, "borderRight"), d = pc(a, "borderTop");
    a = pc(a, "borderBottom");
    return new Lb(d, c, a, b);
  }
  b = K(a, "borderLeftWidth");
  c = K(a, "borderRightWidth");
  d = K(a, "borderTopWidth");
  a = K(a, "borderBottomWidth");
  return new Lb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}
;function rc(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return n(a) && a.match(/\S+/g) || [];
}
function sc(a, b) {
  return a.classList ? a.classList.contains(b) : Oa(rc(a), b);
}
function tc(a, b) {
  a.classList ? a.classList.add(b) : sc(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function uc(a, b) {
  if (a.classList) {
    u(b, function(b) {
      tc(a, b);
    });
  } else {
    var c = {};
    u(rc(a), function(a) {
      c[a] = !0;
    });
    u(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var d in c) {
      a.className += 0 < a.className.length ? " " + d : d;
    }
  }
}
function vc(a, b) {
  a.classList ? a.classList.remove(b) : sc(a, b) && (a.className = La(rc(a), function(a) {
    return a != b;
  }).join(" "));
}
function wc(a, b) {
  a.classList ? u(b, function(b) {
    vc(a, b);
  }) : a.className = La(rc(a), function(a) {
    return!Oa(b, a);
  }).join(" ");
}
;function xc(a) {
  Ca.call(this);
  this.Lb = a;
  this.Sa = {};
}
r(xc, Ca);
var yc = [];
e = xc.prototype;
e.f = function(a, b, c, d) {
  m(b) || (b && (yc[0] = b.toString()), b = yc);
  for (var f = 0;f < b.length;f++) {
    var g = D(a, b[f], c || this.handleEvent, d || !1, this.Lb || this);
    if (!g) {
      break;
    }
    this.Sa[g.key] = g;
  }
  return this;
};
e.wc = function(a, b, c, d) {
  return zc(this, a, b, c, d);
};
function zc(a, b, c, d, f, g) {
  if (m(c)) {
    for (var h = 0;h < c.length;h++) {
      zc(a, b, c[h], d, f, g);
    }
  } else {
    b = Bb(b, c, d || a.handleEvent, f, g || a.Lb || a);
    if (!b) {
      return a;
    }
    a.Sa[b.key] = b;
  }
  return a;
}
e.w = function(a, b, c, d, f) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      this.w(a, b[g], c, d, f);
    }
  } else {
    c = c || this.handleEvent, f = f || this.Lb || this, c = vb(c), d = !!d, b = Ga(a) ? a.Ka(b, c, d, f) : a ? (a = xb(a)) ? a.Ka(b, c, d, f) : null : null, b && (Db(b), delete this.Sa[b.key]);
  }
  return this;
};
e.sb = function() {
  Ta(this.Sa, Db);
  this.Sa = {};
};
e.p = function() {
  xc.b.p.call(this);
  this.sb();
};
e.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Ac() {
}
ba(Ac);
Ac.prototype.Ad = 0;
function L(a) {
  F.call(this);
  this.ha = a || Ob();
  this.ub = Bc;
  this.va = null;
  this.h = !1;
  this.e = null;
  this.$ = void 0;
  this.F = this.t = this.u = this.ca = null;
  this.Mc = !1;
}
r(L, F);
L.prototype.xd = Ac.S();
var Bc = null;
function Cc(a, b) {
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
function Dc(a) {
  return a.va || (a.va = ":" + (a.xd.Ad++).toString(36));
}
function Ec(a, b) {
  if (a.u && a.u.F) {
    var c = a.u.F, d = a.va;
    d in c && delete c[d];
    Ua(a.u.F, b, a);
  }
  a.va = b;
}
e = L.prototype;
e.a = function() {
  return this.e;
};
function Fc(a) {
  a.$ || (a.$ = new xc(a));
  return a.$;
}
function Gc(a, b) {
  if (a == b) {
    throw Error("Unable to set parent component");
  }
  if (b && a.u && a.va && Hc(a.u, a.va) && a.u != b) {
    throw Error("Unable to set parent component");
  }
  a.u = b;
  L.b.$b.call(a, b);
}
e.getParent = function() {
  return this.u;
};
e.$b = function(a) {
  if (this.u && this.u != a) {
    throw Error("Method not supported");
  }
  L.b.$b.call(this, a);
};
e.K = function() {
  return this.ha;
};
e.j = function() {
  this.e = this.ha.createElement("div");
};
function Ic(a, b, c) {
  if (a.h) {
    throw Error("Component already rendered");
  }
  a.e || a.j();
  b ? b.insertBefore(a.e, c || null) : a.ha.I.body.appendChild(a.e);
  a.u && !a.u.h || a.C();
}
e.H = function(a) {
  if (this.h) {
    throw Error("Component already rendered");
  }
  if (a && this.N(a)) {
    this.Mc = !0;
    var b = J(a);
    this.ha && this.ha.I == b || (this.ha = Ob(a));
    this.Fa(a);
    this.C();
  } else {
    throw Error("Invalid element to decorate");
  }
};
e.N = function() {
  return!0;
};
e.Fa = function(a) {
  this.e = a;
};
e.C = function() {
  this.h = !0;
  Jc(this, function(a) {
    !a.h && a.a() && a.C();
  });
};
e.ka = function() {
  Jc(this, function(a) {
    a.h && a.ka();
  });
  this.$ && this.$.sb();
  this.h = !1;
};
e.p = function() {
  this.h && this.ka();
  this.$ && (this.$.ga(), delete this.$);
  Jc(this, function(a) {
    a.ga();
  });
  !this.Mc && this.e && Ub(this.e);
  this.u = this.ca = this.e = this.F = this.t = null;
  L.b.p.call(this);
};
e.Wa = function(a, b) {
  this.Xa(a, Kc(this), b);
};
e.Xa = function(a, b, c) {
  if (a.h && (c || !this.h)) {
    throw Error("Component already rendered");
  }
  if (0 > b || b > Kc(this)) {
    throw Error("Child component index out of bounds");
  }
  this.F && this.t || (this.F = {}, this.t = []);
  if (a.getParent() == this) {
    var d = Dc(a);
    this.F[d] = a;
    Pa(this.t, a);
  } else {
    Ua(this.F, Dc(a), a);
  }
  Gc(a, this);
  Ra(this.t, b, 0, a);
  a.h && this.h && a.getParent() == this ? (c = this.q(), c.insertBefore(a.a(), c.childNodes[b] || null)) : c ? (this.e || this.j(), b = M(this, b + 1), Ic(a, this.q(), b ? b.e : null)) : this.h && !a.h && a.e && a.e.parentNode && 1 == a.e.parentNode.nodeType && a.C();
};
e.q = function() {
  return this.e;
};
function Lc(a) {
  null == a.ub && (a.ub = "rtl" == gc(a.h ? a.e : a.ha.I.body, "direction"));
  return a.ub;
}
e.Ca = function(a) {
  if (this.h) {
    throw Error("Component already rendered");
  }
  this.ub = a;
};
function Kc(a) {
  return a.t ? a.t.length : 0;
}
function Hc(a, b) {
  var c;
  a.F && b ? (c = a.F, c = (b in c ? c[b] : void 0) || null) : c = null;
  return c;
}
function M(a, b) {
  return a.t ? a.t[b] || null : null;
}
function Jc(a, b, c) {
  a.t && u(a.t, b, c);
}
function Mc(a, b) {
  return a.t && b ? Ka(a.t, b) : -1;
}
e.removeChild = function(a, b) {
  if (a) {
    var c = n(a) ? a : Dc(a);
    a = Hc(this, c);
    if (c && a) {
      var d = this.F;
      c in d && delete d[c];
      Pa(this.t, a);
      b && (a.ka(), a.e && Ub(a.e));
      Gc(a, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
var Nc;
function Oc(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role");
}
function Pc(a, b, c) {
  m(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (Nc || (Nc = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = Nc, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
}
;function Qc() {
}
var Rc;
ba(Qc);
var Sc = {button:"pressed", checkbox:"checked", menuitem:"selected", menuitemcheckbox:"checked", menuitemradio:"checked", radio:"checked", tab:"selected", treeitem:"selected"};
e = Qc.prototype;
e.Ia = function() {
};
e.j = function(a) {
  var b = a.K().j("div", this.Ja(a).join(" "), a.G);
  Tc(this, a, b);
  return b;
};
e.q = function(a) {
  return a;
};
e.Ha = function(a, b, c) {
  if (a = a.a ? a.a() : a) {
    var d = [b];
    x && !B("7") && (d = Uc(rc(a), b), d.push(b));
    (c ? uc : wc)(a, d);
  }
};
e.N = function() {
  return!0;
};
e.H = function(a, b) {
  b.id && Ec(a, b.id);
  var c = this.q(b);
  c && c.firstChild ? Vc(a, c.firstChild.nextSibling ? Qa(c.childNodes) : c.firstChild) : a.G = null;
  var d = 0, f = this.d(), g = this.d(), h = !1, l = !1, t = !1, E = Qa(rc(b));
  u(E, function(a) {
    h || a != f ? l || a != g ? d |= this.hb(a) : l = !0 : (h = !0, g == f && (l = !0));
    1 == this.hb(a) && Zb(c) && bc(c, !1);
  }, this);
  a.m = d;
  h || (E.push(f), g == f && (l = !0));
  l || E.push(g);
  var Y = a.J;
  Y && E.push.apply(E, Y);
  if (x && !B("7")) {
    var fa = Uc(E);
    0 < fa.length && (E.push.apply(E, fa), t = !0);
  }
  if (!h || !l || Y || t) {
    b.className = E.join(" ");
  }
  Tc(this, a, b);
  return b;
};
e.Qa = function(a) {
  Lc(a) && this.Ca(a.a(), !0);
  a.isEnabled() && this.ra(a, a.i);
};
function Wc(a, b, c) {
  if (a = c || a.Ia()) {
    c = b.getAttribute("role") || null, a != c && Oc(b, a);
  }
}
function Tc(a, b, c) {
  b.i || Pc(c, "hidden", !b.i);
  b.isEnabled() || a.Da(c, 1, !b.isEnabled());
  b.k & 8 && a.Da(c, 8, !!(b.m & 8));
  b.k & 16 && a.Da(c, 16, b.aa());
  b.k & 64 && a.Da(c, 64, !!(b.m & 64));
}
e.Ta = function(a, b) {
  kc(a, !b, !x && !w);
};
e.Ca = function(a, b) {
  this.Ha(a, this.d() + "-rtl", b);
};
e.V = function(a) {
  var b;
  return a.k & 32 && (b = a.n()) ? Zb(b) : !1;
};
e.ra = function(a, b) {
  var c;
  if (a.k & 32 && (c = a.n())) {
    if (!b && a.m & 32) {
      try {
        c.blur();
      } catch (d) {
      }
      a.m & 32 && a.Ma(null);
    }
    Zb(c) != b && bc(c, b);
  }
};
e.P = function(a, b) {
  a.style.display = b ? "" : "none";
  a && Pc(a, "hidden", !b);
};
e.v = function(a, b, c) {
  var d = a.a();
  if (d) {
    var f = this.cb(b);
    f && this.Ha(a, f, c);
    this.Da(d, b, c);
  }
};
e.Da = function(a, b, c) {
  Rc || (Rc = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  b = Rc[b];
  var d = a.getAttribute("role") || null;
  d && (d = Sc[d] || b, b = "checked" == b || "selected" == b ? d : b);
  b && Pc(a, b, c);
};
e.O = function(a, b) {
  var c = this.q(a);
  if (c && (Tb(c), b)) {
    if (n(b)) {
      Wb(c, b);
    } else {
      var d = function(a) {
        if (a) {
          var b = J(c);
          c.appendChild(n(a) ? b.createTextNode(a) : a);
        }
      };
      m(b) ? u(b, d) : !da(b) || "nodeType" in b ? d(b) : u(Qa(b), d);
    }
  }
};
e.n = function(a) {
  return a.a();
};
e.d = function() {
  return "goog-control";
};
e.Ja = function(a) {
  var b = this.d(), c = [b], d = this.d();
  d != b && c.push(d);
  b = a.m;
  for (d = [];b;) {
    var f = b & -b;
    d.push(this.cb(f));
    b &= ~f;
  }
  c.push.apply(c, d);
  (a = a.J) && c.push.apply(c, a);
  x && !B("7") && c.push.apply(c, Uc(c));
  return c;
};
function Uc(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  u([], function(d) {
    !Na(d, ka(Oa, a)) || b && !Oa(d, b) || c.push(d.join("_"));
  });
  return c;
}
e.cb = function(a) {
  this.bb || Xc(this);
  return this.bb[a];
};
e.hb = function(a) {
  this.Jc || (this.bb || Xc(this), this.Jc = Va(this.bb));
  a = parseInt(this.Jc[a], 10);
  return isNaN(a) ? 0 : a;
};
function Xc(a) {
  var b = a.d();
  b.replace(/\xa0|\s/g, " ");
  a.bb = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"};
}
;function Yc() {
}
r(Yc, Qc);
ba(Yc);
e = Yc.prototype;
e.Ia = function() {
};
e.H = function(a, b) {
  Zc(a, !1);
  a.Ea &= -256;
  a.s(32, !1);
  Yc.b.H.call(this, a, b);
  a.O(b.value);
  return b;
};
e.j = function(a) {
  Zc(a, !1);
  a.Ea &= -256;
  a.s(32, !1);
  return a.K().j("textarea", {"class":this.Ja(a).join(" "), disabled:!a.isEnabled()}, a.G || "");
};
e.N = function(a) {
  return "TEXTAREA" == a.tagName;
};
e.Ca = aa;
e.V = function(a) {
  return a.isEnabled();
};
e.ra = aa;
e.v = function(a, b, c) {
  Yc.b.v.call(this, a, b, c);
  (a = a.a()) && 1 == b && (a.disabled = c);
};
e.Da = aa;
e.O = function(a, b) {
  a && (a.value = b);
};
e.d = function() {
  return "goog-textarea";
};
function $c(a, b) {
  if (!a) {
    throw Error("Invalid class name " + a);
  }
  if (!ea(b)) {
    throw Error("Invalid decorator function " + b);
  }
  ad[a] = b;
}
var bd = {}, ad = {};
function cd(a, b, c, d, f) {
  if (!(x || z && B("525"))) {
    return!0;
  }
  if (A && f) {
    return dd(a);
  }
  if (f && !d) {
    return!1;
  }
  p(b) && (b = ed(b));
  if (!c && (17 == b || 18 == b || A && 91 == b)) {
    return!1;
  }
  if (z && d && c) {
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
  if (x && d && b == a) {
    return!1;
  }
  switch(a) {
    case 13:
      return!0;
    case 27:
      return!z;
  }
  return dd(a);
}
function dd(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || z && 0 == a) {
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
function ed(a) {
  if (y) {
    a = fd(a);
  } else {
    if (A && z) {
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
function fd(a) {
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
;function gd(a, b) {
  F.call(this);
  a && hd(this, a, b);
}
r(gd, F);
e = gd.prototype;
e.e = null;
e.nb = null;
e.Pb = null;
e.ob = null;
e.A = -1;
e.ba = -1;
e.zb = !1;
var id = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, jd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, kd = x || 
z && B("525"), ld = A && y;
e = gd.prototype;
e.sd = function(a) {
  z && (17 == this.A && !a.ctrlKey || 18 == this.A && !a.altKey || A && 91 == this.A && !a.metaKey) && (this.ba = this.A = -1);
  -1 == this.A && (a.ctrlKey && 17 != a.keyCode ? this.A = 17 : a.altKey && 18 != a.keyCode ? this.A = 18 : a.metaKey && 91 != a.keyCode && (this.A = 91));
  kd && !cd(a.keyCode, this.A, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ba = ed(a.keyCode), ld && (this.zb = a.altKey));
};
e.td = function(a) {
  this.ba = this.A = -1;
  this.zb = a.altKey;
};
e.handleEvent = function(a) {
  var b = a.Z, c, d, f = b.altKey;
  x && "keypress" == a.type ? (c = this.ba, d = 13 != c && 27 != c ? b.keyCode : 0) : z && "keypress" == a.type ? (c = this.ba, d = 0 <= b.charCode && 63232 > b.charCode && dd(c) ? b.charCode : 0) : w ? (c = this.ba, d = dd(c) ? b.keyCode : 0) : (c = b.keyCode || this.ba, d = b.charCode || 0, ld && (f = this.zb), A && 63 == d && 224 == c && (c = 191));
  var g = c = ed(c), h = b.keyIdentifier;
  c ? 63232 <= c && c in id ? g = id[c] : 25 == c && a.shiftKey && (g = 9) : h && h in jd && (g = jd[h]);
  a = g == this.A;
  this.A = g;
  b = new md(g, d, a, b);
  b.altKey = f;
  this.dispatchEvent(b);
};
e.a = function() {
  return this.e;
};
function hd(a, b, c) {
  a.ob && a.detach();
  a.e = b;
  a.nb = D(a.e, "keypress", a, c);
  a.Pb = D(a.e, "keydown", a.sd, c, a);
  a.ob = D(a.e, "keyup", a.td, c, a);
}
e.detach = function() {
  this.nb && (Db(this.nb), Db(this.Pb), Db(this.ob), this.ob = this.Pb = this.nb = null);
  this.e = null;
  this.ba = this.A = -1;
};
e.p = function() {
  gd.b.p.call(this);
  this.detach();
};
function md(a, b, c, d) {
  C.call(this, d);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c;
}
r(md, C);
function N(a, b, c) {
  L.call(this, c);
  if (!b) {
    b = this.constructor;
    for (var d;b;) {
      d = ha(b);
      if (d = bd[d]) {
        break;
      }
      b = b.b ? b.b.constructor : null;
    }
    b = d ? ea(d.S) ? d.S() : new d : null;
  }
  this.c = b;
  this.G = void 0 !== a ? a : null;
}
r(N, L);
e = N.prototype;
e.G = null;
e.m = 0;
e.k = 39;
e.Ea = 255;
e.Ua = 0;
e.i = !0;
e.J = null;
e.Ib = !0;
e.Za = !1;
e.Cd = null;
function Zc(a, b) {
  a.h && b != a.Ib && nd(a, b);
  a.Ib = b;
}
e.n = function() {
  return this.c.n(this);
};
e.fb = function() {
  return this.D || (this.D = new gd);
};
e.Ha = function(a, b) {
  b ? a && (this.J ? Oa(this.J, a) || this.J.push(a) : this.J = [a], this.c.Ha(this, a, !0)) : a && this.J && Pa(this.J, a) && (0 == this.J.length && (this.J = null), this.c.Ha(this, a, !1));
};
e.j = function() {
  var a = this.c.j(this);
  this.e = a;
  Wc(this.c, a, this.La());
  this.Za || this.c.Ta(a, !1);
  this.i || this.c.P(a, !1);
};
e.La = function() {
  return this.Cd;
};
e.q = function() {
  return this.c.q(this.a());
};
e.N = function(a) {
  return this.c.N(a);
};
e.Fa = function(a) {
  this.e = a = this.c.H(this, a);
  Wc(this.c, a, this.La());
  this.Za || this.c.Ta(a, !1);
  this.i = "none" != a.style.display;
};
e.C = function() {
  N.b.C.call(this);
  this.c.Qa(this);
  if (this.k & -2 && (this.Ib && nd(this, !0), this.k & 32)) {
    var a = this.n();
    if (a) {
      var b = this.fb();
      hd(b, a);
      Fc(this).f(b, "key", this.T).f(a, "focus", this.jb).f(a, "blur", this.Ma);
    }
  }
};
function nd(a, b) {
  var c = Fc(a), d = a.a();
  b ? (c.f(d, "mouseover", a.Kb).f(d, "mousedown", a.Oa).f(d, "mouseup", a.Pa).f(d, "mouseout", a.Jb), a.Na != aa && c.f(d, "contextmenu", a.Na), x && c.f(d, "dblclick", a.pc)) : (c.w(d, "mouseover", a.Kb).w(d, "mousedown", a.Oa).w(d, "mouseup", a.Pa).w(d, "mouseout", a.Jb), a.Na != aa && c.w(d, "contextmenu", a.Na), x && c.w(d, "dblclick", a.pc));
}
e.ka = function() {
  N.b.ka.call(this);
  this.D && this.D.detach();
  this.i && this.isEnabled() && this.c.ra(this, !1);
};
e.p = function() {
  N.b.p.call(this);
  this.D && (this.D.ga(), delete this.D);
  delete this.c;
  this.J = this.G = null;
};
e.O = function(a) {
  this.c.O(this.a(), a);
  this.G = a;
};
function Vc(a, b) {
  a.G = b;
}
e.Fb = function() {
  var a = this.G;
  if (!a) {
    return "";
  }
  if (!n(a)) {
    if (m(a)) {
      a = Ma(a, cc).join("");
    } else {
      if (Nb && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
      } else {
        var b = [];
        dc(a, b, !0);
        a = b.join("");
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Nb || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""));
    }
  }
  return pa(a);
};
e.Ca = function(a) {
  N.b.Ca.call(this, a);
  var b = this.a();
  b && this.c.Ca(b, a);
};
e.Ta = function(a) {
  this.Za = a;
  var b = this.a();
  b && this.c.Ta(b, a);
};
e.P = function(a, b) {
  if (b || this.i != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.a();
    c && this.c.P(c, a);
    this.isEnabled() && this.c.ra(this, a);
    this.i = a;
    return!0;
  }
  return!1;
};
e.isEnabled = function() {
  return!(this.m & 1);
};
e.ea = function(a) {
  var b = this.getParent();
  b && "function" == typeof b.isEnabled && !b.isEnabled() || !od(this, 1, !a) || (a || (this.setActive(!1), this.L(!1)), this.i && this.c.ra(this, a), this.v(1, !a, !0));
};
e.L = function(a) {
  od(this, 2, a) && this.v(2, a);
};
e.setActive = function(a) {
  od(this, 4, a) && this.v(4, a);
};
e.aa = function() {
  return!!(this.m & 16);
};
function pd(a, b) {
  od(a, 64, b) && a.v(64, b);
}
e.v = function(a, b, c) {
  c || 1 != a ? this.k & a && b != !!(this.m & a) && (this.c.v(this, a, b), this.m = b ? this.m | a : this.m & ~a) : this.ea(!b);
};
e.s = function(a, b) {
  if (this.h && this.m & a && !b) {
    throw Error("Component already rendered");
  }
  !b && this.m & a && this.v(a, !1);
  this.k = b ? this.k | a : this.k & ~a;
};
function O(a, b) {
  return!!(a.Ea & b) && !!(a.k & b);
}
function od(a, b, c) {
  return!!(a.k & b) && !!(a.m & b) != c && (!(a.Ua & b) || a.dispatchEvent(Cc(b, c))) && !a.Ga;
}
e.Kb = function(a) {
  (!a.relatedTarget || !Vb(this.a(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && O(this, 2) && this.L(!0);
};
e.Jb = function(a) {
  a.relatedTarget && Vb(this.a(), a.relatedTarget) || !this.dispatchEvent("leave") || (O(this, 4) && this.setActive(!1), O(this, 2) && this.L(!1));
};
e.Na = aa;
e.Oa = function(a) {
  this.isEnabled() && (O(this, 2) && this.L(!0), !rb(a) || z && A && a.ctrlKey || (O(this, 4) && this.setActive(!0), this.c.V(this) && this.n().focus()));
  this.Za || !rb(a) || z && A && a.ctrlKey || a.preventDefault();
};
e.Pa = function(a) {
  this.isEnabled() && (O(this, 2) && this.L(!0), this.m & 4 && qd(this, a) && O(this, 4) && this.setActive(!1));
};
e.pc = function(a) {
  this.isEnabled() && qd(this, a);
};
function qd(a, b) {
  if (O(a, 16)) {
    var c = !a.aa();
    od(a, 16, c) && a.v(16, c);
  }
  O(a, 8) && od(a, 8, !0) && a.v(8, !0);
  O(a, 64) && pd(a, !(a.m & 64));
  c = new v("action", a);
  b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.Vb = b.Vb);
  return a.dispatchEvent(c);
}
e.jb = function() {
  O(this, 32) && od(this, 32, !0) && this.v(32, !0);
};
e.Ma = function() {
  O(this, 4) && this.setActive(!1);
  O(this, 32) && od(this, 32, !1) && this.v(32, !1);
};
e.T = function(a) {
  return this.i && this.isEnabled() && this.la(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
};
e.la = function(a) {
  return 13 == a.keyCode && qd(this, a);
};
if (!ea(N)) {
  throw Error("Invalid component class " + N);
}
if (!ea(Qc)) {
  throw Error("Invalid renderer class " + Qc);
}
var rd = ha(N);
bd[rd] = Qc;
$c("goog-control", function() {
  return new N(null);
});
function sd(a, b, c) {
  N.call(this, a, b || Yc.S(), c);
  Zc(this, !1);
  this.Ta(!0);
  this.ua = "" != a;
  a || (this.G = "");
}
r(sd, N);
var td = y || z || x && x && 11 <= jb;
e = sd.prototype;
e.xa = !1;
e.lb = !1;
e.ua = !1;
e.U = 0;
e.yd = 0;
e.xc = 0;
e.qc = !1;
e.pb = !1;
e.Yb = !1;
e.Xb = !1;
e.pa = "";
e.ac = function(a) {
  this.pa = a;
  this.a() && ud(this);
};
function vd(a) {
  return a.oa.top + a.oa.bottom + a.Ab.top + a.Ab.bottom;
}
function wd(a) {
  var b = a.xc, c = a.a();
  b && c && a.pb && (b -= vd(a));
  return b;
}
e.M = function(a) {
  this.O(String(a));
};
e.ta = function() {
  return this.a().value != this.pa || xd(this) || this.ua ? this.a().value : "";
};
e.O = function(a) {
  sd.b.O.call(this, a);
  this.ua = "" != a;
  this.resize();
};
e.ea = function(a) {
  sd.b.ea.call(this, a);
  this.a().disabled = !a;
};
e.resize = function() {
  this.a() && this.ib();
};
function xd(a) {
  return "placeholder" in a.a();
}
function ud(a) {
  a.pa && (xd(a) ? a.a().placeholder = a.pa : !a.a() || a.ua || a.lb || (tc(a.a(), yd), a.a().value = a.pa));
}
e.C = function() {
  sd.b.C.call(this);
  var a = this.a();
  ec(a, {overflowY:"hidden", overflowX:"auto", boxSizing:"border-box", MsBoxSizing:"border-box", WebkitBoxSizing:"border-box", MozBoxSizing:"border-box"});
  this.oa = nc(a);
  this.Ab = qc(a);
  Fc(this).f(a, "scroll", this.ib).f(a, "focus", this.ib).f(a, "keyup", this.ib).f(a, "mouseup", this.zd).f(a, "blur", this.Tc);
  ud(this);
  this.resize();
};
function zd(a) {
  if (!a.qc) {
    var b = a.a().cloneNode(!1);
    ec(b, {position:"absolute", height:"auto", top:"-9999px", margin:"0", padding:"1px", border:"1px solid #000", overflow:"hidden"});
    a.K().I.body.appendChild(b);
    var c = b.scrollHeight;
    b.style.padding = "10px";
    var d = b.scrollHeight;
    a.Yb = d > c;
    b.style.borderWidth = "10px";
    a.Xb = b.scrollHeight > d;
    b.style.height = "100px";
    100 != b.offsetHeight && (a.pb = !0);
    Ub(b);
    a.qc = !0;
  }
  b = a.a();
  isNaN(a.oa.top) && (a.oa = nc(b), a.Ab = qc(b));
  var c = a.a().scrollHeight, f = a.a(), d = f.offsetHeight - f.clientHeight;
  if (!a.Yb) {
    var g = a.oa, d = d - (g.top + g.bottom)
  }
  a.Xb || (f = qc(f), d -= f.top + f.bottom);
  c += 0 < d ? d : 0;
  a.pb ? c -= vd(a) : (a.Yb || (d = a.oa, c += d.top + d.bottom), a.Xb || (a = qc(b), c += a.top + a.bottom));
  return c;
}
function Ad(a, b) {
  a.U != b && (a.U = b, a.a().style.height = b + "px");
}
function Bd(a) {
  var b = a.a();
  b.style.height = "auto";
  var c = b.value.match(/\n/g) || [];
  b.rows = c.length + 1;
  a.U = 0;
}
var yd = "textarea-placeholder-input";
sd.prototype.Tc = function() {
  xd(this) || (this.lb = !1, "" == this.a().value && (this.ua = !1, ud(this)));
};
sd.prototype.ib = function(a) {
  if (!this.xa) {
    var b = this.a();
    !xd(this) && a && "focus" == a.type && (b.value == this.pa && this.pa && !this.lb && (vc(b, yd), b.value = ""), this.lb = !0, this.ua = "" != b.value);
    var c = !1;
    this.xa = !0;
    a = this.U;
    if (b.scrollHeight) {
      var d = !1, f = !1, g = zd(this), h = b.offsetHeight, l = wd(this), t;
      t = this.yd;
      var E = this.a();
      t && E && this.pb && (t -= vd(this));
      l && g < l ? (Ad(this, l), d = !0) : t && g > t ? (Ad(this, t), b.style.overflowY = "", f = !0) : h != g ? Ad(this, g) : this.U || (this.U = g);
      d || f || !td || (c = !0);
    } else {
      Bd(this);
    }
    this.xa = !1;
    c && (b = this.a(), this.xa || (this.xa = !0, (f = b.scrollHeight) ? (g = zd(this), c = wd(this), c && g <= c || (d = this.oa, b.style.paddingBottom = d.bottom + 1 + "px", zd(this) == g && (b.style.paddingBottom = d.bottom + f + "px", b.scrollTop = 0, f = zd(this) - f, f >= c ? Ad(this, f) : Ad(this, c)), b.style.paddingBottom = d.bottom + "px")) : Bd(this), this.xa = !1));
    a != this.U && this.dispatchEvent("resize");
  }
};
sd.prototype.zd = function() {
  var a = this.a(), b = a.offsetHeight;
  a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
  b != this.U && (this.U = this.xc = b);
};
function P(a, b) {
  null == a && (a = {});
  a.tagName || (a.tagName = a.tagName || "input");
  a.type || (a.type = a.type || "text");
  a.name || (a.name = a.name || null);
  a.value || (a.value = a.value || "");
  this.d(a, "input " + a.type);
  P.b.constructor.call(this, a, b);
  this.setAttribute("type", a.type);
  a.value && this.M(a.value);
  a.name && this.Fc(a.name);
}
r(P, H);
q("spark.components.Field", P);
P.prototype.M = function(a) {
  return this.a().value = a;
};
P.prototype.setValue = P.prototype.M;
P.prototype.ta = function() {
  return this.a().value;
};
P.prototype.getValue = P.prototype.ta;
P.prototype.Fc = function(a) {
  return this.setAttribute("name", a);
};
P.prototype.setName = P.prototype.Fc;
P.prototype.getName = function() {
  return this.a().name;
};
P.prototype.getName = P.prototype.getName;
function Q(a, b) {
  null == a && (a = {});
  a.tagName = a.tagName = "textarea";
  this.d(a, "textarea");
  Q.b.constructor.call(this, a, b);
  this.cc = new sd(this.options.value);
  this.cc.H(this.a());
  this.resize();
}
r(Q, P);
q("spark.components.Textarea", Q);
Q.prototype.M = function(a) {
  Q.b.M.apply(this, arguments);
  return this.resize();
};
Q.prototype.setValue = Q.prototype.M;
Q.prototype.resize = function() {
  if (this.cc) {
    return this.cc.resize();
  }
};
Q.prototype.resize = Q.prototype.resize;
function R(a, b) {
  var c;
  null == a && (a = {});
  a.type || (a.type = a.type || "checkbox");
  null == a.checked && (a.checked = null != (c = a.checked) ? c : !1);
  R.b.constructor.call(this, a, b);
  !0 === a.checked && this.check();
}
r(R, P);
q("spark.components.Checkbox", R);
R.prototype.check = function() {
  this.a().checked = !0;
  return this.Y("StateChanged", !0);
};
R.prototype.check = R.prototype.check;
R.prototype.xb = function() {
  this.a().checked = !1;
  return this.Y("StateChanged", !1);
};
R.prototype.uncheck = R.prototype.xb;
R.prototype.aa = function() {
  return this.a().checked;
};
R.prototype.isChecked = R.prototype.aa;
function Cd() {
  this.jc = [];
}
r(Cd, Qc);
ba(Cd);
function Dd(a, b) {
  var c = a.jc[b];
  if (!c) {
    switch(b) {
      case 0:
        c = a.d() + "-highlight";
        break;
      case 1:
        c = a.d() + "-checkbox";
        break;
      case 2:
        c = a.d() + "-content";
    }
    a.jc[b] = c;
  }
  return c;
}
e = Cd.prototype;
e.Ia = function() {
  return "menuitem";
};
e.j = function(a) {
  var b = a.K().j("div", this.Ja(a).join(" "), Ed(this, a.G, a.K()));
  Fd(this, a, b, !!(a.k & 8) || !!(a.k & 16));
  return b;
};
e.q = function(a) {
  return a && a.firstChild;
};
e.H = function(a, b) {
  var c;
  if (void 0 != b.firstElementChild) {
    c = b.firstElementChild;
  } else {
    for (c = b.firstChild;c && 1 != c.nodeType;) {
      c = c.nextSibling;
    }
  }
  var d = Dd(this, 2);
  c && sc(c, d) || b.appendChild(Ed(this, b.childNodes, a.K()));
  sc(b, "goog-option") && (a.vb(!0), this.vb(a, b, !0));
  return Cd.b.H.call(this, a, b);
};
e.O = function(a, b) {
  var c = this.q(a), d = Gd(this, a) ? c.firstChild : null;
  Cd.b.O.call(this, a, b);
  d && !Gd(this, a) && c.insertBefore(d, c.firstChild || null);
};
function Ed(a, b, c) {
  a = Dd(a, 2);
  return c.j("div", a, b);
}
e.Hc = function(a, b, c) {
  a && b && Fd(this, a, b, c);
};
e.vb = function(a, b, c) {
  a && b && Fd(this, a, b, c);
};
function Gd(a, b) {
  var c = a.q(b);
  if (c) {
    var c = c.firstChild, d = Dd(a, 1);
    return!!c && ga(c) && 1 == c.nodeType && sc(c, d);
  }
  return!1;
}
function Fd(a, b, c, d) {
  Wc(a, c, b.La());
  Tc(a, b, c);
  d != Gd(a, c) && (d ? tc(c, "goog-option") : vc(c, "goog-option"), c = a.q(c), d ? (a = Dd(a, 1), c.insertBefore(b.K().j("div", a), c.firstChild || null)) : c.removeChild(c.firstChild));
}
e.cb = function(a) {
  switch(a) {
    case 2:
      return Dd(this, 0);
    case 16:
    ;
    case 8:
      return "goog-option-selected";
    default:
      return Cd.b.cb.call(this, a);
  }
};
e.hb = function(a) {
  var b = Dd(this, 0);
  switch(a) {
    case "goog-option-selected":
      return 16;
    case b:
      return 2;
    default:
      return Cd.b.hb.call(this, a);
  }
};
e.d = function() {
  return "goog-menuitem";
};
function S(a, b, c, d) {
  N.call(this, a, d || Cd.S(), c);
  this.M(b);
}
r(S, N);
e = S.prototype;
e.ta = function() {
  var a = this.ca;
  return null != a ? a : this.Fb();
};
e.M = function(a) {
  this.ca = a;
};
e.s = function(a, b) {
  S.b.s.call(this, a, b);
  switch(a) {
    case 8:
      this.aa() && !b && od(this, 16, !1) && this.v(16, !1);
      var c = this.a();
      c && this.c.Hc(this, c, b);
      break;
    case 16:
      (c = this.a()) && this.c.vb(this, c, b);
  }
};
e.Hc = function(a) {
  this.s(8, a);
};
e.vb = function(a) {
  this.s(16, a);
};
e.Fb = function() {
  var a = this.G;
  return m(a) ? (a = Ma(a, function(a) {
    return ga(a) && 1 == a.nodeType && (sc(a, "goog-menuitem-accel") || sc(a, "goog-menuitem-mnemonic-separator")) ? "" : cc(a);
  }).join(""), pa(a)) : S.b.Fb.call(this);
};
e.Pa = function(a) {
  var b = this.getParent();
  if (b) {
    var c = b.zc;
    b.zc = null;
    if (b = c && p(a.clientX)) {
      b = new I(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
    }
    if (b) {
      return;
    }
  }
  S.b.Pa.call(this, a);
};
e.la = function(a) {
  return a.keyCode == this.yc && qd(this, a) ? !0 : S.b.la.call(this, a);
};
e.gd = function() {
  return this.yc;
};
$c("goog-menuitem", function() {
  return new S(null);
});
S.prototype.La = function() {
  return this.k & 16 ? "menuitemcheckbox" : this.k & 8 ? "menuitemradio" : S.b.La.call(this);
};
S.prototype.getParent = function() {
  return N.prototype.getParent.call(this);
};
S.prototype.gb = function() {
  return N.prototype.gb.call(this);
};
function Hd(a) {
  this.fc = a;
}
ba(Hd);
e = Hd.prototype;
e.Ia = function() {
  return this.fc;
};
function Id(a, b) {
  a && (a.tabIndex = b ? 0 : -1);
}
e.j = function(a) {
  return a.K().j("div", this.Ja(a).join(" "));
};
e.q = function(a) {
  return a;
};
e.N = function(a) {
  return "DIV" == a.tagName;
};
e.H = function(a, b) {
  b.id && Ec(a, b.id);
  var c = this.d(), d = !1, f = rc(b);
  f && u(f, function(b) {
    b == c ? d = !0 : b && (b == c + "-disabled" ? a.ea(!1) : b == c + "-horizontal" ? Jd(a, Kd) : b == c + "-vertical" && Jd(a, Ld));
  }, this);
  d || tc(b, c);
  Md(this, a, this.q(b));
  return b;
};
function Md(a, b, c) {
  if (c) {
    for (var d = c.firstChild, f;d && d.parentNode == c;) {
      f = d.nextSibling;
      if (1 == d.nodeType) {
        var g = a.Gb(d);
        g && (g.e = d, b.isEnabled() || g.ea(!1), b.Wa(g), g.H(d));
      } else {
        d.nodeValue && "" != qa(d.nodeValue) || c.removeChild(d);
      }
      d = f;
    }
  }
}
e.Gb = function(a) {
  a: {
    var b;
    a = rc(a);
    for (var c = 0, d = a.length;c < d;c++) {
      if (b = a[c], b = b in ad ? ad[b]() : null) {
        a = b;
        break a;
      }
    }
    a = null;
  }
  return a;
};
e.Qa = function(a) {
  a = a.a();
  kc(a, !0, y);
  x && (a.hideFocus = !0);
  var b = this.Ia();
  b && Oc(a, b);
};
e.n = function(a) {
  return a.a();
};
e.d = function() {
  return "goog-container";
};
e.Ja = function(a) {
  var b = this.d(), c = [b, a.na == Kd ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c;
};
function Nd() {
}
r(Nd, Qc);
ba(Nd);
Nd.prototype.j = function(a) {
  return a.K().j("div", this.d());
};
Nd.prototype.H = function(a, b) {
  b.id && Ec(a, b.id);
  if ("HR" == b.tagName) {
    var c = b;
    b = this.j(a);
    c.parentNode && c.parentNode.insertBefore(b, c);
    Ub(c);
  } else {
    tc(b, this.d());
  }
  return b;
};
Nd.prototype.O = function() {
};
Nd.prototype.d = function() {
  return "goog-menuseparator";
};
function Od(a, b) {
  N.call(this, null, a || Nd.S(), b);
  this.s(1, !1);
  this.s(2, !1);
  this.s(4, !1);
  this.s(32, !1);
  this.m = 1;
}
r(Od, N);
Od.prototype.C = function() {
  Od.b.C.call(this);
  Oc(this.a(), "separator");
};
$c("goog-menuseparator", function() {
  return new Od;
});
function T(a) {
  this.fc = a || "menu";
}
r(T, Hd);
ba(T);
T.prototype.N = function(a) {
  return "UL" == a.tagName || T.b.N.call(this, a);
};
T.prototype.Gb = function(a) {
  return "HR" == a.tagName ? new Od : T.b.Gb.call(this, a);
};
T.prototype.d = function() {
  return "goog-menu";
};
T.prototype.Qa = function(a) {
  T.b.Qa.call(this, a);
  Pc(a.a(), "haspopup", "true");
};
$c("goog-menuseparator", function() {
  return new Od;
});
function U(a, b, c) {
  L.call(this, c);
  this.c = b || Hd.S();
  this.na = a || Ld;
}
r(U, L);
var Kd = "horizontal", Ld = "vertical";
e = U.prototype;
e.Qb = null;
e.D = null;
e.c = null;
e.na = null;
e.i = !0;
e.ia = !0;
e.Eb = !0;
e.g = -1;
e.l = null;
e.ya = !1;
e.Qc = !1;
e.Bd = !0;
e.Q = null;
e.n = function() {
  return this.Qb || this.c.n(this);
};
e.fb = function() {
  return this.D || (this.D = new gd(this.n()));
};
e.j = function() {
  this.e = this.c.j(this);
};
e.q = function() {
  return this.c.q(this.a());
};
e.N = function(a) {
  return this.c.N(a);
};
e.Fa = function(a) {
  this.e = this.c.H(this, a);
  "none" == a.style.display && (this.i = !1);
};
e.C = function() {
  U.b.C.call(this);
  Jc(this, function(a) {
    a.h && Pd(this, a);
  }, this);
  var a = this.a();
  this.c.Qa(this);
  this.P(this.i, !0);
  Fc(this).f(this, "enter", this.Hb).f(this, "highlight", this.rd).f(this, "unhighlight", this.vd).f(this, "open", this.ud).f(this, "close", this.pd).f(a, "mousedown", this.Oa).f(J(a), "mouseup", this.qd).f(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.od);
  this.V() && Qd(this, !0);
};
function Qd(a, b) {
  var c = Fc(a), d = a.n();
  b ? c.f(d, "focus", a.jb).f(d, "blur", a.Ma).f(a.fb(), "key", a.T) : c.w(d, "focus", a.jb).w(d, "blur", a.Ma).w(a.fb(), "key", a.T);
}
e.ka = function() {
  this.Ba(-1);
  this.l && pd(this.l, !1);
  this.ya = !1;
  U.b.ka.call(this);
};
e.p = function() {
  U.b.p.call(this);
  this.D && (this.D.ga(), this.D = null);
  this.c = this.l = this.Q = this.Qb = null;
};
e.Hb = function() {
  return!0;
};
e.rd = function(a) {
  var b = Mc(this, a.target);
  if (-1 < b && b != this.g) {
    var c = M(this, this.g);
    c && c.L(!1);
    this.g = b;
    c = M(this, this.g);
    this.ya && c.setActive(!0);
    this.Bd && this.l && c != this.l && (c.k & 64 ? pd(c, !0) : pd(this.l, !1));
  }
  b = this.a();
  null != a.target.a() && Pc(b, "activedescendant", a.target.a().id);
};
e.vd = function(a) {
  a.target == M(this, this.g) && (this.g = -1);
  this.a().removeAttribute("aria-activedescendant");
};
e.ud = function(a) {
  (a = a.target) && a != this.l && a.getParent() == this && (this.l && pd(this.l, !1), this.l = a);
};
e.pd = function(a) {
  a.target == this.l && (this.l = null);
};
e.Oa = function(a) {
  this.ia && (this.ya = !0);
  var b = this.n();
  b && Zb(b) ? b.focus() : a.preventDefault();
};
e.qd = function() {
  this.ya = !1;
};
e.od = function(a) {
  var b;
  a: {
    b = a.target;
    if (this.Q) {
      for (var c = this.a();b && b !== c;) {
        var d = b.id;
        if (d in this.Q) {
          b = this.Q[d];
          break a;
        }
        b = b.parentNode;
      }
    }
    b = null;
  }
  if (b) {
    switch(a.type) {
      case "mousedown":
        b.Oa(a);
        break;
      case "mouseup":
        b.Pa(a);
        break;
      case "mouseover":
        b.Kb(a);
        break;
      case "mouseout":
        b.Jb(a);
        break;
      case "contextmenu":
        b.Na(a);
    }
  }
};
e.jb = function() {
};
e.Ma = function() {
  this.Ba(-1);
  this.ya = !1;
  this.l && pd(this.l, !1);
};
e.T = function(a) {
  return this.isEnabled() && this.i && (0 != Kc(this) || this.Qb) && this.la(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
};
e.la = function(a) {
  var b = M(this, this.g);
  if (b && "function" == typeof b.T && b.T(a) || this.l && this.l != b && "function" == typeof this.l.T && this.l.T(a)) {
    return!0;
  }
  if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) {
    return!1;
  }
  switch(a.keyCode) {
    case 27:
      if (this.V()) {
        this.n().blur();
      } else {
        return!1;
      }
      break;
    case 36:
      Rd(this);
      break;
    case 35:
      Sd(this);
      break;
    case 38:
      if (this.na == Ld) {
        Td(this);
      } else {
        return!1;
      }
      break;
    case 37:
      if (this.na == Kd) {
        Lc(this) ? Ud(this) : Td(this);
      } else {
        return!1;
      }
      break;
    case 40:
      if (this.na == Ld) {
        Ud(this);
      } else {
        return!1;
      }
      break;
    case 39:
      if (this.na == Kd) {
        Lc(this) ? Td(this) : Ud(this);
      } else {
        return!1;
      }
      break;
    default:
      return!1;
  }
  return!0;
};
function Pd(a, b) {
  var c = b.a(), c = c.id || (c.id = Dc(b));
  a.Q || (a.Q = {});
  a.Q[c] = b;
}
e.Wa = function(a, b) {
  U.b.Wa.call(this, a, b);
};
e.Xa = function(a, b, c) {
  a.Ua |= 2;
  a.Ua |= 64;
  !this.V() && this.Qc || a.s(32, !1);
  Zc(a, !1);
  var d = a.getParent() == this ? Mc(this, a) : -1;
  U.b.Xa.call(this, a, b, c);
  a.h && this.h && Pd(this, a);
  a = d;
  -1 == a && (a = Kc(this));
  a == this.g ? this.g = Math.min(Kc(this) - 1, b) : a > this.g && b <= this.g ? this.g++ : a < this.g && b > this.g && this.g--;
};
e.removeChild = function(a, b) {
  if (a = n(a) ? Hc(this, a) : a) {
    var c = Mc(this, a);
    -1 != c && (c == this.g ? (a.L(!1), this.g = -1) : c < this.g && this.g--);
    var d = a.a();
    d && d.id && this.Q && (c = this.Q, d = d.id, d in c && delete c[d]);
  }
  a = U.b.removeChild.call(this, a, b);
  Zc(a, !0);
  return a;
};
function Jd(a, b) {
  if (a.a()) {
    throw Error("Component already rendered");
  }
  a.na = b;
}
e.P = function(a, b) {
  if (b || this.i != a && this.dispatchEvent(a ? "show" : "hide")) {
    this.i = a;
    var c = this.a();
    c && (c.style.display = a ? "" : "none", this.V() && Id(this.n(), this.ia && this.i), b || this.dispatchEvent(this.i ? "aftershow" : "afterhide"));
    return!0;
  }
  return!1;
};
e.isEnabled = function() {
  return this.ia;
};
e.ea = function(a) {
  this.ia != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.ia = !0, Jc(this, function(a) {
    a.Nc ? delete a.Nc : a.ea(!0);
  })) : (Jc(this, function(a) {
    a.isEnabled() ? a.ea(!1) : a.Nc = !0;
  }), this.ya = this.ia = !1), this.V() && Id(this.n(), a && this.i));
};
e.V = function() {
  return this.Eb;
};
e.ra = function(a) {
  a != this.Eb && this.h && Qd(this, a);
  this.Eb = a;
  this.ia && this.i && Id(this.n(), a);
};
e.Ba = function(a) {
  (a = M(this, a)) ? a.L(!0) : -1 < this.g && M(this, this.g).L(!1);
};
e.L = function(a) {
  this.Ba(Mc(this, a));
};
function Rd(a) {
  Vd(a, function(a, c) {
    return(a + 1) % c;
  }, Kc(a) - 1);
}
function Sd(a) {
  Vd(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a;
  }, 0);
}
function Ud(a) {
  Vd(a, function(a, c) {
    return(a + 1) % c;
  }, a.g);
}
function Td(a) {
  Vd(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a;
  }, a.g);
}
function Vd(a, b, c) {
  c = 0 > c ? Mc(a, a.l) : c;
  var d = Kc(a);
  c = b.call(a, c, d);
  for (var f = 0;f <= d;) {
    var g = M(a, c);
    if (g && a.ic(g)) {
      a.Ba(c);
      break;
    }
    f++;
    c = b.call(a, c, d);
  }
}
e.ic = function(a) {
  return a.i && a.isEnabled() && !!(a.k & 2);
};
function Wd() {
}
r(Wd, Qc);
ba(Wd);
Wd.prototype.d = function() {
  return "goog-menuheader";
};
function Xd(a, b, c) {
  N.call(this, a, c || Wd.S(), b);
  this.s(1, !1);
  this.s(2, !1);
  this.s(4, !1);
  this.s(32, !1);
  this.m = 1;
}
r(Xd, N);
$c("goog-menuheader", function() {
  return new Xd(null);
});
function Yd(a, b) {
  U.call(this, Ld, b || T.S(), a);
  this.ra(!1);
}
r(Yd, U);
e = Yd.prototype;
e.dc = !0;
e.Rc = !1;
e.d = function() {
  return this.c.d();
};
e.Ya = function(a) {
  this.Wa(a, !0);
};
e.removeItem = function(a) {
  (a = this.removeChild(a, !0)) && a.ga();
};
e.Wb = function(a) {
  (a = this.removeChild(M(this, a), !0)) && a.ga();
};
e.nc = function(a) {
  return M(this, a);
};
e.eb = function() {
  var a = [];
  Jc(this, function(b) {
    a.push(b);
  });
  return a;
};
e.P = function(a, b, c) {
  (b = Yd.b.P.call(this, a, b)) && a && this.h && this.dc && this.n().focus();
  this.zc = a && c && p(c.clientX) ? new I(c.clientX, c.clientY) : null;
  return b;
};
e.Hb = function(a) {
  this.dc && this.n().focus();
  return Yd.b.Hb.call(this, a);
};
e.ic = function(a) {
  return(this.Rc || a.isEnabled()) && a.i && !!(a.k & 2);
};
e.Fa = function(a) {
  var b = this.c, c, d = this.K();
  c = b.d() + "-content";
  d = a || d.I;
  if (d.querySelectorAll && d.querySelector) {
    c = d.querySelectorAll("DIV" + (c ? "." + c : ""));
  } else {
    if (c && d.getElementsByClassName) {
      for (var d = d.getElementsByClassName(c), f = {}, g = 0, h = 0, l;l = d[h];h++) {
        "DIV" == l.nodeName && (f[g++] = l);
      }
      f.length = g;
      c = f;
    } else {
      if (d = d.getElementsByTagName("DIV"), c) {
        f = {};
        for (h = g = 0;l = d[h];h++) {
          var t = l.className;
          "function" == typeof t.split && Oa(t.split(/\s+/), c) && (f[g++] = l);
        }
        f.length = g;
        c = f;
      } else {
        c = d;
      }
    }
  }
  d = c.length;
  for (f = 0;f < d;f++) {
    Md(b, this, c[f]);
  }
  Yd.b.Fa.call(this, a);
};
e.la = function(a) {
  var b = Yd.b.la.call(this, a);
  b || Jc(this, function(c) {
    !b && c.gd && c.yc == a.keyCode && (this.isEnabled() && this.L(c), b = c.T(a));
  }, this);
  return b;
};
e.Ba = function(a) {
  Yd.b.Ba.call(this, a);
  var b = M(this, a);
  if (b) {
    a = this.a();
    var b = b.a(), c = ic(b), d = ic(a), f = qc(a), g = c.x - d.x - f.left, c = c.y - d.y - f.top, d = a.clientHeight - b.offsetHeight, f = a.scrollLeft, h = a.scrollTop, f = f + Math.min(g, Math.max(g - (a.clientWidth - b.offsetWidth), 0)), h = h + Math.min(c, Math.max(c - d, 0)), b = new I(f, h);
    a.scrollLeft = b.x;
    a.scrollTop = b.y;
  }
};
function V(a, b) {
  var c;
  null == a && (a = {});
  null == b && (b = []);
  a.yb || (a.yb = a.valueField || "value");
  a.wb || (a.wb = a.titleField || "title");
  a.Cc || (a.Cc = a.selectionText || "Select one...");
  this.d(a, "combobox");
  V.b.constructor.call(this, a, b);
  this.items = [];
  Zd(this);
  $d(this);
  this.title = new H({B:"title", X:a.Cc});
  c = new H({B:"arrow", X:"v"});
  this.o(this.title);
  this.o(c);
  Ic(this.W, this.a());
  this.da("click", function(a) {
    return function() {
      return a.Kc();
    };
  }(this));
}
r(V, H);
q("spark.components.ComboBox", V);
function Zd(a) {
  a.W = new Yd;
  a.W.P(!1);
  D(a.W, "action", function(a) {
    return function(c) {
      return ae(a, c.target);
    };
  }(a));
}
function ae(a, b) {
  var c, d;
  a.Aa = b;
  d = a.Aa.ca;
  c = a.options;
  c = {title:d[c.wb], value:d[c.yb], data:d};
  a.title.bc(c.title);
  return a.Y(be, c);
}
function $d(a) {
  a.getData().forEach(function(a) {
    return function(c) {
      return a.Cb(c, !0);
    };
  }(a));
}
V.prototype.Cb = function(a, b) {
  var c;
  c = new S(a[this.options.wb], a);
  b && this.Ya(c);
  return c;
};
V.prototype.createItem = V.prototype.Cb;
V.prototype.Ya = function(a, b) {
  var c, d;
  d = this.options;
  c = d.wb;
  d = d.yb;
  a instanceof S || a[c] && a[d] && (a = this.Cb(a));
  if (a instanceof S) {
    return null != b ? this.W.Xa(a, b, !0) : this.W.Ya(a), this.items.push(a);
  }
};
V.prototype.addItem = V.prototype.Ya;
V.prototype.removeItem = function(a) {
  this.W.removeItem(a);
  return this.items.splice(this.items.indexOf(a), 1);
};
V.prototype.removeItem = V.prototype.removeItem;
V.prototype.Wb = function(a) {
  this.W.Wb(a);
  return this.items.splice(a, 1);
};
V.prototype.removeItemAt = V.prototype.Wb;
V.prototype.nc = function(a) {
  return this.items[a];
};
V.prototype.getItemAt = V.prototype.nc;
V.prototype.oc = function(a) {
  var b;
  b = null;
  this.eb().forEach(function(c) {
    if (c.ca.value === a) {
      return b = c;
    }
  });
  return b;
};
V.prototype.getItemByValue = V.prototype.oc;
V.prototype.eb = function() {
  return this.items;
};
V.prototype.getItems = V.prototype.eb;
V.prototype.Zb = function(a) {
  if (a instanceof S) {
    return ae(this, a);
  }
};
V.prototype.selectItem = V.prototype.Zb;
V.prototype.Ed = function(a) {
  (a = this.eb()[a]) && this.Zb(a);
  return a;
};
V.prototype.selectItemAt = V.prototype.Ed;
V.prototype.Bc = function(a) {
  (a = this.oc(a)) && this.Zb(a);
  return a;
};
V.prototype.selectItemByValue = V.prototype.Bc;
V.prototype.ta = function() {
  var a;
  a = "";
  this.Aa && (a = this.options.yb, a = this.Aa.ca[a]);
  return a;
};
V.prototype.getValue = V.prototype.ta;
V.prototype.M = function(a) {
  return this.Bc(a);
};
V.prototype.setValue = V.prototype.M;
V.prototype.kd = function() {
  return this.Aa || null;
};
V.prototype.getSelectedItem = V.prototype.kd;
V.prototype.ld = function() {
  return this.Aa ? this.Aa.ca : null;
};
V.prototype.getSelectedItemData = V.prototype.ld;
V.prototype.ed = function(a) {
  return a.ca;
};
V.prototype.getItemData = V.prototype.ed;
V.prototype.md = function() {
  return this.title;
};
V.prototype.getTitle = V.prototype.md;
V.prototype.Ic = function() {
  this.vc = !0;
  this.W.P(!0);
  return this.sa("menu-visible");
};
V.prototype.showMenu = V.prototype.Ic;
V.prototype.rc = function() {
  this.vc = !1;
  this.W.P(!1);
  return this.tb("menu-visible");
};
V.prototype.hideMenu = V.prototype.rc;
V.prototype.Kc = function() {
  return this.vc ? this.rc() : this.Ic();
};
V.prototype.toggleMenu = V.prototype.Kc;
var be = "selected";
function W(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  a.placeholder || (a.placeholder = a.placeholder || null);
  W.b.constructor.call(this, a, b);
  a.placeholder && this.ac(a.placeholder);
  this.da("focus", function(a) {
    return function() {
      return a.sa("focus");
    };
  }(this));
  this.da("blur", function(a) {
    return function() {
      return a.tb("focus");
    };
  }(this));
}
r(W, P);
q("spark.components.Input", W);
W.prototype.ac = function(a) {
  return this.setAttribute("placeholder", a);
};
W.prototype.setPlaceholder = W.prototype.ac;
W.prototype.Uc = function() {
  return this.removeAttribute("placeholder");
};
W.prototype.clearPlaceholder = W.prototype.Uc;
W.prototype.focus = function() {
  this.a().focus();
  return this.sa("focus");
};
W.prototype.focus = W.prototype.focus;
function ce(a, b) {
  var c;
  null == a && (a = {});
  a.tagName = a.tagName = "label";
  null == a.label && (a.label = null != (c = a.label) ? c : "Input Label");
  a.X = a.label;
  this.d(a, "label");
  ce.b.constructor.call(this, a, b);
}
r(ce, H);
q("spark.components.Label", ce);
function X(a, b) {
  var c, d, f, g;
  null == a && (a = {});
  null == a.Nb && (a.Nb = null != (c = a.inputFirst) ? c : !1);
  this.d(a, a.B || a.cssClass || "labeled-input");
  X.b.constructor.call(this, a, b);
  f = a.Rb || a.labelOptions || {};
  d = a.Ob || a.inputOptions || {};
  c = d.Db || d.domId;
  g = this.Lc;
  f.attributes || (f.attributes = {});
  d.attributes || (d.attributes = {});
  f.attributes["for"] = c || g;
  d.attributes.name = c || g;
  d.attributes.id = c || g;
  this.label = new ce(f, b);
  this.input = de(d, b);
  a.Nb ? (this.o(this.input), this.o(this.label)) : (this.o(this.label), this.o(this.input));
}
r(X, H);
q("spark.components.LabeledInput", X);
X.prototype.ad = function() {
  return this.input;
};
X.prototype.getInput = X.prototype.ad;
X.prototype.fd = function() {
  return this.label;
};
X.prototype.getLabel = X.prototype.fd;
function ee(a, b) {
  null == a && (a = {});
  a.type = a.type = "password";
  ee.b.constructor.call(this, a, b);
}
r(ee, W);
q("spark.components.Password", ee);
function fe(a, b) {
  null == a && (a = {});
  a.type = a.type = "radio";
  fe.b.constructor.call(this, a, b);
}
r(fe, R);
q("spark.components.Radio", fe);
function de(a, b) {
  null == a && (a = {});
  a.type || (a.type = a.type || "text");
  return new de.Fd[a.type](a, b);
}
q("spark.components.FieldFactory", de);
de.Fd = {text:W, input:W, password:ee, radio:fe, checkbox:R, label:ce, button:Kb};
function Z(a, b) {
  var c, d;
  null == a && (a = {});
  this.d(a, "form");
  Z.b.constructor.call(this, a, b);
  this.wa = [];
  this.buttons = [];
  this.mb = {};
  d = a.wa || a.inputs;
  c = a.buttons || a.buttons;
  this.Ra = new H({B:"input-container"});
  this.Bb = new H({B:"buttons-container"});
  this.o(this.Ra);
  this.o(this.Bb);
  d && d.forEach(function(a) {
    return function(b) {
      return a.lc(b);
    };
  }(this));
  c && c.forEach(function(a) {
    return function(b) {
      return a.kc(b);
    };
  }(this));
  this.setData(b);
}
r(Z, H);
q("spark.components.Form", Z);
Z.prototype.lc = function(a) {
  var b;
  b = a.name;
  a.label ? (a = new X({Rb:a, Ob:a}), this.Ra.o(a), this.wa.push(a = a.input)) : (a = de(a), this.Ra.o(a), this.wa.push(a));
  if (b) {
    return this.mb[b] = a;
  }
};
Z.prototype.createInput = Z.prototype.lc;
Z.prototype.kc = function(a) {
  a = new Kb(a);
  this.buttons.push(a);
  return this.Bb.o(a);
};
Z.prototype.createButton = Z.prototype.kc;
Z.prototype.setData = function(a) {
  var b, c, d, f;
  if (this.mb) {
    f = [];
    for (c in a) {
      d = a[c], (b = this.mb[c]) ? f.push(b.M(d)) : f.push(void 0);
    }
    return f;
  }
};
Z.prototype.setData = Z.prototype.setData;
Z.prototype.getData = function() {
  var a, b, c, d, f;
  a = {};
  f = this.wa;
  c = 0;
  for (d = f.length;c < d;c++) {
    b = f[c], a[b.getName()] = b.ta();
  }
  return a;
};
Z.prototype.getData = Z.prototype.getData;
Z.prototype.dd = function() {
  return this.Ra;
};
Z.prototype.getInputsContainer = Z.prototype.dd;
Z.prototype.Wc = function() {
  return this.Bb;
};
Z.prototype.getButtonsContainer = Z.prototype.Wc;
Z.prototype.cd = function() {
  return this.wa;
};
Z.prototype.getInputs = Z.prototype.cd;
Z.prototype.Vc = function() {
  return this.buttons;
};
Z.prototype.getButtons = Z.prototype.Vc;
Z.prototype.bd = function(a) {
  return this.mb[a] || null;
};
Z.prototype.getInputByName = Z.prototype.bd;
function $(a, b) {
  var c, d;
  null == a && (a = {});
  a.B = this.d(a, "toggle-switch");
  a.Nb = !0;
  a.name || (a.name = a.name || null);
  null == a.checked && (a.checked = null != (c = a.checked) ? c : !1);
  d = a.Rb || a.labelOptions || {};
  d.label = "";
  c = a.Ob || a.inputOptions || {};
  c.type = "checkbox";
  a.name && (c.name = a.name);
  a.Rb = d;
  a.Ob = c;
  $.b.constructor.call(this, a, b);
  a.checked && this.check();
  this.input.da("StateChanged", function(a) {
    return function(b) {
      return a.Y("StateChanged", b.data);
    };
  }(this));
}
r($, X);
q("spark.components.ToggleSwitch", $);
$.prototype.check = function() {
  return this.input.check();
};
$.prototype.check = $.prototype.check;
$.prototype.xb = function() {
  return this.input.xb();
};
$.prototype.uncheck = $.prototype.xb;
$.prototype.aa = function() {
  return this.input.aa();
};
$.prototype.isChecked = $.prototype.aa;
function ge(a, b) {
  var c;
  null == a && (a = {});
  null == a.Oc && (a.Oc = null != (c = a.withImage) ? c : !0);
  a.sc || (a.sc = a.imageUrl || "http://lorempixel.com/460/144/city/4");
  a.title || (a.title = a.title || "Sign Up");
  a.hc || (a.hc = a.buttonTitle || "Sign Up");
  a.gc || (a.gc = a.buttonColor || "green");
  a.fa || (a.fa = a.callback || null);
  a.mc || (a.mc = a.forgotPasswordCallback || null);
  a.ec || (a.ec = a.alreadyRegisteredCallback || null);
  this.d(a, "sign-up-widget");
  ge.b.constructor.call(this, a, b);
  a.Oc && (c = new H({tagName:"img", attributes:{src:this.options.sc}}), this.o(c), this.sa("with-image"));
  c = new H({X:this.options.title, B:"title"});
  this.o(c);
  this.form = new Z(he(this));
  this.o(this.form);
  ie(this);
}
r(ge, H);
q("spark.widgets.SignUp", ge);
function ie(a) {
  var b, c, d, f;
  c = a.options;
  d = c.mc;
  b = c.ec;
  f = new H({tagName:"a", X:"Already Registered?", B:"already-registered", attributes:{href:"#"}, ja:{click:function(a) {
    return function() {
      b && b.call(a);
      return a.Y("AlreadyRegisteredLinkClicked");
    };
  }(a)}});
  c = new H({tagName:"a", X:"Forgot password?", B:"forgot-password", attributes:{href:"#"}, ja:{click:function(a) {
    return function() {
      d && d.call(a);
      return a.Y("ForgotPasswordLinkClicked");
    };
  }(a)}});
  a.o(f);
  a.form.Ra.o(c);
}
function he(a) {
  var b;
  b = a.options;
  return{wa:[{type:"text", placeholder:"Email or username", name:"username"}, {type:"password", placeholder:"Password", name:"password"}], buttons:[{title:b.hc, B:b.gc, fa:function(a) {
    return function() {
      b.fa && b.fa.call(a);
      return a.Y("SignUpFormPosted");
    };
  }(a)}]};
}
ge.prototype.$c = function() {
  return this.form;
};
ge.prototype.getForm = ge.prototype.$c;
window.addEventListener("load", function() {
  return!0;
}, !1);
})();
