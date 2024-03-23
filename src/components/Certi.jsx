import Image from 'next/image';
import styles from "@/styles/Certi.module.css"

export const Certi = () => {
  return (
    <>
    <div className={styles.container}>
      {/* <div className={styles.img}>img</div> */}
      <div>
        <Image src={"/certificate.png"} width={1500} height={800} layout="responsive" alt='logo1'/>
      </div>
      <div className={styles.right}>
        <div>
          <h1>professional certification in teaching</h1>
        </div>
        <div className={styles.buttonbtn}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, est iure! Laudantium quisquam voluptates voluptatibus maiores, voluptatem nemo ad quidem perferendis. Harum cum illo minus repellat sit enim, quia explicabo, ipsum eius laboriosam ea, nihil eaque alias atque qui reprehenderit amet. Sapiente ut rem blanditiis quam. Delectus dolores consequuntur minima.</p>
            <button>see more</button>
            </div>
      </div>
    </div>
    </>
  )
}

export default Certi;
