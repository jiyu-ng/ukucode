// 곡 데이터 (코드 악보). 저작권 프리 곡만 (동요·캐롤·민요·PD).
// 각 줄 = 세그먼트 배열. { c: 코드심볼(없으면 ""), t: 가사텍스트 }
// c 있는 세그먼트는 코드가 그 가사 위에 표시됨. 간단한 우쿨 코드 버전(C키 위주).

export const SONGS = [
  {
    slug: "twinkle-star",
    title: "반짝반짝 작은 별",
    note: "동요 · 멜로디 Public Domain",
    license: "저작권 프리",
    tag: "동요",
    key: "C",
    sections: [
      { lines: [
        [ { c: "C", t: "반짝 " }, { c: "", t: "반짝 " }, { c: "F", t: "작은 " }, { c: "C", t: "별" } ],
        [ { c: "F", t: "아름답게 " }, { c: "C", t: "비" }, { c: "G", t: "치" }, { c: "C", t: "네" } ],
        [ { c: "C", t: "서쪽 " }, { c: "F", t: "하늘 " }, { c: "C", t: "에서도" } ],
        [ { c: "F", t: "동쪽 " }, { c: "C", t: "하늘 " }, { c: "G", t: "에서" }, { c: "C", t: "도" } ],
        [ { c: "C", t: "반짝 " }, { c: "", t: "반짝 " }, { c: "F", t: "작은 " }, { c: "C", t: "별" } ],
        [ { c: "F", t: "아름답게 " }, { c: "C", t: "비" }, { c: "G", t: "치" }, { c: "C", t: "네" } ],
      ] },
    ],
  },
  {
    slug: "butterfly",
    title: "나비야",
    note: "동요 · 독일 민요, 한국어 가사 전통",
    license: "저작권 프리",
    tag: "동요",
    key: "C",
    sections: [
      { lines: [
        [ { c: "C", t: "나비야 " }, { c: "G7", t: "나비야 " }, { c: "C", t: "이리 날아 오너라" } ],
        [ { c: "C", t: "노랑나비 " }, { c: "G7", t: "흰나비 " }, { c: "C", t: "춤을 추며 오너라" } ],
        [ { c: "G7", t: "봄바람에 " }, { c: "C", t: "꽃잎도 " }, { c: "G7", t: "방긋방긋 " }, { c: "C", t: "웃는다" } ],
        [ { c: "C", t: "참새도 " }, { c: "G7", t: "짹짹짹 " }, { c: "C", t: "노래하며 춤춘다" } ],
      ] },
    ],
  },
  {
    slug: "jingle-bells",
    title: "징글벨",
    note: "캐롤 · Public Domain (J. Pierpont, 1857)",
    license: "저작권 프리",
    tag: "캐롤",
    key: "C",
    sections: [
      { label: "후렴", lines: [
        [ { c: "C", t: "징글벨 징글벨 " }, { c: "", t: "종이 울린다" } ],
        [ { c: "F", t: "종소리 울려서 " }, { c: "C", t: "온 세상 퍼진다" } ],
        [ { c: "G", t: "징글벨 " }, { c: "C", t: "징글벨 " }, { c: "", t: "종이 울린다" } ],
        [ { c: "F", t: "우리 썰매 빨리 달려 " }, { c: "G", t: "종소리 " }, { c: "C", t: "울린다" } ],
      ] },
    ],
  },
];

export function songBySlug(slug) {
  return SONGS.find((s) => s.slug === slug);
}

// 곡에 쓰인 코드 심볼 목록 (중복 제거, 등장 순)
export function songChords(song) {
  const seen = new Set();
  const out = [];
  for (const sec of song.sections) {
    for (const line of sec.lines) {
      for (const seg of line) {
        if (seg.c && !seen.has(seg.c)) { seen.add(seg.c); out.push(seg.c); }
      }
    }
  }
  return out;
}
