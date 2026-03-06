// src/lib/utils/safety.ts
export type RiskLevel = 'low' | 'moderate' | 'high';

const pressureScores = {
  low: 1,
  'low-moderate': 2,
  moderate: 3,
  'moderate-high': 4,
  high: 5
} as const;

const touchScores = {
  low: 1,
  medium: 3,
  'medium-high': 4,
  high: 5,
  variable: 3
} as const;

export function calculateRisk(
  value: string | number | undefined,
  type: 'pressure' | 'touch' | 'alcohol'
): RiskLevel {
  if (!value) return 'moderate';

  if (type === 'pressure') {
    const score = pressureScores[value as keyof typeof pressureScores] ?? 3;
    return score >= 4 ? 'high' : score <= 2 ? 'low' : 'moderate';
  }

  if (type === 'touch') {
    const score = touchScores[value as keyof typeof touchScores] ?? 3;
    return score >= 4 ? 'high' : score <= 2 ? 'low' : 'moderate';
  }

  if (type === 'alcohol') {
    const abv = typeof value === 'number' ? value : Number(value);
    if (abv === 0) return 'low';
    if (abv < 10) return 'low';
    if (abv < 20) return 'moderate';
    return 'high';
  }

  return 'moderate';
}
