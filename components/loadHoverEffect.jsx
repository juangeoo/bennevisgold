
import { useEffect, useState } from 'react';
import "./Hero.scss"


function loadHoverEffect() {

    const [selected, setSelected] = useState(0);

    useEffect(() => {
    
      const hand1 = document.getElementsByClassName('hero_hand1')
      const hand2 = document.getElementsByClassName('hero_hand2')
      const rock = document.getElementsByClassName('hero_rock')
      const pine = document.getElementsByClassName('hero_pine')
    
    
      return () => {
    
        // HAND 1
        hand1[0].addEventListener("mouseenter", function(){
          setSelected(1)
          rock[0].classList.add("hidden");
          pine[0].classList.add("hidden");
      });
    
      hand1[0].addEventListener("mouseleave", function(){
        setSelected(0)
        rock[0].classList.remove("hidden");
        pine[0].classList.remove("hidden");
    });
    
    // HAND 2
    hand2[0].addEventListener("mouseenter", function(){
      setSelected(1)
      rock[0].classList.add("hidden");
      pine[0].classList.add("hidden");
    });
    
    hand2[0].addEventListener("mouseleave", function(){
    setSelected(0)
    rock[0].classList.remove("hidden");
    pine[0].classList.remove("hidden");
    });
    
    // ROCK
    
    rock[0].addEventListener("mouseenter", function(){
      setSelected(1)
      hand1[0].classList.add("hidden");
      hand2[0].classList.add("hidden");
      pine[0].classList.add("hidden");
    });
    
    rock[0].addEventListener("mouseleave", function(){
    setSelected(0)
    hand1[0].classList.remove("hidden");
      hand2[0].classList.remove("hidden");
      pine[0].classList.remove("hidden");
    });
    
    
    // PINE
    
    pine[0].addEventListener("mouseenter", function(){
      setSelected(1)
      hand1[0].classList.add("hidden");
      hand2[0].classList.add("hidden");
      rock[0].classList.add("hidden");
    });
    
    pine[0].addEventListener("mouseleave", function(){
    setSelected(0)
    hand1[0].classList.remove("hidden");
      hand2[0].classList.remove("hidden");
      rock[0].classList.remove("hidden");
    });
    
        
      };
    }, [selected]);


}

export default loadHoverEffect