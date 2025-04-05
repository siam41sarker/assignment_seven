import bg_img_ag from "../../assets/bg-shadow.png";
const InputContainer = () => {
  return (
    <div className="flex justify-center items-center max-w-7xl h-[384px] mx-auto rounded-3xl bg-[rgba(255,255,255,0.15)] border-2 border-solid border-white mb-28 relative top-[300px]">
      <div
        className="w-[97%] h-[343px] rounded-3xl bg-white border border-solid border-[rgba(19,19,19,0.1)] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bg_img_ag})`,
        }}
      >
        <h1 className="text-[rgb(19,19,19)] fontNav font-bold text-[32px]">
          Subscribe to our Newsletter
        </h1>
        <p className="mt-4 text-[rgba(19,19,19,0.7)] text-xl font-medium bannerFont">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex gap-6 mt-6">
          <form action="">
            <input
              type="email"
              className="w-[400px] h-14 bg-white border border-solid border-[rgba(19,19,19,0.15)] rounded-xl px-7 py-4 font-normal text-base fontNav text-[rgba(19,19,19,0.4)] "
              placeholder="Enter your email"
            />
            <input
              type="submit"
              value="Subscribe"
              className="ml-6 w-[145px] h-14 rounded-xl bg-gradient-to-r from-[rgb(220,141,183)] via-[rgb(241,179,113)] to-[rgb(246,198,85)] text-[rgb(19,19,19)] cursor-pointer fontNav font-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
