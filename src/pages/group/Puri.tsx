import { BackToTop } from "../../components/BackToTop";

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
        <img src="./img/purikura_sample.png" alt="プリクラの画面" loading="lazy" />
        <p>現段階のプリクラの実際の画面</p>
      </div>
      <BackToTop />
    </div>
  );
};