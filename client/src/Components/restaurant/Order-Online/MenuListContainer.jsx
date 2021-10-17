
import React, { useState } from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
      
    const [selected,setSelected] = useState("");
    const onCLickhandler =(e ) =>{
        if(e.target.id){
            setSelected(e.target.id);
        }
        return;
    };


  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <MenuCategory
          name={props.name}
          items={props.items}
          onClickHandler={props.onClickHandler}
          isActive={props.selected === props.name}
        />
      </div>
    </>
  );
};

export default MenuListContainer;
