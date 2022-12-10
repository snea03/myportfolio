// import React, {useState} from 'react';
// // import {FaArrowCircleUp} from 'react-icons/fa';
// // import { facirclearrowup} from FontAwesomeIcon 
// import { Button } from './Style';


// // import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
  
// const ScrollButton = () =>{
  
//   const [visible, setVisible] = useState(false)
  
//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300){
//       setVisible(true)
//     } 
//     else if (scrolled <= 300){
//       setVisible(false)
//     }
//   };
  
//   const scrollToTop = () =>{
//     window.scrollTo({
//       top: 0, 
//       behavior: 'smooth'
//       /* you can also use 'auto' behaviour
//          in place of 'smooth' */
//     });
//   };
  
//   window.addEventListener('scroll', toggleVisible);
  
//   return (
//     <Button>
//     <FontAwesomeIcon icon="fa-solid fa-circle-arrow-up"  onClick={scrollToTop} 
//      style={{display: visible ? 'inline' : 'none'}} />
//     </Button>
//   );
  
// }
  
// export default ScrollButton;