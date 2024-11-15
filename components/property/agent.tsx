import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Agent = () => {
  return (
    <section className="flex items-center gap-5 bg-white max-xs:w-full rounded-xl p-5">
      {/* vaata */}

      <Avatar className='xs:w-[64px] xs:h-[64px]'>
        <AvatarImage src="/property/john.png" alt="john" />
        <AvatarFallback>JY</AvatarFallback>
      </Avatar>
      <div className='font-medium'>
        <h2 className='text-gray-700 max-xs:text-xs text-xl'>John Yearwood</h2>
        <p className='text-gray-500 max-xs:text-xs text-base'>Real Estate Agent</p>
      </div>
    </section>
  );
};

export default Agent;
