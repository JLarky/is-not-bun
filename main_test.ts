import { assertEquals } from "https://deno.land/std@0.195.0/testing/asserts.ts";
import { isNotBun } from "./mod.ts";

Deno.test(function bunTest() {
  assertEquals(isNotBun(), true);
});
