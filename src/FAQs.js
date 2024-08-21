import React from 'react';

const FAQs = () => {
  return (
    <div className='text-indigo-600 font-shippori'>
      <div className='mx-14 mt-28 overflow-hidden flex justify-center text-2xl md:text-4xl font-bold'>
        <h1>Frequently Asked Questions.</h1>
      </div>
      <div className='m-8 mx-14 mb-20 mt-4 grid lg:grid-cols-3 sm:grid-cols-1 gap-4 px-10 pt-4 pb-4 overflow-hidden shadow-md'>
        {/* faq 1 */}
        <div className='card max-w-4xl opacity-100 overflow-hidden'>
          <div className='p-8 pb-0'>
            <h1 className='text-lg md:text-xl p-4 pl-0 font-bold'>
              Has this been authenticated?
            </h1>
            <p className='text-base md:text-lg'>
              All watches at The Uglee One are guaranteed authentic by our
              trusted watchmakers and us. Certificate included!
            </p>
          </div>
        </div>
        {/* faq 2 */}
        <div className='card max-w-4xl opacity-100 overflow-hidden'>
          <div className='p-8 pb-0'>
            <h1 className='text-lg md:text-xl p-4 pl-0 font-bold'>
              Has this been serviced?
            </h1>
            <p className='text-base md:text-lg'>
              All watches at The Uglee One are professionally serviced before
              being offered at our shop. Servicing is done by our trusted
              watchmakers and gone through very capable hands.
            </p>
          </div>
        </div>
        {/* faq 3 */}
        <div className='card max-w-4xl opacity-100 overflow-hidden'>
          <div className='p-8 pb-0'>
            <h1 className='text-lg md:text-xl p-4 pl-0 font-bold'>
              Mechanical Guarantee?
            </h1>
            <p className='text-base md:text-lg'>
              Each watch comes with a 1-year mechanical warranty so if anything
              goes wrong, please let us know immediately.
            </p>
          </div>
        </div>
        {/* faq 4 */}
        <div className='card max-w-4xl opacity-100 overflow-hidden'>
          <div className='p-8'>
            <h1 className='text-lg md:text-xl p-4 pl-0 font-bold'>
              Inspection Period?
            </h1>
            <p className='text-base md:text-lg'>
              We definitely want you to love your watch, so you always have 14
              days to fall in love or return to Goldammer, no questions asked.
            </p>
          </div>
        </div>
        {/* faq 5 */}
        <div className='card max-w-4xl opacity-100 overflow-hidden'>
          <div className='p-8'>
            <h1 className='text-lg md:text-xl p-4 pl-0 font-bold'>
              How much is Shipping?
            </h1>
            <p className='text-base md:text-lg'>
              We exclusively deliver worldwide via DHL Express which is free for
              you.
            </p>
          </div>
        </div>
        {/* faq 6 */}
        <div className='card max-w-4xl opacity-100 overflow-hidden'>
          <div className='p-8'>
            <h1 className='text-lg md:text-xl p-4 pl-0 font-bold'>
              General Care?
            </h1>
            <p className='text-base md:text-lg'>
              Given that most of our watches are around half a century old, they
              will need to be treated with extra love and care, and they require
              servicing every 4-5 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
