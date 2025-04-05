import { IoPerson,IoFlagSharp} from "react-icons/io5";
import PropTypes from 'prop-types'
const Player = ({player,handleSelectedPlayers}) =>{
    const {player_name,image,role,batting_style,bowling_style,price,country,rating} = player;
    return (
        <div className="flex flex-col w-[424px] rounded-2xl border border-solid border-[rgba(19,19,19,0.1)]">
            <div className="w-full p-6">
                <img className="w-full h-[240px] object-cover rounded-2xl" src={image} />
                <div className="mt-6 flex gap-4">
                    <div><IoPerson className="text-[rgba(19,19,19,0.8)] text-2xl"/></div>
                    <h1 className="fontNav text-[rgb(19,19,19)] text-xl font-semibold">{player_name}</h1>
                </div>
            </div>
            <div className="flex justify-between  px-6 pb-6">
                <div className="flex gap-3">
                    <IoFlagSharp className="text-[rgba(19,19,19,0.8)] text-lg mt-3"/>
                    <h1 className="text-base fontNav font-normal text-[rgb(19,19,19)] mt-3">{country}</h1>
                </div>
                <div className="w-[119px] h-9 rounded-lg bg-[rgba(19,19,19,0.05)] fontNav text-[rgb(19,19,19)] font-normal flex items-center justify-center ">{role}</div>
            </div>
            <hr className="px-6 pb-6 w-[376px] mx-auto" />
            <div className="px-6 pb-6 flex justify-between">
                <h1 className="text-base fontNav font-bold text-[rgb(19,19,19)]">Rating:</h1>
                <p className="text-base fontNav font-bold">{rating}</p>
            </div>
            <div className="px-6 pb-6 flex justify-between">
                <h1 className="text-base fontNav font-semibold text-[rgb(19,19,19)]">{batting_style}</h1>
                <p className="text-base fontNav font-normal text-[rgba(19,19,19,0.7)]">{bowling_style}</p>
            </div>
            <div className="px-6 pb-6 flex justify-between items-center">
                <h1 className="text-base fontNav font-semibold text-[rgb(19,19,19)]">Price: $ {price}</h1>
                <button onClick={()=>handleSelectedPlayers(player)} className="w-[134px] h-9 rounded-lg border border-solid border-[rgba(19,19,19,0.1)] flex justify-center items-center fontNav font-normal text-sm text-[rgb(19,19,19)] hover:bg-[rgb(231,254,41)] hover:font-bold">Choose Player</button>
            </div>
        </div>
    );
}
Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectedPlayers:PropTypes.func.isRequired
}
export default Player;