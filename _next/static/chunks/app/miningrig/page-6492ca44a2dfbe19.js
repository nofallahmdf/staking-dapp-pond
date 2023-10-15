(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [701],
  {
    2591: function (s, e, a) {
      Promise.resolve().then(a.bind(a, 9252));
    },
    9252: function (s, e, a) {
      'use strict';
      a.r(e),
        a.d(e, {
          default: function () {
            return m;
          },
        });
      var l = a(9914),
        i = a(3962),
        t = a(6369),
        n = a.n(t),
        c = a(3089),
        d = a(9999),
        r = a(7875),
        o = a(5214),
        h = a(3162),
        x = a(7948),
        u = a(3011),
        p = a(9652);
      let j = (0, c.v)({ chain: o.ws, transport: (0, d.d)() });
      function m() {
        let { address: s, isConnected: e } = (0, p.mA)(),
          { disconnect: a } = (0, p.qL)(),
          { open: t, isOpen: c } = (0, x.k_)(),
          { chain: d, chains: o } = (0, h.Hy)();
        (0, i.useMemo)(() => (0, u.j)(s), [s]);
        let [m, f] = (0, i.useState)(0),
          [N, b] = (0, i.useState)(''),
          [v, w] = (0, i.useState)('0'),
          [y, g] = (0, i.useState)(),
          [S, k] = (0, i.useState)(''),
          [P, E] = (0, i.useState)(!1),
          [M, _] = (0, i.useState)(0),
          [A, C] = (0, i.useState)('0'),
          [W, B] = (0, i.useState)({ blockno: 0, mined: 0, totalAllocPoint: 0, totalMinedPositions: 0, latestBlockStart: 0, difficulty: 0 });
        return (
          (0, i.useEffect)(() => {}, [j]),
          (0, i.useEffect)(() => {
            s &&
              (async () => {
                let s = await j.readContract({
                  address: '0xD9791dB20C6CAA0616c7F6422790cf3244F56536',
                  abi: [{ inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }],
                  functionName: 'totalSupply',
                });
                console.log('pond supply', s), console.log(parseFloat((0, r.d)(s))), C('0');
              })();
          }, [s, j]),
          (0, l.jsx)('div', {
            className: 'w-full h-full bg-black max-w-[100vw]',
            children: (0, l.jsxs)('div', {
              id: 'frame',
              className: 'frame',
              children: [
                (0, l.jsx)(n(), {
                  href: '../',
                  children: (0, l.jsxs)('div', {
                    className: 'z-10 absolute mt-3 right-[30px] flex justify-right gap-0 w-fit',
                    children: [
                      (0, l.jsxs)('svg', {
                        className: 'w-6 h-6 translate-y-1 ',
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [(0, l.jsx)('path', { stroke: '#65ac55', strokeWidth: '2', d: 'M1 11L11 1' }), (0, l.jsx)('path', { stroke: '#65ac55', strokeWidth: '2', d: 'M1 1L11 11' })],
                      }),
                      (0, l.jsx)('div', { className: '', children: 'Close' }),
                    ],
                  }),
                }),
                (0, l.jsx)(n(), {
                  href: '../',
                  children: (0, l.jsxs)('div', {
                    className: 'piece output container',
                    children: [
                      (0, l.jsx)('div', {
                        className: 'pipboy',
                        children: (0, l.jsx)('div', {
                          className: 'tab-content',
                          children: (0, l.jsxs)('div', {
                            className: 'tab-pane fade in active overflow-x-hidden',
                            id: 'items',
                            children: [
                              (0, l.jsx)('div', { className: 'vboy filter', children: (0, l.jsx)(n(), { href: '/', children: (0, l.jsx)('img', { src: 'images/pondflta.png', className: '' }) }) }),
                              (0, l.jsxs)('ul', {
                                className: 'pip-head',
                                children: [
                                  (0, l.jsxs)('li', {
                                    children: [
                                      (0, l.jsxs)('span', { className: 'fade-a', children: [(0, l.jsx)('b', { children: 'Rewards' }), ' 0%'] }),
                                      (0, l.jsxs)('span', { className: 'fade-b', children: [(0, l.jsx)('b', { children: 'USD' }), ' $--'] }),
                                    ],
                                  }),
                                  (0, l.jsxs)('li', {
                                    children: [
                                      (0, l.jsxs)('span', { className: 'fade-a', children: [(0, l.jsx)('b', { children: 'PEPE' }), ' ', W.difficulty] }),
                                      (0, l.jsxs)('span', { className: 'fade-b', children: [(0, l.jsx)('b', { children: 'PEPE' }), ' --'] }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsx)('div', {
                                className: 'pip-body -ml-[30px] h-[50px] mt-5',
                                children: (0, l.jsx)('ul', {
                                  className: 'pip-head !relative',
                                  children: (0, l.jsxs)('li', { className: '!w-full !border-transparent text-xl sm:text-lg no', children: [(0, l.jsx)('b', { children: 'SPAWN' }), ' ', A] }),
                                }),
                              }),
                              (0, l.jsx)('div', {
                                className: 'pip-body',
                                children: (0, l.jsx)('div', {
                                  className: 'info ml-0',
                                  children: (0, l.jsxs)('div', {
                                    className: 'info-body',
                                    children: [
                                      (0, l.jsx)('p', { className: 'extra !border-transparent', children: (0, l.jsx)('b', { children: 'Rewards Pool' }) }),
                                      (0, l.jsxs)('ul', {
                                        className: 'info-table',
                                        children: [
                                          (0, l.jsx)('li', { className: 'vboy-wrap' }),
                                          (0, l.jsxs)('li', {
                                            className: 'clear',
                                            children: [
                                              (0, l.jsxs)('span', { className: 'fade-a', children: [(0, l.jsx)('b', { children: 'Wallets' }), ' ', W.totalMinedPositions] }),
                                              (0, l.jsxs)('span', { className: 'fade-b', children: [(0, l.jsx)('b', { children: 'Addresses' }), '  ', W.totalMinedPositions] }),
                                            ],
                                          }),
                                          (0, l.jsxs)('li', {
                                            children: [(0, l.jsx)('b', { children: 'Status' }), ' ', (0, l.jsx)('span', { className: 'condition', children: (0, l.jsx)('span', { className: 'fill', style: { width: '1%' } }) })],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsx)('div', { className: 'piece glow noclick' }),
                      (0, l.jsx)('div', { className: 'piece scanlines noclick' }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    3011: function (s, e, a) {
      'use strict';
      a.d(e, {
        j: function () {
          return l;
        },
      });
      let l = (s) => {
        if (!s) return '';
        let e = s.substring(0, 6),
          a = s.substring(38, 42);
        return ''.concat(e, '...').concat(a);
      };
    },
  },
  function (s) {
    s.O(0, [330, 369, 64, 857, 744], function () {
      return s((s.s = 2591));
    }),
      (_N_E = s.O());
  },
]);
