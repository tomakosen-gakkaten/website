import React from "react";
import { Deco } from "../pages/group/Deco";
import { NetGame } from "../pages/group/NetGame";
import { Puri } from "../pages/group/Puri";
import { Robot } from "../pages/group/Robot";
import { VB } from "../pages/group/VB";
import { VR } from "../pages/group/VR";

export const groupData: Array<{
  name: string;
  desc: string;
  path: string;
  elm: React.ReactChild;
}> = [
  {
    name: "ロボット班",
    desc: "ロボット",
    path: "robot",
    elm: <Robot />,
  },
  {
    name: "VB班",
    desc: "バーチャルボウリング",
    path: "vb",
    elm: <VB />,
  },
  {
    name: "ネトゲ班",
    desc: "ネットワークゲーム",
    path: "netoge",
    elm: <NetGame />,
  },
  {
    name: "VR班",
    desc: "VR",
    path: "vr",
    elm: <VR />,
  },
  {
    name: "プリクラ班",
    desc: "プリクラ",
    path: "puri",
    elm: <Puri />,
  },
  {
    name: "装飾班",
    desc: "装飾",
    path: "deco",
    elm: <Deco />,
  },
];
