import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div
        onClick={() => {
          navigate("/website");
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="icon" />
        <h1>苫小牧高専 情報学科展</h1>
      </div>
    </header>
  );
};
