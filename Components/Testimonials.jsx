import TestimonialsData from '../utilities/Testimonials';
export default function Testimonials() {
  return (
    <section className='flex justify-center items-center pb-8'>
      <div className='flex flex-col justify-center items-center mb-10 mt-12'>
        <h3 class='pt-5 text-xs leading-none font-work-sans tracking-wider text-teal-500 font-semibold md:text-xl'>
          Don't just take our word for it.
        </h3>
        <div className='lg:flex lg:flex-row md:mt-12 lg:container md:pl-4 '>
          {TestimonialsData.map((data) => (
            <TestimonialItem key={data.id} props={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialItem({ props }) {
  return (
    <div className='mx-8 md:mx-2 lg:ml-16 md:pt-4'>
      <div className='my-8 md:w-2/3'>
        <div className='text-base md:text-lg italic py-2 md:py-0 md:mx-6  mx-6'>
          <img
            src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg'
            alt='rating'
            className='pb-4 '
          />
          <p className='text-xl font-normal leading-none text-teal-900 '>
            {props.comment}
          </p>
          <div className='flex mt-6 '>
            <img src={props.profileImg} alt='profile-img' className='mr-6' />
            <div>
              <p className='mb-1 '>
                <strong>{props.name}</strong>
              </p>
              Location
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
