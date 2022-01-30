import React from "react";
import { useNavigate } from "react-router-dom";

export const Card: React.VFC<{ name: string; desc: string; path: string }> = ({
  name,
  desc,
  path,
}) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>{desc}</p>
      <button
        onClick={() => {
          navigate(path);
        }}
      >
        詳細
      </button>
    </div>
  );
};
