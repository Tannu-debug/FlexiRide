export type VehicleCategory = 'Hatchback' | 'Sedan' | 'SUV' | 'Premium Cars';

export type RentalDurationType = 'Hourly' | 'Daily';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  tagline: string;
  hourlyRate: number; // in INR ₹
  dailyRate: number;  // in INR ₹
  seats: number;
  transmission: 'Manual' | 'Automatic' | 'Manual / Auto';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'CNG / Petrol';
  luggageCapacity: string;
  mileage: string;
  image: string;
  badge?: string;
  features: string[];
  description: string;
  isPopular?: boolean;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  category: VehicleCategory | '';
  vehicleModel?: string;
  durationType: RentalDurationType;
  durationValue: number;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  message?: string;
}

export interface PickupLocation {
  id: string;
  name: string;
  zone: string;
  region: 'Delhi' | 'Gurugram' | 'Noida' | 'Greater Noida' | 'Faridabad' | 'Ghaziabad' | 'Doorstep';
  addressPlaceholder: string;
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking & Rates' | 'Eligibility' | 'Pickups & Returns' | 'Delhi NCR Operations';
}
