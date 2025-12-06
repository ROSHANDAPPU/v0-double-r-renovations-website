"use client"

import { ProcessHero } from "./ProcessHero";
import { ProcessSteps } from "./ProcessSteps";
import { PostProjectCare } from "./PostProjectCare";

export function Process() {
  return (
    <>
      <ProcessHero />
      <ProcessSteps />
      <PostProjectCare />
    </>
  );
}
