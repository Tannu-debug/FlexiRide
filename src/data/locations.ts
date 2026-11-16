import { PickupLocation } from '@/types';

export const DELHI_NCR_LOCATIONS: PickupLocation[] = [
  // Delhi
  {
    id: 'loc-connaught-place',
    name: 'Connaught Place Hub',
    zone: 'Central Delhi',
    region: 'Delhi',
    addressPlaceholder: 'Near Shivaji Stadium Metro / Outer Circle, Connaught Place, New Delhi',
    isPopular: true,
  },
  {
    id: 'loc-igi-airport',
    name: 'IGI Airport T3 & Aerocity',
    zone: 'South-West Delhi',
    region: 'Delhi',
    addressPlaceholder: 'Aerocity Hospitality District / Terminal 3 Arrivals, New Delhi',
    isPopular: true,
  },
  {
    id: 'loc-saket',
    name: 'Saket & Select Citywalk',
    zone: 'South Delhi',
    region: 'Delhi',
    addressPlaceholder: 'District Centre, Saket, New Delhi',
    isPopular: true,
  },
  {
    id: 'loc-nehru-place',
    name: 'Nehru Place Business Hub',
    zone: 'South Delhi',
    region: 'Delhi',
    addressPlaceholder: 'Metro Station Concourse, Nehru Place, New Delhi',
  },
  {
    id: 'loc-rohini',
    name: 'Rohini Sector 10 Hub',
    zone: 'North-West Delhi',
    region: 'Delhi',
    addressPlaceholder: 'Near Rithala Metro Station, Rohini, New Delhi',
  },

  // Gurugram
  {
    id: 'loc-cyber-city',
    name: 'DLF Cyber City Hub',
    zone: 'DLF Phase 2 / Cyber Hub',
    region: 'Gurugram',
    addressPlaceholder: 'Near Rapid Metro Cyber City, DLF Phase 2, Gurugram, Haryana',
    isPopular: true,
  },
  {
    id: 'loc-golf-course-rd',
    name: 'Golf Course Road Hub',
    zone: 'Sector 54 / Sector 42',
    region: 'Gurugram',
    addressPlaceholder: 'One Horizon Center vicinity, Golf Course Road, Gurugram',
  },
  {
    id: 'loc-sec-29',
    name: 'Sector 29 Leisure Valley Hub',
    zone: 'IFFCO Chowk / HUDA City',
    region: 'Gurugram',
    addressPlaceholder: 'Leisure Valley Park Parking, Sector 29, Gurugram',
  },

  // Noida & Greater Noida
  {
    id: 'loc-noida-sec18',
    name: 'Noida Sector 18 (Atta Market)',
    zone: 'Central Noida',
    region: 'Noida',
    addressPlaceholder: 'Near Wave Silver Tower, Sector 18, Noida, Uttar Pradesh',
    isPopular: true,
  },
  {
    id: 'loc-noida-sec62',
    name: 'Noida Sector 62 IT Park',
    zone: 'Electronic City',
    region: 'Noida',
    addressPlaceholder: 'Near Sector 62 Metro Station, Electronic City, Noida',
  },
  {
    id: 'loc-pari-chowk',
    name: 'Greater Noida Pari Chowk Hub',
    zone: 'Knowledge Park & Pari Chowk',
    region: 'Greater Noida',
    addressPlaceholder: 'Near Alpha 1 Metro Station, Pari Chowk, Greater Noida',
  },

  // Faridabad
  {
    id: 'loc-faridabad-bata',
    name: 'Bata Chowk & Mathura Road Hub',
    zone: 'Central Faridabad',
    region: 'Faridabad',
    addressPlaceholder: 'Near Bata Chowk Metro Station, Mathura Road, Faridabad, Haryana',
  },

  // Ghaziabad
  {
    id: 'loc-ghaziabad-indirapuram',
    name: 'Indirapuram & Vaishali Hub',
    zone: 'Trans-Hindon Area',
    region: 'Ghaziabad',
    addressPlaceholder: 'Near Shipra Mall / Vaishali Metro Station, Ghaziabad, UP',
  },

  // Doorstep Delivery
  {
    id: 'loc-doorstep',
    name: 'Doorstep Delivery (Across Delhi NCR)',
    zone: 'All Covered NCR Zones',
    region: 'Doorstep',
    addressPlaceholder: 'Vehicle delivered directly to your home, office, or hotel address in Delhi NCR',
    isPopular: true,
  },
];
