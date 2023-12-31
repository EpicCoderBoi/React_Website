import {card} from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (

  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" />in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover unbeatable card deals effortlessly with our cutting-edge platform! 
        Navigate through a curated selection of the best credit card offers tailored to your needs. 
        Whether you're looking for rewards, low-interest rates, or exclusive perks, we've got you covered. 
        Take the guesswork out of finding the perfect card for you. 
        Start maximizing your benefits and savings today. 
        Join now and embark on a journey to find great card deals that match your financial goals!
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>

)

export default CardDeal
