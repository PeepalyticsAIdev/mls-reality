import { LucidePhone } from 'lucide-react';
import React from 'react';

const AgentContact = () => {
  return (
    <section className="flex justify-between items-center w-[500px] max-xs:w-full rounded-xl p-5 shadow-2xl">
      <div className="font-medium">
        <h2 className="text-gray-500 max-xs:text-xs text-base">Phone Number</h2>
        <p className=" text-gray-700 max-xs:text-xs text-xl">869 662 8656</p>
      </div>

      <a
        href="tel:(869)662-8656"
        className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100"
      >
        <LucidePhone className='fill-gray-500 text-gray-500'/>
      </a>
    </section>
  );
};

export default AgentContact;
