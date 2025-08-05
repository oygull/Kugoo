import React, {useState} from "react";
import styles from "./diagnostics.module.scss";
import { Link } from "react-router-dom";
import zoomUI from "../../app/assets/images/zoomUI.png";
import zoom from "../../app/assets/icons/zoom.png";
import tickItem from "../../app/assets/icons/checkCircle.png";
import videoImgCover from "../../app/assets/images/diagnosticsCover.jpg";
import playIcon from "../../app/assets/icons/play.png";
import videoCoverImg from '../../app/assets/images/videoCover.jpg';

function Diagnostics() {

  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
      setIsPlaying(true);
    };

  return(
    <div className={styles.diagnostics}>
      <div className={styles.diagnosticsTop}>
        <div className="container">
          <div className={styles.diagnosticsTopInneer}>
            <div className={styles.diagnosticsImgBox}>
              <img src={zoom} alt="zoom" className={styles.zoomIcon}/>
            <img  className={styles.diagnosticsImg} alt="diagnostics" src={zoomUI}/>
            </div>
             <div className={styles.diagnosticsContent}>
                <p className={styles.contentBadge}>Услуга</p>
                <h3 className={styles.diagnosticsTitle}>Определим причину неисправности удаленно или на диагностике!</h3>
                <Link className={styles.diagnosticsBtn} to="/">Записаться на диагностику</Link>
             </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.diagnosticsServices}>
          <div className={styles.servicesItems}>
            <div className={styles.servicesVideoWrap}>
              {
                !isPlaying ? (
                  <div onClick={handlePlay} className={styles.videoWrap}>
                    <img  src={videoImgCover} alt="videoCoverImg"/>
                    <button className={styles.playBtn}>
                      <img src={playIcon} alt="playIcon"/>
                    </button>
                  </div>
                ) : (
                  <div className={styles.videoWrap}>
                  <iframe width="100%"
                  height="430"
                    src="https://www.youtube.com/embed/6XgjJEVLCiU?autoplay=1&mute=0" 
                    title="You Tube video" 
                    allow="accelerometer; autoplay;"
                    allowFullScreen>
                  </iframe>
              </div>
                )
            }
            </div>
            <div className={styles.servicesContent}>
              <h3>Сделаем гидроизоляцию электросамоката</h3>
              <p className={styles.servicesPar}>которая позволит вам кататься в любую погоду</p>
              <p className={styles.servicesText}>Гидроизоляция – это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.</p>
              <h4 className={styles.servicesSubTitle}>Что дает гидроизоляция:</h4>
              <div className={styles.servicesRow}>
                <img alt="tickItem" src={tickItem}/>
                <p>Возможность выезжать в дождь или после дождя</p>
              </div>
              <div className={styles.servicesRow}>
                <img alt="tickItem" src={tickItem}/>
                <p>Можно ездить в любое время года</p>
              </div>
              <div className={styles.servicesRow}>
                <img alt="tickItem" src={tickItem}/>
                <p>Защита от влаги, пыли и грязи продлит срок беспроблемного использования.</p>
              </div>
              <Link className={styles.servicesLink} to="">Подробнее про гидроизоляцию прочитайте в <span> нашей статье  </span> </Link>
            </div>
          </div>
          <div className={styles.servicesItems}>
            <div className={styles.servicesContent}>
                <h3>Сделаем гидроизоляцию электросамоката</h3>
                <p className={styles.servicesPar}>которая позволит вам кататься в любую погоду</p>
                <p className={styles.servicesText}>Гидроизоляция – это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.</p>
                <h4 className={styles.servicesSubTitle}>Что дает гидроизоляция:</h4>
                <div className={styles.servicesRow}>
                  <img alt="tickItem" src={tickItem}/>
                  <p>Возможность выезжать в дождь или после дождя</p>
                </div>
                <div className={styles.servicesRow}>
                  <img alt="tickItem" src={tickItem}/>
                  <p>Можно ездить в любое время года</p>
                </div>
                <div className={styles.servicesRow}>
                  <img alt="tickItem" src={tickItem}/>
                  <p>Защита от влаги, пыли и грязи продлит срок беспроблемного использования.</p>
                </div>
                <Link className={styles.servicesLink} to="">Подробнее про гидроизоляцию прочитайте в <span> нашей статье  </span> </Link>
            </div>
            <div className={styles.servicesVideoWrap}>
              <img  src={videoCoverImg} alt="videoCoverImg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Diagnostics;