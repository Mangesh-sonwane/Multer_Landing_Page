import FeatureData from '../utilities/FeatureData';

export default function Features() {
  return (
    <section className='p-10 xl:rounded-lg xl:max-w-6xl mx-auto gap-y-10 gap-x-2 grid md:grid-cols-3'>
      {FeatureData.map((item, i) => (
        <List item={item} key={i} />
      ))}
    </section>
  );
}

const List = ({ item }) => {
  return (
    <div className='space-y-4 xl:mx-auto xl:max-w-sm px-5 md:py-10'>
      <img className='w-full' src={item.img} alt={item.name} />
      <h4 className='text-base leading-none font-work-sans text-teal-900 font-semibold'>
        {item.name}
      </h4>
      <p className='text-base leading-6 font-muli text-teal-900 font-normal'>
        {item.para}
      </p>
    </div>
  );
};
