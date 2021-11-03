import { useMemo } from 'react';

import { useBlogOverview } from './useBlogOverview';
import { useRecommendationsOverview } from './useRecommendationsOverview';

export function useInsightsOverview({ count, current, skip = 0 }) {
  const [blogs] = useBlogOverview({});
  const [recommendations] = useRecommendationsOverview({});

  const insights = useMemo(() => {
    const collection = [...blogs, ...recommendations].filter(
      ({ id }) => id !== current,
    );

    collection.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

    if (count || skip) {
      const end = count ? skip + count : collection.length;
      return collection.slice(skip, end);
    }

    return collection;
  }, [blogs, count, current, recommendations, skip]);

  return [insights];
}
