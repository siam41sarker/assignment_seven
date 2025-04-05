import footer_img from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="w-full h-[789px] bg-[rgb(6,9,26)] flex flex-col items-center justify-center">
        <img className="mt-[233px]" src={footer_img} />
        <div className="flex mt-16 gap-[177px]">
          <div className="w-[291px] h-[117px]">
            <h2 className="fontNav text-white font-semibold text-[18px]">
              About Us
            </h2>
            <p className="fontNav text-[rgba(255,255,255,0.6)] mt-4 text-left">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="w-[291px] h-[117px]">
            <h2 className="fontNav text-white font-semibold text-[18px]">
              Quick Links
            </h2>
            <ul className="fontNav text-[rgba(255,255,255,0.6)] mt-4 list-[square] marker:text-[rgba(255,255,255,0.6)] ml-6">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className=" h-[117px]">
            <h2 className="fontNav text-white font-semibold text-[18px]">
              Subscribe
            </h2>
            <p className="fontNav text-[rgba(255,255,255,0.6)] mt-4 text-left w-[291px]">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="mt-5 flex">
              <form>
                <input
                  type="email"
                  className="w-[240px] h-12 bg-white border border-solid border-[rgba(19,19,19,0.15)] rounded-ss-xl rounded-es-xl px-7 py-4 font-normal text-base fontNav text-[rgba(19,19,19,0.4)] "
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="w-[145px] h-12 rounded-ee-xl rounded-se-xl bg-gradient-to-r from-[rgb(246,198,85)]  via-[rgb(241,179,113)] to-[rgb(220,141,183)] cursor-pointer relative bottom-[1px]  text-[rgb(4,13,17)] fontNav font-bold"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="w-full h-[90px] border border-x-0 border-b-0 border-solid border-[rgba(255,255,255,0.15)] mt-[143px] flex justify-center items-center">
            <p className="fontNav text-[rgba(255,255,255,0.6)]">
              <small>
                    &copy;2025 Your Company All Rights Reserved.
              </small>
            </p>
        </div>
    </div>
  );
};
export default Footer;

       