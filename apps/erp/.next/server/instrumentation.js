const CHUNK_PUBLIC_PATH = "server/instrumentation.js";
const runtime = require("./chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/08b5e_632136._.js");
runtime.loadChunk("server/chunks/[root of the server]__cba73d._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/apps/erp/instrumentation.ts [instrumentation-edge] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
