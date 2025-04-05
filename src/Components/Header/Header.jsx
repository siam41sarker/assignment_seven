import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
const  Header =({balance,handleBalance})=> {
    return (
        <section className="flex flex-col items-center gap-5 mx-auto mt-[50px] max-w-7xl">
            <Navbar balance={balance}></Navbar>
            <Banner handleBalance={handleBalance}></Banner>
        </section>
    );
}
Header.propTypes = {
    balance:PropTypes.number.isRequired,
    handleBalance:PropTypes.func.isRequired
}
export default Header;