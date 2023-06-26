import styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faDiscord,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.team}>
        <strong>team DDD </strong>
        <span>ⓒ Don't defy defi</span>
      </div>
      <div className={styles.developer}>
        <strong>Developer</strong>
        <span>박경철</span>
        <span>장경호</span>
        <span>이정민</span>
      </div>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faGithub} style={{ color: "#b8add2" }} />
        <FontAwesomeIcon icon={faDiscord} style={{ color: "#b8add2" }} />
        <FontAwesomeIcon icon={faTwitter} style={{ color: "#b8add2" }} />
        <FontAwesomeIcon icon={faInstagram} style={{ color: "#b8add2" }} />
        <FontAwesomeIcon icon={faYoutube} style={{ color: "#b8add2" }} />
      </div>
    </div>
  )
}

export default Footer
