import { isBun } from "npm:is-bun";

export function isNotBun(): boolean {
  return !isBun();
}

export function printIsNotBun() {
  if (isNotBun()) {
    console.log("No Bun, no problem");
  } else {
    console.log("Help, I'm trapped in a Bun factory");
  }
}
