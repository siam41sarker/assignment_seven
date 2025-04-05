import { useEffect, useState } from "react";
import Player from "../Player/Player";
import { getItemFromLS } from "../../../public/local";
import PropTypes from "prop-types";
const Players =({handleSelectedPlayers,setSelectedPlayers})=>{
    const [players,setPlayers] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(response=>response.json())
        .then(data=>setPlayers(data))
        .catch(e=>console.log(e))
    },[])
    useEffect(()=>
        {   
            const newDataArray = [];
            console.log(players.length);
            if((players.length))
                {
                    const getDataFromLS = getItemFromLS();
                    for (const i of getDataFromLS)
                        {
                            console.log(i);
                            console.log(players);
                            const existingPlayer = players.find(eachPlayer=>eachPlayer.id === i);
                            newDataArray.push(existingPlayer);
                        }

                }
            setSelectedPlayers(newDataArray);
        },[players,setSelectedPlayers])
    return (
        <div className="max-w-7xl m-auto mt-[150px] grid grid-cols-3 gap-2">
            {players.map((player)=><Player key={player.id} player={player} handleSelectedPlayers ={handleSelectedPlayers}></Player>)}
        </div>
    );
}
Players.propTypes = {
    handleSelectedPlayers: PropTypes.func.isRequired,
    setSelectedPlayers:PropTypes.func.isRequired
}
export default Players;