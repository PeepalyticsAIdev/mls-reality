import { memo } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Property } from '@/types/property-listing';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function PropertyListingCard({ property, priority = false }: PropertyCardProps) {
  const { title, type, price, location, features, images } = property;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <motion.div className="relative" variants={itemVariants}>
      <span className="absolute left-4 top-4 z-20 bg-white text-neutral-darkGray py-3 px-4 rounded-full font-sans text-body font-medium">
        {type}
      </span>

      <div className="relative h-[336px] bg-neutral-lightGray">
        <Image
          src={images[0]?.url || '/svgs/placeholder.svg'}
          fill
          alt={images[0]?.alt || title}
          className="object-cover object-center rounded"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={e => {
            const imgElement = e.currentTarget as HTMLImageElement;
            imgElement.src = '/svgs/placeholder.svg';
          }}
        />
      </div>

      <div className="space-y-2 mt-7 mb-4">
        <h3 className="font-lora text-h4 font-medium text-neutral-darkGray">{title}</h3>
        <p className="font-sans text-lg text-neutral-darkGray/80">
          {`${location.city}, ${location.state}, ${location.country}`}
        </p>
      </div>

      <div>
        <h4 className="font-sans text-lg font-bold text-neutral-darkGray">{formattedPrice}</h4>
        <ul className="flex gap-6 font-sans text-sm text-neutral-mediumGray list-disc list-outside">
          <li className="list-none">{features.bedrooms} Bedroom</li>
          <li>{features.bathrooms} Bath</li>
          <li>{features.squareFeet.toLocaleString()} sq.ft</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default memo(PropertyListingCard);
