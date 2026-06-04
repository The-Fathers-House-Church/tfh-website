import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { EventType } from '@/types/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Gallery from './Gallery';
import RegistrationForm from './RegistrationForm';

const EventDescription = () => {
  const [details, setDetails] = useState<EventType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const getData = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get(`/event/${id}`);
      setDetails(response.data.event);
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const shouldAllowRegistration = () => {
    let allow = true;

    if (
      details?.limitedNumberRegistration &&
      details?.registrationEntries.length >= details?.registrationNumberLimit
    ) {
      // if the number has exceeded
      allow = false;
    } else if (
      details?.limitedDateRegistration &&
      new Date() > new Date(details?.date || '')
    ) {
      // If the date has passed
      allow = false;
    } else {
      allow = true;
    }
    return allow;
  };

  // const generateCalendarLink = () => {
  //   const nameString = details?.name.replace(/ /g, '+'); //replacing all spaces with plus
  //   const dateString = new Date(details?.date || '')
  //     .toISOString()
  //     .split('T')[0]
  //     .split('-')
  //     .join(''); //did this to get the format: YYYYMMDD
  //   const link = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${dateString}%2F${dateString}&location=&text=${nameString}`;
  //   return link;
  // };

  const checkIfDateIsPassed = () => {
    const currentDate = new Date();
    return currentDate > new Date(details?.date || '');
  };

  if (!details) return null;

  return (
    <div className='py-[98px] px-primary w-full'>
      {loading && (
        <div className='py-5'>
          <LoadingIndicator />
        </div>
      )}
      <Image
        src={details.poster}
        alt='Event'
        width={1000}
        height={1000}
        className='h-[658px] w-full object-cover rounded-[20px]'
      />
      <div className='flex w-full justify-between items-start flex-wrap gap-5 mt-[42px]'>
        <div className='flex flex-col gap-[19px]'>
          <h1 className='text-primary font-secondary text-[30px] md:text-[40px] font-bold'>
            {details.name}
          </h1>
          <p className='text-xl md:text-2xl'>{new Date(details.date).toDateString()}</p>
        </div>
        <div>
          {checkIfDateIsPassed() ? (
            <div className='text-[#F13637] py-[13px] px-[30px] bg-[#FFE0E0] rounded-lg text-lg'>
              This event has passed.
            </div>
          ) : (
            details.allowRegistration && (
              <div className='text-white py-[13px] px-[30px] bg-[#E10000] rounded-lg text-lg'>
                This event requires registration
              </div>
            )
          )}
        </div>
      </div>

      <p
        className='text-xl md:text-2xl mt-6 font-normal'
        dangerouslySetInnerHTML={{
          __html: details.description,
        }}
      />

      {details.allowRegistration &&
        shouldAllowRegistration() &&
        !checkIfDateIsPassed() && (
          <>
            <RegistrationForm event={details} />
          </>
        )}

      {/* Event Gallery */}
      {checkIfDateIsPassed() && (
        <>
          <Gallery gallery={details.gallery} />
        </>
      )}
    </div>
  );
};

export default EventDescription;
