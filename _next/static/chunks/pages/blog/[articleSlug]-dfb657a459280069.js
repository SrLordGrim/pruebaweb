(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [121],
  {
    3752: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog/[articleSlug]",
        function () {
          return n(9448);
        },
      ]);
    },
    3248: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return d;
        },
        Z: function () {
          return p;
        },
      });
      var i = n(5893),
        r = n(8855),
        o = n(3292),
        l = n(2091),
        s = n(9715);
      let a = {
          appstore: "AppStore",
          builtbybit: "BuiltByBit",
          chocolatey: "Chocolatey",
          curseforge: "CurseForge",
          epic: "Epic Store",
          github: "GitHub",
          gog: "GoG",
          humble: "HumbleBundle",
          itchio: "Itch.io",
          maven: "Maven",
          modrinth: "ModRinth",
          npm: "npmjs",
          origin: "Origin",
          playstation: "PlayStation",
          playstore: "PlayStore",
          steam: "Steam",
          windows_store: "Windows Store",
          xbox: "Xbox",
          custom: "",
        },
        c = {
          appstore: s.UWN,
          builtbybit: l.KSn,
          chocolatey: s.gcq,
          curseforge: s.JSS,
          epic: s.SGo,
          github: s.pZu,
          gog: s.I6e,
          humble: s.kst,
          itchio: s.FsF,
          maven: s.$Zd,
          modrinth: s.Ujn,
          npm: s.EKS,
          origin: s.psq,
          playstation: s.U$X,
          playstore: s.P3Q,
          steam: s.EX5,
          xbox: s.FRd,
          windows_store: s.Yic,
          custom: l.ssk,
        },
        u = {
          buy: "Buy on {vendor}",
          docs: "View docs",
          download: "Download on {vendor}",
          live_demo: "Live demo",
          other: "Visit {vendor}",
          source_code: "Source code",
          view: "View on {vendor}",
          website: "Visit website",
        };
      function d(e) {
        let { link: t } = e,
          { type: n, vendor: l, url: s } = t,
          d = c[l],
          p = a[l],
          h = u[n],
          x = h.replace("{vendor}", p);
        return (0, i.jsx)(r.z, {
          as: o.m.a,
          href: s,
          target: "_blank",
          rel: "noopener noreferrer",
          leftIcon: void 0 !== d ? (0, i.jsx)(d, {}) : void 0,
          size: "xs",
          mr: "10px",
          mt: "10px",
          children: x,
        });
      }
      var p = d;
    },
    2248: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(5893),
        r = n(204),
        o = n(4418),
        l = n(3205);
      function s(e) {
        let { title: t, children: n } = e;
        return (0, i.jsxs)(r.k, {
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDir: "column",
          gap: "10px",
          children: [
            (0, i.jsx)(o.X, {
              fontSize: "6xl",
              children: t || "An error ocurred!",
            }),
            (0, i.jsx)(l.x, {
              fontSize: "xl",
              children: n,
            }),
          ],
        });
      }
    },
    6709: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return R;
        },
      });
      var i = n(5893),
        r = n(204),
        o = n(4418),
        l = n(3838),
        s = n(3205),
        a = n(2962),
        c = n(9516),
        u = n(2489),
        d = n(3292),
        p = n(4609),
        h = n(5197),
        x = n(2498),
        g = n(6354),
        m = n(6557),
        f = n(4304),
        b = n(8650),
        j = n(6526),
        v = n(5421),
        w = n(3764);
      n(4595);
      var y = n(309),
        k = n(7294),
        S = n(760),
        _ = n(3047);
      function C(e) {
        let { children: t, language: n } = e,
          [r, o] = (0, k.useState)(t),
          l = r.split("\n").length + 1;
        return (0, i.jsx)(w.ZP, {
          value: r,
          onChange: (e) => o(e || ""),
          language: n,
          theme: "vs-dark",
          options: {
            formatOnType: !0,
            autoClosingBrackets: "always",
            autoClosingQuotes: "always",
            lineNumbers: "on",
            lineHeight: 20,
            minimap: {
              enabled: !1,
            },
            readOnly: !0,
            scrollBeyondLastLine: !1,
            theme: "vs-dark",
          },
          height: "".concat(20 * l, "px"),
        });
      }
      function E(e) {
        let { children: t } = e;
        return (0, i.jsx)(S.Z, {
          children: t,
        });
      }
      let Z = {
        code(e, t) {
          let n = (null == e ? void 0 : e.toString()) || "";
          return null == t ||
            ["bash", "shell", "plaintext", "sh", "sql", ""].includes(t)
            ? (0, i.jsx)(u.E, {
                bg: "black",
                color: "#ccc",
                p: "15px 10px",
                borderRadius: "7px",
                w: "100%",
                my: "5px",
                overflowX: "auto",
                children: (0, i.jsx)("pre", {
                  children: n,
                }),
              })
            : "math" === t
            ? (0, i.jsx)(E, {
                children: n,
              })
            : (0, i.jsx)(C, {
                language: t || "javascript",
                children: n,
              });
        },
        heading(e, t) {
          let n = (null == e ? void 0 : e.toString().split(" ")) || [],
            r = [],
            l = (e) => null !== e.match(/[\u{1F300}-\u{1F6FF}]/u);
          for (let a of n)
            l(a)
              ? r.push(a)
              : r.push(
                  (0, i.jsx)(s.x, {
                    as: d.m.span,
                    background: "var(--main-gradient)",
                    backgroundClip: "text",
                    style: {
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                    children: r,
                  })
                );
          return (0, i.jsx)(o.X, {
            fontSize: ["4xl", "2xl", "xl", "lg", "md"][t - 1],
            id: (0, _.M)((null == e ? void 0 : e.toString()) || ""),
            fontFamily: "rainyhearts",
            mt: 2 == t ? "30px" : "0px",
            alignItems: "center",
            children: e,
          });
        },
        image(e, t) {
          let n = e.startsWith("/") || e.startsWith("./"),
            r = n ? e : "/api/image?url=".concat(encodeURIComponent(e));
          return (0, i.jsx)(p.E, {
            src: r,
            alt: t,
          });
        },
        link(e, t) {
          let n = e.startsWith("http");
          return (0, i.jsx)(l.r, {
            href: e,
            color: "purple.300",
            isExternal: n,
            children: t,
          });
        },
        list: (e, t) =>
          t
            ? (0, i.jsx)(h.GS, {
                children: e,
              })
            : (0, i.jsx)(h.QI, {
                children: e,
              }),
        listItem: (e) =>
          (0, i.jsx)(h.HC, {
            fontFamily: "VictorMono, Arial",
            fontSize: "13px",
            my: "3px",
            children: e,
          }),
        paragraph: (e) =>
          (0, i.jsx)(s.x, {
            fontFamily: "VictorMono, Arial",
            fontSize: "13px",
            children: e,
          }),
        table: (e) => {
          let { colorMode: t } = (0, x.If)();
          return (0, i.jsx)(g.x, {
            children: (0, i.jsx)(m.i, {
              variant: "striped",
              bg: "dark" === t ? "#181818" : "#e4e4e4",
              borderRadius: "7px",
              children: e,
            }),
          });
        },
        tableHeader: (e) =>
          (0, i.jsx)(f.h, {
            children: e,
          }),
        tableBody: (e) =>
          (0, i.jsx)(b.p, {
            children: e,
          }),
        tableRow: (e) =>
          (0, i.jsx)(j.Tr, {
            whiteSpace: "pre-line",
            children: e,
          }),
        tableCell: (e, t) =>
          (0, i.jsx)(v.Th, {
            textAlign: t.align || "left",
            fontWeight: t.header ? "bold" : "normal",
            color: t.header ? "purple.300" : "inherit",
            textTransform: "none",
            children: e,
          }),
      };
      function F(e) {
        let { children: t } = e;
        return (0, i.jsx)(y.ZP, {
          value: t,
          renderer: Z,
          openLinksInNewTab: !0,
          gfm: !0,
        });
      }
      var I = n(2162),
        T = n(3248);
      function R(e) {
        let { article: t } = e,
          n = (0, _.Qo)((null == t ? void 0 : t.content) || ""),
          u = (0, I.Z)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.PB, {
              title: "".concat(null == t ? void 0 : t.title, " - ପ(๑•ᴗ•๑)ଓ ♡"),
              description: null == t ? void 0 : t.description,
              canonical: (0, _.Ax)() + "/blog/" + (null == t ? void 0 : t.slug),
              twitter: {
                site: "@sammwy",
                cardType: "summary_large_image",
                handle: "@sammwy",
              },
              openGraph: {
                type: "article",
                url: (0, _.Ax)() + "/blog/" + (null == t ? void 0 : t.slug),
                title: null == t ? void 0 : t.title,
                description: null == t ? void 0 : t.description,
                images: [
                  {
                    url: null == t ? void 0 : t.thumbnail,
                    alt: null == t ? void 0 : t.title,
                  },
                ],
              },
            }),
            (0, i.jsxs)(r.k, {
              width: "100%",
              justifyContent: "center",
              gap: "50px",
              children: [
                !("tablet" == u || "mobile" == u) &&
                  (0, i.jsx)(c.Z, {
                    width: "30%",
                    maxW: "350px",
                    height: "fit-content",
                    flexDir: "column",
                    gap: "20px",
                    padding: "20px 30px",
                    position: "fixed",
                    left: "100px",
                    top: "130px",
                    children: (0, i.jsxs)(r.k, {
                      flexDir: "column",
                      gap: "10px",
                      children: [
                        (0, i.jsx)(o.X, {
                          size: "md",
                          mt: "10px",
                          children: "Index",
                        }),
                        n.map((e, t) =>
                          (0, i.jsx)(
                            l.r,
                            {
                              href: "#".concat((0, _.M)(e)),
                              style: {
                                textDecoration: "none",
                              },
                              _hover: {
                                color: "purple.400",
                              },
                              children: (0, i.jsxs)(s.x, {
                                children: [t + 1, ". ", e],
                              }),
                            },
                            "ar-chp-".concat(t)
                          )
                        ),
                      ],
                    }),
                  }),
                (0, i.jsxs)(r.k, {
                  width: "95%",
                  maxW: "800px",
                  height: "100%",
                  flexDir: "column",
                  gap: "20px",
                  children: [
                    (0, i.jsx)(r.k, {
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                      bg: "url(".concat(null == t ? void 0 : t.thumbnail, ")"),
                      bgSize: "cover",
                      bgPosition: "center",
                      bgRepeat: "no-repeat",
                      borderRadius: "10px",
                      children: (0, i.jsx)(r.k, {
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        borderRadius: "10px",
                        children: (0, i.jsx)(o.X, {
                          children: null == t ? void 0 : t.title,
                        }),
                      }),
                    }),
                    (null == t ? void 0 : t.links) &&
                      (0, i.jsx)(c.Z, {
                        display: "box",
                        height: "100%",
                        padding: "20px 30px",
                        margin: "auto",
                        children: t.links.map((e, t) =>
                          (0, i.jsx)(
                            T.p,
                            {
                              link: e,
                            },
                            t
                          )
                        ),
                      }),
                    (0, i.jsx)(c.Z, {
                      height: "100%",
                      flexDir: "column",
                      gap: "20px",
                      padding: "20px 30px",
                      children: (0, i.jsx)(F, {
                        children:
                          (null == t ? void 0 : t.content) ||
                          "Error fetching content.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    3047: function (e, t, n) {
      "use strict";
      function i() {
        return "https://sammwy.com";
      }
      function r(e) {
        return e.toLowerCase().replace(/ /g, "-");
      }
      function o(e) {
        let t = e
          .replace(/```[\s\S]*?```/g, "")
          .match(RegExp("(?<=^#{2} ).*$", "gm"));
        return (t || []).filter((e) => e && e.toLowerCase);
      }
      function l(e) {
        let t = new Date(),
          n = t.getTime() + 6e4 * t.getTimezoneOffset(),
          i = new Date(n + 36e5 * e);
        return i.toTimeString().slice(0, 5);
      }
      n.d(t, {
        As: function () {
          return l;
        },
        Ax: function () {
          return i;
        },
        M: function () {
          return r;
        },
        Qo: function () {
          return o;
        },
      });
    },
    9448: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return l;
          },
          default: function () {
            return s;
          },
        });
      var i = n(5893),
        r = n(2248),
        o = n(6709),
        l = !0;
      function s(e) {
        let { article: t, error: n } = e;
        return !t || n
          ? (0, i.jsx)(r.Z, {
              title: n || "Unknown Error",
              children: "Check the URL and try again.",
            })
          : (0, i.jsx)(o.Z, {
              article: t,
            });
      }
    },
  },
  function (e) {
    e.O(0, [151, 153, 667, 774, 888, 179], function () {
      return e((e.s = 3752));
    }),
      (_N_E = e.O());
  },
]);
