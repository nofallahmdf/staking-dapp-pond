(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2634: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 5702)), Promise.resolve().then(t.t.bind(t, 8449, 23));
    },
    5702: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, {
          default: function () {
            return x;
          },
        });
      var o = t(9914),
        n = t(3962),
        s = t(3162),
        i = t(9652),
        c = t(801),
        l = t(4649),
        a = t(7948),
        m = t(1693);
      let u = '3e02bfb9d6c0ced14468e7c351f9191f',
        d = [c.RJ],
        { publicClient: f } = (0, s.QB)(d, [(0, l.X)({ projectId: u }), (0, m.G)({ apiKey: '7fY6GkO8XLR-FpZzC5kmr_qewhSuR1Nk' })]),
        h = (0, i._g)({ autoConnect: !0, connectors: (0, l.gu)({ projectId: u, chains: d }), publicClient: f }),
        p = new l.J0(h, d);
      function w(e) {
        let { children: r } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.eM, { config: h, children: r }),
            (0, o.jsx)(a.Eg, {
              projectId: u,
              ethereumClient: p,
              themeMode: 'light',
              themeVariables: {
                '--w3m-font-family': 'Arial',
                '--w3m-overlay-backdrop-filter': 'blur(5px)',
                '--w3m-button-border-radius': '0rem',
                '--w3m-button-hover-highlight-border-radius': '0',
                '--w3m-accent-color': '#000',
                '--w3m-accent-fill-color': '#76D248',
                '--w3m-background-color': '#76D248',
                '--w3m-background-border-radius': '0rem',
                '--w3m-text-medium-regular-size': '15px',
                '--w3m-text-medium-regular-letter-spacing': '0px',
                '--w3m-text-medium-regular-text-transform': 'uppercase',
                '--w3m-container-border-radius': '0px',
                '--w3m-wallet-icon-border-radius': '0px',
              },
            }),
          ],
        });
      }
      var g = t(500);
      function x(e) {
        let { children: r } = e,
          [t, s] = (0, n.useState)(!0);
        return (0, o.jsxs)('div', {
          className: t ? 'dark overflow-y-scroll' : '',
          children: [
            (0, o.jsx)('link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }),
            (0, o.jsx)('link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }),
            (0, o.jsx)('link', { href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&family=Roboto:wght@300;400;700&display=swap', rel: 'stylesheet' }),
            (0, o.jsxs)(w, { children: [(0, o.jsx)('main', { className: ' max-w-[100vw] overflow-x-hidden', children: r }), (0, o.jsx)(g.cp, {})] }),
          ],
        });
      }
    },
    8449: function () {},
  },
  function (e) {
    e.O(0, [330, 375, 64, 857, 744], function () {
      return e((e.s = 2634));
    }),
      (_N_E = e.O());
  },
]);
