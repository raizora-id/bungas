module.exports = {

"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_esm__({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [instrumentation-edge] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation-edge] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation-edge] (ecmascript)");
;
;
var LogsAPI = function() {
    function LogsAPI() {}
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/types/Logger.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({});
;
 //# sourceMappingURL=Logger.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/types/LoggerProvider.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({});
;
 //# sourceMappingURL=LoggerProvider.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/types/LogRecord.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "SeverityNumber": (()=>SeverityNumber)
});
var SeverityNumber;
(function(SeverityNumber) {
    SeverityNumber[SeverityNumber["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SeverityNumber[SeverityNumber["TRACE"] = 1] = "TRACE";
    SeverityNumber[SeverityNumber["TRACE2"] = 2] = "TRACE2";
    SeverityNumber[SeverityNumber["TRACE3"] = 3] = "TRACE3";
    SeverityNumber[SeverityNumber["TRACE4"] = 4] = "TRACE4";
    SeverityNumber[SeverityNumber["DEBUG"] = 5] = "DEBUG";
    SeverityNumber[SeverityNumber["DEBUG2"] = 6] = "DEBUG2";
    SeverityNumber[SeverityNumber["DEBUG3"] = 7] = "DEBUG3";
    SeverityNumber[SeverityNumber["DEBUG4"] = 8] = "DEBUG4";
    SeverityNumber[SeverityNumber["INFO"] = 9] = "INFO";
    SeverityNumber[SeverityNumber["INFO2"] = 10] = "INFO2";
    SeverityNumber[SeverityNumber["INFO3"] = 11] = "INFO3";
    SeverityNumber[SeverityNumber["INFO4"] = 12] = "INFO4";
    SeverityNumber[SeverityNumber["WARN"] = 13] = "WARN";
    SeverityNumber[SeverityNumber["WARN2"] = 14] = "WARN2";
    SeverityNumber[SeverityNumber["WARN3"] = 15] = "WARN3";
    SeverityNumber[SeverityNumber["WARN4"] = 16] = "WARN4";
    SeverityNumber[SeverityNumber["ERROR"] = 17] = "ERROR";
    SeverityNumber[SeverityNumber["ERROR2"] = 18] = "ERROR2";
    SeverityNumber[SeverityNumber["ERROR3"] = 19] = "ERROR3";
    SeverityNumber[SeverityNumber["ERROR4"] = 20] = "ERROR4";
    SeverityNumber[SeverityNumber["FATAL"] = 21] = "FATAL";
    SeverityNumber[SeverityNumber["FATAL2"] = 22] = "FATAL2";
    SeverityNumber[SeverityNumber["FATAL3"] = 23] = "FATAL3";
    SeverityNumber[SeverityNumber["FATAL4"] = 24] = "FATAL4";
})(SeverityNumber || (SeverityNumber = {})); //# sourceMappingURL=LogRecord.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/types/LoggerOptions.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({});
;
 //# sourceMappingURL=LoggerOptions.js.map
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NOOP_LOGGER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NOOP_LOGGER"]),
    "NOOP_LOGGER_PROVIDER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]),
    "NoopLogger": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopLogger"]),
    "NoopLoggerProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopLoggerProvider"]),
    "SeverityNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$LogRecord$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SeverityNumber"]),
    "logs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logs"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$Logger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/types/Logger.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$LoggerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/types/LoggerProvider.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$LogRecord$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/types/LogRecord.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$LoggerOptions$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/types/LoggerOptions.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NOOP_LOGGER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NOOP_LOGGER"]),
    "NOOP_LOGGER_PROVIDER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NOOP_LOGGER_PROVIDER"]),
    "NoopLogger": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NoopLogger"]),
    "NoopLoggerProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NoopLoggerProvider"]),
    "SeverityNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SeverityNumber"]),
    "logs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["logs"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript) <exports>");
}}),
"[project]/node_modules/@vercel/otel/dist/node/index.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FetchInstrumentation": (()=>sr),
    "OTLPHttpJsonTraceExporter": (()=>nr),
    "OTLPHttpProtoTraceExporter": (()=>pt),
    "registerOTel": (()=>yv)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_import__("[externals]/module [external] (module, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/otel/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation-edge] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/@vercel/otel/dist/node/index.js")}`;
    }
};
;
;
;
const require = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__["createRequire"])(__TURBOPACK__import$2e$meta__.url);
const __filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const __dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(__filename);
var sf = Object.create;
var Ho = Object.defineProperty;
var af = Object.getOwnPropertyDescriptor;
var uf = Object.getOwnPropertyNames;
var cf = Object.getPrototypeOf, lf = Object.prototype.hasOwnProperty;
var ee = ((r)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, {
        get: (e, t)=>(typeof require < "u" ? require : e)[t]
    }) : r)(function(r) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + r + '" is not supported');
});
var _c = (r, e)=>()=>(r && (e = r(r = 0)), e);
var c = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports);
var Xr = (r, e, t, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let i of uf(e))!lf.call(r, i) && i !== t && Ho(r, i, {
        get: ()=>e[i],
        enumerable: !(n = af(e, i)) || n.enumerable
    });
    return r;
}, Et = (r, e, t)=>(Xr(r, e, "default"), t && Xr(t, e, "default")), q = (r, e, t)=>(t = r != null ? sf(cf(r)) : {}, Xr(e || !r || !r.__esModule ? Ho(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r)), f = (r)=>Xr(Ho({}, "__esModule", {
        value: !0
    }), r);
var d = {};
;
var p = _c(()=>{
    Et(d, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__);
});
var _r = c((Ie)=>{
    "use strict";
    Object.defineProperty(Ie, "__esModule", {
        value: !0
    });
    Ie.isTracingSuppressed = Ie.unsuppressTracing = Ie.suppressTracing = void 0;
    var df = (p(), f(d)), ko = (0, df.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
    function _f(r) {
        return r.setValue(ko, !0);
    }
    Ie.suppressTracing = _f;
    function pf(r) {
        return r.deleteValue(ko);
    }
    Ie.unsuppressTracing = pf;
    function hf(r) {
        return r.getValue(ko) === !0;
    }
    Ie.isTracingSuppressed = hf;
});
var $o = c(($)=>{
    "use strict";
    Object.defineProperty($, "__esModule", {
        value: !0
    });
    $.BAGGAGE_MAX_TOTAL_LENGTH = $.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = $.BAGGAGE_MAX_NAME_VALUE_PAIRS = $.BAGGAGE_HEADER = $.BAGGAGE_ITEMS_SEPARATOR = $.BAGGAGE_PROPERTIES_SEPARATOR = $.BAGGAGE_KEY_PAIR_SEPARATOR = void 0;
    $.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
    $.BAGGAGE_PROPERTIES_SEPARATOR = ";";
    $.BAGGAGE_ITEMS_SEPARATOR = ",";
    $.BAGGAGE_HEADER = "baggage";
    $.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
    $.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
    $.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
});
var Xo = c((he)=>{
    "use strict";
    Object.defineProperty(he, "__esModule", {
        value: !0
    });
    he.parseKeyPairsIntoRecord = he.parsePairKeyValue = he.getKeyPairs = he.serializeKeyPairs = void 0;
    var ff = (p(), f(d)), ke = $o();
    function Ef(r) {
        return r.reduce((e, t)=>{
            let n = `${e}${e !== "" ? ke.BAGGAGE_ITEMS_SEPARATOR : ""}${t}`;
            return n.length > ke.BAGGAGE_MAX_TOTAL_LENGTH ? e : n;
        }, "");
    }
    he.serializeKeyPairs = Ef;
    function mf(r) {
        return r.getAllEntries().map(([e, t])=>{
            let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
            return t.metadata !== void 0 && (n += ke.BAGGAGE_PROPERTIES_SEPARATOR + t.metadata.toString()), n;
        });
    }
    he.getKeyPairs = mf;
    function pc(r) {
        let e = r.split(ke.BAGGAGE_PROPERTIES_SEPARATOR);
        if (e.length <= 0) return;
        let t = e.shift();
        if (!t) return;
        let n = t.indexOf(ke.BAGGAGE_KEY_PAIR_SEPARATOR);
        if (n <= 0) return;
        let i = decodeURIComponent(t.substring(0, n).trim()), o = decodeURIComponent(t.substring(n + 1).trim()), s;
        return e.length > 0 && (s = (0, ff.baggageEntryMetadataFromString)(e.join(ke.BAGGAGE_PROPERTIES_SEPARATOR))), {
            key: i,
            value: o,
            metadata: s
        };
    }
    he.parsePairKeyValue = pc;
    function gf(r) {
        return typeof r != "string" || r.length === 0 ? {} : r.split(ke.BAGGAGE_ITEMS_SEPARATOR).map((e)=>pc(e)).filter((e)=>e !== void 0 && e.value.length > 0).reduce((e, t)=>(e[t.key] = t.value, e), {});
    }
    he.parseKeyPairsIntoRecord = gf;
});
var hc = c((Wr)=>{
    "use strict";
    Object.defineProperty(Wr, "__esModule", {
        value: !0
    });
    Wr.W3CBaggagePropagator = void 0;
    var Wo = (p(), f(d)), Tf = _r(), $e = $o(), Ko = Xo(), zo = class {
        inject(e, t, n) {
            let i = Wo.propagation.getBaggage(e);
            if (!i || (0, Tf.isTracingSuppressed)(e)) return;
            let o = (0, Ko.getKeyPairs)(i).filter((a)=>a.length <= $e.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0, $e.BAGGAGE_MAX_NAME_VALUE_PAIRS), s = (0, Ko.serializeKeyPairs)(o);
            s.length > 0 && n.set(t, $e.BAGGAGE_HEADER, s);
        }
        extract(e, t, n) {
            let i = n.get(t, $e.BAGGAGE_HEADER), o = Array.isArray(i) ? i.join($e.BAGGAGE_ITEMS_SEPARATOR) : i;
            if (!o) return e;
            let s = {};
            return o.length === 0 || (o.split($e.BAGGAGE_ITEMS_SEPARATOR).forEach((u)=>{
                let l = (0, Ko.parsePairKeyValue)(u);
                if (l) {
                    let _ = {
                        value: l.value
                    };
                    l.metadata && (_.metadata = l.metadata), s[l.key] = _;
                }
            }), Object.entries(s).length === 0) ? e : Wo.propagation.setBaggage(e, Wo.propagation.createBaggage(s));
        }
        fields() {
            return [
                $e.BAGGAGE_HEADER
            ];
        }
    };
    Wr.W3CBaggagePropagator = zo;
});
var fc = c((Kr)=>{
    "use strict";
    Object.defineProperty(Kr, "__esModule", {
        value: !0
    });
    Kr.AnchoredClock = void 0;
    var Yo = class {
        constructor(e, t){
            this._monotonicClock = t, this._epochMillis = e.now(), this._performanceMillis = t.now();
        }
        now() {
            let e = this._monotonicClock.now() - this._performanceMillis;
            return this._epochMillis + e;
        }
    };
    Kr.AnchoredClock = Yo;
});
var Sc = c((Le)=>{
    "use strict";
    Object.defineProperty(Le, "__esModule", {
        value: !0
    });
    Le.isAttributeValue = Le.isAttributeKey = Le.sanitizeAttributes = void 0;
    var Ec = (p(), f(d));
    function Sf(r) {
        let e = {};
        if (typeof r != "object" || r == null) return e;
        for (let [t, n] of Object.entries(r)){
            if (!mc(t)) {
                Ec.diag.warn(`Invalid attribute key: ${t}`);
                continue;
            }
            if (!gc(n)) {
                Ec.diag.warn(`Invalid attribute value set for key: ${t}`);
                continue;
            }
            Array.isArray(n) ? e[t] = n.slice() : e[t] = n;
        }
        return e;
    }
    Le.sanitizeAttributes = Sf;
    function mc(r) {
        return typeof r == "string" && r.length > 0;
    }
    Le.isAttributeKey = mc;
    function gc(r) {
        return r == null ? !0 : Array.isArray(r) ? Af(r) : Tc(r);
    }
    Le.isAttributeValue = gc;
    function Af(r) {
        let e;
        for (let t of r)if (t != null) {
            if (!e) {
                if (Tc(t)) {
                    e = typeof t;
                    continue;
                }
                return !1;
            }
            if (typeof t !== e) return !1;
        }
        return !0;
    }
    function Tc(r) {
        switch(typeof r){
            case "number":
            case "boolean":
            case "string":
                return !0;
        }
        return !1;
    }
});
var Qo = c((zr)=>{
    "use strict";
    Object.defineProperty(zr, "__esModule", {
        value: !0
    });
    zr.loggingErrorHandler = void 0;
    var Of = (p(), f(d));
    function Rf() {
        return (r)=>{
            Of.diag.error(bf(r));
        };
    }
    zr.loggingErrorHandler = Rf;
    function bf(r) {
        return typeof r == "string" ? r : JSON.stringify(Pf(r));
    }
    function Pf(r) {
        let e = {}, t = r;
        for(; t !== null;)Object.getOwnPropertyNames(t).forEach((n)=>{
            if (e[n]) return;
            let i = t[n];
            i && (e[n] = String(i));
        }), t = Object.getPrototypeOf(t);
        return e;
    }
});
var Zo = c((mt)=>{
    "use strict";
    Object.defineProperty(mt, "__esModule", {
        value: !0
    });
    mt.globalErrorHandler = mt.setGlobalErrorHandler = void 0;
    var yf = Qo(), Ac = (0, yf.loggingErrorHandler)();
    function vf(r) {
        Ac = r;
    }
    mt.setGlobalErrorHandler = vf;
    function If(r) {
        try {
            Ac(r);
        } catch  {}
    }
    mt.globalErrorHandler = If;
});
var Jo = c((pr)=>{
    "use strict";
    Object.defineProperty(pr, "__esModule", {
        value: !0
    });
    pr.TracesSamplerValues = void 0;
    var Lf;
    (function(r) {
        r.AlwaysOff = "always_off", r.AlwaysOn = "always_on", r.ParentBasedAlwaysOff = "parentbased_always_off", r.ParentBasedAlwaysOn = "parentbased_always_on", r.ParentBasedTraceIdRatio = "parentbased_traceidratio", r.TraceIdRatio = "traceidratio";
    })(Lf = pr.TracesSamplerValues || (pr.TracesSamplerValues = {}));
});
var Oc = c((Yr)=>{
    "use strict";
    Object.defineProperty(Yr, "__esModule", {
        value: !0
    });
    Yr._globalThis = void 0;
    Yr._globalThis = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : typeof global == "object" ? global : {};
});
var Qr = c((I)=>{
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    });
    I.getEnvWithoutDefaults = I.parseEnvironment = I.DEFAULT_ENVIRONMENT = I.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = I.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = I.DEFAULT_ATTRIBUTE_COUNT_LIMIT = I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = void 0;
    var Me = (p(), f(d)), Mf = Jo(), Cf = Oc(), Nf = ",", wf = [
        "OTEL_SDK_DISABLED"
    ];
    function xf(r) {
        return wf.indexOf(r) > -1;
    }
    var Df = [
        "OTEL_BSP_EXPORT_TIMEOUT",
        "OTEL_BSP_MAX_EXPORT_BATCH_SIZE",
        "OTEL_BSP_MAX_QUEUE_SIZE",
        "OTEL_BSP_SCHEDULE_DELAY",
        "OTEL_BLRP_EXPORT_TIMEOUT",
        "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE",
        "OTEL_BLRP_MAX_QUEUE_SIZE",
        "OTEL_BLRP_SCHEDULE_DELAY",
        "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT",
        "OTEL_ATTRIBUTE_COUNT_LIMIT",
        "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT",
        "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT",
        "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT",
        "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT",
        "OTEL_SPAN_EVENT_COUNT_LIMIT",
        "OTEL_SPAN_LINK_COUNT_LIMIT",
        "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT",
        "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT",
        "OTEL_EXPORTER_OTLP_TIMEOUT",
        "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT",
        "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT",
        "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT",
        "OTEL_EXPORTER_JAEGER_AGENT_PORT"
    ];
    function Uf(r) {
        return Df.indexOf(r) > -1;
    }
    var Bf = [
        "OTEL_NO_PATCH_MODULES",
        "OTEL_PROPAGATORS"
    ];
    function qf(r) {
        return Bf.indexOf(r) > -1;
    }
    I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1 / 0;
    I.DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
    I.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 128;
    I.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 128;
    I.DEFAULT_ENVIRONMENT = {
        OTEL_SDK_DISABLED: !1,
        CONTAINER_NAME: "",
        ECS_CONTAINER_METADATA_URI_V4: "",
        ECS_CONTAINER_METADATA_URI: "",
        HOSTNAME: "",
        KUBERNETES_SERVICE_HOST: "",
        NAMESPACE: "",
        OTEL_BSP_EXPORT_TIMEOUT: 3e4,
        OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
        OTEL_BSP_MAX_QUEUE_SIZE: 2048,
        OTEL_BSP_SCHEDULE_DELAY: 5e3,
        OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
        OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
        OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
        OTEL_BLRP_SCHEDULE_DELAY: 5e3,
        OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
        OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
        OTEL_EXPORTER_JAEGER_ENDPOINT: "",
        OTEL_EXPORTER_JAEGER_PASSWORD: "",
        OTEL_EXPORTER_JAEGER_USER: "",
        OTEL_EXPORTER_OTLP_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_HEADERS: "",
        OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
        OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
        OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
        OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
        OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
        OTEL_LOG_LEVEL: Me.DiagLogLevel.INFO,
        OTEL_NO_PATCH_MODULES: [],
        OTEL_PROPAGATORS: [
            "tracecontext",
            "baggage"
        ],
        OTEL_RESOURCE_ATTRIBUTES: "",
        OTEL_SERVICE_NAME: "",
        OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        OTEL_ATTRIBUTE_COUNT_LIMIT: I.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
        OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: I.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
        OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: I.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
        OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
        OTEL_SPAN_LINK_COUNT_LIMIT: 128,
        OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: I.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
        OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: I.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
        OTEL_TRACES_EXPORTER: "",
        OTEL_TRACES_SAMPLER: Mf.TracesSamplerValues.ParentBasedAlwaysOn,
        OTEL_TRACES_SAMPLER_ARG: "",
        OTEL_LOGS_EXPORTER: "",
        OTEL_EXPORTER_OTLP_INSECURE: "",
        OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
        OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
        OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
        OTEL_EXPORTER_OTLP_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative"
    };
    function Gf(r, e, t) {
        if (typeof t[r] > "u") return;
        let n = String(t[r]);
        e[r] = n.toLowerCase() === "true";
    }
    function Vf(r, e, t, n = -1 / 0, i = 1 / 0) {
        if (typeof t[r] < "u") {
            let o = Number(t[r]);
            isNaN(o) || (o < n ? e[r] = n : o > i ? e[r] = i : e[r] = o);
        }
    }
    function jf(r, e, t, n = Nf) {
        let i = t[r];
        typeof i == "string" && (e[r] = i.split(n).map((o)=>o.trim()));
    }
    var Ff = {
        ALL: Me.DiagLogLevel.ALL,
        VERBOSE: Me.DiagLogLevel.VERBOSE,
        DEBUG: Me.DiagLogLevel.DEBUG,
        INFO: Me.DiagLogLevel.INFO,
        WARN: Me.DiagLogLevel.WARN,
        ERROR: Me.DiagLogLevel.ERROR,
        NONE: Me.DiagLogLevel.NONE
    };
    function Hf(r, e, t) {
        let n = t[r];
        if (typeof n == "string") {
            let i = Ff[n.toUpperCase()];
            i != null && (e[r] = i);
        }
    }
    function es(r) {
        let e = {};
        for(let t in I.DEFAULT_ENVIRONMENT){
            let n = t;
            switch(n){
                case "OTEL_LOG_LEVEL":
                    Hf(n, e, r);
                    break;
                default:
                    if (xf(n)) Gf(n, e, r);
                    else if (Uf(n)) Vf(n, e, r);
                    else if (qf(n)) jf(n, e, r);
                    else {
                        let i = r[n];
                        typeof i < "u" && i !== null && (e[n] = String(i));
                    }
            }
        }
        return e;
    }
    I.parseEnvironment = es;
    function kf() {
        return typeof process < "u" && process && process.env ? es(process.env) : es(Cf._globalThis);
    }
    I.getEnvWithoutDefaults = kf;
});
var bc = c((Zr)=>{
    "use strict";
    Object.defineProperty(Zr, "__esModule", {
        value: !0
    });
    Zr.getEnv = void 0;
    var $f = ee("os"), Rc = Qr();
    function Xf() {
        let r = (0, Rc.parseEnvironment)(process.env);
        return Object.assign({
            HOSTNAME: $f.hostname()
        }, Rc.DEFAULT_ENVIRONMENT, r);
    }
    Zr.getEnv = Xf;
});
var Pc = c((Jr)=>{
    "use strict";
    Object.defineProperty(Jr, "__esModule", {
        value: !0
    });
    Jr._globalThis = void 0;
    Jr._globalThis = typeof globalThis == "object" ? globalThis : global;
});
var vc = c((en)=>{
    "use strict";
    Object.defineProperty(en, "__esModule", {
        value: !0
    });
    en.hexToBase64 = void 0;
    function yc(r) {
        return r >= 48 && r <= 57 ? r - 48 : r >= 97 && r <= 102 ? r - 87 : r - 55;
    }
    var Wf = Buffer.alloc(8), Kf = Buffer.alloc(16);
    function zf(r) {
        let e;
        r.length === 16 ? e = Wf : r.length === 32 ? e = Kf : e = Buffer.alloc(r.length / 2);
        let t = 0;
        for(let n = 0; n < r.length; n += 2){
            let i = yc(r.charCodeAt(n)), o = yc(r.charCodeAt(n + 1));
            e.writeUInt8(i << 4 | o, t++);
        }
        return e.toString("base64");
    }
    en.hexToBase64 = zf;
});
var Mc = c((rn)=>{
    "use strict";
    Object.defineProperty(rn, "__esModule", {
        value: !0
    });
    rn.RandomIdGenerator = void 0;
    var Yf = 8, Lc = 16, ts = class {
        constructor(){
            this.generateTraceId = Ic(Lc), this.generateSpanId = Ic(Yf);
        }
    };
    rn.RandomIdGenerator = ts;
    var tn = Buffer.allocUnsafe(Lc);
    function Ic(r) {
        return function() {
            for(let t = 0; t < r / 4; t++)tn.writeUInt32BE(Math.random() * 2 ** 32 >>> 0, t * 4);
            for(let t = 0; t < r && !(tn[t] > 0); t++)t === r - 1 && (tn[r - 1] = 1);
            return tn.toString("hex", 0, r);
        };
    }
});
var Cc = c((nn)=>{
    "use strict";
    Object.defineProperty(nn, "__esModule", {
        value: !0
    });
    nn.otperformance = void 0;
    var Qf = ee("perf_hooks");
    nn.otperformance = Qf.performance;
});
var rs = c((on)=>{
    "use strict";
    Object.defineProperty(on, "__esModule", {
        value: !0
    });
    on.VERSION = void 0;
    on.VERSION = "1.19.0";
});
var Nc = c((R)=>{
    "use strict";
    Object.defineProperty(R, "__esModule", {
        value: !0
    });
    R.MessageTypeValues = R.RpcGrpcStatusCodeValues = R.MessagingOperationValues = R.MessagingDestinationKindValues = R.HttpFlavorValues = R.NetHostConnectionSubtypeValues = R.NetHostConnectionTypeValues = R.NetTransportValues = R.FaasInvokedProviderValues = R.FaasDocumentOperationValues = R.FaasTriggerValues = R.DbCassandraConsistencyLevelValues = R.DbSystemValues = R.SemanticAttributes = void 0;
    R.SemanticAttributes = {
        AWS_LAMBDA_INVOKED_ARN: "aws.lambda.invoked_arn",
        DB_SYSTEM: "db.system",
        DB_CONNECTION_STRING: "db.connection_string",
        DB_USER: "db.user",
        DB_JDBC_DRIVER_CLASSNAME: "db.jdbc.driver_classname",
        DB_NAME: "db.name",
        DB_STATEMENT: "db.statement",
        DB_OPERATION: "db.operation",
        DB_MSSQL_INSTANCE_NAME: "db.mssql.instance_name",
        DB_CASSANDRA_KEYSPACE: "db.cassandra.keyspace",
        DB_CASSANDRA_PAGE_SIZE: "db.cassandra.page_size",
        DB_CASSANDRA_CONSISTENCY_LEVEL: "db.cassandra.consistency_level",
        DB_CASSANDRA_TABLE: "db.cassandra.table",
        DB_CASSANDRA_IDEMPOTENCE: "db.cassandra.idempotence",
        DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: "db.cassandra.speculative_execution_count",
        DB_CASSANDRA_COORDINATOR_ID: "db.cassandra.coordinator.id",
        DB_CASSANDRA_COORDINATOR_DC: "db.cassandra.coordinator.dc",
        DB_HBASE_NAMESPACE: "db.hbase.namespace",
        DB_REDIS_DATABASE_INDEX: "db.redis.database_index",
        DB_MONGODB_COLLECTION: "db.mongodb.collection",
        DB_SQL_TABLE: "db.sql.table",
        EXCEPTION_TYPE: "exception.type",
        EXCEPTION_MESSAGE: "exception.message",
        EXCEPTION_STACKTRACE: "exception.stacktrace",
        EXCEPTION_ESCAPED: "exception.escaped",
        FAAS_TRIGGER: "faas.trigger",
        FAAS_EXECUTION: "faas.execution",
        FAAS_DOCUMENT_COLLECTION: "faas.document.collection",
        FAAS_DOCUMENT_OPERATION: "faas.document.operation",
        FAAS_DOCUMENT_TIME: "faas.document.time",
        FAAS_DOCUMENT_NAME: "faas.document.name",
        FAAS_TIME: "faas.time",
        FAAS_CRON: "faas.cron",
        FAAS_COLDSTART: "faas.coldstart",
        FAAS_INVOKED_NAME: "faas.invoked_name",
        FAAS_INVOKED_PROVIDER: "faas.invoked_provider",
        FAAS_INVOKED_REGION: "faas.invoked_region",
        NET_TRANSPORT: "net.transport",
        NET_PEER_IP: "net.peer.ip",
        NET_PEER_PORT: "net.peer.port",
        NET_PEER_NAME: "net.peer.name",
        NET_HOST_IP: "net.host.ip",
        NET_HOST_PORT: "net.host.port",
        NET_HOST_NAME: "net.host.name",
        NET_HOST_CONNECTION_TYPE: "net.host.connection.type",
        NET_HOST_CONNECTION_SUBTYPE: "net.host.connection.subtype",
        NET_HOST_CARRIER_NAME: "net.host.carrier.name",
        NET_HOST_CARRIER_MCC: "net.host.carrier.mcc",
        NET_HOST_CARRIER_MNC: "net.host.carrier.mnc",
        NET_HOST_CARRIER_ICC: "net.host.carrier.icc",
        PEER_SERVICE: "peer.service",
        ENDUSER_ID: "enduser.id",
        ENDUSER_ROLE: "enduser.role",
        ENDUSER_SCOPE: "enduser.scope",
        THREAD_ID: "thread.id",
        THREAD_NAME: "thread.name",
        CODE_FUNCTION: "code.function",
        CODE_NAMESPACE: "code.namespace",
        CODE_FILEPATH: "code.filepath",
        CODE_LINENO: "code.lineno",
        HTTP_METHOD: "http.method",
        HTTP_URL: "http.url",
        HTTP_TARGET: "http.target",
        HTTP_HOST: "http.host",
        HTTP_SCHEME: "http.scheme",
        HTTP_STATUS_CODE: "http.status_code",
        HTTP_FLAVOR: "http.flavor",
        HTTP_USER_AGENT: "http.user_agent",
        HTTP_REQUEST_CONTENT_LENGTH: "http.request_content_length",
        HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: "http.request_content_length_uncompressed",
        HTTP_RESPONSE_CONTENT_LENGTH: "http.response_content_length",
        HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: "http.response_content_length_uncompressed",
        HTTP_SERVER_NAME: "http.server_name",
        HTTP_ROUTE: "http.route",
        HTTP_CLIENT_IP: "http.client_ip",
        AWS_DYNAMODB_TABLE_NAMES: "aws.dynamodb.table_names",
        AWS_DYNAMODB_CONSUMED_CAPACITY: "aws.dynamodb.consumed_capacity",
        AWS_DYNAMODB_ITEM_COLLECTION_METRICS: "aws.dynamodb.item_collection_metrics",
        AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: "aws.dynamodb.provisioned_read_capacity",
        AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: "aws.dynamodb.provisioned_write_capacity",
        AWS_DYNAMODB_CONSISTENT_READ: "aws.dynamodb.consistent_read",
        AWS_DYNAMODB_PROJECTION: "aws.dynamodb.projection",
        AWS_DYNAMODB_LIMIT: "aws.dynamodb.limit",
        AWS_DYNAMODB_ATTRIBUTES_TO_GET: "aws.dynamodb.attributes_to_get",
        AWS_DYNAMODB_INDEX_NAME: "aws.dynamodb.index_name",
        AWS_DYNAMODB_SELECT: "aws.dynamodb.select",
        AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: "aws.dynamodb.global_secondary_indexes",
        AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: "aws.dynamodb.local_secondary_indexes",
        AWS_DYNAMODB_EXCLUSIVE_START_TABLE: "aws.dynamodb.exclusive_start_table",
        AWS_DYNAMODB_TABLE_COUNT: "aws.dynamodb.table_count",
        AWS_DYNAMODB_SCAN_FORWARD: "aws.dynamodb.scan_forward",
        AWS_DYNAMODB_SEGMENT: "aws.dynamodb.segment",
        AWS_DYNAMODB_TOTAL_SEGMENTS: "aws.dynamodb.total_segments",
        AWS_DYNAMODB_COUNT: "aws.dynamodb.count",
        AWS_DYNAMODB_SCANNED_COUNT: "aws.dynamodb.scanned_count",
        AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: "aws.dynamodb.attribute_definitions",
        AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: "aws.dynamodb.global_secondary_index_updates",
        MESSAGING_SYSTEM: "messaging.system",
        MESSAGING_DESTINATION: "messaging.destination",
        MESSAGING_DESTINATION_KIND: "messaging.destination_kind",
        MESSAGING_TEMP_DESTINATION: "messaging.temp_destination",
        MESSAGING_PROTOCOL: "messaging.protocol",
        MESSAGING_PROTOCOL_VERSION: "messaging.protocol_version",
        MESSAGING_URL: "messaging.url",
        MESSAGING_MESSAGE_ID: "messaging.message_id",
        MESSAGING_CONVERSATION_ID: "messaging.conversation_id",
        MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: "messaging.message_payload_size_bytes",
        MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: "messaging.message_payload_compressed_size_bytes",
        MESSAGING_OPERATION: "messaging.operation",
        MESSAGING_CONSUMER_ID: "messaging.consumer_id",
        MESSAGING_RABBITMQ_ROUTING_KEY: "messaging.rabbitmq.routing_key",
        MESSAGING_KAFKA_MESSAGE_KEY: "messaging.kafka.message_key",
        MESSAGING_KAFKA_CONSUMER_GROUP: "messaging.kafka.consumer_group",
        MESSAGING_KAFKA_CLIENT_ID: "messaging.kafka.client_id",
        MESSAGING_KAFKA_PARTITION: "messaging.kafka.partition",
        MESSAGING_KAFKA_TOMBSTONE: "messaging.kafka.tombstone",
        RPC_SYSTEM: "rpc.system",
        RPC_SERVICE: "rpc.service",
        RPC_METHOD: "rpc.method",
        RPC_GRPC_STATUS_CODE: "rpc.grpc.status_code",
        RPC_JSONRPC_VERSION: "rpc.jsonrpc.version",
        RPC_JSONRPC_REQUEST_ID: "rpc.jsonrpc.request_id",
        RPC_JSONRPC_ERROR_CODE: "rpc.jsonrpc.error_code",
        RPC_JSONRPC_ERROR_MESSAGE: "rpc.jsonrpc.error_message",
        MESSAGE_TYPE: "message.type",
        MESSAGE_ID: "message.id",
        MESSAGE_COMPRESSED_SIZE: "message.compressed_size",
        MESSAGE_UNCOMPRESSED_SIZE: "message.uncompressed_size"
    };
    R.DbSystemValues = {
        OTHER_SQL: "other_sql",
        MSSQL: "mssql",
        MYSQL: "mysql",
        ORACLE: "oracle",
        DB2: "db2",
        POSTGRESQL: "postgresql",
        REDSHIFT: "redshift",
        HIVE: "hive",
        CLOUDSCAPE: "cloudscape",
        HSQLDB: "hsqldb",
        PROGRESS: "progress",
        MAXDB: "maxdb",
        HANADB: "hanadb",
        INGRES: "ingres",
        FIRSTSQL: "firstsql",
        EDB: "edb",
        CACHE: "cache",
        ADABAS: "adabas",
        FIREBIRD: "firebird",
        DERBY: "derby",
        FILEMAKER: "filemaker",
        INFORMIX: "informix",
        INSTANTDB: "instantdb",
        INTERBASE: "interbase",
        MARIADB: "mariadb",
        NETEZZA: "netezza",
        PERVASIVE: "pervasive",
        POINTBASE: "pointbase",
        SQLITE: "sqlite",
        SYBASE: "sybase",
        TERADATA: "teradata",
        VERTICA: "vertica",
        H2: "h2",
        COLDFUSION: "coldfusion",
        CASSANDRA: "cassandra",
        HBASE: "hbase",
        MONGODB: "mongodb",
        REDIS: "redis",
        COUCHBASE: "couchbase",
        COUCHDB: "couchdb",
        COSMOSDB: "cosmosdb",
        DYNAMODB: "dynamodb",
        NEO4J: "neo4j",
        GEODE: "geode",
        ELASTICSEARCH: "elasticsearch",
        MEMCACHED: "memcached",
        COCKROACHDB: "cockroachdb"
    };
    R.DbCassandraConsistencyLevelValues = {
        ALL: "all",
        EACH_QUORUM: "each_quorum",
        QUORUM: "quorum",
        LOCAL_QUORUM: "local_quorum",
        ONE: "one",
        TWO: "two",
        THREE: "three",
        LOCAL_ONE: "local_one",
        ANY: "any",
        SERIAL: "serial",
        LOCAL_SERIAL: "local_serial"
    };
    R.FaasTriggerValues = {
        DATASOURCE: "datasource",
        HTTP: "http",
        PUBSUB: "pubsub",
        TIMER: "timer",
        OTHER: "other"
    };
    R.FaasDocumentOperationValues = {
        INSERT: "insert",
        EDIT: "edit",
        DELETE: "delete"
    };
    R.FaasInvokedProviderValues = {
        ALIBABA_CLOUD: "alibaba_cloud",
        AWS: "aws",
        AZURE: "azure",
        GCP: "gcp"
    };
    R.NetTransportValues = {
        IP_TCP: "ip_tcp",
        IP_UDP: "ip_udp",
        IP: "ip",
        UNIX: "unix",
        PIPE: "pipe",
        INPROC: "inproc",
        OTHER: "other"
    };
    R.NetHostConnectionTypeValues = {
        WIFI: "wifi",
        WIRED: "wired",
        CELL: "cell",
        UNAVAILABLE: "unavailable",
        UNKNOWN: "unknown"
    };
    R.NetHostConnectionSubtypeValues = {
        GPRS: "gprs",
        EDGE: "edge",
        UMTS: "umts",
        CDMA: "cdma",
        EVDO_0: "evdo_0",
        EVDO_A: "evdo_a",
        CDMA2000_1XRTT: "cdma2000_1xrtt",
        HSDPA: "hsdpa",
        HSUPA: "hsupa",
        HSPA: "hspa",
        IDEN: "iden",
        EVDO_B: "evdo_b",
        LTE: "lte",
        EHRPD: "ehrpd",
        HSPAP: "hspap",
        GSM: "gsm",
        TD_SCDMA: "td_scdma",
        IWLAN: "iwlan",
        NR: "nr",
        NRNSA: "nrnsa",
        LTE_CA: "lte_ca"
    };
    R.HttpFlavorValues = {
        HTTP_1_0: "1.0",
        HTTP_1_1: "1.1",
        HTTP_2_0: "2.0",
        SPDY: "SPDY",
        QUIC: "QUIC"
    };
    R.MessagingDestinationKindValues = {
        QUEUE: "queue",
        TOPIC: "topic"
    };
    R.MessagingOperationValues = {
        RECEIVE: "receive",
        PROCESS: "process"
    };
    R.RpcGrpcStatusCodeValues = {
        OK: 0,
        CANCELLED: 1,
        UNKNOWN: 2,
        INVALID_ARGUMENT: 3,
        DEADLINE_EXCEEDED: 4,
        NOT_FOUND: 5,
        ALREADY_EXISTS: 6,
        PERMISSION_DENIED: 7,
        RESOURCE_EXHAUSTED: 8,
        FAILED_PRECONDITION: 9,
        ABORTED: 10,
        OUT_OF_RANGE: 11,
        UNIMPLEMENTED: 12,
        INTERNAL: 13,
        UNAVAILABLE: 14,
        DATA_LOSS: 15,
        UNAUTHENTICATED: 16
    };
    R.MessageTypeValues = {
        SENT: "SENT",
        RECEIVED: "RECEIVED"
    };
});
var wc = c((Xe)=>{
    "use strict";
    var Zf = Xe && Xe.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Jf = Xe && Xe.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Zf(e, r, t);
    };
    Object.defineProperty(Xe, "__esModule", {
        value: !0
    });
    Jf(Nc(), Xe);
});
var xc = c((X)=>{
    "use strict";
    Object.defineProperty(X, "__esModule", {
        value: !0
    });
    X.TelemetrySdkLanguageValues = X.OsTypeValues = X.HostArchValues = X.AwsEcsLaunchtypeValues = X.CloudPlatformValues = X.CloudProviderValues = X.SemanticResourceAttributes = void 0;
    X.SemanticResourceAttributes = {
        CLOUD_PROVIDER: "cloud.provider",
        CLOUD_ACCOUNT_ID: "cloud.account.id",
        CLOUD_REGION: "cloud.region",
        CLOUD_AVAILABILITY_ZONE: "cloud.availability_zone",
        CLOUD_PLATFORM: "cloud.platform",
        AWS_ECS_CONTAINER_ARN: "aws.ecs.container.arn",
        AWS_ECS_CLUSTER_ARN: "aws.ecs.cluster.arn",
        AWS_ECS_LAUNCHTYPE: "aws.ecs.launchtype",
        AWS_ECS_TASK_ARN: "aws.ecs.task.arn",
        AWS_ECS_TASK_FAMILY: "aws.ecs.task.family",
        AWS_ECS_TASK_REVISION: "aws.ecs.task.revision",
        AWS_EKS_CLUSTER_ARN: "aws.eks.cluster.arn",
        AWS_LOG_GROUP_NAMES: "aws.log.group.names",
        AWS_LOG_GROUP_ARNS: "aws.log.group.arns",
        AWS_LOG_STREAM_NAMES: "aws.log.stream.names",
        AWS_LOG_STREAM_ARNS: "aws.log.stream.arns",
        CONTAINER_NAME: "container.name",
        CONTAINER_ID: "container.id",
        CONTAINER_RUNTIME: "container.runtime",
        CONTAINER_IMAGE_NAME: "container.image.name",
        CONTAINER_IMAGE_TAG: "container.image.tag",
        DEPLOYMENT_ENVIRONMENT: "deployment.environment",
        DEVICE_ID: "device.id",
        DEVICE_MODEL_IDENTIFIER: "device.model.identifier",
        DEVICE_MODEL_NAME: "device.model.name",
        FAAS_NAME: "faas.name",
        FAAS_ID: "faas.id",
        FAAS_VERSION: "faas.version",
        FAAS_INSTANCE: "faas.instance",
        FAAS_MAX_MEMORY: "faas.max_memory",
        HOST_ID: "host.id",
        HOST_NAME: "host.name",
        HOST_TYPE: "host.type",
        HOST_ARCH: "host.arch",
        HOST_IMAGE_NAME: "host.image.name",
        HOST_IMAGE_ID: "host.image.id",
        HOST_IMAGE_VERSION: "host.image.version",
        K8S_CLUSTER_NAME: "k8s.cluster.name",
        K8S_NODE_NAME: "k8s.node.name",
        K8S_NODE_UID: "k8s.node.uid",
        K8S_NAMESPACE_NAME: "k8s.namespace.name",
        K8S_POD_UID: "k8s.pod.uid",
        K8S_POD_NAME: "k8s.pod.name",
        K8S_CONTAINER_NAME: "k8s.container.name",
        K8S_REPLICASET_UID: "k8s.replicaset.uid",
        K8S_REPLICASET_NAME: "k8s.replicaset.name",
        K8S_DEPLOYMENT_UID: "k8s.deployment.uid",
        K8S_DEPLOYMENT_NAME: "k8s.deployment.name",
        K8S_STATEFULSET_UID: "k8s.statefulset.uid",
        K8S_STATEFULSET_NAME: "k8s.statefulset.name",
        K8S_DAEMONSET_UID: "k8s.daemonset.uid",
        K8S_DAEMONSET_NAME: "k8s.daemonset.name",
        K8S_JOB_UID: "k8s.job.uid",
        K8S_JOB_NAME: "k8s.job.name",
        K8S_CRONJOB_UID: "k8s.cronjob.uid",
        K8S_CRONJOB_NAME: "k8s.cronjob.name",
        OS_TYPE: "os.type",
        OS_DESCRIPTION: "os.description",
        OS_NAME: "os.name",
        OS_VERSION: "os.version",
        PROCESS_PID: "process.pid",
        PROCESS_EXECUTABLE_NAME: "process.executable.name",
        PROCESS_EXECUTABLE_PATH: "process.executable.path",
        PROCESS_COMMAND: "process.command",
        PROCESS_COMMAND_LINE: "process.command_line",
        PROCESS_COMMAND_ARGS: "process.command_args",
        PROCESS_OWNER: "process.owner",
        PROCESS_RUNTIME_NAME: "process.runtime.name",
        PROCESS_RUNTIME_VERSION: "process.runtime.version",
        PROCESS_RUNTIME_DESCRIPTION: "process.runtime.description",
        SERVICE_NAME: "service.name",
        SERVICE_NAMESPACE: "service.namespace",
        SERVICE_INSTANCE_ID: "service.instance.id",
        SERVICE_VERSION: "service.version",
        TELEMETRY_SDK_NAME: "telemetry.sdk.name",
        TELEMETRY_SDK_LANGUAGE: "telemetry.sdk.language",
        TELEMETRY_SDK_VERSION: "telemetry.sdk.version",
        TELEMETRY_AUTO_VERSION: "telemetry.auto.version",
        WEBENGINE_NAME: "webengine.name",
        WEBENGINE_VERSION: "webengine.version",
        WEBENGINE_DESCRIPTION: "webengine.description"
    };
    X.CloudProviderValues = {
        ALIBABA_CLOUD: "alibaba_cloud",
        AWS: "aws",
        AZURE: "azure",
        GCP: "gcp"
    };
    X.CloudPlatformValues = {
        ALIBABA_CLOUD_ECS: "alibaba_cloud_ecs",
        ALIBABA_CLOUD_FC: "alibaba_cloud_fc",
        AWS_EC2: "aws_ec2",
        AWS_ECS: "aws_ecs",
        AWS_EKS: "aws_eks",
        AWS_LAMBDA: "aws_lambda",
        AWS_ELASTIC_BEANSTALK: "aws_elastic_beanstalk",
        AZURE_VM: "azure_vm",
        AZURE_CONTAINER_INSTANCES: "azure_container_instances",
        AZURE_AKS: "azure_aks",
        AZURE_FUNCTIONS: "azure_functions",
        AZURE_APP_SERVICE: "azure_app_service",
        GCP_COMPUTE_ENGINE: "gcp_compute_engine",
        GCP_CLOUD_RUN: "gcp_cloud_run",
        GCP_KUBERNETES_ENGINE: "gcp_kubernetes_engine",
        GCP_CLOUD_FUNCTIONS: "gcp_cloud_functions",
        GCP_APP_ENGINE: "gcp_app_engine"
    };
    X.AwsEcsLaunchtypeValues = {
        EC2: "ec2",
        FARGATE: "fargate"
    };
    X.HostArchValues = {
        AMD64: "amd64",
        ARM32: "arm32",
        ARM64: "arm64",
        IA64: "ia64",
        PPC32: "ppc32",
        PPC64: "ppc64",
        X86: "x86"
    };
    X.OsTypeValues = {
        WINDOWS: "windows",
        LINUX: "linux",
        DARWIN: "darwin",
        FREEBSD: "freebsd",
        NETBSD: "netbsd",
        OPENBSD: "openbsd",
        DRAGONFLYBSD: "dragonflybsd",
        HPUX: "hpux",
        AIX: "aix",
        SOLARIS: "solaris",
        Z_OS: "z_os"
    };
    X.TelemetrySdkLanguageValues = {
        CPP: "cpp",
        DOTNET: "dotnet",
        ERLANG: "erlang",
        GO: "go",
        JAVA: "java",
        NODEJS: "nodejs",
        PHP: "php",
        PYTHON: "python",
        RUBY: "ruby",
        WEBJS: "webjs"
    };
});
var Dc = c((We)=>{
    "use strict";
    var eE = We && We.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), tE = We && We.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && eE(e, r, t);
    };
    Object.defineProperty(We, "__esModule", {
        value: !0
    });
    tE(xc(), We);
});
var oe = c((Ce)=>{
    "use strict";
    var rE = Ce && Ce.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Uc = Ce && Ce.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && rE(e, r, t);
    };
    Object.defineProperty(Ce, "__esModule", {
        value: !0
    });
    Uc(wc(), Ce);
    Uc(Dc(), Ce);
});
var Bc = c((sn)=>{
    "use strict";
    Object.defineProperty(sn, "__esModule", {
        value: !0
    });
    sn.SDK_INFO = void 0;
    var nE = rs(), hr = oe();
    sn.SDK_INFO = {
        [hr.SemanticResourceAttributes.TELEMETRY_SDK_NAME]: "opentelemetry",
        [hr.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: "node",
        [hr.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE]: hr.TelemetrySdkLanguageValues.NODEJS,
        [hr.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]: nE.VERSION
    };
});
var qc = c((an)=>{
    "use strict";
    Object.defineProperty(an, "__esModule", {
        value: !0
    });
    an.unrefTimer = void 0;
    function iE(r) {
        r.unref();
    }
    an.unrefTimer = iE;
});
var Gc = c((te)=>{
    "use strict";
    var oE = te && te.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Ke = te && te.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && oE(e, r, t);
    };
    Object.defineProperty(te, "__esModule", {
        value: !0
    });
    Ke(bc(), te);
    Ke(Pc(), te);
    Ke(vc(), te);
    Ke(Mc(), te);
    Ke(Cc(), te);
    Ke(Bc(), te);
    Ke(qc(), te);
});
var ns = c((ze)=>{
    "use strict";
    var sE = ze && ze.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), aE = ze && ze.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && sE(e, r, t);
    };
    Object.defineProperty(ze, "__esModule", {
        value: !0
    });
    aE(Gc(), ze);
});
var Hc = c((v)=>{
    "use strict";
    Object.defineProperty(v, "__esModule", {
        value: !0
    });
    v.addHrTimes = v.isTimeInput = v.isTimeInputHrTime = v.hrTimeToMicroseconds = v.hrTimeToMilliseconds = v.hrTimeToNanoseconds = v.hrTimeToTimeStamp = v.hrTimeDuration = v.timeInputToHrTime = v.hrTime = v.getTimeOrigin = v.millisToHrTime = void 0;
    var is = ns(), Vc = 9, uE = 6, cE = Math.pow(10, uE), un = Math.pow(10, Vc);
    function fr(r) {
        let e = r / 1e3, t = Math.trunc(e), n = Math.round(r % 1e3 * cE);
        return [
            t,
            n
        ];
    }
    v.millisToHrTime = fr;
    function os() {
        let r = is.otperformance.timeOrigin;
        if (typeof r != "number") {
            let e = is.otperformance;
            r = e.timing && e.timing.fetchStart;
        }
        return r;
    }
    v.getTimeOrigin = os;
    function jc(r) {
        let e = fr(os()), t = fr(typeof r == "number" ? r : is.otperformance.now());
        return Fc(e, t);
    }
    v.hrTime = jc;
    function lE(r) {
        if (ss(r)) return r;
        if (typeof r == "number") return r < os() ? jc(r) : fr(r);
        if (r instanceof Date) return fr(r.getTime());
        throw TypeError("Invalid input type");
    }
    v.timeInputToHrTime = lE;
    function dE(r, e) {
        let t = e[0] - r[0], n = e[1] - r[1];
        return n < 0 && (t -= 1, n += un), [
            t,
            n
        ];
    }
    v.hrTimeDuration = dE;
    function _E(r) {
        let e = Vc, t = `${"0".repeat(e)}${r[1]}Z`, n = t.substr(t.length - e - 1);
        return new Date(r[0] * 1e3).toISOString().replace("000Z", n);
    }
    v.hrTimeToTimeStamp = _E;
    function pE(r) {
        return r[0] * un + r[1];
    }
    v.hrTimeToNanoseconds = pE;
    function hE(r) {
        return r[0] * 1e3 + r[1] / 1e6;
    }
    v.hrTimeToMilliseconds = hE;
    function fE(r) {
        return r[0] * 1e6 + r[1] / 1e3;
    }
    v.hrTimeToMicroseconds = fE;
    function ss(r) {
        return Array.isArray(r) && r.length === 2 && typeof r[0] == "number" && typeof r[1] == "number";
    }
    v.isTimeInputHrTime = ss;
    function EE(r) {
        return ss(r) || typeof r == "number" || r instanceof Date;
    }
    v.isTimeInput = EE;
    function Fc(r, e) {
        let t = [
            r[0] + e[0],
            r[1] + e[1]
        ];
        return t[1] >= un && (t[1] -= un, t[0] += 1), t;
    }
    v.addHrTimes = Fc;
});
var $c = c((kc)=>{
    "use strict";
    Object.defineProperty(kc, "__esModule", {
        value: !0
    });
});
var Xc = c((Er)=>{
    "use strict";
    Object.defineProperty(Er, "__esModule", {
        value: !0
    });
    Er.ExportResultCode = void 0;
    var mE;
    (function(r) {
        r[r.SUCCESS = 0] = "SUCCESS", r[r.FAILED = 1] = "FAILED";
    })(mE = Er.ExportResultCode || (Er.ExportResultCode = {}));
});
var Kc = c((cn)=>{
    "use strict";
    Object.defineProperty(cn, "__esModule", {
        value: !0
    });
    cn.CompositePropagator = void 0;
    var Wc = (p(), f(d)), as = class {
        constructor(e = {}){
            var t;
            this._propagators = (t = e.propagators) !== null && t !== void 0 ? t : [], this._fields = Array.from(new Set(this._propagators.map((n)=>typeof n.fields == "function" ? n.fields() : []).reduce((n, i)=>n.concat(i), [])));
        }
        inject(e, t, n) {
            for (let i of this._propagators)try {
                i.inject(e, t, n);
            } catch (o) {
                Wc.diag.warn(`Failed to inject with ${i.constructor.name}. Err: ${o.message}`);
            }
        }
        extract(e, t, n) {
            return this._propagators.reduce((i, o)=>{
                try {
                    return o.extract(i, t, n);
                } catch (s) {
                    Wc.diag.warn(`Failed to inject with ${o.constructor.name}. Err: ${s.message}`);
                }
                return i;
            }, e);
        }
        fields() {
            return this._fields.slice();
        }
    };
    cn.CompositePropagator = as;
});
var zc = c((gt)=>{
    "use strict";
    Object.defineProperty(gt, "__esModule", {
        value: !0
    });
    gt.validateValue = gt.validateKey = void 0;
    var us = "[_0-9a-z-*/]", gE = `[a-z]${us}{0,255}`, TE = `[a-z0-9]${us}{0,240}@[a-z]${us}{0,13}`, SE = new RegExp(`^(?:${gE}|${TE})$`), AE = /^[ -~]{0,255}[!-~]$/, OE = /,|=/;
    function RE(r) {
        return SE.test(r);
    }
    gt.validateKey = RE;
    function bE(r) {
        return AE.test(r) && !OE.test(r);
    }
    gt.validateValue = bE;
});
var ls = c((ln)=>{
    "use strict";
    Object.defineProperty(ln, "__esModule", {
        value: !0
    });
    ln.TraceState = void 0;
    var Yc = zc(), Qc = 32, PE = 512, Zc = ",", Jc = "=", cs = class r {
        constructor(e){
            this._internalState = new Map, e && this._parse(e);
        }
        set(e, t) {
            let n = this._clone();
            return n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, t), n;
        }
        unset(e) {
            let t = this._clone();
            return t._internalState.delete(e), t;
        }
        get(e) {
            return this._internalState.get(e);
        }
        serialize() {
            return this._keys().reduce((e, t)=>(e.push(t + Jc + this.get(t)), e), []).join(Zc);
        }
        _parse(e) {
            e.length > PE || (this._internalState = e.split(Zc).reverse().reduce((t, n)=>{
                let i = n.trim(), o = i.indexOf(Jc);
                if (o !== -1) {
                    let s = i.slice(0, o), a = i.slice(o + 1, n.length);
                    (0, Yc.validateKey)(s) && (0, Yc.validateValue)(a) && t.set(s, a);
                }
                return t;
            }, new Map), this._internalState.size > Qc && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, Qc))));
        }
        _keys() {
            return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
            let e = new r;
            return e._internalState = new Map(this._internalState), e;
        }
    };
    ln.TraceState = cs;
});
var tl = c((W)=>{
    "use strict";
    Object.defineProperty(W, "__esModule", {
        value: !0
    });
    W.W3CTraceContextPropagator = W.parseTraceParent = W.TRACE_STATE_HEADER = W.TRACE_PARENT_HEADER = void 0;
    var dn = (p(), f(d)), yE = _r(), vE = ls();
    W.TRACE_PARENT_HEADER = "traceparent";
    W.TRACE_STATE_HEADER = "tracestate";
    var IE = "00", LE = "(?!ff)[\\da-f]{2}", ME = "(?![0]{32})[\\da-f]{32}", CE = "(?![0]{16})[\\da-f]{16}", NE = "[\\da-f]{2}", wE = new RegExp(`^\\s?(${LE})-(${ME})-(${CE})-(${NE})(-.*)?\\s?$`);
    function el(r) {
        let e = wE.exec(r);
        return !e || e[1] === "00" && e[5] ? null : {
            traceId: e[2],
            spanId: e[3],
            traceFlags: parseInt(e[4], 16)
        };
    }
    W.parseTraceParent = el;
    var ds = class {
        inject(e, t, n) {
            let i = dn.trace.getSpanContext(e);
            if (!i || (0, yE.isTracingSuppressed)(e) || !(0, dn.isSpanContextValid)(i)) return;
            let o = `${IE}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags || dn.TraceFlags.NONE).toString(16)}`;
            n.set(t, W.TRACE_PARENT_HEADER, o), i.traceState && n.set(t, W.TRACE_STATE_HEADER, i.traceState.serialize());
        }
        extract(e, t, n) {
            let i = n.get(t, W.TRACE_PARENT_HEADER);
            if (!i) return e;
            let o = Array.isArray(i) ? i[0] : i;
            if (typeof o != "string") return e;
            let s = el(o);
            if (!s) return e;
            s.isRemote = !0;
            let a = n.get(t, W.TRACE_STATE_HEADER);
            if (a) {
                let u = Array.isArray(a) ? a.join(",") : a;
                s.traceState = new vE.TraceState(typeof u == "string" ? u : void 0);
            }
            return dn.trace.setSpanContext(e, s);
        }
        fields() {
            return [
                W.TRACE_PARENT_HEADER,
                W.TRACE_STATE_HEADER
            ];
        }
    };
    W.W3CTraceContextPropagator = ds;
});
var nl = c((rl)=>{
    "use strict";
    Object.defineProperty(rl, "__esModule", {
        value: !0
    });
});
var il = c((ce)=>{
    "use strict";
    Object.defineProperty(ce, "__esModule", {
        value: !0
    });
    ce.getRPCMetadata = ce.deleteRPCMetadata = ce.setRPCMetadata = ce.RPCType = void 0;
    var xE = (p(), f(d)), _s = (0, xE.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"), DE;
    (function(r) {
        r.HTTP = "http";
    })(DE = ce.RPCType || (ce.RPCType = {}));
    function UE(r, e) {
        return r.setValue(_s, e);
    }
    ce.setRPCMetadata = UE;
    function BE(r) {
        return r.deleteValue(_s);
    }
    ce.deleteRPCMetadata = BE;
    function qE(r) {
        return r.getValue(_s);
    }
    ce.getRPCMetadata = qE;
});
var hs = c((_n)=>{
    "use strict";
    Object.defineProperty(_n, "__esModule", {
        value: !0
    });
    _n.AlwaysOffSampler = void 0;
    var GE = (p(), f(d)), ps = class {
        shouldSample() {
            return {
                decision: GE.SamplingDecision.NOT_RECORD
            };
        }
        toString() {
            return "AlwaysOffSampler";
        }
    };
    _n.AlwaysOffSampler = ps;
});
var Es = c((pn)=>{
    "use strict";
    Object.defineProperty(pn, "__esModule", {
        value: !0
    });
    pn.AlwaysOnSampler = void 0;
    var VE = (p(), f(d)), fs = class {
        shouldSample() {
            return {
                decision: VE.SamplingDecision.RECORD_AND_SAMPLED
            };
        }
        toString() {
            return "AlwaysOnSampler";
        }
    };
    pn.AlwaysOnSampler = fs;
});
var sl = c((fn)=>{
    "use strict";
    Object.defineProperty(fn, "__esModule", {
        value: !0
    });
    fn.ParentBasedSampler = void 0;
    var hn = (p(), f(d)), jE = Zo(), ol = hs(), ms = Es(), gs = class {
        constructor(e){
            var t, n, i, o;
            this._root = e.root, this._root || ((0, jE.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new ms.AlwaysOnSampler), this._remoteParentSampled = (t = e.remoteParentSampled) !== null && t !== void 0 ? t : new ms.AlwaysOnSampler, this._remoteParentNotSampled = (n = e.remoteParentNotSampled) !== null && n !== void 0 ? n : new ol.AlwaysOffSampler, this._localParentSampled = (i = e.localParentSampled) !== null && i !== void 0 ? i : new ms.AlwaysOnSampler, this._localParentNotSampled = (o = e.localParentNotSampled) !== null && o !== void 0 ? o : new ol.AlwaysOffSampler;
        }
        shouldSample(e, t, n, i, o, s) {
            let a = hn.trace.getSpanContext(e);
            return !a || !(0, hn.isSpanContextValid)(a) ? this._root.shouldSample(e, t, n, i, o, s) : a.isRemote ? a.traceFlags & hn.TraceFlags.SAMPLED ? this._remoteParentSampled.shouldSample(e, t, n, i, o, s) : this._remoteParentNotSampled.shouldSample(e, t, n, i, o, s) : a.traceFlags & hn.TraceFlags.SAMPLED ? this._localParentSampled.shouldSample(e, t, n, i, o, s) : this._localParentNotSampled.shouldSample(e, t, n, i, o, s);
        }
        toString() {
            return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
        }
    };
    fn.ParentBasedSampler = gs;
});
var al = c((En)=>{
    "use strict";
    Object.defineProperty(En, "__esModule", {
        value: !0
    });
    En.TraceIdRatioBasedSampler = void 0;
    var Ts = (p(), f(d)), Ss = class {
        constructor(e = 0){
            this._ratio = e, this._ratio = this._normalize(e), this._upperBound = Math.floor(this._ratio * 4294967295);
        }
        shouldSample(e, t) {
            return {
                decision: (0, Ts.isValidTraceId)(t) && this._accumulate(t) < this._upperBound ? Ts.SamplingDecision.RECORD_AND_SAMPLED : Ts.SamplingDecision.NOT_RECORD
            };
        }
        toString() {
            return `TraceIdRatioBased{${this._ratio}}`;
        }
        _normalize(e) {
            return typeof e != "number" || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
        }
        _accumulate(e) {
            let t = 0;
            for(let n = 0; n < e.length / 8; n++){
                let i = n * 8, o = parseInt(e.slice(i, i + 8), 16);
                t = (t ^ o) >>> 0;
            }
            return t;
        }
    };
    En.TraceIdRatioBasedSampler = Ss;
});
var _l = c((mn)=>{
    "use strict";
    Object.defineProperty(mn, "__esModule", {
        value: !0
    });
    mn.isPlainObject = void 0;
    var FE = "[object Object]", HE = "[object Null]", kE = "[object Undefined]", $E = Function.prototype, ul = $E.toString, XE = ul.call(Object), WE = KE(Object.getPrototypeOf, Object), cl = Object.prototype, ll = cl.hasOwnProperty, Ye = Symbol ? Symbol.toStringTag : void 0, dl = cl.toString;
    function KE(r, e) {
        return function(t) {
            return r(e(t));
        };
    }
    function zE(r) {
        if (!YE(r) || QE(r) !== FE) return !1;
        let e = WE(r);
        if (e === null) return !0;
        let t = ll.call(e, "constructor") && e.constructor;
        return typeof t == "function" && t instanceof t && ul.call(t) === XE;
    }
    mn.isPlainObject = zE;
    function YE(r) {
        return r != null && typeof r == "object";
    }
    function QE(r) {
        return r == null ? r === void 0 ? kE : HE : Ye && Ye in Object(r) ? ZE(r) : JE(r);
    }
    function ZE(r) {
        let e = ll.call(r, Ye), t = r[Ye], n = !1;
        try {
            r[Ye] = void 0, n = !0;
        } catch  {}
        let i = dl.call(r);
        return n && (e ? r[Ye] = t : delete r[Ye]), i;
    }
    function JE(r) {
        return dl.call(r);
    }
});
var ml = c((Sn)=>{
    "use strict";
    Object.defineProperty(Sn, "__esModule", {
        value: !0
    });
    Sn.merge = void 0;
    var pl = _l(), em = 20;
    function tm(...r) {
        let e = r.shift(), t = new WeakMap;
        for(; r.length > 0;)e = fl(e, r.shift(), 0, t);
        return e;
    }
    Sn.merge = tm;
    function As(r) {
        return Tn(r) ? r.slice() : r;
    }
    function fl(r, e, t = 0, n) {
        let i;
        if (!(t > em)) {
            if (t++, gn(r) || gn(e) || El(e)) i = As(e);
            else if (Tn(r)) {
                if (i = r.slice(), Tn(e)) for(let o = 0, s = e.length; o < s; o++)i.push(As(e[o]));
                else if (mr(e)) {
                    let o = Object.keys(e);
                    for(let s = 0, a = o.length; s < a; s++){
                        let u = o[s];
                        i[u] = As(e[u]);
                    }
                }
            } else if (mr(r)) if (mr(e)) {
                if (!rm(r, e)) return e;
                i = Object.assign({}, r);
                let o = Object.keys(e);
                for(let s = 0, a = o.length; s < a; s++){
                    let u = o[s], l = e[u];
                    if (gn(l)) typeof l > "u" ? delete i[u] : i[u] = l;
                    else {
                        let _ = i[u], E = l;
                        if (hl(r, u, n) || hl(e, u, n)) delete i[u];
                        else {
                            if (mr(_) && mr(E)) {
                                let O = n.get(_) || [], x = n.get(E) || [];
                                O.push({
                                    obj: r,
                                    key: u
                                }), x.push({
                                    obj: e,
                                    key: u
                                }), n.set(_, O), n.set(E, x);
                            }
                            i[u] = fl(i[u], l, t, n);
                        }
                    }
                }
            } else i = e;
            return i;
        }
    }
    function hl(r, e, t) {
        let n = t.get(r[e]) || [];
        for(let i = 0, o = n.length; i < o; i++){
            let s = n[i];
            if (s.key === e && s.obj === r) return !0;
        }
        return !1;
    }
    function Tn(r) {
        return Array.isArray(r);
    }
    function El(r) {
        return typeof r == "function";
    }
    function mr(r) {
        return !gn(r) && !Tn(r) && !El(r) && typeof r == "object";
    }
    function gn(r) {
        return typeof r == "string" || typeof r == "number" || typeof r == "boolean" || typeof r > "u" || r instanceof Date || r instanceof RegExp || r === null;
    }
    function rm(r, e) {
        return !(!(0, pl.isPlainObject)(r) || !(0, pl.isPlainObject)(e));
    }
});
var gl = c((Tt)=>{
    "use strict";
    Object.defineProperty(Tt, "__esModule", {
        value: !0
    });
    Tt.callWithTimeout = Tt.TimeoutError = void 0;
    var An = class r extends Error {
        constructor(e){
            super(e), Object.setPrototypeOf(this, r.prototype);
        }
    };
    Tt.TimeoutError = An;
    function nm(r, e) {
        let t, n = new Promise(function(o, s) {
            t = setTimeout(function() {
                s(new An("Operation timed out."));
            }, e);
        });
        return Promise.race([
            r,
            n
        ]).then((i)=>(clearTimeout(t), i), (i)=>{
            throw clearTimeout(t), i;
        });
    }
    Tt.callWithTimeout = nm;
});
var Sl = c((St)=>{
    "use strict";
    Object.defineProperty(St, "__esModule", {
        value: !0
    });
    St.isUrlIgnored = St.urlMatches = void 0;
    function Tl(r, e) {
        return typeof e == "string" ? r === e : !!r.match(e);
    }
    St.urlMatches = Tl;
    function im(r, e) {
        if (!e) return !1;
        for (let t of e)if (Tl(r, t)) return !0;
        return !1;
    }
    St.isUrlIgnored = im;
});
var Al = c((On)=>{
    "use strict";
    Object.defineProperty(On, "__esModule", {
        value: !0
    });
    On.isWrapped = void 0;
    function om(r) {
        return typeof r == "function" && typeof r.__original == "function" && typeof r.__unwrap == "function" && r.__wrapped === !0;
    }
    On.isWrapped = om;
});
var Ol = c((Rn)=>{
    "use strict";
    Object.defineProperty(Rn, "__esModule", {
        value: !0
    });
    Rn.Deferred = void 0;
    var Os = class {
        constructor(){
            this._promise = new Promise((e, t)=>{
                this._resolve = e, this._reject = t;
            });
        }
        get promise() {
            return this._promise;
        }
        resolve(e) {
            this._resolve(e);
        }
        reject(e) {
            this._reject(e);
        }
    };
    Rn.Deferred = Os;
});
var Rl = c((bn)=>{
    "use strict";
    Object.defineProperty(bn, "__esModule", {
        value: !0
    });
    bn.BindOnceFuture = void 0;
    var sm = Ol(), Rs = class {
        constructor(e, t){
            this._callback = e, this._that = t, this._isCalled = !1, this._deferred = new sm.Deferred;
        }
        get isCalled() {
            return this._isCalled;
        }
        get promise() {
            return this._deferred.promise;
        }
        call(...e) {
            if (!this._isCalled) {
                this._isCalled = !0;
                try {
                    Promise.resolve(this._callback.call(this._that, ...e)).then((t)=>this._deferred.resolve(t), (t)=>this._deferred.reject(t));
                } catch (t) {
                    this._deferred.reject(t);
                }
            }
            return this._deferred.promise;
        }
    };
    bn.BindOnceFuture = Rs;
});
var Pl = c((Pn)=>{
    "use strict";
    Object.defineProperty(Pn, "__esModule", {
        value: !0
    });
    Pn._export = void 0;
    var bl = (p(), f(d)), am = _r();
    function um(r, e) {
        return new Promise((t)=>{
            bl.context.with((0, am.suppressTracing)(bl.context.active()), ()=>{
                r.export(e, (n)=>{
                    t(n);
                });
            });
        });
    }
    Pn._export = um;
});
var T = c((g)=>{
    "use strict";
    var cm = g && g.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), P = g && g.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && cm(e, r, t);
    };
    Object.defineProperty(g, "__esModule", {
        value: !0
    });
    g.internal = g.baggageUtils = void 0;
    P(hc(), g);
    P(fc(), g);
    P(Sc(), g);
    P(Zo(), g);
    P(Qo(), g);
    P(Hc(), g);
    P($c(), g);
    P(Xc(), g);
    g.baggageUtils = Xo();
    P(ns(), g);
    P(Kc(), g);
    P(tl(), g);
    P(nl(), g);
    P(il(), g);
    P(hs(), g);
    P(Es(), g);
    P(sl(), g);
    P(al(), g);
    P(_r(), g);
    P(ls(), g);
    P(Qr(), g);
    P(ml(), g);
    P(Jo(), g);
    P(gl(), g);
    P(Sl(), g);
    P(Al(), g);
    P(Rl(), g);
    P(rs(), g);
    var lm = Pl();
    g.internal = {
        _export: lm._export
    };
});
var yl = c((yn)=>{
    "use strict";
    Object.defineProperty(yn, "__esModule", {
        value: !0
    });
    yn.ExceptionEventName = void 0;
    yn.ExceptionEventName = "exception";
});
var Ps = c((vn)=>{
    "use strict";
    Object.defineProperty(vn, "__esModule", {
        value: !0
    });
    vn.Span = void 0;
    var fe = (p(), f(d)), K = T(), Qe = oe(), dm = yl(), bs = class {
        constructor(e, t, n, i, o, s, a = [], u, l, _){
            this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                code: fe.SpanStatusCode.UNSET
            }, this.endTime = [
                0,
                0
            ], this._ended = !1, this._duration = [
                -1,
                -1
            ], this.name = n, this._spanContext = i, this.parentSpanId = s, this.kind = o, this.links = a;
            let E = Date.now();
            this._performanceStartTime = K.otperformance.now(), this._performanceOffset = E - (this._performanceStartTime + (0, K.getTimeOrigin)()), this._startTimeProvided = u != null, this.startTime = this._getTime(u ?? E), this.resource = e.resource, this.instrumentationLibrary = e.instrumentationLibrary, this._spanLimits = e.getSpanLimits(), _ != null && this.setAttributes(_), this._spanProcessor = e.getActiveSpanProcessor(), this._spanProcessor.onStart(this, t), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
        }
        spanContext() {
            return this._spanContext;
        }
        setAttribute(e, t) {
            return t == null || this._isSpanEnded() ? this : e.length === 0 ? (fe.diag.warn(`Invalid attribute key: ${e}`), this) : (0, K.isAttributeValue)(t) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, e) ? (this._droppedAttributesCount++, this) : (this.attributes[e] = this._truncateToSize(t), this) : (fe.diag.warn(`Invalid attribute value set for key: ${e}`), this);
        }
        setAttributes(e) {
            for (let [t, n] of Object.entries(e))this.setAttribute(t, n);
            return this;
        }
        addEvent(e, t, n) {
            if (this._isSpanEnded()) return this;
            if (this._spanLimits.eventCountLimit === 0) return fe.diag.warn("No events allowed."), this._droppedEventsCount++, this;
            this.events.length >= this._spanLimits.eventCountLimit && (fe.diag.warn("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), (0, K.isTimeInput)(t) && ((0, K.isTimeInput)(n) || (n = t), t = void 0);
            let i = (0, K.sanitizeAttributes)(t);
            return this.events.push({
                name: e,
                attributes: i,
                time: this._getTime(n),
                droppedAttributesCount: 0
            }), this;
        }
        setStatus(e) {
            return this._isSpanEnded() ? this : (this.status = e, this);
        }
        updateName(e) {
            return this._isSpanEnded() ? this : (this.name = e, this);
        }
        end(e) {
            if (this._isSpanEnded()) {
                fe.diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
                return;
            }
            this._ended = !0, this.endTime = this._getTime(e), this._duration = (0, K.hrTimeDuration)(this.startTime, this.endTime), this._duration[0] < 0 && (fe.diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [
                0,
                0
            ]), this._spanProcessor.onEnd(this);
        }
        _getTime(e) {
            if (typeof e == "number" && e < K.otperformance.now()) return (0, K.hrTime)(e + this._performanceOffset);
            if (typeof e == "number") return (0, K.millisToHrTime)(e);
            if (e instanceof Date) return (0, K.millisToHrTime)(e.getTime());
            if ((0, K.isTimeInputHrTime)(e)) return e;
            if (this._startTimeProvided) return (0, K.millisToHrTime)(Date.now());
            let t = K.otperformance.now() - this._performanceStartTime;
            return (0, K.addHrTimes)(this.startTime, (0, K.millisToHrTime)(t));
        }
        isRecording() {
            return this._ended === !1;
        }
        recordException(e, t) {
            let n = {};
            typeof e == "string" ? n[Qe.SemanticAttributes.EXCEPTION_MESSAGE] = e : e && (e.code ? n[Qe.SemanticAttributes.EXCEPTION_TYPE] = e.code.toString() : e.name && (n[Qe.SemanticAttributes.EXCEPTION_TYPE] = e.name), e.message && (n[Qe.SemanticAttributes.EXCEPTION_MESSAGE] = e.message), e.stack && (n[Qe.SemanticAttributes.EXCEPTION_STACKTRACE] = e.stack)), n[Qe.SemanticAttributes.EXCEPTION_TYPE] || n[Qe.SemanticAttributes.EXCEPTION_MESSAGE] ? this.addEvent(dm.ExceptionEventName, n, t) : fe.diag.warn(`Failed to record an exception ${e}`);
        }
        get duration() {
            return this._duration;
        }
        get ended() {
            return this._ended;
        }
        get droppedAttributesCount() {
            return this._droppedAttributesCount;
        }
        get droppedEventsCount() {
            return this._droppedEventsCount;
        }
        get droppedLinksCount() {
            return this._droppedLinksCount;
        }
        _isSpanEnded() {
            return this._ended && fe.diag.warn(`Can not execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`), this._ended;
        }
        _truncateToLimitUtil(e, t) {
            return e.length <= t ? e : e.substr(0, t);
        }
        _truncateToSize(e) {
            let t = this._attributeValueLengthLimit;
            return t <= 0 ? (fe.diag.warn(`Attribute value limit must be positive, got ${t}`), e) : typeof e == "string" ? this._truncateToLimitUtil(e, t) : Array.isArray(e) ? e.map((n)=>typeof n == "string" ? this._truncateToLimitUtil(n, t) : n) : e;
        }
    };
    vn.Span = bs;
});
var Tr = c((gr)=>{
    "use strict";
    Object.defineProperty(gr, "__esModule", {
        value: !0
    });
    gr.SamplingDecision = void 0;
    var _m;
    (function(r) {
        r[r.NOT_RECORD = 0] = "NOT_RECORD", r[r.RECORD = 1] = "RECORD", r[r.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
    })(_m = gr.SamplingDecision || (gr.SamplingDecision = {}));
});
var Ln = c((In)=>{
    "use strict";
    Object.defineProperty(In, "__esModule", {
        value: !0
    });
    In.AlwaysOffSampler = void 0;
    var pm = Tr(), ys = class {
        shouldSample() {
            return {
                decision: pm.SamplingDecision.NOT_RECORD
            };
        }
        toString() {
            return "AlwaysOffSampler";
        }
    };
    In.AlwaysOffSampler = ys;
});
var Cn = c((Mn)=>{
    "use strict";
    Object.defineProperty(Mn, "__esModule", {
        value: !0
    });
    Mn.AlwaysOnSampler = void 0;
    var hm = Tr(), vs = class {
        shouldSample() {
            return {
                decision: hm.SamplingDecision.RECORD_AND_SAMPLED
            };
        }
        toString() {
            return "AlwaysOnSampler";
        }
    };
    Mn.AlwaysOnSampler = vs;
});
var Ms = c((wn)=>{
    "use strict";
    Object.defineProperty(wn, "__esModule", {
        value: !0
    });
    wn.ParentBasedSampler = void 0;
    var Nn = (p(), f(d)), fm = T(), vl = Ln(), Is = Cn(), Ls = class {
        constructor(e){
            var t, n, i, o;
            this._root = e.root, this._root || ((0, fm.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new Is.AlwaysOnSampler), this._remoteParentSampled = (t = e.remoteParentSampled) !== null && t !== void 0 ? t : new Is.AlwaysOnSampler, this._remoteParentNotSampled = (n = e.remoteParentNotSampled) !== null && n !== void 0 ? n : new vl.AlwaysOffSampler, this._localParentSampled = (i = e.localParentSampled) !== null && i !== void 0 ? i : new Is.AlwaysOnSampler, this._localParentNotSampled = (o = e.localParentNotSampled) !== null && o !== void 0 ? o : new vl.AlwaysOffSampler;
        }
        shouldSample(e, t, n, i, o, s) {
            let a = Nn.trace.getSpanContext(e);
            return !a || !(0, Nn.isSpanContextValid)(a) ? this._root.shouldSample(e, t, n, i, o, s) : a.isRemote ? a.traceFlags & Nn.TraceFlags.SAMPLED ? this._remoteParentSampled.shouldSample(e, t, n, i, o, s) : this._remoteParentNotSampled.shouldSample(e, t, n, i, o, s) : a.traceFlags & Nn.TraceFlags.SAMPLED ? this._localParentSampled.shouldSample(e, t, n, i, o, s) : this._localParentNotSampled.shouldSample(e, t, n, i, o, s);
        }
        toString() {
            return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
        }
    };
    wn.ParentBasedSampler = Ls;
});
var Ns = c((xn)=>{
    "use strict";
    Object.defineProperty(xn, "__esModule", {
        value: !0
    });
    xn.TraceIdRatioBasedSampler = void 0;
    var Em = (p(), f(d)), Il = Tr(), Cs = class {
        constructor(e = 0){
            this._ratio = e, this._ratio = this._normalize(e), this._upperBound = Math.floor(this._ratio * 4294967295);
        }
        shouldSample(e, t) {
            return {
                decision: (0, Em.isValidTraceId)(t) && this._accumulate(t) < this._upperBound ? Il.SamplingDecision.RECORD_AND_SAMPLED : Il.SamplingDecision.NOT_RECORD
            };
        }
        toString() {
            return `TraceIdRatioBased{${this._ratio}}`;
        }
        _normalize(e) {
            return typeof e != "number" || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
        }
        _accumulate(e) {
            let t = 0;
            for(let n = 0; n < e.length / 8; n++){
                let i = n * 8, o = parseInt(e.slice(i, i + 8), 16);
                t = (t ^ o) >>> 0;
            }
            return t;
        }
    };
    xn.TraceIdRatioBasedSampler = Cs;
});
var Ds = c((Ot)=>{
    "use strict";
    Object.defineProperty(Ot, "__esModule", {
        value: !0
    });
    Ot.buildSamplerFromEnv = Ot.loadDefaultConfig = void 0;
    var Dn = (p(), f(d)), F = T(), Ll = Ln(), ws = Cn(), xs = Ms(), Ml = Ns(), mm = (0, F.getEnv)(), gm = F.TracesSamplerValues.AlwaysOn, At = 1;
    function Tm() {
        return {
            sampler: Nl(mm),
            forceFlushTimeoutMillis: 3e4,
            generalLimits: {
                attributeValueLengthLimit: (0, F.getEnv)().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: (0, F.getEnv)().OTEL_ATTRIBUTE_COUNT_LIMIT
            },
            spanLimits: {
                attributeValueLengthLimit: (0, F.getEnv)().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: (0, F.getEnv)().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
                linkCountLimit: (0, F.getEnv)().OTEL_SPAN_LINK_COUNT_LIMIT,
                eventCountLimit: (0, F.getEnv)().OTEL_SPAN_EVENT_COUNT_LIMIT,
                attributePerEventCountLimit: (0, F.getEnv)().OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
                attributePerLinkCountLimit: (0, F.getEnv)().OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
            }
        };
    }
    Ot.loadDefaultConfig = Tm;
    function Nl(r = (0, F.getEnv)()) {
        switch(r.OTEL_TRACES_SAMPLER){
            case F.TracesSamplerValues.AlwaysOn:
                return new ws.AlwaysOnSampler;
            case F.TracesSamplerValues.AlwaysOff:
                return new Ll.AlwaysOffSampler;
            case F.TracesSamplerValues.ParentBasedAlwaysOn:
                return new xs.ParentBasedSampler({
                    root: new ws.AlwaysOnSampler
                });
            case F.TracesSamplerValues.ParentBasedAlwaysOff:
                return new xs.ParentBasedSampler({
                    root: new Ll.AlwaysOffSampler
                });
            case F.TracesSamplerValues.TraceIdRatio:
                return new Ml.TraceIdRatioBasedSampler(Cl(r));
            case F.TracesSamplerValues.ParentBasedTraceIdRatio:
                return new xs.ParentBasedSampler({
                    root: new Ml.TraceIdRatioBasedSampler(Cl(r))
                });
            default:
                return Dn.diag.error(`OTEL_TRACES_SAMPLER value "${r.OTEL_TRACES_SAMPLER} invalid, defaulting to ${gm}".`), new ws.AlwaysOnSampler;
        }
    }
    Ot.buildSamplerFromEnv = Nl;
    function Cl(r) {
        if (r.OTEL_TRACES_SAMPLER_ARG === void 0 || r.OTEL_TRACES_SAMPLER_ARG === "") return Dn.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${At}.`), At;
        let e = Number(r.OTEL_TRACES_SAMPLER_ARG);
        return isNaN(e) ? (Dn.diag.error(`OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${At}.`), At) : e < 0 || e > 1 ? (Dn.diag.error(`OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${At}.`), At) : e;
    }
});
var Bs = c((Rt)=>{
    "use strict";
    Object.defineProperty(Rt, "__esModule", {
        value: !0
    });
    Rt.reconfigureLimits = Rt.mergeConfig = void 0;
    var wl = Ds(), Us = T();
    function Sm(r) {
        let e = {
            sampler: (0, wl.buildSamplerFromEnv)()
        }, t = (0, wl.loadDefaultConfig)(), n = Object.assign({}, t, e, r);
        return n.generalLimits = Object.assign({}, t.generalLimits, r.generalLimits || {}), n.spanLimits = Object.assign({}, t.spanLimits, r.spanLimits || {}), n;
    }
    Rt.mergeConfig = Sm;
    function Am(r) {
        var e, t, n, i, o, s, a, u, l, _, E, O;
        let x = Object.assign({}, r.spanLimits), J = (0, Us.getEnvWithoutDefaults)();
        return x.attributeCountLimit = (s = (o = (i = (t = (e = r.spanLimits) === null || e === void 0 ? void 0 : e.attributeCountLimit) !== null && t !== void 0 ? t : (n = r.generalLimits) === null || n === void 0 ? void 0 : n.attributeCountLimit) !== null && i !== void 0 ? i : J.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && o !== void 0 ? o : J.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && s !== void 0 ? s : Us.DEFAULT_ATTRIBUTE_COUNT_LIMIT, x.attributeValueLengthLimit = (O = (E = (_ = (u = (a = r.spanLimits) === null || a === void 0 ? void 0 : a.attributeValueLengthLimit) !== null && u !== void 0 ? u : (l = r.generalLimits) === null || l === void 0 ? void 0 : l.attributeValueLengthLimit) !== null && _ !== void 0 ? _ : J.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && E !== void 0 ? E : J.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && O !== void 0 ? O : Us.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT, Object.assign({}, r, {
            spanLimits: x
        });
    }
    Rt.reconfigureLimits = Am;
});
var xl = c((Un)=>{
    "use strict";
    Object.defineProperty(Un, "__esModule", {
        value: !0
    });
    Un.BatchSpanProcessorBase = void 0;
    var bt = (p(), f(d)), Ze = T(), qs = class {
        constructor(e, t){
            this._exporter = e, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
            let n = (0, Ze.getEnv)();
            this._maxExportBatchSize = typeof t?.maxExportBatchSize == "number" ? t.maxExportBatchSize : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = typeof t?.maxQueueSize == "number" ? t.maxQueueSize : n.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = typeof t?.scheduledDelayMillis == "number" ? t.scheduledDelayMillis : n.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = typeof t?.exportTimeoutMillis == "number" ? t.exportTimeoutMillis : n.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new Ze.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (bt.diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize);
        }
        forceFlush() {
            return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
        }
        onStart(e, t) {}
        onEnd(e) {
            this._shutdownOnce.isCalled || e.spanContext().traceFlags & bt.TraceFlags.SAMPLED && this._addToBuffer(e);
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        _shutdown() {
            return Promise.resolve().then(()=>this.onShutdown()).then(()=>this._flushAll()).then(()=>this._exporter.shutdown());
        }
        _addToBuffer(e) {
            if (this._finishedSpans.length >= this._maxQueueSize) {
                this._droppedSpansCount === 0 && bt.diag.debug("maxQueueSize reached, dropping spans"), this._droppedSpansCount++;
                return;
            }
            this._droppedSpansCount > 0 && (bt.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`), this._droppedSpansCount = 0), this._finishedSpans.push(e), this._maybeStartTimer();
        }
        _flushAll() {
            return new Promise((e, t)=>{
                let n = [], i = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
                for(let o = 0, s = i; o < s; o++)n.push(this._flushOneBatch());
                Promise.all(n).then(()=>{
                    e();
                }).catch(t);
            });
        }
        _flushOneBatch() {
            return this._clearTimer(), this._finishedSpans.length === 0 ? Promise.resolve() : new Promise((e, t)=>{
                let n = setTimeout(()=>{
                    t(new Error("Timeout"));
                }, this._exportTimeoutMillis);
                bt.context.with((0, Ze.suppressTracing)(bt.context.active()), ()=>{
                    let i = this._finishedSpans.splice(0, this._maxExportBatchSize), o = ()=>this._exporter.export(i, (a)=>{
                            var u;
                            clearTimeout(n), a.code === Ze.ExportResultCode.SUCCESS ? e() : t((u = a.error) !== null && u !== void 0 ? u : new Error("BatchSpanProcessor: span export failed"));
                        }), s = i.map((a)=>a.resource).filter((a)=>a.asyncAttributesPending);
                    s.length === 0 ? o() : Promise.all(s.map((a)=>{
                        var u;
                        return (u = a.waitForAsyncAttributes) === null || u === void 0 ? void 0 : u.call(a);
                    })).then(o, (a)=>{
                        (0, Ze.globalErrorHandler)(a), t(a);
                    });
                });
            });
        }
        _maybeStartTimer() {
            if (this._isExporting) return;
            let e = ()=>{
                this._isExporting = !0, this._flushOneBatch().then(()=>{
                    this._isExporting = !1, this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer());
                }).catch((t)=>{
                    this._isExporting = !1, (0, Ze.globalErrorHandler)(t);
                });
            };
            if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
            this._timer === void 0 && (this._timer = setTimeout(()=>e(), this._scheduledDelayMillis), (0, Ze.unrefTimer)(this._timer));
        }
        _clearTimer() {
            this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0);
        }
    };
    Un.BatchSpanProcessorBase = qs;
});
var Dl = c((Bn)=>{
    "use strict";
    Object.defineProperty(Bn, "__esModule", {
        value: !0
    });
    Bn.BatchSpanProcessor = void 0;
    var Om = xl(), Gs = class extends Om.BatchSpanProcessorBase {
        onShutdown() {}
    };
    Bn.BatchSpanProcessor = Gs;
});
var ql = c((Gn)=>{
    "use strict";
    Object.defineProperty(Gn, "__esModule", {
        value: !0
    });
    Gn.RandomIdGenerator = void 0;
    var Rm = 8, Bl = 16, Vs = class {
        constructor(){
            this.generateTraceId = Ul(Bl), this.generateSpanId = Ul(Rm);
        }
    };
    Gn.RandomIdGenerator = Vs;
    var qn = Buffer.allocUnsafe(Bl);
    function Ul(r) {
        return function() {
            for(let t = 0; t < r / 4; t++)qn.writeUInt32BE(Math.random() * 2 ** 32 >>> 0, t * 4);
            for(let t = 0; t < r && !(qn[t] > 0); t++)t === r - 1 && (qn[r - 1] = 1);
            return qn.toString("hex", 0, r);
        };
    }
});
var Vl = c((Ne)=>{
    "use strict";
    var bm = Ne && Ne.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Gl = Ne && Ne.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && bm(e, r, t);
    };
    Object.defineProperty(Ne, "__esModule", {
        value: !0
    });
    Gl(Dl(), Ne);
    Gl(ql(), Ne);
});
var Vn = c((Je)=>{
    "use strict";
    var Pm = Je && Je.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), ym = Je && Je.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Pm(e, r, t);
    };
    Object.defineProperty(Je, "__esModule", {
        value: !0
    });
    ym(Vl(), Je);
});
var jl = c((Fn)=>{
    "use strict";
    Object.defineProperty(Fn, "__esModule", {
        value: !0
    });
    Fn.Tracer = void 0;
    var H = (p(), f(d)), jn = T(), vm = Ps(), Im = Bs(), Lm = Vn(), js = class {
        constructor(e, t, n){
            this._tracerProvider = n;
            let i = (0, Im.mergeConfig)(t);
            this._sampler = i.sampler, this._generalLimits = i.generalLimits, this._spanLimits = i.spanLimits, this._idGenerator = t.idGenerator || new Lm.RandomIdGenerator, this.resource = n.resource, this.instrumentationLibrary = e;
        }
        startSpan(e, t = {}, n = H.context.active()) {
            var i, o, s;
            t.root && (n = H.trace.deleteSpan(n));
            let a = H.trace.getSpan(n);
            if ((0, jn.isTracingSuppressed)(n)) return H.diag.debug("Instrumentation suppressed, returning Noop Span"), H.trace.wrapSpanContext(H.INVALID_SPAN_CONTEXT);
            let u = a?.spanContext(), l = this._idGenerator.generateSpanId(), _, E, O;
            !u || !H.trace.isSpanContextValid(u) ? _ = this._idGenerator.generateTraceId() : (_ = u.traceId, E = u.traceState, O = u.spanId);
            let x = (i = t.kind) !== null && i !== void 0 ? i : H.SpanKind.INTERNAL, J = ((o = t.links) !== null && o !== void 0 ? o : []).map((ht)=>({
                    context: ht.context,
                    attributes: (0, jn.sanitizeAttributes)(ht.attributes)
                })), y = (0, jn.sanitizeAttributes)(t.attributes), k = this._sampler.shouldSample(n, _, e, x, y, J);
            E = (s = k.traceState) !== null && s !== void 0 ? s : E;
            let S = k.decision === H.SamplingDecision.RECORD_AND_SAMPLED ? H.TraceFlags.SAMPLED : H.TraceFlags.NONE, b = {
                traceId: _,
                spanId: l,
                traceFlags: S,
                traceState: E
            };
            if (k.decision === H.SamplingDecision.NOT_RECORD) return H.diag.debug("Recording is off, propagating context in a non-recording span"), H.trace.wrapSpanContext(b);
            let ye = (0, jn.sanitizeAttributes)(Object.assign(y, k.attributes));
            return new vm.Span(this, n, e, b, x, O, J, t.startTime, void 0, ye);
        }
        startActiveSpan(e, t, n, i) {
            let o, s, a;
            if (arguments.length < 2) return;
            arguments.length === 2 ? a = t : arguments.length === 3 ? (o = t, a = n) : (o = t, s = n, a = i);
            let u = s ?? H.context.active(), l = this.startSpan(e, o, u), _ = H.trace.setSpan(u, l);
            return H.context.with(_, a, void 0, l);
        }
        getGeneralLimits() {
            return this._generalLimits;
        }
        getSpanLimits() {
            return this._spanLimits;
        }
        getActiveSpanProcessor() {
            return this._tracerProvider.getActiveSpanProcessor();
        }
    };
    Fn.Tracer = js;
});
var Fl = c((Hn)=>{
    "use strict";
    Object.defineProperty(Hn, "__esModule", {
        value: !0
    });
    Hn.defaultServiceName = void 0;
    function Mm() {
        return `unknown_service:${process.argv0}`;
    }
    Hn.defaultServiceName = Mm;
});
var Fs = c((Pt)=>{
    "use strict";
    Object.defineProperty(Pt, "__esModule", {
        value: !0
    });
    Pt.normalizeType = Pt.normalizeArch = void 0;
    var Cm = (r)=>{
        switch(r){
            case "arm":
                return "arm32";
            case "ppc":
                return "ppc32";
            case "x64":
                return "amd64";
            default:
                return r;
        }
    };
    Pt.normalizeArch = Cm;
    var Nm = (r)=>{
        switch(r){
            case "sunos":
                return "solaris";
            case "win32":
                return "windows";
            default:
                return r;
        }
    };
    Pt.normalizeType = Nm;
});
var $n = c((kn)=>{
    "use strict";
    Object.defineProperty(kn, "__esModule", {
        value: !0
    });
    kn.execAsync = void 0;
    var wm = ee("child_process"), xm = ee("util");
    kn.execAsync = xm.promisify(wm.exec);
});
var Hl = c((Xn)=>{
    "use strict";
    Object.defineProperty(Xn, "__esModule", {
        value: !0
    });
    Xn.getMachineId = void 0;
    var Dm = $n(), Um = (p(), f(d));
    async function Bm() {
        try {
            let e = (await (0, Dm.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((n)=>n.includes("IOPlatformUUID"));
            if (!e) return "";
            let t = e.split('" = "');
            if (t.length === 2) return t[1].slice(0, -1);
        } catch (r) {
            Um.diag.debug(`error reading machine id: ${r}`);
        }
        return "";
    }
    Xn.getMachineId = Bm;
});
var kl = c((Wn)=>{
    "use strict";
    Object.defineProperty(Wn, "__esModule", {
        value: !0
    });
    Wn.getMachineId = void 0;
    var qm = ee("fs"), Gm = (p(), f(d));
    async function Vm() {
        let r = [
            "/etc/machine-id",
            "/var/lib/dbus/machine-id"
        ];
        for (let e of r)try {
            return (await qm.promises.readFile(e, {
                encoding: "utf8"
            })).trim();
        } catch (t) {
            Gm.diag.debug(`error reading machine id: ${t}`);
        }
        return "";
    }
    Wn.getMachineId = Vm;
});
var Xl = c((Kn)=>{
    "use strict";
    Object.defineProperty(Kn, "__esModule", {
        value: !0
    });
    Kn.getMachineId = void 0;
    var jm = ee("fs"), Fm = $n(), $l = (p(), f(d));
    async function Hm() {
        try {
            return (await jm.promises.readFile("/etc/hostid", {
                encoding: "utf8"
            })).trim();
        } catch (r) {
            $l.diag.debug(`error reading machine id: ${r}`);
        }
        try {
            return (await (0, Fm.execAsync)("kenv -q smbios.system.uuid")).stdout.trim();
        } catch (r) {
            $l.diag.debug(`error reading machine id: ${r}`);
        }
        return "";
    }
    Kn.getMachineId = Hm;
});
var Kl = c((zn)=>{
    "use strict";
    Object.defineProperty(zn, "__esModule", {
        value: !0
    });
    zn.getMachineId = void 0;
    var Wl = ee("process"), km = $n(), $m = (p(), f(d));
    async function Xm() {
        let r = "QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid", e = "%windir%\\System32\\REG.exe";
        Wl.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in Wl.env && (e = "%windir%\\sysnative\\cmd.exe /c " + e);
        try {
            let n = (await (0, km.execAsync)(`${e} ${r}`)).stdout.split("REG_SZ");
            if (n.length === 2) return n[1].trim();
        } catch (t) {
            $m.diag.debug(`error reading machine id: ${t}`);
        }
        return "";
    }
    zn.getMachineId = Xm;
});
var zl = c((Yn)=>{
    "use strict";
    Object.defineProperty(Yn, "__esModule", {
        value: !0
    });
    Yn.getMachineId = void 0;
    var Wm = (p(), f(d));
    async function Km() {
        return Wm.diag.debug("could not read machine-id: unsupported platform"), "";
    }
    Yn.getMachineId = Km;
});
var Yl = c((Ae)=>{
    "use strict";
    Object.defineProperty(Ae, "__esModule", {
        value: !0
    });
    Ae.getMachineId = void 0;
    var zm = ee("process"), yt;
    Ae.getMachineId = yt;
    switch(zm.platform){
        case "darwin":
            Ae.getMachineId = yt = Hl().getMachineId;
            break;
        case "linux":
            Ae.getMachineId = yt = kl().getMachineId;
            break;
        case "freebsd":
            Ae.getMachineId = yt = Xl().getMachineId;
            break;
        case "win32":
            Ae.getMachineId = yt = Kl().getMachineId;
            break;
        default:
            Ae.getMachineId = yt = zl().getMachineId;
    }
});
var $s = c((Qn)=>{
    "use strict";
    Object.defineProperty(Qn, "__esModule", {
        value: !0
    });
    Qn.hostDetectorSync = void 0;
    var Hs = oe(), Ym = et(), Ql = ee("os"), Qm = Fs(), Zm = Yl(), ks = class {
        detect(e) {
            let t = {
                [Hs.SemanticResourceAttributes.HOST_NAME]: (0, Ql.hostname)(),
                [Hs.SemanticResourceAttributes.HOST_ARCH]: (0, Qm.normalizeArch)((0, Ql.arch)())
            };
            return new Ym.Resource(t, this._getAsyncAttributes());
        }
        _getAsyncAttributes() {
            return (0, Zm.getMachineId)().then((e)=>{
                let t = {};
                return e && (t[Hs.SemanticResourceAttributes.HOST_ID] = e), t;
            });
        }
    };
    Qn.hostDetectorSync = new ks;
});
var Zl = c((Zn)=>{
    "use strict";
    Object.defineProperty(Zn, "__esModule", {
        value: !0
    });
    Zn.hostDetector = void 0;
    var Jm = $s(), Xs = class {
        detect(e) {
            return Promise.resolve(Jm.hostDetectorSync.detect(e));
        }
    };
    Zn.hostDetector = new Xs;
});
var Ks = c((Jn)=>{
    "use strict";
    Object.defineProperty(Jn, "__esModule", {
        value: !0
    });
    Jn.osDetectorSync = void 0;
    var Jl = oe(), eg = et(), ed = ee("os"), tg = Fs(), Ws = class {
        detect(e) {
            let t = {
                [Jl.SemanticResourceAttributes.OS_TYPE]: (0, tg.normalizeType)((0, ed.platform)()),
                [Jl.SemanticResourceAttributes.OS_VERSION]: (0, ed.release)()
            };
            return new eg.Resource(t);
        }
    };
    Jn.osDetectorSync = new Ws;
});
var td = c((ei)=>{
    "use strict";
    Object.defineProperty(ei, "__esModule", {
        value: !0
    });
    ei.osDetector = void 0;
    var rg = Ks(), zs = class {
        detect(e) {
            return Promise.resolve(rg.osDetectorSync.detect(e));
        }
    };
    ei.osDetector = new zs;
});
var Qs = c((ti)=>{
    "use strict";
    Object.defineProperty(ti, "__esModule", {
        value: !0
    });
    ti.processDetectorSync = void 0;
    var ng = (p(), f(d)), Oe = oe(), ig = et(), og = ee("os"), Ys = class {
        detect(e) {
            let t = {
                [Oe.SemanticResourceAttributes.PROCESS_PID]: process.pid,
                [Oe.SemanticResourceAttributes.PROCESS_EXECUTABLE_NAME]: process.title,
                [Oe.SemanticResourceAttributes.PROCESS_EXECUTABLE_PATH]: process.execPath,
                [Oe.SemanticResourceAttributes.PROCESS_COMMAND_ARGS]: [
                    process.argv[0],
                    ...process.execArgv,
                    ...process.argv.slice(1)
                ],
                [Oe.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION]: process.versions.node,
                [Oe.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: "nodejs",
                [Oe.SemanticResourceAttributes.PROCESS_RUNTIME_DESCRIPTION]: "Node.js"
            };
            process.argv.length > 1 && (t[Oe.SemanticResourceAttributes.PROCESS_COMMAND] = process.argv[1]);
            try {
                let n = og.userInfo();
                t[Oe.SemanticResourceAttributes.PROCESS_OWNER] = n.username;
            } catch (n) {
                ng.diag.debug(`error obtaining process owner: ${n}`);
            }
            return new ig.Resource(t);
        }
    };
    ti.processDetectorSync = new Ys;
});
var rd = c((ri)=>{
    "use strict";
    Object.defineProperty(ri, "__esModule", {
        value: !0
    });
    ri.processDetector = void 0;
    var sg = Qs(), Zs = class {
        detect(e) {
            return Promise.resolve(sg.processDetectorSync.detect(e));
        }
    };
    ri.processDetector = new Zs;
});
var nd = c((re)=>{
    "use strict";
    var ag = re && re.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), tt = re && re.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && ag(e, r, t);
    };
    Object.defineProperty(re, "__esModule", {
        value: !0
    });
    tt(Fl(), re);
    tt(Zl(), re);
    tt(td(), re);
    tt($s(), re);
    tt(Ks(), re);
    tt(rd(), re);
    tt(Qs(), re);
});
var Js = c((rt)=>{
    "use strict";
    var ug = rt && rt.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), cg = rt && rt.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && ug(e, r, t);
    };
    Object.defineProperty(rt, "__esModule", {
        value: !0
    });
    cg(nd(), rt);
});
var et = c((ni)=>{
    "use strict";
    Object.defineProperty(ni, "__esModule", {
        value: !0
    });
    ni.Resource = void 0;
    var id = (p(), f(d)), nt = oe(), ea = T(), lg = Js(), Sr = class r {
        constructor(e, t){
            var n;
            this._attributes = e, this.asyncAttributesPending = t != null, this._syncAttributes = (n = this._attributes) !== null && n !== void 0 ? n : {}, this._asyncAttributesPromise = t?.then((i)=>(this._attributes = Object.assign({}, this._attributes, i), this.asyncAttributesPending = !1, i), (i)=>(id.diag.debug("a resource's async attributes promise rejected: %s", i), this.asyncAttributesPending = !1, {}));
        }
        static empty() {
            return r.EMPTY;
        }
        static default() {
            return new r({
                [nt.SemanticResourceAttributes.SERVICE_NAME]: (0, lg.defaultServiceName)(),
                [nt.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE]: ea.SDK_INFO[nt.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE],
                [nt.SemanticResourceAttributes.TELEMETRY_SDK_NAME]: ea.SDK_INFO[nt.SemanticResourceAttributes.TELEMETRY_SDK_NAME],
                [nt.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]: ea.SDK_INFO[nt.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]
            });
        }
        get attributes() {
            var e;
            return this.asyncAttributesPending && id.diag.error("Accessing resource attributes before async attributes settled"), (e = this._attributes) !== null && e !== void 0 ? e : {};
        }
        async waitForAsyncAttributes() {
            this.asyncAttributesPending && await this._asyncAttributesPromise;
        }
        merge(e) {
            var t;
            if (!e) return this;
            let n = Object.assign(Object.assign({}, this._syncAttributes), (t = e._syncAttributes) !== null && t !== void 0 ? t : e.attributes);
            if (!this._asyncAttributesPromise && !e._asyncAttributesPromise) return new r(n);
            let i = Promise.all([
                this._asyncAttributesPromise,
                e._asyncAttributesPromise
            ]).then(([o, s])=>{
                var a;
                return Object.assign(Object.assign(Object.assign(Object.assign({}, this._syncAttributes), o), (a = e._syncAttributes) !== null && a !== void 0 ? a : e.attributes), s);
            });
            return new r(n, i);
        }
    };
    ni.Resource = Sr;
    Sr.EMPTY = new Sr({});
});
var sd = c((od)=>{
    "use strict";
    Object.defineProperty(od, "__esModule", {
        value: !0
    });
});
var ud = c((ad)=>{
    "use strict";
    Object.defineProperty(ad, "__esModule", {
        value: !0
    });
});
var ld = c((cd)=>{
    "use strict";
    Object.defineProperty(cd, "__esModule", {
        value: !0
    });
});
var dd = c((ii)=>{
    "use strict";
    Object.defineProperty(ii, "__esModule", {
        value: !0
    });
    ii.browserDetector = void 0;
    var dg = it(), ta = class {
        detect(e) {
            return Promise.resolve(dg.browserDetectorSync.detect(e));
        }
    };
    ii.browserDetector = new ta;
});
var na = c((oi)=>{
    "use strict";
    Object.defineProperty(oi, "__esModule", {
        value: !0
    });
    oi.envDetectorSync = void 0;
    var _g = (p(), f(d)), pg = T(), hg = oe(), fg = et(), ra = class {
        constructor(){
            this._MAX_LENGTH = 255, this._COMMA_SEPARATOR = ",", this._LABEL_KEY_VALUE_SPLITTER = "=", this._ERROR_MESSAGE_INVALID_CHARS = "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.", this._ERROR_MESSAGE_INVALID_VALUE = "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters.";
        }
        detect(e) {
            let t = {}, n = (0, pg.getEnv)(), i = n.OTEL_RESOURCE_ATTRIBUTES, o = n.OTEL_SERVICE_NAME;
            if (i) try {
                let s = this._parseResourceAttributes(i);
                Object.assign(t, s);
            } catch (s) {
                _g.diag.debug(`EnvDetector failed: ${s.message}`);
            }
            return o && (t[hg.SemanticResourceAttributes.SERVICE_NAME] = o), new fg.Resource(t);
        }
        _parseResourceAttributes(e) {
            if (!e) return {};
            let t = {}, n = e.split(this._COMMA_SEPARATOR, -1);
            for (let i of n){
                let o = i.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
                if (o.length !== 2) continue;
                let [s, a] = o;
                if (s = s.trim(), a = a.trim().split(/^"|"$/).join(""), !this._isValidAndNotEmpty(s)) throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
                if (!this._isValid(a)) throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
                t[s] = decodeURIComponent(a);
            }
            return t;
        }
        _isValid(e) {
            return e.length <= this._MAX_LENGTH && this._isBaggageOctetString(e);
        }
        _isBaggageOctetString(e) {
            for(let t = 0; t < e.length; t++){
                let n = e.charCodeAt(t);
                if (n < 33 || n === 44 || n === 59 || n === 92 || n > 126) return !1;
            }
            return !0;
        }
        _isValidAndNotEmpty(e) {
            return e.length > 0 && this._isValid(e);
        }
    };
    oi.envDetectorSync = new ra;
});
var _d = c((si)=>{
    "use strict";
    Object.defineProperty(si, "__esModule", {
        value: !0
    });
    si.envDetector = void 0;
    var Eg = na(), ia = class {
        detect(e) {
            return Promise.resolve(Eg.envDetectorSync.detect(e));
        }
    };
    si.envDetector = new ia;
});
var pd = c((ui)=>{
    "use strict";
    Object.defineProperty(ui, "__esModule", {
        value: !0
    });
    ui.browserDetectorSync = void 0;
    var ai = oe(), oa = it(), mg = (p(), f(d)), sa = class {
        detect(e) {
            if (!(typeof navigator < "u")) return oa.Resource.empty();
            let n = {
                [ai.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: "browser",
                [ai.SemanticResourceAttributes.PROCESS_RUNTIME_DESCRIPTION]: "Web Browser",
                [ai.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION]: navigator.userAgent
            };
            return this._getResourceAttributes(n, e);
        }
        _getResourceAttributes(e, t) {
            return e[ai.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION] === "" ? (mg.diag.debug("BrowserDetector failed: Unable to find required browser resources. "), oa.Resource.empty()) : new oa.Resource(Object.assign({}, e));
        }
    };
    ui.browserDetectorSync = new sa;
});
var hd = c((Ee)=>{
    "use strict";
    var gg = Ee && Ee.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), ci = Ee && Ee.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && gg(e, r, t);
    };
    Object.defineProperty(Ee, "__esModule", {
        value: !0
    });
    ci(dd(), Ee);
    ci(_d(), Ee);
    ci(pd(), Ee);
    ci(na(), Ee);
});
var fd = c((li)=>{
    "use strict";
    Object.defineProperty(li, "__esModule", {
        value: !0
    });
    li.isPromiseLike = void 0;
    var Tg = (r)=>r !== null && typeof r == "object" && typeof r.then == "function";
    li.isPromiseLike = Tg;
});
var md = c((It)=>{
    "use strict";
    Object.defineProperty(It, "__esModule", {
        value: !0
    });
    It.detectResourcesSync = It.detectResources = void 0;
    var Ar = et(), vt = (p(), f(d)), Sg = fd(), Ag = async (r = {})=>{
        let e = await Promise.all((r.detectors || []).map(async (t)=>{
            try {
                let n = await t.detect(r);
                return vt.diag.debug(`${t.constructor.name} found resource.`, n), n;
            } catch (n) {
                return vt.diag.debug(`${t.constructor.name} failed: ${n.message}`), Ar.Resource.empty();
            }
        }));
        return Ed(e), e.reduce((t, n)=>t.merge(n), Ar.Resource.empty());
    };
    It.detectResources = Ag;
    var Og = (r = {})=>{
        var e;
        let t = ((e = r.detectors) !== null && e !== void 0 ? e : []).map((i)=>{
            try {
                let o = i.detect(r), s;
                if ((0, Sg.isPromiseLike)(o)) {
                    let a = async ()=>(await o).attributes;
                    s = new Ar.Resource({}, a());
                } else s = o;
                return s.waitForAsyncAttributes ? s.waitForAsyncAttributes().then(()=>vt.diag.debug(`${i.constructor.name} found resource.`, s)) : vt.diag.debug(`${i.constructor.name} found resource.`, s), s;
            } catch (o) {
                return vt.diag.error(`${i.constructor.name} failed: ${o.message}`), Ar.Resource.empty();
            }
        }), n = t.reduce((i, o)=>i.merge(o), Ar.Resource.empty());
        return n.waitForAsyncAttributes && n.waitForAsyncAttributes().then(()=>{
            Ed(t);
        }), n;
    };
    It.detectResourcesSync = Og;
    var Ed = (r)=>{
        r.forEach((e)=>{
            if (Object.keys(e.attributes).length > 0) {
                let t = JSON.stringify(e.attributes, null, 4);
                vt.diag.verbose(t);
            }
        });
    };
});
var it = c((ne)=>{
    "use strict";
    var Rg = ne && ne.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), ot = ne && ne.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Rg(e, r, t);
    };
    Object.defineProperty(ne, "__esModule", {
        value: !0
    });
    ot(et(), ne);
    ot(sd(), ne);
    ot(Js(), ne);
    ot(ud(), ne);
    ot(ld(), ne);
    ot(hd(), ne);
    ot(md(), ne);
});
var gd = c((di)=>{
    "use strict";
    Object.defineProperty(di, "__esModule", {
        value: !0
    });
    di.MultiSpanProcessor = void 0;
    var bg = T(), aa = class {
        constructor(e){
            this._spanProcessors = e;
        }
        forceFlush() {
            let e = [];
            for (let t of this._spanProcessors)e.push(t.forceFlush());
            return new Promise((t)=>{
                Promise.all(e).then(()=>{
                    t();
                }).catch((n)=>{
                    (0, bg.globalErrorHandler)(n || new Error("MultiSpanProcessor: forceFlush failed")), t();
                });
            });
        }
        onStart(e, t) {
            for (let n of this._spanProcessors)n.onStart(e, t);
        }
        onEnd(e) {
            for (let t of this._spanProcessors)t.onEnd(e);
        }
        shutdown() {
            let e = [];
            for (let t of this._spanProcessors)e.push(t.shutdown());
            return new Promise((t, n)=>{
                Promise.all(e).then(()=>{
                    t();
                }, n);
            });
        }
    };
    di.MultiSpanProcessor = aa;
});
var ca = c((_i)=>{
    "use strict";
    Object.defineProperty(_i, "__esModule", {
        value: !0
    });
    _i.NoopSpanProcessor = void 0;
    var ua = class {
        onStart(e, t) {}
        onEnd(e) {}
        shutdown() {
            return Promise.resolve();
        }
        forceFlush() {
            return Promise.resolve();
        }
    };
    _i.NoopSpanProcessor = ua;
});
var Sd = c((st)=>{
    "use strict";
    Object.defineProperty(st, "__esModule", {
        value: !0
    });
    st.BasicTracerProvider = st.ForceFlushState = void 0;
    var Lt = (p(), f(d)), Ct = T(), Td = it(), Pg = la(), yg = Ds(), vg = gd(), Ig = ca(), Lg = Vn(), Mg = Bs(), Mt;
    (function(r) {
        r[r.resolved = 0] = "resolved", r[r.timeout = 1] = "timeout", r[r.error = 2] = "error", r[r.unresolved = 3] = "unresolved";
    })(Mt = st.ForceFlushState || (st.ForceFlushState = {}));
    var Or = class {
        constructor(e = {}){
            var t;
            this._registeredSpanProcessors = [], this._tracers = new Map;
            let n = (0, Ct.merge)({}, (0, yg.loadDefaultConfig)(), (0, Mg.reconfigureLimits)(e));
            this.resource = (t = n.resource) !== null && t !== void 0 ? t : Td.Resource.empty(), this.resource = Td.Resource.default().merge(this.resource), this._config = Object.assign({}, n, {
                resource: this.resource
            });
            let i = this._buildExporterFromEnv();
            if (i !== void 0) {
                let o = new Lg.BatchSpanProcessor(i);
                this.activeSpanProcessor = o;
            } else this.activeSpanProcessor = new Ig.NoopSpanProcessor;
        }
        getTracer(e, t, n) {
            let i = `${e}@${t || ""}:${n?.schemaUrl || ""}`;
            return this._tracers.has(i) || this._tracers.set(i, new Pg.Tracer({
                name: e,
                version: t,
                schemaUrl: n?.schemaUrl
            }, this._config, this)), this._tracers.get(i);
        }
        addSpanProcessor(e) {
            this._registeredSpanProcessors.length === 0 && this.activeSpanProcessor.shutdown().catch((t)=>Lt.diag.error("Error while trying to shutdown current span processor", t)), this._registeredSpanProcessors.push(e), this.activeSpanProcessor = new vg.MultiSpanProcessor(this._registeredSpanProcessors);
        }
        getActiveSpanProcessor() {
            return this.activeSpanProcessor;
        }
        register(e = {}) {
            Lt.trace.setGlobalTracerProvider(this), e.propagator === void 0 && (e.propagator = this._buildPropagatorFromEnv()), e.contextManager && Lt.context.setGlobalContextManager(e.contextManager), e.propagator && Lt.propagation.setGlobalPropagator(e.propagator);
        }
        forceFlush() {
            let e = this._config.forceFlushTimeoutMillis, t = this._registeredSpanProcessors.map((n)=>new Promise((i)=>{
                    let o, s = setTimeout(()=>{
                        i(new Error(`Span processor did not completed within timeout period of ${e} ms`)), o = Mt.timeout;
                    }, e);
                    n.forceFlush().then(()=>{
                        clearTimeout(s), o !== Mt.timeout && (o = Mt.resolved, i(o));
                    }).catch((a)=>{
                        clearTimeout(s), o = Mt.error, i(a);
                    });
                }));
            return new Promise((n, i)=>{
                Promise.all(t).then((o)=>{
                    let s = o.filter((a)=>a !== Mt.resolved);
                    s.length > 0 ? i(s) : n();
                }).catch((o)=>i([
                        o
                    ]));
            });
        }
        shutdown() {
            return this.activeSpanProcessor.shutdown();
        }
        _getPropagator(e) {
            var t;
            return (t = this.constructor._registeredPropagators.get(e)) === null || t === void 0 ? void 0 : t();
        }
        _getSpanExporter(e) {
            var t;
            return (t = this.constructor._registeredExporters.get(e)) === null || t === void 0 ? void 0 : t();
        }
        _buildPropagatorFromEnv() {
            let e = Array.from(new Set((0, Ct.getEnv)().OTEL_PROPAGATORS)), n = e.map((i)=>{
                let o = this._getPropagator(i);
                return o || Lt.diag.warn(`Propagator "${i}" requested through environment variable is unavailable.`), o;
            }).reduce((i, o)=>(o && i.push(o), i), []);
            if (n.length !== 0) return e.length === 1 ? n[0] : new Ct.CompositePropagator({
                propagators: n
            });
        }
        _buildExporterFromEnv() {
            let e = (0, Ct.getEnv)().OTEL_TRACES_EXPORTER;
            if (e === "none" || e === "") return;
            let t = this._getSpanExporter(e);
            return t || Lt.diag.error(`Exporter "${e}" requested through environment variable is unavailable.`), t;
        }
    };
    st.BasicTracerProvider = Or;
    Or._registeredPropagators = new Map([
        [
            "tracecontext",
            ()=>new Ct.W3CTraceContextPropagator
        ],
        [
            "baggage",
            ()=>new Ct.W3CBaggagePropagator
        ]
    ]);
    Or._registeredExporters = new Map;
});
var Ad = c((pi)=>{
    "use strict";
    Object.defineProperty(pi, "__esModule", {
        value: !0
    });
    pi.ConsoleSpanExporter = void 0;
    var da = T(), _a = class {
        export(e, t) {
            return this._sendSpans(e, t);
        }
        shutdown() {
            return this._sendSpans([]), this.forceFlush();
        }
        forceFlush() {
            return Promise.resolve();
        }
        _exportInfo(e) {
            var t;
            return {
                traceId: e.spanContext().traceId,
                parentId: e.parentSpanId,
                traceState: (t = e.spanContext().traceState) === null || t === void 0 ? void 0 : t.serialize(),
                name: e.name,
                id: e.spanContext().spanId,
                kind: e.kind,
                timestamp: (0, da.hrTimeToMicroseconds)(e.startTime),
                duration: (0, da.hrTimeToMicroseconds)(e.duration),
                attributes: e.attributes,
                status: e.status,
                events: e.events,
                links: e.links
            };
        }
        _sendSpans(e, t) {
            for (let n of e)console.dir(this._exportInfo(n), {
                depth: 3
            });
            if (t) return t({
                code: da.ExportResultCode.SUCCESS
            });
        }
    };
    pi.ConsoleSpanExporter = _a;
});
var Rd = c((hi)=>{
    "use strict";
    Object.defineProperty(hi, "__esModule", {
        value: !0
    });
    hi.InMemorySpanExporter = void 0;
    var Od = T(), pa = class {
        constructor(){
            this._finishedSpans = [], this._stopped = !1;
        }
        export(e, t) {
            if (this._stopped) return t({
                code: Od.ExportResultCode.FAILED,
                error: new Error("Exporter has been stopped")
            });
            this._finishedSpans.push(...e), setTimeout(()=>t({
                    code: Od.ExportResultCode.SUCCESS
                }), 0);
        }
        shutdown() {
            return this._stopped = !0, this._finishedSpans = [], this.forceFlush();
        }
        forceFlush() {
            return Promise.resolve();
        }
        reset() {
            this._finishedSpans = [];
        }
        getFinishedSpans() {
            return this._finishedSpans;
        }
    };
    hi.InMemorySpanExporter = pa;
});
var Pd = c((bd)=>{
    "use strict";
    Object.defineProperty(bd, "__esModule", {
        value: !0
    });
});
var yd = c((fi)=>{
    "use strict";
    Object.defineProperty(fi, "__esModule", {
        value: !0
    });
    fi.SimpleSpanProcessor = void 0;
    var Cg = (p(), f(d)), Nt = T(), ha = class {
        constructor(e){
            this._exporter = e, this._shutdownOnce = new Nt.BindOnceFuture(this._shutdown, this), this._unresolvedExports = new Set;
        }
        async forceFlush() {
            await Promise.all(Array.from(this._unresolvedExports)), this._exporter.forceFlush && await this._exporter.forceFlush();
        }
        onStart(e, t) {}
        onEnd(e) {
            var t, n;
            if (this._shutdownOnce.isCalled || !(e.spanContext().traceFlags & Cg.TraceFlags.SAMPLED)) return;
            let i = ()=>Nt.internal._export(this._exporter, [
                    e
                ]).then((o)=>{
                    var s;
                    o.code !== Nt.ExportResultCode.SUCCESS && (0, Nt.globalErrorHandler)((s = o.error) !== null && s !== void 0 ? s : new Error(`SimpleSpanProcessor: span export failed (status ${o})`));
                }).catch((o)=>{
                    (0, Nt.globalErrorHandler)(o);
                });
            if (e.resource.asyncAttributesPending) {
                let o = (n = (t = e.resource).waitForAsyncAttributes) === null || n === void 0 ? void 0 : n.call(t).then(()=>(o != null && this._unresolvedExports.delete(o), i()), (s)=>(0, Nt.globalErrorHandler)(s));
                o != null && this._unresolvedExports.add(o);
            } else i();
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        _shutdown() {
            return this._exporter.shutdown();
        }
    };
    fi.SimpleSpanProcessor = ha;
});
var Id = c((vd)=>{
    "use strict";
    Object.defineProperty(vd, "__esModule", {
        value: !0
    });
});
var Md = c((Ld)=>{
    "use strict";
    Object.defineProperty(Ld, "__esModule", {
        value: !0
    });
});
var Nd = c((Cd)=>{
    "use strict";
    Object.defineProperty(Cd, "__esModule", {
        value: !0
    });
});
var xd = c((wd)=>{
    "use strict";
    Object.defineProperty(wd, "__esModule", {
        value: !0
    });
});
var Ud = c((Dd)=>{
    "use strict";
    Object.defineProperty(Dd, "__esModule", {
        value: !0
    });
});
var la = c((L)=>{
    "use strict";
    var Ng = L && L.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), U = L && L.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Ng(e, r, t);
    };
    Object.defineProperty(L, "__esModule", {
        value: !0
    });
    U(jl(), L);
    U(Sd(), L);
    U(Vn(), L);
    U(Ad(), L);
    U(Rd(), L);
    U(Pd(), L);
    U(yd(), L);
    U(Id(), L);
    U(ca(), L);
    U(Ln(), L);
    U(Cn(), L);
    U(Ms(), L);
    U(Ns(), L);
    U(Tr(), L);
    U(Ps(), L);
    U(Md(), L);
    U(Nd(), L);
    U(xd(), L);
    U(Ud(), L);
});
var at = {};
;
var fa = _c(()=>{
    Et(at, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$otel$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__);
});
var qd = c((we)=>{
    "use strict";
    Object.defineProperty(we, "__esModule", {
        value: !0
    });
    we.disableInstrumentations = we.enableInstrumentations = we.parseInstrumentationOptions = void 0;
    function Bd(r = []) {
        let e = [];
        for(let t = 0, n = r.length; t < n; t++){
            let i = r[t];
            if (Array.isArray(i)) {
                let o = Bd(i);
                e = e.concat(o.instrumentations);
            } else typeof i == "function" ? e.push(new i) : i.instrumentationName && e.push(i);
        }
        return {
            instrumentations: e
        };
    }
    we.parseInstrumentationOptions = Bd;
    function wg(r, e, t) {
        for(let n = 0, i = r.length; n < i; n++){
            let o = r[n];
            e && o.setTracerProvider(e), t && o.setMeterProvider(t), o.getConfig().enabled || o.enable();
        }
    }
    we.enableInstrumentations = wg;
    function xg(r) {
        r.forEach((e)=>e.disable());
    }
    we.disableInstrumentations = xg;
});
var Vd = c((Ei)=>{
    "use strict";
    Object.defineProperty(Ei, "__esModule", {
        value: !0
    });
    Ei.registerInstrumentations = void 0;
    var Gd = (p(), f(d)), Ea = qd();
    function Dg(r) {
        let { instrumentations: e } = (0, Ea.parseInstrumentationOptions)(r.instrumentations), t = r.tracerProvider || Gd.trace.getTracerProvider(), n = r.meterProvider || Gd.metrics.getMeterProvider();
        return (0, Ea.enableInstrumentations)(e, t, n), ()=>{
            (0, Ea.disableInstrumentations)(e);
        };
    }
    Ei.registerInstrumentations = Dg;
});
var ga = c((gi)=>{
    "use strict";
    Object.defineProperty(gi, "__esModule", {
        value: !0
    });
    gi.LogRecord = void 0;
    var Ug = (p(), f(d)), Rr = (p(), f(d)), mi = T(), ma = class {
        constructor(e, t, n){
            this.attributes = {}, this.totalAttributesCount = 0, this._isReadonly = !1;
            let { timestamp: i, observedTimestamp: o, severityNumber: s, severityText: a, body: u, attributes: l = {}, context: _ } = n, E = Date.now();
            if (this.hrTime = (0, mi.timeInputToHrTime)(i ?? E), this.hrTimeObserved = (0, mi.timeInputToHrTime)(o ?? E), _) {
                let O = Rr.trace.getSpanContext(_);
                O && Rr.isSpanContextValid(O) && (this.spanContext = O);
            }
            this.severityNumber = s, this.severityText = a, this.body = u, this.resource = e.resource, this.instrumentationScope = t, this._logRecordLimits = e.logRecordLimits, this.setAttributes(l);
        }
        set severityText(e) {
            this._isLogRecordReadonly() || (this._severityText = e);
        }
        get severityText() {
            return this._severityText;
        }
        set severityNumber(e) {
            this._isLogRecordReadonly() || (this._severityNumber = e);
        }
        get severityNumber() {
            return this._severityNumber;
        }
        set body(e) {
            this._isLogRecordReadonly() || (this._body = e);
        }
        get body() {
            return this._body;
        }
        get droppedAttributesCount() {
            return this.totalAttributesCount - Object.keys(this.attributes).length;
        }
        setAttribute(e, t) {
            return this._isLogRecordReadonly() ? this : t === null ? this : e.length === 0 ? (Rr.diag.warn(`Invalid attribute key: ${e}`), this) : !(0, mi.isAttributeValue)(t) && !(typeof t == "object" && !Array.isArray(t) && Object.keys(t).length > 0) ? (Rr.diag.warn(`Invalid attribute value set for key: ${e}`), this) : (this.totalAttributesCount += 1, Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, e) ? this : ((0, mi.isAttributeValue)(t) ? this.attributes[e] = this._truncateToSize(t) : this.attributes[e] = t, this));
        }
        setAttributes(e) {
            for (let [t, n] of Object.entries(e))this.setAttribute(t, n);
            return this;
        }
        setBody(e) {
            return this.body = e, this;
        }
        setSeverityNumber(e) {
            return this.severityNumber = e, this;
        }
        setSeverityText(e) {
            return this.severityText = e, this;
        }
        _makeReadonly() {
            this._isReadonly = !0;
        }
        _truncateToSize(e) {
            let t = this._logRecordLimits.attributeValueLengthLimit;
            return t <= 0 ? (Rr.diag.warn(`Attribute value limit must be positive, got ${t}`), e) : typeof e == "string" ? this._truncateToLimitUtil(e, t) : Array.isArray(e) ? e.map((n)=>typeof n == "string" ? this._truncateToLimitUtil(n, t) : n) : e;
        }
        _truncateToLimitUtil(e, t) {
            return e.length <= t ? e : e.substring(0, t);
        }
        _isLogRecordReadonly() {
            return this._isReadonly && Ug.diag.warn("Can not execute the operation on emitted log record"), this._isReadonly;
        }
    };
    gi.LogRecord = ma;
});
var jd = c((Ti)=>{
    "use strict";
    Object.defineProperty(Ti, "__esModule", {
        value: !0
    });
    Ti.Logger = void 0;
    var Bg = (p(), f(d)), qg = ga(), Ta = class {
        constructor(e, t){
            this.instrumentationScope = e, this._sharedState = t;
        }
        emit(e) {
            let t = e.context || Bg.context.active(), n = new qg.LogRecord(this._sharedState, this.instrumentationScope, Object.assign({
                context: t
            }, e));
            this._sharedState.activeProcessor.onEmit(n, t), n._makeReadonly();
        }
    };
    Ti.Logger = Ta;
});
var Fd = c((wt)=>{
    "use strict";
    Object.defineProperty(wt, "__esModule", {
        value: !0
    });
    wt.reconfigureLimits = wt.loadDefaultConfig = void 0;
    var br = T();
    function Gg() {
        return {
            forceFlushTimeoutMillis: 3e4,
            logRecordLimits: {
                attributeValueLengthLimit: (0, br.getEnv)().OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: (0, br.getEnv)().OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT
            },
            includeTraceContext: !0
        };
    }
    wt.loadDefaultConfig = Gg;
    function Vg(r) {
        var e, t, n, i, o, s;
        let a = (0, br.getEnvWithoutDefaults)();
        return {
            attributeCountLimit: (n = (t = (e = r.attributeCountLimit) !== null && e !== void 0 ? e : a.OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT) !== null && t !== void 0 ? t : a.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && n !== void 0 ? n : br.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
            attributeValueLengthLimit: (s = (o = (i = r.attributeValueLengthLimit) !== null && i !== void 0 ? i : a.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && o !== void 0 ? o : a.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && s !== void 0 ? s : br.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT
        };
    }
    wt.reconfigureLimits = Vg;
});
var Hd = c((Si)=>{
    "use strict";
    Object.defineProperty(Si, "__esModule", {
        value: !0
    });
    Si.MultiLogRecordProcessor = void 0;
    var jg = T(), Sa = class {
        constructor(e, t){
            this.processors = e, this.forceFlushTimeoutMillis = t;
        }
        async forceFlush() {
            let e = this.forceFlushTimeoutMillis;
            await Promise.all(this.processors.map((t)=>(0, jg.callWithTimeout)(t.forceFlush(), e)));
        }
        onEmit(e, t) {
            this.processors.forEach((n)=>n.onEmit(e, t));
        }
        async shutdown() {
            await Promise.all(this.processors.map((e)=>e.shutdown()));
        }
    };
    Si.MultiLogRecordProcessor = Sa;
});
var Oa = c((Ai)=>{
    "use strict";
    Object.defineProperty(Ai, "__esModule", {
        value: !0
    });
    Ai.NoopLogRecordProcessor = void 0;
    var Aa = class {
        forceFlush() {
            return Promise.resolve();
        }
        onEmit(e, t) {}
        shutdown() {
            return Promise.resolve();
        }
    };
    Ai.NoopLogRecordProcessor = Aa;
});
var kd = c((Oi)=>{
    "use strict";
    Object.defineProperty(Oi, "__esModule", {
        value: !0
    });
    Oi.LoggerProviderSharedState = void 0;
    var Fg = Oa(), Ra = class {
        constructor(e, t, n){
            this.resource = e, this.forceFlushTimeoutMillis = t, this.logRecordLimits = n, this.loggers = new Map, this.registeredLogRecordProcessors = [], this.activeProcessor = new Fg.NoopLogRecordProcessor;
        }
    };
    Oi.LoggerProviderSharedState = Ra;
});
var Wd = c((ut)=>{
    "use strict";
    Object.defineProperty(ut, "__esModule", {
        value: !0
    });
    ut.LoggerProvider = ut.DEFAULT_LOGGER_NAME = void 0;
    var Pr = (p(), f(d)), Hg = (fa(), f(at)), kg = it(), $d = T(), $g = jd(), Xd = Fd(), Xg = Hd(), Wg = kd();
    ut.DEFAULT_LOGGER_NAME = "unknown";
    var ba = class {
        constructor(e = {}){
            let { resource: t = kg.Resource.default(), logRecordLimits: n, forceFlushTimeoutMillis: i } = (0, $d.merge)({}, (0, Xd.loadDefaultConfig)(), e);
            this._sharedState = new Wg.LoggerProviderSharedState(t, i, (0, Xd.reconfigureLimits)(n)), this._shutdownOnce = new $d.BindOnceFuture(this._shutdown, this);
        }
        getLogger(e, t, n) {
            if (this._shutdownOnce.isCalled) return Pr.diag.warn("A shutdown LoggerProvider cannot provide a Logger"), Hg.NOOP_LOGGER;
            e || Pr.diag.warn("Logger requested without instrumentation scope name.");
            let i = e || ut.DEFAULT_LOGGER_NAME, o = `${i}@${t || ""}:${n?.schemaUrl || ""}`;
            return this._sharedState.loggers.has(o) || this._sharedState.loggers.set(o, new $g.Logger({
                name: i,
                version: t,
                schemaUrl: n?.schemaUrl
            }, this._sharedState)), this._sharedState.loggers.get(o);
        }
        addLogRecordProcessor(e) {
            this._sharedState.registeredLogRecordProcessors.length === 0 && this._sharedState.activeProcessor.shutdown().catch((t)=>Pr.diag.error("Error while trying to shutdown current log record processor", t)), this._sharedState.registeredLogRecordProcessors.push(e), this._sharedState.activeProcessor = new Xg.MultiLogRecordProcessor(this._sharedState.registeredLogRecordProcessors, this._sharedState.forceFlushTimeoutMillis);
        }
        forceFlush() {
            return this._shutdownOnce.isCalled ? (Pr.diag.warn("invalid attempt to force flush after LoggerProvider shutdown"), this._shutdownOnce.promise) : this._sharedState.activeProcessor.forceFlush();
        }
        shutdown() {
            return this._shutdownOnce.isCalled ? (Pr.diag.warn("shutdown may only be called once per LoggerProvider"), this._shutdownOnce.promise) : this._shutdownOnce.call();
        }
        _shutdown() {
            return this._sharedState.activeProcessor.shutdown();
        }
    };
    ut.LoggerProvider = ba;
});
var Kd = c((Ri)=>{
    "use strict";
    Object.defineProperty(Ri, "__esModule", {
        value: !0
    });
    Ri.ConsoleLogRecordExporter = void 0;
    var Kg = T(), zg = T(), Pa = class {
        export(e, t) {
            this._sendLogRecords(e, t);
        }
        shutdown() {
            return Promise.resolve();
        }
        _exportInfo(e) {
            var t, n, i;
            return {
                timestamp: (0, Kg.hrTimeToMicroseconds)(e.hrTime),
                traceId: (t = e.spanContext) === null || t === void 0 ? void 0 : t.traceId,
                spanId: (n = e.spanContext) === null || n === void 0 ? void 0 : n.spanId,
                traceFlags: (i = e.spanContext) === null || i === void 0 ? void 0 : i.traceFlags,
                severityText: e.severityText,
                severityNumber: e.severityNumber,
                body: e.body,
                attributes: e.attributes
            };
        }
        _sendLogRecords(e, t) {
            for (let n of e)console.dir(this._exportInfo(n), {
                depth: 3
            });
            t?.({
                code: zg.ExportResultCode.SUCCESS
            });
        }
    };
    Ri.ConsoleLogRecordExporter = Pa;
});
var zd = c((bi)=>{
    "use strict";
    Object.defineProperty(bi, "__esModule", {
        value: !0
    });
    bi.SimpleLogRecordProcessor = void 0;
    var ya = T(), va = class {
        constructor(e){
            this._exporter = e, this._shutdownOnce = new ya.BindOnceFuture(this._shutdown, this);
        }
        onEmit(e) {
            this._shutdownOnce.isCalled || this._exporter.export([
                e
            ], (t)=>{
                var n;
                if (t.code !== ya.ExportResultCode.SUCCESS) {
                    (0, ya.globalErrorHandler)((n = t.error) !== null && n !== void 0 ? n : new Error(`SimpleLogRecordProcessor: log record export failed (status ${t})`));
                    return;
                }
            });
        }
        forceFlush() {
            return Promise.resolve();
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        _shutdown() {
            return this._exporter.shutdown();
        }
    };
    bi.SimpleLogRecordProcessor = va;
});
var Qd = c((Pi)=>{
    "use strict";
    Object.defineProperty(Pi, "__esModule", {
        value: !0
    });
    Pi.InMemoryLogRecordExporter = void 0;
    var Yd = T(), Ia = class {
        constructor(){
            this._finishedLogRecords = [], this._stopped = !1;
        }
        export(e, t) {
            if (this._stopped) return t({
                code: Yd.ExportResultCode.FAILED,
                error: new Error("Exporter has been stopped")
            });
            this._finishedLogRecords.push(...e), t({
                code: Yd.ExportResultCode.SUCCESS
            });
        }
        shutdown() {
            return this._stopped = !0, this.reset(), Promise.resolve();
        }
        getFinishedLogRecords() {
            return this._finishedLogRecords;
        }
        reset() {
            this._finishedLogRecords = [];
        }
    };
    Pi.InMemoryLogRecordExporter = Ia;
});
var Zd = c((yi)=>{
    "use strict";
    Object.defineProperty(yi, "__esModule", {
        value: !0
    });
    yi.BatchLogRecordProcessorBase = void 0;
    var Yg = (p(), f(d)), xt = T(), La = class {
        constructor(e, t){
            var n, i, o, s;
            this._exporter = e, this._finishedLogRecords = [];
            let a = (0, xt.getEnv)();
            this._maxExportBatchSize = (n = t?.maxExportBatchSize) !== null && n !== void 0 ? n : a.OTEL_BLRP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = (i = t?.maxQueueSize) !== null && i !== void 0 ? i : a.OTEL_BLRP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = (o = t?.scheduledDelayMillis) !== null && o !== void 0 ? o : a.OTEL_BLRP_SCHEDULE_DELAY, this._exportTimeoutMillis = (s = t?.exportTimeoutMillis) !== null && s !== void 0 ? s : a.OTEL_BLRP_EXPORT_TIMEOUT, this._shutdownOnce = new xt.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (Yg.diag.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize);
        }
        onEmit(e) {
            this._shutdownOnce.isCalled || this._addToBuffer(e);
        }
        forceFlush() {
            return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        async _shutdown() {
            this.onShutdown(), await this._flushAll(), await this._exporter.shutdown();
        }
        _addToBuffer(e) {
            this._finishedLogRecords.length >= this._maxQueueSize || (this._finishedLogRecords.push(e), this._maybeStartTimer());
        }
        _flushAll() {
            return new Promise((e, t)=>{
                let n = [], i = Math.ceil(this._finishedLogRecords.length / this._maxExportBatchSize);
                for(let o = 0; o < i; o++)n.push(this._flushOneBatch());
                Promise.all(n).then(()=>{
                    e();
                }).catch(t);
            });
        }
        _flushOneBatch() {
            return this._clearTimer(), this._finishedLogRecords.length === 0 ? Promise.resolve() : new Promise((e, t)=>{
                (0, xt.callWithTimeout)(this._export(this._finishedLogRecords.splice(0, this._maxExportBatchSize)), this._exportTimeoutMillis).then(()=>e()).catch(t);
            });
        }
        _maybeStartTimer() {
            this._timer === void 0 && (this._timer = setTimeout(()=>{
                this._flushOneBatch().then(()=>{
                    this._finishedLogRecords.length > 0 && (this._clearTimer(), this._maybeStartTimer());
                }).catch((e)=>{
                    (0, xt.globalErrorHandler)(e);
                });
            }, this._scheduledDelayMillis), (0, xt.unrefTimer)(this._timer));
        }
        _clearTimer() {
            this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0);
        }
        _export(e) {
            return new Promise((t, n)=>{
                this._exporter.export(e, (i)=>{
                    var o;
                    if (i.code !== xt.ExportResultCode.SUCCESS) {
                        n((o = i.error) !== null && o !== void 0 ? o : new Error(`BatchLogRecordProcessorBase: log record export failed (status ${i})`));
                        return;
                    }
                    t(i);
                });
            });
        }
    };
    yi.BatchLogRecordProcessorBase = La;
});
var Jd = c((vi)=>{
    "use strict";
    Object.defineProperty(vi, "__esModule", {
        value: !0
    });
    vi.BatchLogRecordProcessor = void 0;
    var Qg = Zd(), Ma = class extends Qg.BatchLogRecordProcessorBase {
        onShutdown() {}
    };
    vi.BatchLogRecordProcessor = Ma;
});
var e_ = c((Ii)=>{
    "use strict";
    Object.defineProperty(Ii, "__esModule", {
        value: !0
    });
    Ii.BatchLogRecordProcessor = void 0;
    var Zg = Jd();
    Object.defineProperty(Ii, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return Zg.BatchLogRecordProcessor;
        }
    });
});
var t_ = c((Li)=>{
    "use strict";
    Object.defineProperty(Li, "__esModule", {
        value: !0
    });
    Li.BatchLogRecordProcessor = void 0;
    var Jg = e_();
    Object.defineProperty(Li, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return Jg.BatchLogRecordProcessor;
        }
    });
});
var r_ = c((z)=>{
    "use strict";
    Object.defineProperty(z, "__esModule", {
        value: !0
    });
    z.BatchLogRecordProcessor = z.InMemoryLogRecordExporter = z.SimpleLogRecordProcessor = z.ConsoleLogRecordExporter = z.NoopLogRecordProcessor = z.LogRecord = z.LoggerProvider = void 0;
    var eT = Wd();
    Object.defineProperty(z, "LoggerProvider", {
        enumerable: !0,
        get: function() {
            return eT.LoggerProvider;
        }
    });
    var tT = ga();
    Object.defineProperty(z, "LogRecord", {
        enumerable: !0,
        get: function() {
            return tT.LogRecord;
        }
    });
    var rT = Oa();
    Object.defineProperty(z, "NoopLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return rT.NoopLogRecordProcessor;
        }
    });
    var nT = Kd();
    Object.defineProperty(z, "ConsoleLogRecordExporter", {
        enumerable: !0,
        get: function() {
            return nT.ConsoleLogRecordExporter;
        }
    });
    var iT = zd();
    Object.defineProperty(z, "SimpleLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return iT.SimpleLogRecordProcessor;
        }
    });
    var oT = Qd();
    Object.defineProperty(z, "InMemoryLogRecordExporter", {
        enumerable: !0,
        get: function() {
            return oT.InMemoryLogRecordExporter;
        }
    });
    var sT = t_();
    Object.defineProperty(z, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return sT.BatchLogRecordProcessor;
        }
    });
});
var Mi = c((yr)=>{
    "use strict";
    Object.defineProperty(yr, "__esModule", {
        value: !0
    });
    yr.AggregationTemporality = void 0;
    var aT;
    (function(r) {
        r[r.DELTA = 0] = "DELTA", r[r.CUMULATIVE = 1] = "CUMULATIVE";
    })(aT = yr.AggregationTemporality || (yr.AggregationTemporality = {}));
});
var Dt = c((vr)=>{
    "use strict";
    Object.defineProperty(vr, "__esModule", {
        value: !0
    });
    vr.DataPointType = void 0;
    var uT;
    (function(r) {
        r[r.HISTOGRAM = 0] = "HISTOGRAM", r[r.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", r[r.GAUGE = 2] = "GAUGE", r[r.SUM = 3] = "SUM";
    })(uT = vr.DataPointType || (vr.DataPointType = {}));
});
var me = c((M)=>{
    "use strict";
    Object.defineProperty(M, "__esModule", {
        value: !0
    });
    M.equalsCaseInsensitive = M.binarySearchLB = M.setEquals = M.FlatMap = M.isPromiseAllSettledRejectionResult = M.PromiseAllSettled = M.callWithTimeout = M.TimeoutError = M.instrumentationScopeId = M.hashAttributes = M.isNotNullish = void 0;
    function cT(r) {
        return r != null;
    }
    M.isNotNullish = cT;
    function lT(r) {
        let e = Object.keys(r);
        return e.length === 0 ? "" : (e = e.sort(), JSON.stringify(e.map((t)=>[
                t,
                r[t]
            ])));
    }
    M.hashAttributes = lT;
    function dT(r) {
        var e, t;
        return `${r.name}:${(e = r.version) !== null && e !== void 0 ? e : ""}:${(t = r.schemaUrl) !== null && t !== void 0 ? t : ""}`;
    }
    M.instrumentationScopeId = dT;
    var Ci = class r extends Error {
        constructor(e){
            super(e), Object.setPrototypeOf(this, r.prototype);
        }
    };
    M.TimeoutError = Ci;
    function _T(r, e) {
        let t, n = new Promise(function(o, s) {
            t = setTimeout(function() {
                s(new Ci("Operation timed out."));
            }, e);
        });
        return Promise.race([
            r,
            n
        ]).then((i)=>(clearTimeout(t), i), (i)=>{
            throw clearTimeout(t), i;
        });
    }
    M.callWithTimeout = _T;
    async function pT(r) {
        return Promise.all(r.map(async (e)=>{
            try {
                return {
                    status: "fulfilled",
                    value: await e
                };
            } catch (t) {
                return {
                    status: "rejected",
                    reason: t
                };
            }
        }));
    }
    M.PromiseAllSettled = pT;
    function hT(r) {
        return r.status === "rejected";
    }
    M.isPromiseAllSettledRejectionResult = hT;
    function fT(r, e) {
        let t = [];
        return r.forEach((n)=>{
            t.push(...e(n));
        }), t;
    }
    M.FlatMap = fT;
    function ET(r, e) {
        if (r.size !== e.size) return !1;
        for (let t of r)if (!e.has(t)) return !1;
        return !0;
    }
    M.setEquals = ET;
    function mT(r, e) {
        let t = 0, n = r.length - 1;
        for(; n - t > 1;){
            let i = Math.trunc((n + t) / 2);
            r[i] <= e ? t = i : n = i - 1;
        }
        return r[n] <= e ? n : r[t] <= e ? t : -1;
    }
    M.binarySearchLB = mT;
    function gT(r, e) {
        return r.toLowerCase() === e.toLowerCase();
    }
    M.equalsCaseInsensitive = gT;
});
var Ut = c((Ir)=>{
    "use strict";
    Object.defineProperty(Ir, "__esModule", {
        value: !0
    });
    Ir.AggregatorKind = void 0;
    var TT;
    (function(r) {
        r[r.DROP = 0] = "DROP", r[r.SUM = 1] = "SUM", r[r.LAST_VALUE = 2] = "LAST_VALUE", r[r.HISTOGRAM = 3] = "HISTOGRAM", r[r.EXPONENTIAL_HISTOGRAM = 4] = "EXPONENTIAL_HISTOGRAM";
    })(TT = Ir.AggregatorKind || (Ir.AggregatorKind = {}));
});
var n_ = c((Ni)=>{
    "use strict";
    Object.defineProperty(Ni, "__esModule", {
        value: !0
    });
    Ni.DropAggregator = void 0;
    var ST = Ut(), Ca = class {
        constructor(){
            this.kind = ST.AggregatorKind.DROP;
        }
        createAccumulation() {}
        merge(e, t) {}
        diff(e, t) {}
        toMetricData(e, t, n, i) {}
    };
    Ni.DropAggregator = Ca;
});
var Re = c((ie)=>{
    "use strict";
    Object.defineProperty(ie, "__esModule", {
        value: !0
    });
    ie.isValidName = ie.isDescriptorCompatibleWith = ie.createInstrumentDescriptorWithView = ie.createInstrumentDescriptor = ie.InstrumentType = void 0;
    var i_ = (p(), f(d)), AT = me(), OT;
    (function(r) {
        r.COUNTER = "COUNTER", r.HISTOGRAM = "HISTOGRAM", r.UP_DOWN_COUNTER = "UP_DOWN_COUNTER", r.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER", r.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE", r.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER";
    })(OT = ie.InstrumentType || (ie.InstrumentType = {}));
    function RT(r, e, t) {
        var n, i, o, s;
        return o_(r) || i_.diag.warn(`Invalid metric name: "${r}". The metric name should be a ASCII string with a length no greater than 255 characters.`), {
            name: r,
            type: e,
            description: (n = t?.description) !== null && n !== void 0 ? n : "",
            unit: (i = t?.unit) !== null && i !== void 0 ? i : "",
            valueType: (o = t?.valueType) !== null && o !== void 0 ? o : i_.ValueType.DOUBLE,
            advice: (s = t?.advice) !== null && s !== void 0 ? s : {}
        };
    }
    ie.createInstrumentDescriptor = RT;
    function bT(r, e) {
        var t, n;
        return {
            name: (t = r.name) !== null && t !== void 0 ? t : e.name,
            description: (n = r.description) !== null && n !== void 0 ? n : e.description,
            type: e.type,
            unit: e.unit,
            valueType: e.valueType,
            advice: e.advice
        };
    }
    ie.createInstrumentDescriptorWithView = bT;
    function PT(r, e) {
        return (0, AT.equalsCaseInsensitive)(r.name, e.name) && r.unit === e.unit && r.type === e.type && r.valueType === e.valueType;
    }
    ie.isDescriptorCompatibleWith = PT;
    var yT = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
    function o_(r) {
        return r.match(yT) != null;
    }
    ie.isValidName = o_;
});
var s_ = c((qt)=>{
    "use strict";
    Object.defineProperty(qt, "__esModule", {
        value: !0
    });
    qt.HistogramAggregator = qt.HistogramAccumulation = void 0;
    var vT = Ut(), IT = Dt(), Na = Re(), LT = me();
    function MT(r) {
        let e = r.map(()=>0);
        return e.push(0), {
            buckets: {
                boundaries: r,
                counts: e
            },
            sum: 0,
            count: 0,
            hasMinMax: !1,
            min: 1 / 0,
            max: -1 / 0
        };
    }
    var Bt = class {
        constructor(e, t, n = !0, i = MT(t)){
            this.startTime = e, this._boundaries = t, this._recordMinMax = n, this._current = i;
        }
        record(e) {
            this._current.count += 1, this._current.sum += e, this._recordMinMax && (this._current.min = Math.min(e, this._current.min), this._current.max = Math.max(e, this._current.max), this._current.hasMinMax = !0);
            let t = (0, LT.binarySearchLB)(this._boundaries, e);
            this._current.buckets.counts[t + 1] += 1;
        }
        setStartTime(e) {
            this.startTime = e;
        }
        toPointValue() {
            return this._current;
        }
    };
    qt.HistogramAccumulation = Bt;
    var wa = class {
        constructor(e, t){
            this._boundaries = e, this._recordMinMax = t, this.kind = vT.AggregatorKind.HISTOGRAM;
        }
        createAccumulation(e) {
            return new Bt(e, this._boundaries, this._recordMinMax);
        }
        merge(e, t) {
            let n = e.toPointValue(), i = t.toPointValue(), o = n.buckets.counts, s = i.buckets.counts, a = new Array(o.length);
            for(let _ = 0; _ < o.length; _++)a[_] = o[_] + s[_];
            let u = 1 / 0, l = -1 / 0;
            return this._recordMinMax && (n.hasMinMax && i.hasMinMax ? (u = Math.min(n.min, i.min), l = Math.max(n.max, i.max)) : n.hasMinMax ? (u = n.min, l = n.max) : i.hasMinMax && (u = i.min, l = i.max)), new Bt(e.startTime, n.buckets.boundaries, this._recordMinMax, {
                buckets: {
                    boundaries: n.buckets.boundaries,
                    counts: a
                },
                count: n.count + i.count,
                sum: n.sum + i.sum,
                hasMinMax: this._recordMinMax && (n.hasMinMax || i.hasMinMax),
                min: u,
                max: l
            });
        }
        diff(e, t) {
            let n = e.toPointValue(), i = t.toPointValue(), o = n.buckets.counts, s = i.buckets.counts, a = new Array(o.length);
            for(let u = 0; u < o.length; u++)a[u] = s[u] - o[u];
            return new Bt(t.startTime, n.buckets.boundaries, this._recordMinMax, {
                buckets: {
                    boundaries: n.buckets.boundaries,
                    counts: a
                },
                count: i.count - n.count,
                sum: i.sum - n.sum,
                hasMinMax: !1,
                min: 1 / 0,
                max: -1 / 0
            });
        }
        toMetricData(e, t, n, i) {
            return {
                descriptor: e,
                aggregationTemporality: t,
                dataPointType: IT.DataPointType.HISTOGRAM,
                dataPoints: n.map(([o, s])=>{
                    let a = s.toPointValue(), u = e.type === Na.InstrumentType.UP_DOWN_COUNTER || e.type === Na.InstrumentType.OBSERVABLE_GAUGE || e.type === Na.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
                    return {
                        attributes: o,
                        startTime: s.startTime,
                        endTime: i,
                        value: {
                            min: a.hasMinMax ? a.min : void 0,
                            max: a.hasMinMax ? a.max : void 0,
                            sum: u ? void 0 : a.sum,
                            buckets: a.buckets,
                            count: a.count
                        }
                    };
                })
            };
        }
    };
    qt.HistogramAggregator = wa;
});
var a_ = c((wi)=>{
    "use strict";
    Object.defineProperty(wi, "__esModule", {
        value: !0
    });
    wi.Buckets = void 0;
    var xa = class r {
        constructor(e = new Da, t = 0, n = 0, i = 0){
            this.backing = e, this.indexBase = t, this.indexStart = n, this.indexEnd = i;
        }
        get offset() {
            return this.indexStart;
        }
        get length() {
            return this.backing.length === 0 || this.indexEnd === this.indexStart && this.at(0) === 0 ? 0 : this.indexEnd - this.indexStart + 1;
        }
        counts() {
            return Array.from({
                length: this.length
            }, (e, t)=>this.at(t));
        }
        at(e) {
            let t = this.indexBase - this.indexStart;
            return e < t && (e += this.backing.length), e -= t, this.backing.countAt(e);
        }
        incrementBucket(e, t) {
            this.backing.increment(e, t);
        }
        decrementBucket(e, t) {
            this.backing.decrement(e, t);
        }
        trim() {
            for(let e = 0; e < this.length; e++)if (this.at(e) !== 0) {
                this.indexStart += e;
                break;
            } else if (e === this.length - 1) {
                this.indexStart = this.indexEnd = this.indexBase = 0;
                return;
            }
            for(let e = this.length - 1; e >= 0; e--)if (this.at(e) !== 0) {
                this.indexEnd -= this.length - e - 1;
                break;
            }
            this._rotate();
        }
        downscale(e) {
            this._rotate();
            let t = 1 + this.indexEnd - this.indexStart, n = 1 << e, i = 0, o = 0;
            for(let s = this.indexStart; s <= this.indexEnd;){
                let a = s % n;
                a < 0 && (a += n);
                for(let u = a; u < n && i < t; u++)this._relocateBucket(o, i), i++, s++;
                o++;
            }
            this.indexStart >>= e, this.indexEnd >>= e, this.indexBase = this.indexStart;
        }
        clone() {
            return new r(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
        }
        _rotate() {
            let e = this.indexBase - this.indexStart;
            e !== 0 && (e > 0 ? (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, e), this.backing.reverse(e, this.backing.length)) : (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, this.backing.length + e)), this.indexBase = this.indexStart);
        }
        _relocateBucket(e, t) {
            e !== t && this.incrementBucket(e, this.backing.emptyBucket(t));
        }
    };
    wi.Buckets = xa;
    var Da = class r {
        constructor(e = [
            0
        ]){
            this._counts = e;
        }
        get length() {
            return this._counts.length;
        }
        countAt(e) {
            return this._counts[e];
        }
        growTo(e, t, n) {
            let i = new Array(e).fill(0);
            i.splice(n, this._counts.length - t, ...this._counts.slice(t)), i.splice(0, t, ...this._counts.slice(0, t)), this._counts = i;
        }
        reverse(e, t) {
            let n = Math.floor((e + t) / 2) - e;
            for(let i = 0; i < n; i++){
                let o = this._counts[e + i];
                this._counts[e + i] = this._counts[t - i - 1], this._counts[t - i - 1] = o;
            }
        }
        emptyBucket(e) {
            let t = this._counts[e];
            return this._counts[e] = 0, t;
        }
        increment(e, t) {
            this._counts[e] += t;
        }
        decrement(e, t) {
            this._counts[e] >= t ? this._counts[e] -= t : this._counts[e] = 0;
        }
        clone() {
            return new r([
                ...this._counts
            ]);
        }
    };
});
var Ba = c((Y)=>{
    "use strict";
    Object.defineProperty(Y, "__esModule", {
        value: !0
    });
    Y.getSignificand = Y.getNormalBase2 = Y.MIN_VALUE = Y.MAX_NORMAL_EXPONENT = Y.MIN_NORMAL_EXPONENT = Y.SIGNIFICAND_WIDTH = void 0;
    Y.SIGNIFICAND_WIDTH = 52;
    var CT = 2146435072, NT = 1048575, Ua = 1023;
    Y.MIN_NORMAL_EXPONENT = -Ua + 1;
    Y.MAX_NORMAL_EXPONENT = Ua;
    Y.MIN_VALUE = Math.pow(2, -1022);
    function wT(r) {
        let e = new DataView(new ArrayBuffer(8));
        return e.setFloat64(0, r), ((e.getUint32(0) & CT) >> 20) - Ua;
    }
    Y.getNormalBase2 = wT;
    function xT(r) {
        let e = new DataView(new ArrayBuffer(8));
        e.setFloat64(0, r);
        let t = e.getUint32(0), n = e.getUint32(4);
        return (t & NT) * Math.pow(2, 32) + n;
    }
    Y.getSignificand = xT;
});
var xi = c((Gt)=>{
    "use strict";
    Object.defineProperty(Gt, "__esModule", {
        value: !0
    });
    Gt.nextGreaterSquare = Gt.ldexp = void 0;
    function DT(r, e) {
        return r === 0 || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY || Number.isNaN(r) ? r : r * Math.pow(2, e);
    }
    Gt.ldexp = DT;
    function UT(r) {
        return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
    }
    Gt.nextGreaterSquare = UT;
});
var Ui = c((Di)=>{
    "use strict";
    Object.defineProperty(Di, "__esModule", {
        value: !0
    });
    Di.MappingError = void 0;
    var qa = class extends Error {
    };
    Di.MappingError = qa;
});
var c_ = c((Bi)=>{
    "use strict";
    Object.defineProperty(Bi, "__esModule", {
        value: !0
    });
    Bi.ExponentMapping = void 0;
    var Vt = Ba(), BT = xi(), u_ = Ui(), Ga = class {
        constructor(e){
            this._shift = -e;
        }
        mapToIndex(e) {
            if (e < Vt.MIN_VALUE) return this._minNormalLowerBoundaryIndex();
            let t = Vt.getNormalBase2(e), n = this._rightShift(Vt.getSignificand(e) - 1, Vt.SIGNIFICAND_WIDTH);
            return t + n >> this._shift;
        }
        lowerBoundary(e) {
            let t = this._minNormalLowerBoundaryIndex();
            if (e < t) throw new u_.MappingError(`underflow: ${e} is < minimum lower boundary: ${t}`);
            let n = this._maxNormalLowerBoundaryIndex();
            if (e > n) throw new u_.MappingError(`overflow: ${e} is > maximum lower boundary: ${n}`);
            return BT.ldexp(1, e << this._shift);
        }
        get scale() {
            return this._shift === 0 ? 0 : -this._shift;
        }
        _minNormalLowerBoundaryIndex() {
            let e = Vt.MIN_NORMAL_EXPONENT >> this._shift;
            return this._shift < 2 && e--, e;
        }
        _maxNormalLowerBoundaryIndex() {
            return Vt.MAX_NORMAL_EXPONENT >> this._shift;
        }
        _rightShift(e, t) {
            return Math.floor(e * Math.pow(2, -t));
        }
    };
    Bi.ExponentMapping = Ga;
});
var __ = c((qi)=>{
    "use strict";
    Object.defineProperty(qi, "__esModule", {
        value: !0
    });
    qi.LogarithmMapping = void 0;
    var jt = Ba(), l_ = xi(), d_ = Ui(), Va = class {
        constructor(e){
            this._scale = e, this._scaleFactor = l_.ldexp(Math.LOG2E, e), this._inverseFactor = l_.ldexp(Math.LN2, -e);
        }
        mapToIndex(e) {
            if (e <= jt.MIN_VALUE) return this._minNormalLowerBoundaryIndex() - 1;
            if (jt.getSignificand(e) === 0) return (jt.getNormalBase2(e) << this._scale) - 1;
            let t = Math.floor(Math.log(e) * this._scaleFactor), n = this._maxNormalLowerBoundaryIndex();
            return t >= n ? n : t;
        }
        lowerBoundary(e) {
            let t = this._maxNormalLowerBoundaryIndex();
            if (e >= t) {
                if (e === t) return 2 * Math.exp((e - (1 << this._scale)) / this._scaleFactor);
                throw new d_.MappingError(`overflow: ${e} is > maximum lower boundary: ${t}`);
            }
            let n = this._minNormalLowerBoundaryIndex();
            if (e <= n) {
                if (e === n) return jt.MIN_VALUE;
                if (e === n - 1) return Math.exp((e + (1 << this._scale)) / this._scaleFactor) / 2;
                throw new d_.MappingError(`overflow: ${e} is < minimum lower boundary: ${n}`);
            }
            return Math.exp(e * this._inverseFactor);
        }
        get scale() {
            return this._scale;
        }
        _minNormalLowerBoundaryIndex() {
            return jt.MIN_NORMAL_EXPONENT << this._scale;
        }
        _maxNormalLowerBoundaryIndex() {
            return (jt.MAX_NORMAL_EXPONENT + 1 << this._scale) - 1;
        }
    };
    qi.LogarithmMapping = Va;
});
var f_ = c((Gi)=>{
    "use strict";
    Object.defineProperty(Gi, "__esModule", {
        value: !0
    });
    Gi.getMapping = void 0;
    var qT = c_(), GT = __(), VT = Ui(), p_ = -10, h_ = 20, jT = Array.from({
        length: 31
    }, (r, e)=>e > 10 ? new GT.LogarithmMapping(e - 10) : new qT.ExponentMapping(e - 10));
    function FT(r) {
        if (r > h_ || r < p_) throw new VT.MappingError(`expected scale >= ${p_} && <= ${h_}, got: ${r}`);
        return jT[r + 10];
    }
    Gi.getMapping = FT;
});
var g_ = c((Ht)=>{
    "use strict";
    Object.defineProperty(Ht, "__esModule", {
        value: !0
    });
    Ht.ExponentialHistogramAggregator = Ht.ExponentialHistogramAccumulation = void 0;
    var HT = Ut(), kT = Dt(), $T = (p(), f(d)), ja = Re(), E_ = a_(), m_ = f_(), XT = xi(), Ft = class r {
        constructor(e, t){
            this.low = e, this.high = t;
        }
        static combine(e, t) {
            return new r(Math.min(e.low, t.low), Math.max(e.high, t.high));
        }
    }, WT = 20, KT = 160, Fa = 2, Vi = class r {
        constructor(e = e, t = KT, n = !0, i = 0, o = 0, s = 0, a = Number.POSITIVE_INFINITY, u = Number.NEGATIVE_INFINITY, l = new E_.Buckets, _ = new E_.Buckets, E = (0, m_.getMapping)(WT)){
            this.startTime = e, this._maxSize = t, this._recordMinMax = n, this._sum = i, this._count = o, this._zeroCount = s, this._min = a, this._max = u, this._positive = l, this._negative = _, this._mapping = E, this._maxSize < Fa && ($T.diag.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${Fa}`), this._maxSize = Fa);
        }
        record(e) {
            this.updateByIncrement(e, 1);
        }
        setStartTime(e) {
            this.startTime = e;
        }
        toPointValue() {
            return {
                hasMinMax: this._recordMinMax,
                min: this.min,
                max: this.max,
                sum: this.sum,
                positive: {
                    offset: this.positive.offset,
                    bucketCounts: this.positive.counts()
                },
                negative: {
                    offset: this.negative.offset,
                    bucketCounts: this.negative.counts()
                },
                count: this.count,
                scale: this.scale,
                zeroCount: this.zeroCount
            };
        }
        get sum() {
            return this._sum;
        }
        get min() {
            return this._min;
        }
        get max() {
            return this._max;
        }
        get count() {
            return this._count;
        }
        get zeroCount() {
            return this._zeroCount;
        }
        get scale() {
            return this._count === this._zeroCount ? 0 : this._mapping.scale;
        }
        get positive() {
            return this._positive;
        }
        get negative() {
            return this._negative;
        }
        updateByIncrement(e, t) {
            if (e > this._max && (this._max = e), e < this._min && (this._min = e), this._count += t, e === 0) {
                this._zeroCount += t;
                return;
            }
            this._sum += e * t, e > 0 ? this._updateBuckets(this._positive, e, t) : this._updateBuckets(this._negative, -e, t);
        }
        merge(e) {
            this._count === 0 ? (this._min = e.min, this._max = e.max) : e.count !== 0 && (e.min < this.min && (this._min = e.min), e.max > this.max && (this._max = e.max)), this.startTime = e.startTime, this._sum += e.sum, this._count += e.count, this._zeroCount += e.zeroCount;
            let t = this._minScale(e);
            this._downscale(this.scale - t), this._mergeBuckets(this.positive, e, e.positive, t), this._mergeBuckets(this.negative, e, e.negative, t);
        }
        diff(e) {
            this._min = 1 / 0, this._max = -1 / 0, this._sum -= e.sum, this._count -= e.count, this._zeroCount -= e.zeroCount;
            let t = this._minScale(e);
            this._downscale(this.scale - t), this._diffBuckets(this.positive, e, e.positive, t), this._diffBuckets(this.negative, e, e.negative, t);
        }
        clone() {
            return new r(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
        }
        _updateBuckets(e, t, n) {
            let i = this._mapping.mapToIndex(t), o = !1, s = 0, a = 0;
            if (e.length === 0 ? (e.indexStart = i, e.indexEnd = e.indexStart, e.indexBase = e.indexStart) : i < e.indexStart && e.indexEnd - i >= this._maxSize ? (o = !0, a = i, s = e.indexEnd) : i > e.indexEnd && i - e.indexStart >= this._maxSize && (o = !0, a = e.indexStart, s = i), o) {
                let u = this._changeScale(s, a);
                this._downscale(u), i = this._mapping.mapToIndex(t);
            }
            this._incrementIndexBy(e, i, n);
        }
        _incrementIndexBy(e, t, n) {
            if (n === 0) return;
            if (t < e.indexStart) {
                let o = e.indexEnd - t;
                o >= e.backing.length && this._grow(e, o + 1), e.indexStart = t;
            } else if (t > e.indexEnd) {
                let o = t - e.indexStart;
                o >= e.backing.length && this._grow(e, o + 1), e.indexEnd = t;
            }
            let i = t - e.indexBase;
            i < 0 && (i += e.backing.length), e.incrementBucket(i, n);
        }
        _grow(e, t) {
            let n = e.backing.length, i = e.indexBase - e.indexStart, o = n - i, s = (0, XT.nextGreaterSquare)(t);
            s > this._maxSize && (s = this._maxSize);
            let a = s - i;
            e.backing.growTo(s, o, a);
        }
        _changeScale(e, t) {
            let n = 0;
            for(; e - t >= this._maxSize;)e >>= 1, t >>= 1, n++;
            return n;
        }
        _downscale(e) {
            if (e === 0) return;
            if (e < 0) throw new Error(`impossible change of scale: ${this.scale}`);
            let t = this._mapping.scale - e;
            this._positive.downscale(e), this._negative.downscale(e), this._mapping = (0, m_.getMapping)(t);
        }
        _minScale(e) {
            let t = Math.min(this.scale, e.scale), n = Ft.combine(this._highLowAtScale(this.positive, this.scale, t), this._highLowAtScale(e.positive, e.scale, t)), i = Ft.combine(this._highLowAtScale(this.negative, this.scale, t), this._highLowAtScale(e.negative, e.scale, t));
            return Math.min(t - this._changeScale(n.high, n.low), t - this._changeScale(i.high, i.low));
        }
        _highLowAtScale(e, t, n) {
            if (e.length === 0) return new Ft(0, -1);
            let i = t - n;
            return new Ft(e.indexStart >> i, e.indexEnd >> i);
        }
        _mergeBuckets(e, t, n, i) {
            let o = n.offset, s = t.scale - i;
            for(let a = 0; a < n.length; a++)this._incrementIndexBy(e, o + a >> s, n.at(a));
        }
        _diffBuckets(e, t, n, i) {
            let o = n.offset, s = t.scale - i;
            for(let a = 0; a < n.length; a++){
                let l = (o + a >> s) - e.indexBase;
                l < 0 && (l += e.backing.length), e.decrementBucket(l, n.at(a));
            }
            e.trim();
        }
    };
    Ht.ExponentialHistogramAccumulation = Vi;
    var Ha = class {
        constructor(e, t){
            this._maxSize = e, this._recordMinMax = t, this.kind = HT.AggregatorKind.EXPONENTIAL_HISTOGRAM;
        }
        createAccumulation(e) {
            return new Vi(e, this._maxSize, this._recordMinMax);
        }
        merge(e, t) {
            let n = t.clone();
            return n.merge(e), n;
        }
        diff(e, t) {
            let n = t.clone();
            return n.diff(e), n;
        }
        toMetricData(e, t, n, i) {
            return {
                descriptor: e,
                aggregationTemporality: t,
                dataPointType: kT.DataPointType.EXPONENTIAL_HISTOGRAM,
                dataPoints: n.map(([o, s])=>{
                    let a = s.toPointValue(), u = e.type === ja.InstrumentType.UP_DOWN_COUNTER || e.type === ja.InstrumentType.OBSERVABLE_GAUGE || e.type === ja.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
                    return {
                        attributes: o,
                        startTime: s.startTime,
                        endTime: i,
                        value: {
                            min: a.hasMinMax ? a.min : void 0,
                            max: a.hasMinMax ? a.max : void 0,
                            sum: u ? void 0 : a.sum,
                            positive: {
                                offset: a.positive.offset,
                                bucketCounts: a.positive.bucketCounts
                            },
                            negative: {
                                offset: a.negative.offset,
                                bucketCounts: a.negative.bucketCounts
                            },
                            count: a.count,
                            scale: a.scale,
                            zeroCount: a.zeroCount
                        }
                    };
                })
            };
        }
    };
    Ht.ExponentialHistogramAggregator = Ha;
});
var T_ = c(($t)=>{
    "use strict";
    Object.defineProperty($t, "__esModule", {
        value: !0
    });
    $t.LastValueAggregator = $t.LastValueAccumulation = void 0;
    var zT = Ut(), Lr = T(), YT = Dt(), kt = class {
        constructor(e, t = 0, n = [
            0,
            0
        ]){
            this.startTime = e, this._current = t, this.sampleTime = n;
        }
        record(e) {
            this._current = e, this.sampleTime = (0, Lr.millisToHrTime)(Date.now());
        }
        setStartTime(e) {
            this.startTime = e;
        }
        toPointValue() {
            return this._current;
        }
    };
    $t.LastValueAccumulation = kt;
    var ka = class {
        constructor(){
            this.kind = zT.AggregatorKind.LAST_VALUE;
        }
        createAccumulation(e) {
            return new kt(e);
        }
        merge(e, t) {
            let n = (0, Lr.hrTimeToMicroseconds)(t.sampleTime) >= (0, Lr.hrTimeToMicroseconds)(e.sampleTime) ? t : e;
            return new kt(e.startTime, n.toPointValue(), n.sampleTime);
        }
        diff(e, t) {
            let n = (0, Lr.hrTimeToMicroseconds)(t.sampleTime) >= (0, Lr.hrTimeToMicroseconds)(e.sampleTime) ? t : e;
            return new kt(t.startTime, n.toPointValue(), n.sampleTime);
        }
        toMetricData(e, t, n, i) {
            return {
                descriptor: e,
                aggregationTemporality: t,
                dataPointType: YT.DataPointType.GAUGE,
                dataPoints: n.map(([o, s])=>({
                        attributes: o,
                        startTime: s.startTime,
                        endTime: i,
                        value: s.toPointValue()
                    }))
            };
        }
    };
    $t.LastValueAggregator = ka;
});
var S_ = c((Xt)=>{
    "use strict";
    Object.defineProperty(Xt, "__esModule", {
        value: !0
    });
    Xt.SumAggregator = Xt.SumAccumulation = void 0;
    var QT = Ut(), ZT = Dt(), xe = class {
        constructor(e, t, n = 0, i = !1){
            this.startTime = e, this.monotonic = t, this._current = n, this.reset = i;
        }
        record(e) {
            this.monotonic && e < 0 || (this._current += e);
        }
        setStartTime(e) {
            this.startTime = e;
        }
        toPointValue() {
            return this._current;
        }
    };
    Xt.SumAccumulation = xe;
    var $a = class {
        constructor(e){
            this.monotonic = e, this.kind = QT.AggregatorKind.SUM;
        }
        createAccumulation(e) {
            return new xe(e, this.monotonic);
        }
        merge(e, t) {
            let n = e.toPointValue(), i = t.toPointValue();
            return t.reset ? new xe(t.startTime, this.monotonic, i, t.reset) : new xe(e.startTime, this.monotonic, n + i);
        }
        diff(e, t) {
            let n = e.toPointValue(), i = t.toPointValue();
            return this.monotonic && n > i ? new xe(t.startTime, this.monotonic, i, !0) : new xe(t.startTime, this.monotonic, i - n);
        }
        toMetricData(e, t, n, i) {
            return {
                descriptor: e,
                aggregationTemporality: t,
                dataPointType: ZT.DataPointType.SUM,
                dataPoints: n.map(([o, s])=>({
                        attributes: o,
                        startTime: s.startTime,
                        endTime: i,
                        value: s.toPointValue()
                    })),
                isMonotonic: this.monotonic
            };
        }
    };
    Xt.SumAggregator = $a;
});
var A_ = c((le)=>{
    "use strict";
    var JT = le && le.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Mr = le && le.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && JT(e, r, t);
    };
    Object.defineProperty(le, "__esModule", {
        value: !0
    });
    Mr(n_(), le);
    Mr(s_(), le);
    Mr(g_(), le);
    Mr(T_(), le);
    Mr(S_(), le);
});
var ki = c((G)=>{
    "use strict";
    Object.defineProperty(G, "__esModule", {
        value: !0
    });
    G.DefaultAggregation = G.ExponentialHistogramAggregation = G.ExplicitBucketHistogramAggregation = G.HistogramAggregation = G.LastValueAggregation = G.SumAggregation = G.DropAggregation = G.Aggregation = void 0;
    var eS = (p(), f(d)), ct = A_(), be = Re(), ge = class {
        static Drop() {
            return O_;
        }
        static Sum() {
            return R_;
        }
        static LastValue() {
            return b_;
        }
        static Histogram() {
            return P_;
        }
        static ExponentialHistogram() {
            return tS;
        }
        static Default() {
            return rS;
        }
    };
    G.Aggregation = ge;
    var Cr = class r extends ge {
        createAggregator(e) {
            return r.DEFAULT_INSTANCE;
        }
    };
    G.DropAggregation = Cr;
    Cr.DEFAULT_INSTANCE = new ct.DropAggregator;
    var Wt = class r extends ge {
        createAggregator(e) {
            switch(e.type){
                case be.InstrumentType.COUNTER:
                case be.InstrumentType.OBSERVABLE_COUNTER:
                case be.InstrumentType.HISTOGRAM:
                    return r.MONOTONIC_INSTANCE;
                default:
                    return r.NON_MONOTONIC_INSTANCE;
            }
        }
    };
    G.SumAggregation = Wt;
    Wt.MONOTONIC_INSTANCE = new ct.SumAggregator(!0);
    Wt.NON_MONOTONIC_INSTANCE = new ct.SumAggregator(!1);
    var Nr = class r extends ge {
        createAggregator(e) {
            return r.DEFAULT_INSTANCE;
        }
    };
    G.LastValueAggregation = Nr;
    Nr.DEFAULT_INSTANCE = new ct.LastValueAggregator;
    var wr = class r extends ge {
        createAggregator(e) {
            return r.DEFAULT_INSTANCE;
        }
    };
    G.HistogramAggregation = wr;
    wr.DEFAULT_INSTANCE = new ct.HistogramAggregator([
        0,
        5,
        10,
        25,
        50,
        75,
        100,
        250,
        500,
        750,
        1e3,
        2500,
        5e3,
        7500,
        1e4
    ], !0);
    var ji = class extends ge {
        constructor(e, t = !0){
            if (super(), this._recordMinMax = t, e === void 0 || e.length === 0) throw new Error("HistogramAggregator should be created with boundaries.");
            e = e.concat(), e = e.sort((o, s)=>o - s);
            let n = e.lastIndexOf(-1 / 0), i = e.indexOf(1 / 0);
            i === -1 && (i = void 0), this._boundaries = e.slice(n + 1, i);
        }
        createAggregator(e) {
            return new ct.HistogramAggregator(this._boundaries, this._recordMinMax);
        }
    };
    G.ExplicitBucketHistogramAggregation = ji;
    var Fi = class extends ge {
        constructor(e = 160, t = !0){
            super(), this._maxSize = e, this._recordMinMax = t;
        }
        createAggregator(e) {
            return new ct.ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
        }
    };
    G.ExponentialHistogramAggregation = Fi;
    var Hi = class extends ge {
        _resolve(e) {
            switch(e.type){
                case be.InstrumentType.COUNTER:
                case be.InstrumentType.UP_DOWN_COUNTER:
                case be.InstrumentType.OBSERVABLE_COUNTER:
                case be.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
                    return R_;
                case be.InstrumentType.OBSERVABLE_GAUGE:
                    return b_;
                case be.InstrumentType.HISTOGRAM:
                    return e.advice.explicitBucketBoundaries ? new ji(e.advice.explicitBucketBoundaries) : P_;
            }
            return eS.diag.warn(`Unable to recognize instrument type: ${e.type}`), O_;
        }
        createAggregator(e) {
            return this._resolve(e).createAggregator(e);
        }
    };
    G.DefaultAggregation = Hi;
    var O_ = new Cr, R_ = new Wt, b_ = new Nr, P_ = new wr, tS = new Fi, rS = new Hi;
});
var Xa = c((Kt)=>{
    "use strict";
    Object.defineProperty(Kt, "__esModule", {
        value: !0
    });
    Kt.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = Kt.DEFAULT_AGGREGATION_SELECTOR = void 0;
    var nS = ki(), iS = Mi(), oS = (r)=>nS.Aggregation.Default();
    Kt.DEFAULT_AGGREGATION_SELECTOR = oS;
    var sS = (r)=>iS.AggregationTemporality.CUMULATIVE;
    Kt.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = sS;
});
var Ka = c((Xi)=>{
    "use strict";
    Object.defineProperty(Xi, "__esModule", {
        value: !0
    });
    Xi.MetricReader = void 0;
    var y_ = (p(), f(d)), $i = me(), v_ = Xa(), Wa = class {
        constructor(e){
            var t, n, i;
            this._shutdown = !1, this._aggregationSelector = (t = e?.aggregationSelector) !== null && t !== void 0 ? t : v_.DEFAULT_AGGREGATION_SELECTOR, this._aggregationTemporalitySelector = (n = e?.aggregationTemporalitySelector) !== null && n !== void 0 ? n : v_.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR, this._metricProducers = (i = e?.metricProducers) !== null && i !== void 0 ? i : [];
        }
        setMetricProducer(e) {
            if (this._sdkMetricProducer) throw new Error("MetricReader can not be bound to a MeterProvider again.");
            this._sdkMetricProducer = e, this.onInitialized();
        }
        selectAggregation(e) {
            return this._aggregationSelector(e);
        }
        selectAggregationTemporality(e) {
            return this._aggregationTemporalitySelector(e);
        }
        onInitialized() {}
        async collect(e) {
            if (this._sdkMetricProducer === void 0) throw new Error("MetricReader is not bound to a MetricProducer");
            if (this._shutdown) throw new Error("MetricReader is shutdown");
            let [t, ...n] = await Promise.all([
                this._sdkMetricProducer.collect({
                    timeoutMillis: e?.timeoutMillis
                }),
                ...this._metricProducers.map((a)=>a.collect({
                        timeoutMillis: e?.timeoutMillis
                    }))
            ]), i = t.errors.concat((0, $i.FlatMap)(n, (a)=>a.errors)), o = t.resourceMetrics.resource, s = t.resourceMetrics.scopeMetrics.concat((0, $i.FlatMap)(n, (a)=>a.resourceMetrics.scopeMetrics));
            return {
                resourceMetrics: {
                    resource: o,
                    scopeMetrics: s
                },
                errors: i
            };
        }
        async shutdown(e) {
            if (this._shutdown) {
                y_.diag.error("Cannot call shutdown twice.");
                return;
            }
            e?.timeoutMillis == null ? await this.onShutdown() : await (0, $i.callWithTimeout)(this.onShutdown(), e.timeoutMillis), this._shutdown = !0;
        }
        async forceFlush(e) {
            if (this._shutdown) {
                y_.diag.warn("Cannot forceFlush on already shutdown MetricReader.");
                return;
            }
            if (e?.timeoutMillis == null) {
                await this.onForceFlush();
                return;
            }
            await (0, $i.callWithTimeout)(this.onForceFlush(), e.timeoutMillis);
        }
    };
    Xi.MetricReader = Wa;
});
var M_ = c((Ki)=>{
    "use strict";
    Object.defineProperty(Ki, "__esModule", {
        value: !0
    });
    Ki.PeriodicExportingMetricReader = void 0;
    var I_ = (p(), f(d)), Wi = T(), aS = Ka(), L_ = me(), uS = (p(), f(d)), za = class extends aS.MetricReader {
        constructor(e){
            var t, n, i, o;
            if (super({
                aggregationSelector: (t = e.exporter.selectAggregation) === null || t === void 0 ? void 0 : t.bind(e.exporter),
                aggregationTemporalitySelector: (n = e.exporter.selectAggregationTemporality) === null || n === void 0 ? void 0 : n.bind(e.exporter),
                metricProducers: e.metricProducers
            }), e.exportIntervalMillis !== void 0 && e.exportIntervalMillis <= 0) throw Error("exportIntervalMillis must be greater than 0");
            if (e.exportTimeoutMillis !== void 0 && e.exportTimeoutMillis <= 0) throw Error("exportTimeoutMillis must be greater than 0");
            if (e.exportTimeoutMillis !== void 0 && e.exportIntervalMillis !== void 0 && e.exportIntervalMillis < e.exportTimeoutMillis) throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
            this._exportInterval = (i = e.exportIntervalMillis) !== null && i !== void 0 ? i : 6e4, this._exportTimeout = (o = e.exportTimeoutMillis) !== null && o !== void 0 ? o : 3e4, this._exporter = e.exporter;
        }
        async _runOnce() {
            try {
                await (0, L_.callWithTimeout)(this._doRun(), this._exportTimeout);
            } catch (e) {
                if (e instanceof L_.TimeoutError) {
                    I_.diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
                    return;
                }
                (0, Wi.globalErrorHandler)(e);
            }
        }
        async _doRun() {
            var e, t;
            let { resourceMetrics: n, errors: i } = await this.collect({
                timeoutMillis: this._exportTimeout
            });
            i.length > 0 && I_.diag.error("PeriodicExportingMetricReader: metrics collection errors", ...i);
            let o = async ()=>{
                let s = await Wi.internal._export(this._exporter, n);
                if (s.code !== Wi.ExportResultCode.SUCCESS) throw new Error(`PeriodicExportingMetricReader: metrics export failed (error ${s.error})`);
            };
            n.resource.asyncAttributesPending ? (t = (e = n.resource).waitForAsyncAttributes) === null || t === void 0 || t.call(e).then(o, (s)=>uS.diag.debug("Error while resolving async portion of resource: ", s)) : await o();
        }
        onInitialized() {
            this._interval = setInterval(()=>{
                this._runOnce();
            }, this._exportInterval), (0, Wi.unrefTimer)(this._interval);
        }
        async onForceFlush() {
            await this._runOnce(), await this._exporter.forceFlush();
        }
        async onShutdown() {
            this._interval && clearInterval(this._interval), await this._exporter.shutdown();
        }
    };
    Ki.PeriodicExportingMetricReader = za;
});
var N_ = c((zi)=>{
    "use strict";
    Object.defineProperty(zi, "__esModule", {
        value: !0
    });
    zi.InMemoryMetricExporter = void 0;
    var C_ = T(), Ya = class {
        constructor(e){
            this._shutdown = !1, this._metrics = [], this._aggregationTemporality = e;
        }
        export(e, t) {
            if (this._shutdown) {
                setTimeout(()=>t({
                        code: C_.ExportResultCode.FAILED
                    }), 0);
                return;
            }
            this._metrics.push(e), setTimeout(()=>t({
                    code: C_.ExportResultCode.SUCCESS
                }), 0);
        }
        getMetrics() {
            return this._metrics;
        }
        forceFlush() {
            return Promise.resolve();
        }
        reset() {
            this._metrics = [];
        }
        selectAggregationTemporality(e) {
            return this._aggregationTemporality;
        }
        shutdown() {
            return this._shutdown = !0, Promise.resolve();
        }
    };
    zi.InMemoryMetricExporter = Ya;
});
var x_ = c((Yi)=>{
    "use strict";
    Object.defineProperty(Yi, "__esModule", {
        value: !0
    });
    Yi.ConsoleMetricExporter = void 0;
    var w_ = T(), cS = Xa(), Qa = class r {
        constructor(e){
            var t;
            this._shutdown = !1, this._temporalitySelector = (t = e?.temporalitySelector) !== null && t !== void 0 ? t : cS.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
        }
        export(e, t) {
            if (this._shutdown) {
                setImmediate(t, {
                    code: w_.ExportResultCode.FAILED
                });
                return;
            }
            return r._sendMetrics(e, t);
        }
        forceFlush() {
            return Promise.resolve();
        }
        selectAggregationTemporality(e) {
            return this._temporalitySelector(e);
        }
        shutdown() {
            return this._shutdown = !0, Promise.resolve();
        }
        static _sendMetrics(e, t) {
            for (let n of e.scopeMetrics)for (let i of n.metrics)console.dir({
                descriptor: i.descriptor,
                dataPointType: i.dataPointType,
                dataPoints: i.dataPoints
            });
            t({
                code: w_.ExportResultCode.SUCCESS
            });
        }
    };
    Yi.ConsoleMetricExporter = Qa;
});
var D_ = c((Qi)=>{
    "use strict";
    Object.defineProperty(Qi, "__esModule", {
        value: !0
    });
    Qi.ViewRegistry = void 0;
    var Za = class {
        constructor(){
            this._registeredViews = [];
        }
        addView(e) {
            this._registeredViews.push(e);
        }
        findViews(e, t) {
            return this._registeredViews.filter((i)=>this._matchInstrument(i.instrumentSelector, e) && this._matchMeter(i.meterSelector, t));
        }
        _matchInstrument(e, t) {
            return (e.getType() === void 0 || t.type === e.getType()) && e.getNameFilter().match(t.name) && e.getUnitFilter().match(t.unit);
        }
        _matchMeter(e, t) {
            return e.getNameFilter().match(t.name) && (t.version === void 0 || e.getVersionFilter().match(t.version)) && (t.schemaUrl === void 0 || e.getSchemaUrlFilter().match(t.schemaUrl));
        }
    };
    Qi.ViewRegistry = Za;
});
var Zi = c((D)=>{
    "use strict";
    Object.defineProperty(D, "__esModule", {
        value: !0
    });
    D.isObservableInstrument = D.ObservableUpDownCounterInstrument = D.ObservableGaugeInstrument = D.ObservableCounterInstrument = D.ObservableInstrument = D.HistogramInstrument = D.CounterInstrument = D.UpDownCounterInstrument = D.SyncInstrument = void 0;
    var zt = (p(), f(d)), lS = T(), Yt = class {
        constructor(e, t){
            this._writableMetricStorage = e, this._descriptor = t;
        }
        _record(e, t = {}, n = zt.context.active()) {
            if (typeof e != "number") {
                zt.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${e}`);
                return;
            }
            this._descriptor.valueType === zt.ValueType.INT && !Number.isInteger(e) && (zt.diag.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`), e = Math.trunc(e), !Number.isInteger(e)) || this._writableMetricStorage.record(e, t, n, (0, lS.millisToHrTime)(Date.now()));
        }
    };
    D.SyncInstrument = Yt;
    var Ja = class extends Yt {
        add(e, t, n) {
            this._record(e, t, n);
        }
    };
    D.UpDownCounterInstrument = Ja;
    var eu = class extends Yt {
        add(e, t, n) {
            if (e < 0) {
                zt.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${e}`);
                return;
            }
            this._record(e, t, n);
        }
    };
    D.CounterInstrument = eu;
    var tu = class extends Yt {
        record(e, t, n) {
            if (e < 0) {
                zt.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${e}`);
                return;
            }
            this._record(e, t, n);
        }
    };
    D.HistogramInstrument = tu;
    var lt = class {
        constructor(e, t, n){
            this._observableRegistry = n, this._descriptor = e, this._metricStorages = t;
        }
        addCallback(e) {
            this._observableRegistry.addCallback(e, this);
        }
        removeCallback(e) {
            this._observableRegistry.removeCallback(e, this);
        }
    };
    D.ObservableInstrument = lt;
    var ru = class extends lt {
    };
    D.ObservableCounterInstrument = ru;
    var nu = class extends lt {
    };
    D.ObservableGaugeInstrument = nu;
    var iu = class extends lt {
    };
    D.ObservableUpDownCounterInstrument = iu;
    function dS(r) {
        return r instanceof lt;
    }
    D.isObservableInstrument = dS;
});
var U_ = c((Ji)=>{
    "use strict";
    Object.defineProperty(Ji, "__esModule", {
        value: !0
    });
    Ji.Meter = void 0;
    var se = Re(), Qt = Zi(), ou = class {
        constructor(e){
            this._meterSharedState = e;
        }
        createHistogram(e, t) {
            let n = (0, se.createInstrumentDescriptor)(e, se.InstrumentType.HISTOGRAM, t), i = this._meterSharedState.registerMetricStorage(n);
            return new Qt.HistogramInstrument(i, n);
        }
        createCounter(e, t) {
            let n = (0, se.createInstrumentDescriptor)(e, se.InstrumentType.COUNTER, t), i = this._meterSharedState.registerMetricStorage(n);
            return new Qt.CounterInstrument(i, n);
        }
        createUpDownCounter(e, t) {
            let n = (0, se.createInstrumentDescriptor)(e, se.InstrumentType.UP_DOWN_COUNTER, t), i = this._meterSharedState.registerMetricStorage(n);
            return new Qt.UpDownCounterInstrument(i, n);
        }
        createObservableGauge(e, t) {
            let n = (0, se.createInstrumentDescriptor)(e, se.InstrumentType.OBSERVABLE_GAUGE, t), i = this._meterSharedState.registerAsyncMetricStorage(n);
            return new Qt.ObservableGaugeInstrument(n, i, this._meterSharedState.observableRegistry);
        }
        createObservableCounter(e, t) {
            let n = (0, se.createInstrumentDescriptor)(e, se.InstrumentType.OBSERVABLE_COUNTER, t), i = this._meterSharedState.registerAsyncMetricStorage(n);
            return new Qt.ObservableCounterInstrument(n, i, this._meterSharedState.observableRegistry);
        }
        createObservableUpDownCounter(e, t) {
            let n = (0, se.createInstrumentDescriptor)(e, se.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, t), i = this._meterSharedState.registerAsyncMetricStorage(n);
            return new Qt.ObservableUpDownCounterInstrument(n, i, this._meterSharedState.observableRegistry);
        }
        addBatchObservableCallback(e, t) {
            this._meterSharedState.observableRegistry.addBatchCallback(e, t);
        }
        removeBatchObservableCallback(e, t) {
            this._meterSharedState.observableRegistry.removeBatchCallback(e, t);
        }
    };
    Ji.Meter = ou;
});
var au = c((eo)=>{
    "use strict";
    Object.defineProperty(eo, "__esModule", {
        value: !0
    });
    eo.MetricStorage = void 0;
    var _S = Re(), su = class {
        constructor(e){
            this._instrumentDescriptor = e;
        }
        getInstrumentDescriptor() {
            return this._instrumentDescriptor;
        }
        updateDescription(e) {
            this._instrumentDescriptor = (0, _S.createInstrumentDescriptor)(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
                description: e,
                valueType: this._instrumentDescriptor.valueType,
                unit: this._instrumentDescriptor.unit,
                advice: this._instrumentDescriptor.advice
            });
        }
    };
    eo.MetricStorage = su;
});
var xr = c((Zt)=>{
    "use strict";
    Object.defineProperty(Zt, "__esModule", {
        value: !0
    });
    Zt.AttributeHashMap = Zt.HashMap = void 0;
    var pS = me(), to = class {
        constructor(e){
            this._hash = e, this._valueMap = new Map, this._keyMap = new Map;
        }
        get(e, t) {
            return t ?? (t = this._hash(e)), this._valueMap.get(t);
        }
        getOrDefault(e, t) {
            let n = this._hash(e);
            if (this._valueMap.has(n)) return this._valueMap.get(n);
            let i = t();
            return this._keyMap.has(n) || this._keyMap.set(n, e), this._valueMap.set(n, i), i;
        }
        set(e, t, n) {
            n ?? (n = this._hash(e)), this._keyMap.has(n) || this._keyMap.set(n, e), this._valueMap.set(n, t);
        }
        has(e, t) {
            return t ?? (t = this._hash(e)), this._valueMap.has(t);
        }
        *keys() {
            let e = this._keyMap.entries(), t = e.next();
            for(; t.done !== !0;)yield [
                t.value[1],
                t.value[0]
            ], t = e.next();
        }
        *entries() {
            let e = this._valueMap.entries(), t = e.next();
            for(; t.done !== !0;)yield [
                this._keyMap.get(t.value[0]),
                t.value[1],
                t.value[0]
            ], t = e.next();
        }
        get size() {
            return this._valueMap.size;
        }
    };
    Zt.HashMap = to;
    var uu = class extends to {
        constructor(){
            super(pS.hashAttributes);
        }
    };
    Zt.AttributeHashMap = uu;
});
var du = c((ro)=>{
    "use strict";
    Object.defineProperty(ro, "__esModule", {
        value: !0
    });
    ro.DeltaMetricProcessor = void 0;
    var cu = xr(), lu = class {
        constructor(e){
            this._aggregator = e, this._activeCollectionStorage = new cu.AttributeHashMap, this._cumulativeMemoStorage = new cu.AttributeHashMap;
        }
        record(e, t, n, i) {
            let o = this._activeCollectionStorage.getOrDefault(t, ()=>this._aggregator.createAccumulation(i));
            o?.record(e);
        }
        batchCumulate(e, t) {
            Array.from(e.entries()).forEach(([n, i, o])=>{
                let s = this._aggregator.createAccumulation(t);
                s?.record(i);
                let a = s;
                if (this._cumulativeMemoStorage.has(n, o)) {
                    let u = this._cumulativeMemoStorage.get(n, o);
                    a = this._aggregator.diff(u, s);
                }
                if (this._activeCollectionStorage.has(n, o)) {
                    let u = this._activeCollectionStorage.get(n, o);
                    a = this._aggregator.merge(u, a);
                }
                this._cumulativeMemoStorage.set(n, s, o), this._activeCollectionStorage.set(n, a, o);
            });
        }
        collect() {
            let e = this._activeCollectionStorage;
            return this._activeCollectionStorage = new cu.AttributeHashMap, e;
        }
    };
    ro.DeltaMetricProcessor = lu;
});
var pu = c((no)=>{
    "use strict";
    Object.defineProperty(no, "__esModule", {
        value: !0
    });
    no.TemporalMetricProcessor = void 0;
    var hS = Mi(), fS = xr(), _u = class r {
        constructor(e, t){
            this._aggregator = e, this._unreportedAccumulations = new Map, this._reportHistory = new Map, t.forEach((n)=>{
                this._unreportedAccumulations.set(n, []);
            });
        }
        buildMetrics(e, t, n, i) {
            this._stashAccumulations(n);
            let o = this._getMergedUnreportedAccumulations(e), s = o, a;
            if (this._reportHistory.has(e)) {
                let l = this._reportHistory.get(e), _ = l.collectionTime;
                a = l.aggregationTemporality, a === hS.AggregationTemporality.CUMULATIVE ? s = r.merge(l.accumulations, o, this._aggregator) : s = r.calibrateStartTime(l.accumulations, o, _);
            } else a = e.selectAggregationTemporality(t.type);
            this._reportHistory.set(e, {
                accumulations: s,
                collectionTime: i,
                aggregationTemporality: a
            });
            let u = ES(s);
            if (u.length !== 0) return this._aggregator.toMetricData(t, a, u, i);
        }
        _stashAccumulations(e) {
            let t = this._unreportedAccumulations.keys();
            for (let n of t){
                let i = this._unreportedAccumulations.get(n);
                i === void 0 && (i = [], this._unreportedAccumulations.set(n, i)), i.push(e);
            }
        }
        _getMergedUnreportedAccumulations(e) {
            let t = new fS.AttributeHashMap, n = this._unreportedAccumulations.get(e);
            if (this._unreportedAccumulations.set(e, []), n === void 0) return t;
            for (let i of n)t = r.merge(t, i, this._aggregator);
            return t;
        }
        static merge(e, t, n) {
            let i = e, o = t.entries(), s = o.next();
            for(; s.done !== !0;){
                let [a, u, l] = s.value;
                if (e.has(a, l)) {
                    let _ = e.get(a, l), E = n.merge(_, u);
                    i.set(a, E, l);
                } else i.set(a, u, l);
                s = o.next();
            }
            return i;
        }
        static calibrateStartTime(e, t, n) {
            for (let [i, o] of e.keys()){
                let s = t.get(i, o);
                s?.setStartTime(n);
            }
            return t;
        }
    };
    no.TemporalMetricProcessor = _u;
    function ES(r) {
        return Array.from(r.entries());
    }
});
var B_ = c((io)=>{
    "use strict";
    Object.defineProperty(io, "__esModule", {
        value: !0
    });
    io.AsyncMetricStorage = void 0;
    var mS = au(), gS = du(), TS = pu(), SS = xr(), hu = class extends mS.MetricStorage {
        constructor(e, t, n, i){
            super(e), this._attributesProcessor = n, this._deltaMetricStorage = new gS.DeltaMetricProcessor(t), this._temporalMetricStorage = new TS.TemporalMetricProcessor(t, i);
        }
        record(e, t) {
            let n = new SS.AttributeHashMap;
            Array.from(e.entries()).forEach(([i, o])=>{
                n.set(this._attributesProcessor.process(i), o);
            }), this._deltaMetricStorage.batchCumulate(n, t);
        }
        collect(e, t) {
            let n = this._deltaMetricStorage.collect();
            return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, t);
        }
    };
    io.AsyncMetricStorage = hu;
});
var F_ = c((Q)=>{
    "use strict";
    Object.defineProperty(Q, "__esModule", {
        value: !0
    });
    Q.getConflictResolutionRecipe = Q.getDescriptionResolutionRecipe = Q.getTypeConflictResolutionRecipe = Q.getUnitConflictResolutionRecipe = Q.getValueTypeConflictResolutionRecipe = Q.getIncompatibilityDetails = void 0;
    function AS(r, e) {
        let t = "";
        return r.unit !== e.unit && (t += `	- Unit '${r.unit}' does not match '${e.unit}'
`), r.type !== e.type && (t += `	- Type '${r.type}' does not match '${e.type}'
`), r.valueType !== e.valueType && (t += `	- Value Type '${r.valueType}' does not match '${e.valueType}'
`), r.description !== e.description && (t += `	- Description '${r.description}' does not match '${e.description}'
`), t;
    }
    Q.getIncompatibilityDetails = AS;
    function q_(r, e) {
        return `	- use valueType '${r.valueType}' on instrument creation or use an instrument name other than '${e.name}'`;
    }
    Q.getValueTypeConflictResolutionRecipe = q_;
    function G_(r, e) {
        return `	- use unit '${r.unit}' on instrument creation or use an instrument name other than '${e.name}'`;
    }
    Q.getUnitConflictResolutionRecipe = G_;
    function V_(r, e) {
        let t = {
            name: e.name,
            type: e.type,
            unit: e.unit
        }, n = JSON.stringify(t);
        return `	- create a new view with a name other than '${r.name}' and InstrumentSelector '${n}'`;
    }
    Q.getTypeConflictResolutionRecipe = V_;
    function j_(r, e) {
        let t = {
            name: e.name,
            type: e.type,
            unit: e.unit
        }, n = JSON.stringify(t);
        return `	- create a new view with a name other than '${r.name}' and InstrumentSelector '${n}'
    	- OR - create a new view with the name ${r.name} and description '${r.description}' and InstrumentSelector ${n}
    	- OR - create a new view with the name ${e.name} and description '${r.description}' and InstrumentSelector ${n}`;
    }
    Q.getDescriptionResolutionRecipe = j_;
    function OS(r, e) {
        return r.valueType !== e.valueType ? q_(r, e) : r.unit !== e.unit ? G_(r, e) : r.type !== e.type ? V_(r, e) : r.description !== e.description ? j_(r, e) : "";
    }
    Q.getConflictResolutionRecipe = OS;
});
var k_ = c((so)=>{
    "use strict";
    Object.defineProperty(so, "__esModule", {
        value: !0
    });
    so.MetricStorageRegistry = void 0;
    var RS = Re(), H_ = (p(), f(d)), oo = F_(), fu = class r {
        constructor(){
            this._sharedRegistry = new Map, this._perCollectorRegistry = new Map;
        }
        static create() {
            return new r;
        }
        getStorages(e) {
            let t = [];
            for (let i of this._sharedRegistry.values())t = t.concat(i);
            let n = this._perCollectorRegistry.get(e);
            if (n != null) for (let i of n.values())t = t.concat(i);
            return t;
        }
        register(e) {
            this._registerStorage(e, this._sharedRegistry);
        }
        registerForCollector(e, t) {
            let n = this._perCollectorRegistry.get(e);
            n == null && (n = new Map, this._perCollectorRegistry.set(e, n)), this._registerStorage(t, n);
        }
        findOrUpdateCompatibleStorage(e) {
            let t = this._sharedRegistry.get(e.name);
            return t === void 0 ? null : this._findOrUpdateCompatibleStorage(e, t);
        }
        findOrUpdateCompatibleCollectorStorage(e, t) {
            let n = this._perCollectorRegistry.get(e);
            if (n === void 0) return null;
            let i = n.get(t.name);
            return i === void 0 ? null : this._findOrUpdateCompatibleStorage(t, i);
        }
        _registerStorage(e, t) {
            let n = e.getInstrumentDescriptor(), i = t.get(n.name);
            if (i === void 0) {
                t.set(n.name, [
                    e
                ]);
                return;
            }
            i.push(e);
        }
        _findOrUpdateCompatibleStorage(e, t) {
            let n = null;
            for (let i of t){
                let o = i.getInstrumentDescriptor();
                (0, RS.isDescriptorCompatibleWith)(o, e) ? (o.description !== e.description && (e.description.length > o.description.length && i.updateDescription(e.description), H_.diag.warn("A view or instrument with the name ", e.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, (0, oo.getIncompatibilityDetails)(o, e), `The longer description will be used.
To resolve the conflict:`, (0, oo.getConflictResolutionRecipe)(o, e))), n = i) : H_.diag.warn("A view or instrument with the name ", e.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, (0, oo.getIncompatibilityDetails)(o, e), `To resolve the conflict:
`, (0, oo.getConflictResolutionRecipe)(o, e));
            }
            return n;
        }
    };
    so.MetricStorageRegistry = fu;
});
var $_ = c((ao)=>{
    "use strict";
    Object.defineProperty(ao, "__esModule", {
        value: !0
    });
    ao.MultiMetricStorage = void 0;
    var Eu = class {
        constructor(e){
            this._backingStorages = e;
        }
        record(e, t, n, i) {
            this._backingStorages.forEach((o)=>{
                o.record(e, t, n, i);
            });
        }
    };
    ao.MultiMetricStorage = Eu;
});
var W_ = c((er)=>{
    "use strict";
    Object.defineProperty(er, "__esModule", {
        value: !0
    });
    er.BatchObservableResultImpl = er.ObservableResultImpl = void 0;
    var Jt = (p(), f(d)), X_ = xr(), bS = Zi(), mu = class {
        constructor(e, t){
            this._instrumentName = e, this._valueType = t, this._buffer = new X_.AttributeHashMap;
        }
        observe(e, t = {}) {
            if (typeof e != "number") {
                Jt.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${e}`);
                return;
            }
            this._valueType === Jt.ValueType.INT && !Number.isInteger(e) && (Jt.diag.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`), e = Math.trunc(e), !Number.isInteger(e)) || this._buffer.set(t, e);
        }
    };
    er.ObservableResultImpl = mu;
    var gu = class {
        constructor(){
            this._buffer = new Map;
        }
        observe(e, t, n = {}) {
            if (!(0, bS.isObservableInstrument)(e)) return;
            let i = this._buffer.get(e);
            if (i == null && (i = new X_.AttributeHashMap, this._buffer.set(e, i)), typeof t != "number") {
                Jt.diag.warn(`non-number value provided to metric ${e._descriptor.name}: ${t}`);
                return;
            }
            e._descriptor.valueType === Jt.ValueType.INT && !Number.isInteger(t) && (Jt.diag.warn(`INT value type cannot accept a floating-point value for ${e._descriptor.name}, ignoring the fractional digits.`), t = Math.trunc(t), !Number.isInteger(t)) || i.set(n, t);
        }
    };
    er.BatchObservableResultImpl = gu;
});
var Y_ = c((uo)=>{
    "use strict";
    Object.defineProperty(uo, "__esModule", {
        value: !0
    });
    uo.ObservableRegistry = void 0;
    var PS = (p(), f(d)), K_ = Zi(), z_ = W_(), Dr = me(), Tu = class {
        constructor(){
            this._callbacks = [], this._batchCallbacks = [];
        }
        addCallback(e, t) {
            this._findCallback(e, t) >= 0 || this._callbacks.push({
                callback: e,
                instrument: t
            });
        }
        removeCallback(e, t) {
            let n = this._findCallback(e, t);
            n < 0 || this._callbacks.splice(n, 1);
        }
        addBatchCallback(e, t) {
            let n = new Set(t.filter(K_.isObservableInstrument));
            if (n.size === 0) {
                PS.diag.error("BatchObservableCallback is not associated with valid instruments", t);
                return;
            }
            this._findBatchCallback(e, n) >= 0 || this._batchCallbacks.push({
                callback: e,
                instruments: n
            });
        }
        removeBatchCallback(e, t) {
            let n = new Set(t.filter(K_.isObservableInstrument)), i = this._findBatchCallback(e, n);
            i < 0 || this._batchCallbacks.splice(i, 1);
        }
        async observe(e, t) {
            let n = this._observeCallbacks(e, t), i = this._observeBatchCallbacks(e, t);
            return (await (0, Dr.PromiseAllSettled)([
                ...n,
                ...i
            ])).filter(Dr.isPromiseAllSettledRejectionResult).map((a)=>a.reason);
        }
        _observeCallbacks(e, t) {
            return this._callbacks.map(async ({ callback: n, instrument: i })=>{
                let o = new z_.ObservableResultImpl(i._descriptor.name, i._descriptor.valueType), s = Promise.resolve(n(o));
                t != null && (s = (0, Dr.callWithTimeout)(s, t)), await s, i._metricStorages.forEach((a)=>{
                    a.record(o._buffer, e);
                });
            });
        }
        _observeBatchCallbacks(e, t) {
            return this._batchCallbacks.map(async ({ callback: n, instruments: i })=>{
                let o = new z_.BatchObservableResultImpl, s = Promise.resolve(n(o));
                t != null && (s = (0, Dr.callWithTimeout)(s, t)), await s, i.forEach((a)=>{
                    let u = o._buffer.get(a);
                    u != null && a._metricStorages.forEach((l)=>{
                        l.record(u, e);
                    });
                });
            });
        }
        _findCallback(e, t) {
            return this._callbacks.findIndex((n)=>n.callback === e && n.instrument === t);
        }
        _findBatchCallback(e, t) {
            return this._batchCallbacks.findIndex((n)=>n.callback === e && (0, Dr.setEquals)(n.instruments, t));
        }
    };
    uo.ObservableRegistry = Tu;
});
var Q_ = c((co)=>{
    "use strict";
    Object.defineProperty(co, "__esModule", {
        value: !0
    });
    co.SyncMetricStorage = void 0;
    var yS = au(), vS = du(), IS = pu(), Su = class extends yS.MetricStorage {
        constructor(e, t, n, i){
            super(e), this._attributesProcessor = n, this._deltaMetricStorage = new vS.DeltaMetricProcessor(t), this._temporalMetricStorage = new IS.TemporalMetricProcessor(t, i);
        }
        record(e, t, n, i) {
            t = this._attributesProcessor.process(t, n), this._deltaMetricStorage.record(e, t, n, i);
        }
        collect(e, t) {
            let n = this._deltaMetricStorage.collect();
            return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, t);
        }
    };
    co.SyncMetricStorage = Su;
});
var Ou = c((De)=>{
    "use strict";
    Object.defineProperty(De, "__esModule", {
        value: !0
    });
    De.FilteringAttributesProcessor = De.NoopAttributesProcessor = De.AttributesProcessor = void 0;
    var Ur = class {
        static Noop() {
            return LS;
        }
    };
    De.AttributesProcessor = Ur;
    var lo = class extends Ur {
        process(e, t) {
            return e;
        }
    };
    De.NoopAttributesProcessor = lo;
    var Au = class extends Ur {
        constructor(e){
            super(), this._allowedAttributeNames = e;
        }
        process(e, t) {
            let n = {};
            return Object.keys(e).filter((i)=>this._allowedAttributeNames.includes(i)).forEach((i)=>n[i] = e[i]), n;
        }
    };
    De.FilteringAttributesProcessor = Au;
    var LS = new lo;
});
var Z_ = c((_o)=>{
    "use strict";
    Object.defineProperty(_o, "__esModule", {
        value: !0
    });
    _o.MeterSharedState = void 0;
    var MS = Re(), CS = U_(), NS = me(), wS = B_(), xS = k_(), DS = $_(), US = Y_(), BS = Q_(), qS = Ou(), Ru = class {
        constructor(e, t){
            this._meterProviderSharedState = e, this._instrumentationScope = t, this.metricStorageRegistry = new xS.MetricStorageRegistry, this.observableRegistry = new US.ObservableRegistry, this.meter = new CS.Meter(this);
        }
        registerMetricStorage(e) {
            let t = this._registerMetricStorage(e, BS.SyncMetricStorage);
            return t.length === 1 ? t[0] : new DS.MultiMetricStorage(t);
        }
        registerAsyncMetricStorage(e) {
            return this._registerMetricStorage(e, wS.AsyncMetricStorage);
        }
        async collect(e, t, n) {
            let i = await this.observableRegistry.observe(t, n?.timeoutMillis), o = this.metricStorageRegistry.getStorages(e);
            if (o.length === 0) return null;
            let s = o.map((a)=>a.collect(e, t)).filter(NS.isNotNullish);
            return s.length === 0 ? {
                errors: i
            } : {
                scopeMetrics: {
                    scope: this._instrumentationScope,
                    metrics: s
                },
                errors: i
            };
        }
        _registerMetricStorage(e, t) {
            let i = this._meterProviderSharedState.viewRegistry.findViews(e, this._instrumentationScope).map((o)=>{
                let s = (0, MS.createInstrumentDescriptorWithView)(o, e), a = this.metricStorageRegistry.findOrUpdateCompatibleStorage(s);
                if (a != null) return a;
                let u = o.aggregation.createAggregator(s), l = new t(s, u, o.attributesProcessor, this._meterProviderSharedState.metricCollectors);
                return this.metricStorageRegistry.register(l), l;
            });
            if (i.length === 0) {
                let s = this._meterProviderSharedState.selectAggregations(e.type).map(([a, u])=>{
                    let l = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(a, e);
                    if (l != null) return l;
                    let _ = u.createAggregator(e), E = new t(e, _, qS.AttributesProcessor.Noop(), [
                        a
                    ]);
                    return this.metricStorageRegistry.registerForCollector(a, E), E;
                });
                i = i.concat(s);
            }
            return i;
        }
    };
    _o.MeterSharedState = Ru;
});
var J_ = c((po)=>{
    "use strict";
    Object.defineProperty(po, "__esModule", {
        value: !0
    });
    po.MeterProviderSharedState = void 0;
    var GS = me(), VS = D_(), jS = Z_(), bu = class {
        constructor(e){
            this.resource = e, this.viewRegistry = new VS.ViewRegistry, this.metricCollectors = [], this.meterSharedStates = new Map;
        }
        getMeterSharedState(e) {
            let t = (0, GS.instrumentationScopeId)(e), n = this.meterSharedStates.get(t);
            return n == null && (n = new jS.MeterSharedState(this, e), this.meterSharedStates.set(t, n)), n;
        }
        selectAggregations(e) {
            let t = [];
            for (let n of this.metricCollectors)t.push([
                n,
                n.selectAggregation(e)
            ]);
            return t;
        }
    };
    po.MeterProviderSharedState = bu;
});
var ep = c((ho)=>{
    "use strict";
    Object.defineProperty(ho, "__esModule", {
        value: !0
    });
    ho.MetricCollector = void 0;
    var FS = T(), Pu = class {
        constructor(e, t){
            this._sharedState = e, this._metricReader = t;
        }
        async collect(e) {
            let t = (0, FS.millisToHrTime)(Date.now()), n = [], i = [], o = Array.from(this._sharedState.meterSharedStates.values()).map(async (s)=>{
                let a = await s.collect(this, t, e);
                a?.scopeMetrics != null && n.push(a.scopeMetrics), a?.errors != null && i.push(...a.errors);
            });
            return await Promise.all(o), {
                resourceMetrics: {
                    resource: this._sharedState.resource,
                    scopeMetrics: n
                },
                errors: i
            };
        }
        async forceFlush(e) {
            await this._metricReader.forceFlush(e);
        }
        async shutdown(e) {
            await this._metricReader.shutdown(e);
        }
        selectAggregationTemporality(e) {
            return this._metricReader.selectAggregationTemporality(e);
        }
        selectAggregation(e) {
            return this._metricReader.selectAggregation(e);
        }
    };
    ho.MetricCollector = Pu;
});
var rp = c((Eo)=>{
    "use strict";
    Object.defineProperty(Eo, "__esModule", {
        value: !0
    });
    Eo.MeterProvider = void 0;
    var fo = (p(), f(d)), tp = it(), HS = J_(), kS = ep(), yu = class {
        constructor(e){
            var t;
            this._shutdown = !1;
            let n = tp.Resource.default().merge((t = e?.resource) !== null && t !== void 0 ? t : tp.Resource.empty());
            if (this._sharedState = new HS.MeterProviderSharedState(n), e?.views != null && e.views.length > 0) for (let i of e.views)this._sharedState.viewRegistry.addView(i);
        }
        getMeter(e, t = "", n = {}) {
            return this._shutdown ? (fo.diag.warn("A shutdown MeterProvider cannot provide a Meter"), (0, fo.createNoopMeter)()) : this._sharedState.getMeterSharedState({
                name: e,
                version: t,
                schemaUrl: n.schemaUrl
            }).meter;
        }
        addMetricReader(e) {
            let t = new kS.MetricCollector(this._sharedState, e);
            e.setMetricProducer(t), this._sharedState.metricCollectors.push(t);
        }
        async shutdown(e) {
            if (this._shutdown) {
                fo.diag.warn("shutdown may only be called once per MeterProvider");
                return;
            }
            this._shutdown = !0, await Promise.all(this._sharedState.metricCollectors.map((t)=>t.shutdown(e)));
        }
        async forceFlush(e) {
            if (this._shutdown) {
                fo.diag.warn("invalid attempt to force flush after MeterProvider shutdown");
                return;
            }
            await Promise.all(this._sharedState.metricCollectors.map((t)=>t.forceFlush(e)));
        }
    };
    Eo.MeterProvider = yu;
});
var mo = c((tr)=>{
    "use strict";
    Object.defineProperty(tr, "__esModule", {
        value: !0
    });
    tr.ExactPredicate = tr.PatternPredicate = void 0;
    var $S = /[\^$\\.+?()[\]{}|]/g, vu = class r {
        constructor(e){
            e === "*" ? (this._matchAll = !0, this._regexp = /.*/) : (this._matchAll = !1, this._regexp = new RegExp(r.escapePattern(e)));
        }
        match(e) {
            return this._matchAll ? !0 : this._regexp.test(e);
        }
        static escapePattern(e) {
            return `^${e.replace($S, "\\$&").replace("*", ".*")}$`;
        }
        static hasWildcard(e) {
            return e.includes("*");
        }
    };
    tr.PatternPredicate = vu;
    var Iu = class {
        constructor(e){
            this._matchAll = e === void 0, this._pattern = e;
        }
        match(e) {
            return !!(this._matchAll || e === this._pattern);
        }
    };
    tr.ExactPredicate = Iu;
});
var ip = c((go)=>{
    "use strict";
    Object.defineProperty(go, "__esModule", {
        value: !0
    });
    go.InstrumentSelector = void 0;
    var np = mo(), Lu = class {
        constructor(e){
            var t;
            this._nameFilter = new np.PatternPredicate((t = e?.name) !== null && t !== void 0 ? t : "*"), this._type = e?.type, this._unitFilter = new np.ExactPredicate(e?.unit);
        }
        getType() {
            return this._type;
        }
        getNameFilter() {
            return this._nameFilter;
        }
        getUnitFilter() {
            return this._unitFilter;
        }
    };
    go.InstrumentSelector = Lu;
});
var op = c((To)=>{
    "use strict";
    Object.defineProperty(To, "__esModule", {
        value: !0
    });
    To.MeterSelector = void 0;
    var Mu = mo(), Cu = class {
        constructor(e){
            this._nameFilter = new Mu.ExactPredicate(e?.name), this._versionFilter = new Mu.ExactPredicate(e?.version), this._schemaUrlFilter = new Mu.ExactPredicate(e?.schemaUrl);
        }
        getNameFilter() {
            return this._nameFilter;
        }
        getVersionFilter() {
            return this._versionFilter;
        }
        getSchemaUrlFilter() {
            return this._schemaUrlFilter;
        }
    };
    To.MeterSelector = Cu;
});
var ap = c((So)=>{
    "use strict";
    Object.defineProperty(So, "__esModule", {
        value: !0
    });
    So.View = void 0;
    var XS = mo(), sp = Ou(), WS = ip(), KS = op(), zS = ki();
    function YS(r) {
        return r.instrumentName == null && r.instrumentType == null && r.instrumentUnit == null && r.meterName == null && r.meterVersion == null && r.meterSchemaUrl == null;
    }
    var Nu = class {
        constructor(e){
            var t;
            if (YS(e)) throw new Error("Cannot create view with no selector arguments supplied");
            if (e.name != null && (e?.instrumentName == null || XS.PatternPredicate.hasWildcard(e.instrumentName))) throw new Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.");
            e.attributeKeys != null ? this.attributesProcessor = new sp.FilteringAttributesProcessor(e.attributeKeys) : this.attributesProcessor = sp.AttributesProcessor.Noop(), this.name = e.name, this.description = e.description, this.aggregation = (t = e.aggregation) !== null && t !== void 0 ? t : zS.Aggregation.Default(), this.instrumentSelector = new WS.InstrumentSelector({
                name: e.instrumentName,
                type: e.instrumentType,
                unit: e.instrumentUnit
            }), this.meterSelector = new KS.MeterSelector({
                name: e.meterName,
                version: e.meterVersion,
                schemaUrl: e.meterSchemaUrl
            });
        }
    };
    So.View = Nu;
});
var wu = c((m)=>{
    "use strict";
    Object.defineProperty(m, "__esModule", {
        value: !0
    });
    m.TimeoutError = m.View = m.Aggregation = m.SumAggregation = m.LastValueAggregation = m.HistogramAggregation = m.DropAggregation = m.ExponentialHistogramAggregation = m.ExplicitBucketHistogramAggregation = m.DefaultAggregation = m.MeterProvider = m.InstrumentType = m.ConsoleMetricExporter = m.InMemoryMetricExporter = m.PeriodicExportingMetricReader = m.MetricReader = m.DataPointType = m.AggregationTemporality = void 0;
    var QS = Mi();
    Object.defineProperty(m, "AggregationTemporality", {
        enumerable: !0,
        get: function() {
            return QS.AggregationTemporality;
        }
    });
    var ZS = Dt();
    Object.defineProperty(m, "DataPointType", {
        enumerable: !0,
        get: function() {
            return ZS.DataPointType;
        }
    });
    var JS = Ka();
    Object.defineProperty(m, "MetricReader", {
        enumerable: !0,
        get: function() {
            return JS.MetricReader;
        }
    });
    var eA = M_();
    Object.defineProperty(m, "PeriodicExportingMetricReader", {
        enumerable: !0,
        get: function() {
            return eA.PeriodicExportingMetricReader;
        }
    });
    var tA = N_();
    Object.defineProperty(m, "InMemoryMetricExporter", {
        enumerable: !0,
        get: function() {
            return tA.InMemoryMetricExporter;
        }
    });
    var rA = x_();
    Object.defineProperty(m, "ConsoleMetricExporter", {
        enumerable: !0,
        get: function() {
            return rA.ConsoleMetricExporter;
        }
    });
    var nA = Re();
    Object.defineProperty(m, "InstrumentType", {
        enumerable: !0,
        get: function() {
            return nA.InstrumentType;
        }
    });
    var iA = rp();
    Object.defineProperty(m, "MeterProvider", {
        enumerable: !0,
        get: function() {
            return iA.MeterProvider;
        }
    });
    var Ue = ki();
    Object.defineProperty(m, "DefaultAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.DefaultAggregation;
        }
    });
    Object.defineProperty(m, "ExplicitBucketHistogramAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.ExplicitBucketHistogramAggregation;
        }
    });
    Object.defineProperty(m, "ExponentialHistogramAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.ExponentialHistogramAggregation;
        }
    });
    Object.defineProperty(m, "DropAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.DropAggregation;
        }
    });
    Object.defineProperty(m, "HistogramAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.HistogramAggregation;
        }
    });
    Object.defineProperty(m, "LastValueAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.LastValueAggregation;
        }
    });
    Object.defineProperty(m, "SumAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.SumAggregation;
        }
    });
    Object.defineProperty(m, "Aggregation", {
        enumerable: !0,
        get: function() {
            return Ue.Aggregation;
        }
    });
    var oA = ap();
    Object.defineProperty(m, "View", {
        enumerable: !0,
        get: function() {
            return oA.View;
        }
    });
    var sA = me();
    Object.defineProperty(m, "TimeoutError", {
        enumerable: !0,
        get: function() {
            return sA.TimeoutError;
        }
    });
});
var up = c((Ao)=>{
    "use strict";
    Object.defineProperty(Ao, "__esModule", {
        value: !0
    });
    Ao.AbstractAsyncHooksContextManager = void 0;
    var aA = ee("events"), uA = [
        "addListener",
        "on",
        "once",
        "prependListener",
        "prependOnceListener"
    ], xu = class {
        constructor(){
            this._kOtListeners = Symbol("OtListeners"), this._wrapped = !1;
        }
        bind(e, t) {
            return t instanceof aA.EventEmitter ? this._bindEventEmitter(e, t) : typeof t == "function" ? this._bindFunction(e, t) : t;
        }
        _bindFunction(e, t) {
            let n = this, i = function(...o) {
                return n.with(e, ()=>t.apply(this, o));
            };
            return Object.defineProperty(i, "length", {
                enumerable: !1,
                configurable: !0,
                writable: !1,
                value: t.length
            }), i;
        }
        _bindEventEmitter(e, t) {
            return this._getPatchMap(t) !== void 0 || (this._createPatchMap(t), uA.forEach((i)=>{
                t[i] !== void 0 && (t[i] = this._patchAddListener(t, t[i], e));
            }), typeof t.removeListener == "function" && (t.removeListener = this._patchRemoveListener(t, t.removeListener)), typeof t.off == "function" && (t.off = this._patchRemoveListener(t, t.off)), typeof t.removeAllListeners == "function" && (t.removeAllListeners = this._patchRemoveAllListeners(t, t.removeAllListeners))), t;
        }
        _patchRemoveListener(e, t) {
            let n = this;
            return function(i, o) {
                var s;
                let a = (s = n._getPatchMap(e)) === null || s === void 0 ? void 0 : s[i];
                if (a === void 0) return t.call(this, i, o);
                let u = a.get(o);
                return t.call(this, i, u || o);
            };
        }
        _patchRemoveAllListeners(e, t) {
            let n = this;
            return function(i) {
                let o = n._getPatchMap(e);
                return o !== void 0 && (arguments.length === 0 ? n._createPatchMap(e) : o[i] !== void 0 && delete o[i]), t.apply(this, arguments);
            };
        }
        _patchAddListener(e, t, n) {
            let i = this;
            return function(o, s) {
                if (i._wrapped) return t.call(this, o, s);
                let a = i._getPatchMap(e);
                a === void 0 && (a = i._createPatchMap(e));
                let u = a[o];
                u === void 0 && (u = new WeakMap, a[o] = u);
                let l = i.bind(n, s);
                u.set(s, l), i._wrapped = !0;
                try {
                    return t.call(this, o, l);
                } finally{
                    i._wrapped = !1;
                }
            };
        }
        _createPatchMap(e) {
            let t = Object.create(null);
            return e[this._kOtListeners] = t, t;
        }
        _getPatchMap(e) {
            return e[this._kOtListeners];
        }
    };
    Ao.AbstractAsyncHooksContextManager = xu;
});
var cp = c((Oo)=>{
    "use strict";
    Object.defineProperty(Oo, "__esModule", {
        value: !0
    });
    Oo.AsyncLocalStorageContextManager = void 0;
    var cA = (p(), f(d)), lA = ee("async_hooks"), dA = up(), Du = class extends dA.AbstractAsyncHooksContextManager {
        constructor(){
            super(), this._asyncLocalStorage = new lA.AsyncLocalStorage;
        }
        active() {
            var e;
            return (e = this._asyncLocalStorage.getStore()) !== null && e !== void 0 ? e : cA.ROOT_CONTEXT;
        }
        with(e, t, n, ...i) {
            let o = n == null ? t : t.bind(n);
            return this._asyncLocalStorage.run(e, o, ...i);
        }
        enable() {
            return this;
        }
        disable() {
            return this._asyncLocalStorage.disable(), this;
        }
    };
    Oo.AsyncLocalStorageContextManager = Du;
});
var qr = c((Be)=>{
    "use strict";
    Object.defineProperty(Be, "__esModule", {
        value: !0
    });
    Be.toAnyValue = Be.toKeyValue = Be.toAttributes = void 0;
    function mA(r) {
        return Object.keys(r).map((e)=>Bu(e, r[e]));
    }
    Be.toAttributes = mA;
    function Bu(r, e) {
        return {
            key: r,
            value: qu(e)
        };
    }
    Be.toKeyValue = Bu;
    function qu(r) {
        let e = typeof r;
        return e === "string" ? {
            stringValue: r
        } : e === "number" ? Number.isInteger(r) ? {
            intValue: r
        } : {
            doubleValue: r
        } : e === "boolean" ? {
            boolValue: r
        } : r instanceof Uint8Array ? {
            bytesValue: r
        } : Array.isArray(r) ? {
            arrayValue: {
                values: r.map(qu)
            }
        } : e === "object" && r != null ? {
            kvlistValue: {
                values: Object.entries(r).map(([t, n])=>Bu(t, n))
            }
        } : {};
    }
    Be.toAnyValue = qu;
});
var fp = c((qe)=>{
    "use strict";
    Object.defineProperty(qe, "__esModule", {
        value: !0
    });
    qe.toOtlpSpanEvent = qe.toOtlpLink = qe.sdkSpanToOtlpSpan = void 0;
    var Gu = qr();
    function gA(r, e) {
        var t;
        let n = r.spanContext(), i = r.status;
        return {
            traceId: e.encodeSpanContext(n.traceId),
            spanId: e.encodeSpanContext(n.spanId),
            parentSpanId: e.encodeOptionalSpanContext(r.parentSpanId),
            traceState: (t = n.traceState) === null || t === void 0 ? void 0 : t.serialize(),
            name: r.name,
            kind: r.kind == null ? 0 : r.kind + 1,
            startTimeUnixNano: e.encodeHrTime(r.startTime),
            endTimeUnixNano: e.encodeHrTime(r.endTime),
            attributes: (0, Gu.toAttributes)(r.attributes),
            droppedAttributesCount: r.droppedAttributesCount,
            events: r.events.map((o)=>hp(o, e)),
            droppedEventsCount: r.droppedEventsCount,
            status: {
                code: i.code,
                message: i.message
            },
            links: r.links.map((o)=>pp(o, e)),
            droppedLinksCount: r.droppedLinksCount
        };
    }
    qe.sdkSpanToOtlpSpan = gA;
    function pp(r, e) {
        var t;
        return {
            attributes: r.attributes ? (0, Gu.toAttributes)(r.attributes) : [],
            spanId: e.encodeSpanContext(r.context.spanId),
            traceId: e.encodeSpanContext(r.context.traceId),
            traceState: (t = r.context.traceState) === null || t === void 0 ? void 0 : t.serialize(),
            droppedAttributesCount: r.droppedAttributesCount || 0
        };
    }
    qe.toOtlpLink = pp;
    function hp(r, e) {
        return {
            attributes: r.attributes ? (0, Gu.toAttributes)(r.attributes) : [],
            name: r.name,
            timeUnixNano: e.encodeHrTime(r.time),
            droppedAttributesCount: r.droppedAttributesCount || 0
        };
    }
    qe.toOtlpSpanEvent = hp;
});
var Gr = c((ae)=>{
    "use strict";
    Object.defineProperty(ae, "__esModule", {
        value: !0
    });
    ae.getOtlpEncoder = ae.encodeAsString = ae.encodeAsLongBits = ae.toLongBits = ae.hrTimeToNanos = void 0;
    var Po = T(), TA = BigInt(1e9);
    function Vu(r) {
        return BigInt(r[0]) * TA + BigInt(r[1]);
    }
    ae.hrTimeToNanos = Vu;
    function mp(r) {
        let e = Number(BigInt.asUintN(32, r)), t = Number(BigInt.asUintN(32, r >> BigInt(32)));
        return {
            low: e,
            high: t
        };
    }
    ae.toLongBits = mp;
    function ju(r) {
        let e = Vu(r);
        return mp(e);
    }
    ae.encodeAsLongBits = ju;
    function gp(r) {
        return Vu(r).toString();
    }
    ae.encodeAsString = gp;
    var SA = typeof BigInt < "u" ? gp : Po.hrTimeToNanoseconds;
    function Ep(r) {
        return r;
    }
    function Tp(r) {
        if (r !== void 0) return (0, Po.hexToBase64)(r);
    }
    var AA = {
        encodeHrTime: ju,
        encodeSpanContext: Po.hexToBase64,
        encodeOptionalSpanContext: Tp
    };
    function OA(r) {
        var e, t;
        if (r === void 0) return AA;
        let n = (e = r.useLongBits) !== null && e !== void 0 ? e : !0, i = (t = r.useHex) !== null && t !== void 0 ? t : !1;
        return {
            encodeHrTime: n ? ju : SA,
            encodeSpanContext: i ? Ep : Po.hexToBase64,
            encodeOptionalSpanContext: i ? Ep : Tp
        };
    }
    ae.getOtlpEncoder = OA;
});
var vo = c((yo)=>{
    "use strict";
    Object.defineProperty(yo, "__esModule", {
        value: !0
    });
    yo.createExportTraceServiceRequest = void 0;
    var RA = qr(), bA = fp(), PA = Gr();
    function yA(r, e) {
        let t = (0, PA.getOtlpEncoder)(e);
        return {
            resourceSpans: IA(r, t)
        };
    }
    yo.createExportTraceServiceRequest = yA;
    function vA(r) {
        let e = new Map;
        for (let t of r){
            let n = e.get(t.resource);
            n || (n = new Map, e.set(t.resource, n));
            let i = `${t.instrumentationLibrary.name}@${t.instrumentationLibrary.version || ""}:${t.instrumentationLibrary.schemaUrl || ""}`, o = n.get(i);
            o || (o = [], n.set(i, o)), o.push(t);
        }
        return e;
    }
    function IA(r, e) {
        let t = vA(r), n = [], i = t.entries(), o = i.next();
        for(; !o.done;){
            let [s, a] = o.value, u = [], l = a.values(), _ = l.next();
            for(; !_.done;){
                let O = _.value;
                if (O.length > 0) {
                    let { name: x, version: J, schemaUrl: y } = O[0].instrumentationLibrary, k = O.map((S)=>(0, bA.sdkSpanToOtlpSpan)(S, e));
                    u.push({
                        scope: {
                            name: x,
                            version: J
                        },
                        spans: k,
                        schemaUrl: y
                    });
                }
                _ = l.next();
            }
            let E = {
                resource: {
                    attributes: (0, RA.toAttributes)(s.attributes),
                    droppedAttributesCount: 0
                },
                scopeSpans: u,
                schemaUrl: void 0
            };
            n.push(E), o = i.next();
        }
        return n;
    }
});
var Op = c((C)=>{
    "use strict";
    Object.defineProperty(C, "__esModule", {
        value: !0
    });
    C.parseRetryAfterToMills = C.isExportRetryable = C.invalidTimeout = C.configureExporterTimeout = C.appendRootPathToUrlIfNeeded = C.appendResourcePathToUrl = C.parseHeaders = C.DEFAULT_EXPORT_BACKOFF_MULTIPLIER = C.DEFAULT_EXPORT_MAX_BACKOFF = C.DEFAULT_EXPORT_INITIAL_BACKOFF = C.DEFAULT_EXPORT_MAX_ATTEMPTS = void 0;
    var Fu = (p(), f(d)), Sp = T(), Ap = 1e4;
    C.DEFAULT_EXPORT_MAX_ATTEMPTS = 5;
    C.DEFAULT_EXPORT_INITIAL_BACKOFF = 1e3;
    C.DEFAULT_EXPORT_MAX_BACKOFF = 5e3;
    C.DEFAULT_EXPORT_BACKOFF_MULTIPLIER = 1.5;
    function LA(r = {}) {
        let e = {};
        return Object.entries(r).forEach(([t, n])=>{
            typeof n < "u" ? e[t] = String(n) : Fu.diag.warn(`Header "${t}" has wrong value and will be ignored`);
        }), e;
    }
    C.parseHeaders = LA;
    function MA(r, e) {
        return r.endsWith("/") || (r = r + "/"), r + e;
    }
    C.appendResourcePathToUrl = MA;
    function CA(r) {
        try {
            let e = new URL(r);
            return e.pathname === "" && (e.pathname = e.pathname + "/"), e.toString();
        } catch  {
            return Fu.diag.warn(`Could not parse export URL: '${r}'`), r;
        }
    }
    C.appendRootPathToUrlIfNeeded = CA;
    function NA(r) {
        return typeof r == "number" ? r <= 0 ? Hu(r, Ap) : r : wA();
    }
    C.configureExporterTimeout = NA;
    function wA() {
        var r;
        let e = Number((r = (0, Sp.getEnv)().OTEL_EXPORTER_OTLP_TRACES_TIMEOUT) !== null && r !== void 0 ? r : (0, Sp.getEnv)().OTEL_EXPORTER_OTLP_TIMEOUT);
        return e <= 0 ? Hu(e, Ap) : e;
    }
    function Hu(r, e) {
        return Fu.diag.warn("Timeout must be greater than 0", r), e;
    }
    C.invalidTimeout = Hu;
    function xA(r) {
        return [
            429,
            502,
            503,
            504
        ].includes(r);
    }
    C.isExportRetryable = xA;
    function DA(r) {
        if (r == null) return -1;
        let e = Number.parseInt(r, 10);
        if (Number.isInteger(e)) return e > 0 ? e * 1e3 : -1;
        let t = new Date(r).getTime() - Date.now();
        return t >= 0 ? t : 0;
    }
    C.parseRetryAfterToMills = DA;
});
var bp = c((Io)=>{
    "use strict";
    Object.defineProperty(Io, "__esModule", {
        value: !0
    });
    Io.OTLPExporterBase = void 0;
    var Rp = (p(), f(d)), Vr = T(), UA = Op(), ku = class {
        constructor(e = {}){
            this._sendingPromises = [], this.url = this.getDefaultUrl(e), typeof e.hostname == "string" && (this.hostname = e.hostname), this.shutdown = this.shutdown.bind(this), this._shutdownOnce = new Vr.BindOnceFuture(this._shutdown, this), this._concurrencyLimit = typeof e.concurrencyLimit == "number" ? e.concurrencyLimit : 30, this.timeoutMillis = (0, UA.configureExporterTimeout)(e.timeoutMillis), this.onInit(e);
        }
        export(e, t) {
            if (this._shutdownOnce.isCalled) {
                t({
                    code: Vr.ExportResultCode.FAILED,
                    error: new Error("Exporter has been shutdown")
                });
                return;
            }
            if (this._sendingPromises.length >= this._concurrencyLimit) {
                t({
                    code: Vr.ExportResultCode.FAILED,
                    error: new Error("Concurrent export limit reached")
                });
                return;
            }
            this._export(e).then(()=>{
                t({
                    code: Vr.ExportResultCode.SUCCESS
                });
            }).catch((n)=>{
                t({
                    code: Vr.ExportResultCode.FAILED,
                    error: n
                });
            });
        }
        _export(e) {
            return new Promise((t, n)=>{
                try {
                    Rp.diag.debug("items to be sent", e), this.send(e, t, n);
                } catch (i) {
                    n(i);
                }
            });
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        forceFlush() {
            return Promise.all(this._sendingPromises).then(()=>{});
        }
        _shutdown() {
            return Rp.diag.debug("shutdown started"), this.onShutdown(), this.forceFlush();
        }
    };
    Io.OTLPExporterBase = ku;
});
var Ip = c((Ry, vp)=>{
    "use strict";
    vp.exports = GA;
    function GA(r, e) {
        for(var t = new Array(arguments.length - 1), n = 0, i = 2, o = !0; i < arguments.length;)t[n++] = arguments[i++];
        return new Promise(function(a, u) {
            t[n] = function(_) {
                if (o) if (o = !1, _) u(_);
                else {
                    for(var E = new Array(arguments.length - 1), O = 0; O < E.length;)E[O++] = arguments[O];
                    a.apply(null, E);
                }
            };
            try {
                r.apply(e || null, t);
            } catch (l) {
                o && (o = !1, u(l));
            }
        });
    }
});
var Np = c((Cp)=>{
    "use strict";
    var Mo = Cp;
    Mo.length = function(e) {
        var t = e.length;
        if (!t) return 0;
        for(var n = 0; --t % 4 > 1 && e.charAt(t) === "=";)++n;
        return Math.ceil(e.length * 3) / 4 - n;
    };
    var ir = new Array(64), Mp = new Array(123);
    for(de = 0; de < 64;)Mp[ir[de] = de < 26 ? de + 65 : de < 52 ? de + 71 : de < 62 ? de - 4 : de - 59 | 43] = de++;
    var de;
    Mo.encode = function(e, t, n) {
        for(var i = null, o = [], s = 0, a = 0, u; t < n;){
            var l = e[t++];
            switch(a){
                case 0:
                    o[s++] = ir[l >> 2], u = (l & 3) << 4, a = 1;
                    break;
                case 1:
                    o[s++] = ir[u | l >> 4], u = (l & 15) << 2, a = 2;
                    break;
                case 2:
                    o[s++] = ir[u | l >> 6], o[s++] = ir[l & 63], a = 0;
                    break;
            }
            s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), s = 0);
        }
        return a && (o[s++] = ir[u], o[s++] = 61, a === 1 && (o[s++] = 61)), i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, s));
    };
    var Lp = "invalid encoding";
    Mo.decode = function(e, t, n) {
        for(var i = n, o = 0, s, a = 0; a < e.length;){
            var u = e.charCodeAt(a++);
            if (u === 61 && o > 1) break;
            if ((u = Mp[u]) === void 0) throw Error(Lp);
            switch(o){
                case 0:
                    s = u, o = 1;
                    break;
                case 1:
                    t[n++] = s << 2 | (u & 48) >> 4, s = u, o = 2;
                    break;
                case 2:
                    t[n++] = (s & 15) << 4 | (u & 60) >> 2, s = u, o = 3;
                    break;
                case 3:
                    t[n++] = (s & 3) << 6 | u, o = 0;
                    break;
            }
        }
        if (o === 1) throw Error(Lp);
        return n - i;
    };
    Mo.test = function(e) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
    };
});
var xp = c((Py, wp)=>{
    "use strict";
    wp.exports = Co;
    function Co() {
        this._listeners = {};
    }
    Co.prototype.on = function(e, t, n) {
        return (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: n || this
        }), this;
    };
    Co.prototype.off = function(e, t) {
        if (e === void 0) this._listeners = {};
        else if (t === void 0) this._listeners[e] = [];
        else for(var n = this._listeners[e], i = 0; i < n.length;)n[i].fn === t ? n.splice(i, 1) : ++i;
        return this;
    };
    Co.prototype.emit = function(e) {
        var t = this._listeners[e];
        if (t) {
            for(var n = [], i = 1; i < arguments.length;)n.push(arguments[i++]);
            for(i = 0; i < t.length;)t[i].fn.apply(t[i++].ctx, n);
        }
        return this;
    };
});
var jp = c((yy, Vp)=>{
    "use strict";
    Vp.exports = Dp(Dp);
    function Dp(r) {
        return typeof Float32Array < "u" ? function() {
            var e = new Float32Array([
                -0
            ]), t = new Uint8Array(e.buffer), n = t[3] === 128;
            function i(u, l, _) {
                e[0] = u, l[_] = t[0], l[_ + 1] = t[1], l[_ + 2] = t[2], l[_ + 3] = t[3];
            }
            function o(u, l, _) {
                e[0] = u, l[_] = t[3], l[_ + 1] = t[2], l[_ + 2] = t[1], l[_ + 3] = t[0];
            }
            r.writeFloatLE = n ? i : o, r.writeFloatBE = n ? o : i;
            function s(u, l) {
                return t[0] = u[l], t[1] = u[l + 1], t[2] = u[l + 2], t[3] = u[l + 3], e[0];
            }
            function a(u, l) {
                return t[3] = u[l], t[2] = u[l + 1], t[1] = u[l + 2], t[0] = u[l + 3], e[0];
            }
            r.readFloatLE = n ? s : a, r.readFloatBE = n ? a : s;
        }() : function() {
            function e(n, i, o, s) {
                var a = i < 0 ? 1 : 0;
                if (a && (i = -i), i === 0) n(1 / i > 0 ? 0 : 2147483648, o, s);
                else if (isNaN(i)) n(2143289344, o, s);
                else if (i > 34028234663852886e22) n((a << 31 | 2139095040) >>> 0, o, s);
                else if (i < 11754943508222875e-54) n((a << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, o, s);
                else {
                    var u = Math.floor(Math.log(i) / Math.LN2), l = Math.round(i * Math.pow(2, -u) * 8388608) & 8388607;
                    n((a << 31 | u + 127 << 23 | l) >>> 0, o, s);
                }
            }
            r.writeFloatLE = e.bind(null, Up), r.writeFloatBE = e.bind(null, Bp);
            function t(n, i, o) {
                var s = n(i, o), a = (s >> 31) * 2 + 1, u = s >>> 23 & 255, l = s & 8388607;
                return u === 255 ? l ? NaN : a * (1 / 0) : u === 0 ? a * 1401298464324817e-60 * l : a * Math.pow(2, u - 150) * (l + 8388608);
            }
            r.readFloatLE = t.bind(null, qp), r.readFloatBE = t.bind(null, Gp);
        }(), typeof Float64Array < "u" ? function() {
            var e = new Float64Array([
                -0
            ]), t = new Uint8Array(e.buffer), n = t[7] === 128;
            function i(u, l, _) {
                e[0] = u, l[_] = t[0], l[_ + 1] = t[1], l[_ + 2] = t[2], l[_ + 3] = t[3], l[_ + 4] = t[4], l[_ + 5] = t[5], l[_ + 6] = t[6], l[_ + 7] = t[7];
            }
            function o(u, l, _) {
                e[0] = u, l[_] = t[7], l[_ + 1] = t[6], l[_ + 2] = t[5], l[_ + 3] = t[4], l[_ + 4] = t[3], l[_ + 5] = t[2], l[_ + 6] = t[1], l[_ + 7] = t[0];
            }
            r.writeDoubleLE = n ? i : o, r.writeDoubleBE = n ? o : i;
            function s(u, l) {
                return t[0] = u[l], t[1] = u[l + 1], t[2] = u[l + 2], t[3] = u[l + 3], t[4] = u[l + 4], t[5] = u[l + 5], t[6] = u[l + 6], t[7] = u[l + 7], e[0];
            }
            function a(u, l) {
                return t[7] = u[l], t[6] = u[l + 1], t[5] = u[l + 2], t[4] = u[l + 3], t[3] = u[l + 4], t[2] = u[l + 5], t[1] = u[l + 6], t[0] = u[l + 7], e[0];
            }
            r.readDoubleLE = n ? s : a, r.readDoubleBE = n ? a : s;
        }() : function() {
            function e(n, i, o, s, a, u) {
                var l = s < 0 ? 1 : 0;
                if (l && (s = -s), s === 0) n(0, a, u + i), n(1 / s > 0 ? 0 : 2147483648, a, u + o);
                else if (isNaN(s)) n(0, a, u + i), n(2146959360, a, u + o);
                else if (s > 17976931348623157e292) n(0, a, u + i), n((l << 31 | 2146435072) >>> 0, a, u + o);
                else {
                    var _;
                    if (s < 22250738585072014e-324) _ = s / 5e-324, n(_ >>> 0, a, u + i), n((l << 31 | _ / 4294967296) >>> 0, a, u + o);
                    else {
                        var E = Math.floor(Math.log(s) / Math.LN2);
                        E === 1024 && (E = 1023), _ = s * Math.pow(2, -E), n(_ * 4503599627370496 >>> 0, a, u + i), n((l << 31 | E + 1023 << 20 | _ * 1048576 & 1048575) >>> 0, a, u + o);
                    }
                }
            }
            r.writeDoubleLE = e.bind(null, Up, 0, 4), r.writeDoubleBE = e.bind(null, Bp, 4, 0);
            function t(n, i, o, s, a) {
                var u = n(s, a + i), l = n(s, a + o), _ = (l >> 31) * 2 + 1, E = l >>> 20 & 2047, O = 4294967296 * (l & 1048575) + u;
                return E === 2047 ? O ? NaN : _ * (1 / 0) : E === 0 ? _ * 5e-324 * O : _ * Math.pow(2, E - 1075) * (O + 4503599627370496);
            }
            r.readDoubleLE = t.bind(null, qp, 0, 4), r.readDoubleBE = t.bind(null, Gp, 4, 0);
        }(), r;
    }
    function Up(r, e, t) {
        e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24;
    }
    function Bp(r, e, t) {
        e[t] = r >>> 24, e[t + 1] = r >>> 16 & 255, e[t + 2] = r >>> 8 & 255, e[t + 3] = r & 255;
    }
    function qp(r, e) {
        return (r[e] | r[e + 1] << 8 | r[e + 2] << 16 | r[e + 3] << 24) >>> 0;
    }
    function Gp(r, e) {
        return (r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]) >>> 0;
    }
});
var Fp = c((exports, module)=>{
    "use strict";
    module.exports = inquire;
    function inquire(moduleName) {
        try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (r) {}
        return null;
    }
});
var kp = c((Hp)=>{
    "use strict";
    var Xu = Hp;
    Xu.length = function(e) {
        for(var t = 0, n = 0, i = 0; i < e.length; ++i)n = e.charCodeAt(i), n < 128 ? t += 1 : n < 2048 ? t += 2 : (n & 64512) === 55296 && (e.charCodeAt(i + 1) & 64512) === 56320 ? (++i, t += 4) : t += 3;
        return t;
    };
    Xu.read = function(e, t, n) {
        var i = n - t;
        if (i < 1) return "";
        for(var o = null, s = [], a = 0, u; t < n;)u = e[t++], u < 128 ? s[a++] = u : u > 191 && u < 224 ? s[a++] = (u & 31) << 6 | e[t++] & 63 : u > 239 && u < 365 ? (u = ((u & 7) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) - 65536, s[a++] = 55296 + (u >> 10), s[a++] = 56320 + (u & 1023)) : s[a++] = (u & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63, a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), a = 0);
        return o ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, a));
    };
    Xu.write = function(e, t, n) {
        for(var i = n, o, s, a = 0; a < e.length; ++a)o = e.charCodeAt(a), o < 128 ? t[n++] = o : o < 2048 ? (t[n++] = o >> 6 | 192, t[n++] = o & 63 | 128) : (o & 64512) === 55296 && ((s = e.charCodeAt(a + 1)) & 64512) === 56320 ? (o = 65536 + ((o & 1023) << 10) + (s & 1023), ++a, t[n++] = o >> 18 | 240, t[n++] = o >> 12 & 63 | 128, t[n++] = o >> 6 & 63 | 128, t[n++] = o & 63 | 128) : (t[n++] = o >> 12 | 224, t[n++] = o >> 6 & 63 | 128, t[n++] = o & 63 | 128);
        return n - i;
    };
});
var Xp = c((Iy, $p)=>{
    "use strict";
    $p.exports = VA;
    function VA(r, e, t) {
        var n = t || 8192, i = n >>> 1, o = null, s = n;
        return function(u) {
            if (u < 1 || u > i) return r(u);
            s + u > n && (o = r(n), s = 0);
            var l = e.call(o, s, s += u);
            return s & 7 && (s = (s | 7) + 1), l;
        };
    }
});
var Kp = c((Ly, Wp)=>{
    "use strict";
    Wp.exports = V;
    var jr = Ve();
    function V(r, e) {
        this.lo = r >>> 0, this.hi = e >>> 0;
    }
    var dt = V.zero = new V(0, 0);
    dt.toNumber = function() {
        return 0;
    };
    dt.zzEncode = dt.zzDecode = function() {
        return this;
    };
    dt.length = function() {
        return 1;
    };
    var jA = V.zeroHash = "\0\0\0\0\0\0\0\0";
    V.fromNumber = function(e) {
        if (e === 0) return dt;
        var t = e < 0;
        t && (e = -e);
        var n = e >>> 0, i = (e - n) / 4294967296 >>> 0;
        return t && (i = ~i >>> 0, n = ~n >>> 0, ++n > 4294967295 && (n = 0, ++i > 4294967295 && (i = 0))), new V(n, i);
    };
    V.from = function(e) {
        if (typeof e == "number") return V.fromNumber(e);
        if (jr.isString(e)) if (jr.Long) e = jr.Long.fromString(e);
        else return V.fromNumber(parseInt(e, 10));
        return e.low || e.high ? new V(e.low >>> 0, e.high >>> 0) : dt;
    };
    V.prototype.toNumber = function(e) {
        if (!e && this.hi >>> 31) {
            var t = ~this.lo + 1 >>> 0, n = ~this.hi >>> 0;
            return t || (n = n + 1 >>> 0), -(t + n * 4294967296);
        }
        return this.lo + this.hi * 4294967296;
    };
    V.prototype.toLong = function(e) {
        return jr.Long ? new jr.Long(this.lo | 0, this.hi | 0, !!e) : {
            low: this.lo | 0,
            high: this.hi | 0,
            unsigned: !!e
        };
    };
    var Ge = String.prototype.charCodeAt;
    V.fromHash = function(e) {
        return e === jA ? dt : new V((Ge.call(e, 0) | Ge.call(e, 1) << 8 | Ge.call(e, 2) << 16 | Ge.call(e, 3) << 24) >>> 0, (Ge.call(e, 4) | Ge.call(e, 5) << 8 | Ge.call(e, 6) << 16 | Ge.call(e, 7) << 24) >>> 0);
    };
    V.prototype.toHash = function() {
        return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
    };
    V.prototype.zzEncode = function() {
        var e = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this;
    };
    V.prototype.zzDecode = function() {
        var e = -(this.lo & 1);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this;
    };
    V.prototype.length = function() {
        var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
        return n === 0 ? t === 0 ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10;
    };
});
var Ve = c((Wu)=>{
    "use strict";
    var h = Wu;
    h.asPromise = Ip();
    h.base64 = Np();
    h.EventEmitter = xp();
    h.float = jp();
    h.inquire = Fp();
    h.utf8 = kp();
    h.pool = Xp();
    h.LongBits = Kp();
    h.isNode = !!(typeof global < "u" && global && global.process && global.process.versions && global.process.versions.node);
    h.global = h.isNode && global || "undefined" < "u" && window || typeof self < "u" && self || Wu;
    h.emptyArray = Object.freeze ? Object.freeze([]) : [];
    h.emptyObject = Object.freeze ? Object.freeze({}) : {};
    h.isInteger = Number.isInteger || function(e) {
        return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
    };
    h.isString = function(e) {
        return typeof e == "string" || e instanceof String;
    };
    h.isObject = function(e) {
        return e && typeof e == "object";
    };
    h.isset = h.isSet = function(e, t) {
        var n = e[t];
        return n != null && e.hasOwnProperty(t) ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0 : !1;
    };
    h.Buffer = function() {
        try {
            var r = h.inquire("buffer").Buffer;
            return r.prototype.utf8Write ? r : null;
        } catch  {
            return null;
        }
    }();
    h._Buffer_from = null;
    h._Buffer_allocUnsafe = null;
    h.newBuffer = function(e) {
        return typeof e == "number" ? h.Buffer ? h._Buffer_allocUnsafe(e) : new h.Array(e) : h.Buffer ? h._Buffer_from(e) : typeof Uint8Array > "u" ? e : new Uint8Array(e);
    };
    h.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
    h.Long = h.global.dcodeIO && h.global.dcodeIO.Long || h.global.Long || h.inquire("long");
    h.key2Re = /^true|false|0|1$/;
    h.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    h.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    h.longToHash = function(e) {
        return e ? h.LongBits.from(e).toHash() : h.LongBits.zeroHash;
    };
    h.longFromHash = function(e, t) {
        var n = h.LongBits.fromHash(e);
        return h.Long ? h.Long.fromBits(n.lo, n.hi, t) : n.toNumber(!!t);
    };
    function zp(r, e, t) {
        for(var n = Object.keys(e), i = 0; i < n.length; ++i)(r[n[i]] === void 0 || !t) && (r[n[i]] = e[n[i]]);
        return r;
    }
    h.merge = zp;
    h.lcFirst = function(e) {
        return e.charAt(0).toLowerCase() + e.substring(1);
    };
    function Yp(r) {
        function e(t, n) {
            if (!(this instanceof e)) return new e(t, n);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t;
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: new Error().stack || ""
            }), n && zp(this, n);
        }
        return e.prototype = Object.create(Error.prototype, {
            constructor: {
                value: e,
                writable: !0,
                enumerable: !1,
                configurable: !0
            },
            name: {
                get: function() {
                    return r;
                },
                set: void 0,
                enumerable: !1,
                configurable: !0
            },
            toString: {
                value: function() {
                    return this.name + ": " + this.message;
                },
                writable: !0,
                enumerable: !1,
                configurable: !0
            }
        }), e;
    }
    h.newError = Yp;
    h.ProtocolError = Yp("ProtocolError");
    h.oneOfGetter = function(e) {
        for(var t = {}, n = 0; n < e.length; ++n)t[e[n]] = 1;
        return function() {
            for(var i = Object.keys(this), o = i.length - 1; o > -1; --o)if (t[i[o]] === 1 && this[i[o]] !== void 0 && this[i[o]] !== null) return i[o];
        };
    };
    h.oneOfSetter = function(e) {
        return function(t) {
            for(var n = 0; n < e.length; ++n)e[n] !== t && delete this[e[n]];
        };
    };
    h.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    };
    h._configure = function() {
        var r = h.Buffer;
        if (!r) {
            h._Buffer_from = h._Buffer_allocUnsafe = null;
            return;
        }
        h._Buffer_from = r.from !== Uint8Array.from && r.from || function(t, n) {
            return new r(t, n);
        }, h._Buffer_allocUnsafe = r.allocUnsafe || function(t) {
            return new r(t);
        };
    };
});
var ec = c((Cy, eh)=>{
    "use strict";
    eh.exports = A;
    var ue = Ve(), Ku, No = ue.LongBits, Qp = ue.base64, Zp = ue.utf8;
    function Fr(r, e, t) {
        this.fn = r, this.len = e, this.next = void 0, this.val = t;
    }
    function Yu() {}
    function FA(r) {
        this.head = r.head, this.tail = r.tail, this.len = r.len, this.next = r.states;
    }
    function A() {
        this.len = 0, this.head = new Fr(Yu, 0, 0), this.tail = this.head, this.states = null;
    }
    var Jp = function() {
        return ue.Buffer ? function() {
            return (A.create = function() {
                return new Ku;
            })();
        } : function() {
            return new A;
        };
    };
    A.create = Jp();
    A.alloc = function(e) {
        return new ue.Array(e);
    };
    ue.Array !== Array && (A.alloc = ue.pool(A.alloc, ue.Array.prototype.subarray));
    A.prototype._push = function(e, t, n) {
        return this.tail = this.tail.next = new Fr(e, t, n), this.len += t, this;
    };
    function Qu(r, e, t) {
        e[t] = r & 255;
    }
    function HA(r, e, t) {
        for(; r > 127;)e[t++] = r & 127 | 128, r >>>= 7;
        e[t] = r;
    }
    function Zu(r, e) {
        this.len = r, this.next = void 0, this.val = e;
    }
    Zu.prototype = Object.create(Fr.prototype);
    Zu.prototype.fn = HA;
    A.prototype.uint32 = function(e) {
        return this.len += (this.tail = this.tail.next = new Zu((e = e >>> 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this;
    };
    A.prototype.int32 = function(e) {
        return e < 0 ? this._push(Ju, 10, No.fromNumber(e)) : this.uint32(e);
    };
    A.prototype.sint32 = function(e) {
        return this.uint32((e << 1 ^ e >> 31) >>> 0);
    };
    function Ju(r, e, t) {
        for(; r.hi;)e[t++] = r.lo & 127 | 128, r.lo = (r.lo >>> 7 | r.hi << 25) >>> 0, r.hi >>>= 7;
        for(; r.lo > 127;)e[t++] = r.lo & 127 | 128, r.lo = r.lo >>> 7;
        e[t++] = r.lo;
    }
    A.prototype.uint64 = function(e) {
        var t = No.from(e);
        return this._push(Ju, t.length(), t);
    };
    A.prototype.int64 = A.prototype.uint64;
    A.prototype.sint64 = function(e) {
        var t = No.from(e).zzEncode();
        return this._push(Ju, t.length(), t);
    };
    A.prototype.bool = function(e) {
        return this._push(Qu, 1, e ? 1 : 0);
    };
    function zu(r, e, t) {
        e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24;
    }
    A.prototype.fixed32 = function(e) {
        return this._push(zu, 4, e >>> 0);
    };
    A.prototype.sfixed32 = A.prototype.fixed32;
    A.prototype.fixed64 = function(e) {
        var t = No.from(e);
        return this._push(zu, 4, t.lo)._push(zu, 4, t.hi);
    };
    A.prototype.sfixed64 = A.prototype.fixed64;
    A.prototype.float = function(e) {
        return this._push(ue.float.writeFloatLE, 4, e);
    };
    A.prototype.double = function(e) {
        return this._push(ue.float.writeDoubleLE, 8, e);
    };
    var kA = ue.Array.prototype.set ? function(e, t, n) {
        t.set(e, n);
    } : function(e, t, n) {
        for(var i = 0; i < e.length; ++i)t[n + i] = e[i];
    };
    A.prototype.bytes = function(e) {
        var t = e.length >>> 0;
        if (!t) return this._push(Qu, 1, 0);
        if (ue.isString(e)) {
            var n = A.alloc(t = Qp.length(e));
            Qp.decode(e, n, 0), e = n;
        }
        return this.uint32(t)._push(kA, t, e);
    };
    A.prototype.string = function(e) {
        var t = Zp.length(e);
        return t ? this.uint32(t)._push(Zp.write, t, e) : this._push(Qu, 1, 0);
    };
    A.prototype.fork = function() {
        return this.states = new FA(this), this.head = this.tail = new Fr(Yu, 0, 0), this.len = 0, this;
    };
    A.prototype.reset = function() {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Fr(Yu, 0, 0), this.len = 0), this;
    };
    A.prototype.ldelim = function() {
        var e = this.head, t = this.tail, n = this.len;
        return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this;
    };
    A.prototype.finish = function() {
        for(var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;)e.fn(e.val, t, n), n += e.len, e = e.next;
        return t;
    };
    A._configure = function(r) {
        Ku = r, A.create = Jp(), Ku._configure();
    };
});
var nh = c((Ny, rh)=>{
    "use strict";
    rh.exports = Se;
    var th = ec();
    (Se.prototype = Object.create(th.prototype)).constructor = Se;
    var je = Ve();
    function Se() {
        th.call(this);
    }
    Se._configure = function() {
        Se.alloc = je._Buffer_allocUnsafe, Se.writeBytesBuffer = je.Buffer && je.Buffer.prototype instanceof Uint8Array && je.Buffer.prototype.set.name === "set" ? function(e, t, n) {
            t.set(e, n);
        } : function(e, t, n) {
            if (e.copy) e.copy(t, n, 0, e.length);
            else for(var i = 0; i < e.length;)t[n++] = e[i++];
        };
    };
    Se.prototype.bytes = function(e) {
        je.isString(e) && (e = je._Buffer_from(e, "base64"));
        var t = e.length >>> 0;
        return this.uint32(t), t && this._push(Se.writeBytesBuffer, t, e), this;
    };
    function $A(r, e, t) {
        r.length < 40 ? je.utf8.write(r, e, t) : e.utf8Write ? e.utf8Write(r, t) : e.write(r, t);
    }
    Se.prototype.string = function(e) {
        var t = je.Buffer.byteLength(e);
        return this.uint32(t), t && this._push($A, t, e), this;
    };
    Se._configure();
});
var nc = c((wy, uh)=>{
    "use strict";
    uh.exports = w;
    var _e = Ve(), rc, sh = _e.LongBits, XA = _e.utf8;
    function pe(r, e) {
        return RangeError("index out of range: " + r.pos + " + " + (e || 1) + " > " + r.len);
    }
    function w(r) {
        this.buf = r, this.pos = 0, this.len = r.length;
    }
    var ih = typeof Uint8Array < "u" ? function(e) {
        if (e instanceof Uint8Array || Array.isArray(e)) return new w(e);
        throw Error("illegal buffer");
    } : function(e) {
        if (Array.isArray(e)) return new w(e);
        throw Error("illegal buffer");
    }, ah = function() {
        return _e.Buffer ? function(t) {
            return (w.create = function(i) {
                return _e.Buffer.isBuffer(i) ? new rc(i) : ih(i);
            })(t);
        } : ih;
    };
    w.create = ah();
    w.prototype._slice = _e.Array.prototype.subarray || _e.Array.prototype.slice;
    w.prototype.uint32 = function() {
        var e = 4294967295;
        return function() {
            if (e = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (e = (e | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return e;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, pe(this, 10);
            return e;
        };
    }();
    w.prototype.int32 = function() {
        return this.uint32() | 0;
    };
    w.prototype.sint32 = function() {
        var e = this.uint32();
        return e >>> 1 ^ -(e & 1) | 0;
    };
    function tc() {
        var r = new sh(0, 0), e = 0;
        if (this.len - this.pos > 4) {
            for(; e < 4; ++e)if (r.lo = (r.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0, this.buf[this.pos++] < 128) return r;
            if (r.lo = (r.lo | (this.buf[this.pos] & 127) << 28) >>> 0, r.hi = (r.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return r;
            e = 0;
        } else {
            for(; e < 3; ++e){
                if (this.pos >= this.len) throw pe(this);
                if (r.lo = (r.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0, this.buf[this.pos++] < 128) return r;
            }
            return r.lo = (r.lo | (this.buf[this.pos++] & 127) << e * 7) >>> 0, r;
        }
        if (this.len - this.pos > 4) {
            for(; e < 5; ++e)if (r.hi = (r.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return r;
        } else for(; e < 5; ++e){
            if (this.pos >= this.len) throw pe(this);
            if (r.hi = (r.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return r;
        }
        throw Error("invalid varint encoding");
    }
    w.prototype.bool = function() {
        return this.uint32() !== 0;
    };
    function wo(r, e) {
        return (r[e - 4] | r[e - 3] << 8 | r[e - 2] << 16 | r[e - 1] << 24) >>> 0;
    }
    w.prototype.fixed32 = function() {
        if (this.pos + 4 > this.len) throw pe(this, 4);
        return wo(this.buf, this.pos += 4);
    };
    w.prototype.sfixed32 = function() {
        if (this.pos + 4 > this.len) throw pe(this, 4);
        return wo(this.buf, this.pos += 4) | 0;
    };
    function oh() {
        if (this.pos + 8 > this.len) throw pe(this, 8);
        return new sh(wo(this.buf, this.pos += 4), wo(this.buf, this.pos += 4));
    }
    w.prototype.float = function() {
        if (this.pos + 4 > this.len) throw pe(this, 4);
        var e = _e.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, e;
    };
    w.prototype.double = function() {
        if (this.pos + 8 > this.len) throw pe(this, 4);
        var e = _e.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, e;
    };
    w.prototype.bytes = function() {
        var e = this.uint32(), t = this.pos, n = this.pos + e;
        if (n > this.len) throw pe(this, e);
        if (this.pos += e, Array.isArray(this.buf)) return this.buf.slice(t, n);
        if (t === n) {
            var i = _e.Buffer;
            return i ? i.alloc(0) : new this.buf.constructor(0);
        }
        return this._slice.call(this.buf, t, n);
    };
    w.prototype.string = function() {
        var e = this.bytes();
        return XA.read(e, 0, e.length);
    };
    w.prototype.skip = function(e) {
        if (typeof e == "number") {
            if (this.pos + e > this.len) throw pe(this, e);
            this.pos += e;
        } else do if (this.pos >= this.len) throw pe(this);
        while (this.buf[this.pos++] & 128)
        return this;
    };
    w.prototype.skipType = function(r) {
        switch(r){
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for(; (r = this.uint32() & 7) !== 4;)this.skipType(r);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + r + " at offset " + this.pos);
        }
        return this;
    };
    w._configure = function(r) {
        rc = r, w.create = ah(), rc._configure();
        var e = _e.Long ? "toLong" : "toNumber";
        _e.merge(w.prototype, {
            int64: function() {
                return tc.call(this)[e](!1);
            },
            uint64: function() {
                return tc.call(this)[e](!0);
            },
            sint64: function() {
                return tc.call(this).zzDecode()[e](!1);
            },
            fixed64: function() {
                return oh.call(this)[e](!0);
            },
            sfixed64: function() {
                return oh.call(this)[e](!1);
            }
        });
    };
});
var _h = c((xy, dh)=>{
    "use strict";
    dh.exports = _t;
    var lh = nc();
    (_t.prototype = Object.create(lh.prototype)).constructor = _t;
    var ch = Ve();
    function _t(r) {
        lh.call(this, r);
    }
    _t._configure = function() {
        ch.Buffer && (_t.prototype._slice = ch.Buffer.prototype.slice);
    };
    _t.prototype.string = function() {
        var e = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
    };
    _t._configure();
});
var hh = c((Dy, ph)=>{
    "use strict";
    ph.exports = Hr;
    var ic = Ve();
    (Hr.prototype = Object.create(ic.EventEmitter.prototype)).constructor = Hr;
    function Hr(r, e, t) {
        if (typeof r != "function") throw TypeError("rpcImpl must be a function");
        ic.EventEmitter.call(this), this.rpcImpl = r, this.requestDelimited = !!e, this.responseDelimited = !!t;
    }
    Hr.prototype.rpcCall = function r(e, t, n, i, o) {
        if (!i) throw TypeError("request must be specified");
        var s = this;
        if (!o) return ic.asPromise(r, s, e, t, n, i);
        if (!s.rpcImpl) {
            setTimeout(function() {
                o(Error("already ended"));
            }, 0);
            return;
        }
        try {
            return s.rpcImpl(e, t[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(u, l) {
                if (u) return s.emit("error", u, e), o(u);
                if (l === null) {
                    s.end(!0);
                    return;
                }
                if (!(l instanceof n)) try {
                    l = n[s.responseDelimited ? "decodeDelimited" : "decode"](l);
                } catch (_) {
                    return s.emit("error", _, e), o(_);
                }
                return s.emit("data", l, e), o(null, l);
            });
        } catch (a) {
            s.emit("error", a, e), setTimeout(function() {
                o(a);
            }, 0);
            return;
        }
    };
    Hr.prototype.end = function(e) {
        return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
    };
});
var Eh = c((fh)=>{
    "use strict";
    var WA = fh;
    WA.Service = hh();
});
var gh = c((By, mh)=>{
    "use strict";
    mh.exports = {};
});
var Ah = c((Sh)=>{
    "use strict";
    var Z = Sh;
    Z.build = "minimal";
    Z.Writer = ec();
    Z.BufferWriter = nh();
    Z.Reader = nc();
    Z.BufferReader = _h();
    Z.util = Ve();
    Z.rpc = Eh();
    Z.roots = gh();
    Z.configure = Th;
    function Th() {
        Z.util._configure(), Z.Writer._configure(Z.BufferWriter), Z.Reader._configure(Z.BufferReader);
    }
    Th();
});
var Rh = c((Gy, Oh)=>{
    "use strict";
    Oh.exports = Ah();
});
var Nh = c((Ch)=>{
    "use strict";
    Object.defineProperty(Ch, "__esModule", {
        value: !0
    });
});
var xh = c((wh)=>{
    "use strict";
    Object.defineProperty(wh, "__esModule", {
        value: !0
    });
});
var Uh = c((Dh)=>{
    "use strict";
    Object.defineProperty(Dh, "__esModule", {
        value: !0
    });
});
var Bh = c(($r)=>{
    "use strict";
    Object.defineProperty($r, "__esModule", {
        value: !0
    });
    $r.ESpanKind = void 0;
    var lO;
    (function(r) {
        r[r.SPAN_KIND_UNSPECIFIED = 0] = "SPAN_KIND_UNSPECIFIED", r[r.SPAN_KIND_INTERNAL = 1] = "SPAN_KIND_INTERNAL", r[r.SPAN_KIND_SERVER = 2] = "SPAN_KIND_SERVER", r[r.SPAN_KIND_CLIENT = 3] = "SPAN_KIND_CLIENT", r[r.SPAN_KIND_PRODUCER = 4] = "SPAN_KIND_PRODUCER", r[r.SPAN_KIND_CONSUMER = 5] = "SPAN_KIND_CONSUMER";
    })(lO = $r.ESpanKind || ($r.ESpanKind = {}));
});
var Gh = c((qh)=>{
    "use strict";
    Object.defineProperty(qh, "__esModule", {
        value: !0
    });
});
var kh = c((Fe)=>{
    "use strict";
    Object.defineProperty(Fe, "__esModule", {
        value: !0
    });
    Fe.toMetric = Fe.toScopeMetrics = Fe.toResourceMetrics = void 0;
    var Vh = (p(), f(d)), ar = wu(), Do = qr(), dO = Gr();
    function _O(r, e) {
        let t = (0, dO.getOtlpEncoder)(e);
        return {
            resource: {
                attributes: (0, Do.toAttributes)(r.resource.attributes),
                droppedAttributesCount: 0
            },
            schemaUrl: void 0,
            scopeMetrics: Fh(r.scopeMetrics, t)
        };
    }
    Fe.toResourceMetrics = _O;
    function Fh(r, e) {
        return Array.from(r.map((t)=>({
                scope: {
                    name: t.scope.name,
                    version: t.scope.version
                },
                metrics: t.metrics.map((n)=>Hh(n, e)),
                schemaUrl: t.scope.schemaUrl
            })));
    }
    Fe.toScopeMetrics = Fh;
    function Hh(r, e) {
        let t = {
            name: r.descriptor.name,
            description: r.descriptor.description,
            unit: r.descriptor.unit
        }, n = EO(r.aggregationTemporality);
        switch(r.dataPointType){
            case ar.DataPointType.SUM:
                t.sum = {
                    aggregationTemporality: n,
                    isMonotonic: r.isMonotonic,
                    dataPoints: jh(r, e)
                };
                break;
            case ar.DataPointType.GAUGE:
                t.gauge = {
                    dataPoints: jh(r, e)
                };
                break;
            case ar.DataPointType.HISTOGRAM:
                t.histogram = {
                    aggregationTemporality: n,
                    dataPoints: hO(r, e)
                };
                break;
            case ar.DataPointType.EXPONENTIAL_HISTOGRAM:
                t.exponentialHistogram = {
                    aggregationTemporality: n,
                    dataPoints: fO(r, e)
                };
                break;
        }
        return t;
    }
    Fe.toMetric = Hh;
    function pO(r, e, t) {
        let n = {
            attributes: (0, Do.toAttributes)(r.attributes),
            startTimeUnixNano: t.encodeHrTime(r.startTime),
            timeUnixNano: t.encodeHrTime(r.endTime)
        };
        switch(e){
            case Vh.ValueType.INT:
                n.asInt = r.value;
                break;
            case Vh.ValueType.DOUBLE:
                n.asDouble = r.value;
                break;
        }
        return n;
    }
    function jh(r, e) {
        return r.dataPoints.map((t)=>pO(t, r.descriptor.valueType, e));
    }
    function hO(r, e) {
        return r.dataPoints.map((t)=>{
            let n = t.value;
            return {
                attributes: (0, Do.toAttributes)(t.attributes),
                bucketCounts: n.buckets.counts,
                explicitBounds: n.buckets.boundaries,
                count: n.count,
                sum: n.sum,
                min: n.min,
                max: n.max,
                startTimeUnixNano: e.encodeHrTime(t.startTime),
                timeUnixNano: e.encodeHrTime(t.endTime)
            };
        });
    }
    function fO(r, e) {
        return r.dataPoints.map((t)=>{
            let n = t.value;
            return {
                attributes: (0, Do.toAttributes)(t.attributes),
                count: n.count,
                min: n.min,
                max: n.max,
                sum: n.sum,
                positive: {
                    offset: n.positive.offset,
                    bucketCounts: n.positive.bucketCounts
                },
                negative: {
                    offset: n.negative.offset,
                    bucketCounts: n.negative.bucketCounts
                },
                scale: n.scale,
                zeroCount: n.zeroCount,
                startTimeUnixNano: e.encodeHrTime(t.startTime),
                timeUnixNano: e.encodeHrTime(t.endTime)
            };
        });
    }
    function EO(r) {
        switch(r){
            case ar.AggregationTemporality.DELTA:
                return 1;
            case ar.AggregationTemporality.CUMULATIVE:
                return 2;
        }
    }
});
var $h = c((Uo)=>{
    "use strict";
    Object.defineProperty(Uo, "__esModule", {
        value: !0
    });
    Uo.createExportMetricsServiceRequest = void 0;
    var mO = kh();
    function gO(r, e) {
        return {
            resourceMetrics: r.map((t)=>(0, mO.toResourceMetrics)(t, e))
        };
    }
    Uo.createExportMetricsServiceRequest = gO;
});
var Wh = c((ur)=>{
    "use strict";
    Object.defineProperty(ur, "__esModule", {
        value: !0
    });
    ur.toLogAttributes = ur.createExportLogsServiceRequest = void 0;
    var TO = Gr(), cc = qr();
    function SO(r, e) {
        let t = (0, TO.getOtlpEncoder)(e);
        return {
            resourceLogs: OO(r, t)
        };
    }
    ur.createExportLogsServiceRequest = SO;
    function AO(r) {
        let e = new Map;
        for (let t of r){
            let { resource: n, instrumentationScope: { name: i, version: o = "", schemaUrl: s = "" } } = t, a = e.get(n);
            a || (a = new Map, e.set(n, a));
            let u = `${i}@${o}:${s}`, l = a.get(u);
            l || (l = [], a.set(u, l)), l.push(t);
        }
        return e;
    }
    function OO(r, e) {
        let t = AO(r);
        return Array.from(t, ([n, i])=>({
                resource: {
                    attributes: (0, cc.toAttributes)(n.attributes),
                    droppedAttributesCount: 0
                },
                scopeLogs: Array.from(i, ([, o])=>{
                    let { instrumentationScope: { name: s, version: a, schemaUrl: u } } = o[0];
                    return {
                        scope: {
                            name: s,
                            version: a
                        },
                        logRecords: o.map((l)=>RO(l, e)),
                        schemaUrl: u
                    };
                }),
                schemaUrl: void 0
            }));
    }
    function RO(r, e) {
        var t, n, i;
        return {
            timeUnixNano: e.encodeHrTime(r.hrTime),
            observedTimeUnixNano: e.encodeHrTime(r.hrTimeObserved),
            severityNumber: r.severityNumber,
            severityText: r.severityText,
            body: (0, cc.toAnyValue)(r.body),
            attributes: Xh(r.attributes),
            droppedAttributesCount: r.droppedAttributesCount,
            flags: (t = r.spanContext) === null || t === void 0 ? void 0 : t.traceFlags,
            traceId: e.encodeOptionalSpanContext((n = r.spanContext) === null || n === void 0 ? void 0 : n.traceId),
            spanId: e.encodeOptionalSpanContext((i = r.spanContext) === null || i === void 0 ? void 0 : i.spanId)
        };
    }
    function Xh(r) {
        return Object.keys(r).map((e)=>(0, cc.toKeyValue)(e, r[e]));
    }
    ur.toLogAttributes = Xh;
});
var Kh = c((j)=>{
    "use strict";
    var bO = j && j.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), cr = j && j.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && bO(e, r, t);
    };
    Object.defineProperty(j, "__esModule", {
        value: !0
    });
    j.createExportLogsServiceRequest = j.createExportMetricsServiceRequest = j.createExportTraceServiceRequest = void 0;
    cr(Nh(), j);
    cr(Gr(), j);
    cr(xh(), j);
    cr(Uh(), j);
    cr(Bh(), j);
    cr(Gh(), j);
    var PO = vo();
    Object.defineProperty(j, "createExportTraceServiceRequest", {
        enumerable: !0,
        get: function() {
            return PO.createExportTraceServiceRequest;
        }
    });
    var yO = $h();
    Object.defineProperty(j, "createExportMetricsServiceRequest", {
        enumerable: !0,
        get: function() {
            return yO.createExportMetricsServiceRequest;
        }
    });
    var vO = Wh();
    Object.defineProperty(j, "createExportLogsServiceRequest", {
        enumerable: !0,
        get: function() {
            return vO.createExportLogsServiceRequest;
        }
    });
});
var N = q(la(), 1);
p();
fa();
var Zh = q(Vd(), 1), dr = q(it(), 1), Jh = q(r_(), 1), ef = q(wu(), 1), lc = q(oe(), 1), Vo = q(Qr(), 1), tf = q(cp(), 1), He = q(T(), 1);
p();
var _A = Symbol.for("@vercel/request-context");
function Te() {
    return globalThis[_A]?.get();
}
var Uu = q(oe(), 1);
function Ro(r) {
    return Object.fromEntries(Object.entries(r).filter(([e, t])=>t !== void 0));
}
function lp(r) {
    return r ? r.split("::").at(-1) : void 0;
}
function dp(r = Te(), e) {
    if (!r) return;
    let t = e ? hA(e, r.headers) : void 0;
    return Ro({
        [Uu.SemanticAttributes.HTTP_HOST]: r.headers.host,
        [Uu.SemanticAttributes.HTTP_USER_AGENT]: r.headers["user-agent"],
        "http.referer": r.headers.referer,
        "vercel.request_id": lp(r.headers["x-vercel-id"]),
        "vercel.matched_path": r.headers["x-matched-path"],
        "vercel.edge_region": process.env.VERCEL_REGION,
        ...t
    });
}
var pA = {
    keys (r) {
        return [];
    },
    get (r, e) {
        return r[e.toLocaleLowerCase()];
    }
};
function hA(r, e) {
    if (typeof r == "function") return r(e, pA);
    let t = {};
    for (let [n, i] of Object.entries(r)){
        let o = e[i.toLocaleLowerCase()];
        o !== void 0 && (t[n] = o);
    }
    return t;
}
p();
function Br(r) {
    return (r & d.TraceFlags.SAMPLED) !== 0;
}
var bo = class {
    constructor(e, t){
        this.processors = e;
        this.attributesFromHeaders = t;
        this.rootSpanIds = new Map;
        this.waitSpanEnd = new Map;
    }
    forceFlush() {
        return Promise.all(this.processors.map((e)=>e.forceFlush().catch((t)=>{
                d.diag.error("@vercel/otel: forceFlush failed:", t);
            }))).then(()=>{});
    }
    shutdown() {
        return Promise.all(this.processors.map((e)=>e.shutdown().catch(()=>{}))).then(()=>{});
    }
    onStart(e, t) {
        let { traceId: n, spanId: i, traceFlags: o } = e.spanContext(), s = !e.parentSpanId || !this.rootSpanIds.has(n);
        if (s ? this.rootSpanIds.set(n, {
            rootSpanId: i,
            open: []
        }) : this.rootSpanIds.get(n)?.open.push(e), s && Br(o)) {
            let a = Te(), u = dp(a, this.attributesFromHeaders);
            u && e.setAttributes(u), a && a.waitUntil(async ()=>{
                if (this.rootSpanIds.has(n)) {
                    let l = new Promise((E)=>{
                        this.waitSpanEnd.set(n, E);
                    }), _;
                    await Promise.race([
                        l,
                        new Promise((E)=>{
                            _ = setTimeout(()=>{
                                this.waitSpanEnd.delete(n), E(void 0);
                            }, 50);
                        })
                    ]), _ && clearTimeout(_);
                }
                return this.forceFlush();
            });
        }
        for (let a of this.processors)a.onStart(e, t);
    }
    onEnd(e) {
        let { traceId: t, spanId: n, traceFlags: i } = e.spanContext(), o = Br(i), s = this.rootSpanIds.get(t), a = s?.rootSpanId === n;
        if (o) {
            let u = EA(e);
            u && Object.assign(e.attributes, u);
        }
        if (a) {
            if (this.rootSpanIds.delete(t), s.open.length > 0) {
                for (let u of s.open)if (!u.ended && u.spanContext().spanId !== n) try {
                    u.end();
                } catch (l) {
                    d.diag.error("@vercel/otel: onEnd failed:", l);
                }
            }
        } else if (s) for(let u = 0; u < s.open.length; u++)s.open[u]?.spanContext().spanId === n && s.open.splice(u, 1);
        for (let u of this.processors)u.onEnd(e);
        if (a) {
            let u = this.waitSpanEnd.get(t);
            u && (this.waitSpanEnd.delete(t), u());
        }
    }
}, fA = {
    [d.SpanKind.INTERNAL]: "internal",
    [d.SpanKind.SERVER]: "server",
    [d.SpanKind.CLIENT]: "client",
    [d.SpanKind.PRODUCER]: "producer",
    [d.SpanKind.CONSUMER]: "consumer"
};
function EA(r) {
    let { kind: e, attributes: t } = r, { "operation.name": n, "resource.name": i, "span.type": o, "next.span_type": s, "http.method": a, "http.route": u } = t;
    if (n) return;
    let l = i ?? (a && typeof a == "string" && u && typeof u == "string" ? `${a} ${u}` : u);
    if (r.kind === d.SpanKind.SERVER && a && u && typeof a == "string" && typeof u == "string") return {
        "operation.name": "web.request",
        "resource.name": l
    };
    let _ = r.instrumentationLibrary.name, E = s ?? o;
    if (E && typeof E == "string") {
        let O = _p(_, E);
        return u ? {
            "operation.name": O,
            "resource.name": l
        } : {
            "operation.name": O
        };
    }
    return {
        "operation.name": _p(_, e === d.SpanKind.INTERNAL ? "" : fA[e])
    };
}
function _p(r, e) {
    if (!r) return e;
    let t = r.replace(/[ @./]/g, "_");
    return t.startsWith("_") && (t = t.slice(1)), e ? `${t}.${e}` : t;
}
var yp = q(vo(), 1);
var Pp = q(bp(), 1);
p();
var rr = class extends Pp.OTLPExporterBase {
    constructor(e = {}){
        super(e), e.headers && (this._headers = e.headers);
    }
    onShutdown() {
        d.diag.debug("@vercel/otel/otlp: onShutdown");
    }
    onInit() {
        d.diag.debug("@vercel/otel/otlp: onInit");
    }
    send(e, t, n) {
        if (this._shutdownOnce.isCalled) {
            d.diag.debug("@vercel/otel/otlp: Shutdown already started. Cannot send objects");
            return;
        }
        let i = this.convert(e), o, s, a;
        try {
            ({ body: o, contentType: s, headers: a } = this.toMessage(i));
        } catch (l) {
            d.diag.warn("@vercel/otel/otlp: no proto", l);
            return;
        }
        let u = fetch(this.url, {
            method: "POST",
            body: o,
            headers: {
                ...this._headers,
                ...a,
                "Content-Type": s,
                "User-Agent": "OTel-OTLP-Exporter-JavaScript/0.46.0"
            },
            next: {
                internal: !0
            }
        }).then((l)=>{
            d.diag.debug("@vercel/otel/otlp: onSuccess", l.status, l.statusText), t(), l.arrayBuffer().catch(()=>{});
        }).catch((l)=>{
            d.diag.error("@vercel/otel/otlp: onError", l), n(l);
        }).finally(()=>{
            let l = this._sendingPromises.indexOf(u);
            this._sendingPromises.splice(l, 1);
        });
        this._sendingPromises.push(u);
    }
    getDefaultUrl(e) {
        throw new Error("Method not implemented.");
    }
};
var BA = "v1/traces", qA = `http://localhost:4318/${BA}`;
function Lo(r) {
    return typeof r.url == "string" ? r.url : qA;
}
var nr = class {
    constructor(e = {}){
        this.impl = new $u(e);
    }
    export(e, t) {
        this.impl.export(e, t);
    }
    shutdown() {
        return this.impl.shutdown();
    }
    forceFlush() {
        return this.impl.forceFlush();
    }
}, $u = class extends rr {
    convert(e) {
        return (0, yp.createExportTraceServiceRequest)(e, {
            useHex: !0,
            useLongBits: !1
        });
    }
    toMessage(e) {
        return {
            body: JSON.stringify(e),
            contentType: "application/json"
        };
    }
    getDefaultUrl(e) {
        return Lo(e);
    }
};
var vh = q(vo(), 1);
var bh = q(Rh(), 1);
function Ph(r) {
    let e = new bh.Writer;
    return KA(r, e), e.finish();
}
function KA(r, e) {
    if (r.resourceSpans != null && r.resourceSpans.length) for(let t = 0; t < r.resourceSpans.length; ++t)zA(r.resourceSpans[t], e.uint32(10).fork()).ldelim();
    return e;
}
function zA(r, e) {
    if (r.resource != null && YA(r.resource, e.uint32(10).fork()).ldelim(), r.scopeSpans != null && r.scopeSpans.length) for(let t = 0; t < r.scopeSpans.length; ++t)QA(r.scopeSpans[t], e.uint32(18).fork()).ldelim();
    return r.schemaUrl != null && e.uint32(26).string(r.schemaUrl), e;
}
function YA(r, e) {
    if (r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)or(r.attributes[t], e.uint32(10).fork()).ldelim();
    return r.droppedAttributesCount != null && e.uint32(16).uint32(r.droppedAttributesCount), e;
}
function QA(r, e) {
    if (r.scope != null && eO(r.scope, e.uint32(10).fork()).ldelim(), r.spans != null && r.spans.length) for(let t = 0; t < r.spans.length; ++t)tO(r.spans[t], e.uint32(18).fork()).ldelim();
    return r.schemaUrl != null && e.uint32(26).string(r.schemaUrl), e;
}
function or(r, e) {
    return r.key != null && e.uint32(10).string(r.key), r.value != null && yh(r.value, e.uint32(18).fork()).ldelim(), e;
}
function yh(r, e) {
    return r.stringValue != null && e.uint32(10).string(r.stringValue), r.boolValue != null && e.uint32(16).bool(r.boolValue), r.intValue != null && e.uint32(24).int64(r.intValue), r.doubleValue != null && e.uint32(33).double(r.doubleValue), r.arrayValue != null && ZA(r.arrayValue, e.uint32(42).fork()).ldelim(), r.kvlistValue != null && JA(r.kvlistValue, e.uint32(50).fork()).ldelim(), r.bytesValue != null && e.uint32(58).bytes(r.bytesValue), e;
}
function ZA(r, e) {
    if (r.values != null && r.values.length) for(let t = 0; t < r.values.length; ++t)yh(r.values[t], e.uint32(10).fork()).ldelim();
    return e;
}
function JA(r, e) {
    if (r.values != null && r.values.length) for(let t = 0; t < r.values.length; ++t)or(r.values[t], e.uint32(10).fork()).ldelim();
    return e;
}
function eO(r, e) {
    if (r.name != null && e.uint32(10).string(r.name), r.version != null && e.uint32(18).string(r.version), r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)or(r.attributes[t], e.uint32(26).fork()).ldelim();
    return r.droppedAttributesCount != null && e.uint32(32).uint32(r.droppedAttributesCount), e;
}
function tO(r, e) {
    if (r.traceId != null && e.uint32(10).bytes(r.traceId), r.spanId != null && e.uint32(18).bytes(r.spanId), r.traceState != null && e.uint32(26).string(r.traceState), r.parentSpanId != null && e.uint32(34).bytes(r.parentSpanId), r.name != null && e.uint32(42).string(r.name), r.kind != null && e.uint32(48).int32(r.kind), r.startTimeUnixNano != null && e.uint32(57).fixed64(r.startTimeUnixNano), r.endTimeUnixNano != null && e.uint32(65).fixed64(r.endTimeUnixNano), r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)or(r.attributes[t], e.uint32(74).fork()).ldelim();
    if (r.droppedAttributesCount != null && e.uint32(80).uint32(r.droppedAttributesCount), r.events != null && r.events.length) for(let t = 0; t < r.events.length; ++t)nO(r.events[t], e.uint32(90).fork()).ldelim();
    if (r.droppedEventsCount != null && e.uint32(96).uint32(r.droppedEventsCount), r.links != null && r.links.length) for(let t = 0; t < r.links.length; ++t)iO(r.links[t], e.uint32(106).fork()).ldelim();
    return r.droppedLinksCount != null && e.uint32(112).uint32(r.droppedLinksCount), r.status != null && rO(r.status, e.uint32(122).fork()).ldelim(), e;
}
function rO(r, e) {
    return r.message != null && e.uint32(18).string(r.message), r.code != null && e.uint32(24).int32(r.code), e;
}
function nO(r, e) {
    if (r.timeUnixNano != null && e.uint32(9).fixed64(r.timeUnixNano), r.name != null && e.uint32(18).string(r.name), r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)or(r.attributes[t], e.uint32(26).fork()).ldelim();
    return r.droppedAttributesCount != null && e.uint32(32).uint32(r.droppedAttributesCount), e;
}
function iO(r, e) {
    if (r.traceId != null && e.uint32(10).bytes(r.traceId), r.spanId != null && e.uint32(18).bytes(r.spanId), r.traceState != null && e.uint32(26).string(r.traceState), r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)or(r.attributes[t], e.uint32(34).fork()).ldelim();
    return r.droppedAttributesCount != null && e.uint32(40).uint32(r.droppedAttributesCount), e;
}
var pt = class {
    constructor(e = {}){
        this.impl = new oc(e);
    }
    export(e, t) {
        this.impl.export(e, t);
    }
    shutdown() {
        return this.impl.shutdown();
    }
    forceFlush() {
        return this.impl.forceFlush();
    }
}, oc = class extends rr {
    convert(e) {
        return (0, vh.createExportTraceServiceRequest)(e, void 0);
    }
    toMessage(e) {
        return {
            body: Ph(e),
            contentType: "application/x-protobuf",
            headers: {
                accept: "application/x-protobuf"
            }
        };
    }
    getDefaultUrl(e) {
        return Lo(e);
    }
};
p();
var Pe = q(oe(), 1);
function Ih(r, e) {
    return r.replace(/\{(?<temp1>[^{}]+)\}/g, (t, n)=>{
        let i = e[n];
        return i !== void 0 ? String(i) : t;
    });
}
var sr = class {
    constructor(e = {}){
        this.instrumentationName = "@vercel/otel/fetch";
        this.instrumentationVersion = "1.0.0";
        this.config = e;
    }
    getConfig() {
        return this.config;
    }
    setConfig() {}
    setTracerProvider(e) {
        this.tracerProvider = e;
    }
    setMeterProvider() {}
    enable() {
        this.disable();
        let { tracerProvider: e } = this;
        if (!e) return;
        let t = e.getTracer(this.instrumentationName, this.instrumentationVersion), n = this.config.ignoreUrls ?? [], i = (y, k)=>{
            if (k?.opentelemetry?.ignore !== void 0) return k.opentelemetry.ignore;
            if (n.length === 0) return !1;
            let S = y.toString();
            return n.some((b)=>typeof b == "string" ? b === "*" ? !0 : S.startsWith(b) : b.test(S));
        }, o = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || null, s = process.env.VERCEL_BRANCH_URL || process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL || null, a = this.config.propagateContextUrls ?? [], u = this.config.dontPropagateContextUrls ?? [], l = this.config.resourceNameTemplate, { attributesFromRequestHeaders: _, attributesFromResponseHeaders: E } = this.config, O = (y, k)=>{
            if (k?.opentelemetry?.propagateContext) return k.opentelemetry.propagateContext;
            let S = y.toString();
            return u.length > 0 && u.some((b)=>typeof b == "string" ? b === "*" ? !0 : S.startsWith(b) : b.test(S)) ? !1 : o && y.protocol === "https:" && (y.host === o || y.host === s || y.host === Te()?.headers.host) || !o && y.protocol === "http:" && y.hostname === "localhost" ? !0 : a.some((b)=>typeof b == "string" ? b === "*" ? !0 : S.startsWith(b) : b.test(S));
        };
        process.env.NEXT_OTEL_FETCH_DISABLED = "1";
        let x = globalThis.fetch;
        this.originalFetch = x;
        let J = async (y, k)=>{
            let S = k;
            if (S?.next?.internal) return x(y, S);
            let b = new Request(y instanceof Request ? y.clone() : y, S), ye = new URL(b.url);
            if (i(ye, S)) return x(y, S);
            let jo = {
                [Pe.SemanticAttributes.HTTP_METHOD]: b.method,
                [Pe.SemanticAttributes.HTTP_URL]: b.url,
                [Pe.SemanticAttributes.HTTP_HOST]: ye.host,
                [Pe.SemanticAttributes.HTTP_SCHEME]: ye.protocol.replace(":", ""),
                [Pe.SemanticAttributes.NET_PEER_NAME]: ye.hostname,
                [Pe.SemanticAttributes.NET_PEER_PORT]: ye.port
            }, ht = l ? Ih(l, jo) : sO(b.url), nf = S?.opentelemetry?.spanName ?? `fetch ${b.method} ${b.url}`, dc = d.context.active(), B = t.startSpan(nf, {
                kind: d.SpanKind.CLIENT,
                attributes: {
                    ...jo,
                    "operation.name": `fetch.${b.method}`,
                    "resource.name": ht,
                    ...S?.opentelemetry?.attributes
                }
            }, dc);
            if (!B.isRecording() || !Br(B.spanContext().traceFlags)) return B.end(), x(y, S);
            if (O(ye, S)) {
                let ft = d.trace.setSpan(dc, B);
                d.propagation.inject(ft, b.headers, oO);
            }
            _ && Lh(B, _, b.headers);
            try {
                let ft = Date.now();
                S?.body && S.body instanceof FormData && b.headers.delete("content-type");
                let ve = await x(y, {
                    ...S,
                    headers: b.headers
                }), of = Date.now() - ft;
                return B.setAttribute(Pe.SemanticAttributes.HTTP_STATUS_CODE, ve.status), B.setAttribute("http.response_time", of), E && Lh(B, E, ve.headers), ve.status >= 500 && sc(B, `Status: ${ve.status} (${ve.statusText})`), ve.body ? aO(ve).then((Fo)=>{
                    B.isRecording() && (B.setAttribute(Pe.SemanticAttributes.HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, Fo), B.end());
                }, (Fo)=>{
                    B.isRecording() && (sc(B, Fo), B.end());
                }) : B.end(), ve;
            } catch (ft) {
                throw sc(B, ft), B.end(), ft;
            }
        };
        globalThis.fetch = J;
    }
    disable() {
        this.originalFetch && (globalThis.fetch = this.originalFetch);
    }
}, oO = {
    set (r, e, t) {
        r.set(e, t);
    }
};
function sO(r) {
    let e = r.indexOf("?");
    return e === -1 ? r : r.substring(0, e);
}
function aO(r) {
    let e = 0, n = r.clone().body?.getReader();
    if (!n) return Promise.resolve(0);
    let i = ()=>n.read().then(({ done: o, value: s })=>{
            if (!o) return e += s.byteLength, i();
        });
    return i().then(()=>e);
}
function sc(r, e) {
    if (e instanceof Error) r.recordException(e), r.setStatus({
        code: d.SpanStatusCode.ERROR,
        message: e.message
    });
    else {
        let t = String(e);
        r.setStatus({
            code: d.SpanStatusCode.ERROR,
            message: t
        });
    }
}
function Lh(r, e, t) {
    for (let [n, i] of Object.entries(e)){
        let o = t.get(i);
        o !== null && r.setAttribute(n, o);
    }
}
p();
var Mh = q(T(), 1), uO = "00", ac = "traceparent", uc = "tracestate", kr = class {
    fields() {
        return [
            ac,
            uc
        ];
    }
    inject(e, t, n) {
        let i = d.trace.getSpanContext(e);
        if (!i || (0, Mh.isTracingSuppressed)(e) || !(0, d.isSpanContextValid)(i)) return;
        let o = `${uO}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags || 0).toString(16)}`;
        n.set(t, ac, o), i.traceState && n.set(t, uc, i.traceState.serialize());
    }
    extract(e, t, n) {
        let i = n.get(t, ac);
        if (!i) return e;
        let o = Array.isArray(i) ? i[0] : i;
        if (typeof o != "string") return e;
        let s = cO(o);
        if (!s) return e;
        s.isRemote = !0;
        let a = n.get(t, uc);
        if (a) {
            let u = Array.isArray(a) ? a.join(",") : a;
            s.traceState = (0, d.createTraceState)(typeof u == "string" ? u : void 0);
        }
        return d.trace.setSpanContext(e, s);
    }
};
function cO(r) {
    let [e, t, n, i, o] = r.split("-");
    return !e || !t || !n || !i || e.length !== 2 || t.length !== 32 || n.length !== 16 || i.length !== 2 || e === "00" && o ? null : {
        traceId: t,
        spanId: n,
        traceFlags: parseInt(i, 16)
    };
}
p();
var xo = class {
    fields() {
        return [];
    }
    inject() {}
    extract(e) {
        let t = Te();
        if (!t?.telemetry) return d.diag.warn("@vercel/otel: Vercel telemetry extension not found."), e;
        let { rootSpanContext: n } = t.telemetry;
        return n ? (d.diag.debug("@vercel/otel: Extracted root SpanContext from Vercel request context.", n), d.trace.setSpanContext(e, {
            ...n,
            isRemote: !0,
            traceFlags: n.traceFlags || d.TraceFlags.SAMPLED
        })) : e;
    }
};
p();
var Bo = q(T(), 1), zh = q(Kh(), 1);
var qo = class {
    export(e, t) {
        let n = Te();
        if (!n?.telemetry) {
            d.diag.warn("@vercel/otel: no telemetry context found"), t({
                code: Bo.ExportResultCode.SUCCESS,
                error: void 0
            });
            return;
        }
        try {
            let i = (0, zh.createExportTraceServiceRequest)(e, {
                useHex: !0,
                useLongBits: !1
            });
            n.telemetry.reportSpans(i), t({
                code: Bo.ExportResultCode.SUCCESS,
                error: void 0
            });
        } catch (i) {
            t({
                code: Bo.ExportResultCode.FAILED,
                error: i instanceof Error ? i : new Error(String(i))
            });
        }
    }
    shutdown() {
        return Promise.resolve();
    }
    forceFlush() {
        return Promise.resolve();
    }
};
var IO = {
    ALL: d.DiagLogLevel.ALL,
    VERBOSE: d.DiagLogLevel.VERBOSE,
    DEBUG: d.DiagLogLevel.DEBUG,
    INFO: d.DiagLogLevel.INFO,
    WARN: d.DiagLogLevel.WARN,
    ERROR: d.DiagLogLevel.ERROR,
    NONE: d.DiagLogLevel.NONE
}, Go = class {
    constructor(e = {}){
        this.configuration = e;
    }
    start() {
        let e = LO(), t = this.configuration, n = ("TURBOPACK compile-time value", "nodejs") || "nodejs", i = !!e.OTEL_SDK_DISABLED;
        if (process.env.OTEL_LOG_LEVEL && d.diag.setLogger(new d.DiagConsoleLogger, {
            logLevel: IO[process.env.OTEL_LOG_LEVEL.toUpperCase()]
        }), i) return;
        let o = t.idGenerator ?? new N.RandomIdGenerator, s = t.contextManager ?? new tf.AsyncLocalStorageContextManager;
        s.enable(), this.contextManager = s;
        let a = e.OTEL_SERVICE_NAME || t.serviceName || "app", u = new dr.Resource(Ro({
            [lc.SemanticResourceAttributes.SERVICE_NAME]: a,
            "node.ci": process.env.CI ? !0 : void 0,
            "node.env": ("TURBOPACK compile-time value", "development"),
            env: process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV,
            "vercel.region": process.env.VERCEL_REGION,
            "vercel.runtime": n,
            "vercel.sha": process.env.VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
            "vercel.host": process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || void 0,
            "vercel.branch_host": process.env.VERCEL_BRANCH_URL || process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL || void 0,
            "vercel.deployment_id": process.env.VERCEL_DEPLOYMENT_ID || void 0,
            [lc.SemanticResourceAttributes.SERVICE_VERSION]: process.env.VERCEL_DEPLOYMENT_ID,
            ...t.attributes
        })), l = t.resourceDetectors ?? [
            dr.envDetectorSync
        ];
        if (t.autoDetectResources ?? !0) {
            let S = {
                detectors: l
            };
            u = u.merge((0, dr.detectResourcesSync)(S));
        }
        let E = CO(t.propagators, t, e), O = NO(t.traceSampler, e), x = wO(t.spanProcessors, t, e);
        x.length === 0 && d.diag.warn("@vercel/otel: No span processors configured. No spans will be exported.");
        let J = t.spanLimits, y = new N.BasicTracerProvider({
            resource: u,
            idGenerator: o,
            sampler: O,
            spanLimits: J
        });
        if (y.addSpanProcessor(new bo(x, t.attributesFromHeaders)), y.register({
            contextManager: s,
            propagator: new He.CompositePropagator({
                propagators: E
            })
        }), this.tracerProvider = y, t.logRecordProcessor) {
            let S = new Jh.LoggerProvider({
                resource: u
            });
            this.loggerProvider = S, S.addLogRecordProcessor(t.logRecordProcessor), at.logs.setGlobalLoggerProvider(S);
        }
        if (t.metricReader || t.views) {
            let S = new ef.MeterProvider({
                resource: u,
                views: t.views ?? []
            });
            t.metricReader && S.addMetricReader(t.metricReader), d.metrics.setGlobalMeterProvider(S), this.meterProvider = S;
        }
        let k = MO(t.instrumentations, t.instrumentationConfig);
        this.disableInstrumentations = (0, Zh.registerInstrumentations)({
            instrumentations: k
        }), d.diag.info("@vercel/otel: started", a, n);
    }
    async shutdown() {
        let e = [];
        this.tracerProvider && e.push(this.tracerProvider.shutdown()), this.loggerProvider && e.push(this.loggerProvider.shutdown()), this.meterProvider && e.push(this.meterProvider.shutdown()), d.diag.info("@vercel/otel: shutting down", e.length, ("TURBOPACK compile-time value", "nodejs")), await Promise.all(e), this.contextManager && this.contextManager.disable();
        let { disableInstrumentations: t } = this;
        t && t();
    }
};
function LO() {
    let r = (0, Vo.parseEnvironment)(process.env);
    return {
        ...Vo.DEFAULT_ENVIRONMENT,
        ...r
    };
}
function MO(r, e) {
    return (r ?? [
        "auto"
    ]).map((t)=>t === "auto" ? (d.diag.debug("@vercel/otel: Configure instrumentations: fetch", e?.fetch), [
            new sr(e?.fetch)
        ]) : t === "fetch" ? (d.diag.debug("@vercel/otel: Configure instrumentations: fetch", e?.fetch), new sr(e?.fetch)) : t).flat();
}
function CO(r, e, t) {
    let n = process.env.OTEL_PROPAGATORS && t.OTEL_PROPAGATORS && t.OTEL_PROPAGATORS.length > 0 ? t.OTEL_PROPAGATORS : void 0;
    return (r ?? n ?? [
        "auto"
    ]).map((i)=>{
        if (i === "none") return [];
        if (i === "auto") {
            let o = [];
            return o.push({
                name: "tracecontext",
                propagator: new kr
            }), o.push({
                name: "baggage",
                propagator: new He.W3CBaggagePropagator
            }), d.diag.debug(`@vercel/otel: Configure propagators: ${o.map((s)=>s.name).join(", ")}`), o.map((s)=>s.propagator);
        }
        if (i === "experimental-vercel-trace") return d.diag.debug("@vercel/otel: Configure propagator: vercel-runtime"), new xo;
        if (i === "tracecontext") return d.diag.debug("@vercel/otel: Configure propagator: tracecontext"), new kr;
        if (i === "baggage") return d.diag.debug("@vercel/otel: Configure propagator: baggage"), new He.W3CBaggagePropagator;
        if (typeof i == "string") throw new Error(`Unknown propagator: "${i}"`);
        return i;
    }).flat();
}
var Yh = "always_on", lr = 1;
function NO(r, e) {
    if (r && typeof r != "string") return r;
    let t = r && r !== "auto" ? r : e.OTEL_TRACES_SAMPLER || Yh;
    switch(d.diag.debug("@vercel/otel: Configure sampler: ", t), t){
        case "always_on":
            return new N.AlwaysOnSampler;
        case "always_off":
            return new N.AlwaysOffSampler;
        case "parentbased_always_on":
            return new N.ParentBasedSampler({
                root: new N.AlwaysOnSampler
            });
        case "parentbased_always_off":
            return new N.ParentBasedSampler({
                root: new N.AlwaysOffSampler
            });
        case "traceidratio":
            return new N.TraceIdRatioBasedSampler(Qh(e));
        case "parentbased_traceidratio":
            return new N.ParentBasedSampler({
                root: new N.TraceIdRatioBasedSampler(Qh(e))
            });
        default:
            return d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER value "${String(e.OTEL_TRACES_SAMPLER)} invalid, defaulting to ${Yh}".`), new N.AlwaysOnSampler;
    }
}
function Qh(r) {
    if (r.OTEL_TRACES_SAMPLER_ARG === void 0 || r.OTEL_TRACES_SAMPLER_ARG === "") return d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${lr}.`), lr;
    d.diag.debug("@vercel/otel: Configure sampler probability: ", r.OTEL_TRACES_SAMPLER_ARG);
    let e = Number(r.OTEL_TRACES_SAMPLER_ARG);
    return isNaN(e) ? (d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${lr}.`), lr) : e < 0 || e > 1 ? (d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${lr}.`), lr) : e;
}
function wO(r, e, t) {
    return [
        ...(r ?? [
            "auto"
        ]).map((n)=>{
            if (n === "auto") {
                if (process.env.VERCEL_OTEL_ENDPOINTS) {
                    let i = process.env.VERCEL_OTEL_ENDPOINTS_PORT || "4318", o = process.env.VERCEL_OTEL_ENDPOINTS_PROTOCOL || "http/protobuf";
                    d.diag.debug("@vercel/otel: Configure vercel otel collector on port: ", i, o);
                    let s = {
                        url: `http://localhost:${i}/v1/traces`,
                        headers: {}
                    }, a = o === "http/protobuf" ? new pt(s) : new nr(s);
                    return new N.BatchSpanProcessor(a);
                }
                return !e.traceExporter || e.traceExporter === "auto" || t.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT || t.OTEL_EXPORTER_OTLP_ENDPOINT ? new N.BatchSpanProcessor(xO(t)) : void 0;
            } else if (n === "experimental-vercel-trace") return d.diag.debug("@vercel/otel: Configure vercel-runtime exporter"), new N.BatchSpanProcessor(new qo);
            return n;
        }).filter(BO),
        ...e.traceExporter && e.traceExporter !== "auto" ? [
            new N.BatchSpanProcessor(e.traceExporter)
        ] : []
    ];
}
function xO(r) {
    let e = process.env.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL ?? process.env.OTEL_EXPORTER_OTLP_PROTOCOL ?? "http/protobuf", t = UO(r), n = {
        ...He.baggageUtils.parseKeyPairsIntoRecord(r.OTEL_EXPORTER_OTLP_HEADERS),
        ...He.baggageUtils.parseKeyPairsIntoRecord(r.OTEL_EXPORTER_OTLP_TRACES_HEADERS)
    };
    switch(d.diag.debug("@vercel/otel: Configure trace exporter: ", e, t, `headers: ${Object.keys(n).join(",") || "<none>"}`), e){
        case "http/json":
            return new nr({
                url: t,
                headers: n
            });
        case "http/protobuf":
            return new pt({
                url: t,
                headers: n
            });
        default:
            return d.diag.warn(`@vercel/otel: Unsupported OTLP traces protocol: ${e}. Using http/protobuf.`), new pt;
    }
}
var rf = "v1/traces", DO = `http://localhost:4318/${rf}`;
function UO(r) {
    let e = r.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
    if (e && typeof e == "string") return e;
    let t = r.OTEL_EXPORTER_OTLP_ENDPOINT;
    return t && typeof t == "string" ? `${t}/${rf}` : DO;
}
function BO(r) {
    return r != null;
}
function yv(r) {
    let e;
    r ? typeof r == "string" ? e = {
        serviceName: r
    } : e = r : e = {}, new Go(e).start();
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/AbstractAsyncHooksContextManager.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractAsyncHooksContextManager = void 0;
const events_1 = __turbopack_require__("[externals]/events [external] (events, cjs)");
const ADD_LISTENER_METHODS = [
    'addListener',
    'on',
    'once',
    'prependListener',
    'prependOnceListener'
];
class AbstractAsyncHooksContextManager {
    constructor(){
        this._kOtListeners = Symbol('OtListeners');
        this._wrapped = false;
    }
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param context A context (span) to be bind to target
     * @param target a function or event emitter. When target or one of its callbacks is called,
     *  the provided context will be used as the active context for the duration of the call.
     */ bind(context, target) {
        if (target instanceof events_1.EventEmitter) {
            return this._bindEventEmitter(context, target);
        }
        if (typeof target === 'function') {
            return this._bindFunction(context, target);
        }
        return target;
    }
    _bindFunction(context, target) {
        const manager = this;
        const contextWrapper = function(...args) {
            return manager.with(context, ()=>target.apply(this, args));
        };
        Object.defineProperty(contextWrapper, 'length', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length
        });
        /**
         * It isn't possible to tell Typescript that contextWrapper is the same as T
         * so we forced to cast as any here.
         */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return contextWrapper;
    }
    /**
     * By default, EventEmitter call their callback with their context, which we do
     * not want, instead we will bind a specific context to all callbacks that
     * go through it.
     * @param context the context we want to bind
     * @param ee EventEmitter an instance of EventEmitter to patch
     */ _bindEventEmitter(context, ee) {
        const map = this._getPatchMap(ee);
        if (map !== undefined) return ee;
        this._createPatchMap(ee);
        // patch methods that add a listener to propagate context
        ADD_LISTENER_METHODS.forEach((methodName)=>{
            if (ee[methodName] === undefined) return;
            ee[methodName] = this._patchAddListener(ee, ee[methodName], context);
        });
        // patch methods that remove a listener
        if (typeof ee.removeListener === 'function') {
            ee.removeListener = this._patchRemoveListener(ee, ee.removeListener);
        }
        if (typeof ee.off === 'function') {
            ee.off = this._patchRemoveListener(ee, ee.off);
        }
        // patch method that remove all listeners
        if (typeof ee.removeAllListeners === 'function') {
            ee.removeAllListeners = this._patchRemoveAllListeners(ee, ee.removeAllListeners);
        }
        return ee;
    }
    /**
     * Patch methods that remove a given listener so that we match the "patched"
     * version of that listener (the one that propagate context).
     * @param ee EventEmitter instance
     * @param original reference to the patched method
     */ _patchRemoveListener(ee, original) {
        const contextManager = this;
        return function(event, listener) {
            var _a;
            const events = (_a = contextManager._getPatchMap(ee)) === null || _a === void 0 ? void 0 : _a[event];
            if (events === undefined) {
                return original.call(this, event, listener);
            }
            const patchedListener = events.get(listener);
            return original.call(this, event, patchedListener || listener);
        };
    }
    /**
     * Patch methods that remove all listeners so we remove our
     * internal references for a given event.
     * @param ee EventEmitter instance
     * @param original reference to the patched method
     */ _patchRemoveAllListeners(ee, original) {
        const contextManager = this;
        return function(event) {
            const map = contextManager._getPatchMap(ee);
            if (map !== undefined) {
                if (arguments.length === 0) {
                    contextManager._createPatchMap(ee);
                } else if (map[event] !== undefined) {
                    delete map[event];
                }
            }
            return original.apply(this, arguments);
        };
    }
    /**
     * Patch methods on an event emitter instance that can add listeners so we
     * can force them to propagate a given context.
     * @param ee EventEmitter instance
     * @param original reference to the patched method
     * @param [context] context to propagate when calling listeners
     */ _patchAddListener(ee, original, context) {
        const contextManager = this;
        return function(event, listener) {
            /**
             * This check is required to prevent double-wrapping the listener.
             * The implementation for ee.once wraps the listener and calls ee.on.
             * Without this check, we would wrap that wrapped listener.
             * This causes an issue because ee.removeListener depends on the onceWrapper
             * to properly remove the listener. If we wrap their wrapper, we break
             * that detection.
             */ if (contextManager._wrapped) {
                return original.call(this, event, listener);
            }
            let map = contextManager._getPatchMap(ee);
            if (map === undefined) {
                map = contextManager._createPatchMap(ee);
            }
            let listeners = map[event];
            if (listeners === undefined) {
                listeners = new WeakMap();
                map[event] = listeners;
            }
            const patchedListener = contextManager.bind(context, listener);
            // store a weak reference of the user listener to ours
            listeners.set(listener, patchedListener);
            /**
             * See comment at the start of this function for the explanation of this property.
             */ contextManager._wrapped = true;
            try {
                return original.call(this, event, patchedListener);
            } finally{
                contextManager._wrapped = false;
            }
        };
    }
    _createPatchMap(ee) {
        const map = Object.create(null);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ee[this._kOtListeners] = map;
        return map;
    }
    _getPatchMap(ee) {
        return ee[this._kOtListeners];
    }
}
exports.AbstractAsyncHooksContextManager = AbstractAsyncHooksContextManager; //# sourceMappingURL=AbstractAsyncHooksContextManager.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/AsyncHooksContextManager.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncHooksContextManager = void 0;
const api_1 = __turbopack_require__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const asyncHooks = __turbopack_require__("[externals]/async_hooks [external] (async_hooks, cjs)");
const AbstractAsyncHooksContextManager_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/AbstractAsyncHooksContextManager.js [instrumentation-edge] (ecmascript)");
class AsyncHooksContextManager extends AbstractAsyncHooksContextManager_1.AbstractAsyncHooksContextManager {
    constructor(){
        super();
        this._contexts = new Map();
        this._stack = [];
        this._asyncHook = asyncHooks.createHook({
            init: this._init.bind(this),
            before: this._before.bind(this),
            after: this._after.bind(this),
            destroy: this._destroy.bind(this),
            promiseResolve: this._destroy.bind(this)
        });
    }
    active() {
        var _a;
        return (_a = this._stack[this._stack.length - 1]) !== null && _a !== void 0 ? _a : api_1.ROOT_CONTEXT;
    }
    with(context, fn, thisArg, ...args) {
        this._enterContext(context);
        try {
            return fn.call(thisArg, ...args);
        } finally{
            this._exitContext();
        }
    }
    enable() {
        this._asyncHook.enable();
        return this;
    }
    disable() {
        this._asyncHook.disable();
        this._contexts.clear();
        this._stack = [];
        return this;
    }
    /**
     * Init hook will be called when userland create a async context, setting the
     * context as the current one if it exist.
     * @param uid id of the async context
     * @param type the resource type
     */ _init(uid, type) {
        // ignore TIMERWRAP as they combine timers with same timeout which can lead to
        // false context propagation. TIMERWRAP has been removed in node 11
        // every timer has it's own `Timeout` resource anyway which is used to propagate
        // context.
        if (type === 'TIMERWRAP') return;
        const context = this._stack[this._stack.length - 1];
        if (context !== undefined) {
            this._contexts.set(uid, context);
        }
    }
    /**
     * Destroy hook will be called when a given context is no longer used so we can
     * remove its attached context.
     * @param uid uid of the async context
     */ _destroy(uid) {
        this._contexts.delete(uid);
    }
    /**
     * Before hook is called just before executing a async context.
     * @param uid uid of the async context
     */ _before(uid) {
        const context = this._contexts.get(uid);
        if (context !== undefined) {
            this._enterContext(context);
        }
    }
    /**
     * After hook is called just after completing the execution of a async context.
     */ _after() {
        this._exitContext();
    }
    /**
     * Set the given context as active
     */ _enterContext(context) {
        this._stack.push(context);
    }
    /**
     * Remove the context at the root of the stack
     */ _exitContext() {
        this._stack.pop();
    }
}
exports.AsyncHooksContextManager = AsyncHooksContextManager; //# sourceMappingURL=AsyncHooksContextManager.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncLocalStorageContextManager = void 0;
const api_1 = __turbopack_require__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const async_hooks_1 = __turbopack_require__("[externals]/async_hooks [external] (async_hooks, cjs)");
const AbstractAsyncHooksContextManager_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/AbstractAsyncHooksContextManager.js [instrumentation-edge] (ecmascript)");
class AsyncLocalStorageContextManager extends AbstractAsyncHooksContextManager_1.AbstractAsyncHooksContextManager {
    constructor(){
        super();
        this._asyncLocalStorage = new async_hooks_1.AsyncLocalStorage();
    }
    active() {
        var _a;
        return (_a = this._asyncLocalStorage.getStore()) !== null && _a !== void 0 ? _a : api_1.ROOT_CONTEXT;
    }
    with(context, fn, thisArg, ...args) {
        const cb = thisArg == null ? fn : fn.bind(thisArg);
        return this._asyncLocalStorage.run(context, cb, ...args);
    }
    enable() {
        return this;
    }
    disable() {
        this._asyncLocalStorage.disable();
        return this;
    }
}
exports.AsyncLocalStorageContextManager = AsyncLocalStorageContextManager; //# sourceMappingURL=AsyncLocalStorageContextManager.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/index.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncLocalStorageContextManager = exports.AsyncHooksContextManager = void 0;
var AsyncHooksContextManager_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/AsyncHooksContextManager.js [instrumentation-edge] (ecmascript)");
Object.defineProperty(exports, "AsyncHooksContextManager", {
    enumerable: true,
    get: function() {
        return AsyncHooksContextManager_1.AsyncHooksContextManager;
    }
});
var AsyncLocalStorageContextManager_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js [instrumentation-edge] (ecmascript)");
Object.defineProperty(exports, "AsyncLocalStorageContextManager", {
    enumerable: true,
    get: function() {
        return AsyncLocalStorageContextManager_1.AsyncLocalStorageContextManager;
    }
}); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({});
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/types.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Enumeration of B3 inject encodings */ __turbopack_esm__({
    "B3InjectEncoding": (()=>B3InjectEncoding)
});
var B3InjectEncoding;
(function(B3InjectEncoding) {
    B3InjectEncoding[B3InjectEncoding["SINGLE_HEADER"] = 0] = "SINGLE_HEADER";
    B3InjectEncoding[B3InjectEncoding["MULTI_HEADER"] = 1] = "MULTI_HEADER";
})(B3InjectEncoding || (B3InjectEncoding = {})); //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "isTracingSuppressed": (()=>isTracingSuppressed),
    "suppressTracing": (()=>suppressTracing),
    "unsuppressTracing": (()=>unsuppressTracing)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
;
var SUPPRESS_TRACING_KEY = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["createContextKey"])('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
function suppressTracing(context) {
    return context.setValue(SUPPRESS_TRACING_KEY, true);
}
function unsuppressTracing(context) {
    return context.deleteValue(SUPPRESS_TRACING_KEY);
}
function isTracingSuppressed(context) {
    return context.getValue(SUPPRESS_TRACING_KEY) === true;
} //# sourceMappingURL=suppress-tracing.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/constants.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** B3 single-header key */ __turbopack_esm__({
    "B3_CONTEXT_HEADER": (()=>B3_CONTEXT_HEADER),
    "X_B3_FLAGS": (()=>X_B3_FLAGS),
    "X_B3_PARENT_SPAN_ID": (()=>X_B3_PARENT_SPAN_ID),
    "X_B3_SAMPLED": (()=>X_B3_SAMPLED),
    "X_B3_SPAN_ID": (()=>X_B3_SPAN_ID),
    "X_B3_TRACE_ID": (()=>X_B3_TRACE_ID)
});
var B3_CONTEXT_HEADER = 'b3';
var X_B3_TRACE_ID = 'x-b3-traceid';
var X_B3_SPAN_ID = 'x-b3-spanid';
var X_B3_SAMPLED = 'x-b3-sampled';
var X_B3_PARENT_SPAN_ID = 'x-b3-parentspanid';
var X_B3_FLAGS = 'x-b3-flags'; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/common.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "B3_DEBUG_FLAG_KEY": (()=>B3_DEBUG_FLAG_KEY)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
;
var B3_DEBUG_FLAG_KEY = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["createContextKey"])('OpenTelemetry Context Key B3 Debug Flag'); //# sourceMappingURL=common.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/B3MultiPropagator.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "B3MultiPropagator": (()=>B3MultiPropagator)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$common$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/common.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/constants.js [instrumentation-edge] (ecmascript)");
;
;
;
;
var VALID_SAMPLED_VALUES = new Set([
    true,
    'true',
    'True',
    '1',
    1
]);
var VALID_UNSAMPLED_VALUES = new Set([
    false,
    'false',
    'False',
    '0',
    0
]);
function isValidSampledValue(sampled) {
    return sampled === __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED || sampled === __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].NONE;
}
function parseHeader(header) {
    return Array.isArray(header) ? header[0] : header;
}
function getHeaderValue(carrier, getter, key) {
    var header = getter.get(carrier, key);
    return parseHeader(header);
}
function getTraceId(carrier, getter) {
    var traceId = getHeaderValue(carrier, getter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_TRACE_ID"]);
    if (typeof traceId === 'string') {
        return traceId.padStart(32, '0');
    }
    return '';
}
function getSpanId(carrier, getter) {
    var spanId = getHeaderValue(carrier, getter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_SPAN_ID"]);
    if (typeof spanId === 'string') {
        return spanId;
    }
    return '';
}
function getDebug(carrier, getter) {
    var debug = getHeaderValue(carrier, getter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_FLAGS"]);
    return debug === '1' ? '1' : undefined;
}
function getTraceFlags(carrier, getter) {
    var traceFlags = getHeaderValue(carrier, getter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_SAMPLED"]);
    var debug = getDebug(carrier, getter);
    if (debug === '1' || VALID_SAMPLED_VALUES.has(traceFlags)) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED;
    }
    if (traceFlags === undefined || VALID_UNSAMPLED_VALUES.has(traceFlags)) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].NONE;
    }
    // This indicates to isValidSampledValue that this is not valid
    return;
}
/**
 * Propagator for the B3 multiple-header HTTP format.
 * Based on: https://github.com/openzipkin/b3-propagation
 */ var B3MultiPropagator = function() {
    function B3MultiPropagator() {}
    B3MultiPropagator.prototype.inject = function(context, carrier, setter) {
        var spanContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getSpanContext(context);
        if (!spanContext || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isSpanContextValid"])(spanContext) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context)) return;
        var debug = context.getValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$common$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_DEBUG_FLAG_KEY"]);
        setter.set(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_TRACE_ID"], spanContext.traceId);
        setter.set(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_SPAN_ID"], spanContext.spanId);
        // According to the B3 spec, if the debug flag is set,
        // the sampled flag shouldn't be propagated as well.
        if (debug === '1') {
            setter.set(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_FLAGS"], debug);
        } else if (spanContext.traceFlags !== undefined) {
            // We set the header only if there is an existing sampling decision.
            // Otherwise we will omit it => Absent.
            setter.set(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_SAMPLED"], (__TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED & spanContext.traceFlags) === __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED ? '1' : '0');
        }
    };
    B3MultiPropagator.prototype.extract = function(context, carrier, getter) {
        var traceId = getTraceId(carrier, getter);
        var spanId = getSpanId(carrier, getter);
        var traceFlags = getTraceFlags(carrier, getter);
        var debug = getDebug(carrier, getter);
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isValidTraceId"])(traceId) && (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isValidSpanId"])(spanId) && isValidSampledValue(traceFlags)) {
            context = context.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$common$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_DEBUG_FLAG_KEY"], debug);
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].setSpanContext(context, {
                traceId: traceId,
                spanId: spanId,
                isRemote: true,
                traceFlags: traceFlags
            });
        }
        return context;
    };
    B3MultiPropagator.prototype.fields = function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_TRACE_ID"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_SPAN_ID"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_FLAGS"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_SAMPLED"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_PARENT_SPAN_ID"]
        ];
    };
    return B3MultiPropagator;
}();
;
 //# sourceMappingURL=B3MultiPropagator.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/B3SinglePropagator.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "B3SinglePropagator": (()=>B3SinglePropagator)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$common$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/common.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/constants.js [instrumentation-edge] (ecmascript)");
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
;
;
;
;
var B3_CONTEXT_REGEX = /((?:[0-9a-f]{16}){1,2})-([0-9a-f]{16})(?:-([01d](?![0-9a-f])))?(?:-([0-9a-f]{16}))?/;
var PADDING = '0'.repeat(16);
var SAMPLED_VALUES = new Set([
    'd',
    '1'
]);
var DEBUG_STATE = 'd';
function convertToTraceId128(traceId) {
    return traceId.length === 32 ? traceId : "" + PADDING + traceId;
}
function convertToTraceFlags(samplingState) {
    if (samplingState && SAMPLED_VALUES.has(samplingState)) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED;
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].NONE;
}
/**
 * Propagator for the B3 single-header HTTP format.
 * Based on: https://github.com/openzipkin/b3-propagation
 */ var B3SinglePropagator = function() {
    function B3SinglePropagator() {}
    B3SinglePropagator.prototype.inject = function(context, carrier, setter) {
        var spanContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getSpanContext(context);
        if (!spanContext || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isSpanContextValid"])(spanContext) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context)) return;
        var samplingState = context.getValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$common$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_DEBUG_FLAG_KEY"]) || spanContext.traceFlags & 0x1;
        var value = spanContext.traceId + "-" + spanContext.spanId + "-" + samplingState;
        setter.set(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_CONTEXT_HEADER"], value);
    };
    B3SinglePropagator.prototype.extract = function(context, carrier, getter) {
        var header = getter.get(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_CONTEXT_HEADER"]);
        var b3Context = Array.isArray(header) ? header[0] : header;
        if (typeof b3Context !== 'string') return context;
        var match = b3Context.match(B3_CONTEXT_REGEX);
        if (!match) return context;
        var _a = __read(match, 4), extractedTraceId = _a[1], spanId = _a[2], samplingState = _a[3];
        var traceId = convertToTraceId128(extractedTraceId);
        if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isValidTraceId"])(traceId) || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isValidSpanId"])(spanId)) return context;
        var traceFlags = convertToTraceFlags(samplingState);
        if (samplingState === DEBUG_STATE) {
            context = context.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$common$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_DEBUG_FLAG_KEY"], samplingState);
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].setSpanContext(context, {
            traceId: traceId,
            spanId: spanId,
            isRemote: true,
            traceFlags: traceFlags
        });
    };
    B3SinglePropagator.prototype.fields = function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_CONTEXT_HEADER"]
        ];
    };
    return B3SinglePropagator;
}();
;
 //# sourceMappingURL=B3SinglePropagator.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/B3Propagator.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "B3Propagator": (()=>B3Propagator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/constants.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$B3MultiPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/B3MultiPropagator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$B3SinglePropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/B3SinglePropagator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/types.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
/**
 * Propagator that extracts B3 context in both single and multi-header variants,
 * with configurable injection format defaulting to B3 single-header. Due to
 * the asymmetry in injection and extraction formats this is not suitable to
 * be implemented as a composite propagator.
 * Based on: https://github.com/openzipkin/b3-propagation
 */ var B3Propagator = function() {
    function B3Propagator(config) {
        if (config === void 0) {
            config = {};
        }
        this._b3MultiPropagator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$B3MultiPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3MultiPropagator"]();
        this._b3SinglePropagator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$B3SinglePropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3SinglePropagator"]();
        if (config.injectEncoding === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3InjectEncoding"].MULTI_HEADER) {
            this._inject = this._b3MultiPropagator.inject;
            this._fields = this._b3MultiPropagator.fields();
        } else {
            this._inject = this._b3SinglePropagator.inject;
            this._fields = this._b3SinglePropagator.fields();
        }
    }
    B3Propagator.prototype.inject = function(context, carrier, setter) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context)) {
            return;
        }
        this._inject(context, carrier, setter);
    };
    B3Propagator.prototype.extract = function(context, carrier, getter) {
        var header = getter.get(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_CONTEXT_HEADER"]);
        var b3Context = Array.isArray(header) ? header[0] : header;
        if (b3Context) {
            return this._b3SinglePropagator.extract(context, carrier, getter);
        } else {
            return this._b3MultiPropagator.extract(context, carrier, getter);
        }
    };
    B3Propagator.prototype.fields = function() {
        return this._fields;
    };
    return B3Propagator;
}();
;
 //# sourceMappingURL=B3Propagator.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "B3InjectEncoding": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3InjectEncoding"]),
    "B3Propagator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$B3Propagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3Propagator"]),
    "B3_CONTEXT_HEADER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["B3_CONTEXT_HEADER"]),
    "X_B3_FLAGS": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_FLAGS"]),
    "X_B3_PARENT_SPAN_ID": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_PARENT_SPAN_ID"]),
    "X_B3_SAMPLED": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_SAMPLED"]),
    "X_B3_SPAN_ID": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_SPAN_ID"]),
    "X_B3_TRACE_ID": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["X_B3_TRACE_ID"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/types.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$B3Propagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/B3Propagator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/constants.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "B3InjectEncoding": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["B3InjectEncoding"]),
    "B3Propagator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["B3Propagator"]),
    "B3_CONTEXT_HEADER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["B3_CONTEXT_HEADER"]),
    "X_B3_FLAGS": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["X_B3_FLAGS"]),
    "X_B3_PARENT_SPAN_ID": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["X_B3_PARENT_SPAN_ID"]),
    "X_B3_SAMPLED": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["X_B3_SAMPLED"]),
    "X_B3_SPAN_ID": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["X_B3_SPAN_ID"]),
    "X_B3_TRACE_ID": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["X_B3_TRACE_ID"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$b3$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript) <exports>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */ __turbopack_esm__({
    "SamplingDecision": (()=>SamplingDecision)
});
var SamplingDecision;
(function(SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */ SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */ SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */ SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {})); //# sourceMappingURL=Sampler.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "AlwaysOffSampler": (()=>AlwaysOffSampler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js [instrumentation-edge] (ecmascript)");
;
/** Sampler that samples no traces. */ var AlwaysOffSampler = function() {
    function AlwaysOffSampler() {}
    AlwaysOffSampler.prototype.shouldSample = function() {
        return {
            decision: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SamplingDecision"].NOT_RECORD
        };
    };
    AlwaysOffSampler.prototype.toString = function() {
        return 'AlwaysOffSampler';
    };
    return AlwaysOffSampler;
}();
;
 //# sourceMappingURL=AlwaysOffSampler.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "AlwaysOnSampler": (()=>AlwaysOnSampler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js [instrumentation-edge] (ecmascript)");
;
/** Sampler that samples all traces. */ var AlwaysOnSampler = function() {
    function AlwaysOnSampler() {}
    AlwaysOnSampler.prototype.shouldSample = function() {
        return {
            decision: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SamplingDecision"].RECORD_AND_SAMPLED
        };
    };
    AlwaysOnSampler.prototype.toString = function() {
        return 'AlwaysOnSampler';
    };
    return AlwaysOnSampler;
}();
;
 //# sourceMappingURL=AlwaysOnSampler.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/attributes.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "isAttributeKey": (()=>isAttributeKey),
    "isAttributeValue": (()=>isAttributeValue),
    "sanitizeAttributes": (()=>sanitizeAttributes)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
;
function sanitizeAttributes(attributes) {
    var e_1, _a;
    var out = {};
    if (typeof attributes !== 'object' || attributes == null) {
        return out;
    }
    try {
        for(var _b = __values(Object.entries(attributes)), _c = _b.next(); !_c.done; _c = _b.next()){
            var _d = __read(_c.value, 2), key = _d[0], val = _d[1];
            if (!isAttributeKey(key)) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Invalid attribute key: " + key);
                continue;
            }
            if (!isAttributeValue(val)) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Invalid attribute value set for key: " + key);
                continue;
            }
            if (Array.isArray(val)) {
                out[key] = val.slice();
            } else {
                out[key] = val;
            }
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return out;
}
function isAttributeKey(key) {
    return typeof key === 'string' && key.length > 0;
}
function isAttributeValue(val) {
    if (val == null) {
        return true;
    }
    if (Array.isArray(val)) {
        return isHomogeneousAttributeValueArray(val);
    }
    return isValidPrimitiveAttributeValue(val);
}
function isHomogeneousAttributeValueArray(arr) {
    var e_2, _a;
    var type;
    try {
        for(var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()){
            var element = arr_1_1.value;
            // null/undefined elements are allowed
            if (element == null) continue;
            if (!type) {
                if (isValidPrimitiveAttributeValue(element)) {
                    type = typeof element;
                    continue;
                }
                // encountered an invalid primitive
                return false;
            }
            if (typeof element === type) {
                continue;
            }
            return false;
        }
    } catch (e_2_1) {
        e_2 = {
            error: e_2_1
        };
    } finally{
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        } finally{
            if (e_2) throw e_2.error;
        }
    }
    return true;
}
function isValidPrimitiveAttributeValue(val) {
    switch(typeof val){
        case 'number':
        case 'boolean':
        case 'string':
            return true;
    }
    return false;
} //# sourceMappingURL=attributes.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/performance.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "otperformance": (()=>otperformance)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$perf_hooks__$5b$external$5d$__$28$perf_hooks$2c$__cjs$29$__ = __turbopack_import__("[externals]/perf_hooks [external] (perf_hooks, cjs)");
;
var otperformance = __TURBOPACK__imported__module__$5b$externals$5d2f$perf_hooks__$5b$external$5d$__$28$perf_hooks$2c$__cjs$29$__["performance"]; //# sourceMappingURL=performance.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/time.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "addHrTimes": (()=>addHrTimes),
    "getTimeOrigin": (()=>getTimeOrigin),
    "hrTime": (()=>hrTime),
    "hrTimeDuration": (()=>hrTimeDuration),
    "hrTimeToMicroseconds": (()=>hrTimeToMicroseconds),
    "hrTimeToMilliseconds": (()=>hrTimeToMilliseconds),
    "hrTimeToNanoseconds": (()=>hrTimeToNanoseconds),
    "hrTimeToTimeStamp": (()=>hrTimeToTimeStamp),
    "isTimeInput": (()=>isTimeInput),
    "isTimeInputHrTime": (()=>isTimeInputHrTime),
    "millisToHrTime": (()=>millisToHrTime),
    "timeInputToHrTime": (()=>timeInputToHrTime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$performance$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/performance.js [instrumentation-edge] (ecmascript)");
;
var NANOSECOND_DIGITS = 9;
var NANOSECOND_DIGITS_IN_MILLIS = 6;
var MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
var SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
function millisToHrTime(epochMillis) {
    var epochSeconds = epochMillis / 1000;
    // Decimals only.
    var seconds = Math.trunc(epochSeconds);
    // Round sub-nanosecond accuracy to nanosecond.
    var nanos = Math.round(epochMillis % 1000 * MILLISECONDS_TO_NANOSECONDS);
    return [
        seconds,
        nanos
    ];
}
function getTimeOrigin() {
    var timeOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$performance$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["otperformance"].timeOrigin;
    if (typeof timeOrigin !== 'number') {
        var perf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$performance$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["otperformance"];
        timeOrigin = perf.timing && perf.timing.fetchStart;
    }
    return timeOrigin;
}
function hrTime(performanceNow) {
    var timeOrigin = millisToHrTime(getTimeOrigin());
    var now = millisToHrTime(typeof performanceNow === 'number' ? performanceNow : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$performance$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["otperformance"].now());
    return addHrTimes(timeOrigin, now);
}
function timeInputToHrTime(time) {
    // process.hrtime
    if (isTimeInputHrTime(time)) {
        return time;
    } else if (typeof time === 'number') {
        // Must be a performance.now() if it's smaller than process start time.
        if (time < getTimeOrigin()) {
            return hrTime(time);
        } else {
            // epoch milliseconds or performance.timeOrigin
            return millisToHrTime(time);
        }
    } else if (time instanceof Date) {
        return millisToHrTime(time.getTime());
    } else {
        throw TypeError('Invalid input type');
    }
}
function hrTimeDuration(startTime, endTime) {
    var seconds = endTime[0] - startTime[0];
    var nanos = endTime[1] - startTime[1];
    // overflow
    if (nanos < 0) {
        seconds -= 1;
        // negate
        nanos += SECOND_TO_NANOSECONDS;
    }
    return [
        seconds,
        nanos
    ];
}
function hrTimeToTimeStamp(time) {
    var precision = NANOSECOND_DIGITS;
    var tmp = "" + '0'.repeat(precision) + time[1] + "Z";
    var nanoString = tmp.substring(tmp.length - precision - 1);
    var date = new Date(time[0] * 1000).toISOString();
    return date.replace('000Z', nanoString);
}
function hrTimeToNanoseconds(time) {
    return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
function hrTimeToMilliseconds(time) {
    return time[0] * 1e3 + time[1] / 1e6;
}
function hrTimeToMicroseconds(time) {
    return time[0] * 1e6 + time[1] / 1e3;
}
function isTimeInputHrTime(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number';
}
function isTimeInput(value) {
    return isTimeInputHrTime(value) || typeof value === 'number' || value instanceof Date;
}
function addHrTimes(time1, time2) {
    var out = [
        time1[0] + time2[0],
        time1[1] + time2[1]
    ];
    // Nanoseconds
    if (out[1] >= SECOND_TO_NANOSECONDS) {
        out[1] -= SECOND_TO_NANOSECONDS;
        out[0] += 1;
    }
    return out;
} //# sourceMappingURL=time.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a const map from the given values
 * @param values - An array of values to be used as keys and values in the map.
 * @returns A populated version of the map with the values and keys derived from the values.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_esm__({
    "createConstMap": (()=>createConstMap)
});
function createConstMap(values) {
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
    var res = {};
    var len = values.length;
    for(var lp = 0; lp < len; lp++){
        var val = values[lp];
        if (val) {
            res[String(val).toUpperCase().replace(/[-.]/g, '_')] = val;
        }
    }
    return res;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "DBCASSANDRACONSISTENCYLEVELVALUES_ALL": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_ALL),
    "DBCASSANDRACONSISTENCYLEVELVALUES_ANY": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_ANY),
    "DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM),
    "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE),
    "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM),
    "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL),
    "DBCASSANDRACONSISTENCYLEVELVALUES_ONE": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_ONE),
    "DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM),
    "DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL),
    "DBCASSANDRACONSISTENCYLEVELVALUES_THREE": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_THREE),
    "DBCASSANDRACONSISTENCYLEVELVALUES_TWO": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_TWO),
    "DBSYSTEMVALUES_ADABAS": (()=>DBSYSTEMVALUES_ADABAS),
    "DBSYSTEMVALUES_CACHE": (()=>DBSYSTEMVALUES_CACHE),
    "DBSYSTEMVALUES_CASSANDRA": (()=>DBSYSTEMVALUES_CASSANDRA),
    "DBSYSTEMVALUES_CLOUDSCAPE": (()=>DBSYSTEMVALUES_CLOUDSCAPE),
    "DBSYSTEMVALUES_COCKROACHDB": (()=>DBSYSTEMVALUES_COCKROACHDB),
    "DBSYSTEMVALUES_COLDFUSION": (()=>DBSYSTEMVALUES_COLDFUSION),
    "DBSYSTEMVALUES_COSMOSDB": (()=>DBSYSTEMVALUES_COSMOSDB),
    "DBSYSTEMVALUES_COUCHBASE": (()=>DBSYSTEMVALUES_COUCHBASE),
    "DBSYSTEMVALUES_COUCHDB": (()=>DBSYSTEMVALUES_COUCHDB),
    "DBSYSTEMVALUES_DB2": (()=>DBSYSTEMVALUES_DB2),
    "DBSYSTEMVALUES_DERBY": (()=>DBSYSTEMVALUES_DERBY),
    "DBSYSTEMVALUES_DYNAMODB": (()=>DBSYSTEMVALUES_DYNAMODB),
    "DBSYSTEMVALUES_EDB": (()=>DBSYSTEMVALUES_EDB),
    "DBSYSTEMVALUES_ELASTICSEARCH": (()=>DBSYSTEMVALUES_ELASTICSEARCH),
    "DBSYSTEMVALUES_FILEMAKER": (()=>DBSYSTEMVALUES_FILEMAKER),
    "DBSYSTEMVALUES_FIREBIRD": (()=>DBSYSTEMVALUES_FIREBIRD),
    "DBSYSTEMVALUES_FIRSTSQL": (()=>DBSYSTEMVALUES_FIRSTSQL),
    "DBSYSTEMVALUES_GEODE": (()=>DBSYSTEMVALUES_GEODE),
    "DBSYSTEMVALUES_H2": (()=>DBSYSTEMVALUES_H2),
    "DBSYSTEMVALUES_HANADB": (()=>DBSYSTEMVALUES_HANADB),
    "DBSYSTEMVALUES_HBASE": (()=>DBSYSTEMVALUES_HBASE),
    "DBSYSTEMVALUES_HIVE": (()=>DBSYSTEMVALUES_HIVE),
    "DBSYSTEMVALUES_HSQLDB": (()=>DBSYSTEMVALUES_HSQLDB),
    "DBSYSTEMVALUES_INFORMIX": (()=>DBSYSTEMVALUES_INFORMIX),
    "DBSYSTEMVALUES_INGRES": (()=>DBSYSTEMVALUES_INGRES),
    "DBSYSTEMVALUES_INSTANTDB": (()=>DBSYSTEMVALUES_INSTANTDB),
    "DBSYSTEMVALUES_INTERBASE": (()=>DBSYSTEMVALUES_INTERBASE),
    "DBSYSTEMVALUES_MARIADB": (()=>DBSYSTEMVALUES_MARIADB),
    "DBSYSTEMVALUES_MAXDB": (()=>DBSYSTEMVALUES_MAXDB),
    "DBSYSTEMVALUES_MEMCACHED": (()=>DBSYSTEMVALUES_MEMCACHED),
    "DBSYSTEMVALUES_MONGODB": (()=>DBSYSTEMVALUES_MONGODB),
    "DBSYSTEMVALUES_MSSQL": (()=>DBSYSTEMVALUES_MSSQL),
    "DBSYSTEMVALUES_MYSQL": (()=>DBSYSTEMVALUES_MYSQL),
    "DBSYSTEMVALUES_NEO4J": (()=>DBSYSTEMVALUES_NEO4J),
    "DBSYSTEMVALUES_NETEZZA": (()=>DBSYSTEMVALUES_NETEZZA),
    "DBSYSTEMVALUES_ORACLE": (()=>DBSYSTEMVALUES_ORACLE),
    "DBSYSTEMVALUES_OTHER_SQL": (()=>DBSYSTEMVALUES_OTHER_SQL),
    "DBSYSTEMVALUES_PERVASIVE": (()=>DBSYSTEMVALUES_PERVASIVE),
    "DBSYSTEMVALUES_POINTBASE": (()=>DBSYSTEMVALUES_POINTBASE),
    "DBSYSTEMVALUES_POSTGRESQL": (()=>DBSYSTEMVALUES_POSTGRESQL),
    "DBSYSTEMVALUES_PROGRESS": (()=>DBSYSTEMVALUES_PROGRESS),
    "DBSYSTEMVALUES_REDIS": (()=>DBSYSTEMVALUES_REDIS),
    "DBSYSTEMVALUES_REDSHIFT": (()=>DBSYSTEMVALUES_REDSHIFT),
    "DBSYSTEMVALUES_SQLITE": (()=>DBSYSTEMVALUES_SQLITE),
    "DBSYSTEMVALUES_SYBASE": (()=>DBSYSTEMVALUES_SYBASE),
    "DBSYSTEMVALUES_TERADATA": (()=>DBSYSTEMVALUES_TERADATA),
    "DBSYSTEMVALUES_VERTICA": (()=>DBSYSTEMVALUES_VERTICA),
    "DbCassandraConsistencyLevelValues": (()=>DbCassandraConsistencyLevelValues),
    "DbSystemValues": (()=>DbSystemValues),
    "FAASDOCUMENTOPERATIONVALUES_DELETE": (()=>FAASDOCUMENTOPERATIONVALUES_DELETE),
    "FAASDOCUMENTOPERATIONVALUES_EDIT": (()=>FAASDOCUMENTOPERATIONVALUES_EDIT),
    "FAASDOCUMENTOPERATIONVALUES_INSERT": (()=>FAASDOCUMENTOPERATIONVALUES_INSERT),
    "FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD": (()=>FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD),
    "FAASINVOKEDPROVIDERVALUES_AWS": (()=>FAASINVOKEDPROVIDERVALUES_AWS),
    "FAASINVOKEDPROVIDERVALUES_AZURE": (()=>FAASINVOKEDPROVIDERVALUES_AZURE),
    "FAASINVOKEDPROVIDERVALUES_GCP": (()=>FAASINVOKEDPROVIDERVALUES_GCP),
    "FAASTRIGGERVALUES_DATASOURCE": (()=>FAASTRIGGERVALUES_DATASOURCE),
    "FAASTRIGGERVALUES_HTTP": (()=>FAASTRIGGERVALUES_HTTP),
    "FAASTRIGGERVALUES_OTHER": (()=>FAASTRIGGERVALUES_OTHER),
    "FAASTRIGGERVALUES_PUBSUB": (()=>FAASTRIGGERVALUES_PUBSUB),
    "FAASTRIGGERVALUES_TIMER": (()=>FAASTRIGGERVALUES_TIMER),
    "FaasDocumentOperationValues": (()=>FaasDocumentOperationValues),
    "FaasInvokedProviderValues": (()=>FaasInvokedProviderValues),
    "FaasTriggerValues": (()=>FaasTriggerValues),
    "HTTPFLAVORVALUES_HTTP_1_0": (()=>HTTPFLAVORVALUES_HTTP_1_0),
    "HTTPFLAVORVALUES_HTTP_1_1": (()=>HTTPFLAVORVALUES_HTTP_1_1),
    "HTTPFLAVORVALUES_HTTP_2_0": (()=>HTTPFLAVORVALUES_HTTP_2_0),
    "HTTPFLAVORVALUES_QUIC": (()=>HTTPFLAVORVALUES_QUIC),
    "HTTPFLAVORVALUES_SPDY": (()=>HTTPFLAVORVALUES_SPDY),
    "HttpFlavorValues": (()=>HttpFlavorValues),
    "MESSAGETYPEVALUES_RECEIVED": (()=>MESSAGETYPEVALUES_RECEIVED),
    "MESSAGETYPEVALUES_SENT": (()=>MESSAGETYPEVALUES_SENT),
    "MESSAGINGDESTINATIONKINDVALUES_QUEUE": (()=>MESSAGINGDESTINATIONKINDVALUES_QUEUE),
    "MESSAGINGDESTINATIONKINDVALUES_TOPIC": (()=>MESSAGINGDESTINATIONKINDVALUES_TOPIC),
    "MESSAGINGOPERATIONVALUES_PROCESS": (()=>MESSAGINGOPERATIONVALUES_PROCESS),
    "MESSAGINGOPERATIONVALUES_RECEIVE": (()=>MESSAGINGOPERATIONVALUES_RECEIVE),
    "MessageTypeValues": (()=>MessageTypeValues),
    "MessagingDestinationKindValues": (()=>MessagingDestinationKindValues),
    "MessagingOperationValues": (()=>MessagingOperationValues),
    "NETHOSTCONNECTIONSUBTYPEVALUES_CDMA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_CDMA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EDGE": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EDGE),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B),
    "NETHOSTCONNECTIONSUBTYPEVALUES_GPRS": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_GPRS),
    "NETHOSTCONNECTIONSUBTYPEVALUES_GSM": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_GSM),
    "NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_HSPA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSPA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP),
    "NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_IDEN": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_IDEN),
    "NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN),
    "NETHOSTCONNECTIONSUBTYPEVALUES_LTE": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_LTE),
    "NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_NR": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_NR),
    "NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_UMTS": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_UMTS),
    "NETHOSTCONNECTIONTYPEVALUES_CELL": (()=>NETHOSTCONNECTIONTYPEVALUES_CELL),
    "NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE": (()=>NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE),
    "NETHOSTCONNECTIONTYPEVALUES_UNKNOWN": (()=>NETHOSTCONNECTIONTYPEVALUES_UNKNOWN),
    "NETHOSTCONNECTIONTYPEVALUES_WIFI": (()=>NETHOSTCONNECTIONTYPEVALUES_WIFI),
    "NETHOSTCONNECTIONTYPEVALUES_WIRED": (()=>NETHOSTCONNECTIONTYPEVALUES_WIRED),
    "NETTRANSPORTVALUES_INPROC": (()=>NETTRANSPORTVALUES_INPROC),
    "NETTRANSPORTVALUES_IP": (()=>NETTRANSPORTVALUES_IP),
    "NETTRANSPORTVALUES_IP_TCP": (()=>NETTRANSPORTVALUES_IP_TCP),
    "NETTRANSPORTVALUES_IP_UDP": (()=>NETTRANSPORTVALUES_IP_UDP),
    "NETTRANSPORTVALUES_OTHER": (()=>NETTRANSPORTVALUES_OTHER),
    "NETTRANSPORTVALUES_PIPE": (()=>NETTRANSPORTVALUES_PIPE),
    "NETTRANSPORTVALUES_UNIX": (()=>NETTRANSPORTVALUES_UNIX),
    "NetHostConnectionSubtypeValues": (()=>NetHostConnectionSubtypeValues),
    "NetHostConnectionTypeValues": (()=>NetHostConnectionTypeValues),
    "NetTransportValues": (()=>NetTransportValues),
    "RPCGRPCSTATUSCODEVALUES_ABORTED": (()=>RPCGRPCSTATUSCODEVALUES_ABORTED),
    "RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS": (()=>RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS),
    "RPCGRPCSTATUSCODEVALUES_CANCELLED": (()=>RPCGRPCSTATUSCODEVALUES_CANCELLED),
    "RPCGRPCSTATUSCODEVALUES_DATA_LOSS": (()=>RPCGRPCSTATUSCODEVALUES_DATA_LOSS),
    "RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED": (()=>RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED),
    "RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION": (()=>RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION),
    "RPCGRPCSTATUSCODEVALUES_INTERNAL": (()=>RPCGRPCSTATUSCODEVALUES_INTERNAL),
    "RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT": (()=>RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT),
    "RPCGRPCSTATUSCODEVALUES_NOT_FOUND": (()=>RPCGRPCSTATUSCODEVALUES_NOT_FOUND),
    "RPCGRPCSTATUSCODEVALUES_OK": (()=>RPCGRPCSTATUSCODEVALUES_OK),
    "RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE": (()=>RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE),
    "RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED": (()=>RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED),
    "RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED": (()=>RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED),
    "RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED": (()=>RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED),
    "RPCGRPCSTATUSCODEVALUES_UNAVAILABLE": (()=>RPCGRPCSTATUSCODEVALUES_UNAVAILABLE),
    "RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED": (()=>RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED),
    "RPCGRPCSTATUSCODEVALUES_UNKNOWN": (()=>RPCGRPCSTATUSCODEVALUES_UNKNOWN),
    "RpcGrpcStatusCodeValues": (()=>RpcGrpcStatusCodeValues),
    "SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET": (()=>SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET),
    "SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS": (()=>SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS),
    "SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ": (()=>SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ),
    "SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY": (()=>SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY),
    "SEMATTRS_AWS_DYNAMODB_COUNT": (()=>SEMATTRS_AWS_DYNAMODB_COUNT),
    "SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE": (()=>SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE),
    "SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES": (()=>SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES),
    "SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES": (()=>SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES),
    "SEMATTRS_AWS_DYNAMODB_INDEX_NAME": (()=>SEMATTRS_AWS_DYNAMODB_INDEX_NAME),
    "SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS": (()=>SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS),
    "SEMATTRS_AWS_DYNAMODB_LIMIT": (()=>SEMATTRS_AWS_DYNAMODB_LIMIT),
    "SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES": (()=>SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES),
    "SEMATTRS_AWS_DYNAMODB_PROJECTION": (()=>SEMATTRS_AWS_DYNAMODB_PROJECTION),
    "SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY": (()=>SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY),
    "SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY": (()=>SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY),
    "SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT": (()=>SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT),
    "SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD": (()=>SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD),
    "SEMATTRS_AWS_DYNAMODB_SEGMENT": (()=>SEMATTRS_AWS_DYNAMODB_SEGMENT),
    "SEMATTRS_AWS_DYNAMODB_SELECT": (()=>SEMATTRS_AWS_DYNAMODB_SELECT),
    "SEMATTRS_AWS_DYNAMODB_TABLE_COUNT": (()=>SEMATTRS_AWS_DYNAMODB_TABLE_COUNT),
    "SEMATTRS_AWS_DYNAMODB_TABLE_NAMES": (()=>SEMATTRS_AWS_DYNAMODB_TABLE_NAMES),
    "SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS": (()=>SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS),
    "SEMATTRS_AWS_LAMBDA_INVOKED_ARN": (()=>SEMATTRS_AWS_LAMBDA_INVOKED_ARN),
    "SEMATTRS_CODE_FILEPATH": (()=>SEMATTRS_CODE_FILEPATH),
    "SEMATTRS_CODE_FUNCTION": (()=>SEMATTRS_CODE_FUNCTION),
    "SEMATTRS_CODE_LINENO": (()=>SEMATTRS_CODE_LINENO),
    "SEMATTRS_CODE_NAMESPACE": (()=>SEMATTRS_CODE_NAMESPACE),
    "SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL": (()=>SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL),
    "SEMATTRS_DB_CASSANDRA_COORDINATOR_DC": (()=>SEMATTRS_DB_CASSANDRA_COORDINATOR_DC),
    "SEMATTRS_DB_CASSANDRA_COORDINATOR_ID": (()=>SEMATTRS_DB_CASSANDRA_COORDINATOR_ID),
    "SEMATTRS_DB_CASSANDRA_IDEMPOTENCE": (()=>SEMATTRS_DB_CASSANDRA_IDEMPOTENCE),
    "SEMATTRS_DB_CASSANDRA_KEYSPACE": (()=>SEMATTRS_DB_CASSANDRA_KEYSPACE),
    "SEMATTRS_DB_CASSANDRA_PAGE_SIZE": (()=>SEMATTRS_DB_CASSANDRA_PAGE_SIZE),
    "SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT": (()=>SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT),
    "SEMATTRS_DB_CASSANDRA_TABLE": (()=>SEMATTRS_DB_CASSANDRA_TABLE),
    "SEMATTRS_DB_CONNECTION_STRING": (()=>SEMATTRS_DB_CONNECTION_STRING),
    "SEMATTRS_DB_HBASE_NAMESPACE": (()=>SEMATTRS_DB_HBASE_NAMESPACE),
    "SEMATTRS_DB_JDBC_DRIVER_CLASSNAME": (()=>SEMATTRS_DB_JDBC_DRIVER_CLASSNAME),
    "SEMATTRS_DB_MONGODB_COLLECTION": (()=>SEMATTRS_DB_MONGODB_COLLECTION),
    "SEMATTRS_DB_MSSQL_INSTANCE_NAME": (()=>SEMATTRS_DB_MSSQL_INSTANCE_NAME),
    "SEMATTRS_DB_NAME": (()=>SEMATTRS_DB_NAME),
    "SEMATTRS_DB_OPERATION": (()=>SEMATTRS_DB_OPERATION),
    "SEMATTRS_DB_REDIS_DATABASE_INDEX": (()=>SEMATTRS_DB_REDIS_DATABASE_INDEX),
    "SEMATTRS_DB_SQL_TABLE": (()=>SEMATTRS_DB_SQL_TABLE),
    "SEMATTRS_DB_STATEMENT": (()=>SEMATTRS_DB_STATEMENT),
    "SEMATTRS_DB_SYSTEM": (()=>SEMATTRS_DB_SYSTEM),
    "SEMATTRS_DB_USER": (()=>SEMATTRS_DB_USER),
    "SEMATTRS_ENDUSER_ID": (()=>SEMATTRS_ENDUSER_ID),
    "SEMATTRS_ENDUSER_ROLE": (()=>SEMATTRS_ENDUSER_ROLE),
    "SEMATTRS_ENDUSER_SCOPE": (()=>SEMATTRS_ENDUSER_SCOPE),
    "SEMATTRS_EXCEPTION_ESCAPED": (()=>SEMATTRS_EXCEPTION_ESCAPED),
    "SEMATTRS_EXCEPTION_MESSAGE": (()=>SEMATTRS_EXCEPTION_MESSAGE),
    "SEMATTRS_EXCEPTION_STACKTRACE": (()=>SEMATTRS_EXCEPTION_STACKTRACE),
    "SEMATTRS_EXCEPTION_TYPE": (()=>SEMATTRS_EXCEPTION_TYPE),
    "SEMATTRS_FAAS_COLDSTART": (()=>SEMATTRS_FAAS_COLDSTART),
    "SEMATTRS_FAAS_CRON": (()=>SEMATTRS_FAAS_CRON),
    "SEMATTRS_FAAS_DOCUMENT_COLLECTION": (()=>SEMATTRS_FAAS_DOCUMENT_COLLECTION),
    "SEMATTRS_FAAS_DOCUMENT_NAME": (()=>SEMATTRS_FAAS_DOCUMENT_NAME),
    "SEMATTRS_FAAS_DOCUMENT_OPERATION": (()=>SEMATTRS_FAAS_DOCUMENT_OPERATION),
    "SEMATTRS_FAAS_DOCUMENT_TIME": (()=>SEMATTRS_FAAS_DOCUMENT_TIME),
    "SEMATTRS_FAAS_EXECUTION": (()=>SEMATTRS_FAAS_EXECUTION),
    "SEMATTRS_FAAS_INVOKED_NAME": (()=>SEMATTRS_FAAS_INVOKED_NAME),
    "SEMATTRS_FAAS_INVOKED_PROVIDER": (()=>SEMATTRS_FAAS_INVOKED_PROVIDER),
    "SEMATTRS_FAAS_INVOKED_REGION": (()=>SEMATTRS_FAAS_INVOKED_REGION),
    "SEMATTRS_FAAS_TIME": (()=>SEMATTRS_FAAS_TIME),
    "SEMATTRS_FAAS_TRIGGER": (()=>SEMATTRS_FAAS_TRIGGER),
    "SEMATTRS_HTTP_CLIENT_IP": (()=>SEMATTRS_HTTP_CLIENT_IP),
    "SEMATTRS_HTTP_FLAVOR": (()=>SEMATTRS_HTTP_FLAVOR),
    "SEMATTRS_HTTP_HOST": (()=>SEMATTRS_HTTP_HOST),
    "SEMATTRS_HTTP_METHOD": (()=>SEMATTRS_HTTP_METHOD),
    "SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH": (()=>SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH),
    "SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED": (()=>SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED),
    "SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH": (()=>SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH),
    "SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED": (()=>SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED),
    "SEMATTRS_HTTP_ROUTE": (()=>SEMATTRS_HTTP_ROUTE),
    "SEMATTRS_HTTP_SCHEME": (()=>SEMATTRS_HTTP_SCHEME),
    "SEMATTRS_HTTP_SERVER_NAME": (()=>SEMATTRS_HTTP_SERVER_NAME),
    "SEMATTRS_HTTP_STATUS_CODE": (()=>SEMATTRS_HTTP_STATUS_CODE),
    "SEMATTRS_HTTP_TARGET": (()=>SEMATTRS_HTTP_TARGET),
    "SEMATTRS_HTTP_URL": (()=>SEMATTRS_HTTP_URL),
    "SEMATTRS_HTTP_USER_AGENT": (()=>SEMATTRS_HTTP_USER_AGENT),
    "SEMATTRS_MESSAGE_COMPRESSED_SIZE": (()=>SEMATTRS_MESSAGE_COMPRESSED_SIZE),
    "SEMATTRS_MESSAGE_ID": (()=>SEMATTRS_MESSAGE_ID),
    "SEMATTRS_MESSAGE_TYPE": (()=>SEMATTRS_MESSAGE_TYPE),
    "SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE": (()=>SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE),
    "SEMATTRS_MESSAGING_CONSUMER_ID": (()=>SEMATTRS_MESSAGING_CONSUMER_ID),
    "SEMATTRS_MESSAGING_CONVERSATION_ID": (()=>SEMATTRS_MESSAGING_CONVERSATION_ID),
    "SEMATTRS_MESSAGING_DESTINATION": (()=>SEMATTRS_MESSAGING_DESTINATION),
    "SEMATTRS_MESSAGING_DESTINATION_KIND": (()=>SEMATTRS_MESSAGING_DESTINATION_KIND),
    "SEMATTRS_MESSAGING_KAFKA_CLIENT_ID": (()=>SEMATTRS_MESSAGING_KAFKA_CLIENT_ID),
    "SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP": (()=>SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP),
    "SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY": (()=>SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY),
    "SEMATTRS_MESSAGING_KAFKA_PARTITION": (()=>SEMATTRS_MESSAGING_KAFKA_PARTITION),
    "SEMATTRS_MESSAGING_KAFKA_TOMBSTONE": (()=>SEMATTRS_MESSAGING_KAFKA_TOMBSTONE),
    "SEMATTRS_MESSAGING_MESSAGE_ID": (()=>SEMATTRS_MESSAGING_MESSAGE_ID),
    "SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES": (()=>SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES),
    "SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES": (()=>SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES),
    "SEMATTRS_MESSAGING_OPERATION": (()=>SEMATTRS_MESSAGING_OPERATION),
    "SEMATTRS_MESSAGING_PROTOCOL": (()=>SEMATTRS_MESSAGING_PROTOCOL),
    "SEMATTRS_MESSAGING_PROTOCOL_VERSION": (()=>SEMATTRS_MESSAGING_PROTOCOL_VERSION),
    "SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY": (()=>SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY),
    "SEMATTRS_MESSAGING_SYSTEM": (()=>SEMATTRS_MESSAGING_SYSTEM),
    "SEMATTRS_MESSAGING_TEMP_DESTINATION": (()=>SEMATTRS_MESSAGING_TEMP_DESTINATION),
    "SEMATTRS_MESSAGING_URL": (()=>SEMATTRS_MESSAGING_URL),
    "SEMATTRS_NET_HOST_CARRIER_ICC": (()=>SEMATTRS_NET_HOST_CARRIER_ICC),
    "SEMATTRS_NET_HOST_CARRIER_MCC": (()=>SEMATTRS_NET_HOST_CARRIER_MCC),
    "SEMATTRS_NET_HOST_CARRIER_MNC": (()=>SEMATTRS_NET_HOST_CARRIER_MNC),
    "SEMATTRS_NET_HOST_CARRIER_NAME": (()=>SEMATTRS_NET_HOST_CARRIER_NAME),
    "SEMATTRS_NET_HOST_CONNECTION_SUBTYPE": (()=>SEMATTRS_NET_HOST_CONNECTION_SUBTYPE),
    "SEMATTRS_NET_HOST_CONNECTION_TYPE": (()=>SEMATTRS_NET_HOST_CONNECTION_TYPE),
    "SEMATTRS_NET_HOST_IP": (()=>SEMATTRS_NET_HOST_IP),
    "SEMATTRS_NET_HOST_NAME": (()=>SEMATTRS_NET_HOST_NAME),
    "SEMATTRS_NET_HOST_PORT": (()=>SEMATTRS_NET_HOST_PORT),
    "SEMATTRS_NET_PEER_IP": (()=>SEMATTRS_NET_PEER_IP),
    "SEMATTRS_NET_PEER_NAME": (()=>SEMATTRS_NET_PEER_NAME),
    "SEMATTRS_NET_PEER_PORT": (()=>SEMATTRS_NET_PEER_PORT),
    "SEMATTRS_NET_TRANSPORT": (()=>SEMATTRS_NET_TRANSPORT),
    "SEMATTRS_PEER_SERVICE": (()=>SEMATTRS_PEER_SERVICE),
    "SEMATTRS_RPC_GRPC_STATUS_CODE": (()=>SEMATTRS_RPC_GRPC_STATUS_CODE),
    "SEMATTRS_RPC_JSONRPC_ERROR_CODE": (()=>SEMATTRS_RPC_JSONRPC_ERROR_CODE),
    "SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE": (()=>SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE),
    "SEMATTRS_RPC_JSONRPC_REQUEST_ID": (()=>SEMATTRS_RPC_JSONRPC_REQUEST_ID),
    "SEMATTRS_RPC_JSONRPC_VERSION": (()=>SEMATTRS_RPC_JSONRPC_VERSION),
    "SEMATTRS_RPC_METHOD": (()=>SEMATTRS_RPC_METHOD),
    "SEMATTRS_RPC_SERVICE": (()=>SEMATTRS_RPC_SERVICE),
    "SEMATTRS_RPC_SYSTEM": (()=>SEMATTRS_RPC_SYSTEM),
    "SEMATTRS_THREAD_ID": (()=>SEMATTRS_THREAD_ID),
    "SEMATTRS_THREAD_NAME": (()=>SEMATTRS_THREAD_NAME),
    "SemanticAttributes": (()=>SemanticAttributes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [instrumentation-edge] (ecmascript)");
;
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticAttributes
//----------------------------------------------------------------------------------------------------------
// Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_AWS_LAMBDA_INVOKED_ARN = 'aws.lambda.invoked_arn';
var TMP_DB_SYSTEM = 'db.system';
var TMP_DB_CONNECTION_STRING = 'db.connection_string';
var TMP_DB_USER = 'db.user';
var TMP_DB_JDBC_DRIVER_CLASSNAME = 'db.jdbc.driver_classname';
var TMP_DB_NAME = 'db.name';
var TMP_DB_STATEMENT = 'db.statement';
var TMP_DB_OPERATION = 'db.operation';
var TMP_DB_MSSQL_INSTANCE_NAME = 'db.mssql.instance_name';
var TMP_DB_CASSANDRA_KEYSPACE = 'db.cassandra.keyspace';
var TMP_DB_CASSANDRA_PAGE_SIZE = 'db.cassandra.page_size';
var TMP_DB_CASSANDRA_CONSISTENCY_LEVEL = 'db.cassandra.consistency_level';
var TMP_DB_CASSANDRA_TABLE = 'db.cassandra.table';
var TMP_DB_CASSANDRA_IDEMPOTENCE = 'db.cassandra.idempotence';
var TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = 'db.cassandra.speculative_execution_count';
var TMP_DB_CASSANDRA_COORDINATOR_ID = 'db.cassandra.coordinator.id';
var TMP_DB_CASSANDRA_COORDINATOR_DC = 'db.cassandra.coordinator.dc';
var TMP_DB_HBASE_NAMESPACE = 'db.hbase.namespace';
var TMP_DB_REDIS_DATABASE_INDEX = 'db.redis.database_index';
var TMP_DB_MONGODB_COLLECTION = 'db.mongodb.collection';
var TMP_DB_SQL_TABLE = 'db.sql.table';
var TMP_EXCEPTION_TYPE = 'exception.type';
var TMP_EXCEPTION_MESSAGE = 'exception.message';
var TMP_EXCEPTION_STACKTRACE = 'exception.stacktrace';
var TMP_EXCEPTION_ESCAPED = 'exception.escaped';
var TMP_FAAS_TRIGGER = 'faas.trigger';
var TMP_FAAS_EXECUTION = 'faas.execution';
var TMP_FAAS_DOCUMENT_COLLECTION = 'faas.document.collection';
var TMP_FAAS_DOCUMENT_OPERATION = 'faas.document.operation';
var TMP_FAAS_DOCUMENT_TIME = 'faas.document.time';
var TMP_FAAS_DOCUMENT_NAME = 'faas.document.name';
var TMP_FAAS_TIME = 'faas.time';
var TMP_FAAS_CRON = 'faas.cron';
var TMP_FAAS_COLDSTART = 'faas.coldstart';
var TMP_FAAS_INVOKED_NAME = 'faas.invoked_name';
var TMP_FAAS_INVOKED_PROVIDER = 'faas.invoked_provider';
var TMP_FAAS_INVOKED_REGION = 'faas.invoked_region';
var TMP_NET_TRANSPORT = 'net.transport';
var TMP_NET_PEER_IP = 'net.peer.ip';
var TMP_NET_PEER_PORT = 'net.peer.port';
var TMP_NET_PEER_NAME = 'net.peer.name';
var TMP_NET_HOST_IP = 'net.host.ip';
var TMP_NET_HOST_PORT = 'net.host.port';
var TMP_NET_HOST_NAME = 'net.host.name';
var TMP_NET_HOST_CONNECTION_TYPE = 'net.host.connection.type';
var TMP_NET_HOST_CONNECTION_SUBTYPE = 'net.host.connection.subtype';
var TMP_NET_HOST_CARRIER_NAME = 'net.host.carrier.name';
var TMP_NET_HOST_CARRIER_MCC = 'net.host.carrier.mcc';
var TMP_NET_HOST_CARRIER_MNC = 'net.host.carrier.mnc';
var TMP_NET_HOST_CARRIER_ICC = 'net.host.carrier.icc';
var TMP_PEER_SERVICE = 'peer.service';
var TMP_ENDUSER_ID = 'enduser.id';
var TMP_ENDUSER_ROLE = 'enduser.role';
var TMP_ENDUSER_SCOPE = 'enduser.scope';
var TMP_THREAD_ID = 'thread.id';
var TMP_THREAD_NAME = 'thread.name';
var TMP_CODE_FUNCTION = 'code.function';
var TMP_CODE_NAMESPACE = 'code.namespace';
var TMP_CODE_FILEPATH = 'code.filepath';
var TMP_CODE_LINENO = 'code.lineno';
var TMP_HTTP_METHOD = 'http.method';
var TMP_HTTP_URL = 'http.url';
var TMP_HTTP_TARGET = 'http.target';
var TMP_HTTP_HOST = 'http.host';
var TMP_HTTP_SCHEME = 'http.scheme';
var TMP_HTTP_STATUS_CODE = 'http.status_code';
var TMP_HTTP_FLAVOR = 'http.flavor';
var TMP_HTTP_USER_AGENT = 'http.user_agent';
var TMP_HTTP_REQUEST_CONTENT_LENGTH = 'http.request_content_length';
var TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = 'http.request_content_length_uncompressed';
var TMP_HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length';
var TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = 'http.response_content_length_uncompressed';
var TMP_HTTP_SERVER_NAME = 'http.server_name';
var TMP_HTTP_ROUTE = 'http.route';
var TMP_HTTP_CLIENT_IP = 'http.client_ip';
var TMP_AWS_DYNAMODB_TABLE_NAMES = 'aws.dynamodb.table_names';
var TMP_AWS_DYNAMODB_CONSUMED_CAPACITY = 'aws.dynamodb.consumed_capacity';
var TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = 'aws.dynamodb.item_collection_metrics';
var TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = 'aws.dynamodb.provisioned_read_capacity';
var TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = 'aws.dynamodb.provisioned_write_capacity';
var TMP_AWS_DYNAMODB_CONSISTENT_READ = 'aws.dynamodb.consistent_read';
var TMP_AWS_DYNAMODB_PROJECTION = 'aws.dynamodb.projection';
var TMP_AWS_DYNAMODB_LIMIT = 'aws.dynamodb.limit';
var TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET = 'aws.dynamodb.attributes_to_get';
var TMP_AWS_DYNAMODB_INDEX_NAME = 'aws.dynamodb.index_name';
var TMP_AWS_DYNAMODB_SELECT = 'aws.dynamodb.select';
var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = 'aws.dynamodb.global_secondary_indexes';
var TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = 'aws.dynamodb.local_secondary_indexes';
var TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = 'aws.dynamodb.exclusive_start_table';
var TMP_AWS_DYNAMODB_TABLE_COUNT = 'aws.dynamodb.table_count';
var TMP_AWS_DYNAMODB_SCAN_FORWARD = 'aws.dynamodb.scan_forward';
var TMP_AWS_DYNAMODB_SEGMENT = 'aws.dynamodb.segment';
var TMP_AWS_DYNAMODB_TOTAL_SEGMENTS = 'aws.dynamodb.total_segments';
var TMP_AWS_DYNAMODB_COUNT = 'aws.dynamodb.count';
var TMP_AWS_DYNAMODB_SCANNED_COUNT = 'aws.dynamodb.scanned_count';
var TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = 'aws.dynamodb.attribute_definitions';
var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = 'aws.dynamodb.global_secondary_index_updates';
var TMP_MESSAGING_SYSTEM = 'messaging.system';
var TMP_MESSAGING_DESTINATION = 'messaging.destination';
var TMP_MESSAGING_DESTINATION_KIND = 'messaging.destination_kind';
var TMP_MESSAGING_TEMP_DESTINATION = 'messaging.temp_destination';
var TMP_MESSAGING_PROTOCOL = 'messaging.protocol';
var TMP_MESSAGING_PROTOCOL_VERSION = 'messaging.protocol_version';
var TMP_MESSAGING_URL = 'messaging.url';
var TMP_MESSAGING_MESSAGE_ID = 'messaging.message_id';
var TMP_MESSAGING_CONVERSATION_ID = 'messaging.conversation_id';
var TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = 'messaging.message_payload_size_bytes';
var TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = 'messaging.message_payload_compressed_size_bytes';
var TMP_MESSAGING_OPERATION = 'messaging.operation';
var TMP_MESSAGING_CONSUMER_ID = 'messaging.consumer_id';
var TMP_MESSAGING_RABBITMQ_ROUTING_KEY = 'messaging.rabbitmq.routing_key';
var TMP_MESSAGING_KAFKA_MESSAGE_KEY = 'messaging.kafka.message_key';
var TMP_MESSAGING_KAFKA_CONSUMER_GROUP = 'messaging.kafka.consumer_group';
var TMP_MESSAGING_KAFKA_CLIENT_ID = 'messaging.kafka.client_id';
var TMP_MESSAGING_KAFKA_PARTITION = 'messaging.kafka.partition';
var TMP_MESSAGING_KAFKA_TOMBSTONE = 'messaging.kafka.tombstone';
var TMP_RPC_SYSTEM = 'rpc.system';
var TMP_RPC_SERVICE = 'rpc.service';
var TMP_RPC_METHOD = 'rpc.method';
var TMP_RPC_GRPC_STATUS_CODE = 'rpc.grpc.status_code';
var TMP_RPC_JSONRPC_VERSION = 'rpc.jsonrpc.version';
var TMP_RPC_JSONRPC_REQUEST_ID = 'rpc.jsonrpc.request_id';
var TMP_RPC_JSONRPC_ERROR_CODE = 'rpc.jsonrpc.error_code';
var TMP_RPC_JSONRPC_ERROR_MESSAGE = 'rpc.jsonrpc.error_message';
var TMP_MESSAGE_TYPE = 'message.type';
var TMP_MESSAGE_ID = 'message.id';
var TMP_MESSAGE_COMPRESSED_SIZE = 'message.compressed_size';
var TMP_MESSAGE_UNCOMPRESSED_SIZE = 'message.uncompressed_size';
var SEMATTRS_AWS_LAMBDA_INVOKED_ARN = TMP_AWS_LAMBDA_INVOKED_ARN;
var SEMATTRS_DB_SYSTEM = TMP_DB_SYSTEM;
var SEMATTRS_DB_CONNECTION_STRING = TMP_DB_CONNECTION_STRING;
var SEMATTRS_DB_USER = TMP_DB_USER;
var SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = TMP_DB_JDBC_DRIVER_CLASSNAME;
var SEMATTRS_DB_NAME = TMP_DB_NAME;
var SEMATTRS_DB_STATEMENT = TMP_DB_STATEMENT;
var SEMATTRS_DB_OPERATION = TMP_DB_OPERATION;
var SEMATTRS_DB_MSSQL_INSTANCE_NAME = TMP_DB_MSSQL_INSTANCE_NAME;
var SEMATTRS_DB_CASSANDRA_KEYSPACE = TMP_DB_CASSANDRA_KEYSPACE;
var SEMATTRS_DB_CASSANDRA_PAGE_SIZE = TMP_DB_CASSANDRA_PAGE_SIZE;
var SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = TMP_DB_CASSANDRA_CONSISTENCY_LEVEL;
var SEMATTRS_DB_CASSANDRA_TABLE = TMP_DB_CASSANDRA_TABLE;
var SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = TMP_DB_CASSANDRA_IDEMPOTENCE;
var SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT;
var SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = TMP_DB_CASSANDRA_COORDINATOR_ID;
var SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = TMP_DB_CASSANDRA_COORDINATOR_DC;
var SEMATTRS_DB_HBASE_NAMESPACE = TMP_DB_HBASE_NAMESPACE;
var SEMATTRS_DB_REDIS_DATABASE_INDEX = TMP_DB_REDIS_DATABASE_INDEX;
var SEMATTRS_DB_MONGODB_COLLECTION = TMP_DB_MONGODB_COLLECTION;
var SEMATTRS_DB_SQL_TABLE = TMP_DB_SQL_TABLE;
var SEMATTRS_EXCEPTION_TYPE = TMP_EXCEPTION_TYPE;
var SEMATTRS_EXCEPTION_MESSAGE = TMP_EXCEPTION_MESSAGE;
var SEMATTRS_EXCEPTION_STACKTRACE = TMP_EXCEPTION_STACKTRACE;
var SEMATTRS_EXCEPTION_ESCAPED = TMP_EXCEPTION_ESCAPED;
var SEMATTRS_FAAS_TRIGGER = TMP_FAAS_TRIGGER;
var SEMATTRS_FAAS_EXECUTION = TMP_FAAS_EXECUTION;
var SEMATTRS_FAAS_DOCUMENT_COLLECTION = TMP_FAAS_DOCUMENT_COLLECTION;
var SEMATTRS_FAAS_DOCUMENT_OPERATION = TMP_FAAS_DOCUMENT_OPERATION;
var SEMATTRS_FAAS_DOCUMENT_TIME = TMP_FAAS_DOCUMENT_TIME;
var SEMATTRS_FAAS_DOCUMENT_NAME = TMP_FAAS_DOCUMENT_NAME;
var SEMATTRS_FAAS_TIME = TMP_FAAS_TIME;
var SEMATTRS_FAAS_CRON = TMP_FAAS_CRON;
var SEMATTRS_FAAS_COLDSTART = TMP_FAAS_COLDSTART;
var SEMATTRS_FAAS_INVOKED_NAME = TMP_FAAS_INVOKED_NAME;
var SEMATTRS_FAAS_INVOKED_PROVIDER = TMP_FAAS_INVOKED_PROVIDER;
var SEMATTRS_FAAS_INVOKED_REGION = TMP_FAAS_INVOKED_REGION;
var SEMATTRS_NET_TRANSPORT = TMP_NET_TRANSPORT;
var SEMATTRS_NET_PEER_IP = TMP_NET_PEER_IP;
var SEMATTRS_NET_PEER_PORT = TMP_NET_PEER_PORT;
var SEMATTRS_NET_PEER_NAME = TMP_NET_PEER_NAME;
var SEMATTRS_NET_HOST_IP = TMP_NET_HOST_IP;
var SEMATTRS_NET_HOST_PORT = TMP_NET_HOST_PORT;
var SEMATTRS_NET_HOST_NAME = TMP_NET_HOST_NAME;
var SEMATTRS_NET_HOST_CONNECTION_TYPE = TMP_NET_HOST_CONNECTION_TYPE;
var SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = TMP_NET_HOST_CONNECTION_SUBTYPE;
var SEMATTRS_NET_HOST_CARRIER_NAME = TMP_NET_HOST_CARRIER_NAME;
var SEMATTRS_NET_HOST_CARRIER_MCC = TMP_NET_HOST_CARRIER_MCC;
var SEMATTRS_NET_HOST_CARRIER_MNC = TMP_NET_HOST_CARRIER_MNC;
var SEMATTRS_NET_HOST_CARRIER_ICC = TMP_NET_HOST_CARRIER_ICC;
var SEMATTRS_PEER_SERVICE = TMP_PEER_SERVICE;
var SEMATTRS_ENDUSER_ID = TMP_ENDUSER_ID;
var SEMATTRS_ENDUSER_ROLE = TMP_ENDUSER_ROLE;
var SEMATTRS_ENDUSER_SCOPE = TMP_ENDUSER_SCOPE;
var SEMATTRS_THREAD_ID = TMP_THREAD_ID;
var SEMATTRS_THREAD_NAME = TMP_THREAD_NAME;
var SEMATTRS_CODE_FUNCTION = TMP_CODE_FUNCTION;
var SEMATTRS_CODE_NAMESPACE = TMP_CODE_NAMESPACE;
var SEMATTRS_CODE_FILEPATH = TMP_CODE_FILEPATH;
var SEMATTRS_CODE_LINENO = TMP_CODE_LINENO;
var SEMATTRS_HTTP_METHOD = TMP_HTTP_METHOD;
var SEMATTRS_HTTP_URL = TMP_HTTP_URL;
var SEMATTRS_HTTP_TARGET = TMP_HTTP_TARGET;
var SEMATTRS_HTTP_HOST = TMP_HTTP_HOST;
var SEMATTRS_HTTP_SCHEME = TMP_HTTP_SCHEME;
var SEMATTRS_HTTP_STATUS_CODE = TMP_HTTP_STATUS_CODE;
var SEMATTRS_HTTP_FLAVOR = TMP_HTTP_FLAVOR;
var SEMATTRS_HTTP_USER_AGENT = TMP_HTTP_USER_AGENT;
var SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = TMP_HTTP_REQUEST_CONTENT_LENGTH;
var SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED;
var SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = TMP_HTTP_RESPONSE_CONTENT_LENGTH;
var SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED;
var SEMATTRS_HTTP_SERVER_NAME = TMP_HTTP_SERVER_NAME;
var SEMATTRS_HTTP_ROUTE = TMP_HTTP_ROUTE;
var SEMATTRS_HTTP_CLIENT_IP = TMP_HTTP_CLIENT_IP;
var SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = TMP_AWS_DYNAMODB_TABLE_NAMES;
var SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = TMP_AWS_DYNAMODB_CONSUMED_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS;
var SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = TMP_AWS_DYNAMODB_CONSISTENT_READ;
var SEMATTRS_AWS_DYNAMODB_PROJECTION = TMP_AWS_DYNAMODB_PROJECTION;
var SEMATTRS_AWS_DYNAMODB_LIMIT = TMP_AWS_DYNAMODB_LIMIT;
var SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET;
var SEMATTRS_AWS_DYNAMODB_INDEX_NAME = TMP_AWS_DYNAMODB_INDEX_NAME;
var SEMATTRS_AWS_DYNAMODB_SELECT = TMP_AWS_DYNAMODB_SELECT;
var SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES;
var SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES;
var SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE;
var SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = TMP_AWS_DYNAMODB_TABLE_COUNT;
var SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = TMP_AWS_DYNAMODB_SCAN_FORWARD;
var SEMATTRS_AWS_DYNAMODB_SEGMENT = TMP_AWS_DYNAMODB_SEGMENT;
var SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = TMP_AWS_DYNAMODB_TOTAL_SEGMENTS;
var SEMATTRS_AWS_DYNAMODB_COUNT = TMP_AWS_DYNAMODB_COUNT;
var SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = TMP_AWS_DYNAMODB_SCANNED_COUNT;
var SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS;
var SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES;
var SEMATTRS_MESSAGING_SYSTEM = TMP_MESSAGING_SYSTEM;
var SEMATTRS_MESSAGING_DESTINATION = TMP_MESSAGING_DESTINATION;
var SEMATTRS_MESSAGING_DESTINATION_KIND = TMP_MESSAGING_DESTINATION_KIND;
var SEMATTRS_MESSAGING_TEMP_DESTINATION = TMP_MESSAGING_TEMP_DESTINATION;
var SEMATTRS_MESSAGING_PROTOCOL = TMP_MESSAGING_PROTOCOL;
var SEMATTRS_MESSAGING_PROTOCOL_VERSION = TMP_MESSAGING_PROTOCOL_VERSION;
var SEMATTRS_MESSAGING_URL = TMP_MESSAGING_URL;
var SEMATTRS_MESSAGING_MESSAGE_ID = TMP_MESSAGING_MESSAGE_ID;
var SEMATTRS_MESSAGING_CONVERSATION_ID = TMP_MESSAGING_CONVERSATION_ID;
var SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES;
var SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES;
var SEMATTRS_MESSAGING_OPERATION = TMP_MESSAGING_OPERATION;
var SEMATTRS_MESSAGING_CONSUMER_ID = TMP_MESSAGING_CONSUMER_ID;
var SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = TMP_MESSAGING_RABBITMQ_ROUTING_KEY;
var SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = TMP_MESSAGING_KAFKA_MESSAGE_KEY;
var SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = TMP_MESSAGING_KAFKA_CONSUMER_GROUP;
var SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = TMP_MESSAGING_KAFKA_CLIENT_ID;
var SEMATTRS_MESSAGING_KAFKA_PARTITION = TMP_MESSAGING_KAFKA_PARTITION;
var SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = TMP_MESSAGING_KAFKA_TOMBSTONE;
var SEMATTRS_RPC_SYSTEM = TMP_RPC_SYSTEM;
var SEMATTRS_RPC_SERVICE = TMP_RPC_SERVICE;
var SEMATTRS_RPC_METHOD = TMP_RPC_METHOD;
var SEMATTRS_RPC_GRPC_STATUS_CODE = TMP_RPC_GRPC_STATUS_CODE;
var SEMATTRS_RPC_JSONRPC_VERSION = TMP_RPC_JSONRPC_VERSION;
var SEMATTRS_RPC_JSONRPC_REQUEST_ID = TMP_RPC_JSONRPC_REQUEST_ID;
var SEMATTRS_RPC_JSONRPC_ERROR_CODE = TMP_RPC_JSONRPC_ERROR_CODE;
var SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = TMP_RPC_JSONRPC_ERROR_MESSAGE;
var SEMATTRS_MESSAGE_TYPE = TMP_MESSAGE_TYPE;
var SEMATTRS_MESSAGE_ID = TMP_MESSAGE_ID;
var SEMATTRS_MESSAGE_COMPRESSED_SIZE = TMP_MESSAGE_COMPRESSED_SIZE;
var SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = TMP_MESSAGE_UNCOMPRESSED_SIZE;
var SemanticAttributes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_AWS_LAMBDA_INVOKED_ARN,
    TMP_DB_SYSTEM,
    TMP_DB_CONNECTION_STRING,
    TMP_DB_USER,
    TMP_DB_JDBC_DRIVER_CLASSNAME,
    TMP_DB_NAME,
    TMP_DB_STATEMENT,
    TMP_DB_OPERATION,
    TMP_DB_MSSQL_INSTANCE_NAME,
    TMP_DB_CASSANDRA_KEYSPACE,
    TMP_DB_CASSANDRA_PAGE_SIZE,
    TMP_DB_CASSANDRA_CONSISTENCY_LEVEL,
    TMP_DB_CASSANDRA_TABLE,
    TMP_DB_CASSANDRA_IDEMPOTENCE,
    TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
    TMP_DB_CASSANDRA_COORDINATOR_ID,
    TMP_DB_CASSANDRA_COORDINATOR_DC,
    TMP_DB_HBASE_NAMESPACE,
    TMP_DB_REDIS_DATABASE_INDEX,
    TMP_DB_MONGODB_COLLECTION,
    TMP_DB_SQL_TABLE,
    TMP_EXCEPTION_TYPE,
    TMP_EXCEPTION_MESSAGE,
    TMP_EXCEPTION_STACKTRACE,
    TMP_EXCEPTION_ESCAPED,
    TMP_FAAS_TRIGGER,
    TMP_FAAS_EXECUTION,
    TMP_FAAS_DOCUMENT_COLLECTION,
    TMP_FAAS_DOCUMENT_OPERATION,
    TMP_FAAS_DOCUMENT_TIME,
    TMP_FAAS_DOCUMENT_NAME,
    TMP_FAAS_TIME,
    TMP_FAAS_CRON,
    TMP_FAAS_COLDSTART,
    TMP_FAAS_INVOKED_NAME,
    TMP_FAAS_INVOKED_PROVIDER,
    TMP_FAAS_INVOKED_REGION,
    TMP_NET_TRANSPORT,
    TMP_NET_PEER_IP,
    TMP_NET_PEER_PORT,
    TMP_NET_PEER_NAME,
    TMP_NET_HOST_IP,
    TMP_NET_HOST_PORT,
    TMP_NET_HOST_NAME,
    TMP_NET_HOST_CONNECTION_TYPE,
    TMP_NET_HOST_CONNECTION_SUBTYPE,
    TMP_NET_HOST_CARRIER_NAME,
    TMP_NET_HOST_CARRIER_MCC,
    TMP_NET_HOST_CARRIER_MNC,
    TMP_NET_HOST_CARRIER_ICC,
    TMP_PEER_SERVICE,
    TMP_ENDUSER_ID,
    TMP_ENDUSER_ROLE,
    TMP_ENDUSER_SCOPE,
    TMP_THREAD_ID,
    TMP_THREAD_NAME,
    TMP_CODE_FUNCTION,
    TMP_CODE_NAMESPACE,
    TMP_CODE_FILEPATH,
    TMP_CODE_LINENO,
    TMP_HTTP_METHOD,
    TMP_HTTP_URL,
    TMP_HTTP_TARGET,
    TMP_HTTP_HOST,
    TMP_HTTP_SCHEME,
    TMP_HTTP_STATUS_CODE,
    TMP_HTTP_FLAVOR,
    TMP_HTTP_USER_AGENT,
    TMP_HTTP_REQUEST_CONTENT_LENGTH,
    TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_SERVER_NAME,
    TMP_HTTP_ROUTE,
    TMP_HTTP_CLIENT_IP,
    TMP_AWS_DYNAMODB_TABLE_NAMES,
    TMP_AWS_DYNAMODB_CONSUMED_CAPACITY,
    TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
    TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
    TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
    TMP_AWS_DYNAMODB_CONSISTENT_READ,
    TMP_AWS_DYNAMODB_PROJECTION,
    TMP_AWS_DYNAMODB_LIMIT,
    TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
    TMP_AWS_DYNAMODB_INDEX_NAME,
    TMP_AWS_DYNAMODB_SELECT,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
    TMP_AWS_DYNAMODB_TABLE_COUNT,
    TMP_AWS_DYNAMODB_SCAN_FORWARD,
    TMP_AWS_DYNAMODB_SEGMENT,
    TMP_AWS_DYNAMODB_TOTAL_SEGMENTS,
    TMP_AWS_DYNAMODB_COUNT,
    TMP_AWS_DYNAMODB_SCANNED_COUNT,
    TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
    TMP_MESSAGING_SYSTEM,
    TMP_MESSAGING_DESTINATION,
    TMP_MESSAGING_DESTINATION_KIND,
    TMP_MESSAGING_TEMP_DESTINATION,
    TMP_MESSAGING_PROTOCOL,
    TMP_MESSAGING_PROTOCOL_VERSION,
    TMP_MESSAGING_URL,
    TMP_MESSAGING_MESSAGE_ID,
    TMP_MESSAGING_CONVERSATION_ID,
    TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
    TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
    TMP_MESSAGING_OPERATION,
    TMP_MESSAGING_CONSUMER_ID,
    TMP_MESSAGING_RABBITMQ_ROUTING_KEY,
    TMP_MESSAGING_KAFKA_MESSAGE_KEY,
    TMP_MESSAGING_KAFKA_CONSUMER_GROUP,
    TMP_MESSAGING_KAFKA_CLIENT_ID,
    TMP_MESSAGING_KAFKA_PARTITION,
    TMP_MESSAGING_KAFKA_TOMBSTONE,
    TMP_RPC_SYSTEM,
    TMP_RPC_SERVICE,
    TMP_RPC_METHOD,
    TMP_RPC_GRPC_STATUS_CODE,
    TMP_RPC_JSONRPC_VERSION,
    TMP_RPC_JSONRPC_REQUEST_ID,
    TMP_RPC_JSONRPC_ERROR_CODE,
    TMP_RPC_JSONRPC_ERROR_MESSAGE,
    TMP_MESSAGE_TYPE,
    TMP_MESSAGE_ID,
    TMP_MESSAGE_COMPRESSED_SIZE,
    TMP_MESSAGE_UNCOMPRESSED_SIZE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for DbSystemValues enum definition
 *
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_DBSYSTEMVALUES_OTHER_SQL = 'other_sql';
var TMP_DBSYSTEMVALUES_MSSQL = 'mssql';
var TMP_DBSYSTEMVALUES_MYSQL = 'mysql';
var TMP_DBSYSTEMVALUES_ORACLE = 'oracle';
var TMP_DBSYSTEMVALUES_DB2 = 'db2';
var TMP_DBSYSTEMVALUES_POSTGRESQL = 'postgresql';
var TMP_DBSYSTEMVALUES_REDSHIFT = 'redshift';
var TMP_DBSYSTEMVALUES_HIVE = 'hive';
var TMP_DBSYSTEMVALUES_CLOUDSCAPE = 'cloudscape';
var TMP_DBSYSTEMVALUES_HSQLDB = 'hsqldb';
var TMP_DBSYSTEMVALUES_PROGRESS = 'progress';
var TMP_DBSYSTEMVALUES_MAXDB = 'maxdb';
var TMP_DBSYSTEMVALUES_HANADB = 'hanadb';
var TMP_DBSYSTEMVALUES_INGRES = 'ingres';
var TMP_DBSYSTEMVALUES_FIRSTSQL = 'firstsql';
var TMP_DBSYSTEMVALUES_EDB = 'edb';
var TMP_DBSYSTEMVALUES_CACHE = 'cache';
var TMP_DBSYSTEMVALUES_ADABAS = 'adabas';
var TMP_DBSYSTEMVALUES_FIREBIRD = 'firebird';
var TMP_DBSYSTEMVALUES_DERBY = 'derby';
var TMP_DBSYSTEMVALUES_FILEMAKER = 'filemaker';
var TMP_DBSYSTEMVALUES_INFORMIX = 'informix';
var TMP_DBSYSTEMVALUES_INSTANTDB = 'instantdb';
var TMP_DBSYSTEMVALUES_INTERBASE = 'interbase';
var TMP_DBSYSTEMVALUES_MARIADB = 'mariadb';
var TMP_DBSYSTEMVALUES_NETEZZA = 'netezza';
var TMP_DBSYSTEMVALUES_PERVASIVE = 'pervasive';
var TMP_DBSYSTEMVALUES_POINTBASE = 'pointbase';
var TMP_DBSYSTEMVALUES_SQLITE = 'sqlite';
var TMP_DBSYSTEMVALUES_SYBASE = 'sybase';
var TMP_DBSYSTEMVALUES_TERADATA = 'teradata';
var TMP_DBSYSTEMVALUES_VERTICA = 'vertica';
var TMP_DBSYSTEMVALUES_H2 = 'h2';
var TMP_DBSYSTEMVALUES_COLDFUSION = 'coldfusion';
var TMP_DBSYSTEMVALUES_CASSANDRA = 'cassandra';
var TMP_DBSYSTEMVALUES_HBASE = 'hbase';
var TMP_DBSYSTEMVALUES_MONGODB = 'mongodb';
var TMP_DBSYSTEMVALUES_REDIS = 'redis';
var TMP_DBSYSTEMVALUES_COUCHBASE = 'couchbase';
var TMP_DBSYSTEMVALUES_COUCHDB = 'couchdb';
var TMP_DBSYSTEMVALUES_COSMOSDB = 'cosmosdb';
var TMP_DBSYSTEMVALUES_DYNAMODB = 'dynamodb';
var TMP_DBSYSTEMVALUES_NEO4J = 'neo4j';
var TMP_DBSYSTEMVALUES_GEODE = 'geode';
var TMP_DBSYSTEMVALUES_ELASTICSEARCH = 'elasticsearch';
var TMP_DBSYSTEMVALUES_MEMCACHED = 'memcached';
var TMP_DBSYSTEMVALUES_COCKROACHDB = 'cockroachdb';
var DBSYSTEMVALUES_OTHER_SQL = TMP_DBSYSTEMVALUES_OTHER_SQL;
var DBSYSTEMVALUES_MSSQL = TMP_DBSYSTEMVALUES_MSSQL;
var DBSYSTEMVALUES_MYSQL = TMP_DBSYSTEMVALUES_MYSQL;
var DBSYSTEMVALUES_ORACLE = TMP_DBSYSTEMVALUES_ORACLE;
var DBSYSTEMVALUES_DB2 = TMP_DBSYSTEMVALUES_DB2;
var DBSYSTEMVALUES_POSTGRESQL = TMP_DBSYSTEMVALUES_POSTGRESQL;
var DBSYSTEMVALUES_REDSHIFT = TMP_DBSYSTEMVALUES_REDSHIFT;
var DBSYSTEMVALUES_HIVE = TMP_DBSYSTEMVALUES_HIVE;
var DBSYSTEMVALUES_CLOUDSCAPE = TMP_DBSYSTEMVALUES_CLOUDSCAPE;
var DBSYSTEMVALUES_HSQLDB = TMP_DBSYSTEMVALUES_HSQLDB;
var DBSYSTEMVALUES_PROGRESS = TMP_DBSYSTEMVALUES_PROGRESS;
var DBSYSTEMVALUES_MAXDB = TMP_DBSYSTEMVALUES_MAXDB;
var DBSYSTEMVALUES_HANADB = TMP_DBSYSTEMVALUES_HANADB;
var DBSYSTEMVALUES_INGRES = TMP_DBSYSTEMVALUES_INGRES;
var DBSYSTEMVALUES_FIRSTSQL = TMP_DBSYSTEMVALUES_FIRSTSQL;
var DBSYSTEMVALUES_EDB = TMP_DBSYSTEMVALUES_EDB;
var DBSYSTEMVALUES_CACHE = TMP_DBSYSTEMVALUES_CACHE;
var DBSYSTEMVALUES_ADABAS = TMP_DBSYSTEMVALUES_ADABAS;
var DBSYSTEMVALUES_FIREBIRD = TMP_DBSYSTEMVALUES_FIREBIRD;
var DBSYSTEMVALUES_DERBY = TMP_DBSYSTEMVALUES_DERBY;
var DBSYSTEMVALUES_FILEMAKER = TMP_DBSYSTEMVALUES_FILEMAKER;
var DBSYSTEMVALUES_INFORMIX = TMP_DBSYSTEMVALUES_INFORMIX;
var DBSYSTEMVALUES_INSTANTDB = TMP_DBSYSTEMVALUES_INSTANTDB;
var DBSYSTEMVALUES_INTERBASE = TMP_DBSYSTEMVALUES_INTERBASE;
var DBSYSTEMVALUES_MARIADB = TMP_DBSYSTEMVALUES_MARIADB;
var DBSYSTEMVALUES_NETEZZA = TMP_DBSYSTEMVALUES_NETEZZA;
var DBSYSTEMVALUES_PERVASIVE = TMP_DBSYSTEMVALUES_PERVASIVE;
var DBSYSTEMVALUES_POINTBASE = TMP_DBSYSTEMVALUES_POINTBASE;
var DBSYSTEMVALUES_SQLITE = TMP_DBSYSTEMVALUES_SQLITE;
var DBSYSTEMVALUES_SYBASE = TMP_DBSYSTEMVALUES_SYBASE;
var DBSYSTEMVALUES_TERADATA = TMP_DBSYSTEMVALUES_TERADATA;
var DBSYSTEMVALUES_VERTICA = TMP_DBSYSTEMVALUES_VERTICA;
var DBSYSTEMVALUES_H2 = TMP_DBSYSTEMVALUES_H2;
var DBSYSTEMVALUES_COLDFUSION = TMP_DBSYSTEMVALUES_COLDFUSION;
var DBSYSTEMVALUES_CASSANDRA = TMP_DBSYSTEMVALUES_CASSANDRA;
var DBSYSTEMVALUES_HBASE = TMP_DBSYSTEMVALUES_HBASE;
var DBSYSTEMVALUES_MONGODB = TMP_DBSYSTEMVALUES_MONGODB;
var DBSYSTEMVALUES_REDIS = TMP_DBSYSTEMVALUES_REDIS;
var DBSYSTEMVALUES_COUCHBASE = TMP_DBSYSTEMVALUES_COUCHBASE;
var DBSYSTEMVALUES_COUCHDB = TMP_DBSYSTEMVALUES_COUCHDB;
var DBSYSTEMVALUES_COSMOSDB = TMP_DBSYSTEMVALUES_COSMOSDB;
var DBSYSTEMVALUES_DYNAMODB = TMP_DBSYSTEMVALUES_DYNAMODB;
var DBSYSTEMVALUES_NEO4J = TMP_DBSYSTEMVALUES_NEO4J;
var DBSYSTEMVALUES_GEODE = TMP_DBSYSTEMVALUES_GEODE;
var DBSYSTEMVALUES_ELASTICSEARCH = TMP_DBSYSTEMVALUES_ELASTICSEARCH;
var DBSYSTEMVALUES_MEMCACHED = TMP_DBSYSTEMVALUES_MEMCACHED;
var DBSYSTEMVALUES_COCKROACHDB = TMP_DBSYSTEMVALUES_COCKROACHDB;
var DbSystemValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_DBSYSTEMVALUES_OTHER_SQL,
    TMP_DBSYSTEMVALUES_MSSQL,
    TMP_DBSYSTEMVALUES_MYSQL,
    TMP_DBSYSTEMVALUES_ORACLE,
    TMP_DBSYSTEMVALUES_DB2,
    TMP_DBSYSTEMVALUES_POSTGRESQL,
    TMP_DBSYSTEMVALUES_REDSHIFT,
    TMP_DBSYSTEMVALUES_HIVE,
    TMP_DBSYSTEMVALUES_CLOUDSCAPE,
    TMP_DBSYSTEMVALUES_HSQLDB,
    TMP_DBSYSTEMVALUES_PROGRESS,
    TMP_DBSYSTEMVALUES_MAXDB,
    TMP_DBSYSTEMVALUES_HANADB,
    TMP_DBSYSTEMVALUES_INGRES,
    TMP_DBSYSTEMVALUES_FIRSTSQL,
    TMP_DBSYSTEMVALUES_EDB,
    TMP_DBSYSTEMVALUES_CACHE,
    TMP_DBSYSTEMVALUES_ADABAS,
    TMP_DBSYSTEMVALUES_FIREBIRD,
    TMP_DBSYSTEMVALUES_DERBY,
    TMP_DBSYSTEMVALUES_FILEMAKER,
    TMP_DBSYSTEMVALUES_INFORMIX,
    TMP_DBSYSTEMVALUES_INSTANTDB,
    TMP_DBSYSTEMVALUES_INTERBASE,
    TMP_DBSYSTEMVALUES_MARIADB,
    TMP_DBSYSTEMVALUES_NETEZZA,
    TMP_DBSYSTEMVALUES_PERVASIVE,
    TMP_DBSYSTEMVALUES_POINTBASE,
    TMP_DBSYSTEMVALUES_SQLITE,
    TMP_DBSYSTEMVALUES_SYBASE,
    TMP_DBSYSTEMVALUES_TERADATA,
    TMP_DBSYSTEMVALUES_VERTICA,
    TMP_DBSYSTEMVALUES_H2,
    TMP_DBSYSTEMVALUES_COLDFUSION,
    TMP_DBSYSTEMVALUES_CASSANDRA,
    TMP_DBSYSTEMVALUES_HBASE,
    TMP_DBSYSTEMVALUES_MONGODB,
    TMP_DBSYSTEMVALUES_REDIS,
    TMP_DBSYSTEMVALUES_COUCHBASE,
    TMP_DBSYSTEMVALUES_COUCHDB,
    TMP_DBSYSTEMVALUES_COSMOSDB,
    TMP_DBSYSTEMVALUES_DYNAMODB,
    TMP_DBSYSTEMVALUES_NEO4J,
    TMP_DBSYSTEMVALUES_GEODE,
    TMP_DBSYSTEMVALUES_ELASTICSEARCH,
    TMP_DBSYSTEMVALUES_MEMCACHED,
    TMP_DBSYSTEMVALUES_COCKROACHDB
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for DbCassandraConsistencyLevelValues enum definition
 *
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL = 'all';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = 'each_quorum';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = 'quorum';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = 'local_quorum';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE = 'one';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO = 'two';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE = 'three';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = 'local_one';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY = 'any';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = 'serial';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = 'local_serial';
var DBCASSANDRACONSISTENCYLEVELVALUES_ALL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL;
var DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE;
var DBCASSANDRACONSISTENCYLEVELVALUES_TWO = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO;
var DBCASSANDRACONSISTENCYLEVELVALUES_THREE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE;
var DBCASSANDRACONSISTENCYLEVELVALUES_ANY = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY;
var DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL;
var DbCassandraConsistencyLevelValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasTriggerValues enum definition
 *
 * Type of the trigger on which the function is executed.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_FAASTRIGGERVALUES_DATASOURCE = 'datasource';
var TMP_FAASTRIGGERVALUES_HTTP = 'http';
var TMP_FAASTRIGGERVALUES_PUBSUB = 'pubsub';
var TMP_FAASTRIGGERVALUES_TIMER = 'timer';
var TMP_FAASTRIGGERVALUES_OTHER = 'other';
var FAASTRIGGERVALUES_DATASOURCE = TMP_FAASTRIGGERVALUES_DATASOURCE;
var FAASTRIGGERVALUES_HTTP = TMP_FAASTRIGGERVALUES_HTTP;
var FAASTRIGGERVALUES_PUBSUB = TMP_FAASTRIGGERVALUES_PUBSUB;
var FAASTRIGGERVALUES_TIMER = TMP_FAASTRIGGERVALUES_TIMER;
var FAASTRIGGERVALUES_OTHER = TMP_FAASTRIGGERVALUES_OTHER;
var FaasTriggerValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_FAASTRIGGERVALUES_DATASOURCE,
    TMP_FAASTRIGGERVALUES_HTTP,
    TMP_FAASTRIGGERVALUES_PUBSUB,
    TMP_FAASTRIGGERVALUES_TIMER,
    TMP_FAASTRIGGERVALUES_OTHER
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasDocumentOperationValues enum definition
 *
 * Describes the type of the operation that was performed on the data.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_FAASDOCUMENTOPERATIONVALUES_INSERT = 'insert';
var TMP_FAASDOCUMENTOPERATIONVALUES_EDIT = 'edit';
var TMP_FAASDOCUMENTOPERATIONVALUES_DELETE = 'delete';
var FAASDOCUMENTOPERATIONVALUES_INSERT = TMP_FAASDOCUMENTOPERATIONVALUES_INSERT;
var FAASDOCUMENTOPERATIONVALUES_EDIT = TMP_FAASDOCUMENTOPERATIONVALUES_EDIT;
var FAASDOCUMENTOPERATIONVALUES_DELETE = TMP_FAASDOCUMENTOPERATIONVALUES_DELETE;
var FaasDocumentOperationValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_FAASDOCUMENTOPERATIONVALUES_INSERT,
    TMP_FAASDOCUMENTOPERATIONVALUES_EDIT,
    TMP_FAASDOCUMENTOPERATIONVALUES_DELETE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasInvokedProviderValues enum definition
 *
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = 'alibaba_cloud';
var TMP_FAASINVOKEDPROVIDERVALUES_AWS = 'aws';
var TMP_FAASINVOKEDPROVIDERVALUES_AZURE = 'azure';
var TMP_FAASINVOKEDPROVIDERVALUES_GCP = 'gcp';
var FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD;
var FAASINVOKEDPROVIDERVALUES_AWS = TMP_FAASINVOKEDPROVIDERVALUES_AWS;
var FAASINVOKEDPROVIDERVALUES_AZURE = TMP_FAASINVOKEDPROVIDERVALUES_AZURE;
var FAASINVOKEDPROVIDERVALUES_GCP = TMP_FAASINVOKEDPROVIDERVALUES_GCP;
var FaasInvokedProviderValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_FAASINVOKEDPROVIDERVALUES_AWS,
    TMP_FAASINVOKEDPROVIDERVALUES_AZURE,
    TMP_FAASINVOKEDPROVIDERVALUES_GCP
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetTransportValues enum definition
 *
 * Transport protocol used. See note below.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_NETTRANSPORTVALUES_IP_TCP = 'ip_tcp';
var TMP_NETTRANSPORTVALUES_IP_UDP = 'ip_udp';
var TMP_NETTRANSPORTVALUES_IP = 'ip';
var TMP_NETTRANSPORTVALUES_UNIX = 'unix';
var TMP_NETTRANSPORTVALUES_PIPE = 'pipe';
var TMP_NETTRANSPORTVALUES_INPROC = 'inproc';
var TMP_NETTRANSPORTVALUES_OTHER = 'other';
var NETTRANSPORTVALUES_IP_TCP = TMP_NETTRANSPORTVALUES_IP_TCP;
var NETTRANSPORTVALUES_IP_UDP = TMP_NETTRANSPORTVALUES_IP_UDP;
var NETTRANSPORTVALUES_IP = TMP_NETTRANSPORTVALUES_IP;
var NETTRANSPORTVALUES_UNIX = TMP_NETTRANSPORTVALUES_UNIX;
var NETTRANSPORTVALUES_PIPE = TMP_NETTRANSPORTVALUES_PIPE;
var NETTRANSPORTVALUES_INPROC = TMP_NETTRANSPORTVALUES_INPROC;
var NETTRANSPORTVALUES_OTHER = TMP_NETTRANSPORTVALUES_OTHER;
var NetTransportValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_NETTRANSPORTVALUES_IP_TCP,
    TMP_NETTRANSPORTVALUES_IP_UDP,
    TMP_NETTRANSPORTVALUES_IP,
    TMP_NETTRANSPORTVALUES_UNIX,
    TMP_NETTRANSPORTVALUES_PIPE,
    TMP_NETTRANSPORTVALUES_INPROC,
    TMP_NETTRANSPORTVALUES_OTHER
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetHostConnectionTypeValues enum definition
 *
 * The internet connection type currently being used by the host.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI = 'wifi';
var TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED = 'wired';
var TMP_NETHOSTCONNECTIONTYPEVALUES_CELL = 'cell';
var TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = 'unavailable';
var TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = 'unknown';
var NETHOSTCONNECTIONTYPEVALUES_WIFI = TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI;
var NETHOSTCONNECTIONTYPEVALUES_WIRED = TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED;
var NETHOSTCONNECTIONTYPEVALUES_CELL = TMP_NETHOSTCONNECTIONTYPEVALUES_CELL;
var NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE;
var NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN;
var NetHostConnectionTypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI,
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED,
    TMP_NETHOSTCONNECTIONTYPEVALUES_CELL,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetHostConnectionSubtypeValues enum definition
 *
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = 'gprs';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = 'edge';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = 'umts';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = 'cdma';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = 'evdo_0';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = 'evdo_a';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = 'cdma2000_1xrtt';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = 'hsdpa';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = 'hsupa';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = 'hspa';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = 'iden';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = 'evdo_b';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE = 'lte';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = 'ehrpd';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = 'hspap';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM = 'gsm';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = 'td_scdma';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = 'iwlan';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR = 'nr';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = 'nrnsa';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = 'lte_ca';
var NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS;
var NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE;
var NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS;
var NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A;
var NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B;
var NETHOSTCONNECTIONSUBTYPEVALUES_LTE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE;
var NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP;
var NETHOSTCONNECTIONSUBTYPEVALUES_GSM = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM;
var NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA;
var NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN;
var NETHOSTCONNECTIONSUBTYPEVALUES_NR = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR;
var NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA;
var NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA;
var NetHostConnectionSubtypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HttpFlavorValues enum definition
 *
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_HTTPFLAVORVALUES_HTTP_1_0 = '1.0';
var TMP_HTTPFLAVORVALUES_HTTP_1_1 = '1.1';
var TMP_HTTPFLAVORVALUES_HTTP_2_0 = '2.0';
var TMP_HTTPFLAVORVALUES_SPDY = 'SPDY';
var TMP_HTTPFLAVORVALUES_QUIC = 'QUIC';
var HTTPFLAVORVALUES_HTTP_1_0 = TMP_HTTPFLAVORVALUES_HTTP_1_0;
var HTTPFLAVORVALUES_HTTP_1_1 = TMP_HTTPFLAVORVALUES_HTTP_1_1;
var HTTPFLAVORVALUES_HTTP_2_0 = TMP_HTTPFLAVORVALUES_HTTP_2_0;
var HTTPFLAVORVALUES_SPDY = TMP_HTTPFLAVORVALUES_SPDY;
var HTTPFLAVORVALUES_QUIC = TMP_HTTPFLAVORVALUES_QUIC;
var HttpFlavorValues = {
    HTTP_1_0: TMP_HTTPFLAVORVALUES_HTTP_1_0,
    HTTP_1_1: TMP_HTTPFLAVORVALUES_HTTP_1_1,
    HTTP_2_0: TMP_HTTPFLAVORVALUES_HTTP_2_0,
    SPDY: TMP_HTTPFLAVORVALUES_SPDY,
    QUIC: TMP_HTTPFLAVORVALUES_QUIC
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessagingDestinationKindValues enum definition
 *
 * The kind of message destination.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE = 'queue';
var TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC = 'topic';
var MESSAGINGDESTINATIONKINDVALUES_QUEUE = TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE;
var MESSAGINGDESTINATIONKINDVALUES_TOPIC = TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC;
var MessagingDestinationKindValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE,
    TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessagingOperationValues enum definition
 *
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_MESSAGINGOPERATIONVALUES_RECEIVE = 'receive';
var TMP_MESSAGINGOPERATIONVALUES_PROCESS = 'process';
var MESSAGINGOPERATIONVALUES_RECEIVE = TMP_MESSAGINGOPERATIONVALUES_RECEIVE;
var MESSAGINGOPERATIONVALUES_PROCESS = TMP_MESSAGINGOPERATIONVALUES_PROCESS;
var MessagingOperationValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_MESSAGINGOPERATIONVALUES_RECEIVE,
    TMP_MESSAGINGOPERATIONVALUES_PROCESS
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for RpcGrpcStatusCodeValues enum definition
 *
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_RPCGRPCSTATUSCODEVALUES_OK = 0;
var TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
var TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
var TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
var TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
var TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
var TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
var TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
var TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
var TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
var TMP_RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
var TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
var TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
var TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
var TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
var TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
var TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
var RPCGRPCSTATUSCODEVALUES_OK = TMP_RPCGRPCSTATUSCODEVALUES_OK;
var RPCGRPCSTATUSCODEVALUES_CANCELLED = TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED;
var RPCGRPCSTATUSCODEVALUES_UNKNOWN = TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN;
var RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT;
var RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED;
var RPCGRPCSTATUSCODEVALUES_NOT_FOUND = TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND;
var RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS;
var RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED;
var RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED;
var RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION;
var RPCGRPCSTATUSCODEVALUES_ABORTED = TMP_RPCGRPCSTATUSCODEVALUES_ABORTED;
var RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE;
var RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED;
var RPCGRPCSTATUSCODEVALUES_INTERNAL = TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL;
var RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE;
var RPCGRPCSTATUSCODEVALUES_DATA_LOSS = TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS;
var RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED;
var RpcGrpcStatusCodeValues = {
    OK: TMP_RPCGRPCSTATUSCODEVALUES_OK,
    CANCELLED: TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED,
    UNKNOWN: TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN,
    INVALID_ARGUMENT: TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
    DEADLINE_EXCEEDED: TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
    NOT_FOUND: TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
    ALREADY_EXISTS: TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
    PERMISSION_DENIED: TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
    RESOURCE_EXHAUSTED: TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
    FAILED_PRECONDITION: TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
    ABORTED: TMP_RPCGRPCSTATUSCODEVALUES_ABORTED,
    OUT_OF_RANGE: TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
    UNIMPLEMENTED: TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
    INTERNAL: TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL,
    UNAVAILABLE: TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
    DATA_LOSS: TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
    UNAUTHENTICATED: TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessageTypeValues enum definition
 *
 * Whether this is a received or sent message.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_MESSAGETYPEVALUES_SENT = 'SENT';
var TMP_MESSAGETYPEVALUES_RECEIVED = 'RECEIVED';
var MESSAGETYPEVALUES_SENT = TMP_MESSAGETYPEVALUES_SENT;
var MESSAGETYPEVALUES_RECEIVED = TMP_MESSAGETYPEVALUES_RECEIVED;
var MessageTypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_MESSAGETYPEVALUES_SENT,
    TMP_MESSAGETYPEVALUES_RECEIVED
]); //# sourceMappingURL=SemanticAttributes.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/enums.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Event name definitions
__turbopack_esm__({
    "ExceptionEventName": (()=>ExceptionEventName)
});
var ExceptionEventName = 'exception'; //# sourceMappingURL=enums.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Span.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "Span": (()=>Span)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/attributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/time.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$performance$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/performance.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$enums$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/enums.js [instrumentation-edge] (ecmascript)");
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
;
/**
 * This class represents a span.
 */ var Span = function() {
    /**
     * Constructs a new Span instance.
     *
     * @deprecated calling Span constructor directly is not supported. Please use tracer.startSpan.
     * */ function Span(parentTracer, context, spanName, spanContext, kind, parentSpanId, links, startTime, _deprecatedClock, attributes) {
        if (links === void 0) {
            links = [];
        }
        this.attributes = {};
        this.links = [];
        this.events = [];
        this._droppedAttributesCount = 0;
        this._droppedEventsCount = 0;
        this._droppedLinksCount = 0;
        this.status = {
            code: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["SpanStatusCode"].UNSET
        };
        this.endTime = [
            0,
            0
        ];
        this._ended = false;
        this._duration = [
            -1,
            -1
        ];
        this.name = spanName;
        this._spanContext = spanContext;
        this.parentSpanId = parentSpanId;
        this.kind = kind;
        this.links = links;
        var now = Date.now();
        this._performanceStartTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$performance$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["otperformance"].now();
        this._performanceOffset = now - (this._performanceStartTime + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getTimeOrigin"])());
        this._startTimeProvided = startTime != null;
        this.startTime = this._getTime(startTime !== null && startTime !== void 0 ? startTime : now);
        this.resource = parentTracer.resource;
        this.instrumentationLibrary = parentTracer.instrumentationLibrary;
        this._spanLimits = parentTracer.getSpanLimits();
        this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
        if (attributes != null) {
            this.setAttributes(attributes);
        }
        this._spanProcessor = parentTracer.getActiveSpanProcessor();
        this._spanProcessor.onStart(this, context);
    }
    Span.prototype.spanContext = function() {
        return this._spanContext;
    };
    Span.prototype.setAttribute = function(key, value) {
        if (value == null || this._isSpanEnded()) return this;
        if (key.length === 0) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Invalid attribute key: " + key);
            return this;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isAttributeValue"])(value)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Invalid attribute value set for key: " + key);
            return this;
        }
        if (Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, key)) {
            this._droppedAttributesCount++;
            return this;
        }
        this.attributes[key] = this._truncateToSize(value);
        return this;
    };
    Span.prototype.setAttributes = function(attributes) {
        var e_1, _a;
        try {
            for(var _b = __values(Object.entries(attributes)), _c = _b.next(); !_c.done; _c = _b.next()){
                var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                this.setAttribute(k, v);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return this;
    };
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [timeStamp] Specified time stamp for the event
     */ Span.prototype.addEvent = function(name, attributesOrStartTime, timeStamp) {
        if (this._isSpanEnded()) return this;
        if (this._spanLimits.eventCountLimit === 0) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn('No events allowed.');
            this._droppedEventsCount++;
            return this;
        }
        if (this.events.length >= this._spanLimits.eventCountLimit) {
            if (this._droppedEventsCount === 0) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug('Dropping extra events.');
            }
            this.events.shift();
            this._droppedEventsCount++;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTimeInput"])(attributesOrStartTime)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTimeInput"])(timeStamp)) {
                timeStamp = attributesOrStartTime;
            }
            attributesOrStartTime = undefined;
        }
        var attributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["sanitizeAttributes"])(attributesOrStartTime);
        this.events.push({
            name: name,
            attributes: attributes,
            time: this._getTime(timeStamp),
            droppedAttributesCount: 0
        });
        return this;
    };
    Span.prototype.addLink = function(link) {
        this.links.push(link);
        return this;
    };
    Span.prototype.addLinks = function(links) {
        var _a;
        (_a = this.links).push.apply(_a, __spreadArray([], __read(links), false));
        return this;
    };
    Span.prototype.setStatus = function(status) {
        if (this._isSpanEnded()) return this;
        this.status = __assign({}, status);
        // When using try-catch, the caught "error" is of type `any`. When then assigning `any` to `status.message`,
        // TypeScript will not error. While this can happen during use of any API, it is more common on Span#setStatus()
        // as it's likely used in a catch-block. Therefore, we validate if `status.message` is actually a string, null, or
        // undefined to avoid an incorrect type causing issues downstream.
        if (this.status.message != null && typeof status.message !== 'string') {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Dropping invalid status.message of type '" + typeof status.message + "', expected 'string'");
            delete this.status.message;
        }
        return this;
    };
    Span.prototype.updateName = function(name) {
        if (this._isSpanEnded()) return this;
        this.name = name;
        return this;
    };
    Span.prototype.end = function(endTime) {
        if (this._isSpanEnded()) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.");
            return;
        }
        this._ended = true;
        this.endTime = this._getTime(endTime);
        this._duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["hrTimeDuration"])(this.startTime, this.endTime);
        if (this._duration[0] < 0) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn('Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.', this.startTime, this.endTime);
            this.endTime = this.startTime.slice();
            this._duration = [
                0,
                0
            ];
        }
        if (this._droppedEventsCount > 0) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached");
        }
        this._spanProcessor.onEnd(this);
    };
    Span.prototype._getTime = function(inp) {
        if (typeof inp === 'number' && inp <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$performance$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["otperformance"].now()) {
            // must be a performance timestamp
            // apply correction and convert to hrtime
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["hrTime"])(inp + this._performanceOffset);
        }
        if (typeof inp === 'number') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["millisToHrTime"])(inp);
        }
        if (inp instanceof Date) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["millisToHrTime"])(inp.getTime());
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTimeInputHrTime"])(inp)) {
            return inp;
        }
        if (this._startTimeProvided) {
            // if user provided a time for the start manually
            // we can't use duration to calculate event/end times
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["millisToHrTime"])(Date.now());
        }
        var msDuration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$performance$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["otperformance"].now() - this._performanceStartTime;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["addHrTimes"])(this.startTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["millisToHrTime"])(msDuration));
    };
    Span.prototype.isRecording = function() {
        return this._ended === false;
    };
    Span.prototype.recordException = function(exception, time) {
        var attributes = {};
        if (typeof exception === 'string') {
            attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMATTRS_EXCEPTION_MESSAGE"]] = exception;
        } else if (exception) {
            if (exception.code) {
                attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMATTRS_EXCEPTION_TYPE"]] = exception.code.toString();
            } else if (exception.name) {
                attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMATTRS_EXCEPTION_TYPE"]] = exception.name;
            }
            if (exception.message) {
                attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMATTRS_EXCEPTION_MESSAGE"]] = exception.message;
            }
            if (exception.stack) {
                attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMATTRS_EXCEPTION_STACKTRACE"]] = exception.stack;
            }
        }
        // these are minimum requirements from spec
        if (attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMATTRS_EXCEPTION_TYPE"]] || attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMATTRS_EXCEPTION_MESSAGE"]]) {
            this.addEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$enums$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ExceptionEventName"], attributes, time);
        } else {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Failed to record an exception " + exception);
        }
    };
    Object.defineProperty(Span.prototype, "duration", {
        get: function() {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "ended", {
        get: function() {
            return this._ended;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "droppedAttributesCount", {
        get: function() {
            return this._droppedAttributesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "droppedEventsCount", {
        get: function() {
            return this._droppedEventsCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "droppedLinksCount", {
        get: function() {
            return this._droppedLinksCount;
        },
        enumerable: false,
        configurable: true
    });
    Span.prototype._isSpanEnded = function() {
        if (this._ended) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}");
        }
        return this._ended;
    };
    // Utility function to truncate given value within size
    // for value type of string, will truncate to given limit
    // for type of non-string, will return same value
    Span.prototype._truncateToLimitUtil = function(value, limit) {
        if (value.length <= limit) {
            return value;
        }
        return value.substring(0, limit);
    };
    /**
     * If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
     * return string with truncated to {@code attributeValueLengthLimit} characters
     *
     * If the given attribute value is array of strings then
     * return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
     *
     * Otherwise return same Attribute {@code value}
     *
     * @param value Attribute value
     * @returns truncated attribute value if required, otherwise same value
     */ Span.prototype._truncateToSize = function(value) {
        var _this = this;
        var limit = this._attributeValueLengthLimit;
        // Check limit
        if (limit <= 0) {
            // Negative values are invalid, so do not truncate
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Attribute value limit must be positive, got " + limit);
            return value;
        }
        // String
        if (typeof value === 'string') {
            return this._truncateToLimitUtil(value, limit);
        }
        // Array of strings
        if (Array.isArray(value)) {
            return value.map(function(val) {
                return typeof val === 'string' ? _this._truncateToLimitUtil(val, limit) : val;
            });
        }
        // Other types, no need to apply value length limit
        return value;
    };
    return Span;
}();
;
 //# sourceMappingURL=Span.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/sampling.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "TracesSamplerValues": (()=>TracesSamplerValues)
});
var TracesSamplerValues;
(function(TracesSamplerValues) {
    TracesSamplerValues["AlwaysOff"] = "always_off";
    TracesSamplerValues["AlwaysOn"] = "always_on";
    TracesSamplerValues["ParentBasedAlwaysOff"] = "parentbased_always_off";
    TracesSamplerValues["ParentBasedAlwaysOn"] = "parentbased_always_on";
    TracesSamplerValues["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
    TracesSamplerValues["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {})); //# sourceMappingURL=sampling.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/environment.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "DEFAULT_ATTRIBUTE_COUNT_LIMIT": (()=>DEFAULT_ATTRIBUTE_COUNT_LIMIT),
    "DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT": (()=>DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT),
    "DEFAULT_ENVIRONMENT": (()=>DEFAULT_ENVIRONMENT),
    "DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT": (()=>DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT),
    "DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT": (()=>DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT),
    "parseEnvironment": (()=>parseEnvironment)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/sampling.js [instrumentation-edge] (ecmascript)");
;
;
var DEFAULT_LIST_SEPARATOR = ',';
/**
 * Environment interface to define all names
 */ var ENVIRONMENT_BOOLEAN_KEYS = [
    'OTEL_SDK_DISABLED'
];
function isEnvVarABoolean(key) {
    return ENVIRONMENT_BOOLEAN_KEYS.indexOf(key) > -1;
}
var ENVIRONMENT_NUMBERS_KEYS = [
    'OTEL_BSP_EXPORT_TIMEOUT',
    'OTEL_BSP_MAX_EXPORT_BATCH_SIZE',
    'OTEL_BSP_MAX_QUEUE_SIZE',
    'OTEL_BSP_SCHEDULE_DELAY',
    'OTEL_BLRP_EXPORT_TIMEOUT',
    'OTEL_BLRP_MAX_EXPORT_BATCH_SIZE',
    'OTEL_BLRP_MAX_QUEUE_SIZE',
    'OTEL_BLRP_SCHEDULE_DELAY',
    'OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT',
    'OTEL_ATTRIBUTE_COUNT_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT',
    'OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT',
    'OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT',
    'OTEL_SPAN_EVENT_COUNT_LIMIT',
    'OTEL_SPAN_LINK_COUNT_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT',
    'OTEL_EXPORTER_OTLP_TIMEOUT',
    'OTEL_EXPORTER_OTLP_TRACES_TIMEOUT',
    'OTEL_EXPORTER_OTLP_METRICS_TIMEOUT',
    'OTEL_EXPORTER_OTLP_LOGS_TIMEOUT',
    'OTEL_EXPORTER_JAEGER_AGENT_PORT'
];
function isEnvVarANumber(key) {
    return ENVIRONMENT_NUMBERS_KEYS.indexOf(key) > -1;
}
var ENVIRONMENT_LISTS_KEYS = [
    'OTEL_NO_PATCH_MODULES',
    'OTEL_PROPAGATORS',
    'OTEL_SEMCONV_STABILITY_OPT_IN'
];
function isEnvVarAList(key) {
    return ENVIRONMENT_LISTS_KEYS.indexOf(key) > -1;
}
var DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity;
var DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
var DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 128;
var DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 128;
var DEFAULT_ENVIRONMENT = {
    OTEL_SDK_DISABLED: false,
    CONTAINER_NAME: '',
    ECS_CONTAINER_METADATA_URI_V4: '',
    ECS_CONTAINER_METADATA_URI: '',
    HOSTNAME: '',
    KUBERNETES_SERVICE_HOST: '',
    NAMESPACE: '',
    OTEL_BSP_EXPORT_TIMEOUT: 30000,
    OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BSP_MAX_QUEUE_SIZE: 2048,
    OTEL_BSP_SCHEDULE_DELAY: 5000,
    OTEL_BLRP_EXPORT_TIMEOUT: 30000,
    OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
    OTEL_BLRP_SCHEDULE_DELAY: 5000,
    OTEL_EXPORTER_JAEGER_AGENT_HOST: '',
    OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
    OTEL_EXPORTER_JAEGER_ENDPOINT: '',
    OTEL_EXPORTER_JAEGER_PASSWORD: '',
    OTEL_EXPORTER_JAEGER_USER: '',
    OTEL_EXPORTER_OTLP_ENDPOINT: '',
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: '',
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: '',
    OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: '',
    OTEL_EXPORTER_OTLP_HEADERS: '',
    OTEL_EXPORTER_OTLP_TRACES_HEADERS: '',
    OTEL_EXPORTER_OTLP_METRICS_HEADERS: '',
    OTEL_EXPORTER_OTLP_LOGS_HEADERS: '',
    OTEL_EXPORTER_OTLP_TIMEOUT: 10000,
    OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 10000,
    OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 10000,
    OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 10000,
    OTEL_EXPORTER_ZIPKIN_ENDPOINT: 'http://localhost:9411/api/v2/spans',
    OTEL_LOG_LEVEL: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["DiagLogLevel"].INFO,
    OTEL_NO_PATCH_MODULES: [],
    OTEL_PROPAGATORS: [
        'tracecontext',
        'baggage'
    ],
    OTEL_RESOURCE_ATTRIBUTES: '',
    OTEL_SERVICE_NAME: '',
    OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
    OTEL_SPAN_LINK_COUNT_LIMIT: 128,
    OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
    OTEL_TRACES_EXPORTER: '',
    OTEL_TRACES_SAMPLER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TracesSamplerValues"].ParentBasedAlwaysOn,
    OTEL_TRACES_SAMPLER_ARG: '',
    OTEL_LOGS_EXPORTER: '',
    OTEL_EXPORTER_OTLP_INSECURE: '',
    OTEL_EXPORTER_OTLP_TRACES_INSECURE: '',
    OTEL_EXPORTER_OTLP_METRICS_INSECURE: '',
    OTEL_EXPORTER_OTLP_LOGS_INSECURE: '',
    OTEL_EXPORTER_OTLP_CERTIFICATE: '',
    OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: '',
    OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: '',
    OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: '',
    OTEL_EXPORTER_OTLP_COMPRESSION: '',
    OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: '',
    OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: '',
    OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: '',
    OTEL_EXPORTER_OTLP_CLIENT_KEY: '',
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: '',
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: '',
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: '',
    OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: '',
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: '',
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: '',
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: '',
    OTEL_EXPORTER_OTLP_PROTOCOL: 'http/protobuf',
    OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: 'http/protobuf',
    OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: 'http/protobuf',
    OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: 'http/protobuf',
    OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: 'cumulative',
    OTEL_SEMCONV_STABILITY_OPT_IN: []
};
/**
 * @param key
 * @param environment
 * @param values
 */ function parseBoolean(key, environment, values) {
    if (typeof values[key] === 'undefined') {
        return;
    }
    var value = String(values[key]);
    // support case-insensitive "true"
    environment[key] = value.toLowerCase() === 'true';
}
/**
 * Parses a variable as number with number validation
 * @param name
 * @param environment
 * @param values
 * @param min
 * @param max
 */ function parseNumber(name, environment, values, min, max) {
    if (min === void 0) {
        min = -Infinity;
    }
    if (max === void 0) {
        max = Infinity;
    }
    if (typeof values[name] !== 'undefined') {
        var value = Number(values[name]);
        if (!isNaN(value)) {
            if (value < min) {
                environment[name] = min;
            } else if (value > max) {
                environment[name] = max;
            } else {
                environment[name] = value;
            }
        }
    }
}
/**
 * Parses list-like strings from input into output.
 * @param name
 * @param environment
 * @param values
 * @param separator
 */ function parseStringList(name, output, input, separator) {
    if (separator === void 0) {
        separator = DEFAULT_LIST_SEPARATOR;
    }
    var givenValue = input[name];
    if (typeof givenValue === 'string') {
        output[name] = givenValue.split(separator).map(function(v) {
            return v.trim();
        });
    }
}
// The support string -> DiagLogLevel mappings
var logLevelMap = {
    ALL: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["DiagLogLevel"].ALL,
    VERBOSE: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["DiagLogLevel"].VERBOSE,
    DEBUG: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["DiagLogLevel"].DEBUG,
    INFO: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["DiagLogLevel"].INFO,
    WARN: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["DiagLogLevel"].WARN,
    ERROR: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["DiagLogLevel"].ERROR,
    NONE: __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["DiagLogLevel"].NONE
};
/**
 * Environmentally sets log level if valid log level string is provided
 * @param key
 * @param environment
 * @param values
 */ function setLogLevelFromEnv(key, environment, values) {
    var value = values[key];
    if (typeof value === 'string') {
        var theLevel = logLevelMap[value.toUpperCase()];
        if (theLevel != null) {
            environment[key] = theLevel;
        }
    }
}
function parseEnvironment(values) {
    var environment = {};
    for(var env in DEFAULT_ENVIRONMENT){
        var key = env;
        switch(key){
            case 'OTEL_LOG_LEVEL':
                setLogLevelFromEnv(key, environment, values);
                break;
            default:
                if (isEnvVarABoolean(key)) {
                    parseBoolean(key, environment, values);
                } else if (isEnvVarANumber(key)) {
                    parseNumber(key, environment, values);
                } else if (isEnvVarAList(key)) {
                    parseStringList(key, environment, values);
                } else {
                    var value = values[key];
                    if (typeof value !== 'undefined' && value !== null) {
                        environment[key] = String(value);
                    }
                }
        }
    }
    return environment;
} //# sourceMappingURL=environment.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "getEnv": (()=>getEnv),
    "getEnvWithoutDefaults": (()=>getEnvWithoutDefaults)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/environment.js [instrumentation-edge] (ecmascript)");
;
function getEnv() {
    var processEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["parseEnvironment"])(process.env);
    return Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_ENVIRONMENT"], processEnv);
}
function getEnvWithoutDefaults() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["parseEnvironment"])(process.env);
} //# sourceMappingURL=environment.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "loggingErrorHandler": (()=>loggingErrorHandler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
;
function loggingErrorHandler() {
    return function(ex) {
        __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error(stringifyException(ex));
    };
}
/**
 * Converts an exception into a string representation
 * @param {Exception} ex
 */ function stringifyException(ex) {
    if (typeof ex === 'string') {
        return ex;
    } else {
        return JSON.stringify(flattenException(ex));
    }
}
/**
 * Flattens an exception into key-value pairs by traversing the prototype chain
 * and coercing values to strings. Duplicate properties will not be overwritten;
 * the first insert wins.
 */ function flattenException(ex) {
    var result = {};
    var current = ex;
    while(current !== null){
        Object.getOwnPropertyNames(current).forEach(function(propertyName) {
            if (result[propertyName]) return;
            var value = current[propertyName];
            if (value) {
                result[propertyName] = String(value);
            }
        });
        current = Object.getPrototypeOf(current);
    }
    return result;
} //# sourceMappingURL=logging-error-handler.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "globalErrorHandler": (()=>globalErrorHandler),
    "setGlobalErrorHandler": (()=>setGlobalErrorHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$logging$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js [instrumentation-edge] (ecmascript)");
;
/** The global error handler delegate */ var delegateHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$logging$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["loggingErrorHandler"])();
function setGlobalErrorHandler(handler) {
    delegateHandler = handler;
}
function globalErrorHandler(ex) {
    try {
        delegateHandler(ex);
    } catch (_a) {} // eslint-disable-line no-empty
} //# sourceMappingURL=global-error-handler.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/ParentBasedSampler.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "ParentBasedSampler": (()=>ParentBasedSampler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js [instrumentation-edge] (ecmascript)");
;
;
;
;
/**
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */ var ParentBasedSampler = function() {
    function ParentBasedSampler(config) {
        var _a, _b, _c, _d;
        this._root = config.root;
        if (!this._root) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["globalErrorHandler"])(new Error('ParentBasedSampler must have a root sampler configured'));
            this._root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]();
        }
        this._remoteParentSampled = (_a = config.remoteParentSampled) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]();
        this._remoteParentNotSampled = (_b = config.remoteParentNotSampled) !== null && _b !== void 0 ? _b : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOffSampler"]();
        this._localParentSampled = (_c = config.localParentSampled) !== null && _c !== void 0 ? _c : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]();
        this._localParentNotSampled = (_d = config.localParentNotSampled) !== null && _d !== void 0 ? _d : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOffSampler"]();
    }
    ParentBasedSampler.prototype.shouldSample = function(context, traceId, spanName, spanKind, attributes, links) {
        var parentContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getSpanContext(context);
        if (!parentContext || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isSpanContextValid"])(parentContext)) {
            return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.isRemote) {
            if (parentContext.traceFlags & __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED) {
                return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
            }
            return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.traceFlags & __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED) {
            return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
    };
    ParentBasedSampler.prototype.toString = function() {
        return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}";
    };
    return ParentBasedSampler;
}();
;
 //# sourceMappingURL=ParentBasedSampler.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/TraceIdRatioBasedSampler.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "TraceIdRatioBasedSampler": (()=>TraceIdRatioBasedSampler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js [instrumentation-edge] (ecmascript)");
;
;
/** Sampler that samples a given fraction of traces based of trace id deterministically. */ var TraceIdRatioBasedSampler = function() {
    function TraceIdRatioBasedSampler(_ratio) {
        if (_ratio === void 0) {
            _ratio = 0;
        }
        this._ratio = _ratio;
        this._ratio = this._normalize(_ratio);
        this._upperBound = Math.floor(this._ratio * 0xffffffff);
    }
    TraceIdRatioBasedSampler.prototype.shouldSample = function(context, traceId) {
        return {
            decision: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isValidTraceId"])(traceId) && this._accumulate(traceId) < this._upperBound ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SamplingDecision"].RECORD_AND_SAMPLED : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SamplingDecision"].NOT_RECORD
        };
    };
    TraceIdRatioBasedSampler.prototype.toString = function() {
        return "TraceIdRatioBased{" + this._ratio + "}";
    };
    TraceIdRatioBasedSampler.prototype._normalize = function(ratio) {
        if (typeof ratio !== 'number' || isNaN(ratio)) return 0;
        return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    };
    TraceIdRatioBasedSampler.prototype._accumulate = function(traceId) {
        var accumulation = 0;
        for(var i = 0; i < traceId.length / 8; i++){
            var pos = i * 8;
            var part = parseInt(traceId.slice(pos, pos + 8), 16);
            accumulation = (accumulation ^ part) >>> 0;
        }
        return accumulation;
    };
    return TraceIdRatioBasedSampler;
}();
;
 //# sourceMappingURL=TraceIdRatioBasedSampler.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "buildSamplerFromEnv": (()=>buildSamplerFromEnv),
    "loadDefaultConfig": (()=>loadDefaultConfig)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/sampling.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/ParentBasedSampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/TraceIdRatioBasedSampler.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
;
var FALLBACK_OTEL_TRACES_SAMPLER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TracesSamplerValues"].AlwaysOn;
var DEFAULT_RATIO = 1;
function loadDefaultConfig() {
    var env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getEnv"])();
    return {
        sampler: buildSamplerFromEnv(env),
        forceFlushTimeoutMillis: 30000,
        generalLimits: {
            attributeValueLengthLimit: env.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            attributeCountLimit: env.OTEL_ATTRIBUTE_COUNT_LIMIT
        },
        spanLimits: {
            attributeValueLengthLimit: env.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            attributeCountLimit: env.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
            linkCountLimit: env.OTEL_SPAN_LINK_COUNT_LIMIT,
            eventCountLimit: env.OTEL_SPAN_EVENT_COUNT_LIMIT,
            attributePerEventCountLimit: env.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
            attributePerLinkCountLimit: env.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
        },
        mergeResourceWithDefaults: true
    };
}
function buildSamplerFromEnv(environment) {
    if (environment === void 0) {
        environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getEnv"])();
    }
    switch(environment.OTEL_TRACES_SAMPLER){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TracesSamplerValues"].AlwaysOn:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TracesSamplerValues"].AlwaysOff:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOffSampler"]();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TracesSamplerValues"].ParentBasedAlwaysOn:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ParentBasedSampler"]({
                root: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]()
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TracesSamplerValues"].ParentBasedAlwaysOff:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ParentBasedSampler"]({
                root: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOffSampler"]()
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TracesSamplerValues"].TraceIdRatio:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TraceIdRatioBasedSampler"](getSamplerProbabilityFromEnv(environment));
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$sampling$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TracesSamplerValues"].ParentBasedTraceIdRatio:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ParentBasedSampler"]({
                root: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TraceIdRatioBasedSampler"](getSamplerProbabilityFromEnv(environment))
            });
        default:
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error("OTEL_TRACES_SAMPLER value \"" + environment.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + FALLBACK_OTEL_TRACES_SAMPLER + "\".");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]();
    }
}
function getSamplerProbabilityFromEnv(environment) {
    if (environment.OTEL_TRACES_SAMPLER_ARG === undefined || environment.OTEL_TRACES_SAMPLER_ARG === '') {
        __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    var probability = Number(environment.OTEL_TRACES_SAMPLER_ARG);
    if (isNaN(probability)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    if (probability < 0 || probability > 1) {
        __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    return probability;
} //# sourceMappingURL=config.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "mergeConfig": (()=>mergeConfig),
    "reconfigureLimits": (()=>reconfigureLimits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$config$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/environment.js [instrumentation-edge] (ecmascript)");
;
;
function mergeConfig(userConfig) {
    var perInstanceDefaults = {
        sampler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$config$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["buildSamplerFromEnv"])()
    };
    var DEFAULT_CONFIG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$config$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["loadDefaultConfig"])();
    var target = Object.assign({}, DEFAULT_CONFIG, perInstanceDefaults, userConfig);
    target.generalLimits = Object.assign({}, DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {});
    target.spanLimits = Object.assign({}, DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {});
    return target;
}
function reconfigureLimits(userConfig) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var spanLimits = Object.assign({}, userConfig.spanLimits);
    var parsedEnvConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getEnvWithoutDefaults"])();
    /**
     * Reassign span attribute count limit to use first non null value defined by user or use default value
     */ spanLimits.attributeCountLimit = (_f = (_e = (_d = (_b = (_a = userConfig.spanLimits) === null || _a === void 0 ? void 0 : _a.attributeCountLimit) !== null && _b !== void 0 ? _b : (_c = userConfig.generalLimits) === null || _c === void 0 ? void 0 : _c.attributeCountLimit) !== null && _d !== void 0 ? _d : parsedEnvConfig.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && _e !== void 0 ? _e : parsedEnvConfig.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && _f !== void 0 ? _f : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_ATTRIBUTE_COUNT_LIMIT"];
    /**
     * Reassign span attribute value length limit to use first non null value defined by user or use default value
     */ spanLimits.attributeValueLengthLimit = (_m = (_l = (_k = (_h = (_g = userConfig.spanLimits) === null || _g === void 0 ? void 0 : _g.attributeValueLengthLimit) !== null && _h !== void 0 ? _h : (_j = userConfig.generalLimits) === null || _j === void 0 ? void 0 : _j.attributeValueLengthLimit) !== null && _k !== void 0 ? _k : parsedEnvConfig.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _l !== void 0 ? _l : parsedEnvConfig.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _m !== void 0 ? _m : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT"];
    return Object.assign({}, userConfig, {
        spanLimits: spanLimits
    });
} //# sourceMappingURL=utility.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/RandomIdGenerator.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "RandomIdGenerator": (()=>RandomIdGenerator)
});
var SPAN_ID_BYTES = 8;
var TRACE_ID_BYTES = 16;
var RandomIdGenerator = function() {
    function RandomIdGenerator() {
        /**
         * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
         * characters corresponding to 128 bits.
         */ this.generateTraceId = getIdGenerator(TRACE_ID_BYTES);
        /**
         * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
         * characters corresponding to 64 bits.
         */ this.generateSpanId = getIdGenerator(SPAN_ID_BYTES);
    }
    return RandomIdGenerator;
}();
;
var SHARED_BUFFER = Buffer.allocUnsafe(TRACE_ID_BYTES);
function getIdGenerator(bytes) {
    return function generateId() {
        for(var i = 0; i < bytes / 4; i++){
            // unsigned right shift drops decimal part of the number
            // it is required because if a number between 2**32 and 2**32 - 1 is generated, an out of range error is thrown by writeUInt32BE
            SHARED_BUFFER.writeUInt32BE(Math.random() * Math.pow(2, 32) >>> 0, i * 4);
        }
        // If buffer is all 0, set the last byte to 1 to guarantee a valid w3c id is generated
        for(var i = 0; i < bytes; i++){
            if (SHARED_BUFFER[i] > 0) {
                break;
            } else if (i === bytes - 1) {
                SHARED_BUFFER[bytes - 1] = 1;
            }
        }
        return SHARED_BUFFER.toString('hex', 0, bytes);
    };
} //# sourceMappingURL=RandomIdGenerator.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "Tracer": (()=>Tracer)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/attributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Span$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Span.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$utility$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$platform$2f$node$2f$RandomIdGenerator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/RandomIdGenerator.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
/**
 * This class represents a basic tracer.
 */ var Tracer = function() {
    /**
     * Constructs a new Tracer instance.
     */ function Tracer(instrumentationLibrary, config, _tracerProvider) {
        this._tracerProvider = _tracerProvider;
        var localConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$utility$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["mergeConfig"])(config);
        this._sampler = localConfig.sampler;
        this._generalLimits = localConfig.generalLimits;
        this._spanLimits = localConfig.spanLimits;
        this._idGenerator = config.idGenerator || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$platform$2f$node$2f$RandomIdGenerator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["RandomIdGenerator"]();
        this.resource = _tracerProvider.resource;
        this.instrumentationLibrary = instrumentationLibrary;
    }
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */ Tracer.prototype.startSpan = function(name, options, context) {
        var _a, _b, _c;
        if (options === void 0) {
            options = {};
        }
        if (context === void 0) {
            context = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.context.active();
        }
        // remove span from context in case a root span is requested via options
        if (options.root) {
            context = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.trace.deleteSpan(context);
        }
        var parentSpan = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.trace.getSpan(context);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.diag.debug('Instrumentation suppressed, returning Noop Span');
            var nonRecordingSpan = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.trace.wrapSpanContext(__TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.INVALID_SPAN_CONTEXT);
            return nonRecordingSpan;
        }
        var parentSpanContext = parentSpan === null || parentSpan === void 0 ? void 0 : parentSpan.spanContext();
        var spanId = this._idGenerator.generateSpanId();
        var traceId;
        var traceState;
        var parentSpanId;
        if (!parentSpanContext || !__TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.trace.isSpanContextValid(parentSpanContext)) {
            // New root span.
            traceId = this._idGenerator.generateTraceId();
        } else {
            // New child span.
            traceId = parentSpanContext.traceId;
            traceState = parentSpanContext.traceState;
            parentSpanId = parentSpanContext.spanId;
        }
        var spanKind = (_a = options.kind) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.SpanKind.INTERNAL;
        var links = ((_b = options.links) !== null && _b !== void 0 ? _b : []).map(function(link) {
            return {
                context: link.context,
                attributes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["sanitizeAttributes"])(link.attributes)
            };
        });
        var attributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["sanitizeAttributes"])(options.attributes);
        // make sampling decision
        var samplingResult = this._sampler.shouldSample(context, traceId, name, spanKind, attributes, links);
        traceState = (_c = samplingResult.traceState) !== null && _c !== void 0 ? _c : traceState;
        var traceFlags = samplingResult.decision === __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.SamplingDecision.RECORD_AND_SAMPLED ? __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.TraceFlags.SAMPLED : __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.TraceFlags.NONE;
        var spanContext = {
            traceId: traceId,
            spanId: spanId,
            traceFlags: traceFlags,
            traceState: traceState
        };
        if (samplingResult.decision === __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.SamplingDecision.NOT_RECORD) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.diag.debug('Recording is off, propagating context in a non-recording span');
            var nonRecordingSpan = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.trace.wrapSpanContext(spanContext);
            return nonRecordingSpan;
        }
        // Set initial span attributes. The attributes object may have been mutated
        // by the sampler, so we sanitize the merged attributes before setting them.
        var initAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["sanitizeAttributes"])(Object.assign(attributes, samplingResult.attributes));
        var span = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Span$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["Span"](this, context, name, spanContext, spanKind, parentSpanId, links, options.startTime, undefined, initAttributes);
        return span;
    };
    Tracer.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        } else if (arguments.length === 2) {
            fn = arg2;
        } else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.trace.setSpan(parentContext, span);
        return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__.context.with(contextWithSpanSet, fn, undefined, span);
    };
    /** Returns the active {@link GeneralLimits}. */ Tracer.prototype.getGeneralLimits = function() {
        return this._generalLimits;
    };
    /** Returns the active {@link SpanLimits}. */ Tracer.prototype.getSpanLimits = function() {
        return this._spanLimits;
    };
    Tracer.prototype.getActiveSpanProcessor = function() {
        return this._tracerProvider.getActiveSpanProcessor();
    };
    return Tracer;
}();
;
 //# sourceMappingURL=Tracer.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/MultiSpanProcessor.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "MultiSpanProcessor": (()=>MultiSpanProcessor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js [instrumentation-edge] (ecmascript)");
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
;
/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */ var MultiSpanProcessor = function() {
    function MultiSpanProcessor(_spanProcessors) {
        this._spanProcessors = _spanProcessors;
    }
    MultiSpanProcessor.prototype.forceFlush = function() {
        var e_1, _a;
        var promises = [];
        try {
            for(var _b = __values(this._spanProcessors), _c = _b.next(); !_c.done; _c = _b.next()){
                var spanProcessor = _c.value;
                promises.push(spanProcessor.forceFlush());
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return new Promise(function(resolve) {
            Promise.all(promises).then(function() {
                resolve();
            }).catch(function(error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["globalErrorHandler"])(error || new Error('MultiSpanProcessor: forceFlush failed'));
                resolve();
            });
        });
    };
    MultiSpanProcessor.prototype.onStart = function(span, context) {
        var e_2, _a;
        try {
            for(var _b = __values(this._spanProcessors), _c = _b.next(); !_c.done; _c = _b.next()){
                var spanProcessor = _c.value;
                spanProcessor.onStart(span, context);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    };
    MultiSpanProcessor.prototype.onEnd = function(span) {
        var e_3, _a;
        try {
            for(var _b = __values(this._spanProcessors), _c = _b.next(); !_c.done; _c = _b.next()){
                var spanProcessor = _c.value;
                spanProcessor.onEnd(span);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
    };
    MultiSpanProcessor.prototype.shutdown = function() {
        var e_4, _a;
        var promises = [];
        try {
            for(var _b = __values(this._spanProcessors), _c = _b.next(); !_c.done; _c = _b.next()){
                var spanProcessor = _c.value;
                promises.push(spanProcessor.shutdown());
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
        return new Promise(function(resolve, reject) {
            Promise.all(promises).then(function() {
                resolve();
            }, reject);
        });
    };
    return MultiSpanProcessor;
}();
;
 //# sourceMappingURL=MultiSpanProcessor.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/propagation/composite.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "CompositePropagator": (()=>CompositePropagator)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
;
/** Combines multiple propagators into a single propagator. */ var CompositePropagator = function() {
    /**
     * Construct a composite propagator from a list of propagators.
     *
     * @param [config] Configuration object for composite propagator
     */ function CompositePropagator(config) {
        if (config === void 0) {
            config = {};
        }
        var _a;
        this._propagators = (_a = config.propagators) !== null && _a !== void 0 ? _a : [];
        this._fields = Array.from(new Set(this._propagators// older propagators may not have fields function, null check to be sure
        .map(function(p) {
            return typeof p.fields === 'function' ? p.fields() : [];
        }).reduce(function(x, y) {
            return x.concat(y);
        }, [])));
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same carrier key, the propagator later in the list
     * will "win".
     *
     * @param context Context to inject
     * @param carrier Carrier into which context will be injected
     */ CompositePropagator.prototype.inject = function(context, carrier, setter) {
        var e_1, _a;
        try {
            for(var _b = __values(this._propagators), _c = _b.next(); !_c.done; _c = _b.next()){
                var propagator = _c.value;
                try {
                    propagator.inject(context, carrier, setter);
                } catch (err) {
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Failed to inject with " + propagator.constructor.name + ". Err: " + err.message);
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same context key, the propagator later in the list
     * will "win".
     *
     * @param context Context to add values to
     * @param carrier Carrier from which to extract context
     */ CompositePropagator.prototype.extract = function(context, carrier, getter) {
        return this._propagators.reduce(function(ctx, propagator) {
            try {
                return propagator.extract(ctx, carrier, getter);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Failed to extract with " + propagator.constructor.name + ". Err: " + err.message);
            }
            return ctx;
        }, context);
    };
    CompositePropagator.prototype.fields = function() {
        // return a new array so our fields cannot be modified
        return this._fields.slice();
    };
    return CompositePropagator;
}();
;
 //# sourceMappingURL=composite.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/internal/validators.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "validateKey": (()=>validateKey),
    "validateValue": (()=>validateValue)
});
var VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
    return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
} //# sourceMappingURL=validators.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/TraceState.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "TraceState": (()=>TraceState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/internal/validators.js [instrumentation-edge] (ecmascript)");
;
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ',';
var LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */ var TraceState = function() {
    function TraceState(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState) this._parse(rawTraceState);
    }
    TraceState.prototype.set = function(key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceState.prototype.unset = function(key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceState.prototype.get = function(key) {
        return this._internalState.get(key);
    };
    TraceState.prototype.serialize = function() {
        var _this = this;
        return this._keys().reduce(function(agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceState.prototype._parse = function(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
        .reduce(function(agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["validateKey"])(key) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["validateValue"])(value)) {
                    agg.set(key, value);
                } else {
                // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries()).reverse() // Use reverse same as original tracestate parse chain
            .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    };
    TraceState.prototype._keys = function() {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceState.prototype._clone = function() {
        var traceState = new TraceState();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceState;
}();
;
 //# sourceMappingURL=TraceState.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "TRACE_PARENT_HEADER": (()=>TRACE_PARENT_HEADER),
    "TRACE_STATE_HEADER": (()=>TRACE_STATE_HEADER),
    "W3CTraceContextPropagator": (()=>W3CTraceContextPropagator),
    "parseTraceParent": (()=>parseTraceParent)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$TraceState$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/TraceState.js [instrumentation-edge] (ecmascript)");
;
;
;
var TRACE_PARENT_HEADER = 'traceparent';
var TRACE_STATE_HEADER = 'tracestate';
var VERSION = '00';
var VERSION_PART = '(?!ff)[\\da-f]{2}';
var TRACE_ID_PART = '(?![0]{32})[\\da-f]{32}';
var PARENT_ID_PART = '(?![0]{16})[\\da-f]{16}';
var FLAGS_PART = '[\\da-f]{2}';
var TRACE_PARENT_REGEX = new RegExp("^\\s?(" + VERSION_PART + ")-(" + TRACE_ID_PART + ")-(" + PARENT_ID_PART + ")-(" + FLAGS_PART + ")(-.*)?\\s?$");
function parseTraceParent(traceParent) {
    var match = TRACE_PARENT_REGEX.exec(traceParent);
    if (!match) return null;
    // According to the specification the implementation should be compatible
    // with future versions. If there are more parts, we only reject it if it's using version 00
    // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
    if (match[1] === '00' && match[5]) return null;
    return {
        traceId: match[2],
        spanId: match[3],
        traceFlags: parseInt(match[4], 16)
    };
}
/**
 * Propagates {@link SpanContext} through Trace Context format propagation.
 *
 * Based on the Trace Context specification:
 * https://www.w3.org/TR/trace-context/
 */ var W3CTraceContextPropagator = function() {
    function W3CTraceContextPropagator() {}
    W3CTraceContextPropagator.prototype.inject = function(context, carrier, setter) {
        var spanContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getSpanContext(context);
        if (!spanContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context) || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["isSpanContextValid"])(spanContext)) return;
        var traceParent = VERSION + "-" + spanContext.traceId + "-" + spanContext.spanId + "-0" + Number(spanContext.traceFlags || __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].NONE).toString(16);
        setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) {
            setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
        }
    };
    W3CTraceContextPropagator.prototype.extract = function(context, carrier, getter) {
        var traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
        if (!traceParentHeader) return context;
        var traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
        if (typeof traceParent !== 'string') return context;
        var spanContext = parseTraceParent(traceParent);
        if (!spanContext) return context;
        spanContext.isRemote = true;
        var traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
        if (traceStateHeader) {
            // If more than one `tracestate` header is found, we merge them into a
            // single header.
            var state = Array.isArray(traceStateHeader) ? traceStateHeader.join(',') : traceStateHeader;
            spanContext.traceState = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$TraceState$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TraceState"](typeof state === 'string' ? state : undefined);
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].setSpanContext(context, spanContext);
    };
    W3CTraceContextPropagator.prototype.fields = function() {
        return [
            TRACE_PARENT_HEADER,
            TRACE_STATE_HEADER
        ];
    };
    return W3CTraceContextPropagator;
}();
;
 //# sourceMappingURL=W3CTraceContextPropagator.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "BAGGAGE_HEADER": (()=>BAGGAGE_HEADER),
    "BAGGAGE_ITEMS_SEPARATOR": (()=>BAGGAGE_ITEMS_SEPARATOR),
    "BAGGAGE_KEY_PAIR_SEPARATOR": (()=>BAGGAGE_KEY_PAIR_SEPARATOR),
    "BAGGAGE_MAX_NAME_VALUE_PAIRS": (()=>BAGGAGE_MAX_NAME_VALUE_PAIRS),
    "BAGGAGE_MAX_PER_NAME_VALUE_PAIRS": (()=>BAGGAGE_MAX_PER_NAME_VALUE_PAIRS),
    "BAGGAGE_MAX_TOTAL_LENGTH": (()=>BAGGAGE_MAX_TOTAL_LENGTH),
    "BAGGAGE_PROPERTIES_SEPARATOR": (()=>BAGGAGE_PROPERTIES_SEPARATOR)
});
var BAGGAGE_KEY_PAIR_SEPARATOR = '=';
var BAGGAGE_PROPERTIES_SEPARATOR = ';';
var BAGGAGE_ITEMS_SEPARATOR = ',';
var BAGGAGE_HEADER = 'baggage';
var BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
var BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
var BAGGAGE_MAX_TOTAL_LENGTH = 8192; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/baggage/utils.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getKeyPairs": (()=>getKeyPairs),
    "parseKeyPairsIntoRecord": (()=>parseKeyPairsIntoRecord),
    "parsePairKeyValue": (()=>parsePairKeyValue),
    "serializeKeyPairs": (()=>serializeKeyPairs)
});
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation-edge] (ecmascript)");
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
;
;
function serializeKeyPairs(keyPairs) {
    return keyPairs.reduce(function(hValue, current) {
        var value = "" + hValue + (hValue !== '' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"] : '') + current;
        return value.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_TOTAL_LENGTH"] ? hValue : value;
    }, '');
}
function getKeyPairs(baggage) {
    return baggage.getAllEntries().map(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        var entry = encodeURIComponent(key) + "=" + encodeURIComponent(value.value);
        // include opaque metadata if provided
        // NOTE: we intentionally don't URI-encode the metadata - that responsibility falls on the metadata implementation
        if (value.metadata !== undefined) {
            entry += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_PROPERTIES_SEPARATOR"] + value.metadata.toString();
        }
        return entry;
    });
}
function parsePairKeyValue(entry) {
    var valueProps = entry.split(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_PROPERTIES_SEPARATOR"]);
    if (valueProps.length <= 0) return;
    var keyPairPart = valueProps.shift();
    if (!keyPairPart) return;
    var separatorIndex = keyPairPart.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_KEY_PAIR_SEPARATOR"]);
    if (separatorIndex <= 0) return;
    var key = decodeURIComponent(keyPairPart.substring(0, separatorIndex).trim());
    var value = decodeURIComponent(keyPairPart.substring(separatorIndex + 1).trim());
    var metadata;
    if (valueProps.length > 0) {
        metadata = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["baggageEntryMetadataFromString"])(valueProps.join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_PROPERTIES_SEPARATOR"]));
    }
    return {
        key: key,
        value: value,
        metadata: metadata
    };
}
function parseKeyPairsIntoRecord(value) {
    if (typeof value !== 'string' || value.length === 0) return {};
    return value.split(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"]).map(function(entry) {
        return parsePairKeyValue(entry);
    }).filter(function(keyPair) {
        return keyPair !== undefined && keyPair.value.length > 0;
    }).reduce(function(headers, keyPair) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        headers[keyPair.key] = keyPair.value;
        return headers;
    }, {});
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "W3CBaggagePropagator": (()=>W3CBaggagePropagator)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/baggage/utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation-edge] (ecmascript)");
;
;
;
;
/**
 * Propagates {@link Baggage} through Context format propagation.
 *
 * Based on the Baggage specification:
 * https://w3c.github.io/baggage/
 */ var W3CBaggagePropagator = function() {
    function W3CBaggagePropagator() {}
    W3CBaggagePropagator.prototype.inject = function(context, carrier, setter) {
        var baggage = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["propagation"].getBaggage(context);
        if (!baggage || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context)) return;
        var keyPairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getKeyPairs"])(baggage).filter(function(pair) {
            return pair.length <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_PER_NAME_VALUE_PAIRS"];
        }).slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_NAME_VALUE_PAIRS"]);
        var headerValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["serializeKeyPairs"])(keyPairs);
        if (headerValue.length > 0) {
            setter.set(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"], headerValue);
        }
    };
    W3CBaggagePropagator.prototype.extract = function(context, carrier, getter) {
        var headerValue = getter.get(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"]);
        var baggageString = Array.isArray(headerValue) ? headerValue.join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"]) : headerValue;
        if (!baggageString) return context;
        var baggage = {};
        if (baggageString.length === 0) {
            return context;
        }
        var pairs = baggageString.split(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"]);
        pairs.forEach(function(entry) {
            var keyPair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["parsePairKeyValue"])(entry);
            if (keyPair) {
                var baggageEntry = {
                    value: keyPair.value
                };
                if (keyPair.metadata) {
                    baggageEntry.metadata = keyPair.metadata;
                }
                baggage[keyPair.key] = baggageEntry;
            }
        });
        if (Object.entries(baggage).length === 0) {
            return context;
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["propagation"].setBaggage(context, __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["propagation"].createBaggage(baggage));
    };
    W3CBaggagePropagator.prototype.fields = function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"]
        ];
    };
    return W3CBaggagePropagator;
}();
;
 //# sourceMappingURL=W3CBaggagePropagator.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * based on lodash in order to support esm builds without esModuleInterop.
 * lodash is using MIT License.
 **/ __turbopack_esm__({
    "isPlainObject": (()=>isPlainObject)
});
var objectTag = '[object Object]';
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
var objectCtorString = funcToString.call(Object);
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
var nativeObjectToString = objectProto.toString;
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    var unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    } catch (e) {
    // silence
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
} //# sourceMappingURL=lodash.merge.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/merge.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_esm__({
    "merge": (()=>merge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$lodash$2e$merge$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js [instrumentation-edge] (ecmascript)");
;
var MAX_LEVEL = 20;
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var result = args.shift();
    var objects = new WeakMap();
    while(args.length > 0){
        result = mergeTwoObjects(result, args.shift(), 0, objects);
    }
    return result;
}
function takeValue(value) {
    if (isArray(value)) {
        return value.slice();
    }
    return value;
}
/**
 * Merges two objects
 * @param one - first object
 * @param two - second object
 * @param level - current deep level
 * @param objects - objects holder that has been already referenced - to prevent
 * cyclic dependency
 */ function mergeTwoObjects(one, two, level, objects) {
    if (level === void 0) {
        level = 0;
    }
    var result;
    if (level > MAX_LEVEL) {
        return undefined;
    }
    level++;
    if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) {
        result = takeValue(two);
    } else if (isArray(one)) {
        result = one.slice();
        if (isArray(two)) {
            for(var i = 0, j = two.length; i < j; i++){
                result.push(takeValue(two[i]));
            }
        } else if (isObject(two)) {
            var keys = Object.keys(two);
            for(var i = 0, j = keys.length; i < j; i++){
                var key = keys[i];
                result[key] = takeValue(two[key]);
            }
        }
    } else if (isObject(one)) {
        if (isObject(two)) {
            if (!shouldMerge(one, two)) {
                return two;
            }
            result = Object.assign({}, one);
            var keys = Object.keys(two);
            for(var i = 0, j = keys.length; i < j; i++){
                var key = keys[i];
                var twoValue = two[key];
                if (isPrimitive(twoValue)) {
                    if (typeof twoValue === 'undefined') {
                        delete result[key];
                    } else {
                        // result[key] = takeValue(twoValue);
                        result[key] = twoValue;
                    }
                } else {
                    var obj1 = result[key];
                    var obj2 = twoValue;
                    if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) {
                        delete result[key];
                    } else {
                        if (isObject(obj1) && isObject(obj2)) {
                            var arr1 = objects.get(obj1) || [];
                            var arr2 = objects.get(obj2) || [];
                            arr1.push({
                                obj: one,
                                key: key
                            });
                            arr2.push({
                                obj: two,
                                key: key
                            });
                            objects.set(obj1, arr1);
                            objects.set(obj2, arr2);
                        }
                        result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
                    }
                }
            }
        } else {
            result = two;
        }
    }
    return result;
}
/**
 * Function to check if object has been already reference
 * @param obj
 * @param key
 * @param objects
 */ function wasObjectReferenced(obj, key, objects) {
    var arr = objects.get(obj[key]) || [];
    for(var i = 0, j = arr.length; i < j; i++){
        var info = arr[i];
        if (info.key === key && info.obj === obj) {
            return true;
        }
    }
    return false;
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function isObject(value) {
    return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === 'object';
}
function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined' || value instanceof Date || value instanceof RegExp || value === null;
}
function shouldMerge(one, two) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$lodash$2e$merge$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isPlainObject"])(one) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$lodash$2e$merge$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isPlainObject"])(two)) {
        return false;
    }
    return true;
} //# sourceMappingURL=merge.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "AWSECSLAUNCHTYPEVALUES_EC2": (()=>AWSECSLAUNCHTYPEVALUES_EC2),
    "AWSECSLAUNCHTYPEVALUES_FARGATE": (()=>AWSECSLAUNCHTYPEVALUES_FARGATE),
    "AwsEcsLaunchtypeValues": (()=>AwsEcsLaunchtypeValues),
    "CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS": (()=>CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS),
    "CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC": (()=>CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC),
    "CLOUDPLATFORMVALUES_AWS_EC2": (()=>CLOUDPLATFORMVALUES_AWS_EC2),
    "CLOUDPLATFORMVALUES_AWS_ECS": (()=>CLOUDPLATFORMVALUES_AWS_ECS),
    "CLOUDPLATFORMVALUES_AWS_EKS": (()=>CLOUDPLATFORMVALUES_AWS_EKS),
    "CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK": (()=>CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK),
    "CLOUDPLATFORMVALUES_AWS_LAMBDA": (()=>CLOUDPLATFORMVALUES_AWS_LAMBDA),
    "CLOUDPLATFORMVALUES_AZURE_AKS": (()=>CLOUDPLATFORMVALUES_AZURE_AKS),
    "CLOUDPLATFORMVALUES_AZURE_APP_SERVICE": (()=>CLOUDPLATFORMVALUES_AZURE_APP_SERVICE),
    "CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES": (()=>CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES),
    "CLOUDPLATFORMVALUES_AZURE_FUNCTIONS": (()=>CLOUDPLATFORMVALUES_AZURE_FUNCTIONS),
    "CLOUDPLATFORMVALUES_AZURE_VM": (()=>CLOUDPLATFORMVALUES_AZURE_VM),
    "CLOUDPLATFORMVALUES_GCP_APP_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_APP_ENGINE),
    "CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS": (()=>CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS),
    "CLOUDPLATFORMVALUES_GCP_CLOUD_RUN": (()=>CLOUDPLATFORMVALUES_GCP_CLOUD_RUN),
    "CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE),
    "CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE),
    "CLOUDPROVIDERVALUES_ALIBABA_CLOUD": (()=>CLOUDPROVIDERVALUES_ALIBABA_CLOUD),
    "CLOUDPROVIDERVALUES_AWS": (()=>CLOUDPROVIDERVALUES_AWS),
    "CLOUDPROVIDERVALUES_AZURE": (()=>CLOUDPROVIDERVALUES_AZURE),
    "CLOUDPROVIDERVALUES_GCP": (()=>CLOUDPROVIDERVALUES_GCP),
    "CloudPlatformValues": (()=>CloudPlatformValues),
    "CloudProviderValues": (()=>CloudProviderValues),
    "HOSTARCHVALUES_AMD64": (()=>HOSTARCHVALUES_AMD64),
    "HOSTARCHVALUES_ARM32": (()=>HOSTARCHVALUES_ARM32),
    "HOSTARCHVALUES_ARM64": (()=>HOSTARCHVALUES_ARM64),
    "HOSTARCHVALUES_IA64": (()=>HOSTARCHVALUES_IA64),
    "HOSTARCHVALUES_PPC32": (()=>HOSTARCHVALUES_PPC32),
    "HOSTARCHVALUES_PPC64": (()=>HOSTARCHVALUES_PPC64),
    "HOSTARCHVALUES_X86": (()=>HOSTARCHVALUES_X86),
    "HostArchValues": (()=>HostArchValues),
    "OSTYPEVALUES_AIX": (()=>OSTYPEVALUES_AIX),
    "OSTYPEVALUES_DARWIN": (()=>OSTYPEVALUES_DARWIN),
    "OSTYPEVALUES_DRAGONFLYBSD": (()=>OSTYPEVALUES_DRAGONFLYBSD),
    "OSTYPEVALUES_FREEBSD": (()=>OSTYPEVALUES_FREEBSD),
    "OSTYPEVALUES_HPUX": (()=>OSTYPEVALUES_HPUX),
    "OSTYPEVALUES_LINUX": (()=>OSTYPEVALUES_LINUX),
    "OSTYPEVALUES_NETBSD": (()=>OSTYPEVALUES_NETBSD),
    "OSTYPEVALUES_OPENBSD": (()=>OSTYPEVALUES_OPENBSD),
    "OSTYPEVALUES_SOLARIS": (()=>OSTYPEVALUES_SOLARIS),
    "OSTYPEVALUES_WINDOWS": (()=>OSTYPEVALUES_WINDOWS),
    "OSTYPEVALUES_Z_OS": (()=>OSTYPEVALUES_Z_OS),
    "OsTypeValues": (()=>OsTypeValues),
    "SEMRESATTRS_AWS_ECS_CLUSTER_ARN": (()=>SEMRESATTRS_AWS_ECS_CLUSTER_ARN),
    "SEMRESATTRS_AWS_ECS_CONTAINER_ARN": (()=>SEMRESATTRS_AWS_ECS_CONTAINER_ARN),
    "SEMRESATTRS_AWS_ECS_LAUNCHTYPE": (()=>SEMRESATTRS_AWS_ECS_LAUNCHTYPE),
    "SEMRESATTRS_AWS_ECS_TASK_ARN": (()=>SEMRESATTRS_AWS_ECS_TASK_ARN),
    "SEMRESATTRS_AWS_ECS_TASK_FAMILY": (()=>SEMRESATTRS_AWS_ECS_TASK_FAMILY),
    "SEMRESATTRS_AWS_ECS_TASK_REVISION": (()=>SEMRESATTRS_AWS_ECS_TASK_REVISION),
    "SEMRESATTRS_AWS_EKS_CLUSTER_ARN": (()=>SEMRESATTRS_AWS_EKS_CLUSTER_ARN),
    "SEMRESATTRS_AWS_LOG_GROUP_ARNS": (()=>SEMRESATTRS_AWS_LOG_GROUP_ARNS),
    "SEMRESATTRS_AWS_LOG_GROUP_NAMES": (()=>SEMRESATTRS_AWS_LOG_GROUP_NAMES),
    "SEMRESATTRS_AWS_LOG_STREAM_ARNS": (()=>SEMRESATTRS_AWS_LOG_STREAM_ARNS),
    "SEMRESATTRS_AWS_LOG_STREAM_NAMES": (()=>SEMRESATTRS_AWS_LOG_STREAM_NAMES),
    "SEMRESATTRS_CLOUD_ACCOUNT_ID": (()=>SEMRESATTRS_CLOUD_ACCOUNT_ID),
    "SEMRESATTRS_CLOUD_AVAILABILITY_ZONE": (()=>SEMRESATTRS_CLOUD_AVAILABILITY_ZONE),
    "SEMRESATTRS_CLOUD_PLATFORM": (()=>SEMRESATTRS_CLOUD_PLATFORM),
    "SEMRESATTRS_CLOUD_PROVIDER": (()=>SEMRESATTRS_CLOUD_PROVIDER),
    "SEMRESATTRS_CLOUD_REGION": (()=>SEMRESATTRS_CLOUD_REGION),
    "SEMRESATTRS_CONTAINER_ID": (()=>SEMRESATTRS_CONTAINER_ID),
    "SEMRESATTRS_CONTAINER_IMAGE_NAME": (()=>SEMRESATTRS_CONTAINER_IMAGE_NAME),
    "SEMRESATTRS_CONTAINER_IMAGE_TAG": (()=>SEMRESATTRS_CONTAINER_IMAGE_TAG),
    "SEMRESATTRS_CONTAINER_NAME": (()=>SEMRESATTRS_CONTAINER_NAME),
    "SEMRESATTRS_CONTAINER_RUNTIME": (()=>SEMRESATTRS_CONTAINER_RUNTIME),
    "SEMRESATTRS_DEPLOYMENT_ENVIRONMENT": (()=>SEMRESATTRS_DEPLOYMENT_ENVIRONMENT),
    "SEMRESATTRS_DEVICE_ID": (()=>SEMRESATTRS_DEVICE_ID),
    "SEMRESATTRS_DEVICE_MODEL_IDENTIFIER": (()=>SEMRESATTRS_DEVICE_MODEL_IDENTIFIER),
    "SEMRESATTRS_DEVICE_MODEL_NAME": (()=>SEMRESATTRS_DEVICE_MODEL_NAME),
    "SEMRESATTRS_FAAS_ID": (()=>SEMRESATTRS_FAAS_ID),
    "SEMRESATTRS_FAAS_INSTANCE": (()=>SEMRESATTRS_FAAS_INSTANCE),
    "SEMRESATTRS_FAAS_MAX_MEMORY": (()=>SEMRESATTRS_FAAS_MAX_MEMORY),
    "SEMRESATTRS_FAAS_NAME": (()=>SEMRESATTRS_FAAS_NAME),
    "SEMRESATTRS_FAAS_VERSION": (()=>SEMRESATTRS_FAAS_VERSION),
    "SEMRESATTRS_HOST_ARCH": (()=>SEMRESATTRS_HOST_ARCH),
    "SEMRESATTRS_HOST_ID": (()=>SEMRESATTRS_HOST_ID),
    "SEMRESATTRS_HOST_IMAGE_ID": (()=>SEMRESATTRS_HOST_IMAGE_ID),
    "SEMRESATTRS_HOST_IMAGE_NAME": (()=>SEMRESATTRS_HOST_IMAGE_NAME),
    "SEMRESATTRS_HOST_IMAGE_VERSION": (()=>SEMRESATTRS_HOST_IMAGE_VERSION),
    "SEMRESATTRS_HOST_NAME": (()=>SEMRESATTRS_HOST_NAME),
    "SEMRESATTRS_HOST_TYPE": (()=>SEMRESATTRS_HOST_TYPE),
    "SEMRESATTRS_K8S_CLUSTER_NAME": (()=>SEMRESATTRS_K8S_CLUSTER_NAME),
    "SEMRESATTRS_K8S_CONTAINER_NAME": (()=>SEMRESATTRS_K8S_CONTAINER_NAME),
    "SEMRESATTRS_K8S_CRONJOB_NAME": (()=>SEMRESATTRS_K8S_CRONJOB_NAME),
    "SEMRESATTRS_K8S_CRONJOB_UID": (()=>SEMRESATTRS_K8S_CRONJOB_UID),
    "SEMRESATTRS_K8S_DAEMONSET_NAME": (()=>SEMRESATTRS_K8S_DAEMONSET_NAME),
    "SEMRESATTRS_K8S_DAEMONSET_UID": (()=>SEMRESATTRS_K8S_DAEMONSET_UID),
    "SEMRESATTRS_K8S_DEPLOYMENT_NAME": (()=>SEMRESATTRS_K8S_DEPLOYMENT_NAME),
    "SEMRESATTRS_K8S_DEPLOYMENT_UID": (()=>SEMRESATTRS_K8S_DEPLOYMENT_UID),
    "SEMRESATTRS_K8S_JOB_NAME": (()=>SEMRESATTRS_K8S_JOB_NAME),
    "SEMRESATTRS_K8S_JOB_UID": (()=>SEMRESATTRS_K8S_JOB_UID),
    "SEMRESATTRS_K8S_NAMESPACE_NAME": (()=>SEMRESATTRS_K8S_NAMESPACE_NAME),
    "SEMRESATTRS_K8S_NODE_NAME": (()=>SEMRESATTRS_K8S_NODE_NAME),
    "SEMRESATTRS_K8S_NODE_UID": (()=>SEMRESATTRS_K8S_NODE_UID),
    "SEMRESATTRS_K8S_POD_NAME": (()=>SEMRESATTRS_K8S_POD_NAME),
    "SEMRESATTRS_K8S_POD_UID": (()=>SEMRESATTRS_K8S_POD_UID),
    "SEMRESATTRS_K8S_REPLICASET_NAME": (()=>SEMRESATTRS_K8S_REPLICASET_NAME),
    "SEMRESATTRS_K8S_REPLICASET_UID": (()=>SEMRESATTRS_K8S_REPLICASET_UID),
    "SEMRESATTRS_K8S_STATEFULSET_NAME": (()=>SEMRESATTRS_K8S_STATEFULSET_NAME),
    "SEMRESATTRS_K8S_STATEFULSET_UID": (()=>SEMRESATTRS_K8S_STATEFULSET_UID),
    "SEMRESATTRS_OS_DESCRIPTION": (()=>SEMRESATTRS_OS_DESCRIPTION),
    "SEMRESATTRS_OS_NAME": (()=>SEMRESATTRS_OS_NAME),
    "SEMRESATTRS_OS_TYPE": (()=>SEMRESATTRS_OS_TYPE),
    "SEMRESATTRS_OS_VERSION": (()=>SEMRESATTRS_OS_VERSION),
    "SEMRESATTRS_PROCESS_COMMAND": (()=>SEMRESATTRS_PROCESS_COMMAND),
    "SEMRESATTRS_PROCESS_COMMAND_ARGS": (()=>SEMRESATTRS_PROCESS_COMMAND_ARGS),
    "SEMRESATTRS_PROCESS_COMMAND_LINE": (()=>SEMRESATTRS_PROCESS_COMMAND_LINE),
    "SEMRESATTRS_PROCESS_EXECUTABLE_NAME": (()=>SEMRESATTRS_PROCESS_EXECUTABLE_NAME),
    "SEMRESATTRS_PROCESS_EXECUTABLE_PATH": (()=>SEMRESATTRS_PROCESS_EXECUTABLE_PATH),
    "SEMRESATTRS_PROCESS_OWNER": (()=>SEMRESATTRS_PROCESS_OWNER),
    "SEMRESATTRS_PROCESS_PID": (()=>SEMRESATTRS_PROCESS_PID),
    "SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION": (()=>SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION),
    "SEMRESATTRS_PROCESS_RUNTIME_NAME": (()=>SEMRESATTRS_PROCESS_RUNTIME_NAME),
    "SEMRESATTRS_PROCESS_RUNTIME_VERSION": (()=>SEMRESATTRS_PROCESS_RUNTIME_VERSION),
    "SEMRESATTRS_SERVICE_INSTANCE_ID": (()=>SEMRESATTRS_SERVICE_INSTANCE_ID),
    "SEMRESATTRS_SERVICE_NAME": (()=>SEMRESATTRS_SERVICE_NAME),
    "SEMRESATTRS_SERVICE_NAMESPACE": (()=>SEMRESATTRS_SERVICE_NAMESPACE),
    "SEMRESATTRS_SERVICE_VERSION": (()=>SEMRESATTRS_SERVICE_VERSION),
    "SEMRESATTRS_TELEMETRY_AUTO_VERSION": (()=>SEMRESATTRS_TELEMETRY_AUTO_VERSION),
    "SEMRESATTRS_TELEMETRY_SDK_LANGUAGE": (()=>SEMRESATTRS_TELEMETRY_SDK_LANGUAGE),
    "SEMRESATTRS_TELEMETRY_SDK_NAME": (()=>SEMRESATTRS_TELEMETRY_SDK_NAME),
    "SEMRESATTRS_TELEMETRY_SDK_VERSION": (()=>SEMRESATTRS_TELEMETRY_SDK_VERSION),
    "SEMRESATTRS_WEBENGINE_DESCRIPTION": (()=>SEMRESATTRS_WEBENGINE_DESCRIPTION),
    "SEMRESATTRS_WEBENGINE_NAME": (()=>SEMRESATTRS_WEBENGINE_NAME),
    "SEMRESATTRS_WEBENGINE_VERSION": (()=>SEMRESATTRS_WEBENGINE_VERSION),
    "SemanticResourceAttributes": (()=>SemanticResourceAttributes),
    "TELEMETRYSDKLANGUAGEVALUES_CPP": (()=>TELEMETRYSDKLANGUAGEVALUES_CPP),
    "TELEMETRYSDKLANGUAGEVALUES_DOTNET": (()=>TELEMETRYSDKLANGUAGEVALUES_DOTNET),
    "TELEMETRYSDKLANGUAGEVALUES_ERLANG": (()=>TELEMETRYSDKLANGUAGEVALUES_ERLANG),
    "TELEMETRYSDKLANGUAGEVALUES_GO": (()=>TELEMETRYSDKLANGUAGEVALUES_GO),
    "TELEMETRYSDKLANGUAGEVALUES_JAVA": (()=>TELEMETRYSDKLANGUAGEVALUES_JAVA),
    "TELEMETRYSDKLANGUAGEVALUES_NODEJS": (()=>TELEMETRYSDKLANGUAGEVALUES_NODEJS),
    "TELEMETRYSDKLANGUAGEVALUES_PHP": (()=>TELEMETRYSDKLANGUAGEVALUES_PHP),
    "TELEMETRYSDKLANGUAGEVALUES_PYTHON": (()=>TELEMETRYSDKLANGUAGEVALUES_PYTHON),
    "TELEMETRYSDKLANGUAGEVALUES_RUBY": (()=>TELEMETRYSDKLANGUAGEVALUES_RUBY),
    "TELEMETRYSDKLANGUAGEVALUES_WEBJS": (()=>TELEMETRYSDKLANGUAGEVALUES_WEBJS),
    "TelemetrySdkLanguageValues": (()=>TelemetrySdkLanguageValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [instrumentation-edge] (ecmascript)");
;
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticResourceAttributes
//----------------------------------------------------------------------------------------------------------
// Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUD_PROVIDER = 'cloud.provider';
var TMP_CLOUD_ACCOUNT_ID = 'cloud.account.id';
var TMP_CLOUD_REGION = 'cloud.region';
var TMP_CLOUD_AVAILABILITY_ZONE = 'cloud.availability_zone';
var TMP_CLOUD_PLATFORM = 'cloud.platform';
var TMP_AWS_ECS_CONTAINER_ARN = 'aws.ecs.container.arn';
var TMP_AWS_ECS_CLUSTER_ARN = 'aws.ecs.cluster.arn';
var TMP_AWS_ECS_LAUNCHTYPE = 'aws.ecs.launchtype';
var TMP_AWS_ECS_TASK_ARN = 'aws.ecs.task.arn';
var TMP_AWS_ECS_TASK_FAMILY = 'aws.ecs.task.family';
var TMP_AWS_ECS_TASK_REVISION = 'aws.ecs.task.revision';
var TMP_AWS_EKS_CLUSTER_ARN = 'aws.eks.cluster.arn';
var TMP_AWS_LOG_GROUP_NAMES = 'aws.log.group.names';
var TMP_AWS_LOG_GROUP_ARNS = 'aws.log.group.arns';
var TMP_AWS_LOG_STREAM_NAMES = 'aws.log.stream.names';
var TMP_AWS_LOG_STREAM_ARNS = 'aws.log.stream.arns';
var TMP_CONTAINER_NAME = 'container.name';
var TMP_CONTAINER_ID = 'container.id';
var TMP_CONTAINER_RUNTIME = 'container.runtime';
var TMP_CONTAINER_IMAGE_NAME = 'container.image.name';
var TMP_CONTAINER_IMAGE_TAG = 'container.image.tag';
var TMP_DEPLOYMENT_ENVIRONMENT = 'deployment.environment';
var TMP_DEVICE_ID = 'device.id';
var TMP_DEVICE_MODEL_IDENTIFIER = 'device.model.identifier';
var TMP_DEVICE_MODEL_NAME = 'device.model.name';
var TMP_FAAS_NAME = 'faas.name';
var TMP_FAAS_ID = 'faas.id';
var TMP_FAAS_VERSION = 'faas.version';
var TMP_FAAS_INSTANCE = 'faas.instance';
var TMP_FAAS_MAX_MEMORY = 'faas.max_memory';
var TMP_HOST_ID = 'host.id';
var TMP_HOST_NAME = 'host.name';
var TMP_HOST_TYPE = 'host.type';
var TMP_HOST_ARCH = 'host.arch';
var TMP_HOST_IMAGE_NAME = 'host.image.name';
var TMP_HOST_IMAGE_ID = 'host.image.id';
var TMP_HOST_IMAGE_VERSION = 'host.image.version';
var TMP_K8S_CLUSTER_NAME = 'k8s.cluster.name';
var TMP_K8S_NODE_NAME = 'k8s.node.name';
var TMP_K8S_NODE_UID = 'k8s.node.uid';
var TMP_K8S_NAMESPACE_NAME = 'k8s.namespace.name';
var TMP_K8S_POD_UID = 'k8s.pod.uid';
var TMP_K8S_POD_NAME = 'k8s.pod.name';
var TMP_K8S_CONTAINER_NAME = 'k8s.container.name';
var TMP_K8S_REPLICASET_UID = 'k8s.replicaset.uid';
var TMP_K8S_REPLICASET_NAME = 'k8s.replicaset.name';
var TMP_K8S_DEPLOYMENT_UID = 'k8s.deployment.uid';
var TMP_K8S_DEPLOYMENT_NAME = 'k8s.deployment.name';
var TMP_K8S_STATEFULSET_UID = 'k8s.statefulset.uid';
var TMP_K8S_STATEFULSET_NAME = 'k8s.statefulset.name';
var TMP_K8S_DAEMONSET_UID = 'k8s.daemonset.uid';
var TMP_K8S_DAEMONSET_NAME = 'k8s.daemonset.name';
var TMP_K8S_JOB_UID = 'k8s.job.uid';
var TMP_K8S_JOB_NAME = 'k8s.job.name';
var TMP_K8S_CRONJOB_UID = 'k8s.cronjob.uid';
var TMP_K8S_CRONJOB_NAME = 'k8s.cronjob.name';
var TMP_OS_TYPE = 'os.type';
var TMP_OS_DESCRIPTION = 'os.description';
var TMP_OS_NAME = 'os.name';
var TMP_OS_VERSION = 'os.version';
var TMP_PROCESS_PID = 'process.pid';
var TMP_PROCESS_EXECUTABLE_NAME = 'process.executable.name';
var TMP_PROCESS_EXECUTABLE_PATH = 'process.executable.path';
var TMP_PROCESS_COMMAND = 'process.command';
var TMP_PROCESS_COMMAND_LINE = 'process.command_line';
var TMP_PROCESS_COMMAND_ARGS = 'process.command_args';
var TMP_PROCESS_OWNER = 'process.owner';
var TMP_PROCESS_RUNTIME_NAME = 'process.runtime.name';
var TMP_PROCESS_RUNTIME_VERSION = 'process.runtime.version';
var TMP_PROCESS_RUNTIME_DESCRIPTION = 'process.runtime.description';
var TMP_SERVICE_NAME = 'service.name';
var TMP_SERVICE_NAMESPACE = 'service.namespace';
var TMP_SERVICE_INSTANCE_ID = 'service.instance.id';
var TMP_SERVICE_VERSION = 'service.version';
var TMP_TELEMETRY_SDK_NAME = 'telemetry.sdk.name';
var TMP_TELEMETRY_SDK_LANGUAGE = 'telemetry.sdk.language';
var TMP_TELEMETRY_SDK_VERSION = 'telemetry.sdk.version';
var TMP_TELEMETRY_AUTO_VERSION = 'telemetry.auto.version';
var TMP_WEBENGINE_NAME = 'webengine.name';
var TMP_WEBENGINE_VERSION = 'webengine.version';
var TMP_WEBENGINE_DESCRIPTION = 'webengine.description';
var SEMRESATTRS_CLOUD_PROVIDER = TMP_CLOUD_PROVIDER;
var SEMRESATTRS_CLOUD_ACCOUNT_ID = TMP_CLOUD_ACCOUNT_ID;
var SEMRESATTRS_CLOUD_REGION = TMP_CLOUD_REGION;
var SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TMP_CLOUD_AVAILABILITY_ZONE;
var SEMRESATTRS_CLOUD_PLATFORM = TMP_CLOUD_PLATFORM;
var SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TMP_AWS_ECS_CONTAINER_ARN;
var SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TMP_AWS_ECS_CLUSTER_ARN;
var SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TMP_AWS_ECS_LAUNCHTYPE;
var SEMRESATTRS_AWS_ECS_TASK_ARN = TMP_AWS_ECS_TASK_ARN;
var SEMRESATTRS_AWS_ECS_TASK_FAMILY = TMP_AWS_ECS_TASK_FAMILY;
var SEMRESATTRS_AWS_ECS_TASK_REVISION = TMP_AWS_ECS_TASK_REVISION;
var SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TMP_AWS_EKS_CLUSTER_ARN;
var SEMRESATTRS_AWS_LOG_GROUP_NAMES = TMP_AWS_LOG_GROUP_NAMES;
var SEMRESATTRS_AWS_LOG_GROUP_ARNS = TMP_AWS_LOG_GROUP_ARNS;
var SEMRESATTRS_AWS_LOG_STREAM_NAMES = TMP_AWS_LOG_STREAM_NAMES;
var SEMRESATTRS_AWS_LOG_STREAM_ARNS = TMP_AWS_LOG_STREAM_ARNS;
var SEMRESATTRS_CONTAINER_NAME = TMP_CONTAINER_NAME;
var SEMRESATTRS_CONTAINER_ID = TMP_CONTAINER_ID;
var SEMRESATTRS_CONTAINER_RUNTIME = TMP_CONTAINER_RUNTIME;
var SEMRESATTRS_CONTAINER_IMAGE_NAME = TMP_CONTAINER_IMAGE_NAME;
var SEMRESATTRS_CONTAINER_IMAGE_TAG = TMP_CONTAINER_IMAGE_TAG;
var SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TMP_DEPLOYMENT_ENVIRONMENT;
var SEMRESATTRS_DEVICE_ID = TMP_DEVICE_ID;
var SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TMP_DEVICE_MODEL_IDENTIFIER;
var SEMRESATTRS_DEVICE_MODEL_NAME = TMP_DEVICE_MODEL_NAME;
var SEMRESATTRS_FAAS_NAME = TMP_FAAS_NAME;
var SEMRESATTRS_FAAS_ID = TMP_FAAS_ID;
var SEMRESATTRS_FAAS_VERSION = TMP_FAAS_VERSION;
var SEMRESATTRS_FAAS_INSTANCE = TMP_FAAS_INSTANCE;
var SEMRESATTRS_FAAS_MAX_MEMORY = TMP_FAAS_MAX_MEMORY;
var SEMRESATTRS_HOST_ID = TMP_HOST_ID;
var SEMRESATTRS_HOST_NAME = TMP_HOST_NAME;
var SEMRESATTRS_HOST_TYPE = TMP_HOST_TYPE;
var SEMRESATTRS_HOST_ARCH = TMP_HOST_ARCH;
var SEMRESATTRS_HOST_IMAGE_NAME = TMP_HOST_IMAGE_NAME;
var SEMRESATTRS_HOST_IMAGE_ID = TMP_HOST_IMAGE_ID;
var SEMRESATTRS_HOST_IMAGE_VERSION = TMP_HOST_IMAGE_VERSION;
var SEMRESATTRS_K8S_CLUSTER_NAME = TMP_K8S_CLUSTER_NAME;
var SEMRESATTRS_K8S_NODE_NAME = TMP_K8S_NODE_NAME;
var SEMRESATTRS_K8S_NODE_UID = TMP_K8S_NODE_UID;
var SEMRESATTRS_K8S_NAMESPACE_NAME = TMP_K8S_NAMESPACE_NAME;
var SEMRESATTRS_K8S_POD_UID = TMP_K8S_POD_UID;
var SEMRESATTRS_K8S_POD_NAME = TMP_K8S_POD_NAME;
var SEMRESATTRS_K8S_CONTAINER_NAME = TMP_K8S_CONTAINER_NAME;
var SEMRESATTRS_K8S_REPLICASET_UID = TMP_K8S_REPLICASET_UID;
var SEMRESATTRS_K8S_REPLICASET_NAME = TMP_K8S_REPLICASET_NAME;
var SEMRESATTRS_K8S_DEPLOYMENT_UID = TMP_K8S_DEPLOYMENT_UID;
var SEMRESATTRS_K8S_DEPLOYMENT_NAME = TMP_K8S_DEPLOYMENT_NAME;
var SEMRESATTRS_K8S_STATEFULSET_UID = TMP_K8S_STATEFULSET_UID;
var SEMRESATTRS_K8S_STATEFULSET_NAME = TMP_K8S_STATEFULSET_NAME;
var SEMRESATTRS_K8S_DAEMONSET_UID = TMP_K8S_DAEMONSET_UID;
var SEMRESATTRS_K8S_DAEMONSET_NAME = TMP_K8S_DAEMONSET_NAME;
var SEMRESATTRS_K8S_JOB_UID = TMP_K8S_JOB_UID;
var SEMRESATTRS_K8S_JOB_NAME = TMP_K8S_JOB_NAME;
var SEMRESATTRS_K8S_CRONJOB_UID = TMP_K8S_CRONJOB_UID;
var SEMRESATTRS_K8S_CRONJOB_NAME = TMP_K8S_CRONJOB_NAME;
var SEMRESATTRS_OS_TYPE = TMP_OS_TYPE;
var SEMRESATTRS_OS_DESCRIPTION = TMP_OS_DESCRIPTION;
var SEMRESATTRS_OS_NAME = TMP_OS_NAME;
var SEMRESATTRS_OS_VERSION = TMP_OS_VERSION;
var SEMRESATTRS_PROCESS_PID = TMP_PROCESS_PID;
var SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TMP_PROCESS_EXECUTABLE_NAME;
var SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TMP_PROCESS_EXECUTABLE_PATH;
var SEMRESATTRS_PROCESS_COMMAND = TMP_PROCESS_COMMAND;
var SEMRESATTRS_PROCESS_COMMAND_LINE = TMP_PROCESS_COMMAND_LINE;
var SEMRESATTRS_PROCESS_COMMAND_ARGS = TMP_PROCESS_COMMAND_ARGS;
var SEMRESATTRS_PROCESS_OWNER = TMP_PROCESS_OWNER;
var SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
var SEMRESATTRS_PROCESS_RUNTIME_VERSION = TMP_PROCESS_RUNTIME_VERSION;
var SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TMP_PROCESS_RUNTIME_DESCRIPTION;
var SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
var SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
var SEMRESATTRS_SERVICE_INSTANCE_ID = TMP_SERVICE_INSTANCE_ID;
var SEMRESATTRS_SERVICE_VERSION = TMP_SERVICE_VERSION;
var SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
var SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
var SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
var SEMRESATTRS_TELEMETRY_AUTO_VERSION = TMP_TELEMETRY_AUTO_VERSION;
var SEMRESATTRS_WEBENGINE_NAME = TMP_WEBENGINE_NAME;
var SEMRESATTRS_WEBENGINE_VERSION = TMP_WEBENGINE_VERSION;
var SEMRESATTRS_WEBENGINE_DESCRIPTION = TMP_WEBENGINE_DESCRIPTION;
var SemanticResourceAttributes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUD_PROVIDER,
    TMP_CLOUD_ACCOUNT_ID,
    TMP_CLOUD_REGION,
    TMP_CLOUD_AVAILABILITY_ZONE,
    TMP_CLOUD_PLATFORM,
    TMP_AWS_ECS_CONTAINER_ARN,
    TMP_AWS_ECS_CLUSTER_ARN,
    TMP_AWS_ECS_LAUNCHTYPE,
    TMP_AWS_ECS_TASK_ARN,
    TMP_AWS_ECS_TASK_FAMILY,
    TMP_AWS_ECS_TASK_REVISION,
    TMP_AWS_EKS_CLUSTER_ARN,
    TMP_AWS_LOG_GROUP_NAMES,
    TMP_AWS_LOG_GROUP_ARNS,
    TMP_AWS_LOG_STREAM_NAMES,
    TMP_AWS_LOG_STREAM_ARNS,
    TMP_CONTAINER_NAME,
    TMP_CONTAINER_ID,
    TMP_CONTAINER_RUNTIME,
    TMP_CONTAINER_IMAGE_NAME,
    TMP_CONTAINER_IMAGE_TAG,
    TMP_DEPLOYMENT_ENVIRONMENT,
    TMP_DEVICE_ID,
    TMP_DEVICE_MODEL_IDENTIFIER,
    TMP_DEVICE_MODEL_NAME,
    TMP_FAAS_NAME,
    TMP_FAAS_ID,
    TMP_FAAS_VERSION,
    TMP_FAAS_INSTANCE,
    TMP_FAAS_MAX_MEMORY,
    TMP_HOST_ID,
    TMP_HOST_NAME,
    TMP_HOST_TYPE,
    TMP_HOST_ARCH,
    TMP_HOST_IMAGE_NAME,
    TMP_HOST_IMAGE_ID,
    TMP_HOST_IMAGE_VERSION,
    TMP_K8S_CLUSTER_NAME,
    TMP_K8S_NODE_NAME,
    TMP_K8S_NODE_UID,
    TMP_K8S_NAMESPACE_NAME,
    TMP_K8S_POD_UID,
    TMP_K8S_POD_NAME,
    TMP_K8S_CONTAINER_NAME,
    TMP_K8S_REPLICASET_UID,
    TMP_K8S_REPLICASET_NAME,
    TMP_K8S_DEPLOYMENT_UID,
    TMP_K8S_DEPLOYMENT_NAME,
    TMP_K8S_STATEFULSET_UID,
    TMP_K8S_STATEFULSET_NAME,
    TMP_K8S_DAEMONSET_UID,
    TMP_K8S_DAEMONSET_NAME,
    TMP_K8S_JOB_UID,
    TMP_K8S_JOB_NAME,
    TMP_K8S_CRONJOB_UID,
    TMP_K8S_CRONJOB_NAME,
    TMP_OS_TYPE,
    TMP_OS_DESCRIPTION,
    TMP_OS_NAME,
    TMP_OS_VERSION,
    TMP_PROCESS_PID,
    TMP_PROCESS_EXECUTABLE_NAME,
    TMP_PROCESS_EXECUTABLE_PATH,
    TMP_PROCESS_COMMAND,
    TMP_PROCESS_COMMAND_LINE,
    TMP_PROCESS_COMMAND_ARGS,
    TMP_PROCESS_OWNER,
    TMP_PROCESS_RUNTIME_NAME,
    TMP_PROCESS_RUNTIME_VERSION,
    TMP_PROCESS_RUNTIME_DESCRIPTION,
    TMP_SERVICE_NAME,
    TMP_SERVICE_NAMESPACE,
    TMP_SERVICE_INSTANCE_ID,
    TMP_SERVICE_VERSION,
    TMP_TELEMETRY_SDK_NAME,
    TMP_TELEMETRY_SDK_LANGUAGE,
    TMP_TELEMETRY_SDK_VERSION,
    TMP_TELEMETRY_AUTO_VERSION,
    TMP_WEBENGINE_NAME,
    TMP_WEBENGINE_VERSION,
    TMP_WEBENGINE_DESCRIPTION
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudProviderValues enum definition
 *
 * Name of the cloud provider.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = 'alibaba_cloud';
var TMP_CLOUDPROVIDERVALUES_AWS = 'aws';
var TMP_CLOUDPROVIDERVALUES_AZURE = 'azure';
var TMP_CLOUDPROVIDERVALUES_GCP = 'gcp';
var CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD;
var CLOUDPROVIDERVALUES_AWS = TMP_CLOUDPROVIDERVALUES_AWS;
var CLOUDPROVIDERVALUES_AZURE = TMP_CLOUDPROVIDERVALUES_AZURE;
var CLOUDPROVIDERVALUES_GCP = TMP_CLOUDPROVIDERVALUES_GCP;
var CloudProviderValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_CLOUDPROVIDERVALUES_AWS,
    TMP_CLOUDPROVIDERVALUES_AZURE,
    TMP_CLOUDPROVIDERVALUES_GCP
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudPlatformValues enum definition
 *
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = 'alibaba_cloud_ecs';
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = 'alibaba_cloud_fc';
var TMP_CLOUDPLATFORMVALUES_AWS_EC2 = 'aws_ec2';
var TMP_CLOUDPLATFORMVALUES_AWS_ECS = 'aws_ecs';
var TMP_CLOUDPLATFORMVALUES_AWS_EKS = 'aws_eks';
var TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = 'aws_lambda';
var TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = 'aws_elastic_beanstalk';
var TMP_CLOUDPLATFORMVALUES_AZURE_VM = 'azure_vm';
var TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = 'azure_container_instances';
var TMP_CLOUDPLATFORMVALUES_AZURE_AKS = 'azure_aks';
var TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = 'azure_functions';
var TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = 'azure_app_service';
var TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = 'gcp_compute_engine';
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = 'gcp_cloud_run';
var TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = 'gcp_kubernetes_engine';
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = 'gcp_cloud_functions';
var TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = 'gcp_app_engine';
var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS;
var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC;
var CLOUDPLATFORMVALUES_AWS_EC2 = TMP_CLOUDPLATFORMVALUES_AWS_EC2;
var CLOUDPLATFORMVALUES_AWS_ECS = TMP_CLOUDPLATFORMVALUES_AWS_ECS;
var CLOUDPLATFORMVALUES_AWS_EKS = TMP_CLOUDPLATFORMVALUES_AWS_EKS;
var CLOUDPLATFORMVALUES_AWS_LAMBDA = TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA;
var CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK;
var CLOUDPLATFORMVALUES_AZURE_VM = TMP_CLOUDPLATFORMVALUES_AZURE_VM;
var CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES;
var CLOUDPLATFORMVALUES_AZURE_AKS = TMP_CLOUDPLATFORMVALUES_AZURE_AKS;
var CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS;
var CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE;
var CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE;
var CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN;
var CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE;
var CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS;
var CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE;
var CloudPlatformValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
    TMP_CLOUDPLATFORMVALUES_AWS_EC2,
    TMP_CLOUDPLATFORMVALUES_AWS_ECS,
    TMP_CLOUDPLATFORMVALUES_AWS_EKS,
    TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
    TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
    TMP_CLOUDPLATFORMVALUES_AZURE_VM,
    TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
    TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
    TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
    TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
    TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for AwsEcsLaunchtypeValues enum definition
 *
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_AWSECSLAUNCHTYPEVALUES_EC2 = 'ec2';
var TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = 'fargate';
var AWSECSLAUNCHTYPEVALUES_EC2 = TMP_AWSECSLAUNCHTYPEVALUES_EC2;
var AWSECSLAUNCHTYPEVALUES_FARGATE = TMP_AWSECSLAUNCHTYPEVALUES_FARGATE;
var AwsEcsLaunchtypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_AWSECSLAUNCHTYPEVALUES_EC2,
    TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HostArchValues enum definition
 *
 * The CPU architecture the host system is running on.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_HOSTARCHVALUES_AMD64 = 'amd64';
var TMP_HOSTARCHVALUES_ARM32 = 'arm32';
var TMP_HOSTARCHVALUES_ARM64 = 'arm64';
var TMP_HOSTARCHVALUES_IA64 = 'ia64';
var TMP_HOSTARCHVALUES_PPC32 = 'ppc32';
var TMP_HOSTARCHVALUES_PPC64 = 'ppc64';
var TMP_HOSTARCHVALUES_X86 = 'x86';
var HOSTARCHVALUES_AMD64 = TMP_HOSTARCHVALUES_AMD64;
var HOSTARCHVALUES_ARM32 = TMP_HOSTARCHVALUES_ARM32;
var HOSTARCHVALUES_ARM64 = TMP_HOSTARCHVALUES_ARM64;
var HOSTARCHVALUES_IA64 = TMP_HOSTARCHVALUES_IA64;
var HOSTARCHVALUES_PPC32 = TMP_HOSTARCHVALUES_PPC32;
var HOSTARCHVALUES_PPC64 = TMP_HOSTARCHVALUES_PPC64;
var HOSTARCHVALUES_X86 = TMP_HOSTARCHVALUES_X86;
var HostArchValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_HOSTARCHVALUES_AMD64,
    TMP_HOSTARCHVALUES_ARM32,
    TMP_HOSTARCHVALUES_ARM64,
    TMP_HOSTARCHVALUES_IA64,
    TMP_HOSTARCHVALUES_PPC32,
    TMP_HOSTARCHVALUES_PPC64,
    TMP_HOSTARCHVALUES_X86
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for OsTypeValues enum definition
 *
 * The operating system type.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_OSTYPEVALUES_WINDOWS = 'windows';
var TMP_OSTYPEVALUES_LINUX = 'linux';
var TMP_OSTYPEVALUES_DARWIN = 'darwin';
var TMP_OSTYPEVALUES_FREEBSD = 'freebsd';
var TMP_OSTYPEVALUES_NETBSD = 'netbsd';
var TMP_OSTYPEVALUES_OPENBSD = 'openbsd';
var TMP_OSTYPEVALUES_DRAGONFLYBSD = 'dragonflybsd';
var TMP_OSTYPEVALUES_HPUX = 'hpux';
var TMP_OSTYPEVALUES_AIX = 'aix';
var TMP_OSTYPEVALUES_SOLARIS = 'solaris';
var TMP_OSTYPEVALUES_Z_OS = 'z_os';
var OSTYPEVALUES_WINDOWS = TMP_OSTYPEVALUES_WINDOWS;
var OSTYPEVALUES_LINUX = TMP_OSTYPEVALUES_LINUX;
var OSTYPEVALUES_DARWIN = TMP_OSTYPEVALUES_DARWIN;
var OSTYPEVALUES_FREEBSD = TMP_OSTYPEVALUES_FREEBSD;
var OSTYPEVALUES_NETBSD = TMP_OSTYPEVALUES_NETBSD;
var OSTYPEVALUES_OPENBSD = TMP_OSTYPEVALUES_OPENBSD;
var OSTYPEVALUES_DRAGONFLYBSD = TMP_OSTYPEVALUES_DRAGONFLYBSD;
var OSTYPEVALUES_HPUX = TMP_OSTYPEVALUES_HPUX;
var OSTYPEVALUES_AIX = TMP_OSTYPEVALUES_AIX;
var OSTYPEVALUES_SOLARIS = TMP_OSTYPEVALUES_SOLARIS;
var OSTYPEVALUES_Z_OS = TMP_OSTYPEVALUES_Z_OS;
var OsTypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_OSTYPEVALUES_WINDOWS,
    TMP_OSTYPEVALUES_LINUX,
    TMP_OSTYPEVALUES_DARWIN,
    TMP_OSTYPEVALUES_FREEBSD,
    TMP_OSTYPEVALUES_NETBSD,
    TMP_OSTYPEVALUES_OPENBSD,
    TMP_OSTYPEVALUES_DRAGONFLYBSD,
    TMP_OSTYPEVALUES_HPUX,
    TMP_OSTYPEVALUES_AIX,
    TMP_OSTYPEVALUES_SOLARIS,
    TMP_OSTYPEVALUES_Z_OS
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for TelemetrySdkLanguageValues enum definition
 *
 * The language of the telemetry SDK.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = 'cpp';
var TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = 'dotnet';
var TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = 'erlang';
var TMP_TELEMETRYSDKLANGUAGEVALUES_GO = 'go';
var TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = 'java';
var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = 'nodejs';
var TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = 'php';
var TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = 'python';
var TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = 'ruby';
var TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = 'webjs';
var TELEMETRYSDKLANGUAGEVALUES_CPP = TMP_TELEMETRYSDKLANGUAGEVALUES_CPP;
var TELEMETRYSDKLANGUAGEVALUES_DOTNET = TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET;
var TELEMETRYSDKLANGUAGEVALUES_ERLANG = TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG;
var TELEMETRYSDKLANGUAGEVALUES_GO = TMP_TELEMETRYSDKLANGUAGEVALUES_GO;
var TELEMETRYSDKLANGUAGEVALUES_JAVA = TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA;
var TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
var TELEMETRYSDKLANGUAGEVALUES_PHP = TMP_TELEMETRYSDKLANGUAGEVALUES_PHP;
var TELEMETRYSDKLANGUAGEVALUES_PYTHON = TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON;
var TELEMETRYSDKLANGUAGEVALUES_RUBY = TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY;
var TELEMETRYSDKLANGUAGEVALUES_WEBJS = TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS;
var TelemetrySdkLanguageValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
    TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
    TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
    TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
    TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
    TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
    TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
]); //# sourceMappingURL=SemanticResourceAttributes.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "defaultServiceName": (()=>defaultServiceName)
});
function defaultServiceName() {
    return "unknown_service:" + process.argv0;
} //# sourceMappingURL=default-service-name.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/version.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
__turbopack_esm__({
    "VERSION": (()=>VERSION)
});
var VERSION = '1.30.1'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "SDK_INFO": (()=>SDK_INFO)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/version.js [instrumentation-edge] (ecmascript)");
var _a;
;
;
var SDK_INFO = (_a = {}, _a[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_NAME"]] = 'opentelemetry', _a[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_RUNTIME_NAME"]] = 'node', _a[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_LANGUAGE"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TELEMETRYSDKLANGUAGEVALUES_NODEJS"], _a[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_VERSION"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"], _a); //# sourceMappingURL=sdk-info.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/resources/build/esm/Resource.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "Resource": (()=>Resource)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$platform$2f$node$2f$default$2d$service$2d$name$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js [instrumentation-edge] (ecmascript)");
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    "TURBOPACK unreachable";
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
;
;
;
;
/**
 * A Resource describes the entity for which a signals (metrics or trace) are
 * collected.
 */ var Resource = function() {
    function Resource(/**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */ attributes, asyncAttributesPromise) {
        var _this = this;
        var _a;
        this._attributes = attributes;
        this.asyncAttributesPending = asyncAttributesPromise != null;
        this._syncAttributes = (_a = this._attributes) !== null && _a !== void 0 ? _a : {};
        this._asyncAttributesPromise = asyncAttributesPromise === null || asyncAttributesPromise === void 0 ? void 0 : asyncAttributesPromise.then(function(asyncAttributes) {
            _this._attributes = Object.assign({}, _this._attributes, asyncAttributes);
            _this.asyncAttributesPending = false;
            return asyncAttributes;
        }, function(err) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("a resource's async attributes promise rejected: %s", err);
            _this.asyncAttributesPending = false;
            return {};
        });
    }
    /**
     * Returns an empty Resource
     */ Resource.empty = function() {
        return Resource.EMPTY;
    };
    /**
     * Returns a Resource that identifies the SDK in use.
     */ Resource.default = function() {
        var _a;
        return new Resource((_a = {}, _a[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_SERVICE_NAME"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$platform$2f$node$2f$default$2d$service$2d$name$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["defaultServiceName"])(), _a[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_LANGUAGE"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_LANGUAGE"]], _a[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_NAME"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_NAME"]], _a[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_VERSION"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_VERSION"]], _a));
    };
    Object.defineProperty(Resource.prototype, "attributes", {
        get: function() {
            var _a;
            if (this.asyncAttributesPending) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('Accessing resource attributes before async attributes settled');
            }
            return (_a = this._attributes) !== null && _a !== void 0 ? _a : {};
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a promise that will never be rejected. Resolves when all async attributes have finished being added to
     * this Resource's attributes. This is useful in exporters to block until resource detection
     * has finished.
     */ Resource.prototype.waitForAsyncAttributes = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.asyncAttributesPending) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this._asyncAttributesPromise
                        ];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Returns a new, merged {@link Resource} by merging the current Resource
     * with the other Resource. In case of a collision, other Resource takes
     * precedence.
     *
     * @param other the Resource that will be merged with this.
     * @returns the newly merged Resource.
     */ Resource.prototype.merge = function(other) {
        var _this = this;
        var _a;
        if (!other) return this;
        // SpanAttributes from other resource overwrite attributes from this resource.
        var mergedSyncAttributes = __assign(__assign({}, this._syncAttributes), (_a = other._syncAttributes) !== null && _a !== void 0 ? _a : other.attributes);
        if (!this._asyncAttributesPromise && !other._asyncAttributesPromise) {
            return new Resource(mergedSyncAttributes);
        }
        var mergedAttributesPromise = Promise.all([
            this._asyncAttributesPromise,
            other._asyncAttributesPromise
        ]).then(function(_a) {
            var _b;
            var _c = __read(_a, 2), thisAsyncAttributes = _c[0], otherAsyncAttributes = _c[1];
            return __assign(__assign(__assign(__assign({}, _this._syncAttributes), thisAsyncAttributes), (_b = other._syncAttributes) !== null && _b !== void 0 ? _b : other.attributes), otherAsyncAttributes);
        });
        return new Resource(mergedSyncAttributes, mergedAttributesPromise);
    };
    Resource.EMPTY = new Resource({});
    return Resource;
}();
;
 //# sourceMappingURL=Resource.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/NoopSpanProcessor.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** No-op implementation of SpanProcessor */ __turbopack_esm__({
    "NoopSpanProcessor": (()=>NoopSpanProcessor)
});
var NoopSpanProcessor = function() {
    function NoopSpanProcessor() {}
    NoopSpanProcessor.prototype.onStart = function(_span, _context) {};
    NoopSpanProcessor.prototype.onEnd = function(_span) {};
    NoopSpanProcessor.prototype.shutdown = function() {
        return Promise.resolve();
    };
    NoopSpanProcessor.prototype.forceFlush = function() {
        return Promise.resolve();
    };
    return NoopSpanProcessor;
}();
;
 //# sourceMappingURL=NoopSpanProcessor.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/ExportResult.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "ExportResultCode": (()=>ExportResultCode)
});
var ExportResultCode;
(function(ExportResultCode) {
    ExportResultCode[ExportResultCode["SUCCESS"] = 0] = "SUCCESS";
    ExportResultCode[ExportResultCode["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {})); //# sourceMappingURL=ExportResult.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/timer-util.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "unrefTimer": (()=>unrefTimer)
});
function unrefTimer(timer) {
    timer.unref();
} //# sourceMappingURL=timer-util.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/promise.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "Deferred": (()=>Deferred)
});
var Deferred = function() {
    function Deferred() {
        var _this = this;
        this._promise = new Promise(function(resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
    }
    Object.defineProperty(Deferred.prototype, "promise", {
        get: function() {
            return this._promise;
        },
        enumerable: false,
        configurable: true
    });
    Deferred.prototype.resolve = function(val) {
        this._resolve(val);
    };
    Deferred.prototype.reject = function(err) {
        this._reject(err);
    };
    return Deferred;
}();
;
 //# sourceMappingURL=promise.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/callback.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "BindOnceFuture": (()=>BindOnceFuture)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$promise$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/promise.js [instrumentation-edge] (ecmascript)");
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
/**
 * Bind the callback and only invoke the callback once regardless how many times `BindOnceFuture.call` is invoked.
 */ var BindOnceFuture = function() {
    function BindOnceFuture(_callback, _that) {
        this._callback = _callback;
        this._that = _that;
        this._isCalled = false;
        this._deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$promise$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["Deferred"]();
    }
    Object.defineProperty(BindOnceFuture.prototype, "isCalled", {
        get: function() {
            return this._isCalled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BindOnceFuture.prototype, "promise", {
        get: function() {
            return this._deferred.promise;
        },
        enumerable: false,
        configurable: true
    });
    BindOnceFuture.prototype.call = function() {
        var _a;
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        if (!this._isCalled) {
            this._isCalled = true;
            try {
                Promise.resolve((_a = this._callback).call.apply(_a, __spreadArray([
                    this._that
                ], __read(args), false))).then(function(val) {
                    return _this._deferred.resolve(val);
                }, function(err) {
                    return _this._deferred.reject(err);
                });
            } catch (err) {
                this._deferred.reject(err);
            }
        }
        return this._deferred.promise;
    };
    return BindOnceFuture;
}();
;
 //# sourceMappingURL=callback.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/BatchSpanProcessorBase.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "BatchSpanProcessorBase": (()=>BatchSpanProcessorBase)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/ExportResult.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$timer$2d$util$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/timer-util.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$callback$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/callback.js [instrumentation-edge] (ecmascript)");
;
;
/**
 * Implementation of the {@link SpanProcessor} that batches spans exported by
 * the SDK then pushes them to the exporter pipeline.
 */ var BatchSpanProcessorBase = function() {
    function BatchSpanProcessorBase(_exporter, config) {
        this._exporter = _exporter;
        this._isExporting = false;
        this._finishedSpans = [];
        this._droppedSpansCount = 0;
        var env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getEnv"])();
        this._maxExportBatchSize = typeof (config === null || config === void 0 ? void 0 : config.maxExportBatchSize) === 'number' ? config.maxExportBatchSize : env.OTEL_BSP_MAX_EXPORT_BATCH_SIZE;
        this._maxQueueSize = typeof (config === null || config === void 0 ? void 0 : config.maxQueueSize) === 'number' ? config.maxQueueSize : env.OTEL_BSP_MAX_QUEUE_SIZE;
        this._scheduledDelayMillis = typeof (config === null || config === void 0 ? void 0 : config.scheduledDelayMillis) === 'number' ? config.scheduledDelayMillis : env.OTEL_BSP_SCHEDULE_DELAY;
        this._exportTimeoutMillis = typeof (config === null || config === void 0 ? void 0 : config.exportTimeoutMillis) === 'number' ? config.exportTimeoutMillis : env.OTEL_BSP_EXPORT_TIMEOUT;
        this._shutdownOnce = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$callback$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BindOnceFuture"](this._shutdown, this);
        if (this._maxExportBatchSize > this._maxQueueSize) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn('BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize');
            this._maxExportBatchSize = this._maxQueueSize;
        }
    }
    BatchSpanProcessorBase.prototype.forceFlush = function() {
        if (this._shutdownOnce.isCalled) {
            return this._shutdownOnce.promise;
        }
        return this._flushAll();
    };
    // does nothing.
    BatchSpanProcessorBase.prototype.onStart = function(_span, _parentContext) {};
    BatchSpanProcessorBase.prototype.onEnd = function(span) {
        if (this._shutdownOnce.isCalled) {
            return;
        }
        if ((span.spanContext().traceFlags & __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED) === 0) {
            return;
        }
        this._addToBuffer(span);
    };
    BatchSpanProcessorBase.prototype.shutdown = function() {
        return this._shutdownOnce.call();
    };
    BatchSpanProcessorBase.prototype._shutdown = function() {
        var _this = this;
        return Promise.resolve().then(function() {
            return _this.onShutdown();
        }).then(function() {
            return _this._flushAll();
        }).then(function() {
            return _this._exporter.shutdown();
        });
    };
    /** Add a span in the buffer. */ BatchSpanProcessorBase.prototype._addToBuffer = function(span) {
        if (this._finishedSpans.length >= this._maxQueueSize) {
            // limit reached, drop span
            if (this._droppedSpansCount === 0) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug('maxQueueSize reached, dropping spans');
            }
            this._droppedSpansCount++;
            return;
        }
        if (this._droppedSpansCount > 0) {
            // some spans were dropped, log once with count of spans dropped
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached");
            this._droppedSpansCount = 0;
        }
        this._finishedSpans.push(span);
        this._maybeStartTimer();
    };
    /**
     * Send all spans to the exporter respecting the batch size limit
     * This function is used only on forceFlush or shutdown,
     * for all other cases _flush should be used
     * */ BatchSpanProcessorBase.prototype._flushAll = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var promises = [];
            // calculate number of batches
            var count = Math.ceil(_this._finishedSpans.length / _this._maxExportBatchSize);
            for(var i = 0, j = count; i < j; i++){
                promises.push(_this._flushOneBatch());
            }
            Promise.all(promises).then(function() {
                resolve();
            }).catch(reject);
        });
    };
    BatchSpanProcessorBase.prototype._flushOneBatch = function() {
        var _this = this;
        this._clearTimer();
        if (this._finishedSpans.length === 0) {
            return Promise.resolve();
        }
        return new Promise(function(resolve, reject) {
            var timer = setTimeout(function() {
                // don't wait anymore for export, this way the next batch can start
                reject(new Error('Timeout'));
            }, _this._exportTimeoutMillis);
            // prevent downstream exporter calls from generating spans
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["context"].with((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["suppressTracing"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["context"].active()), function() {
                // Reset the finished spans buffer here because the next invocations of the _flush method
                // could pass the same finished spans to the exporter if the buffer is cleared
                // outside the execution of this callback.
                var spans;
                if (_this._finishedSpans.length <= _this._maxExportBatchSize) {
                    spans = _this._finishedSpans;
                    _this._finishedSpans = [];
                } else {
                    spans = _this._finishedSpans.splice(0, _this._maxExportBatchSize);
                }
                var doExport = function() {
                    return _this._exporter.export(spans, function(result) {
                        var _a;
                        clearTimeout(timer);
                        if (result.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ExportResultCode"].SUCCESS) {
                            resolve();
                        } else {
                            reject((_a = result.error) !== null && _a !== void 0 ? _a : new Error('BatchSpanProcessor: span export failed'));
                        }
                    });
                };
                var pendingResources = null;
                for(var i = 0, len = spans.length; i < len; i++){
                    var span = spans[i];
                    if (span.resource.asyncAttributesPending && span.resource.waitForAsyncAttributes) {
                        pendingResources !== null && pendingResources !== void 0 ? pendingResources : pendingResources = [];
                        pendingResources.push(span.resource.waitForAsyncAttributes());
                    }
                }
                // Avoid scheduling a promise to make the behavior more predictable and easier to test
                if (pendingResources === null) {
                    doExport();
                } else {
                    Promise.all(pendingResources).then(doExport, function(err) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["globalErrorHandler"])(err);
                        reject(err);
                    });
                }
            });
        });
    };
    BatchSpanProcessorBase.prototype._maybeStartTimer = function() {
        var _this = this;
        if (this._isExporting) return;
        var flush = function() {
            _this._isExporting = true;
            _this._flushOneBatch().finally(function() {
                _this._isExporting = false;
                if (_this._finishedSpans.length > 0) {
                    _this._clearTimer();
                    _this._maybeStartTimer();
                }
            }).catch(function(e) {
                _this._isExporting = false;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["globalErrorHandler"])(e);
            });
        };
        // we only wait if the queue doesn't have enough elements yet
        if (this._finishedSpans.length >= this._maxExportBatchSize) {
            return flush();
        }
        if (this._timer !== undefined) return;
        this._timer = setTimeout(function() {
            return flush();
        }, this._scheduledDelayMillis);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$timer$2d$util$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["unrefTimer"])(this._timer);
    };
    BatchSpanProcessorBase.prototype._clearTimer = function() {
        if (this._timer !== undefined) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    };
    return BatchSpanProcessorBase;
}();
;
 //# sourceMappingURL=BatchSpanProcessorBase.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/export/BatchSpanProcessor.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "BatchSpanProcessor": (()=>BatchSpanProcessor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$BatchSpanProcessorBase$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/BatchSpanProcessorBase.js [instrumentation-edge] (ecmascript)");
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
;
var BatchSpanProcessor = function(_super) {
    __extends(BatchSpanProcessor, _super);
    function BatchSpanProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatchSpanProcessor.prototype.onShutdown = function() {};
    return BatchSpanProcessor;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$BatchSpanProcessorBase$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BatchSpanProcessorBase"]);
;
 //# sourceMappingURL=BatchSpanProcessor.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "BasicTracerProvider": (()=>BasicTracerProvider),
    "ForceFlushState": (()=>ForceFlushState)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Tracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$MultiSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/MultiSpanProcessor.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$propagation$2f$composite$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/propagation/composite.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$W3CTraceContextPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$propagation$2f$W3CBaggagePropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/merge.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$config$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$utility$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/resources/build/esm/Resource.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$NoopSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/NoopSpanProcessor.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$platform$2f$node$2f$export$2f$BatchSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/export/BatchSpanProcessor.js [instrumentation-edge] (ecmascript)");
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
;
;
;
;
;
;
var ForceFlushState;
(function(ForceFlushState) {
    ForceFlushState[ForceFlushState["resolved"] = 0] = "resolved";
    ForceFlushState[ForceFlushState["timeout"] = 1] = "timeout";
    ForceFlushState[ForceFlushState["error"] = 2] = "error";
    ForceFlushState[ForceFlushState["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {}));
/**
 * This class represents a basic tracer provider which platform libraries can extend
 */ var BasicTracerProvider = function() {
    function BasicTracerProvider(config) {
        if (config === void 0) {
            config = {};
        }
        var _a, _b;
        this._registeredSpanProcessors = [];
        this._tracers = new Map();
        var mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["merge"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$config$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["loadDefaultConfig"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$utility$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["reconfigureLimits"])(config));
        this.resource = (_a = mergedConfig.resource) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["Resource"].empty();
        if (mergedConfig.mergeResourceWithDefaults) {
            this.resource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["Resource"].default().merge(this.resource);
        }
        this._config = Object.assign({}, mergedConfig, {
            resource: this.resource
        });
        if ((_b = config.spanProcessors) === null || _b === void 0 ? void 0 : _b.length) {
            this._registeredSpanProcessors = __spreadArray([], __read(config.spanProcessors), false);
            this.activeSpanProcessor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$MultiSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["MultiSpanProcessor"](this._registeredSpanProcessors);
        } else {
            var defaultExporter = this._buildExporterFromEnv();
            if (defaultExporter !== undefined) {
                var batchProcessor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$platform$2f$node$2f$export$2f$BatchSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BatchSpanProcessor"](defaultExporter);
                this.activeSpanProcessor = batchProcessor;
            } else {
                this.activeSpanProcessor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$NoopSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopSpanProcessor"]();
            }
        }
    }
    BasicTracerProvider.prototype.getTracer = function(name, version, options) {
        var key = name + "@" + (version || '') + ":" + ((options === null || options === void 0 ? void 0 : options.schemaUrl) || '');
        if (!this._tracers.has(key)) {
            this._tracers.set(key, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Tracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["Tracer"]({
                name: name,
                version: version,
                schemaUrl: options === null || options === void 0 ? void 0 : options.schemaUrl
            }, this._config, this));
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._tracers.get(key);
    };
    /**
     * @deprecated please use {@link TracerConfig} spanProcessors property
     * Adds a new {@link SpanProcessor} to this tracer.
     * @param spanProcessor the new SpanProcessor to be added.
     */ BasicTracerProvider.prototype.addSpanProcessor = function(spanProcessor) {
        if (this._registeredSpanProcessors.length === 0) {
            // since we might have enabled by default a batchProcessor, we disable it
            // before adding the new one
            this.activeSpanProcessor.shutdown().catch(function(err) {
                return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('Error while trying to shutdown current span processor', err);
            });
        }
        this._registeredSpanProcessors.push(spanProcessor);
        this.activeSpanProcessor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$MultiSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["MultiSpanProcessor"](this._registeredSpanProcessors);
    };
    BasicTracerProvider.prototype.getActiveSpanProcessor = function() {
        return this.activeSpanProcessor;
    };
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */ BasicTracerProvider.prototype.register = function(config) {
        if (config === void 0) {
            config = {};
        }
        __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].setGlobalTracerProvider(this);
        if (config.propagator === undefined) {
            config.propagator = this._buildPropagatorFromEnv();
        }
        if (config.contextManager) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["context"].setGlobalContextManager(config.contextManager);
        }
        if (config.propagator) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["propagation"].setGlobalPropagator(config.propagator);
        }
    };
    BasicTracerProvider.prototype.forceFlush = function() {
        var timeout = this._config.forceFlushTimeoutMillis;
        var promises = this._registeredSpanProcessors.map(function(spanProcessor) {
            return new Promise(function(resolve) {
                var state;
                var timeoutInterval = setTimeout(function() {
                    resolve(new Error("Span processor did not completed within timeout period of " + timeout + " ms"));
                    state = ForceFlushState.timeout;
                }, timeout);
                spanProcessor.forceFlush().then(function() {
                    clearTimeout(timeoutInterval);
                    if (state !== ForceFlushState.timeout) {
                        state = ForceFlushState.resolved;
                        resolve(state);
                    }
                }).catch(function(error) {
                    clearTimeout(timeoutInterval);
                    state = ForceFlushState.error;
                    resolve(error);
                });
            });
        });
        return new Promise(function(resolve, reject) {
            Promise.all(promises).then(function(results) {
                var errors = results.filter(function(result) {
                    return result !== ForceFlushState.resolved;
                });
                if (errors.length > 0) {
                    reject(errors);
                } else {
                    resolve();
                }
            }).catch(function(error) {
                return reject([
                    error
                ]);
            });
        });
    };
    BasicTracerProvider.prototype.shutdown = function() {
        return this.activeSpanProcessor.shutdown();
    };
    /**
     * TS cannot yet infer the type of this.constructor:
     * https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     * There is no need to override either of the getters in your child class.
     * The type of the registered component maps should be the same across all
     * classes in the inheritance tree.
     */ BasicTracerProvider.prototype._getPropagator = function(name) {
        var _a;
        return (_a = this.constructor._registeredPropagators.get(name)) === null || _a === void 0 ? void 0 : _a();
    };
    BasicTracerProvider.prototype._getSpanExporter = function(name) {
        var _a;
        return (_a = this.constructor._registeredExporters.get(name)) === null || _a === void 0 ? void 0 : _a();
    };
    BasicTracerProvider.prototype._buildPropagatorFromEnv = function() {
        var _this = this;
        // per spec, propagators from env must be deduplicated
        var uniquePropagatorNames = Array.from(new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getEnv"])().OTEL_PROPAGATORS));
        var propagators = uniquePropagatorNames.map(function(name) {
            var propagator = _this._getPropagator(name);
            if (!propagator) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn("Propagator \"" + name + "\" requested through environment variable is unavailable.");
            }
            return propagator;
        });
        var validPropagators = propagators.reduce(function(list, item) {
            if (item) {
                list.push(item);
            }
            return list;
        }, []);
        if (validPropagators.length === 0) {
            return;
        } else if (uniquePropagatorNames.length === 1) {
            return validPropagators[0];
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$propagation$2f$composite$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["CompositePropagator"]({
                propagators: validPropagators
            });
        }
    };
    BasicTracerProvider.prototype._buildExporterFromEnv = function() {
        var exporterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getEnv"])().OTEL_TRACES_EXPORTER;
        if (exporterName === 'none' || exporterName === '') return;
        var exporter = this._getSpanExporter(exporterName);
        if (!exporter) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error("Exporter \"" + exporterName + "\" requested through environment variable is unavailable.");
        }
        return exporter;
    };
    BasicTracerProvider._registeredPropagators = new Map([
        [
            'tracecontext',
            function() {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$W3CTraceContextPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["W3CTraceContextPropagator"]();
            }
        ],
        [
            'baggage',
            function() {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$propagation$2f$W3CBaggagePropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["W3CBaggagePropagator"]();
            }
        ]
    ]);
    BasicTracerProvider._registeredExporters = new Map();
    return BasicTracerProvider;
}();
;
 //# sourceMappingURL=BasicTracerProvider.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/ConsoleSpanExporter.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "ConsoleSpanExporter": (()=>ConsoleSpanExporter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/time.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/ExportResult.js [instrumentation-edge] (ecmascript)");
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
;
/**
 * This is implementation of {@link SpanExporter} that prints spans to the
 * console. This class can be used for diagnostic purposes.
 *
 * NOTE: This {@link SpanExporter} is intended for diagnostics use only, output rendered to the console may change at any time.
 */ /* eslint-disable no-console */ var ConsoleSpanExporter = function() {
    function ConsoleSpanExporter() {}
    /**
     * Export spans.
     * @param spans
     * @param resultCallback
     */ ConsoleSpanExporter.prototype.export = function(spans, resultCallback) {
        return this._sendSpans(spans, resultCallback);
    };
    /**
     * Shutdown the exporter.
     */ ConsoleSpanExporter.prototype.shutdown = function() {
        this._sendSpans([]);
        return this.forceFlush();
    };
    /**
     * Exports any pending spans in exporter
     */ ConsoleSpanExporter.prototype.forceFlush = function() {
        return Promise.resolve();
    };
    /**
     * converts span info into more readable format
     * @param span
     */ ConsoleSpanExporter.prototype._exportInfo = function(span) {
        var _a;
        return {
            resource: {
                attributes: span.resource.attributes
            },
            instrumentationScope: span.instrumentationLibrary,
            traceId: span.spanContext().traceId,
            parentId: span.parentSpanId,
            traceState: (_a = span.spanContext().traceState) === null || _a === void 0 ? void 0 : _a.serialize(),
            name: span.name,
            id: span.spanContext().spanId,
            kind: span.kind,
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["hrTimeToMicroseconds"])(span.startTime),
            duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["hrTimeToMicroseconds"])(span.duration),
            attributes: span.attributes,
            status: span.status,
            events: span.events,
            links: span.links
        };
    };
    /**
     * Showing spans in console
     * @param spans
     * @param done
     */ ConsoleSpanExporter.prototype._sendSpans = function(spans, done) {
        var e_1, _a;
        try {
            for(var spans_1 = __values(spans), spans_1_1 = spans_1.next(); !spans_1_1.done; spans_1_1 = spans_1.next()){
                var span = spans_1_1.value;
                console.dir(this._exportInfo(span), {
                    depth: 3
                });
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (spans_1_1 && !spans_1_1.done && (_a = spans_1.return)) _a.call(spans_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        if (done) {
            return done({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ExportResultCode"].SUCCESS
            });
        }
    };
    return ConsoleSpanExporter;
}();
;
 //# sourceMappingURL=ConsoleSpanExporter.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/InMemorySpanExporter.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "InMemorySpanExporter": (()=>InMemorySpanExporter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/ExportResult.js [instrumentation-edge] (ecmascript)");
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
/**
 * This class can be used for testing purposes. It stores the exported spans
 * in a list in memory that can be retrieved using the `getFinishedSpans()`
 * method.
 */ var InMemorySpanExporter = function() {
    function InMemorySpanExporter() {
        this._finishedSpans = [];
        /**
         * Indicates if the exporter has been "shutdown."
         * When false, exported spans will not be stored in-memory.
         */ this._stopped = false;
    }
    InMemorySpanExporter.prototype.export = function(spans, resultCallback) {
        var _a;
        if (this._stopped) return resultCallback({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ExportResultCode"].FAILED,
            error: new Error('Exporter has been stopped')
        });
        (_a = this._finishedSpans).push.apply(_a, __spreadArray([], __read(spans), false));
        setTimeout(function() {
            return resultCallback({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ExportResultCode"].SUCCESS
            });
        }, 0);
    };
    InMemorySpanExporter.prototype.shutdown = function() {
        this._stopped = true;
        this._finishedSpans = [];
        return this.forceFlush();
    };
    /**
     * Exports any pending spans in the exporter
     */ InMemorySpanExporter.prototype.forceFlush = function() {
        return Promise.resolve();
    };
    InMemorySpanExporter.prototype.reset = function() {
        this._finishedSpans = [];
    };
    InMemorySpanExporter.prototype.getFinishedSpans = function() {
        return this._finishedSpans;
    };
    return InMemorySpanExporter;
}();
;
 //# sourceMappingURL=InMemorySpanExporter.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/internal/exporter.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "_export": (()=>_export)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
;
;
function _export(exporter, arg) {
    return new Promise(function(resolve) {
        // prevent downstream exporter calls from generating spans
        __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["context"].with((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["suppressTracing"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["context"].active()), function() {
            exporter.export(arg, function(result) {
                resolve(result);
            });
        });
    });
} //# sourceMappingURL=exporter.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "baggageUtils": (()=>baggageUtils),
    "internal": (()=>internal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/baggage/utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$exporter$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/internal/exporter.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
var baggageUtils = {
    getKeyPairs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getKeyPairs"],
    serializeKeyPairs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["serializeKeyPairs"],
    parseKeyPairsIntoRecord: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["parseKeyPairsIntoRecord"],
    parsePairKeyValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["parsePairKeyValue"]
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var internal = {
    _export: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$exporter$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["_export"]
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/SimpleSpanProcessor.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "SimpleSpanProcessor": (()=>SimpleSpanProcessor)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/ExportResult.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$callback$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/utils/callback.js [instrumentation-edge] (ecmascript)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    "TURBOPACK unreachable";
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
;
;
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 *
 * NOTE: This {@link SpanProcessor} exports every ended span individually instead of batching spans together, which causes significant performance overhead with most exporters. For production use, please consider using the {@link BatchSpanProcessor} instead.
 */ var SimpleSpanProcessor = function() {
    function SimpleSpanProcessor(_exporter) {
        this._exporter = _exporter;
        this._shutdownOnce = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$callback$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BindOnceFuture"](this._shutdown, this);
        this._unresolvedExports = new Set();
    }
    SimpleSpanProcessor.prototype.forceFlush = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        // await unresolved resources before resolving
                        return [
                            4 /*yield*/ ,
                            Promise.all(Array.from(this._unresolvedExports))
                        ];
                    case 1:
                        // await unresolved resources before resolving
                        _a.sent();
                        if (!this._exporter.forceFlush) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            this._exporter.forceFlush()
                        ];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    SimpleSpanProcessor.prototype.onStart = function(_span, _parentContext) {};
    SimpleSpanProcessor.prototype.onEnd = function(span) {
        var _this = this;
        var _a, _b;
        if (this._shutdownOnce.isCalled) {
            return;
        }
        if ((span.spanContext().traceFlags & __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].SAMPLED) === 0) {
            return;
        }
        var doExport = function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal"]._export(_this._exporter, [
                span
            ]).then(function(result) {
                var _a;
                if (result.code !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ExportResultCode"].SUCCESS) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["globalErrorHandler"])((_a = result.error) !== null && _a !== void 0 ? _a : new Error("SimpleSpanProcessor: span export failed (status " + result + ")"));
                }
            }).catch(function(error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["globalErrorHandler"])(error);
            });
        };
        // Avoid scheduling a promise to make the behavior more predictable and easier to test
        if (span.resource.asyncAttributesPending) {
            var exportPromise_1 = (_b = (_a = span.resource).waitForAsyncAttributes) === null || _b === void 0 ? void 0 : _b.call(_a).then(function() {
                if (exportPromise_1 != null) {
                    _this._unresolvedExports.delete(exportPromise_1);
                }
                return doExport();
            }, function(err) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["globalErrorHandler"])(err);
            });
            // store the unresolved exports
            if (exportPromise_1 != null) {
                this._unresolvedExports.add(exportPromise_1);
            }
        } else {
            void doExport();
        }
    };
    SimpleSpanProcessor.prototype.shutdown = function() {
        return this._shutdownOnce.call();
    };
    SimpleSpanProcessor.prototype._shutdown = function() {
        return this._exporter.shutdown();
    };
    return SimpleSpanProcessor;
}();
;
 //# sourceMappingURL=SimpleSpanProcessor.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AlwaysOffSampler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOffSampler"]),
    "AlwaysOnSampler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]),
    "BasicTracerProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$BasicTracerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BasicTracerProvider"]),
    "BatchSpanProcessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$platform$2f$node$2f$export$2f$BatchSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BatchSpanProcessor"]),
    "ConsoleSpanExporter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$ConsoleSpanExporter$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ConsoleSpanExporter"]),
    "ForceFlushState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$BasicTracerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ForceFlushState"]),
    "InMemorySpanExporter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$InMemorySpanExporter$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["InMemorySpanExporter"]),
    "NoopSpanProcessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$NoopSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopSpanProcessor"]),
    "ParentBasedSampler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ParentBasedSampler"]),
    "RandomIdGenerator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$platform$2f$node$2f$RandomIdGenerator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["RandomIdGenerator"]),
    "SamplingDecision": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SamplingDecision"]),
    "SimpleSpanProcessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$SimpleSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SimpleSpanProcessor"]),
    "Span": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Span$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["Span"]),
    "TraceIdRatioBasedSampler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TraceIdRatioBasedSampler"]),
    "Tracer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Tracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["Tracer"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$BasicTracerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$platform$2f$node$2f$export$2f$BatchSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/export/BatchSpanProcessor.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$ConsoleSpanExporter$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/ConsoleSpanExporter.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$InMemorySpanExporter$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/InMemorySpanExporter.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$NoopSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/NoopSpanProcessor.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/ParentBasedSampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$platform$2f$node$2f$RandomIdGenerator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/RandomIdGenerator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$export$2f$SimpleSpanProcessor$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/SimpleSpanProcessor.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Span$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Span.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/TraceIdRatioBasedSampler.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$Tracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AlwaysOffSampler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AlwaysOffSampler"]),
    "AlwaysOnSampler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AlwaysOnSampler"]),
    "BasicTracerProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BasicTracerProvider"]),
    "BatchSpanProcessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BatchSpanProcessor"]),
    "ConsoleSpanExporter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ConsoleSpanExporter"]),
    "ForceFlushState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ForceFlushState"]),
    "InMemorySpanExporter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InMemorySpanExporter"]),
    "NoopSpanProcessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NoopSpanProcessor"]),
    "ParentBasedSampler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ParentBasedSampler"]),
    "RandomIdGenerator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RandomIdGenerator"]),
    "SamplingDecision": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SamplingDecision"]),
    "SimpleSpanProcessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SimpleSpanProcessor"]),
    "Span": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Span"]),
    "TraceIdRatioBasedSampler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TraceIdRatioBasedSampler"]),
    "Tracer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Tracer"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript) <exports>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/constants.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease'
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 0b001,
    FLAG_LOOSE: 0b010
};
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/debug.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args)=>console.error('SEMVER', ...args) : ()=>{};
module.exports = debug;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/re.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/constants.js [instrumentation-edge] (ecmascript)");
const debug = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/debug.js [instrumentation-edge] (ecmascript)");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const safeSrc = exports.safeSrc = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        '\\s',
        1
    ],
    [
        '\\d',
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements){
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken('COERCEFULL', src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
createToken('COERCERTLFULL', src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/parse-options.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) {
        return emptyOpts;
    }
    if (typeof options !== 'object') {
        return looseOption;
    }
    return options;
};
module.exports = parseOptions;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/identifiers.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const debug = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/debug.js [instrumentation-edge] (ecmascript)");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/constants.js [instrumentation-edge] (ecmascript)");
const { safeRe: re, safeSrc: src, t } = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/re.js [instrumentation-edge] (ecmascript)");
const parseOptions = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/parse-options.js [instrumentation-edge] (ecmascript)");
const { compareIdentifiers } = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/identifiers.js [instrumentation-edge] (ecmascript)");
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
            } else {
                version = version.version;
            }
        } else if (typeof version !== 'string') {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
            throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError('Invalid patch version');
        }
        // numberify any prerelease numeric ids
        if (!m[4]) {
            this.prerelease = [];
        } else {
            this.prerelease = m[4].split('.').map((id)=>{
                if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) {
                        return num;
                    }
                }
                return id;
            });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
                return 0;
            }
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
            return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
            return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
        }
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        if (release.startsWith('pre')) {
            if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
            }
            // Avoid an invalid semver results
            if (identifier) {
                const r = new RegExp(`^${this.options.loose ? src[t.PRERELEASELOOSE] : src[t.PRERELEASE]}$`);
                const match = `-${identifier}`.match(r);
                if (!match || match[1] !== identifier) {
                    throw new Error(`invalid identifier: ${identifier}`);
                }
            }
        }
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier, identifierBase);
                this.inc('pre', identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) {
                    this.inc('patch', identifier, identifierBase);
                }
                this.inc('pre', identifier, identifierBase);
                break;
            case 'release':
                if (this.prerelease.length === 0) {
                    throw new Error(`version ${this.raw} is not a prerelease`);
                }
                this.prerelease.length = 0;
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            base
                        ];
                    } else {
                        let i = this.prerelease.length;
                        while(--i >= 0){
                            if (typeof this.prerelease[i] === 'number') {
                                this.prerelease[i]++;
                                i = -2;
                            }
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join('.') && identifierBase === false) {
                                throw new Error('invalid increment argument: identifier already exists');
                            }
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) {
                            prerelease = [
                                identifier
                            ];
                        }
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = prerelease;
                            }
                        } else {
                            this.prerelease = prerelease;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join('.')}`;
        }
        return this;
    }
}
module.exports = SemVer;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/parse.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) {
        return version;
    }
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) {
            return null;
        }
        throw er;
    }
};
module.exports = parse;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/valid.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const parse = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/parse.js [instrumentation-edge] (ecmascript)");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/clean.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const parse = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/parse.js [instrumentation-edge] (ecmascript)");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/inc.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/diff.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const parse = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/parse.js [instrumentation-edge] (ecmascript)");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
        return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
            return 'major';
        }
        // If the main part has no difference
        if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
                return 'minor';
            }
            return 'patch';
        }
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
        return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
        return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
        return prefix + 'patch';
    }
    // high and low are preleases
    return 'prerelease';
};
module.exports = diff;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/major.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/minor.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/patch.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/prerelease.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const parse = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/parse.js [instrumentation-edge] (ecmascript)");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/rcompare.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare-loose.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare-build.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/sort.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compareBuild = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare-build.js [instrumentation-edge] (ecmascript)");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/rsort.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compareBuild = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare-build.js [instrumentation-edge] (ecmascript)");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gt.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/lt.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/eq.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/neq.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gte.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/lte.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/cmp.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const eq = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/eq.js [instrumentation-edge] (ecmascript)");
const neq = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/neq.js [instrumentation-edge] (ecmascript)");
const gt = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gt.js [instrumentation-edge] (ecmascript)");
const gte = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gte.js [instrumentation-edge] (ecmascript)");
const lt = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/lt.js [instrumentation-edge] (ecmascript)");
const lte = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/lte.js [instrumentation-edge] (ecmascript)");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a === b;
        case '!==':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/coerce.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const parse = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/parse.js [instrumentation-edge] (ecmascript)");
const { safeRe: re, t } = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/re.js [instrumentation-edge] (ecmascript)");
const coerce = (version, options)=>{
    if (version instanceof SemVer) {
        return version;
    }
    if (typeof version === 'number') {
        version = String(version);
    }
    if (typeof version !== 'string') {
        return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
        return null;
    }
    const major = match[2];
    const minor = match[3] || '0';
    const patch = match[4] || '0';
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/lrucache.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
class LRUCache {
    constructor(){
        this.max = 1000;
        this.map = new Map();
    }
    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return undefined;
        } else {
            // Remove the key from the map and add it to the end
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
    }
    delete(key) {
        return this.map.delete(key);
    }
    set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
                const firstKey = this.map.keys().next().value;
                this.delete(firstKey);
            }
            this.map.set(key, value);
        }
        return this;
    }
}
module.exports = LRUCache;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SPACE_CHARACTERS = /\s+/g;
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
            } else {
                return new Range(range.raw, options);
            }
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.formatted = undefined;
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');
        // First, split on ||
        this.set = this.raw.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) {
                this.set = [
                    first
                ];
            } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set){
                    if (c.length === 1 && isAny(c[0])) {
                        this.set = [
                            c
                        ];
                        break;
                    }
                }
            }
        }
        this.formatted = undefined;
    }
    get range() {
        if (this.formatted === undefined) {
            this.formatted = '';
            for(let i = 0; i < this.set.length; i++){
                if (i > 0) {
                    this.formatted += '||';
                }
                const comps = this.set[i];
                for(let k = 0; k < comps.length; k++){
                    if (k > 0) {
                        this.formatted += ' ';
                    }
                    this.formatted += comps[k].toString().trim();
                }
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ':' + range;
        const cached = cache.get(memoKey);
        if (cached) {
            return cached;
        }
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter((comp)=>{
                debug('loose invalid filter', comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
            });
        }
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) {
                return [
                    comp
                ];
            }
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap.delete('');
        }
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
        }
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) {
            return false;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = Range;
const LRU = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/lrucache.js [instrumentation-edge] (ecmascript)");
const cache = new LRU();
const parseOptions = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/parse-options.js [instrumentation-edge] (ecmascript)");
const Comparator = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/comparator.js [instrumentation-edge] (ecmascript)");
const debug = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/debug.js [instrumentation-edge] (ecmascript)");
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/re.js [instrumentation-edge] (ecmascript)");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/constants.js [instrumentation-edge] (ecmascript)");
const isNullSet = (c)=>c.value === '<0.0.0-0';
const isAny = (c)=>c.value === '';
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*';
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(' ');
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(' ');
};
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${incPr ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) {
            return false;
        }
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
                continue;
            }
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                    return true;
                }
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/comparator.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
                return comp;
            } else {
                comp = comp.value;
            }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
            this.value = '';
        } else {
            this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
            this.operator = '';
        }
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
            this.semver = ANY;
        } else {
            this.semver = new SemVer(m[2], this.options.loose);
        }
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
            return true;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
            if (this.value === '') {
                return true;
            }
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') {
                return true;
            }
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
        }
        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
        }
        return false;
    }
}
module.exports = Comparator;
const parseOptions = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/parse-options.js [instrumentation-edge] (ecmascript)");
const { safeRe: re, t } = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/re.js [instrumentation-edge] (ecmascript)");
const cmp = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/cmp.js [instrumentation-edge] (ecmascript)");
const debug = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/debug.js [instrumentation-edge] (ecmascript)");
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/satisfies.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/to-comparators.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(' ').trim().split(' '));
module.exports = toComparators;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/max-satisfying.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/min-satisfying.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/min-version.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const gt = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gt.js [instrumentation-edge] (ecmascript)");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) {
        return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
        return minver;
    }
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) {
                        compver.patch++;
                    } else {
                        compver.prerelease.push(0);
                    }
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) {
                        setMin = compver;
                    }
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
        }
    }
    if (minver && range.test(minver)) {
        return minver;
    }
    return null;
};
module.exports = minVersion;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/valid.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/outside.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const Comparator = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/comparator.js [instrumentation-edge] (ecmascript)");
const { ANY } = Comparator;
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const satisfies = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/satisfies.js [instrumentation-edge] (ecmascript)");
const gt = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gt.js [instrumentation-edge] (ecmascript)");
const lt = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/lt.js [instrumentation-edge] (ecmascript)");
const lte = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/lte.js [instrumentation-edge] (ecmascript)");
const gte = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gte.js [instrumentation-edge] (ecmascript)");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
        return false;
    }
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return false;
        }
    }
    return true;
};
module.exports = outside;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/gtr.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// Determine if version is greater than all the versions possible in the range.
const outside = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/outside.js [instrumentation-edge] (ecmascript)");
const gtr = (version, range, options)=>outside(version, range, '>', options);
module.exports = gtr;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/ltr.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const outside = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/outside.js [instrumentation-edge] (ecmascript)");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options);
module.exports = ltr;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/intersects.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/simplify.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/satisfies.js [instrumentation-edge] (ecmascript)");
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) {
                first = version;
            }
        } else {
            if (prev) {
                set.push([
                    first,
                    prev
                ]);
            }
            prev = null;
            first = null;
        }
    }
    if (first) {
        set.push([
            first,
            null
        ]);
    }
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) {
            ranges.push(min);
        } else if (!max && min === v[0]) {
            ranges.push('*');
        } else if (!max) {
            ranges.push(`>=${min}`);
        } else if (min === v[0]) {
            ranges.push(`<=${max}`);
        } else {
            ranges.push(`${min} - ${max}`);
        }
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/subset.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const Comparator = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/comparator.js [instrumentation-edge] (ecmascript)");
const { ANY } = Comparator;
const satisfies = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/satisfies.js [instrumentation-edge] (ecmascript)");
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) {
        return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
                continue OUTER;
            }
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) {
            return false;
        }
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator('>=0.0.0-0')
];
const minimumVersion = [
    new Comparator('>=0.0.0')
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) {
        return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
        } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
        } else {
            sub = minimumVersion;
        }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
            return true;
        } else {
            dom = minimumVersion;
        }
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
        } else {
            eqSet.add(c.semver);
        }
    }
    if (eqSet.size > 1) {
        return null;
    }
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
            return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
            return null;
        }
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) {
            return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
            return null;
        }
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) {
                return false;
            }
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
    }
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                }
            }
            if (c.operator === '>' || c.operator === '>=') {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                    return false;
                }
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
                return false;
            }
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                }
            }
            if (c.operator === '<' || c.operator === '<=') {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                    return false;
                }
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
                return false;
            }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
        }
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
    }
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
        return false;
    }
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/index.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// just pre-load all the stuff that index.js lazily exports
const internalRe = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/re.js [instrumentation-edge] (ecmascript)");
const constants = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/constants.js [instrumentation-edge] (ecmascript)");
const SemVer = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/semver.js [instrumentation-edge] (ecmascript)");
const identifiers = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/internal/identifiers.js [instrumentation-edge] (ecmascript)");
const parse = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/parse.js [instrumentation-edge] (ecmascript)");
const valid = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/valid.js [instrumentation-edge] (ecmascript)");
const clean = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/clean.js [instrumentation-edge] (ecmascript)");
const inc = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/inc.js [instrumentation-edge] (ecmascript)");
const diff = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/diff.js [instrumentation-edge] (ecmascript)");
const major = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/major.js [instrumentation-edge] (ecmascript)");
const minor = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/minor.js [instrumentation-edge] (ecmascript)");
const patch = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/patch.js [instrumentation-edge] (ecmascript)");
const prerelease = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/prerelease.js [instrumentation-edge] (ecmascript)");
const compare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare.js [instrumentation-edge] (ecmascript)");
const rcompare = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/rcompare.js [instrumentation-edge] (ecmascript)");
const compareLoose = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare-loose.js [instrumentation-edge] (ecmascript)");
const compareBuild = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/compare-build.js [instrumentation-edge] (ecmascript)");
const sort = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/sort.js [instrumentation-edge] (ecmascript)");
const rsort = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/rsort.js [instrumentation-edge] (ecmascript)");
const gt = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gt.js [instrumentation-edge] (ecmascript)");
const lt = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/lt.js [instrumentation-edge] (ecmascript)");
const eq = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/eq.js [instrumentation-edge] (ecmascript)");
const neq = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/neq.js [instrumentation-edge] (ecmascript)");
const gte = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/gte.js [instrumentation-edge] (ecmascript)");
const lte = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/lte.js [instrumentation-edge] (ecmascript)");
const cmp = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/cmp.js [instrumentation-edge] (ecmascript)");
const coerce = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/coerce.js [instrumentation-edge] (ecmascript)");
const Comparator = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/comparator.js [instrumentation-edge] (ecmascript)");
const Range = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/classes/range.js [instrumentation-edge] (ecmascript)");
const satisfies = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/functions/satisfies.js [instrumentation-edge] (ecmascript)");
const toComparators = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/to-comparators.js [instrumentation-edge] (ecmascript)");
const maxSatisfying = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/max-satisfying.js [instrumentation-edge] (ecmascript)");
const minSatisfying = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/min-satisfying.js [instrumentation-edge] (ecmascript)");
const minVersion = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/min-version.js [instrumentation-edge] (ecmascript)");
const validRange = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/valid.js [instrumentation-edge] (ecmascript)");
const outside = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/outside.js [instrumentation-edge] (ecmascript)");
const gtr = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/gtr.js [instrumentation-edge] (ecmascript)");
const ltr = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/ltr.js [instrumentation-edge] (ecmascript)");
const intersects = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/intersects.js [instrumentation-edge] (ecmascript)");
const simplifyRange = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/simplify.js [instrumentation-edge] (ecmascript)");
const subset = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/ranges/subset.js [instrumentation-edge] (ecmascript)");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({});
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/JaegerPropagator.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_esm__({
    "JaegerPropagator": (()=>JaegerPropagator),
    "UBER_BAGGAGE_HEADER_PREFIX": (()=>UBER_BAGGAGE_HEADER_PREFIX),
    "UBER_TRACE_ID_HEADER": (()=>UBER_TRACE_ID_HEADER)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_import__("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
;
;
var UBER_TRACE_ID_HEADER = 'uber-trace-id';
var UBER_BAGGAGE_HEADER_PREFIX = 'uberctx';
/**
 * Propagates {@link SpanContext} through Trace Context format propagation.
 * {trace-id}:{span-id}:{parent-span-id}:{flags}
 * {trace-id}
 * 64-bit or 128-bit random number in base16 format.
 * Can be variable length, shorter values are 0-padded on the left.
 * Value of 0 is invalid.
 * {span-id}
 * 64-bit random number in base16 format.
 * {parent-span-id}
 * Set to 0 because this field is deprecated.
 * {flags}
 * One byte bitmap, as two hex digits.
 * Inspired by jaeger-client-node project.
 */ var JaegerPropagator = function() {
    function JaegerPropagator(config) {
        if (typeof config === 'string') {
            this._jaegerTraceHeader = config;
            this._jaegerBaggageHeaderPrefix = UBER_BAGGAGE_HEADER_PREFIX;
        } else {
            this._jaegerTraceHeader = (config === null || config === void 0 ? void 0 : config.customTraceHeader) || UBER_TRACE_ID_HEADER;
            this._jaegerBaggageHeaderPrefix = (config === null || config === void 0 ? void 0 : config.customBaggageHeaderPrefix) || UBER_BAGGAGE_HEADER_PREFIX;
        }
    }
    JaegerPropagator.prototype.inject = function(context, carrier, setter) {
        var e_1, _a;
        var spanContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getSpanContext(context);
        var baggage = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["propagation"].getBaggage(context);
        if (spanContext && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context) === false) {
            var traceFlags = "0" + (spanContext.traceFlags || __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["TraceFlags"].NONE).toString(16);
            setter.set(carrier, this._jaegerTraceHeader, spanContext.traceId + ":" + spanContext.spanId + ":0:" + traceFlags);
        }
        if (baggage) {
            try {
                for(var _b = __values(baggage.getAllEntries()), _c = _b.next(); !_c.done; _c = _b.next()){
                    var _d = __read(_c.value, 2), key = _d[0], entry = _d[1];
                    setter.set(carrier, this._jaegerBaggageHeaderPrefix + "-" + key, encodeURIComponent(entry.value));
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }
    };
    JaegerPropagator.prototype.extract = function(context, carrier, getter) {
        var e_2, _a;
        var _this = this;
        var _b;
        var uberTraceIdHeader = getter.get(carrier, this._jaegerTraceHeader);
        var uberTraceId = Array.isArray(uberTraceIdHeader) ? uberTraceIdHeader[0] : uberTraceIdHeader;
        var baggageValues = getter.keys(carrier).filter(function(key) {
            return key.startsWith(_this._jaegerBaggageHeaderPrefix + "-");
        }).map(function(key) {
            var value = getter.get(carrier, key);
            return {
                key: key.substring(_this._jaegerBaggageHeaderPrefix.length + 1),
                value: Array.isArray(value) ? value[0] : value
            };
        });
        var newContext = context;
        // if the trace id header is present and valid, inject it into the context
        if (typeof uberTraceId === 'string') {
            var spanContext = deserializeSpanContext(uberTraceId);
            if (spanContext) {
                newContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].setSpanContext(newContext, spanContext);
            }
        }
        if (baggageValues.length === 0) return newContext;
        // if baggage values are present, inject it into the current baggage
        var currentBaggage = (_b = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["propagation"].getBaggage(context)) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["propagation"].createBaggage();
        try {
            for(var baggageValues_1 = __values(baggageValues), baggageValues_1_1 = baggageValues_1.next(); !baggageValues_1_1.done; baggageValues_1_1 = baggageValues_1.next()){
                var baggageEntry = baggageValues_1_1.value;
                if (baggageEntry.value === undefined) continue;
                currentBaggage = currentBaggage.setEntry(baggageEntry.key, {
                    value: decodeURIComponent(baggageEntry.value)
                });
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (baggageValues_1_1 && !baggageValues_1_1.done && (_a = baggageValues_1.return)) _a.call(baggageValues_1);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        newContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["propagation"].setBaggage(newContext, currentBaggage);
        return newContext;
    };
    JaegerPropagator.prototype.fields = function() {
        return [
            this._jaegerTraceHeader
        ];
    };
    return JaegerPropagator;
}();
;
var VALID_HEX_RE = /^[0-9a-f]{1,2}$/i;
/**
 * @param {string} serializedString - a serialized span context.
 * @return {SpanContext} - returns a span context represented by the serializedString.
 **/ function deserializeSpanContext(serializedString) {
    var headers = decodeURIComponent(serializedString).split(':');
    if (headers.length !== 4) {
        return null;
    }
    var _a = __read(headers, 4), _traceId = _a[0], _spanId = _a[1], flags = _a[3];
    var traceId = _traceId.padStart(32, '0');
    var spanId = _spanId.padStart(16, '0');
    var traceFlags = VALID_HEX_RE.test(flags) ? parseInt(flags, 16) & 1 : 1;
    return {
        traceId: traceId,
        spanId: spanId,
        isRemote: true,
        traceFlags: traceFlags
    };
} //# sourceMappingURL=JaegerPropagator.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "JaegerPropagator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$JaegerPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["JaegerPropagator"]),
    "UBER_BAGGAGE_HEADER_PREFIX": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$JaegerPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["UBER_BAGGAGE_HEADER_PREFIX"]),
    "UBER_TRACE_ID_HEADER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$JaegerPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["UBER_TRACE_ID_HEADER"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$JaegerPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/JaegerPropagator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "JaegerPropagator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["JaegerPropagator"]),
    "UBER_BAGGAGE_HEADER_PREFIX": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["UBER_BAGGAGE_HEADER_PREFIX"]),
    "UBER_TRACE_ID_HEADER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["UBER_TRACE_ID_HEADER"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$node$2f$node_modules$2f40$opentelemetry$2f$propagator$2d$jaeger$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript) <exports>");
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/build/src/NodeTracerProvider.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeTracerProvider = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const context_async_hooks_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/context-async-hooks/build/src/index.js [instrumentation-edge] (ecmascript)");
const propagator_b3_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-b3/build/esm/index.js [instrumentation-edge] (ecmascript)");
const sdk_trace_base_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript)");
const semver = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/semver/index.js [instrumentation-edge] (ecmascript)");
const propagator_jaeger_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/propagator-jaeger/build/esm/index.js [instrumentation-edge] (ecmascript)");
/**
 * Register this TracerProvider for use with the OpenTelemetry API.
 * Undefined values may be replaced with defaults, and
 * null values will be skipped.
 *
 * @param config Configuration object for SDK registration
 */ class NodeTracerProvider extends sdk_trace_base_1.BasicTracerProvider {
    constructor(config = {}){
        super(config);
    }
    register(config = {}) {
        if (config.contextManager === undefined) {
            const ContextManager = semver.gte(process.version, '14.8.0') ? context_async_hooks_1.AsyncLocalStorageContextManager : context_async_hooks_1.AsyncHooksContextManager;
            config.contextManager = new ContextManager();
            config.contextManager.enable();
        }
        super.register(config);
    }
}
exports.NodeTracerProvider = NodeTracerProvider;
NodeTracerProvider._registeredPropagators = new Map([
    ...sdk_trace_base_1.BasicTracerProvider._registeredPropagators,
    [
        'b3',
        ()=>new propagator_b3_1.B3Propagator({
                injectEncoding: propagator_b3_1.B3InjectEncoding.SINGLE_HEADER
            })
    ],
    [
        'b3multi',
        ()=>new propagator_b3_1.B3Propagator({
                injectEncoding: propagator_b3_1.B3InjectEncoding.MULTI_HEADER
            })
    ],
    [
        'jaeger',
        ()=>new propagator_jaeger_1.JaegerPropagator()
    ]
]); //# sourceMappingURL=NodeTracerProvider.js.map
}}),
"[project]/node_modules/@opentelemetry/sdk-trace-node/build/src/index.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tracer = exports.TraceIdRatioBasedSampler = exports.Span = exports.SimpleSpanProcessor = exports.SamplingDecision = exports.RandomIdGenerator = exports.ParentBasedSampler = exports.NoopSpanProcessor = exports.InMemorySpanExporter = exports.ForceFlushState = exports.ConsoleSpanExporter = exports.BatchSpanProcessor = exports.BasicTracerProvider = exports.AlwaysOnSampler = exports.AlwaysOffSampler = exports.NodeTracerProvider = void 0;
var NodeTracerProvider_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/build/src/NodeTracerProvider.js [instrumentation-edge] (ecmascript)");
Object.defineProperty(exports, "NodeTracerProvider", {
    enumerable: true,
    get: function() {
        return NodeTracerProvider_1.NodeTracerProvider;
    }
});
var sdk_trace_base_1 = __turbopack_require__("[project]/node_modules/@opentelemetry/sdk-trace-node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation-edge] (ecmascript)");
Object.defineProperty(exports, "AlwaysOffSampler", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.AlwaysOffSampler;
    }
});
Object.defineProperty(exports, "AlwaysOnSampler", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.AlwaysOnSampler;
    }
});
Object.defineProperty(exports, "BasicTracerProvider", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.BasicTracerProvider;
    }
});
Object.defineProperty(exports, "BatchSpanProcessor", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.BatchSpanProcessor;
    }
});
Object.defineProperty(exports, "ConsoleSpanExporter", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.ConsoleSpanExporter;
    }
});
Object.defineProperty(exports, "ForceFlushState", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.ForceFlushState;
    }
});
Object.defineProperty(exports, "InMemorySpanExporter", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.InMemorySpanExporter;
    }
});
Object.defineProperty(exports, "NoopSpanProcessor", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.NoopSpanProcessor;
    }
});
Object.defineProperty(exports, "ParentBasedSampler", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.ParentBasedSampler;
    }
});
Object.defineProperty(exports, "RandomIdGenerator", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.RandomIdGenerator;
    }
});
Object.defineProperty(exports, "SamplingDecision", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.SamplingDecision;
    }
});
Object.defineProperty(exports, "SimpleSpanProcessor", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.SimpleSpanProcessor;
    }
});
Object.defineProperty(exports, "Span", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.Span;
    }
});
Object.defineProperty(exports, "TraceIdRatioBasedSampler", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.TraceIdRatioBasedSampler;
    }
});
Object.defineProperty(exports, "Tracer", {
    enumerable: true,
    get: function() {
        return sdk_trace_base_1.Tracer;
    }
}); //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=08b5e_632136._.js.map