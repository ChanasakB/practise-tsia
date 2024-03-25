import Image from 'next/image';
import styles from '@/styles/Scetion.module.css'

export const Section = () => {
  return (
    <div className='container'>
    <div className={styles.containSection}>
      <div className={styles.bgImg}/>
        {/* <Image src={"/headimgcard.png"} width={1600} height={692.25} alt="ImgHead" className={styles.containcardl}/> */}
        <div className={styles.containCard}>
           <div className={styles.containCardTop}>
           <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aspernatur</h1>
            <div className={styles.time}>
              <Image src={"/Vector.svg"} width={24} height={24} alt='logo1'/>
              <p>13-15 April 2024</p>
              <button>
              <Image src={"/button.png"} width={8} height={8} alt='dot'/>
              <span>Live</span>
              </button>
            </div>
            <div className={styles.time}>
            <Image src={"/Clock.svg"} width={24} height={24} alt='logo2' />
                <p>09:00 - 12:00</p>
            </div>
            <div className={styles.time}>
            <Image src={"/Location.svg"} width={24} height={24} alt='logo2'/>
                <p>Amnuay Silpa School Bangkok</p>
            </div>
           </div>
            <div className={styles.containCardBtn}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae, pariatur, nulla iste assumenda incidunt qui error dolorem dignissimos, et optio exercitationem esse vero ad nostrum provident. Aliquid, possimus earum.</p>
            <button>see more</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section;
