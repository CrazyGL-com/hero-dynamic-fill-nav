import * as React from 'react';
import CrazyGLWrapper, { loadGoogleFont, useHeroReady, type HeroComponentProps } from '@crazygl/core';
import metadata from './metadata.json';
import './style.css';

const W: Record<string, string> = { '100': '100', '200': '200', '300': '300', '400': '400', '500': '500', '600': '600', '700': '700', '800': '800', '900': '900' };

function DynamicFillNavHero(props: HeroComponentProps & Record<string, any>) {
	const {
		items = 'Work | /work\nProcess | /process',
		textColor = '#ffffff', fillColor = '#5b8def', fillTextColor = '#ffffff',
		fontSize = 48, headingFontFamily = 'Inter', headingFontWeight = '700',
		transparentBackground = false, bgColor = '#0a0c14',
	} = props;
	const weight = W[String(headingFontWeight)] ?? '700';
	useHeroReady(props);
	React.useEffect(() => { if (!headingFontFamily || headingFontFamily === 'Inherit') return; try { loadGoogleFont(headingFontFamily, { weights: ['400', '500', '600', '700', '800', '900'] }); } catch { /* */ } }, [headingFontFamily]);

	const list = React.useMemo(() => String(items || '').split('\n').map((l) => {
		const parts = l.split('|').map((p) => p.trim());
		if (!parts[0]) return null;
		return { label: parts[0], href: parts[1] || '#' };
	}).filter(Boolean) as { label: string; href: string }[], [items]);

	// Hover is the only driver — the previous rAF tick demo-cycled
	// the active row when nobody was hovering, which fought with the
	// user's reading intent on the nav.
	const [hover, setHover] = React.useState<number>(-1);
	const activeIdx = hover;
	const ff = headingFontFamily && headingFontFamily !== 'Inherit' ? `"${headingFontFamily}", system-ui` : 'system-ui';

	return (
		<>
			<crazygl-stage style={{ background: transparentBackground ? 'transparent' : bgColor }} />
			<crazygl-content>
				<nav className="crazygl-dfn-nav" style={{ fontFamily: ff, fontWeight: weight, fontSize: `${Math.max(16, fontSize)}px` }}>
					{list.map((it, i) => (
						<a key={i} href={it.href} className={`crazygl-dfn-a ${i === activeIdx ? 'is-active' : ''}`} style={{ color: textColor, ['--cgl-dfn-fill' as any]: fillColor, ['--cgl-dfn-fill-text' as any]: fillTextColor }} onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(-1)}>
							<span className="crazygl-dfn-fill" />
							<span className="crazygl-dfn-label">{it.label}</span>
						</a>
					))}
				</nav>
			</crazygl-content>
		</>
	);
}

export default function DynamicFillNav(props: any) { return <CrazyGLWrapper hero={DynamicFillNavHero} metadata={metadata as any} {...props} />; }
export { metadata };
