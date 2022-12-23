import {FC} from 'react';
import {ISlide} from "@/ui/slider/slider.interface";
import {useSlider} from "@/ui/slider/useSlider";

import styles from './Slider.module.scss';
import {SlideArrow} from "@/ui/slider/SlideArrow/SlideArrow";
import {SlideItem} from "@/ui/slider/SlideItem";
import {CSSTransition} from "react-transition-group";

interface ISliderProps {
  slides: ISlide[]
  buttonTitle?: string
}

export const Slider: FC<ISliderProps> = ({buttonTitle, slides}) => {

  const {index, isNext, isPrev, slideIn, handleClick} = useSlider(slides.length)

  return (
    <div className={styles.slider}>
      {isPrev && <SlideArrow variant={'left'} clickHandler={() => handleClick('prev')}/>}

      <CSSTransition in={slideIn}
                     classNames='slide-animation'
                     timeout={300}
                     unmountOnExit
      >
        <SlideItem slide={slides[index]}
                   buttonTitle={buttonTitle}
        />
      </CSSTransition>


      {isNext && <SlideArrow variant={'right'} clickHandler={() => handleClick('next')}/>}
    </div>
  );
};