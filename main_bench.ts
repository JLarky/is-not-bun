import { isNotBun, printIsNotBun } from "./mod.ts";

Deno.bench(function benchPrintIsNotBun() {
  printIsNotBun();
});

Deno.bench(function benchIsNotBun() {
  isNotBun();
});
