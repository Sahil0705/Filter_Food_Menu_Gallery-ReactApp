import React, {useState,useEffect} from 'react'
import "./index.css";
import Menu from "./Api_Menu";
import MenuItems from './MenuItems';
import Tabs from './Tabs';

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [state, setState] = useState("Whole Menu");
    const [filterfood, setfilterfood] = useState({
        type:"",
        category:""
    });
    
    let updatedItems = [];
    const updateFoodItemList = () => 
    {
        // alert(filterfood.type+" "+filterfood.category);
        if(filterfood.type!="" && filterfood.category!="")
        {

            updatedItems = Menu.filter((curElem) => 
                {
                    if(curElem.category==filterfood.category && curElem.type==filterfood.type)
                        return curElem;
                    
                }
            )
            setItems(updatedItems)
            setState(`${filterfood.type} Menu for ${filterfood.category}`);
        }
        else if(filterfood.type!="" && filterfood.category=="")
        {

            updatedItems = Menu.filter((curElem) => 
                {
                    if(curElem.type==filterfood.type)
                        return curElem;
                    
                }
            )
            setItems(updatedItems);
            setState(`${filterfood.type} Menu`);
        }
        else if(filterfood.type=="" && filterfood.category!="")
        {

            updatedItems = Menu.filter((curElem) => 
                {
                    if(curElem.category==filterfood.category)
                        return curElem;
                    
                }
            )
            setItems(updatedItems);
            setState(`Veg & Non-Veg Menu for ${filterfood.category}`);
        }
        else
        {
            setItems(Menu);
            setState("Whole Menu");
        }
    }

    function selectedBtn(name)
    {
        
        if(name=='veg')
        {
            if(!document.getElementById('veg').classList.contains('isactive'))
            {
                document.getElementById('veg').classList.add('isactive');
                document.getElementById('non_veg').classList.remove('isactive');
                document.getElementById('all').classList.remove('isactive');
                filterfood['type'] = 'veg';
            }
        }
        else if(name=='non_veg')
        {
            if(!document.getElementById('non_veg').classList.contains('isactive'))
            {
                document.getElementById('non_veg').classList.add('isactive');
                document.getElementById('veg').classList.remove('isactive');
                document.getElementById('all').classList.remove('isactive');
                filterfood['type'] = 'non_veg';
            }
        }
        else if(name=='bf')
        {
            if(!document.getElementById('bf').classList.contains('isactive'))
            {
                document.getElementById('bf').classList.add('isactive');
                document.getElementById('lc').classList.remove('isactive');
                document.getElementById('ev').classList.remove('isactive');
                document.getElementById('dn').classList.remove('isactive');
                document.getElementById('all').classList.remove('isactive');
                filterfood['category'] = 'breakfast';
            }
        }
        else if(name=='lc')
        {
            if(!document.getElementById('lc').classList.contains('isactive'))
            {
                document.getElementById('bf').classList.remove('isactive');
                document.getElementById('lc').classList.add('isactive');
                document.getElementById('ev').classList.remove('isactive');
                document.getElementById('dn').classList.remove('isactive');
                document.getElementById('all').classList.remove('isactive');
                filterfood['category'] = 'lunch';
            }
        }
        else if(name=='ev')
        {
            if(!document.getElementById('ev').classList.contains('isactive'))
            {
                document.getElementById('bf').classList.remove('isactive');
                document.getElementById('lc').classList.remove('isactive');
                document.getElementById('ev').classList.add('isactive');
                document.getElementById('dn').classList.remove('isactive');
                document.getElementById('all').classList.remove('isactive');
                filterfood['category'] = 'evening';
            }
        }
        else if(name=='dn')
        {
            if(!document.getElementById('dn').classList.contains('isactive'))
            {
                document.getElementById('bf').classList.remove('isactive');
                document.getElementById('lc').classList.remove('isactive');
                document.getElementById('ev').classList.remove('isactive');
                document.getElementById('dn').classList.add('isactive');
                document.getElementById('all').classList.remove('isactive');
                filterfood['category'] = 'dinner';
            }
        }
        else if(name=='all')
        {
            if(!document.getElementById('all').classList.contains('isactive'))
            {
                document.getElementById('all').classList.add('isactive');
                document.getElementById('non_veg').classList.remove('isactive');
                document.getElementById('veg').classList.remove('isactive');
                document.getElementById('bf').classList.remove('isactive');
                document.getElementById('lc').classList.remove('isactive');
                document.getElementById('ev').classList.remove('isactive');
                document.getElementById('dn').classList.remove('isactive');
                filterfood['type'] = '';
                filterfood['category'] = '';
            }
        }
        
        setfilterfood(filterfood);
        updateFoodItemList();
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order the Food Items (You can filter based on your needs)</h1>
            <hr />
            <Tabs setItems={setItems} selectedBtn={selectedBtn}/>
            <h1 className="mt-5 text-center main-heading">{state}</h1>
            <MenuItems items={items}/>
        </>
    )
}

export default GalleryReact
