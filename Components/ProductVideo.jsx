export default function ProductVideo() {
  return (
    <section className='text-center'>
      <div className='flex flex-col justify-center items-center space-y-5 text-center h-full px-3 bg-[#d4f4f3] w-full mx-auto md:px-40 py-20 gap-4'>
        <h1 className='text-2xl mx-12 font-work-sans md:text-4xl font-semibold md:w-[450px] pt-10'>
          Show visitors what they're signing up for
        </h1>
        <p className='mx-4 text-normal md:w-[600px] mb-[70px] pb-24'>
          Include a video or photo from one of your sessions to help people
          understand your service (or just to hype ‘em up).
        </p>
      </div>
      <div className='px-10 -mt-28 mb-10'>
        <video controls width={960} className='mx-auto '>
          <source src='video.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
}
