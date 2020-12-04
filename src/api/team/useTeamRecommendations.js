import { useMemo } from 'react';
import { useRecommendationsOverview } from '../insights/useRecommendationsOverview';

export const useTeamRecommendations = (name, count = 3) => {
  const [allRecommendations] = useRecommendationsOverview();

  const teamMemberRecommendations = useMemo(() => {
    let recommendations = [];

    allRecommendations.forEach(({ author, items, date }) => {
      if (author.toLowerCase() === name.toLowerCase()) {
        recommendations = [
          ...recommendations,
          ...items.map((item) => ({ ...item, date })),
        ];
      }

      const memberItems = items.filter(
        ({ pickedBy }) => pickedBy && pickedBy.toLowerCase() === name.toLowerCase()
      );

      recommendations = [
        ...recommendations,
        ...memberItems.map((item) => ({ ...item, date })),
      ];
    });

    recommendations.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

    recommendations = recommendations.reduce((result, current) => {
      if (!result.some((item) => item.title === current.title)) { result.push(current); }
      return result;
    }, []);

    if (count) {
      return recommendations.slice(0, count);
    }

    return recommendations;
  }, [allRecommendations]);

  return [teamMemberRecommendations];
};
