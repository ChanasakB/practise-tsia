import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/up.module.css'

export const UpEvent = () => {
  return (
    <div className='container'>
   <div className={styles.container}>
   <div className={styles.containertop}>
        <div className={styles.topbar}>
          <h1>Upcoming events</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facilis.</p>
        </div>
        <Link href="/" className={styles.view}>view all</Link>
    </div>
    <div className={styles.containerbtn}>
    <div className={styles.card}>
      <div className={styles.bgtop}></div>
        <div>
          <div className={styles.btn}>
             <div className={styles.cattag}>cattagory</div>
             <div className={styles.day}>
             <p>Sat, 13 Apr 2024</p>
              <button>
              <Image src={"/button.png"} width={8} height={8} alt='dot'/>
              <span>Upcoming</span>
              </button>
             </div>
             <div className={styles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident rem autem!</div>
             <Link href="/" className={styles.btnclick}>see more</Link>
        </div>
      </div>
    </div>
    </div>
   </div>
    
    </div>
  )
}

export default UpEvent;