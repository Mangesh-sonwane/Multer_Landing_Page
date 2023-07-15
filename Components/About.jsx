export default function About() {
  return (
    <section className='px-10 my-20 xl:max-w-6xl mx-auto'>
      <div className='lg:flex lg:items-center lg:justify-center'>
        <div className='mb-5 lg:mb-0 lg:w-1/2'>
          <img
            src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10go0ei00000000000001o.jpg'
            alt='image'
            className='w-full rounded-lg'
          />
        </div>
        <div className=' lg:pl-12 lg:text-left lg:w-96'>
          <h2 className='text-xs leading-none font-work-sans tracking-wider font-semibold text-teal-500 md:text-xl lg:text-left py-8'>
            About Us
          </h2>
          <h5 className='font-semibold text-xl md:text-2xl leading-none font-work-sans text-teal-900 w-48 md:w-2/3'>
            Some more information about your business
          </h5>
          <p className='text-sm md:text-lg lg:mt-4 mt-4'>
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you.
          </p>
        </div>
      </div>
    </section>
  );
}
