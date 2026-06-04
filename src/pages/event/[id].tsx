import { useRouter } from 'next/router';
import React from 'react';

const EventRouteAlias = () => {
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    if (id) {
      router.replace('/events/details?id=' + id);
    }
  }, [id, router]);

  return null;
};

export default EventRouteAlias;
