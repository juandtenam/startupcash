export default async function handler(req) {
  const { ImageResponse } = await import('@vercel/og');

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px', height: '630px',
          background: '#0a5c38',
          display: 'flex', flexDirection: 'column',
          padding: '60px 80px', position: 'relative',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' },
              children: [
                { type: 'div', props: { style: { width: '72px', height: '72px', background: '#f7f5f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '58px', fontWeight: 700, color: '#0a5c38' }, children: 'S' } },
                { type: 'div', props: { style: { display: 'flex', fontSize: '36px', color: '#f7f5f0', opacity: 0.7 }, children: 'startupcash.io' } },
              ],
            },
          },
          { type: 'div', props: { style: { display: 'flex', fontSize: '88px', color: '#f7f5f0', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '16px', fontWeight: 400 }, children: '$16,000,000+' } },
          { type: 'div', props: { style: { display: 'flex', fontSize: '64px', color: '#f7f5f0', opacity: 0.88, letterSpacing: '-1px', marginBottom: '32px', fontWeight: 400 }, children: 'in funding is waiting.' } },
          { type: 'div', props: { style: { display: 'flex', fontSize: '18px', color: '#f7f5f0', opacity: 0.5 }, children: '86 verified programs · Grants · Accelerators · Hackathons · Credits' } },
        ],
      },
    },
    { width: 1200, height: 630 }
  );
}

export const config = { runtime: 'edge' };
