import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import CrazyGLWrapper, { loadGoogleFont, useHeroReady } from '@crazygl/core';
import metadata from './metadata.json';
import './style.css';
const W = { '100': '100', '200': '200', '300': '300', '400': '400', '500': '500', '600': '600', '700': '700', '800': '800', '900': '900' };
function DynamicFillNavHero(props) {
    const { items = 'Work | /work\nProcess | /process', textColor = '#ffffff', fillColor = '#5b8def', fillTextColor = '#ffffff', fontSize = 48, headingFontFamily = 'Inter', headingFontWeight = '700', transparentBackground = false, bgColor = '#0a0c14', } = props;
    const weight = W[String(headingFontWeight)] ?? '700';
    useHeroReady(props);
    React.useEffect(() => { if (!headingFontFamily || headingFontFamily === 'Inherit')
        return; try {
        loadGoogleFont(headingFontFamily, { weights: ['400', '500', '600', '700', '800', '900'] });
    }
    catch { /* */ } }, [headingFontFamily]);
    const list = React.useMemo(() => String(items || '').split('\n').map((l) => {
        const parts = l.split('|').map((p) => p.trim());
        if (!parts[0])
            return null;
        return { label: parts[0], href: parts[1] || '#' };
    }).filter(Boolean), [items]);
    // Hover is the only driver — the previous rAF tick demo-cycled
    // the active row when nobody was hovering, which fought with the
    // user's reading intent on the nav.
    const [hover, setHover] = React.useState(-1);
    const activeIdx = hover;
    const ff = headingFontFamily && headingFontFamily !== 'Inherit' ? `"${headingFontFamily}", system-ui` : 'system-ui';
    return (_jsxs(_Fragment, { children: [_jsx("crazygl-stage", { style: { background: transparentBackground ? 'transparent' : bgColor } }), _jsx("crazygl-content", { children: _jsx("nav", { className: "crazygl-dfn-nav", style: { fontFamily: ff, fontWeight: weight, fontSize: `${Math.max(16, fontSize)}px` }, children: list.map((it, i) => (_jsxs("a", { href: it.href, className: `crazygl-dfn-a ${i === activeIdx ? 'is-active' : ''}`, style: { color: textColor, ['--cgl-dfn-fill']: fillColor, ['--cgl-dfn-fill-text']: fillTextColor }, onPointerEnter: () => setHover(i), onPointerLeave: () => setHover(-1), children: [_jsx("span", { className: "crazygl-dfn-fill" }), _jsx("span", { className: "crazygl-dfn-label", children: it.label })] }, i))) }) })] }));
}
export default function DynamicFillNav(props) { return _jsx(CrazyGLWrapper, { hero: DynamicFillNavHero, metadata: metadata, ...props }); }
export { metadata };
