import bg_banner from '../../assets/bg-shadow.png'
import img_banner from '../../assets/banner-main.png'
import PropTypes from 'prop-types';
const Banner =({handleBalance}) =>{
    return (
        <div
            style={
                {
                    backgroundImage:`url(${bg_banner})`
                }
            } 
            className="w-full h-[545px] rounded-3xl bg-[rgb(19,19,19)] mt-[58px] flex flex-col items-center gap-6">
                <img className='mt-16' src={img_banner} alt="" />
                <h1 className='fontNav text-[40px] font-bold text-white '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-[rgba(255,255,255,0.7)] bannerFont text-2xl font-medium'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleBalance} className='border border-solid border-[rgb(231,254,41)] rounded-2xl w-[200px] h-16'>
                    <span className=' bg-[rgb(231,254,41)] rounded-xl py-[14px] px-5 fontNav text-[rgb(19,19,19)] hover:font-bold'>Claim Free Credit</span>
                </button>
        </div>
    );
} 
Banner.propTypes = {
    handleBalance: PropTypes.func.isRequired
};
export default Banner;