export default function Home() {
  return (
    <section>
      <div
        className='w-full h-screen mt-0 mb-0'
        style={{
          backgroundImage: 'url("Home.jpg")',
        }}
      >
        <div className='container mx-auto p-12'>
          <div className='grid place-content-center'>
            <div className=' '>
              <img
                src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg'
                alt='logo'
                className=' mb-8 mt-8'
              />
              <h1 className='text-6xl leading-12 font-work-sans tracking-tighter text-teal-900 font-semibold lg:text-9xl md:6xl'>
                Describe the <br />
                value of booking
                <br /> an appointment
              </h1>
              <p className='text-base leading-7 font-work-sans text-teal-900 font-normal mt-8 md:text-2xl xl:grid-cols-2 md:grid-cols-2 grid '>
                No need to get clever. Tell people exactly what you're
                offering,then use this space to communicate your key value
                proposition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
