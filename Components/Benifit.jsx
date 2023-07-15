import Benefits from './Benifits';
import Form from './Form';

export default function Benifit() {
  return (
    <section className='md:px-5 grid md:grid-cols-2 lg:grid-cols-4 grid-flow-dense md:my-10 xl:max-w-6xl mx-auto mb-4'>
      <Form />
      <Benefits />
    </section>
  );
}
