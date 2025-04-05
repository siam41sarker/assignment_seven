const getItemFromLS = () =>
    {
        const getStrData = localStorage.getItem('cart');
        return ((getStrData)?JSON.parse(getStrData):[])
    }
const saveItemToLS = id =>
    {
        const cart = getItemFromLS();
        if(!cart.includes(id))
            {
                if(cart.length<6)
                {
                    cart.push(id)
                }
            }
        addItemToLS(cart);
    }
const addItemToLS = cart =>
    {
        const cartStr = JSON.stringify(cart);
        localStorage.setItem('cart',cartStr);
    }
const deleteFromLS = id =>
    {
        const dataFromLS = getItemFromLS();
        const remaining = dataFromLS.filter(eachId=>eachId!==id);
        addItemToLS(remaining);
    }
export {saveItemToLS,getItemFromLS,deleteFromLS};