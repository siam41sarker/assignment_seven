import navLogo from '../../../src/assets/logo.png'
import dollar from '../../../src/assets/dollar.png'
import PropTypes from 'prop-types';
const Navbar = ({balance}) =>{
    return (
        <div className="flex justify-between items-center w-full max-w-7xl fixed p-4 top-0 left-1/2 transform -translate-x-1/2 shadow-xl rounded-xl bg-white/30 backdrop-blur-lg transition-all duration-300 z-[5]">
            <div>
                <img src={navLogo} />
            </div>
            <div className='flex items-center gap-12 fontNav'>
                <a className='text-[rgb(19,19,19)] text-base font-normal hover:border hover:border-solid hover:border-[rgba(19,19,19,0.1)] hover:rounded-xl hover:h-[52px] hover:flex hover:items-center hover:justify-center hover:text-base hover:text-[rgb(19,19,19)] hover:font-semibold hover:px-4' href="">Home</a>
                <a className='text-[rgb(19,19,19)] text-base font-normal hover:border hover:border-solid hover:border-[rgba(19,19,19,0.1)] hover:rounded-xl hover:h-[52px] hover:flex hover:items-center hover:justify-center hover:text-base hover:text-[rgb(19,19,19)] hover:font-semibold hover:px-4' href="">Fixures</a>
                <a className='text-[rgb(19,19,19)] text-base font-normal hover:border hover:border-solid hover:border-[rgba(19,19,19,0.1)] hover:rounded-xl hover:h-[52px] hover:flex hover:items-center hover:justify-center hover:text-base hover:text-[rgb(19,19,19)] hover:font-semibold hover:px-4' href="">Teams</a>
                <a className='text-[rgb(19,19,19)] text-base font-normal hover:border hover:border-solid hover:border-[rgba(19,19,19,0.1)] hover:rounded-xl hover:h-[52px] hover:flex hover:items-center hover:justify-center hover:text-base hover:text-[rgb(19,19,19)] hover:font-semibold hover:px-4' href="">Schedules</a>
                <button className='border border-solid border-[rgba(19,19,19,0.1)] rounded-xl h-[52px] flex justify-center items-center px-4 gap-3 text-[rgb(19,19,19)] text-base font-semibold'>
                    <p>{(balance>=6000000)&& balance === 6000000} {(balance === 0 || balance === 1)?balance+' Coin':balance+' Coins'}  </p>
                    <img className='w-6' src={dollar} />
                </button>
            </div>
        </div>
    );
}
Navbar.propTypes = {
    balance: PropTypes.number.isRequired
}
export default Navbar;