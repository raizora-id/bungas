(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__802ee4._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[project]/apps/erp/instrumentation.ts [instrumentation] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$opentelemetry$2f$api$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$dist$2f$edge$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/dist/edge/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$build$2f$src$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/build/src/index.js [instrumentation] (ecmascript)");
;
;
;
const isDev = ("TURBOPACK compile-time value", "development") === 'development';
const hasOTLPEndpoint = !!process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
function register() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$opentelemetry$2f$api$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].setLogger(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$opentelemetry$2f$api$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagConsoleLogger"](), ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$opentelemetry$2f$api$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL : ("TURBOPACK unreachable", undefined));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$dist$2f$edge$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerOTel"])({
        serviceName: '@rac/erp',
        traceSampler: ("TURBOPACK compile-time truthy", 1) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$build$2f$src$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]() : ("TURBOPACK unreachable", undefined),
        ...hasOTLPEndpoint ? {
            otlpExporterConfig: {
                url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT
            }
        } : {}
    });
}
}}),
"[project]/apps/erp/edge-wrapper.js { MODULE => \"[project]/apps/erp/instrumentation.ts [instrumentation] (ecmascript)\" } [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_import__("[project]/apps/erp/instrumentation.ts [instrumentation] (ecmascript)"));
modProm.catch(()=>{});
self._ENTRIES["middleware_instrumentation"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__802ee4._.js.map