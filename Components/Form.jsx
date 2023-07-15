export default function Form() {
  return (
    <div className='-mt-2 md:mt-0 xl:col-start-3 col-span-2 xl:-mt-60'>
      <div className='bg-[#152f2e] max-w-md sm:mx-auto shadow-lg px-5 py-8 md:px-10 flex items-center flex-col justify-between text-center mx-5'>
        <h2 className='text-2xl md:text-3xl leading-none font-work-sans text-white font-semibold'>
          Schedule an Appointment
        </h2>
        <p className='text-base mt-5 leading-6 font-muli text-white font-normal max-w-md'>
          Here, let visitors know what will happen <br />
          when they complete your form.
        </p>
        <form className='text-sm mt-5 max-w-md flex flex-col justify-center items-center gap-6'>
          <input
            type='text'
            name='FirstName'
            id='FirstName'
            placeholder='First Name*'
            className='h-46 text-sm leading-5 px-36 pl-2  rounded-sm p-3 border border-solid border-gray-300'
            required
          />
          <input
            type='text'
            name='LastName'
            id='LastName'
            placeholder='Last Name*'
            className='h-46 text-sm leading-5 px-36 pl-2  rounded-sm p-3 border border-solid border-gray-300'
            required
          />
          <input
            type='text'
            name='Email'
            id='Email'
            placeholder='Email*'
            className='h-46 text-sm leading-5 px-36 pl-2  rounded-sm p-3 border border-solid border-gray-300'
            required
          />
          <input
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            name='Phone'
            id='Phone'
            placeholder='Phone Number*'
            className='h-46 text-sm leading-5 px-36 pl-2  rounded-sm p-3 border border-solid border-gray-300'
            required
          />
          <select
            name='options'
            className='text-black h-46 text-sm leading-none px-32 pl-1  rounded-sm p-3 border border-solid border-gray-300'
            id='options'
          >
            <option defaultValue>Type of Appointment</option>
            <option value='One'>One</option>
            <option value='Two'>Two</option>
            <option value='Three'>Three</option>
            <option value='Four'>Four</option>
          </select>
          <button
            type='button'
            className='bg-[#00C2C5] duration-100 text-white  w-full py-3 rounded-sm text-base leading-6 font-semibold font-work-sans'
          >
            SCHEDULE NOW
          </button>
        </form>
      </div>
    </div>
  );
}
