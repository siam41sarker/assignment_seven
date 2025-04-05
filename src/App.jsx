import { useState } from 'react'
import './App.css'
import CartContainer from './Components/CartContainer/CartContainer'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players'
import Selected from './Components/Selected/Selected'
import { ToastContainer,toast } from 'react-toastify'
import {deleteFromLS, saveItemToLS} from '../public/local'
import InputContainer from './Components/InputContainer/InputContainer'
import Footer from './Components/Footer/Footer'
function App() {
  const [cart,setCart] = useState(
    {
        carts: true,
        status:'players'
    }
  )
const handleCart = status =>
    {
      if(status === 'players')
        {
            setCart({
              carts:true,
              status:'players'
            })
        }
      else
        {
            setCart(
                {
                    carts:false,
                    status:'selected'
                }
            )
        }
    }
    const [selectedPlayers,setSelectedPlayers] = useState([]);
    const [balance,setBalance] = useState(0);
    const handleSelectedPlayers =player=>
      {
          const selectedAlready  = selectedPlayers.find(selected=>selected.id===player.id)
            if(selectedAlready)
              {
                 
                toast.error(`${player.player_name} Is Already Selected!`,{
                  position:'top-center',
                  style:{
                      fontSize:'20px',
                      width:'450px',
                      paddingTop:'20px',
                      paddingBottom:'20px'
                  }
              },)
              }
            else
              {
                if(selectedPlayers.length>=6)
                  {
                    toast.error("Cart Is Full. Six players are already selected",{
                      position:'top-center',
                      style:{
                        fontSize:'20px',
                        width:'450px',
                        paddingTop:'20px',
                        paddingBottom:'20px'
                      }
                    })
                  }
                else if(balance<player.price)
                  {
                      toast.error("Insufficient Balance!",{
                        position:'top-center',
                        style:{
                          fontSize:'20px',
                          width:'450px',
                          paddingTop:'20px',
                          paddingBottom:'20px'
                        }
                      })
                  }
                 
                else
                    {
                      toast.success(`${player.player_name} Is successfully Selected!`,{
                        position:'top-center',
                        style:{
                            fontSize:'20px',
                            width:'450px',
                            paddingTop:'20px',
                            paddingBottom:'20px'
                        }
                    },)
                        const newlyAdded = [...selectedPlayers,player];
                        setSelectedPlayers(newlyAdded);
                        saveItemToLS(player.id);
                        const availableBalance = balance-player.price;
                        setBalance(availableBalance);
                    }
              }
      }
          const handleBalance = () =>
              {
                  if(balance>=6000000)
                      {
                          toast.error('No More Coins To Be Added!',{
                              position:'top-center',
                              style:{
                                  fontSize:'20px',
                                  width:'400px',
                                  paddingTop:'20px',
                                  paddingBottom:'20px'
                              }
                          },)
                      }
                  else
                      {
                          toast.success('Coins Are Added Successfully!',{
                              position:'top-center',
                              style:{
                                  fontSize: '20px',
                                  width:'400px',
                                  paddingTop:'20px',
                                  paddingBottom:'20px'
                              }
                          })
                          setBalance(balance=>Math.min(balance+1000000,6000000));
                      }
              }
        const handleDelete = player =>
            {
                console.log(player);
                const remainingPlayers = selectedPlayers.filter(selected=>selected.id!==player.id);
                const newBalance = balance + player.price;
                setSelectedPlayers(remainingPlayers);
                setBalance(newBalance);
                deleteFromLS(player.id);
            }
  return (
    <>
      <Header handleBalance={handleBalance} balance={balance} ></Header>
      <CartContainer cart = {cart} handleCart={handleCart} selectedPlayers={selectedPlayers}></CartContainer>
      {(cart.carts)?<Players setSelectedPlayers={setSelectedPlayers} handleSelectedPlayers={handleSelectedPlayers} ></Players>:<Selected selectedPlayers={selectedPlayers} handleCart={handleCart}  handleDelete={handleDelete}></Selected>}
      <InputContainer></InputContainer>
      <Footer></Footer>
      <ToastContainer/>
    </>
  )
}
export default App
