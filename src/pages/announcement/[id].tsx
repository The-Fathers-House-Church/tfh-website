import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import AppLayout from '@/components/layout/AppLayout';
import { sendCatchFeedback } from '@/functions/feedback';
import { AnnouncementType } from '@/types/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const AnnouncementDetailPage = () => {
  const [announcement, setAnnouncement] = React.useState<
    AnnouncementType | undefined
  >(undefined);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    const getAnnouncement = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/announcement/' + id);
        setAnnouncement(response.data.announcement);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getAnnouncement();
    }
  }, [id]);

  return (
    <AppLayout>
      <div className='px-primary py-[98px]'>
        {loading ? (
          <LoadingIndicator />
        ) : announcement ? (
          <article>
            <Image
              src={announcement.image}
              alt={announcement.title}
              width={1200}
              height={800}
              className='h-[520px] w-full object-cover rounded-[20px]'
            />
            <h1 className='text-primary font-secondary text-[35px] md:text-[50px] font-bold mt-10'>
              {announcement.title}
            </h1>
            <p className='mt-4 text-lg text-[#555]'>
              {new Date(announcement.createdAt).toDateString()}
            </p>
            <div
              className='mt-8 text-lg md:text-2xl leading-relaxed'
              dangerouslySetInnerHTML={{ __html: announcement.details }}
            />
          </article>
        ) : (
          <p>No announcement found.</p>
        )}
      </div>
    </AppLayout>
  );
};

export default AnnouncementDetailPage;
