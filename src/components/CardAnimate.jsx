export const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const boundingRect = card.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;
    const centerX = boundingRect.width / 2;
    const centerY = boundingRect.height / 2;
    
    // Adjust sensitivity here
    const sensitivity = 15;

    // Adjust rotation angles based on mouse position
    const rotateX = (offsetY - centerY) / centerY * sensitivity; 
    const rotateY = (offsetX - centerX) / centerX * sensitivity; 

    // Set rotation properties
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);

    // Calculate color
    const red = Math.round((offsetX / boundingRect.width) * 255);
    const green = Math.round((offsetY / boundingRect.height) * 255);
    const blue = Math.round((Math.abs(offsetX - offsetY) / Math.max(boundingRect.width, boundingRect.height)) * 255);

    // Set color properties
    card.style.setProperty('--red', `${red}`);
    card.style.setProperty('--green', `${green}`);
    card.style.setProperty('--blue', `${blue}`);
};



export const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--red', '255');
    card.style.setProperty('--green', '255');
    card.style.setProperty('--blue', '255');
  };



function CardAnimate() {
  return null;
}

export default CardAnimate;
