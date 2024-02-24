import React from "react";
import { Welcome } from "../components/Welcome";
import { News } from "../components/News";
import { Sport } from "../components/Sport";
import { Earth } from "../components/Earth";
import { Reel } from "../components/Reel";

export const Home = () => {
  return (
    <>
      <Welcome />
      <News />
      <Sport />
      <Earth />
      <Reel />
    </>
  );
};
