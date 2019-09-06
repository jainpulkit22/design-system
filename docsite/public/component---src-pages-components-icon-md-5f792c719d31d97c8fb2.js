;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    434: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return o
        }),
        n.d(t, 'default', function() {
          return c
        })
      n(12), n(13), n(9), n(17), n(23), n(0)
      var a = n(90),
        r = n(462)
      var o = {},
        l = { _frontmatter: o },
        i = r.b
      function c(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              r = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, ['components'])
        return Object(a.b)(
          i,
          Object.assign({}, l, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', null, 'Icon'),
          Object(a.b)(
            'p',
            null,
            'Use the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Icon'),
            ' component for SVG icons.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Icon\n  name='flame'\n  color='orange'\n/>\n",
            ),
          ),
          Object(a.b)('h2', null, 'Accessibility for Icons'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              Object.assign({ parentName: 'pre' }, { className: 'language-.jsx' }),
              "<Icon\n  name='Chat'\n  color='orange'\n  title='Airplane Icon'\n  titleId='unique-airplane-title-id'\n  desc='Airplane Icon description'\n  descId='unique-airplane-desc-id'\n/>\n",
            ),
          ),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('inlineCode', { parentName: 'p' }, 'aria-hidden="true"'),
            ' and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'focusable="false"'),
            ' are set by default to icons.\nWhen a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'title'),
            ' prop is passed, ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'aria-hidden'),
            ' is set to false.',
          ),
          Object(a.b)(
            'p',
            null,
            'In order to support older browsers, please pass in a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'titleId'),
          ),
          Object(a.b)(
            'p',
            null,
            'To add a descripton, please pass in ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'desc'),
            ' and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'descId'),
            ' .\n',
            Object(a.b)('inlineCode', { parentName: 'p' }, '<desc id="{unique-desc-id}">{description}</desc>'),
            ' is generated when ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'desc'),
            ' and ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'descId'),
            ' props are passed',
          ),
          Object(a.b)('h2', null, 'Props'),
          Object(a.b)(
            'table',
            null,
            Object(a.b)(
              'thead',
              { parentName: 'table' },
              Object(a.b)(
                'tr',
                { parentName: 'thead' },
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Prop'),
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Type'),
                Object(a.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'Description'),
              ),
            ),
            Object(a.b)(
              'tbody',
              { parentName: 'table' },
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'name'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Icon key name'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'size'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Width and height in pixels'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'color'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'A color key from ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'theme.colors'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'title'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Title for to the icon'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'titleId'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Unique ID for the ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, '<title>'),
                ),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'desc'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'Description for the icon'),
              ),
              Object(a.b)(
                'tr',
                { parentName: 'tbody' },
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  Object(a.b)('inlineCode', { parentName: 'td' }, 'descId'),
                ),
                Object(a.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(a.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Unique ID for the ',
                  Object(a.b)('inlineCode', { parentName: 'td' }, '<desc>'),
                ),
              ),
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'For a full list of available icons, see ',
            Object(a.b)('a', Object.assign({ parentName: 'p' }, { href: '/iconography' }), 'Iconography'),
            '.',
          ),
        )
      }
      c.isMDXComponent = !0
    },
    457: function(e, t, n) {
      'use strict'
      n.d(t, 'b', function() {
        return d
      })
      var a = n(0),
        r = n.n(a),
        o = n(89),
        l = n.n(o)
      n.d(t, 'a', function() {
        return l.a
      })
      n(458), n(27).default.enqueue
      var i = r.a.createContext({})
      function c(e) {
        var t = e.staticQueryData,
          n = e.data,
          a = e.query,
          o = e.render,
          l = n ? n.data : t[a] && t[a].data
        return r.a.createElement(
          r.a.Fragment,
          null,
          l && o(l),
          !l && r.a.createElement('div', null, 'Loading (StaticQuery)'),
        )
      }
      var d = function(e) {
        var t = e.data,
          n = e.query,
          a = e.render,
          o = e.children
        return r.a.createElement(i.Consumer, null, function(e) {
          return r.a.createElement(c, { data: t, query: n, render: a || o, staticQueryData: e })
        })
      }
    },
    458: function(e, t, n) {
      var a
      e.exports = ((a = n(459)) && a.default) || a
    },
    459: function(e, t, n) {
      'use strict'
      n.r(t)
      n(14), n(12), n(13), n(9), n(17)
      var a = n(0),
        r = n.n(a),
        o = n(122)
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      t.default = function(e) {
        var t = e.location,
          n = e.pageResources
        return n
          ? r.a.createElement(
              o.a,
              (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n)
                  'function' == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                      Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                      }),
                    )),
                    a.forEach(function(t) {
                      l(e, t, n[t])
                    })
                }
                return e
              })({ location: t, pageResources: n }, n.json),
            )
          : null
      }
    },
    460: function(e) {
      e.exports = { data: { site: { siteMetadata: { title: 'Priceline One Design System' } } } }
    },
    461: function(e) {
      e.exports = {
        data: {
          allMdx: {
            edges: [
              { node: { frontmatter: { title: 'Getting Started', path: '/Getting-Started/' } } },
              { node: { frontmatter: { title: 'Cheatsheet', path: '/Cheatsheet' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: 'Absolute', path: '/components/Absolute' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: 'Box', path: '/components/Box' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: 'Button', path: '/components/Button' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: 'Text', path: '/components/Text' } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
              { node: { frontmatter: { title: '', path: null } } },
            ],
          },
        },
      }
    },
    462: function(e, t, n) {
      'use strict'
      var a = n(460),
        r = n(0),
        o = n.n(r),
        l = n(463),
        i = n.n(l),
        c = n(457),
        d = n(90),
        b = n(6),
        m = n(72),
        p = b.d.div.withConfig({ displayName: 'Table__OverflowAuto', componentId: 'hhl231-0' })([
          'max-width:100%;overflow-x:auto;',
        ]),
        s = Object(b.d)(function(e) {
          return o.a.createElement(p, null, o.a.createElement('table', e))
        }).withConfig({ displayName: 'Table', componentId: 'hhl231-1' })(
          [
            'border-collapse:separate;border-spacing:0;max-width:100%;width:100%;',
            ' & th{text-align:left;background-color:#f6f8fa;vertical-align:bottom;}& td{vertical-align:top;&:first-child{min-width:128px;}}& th,& td{padding-left:8px;padding-right:8px;padding-top:12px;padding-bottom:12px;line-height:inherit;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:',
            ';}',
          ],
          m.h,
          function(e) {
            return e.theme.colors.borderGray
          },
        )
      s.defaultProps = { my: 3 }
      var u = {
          table: s,
          h2: Object(b.d)(m.d.h2).withConfig({ displayName: 'mdx__H2', componentId: 'vknmi5-0' })(
            [':not(:first-of-type){margin-top:', 'px;}'],
            function(e) {
              return e.theme.space[5]
            },
          ),
        },
        f = (n(19), n(12), n(13), n(9), n(17), n(461)),
        g = n(464),
        h = n.n(g),
        C = n(465),
        O = n.n(C),
        j = function() {
          return o.a.createElement(c.b, {
            query: '3595471886',
            render: function(e) {
              var t = h()(e, 'allMdx.edges', []).reduce(function(e, t) {
                var n = h()(t, 'node.frontmatter')
                if (n && n.path) {
                  var a = n.path,
                    r = n.title,
                    o = a.split('/').filter(function(e) {
                      return !!e
                    })
                  O()(e, o.join('.'), { title: r, path: a })
                }
                return e
              }, {})
              return o.a.createElement(
                'ul',
                null,
                Object.keys(t).map(function(e) {
                  return (function e(t, n) {
                    return t && t.path && t.title
                      ? o.a.createElement('li', { key: t.path }, o.a.createElement(c.a, { to: t.path }, t.title))
                      : o.a.createElement(
                          'li',
                          { key: n },
                          n,
                          o.a.createElement(
                            'ul',
                            null,
                            Object.keys(t).map(function(n) {
                              return e(t[n], n)
                            }),
                          ),
                        )
                  })(t[e], e)
                }),
              )
            },
            data: f,
          })
        },
        y = function(e) {
          return o.a.createElement(
            'svg',
            { width: '144px', height: '24px', viewBox: '0 0 144 24', xmlns: 'http://www.w3.org/2000/svg' },
            o.a.createElement(
              'g',
              {
                stroke: 'none',
                strokeWidth: '1',
                fill: 'none',
                fillRule: 'evenodd',
                transform: 'translate(-32.000000, -24.000000)',
              },
              o.a.createElement(
                'g',
                { fill: '#007aff', fillRule: 'nonzero' },
                o.a.createElement('path', {
                  d:
                    'M142.218803,30.4153166 C143.224739,30.9913654 144.011421,31.7909434 144.578872,32.8140748 C145.146323,33.8372061 145.430044,34.9935851 145.430044,36.2832464 C145.430044,37.5901033 145.146323,38.7550799 144.578872,39.7782112 C144.011421,40.8013425 143.224739,41.6009206 142.218803,42.1769693 C141.212868,42.753018 140.073684,43.0410381 138.801218,43.0410381 C137.545948,43.0410381 136.415361,42.753018 135.409426,42.1769693 C134.40349,41.6009206 133.612509,40.8013425 133.036461,39.7782112 C132.460412,38.7550799 132.172392,37.5901033 132.172392,36.2832464 C132.172392,34.9935851 132.460412,33.8372061 133.036461,32.8140748 C133.612509,31.7909434 134.40349,30.9913654 135.409426,30.4153166 C136.415361,29.8392679 137.545948,29.5512479 138.801218,29.5512479 C140.073684,29.5512479 141.212868,29.8392679 142.218803,30.4153166 Z M135.938184,31.3051785 C135.095605,31.7866521 134.433589,32.4615647 133.952116,33.3299367 C133.470642,34.1983087 133.229909,35.1827354 133.229909,36.2832464 C133.229909,37.4009529 133.470642,38.3982761 133.952116,39.2752458 C134.433589,40.1522155 135.095605,40.831427 135.938184,41.3129005 C136.780763,41.7943741 137.735098,42.0351073 138.801218,42.0351073 C139.867338,42.0351073 140.825972,41.7943741 141.677148,41.3129005 C142.528325,40.831427 143.190341,40.1522155 143.663217,39.2752458 C144.136093,38.3982761 144.372527,37.4009529 144.372527,36.2832464 C144.372527,35.1827354 144.136093,34.1983087 143.663217,33.3299367 C143.190341,32.4615647 142.528325,31.7866521 141.677148,31.3051785 C140.825972,30.823705 139.867338,30.5829718 138.801218,30.5829718 C137.735098,30.5829718 136.780763,30.823705 135.938184,31.3051785 Z M158.683398,30.9569717 C159.603356,31.8941256 160.063328,33.1794688 160.063328,34.8130398 L160.063328,43.015245 L158.980018,43.015245 L158.980018,35.0193846 C158.980018,33.6437459 158.593126,32.5690442 157.819329,31.7952474 C157.045532,31.0214506 155.97083,30.634558 154.595192,30.634558 C153.064794,30.6689489 151.839634,31.1375189 150.919675,32.0402818 C149.999717,32.9430448 149.479561,34.1768023 149.359193,35.7415914 L149.359193,43.015245 L148.275883,43.015245 L148.275883,29.577041 L149.359193,29.577041 L149.359193,33.007523 C149.806275,31.907012 150.498383,31.0644459 151.435537,30.4797994 C152.372691,29.8951529 153.511875,29.5856388 154.853123,29.5512479 C156.486694,29.5512479 157.763439,30.0198178 158.683398,30.9569717 Z M172.38813,30.4411097 C173.34248,31.034354 174.064679,31.8640236 174.554751,32.9301437 C175.044822,33.9962637 175.281256,35.2171248 175.264061,36.5927636 L163.528201,36.5927636 C163.579788,37.6760791 163.846314,38.6304142 164.327787,39.4557975 C164.809261,40.2811807 165.462679,40.9217029 166.288063,41.3773833 C167.113446,41.8330636 168.041988,42.0609004 169.073717,42.0609004 C169.985078,42.0609004 170.831943,41.9018445 171.614337,41.5837281 C172.396732,41.2656116 173.063047,40.8056393 173.613303,40.2037973 L174.232337,40.900211 C173.596104,41.5880303 172.830916,42.1167836 171.936751,42.4864865 C171.042586,42.8561894 170.071056,43.0410381 169.022131,43.0410381 C167.766861,43.0410381 166.640573,42.753018 165.643235,42.1769693 C164.645897,41.6009206 163.867813,40.8013425 163.30896,39.7782112 C162.750107,38.7550799 162.470684,37.5987009 162.470684,36.3090395 C162.470684,35.0193782 162.754405,33.8587004 163.321856,32.8269713 C163.889307,31.7952422 164.667391,30.9913654 165.656132,30.4153166 C166.644872,29.8392679 167.766861,29.5512479 169.022131,29.5512479 C170.311792,29.5512479 171.433781,29.8478655 172.38813,30.4411097 Z M174.283923,35.638419 C174.18075,34.0908254 173.656296,32.852769 172.710544,31.9242129 C171.764792,30.9956567 170.535334,30.5313856 169.022131,30.5313856 C167.508928,30.5313856 166.253677,30.9999555 165.256339,31.9371094 C164.259001,32.8742633 163.691558,34.1080208 163.553994,35.638419 L174.283923,35.638419 Z M124.740383,34.8980615 C124.664429,34.3296581 124.559044,33.5807029 123.995088,32.9874617 C123.506136,32.4964375 122.76179,32.2375512 122.069662,32.2375512 C121.118342,32.2375512 120.450899,32.7027823 120.063536,33.1154719 C119.527113,33.7106237 119.397992,34.3306134 119.270769,34.8990168 L124.740383,34.8990168 L124.740383,34.8980615 Z M128.668137,39.8837718 C128.207668,40.5820961 127.744351,41.2536719 127.051273,41.9013653 C125.895828,42.9856307 124.149843,43.8129204 121.99086,43.8129204 C118.010888,43.8129204 115.211045,41.2546272 115.211045,36.8344545 C115.211045,33.5797476 116.803224,29.3974446 122.095296,29.3974446 C122.889962,29.3974446 125.202751,29.4738686 126.925001,31.3319269 C128.668137,33.2186443 128.771624,35.8533615 128.821943,37.3761095 L119.245135,37.3761095 C119.215703,39.0574374 120.167972,40.73781 122.299422,40.73781 C124.456506,40.73781 125.202751,39.3153684 125.688854,38.3591132 L128.669087,39.8828165 L128.668137,39.8837718 Z M105.788043,31.0462922 C106.172558,30.6326474 106.428902,30.3240855 107.121979,29.9878199 C107.739103,29.7308442 108.609722,29.4996617 109.561991,29.4996617 C110.360454,29.4996617 111.255758,29.653465 111.951683,30.0403614 C113.363472,30.7902719 113.720455,32.0054134 113.720455,34.0984755 L113.720455,43.3228516 L109.794599,43.3228516 L109.794599,35.7263066 C109.794599,34.5102098 109.767066,34.0736377 109.614209,33.7106237 C109.303749,32.9874617 108.611621,32.6769892 107.84164,32.6769892 C105.76051,32.6769892 105.76051,34.3564065 105.76051,36.0386896 L105.76051,43.3247622 L101.808071,43.3247622 L101.808071,29.8617203 L105.788992,29.8617203 L105.788992,31.0482028 L105.788043,31.0462922 Z M99.3205878,26.4407913 C99.3205878,27.6205867 98.3692681,28.5768419 97.1976827,28.5768419 C96.0241984,28.5768419 95.0728787,27.6196314 95.0728787,26.4407913 C95.0728787,25.2600406 96.0241984,24.3037854 97.1976827,24.3037854 C98.3692681,24.3037854 99.3205878,25.2600406 99.3205878,26.4407913 Z M95.2304826,29.8082235 L99.1354507,29.8082235 L99.1354507,43.3228516 L95.2304826,43.3228516 L95.2304826,29.8082235 Z M92.5578627,24 L92.5578627,43.3228516 L88.6044741,43.3228516 L88.6044741,24 L92.5578627,24 L92.5578627,24 Z M82.8073101,34.8980615 C82.730407,34.3296581 82.6278695,33.5807029 82.0601158,32.9874617 C81.5721135,32.4964375 80.8239698,32.2375512 80.1289937,32.2375512 C79.1767246,32.2375512 78.5111805,32.7027823 78.1276145,33.1154719 C77.5883434,33.7106237 77.4592222,34.3306134 77.3310503,34.8990168 L82.8082595,34.8990168 L82.8073101,34.8980615 Z M86.738862,39.8837718 C86.2774435,40.5820961 85.8160249,41.2536719 85.1219982,41.9013653 C83.966553,42.9856307 82.2129726,43.8129204 80.0511412,43.8129204 C76.0702194,43.8129204 73.2703771,41.2546272 73.2703771,36.8344545 C73.2703771,33.5797476 74.8635054,29.3974446 80.1527292,29.3974446 C80.9521416,29.3974446 83.2696781,29.4738686 84.992877,31.3319269 C86.7369632,33.2186443 86.8404501,35.8533615 86.8945671,37.3761095 L77.3025677,37.3761095 C77.2769333,39.0574374 78.2282531,40.73781 80.3587536,40.73781 C82.5234332,40.73781 83.2696781,39.3153684 83.7595793,38.3591132 L86.7379126,39.8828165 L86.738862,39.8837718 Z M71.2803909,39.2198384 C71.2689979,39.183537 71.2053867,39.1959559 71.1788029,39.2389444 C71.0990515,39.3803288 71.0003118,39.5226685 70.8673928,39.6774271 C70.0451943,40.6069339 69.0672908,40.6069339 68.8631653,40.6069339 C66.7573498,40.6069339 65.8829331,38.3600685 65.8829331,36.5755682 C65.8829331,34.9486924 66.6035436,32.4945269 68.7340441,32.4945269 C69.3492688,32.4945269 69.8372712,32.7008717 70.2236855,32.9588027 C70.763906,33.3495204 71.0316427,33.7411933 71.2386164,34.1462405 C71.2623519,34.1901843 71.3259631,34.2092903 71.3354573,34.1748995 C71.6554122,33.0705728 72.209874,32.0130558 73.0567574,31.1723918 C71.5158473,29.7289336 69.7147959,29.4729133 68.5546035,29.4729133 C64.0856793,29.4729133 61.8260576,32.7772957 61.8260576,36.7045337 C61.8260576,42.2099272 65.9104663,43.7603789 68.4777004,43.7603789 C69.9920268,43.7603789 71.3003288,43.2693548 72.329501,42.5452374 C72.557362,42.3828364 72.7576899,42.2147037 72.9399787,42.0465709 C72.1775937,41.3129005 71.6079411,40.3633324 71.2813404,39.2188831 L71.2803909,39.2198384 Z M60.2946417,26.4407913 C60.2946417,27.6205867 59.3433219,28.5768419 58.1688883,28.5768419 C56.9973029,28.5768419 56.047882,27.6196314 56.047882,26.4407913 C56.047882,25.2600406 56.9973029,24.3037854 58.1688883,24.3037854 C59.3433219,24.3037854 60.2946417,25.2600406 60.2946417,26.4407913 L60.2946417,26.4407913 Z M56.1969411,29.8082235 L60.1019092,29.8082235 L60.1019092,43.3228516 L56.1969411,43.3228516 L56.1969411,29.8082235 Z M50.6058014,31.2277992 C51.4792686,30.4788441 52.4305884,29.8846475 54.4860846,29.6802134 L54.4860846,33.1928512 L53.1739849,33.399196 C51.2751431,33.7364168 50.7083389,34.0220515 50.7083389,35.7263066 L50.7083389,43.3228516 L46.7540008,43.3228516 L46.7540008,29.8082235 L50.6058014,29.8082235 L50.6058014,31.2277992 L50.6058014,31.2277992 Z M38.6506934,32.3397683 C37.9300829,32.3397683 37.185737,32.6502408 36.6208315,33.4259444 C36.0540272,34.1739442 35.7995824,35.3384548 35.7995824,36.6032719 C35.7995824,38.3084823 36.2372655,39.3688652 36.7490033,39.9363133 C37.2113713,40.4273375 37.8797636,40.7110616 38.5215722,40.7110616 C40.4460483,40.7110616 41.2948306,38.6179994 41.2948306,36.4981889 C41.2948306,34.7175099 40.8077777,32.8317478 39.1890151,32.4161923 C39.0086251,32.3665167 38.8291845,32.338813 38.649744,32.338813 L38.6506934,32.3397683 Z M35.5185539,31.1513752 C35.6457763,30.9966166 35.7748975,30.8428134 35.9021199,30.7128926 C36.5705122,30.0651992 37.7772262,29.5273654 39.267817,29.5273654 C42.5537627,29.5273654 45.0982107,32.0312065 45.0982107,36.5268479 C45.0982107,39.2895753 43.8895979,43.5826931 39.2915525,43.5826931 C37.80381,43.5826931 37.0319308,43.091669 35.9780736,42.4449309 L35.9780736,48 L32,48 L32,29.8856028 L35.5185539,29.8856028 L35.5185539,31.1513752 L35.5185539,31.1513752 Z',
                }),
              ),
            ),
          )
        }
      var L = b.d.div.withConfig({ displayName: 'Container__Wrapper', componentId: 'sc-99vn9v-0' })(
          ['max-width:1280px;margin:0 auto;padding:1.5rem 1rem;', ''],
          function(e) {
            return e.isDebug && 'background-color: orange;'
          },
        ),
        N = function(e) {
          var t = e.children,
            n = (function(e, t) {
              if (null == e) return {}
              var n,
                a,
                r = {},
                o = Object.keys(e)
              for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
              return r
            })(e, ['children'])
          return o.a.createElement(L, n, t)
        }
      N.defaultProps = { children: null, isDebug: !1 }
      var x = Object(b.d)(m.c).withConfig({ displayName: 'Header__HeaderInner', componentId: 'sc-16lf0uu-0' })([
          'flex-flow:nowrap row;',
        ]),
        w = Object(b.d)(function(e) {
          return o.a.createElement(c.a, e)
        }).withConfig({ displayName: 'Header__HeaderLink', componentId: 'sc-16lf0uu-1' })(
          ['color:', ';text-decoration:none;:hover{text-decoration:underline;}'],
          function(e) {
            return e.theme.colors.white
          },
        ),
        v = function(e) {
          var t = e.title
          return o.a.createElement(
            m.a,
            { bg: 'blue' },
            o.a.createElement(
              N,
              null,
              o.a.createElement(
                x,
                null,
                o.a.createElement(w, { to: '/' }, o.a.createElement(m.d.h1, { color: 'white', m: 3 }, t)),
              ),
            ),
          )
        }
      v.defaultProps = { title: null }
      var E = n(123),
        k = n(73)
      function I() {
        var e = (function(e, t) {
          t || (t = e.slice(0))
          return (e.raw = t), e
        })([
          '\n  ',
          '\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ',
          ';\n  }\n\n  body {\n    background: ',
          ';\n  }\n\n  h1 {\n    ',
          '\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ',
          '\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ',
          '\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ',
          '\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ',
          '\n    font-size: 1rem;\n  }\n\n  h6 {\n    ',
          '\n    font-size: 0.8rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color: ',
          ';\n    text-decoration: none;\n\n    &:focus,\n    &:hover {\n      color: ',
          ';\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left: 2rem;\n\n    ul, ol {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin: 1rem 0;\n    height: 0.2rem;\n    background: ',
          ';\n    border: none;\n  }\n\n  blockquote {\n    margin: 0 0 1rem 1rem;\n    padding: 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ',
          ';\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding: 0.05rem 0.4rem;\n    background-color: ',
          ';\n  }\n\n  pre {\n    margin: 0;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    background-color: ',
          ';\n    font-size: 0.8rem;\n\n    code {\n      padding: 0;\n      background-color: transparent;\n    }\n  }\n',
        ])
        return (
          (I = function() {
            return e
          }),
          e
        )
      }
      var z = '\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: 700;\n',
        M = Object(b.b)(
          I(),
          '\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}\n  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]::-webkit-search-decoration{-webkit-appearance:none}\n  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n',
          k.a.BLACK,
          k.a.WHITE,
          z,
          z,
          z,
          z,
          z,
          z,
          k.a.BLUE,
          Object(E.a)(0.2, k.a.BLUE),
          Object(E.b)(k.a.BLACK, 0.15),
          Object(E.b)(k.a.BLACK, 0.15),
          Object(E.b)(k.a.BLACK, 0.075),
          Object(E.b)(k.a.BLACK, 0.075),
        ),
        Z = Object(b.d)(m.c).withConfig({ displayName: 'Layout__ColumnWrapper', componentId: 'sc-10o483p-0' })(['']),
        _ = Object(b.d)(m.a).withConfig({ displayName: 'Layout__LeftColumn', componentId: 'sc-10o483p-1' })(['']),
        B = Object(b.d)(m.a).withConfig({ displayName: 'Layout__MainColumn', componentId: 'sc-10o483p-2' })([
          'flex-grow:1;',
        ]),
        D = function(e) {
          var t = e.children
          return o.a.createElement(
            m.f,
            { theme: m.i },
            o.a.createElement(
              d.a,
              { components: u },
              o.a.createElement(c.b, {
                query: '4130953669',
                render: function(e) {
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(M, null),
                    o.a.createElement(
                      i.a,
                      {
                        title: e.site.siteMetadata.title,
                        meta: [
                          { name: 'description', content: 'Sample' },
                          { name: 'keywords', content: 'sample, something' },
                        ],
                      },
                      o.a.createElement('html', { lang: 'en' }),
                      o.a.createElement('link', {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css?family=Montserrat:500,700',
                      }),
                    ),
                    o.a.createElement(v, { title: e.site.siteMetadata.title }),
                    o.a.createElement(
                      N,
                      null,
                      o.a.createElement(
                        Z,
                        null,
                        o.a.createElement(_, { mr: 5 }, o.a.createElement(y, null), o.a.createElement(j, null)),
                        o.a.createElement(B, null, t),
                      ),
                    ),
                  )
                },
                data: a,
              }),
            ),
          )
        }
      n.d(t, 'a', function() {
        return D
      })
      t.b = D
    },
  },
])
//# sourceMappingURL=component---src-pages-components-icon-md-5f792c719d31d97c8fb2.js.map