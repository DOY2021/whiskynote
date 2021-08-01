import { useCallback, useRef } from 'react';

function useInfiniteScroll(callbackParam, loading: boolean, hasMore: boolean) {
  const observer = useRef<IntersectionObserver>();
  const infiniteScrollRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          callbackParam();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );
  return infiniteScrollRef;
}

export default useInfiniteScroll;
