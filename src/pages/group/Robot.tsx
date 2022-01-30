import { BackToTop } from "../../components/BackToTop";
import UFO from "./img/ufo.png";

export const Robot = () => {
  return (
    <div id="robot" className="group">
      <h2>ロボット班</h2>
      <p>ロボット班はEV3班とサッカーロボット班があります。</p>
      <p>
        EV3班では、LEGO® Mindostorms®
        EV3を用いて、UFOキャッチャーを制作しています。
      </p>
      <p>
        サッカーロボット班では、サッカーロボットで最大4人対戦をすることができます。
      </p>
      <div className="img">
        <img src={UFO} alt="UFOキャッチャー" loading="lazy" />
        <p>UFOキャッチャー</p>
      </div>
      <BackToTop />
    </div>
  );
};
