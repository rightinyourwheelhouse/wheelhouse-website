import { useMemo } from 'react';
import { useRecommendationsOverview } from '../insights/useRecommendationsOverview';

export const useTeamRecommendations = (name, count = 3) => {
  const [allRecommendations] = useRecommendationsOverview();

  const filteredRecommendations = useMemo(
    () => allRecommendations.filter(
      ({ author }) => author.toLowerCase() === name.toLowerCase()
    ),
    [name]
  );

  const r = useMemo(() => {
    let recommendations = [];
    filteredRecommendations.forEach(({ items }) => {
      recommendations = [...recommendations, ...items];
    });

    if (count) {
      return recommendations.slice(0, count);
    }

    return recommendations;
  }, [
    filteredRecommendations,
  ]);

  return [r];
};
