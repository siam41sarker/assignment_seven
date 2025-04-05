import PropTypes from "prop-types";
const CartContainer = ({ handleCart, cart, selectedPlayers }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-20  sticky top-28 z-10">
        <div className="flex justify-end">
          <button
            onClick={() => handleCart("players")}
            className={`${
              cart.carts
                ? "border border-solid border-[rgba(19,19,19,0.1)] bg-[rgb(231,254,41)]  rounded-es-xl rounded-ss-xl w-[141px] px-[30px] py-2 text-[rgb(19,19,19)] fontNav text-base font-bold"
                : "border border-solid border-[rgba(19,19,19,0.1)]  rounded-es-xl rounded-ss-xl w-[138px] px-[30px] py-2 text-[rgba(19,19,19,0.6)] fontNav text-base font-normal shadow-xl backdrop-blur-lg bg-white"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleCart("selected")}
            className={`${
              cart.carts === false
                ? "border border-solid border-[rgba(19,19,19,0.1)] bg-[rgb(231,254,41)]  rounded-se-xl rounded-ee-xl w-[141px] px-[30px] py-2 text-[rgb(19,19,19)] fontNav text-base font-bold"
                : "border border-solid border-[rgba(19,19,19,0.1)]  rounded-se-xl rounded-ee-xl w-[138px] px-[30px] py-2 text-[rgba(19,19,19,0.6)] fontNav text-base font-normal shadow-xl backdrop-blur-lg bg-white"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {cart.carts ? (
          <h1 className="text-[rgb(19,19,19)] text-[28px] font-bold fontNav">
            Available Players
          </h1>
        ) : (
          <h1 className="text-[rgb(19,19,19)] text-[28px] font-bold fontNav">
            Selected Player ({selectedPlayers.length}/6)
          </h1>
        )}
      </div>
    </>
  );
};
CartContainer.propTypes = {
  handleCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  selectedPlayers:PropTypes.array.isRequired
};
export default CartContainer;
