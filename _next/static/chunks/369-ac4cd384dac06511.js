(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [369],
  {
    5470: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'addLocale', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(7480);
      let n = function (e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return e;
      };
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    7639: function (e, t) {
      'use strict';
      function r(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    3751: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'hasBasePath', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(5843);
      function o(e) {
        return (0, n.pathHasPrefix)(e, '');
      }
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    6461: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(670),
        o = n._(r(3962)),
        u = r(1153),
        a = r(5523),
        i = r(1435),
        l = r(8429),
        c = r(5470),
        f = r(6398),
        s = r(6208),
        d = r(784),
        p = r(7639),
        h = r(6301),
        y = r(635),
        g = new Set();
      function m(e, t, r, n, o, u) {
        if (!u && !(0, a.isLocalURL)(t)) return;
        if (!n.bypassPrefetchedCheck) {
          let o = void 0 !== n.locale ? n.locale : 'locale' in e ? e.locale : void 0,
            u = t + '%' + r + '%' + o;
          if (g.has(u)) return;
          g.add(u);
        }
        let i = u ? e.prefetch(t, o) : e.prefetch(t, r, n);
        Promise.resolve(i).catch((e) => {});
      }
      function b(e) {
        return 'string' == typeof e ? e : (0, i.formatUrl)(e);
      }
      let P = o.default.forwardRef(function (e, t) {
          let r, n;
          let { href: i, as: g, children: P, prefetch: v = null, passHref: _, replace: j, shallow: O, scroll: R, locale: M, onClick: x, onMouseEnter: C, onTouchStart: E, legacyBehavior: w = !1, ...k } = e;
          (r = P), w && ('string' == typeof r || 'number' == typeof r) && (r = o.default.createElement('a', null, r));
          let I = !1 !== v,
            L = null === v ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
            S = o.default.useContext(f.RouterContext),
            U = o.default.useContext(s.AppRouterContext),
            A = null != S ? S : U,
            T = !S,
            { href: N, as: W } = o.default.useMemo(() => {
              if (!S) {
                let e = b(i);
                return { href: e, as: g ? b(g) : e };
              }
              let [e, t] = (0, u.resolveHref)(S, i, !0);
              return { href: e, as: g ? (0, u.resolveHref)(S, g) : t || e };
            }, [S, i, g]),
            D = o.default.useRef(N),
            z = o.default.useRef(W);
          w && (n = o.default.Children.only(r));
          let K = w ? n && 'object' == typeof n && n.ref : t,
            [F, $, q] = (0, d.useIntersection)({ rootMargin: '200px' }),
            B = o.default.useCallback(
              (e) => {
                (z.current !== W || D.current !== N) && (q(), (z.current = W), (D.current = N)), F(e), K && ('function' == typeof K ? K(e) : 'object' == typeof K && (K.current = e));
              },
              [W, K, N, q, F]
            );
          o.default.useEffect(() => {
            A && $ && I && m(A, N, W, { locale: M }, { kind: L }, T);
          }, [W, N, $, M, I, null == S ? void 0 : S.locale, A, T, L]);
          let H = {
            ref: B,
            onClick(e) {
              w || 'function' != typeof x || x(e),
                w && n.props && 'function' == typeof n.props.onClick && n.props.onClick(e),
                A &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, u, i, l, c, f, s) {
                    let { nodeName: d } = e.currentTarget,
                      p = 'A' === d.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          r = t.getAttribute('target');
                        return (r && '_self' !== r) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.nativeEvent && 2 === e.nativeEvent.which);
                      })(e) ||
                        (!f && !(0, a.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let h = () => {
                      'beforePopState' in t ? t[u ? 'replace' : 'push'](r, n, { shallow: i, locale: c, scroll: l }) : t[u ? 'replace' : 'push'](n || r, { forceOptimisticNavigation: !s });
                    };
                    f ? o.default.startTransition(h) : h();
                  })(e, A, N, W, j, O, R, M, T, I);
            },
            onMouseEnter(e) {
              w || 'function' != typeof C || C(e), w && n.props && 'function' == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), A && (I || !T) && m(A, N, W, { locale: M, priority: !0, bypassPrefetchedCheck: !0 }, { kind: L }, T);
            },
            onTouchStart(e) {
              w || 'function' != typeof E || E(e), w && n.props && 'function' == typeof n.props.onTouchStart && n.props.onTouchStart(e), A && (I || !T) && m(A, N, W, { locale: M, priority: !0, bypassPrefetchedCheck: !0 }, { kind: L }, T);
            },
          };
          if ((0, l.isAbsoluteUrl)(W)) H.href = W;
          else if (!w || _ || ('a' === n.type && !('href' in n.props))) {
            let e = void 0 !== M ? M : null == S ? void 0 : S.locale,
              t = (null == S ? void 0 : S.isLocaleDomain) && (0, p.getDomainLocale)(W, e, null == S ? void 0 : S.locales, null == S ? void 0 : S.domainLocales);
            H.href = t || (0, h.addBasePath)((0, c.addLocale)(W, e, null == S ? void 0 : S.defaultLocale));
          }
          return w ? o.default.cloneElement(n, H) : o.default.createElement('a', { ...k, ...H }, r);
        }),
        v = P;
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    8611: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          requestIdleCallback: function () {
            return r;
          },
          cancelIdleCallback: function () {
            return n;
          },
        });
      let r =
          ('undefined' != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ('undefined' != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    784: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(3962),
        o = r(8611),
        u = 'function' == typeof IntersectionObserver,
        a = new Map(),
        i = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          c = l || !u,
          [f, s] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, n.useEffect)(() => {
          if (u) {
            if (c || f) return;
            let e = d.current;
            if (e && e.tagName) {
              let n = (function (e, t, r) {
                let {
                  id: n,
                  observer: o,
                  elements: u,
                } = (function (e) {
                  let t;
                  let r = { root: e.root || null, margin: e.rootMargin || '' },
                    n = i.find((e) => e.root === r.root && e.margin === r.margin);
                  if (n && (t = a.get(n))) return t;
                  let o = new Map(),
                    u = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = o.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r);
                      });
                    }, e);
                  return (t = { id: r, observer: u, elements: o }), i.push(r), a.set(r, t), t;
                })(r);
                return (
                  u.set(e, t),
                  o.observe(e),
                  function () {
                    if ((u.delete(e), o.unobserve(e), 0 === u.size)) {
                      o.disconnect(), a.delete(n);
                      let e = i.findIndex((e) => e.root === n.root && e.margin === n.margin);
                      e > -1 && i.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && s(e), { root: null == t ? void 0 : t.current, rootMargin: r });
              return n;
            }
          } else if (!f) {
            let e = (0, o.requestIdleCallback)(() => s(!0));
            return () => (0, o.cancelIdleCallback)(e);
          }
        }, [c, r, t, f, d.current]);
        let h = (0, n.useCallback)(() => {
          s(!1);
        }, []);
        return [p, f, h];
      }
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    3183: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'escapeStringRegexp', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return r.test(e) ? e.replace(n, '\\$&') : e;
      }
    },
    6398: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'RouterContext', {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(670),
        o = n._(r(3962)),
        u = o.default.createContext(null);
    },
    1435: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return a;
          },
          urlObjectKeys: function () {
            return i;
          },
          formatWithValidation: function () {
            return l;
          },
        });
      let n = r(5294),
        o = n._(r(831)),
        u = /https?|ftp|gopher|file/;
      function a(e) {
        let { auth: t, hostname: r } = e,
          n = e.protocol || '',
          a = e.pathname || '',
          i = e.hash || '',
          l = e.query || '',
          c = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
          e.host ? (c = t + e.host) : r && ((c = t + (~r.indexOf(':') ? '[' + r + ']' : r)), e.port && (c += ':' + e.port)),
          l && 'object' == typeof l && (l = String(o.urlQueryToSearchParams(l)));
        let f = e.search || (l && '?' + l) || '';
        return (
          n && !n.endsWith(':') && (n += ':'),
          e.slashes || ((!n || u.test(n)) && !1 !== c) ? ((c = '//' + (c || '')), a && '/' !== a[0] && (a = '/' + a)) : c || (c = ''),
          i && '#' !== i[0] && (i = '#' + i),
          f && '?' !== f[0] && (f = '?' + f),
          '' + n + c + (a = a.replace(/[?#]/g, encodeURIComponent)) + (f = f.replace('#', '%23')) + i
        );
      }
      let i = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
      function l(e) {
        return a(e);
      }
    },
    2976: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'interpolateAs', {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(4431),
        o = r(5438);
      function u(e, t, r) {
        let u = '',
          a = (0, o.getRouteRegex)(e),
          i = a.groups,
          l = (t !== e ? (0, n.getRouteMatcher)(a)(t) : '') || r;
        u = e;
        let c = Object.keys(i);
        return (
          c.every((e) => {
            let t = l[e] || '',
              { repeat: r, optional: n } = i[e],
              o = '[' + (r ? '...' : '') + e + ']';
            return n && (o = (t ? '' : '/') + '[' + o + ']'), r && !Array.isArray(t) && (t = [t]), (n || e in l) && (u = u.replace(o, r ? t.map((e) => encodeURIComponent(e)).join('/') : encodeURIComponent(t)) || '/');
          }) || (u = ''),
          { params: c, result: u }
        );
      }
    },
    4761: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isDynamicRoute', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = /\/\[[^/]+?\](?=\/|$)/;
      function n(e) {
        return r.test(e);
      }
    },
    5523: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(8429),
        o = r(3751);
      function u(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    2594: function (e, t) {
      'use strict';
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'omit', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    5843: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'pathHasPrefix', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(3201);
      function o(e, t) {
        if ('string' != typeof e) return !1;
        let { pathname: r } = (0, n.parsePath)(e);
        return r === t || r.startsWith(t + '/');
      }
    },
    831: function (e, t) {
      'use strict';
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r] ? (t[r] = e) : Array.isArray(t[r]) ? t[r].push(e) : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return 'string' != typeof e && ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e ? '' : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o) ? o.forEach((e) => t.append(r, n(e))) : t.set(r, n(o));
          }),
          t
        );
      }
      function u(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)), t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
          assign: function () {
            return u;
          },
        });
    },
    1153: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'resolveHref', {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(831),
        o = r(1435),
        u = r(2594),
        a = r(8429),
        i = r(7480),
        l = r(5523),
        c = r(4761),
        f = r(2976);
      function s(e, t, r) {
        let s;
        let d = 'string' == typeof t ? t : (0, o.formatWithValidation)(t),
          p = d.match(/^[a-zA-Z]{1,}:\/\//),
          h = p ? d.slice(p[0].length) : d,
          y = h.split('?');
        if ((y[0] || '').match(/(\/\/|\\)/)) {
          console.error("Invalid href '" + d + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
          let t = (0, a.normalizeRepeatedSlashes)(h);
          d = (p ? p[0] : '') + t;
        }
        if (!(0, l.isLocalURL)(d)) return r ? [d] : d;
        try {
          s = new URL(d.startsWith('#') ? e.asPath : e.pathname, 'http://n');
        } catch (e) {
          s = new URL('/', 'http://n');
        }
        try {
          let e = new URL(d, s);
          e.pathname = (0, i.normalizePathTrailingSlash)(e.pathname);
          let t = '';
          if ((0, c.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: a, params: i } = (0, f.interpolateAs)(e.pathname, e.pathname, r);
            a && (t = (0, o.formatWithValidation)({ pathname: a, hash: e.hash, query: (0, u.omit)(r, i) }));
          }
          let a = e.origin === s.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [a, t || a] : a;
        } catch (e) {
          return r ? [d] : d;
        }
      }
    },
    4431: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getRouteMatcher', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(8429);
      function o(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let u = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError('failed to decode param');
              }
            },
            a = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n && (a[e] = ~n.indexOf('/') ? n.split('/').map((e) => u(e)) : t.repeat ? [u(n)] : u(n));
            }),
            a
          );
        };
      }
    },
    5438: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRouteRegex: function () {
            return l;
          },
          getNamedRouteRegex: function () {
            return f;
          },
          getNamedMiddlewareRegex: function () {
            return s;
          },
        });
      let n = r(3183),
        o = r(6094),
        u = 'nxtP';
      function a(e) {
        let t = e.startsWith('[') && e.endsWith(']');
        t && (e = e.slice(1, -1));
        let r = e.startsWith('...');
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function i(e) {
        let t = (0, o.removeTrailingSlash)(e).slice(1).split('/'),
          r = {},
          u = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              if (!(e.startsWith('[') && e.endsWith(']'))) return '/' + (0, n.escapeStringRegexp)(e);
              {
                let { key: t, optional: n, repeat: o } = a(e.slice(1, -1));
                return (r[t] = { pos: u++, repeat: o, optional: n }), o ? (n ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)';
              }
            })
            .join(''),
          groups: r,
        };
      }
      function l(e) {
        let { parameterizedRoute: t, groups: r } = i(e);
        return { re: RegExp('^' + t + '(?:/)?$'), groups: r };
      }
      function c(e, t) {
        let r, i;
        let l = (0, o.removeTrailingSlash)(e).slice(1).split('/'),
          c =
            ((r = 97),
            (i = 1),
            () => {
              let e = '';
              for (let t = 0; t < i; t++) (e += String.fromCharCode(r)), ++r > 122 && (i++, (r = 97));
              return e;
            }),
          f = {};
        return {
          namedParameterizedRoute: l
            .map((e) => {
              if (!(e.startsWith('[') && e.endsWith(']'))) return '/' + (0, n.escapeStringRegexp)(e);
              {
                let { key: r, optional: n, repeat: o } = a(e.slice(1, -1)),
                  i = r.replace(/\W/g, '');
                t && (i = '' + u + i);
                let l = !1;
                return (
                  (0 === i.length || i.length > 30) && (l = !0),
                  isNaN(parseInt(i.slice(0, 1))) || (l = !0),
                  l && (i = c()),
                  t ? (f[i] = '' + u + r) : (f[i] = '' + r),
                  o ? (n ? '(?:/(?<' + i + '>.+?))?' : '/(?<' + i + '>.+?)') : '/(?<' + i + '>[^/]+?)'
                );
              }
            })
            .join(''),
          routeKeys: f,
        };
      }
      function f(e, t) {
        let r = c(e, t);
        return { ...l(e), namedRegex: '^' + r.namedParameterizedRoute + '(?:/)?$', routeKeys: r.routeKeys };
      }
      function s(e, t) {
        let { parameterizedRoute: r } = i(e),
          { catchAll: n = !0 } = t;
        if ('/' === r) return { namedRegex: '^/' + (n ? '.*' : '') + '$' };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: '^' + o + (n ? '(?:(/.*)?)' : '') + '$' };
      }
    },
    8429: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          isAbsoluteUrl: function () {
            return u;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return i;
          },
          getDisplayName: function () {
            return l;
          },
          isResSent: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return f;
          },
          loadGetInitialProps: function () {
            return s;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          DecodeError: function () {
            return h;
          },
          NormalizeError: function () {
            return y;
          },
          PageNotFoundError: function () {
            return g;
          },
          MissingStaticPage: function () {
            return m;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
        });
      let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), u = 0; u < n; u++) o[u] = arguments[u];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = (e) => o.test(e);
      function a() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + '//' + t + (r ? ':' + r : '');
      }
      function i() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function l(e) {
        return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function f(e) {
        let t = e.split('?'),
          r = t[0];
        return r.replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
      }
      async function s(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await s(t.Component, t.ctx) } : {};
        let n = await e.getInitialProps(t);
        if (r && c(r)) return n;
        if (!n) {
          let t = '"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.';
          throw Error(t);
        }
        return n;
      }
      let d = 'undefined' != typeof performance,
        p = d && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
      class h extends Error {}
      class y extends Error {}
      class g extends Error {
        constructor(e) {
          super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e);
        }
      }
      class m extends Error {
        constructor(e, t) {
          super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t);
        }
      }
      class b extends Error {
        constructor() {
          super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module');
        }
      }
    },
    6369: function (e, t, r) {
      e.exports = r(6461);
    },
  },
]);
