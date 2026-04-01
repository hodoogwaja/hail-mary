export default function handler(req, res) {
  const mission = req.query.mission || '';
  const decodedMission = decodeURIComponent(mission);
  const safeText = decodedMission.replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const pageUrl = `https://hail-mary-nine.vercel.app/?mission=${encodeURIComponent(decodedMission)}`;

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta property="og:title" content="🚀 나의 2026 헤일메리 프로젝트">
  <meta property="og:description" content="${safeText}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:site_name" content="프로젝트 인프런메리">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="🚀 나의 2026 헤일메리 프로젝트">
  <meta name="twitter:description" content="${safeText}">
  <meta http-equiv="refresh" content="0;url=${pageUrl}">
  <title>🚀 ${safeText} — 프로젝트 인프런메리</title>
</head>
<body>
  <p>이동 중...</p>
  <script>window.location.href="${pageUrl}";</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).send(html);
}
