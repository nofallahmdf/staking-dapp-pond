(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [26],
  {
    198: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(4991);
      function n(e, t, r) {
        return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), (t[r + 0] = e >>> 8), (t[r + 1] = e >>> 0), t;
      }
      function s(e, t, r) {
        return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), (t[r + 0] = e >>> 0), (t[r + 1] = e >>> 8), t;
      }
      function o(e, t) {
        return void 0 === t && (t = 0), (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
      }
      function a(e, t) {
        return void 0 === t && (t = 0), ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0;
      }
      function c(e, t) {
        return void 0 === t && (t = 0), (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t];
      }
      function u(e, t) {
        return void 0 === t && (t = 0), ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0;
      }
      function h(e, t, r) {
        return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), (t[r + 0] = e >>> 24), (t[r + 1] = e >>> 16), (t[r + 2] = e >>> 8), (t[r + 3] = e >>> 0), t;
      }
      function l(e, t, r) {
        return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), (t[r + 0] = e >>> 0), (t[r + 1] = e >>> 8), (t[r + 2] = e >>> 16), (t[r + 3] = e >>> 24), t;
      }
      function f(e, t, r) {
        return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), h((e / 4294967296) >>> 0, t, r), h(e >>> 0, t, r + 4), t;
      }
      function p(e, t, r) {
        return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), l(e >>> 0, t, r), l((e / 4294967296) >>> 0, t, r + 4), t;
      }
      (t.readInt16BE = function (e, t) {
        return void 0 === t && (t = 0), (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16;
      }),
        (t.readUint16BE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0;
        }),
        (t.readInt16LE = function (e, t) {
          return void 0 === t && (t = 0), (((e[t + 1] << 8) | e[t]) << 16) >> 16;
        }),
        (t.readUint16LE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0;
        }),
        (t.writeUint16BE = n),
        (t.writeInt16BE = n),
        (t.writeUint16LE = s),
        (t.writeInt16LE = s),
        (t.readInt32BE = o),
        (t.readUint32BE = a),
        (t.readInt32LE = c),
        (t.readUint32LE = u),
        (t.writeUint32BE = h),
        (t.writeInt32BE = h),
        (t.writeUint32LE = l),
        (t.writeInt32LE = l),
        (t.readInt64BE = function (e, t) {
          void 0 === t && (t = 0);
          var r = o(e, t),
            i = o(e, t + 4);
          return 4294967296 * r + i - (i >> 31) * 4294967296;
        }),
        (t.readUint64BE = function (e, t) {
          return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4);
        }),
        (t.readInt64LE = function (e, t) {
          void 0 === t && (t = 0);
          var r = c(e, t);
          return 4294967296 * c(e, t + 4) + r - (r >> 31) * 4294967296;
        }),
        (t.readUint64LE = function (e, t) {
          void 0 === t && (t = 0);
          var r = u(e, t);
          return 4294967296 * u(e, t + 4) + r;
        }),
        (t.writeUint64BE = f),
        (t.writeInt64BE = f),
        (t.writeUint64LE = p),
        (t.writeInt64LE = p),
        (t.readUintBE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 != 0)) throw Error('readUintBE supports only bitLengths divisible by 8');
          if (e / 8 > t.length - r) throw Error('readUintBE: array is too short for the given bitLength');
          for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--) (i += t[s] * n), (n *= 256);
          return i;
        }),
        (t.readUintLE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 != 0)) throw Error('readUintLE supports only bitLengths divisible by 8');
          if (e / 8 > t.length - r) throw Error('readUintLE: array is too short for the given bitLength');
          for (var i = 0, n = 1, s = r; s < r + e / 8; s++) (i += t[s] * n), (n *= 256);
          return i;
        }),
        (t.writeUintBE = function (e, t, r, n) {
          if ((void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0)) throw Error('writeUintBE supports only bitLengths divisible by 8');
          if (!i.isSafeInteger(t)) throw Error('writeUintBE value must be an integer');
          for (var s = 1, o = e / 8 + n - 1; o >= n; o--) (r[o] = (t / s) & 255), (s *= 256);
          return r;
        }),
        (t.writeUintLE = function (e, t, r, n) {
          if ((void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0)) throw Error('writeUintLE supports only bitLengths divisible by 8');
          if (!i.isSafeInteger(t)) throw Error('writeUintLE value must be an integer');
          for (var s = 1, o = n; o < n + e / 8; o++) (r[o] = (t / s) & 255), (s *= 256);
          return r;
        }),
        (t.readFloat32BE = function (e, t) {
          return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t);
        }),
        (t.readFloat32LE = function (e, t) {
          return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0);
        }),
        (t.readFloat64BE = function (e, t) {
          return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t);
        }),
        (t.readFloat64LE = function (e, t) {
          return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0);
        }),
        (t.writeFloat32BE = function (e, t, r) {
          return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), t;
        }),
        (t.writeFloat32LE = function (e, t, r) {
          return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), t;
        }),
        (t.writeFloat64BE = function (e, t, r) {
          return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), t;
        }),
        (t.writeFloat64LE = function (e, t, r) {
          return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), t;
        });
    },
    7870: function (e, t, r) {
      'use strict';
      var i = r(9017),
        n = r(3472),
        s = r(8595),
        o = r(198),
        a = r(5734);
      (t.Cv = 32), (t.WH = 12), (t.pg = 16);
      var c = new Uint8Array(16),
        u = (function () {
          function e(e) {
            if (((this.nonceLength = t.WH), (this.tagLength = t.pg), e.length !== t.Cv)) throw Error('ChaCha20Poly1305 needs 32-byte key');
            this._key = new Uint8Array(e);
          }
          return (
            (e.prototype.seal = function (e, t, r, n) {
              if (e.length > 16) throw Error('ChaCha20Poly1305: incorrect nonce length');
              var o,
                a = new Uint8Array(16);
              a.set(e, a.length - e.length);
              var c = new Uint8Array(32);
              i.stream(this._key, a, c, 4);
              var u = t.length + this.tagLength;
              if (n) {
                if (n.length !== u) throw Error('ChaCha20Poly1305: incorrect destination length');
                o = n;
              } else o = new Uint8Array(u);
              return i.streamXOR(this._key, a, t, o, 4), this._authenticate(o.subarray(o.length - this.tagLength, o.length), c, o.subarray(0, o.length - this.tagLength), r), s.wipe(a), o;
            }),
            (e.prototype.open = function (e, t, r, n) {
              if (e.length > 16) throw Error('ChaCha20Poly1305: incorrect nonce length');
              if (t.length < this.tagLength) return null;
              var o,
                c = new Uint8Array(16);
              c.set(e, c.length - e.length);
              var u = new Uint8Array(32);
              i.stream(this._key, c, u, 4);
              var h = new Uint8Array(this.tagLength);
              if ((this._authenticate(h, u, t.subarray(0, t.length - this.tagLength), r), !a.equal(h, t.subarray(t.length - this.tagLength, t.length)))) return null;
              var l = t.length - this.tagLength;
              if (n) {
                if (n.length !== l) throw Error('ChaCha20Poly1305: incorrect destination length');
                o = n;
              } else o = new Uint8Array(l);
              return i.streamXOR(this._key, c, t.subarray(0, t.length - this.tagLength), o, 4), s.wipe(c), o;
            }),
            (e.prototype.clean = function () {
              return s.wipe(this._key), this;
            }),
            (e.prototype._authenticate = function (e, t, r, i) {
              var a = new n.Poly1305(t);
              i && (a.update(i), i.length % 16 > 0 && a.update(c.subarray(i.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
              var u = new Uint8Array(8);
              i && o.writeUint64LE(i.length, u), a.update(u), o.writeUint64LE(r.length, u), a.update(u);
              for (var h = a.digest(), l = 0; l < h.length; l++) e[l] = h[l];
              a.clean(), s.wipe(h), s.wipe(u);
            }),
            e
          );
        })();
      t.OK = u;
    },
    9017: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(198),
        n = r(8595);
      function s(e, t, r, s, o) {
        if ((void 0 === o && (o = 0), 32 !== e.length)) throw Error('ChaCha: key size must be 32 bytes');
        if (s.length < r.length) throw Error('ChaCha: destination is shorter than source');
        if (0 === o) {
          if (8 !== t.length && 12 !== t.length) throw Error('ChaCha nonce must be 8 or 12 bytes');
          (c = (a = new Uint8Array(16)).length - t.length), a.set(t, c);
        } else {
          if (16 !== t.length) throw Error('ChaCha nonce with counter must be 16 bytes');
          (a = t), (c = o);
        }
        for (var a, c, u = new Uint8Array(64), h = 0; h < r.length; h += 64) {
          !(function (e, t, r) {
            for (
              var n = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
                s = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
                o = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
                a = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
                c = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
                u = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
                h = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
                l = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
                f = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
                p = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
                d = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
                g = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
                y = 1634760805,
                v = 857760878,
                m = 2036477234,
                _ = 1797285236,
                b = n,
                w = s,
                E = o,
                D = a,
                S = c,
                I = u,
                O = h,
                P = l,
                C = f,
                A = p,
                x = d,
                N = g,
                T = 0;
              T < 20;
              T += 2
            )
              (C ^= y = (y + b) | 0),
                (b ^= S = (S + (C = (C >>> 16) | (C << 16))) | 0),
                (b = (b >>> 20) | (b << 12)),
                (A ^= v = (v + w) | 0),
                (w ^= I = (I + (A = (A >>> 16) | (A << 16))) | 0),
                (w = (w >>> 20) | (w << 12)),
                (x ^= m = (m + E) | 0),
                (E ^= O = (O + (x = (x >>> 16) | (x << 16))) | 0),
                (E = (E >>> 20) | (E << 12)),
                (N ^= _ = (_ + D) | 0),
                (D ^= P = (P + (N = (N >>> 16) | (N << 16))) | 0),
                (D = (D >>> 20) | (D << 12)),
                (x ^= m = (m + E) | 0),
                (E ^= O = (O + (x = (x >>> 24) | (x << 8))) | 0),
                (E = (E >>> 25) | (E << 7)),
                (N ^= _ = (_ + D) | 0),
                (D ^= P = (P + (N = (N >>> 24) | (N << 8))) | 0),
                (D = (D >>> 25) | (D << 7)),
                (A ^= v = (v + w) | 0),
                (w ^= I = (I + (A = (A >>> 24) | (A << 8))) | 0),
                (w = (w >>> 25) | (w << 7)),
                (C ^= y = (y + b) | 0),
                (b ^= S = (S + (C = (C >>> 24) | (C << 8))) | 0),
                (b = (b >>> 25) | (b << 7)),
                (N ^= y = (y + w) | 0),
                (w ^= O = (O + (N = (N >>> 16) | (N << 16))) | 0),
                (w = (w >>> 20) | (w << 12)),
                (C ^= v = (v + E) | 0),
                (E ^= P = (P + (C = (C >>> 16) | (C << 16))) | 0),
                (E = (E >>> 20) | (E << 12)),
                (A ^= m = (m + D) | 0),
                (D ^= S = (S + (A = (A >>> 16) | (A << 16))) | 0),
                (D = (D >>> 20) | (D << 12)),
                (x ^= _ = (_ + b) | 0),
                (b ^= I = (I + (x = (x >>> 16) | (x << 16))) | 0),
                (b = (b >>> 20) | (b << 12)),
                (A ^= m = (m + D) | 0),
                (D ^= S = (S + (A = (A >>> 24) | (A << 8))) | 0),
                (D = (D >>> 25) | (D << 7)),
                (x ^= _ = (_ + b) | 0),
                (b ^= I = (I + (x = (x >>> 24) | (x << 8))) | 0),
                (b = (b >>> 25) | (b << 7)),
                (C ^= v = (v + E) | 0),
                (E ^= P = (P + (C = (C >>> 24) | (C << 8))) | 0),
                (E = (E >>> 25) | (E << 7)),
                (N ^= y = (y + w) | 0),
                (w ^= O = (O + (N = (N >>> 24) | (N << 8))) | 0),
                (w = (w >>> 25) | (w << 7));
            i.writeUint32LE((y + 1634760805) | 0, e, 0),
              i.writeUint32LE((v + 857760878) | 0, e, 4),
              i.writeUint32LE((m + 2036477234) | 0, e, 8),
              i.writeUint32LE((_ + 1797285236) | 0, e, 12),
              i.writeUint32LE((b + n) | 0, e, 16),
              i.writeUint32LE((w + s) | 0, e, 20),
              i.writeUint32LE((E + o) | 0, e, 24),
              i.writeUint32LE((D + a) | 0, e, 28),
              i.writeUint32LE((S + c) | 0, e, 32),
              i.writeUint32LE((I + u) | 0, e, 36),
              i.writeUint32LE((O + h) | 0, e, 40),
              i.writeUint32LE((P + l) | 0, e, 44),
              i.writeUint32LE((C + f) | 0, e, 48),
              i.writeUint32LE((A + p) | 0, e, 52),
              i.writeUint32LE((x + d) | 0, e, 56),
              i.writeUint32LE((N + g) | 0, e, 60);
          })(u, a, e);
          for (var l = h; l < h + 64 && l < r.length; l++) s[l] = r[l] ^ u[l - h];
          !(function (e, t, r) {
            for (var i = 1; r--; ) (i = (i + (255 & e[t])) | 0), (e[t] = 255 & i), (i >>>= 8), t++;
            if (i > 0) throw Error('ChaCha: counter overflow');
          })(a, 0, c);
        }
        return n.wipe(u), 0 === o && n.wipe(a), s;
      }
      (t.streamXOR = s),
        (t.stream = function (e, t, r, i) {
          return void 0 === i && (i = 0), n.wipe(r), s(e, t, r, r, i);
        });
    },
    5734: function (e, t) {
      'use strict';
      function r(e, t) {
        if (e.length !== t.length) return 0;
        for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
        return 1 & ((r - 1) >>> 8);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.select = function (e, t, r) {
          return (~(e - 1) & t) | ((e - 1) & r);
        }),
        (t.lessOrEqual = function (e, t) {
          return (((0 | e) - (0 | t) - 1) >>> 31) & 1;
        }),
        (t.compare = r),
        (t.equal = function (e, t) {
          return 0 !== e.length && 0 !== t.length && 0 !== r(e, t);
        });
    },
    4377: function (e, t, r) {
      'use strict';
      (t.Xx = t._w = t.aP = t.KS = t.jQ = void 0), r(7955);
      let i = r(1287);
      function n(e) {
        let t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      r(8595), (t.jQ = 64), (t.KS = 64), (t.aP = 32);
      let s = new Uint8Array(32);
      s[0] = 9;
      let o = n(),
        a = n([1]),
        c = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
        u = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        h = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
      function l(e, t) {
        for (let r = 0; r < 16; r++) e[r] = 0 | t[r];
      }
      function f(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let i = e[r] + t + 65535;
          (t = Math.floor(i / 65536)), (e[r] = i - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function p(e, t, r) {
        let i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
          let n = i & (e[r] ^ t[r]);
          (e[r] ^= n), (t[r] ^= n);
        }
      }
      function d(e, t) {
        let r = n(),
          i = n();
        for (let e = 0; e < 16; e++) i[e] = t[e];
        f(i), f(i), f(i);
        for (let e = 0; e < 2; e++) {
          r[0] = i[0] - 65517;
          for (let e = 1; e < 15; e++) (r[e] = i[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535);
          r[15] = i[15] - 32767 - ((r[14] >> 16) & 1);
          let e = (r[15] >> 16) & 1;
          (r[14] &= 65535), p(i, r, 1 - e);
        }
        for (let t = 0; t < 16; t++) (e[2 * t] = 255 & i[t]), (e[2 * t + 1] = i[t] >> 8);
      }
      n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function g(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
      }
      function y(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
      }
      function v(e, t, r) {
        let i,
          n,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          h = 0,
          l = 0,
          f = 0,
          p = 0,
          d = 0,
          g = 0,
          y = 0,
          v = 0,
          m = 0,
          _ = 0,
          b = 0,
          w = 0,
          E = 0,
          D = 0,
          S = 0,
          I = 0,
          O = 0,
          P = 0,
          C = 0,
          A = 0,
          x = 0,
          N = 0,
          T = 0,
          R = 0,
          L = 0,
          j = 0,
          U = r[0],
          M = r[1],
          k = r[2],
          z = r[3],
          $ = r[4],
          q = r[5],
          H = r[6],
          F = r[7],
          B = r[8],
          V = r[9],
          K = r[10],
          W = r[11],
          G = r[12],
          Y = r[13],
          J = r[14],
          X = r[15];
        (s += (i = t[0]) * U),
          (o += i * M),
          (a += i * k),
          (c += i * z),
          (u += i * $),
          (h += i * q),
          (l += i * H),
          (f += i * F),
          (p += i * B),
          (d += i * V),
          (g += i * K),
          (y += i * W),
          (v += i * G),
          (m += i * Y),
          (_ += i * J),
          (b += i * X),
          (o += (i = t[1]) * U),
          (a += i * M),
          (c += i * k),
          (u += i * z),
          (h += i * $),
          (l += i * q),
          (f += i * H),
          (p += i * F),
          (d += i * B),
          (g += i * V),
          (y += i * K),
          (v += i * W),
          (m += i * G),
          (_ += i * Y),
          (b += i * J),
          (w += i * X),
          (a += (i = t[2]) * U),
          (c += i * M),
          (u += i * k),
          (h += i * z),
          (l += i * $),
          (f += i * q),
          (p += i * H),
          (d += i * F),
          (g += i * B),
          (y += i * V),
          (v += i * K),
          (m += i * W),
          (_ += i * G),
          (b += i * Y),
          (w += i * J),
          (E += i * X),
          (c += (i = t[3]) * U),
          (u += i * M),
          (h += i * k),
          (l += i * z),
          (f += i * $),
          (p += i * q),
          (d += i * H),
          (g += i * F),
          (y += i * B),
          (v += i * V),
          (m += i * K),
          (_ += i * W),
          (b += i * G),
          (w += i * Y),
          (E += i * J),
          (D += i * X),
          (u += (i = t[4]) * U),
          (h += i * M),
          (l += i * k),
          (f += i * z),
          (p += i * $),
          (d += i * q),
          (g += i * H),
          (y += i * F),
          (v += i * B),
          (m += i * V),
          (_ += i * K),
          (b += i * W),
          (w += i * G),
          (E += i * Y),
          (D += i * J),
          (S += i * X),
          (h += (i = t[5]) * U),
          (l += i * M),
          (f += i * k),
          (p += i * z),
          (d += i * $),
          (g += i * q),
          (y += i * H),
          (v += i * F),
          (m += i * B),
          (_ += i * V),
          (b += i * K),
          (w += i * W),
          (E += i * G),
          (D += i * Y),
          (S += i * J),
          (I += i * X),
          (l += (i = t[6]) * U),
          (f += i * M),
          (p += i * k),
          (d += i * z),
          (g += i * $),
          (y += i * q),
          (v += i * H),
          (m += i * F),
          (_ += i * B),
          (b += i * V),
          (w += i * K),
          (E += i * W),
          (D += i * G),
          (S += i * Y),
          (I += i * J),
          (O += i * X),
          (f += (i = t[7]) * U),
          (p += i * M),
          (d += i * k),
          (g += i * z),
          (y += i * $),
          (v += i * q),
          (m += i * H),
          (_ += i * F),
          (b += i * B),
          (w += i * V),
          (E += i * K),
          (D += i * W),
          (S += i * G),
          (I += i * Y),
          (O += i * J),
          (P += i * X),
          (p += (i = t[8]) * U),
          (d += i * M),
          (g += i * k),
          (y += i * z),
          (v += i * $),
          (m += i * q),
          (_ += i * H),
          (b += i * F),
          (w += i * B),
          (E += i * V),
          (D += i * K),
          (S += i * W),
          (I += i * G),
          (O += i * Y),
          (P += i * J),
          (C += i * X),
          (d += (i = t[9]) * U),
          (g += i * M),
          (y += i * k),
          (v += i * z),
          (m += i * $),
          (_ += i * q),
          (b += i * H),
          (w += i * F),
          (E += i * B),
          (D += i * V),
          (S += i * K),
          (I += i * W),
          (O += i * G),
          (P += i * Y),
          (C += i * J),
          (A += i * X),
          (g += (i = t[10]) * U),
          (y += i * M),
          (v += i * k),
          (m += i * z),
          (_ += i * $),
          (b += i * q),
          (w += i * H),
          (E += i * F),
          (D += i * B),
          (S += i * V),
          (I += i * K),
          (O += i * W),
          (P += i * G),
          (C += i * Y),
          (A += i * J),
          (x += i * X),
          (y += (i = t[11]) * U),
          (v += i * M),
          (m += i * k),
          (_ += i * z),
          (b += i * $),
          (w += i * q),
          (E += i * H),
          (D += i * F),
          (S += i * B),
          (I += i * V),
          (O += i * K),
          (P += i * W),
          (C += i * G),
          (A += i * Y),
          (x += i * J),
          (N += i * X),
          (v += (i = t[12]) * U),
          (m += i * M),
          (_ += i * k),
          (b += i * z),
          (w += i * $),
          (E += i * q),
          (D += i * H),
          (S += i * F),
          (I += i * B),
          (O += i * V),
          (P += i * K),
          (C += i * W),
          (A += i * G),
          (x += i * Y),
          (N += i * J),
          (T += i * X),
          (m += (i = t[13]) * U),
          (_ += i * M),
          (b += i * k),
          (w += i * z),
          (E += i * $),
          (D += i * q),
          (S += i * H),
          (I += i * F),
          (O += i * B),
          (P += i * V),
          (C += i * K),
          (A += i * W),
          (x += i * G),
          (N += i * Y),
          (T += i * J),
          (R += i * X),
          (_ += (i = t[14]) * U),
          (b += i * M),
          (w += i * k),
          (E += i * z),
          (D += i * $),
          (S += i * q),
          (I += i * H),
          (O += i * F),
          (P += i * B),
          (C += i * V),
          (A += i * K),
          (x += i * W),
          (N += i * G),
          (T += i * Y),
          (R += i * J),
          (L += i * X),
          (b += (i = t[15]) * U),
          (w += i * M),
          (E += i * k),
          (D += i * z),
          (S += i * $),
          (I += i * q),
          (O += i * H),
          (P += i * F),
          (C += i * B),
          (A += i * V),
          (x += i * K),
          (N += i * W),
          (T += i * G),
          (R += i * Y),
          (L += i * J),
          (j += i * X),
          (s += 38 * w),
          (o += 38 * E),
          (a += 38 * D),
          (c += 38 * S),
          (u += 38 * I),
          (h += 38 * O),
          (l += 38 * P),
          (f += 38 * C),
          (p += 38 * A),
          (d += 38 * x),
          (g += 38 * N),
          (y += 38 * T),
          (v += 38 * R),
          (m += 38 * L),
          (_ += 38 * j),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (n = Math.floor((i = b + n + 65535) / 65536)),
          (b = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (n = Math.floor((i = b + n + 65535) / 65536)),
          (b = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = h),
          (e[6] = l),
          (e[7] = f),
          (e[8] = p),
          (e[9] = d),
          (e[10] = g),
          (e[11] = y),
          (e[12] = v),
          (e[13] = m),
          (e[14] = _),
          (e[15] = b);
      }
      function m(e, t) {
        let r = n(),
          i = n(),
          s = n(),
          o = n(),
          a = n(),
          u = n(),
          h = n(),
          l = n(),
          f = n();
        y(r, e[1], e[0]),
          y(f, t[1], t[0]),
          v(r, r, f),
          g(i, e[0], e[1]),
          g(f, t[0], t[1]),
          v(i, i, f),
          v(s, e[3], t[3]),
          v(s, s, c),
          v(o, e[2], t[2]),
          g(o, o, o),
          y(a, i, r),
          y(u, o, s),
          g(h, o, s),
          g(l, i, r),
          v(e[0], a, u),
          v(e[1], l, h),
          v(e[2], h, u),
          v(e[3], a, l);
      }
      function _(e, t, r) {
        for (let i = 0; i < 4; i++) p(e[i], t[i], r);
      }
      function b(e, t) {
        let r = n(),
          i = n(),
          s = n();
        (function (e, t) {
          let r;
          let i = n();
          for (r = 0; r < 16; r++) i[r] = t[r];
          for (r = 253; r >= 0; r--) v(i, i, i), 2 !== r && 4 !== r && v(i, i, t);
          for (r = 0; r < 16; r++) e[r] = i[r];
        })(s, t[2]),
          v(r, t[0], s),
          v(i, t[1], s),
          d(e, i),
          (e[31] ^=
            (function (e) {
              let t = new Uint8Array(32);
              return d(t, e), 1 & t[0];
            })(r) << 7);
      }
      function w(e, t) {
        let r = [n(), n(), n(), n()];
        l(r[0], u),
          l(r[1], h),
          l(r[2], a),
          v(r[3], u, h),
          (function (e, t, r) {
            l(e[0], o), l(e[1], a), l(e[2], a), l(e[3], o);
            for (let i = 255; i >= 0; --i) {
              let n = (r[(i / 8) | 0] >> (7 & i)) & 1;
              _(e, t, n), m(t, e), m(e, e), _(e, t, n);
            }
          })(e, r, t);
      }
      t._w = function (e) {
        if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
        let r = (0, i.hash)(e);
        (r[0] &= 248), (r[31] &= 127), (r[31] |= 64);
        let s = new Uint8Array(32),
          o = [n(), n(), n(), n()];
        w(o, r), b(s, o);
        let a = new Uint8Array(64);
        return a.set(e), a.set(s, 32), { publicKey: s, secretKey: a };
      };
      let E = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function D(e, t) {
        let r, i, n, s;
        for (i = 63; i >= 32; --i) {
          for (r = 0, n = i - 32, s = i - 12; n < s; ++n) (t[n] += r - 16 * t[i] * E[n - (i - 32)]), (r = Math.floor((t[n] + 128) / 256)), (t[n] -= 256 * r);
          (t[n] += r), (t[i] = 0);
        }
        for (n = 0, r = 0; n < 32; n++) (t[n] += r - (t[31] >> 4) * E[n]), (r = t[n] >> 8), (t[n] &= 255);
        for (n = 0; n < 32; n++) t[n] -= r * E[n];
        for (i = 0; i < 32; i++) (t[i + 1] += t[i] >> 8), (e[i] = 255 & t[i]);
      }
      function S(e) {
        let t = new Float64Array(64);
        for (let r = 0; r < 64; r++) t[r] = e[r];
        for (let t = 0; t < 64; t++) e[t] = 0;
        D(e, t);
      }
      t.Xx = function (e, t) {
        let r = new Float64Array(64),
          s = [n(), n(), n(), n()],
          o = (0, i.hash)(e.subarray(0, 32));
        (o[0] &= 248), (o[31] &= 127), (o[31] |= 64);
        let a = new Uint8Array(64);
        a.set(o.subarray(32), 32);
        let c = new i.SHA512();
        c.update(a.subarray(32)), c.update(t);
        let u = c.digest();
        c.clean(), S(u), w(s, u), b(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
        let h = c.digest();
        S(h);
        for (let e = 0; e < 32; e++) r[e] = u[e];
        for (let e = 0; e < 32; e++) for (let t = 0; t < 32; t++) r[e + t] += h[e] * o[t];
        return D(a.subarray(32), r), a;
      };
    },
    6036: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isSerializableHash = function (e) {
          return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState;
        });
    },
    8010: function (e, t, r) {
      'use strict';
      var i = r(3275),
        n = r(8595),
        s = (function () {
          function e(e, t, r, n) {
            void 0 === r && (r = new Uint8Array(0)), (this._counter = new Uint8Array(1)), (this._hash = e), (this._info = n);
            var s = i.hmac(this._hash, r, t);
            (this._hmac = new i.HMAC(e, s)), (this._buffer = new Uint8Array(this._hmac.digestLength)), (this._bufpos = this._buffer.length);
          }
          return (
            (e.prototype._fillBuffer = function () {
              this._counter[0]++;
              var e = this._counter[0];
              if (0 === e) throw Error('hkdf: cannot expand more');
              this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), (this._bufpos = 0);
            }),
            (e.prototype.expand = function (e) {
              for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), (t[r] = this._buffer[this._bufpos++]);
              return t;
            }),
            (e.prototype.clean = function () {
              this._hmac.clean(), n.wipe(this._buffer), n.wipe(this._counter), (this._bufpos = 0);
            }),
            e
          );
        })();
      t.t = s;
    },
    3275: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(6036),
        n = r(5734),
        s = r(8595),
        o = (function () {
          function e(e, t) {
            (this._finished = !1), (this._inner = new e()), (this._outer = new e()), (this.blockSize = this._outer.blockSize), (this.digestLength = this._outer.digestLength);
            var r = new Uint8Array(this.blockSize);
            t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
            for (var n = 0; n < r.length; n++) r[n] ^= 54;
            this._inner.update(r);
            for (var n = 0; n < r.length; n++) r[n] ^= 106;
            this._outer.update(r), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && ((this._innerKeyedState = this._inner.saveState()), (this._outerKeyedState = this._outer.saveState())), s.wipe(r);
          }
          return (
            (e.prototype.reset = function () {
              if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
              return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), (this._finished = !1), this;
            }),
            (e.prototype.clean = function () {
              i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
            }),
            (e.prototype.update = function (e) {
              return this._inner.update(e), this;
            }),
            (e.prototype.finish = function (e) {
              return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), (this._finished = !0), this);
            }),
            (e.prototype.digest = function () {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }),
            (e.prototype.saveState = function () {
              if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
              return this._inner.saveState();
            }),
            (e.prototype.restoreState = function (e) {
              if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
              return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), (this._finished = !1), this;
            }),
            (e.prototype.cleanSavedState = function (e) {
              if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
              this._inner.cleanSavedState(e);
            }),
            e
          );
        })();
      (t.HMAC = o),
        (t.hmac = function (e, t, r) {
          var i = new o(e, t);
          i.update(r);
          var n = i.digest();
          return i.clean(), n;
        }),
        (t.equal = n.equal);
    },
    4991: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.mul =
          Math.imul ||
          function (e, t) {
            var r = 65535 & e,
              i = 65535 & t;
            return (r * i + (((((e >>> 16) & 65535) * i + r * ((t >>> 16) & 65535)) << 16) >>> 0)) | 0;
          }),
        (t.add = function (e, t) {
          return (e + t) | 0;
        }),
        (t.sub = function (e, t) {
          return (e - t) | 0;
        }),
        (t.rotl = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        }),
        (t.isInteger =
          Number.isInteger ||
          function (e) {
            return 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (t.MAX_SAFE_INTEGER = 9007199254740991),
        (t.isSafeInteger = function (e) {
          return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER;
        });
    },
    3472: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(5734),
        n = r(8595);
      t.DIGEST_LENGTH = 16;
      var s = (function () {
        function e(e) {
          (this.digestLength = t.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1);
          var r = e[0] | (e[1] << 8);
          this._r[0] = 8191 & r;
          var i = e[2] | (e[3] << 8);
          this._r[1] = ((r >>> 13) | (i << 3)) & 8191;
          var n = e[4] | (e[5] << 8);
          this._r[2] = ((i >>> 10) | (n << 6)) & 7939;
          var s = e[6] | (e[7] << 8);
          this._r[3] = ((n >>> 7) | (s << 9)) & 8191;
          var o = e[8] | (e[9] << 8);
          (this._r[4] = ((s >>> 4) | (o << 12)) & 255), (this._r[5] = (o >>> 1) & 8190);
          var a = e[10] | (e[11] << 8);
          this._r[6] = ((o >>> 14) | (a << 2)) & 8191;
          var c = e[12] | (e[13] << 8);
          this._r[7] = ((a >>> 11) | (c << 5)) & 8065;
          var u = e[14] | (e[15] << 8);
          (this._r[8] = ((c >>> 8) | (u << 8)) & 8191),
            (this._r[9] = (u >>> 5) & 127),
            (this._pad[0] = e[16] | (e[17] << 8)),
            (this._pad[1] = e[18] | (e[19] << 8)),
            (this._pad[2] = e[20] | (e[21] << 8)),
            (this._pad[3] = e[22] | (e[23] << 8)),
            (this._pad[4] = e[24] | (e[25] << 8)),
            (this._pad[5] = e[26] | (e[27] << 8)),
            (this._pad[6] = e[28] | (e[29] << 8)),
            (this._pad[7] = e[30] | (e[31] << 8));
        }
        return (
          (e.prototype._blocks = function (e, t, r) {
            for (
              var i = this._fin ? 0 : 2048,
                n = this._h[0],
                s = this._h[1],
                o = this._h[2],
                a = this._h[3],
                c = this._h[4],
                u = this._h[5],
                h = this._h[6],
                l = this._h[7],
                f = this._h[8],
                p = this._h[9],
                d = this._r[0],
                g = this._r[1],
                y = this._r[2],
                v = this._r[3],
                m = this._r[4],
                _ = this._r[5],
                b = this._r[6],
                w = this._r[7],
                E = this._r[8],
                D = this._r[9];
              r >= 16;

            ) {
              var S,
                I = e[t + 0] | (e[t + 1] << 8);
              n += 8191 & I;
              var O = e[t + 2] | (e[t + 3] << 8);
              s += ((I >>> 13) | (O << 3)) & 8191;
              var P = e[t + 4] | (e[t + 5] << 8);
              o += ((O >>> 10) | (P << 6)) & 8191;
              var C = e[t + 6] | (e[t + 7] << 8);
              a += ((P >>> 7) | (C << 9)) & 8191;
              var A = e[t + 8] | (e[t + 9] << 8);
              (c += ((C >>> 4) | (A << 12)) & 8191), (u += (A >>> 1) & 8191);
              var x = e[t + 10] | (e[t + 11] << 8);
              h += ((A >>> 14) | (x << 2)) & 8191;
              var N = e[t + 12] | (e[t + 13] << 8);
              l += ((x >>> 11) | (N << 5)) & 8191;
              var T = e[t + 14] | (e[t + 15] << 8);
              (f += ((N >>> 8) | (T << 8)) & 8191), (p += (T >>> 5) | i);
              var R = 0;
              (R = (S = 0 + n * d + s * (5 * D) + o * (5 * E) + a * (5 * w) + c * (5 * b)) >>> 13), (S &= 8191), (S += u * (5 * _) + h * (5 * m) + l * (5 * v) + f * (5 * y) + p * (5 * g)), (R += S >>> 13), (S &= 8191);
              var L = R;
              (L += n * g + s * d + o * (5 * D) + a * (5 * E) + c * (5 * w)), (R = L >>> 13), (L &= 8191), (L += u * (5 * b) + h * (5 * _) + l * (5 * m) + f * (5 * v) + p * (5 * y)), (R += L >>> 13), (L &= 8191);
              var j = R;
              (j += n * y + s * g + o * d + a * (5 * D) + c * (5 * E)), (R = j >>> 13), (j &= 8191), (j += u * (5 * w) + h * (5 * b) + l * (5 * _) + f * (5 * m) + p * (5 * v)), (R += j >>> 13), (j &= 8191);
              var U = R;
              (U += n * v + s * y + o * g + a * d + c * (5 * D)), (R = U >>> 13), (U &= 8191), (U += u * (5 * E) + h * (5 * w) + l * (5 * b) + f * (5 * _) + p * (5 * m)), (R += U >>> 13), (U &= 8191);
              var M = R;
              (M += n * m + s * v + o * y + a * g + c * d), (R = M >>> 13), (M &= 8191), (M += u * (5 * D) + h * (5 * E) + l * (5 * w) + f * (5 * b) + p * (5 * _)), (R += M >>> 13), (M &= 8191);
              var k = R;
              (k += n * _ + s * m + o * v + a * y + c * g), (R = k >>> 13), (k &= 8191), (k += u * d + h * (5 * D) + l * (5 * E) + f * (5 * w) + p * (5 * b)), (R += k >>> 13), (k &= 8191);
              var z = R;
              (z += n * b + s * _ + o * m + a * v + c * y), (R = z >>> 13), (z &= 8191), (z += u * g + h * d + l * (5 * D) + f * (5 * E) + p * (5 * w)), (R += z >>> 13), (z &= 8191);
              var $ = R;
              ($ += n * w + s * b + o * _ + a * m + c * v), (R = $ >>> 13), ($ &= 8191), ($ += u * y + h * g + l * d + f * (5 * D) + p * (5 * E)), (R += $ >>> 13), ($ &= 8191);
              var q = R;
              (q += n * E + s * w + o * b + a * _ + c * m), (R = q >>> 13), (q &= 8191), (q += u * v + h * y + l * g + f * d + p * (5 * D)), (R += q >>> 13), (q &= 8191);
              var H = R;
              (H += n * D + s * E + o * w + a * b + c * _),
                (R = H >>> 13),
                (H &= 8191),
                (H += u * m + h * v + l * y + f * g + p * d),
                (R += H >>> 13),
                (H &= 8191),
                (S = 8191 & (R = ((R = ((R << 2) + R) | 0) + S) | 0)),
                (R >>>= 13),
                (L += R),
                (n = S),
                (s = L),
                (o = j),
                (a = U),
                (c = M),
                (u = k),
                (h = z),
                (l = $),
                (f = q),
                (p = H),
                (t += 16),
                (r -= 16);
            }
            (this._h[0] = n), (this._h[1] = s), (this._h[2] = o), (this._h[3] = a), (this._h[4] = c), (this._h[5] = u), (this._h[6] = h), (this._h[7] = l), (this._h[8] = f), (this._h[9] = p);
          }),
          (e.prototype.finish = function (e, t) {
            void 0 === t && (t = 0);
            var r,
              i,
              n,
              s,
              o = new Uint16Array(10);
            if (this._leftover) {
              for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
              (this._fin = 1), this._blocks(this._buffer, 0, 16);
            }
            for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) (this._h[s] += r), (r = this._h[s] >>> 13), (this._h[s] &= 8191);
            for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++)
              (o[s] = this._h[s] + r), (r = o[s] >>> 13), (o[s] &= 8191);
            for (o[9] -= 8192, i = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= i;
            for (s = 0, i = ~i; s < 10; s++) this._h[s] = (this._h[s] & i) | o[s];
            for (
              s = 1,
                this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
                this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
                this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
                this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
                this._h[4] = ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) & 65535,
                this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
                this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
                this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
                n = this._h[0] + this._pad[0],
                this._h[0] = 65535 & n;
              s < 8;
              s++
            )
              (n = (((this._h[s] + this._pad[s]) | 0) + (n >>> 16)) | 0), (this._h[s] = 65535 & n);
            return (
              (e[t + 0] = this._h[0] >>> 0),
              (e[t + 1] = this._h[0] >>> 8),
              (e[t + 2] = this._h[1] >>> 0),
              (e[t + 3] = this._h[1] >>> 8),
              (e[t + 4] = this._h[2] >>> 0),
              (e[t + 5] = this._h[2] >>> 8),
              (e[t + 6] = this._h[3] >>> 0),
              (e[t + 7] = this._h[3] >>> 8),
              (e[t + 8] = this._h[4] >>> 0),
              (e[t + 9] = this._h[4] >>> 8),
              (e[t + 10] = this._h[5] >>> 0),
              (e[t + 11] = this._h[5] >>> 8),
              (e[t + 12] = this._h[6] >>> 0),
              (e[t + 13] = this._h[6] >>> 8),
              (e[t + 14] = this._h[7] >>> 0),
              (e[t + 15] = this._h[7] >>> 8),
              (this._finished = !0),
              this
            );
          }),
          (e.prototype.update = function (e) {
            var t,
              r = 0,
              i = e.length;
            if (this._leftover) {
              (t = 16 - this._leftover) > i && (t = i);
              for (var n = 0; n < t; n++) this._buffer[this._leftover + n] = e[r + n];
              if (((i -= t), (r += t), (this._leftover += t), this._leftover < 16)) return this;
              this._blocks(this._buffer, 0, 16), (this._leftover = 0);
            }
            if ((i >= 16 && ((t = i - (i % 16)), this._blocks(e, r, t), (r += t), (i -= t)), i)) {
              for (var n = 0; n < i; n++) this._buffer[this._leftover + n] = e[r + n];
              this._leftover += i;
            }
            return this;
          }),
          (e.prototype.digest = function () {
            if (this._finished) throw Error('Poly1305 was finished');
            var e = new Uint8Array(16);
            return this.finish(e), e;
          }),
          (e.prototype.clean = function () {
            return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), (this._leftover = 0), (this._fin = 0), (this._finished = !0), this;
          }),
          e
        );
      })();
      (t.Poly1305 = s),
        (t.oneTimeAuth = function (e, t) {
          var r = new s(e);
          r.update(t);
          var i = r.digest();
          return r.clean(), i;
        }),
        (t.equal = function (e, r) {
          return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && i.equal(e, r);
        });
    },
    7955: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0);
      let i = r(9600),
        n = r(198),
        s = r(8595);
      function o(e, r = t.defaultRandomSource) {
        return r.randomBytes(e);
      }
      (t.defaultRandomSource = new i.SystemRandomSource()),
        (t.randomBytes = o),
        (t.randomUint32 = function (e = t.defaultRandomSource) {
          let r = o(4, e),
            i = (0, n.readUint32LE)(r);
          return (0, s.wipe)(r), i;
        });
      let a = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      function c(e, r = a, i = t.defaultRandomSource) {
        if (r.length < 2) throw Error('randomString charset is too short');
        if (r.length > 256) throw Error('randomString charset is too long');
        let n = '',
          c = r.length,
          u = 256 - (256 % c);
        for (; e > 0; ) {
          let t = o(Math.ceil((256 * e) / u), i);
          for (let i = 0; i < t.length && e > 0; i++) {
            let s = t[i];
            s < u && ((n += r.charAt(s % c)), e--);
          }
          (0, s.wipe)(t);
        }
        return n;
      }
      (t.randomString = c),
        (t.randomStringForEntropy = function (e, r = a, i = t.defaultRandomSource) {
          let n = Math.ceil(e / (Math.log(r.length) / Math.LN2));
          return c(n, r, i);
        });
    },
    8877: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.BrowserRandomSource = void 0),
        (t.BrowserRandomSource = class {
          constructor() {
            (this.isAvailable = !1), (this.isInstantiated = !1);
            let e = 'undefined' != typeof self ? self.crypto || self.msCrypto : null;
            e && void 0 !== e.getRandomValues && ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
          }
          randomBytes(e) {
            if (!this.isAvailable || !this._crypto) throw Error('Browser random byte generator is not available.');
            let t = new Uint8Array(e);
            for (let e = 0; e < t.length; e += 65536) this._crypto.getRandomValues(t.subarray(e, e + Math.min(t.length - e, 65536)));
            return t;
          }
        });
    },
    5598: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.NodeRandomSource = void 0);
      let i = r(8595);
      t.NodeRandomSource = class {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          {
            let e = r(3804);
            e && e.randomBytes && ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
          }
        }
        randomBytes(e) {
          if (!this.isAvailable || !this._crypto) throw Error('Node.js random byte generator is not available.');
          let t = this._crypto.randomBytes(e);
          if (t.length !== e) throw Error('NodeRandomSource: got fewer bytes than requested');
          let r = new Uint8Array(e);
          for (let e = 0; e < r.length; e++) r[e] = t[e];
          return (0, i.wipe)(t), r;
        }
      };
    },
    9600: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.SystemRandomSource = void 0);
      let i = r(8877),
        n = r(5598);
      t.SystemRandomSource = class {
        constructor() {
          if (((this.isAvailable = !1), (this.name = ''), (this._source = new i.BrowserRandomSource()), this._source.isAvailable)) {
            (this.isAvailable = !0), (this.name = 'Browser');
            return;
          }
          if (((this._source = new n.NodeRandomSource()), this._source.isAvailable)) {
            (this.isAvailable = !0), (this.name = 'Node');
            return;
          }
        }
        randomBytes(e) {
          if (!this.isAvailable) throw Error('System random byte generator is not available.');
          return this._source.randomBytes(e);
        }
      };
    },
    26: function (e, t, r) {
      'use strict';
      var i = r(198),
        n = r(8595);
      (t.k = 32), (t.cn = 64);
      var s = (function () {
        function e() {
          (this.digestLength = t.k),
            (this.blockSize = t.cn),
            (this._state = new Int32Array(8)),
            (this._temp = new Int32Array(64)),
            (this._buffer = new Uint8Array(128)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._state[0] = 1779033703),
              (this._state[1] = 3144134277),
              (this._state[2] = 1013904242),
              (this._state[3] = 2773480762),
              (this._state[4] = 1359893119),
              (this._state[5] = 2600822924),
              (this._state[6] = 528734635),
              (this._state[7] = 1541459225);
          }),
          (e.prototype.reset = function () {
            return this._initState(), (this._bufferLength = 0), (this._bytesHashed = 0), (this._finished = !1), this;
          }),
          (e.prototype.clean = function () {
            n.wipe(this._buffer), n.wipe(this._temp), this.reset();
          }),
          (e.prototype.update = function (e, t) {
            if ((void 0 === t && (t = e.length), this._finished)) throw Error("SHA256: can't update because hash was finished.");
            var r = 0;
            if (((this._bytesHashed += t), this._bufferLength > 0)) {
              for (; this._bufferLength < this.blockSize && t > 0; ) (this._buffer[this._bufferLength++] = e[r++]), t--;
              this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), (this._bufferLength = 0));
            }
            for (t >= this.blockSize && ((r = a(this._temp, this._state, e, r, t)), (t %= this.blockSize)); t > 0; ) (this._buffer[this._bufferLength++] = e[r++]), t--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                n = t % 64 < 56 ? 64 : 128;
              this._buffer[r] = 128;
              for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
              i.writeUint32BE((t / 536870912) | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._temp, this._state, this._buffer, 0, n), (this._finished = !0);
            }
            for (var s = 0; s < this.digestLength / 4; s++) i.writeUint32BE(this._state[s], e, 4 * s);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished) throw Error('SHA256: cannot save finished state');
            return { state: new Int32Array(this._state), buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0, bufferLength: this._bufferLength, bytesHashed: this._bytesHashed };
          }),
          (e.prototype.restoreState = function (e) {
            return this._state.set(e.state), (this._bufferLength = e.bufferLength), e.buffer && this._buffer.set(e.buffer), (this._bytesHashed = e.bytesHashed), (this._finished = !1), this;
          }),
          (e.prototype.cleanSavedState = function (e) {
            n.wipe(e.state), e.buffer && n.wipe(e.buffer), (e.bufferLength = 0), (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.mE = s;
      var o = new Int32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078,
        604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
        2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222,
        2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      function a(e, t, r, n, s) {
        for (; s >= 64; ) {
          for (var a = t[0], c = t[1], u = t[2], h = t[3], l = t[4], f = t[5], p = t[6], d = t[7], g = 0; g < 16; g++) {
            var y = n + 4 * g;
            e[g] = i.readUint32BE(r, y);
          }
          for (var g = 16; g < 64; g++) {
            var v = e[g - 2],
              m = ((v >>> 17) | (v << 15)) ^ ((v >>> 19) | (v << 13)) ^ (v >>> 10),
              _ = (((v = e[g - 15]) >>> 7) | (v << 25)) ^ ((v >>> 18) | (v << 14)) ^ (v >>> 3);
            e[g] = ((m + e[g - 7]) | 0) + ((_ + e[g - 16]) | 0);
          }
          for (var g = 0; g < 64; g++) {
            var m = ((((((l >>> 6) | (l << 26)) ^ ((l >>> 11) | (l << 21)) ^ ((l >>> 25) | (l << 7))) + ((l & f) ^ (~l & p))) | 0) + ((d + ((o[g] + e[g]) | 0)) | 0)) | 0,
              _ = ((((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10))) + ((a & c) ^ (a & u) ^ (c & u))) | 0;
            (d = p), (p = f), (f = l), (l = (h + m) | 0), (h = u), (u = c), (c = a), (a = (m + _) | 0);
          }
          (t[0] += a), (t[1] += c), (t[2] += u), (t[3] += h), (t[4] += l), (t[5] += f), (t[6] += p), (t[7] += d), (n += 64), (s -= 64);
        }
        return n;
      }
      t.vp = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    1287: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(198),
        n = r(8595);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var s = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (e.prototype.reset = function () {
            return this._initState(), (this._bufferLength = 0), (this._bytesHashed = 0), (this._finished = !1), this;
          }),
          (e.prototype.clean = function () {
            n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset();
          }),
          (e.prototype.update = function (e, r) {
            if ((void 0 === r && (r = e.length), this._finished)) throw Error("SHA512: can't update because hash was finished.");
            var i = 0;
            if (((this._bytesHashed += r), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && r > 0; ) (this._buffer[this._bufferLength++] = e[i++]), r--;
              this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), (this._bufferLength = 0));
            }
            for (r >= this.blockSize && ((i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r)), (r %= this.blockSize)); r > 0; ) (this._buffer[this._bufferLength++] = e[i++]), r--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                n = t % 128 < 112 ? 128 : 256;
              this._buffer[r] = 128;
              for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
              i.writeUint32BE((t / 536870912) | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), (this._finished = !0);
            }
            for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished) throw Error('SHA256: cannot save finished state');
            return { stateHi: new Int32Array(this._stateHi), stateLo: new Int32Array(this._stateLo), buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0, bufferLength: this._bufferLength, bytesHashed: this._bytesHashed };
          }),
          (e.prototype.restoreState = function (e) {
            return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), (this._bufferLength = e.bufferLength), e.buffer && this._buffer.set(e.buffer), (this._bytesHashed = e.bytesHashed), (this._finished = !1), this;
          }),
          (e.prototype.cleanSavedState = function (e) {
            n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), (e.bufferLength = 0), (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = s;
      var o = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401,
        1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773,
        604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
        1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480,
        2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344,
        851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606,
        3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470,
        3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(e, t, r, n, s, a, c) {
        for (var u, h, l, f, p, d, g, y, v = r[0], m = r[1], _ = r[2], b = r[3], w = r[4], E = r[5], D = r[6], S = r[7], I = n[0], O = n[1], P = n[2], C = n[3], A = n[4], x = n[5], N = n[6], T = n[7]; c >= 128; ) {
          for (var R = 0; R < 16; R++) {
            var L = 8 * R + a;
            (e[R] = i.readUint32BE(s, L)), (t[R] = i.readUint32BE(s, L + 4));
          }
          for (var R = 0; R < 80; R++) {
            var j = v,
              U = m,
              M = _,
              k = b,
              z = w,
              $ = E,
              q = D,
              H = S,
              F = I,
              B = O,
              V = P,
              K = C,
              W = A,
              G = x,
              Y = N,
              J = T;
            if (
              ((u = S),
              (p = 65535 & (h = T)),
              (d = h >>> 16),
              (g = 65535 & u),
              (y = u >>> 16),
              (u = ((w >>> 14) | (A << 18)) ^ ((w >>> 18) | (A << 14)) ^ ((A >>> 9) | (w << 23))),
              (p += 65535 & (h = ((A >>> 14) | (w << 18)) ^ ((A >>> 18) | (w << 14)) ^ ((w >>> 9) | (A << 23)))),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = (w & E) ^ (~w & D)),
              (p += 65535 & (h = (A & x) ^ (~A & N))),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = o[2 * R]),
              (p += 65535 & (h = o[2 * R + 1])),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = e[R % 16]),
              (p += 65535 & (h = t[R % 16])),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (d += p >>> 16),
              (g += d >>> 16),
              (y += g >>> 16),
              (l = (65535 & g) | (y << 16)),
              (f = (65535 & p) | (d << 16)),
              (u = l),
              (p = 65535 & (h = f)),
              (d = h >>> 16),
              (g = 65535 & u),
              (y = u >>> 16),
              (u = ((v >>> 28) | (I << 4)) ^ ((I >>> 2) | (v << 30)) ^ ((I >>> 7) | (v << 25))),
              (p += 65535 & (h = ((I >>> 28) | (v << 4)) ^ ((v >>> 2) | (I << 30)) ^ ((v >>> 7) | (I << 25)))),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = (v & m) ^ (v & _) ^ (m & _)),
              (p += 65535 & (h = (I & O) ^ (I & P) ^ (O & P))),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (d += p >>> 16),
              (g += d >>> 16),
              (y += g >>> 16),
              (H = (65535 & g) | (y << 16)),
              (J = (65535 & p) | (d << 16)),
              (u = k),
              (p = 65535 & (h = K)),
              (d = h >>> 16),
              (g = 65535 & u),
              (y = u >>> 16),
              (u = l),
              (p += 65535 & (h = f)),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (d += p >>> 16),
              (g += d >>> 16),
              (y += g >>> 16),
              (k = (65535 & g) | (y << 16)),
              (K = (65535 & p) | (d << 16)),
              (m = j),
              (_ = U),
              (b = M),
              (w = k),
              (E = z),
              (D = $),
              (S = q),
              (v = H),
              (O = F),
              (P = B),
              (C = V),
              (A = K),
              (x = W),
              (N = G),
              (T = Y),
              (I = J),
              R % 16 == 15)
            )
              for (var L = 0; L < 16; L++)
                (u = e[L]),
                  (p = 65535 & (h = t[L])),
                  (d = h >>> 16),
                  (g = 65535 & u),
                  (y = u >>> 16),
                  (u = e[(L + 9) % 16]),
                  (p += 65535 & (h = t[(L + 9) % 16])),
                  (d += h >>> 16),
                  (g += 65535 & u),
                  (y += u >>> 16),
                  (u = (((l = e[(L + 1) % 16]) >>> 1) | ((f = t[(L + 1) % 16]) << 31)) ^ ((l >>> 8) | (f << 24)) ^ (l >>> 7)),
                  (p += 65535 & (h = ((f >>> 1) | (l << 31)) ^ ((f >>> 8) | (l << 24)) ^ ((f >>> 7) | (l << 25)))),
                  (d += h >>> 16),
                  (g += 65535 & u),
                  (y += u >>> 16),
                  (u = (((l = e[(L + 14) % 16]) >>> 19) | ((f = t[(L + 14) % 16]) << 13)) ^ ((f >>> 29) | (l << 3)) ^ (l >>> 6)),
                  (p += 65535 & (h = ((f >>> 19) | (l << 13)) ^ ((l >>> 29) | (f << 3)) ^ ((f >>> 6) | (l << 26)))),
                  (d += h >>> 16),
                  (g += 65535 & u),
                  (y += u >>> 16),
                  (d += p >>> 16),
                  (g += d >>> 16),
                  (y += g >>> 16),
                  (e[L] = (65535 & g) | (y << 16)),
                  (t[L] = (65535 & p) | (d << 16));
          }
          (u = v),
            (p = 65535 & (h = I)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[0]),
            (p += 65535 & (h = n[0])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[0] = v = (65535 & g) | (y << 16)),
            (n[0] = I = (65535 & p) | (d << 16)),
            (u = m),
            (p = 65535 & (h = O)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[1]),
            (p += 65535 & (h = n[1])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[1] = m = (65535 & g) | (y << 16)),
            (n[1] = O = (65535 & p) | (d << 16)),
            (u = _),
            (p = 65535 & (h = P)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[2]),
            (p += 65535 & (h = n[2])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[2] = _ = (65535 & g) | (y << 16)),
            (n[2] = P = (65535 & p) | (d << 16)),
            (u = b),
            (p = 65535 & (h = C)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[3]),
            (p += 65535 & (h = n[3])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[3] = b = (65535 & g) | (y << 16)),
            (n[3] = C = (65535 & p) | (d << 16)),
            (u = w),
            (p = 65535 & (h = A)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[4]),
            (p += 65535 & (h = n[4])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[4] = w = (65535 & g) | (y << 16)),
            (n[4] = A = (65535 & p) | (d << 16)),
            (u = E),
            (p = 65535 & (h = x)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[5]),
            (p += 65535 & (h = n[5])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[5] = E = (65535 & g) | (y << 16)),
            (n[5] = x = (65535 & p) | (d << 16)),
            (u = D),
            (p = 65535 & (h = N)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[6]),
            (p += 65535 & (h = n[6])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[6] = D = (65535 & g) | (y << 16)),
            (n[6] = N = (65535 & p) | (d << 16)),
            (u = S),
            (p = 65535 & (h = T)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[7]),
            (p += 65535 & (h = n[7])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[7] = S = (65535 & g) | (y << 16)),
            (n[7] = T = (65535 & p) | (d << 16)),
            (a += 128),
            (c -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    8595: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.wipe = function (e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
          return e;
        });
    },
    6625: function (e, t, r) {
      'use strict';
      t.gi = t.Au = t.KS = t.kz = void 0;
      let i = r(7955),
        n = r(8595);
      function s(e) {
        let t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.kz = 32), (t.KS = 32);
      let o = new Uint8Array(32);
      o[0] = 9;
      let a = s([56129, 1]);
      function c(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let i = e[r] + t + 65535;
          (t = Math.floor(i / 65536)), (e[r] = i - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function u(e, t, r) {
        let i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
          let n = i & (e[r] ^ t[r]);
          (e[r] ^= n), (t[r] ^= n);
        }
      }
      function h(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
      }
      function l(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
      }
      function f(e, t, r) {
        let i,
          n,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          h = 0,
          l = 0,
          f = 0,
          p = 0,
          d = 0,
          g = 0,
          y = 0,
          v = 0,
          m = 0,
          _ = 0,
          b = 0,
          w = 0,
          E = 0,
          D = 0,
          S = 0,
          I = 0,
          O = 0,
          P = 0,
          C = 0,
          A = 0,
          x = 0,
          N = 0,
          T = 0,
          R = 0,
          L = 0,
          j = 0,
          U = r[0],
          M = r[1],
          k = r[2],
          z = r[3],
          $ = r[4],
          q = r[5],
          H = r[6],
          F = r[7],
          B = r[8],
          V = r[9],
          K = r[10],
          W = r[11],
          G = r[12],
          Y = r[13],
          J = r[14],
          X = r[15];
        (s += (i = t[0]) * U),
          (o += i * M),
          (a += i * k),
          (c += i * z),
          (u += i * $),
          (h += i * q),
          (l += i * H),
          (f += i * F),
          (p += i * B),
          (d += i * V),
          (g += i * K),
          (y += i * W),
          (v += i * G),
          (m += i * Y),
          (_ += i * J),
          (b += i * X),
          (o += (i = t[1]) * U),
          (a += i * M),
          (c += i * k),
          (u += i * z),
          (h += i * $),
          (l += i * q),
          (f += i * H),
          (p += i * F),
          (d += i * B),
          (g += i * V),
          (y += i * K),
          (v += i * W),
          (m += i * G),
          (_ += i * Y),
          (b += i * J),
          (w += i * X),
          (a += (i = t[2]) * U),
          (c += i * M),
          (u += i * k),
          (h += i * z),
          (l += i * $),
          (f += i * q),
          (p += i * H),
          (d += i * F),
          (g += i * B),
          (y += i * V),
          (v += i * K),
          (m += i * W),
          (_ += i * G),
          (b += i * Y),
          (w += i * J),
          (E += i * X),
          (c += (i = t[3]) * U),
          (u += i * M),
          (h += i * k),
          (l += i * z),
          (f += i * $),
          (p += i * q),
          (d += i * H),
          (g += i * F),
          (y += i * B),
          (v += i * V),
          (m += i * K),
          (_ += i * W),
          (b += i * G),
          (w += i * Y),
          (E += i * J),
          (D += i * X),
          (u += (i = t[4]) * U),
          (h += i * M),
          (l += i * k),
          (f += i * z),
          (p += i * $),
          (d += i * q),
          (g += i * H),
          (y += i * F),
          (v += i * B),
          (m += i * V),
          (_ += i * K),
          (b += i * W),
          (w += i * G),
          (E += i * Y),
          (D += i * J),
          (S += i * X),
          (h += (i = t[5]) * U),
          (l += i * M),
          (f += i * k),
          (p += i * z),
          (d += i * $),
          (g += i * q),
          (y += i * H),
          (v += i * F),
          (m += i * B),
          (_ += i * V),
          (b += i * K),
          (w += i * W),
          (E += i * G),
          (D += i * Y),
          (S += i * J),
          (I += i * X),
          (l += (i = t[6]) * U),
          (f += i * M),
          (p += i * k),
          (d += i * z),
          (g += i * $),
          (y += i * q),
          (v += i * H),
          (m += i * F),
          (_ += i * B),
          (b += i * V),
          (w += i * K),
          (E += i * W),
          (D += i * G),
          (S += i * Y),
          (I += i * J),
          (O += i * X),
          (f += (i = t[7]) * U),
          (p += i * M),
          (d += i * k),
          (g += i * z),
          (y += i * $),
          (v += i * q),
          (m += i * H),
          (_ += i * F),
          (b += i * B),
          (w += i * V),
          (E += i * K),
          (D += i * W),
          (S += i * G),
          (I += i * Y),
          (O += i * J),
          (P += i * X),
          (p += (i = t[8]) * U),
          (d += i * M),
          (g += i * k),
          (y += i * z),
          (v += i * $),
          (m += i * q),
          (_ += i * H),
          (b += i * F),
          (w += i * B),
          (E += i * V),
          (D += i * K),
          (S += i * W),
          (I += i * G),
          (O += i * Y),
          (P += i * J),
          (C += i * X),
          (d += (i = t[9]) * U),
          (g += i * M),
          (y += i * k),
          (v += i * z),
          (m += i * $),
          (_ += i * q),
          (b += i * H),
          (w += i * F),
          (E += i * B),
          (D += i * V),
          (S += i * K),
          (I += i * W),
          (O += i * G),
          (P += i * Y),
          (C += i * J),
          (A += i * X),
          (g += (i = t[10]) * U),
          (y += i * M),
          (v += i * k),
          (m += i * z),
          (_ += i * $),
          (b += i * q),
          (w += i * H),
          (E += i * F),
          (D += i * B),
          (S += i * V),
          (I += i * K),
          (O += i * W),
          (P += i * G),
          (C += i * Y),
          (A += i * J),
          (x += i * X),
          (y += (i = t[11]) * U),
          (v += i * M),
          (m += i * k),
          (_ += i * z),
          (b += i * $),
          (w += i * q),
          (E += i * H),
          (D += i * F),
          (S += i * B),
          (I += i * V),
          (O += i * K),
          (P += i * W),
          (C += i * G),
          (A += i * Y),
          (x += i * J),
          (N += i * X),
          (v += (i = t[12]) * U),
          (m += i * M),
          (_ += i * k),
          (b += i * z),
          (w += i * $),
          (E += i * q),
          (D += i * H),
          (S += i * F),
          (I += i * B),
          (O += i * V),
          (P += i * K),
          (C += i * W),
          (A += i * G),
          (x += i * Y),
          (N += i * J),
          (T += i * X),
          (m += (i = t[13]) * U),
          (_ += i * M),
          (b += i * k),
          (w += i * z),
          (E += i * $),
          (D += i * q),
          (S += i * H),
          (I += i * F),
          (O += i * B),
          (P += i * V),
          (C += i * K),
          (A += i * W),
          (x += i * G),
          (N += i * Y),
          (T += i * J),
          (R += i * X),
          (_ += (i = t[14]) * U),
          (b += i * M),
          (w += i * k),
          (E += i * z),
          (D += i * $),
          (S += i * q),
          (I += i * H),
          (O += i * F),
          (P += i * B),
          (C += i * V),
          (A += i * K),
          (x += i * W),
          (N += i * G),
          (T += i * Y),
          (R += i * J),
          (L += i * X),
          (b += (i = t[15]) * U),
          (w += i * M),
          (E += i * k),
          (D += i * z),
          (S += i * $),
          (I += i * q),
          (O += i * H),
          (P += i * F),
          (C += i * B),
          (A += i * V),
          (x += i * K),
          (N += i * W),
          (T += i * G),
          (R += i * Y),
          (L += i * J),
          (j += i * X),
          (s += 38 * w),
          (o += 38 * E),
          (a += 38 * D),
          (c += 38 * S),
          (u += 38 * I),
          (h += 38 * O),
          (l += 38 * P),
          (f += 38 * C),
          (p += 38 * A),
          (d += 38 * x),
          (g += 38 * N),
          (y += 38 * T),
          (v += 38 * R),
          (m += 38 * L),
          (_ += 38 * j),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (n = Math.floor((i = b + n + 65535) / 65536)),
          (b = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (n = Math.floor((i = b + n + 65535) / 65536)),
          (b = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = h),
          (e[6] = l),
          (e[7] = f),
          (e[8] = p),
          (e[9] = d),
          (e[10] = g),
          (e[11] = y),
          (e[12] = v),
          (e[13] = m),
          (e[14] = _),
          (e[15] = b);
      }
      function p(e, t) {
        let r = new Uint8Array(32),
          i = new Float64Array(80),
          n = s(),
          o = s(),
          p = s(),
          d = s(),
          g = s(),
          y = s();
        for (let t = 0; t < 31; t++) r[t] = e[t];
        (r[31] = (127 & e[31]) | 64),
          (r[0] &= 248),
          (function (e, t) {
            for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          })(i, t);
        for (let e = 0; e < 16; e++) o[e] = i[e];
        n[0] = d[0] = 1;
        for (let e = 254; e >= 0; --e) {
          let t = (r[e >>> 3] >>> (7 & e)) & 1;
          u(n, o, t),
            u(p, d, t),
            h(g, n, p),
            l(n, n, p),
            h(p, o, d),
            l(o, o, d),
            f(d, g, g),
            f(y, n, n),
            f(n, p, n),
            f(p, o, g),
            h(g, n, p),
            l(n, n, p),
            f(o, n, n),
            l(p, d, y),
            f(n, p, a),
            h(n, n, d),
            f(p, p, n),
            f(n, d, y),
            f(d, o, i),
            f(o, g, g),
            u(n, o, t),
            u(p, d, t);
        }
        for (let e = 0; e < 16; e++) (i[e + 16] = n[e]), (i[e + 32] = p[e]), (i[e + 48] = o[e]), (i[e + 64] = d[e]);
        let v = i.subarray(32),
          m = i.subarray(16);
        !(function (e, t) {
          let r = s();
          for (let e = 0; e < 16; e++) r[e] = t[e];
          for (let e = 253; e >= 0; e--) f(r, r, r), 2 !== e && 4 !== e && f(r, r, t);
          for (let t = 0; t < 16; t++) e[t] = r[t];
        })(v, v),
          f(m, m, v);
        let _ = new Uint8Array(32);
        return (
          !(function (e, t) {
            let r = s(),
              i = s();
            for (let e = 0; e < 16; e++) i[e] = t[e];
            c(i), c(i), c(i);
            for (let e = 0; e < 2; e++) {
              r[0] = i[0] - 65517;
              for (let e = 1; e < 15; e++) (r[e] = i[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535);
              r[15] = i[15] - 32767 - ((r[14] >> 16) & 1);
              let e = (r[15] >> 16) & 1;
              (r[14] &= 65535), u(i, r, 1 - e);
            }
            for (let t = 0; t < 16; t++) (e[2 * t] = 255 & i[t]), (e[2 * t + 1] = i[t] >> 8);
          })(_, m),
          _
        );
      }
      (t.Au = function (e) {
        let r = (0, i.randomBytes)(32, e),
          s = (function (e) {
            if (e.length !== t.KS) throw Error(`x25519: seed must be ${t.KS} bytes`);
            let r = new Uint8Array(e),
              i = p(r, o);
            return { publicKey: i, secretKey: r };
          })(r);
        return (0, n.wipe)(r), s;
      }),
        (t.gi = function (e, r, i = !1) {
          if (e.length !== t.kz) throw Error('X25519: incorrect secret key length');
          if (r.length !== t.kz) throw Error('X25519: incorrect public key length');
          let n = p(e, r);
          if (i) {
            let e = 0;
            for (let t = 0; t < n.length; t++) e |= n[t];
            if (0 === e) throw Error('X25519: invalid shared key');
          }
          return n;
        });
    },
    5623: function (e, t, r) {
      'use strict';
      function i() {
        return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {};
      }
      function n() {
        let e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = n),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!n();
        });
    },
    9921: function (e, t, r) {
      'use strict';
      var i = r(7098);
      function n() {
        return 'undefined' == typeof document && 'undefined' != typeof navigator && 'ReactNative' === navigator.product;
      }
      function s() {
        return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = n),
        (t.isNode = s),
        (t.isBrowser = function () {
          return !n() && !s();
        });
    },
    4458: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(5623), t), i.__exportStar(r(9921), t);
    },
    1026: function (e, t, r) {
      'use strict';
      r.d(t, {
        OPTIONAL_EVENTS: function () {
          return ou;
        },
        OPTIONAL_METHODS: function () {
          return oa;
        },
        default: function () {
          return ow;
        },
      });
      var i = {};
      r.r(i),
        r.d(i, {
          identity: function () {
            return H;
          },
        });
      var n = {};
      r.r(n),
        r.d(n, {
          base2: function () {
            return F;
          },
        });
      var s = {};
      r.r(s),
        r.d(s, {
          base8: function () {
            return B;
          },
        });
      var o = {};
      r.r(o),
        r.d(o, {
          base10: function () {
            return V;
          },
        });
      var a = {};
      r.r(a),
        r.d(a, {
          base16: function () {
            return K;
          },
          base16upper: function () {
            return W;
          },
        });
      var c = {};
      r.r(c),
        r.d(c, {
          base32: function () {
            return G;
          },
          base32hex: function () {
            return Z;
          },
          base32hexpad: function () {
            return ee;
          },
          base32hexpadupper: function () {
            return et;
          },
          base32hexupper: function () {
            return Q;
          },
          base32pad: function () {
            return J;
          },
          base32padupper: function () {
            return X;
          },
          base32upper: function () {
            return Y;
          },
          base32z: function () {
            return er;
          },
        });
      var u = {};
      r.r(u),
        r.d(u, {
          base36: function () {
            return ei;
          },
          base36upper: function () {
            return en;
          },
        });
      var h = {};
      r.r(h),
        r.d(h, {
          base58btc: function () {
            return es;
          },
          base58flickr: function () {
            return eo;
          },
        });
      var l = {};
      r.r(l),
        r.d(l, {
          base64: function () {
            return ea;
          },
          base64pad: function () {
            return ec;
          },
          base64url: function () {
            return eu;
          },
          base64urlpad: function () {
            return eh;
          },
        });
      var f = {};
      r.r(f),
        r.d(f, {
          base256emoji: function () {
            return ed;
          },
        });
      var p = {};
      r.r(p),
        r.d(p, {
          sha256: function () {
            return eC;
          },
          sha512: function () {
            return eA;
          },
        });
      var d = {};
      r.r(d),
        r.d(d, {
          identity: function () {
            return ex;
          },
        });
      var g = {};
      r.r(g),
        r.d(g, {
          code: function () {
            return eT;
          },
          decode: function () {
            return eL;
          },
          encode: function () {
            return eR;
          },
          name: function () {
            return eN;
          },
        });
      var y = {};
      r.r(y),
        r.d(y, {
          code: function () {
            return ek;
          },
          decode: function () {
            return e$;
          },
          encode: function () {
            return ez;
          },
          name: function () {
            return eM;
          },
        });
      var v = r(1293),
        m = r.n(v),
        _ = r(7870),
        b = r(8010),
        w = r(7955),
        E = r(26),
        D = r(6625);
      function S(e) {
        return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
      }
      function I(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? S(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
      }
      function O(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = I(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return S(r);
      }
      var P = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var n = 0; n < e.length; n++) {
          var s = e.charAt(n),
            o = s.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(s + ' is ambiguous');
          r[o] = n;
        }
        var a = e.length,
          c = e.charAt(0),
          u = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function l(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, n = 0; e[t] === c; ) i++, t++;
            for (var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s); e[t]; ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (var l = 0, f = s - 1; (0 !== h || l < n) && -1 !== f; f--, l++) (h += (a * o[f]) >>> 0), (o[f] = h % 256 >>> 0), (h = (h / 256) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (n = l), t++;
            }
            if (' ' !== e[t]) {
              for (var p = s - n; p !== s && 0 === o[p]; ) p++;
              for (var d = new Uint8Array(i + (s - p)), g = i; p !== s; ) d[g++] = o[p++];
              return d;
            }
          }
        }
        return {
          encode: function (t) {
            if ((t instanceof Uint8Array || (ArrayBuffer.isView(t) ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)))
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n]; ) n++, r++;
            for (var o = ((s - n) * h + 1) >>> 0, u = new Uint8Array(o); n !== s; ) {
              for (var l = t[n], f = 0, p = o - 1; (0 !== l || f < i) && -1 !== p; p--, f++) (l += (256 * u[p]) >>> 0), (u[p] = l % a >>> 0), (l = (l / a) >>> 0);
              if (0 !== l) throw Error('Non-zero carry');
              (i = f), n++;
            }
            for (var d = o - i; d !== o && 0 === u[d]; ) d++;
            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
            return g;
          },
          decodeUnsafe: l,
          decode: function (e) {
            var r = l(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      new Uint8Array(0);
      let C = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        A = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        x = (e) => new TextEncoder().encode(e),
        N = (e) => new TextDecoder().decode(e);
      class T {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class R {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0))) throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return j(this, e);
        }
      }
      class L {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return j(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
        }
      }
      let j = (e, t) => new L({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class U {
        constructor(e, t, r, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r), (this.baseDecode = i), (this.encoder = new T(e, t, r)), (this.decoder = new R(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let M = ({ name: e, prefix: t, encode: r, decode: i }) => new U(e, t, r, i),
        k = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: n } = P(r, t);
          return M({ prefix: e, name: t, encode: i, decode: (e) => A(n(e)) });
        },
        z = (e, t, r, i) => {
          let n = {};
          for (let e = 0; e < t.length; ++e) n[t[e]] = e;
          let s = e.length;
          for (; '=' === e[s - 1]; ) --s;
          let o = new Uint8Array(((s * r) / 8) | 0),
            a = 0,
            c = 0,
            u = 0;
          for (let t = 0; t < s; ++t) {
            let s = n[e[t]];
            if (void 0 === s) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | s), (a += r) >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        $ = (e, t, r) => {
          let i = '=' === t[t.length - 1],
            n = (1 << r) - 1,
            s = '',
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i) for (a = (a << 8) | e[i], o += 8; o > r; ) (o -= r), (s += t[n & (a >> o)]);
          if ((o && (s += t[n & (a << (r - o))]), i)) for (; (s.length * r) & 7; ) s += '=';
          return s;
        },
        q = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => M({ prefix: t, name: e, encode: (e) => $(e, i, r), decode: (t) => z(t, i, r, e) }),
        H = M({ prefix: '\x00', name: 'identity', encode: (e) => N(e), decode: (e) => x(e) }),
        F = q({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        B = q({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        V = k({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        K = q({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        W = q({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 }),
        G = q({ prefix: 'b', name: 'base32', alphabet: 'abcdefghijklmnopqrstuvwxyz234567', bitsPerChar: 5 }),
        Y = q({ prefix: 'B', name: 'base32upper', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', bitsPerChar: 5 }),
        J = q({ prefix: 'c', name: 'base32pad', alphabet: 'abcdefghijklmnopqrstuvwxyz234567=', bitsPerChar: 5 }),
        X = q({ prefix: 'C', name: 'base32padupper', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=', bitsPerChar: 5 }),
        Z = q({ prefix: 'v', name: 'base32hex', alphabet: '0123456789abcdefghijklmnopqrstuv', bitsPerChar: 5 }),
        Q = q({ prefix: 'V', name: 'base32hexupper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV', bitsPerChar: 5 }),
        ee = q({ prefix: 't', name: 'base32hexpad', alphabet: '0123456789abcdefghijklmnopqrstuv=', bitsPerChar: 5 }),
        et = q({ prefix: 'T', name: 'base32hexpadupper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=', bitsPerChar: 5 }),
        er = q({ prefix: 'h', name: 'base32z', alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769', bitsPerChar: 5 }),
        ei = k({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
        en = k({ prefix: 'K', name: 'base36upper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' }),
        es = k({ name: 'base58btc', prefix: 'z', alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz' }),
        eo = k({ name: 'base58flickr', prefix: 'Z', alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ' }),
        ea = q({ prefix: 'm', name: 'base64', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', bitsPerChar: 6 }),
        ec = q({ prefix: 'M', name: 'base64pad', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', bitsPerChar: 6 }),
        eu = q({ prefix: 'u', name: 'base64url', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', bitsPerChar: 6 }),
        eh = q({ prefix: 'U', name: 'base64urlpad', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=', bitsPerChar: 6 }),
        el = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        ef = el.reduce((e, t, r) => ((e[r] = t), e), []),
        ep = el.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        ed = M({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += ef[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = ep[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      function eg(e, t, r) {
        t = t || [];
        for (var i = (r = r || 0); e >= 2147483648; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (eg.bytes = r - i + 1), t;
      }
      function ey(e, t) {
        var r,
          i = 0,
          t = t || 0,
          n = 0,
          s = t,
          o = e.length;
        do {
          if (s >= o) throw ((ey.bytes = 0), RangeError('Could not decode varint'));
          (r = e[s++]), (i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n)), (n += 7);
        } while (r >= 128);
        return (ey.bytes = s - t), i;
      }
      var ev = {
        encode: eg,
        decode: ey,
        encodingLength: function (e) {
          return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10;
        },
      };
      let em = (e, t = 0) => {
          let r = ev.decode(e, t);
          return [r, ev.decode.bytes];
        },
        e_ = (e, t, r = 0) => (ev.encode(e, t, r), t),
        eb = (e) => ev.encodingLength(e),
        ew = (e, t) => {
          let r = t.byteLength,
            i = eb(e),
            n = i + eb(r),
            s = new Uint8Array(n + r);
          return e_(e, s, 0), e_(r, s, i), s.set(t, n), new eS(e, r, t, s);
        },
        eE = (e) => {
          let t = A(e),
            [r, i] = em(t),
            [n, s] = em(t.subarray(i)),
            o = t.subarray(i + s);
          if (o.byteLength !== n) throw Error('Incorrect length');
          return new eS(r, n, o, t);
        },
        eD = (e, t) => e === t || (e.code === t.code && e.size === t.size && C(e.bytes, t.bytes));
      class eS {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let eI = ({ name: e, code: t, encode: r }) => new eO(e, t, r);
      class eO {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? ew(this.code, t) : t.then((e) => ew(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let eP = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        eC = eI({ name: 'sha2-256', code: 18, encode: eP('SHA-256') }),
        eA = eI({ name: 'sha2-512', code: 19, encode: eP('SHA-512') }),
        ex = { code: 0, name: 'identity', encode: A, digest: (e) => ew(0, A(e)) },
        eN = 'raw',
        eT = 85,
        eR = (e) => A(e),
        eL = (e) => A(e),
        ej = new TextEncoder(),
        eU = new TextDecoder(),
        eM = 'json',
        ek = 512,
        ez = (e) => ej.encode(JSON.stringify(e)),
        e$ = (e) => JSON.parse(eU.decode(e));
      class eq {
        constructor(e, t, r, i) {
          (this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = i),
            (this.byteOffset = i.byteOffset),
            (this.byteLength = i.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, { byteOffset: eJ, byteLength: eJ, code: eY, version: eY, multihash: eY, bytes: eY, _baseCache: eJ, asCID: eJ });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: e, multihash: t } = this;
            if (e !== eV) throw Error('Cannot convert a non dag-pb CID to CIDv0');
            if (t.code !== eK) throw Error('Cannot convert non sha2-256 multihash CID to CIDv0');
            return eq.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: e, digest: t } = this.multihash,
                r = ew(e, t);
              return eq.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
          }
        }
        equals(e) {
          return e && this.code === e.code && this.version === e.version && eD(this.multihash, e.multihash);
        }
        toString(e) {
          let { bytes: t, version: r, _baseCache: i } = this;
          return 0 === r ? eF(t, i, e || es.encoder) : eB(t, i, e || G.encoder);
        }
        toJSON() {
          return { code: this.code, version: this.version, hash: this.multihash.bytes };
        }
        get [Symbol.toStringTag]() {
          return 'CID';
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
          return 'CID(' + this.toString() + ')';
        }
        static isCID(e) {
          return eX(/^0\.0/, eZ), !!(e && (e[eG] || e.asCID === e));
        }
        get toBaseEncodedString() {
          throw Error('Deprecated, use .toString()');
        }
        get codec() {
          throw Error('"codec" property is deprecated, use integer "code" property instead');
        }
        get buffer() {
          throw Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof eq) return e;
          if (null != e && e.asCID === e) {
            let { version: t, code: r, multihash: i, bytes: n } = e;
            return new eq(t, r, i, n || eW(t, r, i.bytes));
          }
          if (null == e || !0 !== e[eG]) return null;
          {
            let { version: t, multihash: r, code: i } = e,
              n = eE(r);
            return eq.create(t, i, n);
          }
        }
        static create(e, t, r) {
          if ('number' != typeof t) throw Error('String codecs are no longer supported');
          switch (e) {
            case 0:
              if (t === eV) return new eq(e, t, r, r.bytes);
              throw Error(`Version 0 CID must use dag-pb (code: ${eV}) block encoding`);
            case 1: {
              let i = eW(e, t, r.bytes);
              return new eq(e, t, r, i);
            }
            default:
              throw Error('Invalid version');
          }
        }
        static createV0(e) {
          return eq.create(0, eV, e);
        }
        static createV1(e, t) {
          return eq.create(1, e, t);
        }
        static decode(e) {
          let [t, r] = eq.decodeFirst(e);
          if (r.length) throw Error('Incorrect length');
          return t;
        }
        static decodeFirst(e) {
          let t = eq.inspectBytes(e),
            r = t.size - t.multihashSize,
            i = A(e.subarray(r, r + t.multihashSize));
          if (i.byteLength !== t.multihashSize) throw Error('Incorrect length');
          let n = i.subarray(t.multihashSize - t.digestSize),
            s = new eS(t.multihashCode, t.digestSize, n, i),
            o = 0 === t.version ? eq.createV0(s) : eq.createV1(t.codec, s);
          return [o, e.subarray(t.size)];
        }
        static inspectBytes(e) {
          let t = 0,
            r = () => {
              let [r, i] = em(e.subarray(t));
              return (t += i), r;
            },
            i = r(),
            n = eV;
          if ((18 === i ? ((i = 0), (t = 0)) : 1 === i && (n = r()), 0 !== i && 1 !== i)) throw RangeError(`Invalid CID version ${i}`);
          let s = t,
            o = r(),
            a = r(),
            c = t + a;
          return { version: i, codec: n, multihashCode: o, digestSize: a, multihashSize: c - s, size: c };
        }
        static parse(e, t) {
          let [r, i] = eH(e, t),
            n = eq.decode(i);
          return n._baseCache.set(r, e), n;
        }
      }
      let eH = (e, t) => {
          switch (e[0]) {
            case 'Q':
              return [es.prefix, (t || es).decode(`${es.prefix}${e}`)];
            case es.prefix:
              return [es.prefix, (t || es).decode(e)];
            case G.prefix:
              return [G.prefix, (t || G).decode(e)];
            default:
              if (null == t) throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
              return [e[0], t.decode(e)];
          }
        },
        eF = (e, t, r) => {
          let { prefix: i } = r;
          if (i !== es.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          let n = t.get(i);
          if (null != n) return n;
          {
            let n = r.encode(e).slice(1);
            return t.set(i, n), n;
          }
        },
        eB = (e, t, r) => {
          let { prefix: i } = r,
            n = t.get(i);
          if (null != n) return n;
          {
            let n = r.encode(e);
            return t.set(i, n), n;
          }
        },
        eV = 112,
        eK = 18,
        eW = (e, t, r) => {
          let i = eb(e),
            n = i + eb(t),
            s = new Uint8Array(n + r.byteLength);
          return e_(e, s, 0), e_(t, s, i), s.set(r, n), s;
        },
        eG = Symbol.for('@ipld/js-cid/CID'),
        eY = { writable: !1, configurable: !1, enumerable: !0 },
        eJ = { writable: !1, enumerable: !1, configurable: !1 },
        eX = (e, t) => {
          if (e.test('0.0.0-dev')) console.warn(t);
          else throw Error(t);
        },
        eZ = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
        eQ = { ...i, ...n, ...s, ...o, ...a, ...c, ...u, ...h, ...l, ...f };
      function e0(e, t, r, i) {
        return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: i } };
      }
      ({ ...p, ...d });
      let e1 = e0(
          'utf8',
          'u',
          (e) => {
            let t = new TextDecoder('utf8');
            return 'u' + t.decode(e);
          },
          (e) => {
            let t = new TextEncoder();
            return t.encode(e.substring(1));
          }
        ),
        e5 = e0(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            e = e.substring(1);
            let t = I(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        e3 = { utf8: e1, 'utf-8': e1, hex: eQ.base16, latin1: e5, ascii: e5, binary: e5, ...eQ };
      function e6(e, t = 'utf8') {
        let r = e3[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? S(globalThis.Buffer.from(e, 'utf-8')) : r.decoder.decode(`${r.prefix}${e}`);
      }
      function e2(e, t = 'utf8') {
        let r = e3[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8') : r.encoder.encode(e).substring(1);
      }
      var e8 = r(7098),
        e4 = function (e, t, r) {
          if (r || 2 == arguments.length) for (var i, n = 0, s = t.length; n < s; n++) (!i && n in t) || (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
          return e.concat(i || Array.prototype.slice.call(t));
        },
        e9 = function (e, t, r) {
          (this.name = e), (this.version = t), (this.os = r), (this.type = 'browser');
        },
        e7 = function (e) {
          (this.version = e), (this.type = 'node'), (this.name = 'node'), (this.os = e8.platform);
        },
        te = function (e, t, r, i) {
          (this.name = e), (this.version = t), (this.os = r), (this.bot = i), (this.type = 'bot-device');
        },
        tt = function () {
          (this.type = 'bot'), (this.bot = !0), (this.name = 'bot'), (this.version = null), (this.os = null);
        },
        tr = function () {
          (this.type = 'react-native'), (this.name = 'react-native'), (this.version = null), (this.os = null);
        },
        ti = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        tn = [
          ['aol', /AOLShield\/([0-9\._]+)/],
          ['edge', /Edge\/([0-9\._]+)/],
          ['edge-ios', /EdgiOS\/([0-9\._]+)/],
          ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
          ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
          ['samsung', /SamsungBrowser\/([0-9\.]+)/],
          ['silk', /\bSilk\/([0-9._-]+)\b/],
          ['miui', /MiuiBrowser\/([0-9\.]+)$/],
          ['beaker', /BeakerBrowser\/([0-9\.]+)/],
          ['edge-chromium', /EdgA?\/([0-9\.]+)/],
          ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
          ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
          ['fxios', /FxiOS\/([0-9\.]+)/],
          ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
          ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
          ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
          ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
          ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ['ie', /MSIE\s(7\.0)/],
          ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ['android', /Android\s([0-9\.]+)/],
          ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ['safari', /Version\/([0-9\._]+).*Safari/],
          ['facebook', /FB[AS]V\/([0-9\.]+)/],
          ['instagram', /Instagram\s([0-9\.]+)/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ['curl', /^curl\/([0-9\.]+)$/],
          ['searchbot', /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/],
        ],
        ts = [
          ['iOS', /iP(hone|od|ad)/],
          ['Android OS', /Android/],
          ['BlackBerry OS', /BlackBerry|BB10/],
          ['Windows Mobile', /IEMobile/],
          ['Amazon OS', /Kindle/],
          ['Windows 3.11', /Win16/],
          ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
          ['Windows 98', /(Windows 98)|(Win98)/],
          ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
          ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
          ['Windows Server 2003', /(Windows NT 5.2)/],
          ['Windows Vista', /(Windows NT 6.0)/],
          ['Windows 7', /(Windows NT 6.1)/],
          ['Windows 8', /(Windows NT 6.2)/],
          ['Windows 8.1', /(Windows NT 6.3)/],
          ['Windows 10', /(Windows NT 10.0)/],
          ['Windows ME', /Windows ME/],
          ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ['Open BSD', /OpenBSD/],
          ['Sun OS', /SunOS/],
          ['Chrome OS', /CrOS/],
          ['Linux', /(Linux)|(X11)/],
          ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
          ['QNX', /QNX/],
          ['BeOS', /BeOS/],
          ['OS/2', /OS\/2/],
        ];
      function to(e) {
        var t =
          '' !== e &&
          tn.reduce(function (t, r) {
            var i = r[0],
              n = r[1];
            if (t) return t;
            var s = n.exec(e);
            return !!s && [i, s];
          }, !1);
        if (!t) return null;
        var r = t[0],
          i = t[1];
        if ('searchbot' === r) return new tt();
        var n = i[1] && i[1].split('.').join('_').split('_').slice(0, 3);
        n
          ? n.length < 3 &&
            (n = e4(
              e4([], n, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push('0');
                return t;
              })(3 - n.length),
              !0
            ))
          : (n = []);
        var s = n.join('.'),
          o = (function (e) {
            for (var t = 0, r = ts.length; t < r; t++) {
              var i = ts[t],
                n = i[0];
              if (i[1].exec(e)) return n;
            }
            return null;
          })(e),
          a = ti.exec(e);
        return a && a[1] ? new te(r, s, o, a[1]) : new e9(r, s, o);
      }
      var ta = r(1816),
        tc = r(7151),
        tu = r(1593),
        th = r(4523);
      r(1363);
      let tl = {
        waku: {
          publish: 'waku_publish',
          batchPublish: 'waku_batchPublish',
          subscribe: 'waku_subscribe',
          batchSubscribe: 'waku_batchSubscribe',
          subscription: 'waku_subscription',
          unsubscribe: 'waku_unsubscribe',
          batchUnsubscribe: 'waku_batchUnsubscribe',
        },
        irn: {
          publish: 'irn_publish',
          batchPublish: 'irn_batchPublish',
          subscribe: 'irn_subscribe',
          batchSubscribe: 'irn_batchSubscribe',
          subscription: 'irn_subscription',
          unsubscribe: 'irn_unsubscribe',
          batchUnsubscribe: 'irn_batchUnsubscribe',
        },
        iridium: {
          publish: 'iridium_publish',
          batchPublish: 'iridium_batchPublish',
          subscribe: 'iridium_subscribe',
          batchSubscribe: 'iridium_batchSubscribe',
          subscription: 'iridium_subscription',
          unsubscribe: 'iridium_unsubscribe',
          batchUnsubscribe: 'iridium_batchUnsubscribe',
        },
      };
      var tf = r(7098);
      function tp(e, t) {
        return e.includes(':') ? [e] : t.chains || [];
      }
      let td = 'base10',
        tg = 'base16',
        ty = 'base64pad',
        tv = 'utf8';
      function tm() {
        let e = (0, w.randomBytes)(32);
        return e2(e, tg);
      }
      function t_(e) {
        let t = (0, E.vp)(e6(e, tv));
        return e2(t, tg);
      }
      function tb(e) {
        return Number(e2(e, td));
      }
      function tw(e) {
        let t = e6(e, ty),
          r = t.slice(0, 1);
        if (1 === tb(r)) {
          let e = t.slice(1, 33),
            i = t.slice(33, 45),
            n = t.slice(45);
          return { type: r, sealed: n, iv: i, senderPublicKey: e };
        }
        let i = t.slice(1, 13),
          n = t.slice(13);
        return { type: r, sealed: n, iv: i };
      }
      function tE(e) {
        let t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > 'u') throw Error('missing sender public key');
          if (typeof e?.receiverPublicKey > 'u') throw Error('missing receiver public key');
        }
        return { type: t, senderPublicKey: e?.senderPublicKey, receiverPublicKey: e?.receiverPublicKey };
      }
      function tD(e) {
        return 1 === e.type && 'string' == typeof e.senderPublicKey && 'string' == typeof e.receiverPublicKey;
      }
      var tS = Object.defineProperty,
        tI = Object.getOwnPropertySymbols,
        tO = Object.prototype.hasOwnProperty,
        tP = Object.prototype.propertyIsEnumerable,
        tC = (e, t, r) => (t in e ? tS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        tA = (e, t) => {
          for (var r in t || (t = {})) tO.call(t, r) && tC(e, r, t[r]);
          if (tI) for (var r of tI(t)) tP.call(t, r) && tC(e, r, t[r]);
          return e;
        };
      let tx = { reactNative: 'react-native', node: 'node', browser: 'browser', unknown: 'unknown' };
      function tN() {
        return 'u' > typeof tf && 'u' > typeof tf.versions && 'u' > typeof tf.versions.node;
      }
      function tT() {
        return !(0, tc.getDocument)() && !!(0, tc.getNavigator)() && 'ReactNative' === navigator.product;
      }
      function tR() {
        return !tN() && !!(0, tc.getNavigator)();
      }
      function tL() {
        return tT() ? tx.reactNative : tN() ? tx.node : tR() ? tx.browser : tx.unknown;
      }
      function tj(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function tU(e) {
        return Object.fromEntries(e.entries());
      }
      function tM(e) {
        return new Map(Object.entries(e));
      }
      function tk(e = ta.FIVE_MINUTES, t) {
        let r, i, n;
        let s = (0, ta.toMiliseconds)(e || ta.FIVE_MINUTES);
        return {
          resolve: (e) => {
            n && r && (clearTimeout(n), r(e));
          },
          reject: (e) => {
            n && i && (clearTimeout(n), i(e));
          },
          done: () =>
            new Promise((e, o) => {
              (n = setTimeout(() => {
                o(Error(t));
              }, s)),
                (r = e),
                (i = o);
            }),
        };
      }
      function tz(e, t, r) {
        return new Promise(async (i, n) => {
          let s = setTimeout(() => n(Error(r)), t);
          try {
            let t = await e;
            i(t);
          } catch (e) {
            n(e);
          }
          clearTimeout(s);
        });
      }
      function t$(e, t) {
        if ('string' == typeof t && t.startsWith(`${e}:`)) return t;
        if ('topic' === e.toLowerCase()) {
          if ('string' != typeof t) throw Error('Value must be "string" for expirer target type: topic');
          return `topic:${t}`;
        }
        if ('id' === e.toLowerCase()) {
          if ('number' != typeof t) throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function tq(e) {
        let [t, r] = e.split(':'),
          i = { id: void 0, topic: void 0 };
        if ('topic' === t && 'string' == typeof r) i.topic = r;
        else if ('id' === t && Number.isInteger(Number(r))) i.id = Number(r);
        else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
        return i;
      }
      function tH(e, t) {
        return (0, ta.fromMiliseconds)((t || Date.now()) + (0, ta.toMiliseconds)(e));
      }
      function tF(e) {
        return Date.now() >= (0, ta.toMiliseconds)(e);
      }
      function tB(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function tV(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function tK({ id: e, topic: t, wcDeepLink: i }) {
        try {
          if (!i) return;
          let n = 'string' == typeof i ? JSON.parse(i) : i,
            s = n?.href;
          if ('string' != typeof s) return;
          s.endsWith('/') && (s = s.slice(0, -1));
          let o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
            a = tL();
          a === tx.browser ? window.open(o, '_self', 'noreferrer noopener') : a === tx.reactNative && 'u' > typeof (null == r.g ? void 0 : r.g.Linking) && (await r.g.Linking.openURL(o));
        } catch (e) {
          console.error(e);
        }
      }
      function tW(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function tG(e) {
        let t = tl[e];
        if (typeof t > 'u') throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      var tY = Object.defineProperty,
        tJ = Object.getOwnPropertySymbols,
        tX = Object.prototype.hasOwnProperty,
        tZ = Object.prototype.propertyIsEnumerable,
        tQ = (e, t, r) => (t in e ? tY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        t0 = (e, t) => {
          for (var r in t || (t = {})) tX.call(t, r) && tQ(e, r, t[r]);
          if (tJ) for (var r of tJ(t)) tZ.call(t, r) && tQ(e, r, t[r]);
          return e;
        };
      function t1(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [r, i] = e.split(':');
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function t5(e) {
        return e.includes(':');
      }
      function t3(e) {
        return t5(e) ? e.split(':')[0] : e;
      }
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      let t6 = {
          INVALID_METHOD: { message: 'Invalid method.', code: 1001 },
          INVALID_EVENT: { message: 'Invalid event.', code: 1002 },
          INVALID_UPDATE_REQUEST: { message: 'Invalid update request.', code: 1003 },
          INVALID_EXTEND_REQUEST: { message: 'Invalid extend request.', code: 1004 },
          INVALID_SESSION_SETTLE_REQUEST: { message: 'Invalid session settle request.', code: 1005 },
          UNAUTHORIZED_METHOD: { message: 'Unauthorized method.', code: 3001 },
          UNAUTHORIZED_EVENT: { message: 'Unauthorized event.', code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: { message: 'Unauthorized update request.', code: 3003 },
          UNAUTHORIZED_EXTEND_REQUEST: { message: 'Unauthorized extend request.', code: 3004 },
          USER_REJECTED: { message: 'User rejected.', code: 5e3 },
          USER_REJECTED_CHAINS: { message: 'User rejected chains.', code: 5001 },
          USER_REJECTED_METHODS: { message: 'User rejected methods.', code: 5002 },
          USER_REJECTED_EVENTS: { message: 'User rejected events.', code: 5003 },
          UNSUPPORTED_CHAINS: { message: 'Unsupported chains.', code: 5100 },
          UNSUPPORTED_METHODS: { message: 'Unsupported methods.', code: 5101 },
          UNSUPPORTED_EVENTS: { message: 'Unsupported events.', code: 5102 },
          UNSUPPORTED_ACCOUNTS: { message: 'Unsupported accounts.', code: 5103 },
          UNSUPPORTED_NAMESPACE_KEY: { message: 'Unsupported namespace key.', code: 5104 },
          USER_DISCONNECTED: { message: 'User disconnected.', code: 6e3 },
          SESSION_SETTLEMENT_FAILED: { message: 'Session settlement failed.', code: 7e3 },
          WC_METHOD_UNSUPPORTED: { message: 'Unsupported wc_ method.', code: 10001 },
        },
        t2 = {
          NOT_INITIALIZED: { message: 'Not initialized.', code: 1 },
          NO_MATCHING_KEY: { message: 'No matching key.', code: 2 },
          RESTORE_WILL_OVERRIDE: { message: 'Restore will override.', code: 3 },
          RESUBSCRIBED: { message: 'Resubscribed.', code: 4 },
          MISSING_OR_INVALID: { message: 'Missing or invalid.', code: 5 },
          EXPIRED: { message: 'Expired.', code: 6 },
          UNKNOWN_TYPE: { message: 'Unknown type.', code: 7 },
          MISMATCHED_TOPIC: { message: 'Mismatched topic.', code: 8 },
          NON_CONFORMING_NAMESPACES: { message: 'Non conforming namespaces.', code: 9 },
        };
      function t8(e, t) {
        let { message: r, code: i } = t2[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function t4(e, t) {
        let { message: r, code: i } = t6[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function t9(e, t) {
        return !!Array.isArray(e) && (!('u' > typeof t) || !e.length || e.every(t));
      }
      function t7(e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
      }
      function re(e) {
        return typeof e > 'u';
      }
      function rt(e, t) {
        return !!(t && re(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function rr(e, t) {
        return !!(t && re(e)) || ('number' == typeof e && !isNaN(e));
      }
      function ri(e) {
        return !!(rt(e, !1) && e.includes(':')) && 2 === e.split(':').length;
      }
      function rn(e) {
        let t = !0;
        return t9(e) ? e.length && (t = e.every((e) => rt(e, !1))) : (t = !1), t;
      }
      function rs(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            var i;
            let n;
            if (r) return;
            let s =
              ((i = `${t}, namespace`),
              (n = null),
              rn(e?.methods)
                ? rn(e?.events) || (n = t4('UNSUPPORTED_EVENTS', `${i}, events should be an array of strings or empty array for no events`))
                : (n = t4('UNSUPPORTED_METHODS', `${i}, methods should be an array of strings or empty array for no methods`)),
              n);
            s && (r = s);
          }),
          r
        );
      }
      function ro(e, t) {
        let r = null;
        if (e && t7(e)) {
          let i;
          let n = rs(e, t);
          n && (r = n);
          let s =
            ((i = null),
            Object.values(e).forEach((e) => {
              var r, n;
              let s;
              if (i) return;
              let o =
                ((r = e?.accounts),
                (n = `${t} namespace`),
                (s = null),
                t9(r)
                  ? r.forEach((e) => {
                      s ||
                        (function (e) {
                          if (rt(e, !1) && e.includes(':')) {
                            let t = e.split(':');
                            if (3 === t.length) {
                              let e = t[0] + ':' + t[1];
                              return !!t[2] && ri(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (s = t4('UNSUPPORTED_ACCOUNTS', `${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`));
                    })
                  : (s = t4('UNSUPPORTED_ACCOUNTS', `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`)),
                s);
              o && (i = o);
            }),
            i);
          s && (r = s);
        } else r = t8('MISSING_OR_INVALID', `${t}, namespaces should be an object with data`);
        return r;
      }
      function ra(e) {
        return rt(e.protocol, !0);
      }
      function rc(e) {
        return 'u' > typeof e;
      }
      function ru(e, t) {
        return !(
          !ri(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...t1(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function rh(e, t, r) {
        let i = null,
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                var i;
                r.includes(':')
                  ? (t[r] = e[r])
                  : null == (i = e[r].chains) ||
                    i.forEach((i) => {
                      t[i] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(':')) t[r] = e[r];
                else {
                  let i = t1(e[r].accounts);
                  i?.forEach((i) => {
                    t[i] = { accounts: e[r].accounts.filter((e) => e.includes(`${i}:`)), methods: e[r].methods, events: e[r].events };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(n),
          a = Object.keys(s),
          c = rl(Object.keys(e)),
          u = rl(Object.keys(t)),
          h = c.filter((e) => !u.includes(e));
        return (
          h.length &&
            (i = t8(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          tj(o, a) ||
            (i = t8(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(':') || i) return;
            let n = t1(t[e].accounts);
            n.includes(e) ||
              (i = t8(
                'NON_CONFORMING_NAMESPACES',
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${n.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (tj(n[e].methods, s[e].methods)
                ? tj(n[e].events, s[e].events) || (i = t8('NON_CONFORMING_NAMESPACES', `${r} namespaces events don't satisfy namespace events for ${e}`))
                : (i = t8('NON_CONFORMING_NAMESPACES', `${r} namespaces methods don't satisfy namespace methods for ${e}`)));
          }),
          i
        );
      }
      function rl(e) {
        return [...new Set(e.map((e) => (e.includes(':') ? e.split(':')[0] : e)))];
      }
      var rf = r(975),
        rp = r(3909),
        rd = r(744),
        rg = r(8701);
      class ry extends rg.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = 'wc'), (this.version = 2);
        }
      }
      class rv extends rg.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t), (this.records = new Map());
        }
      }
      class rm {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class r_ extends rg.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class rb extends rg.q {
        constructor(e) {
          super();
        }
      }
      class rw {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class rE extends rg.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class rD extends rg.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class rS {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class rI {
        constructor(e) {
          (this.opts = e), (this.protocol = 'wc'), (this.version = 2);
        }
      }
      class rO {
        constructor(e) {
          this.client = e;
        }
      }
      let rP = (e) => JSON.stringify(e, (e, t) => ('bigint' == typeof t ? t.toString() + 'n' : t)),
        rC = (e) => {
          let t = e.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(t, (e, t) => {
            let r = 'string' == typeof t && t.match(/^\d+n$/);
            return r ? BigInt(t.substring(0, t.length - 1)) : t;
          });
        };
      function rA(e) {
        if ('string' != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
          return rC(e);
        } catch (t) {
          return e;
        }
      }
      function rx(e) {
        return 'string' == typeof e ? e : rP(e) || '';
      }
      var rN = r(4377);
      let rT = 'base64url',
        rR = 'base58btc';
      function rL(e) {
        return e2(e6(rx(e), 'utf8'), rT);
      }
      function rj(e) {
        let t = e6('K36', rR),
          r = 'z' + e2(O([t, e]), rR);
        return ['did', 'key', r].join(':');
      }
      function rU(e = (0, w.randomBytes)(32)) {
        return rN._w(e);
      }
      async function rM(e, t, r, i, n = (0, ta.fromMiliseconds)(Date.now())) {
        var s, o;
        let a = { alg: 'EdDSA', typ: 'JWT' },
          c = rj(i.publicKey),
          u = { iss: c, sub: e, aud: t, iat: n, exp: n + r },
          h = e6([rL((s = { header: a, payload: u }).header), rL(s.payload)].join('.'), 'utf8'),
          l = rN.Xx(i.secretKey, h);
        return [rL((o = { header: a, payload: u, signature: l }).header), rL(o.payload), e2(o.signature, rT)].join('.');
      }
      r(8501);
      let rk = 'INTERNAL_ERROR',
        rz = 'SERVER_ERROR',
        r$ = [-32700, -32600, -32601, -32602, -32603],
        rq = {
          PARSE_ERROR: { code: -32700, message: 'Parse error' },
          INVALID_REQUEST: { code: -32600, message: 'Invalid Request' },
          METHOD_NOT_FOUND: { code: -32601, message: 'Method not found' },
          INVALID_PARAMS: { code: -32602, message: 'Invalid params' },
          [rk]: { code: -32603, message: 'Internal error' },
          [rz]: { code: -32e3, message: 'Server error' },
        };
      function rH(e) {
        return Object.keys(rq).includes(e) ? rq[e] : rq[rz];
      }
      function rF(e, t, r) {
        return e.message.includes('getaddrinfo ENOTFOUND') || e.message.includes('connect ECONNREFUSED') ? Error(`Unavailable ${r} RPC url at ${t}`) : e;
      }
      var rB = r(4458);
      function rV(e = 3) {
        let t = Date.now() * Math.pow(10, e);
        return t + Math.floor(Math.random() * Math.pow(10, e));
      }
      function rK(e = 6) {
        return BigInt(rV(e));
      }
      function rW(e, t, r) {
        return { id: r || rV(), jsonrpc: '2.0', method: e, params: t };
      }
      function rG(e, t) {
        return { id: e, jsonrpc: '2.0', result: t };
      }
      function rY(e, t, r) {
        var i, n;
        return {
          id: e,
          jsonrpc: '2.0',
          error:
            void 0 === (i = t)
              ? rH(rk)
              : ('string' == typeof i && (i = Object.assign(Object.assign({}, rH(rz)), { message: i })),
                void 0 !== r && (i.data = r),
                (n = i.code),
                r$.includes(n) &&
                  (i = (function (e) {
                    let t = Object.values(rq).find((t) => t.code === e);
                    return t || rq[rz];
                  })(i.code)),
                i),
        };
      }
      class rJ {}
      class rX extends rJ {
        constructor() {
          super();
        }
      }
      class rZ extends rX {
        constructor(e) {
          super();
        }
      }
      function rQ(e, t) {
        let r = (function (e) {
          let t = e.match(RegExp(/^\w+:/, 'gi'));
          if (t && t.length) return t[0];
        })(e);
        return void 0 !== r && new RegExp(t).test(r);
      }
      function r0(e) {
        return rQ(e, '^https?:');
      }
      function r1(e) {
        return rQ(e, '^wss?:');
      }
      function r5(e) {
        return 'object' == typeof e && 'id' in e && 'jsonrpc' in e && '2.0' === e.jsonrpc;
      }
      function r3(e) {
        return r5(e) && 'method' in e;
      }
      function r6(e) {
        return r5(e) && (r2(e) || r8(e));
      }
      function r2(e) {
        return 'result' in e;
      }
      function r8(e) {
        return 'error' in e;
      }
      class r4 extends rZ {
        constructor(e) {
          super(e), (this.events = new v.EventEmitter()), (this.hasRegisteredEventListeners = !1), (this.connection = this.setConnection(e)), this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(rW(e.method, e.params || [], e.id || rK().toString()), t);
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                i(e);
              }
            this.events.on(`${e.id}`, (e) => {
              r8(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              i(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit('payload', e), r6(e) ? this.events.emit(`${e.id}`, e) : this.events.emit('message', { type: e.method, data: e.params });
        }
        onClose(e) {
          e && 3e3 === e.code && this.events.emit('error', Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ''}`)), this.events.emit('disconnect');
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            'string' == typeof e && (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit('connect'));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on('payload', (e) => this.onPayload(e)),
            this.connection.on('close', (e) => this.onClose(e)),
            this.connection.on('error', (e) => this.events.emit('error', e)),
            this.connection.on('register_error', (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      let r9 = () => 'undefined' != typeof window,
        r7 = void 0 !== r.g && void 0 !== r.g.WebSocket ? r.g.WebSocket : 'undefined' != typeof window && void 0 !== window.WebSocket ? window.WebSocket : r(1042);
      var ie = class {
          constructor(e) {
            if (((this.url = e), (this.events = new v.EventEmitter()), (this.registering = !1), !r1(e))) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
            this.url = e;
          }
          get connected() {
            return void 0 !== this.socket;
          }
          get connecting() {
            return this.registering;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async open(e = this.url) {
            await this.register(e);
          }
          async close() {
            return new Promise((e, t) => {
              if (void 0 === this.socket) {
                t(Error('Connection already closed'));
                return;
              }
              (this.socket.onclose = (t) => {
                this.onClose(t), e();
              }),
                this.socket.close();
            });
          }
          async send(e, t) {
            void 0 === this.socket && (this.socket = await this.register());
            try {
              this.socket.send(rx(e));
            } catch (t) {
              this.onError(e.id, t);
            }
          }
          register(e = this.url) {
            if (!r1(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
            if (this.registering) {
              let e = this.events.getMaxListeners();
              return (
                (this.events.listenerCount('register_error') >= e || this.events.listenerCount('open') >= e) && this.events.setMaxListeners(e + 1),
                new Promise((e, t) => {
                  this.events.once('register_error', (e) => {
                    this.resetMaxListeners(), t(e);
                  }),
                    this.events.once('open', () => {
                      if ((this.resetMaxListeners(), void 0 === this.socket)) return t(Error('WebSocket connection is missing or invalid'));
                      e(this.socket);
                    });
                })
              );
            }
            return (
              (this.url = e),
              (this.registering = !0),
              new Promise((t, r) => {
                let i = (0, rB.isReactNative)() ? void 0 : { rejectUnauthorized: !RegExp('wss?://localhost(:d{2,5})?').test(e) },
                  n = new r7(e, [], i);
                r9()
                  ? (n.onerror = (e) => {
                      r(this.emitError(e.error));
                    })
                  : n.on('error', (e) => {
                      r(this.emitError(e));
                    }),
                  (n.onopen = () => {
                    this.onOpen(n), t(n);
                  });
              })
            );
          }
          onOpen(e) {
            (e.onmessage = (e) => this.onPayload(e)), (e.onclose = (e) => this.onClose(e)), (this.socket = e), (this.registering = !1), this.events.emit('open');
          }
          onClose(e) {
            (this.socket = void 0), (this.registering = !1), this.events.emit('close', e);
          }
          onPayload(e) {
            if (void 0 === e.data) return;
            let t = 'string' == typeof e.data ? rA(e.data) : e.data;
            this.events.emit('payload', t);
          }
          onError(e, t) {
            let r = this.parseError(t),
              i = r.message || r.toString(),
              n = rY(e, i);
            this.events.emit('payload', n);
          }
          parseError(e, t = this.url) {
            return rF(e, t, 'WS');
          }
          resetMaxListeners() {
            this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
          }
          emitError(e) {
            let t = this.parseError(Error((null == e ? void 0 : e.message) || `WebSocket connection failed for URL: ${this.url}`));
            return this.events.emit('register_error', t), t;
          }
        },
        it = r(4744),
        ir = r.n(it),
        ii = r(7098),
        is = function (e, t) {
          if (e.length >= 255) throw TypeError('Alphabet too long');
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var s = e.charAt(n),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw TypeError(s + ' is ambiguous');
            r[o] = n;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function l(e) {
            if ('string' != typeof e) throw TypeError('Expected String');
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (' ' !== e[0]) {
              for (var i = 0, n = 0; e[t] === c; ) i++, t++;
              for (var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s); e[t]; ) {
                var h = r[e.charCodeAt(t)];
                if (255 === h) return;
                for (var l = 0, f = s - 1; (0 !== h || l < n) && -1 !== f; f--, l++) (h += (a * o[f]) >>> 0), (o[f] = h % 256 >>> 0), (h = (h / 256) >>> 0);
                if (0 !== h) throw Error('Non-zero carry');
                (n = l), t++;
              }
              if (' ' !== e[t]) {
                for (var p = s - n; p !== s && 0 === o[p]; ) p++;
                for (var d = new Uint8Array(i + (s - p)), g = i; p !== s; ) d[g++] = o[p++];
                return d;
              }
            }
          }
          return {
            encode: function (t) {
              if ((t instanceof Uint8Array || (ArrayBuffer.isView(t) ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)))
                throw TypeError('Expected Uint8Array');
              if (0 === t.length) return '';
              for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n]; ) n++, r++;
              for (var o = ((s - n) * h + 1) >>> 0, u = new Uint8Array(o); n !== s; ) {
                for (var l = t[n], f = 0, p = o - 1; (0 !== l || f < i) && -1 !== p; p--, f++) (l += (256 * u[p]) >>> 0), (u[p] = l % a >>> 0), (l = (l / a) >>> 0);
                if (0 !== l) throw Error('Non-zero carry');
                (i = f), n++;
              }
              for (var d = o - i; d !== o && 0 === u[d]; ) d++;
              for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
              return g;
            },
            decodeUnsafe: l,
            decode: function (e) {
              var r = l(e);
              if (r) return r;
              throw Error(`Non-${t} character`);
            },
          };
        };
      let io = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        ia = (e) => new TextEncoder().encode(e),
        ic = (e) => new TextDecoder().decode(e);
      class iu {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class ih {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0))) throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return ip(this, e);
        }
      }
      class il {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return ip(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
        }
      }
      let ip = (e, t) => new il({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class id {
        constructor(e, t, r, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r), (this.baseDecode = i), (this.encoder = new iu(e, t, r)), (this.decoder = new ih(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let ig = ({ name: e, prefix: t, encode: r, decode: i }) => new id(e, t, r, i),
        iy = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: n } = is(r, t);
          return ig({ prefix: e, name: t, encode: i, decode: (e) => io(n(e)) });
        },
        iv = (e, t, r, i) => {
          let n = {};
          for (let e = 0; e < t.length; ++e) n[t[e]] = e;
          let s = e.length;
          for (; '=' === e[s - 1]; ) --s;
          let o = new Uint8Array(((s * r) / 8) | 0),
            a = 0,
            c = 0,
            u = 0;
          for (let t = 0; t < s; ++t) {
            let s = n[e[t]];
            if (void 0 === s) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | s), (a += r) >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        im = (e, t, r) => {
          let i = '=' === t[t.length - 1],
            n = (1 << r) - 1,
            s = '',
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i) for (a = (a << 8) | e[i], o += 8; o > r; ) (o -= r), (s += t[n & (a >> o)]);
          if ((o && (s += t[n & (a << (r - o))]), i)) for (; (s.length * r) & 7; ) s += '=';
          return s;
        },
        i_ = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => ig({ prefix: t, name: e, encode: (e) => im(e, i, r), decode: (t) => iv(t, i, r, e) }),
        ib = ig({ prefix: '\x00', name: 'identity', encode: (e) => ic(e), decode: (e) => ia(e) });
      var iw = Object.freeze({ __proto__: null, identity: ib });
      let iE = i_({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 });
      var iD = Object.freeze({ __proto__: null, base2: iE });
      let iS = i_({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 });
      var iI = Object.freeze({ __proto__: null, base8: iS });
      let iO = iy({ prefix: '9', name: 'base10', alphabet: '0123456789' });
      var iP = Object.freeze({ __proto__: null, base10: iO });
      let iC = i_({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        iA = i_({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 });
      var ix = Object.freeze({ __proto__: null, base16: iC, base16upper: iA });
      let iN = i_({ prefix: 'b', name: 'base32', alphabet: 'abcdefghijklmnopqrstuvwxyz234567', bitsPerChar: 5 }),
        iT = i_({ prefix: 'B', name: 'base32upper', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', bitsPerChar: 5 }),
        iR = i_({ prefix: 'c', name: 'base32pad', alphabet: 'abcdefghijklmnopqrstuvwxyz234567=', bitsPerChar: 5 }),
        iL = i_({ prefix: 'C', name: 'base32padupper', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=', bitsPerChar: 5 }),
        ij = i_({ prefix: 'v', name: 'base32hex', alphabet: '0123456789abcdefghijklmnopqrstuv', bitsPerChar: 5 }),
        iU = i_({ prefix: 'V', name: 'base32hexupper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV', bitsPerChar: 5 }),
        iM = i_({ prefix: 't', name: 'base32hexpad', alphabet: '0123456789abcdefghijklmnopqrstuv=', bitsPerChar: 5 }),
        ik = i_({ prefix: 'T', name: 'base32hexpadupper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=', bitsPerChar: 5 }),
        iz = i_({ prefix: 'h', name: 'base32z', alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769', bitsPerChar: 5 });
      var i$ = Object.freeze({ __proto__: null, base32: iN, base32upper: iT, base32pad: iR, base32padupper: iL, base32hex: ij, base32hexupper: iU, base32hexpad: iM, base32hexpadupper: ik, base32z: iz });
      let iq = iy({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
        iH = iy({ prefix: 'K', name: 'base36upper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' });
      var iF = Object.freeze({ __proto__: null, base36: iq, base36upper: iH });
      let iB = iy({ name: 'base58btc', prefix: 'z', alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz' }),
        iV = iy({ name: 'base58flickr', prefix: 'Z', alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ' });
      var iK = Object.freeze({ __proto__: null, base58btc: iB, base58flickr: iV });
      let iW = i_({ prefix: 'm', name: 'base64', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', bitsPerChar: 6 }),
        iG = i_({ prefix: 'M', name: 'base64pad', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', bitsPerChar: 6 }),
        iY = i_({ prefix: 'u', name: 'base64url', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', bitsPerChar: 6 }),
        iJ = i_({ prefix: 'U', name: 'base64urlpad', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=', bitsPerChar: 6 });
      var iX = Object.freeze({ __proto__: null, base64: iW, base64pad: iG, base64url: iY, base64urlpad: iJ });
      let iZ = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        iQ = iZ.reduce((e, t, r) => ((e[r] = t), e), []),
        i0 = iZ.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        i1 = ig({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += iQ[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = i0[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var i5 = Object.freeze({ __proto__: null, base256emoji: i1 });
      function i3(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 2147483648; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (i3.bytes = r - i + 1), t;
      }
      function i6(e, t) {
        var r,
          i = 0,
          t = t || 0,
          n = 0,
          s = t,
          o = e.length;
        do {
          if (s >= o) throw ((i6.bytes = 0), RangeError('Could not decode varint'));
          (r = e[s++]), (i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n)), (n += 7);
        } while (r >= 128);
        return (i6.bytes = s - t), i;
      }
      var i2 = {
        encode: i3,
        decode: i6,
        encodingLength: function (e) {
          return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10;
        },
      };
      let i8 = (e, t, r = 0) => (i2.encode(e, t, r), t),
        i4 = (e) => i2.encodingLength(e),
        i9 = (e, t) => {
          let r = t.byteLength,
            i = i4(e),
            n = i + i4(r),
            s = new Uint8Array(n + r);
          return i8(e, s, 0), i8(r, s, i), s.set(t, n), new i7(e, r, t, s);
        };
      class i7 {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let ne = ({ name: e, code: t, encode: r }) => new nt(e, t, r);
      class nt {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? i9(this.code, t) : t.then((e) => i9(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let nr = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        ni = ne({ name: 'sha2-256', code: 18, encode: nr('SHA-256') }),
        nn = ne({ name: 'sha2-512', code: 19, encode: nr('SHA-512') });
      var ns = Object.freeze({ __proto__: null, sha256: ni, sha512: nn }),
        no = Object.freeze({ __proto__: null, identity: { code: 0, name: 'identity', encode: io, digest: (e) => i9(0, io(e)) } });
      new TextEncoder(), new TextDecoder();
      let na = { ...iw, ...iD, ...iI, ...iP, ...ix, ...i$, ...iF, ...iK, ...iX, ...i5 };
      function nc(e) {
        return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
      }
      function nu(e, t, r, i) {
        return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: i } };
      }
      ({ ...ns, ...no });
      let nh = nu(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        nl = nu(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            e = e.substring(1);
            let t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? nc(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
            })(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        nf = { utf8: nh, 'utf-8': nh, hex: na.base16, latin1: nl, ascii: nl, binary: nl, ...na },
        np = 'core',
        nd = `wc@2:${np}:`,
        ng = { name: np, logger: 'error' },
        ny = { database: ':memory:' },
        nv = 'client_ed25519_seed',
        nm = ta.ONE_DAY,
        n_ = ta.SIX_HOURS,
        nb = 'wss://relay.walletconnect.com',
        nw = {
          message: 'relayer_message',
          message_ack: 'relayer_message_ack',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          transport_closed: 'relayer_transport_closed',
          publish: 'relayer_publish',
        },
        nE = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
        nD = ta.ONE_SECOND / 2,
        nS = { created: 'subscription_created', deleted: 'subscription_deleted', expired: 'subscription_expired', disabled: 'subscription_disabled', sync: 'subscription_sync', resubscribed: 'subscription_resubscribed' },
        nI = 1e3 * ta.FIVE_SECONDS,
        nO = {
          wc_pairingDelete: { req: { ttl: ta.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ta.ONE_DAY, prompt: !1, tag: 1001 } },
          wc_pairingPing: { req: { ttl: ta.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ta.THIRTY_SECONDS, prompt: !1, tag: 1003 } },
          unregistered_method: { req: { ttl: ta.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ta.ONE_DAY, prompt: !1, tag: 0 } },
        },
        nP = { created: 'history_created', updated: 'history_updated', deleted: 'history_deleted', sync: 'history_sync' },
        nC = { created: 'expirer_created', deleted: 'expirer_deleted', expired: 'expirer_expired', sync: 'expirer_sync' },
        nA = 'verify-api',
        nx = 'https://verify.walletconnect.com';
      class nN {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = 'keychain'),
            (this.version = '0.3'),
            (this.initialized = !1),
            (this.storagePrefix = nd),
            (this.init = async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                'u' > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > 'u') {
                let { message: t } = t8('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, rd.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + '//' + this.name;
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, tU(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? tM(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      class nT {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            (this.name = 'crypto'),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.getClientId = async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = rU(e);
              return rj(t.publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              let e = (function () {
                let e = D.Au();
                return { privateKey: e2(e.secretKey, tg), publicKey: e2(e.publicKey, tg) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                r = rU(t),
                i = tm();
              return await rM(i, e, nm, r);
            }),
            (this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              let i = this.getPrivateKey(e),
                n = (function (e, t) {
                  let r = D.gi(e6(e, tg), e6(t, tg)),
                    i = new b.t(E.mE, r).expand(32);
                  return e2(i, tg);
                })(i, t);
              return this.setSymKey(n, r);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              let r =
                t ||
                (function (e) {
                  let t = (0, E.vp)(e6(e, tg));
                  return e2(t, tg);
                })(e);
              return await this.keychain.set(r, e), r;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, r) => {
              this.isInitialized();
              let i = tE(r),
                n = rx(t);
              if (tD(i)) {
                let t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let s = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (function (e) {
                let t = e6(`${'u' > typeof e.type ? e.type : 0}`, td);
                if (1 === tb(t) && typeof e.senderPublicKey > 'u') throw Error('Missing sender public key for type 1 envelope');
                let r = 'u' > typeof e.senderPublicKey ? e6(e.senderPublicKey, tg) : void 0,
                  i = 'u' > typeof e.iv ? e6(e.iv, tg) : (0, w.randomBytes)(12),
                  n = new _.OK(e6(e.symKey, tg)).seal(i, e6(e.message, tv));
                return (function (e) {
                  if (1 === tb(e.type)) {
                    if (typeof e.senderPublicKey > 'u') throw Error('Missing sender public key for type 1 envelope');
                    return e2(O([e.type, e.senderPublicKey, e.iv, e.sealed]), ty);
                  }
                  return e2(O([e.type, e.iv, e.sealed]), ty);
                })({ type: t, sealed: n, iv: i, senderPublicKey: r });
              })({ type: o, symKey: s, message: n, senderPublicKey: a });
            }),
            (this.decode = async (e, t, r) => {
              this.isInitialized();
              let i = (function (e, t) {
                let r = tw(e);
                return tE({ type: tb(r.type), senderPublicKey: 'u' > typeof r.senderPublicKey ? e2(r.senderPublicKey, tg) : void 0, receiverPublicKey: t?.receiverPublicKey });
              })(t, r);
              if (tD(i)) {
                let t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let n = this.getSymKey(e),
                s = (function (e) {
                  let t = new _.OK(e6(e.symKey, tg)),
                    { sealed: r, iv: i } = tw(e.encoded),
                    n = t.open(i, r);
                  if (null === n) throw Error('Failed to decrypt');
                  return e2(n, tv);
                })({ symKey: n, encoded: t });
              return rA(s);
            }),
            (this.getPayloadType = (e) => {
              let t = tw(e);
              return tb(t.type);
            }),
            (this.getPayloadSenderPublicKey = (e) => {
              let t = tw(e);
              return t.senderPublicKey ? e2(t.senderPublicKey, tg) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, rd.generateChildLogger)(t, this.name)),
            (this.keychain = r || new nN(this.core, this.logger));
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = '';
          try {
            e = this.keychain.get(nv);
          } catch {
            (e = tm()), await this.keychain.set(nv, e);
          }
          return (function (e, t = 'utf8') {
            let r = nf[t];
            if (!r) throw Error(`Unsupported encoding "${t}"`);
            return ('utf8' === t || 'utf-8' === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? nc(globalThis.Buffer.from(e, 'utf-8')) : r.decoder.decode(`${r.prefix}${e}`);
          })(e, 'base16');
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      class nR extends rm {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = 'messages'),
            (this.version = '0.3'),
            (this.initialized = !1),
            (this.storagePrefix = nd),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace('Initialized');
                try {
                  let e = await this.getRelayerMessages();
                  'u' > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: 'method', method: 'restore', size: this.messages.size });
                } catch (e) {
                  this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              let r = t_(t),
                i = this.messages.get(e);
              return typeof i > 'u' && (i = {}), 'u' > typeof i[r] || ((i[r] = t), this.messages.set(e, i), await this.persist()), r;
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            (this.has = (e, t) => {
              this.isInitialized();
              let r = this.get(e),
                i = t_(t);
              return 'u' > typeof r[i];
            }),
            (this.del = async (e) => {
              this.isInitialized(), this.messages.delete(e), await this.persist();
            }),
            (this.logger = (0, rd.generateChildLogger)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + '//' + this.name;
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, tU(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? tM(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      class nL extends r_ {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new v.EventEmitter()),
            (this.name = 'publisher'),
            (this.queue = new Map()),
            (this.publishTimeout = (0, ta.toMiliseconds)(ta.TEN_SECONDS)),
            (this.queueTimeout = (0, ta.toMiliseconds)(ta.FIVE_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, r) => {
              this.logger.debug('Publishing Payload'), this.logger.trace({ type: 'method', method: 'publish', params: { topic: e, message: t, opts: r } });
              try {
                let i = r?.ttl || n_,
                  n = tW(r),
                  s = r?.prompt || !1,
                  o = r?.tag || 0,
                  a = r?.id || rK().toString(),
                  c = { topic: e, message: t, opts: { ttl: i, relay: n, prompt: s, tag: o, id: a } },
                  u = setTimeout(() => this.queue.set(a, c), this.queueTimeout);
                try {
                  await await tz(this.rpcPublish(e, t, i, n, s, o, a), this.publishTimeout), clearTimeout(u), this.relayer.events.emit(nw.publish, c);
                } catch {
                  this.logger.debug('Publishing Payload stalled'), (this.needsTransportRestart = !0);
                  return;
                }
                this.logger.debug('Successfully Published Payload'), this.logger.trace({ type: 'method', method: 'publish', params: { topic: e, message: t, opts: r } });
              } catch (e) {
                throw (this.logger.debug('Failed to Publish Payload'), this.logger.error(e), e);
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, rd.generateChildLogger)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        rpcPublish(e, t, r, i, n, s, o) {
          var a, c, u, h;
          let l = { method: tG(i.protocol).publish, params: { topic: e, message: t, ttl: r, prompt: n, tag: s }, id: o };
          return (
            re(null == (a = l.params) ? void 0 : a.prompt) && (null == (c = l.params) || delete c.prompt),
            re(null == (u = l.params) ? void 0 : u.tag) && (null == (h = l.params) || delete h.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: l }),
            this.relayer.request(l)
          );
        }
        onPublish(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            let { topic: t, message: r, opts: i } = e;
            await this.publish(t, r, i);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(rp.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1), this.relayer.events.emit(nw.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(nw.message_ack, (e) => {
              this.onPublish(e.id.toString());
            });
        }
      }
      class nj {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              let r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > 'u') {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let r = this.get(e);
              if (!this.exists(e, t)) return;
              let i = r.filter((e) => e !== t);
              if (!i.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, i);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var nU = Object.defineProperty,
        nM = Object.defineProperties,
        nk = Object.getOwnPropertyDescriptors,
        nz = Object.getOwnPropertySymbols,
        n$ = Object.prototype.hasOwnProperty,
        nq = Object.prototype.propertyIsEnumerable,
        nH = (e, t, r) => (t in e ? nU(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        nF = (e, t) => {
          for (var r in t || (t = {})) n$.call(t, r) && nH(e, r, t[r]);
          if (nz) for (var r of nz(t)) nq.call(t, r) && nH(e, r, t[r]);
          return e;
        },
        nB = (e, t) => nM(e, nk(t));
      class nV extends rE {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new nj()),
            (this.events = new v.EventEmitter()),
            (this.name = 'subscription'),
            (this.version = '0.3'),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = 'pending_sub_watch_label'),
            (this.pollingInterval = 20),
            (this.storagePrefix = nd),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized || (this.logger.trace('Initialized'), await this.restart(), this.registerEventListeners(), this.onEnable(), (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(), this.isInitialized(), this.logger.debug('Subscribing Topic'), this.logger.trace({ type: 'method', method: 'subscribe', params: { topic: e, opts: t } });
              try {
                let r = tW(t),
                  i = { topic: e, relay: r };
                this.pending.set(e, i);
                let n = await this.rpcSubscribe(e, r);
                return this.onSubscribe(n, i), this.logger.debug('Successfully Subscribed Topic'), this.logger.trace({ type: 'method', method: 'subscribe', params: { topic: e, opts: t } }), n;
              } catch (e) {
                throw (this.logger.debug('Failed to Subscribe Topic'), this.logger.error(e), e);
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(), this.isInitialized(), 'u' > typeof t?.id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) =>
              !!this.topics.includes(e) ||
              (await new Promise((t, r) => {
                let i = new ta.Watch();
                i.start(this.pendingSubscriptionWatchLabel);
                let n = setInterval(() => {
                  !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)),
                    i.elapsed(this.pendingSubscriptionWatchLabel) >= nI && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(Error('Subscription resolution timeout')));
                }, this.pollingInterval);
              }).catch(() => !1))),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0), await this.restore(), await this.reset(), (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, rd.generateChildLogger)(t, this.name)),
            (this.clientId = '');
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + '//' + this.name;
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let r = this.topicMap.get(e);
          await Promise.all(r.map(async (r) => await this.unsubscribeById(e, r, t)));
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug('Unsubscribing Topic'), this.logger.trace({ type: 'method', method: 'unsubscribe', params: { topic: e, id: t, opts: r } });
          try {
            let i = tW(r);
            await this.rpcUnsubscribe(e, t, i);
            let n = t4('USER_DISCONNECTED', `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n), this.logger.debug('Successfully Unsubscribed Topic'), this.logger.trace({ type: 'method', method: 'unsubscribe', params: { topic: e, id: t, opts: r } });
          } catch (e) {
            throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(e), e);
          }
        }
        async rpcSubscribe(e, t) {
          let r = { method: tG(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'), this.logger.trace({ type: 'payload', direction: 'outgoing', request: r });
          try {
            await await tz(this.relayer.request(r), this.subscribeTimeout);
          } catch {
            this.logger.debug('Outgoing Relay Subscribe Payload stalled'), this.relayer.events.emit(nw.connection_stalled);
          }
          return t_(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = e[0].relay,
            r = { method: tG(t.protocol).batchSubscribe, params: { topics: e.map((e) => e.topic) } };
          this.logger.debug('Outgoing Relay Payload'), this.logger.trace({ type: 'payload', direction: 'outgoing', request: r });
          try {
            return await await tz(this.relayer.request(r), this.subscribeTimeout);
          } catch {
            this.logger.debug('Outgoing Relay Payload stalled'), this.relayer.events.emit(nw.connection_stalled);
          }
        }
        rpcUnsubscribe(e, t, r) {
          let i = { method: tG(r.protocol).unsubscribe, params: { topic: e, id: t } };
          return this.logger.debug('Outgoing Relay Payload'), this.logger.trace({ type: 'payload', direction: 'outgoing', request: i }), this.relayer.request(i);
        }
        onSubscribe(e, t) {
          this.setSubscription(e, nB(nF({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, nF({}, e)), this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) || (this.logger.debug('Setting subscription'), this.logger.trace({ type: 'method', method: 'setSubscription', id: e, subscription: t }), this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, nF({}, t)), this.topicMap.set(t.topic, e), this.events.emit(nS.created, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'), this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = t8('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug('Deleting subscription'), this.logger.trace({ type: 'method', method: 'deleteSubscription', id: e, reason: t });
          let r = this.getSubscription(e);
          this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(nS.deleted, nB(nF({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(nS.sync);
        }
        async reset() {
          if (this.cached.length) {
            let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let t = 0; t < e; t++) {
              let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(nS.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = t8('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e));
            }
            (this.cached = e), this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: 'method', method: 'restore', subscriptions: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          let t = await this.rpcBatchSubscribe(e);
          t9(t) && this.onBatchSubscribe(t.map((t, r) => nB(nF({}, e[r]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (this.relayer.transportExplicitlyClosed) return;
          let e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(rp.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending();
          }),
            this.relayer.on(nw.connect, async () => {
              await this.onConnect();
            }),
            this.relayer.on(nw.disconnect, () => {
              this.onDisconnect();
            }),
            this.events.on(nS.created, async (e) => {
              let t = nS.created;
              this.logger.info(`Emitting ${t}`), this.logger.debug({ type: 'event', event: t, data: e }), await this.persist();
            }),
            this.events.on(nS.deleted, async (e) => {
              let t = nS.deleted;
              this.logger.info(`Emitting ${t}`), this.logger.debug({ type: 'event', event: t, data: e }), await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var nK = Object.defineProperty,
        nW = Object.getOwnPropertySymbols,
        nG = Object.prototype.hasOwnProperty,
        nY = Object.prototype.propertyIsEnumerable,
        nJ = (e, t, r) => (t in e ? nK(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        nX = (e, t) => {
          for (var r in t || (t = {})) nG.call(t, r) && nJ(e, r, t[r]);
          if (nW) for (var r of nW(t)) nY.call(t, r) && nJ(e, r, t[r]);
          return e;
        };
      class nZ extends rb {
        constructor(e) {
          super(e),
            (this.protocol = 'wc'),
            (this.version = 2),
            (this.events = new v.EventEmitter()),
            (this.name = 'relayer'),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.reconnecting = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ['socket hang up', 'socket stalled']),
            (this.request = async (e) => {
              this.logger.debug('Publishing Request Payload');
              try {
                return await this.toEstablishConnection(), await this.provider.request(e);
              } catch (e) {
                throw (this.logger.debug('Failed to Publish Request'), this.logger.error(e), e);
              }
            }),
            (this.core = e.core),
            (this.logger = 'u' > typeof e.logger && 'string' != typeof e.logger ? (0, rd.generateChildLogger)(e.logger, this.name) : (0, rd.pino)((0, rd.getDefaultLoggerOptions)({ level: e.logger || 'error' }))),
            (this.messages = new nR(this.logger, e.core)),
            (this.subscriber = new nV(this, this.logger)),
            (this.publisher = new nL(this, this.logger)),
            (this.relayUrl = e?.relayUrl || nb),
            (this.projectId = e.projectId),
            (this.provider = {});
        }
        async init() {
          this.logger.trace('Initialized'),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.transportOpen(), this.subscriber.init()]),
            this.registerEventListeners(),
            (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length && (this.logger.info('No topics subscribted to after init, closing transport'), await this.transportClose(), (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, r) {
          this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
        }
        async subscribe(e, t) {
          var r;
          this.isInitialized();
          let i = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || '';
          return (
            i ||
            (await Promise.all([
              new Promise((t) => {
                this.subscriber.once(nS.created, (r) => {
                  r.topic === e && t();
                });
              }),
              new Promise(async (r) => {
                (i = await this.subscriber.subscribe(e, t)), r();
              }),
            ]),
            i)
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0), this.connected && (await this.provider.disconnect(), this.events.emit(nw.transport_closed));
        }
        async transportOpen(e) {
          if (((this.transportExplicitlyClosed = !1), !this.reconnecting)) {
            (this.relayUrl = e || this.relayUrl), (this.reconnecting = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  this.initialized || e(),
                    this.subscriber.once(nS.resubscribed, () => {
                      e();
                    });
                }),
                await Promise.race([
                  new Promise(async (e, t) => {
                    await tz(this.provider.connect(), 5e3, 'socket stalled')
                      .catch((e) => t(e))
                      .then(() => e())
                      .finally(() => this.removeListener(nw.transport_closed, this.rejectTransportOpen));
                  }),
                  new Promise((e) => this.once(nw.transport_closed, this.rejectTransportOpen)),
                ]),
              ]);
            } catch (e) {
              if ((this.logger.error(e), !this.isConnectionStalled(e.message))) throw e;
              this.events.emit(nw.transport_closed);
            } finally {
              this.reconnecting = !1;
            }
          }
        }
        async restartTransport(e) {
          this.transportExplicitlyClosed ||
            this.reconnecting ||
            ((this.relayUrl = e || this.relayUrl),
            this.connected &&
              (await Promise.all([
                new Promise((e) => {
                  this.provider.once(nE.disconnect, () => {
                    e();
                  });
                }),
                this.transportClose(),
              ])),
            await this.createProvider(),
            await this.transportOpen());
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        rejectTransportOpen() {
          throw Error('Attempt to connect to relay via `transportOpen` has stalled. Retrying...');
        }
        async createProvider() {
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new r4(
            new ie(
              (function ({ protocol: e, version: t, relayUrl: i, sdkVersion: n, auth: s, projectId: o, useOnCloseEvent: a }) {
                var c;
                let u;
                let h = i.split('?'),
                  l = (function (e, t, i) {
                    let n = (function () {
                        var e;
                        if ('u' > typeof (null == r.g ? void 0 : r.g.Platform)) {
                          let { OS: e, Version: t } = r.g.Platform;
                          return [e, t].join('-');
                        }
                        let t = e
                          ? to(e)
                          : 'undefined' == typeof document && 'undefined' != typeof navigator && 'ReactNative' === navigator.product
                          ? new tr()
                          : 'undefined' != typeof navigator
                          ? to(navigator.userAgent)
                          : void 0 !== e8 && e8.version
                          ? new e7(e8.version.slice(1))
                          : null;
                        if (null === t) return 'unknown';
                        let i = t.os ? t.os.replace(' ', '').toLowerCase() : 'unknown';
                        return 'browser' === t.type ? [i, t.name, t.version].join('-') : [i, t.version].join('-');
                      })(),
                      s = (function () {
                        var e;
                        let t = tL();
                        return t === tx.browser ? [t, (null == (e = (0, tc.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':') : t;
                      })();
                    return [[e, t].join('-'), ['js', i].join('-'), n, s].join('/');
                  })(e, t, n),
                  f = ((c = h[1] || ''), (u = tA(tA({}, (u = th.parse(c))), { auth: s, ua: l, projectId: o, useOnCloseEvent: a || void 0 })), (c = th.stringify(u)));
                return h[0] + '?' + f;
              })({ sdkVersion: '2.8.4', protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          let { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: r } = e;
          return !(await this.subscriber.isSubscribed(t)) || this.messages.has(t, r);
        }
        async onProviderPayload(e) {
          if ((this.logger.debug('Incoming Relay Payload'), this.logger.trace({ type: 'payload', direction: 'incoming', payload: e }), r3(e))) {
            if (!e.method.endsWith('_subscription')) return;
            let t = e.params,
              { topic: r, message: i, publishedAt: n } = t.data,
              s = { topic: r, message: i, publishedAt: n };
            this.logger.debug('Emitting Relayer Payload'), this.logger.trace(nX({ type: 'event', event: t.id }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s);
          } else r6(e) && this.events.emit(nw.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) || (this.events.emit(nw.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = rG(e.id, !0);
          await this.provider.connection.send(t);
        }
        registerProviderListeners() {
          this.provider.on(nE.payload, (e) => this.onProviderPayload(e)),
            this.provider.on(nE.connect, () => {
              this.events.emit(nw.connect);
            }),
            this.provider.on(nE.disconnect, () => {
              this.onProviderDisconnect();
            }),
            this.provider.on(nE.error, (e) => {
              this.logger.error(e), this.events.emit(nw.error, e);
            });
        }
        registerEventListeners() {
          this.events.on(nw.connection_stalled, async () => {
            await this.restartTransport();
          });
        }
        onProviderDisconnect() {
          this.events.emit(nw.disconnect), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            setTimeout(async () => {
              await this.restartTransport();
            }, (0, ta.toMiliseconds)(nD));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          if (!this.connected) {
            if (this.connecting)
              return await new Promise((e) => {
                let t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var nQ = Object.defineProperty,
        n0 = Object.getOwnPropertySymbols,
        n1 = Object.prototype.hasOwnProperty,
        n5 = Object.prototype.propertyIsEnumerable,
        n3 = (e, t, r) => (t in e ? nQ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        n6 = (e, t) => {
          for (var r in t || (t = {})) n1.call(t, r) && n3(e, r, t[r]);
          if (n0) for (var r of n0(t)) n5.call(t, r) && n3(e, r, t[r]);
          return e;
        };
      class n2 extends rw {
        constructor(e, t, r, i = nd, n) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            (this.map = new Map()),
            (this.version = '0.3'),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = nd),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  var t;
                  this.getKey && null !== e && !re(e) ? this.map.set(this.getKey(e), e) : (null == (t = e?.proposer) ? void 0 : t.publicKey) ? this.map.set(e.id, e) : e?.topic && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug('Setting value'), this.logger.trace({ type: 'method', method: 'set', key: e, value: t }), this.map.set(e, t), await this.persist());
            }),
            (this.get = (e) => (this.isInitialized(), this.logger.debug('Getting value'), this.logger.trace({ type: 'method', method: 'get', key: e }), this.getData(e))),
            (this.getAll = (e) => (this.isInitialized(), e ? this.values.filter((t) => Object.keys(e).every((r) => ir()(t[r], e[r]))) : this.values)),
            (this.update = async (e, t) => {
              this.isInitialized(), this.logger.debug('Updating value'), this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              let r = n6(n6({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(), this.map.has(e) && (this.logger.debug('Deleting value'), this.logger.trace({ type: 'method', method: 'delete', key: e, reason: t }), this.map.delete(e), await this.persist());
            }),
            (this.logger = (0, rd.generateChildLogger)(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = n);
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + '//' + this.name;
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            let { message: t } = t8('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > 'u' || !e.length) return;
            if (this.map.size) {
              let { message: e } = t8('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e), this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: 'method', method: 'restore', value: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      class n8 {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = 'pairing'),
            (this.version = '0.3'),
            (this.events = new (m())()),
            (this.initialized = !1),
            (this.storagePrefix = nd),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), (this.initialized = !0), this.logger.trace('Initialized'));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(), (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            (this.create = async () => {
              var e;
              this.isInitialized();
              let t = tm(),
                r = await this.core.crypto.setSymKey(t),
                i = tH(ta.FIVE_MINUTES),
                n = { protocol: 'irn' },
                s =
                  ((e = { protocol: this.core.protocol, version: this.core.version, topic: r, symKey: t, relay: n }),
                  `${e.protocol}:${e.topic}@${e.version}?` +
                    th.stringify(
                      t0(
                        { symKey: e.symKey },
                        (function (e, t = '-') {
                          let r = {};
                          return (
                            Object.keys(e).forEach((i) => {
                              e[i] && (r['relay' + t + i] = e[i]);
                            }),
                            r
                          );
                        })(e.relay)
                      )
                    ));
              return await this.pairings.set(r, { topic: r, expiry: i, relay: n, active: !1 }), await this.core.relayer.subscribe(r), this.core.expirer.set(r, i), { topic: r, uri: s };
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              let {
                topic: t,
                symKey: r,
                relay: i,
              } = (function (e) {
                var t;
                let r = e.indexOf(':'),
                  i = -1 !== e.indexOf('?') ? e.indexOf('?') : void 0,
                  n = e.substring(0, r),
                  s = e.substring(r + 1, i).split('@'),
                  o = 'u' > typeof i ? e.substring(i) : '',
                  a = th.parse(o);
                return {
                  protocol: n,
                  topic: (t = s[0]).startsWith('//') ? t.substring(2) : t,
                  version: parseInt(s[1], 10),
                  symKey: a.symKey,
                  relay: (function (e, t = '-') {
                    let r = {},
                      i = 'relay' + t;
                    return (
                      Object.keys(e).forEach((t) => {
                        if (t.startsWith(i)) {
                          let n = t.replace(i, ''),
                            s = e[t];
                          r[n] = s;
                        }
                      }),
                      r
                    );
                  })(a),
                };
              })(e.uri);
              if (this.pairings.keys.includes(t)) throw Error(`Pairing already exists: ${t}`);
              if (this.core.crypto.hasKeys(t)) throw Error(`Keychain already exists: ${t}`);
              let n = tH(ta.FIVE_MINUTES),
                s = { topic: t, relay: i, expiry: n, active: !1 };
              return await this.pairings.set(t, s), await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, { relay: i }), this.core.expirer.set(t, n), e.activatePairing && (await this.activate({ topic: t })), s;
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              let t = tH(ta.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: t }), this.core.expirer.set(e, t);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, 'wc_pairingPing', {}),
                  { done: r, resolve: i, reject: n } = tk();
                this.events.once(tB('pairing_ping', e), ({ error: e }) => {
                  e ? n(e) : i();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) && (await this.sendRequest(t, 'wc_pairingDelete', t4('USER_DISCONNECTED')), await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, r) => {
              let i = rW(t, r),
                n = await this.core.crypto.encode(e, i),
                s = nO[t].req;
              return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id;
            }),
            (this.sendResult = async (e, t, r) => {
              let i = rG(e, r),
                n = await this.core.crypto.encode(t, i),
                s = await this.core.history.get(t, e),
                o = nO[s.request.method].res;
              await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
            }),
            (this.sendError = async (e, t, r) => {
              let i = rY(e, r),
                n = await this.core.crypto.encode(t, i),
                s = await this.core.history.get(t, e),
                o = nO[s.request.method] ? nO[s.request.method].res : nO.unregistered_method.res;
              await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, t4('USER_DISCONNECTED')), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)]);
            }),
            (this.cleanup = async () => {
              let e = this.pairings.getAll().filter((e) => tF(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              let { topic: t, payload: r } = e,
                i = r.method;
              if (this.pairings.keys.includes(t))
                switch (i) {
                  case 'wc_pairingPing':
                    return this.onPairingPingRequest(t, r);
                  case 'wc_pairingDelete':
                    return this.onPairingDeleteRequest(t, r);
                  default:
                    return this.onUnknownRpcMethodRequest(t, r);
                }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              if (this.pairings.keys.includes(t)) return 'wc_pairingPing' === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }), await this.sendResult(r, e, !0), this.events.emit('pairing_ping', { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                r2(t) ? this.events.emit(tB('pairing_ping', r), {}) : r8(t) && this.events.emit(tB('pairing_ping', r), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }), await this.deletePairing(e), this.events.emit('pairing_delete', { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              let { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                let t = t4('WC_METHOD_UNSUPPORTED', i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) || this.logger.error(t4('WC_METHOD_UNSUPPORTED', e));
            }),
            (this.isValidPair = (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw Error(t);
              }
              if (
                !(function (e) {
                  if (rt(e, !1))
                    try {
                      return 'u' > typeof new URL(e);
                    } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: t } = t8('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw Error(t);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!rt(e, !1)) {
                let { message: t } = t8('MISSING_OR_INVALID', `pairing topic should be a string: ${e}`);
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = t8('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
                throw Error(t);
              }
              if (tF(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = t8('EXPIRED', `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, rd.generateChildLogger)(t, this.name)),
            (this.pairings = new n2(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(nw.message, async (e) => {
            let { topic: t, message: r } = e;
            if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
            let i = await this.core.crypto.decode(t, r);
            r3(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({ topic: t, payload: i })) : r6(i) && (await this.core.history.resolve(i), this.onRelayEventResponse({ topic: t, payload: i }));
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(nC.expired, async (e) => {
            let { topic: t } = tq(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit('pairing_expire', { topic: t }));
          });
        }
      }
      class n4 extends rv {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new v.EventEmitter()),
            (this.name = 'history'),
            (this.version = '0.3'),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = nd),
            (this.init = async () => {
              this.initialized || (this.logger.trace('Initialized'), await this.restore(), this.cached.forEach((e) => this.records.set(e.id, e)), (this.cached = []), this.registerEventListeners(), (this.initialized = !0));
            }),
            (this.set = (e, t, r) => {
              if ((this.isInitialized(), this.logger.debug('Setting JSON-RPC request history record'), this.logger.trace({ type: 'method', method: 'set', topic: e, request: t, chainId: r }), this.records.has(t.id))) return;
              let i = { id: t.id, topic: e, request: { method: t.method, params: t.params || null }, chainId: r };
              this.records.set(i.id, i), this.events.emit(nP.created, i);
            }),
            (this.resolve = async (e) => {
              if ((this.isInitialized(), this.logger.debug('Updating JSON-RPC response history record'), this.logger.trace({ type: 'method', method: 'update', response: e }), !this.records.has(e.id))) return;
              let t = await this.getRecord(e.id);
              typeof t.response > 'u' && ((t.response = r8(e) ? { error: e.error } : { result: e.result }), this.records.set(t.id, t), this.events.emit(nP.updated, t));
            }),
            (this.get = async (e, t) => (this.isInitialized(), this.logger.debug('Getting record'), this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }), await this.getRecord(t))),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((r) => {
                  r.topic !== e || ('u' > typeof t && r.id !== t) || (this.records.delete(r.id), this.events.emit(nP.deleted, r));
                });
            }),
            (this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e)),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, rd.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + '//' + this.name;
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ('u' > typeof t.response) return;
              let r = { topic: t.topic, request: rW(t.request.method, t.request.params, t.id), chainId: t.chainId };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = t8('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(nP.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              let { message: e } = t8('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: 'method', method: 'restore', records: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(nP.created, (e) => {
            let t = nP.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({ type: 'event', event: t, record: e }), this.persist();
          }),
            this.events.on(nP.updated, (e) => {
              let t = nP.updated;
              this.logger.info(`Emitting ${t}`), this.logger.debug({ type: 'event', event: t, record: e }), this.persist();
            }),
            this.events.on(nP.deleted, (e) => {
              let t = nP.deleted;
              this.logger.info(`Emitting ${t}`), this.logger.debug({ type: 'event', event: t, record: e }), this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      class n9 extends rD {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new v.EventEmitter()),
            (this.name = 'expirer'),
            (this.version = '0.3'),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = nd),
            (this.init = async () => {
              this.initialized || (this.logger.trace('Initialized'), await this.restore(), this.cached.forEach((e) => this.expirations.set(e.target, e)), (this.cached = []), this.registerEventListeners(), (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              let r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(nC.created, { target: r, expiration: i });
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t), this.events.emit(nC.deleted, { target: t, expiration: r });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, rd.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + '//' + this.name;
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ('string' == typeof e) return t$('topic', e);
          if ('number' == typeof e) return t$('id', e);
          let { message: t } = t8('UNKNOWN_TYPE', `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(nC.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = t8('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e), this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: 'method', method: 'restore', expirations: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = t8('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: r } = t;
          (0, ta.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(nC.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(rp.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()),
            this.events.on(nC.created, (e) => {
              let t = nC.created;
              this.logger.info(`Emitting ${t}`), this.logger.debug({ type: 'event', event: t, data: e }), this.persist();
            }),
            this.events.on(nC.expired, (e) => {
              let t = nC.expired;
              this.logger.info(`Emitting ${t}`), this.logger.debug({ type: 'event', event: t, data: e }), this.persist();
            }),
            this.events.on(nC.deleted, (e) => {
              let t = nC.deleted;
              this.logger.info(`Emitting ${t}`), this.logger.debug({ type: 'event', event: t, data: e }), this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      class n7 extends rS {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = nA),
            (this.initialized = !1),
            (this.init = async (e) => {
              tT() || !tR() || ((this.verifyUrl = e?.verifyUrl || nx), await this.createIframe());
            }),
            (this.register = async (e) => {
              var t;
              if ((this.initialized || (await this.init()), this.iframe))
                try {
                  null == (t = this.iframe.contentWindow) || t.postMessage(e.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${e.attestationId} ${this.verifyUrl}`);
                } catch {}
            }),
            (this.resolve = async (e) => {
              var t;
              if (this.isDevEnv) return '';
              this.logger.info(`resolving attestation: ${e.attestationId}`);
              let r = this.startAbortTimer(ta.FIVE_SECONDS),
                i = await fetch(`${this.verifyUrl}/attestation/${e.attestationId}`, { signal: this.abortController.signal });
              return clearTimeout(r), 200 === i.status ? (null == (t = await i.json()) ? void 0 : t.origin) : '';
            }),
            (this.createIframe = async () => {
              try {
                await Promise.race([
                  new Promise((e, t) => {
                    if (document.getElementById(nA)) return e();
                    let r = document.createElement('iframe');
                    r.setAttribute('id', nA),
                      r.setAttribute('src', `${this.verifyUrl}/${this.projectId}`),
                      (r.style.display = 'none'),
                      r.addEventListener('load', () => {
                        (this.initialized = !0), e();
                      }),
                      r.addEventListener('error', (e) => {
                        t(e);
                      }),
                      document.body.append(r),
                      (this.iframe = r);
                  }),
                  new Promise((e) => {
                    setTimeout(() => e('iframe load timeout'), (0, ta.toMiliseconds)(ta.ONE_SECOND / 2));
                  }),
                ]);
              } catch (e) {
                this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(e);
              }
            }),
            (this.logger = (0, rd.generateChildLogger)(t, this.name)),
            (this.verifyUrl = nx),
            (this.abortController = new AbortController()),
            (this.isDevEnv = tN() && ii.env.IS_VITEST);
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        startAbortTimer(e) {
          return setTimeout(() => this.abortController.abort(), (0, ta.toMiliseconds)(e));
        }
      }
      var se = Object.defineProperty,
        st = Object.getOwnPropertySymbols,
        sr = Object.prototype.hasOwnProperty,
        si = Object.prototype.propertyIsEnumerable,
        sn = (e, t, r) => (t in e ? se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        ss = (e, t) => {
          for (var r in t || (t = {})) sr.call(t, r) && sn(e, r, t[r]);
          if (st) for (var r of st(t)) si.call(t, r) && sn(e, r, t[r]);
          return e;
        };
      class so extends ry {
        constructor(e) {
          super(e),
            (this.protocol = 'wc'),
            (this.version = 2),
            (this.name = np),
            (this.events = new v.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || nb);
          let t = 'u' > typeof e?.logger && 'string' != typeof e?.logger ? e.logger : (0, rd.pino)((0, rd.getDefaultLoggerOptions)({ level: e?.logger || ng.logger }));
          (this.logger = (0, rd.generateChildLogger)(t, this.name)),
            (this.heartbeat = new rp.HeartBeat()),
            (this.crypto = new nT(this, this.logger, e?.keychain)),
            (this.history = new n4(this, this.logger)),
            (this.expirer = new n9(this, this.logger)),
            (this.storage = null != e && e.storage ? e.storage : new rf.ZP(ss(ss({}, ny), e?.storageOptions))),
            (this.relayer = new nZ({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId })),
            (this.pairing = new n8(this, this.logger)),
            (this.verify = new n7(this.projectId || '', this.logger));
        }
        static async init(e) {
          let t = new so(e);
          await t.initialize();
          let r = await t.crypto.getClientId();
          return await t.storage.setItem('WALLETCONNECT_CLIENT_ID', r), t;
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info('Core Initialization Success');
          } catch (e) {
            throw (this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e);
          }
        }
      }
      let sa = 'client',
        sc = `wc@2:${sa}:`,
        su = { name: sa, logger: 'error', controller: !1, relayUrl: 'wss://relay.walletconnect.com' },
        sh = 'Proposal expired',
        sl = ta.SEVEN_DAYS,
        sf = {
          wc_sessionPropose: { req: { ttl: ta.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ta.FIVE_MINUTES, prompt: !1, tag: 1101 } },
          wc_sessionSettle: { req: { ttl: ta.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ta.FIVE_MINUTES, prompt: !1, tag: 1103 } },
          wc_sessionUpdate: { req: { ttl: ta.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ta.ONE_DAY, prompt: !1, tag: 1105 } },
          wc_sessionExtend: { req: { ttl: ta.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ta.ONE_DAY, prompt: !1, tag: 1107 } },
          wc_sessionRequest: { req: { ttl: ta.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ta.FIVE_MINUTES, prompt: !1, tag: 1109 } },
          wc_sessionEvent: { req: { ttl: ta.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ta.FIVE_MINUTES, prompt: !1, tag: 1111 } },
          wc_sessionDelete: { req: { ttl: ta.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ta.ONE_DAY, prompt: !1, tag: 1113 } },
          wc_sessionPing: { req: { ttl: ta.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ta.THIRTY_SECONDS, prompt: !1, tag: 1115 } },
        },
        sp = { min: ta.FIVE_MINUTES, max: ta.SEVEN_DAYS },
        sd = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest'];
      var sg = Object.defineProperty,
        sy = Object.defineProperties,
        sv = Object.getOwnPropertyDescriptors,
        sm = Object.getOwnPropertySymbols,
        s_ = Object.prototype.hasOwnProperty,
        sb = Object.prototype.propertyIsEnumerable,
        sw = (e, t, r) => (t in e ? sg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        sE = (e, t) => {
          for (var r in t || (t = {})) s_.call(t, r) && sw(e, r, t[r]);
          if (sm) for (var r of sm(t)) sb.call(t, r) && sw(e, r, t[r]);
          return e;
        },
        sD = (e, t) => sy(e, sv(t));
      class sS extends rO {
        constructor(e) {
          super(e),
            (this.name = 'engine'),
            (this.events = new (m())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [1]),
            (this.init = async () => {
              this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(sf) }), (this.initialized = !0));
            }),
            (this.connect = async (e) => {
              this.isInitialized();
              let t = sD(sE({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
              await this.isValidConnect(t);
              let { pairingTopic: r, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: s, relays: o } = t,
                a = r,
                c,
                u = !1;
              if ((a && (u = this.client.core.pairing.pairings.get(a).active), !a || !u)) {
                let { topic: e, uri: t } = await this.client.core.pairing.create();
                (a = e), (c = t);
              }
              let h = await this.client.core.crypto.generateKeyPair(),
                l = sE({ requiredNamespaces: i, optionalNamespaces: n, relays: o ?? [{ protocol: 'irn' }], proposer: { publicKey: h, metadata: this.client.metadata } }, s && { sessionProperties: s }),
                { reject: f, resolve: p, done: d } = tk(ta.FIVE_MINUTES, sh);
              if (
                (this.events.once(tB('session_connect'), async ({ error: e, session: t }) => {
                  if (e) f(e);
                  else if (t) {
                    t.self.publicKey = h;
                    let e = sD(sE({}, t), { requiredNamespaces: t.requiredNamespaces, optionalNamespaces: t.optionalNamespaces });
                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), a && (await this.client.core.pairing.updateMetadata({ topic: a, metadata: t.peer.metadata })), p(e);
                  }
                }),
                !a)
              ) {
                let { message: e } = t8('NO_MATCHING_KEY', `connect() pairing topic: ${a}`);
                throw Error(e);
              }
              let g = await this.sendRequest(a, 'wc_sessionPropose', l),
                y = tH(ta.FIVE_MINUTES);
              return await this.setProposal(g, sE({ id: g, expiry: y }, l)), { uri: c, approval: d };
            }),
            (this.pair = async (e) => (this.isInitialized(), await this.client.core.pairing.pair(e))),
            (this.approve = async (e) => {
              this.isInitialized(), await this.isValidApprove(e);
              let { id: t, relayProtocol: r, namespaces: i, sessionProperties: n } = e,
                s = this.client.proposal.get(t),
                { pairingTopic: o, proposer: a, requiredNamespaces: c, optionalNamespaces: u } = s;
              (o = o || ''),
                t7(c) ||
                  (c = (function (e, t) {
                    let r = ro(e, t);
                    if (r) throw Error(r.message);
                    let i = {};
                    for (let [t, r] of Object.entries(e)) i[t] = { methods: r.methods, events: r.events, chains: r.accounts.map((e) => `${e.split(':')[0]}:${e.split(':')[1]}`) };
                    return i;
                  })(i, 'approve()'));
              let h = await this.client.core.crypto.generateKeyPair(),
                l = a.publicKey,
                f = await this.client.core.crypto.generateSharedKey(h, l);
              o &&
                t &&
                (await this.client.core.pairing.updateMetadata({ topic: o, metadata: a.metadata }),
                await this.sendResult(t, o, { relay: { protocol: r ?? 'irn' }, responderPublicKey: h }),
                await this.client.proposal.delete(t, t4('USER_DISCONNECTED')),
                await this.client.core.pairing.activate({ topic: o }));
              let p = sE(
                { relay: { protocol: r ?? 'irn' }, namespaces: i, requiredNamespaces: c, optionalNamespaces: u, pairingTopic: o, controller: { publicKey: h, metadata: this.client.metadata }, expiry: tH(sl) },
                n && { sessionProperties: n }
              );
              await this.client.core.relayer.subscribe(f), await this.sendRequest(f, 'wc_sessionSettle', p);
              let d = sD(sE({}, p), { topic: f, pairingTopic: o, acknowledged: !1, self: p.controller, peer: { publicKey: a.publicKey, metadata: a.metadata }, controller: h });
              return await this.client.session.set(f, d), await this.setExpiry(f, tH(sl)), { topic: f, acknowledged: () => new Promise((e) => setTimeout(() => e(this.client.session.get(f)), 500)) };
            }),
            (this.reject = async (e) => {
              this.isInitialized(), await this.isValidReject(e);
              let { id: t, reason: r } = e,
                { pairingTopic: i } = this.client.proposal.get(t);
              i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, t4('USER_DISCONNECTED')));
            }),
            (this.update = async (e) => {
              this.isInitialized(), await this.isValidUpdate(e);
              let { topic: t, namespaces: r } = e,
                i = await this.sendRequest(t, 'wc_sessionUpdate', { namespaces: r }),
                { done: n, resolve: s, reject: o } = tk();
              return (
                this.events.once(tB('session_update', i), ({ error: e }) => {
                  e ? o(e) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                { acknowledged: n }
              );
            }),
            (this.extend = async (e) => {
              this.isInitialized(), await this.isValidExtend(e);
              let { topic: t } = e,
                r = await this.sendRequest(t, 'wc_sessionExtend', {}),
                { done: i, resolve: n, reject: s } = tk();
              return (
                this.events.once(tB('session_extend', r), ({ error: e }) => {
                  e ? s(e) : n();
                }),
                await this.setExpiry(t, tH(sl)),
                { acknowledged: i }
              );
            }),
            (this.request = async (e) => {
              this.isInitialized(), await this.isValidRequest(e);
              let { chainId: t, request: r, topic: i, expiry: n } = e,
                s = await this.sendRequest(i, 'wc_sessionRequest', { request: r, chainId: t }, n),
                { done: o, resolve: a, reject: c } = tk(n);
              this.events.once(tB('session_request', s), ({ error: e, result: t }) => {
                e ? c(e) : a(t);
              }),
                this.client.events.emit('session_request_sent', { topic: i, request: r, chainId: t, id: s });
              let u = await this.client.core.storage.getItem('WALLETCONNECT_DEEPLINK_CHOICE');
              return tK({ id: s, topic: i, wcDeepLink: u }), await o();
            }),
            (this.respond = async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: r } = e,
                { id: i } = r;
              r2(r) ? await this.sendResult(i, t, r.result) : r8(r) && (await this.sendError(i, t, r.error)), this.deletePendingSessionRequest(e.response.id, { message: 'fulfilled', code: 0 });
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = await this.sendRequest(t, 'wc_sessionPing', {}),
                  { done: r, resolve: i, reject: n } = tk();
                this.events.once(tB('session_ping', e), ({ error: e }) => {
                  e ? n(e) : i();
                }),
                  await r();
              } else this.client.core.pairing.pairings.keys.includes(t) && (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              this.isInitialized(), await this.isValidEmit(e);
              let { topic: t, event: r, chainId: i } = e;
              await this.sendRequest(t, 'wc_sessionEvent', { event: r, chainId: i });
            }),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e;
                let r = rK().toString(),
                  i = (t) => {
                    t?.id.toString() === r && (this.client.core.relayer.events.removeListener(nw.message_ack, i), e());
                  };
                await Promise.all([
                  new Promise((t) => {
                    (e = t), this.client.core.relayer.on(nw.message_ack, i);
                  }),
                  this.sendRequest(t, 'wc_sessionDelete', t4('USER_DISCONNECTED'), void 0, r),
                ]),
                  await this.deleteSession(t);
              } else await this.client.core.pairing.disconnect({ topic: t });
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  let { requiredNamespaces: r } = t,
                    i = Object.keys(e.namespaces),
                    n = Object.keys(r),
                    s = !0;
                  return (
                    !!tj(n, i) &&
                    (i.forEach((t) => {
                      let { accounts: i, methods: n, events: o } = e.namespaces[t],
                        a = t1(i),
                        c = r[t];
                      (tj(tp(t, c), a) && tj(c.methods, n) && tj(c.events, o)) || (s = !1);
                    }),
                    s)
                  );
                })(t, e)
              )
            )),
            (this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll())),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings.getAll().filter((r) => {
                      var i, n;
                      return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic;
                    });
                  if (0 === r.length) return;
                  this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),
                    await Promise.all(r.map((e) => this.client.core.pairing.disconnect({ topic: e.topic }))),
                    this.client.logger.info('Duplicate pairings clean up finished');
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e, t) => {
              let { self: r } = this.client.session.get(e);
              await this.client.core.relayer.unsubscribe(e),
                this.client.session.delete(e, t4('USER_DISCONNECTED')),
                this.client.core.crypto.keychain.has(r.publicKey) && (await this.client.core.crypto.deleteKeyPair(r.publicKey)),
                this.client.core.crypto.keychain.has(e) && (await this.client.core.crypto.deleteSymKey(e)),
                t || this.client.core.expirer.del(e);
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([this.client.proposal.delete(e, t4('USER_DISCONNECTED')), t ? Promise.resolve() : this.client.core.expirer.del(e)]);
            }),
            (this.deletePendingSessionRequest = async (e, t, r = !1) => {
              await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) && (await this.client.session.update(e, { expiry: t })), this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry);
            }),
            (this.setPendingSessionRequest = async (e) => {
              let t = sf.wc_sessionRequest.req.ttl,
                { id: r, topic: i, params: n } = e;
              await this.client.pendingRequest.set(r, { id: r, topic: i, params: n }), t && this.client.core.expirer.set(r, tH(t));
            }),
            (this.sendRequest = async (e, t, r, i, n) => {
              let s = rW(t, r);
              if (tR() && sd.includes(t)) {
                let e = t_(JSON.stringify(s));
                await this.client.core.verify.register({ attestationId: e });
              }
              let o = await this.client.core.crypto.encode(e, s),
                a = sf[t].req;
              return i && (a.ttl = i), n && (a.id = n), this.client.core.history.set(e, s), this.client.core.relayer.publish(e, o, a), s.id;
            }),
            (this.sendResult = async (e, t, r) => {
              let i = rG(e, r),
                n = await this.client.core.crypto.encode(t, i),
                s = await this.client.core.history.get(t, e),
                o = sf[s.request.method].res;
              this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i);
            }),
            (this.sendError = async (e, t, r) => {
              let i = rY(e, r),
                n = await this.client.core.crypto.encode(t, i),
                s = await this.client.core.history.get(t, e),
                o = sf[s.request.method].res;
              this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i);
            }),
            (this.cleanup = async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                tF(t.expiry) && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  tF(e.expiry) && t.push(e.id);
                }),
                await Promise.all([...e.map((e) => this.deleteSession(e)), ...t.map((e) => this.deleteProposal(e))]);
            }),
            (this.onRelayEventRequest = (e) => {
              let { topic: t, payload: r } = e,
                i = r.method;
              switch (i) {
                case 'wc_sessionPropose':
                  return this.onSessionProposeRequest(t, r);
                case 'wc_sessionSettle':
                  return this.onSessionSettleRequest(t, r);
                case 'wc_sessionUpdate':
                  return this.onSessionUpdateRequest(t, r);
                case 'wc_sessionExtend':
                  return this.onSessionExtendRequest(t, r);
                case 'wc_sessionPing':
                  return this.onSessionPingRequest(t, r);
                case 'wc_sessionDelete':
                  return this.onSessionDeleteRequest(t, r);
                case 'wc_sessionRequest':
                  return this.onSessionRequest(t, r);
                case 'wc_sessionEvent':
                  return this.onSessionEventRequest(t, r);
                default:
                  return this.client.logger.info(`Unsupported request method ${i}`);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.client.core.history.get(t, r.id)).request.method;
              switch (i) {
                case 'wc_sessionPropose':
                  return this.onSessionProposeResponse(t, r);
                case 'wc_sessionSettle':
                  return this.onSessionSettleResponse(t, r);
                case 'wc_sessionUpdate':
                  return this.onSessionUpdateResponse(t, r);
                case 'wc_sessionExtend':
                  return this.onSessionExtendResponse(t, r);
                case 'wc_sessionPing':
                  return this.onSessionPingResponse(t, r);
                case 'wc_sessionRequest':
                  return this.onSessionRequestResponse(t, r);
                default:
                  return this.client.logger.info(`Unsupported response method ${i}`);
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              let { topic: t } = e,
                { message: r } = t8('MISSING_OR_INVALID', `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
              throw Error(r);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              let { params: r, id: i } = t;
              try {
                this.isValidConnect(sE({}, t.params));
                let n = tH(ta.FIVE_MINUTES),
                  s = sE({ id: i, pairingTopic: e, expiry: n }, r);
                await this.setProposal(i, s);
                let o = t_(JSON.stringify(t)),
                  a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit('session_proposal', { id: i, params: s, verifyContext: a });
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              let { id: r } = t;
              if (r2(t)) {
                let { result: i } = t;
                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', result: i });
                let n = this.client.proposal.get(r);
                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', proposal: n });
                let s = n.proposer.publicKey;
                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', selfPublicKey: s });
                let o = i.responderPublicKey;
                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', peerPublicKey: o });
                let a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', sessionTopic: a });
                let c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', subscriptionId: c }), await this.client.core.pairing.activate({ topic: e });
              } else r8(t) && (await this.client.proposal.delete(r, t4('USER_DISCONNECTED')), this.events.emit(tB('session_connect'), { error: t.error }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                let { relay: r, controller: n, expiry: s, namespaces: o, requiredNamespaces: a, optionalNamespaces: c, sessionProperties: u, pairingTopic: h } = t.params,
                  l = sE(
                    {
                      topic: e,
                      relay: r,
                      expiry: s,
                      namespaces: o,
                      acknowledged: !0,
                      pairingTopic: h,
                      requiredNamespaces: a,
                      optionalNamespaces: c,
                      controller: n.publicKey,
                      self: { publicKey: '', metadata: this.client.metadata },
                      peer: { publicKey: n.publicKey, metadata: n.metadata },
                    },
                    u && { sessionProperties: u }
                  );
                await this.sendResult(t.id, e, !0), this.events.emit(tB('session_connect'), { session: l }), this.cleanupDuplicatePairings(l);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              let { id: r } = t;
              r2(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }), this.events.emit(tB('session_approve', r), {}))
                : r8(t) && (await this.client.session.delete(e, t4('USER_DISCONNECTED')), this.events.emit(tB('session_approve', r), { error: t.error }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              let { params: r, id: i } = t;
              try {
                this.isValidUpdate(sE({ topic: e }, r)), await this.client.session.update(e, { namespaces: r.namespaces }), await this.sendResult(i, e, !0), this.client.events.emit('session_update', { id: i, topic: e, params: r });
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionUpdateResponse = (e, t) => {
              let { id: r } = t;
              r2(t) ? this.events.emit(tB('session_update', r), {}) : r8(t) && this.events.emit(tB('session_update', r), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidExtend({ topic: e }), await this.setExpiry(e, tH(sl)), await this.sendResult(r, e, !0), this.client.events.emit('session_extend', { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              let { id: r } = t;
              r2(t) ? this.events.emit(tB('session_extend', r), {}) : r8(t) && this.events.emit(tB('session_extend', r), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }), await this.sendResult(r, e, !0), this.client.events.emit('session_ping', { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                r2(t) ? this.events.emit(tB('session_ping', r), {}) : r8(t) && this.events.emit(tB('session_ping', r), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(nw.publish, async () => {
                        t(await this.deleteSession(e));
                      });
                    }),
                    this.sendResult(r, e, !0),
                  ]),
                  this.client.events.emit('session_delete', { id: r, topic: e });
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidRequest(sE({ topic: e }, i)), await this.setPendingSessionRequest({ id: r, topic: e, params: i });
                let n = t_(JSON.stringify(t)),
                  s = this.client.session.get(e),
                  o = await this.getVerifyContext(n, s.peer.metadata);
                this.client.events.emit('session_request', { id: r, topic: e, params: i, verifyContext: o });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              let { id: r } = t;
              r2(t) ? this.events.emit(tB('session_request', r), { result: t.result }) : r8(t) && this.events.emit(tB('session_request', r), { error: t.error });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidEmit(sE({ topic: e }, i)), this.client.events.emit('session_event', { id: r, topic: e, params: i });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.isValidConnect = async (e) => {
              let t;
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `connect() params: ${JSON.stringify(e)}`);
                throw Error(t);
              }
              let { pairingTopic: r, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: s, relays: o } = e;
              if (
                (re(r) || (await this.isValidPairingTopic(r)),
                (t = !1),
                o
                  ? o &&
                    t9(o) &&
                    o.length &&
                    o.forEach((e) => {
                      t = ra(e);
                    })
                  : (t = !0),
                !t)
              ) {
                let { message: e } = t8('MISSING_OR_INVALID', `connect() relays: ${o}`);
                throw Error(e);
              }
              re(i) || 0 === t7(i) || this.validateNamespaces(i, 'requiredNamespaces'), re(n) || 0 === t7(n) || this.validateNamespaces(n, 'optionalNamespaces'), re(s) || this.validateSessionProps(s, 'sessionProperties');
            }),
            (this.validateNamespaces = (e, t) => {
              let r = (function (e, t, r) {
                let i = null;
                if (e && t7(e)) {
                  let r;
                  let n = rs(e, t);
                  n && (i = n);
                  let s =
                    ((r = null),
                    Object.entries(e).forEach(([e, i]) => {
                      var n, s;
                      let o;
                      if (r) return;
                      let a =
                        ((n = tp(e, i)),
                        (s = `${t} requiredNamespace`),
                        (o = null),
                        t9(n)
                          ? n.forEach((t) => {
                              !o && ((ri(t) && t.includes(e)) || (o = t4('UNSUPPORTED_CHAINS', `${s}, chain ${t} should be a string and conform to "namespace:chainId" format`)));
                            })
                          : (o = t4('UNSUPPORTED_CHAINS', `${s}, chains ${n} should be an array of strings conforming to "namespace:chainId" format`)),
                        o);
                      a && (r = a);
                    }),
                    r);
                  s && (i = s);
                } else i = t8('MISSING_OR_INVALID', `${t}, ${r} should be an object with data`);
                return i;
              })(e, 'connect()', t);
              if (r) throw Error(r.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!rc(e)) throw Error(t8('MISSING_OR_INVALID', `approve() params: ${e}`).message);
              let { id: t, namespaces: r, relayProtocol: i, sessionProperties: n } = e;
              await this.isValidProposalId(t);
              let s = this.client.proposal.get(t),
                o = ro(r, 'approve()');
              if (o) throw Error(o.message);
              let a = rh(s.requiredNamespaces, r, 'approve()');
              if (a) throw Error(a.message);
              if (!rt(i, !0)) {
                let { message: e } = t8('MISSING_OR_INVALID', `approve() relayProtocol: ${i}`);
                throw Error(e);
              }
              re(n) || this.validateSessionProps(n, 'sessionProperties');
            }),
            (this.isValidReject = async (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `reject() params: ${e}`);
                throw Error(t);
              }
              let { id: t, reason: r } = e;
              if ((await this.isValidProposalId(t), !r || 'object' != typeof r || !r.code || !rr(r.code, !1) || !r.message || !rt(r.message, !1))) {
                let { message: e } = t8('MISSING_OR_INVALID', `reject() reason: ${JSON.stringify(r)}`);
                throw Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              let t;
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `onSessionSettleRequest() params: ${e}`);
                throw Error(t);
              }
              let { relay: r, controller: i, namespaces: n, expiry: s } = e;
              if (!ra(r)) {
                let { message: e } = t8('MISSING_OR_INVALID', 'onSessionSettleRequest() relay protocol should be a string');
                throw Error(e);
              }
              let o = ((t = null), rt(i?.publicKey, !1) || (t = t8('MISSING_OR_INVALID', 'onSessionSettleRequest() controller public key should be a string')), t);
              if (o) throw Error(o.message);
              let a = ro(n, 'onSessionSettleRequest()');
              if (a) throw Error(a.message);
              if (tF(s)) {
                let { message: e } = t8('EXPIRED', 'onSessionSettleRequest()');
                throw Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `update() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, namespaces: r } = e;
              await this.isValidSessionTopic(t);
              let i = this.client.session.get(t),
                n = ro(r, 'update()');
              if (n) throw Error(n.message);
              let s = rh(i.requiredNamespaces, r, 'update()');
              if (s) throw Error(s.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `extend() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              var t;
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `request() params: ${e}`);
                throw Error(t);
              }
              let { topic: r, request: i, chainId: n, expiry: s } = e;
              await this.isValidSessionTopic(r);
              let { namespaces: o } = this.client.session.get(r);
              if (!ru(o, n)) {
                let { message: e } = t8('MISSING_OR_INVALID', `request() chainId: ${n}`);
                throw Error(e);
              }
              if (re(i) || !rt(i.method, !1)) {
                let { message: e } = t8('MISSING_OR_INVALID', `request() ${JSON.stringify(i)}`);
                throw Error(e);
              }
              if (
                !(
                  rt((t = i.method), !1) &&
                  (function (e, t) {
                    let r = [];
                    return (
                      Object.values(e).forEach((e) => {
                        t1(e.accounts).includes(t) && r.push(...e.methods);
                      }),
                      r
                    );
                  })(o, n).includes(t)
                )
              ) {
                let { message: e } = t8('MISSING_OR_INVALID', `request() method: ${i.method}`);
                throw Error(e);
              }
              if (s && (!rr(s, !1) || !(s <= sp.max) || !(s >= sp.min))) {
                let { message: e } = t8('MISSING_OR_INVALID', `request() expiry: ${s}. Expiry must be a number (in seconds) between ${sp.min} and ${sp.max}`);
                throw Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `respond() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, response: r } = e;
              if ((await this.isValidSessionTopic(t), re(r) || (re(r.result) && re(r.error)) || !rr(r.id, !1) || !rt(r.jsonrpc, !1))) {
                let { message: e } = t8('MISSING_OR_INVALID', `respond() response: ${JSON.stringify(r)}`);
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              var t;
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `emit() params: ${e}`);
                throw Error(t);
              }
              let { topic: r, event: i, chainId: n } = e;
              await this.isValidSessionTopic(r);
              let { namespaces: s } = this.client.session.get(r);
              if (!ru(s, n)) {
                let { message: e } = t8('MISSING_OR_INVALID', `emit() chainId: ${n}`);
                throw Error(e);
              }
              if (re(i) || !rt(i.name, !1)) {
                let { message: e } = t8('MISSING_OR_INVALID', `emit() event: ${JSON.stringify(i)}`);
                throw Error(e);
              }
              if (
                !(
                  rt((t = i.name), !1) &&
                  (function (e, t) {
                    let r = [];
                    return (
                      Object.values(e).forEach((e) => {
                        t1(e.accounts).includes(t) && r.push(...e.events);
                      }),
                      r
                    );
                  })(s, n).includes(t)
                )
              ) {
                let { message: e } = t8('MISSING_OR_INVALID', `emit() event: ${JSON.stringify(i)}`);
                throw Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!rc(e)) {
                let { message: t } = t8('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              let r = { verified: { verifyUrl: t.verifyUrl || '', validation: 'UNKNOWN', origin: t.url || '' } };
              try {
                let i = await this.client.core.verify.resolve({ attestationId: e, verifyUrl: t.verifyUrl });
                i && ((r.verified.origin = i), (r.verified.validation = i === t.url ? 'VALID' : 'INVALID'));
              } catch (e) {
                this.client.logger.error(e);
              }
              return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r;
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!rt(e, !1)) {
                  let { message: r } = t8('MISSING_OR_INVALID', `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                  throw Error(r);
                }
              });
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t8('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(nw.message, async (e) => {
            let { topic: t, message: r } = e;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
            let i = await this.client.core.crypto.decode(t, r);
            r3(i)
              ? (this.client.core.history.set(t, i), this.onRelayEventRequest({ topic: t, payload: i }))
              : r6(i)
              ? (await this.client.core.history.resolve(i), this.onRelayEventResponse({ topic: t, payload: i }))
              : this.onRelayEventUnknownPayload({ topic: t, payload: i });
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(nC.expired, async (e) => {
            let { topic: t, id: r } = tq(e.target);
            if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, t8('EXPIRED'), !0);
            t
              ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit('session_expire', { topic: t }))
              : r && (await this.deleteProposal(r, !0), this.client.events.emit('proposal_expire', { id: r }));
          });
        }
        isValidPairingTopic(e) {
          if (!rt(e, !1)) {
            let { message: t } = t8('MISSING_OR_INVALID', `pairing topic should be a string: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = t8('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
            throw Error(t);
          }
          if (tF(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = t8('EXPIRED', `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!rt(e, !1)) {
            let { message: t } = t8('MISSING_OR_INVALID', `session topic should be a string: ${e}`);
            throw Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            let { message: t } = t8('NO_MATCHING_KEY', `session topic doesn't exist: ${e}`);
            throw Error(t);
          }
          if (tF(this.client.session.get(e).expiry)) {
            await this.deleteSession(e);
            let { message: t } = t8('EXPIRED', `session topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
          else if (rt(e, !1)) {
            let { message: t } = t8('NO_MATCHING_KEY', `session or pairing topic doesn't exist: ${e}`);
            throw Error(t);
          } else {
            let { message: t } = t8('MISSING_OR_INVALID', `session or pairing topic should be a string: ${e}`);
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ('number' != typeof e) {
            let { message: t } = t8('MISSING_OR_INVALID', `proposal id should be a number: ${e}`);
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = t8('NO_MATCHING_KEY', `proposal id doesn't exist: ${e}`);
            throw Error(t);
          }
          if (tF(this.client.proposal.get(e).expiry)) {
            await this.deleteProposal(e);
            let { message: t } = t8('EXPIRED', `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class sI extends n2 {
        constructor(e, t) {
          super(e, t, 'proposal', sc), (this.core = e), (this.logger = t);
        }
      }
      class sO extends n2 {
        constructor(e, t) {
          super(e, t, 'session', sc), (this.core = e), (this.logger = t);
        }
      }
      class sP extends n2 {
        constructor(e, t) {
          super(e, t, 'request', sc, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      class sC extends rI {
        constructor(e) {
          super(e),
            (this.protocol = 'wc'),
            (this.version = 2),
            (this.name = su.name),
            (this.events = new v.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) => this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || su.name),
            (this.metadata = e?.metadata || (0, tu.D)() || { name: '', description: '', url: '', icons: [''] });
          let t = 'u' > typeof e?.logger && 'string' != typeof e?.logger ? e.logger : (0, rd.pino)((0, rd.getDefaultLoggerOptions)({ level: e?.logger || su.logger }));
          (this.core = e?.core || new so(e)),
            (this.logger = (0, rd.generateChildLogger)(t, this.name)),
            (this.session = new sO(this.core, this.logger)),
            (this.proposal = new sI(this.core, this.logger)),
            (this.pendingRequest = new sP(this.core, this.logger)),
            (this.engine = new sS(this));
        }
        static async init(e) {
          let t = new sC(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, rd.getLoggerContext)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info('SignClient Initialization Success');
          } catch (e) {
            throw (this.logger.info('SignClient Initialization Failure'), this.logger.error(e.message), e);
          }
        }
      }
      var sA = r(5674),
        sx = r.n(sA);
      let sN = { headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, method: 'POST' };
      class sT {
        constructor(e, t = !1) {
          if (((this.url = e), (this.disableProviderPing = t), (this.events = new v.EventEmitter()), (this.isAvailable = !1), (this.registering = !1), !r0(e))) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw Error('Connection already closed');
          this.onClose();
        }
        async send(e, t) {
          this.isAvailable || (await this.register());
          try {
            let t = rx(e),
              r = await sx()(this.url, Object.assign(Object.assign({}, sN), { body: t })),
              i = await r.json();
            this.onPayload({ data: i });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!r0(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount('register_error') >= e || this.events.listenerCount('open') >= e) && this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once('register_error', (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once('open', () => {
                    if ((this.resetMaxListeners(), void 0 === this.isAvailable)) return t(Error('HTTP connection is missing or invalid'));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let t = rx({ id: 1, jsonrpc: '2.0', method: 'test', params: [] });
              await sx()(e, Object.assign(Object.assign({}, sN), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            let e = this.parseError(t);
            throw (this.events.emit('register_error', e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0), (this.registering = !1), this.events.emit('open');
        }
        onClose() {
          (this.isAvailable = !1), (this.registering = !1), this.events.emit('close');
        }
        onPayload(e) {
          if (void 0 === e.data) return;
          let t = 'string' == typeof e.data ? rA(e.data) : e.data;
          this.events.emit('payload', t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = r.message || r.toString(),
            n = rY(e, i);
          this.events.emit('payload', n);
        }
        parseError(e, t = this.url) {
          return rF(e, t, 'HTTP');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      let sR = 'error',
        sL = 'wc@2:universal_provider:',
        sj = { DEFAULT_CHAIN_CHANGED: 'default_chain_changed' };
      var sU = 'u' > typeof globalThis ? globalThis : 'u' > typeof window ? window : 'u' > typeof r.g ? r.g : 'u' > typeof self ? self : {},
        sM = { exports: {} };
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ !(function (e, t) {
        (function () {
          var r,
            i = 'Expected a function',
            n = '__lodash_hash_undefined__',
            s = '__lodash_placeholder__',
            o = 1 / 0,
            a = 0 / 0,
            c = [
              ['ary', 128],
              ['bind', 1],
              ['bindKey', 2],
              ['curry', 8],
              ['curryRight', 16],
              ['flip', 512],
              ['partial', 32],
              ['partialRight', 64],
              ['rearg', 256],
            ],
            u = '[object Arguments]',
            h = '[object Array]',
            l = '[object Boolean]',
            f = '[object Date]',
            p = '[object Error]',
            d = '[object Function]',
            g = '[object GeneratorFunction]',
            y = '[object Map]',
            v = '[object Number]',
            m = '[object Object]',
            _ = '[object Promise]',
            b = '[object RegExp]',
            w = '[object Set]',
            E = '[object String]',
            D = '[object Symbol]',
            S = '[object WeakMap]',
            I = '[object ArrayBuffer]',
            O = '[object DataView]',
            P = '[object Float32Array]',
            C = '[object Float64Array]',
            A = '[object Int8Array]',
            x = '[object Int16Array]',
            N = '[object Int32Array]',
            T = '[object Uint8Array]',
            R = '[object Uint8ClampedArray]',
            L = '[object Uint16Array]',
            j = '[object Uint32Array]',
            U = /\b__p \+= '';/g,
            M = /\b(__p \+=) '' \+/g,
            k = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            z = /&(?:amp|lt|gt|quot|#39);/g,
            $ = /[&<>"']/g,
            q = RegExp(z.source),
            H = RegExp($.source),
            F = /<%-([\s\S]+?)%>/g,
            B = /<%([\s\S]+?)%>/g,
            V = /<%=([\s\S]+?)%>/g,
            K = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            W = /^\w*$/,
            G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Y = /[\\^$.*+?()[\]{}|]/g,
            J = RegExp(Y.source),
            X = /^\s+/,
            Z = /\s/,
            Q = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
            et = /,? & /,
            er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ei = /[()=,{}\[\]\/\s]/,
            en = /\\(\\)?/g,
            es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            eo = /\w*$/,
            ea = /^[-+]0x[0-9a-f]+$/i,
            ec = /^0b[01]+$/i,
            eu = /^\[object .+?Constructor\]$/,
            eh = /^0o[0-7]+$/i,
            el = /^(?:0|[1-9]\d*)$/,
            ef = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            ep = /($^)/,
            ed = /['\n\r\u2028\u2029\\]/g,
            eg = '\ud800-\udfff',
            ey = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
            ev = '\\u2700-\\u27bf',
            em = 'a-z\\xdf-\\xf6\\xf8-\\xff',
            e_ = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
            eb = '\\ufe0e\\ufe0f',
            ew =
              '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
            eE = "['’]",
            eD = '[' + ew + ']',
            eS = '[' + ey + ']',
            eI = '[' + em + ']',
            eO = '[^' + eg + ew + '\\d+' + ev + em + e_ + ']',
            eP = '\ud83c[\udffb-\udfff]',
            eC = '[^' + eg + ']',
            eA = '(?:\ud83c[\udde6-\uddff]){2}',
            ex = '[\ud800-\udbff][\udc00-\udfff]',
            eN = '[' + e_ + ']',
            eT = '\\u200d',
            eR = '(?:' + eI + '|' + eO + ')',
            eL = '(?:' + eE + '(?:d|ll|m|re|s|t|ve))?',
            ej = '(?:' + eE + '(?:D|LL|M|RE|S|T|VE))?',
            eU = '(?:' + eS + '|' + eP + ')?',
            eM = '[' + eb + ']?',
            ek = '(?:' + eT + '(?:' + [eC, eA, ex].join('|') + ')' + eM + eU + ')*',
            ez = eM + eU + ek,
            e$ = '(?:' + ['[' + ev + ']', eA, ex].join('|') + ')' + ez,
            eq = '(?:' + [eC + eS + '?', eS, eA, ex, '[' + eg + ']'].join('|') + ')',
            eH = RegExp(eE, 'g'),
            eF = RegExp(eS, 'g'),
            eB = RegExp(eP + '(?=' + eP + ')|' + eq + ez, 'g'),
            eV = RegExp(
              [
                eN + '?' + eI + '+' + eL + '(?=' + [eD, eN, '$'].join('|') + ')',
                '(?:' + eN + '|' + eO + ')+' + ej + '(?=' + [eD, eN + eR, '$'].join('|') + ')',
                eN + '?' + eR + '+' + eL,
                eN + '+' + ej,
                '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
                '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
                '\\d+',
                e$,
              ].join('|'),
              'g'
            ),
            eK = RegExp('[' + eT + eg + ey + eb + ']'),
            eW = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            eG = [
              'Array',
              'Buffer',
              'DataView',
              'Date',
              'Error',
              'Float32Array',
              'Float64Array',
              'Function',
              'Int8Array',
              'Int16Array',
              'Int32Array',
              'Map',
              'Math',
              'Object',
              'Promise',
              'RegExp',
              'Set',
              'String',
              'Symbol',
              'TypeError',
              'Uint8Array',
              'Uint8ClampedArray',
              'Uint16Array',
              'Uint32Array',
              'WeakMap',
              '_',
              'clearTimeout',
              'isFinite',
              'parseInt',
              'setTimeout',
            ],
            eY = -1,
            eJ = {};
          (eJ[P] = eJ[C] = eJ[A] = eJ[x] = eJ[N] = eJ[T] = eJ[R] = eJ[L] = eJ[j] = !0), (eJ[u] = eJ[h] = eJ[I] = eJ[l] = eJ[O] = eJ[f] = eJ[p] = eJ[d] = eJ[y] = eJ[v] = eJ[m] = eJ[b] = eJ[w] = eJ[E] = eJ[S] = !1);
          var eX = {};
          (eX[u] = eX[h] = eX[I] = eX[O] = eX[l] = eX[f] = eX[P] = eX[C] = eX[A] = eX[x] = eX[N] = eX[y] = eX[v] = eX[m] = eX[b] = eX[w] = eX[E] = eX[D] = eX[T] = eX[R] = eX[L] = eX[j] = !0), (eX[p] = eX[d] = eX[S] = !1);
          var eZ = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
            eQ = parseFloat,
            e0 = parseInt,
            e1 = 'object' == typeof sU && sU && sU.Object === Object && sU,
            e5 = 'object' == typeof self && self && self.Object === Object && self,
            e3 = e1 || e5 || Function('return this')(),
            e6 = t && !t.nodeType && t,
            e2 = e6 && e && !e.nodeType && e,
            e8 = e2 && e2.exports === e6,
            e4 = e8 && e1.process,
            e9 = (function () {
              try {
                return (e2 && e2.require && e2.require('util').types) || (e4 && e4.binding && e4.binding('util'));
              } catch {}
            })(),
            e7 = e9 && e9.isArrayBuffer,
            te = e9 && e9.isDate,
            tt = e9 && e9.isMap,
            tr = e9 && e9.isRegExp,
            ti = e9 && e9.isSet,
            tn = e9 && e9.isTypedArray;
          function ts(e, t, r) {
            switch (r.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, r[0]);
              case 2:
                return e.call(t, r[0], r[1]);
              case 3:
                return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
          }
          function to(e, t, r, i) {
            for (var n = -1, s = null == e ? 0 : e.length; ++n < s; ) {
              var o = e[n];
              t(i, o, r(o), e);
            }
            return i;
          }
          function ta(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e); );
            return e;
          }
          function tc(e, t) {
            for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e); );
            return e;
          }
          function tu(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) if (!t(e[r], r, e)) return !1;
            return !0;
          }
          function th(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i; ) {
              var o = e[r];
              t(o, r, e) && (s[n++] = o);
            }
            return s;
          }
          function tl(e, t) {
            return !!(null == e ? 0 : e.length) && tw(e, t, 0) > -1;
          }
          function tf(e, t, r) {
            for (var i = -1, n = null == e ? 0 : e.length; ++i < n; ) if (r(t, e[i])) return !0;
            return !1;
          }
          function tp(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i; ) n[r] = t(e[r], r, e);
            return n;
          }
          function td(e, t) {
            for (var r = -1, i = t.length, n = e.length; ++r < i; ) e[n + r] = t[r];
            return e;
          }
          function tg(e, t, r, i) {
            var n = -1,
              s = null == e ? 0 : e.length;
            for (i && s && (r = e[++n]); ++n < s; ) r = t(r, e[n], n, e);
            return r;
          }
          function ty(e, t, r, i) {
            var n = null == e ? 0 : e.length;
            for (i && n && (r = e[--n]); n--; ) r = t(r, e[n], n, e);
            return r;
          }
          function tv(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) if (t(e[r], r, e)) return !0;
            return !1;
          }
          var tm = tI('length');
          function t_(e, t, r) {
            var i;
            return (
              r(e, function (e, r, n) {
                if (t(e, r, n)) return (i = r), !1;
              }),
              i
            );
          }
          function tb(e, t, r, i) {
            for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n; ) if (t(e[s], s, e)) return s;
            return -1;
          }
          function tw(e, t, r) {
            return t == t
              ? (function (e, t, r) {
                  for (var i = r - 1, n = e.length; ++i < n; ) if (e[i] === t) return i;
                  return -1;
                })(e, t, r)
              : tb(e, tD, r);
          }
          function tE(e, t, r, i) {
            for (var n = r - 1, s = e.length; ++n < s; ) if (i(e[n], t)) return n;
            return -1;
          }
          function tD(e) {
            return e != e;
          }
          function tS(e, t) {
            var r = null == e ? 0 : e.length;
            return r ? tC(e, t) / r : a;
          }
          function tI(e) {
            return function (t) {
              return null == t ? r : t[e];
            };
          }
          function tO(e) {
            return function (t) {
              return null == e ? r : e[t];
            };
          }
          function tP(e, t, r, i, n) {
            return (
              n(e, function (e, n, s) {
                r = i ? ((i = !1), e) : t(r, e, n, s);
              }),
              r
            );
          }
          function tC(e, t) {
            for (var i, n = -1, s = e.length; ++n < s; ) {
              var o = t(e[n]);
              o !== r && (i = i === r ? o : i + o);
            }
            return i;
          }
          function tA(e, t) {
            for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
            return i;
          }
          function tx(e) {
            return e && e.slice(0, tK(e) + 1).replace(X, '');
          }
          function tN(e) {
            return function (t) {
              return e(t);
            };
          }
          function tT(e, t) {
            return tp(t, function (t) {
              return e[t];
            });
          }
          function tR(e, t) {
            return e.has(t);
          }
          function tL(e, t) {
            for (var r = -1, i = e.length; ++r < i && tw(t, e[r], 0) > -1; );
            return r;
          }
          function tj(e, t) {
            for (var r = e.length; r-- && tw(t, e[r], 0) > -1; );
            return r;
          }
          var tU = tO({
              À: 'A',
              Á: 'A',
              Â: 'A',
              Ã: 'A',
              Ä: 'A',
              Å: 'A',
              à: 'a',
              á: 'a',
              â: 'a',
              ã: 'a',
              ä: 'a',
              å: 'a',
              Ç: 'C',
              ç: 'c',
              Ð: 'D',
              ð: 'd',
              È: 'E',
              É: 'E',
              Ê: 'E',
              Ë: 'E',
              è: 'e',
              é: 'e',
              ê: 'e',
              ë: 'e',
              Ì: 'I',
              Í: 'I',
              Î: 'I',
              Ï: 'I',
              ì: 'i',
              í: 'i',
              î: 'i',
              ï: 'i',
              Ñ: 'N',
              ñ: 'n',
              Ò: 'O',
              Ó: 'O',
              Ô: 'O',
              Õ: 'O',
              Ö: 'O',
              Ø: 'O',
              ò: 'o',
              ó: 'o',
              ô: 'o',
              õ: 'o',
              ö: 'o',
              ø: 'o',
              Ù: 'U',
              Ú: 'U',
              Û: 'U',
              Ü: 'U',
              ù: 'u',
              ú: 'u',
              û: 'u',
              ü: 'u',
              Ý: 'Y',
              ý: 'y',
              ÿ: 'y',
              Æ: 'Ae',
              æ: 'ae',
              Þ: 'Th',
              þ: 'th',
              ß: 'ss',
              Ā: 'A',
              Ă: 'A',
              Ą: 'A',
              ā: 'a',
              ă: 'a',
              ą: 'a',
              Ć: 'C',
              Ĉ: 'C',
              Ċ: 'C',
              Č: 'C',
              ć: 'c',
              ĉ: 'c',
              ċ: 'c',
              č: 'c',
              Ď: 'D',
              Đ: 'D',
              ď: 'd',
              đ: 'd',
              Ē: 'E',
              Ĕ: 'E',
              Ė: 'E',
              Ę: 'E',
              Ě: 'E',
              ē: 'e',
              ĕ: 'e',
              ė: 'e',
              ę: 'e',
              ě: 'e',
              Ĝ: 'G',
              Ğ: 'G',
              Ġ: 'G',
              Ģ: 'G',
              ĝ: 'g',
              ğ: 'g',
              ġ: 'g',
              ģ: 'g',
              Ĥ: 'H',
              Ħ: 'H',
              ĥ: 'h',
              ħ: 'h',
              Ĩ: 'I',
              Ī: 'I',
              Ĭ: 'I',
              Į: 'I',
              İ: 'I',
              ĩ: 'i',
              ī: 'i',
              ĭ: 'i',
              į: 'i',
              ı: 'i',
              Ĵ: 'J',
              ĵ: 'j',
              Ķ: 'K',
              ķ: 'k',
              ĸ: 'k',
              Ĺ: 'L',
              Ļ: 'L',
              Ľ: 'L',
              Ŀ: 'L',
              Ł: 'L',
              ĺ: 'l',
              ļ: 'l',
              ľ: 'l',
              ŀ: 'l',
              ł: 'l',
              Ń: 'N',
              Ņ: 'N',
              Ň: 'N',
              Ŋ: 'N',
              ń: 'n',
              ņ: 'n',
              ň: 'n',
              ŋ: 'n',
              Ō: 'O',
              Ŏ: 'O',
              Ő: 'O',
              ō: 'o',
              ŏ: 'o',
              ő: 'o',
              Ŕ: 'R',
              Ŗ: 'R',
              Ř: 'R',
              ŕ: 'r',
              ŗ: 'r',
              ř: 'r',
              Ś: 'S',
              Ŝ: 'S',
              Ş: 'S',
              Š: 'S',
              ś: 's',
              ŝ: 's',
              ş: 's',
              š: 's',
              Ţ: 'T',
              Ť: 'T',
              Ŧ: 'T',
              ţ: 't',
              ť: 't',
              ŧ: 't',
              Ũ: 'U',
              Ū: 'U',
              Ŭ: 'U',
              Ů: 'U',
              Ű: 'U',
              Ų: 'U',
              ũ: 'u',
              ū: 'u',
              ŭ: 'u',
              ů: 'u',
              ű: 'u',
              ų: 'u',
              Ŵ: 'W',
              ŵ: 'w',
              Ŷ: 'Y',
              ŷ: 'y',
              Ÿ: 'Y',
              Ź: 'Z',
              Ż: 'Z',
              Ž: 'Z',
              ź: 'z',
              ż: 'z',
              ž: 'z',
              Ĳ: 'IJ',
              ĳ: 'ij',
              Œ: 'Oe',
              œ: 'oe',
              ŉ: "'n",
              ſ: 's',
            }),
            tM = tO({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' });
          function tk(e) {
            return '\\' + eZ[e];
          }
          function tz(e) {
            return eK.test(e);
          }
          function t$(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e, i) {
                r[++t] = [i, e];
              }),
              r
            );
          }
          function tq(e, t) {
            return function (r) {
              return e(t(r));
            };
          }
          function tH(e, t) {
            for (var r = -1, i = e.length, n = 0, o = []; ++r < i; ) {
              var a = e[r];
              (a === t || a === s) && ((e[r] = s), (o[n++] = r));
            }
            return o;
          }
          function tF(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e) {
                r[++t] = e;
              }),
              r
            );
          }
          function tB(e) {
            return tz(e)
              ? (function (e) {
                  for (var t = (eB.lastIndex = 0); eB.test(e); ) ++t;
                  return t;
                })(e)
              : tm(e);
          }
          function tV(e) {
            return tz(e) ? e.match(eB) || [] : e.split('');
          }
          function tK(e) {
            for (var t = e.length; t-- && Z.test(e.charAt(t)); );
            return t;
          }
          var tW = tO({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" }),
            tG = (function e(t) {
              var Z,
                eg,
                ey,
                ev,
                em = (t = null == t ? e3 : tG.defaults(e3.Object(), t, tG.pick(e3, eG))).Array,
                e_ = t.Date,
                eb = t.Error,
                ew = t.Function,
                eE = t.Math,
                eD = t.Object,
                eS = t.RegExp,
                eI = t.String,
                eO = t.TypeError,
                eP = em.prototype,
                eC = ew.prototype,
                eA = eD.prototype,
                ex = t['__core-js_shared__'],
                eN = eC.toString,
                eT = eA.hasOwnProperty,
                eR = 0,
                eL = (Z = /[^.]+$/.exec((ex && ex.keys && ex.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + Z : '',
                ej = eA.toString,
                eU = eN.call(eD),
                eM = e3._,
                ek = eS(
                  '^' +
                    eN
                      .call(eT)
                      .replace(Y, '\\$&')
                      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                    '$'
                ),
                ez = e8 ? t.Buffer : r,
                e$ = t.Symbol,
                eq = t.Uint8Array,
                eB = ez ? ez.allocUnsafe : r,
                eK = tq(eD.getPrototypeOf, eD),
                eZ = eD.create,
                e1 = eA.propertyIsEnumerable,
                e5 = eP.splice,
                e6 = e$ ? e$.isConcatSpreadable : r,
                e2 = e$ ? e$.iterator : r,
                e4 = e$ ? e$.toStringTag : r,
                e9 = (function () {
                  try {
                    var e = nb(eD, 'defineProperty');
                    return e({}, '', {}), e;
                  } catch {}
                })(),
                tm = t.clearTimeout !== e3.clearTimeout && t.clearTimeout,
                tO = e_ && e_.now !== e3.Date.now && e_.now,
                tY = t.setTimeout !== e3.setTimeout && t.setTimeout,
                tJ = eE.ceil,
                tX = eE.floor,
                tZ = eD.getOwnPropertySymbols,
                tQ = ez ? ez.isBuffer : r,
                t0 = t.isFinite,
                t1 = eP.join,
                t5 = tq(eD.keys, eD),
                t3 = eE.max,
                t6 = eE.min,
                t2 = e_.now,
                t8 = t.parseInt,
                t4 = eE.random,
                t9 = eP.reverse,
                t7 = nb(t, 'DataView'),
                re = nb(t, 'Map'),
                rt = nb(t, 'Promise'),
                rr = nb(t, 'Set'),
                ri = nb(t, 'WeakMap'),
                rn = nb(eD, 'create'),
                rs = ri && new ri(),
                ro = {},
                ra = nV(t7),
                rc = nV(re),
                ru = nV(rt),
                rh = nV(rr),
                rl = nV(ri),
                rf = e$ ? e$.prototype : r,
                rp = rf ? rf.valueOf : r,
                rd = rf ? rf.toString : r;
              function rg(e) {
                if (sZ(e) && !sq(e) && !(e instanceof r_)) {
                  if (e instanceof rm) return e;
                  if (eT.call(e, '__wrapped__')) return nK(e);
                }
                return new rm(e);
              }
              var ry = (function () {
                function e() {}
                return function (t) {
                  if (!sX(t)) return {};
                  if (eZ) return eZ(t);
                  e.prototype = t;
                  var i = new e();
                  return (e.prototype = r), i;
                };
              })();
              function rv() {}
              function rm(e, t) {
                (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t), (this.__index__ = 0), (this.__values__ = r);
              }
              function r_(e) {
                (this.__wrapped__ = e), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = 4294967295), (this.__views__ = []);
              }
              function rb(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function rw(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function rE(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function rD(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.__data__ = new rE(); ++t < r; ) this.add(e[t]);
              }
              function rS(e) {
                var t = (this.__data__ = new rw(e));
                this.size = t.size;
              }
              function rI(e, t) {
                var r = sq(e),
                  i = !r && s$(e),
                  n = !r && !i && sV(e),
                  s = !r && !i && !n && s8(e),
                  o = r || i || n || s,
                  a = o ? tA(e.length, eI) : [],
                  c = a.length;
                for (var u in e) (t || eT.call(e, u)) && !(o && ('length' == u || (n && ('offset' == u || 'parent' == u)) || (s && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) || nP(u, c))) && a.push(u);
                return a;
              }
              function rO(e) {
                var t = e.length;
                return t ? e[id(0, t - 1)] : r;
              }
              function rP(e, t) {
                return nH(iG(e), rU(t, 0, e.length));
              }
              function rC(e) {
                return nH(iG(e));
              }
              function rA(e, t, i) {
                ((i === r || sM(e[t], i)) && (i !== r || t in e)) || rL(e, t, i);
              }
              function rx(e, t, i) {
                var n = e[t];
                (eT.call(e, t) && sM(n, i) && (i !== r || t in e)) || rL(e, t, i);
              }
              function rN(e, t) {
                for (var r = e.length; r--; ) if (sM(e[r][0], t)) return r;
                return -1;
              }
              function rT(e, t, r, i) {
                return (
                  rq(e, function (e, n, s) {
                    t(i, e, r(e), s);
                  }),
                  i
                );
              }
              function rR(e, t) {
                return e && iY(t, om(t), e);
              }
              function rL(e, t, r) {
                '__proto__' == t && e9 ? e9(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
              }
              function rj(e, t) {
                for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n; ) s[i] = o ? r : op(e, t[i]);
                return s;
              }
              function rU(e, t, i) {
                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e;
              }
              function rM(e, t, i, n, s, o) {
                var a,
                  c = 1 & t,
                  h = 2 & t,
                  p = 4 & t;
                if ((i && (a = s ? i(e, n, s, o) : i(e)), a !== r)) return a;
                if (!sX(e)) return e;
                var _ = sq(e);
                if (_) {
                  if (((S = e.length), (U = new e.constructor(S)), S && 'string' == typeof e[0] && eT.call(e, 'index') && ((U.index = e.index), (U.input = e.input)), (a = U), !c)) return iG(e, a);
                } else {
                  var S,
                    U,
                    M,
                    k,
                    z,
                    $ = nD(e),
                    q = $ == d || $ == g;
                  if (sV(e)) return iH(e, c);
                  if ($ == m || $ == u || (q && !s)) {
                    if (((a = h || q ? {} : nI(e)), !c)) return h ? ((M = (z = a) && iY(e, o_(e), z)), iY(e, nE(e), M)) : ((k = rR(a, e)), iY(e, nw(e), k));
                  } else {
                    if (!eX[$]) return s ? e : {};
                    a = (function (e, t, r) {
                      var i,
                        n,
                        s = e.constructor;
                      switch (t) {
                        case I:
                          return iF(e);
                        case l:
                        case f:
                          return new s(+e);
                        case O:
                          return (i = r ? iF(e.buffer) : e.buffer), new e.constructor(i, e.byteOffset, e.byteLength);
                        case P:
                        case C:
                        case A:
                        case x:
                        case N:
                        case T:
                        case R:
                        case L:
                        case j:
                          return iB(e, r);
                        case y:
                          return new s();
                        case v:
                        case E:
                          return new s(e);
                        case b:
                          return ((n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex), n;
                        case w:
                          return new s();
                        case D:
                          return rp ? eD(rp.call(e)) : {};
                      }
                    })(e, $, c);
                  }
                }
                o || (o = new rS());
                var H = o.get(e);
                if (H) return H;
                o.set(e, a),
                  s3(e)
                    ? e.forEach(function (r) {
                        a.add(rM(r, t, i, r, e, o));
                      })
                    : sQ(e) &&
                      e.forEach(function (r, n) {
                        a.set(n, rM(r, t, i, n, e, o));
                      });
                var F = p ? (h ? np : nf) : h ? o_ : om,
                  B = _ ? r : F(e);
                return (
                  ta(B || e, function (r, n) {
                    B && (r = e[(n = r)]), rx(a, n, rM(r, t, i, n, e, o));
                  }),
                  a
                );
              }
              function rk(e, t, i) {
                var n = i.length;
                if (null == e) return !n;
                for (e = eD(e); n--; ) {
                  var s = i[n],
                    o = t[s],
                    a = e[s];
                  if ((a === r && !(s in e)) || !o(a)) return !1;
                }
                return !0;
              }
              function rz(e, t, n) {
                if ('function' != typeof e) throw new eO(i);
                return nk(function () {
                  e.apply(r, n);
                }, t);
              }
              function r$(e, t, r, i) {
                var n = -1,
                  s = tl,
                  o = !0,
                  a = e.length,
                  c = [],
                  u = t.length;
                if (!a) return c;
                r && (t = tp(t, tN(r))), i ? ((s = tf), (o = !1)) : t.length >= 200 && ((s = tR), (o = !1), (t = new rD(t)));
                e: for (; ++n < a; ) {
                  var h = e[n],
                    l = null == r ? h : r(h);
                  if (((h = i || 0 !== h ? h : 0), o && l == l)) {
                    for (var f = u; f--; ) if (t[f] === l) continue e;
                    c.push(h);
                  } else s(t, l, i) || c.push(h);
                }
                return c;
              }
              (rg.templateSettings = { escape: F, evaluate: B, interpolate: V, variable: '', imports: { _: rg } }),
                (rg.prototype = rv.prototype),
                (rg.prototype.constructor = rg),
                (rm.prototype = ry(rv.prototype)),
                (rm.prototype.constructor = rm),
                (r_.prototype = ry(rv.prototype)),
                (r_.prototype.constructor = r_),
                (rb.prototype.clear = function () {
                  (this.__data__ = rn ? rn(null) : {}), (this.size = 0);
                }),
                (rb.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (rb.prototype.get = function (e) {
                  var t = this.__data__;
                  if (rn) {
                    var i = t[e];
                    return i === n ? r : i;
                  }
                  return eT.call(t, e) ? t[e] : r;
                }),
                (rb.prototype.has = function (e) {
                  var t = this.__data__;
                  return rn ? t[e] !== r : eT.call(t, e);
                }),
                (rb.prototype.set = function (e, t) {
                  var i = this.__data__;
                  return (this.size += this.has(e) ? 0 : 1), (i[e] = rn && t === r ? n : t), this;
                }),
                (rw.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (rw.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = rN(t, e);
                  return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0);
                }),
                (rw.prototype.get = function (e) {
                  var t = this.__data__,
                    i = rN(t, e);
                  return i < 0 ? r : t[i][1];
                }),
                (rw.prototype.has = function (e) {
                  return rN(this.__data__, e) > -1;
                }),
                (rw.prototype.set = function (e, t) {
                  var r = this.__data__,
                    i = rN(r, e);
                  return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
                }),
                (rE.prototype.clear = function () {
                  (this.size = 0), (this.__data__ = { hash: new rb(), map: new (re || rw)(), string: new rb() });
                }),
                (rE.prototype.delete = function (e) {
                  var t = nm(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (rE.prototype.get = function (e) {
                  return nm(this, e).get(e);
                }),
                (rE.prototype.has = function (e) {
                  return nm(this, e).has(e);
                }),
                (rE.prototype.set = function (e, t) {
                  var r = nm(this, e),
                    i = r.size;
                  return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
                }),
                (rD.prototype.add = rD.prototype.push =
                  function (e) {
                    return this.__data__.set(e, n), this;
                  }),
                (rD.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (rS.prototype.clear = function () {
                  (this.__data__ = new rw()), (this.size = 0);
                }),
                (rS.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = t.delete(e);
                  return (this.size = t.size), r;
                }),
                (rS.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (rS.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (rS.prototype.set = function (e, t) {
                  var r = this.__data__;
                  if (r instanceof rw) {
                    var i = r.__data__;
                    if (!re || i.length < 199) return i.push([e, t]), (this.size = ++r.size), this;
                    r = this.__data__ = new rE(i);
                  }
                  return r.set(e, t), (this.size = r.size), this;
                });
              var rq = iZ(rY),
                rH = iZ(rJ, !0);
              function rF(e, t) {
                var r = !0;
                return (
                  rq(e, function (e, i, n) {
                    return (r = !!t(e, i, n));
                  }),
                  r
                );
              }
              function rB(e, t, i) {
                for (var n = -1, s = e.length; ++n < s; ) {
                  var o = e[n],
                    a = t(o);
                  if (null != a && (c === r ? a == a && !s2(a) : i(a, c)))
                    var c = a,
                      u = o;
                }
                return u;
              }
              function rV(e, t) {
                var r = [];
                return (
                  rq(e, function (e, i, n) {
                    t(e, i, n) && r.push(e);
                  }),
                  r
                );
              }
              function rK(e, t, r, i, n) {
                var s = -1,
                  o = e.length;
                for (r || (r = nO), n || (n = []); ++s < o; ) {
                  var a = e[s];
                  t > 0 && r(a) ? (t > 1 ? rK(a, t - 1, r, i, n) : td(n, a)) : i || (n[n.length] = a);
                }
                return n;
              }
              var rW = iQ(),
                rG = iQ(!0);
              function rY(e, t) {
                return e && rW(e, t, om);
              }
              function rJ(e, t) {
                return e && rG(e, t, om);
              }
              function rX(e, t) {
                return th(t, function (t) {
                  return sG(e[t]);
                });
              }
              function rZ(e, t) {
                t = iz(t, e);
                for (var i = 0, n = t.length; null != e && i < n; ) e = e[nB(t[i++])];
                return i && i == n ? e : r;
              }
              function rQ(e, t, r) {
                var i = t(e);
                return sq(e) ? i : td(i, r(e));
              }
              function r0(e) {
                return null == e
                  ? e === r
                    ? '[object Undefined]'
                    : '[object Null]'
                  : e4 && e4 in eD(e)
                  ? (function (e) {
                      var t = eT.call(e, e4),
                        i = e[e4];
                      try {
                        e[e4] = r;
                        var n = !0;
                      } catch {}
                      var s = ej.call(e);
                      return n && (t ? (e[e4] = i) : delete e[e4]), s;
                    })(e)
                  : ej.call(e);
              }
              function r1(e, t) {
                return e > t;
              }
              function r5(e, t) {
                return null != e && eT.call(e, t);
              }
              function r3(e, t) {
                return null != e && t in eD(e);
              }
              function r6(e, t, i) {
                for (var n = i ? tf : tl, s = e[0].length, o = e.length, a = o, c = em(o), u = 1 / 0, h = []; a--; ) {
                  var l = e[a];
                  a && t && (l = tp(l, tN(t))), (u = t6(l.length, u)), (c[a] = !i && (t || (s >= 120 && l.length >= 120)) ? new rD(a && l) : r);
                }
                l = e[0];
                var f = -1,
                  p = c[0];
                e: for (; ++f < s && h.length < u; ) {
                  var d = l[f],
                    g = t ? t(d) : d;
                  if (((d = i || 0 !== d ? d : 0), !(p ? tR(p, g) : n(h, g, i)))) {
                    for (a = o; --a; ) {
                      var y = c[a];
                      if (!(y ? tR(y, g) : n(e[a], g, i))) continue e;
                    }
                    p && p.push(g), h.push(d);
                  }
                }
                return h;
              }
              function r2(e, t, i) {
                t = iz(t, e);
                var n = null == (e = nj(e, t)) ? e : e[nB(n3(t))];
                return null == n ? r : ts(n, e, i);
              }
              function r8(e) {
                return sZ(e) && r0(e) == u;
              }
              function r4(e, t, i, n, s) {
                return (
                  e === t ||
                  (null != e && null != t && (sZ(e) || sZ(t))
                    ? (function (e, t, i, n, s, o) {
                        var a = sq(e),
                          c = sq(t),
                          d = a ? h : nD(e),
                          g = c ? h : nD(t);
                        (d = d == u ? m : d), (g = g == u ? m : g);
                        var _ = d == m,
                          S = g == m,
                          P = d == g;
                        if (P && sV(e)) {
                          if (!sV(t)) return !1;
                          (a = !0), (_ = !1);
                        }
                        if (P && !_)
                          return (
                            o || (o = new rS()),
                            a || s8(e)
                              ? nh(e, t, i, n, s, o)
                              : (function (e, t, r, i, n, s, o) {
                                  switch (r) {
                                    case O:
                                      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                      (e = e.buffer), (t = t.buffer);
                                    case I:
                                      return !(e.byteLength != t.byteLength || !s(new eq(e), new eq(t)));
                                    case l:
                                    case f:
                                    case v:
                                      return sM(+e, +t);
                                    case p:
                                      return e.name == t.name && e.message == t.message;
                                    case b:
                                    case E:
                                      return e == t + '';
                                    case y:
                                      var a = t$;
                                    case w:
                                      var c = 1 & i;
                                      if ((a || (a = tF), e.size != t.size && !c)) break;
                                      var u = o.get(e);
                                      if (u) return u == t;
                                      (i |= 2), o.set(e, t);
                                      var h = nh(a(e), a(t), i, n, s, o);
                                      return o.delete(e), h;
                                    case D:
                                      if (rp) return rp.call(e) == rp.call(t);
                                  }
                                  return !1;
                                })(e, t, d, i, n, s, o)
                          );
                        if (!(1 & i)) {
                          var C = _ && eT.call(e, '__wrapped__'),
                            A = S && eT.call(t, '__wrapped__');
                          if (C || A) {
                            var x = C ? e.value() : e,
                              N = A ? t.value() : t;
                            return o || (o = new rS()), s(x, N, i, n, o);
                          }
                        }
                        return (
                          !!P &&
                          (o || (o = new rS()),
                          (function (e, t, i, n, s, o) {
                            var a = 1 & i,
                              c = nf(e),
                              u = c.length;
                            if (u != nf(t).length && !a) return !1;
                            for (var h = u; h--; ) {
                              var l = c[h];
                              if (!(a ? l in t : eT.call(t, l))) return !1;
                            }
                            var f = o.get(e),
                              p = o.get(t);
                            if (f && p) return f == t && p == e;
                            var d = !0;
                            o.set(e, t), o.set(t, e);
                            for (var g = a; ++h < u; ) {
                              var y = e[(l = c[h])],
                                v = t[l];
                              if (n) var m = a ? n(v, y, l, t, e, o) : n(y, v, l, e, t, o);
                              if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                                d = !1;
                                break;
                              }
                              g || (g = 'constructor' == l);
                            }
                            if (d && !g) {
                              var _ = e.constructor,
                                b = t.constructor;
                              _ != b && 'constructor' in e && 'constructor' in t && !('function' == typeof _ && _ instanceof _ && 'function' == typeof b && b instanceof b) && (d = !1);
                            }
                            return o.delete(e), o.delete(t), d;
                          })(e, t, i, n, s, o))
                        );
                      })(e, t, i, n, r4, s)
                    : e != e && t != t)
                );
              }
              function r9(e, t, i, n) {
                var s = i.length,
                  o = s,
                  a = !n;
                if (null == e) return !o;
                for (e = eD(e); s--; ) {
                  var c = i[s];
                  if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++s < o; ) {
                  var u = (c = i[s])[0],
                    h = e[u],
                    l = c[1];
                  if (a && c[2]) {
                    if (h === r && !(u in e)) return !1;
                  } else {
                    var f = new rS();
                    if (n) var p = n(h, l, u, e, t, f);
                    if (!(p === r ? r4(l, h, 3, n, f) : p)) return !1;
                  }
                }
                return !0;
              }
              function r7(e) {
                return !(!sX(e) || (eL && eL in e)) && (sG(e) ? ek : eu).test(nV(e));
              }
              function ie(e) {
                return 'function' == typeof e ? e : null == e ? oB : 'object' == typeof e ? (sq(e) ? io(e[0], e[1]) : is(e)) : oQ(e);
              }
              function it(e) {
                if (!nT(e)) return t5(e);
                var t = [];
                for (var r in eD(e)) eT.call(e, r) && 'constructor' != r && t.push(r);
                return t;
              }
              function ir(e, t) {
                return e < t;
              }
              function ii(e, t) {
                var r = -1,
                  i = sF(e) ? em(e.length) : [];
                return (
                  rq(e, function (e, n, s) {
                    i[++r] = t(e, n, s);
                  }),
                  i
                );
              }
              function is(e) {
                var t = n_(e);
                return 1 == t.length && t[0][2]
                  ? nR(t[0][0], t[0][1])
                  : function (r) {
                      return r === e || r9(r, e, t);
                    };
              }
              function io(e, t) {
                var i;
                return nA(e) && (i = t) == i && !sX(i)
                  ? nR(nB(e), t)
                  : function (i) {
                      var n = op(i, e);
                      return n === r && n === t ? od(i, e) : r4(t, n, 3);
                    };
              }
              function ia(e, t, i, n, s) {
                e !== t &&
                  rW(
                    t,
                    function (o, a) {
                      if ((s || (s = new rS()), sX(o)))
                        !(function (e, t, i, n, s, o, a) {
                          var c = nU(e, i),
                            u = nU(t, i),
                            h = a.get(u);
                          if (h) {
                            rA(e, i, h);
                            return;
                          }
                          var l = o ? o(c, u, i + '', e, t, a) : r,
                            f = l === r;
                          if (f) {
                            var p = sq(u),
                              d = !p && sV(u),
                              g = !p && !d && s8(u);
                            (l = u),
                              p || d || g
                                ? sq(c)
                                  ? (l = c)
                                  : sB(c)
                                  ? (l = iG(c))
                                  : d
                                  ? ((f = !1), (l = iH(u, !0)))
                                  : g
                                  ? ((f = !1), (l = iB(u, !0)))
                                  : (l = [])
                                : s1(u) || s$(u)
                                ? ((l = c), s$(c) ? (l = on(c)) : (!sX(c) || sG(c)) && (l = nI(u)))
                                : (f = !1);
                          }
                          f && (a.set(u, l), s(l, u, n, o, a), a.delete(u)), rA(e, i, l);
                        })(e, t, a, i, ia, n, s);
                      else {
                        var c = n ? n(nU(e, a), o, a + '', e, t, s) : r;
                        c === r && (c = o), rA(e, a, c);
                      }
                    },
                    o_
                  );
              }
              function ic(e, t) {
                var i = e.length;
                if (i) return nP((t += t < 0 ? i : 0), i) ? e[t] : r;
              }
              function iu(e, t, r) {
                t = t.length
                  ? tp(t, function (e) {
                      return sq(e)
                        ? function (t) {
                            return rZ(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [oB];
                var i = -1;
                return (
                  (t = tp(t, tN(nv()))),
                  (function (e, t) {
                    var r = e.length;
                    for (e.sort(t); r--; ) e[r] = e[r].value;
                    return e;
                  })(
                    ii(e, function (e, r, n) {
                      return {
                        criteria: tp(t, function (t) {
                          return t(e);
                        }),
                        index: ++i,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return (function (e, t, r) {
                        for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o; ) {
                          var c = iV(n[i], s[i]);
                          if (c) {
                            if (i >= a) return c;
                            return c * ('desc' == r[i] ? -1 : 1);
                          }
                        }
                        return e.index - t.index;
                      })(e, t, r);
                    }
                  )
                );
              }
              function ih(e, t, r) {
                for (var i = -1, n = t.length, s = {}; ++i < n; ) {
                  var o = t[i],
                    a = rZ(e, o);
                  r(a, o) && i_(s, iz(o, e), a);
                }
                return s;
              }
              function il(e, t, r, i) {
                var n = i ? tE : tw,
                  s = -1,
                  o = t.length,
                  a = e;
                for (e === t && (t = iG(t)), r && (a = tp(e, tN(r))); ++s < o; ) for (var c = 0, u = t[s], h = r ? r(u) : u; (c = n(a, h, c, i)) > -1; ) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                return e;
              }
              function ip(e, t) {
                for (var r = e ? t.length : 0, i = r - 1; r--; ) {
                  var n = t[r];
                  if (r == i || n !== s) {
                    var s = n;
                    nP(n) ? e5.call(e, n, 1) : iN(e, n);
                  }
                }
                return e;
              }
              function id(e, t) {
                return e + tX(t4() * (t - e + 1));
              }
              function ig(e, t) {
                var r = '';
                if (!e || t < 1 || t > 9007199254740991) return r;
                do t % 2 && (r += e), (t = tX(t / 2)) && (e += e);
                while (t);
                return r;
              }
              function iy(e, t) {
                return nz(nL(e, t, oB), e + '');
              }
              function iv(e) {
                return rO(oP(e));
              }
              function im(e, t) {
                var r = oP(e);
                return nH(r, rU(t, 0, r.length));
              }
              function i_(e, t, i, n) {
                if (!sX(e)) return e;
                t = iz(t, e);
                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o; ) {
                  var u = nB(t[s]),
                    h = i;
                  if ('__proto__' === u || 'constructor' === u || 'prototype' === u) break;
                  if (s != a) {
                    var l = c[u];
                    (h = n ? n(l, u, c) : r) === r && (h = sX(l) ? l : nP(t[s + 1]) ? [] : {});
                  }
                  rx(c, u, h), (c = c[u]);
                }
                return e;
              }
              var ib = rs
                  ? function (e, t) {
                      return rs.set(e, t), e;
                    }
                  : oB,
                iw = e9
                  ? function (e, t) {
                      return e9(e, 'toString', { configurable: !0, enumerable: !1, value: oq(t), writable: !0 });
                    }
                  : oB;
              function iE(e) {
                return nH(oP(e));
              }
              function iD(e, t, r) {
                var i = -1,
                  n = e.length;
                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), (n = t > r ? 0 : (r - t) >>> 0), (t >>>= 0);
                for (var s = em(n); ++i < n; ) s[i] = e[i + t];
                return s;
              }
              function iS(e, t) {
                var r;
                return (
                  rq(e, function (e, i, n) {
                    return !(r = t(e, i, n));
                  }),
                  !!r
                );
              }
              function iI(e, t, r) {
                var i = 0,
                  n = null == e ? i : e.length;
                if ('number' == typeof t && t == t && n <= 2147483647) {
                  for (; i < n; ) {
                    var s = (i + n) >>> 1,
                      o = e[s];
                    null !== o && !s2(o) && (r ? o <= t : o < t) ? (i = s + 1) : (n = s);
                  }
                  return n;
                }
                return iO(e, t, oB, r);
              }
              function iO(e, t, i, n) {
                var s = 0,
                  o = null == e ? 0 : e.length;
                if (0 === o) return 0;
                t = i(t);
                for (var a = t != t, c = null === t, u = s2(t), h = t === r; s < o; ) {
                  var l = tX((s + o) / 2),
                    f = i(e[l]),
                    p = f !== r,
                    d = null === f,
                    g = f == f,
                    y = s2(f);
                  if (a) var v = n || g;
                  else v = h ? g && (n || p) : c ? g && p && (n || !d) : u ? g && p && !d && (n || !y) : !d && !y && (n ? f <= t : f < t);
                  v ? (s = l + 1) : (o = l);
                }
                return t6(o, 4294967294);
              }
              function iP(e, t) {
                for (var r = -1, i = e.length, n = 0, s = []; ++r < i; ) {
                  var o = e[r],
                    a = t ? t(o) : o;
                  if (!r || !sM(a, c)) {
                    var c = a;
                    s[n++] = 0 === o ? 0 : o;
                  }
                }
                return s;
              }
              function iC(e) {
                return 'number' == typeof e ? e : s2(e) ? a : +e;
              }
              function iA(e) {
                if ('string' == typeof e) return e;
                if (sq(e)) return tp(e, iA) + '';
                if (s2(e)) return rd ? rd.call(e) : '';
                var t = e + '';
                return '0' == t && 1 / e == -o ? '-0' : t;
              }
              function ix(e, t, r) {
                var i = -1,
                  n = tl,
                  s = e.length,
                  o = !0,
                  a = [],
                  c = a;
                if (r) (o = !1), (n = tf);
                else if (s >= 200) {
                  var u = t ? null : nn(e);
                  if (u) return tF(u);
                  (o = !1), (n = tR), (c = new rD());
                } else c = t ? [] : a;
                e: for (; ++i < s; ) {
                  var h = e[i],
                    l = t ? t(h) : h;
                  if (((h = r || 0 !== h ? h : 0), o && l == l)) {
                    for (var f = c.length; f--; ) if (c[f] === l) continue e;
                    t && c.push(l), a.push(h);
                  } else n(c, l, r) || (c !== a && c.push(l), a.push(h));
                }
                return a;
              }
              function iN(e, t) {
                return (t = iz(t, e)), null == (e = nj(e, t)) || delete e[nB(n3(t))];
              }
              function iT(e, t, r, i) {
                return i_(e, t, r(rZ(e, t)), i);
              }
              function iR(e, t, r, i) {
                for (var n = e.length, s = i ? n : -1; (i ? s-- : ++s < n) && t(e[s], s, e); );
                return r ? iD(e, i ? 0 : s, i ? s + 1 : n) : iD(e, i ? s + 1 : 0, i ? n : s);
              }
              function iL(e, t) {
                var r = e;
                return (
                  r instanceof r_ && (r = r.value()),
                  tg(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, td([e], t.args));
                    },
                    r
                  )
                );
              }
              function ij(e, t, r) {
                var i = e.length;
                if (i < 2) return i ? ix(e[0]) : [];
                for (var n = -1, s = em(i); ++n < i; ) for (var o = e[n], a = -1; ++a < i; ) a != n && (s[n] = r$(s[n] || o, e[a], t, r));
                return ix(rK(s, 1), t, r);
              }
              function iU(e, t, i) {
                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s; ) {
                  var c = n < o ? t[n] : r;
                  i(a, e[n], c);
                }
                return a;
              }
              function iM(e) {
                return sB(e) ? e : [];
              }
              function ik(e) {
                return 'function' == typeof e ? e : oB;
              }
              function iz(e, t) {
                return sq(e) ? e : nA(e, t) ? [e] : nF(os(e));
              }
              function i$(e, t, i) {
                var n = e.length;
                return (i = i === r ? n : i), !t && i >= n ? e : iD(e, t, i);
              }
              var iq =
                tm ||
                function (e) {
                  return e3.clearTimeout(e);
                };
              function iH(e, t) {
                if (t) return e.slice();
                var r = e.length,
                  i = eB ? eB(r) : new e.constructor(r);
                return e.copy(i), i;
              }
              function iF(e) {
                var t = new e.constructor(e.byteLength);
                return new eq(t).set(new eq(e)), t;
              }
              function iB(e, t) {
                var r = t ? iF(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length);
              }
              function iV(e, t) {
                if (e !== t) {
                  var i = e !== r,
                    n = null === e,
                    s = e == e,
                    o = s2(e),
                    a = t !== r,
                    c = null === t,
                    u = t == t,
                    h = s2(t);
                  if ((!c && !h && !o && e > t) || (o && a && u && !c && !h) || (n && a && u) || (!i && u) || !s) return 1;
                  if ((!n && !o && !h && e < t) || (h && i && s && !n && !o) || (c && i && s) || (!a && s) || !u) return -1;
                }
                return 0;
              }
              function iK(e, t, r, i) {
                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, u = t3(s - o, 0), h = em(c + u), l = !i; ++a < c; ) h[a] = t[a];
                for (; ++n < o; ) (l || n < s) && (h[r[n]] = e[n]);
                for (; u--; ) h[a++] = e[n++];
                return h;
              }
              function iW(e, t, r, i) {
                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, h = t3(s - a, 0), l = em(h + u), f = !i; ++n < h; ) l[n] = e[n];
                for (var p = n; ++c < u; ) l[p + c] = t[c];
                for (; ++o < a; ) (f || n < s) && (l[p + r[o]] = e[n++]);
                return l;
              }
              function iG(e, t) {
                var r = -1,
                  i = e.length;
                for (t || (t = em(i)); ++r < i; ) t[r] = e[r];
                return t;
              }
              function iY(e, t, i, n) {
                var s = !i;
                i || (i = {});
                for (var o = -1, a = t.length; ++o < a; ) {
                  var c = t[o],
                    u = n ? n(i[c], e[c], c, i, e) : r;
                  u === r && (u = e[c]), s ? rL(i, c, u) : rx(i, c, u);
                }
                return i;
              }
              function iJ(e, t) {
                return function (r, i) {
                  var n = sq(r) ? to : rT,
                    s = t ? t() : {};
                  return n(r, e, nv(i, 2), s);
                };
              }
              function iX(e) {
                return iy(function (t, i) {
                  var n = -1,
                    s = i.length,
                    o = s > 1 ? i[s - 1] : r,
                    a = s > 2 ? i[2] : r;
                  for (o = e.length > 3 && 'function' == typeof o ? (s--, o) : r, a && nC(i[0], i[1], a) && ((o = s < 3 ? r : o), (s = 1)), t = eD(t); ++n < s; ) {
                    var c = i[n];
                    c && e(t, c, n, o);
                  }
                  return t;
                });
              }
              function iZ(e, t) {
                return function (r, i) {
                  if (null == r) return r;
                  if (!sF(r)) return e(r, i);
                  for (var n = r.length, s = t ? n : -1, o = eD(r); (t ? s-- : ++s < n) && !1 !== i(o[s], s, o); );
                  return r;
                };
              }
              function iQ(e) {
                return function (t, r, i) {
                  for (var n = -1, s = eD(t), o = i(t), a = o.length; a--; ) {
                    var c = o[e ? a : ++n];
                    if (!1 === r(s[c], c, s)) break;
                  }
                  return t;
                };
              }
              function i0(e) {
                return function (t) {
                  var i = tz((t = os(t))) ? tV(t) : r,
                    n = i ? i[0] : t.charAt(0),
                    s = i ? i$(i, 1).join('') : t.slice(1);
                  return n[e]() + s;
                };
              }
              function i1(e) {
                return function (t) {
                  return tg(ok(ox(t).replace(eH, '')), e, '');
                };
              }
              function i5(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var r = ry(e.prototype),
                    i = e.apply(r, t);
                  return sX(i) ? i : r;
                };
              }
              function i3(e) {
                return function (t, i, n) {
                  var s = eD(t);
                  if (!sF(t)) {
                    var o = nv(i, 3);
                    (t = om(t)),
                      (i = function (e) {
                        return o(s[e], e, s);
                      });
                  }
                  var a = e(t, i, n);
                  return a > -1 ? s[o ? t[a] : a] : r;
                };
              }
              function i6(e) {
                return nl(function (t) {
                  var n = t.length,
                    s = n,
                    o = rm.prototype.thru;
                  for (e && t.reverse(); s--; ) {
                    var a = t[s];
                    if ('function' != typeof a) throw new eO(i);
                    if (o && !c && 'wrapper' == ng(a)) var c = new rm([], !0);
                  }
                  for (s = c ? s : n; ++s < n; ) {
                    var u = ng((a = t[s])),
                      h = 'wrapper' == u ? nd(a) : r;
                    c = h && nx(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? c[ng(h[0])].apply(c, h[3]) : 1 == a.length && nx(a) ? c[u]() : c.thru(a);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (c && 1 == e.length && sq(r)) return c.plant(r).value();
                    for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n; ) s = t[i].call(this, s);
                    return s;
                  };
                });
              }
              function i2(e, t, i, n, s, o, a, c, u, h) {
                var l = 128 & t,
                  f = 1 & t,
                  p = 2 & t,
                  d = 24 & t,
                  g = 512 & t,
                  y = p ? r : i5(e);
                return function v() {
                  for (var m = arguments.length, _ = em(m), b = m; b--; ) _[b] = arguments[b];
                  if (d)
                    var w = ny(v),
                      E = (function (e, t) {
                        for (var r = e.length, i = 0; r--; ) e[r] === t && ++i;
                        return i;
                      })(_, w);
                  if ((n && (_ = iK(_, n, s, d)), o && (_ = iW(_, o, a, d)), (m -= E), d && m < h)) {
                    var D = tH(_, w);
                    return nr(e, t, i2, v.placeholder, i, _, D, c, u, h - m);
                  }
                  var S = f ? i : this,
                    I = p ? S[e] : e;
                  return (
                    (m = _.length),
                    c
                      ? (_ = (function (e, t) {
                          for (var i = e.length, n = t6(t.length, i), s = iG(e); n--; ) {
                            var o = t[n];
                            e[n] = nP(o, i) ? s[o] : r;
                          }
                          return e;
                        })(_, c))
                      : g && m > 1 && _.reverse(),
                    l && u < m && (_.length = u),
                    this && this !== e3 && this instanceof v && (I = y || i5(I)),
                    I.apply(S, _)
                  );
                };
              }
              function i8(e, t) {
                return function (r, i) {
                  var n, s;
                  return (
                    (n = t(i)),
                    (s = {}),
                    rY(r, function (t, r, i) {
                      e(s, n(t), r, i);
                    }),
                    s
                  );
                };
              }
              function i4(e, t) {
                return function (i, n) {
                  var s;
                  if (i === r && n === r) return t;
                  if ((i !== r && (s = i), n !== r)) {
                    if (s === r) return n;
                    'string' == typeof i || 'string' == typeof n ? ((i = iA(i)), (n = iA(n))) : ((i = iC(i)), (n = iC(n))), (s = e(i, n));
                  }
                  return s;
                };
              }
              function i9(e) {
                return nl(function (t) {
                  return (
                    (t = tp(t, tN(nv()))),
                    iy(function (r) {
                      var i = this;
                      return e(t, function (e) {
                        return ts(e, i, r);
                      });
                    })
                  );
                });
              }
              function i7(e, t) {
                var i = (t = t === r ? ' ' : iA(t)).length;
                if (i < 2) return i ? ig(t, e) : t;
                var n = ig(t, tJ(e / tB(t)));
                return tz(t) ? i$(tV(n), 0, e).join('') : n.slice(0, e);
              }
              function ne(e) {
                return function (t, i, n) {
                  return (
                    n && 'number' != typeof n && nC(t, i, n) && (i = n = r),
                    (t = oe(t)),
                    i === r ? ((i = t), (t = 0)) : (i = oe(i)),
                    (n = n === r ? (t < i ? 1 : -1) : oe(n)),
                    (function (e, t, r, i) {
                      for (var n = -1, s = t3(tJ((t - e) / (r || 1)), 0), o = em(s); s--; ) (o[i ? s : ++n] = e), (e += r);
                      return o;
                    })(t, i, n, e)
                  );
                };
              }
              function nt(e) {
                return function (t, r) {
                  return ('string' == typeof t && 'string' == typeof r) || ((t = oi(t)), (r = oi(r))), e(t, r);
                };
              }
              function nr(e, t, i, n, s, o, a, c, u, h) {
                var l = 8 & t,
                  f = l ? a : r,
                  p = l ? r : a,
                  d = l ? o : r,
                  g = l ? r : o;
                (t |= l ? 32 : 64), 4 & (t &= ~(l ? 64 : 32)) || (t &= -4);
                var y = [e, t, s, d, f, g, p, c, u, h],
                  v = i.apply(r, y);
                return nx(e) && nM(v, y), (v.placeholder = n), n$(v, e, t);
              }
              function ni(e) {
                var t = eE[e];
                return function (e, r) {
                  if (((e = oi(e)), (r = null == r ? 0 : t6(ot(r), 292)) && t0(e))) {
                    var i = (os(e) + 'e').split('e');
                    return +((i = (os(t(i[0] + 'e' + (+i[1] + r))) + 'e').split('e'))[0] + 'e' + (+i[1] - r));
                  }
                  return t(e);
                };
              }
              var nn =
                rr && 1 / tF(new rr([, -0]))[1] == o
                  ? function (e) {
                      return new rr(e);
                    }
                  : oY;
              function ns(e) {
                return function (t) {
                  var r,
                    i,
                    n = nD(t);
                  return n == y
                    ? t$(t)
                    : n == w
                    ? ((r = -1),
                      (i = Array(t.size)),
                      t.forEach(function (e) {
                        i[++r] = [e, e];
                      }),
                      i)
                    : tp(e(t), function (e) {
                        return [e, t[e]];
                      });
                };
              }
              function no(e, t, n, o, a, c, u, h) {
                var l = 2 & t;
                if (!l && 'function' != typeof e) throw new eO(i);
                var f = o ? o.length : 0;
                if ((f || ((t &= -97), (o = a = r)), (u = u === r ? u : t3(ot(u), 0)), (h = h === r ? h : ot(h)), (f -= a ? a.length : 0), 64 & t)) {
                  var p = o,
                    d = a;
                  o = a = r;
                }
                var g = l ? r : nd(e),
                  y = [e, t, n, o, a, p, d, c, u, h];
                if (
                  (g &&
                    (function (e, t) {
                      var r = e[1],
                        i = t[1],
                        n = r | i,
                        o = n < 131,
                        a = (128 == i && 8 == r) || (128 == i && 256 == r && e[7].length <= t[8]) || (384 == i && t[7].length <= t[8] && 8 == r);
                      if (o || a) {
                        1 & i && ((e[2] = t[2]), (n |= 1 & r ? 0 : 4));
                        var c = t[3];
                        if (c) {
                          var u = e[3];
                          (e[3] = u ? iK(u, c, t[4]) : c), (e[4] = u ? tH(e[3], s) : t[4]);
                        }
                        (c = t[5]) && ((u = e[5]), (e[5] = u ? iW(u, c, t[6]) : c), (e[6] = u ? tH(e[5], s) : t[6])),
                          (c = t[7]) && (e[7] = c),
                          128 & i && (e[8] = null == e[8] ? t[8] : t6(e[8], t[8])),
                          null == e[9] && (e[9] = t[9]),
                          (e[0] = t[0]),
                          (e[1] = n);
                      }
                    })(y, g),
                  (e = y[0]),
                  (t = y[1]),
                  (n = y[2]),
                  (o = y[3]),
                  (a = y[4]),
                  (h = y[9] = y[9] === r ? (l ? 0 : e.length) : t3(y[9] - f, 0)) || !(24 & t) || (t &= -25),
                  t && 1 != t)
                )
                  8 == t || 16 == t
                    ? ((v = e),
                      (m = t),
                      (_ = h),
                      (b = i5(v)),
                      (T = function e() {
                        for (var t = arguments.length, i = em(t), n = t, s = ny(e); n--; ) i[n] = arguments[n];
                        var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tH(i, s);
                        return (t -= o.length) < _ ? nr(v, m, i2, e.placeholder, r, i, o, r, r, _ - t) : ts(this && this !== e3 && this instanceof e ? b : v, this, i);
                      }))
                    : (32 != t && 33 != t) || a.length
                    ? (T = i2.apply(r, y))
                    : ((w = e),
                      (E = t),
                      (D = n),
                      (S = o),
                      (I = 1 & E),
                      (O = i5(w)),
                      (T = function e() {
                        for (var t = -1, r = arguments.length, i = -1, n = S.length, s = em(n + r), o = this && this !== e3 && this instanceof e ? O : w; ++i < n; ) s[i] = S[i];
                        for (; r--; ) s[i++] = arguments[++t];
                        return ts(o, I ? D : this, s);
                      }));
                else
                  var v,
                    m,
                    _,
                    b,
                    w,
                    E,
                    D,
                    S,
                    I,
                    O,
                    P,
                    C,
                    A,
                    x,
                    N,
                    T =
                      ((P = e),
                      (C = t),
                      (A = n),
                      (x = 1 & C),
                      (N = i5(P)),
                      function e() {
                        return (this && this !== e3 && this instanceof e ? N : P).apply(x ? A : this, arguments);
                      });
                return n$((g ? ib : nM)(T, y), e, t);
              }
              function na(e, t, i, n) {
                return e === r || (sM(e, eA[i]) && !eT.call(n, i)) ? t : e;
              }
              function nc(e, t, i, n, s, o) {
                return sX(e) && sX(t) && (o.set(t, e), ia(e, t, r, nc, o), o.delete(t)), e;
              }
              function nu(e) {
                return s1(e) ? r : e;
              }
              function nh(e, t, i, n, s, o) {
                var a = 1 & i,
                  c = e.length,
                  u = t.length;
                if (c != u && !(a && u > c)) return !1;
                var h = o.get(e),
                  l = o.get(t);
                if (h && l) return h == t && l == e;
                var f = -1,
                  p = !0,
                  d = 2 & i ? new rD() : r;
                for (o.set(e, t), o.set(t, e); ++f < c; ) {
                  var g = e[f],
                    y = t[f];
                  if (n) var v = a ? n(y, g, f, t, e, o) : n(g, y, f, e, t, o);
                  if (v !== r) {
                    if (v) continue;
                    p = !1;
                    break;
                  }
                  if (d) {
                    if (
                      !tv(t, function (e, t) {
                        if (!tR(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t);
                      })
                    ) {
                      p = !1;
                      break;
                    }
                  } else if (!(g === y || s(g, y, i, n, o))) {
                    p = !1;
                    break;
                  }
                }
                return o.delete(e), o.delete(t), p;
              }
              function nl(e) {
                return nz(nL(e, r, nZ), e + '');
              }
              function nf(e) {
                return rQ(e, om, nw);
              }
              function np(e) {
                return rQ(e, o_, nE);
              }
              var nd = rs
                ? function (e) {
                    return rs.get(e);
                  }
                : oY;
              function ng(e) {
                for (var t = e.name + '', r = ro[t], i = eT.call(ro, t) ? r.length : 0; i--; ) {
                  var n = r[i],
                    s = n.func;
                  if (null == s || s == e) return n.name;
                }
                return t;
              }
              function ny(e) {
                return (eT.call(rg, 'placeholder') ? rg : e).placeholder;
              }
              function nv() {
                var e = rg.iteratee || oV;
                return (e = e === oV ? ie : e), arguments.length ? e(arguments[0], arguments[1]) : e;
              }
              function nm(e, t) {
                var r,
                  i = e.__data__;
                return ('string' == (r = typeof t) || 'number' == r || 'symbol' == r || 'boolean' == r ? '__proto__' !== t : null === t) ? i['string' == typeof t ? 'string' : 'hash'] : i.map;
              }
              function n_(e) {
                for (var t = om(e), r = t.length; r--; ) {
                  var i = t[r],
                    n = e[i];
                  t[r] = [i, n, n == n && !sX(n)];
                }
                return t;
              }
              function nb(e, t) {
                var i = null == e ? r : e[t];
                return r7(i) ? i : r;
              }
              var nw = tZ
                  ? function (e) {
                      return null == e
                        ? []
                        : th(tZ((e = eD(e))), function (t) {
                            return e1.call(e, t);
                          });
                    }
                  : o5,
                nE = tZ
                  ? function (e) {
                      for (var t = []; e; ) td(t, nw(e)), (e = eK(e));
                      return t;
                    }
                  : o5,
                nD = r0;
              function nS(e, t, r) {
                t = iz(t, e);
                for (var i = -1, n = t.length, s = !1; ++i < n; ) {
                  var o = nB(t[i]);
                  if (!(s = null != e && r(e, o))) break;
                  e = e[o];
                }
                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sJ(n) && nP(o, n) && (sq(e) || s$(e));
              }
              function nI(e) {
                return 'function' != typeof e.constructor || nT(e) ? {} : ry(eK(e));
              }
              function nO(e) {
                return sq(e) || s$(e) || !!(e6 && e && e[e6]);
              }
              function nP(e, t) {
                var r = typeof e;
                return !!(t = t ?? 9007199254740991) && ('number' == r || ('symbol' != r && el.test(e))) && e > -1 && e % 1 == 0 && e < t;
              }
              function nC(e, t, r) {
                if (!sX(r)) return !1;
                var i = typeof t;
                return ('number' == i ? !!(sF(r) && nP(t, r.length)) : 'string' == i && t in r) && sM(r[t], e);
              }
              function nA(e, t) {
                if (sq(e)) return !1;
                var r = typeof e;
                return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || s2(e)) || W.test(e) || !K.test(e) || (null != t && e in eD(t));
              }
              function nx(e) {
                var t = ng(e),
                  r = rg[t];
                if ('function' != typeof r || !(t in r_.prototype)) return !1;
                if (e === r) return !0;
                var i = nd(r);
                return !!i && e === i[0];
              }
              ((t7 && nD(new t7(new ArrayBuffer(1))) != O) || (re && nD(new re()) != y) || (rt && nD(rt.resolve()) != _) || (rr && nD(new rr()) != w) || (ri && nD(new ri()) != S)) &&
                (nD = function (e) {
                  var t = r0(e),
                    i = t == m ? e.constructor : r,
                    n = i ? nV(i) : '';
                  if (n)
                    switch (n) {
                      case ra:
                        return O;
                      case rc:
                        return y;
                      case ru:
                        return _;
                      case rh:
                        return w;
                      case rl:
                        return S;
                    }
                  return t;
                });
              var nN = ex ? sG : o3;
              function nT(e) {
                var t = e && e.constructor,
                  r = ('function' == typeof t && t.prototype) || eA;
                return e === r;
              }
              function nR(e, t) {
                return function (i) {
                  return null != i && i[e] === t && (t !== r || e in eD(i));
                };
              }
              function nL(e, t, i) {
                return (
                  (t = t3(t === r ? e.length - 1 : t, 0)),
                  function () {
                    for (var r = arguments, n = -1, s = t3(r.length - t, 0), o = em(s); ++n < s; ) o[n] = r[t + n];
                    n = -1;
                    for (var a = em(t + 1); ++n < t; ) a[n] = r[n];
                    return (a[t] = i(o)), ts(e, this, a);
                  }
                );
              }
              function nj(e, t) {
                return t.length < 2 ? e : rZ(e, iD(t, 0, -1));
              }
              function nU(e, t) {
                if (!('constructor' === t && 'function' == typeof e[t]) && '__proto__' != t) return e[t];
              }
              var nM = nq(ib),
                nk =
                  tY ||
                  function (e, t) {
                    return e3.setTimeout(e, t);
                  },
                nz = nq(iw);
              function n$(e, t, r) {
                var i,
                  n,
                  s = t + '';
                return nz(
                  e,
                  (function (e, t) {
                    var r = t.length;
                    if (!r) return e;
                    var i = r - 1;
                    return (
                      (t[i] = (r > 1 ? '& ' : '') + t[i]),
                      (t = t.join(r > 2 ? ', ' : ' ')),
                      e.replace(
                        Q,
                        `{
/* [wrapped with ` +
                          t +
                          `] */
`
                      )
                    );
                  })(
                    s,
                    ((i = (n = s.match(ee)) ? n[1].split(et) : []),
                    ta(c, function (e) {
                      var t = '_.' + e[0];
                      r & e[1] && !tl(i, t) && i.push(t);
                    }),
                    i.sort())
                  )
                );
              }
              function nq(e) {
                var t = 0,
                  i = 0;
                return function () {
                  var n = t2(),
                    s = 16 - (n - i);
                  if (((i = n), s > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(r, arguments);
                };
              }
              function nH(e, t) {
                var i = -1,
                  n = e.length,
                  s = n - 1;
                for (t = t === r ? n : t; ++i < t; ) {
                  var o = id(i, s),
                    a = e[o];
                  (e[o] = e[i]), (e[i] = a);
                }
                return (e.length = t), e;
              }
              var nF =
                ((ey = (eg = sN(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(''),
                      e.replace(G, function (e, r, i, n) {
                        t.push(i ? n.replace(en, '$1') : r || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === ey.size && ey.clear(), e;
                  }
                )).cache),
                eg);
              function nB(e) {
                if ('string' == typeof e || s2(e)) return e;
                var t = e + '';
                return '0' == t && 1 / e == -o ? '-0' : t;
              }
              function nV(e) {
                if (null != e) {
                  try {
                    return eN.call(e);
                  } catch {}
                  try {
                    return e + '';
                  } catch {}
                }
                return '';
              }
              function nK(e) {
                if (e instanceof r_) return e.clone();
                var t = new rm(e.__wrapped__, e.__chain__);
                return (t.__actions__ = iG(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
              }
              var nW = iy(function (e, t) {
                  return sB(e) ? r$(e, rK(t, 1, sB, !0)) : [];
                }),
                nG = iy(function (e, t) {
                  var i = n3(t);
                  return sB(i) && (i = r), sB(e) ? r$(e, rK(t, 1, sB, !0), nv(i, 2)) : [];
                }),
                nY = iy(function (e, t) {
                  var i = n3(t);
                  return sB(i) && (i = r), sB(e) ? r$(e, rK(t, 1, sB, !0), r, i) : [];
                });
              function nJ(e, t, r) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var n = null == r ? 0 : ot(r);
                return n < 0 && (n = t3(i + n, 0)), tb(e, nv(t, 3), n);
              }
              function nX(e, t, i) {
                var n = null == e ? 0 : e.length;
                if (!n) return -1;
                var s = n - 1;
                return i !== r && ((s = ot(i)), (s = i < 0 ? t3(n + s, 0) : t6(s, n - 1))), tb(e, nv(t, 3), s, !0);
              }
              function nZ(e) {
                return (null == e ? 0 : e.length) ? rK(e, 1) : [];
              }
              function nQ(e) {
                return e && e.length ? e[0] : r;
              }
              var n0 = iy(function (e) {
                  var t = tp(e, iM);
                  return t.length && t[0] === e[0] ? r6(t) : [];
                }),
                n1 = iy(function (e) {
                  var t = n3(e),
                    i = tp(e, iM);
                  return t === n3(i) ? (t = r) : i.pop(), i.length && i[0] === e[0] ? r6(i, nv(t, 2)) : [];
                }),
                n5 = iy(function (e) {
                  var t = n3(e),
                    i = tp(e, iM);
                  return (t = 'function' == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r6(i, r, t) : [];
                });
              function n3(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : r;
              }
              var n6 = iy(n2);
              function n2(e, t) {
                return e && e.length && t && t.length ? il(e, t) : e;
              }
              var n8 = nl(function (e, t) {
                var r = null == e ? 0 : e.length,
                  i = rj(e, t);
                return (
                  ip(
                    e,
                    tp(t, function (e) {
                      return nP(e, r) ? +e : e;
                    }).sort(iV)
                  ),
                  i
                );
              });
              function n4(e) {
                return null == e ? e : t9.call(e);
              }
              var n9 = iy(function (e) {
                  return ix(rK(e, 1, sB, !0));
                }),
                n7 = iy(function (e) {
                  var t = n3(e);
                  return sB(t) && (t = r), ix(rK(e, 1, sB, !0), nv(t, 2));
                }),
                se = iy(function (e) {
                  var t = n3(e);
                  return (t = 'function' == typeof t ? t : r), ix(rK(e, 1, sB, !0), r, t);
                });
              function st(e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return (
                  (e = th(e, function (e) {
                    if (sB(e)) return (t = t3(e.length, t)), !0;
                  })),
                  tA(t, function (t) {
                    return tp(e, tI(t));
                  })
                );
              }
              function sr(e, t) {
                if (!(e && e.length)) return [];
                var i = st(e);
                return null == t
                  ? i
                  : tp(i, function (e) {
                      return ts(t, r, e);
                    });
              }
              var si = iy(function (e, t) {
                  return sB(e) ? r$(e, t) : [];
                }),
                sn = iy(function (e) {
                  return ij(th(e, sB));
                }),
                ss = iy(function (e) {
                  var t = n3(e);
                  return sB(t) && (t = r), ij(th(e, sB), nv(t, 2));
                }),
                so = iy(function (e) {
                  var t = n3(e);
                  return (t = 'function' == typeof t ? t : r), ij(th(e, sB), r, t);
                }),
                sa = iy(st),
                sc = iy(function (e) {
                  var t = e.length,
                    i = t > 1 ? e[t - 1] : r;
                  return (i = 'function' == typeof i ? (e.pop(), i) : r), sr(e, i);
                });
              function su(e) {
                var t = rg(e);
                return (t.__chain__ = !0), t;
              }
              function sh(e, t) {
                return t(e);
              }
              var sl = nl(function (e) {
                  var t = e.length,
                    i = t ? e[0] : 0,
                    n = this.__wrapped__,
                    s = function (t) {
                      return rj(t, e);
                    };
                  return !(t > 1) && !this.__actions__.length && n instanceof r_ && nP(i)
                    ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({ func: sh, args: [s], thisArg: r }),
                      new rm(n, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(r), e;
                      }))
                    : this.thru(s);
                }),
                sf = iJ(function (e, t, r) {
                  eT.call(e, r) ? ++e[r] : rL(e, r, 1);
                }),
                sp = i3(nJ),
                sd = i3(nX);
              function sg(e, t) {
                return (sq(e) ? ta : rq)(e, nv(t, 3));
              }
              function sy(e, t) {
                return (sq(e) ? tc : rH)(e, nv(t, 3));
              }
              var sv = iJ(function (e, t, r) {
                  eT.call(e, r) ? e[r].push(t) : rL(e, r, [t]);
                }),
                sm = iy(function (e, t, r) {
                  var i = -1,
                    n = 'function' == typeof t,
                    s = sF(e) ? em(e.length) : [];
                  return (
                    rq(e, function (e) {
                      s[++i] = n ? ts(t, e, r) : r2(e, t, r);
                    }),
                    s
                  );
                }),
                s_ = iJ(function (e, t, r) {
                  rL(e, r, t);
                });
              function sb(e, t) {
                return (sq(e) ? tp : ii)(e, nv(t, 3));
              }
              var sw = iJ(
                  function (e, t, r) {
                    e[r ? 0 : 1].push(t);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                sE = iy(function (e, t) {
                  if (null == e) return [];
                  var r = t.length;
                  return r > 1 && nC(e, t[0], t[1]) ? (t = []) : r > 2 && nC(t[0], t[1], t[2]) && (t = [t[0]]), iu(e, rK(t, 1), []);
                }),
                sD =
                  tO ||
                  function () {
                    return e3.Date.now();
                  };
              function sS(e, t, i) {
                return (t = i ? r : t), (t = e && null == t ? e.length : t), no(e, 128, r, r, r, r, t);
              }
              function sI(e, t) {
                var n;
                if ('function' != typeof t) throw new eO(i);
                return (
                  (e = ot(e)),
                  function () {
                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n;
                  }
                );
              }
              var sO = iy(function (e, t, r) {
                  var i = 1;
                  if (r.length) {
                    var n = tH(r, ny(sO));
                    i |= 32;
                  }
                  return no(e, i, t, r, n);
                }),
                sP = iy(function (e, t, r) {
                  var i = 3;
                  if (r.length) {
                    var n = tH(r, ny(sP));
                    i |= 32;
                  }
                  return no(t, i, e, r, n);
                });
              function sC(e, t, n) {
                var s,
                  o,
                  a,
                  c,
                  u,
                  h,
                  l = 0,
                  f = !1,
                  p = !1,
                  d = !0;
                if ('function' != typeof e) throw new eO(i);
                function g(t) {
                  var i = s,
                    n = o;
                  return (s = o = r), (l = t), (c = e.apply(n, i));
                }
                function y(e) {
                  var i = e - h,
                    n = e - l;
                  return h === r || i >= t || i < 0 || (p && n >= a);
                }
                function v() {
                  var e,
                    r,
                    i,
                    n = sD();
                  if (y(n)) return m(n);
                  u = nk(v, ((e = n - h), (r = n - l), (i = t - e), p ? t6(i, a - r) : i));
                }
                function m(e) {
                  return (u = r), d && s ? g(e) : ((s = o = r), c);
                }
                function _() {
                  var e,
                    i = sD(),
                    n = y(i);
                  if (((s = arguments), (o = this), (h = i), n)) {
                    if (u === r) return (l = e = h), (u = nk(v, t)), f ? g(e) : c;
                    if (p) return iq(u), (u = nk(v, t)), g(h);
                  }
                  return u === r && (u = nk(v, t)), c;
                }
                return (
                  (t = oi(t) || 0),
                  sX(n) && ((f = !!n.leading), (a = (p = 'maxWait' in n) ? t3(oi(n.maxWait) || 0, t) : a), (d = 'trailing' in n ? !!n.trailing : d)),
                  (_.cancel = function () {
                    u !== r && iq(u), (l = 0), (s = h = o = u = r);
                  }),
                  (_.flush = function () {
                    return u === r ? c : m(sD());
                  }),
                  _
                );
              }
              var sA = iy(function (e, t) {
                  return rz(e, 1, t);
                }),
                sx = iy(function (e, t, r) {
                  return rz(e, oi(t) || 0, r);
                });
              function sN(e, t) {
                if ('function' != typeof e || (null != t && 'function' != typeof t)) throw new eO(i);
                var r = function () {
                  var i = arguments,
                    n = t ? t.apply(this, i) : i[0],
                    s = r.cache;
                  if (s.has(n)) return s.get(n);
                  var o = e.apply(this, i);
                  return (r.cache = s.set(n, o) || s), o;
                };
                return (r.cache = new (sN.Cache || rE)()), r;
              }
              function sT(e) {
                if ('function' != typeof e) throw new eO(i);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              sN.Cache = rE;
              var sR = iy(function (e, t) {
                  var r = (t = 1 == t.length && sq(t[0]) ? tp(t[0], tN(nv())) : tp(rK(t, 1), tN(nv()))).length;
                  return iy(function (i) {
                    for (var n = -1, s = t6(i.length, r); ++n < s; ) i[n] = t[n].call(this, i[n]);
                    return ts(e, this, i);
                  });
                }),
                sL = iy(function (e, t) {
                  var i = tH(t, ny(sL));
                  return no(e, 32, r, t, i);
                }),
                sj = iy(function (e, t) {
                  var i = tH(t, ny(sj));
                  return no(e, 64, r, t, i);
                }),
                sU = nl(function (e, t) {
                  return no(e, 256, r, r, r, t);
                });
              function sM(e, t) {
                return e === t || (e != e && t != t);
              }
              var sk = nt(r1),
                sz = nt(function (e, t) {
                  return e >= t;
                }),
                s$ = r8(
                  (function () {
                    return arguments;
                  })()
                )
                  ? r8
                  : function (e) {
                      return sZ(e) && eT.call(e, 'callee') && !e1.call(e, 'callee');
                    },
                sq = em.isArray,
                sH = e7
                  ? tN(e7)
                  : function (e) {
                      return sZ(e) && r0(e) == I;
                    };
              function sF(e) {
                return null != e && sJ(e.length) && !sG(e);
              }
              function sB(e) {
                return sZ(e) && sF(e);
              }
              var sV = tQ || o3,
                sK = te
                  ? tN(te)
                  : function (e) {
                      return sZ(e) && r0(e) == f;
                    };
              function sW(e) {
                if (!sZ(e)) return !1;
                var t = r0(e);
                return t == p || '[object DOMException]' == t || ('string' == typeof e.message && 'string' == typeof e.name && !s1(e));
              }
              function sG(e) {
                if (!sX(e)) return !1;
                var t = r0(e);
                return t == d || t == g || '[object AsyncFunction]' == t || '[object Proxy]' == t;
              }
              function sY(e) {
                return 'number' == typeof e && e == ot(e);
              }
              function sJ(e) {
                return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
              }
              function sX(e) {
                var t = typeof e;
                return null != e && ('object' == t || 'function' == t);
              }
              function sZ(e) {
                return null != e && 'object' == typeof e;
              }
              var sQ = tt
                ? tN(tt)
                : function (e) {
                    return sZ(e) && nD(e) == y;
                  };
              function s0(e) {
                return 'number' == typeof e || (sZ(e) && r0(e) == v);
              }
              function s1(e) {
                if (!sZ(e) || r0(e) != m) return !1;
                var t = eK(e);
                if (null === t) return !0;
                var r = eT.call(t, 'constructor') && t.constructor;
                return 'function' == typeof r && r instanceof r && eN.call(r) == eU;
              }
              var s5 = tr
                  ? tN(tr)
                  : function (e) {
                      return sZ(e) && r0(e) == b;
                    },
                s3 = ti
                  ? tN(ti)
                  : function (e) {
                      return sZ(e) && nD(e) == w;
                    };
              function s6(e) {
                return 'string' == typeof e || (!sq(e) && sZ(e) && r0(e) == E);
              }
              function s2(e) {
                return 'symbol' == typeof e || (sZ(e) && r0(e) == D);
              }
              var s8 = tn
                  ? tN(tn)
                  : function (e) {
                      return sZ(e) && sJ(e.length) && !!eJ[r0(e)];
                    },
                s4 = nt(ir),
                s9 = nt(function (e, t) {
                  return e <= t;
                });
              function s7(e) {
                if (!e) return [];
                if (sF(e)) return s6(e) ? tV(e) : iG(e);
                if (e2 && e[e2])
                  return (function (e) {
                    for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
                    return r;
                  })(e[e2]());
                var t = nD(e);
                return (t == y ? t$ : t == w ? tF : oP)(e);
              }
              function oe(e) {
                return e ? ((e = oi(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0) : 0 === e ? e : 0;
              }
              function ot(e) {
                var t = oe(e),
                  r = t % 1;
                return t == t ? (r ? t - r : t) : 0;
              }
              function or(e) {
                return e ? rU(ot(e), 0, 4294967295) : 0;
              }
              function oi(e) {
                if ('number' == typeof e) return e;
                if (s2(e)) return a;
                if (sX(e)) {
                  var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                  e = sX(t) ? t + '' : t;
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = tx(e);
                var r = ec.test(e);
                return r || eh.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e;
              }
              function on(e) {
                return iY(e, o_(e));
              }
              function os(e) {
                return null == e ? '' : iA(e);
              }
              var oo = iX(function (e, t) {
                  if (nT(t) || sF(t)) {
                    iY(t, om(t), e);
                    return;
                  }
                  for (var r in t) eT.call(t, r) && rx(e, r, t[r]);
                }),
                oa = iX(function (e, t) {
                  iY(t, o_(t), e);
                }),
                oc = iX(function (e, t, r, i) {
                  iY(t, o_(t), e, i);
                }),
                ou = iX(function (e, t, r, i) {
                  iY(t, om(t), e, i);
                }),
                oh = nl(rj),
                ol = iy(function (e, t) {
                  e = eD(e);
                  var i = -1,
                    n = t.length,
                    s = n > 2 ? t[2] : r;
                  for (s && nC(t[0], t[1], s) && (n = 1); ++i < n; )
                    for (var o = t[i], a = o_(o), c = -1, u = a.length; ++c < u; ) {
                      var h = a[c],
                        l = e[h];
                      (l === r || (sM(l, eA[h]) && !eT.call(e, h))) && (e[h] = o[h]);
                    }
                  return e;
                }),
                of = iy(function (e) {
                  return e.push(r, nc), ts(ow, r, e);
                });
              function op(e, t, i) {
                var n = null == e ? r : rZ(e, t);
                return n === r ? i : n;
              }
              function od(e, t) {
                return null != e && nS(e, t, r3);
              }
              var og = i8(function (e, t, r) {
                  null != t && 'function' != typeof t.toString && (t = ej.call(t)), (e[t] = r);
                }, oq(oB)),
                oy = i8(function (e, t, r) {
                  null != t && 'function' != typeof t.toString && (t = ej.call(t)), eT.call(e, t) ? e[t].push(r) : (e[t] = [r]);
                }, nv),
                ov = iy(r2);
              function om(e) {
                return sF(e) ? rI(e) : it(e);
              }
              function o_(e) {
                return sF(e)
                  ? rI(e, !0)
                  : (function (e) {
                      if (!sX(e))
                        return (function (e) {
                          var t = [];
                          if (null != e) for (var r in eD(e)) t.push(r);
                          return t;
                        })(e);
                      var t = nT(e),
                        r = [];
                      for (var i in e) ('constructor' == i && (t || !eT.call(e, i))) || r.push(i);
                      return r;
                    })(e);
              }
              var ob = iX(function (e, t, r) {
                  ia(e, t, r);
                }),
                ow = iX(function (e, t, r, i) {
                  ia(e, t, r, i);
                }),
                oE = nl(function (e, t) {
                  var r = {};
                  if (null == e) return r;
                  var i = !1;
                  (t = tp(t, function (t) {
                    return (t = iz(t, e)), i || (i = t.length > 1), t;
                  })),
                    iY(e, np(e), r),
                    i && (r = rM(r, 7, nu));
                  for (var n = t.length; n--; ) iN(r, t[n]);
                  return r;
                }),
                oD = nl(function (e, t) {
                  return null == e
                    ? {}
                    : ih(e, t, function (t, r) {
                        return od(e, r);
                      });
                });
              function oS(e, t) {
                if (null == e) return {};
                var r = tp(np(e), function (e) {
                  return [e];
                });
                return (
                  (t = nv(t)),
                  ih(e, r, function (e, r) {
                    return t(e, r[0]);
                  })
                );
              }
              var oI = ns(om),
                oO = ns(o_);
              function oP(e) {
                return null == e ? [] : tT(e, om(e));
              }
              var oC = i1(function (e, t, r) {
                return (t = t.toLowerCase()), e + (r ? oA(t) : t);
              });
              function oA(e) {
                return oM(os(e).toLowerCase());
              }
              function ox(e) {
                return (e = os(e)) && e.replace(ef, tU).replace(eF, '');
              }
              var oN = i1(function (e, t, r) {
                  return e + (r ? '-' : '') + t.toLowerCase();
                }),
                oT = i1(function (e, t, r) {
                  return e + (r ? ' ' : '') + t.toLowerCase();
                }),
                oR = i0('toLowerCase'),
                oL = i1(function (e, t, r) {
                  return e + (r ? '_' : '') + t.toLowerCase();
                }),
                oj = i1(function (e, t, r) {
                  return e + (r ? ' ' : '') + oM(t);
                }),
                oU = i1(function (e, t, r) {
                  return e + (r ? ' ' : '') + t.toUpperCase();
                }),
                oM = i0('toUpperCase');
              function ok(e, t, i) {
                var n;
                return (e = os(e)), (t = i ? r : t) === r ? (((n = e), eW.test(n)) ? e.match(eV) || [] : e.match(er) || []) : e.match(t) || [];
              }
              var oz = iy(function (e, t) {
                  try {
                    return ts(e, r, t);
                  } catch (e) {
                    return sW(e) ? e : new eb(e);
                  }
                }),
                o$ = nl(function (e, t) {
                  return (
                    ta(t, function (t) {
                      rL(e, (t = nB(t)), sO(e[t], e));
                    }),
                    e
                  );
                });
              function oq(e) {
                return function () {
                  return e;
                };
              }
              var oH = i6(),
                oF = i6(!0);
              function oB(e) {
                return e;
              }
              function oV(e) {
                return ie('function' == typeof e ? e : rM(e, 1));
              }
              var oK = iy(function (e, t) {
                  return function (r) {
                    return r2(r, e, t);
                  };
                }),
                oW = iy(function (e, t) {
                  return function (r) {
                    return r2(e, r, t);
                  };
                });
              function oG(e, t, r) {
                var i = om(t),
                  n = rX(t, i);
                null != r || (sX(t) && (n.length || !i.length)) || ((r = t), (t = e), (e = this), (n = rX(t, om(t))));
                var s = !(sX(r) && 'chain' in r) || !!r.chain,
                  o = sG(e);
                return (
                  ta(n, function (r) {
                    var i = t[r];
                    (e[r] = i),
                      o &&
                        (e.prototype[r] = function () {
                          var t = this.__chain__;
                          if (s || t) {
                            var r = e(this.__wrapped__);
                            return (r.__actions__ = iG(this.__actions__)).push({ func: i, args: arguments, thisArg: e }), (r.__chain__ = t), r;
                          }
                          return i.apply(e, td([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function oY() {}
              var oJ = i9(tp),
                oX = i9(tu),
                oZ = i9(tv);
              function oQ(e) {
                return nA(e)
                  ? tI(nB(e))
                  : function (t) {
                      return rZ(t, e);
                    };
              }
              var o0 = ne(),
                o1 = ne(!0);
              function o5() {
                return [];
              }
              function o3() {
                return !1;
              }
              var o6 = i4(function (e, t) {
                  return e + t;
                }, 0),
                o2 = ni('ceil'),
                o8 = i4(function (e, t) {
                  return e / t;
                }, 1),
                o4 = ni('floor'),
                o9 = i4(function (e, t) {
                  return e * t;
                }, 1),
                o7 = ni('round'),
                ae = i4(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (rg.after = function (e, t) {
                  if ('function' != typeof t) throw new eO(i);
                  return (
                    (e = ot(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (rg.ary = sS),
                (rg.assign = oo),
                (rg.assignIn = oa),
                (rg.assignInWith = oc),
                (rg.assignWith = ou),
                (rg.at = oh),
                (rg.before = sI),
                (rg.bind = sO),
                (rg.bindAll = o$),
                (rg.bindKey = sP),
                (rg.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return sq(e) ? e : [e];
                }),
                (rg.chain = su),
                (rg.chunk = function (e, t, i) {
                  t = (i ? nC(e, t, i) : t === r) ? 1 : t3(ot(t), 0);
                  var n = null == e ? 0 : e.length;
                  if (!n || t < 1) return [];
                  for (var s = 0, o = 0, a = em(tJ(n / t)); s < n; ) a[o++] = iD(e, s, (s += t));
                  return a;
                }),
                (rg.compact = function (e) {
                  for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r; ) {
                    var s = e[t];
                    s && (n[i++] = s);
                  }
                  return n;
                }),
                (rg.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = em(e - 1), r = arguments[0], i = e; i--; ) t[i - 1] = arguments[i];
                  return td(sq(r) ? iG(r) : [r], rK(t, 1));
                }),
                (rg.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    r = nv();
                  return (
                    (e = t
                      ? tp(e, function (e) {
                          if ('function' != typeof e[1]) throw new eO(i);
                          return [r(e[0]), e[1]];
                        })
                      : []),
                    iy(function (r) {
                      for (var i = -1; ++i < t; ) {
                        var n = e[i];
                        if (ts(n[0], this, r)) return ts(n[1], this, r);
                      }
                    })
                  );
                }),
                (rg.conforms = function (e) {
                  var t, r;
                  return (
                    (t = rM(e, 1)),
                    (r = om(t)),
                    function (e) {
                      return rk(e, t, r);
                    }
                  );
                }),
                (rg.constant = oq),
                (rg.countBy = sf),
                (rg.create = function (e, t) {
                  var r = ry(e);
                  return null == t ? r : rR(r, t);
                }),
                (rg.curry = function e(t, i, n) {
                  i = n ? r : i;
                  var s = no(t, 8, r, r, r, r, r, i);
                  return (s.placeholder = e.placeholder), s;
                }),
                (rg.curryRight = function e(t, i, n) {
                  i = n ? r : i;
                  var s = no(t, 16, r, r, r, r, r, i);
                  return (s.placeholder = e.placeholder), s;
                }),
                (rg.debounce = sC),
                (rg.defaults = ol),
                (rg.defaultsDeep = of),
                (rg.defer = sA),
                (rg.delay = sx),
                (rg.difference = nW),
                (rg.differenceBy = nG),
                (rg.differenceWith = nY),
                (rg.drop = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n ? iD(e, (t = i || t === r ? 1 : ot(t)) < 0 ? 0 : t, n) : [];
                }),
                (rg.dropRight = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n ? iD(e, 0, (t = n - (t = i || t === r ? 1 : ot(t))) < 0 ? 0 : t) : [];
                }),
                (rg.dropRightWhile = function (e, t) {
                  return e && e.length ? iR(e, nv(t, 3), !0, !0) : [];
                }),
                (rg.dropWhile = function (e, t) {
                  return e && e.length ? iR(e, nv(t, 3), !0) : [];
                }),
                (rg.fill = function (e, t, i, n) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? (i && 'number' != typeof i && nC(e, t, i) && ((i = 0), (n = s)),
                      (function (e, t, i, n) {
                        var s = e.length;
                        for ((i = ot(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : ot(n)) < 0 && (n += s), n = i > n ? 0 : or(n); i < n; ) e[i++] = t;
                        return e;
                      })(e, t, i, n))
                    : [];
                }),
                (rg.filter = function (e, t) {
                  return (sq(e) ? th : rV)(e, nv(t, 3));
                }),
                (rg.flatMap = function (e, t) {
                  return rK(sb(e, t), 1);
                }),
                (rg.flatMapDeep = function (e, t) {
                  return rK(sb(e, t), o);
                }),
                (rg.flatMapDepth = function (e, t, i) {
                  return (i = i === r ? 1 : ot(i)), rK(sb(e, t), i);
                }),
                (rg.flatten = nZ),
                (rg.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? rK(e, o) : [];
                }),
                (rg.flattenDepth = function (e, t) {
                  return (null == e ? 0 : e.length) ? rK(e, (t = t === r ? 1 : ot(t))) : [];
                }),
                (rg.flip = function (e) {
                  return no(e, 512);
                }),
                (rg.flow = oH),
                (rg.flowRight = oF),
                (rg.fromPairs = function (e) {
                  for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r; ) {
                    var n = e[t];
                    i[n[0]] = n[1];
                  }
                  return i;
                }),
                (rg.functions = function (e) {
                  return null == e ? [] : rX(e, om(e));
                }),
                (rg.functionsIn = function (e) {
                  return null == e ? [] : rX(e, o_(e));
                }),
                (rg.groupBy = sv),
                (rg.initial = function (e) {
                  return (null == e ? 0 : e.length) ? iD(e, 0, -1) : [];
                }),
                (rg.intersection = n0),
                (rg.intersectionBy = n1),
                (rg.intersectionWith = n5),
                (rg.invert = og),
                (rg.invertBy = oy),
                (rg.invokeMap = sm),
                (rg.iteratee = oV),
                (rg.keyBy = s_),
                (rg.keys = om),
                (rg.keysIn = o_),
                (rg.map = sb),
                (rg.mapKeys = function (e, t) {
                  var r = {};
                  return (
                    (t = nv(t, 3)),
                    rY(e, function (e, i, n) {
                      rL(r, t(e, i, n), e);
                    }),
                    r
                  );
                }),
                (rg.mapValues = function (e, t) {
                  var r = {};
                  return (
                    (t = nv(t, 3)),
                    rY(e, function (e, i, n) {
                      rL(r, i, t(e, i, n));
                    }),
                    r
                  );
                }),
                (rg.matches = function (e) {
                  return is(rM(e, 1));
                }),
                (rg.matchesProperty = function (e, t) {
                  return io(e, rM(t, 1));
                }),
                (rg.memoize = sN),
                (rg.merge = ob),
                (rg.mergeWith = ow),
                (rg.method = oK),
                (rg.methodOf = oW),
                (rg.mixin = oG),
                (rg.negate = sT),
                (rg.nthArg = function (e) {
                  return (
                    (e = ot(e)),
                    iy(function (t) {
                      return ic(t, e);
                    })
                  );
                }),
                (rg.omit = oE),
                (rg.omitBy = function (e, t) {
                  return oS(e, sT(nv(t)));
                }),
                (rg.once = function (e) {
                  return sI(2, e);
                }),
                (rg.orderBy = function (e, t, i, n) {
                  return null == e ? [] : (sq(t) || (t = null == t ? [] : [t]), sq((i = n ? r : i)) || (i = null == i ? [] : [i]), iu(e, t, i));
                }),
                (rg.over = oJ),
                (rg.overArgs = sR),
                (rg.overEvery = oX),
                (rg.overSome = oZ),
                (rg.partial = sL),
                (rg.partialRight = sj),
                (rg.partition = sw),
                (rg.pick = oD),
                (rg.pickBy = oS),
                (rg.property = oQ),
                (rg.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? r : rZ(e, t);
                  };
                }),
                (rg.pull = n6),
                (rg.pullAll = n2),
                (rg.pullAllBy = function (e, t, r) {
                  return e && e.length && t && t.length ? il(e, t, nv(r, 2)) : e;
                }),
                (rg.pullAllWith = function (e, t, i) {
                  return e && e.length && t && t.length ? il(e, t, r, i) : e;
                }),
                (rg.pullAt = n8),
                (rg.range = o0),
                (rg.rangeRight = o1),
                (rg.rearg = sU),
                (rg.reject = function (e, t) {
                  return (sq(e) ? th : rV)(e, sT(nv(t, 3)));
                }),
                (rg.remove = function (e, t) {
                  var r = [];
                  if (!(e && e.length)) return r;
                  var i = -1,
                    n = [],
                    s = e.length;
                  for (t = nv(t, 3); ++i < s; ) {
                    var o = e[i];
                    t(o, i, e) && (r.push(o), n.push(i));
                  }
                  return ip(e, n), r;
                }),
                (rg.rest = function (e, t) {
                  if ('function' != typeof e) throw new eO(i);
                  return iy(e, (t = t === r ? t : ot(t)));
                }),
                (rg.reverse = n4),
                (rg.sampleSize = function (e, t, i) {
                  return (t = (i ? nC(e, t, i) : t === r) ? 1 : ot(t)), (sq(e) ? rP : im)(e, t);
                }),
                (rg.set = function (e, t, r) {
                  return null == e ? e : i_(e, t, r);
                }),
                (rg.setWith = function (e, t, i, n) {
                  return (n = 'function' == typeof n ? n : r), null == e ? e : i_(e, t, i, n);
                }),
                (rg.shuffle = function (e) {
                  return (sq(e) ? rC : iE)(e);
                }),
                (rg.slice = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n ? (i && 'number' != typeof i && nC(e, t, i) ? ((t = 0), (i = n)) : ((t = null == t ? 0 : ot(t)), (i = i === r ? n : ot(i))), iD(e, t, i)) : [];
                }),
                (rg.sortBy = sE),
                (rg.sortedUniq = function (e) {
                  return e && e.length ? iP(e) : [];
                }),
                (rg.sortedUniqBy = function (e, t) {
                  return e && e.length ? iP(e, nv(t, 2)) : [];
                }),
                (rg.split = function (e, t, i) {
                  return (
                    i && 'number' != typeof i && nC(e, t, i) && (t = i = r),
                    (i = i === r ? 4294967295 : i >>> 0) ? ((e = os(e)) && ('string' == typeof t || (null != t && !s5(t))) && !(t = iA(t)) && tz(e) ? i$(tV(e), 0, i) : e.split(t, i)) : []
                  );
                }),
                (rg.spread = function (e, t) {
                  if ('function' != typeof e) throw new eO(i);
                  return (
                    (t = null == t ? 0 : t3(ot(t), 0)),
                    iy(function (r) {
                      var i = r[t],
                        n = i$(r, 0, t);
                      return i && td(n, i), ts(e, this, n);
                    })
                  );
                }),
                (rg.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? iD(e, 1, t) : [];
                }),
                (rg.take = function (e, t, i) {
                  return e && e.length ? iD(e, 0, (t = i || t === r ? 1 : ot(t)) < 0 ? 0 : t) : [];
                }),
                (rg.takeRight = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n ? iD(e, (t = n - (t = i || t === r ? 1 : ot(t))) < 0 ? 0 : t, n) : [];
                }),
                (rg.takeRightWhile = function (e, t) {
                  return e && e.length ? iR(e, nv(t, 3), !1, !0) : [];
                }),
                (rg.takeWhile = function (e, t) {
                  return e && e.length ? iR(e, nv(t, 3)) : [];
                }),
                (rg.tap = function (e, t) {
                  return t(e), e;
                }),
                (rg.throttle = function (e, t, r) {
                  var n = !0,
                    s = !0;
                  if ('function' != typeof e) throw new eO(i);
                  return sX(r) && ((n = 'leading' in r ? !!r.leading : n), (s = 'trailing' in r ? !!r.trailing : s)), sC(e, t, { leading: n, maxWait: t, trailing: s });
                }),
                (rg.thru = sh),
                (rg.toArray = s7),
                (rg.toPairs = oI),
                (rg.toPairsIn = oO),
                (rg.toPath = function (e) {
                  return sq(e) ? tp(e, nB) : s2(e) ? [e] : iG(nF(os(e)));
                }),
                (rg.toPlainObject = on),
                (rg.transform = function (e, t, r) {
                  var i = sq(e),
                    n = i || sV(e) || s8(e);
                  if (((t = nv(t, 4)), null == r)) {
                    var s = e && e.constructor;
                    r = n ? (i ? new s() : []) : sX(e) && sG(s) ? ry(eK(e)) : {};
                  }
                  return (
                    (n ? ta : rY)(e, function (e, i, n) {
                      return t(r, e, i, n);
                    }),
                    r
                  );
                }),
                (rg.unary = function (e) {
                  return sS(e, 1);
                }),
                (rg.union = n9),
                (rg.unionBy = n7),
                (rg.unionWith = se),
                (rg.uniq = function (e) {
                  return e && e.length ? ix(e) : [];
                }),
                (rg.uniqBy = function (e, t) {
                  return e && e.length ? ix(e, nv(t, 2)) : [];
                }),
                (rg.uniqWith = function (e, t) {
                  return (t = 'function' == typeof t ? t : r), e && e.length ? ix(e, r, t) : [];
                }),
                (rg.unset = function (e, t) {
                  return null == e || iN(e, t);
                }),
                (rg.unzip = st),
                (rg.unzipWith = sr),
                (rg.update = function (e, t, r) {
                  return null == e ? e : iT(e, t, ik(r));
                }),
                (rg.updateWith = function (e, t, i, n) {
                  return (n = 'function' == typeof n ? n : r), null == e ? e : iT(e, t, ik(i), n);
                }),
                (rg.values = oP),
                (rg.valuesIn = function (e) {
                  return null == e ? [] : tT(e, o_(e));
                }),
                (rg.without = si),
                (rg.words = ok),
                (rg.wrap = function (e, t) {
                  return sL(ik(t), e);
                }),
                (rg.xor = sn),
                (rg.xorBy = ss),
                (rg.xorWith = so),
                (rg.zip = sa),
                (rg.zipObject = function (e, t) {
                  return iU(e || [], t || [], rx);
                }),
                (rg.zipObjectDeep = function (e, t) {
                  return iU(e || [], t || [], i_);
                }),
                (rg.zipWith = sc),
                (rg.entries = oI),
                (rg.entriesIn = oO),
                (rg.extend = oa),
                (rg.extendWith = oc),
                oG(rg, rg),
                (rg.add = o6),
                (rg.attempt = oz),
                (rg.camelCase = oC),
                (rg.capitalize = oA),
                (rg.ceil = o2),
                (rg.clamp = function (e, t, i) {
                  return i === r && ((i = t), (t = r)), i !== r && (i = (i = oi(i)) == i ? i : 0), t !== r && (t = (t = oi(t)) == t ? t : 0), rU(oi(e), t, i);
                }),
                (rg.clone = function (e) {
                  return rM(e, 4);
                }),
                (rg.cloneDeep = function (e) {
                  return rM(e, 5);
                }),
                (rg.cloneDeepWith = function (e, t) {
                  return rM(e, 5, (t = 'function' == typeof t ? t : r));
                }),
                (rg.cloneWith = function (e, t) {
                  return rM(e, 4, (t = 'function' == typeof t ? t : r));
                }),
                (rg.conformsTo = function (e, t) {
                  return null == t || rk(e, t, om(t));
                }),
                (rg.deburr = ox),
                (rg.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (rg.divide = o8),
                (rg.endsWith = function (e, t, i) {
                  (e = os(e)), (t = iA(t));
                  var n = e.length,
                    s = (i = i === r ? n : rU(ot(i), 0, n));
                  return (i -= t.length) >= 0 && e.slice(i, s) == t;
                }),
                (rg.eq = sM),
                (rg.escape = function (e) {
                  return (e = os(e)) && H.test(e) ? e.replace($, tM) : e;
                }),
                (rg.escapeRegExp = function (e) {
                  return (e = os(e)) && J.test(e) ? e.replace(Y, '\\$&') : e;
                }),
                (rg.every = function (e, t, i) {
                  var n = sq(e) ? tu : rF;
                  return i && nC(e, t, i) && (t = r), n(e, nv(t, 3));
                }),
                (rg.find = sp),
                (rg.findIndex = nJ),
                (rg.findKey = function (e, t) {
                  return t_(e, nv(t, 3), rY);
                }),
                (rg.findLast = sd),
                (rg.findLastIndex = nX),
                (rg.findLastKey = function (e, t) {
                  return t_(e, nv(t, 3), rJ);
                }),
                (rg.floor = o4),
                (rg.forEach = sg),
                (rg.forEachRight = sy),
                (rg.forIn = function (e, t) {
                  return null == e ? e : rW(e, nv(t, 3), o_);
                }),
                (rg.forInRight = function (e, t) {
                  return null == e ? e : rG(e, nv(t, 3), o_);
                }),
                (rg.forOwn = function (e, t) {
                  return e && rY(e, nv(t, 3));
                }),
                (rg.forOwnRight = function (e, t) {
                  return e && rJ(e, nv(t, 3));
                }),
                (rg.get = op),
                (rg.gt = sk),
                (rg.gte = sz),
                (rg.has = function (e, t) {
                  return null != e && nS(e, t, r5);
                }),
                (rg.hasIn = od),
                (rg.head = nQ),
                (rg.identity = oB),
                (rg.includes = function (e, t, r, i) {
                  (e = sF(e) ? e : oP(e)), (r = r && !i ? ot(r) : 0);
                  var n = e.length;
                  return r < 0 && (r = t3(n + r, 0)), s6(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tw(e, t, r) > -1;
                }),
                (rg.indexOf = function (e, t, r) {
                  var i = null == e ? 0 : e.length;
                  if (!i) return -1;
                  var n = null == r ? 0 : ot(r);
                  return n < 0 && (n = t3(i + n, 0)), tw(e, t, n);
                }),
                (rg.inRange = function (e, t, i) {
                  var n, s, o;
                  return (t = oe(t)), i === r ? ((i = t), (t = 0)) : (i = oe(i)), (n = e = oi(e)) >= t6((s = t), (o = i)) && n < t3(s, o);
                }),
                (rg.invoke = ov),
                (rg.isArguments = s$),
                (rg.isArray = sq),
                (rg.isArrayBuffer = sH),
                (rg.isArrayLike = sF),
                (rg.isArrayLikeObject = sB),
                (rg.isBoolean = function (e) {
                  return !0 === e || !1 === e || (sZ(e) && r0(e) == l);
                }),
                (rg.isBuffer = sV),
                (rg.isDate = sK),
                (rg.isElement = function (e) {
                  return sZ(e) && 1 === e.nodeType && !s1(e);
                }),
                (rg.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (sF(e) && (sq(e) || 'string' == typeof e || 'function' == typeof e.splice || sV(e) || s8(e) || s$(e))) return !e.length;
                  var t = nD(e);
                  if (t == y || t == w) return !e.size;
                  if (nT(e)) return !it(e).length;
                  for (var r in e) if (eT.call(e, r)) return !1;
                  return !0;
                }),
                (rg.isEqual = function (e, t) {
                  return r4(e, t);
                }),
                (rg.isEqualWith = function (e, t, i) {
                  var n = (i = 'function' == typeof i ? i : r) ? i(e, t) : r;
                  return n === r ? r4(e, t, r, i) : !!n;
                }),
                (rg.isError = sW),
                (rg.isFinite = function (e) {
                  return 'number' == typeof e && t0(e);
                }),
                (rg.isFunction = sG),
                (rg.isInteger = sY),
                (rg.isLength = sJ),
                (rg.isMap = sQ),
                (rg.isMatch = function (e, t) {
                  return e === t || r9(e, t, n_(t));
                }),
                (rg.isMatchWith = function (e, t, i) {
                  return (i = 'function' == typeof i ? i : r), r9(e, t, n_(t), i);
                }),
                (rg.isNaN = function (e) {
                  return s0(e) && e != +e;
                }),
                (rg.isNative = function (e) {
                  if (nN(e)) throw new eb('Unsupported core-js use. Try https://npms.io/search?q=ponyfill.');
                  return r7(e);
                }),
                (rg.isNil = function (e) {
                  return null == e;
                }),
                (rg.isNull = function (e) {
                  return null === e;
                }),
                (rg.isNumber = s0),
                (rg.isObject = sX),
                (rg.isObjectLike = sZ),
                (rg.isPlainObject = s1),
                (rg.isRegExp = s5),
                (rg.isSafeInteger = function (e) {
                  return sY(e) && e >= -9007199254740991 && e <= 9007199254740991;
                }),
                (rg.isSet = s3),
                (rg.isString = s6),
                (rg.isSymbol = s2),
                (rg.isTypedArray = s8),
                (rg.isUndefined = function (e) {
                  return e === r;
                }),
                (rg.isWeakMap = function (e) {
                  return sZ(e) && nD(e) == S;
                }),
                (rg.isWeakSet = function (e) {
                  return sZ(e) && '[object WeakSet]' == r0(e);
                }),
                (rg.join = function (e, t) {
                  return null == e ? '' : t1.call(e, t);
                }),
                (rg.kebabCase = oN),
                (rg.last = n3),
                (rg.lastIndexOf = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  if (!n) return -1;
                  var s = n;
                  return (
                    i !== r && (s = (s = ot(i)) < 0 ? t3(n + s, 0) : t6(s, n - 1)),
                    t == t
                      ? (function (e, t, r) {
                          for (var i = r + 1; i-- && e[i] !== t; );
                          return i;
                        })(e, t, s)
                      : tb(e, tD, s, !0)
                  );
                }),
                (rg.lowerCase = oT),
                (rg.lowerFirst = oR),
                (rg.lt = s4),
                (rg.lte = s9),
                (rg.max = function (e) {
                  return e && e.length ? rB(e, oB, r1) : r;
                }),
                (rg.maxBy = function (e, t) {
                  return e && e.length ? rB(e, nv(t, 2), r1) : r;
                }),
                (rg.mean = function (e) {
                  return tS(e, oB);
                }),
                (rg.meanBy = function (e, t) {
                  return tS(e, nv(t, 2));
                }),
                (rg.min = function (e) {
                  return e && e.length ? rB(e, oB, ir) : r;
                }),
                (rg.minBy = function (e, t) {
                  return e && e.length ? rB(e, nv(t, 2), ir) : r;
                }),
                (rg.stubArray = o5),
                (rg.stubFalse = o3),
                (rg.stubObject = function () {
                  return {};
                }),
                (rg.stubString = function () {
                  return '';
                }),
                (rg.stubTrue = function () {
                  return !0;
                }),
                (rg.multiply = o9),
                (rg.nth = function (e, t) {
                  return e && e.length ? ic(e, ot(t)) : r;
                }),
                (rg.noConflict = function () {
                  return e3._ === this && (e3._ = eM), this;
                }),
                (rg.noop = oY),
                (rg.now = sD),
                (rg.pad = function (e, t, r) {
                  e = os(e);
                  var i = (t = ot(t)) ? tB(e) : 0;
                  if (!t || i >= t) return e;
                  var n = (t - i) / 2;
                  return i7(tX(n), r) + e + i7(tJ(n), r);
                }),
                (rg.padEnd = function (e, t, r) {
                  e = os(e);
                  var i = (t = ot(t)) ? tB(e) : 0;
                  return t && i < t ? e + i7(t - i, r) : e;
                }),
                (rg.padStart = function (e, t, r) {
                  e = os(e);
                  var i = (t = ot(t)) ? tB(e) : 0;
                  return t && i < t ? i7(t - i, r) + e : e;
                }),
                (rg.parseInt = function (e, t, r) {
                  return r || null == t ? (t = 0) : t && (t = +t), t8(os(e).replace(X, ''), t || 0);
                }),
                (rg.random = function (e, t, i) {
                  if (
                    (i && 'boolean' != typeof i && nC(e, t, i) && (t = i = r),
                    i === r && ('boolean' == typeof t ? ((i = t), (t = r)) : 'boolean' == typeof e && ((i = e), (e = r))),
                    e === r && t === r ? ((e = 0), (t = 1)) : ((e = oe(e)), t === r ? ((t = e), (e = 0)) : (t = oe(t))),
                    e > t)
                  ) {
                    var n = e;
                    (e = t), (t = n);
                  }
                  if (i || e % 1 || t % 1) {
                    var s = t4();
                    return t6(e + s * (t - e + eQ('1e-' + ((s + '').length - 1))), t);
                  }
                  return id(e, t);
                }),
                (rg.reduce = function (e, t, r) {
                  var i = sq(e) ? tg : tP,
                    n = arguments.length < 3;
                  return i(e, nv(t, 4), r, n, rq);
                }),
                (rg.reduceRight = function (e, t, r) {
                  var i = sq(e) ? ty : tP,
                    n = arguments.length < 3;
                  return i(e, nv(t, 4), r, n, rH);
                }),
                (rg.repeat = function (e, t, i) {
                  return (t = (i ? nC(e, t, i) : t === r) ? 1 : ot(t)), ig(os(e), t);
                }),
                (rg.replace = function () {
                  var e = arguments,
                    t = os(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (rg.result = function (e, t, i) {
                  t = iz(t, e);
                  var n = -1,
                    s = t.length;
                  for (s || ((s = 1), (e = r)); ++n < s; ) {
                    var o = null == e ? r : e[nB(t[n])];
                    o === r && ((n = s), (o = i)), (e = sG(o) ? o.call(e) : o);
                  }
                  return e;
                }),
                (rg.round = o7),
                (rg.runInContext = e),
                (rg.sample = function (e) {
                  return (sq(e) ? rO : iv)(e);
                }),
                (rg.size = function (e) {
                  if (null == e) return 0;
                  if (sF(e)) return s6(e) ? tB(e) : e.length;
                  var t = nD(e);
                  return t == y || t == w ? e.size : it(e).length;
                }),
                (rg.snakeCase = oL),
                (rg.some = function (e, t, i) {
                  var n = sq(e) ? tv : iS;
                  return i && nC(e, t, i) && (t = r), n(e, nv(t, 3));
                }),
                (rg.sortedIndex = function (e, t) {
                  return iI(e, t);
                }),
                (rg.sortedIndexBy = function (e, t, r) {
                  return iO(e, t, nv(r, 2));
                }),
                (rg.sortedIndexOf = function (e, t) {
                  var r = null == e ? 0 : e.length;
                  if (r) {
                    var i = iI(e, t);
                    if (i < r && sM(e[i], t)) return i;
                  }
                  return -1;
                }),
                (rg.sortedLastIndex = function (e, t) {
                  return iI(e, t, !0);
                }),
                (rg.sortedLastIndexBy = function (e, t, r) {
                  return iO(e, t, nv(r, 2), !0);
                }),
                (rg.sortedLastIndexOf = function (e, t) {
                  if (null == e ? 0 : e.length) {
                    var r = iI(e, t, !0) - 1;
                    if (sM(e[r], t)) return r;
                  }
                  return -1;
                }),
                (rg.startCase = oj),
                (rg.startsWith = function (e, t, r) {
                  return (e = os(e)), (r = null == r ? 0 : rU(ot(r), 0, e.length)), (t = iA(t)), e.slice(r, r + t.length) == t;
                }),
                (rg.subtract = ae),
                (rg.sum = function (e) {
                  return e && e.length ? tC(e, oB) : 0;
                }),
                (rg.sumBy = function (e, t) {
                  return e && e.length ? tC(e, nv(t, 2)) : 0;
                }),
                (rg.template = function (e, t, i) {
                  var n = rg.templateSettings;
                  i && nC(e, t, i) && (t = r), (e = os(e)), (t = oc({}, t, n, na));
                  var s,
                    o,
                    a = oc({}, t.imports, n.imports, na),
                    c = om(a),
                    u = tT(a, c),
                    h = 0,
                    l = t.interpolate || ep,
                    f = "__p += '",
                    p = eS((t.escape || ep).source + '|' + l.source + '|' + (l === V ? es : ep).source + '|' + (t.evaluate || ep).source + '|$', 'g'),
                    d =
                      '//# sourceURL=' +
                      (eT.call(t, 'sourceURL') ? (t.sourceURL + '').replace(/\s/g, ' ') : 'lodash.templateSources[' + ++eY + ']') +
                      `
`;
                  e.replace(p, function (t, r, i, n, a, c) {
                    return (
                      i || (i = n),
                      (f += e.slice(h, c).replace(ed, tk)),
                      r &&
                        ((s = !0),
                        (f +=
                          `' +
__e(` +
                          r +
                          `) +
'`)),
                      a &&
                        ((o = !0),
                        (f +=
                          `';
` +
                          a +
                          `;
__p += '`)),
                      i &&
                        (f +=
                          `' +
((__t = (` +
                          i +
                          `)) == null ? '' : __t) +
'`),
                      (h = c + t.length),
                      t
                    );
                  }),
                    (f += `';
`);
                  var g = eT.call(t, 'variable') && t.variable;
                  if (g) {
                    if (ei.test(g)) throw new eb('Invalid `variable` option passed into `_.template`');
                  } else
                    f =
                      `with (obj) {
` +
                      f +
                      `
}
`;
                  (f = (o ? f.replace(U, '') : f).replace(M, '$1').replace(k, '$1;')),
                    (f =
                      'function(' +
                      (g || 'obj') +
                      `) {
` +
                      (g
                        ? ''
                        : `obj || (obj = {});
`) +
                      "var __t, __p = ''" +
                      (s ? ', __e = _.escape' : '') +
                      (o
                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                        : `;
`) +
                      f +
                      `return __p
}`);
                  var y = oz(function () {
                    return ew(c, d + 'return ' + f).apply(r, u);
                  });
                  if (((y.source = f), sW(y))) throw y;
                  return y;
                }),
                (rg.times = function (e, t) {
                  if ((e = ot(e)) < 1 || e > 9007199254740991) return [];
                  var r = 4294967295,
                    i = t6(e, 4294967295);
                  (t = nv(t)), (e -= 4294967295);
                  for (var n = tA(i, t); ++r < e; ) t(r);
                  return n;
                }),
                (rg.toFinite = oe),
                (rg.toInteger = ot),
                (rg.toLength = or),
                (rg.toLower = function (e) {
                  return os(e).toLowerCase();
                }),
                (rg.toNumber = oi),
                (rg.toSafeInteger = function (e) {
                  return e ? rU(ot(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0;
                }),
                (rg.toString = os),
                (rg.toUpper = function (e) {
                  return os(e).toUpperCase();
                }),
                (rg.trim = function (e, t, i) {
                  if ((e = os(e)) && (i || t === r)) return tx(e);
                  if (!e || !(t = iA(t))) return e;
                  var n = tV(e),
                    s = tV(t),
                    o = tL(n, s),
                    a = tj(n, s) + 1;
                  return i$(n, o, a).join('');
                }),
                (rg.trimEnd = function (e, t, i) {
                  if ((e = os(e)) && (i || t === r)) return e.slice(0, tK(e) + 1);
                  if (!e || !(t = iA(t))) return e;
                  var n = tV(e),
                    s = tj(n, tV(t)) + 1;
                  return i$(n, 0, s).join('');
                }),
                (rg.trimStart = function (e, t, i) {
                  if ((e = os(e)) && (i || t === r)) return e.replace(X, '');
                  if (!e || !(t = iA(t))) return e;
                  var n = tV(e),
                    s = tL(n, tV(t));
                  return i$(n, s).join('');
                }),
                (rg.truncate = function (e, t) {
                  var i = 30,
                    n = '...';
                  if (sX(t)) {
                    var s = 'separator' in t ? t.separator : s;
                    (i = 'length' in t ? ot(t.length) : i), (n = 'omission' in t ? iA(t.omission) : n);
                  }
                  var o = (e = os(e)).length;
                  if (tz(e)) {
                    var a = tV(e);
                    o = a.length;
                  }
                  if (i >= o) return e;
                  var c = i - tB(n);
                  if (c < 1) return n;
                  var u = a ? i$(a, 0, c).join('') : e.slice(0, c);
                  if (s === r) return u + n;
                  if ((a && (c += u.length - c), s5(s))) {
                    if (e.slice(c).search(s)) {
                      var h,
                        l = u;
                      for (s.global || (s = eS(s.source, os(eo.exec(s)) + 'g')), s.lastIndex = 0; (h = s.exec(l)); ) var f = h.index;
                      u = u.slice(0, f === r ? c : f);
                    }
                  } else if (e.indexOf(iA(s), c) != c) {
                    var p = u.lastIndexOf(s);
                    p > -1 && (u = u.slice(0, p));
                  }
                  return u + n;
                }),
                (rg.unescape = function (e) {
                  return (e = os(e)) && q.test(e) ? e.replace(z, tW) : e;
                }),
                (rg.uniqueId = function (e) {
                  var t = ++eR;
                  return os(e) + t;
                }),
                (rg.upperCase = oU),
                (rg.upperFirst = oM),
                (rg.each = sg),
                (rg.eachRight = sy),
                (rg.first = nQ),
                oG(
                  rg,
                  ((ev = {}),
                  rY(rg, function (e, t) {
                    eT.call(rg.prototype, t) || (ev[t] = e);
                  }),
                  ev),
                  { chain: !1 }
                ),
                (rg.VERSION = '4.17.21'),
                ta(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (e) {
                  rg[e].placeholder = rg;
                }),
                ta(['drop', 'take'], function (e, t) {
                  (r_.prototype[e] = function (i) {
                    i = i === r ? 1 : t3(ot(i), 0);
                    var n = this.__filtered__ && !t ? new r_(this) : this.clone();
                    return n.__filtered__ ? (n.__takeCount__ = t6(i, n.__takeCount__)) : n.__views__.push({ size: t6(i, 4294967295), type: e + (n.__dir__ < 0 ? 'Right' : '') }), n;
                  }),
                    (r_.prototype[e + 'Right'] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                ta(['filter', 'map', 'takeWhile'], function (e, t) {
                  var r = t + 1,
                    i = 1 == r || 3 == r;
                  r_.prototype[e] = function (e) {
                    var t = this.clone();
                    return t.__iteratees__.push({ iteratee: nv(e, 3), type: r }), (t.__filtered__ = t.__filtered__ || i), t;
                  };
                }),
                ta(['head', 'last'], function (e, t) {
                  var r = 'take' + (t ? 'Right' : '');
                  r_.prototype[e] = function () {
                    return this[r](1).value()[0];
                  };
                }),
                ta(['initial', 'tail'], function (e, t) {
                  var r = 'drop' + (t ? '' : 'Right');
                  r_.prototype[e] = function () {
                    return this.__filtered__ ? new r_(this) : this[r](1);
                  };
                }),
                (r_.prototype.compact = function () {
                  return this.filter(oB);
                }),
                (r_.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (r_.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (r_.prototype.invokeMap = iy(function (e, t) {
                  return 'function' == typeof e
                    ? new r_(this)
                    : this.map(function (r) {
                        return r2(r, e, t);
                      });
                })),
                (r_.prototype.reject = function (e) {
                  return this.filter(sT(nv(e)));
                }),
                (r_.prototype.slice = function (e, t) {
                  e = ot(e);
                  var i = this;
                  return i.__filtered__ && (e > 0 || t < 0) ? new r_(i) : (e < 0 ? (i = i.takeRight(-e)) : e && (i = i.drop(e)), t !== r && (i = (t = ot(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i);
                }),
                (r_.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (r_.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                rY(r_.prototype, function (e, t) {
                  var i = /^(?:filter|find|map|reject)|While$/.test(t),
                    n = /^(?:head|last)$/.test(t),
                    s = rg[n ? 'take' + ('last' == t ? 'Right' : '') : t],
                    o = n || /^find/.test(t);
                  s &&
                    (rg.prototype[t] = function () {
                      var t = this.__wrapped__,
                        a = n ? [1] : arguments,
                        c = t instanceof r_,
                        u = a[0],
                        h = c || sq(t),
                        l = function (e) {
                          var t = s.apply(rg, td([e], a));
                          return n && f ? t[0] : t;
                        };
                      h && i && 'function' == typeof u && 1 != u.length && (c = h = !1);
                      var f = this.__chain__,
                        p = !!this.__actions__.length,
                        d = o && !f,
                        g = c && !p;
                      if (!o && h) {
                        t = g ? t : new r_(this);
                        var y = e.apply(t, a);
                        return y.__actions__.push({ func: sh, args: [l], thisArg: r }), new rm(y, f);
                      }
                      return d && g ? e.apply(this, a) : ((y = this.thru(l)), d ? (n ? y.value()[0] : y.value()) : y);
                    });
                }),
                ta(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (e) {
                  var t = eP[e],
                    r = /^(?:push|sort|unshift)$/.test(e) ? 'tap' : 'thru',
                    i = /^(?:pop|shift)$/.test(e);
                  rg.prototype[e] = function () {
                    var e = arguments;
                    if (i && !this.__chain__) {
                      var n = this.value();
                      return t.apply(sq(n) ? n : [], e);
                    }
                    return this[r](function (r) {
                      return t.apply(sq(r) ? r : [], e);
                    });
                  };
                }),
                rY(r_.prototype, function (e, t) {
                  var r = rg[t];
                  if (r) {
                    var i = r.name + '';
                    eT.call(ro, i) || (ro[i] = []), ro[i].push({ name: t, func: r });
                  }
                }),
                (ro[i2(r, 2).name] = [{ name: 'wrapper', func: r }]),
                (r_.prototype.clone = function () {
                  var e = new r_(this.__wrapped__);
                  return (
                    (e.__actions__ = iG(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = iG(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = iG(this.__views__)),
                    e
                  );
                }),
                (r_.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new r_(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()), (e.__dir__ *= -1);
                  return e;
                }),
                (r_.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    r = sq(e),
                    i = t < 0,
                    n = r ? e.length : 0,
                    s = (function (e, t, r) {
                      for (var i = -1, n = r.length; ++i < n; ) {
                        var s = r[i],
                          o = s.size;
                        switch (s.type) {
                          case 'drop':
                            e += o;
                            break;
                          case 'dropRight':
                            t -= o;
                            break;
                          case 'take':
                            t = t6(t, e + o);
                            break;
                          case 'takeRight':
                            e = t3(e, t - o);
                        }
                      }
                      return { start: e, end: t };
                    })(0, n, this.__views__),
                    o = s.start,
                    a = s.end,
                    c = a - o,
                    u = i ? a : o - 1,
                    h = this.__iteratees__,
                    l = h.length,
                    f = 0,
                    p = t6(c, this.__takeCount__);
                  if (!r || (!i && n == c && p == c)) return iL(e, this.__actions__);
                  var d = [];
                  e: for (; c-- && f < p; ) {
                    u += t;
                    for (var g = -1, y = e[u]; ++g < l; ) {
                      var v = h[g],
                        m = v.iteratee,
                        _ = v.type,
                        b = m(y);
                      if (2 == _) y = b;
                      else if (!b) {
                        if (1 == _) continue e;
                        break e;
                      }
                    }
                    d[f++] = y;
                  }
                  return d;
                }),
                (rg.prototype.at = sl),
                (rg.prototype.chain = function () {
                  return su(this);
                }),
                (rg.prototype.commit = function () {
                  return new rm(this.value(), this.__chain__);
                }),
                (rg.prototype.next = function () {
                  this.__values__ === r && (this.__values__ = s7(this.value()));
                  var e = this.__index__ >= this.__values__.length,
                    t = e ? r : this.__values__[this.__index__++];
                  return { done: e, value: t };
                }),
                (rg.prototype.plant = function (e) {
                  for (var t, i = this; i instanceof rv; ) {
                    var n = nK(i);
                    (n.__index__ = 0), (n.__values__ = r), t ? (s.__wrapped__ = n) : (t = n);
                    var s = n;
                    i = i.__wrapped__;
                  }
                  return (s.__wrapped__ = e), t;
                }),
                (rg.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof r_) {
                    var t = e;
                    return this.__actions__.length && (t = new r_(this)), (t = t.reverse()).__actions__.push({ func: sh, args: [n4], thisArg: r }), new rm(t, this.__chain__);
                  }
                  return this.thru(n4);
                }),
                (rg.prototype.toJSON =
                  rg.prototype.valueOf =
                  rg.prototype.value =
                    function () {
                      return iL(this.__wrapped__, this.__actions__);
                    }),
                (rg.prototype.first = rg.prototype.head),
                e2 &&
                  (rg.prototype[e2] = function () {
                    return this;
                  }),
                rg
              );
            })();
          e2 ? (((e2.exports = tG)._ = tG), (e6._ = tG)) : (e3._ = tG);
        }).call(sU);
      })(sM, sM.exports);
      var sk = Object.defineProperty,
        sz = Object.defineProperties,
        s$ = Object.getOwnPropertyDescriptors,
        sq = Object.getOwnPropertySymbols,
        sH = Object.prototype.hasOwnProperty,
        sF = Object.prototype.propertyIsEnumerable,
        sB = (e, t, r) => (t in e ? sk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        sV = (e, t) => {
          for (var r in t || (t = {})) sH.call(t, r) && sB(e, r, t[r]);
          if (sq) for (var r of sq(t)) sF.call(t, r) && sB(e, r, t[r]);
          return e;
        },
        sK = (e, t) => sz(e, s$(t));
      function sW(e, t, r) {
        let i;
        let n = sG(e);
        return t.rpcMap && (i = t.rpcMap[n]), i || (i = `https://rpc.walletconnect.com/v1?chainId=eip155:${n}&projectId=${r}`), i;
      }
      function sG(e) {
        return e.includes('eip155') ? Number(e.split(':')[1]) : Number(e);
      }
      function sY(e) {
        var t, r, i, n;
        let s = {};
        if (!t7(e)) return s;
        for (let [o, a] of Object.entries(e)) {
          let e = t5(o) ? [o] : a.chains,
            c = a.methods || [],
            u = a.events || [],
            h = a.rpcMap || {},
            l = t3(o);
          s[l] = sK(sV(sV({}, s[l]), a), {
            chains: tV(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: tV(c, null == (r = s[l]) ? void 0 : r.methods),
            events: tV(u, null == (i = s[l]) ? void 0 : i.events),
            rpcMap: sV(sV({}, h), null == (n = s[l]) ? void 0 : n.rpcMap),
          });
        }
        return s;
      }
      let sJ = {},
        sX = (e) => sJ[e],
        sZ = (e, t) => {
          sJ[e] = t;
        };
      class sQ {
        constructor(e) {
          (this.name = 'polkadot'), (this.namespace = e.namespace), (this.events = sX('events')), (this.client = sX('client')), (this.chainId = this.getDefaultChain()), (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let r = t || sW(`${this.name}:${e}`, this.namespace);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(sj.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (e && e.filter((e) => e.split(':')[1] === this.chainId.toString()).map((e) => e.split(':')[2])) || [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t]);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || sW(e, this.namespace);
          return typeof r > 'u' ? void 0 : new r4(new sT(r, sX('disableProviderPing')));
        }
      }
      class s0 {
        constructor(e) {
          (this.name = 'eip155'), (this.namespace = e.namespace), (this.events = sX('events')), (this.client = sX('client')), (this.httpProviders = this.createHttpProviders()), (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case 'eth_requestAccounts':
            case 'eth_accounts':
              return this.getAccounts();
            case 'wallet_switchEthereumChain':
              return await this.handleSwitchChain(e);
            case 'eth_chainId':
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          let r = sG(e);
          if (!this.httpProviders[r]) {
            let e = t || sW(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
            if (!e) throw Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, e);
          }
          (this.chainId = r), this.events.emit(sj.DEFAULT_CHAIN_CHANGED, `${this.name}:${r}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        createHttpProvider(e, t) {
          let r = t || sW(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          return typeof r > 'u' ? void 0 : new r4(new sT(r, sX('disableProviderPing')));
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = sG(t);
              e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t]);
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e ? [...new Set(e.filter((e) => e.split(':')[1] === this.chainId.toString()).map((e) => e.split(':')[2]))] : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t;
          let r = e.request.params ? (null == (t = e.request.params[0]) ? void 0 : t.chainId) : '0x0';
          r = r.startsWith('0x') ? r : `0x${r}`;
          let i = parseInt(r, 16);
          if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
          else if (this.namespace.methods.includes('wallet_switchEthereumChain'))
            await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: r }] }, chainId: e.chainId }), this.setDefaultChain(`${i}`);
          else throw Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
      }
      class s1 {
        constructor(e) {
          (this.name = 'solana'), (this.namespace = e.namespace), (this.events = sX('events')), (this.client = sX('client')), (this.chainId = this.getDefaultChain()), (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let r = t || sW(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e), this.events.emit(sj.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e ? [...new Set(e.filter((e) => e.split(':')[1] === this.chainId.toString()).map((e) => e.split(':')[2]))] : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t]);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || sW(e, this.namespace, this.client.core.projectId);
          return typeof r > 'u' ? void 0 : new r4(new sT(r, sX('disableProviderPing')));
        }
      }
      class s5 {
        constructor(e) {
          (this.name = 'cosmos'), (this.namespace = e.namespace), (this.events = sX('events')), (this.client = sX('client')), (this.chainId = this.getDefaultChain()), (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let r = t || sW(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(sj.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e ? [...new Set(e.filter((e) => e.split(':')[1] === this.chainId.toString()).map((e) => e.split(':')[2]))] : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t]);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || sW(e, this.namespace, this.client.core.projectId);
          return typeof r > 'u' ? void 0 : new r4(new sT(r, sX('disableProviderPing')));
        }
      }
      class s3 {
        constructor(e) {
          (this.name = 'cip34'), (this.namespace = e.namespace), (this.events = sX('events')), (this.client = sX('client')), (this.chainId = this.getDefaultChain()), (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let r = t || this.getCardanoRPCUrl(e);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(sj.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e ? [...new Set(e.filter((e) => e.split(':')[1] === this.chainId.toString()).map((e) => e.split(':')[2]))] : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let r = this.getCardanoRPCUrl(t);
              e[t] = this.createHttpProvider(t, r);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || this.getCardanoRPCUrl(e);
          return typeof r > 'u' ? void 0 : new r4(new sT(r, sX('disableProviderPing')));
        }
      }
      class s6 {
        constructor(e) {
          (this.name = 'elrond'), (this.namespace = e.namespace), (this.events = sX('events')), (this.client = sX('client')), (this.chainId = this.getDefaultChain()), (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let r = t || sW(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e), this.events.emit(sj.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e ? [...new Set(e.filter((e) => e.split(':')[1] === this.chainId.toString()).map((e) => e.split(':')[2]))] : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t]);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || sW(e, this.namespace, this.client.core.projectId);
          return typeof r > 'u' ? void 0 : new r4(new sT(r, sX('disableProviderPing')));
        }
      }
      class s2 {
        constructor(e) {
          (this.name = 'multiversx'), (this.namespace = e.namespace), (this.events = sX('events')), (this.client = sX('client')), (this.chainId = this.getDefaultChain()), (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let r = t || sW(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e), this.events.emit(sj.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e ? [...new Set(e.filter((e) => e.split(':')[1] === this.chainId.toString()).map((e) => e.split(':')[2]))] : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t]);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || sW(e, this.namespace, this.client.core.projectId);
          return typeof r > 'u' ? void 0 : new r4(new sT(r, sX('disableProviderPing')));
        }
      }
      var s8 = Object.defineProperty,
        s4 = Object.defineProperties,
        s9 = Object.getOwnPropertyDescriptors,
        s7 = Object.getOwnPropertySymbols,
        oe = Object.prototype.hasOwnProperty,
        ot = Object.prototype.propertyIsEnumerable,
        or = (e, t, r) => (t in e ? s8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        oi = (e, t) => {
          for (var r in t || (t = {})) oe.call(t, r) && or(e, r, t[r]);
          if (s7) for (var r of s7(t)) ot.call(t, r) && or(e, r, t[r]);
          return e;
        },
        on = (e, t) => s4(e, s9(t));
      class os {
        constructor(e) {
          (this.events = new (m())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger = 'u' > typeof e?.logger && 'string' != typeof e?.logger ? e.logger : (0, rd.pino)((0, rd.getDefaultLoggerOptions)({ level: e?.logger || sR }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new os(e);
          return await t.initialize(), t;
        }
        async request(e, t) {
          let [r, i] = this.validateChain(t);
          if (!this.session) throw Error('Please call connect() before request()');
          return await this.getProvider(r).request({ request: oi({}, e), chainId: `${r}:${i}`, topic: this.session.topic });
        }
        sendAsync(e, t, r) {
          this.request(e, r)
            .then((e) => t(null, e))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error('Sign Client not initialized');
          return this.session || (await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties })), await this.requestAccounts();
        }
        async disconnect() {
          var e;
          if (!this.session) throw Error('Please call connect() before enable()');
          await this.client.disconnect({ topic: null == (e = this.session) ? void 0 : e.topic, reason: t4('USER_DISCONNECTED') }), await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error('Sign Client not initialized');
          if ((this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing)) return await this.pair(e.pairingTopic);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error('Pairing aborted');
            if (t >= this.maxPairingAttempts) throw Error('Max auto pairing attempts reached');
            let { uri: r, approval: i } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
            r && ((this.uri = r), this.events.emit('display_uri', r)),
              await i()
                .then((e) => {
                  this.session = e;
                })
                .catch((e) => {
                  if (e.message !== sh) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            let [r, i] = this.validateChain(e);
            this.getProvider(r).setDefaultChain(i, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info('Cleaning up inactive pairings...');
          let t = this.client.pairing.getAll();
          if (t9(t)) {
            for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (((this.namespaces = (await this.getFromStore('namespaces')) || {}), (this.optionalNamespaces = (await this.getFromStore('optionalNamespaces')) || {}), this.client.session.length)) {
            let e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(this.client.session.keys[e])), this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace('Initialized'), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await sC.init({
              logger: this.providerOpts.logger || sR,
              relayUrl: this.providerOpts.relayUrl || 'wss://relay.walletconnect.com',
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              name: this.providerOpts.name,
            }))),
            this.logger.trace('SignClient Initialized');
        }
        createProviders() {
          if (!this.client) throw Error('Sign Client not initialized');
          if (!this.session) throw Error('Session not initialized. Please call connect() before enable()');
          let e = [...new Set(Object.keys(this.session.namespaces).map((e) => t3(e)))];
          sZ('client', this.client),
            sZ('events', this.events),
            sZ('disableProviderPing', this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let r = Object.keys(t.namespaces).filter((t) => t.includes(e));
                  if (!r.length) return [];
                  let i = [];
                  return (
                    r.forEach((e) => {
                      let r = t.namespaces[e].accounts;
                      i.push(...r);
                    }),
                    i
                  );
                })(e, this.session),
                r = t.map((e) => `${e.split(':')[0]}:${e.split(':')[1]}`),
                i = (function (e, t = {}) {
                  let r = sY(e),
                    i = sY(t);
                  return sM.exports.merge(r, i);
                })(this.namespaces, this.optionalNamespaces),
                n = on(oi({}, i[e]), { accounts: t, chains: r });
              switch (e) {
                case 'eip155':
                  this.rpcProviders[e] = new s0({ namespace: n });
                  break;
                case 'solana':
                  this.rpcProviders[e] = new s1({ namespace: n });
                  break;
                case 'cosmos':
                  this.rpcProviders[e] = new s5({ namespace: n });
                  break;
                case 'polkadot':
                  this.rpcProviders[e] = new sQ({ namespace: n });
                  break;
                case 'cip34':
                  this.rpcProviders[e] = new s3({ namespace: n });
                  break;
                case 'elrond':
                  this.rpcProviders[e] = new s6({ namespace: n });
                  break;
                case 'multiversx':
                  this.rpcProviders[e] = new s2({ namespace: n });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > 'u') throw Error('Sign Client is not initialized');
          this.client.on('session_ping', (e) => {
            this.events.emit('session_ping', e);
          }),
            this.client.on('session_event', (e) => {
              let { params: t } = e,
                { event: r } = t;
              'accountsChanged' === r.name ? this.events.emit('accountsChanged', r.data) : 'chainChanged' === r.name ? this.onChainChanged(t.chainId) : this.events.emit(r.name, r.data), this.events.emit('session_event', e);
            }),
            this.client.on('session_update', ({ topic: e, params: t }) => {
              var r;
              let { namespaces: i } = t,
                n = null == (r = this.client) ? void 0 : r.session.get(e);
              (this.session = on(oi({}, n), { namespaces: i })), this.onSessionUpdate(), this.events.emit('session_update', { topic: e, params: t });
            }),
            this.client.on('session_delete', async (e) => {
              await this.cleanup(), this.events.emit('session_delete', e), this.events.emit('disconnect', on(oi({}, t4('USER_DISCONNECTED')), { data: e.topic }));
            }),
            this.on(sj.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
          return this.rpcProviders[e];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e]);
          });
        }
        setNamespaces(e) {
          let { namespaces: t, optionalNamespaces: r, sessionProperties: i } = e;
          if (!t || !Object.keys(t).length) throw Error('Namespaces must be not empty');
          (this.namespaces = t), (this.optionalNamespaces = r), (this.sessionProperties = i), this.persist('namespaces', t), this.persist('optionalNamespaces', r);
        }
        validateChain(e) {
          let [t, r] = e?.split(':') || ['', ''];
          if (
            t &&
            !Object.keys(this.namespaces)
              .map((e) => t3(e))
              .includes(t)
          )
            throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
          if (t && r) return [t, r];
          let i = t3(Object.keys(this.namespaces)[0]),
            n = this.rpcProviders[i].getDefaultChain();
          return [i, n];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, t = !1) {
          var r;
          let [i, n] = this.validateChain(e);
          t || this.getProvider(i).setDefaultChain(n), ((null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n), this.persist('namespaces', this.namespaces), this.events.emit('chainChanged', n);
        }
        onConnect() {
          this.createProviders(), this.events.emit('connect', { session: this.session });
        }
        async cleanup() {
          (this.session = void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${sL}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${sL}/${e}`);
        }
      }
      let oo = ['eth_sendTransaction', 'personal_sign'],
        oa = [
          'eth_accounts',
          'eth_requestAccounts',
          'eth_sendRawTransaction',
          'eth_sign',
          'eth_signTransaction',
          'eth_signTypedData',
          'eth_signTypedData_v3',
          'eth_signTypedData_v4',
          'wallet_switchEthereumChain',
          'wallet_addEthereumChain',
          'wallet_getPermissions',
          'wallet_requestPermissions',
          'wallet_registerOnboarding',
          'wallet_watchAsset',
          'wallet_scanQRCode',
        ],
        oc = ['chainChanged', 'accountsChanged'],
        ou = ['message', 'disconnect', 'connect'];
      var oh = Object.defineProperty,
        ol = Object.defineProperties,
        of = Object.getOwnPropertyDescriptors,
        op = Object.getOwnPropertySymbols,
        od = Object.prototype.hasOwnProperty,
        og = Object.prototype.propertyIsEnumerable,
        oy = (e, t, r) => (t in e ? oh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        ov = (e, t) => {
          for (var r in t || (t = {})) od.call(t, r) && oy(e, r, t[r]);
          if (op) for (var r of op(t)) og.call(t, r) && oy(e, r, t[r]);
          return e;
        },
        om = (e, t) => ol(e, of(t));
      function o_(e) {
        return Number(e[0].split(':')[1]);
      }
      function ob(e) {
        return `0x${e.toString(16)}`;
      }
      class ow {
        constructor() {
          (this.events = new v.EventEmitter()),
            (this.namespace = 'eip155'),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = 'wc@2:ethereum_provider:'),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (this.events.removeListener(e, t), this)),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) => (this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e)),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new ow();
          return await t.initialize(e), t;
        }
        async request(e) {
          return await this.signer.request(e, this.formatChainId(this.chainId));
        }
        sendAsync(e, t) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId));
        }
        get connected() {
          return !!this.signer.client && this.signer.client.core.relayer.connected;
        }
        get connecting() {
          return !!this.signer.client && this.signer.client.core.relayer.connecting;
        }
        async enable() {
          return this.session || (await this.connect()), await this.request({ method: 'eth_requestAccounts' });
        }
        async connect(e) {
          if (!this.signer.client) throw Error('Provider not initialized. Call init() first');
          this.loadConnectOpts(e);
          let { required: t, optional: r } = (function (e) {
            let { chains: t, optionalChains: r, methods: i, optionalMethods: n, events: s, optionalEvents: o, rpcMap: a } = e;
            if (!t9(t)) throw Error('Invalid chains');
            let c = i || oo,
              u = s || oc,
              h = { [o_(t)]: a[o_(t)] },
              l = { chains: t, methods: c, events: u, rpcMap: h },
              f = s?.filter((e) => !oc.includes(e)),
              p = i?.filter((e) => !oo.includes(e));
            if (!r && !o && !n && !(null != f && f.length) && !(null != p && p.length)) return { required: l };
            let d = (f?.length && p?.length) || !r,
              g = { chains: [...new Set(d ? t.concat(r || []) : r)], methods: [...new Set(c.concat(n || []))], events: [...new Set(u.concat(o || []))], rpcMap: a };
            return { required: l, optional: g };
          })(this.rpc);
          try {
            let i = await new Promise(async (i, n) => {
              var s;
              this.rpc.showQrModal &&
                (null == (s = this.modal) ||
                  s.subscribeModal((e) => {
                    e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error('Connection request reset. Please try again.')));
                  })),
                await this.signer
                  .connect(om(ov({ namespaces: { [this.namespace]: t } }, r && { optionalNamespaces: { [this.namespace]: r } }), { pairingTopic: e?.pairingTopic }))
                  .then((e) => {
                    i(e);
                  })
                  .catch((e) => {
                    n(Error(e.message));
                  });
            });
            if (!i) return;
            this.setChainIds(this.rpc.chains);
            let n = (function (e, t = []) {
              let r = [];
              return (
                Object.keys(e).forEach((i) => {
                  if (t.length && !t.includes(i)) return;
                  let n = e[i];
                  r.push(...n.accounts);
                }),
                r
              );
            })(i.namespaces, [this.namespace]);
            this.setAccounts(n), this.events.emit('connect', { chainId: ob(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on('session_event', (e) => {
            let { params: t } = e,
              { event: r } = t;
            'accountsChanged' === r.name
              ? ((this.accounts = this.parseAccounts(r.data)), this.events.emit('accountsChanged', this.accounts))
              : 'chainChanged' === r.name
              ? this.setChainId(this.formatChainId(r.data))
              : this.events.emit(r.name, r.data),
              this.events.emit('session_event', e);
          }),
            this.signer.on('chainChanged', (e) => {
              let t = parseInt(e);
              (this.chainId = t), this.events.emit('chainChanged', ob(this.chainId)), this.persist();
            }),
            this.signer.on('session_update', (e) => {
              this.events.emit('session_update', e);
            }),
            this.signer.on('session_delete', (e) => {
              this.reset(), this.events.emit('session_delete', e), this.events.emit('disconnect', om(ov({}, t4('USER_DISCONNECTED')), { data: e.topic, name: 'USER_DISCONNECTED' }));
            }),
            this.signer.on('display_uri', (e) => {
              var t, r;
              this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({ uri: e })), this.events.emit('display_uri', e);
            });
        }
        switchEthereumChain(e) {
          this.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: e.toString(16) }] });
        }
        isCompatibleChainId(e) {
          return 'string' == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(':')[1]);
        }
        setChainIds(e) {
          let t = e.filter((e) => this.isCompatibleChainId(e)).map((e) => this.parseChainId(e));
          t.length && ((this.chainId = t[0]), this.events.emit('chainChanged', ob(this.chainId)), this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, r, i] = e.split(':');
          return { chainId: `${t}:${r}`, address: i };
        }
        setAccounts(e) {
          (this.accounts = e.filter((e) => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map((e) => this.parseAccountId(e).address)), this.events.emit('accountsChanged', this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          return {
            chains: (null == (t = e.chains) ? void 0 : t.map((e) => this.formatChainId(e))) || [`${this.namespace}:1`],
            optionalChains: e.optionalChains ? e.optionalChains.map((e) => this.formatChainId(e)) : void 0,
            methods: e?.methods || oo,
            events: e?.events || oc,
            optionalMethods: e?.optionalMethods || [],
            optionalEvents: e?.optionalEvents || [],
            rpcMap: e?.rpcMap || this.buildRpcMap(e.chains.concat(e.optionalChains || []), e.projectId),
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: null != (r = e?.qrModalOptions) ? r : void 0,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = o_(this.rpc.chains)),
            (this.signer = await os.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: e.disableProviderPing, relayUrl: e.relayUrl, storageOptions: e.storageOptions })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: t } = await r.e(130).then(r.bind(r, 2130));
              e = t;
            } catch {
              throw Error('To use QR modal, please install @walletconnect/modal package');
            }
            if (e)
              try {
                this.modal = new e(ov({ walletConnectVersion: 2, projectId: this.rpc.projectId, standaloneChains: this.rpc.chains }, this.rpc.qrModalOptions));
              } catch (e) {
                throw (this.signer.logger.error(e), Error('Could not generate WalletConnectModal Instance'));
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: r, rpcMap: i } = e;
          t &&
            t9(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
            })),
            r &&
              t9(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`;
        }
        async loadPersistedSession() {
          if (!this.session) return;
          let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
            t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
          this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts), this.setAccounts(t?.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
        }
        parseAccounts(e) {
          return 'string' == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((e) => this.parseAccount(e));
        }
      }
    },
    8701: function (e, t, r) {
      'use strict';
      r.d(t, {
        q: function () {
          return i;
        },
      });
      class i {}
    },
    8879: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          IEvents: function () {
            return i.q;
          },
        });
      var i = r(8701);
    },
    1269: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      let i = r(1816);
      (t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS), (t.HEARTBEAT_EVENTS = { pulse: 'heartbeat_pulse' });
    },
    6971: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(1269), t);
    },
    9556: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.HeartBeat = void 0);
      let i = r(5695),
        n = r(1293),
        s = r(1816),
        o = r(5226),
        a = r(6971);
      class c extends o.IHeartBeat {
        constructor(e) {
          super(e), (this.events = new n.EventEmitter()), (this.interval = a.HEARTBEAT_INTERVAL), (this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL);
        }
        static init(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            let t = new c(e);
            return yield t.init(), t;
          });
        }
        init() {
          return i.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        initialize() {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval));
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      t.HeartBeat = c;
    },
    3909: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(9556), t), i.__exportStar(r(5226), t), i.__exportStar(r(6971), t);
    },
    380: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.IHeartBeat = void 0);
      let i = r(8879);
      class n extends i.IEvents {
        constructor(e) {
          super();
        }
      }
      t.IHeartBeat = n;
    },
    5226: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(380), t);
    },
    975: function (e, t, r) {
      'use strict';
      let i = r(5695),
        n = r(2184),
        s = i.__importDefault(r(9349)),
        o = r(5602);
      t.ZP = class {
        constructor() {
          this.localStorage = s.default;
        }
        getKeys() {
          return i.__awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.localStorage);
          });
        }
        getEntries() {
          return i.__awaiter(this, void 0, void 0, function* () {
            return Object.entries(this.localStorage).map(o.parseEntry);
          });
        }
        getItem(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            let t = this.localStorage.getItem(e);
            if (null !== t) return n.safeJsonParse(t);
          });
        }
        setItem(e, t) {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.setItem(e, n.safeJsonStringify(t));
          });
        }
        removeItem(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.removeItem(e);
          });
        }
      };
    },
    9349: function (e, t, r) {
      'use strict';
      !(function () {
        function t() {}
        (t.prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (t.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (t.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (t.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (t.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          t.prototype.__defineGetter__('length', function () {
            return Object.keys(this).length;
          }),
          void 0 !== r.g && r.g.localStorage ? (e.exports = r.g.localStorage) : 'undefined' != typeof window && window.localStorage ? (e.exports = window.localStorage) : (e.exports = new t());
      })();
    },
    5602: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(1676), t), i.__exportStar(r(7155), t);
    },
    1676: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.IKeyValueStorage = void 0), (t.IKeyValueStorage = class {});
    },
    7155: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.parseEntry = void 0);
      let i = r(2184);
      t.parseEntry = function (e) {
        var t;
        return [e[0], i.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : '')];
      };
    },
    5043: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0), (t.PINO_LOGGER_DEFAULTS = { level: 'info' }), (t.PINO_CUSTOM_CONTEXT_KEY = 'custom_context');
    },
    744: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.pino = void 0);
      let i = r(5695),
        n = i.__importDefault(r(144));
      Object.defineProperty(t, 'pino', {
        enumerable: !0,
        get: function () {
          return n.default;
        },
      }),
        i.__exportStar(r(5043), t),
        i.__exportStar(r(817), t);
    },
    817: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0);
      let i = r(5043);
      function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
        return e[t] || '';
      }
      function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
        return (e[r] = t), e;
      }
      function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
        return void 0 === e.bindings ? n(e, t) : e.bindings().context || '';
      }
      function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
        let n = o(e, r),
          s = n.trim() ? `${n}/${t}` : t;
        return s;
      }
      (t.getDefaultLoggerOptions = function (e) {
        return Object.assign(Object.assign({}, e), { level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level });
      }),
        (t.getBrowserLoggerContext = n),
        (t.setBrowserLoggerContext = s),
        (t.getLoggerContext = o),
        (t.formatChildLoggerContext = a),
        (t.generateChildLogger = function (e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
          let n = a(e, t, r),
            o = e.child({ context: n });
          return s(o, n, r);
        });
    },
    1363: function () {},
    8501: function () {},
    8576: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(6348), t), i.__exportStar(r(3596), t);
    },
    6348: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0), (t.ONE_HUNDRED = 100), (t.ONE_THOUSAND = 1e3);
    },
    3596: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    1816: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(6979), t), i.__exportStar(r(4734), t), i.__exportStar(r(2982), t), i.__exportStar(r(8576), t);
    },
    2982: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(8463), t);
    },
    8463: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.IWatch = void 0), (t.IWatch = class {});
    },
    2663: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.fromMiliseconds = t.toMiliseconds = void 0);
      let i = r(8576);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    8634: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    6979: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(5695);
      i.__exportStar(r(8634), t), i.__exportStar(r(2663), t);
    },
    4734: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          let t = this.get(e);
          if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
          let r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          let t = this.timestamps.get(e);
          if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          let t = this.get(e),
            r = t.elapsed || Date.now() - t.started;
          return r;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    7151: function (e, t) {
      'use strict';
      function r(e) {
        let t;
        return 'undefined' != typeof window && void 0 !== window[e] && (t = window[e]), t;
      }
      function i(e) {
        let t = r(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i('document');
        }),
        (t.getDocument = function () {
          return r('document');
        }),
        (t.getNavigatorOrThrow = function () {
          return i('navigator');
        }),
        (t.getNavigator = function () {
          return r('navigator');
        }),
        (t.getLocationOrThrow = function () {
          return i('location');
        }),
        (t.getLocation = function () {
          return r('location');
        }),
        (t.getCryptoOrThrow = function () {
          return i('crypto');
        }),
        (t.getCrypto = function () {
          return r('crypto');
        }),
        (t.getLocalStorageOrThrow = function () {
          return i('localStorage');
        }),
        (t.getLocalStorage = function () {
          return r('localStorage');
        });
    },
    1593: function (e, t, r) {
      'use strict';
      t.D = void 0;
      let i = r(7151);
      t.D = function () {
        let e, t, r;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function n(...t) {
          let r = e.getElementsByTagName('meta');
          for (let e = 0; e < r.length; e++) {
            let i = r[e],
              n = ['itemprop', 'property', 'name'].map((e) => i.getAttribute(e)).filter((e) => !!e && t.includes(e));
            if (n.length && n) {
              let e = i.getAttribute('content');
              if (e) return e;
            }
          }
          return '';
        }
        let s = ((r = n('name', 'og:site_name', 'og:title', 'twitter:title')) || (r = e.title), r),
          o = (function () {
            let e = n('description', 'og:description', 'twitter:description', 'keywords');
            return e;
          })(),
          a = t.origin,
          c = (function () {
            let r = e.getElementsByTagName('link'),
              i = [];
            for (let e = 0; e < r.length; e++) {
              let n = r[e],
                s = n.getAttribute('rel');
              if (s && s.toLowerCase().indexOf('icon') > -1) {
                let e = n.getAttribute('href');
                if (e) {
                  if (-1 === e.toLowerCase().indexOf('https:') && -1 === e.toLowerCase().indexOf('http:') && 0 !== e.indexOf('//')) {
                    let r = t.protocol + '//' + t.host;
                    if (0 === e.indexOf('/')) r += e;
                    else {
                      let i = t.pathname.split('/');
                      i.pop();
                      let n = i.join('/');
                      r += n + '/' + e;
                    }
                    i.push(r);
                  } else if (0 === e.indexOf('//')) {
                    let r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
                }
              }
            }
            return i;
          })();
        return { description: o, url: a, icons: c, name: s };
      };
    },
    5674: function (e, t) {
      var r = 'undefined' != typeof self ? self : this,
        i = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (e.prototype = r), new e();
        })();
      (function (e) {
        var t = {
          searchParams: 'URLSearchParams' in i,
          iterable: 'Symbol' in i && 'iterator' in Symbol,
          blob:
            'FileReader' in i &&
            'Blob' in i &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (e) {
                return !1;
              }
            })(),
          formData: 'FormData' in i,
          arrayBuffer: 'ArrayBuffer' in i,
        };
        if (t.arrayBuffer)
          var r = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'],
            n =
              ArrayBuffer.isView ||
              function (e) {
                return e && r.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function s(e) {
          if (('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))) throw TypeError('Invalid character in header field name');
          return e.toLowerCase();
        }
        function o(e) {
          return 'string' != typeof e && (e = String(e)), e;
        }
        function a(e) {
          var r = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            t.iterable &&
              (r[Symbol.iterator] = function () {
                return r;
              }),
            r
          );
        }
        function c(e) {
          (this.map = {}),
            e instanceof c
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function u(e) {
          if (e.bodyUsed) return Promise.reject(TypeError('Already read'));
          e.bodyUsed = !0;
        }
        function h(e) {
          return new Promise(function (t, r) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                r(e.error);
              });
          });
        }
        function l(e) {
          var t = new FileReader(),
            r = h(t);
          return t.readAsArrayBuffer(e), r;
        }
        function f(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function p() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this._bodyInit = e), e)) {
                if ('string' == typeof e) this._bodyText = e;
                else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else {
                  var r;
                  t.arrayBuffer && t.blob && (r = e) && DataView.prototype.isPrototypeOf(r)
                    ? ((this._bodyArrayBuffer = f(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || n(e))
                    ? (this._bodyArrayBuffer = f(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e));
                }
              } else this._bodyText = '';
              !this.headers.get('content-type') &&
                ('string' == typeof e
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set('content-type', this._bodyBlob.type)
                  : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
            }),
            t.blob &&
              ((this.blob = function () {
                var e = u(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                throw Error('could not read FormData body as blob');
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l);
              })),
            (this.text = function () {
              var e,
                t,
                r,
                i = u(this);
              if (i) return i;
              if (this._bodyBlob) return (e = this._bodyBlob), (r = h((t = new FileReader()))), t.readAsText(e), r;
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                    return r.join('');
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error('could not read FormData body as text');
            }),
            t.formData &&
              (this.formData = function () {
                return this.text().then(y);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (c.prototype.append = function (e, t) {
          (e = s(e)), (t = o(t));
          var r = this.map[e];
          this.map[e] = r ? r + ', ' + t : t;
        }),
          (c.prototype.delete = function (e) {
            delete this.map[s(e)];
          }),
          (c.prototype.get = function (e) {
            return (e = s(e)), this.has(e) ? this.map[e] : null;
          }),
          (c.prototype.has = function (e) {
            return this.map.hasOwnProperty(s(e));
          }),
          (c.prototype.set = function (e, t) {
            this.map[s(e)] = o(t);
          }),
          (c.prototype.forEach = function (e, t) {
            for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
          }),
          (c.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, r) {
                e.push(r);
              }),
              a(e)
            );
          }),
          (c.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              a(e)
            );
          }),
          (c.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, r) {
                e.push([r, t]);
              }),
              a(e)
            );
          }),
          t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var d = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
        function g(e, t) {
          var r,
            i,
            n = (t = t || {}).body;
          if (e instanceof g) {
            if (e.bodyUsed) throw TypeError('Already read');
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new c(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              n || null == e._bodyInit || ((n = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials = t.credentials || this.credentials || 'same-origin'),
            (t.headers || !this.headers) && (this.headers = new c(t.headers)),
            (this.method = ((i = (r = t.method || this.method || 'GET').toUpperCase()), d.indexOf(i) > -1 ? i : r)),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && n)
          )
            throw TypeError('Body not allowed for GET or HEAD requests');
          this._initBody(n);
        }
        function y(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split('&')
              .forEach(function (e) {
                if (e) {
                  var r = e.split('='),
                    i = r.shift().replace(/\+/g, ' '),
                    n = r.join('=').replace(/\+/g, ' ');
                  t.append(decodeURIComponent(i), decodeURIComponent(n));
                }
              }),
            t
          );
        }
        function v(e, t) {
          t || (t = {}),
            (this.type = 'default'),
            (this.status = void 0 === t.status ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
            (this.headers = new c(t.headers)),
            (this.url = t.url || ''),
            this._initBody(e);
        }
        (g.prototype.clone = function () {
          return new g(this, { body: this._bodyInit });
        }),
          p.call(g.prototype),
          p.call(v.prototype),
          (v.prototype.clone = function () {
            return new v(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new c(this.headers), url: this.url });
          }),
          (v.error = function () {
            var e = new v(null, { status: 0, statusText: '' });
            return (e.type = 'error'), e;
          });
        var m = [301, 302, 303, 307, 308];
        (v.redirect = function (e, t) {
          if (-1 === m.indexOf(t)) throw RangeError('Invalid status code');
          return new v(null, { status: t, headers: { location: e } });
        }),
          (e.DOMException = i.DOMException);
        try {
          new e.DOMException();
        } catch (t) {
          (e.DOMException = function (e, t) {
            (this.message = e), (this.name = t);
            var r = Error(e);
            this.stack = r.stack;
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException);
        }
        function _(r, i) {
          return new Promise(function (n, s) {
            var o = new g(r, i);
            if (o.signal && o.signal.aborted) return s(new e.DOMException('Aborted', 'AbortError'));
            var a = new XMLHttpRequest();
            function u() {
              a.abort();
            }
            (a.onload = function () {
              var e,
                t,
                r = {
                  status: a.status,
                  statusText: a.statusText,
                  headers:
                    ((e = a.getAllResponseHeaders() || ''),
                    (t = new c()),
                    e
                      .replace(/\r?\n[\t ]+/g, ' ')
                      .split(/\r?\n/)
                      .forEach(function (e) {
                        var r = e.split(':'),
                          i = r.shift().trim();
                        if (i) {
                          var n = r.join(':').trim();
                          t.append(i, n);
                        }
                      }),
                    t),
                };
              r.url = 'responseURL' in a ? a.responseURL : r.headers.get('X-Request-URL');
              var i = 'response' in a ? a.response : a.responseText;
              n(new v(i, r));
            }),
              (a.onerror = function () {
                s(TypeError('Network request failed'));
              }),
              (a.ontimeout = function () {
                s(TypeError('Network request failed'));
              }),
              (a.onabort = function () {
                s(new e.DOMException('Aborted', 'AbortError'));
              }),
              a.open(o.method, o.url, !0),
              'include' === o.credentials ? (a.withCredentials = !0) : 'omit' === o.credentials && (a.withCredentials = !1),
              'responseType' in a && t.blob && (a.responseType = 'blob'),
              o.headers.forEach(function (e, t) {
                a.setRequestHeader(t, e);
              }),
              o.signal &&
                (o.signal.addEventListener('abort', u),
                (a.onreadystatechange = function () {
                  4 === a.readyState && o.signal.removeEventListener('abort', u);
                })),
              a.send(void 0 === o._bodyInit ? null : o._bodyInit);
          });
        }
        (_.polyfill = !0), i.fetch || ((i.fetch = _), (i.Headers = c), (i.Request = g), (i.Response = v)), (e.Headers = c), (e.Request = g), (e.Response = v), (e.fetch = _), Object.defineProperty(e, '__esModule', { value: !0 });
      })({}),
        (i.fetch.ponyfill = !0),
        delete i.fetch.polyfill,
        ((t = i.fetch).default = i.fetch),
        (t.fetch = i.fetch),
        (t.Headers = i.Headers),
        (t.Request = i.Request),
        (t.Response = i.Response),
        (e.exports = t);
    },
    4480: function (e) {
      'use strict';
      var t = '%[a-f0-9]{2}',
        r = RegExp('(' + t + ')|([^%]+?)', 'gi'),
        i = RegExp('(' + t + ')+', 'gi');
      e.exports = function (e) {
        if ('string' != typeof e) throw TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof e + '`');
        try {
          return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (var t = { '%FE%FF': '��', '%FF%FE': '��' }, n = i.exec(e); n; ) {
              try {
                t[n[0]] = decodeURIComponent(n[0]);
              } catch (e) {
                var s = (function (e) {
                  try {
                    return decodeURIComponent(e);
                  } catch (n) {
                    for (var t = e.match(r) || [], i = 1; i < t.length; i++)
                      t =
                        (e = (function e(t, r) {
                          try {
                            return [decodeURIComponent(t.join(''))];
                          } catch (e) {}
                          if (1 === t.length) return t;
                          r = r || 1;
                          var i = t.slice(0, r),
                            n = t.slice(r);
                          return Array.prototype.concat.call([], e(i), e(n));
                        })(t, i).join('')).match(r) || [];
                    return e;
                  }
                })(n[0]);
                s !== n[0] && (t[n[0]] = s);
              }
              n = i.exec(e);
            }
            t['%C2'] = '�';
            for (var o = Object.keys(t), a = 0; a < o.length; a++) {
              var c = o[a];
              e = e.replace(RegExp(c, 'g'), t[c]);
            }
            return e;
          })(e);
        }
      };
    },
    1293: function (e) {
      'use strict';
      var t,
        r = 'object' == typeof Reflect ? Reflect : null,
        i =
          r && 'function' == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && 'function' == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var n =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, i) {
            function n(r) {
              e.removeListener(t, s), i(r);
            }
            function s() {
              'function' == typeof e.removeListener && e.removeListener('error', n), r([].slice.call(arguments));
            }
            g(e, t, s, { once: !0 }), 'error' !== t && 'function' == typeof e.on && g(e, 'error', n, { once: !0 });
          });
        }),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var o = 10;
      function a(e) {
        if ('function' != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
      }
      function c(e) {
        return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
      }
      function u(e, t, r, i) {
        if (
          (a(r), void 0 === (s = e._events) ? ((s = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== s.newListener && (e.emit('newListener', t, r.listener ? r.listener : r), (s = e._events)), (o = s[t])), void 0 === o)
        )
          (o = s[t] = r), ++e._eventsCount;
        else if (('function' == typeof o ? (o = s[t] = i ? [r, o] : [o, r]) : i ? o.unshift(r) : o.push(r), (n = c(e)) > 0 && o.length > n && !o.warned)) {
          o.warned = !0;
          var n,
            s,
            o,
            u = Error('Possible EventEmitter memory leak detected. ' + o.length + ' ' + String(t) + ' listeners added. Use emitter.setMaxListeners() to increase limit');
          (u.name = 'MaxListenersExceededWarning'), (u.emitter = e), (u.type = t), (u.count = o.length), console && console.warn && console.warn(u);
        }
        return e;
      }
      function h() {
        if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function l(e, t, r) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          n = h.bind(i);
        return (n.listener = r), (i.wrapFn = n), n;
      }
      function f(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var n = i[t];
        return void 0 === n
          ? []
          : 'function' == typeof n
          ? r
            ? [n.listener || n]
            : [n]
          : r
          ? (function (e) {
              for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
              return t;
            })(n)
          : d(n, n.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ('function' == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function d(e, t) {
        for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r;
      }
      function g(e, t, r, i) {
        if ('function' == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
        else if ('function' == typeof e.addEventListener)
          e.addEventListener(t, function n(s) {
            i.once && e.removeEventListener(t, n), r(s);
          });
        else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
      }
      Object.defineProperty(s, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ('number' != typeof e || e < 0 || n(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + '.');
          o = e;
        },
      }),
        (s.init = function () {
          (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (e) {
          if ('number' != typeof e || e < 0 || n(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.');
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (s.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
          var n = 'error' === e,
            s = this._events;
          if (void 0 !== s) n = n && void 0 === s.error;
          else if (!n) return !1;
          if (n) {
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var o,
              a = Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
            throw ((a.context = o), a);
          }
          var c = s[e];
          if (void 0 === c) return !1;
          if ('function' == typeof c) i(c, this, t);
          else for (var u = c.length, h = d(c, u), r = 0; r < u; ++r) i(h[r], this, t);
          return !0;
        }),
        (s.prototype.addListener = function (e, t) {
          return u(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (e, t) {
          return u(this, e, t, !0);
        }),
        (s.prototype.once = function (e, t) {
          return a(t), this.on(e, l(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, l(this, e, t)), this;
        }),
        (s.prototype.removeListener = function (e, t) {
          var r, i, n, s, o;
          if ((a(t), void 0 === (i = this._events) || void 0 === (r = i[e]))) return this;
          if (r === t || r.listener === t) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete i[e], i.removeListener && this.emit('removeListener', e, r.listener || t));
          else if ('function' != typeof r) {
            for (n = -1, s = r.length - 1; s >= 0; s--)
              if (r[s] === t || r[s].listener === t) {
                (o = r[s].listener), (n = s);
                break;
              }
            if (n < 0) return this;
            0 === n
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, n),
              1 === r.length && (i[e] = r[0]),
              void 0 !== i.removeListener && this.emit('removeListener', e, o || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return 0 == arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== r[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[e]), this;
          if (0 == arguments.length) {
            var n,
              s = Object.keys(r);
            for (i = 0; i < s.length; ++i) 'removeListener' !== (n = s[i]) && this.removeAllListeners(n);
            return this.removeAllListeners('removeListener'), (this._events = Object.create(null)), (this._eventsCount = 0), this;
          }
          if ('function' == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (s.prototype.listeners = function (e) {
          return f(this, e, !0);
        }),
        (s.prototype.rawListeners = function (e) {
          return f(this, e, !1);
        }),
        (s.listenerCount = function (e, t) {
          return 'function' == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t);
        }),
        (s.prototype.listenerCount = p),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    4817: function (e) {
      'use strict';
      e.exports = function (e, t) {
        for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
          var o = i[s],
            a = e[o];
          (n ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a);
        }
        return r;
      };
    },
    4744: function (e, t, r) {
      e = r.nmd(e);
      var i,
        n,
        s,
        o = '__lodash_hash_undefined__',
        a = '[object Arguments]',
        c = '[object Array]',
        u = '[object Boolean]',
        h = '[object Date]',
        l = '[object Error]',
        f = '[object Function]',
        p = '[object Map]',
        d = '[object Number]',
        g = '[object Object]',
        y = '[object Promise]',
        v = '[object RegExp]',
        m = '[object Set]',
        _ = '[object String]',
        b = '[object WeakMap]',
        w = '[object ArrayBuffer]',
        E = '[object DataView]',
        D = /^\[object .+?Constructor\]$/,
        S = /^(?:0|[1-9]\d*)$/,
        I = {};
      (I['[object Float32Array]'] =
        I['[object Float64Array]'] =
        I['[object Int8Array]'] =
        I['[object Int16Array]'] =
        I['[object Int32Array]'] =
        I['[object Uint8Array]'] =
        I['[object Uint8ClampedArray]'] =
        I['[object Uint16Array]'] =
        I['[object Uint32Array]'] =
          !0),
        (I[a] = I[c] = I[w] = I[u] = I[E] = I[h] = I[l] = I[f] = I[p] = I[d] = I[g] = I[v] = I[m] = I[_] = I[b] = !1);
      var O = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
        P = 'object' == typeof self && self && self.Object === Object && self,
        C = O || P || Function('return this')(),
        A = t && !t.nodeType && t,
        x = A && e && !e.nodeType && e,
        N = x && x.exports === A,
        T = N && O.process,
        R = (function () {
          try {
            return T && T.binding && T.binding('util');
          } catch (e) {}
        })(),
        L = R && R.isTypedArray;
      function j(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, i) {
            r[++t] = [i, e];
          }),
          r
        );
      }
      function U(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var M = Array.prototype,
        k = Function.prototype,
        z = Object.prototype,
        $ = C['__core-js_shared__'],
        q = k.toString,
        H = z.hasOwnProperty,
        F = (i = /[^.]+$/.exec(($ && $.keys && $.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + i : '',
        B = z.toString,
        V = RegExp(
          '^' +
            q
              .call(H)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
        ),
        K = N ? C.Buffer : void 0,
        W = C.Symbol,
        G = C.Uint8Array,
        Y = z.propertyIsEnumerable,
        J = M.splice,
        X = W ? W.toStringTag : void 0,
        Z = Object.getOwnPropertySymbols,
        Q = K ? K.isBuffer : void 0,
        ee =
          ((n = Object.keys),
          (s = Object),
          function (e) {
            return n(s(e));
          }),
        et = eI(C, 'DataView'),
        er = eI(C, 'Map'),
        ei = eI(C, 'Promise'),
        en = eI(C, 'Set'),
        es = eI(C, 'WeakMap'),
        eo = eI(Object, 'create'),
        ea = eC(et),
        ec = eC(er),
        eu = eC(ei),
        eh = eC(en),
        el = eC(es),
        ef = W ? W.prototype : void 0,
        ep = ef ? ef.valueOf : void 0;
      function ed(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function eg(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ey(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ev(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new ey(); ++t < r; ) this.add(e[t]);
      }
      function em(e) {
        var t = (this.__data__ = new eg(e));
        this.size = t.size;
      }
      function e_(e, t) {
        for (var r = e.length; r--; ) if (eA(e[r][0], t)) return r;
        return -1;
      }
      function eb(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : X && X in Object(e)
          ? (function (e) {
              var t = H.call(e, X),
                r = e[X];
              try {
                e[X] = void 0;
                var i = !0;
              } catch (e) {}
              var n = B.call(e);
              return i && (t ? (e[X] = r) : delete e[X]), n;
            })(e)
          : B.call(e);
      }
      function ew(e) {
        return eU(e) && eb(e) == a;
      }
      function eE(e, t, r, i, n, s) {
        var o = 1 & r,
          a = e.length,
          c = t.length;
        if (a != c && !(o && c > a)) return !1;
        var u = s.get(e);
        if (u && s.get(t)) return u == t;
        var h = -1,
          l = !0,
          f = 2 & r ? new ev() : void 0;
        for (s.set(e, t), s.set(t, e); ++h < a; ) {
          var p = e[h],
            d = t[h];
          if (i) var g = o ? i(d, p, h, t, e, s) : i(p, d, h, e, t, s);
          if (void 0 !== g) {
            if (g) continue;
            l = !1;
            break;
          }
          if (f) {
            if (
              !(function (e, t) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) if (t(e[r], r, e)) return !0;
                return !1;
              })(t, function (e, t) {
                if (!f.has(t) && (p === e || n(p, e, r, i, s))) return f.push(t);
              })
            ) {
              l = !1;
              break;
            }
          } else if (!(p === d || n(p, d, r, i, s))) {
            l = !1;
            break;
          }
        }
        return s.delete(e), s.delete(t), l;
      }
      function eD(e) {
        var t;
        return (
          (t = (function (e) {
            return null != e && eL(e.length) && !eR(e)
              ? (function (e, t) {
                  var r,
                    i = eN(e),
                    n = !i && ex(e),
                    s = !i && !n && eT(e),
                    o = !i && !n && !s && eM(e),
                    a = i || n || s || o,
                    c = a
                      ? (function (e, t) {
                          for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
                          return i;
                        })(e.length, String)
                      : [],
                    u = c.length;
                  for (var h in e)
                    H.call(e, h) &&
                      !(
                        a &&
                        ('length' == h ||
                          (s && ('offset' == h || 'parent' == h)) ||
                          (o && ('buffer' == h || 'byteLength' == h || 'byteOffset' == h)) ||
                          ((r = null == (r = u) ? 9007199254740991 : r) && ('number' == typeof h || S.test(h)) && h > -1 && h % 1 == 0 && h < r))
                      ) &&
                      c.push(h);
                  return c;
                })(e)
              : (function (e) {
                  if (((r = ('function' == typeof (t = e && e.constructor) && t.prototype) || z), e !== r)) return ee(e);
                  var t,
                    r,
                    i = [];
                  for (var n in Object(e)) H.call(e, n) && 'constructor' != n && i.push(n);
                  return i;
                })(e);
          })(e)),
          eN(e)
            ? t
            : (function (e, t) {
                for (var r = -1, i = t.length, n = e.length; ++r < i; ) e[n + r] = t[r];
                return e;
              })(t, eO(e))
        );
      }
      function eS(e, t) {
        var r,
          i = e.__data__;
        return ('string' == (r = typeof t) || 'number' == r || 'symbol' == r || 'boolean' == r ? '__proto__' !== t : null === t) ? i['string' == typeof t ? 'string' : 'hash'] : i.map;
      }
      function eI(e, t) {
        var r = null == e ? void 0 : e[t];
        return !(!ej(r) || (F && F in r)) && (eR(r) ? V : D).test(eC(r)) ? r : void 0;
      }
      (ed.prototype.clear = function () {
        (this.__data__ = eo ? eo(null) : {}), (this.size = 0);
      }),
        (ed.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (ed.prototype.get = function (e) {
          var t = this.__data__;
          if (eo) {
            var r = t[e];
            return r === o ? void 0 : r;
          }
          return H.call(t, e) ? t[e] : void 0;
        }),
        (ed.prototype.has = function (e) {
          var t = this.__data__;
          return eo ? void 0 !== t[e] : H.call(t, e);
        }),
        (ed.prototype.set = function (e, t) {
          var r = this.__data__;
          return (this.size += this.has(e) ? 0 : 1), (r[e] = eo && void 0 === t ? o : t), this;
        }),
        (eg.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (eg.prototype.delete = function (e) {
          var t = this.__data__,
            r = e_(t, e);
          return !(r < 0) && (r == t.length - 1 ? t.pop() : J.call(t, r, 1), --this.size, !0);
        }),
        (eg.prototype.get = function (e) {
          var t = this.__data__,
            r = e_(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (eg.prototype.has = function (e) {
          return e_(this.__data__, e) > -1;
        }),
        (eg.prototype.set = function (e, t) {
          var r = this.__data__,
            i = e_(r, e);
          return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
        }),
        (ey.prototype.clear = function () {
          (this.size = 0), (this.__data__ = { hash: new ed(), map: new (er || eg)(), string: new ed() });
        }),
        (ey.prototype.delete = function (e) {
          var t = eS(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (ey.prototype.get = function (e) {
          return eS(this, e).get(e);
        }),
        (ey.prototype.has = function (e) {
          return eS(this, e).has(e);
        }),
        (ey.prototype.set = function (e, t) {
          var r = eS(this, e),
            i = r.size;
          return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
        }),
        (ev.prototype.add = ev.prototype.push =
          function (e) {
            return this.__data__.set(e, o), this;
          }),
        (ev.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (em.prototype.clear = function () {
          (this.__data__ = new eg()), (this.size = 0);
        }),
        (em.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (em.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (em.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (em.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof eg) {
            var i = r.__data__;
            if (!er || i.length < 199) return i.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new ey(i);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var eO = Z
          ? function (e) {
              return null == e
                ? []
                : (function (e, t) {
                    for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i; ) {
                      var o = e[r];
                      t(o, r, e) && (s[n++] = o);
                    }
                    return s;
                  })(Z((e = Object(e))), function (t) {
                    return Y.call(e, t);
                  });
            }
          : function () {
              return [];
            },
        eP = eb;
      function eC(e) {
        if (null != e) {
          try {
            return q.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      }
      function eA(e, t) {
        return e === t || (e != e && t != t);
      }
      ((et && eP(new et(new ArrayBuffer(1))) != E) || (er && eP(new er()) != p) || (ei && eP(ei.resolve()) != y) || (en && eP(new en()) != m) || (es && eP(new es()) != b)) &&
        (eP = function (e) {
          var t = eb(e),
            r = t == g ? e.constructor : void 0,
            i = r ? eC(r) : '';
          if (i)
            switch (i) {
              case ea:
                return E;
              case ec:
                return p;
              case eu:
                return y;
              case eh:
                return m;
              case el:
                return b;
            }
          return t;
        });
      var ex = ew(
          (function () {
            return arguments;
          })()
        )
          ? ew
          : function (e) {
              return eU(e) && H.call(e, 'callee') && !Y.call(e, 'callee');
            },
        eN = Array.isArray,
        eT =
          Q ||
          function () {
            return !1;
          };
      function eR(e) {
        if (!ej(e)) return !1;
        var t = eb(e);
        return t == f || '[object GeneratorFunction]' == t || '[object AsyncFunction]' == t || '[object Proxy]' == t;
      }
      function eL(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
      }
      function ej(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      }
      function eU(e) {
        return null != e && 'object' == typeof e;
      }
      var eM = L
        ? function (e) {
            return L(e);
          }
        : function (e) {
            return eU(e) && eL(e.length) && !!I[eb(e)];
          };
      e.exports = function (e, t) {
        return (function e(t, r, i, n, s) {
          return (
            t === r ||
            (null != t && null != r && (eU(t) || eU(r))
              ? (function (e, t, r, i, n, s) {
                  var o = eN(e),
                    f = eN(t),
                    y = o ? c : eP(e),
                    b = f ? c : eP(t);
                  (y = y == a ? g : y), (b = b == a ? g : b);
                  var D = y == g,
                    S = b == g,
                    I = y == b;
                  if (I && eT(e)) {
                    if (!eT(t)) return !1;
                    (o = !0), (D = !1);
                  }
                  if (I && !D)
                    return (
                      s || (s = new em()),
                      o || eM(e)
                        ? eE(e, t, r, i, n, s)
                        : (function (e, t, r, i, n, s, o) {
                            switch (r) {
                              case E:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                (e = e.buffer), (t = t.buffer);
                              case w:
                                if (e.byteLength != t.byteLength || !s(new G(e), new G(t))) break;
                                return !0;
                              case u:
                              case h:
                              case d:
                                return eA(+e, +t);
                              case l:
                                return e.name == t.name && e.message == t.message;
                              case v:
                              case _:
                                return e == t + '';
                              case p:
                                var a = j;
                              case m:
                                var c = 1 & i;
                                if ((a || (a = U), e.size != t.size && !c)) break;
                                var f = o.get(e);
                                if (f) return f == t;
                                (i |= 2), o.set(e, t);
                                var g = eE(a(e), a(t), i, n, s, o);
                                return o.delete(e), g;
                              case '[object Symbol]':
                                if (ep) return ep.call(e) == ep.call(t);
                            }
                            return !1;
                          })(e, t, y, r, i, n, s)
                    );
                  if (!(1 & r)) {
                    var O = D && H.call(e, '__wrapped__'),
                      P = S && H.call(t, '__wrapped__');
                    if (O || P) {
                      var C = O ? e.value() : e,
                        A = P ? t.value() : t;
                      return s || (s = new em()), n(C, A, r, i, s);
                    }
                  }
                  return (
                    !!I &&
                    (s || (s = new em()),
                    (function (e, t, r, i, n, s) {
                      var o = 1 & r,
                        a = eD(e),
                        c = a.length;
                      if (c != eD(t).length && !o) return !1;
                      for (var u = c; u--; ) {
                        var h = a[u];
                        if (!(o ? h in t : H.call(t, h))) return !1;
                      }
                      var l = s.get(e);
                      if (l && s.get(t)) return l == t;
                      var f = !0;
                      s.set(e, t), s.set(t, e);
                      for (var p = o; ++u < c; ) {
                        var d = e[(h = a[u])],
                          g = t[h];
                        if (i) var y = o ? i(g, d, h, t, e, s) : i(d, g, h, e, t, s);
                        if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                          f = !1;
                          break;
                        }
                        p || (p = 'constructor' == h);
                      }
                      if (f && !p) {
                        var v = e.constructor,
                          m = t.constructor;
                        v != m && 'constructor' in e && 'constructor' in t && !('function' == typeof v && v instanceof v && 'function' == typeof m && m instanceof m) && (f = !1);
                      }
                      return s.delete(e), s.delete(t), f;
                    })(e, t, r, i, n, s))
                  );
                })(t, r, i, n, e, s)
              : t != t && r != r)
          );
        })(e, t);
      };
    },
    7098: function (e, t, r) {
      'use strict';
      var i, n;
      e.exports = (null == (i = r.g.process) ? void 0 : i.env) && 'object' == typeof (null == (n = r.g.process) ? void 0 : n.env) ? r.g.process : r(3600);
    },
    3600: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                i,
                n = (e.exports = {});
              function s() {
                throw Error('setTimeout has not been defined');
              }
              function o() {
                throw Error('clearTimeout has not been defined');
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = 'function' == typeof setTimeout ? setTimeout : s;
                } catch (e) {
                  t = s;
                }
                try {
                  r = 'function' == typeof clearTimeout ? clearTimeout : o;
                } catch (e) {
                  r = o;
                }
              })();
              var c = [],
                u = !1,
                h = -1;
              function l() {
                u && i && ((u = !1), i.length ? (c = i.concat(c)) : (h = -1), c.length && f());
              }
              function f() {
                if (!u) {
                  var e = a(l);
                  u = !0;
                  for (var t = c.length; t; ) {
                    for (i = c, c = []; ++h < t; ) i && i[h].run();
                    (h = -1), (t = c.length);
                  }
                  (i = null),
                    (u = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function p(e, t) {
                (this.fun = e), (this.array = t);
              }
              function d() {}
              (n.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                c.push(new p(e, t)), 1 !== c.length || u || a(f);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (n.title = 'browser'),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ''),
                (n.versions = {}),
                (n.on = d),
                (n.addListener = d),
                (n.once = d),
                (n.off = d),
                (n.removeListener = d),
                (n.removeAllListeners = d),
                (n.emit = d),
                (n.prependListener = d),
                (n.prependOnceListener = d),
                (n.listeners = function (e) {
                  return [];
                }),
                (n.binding = function (e) {
                  throw Error('process.binding is not supported');
                }),
                (n.cwd = function () {
                  return '/';
                }),
                (n.chdir = function (e) {
                  throw Error('process.chdir is not supported');
                }),
                (n.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function i(e) {
          var n = r[e];
          if (void 0 !== n) return n.exports;
          var s = (r[e] = { exports: {} }),
            o = !0;
          try {
            t[e](s, s.exports, i), (o = !1);
          } finally {
            o && delete r[e];
          }
          return s.exports;
        }
        i.ab = '//';
        var n = i(229);
        e.exports = n;
      })();
    },
    4523: function (e, t, r) {
      'use strict';
      let i = r(1147),
        n = r(4480),
        s = r(7832),
        o = r(4817),
        a = (e) => null == e,
        c = Symbol('encodeFragmentIdentifier');
      function u(e) {
        if ('string' != typeof e || 1 !== e.length) throw TypeError('arrayFormatSeparator must be single character string');
      }
      function h(e, t) {
        return t.encode ? (t.strict ? i(e) : encodeURIComponent(e)) : e;
      }
      function l(e, t) {
        return t.decode ? n(e) : e;
      }
      function f(e) {
        let t = e.indexOf('#');
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function p(e) {
        e = f(e);
        let t = e.indexOf('?');
        return -1 === t ? '' : e.slice(t + 1);
      }
      function d(e, t) {
        return (
          t.parseNumbers && !Number.isNaN(Number(e)) && 'string' == typeof e && '' !== e.trim()
            ? (e = Number(e))
            : t.parseBooleans && null !== e && ('true' === e.toLowerCase() || 'false' === e.toLowerCase()) && (e = 'true' === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        u((t = Object.assign({ decode: !0, sort: !0, arrayFormat: 'none', arrayFormatSeparator: ',', parseNumbers: !1, parseBooleans: !1 }, t)).arrayFormatSeparator);
        let r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case 'index':
                return (e, r, i) => {
                  if (((t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, '')), !t)) {
                    i[e] = r;
                    return;
                  }
                  void 0 === i[e] && (i[e] = {}), (i[e][t[1]] = r);
                };
              case 'bracket':
                return (e, r, i) => {
                  if (((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, '')), !t)) {
                    i[e] = r;
                    return;
                  }
                  if (void 0 === i[e]) {
                    i[e] = [r];
                    return;
                  }
                  i[e] = [].concat(i[e], r);
                };
              case 'colon-list-separator':
                return (e, r, i) => {
                  if (((t = /(:list)$/.exec(e)), (e = e.replace(/:list$/, '')), !t)) {
                    i[e] = r;
                    return;
                  }
                  if (void 0 === i[e]) {
                    i[e] = [r];
                    return;
                  }
                  i[e] = [].concat(i[e], r);
                };
              case 'comma':
              case 'separator':
                return (t, r, i) => {
                  let n = 'string' == typeof r && r.includes(e.arrayFormatSeparator),
                    s = 'string' == typeof r && !n && l(r, e).includes(e.arrayFormatSeparator);
                  r = s ? l(r, e) : r;
                  let o = n || s ? r.split(e.arrayFormatSeparator).map((t) => l(t, e)) : null === r ? r : l(r, e);
                  i[t] = o;
                };
              case 'bracket-separator':
                return (t, r, i) => {
                  let n = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, '')), !n)) {
                    i[t] = r ? l(r, e) : r;
                    return;
                  }
                  let s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t) => l(t, e));
                  if (void 0 === i[t]) {
                    i[t] = s;
                    return;
                  }
                  i[t] = [].concat(i[t], s);
                };
              default:
                return (e, t, r) => {
                  if (void 0 === r[e]) {
                    r[e] = t;
                    return;
                  }
                  r[e] = [].concat(r[e], t);
                };
            }
          })(t),
          i = Object.create(null);
        if ('string' != typeof e || !(e = e.trim().replace(/^[?#&]/, ''))) return i;
        for (let n of e.split('&')) {
          if ('' === n) continue;
          let [e, o] = s(t.decode ? n.replace(/\+/g, ' ') : n, '=');
          (o = void 0 === o ? null : ['comma', 'separator', 'bracket-separator'].includes(t.arrayFormat) ? o : l(o, t)), r(l(e, t), o, i);
        }
        for (let e of Object.keys(i)) {
          let r = i[e];
          if ('object' == typeof r && null !== r) for (let e of Object.keys(r)) r[e] = d(r[e], t);
          else i[e] = d(r, t);
        }
        return !1 === t.sort
          ? i
          : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
              let r = i[t];
              return (
                r && 'object' == typeof r && !Array.isArray(r)
                  ? (e[t] = (function e(t) {
                      return Array.isArray(t)
                        ? t.sort()
                        : 'object' == typeof t
                        ? e(Object.keys(t))
                            .sort((e, t) => Number(e) - Number(t))
                            .map((e) => t[e])
                        : t;
                    })(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = p),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return '';
          u((t = Object.assign({ encode: !0, strict: !0, arrayFormat: 'none', arrayFormatSeparator: ',' }, t)).arrayFormatSeparator);
          let r = (r) => (t.skipNull && a(e[r])) || (t.skipEmptyString && '' === e[r]),
            i = (function (e) {
              switch (e.arrayFormat) {
                case 'index':
                  return (t) => (r, i) => {
                    let n = r.length;
                    return void 0 === i || (e.skipNull && null === i) || (e.skipEmptyString && '' === i) ? r : null === i ? [...r, [h(t, e), '[', n, ']'].join('')] : [...r, [h(t, e), '[', h(n, e), ']=', h(i, e)].join('')];
                  };
                case 'bracket':
                  return (t) => (r, i) => void 0 === i || (e.skipNull && null === i) || (e.skipEmptyString && '' === i) ? r : null === i ? [...r, [h(t, e), '[]'].join('')] : [...r, [h(t, e), '[]=', h(i, e)].join('')];
                case 'colon-list-separator':
                  return (t) => (r, i) => void 0 === i || (e.skipNull && null === i) || (e.skipEmptyString && '' === i) ? r : null === i ? [...r, [h(t, e), ':list='].join('')] : [...r, [h(t, e), ':list=', h(i, e)].join('')];
                case 'comma':
                case 'separator':
                case 'bracket-separator': {
                  let t = 'bracket-separator' === e.arrayFormat ? '[]=' : '=';
                  return (r) => (i, n) =>
                    void 0 === n || (e.skipNull && null === n) || (e.skipEmptyString && '' === n) ? i : ((n = null === n ? '' : n), 0 === i.length) ? [[h(r, e), t, h(n, e)].join('')] : [[i, h(n, e)].join(e.arrayFormatSeparator)];
                }
                default:
                  return (t) => (r, i) => void 0 === i || (e.skipNull && null === i) || (e.skipEmptyString && '' === i) ? r : null === i ? [...r, h(t, e)] : [...r, [h(t, e), '=', h(i, e)].join('')];
              }
            })(t),
            n = {};
          for (let t of Object.keys(e)) r(t) || (n[t] = e[t]);
          let s = Object.keys(n);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                let n = e[r];
                return void 0 === n ? '' : null === n ? h(r, t) : Array.isArray(n) ? (0 === n.length && 'bracket-separator' === t.arrayFormat ? h(r, t) + '[]' : n.reduce(i(r), []).join('&')) : h(r, t) + '=' + h(n, t);
              })
              .filter((e) => e.length > 0)
              .join('&')
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          let [r, i] = s(e, '#');
          return Object.assign({ url: r.split('?')[0] || '', query: g(p(e), t) }, t && t.parseFragmentIdentifier && i ? { fragmentIdentifier: l(i, t) } : {});
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [c]: !0 }, r);
          let i = f(e.url).split('?')[0] || '',
            n = t.extract(e.url),
            s = t.parse(n, { sort: !1 }),
            o = Object.assign(s, e.query),
            a = t.stringify(o, r);
          a && (a = `?${a}`);
          let u = (function (e) {
            let t = '',
              r = e.indexOf('#');
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return e.fragmentIdentifier && (u = `#${r[c] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier}`), `${i}${a}${u}`;
        }),
        (t.pick = (e, r, i) => {
          i = Object.assign({ parseFragmentIdentifier: !0, [c]: !1 }, i);
          let { url: n, query: s, fragmentIdentifier: a } = t.parseUrl(e, i);
          return t.stringifyUrl({ url: n, query: o(s, r), fragmentIdentifier: a }, i);
        }),
        (t.exclude = (e, r, i) => {
          let n = Array.isArray(r) ? (e) => !r.includes(e) : (e, t) => !r(e, t);
          return t.pick(e, n, i);
        });
    },
    4018: function (e) {
      'use strict';
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var n = (i && i.stringify) || t;
        if ('object' == typeof e && null !== e) {
          var s = r.length + 1;
          if (1 === s) return e;
          var o = Array(s);
          o[0] = n(e);
          for (var a = 1; a < s; a++) o[a] = n(r[a]);
          return o.join(' ');
        }
        if ('string' != typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (var u = '', h = 0, l = -1, f = (e && e.length) || 0, p = 0; p < f; ) {
          if (37 === e.charCodeAt(p) && p + 1 < f) {
            switch (((l = l > -1 ? l : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (h >= c || null == r[h]) break;
                l < p && (u += e.slice(l, p)), (u += Number(r[h])), (l = p + 2), p++;
                break;
              case 105:
                if (h >= c || null == r[h]) break;
                l < p && (u += e.slice(l, p)), (u += Math.floor(Number(r[h]))), (l = p + 2), p++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c || void 0 === r[h]) break;
                l < p && (u += e.slice(l, p));
                var d = typeof r[h];
                if ('string' === d) {
                  (u += "'" + r[h] + "'"), (l = p + 2), p++;
                  break;
                }
                if ('function' === d) {
                  (u += r[h].name || '<anonymous>'), (l = p + 2), p++;
                  break;
                }
                (u += n(r[h])), (l = p + 2), p++;
                break;
              case 115:
                if (h >= c) break;
                l < p && (u += e.slice(l, p)), (u += String(r[h])), (l = p + 2), p++;
                break;
              case 37:
                l < p && (u += e.slice(l, p)), (u += '%'), (l = p + 2), p++, h--;
            }
            ++h;
          }
          ++p;
        }
        return -1 === l ? e : (l < f && (u += e.slice(l)), u);
      };
    },
    2184: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.safeJsonParse = function (e) {
          if ('string' != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
          try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
        }),
        (t.safeJsonStringify = function (e) {
          return 'string' == typeof e ? e : JSON.stringify(e, (e, t) => (void 0 === t ? null : t));
        });
    },
    7832: function (e) {
      'use strict';
      e.exports = (e, t) => {
        if (!('string' == typeof e && 'string' == typeof t)) throw TypeError('Expected the arguments to be of type `string`');
        if ('' === t) return [e];
        let r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
      };
    },
    1147: function (e) {
      'use strict';
      e.exports = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
    },
    5695: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          __assign: function () {
            return s;
          },
          __asyncDelegator: function () {
            return b;
          },
          __asyncGenerator: function () {
            return _;
          },
          __asyncValues: function () {
            return w;
          },
          __await: function () {
            return m;
          },
          __awaiter: function () {
            return h;
          },
          __classPrivateFieldGet: function () {
            return I;
          },
          __classPrivateFieldSet: function () {
            return O;
          },
          __createBinding: function () {
            return f;
          },
          __decorate: function () {
            return a;
          },
          __exportStar: function () {
            return p;
          },
          __extends: function () {
            return n;
          },
          __generator: function () {
            return l;
          },
          __importDefault: function () {
            return S;
          },
          __importStar: function () {
            return D;
          },
          __makeTemplateObject: function () {
            return E;
          },
          __metadata: function () {
            return u;
          },
          __param: function () {
            return c;
          },
          __read: function () {
            return g;
          },
          __rest: function () {
            return o;
          },
          __spread: function () {
            return y;
          },
          __spreadArrays: function () {
            return v;
          },
          __values: function () {
            return d;
          },
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var i = function (e, t) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (s =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
        return r;
      }
      function a(e, t, r, i) {
        var n,
          s = arguments.length,
          o = s < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
        else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function u(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, s) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              s(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var r,
          i,
          n,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (((r = 1), i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done)) return n;
                  switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                    case 0:
                    case 1:
                      n = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (i = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < n[1]) {
                        (o.label = n[1]), (n = s);
                        break;
                      }
                      if (n && o.label < n[2]) {
                        (o.label = n[2]), o.ops.push(s);
                        break;
                      }
                      n[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function f(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e) 'default' === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
            },
          };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function g(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var i = Array(e), n = 0, t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
        return i;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function _(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var i,
          n = r.apply(e, t || []),
          s = [];
        return (
          (i = {}),
          o('next'),
          o('throw'),
          o('return'),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                s.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r);
          } catch (e) {
            h(s[0][3], e);
          }
        }
        function c(e) {
          a('next', e);
        }
        function u(e) {
          a('throw', e);
        }
        function h(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          i('next'),
          i('throw', function (e) {
            throw e;
          }),
          i('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r) ? { value: m(e[i](t)), done: 'return' === i } : n ? n(t) : t;
              }
            : n;
        }
      }
      function w(e) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            i('next'),
            i('throw'),
            i('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e;
      }
      function D(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e, t) {
        if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function O(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    1042: function (e) {
      'use strict';
      e.exports = function () {
        throw Error('ws does not work in the browser. Browser clients must use the native WebSocket object');
      };
    },
    144: function (e, t, r) {
      'use strict';
      let i = r(4018);
      e.exports = s;
      let n =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ('undefined' != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, 'globalThis', {
                get: function () {
                  return delete Object.prototype.globalThis, (this.globalThis = this);
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function s(e) {
        var t;
        (e = e || {}).browser = e.browser || {};
        let r = e.browser.transmit;
        if (r && 'function' != typeof r.send) throw Error('pino: transmit option must have a send function');
        let i = e.browser.write || n;
        e.browser.write && (e.browser.asObject = !0);
        let h = e.serializers || {},
          l = (function (e, t) {
            if (Array.isArray(e)) {
              let t = e.filter(function (e) {
                return '!stdSerializers.err' !== e;
              });
              return t;
            }
            return !0 === e && Object.keys(t);
          })(e.browser.serialize, h),
          g = e.browser.serialize;
        Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf('!stdSerializers.err') > -1 && (g = !1),
          'function' == typeof i && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i),
          !1 === e.enabled && (e.level = 'silent');
        let y = e.level || 'info',
          v = Object.create(i);
        v.log || (v.log = f),
          Object.defineProperty(v, 'levelVal', {
            get: function () {
              return 'silent' === this.level ? 1 / 0 : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(v, 'level', {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ('silent' !== e && !this.levels.values[e]) throw Error('unknown level ' + e);
              (this._level = e), o(m, v, 'error', 'log'), o(m, v, 'fatal', 'error'), o(m, v, 'warn', 'error'), o(m, v, 'info', 'log'), o(m, v, 'debug', 'log'), o(m, v, 'trace', 'log');
            },
          });
        let m = { transmit: r, serialize: l, asObject: e.browser.asObject, levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'], timestamp: 'function' == typeof (t = e).timestamp ? t.timestamp : !1 === t.timestamp ? p : d };
        return (
          (v.levels = s.levels),
          (v.level = y),
          (v.setMaxListeners =
            v.getMaxListeners =
            v.emit =
            v.addListener =
            v.on =
            v.prependListener =
            v.once =
            v.prependOnceListener =
            v.removeListener =
            v.removeAllListeners =
            v.listeners =
            v.listenerCount =
            v.eventNames =
            v.write =
            v.flush =
              f),
          (v.serializers = h),
          (v._serialize = l),
          (v._stdErrSerialize = g),
          (v.child = function (t, i) {
            if (!t) throw Error('missing bindings for child Pino');
            (i = i || {}), l && t.serializers && (i.serializers = t.serializers);
            let n = i.serializers;
            if (l && n) {
              var s = Object.assign({}, h, n),
                o = !0 === e.browser.serialize ? Object.keys(s) : l;
              delete t.serializers, a([t], o, s, this._stdErrSerialize);
            }
            function f(e) {
              (this._childLevel = (0 | e._childLevel) + 1),
                (this.error = c(e, t, 'error')),
                (this.fatal = c(e, t, 'fatal')),
                (this.warn = c(e, t, 'warn')),
                (this.info = c(e, t, 'info')),
                (this.debug = c(e, t, 'debug')),
                (this.trace = c(e, t, 'trace')),
                s && ((this.serializers = s), (this._serialize = o)),
                r && (this._logEvent = u([].concat(e._logEvent.bindings, t)));
            }
            return (f.prototype = this), new f(this);
          }),
          r && (v._logEvent = u()),
          v
        );
      }
      function o(e, t, r, o) {
        let c = Object.getPrototypeOf(t);
        (t[r] = t.levelVal > t.levels.values[r] ? f : c[r] ? c[r] : n[r] || n[o] || f),
          (function (e, t, r) {
            if (e.transmit || t[r] !== f) {
              var o;
              t[r] =
                ((o = t[r]),
                function () {
                  let c = e.timestamp(),
                    h = Array(arguments.length),
                    l = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                  for (var f = 0; f < h.length; f++) h[f] = arguments[f];
                  if (
                    (e.serialize && !e.asObject && a(h, this._serialize, this.serializers, this._stdErrSerialize),
                    e.asObject
                      ? o.call(
                          l,
                          (function (e, t, r, n) {
                            e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                            let o = r.slice(),
                              c = o[0],
                              u = {};
                            n && (u.time = n), (u.level = s.levels.values[t]);
                            let h = (0 | e._childLevel) + 1;
                            if ((h < 1 && (h = 1), null !== c && 'object' == typeof c)) {
                              for (; h-- && 'object' == typeof o[0]; ) Object.assign(u, o.shift());
                              c = o.length ? i(o.shift(), o) : void 0;
                            } else 'string' == typeof c && (c = i(o.shift(), o));
                            return void 0 !== c && (u.msg = c), u;
                          })(this, r, h, c)
                        )
                      : o.apply(l, h),
                    e.transmit)
                  ) {
                    let i = e.transmit.level || t.level,
                      n = s.levels.values[i],
                      o = s.levels.values[r];
                    if (o < n) return;
                    (function (e, t, r) {
                      let i = t.send,
                        n = t.ts,
                        s = t.methodLevel,
                        o = t.methodValue,
                        c = t.val,
                        h = e._logEvent.bindings;
                      a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize),
                        (e._logEvent.ts = n),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === h.indexOf(e);
                        })),
                        (e._logEvent.level.label = s),
                        (e._logEvent.level.value = o),
                        i(s, e._logEvent, c),
                        (e._logEvent = u(h));
                    })(this, { ts: c, methodLevel: r, methodValue: o, transmitLevel: i, transmitValue: s.levels.values[e.transmit.level || t.level], send: e.transmit.send, val: t.levelVal }, h);
                  }
                });
            }
          })(e, t, r);
      }
      function a(e, t, r, i) {
        for (let n in e)
          if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
          else if ('object' == typeof e[n] && !Array.isArray(e[n])) for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]));
      }
      function c(e, t, r) {
        return function () {
          let i = Array(1 + arguments.length);
          i[0] = t;
          for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
          return e[r].apply(this, i);
        };
      }
      function u(e) {
        return { ts: 0, messages: [], bindings: e || [], level: { label: '', value: 0 } };
      }
      function h() {
        return {};
      }
      function l(e) {
        return e;
      }
      function f() {}
      function p() {
        return !1;
      }
      function d() {
        return Date.now();
      }
      (s.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal' } }),
        (s.stdSerializers = {
          mapHttpRequest: h,
          mapHttpResponse: h,
          wrapRequestSerializer: l,
          wrapResponseSerializer: l,
          wrapErrorSerializer: l,
          req: h,
          res: h,
          err: function (e) {
            let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        }),
        (s.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: p,
            epochTime: d,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
