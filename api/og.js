import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler() {
  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: '#0a5c38',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px 80px',
        position: 'relative',
        fontFamily: 'serif',
      }}
    >
      {/* Dot grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(247,245,240,0.12) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        display: 'flex',
      }} />

      {/* Logo S */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
        <div style={{
          width: '72px', height: '72px',
          background: '#f7f5f0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '58px', fontWeight: 700, color: '#0a5c38',
        }}>S</div>
        <div style={{ display: 'flex', fontSize: '36px', color: '#f7f5f0' }}>
          <span style={{ opacity: 0.5 }}>startup</span>
          <span>cash</span>
          <span style={{ opacity: 0.5 }}>.io</span>
        </div>
      </div>

      {/* Headline */}
      <div style={{ display: 'flex', fontSize: '88px', color: '#f7f5f0', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '16px', fontWeight: 400 }}>
        $16,000,000+
      </div>
      <div style={{ display: 'flex', fontSize: '64px', color: '#f7f5f0', opacity: 0.88, letterSpacing: '-1px', marginBottom: '32px', fontWeight: 400 }}>
        in funding is waiting.
      </div>

      {/* Sub */}
      <div style={{ display: 'flex', fontSize: '18px', color: '#f7f5f0', opacity: 0.5, fontFamily: 'monospace' }}>
        86 verified programs · Grants · Accelerators · Hackathons · Credits
      </div>

      {/* Stat cards */}
      <div style={{ position: 'absolute', right: '80px', top: '160px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[['$16M+', 'TOTAL VALUE'], ['86', 'PROGRAMS'], ['Free', 'NO CREDIT CARD']].map(([val, label]) => (
          <div key={label} style={{
            width: '244px', padding: '18px 0',
            background: 'rgba(247,245,240,0.08)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}>
            <div style={{ display: 'flex', color: '#f7f5f0', fontSize: '32px', fontWeight: 400 }}>{val}</div>
            <div style={{ display: 'flex', color: '#f7f5f0', fontSize: '11px', opacity: 0.45, fontFamily: 'monospace', letterSpacing: '2px' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Bottom rule + domain */}
      <div style={{ position: 'absolute', bottom: '60px', left: '80px', right: '80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ height: '0.5px', background: 'rgba(247,245,240,0.15)', display: 'flex' }} />
        <div style={{ display: 'flex', color: '#f7f5f0', opacity: 0.4, fontSize: '15px', fontFamily: 'monospace', letterSpacing: '2px' }}>
          STARTUPCASH.IO
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
