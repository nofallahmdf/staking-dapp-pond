'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [375],
  {
    500: function (t, e, n) {
      n.d(e, {
        cp: function () {
          return a;
        },
      });
      var i = n(3962),
        s = () => {
          window.va ||
            (window.va = function (...t) {
              (window.vaq = window.vaq || []).push(t);
            });
        };
      function c() {
        return 'development' === (window.vam || 'production');
      }
      function a({ beforeSend: t, debug: e = !0, mode: n = 'auto' }) {
        return (
          (0, i.useEffect)(() => {
            !(function (t = { debug: !0 }) {
              var e;
              if (!('undefined' != typeof window)) return;
              (function (t = 'auto') {
                if ('auto' === t) {
                  window.vam = 'production';
                  return;
                }
                window.vam = t;
              })(t.mode),
                s(),
                t.beforeSend && (null == (e = window.va) || e.call(window, 'beforeSend', t.beforeSend));
              let n = c() ? 'https://va.vercel-scripts.com/v1/script.debug.js' : '/_vercel/insights/script.js';
              if (document.head.querySelector(`script[src*="${n}"]`)) return;
              let i = document.createElement('script');
              (i.src = n), (i.defer = !0), i.setAttribute('data-sdkn', '@vercel/analytics'), i.setAttribute('data-sdkv', '1.0.1'), c() && !1 === t.debug && i.setAttribute('data-debug', 'false'), document.head.appendChild(i);
            })({ beforeSend: t, debug: e, mode: n });
          }, [t, e, n]),
          null
        );
      }
    },
    801: function (t, e, n) {
      n.d(e, {
        RJ: function () {
          return i;
        },
      });
      var i = {
        id: 1,
        network: 'homestead',
        name: 'Ethereum',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          alchemy: { http: ['https://eth-mainnet.g.alchemy.com/v2'], webSocket: ['wss://eth-mainnet.g.alchemy.com/v2'] },
          infura: { http: ['https://mainnet.infura.io/v3'], webSocket: ['wss://mainnet.infura.io/ws/v3'] },
          default: { http: ['https://cloudflare-eth.com'] },
          public: { http: ['https://cloudflare-eth.com'] },
        },
        blockExplorers: { etherscan: { name: 'Etherscan', url: 'https://etherscan.io' }, default: { name: 'Etherscan', url: 'https://etherscan.io' } },
        contracts: {
          ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
          ensUniversalResolver: { address: '0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62', blockCreated: 16966585 },
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11', blockCreated: 14353601 },
        },
      };
    },
    1693: function (t, e, n) {
      n.d(e, {
        G: function () {
          return i;
        },
      });
      function i({ apiKey: t }) {
        return function (e) {
          let n = e.rpcUrls.alchemy?.http[0],
            i = e.rpcUrls.alchemy?.webSocket?.[0];
          return n ? { chain: { ...e, rpcUrls: { ...e.rpcUrls, default: { http: [`${n}/${t}`] } } }, rpcUrls: { http: [`${n}/${t}`], webSocket: [`${i}/${t}`] } } : null;
        };
      }
    },
    4649: function (t, e, n) {
      n.d(e, {
        J0: function () {
          return q;
        },
        gu: function () {
          return D;
        },
        X: function () {
          return x;
        },
      });
      var i,
        s,
        c,
        a,
        r,
        o,
        h,
        l,
        d,
        u,
        p,
        w,
        f,
        m,
        v,
        g,
        C,
        y,
        U,
        b,
        k = n(3162),
        E = n(6450),
        S = n(2375),
        I = n(5818),
        P = n(7224),
        W = n(1179),
        A = n(6838),
        K = n(471),
        _ = 'eip155',
        j = 'requestedChains',
        N = 'wallet_addEthereumChain',
        $ = class extends S.wR {
          constructor(t) {
            super({ ...t, options: { isNewChainsStale: !0, ...t.options } }),
              (0, S.Ko)(this, c),
              (0, S.Ko)(this, r),
              (0, S.Ko)(this, h),
              (0, S.Ko)(this, d),
              (0, S.Ko)(this, p),
              (0, S.Ko)(this, f),
              (0, S.Ko)(this, v),
              (0, S.Ko)(this, C),
              (0, S.Ko)(this, U),
              (0, S.ov)(this, 'id', 'walletConnect'),
              (0, S.ov)(this, 'name', 'WalletConnect'),
              (0, S.ov)(this, 'ready', !0),
              (0, S.Ko)(this, i, void 0),
              (0, S.Ko)(this, s, void 0),
              (0, S.ov)(this, 'onAccountsChanged', (t) => {
                0 === t.length ? this.emit('disconnect') : this.emit('change', { account: (0, I.K)(t[0]) });
              }),
              (0, S.ov)(this, 'onChainChanged', (t) => {
                let e = Number(t),
                  n = this.isChainUnsupported(e);
                this.emit('change', { chain: { id: e, unsupported: n } });
              }),
              (0, S.ov)(this, 'onDisconnect', () => {
                (0, S.U9)(this, f, m).call(this, []), this.emit('disconnect');
              }),
              (0, S.ov)(this, 'onDisplayUri', (t) => {
                this.emit('message', { type: 'display_uri', data: t });
              }),
              (0, S.ov)(this, 'onConnect', () => {
                this.emit('connect', {});
              }),
              (0, S.U9)(this, c, a).call(this);
          }
          async connect({ chainId: t, pairingTopic: e } = {}) {
            try {
              let n = t;
              if (!n) {
                let t = this.storage?.getItem('store'),
                  e = t?.state?.data?.chain?.id;
                n = e && !this.isChainUnsupported(e) ? e : this.chains[0]?.id;
              }
              if (!n) throw Error('No chains found on connector.');
              let i = await this.getProvider();
              (0, S.U9)(this, d, u).call(this);
              let s = (0, S.U9)(this, h, l).call(this);
              if ((i.session && s && (await i.disconnect()), !i.session || s)) {
                let t = this.chains.filter((t) => t.id !== n).map((t) => t.id);
                this.emit('message', { type: 'connecting' }),
                  await i.connect({ pairingTopic: e, chains: [n], optionalChains: t }),
                  (0, S.U9)(this, f, m).call(
                    this,
                    this.chains.map(({ id: t }) => t)
                  );
              }
              let c = await i.enable(),
                a = (0, I.K)(c[0]),
                r = await this.getChainId(),
                o = this.isChainUnsupported(r);
              return { account: a, chain: { id: r, unsupported: o } };
            } catch (t) {
              if (/user rejected/i.test(t?.message)) throw new P.ab(t);
              throw t;
            }
          }
          async disconnect() {
            let t = await this.getProvider();
            try {
              await t.disconnect();
            } catch (t) {
              if (!/No matching key/i.test(t.message)) throw t;
            } finally {
              (0, S.U9)(this, p, w).call(this), (0, S.U9)(this, f, m).call(this, []);
            }
          }
          async getAccount() {
            let { accounts: t } = await this.getProvider();
            return (0, I.K)(t[0]);
          }
          async getChainId() {
            let { chainId: t } = await this.getProvider();
            return t;
          }
          async getProvider({ chainId: t } = {}) {
            return (0, S.ac)(this, i) || (await (0, S.U9)(this, c, a).call(this)), t && (await this.switchChain(t)), (0, S.ac)(this, i);
          }
          async getWalletClient({ chainId: t } = {}) {
            let [e, n] = await Promise.all([this.getProvider({ chainId: t }), this.getAccount()]),
              i = this.chains.find((e) => e.id === t);
            if (!e) throw Error('provider is required.');
            return (0, W.K)({ account: n, chain: i, transport: (0, A.P)(e) });
          }
          async isAuthorized() {
            try {
              let [t, e] = await Promise.all([this.getAccount(), this.getProvider()]),
                n = (0, S.U9)(this, h, l).call(this);
              if (!t) return !1;
              if (n && e.session) {
                try {
                  await e.disconnect();
                } catch {}
                return !1;
              }
              return !0;
            } catch {
              return !1;
            }
          }
          async switchChain(t) {
            let e = this.chains.find((e) => e.id === t);
            if (!e) throw new P.x3(Error('chain not found on connector.'));
            try {
              let n = await this.getProvider(),
                i = (0, S.U9)(this, C, y).call(this),
                s = (0, S.U9)(this, U, b).call(this),
                c = i.includes(t);
              if (!c && s.includes(N)) {
                await n.request({ method: N, params: [{ chainId: (0, K.eC)(e.id), blockExplorerUrls: [e.blockExplorers?.default?.url], chainName: e.name, nativeCurrency: e.nativeCurrency, rpcUrls: [...e.rpcUrls.default.http] }] });
                let i = (0, S.U9)(this, v, g).call(this);
                i.push(t), (0, S.U9)(this, f, m).call(this, i);
              }
              return await n.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: (0, K.eC)(t) }] }), e;
            } catch (e) {
              let t = 'string' == typeof e ? e : e?.message;
              if (/user rejected request/i.test(t)) throw new P.ab(e);
              throw new P.x3(e);
            }
          }
        };
      (i = new WeakMap()),
        (s = new WeakMap()),
        (c = new WeakSet()),
        (a = async function () {
          return (0, S.ac)(this, s) || 'undefined' == typeof window || (0, S.qx)(this, s, (0, S.U9)(this, r, o).call(this)), (0, S.ac)(this, s);
        }),
        (r = new WeakSet()),
        (o = async function () {
          let { default: t, OPTIONAL_EVENTS: e, OPTIONAL_METHODS: s } = await Promise.all([n.e(26), n.e(804)]).then(n.bind(n, 1026)),
            [c, ...a] = this.chains.map(({ id: t }) => t);
          if (c) {
            let { projectId: n, showQrModal: r = !0, qrModalOptions: o, metadata: h } = this.options;
            (0, S.qx)(
              this,
              i,
              await t.init({
                showQrModal: r,
                qrModalOptions: o,
                projectId: n,
                optionalMethods: s,
                optionalEvents: e,
                chains: [c],
                optionalChains: a,
                rpcMap: Object.fromEntries(this.chains.map((t) => [t.id, t.rpcUrls.default.http[0]])),
                metadata: h,
              })
            );
          }
        }),
        (h = new WeakSet()),
        (l = function () {
          let t = (0, S.U9)(this, U, b).call(this);
          if (t.includes(N) || !this.options.isNewChainsStale) return !1;
          let e = (0, S.U9)(this, v, g).call(this),
            n = this.chains.map(({ id: t }) => t),
            i = (0, S.U9)(this, C, y).call(this);
          return (!i.length || !!i.some((t) => n.includes(t))) && !n.every((t) => e.includes(t));
        }),
        (d = new WeakSet()),
        (u = function () {
          (0, S.ac)(this, i) &&
            ((0, S.U9)(this, p, w).call(this),
            (0, S.ac)(this, i).on('accountsChanged', this.onAccountsChanged),
            (0, S.ac)(this, i).on('chainChanged', this.onChainChanged),
            (0, S.ac)(this, i).on('disconnect', this.onDisconnect),
            (0, S.ac)(this, i).on('session_delete', this.onDisconnect),
            (0, S.ac)(this, i).on('display_uri', this.onDisplayUri),
            (0, S.ac)(this, i).on('connect', this.onConnect));
        }),
        (p = new WeakSet()),
        (w = function () {
          (0, S.ac)(this, i) &&
            ((0, S.ac)(this, i).removeListener('accountsChanged', this.onAccountsChanged),
            (0, S.ac)(this, i).removeListener('chainChanged', this.onChainChanged),
            (0, S.ac)(this, i).removeListener('disconnect', this.onDisconnect),
            (0, S.ac)(this, i).removeListener('session_delete', this.onDisconnect),
            (0, S.ac)(this, i).removeListener('display_uri', this.onDisplayUri),
            (0, S.ac)(this, i).removeListener('connect', this.onConnect));
        }),
        (f = new WeakSet()),
        (m = function (t) {
          this.storage?.setItem(j, t);
        }),
        (v = new WeakSet()),
        (g = function () {
          return this.storage?.getItem(j) ?? [];
        }),
        (C = new WeakSet()),
        (y = function () {
          if (!(0, S.ac)(this, i)) return [];
          let t = S.ac(this, i).session?.namespaces[_]?.chains?.map((t) => parseInt(t.split(':')[1] || ''));
          return t ?? [];
        }),
        (U = new WeakSet()),
        (b = function () {
          if (!(0, S.ac)(this, i)) return [];
          let t = S.ac(this, i).session?.namespaces[_]?.methods;
          return t ?? [];
        });
      class q {
        constructor(t, e) {
          (this.wagmi = {}),
            (this.chains = []),
            (this.namespace = 'eip155'),
            (this.disconnect = k.zP),
            (this.getAccount = k.D0),
            (this.watchAccount = k.uH),
            (this.fetchBalance = k.EG),
            (this.getNetwork = k.Hy),
            (this.watchNetwork = k.QC),
            (this.switchNetwork = k.If),
            (this.fetchEnsName = k.Lk),
            (this.fetchEnsAvatar = k.w6),
            (this.wagmi = t),
            (this.chains = e);
        }
        getWalletConnectConnector() {
          let t = this.wagmi.connectors.find((t) => 'walletConnect' === t.id);
          if (!t) throw Error('WalletConnectConnector is required');
          return t;
        }
        async connectWalletConnectProvider(t, e) {
          return (
            await t.getProvider(),
            new Promise((n) => {
              t.once('message', (t) => {
                'display_uri' === t.type && (e(t.data), n());
              });
            })
          );
        }
        getConnectorById(t) {
          let e = this.wagmi.connectors.find((e) => e.id === t);
          if (!e) throw Error(`Connector for id ${t} was not found`);
          return e;
        }
        getConnectors() {
          return this.wagmi.connectors.filter((t) => !t.id.includes('walletConnect'));
        }
        async connectWalletConnect(t, e) {
          let n = this.getWalletConnectConnector(),
            i = { connector: n };
          return e && (i.chainId = e), Promise.all([(0, k.$j)(i), this.connectWalletConnectProvider(n, t)]);
        }
        async connectConnector(t, e) {
          let n = { connector: this.getConnectorById(t) };
          return e && (n.chainId = e), await (0, k.$j)(n);
        }
        isInjectedProviderInstalled() {
          return 'u' > typeof window.ethereum;
        }
        safeCheckInjectedProvider(t) {
          var e;
          try {
            let n = String(t);
            return !!(null == (e = window.ethereum) ? void 0 : e[n]);
          } catch (t) {
            return console.error(t), !1;
          }
        }
        async getConnectedChainIds() {
          var t, e, n;
          let i = null == (e = null == (t = (await this.getWalletConnectConnector().getProvider()).signer) ? void 0 : t.session) ? void 0 : e.namespaces,
            s = null == (n = i?.[this.namespace]) ? void 0 : n.methods;
          if (null != s && s.includes('wallet_addEthereumChain')) return 'ALL';
          if (i) {
            let t = [];
            return (
              Object.keys(i).forEach((e) => {
                e.includes(this.namespace) && t.push(...i[e].accounts);
              }),
              t?.map((t) => t.split(':')[1])
            );
          }
          return 'ALL';
        }
      }
      function x({ projectId: t }) {
        return (function ({ rpc: t }) {
          return function (e) {
            let n = t(e);
            return n && '' !== n.http ? { chain: { ...e, rpcUrls: { ...e.rpcUrls, default: { http: [n.http] } } }, rpcUrls: { http: [n.http], webSocket: n.webSocket ? [n.webSocket] : void 0 } } : null;
          };
        })({
          rpc: (e) => {
            var n;
            return [1, 3, 4, 5, 10, 42, 56, 69, 97, 100, 137, 280, 324, 420, 42161, 42220, 43114, 80001, 421611, 421613, 1313161554, 1313161555].includes(e.id)
              ? { http: `https://rpc.walletconnect.com/v1/?chainId=eip155:${e.id}&projectId=${t}` }
              : { http: e.rpcUrls.default.http[0], webSocket: null == (n = e.rpcUrls.default.webSocket) ? void 0 : n[0] };
          },
        });
      }
      function D({ chains: t, projectId: e }) {
        return [new $({ chains: t, options: { projectId: e, showQrModal: !1 } }), new E._({ chains: t, options: { shimDisconnect: !0 } })];
      }
    },
  },
]);
