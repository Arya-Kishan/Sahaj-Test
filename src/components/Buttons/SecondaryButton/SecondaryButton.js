
import styles from './secondaryButton.module.css'

export default function SecondaryButton({ children, className, onClick}) {

   return (
      <button className={`${styles['container']} ${className ? className : ''} `} onClick={onClick} >
         {children}
      </button>
   )
}
