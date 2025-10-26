import React, { useEffect, useState } from 'react';
import DevotionalImage from '@/assets/images/home/devotional.webp';
import Image from 'next/image';
import { DevotionalType } from '@/types/types';
import { sendCatchFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import Button from '@/common/Button';
import { useRouter } from 'next/router';

const DevotionalSection = () => {
  const [devotional, setDevotional] = useState<DevotionalType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getDevotional = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/devotional/today');
        setDevotional(response.data.devotional);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    getDevotional();
  }, []);

  return (
    <section
      id='devotional'
      className='px-primary py-[100px] lg:py-[148px] devotional-bg'
    >
      <div className='flex items-center justify-center text-center lg:text-start gap-[50px] lg:gap-[81px] flex-wrap lg:flex-nowrap'>
        <Image src={DevotionalImage} alt='Devotional' />
        <div className='items-center flex flex-col lg:items-start'>
          {loading ? (
            <LoadingIndicator />
          ) : devotional && Object.keys(devotional).length ? (
            <>
              <h2 className='text-white text-[35px] md:text-[48px] lg:text-[60px] font-bold mb-3'>
                The Father’s Menu
              </h2>
              <p className='text-secondary font-bold text-lg lg:text-2xl mb-4'>
                {new Date(devotional.ditto).toDateString()}
              </p>
              <p className='text-white font-normal lg:text-xl max-w-[672px]'>
                {devotional.scripture1}
              </p>
              <p className='text-white font-normal mb-[34px] lg:text-xl'>
                - {devotional.scripture2}
              </p>
              <Button
                className='!w-[280px] !max-w-full'
                onClick={() =>
                  router.push('/devotional/details?id=' + devotional.dish_id)
                }
              >
                Read Devotional
              </Button>
            </>
          ) : (
            <span className='text-white'>No devotional found for today</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default DevotionalSection;
