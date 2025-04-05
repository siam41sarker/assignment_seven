import { RiDeleteBinLine } from "react-icons/ri";
import PropTypes from "prop-types";
const Selected = ({ selectedPlayers,handleDelete,handleCart}) => {
  return (
    <div className="mb-10 max-w-7xl mx-auto">
      {selectedPlayers.map(player => (
        <div key={player.id} className="mt-8 border border-solid border-[rgba(19,19,19,0.1)] rounded-2xl p-6">
            <div className="flex justify-between ">
                  <div className="flex gap-6">
                        <img className="w-20 h-20 rounded-2xl object-cover" src={player.image}/>
                        <div className="flex flex-col gap-3">
                                <h1 className="text-[rgb(19,19,19)] fontNav text-2xl font-semibold">{player.player_name}</h1>
                                <p className="text-[rgba(19,19,19,0.6)] fontNav text-base font-normal">{(player.role)==='Bowler'?`${player.bowling_style}`:`${player.batting_style}`}</p>
                        </div>
                  </div>
                  <button onClick={()=>handleDelete(player)}><RiDeleteBinLine className="my-auto text-3xl text-[rgb(241,71,73)]"/></button>
            </div>
        </div>
      ))}
      <div className=" mt-12">
            <button onClick={()=>handleCart('players')} className="w-[192px] h-16 rounded-2xl border border-solid border-[rgb(19,19,19)] bg-[rgba(255,255,255,0.05)]"><span className="rounded-xl bg-[rgb(231,254,41)] py-[14px]
             px-5 text-[rgb(19,19,19)] fontNav text-base font-normal hover:font-bold">Add More Player</span></button>
      </div>
    </div>
  );
};
Selected.propTypes = {
  selectedPlayers:PropTypes.func.isRequired,
  handleDelete:PropTypes.func.isRequired,
  handleCart:PropTypes.func.isRequired
}
export default Selected;
