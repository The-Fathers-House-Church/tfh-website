import { getMonthString } from '@/functions/stringManipulations';
import { EventType } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import LocationIcon from '@/assets/svgs/home/location.svg';
import Button from '@/common/Button';
import { useRouter } from 'next/router';

const EventCard = ({ event }: { event: EventType }) => {
  const router = useRouter();
  return (
    <article className='rounded-[10px] w-[398px] min-w-[398px] bg-white flex flex-col relative group'>
      {/* Header */}
      <div className='h-[273px] w-full relative'>
        <Image
          src={event.poster}
          alt='Poster'
          width={500}
          height={500}
          className='w-full h-full object-cover rounded-t-[10px]'
        />
        <div className='absolute top-0 left-0 flex flex-col pt-[6px] pb-[7px] px-[14px] rounded-tl-[9px] bg-white items-center'>
          <span className='text-[#00040B] text-bold text-[13px uppercase'>
            {getMonthString(event.date)}
          </span>
          <span className='font-bold text-[40px]'>{new Date(event.date).getDate()}</span>
        </div>
        {event.allowRegistration && (
          <div className='absolute bottom-0 left-0 bg-[#FF1100CF] w-[133px] h-[26px] flex items-center justify-center font-bold text-white text-[10px]'>
            *Requires Registration
          </div>
        )}
      </div>
      {/* Description */}
      <div className='pt-[21px] p-9 flex flex-col'>
        <p className='font-secondary font-bold text-lg uppercase'>{event.name}</p>
        <p className='flex items-center gap-1 mb-[18px]'>
          <Image src={LocationIcon} alt='Location Icon' />
          <span>{event.location}</span>
        </p>
        <p
          className='text-[12px] font-normal'
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
      </div>
      {/* Details button */}
      <div className='group-hover:opacity-100 absolute top-0 bottom-0 left-0 right-0 opacity-0 duration-500 transition-opacity flex items-center justify-center bg-[#151515BD] rounded-[10px]'>
        <Button
          className='!bg-transparent !border-[1.5px] !border-white !w-[273px] hover:!text-black hover:!bg-white !transition-colors'
          onClick={() => router.push('/events/details?id=' + event.id)}
        >
          More Details
        </Button>
      </div>
    </article>
  );
};

export default EventCard;
