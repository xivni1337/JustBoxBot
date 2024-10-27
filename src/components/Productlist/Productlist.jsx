import React, { useCallback, useEffect } from 'react';
import "./Productlist.css"
import ProductItem from '../ProductItem/ProductItem';
import { useTg } from '../../hooks/useTg';

const products = [
    {id:'1',title:'title',price:200, discription:'...'},
    {id:'2',title:'title',price:200, discription:'...'},
    {id:'3',title:'title',price:200, discription:'...'},
    {id:'4',title:'title',price:200, discription:'...'},
]
const getTotalPrice = (items=[]) => {
    items.reduce((total,item) => {
        return total += item.price
    },0) 
}
const Productlist = (props) => {
    const {tg} = useTg
    const [addedItems, setAddedItems] = React.useState([]) 
    const onSendData = useCallback(() => {
        const data = {
            products:addItems,
            totalprice:getTotalPrice(addItems),
        }
        tg.sendData(JSON.stringify(data))
    },[])
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () =>{
            tg.onEvent('mainButtonClicked', onSendData)
        }
    },[onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find((item) => item.id === product.id)
        let newItems = []
        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }
        setAddedItems(newItems)
        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show(),
            tg.MainButton.setParams({
                text: `Купить :  ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className={"list"}>
            {products.map(item => {
                <ProductItem
                    key = {item.id}
                    product = {item}
                    onAdd = {onAdd}
                    className = {item}
                />
            })}
        </div>
    )
};

export default Productlist;