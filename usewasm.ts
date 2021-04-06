export const f = await Deno.open("./mylib.wasm")
const buf = await Deno.readAll(f);
const wasmModule = new WebAssembly.Module(buf);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const add = wasmInstance.exports._Z3addii as CallableFunction;
const subtract = wasmInstance.exports._Z8subtractii as CallableFunction;
console.log(add(4,2));
console.log(subtract(6,2));