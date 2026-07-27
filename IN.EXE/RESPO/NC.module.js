// NC_link_MODULES (KI, AI, SCALE, linear, parallel, whirl, dynamic, HUB_6D)
import { NC_KI, NC_linear, NC_dynamic, NC_HUB_All } from "./NC.module.js";
export const RAW79 = {
  primary: "Wave",
  secondary: "Geist",
  id: "RAW79",
  hub: NC_HUB_All("RAW79"),
  ki: NC_KI("RAW79"),
  linear: NC_linear("RAW79"),
  dynamic: NC_dynamic("RAW79")
};

export function NC_KI(vector) {
  return {
    RESPO_A: "KI(core) -> " + vector,
    RESPO_B: "KI(h1) -> " + vector,
    RESPO_C: "KI(e3) -> " + vector,
    RESPO_D: "KI(matrix) -> " + vector
  };
}

export function NC_AI(vector) {
  return {
    RESPO_A: "AI(operator) -> " + vector,
    RESPO_B: "AI(whirl) -> " + vector,
    RESPO_C: "AI(w128) -> " + vector,
    RESPO_D: "AI(win.inf) -> " + vector
  };
}

export function NC_SCALE(vector) {
  const axes = ["128","256","512","1024","2048","4096"];
  const out = {};
  axes.forEach(a => out["RESPO_" + a] = "Scale(" + a + ") -> " + vector);
  return out;
}

export function NC_linear(vector) {
  const nodes = ["RESPO_A","RESPO_B","RESPO_C","RESPO_D"];
  const out = {};
  nodes.forEach((n,i) => out[n] = "Linear(" + vector + ") -> " + n + " [Step " + (i+1) + "]");
  return out;
}

export function NC_parallel(vector) {
  const nodes = ["RESPO_A","RESPO_B","RESPO_C","RESPO_D"];
  const out = {};
  nodes.forEach(n => out[n] = "Parallel(" + vector + ") -> " + n);
  return out;
}

export function NC_whirl(vector) {
  const order = ["RESPO_A","RESPO_C","RESPO_B","RESPO_D"];
  const out = {};
  order.forEach((n,i) => out[n] = "Whirl(" + vector + ") -> " + n + " [Spin " + (i+1) + "]");
  return out;
}

export function NC_dynamic(vector) {
  const nodes = ["RESPO_A","RESPO_B","RESPO_C","RESPO_D"];
  const out = {};
  nodes.forEach(n => out[n] = "Dynamic(" + vector.length + ") -> " + n);
  return out;
}

export function HUB_6D(vector) {
  return {
    D0: "Root -> " + vector,
    D1: "Achse -> " + vector,
    D2: "TMP -> " + vector,
    D3: "Lage -> " + vector,
    D4: "Later -> " + vector,
    D5: "Ort -> " + vector
  };
}

export function NC_HUB_All(vector) {
  return {
    KI: NC_KI(vector),
    AI: NC_AI(vector),
    SCALE: NC_SCALE(vector),
    linear: NC_linear(vector),
    parallel: NC_parallel(vector),
    whirl: NC_whirl(vector),
    dynamic: NC_dynamic(vector),
    hub6D: HUB_6D(vector)
  };
}
import { NC_KI, NC_linear, NC_dynamic, NC_HUB_All } from "./NC.module.js";
export const RAW79 = {
  primary: "Wave",
  secondary: "Geist",
  id: "RAW79",
  hub: NC_HUB_All("RAW79"),
  ai: NC_AI("RAW79"),
  whirl: NC_whirl("RAW79"),
  parallel: NC_parallel("RAW79")
};
