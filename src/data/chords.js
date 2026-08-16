// 우쿨렐레 코드 데이터 (표준 튜닝 GCEA)
// frets = [G현, C현, E현, A현], 숫자 = 프렛(0=개방현). 왼→오른 순서로 다이어그램에 표시.
// 검증된 표준 운지 셋. 필요 시 계속 추가.

export const CHORDS = [
  // ── 메이저 ──────────────────────────────
  { name: "C",  root: "C",  quality: "major", frets: [0, 0, 0, 3] },
  { name: "C#", aka: "Db",  root: "C#", quality: "major", frets: [1, 1, 1, 4] },
  { name: "D",  root: "D",  quality: "major", frets: [2, 2, 2, 0] },
  { name: "D#", aka: "Eb",  root: "D#", quality: "major", frets: [3, 3, 3, 1] },
  { name: "E",  root: "E",  quality: "major", frets: [4, 4, 4, 2] },
  { name: "F",  root: "F",  quality: "major", frets: [2, 0, 1, 0] },
  { name: "F#", aka: "Gb",  root: "F#", quality: "major", frets: [3, 1, 2, 1] },
  { name: "G",  root: "G",  quality: "major", frets: [0, 2, 3, 2] },
  { name: "G#", aka: "Ab",  root: "G#", quality: "major", frets: [5, 3, 4, 3] },
  { name: "A",  root: "A",  quality: "major", frets: [2, 1, 0, 0] },
  { name: "A#", aka: "Bb",  root: "A#", quality: "major", frets: [3, 2, 1, 1] },
  { name: "B",  root: "B",  quality: "major", frets: [4, 3, 2, 2] },

  // ── 마이너 ──────────────────────────────
  { name: "Cm",  root: "C",  quality: "minor", frets: [0, 3, 3, 3] },
  { name: "C#m", aka: "Dbm", root: "C#", quality: "minor", frets: [1, 1, 0, 4] },
  { name: "Dm",  root: "D",  quality: "minor", frets: [2, 2, 1, 0] },
  { name: "D#m", aka: "Ebm", root: "D#", quality: "minor", frets: [3, 3, 2, 1] },
  { name: "Em",  root: "E",  quality: "minor", frets: [0, 4, 3, 2] },
  { name: "Fm",  root: "F",  quality: "minor", frets: [1, 0, 1, 3] },
  { name: "F#m", aka: "Gbm", root: "F#", quality: "minor", frets: [2, 1, 2, 0] },
  { name: "Gm",  root: "G",  quality: "minor", frets: [0, 2, 3, 1] },
  { name: "G#m", aka: "Abm", root: "G#", quality: "minor", frets: [1, 3, 4, 2] },
  { name: "Am",  root: "A",  quality: "minor", frets: [2, 0, 0, 0] },
  { name: "A#m", aka: "Bbm", root: "A#", quality: "minor", frets: [3, 1, 1, 1] },
  { name: "Bm",  root: "B",  quality: "minor", frets: [4, 2, 2, 2] },

  // ── 도미넌트 7 ──────────────────────────
  { name: "C7",  root: "C",  quality: "7", frets: [0, 0, 0, 1] },
  { name: "D7",  root: "D",  quality: "7", frets: [2, 2, 2, 3] },
  { name: "D#7", aka: "Eb7", root: "D#", quality: "7", frets: [3, 3, 3, 4] },
  { name: "E7",  root: "E",  quality: "7", frets: [1, 2, 0, 2] },
  { name: "F7",  root: "F",  quality: "7", frets: [2, 3, 1, 3] },
  { name: "F#7", aka: "Gb7", root: "F#", quality: "7", frets: [3, 4, 2, 4] },
  { name: "G7",  root: "G",  quality: "7", frets: [0, 2, 1, 2] },
  { name: "A7",  root: "A",  quality: "7", frets: [0, 1, 0, 0] },
  { name: "A#7", aka: "Bb7", root: "A#", quality: "7", frets: [1, 2, 1, 1] },
  { name: "B7",  root: "B",  quality: "7", frets: [2, 3, 2, 2] },

  // ── 메이저 7 ────────────────────────────
  { name: "Cmaj7", root: "C", quality: "maj7", frets: [0, 0, 0, 2] },
  { name: "Dmaj7", root: "D", quality: "maj7", frets: [2, 2, 2, 4] },
  { name: "Emaj7", root: "E", quality: "maj7", frets: [1, 3, 0, 2] },
  { name: "Fmaj7", root: "F", quality: "maj7", frets: [2, 4, 1, 3] },
  { name: "F#maj7", aka: "Gbmaj7", root: "F#", quality: "maj7", frets: [3, 5, 2, 4] },
  { name: "Gmaj7", root: "G", quality: "maj7", frets: [0, 2, 2, 2] },
  { name: "Amaj7", root: "A", quality: "maj7", frets: [1, 1, 0, 0] },

  // ── 마이너 7 ────────────────────────────
  { name: "Am7", root: "A", quality: "m7", frets: [0, 0, 0, 0] },
  { name: "Bm7", root: "B", quality: "m7", frets: [2, 2, 2, 2] },
  { name: "Cm7", root: "C", quality: "m7", frets: [3, 3, 3, 3] },
  { name: "Dm7", root: "D", quality: "m7", frets: [2, 2, 1, 3] },
  { name: "Em7", root: "E", quality: "m7", frets: [0, 2, 0, 2] },
  { name: "Fm7", root: "F", quality: "m7", frets: [1, 3, 1, 3] },
  { name: "F#m7", aka: "Gbm7", root: "F#", quality: "m7", frets: [2, 4, 2, 4] },
  { name: "Gm7", root: "G", quality: "m7", frets: [0, 2, 1, 1] },
];

// 코드 품질 라벨 (한국어)
export const QUALITY_LABELS = {
  major: "메이저",
  minor: "마이너",
  "7": "세븐스 (7)",
  maj7: "메이저 7",
  m7: "마이너 7",
};

// 표시 순서
export const QUALITY_ORDER = ["major", "minor", "7", "maj7", "m7"];

// URL 슬러그: "C#m" → "csharpm", "Bb7"는 name 기준
export function chordSlug(name) {
  return name.replace(/#/g, "sharp").toLowerCase();
}

export function chordBySlug(slug) {
  return CHORDS.find((c) => chordSlug(c.name) === slug);
}

// 품질별 그룹
export function groupedChords() {
  return QUALITY_ORDER.map((q) => ({
    quality: q,
    label: QUALITY_LABELS[q],
    chords: CHORDS.filter((c) => c.quality === q),
  }));
}
