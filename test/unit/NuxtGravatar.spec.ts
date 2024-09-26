import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NuxtGravatar from '../../src/components/NuxtGravatar.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-expressions, @stylistic/max-statements-per-line, @typescript-eslint/no-unused-vars, no-var, @stylistic/space-before-blocks
function sha256($){ function x($, x){ const _ = (65535 & $) + (65535 & x); return ($ >> 16) + (x >> 16) + (_ >> 16) << 16 | 65535 & _ } function _($, x){ return $ >>> x | $ << 32 - x } function r($, x){ return $ >>> x } function C($, x, _){ return $ & x ^ ~$ & _ } function n($, x, _){ return $ & x ^ $ & _ ^ x & _ } function F($){ return _($, 2) ^ _($, 13) ^ _($, 22) } function A($){ return _($, 6) ^ _($, 11) ^ _($, 25) } function B($){ let x; return _($, 7) ^ _($, 18) ^ (x = $) >>> 3 } function t($){ let x; return _($, 17) ^ _($, 19) ^ (x = $) >>> 10 } return (function $(x){ for (var _ = '0123456789abcdef', r = '', C = 0; C < 4 * x.length; C++)r += _.charAt(x[C >> 2] >> (3 - C % 4) * 8 + 4 & 15) + _.charAt(x[C >> 2] >> (3 - C % 4) * 8 & 15); return r }(function $(_, r){ var C, o, e, E, u, f, a, D, c, h, i, v, d = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], g = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], l = Array(64); _[r >> 5] |= 128 << 24 - r % 32, _[(r + 64 >> 9 << 4) + 15] = r; for (var c = 0; c < _.length; c += 16){ C = g[0], o = g[1], e = g[2], E = g[3], u = g[4], f = g[5], a = g[6], D = g[7]; for (var m, b, p, h = 0; h < 64; h++)h < 16 ? l[h] = _[h + c] : l[h] = x(x(x(t(l[h - 2]), l[h - 7]), B(l[h - 15])), l[h - 16]), i = x(x(x(x(D, A(u)), (m = u, b = f, m & b ^ ~m & (p = a))), d[h]), l[h]), v = x(F(C), n(C, o, e)), D = a, a = f, f = u, u = x(E, i), E = e, e = o, o = C, C = x(i, v); g[0] = x(C, g[0]), g[1] = x(o, g[1]), g[2] = x(e, g[2]), g[3] = x(E, g[3]), g[4] = x(u, g[4]), g[5] = x(f, g[5]), g[6] = x(a, g[6]), g[7] = x(D, g[7]) } return g }((function $(x){ for (var _ = [], r = 0; r < 8 * x.length; r += 8)_[r >> 5] |= (255 & x.charCodeAt(r / 8)) << 24 - r % 32; return _ }($ = (function $(x){ x = x.replace(/\r\n/g, '\n'); for (var _ = '', r = 0; r < x.length; r++){ const C = x.charCodeAt(r); C < 128 ? _ += String.fromCharCode(C) : C > 127 && C < 2048 ? (_ += String.fromCharCode(C >> 6 | 192), _ += String.fromCharCode(63 & C | 128)) : (_ += String.fromCharCode(C >> 12 | 224), _ += String.fromCharCode(C >> 6 & 63 | 128), _ += String.fromCharCode(63 & C | 128)) } return _ }($)))), 8 * $.length))) }

describe('NuxtGravatar Component', () => {
  it('has email property', () => {
    expect(NuxtGravatar.props.alt.type).toBe(String)
    expect(NuxtGravatar.props.alt.default).toBe('')
  })

  it('has email property', () => {
    expect(NuxtGravatar.props.email.type).toBe(String)
    expect(NuxtGravatar.props.email.default).toBe('')
  })

  it('has hash property', () => {
    expect(NuxtGravatar.props.hash.type).toBe(String)
    expect(NuxtGravatar.props.hash.default).toBe('')
  })

  it('has size property', () => {
    expect(NuxtGravatar.props.size.type).toBe(Number)
    expect(NuxtGravatar.props.size.default).toBe(320)
  })

  it('has defaultImg property', () => {
    expect(NuxtGravatar.props.defaultImg.type).toBe(String)
    expect(NuxtGravatar.props.defaultImg.default).toBe('retro')
  })

  it('has rating property', () => {
    expect(NuxtGravatar.props.rating.type).toBe(String)
    expect(NuxtGravatar.props.rating.default).toBe('g')
  })

  it('has classList property', () => {
    expect(NuxtGravatar.props.classList.type).toBe(String)
    expect(NuxtGravatar.props.classList.default).toBe('')
  })
})

describe('computed', () => {
  describe('url', () => {
    const email = 'foo@bar.com'
    const hash = sha256(email)
    const gravatar = shallowMount(NuxtGravatar, {
      props: {
        email: email,
      },
    })

    it('has correct url by default', () => {
      expect(gravatar.attributes('src')).toEqual(`https://gravatar.com/avatar/${hash}?d=retro&s=320&r=g`)
    })

    const anotherEmail = 'BAR@FOO.com'

    it('converts email to lower case', () => {
      const lowerCaseEmail = anotherEmail.toLowerCase()
      const expectedHash = sha256(lowerCaseEmail)
      const anotherGravatar = shallowMount(NuxtGravatar, {
        props: {
          email: anotherEmail,
        },
      })

      expect(anotherGravatar.attributes('src')).toEqual(`https://gravatar.com/avatar/${expectedHash}?d=retro&s=320&r=g`)
    })

    it('uses given sha256 hash', () => {
      const sha256Hash = '1b07526f85116c080e6ba29a40e7a2d0e344bda42ccca3632f2c7346719d7ba9'
      const anotherGravatar = shallowMount(NuxtGravatar, {
        props: {
          hash: sha256Hash,
        },
      })

      expect(anotherGravatar.attributes('src')).toEqual(`https://gravatar.com/avatar/${sha256Hash}?d=retro&s=320&r=g`)
    })

    it('passes size', () => {
      const size = 128
      const anotherGravatar = shallowMount(NuxtGravatar, {
        props: {
          email: email,
          size: size,
        },
      })

      expect(anotherGravatar.attributes('src')).toEqual(`https://gravatar.com/avatar/${hash}?d=retro&s=${size}&r=g`)
    })

    it('passes default image', () => {
      const defaultImg = 'mm'
      const anotherGravatar = shallowMount(NuxtGravatar, {
        props: {
          email: email,
          defaultImg: defaultImg,
        },
      })

      expect(anotherGravatar.attributes('src')).toEqual(`https://gravatar.com/avatar/${hash}?d=${defaultImg}&s=320&r=g`)
    })

    it('passes rating', () => {
      const rating = 'pg'
      const anotherGravatar = shallowMount(NuxtGravatar, {
        props: {
          email: email,
          rating: rating,
        },
      })

      expect(anotherGravatar.attributes('src')).toEqual(`https://gravatar.com/avatar/${hash}?d=retro&s=320&r=${rating}`)
    })
  })
})

describe('template', () => {
  const email = 'foo@bar.com'

  let gravatar = shallowMount(NuxtGravatar, {
    props: {
      email: email,
    },
  })

  it('sets alt by default', () => {
    expect(gravatar.attributes('alt')).toEqual('')
  })

  it('sets alt to given one', () => {
    const alt = 'FooBar'

    gravatar = shallowMount(NuxtGravatar, {
      props: {
        email: email,
        alt: alt,
      },
    })

    expect(gravatar.attributes('alt')).toEqual(alt)
  })

  it('is image', () => {
    expect(gravatar.element.tagName).toEqual('IMG')
  })

  it('applies classList correctly', () => {
    const classes = 'custom-class another-class'

    gravatar = shallowMount(NuxtGravatar, {
      props: {
        email: email,
        classList: classes,
      },
    })

    expect(gravatar.classes()).toContain('custom-class')
    expect(gravatar.classes()).toContain('another-class')
  })
})
