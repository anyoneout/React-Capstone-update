import React from "react";
import { Flux } from "@lobehub/icons";

import { Dalle } from '@lobehub/icons';


export default function DalleIcon() {
  return (
    <Dalle.Combine size={35} />
  );
}


export function FluxIcon() {
  return <Flux.Combine size={35} />;

}

