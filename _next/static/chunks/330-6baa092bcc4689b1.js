(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [330],
  {
    8421: function (e, t) {
      'use strict';
      (t.byteLength = function (e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            s = u(e),
            o = s[0],
            a = s[1],
            c = new i(((o + a) * 3) / 4 - a),
            l = 0,
            f = a > 0 ? o - 4 : o;
          for (r = 0; r < f; r += 4) (t = (n[e.charCodeAt(r)] << 18) | (n[e.charCodeAt(r + 1)] << 12) | (n[e.charCodeAt(r + 2)] << 6) | n[e.charCodeAt(r + 3)]), (c[l++] = (t >> 16) & 255), (c[l++] = (t >> 8) & 255), (c[l++] = 255 & t);
          return (
            2 === a && ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)), (c[l++] = 255 & t)),
            1 === a && ((t = (n[e.charCodeAt(r)] << 10) | (n[e.charCodeAt(r + 1)] << 4) | (n[e.charCodeAt(r + 2)] >> 2)), (c[l++] = (t >> 8) & 255), (c[l++] = 255 & t)),
            c
          );
        }),
        (t.fromByteArray = function (e) {
          for (var t, n = e.length, i = n % 3, s = [], o = 0, a = n - i; o < a; o += 16383)
            s.push(
              (function (e, t, n) {
                for (var i, s = [], o = t; o < n; o += 3) s.push(r[((i = ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])) >> 18) & 63] + r[(i >> 12) & 63] + r[(i >> 6) & 63] + r[63 & i]);
                return s.join('');
              })(e, o, o + 16383 > a ? a : o + 16383)
            );
          return 1 === i ? s.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + '==') : 2 === i && s.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + '='), s.join('');
        });
      for (var r = [], n = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', o = 0, a = s.length; o < a; ++o) (r[o] = s[o]), (n[s.charCodeAt(o)] = o);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
        var r = e.indexOf('=');
        -1 === r && (r = t);
        var n = r === t ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63);
    },
    8504: function (e, t, r) {
      'use strict';
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ let n = r(8421),
        i = r(6701),
        s = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
      function o(e) {
        if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, a.prototype), t;
      }
      function a(e, t, r) {
        if ('number' == typeof e) {
          if ('string' == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
          return l(e);
        }
        return u(e, t, r);
      }
      function u(e, t, r) {
        if ('string' == typeof e)
          return (function (e, t) {
            if ((('string' != typeof t || '' === t) && (t = 'utf8'), !a.isEncoding(t))) throw TypeError('Unknown encoding: ' + t);
            let r = 0 | p(e, t),
              n = o(r),
              i = n.write(e, t);
            return i !== r && (n = n.slice(0, i)), n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (F(e, Uint8Array)) {
              let t = new Uint8Array(e);
              return h(t.buffer, t.byteOffset, t.byteLength);
            }
            return f(e);
          })(e);
        if (null == e) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
        if (F(e, ArrayBuffer) || (e && F(e.buffer, ArrayBuffer)) || ('undefined' != typeof SharedArrayBuffer && (F(e, SharedArrayBuffer) || (e && F(e.buffer, SharedArrayBuffer))))) return h(e, t, r);
        if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return a.from(n, t, r);
        let i = (function (e) {
          var t;
          if (a.isBuffer(e)) {
            let t = 0 | d(e.length),
              r = o(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          return void 0 !== e.length ? ('number' != typeof e.length || (t = e.length) != t ? o(0) : f(e)) : 'Buffer' === e.type && Array.isArray(e.data) ? f(e.data) : void 0;
        })(e);
        if (i) return i;
        if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]('string'), t, r);
        throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
      }
      function c(e) {
        if ('number' != typeof e) throw TypeError('"size" argument must be of type number');
        if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
      }
      function l(e) {
        return c(e), o(e < 0 ? 0 : 0 | d(e));
      }
      function f(e) {
        let t = e.length < 0 ? 0 : 0 | d(e.length),
          r = o(t);
        for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
        return r;
      }
      function h(e, t, r) {
        let n;
        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
        return Object.setPrototypeOf((n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r)), a.prototype), n;
      }
      function d(e) {
        if (e >= 2147483647) throw RangeError('Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes');
        return 0 | e;
      }
      function p(e, t) {
        if (a.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || F(e, ArrayBuffer)) return e.byteLength;
        if ('string' != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r;
            case 'utf8':
            case 'utf-8':
              return U(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return L(e).length;
            default:
              if (i) return n ? -1 : U(e).length;
              (t = ('' + t).toLowerCase()), (i = !0);
          }
      }
      function g(e, t, r) {
        let i = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0)))) return '';
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return (function (e, t, r) {
                let n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                let i = '';
                for (let n = t; n < r; ++n) i += T[e[n]];
                return i;
              })(this, t, r);
            case 'utf8':
            case 'utf-8':
              return w(this, t, r);
            case 'ascii':
              return (function (e, t, r) {
                let n = '';
                r = Math.min(e.length, r);
                for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n;
              })(this, t, r);
            case 'latin1':
            case 'binary':
              return (function (e, t, r) {
                let n = '';
                r = Math.min(e.length, r);
                for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n;
              })(this, t, r);
            case 'base64':
              var s, o;
              return (s = t), (o = r), 0 === s && o === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(s, o));
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return (function (e, t, r) {
                let n = e.slice(t, r),
                  i = '';
                for (let e = 0; e < n.length - 1; e += 2) i += String.fromCharCode(n[e] + 256 * n[e + 1]);
                return i;
              })(this, t, r);
            default:
              if (i) throw TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (i = !0);
          }
      }
      function m(e, t, r) {
        let n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function y(e, t, r, n, i) {
        var s;
        if (0 === e.length) return -1;
        if (('string' == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648), (s = r = +r) != s && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (('string' == typeof t && (t = a.from(t, n)), a.isBuffer(t))) return 0 === t.length ? -1 : b(e, t, r, n, i);
        if ('number' == typeof t) return ((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf) ? (i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r)) : b(e, [t], r, n, i);
        throw TypeError('val must be string, number or Buffer');
      }
      function b(e, t, r, n, i) {
        let s,
          o = 1,
          a = e.length,
          u = t.length;
        if (void 0 !== n && ('ucs2' === (n = String(n).toLowerCase()) || 'ucs-2' === n || 'utf16le' === n || 'utf-16le' === n)) {
          if (e.length < 2 || t.length < 2) return -1;
          (o = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function c(e, t) {
          return 1 === o ? e[t] : e.readUInt16BE(t * o);
        }
        if (i) {
          let n = -1;
          for (s = r; s < a; s++)
            if (c(e, s) === c(t, -1 === n ? 0 : s - n)) {
              if ((-1 === n && (n = s), s - n + 1 === u)) return n * o;
            } else -1 !== n && (s -= s - n), (n = -1);
        } else
          for (r + u > a && (r = a - u), s = r; s >= 0; s--) {
            let r = !0;
            for (let n = 0; n < u; n++)
              if (c(e, s + n) !== c(t, n)) {
                r = !1;
                break;
              }
            if (r) return s;
          }
        return -1;
      }
      function w(e, t, r) {
        r = Math.min(e.length, r);
        let n = [],
          i = t;
        for (; i < r; ) {
          let t = e[i],
            s = null,
            o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (i + o <= r) {
            let r, n, a, u;
            switch (o) {
              case 1:
                t < 128 && (s = t);
                break;
              case 2:
                (192 & (r = e[i + 1])) == 128 && (u = ((31 & t) << 6) | (63 & r)) > 127 && (s = u);
                break;
              case 3:
                (r = e[i + 1]), (n = e[i + 2]), (192 & r) == 128 && (192 & n) == 128 && (u = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)) > 2047 && (u < 55296 || u > 57343) && (s = u);
                break;
              case 4:
                (r = e[i + 1]), (n = e[i + 2]), (a = e[i + 3]), (192 & r) == 128 && (192 & n) == 128 && (192 & a) == 128 && (u = ((15 & t) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & a)) > 65535 && u < 1114112 && (s = u);
            }
          }
          null === s ? ((s = 65533), (o = 1)) : s > 65535 && ((s -= 65536), n.push(((s >>> 10) & 1023) | 55296), (s = 56320 | (1023 & s))), n.push(s), (i += o);
        }
        return (function (e) {
          let t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          let r = '',
            n = 0;
          for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function v(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
        if (e + t > r) throw RangeError('Trying to access beyond buffer length');
      }
      function A(e, t, r, n, i, s) {
        if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < s) throw RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw RangeError('Index out of range');
      }
      function C(e, t, r, n, i) {
        M(t, n, i, e, r, 7);
        let s = Number(t & BigInt(4294967295));
        (e[r++] = s), (s >>= 8), (e[r++] = s), (s >>= 8), (e[r++] = s), (s >>= 8), (e[r++] = s);
        let o = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (e[r++] = o), (o >>= 8), (e[r++] = o), (o >>= 8), (e[r++] = o), (o >>= 8), (e[r++] = o), r;
      }
      function E(e, t, r, n, i) {
        M(t, n, i, e, r, 7);
        let s = Number(t & BigInt(4294967295));
        (e[r + 7] = s), (s >>= 8), (e[r + 6] = s), (s >>= 8), (e[r + 5] = s), (s >>= 8), (e[r + 4] = s);
        let o = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (e[r + 3] = o), (o >>= 8), (e[r + 2] = o), (o >>= 8), (e[r + 1] = o), (o >>= 8), (e[r] = o), r + 8;
      }
      function P(e, t, r, n, i, s) {
        if (r + n > e.length || r < 0) throw RangeError('Index out of range');
      }
      function I(e, t, r, n, s) {
        return (t = +t), (r >>>= 0), s || P(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(e, t, r, n, 23, 4), r + 4;
      }
      function O(e, t, r, n, s) {
        return (t = +t), (r >>>= 0), s || P(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(e, t, r, n, 52, 8), r + 8;
      }
      (t.lW = a),
        (t.h2 = 50),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
          } catch (e) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'),
        Object.defineProperty(a.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (e, t, r) {
          return u(e, t, r);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (e, t, r) {
          return (c(e), e <= 0) ? o(e) : void 0 !== t ? ('string' == typeof r ? o(e).fill(t, r) : o(e).fill(t)) : o(e);
        }),
        (a.allocUnsafe = function (e) {
          return l(e);
        }),
        (a.allocUnsafeSlow = function (e) {
          return l(e);
        }),
        (a.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== a.prototype;
        }),
        (a.compare = function (e, t) {
          if ((F(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), F(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)))
            throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (e === t) return 0;
          let r = e.length,
            n = t.length;
          for (let i = 0, s = Math.min(r, n); i < s; ++i)
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (a.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (e, t) {
          let r;
          if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return a.alloc(0);
          if (void 0 === t) for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
          let n = a.allocUnsafe(t),
            i = 0;
          for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (F(t, Uint8Array)) i + t.length > n.length ? (a.isBuffer(t) || (t = a.from(t)), t.copy(n, i)) : Uint8Array.prototype.set.call(n, t, i);
            else if (a.isBuffer(t)) t.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += t.length;
          }
          return n;
        }),
        (a.byteLength = p),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          let e = this.length;
          if (e % 2 != 0) throw RangeError('Buffer size must be a multiple of 16-bits');
          for (let t = 0; t < e; t += 2) m(this, t, t + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          let e = this.length;
          if (e % 4 != 0) throw RangeError('Buffer size must be a multiple of 32-bits');
          for (let t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          let e = this.length;
          if (e % 8 != 0) throw RangeError('Buffer size must be a multiple of 64-bits');
          for (let t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          let e = this.length;
          return 0 === e ? '' : 0 == arguments.length ? w(this, 0, e) : g.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (e) {
          if (!a.isBuffer(e)) throw TypeError('Argument must be a Buffer');
          return this === e || 0 === a.compare(this, e);
        }),
        (a.prototype.inspect = function () {
          let e = '',
            r = t.h2;
          return (
            (e = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (e += ' ... '),
            '<Buffer ' + e + '>'
          );
        }),
        s && (a.prototype[s] = a.prototype.inspect),
        (a.prototype.compare = function (e, t, r, n, i) {
          if ((F(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e))) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
          if ((void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length)) throw RangeError('out of range index');
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0;
          let s = i - n,
            o = r - t,
            u = Math.min(s, o),
            c = this.slice(n, i),
            l = e.slice(t, r);
          for (let e = 0; e < u; ++e)
            if (c[e] !== l[e]) {
              (s = c[e]), (o = l[e]);
              break;
            }
          return s < o ? -1 : o < s ? 1 : 0;
        }),
        (a.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (a.prototype.indexOf = function (e, t, r) {
          return y(this, e, t, r, !0);
        }),
        (a.prototype.lastIndexOf = function (e, t, r) {
          return y(this, e, t, r, !1);
        }),
        (a.prototype.write = function (e, t, r, n) {
          var i, s, o, a, u, c, l, f;
          if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0);
          else if (void 0 === r && 'string' == typeof t) (n = t), (r = this.length), (t = 0);
          else if (isFinite(t)) (t >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = 'utf8')) : ((n = r), (r = void 0));
          else throw Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          let h = this.length - t;
          if (((void 0 === r || r > h) && (r = h), (e.length > 0 && (r < 0 || t < 0)) || t > this.length)) throw RangeError('Attempt to write outside buffer bounds');
          n || (n = 'utf8');
          let d = !1;
          for (;;)
            switch (n) {
              case 'hex':
                return (function (e, t, r, n) {
                  let i;
                  r = Number(r) || 0;
                  let s = e.length - r;
                  n ? (n = Number(n)) > s && (n = s) : (n = s);
                  let o = t.length;
                  for (n > o / 2 && (n = o / 2), i = 0; i < n; ++i) {
                    let n = parseInt(t.substr(2 * i, 2), 16);
                    if (n != n) break;
                    e[r + i] = n;
                  }
                  return i;
                })(this, e, t, r);
              case 'utf8':
              case 'utf-8':
                return (i = t), (s = r), D(U(e, this.length - i), this, i, s);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return (
                  (o = t),
                  (a = r),
                  D(
                    (function (e) {
                      let t = [];
                      for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                      return t;
                    })(e),
                    this,
                    o,
                    a
                  )
                );
              case 'base64':
                return (u = t), (c = r), D(L(e), this, u, c);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return (
                  (l = t),
                  (f = r),
                  D(
                    (function (e, t) {
                      let r, n;
                      let i = [];
                      for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) (n = (r = e.charCodeAt(s)) >> 8), i.push(r % 256), i.push(n);
                      return i;
                    })(e, this.length - l),
                    this,
                    l,
                    f
                  )
                );
              default:
                if (d) throw TypeError('Unknown encoding: ' + n);
                (n = ('' + n).toLowerCase()), (d = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
        }),
        (a.prototype.slice = function (e, t) {
          let r = this.length;
          (e = ~~e), (t = void 0 === t ? r : ~~t), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
          let n = this.subarray(e, t);
          return Object.setPrototypeOf(n, a.prototype), n;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
            let n = this[e],
              i = 1,
              s = 0;
            for (; ++s < t && (i *= 256); ) n += this[e + s] * i;
            return n;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
            let n = this[e + --t],
              i = 1;
            for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
            return n;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || v(e, 1, this.length), this[e];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (e, t) {
            return (e >>>= 0), t || v(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (e, t) {
            return (e >>>= 0), t || v(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (e, t) {
            return (e >>>= 0), t || v(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (e, t) {
            return (e >>>= 0), t || v(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
          }),
        (a.prototype.readBigUInt64LE = N(function (e) {
          R((e >>>= 0), 'offset');
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && j(e, this.length - 8);
          let n = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
            i = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (a.prototype.readBigUInt64BE = N(function (e) {
          R((e >>>= 0), 'offset');
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && j(e, this.length - 8);
          let n = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
            i = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (a.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
          let n = this[e],
            i = 1,
            s = 0;
          for (; ++s < t && (i *= 256); ) n += this[e + s] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (a.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
          let n = t,
            i = 1,
            s = this[e + --n];
          for (; n > 0 && (i *= 256); ) s += this[e + --n] * i;
          return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s;
        }),
        (a.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0), t || v(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
        }),
        (a.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || v(e, 2, this.length);
          let r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || v(e, 2, this.length);
          let r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt32LE = function (e, t) {
          return (e >>>= 0), t || v(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
        }),
        (a.prototype.readInt32BE = function (e, t) {
          return (e >>>= 0), t || v(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
        }),
        (a.prototype.readBigInt64LE = N(function (e) {
          R((e >>>= 0), 'offset');
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && j(e, this.length - 8);
          let n = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
          return (BigInt(n) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e]);
        })),
        (a.prototype.readBigInt64BE = N(function (e) {
          R((e >>>= 0), 'offset');
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && j(e, this.length - 8);
          let n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
          return (BigInt(n) << BigInt(32)) + BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r);
        })),
        (a.prototype.readFloatLE = function (e, t) {
          return (e >>>= 0), t || v(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (a.prototype.readFloatBE = function (e, t) {
          return (e >>>= 0), t || v(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (a.prototype.readDoubleLE = function (e, t) {
          return (e >>>= 0), t || v(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (a.prototype.readDoubleBE = function (e, t) {
          return (e >>>= 0), t || v(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              A(this, e, t, r, n, 0);
            }
            let i = 1,
              s = 0;
            for (this[t] = 255 & e; ++s < r && (i *= 256); ) this[t + s] = (e / i) & 255;
            return t + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              A(this, e, t, r, n, 0);
            }
            let i = r - 1,
              s = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); ) this[t + i] = (e / s) & 255;
            return t + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (e, t, r) {
            return (e = +e), (t >>>= 0), r || A(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (e, t, r) {
            return (e = +e), (t >>>= 0), r || A(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (e, t, r) {
            return (e = +e), (t >>>= 0), r || A(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (e, t, r) {
            return (e = +e), (t >>>= 0), r || A(this, e, t, 4, 4294967295, 0), (this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e), t + 4;
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (e, t, r) {
            return (e = +e), (t >>>= 0), r || A(this, e, t, 4, 4294967295, 0), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
          }),
        (a.prototype.writeBigUInt64LE = N(function (e, t = 0) {
          return C(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
        (a.prototype.writeBigUInt64BE = N(function (e, t = 0) {
          return E(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
        (a.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            A(this, e, t, r, n - 1, -n);
          }
          let i = 0,
            s = 1,
            o = 0;
          for (this[t] = 255 & e; ++i < r && (s *= 256); ) e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1), (this[t + i] = (((e / s) >> 0) - o) & 255);
          return t + r;
        }),
        (a.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            A(this, e, t, r, n - 1, -n);
          }
          let i = r - 1,
            s = 1,
            o = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); ) e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1), (this[t + i] = (((e / s) >> 0) - o) & 255);
          return t + r;
        }),
        (a.prototype.writeInt8 = function (e, t, r) {
          return (e = +e), (t >>>= 0), r || A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
        }),
        (a.prototype.writeInt16LE = function (e, t, r) {
          return (e = +e), (t >>>= 0), r || A(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
        }),
        (a.prototype.writeInt16BE = function (e, t, r) {
          return (e = +e), (t >>>= 0), r || A(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
        }),
        (a.prototype.writeInt32LE = function (e, t, r) {
          return (e = +e), (t >>>= 0), r || A(this, e, t, 4, 2147483647, -2147483648), (this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24), t + 4;
        }),
        (a.prototype.writeInt32BE = function (e, t, r) {
          return (e = +e), (t >>>= 0), r || A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
        }),
        (a.prototype.writeBigInt64LE = N(function (e, t = 0) {
          return C(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
        })),
        (a.prototype.writeBigInt64BE = N(function (e, t = 0) {
          return E(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
        })),
        (a.prototype.writeFloatLE = function (e, t, r) {
          return I(this, e, t, !0, r);
        }),
        (a.prototype.writeFloatBE = function (e, t, r) {
          return I(this, e, t, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (e, t, r) {
          return O(this, e, t, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (e, t, r) {
          return O(this, e, t, !1, r);
        }),
        (a.prototype.copy = function (e, t, r, n) {
          if (!a.isBuffer(e)) throw TypeError('argument should be a Buffer');
          if ((r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length)) return 0;
          if (t < 0) throw RangeError('targetStart out of bounds');
          if (r < 0 || r >= this.length) throw RangeError('Index out of range');
          if (n < 0) throw RangeError('sourceEnd out of bounds');
          n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
          let i = n - r;
          return this === e && 'function' == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
        }),
        (a.prototype.fill = function (e, t, r, n) {
          let i;
          if ('string' == typeof e) {
            if (('string' == typeof t ? ((n = t), (t = 0), (r = this.length)) : 'string' == typeof r && ((n = r), (r = this.length)), void 0 !== n && 'string' != typeof n)) throw TypeError('encoding must be a string');
            if ('string' == typeof n && !a.isEncoding(n)) throw TypeError('Unknown encoding: ' + n);
            if (1 === e.length) {
              let t = e.charCodeAt(0);
              (('utf8' === n && t < 128) || 'latin1' === n) && (e = t);
            }
          } else 'number' == typeof e ? (e &= 255) : 'boolean' == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r) throw RangeError('Out of range index');
          if (r <= t) return this;
          if (((t >>>= 0), (r = void 0 === r ? this.length : r >>> 0), e || (e = 0), 'number' == typeof e)) for (i = t; i < r; ++i) this[i] = e;
          else {
            let s = a.isBuffer(e) ? e : a.from(e, n),
              o = s.length;
            if (0 === o) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (i = 0; i < r - t; ++i) this[i + t] = s[i % o];
          }
          return this;
        });
      let B = {};
      function x(e, t, r) {
        B[e] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, 'message', { value: t.apply(this, arguments), writable: !0, configurable: !0 }), (this.name = `${this.name} [${e}]`), this.stack, delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: e, writable: !0 });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function S(e) {
        let t = '',
          r = e.length,
          n = '-' === e[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function M(e, t, r, n, i, s) {
        if (e > r || e < t) {
          let n;
          let i = 'bigint' == typeof t ? 'n' : '';
          throw (
            ((n = s > 3 ? (0 === t || t === BigInt(0) ? `>= 0${i} and < 2${i} ** ${(s + 1) * 8}${i}` : `>= -(2${i} ** ${(s + 1) * 8 - 1}${i}) and < 2 ** ${(s + 1) * 8 - 1}${i}`) : `>= ${t}${i} and <= ${r}${i}`),
            new B.ERR_OUT_OF_RANGE('value', n, e))
          );
        }
        R(i, 'offset'), (void 0 === n[i] || void 0 === n[i + s]) && j(i, n.length - (s + 1));
      }
      function R(e, t) {
        if ('number' != typeof e) throw new B.ERR_INVALID_ARG_TYPE(t, 'number', e);
      }
      function j(e, t, r) {
        if (Math.floor(e) !== e) throw (R(e, r), new B.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e));
        if (t < 0) throw new B.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new B.ERR_OUT_OF_RANGE(r || 'offset', `>= ${r ? 1 : 0} and <= ${t}`, e);
      }
      x(
        'ERR_BUFFER_OUT_OF_BOUNDS',
        function (e) {
          return e ? `${e} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
        },
        RangeError
      ),
        x(
          'ERR_INVALID_ARG_TYPE',
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError
        ),
        x(
          'ERR_OUT_OF_RANGE',
          function (e, t, r) {
            let n = `The value of "${e}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 4294967296 ? (i = S(String(r))) : 'bigint' == typeof r && ((i = String(r)), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = S(i)), (i += 'n')),
              (n += ` It must be ${t}. Received ${i}`)
            );
          },
          RangeError
        );
      let k = /[^+/0-9A-Za-z-_]/g;
      function U(e, t) {
        let r;
        t = t || 1 / 0;
        let n = e.length,
          i = null,
          s = [];
        for (let o = 0; o < n; ++o) {
          if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || o + 1 === n) {
                (t -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && s.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (t -= 3) > -1 && s.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            s.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            s.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            s.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else throw Error('Invalid code point');
        }
        return s;
      }
      function L(e) {
        return n.toByteArray(
          (function (e) {
            if ((e = (e = e.split('=')[0]).trim().replace(k, '')).length < 2) return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          })(e)
        );
      }
      function D(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i) t[i + r] = e[i];
        return i;
      }
      function F(e, t) {
        return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
      }
      let T = (function () {
        let e = '0123456789abcdef',
          t = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
        }
        return t;
      })();
      function N(e) {
        return 'undefined' == typeof BigInt ? Q : e;
      }
      function Q() {
        throw Error('BigInt not supported');
      }
    },
    4658: function (e) {
      'use strict';
      var t = Object.prototype.hasOwnProperty,
        r = '~';
      function n() {}
      function i(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function s(e, t, n, s, o) {
        if ('function' != typeof n) throw TypeError('The listener must be a function');
        var a = new i(n, s || e, o),
          u = r ? r + t : t;
        return e._events[u] ? (e._events[u].fn ? (e._events[u] = [e._events[u], a]) : e._events[u].push(a)) : ((e._events[u] = a), e._eventsCount++), e;
      }
      function o(e, t) {
        0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
      }
      function a() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (a.prototype.eventNames = function () {
          var e,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (e = this._events)) t.call(e, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
        }),
        (a.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, s = n.length, o = Array(s); i < s; i++) o[i] = n[i].fn;
          return o;
        }),
        (a.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (a.prototype.emit = function (e, t, n, i, s, o) {
          var a = r ? r + e : e;
          if (!this._events[a]) return !1;
          var u,
            c,
            l = this._events[a],
            f = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), f)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, n), !0;
              case 4:
                return l.fn.call(l.context, t, n, i), !0;
              case 5:
                return l.fn.call(l.context, t, n, i, s), !0;
              case 6:
                return l.fn.call(l.context, t, n, i, s, o), !0;
            }
            for (c = 1, u = Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
          } else {
            var h,
              d = l.length;
            for (c = 0; c < d; c++)
              switch ((l[c].once && this.removeListener(e, l[c].fn, void 0, !0), f)) {
                case 1:
                  l[c].fn.call(l[c].context);
                  break;
                case 2:
                  l[c].fn.call(l[c].context, t);
                  break;
                case 3:
                  l[c].fn.call(l[c].context, t, n);
                  break;
                case 4:
                  l[c].fn.call(l[c].context, t, n, i);
                  break;
                default:
                  if (!u) for (h = 1, u = Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                  l[c].fn.apply(l[c].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (e, t, r) {
          return s(this, e, t, r, !1);
        }),
        (a.prototype.once = function (e, t, r) {
          return s(this, e, t, r, !0);
        }),
        (a.prototype.removeListener = function (e, t, n, i) {
          var s = r ? r + e : e;
          if (!this._events[s]) return this;
          if (!t) return o(this, s), this;
          var a = this._events[s];
          if (a.fn) a.fn !== t || (i && !a.once) || (n && a.context !== n) || o(this, s);
          else {
            for (var u = 0, c = [], l = a.length; u < l; u++) (a[u].fn !== t || (i && !a[u].once) || (n && a[u].context !== n)) && c.push(a[u]);
            c.length ? (this._events[s] = 1 === c.length ? c[0] : c) : o(this, s);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (e) {
          var t;
          return e ? ((t = r ? r + e : e), this._events[t] && o(this, t)) : ((this._events = new n()), (this._eventsCount = 0)), this;
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = r),
        (a.EventEmitter = a),
        (e.exports = a);
    },
    6701: function (e, t) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (t.read = function (e, t, r, n, i) {
        var s,
          o,
          a = 8 * i - n - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          l = -7,
          f = r ? i - 1 : 0,
          h = r ? -1 : 1,
          d = e[t + f];
        for (f += h, s = d & ((1 << -l) - 1), d >>= -l, l += a; l > 0; s = 256 * s + e[t + f], f += h, l -= 8);
        for (o = s & ((1 << -l) - 1), s >>= -l, l += n; l > 0; o = 256 * o + e[t + f], f += h, l -= 8);
        if (0 === s) s = 1 - c;
        else {
          if (s === u) return o ? NaN : (d ? -1 : 1) * (1 / 0);
          (o += Math.pow(2, n)), (s -= c);
        }
        return (d ? -1 : 1) * o * Math.pow(2, s - n);
      }),
        (t.write = function (e, t, r, n, i, s) {
          var o,
            a,
            u,
            c = 8 * s - i - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            h = 23 === i ? 5960464477539062e-23 : 0,
            d = n ? 0 : s - 1,
            p = n ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((a = isNaN(t) ? 1 : 0), (o = l))
              : ((o = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -o)) < 1 && (o--, (u *= 2)),
                o + f >= 1 ? (t += h / u) : (t += h * Math.pow(2, 1 - f)),
                t * u >= 2 && (o++, (u /= 2)),
                o + f >= l ? ((a = 0), (o = l)) : o + f >= 1 ? ((a = (t * u - 1) * Math.pow(2, i)), (o += f)) : ((a = t * Math.pow(2, f - 1) * Math.pow(2, i)), (o = 0)));
            i >= 8;
            e[r + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (o = (o << i) | a, c += i; c > 0; e[r + d] = 255 & o, d += p, o /= 256, c -= 8);
          e[r + d - p] |= 128 * g;
        });
    },
    6602: function (e, t, r) {
      'use strict';
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(3962),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, t, r) {
        var n,
          s = {},
          c = null,
          l = null;
        for (n in (void 0 !== r && (c = '' + r), void 0 !== t.key && (c = '' + t.key), void 0 !== t.ref && (l = t.ref), t)) o.call(t, n) && !u.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps) for (n in (t = e.defaultProps)) void 0 === s[n] && (s[n] = t[n]);
        return { $$typeof: i, type: e, key: c, ref: l, props: s, _owner: a.current };
      }
      (t.Fragment = s), (t.jsx = c), (t.jsxs = c);
    },
    9914: function (e, t, r) {
      'use strict';
      e.exports = r(6602);
    },
    2080: function (e, t, r) {
      'use strict';
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(3962),
        i =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        s = n.useState,
        o = n.useEffect,
        a = n.useLayoutEffect,
        u = n.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var l =
        'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = s({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                l = n[1];
              return (
                a(
                  function () {
                    (i.value = r), (i.getSnapshot = t), c(i) && l({ inst: i });
                  },
                  [e, r, t]
                ),
                o(
                  function () {
                    return (
                      c(i) && l({ inst: i }),
                      e(function () {
                        c(i) && l({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                u(r),
                r
              );
            };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
    },
    9407: function (e, t, r) {
      'use strict';
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(3962),
        i = r(4076),
        s =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        o = i.useSyncExternalStore,
        a = n.useRef,
        u = n.useEffect,
        c = n.useMemo,
        l = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
        var f = a(null);
        if (null === f.current) {
          var h = { hasValue: !1, value: null };
          f.current = h;
        } else h = f.current;
        f = c(
          function () {
            function e(e) {
              if (!u) {
                if (((u = !0), (o = e), (e = n(e)), void 0 !== i && h.hasValue)) {
                  var t = h.value;
                  if (i(t, e)) return (a = t);
                }
                return (a = e);
              }
              if (((t = a), s(o, e))) return t;
              var r = n(e);
              return void 0 !== i && i(t, r) ? t : ((o = e), (a = r));
            }
            var o,
              a,
              u = !1,
              c = void 0 === r ? null : r;
            return [
              function () {
                return e(t());
              },
              null === c
                ? void 0
                : function () {
                    return e(c());
                  },
            ];
          },
          [t, r, n, i]
        );
        var d = o(e, f[0], f[1]);
        return (
          u(
            function () {
              (h.hasValue = !0), (h.value = d);
            },
            [d]
          ),
          l(d),
          d
        );
      };
    },
    4076: function (e, t, r) {
      'use strict';
      e.exports = r(2080);
    },
    5173: function (e, t, r) {
      'use strict';
      e.exports = r(9407);
    },
    6450: function (e, t, r) {
      'use strict';
      r.d(t, {
        _: function () {
          return h;
        },
      });
      var n,
        i = r(7260);
      function s(e) {
        return 'string' == typeof e ? Number.parseInt(e, '0x' === e.trim().substring(0, 2) ? 16 : 10) : 'bigint' == typeof e ? Number(e) : e;
      }
      var o = r(2375),
        a = r(5818),
        u = r(7224),
        c = r(1179),
        l = r(6838),
        f = r(471),
        h = class extends o.wR {
          constructor({ chains: e, options: t } = {}) {
            let r = {
              shimDisconnect: !0,
              getProvider() {
                if ('undefined' == typeof window) return;
                let e = window.ethereum;
                return e?.providers ? e.providers[0] : e;
              },
              ...t,
            };
            super({ chains: e, options: r }),
              (0, o.ov)(this, 'id', 'injected'),
              (0, o.ov)(this, 'name'),
              (0, o.ov)(this, 'ready'),
              (0, o.Ko)(this, n, void 0),
              (0, o.ov)(this, 'shimDisconnectKey', `${this.id}.shimDisconnect`),
              (0, o.ov)(this, 'onAccountsChanged', (e) => {
                0 === e.length ? this.emit('disconnect') : this.emit('change', { account: (0, a.K)(e[0]) });
              }),
              (0, o.ov)(this, 'onChainChanged', (e) => {
                let t = s(e),
                  r = this.isChainUnsupported(t);
                this.emit('change', { chain: { id: t, unsupported: r } });
              }),
              (0, o.ov)(this, 'onDisconnect', async (e) => {
                if (1013 === e.code) {
                  let e = await this.getProvider();
                  if (e) {
                    let e = await this.getAccount();
                    if (e) return;
                  }
                }
                this.emit('disconnect'), this.options.shimDisconnect && this.storage?.removeItem(this.shimDisconnectKey);
              });
            let i = r.getProvider();
            if ('string' == typeof r.name) this.name = r.name;
            else if (i) {
              let e = (function (e) {
                if (!e) return 'Injected';
                let t = (e) =>
                  e.isApexWallet
                    ? 'Apex Wallet'
                    : e.isAvalanche
                    ? 'Core Wallet'
                    : e.isBackpack
                    ? 'Backpack'
                    : e.isBifrost
                    ? 'Bifrost Wallet'
                    : e.isBitKeep
                    ? 'BitKeep'
                    : e.isBitski
                    ? 'Bitski'
                    : e.isBlockWallet
                    ? 'BlockWallet'
                    : e.isBraveWallet
                    ? 'Brave Wallet'
                    : e.isCoinbaseWallet
                    ? 'Coinbase Wallet'
                    : e.isDawn
                    ? 'Dawn Wallet'
                    : e.isDefiant
                    ? 'Defiant'
                    : e.isEnkrypt
                    ? 'Enkrypt'
                    : e.isExodus
                    ? 'Exodus'
                    : e.isFrame
                    ? 'Frame'
                    : e.isFrontier
                    ? 'Frontier Wallet'
                    : e.isGamestop
                    ? 'GameStop Wallet'
                    : e.isHaqqWallet
                    ? 'HAQQ Wallet'
                    : e.isHyperPay
                    ? 'HyperPay Wallet'
                    : e.isImToken
                    ? 'ImToken'
                    : e.isHaloWallet
                    ? 'Halo Wallet'
                    : e.isKuCoinWallet
                    ? 'KuCoin Wallet'
                    : e.isMathWallet
                    ? 'MathWallet'
                    : e.isNovaWallet
                    ? 'Nova Wallet'
                    : e.isOkxWallet || e.isOKExWallet
                    ? 'OKX Wallet'
                    : e.isOneInchIOSWallet || e.isOneInchAndroidWallet
                    ? '1inch Wallet'
                    : e.isOpera
                    ? 'Opera'
                    : e.isPhantom
                    ? 'Phantom'
                    : e.isPortal
                    ? 'Ripio Portal'
                    : e.isRabby
                    ? 'Rabby Wallet'
                    : e.isRainbow
                    ? 'Rainbow'
                    : e.isStatus
                    ? 'Status'
                    : e.isTalisman
                    ? 'Talisman'
                    : e.isTally
                    ? 'Taho'
                    : e.isTokenPocket
                    ? 'TokenPocket'
                    : e.isTokenary
                    ? 'Tokenary'
                    : e.isTrust || e.isTrustWallet
                    ? 'Trust Wallet'
                    : e.isTTWallet
                    ? 'TTWallet'
                    : e.isXDEFI
                    ? 'XDEFI Wallet'
                    : e.isZerion
                    ? 'Zerion'
                    : e.isMetaMask
                    ? 'MetaMask'
                    : void 0;
                if (e.providers?.length) {
                  let r = new Set(),
                    n = 1;
                  for (let i of e.providers) {
                    let e = t(i);
                    e || ((e = `Unknown Wallet #${n}`), (n += 1)), r.add(e);
                  }
                  let i = [...r];
                  return i.length ? i : i[0] ?? 'Injected';
                }
                return t(e) ?? 'Injected';
              })(i);
              r.name ? (this.name = r.name(e)) : 'string' == typeof e ? (this.name = e) : (this.name = e[0]);
            } else this.name = 'Injected';
            this.ready = !!i;
          }
          async connect({ chainId: e } = {}) {
            try {
              let t = await this.getProvider();
              if (!t) throw new i.N();
              t.on && (t.on('accountsChanged', this.onAccountsChanged), t.on('chainChanged', this.onChainChanged), t.on('disconnect', this.onDisconnect)), this.emit('message', { type: 'connecting' });
              let r = await t.request({ method: 'eth_requestAccounts' }),
                n = (0, a.K)(r[0]),
                s = await this.getChainId(),
                o = this.isChainUnsupported(s);
              if (e && s !== e) {
                let t = await this.switchChain(e);
                (s = t.id), (o = this.isChainUnsupported(s));
              }
              return this.options.shimDisconnect && this.storage?.setItem(this.shimDisconnectKey, !0), { account: n, chain: { id: s, unsupported: o } };
            } catch (e) {
              if (this.isUserRejectedRequestError(e)) throw new u.ab(e);
              if (-32002 === e.code) throw new u.pT(e);
              throw e;
            }
          }
          async disconnect() {
            let e = await this.getProvider();
            e?.removeListener &&
              (e.removeListener('accountsChanged', this.onAccountsChanged),
              e.removeListener('chainChanged', this.onChainChanged),
              e.removeListener('disconnect', this.onDisconnect),
              this.options.shimDisconnect && this.storage?.removeItem(this.shimDisconnectKey));
          }
          async getAccount() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            let t = await e.request({ method: 'eth_accounts' });
            return (0, a.K)(t[0]);
          }
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            return e.request({ method: 'eth_chainId' }).then(s);
          }
          async getProvider() {
            let e = this.options.getProvider();
            return e && (0, o.qx)(this, n, e), (0, o.ac)(this, n);
          }
          async getWalletClient({ chainId: e } = {}) {
            let [t, r] = await Promise.all([this.getProvider(), this.getAccount()]),
              n = this.chains.find((t) => t.id === e);
            if (!t) throw Error('provider is required.');
            return (0, c.K)({ account: r, chain: n, transport: (0, l.P)(t) });
          }
          async isAuthorized() {
            try {
              if (this.options.shimDisconnect && !this.storage?.getItem(this.shimDisconnectKey)) return !1;
              let e = await this.getProvider();
              if (!e) throw new i.N();
              let t = await this.getAccount();
              return !!t;
            } catch {
              return !1;
            }
          }
          async switchChain(e) {
            let t = await this.getProvider();
            if (!t) throw new i.N();
            let r = (0, f.eC)(e);
            try {
              return (
                await Promise.all([
                  t.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: r }] }),
                  new Promise((t) =>
                    this.on('change', ({ chain: r }) => {
                      r?.id === e && t();
                    })
                  ),
                ]),
                this.chains.find((t) => t.id === e) ?? { id: e, name: `Chain ${r}`, network: `${r}`, nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'ETH' }, rpcUrls: { default: { http: [''] }, public: { http: [''] } } }
              );
            } catch (s) {
              let n = this.chains.find((t) => t.id === e);
              if (!n) throw new i.B({ chainId: e, connectorId: this.id });
              if (4902 === s.code || s?.data?.originalError?.code === 4902)
                try {
                  await t.request({
                    method: 'wallet_addEthereumChain',
                    params: [{ chainId: r, chainName: n.name, nativeCurrency: n.nativeCurrency, rpcUrls: [n.rpcUrls.public?.http[0] ?? ''], blockExplorerUrls: this.getBlockExplorerUrls(n) }],
                  });
                  let i = await this.getChainId();
                  if (i !== e) throw new u.ab(Error('User rejected switch after adding network.'));
                  return n;
                } catch (e) {
                  throw new u.ab(e);
                }
              if (this.isUserRejectedRequestError(s)) throw new u.ab(s);
              throw new u.x3(s);
            }
          }
          async watchAsset({ address: e, decimals: t = 18, image: r, symbol: n }) {
            let s = await this.getProvider();
            if (!s) throw new i.N();
            return s.request({ method: 'wallet_watchAsset', params: { type: 'ERC20', options: { address: e, decimals: t, image: r, symbol: n } } });
          }
          isUserRejectedRequestError(e) {
            return 4001 === e.code;
          }
        };
      n = new WeakMap();
    },
    2375: function (e, t, r) {
      'use strict';
      r.d(t, {
        Ko: function () {
          return l;
        },
        U9: function () {
          return h;
        },
        ac: function () {
          return c;
        },
        ov: function () {
          return a;
        },
        qx: function () {
          return f;
        },
        wR: function () {
          return d;
        },
      });
      var n = r(4658),
        i = r(5214),
        s = Object.defineProperty,
        o = (e, t, r) => (t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        a = (e, t, r) => (o(e, 'symbol' != typeof t ? t + '' : t, r), r),
        u = (e, t, r) => {
          if (!t.has(e)) throw TypeError('Cannot ' + r);
        },
        c = (e, t, r) => (u(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
        l = (e, t, r) => {
          if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        f = (e, t, r, n) => (u(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
        h = (e, t, r) => (u(e, t, 'access private method'), r),
        d = class extends n {
          constructor({ chains: e = [i.RJ, i.ws], options: t }) {
            super(), a(this, 'chains'), a(this, 'options'), a(this, 'storage'), (this.chains = e), (this.options = t);
          }
          getBlockExplorerUrls(e) {
            let { default: t, ...r } = e.blockExplorers ?? {};
            if (t) return [t.url, ...Object.values(r).map((e) => e.url)];
          }
          isChainUnsupported(e) {
            return !this.chains.some((t) => t.id === e);
          }
          setStorage(e) {
            this.storage = e;
          }
        };
    },
    7260: function (e, t, r) {
      'use strict';
      r.d(t, {
        B: function () {
          return i;
        },
        N: function () {
          return s;
        },
      });
      var n = r(2375),
        i = class extends Error {
          constructor({ chainId: e, connectorId: t }) {
            super(`Chain "${e}" not configured for connector "${t}".`), (0, n.ov)(this, 'name', 'ChainNotConfiguredForConnectorError');
          }
        },
        s = class extends Error {
          constructor() {
            super(...arguments), (0, n.ov)(this, 'name', 'ConnectorNotFoundError'), (0, n.ov)(this, 'message', 'Connector not found');
          }
        };
    },
    3162: function (e, t, r) {
      'use strict';
      r.d(t, {
        QB: function () {
          return eS;
        },
        $j: function () {
          return eH;
        },
        _g: function () {
          return eW;
        },
        o6: function () {
          return eq;
        },
        vZ: function () {
          return function e(t, r) {
            if (t === r) return !0;
            if (t && r && 'object' == typeof t && 'object' == typeof r) {
              let n, i;
              if (t.constructor !== r.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(r)) {
                if ((n = t.length) != r.length) return !1;
                for (i = n; 0 != i--; ) if (!e(t[i], r[i])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
              if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
              let s = Object.keys(t);
              if ((n = s.length) !== Object.keys(r).length) return !1;
              for (i = n; 0 != i--; ) if (!Object.prototype.hasOwnProperty.call(r, s[i])) return !1;
              for (i = n; 0 != i--; ) {
                let n = s[i];
                if (n && !e(t[n], r[n])) return !1;
              }
              return !0;
            }
            return t != t && r != r;
          };
        },
        zP: function () {
          return eJ;
        },
        EG: function () {
          return e6;
        },
        RQ: function () {
          return tt;
        },
        w6: function () {
          return e7;
        },
        Lk: function () {
          return te;
        },
        D0: function () {
          return e5;
        },
        iE: function () {
          return eK;
        },
        Hy: function () {
          return e8;
        },
        uV: function () {
          return eZ;
        },
        jr: function () {
          return eX;
        },
        wp: function () {
          return eQ;
        },
        If: function () {
          return e4;
        },
        uH: function () {
          return e3;
        },
        QC: function () {
          return e9;
        },
        pC: function () {
          return e$;
        },
        fq: function () {
          return e_;
        },
      });
      var n,
        i,
        s,
        o,
        a,
        u = r(6450),
        c = (e, t, r) => {
          if (!t.has(e)) throw TypeError('Cannot ' + r);
        },
        l = (e, t, r) => (c(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
        f = (e, t, r) => {
          if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        h = (e, t, r, n) => (c(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
        d = (e, t, r) => (c(e, t, 'access private method'), r),
        p = r(3089),
        g = r(4594),
        m = r(4275),
        y = r(7502);
      function b(e, t = {}) {
        let { key: r = 'fallback', name: n = 'Fallback', rank: i = !1, retryCount: s, retryDelay: o } = t;
        return ({ chain: t, pollingInterval: a = 4e3, timeout: u }) => {
          let c = e,
            l = () => {},
            f = (0, y.q)(
              {
                key: r,
                name: n,
                async request({ method: e, params: r }) {
                  let n = async (i = 0) => {
                    let s = c[i]({ chain: t, retryCount: 0, timeout: u });
                    try {
                      let t = await s.request({ method: e, params: r });
                      return l({ method: e, params: r, response: t, transport: s, status: 'success' }), t;
                    } catch (t) {
                      if ((l({ error: t, method: e, params: r, transport: s, status: 'error' }), (0, g.y)(t) || i === c.length - 1)) throw t;
                      return n(i + 1);
                    }
                  };
                  return n();
                },
                retryCount: s,
                retryDelay: o,
                type: 'fallback',
              },
              { onResponse: (e) => (l = e), transports: c.map((e) => e({ chain: t, retryCount: 0 })) }
            );
          if (i) {
            let e = 'object' == typeof i ? i : {};
            !(function ({ chain: e, interval: t = 4e3, onTransports: r, sampleCount: n = 10, timeout: i = 1e3, transports: s, weights: o = {} }) {
              let { stability: a = 0.7, latency: u = 0.3 } = o,
                c = [],
                l = async () => {
                  let o = await Promise.all(
                    s.map(async (t) => {
                      let r, n;
                      let s = t({ chain: e, retryCount: 0, timeout: i }),
                        o = Date.now();
                      try {
                        await s.request({ method: 'net_listening' }), (n = 1);
                      } catch {
                        n = 0;
                      } finally {
                        r = Date.now();
                      }
                      let a = r - o;
                      return { latency: a, success: n };
                    })
                  );
                  c.push(o), c.length > n && c.shift();
                  let f = Math.max(...c.map((e) => Math.max(...e.map(({ latency: e }) => e)))),
                    h = s
                      .map((e, t) => {
                        let r = c.map((e) => e[t].latency),
                          n = r.reduce((e, t) => e + t, 0) / r.length,
                          i = c.map((e) => e[t].success),
                          s = i.reduce((e, t) => e + t, 0) / i.length;
                        return 0 === s ? [0, t] : [u * (1 - n / f) + a * s, t];
                      })
                      .sort((e, t) => t[0] - e[0]);
                  r(h.map(([, e]) => s[e])), await (0, m.D)(t), l();
                };
              l();
            })({ chain: t, interval: e.interval ?? a, onTransports: (e) => (c = e), sampleCount: e.sampleCount, timeout: e.timeout, transports: c, weights: e.weights });
          }
          return f;
        };
      }
      var w = r(9999),
        v = r(3926),
        A = r(7082),
        C = r(7795),
        E = r(7260),
        P = r(7938);
      let I = (e) => (t, r, n) => {
          let i = n.subscribe;
          n.subscribe = (e, t, r) => {
            let s = e;
            if (t) {
              let i = (null == r ? void 0 : r.equalityFn) || Object.is,
                o = e(n.getState());
              (s = (r) => {
                let n = e(r);
                if (!i(o, n)) {
                  let e = o;
                  t((o = n), e);
                }
              }),
                (null == r ? void 0 : r.fireImmediately) && t(o, o);
            }
            return i(s);
          };
          let s = e(t, r, n);
          return s;
        },
        O = (e) => (t) => {
          try {
            let r = e(t);
            if (r instanceof Promise) return r;
            return {
              then: (e) => O(e)(r),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => O(t)(e),
            };
          }
        },
        B = (e, t) => (r, n, i) => {
          let s,
            o,
            a = { getStorage: () => localStorage, serialize: JSON.stringify, deserialize: JSON.parse, partialize: (e) => e, version: 0, merge: (e, t) => ({ ...t, ...e }), ...t },
            u = !1,
            c = new Set(),
            l = new Set();
          try {
            s = a.getStorage();
          } catch (e) {}
          if (!s)
            return e(
              (...e) => {
                console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), r(...e);
              },
              n,
              i
            );
          let f = O(a.serialize),
            h = () => {
              let e;
              let t = a.partialize({ ...n() }),
                r = f({ state: t, version: a.version })
                  .then((e) => s.setItem(a.name, e))
                  .catch((t) => {
                    e = t;
                  });
              if (e) throw e;
              return r;
            },
            d = i.setState;
          i.setState = (e, t) => {
            d(e, t), h();
          };
          let p = e(
              (...e) => {
                r(...e), h();
              },
              n,
              i
            ),
            g = () => {
              var e;
              if (!s) return;
              (u = !1), c.forEach((e) => e(n()));
              let t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, n())) || void 0;
              return O(s.getItem.bind(s))(a.name)
                .then((e) => {
                  if (e) return a.deserialize(e);
                })
                .then((e) => {
                  if (e) {
                    if ('number' != typeof e.version || e.version === a.version) return e.state;
                    if (a.migrate) return a.migrate(e.state, e.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                  }
                })
                .then((e) => {
                  var t;
                  return r((o = a.merge(e, null != (t = n()) ? t : p)), !0), h();
                })
                .then(() => {
                  null == t || t(o, void 0), (u = !0), l.forEach((e) => e(o));
                })
                .catch((e) => {
                  null == t || t(void 0, e);
                });
            };
          return (
            (i.persist = {
              setOptions: (e) => {
                (a = { ...a, ...e }), e.getStorage && (s = e.getStorage());
              },
              clearStorage: () => {
                null == s || s.removeItem(a.name);
              },
              getOptions: () => a,
              rehydrate: () => g(),
              hasHydrated: () => u,
              onHydrate: (e) => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
            }),
            g(),
            o || p
          );
        },
        x = (e, t) => (r, n, i) => {
          let s,
            o = {
              storage: (function (e, t) {
                let r;
                try {
                  r = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var n;
                    let i = (e) => (null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver)),
                      s = null != (n = r.getItem(e)) ? n : null;
                    return s instanceof Promise ? s.then(i) : i(s);
                  },
                  setItem: (e, n) => r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
                  removeItem: (e) => r.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            a = !1,
            u = new Set(),
            c = new Set(),
            l = o.storage;
          if (!l)
            return e(
              (...e) => {
                console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`), r(...e);
              },
              n,
              i
            );
          let f = () => {
              let e = o.partialize({ ...n() });
              return l.setItem(o.name, { state: e, version: o.version });
            },
            h = i.setState;
          i.setState = (e, t) => {
            h(e, t), f();
          };
          let d = e(
              (...e) => {
                r(...e), f();
              },
              n,
              i
            ),
            p = () => {
              var e, t;
              if (!l) return;
              (a = !1),
                u.forEach((e) => {
                  var t;
                  return e(null != (t = n()) ? t : d);
                });
              let i = (null == (t = o.onRehydrateStorage) ? void 0 : t.call(o, null != (e = n()) ? e : d)) || void 0;
              return O(l.getItem.bind(l))(o.name)
                .then((e) => {
                  if (e) {
                    if ('number' != typeof e.version || e.version === o.version) return e.state;
                    if (o.migrate) return o.migrate(e.state, e.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                  }
                })
                .then((e) => {
                  var t;
                  return r((s = o.merge(e, null != (t = n()) ? t : d)), !0), f();
                })
                .then(() => {
                  null == i || i(s, void 0), (s = n()), (a = !0), c.forEach((e) => e(s));
                })
                .catch((e) => {
                  null == i || i(void 0, e);
                });
            };
          return (
            (i.persist = {
              setOptions: (e) => {
                (o = { ...o, ...e }), e.storage && (l = e.storage);
              },
              clearStorage: () => {
                null == l || l.removeItem(o.name);
              },
              getOptions: () => o,
              rehydrate: () => p(),
              hasHydrated: () => a,
              onHydrate: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
            }),
            o.skipHydration || p(),
            s || d
          );
        },
        S = (e, t) => ('getStorage' in t || 'serialize' in t || 'deserialize' in t ? (console.warn('[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.'), B(e, t)) : x(e, t)),
        M = (e) => {
          let t;
          let r = new Set(),
            n = (e, n) => {
              let i = 'function' == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != n ? n : 'object' != typeof i) ? i : Object.assign({}, t, i)), r.forEach((r) => r(t, e));
              }
            },
            i = () => t,
            s = {
              setState: n,
              getState: i,
              subscribe: (e) => (r.add(e), () => r.delete(e)),
              destroy: () => {
                console.warn('[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'),
                  r.clear();
              },
            };
          return (t = e(n, i, s)), s;
        },
        R = (e) => (e ? M(e) : M);
      var j = r(3790),
        k = r(5064),
        U = r(8405),
        L = r(9302);
      function D(e, t) {
        if (Object.is(e, t)) return !0;
        if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
        if (e instanceof Map && t instanceof Map) {
          if (e.size !== t.size) return !1;
          for (let [r, n] of e) if (!Object.is(n, t.get(r))) return !1;
          return !0;
        }
        if (e instanceof Set && t instanceof Set) {
          if (e.size !== t.size) return !1;
          for (let r of e) if (!t.has(r)) return !1;
          return !0;
        }
        let r = Object.keys(e);
        if (r.length !== Object.keys(t).length) return !1;
        for (let n = 0; n < r.length; n++) if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Object.is(e[r[n]], t[r[n]])) return !1;
        return !0;
      }
      function F(e) {
        var t;
        let r;
        return (
          (t = (function (e) {
            let t = 0;
            function r() {
              return (e[t++] << 8) | e[t++];
            }
            let n = r(),
              i = 1,
              s = [0, 1];
            for (let e = 1; e < n; e++) s.push((i += r()));
            let o = r(),
              a = t;
            t += o;
            let u = 0,
              c = 0;
            function l() {
              return 0 == u && ((c = (c << 8) | e[t++]), (u = 8)), (c >> --u) & 1;
            }
            let f = 2147483648 - 1,
              h = 0;
            for (let e = 0; e < 31; e++) h = (h << 1) | l();
            let d = [],
              p = 0,
              g = 2147483648;
            for (;;) {
              let e = Math.floor(((h - p + 1) * i - 1) / g),
                t = 0,
                r = n;
              for (; r - t > 1; ) {
                let n = (t + r) >>> 1;
                e < s[n] ? (r = n) : (t = n);
              }
              if (0 == t) break;
              d.push(t);
              let o = p + Math.floor((g * s[t]) / i),
                a = p + Math.floor((g * s[t + 1]) / i) - 1;
              for (; ((o ^ a) & 1073741824) == 0; ) (h = ((h << 1) & f) | l()), (o = (o << 1) & f), (a = ((a << 1) & f) | 1);
              for (; o & ~a & 536870912; ) (h = (1073741824 & h) | ((h << 1) & (f >>> 1)) | l()), (o = (o << 1) ^ 1073741824), (a = ((1073741824 ^ a) << 1) | 1073741825);
              (p = o), (g = 1 + a - o);
            }
            let m = n - 4;
            return d.map((t) => {
              switch (t - m) {
                case 3:
                  return m + 65792 + ((e[a++] << 16) | (e[a++] << 8) | e[a++]);
                case 2:
                  return m + 256 + ((e[a++] << 8) | e[a++]);
                case 1:
                  return m + e[a++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'].forEach((e, r) => (t[e.charCodeAt(0)] = r));
              let r = e.length,
                n = new Uint8Array((6 * r) >> 3);
              for (let i = 0, s = 0, o = 0, a = 0; i < r; i++) (a = (a << 6) | t[e.charCodeAt(i)]), (o += 6) >= 8 && (n[s++] = a >> (o -= 8));
              return n;
            })(e)
          )),
          (r = 0),
          () => t[r++]
        );
      }
      function T(e, t = 0) {
        let r = [];
        for (;;) {
          let n = e(),
            i = e();
          if (!i) break;
          t += n;
          for (let e = 0; e < i; e++) r.push(t + e);
          t += i + 1;
        }
        return r;
      }
      function N(e) {
        return q(() => {
          let t = T(e);
          if (t.length) return t;
        });
      }
      function Q(e) {
        let t = [];
        for (;;) {
          let r = e();
          if (0 == r) break;
          t.push(
            (function (e, t) {
              let r = 1 + t(),
                n = t(),
                i = q(t);
              return G(i.length, 1 + e, t).flatMap((e, t) => {
                let [s, ...o] = e;
                return Array(i[t])
                  .fill()
                  .map((e, t) => {
                    let i = t * n;
                    return [s + t * r, o.map((e) => e + i)];
                  });
              });
            })(r, e)
          );
        }
        for (;;) {
          let r = e() - 1;
          if (r < 0) break;
          t.push(G(1 + e(), 1 + r, e).map((e) => [e[0], e.slice(1)]));
        }
        return t.flat();
      }
      function q(e) {
        let t = [];
        for (;;) {
          let r = e(t.length);
          if (!r) break;
          t.push(r);
        }
        return t;
      }
      function G(e, t, r) {
        let n = Array(e)
          .fill()
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let r = Array(e);
            for (let i = 0, s = 0; i < e; i++) {
              var n;
              r[i] = s += 1 & (n = t()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(e, r).forEach((e, t) => n[t].push(e));
        return n;
      }
      var z = F(
        'AEgSbwjEDVYByQKaAQsBOQDpATQAngDUAHsAoABoANQAagCNAEQAhABMAHIAOwA9ACsANgAmAGIAHgAvACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGAAeABMAFwAXAA0ADgAWAA8AFAAVBFsF1QEXE0o3xAXUALIArkABaACmAgPGAK6AMDAwMAE/qAYK7P4HQAblMgVYBVkAPSw5Afa3EgfJwgAPA8meNALGCjACjqIChtk/j2+KAsXMAoPzASDgCgDyrgFCAi6OCkCQAOQA4woWABjVuskNDD6eBBx4AP4COhi+D+wKBirqBgSCaA0cBy4ArABqku+mnIAAXAaUJAbqABwAPAyUFvyp/Mo8INAIvCoDshQ8APcubKQAon4ZABgEJtgXAR4AuhnOBPsKIE04CZgJiR8cVlpM5INDABQADQAWAA9sVQAiAA8ASO8W2T30OVnKluYvChEeX05ZPe0AFAANABYAD2wgXUCYAMPsABwAOgzGFryp/AHauQVcBeMC0KACxLEKTR2kZhR0Gm5M9gC8DmgC4gAMLjSKF8qSAoF8ARMcAL4OaALiAAwuAUlQJpJMCwMt/AUpCthqGK4B2EQAciwSeAIyFiIDKCi6OGwAOuIB9iYAyA7MtgEcZIIAsgYABgCK1EoFHNZsGACoKNIBogAAAAAAKy4DnABoAQoaPu43dQQZGACrAcgCIgDgLBJ0OvRQsTOiKDVJBfsoBVoFWbC5BWo7XkITO1hCmHuUZmCh+QwUA8YIJvJ4JASkTAJUVAJ2HKwoAZCkpjZcA0YYBIRiCgDSBqxAMCQHKgI6XgBsAWIgcgCEHhoAlgFKuAAoahgBsMYDOC4iRFQBcFoGZgJmAPJKGAMqAgYASkIArABeAHQALLYGCPTwGo6AAAAKIgAqALQcSAHSAdwIDDKXeYHpAAsAEgA1AD4AOTR3etTBEGAQXQJNCkxtOxUMAq0PpwvmERYM0irM09kANKoH7ANUB+wDVANUB+wH7ANUB+wDVANUA1QDVBwL8BvUwRBgD0kEbgWPBYwE1wiEJkoRggcpCNNUDnQfHEgDRgD9IyZJHTuUMwwlQ0wNTQQH/TZDbKh9OQNIMaxU9pCjA8wyUDltAh5yEqEAKw90HTW2Tn96SHGhCkxPr7WASWNOaAK/Oqk/+QoiCZRvvHdPBj4QGCeiEPQMMAGyATgN6kvVBO4GOATGH3oZFg/KlZkIoi3aDOom4C6egFcj8iqABepL8TzaC0pRZQ9WC2IJ4DpggUsDHgEKIogK2g02CGoQ8ArGaA3iEUIHNgPSSZcAogb+Cw4dMhWyJg1iqQsGOXQG+BrzC4wmrBMmevkF0BoeBkoBJhr8AMwu5IWtWi5cGU9cBgALIiPEFKVQHQ0iQLR4RRoYBxIlpgKOQ21KhFEzHpAh8zw6DWMuEFF5B/I8AhlMC348m0aoRQsRzz6KPUUiRkwpBDJ8LCwniAnMD4IMtnxvAVYJHgmuDG4TLhEUN8IINgcWKpchJxIIHkaSYJcE9JwD8BPOAwgFPAk+BxADshwqEysVJgUKgSHUAvA20i6wAoxWfQEUBcgPIh/cEE1H3Q7mCJgCYgOAJegAKhUeABQimAhAYABcj9VTAi7ICMRqaSNxA2QU5F4RcAeODlQHpBwwFbwc3nDFXgiGBSigrAlYAXIJlgFcBOAIBjVYjJ0gPmdQi1UYmCBeQTxd+QIuDGIVnES6h3UCiA9oEhgBMgFwBzYM/gJ0EeoRaBCSCOiGATWyM/U6IgRMIYAgDgokA0xsywskJvYM9WYBoBJfAwk0OnfrZ6hgsyEX+gcWMsJBXSHuC49PygyZGr4YP1QrGeEHvAPwGvAn50FUBfwDoAAQOkoz6wS6C2YIiAk8AEYOoBQH1BhnCm6MzQEuiAG0lgNUjoACbIwGNAcIAGQIhAV24gAaAqQIoAACAMwDVAA2AqoHmgAWAII+AToDJCwBHuICjAOQCC7IAZIsAfAmBBjADBIA9DRuRwLDrgKAZ2afBdpVAosCRjIBSiIEAktETgOsbt4A2ABIBhDcRAESqEfIF+BAAdxsKADEAPgAAjIHAj4BygHwagC0AVwLLgmfsLIBSuYmAIAAEmgB1AKGANoAMgB87gFQAEoFVvYF0AJMRgEOLhUoVF4BuAMcATABCgB2BsiKosYEHARqB9ACEBgV3gLvKweyAyLcE8pCwgK921IAMhMKNQqkCqNgWF0wAy5vPU0ACx+lPsQ/SwVOO1A7VTtQO1U7UDtVO1A7VTtQO1UDlLzfvN8KaV9CYegMow3RRMU6RhPYYE5gLxPFLbQUvhXLJVMZOhq5JwIl4VUGDwEt0GYtCCk0che5ADwpZYM+Y4MeLQpIHORTjlT1LRgArkufM6wNqRsSRD0FRHXqYicWCwofAmR+AmI/WEqsWDcdAqH0AmiVAmYGAp+BOBgIAmY4AmYjBGsEfAN/EAN+jzkDOXQUOX86ICACbBoCMjM4BwJtxAJtq+yHMGRCKAFkANsA3gBHAgeVDIoA+wi/AAqyAncsAnafPAJ5SEACeLcaWdhFq0bwAnw8AnrFAn0GAnztR/1IemAhACgSSVVKWBIUSskC0P4C0MlLJAOITAOH40TCkS8C8p5dAAMDq0vLTCoiAMxNSU2sAos8AorVvhgEGkBkArQCjjQCjlk9lH4CjtYCjll1UbFTMgdS0VSCApP4ApMJAOYAGVUbVaxVzQMsGCmSgzLeeGNFODYCl5wC769YHqUAViIClowClnmZAKZZqVoGfkoAOAKWsgKWS1xBXM4CmcgCmWFcx10EFgKcmDm/OpoCnBMCn5gCnrWHABoMLicMAp3uAp6PALI6YTFh7AKe0AKgawGmAp6cHAKeS6JjxWQkIigCJ6wCJnsCoPgCoEnUAqYsAqXLAqf8AHoCp+9oeWiuAABGahlqzgKs4AKsqwKtZAKs/wJXGgJV2QKx3tQDH0tslAKyugoCsuUUbN1tYG1FXAMlygK2WTg8bo0DKUICuFsCuUQSArkndHAzcN4CvRYDLa8DMg4CvoVx/wMzbgK+F3Mfc0wCw8gCwwFzf3RIMkJ03QM8pAM8lwM9vALFeQLGRALGDYYCyGZOAshBAslMAskrAmSaAt3PeHZeeKt5IkvNAxigZv8CYfEZ8JUhewhej164DgLPaALPaSxIUM/wEJwAw6oCz3ABJucDTg9+SAIC3CQC24cC0kwDUlkDU1wA/gNViYCGPMgT6l1CcoLLg4oC2sQC2duEDYRGpzkDhqIALANkC4ZuVvYAUgLfYgLetXB0AuIs7REB8y0kAfSYAfLPhALr8ALpbXYC6vYC6uEA9kQBtgLuhgLrmZanlwAC7jwDhd2YdnDdcZ4C8wAAZgOOE5mQAvcQA5FrA5KEAveVAvnWAvhjmhmaqLg0mxsDnYAC/vcBGAA2nxmfsAMFigOmZwOm1gDOwgMGZ6GFogIGAwxGAQwBHAdqBl62ZAIAuARovA6IHrAKABRyNgAgAzASSgOGfAFgJB4AjOwAHgDmoAScjgi0BhygwgCoBRK86h4+PxZ5BWk4P0EsQiJCtV9yEl+9AJbGBTMAkE0am7o7J2AzErrQDjAYxxiKyfcFWAVZBVgFWQVkBVkFWAVZBVgFWQVYBVkFWAVZRxYI2IZoAwMDCmVe6iwEygOyBjC8vAC8BKi8AOhBKhazBUc+aj5xQkBCt192OF/pAFgSM6wAjP/MbMv9puhGez4nJAUsFyg3Nn5u32vB8hnDLGoBbNdvMRgFYAVrycLJuQjQSlwBAQEKfV5+jL8AND+CAAQW0gbmriQGAIzEDAMCDgDlZh4+JSBLQrJCvUI5JF8oYDcoOSQJwj4KRT9EPnk+gj5xPnICikK9SkM8X8xPUGtOCy1sVTBrDG8gX+E0OxwJaJwKYyQsPR4nQqxCvSzMAsv9X8oPIC8KCQoAACN+nt9rOy5LGMmsya0JZsLMzQphQWAP5hCkEgCTjh5GQiYbqm06zjkKND9EPnFCQBwICx5NSG1cLS5a4rwTCn7uHixCQBxeCUsKDzRVREM4BTtEnC0KghwuQkAb9glUIyQZMTIBBo9i8F8KcmTKYAxgLiRvAERgGjoDHB9gtAcDbBFmT2BOEgIAZOhgFmCWYH5gtGBMYJJpFhgGtg/cVqq8WwtDF6wBvCzOwgMgFgEdBB8BegJtMDGWU4EBiwq5SBsA5SR0jwvLDqdN6wGcAoidUAVBYAD4AD4LATUXWHsMpg0lILuwSABQDTUAFhO4NVUC0wxLZhEcANlPBnYECx9bADIAtwKbKAsWcKwzOaAaAVwBhwn9A9ruEAarBksGugAey1aqWwq7YhOKCy1ADrwBvAEjA0hbKSkpIR8gIi0TJwciDY4AVQJvWJFKlgJvIA9ySAHUdRDPUiEaqrFN6wcSBU1gAPgAPgsBewAHJW0LiAymOTEuyLBXDgwAYL0MAGRKaFAiIhzAADIAtwKbKC08D88CkRh8ULxYyXRzjtilnA72mhU+G+0S2hIHDxwByAk7EJQGESwNNwwAPAC0zwEDAKUA4gCbizAAFQBcG8cvbXcrDsIRAzwlRNTiHR8MG34CfATCC6vxbQA4Oi4Opzkuz6IdB7wKABA7Ls8SGgB9rNsdD7wbSBzOoncfAT4qYB0C7KAJBE3z5R9mDL0M+wg9Cj8ABcELPgJMDbwIvQ09CT0KvS7PoisOvAaYAhwPjBriBBwLvBY8AKELPBC8BRihe90AO2wMPQACpwm9BRzR9QYFB2/LBnwAB7wSXBISvQECAOsCAAB1FVwHFswV/HAXvBg8AC68AuyovAAevAJWISuAAAG8AALkFT0VvCvso7zJqDwEAp8nTAACXADn3hm8CaVcD7/FAPUafAiiBQv/cQDfvKe8GNwavKOMeXMG/KmchAASvAcbDAADlABtvAcAC7ynPAIaPLsIopzLDvwHwak8AOF8L7dtvwNJAAPsABW8AAb8AAm8AGmMABq8AA68Axi8jmoV/AABXAAObAAuTB8ABrwAF7wIIgANSwC6vCcAA7wADpwq7ACyWwAcHAAbvAAB7AqiAAXHCxYV3AAHnABCvAEDAGm8AAt8AB28AAi8CaIABcsAbqAZ1gCSCCIABcsAATwAB9wAHZwIIgAGmwAJfAAbLABtHADmvIEACFwACDwAFLwAaPwJIgAGywDjjAAJPAuiDsX7YAAHPABunUBJAEgACrwFAAM8AAmuAzgABxwAGXwAAgym/AAKHAAKPAAJ/KfsBrwACRwAAwwAEDwBABQ8ABFsAA+MAA3sAA28ABkMBxYcABU8AG6cFrQBvAC7ABM8BABpLAsA4UwAAjwABFMAF3wFHAAG0QAYvB8BfClTADpGALAJBw4McwApK3EBpQYIXwJtJA0ACghwTG1gK4oggRVjLjcDogq1AALZABcC/ARvAXdzSFMVIgNQAhY/AS0GBHRHvnxTe0EAKgAyAvwAVAvcAHyRLQEsAHfmDhIzRwJLAFgGAAJRAQiLzQB5PAQhpgBbANcWAJZpOCCMAM5ssgDQ1RcJw3Z0HBlXHgrSAYmRrCNUVE5JEz3DivoAgB04QSos4RKYUABzASosMSlDGhADMVYE+MbvAExm3QBrAnICQBF7Osh4LzXWBhETIAUVCK6v/xPNACYAAQIbAIYAiQCONgDjALQA1QCdPQC7AKsApgChAOcAnwDTAJwA4AEBAPwAwAB6AFsAywDNAPwA1wDrAIkAogEqAOMA2ADVBAIIKzTT09PTtb/bzM/NQjEWAUsBVS5GAVMBYgFhAVQBRUpCRGcMAUwUBgkEMzcMBwAgDSQmKCs3OTk8PDw9Pg0/HVBQUFBSUlFSKFNUVlVVHFxgYF9hYCNlZ29ucXFxcXFxc3Nzc3Nzc3Nzc3N1dXZ1dFsAPesAQgCTAHEAKwBf8QCHAFAAUAAwAm/oAIT+8fEAXQCM6wCYAEgAWwBd+PipAH4AfgBiAE8AqgAdAK8AfAI5AjwA9QDgAPcA9wDhAPgA4gDiAOEA3wAoAnQBSgE5ATcBTQE3ATcBNwEyATEBMQExARUBURAAKgkBAEwYCxcEFhcPAIcAjwCfAEoAYxkCKgBvAGgAkAMOAyArAxpCP0gqAIoCSADAAlACnQC5Ao8CjwKPAo8CjwKPAoQCjwKPAo8CjwKPAo8CjgKOApECmQKQAo8CjwKNAo0CjQKNAosCjgJuAc0CkAKYAo8CjwKOF3oMAPcGA5gCWgIzGAFNETYC2xILLBQBRzgUTpIBdKU9AWJaAP4DOkgA/wCSKh4ZkGsAKmEAagAvAIoDlcyM8K+FWwa7LA/DEgKe1nUrCwQkWwGzAN5/gYB/gX+Cg4N/hIeFf4aJh4GIg4mDin+Lf4x/jYuOf49/kIORf5J/k3+Uf5WElomXg5h/AIMloQCEBDwEOQQ7BD4EPARCBD8EOgRABEIEQQQ9BD8EQgCkA4gAylIA0AINAPdbAPcBGgD3APUA9QD2APXVhSRmvwD3APUA9QD2APUdAIpbAPcAigEaAPcAigLtAPcAitWFJGa/HQD4WwEaAPcA9wD1APUA9gD1APgA9QD1APYA9dWFJGa/HQCKWwEaAPcAigD3AIoC7QD3AIrVhSRmvx0CRAE3AksBOgJMwgOfAu0Dn9WFJGa/HQCKWwEaA58AigOfAIoC7QOfAIrVhSRmvx0EMQCKBDIAigeOMm4hLQCKAT9vBCQA/gDHWwMAVVv/FDMDAIoDPtkASgMAigMAl2dBtv/TrfLzakaPh3aztmIuZQrR3ER2n5Yo+qNR2jK/aP/V04UK1njIJXLgkab9PjOxyJDVbIN3R/FZLoZVl2kYFQIZ7V6LpRqGDt9OdDohnJKp5yX/HLj0voPpLrneDaN11t5W3sSM4ALscgSw8fyWLVkKa/cNcQmjYOgTLZUgOLi2F05g4TR0RfgZ4PBdntxdV3qvdxQt8DeaMMgjJMgwUxYN3tUNpUNx21AvwADDAIa0+raTWaoBXmShAl5AThpMi282o+WzOKMlxjHj7a+DI6AM6VI9w+xyh3Eyg/1XvPmbqjeg2MGXugHt8wW03DQMRTd5iqqOhjLvyOCcKtViGwAHVLyl86KqvxVX7MxSW8HLq6KCrLpB8SspAOHO9IuOwCh9poLoMEha9CHCxlRAXJNDobducWjqhFHqCkzjTM2V9CHslwq4iU19IxqhIFZMve15lDTiMVZIPdADXGxTqzSTv0dDWyk1ht430yvaYCy9qY0MQ3cC5c1uw4mHcTGkMHTAGC99TkNXFAiLQgw9ZWhwKJjGCe+J5FIaMpYhhyUnEgfrF3zEtzn40DdgCIJUJfZ0mo3eXsDwneJ8AYCr7Vx2eHFnt2H6ZEyAHs9JoQ4Lzh5zBoGOGwAz37NOPuqSNmZf51hBEovtpm2T1wI79OBWDyvCFYkONqAKGVYgIL0F+uxTcMLSPtFbiNDbBPFgip8MGDmLLHbSyGXdCMO6f7teiW9EEmorZ+75KzanZwvUySgjoUQBTfHlOIerJs6Y9wLlgDw18AB1ne0tZRNgGjcrqHbtubSUooEpy4hWpDzTSrmvqw0H9AoXQLolMt9eOM+l9RitBB1OBnrdC1XL4yLFyXqZSgZhv7FnnDEXLUeffb4nVDqYTLY6X7gHVaK4ZZlepja2Oe6OhLDI/Ve5SQTCmJdH3HJeb14cw99XsBQAlDy5s5kil2sGezZA3tFok2IsNja7QuFgM30Hff3NGSsSVFYZLOcTBOvlPx8vLhjJrSI7xrNMA/BOzpBIJrdR1+v+zw4RZ7ry6aq4/tFfvPQxQCPDsXlcRvIZYl+E5g3kJ+zLMZon0yElBvEOQTh6SaAdIO6BwdqJqfvgU+e8Y65FQhdiHkZMVt9/39N2jGd26J6cNjq8cQIyp6RonRPgVn2fl89uRDcQ27GacaN0MPrcNyRlbUWelKfDfyrNVVGBG5sjd3jXzTx06ywyzuWn5jbvEfPPCTbpClkgEu9oPLKICxU5HuDe3jA1XnvU85IYYhaEtOU1YVWYhEFsa4/TQj3rHdsU2da2eVbF8YjSI0m619/8bLMZu3xildwqM7zf1cjn4Whx0PSYXcY5bR7wEQfGC7CTOXwZdmsdTO8q3uGm7Rh/RfCWwpzBHCAaVfjxgibL5vUeL0pH6bzDmI9yCXKC/okkmbc28OJvI87L/bjFzpq0DHepw4kT1Od+fL7cyuFaRgfaUWB2++TCFvz11J0leEtrGkpccfX9z2LY39sph4PBHCjNOOkd0ybUm+ZzS8GkFbqMpq8uiX2yHpa0jllTLfGTDBMYR6FT5FWLLDPMkYxt1Q0eyMvxJWztDjy0m6VvZPvamrFXjHmPpU6WxrZqH6WW//I37RwvqPQhPz8I3RPuXAk1C94ZprQWm9iGM/KgiGDO6SV9sjp+Jmk4TBajMNJ5zzWZ1k1jrteQQBp9C2dOvmbIeeEME8y573Q8TgGe+ZCzutM45gYLBzYm2LNvgq2kebAbMpHRDSyh6dQ27GbsAAdCqQVVXWC1C+zpwBM2Lr4eqtobmmu1vJEDlIQR1iN8CUWpztq50z7FFQBn3SKViX6wSqzVQCoYvAjByjeSa+h1PRnYWvBinTDB9cHt4eqDsPS4jcD3FwXJKT0RQsl8EvslI2SFaz2OtmYLFV8FwgvWroZ3fKmh7btewX9tfL2upXsrsqpLJzpzNGyNlnuZyetg7DIOxQTMBR7dqlrTlZ6FWi1g4j1NSjA2j1Yd7fzTH6k9LxCyUCneAKYCU581bnvKih6KJTeTeCX4Zhme/QIz7w2o+AdSgtLAkdrLS9nfweYEqrMLsrGGSWXtgWamAWp6+x6GM/Z8jNw3BqPNQ39hrzYLECn3tPvh/LqKbRSCiDGauDKBBj/kGbpnM1Bb/my8hv4NWStclkwjfl57y4oNDgw1JAG9VOti3QVVoSziMEsSdfEjaCPIDb7SgpLXykQsM+nbqbt97I0mIlzWv0uqFobLMAq8Rd9pszUBKxFhBPwOjf//gVOz2r7URJ2OnpviCXv9iz3a4X/YLBYbXoYwxBv/Kq0a5s4utQHzoTerJ7PmFW/no/ZAsid/hRIV82tD+Qabh5F1ssIM8Ri3chu0PuPD3sSJRMjDoxLAbwUbroiPAz/V52e8s3DIixxlO7OrvhMj3qfzA0kKxzwicr5wJmZwJxTXgrwYsqhRvpgC2Nfdyd+TYYxJSZgk+gk2g9KyHSlwQVAyPtWWgvVGyVBqsU2LpDlLNosSAtolC1uBKt5pQZLhAxTjeGCWIC/HVpagc5rRwkgpCHKEsjA8d+scp8aiMewwQBhp5dYTV5t/Nvl+HbDMu8F3S0psPyZb1bSnqlHPFUnMQeQqSqwDBT23fJO9gO3aVaa1icrXU0PKwlMM5K+iL3ATcVq2fFWKk0irCTF4LDVDG4gUpkyplq6efcZS+WDR1woApjD18x+2JQR9oOXzuA7uy4b+/91WsJd/tSd1QcAH8PVPXApieA37B7YXPhDPH1azP3PKR+HfHmOoDYLeuKsIi/ssSsdYs62qJo14Hw1P2N/6zpr8F3FTWmJ4ysAVcl84Iv/tl///Z8FaAWbBQbyMNDZjrZ2JwdRjtd1jOeNumSodFtr4/Zf45iRJf/8HSW+KIB/+GlKu8Rv1BPLr/4duoL+kFPRqrstEr41gfJupoJRf4hcYDWX93FOcfEBiIivxtjtV8g7mvOReiamYWKE7vfPbv3v2L9Kwq3cIDFGLyhyfOGuf/9vA5muH6Pjg7B4SUj2ydDXra9fSBI+DrsNHA6l51wfHssJb+11TfNk7B8OleUe3Y+ZmHboMFHdv7FFP2cfISFyeAQR0sk/Xv62HBTdW4HmnGSLFk/cqyWVVFJkdIIa+4hos3JRHcqLoRKM5h2Qtk1RZtzISMtlXTfTqIc77YsCCgQD0r61jtxskCctwJOtjE/pL8wC4LBD4AZFjh2wzzFCrT/PNqW0/DeBbkfMfzVm9yy06WiF+1mTdNNEAytVtohBKg3brWd2VQa+aF+cQ0mW5CvbwOlWCT07liX226PjiVLwFCRs/Ax2/u+ZNPjrNFIWIPf5GjHyUKp60OeXe9F01f7IaPf/SDTvyDAf7LSWWejtiZcsqtWZjrdn6A2MqBwnSeKhrZOlUMmgMionmiCIvXqKZfmhGZ1MwD3uMF4n9KJcfWLA3cL5pq48tm5NDYNh3SS/TKUtmFSlQR89MR4+kxcqJgpGbhm9gXneDELkyqAN5nitmIzTscKeJRXqd64RiaOALR2d295NWwbjHRNG2AU5oR9OS2oJg/5CY6BFPc1JvD2Mxdhp2/MZdI8dLePxiP4KRIp8VXmqfg+jqd/RNG7GNuq1U2SiI4735Bdc0MVFx6mH5UOWEa5HuhYykd6t4M1gYLVS8m1B+9bUqi5DziQq7qT8d94cxB6AB4WqMCOF/zPPtRSZUUaMSsvHOWxGASufywTX8ogy6HgUf9p+Z30wUEosl8qgmwm6o2AV6nO9HKQjRHpN6SUegI5pvR61RLnUJ1lqCtmfcsRQutEizVpAaPXN7xMp5UQ5OSZK6tniCK9CpyMd7LjR6+MxfoMEDPpWdf2p2m5N3KO4QMxf+V7vGdYjemQczQ+m2MGIkFNYDMf0Yop2eSx81sP36WHUczqEhKysp2iJSYAvfgJjinKwToPvRKb+HBi+7cJ96S5ngfLOXaHAFRLkulo4TnXTFO51gX0TCCo4ZUHdbpdgkMEwUZAPjh6M+hA8DzycbtxAgH3uD6i0nN1aTiIuQ4BYCE9dEHHwAmINU+4YEWx4EC3OZwFGfYZMPLScVlb+BAAJeARUh+gdWA3/gRqCrf1jecgqeFf1MdzrrP4SVlGm5mMihSP+zYYksAB7O+SBPwNQqSNMiLnkviY/klwgcRmvqtCqeWeA0gjuir4CMZqmw/ntP6M+l0pdN8/P9xI53aP7x/zavJbbKOz8VzO/nXxIr1tjparMnqd6iWdByHKw4lF4p/u57Yv07WeZPDnRl7wgmDVZZ44fQsjdYO/gmXQ+940PRGst8UMQApFC4OOV22e4N+lVOPyFLAOj4t8R3PFw/FjbSWy0ELuAFReNkee8ORcBOT2NPDcs7OfpUmzvn/F9Czk9o9naMyVYy/j8I5qVFmQDFcptBp65J/+sJA3w/j6y/eqUkKxTsf0CZjtNdRSBEmJ2tmfgmJbqpcsSagk+Ul9qdyV+NnqFBIJZFCB1XwPvWGDBOjVUmpWGHsWA5uDuMgLUNKZ4vlq5qfzY1LnRhCc/mh5/EX+hzuGdDy5aYYx4BAdwTTeZHcZpl3X0YyuxZFWNE6wFNppYs3LcFJePOyfKZ8KYb7dmRyvDOcORLPH0sytC6mH1US3JVj6paYM1GEr+CUmyHRnabHPqLlh6Kl0/BWd3ebziDfvpRQpPoR7N+LkUeYWtQ6Rn5v5+NtNeBPs2+DKDlzEVR5aYbTVPrZekJsZ9UC9qtVcP99thVIt1GREnN8zXP8mBfzS+wKYym8fcW6KqrE702Zco+hFQAEIR7qimo7dd7wO8B7R+QZPTuCWm1UAwblDTyURSbd85P4Pz+wBpQyGPeEpsEvxxIZkKsyfSOUcfE3UqzMFwZKYijb7sOkzpou+tC4bPXey5GI1GUAg9c3vLwIwAhcdPHRsYvpAfzkZHWY20vWxxJO0lvKfj6sG2g/pJ1vd/X2EBZkyEjLN4nUZOpOO7MewyHCrxQK8d5aF7rCeQlFX+XksK6l6z971BPuJqwdjj68ULOj9ZTDdOLopMdOLL0PFSS792SXE/EC9EDnIXZGYhr52aQb+9b2zEdBSnpkxAdBUkwJDqGCpZk/HkRidjdp0zKv/Cm52EenmfeKX6HkLUJgMbTTxxIZkIeL/6xuAaAAHbA7mONVduTHNX/UJj1nJEaI7f3HlUyiqKn7VfBE+bdb4HWln1HPJx001Ulq1tOxFf8WZEARvq5Da1+pE7fPVxLntGACz3nkoLsKcPdUqdCwwiyWkmXTd5+bv3j7HaReRt3ESn783Ew3SWsvkEjKtbocNksbrLmV+GVZn1+Uneo35MT1/4r8fngQX5/ptORfgmWfF6KSB/ssJmUSijXxQqUpzkANEkSkYgYj560OOjJr6uqckFuO15TRNgABEwNDjus1V3q2huLPYERMCLXUNmJJpbMrUQsSO7Qnxta55TvPWL6gWmMOvFknqETzqzFVO8SVkovEdYatypLGmDy9VWfgAc0KyIChiOhbd7UlbAeVLPZyEDp4POXKBwN/KP5pT6Cyqs6yaI00vXMn1ubk9OWT9Q/O2t/C25qlnO/zO0xcBzpMBCAB8vsdsh3U8fnPX1XlPEWfaYJxKVaTUgfCESWl4CCkIyjE6iQ5JFcwU6S4/IH0/Agacp8d5Gzq2+GzPnJ7+sqk40mfFQpKrDbAKwLlr3ONEati2k/ycLMSUu7V/7BBkDlNyXoN9tvqXCbbMc4SSQXgC/DBUY9QjtrCtQ+susEomCq8xcNJNNMWCH31GtlTw2BdCXkJBjT+/QNWlBWwQ5SWCh1LdQ99QVii/DyTxjSR6rmdap3l3L3aiplQpPYlrzNm9er88fXd2+ao+YdUNjtqmxiVxmyYPzJxl67OokDcTezEGqldkGgPbRdXA+fGcuZVkembZByo7J1dMnkGNjwwCny+FNcVcWvWYL9mg8oF7jACVWI3bA64EXpdM8bSIEVIAs5JJH+LHXgnCsgcMGPZyAAVBncvbLiexzg9YozcytjPXVlAbQAC7Tc4S0C8QN4LlAGjj4pQAVWrwkaDoUYGxxvkCWKRRHkdzJB5zpREleBDL1oDKEvAqmkDibVC4kTqF89YO6laUjgtJPebBfzr16tg4t10GmN1sJ5vezk2sUOq8blCn5mPZyT3ltaDcddKupQjqusNM9wtFVD0ABzv17fZDn7GPT1nkCtdcgYejcK1qOcTGtPxnCX1rErEjVWCnEJv5HaOAUjgpiKQjUKkQi64D5g2COgwas8FcgIl0Pw95H9dWxE3QG0VbMNffh6BPlAojLDf4es2/5Xfq7hw5NGcON2g8Qsy2UQm94KddKyy3kdJxWgpNaEc15xcylbLC3vnT26u8qS90qc2MU8LdOJc5VPF5KnSpXIhnj1eJJ/jszjZ01oR6JDFJRoeTPO/wh4IPFbdG9KljuSzeuI92p8JF/bpgDE8wG86/W2EBKgPrmzdLijxssQn8mM44ky/KLGOJcrSwXIpZa/Z3v7W6HCRk7ewds99LTsUW1LbeJytw8Q/BFZVZyfO9BUHOCe2suuEkO8DU4fLX0IQSQ2TdOkKXDtPf3sNV9tYhYFueuPRhfQlEEy+aYM/MCz7diDNmFSswYYlZZPmKr2Q5AxLsSVEqqBtn6hVl1BCFOFExnqnIsmyY/NA8jXnDaNzr7Zv3hu+I1Mf/PJjk0gALN2G8ABzdf9FNvWHvZHhv6xIoDCXf964MxG92vGZtx/LYU5PeZqgly8tT5tGeQGeJzMMsJc5p+a5Rn2PtEhiRzo/5Owjy1n0Lzx3ev8GHQmeWb8vagG6O5Qk5nrZuQTiKODI4UqL0LLAusS2Ve7j1Ivdxquu1BR9Rc4QkOiUPwQXJv6du2E8i5pDhVoQpUhyMWGUT2O2YODIhjAfI71gxep5r5zAY7GBUZpy51hAw0pcCCrhOmU8Wp6ujQTdZQsCjtq6SHX8QAMNiPCIIkoxhHEZPgsBcOlP4aErJZPhF7qvx6gHrn8hEwPwYbx8YmT/n7lbcmTip1v8kgsrIjFTAlvLY4Nuil0KDmgz3svYs0ZJ3O3Is/vSx4xpxF1e2VAtZE8dJxGYEIhCSuPvCjP54l/NSNDnwlKvAW8mG+AQkgp7a87Igh26uKMFGD0PoPHTSvoWxiHuk+su8XkQiHIjeYKl/RdcOHpxhQH3zHCNE3aARm83Bl6zGxU/vMltlVPQhubcqhW4RYkl6uXk5JdP/QpzaKFpw2M8zvysv2qj7xaQECuu2akM0Cssj/uB9+wDR7uA6XOnLNaoczalHoMj33eiiu+DRaFsUmlmUZuh9bjDY4INMNSSAivSh03uJvny4Gj+D+neudoa7iJi7c4VFlZ/J5gUR82308zSNAt/ZroBXDWw0fV3eVPAn3aX0mtJabF6RsUZmL+Ehn+wn51/4QipMjD+6y64t7bjL6bjENan2prQ4h7++hBJ9NXvX8CUocJqMC937IasLzm5K0qwXeFMAimMHkEIQIQI2LrQ9sLBfXuyp66zWvlsh74GPv7Xpabj993pRNNDuFud5oIcn/92isbADXdpRPbjmbCNOrwRbxGZx2XmYNGMiV5kjF4IKyxCBvKier9U4uVoheCdmk83rp5G0PihAm2fAtczI4b9BWqX+nrZTrJX5kSwQddi93NQrXG+Cl3eBGNkM77VBsMpEolhXex1MVvMkZN9fG59GGbciH11FEXaY1MxrArovaSjE/lUUqBg2cZBNmiWbvzCHCPJ4RVGFK2dTbObM1m+gJyEX53fa7u3+TZpm74mNEzWbkVL4vjNwfL9uzRCu1cgbrNx5Yv5dDruNrIOgwIk+UZWwJfdbu/WHul6PMmRflVCIzd7B37Pgm/Up/NuCiQW7RXyafevN3AL6ycciCc4ZPlTRzEu+aURGlUBOJbUEsheX7PPyrrhdUt5JAG12EEEZpY/N3Vhbl5uLAfT0CbC2XmpnryFkxZmBTs5prvEeuf0bn73i3O82WTiQtJWEPLsBXnQmdnKhB06NbbhLtlTZYJMxDMJpFeajSNRDB2v61BMUHqXggUwRJ19m6p5zl51v11q34T74lTXdJURuV6+bg2D6qpfGnLy7KGLuLZngobM4pIouz4+n0/UzFKxDgLM4h+fUwKZozQ9UGrHjcif51Ruonz7oIVZ56xWtZS8z7u5zay6J2LD4gCYh2RXoBRLDKsUlZ80R8kmoxlJiL8aZCy2wCAonnucFxCLT1HKoMhbPKt34D97EXPPh0joO93iJVF1Uruew61Qoy3ZUVNX9uIJDt9AQWKLLo+mSzmTibyLHq0D6hhzpvgUgI6ekyVEL3FD+Fi5R3A8MRHPXspN1VyKkfRlC+OGiNgPC4NREZpFETgVmdXrQ2TxChuS3aY+Ndc7CiYv5+CmzfiqeZrWIQJW/C4RvjbGUoJFf1K6ZdR2xL/bG4kVq1+I4jQWX+26YUijpp+lpN7o5c6ZodXJCF56UkFGsqz44sIg8jrdWvbjRCxi2Bk0iyM3a7ecAV93zB6h1Ei38c0s6+8nrbkopArccGP8vntQe1bFeEh2nJIFOHX/k3/UHb5PtKGpnzbkmnRETMX+9X/QduLZWw/feklW/kH/JnzToJe9Kgu9Hct1UGbH5BPCLo4OOtQnZonW0xnyCcdtKyPQ/sbLiSTYJdSx4sJqWLMnfn6fIqPB3WAgk00J+fCOkomPHqtS67pf0mFmKoItYZUlJu6BihSZ8qve8+/X+LX1MhQXF95AshfUleCtmdn6l6QFXzLg2sgLn1oyVFuZecv7fzsIHzoRlAGp0gwYDOn1S4qabWvB5xUaE+Svw4KmjWtxdnuQbI32dw87D4N95u8qQRJTSQg0wLxOLkxSrPMLEn1UIhNKjAa9VLs3WLaXGrtCIt8bKY2AQP/ZdyRU6zT/E8qP2ltyBE2CCZPgWgEYDoJJO4n92y61ylNaSFXKohJhLjkfvYWm592539sIpmBNLlDo1bExFBfmHJJ0lFEiC/fj8v42OoMC9Mo3whIoWvyHfq6Uacqq55mzFf/EGC+NP/gHjhd6urc6R0hES27VXux7UY8CGKPohplWIZtTrFSaPWslCWy78E22Pw8fvReSUZx/txqLtHrFqg1DY/Eus6Iq1heZdrdcqE0/c971Bz1HW/XNXHsXpUIbI4kHdOfCc6T5zHZzvzQJB0ggMFL6IGPAilU9bj/ASdPk6fNvNtZqPuwEDhMBtBnhCexo6D6VAGIOPvJPPV523Y8R8a9vCqZbswSZKzOT1291BsUbmUWehtbb1fdRX9hiJKXvwr1QX6GjnZMgyMvnwOo2Dr24amr7FqEAbVeJAjRNOceM2EQ1Mna9fInqPJ5mh5X8CzT1aDOv08An0blz0fF5Gq4mS2cwq5glwIOlY5nznE8X4j/UdZ3FJsVIXte1JH0A7iibuPfazStM5O/Vo3KXIpXBeGORV0M9XDXFvsYZUHGvFCUubWzTw248EHE0cpQM2zNg6rjavreq3NHCAWsoZ7wvVy7l5gvtKRmIj1MnvfWEm0yFnGcuOq192350a5WefpfKCcX3Sn+AgHU+qnpstNtddbdVebagJU390lq9ko4aI9rqdaWXYG8tv5O/ZQHSqDRYHC6zfH10l5z++opso7aOSaIczlQ13iAzXvLdEu0V7kwNUZ1c8Y8aq7SeIEe5p902FlNkW8DnwHyueHchbK8vVFJfmr9mz7P8nUSccl1ULaoWMRSI1ls32kvlK0h46h3J25Yd9AzfcJbp9qYF/SEt3H5j69mMdcsNxZcAzT/A89ov3tglTX54y/EwjMfuoDoxPwLJDm5I7q6F9Kp469yNy1zSxz0N4HbRRBj9xFFuogvBspv7DXUNIsGxTINEQfmctb42XImWAODgARNo7dfcTqFKq6aTfivmvunLmzP9f8yLsJvXD3JbcPcDGNriMAcjzeDTNr65t8YB5tsnFDFLa0Uwmd2OvUdkLMX9TsAUYUfooSv47sw5J88j7CpahRjjO3/UhOXjTS39W5YZAel2KTbQd1h7INOw9P23GW7GDAe4agIUFHP48MZr7ubq0efFmmtwYMyk7D0r1oeG/CGOODgb9Ur+JMHxkwzPbtCX2ZnENQuI0RN5SyTIZuoY4XS9Rd/tPe3vNAZGSHM/YYwqs9xkkENx0O+eC2YVW1cwOJ3ckE890nbQeHLKlW15L0P0W2VliyYrfNr0nrIYddoRyGaCtj4OYd2MT7ebApqZOAQIaSHJM4mphhfjNjtnjg6YRyx9qM2FT3xOiYIMqXPFWdzhSgFF8ItocqVV09CmIoO8k6U/oJB7++wSX/YksxfPXHyjSgAGZOj1aKEq9fSvXBqtp2wu8/FxEf5AxapAD06pPGuLVUYLdgEzHR8wqRGYEwiUO9MyYbgswstuLYhwYFpSVKOdzAihZ9LuHtD598EGhINU9xc9xhL+QgTLAstmPIvvm2xyRw/WTUPXkP3ZHu6GyPmj5xFH9/QGpkglKXRVUBgVmLOJx8uZO2AstxQYocZH2JhORlxawj66BAXUEs7K/gPxINIRAFyK3WLuyq9oBTF9wEbnmCot82WjIg7CPNwYK3KrZMrKAz5yFszg4wCVLJVnIL8+OYA0xRDH8cHQjQUiQ2i1mr/be32k/3Xej9sdf3iuGvZHyLFSJvPSqz/wltnxumTJYKZsrWXtx/Rmu39jjV9lFaJttfFn57/No2h/unsJmMHbrnZ8csxkp5HQ4xR1s0HH+t3Iz82a3iQWTUDGq/+l2W3TUYLE8zNdL8Y+5oXaIH/Y2UUcX67cXeN4WvENZjz4+8q7vjhowOI3rSjFhGZ6KzwmU7+5nFV+kGWAZ5z2UWvzq0TK0pk1hPwAN4jbw//1CApRvIaIjhSGhioY6TUmsToek9cF9XjJdHvLPcyyCV3lbR5Jiz/ts46ay2F820VjTXvllElwrGzKcNSyvQlWDXdwrUINXmHorAM3fE19ngLZmgeUaCJLsSITf2VcfAOuWwX7mTPdP8Zb/04KqRniufCpwnDUk7sP0RX6cud/sanFMagnzKInSRVey0YzlVSOtA/AjrofmSH6RYbJQ8b4NDeTkIGc6247+Mnbez/qhJ9GAv9fGNFercPnnrf285Qgs+UqThLRgflcAKFuqWhLzZaR4QqvSwa3xe0LPkqj9xJWub195r7NrrR0e78FR+0mRBNMPsraqZctAUVAJfYKehTDV1MGGQSeDsOK9J3sbUuKRIS/WilX/64CBms9jCZocBlsBSZaIAjWm/SUZ8daWL2a/cJFyUOFqE3Epc2RWbtjNyPwOGpWtzu32kUooUqsJud7IV4E8rstUBXM7tGEtBx99x60g1duhyvxeKJSl8s5E34HTMmADT0836aEdg5Dv9rVyCz8i2REOmiz6wtIVFN0HsjAoN37SrY0bV1Ms8CRUILhvZvvRaDzoVCaSI0u8EPuTe4b7OPowgRGODl22UBBmHSTUY8e4DyL+Bc7bngo+2T8HtNvzyATSL5iJZgFPKpmUyZv54vVL90+/RQGATUmNKnrIvcJMYON9fl83naW5sf6hRkbbTC9RUEE6XADwjgA46wWfUQ+QWZl0J4PVTWAln/YfAz/SV3q3J9+yCYDleruoN5uoc/wT2f4YONGTb6zTGq3V+3JqzmCOjwebKln+fExVLN7sqtqfMnsKVXWbb2Ai5m3D/fCTgX7oKYzTZvj+m28XnDqPbXuP4MyWdmPezcesdrh7rCzA7BWdObiuyDEKjjzBbQ0qnuwjliz+b+j7aPMKlkXyIznV3tGzAfYwIbzGGt098oh4eq3ruDjdgHtjxfFCjHrjjRbHajoz/YOY4raojPFQ910GIlBV7hq47UDgpyajBxQUmD8NctiLV1rTSLAEsQDLTeRKcmPBMVMFF0SPBBhZ5oXoxtD3lMhuAQXmA+57OcciczVW9e9zwSIAHS+FJmvfXMJGF1dMBsIUMaPjvgaVqUc3p32qVCMQYFEiRLzlVSOGMCmv/HJIxAHe3mL/XnoZ1IkWLeRZfgyByjnDbbeRK5KL7bYHSVJZ9UFq+yCiNKeRUaYjgbC3hVUvfJAhy/QNl/JqLKVvGMk9ZcfyGidNeo/VTxK9vUpodzfQI9Z2eAre4nmrkzgxKSnT5IJ1D69oHuUS5hp7pK9IAWuNrAOtOH0mAuwCrY8mXAtVXUeaNK3OXr6PRvmWg4VQqFSy+a1GZfFYgdsJELG8N0kvqmzvwZ02Plf5fH9QTy6br0oY/IDsEA+GBf9pEVWCIuBCjsup3LDSDqI+5+0IKSUFr7A96A2f0FbcU9fqljdqvsd8sG55KcKloHIFZem2Wb6pCLXybnVSB0sjCXzdS8IKvE'
      );
      let W = new Map([
        [8217, 'apostrophe'],
        [8260, 'fraction slash'],
        [12539, 'middle dot'],
      ]);
      function K(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, '0')}}`;
      }
      function H(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let r = [];
        for (let n = 0; n < t; ) r.push(String.fromCodePoint(...e.slice(n, (n += 4096))));
        return r.join('');
      }
      var J = F(
        'AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g'
      );
      function V(e) {
        return (e >> 24) & 255;
      }
      function Y(e) {
        return 16777215 & e;
      }
      let Z = new Map(N(J).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))),
        X = new Set(T(J)),
        $ = new Map(),
        _ = new Map();
      for (let [e, t] of Q(J)) {
        if (!X.has(e) && 2 == t.length) {
          let [r, n] = t,
            i = _.get(r);
          i || ((i = new Map()), _.set(r, i)), i.set(n, e);
        }
        $.set(e, t.reverse());
      }
      function ee(e) {
        return e >= 44032 && e < 55204;
      }
      function et(e) {
        let t = [],
          r = [],
          n = !1;
        function i(e) {
          let r = Z.get(e);
          r && ((n = !0), (e |= r)), t.push(e);
        }
        for (let n of e)
          for (;;) {
            if (n < 128) t.push(n);
            else if (ee(n)) {
              let e = n - 44032,
                t = (e / 588) | 0,
                r = ((e % 588) / 28) | 0,
                s = e % 28;
              i(4352 + t), i(4449 + r), s > 0 && i(4519 + s);
            } else {
              let e = $.get(n);
              e ? r.push(...e) : i(n);
            }
            if (!r.length) break;
            n = r.pop();
          }
        if (n && t.length > 1) {
          let e = V(t[0]);
          for (let r = 1; r < t.length; r++) {
            let n = V(t[r]);
            if (0 == n || e <= n) {
              e = n;
              continue;
            }
            let i = r - 1;
            for (;;) {
              let r = t[i + 1];
              if (((t[i + 1] = t[i]), (t[i] = r), !i || (e = V(t[--i])) <= n)) break;
            }
            e = V(t[r]);
          }
        }
        return t;
      }
      function er(e) {
        return (function (e) {
          let t = [],
            r = [],
            n = -1,
            i = 0;
          for (let s of e) {
            let e = V(s),
              o = Y(s);
            if (-1 == n) 0 == e ? (n = o) : t.push(o);
            else if (i > 0 && i >= e) 0 == e ? (t.push(n, ...r), (r.length = 0), (n = o)) : r.push(o), (i = e);
            else {
              let s = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470) return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                if (ee(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0) return e + (t - 4519);
                {
                  let r = _.get(e);
                  return r && (r = r.get(t)) ? r : -1;
                }
              })(n, o);
              s >= 0 ? (n = s) : 0 == i && 0 == e ? (t.push(n), (n = o)) : (r.push(o), (i = e));
            }
          }
          return n >= 0 && t.push(n, ...r), t;
        })(et(e));
      }
      function en() {
        return new Set(T(z));
      }
      let ei = new Map(Q(z)),
        es = en(),
        eo = en(),
        ea = new Set(
          T(z).map(
            function (e) {
              return this[e];
            },
            [...eo]
          )
        ),
        eu = en();
      en();
      let ec = N(z);
      function el() {
        return new Set([T(z).map((e) => ec[e]), T(z)].flat(2));
      }
      let ef = z(),
        eh = q((e) => {
          let t = q(z).map((e) => e + 96);
          if (t.length) {
            let r = e >= ef;
            (t[0] -= 32), (t = H(t)), r && (t = `Restricted[${t}]`);
            let n = el(),
              i = [...n, ...el()].sort((e, t) => e - t);
            return { N: t, P: n, M: !z(), R: r, V: new Set(i) };
          }
        }),
        ed = en(),
        ep = new Map();
      for (let { V: e, M: t } of ([...ed, ...en()]
        .sort((e, t) => e - t)
        .map((e, t, r) => {
          let n = z(),
            i = (r[t] = n ? r[t - n] : { V: [], M: new Map() });
          i.V.push(e), ed.has(e) || ep.set(e, i);
        }),
      new Set(ep.values()))) {
        let r = [];
        for (let t of e) {
          let e = eh.filter((e) => e.V.has(t)),
            n = r.find(({ G: t }) => e.some((e) => t.has(e)));
          n || ((n = { G: new Set(), V: [] }), r.push(n)), n.V.push(t), e.forEach((e) => n.G.add(e));
        }
        let n = r.flatMap(({ G: e }) => [...e]);
        for (let { G: e, V: i } of r) {
          let r = new Set(n.filter((t) => !e.has(t)));
          for (let e of i) t.set(e, r);
        }
      }
      let eg = new Set(),
        em = new Set();
      for (let e of eh) for (let t of e.V) (eg.has(t) ? em : eg).add(t);
      for (let e of eg) ep.has(e) || em.has(e) || ep.set(e, 1);
      let ey = new Set([...eg, ...et(eg).map(Y)]),
        eb = T(z),
        ew = (function e(t) {
          let r = q(() => {
              let t = T(z).map((e) => eb[e]);
              if (t.length) return e(t);
            }).sort((e, t) => t.Q.size - e.Q.size),
            n = z();
          return { B: r, V: n % 3, F: 1 & (n = (n / 3) | 0), S: 1 & (n >>= 1), C: 2 & n, Q: new Set(t) };
        })([]);
      class ev extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function eA(e, t = K) {
        var r;
        let n = [];
        (r = e[0]), eo.has(r) && n.push('◌');
        let i = 0,
          s = e.length;
        for (let r = 0; r < s; r++) {
          let s = e[r];
          eu.has(s) && (n.push(H(e.slice(i, r))), n.push(t(s)), (i = r + 1));
        }
        return n.push(H(e.slice(i, s))), n.join('');
      }
      function eC(e) {
        return (eu.has(e) ? '' : `${eE(eA([e]))} `) + K(e);
      }
      function eE(e) {
        return `"${e}"\u200E`;
      }
      function eP(e) {
        for (let t = e.lastIndexOf(95); t > 0; ) if (95 !== e[--t]) throw Error('underscore allowed only at start');
      }
      function eI(e) {
        return Error(`disallowed character: ${eC(e)}`);
      }
      function eO(e, t) {
        let r = eC(t),
          n = eh.find((e) => e.P.has(t));
        return n && (r = `${n.N} ${r}`), Error(`illegal mixture: ${e.N} + ${r}`);
      }
      function eB(e) {
        return Error(`illegal placement: ${e}`);
      }
      var ex = r(5818);
      function eS(e, t, { batch: r = { multicall: { wait: 32 } }, pollingInterval: n = 4e3, rank: i, retryCount: s, retryDelay: o, stallTimeout: a } = {}) {
        if (!e.length) throw Error('must have at least one chain');
        let u = [],
          c = {},
          l = {};
        for (let r of e) {
          let e = !1;
          for (let n of t) {
            let t = n(r);
            t && ((e = !0), u.some(({ id: e }) => e === r.id) || (u = [...u, t.chain]), (c[r.id] = [...(c[r.id] || []), ...t.rpcUrls.http]), t.rpcUrls.webSocket && (l[r.id] = [...(l[r.id] || []), ...t.rpcUrls.webSocket]));
          }
          if (!e)
            throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`);
        }
        return {
          chains: u,
          publicClient: ({ chainId: t }) => {
            let l = u.find((e) => e.id === t) ?? e[0],
              f = c[l.id];
            if (!f || !f[0]) throw Error(`No providers configured for chain "${l.id}"`);
            let h = (0, p.v)({
              batch: r,
              chain: l,
              transport: b(
                f.map((e) => (0, w.d)(e, { timeout: a })),
                { rank: i, retryCount: s, retryDelay: o }
              ),
              pollingInterval: n,
            });
            return Object.assign(h, { chains: u });
          },
          webSocketPublicClient: ({ chainId: t }) => {
            let c = u.find((e) => e.id === t) ?? e[0],
              f = l[c.id];
            if (!f || !f[0]) return;
            let h = (0, p.v)({
              batch: r,
              chain: c,
              transport: b(
                f.map((e) =>
                  (function (e, t = {}) {
                    let { key: r = 'webSocket', name: n = 'WebSocket JSON-RPC', retryDelay: i } = t;
                    return ({ chain: s, retryCount: o, timeout: a }) => {
                      let u = t.retryCount ?? o,
                        c = a ?? t.timeout ?? 1e4,
                        l = e || s?.rpcUrls.default.webSocket?.[0];
                      if (!l) throw new A.I();
                      return (0, y.q)(
                        {
                          key: r,
                          name: n,
                          async request({ method: e, params: t }) {
                            let r = { method: e, params: t },
                              n = await (0, C.h)(l),
                              { error: i, result: s } = await C.f.webSocketAsync(n, { body: r, timeout: c });
                            if (i) throw new v.bs({ body: r, error: i, url: l });
                            return s;
                          },
                          retryCount: u,
                          retryDelay: i,
                          timeout: c,
                          type: 'webSocket',
                        },
                        {
                          getSocket: () => (0, C.h)(l),
                          async subscribe({ params: e, onData: t, onError: r }) {
                            let n = await (0, C.h)(l),
                              { result: i } = await new Promise((i, s) =>
                                C.f.webSocket(n, {
                                  body: { method: 'eth_subscribe', params: e },
                                  onResponse(e) {
                                    if (e.error) {
                                      s(e.error), r?.(e.error);
                                      return;
                                    }
                                    if ('number' == typeof e.id) {
                                      i(e);
                                      return;
                                    }
                                    'eth_subscription' === e.method && t(e.params);
                                  },
                                })
                              );
                            return { subscriptionId: i, unsubscribe: async () => new Promise((e) => C.f.webSocket(n, { body: { method: 'eth_unsubscribe', params: [i] }, onResponse: e })) };
                          },
                        }
                      );
                    };
                  })(e, { timeout: a })
                ),
                { rank: i, retryCount: s, retryDelay: o }
              ),
              pollingInterval: n,
            });
            return Object.assign(h, { chains: u });
          },
        };
      }
      var eM = class extends Error {
          constructor({ chainId: e, connectorId: t }) {
            super(`Chain "${e}" not configured${t ? ` for connector "${t}"` : ''}.`), (this.name = 'ChainNotConfigured');
          }
        },
        eR = class extends Error {
          constructor() {
            super(...arguments), (this.name = 'ConnectorAlreadyConnectedError'), (this.message = 'Connector already connected');
          }
        },
        ej = class extends Error {
          constructor() {
            super(...arguments), (this.name = 'ConfigChainsNotFound'), (this.message = 'No chains were found on the wagmi config. Some functions that require a chain may not work.');
          }
        },
        ek = class extends Error {
          constructor({ connector: e }) {
            super(`"${e.name}" does not support programmatic chain switching.`), (this.name = 'SwitchChainNotSupportedError');
          }
        },
        eU = (e, { find: t, replace: r }) =>
          e && t(e)
            ? r(e)
            : 'object' != typeof e
            ? e
            : Array.isArray(e)
            ? e.map((e) => eU(e, { find: t, replace: r }))
            : e instanceof Object
            ? Object.entries(e).reduce((e, [n, i]) => ({ ...e, [n]: eU(i, { find: t, replace: r }) }), {})
            : e;
      function eL(e) {
        let t = JSON.parse(e),
          r = eU(t, { find: (e) => 'string' == typeof e && e.startsWith('#bigint.'), replace: (e) => BigInt(e.replace('#bigint.', '')) });
        return r;
      }
      function eD(e) {
        return 'number' == typeof e ? e : 'wei' === e ? 0 : Math.abs(P.Bd[e]);
      }
      function eF(e, t) {
        return e.slice(0, t).join('.') || '.';
      }
      function eT(e, t) {
        let { length: r } = e;
        for (let n = 0; n < r; ++n) if (e[n] === t) return n + 1;
        return 0;
      }
      function eN(e, t, r, n) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let r = 'function' == typeof e,
              n = 'function' == typeof t,
              i = [],
              s = [];
            return function (o, a) {
              if ('object' == typeof a) {
                if (i.length) {
                  let e = eT(i, this);
                  0 === e ? (i[i.length] = this) : (i.splice(e), s.splice(e)), (s[s.length] = o);
                  let r = eT(i, a);
                  if (0 !== r) return n ? t.call(this, o, a, eF(s, r)) : `[ref=${eF(s, r)}]`;
                } else (i[0] = a), (s[0] = o);
              }
              return r ? e.call(this, o, a) : a;
            };
          })((e, r) => {
            let n = 'bigint' == typeof r ? `#bigint.${r.toString()}` : r;
            return t?.(e, n) || n;
          }, n),
          r ?? void 0
        );
      }
      var eQ = { getItem: (e) => '', setItem: (e, t) => null, removeItem: (e) => null };
      function eq({ deserialize: e = eL, key: t = 'wagmi', serialize: r = eN, storage: n }) {
        return {
          ...n,
          getItem: (r, i = null) => {
            let s = n.getItem(`${t}.${r}`);
            try {
              return s ? e(s) : i;
            } catch (e) {
              return console.warn(e), i;
            }
          },
          setItem: (e, i) => {
            if (null === i) n.removeItem(`${t}.${e}`);
            else
              try {
                n.setItem(`${t}.${e}`, r(i));
              } catch (e) {
                console.error(e);
              }
          },
          removeItem: (e) => n.removeItem(`${t}.${e}`),
        };
      }
      var eG = 'store',
        ez = class {
          constructor({
            autoConnect: e = !1,
            connectors: t = [new u._()],
            publicClient: r,
            storage: a = eq({ storage: 'undefined' != typeof window ? window.localStorage : eQ }),
            logger: c = { warn: console.warn },
            webSocketPublicClient: l,
          }) {
            let p;
            f(this, s),
              (this.publicClients = new Map()),
              (this.webSocketPublicClients = new Map()),
              f(this, n, void 0),
              f(this, i, void 0),
              (this.args = { autoConnect: e, connectors: t, logger: c, publicClient: r, storage: a, webSocketPublicClient: l });
            let g = 'disconnected';
            if (e)
              try {
                let e = a.getItem(eG),
                  t = e?.state?.data;
                (g = t?.account ? 'reconnecting' : 'connecting'), (p = t?.chain?.id);
              } catch (e) {}
            let m = 'function' == typeof t ? t() : t;
            m.forEach((e) => e.setStorage(a)),
              (this.store = R(
                I(
                  S(() => ({ connectors: m, publicClient: this.getPublicClient({ chainId: p }), status: g, webSocketPublicClient: this.getWebSocketPublicClient({ chainId: p }) }), {
                    name: eG,
                    storage: a,
                    partialize: (t) => ({ ...(e && { data: { account: t?.data?.account, chain: t?.data?.chain } }), chains: t?.chains }),
                    version: 2,
                  })
                )
              )),
              (this.storage = a),
              h(this, i, a?.getItem('wallet')),
              d(this, s, o).call(this),
              e && 'undefined' != typeof window && setTimeout(async () => await this.autoConnect(), 0);
          }
          get chains() {
            return this.store.getState().chains;
          }
          get connectors() {
            return this.store.getState().connectors;
          }
          get connector() {
            return this.store.getState().connector;
          }
          get data() {
            return this.store.getState().data;
          }
          get error() {
            return this.store.getState().error;
          }
          get lastUsedChainId() {
            return this.data?.chain?.id;
          }
          get publicClient() {
            return this.store.getState().publicClient;
          }
          get status() {
            return this.store.getState().status;
          }
          get subscribe() {
            return this.store.subscribe;
          }
          get webSocketPublicClient() {
            return this.store.getState().webSocketPublicClient;
          }
          setState(e) {
            let t = 'function' == typeof e ? e(this.store.getState()) : e;
            this.store.setState(t, !0);
          }
          clearState() {
            this.setState((e) => ({ ...e, chains: void 0, connector: void 0, data: void 0, error: void 0, status: 'disconnected' }));
          }
          async destroy() {
            this.connector && (await this.connector.disconnect?.()), h(this, n, !1), this.clearState(), this.store.destroy();
          }
          async autoConnect() {
            if (l(this, n)) return;
            h(this, n, !0), this.setState((e) => ({ ...e, status: e.data?.account ? 'reconnecting' : 'connecting' }));
            let e = l(this, i) ? [...this.connectors].sort((e) => (e.id === l(this, i) ? -1 : 1)) : this.connectors,
              t = !1;
            for (let r of e) {
              if (!r.ready || !r.isAuthorized) continue;
              let e = await r.isAuthorized();
              if (!e) continue;
              let n = await r.connect();
              this.setState((e) => ({ ...e, connector: r, chains: r?.chains, data: n, status: 'connected' })), (t = !0);
              break;
            }
            return t || this.setState((e) => ({ ...e, data: void 0, status: 'disconnected' })), h(this, n, !1), this.data;
          }
          setConnectors(e) {
            this.args = { ...this.args, connectors: e };
            let t = 'function' == typeof e ? e() : e;
            t.forEach((e) => e.setStorage(this.args.storage)), this.setState((e) => ({ ...e, connectors: t }));
          }
          getPublicClient({ chainId: e } = {}) {
            let t = this.publicClients.get(-1);
            if ((t && t?.chain.id === e) || (t = this.publicClients.get(e ?? -1))) return t;
            let { publicClient: r } = this.args;
            return (t = 'function' == typeof r ? r({ chainId: e }) : r), this.publicClients.set(e ?? -1, t), t;
          }
          setPublicClient(e) {
            let t = this.data?.chain?.id;
            (this.args = { ...this.args, publicClient: e }), this.publicClients.clear(), this.setState((e) => ({ ...e, publicClient: this.getPublicClient({ chainId: t }) }));
          }
          getWebSocketPublicClient({ chainId: e } = {}) {
            let t = this.webSocketPublicClients.get(-1);
            if ((t && t?.chain.id === e) || (t = this.webSocketPublicClients.get(e ?? -1))) return t;
            let { webSocketPublicClient: r } = this.args;
            return (t = 'function' == typeof r ? r({ chainId: e }) : r) && this.webSocketPublicClients.set(e ?? -1, t), t;
          }
          setWebSocketPublicClient(e) {
            let t = this.data?.chain?.id;
            (this.args = { ...this.args, webSocketPublicClient: e }), this.webSocketPublicClients.clear(), this.setState((e) => ({ ...e, webSocketPublicClient: this.getWebSocketPublicClient({ chainId: t }) }));
          }
          setLastUsedConnector(e = null) {
            this.storage?.setItem('wallet', e);
          }
        };
      function eW(e) {
        let t = new ez(e);
        return (a = t), t;
      }
      function eK() {
        if (!a) throw Error('No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config');
        return a;
      }
      async function eH({ chainId: e, connector: t }) {
        let r = eK(),
          n = r.connector;
        if (n && t.id === n.id) throw new eR();
        try {
          r.setState((e) => ({ ...e, status: 'connecting' }));
          let n = await t.connect({ chainId: e });
          return r.setLastUsedConnector(t.id), r.setState((e) => ({ ...e, connector: t, chains: t?.chains, data: n, status: 'connected' })), r.storage.setItem('connected', !0), { ...n, connector: t };
        } catch (e) {
          throw (r.setState((e) => ({ ...e, status: e.connector ? 'connected' : 'disconnected' })), e);
        }
      }
      async function eJ() {
        let e = eK();
        e.connector && (await e.connector.disconnect()), e.clearState(), e.storage.removeItem('connected');
      }
      (n = new WeakMap()),
        (i = new WeakMap()),
        (s = new WeakSet()),
        (o = function () {
          let e = (e) => {
              this.setState((t) => ({ ...t, data: { ...t.data, ...e } }));
            },
            t = () => {
              this.clearState();
            },
            r = (e) => {
              this.setState((t) => ({ ...t, error: e }));
            };
          this.store.subscribe(
            ({ connector: e }) => e,
            (n, i) => {
              i?.off?.('change', e), i?.off?.('disconnect', t), i?.off?.('error', r), n && (n.on?.('change', e), n.on?.('disconnect', t), n.on?.('error', r));
            }
          );
          let { publicClient: n, webSocketPublicClient: i } = this.args;
          ('function' == typeof n || 'function' == typeof i) &&
            this.store.subscribe(
              ({ data: e }) => e?.chain?.id,
              (e) => {
                this.setState((t) => ({ ...t, publicClient: this.getPublicClient({ chainId: e }), webSocketPublicClient: this.getWebSocketPublicClient({ chainId: e }) }));
              }
            );
        });
      var eV = [
          {
            type: 'event',
            name: 'Approval',
            inputs: [
              { indexed: !0, name: 'owner', type: 'address' },
              { indexed: !0, name: 'spender', type: 'address' },
              { indexed: !1, name: 'value', type: 'uint256' },
            ],
          },
          {
            type: 'event',
            name: 'Transfer',
            inputs: [
              { indexed: !0, name: 'from', type: 'address' },
              { indexed: !0, name: 'to', type: 'address' },
              { indexed: !1, name: 'value', type: 'uint256' },
            ],
          },
          {
            type: 'function',
            name: 'allowance',
            stateMutability: 'view',
            inputs: [
              { name: 'owner', type: 'address' },
              { name: 'spender', type: 'address' },
            ],
            outputs: [{ name: '', type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'approve',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'spender', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
          { type: 'function', name: 'balanceOf', stateMutability: 'view', inputs: [{ name: 'account', type: 'address' }], outputs: [{ name: '', type: 'uint256' }] },
          { type: 'function', name: 'decimals', stateMutability: 'view', inputs: [], outputs: [{ name: '', type: 'uint8' }] },
          { type: 'function', name: 'name', stateMutability: 'view', inputs: [], outputs: [{ name: '', type: 'string' }] },
          { type: 'function', name: 'symbol', stateMutability: 'view', inputs: [], outputs: [{ name: '', type: 'string' }] },
          { type: 'function', name: 'totalSupply', stateMutability: 'view', inputs: [], outputs: [{ name: '', type: 'uint256' }] },
          {
            type: 'function',
            name: 'transfer',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
          {
            type: 'function',
            name: 'transferFrom',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'sender', type: 'address' },
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
        ],
        eY = [
          {
            type: 'event',
            name: 'Approval',
            inputs: [
              { indexed: !0, name: 'owner', type: 'address' },
              { indexed: !0, name: 'spender', type: 'address' },
              { indexed: !1, name: 'value', type: 'uint256' },
            ],
          },
          {
            type: 'event',
            name: 'Transfer',
            inputs: [
              { indexed: !0, name: 'from', type: 'address' },
              { indexed: !0, name: 'to', type: 'address' },
              { indexed: !1, name: 'value', type: 'uint256' },
            ],
          },
          {
            type: 'function',
            name: 'allowance',
            stateMutability: 'view',
            inputs: [
              { name: 'owner', type: 'address' },
              { name: 'spender', type: 'address' },
            ],
            outputs: [{ name: '', type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'approve',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'spender', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
          { type: 'function', name: 'balanceOf', stateMutability: 'view', inputs: [{ name: 'account', type: 'address' }], outputs: [{ name: '', type: 'uint256' }] },
          { type: 'function', name: 'decimals', stateMutability: 'view', inputs: [], outputs: [{ name: '', type: 'uint8' }] },
          { type: 'function', name: 'name', stateMutability: 'view', inputs: [], outputs: [{ name: '', type: 'bytes32' }] },
          { type: 'function', name: 'symbol', stateMutability: 'view', inputs: [], outputs: [{ name: '', type: 'bytes32' }] },
          { type: 'function', name: 'totalSupply', stateMutability: 'view', inputs: [], outputs: [{ name: '', type: 'uint256' }] },
          {
            type: 'function',
            name: 'transfer',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
          {
            type: 'function',
            name: 'transferFrom',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'sender', type: 'address' },
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
        ];
      function eZ({ chainId: e } = {}) {
        let t = eK();
        return (e && t.getPublicClient({ chainId: e })) || t.publicClient;
      }
      function eX({ chainId: e } = {}) {
        let t = eK();
        return (e && t.getWebSocketPublicClient({ chainId: e })) || t.webSocketPublicClient;
      }
      function e$(e, t) {
        let r = eK(),
          n = async () => t(eZ(e)),
          i = r.subscribe(({ publicClient: e }) => e, n);
        return i;
      }
      function e_(e, t) {
        let r = eK(),
          n = async () => t(eX(e)),
          i = r.subscribe(({ webSocketPublicClient: e }) => e, n);
        return i;
      }
      async function e0({ chainId: e, contracts: t, blockNumber: r, blockTag: n, ...i }) {
        let s = eZ({ chainId: e });
        if (!s.chains) throw new ej();
        if (e && s.chain.id !== e) throw new eM({ chainId: e });
        return s.multicall({ allowFailure: i.allowFailure ?? !0, blockNumber: r, blockTag: n, contracts: t });
      }
      async function e1({ address: e, account: t, chainId: r, abi: n, args: i, functionName: s, blockNumber: o, blockTag: a }) {
        let u = eZ({ chainId: r });
        return u.readContract({ abi: n, address: e, account: t, functionName: s, args: i, blockNumber: o, blockTag: a });
      }
      async function e2({ contracts: e, blockNumber: t, blockTag: r, ...n }) {
        let { allowFailure: i = !0 } = n;
        try {
          let n = eZ(),
            s = e.reduce((e, t, r) => {
              let i = t.chainId ?? n.chain.id;
              return { ...e, [i]: [...(e[i] || []), { contract: t, index: r }] };
            }, {}),
            o = (await Promise.all(Object.entries(s).map(([e, n]) => e0({ allowFailure: i, chainId: parseInt(e), contracts: n.map(({ contract: e }) => e), blockNumber: t, blockTag: r })))).flat(),
            a = Object.values(s).flatMap((e) => e.map(({ index: e }) => e));
          return o.reduce((e, t, r) => (e && (e[a[r]] = t), e), []);
        } catch (s) {
          if (s instanceof k.uq) throw s;
          let n = () => e.map((e) => e1({ ...e, blockNumber: t, blockTag: r }));
          if (i) return (await Promise.allSettled(n())).map((e) => ('fulfilled' === e.status ? { result: e.value, status: 'success' } : { error: e.reason, result: void 0, status: 'failure' }));
          return await Promise.all(n());
        }
      }
      async function e6({ address: e, chainId: t, formatUnits: r, token: n }) {
        let i = eK(),
          s = eZ({ chainId: t });
        if (n) {
          let i = async ({ abi: i }) => {
            let s = { abi: i, address: n, chainId: t },
              [o, a, u] = await e2({
                allowFailure: !1,
                contracts: [
                  { ...s, functionName: 'balanceOf', args: [e] },
                  { ...s, functionName: 'decimals' },
                  { ...s, functionName: 'symbol' },
                ],
              });
            return { decimals: a, formatted: (0, j.b)(o ?? '0', eD(r ?? a)), symbol: u, value: o };
          };
          try {
            return await i({ abi: eV });
          } catch (e) {
            if (e instanceof k.uq) {
              let { symbol: e, ...t } = await i({ abi: eY });
              return { symbol: (0, U.rR)((0, L.f)(e, { dir: 'right' })), ...t };
            }
            throw e;
          }
        }
        let o = [...(i.publicClient.chains || []), ...(i.chains ?? [])],
          a = await s.getBalance({ address: e }),
          u = o.find((e) => e.id === s.chain.id);
        return { decimals: u?.nativeCurrency.decimals ?? 18, formatted: (0, j.b)(a ?? '0', eD(r ?? 18)), symbol: u?.nativeCurrency.symbol ?? 'ETH', value: a };
      }
      function e5() {
        let { data: e, connector: t, status: r } = eK();
        switch (r) {
          case 'connected':
            return { address: e?.account, connector: t, isConnected: !0, isConnecting: !1, isDisconnected: !1, isReconnecting: !1, status: r };
          case 'reconnecting':
            return { address: e?.account, connector: t, isConnected: !!e?.account, isConnecting: !1, isDisconnected: !1, isReconnecting: !0, status: r };
          case 'connecting':
            return { address: e?.account, connector: t, isConnected: !1, isConnecting: !0, isDisconnected: !1, isReconnecting: !1, status: r };
          case 'disconnected':
            return { address: void 0, connector: void 0, isConnected: !1, isConnecting: !1, isDisconnected: !0, isReconnecting: !1, status: r };
        }
      }
      function e8() {
        let e = eK(),
          t = e.data?.chain?.id,
          r = e.chains ?? [],
          n = [...(e.publicClient?.chains || []), ...r].find((e) => e.id === t) ?? {
            id: t,
            name: `Chain ${t}`,
            network: `${t}`,
            nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'ETH' },
            rpcUrls: { default: { http: [''] }, public: { http: [''] } },
          };
        return { chain: t ? { ...n, ...e.data?.chain, id: t } : void 0, chains: r };
      }
      async function e4({ chainId: e }) {
        let { connector: t } = eK();
        if (!t) throw new E.N();
        if (!t.switchChain) throw new ek({ connector: t });
        return t.switchChain(e);
      }
      function e3(e, { selector: t = (e) => e } = {}) {
        let r = eK(),
          n = r.subscribe(
            ({ data: e, connector: r, status: n }) => t({ address: e?.account, connector: r, status: n }),
            () => e(e5()),
            { equalityFn: D }
          );
        return n;
      }
      function e9(e, { selector: t = (e) => e } = {}) {
        let r = eK(),
          n = r.subscribe(
            ({ data: e, chains: r }) => t({ chainId: e?.chain?.id, chains: r }),
            () => e(e8()),
            { equalityFn: D }
          );
        return n;
      }
      async function e7({ name: e, chainId: t }) {
        var r;
        let n;
        let i = eZ({ chainId: t }),
          s = await i.getEnsAvatar({
            name: ((n = 0),
            (r = e.split('.').map((e) => {
              let t,
                r = (function (e) {
                  let t = [];
                  for (let r = 0, n = e.length; r < n; ) {
                    let n = e.codePointAt(r);
                    (r += n < 65536 ? 1 : 2), t.push(n);
                  }
                  return t;
                })(e),
                i = { input: r, offset: n };
              n += r.length + 1;
              try {
                let e,
                  n = (i.tokens = (function (e, t) {
                    let r = [],
                      n = [];
                    for (e = e.slice().reverse(); e.length; ) {
                      let i = (function (e, t) {
                        let r,
                          n,
                          i = ew,
                          s = [],
                          o = e.length;
                        for (t && (t.length = 0); o; ) {
                          let a = e[--o];
                          if (!(i = i.B.find((e) => e.Q.has(a)))) break;
                          if (i.S) n = a;
                          else if (i.C && a === n) break;
                          s.push(a),
                            i.F && (s.push(65039), o > 0 && 65039 == e[o - 1] && o--),
                            i.V &&
                              ((r = (function (e, t) {
                                let r = ev.from(e);
                                return 2 == t.V && r.splice(1, 1), r;
                              })(s, i)),
                              t && t.push(...e.slice(o).reverse()),
                              (e.length = o));
                        }
                        return r;
                      })(e);
                      if (i) n.length && (r.push(t(n)), (n = [])), r.push(i);
                      else {
                        let t = e.pop();
                        if (ey.has(t)) n.push(t);
                        else {
                          let e = ei.get(t);
                          if (e) n.push(...e);
                          else if (!es.has(t)) throw eI(t);
                        }
                      }
                    }
                    return n.length && r.push(t(n)), r;
                  })(r, er)),
                  s = n.length;
                if (s) {
                  let r = n[0],
                    o = s > 1 || r.is_emoji;
                  if (!o && r.every((e) => e < 128))
                    (t = r),
                      eP(t),
                      (function (e) {
                        if (e.length >= 4 && 45 == e[2] && 45 == e[3]) throw Error('invalid label extension');
                      })(t),
                      (e = 'ASCII');
                  else if ((o && ((i.emoji = !0), (r = n.flatMap((e) => (e.is_emoji ? [] : e)))), (t = n.flatMap((e) => (e.is_emoji ? e.filter((e) => 65039 != e) : e))), eP(t), r.length)) {
                    if (eo.has(t[0])) throw eB('leading combining mark');
                    for (let e = 1; e < s; e++) {
                      let t = n[e];
                      if (!t.is_emoji && eo.has(t[0])) throw eB(`emoji + combining mark: "${H(n[e - 1])} + ${eA([t[0]])}"`);
                    }
                    !(function (e) {
                      let t = e[0],
                        r = W.get(t);
                      if (r) throw eB(`leading ${r}`);
                      let n = e.length,
                        i = -1;
                      for (let s = 1; s < n; s++) {
                        t = e[s];
                        let n = W.get(t);
                        if (n) {
                          if (i == s) throw eB(`${r} + ${n}`);
                          (i = s + 1), (r = n);
                        }
                      }
                      if (i == n) throw eB(`trailing ${r}`);
                    })(t);
                    let i = [...new Set(r)],
                      [o] = (function (e) {
                        let t = eh;
                        for (let r of e) {
                          let e = t.filter((e) => e.V.has(r));
                          if (!e.length) {
                            if (t === eh) throw eI(r);
                            throw eO(t[0], r);
                          }
                          if (((t = e), 1 == e.length)) break;
                        }
                        return t;
                      })(i);
                    (function (e, t) {
                      let { V: r, M: n } = e;
                      for (let n of t) if (!r.has(n)) throw eO(e, n);
                      if (n) {
                        let e = et(t).map(Y);
                        for (let t = 1, r = e.length; t < r; t++)
                          if (ea.has(e[t])) {
                            let n = t + 1;
                            for (let i; n < r && ea.has((i = e[n])); n++) for (let r = t; r < n; r++) if (e[r] == i) throw Error(`non-spacing marks: repeated ${eC(i)}`);
                            if (n - t > 4) throw Error(`non-spacing marks: too many ${eE(eA(e.slice(t - 1, n)))} (${n - t}/4)`);
                            t = n;
                          }
                      }
                    })(o, r),
                      (function (e, t) {
                        let r;
                        let n = [];
                        for (let e of t) {
                          let t = ep.get(e);
                          if (1 === t) return;
                          if (t) {
                            let n = t.M.get(e);
                            if (!(r = r ? r.filter((e) => n.has(e)) : [...n]).length) return;
                          } else n.push(e);
                        }
                        if (r) {
                          for (let t of r) if (n.every((e) => t.V.has(e))) throw Error(`whole-script confusable: ${e.N}/${t.N}`);
                        }
                      })(o, i),
                      (e = o.N);
                  } else e = 'Emoji';
                } else throw Error('empty label');
                i.type = e;
              } catch (e) {
                i.error = e;
              }
              return (i.output = t), i;
            })))
              .map(({ input: e, error: t, output: n }) => {
                if (t) {
                  let n = t.message;
                  throw Error(1 == r.length ? n : `Invalid label ${eE(eA(e))}: ${n}`);
                }
                return H(n);
              })
              .join('.'),
          });
        return s;
      }
      async function te({ address: e, chainId: t }) {
        let r = eZ({ chainId: t });
        return r.getEnsName({ address: (0, ex.K)(e) });
      }
      async function tt({ chainId: e } = {}) {
        let t = eZ({ chainId: e }),
          r = await t.getBlockNumber();
        return r;
      }
    },
    8306: function (e, t, r) {
      'use strict';
      let n;
      r.d(t, {
        AV: function () {
          return u;
        },
        AccountCtrl: function () {
          return b;
        },
        ConfigCtrl: function () {
          return m;
        },
        ExplorerCtrl: function () {
          return M;
        },
        Id: function () {
          return o;
        },
        OptionsCtrl: function () {
          return p;
        },
        ThemeCtrl: function () {
          return G;
        },
        ToastCtrl: function () {
          return W;
        },
        WcConnectionCtrl: function () {
          return j;
        },
        jb: function () {
          return U;
        },
        uA: function () {
          return h;
        },
        zv: function () {
          return c;
        },
      });
      var i = r(6345),
        s = r(8504);
      let o = {
          ethereumClient: void 0,
          setEthereumClient(e) {
            n = e;
          },
          client() {
            if (n) return n;
            throw Error('ClientCtrl has no client set');
          },
        },
        a = (0, i.sj)({ history: ['ConnectWallet'], view: 'ConnectWallet', data: void 0 }),
        u = {
          state: a,
          subscribe: (e) => (0, i.Ld)(a, () => e(a)),
          push(e, t) {
            e !== a.view && ((a.view = e), t && (a.data = t), a.history.push(e));
          },
          reset(e) {
            (a.view = e), (a.history = [e]);
          },
          replace(e) {
            a.history.length > 1 && ((a.history[a.history.length - 1] = e), (a.view = e));
          },
          goBack() {
            if (a.history.length > 1) {
              a.history.pop();
              let [e] = a.history.slice(-1);
              a.view = e;
            }
          },
          setData(e) {
            a.data = e;
          },
        },
        c = {
          WALLETCONNECT_DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
          W3M_VERSION: 'W3M_VERSION',
          W3M_PREFER_INJECTED_URL_FLAG: 'w3mPreferInjected',
          RECOMMENDED_WALLET_AMOUNT: 9,
          isMobile: () => 'u' > typeof window && !!(window.matchMedia('(pointer:coarse)').matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
          isAndroid: () => c.isMobile() && navigator.userAgent.toLowerCase().includes('android'),
          isIos() {
            let e = navigator.userAgent.toLowerCase();
            return c.isMobile() && (e.includes('iphone') || e.includes('ipad'));
          },
          isHttpUrl: (e) => e.startsWith('http://') || e.startsWith('https://'),
          isArray: (e) => Array.isArray(e) && e.length > 0,
          formatNativeUrl(e, t, r) {
            if (c.isHttpUrl(e)) return this.formatUniversalUrl(e, t, r);
            let n = e;
            n.includes('://') || (n = `${(n = e.replaceAll('/', '').replaceAll(':', ''))}://`), n.endsWith('/') || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
            let i = encodeURIComponent(t);
            return `${n}wc?uri=${i}`;
          },
          formatUniversalUrl(e, t, r) {
            if (!c.isHttpUrl(e)) return this.formatNativeUrl(e, t, r);
            let n = e;
            n.endsWith('/') || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
            let i = encodeURIComponent(t);
            return `${n}wc?uri=${i}`;
          },
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          openHref(e, t) {
            window.open(e, t, 'noreferrer noopener');
          },
          setWalletConnectDeepLink(e, t) {
            try {
              localStorage.setItem(c.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
            } catch {
              console.info('Unable to set WalletConnect deep link');
            }
          },
          setWalletConnectAndroidDeepLink(e) {
            try {
              let [t] = e.split('?');
              localStorage.setItem(c.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: 'Android' }));
            } catch {
              console.info('Unable to set WalletConnect android deep link');
            }
          },
          removeWalletConnectDeepLink() {
            try {
              localStorage.removeItem(c.WALLETCONNECT_DEEPLINK_CHOICE);
            } catch {
              console.info('Unable to remove WalletConnect deep link');
            }
          },
          setWeb3ModalVersionInStorage() {
            try {
              'u' > typeof localStorage && localStorage.setItem(c.W3M_VERSION, '2.6.2');
            } catch {
              console.info('Unable to set Web3Modal version in storage');
            }
          },
          getWalletRouterData() {
            var e;
            let t = null == (e = u.state.data) ? void 0 : e.Wallet;
            if (!t) throw Error('Missing "Wallet" view data');
            return t;
          },
          getSwitchNetworkRouterData() {
            var e;
            let t = null == (e = u.state.data) ? void 0 : e.SwitchNetwork;
            if (!t) throw Error('Missing "SwitchNetwork" view data');
            return t;
          },
          isPreferInjectedFlag: () => 'u' > typeof location && new URLSearchParams(location.search).has(c.W3M_PREFER_INJECTED_URL_FLAG),
        },
        l = 'u' > typeof location && (location.hostname.includes('localhost') || location.protocol.includes('https')),
        f = (0, i.sj)({ enabled: l, userSessionId: '', events: [], connectedWalletId: void 0 }),
        h = {
          state: f,
          subscribe: (e) => (0, i.Ld)(f.events, () => e((0, i.CO)(f.events[f.events.length - 1]))),
          initialize() {
            f.enabled && 'u' > typeof (null == crypto ? void 0 : crypto.randomUUID) && (f.userSessionId = crypto.randomUUID());
          },
          setConnectedWalletId(e) {
            f.connectedWalletId = e;
          },
          click(e) {
            if (f.enabled) {
              let t = { type: 'CLICK', name: e.name, userSessionId: f.userSessionId, timestamp: Date.now(), data: e };
              f.events.push(t);
            }
          },
          track(e) {
            if (f.enabled) {
              let t = { type: 'TRACK', name: e.name, userSessionId: f.userSessionId, timestamp: Date.now(), data: e };
              f.events.push(t);
            }
          },
          view(e) {
            if (f.enabled) {
              let t = { type: 'VIEW', name: e.name, userSessionId: f.userSessionId, timestamp: Date.now(), data: e };
              f.events.push(t);
            }
          },
        },
        d = (0, i.sj)({ selectedChain: void 0, chains: void 0, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1, isPreferInjected: !1 }),
        p = {
          state: d,
          subscribe: (e) => (0, i.Ld)(d, () => e(d)),
          setChains(e) {
            d.chains = e;
          },
          getSelectedChain() {
            let e = o.client().getNetwork().chain;
            return e && (d.selectedChain = e), d.selectedChain;
          },
          setSelectedChain(e) {
            d.selectedChain = e;
          },
          setIsCustomDesktop(e) {
            d.isCustomDesktop = e;
          },
          setIsCustomMobile(e) {
            d.isCustomMobile = e;
          },
          setIsDataLoaded(e) {
            d.isDataLoaded = e;
          },
          setIsUiLoaded(e) {
            d.isUiLoaded = e;
          },
          setIsPreferInjected(e) {
            d.isPreferInjected = e;
          },
        },
        g = (0, i.sj)({
          projectId: '',
          mobileWallets: void 0,
          desktopWallets: void 0,
          walletImages: void 0,
          chainImages: void 0,
          tokenImages: void 0,
          tokenContracts: void 0,
          enableNetworkView: !1,
          enableAccountView: !0,
          enableExplorer: !0,
          defaultChain: void 0,
          explorerExcludedWalletIds: void 0,
          explorerRecommendedWalletIds: void 0,
          termsOfServiceUrl: void 0,
          privacyPolicyUrl: void 0,
        }),
        m = {
          state: g,
          subscribe: (e) => (0, i.Ld)(g, () => e(g)),
          setConfig(e) {
            var t, r;
            h.initialize(),
              p.setIsCustomMobile(!!(null == (t = e.mobileWallets) ? void 0 : t.length)),
              p.setIsCustomDesktop(!!(null == (r = e.desktopWallets) ? void 0 : r.length)),
              p.setChains(o.client().chains),
              p.setIsPreferInjected(o.client().isInjectedProviderInstalled() && c.isPreferInjectedFlag()),
              e.defaultChain && p.setSelectedChain(e.defaultChain),
              c.setWeb3ModalVersionInStorage(),
              Object.assign(g, e);
          },
        },
        y = (0, i.sj)({ address: void 0, profileName: void 0, profileAvatar: void 0, profileLoading: !1, balanceLoading: !1, balance: void 0, isConnected: !1 }),
        b = {
          state: y,
          subscribe: (e) => (0, i.Ld)(y, () => e(y)),
          getAccount() {
            let e = o.client().getAccount();
            (y.address = e.address), (y.isConnected = e.isConnected);
          },
          async fetchProfile(e, t) {
            var r;
            try {
              y.profileLoading = !0;
              let n = t ?? y.address,
                i = null == (r = p.state.chains) ? void 0 : r.find((e) => 1 === e.id);
              if (n && i) {
                let t = await o.client().fetchEnsName({ address: n, chainId: 1 });
                if (t) {
                  let r = await o.client().fetchEnsAvatar({ name: t, chainId: 1 });
                  r && (await e(r)), (y.profileAvatar = r);
                }
                y.profileName = t;
              }
            } finally {
              y.profileLoading = !1;
            }
          },
          async fetchBalance(e) {
            try {
              let t;
              let { chain: r } = o.client().getNetwork(),
                { tokenContracts: n } = m.state;
              r && n && (t = n[r.id]), (y.balanceLoading = !0);
              let i = e ?? y.address;
              if (i) {
                let e = await o.client().fetchBalance({ address: i, token: t });
                y.balance = { amount: e.formatted, symbol: e.symbol };
              }
            } finally {
              y.balanceLoading = !1;
            }
          },
          setAddress(e) {
            y.address = e;
          },
          setIsConnected(e) {
            y.isConnected = e;
          },
          resetBalance() {
            y.balance = void 0;
          },
          resetAccount() {
            (y.address = void 0), (y.isConnected = !1), (y.profileName = void 0), (y.profileAvatar = void 0), (y.balance = void 0);
          },
        },
        w = 'https://explorer-api.walletconnect.com';
      async function v(e, t) {
        let r = new URL(e, w);
        return (
          r.searchParams.append('projectId', m.state.projectId),
          Object.entries(t).forEach(([e, t]) => {
            t && r.searchParams.append(e, String(t));
          }),
          (await fetch(r)).json()
        );
      }
      let A = {
        getDesktopListings: async (e) => v('/w3m/v1/getDesktopListings', e),
        getMobileListings: async (e) => v('/w3m/v1/getMobileListings', e),
        getInjectedListings: async (e) => v('/w3m/v1/getInjectedListings', e),
        getAllListings: async (e) => v('/w3m/v1/getAllListings', e),
        getWalletImageUrl: (e) => `${w}/w3m/v1/getWalletImage/${e}?projectId=${m.state.projectId}`,
        getAssetImageUrl: (e) => `${w}/w3m/v1/getAssetImage/${e}?projectId=${m.state.projectId}`,
      };
      var C = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        O = (e, t, r) => (t in e ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        B = (e, t) => {
          for (var r in t || (t = {})) P.call(t, r) && O(e, r, t[r]);
          if (E) for (var r of E(t)) I.call(t, r) && O(e, r, t[r]);
          return e;
        };
      let x = c.isMobile(),
        S = (0, i.sj)({ wallets: { listings: [], total: 0, page: 1 }, injectedWallets: [], search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }),
        M = {
          state: S,
          async getRecomendedWallets() {
            let { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = m.state;
            if ('NONE' === e || ('ALL' === t && !e)) return S.recomendedWallets;
            if (c.isArray(e)) {
              let t = { recommendedIds: e.join(',') },
                { listings: r } = await A.getAllListings(t),
                n = Object.values(r);
              n.sort((t, r) => {
                let n = e.indexOf(t.id),
                  i = e.indexOf(r.id);
                return n - i;
              }),
                (S.recomendedWallets = n);
            } else {
              let e = c.isArray(t),
                r = { page: 1, entries: c.RECOMMENDED_WALLET_AMOUNT, version: 2, excludedIds: e ? t.join(',') : void 0 },
                { listings: n } = x ? await A.getMobileListings(r) : await A.getDesktopListings(r);
              S.recomendedWallets = Object.values(n);
            }
            return S.recomendedWallets;
          },
          async getWallets(e) {
            let t = B({}, e),
              { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = m.state,
              { recomendedWallets: i } = S;
            if ('ALL' === n) return S.wallets;
            i.length ? (t.excludedIds = i.map((e) => e.id).join(',')) : c.isArray(r) && (t.excludedIds = r.join(',')), c.isArray(n) && (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(','));
            let { page: s, search: o } = e,
              { listings: a, total: u } = x ? await A.getMobileListings(t) : await A.getDesktopListings(t),
              l = Object.values(a),
              f = o ? 'search' : 'wallets';
            return (S[f] = { listings: [...S[f].listings, ...l], total: u, page: s ?? 1 }), { listings: l, total: u };
          },
          async getInjectedWallets() {
            let { listings: e } = await A.getInjectedListings({}),
              t = Object.values(e);
            return (S.injectedWallets = t), S.injectedWallets;
          },
          getWalletImageUrl: (e) => A.getWalletImageUrl(e),
          getAssetImageUrl: (e) => A.getAssetImageUrl(e),
          resetSearch() {
            S.search = { listings: [], total: 0, page: 1 };
          },
        },
        R = (0, i.sj)({ pairingEnabled: !1, pairingUri: '', pairingError: !1 }),
        j = {
          state: R,
          subscribe: (e) => (0, i.Ld)(R, () => e(R)),
          setPairingUri(e) {
            R.pairingUri = e;
          },
          setPairingError(e) {
            R.pairingError = e;
          },
          setPairingEnabled(e) {
            R.pairingEnabled = e;
          },
        },
        k = (0, i.sj)({ open: !1 }),
        U = {
          state: k,
          subscribe: (e) => (0, i.Ld)(k, () => e(k)),
          open: async (e) =>
            new Promise((t) => {
              let { isUiLoaded: r, isDataLoaded: n, isPreferInjected: i, selectedChain: s } = p.state,
                { isConnected: a } = b.state,
                { enableNetworkView: c } = m.state;
              if ((j.setPairingEnabled(!0), null != e && e.route)) u.reset(e.route);
              else if (a) u.reset('Account');
              else if (c) u.reset('SelectNetwork');
              else if (i) {
                o
                  .client()
                  .connectConnector('injected', s?.id)
                  .catch((e) => console.error(e)),
                  t();
                return;
              } else u.reset('ConnectWallet');
              let { pairingUri: l } = j.state;
              if (r && n && (l || a)) (k.open = !0), t();
              else {
                let e = setInterval(() => {
                  let r = p.state,
                    n = j.state;
                  r.isUiLoaded && r.isDataLoaded && (n.pairingUri || a) && (clearInterval(e), (k.open = !0), t());
                }, 200);
              }
            }),
          close() {
            k.open = !1;
          },
        };
      var L = Object.defineProperty,
        D = Object.getOwnPropertySymbols,
        F = Object.prototype.hasOwnProperty,
        T = Object.prototype.propertyIsEnumerable,
        N = (e, t, r) => (t in e ? L(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        Q = (e, t) => {
          for (var r in t || (t = {})) F.call(t, r) && N(e, r, t[r]);
          if (D) for (var r of D(t)) T.call(t, r) && N(e, r, t[r]);
          return e;
        };
      let q = (0, i.sj)({ themeMode: 'u' > typeof matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' }),
        G = {
          state: q,
          subscribe: (e) => (0, i.Ld)(q, () => e(q)),
          setThemeConfig(e) {
            let { themeMode: t, themeVariables: r } = e;
            t && (q.themeMode = t), r && (q.themeVariables = Q({}, r));
          },
        },
        z = (0, i.sj)({ open: !1, message: '', variant: 'success' }),
        W = {
          state: z,
          subscribe: (e) => (0, i.Ld)(z, () => e(z)),
          openToast(e, t) {
            (z.open = !0), (z.message = e), (z.variant = t);
          },
          closeToast() {
            z.open = !1;
          },
        };
      'u' > typeof window && (window.Buffer || (window.Buffer = s.lW), window.global || (window.global = window), window.process || (window.process = { env: {} }), window.global || (window.global = window));
    },
    7948: function (e, t, r) {
      'use strict';
      r.d(t, {
        Eg: function () {
          return m;
        },
        k_: function () {
          return E;
        },
      });
      var n = r(3962),
        i = r(8306);
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      var s = Object.defineProperty,
        o = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        c = (e, t, r) => (t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        l = (e, t) => {
          for (var r in t || (t = {})) a.call(t, r) && c(e, r, t[r]);
          if (o) for (var r of o(t)) u.call(t, r) && c(e, r, t[r]);
          return e;
        };
      function f(e) {
        return n.createElement('w3m-modal', l({}, e));
      }
      var h = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        g = (e, t) => {
          var r = {};
          for (var n in e) d.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && h) for (var n of h(e)) 0 > t.indexOf(n) && p.call(e, n) && (r[n] = e[n]);
          return r;
        };
      let m = (0, n.memo)(function (e) {
        var { ethereumClient: t } = e,
          s = g(e, ['ethereumClient']);
        let o = (0, n.useCallback)(async () => {
          i.ThemeCtrl.setThemeConfig(s), t && i.Id.setEthereumClient(t), i.ConfigCtrl.setConfig(s), await Promise.all([r.e(530), r.e(576)]).then(r.bind(r, 9576)), i.OptionsCtrl.setIsUiLoaded(!0);
        }, [t, s]);
        return (
          (0, n.useEffect)(() => {
            o();
          }, [o]),
          n.createElement(f, null)
        );
      });
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      var y = Object.defineProperty,
        b = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        A = (e, t, r) => (t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        C = (e, t) => {
          for (var r in t || (t = {})) w.call(t, r) && A(e, r, t[r]);
          if (b) for (var r of b(t)) v.call(t, r) && A(e, r, t[r]);
          return e;
        };
      function E() {
        let [e, t] = (0, n.useState)(i.jb.state);
        return (
          (0, n.useEffect)(() => {
            let e = i.jb.subscribe((e) => t(C({}, e)));
            return () => {
              e();
            };
          }, []),
          { isOpen: e.open, open: i.jb.open, close: i.jb.close, setDefaultChain: i.OptionsCtrl.setSelectedChain }
        );
      }
    },
    6345: function (e, t, r) {
      'use strict';
      r.d(t, {
        sj: function () {
          return A;
        },
        CO: function () {
          return E;
        },
        Ld: function () {
          return C;
        },
      });
      let n = Symbol(),
        i = Symbol(),
        s = (e, t) => new Proxy(e, t),
        o = Object.getPrototypeOf,
        a = new WeakMap(),
        u = (e) => e && (a.has(e) ? a.get(e) : o(e) === Object.prototype || o(e) === Array.prototype),
        c = (e) => 'object' == typeof e && null !== e,
        l = (e) => {
          if (Array.isArray(e)) return Array.from(e);
          let t = Object.getOwnPropertyDescriptors(e);
          return (
            Object.values(t).forEach((e) => {
              e.configurable = !0;
            }),
            Object.create(o(e), t)
          );
        },
        f = (e) => e[i] || e,
        h = (e, t, r, o) => {
          if (!u(e)) return e;
          let a = o && o.get(e);
          if (!a) {
            let t = f(e);
            (a = Object.values(Object.getOwnPropertyDescriptors(t)).some((e) => !e.configurable && !e.writable) ? [t, l(t)] : [t]), null == o || o.set(e, a);
          }
          let [c, d] = a,
            p = r && r.get(c);
          return (
            (p && !!d === p[1].f) ||
              (((p = ((e, t) => {
                let r = { f: t },
                  s = !1,
                  o = (t, n) => {
                    if (!s) {
                      let i = r.a.get(e);
                      if ((i || ((i = {}), r.a.set(e, i)), 'w' === t)) i.w = !0;
                      else {
                        let e = i[t];
                        e || ((e = new Set()), (i[t] = e)), e.add(n);
                      }
                    }
                  },
                  a = {
                    get: (t, n) => (n === i ? e : (o('k', n), h(Reflect.get(t, n), r.a, r.c, r.t))),
                    has: (t, i) => (i === n ? ((s = !0), r.a.delete(e), !0) : (o('h', i), Reflect.has(t, i))),
                    getOwnPropertyDescriptor: (e, t) => (o('o', t), Reflect.getOwnPropertyDescriptor(e, t)),
                    ownKeys: (e) => (o('w'), Reflect.ownKeys(e)),
                  };
                return t && (a.set = a.deleteProperty = () => !1), [a, r];
              })(c, !!d))[1].p = s(d || c, p[0])),
              r && r.set(c, p)),
            (p[1].a = t),
            (p[1].c = r),
            (p[1].t = o),
            p[1].p
          );
        },
        d = (e, t, r, n) => {
          if (Object.is(e, t)) return !1;
          if (!c(e) || !c(t)) return !0;
          let i = r.get(f(e));
          if (!i) return !0;
          if (n) {
            let r = n.get(e);
            if (r && r.n === t) return r.g;
            n.set(e, { n: t, g: !1 });
          }
          let s = null;
          try {
            for (let r of i.h || []) if ((s = Reflect.has(e, r) !== Reflect.has(t, r))) return s;
            if (!0 === i.w) {
              if (
                (s = ((e, t) => {
                  let r = Reflect.ownKeys(e),
                    n = Reflect.ownKeys(t);
                  return r.length !== n.length || r.some((e, t) => e !== n[t]);
                })(e, t))
              )
                return s;
            } else for (let r of i.o || []) if ((s = !!Reflect.getOwnPropertyDescriptor(e, r) != !!Reflect.getOwnPropertyDescriptor(t, r))) return s;
            for (let o of i.k || []) if ((s = d(e[o], t[o], r, n))) return s;
            return null === s && (s = !0), s;
          } finally {
            n && n.set(e, { n: t, g: s });
          }
        },
        p = (e) => (u(e) && e[i]) || null,
        g = (e, t = !0) => {
          a.set(e, t);
        },
        m = (e) => 'object' == typeof e && null !== e,
        y = new WeakMap(),
        b = new WeakSet(),
        w = (
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          r = (e) =>
            m(e) &&
            !b.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          n = (e) => {
            switch (e.status) {
              case 'fulfilled':
                return e.value;
              case 'rejected':
                throw e.reason;
              default:
                throw e;
            }
          },
          i = new WeakMap(),
          s = (e, t, r = n) => {
            let o = i.get(e);
            if ((null == o ? void 0 : o[0]) === t) return o[1];
            let a = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
            return (
              g(a, !0),
              i.set(e, [t, a]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(a, t)) return;
                let n = Reflect.get(e, t),
                  i = { value: n, enumerable: !0, configurable: !0 };
                if (b.has(n)) g(n, !1);
                else if (n instanceof Promise) delete i.value, (i.get = () => r(n));
                else if (y.has(n)) {
                  let [e, t] = y.get(n);
                  i.value = s(e, t(), r);
                }
                Object.defineProperty(a, t, i);
              }),
              a
            );
          },
          o = new WeakMap(),
          a = [1, 1],
          u = (n) => {
            if (!m(n)) throw Error('object required');
            let i = o.get(n);
            if (i) return i;
            let c = a[0],
              l = new Set(),
              f = (e, t = ++a[0]) => {
                c !== t && ((c = t), l.forEach((r) => r(e, t)));
              },
              h = a[1],
              d = (e = ++a[1]) => (
                h === e ||
                  l.size ||
                  ((h = e),
                  w.forEach(([t]) => {
                    let r = t[1](e);
                    r > c && (c = r);
                  })),
                c
              ),
              g = (e) => (t, r) => {
                let n = [...t];
                (n[1] = [e, ...n[1]]), f(n, r);
              },
              w = new Map(),
              v = (e, t) => {
                if (w.has(e)) throw Error('prop listener already exists');
                if (l.size) {
                  let r = t[3](g(e));
                  w.set(e, [t, r]);
                } else w.set(e, [t]);
              },
              A = (e) => {
                var t;
                let r = w.get(e);
                r && (w.delete(e), null == (t = r[1]) || t.call(r));
              },
              C = (e) => {
                l.add(e),
                  1 === l.size &&
                    w.forEach(([e, t], r) => {
                      if (t) throw Error('remove already exists');
                      let n = e[3](g(r));
                      w.set(r, [e, n]);
                    });
                let t = () => {
                  l.delete(e),
                    0 === l.size &&
                      w.forEach(([e, t], r) => {
                        t && (t(), w.set(r, [e]));
                      });
                };
                return t;
              },
              E = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n)),
              P = {
                deleteProperty(e, t) {
                  let r = Reflect.get(e, t);
                  A(t);
                  let n = Reflect.deleteProperty(e, t);
                  return n && f(['delete', [t], r]), n;
                },
                set(t, n, i, s) {
                  let a = Reflect.has(t, n),
                    c = Reflect.get(t, n, s);
                  if (a && (e(c, i) || (o.has(i) && e(c, o.get(i))))) return !0;
                  A(n), m(i) && (i = p(i) || i);
                  let l = i;
                  if (i instanceof Promise)
                    i.then((e) => {
                      (i.status = 'fulfilled'), (i.value = e), f(['resolve', [n], e]);
                    }).catch((e) => {
                      (i.status = 'rejected'), (i.reason = e), f(['reject', [n], e]);
                    });
                  else {
                    !y.has(i) && r(i) && (l = u(i));
                    let e = !b.has(l) && y.get(l);
                    e && v(n, e);
                  }
                  return Reflect.set(t, n, l, s), f(['set', [n], i, c]), !0;
                },
              },
              I = t(E, P);
            o.set(n, I);
            let O = [E, d, s, C];
            return (
              y.set(I, O),
              Reflect.ownKeys(n).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(n, e);
                'value' in t && ((I[e] = n[e]), delete t.value, delete t.writable), Object.defineProperty(E, e, t);
              }),
              I
            );
          }
        ) => [u, y, b, e, t, r, n, i, s, o, a],
        [v] = w();
      function A(e = {}) {
        return v(e);
      }
      function C(e, t, r) {
        let n;
        let i = y.get(e);
        i || console.warn('Please use proxy object');
        let s = [],
          o = i[3],
          a = !1,
          u = o((e) => {
            if ((s.push(e), r)) {
              t(s.splice(0));
              return;
            }
            n ||
              (n = Promise.resolve().then(() => {
                (n = void 0), a && t(s.splice(0));
              }));
          });
        return (
          (a = !0),
          () => {
            (a = !1), u();
          }
        );
      }
      function E(e, t) {
        let r = y.get(e);
        r || console.warn('Please use proxy object');
        let [n, i, s] = r;
        return s(n, i(), t);
      }
    },
    2076: function (e, t, r) {
      'use strict';
      function n(e) {
        return 'string' == typeof e ? { address: e, type: 'json-rpc' } : e;
      }
      r.d(t, {
        T: function () {
          return n;
        },
      });
    },
    8538: function (e, t, r) {
      'use strict';
      r.d(t, {
        R: function () {
          return y;
        },
      });
      var n = r(2076),
        i = r(2372),
        s = r(5402),
        o = r(4499),
        a = r(5064),
        u = r(4627),
        c = r(3718),
        l = r(5757),
        f = r(471),
        h = r(6678),
        d = r(924),
        p = r(1151),
        g = r(7528),
        m = r(894);
      async function y(e, t) {
        let { account: i, batch: u = !!e.batch?.multicall, blockNumber: c, blockTag: l = 'latest', accessList: g, data: y, gas: w, gasPrice: v, maxFeePerGas: A, maxPriorityFeePerGas: C, nonce: E, to: P, value: I, ...O } = t,
          B = i ? (0, n.T)(i) : void 0;
        try {
          (0, m.F)(t);
          let r = c ? (0, f.eC)(c) : void 0,
            n = r || l,
            i = e.chain?.formatters?.transactionRequest?.format || p.t,
            s = i({ ...(0, d.K)(O, { format: i }), from: B?.address, accessList: g, data: y, gas: w, gasPrice: v, maxFeePerGas: A, maxPriorityFeePerGas: C, nonce: E, to: P, value: I });
          if (
            u &&
            (function ({ request: e }) {
              let { data: t, to: r, ...n } = e;
              return !(!t || t.startsWith('0x82ad56cb')) && !!r && !(Object.values(n).filter((e) => void 0 !== e).length > 0);
            })({ request: s })
          )
            try {
              return await b(e, { ...s, blockNumber: c, blockTag: l });
            } catch (e) {
              if (!(e instanceof o.pZ) && !(e instanceof o.mm)) throw e;
            }
          let a = await e.request({ method: 'eth_call', params: n ? [s, n] : [s] });
          if ('0x' === a) return { data: void 0 };
          return { data: a };
        } catch (u) {
          let n = (function (e) {
              if (!(e instanceof s.G)) return;
              let t = e.walk();
              return 'object' == typeof t.data ? t.data.data : t.data;
            })(u),
            { offchainLookup: i, offchainLookupSignature: o } = await r.e(594).then(r.bind(r, 7877));
          if (n?.slice(0, 10) === o && P) return { data: await i(e, { data: n, to: P }) };
          throw (function (e, { docsPath: t, ...r }) {
            let n = e;
            return (0, h.B)(e) && (n = (0, h.k)(e, r)), new a.cg(n, { docsPath: t, ...r });
          })(u, { ...t, account: B, chain: e.chain });
        }
      }
      async function b(e, t) {
        let { batchSize: r = 1024, wait: n = 0 } = 'object' == typeof e.batch?.multicall ? e.batch.multicall : {},
          { blockNumber: s, blockTag: h = 'latest', data: d, multicallAddress: p, to: m } = t,
          y = p;
        if (!y) {
          if (!e.chain) throw new o.pZ();
          y = (0, l.LI)({ blockNumber: s, chain: e.chain, contract: 'multicall3' });
        }
        let b = s ? (0, f.eC)(s) : void 0,
          w = b || h,
          { schedule: v } = (0, g.S)({
            id: `${e.uid}.${w}`,
            wait: n,
            shouldSplitBatch(e) {
              let t = e.reduce((e, { data: t }) => e + (t.length - 2), 0);
              return t > 2 * r;
            },
            fn: async (t) => {
              let r = t.map((e) => ({ allowFailure: !0, callData: e.data, target: e.to })),
                n = (0, c.R)({ abi: i.F8, args: [r], functionName: 'aggregate3' }),
                s = await e.request({ method: 'eth_call', params: [{ data: n, to: y }, w] });
              return (0, u.k)({ abi: i.F8, args: [r], functionName: 'aggregate3', data: s || '0x' });
            },
          }),
          [{ returnData: A, success: C }] = await v({ data: d, to: m });
        if (!C) throw new a.VQ({ data: A });
        return '0x' === A ? { data: void 0 } : { data: A };
      }
    },
    9396: function (e, t, r) {
      'use strict';
      r.d(t, {
        Q: function () {
          return m;
        },
      });
      var n = r(2076),
        i = r(1906),
        s = r(471),
        o = r(7875),
        a = r(6529),
        u = r(5402),
        c = r(7240);
      class l extends u.G {
        constructor(e, { account: t, docsPath: r, chain: n, data: i, gas: s, gasPrice: u, maxFeePerGas: l, maxPriorityFeePerGas: f, nonce: h, to: d, value: p }) {
          let g = (0, c.xr)({
            from: t?.address,
            to: d,
            value: void 0 !== p && `${(0, o.d)(p)} ${n?.nativeCurrency.symbol || 'ETH'}`,
            data: i,
            gas: s,
            gasPrice: void 0 !== u && `${(0, a.o)(u)} gwei`,
            maxFeePerGas: void 0 !== l && `${(0, a.o)(l)} gwei`,
            maxPriorityFeePerGas: void 0 !== f && `${(0, a.o)(f)} gwei`,
            nonce: h,
          });
          super(e.shortMessage, { cause: e, docsPath: r, metaMessages: [...(e.metaMessages ? [...e.metaMessages, ' '] : []), 'Estimate Gas Arguments:', g].filter(Boolean) }),
            Object.defineProperty(this, 'cause', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'EstimateGasExecutionError' }),
            (this.cause = e);
        }
      }
      var f = r(6678),
        h = r(924),
        d = r(1151),
        p = r(894),
        g = r(3535);
      async function m(e, t) {
        let r = t.account ?? e.account;
        if (!r) throw new i.o({ docsPath: '/docs/actions/public/estimateGas' });
        let o = (0, n.T)(r);
        try {
          let { accessList: r, blockNumber: n, blockTag: i, data: a, gas: u, gasPrice: c, maxFeePerGas: l, maxPriorityFeePerGas: f, nonce: m, to: y, value: b, ...w } = 'local' === o.type ? await (0, g.h)(e, t) : t,
            v = n ? (0, s.eC)(n) : void 0,
            A = v || i;
          (0, p.F)(t);
          let C = e.chain?.formatters?.transactionRequest?.format || d.t,
            E = C({ ...(0, h.K)(w, { format: C }), from: o.address, accessList: r, data: a, gas: u, gasPrice: c, maxFeePerGas: l, maxPriorityFeePerGas: f, nonce: m, to: y, value: b }),
            P = await e.request({ method: 'eth_estimateGas', params: A ? [E, A] : [E] });
          return BigInt(P);
        } catch (r) {
          throw (function (e, { docsPath: t, ...r }) {
            let n = e;
            return (0, f.B)(e) && (n = (0, f.k)(e, r)), new l(n, { docsPath: t, ...r });
          })(r, { ...t, account: o, chain: e.chain });
        }
      }
    },
    3582: function (e, t, r) {
      'use strict';
      r.d(t, {
        Q: function () {
          return a;
        },
      });
      var n = r(5402);
      class i extends n.G {
        constructor({ blockHash: e, blockNumber: t }) {
          let r = 'Block';
          e && (r = `Block at hash "${e}"`), t && (r = `Block at number "${t}"`), super(`${r} could not be found.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'BlockNotFoundError' });
        }
      }
      var s = r(471),
        o = r(4412);
      async function a(e, { blockHash: t, blockNumber: r, blockTag: n, includeTransactions: a } = {}) {
        let u = a ?? !1,
          c = void 0 !== r ? (0, s.eC)(r) : void 0,
          l = null;
        if (!(l = t ? await e.request({ method: 'eth_getBlockByHash', params: [t, u] }) : await e.request({ method: 'eth_getBlockByNumber', params: [c || (n ?? 'latest'), u] }))) throw new i({ blockHash: t, blockNumber: r });
        let f = e.chain?.formatters?.block?.format || o.Z;
        return f(l);
      }
    },
    9821: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return i;
        },
      });
      var n = r(8405);
      async function i(e) {
        let t = await e.request({ method: 'eth_chainId' });
        return (0, n.ly)(t);
      }
    },
    8141: function (e, t, r) {
      'use strict';
      async function n(e) {
        let t = await e.request({ method: 'eth_gasPrice' });
        return BigInt(t);
      }
      r.d(t, {
        o: function () {
          return n;
        },
      });
    },
    2114: function (e, t, r) {
      'use strict';
      r.d(t, {
        K: function () {
          return s;
        },
      });
      var n = r(8405),
        i = r(471);
      async function s(e, { address: t, blockTag: r = 'latest', blockNumber: s }) {
        let o = await e.request({ method: 'eth_getTransactionCount', params: [t, s ? (0, i.eC)(s) : r] });
        return (0, n.ly)(o);
      }
    },
    5214: function (e, t, r) {
      'use strict';
      r.d(t, {
        ws: function () {
          return s;
        },
        RJ: function () {
          return o;
        },
      });
      var n = r(5757);
      r(8405), r(471), r(4412), r(7303), r(6361), r(1151), r(1525), r(5402), r(4499), r(4129), r(8863), r(4840);
      var i = (r(9302), r(9750));
      r(7240);
      let s = (0, n.ax)({
          id: 5,
          network: 'goerli',
          name: 'Goerli',
          nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
          rpcUrls: {
            alchemy: { http: ['https://eth-goerli.g.alchemy.com/v2'], webSocket: ['wss://eth-goerli.g.alchemy.com/v2'] },
            infura: { http: ['https://goerli.infura.io/v3'], webSocket: ['wss://goerli.infura.io/ws/v3'] },
            default: { http: ['https://rpc.ankr.com/eth_goerli'] },
            public: { http: ['https://rpc.ankr.com/eth_goerli'] },
          },
          blockExplorers: { etherscan: { name: 'Etherscan', url: 'https://goerli.etherscan.io' }, default: { name: 'Etherscan', url: 'https://goerli.etherscan.io' } },
          contracts: {
            ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
            ensUniversalResolver: { address: '0x56522D00C410a43BFfDF00a9A569489297385790', blockCreated: 8765204 },
            multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11', blockCreated: 6507670 },
          },
          testnet: !0,
        }),
        o = (0, n.ax)({
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
        });
    },
    6561: function (e, t, r) {
      'use strict';
      let n;
      r.d(t, {
        e: function () {
          return o;
        },
      });
      var i = r(2076);
      let s = 256;
      function o(e) {
        let { batch: t, cacheTime: r = e.pollingInterval ?? 4e3, key: o = 'base', name: a = 'Base Client', pollingInterval: u = 4e3, type: c = 'base' } = e,
          l = e.chain,
          f = e.account ? (0, i.T)(e.account) : void 0,
          { config: h, request: d, value: p } = e.transport({ chain: l, pollingInterval: u }),
          g = { ...h, ...p },
          m = {
            account: f,
            batch: t,
            cacheTime: r,
            chain: l,
            key: o,
            name: a,
            pollingInterval: u,
            request: d,
            transport: g,
            type: c,
            uid: (function (e = 11) {
              if (!n || s + e > 512) {
                (n = ''), (s = 0);
                for (let e = 0; e < 256; e++) n += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
              }
              return n.substring(s, s++ + e);
            })(),
          };
        return Object.assign(m, {
          extend: (function e(t) {
            return (r) => {
              let n = r(t);
              for (let e in m) delete n[e];
              let i = { ...t, ...n };
              return Object.assign(i, { extend: e(i) });
            };
          })(m),
        });
      }
    },
    3089: function (e, t, r) {
      'use strict';
      r.d(t, {
        v: function () {
          return e8;
        },
      });
      var n = r(6561),
        i = r(2372),
        s = r(4627),
        o = r(3718),
        a = r(5757),
        u = r(9302),
        c = r(471),
        l = r(4451),
        f = r(5402),
        h = r(5064);
      function d(e, t) {
        if (!(e instanceof f.G)) return !1;
        let r = e.walk((e) => e instanceof h.Lu);
        return (
          r instanceof h.Lu &&
          (!!(r.data?.errorName === 'ResolverNotFound' || r.data?.errorName === 'ResolverWildcardNotSupported' || r.reason?.includes('Wildcard on non-extended resolvers is not supported')) || ('reverse' === t && r.reason === l.$[50]))
        );
      }
      var p = r(4840),
        g = r(9750),
        m = r(9550),
        y = r(8075);
      function b(e) {
        if (66 !== e.length || 0 !== e.indexOf('[') || 65 !== e.indexOf(']')) return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, y.v)(t) ? t : null;
      }
      function w(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, c.ci)(t);
        let r = e.split('.');
        for (let e = r.length - 1; e >= 0; e -= 1) {
          let n = b(r[e]),
            i = n ? (0, g.O0)(n) : (0, m.w)((0, g.qX)(r[e]), 'bytes');
          t = (0, m.w)((0, p.zo)([t, i]), 'bytes');
        }
        return (0, c.ci)(t);
      }
      function v(e) {
        let t = e.replace(/^\.|\.$/gm, '');
        if (0 === t.length) return new Uint8Array(1);
        let r = new Uint8Array((0, g.qX)(t).byteLength + 2),
          n = 0,
          i = t.split('.');
        for (let e = 0; e < i.length; e++) {
          let t = (0, g.qX)(i[e]);
          t.byteLength > 255 &&
            (t = (0, g.qX)(
              `[${(function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? b(e) || (0, m.w)((0, g.qX)(e)) : (0, c.ci)(t);
              })(i[e]).slice(2)}]`
            )),
            (r[n] = t.length),
            r.set(t, n + 1),
            (n += t.length + 1);
        }
        return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r;
      }
      var A = r(2639);
      function C(e, { abi: t, address: r, args: n, docsPath: i, functionName: s, sender: o }) {
        let { code: a, data: u, message: c, shortMessage: l } = e instanceof h.VQ ? e : e instanceof f.G ? e.walk((e) => 'data' in e) || e.walk() : {},
          d = e;
        return (
          e instanceof A.wb ? (d = new h.Dk({ functionName: s })) : 3 === a && (u || c || l) && (d = new h.Lu({ abi: t, data: 'object' == typeof u ? u.data : u, functionName: s, message: l ?? c })),
          new h.uq(d, { abi: t, args: n, contractAddress: r, docsPath: i, functionName: s, sender: o })
        );
      }
      var E = r(8538);
      async function P(e, { abi: t, address: r, args: n, functionName: i, ...a }) {
        let u = (0, o.R)({ abi: t, args: n, functionName: i });
        try {
          let { data: o } = await (0, E.R)(e, { data: u, to: r, ...a });
          return (0, s.k)({ abi: t, args: n, functionName: i, data: o || '0x' });
        } catch (e) {
          throw C(e, { abi: t, address: r, args: n, docsPath: '/docs/contract/readContract', functionName: i });
        }
      }
      async function I(e, { blockNumber: t, blockTag: r, coinType: n, name: l, universalResolverAddress: f }) {
        let h = f;
        if (!h) {
          if (!e.chain) throw Error('client chain not configured. universalResolverAddress is required.');
          h = (0, a.LI)({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' });
        }
        try {
          let a = (0, o.R)({ abi: i.X$, functionName: 'addr', ...(null != n ? { args: [w(l), BigInt(n)] } : { args: [w(l)] }) }),
            f = await P(e, { address: h, abi: i.k3, functionName: 'resolve', args: [(0, c.NC)(v(l)), a], blockNumber: t, blockTag: r });
          if ('0x' === f[0]) return null;
          let d = (0, u.f)((0, s.k)({ abi: i.X$, args: null != n ? [w(l), BigInt(n)] : void 0, functionName: 'addr', data: f[0] }));
          if ('0x' === d || '0x00' === (0, u.f)(d)) return null;
          return d;
        } catch (e) {
          if (d(e, 'resolve')) return null;
          throw e;
        }
      }
      class O extends f.G {
        constructor({ data: e }) {
          super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: ['- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.', '', `Provided data: ${JSON.stringify(e)}`],
          }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'EnsAvatarInvalidMetadataError' });
        }
      }
      class B extends f.G {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'EnsAvatarInvalidNftUriError' });
        }
      }
      class x extends f.G {
        constructor({ uri: e }) {
          super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'EnsAvatarUriResolutionError' });
        }
      }
      class S extends f.G {
        constructor({ namespace: e }) {
          super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'EnsAvatarUnsupportedNamespaceError' });
        }
      }
      let M = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        R = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        j = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        k = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function U(e) {
        try {
          let t = await fetch(e, { method: 'HEAD' });
          if (200 === t.status) {
            let e = t.headers.get('content-type');
            return e?.startsWith('image/');
          }
          return !1;
        } catch (t) {
          if (('object' == typeof t && void 0 !== t.response) || !globalThis.hasOwnProperty('Image')) return !1;
          return new Promise((t) => {
            let r = new Image();
            (r.onload = () => {
              t(!0);
            }),
              (r.onerror = () => {
                t(!1);
              }),
              (r.src = e);
          });
        }
      }
      function L(e, t) {
        return e ? (e.endsWith('/') ? e.slice(0, -1) : e) : t;
      }
      function D({ uri: e, gatewayUrls: t }) {
        let r = j.test(e);
        if (r) return { uri: e, isOnChain: !0, isEncoded: r };
        let n = L(t?.ipfs, 'https://ipfs.io'),
          i = L(t?.arweave, 'https://arweave.net'),
          s = e.match(M),
          { protocol: o, subpath: a, target: u, subtarget: c = '' } = s?.groups || {},
          l = 'ipns:/' === o || 'ipns/' === a,
          f = 'ipfs:/' === o || 'ipfs/' === a || R.test(e);
        if (e.startsWith('http') && !l && !f) {
          let r = e;
          return t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)), { uri: r, isOnChain: !1, isEncoded: !1 };
        }
        if ((l || f) && u) return { uri: `${n}/${l ? 'ipns' : 'ipfs'}/${u}${c}`, isOnChain: !1, isEncoded: !1 };
        if ('ar:/' === o && u) return { uri: `${i}/${u}${c || ''}`, isOnChain: !1, isEncoded: !1 };
        let h = e.replace(k, '');
        if ((h.startsWith('<svg') && (h = `data:image/svg+xml;base64,${btoa(h)}`), h.startsWith('data:') || h.startsWith('{'))) return { uri: h, isOnChain: !0, isEncoded: !1 };
        throw new x({ uri: e });
      }
      function F(e) {
        if ('object' != typeof e || (!('image' in e) && !('image_url' in e) && !('image_data' in e))) throw new O({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function T({ gatewayUrls: e, uri: t }) {
        try {
          let r = await fetch(t).then((e) => e.json()),
            n = await N({ gatewayUrls: e, uri: F(r) });
          return n;
        } catch {
          throw new x({ uri: t });
        }
      }
      async function N({ gatewayUrls: e, uri: t }) {
        let { uri: r, isOnChain: n } = D({ uri: t, gatewayUrls: e });
        if (n) return r;
        let i = await U(r);
        if (i) return r;
        throw new x({ uri: t });
      }
      async function Q(e, { nft: t }) {
        if ('erc721' === t.namespace)
          return P(e, {
            address: t.contractAddress,
            abi: [{ name: 'tokenURI', type: 'function', stateMutability: 'view', inputs: [{ name: 'tokenId', type: 'uint256' }], outputs: [{ name: '', type: 'string' }] }],
            functionName: 'tokenURI',
            args: [BigInt(t.tokenID)],
          });
        if ('erc1155' === t.namespace)
          return P(e, {
            address: t.contractAddress,
            abi: [{ name: 'uri', type: 'function', stateMutability: 'view', inputs: [{ name: '_id', type: 'uint256' }], outputs: [{ name: '', type: 'string' }] }],
            functionName: 'uri',
            args: [BigInt(t.tokenID)],
          });
        throw new S({ namespace: t.namespace });
      }
      async function q(e, { gatewayUrls: t, record: r }) {
        return /eip155:/i.test(r) ? G(e, { gatewayUrls: t, record: r }) : N({ uri: r, gatewayUrls: t });
      }
      async function G(e, { gatewayUrls: t, record: r }) {
        let n = (function (e) {
            let t = e;
            t.startsWith('did:nft:') && (t = t.replace('did:nft:', '').replace(/_/g, '/'));
            let [r, n, i] = t.split('/'),
              [s, o] = r.split(':'),
              [a, u] = n.split(':');
            if (!s || 'eip155' !== s.toLowerCase()) throw new B({ reason: 'Only EIP-155 supported' });
            if (!o) throw new B({ reason: 'Chain ID not found' });
            if (!u) throw new B({ reason: 'Contract address not found' });
            if (!i) throw new B({ reason: 'Token ID not found' });
            if (!a) throw new B({ reason: 'ERC namespace not found' });
            return { chainID: parseInt(o), namespace: a.toLowerCase(), contractAddress: u, tokenID: i };
          })(r),
          i = await Q(e, { nft: n }),
          { uri: s, isOnChain: o, isEncoded: a } = D({ uri: i, gatewayUrls: t });
        if (o && (s.includes('data:application/json;base64,') || s.startsWith('{'))) {
          let e = a ? atob(s.replace('data:application/json;base64,', '')) : s,
            r = JSON.parse(e);
          return N({ uri: F(r), gatewayUrls: t });
        }
        let u = n.tokenID;
        return 'erc1155' === n.namespace && (u = u.replace('0x', '').padStart(64, '0')), T({ gatewayUrls: t, uri: s.replace(/(?:0x)?{id}/, u) });
      }
      async function z(e, { blockNumber: t, blockTag: r, name: n, key: u, universalResolverAddress: l }) {
        let f = l;
        if (!f) {
          if (!e.chain) throw Error('client chain not configured. universalResolverAddress is required.');
          f = (0, a.LI)({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' });
        }
        try {
          let a = await P(e, { address: f, abi: i.k3, functionName: 'resolve', args: [(0, c.NC)(v(n)), (0, o.R)({ abi: i.nZ, functionName: 'text', args: [w(n), u] })], blockNumber: t, blockTag: r });
          if ('0x' === a[0]) return null;
          let l = (0, s.k)({ abi: i.nZ, functionName: 'text', data: a[0] });
          return '' === l ? null : l;
        } catch (e) {
          if (d(e, 'resolve')) return null;
          throw e;
        }
      }
      async function W(e, { blockNumber: t, blockTag: r, gatewayUrls: n, name: i, universalResolverAddress: s }) {
        let o = await z(e, { blockNumber: t, blockTag: r, key: 'avatar', name: i, universalResolverAddress: s });
        if (!o) return null;
        try {
          return await q(e, { record: o, gatewayUrls: n });
        } catch {
          return null;
        }
      }
      async function K(e, { address: t, blockNumber: r, blockTag: n, universalResolverAddress: s }) {
        let o = s;
        if (!o) {
          if (!e.chain) throw Error('client chain not configured. universalResolverAddress is required.');
          o = (0, a.LI)({ blockNumber: r, chain: e.chain, contract: 'ensUniversalResolver' });
        }
        let u = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let t = await P(e, { address: o, abi: i.du, functionName: 'reverse', args: [(0, c.NC)(v(u))], blockNumber: r, blockTag: n });
          return t[0];
        } catch (e) {
          if (d(e, 'reverse')) return null;
          throw e;
        }
      }
      async function H(e, { blockNumber: t, blockTag: r, name: n, universalResolverAddress: i }) {
        let s = i;
        if (!s) {
          if (!e.chain) throw Error('client chain not configured. universalResolverAddress is required.');
          s = (0, a.LI)({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' });
        }
        let [o] = await P(e, {
          address: s,
          abi: [{ inputs: [{ type: 'bytes' }], name: 'findResolver', outputs: [{ type: 'address' }, { type: 'bytes32' }], stateMutability: 'view', type: 'function' }],
          functionName: 'findResolver',
          args: [(0, c.NC)(v(n))],
          blockNumber: t,
          blockTag: r,
        });
        return o;
      }
      function J(e, { method: t }) {
        let r = {};
        return (
          'fallback' === e.transport.type &&
            e.transport.onResponse?.(({ method: e, response: n, status: i, transport: s }) => {
              'success' === i && t === e && (r[n] = s.request);
            }),
          (t) => r[t] || e.request
        );
      }
      async function V(e) {
        let t = J(e, { method: 'eth_newBlockFilter' }),
          r = await e.request({ method: 'eth_newBlockFilter' });
        return { id: r, request: t(r), type: 'block' };
      }
      class Y extends f.G {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'FilterTypeNotSupportedError' });
        }
      }
      var Z = r(8598);
      let X = (e) => ('string' == typeof e ? (0, Z.F)(e) : (0, Z.J)(e));
      var $ = r(5040),
        _ = r(8054),
        ee = r(6142);
      function et({ abi: e, eventName: t, args: r }) {
        let n = e[0];
        if (t && !(n = (0, ee.m)({ abi: e, args: r, name: t }))) throw new A.mv(t, { docsPath: '/docs/contract/encodeEventTopics' });
        if ('event' !== n.type) throw new A.mv(void 0, { docsPath: '/docs/contract/encodeEventTopics' });
        let i = (0, _.t)(n),
          s = X(i),
          o = [];
        if (r && 'inputs' in n) {
          let e = n.inputs?.filter((e) => 'indexed' in e && e.indexed),
            t = Array.isArray(r) ? r : Object.values(r).length > 0 ? e?.map((e) => r[e.name]) ?? [] : [];
          t.length > 0 && (o = e?.map((e, r) => (Array.isArray(t[r]) ? t[r].map((n, i) => er({ param: e, value: t[r][i] })) : t[r] ? er({ param: e, value: t[r] }) : null)) ?? []);
        }
        return [s, ...o];
      }
      function er({ param: e, value: t }) {
        if ('string' === e.type || 'bytes' === e.type) return (0, m.w)((0, g.O0)(t));
        if ('tuple' === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new Y(e.type);
        return (0, $.E)([e], [t]);
      }
      async function en(e, { address: t, abi: r, args: n, eventName: i, fromBlock: s, strict: o, toBlock: a }) {
        let u = J(e, { method: 'eth_newFilter' }),
          l = i ? et({ abi: r, args: n, eventName: i }) : void 0,
          f = await e.request({ method: 'eth_newFilter', params: [{ address: t, fromBlock: 'bigint' == typeof s ? (0, c.eC)(s) : s, toBlock: 'bigint' == typeof a ? (0, c.eC)(a) : a, topics: l }] });
        return { abi: r, args: n, eventName: i, id: f, request: u(f), strict: o, type: 'event' };
      }
      async function ei(e, { address: t, args: r, event: n, events: i, fromBlock: s, strict: o, toBlock: a } = {}) {
        let u = i ?? (n ? [n] : void 0),
          l = J(e, { method: 'eth_newFilter' }),
          f = [];
        u && ((f = [u.flatMap((e) => et({ abi: [e], eventName: e.name, args: r }))]), n && (f = f[0]));
        let h = await e.request({ method: 'eth_newFilter', params: [{ address: t, fromBlock: 'bigint' == typeof s ? (0, c.eC)(s) : s, toBlock: 'bigint' == typeof a ? (0, c.eC)(a) : a, ...(f.length ? { topics: f } : {}) }] });
        return { abi: u, args: r, eventName: n ? n.name : void 0, fromBlock: s, id: h, request: l(h), strict: o, toBlock: a, type: 'event' };
      }
      async function es(e) {
        let t = J(e, { method: 'eth_newPendingTransactionFilter' }),
          r = await e.request({ method: 'eth_newPendingTransactionFilter' });
        return { id: r, request: t(r), type: 'transaction' };
      }
      var eo = r(2076),
        ea = r(9396);
      async function eu(e, { abi: t, address: r, args: n, functionName: i, ...s }) {
        let a = (0, o.R)({ abi: t, args: n, functionName: i });
        try {
          let t = await (0, ea.Q)(e, { data: a, to: r, ...s });
          return t;
        } catch (o) {
          let e = s.account ? (0, eo.T)(s.account) : void 0;
          throw C(o, { abi: t, address: r, args: n, docsPath: '/docs/contract/simulateContract', functionName: i, sender: e?.address });
        }
      }
      async function ec(e, { address: t, blockNumber: r, blockTag: n = 'latest' }) {
        let i = r ? (0, c.eC)(r) : void 0,
          s = await e.request({ method: 'eth_getBalance', params: [t, i || n] });
        return BigInt(s);
      }
      var el = r(3582);
      let ef = new Map(),
        eh = new Map();
      async function ed(e, { cacheKey: t, cacheTime: r = 1 / 0 }) {
        let n = (function (e) {
            let t = (e, t) => ({ clear: () => t.delete(e), get: () => t.get(e), set: (r) => t.set(e, r) }),
              r = t(e, ef),
              n = t(e, eh);
            return {
              clear: () => {
                r.clear(), n.clear();
              },
              promise: r,
              response: n,
            };
          })(t),
          i = n.response.get();
        if (i && r > 0) {
          let e = new Date().getTime() - i.created.getTime();
          if (e < r) return i.data;
        }
        let s = n.promise.get();
        s || ((s = e()), n.promise.set(s));
        try {
          let e = await s;
          return n.response.set({ created: new Date(), data: e }), e;
        } finally {
          n.promise.clear();
        }
      }
      let ep = (e) => `blockNumber.${e}`;
      async function eg(e, { cacheTime: t = e.cacheTime, maxAge: r } = {}) {
        let n = await ed(() => e.request({ method: 'eth_blockNumber' }), { cacheKey: ep(e.uid), cacheTime: r ?? t });
        return BigInt(n);
      }
      var em = r(8405);
      async function ey(e, { blockHash: t, blockNumber: r, blockTag: n = 'latest' } = {}) {
        let i;
        let s = void 0 !== r ? (0, c.eC)(r) : void 0;
        return (i = t ? await e.request({ method: 'eth_getBlockTransactionCountByHash', params: [t] }) : await e.request({ method: 'eth_getBlockTransactionCountByNumber', params: [s || n] })), (0, em.ly)(i);
      }
      async function eb(e, { address: t, blockNumber: r, blockTag: n = 'latest' }) {
        let i = void 0 !== r ? (0, c.eC)(r) : void 0,
          s = await e.request({ method: 'eth_getCode', params: [t, i || n] });
        if ('0x' !== s) return s;
      }
      var ew = r(9821);
      async function ev(e, { blockCount: t, blockNumber: r, blockTag: n = 'latest', rewardPercentiles: i }) {
        let s = r ? (0, c.eC)(r) : void 0,
          o = await e.request({ method: 'eth_feeHistory', params: [(0, c.eC)(t), s || n, i] });
        return { baseFeePerGas: o.baseFeePerGas.map((e) => BigInt(e)), gasUsedRatio: o.gasUsedRatio, oldestBlock: BigInt(o.oldestBlock), reward: o.reward?.map((e) => e.map((e) => BigInt(e))) };
      }
      var eA = r(9866);
      let eC = '/docs/contract/decodeEventLog';
      function eE({ abi: e, data: t, strict: r, topics: n }) {
        let i = r ?? !0,
          [s, ...o] = n;
        if (!s) throw new A.FM({ docsPath: eC });
        let a = e.find((e) => 'event' === e.type && s === X((0, _.t)(e)));
        if (!(a && 'name' in a) || 'event' !== a.type) throw new A.lC(s, { docsPath: eC });
        let { name: u, inputs: c } = a,
          l = c?.some((e) => !('name' in e && e.name)),
          f = l ? [] : {},
          h = c.filter((e) => 'indexed' in e && e.indexed);
        if (o.length > 0)
          for (let e = 0; e < h.length; e++) {
            let t = h[e],
              r = o[e];
            if (!r) throw new A.Gy({ abiItem: a, param: t });
            f[t.name || e] = (function ({ param: e, value: t }) {
              if ('string' === e.type || 'bytes' === e.type || 'tuple' === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) return t;
              let r = (0, eA.r)([e], t) || [];
              return r[0];
            })({ param: t, value: r });
          }
        let d = c.filter((e) => !('indexed' in e && e.indexed));
        if (d.length > 0) {
          if (t && '0x' !== t)
            try {
              let e = (0, eA.r)(d, t);
              if (e) {
                if (l) f = [...f, ...e];
                else for (let t = 0; t < d.length; t++) f[d[t].name] = e[t];
              }
            } catch (e) {
              if (i) {
                if (e instanceof A.xB) throw new A.SM({ abiItem: a, data: e.data, params: e.params, size: e.size });
                throw e;
              }
            }
          else if (i) throw new A.SM({ abiItem: a, data: '0x', params: d, size: 0 });
        }
        return { eventName: u, args: Object.values(f).length > 0 ? f : void 0 };
      }
      var eP = r(2776);
      async function eI(e, { filter: t }) {
        let r = 'strict' in t && t.strict,
          n = await t.request({ method: 'eth_getFilterChanges', params: [t.id] });
        return n
          .map((e) => {
            if ('string' == typeof e) return e;
            try {
              let { eventName: n, args: i } = 'abi' in t && t.abi ? eE({ abi: t.abi, data: e.data, topics: e.topics, strict: r }) : { eventName: void 0, args: void 0 };
              return (0, eP.U)(e, { args: i, eventName: n });
            } catch (i) {
              let r, n;
              if (i instanceof A.SM || i instanceof A.Gy) {
                if ('strict' in t && t.strict) return;
                (r = i.abiItem.name), (n = i.abiItem.inputs?.some((e) => !('name' in e && e.name)));
              }
              return (0, eP.U)(e, { args: n ? [] : {}, eventName: r });
            }
          })
          .filter(Boolean);
      }
      async function eO(e, { filter: t }) {
        let r = t.strict ?? !1,
          n = await t.request({ method: 'eth_getFilterLogs', params: [t.id] });
        return n
          .map((e) => {
            try {
              let { eventName: n, args: i } = 'abi' in t && t.abi ? eE({ abi: t.abi, data: e.data, topics: e.topics, strict: r }) : { eventName: void 0, args: void 0 };
              return (0, eP.U)(e, { args: i, eventName: n });
            } catch (i) {
              let r, n;
              if (i instanceof A.SM || i instanceof A.Gy) {
                if ('strict' in t && t.strict) return;
                (r = i.abiItem.name), (n = i.abiItem.inputs?.some((e) => !('name' in e && e.name)));
              }
              return (0, eP.U)(e, { args: n ? [] : {}, eventName: r });
            }
          })
          .filter(Boolean);
      }
      var eB = r(8141);
      async function ex(e, { address: t, blockHash: r, fromBlock: n, toBlock: i, event: s, events: o, args: a, strict: u } = {}) {
        let l = u ?? !1,
          f = o ?? (s ? [s] : void 0),
          h = [];
        return (
          f && ((h = [f.flatMap((e) => et({ abi: [e], eventName: e.name, args: a }))]), s && (h = h[0])),
          (r
            ? await e.request({ method: 'eth_getLogs', params: [{ address: t, topics: h, blockHash: r }] })
            : await e.request({ method: 'eth_getLogs', params: [{ address: t, topics: h, fromBlock: 'bigint' == typeof n ? (0, c.eC)(n) : n, toBlock: 'bigint' == typeof i ? (0, c.eC)(i) : i }] })
          )
            .map((e) => {
              try {
                let { eventName: t, args: r } = f ? eE({ abi: f, data: e.data, topics: e.topics, strict: l }) : { eventName: void 0, args: void 0 };
                return (0, eP.U)(e, { args: r, eventName: t });
              } catch (n) {
                let t, r;
                if (n instanceof A.SM || n instanceof A.Gy) {
                  if (l) return;
                  (t = n.abiItem.name), (r = n.abiItem.inputs?.some((e) => !('name' in e && e.name)));
                }
                return (0, eP.U)(e, { args: r ? [] : {}, eventName: t });
              }
            })
            .filter(Boolean)
        );
      }
      async function eS(e, { address: t, blockNumber: r, blockTag: n = 'latest', slot: i }) {
        let s = void 0 !== r ? (0, c.eC)(r) : void 0,
          o = await e.request({ method: 'eth_getStorageAt', params: [t, i, s || n] });
        return o;
      }
      var eM = r(7240),
        eR = r(7303);
      async function ej(e, { blockHash: t, blockNumber: r, blockTag: n, hash: i, index: s }) {
        let o = n || 'latest',
          a = void 0 !== r ? (0, c.eC)(r) : void 0,
          u = null;
        if (
          (i
            ? (u = await e.request({ method: 'eth_getTransactionByHash', params: [i] }))
            : t
            ? (u = await e.request({ method: 'eth_getTransactionByBlockHashAndIndex', params: [t, (0, c.eC)(s)] }))
            : (a || o) && (u = await e.request({ method: 'eth_getTransactionByBlockNumberAndIndex', params: [a || o, (0, c.eC)(s)] })),
          !u)
        )
          throw new eM.Bh({ blockHash: t, blockNumber: r, blockTag: o, hash: i, index: s });
        let l = e.chain?.formatters?.transaction?.format || eR.Tr;
        return l(u);
      }
      async function ek(e, { hash: t, transactionReceipt: r }) {
        let [n, i] = await Promise.all([eg(e), t ? ej(e, { hash: t }) : void 0]),
          s = r?.blockNumber || i?.blockNumber;
        return s ? n - s + 1n : 0n;
      }
      var eU = r(2114),
        eL = r(6361);
      async function eD(e, { hash: t }) {
        let r = await e.request({ method: 'eth_getTransactionReceipt', params: [t] });
        if (!r) throw new eM.Yb({ hash: t });
        let n = e.chain?.formatters?.transactionReceipt?.format || eL.f;
        return n(r);
      }
      async function eF(e, t) {
        let { allowFailure: r = !0, batchSize: n, blockNumber: u, blockTag: c, contracts: l, multicallAddress: f } = t,
          d = n ?? (('object' == typeof e.batch?.multicall && e.batch.multicall.batchSize) || 1024),
          p = f;
        if (!p) {
          if (!e.chain) throw Error('client chain not configured. multicallAddress is required.');
          p = (0, a.LI)({ blockNumber: u, chain: e.chain, contract: 'multicall3' });
        }
        let g = [[]],
          m = 0,
          y = 0;
        for (let e = 0; e < l.length; e++) {
          let { abi: t, address: n, args: i, functionName: s } = l[e];
          try {
            let e = (0, o.R)({ abi: t, args: i, functionName: s });
            (y += e.length), d > 0 && y > d && (m++, (y = (e.length - 2) / 2), (g[m] = [])), (g[m] = [...g[m], { allowFailure: !0, callData: e, target: n }]);
          } catch (o) {
            let e = C(o, { abi: t, address: n, args: i, docsPath: '/docs/contract/multicall', functionName: s });
            if (!r) throw e;
            g[m] = [...g[m], { allowFailure: !0, callData: '0x', target: n }];
          }
        }
        let b = await Promise.all(g.map((t) => P(e, { abi: i.F8, address: p, args: [t], blockNumber: u, blockTag: c, functionName: 'aggregate3' })));
        return b.flat().map(({ returnData: e, success: t }, n) => {
          let i = g.flat(),
            { callData: o } = i[n],
            { abi: a, address: u, functionName: c, args: f } = l[n];
          try {
            if ('0x' === o) throw new A.wb();
            if (!t) throw new h.VQ({ data: e });
            let n = (0, s.k)({ abi: a, args: f, data: e, functionName: c });
            return r ? { result: n, status: 'success' } : n;
          } catch (t) {
            let e = C(t, { abi: a, address: u, args: f, docsPath: '/docs/contract/multicall', functionName: c });
            if (!r) throw e;
            return { error: e, result: void 0, status: 'failure' };
          }
        });
      }
      async function eT(e, { abi: t, address: r, args: n, dataSuffix: i, functionName: a, ...u }) {
        let c = u.account ? (0, eo.T)(u.account) : void 0,
          l = (0, o.R)({ abi: t, args: n, functionName: a });
        try {
          let { data: o } = await (0, E.R)(e, { batch: !1, data: `${l}${i ? i.replace('0x', '') : ''}`, to: r, ...u }),
            c = (0, s.k)({ abi: t, args: n, functionName: a, data: o || '0x' });
          return { result: c, request: { abi: t, address: r, args: n, dataSuffix: i, functionName: a, ...u } };
        } catch (e) {
          throw C(e, { abi: t, address: r, args: n, docsPath: '/docs/contract/simulateContract', functionName: a, sender: c?.address });
        }
      }
      async function eN(e, { filter: t }) {
        return t.request({ method: 'eth_uninstallFilter', params: [t.id] });
      }
      BigInt(0), BigInt(1), BigInt(2), Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      var eQ = r(8099);
      async function eq(e, { address: t, hash: r, signature: n, ...s }) {
        let o = (0, y.v)(n) ? n : (0, c.NC)(n);
        try {
          let { data: n } = await (0, E.R)(e, {
            data: (0, eQ.w)({
              abi: i.$o,
              args: [t, r, o],
              bytecode:
                '0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572',
            }),
            ...s,
          });
          return (function (e, t) {
            let r = (0, y.v)(e) ? (0, g.O0)(e) : e,
              n = (0, y.v)(t) ? (0, g.O0)(t) : t;
            return (function (e, t) {
              if (e.length !== t.length) return !1;
              for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
              return !0;
            })(r, n);
          })(n ?? '0x0', '0x1');
        } catch (e) {
          if (e instanceof h.cg) return !1;
          throw e;
        }
      }
      async function eG(e, { address: t, message: r, signature: n, ...i }) {
        let s = (function (e, t) {
          let r = 'string' == typeof e ? (0, g.qX)(e) : e.raw instanceof Uint8Array ? e.raw : (0, g.O0)(e.raw),
            n = (0, g.qX)(`\x19Ethereum Signed Message:
${r.length}`);
          return (0, m.w)((0, p.zo)([n, r]), void 0);
        })(r);
        return eq(e, { address: t, hash: s, signature: n, ...i });
      }
      var ez = r(1748);
      function eW({ data: e, primaryType: t, types: r }) {
        let n = (function e({ data: t, primaryType: r, types: n }) {
          let i = [{ type: 'bytes32' }],
            s = [
              (function ({ primaryType: e, types: t }) {
                let r = (0, c.NC)(
                  (function ({ primaryType: e, types: t }) {
                    let r = '',
                      n = (function e({ primaryType: t, types: r }, n = new Set()) {
                        let i = t.match(/^\w*/u),
                          s = i?.[0];
                        if (n.has(s) || void 0 === r[s]) return n;
                        for (let t of (n.add(s), r[s])) e({ primaryType: t.type, types: r }, n);
                        return n;
                      })({ primaryType: e, types: t });
                    n.delete(e);
                    let i = [e, ...Array.from(n).sort()];
                    for (let e of i) r += `${e}(${t[e].map(({ name: e, type: t }) => `${t} ${e}`).join(',')})`;
                    return r;
                  })({ primaryType: e, types: t })
                );
                return (0, m.w)(r);
              })({ primaryType: r, types: n }),
            ];
          for (let o of n[r]) {
            let [r, a] = (function t({ types: r, name: n, type: i, value: s }) {
              if (void 0 !== r[i]) return [{ type: 'bytes32' }, (0, m.w)(e({ data: s, primaryType: i, types: r }))];
              if ('bytes' === i) {
                let e = s.length % 2 ? '0' : '';
                return (s = `0x${e + s.slice(2)}`), [{ type: 'bytes32' }, (0, m.w)(s)];
              }
              if ('string' === i) return [{ type: 'bytes32' }, (0, m.w)((0, c.NC)(s))];
              if (i.lastIndexOf(']') === i.length - 1) {
                let e = i.slice(0, i.lastIndexOf('[')),
                  o = s.map((i) => t({ name: n, type: e, types: r, value: i }));
                return [
                  { type: 'bytes32' },
                  (0, m.w)(
                    (0, $.E)(
                      o.map(([e]) => e),
                      o.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: i }, s];
            })({ types: n, name: o.name, type: o.type, value: t[o.name] });
            i.push(r), s.push(a);
          }
          return (0, $.E)(i, s);
        })({ data: e, primaryType: t, types: r });
        return (0, m.w)(n);
      }
      async function eK(e, { address: t, signature: r, message: n, primaryType: i, types: s, domain: o, ...a }) {
        let u = (function ({ domain: e, message: t, primaryType: r, types: n }) {
          let i = void 0 === e ? {} : e,
            s = {
              EIP712Domain: [
                'string' == typeof i?.name && { name: 'name', type: 'string' },
                i?.version && { name: 'version', type: 'string' },
                'number' == typeof i?.chainId && { name: 'chainId', type: 'uint256' },
                i?.verifyingContract && { name: 'verifyingContract', type: 'address' },
                i?.salt && { name: 'salt', type: 'bytes32' },
              ].filter(Boolean),
              ...n,
            };
          (0, ez.i)({ domain: i, message: t, primaryType: r, types: s });
          let o = ['0x1901'];
          return (
            i &&
              o.push(
                (function ({ domain: e, types: t }) {
                  return eW({ data: e, primaryType: 'EIP712Domain', types: t });
                })({ domain: i, types: s })
              ),
            'EIP712Domain' !== r && o.push(eW({ data: t, primaryType: r, types: s })),
            (0, m.w)((0, p.zo)(o))
          );
        })({ message: n, primaryType: i, types: s, domain: o });
        return eq(e, { address: t, hash: u, signature: r, ...a });
      }
      let eH = new Map(),
        eJ = new Map(),
        eV = 0;
      function eY(e, t, r) {
        let n = ++eV,
          i = () => eH.get(e) || [],
          s = () => {
            let t = i();
            eH.set(
              e,
              t.filter((e) => e.id !== n)
            );
          },
          o = () => {
            let t = eJ.get(e);
            1 === i().length && t && t(), s();
          },
          a = i();
        if ((eH.set(e, [...a, { id: n, fns: t }]), a && a.length > 0)) return o;
        let u = {};
        for (let e in t)
          u[e] = (...t) => {
            let r = i();
            0 !== r.length && r.forEach((r) => r.fns[e]?.(...t));
          };
        let c = r(u);
        return 'function' == typeof c && eJ.set(e, c), o;
      }
      var eZ = r(788),
        eX = r(2493),
        e$ = r(4275);
      function e_(e, { emitOnBegin: t, initialWaitTime: r, interval: n }) {
        let i = !0,
          s = () => (i = !1),
          o = async () => {
            let o;
            t && (o = await e({ unpoll: s }));
            let a = (await r?.(o)) ?? n;
            await (0, e$.D)(a);
            let u = async () => {
              i && (await e({ unpoll: s }), await (0, e$.D)(n), u());
            };
            u();
          };
        return o(), s;
      }
      function e0(e, { emitOnBegin: t = !1, emitMissed: r = !1, onBlockNumber: n, onError: i, poll: s, pollingInterval: o = e.pollingInterval }) {
        let a, u, c;
        let l = void 0 !== s ? s : 'webSocket' !== e.transport.type;
        return l
          ? (() => {
              let s = (0, eX.P)(['watchBlockNumber', e.uid, t, r, o]);
              return eY(s, { onBlockNumber: n, onError: i }, (n) =>
                e_(
                  async () => {
                    try {
                      let t = await eg(e, { cacheTime: 0 });
                      if (a) {
                        if (t === a) return;
                        if (t - a > 1 && r) for (let e = a + 1n; e < t; e++) n.onBlockNumber(e, a), (a = e);
                      }
                      (!a || t > a) && (n.onBlockNumber(t, a), (a = t));
                    } catch (e) {
                      n.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: o }
                )
              );
            })()
          : ((u = !0),
            (c = () => (u = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ['newHeads'],
                  onData(e) {
                    if (!u) return;
                    let t = (0, em.y_)(e.result?.number);
                    n(t, a), (a = t);
                  },
                  onError(e) {
                    i?.(e);
                  },
                });
                (c = t), u || c();
              } catch (e) {
                i?.(e);
              }
            })(),
            c);
      }
      async function e1(e, { confirmations: t = 1, hash: r, onReplaced: n, pollingInterval: i = e.pollingInterval, timeout: s }) {
        let o, a, u;
        let c = (0, eX.P)(['waitForTransactionReceipt', e.uid, r]),
          l = !1;
        return new Promise((f, h) => {
          s && setTimeout(() => h(new eM.mc({ hash: r })), s);
          let d = eY(c, { onReplaced: n, resolve: f, reject: h }, (n) => {
            let s = e0(e, {
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: i,
              async onBlockNumber(i) {
                if (l) return;
                let c = i,
                  f = (e) => {
                    s(), e(), d();
                  };
                try {
                  if (u) {
                    if (c - u.blockNumber + 1n < t) return;
                    f(() => n.resolve(u));
                    return;
                  }
                  if (
                    (o ||
                      ((l = !0),
                      await (0, eZ.J)(
                        async () => {
                          (o = await ej(e, { hash: r })).blockNumber && (c = o.blockNumber);
                        },
                        { delay: ({ count: e }) => 200 * ~~(1 << e), retryCount: 6 }
                      ),
                      (l = !1)),
                    (u = await eD(e, { hash: r })),
                    t > 0 && c - u.blockNumber + 1n < t)
                  )
                    return;
                  f(() => n.resolve(u));
                } catch (r) {
                  if (o && (r instanceof eM.Bh || r instanceof eM.Yb)) {
                    a = o;
                    let r = await (0, el.Q)(e, { blockNumber: c, includeTransactions: !0 }),
                      i = r.transactions.find(({ from: e, nonce: t }) => e === a.from && t === a.nonce);
                    if (!i || c - (u = await eD(e, { hash: i.hash })).blockNumber + 1n < t) return;
                    let s = 'replaced';
                    i.to === a.to && i.value === a.value ? (s = 'repriced') : i.from === i.to && 0n === i.value && (s = 'cancelled'),
                      f(() => {
                        n.onReplaced?.({ reason: s, replacedTransaction: a, transaction: i, transactionReceipt: u }), n.resolve(u);
                      });
                  } else f(() => n.reject(r));
                }
              },
            });
          });
        });
      }
      var e2 = r(4412),
        e6 = r(7224);
      function e5(e) {
        return {
          call: (t) => (0, E.R)(e, t),
          createBlockFilter: () => V(e),
          createContractEventFilter: (t) => en(e, t),
          createEventFilter: (t) => ei(e, t),
          createPendingTransactionFilter: () => es(e),
          estimateContractGas: (t) => eu(e, t),
          estimateGas: (t) => (0, ea.Q)(e, t),
          getBalance: (t) => ec(e, t),
          getBlock: (t) => (0, el.Q)(e, t),
          getBlockNumber: (t) => eg(e, t),
          getBlockTransactionCount: (t) => ey(e, t),
          getBytecode: (t) => eb(e, t),
          getChainId: () => (0, ew.L)(e),
          getEnsAddress: (t) => I(e, t),
          getEnsAvatar: (t) => W(e, t),
          getEnsName: (t) => K(e, t),
          getEnsResolver: (t) => H(e, t),
          getEnsText: (t) => z(e, t),
          getFeeHistory: (t) => ev(e, t),
          getFilterChanges: (t) => eI(e, t),
          getFilterLogs: (t) => eO(e, t),
          getGasPrice: () => (0, eB.o)(e),
          getLogs: (t) => ex(e, t),
          getStorageAt: (t) => eS(e, t),
          getTransaction: (t) => ej(e, t),
          getTransactionConfirmations: (t) => ek(e, t),
          getTransactionCount: (t) => (0, eU.K)(e, t),
          getTransactionReceipt: (t) => eD(e, t),
          multicall: (t) => eF(e, t),
          readContract: (t) => P(e, t),
          simulateContract: (t) => eT(e, t),
          verifyMessage: (t) => eG(e, t),
          verifyTypedData: (t) => eK(e, t),
          uninstallFilter: (t) => eN(e, t),
          waitForTransactionReceipt: (t) => e1(e, t),
          watchBlocks: (t) =>
            (function (e, { blockTag: t = 'latest', emitMissed: r = !1, emitOnBegin: n = !1, onBlock: i, onError: s, includeTransactions: o, poll: a, pollingInterval: u = e.pollingInterval }) {
              let c, l, f;
              let h = void 0 !== a ? a : 'webSocket' !== e.transport.type,
                d = o ?? !1;
              return h
                ? (() => {
                    let o = (0, eX.P)(['watchBlocks', e.uid, r, n, d, u]);
                    return eY(o, { onBlock: i, onError: s }, (i) =>
                      e_(
                        async () => {
                          try {
                            let n = await (0, el.Q)(e, { blockTag: t, includeTransactions: d });
                            if (n.number && c?.number) {
                              if (n.number === c.number) return;
                              if (n.number - c.number > 1 && r)
                                for (let t = c?.number + 1n; t < n.number; t++) {
                                  let r = await (0, el.Q)(e, { blockNumber: t, includeTransactions: d });
                                  i.onBlock(r, c), (c = r);
                                }
                            }
                            (!c?.number || ('pending' === t && !n?.number) || (n.number && n.number > c.number)) && (i.onBlock(n, c), (c = n));
                          } catch (e) {
                            i.onError?.(e);
                          }
                        },
                        { emitOnBegin: n, interval: u }
                      )
                    );
                  })()
                : ((l = !0),
                  (f = () => (l = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ['newHeads'],
                        onData(t) {
                          if (!l) return;
                          let r = e.chain?.formatters?.block?.format || e2.Z,
                            n = r(t.result);
                          i(n, c), (c = n);
                        },
                        onError(e) {
                          s?.(e);
                        },
                      });
                      (f = t), l || f();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  f);
            })(e, t),
          watchBlockNumber: (t) => e0(e, t),
          watchContractEvent: (t) =>
            (function (e, { abi: t, address: r, args: n, batch: i = !0, eventName: s, onError: o, onLogs: a, pollingInterval: u = e.pollingInterval, strict: c }) {
              let l = (0, eX.P)(['watchContractEvent', r, n, i, e.uid, s, u]),
                f = c ?? !1;
              return eY(l, { onLogs: a, onError: o }, (o) => {
                let a, c;
                let l = !1,
                  h = e_(
                    async () => {
                      if (!l) {
                        try {
                          c = await en(e, { abi: t, address: r, args: n, eventName: s, strict: f });
                        } catch {}
                        l = !0;
                        return;
                      }
                      try {
                        let u;
                        if (c) u = await eI(e, { filter: c });
                        else {
                          let i = await eg(e);
                          (u = a && a !== i ? await ex(e, { address: r, args: n, fromBlock: a + 1n, toBlock: i, event: (0, ee.m)({ abi: t, name: s }) }) : []), (a = i);
                        }
                        if (0 === u.length) return;
                        i ? o.onLogs(u) : u.forEach((e) => o.onLogs([e]));
                      } catch (e) {
                        c && e instanceof e6.yR && (l = !1), o.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: u }
                  );
                return async () => {
                  c && (await eN(e, { filter: c })), h();
                };
              });
            })(e, t),
          watchEvent: (t) =>
            (function (e, { address: t, args: r, batch: n = !0, event: i, events: s, onError: o, onLogs: a, pollingInterval: u = e.pollingInterval, strict: c }) {
              let l = (0, eX.P)(['watchEvent', t, r, n, e.uid, i, u]),
                f = c ?? !1;
              return eY(l, { onLogs: a, onError: o }, (o) => {
                let a, c;
                let l = !1,
                  h = e_(
                    async () => {
                      if (!l) {
                        try {
                          c = await ei(e, { address: t, args: r, event: i, events: s, strict: f });
                        } catch {}
                        l = !0;
                        return;
                      }
                      try {
                        let u;
                        if (c) u = await eI(e, { filter: c });
                        else {
                          let n = await eg(e);
                          (u = a && a !== n ? await ex(e, { address: t, args: r, event: i, events: s, fromBlock: a + 1n, toBlock: n }) : []), (a = n);
                        }
                        if (0 === u.length) return;
                        n ? o.onLogs(u) : u.forEach((e) => o.onLogs([e]));
                      } catch (e) {
                        c && e instanceof e6.yR && (l = !1), o.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: u }
                  );
                return async () => {
                  c && (await eN(e, { filter: c })), h();
                };
              });
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (e, { batch: t = !0, onError: r, onTransactions: n, poll: i, pollingInterval: s = e.pollingInterval }) {
              let o, a;
              let u = void 0 !== i ? i : 'webSocket' !== e.transport.type;
              return u
                ? (() => {
                    let i = (0, eX.P)(['watchPendingTransactions', e.uid, t, s]);
                    return eY(i, { onTransactions: n, onError: r }, (r) => {
                      let n;
                      let i = e_(
                        async () => {
                          try {
                            if (!n)
                              try {
                                n = await es(e);
                                return;
                              } catch (e) {
                                throw (i(), e);
                              }
                            let s = await eI(e, { filter: n });
                            if (0 === s.length) return;
                            t ? r.onTransactions(s) : s.forEach((e) => r.onTransactions([e]));
                          } catch (e) {
                            r.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: s }
                      );
                      return async () => {
                        n && (await eN(e, { filter: n })), i();
                      };
                    });
                  })()
                : ((o = !0),
                  (a = () => (o = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ['newPendingTransactions'],
                        onData(e) {
                          if (!o) return;
                          let t = e.result;
                          n([t]);
                        },
                        onError(e) {
                          r?.(e);
                        },
                      });
                      (a = t), o || a();
                    } catch (e) {
                      r?.(e);
                    }
                  })(),
                  a);
            })(e, t),
        };
      }
      function e8(e) {
        let { key: t = 'public', name: r = 'Public Client' } = e,
          i = (0, n.e)({ ...e, key: t, name: r, type: 'publicClient' });
        return i.extend(e5);
      }
    },
    1179: function (e, t, r) {
      'use strict';
      r.d(t, {
        K: function () {
          return k;
        },
      });
      var n = r(6561),
        i = r(9821),
        s = r(471);
      async function o(e, { chain: t }) {
        let { id: r, name: n, nativeCurrency: i, rpcUrls: o, blockExplorers: a } = t;
        await e.request({ method: 'wallet_addEthereumChain', params: [{ chainId: (0, s.eC)(r), chainName: n, nativeCurrency: i, rpcUrls: o.default.http, blockExplorerUrls: a ? Object.values(a).map(({ url: e }) => e) : void 0 }] });
      }
      var a = r(8099),
        u = r(2076),
        c = r(1906),
        l = r(5757),
        f = r(7240),
        h = r(6678),
        d = r(924),
        p = r(1151),
        g = r(894),
        m = r(3535);
      async function y(e, t) {
        let { account: r = e.account, chain: n = e.chain, accessList: s, data: o, gas: a, gasPrice: y, maxFeePerGas: b, maxPriorityFeePerGas: w, nonce: v, to: A, value: C, ...E } = t;
        if (!r) throw new c.o({ docsPath: '/docs/actions/wallet/sendTransaction' });
        let P = (0, u.T)(r);
        try {
          let r;
          if (((0, g.F)(t), null !== n && ((r = await (0, i.L)(e)), (0, l.qg)({ currentChainId: r, chain: n })), 'local' === P.type)) {
            let t = await (0, m.h)(e, { account: P, accessList: s, chain: n, data: o, gas: a, gasPrice: y, maxFeePerGas: b, maxPriorityFeePerGas: w, nonce: v, to: A, value: C, ...E });
            r || (r = await (0, i.L)(e));
            let u = n?.serializers?.transaction,
              c = await P.signTransaction({ ...t, chainId: r }, { serializer: u });
            return await e.request({ method: 'eth_sendRawTransaction', params: [c] });
          }
          let u = n?.formatters?.transactionRequest?.format || p.t,
            c = u({ ...(0, d.K)(E, { format: u }), accessList: s, data: o, from: P.address, gas: a, gasPrice: y, maxFeePerGas: b, maxPriorityFeePerGas: w, nonce: v, to: A, value: C });
          return await e.request({ method: 'eth_sendTransaction', params: [c] });
        } catch (e) {
          throw (function (e, { docsPath: t, ...r }) {
            let n = e;
            return (0, h.B)(e) && (n = (0, h.k)(e, r)), new f.mk(n, { docsPath: t, ...r });
          })(e, { ...t, account: P, chain: t.chain || void 0 });
        }
      }
      var b = r(5818);
      async function w(e) {
        let t = await e.request({ method: 'eth_accounts' });
        return t.map((e) => (0, b.x)(e));
      }
      async function v(e) {
        let t = await e.request({ method: 'wallet_getPermissions' });
        return t;
      }
      async function A(e) {
        let t = await e.request({ method: 'eth_requestAccounts' });
        return t.map((e) => (0, b.K)(e));
      }
      async function C(e, t) {
        return e.request({ method: 'wallet_requestPermissions', params: [t] });
      }
      async function E(e, { account: t = e.account, message: r }) {
        if (!t) throw new c.o({ docsPath: '/docs/actions/wallet/signMessage' });
        let n = (0, u.T)(t);
        if ('local' === n.type) return n.signMessage({ message: r });
        let i = 'string' == typeof r ? (0, s.$G)(r) : r.raw instanceof Uint8Array ? (0, s.NC)(r.raw) : r.raw;
        return e.request({ method: 'personal_sign', params: [i, n.address] });
      }
      var P = r(8075),
        I = r(2493),
        O = r(1748);
      async function B(e, { account: t = e.account, domain: r, message: n, primaryType: i, types: s }) {
        if (!t) throw new c.o({ docsPath: '/docs/actions/wallet/signTypedData' });
        let o = (0, u.T)(t),
          a = {
            EIP712Domain: [
              'string' == typeof r?.name && { name: 'name', type: 'string' },
              r?.version && { name: 'version', type: 'string' },
              'number' == typeof r?.chainId && { name: 'chainId', type: 'uint256' },
              r?.verifyingContract && { name: 'verifyingContract', type: 'address' },
              r?.salt && { name: 'salt', type: 'bytes32' },
            ].filter(Boolean),
            ...s,
          };
        if (((0, O.i)({ domain: r, message: n, primaryType: i, types: a }), 'local' === o.type)) return o.signTypedData({ domain: r, primaryType: i, types: a, message: n });
        let l = (0, I.P)({ domain: r ?? {}, primaryType: i, types: a, message: n }, (e, t) => ((0, P.v)(t) ? t.toLowerCase() : t));
        return e.request({ method: 'eth_signTypedData_v4', params: [o.address, l] });
      }
      async function x(e, { id: t }) {
        await e.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: (0, s.eC)(t) }] });
      }
      async function S(e, t) {
        let r = await e.request({ method: 'wallet_watchAsset', params: t });
        return r;
      }
      var M = r(3718);
      async function R(e, { abi: t, address: r, args: n, dataSuffix: i, functionName: s, ...o }) {
        let a = (0, M.R)({ abi: t, args: n, functionName: s }),
          u = await y(e, { data: `${a}${i ? i.replace('0x', '') : ''}`, to: r, ...o });
        return u;
      }
      function j(e) {
        return {
          addChain: (t) => o(e, t),
          deployContract: (t) =>
            (function (e, { abi: t, args: r, bytecode: n, ...i }) {
              let s = (0, a.w)({ abi: t, args: r, bytecode: n });
              return y(e, { ...i, data: s });
            })(e, t),
          getAddresses: () => w(e),
          getChainId: () => (0, i.L)(e),
          getPermissions: () => v(e),
          requestAddresses: () => A(e),
          requestPermissions: (t) => C(e, t),
          sendTransaction: (t) => y(e, t),
          signMessage: (t) => E(e, t),
          signTypedData: (t) => B(e, t),
          switchChain: (t) => x(e, t),
          watchAsset: (t) => S(e, t),
          writeContract: (t) => R(e, t),
        };
      }
      function k(e) {
        let { key: t = 'wallet', name: r = 'Wallet Client', transport: i } = e,
          s = (0, n.e)({ ...e, key: t, name: r, transport: (e) => i({ ...e, retryCount: 0 }), type: 'walletClient' });
        return s.extend(j);
      }
    },
    7502: function (e, t, r) {
      'use strict';
      r.d(t, {
        q: function () {
          return i;
        },
      });
      var n = r(4594);
      function i({ key: e, name: t, request: r, retryCount: i = 3, retryDelay: s = 150, timeout: o, type: a }, u) {
        return { config: { key: e, name: t, request: r, retryCount: i, retryDelay: s, timeout: o, type: a }, request: (0, n.n)(r, { retryCount: i, retryDelay: s }), value: u };
      }
    },
    6838: function (e, t, r) {
      'use strict';
      r.d(t, {
        P: function () {
          return i;
        },
      });
      var n = r(7502);
      function i(e, t = {}) {
        let { key: r = 'custom', name: i = 'Custom Provider', retryDelay: s } = t;
        return ({ retryCount: o }) => (0, n.q)({ key: r, name: i, request: e.request.bind(e), retryCount: t.retryCount ?? o, retryDelay: s, type: 'custom' });
      }
    },
    9999: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return u;
        },
      });
      var n = r(3926),
        i = r(7082),
        s = r(7528),
        o = r(7795),
        a = r(7502);
      function u(e, t = {}) {
        let { batch: r, fetchOptions: u, key: c = 'http', name: l = 'HTTP JSON-RPC', retryDelay: f } = t;
        return ({ chain: h, retryCount: d, timeout: p }) => {
          let { batchSize: g = 1e3, wait: m = 0 } = 'object' == typeof r ? r : {},
            y = t.retryCount ?? d,
            b = p ?? t.timeout ?? 1e4,
            w = e || h?.rpcUrls.default.http[0];
          if (!w) throw new i.I();
          return (0, a.q)(
            {
              key: c,
              name: l,
              async request({ method: t, params: i }) {
                let a = { method: t, params: i },
                  { schedule: c } = (0, s.S)({ id: `${e}`, wait: m, shouldSplitBatch: (e) => e.length > g, fn: (e) => o.f.http(w, { body: e, fetchOptions: u, timeout: b }) }),
                  l = async (e) => (r ? c(e) : [await o.f.http(w, { body: e, fetchOptions: u, timeout: b })]),
                  [{ error: f, result: h }] = await l(a);
                if (f) throw new n.bs({ body: a, error: f, url: w });
                return h;
              },
              retryCount: y,
              retryDelay: f,
              timeout: b,
              type: 'http',
            },
            { url: e }
          );
        };
      }
    },
    2372: function (e, t, r) {
      'use strict';
      r.d(t, {
        $o: function () {
          return c;
        },
        F8: function () {
          return n;
        },
        X$: function () {
          return u;
        },
        du: function () {
          return o;
        },
        k3: function () {
          return s;
        },
        nZ: function () {
          return a;
        },
      });
      let n = [
          {
            inputs: [
              {
                components: [
                  { name: 'target', type: 'address' },
                  { name: 'allowFailure', type: 'bool' },
                  { name: 'callData', type: 'bytes' },
                ],
                name: 'calls',
                type: 'tuple[]',
              },
            ],
            name: 'aggregate3',
            outputs: [
              {
                components: [
                  { name: 'success', type: 'bool' },
                  { name: 'returnData', type: 'bytes' },
                ],
                name: 'returnData',
                type: 'tuple[]',
              },
            ],
            stateMutability: 'view',
            type: 'function',
          },
        ],
        i = [
          { inputs: [], name: 'ResolverNotFound', type: 'error' },
          { inputs: [], name: 'ResolverWildcardNotSupported', type: 'error' },
        ],
        s = [
          ...i,
          {
            name: 'resolve',
            type: 'function',
            stateMutability: 'view',
            inputs: [
              { name: 'name', type: 'bytes' },
              { name: 'data', type: 'bytes' },
            ],
            outputs: [
              { name: '', type: 'bytes' },
              { name: 'address', type: 'address' },
            ],
          },
        ],
        o = [
          ...i,
          {
            name: 'reverse',
            type: 'function',
            stateMutability: 'view',
            inputs: [{ type: 'bytes', name: 'reverseName' }],
            outputs: [
              { type: 'string', name: 'resolvedName' },
              { type: 'address', name: 'resolvedAddress' },
              { type: 'address', name: 'reverseResolver' },
              { type: 'address', name: 'resolver' },
            ],
          },
        ],
        a = [
          {
            name: 'text',
            type: 'function',
            stateMutability: 'view',
            inputs: [
              { name: 'name', type: 'bytes32' },
              { name: 'key', type: 'string' },
            ],
            outputs: [{ name: '', type: 'string' }],
          },
        ],
        u = [
          { name: 'addr', type: 'function', stateMutability: 'view', inputs: [{ name: 'name', type: 'bytes32' }], outputs: [{ name: '', type: 'address' }] },
          {
            name: 'addr',
            type: 'function',
            stateMutability: 'view',
            inputs: [
              { name: 'name', type: 'bytes32' },
              { name: 'coinType', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bytes' }],
          },
        ],
        c = [
          {
            inputs: [
              { internalType: 'address', name: '_signer', type: 'address' },
              { internalType: 'bytes32', name: '_hash', type: 'bytes32' },
              { internalType: 'bytes', name: '_signature', type: 'bytes' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
        ];
    },
    4451: function (e, t, r) {
      'use strict';
      r.d(t, {
        $: function () {
          return n;
        },
        Up: function () {
          return i;
        },
        hZ: function () {
          return s;
        },
      });
      let n = {
          1: 'An `assert` condition failed.',
          17: 'Arithmic operation resulted in underflow or overflow.',
          18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
          33: 'Attempted to convert to an invalid type.',
          34: 'Attempted to access a storage byte array that is incorrectly encoded.',
          49: 'Performed `.pop()` on an empty array',
          50: 'Array index is out of bounds.',
          65: 'Allocated too much memory or created an array which is too large.',
          81: 'Attempted to call a zero-initialized variable of internal function type.',
        },
        i = { inputs: [{ name: 'message', type: 'string' }], name: 'Error', type: 'error' },
        s = { inputs: [{ name: 'reason', type: 'uint256' }], name: 'Panic', type: 'error' };
    },
    7938: function (e, t, r) {
      'use strict';
      r.d(t, {
        Bd: function () {
          return s;
        },
        Zn: function () {
          return i;
        },
        ez: function () {
          return n;
        },
      });
      let n = { gwei: 9, wei: 18 },
        i = { ether: -9, wei: 9 },
        s = { ether: -18, gwei: -9 };
    },
    2639: function (e, t, r) {
      'use strict';
      r.d(t, {
        CI: function () {
          return E;
        },
        FM: function () {
          return p;
        },
        Gy: function () {
          return A;
        },
        KY: function () {
          return w;
        },
        M4: function () {
          return f;
        },
        MX: function () {
          return b;
        },
        SM: function () {
          return v;
        },
        cO: function () {
          return a;
        },
        dh: function () {
          return C;
        },
        fM: function () {
          return o;
        },
        fs: function () {
          return h;
        },
        gr: function () {
          return l;
        },
        hn: function () {
          return P;
        },
        lC: function () {
          return g;
        },
        mv: function () {
          return m;
        },
        wM: function () {
          return I;
        },
        wb: function () {
          return c;
        },
        xB: function () {
          return u;
        },
        xL: function () {
          return y;
        },
        yP: function () {
          return d;
        },
      });
      var n = r(8054),
        i = r(9479),
        s = r(5402);
      class o extends s.G {
        constructor({ docsPath: e }) {
          super('A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.', { docsPath: e }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiConstructorNotFoundError' });
        }
      }
      class a extends s.G {
        constructor({ docsPath: e }) {
          super('Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.', {
            docsPath: e,
          }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiConstructorParamsNotFoundError' });
        }
      }
      class u extends s.G {
        constructor({ data: e, params: t, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, { metaMessages: [`Params: (${(0, n.h)(t, { includeName: !0 })})`, `Data:   ${e} (${r} bytes)`] }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiDecodingDataSizeTooSmallError' }),
            Object.defineProperty(this, 'data', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'params', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'size', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.data = e),
            (this.params = t),
            (this.size = r);
        }
      }
      class c extends s.G {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiDecodingZeroDataError' });
        }
      }
      class l extends s.G {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiEncodingArrayLengthMismatchError' });
        }
      }
      class f extends s.G {
        constructor({ expectedSize: e, value: t }) {
          super(`Size of bytes "${t}" (bytes${(0, i.d)(t)}) does not match expected size (bytes${e}).`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiEncodingBytesSizeMismatchError' });
        }
      }
      class h extends s.G {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiEncodingLengthMismatchError' });
        }
      }
      class d extends s.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiErrorSignatureNotFoundError' }),
            Object.defineProperty(this, 'signature', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.signature = e);
        }
      }
      class p extends s.G {
        constructor({ docsPath: e }) {
          super('Cannot extract event signature from empty topics.', { docsPath: e }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiEventSignatureEmptyTopicsError' });
        }
      }
      class g extends s.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiEventSignatureNotFoundError' });
        }
      }
      class m extends s.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ''}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiEventNotFoundError' });
        }
      }
      class y extends s.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ''}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiFunctionNotFoundError' });
        }
      }
      class b extends s.G {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AbiFunctionOutputsNotFoundError' });
        }
      }
      class w extends s.G {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'BytesSizeMismatchError' });
        }
      }
      class v extends s.G {
        constructor({ abiItem: e, data: t, params: r, size: i }) {
          super(`Data size of ${i} bytes is too small for non-indexed event parameters.`, { metaMessages: [`Params: (${(0, n.h)(r, { includeName: !0 })})`, `Data:   ${t} (${i} bytes)`] }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'DecodeLogDataMismatch' }),
            Object.defineProperty(this, 'abiItem', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'data', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'params', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'size', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = r),
            (this.size = i);
        }
      }
      class A extends s.G {
        constructor({ abiItem: e, param: t }) {
          super(`Expected a topic for indexed event parameter${t.name ? ` "${t.name}"` : ''} on event "${(0, n.t)(e, { includeName: !0 })}".`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'DecodeLogTopicsMismatch' }),
            Object.defineProperty(this, 'abiItem', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.abiItem = e);
        }
      }
      class C extends s.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidAbiEncodingType' });
        }
      }
      class E extends s.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidAbiDecodingType' });
        }
      }
      class P extends s.G {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidArrayError' });
        }
      }
      class I extends s.G {
        constructor(e) {
          super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidDefinitionTypeError' });
        }
      }
    },
    1906: function (e, t, r) {
      'use strict';
      r.d(t, {
        o: function () {
          return i;
        },
      });
      var n = r(5402);
      class i extends n.G {
        constructor({ docsPath: e } = {}) {
          super('Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.', { docsPath: e, docsSlug: 'account' }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'AccountNotFoundError' });
        }
      }
    },
    1525: function (e, t, r) {
      'use strict';
      r.d(t, {
        b: function () {
          return i;
        },
      });
      var n = r(5402);
      class i extends n.G {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidAddressError' });
        }
      }
    },
    5402: function (e, t, r) {
      'use strict';
      r.d(t, {
        G: function () {
          return i;
        },
      });
      var n = r(8147);
      class i extends Error {
        constructor(e, t = {}) {
          super(),
            Object.defineProperty(this, 'details', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'docsPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'metaMessages', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'shortMessage', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ViemError' }),
            Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: (0, n.bo)() });
          let r = t.cause instanceof i ? t.cause.details : t.cause?.message ? t.cause.message : t.details,
            s = (t.cause instanceof i && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || 'An error occurred.',
            '',
            ...(t.metaMessages ? [...t.metaMessages, ''] : []),
            ...(s ? [`Docs: https://viem.sh${s}.html${t.docsSlug ? `#${t.docsSlug}` : ''}`] : []),
            ...(r ? [`Details: ${r}`] : []),
            `Version: ${this.version}`,
          ].join('\n')),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = s),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t) ? t : t && 'object' == typeof t && 'cause' in t ? e(t.cause, r) : r ? null : t;
          })(this, e);
        }
      }
    },
    4499: function (e, t, r) {
      'use strict';
      r.d(t, {
        Bk: function () {
          return o;
        },
        Yl: function () {
          return s;
        },
        hJ: function () {
          return u;
        },
        mm: function () {
          return i;
        },
        pZ: function () {
          return a;
        },
      });
      var n = r(5402);
      class i extends n.G {
        constructor({ blockNumber: e, chain: t, contract: r }) {
          super(`Chain "${t.name}" does not support contract "${r.name}".`, {
            metaMessages: [
              'This could be due to any of the following:',
              ...(e && r.blockCreated && r.blockCreated > e ? [`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`] : [`- The chain does not have the contract "${r.name}" configured.`]),
            ],
          }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ChainDoesNotSupportContract' });
        }
      }
      class s extends n.G {
        constructor({ chain: e, currentChainId: t }) {
          super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, { metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e.id} – ${e.name}`] }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ChainMismatchError' });
        }
      }
      class o extends n.G {
        constructor() {
          super('No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.'),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ChainNotFoundError' });
        }
      }
      class a extends n.G {
        constructor() {
          super('No chain was provided to the Client.'), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ClientChainNotConfiguredError' });
        }
      }
      class u extends n.G {
        constructor({ chainId: e }) {
          super(`Chain ID "${e}" is invalid.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidChainIdError' });
        }
      }
    },
    5064: function (e, t, r) {
      'use strict';
      r.d(t, {
        cg: function () {
          return m;
        },
        uq: function () {
          return y;
        },
        Lu: function () {
          return b;
        },
        Dk: function () {
          return w;
        },
        VQ: function () {
          return v;
        },
      });
      var n = r(2076),
        i = r(4451),
        s = r(1258),
        o = r(8054),
        a = r(2493);
      function u({ abiItem: e, args: t, includeFunctionName: r = !0, includeName: n = !1 }) {
        if ('name' in e && 'inputs' in e && e.inputs) return `${r ? e.name : ''}(${e.inputs.map((e, r) => `${n && e.name ? `${e.name}: ` : ''}${'object' == typeof t[r] ? (0, a.P)(t[r]) : t[r]}`).join(', ')})`;
      }
      var c = r(6142),
        l = r(7875),
        f = r(6529),
        h = r(2639),
        d = r(5402),
        p = r(7240),
        g = r(8147);
      class m extends d.G {
        constructor(e, { account: t, docsPath: r, chain: i, data: s, gas: o, gasPrice: a, maxFeePerGas: u, maxPriorityFeePerGas: c, nonce: h, to: d, value: g }) {
          let m = t ? (0, n.T)(t) : void 0,
            y = (0, p.xr)({
              from: m?.address,
              to: d,
              value: void 0 !== g && `${(0, l.d)(g)} ${i?.nativeCurrency.symbol || 'ETH'}`,
              data: s,
              gas: o,
              gasPrice: void 0 !== a && `${(0, f.o)(a)} gwei`,
              maxFeePerGas: void 0 !== u && `${(0, f.o)(u)} gwei`,
              maxPriorityFeePerGas: void 0 !== c && `${(0, f.o)(c)} gwei`,
              nonce: h,
            });
          super(e.shortMessage, { cause: e, docsPath: r, metaMessages: [...(e.metaMessages ? [...e.metaMessages, ' '] : []), 'Raw Call Arguments:', y].filter(Boolean) }),
            Object.defineProperty(this, 'cause', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'CallExecutionError' }),
            (this.cause = e);
        }
      }
      class y extends d.G {
        constructor(e, { abi: t, args: r, contractAddress: n, docsPath: i, functionName: s, sender: a }) {
          let l = (0, c.m)({ abi: t, args: r, name: s }),
            f = l ? u({ abiItem: l, args: r, includeFunctionName: !1, includeName: !1 }) : void 0,
            h = l ? (0, o.t)(l, { includeName: !0 }) : void 0,
            d = (0, p.xr)({ address: n && (0, g.CR)(n), function: h, args: f && '()' !== f && `${[...Array(s?.length ?? 0).keys()].map(() => ' ').join('')}${f}`, sender: a });
          super(e.shortMessage || `An unknown error occurred while executing the contract function "${s}".`, {
            cause: e,
            docsPath: i,
            metaMessages: [...(e.metaMessages ? [...e.metaMessages, ' '] : []), 'Contract Call:', d].filter(Boolean),
          }),
            Object.defineProperty(this, 'abi', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'args', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'cause', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'contractAddress', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'formattedArgs', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'functionName', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'sender', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ContractFunctionExecutionError' }),
            (this.abi = t),
            (this.args = r),
            (this.cause = e),
            (this.contractAddress = n),
            (this.functionName = s),
            (this.sender = a);
        }
      }
      class b extends d.G {
        constructor({ abi: e, data: t, functionName: r, message: n }) {
          let a, c, l, f, d;
          if (t && '0x' !== t)
            try {
              d = (0, s.p)({ abi: e, data: t });
              let { abiItem: r, errorName: n, args: a } = d;
              if ('Error' === n) l = a[0];
              else if ('Panic' === n) {
                let [e] = a;
                l = i.$[e];
              } else {
                let e = r ? (0, o.t)(r, { includeName: !0 }) : void 0,
                  t = r && a ? u({ abiItem: r, args: a, includeFunctionName: !1, includeName: !1 }) : void 0;
                c = [e ? `Error: ${e}` : '', t && '()' !== t ? `       ${[...Array(n?.length ?? 0).keys()].map(() => ' ').join('')}${t}` : ''];
              }
            } catch (e) {
              a = e;
            }
          else n && (l = n);
          a instanceof h.yP &&
            (c = [
              `Unable to decode signature "${(f = a.signature)}" as it was not found on the provided ABI.`,
              'Make sure you are using the correct ABI and that the error exists on it.',
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${f}.`,
            ]),
            super((l && 'execution reverted' !== l) || f ? [`The contract function "${r}" reverted with the following ${f ? 'signature' : 'reason'}:`, l || f].join('\n') : `The contract function "${r}" reverted.`, {
              cause: a,
              metaMessages: c,
            }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ContractFunctionRevertedError' }),
            Object.defineProperty(this, 'data', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'reason', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'signature', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.data = d),
            (this.reason = l),
            (this.signature = f);
        }
      }
      class w extends d.G {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: ['This could be due to any of the following:', `  - The contract does not have the function "${e}",`, '  - The parameters passed to the contract function may be invalid, or', '  - The address is not a contract.'],
          }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ContractFunctionZeroDataError' });
        }
      }
      class v extends d.G {
        constructor({ data: e, message: t }) {
          super(t || ''),
            Object.defineProperty(this, 'code', { enumerable: !0, configurable: !0, writable: !0, value: 3 }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'RawContractError' }),
            Object.defineProperty(this, 'data', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.data = e);
        }
      }
    },
    7848: function (e, t, r) {
      'use strict';
      r.d(t, {
        $: function () {
          return s;
        },
        m: function () {
          return i;
        },
      });
      var n = r(5402);
      class i extends n.G {
        constructor({ offset: e, position: t, size: r }) {
          super(`Slice ${'start' === t ? 'starting' : 'ending'} at offset "${e}" is out-of-bounds (size: ${r}).`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'SliceOffsetOutOfBoundsError' });
        }
      }
      class s extends n.G {
        constructor({ size: e, targetSize: t, type: r }) {
          super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'SizeExceedsPaddingSizeError' });
        }
      }
    },
    7852: function (e, t, r) {
      'use strict';
      r.d(t, {
        Cd: function () {
          return s;
        },
        J5: function () {
          return i;
        },
        M6: function () {
          return o;
        },
      });
      var n = r(5402);
      class i extends n.G {
        constructor({ max: e, min: t, signed: r, size: n, value: i }) {
          super(`Number "${i}" is not in safe ${n ? `${8 * n}-bit ${r ? 'signed' : 'unsigned'} ` : ''}integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'IntegerOutOfRangeError' });
        }
      }
      class s extends n.G {
        constructor(e) {
          super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidHexBooleanError' });
        }
      }
      class o extends n.G {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'SizeOverflowError' });
        }
      }
    },
    4129: function (e, t, r) {
      'use strict';
      r.d(t, {
        C_: function () {
          return f;
        },
        G$: function () {
          return a;
        },
        Hh: function () {
          return o;
        },
        M_: function () {
          return s;
        },
        WF: function () {
          return h;
        },
        ZI: function () {
          return u;
        },
        cj: function () {
          return m;
        },
        cs: function () {
          return g;
        },
        dR: function () {
          return d;
        },
        pZ: function () {
          return p;
        },
        se: function () {
          return l;
        },
        vU: function () {
          return c;
        },
      });
      var n = r(6529),
        i = r(5402);
      class s extends i.G {
        constructor({ cause: e, message: t } = {}) {
          let r = t?.replace('execution reverted: ', '')?.replace('execution reverted', '');
          super(`Execution reverted ${r ? `with reason: ${r}` : 'for an unknown reason'}.`, { cause: e }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ExecutionRevertedError' });
        }
      }
      Object.defineProperty(s, 'code', { enumerable: !0, configurable: !0, writable: !0, value: 3 }), Object.defineProperty(s, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /execution reverted/ });
      class o extends i.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(`The fee cap (\`maxFeePerGas\`${t ? ` = ${(0, n.o)(t)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`, { cause: e }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'FeeCapTooHigh' });
        }
      }
      Object.defineProperty(o, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/ });
      class a extends i.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(`The fee cap (\`maxFeePerGas\`${t ? ` = ${(0, n.o)(t)}` : ''} gwei) cannot be lower than the block base fee.`, { cause: e }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'FeeCapTooLow' });
        }
      }
      Object.defineProperty(a, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/ });
      class u extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(`Nonce provided for the transaction ${t ? `(${t}) ` : ''}is higher than the next one expected.`, { cause: e }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'NonceTooHighError' });
        }
      }
      Object.defineProperty(u, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /nonce too high/ });
      class c extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${t ? `(${t}) ` : ''}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e }
          ),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'NonceTooLowError' });
        }
      }
      Object.defineProperty(c, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /nonce too low|transaction already imported/ });
      class l extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(`Nonce provided for the transaction ${t ? `(${t}) ` : ''}exceeds the maximum allowed nonce.`, { cause: e }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'NonceMaxValueError' });
        }
      }
      Object.defineProperty(l, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /nonce has max value/ });
      class f extends i.G {
        constructor({ cause: e } = {}) {
          super('The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.', {
            cause: e,
            metaMessages: [
              'This error could arise when the account does not have enough funds to:',
              ' - pay for the total gas fee,',
              ' - pay for the value to send.',
              ' ',
              'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
              ' - `gas` is the amount of gas needed for transaction to execute,',
              ' - `gas fee` is the gas fee,',
              ' - `value` is the amount of ether to send to the recipient.',
            ],
          }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InsufficientFundsError' });
        }
      }
      Object.defineProperty(f, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /insufficient funds/ });
      class h extends i.G {
        constructor({ cause: e, gas: t } = {}) {
          super(`The amount of gas ${t ? `(${t}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`, { cause: e }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'IntrinsicGasTooHighError' });
        }
      }
      Object.defineProperty(h, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /intrinsic gas too high|gas limit reached/ });
      class d extends i.G {
        constructor({ cause: e, gas: t } = {}) {
          super(`The amount of gas ${t ? `(${t}) ` : ''}provided for the transaction is too low.`, { cause: e }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'IntrinsicGasTooLowError' });
        }
      }
      Object.defineProperty(d, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /intrinsic gas too low/ });
      class p extends i.G {
        constructor({ cause: e }) {
          super('The transaction type is not supported for this chain.', { cause: e }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'TransactionTypeNotSupportedError' });
        }
      }
      Object.defineProperty(p, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /transaction type not valid/ });
      class g extends i.G {
        constructor({ cause: e, maxPriorityFeePerGas: t, maxFeePerGas: r } = {}) {
          super(`The provided tip (\`maxPriorityFeePerGas\`${t ? ` = ${(0, n.o)(t)} gwei` : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${(0, n.o)(r)} gwei` : ''}).`, { cause: e }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'TipAboveFeeCapError' });
        }
      }
      Object.defineProperty(g, 'nodeMessage', { enumerable: !0, configurable: !0, writable: !0, value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/ });
      class m extends i.G {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.message}`, { cause: e }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'UnknownNodeError' });
        }
      }
    },
    3926: function (e, t, r) {
      'use strict';
      r.d(t, {
        Gg: function () {
          return o;
        },
        W5: function () {
          return c;
        },
        bs: function () {
          return u;
        },
        c9: function () {
          return a;
        },
      });
      var n = r(2493),
        i = r(5402),
        s = r(8147);
      class o extends i.G {
        constructor({ body: e, details: t, headers: r, status: i, url: o }) {
          super('HTTP request failed.', { details: t, metaMessages: [i && `Status: ${i}`, `URL: ${(0, s.Gr)(o)}`, e && `Request body: ${(0, n.P)(e)}`].filter(Boolean) }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'HttpRequestError' }),
            Object.defineProperty(this, 'body', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'headers', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'status', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'url', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.body = e),
            (this.headers = r),
            (this.status = i),
            (this.url = o);
        }
      }
      class a extends i.G {
        constructor({ body: e, details: t, url: r }) {
          super('WebSocket request failed.', { details: t, metaMessages: [`URL: ${(0, s.Gr)(r)}`, `Request body: ${(0, n.P)(e)}`] }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'WebSocketRequestError' });
        }
      }
      class u extends i.G {
        constructor({ body: e, error: t, url: r }) {
          super('RPC Request failed.', { cause: t, details: t.message, metaMessages: [`URL: ${(0, s.Gr)(r)}`, `Request body: ${(0, n.P)(e)}`] }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'RpcRequestError' }),
            Object.defineProperty(this, 'code', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.code = t.code);
        }
      }
      class c extends i.G {
        constructor({ body: e, url: t }) {
          super('The request took too long to respond.', { details: 'The request timed out.', metaMessages: [`URL: ${(0, s.Gr)(t)}`, `Request body: ${(0, n.P)(e)}`] }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'TimeoutError' });
        }
      }
    },
    7224: function (e, t, r) {
      'use strict';
      r.d(t, {
        B: function () {
          return u;
        },
        GD: function () {
          return b;
        },
        I0: function () {
          return E;
        },
        KB: function () {
          return g;
        },
        LX: function () {
          return c;
        },
        Og: function () {
          return d;
        },
        PE: function () {
          return v;
        },
        Pv: function () {
          return y;
        },
        Ts: function () {
          return A;
        },
        XS: function () {
          return f;
        },
        ab: function () {
          return w;
        },
        gS: function () {
          return m;
        },
        ir: function () {
          return I;
        },
        nY: function () {
          return l;
        },
        pT: function () {
          return p;
        },
        s7: function () {
          return a;
        },
        u5: function () {
          return C;
        },
        x3: function () {
          return P;
        },
        yR: function () {
          return h;
        },
      });
      var n = r(5402),
        i = r(3926);
      class s extends n.G {
        constructor(e, { code: t, docsPath: r, metaMessages: n, shortMessage: s }) {
          super(s, { cause: e, docsPath: r, metaMessages: n || e?.metaMessages }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'RpcError' }),
            Object.defineProperty(this, 'code', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.name = e.name),
            (this.code = e instanceof i.bs ? e.code : t ?? -1);
        }
      }
      class o extends s {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ProviderRpcError' }),
            Object.defineProperty(this, 'data', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            (this.data = t.data);
        }
      }
      class a extends s {
        constructor(e) {
          super(e, { code: a.code, shortMessage: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.' }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ParseRpcError' });
        }
      }
      Object.defineProperty(a, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32700 });
      class u extends s {
        constructor(e) {
          super(e, { code: u.code, shortMessage: 'JSON is not a valid request object.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidRequestRpcError' });
        }
      }
      Object.defineProperty(u, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32600 });
      class c extends s {
        constructor(e) {
          super(e, { code: c.code, shortMessage: 'The method does not exist / is not available.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'MethodNotFoundRpcError' });
        }
      }
      Object.defineProperty(c, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32601 });
      class l extends s {
        constructor(e) {
          super(e, { code: l.code, shortMessage: 'Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.' }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidParamsRpcError' });
        }
      }
      Object.defineProperty(l, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32602 });
      class f extends s {
        constructor(e) {
          super(e, { code: f.code, shortMessage: 'An internal error was received.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InternalRpcError' });
        }
      }
      Object.defineProperty(f, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32603 });
      class h extends s {
        constructor(e) {
          super(e, { code: h.code, shortMessage: 'Missing or invalid parameters.\nDouble check you have provided the correct parameters.' }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidInputRpcError' });
        }
      }
      Object.defineProperty(h, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32e3 });
      class d extends s {
        constructor(e) {
          super(e, { code: d.code, shortMessage: 'Requested resource not found.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ResourceNotFoundRpcError' });
        }
      }
      Object.defineProperty(d, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32001 });
      class p extends s {
        constructor(e) {
          super(e, { code: p.code, shortMessage: 'Requested resource not available.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ResourceUnavailableRpcError' });
        }
      }
      Object.defineProperty(p, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32002 });
      class g extends s {
        constructor(e) {
          super(e, { code: g.code, shortMessage: 'Transaction creation failed.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'TransactionRejectedRpcError' });
        }
      }
      Object.defineProperty(g, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32003 });
      class m extends s {
        constructor(e) {
          super(e, { code: m.code, shortMessage: 'Method is not implemented.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'MethodNotSupportedRpcError' });
        }
      }
      Object.defineProperty(m, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32004 });
      class y extends s {
        constructor(e) {
          super(e, { code: y.code, shortMessage: 'Request exceeds defined limit.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'LimitExceededRpcError' });
        }
      }
      Object.defineProperty(y, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32005 });
      class b extends s {
        constructor(e) {
          super(e, { code: b.code, shortMessage: 'Version of JSON-RPC protocol is not supported.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'JsonRpcVersionUnsupportedError' });
        }
      }
      Object.defineProperty(b, 'code', { enumerable: !0, configurable: !0, writable: !0, value: -32006 });
      class w extends o {
        constructor(e) {
          super(e, { code: w.code, shortMessage: 'User rejected the request.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'UserRejectedRequestError' });
        }
      }
      Object.defineProperty(w, 'code', { enumerable: !0, configurable: !0, writable: !0, value: 4001 });
      class v extends o {
        constructor(e) {
          super(e, { code: v.code, shortMessage: 'The requested method and/or account has not been authorized by the user.' }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'UnauthorizedProviderError' });
        }
      }
      Object.defineProperty(v, 'code', { enumerable: !0, configurable: !0, writable: !0, value: 4100 });
      class A extends o {
        constructor(e) {
          super(e, { code: A.code, shortMessage: 'The Provider does not support the requested method.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'UnsupportedProviderMethodError' });
        }
      }
      Object.defineProperty(A, 'code', { enumerable: !0, configurable: !0, writable: !0, value: 4200 });
      class C extends o {
        constructor(e) {
          super(e, { code: C.code, shortMessage: 'The Provider is disconnected from all chains.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ProviderDisconnectedError' });
        }
      }
      Object.defineProperty(C, 'code', { enumerable: !0, configurable: !0, writable: !0, value: 4900 });
      class E extends o {
        constructor(e) {
          super(e, { code: E.code, shortMessage: 'The Provider is not connected to the requested chain.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'ChainDisconnectedError' });
        }
      }
      Object.defineProperty(E, 'code', { enumerable: !0, configurable: !0, writable: !0, value: 4901 });
      class P extends o {
        constructor(e) {
          super(e, { code: P.code, shortMessage: 'An error occurred when attempting to switch chain.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'SwitchChainError' });
        }
      }
      Object.defineProperty(P, 'code', { enumerable: !0, configurable: !0, writable: !0, value: 4902 });
      class I extends s {
        constructor(e) {
          super(e, { shortMessage: 'An unknown RPC error occurred.' }), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'UnknownRpcError' });
        }
      }
    },
    7240: function (e, t, r) {
      'use strict';
      r.d(t, {
        Bh: function () {
          return h;
        },
        JC: function () {
          return l;
        },
        Yb: function () {
          return d;
        },
        j3: function () {
          return c;
        },
        mc: function () {
          return p;
        },
        mk: function () {
          return f;
        },
        vl: function () {
          return u;
        },
        xY: function () {
          return a;
        },
        xr: function () {
          return o;
        },
      });
      var n = r(7875),
        i = r(6529),
        s = r(5402);
      function o(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join('\n');
      }
      class a extends s.G {
        constructor() {
          super('Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.'),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'FeeConflictError' });
        }
      }
      class u extends s.G {
        constructor({ v: e }) {
          super(`Invalid \`v\` value "${e}". Expected 27 or 28.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidLegacyVError' });
        }
      }
      class c extends s.G {
        constructor({ transaction: e }) {
          super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
              'Provided Transaction:',
              '{',
              o(e),
              '}',
              '',
              'To infer the type, either provide:',
              '- a `type` to the Transaction, or',
              '- an EIP-1559 Transaction with `maxFeePerGas`, or',
              '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
              '- a Legacy Transaction with `gasPrice`',
            ],
          }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidSerializableTransactionError' });
        }
      }
      class l extends s.G {
        constructor({ storageKey: e }) {
          super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length - 2) / 2)} bytes.`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'InvalidStorageKeySizeError' });
        }
      }
      class f extends s.G {
        constructor(e, { account: t, docsPath: r, chain: s, data: a, gas: u, gasPrice: c, maxFeePerGas: l, maxPriorityFeePerGas: f, nonce: h, to: d, value: p }) {
          let g = o({
            chain: s && `${s?.name} (id: ${s?.id})`,
            from: t?.address,
            to: d,
            value: void 0 !== p && `${(0, n.d)(p)} ${s?.nativeCurrency.symbol || 'ETH'}`,
            data: a,
            gas: u,
            gasPrice: void 0 !== c && `${(0, i.o)(c)} gwei`,
            maxFeePerGas: void 0 !== l && `${(0, i.o)(l)} gwei`,
            maxPriorityFeePerGas: void 0 !== f && `${(0, i.o)(f)} gwei`,
            nonce: h,
          });
          super(e.shortMessage, { cause: e, docsPath: r, metaMessages: [...(e.metaMessages ? [...e.metaMessages, ' '] : []), 'Request Arguments:', g].filter(Boolean) }),
            Object.defineProperty(this, 'cause', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'TransactionExecutionError' }),
            (this.cause = e);
        }
      }
      class h extends s.G {
        constructor({ blockHash: e, blockNumber: t, blockTag: r, hash: n, index: i }) {
          let s = 'Transaction';
          r && void 0 !== i && (s = `Transaction at block time "${r}" at index "${i}"`),
            e && void 0 !== i && (s = `Transaction at block hash "${e}" at index "${i}"`),
            t && void 0 !== i && (s = `Transaction at block number "${t}" at index "${i}"`),
            n && (s = `Transaction with hash "${n}"`),
            super(`${s} could not be found.`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'TransactionNotFoundError' });
        }
      }
      class d extends s.G {
        constructor({ hash: e }) {
          super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),
            Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'TransactionReceiptNotFoundError' });
        }
      }
      class p extends s.G {
        constructor({ hash: e }) {
          super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`), Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'WaitForTransactionReceiptTimeoutError' });
        }
      }
    },
    7082: function (e, t, r) {
      'use strict';
      r.d(t, {
        I: function () {
          return i;
        },
      });
      var n = r(5402);
      class i extends n.G {
        constructor() {
          super('No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.', { docsPath: '/docs/clients/intro' });
        }
      }
    },
    8147: function (e, t, r) {
      'use strict';
      r.d(t, {
        CR: function () {
          return n;
        },
        Gr: function () {
          return i;
        },
        bo: function () {
          return s;
        },
      });
      let n = (e) => e,
        i = (e) => e,
        s = () => 'viem@1.5.3';
    },
    9866: function (e, t, r) {
      'use strict';
      r.d(t, {
        r: function () {
          return l;
        },
      });
      var n = r(2639),
        i = r(5818),
        s = r(9479),
        o = r(1742),
        a = r(9302),
        u = r(8405),
        c = r(5040);
      function l(e, t) {
        if ('0x' === t && e.length > 0) throw new n.wb();
        if ((0, s.d)(t) && 32 > (0, s.d)(t)) throw new n.xB({ data: t, params: e, size: (0, s.d)(t) });
        return (function ({ data: e, params: t }) {
          let r = [],
            l = 0;
          for (let h = 0; h < t.length; h++) {
            if (l >= (0, s.d)(e)) throw new n.xB({ data: e, params: t, size: (0, s.d)(e) });
            let d = t[h],
              { consumed: p, value: g } = (function e({ data: t, param: r, position: s }) {
                let l = (0, c.S)(r.type);
                if (l) {
                  let [n, i] = l;
                  return (function (t, { param: r, length: n, position: i }) {
                    if (!n) {
                      let n = (0, u.ly)((0, o.tP)(t, i, i + 32, { strict: !0 })),
                        s = (0, u.ly)((0, o.tP)(t, n, n + 32, { strict: !0 })),
                        a = 0,
                        c = [];
                      for (let i = 0; i < s; ++i) {
                        let i = e({ data: (0, o.tP)(t, n + 32), param: r, position: a });
                        (a += i.consumed), c.push(i.value);
                      }
                      return { value: c, consumed: 32 };
                    }
                    if (f(r)) {
                      let s = (0, c.S)(r.type),
                        a = !s?.[0],
                        l = 0,
                        f = [];
                      for (let s = 0; s < n; ++s) {
                        let n = (0, u.ly)((0, o.tP)(t, i, i + 32, { strict: !0 })),
                          c = e({ data: (0, o.tP)(t, n), param: r, position: a ? l : 32 * s });
                        (l += c.consumed), f.push(c.value);
                      }
                      return { value: f, consumed: 32 };
                    }
                    let s = 0,
                      a = [];
                    for (let o = 0; o < n; ++o) {
                      let n = e({ data: t, param: r, position: i + s });
                      (s += n.consumed), a.push(n.value);
                    }
                    return { value: a, consumed: s };
                  })(t, { length: n, param: { ...r, type: i }, position: s });
                }
                if ('tuple' === r.type)
                  return (function (t, { param: r, position: n }) {
                    let i = 0 === r.components.length || r.components.some(({ name: e }) => !e),
                      s = i ? [] : {},
                      a = 0;
                    if (f(r)) {
                      let c = (0, u.ly)((0, o.tP)(t, n, n + 32, { strict: !0 }));
                      for (let n = 0; n < r.components.length; ++n) {
                        let u = r.components[n],
                          l = e({ data: (0, o.tP)(t, c), param: u, position: a });
                        (a += l.consumed), (s[i ? n : u?.name] = l.value);
                      }
                      return { consumed: 32, value: s };
                    }
                    for (let o = 0; o < r.components.length; ++o) {
                      let u = r.components[o],
                        c = e({ data: t, param: u, position: n + a });
                      (a += c.consumed), (s[i ? o : u?.name] = c.value);
                    }
                    return { consumed: a, value: s };
                  })(t, { param: r, position: s });
                if ('string' === r.type)
                  return (function (e, { position: t }) {
                    let r = (0, u.ly)((0, o.tP)(e, t, t + 32, { strict: !0 })),
                      n = (0, u.ly)((0, o.tP)(e, r, r + 32, { strict: !0 }));
                    if (0 === n) return { consumed: 32, value: '' };
                    let i = (0, u.rR)((0, a.f)((0, o.tP)(e, r + 32, r + 32 + n, { strict: !0 })));
                    return { consumed: 32, value: i };
                  })(t, { position: s });
                if (r.type.startsWith('bytes'))
                  return (function (e, { param: t, position: r }) {
                    let [n, i] = t.type.split('bytes');
                    if (!i) {
                      let t = (0, u.ly)((0, o.tP)(e, r, r + 32, { strict: !0 })),
                        n = (0, u.ly)((0, o.tP)(e, t, t + 32, { strict: !0 }));
                      if (0 === n) return { consumed: 32, value: '0x' };
                      let i = (0, o.tP)(e, t + 32, t + 32 + n, { strict: !0 });
                      return { consumed: 32, value: i };
                    }
                    let s = (0, o.tP)(e, r, r + parseInt(i), { strict: !0 });
                    return { consumed: 32, value: s };
                  })(t, { param: r, position: s });
                let h = (0, o.tP)(t, s, s + 32, { strict: !0 });
                if (r.type.startsWith('uint') || r.type.startsWith('int'))
                  return (function (e, { param: t }) {
                    let r = t.type.startsWith('int'),
                      n = parseInt(t.type.split('int')[1] || '256');
                    return { consumed: 32, value: n > 48 ? (0, u.y_)(e, { signed: r }) : (0, u.ly)(e, { signed: r }) };
                  })(h, { param: r });
                if ('address' === r.type) return { consumed: 32, value: (0, i.x)((0, o.tP)(h, -20)) };
                if ('bool' === r.type) return { consumed: 32, value: (0, u.XA)(h) };
                throw new n.CI(r.type, { docsPath: '/docs/contract/decodeAbiParameters' });
              })({ data: e, param: d, position: l });
            r.push(g), (l += p);
          }
          return r;
        })({ data: t, params: e });
      }
      function f(e) {
        let { type: t } = e;
        if ('string' === t || 'bytes' === t || t.endsWith('[]')) return !0;
        if ('tuple' === t) return e.components?.some(f);
        let r = (0, c.S)(e.type);
        return !!(r && f({ ...e, type: r[1] }));
      }
    },
    1258: function (e, t, r) {
      'use strict';
      r.d(t, {
        p: function () {
          return c;
        },
      });
      var n = r(4451),
        i = r(2639),
        s = r(1742),
        o = r(6620),
        a = r(9866),
        u = r(8054);
      function c({ abi: e, data: t }) {
        let r = (0, s.tP)(t, 0, 4);
        if ('0x' === r) throw new i.wb();
        let c = [...(e || []), n.Up, n.hZ],
          l = c.find((e) => 'error' === e.type && r === (0, o.o)((0, u.t)(e)));
        if (!l) throw new i.yP(r, { docsPath: '/docs/contract/decodeErrorResult' });
        return { abiItem: l, args: 'inputs' in l && l.inputs && l.inputs.length > 0 ? (0, a.r)(l.inputs, (0, s.tP)(t, 4)) : void 0, errorName: l.name };
      }
    },
    4627: function (e, t, r) {
      'use strict';
      r.d(t, {
        k: function () {
          return a;
        },
      });
      var n = r(2639),
        i = r(9866),
        s = r(6142);
      let o = '/docs/contract/decodeFunctionResult';
      function a({ abi: e, args: t, functionName: r, data: a }) {
        let u = e[0];
        if (r && !(u = (0, s.m)({ abi: e, args: t, name: r }))) throw new n.xL(r, { docsPath: o });
        if ('function' !== u.type) throw new n.xL(void 0, { docsPath: o });
        if (!u.outputs) throw new n.MX(u.name, { docsPath: o });
        let c = (0, i.r)(u.outputs, a);
        return c && c.length > 1 ? c : c && 1 === c.length ? c[0] : void 0;
      }
    },
    5040: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return f;
        },
        S: function () {
          return d;
        },
      });
      var n = r(2639),
        i = r(1525),
        s = r(8863),
        o = r(4840),
        a = r(9516),
        u = r(9479),
        c = r(1742),
        l = r(471);
      function f(e, t) {
        if (e.length !== t.length) throw new n.fs({ expectedLength: e.length, givenLength: t.length });
        let r = (function ({ params: e, values: t }) {
            let r = [];
            for (let f = 0; f < e.length; f++)
              r.push(
                (function e({ param: t, value: r }) {
                  let f = d(t.type);
                  if (f) {
                    let [i, s] = f;
                    return (function (t, { length: r, param: i }) {
                      let s = null === r;
                      if (!Array.isArray(t)) throw new n.hn(t);
                      if (!s && t.length !== r) throw new n.gr({ expectedLength: r, givenLength: t.length, type: `${i.type}[${r}]` });
                      let a = !1,
                        u = [];
                      for (let r = 0; r < t.length; r++) {
                        let n = e({ param: i, value: t[r] });
                        n.dynamic && (a = !0), u.push(n);
                      }
                      if (s || a) {
                        let e = h(u);
                        if (s) {
                          let t = (0, l.eC)(u.length, { size: 32 });
                          return { dynamic: !0, encoded: u.length > 0 ? (0, o.zo)([t, e]) : t };
                        }
                        if (a) return { dynamic: !0, encoded: e };
                      }
                      return { dynamic: !1, encoded: (0, o.zo)(u.map(({ encoded: e }) => e)) };
                    })(r, { length: i, param: { ...t, type: s } });
                  }
                  if ('tuple' === t.type)
                    return (function (t, { param: r }) {
                      let n = !1,
                        i = [];
                      for (let s = 0; s < r.components.length; s++) {
                        let o = r.components[s],
                          a = Array.isArray(t) ? s : o.name,
                          u = e({ param: o, value: t[a] });
                        i.push(u), u.dynamic && (n = !0);
                      }
                      return { dynamic: n, encoded: n ? h(i) : (0, o.zo)(i.map(({ encoded: e }) => e)) };
                    })(r, { param: t });
                  if ('address' === t.type)
                    return (function (e) {
                      if (!(0, s.U)(e)) throw new i.b({ address: e });
                      return { dynamic: !1, encoded: (0, a.gc)(e.toLowerCase()) };
                    })(r);
                  if ('bool' === t.type) return { dynamic: !1, encoded: (0, a.gc)((0, l.C4)(r)) };
                  if (t.type.startsWith('uint') || t.type.startsWith('int')) {
                    let e = t.type.startsWith('int');
                    return (function (e, { signed: t }) {
                      return { dynamic: !1, encoded: (0, l.eC)(e, { size: 32, signed: t }) };
                    })(r, { signed: e });
                  }
                  if (t.type.startsWith('bytes'))
                    return (function (e, { param: t }) {
                      let [, r] = t.type.split('bytes'),
                        i = (0, u.d)(e);
                      if (!r) {
                        let t = e;
                        return i % 32 != 0 && (t = (0, a.gc)(t, { dir: 'right', size: 32 * Math.ceil((e.length - 2) / 2 / 32) })), { dynamic: !0, encoded: (0, o.zo)([(0, a.gc)((0, l.eC)(i, { size: 32 })), t]) };
                      }
                      if (i !== parseInt(r)) throw new n.M4({ expectedSize: parseInt(r), value: e });
                      return { dynamic: !1, encoded: (0, a.gc)(e, { dir: 'right' }) };
                    })(r, { param: t });
                  if ('string' === t.type)
                    return (function (e) {
                      let t = (0, l.$G)(e),
                        r = Math.ceil((0, u.d)(t) / 32),
                        n = [];
                      for (let e = 0; e < r; e++) n.push((0, a.gc)((0, c.tP)(t, 32 * e, (e + 1) * 32), { dir: 'right' }));
                      return { dynamic: !0, encoded: (0, o.zo)([(0, a.gc)((0, l.eC)((0, u.d)(t), { size: 32 })), ...n]) };
                    })(r);
                  throw new n.dh(t.type, { docsPath: '/docs/contract/encodeAbiParameters' });
                })({ param: e[f], value: t[f] })
              );
            return r;
          })({ params: e, values: t }),
          f = h(r);
        return 0 === f.length ? '0x' : f;
      }
      function h(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: n, encoded: i } = e[r];
          n ? (t += 32) : (t += (0, u.d)(i));
        }
        let r = [],
          n = [],
          i = 0;
        for (let s = 0; s < e.length; s++) {
          let { dynamic: o, encoded: a } = e[s];
          o ? (r.push((0, l.eC)(t + i, { size: 32 })), n.push(a), (i += (0, u.d)(a))) : r.push(a);
        }
        return (0, o.zo)([...r, ...n]);
      }
      function d(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    8099: function (e, t, r) {
      'use strict';
      r.d(t, {
        w: function () {
          return a;
        },
      });
      var n = r(2639),
        i = r(4840),
        s = r(5040);
      let o = '/docs/contract/encodeDeployData';
      function a({ abi: e, args: t, bytecode: r }) {
        if (!t || 0 === t.length) return r;
        let a = e.find((e) => 'type' in e && 'constructor' === e.type);
        if (!a) throw new n.fM({ docsPath: o });
        if (!('inputs' in a) || !a.inputs || 0 === a.inputs.length) throw new n.cO({ docsPath: o });
        let u = (0, s.E)(a.inputs, t);
        return (0, i.SM)([r, u]);
      }
    },
    3718: function (e, t, r) {
      'use strict';
      r.d(t, {
        R: function () {
          return c;
        },
      });
      var n = r(2639),
        i = r(4840),
        s = r(6620),
        o = r(5040),
        a = r(8054),
        u = r(6142);
      function c({ abi: e, args: t, functionName: r }) {
        let c = e[0];
        if (r && !(c = (0, u.m)({ abi: e, args: t, name: r }))) throw new n.xL(r, { docsPath: '/docs/contract/encodeFunctionData' });
        if ('function' !== c.type) throw new n.xL(void 0, { docsPath: '/docs/contract/encodeFunctionData' });
        let l = (0, a.t)(c),
          f = (0, s.o)(l),
          h = 'inputs' in c && c.inputs ? (0, o.E)(c.inputs, t ?? []) : void 0;
        return (0, i.SM)([f, h ?? '0x']);
      }
    },
    8054: function (e, t, r) {
      'use strict';
      r.d(t, {
        h: function () {
          return s;
        },
        t: function () {
          return i;
        },
      });
      var n = r(2639);
      function i(e, { includeName: t = !1 } = {}) {
        if ('function' !== e.type && 'event' !== e.type && 'error' !== e.type) throw new n.wM(e.type);
        return `${e.name}(${s(e.inputs, { includeName: t })})`;
      }
      function s(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith('tuple') ? `(${s(e.components, { includeName: t })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : '');
                })(e, { includeName: t })
              )
              .join(t ? ', ' : ',')
          : '';
      }
    },
    6142: function (e, t, r) {
      'use strict';
      r.d(t, {
        m: function () {
          return i;
        },
      });
      var n = r(8863);
      function i({ abi: e, args: t = [], name: r }) {
        let i = e.filter((e) => 'name' in e && e.name === r);
        if (0 !== i.length) {
          if (1 === i.length) return i[0];
          for (let e of i) {
            if (!('inputs' in e)) continue;
            if (!t || 0 === t.length) {
              if (!e.inputs || 0 === e.inputs.length) return e;
              continue;
            }
            if (!e.inputs || 0 === e.inputs.length || e.inputs.length !== t.length) continue;
            let r = t.every((t, r) => {
              let i = 'inputs' in e && e.inputs[r];
              return (
                !!i &&
                (function e(t, r) {
                  let i = typeof t,
                    s = r.type;
                  switch (s) {
                    case 'address':
                      return (0, n.U)(t);
                    case 'bool':
                      return 'boolean' === i;
                    case 'function':
                    case 'string':
                      return 'string' === i;
                    default:
                      if ('tuple' === s && 'components' in r) return Object.values(r.components).every((r, n) => e(Object.values(t)[n], r));
                      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(s)) return 'number' === i || 'bigint' === i;
                      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(s)) return 'string' === i || t instanceof Uint8Array;
                      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(s)) return Array.isArray(t) && t.every((t) => e(t, { ...r, type: s.replace(/(\[[0-9]{0,}\])$/, '') }));
                      return !1;
                  }
                })(t, i)
              );
            });
            if (r) return e;
          }
          return i[0];
        }
      }
    },
    5818: function (e, t, r) {
      'use strict';
      r.d(t, {
        K: function () {
          return u;
        },
        x: function () {
          return a;
        },
      });
      var n = r(1525),
        i = r(9750),
        s = r(9550),
        o = r(8863);
      function a(e, t) {
        let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          n = (0, s.w)((0, i.qX)(r), 'bytes'),
          o = (t ? r.substring(`${t}0x`.length) : r).split('');
        for (let e = 0; e < 40; e += 2) n[e >> 1] >> 4 >= 8 && o[e] && (o[e] = o[e].toUpperCase()), (15 & n[e >> 1]) >= 8 && o[e + 1] && (o[e + 1] = o[e + 1].toUpperCase());
        return `0x${o.join('')}`;
      }
      function u(e, t) {
        if (!(0, o.U)(e)) throw new n.b({ address: e });
        return a(e, t);
      }
    },
    8863: function (e, t, r) {
      'use strict';
      r.d(t, {
        U: function () {
          return i;
        },
      });
      let n = /^0x[a-fA-F0-9]{40}$/;
      function i(e) {
        return n.test(e);
      }
    },
    4594: function (e, t, r) {
      'use strict';
      r.d(t, {
        n: function () {
          return u;
        },
        y: function () {
          return a;
        },
      });
      var n = r(5402),
        i = r(3926),
        s = r(7224),
        o = r(788);
      let a = (e) =>
        'code' in e
          ? -1 !== e.code && -32004 !== e.code && -32005 !== e.code && -32042 !== e.code && -32603 !== e.code
          : e instanceof i.Gg && !!e.status && 403 !== e.status && 408 !== e.status && 413 !== e.status && 429 !== e.status && 500 !== e.status && 502 !== e.status && 503 !== e.status && 504 !== e.status;
      function u(e, { retryDelay: t = 150, retryCount: r = 3 } = {}) {
        return async (u) =>
          (0, o.J)(
            async () => {
              try {
                return await e(u);
              } catch (e) {
                switch (e.code) {
                  case s.s7.code:
                    throw new s.s7(e);
                  case s.B.code:
                    throw new s.B(e);
                  case s.LX.code:
                    throw new s.LX(e);
                  case s.nY.code:
                    throw new s.nY(e);
                  case s.XS.code:
                    throw new s.XS(e);
                  case s.yR.code:
                    throw new s.yR(e);
                  case s.Og.code:
                    throw new s.Og(e);
                  case s.pT.code:
                    throw new s.pT(e);
                  case s.KB.code:
                    throw new s.KB(e);
                  case s.gS.code:
                    throw new s.gS(e);
                  case s.Pv.code:
                    throw new s.Pv(e);
                  case s.GD.code:
                    throw new s.GD(e);
                  case s.ab.code:
                    throw new s.ab(e);
                  case s.PE.code:
                    throw new s.PE(e);
                  case s.Ts.code:
                    throw new s.Ts(e);
                  case s.u5.code:
                    throw new s.u5(e);
                  case s.I0.code:
                    throw new s.I0(e);
                  case s.x3.code:
                    throw new s.x3(e);
                  default:
                    if (e instanceof n.G) throw e;
                    throw new s.ir(e);
                }
              }
            },
            {
              delay: ({ count: e, error: r }) => {
                if (r && r instanceof i.Gg) {
                  let e = r?.headers?.get('Retry-After');
                  if (e?.match(/\d/)) return 1e3 * parseInt(e);
                }
                return ~~(1 << e) * t;
              },
              retryCount: r,
              shouldRetry: ({ error: e }) => !a(e),
            }
          );
      }
    },
    5757: function (e, t, r) {
      'use strict';
      r.d(t, {
        LI: function () {
          return o;
        },
        ax: function () {
          return s;
        },
        qg: function () {
          return i;
        },
      });
      var n = r(4499);
      function i({ chain: e, currentChainId: t }) {
        if (!e) throw new n.Bk();
        if (t !== e.id) throw new n.Yl({ chain: e, currentChainId: t });
      }
      function s(e, t) {
        return { ...e, formatters: t?.formatters, serializers: t?.serializers };
      }
      function o({ blockNumber: e, chain: t, contract: r }) {
        let i = t?.contracts?.[r];
        if (!i) throw new n.mm({ chain: t, contract: { name: r } });
        if (e && i.blockCreated && i.blockCreated > e) throw new n.mm({ blockNumber: e, chain: t, contract: { name: r, blockCreated: i.blockCreated } });
        return i.address;
      }
    },
    4840: function (e, t, r) {
      'use strict';
      function n(e) {
        return 'string' == typeof e[0]
          ? i(e)
          : (function (e) {
              let t = 0;
              for (let r of e) t += r.length;
              let r = new Uint8Array(t),
                n = 0;
              for (let t of e) r.set(t, n), (n += t.length);
              return r;
            })(e);
      }
      function i(e) {
        return `0x${e.reduce((e, t) => e + t.replace('0x', ''), '')}`;
      }
      r.d(t, {
        SM: function () {
          return i;
        },
        zo: function () {
          return n;
        },
      });
    },
    8075: function (e, t, r) {
      'use strict';
      function n(e, { strict: t = !0 } = {}) {
        return !!e && 'string' == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith('0x'));
      }
      r.d(t, {
        v: function () {
          return n;
        },
      });
    },
    9516: function (e, t, r) {
      'use strict';
      r.d(t, {
        gc: function () {
          return s;
        },
        vk: function () {
          return i;
        },
      });
      var n = r(7848);
      function i(e, { dir: t, size: r = 32 } = {}) {
        return 'string' == typeof e
          ? s(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r) throw new n.$({ size: e.length, targetSize: r, type: 'bytes' });
              let i = new Uint8Array(r);
              for (let n = 0; n < r; n++) {
                let s = 'right' === t;
                i[s ? n : r - n - 1] = e[s ? n : e.length - n - 1];
              }
              return i;
            })(e, { dir: t, size: r });
      }
      function s(e, { dir: t, size: r = 32 } = {}) {
        if (null === r) return e;
        let i = e.replace('0x', '');
        if (i.length > 2 * r) throw new n.$({ size: Math.ceil(i.length / 2), targetSize: r, type: 'hex' });
        return `0x${i['right' === t ? 'padEnd' : 'padStart'](2 * r, '0')}`;
      }
    },
    9479: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return i;
        },
      });
      var n = r(8075);
      function i(e) {
        return (0, n.v)(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
    },
    1742: function (e, t, r) {
      'use strict';
      r.d(t, {
        tP: function () {
          return o;
        },
      });
      var n = r(7848),
        i = r(8075),
        s = r(9479);
      function o(e, t, r, { strict: n } = {}) {
        return (0, i.v)(e, { strict: !1 })
          ? (function (e, t, r, { strict: n } = {}) {
              a(e, t);
              let i = `0x${e.replace('0x', '').slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
              return n && u(i, t, r), i;
            })(e, t, r, { strict: n })
          : (function (e, t, r, { strict: n } = {}) {
              a(e, t);
              let i = e.slice(t, r);
              return n && u(i, t, r), i;
            })(e, t, r, { strict: n });
      }
      function a(e, t) {
        if ('number' == typeof t && t > 0 && t > (0, s.d)(e) - 1) throw new n.m({ offset: t, position: 'start', size: (0, s.d)(e) });
      }
      function u(e, t, r) {
        if ('number' == typeof t && 'number' == typeof r && (0, s.d)(e) !== r - t) throw new n.m({ offset: r, position: 'end', size: (0, s.d)(e) });
      }
    },
    9302: function (e, t, r) {
      'use strict';
      function n(e, { dir: t = 'left' } = {}) {
        let r = 'string' == typeof e ? e.replace('0x', '') : e,
          n = 0;
        for (let e = 0; e < r.length - 1 && '0' === r['left' === t ? e : r.length - e - 1].toString(); e++) n++;
        return ((r = 'left' === t ? r.slice(n) : r.slice(0, r.length - n)), 'string' == typeof e) ? (1 === r.length && 'right' === t && (r = `${r}0`), `0x${r.length % 2 == 1 ? `0${r}` : r}`) : r;
      }
      r.d(t, {
        f: function () {
          return n;
        },
      });
    },
    8405: function (e, t, r) {
      'use strict';
      r.d(t, {
        XA: function () {
          return c;
        },
        Yf: function () {
          return a;
        },
        ly: function () {
          return l;
        },
        rR: function () {
          return f;
        },
        y_: function () {
          return u;
        },
      });
      var n = r(7852),
        i = r(9479),
        s = r(9302),
        o = r(9750);
      function a(e, { size: t }) {
        if ((0, i.d)(e) > t) throw new n.M6({ givenSize: (0, i.d)(e), maxSize: t });
      }
      function u(e, t = {}) {
        let { signed: r } = t;
        t.size && a(e, { size: t.size });
        let n = BigInt(e);
        if (!r) return n;
        let i = (e.length - 2) / 2,
          s = (1n << (8n * BigInt(i) - 1n)) - 1n;
        return n <= s ? n : n - BigInt(`0x${'f'.padStart(2 * i, 'f')}`) - 1n;
      }
      function c(e, t = {}) {
        let r = e;
        if ((t.size && (a(r, { size: t.size }), (r = (0, s.f)(r))), '0x00' === (0, s.f)(r))) return !1;
        if ('0x01' === (0, s.f)(r)) return !0;
        throw new n.Cd(r);
      }
      function l(e, t = {}) {
        return Number(u(e, t));
      }
      function f(e, t = {}) {
        let r = (0, o.nr)(e);
        return t.size && (a(r, { size: t.size }), (r = (0, s.f)(r, { dir: 'right' }))), new TextDecoder().decode(r);
      }
    },
    9750: function (e, t, r) {
      'use strict';
      r.d(t, {
        O0: function () {
          return c;
        },
        nr: function () {
          return l;
        },
        qX: function () {
          return f;
        },
      });
      var n = r(5402),
        i = r(8075),
        s = r(9516),
        o = r(8405),
        a = r(471);
      let u = new TextEncoder();
      function c(e, t = {}) {
        return 'number' == typeof e || 'bigint' == typeof e
          ? (function (e, t) {
              let r = (0, a.eC)(e, t);
              return l(r);
            })(e, t)
          : 'boolean' == typeof e
          ? (function (e, t = {}) {
              let r = new Uint8Array(1);
              return ((r[0] = Number(e)), 'number' == typeof t.size) ? ((0, o.Yf)(r, { size: t.size }), (0, s.vk)(r, { size: t.size })) : r;
            })(e, t)
          : (0, i.v)(e)
          ? l(e, t)
          : f(e, t);
      }
      function l(e, t = {}) {
        let r = e;
        t.size && ((0, o.Yf)(r, { size: t.size }), (r = (0, s.vk)(r, { dir: 'right', size: t.size })));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let a = new Uint8Array(i.length / 2);
        for (let e = 0; e < a.length; e++) {
          let t = 2 * e,
            r = i.slice(t, t + 2),
            s = Number.parseInt(r, 16);
          if (Number.isNaN(s) || s < 0) throw new n.G(`Invalid byte sequence ("${r}" in "${i}").`);
          a[e] = s;
        }
        return a;
      }
      function f(e, t = {}) {
        let r = u.encode(e);
        return 'number' == typeof t.size ? ((0, o.Yf)(r, { size: t.size }), (0, s.vk)(r, { dir: 'right', size: t.size })) : r;
      }
    },
    471: function (e, t, r) {
      'use strict';
      r.d(t, {
        $G: function () {
          return h;
        },
        C4: function () {
          return u;
        },
        NC: function () {
          return a;
        },
        ci: function () {
          return c;
        },
        eC: function () {
          return l;
        },
      });
      var n = r(7852),
        i = r(9516),
        s = r(8405);
      let o = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function a(e, t = {}) {
        return 'number' == typeof e || 'bigint' == typeof e ? l(e, t) : 'string' == typeof e ? h(e, t) : 'boolean' == typeof e ? u(e, t) : c(e, t);
      }
      function u(e, t = {}) {
        let r = `0x${Number(e)}`;
        return 'number' == typeof t.size ? ((0, s.Yf)(r, { size: t.size }), (0, i.vk)(r, { size: t.size })) : r;
      }
      function c(e, t = {}) {
        let r = '';
        for (let t = 0; t < e.length; t++) r += o[e[t]];
        let n = `0x${r}`;
        return 'number' == typeof t.size ? ((0, s.Yf)(n, { size: t.size }), (0, i.vk)(n, { dir: 'right', size: t.size })) : n;
      }
      function l(e, t = {}) {
        let r;
        let { signed: s, size: o } = t,
          a = BigInt(e);
        o ? (r = s ? (1n << (8n * BigInt(o) - 1n)) - 1n : 2n ** (8n * BigInt(o)) - 1n) : 'number' == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let u = 'bigint' == typeof r && s ? -r - 1n : 0;
        if ((r && a > r) || a < u) {
          let t = 'bigint' == typeof e ? 'n' : '';
          throw new n.J5({ max: r ? `${r}${t}` : void 0, min: `${u}${t}`, signed: s, size: o, value: `${e}${t}` });
        }
        let c = `0x${(s && a < 0 ? (1n << BigInt(8 * o)) + BigInt(a) : a).toString(16)}`;
        return o ? (0, i.vk)(c, { size: o }) : c;
      }
      let f = new TextEncoder();
      function h(e, t = {}) {
        let r = f.encode(e);
        return c(r, t);
      }
    },
    6678: function (e, t, r) {
      'use strict';
      r.d(t, {
        B: function () {
          return o;
        },
        k: function () {
          return a;
        },
      });
      var n = r(4129),
        i = r(3926),
        s = r(7224);
      function o(e) {
        return e instanceof s.KB || e instanceof s.yR || (e instanceof i.bs && e.code === n.M_.code);
      }
      function a(e, t) {
        let r = e.details.toLowerCase();
        if (n.Hh.nodeMessage.test(r)) return new n.Hh({ cause: e, maxFeePerGas: t?.maxFeePerGas });
        if (n.G$.nodeMessage.test(r)) return new n.G$({ cause: e, maxFeePerGas: t?.maxFeePerGas });
        if (n.ZI.nodeMessage.test(r)) return new n.ZI({ cause: e, nonce: t?.nonce });
        if (n.vU.nodeMessage.test(r)) return new n.vU({ cause: e, nonce: t?.nonce });
        if (n.se.nodeMessage.test(r)) return new n.se({ cause: e, nonce: t?.nonce });
        if (n.C_.nodeMessage.test(r)) return new n.C_({ cause: e });
        if (n.WF.nodeMessage.test(r)) return new n.WF({ cause: e, gas: t?.gas });
        else if (n.dR.nodeMessage.test(r)) return new n.dR({ cause: e, gas: t?.gas });
        else if (n.pZ.nodeMessage.test(r)) return new n.pZ({ cause: e });
        else if (n.cs.nodeMessage.test(r)) return new n.cs({ cause: e, maxFeePerGas: t?.maxFeePerGas, maxPriorityFeePerGas: t?.maxPriorityFeePerGas });
        else if (r.match(n.M_.nodeMessage) || ('code' in e.cause && e.cause?.code === n.M_.code)) return new n.M_({ cause: e, message: e.cause.details || e.details });
        return new n.cj({ cause: e.cause.cause });
      }
    },
    4412: function (e, t, r) {
      'use strict';
      r.d(t, {
        G: function () {
          return o;
        },
        Z: function () {
          return s;
        },
      });
      var n = r(8948),
        i = r(7303);
      function s(e) {
        let t = e.transactions?.map((e) => ('string' == typeof e ? e : (0, i.Tr)(e)));
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
      let o = (0, n.$)('block', s);
    },
    924: function (e, t, r) {
      'use strict';
      function n(e, { format: t }) {
        if (!t) return {};
        let r = Object.keys(t({}));
        return r.reduce((t, r) => (e?.hasOwnProperty(r) && (t[r] = e[r]), t), {});
      }
      r.d(t, {
        K: function () {
          return n;
        },
      });
    },
    8948: function (e, t, r) {
      'use strict';
      function n(e, t) {
        return ({ exclude: r, format: n }) => ({
          exclude: r,
          format: (e) => {
            let i = t(e);
            if (r) for (let e of r) delete i[e];
            return { ...i, ...n(e) };
          },
          type: e,
        });
      }
      r.d(t, {
        $: function () {
          return n;
        },
      });
    },
    2776: function (e, t, r) {
      'use strict';
      function n(e, { args: t, eventName: r } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
          ...(r ? { args: t, eventName: r } : {}),
        };
      }
      r.d(t, {
        U: function () {
          return n;
        },
      });
    },
    7303: function (e, t, r) {
      'use strict';
      r.d(t, {
        Tr: function () {
          return o;
        },
        c8: function () {
          return s;
        },
        y_: function () {
          return a;
        },
      });
      var n = r(8405),
        i = r(8948);
      let s = { '0x0': 'legacy', '0x1': 'eip2930', '0x2': 'eip1559' };
      function o(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, n.ly)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
          nonce: e.nonce ? (0, n.ly)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
          type: e.type ? s[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return 'legacy' === t.type && (delete t.accessList, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), 'eip2930' === t.type && (delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t;
      }
      let a = (0, i.$)('transaction', o);
    },
    6361: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return c;
        },
        f: function () {
          return u;
        },
      });
      var n = r(8405),
        i = r(8948),
        s = r(2776),
        o = r(7303);
      let a = { '0x0': 'reverted', '0x1': 'success' };
      function u(e) {
        return {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
          effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, s.U)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex ? (0, n.ly)(e.transactionIndex) : null,
          status: e.status ? a[e.status] : null,
          type: e.type ? o.c8[e.type] || e.type : null,
        };
      }
      let c = (0, i.$)('transactionReceipt', u);
    },
    1151: function (e, t, r) {
      'use strict';
      r.d(t, {
        i: function () {
          return o;
        },
        t: function () {
          return s;
        },
      });
      var n = r(471),
        i = r(8948);
      function s(e) {
        return {
          ...e,
          gas: void 0 !== e.gas ? (0, n.eC)(e.gas) : void 0,
          gasPrice: void 0 !== e.gasPrice ? (0, n.eC)(e.gasPrice) : void 0,
          maxFeePerGas: void 0 !== e.maxFeePerGas ? (0, n.eC)(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: void 0 !== e.maxPriorityFeePerGas ? (0, n.eC)(e.maxPriorityFeePerGas) : void 0,
          nonce: void 0 !== e.nonce ? (0, n.eC)(e.nonce) : void 0,
          value: void 0 !== e.value ? (0, n.eC)(e.value) : void 0,
        };
      }
      let o = (0, i.$)('transactionRequest', s);
    },
    6620: function (e, t, r) {
      'use strict';
      r.d(t, {
        o: function () {
          return s;
        },
      });
      var n = r(1742),
        i = r(8598);
      let s = (e) => ('string' == typeof e ? (0, n.tP)((0, i.F)(e), 0, 4) : (0, n.tP)((0, i.J)(e), 0, 4));
    },
    8598: function (e, t, r) {
      'use strict';
      r.d(t, {
        J: function () {
          return l;
        },
        F: function () {
          return c;
        },
      });
      var n = r(8054);
      let i = /((function|event)\s)?(.*)(\((.*)\))/;
      function s(e) {
        let t = e.match(i),
          r = t?.[2] || void 0,
          n = t?.[3],
          s = t?.[5] || void 0;
        return { type: r, name: n, params: s };
      }
      var o = r(9750),
        a = r(9550);
      let u = (e) => (0, a.w)((0, o.O0)(e));
      function c(e) {
        let t = s(e).name,
          r =
            (function (e) {
              let t = s(e).params,
                r = t?.split(',').map((e) => e.trim().split(' '));
              return r?.map((e) => ({ type: e[0], name: 'indexed' === e[1] ? e[2] : e[1], ...('indexed' === e[1] ? { indexed: !0 } : {}) }));
            })(e) || [];
        return u(`${t}(${r.map(({ type: e }) => e).join(',')})`);
      }
      function l(e) {
        return u((0, n.t)(e));
      }
    },
    9550: function (e, t, r) {
      'use strict';
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`);
      }
      function i(e, ...t) {
        if (!(e instanceof Uint8Array)) throw TypeError('Expected Uint8Array');
        if (t.length > 0 && !t.includes(e.length)) throw TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
      }
      r.d(t, {
        w: function () {
          return U;
        },
      });
      var s = {
        number: n,
        bool: function (e) {
          if ('boolean' != typeof e) throw Error(`Expected boolean, not ${e}`);
        },
        bytes: i,
        hash: function (e) {
          if ('function' != typeof e || 'function' != typeof e.create) throw Error('Hash should be wrapped by utils.wrapConstructor');
          n(e.outputLen), n(e.blockLen);
        },
        exists: function (e, t = !0) {
          if (e.destroyed) throw Error('Hash instance has been destroyed');
          if (t && e.finished) throw Error('Hash#digest() has already been called');
        },
        output: function (e, t) {
          i(e);
          let r = t.outputLen;
          if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`);
        },
      };
      let o = BigInt(4294967296 - 1),
        a = BigInt(32);
      function u(e, t = !1) {
        return t ? { h: Number(e & o), l: Number((e >> a) & o) } : { h: 0 | Number((e >> a) & o), l: 0 | Number(e & o) };
      }
      var c = {
        fromBig: u,
        split: function (e, t = !1) {
          let r = new Uint32Array(e.length),
            n = new Uint32Array(e.length);
          for (let i = 0; i < e.length; i++) {
            let { h: s, l: o } = u(e[i], t);
            [r[i], n[i]] = [s, o];
          }
          return [r, n];
        },
        toBig: (e, t) => (BigInt(e >>> 0) << a) | BigInt(t >>> 0),
        shrSH: (e, t, r) => e >>> r,
        shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
        rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        rotr32H: (e, t) => t,
        rotr32L: (e, t) => e,
        rotlSH: (e, t, r) => (e << r) | (t >>> (32 - r)),
        rotlSL: (e, t, r) => (t << r) | (e >>> (32 - r)),
        rotlBH: (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        rotlBL: (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        add: function (e, t, r, n) {
          let i = (t >>> 0) + (n >>> 0);
          return { h: (e + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
        },
        add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        add3H: (e, t, r, n) => (t + r + n + ((e / 4294967296) | 0)) | 0,
        add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        add4H: (e, t, r, n, i) => (t + r + n + i + ((e / 4294967296) | 0)) | 0,
        add5H: (e, t, r, n, i, s) => (t + r + n + i + s + ((e / 4294967296) | 0)) | 0,
        add5L: (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      };
      let l = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        f = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      if (!f) throw Error('Non little-endian hardware is not supported');
      function h(e) {
        if (
          ('string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw TypeError(`utf8ToBytes expected string, got ${typeof e}`);
              return new TextEncoder().encode(e);
            })(e)),
          !(e instanceof Uint8Array))
        )
          throw TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
        return e;
      }
      Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      let [p, g, m] = [[], [], []],
        y = BigInt(0),
        b = BigInt(1),
        w = BigInt(2),
        v = BigInt(7),
        A = BigInt(256),
        C = BigInt(113);
      for (let e = 0, t = b, r = 1, n = 0; e < 24; e++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]), p.push(2 * (5 * n + r)), g.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = y;
        for (let e = 0; e < 7; e++) (t = ((t << b) ^ ((t >> v) * C)) % A) & w && (i ^= b << ((b << BigInt(e)) - b));
        m.push(i);
      }
      let [E, P] = c.split(m, !0),
        I = (e, t, r) => (r > 32 ? c.rotlBH(e, t, r) : c.rotlSH(e, t, r)),
        O = (e, t, r) => (r > 32 ? c.rotlBL(e, t, r) : c.rotlSL(e, t, r));
      class B extends d {
        constructor(e, t, r, n = !1, i = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = n),
            (this.rounds = i),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            s.number(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)), (this.state32 = l(this.state));
        }
        keccak() {
          !(function (e, t = 24) {
            let r = new Uint32Array(10);
            for (let n = 24 - t; n < 24; n++) {
              for (let t = 0; t < 10; t++) r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let n = (t + 8) % 10,
                  i = (t + 2) % 10,
                  s = r[i],
                  o = r[i + 1],
                  a = I(s, o, 1) ^ r[n],
                  u = O(s, o, 1) ^ r[n + 1];
                for (let r = 0; r < 50; r += 10) (e[t + r] ^= a), (e[t + r + 1] ^= u);
              }
              let t = e[2],
                i = e[3];
              for (let r = 0; r < 24; r++) {
                let n = g[r],
                  s = I(t, i, n),
                  o = O(t, i, n),
                  a = p[r];
                (t = e[a]), (i = e[a + 1]), (e[a] = s), (e[a + 1] = o);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let n = 0; n < 10; n++) r[n] = e[t + n];
                for (let n = 0; n < 10; n++) e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
              }
              (e[0] ^= E[n]), (e[1] ^= P[n]);
            }
            r.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          s.exists(this);
          let { blockLen: t, state: r } = this;
          e = h(e);
          let n = e.length;
          for (let i = 0; i < n; ) {
            let s = Math.min(t - this.pos, n - i);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t), (128 & t) != 0 && r === n - 1 && this.keccak(), (e[n - 1] ^= 128), this.keccak();
        }
        writeInto(e) {
          s.exists(this, !1), s.bytes(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = e.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let s = Math.min(r - this.posOut, i - n);
            e.set(t.subarray(this.posOut, this.posOut + s), n), (this.posOut += s), (n += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return s.number(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((s.output(e, this), this.finished)) throw Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let { blockLen: t, suffix: r, outputLen: n, rounds: i, enableXOF: s } = this;
          return (
            e || (e = new B(t, r, n, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let x = (e, t, r) =>
        (function (e) {
          let t = (t) => e().update(h(t)).digest(),
            r = e();
          return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
        })(() => new B(t, e, r));
      x(6, 144, 28), x(6, 136, 32), x(6, 104, 48), x(6, 72, 64), x(1, 144, 28);
      let S = x(1, 136, 32);
      x(1, 104, 48), x(1, 72, 64);
      let M = (e, t, r) =>
        (function (e) {
          let t = (t, r) => e(r).update(h(t)).digest(),
            r = e({});
          return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t) => e(t)), t;
        })((n = {}) => new B(t, e, void 0 === n.dkLen ? r : n.dkLen, !0));
      M(31, 168, 16), M(31, 136, 32);
      var R = r(8075),
        j = r(9750),
        k = r(471);
      function U(e, t) {
        let r = S((0, R.v)(e, { strict: !1 }) ? (0, j.O0)(e) : e);
        return 'bytes' === (t || 'hex') ? r : (0, k.NC)(r);
      }
    },
    7528: function (e, t, r) {
      'use strict';
      r.d(t, {
        S: function () {
          return i;
        },
      });
      let n = new Map();
      function i({ fn: e, id: t, shouldSplitBatch: r, wait: i = 0 }) {
        let s = async () => {
            let t = u();
            o();
            let r = t.map(({ args: e }) => e);
            0 !== r.length &&
              e(r)
                .then((e) => {
                  t.forEach(({ pendingPromise: t }, r) => t.resolve?.([e[r], e]));
                })
                .catch((e) => {
                  t.forEach(({ pendingPromise: t }) => t.reject?.(e));
                });
          },
          o = () => n.delete(t),
          a = () => u().map(({ args: e }) => e),
          u = () => n.get(t) || [],
          c = (e) => n.set(t, [...u(), e]);
        return {
          flush: o,
          async schedule(e) {
            let t = {},
              n = new Promise((e, r) => {
                (t.resolve = e), (t.reject = r);
              }),
              o = r?.([...a(), e]);
            o && s();
            let l = u().length > 0;
            return l ? (c({ args: e, pendingPromise: t }), n) : (c({ args: e, pendingPromise: t }), setTimeout(s, i), n);
          },
        };
      }
    },
    788: function (e, t, r) {
      'use strict';
      r.d(t, {
        J: function () {
          return i;
        },
      });
      var n = r(4275);
      function i(e, { delay: t = 100, retryCount: r = 2, shouldRetry: i = () => !0 } = {}) {
        return new Promise((s, o) => {
          let a = async ({ count: u = 0 } = {}) => {
            let c = async ({ error: e }) => {
              let r = 'function' == typeof t ? t({ count: u, error: e }) : t;
              r && (await (0, n.D)(r)), a({ count: u + 1 });
            };
            try {
              let t = await e();
              s(t);
            } catch (e) {
              if (u < r && (await i({ count: u, error: e }))) return c({ error: e });
              o(e);
            }
          };
          a();
        });
      }
    },
    7795: function (e, t, r) {
      'use strict';
      r.d(t, {
        h: function () {
          return l;
        },
        f: function () {
          return h;
        },
      });
      var n = r(3926),
        i = r(7528);
      function s(e, { errorInstance: t, timeout: r, signal: n }) {
        return new Promise((i, s) => {
          (async () => {
            let o;
            try {
              let a = new AbortController();
              r > 0 &&
                (o = setTimeout(() => {
                  n ? a.abort() : s(t);
                }, r)),
                i(await e({ signal: a?.signal }));
            } catch (e) {
              'AbortError' === e.name && s(t), s(e);
            } finally {
              clearTimeout(o);
            }
          })();
        });
      }
      var o = r(2493);
      let a = 0;
      async function u(e, { body: t, fetchOptions: r = {}, timeout: i = 1e4 }) {
        let { headers: u, method: c, signal: l } = r;
        try {
          let f;
          let h = await s(
            async ({ signal: n }) => {
              let s = await fetch(e, {
                ...r,
                body: Array.isArray(t) ? (0, o.P)(t.map((e) => ({ jsonrpc: '2.0', id: a++, ...e }))) : (0, o.P)({ jsonrpc: '2.0', id: a++, ...t }),
                headers: { ...u, 'Content-Type': 'application/json' },
                method: c || 'POST',
                signal: l || (i > 0 ? n : void 0),
              });
              return s;
            },
            { errorInstance: new n.W5({ body: t, url: e }), timeout: i, signal: !0 }
          );
          if (((f = h.headers.get('Content-Type')?.startsWith('application/json') ? await h.json() : await h.text()), !h.ok))
            throw new n.Gg({ body: t, details: (0, o.P)(f.error) || h.statusText, headers: h.headers, status: h.status, url: e });
          return f;
        } catch (r) {
          if (r instanceof n.Gg || r instanceof n.W5) throw r;
          throw new n.Gg({ body: t, details: r.message, url: e });
        }
      }
      let c = new Map();
      async function l(e) {
        let t = new URL(e),
          n = t.toString(),
          s = c.get(n);
        if (s) return s;
        let { schedule: o } = (0, i.S)({
            id: n,
            fn: async () => {
              let e = await r.e(667).then(r.bind(r, 667));
              e = e.default?.constructor ? e.default : e.WebSocket;
              let i = new e(t),
                o = new Map(),
                a = new Map(),
                u = ({ data: e }) => {
                  let t = JSON.parse(e),
                    r = 'eth_subscription' === t.method,
                    n = r ? t.params.subscription : t.id,
                    i = r ? a : o,
                    s = i.get(n);
                  s && s({ data: e }), r || i.delete(n);
                },
                l = () => {
                  c.delete(n), i.removeEventListener('close', l), i.removeEventListener('message', u);
                };
              return (
                i.addEventListener('close', l),
                i.addEventListener('message', u),
                i.readyState === e.CONNECTING &&
                  (await new Promise((e, t) => {
                    i && ((i.onopen = e), (i.onerror = t));
                  })),
                (s = Object.assign(i, { requests: o, subscriptions: a })),
                c.set(n, s),
                [s]
              );
            },
          }),
          [a, [u]] = await o();
        return u;
      }
      async function f(e, { body: t, timeout: r = 1e4 }) {
        return s(() => new Promise((r) => h.webSocket(e, { body: t, onResponse: r })), { errorInstance: new n.W5({ body: t, url: e.url }), timeout: r });
      }
      let h = {
        http: u,
        webSocket: function (e, { body: t, onResponse: r }) {
          if (e.readyState === e.CLOSED || e.readyState === e.CLOSING) throw new n.c9({ body: t, url: e.url, details: 'Socket is closed.' });
          let i = a++,
            s = ({ data: n }) => {
              let o = JSON.parse(n);
              ('number' != typeof o.id || i === o.id) && (r?.(o), 'eth_subscribe' === t.method && 'string' == typeof o.result && e.subscriptions.set(o.result, s), 'eth_unsubscribe' === t.method && e.subscriptions.delete(t.params?.[0]));
            };
          return e.requests.set(i, s), e.send(JSON.stringify({ jsonrpc: '2.0', ...t, id: i })), e;
        },
        webSocketAsync: f,
      };
    },
    2493: function (e, t, r) {
      'use strict';
      r.d(t, {
        P: function () {
          return n;
        },
      });
      let n = (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let n = 'bigint' == typeof r ? r.toString() : r;
            return 'function' == typeof t ? t(e, n) : n;
          },
          r
        );
    },
    894: function (e, t, r) {
      'use strict';
      r.d(t, {
        F: function () {
          return u;
        },
      });
      var n = r(2076),
        i = r(1525),
        s = r(4129),
        o = r(7240),
        a = r(8863);
      function u(e) {
        let { account: t, gasPrice: r, maxFeePerGas: u, maxPriorityFeePerGas: c, to: l } = e,
          f = t ? (0, n.T)(t) : void 0;
        if (f && !(0, a.U)(f.address)) throw new i.b({ address: f.address });
        if (l && !(0, a.U)(l)) throw new i.b({ address: l });
        if (void 0 !== r && (void 0 !== u || void 0 !== c)) throw new o.xY();
        if (u && u > 2n ** 256n - 1n) throw new s.Hh({ maxFeePerGas: u });
        if (c && u && c > u) throw new s.cs({ maxFeePerGas: u, maxPriorityFeePerGas: c });
      }
    },
    3535: function (e, t, r) {
      'use strict';
      r.d(t, {
        h: function () {
          return f;
        },
      });
      var n = r(2076),
        i = r(9396),
        s = r(3582),
        o = r(8141),
        a = r(2114),
        u = r(1906),
        c = r(5402),
        l = r(894);
      async function f(e, t) {
        let { account: r, gas: f, gasPrice: h, maxFeePerGas: d, maxPriorityFeePerGas: p, nonce: g } = t;
        if (!r) throw new u.o();
        let m = (0, n.T)(r),
          y = await (0, s.Q)(e, { blockTag: 'latest' }),
          b = { ...t, from: m.address };
        if ((void 0 === g && (b.nonce = await (0, a.K)(e, { address: m.address, blockTag: 'pending' })), 'bigint' == typeof y.baseFeePerGas)) {
          if (void 0 !== h) throw new c.G('Chain does not support legacy `gasPrice`.');
          if (void 0 === d) (b.maxPriorityFeePerGas = p ?? 1500000000n), (b.maxFeePerGas = (120n * y.baseFeePerGas) / 100n + b.maxPriorityFeePerGas);
          else {
            if (void 0 === p && d < 1500000000n) throw new c.G('`maxFeePerGas` cannot be less than the default `maxPriorityFeePerGas` (1.5 gwei).');
            (b.maxFeePerGas = d), (b.maxPriorityFeePerGas = p ?? 1500000000n);
          }
        } else {
          if (void 0 !== d || void 0 !== p) throw new c.G('Chain does not support EIP-1559 fees.');
          void 0 === h && (b.gasPrice = ((await (0, o.o)(e)) * 120n) / 100n);
        }
        return void 0 === f && (b.gas = await (0, i.Q)(e, { ...b, account: { address: m.address, type: 'json-rpc' } })), (0, l.F)(b), b;
      }
    },
    1748: function (e, t, r) {
      'use strict';
      r.d(t, {
        i: function () {
          return l;
        },
      });
      var n = r(2639),
        i = r(1525),
        s = r(8863),
        o = r(9479),
        a = r(471);
      let u = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        c = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function l({ domain: e, message: t, primaryType: r, types: l }) {
        let f = (e, t) => {
          for (let r of e) {
            let { name: e, type: h } = r,
              d = t[e],
              p = h.match(c);
            if (p && ('number' == typeof d || 'bigint' == typeof d)) {
              let [e, t, r] = p;
              (0, a.eC)(d, { signed: 'int' === t, size: parseInt(r) / 8 });
            }
            if ('address' === h && 'string' == typeof d && !(0, s.U)(d)) throw new i.b({ address: d });
            let g = h.match(u);
            if (g) {
              let [e, t] = g;
              if (t && (0, o.d)(d) !== parseInt(t)) throw new n.KY({ expectedSize: parseInt(t), givenSize: (0, o.d)(d) });
            }
            let m = l[h];
            m && f(m, d);
          }
        };
        if ((l.EIP712Domain && e && f(l.EIP712Domain, e), 'EIP712Domain' !== r)) {
          let e = l[r];
          f(e, t);
        }
      }
    },
    7875: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return s;
        },
      });
      var n = r(7938),
        i = r(3790);
      function s(e, t = 'wei') {
        return (0, i.b)(e, n.ez[t]);
      }
    },
    6529: function (e, t, r) {
      'use strict';
      r.d(t, {
        o: function () {
          return s;
        },
      });
      var n = r(7938),
        i = r(3790);
      function s(e, t = 'wei') {
        return (0, i.b)(e, n.Zn[t]);
      }
    },
    3790: function (e, t, r) {
      'use strict';
      function n(e, t) {
        let r = e.toString(),
          n = r.startsWith('-');
        n && (r = r.slice(1));
        let [i, s] = [(r = r.padStart(t, '0')).slice(0, r.length - t), r.slice(r.length - t)];
        return (s = s.replace(/(0+)$/, '')), `${n ? '-' : ''}${i || '0'}${s ? `.${s}` : ''}`;
      }
      r.d(t, {
        b: function () {
          return n;
        },
      });
    },
    4275: function (e, t, r) {
      'use strict';
      async function n(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      r.d(t, {
        D: function () {
          return n;
        },
      });
    },
    9652: function (e, t, r) {
      'use strict';
      let n;
      function i() {}
      r.d(t, {
        eM: function () {
          return ev;
        },
        _g: function () {
          return ey;
        },
        mA: function () {
          return ej;
        },
        KQ: function () {
          return eU;
        },
        $4: function () {
          return eF;
        },
        qL: function () {
          return eQ;
        },
        F6: function () {
          return eG;
        },
      });
      let s = 'undefined' == typeof window || 'Deno' in window;
      function o() {}
      function a(e) {
        return 'number' == typeof e && e >= 0 && e !== 1 / 0;
      }
      function u(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t, r) {
        return A(e) ? ('function' == typeof t ? { ...r, queryKey: e, queryFn: t } : { ...t, queryKey: e }) : e;
      }
      function l(e, t, r) {
        return A(e) ? ('function' == typeof t ? { ...r, mutationKey: e, mutationFn: t } : { ...t, mutationKey: e }) : 'function' == typeof e ? { ...t, mutationFn: e } : { ...e };
      }
      function f(e, t, r) {
        return A(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t];
      }
      function h(e, t) {
        let { type: r = 'all', exact: n, fetchStatus: i, predicate: s, queryKey: o, stale: a } = e;
        if (A(o)) {
          if (n) {
            if (t.queryHash !== p(o, t.options)) return !1;
          } else {
            if (!m(t.queryKey, o)) return !1;
          }
        }
        if ('all' !== r) {
          let e = t.isActive();
          if (('active' === r && !e) || ('inactive' === r && e)) return !1;
        }
        return ('boolean' != typeof a || t.isStale() === a) && (void 0 === i || i === t.state.fetchStatus) && (!s || !!s(t));
      }
      function d(e, t) {
        let { exact: r, fetching: n, predicate: i, mutationKey: s } = e;
        if (A(s)) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (g(t.options.mutationKey) !== g(s)) return !1;
          } else {
            if (!m(t.options.mutationKey, s)) return !1;
          }
        }
        return ('boolean' != typeof n || ('loading' === t.state.status) === n) && (!i || !!i(t));
      }
      function p(e, t) {
        let r = (null == t ? void 0 : t.queryKeyHashFn) || g;
        return r(e);
      }
      function g(e) {
        return JSON.stringify(e, (e, t) =>
          w(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function m(e, t) {
        return e === t || (typeof e == typeof t && !!e && !!t && 'object' == typeof e && 'object' == typeof t && !Object.keys(t).some((r) => !m(e[r], t[r])));
      }
      function y(e, t) {
        if ((e && !t) || (t && !e)) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function b(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function w(e) {
        if (!v(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return !!(v(r) && r.hasOwnProperty('isPrototypeOf'));
      }
      function v(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      function A(e) {
        return Array.isArray(e);
      }
      function C(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function E(e) {
        C(0).then(e);
      }
      function P(e, t, r) {
        return null != r.isDataEqual && r.isDataEqual(e, t)
          ? e
          : 'function' == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
          ? (function e(t, r) {
              if (t === r) return t;
              let n = b(t) && b(r);
              if (n || (w(t) && w(r))) {
                let i = n ? t.length : Object.keys(t).length,
                  s = n ? r : Object.keys(r),
                  o = s.length,
                  a = n ? [] : {},
                  u = 0;
                for (let i = 0; i < o; i++) {
                  let o = n ? i : s[i];
                  (a[o] = e(t[o], r[o])), a[o] === t[o] && u++;
                }
                return i === o && u === i ? t : a;
              }
              return r;
            })(e, t)
          : t;
      }
      let I = console,
        O = (function () {
          let e = [],
            t = 0,
            r = (e) => {
              e();
            },
            n = (e) => {
              e();
            },
            i = (n) => {
              t
                ? e.push(n)
                : E(() => {
                    r(n);
                  });
            },
            s = () => {
              let t = e;
              (e = []),
                t.length &&
                  E(() => {
                    n(() => {
                      t.forEach((e) => {
                        r(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let r;
              t++;
              try {
                r = e();
              } finally {
                --t || s();
              }
              return r;
            },
            batchCalls:
              (e) =>
              (...t) => {
                i(() => {
                  e(...t);
                });
              },
            schedule: i,
            setNotifyFunction: (e) => {
              r = e;
            },
            setBatchNotifyFunction: (e) => {
              n = e;
            },
          };
        })();
      class B {
        constructor() {
          (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          let t = { listener: e };
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
      let x = new (class extends B {
          constructor() {
            super(),
              (this.setup = (e) => {
                if (!s && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener('visibilitychange', t, !1),
                    window.addEventListener('focus', t, !1),
                    () => {
                      window.removeEventListener('visibilitychange', t), window.removeEventListener('focus', t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.cleanup || this.setEventListener(this.setup);
          }
          onUnsubscribe() {
            if (!this.hasListeners()) {
              var e;
              null == (e = this.cleanup) || e.call(this), (this.cleanup = void 0);
            }
          }
          setEventListener(e) {
            var t;
            (this.setup = e),
              null == (t = this.cleanup) || t.call(this),
              (this.cleanup = e((e) => {
                'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            (this.focused = e), e && this.onFocus();
          }
          onFocus() {
            this.listeners.forEach(({ listener: e }) => {
              e();
            });
          }
          isFocused() {
            return 'boolean' == typeof this.focused ? this.focused : 'undefined' == typeof document || [void 0, 'visible', 'prerender'].includes(document.visibilityState);
          }
        })(),
        S = ['online', 'offline'],
        M = new (class extends B {
          constructor() {
            super(),
              (this.setup = (e) => {
                if (!s && window.addEventListener) {
                  let t = () => e();
                  return (
                    S.forEach((e) => {
                      window.addEventListener(e, t, !1);
                    }),
                    () => {
                      S.forEach((e) => {
                        window.removeEventListener(e, t);
                      });
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.cleanup || this.setEventListener(this.setup);
          }
          onUnsubscribe() {
            if (!this.hasListeners()) {
              var e;
              null == (e = this.cleanup) || e.call(this), (this.cleanup = void 0);
            }
          }
          setEventListener(e) {
            var t;
            (this.setup = e),
              null == (t = this.cleanup) || t.call(this),
              (this.cleanup = e((e) => {
                'boolean' == typeof e ? this.setOnline(e) : this.onOnline();
              }));
          }
          setOnline(e) {
            (this.online = e), e && this.onOnline();
          }
          onOnline() {
            this.listeners.forEach(({ listener: e }) => {
              e();
            });
          }
          isOnline() {
            return 'boolean' == typeof this.online ? this.online : 'undefined' == typeof navigator || void 0 === navigator.onLine || navigator.onLine;
          }
        })();
      function R(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function j(e) {
        return (null != e ? e : 'online') !== 'online' || M.isOnline();
      }
      class k {
        constructor(e) {
          (this.revert = null == e ? void 0 : e.revert), (this.silent = null == e ? void 0 : e.silent);
        }
      }
      function U(e) {
        return e instanceof k;
      }
      function L(e) {
        let t,
          r,
          n,
          i = !1,
          s = 0,
          o = !1,
          a = new Promise((e, t) => {
            (r = e), (n = t);
          }),
          u = () => !x.isFocused() || ('always' !== e.networkMode && !M.isOnline()),
          c = (n) => {
            o || ((o = !0), null == e.onSuccess || e.onSuccess(n), null == t || t(), r(n));
          },
          l = (r) => {
            o || ((o = !0), null == e.onError || e.onError(r), null == t || t(), n(r));
          },
          f = () =>
            new Promise((r) => {
              (t = (e) => {
                let t = o || !u();
                return t && r(e), t;
              }),
                null == e.onPause || e.onPause();
            }).then(() => {
              (t = void 0), o || null == e.onContinue || e.onContinue();
            }),
          h = () => {
            let t;
            if (!o) {
              try {
                t = e.fn();
              } catch (e) {
                t = Promise.reject(e);
              }
              Promise.resolve(t)
                .then(c)
                .catch((t) => {
                  var r, n;
                  if (o) return;
                  let a = null != (r = e.retry) ? r : 3,
                    c = null != (n = e.retryDelay) ? n : R,
                    d = 'function' == typeof c ? c(s, t) : c,
                    p = !0 === a || ('number' == typeof a && s < a) || ('function' == typeof a && a(s, t));
                  if (i || !p) {
                    l(t);
                    return;
                  }
                  s++,
                    null == e.onFail || e.onFail(s, t),
                    C(d)
                      .then(() => {
                        if (u()) return f();
                      })
                      .then(() => {
                        i ? l(t) : h();
                      });
                });
            }
          };
        return (
          j(e.networkMode) ? h() : f().then(h),
          {
            promise: a,
            cancel: (t) => {
              o || (l(new k(t)), null == e.abort || e.abort());
            },
            continue: () => {
              let e = null == t ? void 0 : t();
              return e ? a : Promise.resolve();
            },
            cancelRetry: () => {
              i = !0;
            },
            continueRetry: () => {
              i = !1;
            },
          }
        );
      }
      class D {
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            a(this.cacheTime) &&
              (this.gcTimeout = setTimeout(() => {
                this.optionalRemove();
              }, this.cacheTime));
        }
        updateCacheTime(e) {
          this.cacheTime = Math.max(this.cacheTime || 0, null != e ? e : s ? 1 / 0 : 3e5);
        }
        clearGcTimeout() {
          this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
        }
      }
      class F extends D {
        constructor(e) {
          super(),
            (this.abortSignalConsumed = !1),
            (this.defaultOptions = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.cache = e.cache),
            (this.logger = e.logger || I),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.initialState =
              e.state ||
              (function (e) {
                let t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
                  r = void 0 !== t,
                  n = r ? ('function' == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? (null != n ? n : Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? 'success' : 'loading',
                  fetchStatus: 'idle',
                };
              })(this.options)),
            (this.state = this.initialState),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        setOptions(e) {
          (this.options = { ...this.defaultOptions, ...e }), this.updateCacheTime(this.options.cacheTime);
        }
        optionalRemove() {
          this.observers.length || 'idle' !== this.state.fetchStatus || this.cache.remove(this);
        }
        setData(e, t) {
          let r = P(this.state.data, e, this.options);
          return this.dispatch({ data: r, type: 'success', dataUpdatedAt: null == t ? void 0 : t.updatedAt, manual: null == t ? void 0 : t.manual }), r;
        }
        setState(e, t) {
          this.dispatch({ type: 'setState', state: e, setStateOptions: t });
        }
        cancel(e) {
          var t;
          let r = this.promise;
          return null == (t = this.retryer) || t.cancel(e), r ? r.then(o).catch(o) : Promise.resolve();
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(this.initialState);
        }
        isActive() {
          return this.observers.some((e) => !1 !== e.options.enabled);
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e) => e.getCurrentResult().isStale);
        }
        isStaleByTime(e = 0) {
          return this.state.isInvalidated || !this.state.dataUpdatedAt || !u(this.state.dataUpdatedAt, e);
        }
        onFocus() {
          var e;
          let t = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          t && t.refetch({ cancelRefetch: !1 }), null == (e = this.retryer) || e.continue();
        }
        onOnline() {
          var e;
          let t = this.observers.find((e) => e.shouldFetchOnReconnect());
          t && t.refetch({ cancelRefetch: !1 }), null == (e = this.retryer) || e.continue();
        }
        addObserver(e) {
          this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({ type: 'observerAdded', query: this, observer: e }));
        }
        removeObserver(e) {
          this.observers.includes(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()), this.scheduleGc()),
            this.cache.notify({ type: 'observerRemoved', query: this, observer: e }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({ type: 'invalidate' });
        }
        fetch(e, t) {
          var r, n, i, s;
          if ('idle' !== this.state.fetchStatus) {
            if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({ silent: !0 });
            else if (this.promise) return null == (i = this.retryer) || i.continueRetry(), this.promise;
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            let e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          Array.isArray(this.options.queryKey);
          let o = (function () {
              if ('function' == typeof AbortController) return new AbortController();
            })(),
            a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
            u = (e) => {
              Object.defineProperty(e, 'signal', {
                enumerable: !0,
                get: () => {
                  if (o) return (this.abortSignalConsumed = !0), o.signal;
                },
              });
            };
          u(a);
          let c = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: () => (this.options.queryFn ? ((this.abortSignalConsumed = !1), this.options.queryFn(a)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")),
          };
          u(c),
            null == (r = this.options.behavior) || r.onFetch(c),
            (this.revertState = this.state),
            ('idle' === this.state.fetchStatus || this.state.fetchMeta !== (null == (n = c.fetchOptions) ? void 0 : n.meta)) && this.dispatch({ type: 'fetch', meta: null == (s = c.fetchOptions) ? void 0 : s.meta });
          let l = (e) => {
            if (((U(e) && e.silent) || this.dispatch({ type: 'error', error: e }), !U(e))) {
              var t, r, n, i;
              null == (t = (r = this.cache.config).onError) || t.call(r, e, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, this.state.data, e, this);
            }
            this.isFetchingOptimistic || this.scheduleGc(), (this.isFetchingOptimistic = !1);
          };
          return (
            (this.retryer = L({
              fn: c.fetchFn,
              abort: null == o ? void 0 : o.abort.bind(o),
              onSuccess: (e) => {
                var t, r, n, i;
                if (void 0 === e) {
                  l(Error(this.queryHash + ' data is undefined'));
                  return;
                }
                this.setData(e),
                  null == (t = (r = this.cache.config).onSuccess) || t.call(r, e, this),
                  null == (n = (i = this.cache.config).onSettled) || n.call(i, e, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: l,
              onFail: (e, t) => {
                this.dispatch({ type: 'failed', failureCount: e, error: t });
              },
              onPause: () => {
                this.dispatch({ type: 'pause' });
              },
              onContinue: () => {
                this.dispatch({ type: 'continue' });
              },
              retry: c.options.retry,
              retryDelay: c.options.retryDelay,
              networkMode: c.options.networkMode,
            })),
            (this.promise = this.retryer.promise),
            this.promise
          );
        }
        dispatch(e) {
          (this.state = ((t) => {
            var r, n;
            switch (e.type) {
              case 'failed':
                return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
              case 'pause':
                return { ...t, fetchStatus: 'paused' };
              case 'continue':
                return { ...t, fetchStatus: 'fetching' };
              case 'fetch':
                return {
                  ...t,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null != (r = e.meta) ? r : null,
                  fetchStatus: j(this.options.networkMode) ? 'fetching' : 'paused',
                  ...(!t.dataUpdatedAt && { error: null, status: 'loading' }),
                };
              case 'success':
                return {
                  ...t,
                  data: e.data,
                  dataUpdateCount: t.dataUpdateCount + 1,
                  dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: 'success',
                  ...(!e.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
                };
              case 'error':
                let i = e.error;
                if (U(i) && i.revert && this.revertState) return { ...this.revertState };
                return { ...t, error: i, errorUpdateCount: t.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: t.fetchFailureCount + 1, fetchFailureReason: i, fetchStatus: 'idle', status: 'error' };
              case 'invalidate':
                return { ...t, isInvalidated: !0 };
              case 'setState':
                return { ...t, ...e.state };
            }
          })(this.state)),
            O.batch(() => {
              this.observers.forEach((t) => {
                t.onQueryUpdate(e);
              }),
                this.cache.notify({ query: this, type: 'updated', action: e });
            });
        }
      }
      class T extends B {
        constructor(e) {
          super(), (this.config = e || {}), (this.queries = []), (this.queriesMap = {});
        }
        build(e, t, r) {
          var n;
          let i = t.queryKey,
            s = null != (n = t.queryHash) ? n : p(i, t),
            o = this.get(s);
          return o || ((o = new F({ cache: this, logger: e.getLogger(), queryKey: i, queryHash: s, options: e.defaultQueryOptions(t), state: r, defaultOptions: e.getQueryDefaults(i) })), this.add(o)), o;
        }
        add(e) {
          this.queriesMap[e.queryHash] || ((this.queriesMap[e.queryHash] = e), this.queries.push(e), this.notify({ type: 'added', query: e }));
        }
        remove(e) {
          let t = this.queriesMap[e.queryHash];
          t && (e.destroy(), (this.queries = this.queries.filter((t) => t !== e)), t === e && delete this.queriesMap[e.queryHash], this.notify({ type: 'removed', query: e }));
        }
        clear() {
          O.batch(() => {
            this.queries.forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.queriesMap[e];
        }
        getAll() {
          return this.queries;
        }
        find(e, t) {
          let [r] = f(e, t);
          return void 0 === r.exact && (r.exact = !0), this.queries.find((e) => h(r, e));
        }
        findAll(e, t) {
          let [r] = f(e, t);
          return Object.keys(r).length > 0 ? this.queries.filter((e) => h(r, e)) : this.queries;
        }
        notify(e) {
          O.batch(() => {
            this.listeners.forEach(({ listener: t }) => {
              t(e);
            });
          });
        }
        onFocus() {
          O.batch(() => {
            this.queries.forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          O.batch(() => {
            this.queries.forEach((e) => {
              e.onOnline();
            });
          });
        }
      }
      class N extends D {
        constructor(e) {
          super(),
            (this.defaultOptions = e.defaultOptions),
            (this.mutationId = e.mutationId),
            (this.mutationCache = e.mutationCache),
            (this.logger = e.logger || I),
            (this.observers = []),
            (this.state = e.state || Q()),
            this.setOptions(e.options),
            this.scheduleGc();
        }
        setOptions(e) {
          (this.options = { ...this.defaultOptions, ...e }), this.updateCacheTime(this.options.cacheTime);
        }
        get meta() {
          return this.options.meta;
        }
        setState(e) {
          this.dispatch({ type: 'setState', state: e });
        }
        addObserver(e) {
          this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({ type: 'observerAdded', mutation: this, observer: e }));
        }
        removeObserver(e) {
          (this.observers = this.observers.filter((t) => t !== e)), this.scheduleGc(), this.mutationCache.notify({ type: 'observerRemoved', mutation: this, observer: e });
        }
        optionalRemove() {
          this.observers.length || ('loading' === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this));
        }
        continue() {
          var e, t;
          return null != (e = null == (t = this.retryer) ? void 0 : t.continue()) ? e : this.execute();
        }
        async execute() {
          var e, t, r, n, i, s, o, a, u, c, l, f, h, d, p, g, m, y, b, w;
          let v = 'loading' === this.state.status;
          try {
            if (!v) {
              this.dispatch({ type: 'loading', variables: this.options.variables }), await (null == (u = (c = this.mutationCache.config).onMutate) ? void 0 : u.call(c, this.state.variables, this));
              let e = await (null == (l = (f = this.options).onMutate) ? void 0 : l.call(f, this.state.variables));
              e !== this.state.context && this.dispatch({ type: 'loading', context: e, variables: this.state.variables });
            }
            let h = await (() => {
              var e;
              return (
                (this.retryer = L({
                  fn: () => (this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject('No mutationFn found')),
                  onFail: (e, t) => {
                    this.dispatch({ type: 'failed', failureCount: e, error: t });
                  },
                  onPause: () => {
                    this.dispatch({ type: 'pause' });
                  },
                  onContinue: () => {
                    this.dispatch({ type: 'continue' });
                  },
                  retry: null != (e = this.options.retry) ? e : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                })),
                this.retryer.promise
              );
            })();
            return (
              await (null == (e = (t = this.mutationCache.config).onSuccess) ? void 0 : e.call(t, h, this.state.variables, this.state.context, this)),
              await (null == (r = (n = this.options).onSuccess) ? void 0 : r.call(n, h, this.state.variables, this.state.context)),
              await (null == (i = (s = this.mutationCache.config).onSettled) ? void 0 : i.call(s, h, null, this.state.variables, this.state.context, this)),
              await (null == (o = (a = this.options).onSettled) ? void 0 : o.call(a, h, null, this.state.variables, this.state.context)),
              this.dispatch({ type: 'success', data: h }),
              h
            );
          } catch (e) {
            try {
              throw (
                (await (null == (h = (d = this.mutationCache.config).onError) ? void 0 : h.call(d, e, this.state.variables, this.state.context, this)),
                await (null == (p = (g = this.options).onError) ? void 0 : p.call(g, e, this.state.variables, this.state.context)),
                await (null == (m = (y = this.mutationCache.config).onSettled) ? void 0 : m.call(y, void 0, e, this.state.variables, this.state.context, this)),
                await (null == (b = (w = this.options).onSettled) ? void 0 : b.call(w, void 0, e, this.state.variables, this.state.context)),
                e)
              );
            } finally {
              this.dispatch({ type: 'error', error: e });
            }
          }
        }
        dispatch(e) {
          (this.state = ((t) => {
            switch (e.type) {
              case 'failed':
                return { ...t, failureCount: e.failureCount, failureReason: e.error };
              case 'pause':
                return { ...t, isPaused: !0 };
              case 'continue':
                return { ...t, isPaused: !1 };
              case 'loading':
                return { ...t, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: !j(this.options.networkMode), status: 'loading', variables: e.variables };
              case 'success':
                return { ...t, data: e.data, failureCount: 0, failureReason: null, error: null, status: 'success', isPaused: !1 };
              case 'error':
                return { ...t, data: void 0, error: e.error, failureCount: t.failureCount + 1, failureReason: e.error, isPaused: !1, status: 'error' };
              case 'setState':
                return { ...t, ...e.state };
            }
          })(this.state)),
            O.batch(() => {
              this.observers.forEach((t) => {
                t.onMutationUpdate(e);
              }),
                this.mutationCache.notify({ mutation: this, type: 'updated', action: e });
            });
        }
      }
      function Q() {
        return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: !1, status: 'idle', variables: void 0 };
      }
      class q extends B {
        constructor(e) {
          super(), (this.config = e || {}), (this.mutations = []), (this.mutationId = 0);
        }
        build(e, t, r) {
          let n = new N({ mutationCache: this, logger: e.getLogger(), mutationId: ++this.mutationId, options: e.defaultMutationOptions(t), state: r, defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0 });
          return this.add(n), n;
        }
        add(e) {
          this.mutations.push(e), this.notify({ type: 'added', mutation: e });
        }
        remove(e) {
          (this.mutations = this.mutations.filter((t) => t !== e)), this.notify({ type: 'removed', mutation: e });
        }
        clear() {
          O.batch(() => {
            this.mutations.forEach((e) => {
              this.remove(e);
            });
          });
        }
        getAll() {
          return this.mutations;
        }
        find(e) {
          return void 0 === e.exact && (e.exact = !0), this.mutations.find((t) => d(e, t));
        }
        findAll(e) {
          return this.mutations.filter((t) => d(e, t));
        }
        notify(e) {
          O.batch(() => {
            this.listeners.forEach(({ listener: t }) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          var e;
          return (
            (this.resuming = (null != (e = this.resuming) ? e : Promise.resolve())
              .then(() => {
                let e = this.mutations.filter((e) => e.state.isPaused);
                return O.batch(() => e.reduce((e, t) => e.then(() => t.continue().catch(o)), Promise.resolve()));
              })
              .then(() => {
                this.resuming = void 0;
              })),
            this.resuming
          );
        }
      }
      function G(e, t) {
        return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t);
      }
      class z {
        constructor(e = {}) {
          (this.queryCache = e.queryCache || new T()),
            (this.mutationCache = e.mutationCache || new q()),
            (this.logger = e.logger || I),
            (this.defaultOptions = e.defaultOptions || {}),
            (this.queryDefaults = []),
            (this.mutationDefaults = []),
            (this.mountCount = 0);
        }
        mount() {
          this.mountCount++,
            1 === this.mountCount &&
              ((this.unsubscribeFocus = x.subscribe(() => {
                x.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
              })),
              (this.unsubscribeOnline = M.subscribe(() => {
                M.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
              })));
        }
        unmount() {
          var e, t;
          this.mountCount--, 0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), (this.unsubscribeFocus = void 0), null == (t = this.unsubscribeOnline) || t.call(this), (this.unsubscribeOnline = void 0));
        }
        isFetching(e, t) {
          let [r] = f(e, t);
          return (r.fetchStatus = 'fetching'), this.queryCache.findAll(r).length;
        }
        isMutating(e) {
          return this.mutationCache.findAll({ ...e, fetching: !0 }).length;
        }
        getQueryData(e, t) {
          var r;
          return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state.data;
        }
        ensureQueryData(e, t, r) {
          let n = c(e, t, r),
            i = this.getQueryData(n.queryKey);
          return i ? Promise.resolve(i) : this.fetchQuery(n);
        }
        getQueriesData(e) {
          return this.getQueryCache()
            .findAll(e)
            .map(({ queryKey: e, state: t }) => {
              let r = t.data;
              return [e, r];
            });
        }
        setQueryData(e, t, r) {
          let n = this.queryCache.find(e),
            i = null == n ? void 0 : n.state.data,
            s = 'function' == typeof t ? t(i) : t;
          if (void 0 === s) return;
          let o = c(e),
            a = this.defaultQueryOptions(o);
          return this.queryCache.build(this, a).setData(s, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return O.batch(() =>
            this.getQueryCache()
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
          );
        }
        getQueryState(e, t) {
          var r;
          return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state;
        }
        removeQueries(e, t) {
          let [r] = f(e, t),
            n = this.queryCache;
          O.batch(() => {
            n.findAll(r).forEach((e) => {
              n.remove(e);
            });
          });
        }
        resetQueries(e, t, r) {
          let [n, i] = f(e, t, r),
            s = this.queryCache,
            o = { type: 'active', ...n };
          return O.batch(
            () => (
              s.findAll(n).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(o, i)
            )
          );
        }
        cancelQueries(e, t, r) {
          let [n, i = {}] = f(e, t, r);
          void 0 === i.revert && (i.revert = !0);
          let s = O.batch(() => this.queryCache.findAll(n).map((e) => e.cancel(i)));
          return Promise.all(s).then(o).catch(o);
        }
        invalidateQueries(e, t, r) {
          let [n, i] = f(e, t, r);
          return O.batch(() => {
            var e, t;
            if (
              (this.queryCache.findAll(n).forEach((e) => {
                e.invalidate();
              }),
              'none' === n.refetchType)
            )
              return Promise.resolve();
            let r = { ...n, type: null != (e = null != (t = n.refetchType) ? t : n.type) ? e : 'active' };
            return this.refetchQueries(r, i);
          });
        }
        refetchQueries(e, t, r) {
          let [n, i] = f(e, t, r),
            s = O.batch(() =>
              this.queryCache
                .findAll(n)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  var t;
                  return e.fetch(void 0, { ...i, cancelRefetch: null == (t = null == i ? void 0 : i.cancelRefetch) || t, meta: { refetchPage: n.refetchPage } });
                })
            ),
            a = Promise.all(s).then(o);
          return (null != i && i.throwOnError) || (a = a.catch(o)), a;
        }
        fetchQuery(e, t, r) {
          let n = c(e, t, r),
            i = this.defaultQueryOptions(n);
          void 0 === i.retry && (i.retry = !1);
          let s = this.queryCache.build(this, i);
          return s.isStaleByTime(i.staleTime) ? s.fetch(i) : Promise.resolve(s.state.data);
        }
        prefetchQuery(e, t, r) {
          return this.fetchQuery(e, t, r).then(o).catch(o);
        }
        fetchInfiniteQuery(e, t, r) {
          let n = c(e, t, r);
          return (
            (n.behavior = {
              onFetch: (e) => {
                e.fetchFn = () => {
                  var t, r, n, i, s, o, a;
                  let u;
                  let c = null == (t = e.fetchOptions) ? void 0 : null == (r = t.meta) ? void 0 : r.refetchPage,
                    l = null == (n = e.fetchOptions) ? void 0 : null == (i = n.meta) ? void 0 : i.fetchMore,
                    f = null == l ? void 0 : l.pageParam,
                    h = (null == l ? void 0 : l.direction) === 'forward',
                    d = (null == l ? void 0 : l.direction) === 'backward',
                    p = (null == (s = e.state.data) ? void 0 : s.pages) || [],
                    g = (null == (o = e.state.data) ? void 0 : o.pageParams) || [],
                    m = g,
                    y = !1,
                    b = (t) => {
                      Object.defineProperty(t, 'signal', {
                        enumerable: !0,
                        get: () => {
                          var t, r;
                          return (
                            null != (t = e.signal) && t.aborted
                              ? (y = !0)
                              : null == (r = e.signal) ||
                                r.addEventListener('abort', () => {
                                  y = !0;
                                }),
                            e.signal
                          );
                        },
                      });
                    },
                    w = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
                    v = (e, t, r, n) => ((m = n ? [t, ...m] : [...m, t]), n ? [r, ...e] : [...e, r]),
                    A = (t, r, n, i) => {
                      if (y) return Promise.reject('Cancelled');
                      if (void 0 === n && !r && t.length) return Promise.resolve(t);
                      let s = { queryKey: e.queryKey, pageParam: n, meta: e.options.meta };
                      b(s);
                      let o = w(s),
                        a = Promise.resolve(o).then((e) => v(t, n, e, i));
                      return a;
                    };
                  if (p.length) {
                    if (h) {
                      let t = void 0 !== f,
                        r = t ? f : G(e.options, p);
                      u = A(p, t, r);
                    } else if (d) {
                      let t = void 0 !== f,
                        r = t ? f : null == (a = e.options).getPreviousPageParam ? void 0 : a.getPreviousPageParam(p[0], p);
                      u = A(p, t, r, !0);
                    } else {
                      m = [];
                      let t = void 0 === e.options.getNextPageParam,
                        r = !c || !p[0] || c(p[0], 0, p);
                      u = r ? A([], t, g[0]) : Promise.resolve(v([], g[0], p[0]));
                      for (let r = 1; r < p.length; r++)
                        u = u.then((n) => {
                          let i = !c || !p[r] || c(p[r], r, p);
                          if (i) {
                            let i = t ? g[r] : G(e.options, n);
                            return A(n, t, i);
                          }
                          return Promise.resolve(v(n, g[r], p[r]));
                        });
                    }
                  } else u = A([]);
                  let C = u.then((e) => ({ pages: e, pageParams: m }));
                  return C;
                };
              },
            }),
            this.fetchQuery(n)
          );
        }
        prefetchInfiniteQuery(e, t, r) {
          return this.fetchInfiniteQuery(e, t, r).then(o).catch(o);
        }
        resumePausedMutations() {
          return this.mutationCache.resumePausedMutations();
        }
        getQueryCache() {
          return this.queryCache;
        }
        getMutationCache() {
          return this.mutationCache;
        }
        getLogger() {
          return this.logger;
        }
        getDefaultOptions() {
          return this.defaultOptions;
        }
        setDefaultOptions(e) {
          this.defaultOptions = e;
        }
        setQueryDefaults(e, t) {
          let r = this.queryDefaults.find((t) => g(e) === g(t.queryKey));
          r ? (r.defaultOptions = t) : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          if (!e) return;
          let t = this.queryDefaults.find((t) => m(e, t.queryKey));
          return null == t ? void 0 : t.defaultOptions;
        }
        setMutationDefaults(e, t) {
          let r = this.mutationDefaults.find((t) => g(e) === g(t.mutationKey));
          r ? (r.defaultOptions = t) : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          if (!e) return;
          let t = this.mutationDefaults.find((t) => m(e, t.mutationKey));
          return null == t ? void 0 : t.defaultOptions;
        }
        defaultQueryOptions(e) {
          if (null != e && e._defaulted) return e;
          let t = { ...this.defaultOptions.queries, ...this.getQueryDefaults(null == e ? void 0 : e.queryKey), ...e, _defaulted: !0 };
          return (
            !t.queryHash && t.queryKey && (t.queryHash = p(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode), void 0 === t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
          );
        }
        defaultMutationOptions(e) {
          return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations, ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey), ...e, _defaulted: !0 };
        }
        clear() {
          this.queryCache.clear(), this.mutationCache.clear();
        }
      }
      function W(e) {
        return e.state.isPaused;
      }
      function K(e) {
        return 'success' === e.state.status;
      }
      let H = ['added', 'removed', 'updated'];
      function J(e) {
        return H.includes(e);
      }
      async function V({ queryClient: e, persister: t, maxAge: r = 864e5, buster: n = '', hydrateOptions: i }) {
        try {
          let s = await t.restoreClient();
          if (s) {
            if (s.timestamp) {
              let o = Date.now() - s.timestamp > r,
                a = s.buster !== n;
              o || a
                ? t.removeClient()
                : (function (e, t, r) {
                    if ('object' != typeof t || null === t) return;
                    let n = e.getMutationCache(),
                      i = e.getQueryCache(),
                      s = t.mutations || [],
                      o = t.queries || [];
                    s.forEach((t) => {
                      var i;
                      n.build(e, { ...(null == r ? void 0 : null == (i = r.defaultOptions) ? void 0 : i.mutations), mutationKey: t.mutationKey }, t.state);
                    }),
                      o.forEach((t) => {
                        var n;
                        let s = i.get(t.queryHash),
                          o = { ...t.state, fetchStatus: 'idle' };
                        if (s) {
                          s.state.dataUpdatedAt < o.dataUpdatedAt && s.setState(o);
                          return;
                        }
                        i.build(e, { ...(null == r ? void 0 : null == (n = r.defaultOptions) ? void 0 : n.queries), queryKey: t.queryKey, queryHash: t.queryHash }, o);
                      });
                  })(e, s.clientState, i);
            } else t.removeClient();
          }
        } catch (e) {
          t.removeClient();
        }
      }
      async function Y({ queryClient: e, persister: t, buster: r = '', dehydrateOptions: n }) {
        let i = {
          buster: r,
          timestamp: Date.now(),
          clientState: (function (e, t = {}) {
            let r = [],
              n = [];
            if (!1 !== t.dehydrateMutations) {
              let n = t.shouldDehydrateMutation || W;
              e.getMutationCache()
                .getAll()
                .forEach((e) => {
                  n(e) && r.push({ mutationKey: e.options.mutationKey, state: e.state });
                });
            }
            if (!1 !== t.dehydrateQueries) {
              let r = t.shouldDehydrateQuery || K;
              e.getQueryCache()
                .getAll()
                .forEach((e) => {
                  r(e) && n.push({ state: e.state, queryKey: e.queryKey, queryHash: e.queryHash });
                });
            }
            return { mutations: r, queries: n };
          })(e, n),
        };
        await t.persistClient(i);
      }
      var Z = r(3162),
        X = r(3962);
      let $ = X.createContext(void 0),
        _ = X.createContext(!1);
      function ee(e, t) {
        return e || (t && 'undefined' != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = $), window.ReactQueryClientContext) : $);
      }
      let et = ({ context: e } = {}) => {
          let t = X.useContext(ee(e, X.useContext(_)));
          if (!t) throw Error('No QueryClient set, use QueryClientProvider to set one');
          return t;
        },
        er = ({ client: e, children: t, context: r, contextSharing: n = !1 }) => {
          X.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          );
          let i = ee(r, n);
          return X.createElement(_.Provider, { value: !r && n }, X.createElement(i.Provider, { value: e }, t));
        },
        en = X.createContext(!1),
        ei = () => X.useContext(en);
      en.Provider;
      let es = X.createContext(
          ((n = !1),
          {
            clearReset: () => {
              n = !1;
            },
            reset: () => {
              n = !0;
            },
            isReset: () => n,
          })
        ),
        eo = () => X.useContext(es);
      var ea = r(4076);
      let eu = ea.useSyncExternalStore;
      class ec extends B {
        constructor(e, t) {
          super(), (this.client = e), this.setOptions(t), this.bindMethods(), this.updateResult();
        }
        bindMethods() {
          (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
        }
        setOptions(e) {
          var t;
          let r = this.options;
          (this.options = this.client.defaultMutationOptions(e)),
            y(r, this.options) || this.client.getMutationCache().notify({ type: 'observerOptionsUpdated', mutation: this.currentMutation, observer: this }),
            null == (t = this.currentMutation) || t.setOptions(this.options);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var e;
            null == (e = this.currentMutation) || e.removeObserver(this);
          }
        }
        onMutationUpdate(e) {
          this.updateResult();
          let t = { listeners: !0 };
          'success' === e.type ? (t.onSuccess = !0) : 'error' === e.type && (t.onError = !0), this.notify(t);
        }
        getCurrentResult() {
          return this.currentResult;
        }
        reset() {
          (this.currentMutation = void 0), this.updateResult(), this.notify({ listeners: !0 });
        }
        mutate(e, t) {
          return (
            (this.mutateOptions = t),
            this.currentMutation && this.currentMutation.removeObserver(this),
            (this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options, variables: void 0 !== e ? e : this.options.variables })),
            this.currentMutation.addObserver(this),
            this.currentMutation.execute()
          );
        }
        updateResult() {
          let e = this.currentMutation ? this.currentMutation.state : Q(),
            t = { ...e, isLoading: 'loading' === e.status, isSuccess: 'success' === e.status, isError: 'error' === e.status, isIdle: 'idle' === e.status, mutate: this.mutate, reset: this.reset };
          this.currentResult = t;
        }
        notify(e) {
          O.batch(() => {
            if (this.mutateOptions && this.hasListeners()) {
              var t, r, n, i, s, o, a, u;
              e.onSuccess
                ? (null == (t = (r = this.mutateOptions).onSuccess) || t.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context),
                  null == (n = (i = this.mutateOptions).onSettled) || n.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context))
                : e.onError &&
                  (null == (s = (o = this.mutateOptions).onError) || s.call(o, this.currentResult.error, this.currentResult.variables, this.currentResult.context),
                  null == (a = (u = this.mutateOptions).onSettled) || a.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context));
            }
            e.listeners &&
              this.listeners.forEach(({ listener: e }) => {
                e(this.currentResult);
              });
          });
        }
      }
      function el() {}
      class ef extends B {
        constructor(e, t) {
          super(), (this.client = e), (this.options = t), (this.trackedProps = new Set()), (this.selectError = null), this.bindMethods(), this.setOptions(t);
        }
        bindMethods() {
          (this.remove = this.remove.bind(this)), (this.refetch = this.refetch.bind(this));
        }
        onSubscribe() {
          1 === this.listeners.size && (this.currentQuery.addObserver(this), eh(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return ed(this.currentQuery, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return ed(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          (this.listeners = new Set()), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
        }
        setOptions(e, t) {
          let r = this.options,
            n = this.currentQuery;
          if (
            ((this.options = this.client.defaultQueryOptions(e)),
            y(r, this.options) || this.client.getQueryCache().notify({ type: 'observerOptionsUpdated', query: this.currentQuery, observer: this }),
            void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
          )
            throw Error('Expected enabled to be a boolean');
          this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
          let i = this.hasListeners();
          i && ep(this.currentQuery, n, this.options, r) && this.executeFetch(),
            this.updateResult(t),
            i && (this.currentQuery !== n || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
          let s = this.computeRefetchInterval();
          i && (this.currentQuery !== n || this.options.enabled !== r.enabled || s !== this.currentRefetchInterval) && this.updateRefetchInterval(s);
        }
        getOptimisticResult(e) {
          let t = this.client.getQueryCache().build(this.client, e);
          return this.createResult(t, e);
        }
        getCurrentResult() {
          return this.currentResult;
        }
        trackResult(e) {
          let t = {};
          return (
            Object.keys(e).forEach((r) => {
              Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: () => (this.trackedProps.add(r), e[r]) });
            }),
            t
          );
        }
        getCurrentQuery() {
          return this.currentQuery;
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({ refetchPage: e, ...t } = {}) {
          return this.fetch({ ...t, meta: { refetchPage: e } });
        }
        fetchOptimistic(e) {
          let t = this.client.defaultQueryOptions(e),
            r = this.client.getQueryCache().build(this.client, t);
          return (r.isFetchingOptimistic = !0), r.fetch().then(() => this.createResult(r, t));
        }
        fetch(e) {
          var t;
          return this.executeFetch({ ...e, cancelRefetch: null == (t = e.cancelRefetch) || t }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(e) {
          this.updateQuery();
          let t = this.currentQuery.fetch(this.options, e);
          return (null != e && e.throwOnError) || (t = t.catch(o)), t;
        }
        updateStaleTimeout() {
          if ((this.clearStaleTimeout(), s || this.currentResult.isStale || !a(this.options.staleTime))) return;
          let e = u(this.currentResult.dataUpdatedAt, this.options.staleTime);
          this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult();
          }, e + 1);
        }
        computeRefetchInterval() {
          var e;
          return 'function' == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e;
        }
        updateRefetchInterval(e) {
          this.clearRefetchInterval(),
            (this.currentRefetchInterval = e),
            !s &&
              !1 !== this.options.enabled &&
              a(this.currentRefetchInterval) &&
              0 !== this.currentRefetchInterval &&
              (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || x.isFocused()) && this.executeFetch();
              }, this.currentRefetchInterval));
        }
        updateTimers() {
          this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
          this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
        }
        clearRefetchInterval() {
          this.refetchIntervalId && (clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0));
        }
        createResult(e, t) {
          let r;
          let n = this.currentQuery,
            i = this.options,
            s = this.currentResult,
            o = this.currentResultState,
            a = this.currentResultOptions,
            u = e !== n,
            c = u ? e.state : this.currentQueryInitialState,
            l = u ? this.currentResult : this.previousQueryResult,
            { state: f } = e,
            { dataUpdatedAt: h, error: d, errorUpdatedAt: p, fetchStatus: g, status: m } = f,
            y = !1,
            b = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              s = !r && eh(e, t),
              o = r && ep(e, n, t, i);
            (s || o) && ((g = j(e.options.networkMode) ? 'fetching' : 'paused'), h || (m = 'loading')), 'isRestoring' === t._optimisticResults && (g = 'idle');
          }
          if (t.keepPreviousData && !f.dataUpdatedAt && null != l && l.isSuccess && 'error' !== m) (r = l.data), (h = l.dataUpdatedAt), (m = l.status), (y = !0);
          else if (t.select && void 0 !== f.data) {
            if (s && f.data === (null == o ? void 0 : o.data) && t.select === this.selectFn) r = this.selectResult;
            else
              try {
                (this.selectFn = t.select), (r = t.select(f.data)), (r = P(null == s ? void 0 : s.data, r, t)), (this.selectResult = r), (this.selectError = null);
              } catch (e) {
                this.selectError = e;
              }
          } else r = f.data;
          if (void 0 !== t.placeholderData && void 0 === r && 'loading' === m) {
            let e;
            if (null != s && s.isPlaceholderData && t.placeholderData === (null == a ? void 0 : a.placeholderData)) e = s.data;
            else if (((e = 'function' == typeof t.placeholderData ? t.placeholderData() : t.placeholderData), t.select && void 0 !== e))
              try {
                (e = t.select(e)), (this.selectError = null);
              } catch (e) {
                this.selectError = e;
              }
            void 0 !== e && ((m = 'success'), (r = P(null == s ? void 0 : s.data, e, t)), (b = !0));
          }
          this.selectError && ((d = this.selectError), (r = this.selectResult), (p = Date.now()), (m = 'error'));
          let w = 'fetching' === g,
            v = 'loading' === m,
            A = 'error' === m,
            C = {
              status: m,
              fetchStatus: g,
              isLoading: v,
              isSuccess: 'success' === m,
              isError: A,
              isInitialLoading: v && w,
              data: r,
              dataUpdatedAt: h,
              error: d,
              errorUpdatedAt: p,
              failureCount: f.fetchFailureCount,
              failureReason: f.fetchFailureReason,
              errorUpdateCount: f.errorUpdateCount,
              isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
              isFetchedAfterMount: f.dataUpdateCount > c.dataUpdateCount || f.errorUpdateCount > c.errorUpdateCount,
              isFetching: w,
              isRefetching: w && !v,
              isLoadingError: A && 0 === f.dataUpdatedAt,
              isPaused: 'paused' === g,
              isPlaceholderData: b,
              isPreviousData: y,
              isRefetchError: A && 0 !== f.dataUpdatedAt,
              isStale: eg(e, t),
              refetch: this.refetch,
              remove: this.remove,
            };
          return C;
        }
        updateResult(e) {
          let t = this.currentResult,
            r = this.createResult(this.currentQuery, this.options);
          if (((this.currentResultState = this.currentQuery.state), (this.currentResultOptions = this.options), y(r, t))) return;
          this.currentResult = r;
          let n = { cache: !0 };
          (null == e ? void 0 : e.listeners) !== !1 &&
            (() => {
              if (!t) return !0;
              let { notifyOnChangeProps: e } = this.options;
              if ('all' === e || (!e && !this.trackedProps.size)) return !0;
              let r = new Set(null != e ? e : this.trackedProps);
              return (
                this.options.useErrorBoundary && r.add('error'),
                Object.keys(this.currentResult).some((e) => {
                  let n = this.currentResult[e] !== t[e];
                  return n && r.has(e);
                })
              );
            })() &&
            (n.listeners = !0),
            this.notify({ ...n, ...e });
        }
        updateQuery() {
          let e = this.client.getQueryCache().build(this.client, this.options);
          if (e === this.currentQuery) return;
          let t = this.currentQuery;
          (this.currentQuery = e), (this.currentQueryInitialState = e.state), (this.previousQueryResult = this.currentResult), this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this));
        }
        onQueryUpdate(e) {
          let t = {};
          'success' === e.type ? (t.onSuccess = !e.manual) : 'error' !== e.type || U(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers();
        }
        notify(e) {
          O.batch(() => {
            var t, r, n, i, s, o, a, u;
            e.onSuccess
              ? (null == (t = (r = this.options).onSuccess) || t.call(r, this.currentResult.data), null == (n = (i = this.options).onSettled) || n.call(i, this.currentResult.data, null))
              : e.onError && (null == (s = (o = this.options).onError) || s.call(o, this.currentResult.error), null == (a = (u = this.options).onSettled) || a.call(u, void 0, this.currentResult.error)),
              e.listeners &&
                this.listeners.forEach(({ listener: e }) => {
                  e(this.currentResult);
                }),
              e.cache && this.client.getQueryCache().notify({ query: this.currentQuery, type: 'observerResultsUpdated' });
          });
        }
      }
      function eh(e, t) {
        return (!1 !== t.enabled && !e.state.dataUpdatedAt && !('error' === e.state.status && !1 === t.retryOnMount)) || (e.state.dataUpdatedAt > 0 && ed(e, t, t.refetchOnMount));
      }
      function ed(e, t, r) {
        if (!1 !== t.enabled) {
          let n = 'function' == typeof r ? r(e) : r;
          return 'always' === n || (!1 !== n && eg(e, t));
        }
        return !1;
      }
      function ep(e, t, r, n) {
        return !1 !== r.enabled && (e !== t || !1 === n.enabled) && (!r.suspense || 'error' !== e.state.status) && eg(e, r);
      }
      function eg(e, t) {
        return e.isStaleByTime(t.staleTime);
      }
      var em = r(5173);
      function ey({
        queryClient: e = new z({ defaultOptions: { queries: { cacheTime: 864e5, networkMode: 'offlineFirst', refetchOnWindowFocus: !1, retry: 0 }, mutations: { networkMode: 'offlineFirst' } } }),
        storage: t = (0, Z.o6)({ storage: 'undefined' != typeof window && window.localStorage ? window.localStorage : Z.wp }),
        persister: r = 'undefined' != typeof window
          ? (function ({ storage: e, key: t = 'REACT_QUERY_OFFLINE_CACHE', throttleTime: r = 1e3, serialize: n = JSON.stringify, deserialize: s = JSON.parse, retry: o }) {
              if (e) {
                let i = (r) => {
                  try {
                    e.setItem(t, n(r));
                    return;
                  } catch (e) {
                    return e;
                  }
                };
                return {
                  persistClient: (function (e, t = 100) {
                    let r,
                      n = null;
                    return function (...i) {
                      (r = i),
                        null === n &&
                          (n = setTimeout(() => {
                            e(...r), (n = null);
                          }, t));
                    };
                  })((e) => {
                    let t = e,
                      r = i(t),
                      n = 0;
                    for (; r && t; ) n++, (t = null == o ? void 0 : o({ persistedClient: t, error: r, errorCount: n })) && (r = i(t));
                  }, r),
                  restoreClient: () => {
                    let r = e.getItem(t);
                    if (r) return s(r);
                  },
                  removeClient: () => {
                    e.removeItem(t);
                  },
                };
              }
              return { persistClient: i, restoreClient: () => void 0, removeClient: i };
            })({ key: 'cache', storage: t, serialize: (e) => e, deserialize: (e) => e })
          : void 0,
        ...n
      }) {
        let s = (0, Z._g)({ ...n, storage: t });
        return (
          r &&
            (function (e) {
              V(e).then(() => {
                (function (e) {
                  let t = e.queryClient.getQueryCache().subscribe((t) => {
                      J(t.type) && Y(e);
                    }),
                    r = e.queryClient.getMutationCache().subscribe((t) => {
                      J(t.type) && Y(e);
                    });
                })(e);
              });
            })({ queryClient: e, persister: r, dehydrateOptions: { shouldDehydrateQuery: (e) => 0 !== e.cacheTime && !1 !== e.queryKey[0].persist } }),
          Object.assign(s, { queryClient: e })
        );
      }
      var eb = X.createContext(void 0),
        ew = X.createContext(void 0);
      function ev({ children: e, config: t }) {
        return X.createElement(eb.Provider, { children: X.createElement(er, { children: e, client: t.queryClient, context: ew }), value: t });
      }
      var eA = ea.useSyncExternalStore;
      function eC(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      function eE(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!eC(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let r = t.prototype;
            return !!(eC(r) && r.hasOwnProperty('isPrototypeOf'));
          })(t)
            ? 'bigint' == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
        );
      }
      function eP(e, t, r) {
        let n = l(e, t, r);
        return (function (e, t, r) {
          var n, i;
          let s = l(e, void 0, void 0),
            o = et({ context: s.context }),
            [a] = X.useState(() => new ec(o, s));
          X.useEffect(() => {
            a.setOptions(s);
          }, [a, s]);
          let u = eu(
              X.useCallback((e) => a.subscribe(O.batchCalls(e)), [a]),
              () => a.getCurrentResult(),
              () => a.getCurrentResult()
            ),
            c = X.useCallback(
              (e, t) => {
                a.mutate(e, t).catch(el);
              },
              [a]
            );
          if (u.error && ((n = a.options.useErrorBoundary), (i = [u.error]), 'function' == typeof n ? n(...i) : !!n)) throw u.error;
          return { ...u, mutate: c, mutateAsync: u.mutate };
        })({ context: ew, ...n });
      }
      function eI(e, t, r) {
        let n = Array.isArray(e) ? ('function' == typeof t ? { ...r, queryKey: e, queryFn: t } : { ...t, queryKey: e }) : e,
          i = (function (e, t) {
            var r, n;
            let i = et({ context: e.context }),
              s = ei(),
              o = eo(),
              a = i.defaultQueryOptions({ ...e, queryKeyHashFn: eE });
            (a._optimisticResults = s ? 'isRestoring' : 'optimistic'),
              a.onError && (a.onError = O.batchCalls(a.onError)),
              a.onSuccess && (a.onSuccess = O.batchCalls(a.onSuccess)),
              a.onSettled && (a.onSettled = O.batchCalls(a.onSettled)),
              a.suspense && 'number' != typeof a.staleTime && (a.staleTime = 1e3),
              (a.suspense || a.useErrorBoundary) && !o.isReset() && (a.retryOnMount = !1);
            let [u] = X.useState(() => new t(i, a)),
              c = u.getOptimisticResult(a);
            if (
              (eA(
                X.useCallback((e) => (s ? () => void 0 : u.subscribe(O.batchCalls(e))), [u, s]),
                () => u.getCurrentResult(),
                () => u.getCurrentResult()
              ),
              X.useEffect(() => {
                o.clearReset();
              }, [o]),
              X.useEffect(() => {
                u.setOptions(a, { listeners: !1 });
              }, [a, u]),
              a.suspense && c.isLoading && c.isFetching && !s)
            )
              throw u
                .fetchOptimistic(a)
                .then(({ data: e }) => {
                  a.onSuccess?.(e), a.onSettled?.(e, null);
                })
                .catch((e) => {
                  o.clearReset(), a.onError?.(e), a.onSettled?.(void 0, e);
                });
            if (c.isError && !o.isReset() && !c.isFetching && ((r = a.useErrorBoundary), (n = [c.error, u.getCurrentQuery()]), 'function' == typeof r ? r(...n) : !!r)) throw c.error;
            let l = 'loading' === c.status && 'idle' === c.fetchStatus ? 'idle' : c.status,
              f = 'loading' === l && 'fetching' === c.fetchStatus;
            return { ...c, defaultedOptions: a, isIdle: 'idle' === l, isLoading: f, observer: u, status: l };
          })({ context: ew, ...n }, ef),
          s = {
            data: i.data,
            error: i.error,
            fetchStatus: i.fetchStatus,
            isError: i.isError,
            isFetched: i.isFetched,
            isFetchedAfterMount: i.isFetchedAfterMount,
            isFetching: i.isFetching,
            isIdle: i.isIdle,
            isLoading: i.isLoading,
            isRefetching: i.isRefetching,
            isSuccess: i.isSuccess,
            refetch: i.refetch,
            status: i.status,
            internal: {
              dataUpdatedAt: i.dataUpdatedAt,
              errorUpdatedAt: i.errorUpdatedAt,
              failureCount: i.failureCount,
              isFetchedAfterMount: i.isFetchedAfterMount,
              isLoadingError: i.isLoadingError,
              isPaused: i.isPaused,
              isPlaceholderData: i.isPlaceholderData,
              isPreviousData: i.isPreviousData,
              isRefetchError: i.isRefetchError,
              isStale: i.isStale,
              remove: i.remove,
            },
          };
        return i.defaultedOptions.notifyOnChangeProps
          ? s
          : (function (e, t) {
              let r = {};
              return (
                Object.keys(e).forEach((n) => {
                  Object.defineProperty(r, n, { configurable: !1, enumerable: !0, get: () => (t.trackedProps.add(n), e[n]) });
                }),
                r
              );
            })(s, i.observer);
      }
      var eO = () => et({ context: ew });
      function eB({ chainId: e } = {}) {
        return (0, em.useSyncExternalStoreWithSelector)(
          (t) => (0, Z.pC)({ chainId: e }, t),
          () => (0, Z.uV)({ chainId: e }),
          () => (0, Z.uV)({ chainId: e }),
          (e) => e,
          (e, t) => e.uid === t.uid
        );
      }
      function ex({ chainId: e } = {}) {
        let t = eB({ chainId: e });
        return t.chain.id;
      }
      function eS({ chainId: e, scopeKey: t }) {
        return [{ entity: 'blockNumber', chainId: e, scopeKey: t }];
      }
      function eM({ queryKey: [{ chainId: e }] }) {
        return (0, Z.RQ)({ chainId: e });
      }
      var eR = (e) => 'object' == typeof e && !Array.isArray(e);
      function ej({ onConnect: e, onDisconnect: t } = {}) {
        let r = X.useCallback(
            (r) => {
              let n = (0, Z.iE)(),
                i = n.subscribe(
                  (e) => ({ address: e.data?.account, connector: e.connector, status: e.status }),
                  (n, i) => (
                    e && 'connected' !== i.status && 'connected' === n.status && e({ address: n.address, connector: n.connector, isReconnected: 'reconnecting' === i.status }),
                    t && 'connected' === i.status && 'disconnected' === n.status && t(),
                    r((0, Z.D0)())
                  )
                );
              return i;
            },
            [e, t]
          ),
          n = (function (e, t, r = t, n = Z.vZ) {
            let i = X.useRef([]),
              s = (0, em.useSyncExternalStoreWithSelector)(
                e,
                t,
                r,
                (e) => e,
                (e, t) => {
                  if (eR(e) && eR(t) && i.current.length) {
                    for (let r of i.current) {
                      let i = n(e[r], t[r]);
                      if (!i) return !1;
                    }
                    return !0;
                  }
                  return n(e, t);
                }
              );
            if (eR(s)) {
              let e = { ...s };
              return (
                Object.defineProperties(
                  e,
                  Object.entries(e).reduce((e, [t, r]) => ({ ...e, [t]: { configurable: !1, enumerable: !0, get: () => (i.current.includes(t) || i.current.push(t), r) } }), {})
                ),
                e
              );
            }
            return s;
          })(r, Z.D0),
          i = X.useRef(),
          { address: s, connector: o, status: a } = n;
        return (
          X.useEffect(() => {
            e && void 0 === i.current && 'connected' === a && e({ address: s, connector: o, isReconnected: !0 }), (i.current = a);
          }, []),
          n
        );
      }
      function ek({ queryKey: [{ address: e, chainId: t, formatUnits: r, token: n }] }) {
        if (!e) throw Error('address is required');
        return (0, Z.EG)({ address: e, chainId: t, formatUnits: r, token: n });
      }
      function eU({ address: e, cacheTime: t, chainId: r, enabled: n = !0, formatUnits: i, scopeKey: s, staleTime: o, suspense: a, token: u, watch: c, onError: l, onSettled: f, onSuccess: h } = {}) {
        let d = ex({ chainId: r }),
          p = X.useMemo(
            () =>
              (function ({ address: e, chainId: t, formatUnits: r, scopeKey: n, token: i }) {
                return [{ entity: 'balance', address: e, chainId: t, formatUnits: r, scopeKey: n, token: i }];
              })({ address: e, chainId: d, formatUnits: i, scopeKey: s, token: u }),
            [e, d, i, s, u]
          ),
          g = eI(p, ek, { cacheTime: t, enabled: !!(n && e), staleTime: o, suspense: a, onError: l, onSettled: f, onSuccess: h });
        return (
          !(function ({ chainId: e, enabled: t, queryKey: r }) {
            let n = eO(),
              i = X.useCallback(() => n.invalidateQueries({ queryKey: r }, { cancelRefetch: !1 }), [n, r]);
            !(function ({ cacheTime: e = 0, chainId: t, enabled: r = !0, scopeKey: n, staleTime: i, suspense: s, watch: o = !1, onBlock: a, onError: u, onSettled: c, onSuccess: l } = {}) {
              let f = ex({ chainId: t }),
                h = eB({ chainId: f }),
                d = (function ({ chainId: e } = {}) {
                  return (0, em.useSyncExternalStoreWithSelector)(
                    (t) => (0, Z.fq)({ chainId: e }, t),
                    () => (0, Z.jr)({ chainId: e }),
                    () => (0, Z.jr)({ chainId: e }),
                    (e) => e,
                    (e, t) => e?.uid === t?.uid
                  );
                })({ chainId: f }),
                p = eO();
              X.useEffect(() => {
                if (!r || (!o && !a)) return;
                let e = d ?? h,
                  t = e.watchBlockNumber({
                    onBlockNumber: (e) => {
                      o && p.setQueryData(eS({ chainId: f, scopeKey: n }), e), a && a(e);
                    },
                    emitOnBegin: !0,
                  });
                return t;
              }, [f, n, a, h, p, o, d, r]),
                eI(eS({ scopeKey: n, chainId: f }), eM, { cacheTime: e, enabled: r, staleTime: i, suspense: s, onError: u, onSettled: c, onSuccess: l });
            })({ chainId: e, enabled: t, onBlock: t ? i : void 0, scopeKey: t ? void 0 : 'idle' });
          })({ chainId: d, enabled: !!(n && c && e), queryKey: p }),
          g
        );
      }
      var eL = (e) => [{ entity: 'connect', ...e }],
        eD = (e) => {
          let { connector: t, chainId: r } = e;
          if (!t) throw Error('connector is required');
          return (0, Z.$j)({ connector: t, chainId: r });
        };
      function eF({ chainId: e, connector: t, onError: r, onMutate: n, onSettled: i, onSuccess: s } = {}) {
        let o = (function () {
            let e = X.useContext(eb);
            if (!e) throw Error('`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig');
            return e;
          })(),
          {
            data: a,
            error: u,
            isError: c,
            isIdle: l,
            isLoading: f,
            isSuccess: h,
            mutate: d,
            mutateAsync: p,
            reset: g,
            status: m,
            variables: y,
          } = eP(eL({ connector: t, chainId: e }), eD, { onError: r, onMutate: n, onSettled: i, onSuccess: s }),
          b = X.useCallback((r) => d({ chainId: r?.chainId ?? e, connector: r?.connector ?? t }), [e, t, d]),
          w = X.useCallback((r) => p({ chainId: r?.chainId ?? e, connector: r?.connector ?? t }), [e, t, p]);
        return { connect: b, connectAsync: w, connectors: o.connectors, data: a, error: u, isError: c, isIdle: l, isLoading: f, isSuccess: h, pendingConnector: y?.connector, reset: g, status: m, variables: y };
      }
      var eT = [{ entity: 'disconnect' }],
        eN = () => (0, Z.zP)();
      function eQ({ onError: e, onMutate: t, onSettled: r, onSuccess: n } = {}) {
        let {
          error: i,
          isError: s,
          isIdle: o,
          isLoading: a,
          isSuccess: u,
          mutate: c,
          mutateAsync: l,
          reset: f,
          status: h,
        } = eP(eT, eN, {
          ...(e
            ? {
                onError(t, r, n) {
                  e(t, n);
                },
              }
            : {}),
          onMutate: t,
          ...(r
            ? {
                onSettled(e, t, n, i) {
                  r(t, i);
                },
              }
            : {}),
          ...(n
            ? {
                onSuccess(e, t, r) {
                  n(r);
                },
              }
            : {}),
        });
        return { disconnect: c, disconnectAsync: l, error: i, isError: s, isIdle: o, isLoading: a, isSuccess: u, reset: f, status: h };
      }
      function eq({ queryKey: [{ address: e, chainId: t }] }) {
        if (!e) throw Error('address is required');
        return (0, Z.Lk)({ address: e, chainId: t });
      }
      function eG({ address: e, cacheTime: t, chainId: r, enabled: n = !0, scopeKey: i, staleTime: s = 864e5, suspense: o, onError: a, onSettled: u, onSuccess: c } = {}) {
        let l = ex({ chainId: r });
        return eI(
          (function ({ address: e, chainId: t, scopeKey: r }) {
            return [{ entity: 'ensName', address: e, chainId: t, scopeKey: r }];
          })({ address: e, chainId: l, scopeKey: i }),
          eq,
          { cacheTime: t, enabled: !!(n && e && l), staleTime: s, suspense: o, onError: a, onSettled: u, onSuccess: c }
        );
      }
    },
  },
]);
