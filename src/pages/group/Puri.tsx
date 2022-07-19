import { BackToTop } from "../../components/BackToTop";
import PURI from "./img/puri.png";

export const Puri = () => {
  return (
    <div id="puri" className="group">
      <h2>プリクラ班</h2>
      <p>
        プリクラ班では、プリクラのソフトウェアを開発します。
      </p>
      <p>
        プリクラのソフトウェアでは、まずPCのカメラで写真を撮り、その写真に落書きを書き込むことが出来ます。その後、QRコードで完成した写真を読み取ることもできます。
      </p>
      <p>
        その他、スタンプ等の追加機能の開発も検討しています。
      </p>
      <div className="img">
        <img src={PURI} alt="プリクラの画面" loading="lazy" width="50%"/>
        <p>現段階のプリクラの実際の画面</p>
      </div>
      <BackToTop />
    </div>
  );
};
