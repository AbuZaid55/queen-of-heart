import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { khwaahishInnerView } from '@/src/data/constants';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const VisitStore = () => {
  return (
    <div className='relative h-[343px] md:h-[508px]  3xl:h-[700px] w-full'>
      <img className='h-full w-full object-cover object-center' src= '/assets/khwaahish-inner-view.jpg' alt='Khwaahish Inner View' />
      <div className='flex flex-col justify-center items-center gap-4 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000099] h-4/6 w-11/12 md:h-3/6 md:w-2/3'>
        <h2 className='uppercase text-center text-[30px] leading-10 lg:text-[40px] lg:leading-[56px] lg:w-10/12 text-white text-balance  3xl:text-4xl'>
          Visit our store now to view this collection
        </h2>
        <div className='flex gap-8'>
          {/* <div className='h-10 w-10 bg-yellow-300'>
            logo
          </div> */}
          <FontAwesomeIcon icon={faMapMarkerAlt} className='h-8 w-8 text-white'/>
          <FontAwesomeIcon icon={faWhatsapp} className='h-8 w-8 text-white'/>
          
          <FontAwesomeIcon icon={faPhone} className='h-8 w-8 text-white'/>
        </div>
      </div>
    </div>
  );
};

export default VisitStore;
