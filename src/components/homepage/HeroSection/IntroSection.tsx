import Button from '@/common/Button';
import Link from 'next/link';
import React from 'react';

function IntroSection() {
  return (
    <div className='pr-primary pl-primary flex flex-col justify-center p-5 h-full lg:flex:[45%] text-center lg:text-left mb-[94px] lg:mb-0'>
      <h1 className='text-primary text-2xl lg:text-[35px] max-w-[547px]'>
        Welcome to <br />
        <span className='font-secondary font-bold lg:text-[55px] text-[40px]'>
          The Father&apos;s House Church
        </span>
      </h1>
      <p className='lg:text-[28px] text-base font-normal mt-[7px] mb-[18px] lg:mb-[59px]'>
        Experience the power of God&apos;s word
      </p>
      <div className='flex items-center flex-wrap lg:gap-10 gap-[22px] justify-center lg:justify-start'>
        <Link href='/church-locations'>
          <Button className='lg:!h-[60px] lg:!w-[241px] h-[35px] lg:!text-lg !font-semibold'>
            Find a Location
          </Button>
        </Link>
        <Link href='/resources'>
          <Button className='lg:!h-[60px] h-[35px] lg:!w-[241px] lg:!text-lg !font-semibold'>
            Join us Online
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default IntroSection;
