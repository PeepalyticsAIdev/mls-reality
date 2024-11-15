import { faker } from '@faker-js/faker';
import { Property } from '@/types/property-listing';

export function seedFaker(seed: number) {
  faker.seed(seed);
}

const propertyTypes = ['Residential', 'Commercial', 'Industrial'] as const;

// Predefined locations for more realistic data
const locations = [
  { city: 'New York', state: 'NY', country: 'United States' },
  { city: 'Los Angeles', state: 'CA', country: 'United States' },
  { city: 'Miami', state: 'FL', country: 'United States' },
  { city: 'San Francisco', state: 'CA', country: 'United States' },
  { city: 'Chicago', state: 'IL', country: 'United States' },
  { city: 'Houston', state: 'TX', country: 'United States' },
  { city: 'Boston', state: 'MA', country: 'United States' },
  { city: 'Seattle', state: 'WA', country: 'United States' },
  { city: 'Denver', state: 'CO', country: 'United States' },
  { city: 'Austin', state: 'TX', country: 'United States' },
];

// Property title templates for more realistic names
const propertyTitleTemplates = [
  'Modern {{type}} in {{location}}',
  'Luxurious {{type}} Space at {{location}}',
  'Charming {{type}} Property near {{location}}',
  'Elegant {{type}} Building in {{location}}',
  'Prime {{type}} Location in {{location}}',
  'Stunning {{type}} Development at {{location}}',
  'Contemporary {{type}} Space in {{location}}',
  'Historic {{type}} Property in {{location}}',
  'Renovated {{type}} Building near {{location}}',
  'Premium {{type}} Space at {{location}}',
];

function generateImages(count: number = 4): Property['images'] {
  return Array.from({ length: count }, () => {
    const id = faker.number.int({ min: 1, max: 1000 });
    return {
      url: `https://picsum.photos/seed/${id}/800/600`,
      alt: `Property image ${id}`,
    };
  });
}

function generatePropertyTitle(type: Property['type'], location: Property['location']): string {
  const template = faker.helpers.arrayElement(propertyTitleTemplates);
  return template.replace('{{type}}', type).replace('{{location}}', location.city);
}

function generatePropertyFeatures(type: Property['type']): Property['features'] {
  if (type === 'Residential') {
    return {
      bedrooms: faker.number.int({ min: 1, max: 6 }),
      bathrooms: faker.number.int({ min: 1, max: 4 }),
      squareFeet: faker.number.int({ min: 800, max: 5000 }),
    };
  }

  // Commercial and Industrial properties have larger square footage
  return {
    bedrooms: 0,
    bathrooms: faker.number.int({ min: 2, max: 8 }),
    squareFeet: faker.number.int({ min: 2000, max: 20000 }),
  };
}

function generatePrice(type: Property['type'], squareFeet: number): number {
  const basePrice =
    type === 'Residential'
      ? faker.number.int({ min: 200, max: 800 }) // Price per square foot
      : faker.number.int({ min: 150, max: 500 });

  return basePrice * squareFeet;
}

export function generateProperty(): Property {
  const type = faker.helpers.arrayElement(propertyTypes);
  const location = faker.helpers.arrayElement(locations);
  const features = generatePropertyFeatures(type);
  const createdAt = faker.date.past({ years: 1 }).toISOString();

  return {
    id: faker.string.uuid(),
    type,
    title: generatePropertyTitle(type, location),
    price: generatePrice(type, features.squareFeet),
    location,
    features,
    images: generateImages(),
    createdAt,
    updatedAt: faker.date
      .between({
        from: createdAt,
        to: new Date(),
      })
      .toISOString(),
  };
}

export function generateProperties(count: number = 50, seed?: number): Property[] {
  if (seed !== undefined) {
    seedFaker(seed);
  }
  return Array.from({ length: count }, generateProperty);
}

export function generateDeterministicProperty(index: number, seed: number): Property {
  seedFaker(seed + index);
  return generateProperty();
}

export function generateDeterministicProperties(
  count: number = 50,
  seed: number = 12345
): Property[] {
  return Array.from({ length: count }, (_, index) => generateDeterministicProperty(index, seed));
}

// Example usage:
// const dummyProperties = generateProperties(50);
