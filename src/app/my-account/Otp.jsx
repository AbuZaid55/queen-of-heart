import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck }  from '@fortawesome/free-solid-svg-icons';

const Otp = ({number,setOtpSent}) => {
    const handleClick = () => {
        setOtpSent(false)
        window.addEventListener('click',()=>console.log('click')
        )
    }
 return (
    <div className='absolute bg-black/40 h-screen w-screen font-gothic'>
        
    <div className='flex flex-col justify-around items-center w-11/12  3xl:w-[600px] 3xl:h-[400px]  bg-white h-72 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] sm:w-[480px] sm:h-[270px] rounded-lg'>
    <div className='text-#663624'>
        <FontAwesomeIcon icon={faCheck} style={{border:"4px solid #663624",padding:"13px 15px",borderRadius:"100%", color:'#663624', fontSize:'50px'}}/>
    </div>
       <h1 className=' text-center font-bold text-2xl 3xl:text-4xl'>OTP sent to +91{number}</h1>
       <button onClick={handleClick} className='px-8 py-1.5 bg-[#663624] text-white 3xl:text-4xl'>Ok</button>
    </div>
    </div>
  )
}

export default Otp;
