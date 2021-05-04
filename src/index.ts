import { createRef, useLayoutEffect } from 'react';

const useLoading = (loading: boolean, loadingClass: string) => {
  const ref = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll('[data-loading]');

      elements.forEach((element) => {
        if (loading) {
          element.classList.add(loadingClass);
        } else {
          element.classList.remove(loadingClass);
        }
      });
    }
  }, [loading, ref]);

  return ref;
};

export default useLoading;
