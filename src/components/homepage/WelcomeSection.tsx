import Button from '@/common/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WelcomeImage from '../../assets/images/home/welcome.png';

const WelcomeSection = () => {
  return (
    <section id='welcome' className='p-primary homepage-welcome-bg'>
      <div className='grid grid-cols-2 items-center gap-10'>
        <Image src={WelcomeImage} alt='Welcome' />
        <div className='flex flex-col'>
          <h2 className='text-secondary text-4xl font-secondary font-semibold mb-[27px]'>
            You&apos;re welcome to worship with us
          </h2>
          <p className='font-normal mb-[9px] text-xl'>
            As Senior Pastors of The Father&apos;s House, this is an auspicious moment to
            share with you God&apos;s mandate upon our hearts. We believe that you are
            created for glory. That is why He has ordained us at this very hour and time
            to reach you and welcome you into the fold.
          </p>
          <p className='font-bold text-xl mb-[50px]'>
            - APOSTLE RICHARD & REV. EDITH UDOH
          </p>
          <Link href='/about'>
            <Button className='!w-[230px]'>More About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
