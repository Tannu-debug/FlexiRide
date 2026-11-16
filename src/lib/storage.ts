
import { EnquiryFormData } from '@/types';

export interface StoredEnquiry {
  referenceId: string;
  submittedAt: string;
  data: EnquiryFormData;
}

const STORAGE_KEY = 'flexiride_enquiries';

export function saveEnquiry(enquiry: StoredEnquiry): void {
  if (typeof window === 'undefined') return;

  const existing = localStorage.getItem(STORAGE_KEY);
  const enquiries: StoredEnquiry[] = existing
    ? JSON.parse(existing)
    : [];

  enquiries.push(enquiry);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
}

export function getEnquiries(): StoredEnquiry[] {
  if (typeof window === 'undefined') return [];

  const existing = localStorage.getItem(STORAGE_KEY);

  return existing ? JSON.parse(existing) : [];
}
