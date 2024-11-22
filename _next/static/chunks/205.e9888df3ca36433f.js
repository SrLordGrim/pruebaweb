"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [205],
  {
    6938: function (e, t, n) {
      n.d(t, {
        q: function () {
          return d;
        },
      });
      var r = n(7405),
        o = n(2804),
        i = n(5432),
        a = n(3292),
        l = n(5059),
        s = n(8043),
        u = n(5893),
        c = {
          enter: {
            visibility: "visible",
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            },
          },
          exit: {
            transitionEnd: {
              visibility: "hidden",
            },
            opacity: 0,
            scale: 0.8,
            transition: {
              duration: 0.1,
              easings: "easeOut",
            },
          },
        },
        f = (0, a.m)(s.E.div),
        d = (0, l.G)(function (e, t) {
          var n, l;
          let { rootProps: s, motionProps: d, ...p } = e,
            {
              isOpen: h,
              onTransitionEnd: m,
              unstable__animationState: v,
            } = (0, o.Xh)(),
            b = (0, o._l)(p, t),
            y = (0, o.Qh)(s),
            g = (0, r.x)();
          return (0, u.jsx)(a.m.div, {
            ...y,
            __css: {
              zIndex:
                null != (l = e.zIndex)
                  ? l
                  : null == (n = g.list)
                  ? void 0
                  : n.zIndex,
            },
            children: (0, u.jsx)(f, {
              variants: c,
              initial: !1,
              animate: h ? "enter" : "exit",
              __css: {
                outline: 0,
                ...g.list,
              },
              ...d,
              className: (0, i.cx)("chakra-menu__menu-list", b.className),
              ...b,
              onUpdate: m,
              onAnimationComplete: (0, i.PP)(
                v.onComplete,
                b.onAnimationComplete
              ),
            }),
          });
        });
      d.displayName = "MenuList";
    },
    9098: function (e, t, n) {
      n.d(t, {
        j: function () {
          return c;
        },
      });
      var r = n(7405),
        o = n(2804),
        i = n(5059),
        a = n(3292),
        l = n(5432),
        s = n(5893),
        u = (0, i.G)((e, t) => {
          let n = (0, r.x)();
          return (0, s.jsx)(a.m.button, {
            ref: t,
            ...e,
            __css: {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              outline: 0,
              ...n.button,
            },
          });
        }),
        c = (0, i.G)((e, t) => {
          let { children: n, as: r, ...i } = e,
            c = (0, o.zZ)(i, t);
          return (0, s.jsx)(r || u, {
            ...c,
            className: (0, l.cx)("chakra-menu__menu-button", e.className),
            children: (0, s.jsx)(a.m.span, {
              __css: {
                pointerEvents: "none",
                flex: "1 1 auto",
                minW: 0,
              },
              children: e.children,
            }),
          });
        });
      c.displayName = "MenuButton";
    },
    2804: function (e, t, n) {
      n.d(t, {
        wN: function () {
          return eZ;
        },
        Kb: function () {
          return e1;
        },
        H9: function () {
          return e9;
        },
        zZ: function () {
          return e4;
        },
        Xh: function () {
          return e2;
        },
        iX: function () {
          return te;
        },
        _l: function () {
          return e7;
        },
        Qh: function () {
          return e6;
        },
      });
      var r,
        o,
        i,
        a,
        l,
        s = n(7294),
        u = n(5432),
        c = n(1103);
      function f(e) {
        let t = e.target,
          { tagName: n, isContentEditable: r } = t;
        return "INPUT" !== n && "TEXTAREA" !== n && !0 !== r;
      }
      var d = Object.defineProperty,
        p = (e, t, n) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        h = (e, t, n) => (p(e, "symbol" != typeof t ? t + "" : t, n), n);
      function m(e) {
        return e.sort((e, t) => {
          let n = e.compareDocumentPosition(t);
          if (
            n & Node.DOCUMENT_POSITION_FOLLOWING ||
            n & Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            return -1;
          if (
            n & Node.DOCUMENT_POSITION_PRECEDING ||
            n & Node.DOCUMENT_POSITION_CONTAINS
          )
            return 1;
          if (
            !(n & Node.DOCUMENT_POSITION_DISCONNECTED) &&
            !(n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
          )
            return 0;
          throw Error("Cannot sort the given nodes.");
        });
      }
      var v = (e) =>
        "object" == typeof e &&
        "nodeType" in e &&
        e.nodeType === Node.ELEMENT_NODE;
      function b(e, t, n) {
        let r = e + 1;
        return n && r >= t && (r = 0), r;
      }
      function y(e, t, n) {
        let r = e - 1;
        return n && r < 0 && (r = t), r;
      }
      var g = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect,
        w = (e) => e,
        x = class {
          constructor() {
            h(this, "descendants", new Map()),
              h(this, "register", (e) => {
                if (null != e)
                  return v(e)
                    ? this.registerNode(e)
                    : (t) => {
                        this.registerNode(t, e);
                      };
              }),
              h(this, "unregister", (e) => {
                this.descendants.delete(e);
                let t = m(Array.from(this.descendants.keys()));
                this.assignIndex(t);
              }),
              h(this, "destroy", () => {
                this.descendants.clear();
              }),
              h(this, "assignIndex", (e) => {
                this.descendants.forEach((t) => {
                  let n = e.indexOf(t.node);
                  (t.index = n), (t.node.dataset.index = t.index.toString());
                });
              }),
              h(this, "count", () => this.descendants.size),
              h(this, "enabledCount", () => this.enabledValues().length),
              h(this, "values", () => {
                let e = Array.from(this.descendants.values());
                return e.sort((e, t) => e.index - t.index);
              }),
              h(this, "enabledValues", () =>
                this.values().filter((e) => !e.disabled)
              ),
              h(this, "item", (e) => {
                if (0 !== this.count()) return this.values()[e];
              }),
              h(this, "enabledItem", (e) => {
                if (0 !== this.enabledCount()) return this.enabledValues()[e];
              }),
              h(this, "first", () => this.item(0)),
              h(this, "firstEnabled", () => this.enabledItem(0)),
              h(this, "last", () => this.item(this.descendants.size - 1)),
              h(this, "lastEnabled", () => {
                let e = this.enabledValues().length - 1;
                return this.enabledItem(e);
              }),
              h(this, "indexOf", (e) => {
                var t, n;
                return e &&
                  null !=
                    (n =
                      null == (t = this.descendants.get(e)) ? void 0 : t.index)
                  ? n
                  : -1;
              }),
              h(this, "enabledIndexOf", (e) =>
                null == e
                  ? -1
                  : this.enabledValues().findIndex((t) => t.node.isSameNode(e))
              ),
              h(this, "next", (e, t = !0) => {
                let n = b(e, this.count(), t);
                return this.item(n);
              }),
              h(this, "nextEnabled", (e, t = !0) => {
                let n = this.item(e);
                if (!n) return;
                let r = this.enabledIndexOf(n.node),
                  o = b(r, this.enabledCount(), t);
                return this.enabledItem(o);
              }),
              h(this, "prev", (e, t = !0) => {
                let n = y(e, this.count() - 1, t);
                return this.item(n);
              }),
              h(this, "prevEnabled", (e, t = !0) => {
                let n = this.item(e);
                if (!n) return;
                let r = this.enabledIndexOf(n.node),
                  o = y(r, this.enabledCount() - 1, t);
                return this.enabledItem(o);
              }),
              h(this, "registerNode", (e, t) => {
                if (!e || this.descendants.has(e)) return;
                let n = Array.from(this.descendants.keys()).concat(e),
                  r = m(n);
                (null == t ? void 0 : t.disabled) &&
                  (t.disabled = !!t.disabled);
                let o = {
                  node: e,
                  index: -1,
                  ...t,
                };
                this.descendants.set(e, o), this.assignIndex(r);
              });
          }
        },
        E = n(5227),
        [O, k] = (0, E.k)({
          name: "DescendantsProvider",
          errorMessage:
            "useDescendantsContext must be used within DescendantsProvider",
        });
      function C(e) {
        return (
          null != e &&
          "object" == typeof e &&
          "nodeType" in e &&
          e.nodeType === Node.ELEMENT_NODE
        );
      }
      function S(e) {
        var t;
        if (!C(e)) return !1;
        let n = null != (t = e.ownerDocument.defaultView) ? t : window;
        return e instanceof n.HTMLElement;
      }
      function N(e) {
        return C(e) ? e.ownerDocument : document;
      }
      var D = (e) => e.hasAttribute("tabindex"),
        M = (e) => D(e) && -1 === e.tabIndex,
        P = n(2366),
        _ = (e, t) => ({
          var: e,
          varRef: t ? `var(${e}, ${t})` : `var(${e})`,
        }),
        T = {
          arrowShadowColor: _("--popper-arrow-shadow-color"),
          arrowSize: _("--popper-arrow-size", "8px"),
          arrowSizeHalf: _("--popper-arrow-size-half"),
          arrowBg: _("--popper-arrow-bg"),
          transformOrigin: _("--popper-transform-origin"),
          arrowOffset: _("--popper-arrow-offset"),
        },
        j = {
          top: "bottom center",
          "top-start": "bottom left",
          "top-end": "bottom right",
          bottom: "top center",
          "bottom-start": "top left",
          "bottom-end": "top right",
          left: "right center",
          "left-start": "right top",
          "left-end": "right bottom",
          right: "left center",
          "right-start": "left top",
          "right-end": "left bottom",
        },
        I = (e) => j[e],
        A = {
          scroll: !0,
          resize: !0,
        },
        L = {
          name: "matchWidth",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: ({ state: e }) => {
            e.styles.popper.width = `${e.rects.reference.width}px`;
          },
          effect:
            ({ state: e }) =>
            () => {
              let t = e.elements.reference;
              e.elements.popper.style.width = `${t.offsetWidth}px`;
            },
        },
        R = {
          name: "transformOrigin",
          enabled: !0,
          phase: "write",
          fn: ({ state: e }) => {
            W(e);
          },
          effect:
            ({ state: e }) =>
            () => {
              W(e);
            },
        },
        W = (e) => {
          e.elements.popper.style.setProperty(
            T.transformOrigin.var,
            I(e.placement)
          );
        },
        z = {
          name: "positionArrow",
          enabled: !0,
          phase: "afterWrite",
          fn: ({ state: e }) => {
            B(e);
          },
        },
        B = (e) => {
          var t;
          if (!e.placement) return;
          let n = U(e.placement);
          if ((null == (t = e.elements) ? void 0 : t.arrow) && n) {
            Object.assign(e.elements.arrow.style, {
              [n.property]: n.value,
              width: T.arrowSize.varRef,
              height: T.arrowSize.varRef,
              zIndex: -1,
            });
            let r = {
              [T.arrowSizeHalf.var]: `calc(${T.arrowSize.varRef} / 2)`,
              [T.arrowOffset.var]: `calc(${T.arrowSizeHalf.varRef} * -1)`,
            };
            for (let o in r) e.elements.arrow.style.setProperty(o, r[o]);
          }
        },
        U = (e) =>
          e.startsWith("top")
            ? {
                property: "bottom",
                value: T.arrowOffset.varRef,
              }
            : e.startsWith("bottom")
            ? {
                property: "top",
                value: T.arrowOffset.varRef,
              }
            : e.startsWith("left")
            ? {
                property: "right",
                value: T.arrowOffset.varRef,
              }
            : e.startsWith("right")
            ? {
                property: "left",
                value: T.arrowOffset.varRef,
              }
            : void 0,
        $ = {
          name: "innerArrow",
          enabled: !0,
          phase: "main",
          requires: ["arrow"],
          fn: ({ state: e }) => {
            H(e);
          },
          effect:
            ({ state: e }) =>
            () => {
              H(e);
            },
        },
        H = (e) => {
          var t;
          if (!e.elements.arrow) return;
          let n = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
          if (!n) return;
          let r = (t = e.placement).includes("top")
            ? "1px 1px 1px 0 var(--popper-arrow-shadow-color)"
            : t.includes("bottom")
            ? "-1px -1px 1px 0 var(--popper-arrow-shadow-color)"
            : t.includes("right")
            ? "-1px 1px 1px 0 var(--popper-arrow-shadow-color)"
            : t.includes("left")
            ? "1px -1px 1px 0 var(--popper-arrow-shadow-color)"
            : void 0;
          r && n.style.setProperty("--popper-arrow-default-shadow", r),
            Object.assign(n.style, {
              transform: "rotate(45deg)",
              background: T.arrowBg.varRef,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "inherit",
              boxShadow:
                "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
            });
        },
        q = {
          "start-start": {
            ltr: "left-start",
            rtl: "right-start",
          },
          "start-end": {
            ltr: "left-end",
            rtl: "right-end",
          },
          "end-start": {
            ltr: "right-start",
            rtl: "left-start",
          },
          "end-end": {
            ltr: "right-end",
            rtl: "left-end",
          },
          start: {
            ltr: "left",
            rtl: "right",
          },
          end: {
            ltr: "right",
            rtl: "left",
          },
        },
        V = {
          "auto-start": "auto-end",
          "auto-end": "auto-start",
          "top-start": "top-end",
          "top-end": "top-start",
          "bottom-start": "bottom-end",
          "bottom-end": "bottom-start",
        };
      function F(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function G(e) {
        var t = F(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function K(e) {
        var t = F(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function X(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var t = F(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      var Y = Math.max,
        Z = Math.min,
        Q = Math.round;
      function J() {
        var e = navigator.userAgentData;
        return null != e && e.brands
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function ee() {
        return !/^((?!chrome|android).)*safari/i.test(J());
      }
      function et(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          K(e) &&
          ((o = (e.offsetWidth > 0 && Q(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && Q(r.height) / e.offsetHeight) || 1));
        var a = (G(e) ? F(e) : window).visualViewport,
          l = !ee() && n,
          s = (r.left + (l && a ? a.offsetLeft : 0)) / o,
          u = (r.top + (l && a ? a.offsetTop : 0)) / i,
          c = r.width / o,
          f = r.height / i;
        return {
          width: c,
          height: f,
          top: u,
          right: s + c,
          bottom: u + f,
          left: s,
          x: s,
          y: u,
        };
      }
      function en(e) {
        var t = F(e);
        return {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset,
        };
      }
      function er(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function eo(e) {
        return ((G(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function ei(e) {
        return et(eo(e)).left + en(e).scrollLeft;
      }
      function ea(e) {
        return F(e).getComputedStyle(e);
      }
      function el(e) {
        var t = ea(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function es(e) {
        var t = et(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - n) && (n = t.width),
          1 >= Math.abs(t.height - r) && (r = t.height),
          {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r,
          }
        );
      }
      function eu(e) {
        return "html" === er(e)
          ? e
          : e.assignedSlot || e.parentNode || (X(e) ? e.host : null) || eo(e);
      }
      function ec(e, t) {
        void 0 === t && (t = []);
        var n,
          r = (function e(t) {
            return ["html", "body", "#document"].indexOf(er(t)) >= 0
              ? t.ownerDocument.body
              : K(t) && el(t)
              ? t
              : e(eu(t));
          })(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = F(r),
          a = o ? [i].concat(i.visualViewport || [], el(r) ? r : []) : r,
          l = t.concat(a);
        return o ? l : l.concat(ec(eu(a)));
      }
      function ef(e) {
        return K(e) && "fixed" !== ea(e).position ? e.offsetParent : null;
      }
      function ed(e) {
        for (
          var t = F(e), n = ef(e);
          n &&
          ["table", "td", "th"].indexOf(er(n)) >= 0 &&
          "static" === ea(n).position;

        )
          n = ef(n);
        return n &&
          ("html" === er(n) ||
            ("body" === er(n) && "static" === ea(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(J());
                if (/Trident/i.test(J()) && K(e) && "fixed" === ea(e).position)
                  return null;
                var n = eu(e);
                for (
                  X(n) && (n = n.host);
                  K(n) && 0 > ["html", "body"].indexOf(er(n));

                ) {
                  var r = ea(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var ep = "bottom",
        eh = "right",
        em = "left",
        ev = "auto",
        eb = ["top", ep, eh, em],
        ey = "start",
        eg = "viewport",
        ew = "popper",
        ex = eb.reduce(function (e, t) {
          return e.concat([t + "-" + ey, t + "-end"]);
        }, []),
        eE = [].concat(eb, [ev]).reduce(function (e, t) {
          return e.concat([t, t + "-" + ey, t + "-end"]);
        }, []),
        eO = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ],
        ek = {
          placement: "bottom",
          modifiers: [],
          strategy: "absolute",
        };
      function eC() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      var eS = {
        passive: !0,
      };
      function eN(e) {
        return e.split("-")[0];
      }
      function eD(e) {
        return e.split("-")[1];
      }
      function eM(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function eP(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? eN(o) : null,
          a = o ? eD(o) : null,
          l = n.x + n.width / 2 - r.width / 2,
          s = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case "top":
            t = {
              x: l,
              y: n.y - r.height,
            };
            break;
          case ep:
            t = {
              x: l,
              y: n.y + n.height,
            };
            break;
          case eh:
            t = {
              x: n.x + n.width,
              y: s,
            };
            break;
          case em:
            t = {
              x: n.x - r.width,
              y: s,
            };
            break;
          default:
            t = {
              x: n.x,
              y: n.y,
            };
        }
        var u = i ? eM(i) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (a) {
            case ey:
              t[u] = t[u] - (n[c] / 2 - r[c] / 2);
              break;
            case "end":
              t[u] = t[u] + (n[c] / 2 - r[c] / 2);
          }
        }
        return t;
      }
      var e_ = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
      };
      function eT(e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          l = e.popper,
          s = e.popperRect,
          u = e.placement,
          c = e.variation,
          f = e.offsets,
          d = e.position,
          p = e.gpuAcceleration,
          h = e.adaptive,
          m = e.roundOffsets,
          v = e.isFixed,
          b = f.x,
          y = void 0 === b ? 0 : b,
          g = f.y,
          w = void 0 === g ? 0 : g,
          x =
            "function" == typeof m
              ? m({
                  x: y,
                  y: w,
                })
              : {
                  x: y,
                  y: w,
                };
        (y = x.x), (w = x.y);
        var E = f.hasOwnProperty("x"),
          O = f.hasOwnProperty("y"),
          k = em,
          C = "top",
          S = window;
        if (h) {
          var N = ed(l),
            D = "clientHeight",
            M = "clientWidth";
          N === F(l) &&
            "static" !== ea((N = eo(l))).position &&
            "absolute" === d &&
            ((D = "scrollHeight"), (M = "scrollWidth")),
            ("top" === u || ((u === em || u === eh) && "end" === c)) &&
              ((C = ep),
              (w -=
                (v && N === S && S.visualViewport
                  ? S.visualViewport.height
                  : N[D]) - s.height),
              (w *= p ? 1 : -1)),
            (u === em || (("top" === u || u === ep) && "end" === c)) &&
              ((k = eh),
              (y -=
                (v && N === S && S.visualViewport
                  ? S.visualViewport.width
                  : N[M]) - s.width),
              (y *= p ? 1 : -1));
        }
        var P = Object.assign(
            {
              position: d,
            },
            h && e_
          ),
          _ =
            !0 === m
              ? ((n = (t = {
                  x: y,
                  y: w,
                }).x),
                (r = t.y),
                {
                  x: Q(n * (o = window.devicePixelRatio || 1)) / o || 0,
                  y: Q(r * o) / o || 0,
                })
              : {
                  x: y,
                  y: w,
                };
        return ((y = _.x), (w = _.y), p)
          ? Object.assign(
              {},
              P,
              (((a = {})[C] = O ? "0" : ""),
              (a[k] = E ? "0" : ""),
              (a.transform =
                1 >= (S.devicePixelRatio || 1)
                  ? "translate(" + y + "px, " + w + "px)"
                  : "translate3d(" + y + "px, " + w + "px, 0)"),
              a)
            )
          : Object.assign(
              {},
              P,
              (((i = {})[C] = O ? w + "px" : ""),
              (i[k] = E ? y + "px" : ""),
              (i.transform = ""),
              i)
            );
      }
      var ej = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom",
      };
      function eI(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ej[e];
        });
      }
      var eA = {
        start: "end",
        end: "start",
      };
      function eL(e) {
        return e.replace(/start|end/g, function (e) {
          return eA[e];
        });
      }
      function eR(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && X(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function eW(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ez(e, t, n) {
        var r, o, i, a, l, s, u, c, f, d;
        return t === eg
          ? eW(
              (function (e, t) {
                var n = F(e),
                  r = eo(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  l = 0,
                  s = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var u = ee();
                  (u || (!u && "fixed" === t)) &&
                    ((l = o.offsetLeft), (s = o.offsetTop));
                }
                return {
                  width: i,
                  height: a,
                  x: l + ei(e),
                  y: s,
                };
              })(e, n)
            )
          : G(t)
          ? (((r = et(t, !1, "fixed" === n)).top = r.top + t.clientTop),
            (r.left = r.left + t.clientLeft),
            (r.bottom = r.top + t.clientHeight),
            (r.right = r.left + t.clientWidth),
            (r.width = t.clientWidth),
            (r.height = t.clientHeight),
            (r.x = r.left),
            (r.y = r.top),
            r)
          : eW(
              ((o = eo(e)),
              (a = eo(o)),
              (l = en(o)),
              (s = null == (i = o.ownerDocument) ? void 0 : i.body),
              (u = Y(
                a.scrollWidth,
                a.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              )),
              (c = Y(
                a.scrollHeight,
                a.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              )),
              (f = -l.scrollLeft + ei(o)),
              (d = -l.scrollTop),
              "rtl" === ea(s || a).direction &&
                (f += Y(a.clientWidth, s ? s.clientWidth : 0) - u),
              {
                width: u,
                height: c,
                x: f,
                y: d,
              })
            );
      }
      function eB() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        };
      }
      function eU(e) {
        return Object.assign({}, eB(), e);
      }
      function e$(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function eH(e, t) {
        void 0 === t && (t = {});
        var n,
          r,
          o,
          i,
          a,
          l,
          s,
          u = t,
          c = u.placement,
          f = void 0 === c ? e.placement : c,
          d = u.strategy,
          p = void 0 === d ? e.strategy : d,
          h = u.boundary,
          m = u.rootBoundary,
          v = u.elementContext,
          b = void 0 === v ? ew : v,
          y = u.altBoundary,
          g = u.padding,
          w = void 0 === g ? 0 : g,
          x = eU("number" != typeof w ? w : e$(w, eb)),
          E = e.rects.popper,
          O = e.elements[void 0 !== y && y ? (b === ew ? "reference" : ew) : b],
          k =
            ((n = G(O) ? O : O.contextElement || eo(e.elements.popper)),
            (l = (a = [].concat(
              "clippingParents" === (r = void 0 === h ? "clippingParents" : h)
                ? ((o = ec(eu(n))),
                  G(
                    (i =
                      ["absolute", "fixed"].indexOf(ea(n).position) >= 0 && K(n)
                        ? ed(n)
                        : n)
                  )
                    ? o.filter(function (e) {
                        return G(e) && eR(e, i) && "body" !== er(e);
                      })
                    : [])
                : [].concat(r),
              [void 0 === m ? eg : m]
            ))[0]),
            ((s = a.reduce(function (e, t) {
              var r = ez(n, t, p);
              return (
                (e.top = Y(r.top, e.top)),
                (e.right = Z(r.right, e.right)),
                (e.bottom = Z(r.bottom, e.bottom)),
                (e.left = Y(r.left, e.left)),
                e
              );
            }, ez(n, l, p))).width = s.right - s.left),
            (s.height = s.bottom - s.top),
            (s.x = s.left),
            (s.y = s.top),
            s),
          C = et(e.elements.reference),
          S = eP({
            reference: C,
            element: E,
            strategy: "absolute",
            placement: f,
          }),
          N = eW(Object.assign({}, E, S)),
          D = b === ew ? N : C,
          M = {
            top: k.top - D.top + x.top,
            bottom: D.bottom - k.bottom + x.bottom,
            left: k.left - D.left + x.left,
            right: D.right - k.right + x.right,
          },
          P = e.modifiersData.offset;
        if (b === ew && P) {
          var _ = P[f];
          Object.keys(M).forEach(function (e) {
            var t = [eh, ep].indexOf(e) >= 0 ? 1 : -1,
              n = ["top", ep].indexOf(e) >= 0 ? "y" : "x";
            M[e] += _[n] * t;
          });
        }
        return M;
      }
      function eq(e, t, n) {
        return Y(e, Z(t, n));
      }
      function eV(e, t, n) {
        return (
          void 0 === n &&
            (n = {
              x: 0,
              y: 0,
            }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function eF(e) {
        return ["top", eh, ep, em].some(function (t) {
          return e[t] >= 0;
        });
      }
      var eG =
          ((i =
            void 0 ===
            (o = (r = {
              defaultModifiers: [
                {
                  name: "eventListeners",
                  enabled: !0,
                  phase: "write",
                  fn: function () {},
                  effect: function (e) {
                    var t = e.state,
                      n = e.instance,
                      r = e.options,
                      o = r.scroll,
                      i = void 0 === o || o,
                      a = r.resize,
                      l = void 0 === a || a,
                      s = F(t.elements.popper),
                      u = [].concat(
                        t.scrollParents.reference,
                        t.scrollParents.popper
                      );
                    return (
                      i &&
                        u.forEach(function (e) {
                          e.addEventListener("scroll", n.update, eS);
                        }),
                      l && s.addEventListener("resize", n.update, eS),
                      function () {
                        i &&
                          u.forEach(function (e) {
                            e.removeEventListener("scroll", n.update, eS);
                          }),
                          l && s.removeEventListener("resize", n.update, eS);
                      }
                    );
                  },
                  data: {},
                },
                {
                  name: "popperOffsets",
                  enabled: !0,
                  phase: "read",
                  fn: function (e) {
                    var t = e.state,
                      n = e.name;
                    t.modifiersData[n] = eP({
                      reference: t.rects.reference,
                      element: t.rects.popper,
                      strategy: "absolute",
                      placement: t.placement,
                    });
                  },
                  data: {},
                },
                {
                  name: "computeStyles",
                  enabled: !0,
                  phase: "beforeWrite",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = n.gpuAcceleration,
                      o = n.adaptive,
                      i = n.roundOffsets,
                      a = void 0 === i || i,
                      l = {
                        placement: eN(t.placement),
                        variation: eD(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: void 0 === r || r,
                        isFixed: "fixed" === t.options.strategy,
                      };
                    null != t.modifiersData.popperOffsets &&
                      (t.styles.popper = Object.assign(
                        {},
                        t.styles.popper,
                        eT(
                          Object.assign({}, l, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: void 0 === o || o,
                            roundOffsets: a,
                          })
                        )
                      )),
                      null != t.modifiersData.arrow &&
                        (t.styles.arrow = Object.assign(
                          {},
                          t.styles.arrow,
                          eT(
                            Object.assign({}, l, {
                              offsets: t.modifiersData.arrow,
                              position: "absolute",
                              adaptive: !1,
                              roundOffsets: a,
                            })
                          )
                        )),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                          "data-popper-placement": t.placement,
                        }
                      ));
                  },
                  data: {},
                },
                {
                  name: "applyStyles",
                  enabled: !0,
                  phase: "write",
                  fn: function (e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function (e) {
                      var n = t.styles[e] || {},
                        r = t.attributes[e] || {},
                        o = t.elements[e];
                      K(o) &&
                        er(o) &&
                        (Object.assign(o.style, n),
                        Object.keys(r).forEach(function (e) {
                          var t = r[e];
                          !1 === t
                            ? o.removeAttribute(e)
                            : o.setAttribute(e, !0 === t ? "" : t);
                        }));
                    });
                  },
                  effect: function (e) {
                    var t = e.state,
                      n = {
                        popper: {
                          position: t.options.strategy,
                          left: "0",
                          top: "0",
                          margin: "0",
                        },
                        arrow: {
                          position: "absolute",
                        },
                        reference: {},
                      };
                    return (
                      Object.assign(t.elements.popper.style, n.popper),
                      (t.styles = n),
                      t.elements.arrow &&
                        Object.assign(t.elements.arrow.style, n.arrow),
                      function () {
                        Object.keys(t.elements).forEach(function (e) {
                          var r = t.elements[e],
                            o = t.attributes[e] || {},
                            i = Object.keys(
                              t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                            ).reduce(function (e, t) {
                              return (e[t] = ""), e;
                            }, {});
                          K(r) &&
                            er(r) &&
                            (Object.assign(r.style, i),
                            Object.keys(o).forEach(function (e) {
                              r.removeAttribute(e);
                            }));
                        });
                      }
                    );
                  },
                  requires: ["computeStyles"],
                },
                {
                  name: "offset",
                  enabled: !0,
                  phase: "main",
                  requires: ["popperOffsets"],
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name,
                      o = n.offset,
                      i = void 0 === o ? [0, 0] : o,
                      a = eE.reduce(function (e, n) {
                        var r, o, a, l, s, u;
                        return (
                          (e[n] =
                            ((r = t.rects),
                            (a =
                              [em, "top"].indexOf((o = eN(n))) >= 0 ? -1 : 1),
                            (s = (l =
                              "function" == typeof i
                                ? i(
                                    Object.assign({}, r, {
                                      placement: n,
                                    })
                                  )
                                : i)[0]),
                            (u = l[1]),
                            (s = s || 0),
                            (u = (u || 0) * a),
                            [em, eh].indexOf(o) >= 0
                              ? {
                                  x: u,
                                  y: s,
                                }
                              : {
                                  x: s,
                                  y: u,
                                })),
                          e
                        );
                      }, {}),
                      l = a[t.placement],
                      s = l.x,
                      u = l.y;
                    null != t.modifiersData.popperOffsets &&
                      ((t.modifiersData.popperOffsets.x += s),
                      (t.modifiersData.popperOffsets.y += u)),
                      (t.modifiersData[r] = a);
                  },
                },
                {
                  name: "flip",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name;
                    if (!t.modifiersData[r]._skip) {
                      for (
                        var o = n.mainAxis,
                          i = void 0 === o || o,
                          a = n.altAxis,
                          l = void 0 === a || a,
                          s = n.fallbackPlacements,
                          u = n.padding,
                          c = n.boundary,
                          f = n.rootBoundary,
                          d = n.altBoundary,
                          p = n.flipVariations,
                          h = void 0 === p || p,
                          m = n.allowedAutoPlacements,
                          v = t.options.placement,
                          b = eN(v),
                          y = [v]
                            .concat(
                              s ||
                                (b !== v && h
                                  ? (function (e) {
                                      if (eN(e) === ev) return [];
                                      var t = eI(e);
                                      return [eL(e), t, eL(t)];
                                    })(v)
                                  : [eI(v)])
                            )
                            .reduce(function (e, n) {
                              var r, o, i, a, l, s, d, p, v, b, y, g;
                              return e.concat(
                                eN(n) === ev
                                  ? ((o = (r = {
                                      placement: n,
                                      boundary: c,
                                      rootBoundary: f,
                                      padding: u,
                                      flipVariations: h,
                                      allowedAutoPlacements: m,
                                    }).placement),
                                    (i = r.boundary),
                                    (a = r.rootBoundary),
                                    (l = r.padding),
                                    (s = r.flipVariations),
                                    (p =
                                      void 0 === (d = r.allowedAutoPlacements)
                                        ? eE
                                        : d),
                                    0 ===
                                      (y = (b = (v = eD(o))
                                        ? s
                                          ? ex
                                          : ex.filter(function (e) {
                                              return eD(e) === v;
                                            })
                                        : eb).filter(function (e) {
                                        return p.indexOf(e) >= 0;
                                      })).length && (y = b),
                                    Object.keys(
                                      (g = y.reduce(function (e, n) {
                                        return (
                                          (e[n] = eH(t, {
                                            placement: n,
                                            boundary: i,
                                            rootBoundary: a,
                                            padding: l,
                                          })[eN(n)]),
                                          e
                                        );
                                      }, {}))
                                    ).sort(function (e, t) {
                                      return g[e] - g[t];
                                    }))
                                  : n
                              );
                            }, []),
                          g = t.rects.reference,
                          w = t.rects.popper,
                          x = new Map(),
                          E = !0,
                          O = y[0],
                          k = 0;
                        k < y.length;
                        k++
                      ) {
                        var C = y[k],
                          S = eN(C),
                          N = eD(C) === ey,
                          D = ["top", ep].indexOf(S) >= 0,
                          M = D ? "width" : "height",
                          P = eH(t, {
                            placement: C,
                            boundary: c,
                            rootBoundary: f,
                            altBoundary: d,
                            padding: u,
                          }),
                          _ = D ? (N ? eh : em) : N ? ep : "top";
                        g[M] > w[M] && (_ = eI(_));
                        var T = eI(_),
                          j = [];
                        if (
                          (i && j.push(P[S] <= 0),
                          l && j.push(P[_] <= 0, P[T] <= 0),
                          j.every(function (e) {
                            return e;
                          }))
                        ) {
                          (O = C), (E = !1);
                          break;
                        }
                        x.set(C, j);
                      }
                      if (E)
                        for (
                          var I = h ? 3 : 1,
                            A = function (e) {
                              var t = y.find(function (t) {
                                var n = x.get(t);
                                if (n)
                                  return n.slice(0, e).every(function (e) {
                                    return e;
                                  });
                              });
                              if (t) return (O = t), "break";
                            },
                            L = I;
                          L > 0 && "break" !== A(L);
                          L--
                        );
                      t.placement !== O &&
                        ((t.modifiersData[r]._skip = !0),
                        (t.placement = O),
                        (t.reset = !0));
                    }
                  },
                  requiresIfExists: ["offset"],
                  data: {
                    _skip: !1,
                  },
                },
                {
                  name: "preventOverflow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name,
                      o = n.mainAxis,
                      i = n.altAxis,
                      a = n.boundary,
                      l = n.rootBoundary,
                      s = n.altBoundary,
                      u = n.padding,
                      c = n.tether,
                      f = void 0 === c || c,
                      d = n.tetherOffset,
                      p = void 0 === d ? 0 : d,
                      h = eH(t, {
                        boundary: a,
                        rootBoundary: l,
                        padding: u,
                        altBoundary: s,
                      }),
                      m = eN(t.placement),
                      v = eD(t.placement),
                      b = !v,
                      y = eM(m),
                      g = "x" === y ? "y" : "x",
                      w = t.modifiersData.popperOffsets,
                      x = t.rects.reference,
                      E = t.rects.popper,
                      O =
                        "function" == typeof p
                          ? p(
                              Object.assign({}, t.rects, {
                                placement: t.placement,
                              })
                            )
                          : p,
                      k =
                        "number" == typeof O
                          ? {
                              mainAxis: O,
                              altAxis: O,
                            }
                          : Object.assign(
                              {
                                mainAxis: 0,
                                altAxis: 0,
                              },
                              O
                            ),
                      C = t.modifiersData.offset
                        ? t.modifiersData.offset[t.placement]
                        : null,
                      S = {
                        x: 0,
                        y: 0,
                      };
                    if (w) {
                      if (void 0 === o || o) {
                        var N,
                          D = "y" === y ? "top" : em,
                          M = "y" === y ? ep : eh,
                          P = "y" === y ? "height" : "width",
                          _ = w[y],
                          T = _ + h[D],
                          j = _ - h[M],
                          I = f ? -E[P] / 2 : 0,
                          A = v === ey ? x[P] : E[P],
                          L = v === ey ? -E[P] : -x[P],
                          R = t.elements.arrow,
                          W =
                            f && R
                              ? es(R)
                              : {
                                  width: 0,
                                  height: 0,
                                },
                          z = t.modifiersData["arrow#persistent"]
                            ? t.modifiersData["arrow#persistent"].padding
                            : eB(),
                          B = z[D],
                          U = z[M],
                          $ = eq(0, x[P], W[P]),
                          H = b
                            ? x[P] / 2 - I - $ - B - k.mainAxis
                            : A - $ - B - k.mainAxis,
                          q = b
                            ? -x[P] / 2 + I + $ + U + k.mainAxis
                            : L + $ + U + k.mainAxis,
                          V = t.elements.arrow && ed(t.elements.arrow),
                          F = V
                            ? "y" === y
                              ? V.clientTop || 0
                              : V.clientLeft || 0
                            : 0,
                          G = null != (N = null == C ? void 0 : C[y]) ? N : 0,
                          K = eq(
                            f ? Z(T, _ + H - G - F) : T,
                            _,
                            f ? Y(j, _ + q - G) : j
                          );
                        (w[y] = K), (S[y] = K - _);
                      }
                      if (void 0 !== i && i) {
                        var X,
                          Q,
                          J = w[g],
                          ee = "y" === g ? "height" : "width",
                          et = J + h["x" === y ? "top" : em],
                          en = J - h["x" === y ? ep : eh],
                          er = -1 !== ["top", em].indexOf(m),
                          eo = null != (X = null == C ? void 0 : C[g]) ? X : 0,
                          ei = er ? et : J - x[ee] - E[ee] - eo + k.altAxis,
                          ea = er ? J + x[ee] + E[ee] - eo - k.altAxis : en,
                          el =
                            f && er
                              ? (Q = eq(ei, J, ea)) > ea
                                ? ea
                                : Q
                              : eq(f ? ei : et, J, f ? ea : en);
                        (w[g] = el), (S[g] = el - J);
                      }
                      t.modifiersData[r] = S;
                    }
                  },
                  requiresIfExists: ["offset"],
                },
                {
                  name: "arrow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t,
                      n,
                      r = e.state,
                      o = e.name,
                      i = e.options,
                      a = r.elements.arrow,
                      l = r.modifiersData.popperOffsets,
                      s = eN(r.placement),
                      u = eM(s),
                      c = [em, eh].indexOf(s) >= 0 ? "height" : "width";
                    if (a && l) {
                      var f = eU(
                          "number" !=
                            typeof (t =
                              "function" == typeof (t = i.padding)
                                ? t(
                                    Object.assign({}, r.rects, {
                                      placement: r.placement,
                                    })
                                  )
                                : t)
                            ? t
                            : e$(t, eb)
                        ),
                        d = es(a),
                        p =
                          r.rects.reference[c] +
                          r.rects.reference[u] -
                          l[u] -
                          r.rects.popper[c],
                        h = l[u] - r.rects.reference[u],
                        m = ed(a),
                        v = m
                          ? "y" === u
                            ? m.clientHeight || 0
                            : m.clientWidth || 0
                          : 0,
                        b = f["y" === u ? "top" : em],
                        y = v - d[c] - f["y" === u ? ep : eh],
                        g = v / 2 - d[c] / 2 + (p / 2 - h / 2),
                        w = eq(b, g, y);
                      r.modifiersData[o] =
                        (((n = {})[u] = w), (n.centerOffset = w - g), n);
                    }
                  },
                  effect: function (e) {
                    var t = e.state,
                      n = e.options.element,
                      r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r &&
                      ("string" != typeof r ||
                        (r = t.elements.popper.querySelector(r))) &&
                      eR(t.elements.popper, r) &&
                      (t.elements.arrow = r);
                  },
                  requires: ["popperOffsets"],
                  requiresIfExists: ["preventOverflow"],
                },
                {
                  name: "hide",
                  enabled: !0,
                  phase: "main",
                  requiresIfExists: ["preventOverflow"],
                  fn: function (e) {
                    var t = e.state,
                      n = e.name,
                      r = t.rects.reference,
                      o = t.rects.popper,
                      i = t.modifiersData.preventOverflow,
                      a = eH(t, {
                        elementContext: "reference",
                      }),
                      l = eH(t, {
                        altBoundary: !0,
                      }),
                      s = eV(a, r),
                      u = eV(l, o, i),
                      c = eF(s),
                      f = eF(u);
                    (t.modifiersData[n] = {
                      referenceClippingOffsets: s,
                      popperEscapeOffsets: u,
                      isReferenceHidden: c,
                      hasPopperEscaped: f,
                    }),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                          "data-popper-reference-hidden": c,
                          "data-popper-escaped": f,
                        }
                      ));
                  },
                },
              ],
            }).defaultModifiers)
              ? []
              : o),
          (l = void 0 === (a = r.defaultOptions) ? ek : a),
          function (e, t, n) {
            void 0 === n && (n = l);
            var r,
              o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, ek, l),
                modifiersData: {},
                elements: {
                  reference: e,
                  popper: t,
                },
                attributes: {},
                styles: {},
              },
              a = [],
              s = !1,
              u = {
                state: o,
                setOptions: function (n) {
                  var r,
                    s,
                    f,
                    d,
                    p,
                    h = "function" == typeof n ? n(o.options) : n;
                  c(),
                    (o.options = Object.assign({}, l, o.options, h)),
                    (o.scrollParents = {
                      reference: G(e)
                        ? ec(e)
                        : e.contextElement
                        ? ec(e.contextElement)
                        : [],
                      popper: ec(t),
                    });
                  var m =
                    ((s = Object.keys(
                      (r = []
                        .concat(i, o.options.modifiers)
                        .reduce(function (e, t) {
                          var n = e[t.name];
                          return (
                            (e[t.name] = n
                              ? Object.assign({}, n, t, {
                                  options: Object.assign(
                                    {},
                                    n.options,
                                    t.options
                                  ),
                                  data: Object.assign({}, n.data, t.data),
                                })
                              : t),
                            e
                          );
                        }, {}))
                    ).map(function (e) {
                      return r[e];
                    })),
                    (f = new Map()),
                    (d = new Set()),
                    (p = []),
                    s.forEach(function (e) {
                      f.set(e.name, e);
                    }),
                    s.forEach(function (e) {
                      d.has(e.name) ||
                        (function e(t) {
                          d.add(t.name),
                            []
                              .concat(
                                t.requires || [],
                                t.requiresIfExists || []
                              )
                              .forEach(function (t) {
                                if (!d.has(t)) {
                                  var n = f.get(t);
                                  n && e(n);
                                }
                              }),
                            p.push(t);
                        })(e);
                    }),
                    eO.reduce(function (e, t) {
                      return e.concat(
                        p.filter(function (e) {
                          return e.phase === t;
                        })
                      );
                    }, []));
                  return (
                    (o.orderedModifiers = m.filter(function (e) {
                      return e.enabled;
                    })),
                    o.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        n = e.options,
                        r = e.effect;
                      if ("function" == typeof r) {
                        var i = r({
                          state: o,
                          name: t,
                          instance: u,
                          options: void 0 === n ? {} : n,
                        });
                        a.push(i || function () {});
                      }
                    }),
                    u.update()
                  );
                },
                forceUpdate: function () {
                  if (!s) {
                    var e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      l,
                      c,
                      f,
                      d,
                      p,
                      h,
                      m = o.elements,
                      v = m.reference,
                      b = m.popper;
                    if (eC(v, b)) {
                      (o.rects = {
                        reference:
                          ((t = ed(b)),
                          (n = "fixed" === o.options.strategy),
                          (r = K(t)),
                          (c =
                            K(t) &&
                            ((a =
                              Q((i = t.getBoundingClientRect()).width) /
                                t.offsetWidth || 1),
                            (l = Q(i.height) / t.offsetHeight || 1),
                            1 !== a || 1 !== l)),
                          (f = eo(t)),
                          (d = et(v, c, n)),
                          (p = {
                            scrollLeft: 0,
                            scrollTop: 0,
                          }),
                          (h = {
                            x: 0,
                            y: 0,
                          }),
                          (r || (!r && !n)) &&
                            (("body" !== er(t) || el(f)) &&
                              (p =
                                (e = t) !== F(e) && K(e)
                                  ? {
                                      scrollLeft: e.scrollLeft,
                                      scrollTop: e.scrollTop,
                                    }
                                  : en(e)),
                            K(t)
                              ? ((h = et(t, !0)),
                                (h.x += t.clientLeft),
                                (h.y += t.clientTop))
                              : f && (h.x = ei(f))),
                          {
                            x: d.left + p.scrollLeft - h.x,
                            y: d.top + p.scrollTop - h.y,
                            width: d.width,
                            height: d.height,
                          }),
                        popper: es(b),
                      }),
                        (o.reset = !1),
                        (o.placement = o.options.placement),
                        o.orderedModifiers.forEach(function (e) {
                          return (o.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (var y = 0; y < o.orderedModifiers.length; y++) {
                        if (!0 === o.reset) {
                          (o.reset = !1), (y = -1);
                          continue;
                        }
                        var g = o.orderedModifiers[y],
                          w = g.fn,
                          x = g.options,
                          E = void 0 === x ? {} : x,
                          O = g.name;
                        "function" == typeof w &&
                          (o =
                            w({
                              state: o,
                              options: E,
                              name: O,
                              instance: u,
                            }) || o);
                      }
                    }
                  }
                },
                update: function () {
                  return (
                    r ||
                      (r = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (r = void 0),
                            e(
                              new Promise(function (e) {
                                u.forceUpdate(), e(o);
                              })
                            );
                        });
                      })),
                    r
                  );
                },
                destroy: function () {
                  c(), (s = !0);
                },
              };
            if (!eC(e, t)) return u;
            function c() {
              a.forEach(function (e) {
                return e();
              }),
                (a = []);
            }
            return (
              u.setOptions(n).then(function (e) {
                !s && n.onFirstUpdate && n.onFirstUpdate(e);
              }),
              u
            );
          }),
        eK = n(5155);
      function eX(e, t) {
        var n;
        let r = e.target;
        if (e.button > 0) return !1;
        if (r) {
          let o = eY(r);
          if (!o.contains(r)) return !1;
        }
        return !(null == (n = t.current) ? void 0 : n.contains(r));
      }
      function eY(e) {
        var t;
        return null != (t = null == e ? void 0 : e.ownerDocument)
          ? t
          : document;
      }
      var [eZ, eQ, eJ, e0] = (function () {
          let e = w(O),
            t = () => w(k()),
            n = (e) =>
              (function (e) {
                let t = k(),
                  [n, r] = (0, s.useState)(-1),
                  o = (0, s.useRef)(null);
                g(
                  () => () => {
                    o.current && t.unregister(o.current);
                  },
                  []
                ),
                  g(() => {
                    if (!o.current) return;
                    let e = Number(o.current.dataset.index);
                    n == e || Number.isNaN(e) || r(e);
                  });
                let i = e ? w(t.register(e)) : w(t.register);
                return {
                  descendants: t,
                  index: n,
                  enabledIndex: t.enabledIndexOf(o.current),
                  register: (0, c.lq)(i, o),
                };
              })(e),
            r = () =>
              (function () {
                let e = (0, s.useRef)(new x());
                return g(() => () => e.current.destroy()), e.current;
              })();
          return [e, t, r, n];
        })(),
        [e1, e2] = (0, E.k)({
          strict: !1,
          name: "MenuContext",
        });
      function e5(e) {
        var t;
        return null != (t = null == e ? void 0 : e.ownerDocument)
          ? t
          : document;
      }
      function e3(e) {
        let t = e5(e);
        return t.activeElement === e;
      }
      function e9(e = {}) {
        let {
            id: t,
            closeOnSelect: n = !0,
            closeOnBlur: r = !0,
            initialFocusRef: o,
            autoSelect: i = !0,
            isLazy: a,
            isOpen: l,
            defaultIsOpen: u,
            onClose: f,
            onOpen: d,
            placement: p = "bottom-start",
            lazyBehavior: h = "unmount",
            direction: m,
            computePositionOnMount: v = !1,
            ...b
          } = e,
          y = (0, s.useRef)(null),
          g = (0, s.useRef)(null),
          w = eJ(),
          x = (0, s.useCallback)(() => {
            requestAnimationFrame(() => {
              var e;
              null == (e = y.current) ||
                e.focus({
                  preventScroll: !1,
                });
            });
          }, []),
          E = (0, s.useCallback)(() => {
            let e = setTimeout(() => {
              var e;
              if (o) null == (e = o.current) || e.focus();
              else {
                let t = w.firstEnabled();
                t && U(t.index);
              }
            });
            X.current.add(e);
          }, [w, o]),
          O = (0, s.useCallback)(() => {
            let e = setTimeout(() => {
              let e = w.lastEnabled();
              e && U(e.index);
            });
            X.current.add(e);
          }, [w]),
          k = (0, s.useCallback)(() => {
            null == d || d(), i ? E() : x();
          }, [i, E, x, d]),
          {
            isOpen: C,
            onOpen: _,
            onClose: j,
            onToggle: I,
          } = (function (e = {}) {
            let { onClose: t, onOpen: n, isOpen: r, id: o } = e,
              i = (0, eK.W)(n),
              a = (0, eK.W)(t),
              [l, u] = (0, s.useState)(e.defaultIsOpen || !1),
              c = void 0 !== r ? r : l,
              f = void 0 !== r,
              d = (0, s.useId)(),
              p = null != o ? o : `disclosure-${d}`,
              h = (0, s.useCallback)(() => {
                f || u(!1), null == a || a();
              }, [f, a]),
              m = (0, s.useCallback)(() => {
                f || u(!0), null == i || i();
              }, [f, i]),
              v = (0, s.useCallback)(() => {
                c ? h() : m();
              }, [c, m, h]);
            return {
              isOpen: c,
              onOpen: m,
              onClose: h,
              onToggle: v,
              isControlled: f,
              getButtonProps: function (e = {}) {
                return {
                  ...e,
                  "aria-expanded": c,
                  "aria-controls": p,
                  onClick(t) {
                    var n;
                    null == (n = e.onClick) || n.call(e, t), v();
                  },
                };
              },
              getDisclosureProps: function (e = {}) {
                return {
                  ...e,
                  hidden: !c,
                  id: p,
                };
              },
            };
          })({
            isOpen: l,
            defaultIsOpen: u,
            onClose: f,
            onOpen: k,
          });
        !(function (e) {
          let { ref: t, handler: n, enabled: r = !0 } = e,
            o = (0, eK.W)(n),
            i = (0, s.useRef)({
              isPointerDown: !1,
              ignoreEmulatedMouseEvents: !1,
            }),
            a = i.current;
          (0, s.useEffect)(() => {
            if (!r) return;
            let e = (e) => {
                eX(e, t) && (a.isPointerDown = !0);
              },
              i = (e) => {
                if (a.ignoreEmulatedMouseEvents) {
                  a.ignoreEmulatedMouseEvents = !1;
                  return;
                }
                a.isPointerDown &&
                  n &&
                  eX(e, t) &&
                  ((a.isPointerDown = !1), o(e));
              },
              l = (e) => {
                (a.ignoreEmulatedMouseEvents = !0),
                  n &&
                    a.isPointerDown &&
                    eX(e, t) &&
                    ((a.isPointerDown = !1), o(e));
              },
              s = eY(t.current);
            return (
              s.addEventListener("mousedown", e, !0),
              s.addEventListener("mouseup", i, !0),
              s.addEventListener("touchstart", e, !0),
              s.addEventListener("touchend", l, !0),
              () => {
                s.removeEventListener("mousedown", e, !0),
                  s.removeEventListener("mouseup", i, !0),
                  s.removeEventListener("touchstart", e, !0),
                  s.removeEventListener("touchend", l, !0);
              }
            );
          }, [n, t, o, a, r]);
        })({
          enabled: C && r,
          ref: y,
          handler: (e) => {
            var t;
            (null == (t = g.current) ? void 0 : t.contains(e.target)) || j();
          },
        });
        let W = (function (e = {}) {
            let {
                enabled: t = !0,
                modifiers: n,
                placement: r = "bottom",
                strategy: o = "absolute",
                arrowPadding: i = 8,
                eventListeners: a = !0,
                offset: l,
                gutter: u = 8,
                flip: f = !0,
                boundary: d = "clippingParents",
                preventOverflow: p = !0,
                matchWidth: h,
                direction: m = "ltr",
              } = e,
              v = (0, s.useRef)(null),
              b = (0, s.useRef)(null),
              y = (0, s.useRef)(null),
              g = (function (e, t = "ltr") {
                var n, r;
                let o = (null == (n = q[e]) ? void 0 : n[t]) || e;
                return "ltr" === t ? o : null != (r = V[e]) ? r : o;
              })(r, m),
              w = (0, s.useRef)(() => {}),
              x = (0, s.useCallback)(() => {
                var e;
                t &&
                  v.current &&
                  b.current &&
                  (null == (e = w.current) || e.call(w),
                  (y.current = eG(v.current, b.current, {
                    placement: g,
                    modifiers: [
                      $,
                      z,
                      R,
                      {
                        ...L,
                        enabled: !!h,
                      },
                      {
                        name: "eventListeners",
                        ...("object" == typeof a
                          ? {
                              enabled: !0,
                              options: {
                                ...A,
                                ...a,
                              },
                            }
                          : {
                              enabled: a,
                              options: A,
                            }),
                      },
                      {
                        name: "arrow",
                        options: {
                          padding: i,
                        },
                      },
                      {
                        name: "offset",
                        options: {
                          offset: null != l ? l : [0, u],
                        },
                      },
                      {
                        name: "flip",
                        enabled: !!f,
                        options: {
                          padding: 8,
                        },
                      },
                      {
                        name: "preventOverflow",
                        enabled: !!p,
                        options: {
                          boundary: d,
                        },
                      },
                      ...(null != n ? n : []),
                    ],
                    strategy: o,
                  })),
                  y.current.forceUpdate(),
                  (w.current = y.current.destroy));
              }, [g, t, n, h, a, i, l, u, f, p, d, o]);
            (0, s.useEffect)(
              () => () => {
                var e;
                v.current ||
                  b.current ||
                  (null == (e = y.current) || e.destroy(), (y.current = null));
              },
              []
            );
            let E = (0, s.useCallback)(
                (e) => {
                  (v.current = e), x();
                },
                [x]
              ),
              O = (0, s.useCallback)(
                (e = {}, t = null) => ({
                  ...e,
                  ref: (0, c.lq)(E, t),
                }),
                [E]
              ),
              k = (0, s.useCallback)(
                (e) => {
                  (b.current = e), x();
                },
                [x]
              ),
              C = (0, s.useCallback)(
                (e = {}, t = null) => ({
                  ...e,
                  ref: (0, c.lq)(k, t),
                  style: {
                    ...e.style,
                    position: o,
                    minWidth: h ? void 0 : "max-content",
                    inset: "0 auto auto 0",
                  },
                }),
                [o, k, h]
              ),
              S = (0, s.useCallback)((e = {}, t = null) => {
                let { size: n, shadowColor: r, bg: o, style: i, ...a } = e;
                return {
                  ...a,
                  ref: t,
                  "data-popper-arrow": "",
                  style: (function (e) {
                    let { size: t, shadowColor: n, bg: r, style: o } = e,
                      i = {
                        ...o,
                        position: "absolute",
                      };
                    return (
                      t && (i["--popper-arrow-size"] = t),
                      n && (i["--popper-arrow-shadow-color"] = n),
                      r && (i["--popper-arrow-bg"] = r),
                      i
                    );
                  })(e),
                };
              }, []),
              N = (0, s.useCallback)(
                (e = {}, t = null) => ({
                  ...e,
                  ref: t,
                  "data-popper-arrow-inner": "",
                }),
                []
              );
            return {
              update() {
                var e;
                null == (e = y.current) || e.update();
              },
              forceUpdate() {
                var e;
                null == (e = y.current) || e.forceUpdate();
              },
              transformOrigin: T.transformOrigin.varRef,
              referenceRef: E,
              popperRef: k,
              getPopperProps: C,
              getArrowProps: S,
              getArrowInnerProps: N,
              getReferenceProps: O,
            };
          })({
            ...b,
            enabled: C || v,
            placement: p,
            direction: m,
          }),
          [B, U] = (0, s.useState)(-1);
        (0, P.r)(() => {
          C || U(-1);
        }, [C]),
          (function (e, t) {
            let { shouldFocus: n, visible: r, focusRef: o } = t,
              i = n && !r;
            (0, P.r)(() => {
              if (
                !i ||
                (function (e) {
                  let t = e.current;
                  if (!t) return !1;
                  let n = N(t).activeElement;
                  return (
                    !(!n || t.contains(n)) &&
                    !!(
                      n &&
                      S(n) &&
                      (function (e) {
                        var t;
                        if (
                          !S(e) ||
                          (function e(t) {
                            return (
                              !!(t.parentElement && e(t.parentElement)) ||
                              t.hidden
                            );
                          })(e) ||
                          !0 === Boolean((t = e).getAttribute("disabled")) ||
                          !0 === Boolean(t.getAttribute("aria-disabled"))
                        )
                          return !1;
                        let { localName: n } = e;
                        if (
                          ["input", "select", "textarea", "button"].indexOf(
                            n
                          ) >= 0
                        )
                          return !0;
                        let r = {
                          a: () => e.hasAttribute("href"),
                          audio: () => e.hasAttribute("controls"),
                          video: () => e.hasAttribute("controls"),
                        };
                        return n in r
                          ? r[n]()
                          : !!(function (e) {
                              let t = e.getAttribute("contenteditable");
                              return "false" !== t && null != t;
                            })(e) || D(e);
                      })(n) &&
                      !M(n)
                    )
                  );
                })(e)
              )
                return;
              let t = (null == o ? void 0 : o.current) || e.current;
              t &&
                requestAnimationFrame(() => {
                  t.focus();
                });
            }, [i, e, o]);
          })(y, {
            focusRef: g,
            visible: C,
            shouldFocus: !0,
          });
        let H = (function (e) {
            let { isOpen: t, ref: n } = e,
              [r, o] = (0, s.useState)(t),
              [i, a] = (0, s.useState)(!1);
            return (
              (0, s.useEffect)(() => {
                i || (o(t), a(!0));
              }, [t, i, r]),
              !(function (e, t, n, r) {
                let o = (0, eK.W)(n);
                (0, s.useEffect)(() => {
                  let i =
                    "function" == typeof e ? e() : null != e ? e : document;
                  if (n && i)
                    return (
                      i.addEventListener(t, o, r),
                      () => {
                        i.removeEventListener(t, o, r);
                      }
                    );
                }, [t, e, r, o, n]),
                  () => {
                    let n =
                      "function" == typeof e ? e() : null != e ? e : document;
                    null == n || n.removeEventListener(t, o, r);
                  };
              })(
                () => n.current,
                "animationend",
                () => {
                  o(t);
                }
              ),
              {
                present: !(!t && !r),
                onComplete() {
                  var e, t, r;
                  let o =
                      null !=
                      (r = null == (t = N(n.current)) ? void 0 : t.defaultView)
                        ? r
                        : window,
                    i = new o.CustomEvent("animationend", {
                      bubbles: !0,
                    });
                  null == (e = n.current) || e.dispatchEvent(i);
                },
              }
            );
          })({
            isOpen: C,
            ref: y,
          }),
          [F, G] = (function (e, ...t) {
            let n = (0, s.useId)(),
              r = e || n;
            return (0, s.useMemo)(() => t.map((e) => `${e}-${r}`), [r, t]);
          })(t, "menu-button", "menu-list"),
          K = (0, s.useCallback)(() => {
            _(), x();
          }, [_, x]),
          X = (0, s.useRef)(new Set([]));
        !(function (e, t = []) {
          (0, s.useEffect)(() => () => e(), t);
        })(() => {
          X.current.forEach((e) => clearTimeout(e)), X.current.clear();
        });
        let Y = (0, s.useCallback)(() => {
            _(), E();
          }, [E, _]),
          Z = (0, s.useCallback)(() => {
            _(), O();
          }, [_, O]),
          Q = (0, s.useCallback)(() => {
            var e, t;
            let n = e5(y.current),
              r =
                null == (e = y.current) ? void 0 : e.contains(n.activeElement);
            if (!(C && !r)) return;
            let o = null == (t = w.item(B)) ? void 0 : t.node;
            null == o || o.focus();
          }, [C, B, w]);
        return {
          openAndFocusMenu: K,
          openAndFocusFirstItem: Y,
          openAndFocusLastItem: Z,
          onTransitionEnd: Q,
          unstable__animationState: H,
          descendants: w,
          popper: W,
          buttonId: F,
          menuId: G,
          forceUpdate: W.forceUpdate,
          orientation: "vertical",
          isOpen: C,
          onToggle: I,
          onOpen: _,
          onClose: j,
          menuRef: y,
          buttonRef: g,
          focusedIndex: B,
          closeOnSelect: n,
          closeOnBlur: r,
          autoSelect: i,
          setFocusedIndex: U,
          isLazy: a,
          lazyBehavior: h,
          initialFocusRef: o,
        };
      }
      function e4(e = {}, t = null) {
        let n = e2(),
          {
            onToggle: r,
            popper: o,
            openAndFocusFirstItem: i,
            openAndFocusLastItem: a,
          } = n,
          l = (0, s.useCallback)(
            (e) => {
              let t = e.key,
                n = {
                  Enter: i,
                  ArrowDown: i,
                  ArrowUp: a,
                }[t];
              n && (e.preventDefault(), e.stopPropagation(), n(e));
            },
            [i, a]
          );
        return {
          ...e,
          ref: (0, c.lq)(n.buttonRef, t, o.referenceRef),
          id: n.buttonId,
          "data-active": (0, u.PB)(n.isOpen),
          "aria-expanded": n.isOpen,
          "aria-haspopup": "menu",
          "aria-controls": n.menuId,
          onClick: (0, u.v0)(e.onClick, r),
          onKeyDown: (0, u.v0)(e.onKeyDown, l),
        };
      }
      function e8(e) {
        var t;
        return (
          (function (e) {
            var t;
            if (
              !(
                null != e &&
                "object" == typeof e &&
                "nodeType" in e &&
                e.nodeType === Node.ELEMENT_NODE
              )
            )
              return !1;
            let n = null != (t = e.ownerDocument.defaultView) ? t : window;
            return e instanceof n.HTMLElement;
          })(e) &&
          !!(null == (t = null == e ? void 0 : e.getAttribute("role"))
            ? void 0
            : t.startsWith("menuitem"))
        );
      }
      function e7(e = {}, t = null) {
        let n = e2();
        if (!n)
          throw Error(
            "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
          );
        let {
            focusedIndex: r,
            setFocusedIndex: o,
            menuRef: i,
            isOpen: a,
            onClose: l,
            menuId: f,
            isLazy: d,
            lazyBehavior: p,
            unstable__animationState: h,
          } = n,
          m = eQ(),
          v = (function (e = {}) {
            let { timeout: t = 300, preventDefault: n = () => !0 } = e,
              [r, o] = (0, s.useState)([]),
              i = (0, s.useRef)(),
              a = () => {
                i.current && (clearTimeout(i.current), (i.current = null));
              },
              l = () => {
                a(),
                  (i.current = setTimeout(() => {
                    o([]), (i.current = null);
                  }, t));
              };
            return (
              (0, s.useEffect)(() => a, []),
              function (e) {
                return (t) => {
                  if ("Backspace" === t.key) {
                    let i = [...r];
                    i.pop(), o(i);
                    return;
                  }
                  if (
                    (function (e) {
                      let { key: t } = e;
                      return (
                        1 === t.length ||
                        (t.length > 1 && /[^a-zA-Z0-9]/.test(t))
                      );
                    })(t)
                  ) {
                    let a = r.concat(t.key);
                    n(t) && (t.preventDefault(), t.stopPropagation()),
                      o(a),
                      e(a.join("")),
                      l();
                  }
                };
              }
            );
          })({
            preventDefault: (e) => " " !== e.key && e8(e.target),
          }),
          b = (0, s.useCallback)(
            (e) => {
              let t = e.key,
                n = {
                  Tab: (e) => e.preventDefault(),
                  Escape: l,
                  ArrowDown: () => {
                    let e = m.nextEnabled(r);
                    e && o(e.index);
                  },
                  ArrowUp: () => {
                    let e = m.prevEnabled(r);
                    e && o(e.index);
                  },
                }[t];
              if (n) {
                e.preventDefault(), n(e);
                return;
              }
              let i = v((e) => {
                let t = (function (e, t, n, r) {
                  if (null == t) return r;
                  if (!r) {
                    let o = e.find((e) =>
                      n(e).toLowerCase().startsWith(t.toLowerCase())
                    );
                    return o;
                  }
                  let i = e.filter((e) =>
                    n(e).toLowerCase().startsWith(t.toLowerCase())
                  );
                  if (i.length > 0) {
                    let a;
                    if (i.includes(r)) {
                      let l = i.indexOf(r);
                      return (a = l + 1) === i.length && (a = 0), i[a];
                    }
                    return (a = e.indexOf(i[0])), e[a];
                  }
                  return r;
                })(
                  m.values(),
                  e,
                  (e) => {
                    var t, n;
                    return null !=
                      (n =
                        null == (t = null == e ? void 0 : e.node)
                          ? void 0
                          : t.textContent)
                      ? n
                      : "";
                  },
                  m.item(r)
                );
                if (t) {
                  let n = m.indexOf(t.node);
                  o(n);
                }
              });
              e8(e.target) && i(e);
            },
            [m, r, v, l, o]
          ),
          y = (0, s.useRef)(!1);
        a && (y.current = !0);
        let g = (function (e) {
          let {
            wasSelected: t,
            enabled: n,
            isSelected: r,
            mode: o = "unmount",
          } = e;
          return !n || !!r || ("keepMounted" === o && !!t);
        })({
          wasSelected: y.current,
          enabled: d,
          mode: p,
          isSelected: h.present,
        });
        return {
          ...e,
          ref: (0, c.lq)(i, t),
          children: g ? e.children : null,
          tabIndex: -1,
          role: "menu",
          id: f,
          style: {
            ...e.style,
            transformOrigin: "var(--popper-transform-origin)",
          },
          "aria-orientation": "vertical",
          onKeyDown: (0, u.v0)(e.onKeyDown, b),
        };
      }
      function e6(e = {}) {
        let { popper: t, isOpen: n } = e2();
        return t.getPopperProps({
          ...e,
          style: {
            visibility: n ? "visible" : "hidden",
            ...e.style,
          },
        });
      }
      function te(e = {}, t = null) {
        let {
            onMouseEnter: n,
            onMouseMove: r,
            onMouseLeave: o,
            onClick: i,
            onFocus: a,
            isDisabled: l,
            isFocusable: d,
            closeOnSelect: p,
            type: h,
            ...m
          } = e,
          v = e2(),
          {
            setFocusedIndex: b,
            focusedIndex: y,
            closeOnSelect: g,
            onClose: w,
            menuRef: x,
            isOpen: E,
            menuId: O,
          } = v,
          k = (0, s.useRef)(null),
          C = `${O}-menuitem-${(0, s.useId)()}`,
          { index: S, register: N } = e0({
            disabled: l && !d,
          }),
          D = (0, s.useCallback)(
            (e) => {
              null == n || n(e), l || b(S);
            },
            [b, S, l, n]
          ),
          M = (0, s.useCallback)(
            (e) => {
              null == r || r(e), k.current && !e3(k.current) && D(e);
            },
            [D, r]
          ),
          _ = (0, s.useCallback)(
            (e) => {
              null == o || o(e), l || b(-1);
            },
            [b, l, o]
          ),
          T = (0, s.useCallback)(
            (e) => {
              null == i || i(e),
                e8(e.currentTarget) && (null != p ? p : g) && w();
            },
            [w, i, g, p]
          ),
          j = (0, s.useCallback)(
            (e) => {
              null == a || a(e), b(S);
            },
            [b, a, S]
          ),
          I = S === y,
          A = l && !d;
        (0, P.r)(() => {
          E &&
            (I && !A && k.current
              ? requestAnimationFrame(() => {
                  var e;
                  null == (e = k.current) || e.focus();
                })
              : x.current && !e3(x.current) && x.current.focus());
        }, [I, A, x, E]);
        let L = (function (e = {}) {
          let {
              ref: t,
              isDisabled: n,
              isFocusable: r,
              clickOnEnter: o = !0,
              clickOnSpace: i = !0,
              onMouseDown: a,
              onMouseUp: l,
              onClick: d,
              onKeyDown: p,
              onKeyUp: h,
              tabIndex: m,
              onMouseOver: v,
              onMouseLeave: b,
              ...y
            } = e,
            [g, w] = (0, s.useState)(!0),
            [x, E] = (0, s.useState)(!1),
            O = (function () {
              let e = (0, s.useRef)(new Map()),
                t = e.current,
                n = (0, s.useCallback)((t, n, r, o) => {
                  e.current.set(r, {
                    type: n,
                    el: t,
                    options: o,
                  }),
                    t.addEventListener(n, r, o);
                }, []),
                r = (0, s.useCallback)((t, n, r, o) => {
                  t.removeEventListener(n, r, o), e.current.delete(r);
                }, []);
              return (
                (0, s.useEffect)(
                  () => () => {
                    t.forEach((e, t) => {
                      r(e.el, e.type, t, e.options);
                    });
                  },
                  [r, t]
                ),
                {
                  add: n,
                  remove: r,
                }
              );
            })(),
            k = (e) => {
              e && "BUTTON" !== e.tagName && w(!1);
            },
            C = n && !r,
            S = (0, s.useCallback)(
              (e) => {
                if (n) {
                  e.stopPropagation(), e.preventDefault();
                  return;
                }
                let t = e.currentTarget;
                t.focus(), null == d || d(e);
              },
              [n, d]
            ),
            N = (0, s.useCallback)(
              (e) => {
                x &&
                  f(e) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  E(!1),
                  O.remove(document, "keyup", N, !1));
              },
              [x, O]
            ),
            D = (0, s.useCallback)(
              (e) => {
                if (
                  (null == p || p(e),
                  n ||
                    e.defaultPrevented ||
                    e.metaKey ||
                    !f(e.nativeEvent) ||
                    g)
                )
                  return;
                let t = o && "Enter" === e.key,
                  r = i && " " === e.key;
                if ((r && (e.preventDefault(), E(!0)), t)) {
                  e.preventDefault();
                  let a = e.currentTarget;
                  a.click();
                }
                O.add(document, "keyup", N, !1);
              },
              [n, g, p, o, i, O, N]
            ),
            M = (0, s.useCallback)(
              (e) => {
                if (
                  (null == h || h(e),
                  n ||
                    e.defaultPrevented ||
                    e.metaKey ||
                    !f(e.nativeEvent) ||
                    g)
                )
                  return;
                let t = i && " " === e.key;
                if (t) {
                  e.preventDefault(), E(!1);
                  let r = e.currentTarget;
                  r.click();
                }
              },
              [i, g, n, h]
            ),
            P = (0, s.useCallback)(
              (e) => {
                0 === e.button && (E(!1), O.remove(document, "mouseup", P, !1));
              },
              [O]
            ),
            _ = (0, s.useCallback)(
              (e) => {
                if (0 !== e.button) return;
                if (n) {
                  e.stopPropagation(), e.preventDefault();
                  return;
                }
                g || E(!0);
                let t = e.currentTarget;
                t.focus({
                  preventScroll: !0,
                }),
                  O.add(document, "mouseup", P, !1),
                  null == a || a(e);
              },
              [n, g, a, O, P]
            ),
            T = (0, s.useCallback)(
              (e) => {
                0 === e.button && (g || E(!1), null == l || l(e));
              },
              [l, g]
            ),
            j = (0, s.useCallback)(
              (e) => {
                if (n) {
                  e.preventDefault();
                  return;
                }
                null == v || v(e);
              },
              [n, v]
            ),
            I = (0, s.useCallback)(
              (e) => {
                x && (e.preventDefault(), E(!1)), null == b || b(e);
              },
              [x, b]
            ),
            A = (0, c.lq)(t, k);
          return g
            ? {
                ...y,
                ref: A,
                type: "button",
                "aria-disabled": C ? void 0 : n,
                disabled: C,
                onClick: S,
                onMouseDown: a,
                onMouseUp: l,
                onKeyUp: h,
                onKeyDown: p,
                onMouseOver: v,
                onMouseLeave: b,
              }
            : {
                ...y,
                ref: A,
                role: "button",
                "data-active": (0, u.PB)(x),
                "aria-disabled": n ? "true" : void 0,
                tabIndex: C ? void 0 : g ? m : m || 0,
                onClick: S,
                onMouseDown: _,
                onMouseUp: T,
                onKeyUp: M,
                onKeyDown: D,
                onMouseOver: j,
                onMouseLeave: I,
              };
        })({
          onClick: T,
          onFocus: j,
          onMouseEnter: D,
          onMouseMove: M,
          onMouseLeave: _,
          ref: (0, c.lq)(N, k, t),
          isDisabled: l,
          isFocusable: d,
        });
        return {
          ...m,
          ...L,
          type: null != h ? h : L.type,
          id: C,
          role: "menuitem",
          tabIndex: I ? 0 : -1,
        };
      }
    },
    4167: function (e, t, n) {
      n.d(t, {
        s: function () {
          return p;
        },
      });
      var r = n(7405),
        o = n(5059),
        i = n(3292),
        a = n(5893),
        l = (0, o.G)((e, t) => {
          let n = (0, r.x)();
          return (0, a.jsx)(i.m.span, {
            ref: t,
            ...e,
            __css: n.command,
            className: "chakra-menu__command",
          });
        });
      l.displayName = "MenuCommand";
      var s = n(7294),
        u = (0, o.G)((e, t) => {
          let { type: n, ...o } = e,
            l = (0, r.x)(),
            u = o.as || n ? (null != n ? n : void 0) : "button",
            c = (0, s.useMemo)(
              () => ({
                textDecoration: "none",
                color: "inherit",
                userSelect: "none",
                display: "flex",
                width: "100%",
                alignItems: "center",
                textAlign: "start",
                flex: "0 0 auto",
                outline: 0,
                ...l.item,
              }),
              [l.item]
            );
          return (0, a.jsx)(i.m.button, {
            ref: t,
            type: u,
            ...o,
            __css: c,
          });
        }),
        c = n(2804),
        f = n(5432),
        d = (e) => {
          let { className: t, children: n, ...r } = e,
            o = s.Children.only(n),
            l = (0, s.isValidElement)(o)
              ? (0, s.cloneElement)(o, {
                  focusable: "false",
                  "aria-hidden": !0,
                  className: (0, f.cx)("chakra-menu__icon", o.props.className),
                })
              : null,
            u = (0, f.cx)("chakra-menu__icon-wrapper", t);
          return (0, a.jsx)(i.m.span, {
            className: u,
            ...r,
            __css: {
              flexShrink: 0,
            },
            children: l,
          });
        };
      d.displayName = "MenuIcon";
      var p = (0, o.G)((e, t) => {
        let {
            icon: n,
            iconSpacing: r = "0.75rem",
            command: o,
            commandSpacing: i = "0.75rem",
            children: s,
            ...p
          } = e,
          h = (0, c.iX)(p, t),
          m =
            n || o
              ? (0, a.jsx)("span", {
                  style: {
                    pointerEvents: "none",
                    flex: 1,
                  },
                  children: s,
                })
              : s;
        return (0, a.jsxs)(u, {
          ...h,
          className: (0, f.cx)("chakra-menu__menuitem", h.className),
          children: [
            n &&
              (0, a.jsx)(d, {
                fontSize: "0.8em",
                marginEnd: r,
                children: n,
              }),
            m,
            o &&
              (0, a.jsx)(l, {
                marginStart: i,
                children: o,
              }),
          ],
        });
      });
      p.displayName = "MenuItem";
    },
    7405: function (e, t, n) {
      n.d(t, {
        v: function () {
          return p;
        },
        x: function () {
          return d;
        },
      });
      var r = n(2804),
        o = n(5227),
        i = n(1639),
        a = n(3179),
        l = n(5119),
        s = n(5432),
        u = n(7294),
        c = n(5893),
        [f, d] = (0, o.k)({
          name: "MenuStylesContext",
          errorMessage:
            "useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" ",
        }),
        p = (e) => {
          let { children: t } = e,
            n = (0, i.jC)("Menu", e),
            o = (0, a.Lr)(e),
            { direction: d } = (0, l.F)(),
            { descendants: p, ...h } = (0, r.H9)({
              ...o,
              direction: d,
            }),
            m = (0, u.useMemo)(() => h, [h]),
            { isOpen: v, onClose: b, forceUpdate: y } = m;
          return (0, c.jsx)(r.wN, {
            value: p,
            children: (0, c.jsx)(r.Kb, {
              value: m,
              children: (0, c.jsx)(f, {
                value: n,
                children: (0, s.Pu)(t, {
                  isOpen: v,
                  onClose: b,
                  forceUpdate: y,
                }),
              }),
            }),
          });
        };
      p.displayName = "Menu";
    },
    9769: function (e, t, n) {
      n.d(t, {
        iR: function () {
          return en;
        },
        Ms: function () {
          return ei;
        },
        gs: function () {
          return er;
        },
        Uj: function () {
          return eo;
        },
      });
      var r = (e) => (e ? "" : void 0),
        o = (e) => !!e || void 0,
        i = (...e) => e.filter(Boolean).join(" ");
      function a(...e) {
        return function (t) {
          e.some(
            (e) => (null == e || e(t), null == t ? void 0 : t.defaultPrevented)
          );
        };
      }
      function l(e) {
        let { orientation: t, vertical: n, horizontal: r } = e;
        return "vertical" === t ? n : r;
      }
      var s = {
          width: 0,
          height: 0,
        },
        u = (e) => e || s;
      function c(e) {
        let t = !!e.touches;
        return t;
      }
      function f(e, t = "page") {
        return c(e)
          ? (function (e, t = "page") {
              let n = e.touches[0] || e.changedTouches[0];
              return {
                x: n[`${t}X`],
                y: n[`${t}Y`],
              };
            })(e, t)
          : (function (e, t = "page") {
              return {
                x: e[`${t}X`],
                y: e[`${t}Y`],
              };
            })(e, t);
      }
      function d(e, t, n, r) {
        var o;
        return (
          (o = (function (e, t = !1) {
            function n(t) {
              e(t, {
                point: f(t),
              });
            }
            return t
              ? (e) => {
                  let t = (function (e) {
                    var t;
                    let n = null != (t = e.view) ? t : window;
                    return void 0 !== n.PointerEvent &&
                      e instanceof n.PointerEvent
                      ? !("mouse" !== e.pointerType)
                      : e instanceof n.MouseEvent;
                  })(e);
                  (!t || (t && 0 === e.button)) && n(e);
                }
              : n;
          })(n, "pointerdown" === t)),
          e.addEventListener(t, o, r),
          () => {
            e.removeEventListener(t, o, r);
          }
        );
      }
      let p = (1 / 60) * 1e3,
        h =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        m =
          "undefined" != typeof window
            ? (e) => window.requestAnimationFrame(e)
            : (e) => setTimeout(() => e(h()), p),
        v = !0,
        b = !1,
        y = !1,
        g = {
          delta: 0,
          timestamp: 0,
        },
        w = ["read", "update", "preRender", "render", "postRender"],
        x = w.reduce(
          (e, t) => (
            (e[t] = (function (e) {
              let t = [],
                n = [],
                r = 0,
                o = !1,
                i = !1,
                a = new WeakSet(),
                l = {
                  schedule: (e, i = !1, l = !1) => {
                    let s = l && o,
                      u = s ? t : n;
                    return (
                      i && a.add(e),
                      -1 === u.indexOf(e) &&
                        (u.push(e), s && o && (r = t.length)),
                      e
                    );
                  },
                  cancel: (e) => {
                    let t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), a.delete(e);
                  },
                  process: (s) => {
                    if (o) {
                      i = !0;
                      return;
                    }
                    if (
                      ((o = !0),
                      ([t, n] = [n, t]),
                      (n.length = 0),
                      (r = t.length))
                    )
                      for (let u = 0; u < r; u++) {
                        let c = t[u];
                        c(s), a.has(c) && (l.schedule(c), e());
                      }
                    (o = !1), i && ((i = !1), l.process(s));
                  },
                };
              return l;
            })(() => (b = !0))),
            e
          ),
          {}
        ),
        E = w.reduce((e, t) => {
          let n = x[t];
          return (
            (e[t] = (e, t = !1, r = !1) => (b || S(), n.schedule(e, t, r))), e
          );
        }, {}),
        O = w.reduce((e, t) => ((e[t] = x[t].cancel), e), {});
      w.reduce((e, t) => ((e[t] = () => x[t].process(g)), e), {});
      let k = (e) => x[e].process(g),
        C = (e) => {
          (b = !1),
            (g.delta = v ? p : Math.max(Math.min(e - g.timestamp, 40), 1)),
            (g.timestamp = e),
            (y = !0),
            w.forEach(k),
            (y = !1),
            b && ((v = !1), m(C));
        },
        S = () => {
          (b = !0), (v = !0), y || m(C);
        },
        N = () => g;
      var D = Object.defineProperty,
        M = (e, t, n) =>
          t in e
            ? D(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        P = (e, t, n) => (M(e, "symbol" != typeof t ? t + "" : t, n), n),
        _ = class {
          constructor(e, t, n) {
            var r;
            if (
              (P(this, "history", []),
              P(this, "startEvent", null),
              P(this, "lastEvent", null),
              P(this, "lastEventInfo", null),
              P(this, "handlers", {}),
              P(this, "removeListeners", () => {}),
              P(this, "threshold", 3),
              P(this, "win"),
              P(this, "updatePoint", () => {
                if (!(this.lastEvent && this.lastEventInfo)) return;
                let e = j(this.lastEventInfo, this.history),
                  t = null !== this.startEvent,
                  n =
                    (function (e, t) {
                      if ("number" == typeof e && "number" == typeof t)
                        return A(e, t);
                      if (L(e) && L(t)) {
                        let n = A(e.x, t.x),
                          r = A(e.y, t.y);
                        return Math.sqrt(n ** 2 + r ** 2);
                      }
                      return 0;
                    })(e.offset, {
                      x: 0,
                      y: 0,
                    }) >= this.threshold;
                if (!t && !n) return;
                let { timestamp: r } = N();
                this.history.push({
                  ...e.point,
                  timestamp: r,
                });
                let { onStart: o, onMove: i } = this.handlers;
                t ||
                  (null == o || o(this.lastEvent, e),
                  (this.startEvent = this.lastEvent)),
                  null == i || i(this.lastEvent, e);
              }),
              P(this, "onPointerMove", (e, t) => {
                (this.lastEvent = e),
                  (this.lastEventInfo = t),
                  E.update(this.updatePoint, !0);
              }),
              P(this, "onPointerUp", (e, t) => {
                let n = j(t, this.history),
                  { onEnd: r, onSessionEnd: o } = this.handlers;
                null == o || o(e, n),
                  this.end(),
                  r && this.startEvent && (null == r || r(e, n));
              }),
              (this.win = null != (r = e.view) ? r : window),
              c(e) && e.touches.length > 1)
            )
              return;
            (this.handlers = t),
              n && (this.threshold = n),
              e.stopPropagation(),
              e.preventDefault();
            let o = {
                point: f(e),
              },
              { timestamp: i } = N();
            this.history = [
              {
                ...o.point,
                timestamp: i,
              },
            ];
            let { onSessionStart: a } = t;
            null == a || a(e, j(o, this.history)),
              (this.removeListeners = (function (...e) {
                return (t) => e.reduce((e, t) => t(e), t);
              })(
                d(this.win, "pointermove", this.onPointerMove),
                d(this.win, "pointerup", this.onPointerUp),
                d(this.win, "pointercancel", this.onPointerUp)
              ));
          }
          updateHandlers(e) {
            this.handlers = e;
          }
          end() {
            var e;
            null == (e = this.removeListeners) || e.call(this),
              O.update(this.updatePoint);
          }
        };
      function T(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y,
        };
      }
      function j(e, t) {
        return {
          point: e.point,
          delta: T(e.point, t[t.length - 1]),
          offset: T(e.point, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2)
              return {
                x: 0,
                y: 0,
              };
            let n = e.length - 1,
              r = null,
              o = e[e.length - 1];
            for (
              ;
              n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > I(0.1)));

            )
              n--;
            if (!r)
              return {
                x: 0,
                y: 0,
              };
            let i = (o.timestamp - r.timestamp) / 1e3;
            if (0 === i)
              return {
                x: 0,
                y: 0,
              };
            let a = {
              x: (o.x - r.x) / i,
              y: (o.y - r.y) / i,
            };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(t, 0),
        };
      }
      var I = (e) => 1e3 * e;
      function A(e, t) {
        return Math.abs(e - t);
      }
      function L(e) {
        return "x" in e && "y" in e;
      }
      var R = n(7294);
      function W(e) {
        let t = (0, R.useRef)(null);
        return (t.current = e), t;
      }
      var z = n(5155),
        B = n(2366),
        U = Boolean(null == globalThis ? void 0 : globalThis.document)
          ? R.useLayoutEffect
          : R.useEffect,
        $ = n(1103);
      function H(e, t, n) {
        let r = (function (e) {
          if (!Number.isFinite(e)) return 0;
          let t = 1,
            n = 0;
          for (; Math.round(e * t) / t !== e; ) (t *= 10), (n += 1);
          return n;
        })(n);
        return (function (e, t) {
          let n = (function (e) {
              let t = parseFloat(e);
              return "number" != typeof t || Number.isNaN(t) ? 0 : t;
            })(e),
            r = 10 ** (null != t ? t : 10);
          return (n = Math.round(n * r) / r), t ? n.toFixed(t) : n.toString();
        })(Math.round((e - t) / n) * n + t, r);
      }
      function q(e, t, n) {
        return null == e
          ? e
          : (n < t && console.warn("clamp: max cannot be less than min"),
            Math.min(Math.max(e, t), n));
      }
      var V = n(5227),
        F = n(5059),
        G = n(1639),
        K = n(3179),
        X = n(5119),
        Y = n(3292),
        Z = n(5893),
        [Q, J] = (0, V.k)({
          name: "SliderContext",
          hookName: "useSliderContext",
          providerName: "<Slider />",
        }),
        [ee, et] = (0, V.k)({
          name: "SliderStylesContext",
          hookName: "useSliderStyles",
          providerName: "<Slider />",
        }),
        en = (0, F.G)((e, t) => {
          let n = {
              orientation: "horizontal",
              ...e,
            },
            c = (0, G.jC)("Slider", n),
            f = (0, K.Lr)(n),
            { direction: p } = (0, X.F)();
          f.direction = p;
          let {
              getInputProps: h,
              getRootProps: m,
              ...v
            } = (function (e) {
              var t;
              let {
                  min: n = 0,
                  max: i = 100,
                  onChange: c,
                  value: f,
                  defaultValue: p,
                  isReversed: h,
                  direction: m = "ltr",
                  orientation: v = "horizontal",
                  id: b,
                  isDisabled: y,
                  isReadOnly: g,
                  onChangeStart: w,
                  onChangeEnd: x,
                  step: E = 1,
                  getAriaValueText: O,
                  "aria-valuetext": k,
                  "aria-label": C,
                  "aria-labelledby": S,
                  name: N,
                  focusThumbOnChange: D = !0,
                  ...M
                } = e,
                P = (0, z.W)(w),
                T = (0, z.W)(x),
                j = (0, z.W)(O),
                I = (function (e) {
                  let { isReversed: t, direction: n, orientation: r } = e;
                  return "ltr" === n || "vertical" === r ? t : !t;
                })({
                  isReversed: h,
                  direction: m,
                  orientation: v,
                }),
                [A, L] = (function (e) {
                  let {
                      value: t,
                      defaultValue: n,
                      onChange: r,
                      shouldUpdate: o = (e, t) => e !== t,
                    } = e,
                    i = (0, z.W)(r),
                    a = (0, z.W)(o),
                    [l, s] = (0, R.useState)(n),
                    u = void 0 !== t,
                    c = u ? t : l,
                    f = (0, z.W)(
                      (e) => {
                        let t = "function" == typeof e ? e(c) : e;
                        a(c, t) && (u || s(t), i(t));
                      },
                      [u, i, c, a]
                    );
                  return [c, f];
                })({
                  value: f,
                  defaultValue: null != p ? p : i < n ? n : n + (i - n) / 2,
                  onChange: c,
                }),
                [V, F] = (0, R.useState)(!1),
                [G, K] = (0, R.useState)(!1),
                X = !(y || g),
                Y = (i - n) / 10,
                Z = E || (i - n) / 100,
                Q = q(A, n, i),
                J = (((I ? i - Q + n : Q) - n) * 100) / (i - n),
                ee = "vertical" === v,
                et = W({
                  min: n,
                  max: i,
                  step: E,
                  isDisabled: y,
                  value: Q,
                  isInteractive: X,
                  isReversed: I,
                  isVertical: ee,
                  eventSource: null,
                  focusThumbOnChange: D,
                  orientation: v,
                }),
                en = (0, R.useRef)(null),
                er = (0, R.useRef)(null),
                eo = (0, R.useRef)(null),
                ei = (0, R.useId)(),
                ea = null != b ? b : ei,
                [el, es] = [`slider-thumb-${ea}`, `slider-track-${ea}`],
                eu = (0, R.useCallback)(
                  (e) => {
                    var t, n, r, o;
                    if (!en.current) return;
                    let i = et.current;
                    i.eventSource = "pointer";
                    let a = en.current.getBoundingClientRect(),
                      { clientX: l, clientY: s } =
                        null != (n = null == (t = e.touches) ? void 0 : t[0])
                          ? n
                          : e,
                      u = ee ? a.bottom - s : l - a.left,
                      c = ee ? a.height : a.width,
                      f = u / c;
                    I && (f = 1 - f);
                    let d = ((r = f), (o = i.min), (i.max - o) * r + o);
                    return (
                      i.step && (d = parseFloat(H(d, i.min, i.step))),
                      (d = q(d, i.min, i.max))
                    );
                  },
                  [ee, I, et]
                ),
                ec = (0, R.useCallback)(
                  (e) => {
                    let t = et.current;
                    t.isInteractive &&
                      L(
                        (e = q((e = parseFloat(H(e, t.min, Z))), t.min, t.max))
                      );
                  },
                  [Z, L, et]
                ),
                ef = (0, R.useMemo)(
                  () => ({
                    stepUp(e = Z) {
                      ec(I ? Q - e : Q + e);
                    },
                    stepDown(e = Z) {
                      ec(I ? Q + e : Q - e);
                    },
                    reset() {
                      ec(p || 0);
                    },
                    stepTo(e) {
                      ec(e);
                    },
                  }),
                  [ec, I, Q, Z, p]
                ),
                ed = (0, R.useCallback)(
                  (e) => {
                    let t = et.current,
                      n = {
                        ArrowRight: () => ef.stepUp(),
                        ArrowUp: () => ef.stepUp(),
                        ArrowLeft: () => ef.stepDown(),
                        ArrowDown: () => ef.stepDown(),
                        PageUp: () => ef.stepUp(Y),
                        PageDown: () => ef.stepDown(Y),
                        Home: () => ec(t.min),
                        End: () => ec(t.max),
                      }[e.key];
                    n &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      n(e),
                      (t.eventSource = "keyboard"));
                  },
                  [ef, ec, Y, et]
                ),
                ep = null != (t = null == j ? void 0 : j(Q)) ? t : k,
                eh = (function (e) {
                  let [t] = (function ({
                    getNodes: e,
                    observeMutation: t = !0,
                  }) {
                    let [n, r] = (0, R.useState)([]),
                      [o, i] = (0, R.useState)(0);
                    return (
                      U(() => {
                        let n = e(),
                          o = n.map((e, t) =>
                            (function (e, t) {
                              var n;
                              if (!e) {
                                t(void 0);
                                return;
                              }
                              t({
                                width: e.offsetWidth,
                                height: e.offsetHeight,
                              });
                              let r =
                                  null != (n = e.ownerDocument.defaultView)
                                    ? n
                                    : window,
                                o = new r.ResizeObserver((n) => {
                                  let r, o;
                                  if (!Array.isArray(n) || !n.length) return;
                                  let [i] = n;
                                  if ("borderBoxSize" in i) {
                                    let a = i.borderBoxSize,
                                      l = Array.isArray(a) ? a[0] : a;
                                    (r = l.inlineSize), (o = l.blockSize);
                                  } else
                                    (r = e.offsetWidth), (o = e.offsetHeight);
                                  t({
                                    width: r,
                                    height: o,
                                  });
                                });
                              return (
                                o.observe(e, {
                                  box: "border-box",
                                }),
                                () => o.unobserve(e)
                              );
                            })(e, (e) => {
                              r((n) => [
                                ...n.slice(0, t),
                                e,
                                ...n.slice(t + 1),
                              ]);
                            })
                          );
                        if (t) {
                          let a = n[0];
                          o.push(
                            (function (e, t) {
                              var n, r;
                              if (!e || !e.parentElement) return;
                              let o =
                                  null !=
                                  (r =
                                    null == (n = e.ownerDocument)
                                      ? void 0
                                      : n.defaultView)
                                    ? r
                                    : window,
                                i = new o.MutationObserver(() => {
                                  t();
                                });
                              return (
                                i.observe(e.parentElement, {
                                  childList: !0,
                                }),
                                () => {
                                  i.disconnect();
                                }
                              );
                            })(a, () => {
                              i((e) => e + 1);
                            })
                          );
                        }
                        return () => {
                          o.forEach((e) => {
                            null == e || e();
                          });
                        };
                      }, [o]),
                      n
                    );
                  })({
                    observeMutation: !1,
                    getNodes() {
                      let t =
                        "object" == typeof e && null !== e && "current" in e
                          ? e.current
                          : e;
                      return [t];
                    },
                  });
                  return t;
                })(er),
                {
                  getThumbStyle: em,
                  rootStyle: ev,
                  trackStyle: eb,
                  innerTrackStyle: ey,
                } = (0, R.useMemo)(() => {
                  let e = et.current;
                  return (function (e) {
                    let {
                        orientation: t,
                        thumbPercents: n,
                        thumbRects: r,
                        isReversed: o,
                      } = e,
                      i = (e) => {
                        var o;
                        let i = null != (o = r[e]) ? o : s;
                        return {
                          position: "absolute",
                          userSelect: "none",
                          WebkitUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          touchAction: "none",
                          ...l({
                            orientation: t,
                            vertical: {
                              bottom: `calc(${n[e]}% - ${i.height / 2}px)`,
                            },
                            horizontal: {
                              left: `calc(${n[e]}% - ${i.width / 2}px)`,
                            },
                          }),
                        };
                      },
                      a =
                        "vertical" === t
                          ? r.reduce(
                              (e, t) => (u(e).height > u(t).height ? e : t),
                              s
                            )
                          : r.reduce(
                              (e, t) => (u(e).width > u(t).width ? e : t),
                              s
                            ),
                      c = {
                        position: "relative",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0,0,0,0)",
                        userSelect: "none",
                        outline: 0,
                        ...l({
                          orientation: t,
                          vertical: a
                            ? {
                                paddingLeft: a.width / 2,
                                paddingRight: a.width / 2,
                              }
                            : {},
                          horizontal: a
                            ? {
                                paddingTop: a.height / 2,
                                paddingBottom: a.height / 2,
                              }
                            : {},
                        }),
                      },
                      f = {
                        position: "absolute",
                        ...l({
                          orientation: t,
                          vertical: {
                            left: "50%",
                            transform: "translateX(-50%)",
                            height: "100%",
                          },
                          horizontal: {
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "100%",
                          },
                        }),
                      },
                      d = 1 === n.length,
                      p = [0, o ? 100 - n[0] : n[0]],
                      h = d ? p : n,
                      m = h[0];
                    !d && o && (m = 100 - m);
                    let v = Math.abs(h[h.length - 1] - h[0]),
                      b = {
                        ...f,
                        ...l({
                          orientation: t,
                          vertical: o
                            ? {
                                height: `${v}%`,
                                top: `${m}%`,
                              }
                            : {
                                height: `${v}%`,
                                bottom: `${m}%`,
                              },
                          horizontal: o
                            ? {
                                width: `${v}%`,
                                right: `${m}%`,
                              }
                            : {
                                width: `${v}%`,
                                left: `${m}%`,
                              },
                        }),
                      };
                    return {
                      trackStyle: f,
                      innerTrackStyle: b,
                      rootStyle: c,
                      getThumbStyle: i,
                    };
                  })({
                    isReversed: I,
                    orientation: e.orientation,
                    thumbRects: [
                      null != eh
                        ? eh
                        : {
                            width: 0,
                            height: 0,
                          },
                    ],
                    thumbPercents: [J],
                  });
                }, [I, eh, J, et]),
                eg = (0, R.useCallback)(() => {
                  let e = et.current;
                  e.focusThumbOnChange &&
                    setTimeout(() => {
                      var e;
                      return null == (e = er.current) ? void 0 : e.focus();
                    });
                }, [et]);
              function ew(e) {
                let t = eu(e);
                null != t && t !== et.current.value && L(t);
              }
              (0, B.r)(() => {
                let e = et.current;
                eg(), "keyboard" === e.eventSource && (null == T || T(e.value));
              }, [Q, T]),
                (function (e, t) {
                  let {
                      onPan: n,
                      onPanStart: r,
                      onPanEnd: o,
                      onPanSessionStart: i,
                      onPanSessionEnd: a,
                      threshold: l,
                    } = t,
                    s = Boolean(n || r || o || i || a),
                    u = (0, R.useRef)(null),
                    c = W({
                      onSessionStart: i,
                      onSessionEnd: a,
                      onStart: r,
                      onMove: n,
                      onEnd(e, t) {
                        (u.current = null), null == o || o(e, t);
                      },
                    });
                  (0, R.useEffect)(() => {
                    var e;
                    null == (e = u.current) || e.updateHandlers(c.current);
                  }),
                    (0, R.useEffect)(() => {
                      let t = e.current;
                      if (t && s)
                        return d(t, "pointerdown", function (e) {
                          u.current = new _(e, c.current, l);
                        });
                    }, [e, s, c, l]),
                    (0, R.useEffect)(
                      () => () => {
                        var e;
                        null == (e = u.current) || e.end(), (u.current = null);
                      },
                      []
                    );
                })(eo, {
                  onPanSessionStart(e) {
                    let t = et.current;
                    t.isInteractive &&
                      (F(!0), eg(), ew(e), null == P || P(t.value));
                  },
                  onPanSessionEnd() {
                    let e = et.current;
                    e.isInteractive && (F(!1), null == T || T(e.value));
                  },
                  onPan(e) {
                    let t = et.current;
                    t.isInteractive && ew(e);
                  },
                });
              let ex = (0, R.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ...M,
                    ref: (0, $.lq)(t, eo),
                    tabIndex: -1,
                    "aria-disabled": o(y),
                    "data-focused": r(G),
                    style: {
                      ...e.style,
                      ...ev,
                    },
                  }),
                  [M, y, G, ev]
                ),
                eE = (0, R.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: (0, $.lq)(t, en),
                    id: es,
                    "data-disabled": r(y),
                    style: {
                      ...e.style,
                      ...eb,
                    },
                  }),
                  [y, es, eb]
                ),
                eO = (0, R.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: t,
                    style: {
                      ...e.style,
                      ...ey,
                    },
                  }),
                  [ey]
                ),
                ek = (0, R.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: (0, $.lq)(t, er),
                    role: "slider",
                    tabIndex: X ? 0 : void 0,
                    id: el,
                    "data-active": r(V),
                    "aria-valuetext": ep,
                    "aria-valuemin": n,
                    "aria-valuemax": i,
                    "aria-valuenow": Q,
                    "aria-orientation": v,
                    "aria-disabled": o(y),
                    "aria-readonly": o(g),
                    "aria-label": C,
                    "aria-labelledby": C ? void 0 : S,
                    style: {
                      ...e.style,
                      ...em(0),
                    },
                    onKeyDown: a(e.onKeyDown, ed),
                    onFocus: a(e.onFocus, () => K(!0)),
                    onBlur: a(e.onBlur, () => K(!1)),
                  }),
                  [X, el, V, ep, n, i, Q, v, y, g, C, S, em, ed]
                ),
                eC = (0, R.useCallback)(
                  (e, t = null) => {
                    let o = !(e.value < n || e.value > i),
                      a = Q >= e.value,
                      l = ((e.value - n) * 100) / (i - n),
                      s = {
                        position: "absolute",
                        pointerEvents: "none",
                        ...(function (e) {
                          let {
                            orientation: t,
                            vertical: n,
                            horizontal: r,
                          } = e;
                          return "vertical" === t ? n : r;
                        })({
                          orientation: v,
                          vertical: {
                            bottom: I ? `${100 - l}%` : `${l}%`,
                          },
                          horizontal: {
                            left: I ? `${100 - l}%` : `${l}%`,
                          },
                        }),
                      };
                    return {
                      ...e,
                      ref: t,
                      role: "presentation",
                      "aria-hidden": !0,
                      "data-disabled": r(y),
                      "data-invalid": r(!o),
                      "data-highlighted": r(a),
                      style: {
                        ...e.style,
                        ...s,
                      },
                    };
                  },
                  [y, I, i, n, v, Q]
                ),
                eS = (0, R.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: t,
                    type: "hidden",
                    value: Q,
                    name: N,
                  }),
                  [N, Q]
                );
              return {
                state: {
                  value: Q,
                  isFocused: G,
                  isDragging: V,
                },
                actions: ef,
                getRootProps: ex,
                getTrackProps: eE,
                getInnerTrackProps: eO,
                getThumbProps: ek,
                getMarkerProps: eC,
                getInputProps: eS,
              };
            })(f),
            b = m(),
            y = h({}, t);
          return (0, Z.jsx)(Q, {
            value: v,
            children: (0, Z.jsx)(ee, {
              value: c,
              children: (0, Z.jsxs)(Y.m.div, {
                ...b,
                className: i("chakra-slider", n.className),
                __css: c.container,
                children: [
                  n.children,
                  (0, Z.jsx)("input", {
                    ...y,
                  }),
                ],
              }),
            }),
          });
        });
      en.displayName = "Slider";
      var er = (0, F.G)((e, t) => {
        let { getThumbProps: n } = J(),
          r = et(),
          o = n(e, t);
        return (0, Z.jsx)(Y.m.div, {
          ...o,
          className: i("chakra-slider__thumb", e.className),
          __css: r.thumb,
        });
      });
      er.displayName = "SliderThumb";
      var eo = (0, F.G)((e, t) => {
        let { getTrackProps: n } = J(),
          r = et(),
          o = n(e, t);
        return (0, Z.jsx)(Y.m.div, {
          ...o,
          className: i("chakra-slider__track", e.className),
          __css: r.track,
        });
      });
      eo.displayName = "SliderTrack";
      var ei = (0, F.G)((e, t) => {
        let { getInnerTrackProps: n } = J(),
          r = et(),
          o = n(e, t);
        return (0, Z.jsx)(Y.m.div, {
          ...o,
          className: i("chakra-slider__filled-track", e.className),
          __css: r.filledTrack,
        });
      });
      (ei.displayName = "SliderFilledTrack"),
        ((0, F.G)((e, t) => {
          let { getMarkerProps: n } = J(),
            r = et(),
            o = n(e, t);
          return (0, Z.jsx)(Y.m.div, {
            ...o,
            className: i("chakra-slider__marker", e.className),
            __css: r.mark,
          });
        }).displayName = "SliderMark");
    },
  },
]);
