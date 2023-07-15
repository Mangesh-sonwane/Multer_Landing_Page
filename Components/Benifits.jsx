import Data from '../utilities/Data';

export default function Benifits() {
  return (
    <div className='px-10 my-10 xl:col-span-2 xl:max-w-xl md:col-span-full lg:col-span-2 mx-auto space-y-10'>
      {Data.map((item, index) => {
        return (
          <Benefit
            key={index}
            logo={item.img}
            benefitName={item.heading}
            para={item.description}
          />
        );
      })}
    </div>
  );
}

const Benefit = ({ logo, benefitName, para, key }) => {
  return (
    <div key={key} className='flex gap-5'>
      <div className='w-14'>
        <img src={logo} alt={benefitName} className='w-full' />
      </div>
      <div className='w-full'>
        <h4 className='font-bold text-lg md:text-xl pb-1'>{benefitName}</h4>
        <p className='text-sm md:text-lg'>{para}</p>
      </div>
    </div>
  );
};
