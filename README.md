# Compile C++ to WASM
`${EMSDK_HOME}/upstream/emscripten/emcc mylib.cpp -O3 --no-entry -o add.wasm`

# Run Deno code
`deno run --allow-read usewasm.ts`