import styles from '@/styles/Home.module.css'

export const Head = () => {
  return (
    <div className='container'>
    <div className={styles.bgimg} style={{backgroundImage: "url('/head1.jpg')"}}>
        <h2 className={styles.title}>event booking</h2>
    </div>
    </div>
  )
}

export default Head;