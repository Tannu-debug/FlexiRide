
'use client';

import { useEffect, useState } from 'react';
import { getEnquiries, StoredEnquiry } from '@/lib/storage';

export default function AdminPage() {
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);

  const loadEnquiries = () => {
    setEnquiries(getEnquiries());
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              FlexiRide Admin
            </h1>
            <p className="mt-2 text-gray-600">
              Customer booking enquiries
            </p>
          </div>

          <button
            onClick={loadEnquiries}
            className="rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
          >
            Refresh Enquiries
          </button>
        </div>

        <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total Enquiries</p>
          <p className="mt-2 text-3xl font-bold text-orange-600">
            {enquiries.length}
          </p>
        </div>

        {enquiries.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">
              No enquiries found
            </h2>
            <p className="mt-2 text-gray-500">
              Submit a test enquiry through the contact page to see it here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry.referenceId}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex flex-wrap justify-between gap-2">
                  <h2 className="text-lg font-bold text-orange-600">
                    {enquiry.referenceId}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {enquiry.submittedAt}
                  </span>
                </div>

                <div className="grid gap-4 text-sm sm:grid-cols-2 [&_p]:!text-gray-700 [&_strong]:!text-gray-900">
                  <p><strong>Customer:</strong> {enquiry.data.fullName}</p>
                  <p><strong>Mobile:</strong> {enquiry.data.phone}</p>
                  <p><strong>Email:</strong> {enquiry.data.email}</p>
                  <p><strong>Category:</strong> {enquiry.data.category}</p>
                  <p><strong>Vehicle:</strong> {enquiry.data.vehicleModel || 'Not selected'}</p>
                  <p><strong>Rental:</strong> {enquiry.data.durationValue} {enquiry.data.durationType}</p>
                  <p><strong>Pickup location:</strong> {enquiry.data.pickupLocation}</p>
                  <p><strong>Pickup date:</strong> {enquiry.data.pickupDate}</p>
                  <p><strong>Pickup time:</strong> {enquiry.data.pickupTime}</p>
                </div>

                {enquiry.data.message && (
                  <p className="mt-4 border-t pt-4 text-sm text-gray-700">
                    <strong>Special request:</strong> {enquiry.data.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 text-center text-xs text-gray-500">
          Demo dashboard: enquiries are stored only in this browser.
        </p>
      </div>
    </main>
  );
}
