import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";


const MenuCollection = (props) => {

      
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);
   


    return (
        <>

   {isMenuOpen && (
        <ImageViewer
          src={props.image}
          currentIndex={CurrentImg}
          disableScroll={false}
          onClose={closeViewer}
         
        />
      )}

        <div className="w-32 h-32 md:h-48 md:w-48 flex flex-col"
        onClick={openViewer}
        > 
          <div className="h-full w-full overflow-hidden rounded-lg">
            <img 
            src={props.image}
            alt="menu"
            className="w-full h-full transform rounded-lg transition duration-400 hover:scale-110"
            />     
         </div>  
            <div>
            <strong>{props.menuTitle}</strong>
             <p>{props.pages}</p>
            </div>
         </div>
        </>
    );
};

export default MenuCollection;
