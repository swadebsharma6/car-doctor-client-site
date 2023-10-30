import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <section>
        <div className="hero min-h-[700px] mb-20">
        <div className="hero-content flex-col lg:flex-row">
         <div className='lg:w-1/2 p-4 relative'>
         <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
         <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-red-50 border-8" />
         </div>
          <div className='lg:w-1/2 p-6'>
            <h4 className='text-2xl font-bold text-orange-500 mb-4 underline'>About Us</h4>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p className='mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
        </section>
    );
};

export default About;