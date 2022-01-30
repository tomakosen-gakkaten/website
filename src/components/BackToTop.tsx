import { Link } from "react-router-dom";

export const BackToTop = () => {
  return (
    <Link to="/website" className="back">
      <span>＜</span>戻る
    </Link>
  );
};
