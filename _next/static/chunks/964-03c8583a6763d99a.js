(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
  {
    9094: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = n(670),
        i = n(5294),
        o = i._(n(3962)),
        a = r._(n(9465)),
        l = n(2901),
        u = n(8702),
        s = n(6349);
      n(1521);
      let c = r._(n(7042)),
        d = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: '_next/image', loader: 'default', dangerouslyAllowSVG: !1, unoptimized: !1 };
      function f(e) {
        return void 0 !== e.default;
      }
      function p(e) {
        return void 0 === e ? e : 'number' == typeof e ? (Number.isFinite(e) ? e : NaN) : 'string' == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN;
      }
      function m(e, t, n, r, i, o, a) {
        if (!e || e['data-loaded-src'] === t) return;
        e['data-loaded-src'] = t;
        let l = 'decode' in e ? e.decode() : Promise.resolve();
        l.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (('blur' === n && o(!0), null == r ? void 0 : r.current)) {
              let t = new Event('load');
              Object.defineProperty(t, 'target', { writable: !1, value: e });
              let n = !1,
                i = !1;
              r.current({
                ...t,
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => n,
                isPropagationStopped: () => i,
                persist: () => {},
                preventDefault: () => {
                  (n = !0), t.preventDefault();
                },
                stopPropagation: () => {
                  (i = !0), t.stopPropagation();
                },
              });
            }
            (null == i ? void 0 : i.current) && i.current(e);
          }
        });
      }
      function g(e) {
        let [t, n] = o.version.split('.'),
          r = parseInt(t, 10),
          i = parseInt(n, 10);
        return r > 18 || (18 === r && i >= 3) ? { fetchPriority: e } : { fetchpriority: e };
      }
      let h = (0, o.forwardRef)((e, t) => {
          let {
            imgAttributes: n,
            heightInt: r,
            widthInt: i,
            qualityInt: a,
            className: l,
            imgStyle: u,
            blurStyle: s,
            isLazy: c,
            fetchPriority: d,
            fill: f,
            placeholder: p,
            loading: h,
            srcString: b,
            config: y,
            unoptimized: v,
            loader: w,
            onLoadRef: _,
            onLoadingCompleteRef: j,
            setBlurComplete: S,
            setShowAltText: C,
            onLoad: E,
            onError: x,
            ...P
          } = e;
          return (
            (h = c ? 'lazy' : h),
            o.default.createElement('img', {
              ...P,
              ...g(d),
              loading: h,
              width: i,
              height: r,
              decoding: 'async',
              'data-nimg': f ? 'fill' : '1',
              className: l,
              style: { ...u, ...s },
              ...n,
              ref: (0, o.useCallback)(
                (e) => {
                  t && ('function' == typeof t ? t(e) : 'object' == typeof t && (t.current = e)), e && (x && (e.src = e.src), e.complete && m(e, b, p, _, j, S, v));
                },
                [b, p, _, j, S, x, v, t]
              ),
              onLoad: (e) => {
                let t = e.currentTarget;
                m(t, b, p, _, j, S, v);
              },
              onError: (e) => {
                C(!0), 'blur' === p && S(!0), x && x(e);
              },
            })
          );
        }),
        b = (0, o.forwardRef)((e, t) => {
          var n;
          let r,
            i,
            {
              src: m,
              sizes: b,
              unoptimized: y = !1,
              priority: v = !1,
              loading: w,
              className: _,
              quality: j,
              width: S,
              height: C,
              fill: E,
              style: x,
              onLoad: P,
              onLoadingComplete: k,
              placeholder: O = 'empty',
              blurDataURL: M,
              fetchPriority: A,
              layout: I,
              objectFit: z,
              objectPosition: R,
              lazyBoundary: D,
              lazyRoot: F,
              ...N
            } = e,
            U = (0, o.useContext)(s.ImageConfigContext),
            T = (0, o.useMemo)(() => {
              let e = d || U || u.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                n = e.deviceSizes.sort((e, t) => e - t);
              return { ...e, allSizes: t, deviceSizes: n };
            }, [U]),
            W = N.loader || c.default;
          delete N.loader;
          let B = '__next_img_default' in W;
          if (B) {
            if ('custom' === T.loader) throw Error('Image with src "' + m + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader');
          } else {
            let e = W;
            W = (t) => {
              let { config: n, ...r } = t;
              return e(r);
            };
          }
          if (I) {
            'fill' === I && (E = !0);
            let e = { intrinsic: { maxWidth: '100%', height: 'auto' }, responsive: { width: '100%', height: 'auto' } }[I];
            e && (x = { ...x, ...e });
            let t = { responsive: '100vw', fill: '100vw' }[I];
            t && !b && (b = t);
          }
          let L = '',
            q = p(S),
            G = p(C);
          if ('object' == typeof (n = m) && (f(n) || void 0 !== n.src)) {
            let e = f(m) ? m.default : m;
            if (!e.src) throw Error('An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' + JSON.stringify(e));
            if (!e.height || !e.width) throw Error('An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' + JSON.stringify(e));
            if (((r = e.blurWidth), (i = e.blurHeight), (M = M || e.blurDataURL), (L = e.src), !E)) {
              if (q || G) {
                if (q && !G) {
                  let t = q / e.width;
                  G = Math.round(e.height * t);
                } else if (!q && G) {
                  let t = G / e.height;
                  q = Math.round(e.width * t);
                }
              } else (q = e.width), (G = e.height);
            }
          }
          let V = !v && ('lazy' === w || void 0 === w);
          (!(m = 'string' == typeof m ? m : L) || m.startsWith('data:') || m.startsWith('blob:')) && ((y = !0), (V = !1)), T.unoptimized && (y = !0), B && m.endsWith('.svg') && !T.dangerouslyAllowSVG && (y = !0), v && (A = 'high');
          let [H, $] = (0, o.useState)(!1),
            [J, Y] = (0, o.useState)(!1),
            Q = p(j),
            Z = Object.assign(E ? { position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: z, objectPosition: R } : {}, J ? {} : { color: 'transparent' }, x),
            K =
              'blur' === O && M && !H
                ? {
                    backgroundSize: Z.objectFit || 'cover',
                    backgroundPosition: Z.objectPosition || '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, l.getImageBlurSvg)({ widthInt: q, heightInt: G, blurWidth: r, blurHeight: i, blurDataURL: M, objectFit: Z.objectFit }) + '")',
                  }
                : {},
            X = (function (e) {
              let { config: t, src: n, unoptimized: r, width: i, quality: o, sizes: a, loader: l } = e;
              if (r) return { src: n, srcSet: void 0, sizes: void 0 };
              let { widths: u, kind: s } = (function (e, t, n) {
                  let { deviceSizes: r, allSizes: i } = e;
                  if (n) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return { widths: i.filter((t) => t >= r[0] * e), kind: 'w' };
                    }
                    return { widths: i, kind: 'w' };
                  }
                  if ('number' != typeof t) return { widths: r, kind: 'w' };
                  let o = [...new Set([t, 2 * t].map((e) => i.find((t) => t >= e) || i[i.length - 1]))];
                  return { widths: o, kind: 'x' };
                })(t, i, a),
                c = u.length - 1;
              return { sizes: a || 'w' !== s ? a : '100vw', srcSet: u.map((e, r) => l({ config: t, src: n, quality: o, width: e }) + ' ' + ('w' === s ? e : r + 1) + s).join(', '), src: l({ config: t, src: n, quality: o, width: u[c] }) };
            })({ config: T, src: m, unoptimized: y, width: q, quality: Q, sizes: b, loader: W }),
            ee = m,
            et = (0, o.useRef)(P);
          (0, o.useEffect)(() => {
            et.current = P;
          }, [P]);
          let en = (0, o.useRef)(k);
          (0, o.useEffect)(() => {
            en.current = k;
          }, [k]);
          let er = {
            isLazy: V,
            imgAttributes: X,
            heightInt: G,
            widthInt: q,
            qualityInt: Q,
            className: _,
            imgStyle: Z,
            blurStyle: K,
            loading: w,
            config: T,
            fetchPriority: A,
            fill: E,
            unoptimized: y,
            placeholder: O,
            loader: W,
            srcString: ee,
            onLoadRef: et,
            onLoadingCompleteRef: en,
            setBlurComplete: $,
            setShowAltText: Y,
            ...N,
          };
          return o.default.createElement(
            o.default.Fragment,
            null,
            o.default.createElement(h, { ...er, ref: t }),
            v
              ? o.default.createElement(
                  a.default,
                  null,
                  o.default.createElement('link', {
                    key: '__nimg-' + X.src + X.srcSet + X.sizes,
                    rel: 'preload',
                    as: 'image',
                    href: X.srcSet ? void 0 : X.src,
                    imageSrcSet: X.srcSet,
                    imageSizes: X.sizes,
                    crossOrigin: N.crossOrigin,
                    referrerPolicy: N.referrerPolicy,
                    ...g(A),
                  })
                )
              : null
          );
        }),
        y = b;
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    9063: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'AmpStateContext', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(670),
        i = r._(n(3962)),
        o = i.default.createContext({});
    },
    1702: function (e, t) {
      'use strict';
      function n(e) {
        let { ampFirst: t = !1, hybrid: n = !1, hasQuery: r = !1 } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isInAmpMode', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    9465: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return c;
          },
          default: function () {
            return m;
          },
        });
      let r = n(670),
        i = n(5294),
        o = i._(n(3962)),
        a = r._(n(6614)),
        l = n(9063),
        u = n(6402),
        s = n(1702);
      function c(e) {
        void 0 === e && (e = !1);
        let t = [o.default.createElement('meta', { charSet: 'utf-8' })];
        return e || t.push(o.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })), t;
      }
      function d(e, t) {
        return 'string' == typeof t || 'number' == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => ('string' == typeof t || 'number' == typeof t ? e : e.concat(t)), []))
          : e.concat(t);
      }
      n(1521);
      let f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function p(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(d, [])
          .reverse()
          .concat(c(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (i.key && 'number' != typeof i.key && i.key.indexOf('$') > 0) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf('$') + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case 'title':
                  case 'base':
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case 'meta':
                    for (let e = 0, t = f.length; e < t; e++) {
                      let t = f[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ('charSet' === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ('name' !== t || !a) && n.has(e) ? (o = !1) : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (!n && 'link' === e.type && e.props.href && ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some((t) => e.props.href.startsWith(t))) {
              let t = { ...(e.props || {}) };
              return (t['data-href'] = t.href), (t.href = void 0), (t['data-optimized-fonts'] = !0), o.default.cloneElement(e, t);
            }
            return o.default.cloneElement(e, { key: r });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          n = (0, o.useContext)(l.AmpStateContext),
          r = (0, o.useContext)(u.HeadManagerContext);
        return o.default.createElement(a.default, { reduceComponentsToState: p, headManager: r, inAmpMode: (0, s.isInAmpMode)(n) }, t);
      };
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    2901: function (e, t) {
      'use strict';
      function n(e) {
        let { widthInt: t, heightInt: n, blurWidth: r, blurHeight: i, blurDataURL: o, objectFit: a } = e,
          l = r || t,
          u = i || n,
          s = o.startsWith('data:image/jpeg') ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : '';
        return l && u
          ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " +
              l +
              ' ' +
              u +
              "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" +
              (r && i ? '1' : '20') +
              "'/%3E" +
              s +
              "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" +
              o +
              "'/%3E%3C/svg%3E"
          : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" +
              ('contain' === a ? 'xMidYMid' : 'cover' === a ? 'xMidYMid slice' : 'none') +
              "' x='0' y='0' height='100%25' width='100%25' href='" +
              o +
              "'/%3E%3C/svg%3E";
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImageBlurSvg', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    6349: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ImageConfigContext', {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(670),
        i = r._(n(3962)),
        o = n(8702),
        a = i.default.createContext(o.imageConfigDefault);
    },
    8702: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '_next/image',
          loader: 'default',
          loaderFile: '',
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ['image/webp'],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: 'inline',
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    7042: function (e, t) {
      'use strict';
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return t.path + '?url=' + encodeURIComponent(n) + '&w=' + r + '&q=' + (i || 75);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    6614: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(5294),
        i = r._(n(3962)),
        o = i.useLayoutEffect,
        a = i.useEffect;
      function l(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function r() {
          if (t && t.mountedInstances) {
            let r = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
            t.updateHead(n(r, e));
          }
        }
        return (
          o(() => {
            var n;
            return (
              null == t || null == (n = t.mountedInstances) || n.add(e.children),
              () => {
                var n;
                null == t || null == (n = t.mountedInstances) || n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = r),
              () => {
                t && (t._pendingUpdate = r);
              }
            )
          ),
          a(
            () => (
              t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    1521: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'warnOnce', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (e) => {};
    },
    1214: function (e, t, n) {
      e.exports = n(9094);
    },
    7522: function (e, t, n) {
      'use strict';
      n.d(t, {
        xQ: function () {
          return o;
        },
      });
      var r = n(3962),
        i =
          'undefined' != typeof window &&
          new (class {
            constructor() {
              (this.raf = (e) => {
                requestAnimationFrame(this.raf);
                let t = e - this.now;
                this.now = e;
                for (let n = 0; n < this.callbacks.length; n++) this.callbacks[n].callback(e, t);
              }),
                (this.callbacks = []),
                (this.now = performance.now()),
                requestAnimationFrame(this.raf);
            }
            add(e, t = 0) {
              return this.callbacks.push({ callback: e, priority: t }), this.callbacks.sort((e, t) => e.priority - t.priority), () => this.remove(e);
            }
            remove(e) {
              this.callbacks = this.callbacks.filter(({ callback: t }) => e !== t);
            }
          })();
      function o(e, t = 0) {
        (0, r.useEffect)(() => {
          if (e) return i.add(e, t), () => i.remove(e);
        }, [e, t]);
      }
    },
    7182: function (e, t, n) {
      'use strict';
      t.Z = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                i = '';
              if ('string' == typeof t || 'number' == typeof t) i += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                else for (n in t) t[n] && (i && (i += ' '), (i += n));
              }
              return i;
            })(e)) &&
            (r && (r += ' '), (r += t));
        return r;
      };
    },
  },
]);
