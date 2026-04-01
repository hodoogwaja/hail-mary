import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const mission = searchParams.get('mission') || '나의 헤일메리 프로젝트';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(160deg, #050520 0%, #0a0a35 30%, #0d0828 60%, #050520 100%)',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* 별 배경 */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex',
        }}>
          {[
            { x: '10%', y: '15%', s: 3 }, { x: '25%', y: '70%', s: 2 },
            { x: '40%', y: '25%', s: 4 }, { x: '60%', y: '80%', s: 2 },
            { x: '75%', y: '20%', s: 3 }, { x: '85%', y: '60%', s: 2 },
            { x: '15%', y: '85%', s: 2 }, { x: '50%', y: '10%', s: 3 },
            { x: '90%', y: '40%', s: 4 }, { x: '5%', y: '50%', s: 2 },
            { x: '35%', y: '55%', s: 2 }, { x: '70%', y: '45%', s: 3 },
          ].map((star, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: star.x, top: star.y,
              width: `${star.s}px`, height: `${star.s}px`,
              borderRadius: '50%',
              background: 'white',
              boxShadow: `0 0 ${star.s * 2}px ${star.s}px rgba(255,255,255,0.3)`,
            }} />
          ))}
        </div>

        {/* 태양 (우측 상단) */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, #fff8e1, #ffcc02 30%, #ff8800 60%, #ff4400 80%, transparent 100%)',
          boxShadow: '0 0 60px 20px rgba(255,200,60,0.5), 0 0 120px 50px rgba(255,150,30,0.2), 0 0 200px 80px rgba(255,100,0,0.08)',
          display: 'flex',
        }} />

        {/* TOP SECRET 배지 */}
        <div style={{
          display: 'flex',
          fontSize: '14px',
          letterSpacing: '4px',
          color: '#ff6b2b',
          border: '1px solid rgba(255,107,43,0.5)',
          padding: '6px 24px',
          marginBottom: '20px',
        }}>
          TOP SECRET
        </div>

        {/* 타이틀 */}
        <div style={{
          display: 'flex',
          fontSize: '18px',
          letterSpacing: '4px',
          color: '#00e5ff',
          marginBottom: '32px',
        }}>
          MY HAIL MARY PROJECT 2026
        </div>

        {/* 미션 텍스트 */}
        <div style={{
          display: 'flex',
          fontSize: mission.length > 30 ? '36px' : '44px',
          fontWeight: 900,
          color: 'white',
          textAlign: 'center',
          maxWidth: '900px',
          lineHeight: 1.6,
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          padding: '0 40px',
          wordBreak: 'keep-all',
        }}>
          {mission}
        </div>

        {/* 하단 그래디언트 라인 */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #ff8800, #00e5ff, #39ff14, transparent)',
          display: 'flex',
        }} />

        {/* 푸터 */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          fontSize: '16px',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '2px',
        }}>
          inflearn.com · <span style={{ color: '#39ff14', marginLeft: '8px' }}>프로젝트 인프런메리</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
