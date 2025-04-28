(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/08b5e_@refinedev_core_dist_index_mjs_b56476._.js", {

"[project]/node_modules/@refinedev/core/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AccessControlContext": (()=>ct),
    "ActionTypes": (()=>Os),
    "AuthPage": (()=>ac),
    "Authenticated": (()=>Ec),
    "AutoSaveIndicator": (()=>Vc),
    "CanAccess": (()=>Sc),
    "ErrorComponent": (()=>sc),
    "GitHubBanner": (()=>Fc),
    "I18nContext": (()=>Xe),
    "KeyBuilder": (()=>wt),
    "LayoutWrapper": (()=>Dc),
    "Link": (()=>Io),
    "LoginPage": (()=>Yr),
    "MetaContextProvider": (()=>Zu),
    "ReadyPage": (()=>Qo),
    "Refine": (()=>Rc),
    "ResourceContext": (()=>Rt),
    "RouteChangeHandler": (()=>Vo),
    "TranslationContext": (()=>Xe),
    "UndoableQueue": (()=>un),
    "WelcomePage": (()=>mc),
    "createTreeView": (()=>is),
    "file2Base64": (()=>Da),
    "flattenObjectKeys": (()=>Cr),
    "generateDefaultDocumentTitle": (()=>ls),
    "getDefaultFilter": (()=>va),
    "getDefaultSortOrder": (()=>ba),
    "getNextPageParam": (()=>Tr),
    "getPreviousPageParam": (()=>xr),
    "handleUseParams": (()=>es),
    "importCSVMapper": (()=>sr),
    "keys": (()=>nt),
    "legacyResourceTransform": (()=>hr),
    "matchResourceFromRoute": (()=>as),
    "parseTableParams": (()=>vr),
    "parseTableParamsFromQuery": (()=>Ca),
    "pickDataProvider": (()=>ee),
    "pickNotDeprecated": (()=>I),
    "propertyPathToArray": (()=>Ts),
    "queryKeys": (()=>ts),
    "routeGenerator": (()=>yr),
    "setInitialFilters": (()=>Er),
    "setInitialSorters": (()=>Lr),
    "stringifyTableParams": (()=>Dr),
    "unionFilters": (()=>St),
    "unionSorters": (()=>Ur),
    "useActiveAuthProvider": (()=>ie),
    "useApiUrl": (()=>li),
    "useAuthenticated": (()=>Va),
    "useBack": (()=>Mo),
    "useBreadcrumb": (()=>fb),
    "useCan": (()=>kr),
    "useCanWithoutCache": (()=>cC),
    "useCancelNotification": (()=>ut),
    "useCheckError": (()=>Na),
    "useCloneButton": (()=>Jv),
    "useCreate": (()=>Xt),
    "useCreateButton": (()=>qv),
    "useCreateMany": (()=>bo),
    "useCustom": (()=>yi),
    "useCustomMutation": (()=>xi),
    "useDataProvider": (()=>le),
    "useDelete": (()=>Po),
    "useDeleteButton": (()=>qu),
    "useDeleteMany": (()=>di),
    "useEditButton": (()=>Yv),
    "useExport": (()=>fP),
    "useExportButton": (()=>rD),
    "useForgotPassword": (()=>lo),
    "useForm": (()=>RP),
    "useGetIdentity": (()=>no),
    "useGetLocale": (()=>Lo),
    "useGetToPath": (()=>Ut),
    "useGo": (()=>Pe),
    "useHandleNotification": (()=>Ce),
    "useImport": (()=>mR),
    "useImportButton": (()=>oD),
    "useInfiniteList": (()=>bi),
    "useInvalidate": (()=>Ae),
    "useInvalidateAuthStore": (()=>Dt),
    "useIsAuthenticated": (()=>wr),
    "useIsExistAuthentication": (()=>yo),
    "useKeys": (()=>Z),
    "useLink": (()=>yt),
    "useList": (()=>$t),
    "useListButton": (()=>eD),
    "useLiveMode": (()=>sn),
    "useLoadingOvertime": (()=>fe),
    "useLog": (()=>Je),
    "useLogList": (()=>eb),
    "useLogin": (()=>Ht),
    "useLogout": (()=>Mr),
    "useMany": (()=>go),
    "useMenu": (()=>zu),
    "useMeta": (()=>ue),
    "useMetaContext": (()=>Br),
    "useModal": (()=>TR),
    "useMutationMode": (()=>_e),
    "useNavigation": (()=>he),
    "useNotification": (()=>He),
    "useOnError": (()=>Re),
    "useOne": (()=>zt),
    "useParse": (()=>vo),
    "useParsed": (()=>Te),
    "usePermissions": (()=>Ua),
    "usePublish": (()=>Ye),
    "useRedirectionAfterSubmission": (()=>fn),
    "useRefineContext": (()=>ge),
    "useRefineOptions": (()=>At),
    "useRefreshButton": (()=>tc),
    "useRegister": (()=>co),
    "useResource": (()=>q),
    "useResourceParams": (()=>qe),
    "useResourceSubscription": (()=>Pt),
    "useResourceWithRoute": (()=>rn),
    "useRouterContext": (()=>pe),
    "useRouterType": (()=>oe),
    "useSaveButton": (()=>tD),
    "useSelect": (()=>PC),
    "useSetLocale": (()=>Eo),
    "useShow": (()=>nR),
    "useShowButton": (()=>Zv),
    "useSubscription": (()=>ph),
    "useSyncWithLocation": (()=>to),
    "useTable": (()=>IC),
    "useTitle": (()=>Ta),
    "useToPath": (()=>Du),
    "useTranslate": (()=>z),
    "useTranslation": (()=>tP),
    "useUpdate": (()=>To),
    "useUpdateMany": (()=>ii),
    "useUpdatePassword": (()=>fo),
    "useUserFriendlyName": (()=>ht),
    "useWarnAboutChange": (()=>vt),
    "userFriendlyResourceName": (()=>nr)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/warn-once/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/pluralize/pluralize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$fromPairs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/fromPairs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$zip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/zip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/debounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qs/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$unionWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/unionWith.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$differenceWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/differenceWith.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@refinedev/core/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@refinedev/devtools-internal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@refinedev/core/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@refinedev/core/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@refinedev/core/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$chunk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/chunk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$uniqBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash-es/uniqBy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@refinedev/core/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
"use client";
var na = Object.defineProperty;
var o = (e, t)=>na(e, "name", {
        value: t,
        configurable: !0
    });
;
;
;
;
var Xo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({}), Zo = o(({ children: e, isProvided: t, ...r })=>{
    let { replace: s } = he(), n = o(async (c)=>{
        var p;
        try {
            return await ((p = r.login) == null ? void 0 : p.call(r, c));
        } catch (l) {
            return Promise.reject(l);
        }
    }, "loginFunc"), i = o(async (c)=>{
        var p;
        try {
            return await ((p = r.register) == null ? void 0 : p.call(r, c));
        } catch (l) {
            return Promise.reject(l);
        }
    }, "registerFunc"), a = o(async (c)=>{
        var p;
        try {
            return await ((p = r.logout) == null ? void 0 : p.call(r, c));
        } catch (l) {
            return Promise.reject(l);
        }
    }, "logoutFunc"), u = o(async (c)=>{
        var p;
        try {
            return await ((p = r.checkAuth) == null ? void 0 : p.call(r, c)), Promise.resolve();
        } catch (l) {
            return l != null && l.redirectPath && s(l.redirectPath), Promise.reject(l);
        }
    }, "checkAuthFunc");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Xo.Provider, {
        value: {
            ...r,
            login: n,
            logout: a,
            checkAuth: u,
            register: i,
            isProvided: t
        }
    }, e);
}, "LegacyAuthContextProvider"), Yo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({}), Jo = o(({ children: e, isProvided: t, ...r })=>{
    let s = o(async (p)=>{
        var l;
        try {
            return await ((l = r.login) == null ? void 0 : l.call(r, p));
        } catch (m) {
            return console.warn("Unhandled Error in login: refine always expects a resolved promise.", m), Promise.reject(m);
        }
    }, "handleLogin"), n = o(async (p)=>{
        var l;
        try {
            return await ((l = r.register) == null ? void 0 : l.call(r, p));
        } catch (m) {
            return console.warn("Unhandled Error in register: refine always expects a resolved promise.", m), Promise.reject(m);
        }
    }, "handleRegister"), i = o(async (p)=>{
        var l;
        try {
            return await ((l = r.logout) == null ? void 0 : l.call(r, p));
        } catch (m) {
            return console.warn("Unhandled Error in logout: refine always expects a resolved promise.", m), Promise.reject(m);
        }
    }, "handleLogout"), a = o(async (p)=>{
        var l;
        try {
            let m = await ((l = r.check) == null ? void 0 : l.call(r, p));
            return Promise.resolve(m);
        } catch (m) {
            return console.warn("Unhandled Error in check: refine always expects a resolved promise.", m), Promise.reject(m);
        }
    }, "handleCheck"), u = o(async (p)=>{
        var l;
        try {
            let m = await ((l = r.forgotPassword) == null ? void 0 : l.call(r, p));
            return Promise.resolve(m);
        } catch (m) {
            return console.warn("Unhandled Error in forgotPassword: refine always expects a resolved promise.", m), Promise.reject(m);
        }
    }, "handleForgotPassword"), c = o(async (p)=>{
        var l;
        try {
            let m = await ((l = r.updatePassword) == null ? void 0 : l.call(r, p));
            return Promise.resolve(m);
        } catch (m) {
            return console.warn("Unhandled Error in updatePassword: refine always expects a resolved promise.", m), Promise.reject(m);
        }
    }, "handleUpdatePassword");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Yo.Provider, {
        value: {
            ...r,
            login: s,
            logout: i,
            check: a,
            register: n,
            forgotPassword: u,
            updatePassword: c,
            isProvided: t
        }
    }, e);
}, "AuthBindingsContextProvider"), xe = o(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(Xo), "useLegacyAuthContext"), Ue = o(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(Yo), "useAuthBindingsContext");
;
;
;
;
var Bt = o((e)=>e / 1e3, "userFriendlySecond");
;
;
var sr = o((e, t = (r)=>r)=>{
    let [r, ...s] = e;
    return s.map((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$fromPairs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$zip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r, n))).map((n, i, a)=>t.call(void 0, n, i, a));
}, "importCSVMapper");
;
var nr = o((e = "", t)=>{
    let r = Kt(e);
    return t === "singular" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].singular(r) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].plural(r);
}, "userFriendlyResourceName");
var es = o((e = {})=>e != null && e.id ? {
        ...e,
        id: decodeURIComponent(e.id)
    } : e, "handleUseParams");
function pt(e, t) {
    return e.findIndex((r, s)=>s <= e.length - t.length && t.every((n, i)=>e[s + i] === n));
}
o(pt, "arrayFindIndex");
function ua(e) {
    if (e[0] === "data") {
        let t = e.slice(1);
        if (t[2] === "many") t[2] = "getMany";
        else if (t[2] === "infinite") t[2] = "list";
        else if (t[2] === "one") t[2] = "detail";
        else if (t[1] === "custom") {
            let r = {
                ...t[2]
            };
            return delete r.method, delete r.url, [
                t[0],
                t[1],
                t[2].method,
                t[2].url,
                r
            ];
        }
        return t;
    }
    if (e[0] === "audit" && e[2] === "list") return [
        "logList",
        e[1],
        e[3]
    ];
    if (e[0] === "access" && e.length === 4) return [
        "useCan",
        {
            resource: e[1],
            action: e[2],
            ...e[3]
        }
    ];
    if (e[0] === "auth") {
        if (pt(e, [
            "auth",
            "login"
        ]) !== -1) return [
            "useLogin"
        ];
        if (pt(e, [
            "auth",
            "logout"
        ]) !== -1) return [
            "useLogout"
        ];
        if (pt(e, [
            "auth",
            "identity"
        ]) !== -1) return [
            "getUserIdentity"
        ];
        if (pt(e, [
            "auth",
            "register"
        ]) !== -1) return [
            "useRegister"
        ];
        if (pt(e, [
            "auth",
            "forgotPassword"
        ]) !== -1) return [
            "useForgotPassword"
        ];
        if (pt(e, [
            "auth",
            "check"
        ]) !== -1) return [
            "useAuthenticated",
            e[2]
        ];
        if (pt(e, [
            "auth",
            "onError"
        ]) !== -1) return [
            "useCheckError"
        ];
        if (pt(e, [
            "auth",
            "permissions"
        ]) !== -1) return [
            "usePermissions"
        ];
        if (pt(e, [
            "auth",
            "updatePassword"
        ]) !== -1) return [
            "useUpdatePassword"
        ];
    }
    return e;
}
o(ua, "convertToLegacy");
var Oe = class {
    constructor(t = []){
        this.segments = [];
        this.segments = t;
    }
    key() {
        return this.segments;
    }
    legacy() {
        return ua(this.segments);
    }
    get(t) {
        return t ? this.legacy() : this.segments;
    }
};
o(Oe, "BaseKeyBuilder");
var st = class extends Oe {
    params(t) {
        return new Oe([
            ...this.segments,
            t
        ]);
    }
};
o(st, "ParamsKeyBuilder");
var ar = class extends Oe {
    id(t) {
        return new st([
            ...this.segments,
            t ? String(t) : void 0
        ]);
    }
};
o(ar, "DataIdRequiringKeyBuilder");
var ir = class extends Oe {
    ids(...t) {
        return new st([
            ...this.segments,
            ...t.length ? [
                t.map((r)=>String(r))
            ] : []
        ]);
    }
};
o(ir, "DataIdsRequiringKeyBuilder");
var ur = class extends Oe {
    action(t) {
        if (t === "one") return new ar([
            ...this.segments,
            t
        ]);
        if (t === "many") return new ir([
            ...this.segments,
            t
        ]);
        if ([
            "list",
            "infinite"
        ].includes(t)) return new st([
            ...this.segments,
            t
        ]);
        throw new Error("Invalid action type");
    }
};
o(ur, "DataResourceKeyBuilder");
var cr = class extends Oe {
    resource(t) {
        return new ur([
            ...this.segments,
            t
        ]);
    }
    mutation(t) {
        return new st([
            ...t === "custom" ? this.segments : [
                this.segments[0]
            ],
            t
        ]);
    }
};
o(cr, "DataKeyBuilder");
var pr = class extends Oe {
    action(t) {
        return new st([
            ...this.segments,
            t
        ]);
    }
};
o(pr, "AuthKeyBuilder");
var dr = class extends Oe {
    action(t) {
        return new st([
            ...this.segments,
            t
        ]);
    }
};
o(dr, "AccessResourceKeyBuilder");
var lr = class extends Oe {
    resource(t) {
        return new dr([
            ...this.segments,
            t
        ]);
    }
};
o(lr, "AccessKeyBuilder");
var mr = class extends Oe {
    action(t) {
        return new st([
            ...this.segments,
            t
        ]);
    }
};
o(mr, "AuditActionKeyBuilder");
var fr = class extends Oe {
    resource(t) {
        return new mr([
            ...this.segments,
            t
        ]);
    }
    action(t) {
        return new st([
            ...this.segments,
            t
        ]);
    }
};
o(fr, "AuditKeyBuilder");
var wt = class extends Oe {
    data(t) {
        return new cr([
            "data",
            t || "default"
        ]);
    }
    auth() {
        return new pr([
            "auth"
        ]);
    }
    access() {
        return new lr([
            "access"
        ]);
    }
    audit() {
        return new fr([
            "audit"
        ]);
    }
};
o(wt, "KeyBuilder");
var nt = o(()=>new wt([]), "keys");
var I = o((...e)=>e.find((t)=>typeof t < "u"), "pickNotDeprecated");
var ts = o((e, t, r, s)=>{
    let n = t || "default", i = {
        all: [
            n
        ],
        resourceAll: [
            n,
            e || ""
        ],
        list: (a)=>[
                ...i.resourceAll,
                "list",
                {
                    ...a,
                    ...I(r, s) || {}
                }
            ],
        many: (a)=>[
                ...i.resourceAll,
                "getMany",
                a == null ? void 0 : a.map(String),
                {
                    ...I(r, s) || {}
                }
            ].filter((u)=>u !== void 0),
        detail: (a)=>[
                ...i.resourceAll,
                "detail",
                a == null ? void 0 : a.toString(),
                {
                    ...I(r, s) || {}
                }
            ],
        logList: (a)=>[
                "logList",
                e,
                a,
                s
            ].filter((u)=>u !== void 0)
    };
    return i;
}, "queryKeys"), dt = o((e)=>(t, r, s, n)=>{
        let i = r || "default";
        return {
            all: nt().data(i).get(e),
            resourceAll: nt().data(r).resource(t ?? "").get(e),
            list: (u)=>nt().data(r).resource(t ?? "").action("list").params({
                    ...u,
                    ...I(s, n) || {}
                }).get(e),
            many: (u)=>nt().data(r).resource(t ?? "").action("many").ids(...u ?? []).params({
                    ...I(s, n) || {}
                }).get(e),
            detail: (u)=>nt().data(r).resource(t ?? "").action("one").id(u ?? "").params({
                    ...I(s, n) || {}
                }).get(e),
            logList: (u)=>[
                    ...nt().audit().resource(t).action("list").params(u).get(e),
                    n
                ].filter((c)=>c !== void 0)
        };
    }, "queryKeysReplacement");
var Xr = o((e, t)=>!e || !t ? !1 : !!e.find((r)=>r === t), "hasPermission");
var It = o((e)=>e.startsWith(":"), "isParameter");
var it = o((e)=>e.split("/").filter((r)=>r !== ""), "splitToSegments");
var rs = o((e, t)=>{
    let r = it(e), s = it(t);
    return r.length === s.length;
}, "isSegmentCountsSame");
var ke = o((e)=>e.replace(/^\/|\/$/g, ""), "removeLeadingTrailingSlashes");
var os = o((e, t)=>{
    let r = ke(e), s = ke(t);
    if (!rs(r, s)) return !1;
    let n = it(r);
    return it(s).every((a, u)=>It(a) || a === n[u]);
}, "checkBySegments");
var ss = o((e, t, r)=>{
    let s = ke(r || ""), n = `${s}${s ? "/" : ""}${e}`;
    return t === "list" ? n = `${n}` : t === "create" ? n = `${n}/create` : t === "edit" ? n = `${n}/edit/:id` : t === "show" ? n = `${n}/show/:id` : t === "clone" && (n = `${n}/clone/:id`), `/${n.replace(/^\//, "")}`;
}, "getDefaultActionPath");
var ze = o((e, t)=>{
    var n, i;
    let r = I((n = e.meta) == null ? void 0 : n.parent, (i = e.options) == null ? void 0 : i.parent, e.parentName);
    return r ? t.find((a)=>(a.identifier ?? a.name) === r) ?? {
        name: r
    } : void 0;
}, "getParentResource");
var Gt = o((e, t, r)=>{
    let s = [], n = ze(e, t);
    for(; n;)s.push(n), n = ze(n, t);
    if (s.length !== 0) return `/${s.reverse().map((i)=>{
        var u;
        let a = r ? ((u = i.options) == null ? void 0 : u.route) ?? i.name : i.name;
        return ke(a);
    }).join("/")}`;
}, "getParentPrefixForResource");
var Se = o((e, t, r)=>{
    let s = [], n = [
        "list",
        "show",
        "edit",
        "create",
        "clone"
    ], i = Gt(e, t, r);
    return n.forEach((a)=>{
        var p, l;
        let u = r && a === "clone" ? e.create : e[a], c;
        typeof u == "function" || r ? c = ss(r ? ((p = e.meta) == null ? void 0 : p.route) ?? ((l = e.options) == null ? void 0 : l.route) ?? e.name : e.name, a, r ? i : void 0) : typeof u == "string" ? c = u : typeof u == "object" && (c = u.path), c && s.push({
            action: a,
            resource: e,
            route: `/${c.replace(/^\//, "")}`
        });
    }), s;
}, "getActionRoutesFromResource");
var ns = o((e)=>{
    var n;
    if (e.length === 0) return;
    if (e.length === 1) return e[0];
    let t = e.map((i)=>({
            ...i,
            splitted: it(ke(i.route))
        })), r = ((n = t[0]) == null ? void 0 : n.splitted.length) ?? 0, s = [
        ...t
    ];
    for(let i = 0; i < r; i++){
        let a = s.filter((u)=>!It(u.splitted[i]));
        if (a.length !== 0) {
            if (a.length === 1) {
                s = a;
                break;
            }
            s = a;
        }
    }
    return s[0];
}, "pickMatchedRoute");
var as = o((e, t)=>{
    let s = t.flatMap((i)=>Se(i, t)).filter((i)=>os(e, i.route)), n = ns(s);
    return {
        found: !!n,
        resource: n == null ? void 0 : n.resource,
        action: n == null ? void 0 : n.action,
        matchedRoute: n == null ? void 0 : n.route
    };
}, "matchResourceFromRoute");
var yr = o((e, t)=>{
    var n;
    let r, s = Gt(e, t, !0);
    if (s) {
        let i = I(e.meta, e.options);
        r = `${s}/${(i == null ? void 0 : i.route) ?? e.name}`;
    } else r = ((n = e.options) == null ? void 0 : n.route) ?? e.name;
    return `/${r.replace(/^\//, "")}`;
}, "routeGenerator");
var is = o((e)=>{
    var a;
    let t = [], r = {}, s = {}, n, i;
    for(let u = 0; u < e.length; u++){
        n = e[u];
        let c = n.route ?? ((a = I(n == null ? void 0 : n.meta, n.options)) == null ? void 0 : a.route) ?? "";
        r[c] = n, r[c].children = [], s[n.name] = n, s[n.name].children = [];
    }
    for(let u in r)Object.hasOwn(r, u) && (i = r[u], i.parentName && s[i.parentName] ? s[i.parentName].children.push(i) : t.push(i));
    return t;
}, "createTreeView");
var Kt = o((e)=>(e = e.replace(/([a-z]{1})([A-Z]{1})/g, "$1-$2"), e = e.replace(/([A-Z]{1})([A-Z]{1})([a-z]{1})/g, "$1-$2$3"), e = e.toLowerCase().replace(/[_-]+/g, " ").replace(/\s{2,}/g, " ").trim(), e = e.charAt(0).toUpperCase() + e.slice(1), e), "humanizeString");
;
;
;
var Zr = o(({ children: e })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, e), "DefaultLayout");
var pa = {
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "refine-logo",
        id: "refine-default-logo"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.7889 0.422291C12.6627 -0.140764 11.3373 -0.140764 10.2111 0.422291L2.21115 4.42229C0.85601 5.09986 0 6.48491 0 8V16C0 17.5151 0.85601 18.9001 2.21115 19.5777L10.2111 23.5777C11.3373 24.1408 12.6627 24.1408 13.7889 23.5777L21.7889 19.5777C23.144 18.9001 24 17.5151 24 16V8C24 6.48491 23.144 5.09986 21.7889 4.42229L13.7889 0.422291ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V8Z",
        fill: "currentColor"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z",
        fill: "currentColor"
    })),
    text: "Refine Project"
}, Fe = {
    mutationMode: "pessimistic",
    syncWithLocation: !1,
    undoableTimeout: 5e3,
    warnWhenUnsavedChanges: !1,
    liveMode: "off",
    redirect: {
        afterCreate: "list",
        afterClone: "list",
        afterEdit: "list"
    },
    overtime: {
        enabled: !0,
        interval: 1e3
    },
    textTransformers: {
        humanize: Kt,
        plural: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].plural,
        singular: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].singular
    },
    disableServerSideValidation: !1,
    title: pa
}, Qe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    hasDashboard: !1,
    mutationMode: "pessimistic",
    warnWhenUnsavedChanges: !1,
    syncWithLocation: !1,
    undoableTimeout: 5e3,
    Title: void 0,
    Sider: void 0,
    Header: void 0,
    Footer: void 0,
    Layout: Zr,
    OffLayoutArea: void 0,
    liveMode: "off",
    onLiveEvent: void 0,
    options: Fe
}), cs = o(({ hasDashboard: e, mutationMode: t, warnWhenUnsavedChanges: r, syncWithLocation: s, undoableTimeout: n, children: i, DashboardPage: a, Title: u, Layout: c = Zr, Header: p, Sider: l, Footer: m, OffLayoutArea: y, LoginPage: d = Yr, catchAll: T, liveMode: x = "off", onLiveEvent: v, options: f })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Qe.Provider, {
        value: {
            __initialized: !0,
            hasDashboard: e,
            mutationMode: t,
            warnWhenUnsavedChanges: r,
            syncWithLocation: s,
            Title: u,
            undoableTimeout: n,
            Layout: c,
            Header: p,
            Sider: l,
            Footer: m,
            OffLayoutArea: y,
            DashboardPage: a,
            LoginPage: d,
            catchAll: T,
            liveMode: x,
            onLiveEvent: v,
            options: f
        }
    }, i), "RefineContextProvider");
var Jr = o(({ options: e, disableTelemetry: t, liveMode: r, mutationMode: s, reactQueryClientConfig: n, reactQueryDevtoolConfig: i, syncWithLocation: a, undoableTimeout: u, warnWhenUnsavedChanges: c } = {})=>{
    var y, d, T, x, v, f, P, M, Q, g, C, h;
    let p = {
        breadcrumb: e == null ? void 0 : e.breadcrumb,
        mutationMode: (e == null ? void 0 : e.mutationMode) ?? s ?? Fe.mutationMode,
        undoableTimeout: (e == null ? void 0 : e.undoableTimeout) ?? u ?? Fe.undoableTimeout,
        syncWithLocation: (e == null ? void 0 : e.syncWithLocation) ?? a ?? Fe.syncWithLocation,
        warnWhenUnsavedChanges: (e == null ? void 0 : e.warnWhenUnsavedChanges) ?? c ?? Fe.warnWhenUnsavedChanges,
        liveMode: (e == null ? void 0 : e.liveMode) ?? r ?? Fe.liveMode,
        redirect: {
            afterCreate: ((y = e == null ? void 0 : e.redirect) == null ? void 0 : y.afterCreate) ?? Fe.redirect.afterCreate,
            afterClone: ((d = e == null ? void 0 : e.redirect) == null ? void 0 : d.afterClone) ?? Fe.redirect.afterClone,
            afterEdit: ((T = e == null ? void 0 : e.redirect) == null ? void 0 : T.afterEdit) ?? Fe.redirect.afterEdit
        },
        overtime: (e == null ? void 0 : e.overtime) ?? Fe.overtime,
        textTransformers: {
            humanize: ((x = e == null ? void 0 : e.textTransformers) == null ? void 0 : x.humanize) ?? Fe.textTransformers.humanize,
            plural: ((v = e == null ? void 0 : e.textTransformers) == null ? void 0 : v.plural) ?? Fe.textTransformers.plural,
            singular: ((f = e == null ? void 0 : e.textTransformers) == null ? void 0 : f.singular) ?? Fe.textTransformers.singular
        },
        disableServerSideValidation: (e == null ? void 0 : e.disableServerSideValidation) ?? Fe.disableServerSideValidation,
        projectId: e == null ? void 0 : e.projectId,
        useNewQueryKeys: e == null ? void 0 : e.useNewQueryKeys,
        title: {
            icon: typeof ((P = e == null ? void 0 : e.title) == null ? void 0 : P.icon) > "u" ? Fe.title.icon : (M = e == null ? void 0 : e.title) == null ? void 0 : M.icon,
            text: typeof ((Q = e == null ? void 0 : e.title) == null ? void 0 : Q.text) > "u" ? Fe.title.text : (g = e == null ? void 0 : e.title) == null ? void 0 : g.text
        }
    }, l = (e == null ? void 0 : e.disableTelemetry) ?? t ?? !1, m = {
        clientConfig: ((C = e == null ? void 0 : e.reactQuery) == null ? void 0 : C.clientConfig) ?? n ?? {},
        devtoolConfig: ((h = e == null ? void 0 : e.reactQuery) == null ? void 0 : h.devtoolConfig) ?? i ?? {}
    };
    return {
        optionsWithDefaults: p,
        disableTelemetryWithDefault: l,
        reactQueryWithDefaults: m
    };
}, "handleRefineOptions");
var qr = o(({ redirectFromProps: e, action: t, redirectOptions: r })=>{
    if (e || e === !1) return e;
    switch(t){
        case "clone":
            return r.afterClone;
        case "create":
            return r.afterCreate;
        case "edit":
            return r.afterEdit;
        default:
            return !1;
    }
}, "redirectPage");
var gr = o(async (e, t, r)=>{
    let s = [];
    for (let [n, i] of e.entries())try {
        let a = await i();
        s.push(t(a, n));
    } catch (a) {
        s.push(r(a, n));
    }
    return s;
}, "sequentialPromises");
var Ee = o((e, t = [], r = !1)=>{
    if (!e) return;
    if (r) {
        let n = t.find((a)=>ke(a.route ?? "") === ke(e));
        return n || t.find((a)=>a.name === e);
    }
    let s = t.find((n)=>n.identifier === e);
    return s || (s = t.find((n)=>n.name === e)), s;
}, "pickResource");
var ee = o((e, t, r)=>{
    if (t) return t;
    let s = Ee(e, r), n = I(s == null ? void 0 : s.meta, s == null ? void 0 : s.options);
    return n != null && n.dataProviderName ? n.dataProviderName : "default";
}, "pickDataProvider");
var lt = o(async (e)=>({
        data: (await Promise.all(e)).map((t)=>t.data)
    }), "handleMultiple");
var Tr = o((e)=>{
    let { pagination: t, cursor: r } = e;
    if (r != null && r.next) return r.next;
    let s = (t == null ? void 0 : t.current) || 1, n = (t == null ? void 0 : t.pageSize) || 10, i = Math.ceil((e.total || 0) / n);
    return s < i ? Number(s) + 1 : void 0;
}, "getNextPageParam"), xr = o((e)=>{
    let { pagination: t, cursor: r } = e;
    if (r != null && r.prev) return r.prev;
    let s = (t == null ? void 0 : t.current) || 1;
    return s === 1 ? void 0 : s - 1;
}, "getPreviousPageParam");
var hr = o((e)=>{
    let t = [];
    return e.forEach((r)=>{
        var s, n;
        t.push({
            ...r,
            label: ((s = r.meta) == null ? void 0 : s.label) ?? ((n = r.options) == null ? void 0 : n.label),
            route: yr(r, e),
            canCreate: !!r.create,
            canEdit: !!r.edit,
            canShow: !!r.show,
            canDelete: r.canDelete
        });
    }), t;
}, "legacyResourceTransform");
var ps = o((e)=>it(ke(e)).flatMap((r)=>It(r) ? [
            r.slice(1)
        ] : []), "pickRouteParams");
var ds = o((e, t = {})=>e.reduce((r, s)=>{
        let n = t[s];
        return typeof n < "u" && (r[s] = n), r;
    }, {}), "prepareRouteParams");
var We = o((e, t = {}, r = {}, s = {})=>{
    let n = ps(e), i = ds(n, {
        ...t,
        ...typeof (r == null ? void 0 : r.id) < "u" ? {
            id: r.id
        } : {},
        ...typeof (r == null ? void 0 : r.action) < "u" ? {
            action: r.action
        } : {},
        ...typeof (r == null ? void 0 : r.resource) < "u" ? {
            resource: r.resource
        } : {},
        ...r == null ? void 0 : r.params,
        ...s
    });
    return e.replace(/:([^\/]+)/g, (a, u)=>{
        let c = i[u];
        return typeof c < "u" ? `${c}` : a;
    });
}, "composeRoute");
var ie = o(()=>{
    let e = xe(), t = Ue();
    return t.isProvided ? {
        isLegacy: !1,
        ...t
    } : e.isProvided ? {
        isLegacy: !0,
        ...e,
        check: e.checkAuth,
        onError: e.checkError,
        getIdentity: e.getUserIdentity
    } : null;
}, "useActiveAuthProvider");
var Wt = o(({ hasPagination: e, pagination: t, configPagination: r } = {})=>{
    let s = e === !1 ? "off" : "server", n = (t == null ? void 0 : t.mode) ?? s, i = I(t == null ? void 0 : t.current, r == null ? void 0 : r.current) ?? 1, a = I(t == null ? void 0 : t.pageSize, r == null ? void 0 : r.pageSize) ?? 10;
    return {
        current: i,
        pageSize: a,
        mode: n
    };
}, "handlePaginationParams");
;
var Pr = o((e)=>{
    let [t, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let s = window.matchMedia(e);
        s.matches !== t && r(s.matches);
        let n = o(()=>r(s.matches), "listener");
        return window.addEventListener("resize", n), ()=>window.removeEventListener("resize", n);
    }, [
        t,
        e
    ]), t;
}, "useMediaQuery");
var Rr = o((e, t, r, s)=>{
    let n = s ? e(t, s, r) : e(t, r), i = r ?? t;
    return n === t || typeof n > "u" ? i : n;
}, "safeTranslate");
function ls(e, t, r, s, n) {
    var y;
    let i = {
        create: "Create new ",
        clone: `#${s ?? ""} Clone `,
        edit: `#${s ?? ""} Edit `,
        show: `#${s ?? ""} Show `,
        list: ""
    }, a = (t == null ? void 0 : t.identifier) ?? (t == null ? void 0 : t.name), u = (t == null ? void 0 : t.label) ?? ((y = t == null ? void 0 : t.meta) == null ? void 0 : y.label) ?? nr(a, r === "list" ? "plural" : "singular"), c = n ?? u, p = Rr(e, "documentTitle.default", "Refine"), l = Rr(e, "documentTitle.suffix", " | Refine"), m = p;
    return r && a && (m = Rr(e, `documentTitle.${a}.${r}`, `${i[r] ?? ""}${c}${l}`, {
        id: s
    })), m;
}
o(ls, "generateDefaultDocumentTitle");
;
var _e = o((e, t)=>{
    let { mutationMode: r, undoableTimeout: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Qe);
    return {
        mutationMode: e ?? r,
        undoableTimeout: t ?? s
    };
}, "useMutationMode");
;
;
var eo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({}), fs = o(({ children: e })=>{
    let [t, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(eo.Provider, {
        value: {
            warnWhen: t,
            setWarnWhen: r
        }
    }, e);
}, "UnsavedWarnContextProvider");
var vt = o(()=>{
    let { warnWhenUnsavedChanges: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Qe), { warnWhen: t, setWarnWhen: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(eo);
    return {
        warnWhenUnsavedChanges: e,
        warnWhen: !!t,
        setWarnWhen: r ?? (()=>{})
    };
}, "useWarnAboutChange");
;
var to = o(()=>{
    let { syncWithLocation: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Qe);
    return {
        syncWithLocation: e
    };
}, "useSyncWithLocation");
;
var Ta = o(()=>{
    let { Title: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Qe);
    return e;
}, "useTitle");
;
var ge = o(()=>{
    let { Footer: e, Header: t, Layout: r, OffLayoutArea: s, Sider: n, Title: i, hasDashboard: a, mutationMode: u, syncWithLocation: c, undoableTimeout: p, warnWhenUnsavedChanges: l, DashboardPage: m, LoginPage: y, catchAll: d, options: T, __initialized: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Qe);
    return {
        __initialized: x,
        Footer: e,
        Header: t,
        Layout: r,
        OffLayoutArea: s,
        Sider: n,
        Title: i,
        hasDashboard: a,
        mutationMode: u,
        syncWithLocation: c,
        undoableTimeout: p,
        warnWhenUnsavedChanges: l,
        DashboardPage: m,
        LoginPage: y,
        catchAll: d,
        options: T
    };
}, "useRefineContext");
var ht = o(()=>{
    let { options: { textTransformers: e } } = ge();
    return o((r = "", s)=>{
        let n = e.humanize(r);
        return s === "singular" ? e.singular(n) : e.plural(n);
    }, "getFriendlyName");
}, "useUserFriendlyName");
var gs = o((e)=>typeof e == "object" && e !== null, "isNested"), ha = o((e)=>Array.isArray(e), "isArray"), Cr = o((e, t = "")=>gs(e) ? Object.keys(e).reduce((r, s)=>{
        let n = t.length ? `${t}.` : "";
        return gs(e[s]) && Object.keys(e[s]).length && (ha(e[s]) && e[s].length ? e[s].forEach((i, a)=>{
            Object.assign(r, Cr(i, `${n + s}.${a}`));
        }) : Object.assign(r, Cr(e[s], n + s))), r[n + s] = e[s], r;
    }, {}) : {
        [t]: e
    }, "flattenObjectKeys");
var Ts = o((e)=>e.split(".").map((t)=>Number.isNaN(Number(t)) ? t : Number(t)), "propertyPathToArray");
var ro = o((e, t, r)=>{
    if (typeof window > "u") return;
    let s = new Blob([
        t
    ], {
        type: r
    }), n = document.createElement("a");
    n.setAttribute("visibility", "hidden"), n.download = e;
    let i = URL.createObjectURL(s);
    n.href = i, document.body.appendChild(n), n.click(), document.body.removeChild(n), setTimeout(()=>{
        URL.revokeObjectURL(i);
    });
}, "downloadInBrowser");
var br = o((e)=>{
    setTimeout(e, 0);
}, "deferExecution");
;
var oo = o((e, t = 1e3, r)=>{
    let s = [], n = o(()=>{
        s.forEach((u)=>{
            var c;
            return (c = u.reject) == null ? void 0 : c.call(u, r);
        }), s = [];
    }, "cancelPrevious"), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((...u)=>{
        let { resolve: c, reject: p } = s.pop() || {};
        Promise.resolve(e(...u)).then(c).catch(p);
    }, t), a = o((...u)=>new Promise((c, p)=>{
            n(), s.push({
                resolve: c,
                reject: p
            }), i(...u);
        }), "runner");
    return a.flush = ()=>i.flush(), a.cancel = ()=>{
        i.cancel(), n();
    }, a;
}, "asyncDebounce");
var je = o((e)=>{
    let t = {
        queryKey: e.queryKey,
        pageParam: e.pageParam
    };
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: ()=>e.signal
    }), t;
}, "prepareQueryContext");
var vr = o((e)=>{
    let { current: t, pageSize: r, sorter: s, sorters: n, filters: i } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(e.substring(1));
    return {
        parsedCurrent: t && Number(t),
        parsedPageSize: r && Number(r),
        parsedSorter: I(n, s) ?? [],
        parsedFilters: i ?? []
    };
}, "parseTableParams"), Ca = o((e)=>{
    let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify(e);
    return vr(`/${t}`);
}, "parseTableParamsFromQuery"), Dr = o((e)=>{
    let t = {
        skipNulls: !0,
        arrayFormat: "indices",
        encode: !1
    }, { pagination: r, sorter: s, sorters: n, filters: i, ...a } = e;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify({
        ...a,
        ...r || {},
        sorters: I(n, s),
        filters: i
    }, t);
}, "stringifyTableParams"), Ps = o((e, t)=>e.operator !== "and" && e.operator !== "or" && t.operator !== "and" && t.operator !== "or" ? ("field" in e ? e.field : void 0) === ("field" in t ? t.field : void 0) && e.operator === t.operator : ("key" in e ? e.key : void 0) === ("key" in t ? t.key : void 0) && e.operator === t.operator, "compareFilters"), Rs = o((e, t)=>e.field === t.field, "compareSorters"), St = o((e, t, r = [])=>(t.filter((n)=>(n.operator === "or" || n.operator === "and") && !n.key).length > 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!0, `[conditionalFilters]: You have created multiple Conditional Filters at the top level, this requires the key parameter. 
For more information, see https://refine.dev/docs/advanced-tutorials/data-provider/handling-filters/#top-level-multiple-conditional-filters-usage`), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$unionWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, t, r, Ps).filter((n)=>n.value !== void 0 && n.value !== null && (n.operator !== "or" || n.operator === "or" && n.value.length !== 0) && (n.operator !== "and" || n.operator === "and" && n.value.length !== 0))), "unionFilters"), Ur = o((e, t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$unionWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, t, Rs).filter((r)=>r.order !== void 0 && r.order !== null), "unionSorters"), Er = o((e, t)=>[
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$differenceWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, e, Ps),
        ...e
    ], "setInitialFilters"), Lr = o((e, t)=>[
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$differenceWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, e, Rs),
        ...e
    ], "setInitialSorters"), ba = o((e, t)=>{
    if (!t) return;
    let r = t.find((s)=>s.field === e);
    if (r) return r.order;
}, "getDefaultSortOrder"), va = o((e, t, r = "eq")=>{
    let s = t == null ? void 0 : t.find((n)=>{
        if (n.operator !== "or" && n.operator !== "and" && "field" in n) {
            let { operator: i, field: a } = n;
            return a === e && i === r;
        }
    });
    if (s) return s.value || [];
}, "getDefaultFilter");
var Da = o((e)=>new Promise((t, r)=>{
        let s = new FileReader, n = o(()=>{
            s.result && (s.removeEventListener("load", n, !1), t(s.result));
        }, "resultHandler");
        s.addEventListener("load", n, !1), s.readAsDataURL(e.originFileObj), s.onerror = (i)=>(s.removeEventListener("load", n, !1), r(i));
    }), "file2Base64");
var Z = o(()=>{
    let { options: { useNewQueryKeys: e } } = ge();
    return {
        keys: nt,
        preferLegacyKeys: !e
    };
}, "useKeys");
function Ua({ v3LegacyAuthProviderCompatible: e = !1, options: t, params: r } = {}) {
    let { getPermissions: s } = xe(), { getPermissions: n } = Ue(), { keys: i, preferLegacyKeys: a } = Z(), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: i().auth().action("permissions").get(a),
        queryFn: n ? ()=>n(r) : ()=>Promise.resolve(void 0),
        enabled: !e && !!n,
        ...e ? {} : t,
        meta: {
            ...e ? {} : t == null ? void 0 : t.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("usePermissions", a)
        }
    }), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            ...i().auth().action("permissions").get(a),
            "v3LegacyAuthProviderCompatible"
        ],
        queryFn: s ? ()=>s(r) : ()=>Promise.resolve(void 0),
        enabled: e && !!s,
        ...e ? t : {},
        meta: {
            ...e ? t == null ? void 0 : t.meta : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("usePermissions", a)
        }
    });
    return e ? c : u;
}
o(Ua, "usePermissions");
;
;
function no({ v3LegacyAuthProviderCompatible: e = !1, queryOptions: t } = {}) {
    let { getUserIdentity: r } = xe(), { getIdentity: s } = Ue(), { keys: n, preferLegacyKeys: i } = Z(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: n().auth().action("identity").get(i),
        queryFn: s ?? (()=>Promise.resolve({})),
        enabled: !e && !!s,
        retry: !1,
        ...e === !0 ? {} : t,
        meta: {
            ...e === !0 ? {} : t == null ? void 0 : t.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useGetIdentity", i)
        }
    }), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            ...n().auth().action("identity").get(i),
            "v3LegacyAuthProviderCompatible"
        ],
        queryFn: r ?? (()=>Promise.resolve({})),
        enabled: e && !!r,
        retry: !1,
        ...e ? t : {},
        meta: {
            ...e ? t == null ? void 0 : t.meta : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useGetIdentity", i)
        }
    });
    return e ? u : a;
}
o(no, "useGetIdentity");
;
;
;
var Dt = o(()=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(), { keys: t, preferLegacyKeys: r } = Z();
    return o(async ()=>{
        await Promise.all([
            "check",
            "identity",
            "permissions"
        ].map((n)=>e.invalidateQueries(t().auth().action(n).get(r))));
    }, "invalidate");
}, "useInvalidateAuthStore");
function Mr({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
    let r = Dt(), s = oe(), n = Pe(), { push: i } = he(), { open: a, close: u } = He(), { logout: c } = xe(), { logout: p } = Ue(), { keys: l, preferLegacyKeys: m } = Z(), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: l().auth().action("logout").get(m),
        mutationFn: p,
        onSuccess: async (T, x)=>{
            let { success: v, error: f, redirectTo: P, successNotification: M } = T, { redirectPath: Q } = x ?? {}, g = Q ?? P;
            v && (u == null || u("useLogout-error"), M && (a == null || a(La(M)))), (f || !v) && (a == null || a(ao(f))), g !== !1 && (s === "legacy" ? i(g ?? "/login") : g && n({
                to: g
            })), await r();
        },
        onError: (T)=>{
            a == null || a(ao(T));
        },
        ...e === !0 ? {} : t,
        meta: {
            ...e === !0 ? {} : t == null ? void 0 : t.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useLogout", m)
        }
    }), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            ...l().auth().action("logout").get(m),
            "v3LegacyAuthProviderCompatible"
        ],
        mutationFn: c,
        onSuccess: async (T, x)=>{
            let v = (x == null ? void 0 : x.redirectPath) ?? T;
            if (v !== !1) {
                if (v) {
                    s === "legacy" ? i(v) : n({
                        to: v
                    });
                    return;
                }
                s === "legacy" ? i("/login") : n({
                    to: "/login"
                }), await r();
            }
        },
        onError: (T)=>{
            a == null || a(ao(T));
        },
        ...e ? t : {},
        meta: {
            ...e ? t == null ? void 0 : t.meta : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useLogout", m)
        }
    });
    return e ? d : y;
}
o(Mr, "useLogout");
var ao = o((e)=>({
        key: "useLogout-error",
        type: "error",
        message: (e == null ? void 0 : e.name) || "Logout Error",
        description: (e == null ? void 0 : e.message) || "Something went wrong during logout"
    }), "buildNotification"), La = o((e)=>({
        message: e.message,
        description: e.description,
        key: "logout-success",
        type: "success"
    }), "buildSuccessNotification");
;
;
;
;
function Ht({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
    let r = Dt(), s = oe(), n = Pe(), { replace: i } = he(), a = Te(), { useLocation: u } = pe(), { search: c } = u(), { close: p, open: l } = He(), { login: m } = xe(), { login: y } = Ue(), { keys: d, preferLegacyKeys: T } = Z(), x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Ht.useMemo[x]": ()=>{
            var P;
            return s === "legacy" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(c, {
                ignoreQueryPrefix: !0
            }).to : (P = a.params) == null ? void 0 : P.to;
        }
    }["Ht.useMemo[x]"], [
        s,
        a.params,
        c
    ]), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: d().auth().action("login").get(T),
        mutationFn: y,
        onSuccess: async ({ success: P, redirectTo: M, error: Q, successNotification: g })=>{
            P && (p == null || p("login-error"), g && (l == null || l(Ia(g)))), (Q || !P) && (l == null || l(io(Q))), x && P ? s === "legacy" ? i(x) : n({
                to: x,
                type: "replace"
            }) : M ? s === "legacy" ? i(M) : n({
                to: M,
                type: "replace"
            }) : s === "legacy" && i("/"), setTimeout(()=>{
                r();
            }, 32);
        },
        onError: (P)=>{
            l == null || l(io(P));
        },
        ...e === !0 ? {} : t,
        meta: {
            ...e === !0 ? {} : t == null ? void 0 : t.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useLogin", T)
        }
    }), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            ...d().auth().action("login").get(T),
            "v3LegacyAuthProviderCompatible"
        ],
        mutationFn: m,
        onSuccess: async (P)=>{
            x && i(x), P !== !1 && !x && (typeof P == "string" ? s === "legacy" ? i(P) : n({
                to: P,
                type: "replace"
            }) : s === "legacy" ? i("/") : n({
                to: "/",
                type: "replace"
            })), setTimeout(()=>{
                r();
            }, 32), p == null || p("login-error");
        },
        onError: (P)=>{
            l == null || l(io(P));
        },
        ...e ? t : {},
        meta: {
            ...e ? t == null ? void 0 : t.meta : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useLogin", T)
        }
    });
    return e ? f : v;
}
o(Ht, "useLogin");
var io = o((e)=>({
        message: (e == null ? void 0 : e.name) || "Login Error",
        description: (e == null ? void 0 : e.message) || "Invalid credentials",
        key: "login-error",
        type: "error"
    }), "buildNotification"), Ia = o((e)=>({
        message: e.message,
        description: e.description,
        key: "login-success",
        type: "success"
    }), "buildSuccessNotification");
;
;
function co({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
    let r = Dt(), s = oe(), n = Pe(), { replace: i } = he(), { register: a } = xe(), { register: u } = Ue(), { close: c, open: p } = He(), { keys: l, preferLegacyKeys: m } = Z(), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: l().auth().action("register").get(m),
        mutationFn: u,
        onSuccess: async ({ success: T, redirectTo: x, error: v, successNotification: f })=>{
            T && (c == null || c("register-error"), f && (p == null || p(Sa(f))), await r()), (v || !T) && (p == null || p(uo(v))), x ? s === "legacy" ? i(x) : n({
                to: x,
                type: "replace"
            }) : s === "legacy" && i("/");
        },
        onError: (T)=>{
            p == null || p(uo(T));
        },
        ...e === !0 ? {} : t,
        meta: {
            ...e === !0 ? {} : t == null ? void 0 : t.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useRegister", m)
        }
    }), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            ...l().auth().action("register").get(m),
            "v3LegacyAuthProviderCompatible"
        ],
        mutationFn: a,
        onSuccess: async (T)=>{
            T !== !1 && (T ? s === "legacy" ? i(T) : n({
                to: T,
                type: "replace"
            }) : s === "legacy" ? i("/") : n({
                to: "/",
                type: "replace"
            }), await r(), c == null || c("register-error"));
        },
        onError: (T)=>{
            p == null || p(uo(T));
        },
        ...e ? t : {},
        meta: {
            ...e ? t == null ? void 0 : t.meta : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useRegister", m)
        }
    });
    return e ? d : y;
}
o(co, "useRegister");
var uo = o((e)=>({
        message: (e == null ? void 0 : e.name) || "Register Error",
        description: (e == null ? void 0 : e.message) || "Error while registering",
        key: "register-error",
        type: "error"
    }), "buildNotification"), Sa = o((e)=>({
        message: e.message,
        description: e.description,
        key: "register-success",
        type: "success"
    }), "buildSuccessNotification");
;
;
function lo({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
    let r = oe(), s = Pe(), { replace: n } = he(), { forgotPassword: i } = xe(), { forgotPassword: a } = Ue(), { close: u, open: c } = He(), { keys: p, preferLegacyKeys: l } = Z(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: p().auth().action("forgotPassword").get(l),
        mutationFn: a,
        onSuccess: ({ success: d, redirectTo: T, error: x, successNotification: v })=>{
            d && (u == null || u("forgot-password-error"), v && (c == null || c(Aa(v)))), (x || !d) && (c == null || c(po(x))), T && (r === "legacy" ? n(T) : s({
                to: T,
                type: "replace"
            }));
        },
        onError: (d)=>{
            c == null || c(po(d));
        },
        ...e === !0 ? {} : t,
        meta: {
            ...e === !0 ? {} : t == null ? void 0 : t.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useForgotPassword", l)
        }
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            ...p().auth().action("forgotPassword").get(l),
            "v3LegacyAuthProviderCompatible"
        ],
        mutationFn: i,
        onSuccess: (d)=>{
            d !== !1 && d && (r === "legacy" ? n(d) : s({
                to: d,
                type: "replace"
            })), u == null || u("forgot-password-error");
        },
        onError: (d)=>{
            c == null || c(po(d));
        },
        ...e ? t : {},
        meta: {
            ...e ? t == null ? void 0 : t.meta : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useForgotPassword", l)
        }
    });
    return e ? y : m;
}
o(lo, "useForgotPassword");
var po = o((e)=>({
        message: (e == null ? void 0 : e.name) || "Forgot Password Error",
        description: (e == null ? void 0 : e.message) || "Error while resetting password",
        key: "forgot-password-error",
        type: "error"
    }), "buildNotification"), Aa = o((e)=>({
        message: e.message,
        description: e.description,
        key: "forgot-password-success",
        type: "success"
    }), "buildSuccessNotification");
;
;
;
;
function fo({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
    let r = oe(), s = Pe(), { replace: n } = he(), { updatePassword: i } = xe(), { updatePassword: a } = Ue(), { close: u, open: c } = He(), { keys: p, preferLegacyKeys: l } = Z(), m = Te(), { useLocation: y } = pe(), { search: d } = y(), T = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "fo.useMemo[T]": ()=>r === "legacy" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(d, {
                ignoreQueryPrefix: !0
            }) ?? {} : m.params ?? {}
    }["fo.useMemo[T]"], [
        d,
        m,
        r
    ]), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: p().auth().action("updatePassword").get(l),
        mutationFn: async (f)=>a == null ? void 0 : a({
                ...T,
                ...f
            }),
        onSuccess: ({ success: f, redirectTo: P, error: M, successNotification: Q })=>{
            f && (u == null || u("update-password-error"), Q && (c == null || c(Qa(Q)))), (M || !f) && (c == null || c(mo(M))), P && (r === "legacy" ? n(P) : s({
                to: P,
                type: "replace"
            }));
        },
        onError: (f)=>{
            c == null || c(mo(f));
        },
        ...e === !0 ? {} : t,
        meta: {
            ...e === !0 ? {} : t == null ? void 0 : t.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useUpdatePassword", l)
        }
    }), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            ...p().auth().action("updatePassword").get(l),
            "v3LegacyAuthProviderCompatible"
        ],
        mutationFn: async (f)=>i == null ? void 0 : i({
                ...T,
                ...f
            }),
        onSuccess: (f)=>{
            f !== !1 && f && (r === "legacy" ? n(f) : s({
                to: f,
                type: "replace"
            })), u == null || u("update-password-error");
        },
        onError: (f)=>{
            c == null || c(mo(f));
        },
        ...e ? t : {},
        meta: {
            ...e ? t == null ? void 0 : t.meta : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useUpdatePassword", l)
        }
    });
    return e ? v : x;
}
o(fo, "useUpdatePassword");
var mo = o((e)=>({
        message: (e == null ? void 0 : e.name) || "Update Password Error",
        description: (e == null ? void 0 : e.message) || "Error while updating password",
        key: "update-password-error",
        type: "error"
    }), "buildNotification"), Qa = o((e)=>({
        message: e.message,
        description: e.description,
        key: "update-password-success",
        type: "success"
    }), "buildSuccessNotification");
;
;
function wr({ v3LegacyAuthProviderCompatible: e = !1, params: t } = {}) {
    let { checkAuth: r } = xe(), { check: s } = Ue(), { keys: n, preferLegacyKeys: i } = Z(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: n().auth().action("check").params(t).get(i),
        queryFn: async ()=>await (s == null ? void 0 : s(t)) ?? {},
        retry: !1,
        enabled: !e,
        meta: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useIsAuthenticated", i)
        }
    }), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            ...n().auth().action("check").params(t).get(i),
            "v3LegacyAuthProviderCompatible"
        ],
        queryFn: async ()=>await (r == null ? void 0 : r(t)) ?? {},
        retry: !1,
        enabled: e,
        meta: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useIsAuthenticated", i)
        }
    });
    return e ? u : a;
}
o(wr, "useIsAuthenticated");
var Va = wr;
;
;
function Re({ v3LegacyAuthProviderCompatible: e = !1 } = {}) {
    let t = oe(), r = Pe(), { replace: s } = he(), { checkError: n } = xe(), { onError: i } = Ue(), { keys: a, preferLegacyKeys: u } = Z(), { mutate: c } = Mr({
        v3LegacyAuthProviderCompatible: !!e
    }), { mutate: p } = Mr({
        v3LegacyAuthProviderCompatible: !!e
    }), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: a().auth().action("onError").get(u),
        ...i ? {
            mutationFn: i,
            onSuccess: ({ logout: y, redirectTo: d })=>{
                if (y) {
                    p({
                        redirectPath: d
                    });
                    return;
                }
                if (d) {
                    t === "legacy" ? s(d) : r({
                        to: d,
                        type: "replace"
                    });
                    return;
                }
            }
        } : {
            mutationFn: ()=>({})
        },
        meta: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useOnError", u)
        }
    }), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            ...a().auth().action("onError").get(u),
            "v3LegacyAuthProviderCompatible"
        ],
        mutationFn: n,
        onError: (y)=>{
            c({
                redirectPath: y
            });
        },
        meta: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useOnError", u)
        }
    });
    return e ? m : l;
}
o(Re, "useOnError");
var Na = Re;
var yo = o(()=>{
    let { isProvided: e } = xe(), { isProvided: t } = Ue();
    return !!(t || e);
}, "useIsExistAuthentication");
;
;
;
var fe = o(({ enabled: e, isLoading: t, interval: r, onInterval: s })=>{
    let [n, i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0), { options: a } = ge(), { overtime: u } = a, c = r ?? u.interval, p = s ?? (u == null ? void 0 : u.onInterval), l = typeof e < "u" ? e : typeof u.enabled < "u" ? u.enabled : !0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let m;
        return l && t && (m = setInterval(()=>{
            i((y)=>y === void 0 ? c : y + c);
        }, c)), ()=>{
            typeof m < "u" && clearInterval(m), i(void 0);
        };
    }, [
        t,
        c,
        l
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        p && n && p(n);
    }, [
        n
    ]), {
        elapsedTime: n
    };
}, "useLoadingOvertime");
var $t = o(({ resource: e, config: t, filters: r, hasPagination: s, pagination: n, sorters: i, queryOptions: a, successNotification: u, errorNotification: c, meta: p, metaData: l, liveMode: m, onLiveEvent: y, liveParams: d, dataProviderName: T, overtimeOptions: x } = {})=>{
    let { resources: v, resource: f, identifier: P } = q(e), M = le(), Q = z(), g = ie(), { mutate: C } = Re({
        v3LegacyAuthProviderCompatible: !!(g != null && g.isLegacy)
    }), h = Ce(), D = ue(), { keys: k, preferLegacyKeys: E } = Z(), L = ee(P, T, v), U = I(p, l), w = I(r, t == null ? void 0 : t.filters), N = I(i, t == null ? void 0 : t.sort), b = I(s, t == null ? void 0 : t.hasPagination), F = Wt({
        pagination: n,
        configPagination: t == null ? void 0 : t.pagination,
        hasPagination: b
    }), V = F.mode === "server", G = D({
        resource: f,
        meta: U
    }), W = {
        meta: G,
        metaData: G,
        filters: w,
        hasPagination: V,
        pagination: F,
        sorters: N,
        config: {
            ...t,
            sort: N
        }
    }, K = (a == null ? void 0 : a.enabled) === void 0 || (a == null ? void 0 : a.enabled) === !0, { getList: j } = M(L);
    Pt({
        resource: P,
        types: [
            "*"
        ],
        params: {
            meta: G,
            metaData: G,
            pagination: F,
            hasPagination: V,
            sort: N,
            sorters: N,
            filters: w,
            subscriptionType: "useList",
            ...d
        },
        channel: `resources/${f == null ? void 0 : f.name}`,
        enabled: K,
        liveMode: m,
        onLiveEvent: y,
        dataProviderName: L,
        meta: {
            ...p,
            dataProviderName: T
        }
    });
    let re = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: k().data(L).resource(P ?? "").action("list").params({
            ...U || {},
            filters: w,
            hasPagination: V,
            ...V && {
                pagination: F
            },
            ...i && {
                sorters: i
            },
            ...(t == null ? void 0 : t.sort) && {
                sort: t == null ? void 0 : t.sort
            }
        }).get(E),
        queryFn: (R)=>{
            let S = {
                ...G,
                queryContext: je(R)
            };
            return j({
                resource: (f == null ? void 0 : f.name) ?? "",
                pagination: F,
                hasPagination: V,
                filters: w,
                sort: N,
                sorters: N,
                meta: S,
                metaData: S
            });
        },
        ...a,
        enabled: typeof (a == null ? void 0 : a.enabled) < "u" ? a == null ? void 0 : a.enabled : !!(f != null && f.name),
        select: (R)=>{
            var X;
            let S = R, { current: B, mode: H, pageSize: $ } = F;
            return H === "client" && (S = {
                ...S,
                data: S.data.slice((B - 1) * $, B * $),
                total: S.total
            }), a != null && a.select ? (X = a == null ? void 0 : a.select) == null ? void 0 : X.call(a, S) : S;
        },
        onSuccess: (R)=>{
            var B;
            (B = a == null ? void 0 : a.onSuccess) == null || B.call(a, R);
            let S = typeof u == "function" ? u(R, W, P) : u;
            h(S);
        },
        onError: (R)=>{
            var B;
            C(R), (B = a == null ? void 0 : a.onError) == null || B.call(a, R);
            let S = typeof c == "function" ? c(R, W, P) : c;
            h(S, {
                key: `${P}-useList-notification`,
                message: Q("notifications.error", {
                    statusCode: R.statusCode
                }, `Error (status code: ${R.statusCode})`),
                description: R.message,
                type: "error"
            });
        },
        meta: {
            ...a == null ? void 0 : a.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useList", E, f == null ? void 0 : f.name)
        }
    }), { elapsedTime: te } = fe({
        ...x,
        isLoading: re.isFetching
    });
    return {
        ...re,
        overtime: {
            elapsedTime: te
        }
    };
}, "useList");
;
;
var zt = o(({ resource: e, id: t, queryOptions: r, successNotification: s, errorNotification: n, meta: i, metaData: a, liveMode: u, onLiveEvent: c, liveParams: p, dataProviderName: l, overtimeOptions: m })=>{
    let { resources: y, resource: d, identifier: T } = q(e), x = le(), v = z(), f = ie(), { mutate: P } = Re({
        v3LegacyAuthProviderCompatible: !!(f != null && f.isLegacy)
    }), M = Ce(), Q = ue(), { keys: g, preferLegacyKeys: C } = Z(), h = I(i, a), D = ee(T, l, y), { getOne: k } = x(D), E = Q({
        resource: d,
        meta: h
    });
    Pt({
        resource: T,
        types: [
            "*"
        ],
        channel: `resources/${d == null ? void 0 : d.name}`,
        params: {
            ids: t ? [
                t
            ] : [],
            id: t,
            meta: E,
            metaData: E,
            subscriptionType: "useOne",
            ...p
        },
        enabled: typeof (r == null ? void 0 : r.enabled) < "u" ? r == null ? void 0 : r.enabled : typeof (d == null ? void 0 : d.name) < "u" && typeof t < "u",
        liveMode: u,
        onLiveEvent: c,
        dataProviderName: D,
        meta: {
            ...i,
            dataProviderName: l
        }
    });
    let L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: g().data(D).resource(T ?? "").action("one").id(t ?? "").params({
            ...h || {}
        }).get(C),
        queryFn: (w)=>k({
                resource: (d == null ? void 0 : d.name) ?? "",
                id: t,
                meta: {
                    ...E,
                    queryContext: je(w)
                },
                metaData: {
                    ...E,
                    queryContext: je(w)
                }
            }),
        ...r,
        enabled: typeof (r == null ? void 0 : r.enabled) < "u" ? r == null ? void 0 : r.enabled : typeof t < "u",
        onSuccess: (w)=>{
            var b;
            (b = r == null ? void 0 : r.onSuccess) == null || b.call(r, w);
            let N = typeof s == "function" ? s(w, {
                id: t,
                ...E
            }, T) : s;
            M(N);
        },
        onError: (w)=>{
            var b;
            P(w), (b = r == null ? void 0 : r.onError) == null || b.call(r, w);
            let N = typeof n == "function" ? n(w, {
                id: t,
                ...E
            }, T) : n;
            M(N, {
                key: `${t}-${T}-getOne-notification`,
                message: v("notifications.error", {
                    statusCode: w.statusCode
                }, `Error (status code: ${w.statusCode})`),
                description: w.message,
                type: "error"
            });
        },
        meta: {
            ...r == null ? void 0 : r.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useOne", C, d == null ? void 0 : d.name)
        }
    }), { elapsedTime: U } = fe({
        ...m,
        isLoading: L.isFetching
    });
    return {
        ...L,
        overtime: {
            elapsedTime: U
        }
    };
}, "useOne");
;
;
;
var go = o(({ resource: e, ids: t, queryOptions: r, successNotification: s, errorNotification: n, meta: i, metaData: a, liveMode: u, onLiveEvent: c, liveParams: p, dataProviderName: l, overtimeOptions: m })=>{
    let { resources: y, resource: d, identifier: T } = q(e), x = le(), v = z(), f = ie(), { mutate: P } = Re({
        v3LegacyAuthProviderCompatible: !!(f != null && f.isLegacy)
    }), M = Ce(), Q = ue(), { keys: g, preferLegacyKeys: C } = Z(), h = I(i, a), D = ee(T, l, y), k = (r == null ? void 0 : r.enabled) === void 0 || (r == null ? void 0 : r.enabled) === !0, { getMany: E, getOne: L } = x(D), U = Q({
        resource: d,
        meta: h
    }), w = Array.isArray(t), N = !!(d != null && d.name), b = (r == null ? void 0 : r.enabled) === !0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!w && !b, za(t, d == null ? void 0 : d.name)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!N && !b, _a()), Pt({
        resource: T,
        types: [
            "*"
        ],
        params: {
            ids: t ?? [],
            meta: U,
            metaData: U,
            subscriptionType: "useMany",
            ...p
        },
        channel: `resources/${(d == null ? void 0 : d.name) ?? ""}`,
        enabled: k,
        liveMode: u,
        onLiveEvent: c,
        dataProviderName: D,
        meta: {
            ...i,
            dataProviderName: l
        }
    });
    let F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: g().data(D).resource(T).action("many").ids(...t ?? []).params({
            ...h || {}
        }).get(C),
        queryFn: (G)=>{
            let W = {
                ...U,
                queryContext: je(G)
            };
            return E ? E({
                resource: d == null ? void 0 : d.name,
                ids: t,
                meta: W,
                metaData: W
            }) : lt(t.map((K)=>L({
                    resource: d == null ? void 0 : d.name,
                    id: K,
                    meta: W,
                    metaData: W
                })));
        },
        enabled: w && N,
        ...r,
        onSuccess: (G)=>{
            var K;
            (K = r == null ? void 0 : r.onSuccess) == null || K.call(r, G);
            let W = typeof s == "function" ? s(G, t, T) : s;
            M(W);
        },
        onError: (G)=>{
            var K;
            P(G), (K = r == null ? void 0 : r.onError) == null || K.call(r, G);
            let W = typeof n == "function" ? n(G, t, T) : n;
            M(W, {
                key: `${t[0]}-${T}-getMany-notification`,
                message: v("notifications.error", {
                    statusCode: G.statusCode
                }, `Error (status code: ${G.statusCode})`),
                description: G.message,
                type: "error"
            });
        },
        meta: {
            ...r == null ? void 0 : r.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useMany", C, d == null ? void 0 : d.name)
        }
    }), { elapsedTime: V } = fe({
        ...m,
        isLoading: F.isFetching
    });
    return {
        ...F,
        overtime: {
            elapsedTime: V
        }
    };
}, "useMany"), za = o((e, t)=>`[useMany]: Missing "ids" prop. Expected an array of ids, but got "${typeof e}". Resource: "${t}"

See https://refine.dev/docs/data/hooks/use-many/#ids-`, "idsWarningMessage"), _a = o(()=>`[useMany]: Missing "resource" prop. Expected a string, but got undefined.

See https://refine.dev/docs/data/hooks/use-many/#resource-`, "resourceWarningMessage");
;
;
var Os = ((s)=>(s.ADD = "ADD", s.REMOVE = "REMOVE", s.DECREASE_NOTIFICATION_SECOND = "DECREASE_NOTIFICATION_SECOND", s))(Os || {});
var To = o(({ id: e, resource: t, values: r, dataProviderName: s, successNotification: n, errorNotification: i, meta: a, metaData: u, mutationMode: c, undoableTimeout: p, onCancel: l, optimisticUpdateMap: m, invalidates: y, mutationOptions: d, overtimeOptions: T } = {})=>{
    let { resources: x, select: v } = q(), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(), P = le(), { mutationMode: M, undoableTimeout: Q } = _e(), g = z(), C = ie(), { mutate: h } = Re({
        v3LegacyAuthProviderCompatible: !!(C != null && C.isLegacy)
    }), D = Ye(), { log: k } = Je(), { notificationDispatch: E } = ut(), L = Ce(), U = Ae(), w = ue(), { options: { textTransformers: N } } = ge(), { keys: b, preferLegacyKeys: F } = Z(), V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ id: R = e, values: S = r, resource: B = t, mutationMode: H = c, undoableTimeout: $ = p, onCancel: X = l, meta: ne = a, metaData: Y = u, dataProviderName: O = s })=>{
            if (typeof R > "u") throw jt;
            if (!S) throw Ir;
            if (!B) throw _t;
            let { resource: _, identifier: ae } = v(B), J = w({
                resource: _,
                meta: I(ne, Y)
            }), we = H ?? M, ye = $ ?? Q;
            return we !== "undoable" ? P(ee(ae, O, x)).update({
                resource: _.name,
                id: R,
                variables: S,
                meta: J,
                metaData: J
            }) : new Promise((Ne, se)=>{
                let me = o(()=>{
                    P(ee(ae, O, x)).update({
                        resource: _.name,
                        id: R,
                        variables: S,
                        meta: J,
                        metaData: J
                    }).then((ve)=>Ne(ve)).catch((ve)=>se(ve));
                }, "doMutation"), ce = o(()=>{
                    se({
                        message: "mutationCancelled"
                    });
                }, "cancelMutation");
                X && X(ce), E({
                    type: "ADD",
                    payload: {
                        id: R,
                        resource: ae,
                        cancelMutation: ce,
                        doMutation: me,
                        seconds: ye,
                        isSilent: !!X
                    }
                });
            });
        },
        onMutate: async ({ resource: R = t, id: S = e, mutationMode: B = c, values: H = r, dataProviderName: $ = s, meta: X = a, metaData: ne = u, optimisticUpdateMap: Y = m ?? {
            list: !0,
            many: !0,
            detail: !0
        } })=>{
            if (typeof S > "u") throw jt;
            if (!H) throw Ir;
            if (!R) throw _t;
            let { identifier: O } = v(R), { gqlMutation: _, gqlQuery: ae, ...J } = I(X, ne) ?? {}, we = dt(F)(O, ee(O, $, x), J), ye = b().data(ee(O, $, x)).resource(O), Ve = f.getQueriesData(ye.get(F)), Ne = B ?? M;
            return await f.cancelQueries(ye.get(F), void 0, {
                silent: !0
            }), Ne !== "pessimistic" && (Y.list && f.setQueriesData(ye.action("list").params(J ?? {}).get(F), (se)=>{
                if (typeof Y.list == "function") return Y.list(se, H, S);
                if (!se) return null;
                let me = se.data.map((ce)=>{
                    var ve;
                    return ((ve = ce.id) == null ? void 0 : ve.toString()) === (S == null ? void 0 : S.toString()) ? {
                        id: S,
                        ...ce,
                        ...H
                    } : ce;
                });
                return {
                    ...se,
                    data: me
                };
            }), Y.many && f.setQueriesData(ye.action("many").get(F), (se)=>{
                if (typeof Y.many == "function") return Y.many(se, H, S);
                if (!se) return null;
                let me = se.data.map((ce)=>{
                    var ve;
                    return ((ve = ce.id) == null ? void 0 : ve.toString()) === (S == null ? void 0 : S.toString()) && (ce = {
                        id: S,
                        ...ce,
                        ...H
                    }), ce;
                });
                return {
                    ...se,
                    data: me
                };
            }), Y.detail && f.setQueriesData(ye.action("one").id(S).params(J ?? {}).get(F), (se)=>typeof Y.detail == "function" ? Y.detail(se, H, S) : se ? {
                    ...se,
                    data: {
                        ...se.data,
                        ...H
                    }
                } : null)), {
                previousQueries: Ve,
                queryKey: we
            };
        },
        onSettled: (R, S, B, H)=>{
            var _;
            let { id: $ = e, resource: X = t, dataProviderName: ne = s, invalidates: Y = y ?? [
                "list",
                "many",
                "detail"
            ] } = B;
            if (typeof $ > "u") throw jt;
            if (!X) throw _t;
            let { identifier: O } = v(X);
            U({
                resource: O,
                dataProviderName: ee(O, ne, x),
                invalidates: Y,
                id: $
            }), E({
                type: "REMOVE",
                payload: {
                    id: $,
                    resource: O
                }
            }), (_ = d == null ? void 0 : d.onSettled) == null || _.call(d, R, S, B, H);
        },
        onSuccess: (R, S, B)=>{
            var Ke, Ct;
            let { id: H = e, resource: $ = t, successNotification: X = n, dataProviderName: ne = s, values: Y = r, meta: O = a, metaData: _ = u } = S;
            if (typeof H > "u") throw jt;
            if (!Y) throw Ir;
            if (!$) throw _t;
            let { resource: ae, identifier: J } = v($), we = N.singular(J), ye = ee(J, ne, x), Ve = w({
                resource: ae,
                meta: I(O, _)
            }), Ne = typeof X == "function" ? X(R, {
                id: H,
                values: Y
            }, J) : X;
            L(Ne, {
                key: `${H}-${J}-notification`,
                description: g("notifications.success", "Successful"),
                message: g("notifications.editSuccess", {
                    resource: g(`${J}.${J}`, we)
                }, `Successfully updated ${we}`),
                type: "success"
            }), D == null || D({
                channel: `resources/${ae.name}`,
                type: "updated",
                payload: {
                    ids: (Ke = R.data) != null && Ke.id ? [
                        R.data.id
                    ] : void 0
                },
                date: new Date,
                meta: {
                    ...Ve,
                    dataProviderName: ye
                }
            });
            let se;
            if (B) {
                let Ge = f.getQueryData(B.queryKey.detail(H));
                se = Object.keys(Y || {}).reduce((Tt, xt)=>{
                    var bt;
                    return Tt[xt] = (bt = Ge == null ? void 0 : Ge.data) == null ? void 0 : bt[xt], Tt;
                }, {});
            }
            let { fields: me, operation: ce, variables: ve, ...rt } = Ve || {};
            k == null || k.mutate({
                action: "update",
                resource: ae.name,
                data: Y,
                previousData: se,
                meta: {
                    id: H,
                    dataProviderName: ye,
                    ...rt
                }
            }), (Ct = d == null ? void 0 : d.onSuccess) == null || Ct.call(d, R, S, B);
        },
        onError: (R, S, B)=>{
            var O;
            let { id: H = e, resource: $ = t, errorNotification: X = i, values: ne = r } = S;
            if (typeof H > "u") throw jt;
            if (!ne) throw Ir;
            if (!$) throw _t;
            let { identifier: Y } = v($);
            if (B) for (let _ of B.previousQueries)f.setQueryData(_[0], _[1]);
            if (R.message !== "mutationCancelled") {
                h == null || h(R);
                let _ = N.singular(Y), ae = typeof X == "function" ? X(R, {
                    id: H,
                    values: ne
                }, Y) : X;
                L(ae, {
                    key: `${H}-${Y}-notification`,
                    message: g("notifications.editError", {
                        resource: g(`${Y}.${Y}`, _),
                        statusCode: R.statusCode
                    }, `Error when updating ${_} (status code: ${R.statusCode})`),
                    description: R.message,
                    type: "error"
                });
            }
            (O = d == null ? void 0 : d.onError) == null || O.call(d, R, S, B);
        },
        mutationKey: b().data().mutation("update").get(F),
        ...d,
        meta: {
            ...d == null ? void 0 : d.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useUpdate", F)
        }
    }), { mutate: G, mutateAsync: W, ...K } = V, { elapsedTime: j } = fe({
        ...T,
        isLoading: K.isLoading
    });
    return {
        ...K,
        mutate: o((R, S)=>G(R || {}, S), "handleMutation"),
        mutateAsync: o((R, S)=>W(R || {}, S), "handleMutateAsync"),
        overtime: {
            elapsedTime: j
        }
    };
}, "useUpdate"), _t = new Error("[useUpdate]: `resource` is not defined or not matched but is required"), jt = new Error("[useUpdate]: `id` is not defined but is required in edit and clone actions"), Ir = new Error("[useUpdate]: `values` is not provided but is required");
;
;
var Xt = o(({ resource: e, values: t, dataProviderName: r, successNotification: s, errorNotification: n, invalidates: i, meta: a, metaData: u, mutationOptions: c, overtimeOptions: p } = {})=>{
    let l = ie(), { mutate: m } = Re({
        v3LegacyAuthProviderCompatible: !!(l != null && l.isLegacy)
    }), y = le(), d = Ae(), { resources: T, select: x } = q(), v = z(), f = Ye(), { log: P } = Je(), M = Ce(), Q = ue(), { options: { textTransformers: g } } = ge(), { keys: C, preferLegacyKeys: h } = Z(), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ resource: b = e, values: F = t, meta: V = a, metaData: G = u, dataProviderName: W = r })=>{
            if (!F) throw ho;
            if (!b) throw xo;
            let { resource: K, identifier: j } = x(b), re = Q({
                resource: K,
                meta: I(V, G)
            });
            return y(ee(j, W, T)).create({
                resource: K.name,
                variables: F,
                meta: re,
                metaData: re
            });
        },
        onSuccess: (b, F, V)=>{
            var J, we, ye;
            let { resource: G = e, successNotification: W = s, dataProviderName: K = r, invalidates: j = i ?? [
                "list",
                "many"
            ], values: re = t, meta: te = a, metaData: R = u } = F;
            if (!re) throw ho;
            if (!G) throw xo;
            let { resource: S, identifier: B } = x(G), H = g.singular(B), $ = ee(B, K, T), X = Q({
                resource: S,
                meta: I(te, R)
            }), ne = typeof W == "function" ? W(b, re, B) : W;
            M(ne, {
                key: `create-${B}-notification`,
                message: v("notifications.createSuccess", {
                    resource: v(`${B}.${B}`, H)
                }, `Successfully created ${H}`),
                description: v("notifications.success", "Success"),
                type: "success"
            }), d({
                resource: B,
                dataProviderName: $,
                invalidates: j
            }), f == null || f({
                channel: `resources/${S.name}`,
                type: "created",
                payload: {
                    ids: (J = b == null ? void 0 : b.data) != null && J.id ? [
                        b.data.id
                    ] : void 0
                },
                date: new Date,
                meta: {
                    ...X,
                    dataProviderName: $
                }
            });
            let { fields: Y, operation: O, variables: _, ...ae } = X || {};
            P == null || P.mutate({
                action: "create",
                resource: S.name,
                data: re,
                meta: {
                    dataProviderName: $,
                    id: ((we = b == null ? void 0 : b.data) == null ? void 0 : we.id) ?? void 0,
                    ...ae
                }
            }), (ye = c == null ? void 0 : c.onSuccess) == null || ye.call(c, b, F, V);
        },
        onError: (b, F, V)=>{
            var R;
            let { resource: G = e, errorNotification: W = n, values: K = t } = F;
            if (!K) throw ho;
            if (!G) throw xo;
            m(b);
            let { identifier: j } = x(G), re = g.singular(j), te = typeof W == "function" ? W(b, K, j) : W;
            M(te, {
                key: `create-${j}-notification`,
                description: b.message,
                message: v("notifications.createError", {
                    resource: v(`${j}.${j}`, re),
                    statusCode: b.statusCode
                }, `There was an error creating ${re} (status code: ${b.statusCode})`),
                type: "error"
            }), (R = c == null ? void 0 : c.onError) == null || R.call(c, b, F, V);
        },
        mutationKey: C().data().mutation("create").get(h),
        ...c,
        meta: {
            ...c == null ? void 0 : c.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useCreate", h)
        }
    }), { mutate: k, mutateAsync: E, ...L } = D, { elapsedTime: U } = fe({
        ...p,
        isLoading: L.isLoading
    });
    return {
        ...L,
        mutate: o((b, F)=>k(b || {}, F), "handleMutation"),
        mutateAsync: o((b, F)=>E(b || {}, F), "handleMutateAsync"),
        overtime: {
            elapsedTime: U
        }
    };
}, "useCreate"), xo = new Error("[useCreate]: `resource` is not defined or not matched but is required"), ho = new Error("[useCreate]: `values` is not provided but is required");
;
;
var Po = o(({ mutationOptions: e, overtimeOptions: t } = {})=>{
    let r = ie(), { mutate: s } = Re({
        v3LegacyAuthProviderCompatible: !!(r != null && r.isLegacy)
    }), n = le(), { resources: i, select: a } = q(), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(), { mutationMode: c, undoableTimeout: p } = _e(), { notificationDispatch: l } = ut(), m = z(), y = Ye(), { log: d } = Je(), T = Ce(), x = Ae(), v = ue(), { options: { textTransformers: f } } = ge(), { keys: P, preferLegacyKeys: M } = Z(), Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ id: C, mutationMode: h, undoableTimeout: D, resource: k, onCancel: E, meta: L, metaData: U, dataProviderName: w, values: N })=>{
            let { resource: b, identifier: F } = a(k), V = v({
                resource: b,
                meta: I(L, U)
            }), G = h ?? c, W = D ?? p;
            return G !== "undoable" ? n(ee(F, w, i)).deleteOne({
                resource: b.name,
                id: C,
                meta: V,
                metaData: V,
                variables: N
            }) : new Promise((j, re)=>{
                let te = o(()=>{
                    n(ee(F, w, i)).deleteOne({
                        resource: b.name,
                        id: C,
                        meta: V,
                        metaData: V,
                        variables: N
                    }).then((S)=>j(S)).catch((S)=>re(S));
                }, "doMutation"), R = o(()=>{
                    re({
                        message: "mutationCancelled"
                    });
                }, "cancelMutation");
                E && E(R), l({
                    type: "ADD",
                    payload: {
                        id: C,
                        resource: F,
                        cancelMutation: R,
                        doMutation: te,
                        seconds: W,
                        isSilent: !!E
                    }
                });
            });
        },
        onMutate: async ({ id: C, resource: h, mutationMode: D, dataProviderName: k, meta: E, metaData: L })=>{
            let { identifier: U } = a(h), { gqlMutation: w, gqlQuery: N, ...b } = I(E, L) ?? {}, F = dt(M)(U, ee(U, k, i), b), V = P().data(ee(U, k, i)).resource(U), G = D ?? c;
            await u.cancelQueries(V.get(M), void 0, {
                silent: !0
            });
            let W = u.getQueriesData(V.get(M));
            return G !== "pessimistic" && (u.setQueriesData(V.action("list").params(b ?? {}).get(M), (K)=>K ? {
                    data: K.data.filter((re)=>{
                        var te;
                        return ((te = re.id) == null ? void 0 : te.toString()) !== C.toString();
                    }),
                    total: K.total - 1
                } : null), u.setQueriesData(V.action("many").get(M), (K)=>{
                if (!K) return null;
                let j = K.data.filter((re)=>{
                    var te;
                    return ((te = re.id) == null ? void 0 : te.toString()) !== (C == null ? void 0 : C.toString());
                });
                return {
                    ...K,
                    data: j
                };
            })), {
                previousQueries: W,
                queryKey: F
            };
        },
        onSettled: (C, h, { id: D, resource: k, dataProviderName: E, invalidates: L = [
            "list",
            "many"
        ] })=>{
            let { identifier: U } = a(k);
            x({
                resource: U,
                dataProviderName: ee(U, E, i),
                invalidates: L
            }), l({
                type: "REMOVE",
                payload: {
                    id: D,
                    resource: U
                }
            });
        },
        onSuccess: (C, { id: h, resource: D, successNotification: k, dataProviderName: E, meta: L, metaData: U }, w)=>{
            let { resource: N, identifier: b } = a(D), F = f.singular(b), V = ee(b, E, i), G = v({
                resource: N,
                meta: I(L, U)
            });
            u.removeQueries(w == null ? void 0 : w.queryKey.detail(h));
            let W = typeof k == "function" ? k(C, h, b) : k;
            T(W, {
                key: `${h}-${b}-notification`,
                description: m("notifications.success", "Success"),
                message: m("notifications.deleteSuccess", {
                    resource: m(`${b}.${b}`, F)
                }, `Successfully deleted a ${F}`),
                type: "success"
            }), y == null || y({
                channel: `resources/${N.name}`,
                type: "deleted",
                payload: {
                    ids: [
                        h
                    ]
                },
                date: new Date,
                meta: {
                    ...G,
                    dataProviderName: V
                }
            });
            let { fields: K, operation: j, variables: re, ...te } = G || {};
            d == null || d.mutate({
                action: "delete",
                resource: N.name,
                meta: {
                    id: h,
                    dataProviderName: V,
                    ...te
                }
            }), u.removeQueries(w == null ? void 0 : w.queryKey.detail(h));
        },
        onError: (C, { id: h, resource: D, errorNotification: k }, E)=>{
            let { identifier: L } = a(D);
            if (E) for (let U of E.previousQueries)u.setQueryData(U[0], U[1]);
            if (C.message !== "mutationCancelled") {
                s(C);
                let U = f.singular(L), w = typeof k == "function" ? k(C, h, L) : k;
                T(w, {
                    key: `${h}-${L}-notification`,
                    message: m("notifications.deleteError", {
                        resource: U,
                        statusCode: C.statusCode
                    }, `Error (status code: ${C.statusCode})`),
                    description: C.message,
                    type: "error"
                });
            }
        },
        mutationKey: P().data().mutation("delete").get(M),
        ...e,
        meta: {
            ...e == null ? void 0 : e.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useDelete", M)
        }
    }), { elapsedTime: g } = fe({
        ...t,
        isLoading: Q.isLoading
    });
    return {
        ...Q,
        overtime: {
            elapsedTime: g
        }
    };
}, "useDelete");
;
;
var bo = o(({ resource: e, values: t, dataProviderName: r, successNotification: s, errorNotification: n, meta: i, metaData: a, invalidates: u, mutationOptions: c, overtimeOptions: p } = {})=>{
    let l = le(), { resources: m, select: y } = q(), d = z(), T = Ye(), x = Ce(), v = Ae(), { log: f } = Je(), P = ue(), { options: { textTransformers: M } } = ge(), { keys: Q, preferLegacyKeys: g } = Z(), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ resource: w = e, values: N = t, meta: b = i, metaData: F = a, dataProviderName: V = r })=>{
            if (!N) throw Co;
            if (!w) throw Ro;
            let { resource: G, identifier: W } = y(w), K = P({
                resource: G,
                meta: I(b, F)
            }), j = l(ee(W, V, m));
            return j.createMany ? j.createMany({
                resource: G.name,
                variables: N,
                meta: K,
                metaData: K
            }) : lt(N.map((re)=>j.create({
                    resource: G.name,
                    variables: re,
                    meta: K,
                    metaData: K
                })));
        },
        onSuccess: (w, N, b)=>{
            var ae;
            let { resource: F = e, successNotification: V = s, dataProviderName: G = r, invalidates: W = u ?? [
                "list",
                "many"
            ], values: K = t, meta: j = i, metaData: re = a } = N;
            if (!K) throw Co;
            if (!F) throw Ro;
            let { resource: te, identifier: R } = y(F), S = M.plural(R), B = ee(R, G, m), H = P({
                resource: te,
                meta: I(j, re)
            }), $ = typeof V == "function" ? V(w, K, R) : V;
            x($, {
                key: `createMany-${R}-notification`,
                message: d("notifications.createSuccess", {
                    resource: d(`${R}.${R}`, R)
                }, `Successfully created ${S}`),
                description: d("notifications.success", "Success"),
                type: "success"
            }), v({
                resource: R,
                dataProviderName: B,
                invalidates: W
            });
            let X = w == null ? void 0 : w.data.filter((J)=>(J == null ? void 0 : J.id) !== void 0).map((J)=>J.id);
            T == null || T({
                channel: `resources/${te.name}`,
                type: "created",
                payload: {
                    ids: X
                },
                date: new Date,
                meta: {
                    ...H,
                    dataProviderName: B
                }
            });
            let { fields: ne, operation: Y, variables: O, ..._ } = H || {};
            f == null || f.mutate({
                action: "createMany",
                resource: te.name,
                data: K,
                meta: {
                    dataProviderName: B,
                    ids: X,
                    ..._
                }
            }), (ae = c == null ? void 0 : c.onSuccess) == null || ae.call(c, w, N, b);
        },
        onError: (w, N, b)=>{
            var j;
            let { resource: F = e, errorNotification: V = n, values: G = t } = N;
            if (!G) throw Co;
            if (!F) throw Ro;
            let { identifier: W } = y(F), K = typeof V == "function" ? V(w, G, W) : V;
            x(K, {
                key: `createMany-${W}-notification`,
                description: w.message,
                message: d("notifications.createError", {
                    resource: d(`${W}.${W}`, W),
                    statusCode: w.statusCode
                }, `There was an error creating ${W} (status code: ${w.statusCode}`),
                type: "error"
            }), (j = c == null ? void 0 : c.onError) == null || j.call(c, w, N, b);
        },
        mutationKey: Q().data().mutation("createMany").get(g),
        ...c,
        meta: {
            ...c == null ? void 0 : c.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useCreateMany", g)
        }
    }), { mutate: h, mutateAsync: D, ...k } = C, { elapsedTime: E } = fe({
        ...p,
        isLoading: k.isLoading
    });
    return {
        ...k,
        mutate: o((w, N)=>h(w || {}, N), "handleMutation"),
        mutateAsync: o((w, N)=>D(w || {}, N), "handleMutateAsync"),
        overtime: {
            elapsedTime: E
        }
    };
}, "useCreateMany"), Ro = new Error("[useCreateMany]: `resource` is not defined or not matched but is required"), Co = new Error("[useCreateMany]: `values` is not provided but is required");
;
;
var ii = o(({ ids: e, resource: t, values: r, dataProviderName: s, successNotification: n, errorNotification: i, meta: a, metaData: u, mutationMode: c, undoableTimeout: p, onCancel: l, optimisticUpdateMap: m, invalidates: y, mutationOptions: d, overtimeOptions: T } = {})=>{
    let { resources: x, select: v } = q(), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(), P = le(), M = z(), { mutationMode: Q, undoableTimeout: g } = _e(), C = ie(), { mutate: h } = Re({
        v3LegacyAuthProviderCompatible: !!(C != null && C.isLegacy)
    }), { notificationDispatch: D } = ut(), k = Ye(), E = Ce(), L = Ae(), { log: U } = Je(), w = ue(), { options: { textTransformers: N } } = ge(), { keys: b, preferLegacyKeys: F } = Z(), V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ ids: R = e, values: S = r, resource: B = t, onCancel: H = l, mutationMode: $ = c, undoableTimeout: X = p, meta: ne = a, metaData: Y = u, dataProviderName: O = s })=>{
            if (!R) throw Yt;
            if (!S) throw Sr;
            if (!B) throw Zt;
            let { resource: _, identifier: ae } = v(B), J = w({
                resource: _,
                meta: I(ne, Y)
            }), we = $ ?? Q, ye = X ?? g, Ve = P(ee(ae, O, x)), Ne = o(()=>Ve.updateMany ? Ve.updateMany({
                    resource: _.name,
                    ids: R,
                    variables: S,
                    meta: J,
                    metaData: J
                }) : lt(R.map((me)=>Ve.update({
                        resource: _.name,
                        id: me,
                        variables: S,
                        meta: J,
                        metaData: J
                    }))), "mutationFn");
            return we !== "undoable" ? Ne() : new Promise((me, ce)=>{
                let ve = o(()=>{
                    Ne().then((Ke)=>me(Ke)).catch((Ke)=>ce(Ke));
                }, "doMutation"), rt = o(()=>{
                    ce({
                        message: "mutationCancelled"
                    });
                }, "cancelMutation");
                H && H(rt), D({
                    type: "ADD",
                    payload: {
                        id: R,
                        resource: ae,
                        cancelMutation: rt,
                        doMutation: ve,
                        seconds: ye,
                        isSilent: !!H
                    }
                });
            });
        },
        onMutate: async ({ resource: R = t, ids: S = e, values: B = r, mutationMode: H = c, dataProviderName: $ = s, meta: X = a, metaData: ne = u, optimisticUpdateMap: Y = m ?? {
            list: !0,
            many: !0,
            detail: !0
        } })=>{
            if (!S) throw Yt;
            if (!B) throw Sr;
            if (!R) throw Zt;
            let { identifier: O } = v(R), { gqlMutation: _, gqlQuery: ae, ...J } = I(X, ne) ?? {}, we = dt(F)(O, ee(O, $, x), J), ye = b().data(ee(O, $, x)).resource(O), Ve = H ?? Q;
            await f.cancelQueries(ye.get(F), void 0, {
                silent: !0
            });
            let Ne = f.getQueriesData(ye.get(F));
            if (Ve !== "pessimistic" && (Y.list && f.setQueriesData(ye.action("list").params(J ?? {}).get(F), (se)=>{
                if (typeof Y.list == "function") return Y.list(se, B, S);
                if (!se) return null;
                let me = se.data.map((ce)=>ce.id !== void 0 && S.filter((ve)=>ve !== void 0).map(String).includes(ce.id.toString()) ? {
                        ...ce,
                        ...B
                    } : ce);
                return {
                    ...se,
                    data: me
                };
            }), Y.many && f.setQueriesData(ye.action("many").get(F), (se)=>{
                if (typeof Y.many == "function") return Y.many(se, B, S);
                if (!se) return null;
                let me = se.data.map((ce)=>ce.id !== void 0 && S.filter((ve)=>ve !== void 0).map(String).includes(ce.id.toString()) ? {
                        ...ce,
                        ...B
                    } : ce);
                return {
                    ...se,
                    data: me
                };
            }), Y.detail)) for (let se of S)f.setQueriesData(ye.action("one").id(se).params(J ?? {}).get(F), (me)=>{
                if (typeof Y.detail == "function") return Y.detail(me, B, se);
                if (!me) return null;
                let ce = {
                    ...me.data,
                    ...B
                };
                return {
                    ...me,
                    data: ce
                };
            });
            return {
                previousQueries: Ne,
                queryKey: we
            };
        },
        onSettled: (R, S, B, H)=>{
            var _;
            let { ids: $ = e, resource: X = t, dataProviderName: ne = s, invalidates: Y = y } = B;
            if (!$) throw Yt;
            if (!X) throw Zt;
            let { identifier: O } = v(X);
            L({
                resource: O,
                invalidates: Y ?? [
                    "list",
                    "many"
                ],
                dataProviderName: ee(O, ne, x)
            }), $.forEach((ae)=>L({
                    resource: O,
                    invalidates: Y ?? [
                        "detail"
                    ],
                    dataProviderName: ee(O, ne, x),
                    id: ae
                })), D({
                type: "REMOVE",
                payload: {
                    id: $,
                    resource: O
                }
            }), (_ = d == null ? void 0 : d.onSettled) == null || _.call(d, R, S, B, H);
        },
        onSuccess: (R, S, B)=>{
            var Ke;
            let { ids: H = e, resource: $ = t, values: X = r, meta: ne = a, metaData: Y = u, dataProviderName: O = s, successNotification: _ = n } = S;
            if (!H) throw Yt;
            if (!X) throw Sr;
            if (!$) throw Zt;
            let { resource: ae, identifier: J } = v($), we = N.singular(J), ye = ee(J, O, x), Ve = w({
                resource: ae,
                meta: I(ne, Y)
            }), Ne = typeof _ == "function" ? _(R, {
                ids: H,
                values: X
            }, J) : _;
            E(Ne, {
                key: `${H}-${J}-notification`,
                description: M("notifications.success", "Successful"),
                message: M("notifications.editSuccess", {
                    resource: M(`${J}.${J}`, J)
                }, `Successfully updated ${we}`),
                type: "success"
            }), k == null || k({
                channel: `resources/${ae.name}`,
                type: "updated",
                payload: {
                    ids: H.map(String)
                },
                date: new Date,
                meta: {
                    ...Ve,
                    dataProviderName: ye
                }
            });
            let se = [];
            B && H.forEach((Ct)=>{
                let Ge = f.getQueryData(B.queryKey.detail(Ct));
                se.push(Object.keys(X || {}).reduce((Tt, xt)=>{
                    var bt;
                    return Tt[xt] = (bt = Ge == null ? void 0 : Ge.data) == null ? void 0 : bt[xt], Tt;
                }, {}));
            });
            let { fields: me, operation: ce, variables: ve, ...rt } = Ve || {};
            U == null || U.mutate({
                action: "updateMany",
                resource: ae.name,
                data: X,
                previousData: se,
                meta: {
                    ids: H,
                    dataProviderName: ye,
                    ...rt
                }
            }), (Ke = d == null ? void 0 : d.onSuccess) == null || Ke.call(d, R, S, B);
        },
        onError: (R, S, B)=>{
            var O;
            let { ids: H = e, resource: $ = t, errorNotification: X = i, values: ne = r } = S;
            if (!H) throw Yt;
            if (!ne) throw Sr;
            if (!$) throw Zt;
            let { identifier: Y } = v($);
            if (B) for (let _ of B.previousQueries)f.setQueryData(_[0], _[1]);
            if (R.message !== "mutationCancelled") {
                h == null || h(R);
                let _ = N.singular(Y), ae = typeof X == "function" ? X(R, {
                    ids: H,
                    values: ne
                }, Y) : X;
                E(ae, {
                    key: `${H}-${Y}-updateMany-error-notification`,
                    message: M("notifications.editError", {
                        resource: _,
                        statusCode: R.statusCode
                    }, `Error when updating ${_} (status code: ${R.statusCode})`),
                    description: R.message,
                    type: "error"
                });
            }
            (O = d == null ? void 0 : d.onError) == null || O.call(d, R, S, B);
        },
        mutationKey: b().data().mutation("updateMany").get(F),
        ...d,
        meta: {
            ...d == null ? void 0 : d.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useUpdateMany", F)
        }
    }), { mutate: G, mutateAsync: W, ...K } = V, { elapsedTime: j } = fe({
        ...T,
        isLoading: K.isLoading
    });
    return {
        ...K,
        mutate: o((R, S)=>G(R || {}, S), "handleMutation"),
        mutateAsync: o((R, S)=>W(R || {}, S), "handleMutateAsync"),
        overtime: {
            elapsedTime: j
        }
    };
}, "useUpdateMany"), Zt = new Error("[useUpdateMany]: `resource` is not defined or not matched but is required"), Yt = new Error("[useUpdateMany]: `id` is not defined but is required in edit and clone actions"), Sr = new Error("[useUpdateMany]: `values` is not provided but is required");
;
;
var di = o(({ mutationOptions: e, overtimeOptions: t } = {})=>{
    let r = ie(), { mutate: s } = Re({
        v3LegacyAuthProviderCompatible: !!(r != null && r.isLegacy)
    }), { mutationMode: n, undoableTimeout: i } = _e(), a = le(), { notificationDispatch: u } = ut(), c = z(), p = Ye(), l = Ce(), m = Ae(), { log: y } = Je(), { resources: d, select: T } = q(), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(), v = ue(), { options: { textTransformers: f } } = ge(), { keys: P, preferLegacyKeys: M } = Z(), Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ resource: C, ids: h, mutationMode: D, undoableTimeout: k, onCancel: E, meta: L, metaData: U, dataProviderName: w, values: N })=>{
            let { resource: b, identifier: F } = T(C), V = v({
                resource: b,
                meta: I(L, U)
            }), G = D ?? n, W = k ?? i, K = a(ee(F, w, d)), j = o(()=>K.deleteMany ? K.deleteMany({
                    resource: b.name,
                    ids: h,
                    meta: V,
                    metaData: V,
                    variables: N
                }) : lt(h.map((te)=>K.deleteOne({
                        resource: b.name,
                        id: te,
                        meta: V,
                        metaData: V,
                        variables: N
                    }))), "mutationFn");
            return G !== "undoable" ? j() : new Promise((te, R)=>{
                let S = o(()=>{
                    j().then((H)=>te(H)).catch((H)=>R(H));
                }, "doMutation"), B = o(()=>{
                    R({
                        message: "mutationCancelled"
                    });
                }, "cancelMutation");
                E && E(B), u({
                    type: "ADD",
                    payload: {
                        id: h,
                        resource: F,
                        cancelMutation: B,
                        doMutation: S,
                        seconds: W,
                        isSilent: !!E
                    }
                });
            });
        },
        onMutate: async ({ ids: C, resource: h, mutationMode: D, dataProviderName: k, meta: E, metaData: L })=>{
            let { identifier: U } = T(h), { gqlMutation: w, gqlQuery: N, ...b } = I(E, L) ?? {}, F = dt(M)(U, ee(U, k, d), b), V = P().data(ee(U, k, d)).resource(U), G = D ?? n;
            await x.cancelQueries(V.get(M), void 0, {
                silent: !0
            });
            let W = x.getQueriesData(V.get(M));
            if (G !== "pessimistic") {
                x.setQueriesData(V.action("list").params(b ?? {}).get(M), (K)=>K ? {
                        data: K.data.filter((re)=>re.id && !C.map(String).includes(re.id.toString())),
                        total: K.total - 1
                    } : null), x.setQueriesData(V.action("many").get(M), (K)=>{
                    if (!K) return null;
                    let j = K.data.filter((re)=>re.id ? !C.map(String).includes(re.id.toString()) : !1);
                    return {
                        ...K,
                        data: j
                    };
                });
                for (let K of C)x.setQueriesData(V.action("one").id(K).params(b).get(M), (j)=>!j || j.data.id === K ? null : {
                        ...j
                    });
            }
            return {
                previousQueries: W,
                queryKey: F
            };
        },
        onSettled: (C, h, { resource: D, ids: k, dataProviderName: E, invalidates: L = [
            "list",
            "many"
        ] })=>{
            let { identifier: U } = T(D);
            m({
                resource: U,
                dataProviderName: ee(U, E, d),
                invalidates: L
            }), u({
                type: "REMOVE",
                payload: {
                    id: k,
                    resource: U
                }
            });
        },
        onSuccess: (C, { ids: h, resource: D, meta: k, metaData: E, dataProviderName: L, successNotification: U }, w)=>{
            let { resource: N, identifier: b } = T(D), F = ee(b, L, d), V = v({
                resource: N,
                meta: I(k, E)
            });
            h.forEach((te)=>x.removeQueries(w == null ? void 0 : w.queryKey.detail(te)));
            let G = typeof U == "function" ? U(C, h, b) : U;
            l(G, {
                key: `${h}-${b}-notification`,
                description: c("notifications.success", "Success"),
                message: c("notifications.deleteSuccess", {
                    resource: c(`${b}.${b}`, b)
                }, `Successfully deleted ${b}`),
                type: "success"
            }), p == null || p({
                channel: `resources/${N.name}`,
                type: "deleted",
                payload: {
                    ids: h
                },
                date: new Date,
                meta: {
                    ...V,
                    dataProviderName: F
                }
            });
            let { fields: W, operation: K, variables: j, ...re } = V || {};
            y == null || y.mutate({
                action: "deleteMany",
                resource: N.name,
                meta: {
                    ids: h,
                    dataProviderName: F,
                    ...re
                }
            }), h.forEach((te)=>x.removeQueries(w == null ? void 0 : w.queryKey.detail(te)));
        },
        onError: (C, { ids: h, resource: D, errorNotification: k }, E)=>{
            let { identifier: L } = T(D);
            if (E) for (let U of E.previousQueries)x.setQueryData(U[0], U[1]);
            if (C.message !== "mutationCancelled") {
                s(C);
                let U = f.singular(L), w = typeof k == "function" ? k(C, h, L) : k;
                l(w, {
                    key: `${h}-${L}-notification`,
                    message: c("notifications.deleteError", {
                        resource: U,
                        statusCode: C.statusCode
                    }, `Error (status code: ${C.statusCode})`),
                    description: C.message,
                    type: "error"
                });
            }
        },
        mutationKey: P().data().mutation("deleteMany").get(M),
        ...e,
        meta: {
            ...e == null ? void 0 : e.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useDeleteMany", M)
        }
    }), { elapsedTime: g } = fe({
        ...t,
        isLoading: Q.isLoading
    });
    return {
        ...Q,
        overtime: {
            elapsedTime: g
        }
    };
}, "useDeleteMany");
var li = o((e)=>{
    var n;
    let t = le(), { resource: r } = q(), { getApiUrl: s } = t(e ?? ((n = I(r == null ? void 0 : r.meta, r == null ? void 0 : r.options)) == null ? void 0 : n.dataProviderName));
    return s();
}, "useApiUrl");
;
;
var yi = o(({ url: e, method: t, config: r, queryOptions: s, successNotification: n, errorNotification: i, meta: a, metaData: u, dataProviderName: c, overtimeOptions: p })=>{
    let l = le(), m = ie(), { mutate: y } = Re({
        v3LegacyAuthProviderCompatible: !!(m != null && m.isLegacy)
    }), d = z(), T = Ce(), x = ue(), { keys: v, preferLegacyKeys: f } = Z(), P = I(a, u), { custom: M } = l(c), Q = x({
        meta: P
    });
    if (M) {
        let g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: v().data(c).mutation("custom").params({
                method: t,
                url: e,
                ...r,
                ...P || {}
            }).get(f),
            queryFn: (h)=>M({
                    url: e,
                    method: t,
                    ...r,
                    meta: {
                        ...Q,
                        queryContext: je(h)
                    },
                    metaData: {
                        ...Q,
                        queryContext: je(h)
                    }
                }),
            ...s,
            onSuccess: (h)=>{
                var k;
                (k = s == null ? void 0 : s.onSuccess) == null || k.call(s, h);
                let D = typeof n == "function" ? n(h, {
                    ...r,
                    ...Q
                }) : n;
                T(D);
            },
            onError: (h)=>{
                var k;
                y(h), (k = s == null ? void 0 : s.onError) == null || k.call(s, h);
                let D = typeof i == "function" ? i(h, {
                    ...r,
                    ...Q
                }) : i;
                T(D, {
                    key: `${t}-notification`,
                    message: d("notifications.error", {
                        statusCode: h.statusCode
                    }, `Error (status code: ${h.statusCode})`),
                    description: h.message,
                    type: "error"
                });
            },
            meta: {
                ...s == null ? void 0 : s.meta,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useCustom", f)
            }
        }), { elapsedTime: C } = fe({
            ...p,
            isLoading: g.isFetching
        });
        return {
            ...g,
            overtime: {
                elapsedTime: C
            }
        };
    }
    throw Error("Not implemented custom on data provider.");
}, "useCustom");
;
;
var xi = o(({ mutationOptions: e, overtimeOptions: t } = {})=>{
    let r = ie(), { mutate: s } = Re({
        v3LegacyAuthProviderCompatible: !!(r != null && r.isLegacy)
    }), n = Ce(), i = le(), a = z(), u = ue(), { keys: c, preferLegacyKeys: p } = Z(), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(({ url: y, method: d, values: T, meta: x, metaData: v, dataProviderName: f, config: P })=>{
        let M = u({
            meta: I(x, v)
        }), { custom: Q } = i(f);
        if (Q) return Q({
            url: y,
            method: d,
            payload: T,
            meta: M,
            metaData: M,
            headers: {
                ...P == null ? void 0 : P.headers
            }
        });
        throw Error("Not implemented custom on data provider.");
    }, {
        onSuccess: (y, { successNotification: d, config: T, meta: x, metaData: v })=>{
            let f = typeof d == "function" ? d(y, {
                ...T,
                ...I(x, v) || {}
            }) : d;
            n(f);
        },
        onError: (y, { errorNotification: d, method: T, config: x, meta: v, metaData: f })=>{
            s(y);
            let P = typeof d == "function" ? d(y, {
                ...x,
                ...I(v, f) || {}
            }) : d;
            n(P, {
                key: `${T}-notification`,
                message: a("notifications.error", {
                    statusCode: y.statusCode
                }, `Error (status code: ${y.statusCode})`),
                description: y.message,
                type: "error"
            });
        },
        mutationKey: c().data().mutation("customMutation").get(p),
        ...e,
        meta: {
            ...e == null ? void 0 : e.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useCustomMutation", p)
        }
    }), { elapsedTime: m } = fe({
        ...t,
        isLoading: l.isLoading
    });
    return {
        ...l,
        overtime: {
            elapsedTime: m
        }
    };
}, "useCustomMutation");
;
;
var Hs = {
    default: {}
}, Jt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(Hs), $s = o(({ children: e, dataProvider: t })=>{
    let r = Hs;
    return t && (!("default" in t) && ("getList" in t || "getOne" in t) ? r = {
        default: t
    } : r = t), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Jt.Provider, {
        value: r
    }, e);
}, "DataContextProvider");
var le = o(()=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Jt);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((r)=>{
        if (r) {
            let s = e == null ? void 0 : e[r];
            if (!s) throw new Error(`"${r}" Data provider not found`);
            if (s && !(e != null && e.default)) throw new Error("If you have multiple data providers, you must provide default data provider property");
            return e[r];
        }
        if (e.default) return e.default;
        throw new Error('There is no "default" data provider. Please pass dataProviderName.');
    }, [
        e
    ]);
}, "useDataProvider");
;
;
var bi = o(({ resource: e, config: t, filters: r, hasPagination: s, pagination: n, sorters: i, queryOptions: a, successNotification: u, errorNotification: c, meta: p, metaData: l, liveMode: m, onLiveEvent: y, liveParams: d, dataProviderName: T, overtimeOptions: x })=>{
    let { resources: v, resource: f, identifier: P } = q(e), M = le(), Q = z(), g = ie(), { mutate: C } = Re({
        v3LegacyAuthProviderCompatible: !!(g != null && g.isLegacy)
    }), h = Ce(), D = ue(), { keys: k, preferLegacyKeys: E } = Z(), L = ee(P, T, v), U = I(p, l), w = I(r, t == null ? void 0 : t.filters), N = I(i, t == null ? void 0 : t.sort), b = I(s, t == null ? void 0 : t.hasPagination), F = Wt({
        pagination: n,
        configPagination: t == null ? void 0 : t.pagination,
        hasPagination: b
    }), V = F.mode === "server", G = {
        meta: U,
        metaData: U,
        filters: w,
        hasPagination: V,
        pagination: F,
        sorters: N,
        config: {
            ...t,
            sort: N
        }
    }, W = (a == null ? void 0 : a.enabled) === void 0 || (a == null ? void 0 : a.enabled) === !0, K = D({
        resource: f,
        meta: U
    }), { getList: j } = M(L);
    Pt({
        resource: P,
        types: [
            "*"
        ],
        params: {
            meta: K,
            metaData: K,
            pagination: F,
            hasPagination: V,
            sort: N,
            sorters: N,
            filters: w,
            subscriptionType: "useList",
            ...d
        },
        channel: `resources/${f.name}`,
        enabled: W,
        liveMode: m,
        onLiveEvent: y,
        dataProviderName: L,
        meta: {
            ...K,
            dataProviderName: T
        }
    });
    let re = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: k().data(L).resource(P).action("infinite").params({
            ...U || {},
            filters: w,
            hasPagination: V,
            ...V && {
                pagination: F
            },
            ...i && {
                sorters: i
            },
            ...(t == null ? void 0 : t.sort) && {
                sort: t == null ? void 0 : t.sort
            }
        }).get(E),
        queryFn: (R)=>{
            let S = {
                ...F,
                current: R.pageParam
            }, B = {
                ...K,
                queryContext: je(R)
            };
            return j({
                resource: f.name,
                pagination: S,
                hasPagination: V,
                filters: w,
                sort: N,
                sorters: N,
                meta: B,
                metaData: B
            }).then(({ data: H, total: $, ...X })=>({
                    data: H,
                    total: $,
                    pagination: S,
                    ...X
                }));
        },
        getNextPageParam: (R)=>Tr(R),
        getPreviousPageParam: (R)=>xr(R),
        ...a,
        onSuccess: (R)=>{
            var B;
            (B = a == null ? void 0 : a.onSuccess) == null || B.call(a, R);
            let S = typeof u == "function" ? u(R, G, P) : u;
            h(S);
        },
        onError: (R)=>{
            var B;
            C(R), (B = a == null ? void 0 : a.onError) == null || B.call(a, R);
            let S = typeof c == "function" ? c(R, G, P) : c;
            h(S, {
                key: `${P}-useInfiniteList-notification`,
                message: Q("notifications.error", {
                    statusCode: R.statusCode
                }, `Error (status code: ${R.statusCode})`),
                description: R.message,
                type: "error"
            });
        },
        meta: {
            ...a == null ? void 0 : a.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useInfiniteList", E, f == null ? void 0 : f.name)
        }
    }), { elapsedTime: te } = fe({
        ...x,
        isLoading: re.isFetching
    });
    return {
        ...re,
        overtime: {
            elapsedTime: te
        }
    };
}, "useInfiniteList");
;
;
var mt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({}), _s = o(({ liveProvider: e, children: t })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(mt.Provider, {
        value: {
            liveProvider: e
        }
    }, t), "LiveContextProvider");
;
;
var Ae = o(()=>{
    let { resources: e } = q(), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(), { keys: r, preferLegacyKeys: s } = Z();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async ({ resource: i, dataProviderName: a, invalidates: u, id: c, invalidationFilters: p = {
        type: "all",
        refetchType: "active"
    }, invalidationOptions: l = {
        cancelRefetch: !1
    } })=>{
        if (u === !1) return;
        let m = ee(i, a, e), y = r().data(m).resource(i ?? "");
        await Promise.all(u.map((d)=>{
            switch(d){
                case "all":
                    return t.invalidateQueries(r().data(m).get(s), p, l);
                case "list":
                    return t.invalidateQueries(y.action("list").get(s), p, l);
                case "many":
                    return t.invalidateQueries(y.action("many").get(s), p, l);
                case "resourceAll":
                    return t.invalidateQueries(y.get(s), p, l);
                case "detail":
                    return t.invalidateQueries(y.action("one").id(c || "").get(s), p, l);
                default:
                    return;
            }
        }));
    }, []);
}, "useInvalidate");
;
;
;
;
;
var js = o((e)=>{
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(e);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t.current, e) || (t.current = e), t.current;
}, "useMemoized");
var Ar = o((e, t)=>{
    let r = js(t);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(e, r);
}, "useDeepMemo");
var Rt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    resources: []
}), Zs = o(({ resources: e, children: t })=>{
    let r = Ar(()=>hr(e ?? []), [
        e
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Rt.Provider, {
        value: {
            resources: r
        }
    }, t);
}, "ResourceContextProvider");
;
var Js = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext("new"), qs = Js.Provider, oe = o(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(Js), "useRouterType");
;
;
var en = {}, ft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(en), tn = o(({ children: e, router: t })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ft.Provider, {
        value: t ?? en
    }, e), "RouterContextProvider");
;
var vo = o(()=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ft);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "vo.useMemo": ()=>(e == null ? void 0 : e.parse) ?? ({
                "vo.useMemo": ()=>({
                        "vo.useMemo": ()=>({})
                    })["vo.useMemo"]
            })["vo.useMemo"]
    }["vo.useMemo"], [
        e == null ? void 0 : e.parse
    ])();
}, "useParse");
var Te = o(()=>{
    let e = vo();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Te.useMemo": ()=>e()
    }["Te.useMemo"], [
        e
    ]);
}, "useParsed");
function q(e) {
    let { resources: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Rt), r = oe(), s = Te(), n = {
        resourceName: e && typeof e != "string" ? e.resourceName : e,
        resourceNameOrRouteName: e && typeof e != "string" ? e.resourceNameOrRouteName : e,
        recordItemId: e && typeof e != "string" ? e.recordItemId : void 0
    }, i = o((m, y = !0)=>{
        let T = Ee(m, t, r === "legacy");
        if (T) return {
            resource: T,
            identifier: T.identifier ?? T.name
        };
        if (y) {
            let x = {
                name: m,
                identifier: m
            }, v = x.identifier ?? x.name;
            return {
                resource: x,
                identifier: v
            };
        }
    }, "select"), a = rn(), { useParams: u } = pe(), c = u();
    if (r === "legacy") {
        let m = n.resourceNameOrRouteName ? n.resourceNameOrRouteName : c.resource, y = m ? a(m) : void 0, d = (n == null ? void 0 : n.recordItemId) ?? c.id, T = c.action, x = (n == null ? void 0 : n.resourceName) ?? (y == null ? void 0 : y.name), v = (y == null ? void 0 : y.identifier) ?? (y == null ? void 0 : y.name);
        return {
            resources: t,
            resource: y,
            resourceName: x,
            id: d,
            action: T,
            select: i,
            identifier: v
        };
    }
    let p, l = typeof e == "string" ? e : n == null ? void 0 : n.resourceNameOrRouteName;
    if (l) {
        let m = Ee(l, t);
        m ? p = m : p = {
            name: l
        };
    } else s != null && s.resource && (p = s.resource);
    return {
        resources: t,
        resource: p,
        resourceName: p == null ? void 0 : p.name,
        id: s.id,
        action: s.action,
        select: i,
        identifier: (p == null ? void 0 : p.identifier) ?? (p == null ? void 0 : p.name)
    };
}
o(q, "useResource");
;
var rn = o(()=>{
    let { resources: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Rt);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((r)=>{
        let s = Ee(r, e, !0);
        return s || {
            name: r,
            route: r
        };
    }, [
        e
    ]);
}, "useResourceWithRoute");
var Pt = o(({ resource: e, params: t, channel: r, types: s, enabled: n = !0, liveMode: i, onLiveEvent: a, dataProviderName: u, meta: c })=>{
    var f;
    let { resource: p, identifier: l } = q(e), { liveProvider: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(mt), { liveMode: y, onLiveEvent: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Qe), T = i ?? y, x = Ae(), v = u ?? (c == null ? void 0 : c.dataProviderName) ?? ((f = p == null ? void 0 : p.meta) == null ? void 0 : f.dataProviderName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let P, M = o((Q)=>{
            T === "auto" && x({
                resource: l,
                dataProviderName: v,
                invalidates: [
                    "resourceAll"
                ],
                invalidationFilters: {
                    type: "active",
                    refetchType: "active"
                },
                invalidationOptions: {
                    cancelRefetch: !1
                }
            }), a == null || a(Q), d == null || d(Q);
        }, "callback");
        return T && T !== "off" && n && (P = m == null ? void 0 : m.subscribe({
            channel: r,
            params: {
                resource: p == null ? void 0 : p.name,
                ...t
            },
            types: s,
            callback: M,
            dataProviderName: v,
            meta: {
                ...c,
                dataProviderName: v
            }
        })), ()=>{
            P && (m == null || m.unsubscribe(P));
        };
    }, [
        n
    ]);
}, "useResourceSubscription");
;
var sn = o((e)=>{
    let { liveMode: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Qe);
    return e ?? t;
}, "useLiveMode");
;
var ph = o(({ params: e, channel: t, types: r = [
    "*"
], enabled: s = !0, onLiveEvent: n, dataProviderName: i = "default", meta: a })=>{
    let { liveProvider: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(mt);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let c;
        return s && (c = u == null ? void 0 : u.subscribe({
            channel: t,
            params: e,
            types: r,
            callback: n,
            dataProviderName: i,
            meta: {
                ...a,
                dataProviderName: i
            }
        })), ()=>{
            c && (u == null || u.unsubscribe(c));
        };
    }, [
        s
    ]);
}, "useSubscription");
;
var Ye = o(()=>{
    let { liveProvider: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(mt);
    return e == null ? void 0 : e.publish;
}, "usePublish");
;
;
;
var Uo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    notifications: [],
    notificationDispatch: ()=>!1
}), Hi = [], $i = o((e, t)=>{
    switch(t.type){
        case "ADD":
            return [
                ...e.filter((s)=>!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(s.id, t.payload.id) && s.resource === t.payload.resource)),
                {
                    ...t.payload,
                    isRunning: !0
                }
            ];
        case "REMOVE":
            return e.filter((r)=>!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r.id, t.payload.id) && r.resource === t.payload.resource));
        case "DECREASE_NOTIFICATION_SECOND":
            return e.map((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r.id, t.payload.id) && r.resource === t.payload.resource ? {
                    ...r,
                    seconds: t.payload.seconds - 1e3
                } : r);
        default:
            return e;
    }
}, "undoableQueueReducer"), an = o(({ children: e })=>{
    let [t, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])($i, Hi), s = {
        notifications: t,
        notificationDispatch: r
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Uo.Provider, {
        value: s
    }, e, typeof window < "u" ? t.map((n)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(un, {
            key: `${n.id}-${n.resource}-queue`,
            notification: n
        })) : null);
}, "UndoableQueueContextProvider");
var ut = o(()=>{
    let { notifications: e, notificationDispatch: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Uo);
    return {
        notifications: e,
        notificationDispatch: t
    };
}, "useCancelNotification");
;
;
var qt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({}), cn = o(({ open: e, close: t, children: r })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(qt.Provider, {
        value: {
            open: e,
            close: t
        }
    }, r), "NotificationContextProvider");
var He = o(()=>{
    let { open: e, close: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(qt);
    return {
        open: e,
        close: t
    };
}, "useNotification");
;
var Ce = o(()=>{
    let { open: e } = He();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((r, s)=>{
        r !== !1 && (r ? e == null || e(r) : s && (e == null || e(s)));
    }, []);
}, "useHandleNotification");
;
;
var Xe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({}), dn = o(({ children: e, i18nProvider: t })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Xe.Provider, {
        value: {
            i18nProvider: t
        }
    }, e), "I18nContextProvider");
var Eo = o(()=>{
    let { i18nProvider: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Xe);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>e == null ? void 0 : e.changeLocale(t), []);
}, "useSetLocale");
;
var z = o(()=>{
    let { i18nProvider: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Xe);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        function r(s, n, i) {
            return (e == null ? void 0 : e.translate(s, n, i)) ?? i ?? (typeof n == "string" && typeof i > "u" ? n : s);
        }
        return o(r, "translate"), r;
    }, [
        e
    ]);
}, "useTranslate");
;
var Lo = o(()=>{
    let { i18nProvider: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Xe);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>e == null ? void 0 : e.getLocale(), []);
}, "useGetLocale");
var tP = o(()=>{
    let e = z(), t = Eo(), r = Lo();
    return {
        translate: e,
        changeLocale: t,
        getLocale: r
    };
}, "useTranslation");
;
;
;
var fP = o(({ resourceName: e, resource: t, sorter: r, sorters: s, filters: n, maxItemCount: i, pageSize: a = 20, mapData: u = o((x)=>x, "mapData"), exportOptions: c, unparseConfig: p, meta: l, metaData: m, dataProviderName: y, onError: d, download: T } = {})=>{
    let [x, v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), f = le(), P = ue(), { resource: M, resources: Q, identifier: g } = q(I(t, e)), h = `${ht()(g, "plural")}-${new Date().toLocaleString()}`, { getList: D } = f(ee(g, y, Q)), k = P({
        resource: M,
        meta: I(l, m)
    });
    return {
        isLoading: x,
        triggerExport: o(async ()=>{
            v(!0);
            let L = [], U = 1, w = !0;
            for(; w;)try {
                let { data: V, total: G } = await D({
                    resource: (M == null ? void 0 : M.name) ?? "",
                    filters: n,
                    sort: I(s, r),
                    sorters: I(s, r),
                    pagination: {
                        current: U,
                        pageSize: a,
                        mode: "server"
                    },
                    meta: k,
                    metaData: k
                });
                U++, L.push(...V), i && L.length >= i && (L = L.slice(0, i), w = !1), G === L.length && (w = !1);
            } catch (V) {
                v(!1), w = !1, d == null || d(V);
                return;
            }
            let N = typeof p < "u" && p !== null;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(N && typeof c < "u" && c !== null, `[useExport]: resource: "${g}" 

Both \`unparseConfig\` and \`exportOptions\` are set, \`unparseConfig\` will take precedence`);
            let b = {
                filename: h,
                useKeysAsHeaders: !0,
                useBom: !0,
                title: "My Generated Report",
                quoteStrings: '"',
                ...c
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((c == null ? void 0 : c.decimalSeparator) !== void 0, `[useExport]: resource: "${g}" 

Use of \`decimalSeparator\` no longer supported, please use \`mapData\` instead.

See https://refine.dev/docs/api-reference/core/hooks/import-export/useExport/`), N ? p = {
                quotes: !0,
                ...p
            } : p = {
                columns: b.useKeysAsHeaders ? void 0 : b.headers,
                delimiter: b.fieldSeparator,
                header: b.showLabels || b.useKeysAsHeaders,
                quoteChar: b.quoteStrings,
                quotes: !0
            };
            let F = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].unparse(L.map(u), p);
            if (b.showTitle && (F = `${b.title}\r

${F}`), typeof window < "u" && F.length > 0 && (T ?? !0)) {
                let V = b.useTextFile ? ".txt" : ".csv", G = `text/${b.useTextFile ? "plain" : "csv"};charset=utf8;`, W = `${(b.filename ?? "download").replace(/ /g, "_")}${V}`;
                ro(W, `${b != null && b.useBom ? "\uFEFF" : ""}${F}`, G);
            }
            return v(!1), F;
        }, "triggerExport")
    };
}, "useExport");
;
;
var RP = o((e = {})=>{
    var K, j, re;
    let t = ue(), r = Ae(), { redirect: s } = At(), { mutationMode: n } = _e(), { setWarnWhen: i } = vt(), a = fn(), u = I(e.meta, e.metaData), c = e.mutationMode ?? n, { id: p, setId: l, resource: m, identifier: y, formAction: d } = qe({
        resource: e.resource,
        id: e.id,
        action: e.action
    }), [T, x] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(!1), v = d === "edit", f = d === "clone", P = d === "create", M = t({
        resource: m,
        meta: u
    }), Q = (v || f) && !!e.resource, g = typeof e.id < "u", C = ((K = e.queryOptions) == null ? void 0 : K.enabled) === !1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Q && !g && !C, pu(d, y, p));
    let h = qr({
        redirectFromProps: e.redirect,
        action: d,
        redirectOptions: s
    }), D = o((te = v ? "list" : "edit", R = p, S = {})=>{
        a({
            redirect: te,
            resource: m,
            id: R,
            meta: {
                ...u,
                ...S
            }
        });
    }, "redirect"), k = zt({
        resource: y,
        id: p,
        queryOptions: {
            enabled: !P && p !== void 0,
            ...e.queryOptions
        },
        liveMode: e.liveMode,
        onLiveEvent: e.onLiveEvent,
        liveParams: e.liveParams,
        meta: {
            ...M,
            ...e.queryMeta
        },
        dataProviderName: e.dataProviderName,
        overtimeOptions: {
            enabled: !1
        }
    }), E = Xt({
        mutationOptions: e.createMutationOptions,
        overtimeOptions: {
            enabled: !1
        }
    }), L = To({
        mutationOptions: e.updateMutationOptions,
        overtimeOptions: {
            enabled: !1
        }
    }), U = v ? L : E, N = U.isLoading || k.isFetching, { elapsedTime: b } = fe({
        ...e.overtimeOptions,
        isLoading: N
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RP.useEffect": ()=>({
                "RP.useEffect": ()=>{
                    var te;
                    (te = e.autoSave) != null && te.invalidateOnUnmount && T && y && typeof p < "u" && r({
                        id: p,
                        invalidates: e.invalidates || [
                            "list",
                            "many",
                            "detail"
                        ],
                        dataProviderName: e.dataProviderName,
                        resource: y
                    });
                }
            })["RP.useEffect"]
    }["RP.useEffect"], [
        (j = e.autoSave) == null ? void 0 : j.invalidateOnUnmount,
        T
    ]);
    let F = o(async (te, { isAutosave: R = !1 } = {})=>{
        let S = c === "pessimistic";
        i(!1);
        let B = o(($)=>D(h, $), "onSuccessRedirect");
        return new Promise(($, X)=>{
            if (!m) return X(au);
            if (f && !p) return X(iu);
            if (!te) return X(uu);
            if (R && !v) return X(cu);
            !S && !R && (br(()=>B()), $());
            let ne = {
                values: te,
                resource: y ?? m.name,
                meta: {
                    ...M,
                    ...e.mutationMeta
                },
                metaData: {
                    ...M,
                    ...e.mutationMeta
                },
                dataProviderName: e.dataProviderName,
                invalidates: R ? [] : e.invalidates,
                successNotification: R ? !1 : e.successNotification,
                errorNotification: R ? !1 : e.errorNotification,
                ...v ? {
                    id: p ?? "",
                    mutationMode: c,
                    undoableTimeout: e.undoableTimeout,
                    optimisticUpdateMap: e.optimisticUpdateMap
                } : {}
            }, { mutateAsync: Y } = v ? L : E;
            Y(ne, {
                onSuccess: e.onMutationSuccess ? (O, _, ae)=>{
                    var J;
                    (J = e.onMutationSuccess) == null || J.call(e, O, te, ae, R);
                } : void 0,
                onError: e.onMutationError ? (O, _, ae)=>{
                    var J;
                    (J = e.onMutationError) == null || J.call(e, O, te, ae, R);
                } : void 0
            }).then((O)=>{
                S && !R && br(()=>{
                    var _;
                    return B((_ = O == null ? void 0 : O.data) == null ? void 0 : _.id);
                }), R && x(!0), $(O);
            }).catch(X);
        });
    }, "onFinish"), V = oo((te)=>F(te, {
            isAutosave: !0
        }), ((re = e.autoSave) == null ? void 0 : re.debounce) || 1e3, "Cancelled by debounce"), G = {
        elapsedTime: b
    }, W = {
        status: L.status,
        data: L.data,
        error: L.error
    };
    return {
        onFinish: F,
        onFinishAutoSave: V,
        formLoading: N,
        mutationResult: U,
        mutation: U,
        queryResult: k,
        query: k,
        autoSaveProps: W,
        id: p,
        setId: l,
        redirect: D,
        overtime: G
    };
}, "useForm"), au = new Error("[useForm]: `resource` is not defined or not matched but is required"), iu = new Error("[useForm]: `id` is not defined but is required in edit and clone actions"), uu = new Error("[useForm]: `values` is not provided but is required"), cu = new Error("[useForm]: `autoSave` is only allowed in edit action"), pu = o((e, t, r)=>`[useForm]: action: "${e}", resource: "${t}", id: ${r}

If you don't use the \`setId\` method to set the \`id\`, you should pass the \`id\` prop to \`useForm\`. Otherwise, \`useForm\` will not be able to infer the \`id\` from the current URL with custom resource provided.

See https://refine.dev/docs/data/hooks/use-form/#id-`, "idWarningMessage");
;
var fn = o(()=>{
    let { show: e, edit: t, list: r, create: s } = he();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(({ redirect: i, resource: a, id: u, meta: c = {} })=>{
        if (i && a) return a.show && i === "show" && u ? e(a, u, void 0, c) : a.edit && i === "edit" && u ? t(a, u, void 0, c) : a.create && i === "create" ? s(a, void 0, c) : r(a, "push", c);
    }, []);
}, "useRedirectionAfterSubmission");
;
var Mo = o(()=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ft);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Mo.useMemo": ()=>(e == null ? void 0 : e.back) ?? ({
                "Mo.useMemo": ()=>({
                        "Mo.useMemo": ()=>{}
                    })["Mo.useMemo"]
            })["Mo.useMemo"]
    }["Mo.useMemo"], [
        e == null ? void 0 : e.back
    ])();
}, "useBack");
;
;
var Ut = o(()=>{
    let e = oe(), { resource: t, resources: r } = q(), s = Te();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Ut.useCallback": ({ resource: i, action: a, meta: u })=>{
            var y;
            let c = i || t;
            if (!c) return;
            let l = (y = Se(c, r, e === "legacy").find({
                "Ut.useCallback": (d)=>d.action === a
            }["Ut.useCallback"])) == null ? void 0 : y.route;
            return l ? We(l, c == null ? void 0 : c.meta, s, u) : void 0;
        }
    }["Ut.useCallback"], [
        r,
        t,
        s
    ]);
}, "useGetToPath");
var Pe = o(()=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ft), { select: t } = q(), r = Ut(), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Pe.n.useMemo": ()=>(e == null ? void 0 : e.go) ?? ({
                "Pe.n.useMemo": ()=>({
                        "Pe.n.useMemo": ()=>{}
                    })["Pe.n.useMemo"]
            })["Pe.n.useMemo"]
    }["Pe.n.useMemo"], [
        e == null ? void 0 : e.go
    ])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((a)=>{
        if (typeof a.to != "object") return n({
            ...a,
            to: a.to
        });
        let { resource: u } = t(a.to.resource);
        xu(a.to, u);
        let c = r({
            resource: u,
            action: a.to.action,
            meta: {
                id: a.to.id,
                ...a.to.meta
            }
        });
        return n({
            ...a,
            to: c
        });
    }, [
        t,
        n
    ]);
}, "useGo"), xu = o((e, t)=>{
    if (!(e != null && e.action) || !(e != null && e.resource)) throw new Error('[useGo]: "action" or "resource" is required.');
    if ([
        "edit",
        "show",
        "clone"
    ].includes(e == null ? void 0 : e.action) && !e.id) throw new Error(`[useGo]: [action: ${e.action}] requires an "id" for resource [resource: ${e.resource}]`);
    if (!t[e.action]) throw new Error(`[useGo]: [action: ${e.action}] is not defined for [resource: ${e.resource}]`);
}, "handleResourceErrors");
var he = o(()=>{
    let { resources: e } = q(), t = oe(), { useHistory: r } = pe(), s = r(), n = Te(), i = Pe(), a = Mo(), u = o((g, C = "push")=>{
        t === "legacy" ? s[C](g) : i({
            to: g,
            type: C
        });
    }, "handleUrl"), c = o((g, C = {})=>{
        var k;
        if (t === "legacy") {
            let E = typeof g == "string" ? Ee(g, e, !0) ?? {
                name: g,
                route: g
            } : g, L = Se(E, e, !0).find((U)=>U.action === "create");
            return L ? We(L.route, E == null ? void 0 : E.meta, n, C) : "";
        }
        let h = typeof g == "string" ? Ee(g, e) ?? {
            name: g
        } : g, D = (k = Se(h, e).find((E)=>E.action === "create")) == null ? void 0 : k.route;
        return D ? i({
            to: We(D, h == null ? void 0 : h.meta, n, C),
            type: "path",
            query: C.query
        }) : "";
    }, "createUrl"), p = o((g, C, h = {})=>{
        var L;
        let D = encodeURIComponent(C);
        if (t === "legacy") {
            let U = typeof g == "string" ? Ee(g, e, !0) ?? {
                name: g,
                route: g
            } : g, w = Se(U, e, !0).find((N)=>N.action === "edit");
            return w ? We(w.route, U == null ? void 0 : U.meta, n, {
                ...h,
                id: D
            }) : "";
        }
        let k = typeof g == "string" ? Ee(g, e) ?? {
            name: g
        } : g, E = (L = Se(k, e).find((U)=>U.action === "edit")) == null ? void 0 : L.route;
        return E ? i({
            to: We(E, k == null ? void 0 : k.meta, n, {
                ...h,
                id: D
            }),
            type: "path",
            query: h.query
        }) : "";
    }, "editUrl"), l = o((g, C, h = {})=>{
        var L;
        let D = encodeURIComponent(C);
        if (t === "legacy") {
            let U = typeof g == "string" ? Ee(g, e, !0) ?? {
                name: g,
                route: g
            } : g, w = Se(U, e, !0).find((N)=>N.action === "clone");
            return w ? We(w.route, U == null ? void 0 : U.meta, n, {
                ...h,
                id: D
            }) : "";
        }
        let k = typeof g == "string" ? Ee(g, e) ?? {
            name: g
        } : g, E = (L = Se(k, e).find((U)=>U.action === "clone")) == null ? void 0 : L.route;
        return E ? i({
            to: We(E, k == null ? void 0 : k.meta, n, {
                ...h,
                id: D
            }),
            type: "path",
            query: h.query
        }) : "";
    }, "cloneUrl"), m = o((g, C, h = {})=>{
        var L;
        let D = encodeURIComponent(C);
        if (t === "legacy") {
            let U = typeof g == "string" ? Ee(g, e, !0) ?? {
                name: g,
                route: g
            } : g, w = Se(U, e, !0).find((N)=>N.action === "show");
            return w ? We(w.route, U == null ? void 0 : U.meta, n, {
                ...h,
                id: D
            }) : "";
        }
        let k = typeof g == "string" ? Ee(g, e) ?? {
            name: g
        } : g, E = (L = Se(k, e).find((U)=>U.action === "show")) == null ? void 0 : L.route;
        return E ? i({
            to: We(E, k == null ? void 0 : k.meta, n, {
                ...h,
                id: D
            }),
            type: "path",
            query: h.query
        }) : "";
    }, "showUrl"), y = o((g, C = {})=>{
        var k;
        if (t === "legacy") {
            let E = typeof g == "string" ? Ee(g, e, !0) ?? {
                name: g,
                route: g
            } : g, L = Se(E, e, !0).find((U)=>U.action === "list");
            return L ? We(L.route, E == null ? void 0 : E.meta, n, C) : "";
        }
        let h = typeof g == "string" ? Ee(g, e) ?? {
            name: g
        } : g, D = (k = Se(h, e).find((E)=>E.action === "list")) == null ? void 0 : k.route;
        return D ? i({
            to: We(D, h == null ? void 0 : h.meta, n, C),
            type: "path",
            query: C.query
        }) : "";
    }, "listUrl");
    return {
        create: o((g, C = "push", h = {})=>{
            u(c(g, h), C);
        }, "create"),
        createUrl: c,
        edit: o((g, C, h = "push", D = {})=>{
            u(p(g, C, D), h);
        }, "edit"),
        editUrl: p,
        clone: o((g, C, h = "push", D = {})=>{
            u(l(g, C, D), h);
        }, "clone"),
        cloneUrl: l,
        show: o((g, C, h = "push", D = {})=>{
            u(m(g, C, D), h);
        }, "show"),
        showUrl: m,
        list: o((g, C = "push", h = {})=>{
            u(y(g, h), C);
        }, "list"),
        listUrl: y,
        push: o((g, ...C)=>{
            t === "legacy" ? s.push(g, ...C) : i({
                to: g,
                type: "push"
            });
        }, "push"),
        replace: o((g, ...C)=>{
            t === "legacy" ? s.replace(g, ...C) : i({
                to: g,
                type: "replace"
            });
        }, "replace"),
        goBack: o(()=>{
            t === "legacy" ? s.goBack() : a();
        }, "goBack")
    };
}, "useNavigation");
;
var nR = o(({ resource: e, id: t, meta: r, metaData: s, queryOptions: n, overtimeOptions: i, ...a } = {})=>{
    let { resource: u, identifier: c, id: p, setId: l } = qe({
        id: t,
        resource: e
    }), y = ue()({
        resource: u,
        meta: I(r, s)
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!e && !p, Pu(c, p));
    let d = zt({
        resource: c,
        id: p ?? "",
        queryOptions: {
            enabled: p !== void 0,
            ...n
        },
        meta: y,
        metaData: y,
        overtimeOptions: i,
        ...a
    });
    return {
        queryResult: d,
        query: d,
        showId: p,
        setShowId: l,
        overtime: d.overtime
    };
}, "useShow"), Pu = o((e, t)=>`[useShow]: resource: "${e}", id: ${t} 

If you don't use the \`setShowId\` method to set the \`showId\`, you should pass the \`id\` prop to \`useShow\`. Otherwise, \`useShow\` will not be able to infer the \`id\` from the current URL. 

See https://refine.dev/docs/data/hooks/use-show/#resource`, "idWarningMessage");
;
;
;
var mR = o(({ resourceName: e, resource: t, mapData: r = o((l)=>l, "mapData"), paparseOptions: s, batchSize: n = Number.MAX_SAFE_INTEGER, onFinish: i, meta: a, metaData: u, onProgress: c, dataProviderName: p } = {})=>{
    let [l, m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [y, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [T, x] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), { resource: v, identifier: f } = q(t ?? e), P = ue(), M = bo(), Q = Xt(), g = P({
        resource: v,
        meta: I(a, u)
    }), C;
    n === 1 ? C = Q : C = M;
    let h = o(()=>{
        d(0), m(0), x(!1);
    }, "handleCleanup"), D = o((E)=>{
        let L = {
            succeeded: E.filter((U)=>U.type === "success"),
            errored: E.filter((U)=>U.type === "error")
        };
        i == null || i(L), x(!1);
    }, "handleFinish");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        c == null || c({
            totalAmount: y,
            processedAmount: l
        });
    }, [
        y,
        l
    ]);
    let k = o(({ file: E })=>(h(), new Promise((L)=>{
            x(!0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(E, {
                complete: async ({ data: U })=>{
                    let w = sr(U, r);
                    if (d(w.length), n === 1) {
                        let N = w.map((F)=>o(async ()=>({
                                    response: await Q.mutateAsync({
                                        resource: f ?? "",
                                        values: F,
                                        successNotification: !1,
                                        errorNotification: !1,
                                        dataProviderName: p,
                                        meta: g,
                                        metaData: g
                                    }),
                                    value: F
                                }), "fn")), b = await gr(N, ({ response: F, value: V })=>(m((G)=>G + 1), {
                                response: [
                                    F.data
                                ],
                                type: "success",
                                request: [
                                    V
                                ]
                            }), (F, V)=>({
                                response: [
                                    F
                                ],
                                type: "error",
                                request: [
                                    w[V]
                                ]
                            }));
                        L(b);
                    } else {
                        let N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$chunk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(w, n), b = N.map((V)=>o(async ()=>({
                                    response: await M.mutateAsync({
                                        resource: f ?? "",
                                        values: V,
                                        successNotification: !1,
                                        errorNotification: !1,
                                        dataProviderName: p,
                                        meta: g,
                                        metaData: g
                                    }),
                                    value: V,
                                    currentBatchLength: V.length
                                }), "fn")), F = await gr(b, ({ response: V, currentBatchLength: G, value: W })=>(m((K)=>K + G), {
                                response: V.data,
                                type: "success",
                                request: W
                            }), (V, G)=>({
                                response: [
                                    V
                                ],
                                type: "error",
                                request: N[G]
                            }));
                        L(F);
                    }
                },
                ...s
            });
        }).then((L)=>(D(L), L))), "handleChange");
    return {
        inputProps: {
            type: "file",
            accept: ".csv",
            onChange: (E)=>{
                E.target.files && E.target.files.length > 0 && k({
                    file: E.target.files[0]
                });
            }
        },
        mutationResult: C,
        isLoading: T,
        handleChange: k
    };
}, "useImport");
;
var TR = o(({ defaultVisible: e = !1 } = {})=>{
    let [t, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>r(!0), [
        t
    ]), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>r(!1), [
        t
    ]);
    return {
        visible: t,
        show: s,
        close: n
    };
}, "useModal");
var Du = o(({ resource: e, action: t, meta: r, legacy: s })=>Ut()({
        resource: e,
        action: t,
        meta: r,
        legacy: s
    }), "useToPath");
;
;
var Mu = o((e, t)=>{
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ft), s = r == null ? void 0 : r.Link, n = Pe(), i = "";
    return "go" in e && (r != null && r.go || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!0, "[Link]: `routerProvider` is not found. To use `go`, Please make sure that you have provided the `routerProvider` for `<Refine />` https://refine.dev/docs/routing/router-provider/ \n"), i = n({
        ...e.go,
        type: "path"
    })), "to" in e && (i = e.to), s ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(s, {
        ref: t,
        ...e,
        to: i,
        go: void 0
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
        ref: t,
        href: i,
        ...e,
        to: void 0,
        go: void 0
    });
}, "LinkComponent"), Io = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(Mu);
var yt = o(()=>Io, "useLink");
;
;
var gt = {
    useHistory: ()=>!1,
    useLocation: ()=>!1,
    useParams: ()=>({}),
    Prompt: ()=>null,
    Link: ()=>null
}, er = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(gt), xn = o(({ children: e, useHistory: t, useLocation: r, useParams: s, Prompt: n, Link: i, routes: a })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(er.Provider, {
        value: {
            useHistory: t ?? gt.useHistory,
            useLocation: r ?? gt.useLocation,
            useParams: s ?? gt.useParams,
            Prompt: n ?? gt.Prompt,
            Link: i ?? gt.Link,
            routes: a ?? gt.routes
        }
    }, e), "LegacyRouterContextProvider");
var pe = o(()=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(er), { useHistory: t, useLocation: r, useParams: s, Prompt: n, Link: i, routes: a } = e ?? gt;
    return {
        useHistory: t,
        useLocation: r,
        useParams: s,
        Prompt: n,
        Link: i,
        routes: a
    };
}, "useRouterContext");
;
;
;
;
var ct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    options: {
        buttons: {
            enableAccessControl: !0,
            hideIfUnauthorized: !1
        }
    }
}), Pn = o(({ can: e, children: t, options: r })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ct.Provider, {
        value: {
            can: e,
            options: r ? {
                ...r,
                buttons: {
                    enableAccessControl: !0,
                    hideIfUnauthorized: !1,
                    ...r.buttons
                }
            } : {
                buttons: {
                    enableAccessControl: !0,
                    hideIfUnauthorized: !1
                },
                queryOptions: void 0
            }
        }
    }, t), "AccessControlContextProvider");
var kt = o((e)=>{
    if (!e) return;
    let { icon: t, list: r, edit: s, create: n, show: i, clone: a, children: u, meta: c, options: p, ...l } = e, { icon: m, ...y } = c ?? {}, { icon: d, ...T } = p ?? {};
    return {
        ...l,
        ...c ? {
            meta: y
        } : {},
        ...p ? {
            options: T
        } : {}
    };
}, "sanitizeResource");
var kr = o(({ action: e, resource: t, params: r, queryOptions: s })=>{
    let { can: n, options: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ct), { keys: a, preferLegacyKeys: u } = Z(), { queryOptions: c } = i || {}, p = {
        ...c,
        ...s
    }, { resource: l, ...m } = r ?? {}, y = kt(l), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: a().access().resource(t).action(e).params({
            params: {
                ...m,
                resource: y
            },
            enabled: p == null ? void 0 : p.enabled
        }).get(u),
        queryFn: ()=>(n == null ? void 0 : n({
                action: e,
                resource: t,
                params: {
                    ...m,
                    resource: y
                }
            })) ?? Promise.resolve({
                can: !0
            }),
        enabled: typeof n < "u",
        ...p,
        meta: {
            ...p == null ? void 0 : p.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useCan", u, t, [
                "useButtonCanAccess",
                "useNavigationButton"
            ])
        },
        retry: !1
    });
    return typeof n > "u" ? {
        data: {
            can: !0
        }
    } : d;
}, "useCan");
;
var cC = o(()=>{
    let { can: e } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ct);
    return {
        can: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "cC.useMemo": ()=>e ? o({
                    "cC.useMemo": async ({ params: s, ...n })=>{
                        let i = s != null && s.resource ? kt(s.resource) : void 0;
                        return e({
                            ...n,
                            ...s ? {
                                params: {
                                    ...s,
                                    resource: i
                                }
                            } : {}
                        });
                    }
                }["cC.useMemo"], "canWithSanitizedResource") : void 0
        }["cC.useMemo"], [
            e
        ])
    };
}, "useCanWithoutCache");
;
;
;
;
var PC = o((e)=>{
    let [t, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [s, n] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [i, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), { resource: u, sort: c, sorters: p, filters: l = [], optionLabel: m = "title", optionValue: y = "id", searchField: d = typeof m == "string" ? m : "title", debounce: T = 300, successNotification: x, errorNotification: v, defaultValueQueryOptions: f, queryOptions: P, fetchSize: M, pagination: Q, hasPagination: g = !1, liveMode: C, defaultValue: h = [], selectedOptionsOrder: D = "in-place", onLiveEvent: k, onSearch: E, liveParams: L, meta: U, metaData: w, dataProviderName: N, overtimeOptions: b } = e, F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((O)=>typeof m == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(O, m) : m(O), [
        m
    ]), V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((O)=>typeof y == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(O, y) : y(O), [
        y
    ]), { resource: G, identifier: W } = q(u), j = ue()({
        resource: G,
        meta: I(U, w)
    }), re = Array.isArray(h) ? h : [
        h
    ], te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((O)=>{
        a(O.data.map((_)=>({
                label: F(_),
                value: V(_)
            })));
    }, [
        m,
        y
    ]), R = f ?? P, S = go({
        resource: W,
        ids: re,
        queryOptions: {
            ...R,
            enabled: re.length > 0 && ((R == null ? void 0 : R.enabled) ?? !0),
            onSuccess: (O)=>{
                var _;
                te(O), (_ = R == null ? void 0 : R.onSuccess) == null || _.call(R, O);
            }
        },
        overtimeOptions: {
            enabled: !1
        },
        meta: j,
        metaData: j,
        liveMode: "off",
        dataProviderName: N
    }), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((O)=>{
        n(O.data.map((_)=>({
                label: F(_),
                value: V(_)
            })));
    }, [
        m,
        y
    ]), H = $t({
        resource: W,
        sorters: I(p, c),
        filters: l.concat(t),
        pagination: {
            current: Q == null ? void 0 : Q.current,
            pageSize: (Q == null ? void 0 : Q.pageSize) ?? M,
            mode: Q == null ? void 0 : Q.mode
        },
        hasPagination: g,
        queryOptions: {
            ...P,
            onSuccess: (O)=>{
                var _;
                B(O), (_ = P == null ? void 0 : P.onSuccess) == null || _.call(P, O);
            }
        },
        overtimeOptions: {
            enabled: !1
        },
        successNotification: x,
        errorNotification: v,
        meta: j,
        metaData: j,
        liveMode: C,
        liveParams: L,
        onLiveEvent: k,
        dataProviderName: N
    }), { elapsedTime: $ } = fe({
        ...b,
        isLoading: H.isFetching || S.isFetching
    }), X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$uniqBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(D === "in-place" ? [
            ...s,
            ...i
        ] : [
            ...i,
            ...s
        ], "value"), [
        s,
        i
    ]), ne = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(E), Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((O)=>{
            if (ne.current) {
                r(ne.current(O));
                return;
            }
            if (!O) {
                r([]);
                return;
            }
            r([
                {
                    field: d,
                    operator: "contains",
                    value: O
                }
            ]);
        }, T), [
        d,
        T
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ne.current = E;
    }, [
        E
    ]), {
        queryResult: H,
        defaultValueQueryResult: S,
        query: H,
        defaultValueQuery: S,
        options: X,
        onSearch: Y,
        overtime: {
            elapsedTime: $
        }
    };
}, "useSelect");
;
;
;
;
;
var Un = [], En = [];
function IC({ initialCurrent: e, initialPageSize: t, hasPagination: r = !0, pagination: s, initialSorter: n, permanentSorter: i = En, defaultSetFilterBehavior: a, initialFilter: u, permanentFilter: c = Un, filters: p, sorters: l, syncWithLocation: m, resource: y, successNotification: d, errorNotification: T, queryOptions: x, liveMode: v, onLiveEvent: f, liveParams: P, meta: M, metaData: Q, dataProviderName: g, overtimeOptions: C } = {}) {
    var Wo, Ho, $o, zo, _o;
    let { syncWithLocation: h } = to(), D = m ?? h, k = sn(v), E = oe(), { useLocation: L } = pe(), { search: U, pathname: w } = L(), N = ue(), b = Te(), F = ((p == null ? void 0 : p.mode) || "server") === "server", V = ((l == null ? void 0 : l.mode) || "server") === "server", G = r === !1 ? "off" : "server", W = ((s == null ? void 0 : s.mode) ?? G) !== "off", K = I(s == null ? void 0 : s.current, e), j = I(s == null ? void 0 : s.pageSize, t), re = I(M, Q), { parsedCurrent: te, parsedPageSize: R, parsedSorter: S, parsedFilters: B } = vr(U ?? "?"), H = I(p == null ? void 0 : p.initial, u), $ = I(p == null ? void 0 : p.permanent, c) ?? Un, X = I(l == null ? void 0 : l.initial, n), ne = I(l == null ? void 0 : l.permanent, i) ?? En, Y = I(p == null ? void 0 : p.defaultBehavior, a) ?? "merge", O, _, ae, J;
    D ? (O = ((Wo = b == null ? void 0 : b.params) == null ? void 0 : Wo.current) || te || K || 1, _ = ((Ho = b == null ? void 0 : b.params) == null ? void 0 : Ho.pageSize) || R || j || 10, ae = (($o = b == null ? void 0 : b.params) == null ? void 0 : $o.sorters) || (S.length ? S : X), J = ((zo = b == null ? void 0 : b.params) == null ? void 0 : zo.filters) || (B.length ? B : H)) : (O = K || 1, _ = j || 10, ae = X, J = H);
    let { replace: we } = he(), ye = Pe(), { resource: Ve, identifier: Ne } = q(y), se = N({
        resource: Ve,
        meta: re
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "IC.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeof Ne > "u", "useTable: `resource` is not defined.");
        }
    }["IC.useEffect"], [
        Ne
    ]);
    let [me, ce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Lr(ne, ae ?? [])), [ve, rt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Er($, J ?? [])), [Ke, Ct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(O), [Ge, Tt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_), xt = o(()=>{
        if (E === "new") {
            let { sorters: jo, filters: Nc, pageSize: Bc, current: Kc, ...sa } = (b == null ? void 0 : b.params) ?? {};
            return sa;
        }
        let { sorter: Ie, filters: ot, pageSize: zr, current: _r, ...jr } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(U, {
            ignoreQueryPrefix: !0
        });
        return jr;
    }, "getCurrentQueryParams"), bt = o(({ pagination: { current: Ie, pageSize: ot }, sorter: zr, filters: _r })=>{
        if (E === "new") return ye({
            type: "path",
            options: {
                keepHash: !0,
                keepQuery: !0
            },
            query: {
                ...W ? {
                    current: Ie,
                    pageSize: ot
                } : {},
                sorters: zr,
                filters: _r,
                ...xt()
            }
        }) ?? "";
        let jr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(U == null ? void 0 : U.substring(1)), jo = Dr({
            pagination: {
                pageSize: ot,
                current: Ie
            },
            sorters: me ?? zr,
            filters: _r,
            ...jr
        });
        return `${w ?? ""}?${jo ?? ""}`;
    }, "createLinkForSyncWithLocation");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        U === "" && (Ct(O), Tt(_), ce(Lr(ne, ae ?? [])), rt(Er($, J ?? [])));
    }, [
        U
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (D) {
            let Ie = xt();
            if (E === "new") ye({
                type: "replace",
                options: {
                    keepQuery: !0
                },
                query: {
                    ...W ? {
                        pageSize: Ge,
                        current: Ke
                    } : {},
                    sorters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$differenceWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(me, ne, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
                    filters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$differenceWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ve, $, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
                }
            });
            else {
                let ot = Dr({
                    ...W ? {
                        pagination: {
                            pageSize: Ge,
                            current: Ke
                        }
                    } : {},
                    sorters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$differenceWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(me, ne, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
                    filters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$differenceWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ve, $, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
                    ...Ie
                });
                return we == null ? void 0 : we(`${w}?${ot}`, void 0, {
                    shallow: !0
                });
            }
        }
    }, [
        D,
        Ke,
        Ge,
        me,
        ve
    ]);
    let or = $t({
        resource: Ne,
        hasPagination: r,
        pagination: {
            current: Ke,
            pageSize: Ge,
            mode: s == null ? void 0 : s.mode
        },
        filters: F ? St($, ve) : void 0,
        sorters: V ? Ur(ne, me) : void 0,
        queryOptions: x,
        overtimeOptions: C,
        successNotification: d,
        errorNotification: T,
        meta: se,
        metaData: se,
        liveMode: k,
        liveParams: P,
        onLiveEvent: f,
        dataProviderName: g
    }), Bo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((Ie)=>{
        rt((ot)=>St($, Ie, ot));
    }, [
        $
    ]), Ko = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((Ie)=>{
        rt(St($, Ie));
    }, [
        $
    ]), Go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((Ie)=>{
        rt((ot)=>St($, Ie(ot)));
    }, [
        $
    ]), oa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((Ie, ot = Y)=>{
        typeof Ie == "function" ? Go(Ie) : ot === "replace" ? Ko(Ie) : Bo(Ie);
    }, [
        Go,
        Ko,
        Bo
    ]), Oo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((Ie)=>{
        ce(()=>Ur(ne, Ie));
    }, [
        ne
    ]);
    return {
        tableQueryResult: or,
        tableQuery: or,
        sorters: me,
        setSorters: Oo,
        sorter: me,
        setSorter: Oo,
        filters: ve,
        setFilters: oa,
        current: Ke,
        setCurrent: Ct,
        pageSize: Ge,
        setPageSize: Tt,
        pageCount: Ge ? Math.ceil((((_o = or.data) == null ? void 0 : _o.total) ?? 0) / Ge) : 1,
        createLinkForSyncWithLocation: bt,
        overtime: or.overtime
    };
}
o(IC, "useTable");
;
;
;
;
var Et = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({}), Mn = o(({ create: e, get: t, update: r, children: s })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Et.Provider, {
        value: {
            create: e,
            get: t,
            update: r
        }
    }, s), "AuditLogContextProvider");
var Je = o(({ logMutationOptions: e, renameMutationOptions: t } = {})=>{
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Et), { keys: n, preferLegacyKeys: i } = Z(), a = ie(), { resources: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Rt), { data: c, refetch: p, isLoading: l } = no({
        v3LegacyAuthProviderCompatible: !!(a != null && a.isLegacy),
        queryOptions: {
            enabled: !!(s != null && s.create)
        }
    }), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(async (d)=>{
        var f, P, M, Q, g;
        let T = Ee(d.resource, u), x = I((f = T == null ? void 0 : T.meta) == null ? void 0 : f.audit, (P = T == null ? void 0 : T.options) == null ? void 0 : P.audit, (Q = (M = T == null ? void 0 : T.options) == null ? void 0 : M.auditLog) == null ? void 0 : Q.permissions);
        if (x && !Xr(x, d.action)) return;
        let v;
        return l && s != null && s.create && (v = await p()), await ((g = s.create) == null ? void 0 : g.call(s, {
            ...d,
            author: c ?? (v == null ? void 0 : v.data)
        }));
    }, {
        mutationKey: n().audit().action("log").get(),
        ...e,
        meta: {
            ...e == null ? void 0 : e.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useLog", i)
        }
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(async (d)=>{
        var T;
        return await ((T = s.update) == null ? void 0 : T.call(s, d));
    }, {
        onSuccess: (d)=>{
            d != null && d.resource && r.invalidateQueries(n().audit().resource((d == null ? void 0 : d.resource) ?? "").action("list").get(i));
        },
        mutationKey: n().audit().action("rename").get(),
        ...t,
        meta: {
            ...t == null ? void 0 : t.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useLog", i)
        }
    });
    return {
        log: m,
        rename: y
    };
}, "useLog");
;
;
;
var eb = o(({ resource: e, action: t, meta: r, author: s, metaData: n, queryOptions: i })=>{
    let { get: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Et), { keys: u, preferLegacyKeys: c } = Z();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: u().audit().resource(e).action("list").params(r).get(c),
        queryFn: ()=>(a == null ? void 0 : a({
                resource: e,
                action: t,
                author: s,
                meta: r,
                metaData: n
            })) ?? Promise.resolve([]),
        enabled: typeof a < "u",
        ...i,
        retry: !1,
        meta: {
            ...i == null ? void 0 : i.meta,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXRay"])("useLogList", c, e)
        }
    });
}, "useLogList");
;
;
var fb = o(({ meta: e = {} } = {})=>{
    let t = oe(), { i18nProvider: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Xe), s = Te(), n = z(), { resources: i, resource: a, action: u } = q(), { options: { textTransformers: c } } = ge(), p = [];
    if (!(a != null && a.name)) return {
        breadcrumbs: p
    };
    let l = o((m)=>{
        var d, T, x, v, f, P;
        let y = typeof m == "string" ? Ee(m, i, t === "legacy") ?? {
            name: m
        } : m;
        if (y) {
            let M = I((d = y == null ? void 0 : y.meta) == null ? void 0 : d.parent, y == null ? void 0 : y.parentName);
            M && l(M);
            let Q = Se(y, i, t === "legacy").find((h)=>h.action === "list"), g = (T = Q == null ? void 0 : Q.resource) != null && T.list ? Q == null ? void 0 : Q.route : void 0, C = g ? t === "legacy" ? g : We(g, y == null ? void 0 : y.meta, s, e) : void 0;
            p.push({
                label: I((x = y.meta) == null ? void 0 : x.label, (v = y.options) == null ? void 0 : v.label) ?? n(`${y.name}.${y.name}`, c.humanize(y.name)),
                href: C,
                icon: I((f = y.meta) == null ? void 0 : f.icon, (P = y.options) == null ? void 0 : P.icon, y.icon)
            });
        }
    }, "addBreadcrumb");
    if (l(a), u && u !== "list") {
        let m = `actions.${u}`, y = n(m);
        typeof r < "u" && y === m ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warn$2d$once$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!0, `[useBreadcrumb]: Breadcrumb missing translate key for the "${u}" action. Please add "actions.${u}" key to your translation file.
For more information, see https://refine.dev/docs/api-reference/core/hooks/useBreadcrumb/#i18n-support`), p.push({
            label: n(`buttons.${u}`, c.humanize(u))
        })) : p.push({
            label: n(m, c.humanize(u))
        });
    }
    return {
        breadcrumbs: p
    };
}, "useBreadcrumb");
;
var Ft = o((e, t, r = !1)=>{
    let s = [], n = ze(e, t);
    for(; n;)s.push(n), n = ze(n, t);
    return s.reverse(), `/${[
        ...s,
        e
    ].map((a)=>ke((r ? a.route : void 0) ?? a.identifier ?? a.name)).join("/").replace(/^\//, "")}`;
}, "createResourceKey");
var An = o((e, t = !1)=>{
    let r = {
        item: {
            name: "__root__"
        },
        children: {}
    };
    e.forEach((n)=>{
        let i = [], a = ze(n, e);
        for(; a;)i.push(a), a = ze(a, e);
        i.reverse();
        let u = r;
        i.forEach((p)=>{
            let l = (t ? p.route : void 0) ?? p.identifier ?? p.name;
            u.children[l] || (u.children[l] = {
                item: p,
                children: {}
            }), u = u.children[l];
        });
        let c = (t ? n.route : void 0) ?? n.identifier ?? n.name;
        u.children[c] || (u.children[c] = {
            item: n,
            children: {}
        });
    });
    let s = o((n)=>{
        let i = [];
        return Object.keys(n.children).forEach((a)=>{
            let u = Ft(n.children[a].item, e, t), c = {
                ...n.children[a].item,
                key: u,
                children: s(n.children[a])
            };
            i.push(c);
        }), i;
    }, "flatten");
    return s(r);
}, "createTree");
var kn = o((e)=>e.split("?")[0].split("#")[0].replace(/(.+)(\/$)/, "$1"), "getCleanPath"), zu = o(({ meta: e, hideOnMissingParameter: t = !0 } = {
    hideOnMissingParameter: !0
})=>{
    let r = z(), s = Ut(), n = oe(), { resource: i, resources: a } = q(), { pathname: u } = Te(), { useLocation: c } = pe(), { pathname: p } = c(), l = ht(), y = `/${((n === "legacy" ? kn(p) : u ? kn(u) : void 0) ?? "").replace(/^\//, "")}`, d = i ? Ft(i, a, n === "legacy") : y ?? "", T = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "zu.useMemo[T]": ()=>{
            if (!i) return [];
            let f = ze(i, a), P = [
                Ft(i, a)
            ];
            for(; f;)P.push(Ft(f, a)), f = ze(f, a);
            return P;
        }
    }["zu.useMemo[T]"], []), x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "zu.useCallback[x]": (f)=>{
            var M, Q, g, C, h, D;
            if (I((M = f == null ? void 0 : f.meta) == null ? void 0 : M.hide, (Q = f == null ? void 0 : f.options) == null ? void 0 : Q.hide) || !(f != null && f.list) && f.children.length === 0) return;
            let P = f.list ? s({
                resource: f,
                action: "list",
                legacy: n === "legacy",
                meta: e
            }) : void 0;
            if (!(t && P && P.match(/(\/|^):(.+?)(\/|$){1}/))) return {
                ...f,
                route: P,
                icon: I((g = f.meta) == null ? void 0 : g.icon, (C = f.options) == null ? void 0 : C.icon, f.icon),
                label: I((h = f == null ? void 0 : f.meta) == null ? void 0 : h.label, (D = f == null ? void 0 : f.options) == null ? void 0 : D.label) ?? r(`${f.name}.${f.name}`, l(f.name, "plural"))
            };
        }
    }["zu.useCallback[x]"], [
        n,
        e,
        s,
        r,
        t
    ]), v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "zu.useMemo[v]": ()=>{
            let f = An(a, n === "legacy"), P = o({
                "zu.useMemo[v].P": (M)=>M.flatMap({
                        "zu.useMemo[v].P": (Q)=>{
                            let g = P(Q.children), C = x({
                                ...Q,
                                children: g
                            });
                            return C ? [
                                C
                            ] : [];
                        }
                    }["zu.useMemo[v].P"])
            }["zu.useMemo[v].P"], "prepare");
            return P(f);
        }
    }["zu.useMemo[v]"], [
        a,
        n,
        x
    ]);
    return {
        defaultOpenKeys: T,
        selectedKey: d,
        menuItems: v
    };
}, "useMenu");
;
var ko = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({}), Zu = o(({ children: e, value: t })=>{
    let r = Br(), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...r,
            ...t
        }), [
        r,
        t
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ko.Provider, {
        value: s
    }, e);
}, "MetaContextProvider"), Br = o(()=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ko)) throw new Error("useMetaContext must be used within a MetaContextProvider");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ko);
}, "useMetaContext");
var ue = o(()=>{
    let { params: e } = Te(), t = Br();
    return o(({ resource: s, meta: n } = {})=>{
        let { meta: i } = kt(s) ?? {
            meta: {}
        }, { filters: a, sorters: u, current: c, pageSize: p, ...l } = e ?? {}, m = {
            ...i,
            ...l,
            ...n
        };
        return t != null && t.tenantId && (m.tenantId = t.tenantId), m;
    }, "getMetaFn");
}, "useMeta");
;
var At = o(()=>{
    let { options: e } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(Qe);
    return e;
}, "useRefineOptions");
;
var Qn = o((e)=>{
    let t = oe(), { useParams: r } = pe(), s = Te(), n = r(), i = t === "legacy" ? n.id : s.id;
    return e ?? i;
}, "useId");
var Vn = o((e)=>{
    let t = oe(), { useParams: r } = pe(), s = Te(), n = r(), i = t === "legacy" ? n.action : s.action;
    return e ?? i;
}, "useAction");
function qe(e) {
    let { select: t, identifier: r } = q(), s = (e == null ? void 0 : e.resource) ?? r, { identifier: n = void 0, resource: i = void 0 } = s ? t(s, !0) : {}, a = r === n, u = Qn(), c = Vn(e == null ? void 0 : e.action), p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "qe.useMemo[p]": ()=>a ? (e == null ? void 0 : e.id) ?? u : e == null ? void 0 : e.id
    }["qe.useMemo[p]"], [
        a,
        e == null ? void 0 : e.id,
        u
    ]), [l, m] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(p);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "qe.useMemo": ()=>m(p)
    }["qe.useMemo"], [
        p
    ]);
    let y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "qe.useMemo[y]": ()=>!a && !(e != null && e.action) ? "create" : c === "edit" || c === "clone" ? c : "create"
    }["qe.useMemo[y]"], [
        c,
        a,
        e == null ? void 0 : e.action
    ]);
    return {
        id: l,
        setId: m,
        resource: i,
        action: c,
        identifier: n,
        formAction: y
    };
}
o(qe, "useResourceParams");
function Gr({ type: e }) {
    let t = z(), { textTransformers: { humanize: r } } = At(), s = `buttons.${e}`, n = r(e);
    return {
        label: t(s, n)
    };
}
o(Gr, "useActionableButton");
;
;
var Or = o((e)=>{
    var p, l, m;
    let t = z(), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ct), s = ((p = e.accessControl) == null ? void 0 : p.enabled) ?? r.options.buttons.enableAccessControl, n = ((l = e.accessControl) == null ? void 0 : l.hideIfUnauthorized) ?? r.options.buttons.hideIfUnauthorized, { data: i } = kr({
        resource: (m = e.resource) == null ? void 0 : m.name,
        action: e.action === "clone" ? "create" : e.action,
        params: {
            id: e.id,
            resource: e.resource
        },
        queryOptions: {
            enabled: s
        }
    }), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Or.useMemo[a]": ()=>i != null && i.can ? "" : i != null && i.reason ? i.reason : t("buttons.notAccessTitle", "You don't have permission to access")
    }["Or.useMemo[a]"], [
        i == null ? void 0 : i.can,
        i == null ? void 0 : i.reason,
        t
    ]), u = s && n && !(i != null && i.can), c = (i == null ? void 0 : i.can) === !1;
    return {
        title: a,
        hidden: u,
        disabled: c,
        canAccess: i
    };
}, "useButtonCanAccess");
function Qt(e) {
    var P;
    let t = he(), r = oe(), s = yt(), { Link: n } = pe(), i = z(), a = ht(), { textTransformers: { humanize: u } } = At(), { id: c, resource: p, identifier: l } = qe({
        resource: e.resource,
        id: e.action === "create" ? void 0 : e.id
    }), { canAccess: m, title: y, hidden: d, disabled: T } = Or({
        action: e.action,
        accessControl: e.accessControl,
        id: c,
        resource: p
    }), x = r === "legacy" ? n : s, v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Qt.useMemo[v]": ()=>{
            if (!p) return "";
            switch(e.action){
                case "create":
                case "list":
                    return t[`${e.action}Url`](p, e.meta);
                default:
                    return c ? t[`${e.action}Url`](p, c, e.meta) : "";
            }
        }
    }["Qt.useMemo[v]"], [
        p,
        c,
        e.meta,
        t[`${e.action}Url`]
    ]), f = e.action === "list" ? i(`${l ?? e.resource}.titles.list`, a(((P = p == null ? void 0 : p.meta) == null ? void 0 : P.label) ?? (p == null ? void 0 : p.label) ?? l ?? e.resource, "plural")) : i(`buttons.${e.action}`, u(e.action));
    return {
        to: v,
        label: f,
        title: y,
        disabled: T,
        hidden: d,
        canAccess: m,
        LinkComponent: x
    };
}
o(Qt, "useNavigationButton");
function qu(e) {
    let t = z(), { mutate: r, isLoading: s, variables: n } = Po(), { setWarnWhen: i } = vt(), { mutationMode: a } = _e(e.mutationMode), { id: u, resource: c, identifier: p } = qe({
        resource: e.resource,
        id: e.id
    }), { title: l, disabled: m, hidden: y, canAccess: d } = Or({
        action: "delete",
        accessControl: e.accessControl,
        id: u,
        resource: c
    }), T = t("buttons.delete", "Delete"), x = t("buttons.delete", "Delete"), v = t("buttons.confirm", "Are you sure?"), f = t("buttons.cancel", "Cancel"), P = u === (n == null ? void 0 : n.id) && s;
    return {
        label: T,
        title: l,
        hidden: y,
        disabled: m,
        canAccess: d,
        loading: P,
        confirmOkLabel: x,
        cancelLabel: f,
        confirmTitle: v,
        onConfirm: o(()=>{
            u && p && (i(!1), r({
                id: u,
                resource: p,
                mutationMode: a,
                successNotification: e.successNotification,
                errorNotification: e.errorNotification,
                meta: e.meta,
                metaData: e.meta,
                dataProviderName: e.dataProviderName,
                invalidates: e.invalidates
            }, {
                onSuccess: e.onSuccess
            }));
        }, "onConfirm")
    };
}
o(qu, "useDeleteButton");
;
function tc(e) {
    let t = z(), { keys: r, preferLegacyKeys: s } = Z(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(), i = Ae(), { identifier: a, id: u } = qe({
        resource: e.resource,
        id: e.id
    }), { resources: c } = q(), p = !!n.isFetching({
        queryKey: r().data(ee(a, e.dataProviderName, c)).resource(a).action("one").get(s)
    }), l = o(()=>{
        i({
            id: u,
            invalidates: [
                "detail"
            ],
            dataProviderName: e.dataProviderName,
            resource: a
        });
    }, "onClick"), m = t("buttons.refresh", "Refresh");
    return {
        onClick: l,
        label: m,
        loading: p
    };
}
o(tc, "useRefreshButton");
var Zv = o((e)=>Qt({
        ...e,
        action: "show"
    }), "useShowButton"), Yv = o((e)=>Qt({
        ...e,
        action: "edit"
    }), "useEditButton"), Jv = o((e)=>Qt({
        ...e,
        action: "clone"
    }), "useCloneButton"), qv = o((e)=>Qt({
        ...e,
        action: "create"
    }), "useCreateButton"), eD = o((e)=>Qt({
        ...e,
        action: "list"
    }), "useListButton"), tD = o(()=>Gr({
        type: "save"
    }), "useSaveButton"), rD = o(()=>Gr({
        type: "export"
    }), "useExportButton"), oD = o(()=>Gr({
        type: "import"
    }), "useImportButton");
var sc = o(()=>{
    let [e, t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), r = z(), { push: s } = he(), n = Pe(), i = oe(), { resource: a, action: u } = q();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        a && u && t(r("pages.error.info", {
            action: u,
            resource: a.name
        }, `You may have forgotten to add the "${u}" component to "${a.name}" resource.`));
    }, [
        a,
        u
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", null, r("pages.error.404", void 0, "Sorry, the page you visited does not exist.")), e && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", null, e), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            i === "legacy" ? s("/") : n({
                to: "/"
            });
        }
    }, r("pages.error.backHome", void 0, "Back Home")));
}, "ErrorComponent");
;
var Yr = o(()=>{
    let [e, t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [r, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), n = z(), i = ie(), { mutate: a } = Ht({
        v3LegacyAuthProviderCompatible: !!(i != null && i.isLegacy)
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", null, n("pages.login.title", "Sign in your account")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        onSubmit: (u)=>{
            u.preventDefault(), a({
                username: e,
                password: r
            });
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("table", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tbody", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tr", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("td", null, n("pages.login.username", void 0, "username"), ":"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("td", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "text",
        size: 20,
        autoCorrect: "off",
        spellCheck: !1,
        autoCapitalize: "off",
        autoFocus: !0,
        required: !0,
        value: e,
        onChange: (u)=>t(u.target.value)
    }))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tr", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("td", null, n("pages.login.password", void 0, "password"), ":"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("td", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "password",
        required: !0,
        size: 20,
        value: r,
        onChange: (u)=>s(u.target.value)
    }))))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("br", null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "submit",
        value: "login"
    })));
}, "LoginPage");
;
;
var Kn = o(({ providers: e, registerLink: t, forgotPasswordLink: r, rememberMe: s, contentProps: n, wrapperProps: i, renderContent: a, formProps: u, title: c = void 0, hideForm: p, mutationVariables: l })=>{
    let m = oe(), y = yt(), { Link: d } = pe(), T = m === "legacy" ? d : y, [x, v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [f, P] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [M, Q] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), g = z(), C = ie(), { mutate: h } = Ht({
        v3LegacyAuthProviderCompatible: !!(C != null && C.isLegacy)
    }), D = o((L, U)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(T, {
            to: L
        }, U), "renderLink"), k = o(()=>e ? e.map((L)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                key: L.name,
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem"
                }
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                onClick: ()=>h({
                        ...l,
                        providerName: L.name
                    }),
                style: {
                    display: "flex",
                    alignItems: "center"
                }
            }, L == null ? void 0 : L.icon, L.label ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", null, L.label)))) : null, "renderProviders"), E = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...n
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", {
        style: {
            textAlign: "center"
        }
    }, g("pages.login.title", "Sign in to your account")), k(), !p && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("hr", null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        onSubmit: (L)=>{
            L.preventDefault(), h({
                ...l,
                email: x,
                password: f,
                remember: M
            });
        },
        ...u
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            padding: 25
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        htmlFor: "email-input"
    }, g("pages.login.fields.email", "Email")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        id: "email-input",
        name: "email",
        type: "text",
        size: 20,
        autoCorrect: "off",
        spellCheck: !1,
        autoCapitalize: "off",
        required: !0,
        value: x,
        onChange: (L)=>v(L.target.value)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        htmlFor: "password-input"
    }, g("pages.login.fields.password", "Password")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        id: "password-input",
        type: "password",
        name: "password",
        required: !0,
        size: 20,
        value: f,
        onChange: (L)=>P(L.target.value)
    }), s ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        htmlFor: "remember-me-input"
    }, g("pages.login.buttons.rememberMe", "Remember me"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        id: "remember-me-input",
        name: "remember",
        type: "checkbox",
        size: 20,
        checked: M,
        value: M.toString(),
        onChange: ()=>{
            Q(!M);
        }
    }))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("br", null), r ?? D("/forgot-password", g("pages.login.buttons.forgotPassword", "Forgot password?")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "submit",
        value: g("pages.login.signin", "Sign in")
    }), t ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, g("pages.login.buttons.noAccount", "Don\u2019t have an account?"), " ", D("/register", g("pages.login.register", "Sign up")))))), t !== !1 && p && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            textAlign: "center"
        }
    }, g("pages.login.buttons.noAccount", "Don\u2019t have an account?"), " ", D("/register", g("pages.login.register", "Sign up"))));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...i
    }, a ? a(E, c) : E);
}, "LoginPage");
;
var On = o(({ providers: e, loginLink: t, wrapperProps: r, contentProps: s, renderContent: n, formProps: i, title: a = void 0, hideForm: u, mutationVariables: c })=>{
    let p = oe(), l = yt(), { Link: m } = pe(), y = p === "legacy" ? m : l, [d, T] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [x, v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), f = z(), P = ie(), { mutate: M, isLoading: Q } = co({
        v3LegacyAuthProviderCompatible: !!(P != null && P.isLegacy)
    }), g = o((D, k)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(y, {
            to: D
        }, k), "renderLink"), C = o(()=>e ? e.map((D)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                key: D.name,
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem"
                }
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                onClick: ()=>M({
                        ...c,
                        providerName: D.name
                    }),
                style: {
                    display: "flex",
                    alignItems: "center"
                }
            }, D == null ? void 0 : D.icon, D.label ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", null, D.label)))) : null, "renderProviders"), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...s
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", {
        style: {
            textAlign: "center"
        }
    }, f("pages.register.title", "Sign up for your account")), C(), !u && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("hr", null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        onSubmit: (D)=>{
            D.preventDefault(), M({
                ...c,
                email: d,
                password: x
            });
        },
        ...i
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            padding: 25
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        htmlFor: "email-input"
    }, f("pages.register.fields.email", "Email")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        id: "email-input",
        name: "email",
        type: "email",
        size: 20,
        autoCorrect: "off",
        spellCheck: !1,
        autoCapitalize: "off",
        required: !0,
        value: d,
        onChange: (D)=>T(D.target.value)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        htmlFor: "password-input"
    }, f("pages.register.fields.password", "Password")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        id: "password-input",
        name: "password",
        type: "password",
        required: !0,
        size: 20,
        value: x,
        onChange: (D)=>v(D.target.value)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "submit",
        value: f("pages.register.buttons.submit", "Sign up"),
        disabled: Q
    }), t ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, f("pages.login.buttons.haveAccount", "Have an account?"), " ", g("/login", f("pages.login.signin", "Sign in"))))))), t !== !1 && u && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            textAlign: "center"
        }
    }, f("pages.login.buttons.haveAccount", "Have an account?"), " ", g("/login", f("pages.login.signin", "Sign in"))));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...r
    }, n ? n(h, a) : h);
}, "RegisterPage");
;
var Wn = o(({ loginLink: e, wrapperProps: t, contentProps: r, renderContent: s, formProps: n, title: i = void 0, mutationVariables: a })=>{
    let u = z(), c = oe(), p = yt(), { Link: l } = pe(), m = c === "legacy" ? l : p, [y, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), { mutate: T, isLoading: x } = lo(), v = o((P, M)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(m, {
            to: P
        }, M), "renderLink"), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...r
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", {
        style: {
            textAlign: "center"
        }
    }, u("pages.forgotPassword.title", "Forgot your password?")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("hr", null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        onSubmit: (P)=>{
            P.preventDefault(), T({
                ...a,
                email: y
            });
        },
        ...n
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            padding: 25
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        htmlFor: "email-input"
    }, u("pages.forgotPassword.fields.email", "Email")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        id: "email-input",
        name: "email",
        type: "mail",
        autoCorrect: "off",
        spellCheck: !1,
        autoCapitalize: "off",
        required: !0,
        value: y,
        onChange: (P)=>d(P.target.value)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "submit",
        disabled: x,
        value: u("pages.forgotPassword.buttons.submit", "Send reset instructions")
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("br", null), e ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, u("pages.register.buttons.haveAccount", "Have an account? "), " ", v("/login", u("pages.login.signin", "Sign in"))))));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...t
    }, s ? s(f, i) : f);
}, "ForgotPasswordPage");
;
var $n = o(({ wrapperProps: e, contentProps: t, renderContent: r, formProps: s, title: n = void 0, mutationVariables: i })=>{
    let a = z(), u = ie(), { mutate: c, isLoading: p } = fo({
        v3LegacyAuthProviderCompatible: !!(u != null && u.isLegacy)
    }), [l, m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [y, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), T = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", {
        style: {
            textAlign: "center"
        }
    }, a("pages.updatePassword.title", "Update Password")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("hr", null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        onSubmit: (x)=>{
            x.preventDefault(), c({
                ...i,
                password: l,
                confirmPassword: y
            });
        },
        ...s
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            padding: 25
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        htmlFor: "password-input"
    }, a("pages.updatePassword.fields.password", "New Password")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        id: "password-input",
        name: "password",
        type: "password",
        required: !0,
        size: 20,
        value: l,
        onChange: (x)=>m(x.target.value)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        htmlFor: "confirm-password-input"
    }, a("pages.updatePassword.fields.confirmPassword", "Confirm New Password")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        id: "confirm-password-input",
        name: "confirmPassword",
        type: "password",
        required: !0,
        size: 20,
        value: y,
        onChange: (x)=>d(x.target.value)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "submit",
        disabled: p,
        value: a("pages.updatePassword.buttons.submit", "Update")
    }))));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...e
    }, r ? r(T, n) : T);
}, "UpdatePasswordPage");
var ac = o((e)=>{
    let { type: t } = e;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, o(()=>{
        switch(t){
            case "register":
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(On, {
                    ...e
                });
            case "forgotPassword":
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Wn, {
                    ...e
                });
            case "updatePassword":
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($n, {
                    ...e
                });
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Kn, {
                    ...e
                });
        }
    }, "renderView")());
}, "AuthPage");
;
var Qo = o(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", null, "Welcome on board"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", null, "Your configuration is completed."), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", null, "Now you can get started by adding your resources to the", " ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("code", null, "`resources`"), " property of ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("code", null, "`<Refine>`")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            gap: 8
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
        href: "https://refine.dev",
        target: "_blank",
        rel: "noreferrer"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", null, "Documentation")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
        href: "https://refine.dev/examples",
        target: "_blank",
        rel: "noreferrer"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", null, "Examples")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
        href: "https://discord.gg/refine",
        target: "_blank",
        rel: "noreferrer"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", null, "Community")))), "ReadyPage");
;
;
var uc = [
    {
        title: "Documentation",
        description: "Learn about the technical details of using Refine in your projects.",
        link: "https://refine.dev/docs",
        iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/book.svg"
    },
    {
        title: "Tutorial",
        description: "Learn how to use Refine by building a fully-functioning CRUD app, from scratch to full launch.",
        link: "https://refine.dev/tutorial",
        iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/hat.svg"
    },
    {
        title: "Templates",
        description: "Explore a range of pre-built templates, perfect everything from admin panels to dashboards and CRMs.",
        link: "https://refine.dev/templates",
        iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/application.svg"
    },
    {
        title: "Community",
        description: "Join our Discord community and keep up with the latest news.",
        link: "https://discord.gg/refine",
        iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/discord.svg"
    }
], zn = o(()=>{
    let e = Pr("(max-width: 1010px)"), t = Pr("(max-width: 650px)"), r = o(()=>t ? "1, 280px" : e ? "2, 280px" : "4, 1fr", "getGridTemplateColumns"), s = o(()=>t ? "32px" : e ? "40px" : "48px", "getHeaderFontSize"), n = o(()=>t ? "16px" : e ? "20px" : "24px", "getSubHeaderFontSize");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "fixed",
            zIndex: 10,
            inset: 0,
            overflow: "auto",
            width: "100dvw",
            height: "100dvh"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            overflow: "hidden",
            position: "relative",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            background: t ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(88.89% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(88.89% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : e ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(66.67% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(66.67% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(35.56% 50% at 50% 100%, rgba(38, 217, 127, 0.12) 0%, rgba(38, 217, 127, 0) 100%), radial-gradient(35.56% 50% at 50% 0%, rgba(71, 235, 235, 0.18) 0%, rgba(71, 235, 235, 0) 100%), #1D1E30",
            minHeight: "100%",
            minWidth: "100%",
            fontFamily: "Arial",
            color: "#FFFFFF"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            zIndex: 2,
            position: "absolute",
            width: t ? "400px" : "800px",
            height: "552px",
            opacity: "0.5",
            background: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/welcome-page-hexagon.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)"
        }
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            height: t ? "40px" : "80px"
        }
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            backgroundRepeat: "no-repeat",
            backgroundSize: t ? "112px 58px" : "224px 116px",
            backgroundImage: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/refine-logo.svg)",
            width: t ? 112 : 224,
            height: t ? 58 : 116
        }
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            height: t ? "120px" : e ? "200px" : "30vh",
            minHeight: t ? "120px" : "200px"
        }
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: "center"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", {
        style: {
            fontSize: s(),
            fontWeight: 700,
            margin: "0px"
        }
    }, "Welcome Aboard!"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h4", {
        style: {
            fontSize: n(),
            fontWeight: 400,
            margin: "0px"
        }
    }, "Your configuration is completed.")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            height: "64px"
        }
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "grid",
            gridTemplateColumns: `repeat(${r()})`,
            justifyContent: "center",
            gap: "48px",
            paddingRight: "16px",
            paddingLeft: "16px",
            paddingBottom: "32px",
            maxWidth: "976px",
            margin: "auto"
        }
    }, uc.map((i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(cc, {
            key: `welcome-page-${i.title}`,
            card: i
        })))));
}, "ConfigSuccessPage"), cc = o(({ card: e })=>{
    let { title: t, description: r, iconUrl: s, link: n } = e, [i, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            alignItems: "center"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
        onPointerEnter: ()=>a(!0),
        onPointerLeave: ()=>a(!1),
        style: {
            display: "flex",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none"
        },
        href: n
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            width: "16px",
            height: "16px",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${s})`
        }
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            fontSize: "16px",
            fontWeight: 700,
            marginLeft: "13px",
            marginRight: "14px"
        }
    }, t), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        style: {
            transition: "transform 0.5s ease-in-out, opacity 0.2s ease-in-out",
            ...i && {
                transform: "translateX(4px)",
                opacity: 1
            }
        },
        width: "12",
        height: "8",
        fill: "none",
        opacity: "0.5",
        xmlns: "http://www.w3.org/2000/svg"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M7.293.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L8.586 5H1a1 1 0 0 1 0-2h7.586L7.293 1.707a1 1 0 0 1 0-1.414Z",
        fill: "#fff"
    })))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            fontSize: "12px",
            opacity: .5,
            lineHeight: "16px"
        }
    }, r));
}, "Card");
;
var _n = o(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "fixed",
            zIndex: 11,
            inset: 0,
            overflow: "auto",
            width: "100dvw",
            height: "100dvh"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px",
            background: "#14141FBF",
            backdropFilter: "blur(3px)"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            maxWidth: "640px",
            width: "100%",
            background: "#1D1E30",
            borderRadius: "16px",
            border: "1px solid #303450",
            boxShadow: "0px 0px 120px -24px #000000"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            padding: "16px 20px",
            borderBottom: "1px solid #303450",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            position: "relative"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(dc, {
        style: {
            position: "absolute",
            left: 0,
            top: 0
        }
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            lineHeight: "24px",
            fontSize: "16px",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            gap: "16px"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(lc, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            fontWeight: 400
        }
    }, "Configuration Error"))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            padding: "20px",
            color: "#A3ADC2",
            lineHeight: "20px",
            fontSize: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        style: {
            margin: 0,
            padding: 0,
            lineHeight: "28px",
            fontSize: "16px"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("code", {
        style: {
            display: "inline-block",
            background: "#30345080",
            padding: "0 4px",
            lineHeight: "24px",
            fontSize: "16px",
            borderRadius: "4px",
            color: "#FFFFFF"
        }
    }, "<Refine />"), " ", "is not initialized. Please make sure you have it mounted in your app and placed your components inside it."), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(pc, null)))))), "ConfigErrorPage"), pc = o(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("pre", {
        style: {
            display: "block",
            overflowX: "auto",
            borderRadius: "8px",
            fontSize: "14px",
            lineHeight: "24px",
            backgroundColor: "#14141F",
            color: "#E5ECF2",
            padding: "16px",
            margin: "0",
            maxHeight: "400px",
            overflow: "auto"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#FF7B72"
        }
    }, "import"), " ", "{", " Refine, WelcomePage", " ", "}", " ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#FF7B72"
        }
    }, "from"), " ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#A5D6FF"
        }
    }, '"@refinedev/core"'), ";", `
`, `
`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#FF7B72"
        }
    }, "export"), " ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#FF7B72"
        }
    }, "default"), " ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#FF7B72"
        }
    }, "function"), " ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#FFA657"
        }
    }, "App"), "(", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "rgb(222, 147, 95)"
        }
    }), ")", " "), "{", `
`, "  ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#FF7B72"
        }
    }, "return"), " (", `
`, "    ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#79C0FF"
        }
    }, "<", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#79C0FF"
        }
    }, "Refine"), `
`, "      ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#E5ECF2",
            opacity: .6
        }
    }, "// ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "...")), `
`, "    ", ">"), `
`, "      ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            opacity: .6
        }
    }, "{", "/* ... */", "}"), `
`, "      ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#79C0FF"
        }
    }, "<", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#79C0FF"
        }
    }, "WelcomePage"), " />"), `
`, "      ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            opacity: .6
        }
    }, "{", "/* ... */", "}"), `
`, "    ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#79C0FF"
        }
    }, "</", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            color: "#79C0FF"
        }
    }, "Refine"), ">")), `
`, "  ", ");", `
`, "}"), "ExampleImplementation"), dc = o((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 204,
        height: 56,
        viewBox: "0 0 204 56",
        fill: "none",
        ...e
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-a)",
        d: "M12 0H0v12L12 0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-b)",
        d: "M28 0h-8L0 20v8L28 0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-c)",
        d: "M36 0h8L0 44v-8L36 0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-d)",
        d: "M60 0h-8L0 52v4h4L60 0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-e)",
        d: "M68 0h8L20 56h-8L68 0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-f)",
        d: "M92 0h-8L28 56h8L92 0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-g)",
        d: "M100 0h8L52 56h-8l56-56Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-h)",
        d: "M124 0h-8L60 56h8l56-56Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-i)",
        d: "M140 0h-8L76 56h8l56-56Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-j)",
        d: "M132 0h8L84 56h-8l56-56Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-k)",
        d: "M156 0h-8L92 56h8l56-56Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-l)",
        d: "M164 0h8l-56 56h-8l56-56Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-m)",
        d: "M188 0h-8l-56 56h8l56-56Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#welcome-page-error-gradient-n)",
        d: "M204 0h-8l-56 56h8l56-56Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-a",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-b",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-c",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-d",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-e",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-f",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-g",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-h",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-i",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-j",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-k",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-l",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-m",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: "welcome-page-error-gradient-n",
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "scale(124)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#FF4C4D",
        stopOpacity: .1
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#FF4C4D",
        stopOpacity: 0
    })))), "ErrorGradient"), lc = o((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        ...e
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#FF4C4D",
        fillRule: "evenodd",
        d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z",
        clipRule: "evenodd"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M7 8a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v3Zm0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
        clipRule: "evenodd"
    })), "ErrorIcon");
var mc = o(()=>{
    let { __initialized: e } = ge();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(zn, null), !e && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(_n, null));
}, "WelcomePage");
;
;
;
;
;
var fc = "4.57.7", jn = o(()=>{
    var P;
    let e = yo(), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Et), { liveProvider: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(mt), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(er), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Jt), { i18nProvider: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Xe), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(qt), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ct), { resources: c } = q(), p = ge(), l = !!t.create || !!t.get || !!t.update, m = !!(r != null && r.publish) || !!(r != null && r.subscribe) || !!(r != null && r.unsubscribe), y = !!s.useHistory || !!s.Link || !!s.Prompt || !!s.useLocation || !!s.useParams, d = !!n, T = !!(i != null && i.changeLocale) || !!(i != null && i.getLocale) || !!(i != null && i.translate), x = !!a.close || !!a.open, v = !!u.can, f = (P = p == null ? void 0 : p.options) == null ? void 0 : P.projectId;
    return {
        providers: {
            auth: e,
            auditLog: l,
            live: m,
            router: y,
            data: d,
            i18n: T,
            notification: x,
            accessControl: v
        },
        version: fc,
        resourceCount: c.length,
        projectId: f
    };
}, "useTelemetryData");
var yc = o((e)=>{
    try {
        let t = JSON.stringify(e || {});
        return typeof btoa < "u" ? btoa(t) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(t).toString("base64");
    } catch  {
        return;
    }
}, "encode"), gc = o((e)=>{
    let t = new Image;
    t.src = e;
}, "throughImage"), Tc = o((e)=>{
    fetch(e);
}, "throughFetch"), xc = o((e)=>{
    typeof Image < "u" ? gc(e) : typeof fetch < "u" && Tc(e);
}, "transport"), Zn = o(()=>{
    let e = jn(), t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(!1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Zn.useEffect": ()=>{
            if (t.current) return;
            let r = yc(e);
            r && (xc(`https://telemetry.refine.dev/telemetry?payload=${r}`), t.current = !0);
        }
    }["Zn.useEffect"], []), null;
}, "Telemetry");
var Yn = o((e)=>{
    let t = [
        "go",
        "parse",
        "back",
        "Link"
    ], r = Object.keys(e).filter((n)=>!t.includes(n));
    return r.length > 0 ? (console.warn(`Unsupported properties are found in \`routerProvider\` prop. You provided \`${r.join(", ")}\`. Supported properties are \`${t.join(", ")}\`. You may wanted to use \`legacyRouterProvider\` prop instead.`), !0) : !1;
}, "checkRouterPropMisuse");
;
var qn = o((e)=>{
    let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(!1);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "qn.useEffect": ()=>{
            t.current === !1 && e && Yn(e) && (t.current = !0);
        }
    }["qn.useEffect"], [
        e
    ]);
}, "useRouterMisuseWarning");
var Rc = o(({ legacyAuthProvider: e, authProvider: t, dataProvider: r, legacyRouterProvider: s, routerProvider: n, notificationProvider: i, accessControlProvider: a, auditLogProvider: u, resources: c, DashboardPage: p, ReadyPage: l, LoginPage: m, catchAll: y, children: d, liveProvider: T, i18nProvider: x, Title: v, Layout: f, Sider: P, Header: M, Footer: Q, OffLayoutArea: g, onLiveEvent: C, options: h })=>{
    let { optionsWithDefaults: D, disableTelemetryWithDefault: k, reactQueryWithDefaults: E } = Jr({
        options: h
    }), L = Ar(()=>{
        var b;
        return E.clientConfig instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"] ? E.clientConfig : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
            ...E.clientConfig,
            defaultOptions: {
                ...E.clientConfig.defaultOptions,
                queries: {
                    refetchOnWindowFocus: !1,
                    keepPreviousData: !0,
                    ...(b = E.clientConfig.defaultOptions) == null ? void 0 : b.queries
                }
            }
        });
    }, [
        E.clientConfig
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$devtools$2d$internal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuerySubscription"])(L);
    let w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Rc.w.useMemo": ()=>typeof i == "function" ? i : ({
                "Rc.w.useMemo": ()=>i
            })["Rc.w.useMemo"]
    }["Rc.w.useMemo"], [
        i
    ])();
    if (qn(n), s && !n && (c ?? []).length === 0) return l ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(l, null) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Qo, null);
    let { RouterComponent: N = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment } = n ? {} : s ?? {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$refinedev$2f$core$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: L
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(cn, {
        ...w
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Zo, {
        ...e ?? {},
        isProvided: !!e
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Jo, {
        ...t ?? {},
        isProvided: !!t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($s, {
        dataProvider: r
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(_s, {
        liveProvider: T
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(qs, {
        value: s && !n ? "legacy" : "new"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(tn, {
        router: n
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(xn, {
        ...s
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Zs, {
        resources: c ?? []
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(dn, {
        i18nProvider: x
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Pn, {
        ...a ?? {}
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Mn, {
        ...u ?? {}
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(an, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(cs, {
        mutationMode: D.mutationMode,
        warnWhenUnsavedChanges: D.warnWhenUnsavedChanges,
        syncWithLocation: D.syncWithLocation,
        Title: v,
        undoableTimeout: D.undoableTimeout,
        catchAll: y,
        DashboardPage: p,
        LoginPage: m,
        Layout: f,
        Sider: P,
        Footer: Q,
        Header: M,
        OffLayoutArea: g,
        hasDashboard: !!p,
        liveMode: D.liveMode,
        onLiveEvent: C,
        options: D
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(fs, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(N, null, d, !k && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Zn, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Vo, null))))))))))))))))));
}, "Refine");
;
var un = o(({ notification: e })=>{
    let t = z(), { notificationDispatch: r } = ut(), { open: s } = He(), [n, i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), a = o(()=>{
        if (e.isRunning === !0 && (e.seconds === 0 && e.doMutation(), e.isSilent || s == null || s({
            key: `${e.id}-${e.resource}-notification`,
            type: "progress",
            message: t("notifications.undoable", {
                seconds: Bt(e.seconds)
            }, `You have ${Bt(e.seconds)} seconds to undo`),
            cancelMutation: e.cancelMutation,
            undoableTimeout: Bt(e.seconds)
        }), e.seconds > 0)) {
            n && clearTimeout(n);
            let u = setTimeout(()=>{
                r({
                    type: "DECREASE_NOTIFICATION_SECOND",
                    payload: {
                        id: e.id,
                        seconds: e.seconds,
                        resource: e.resource
                    }
                });
            }, 1e3);
            i(u);
        }
    }, "cancelNotification");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        a();
    }, [
        e
    ]), null;
}, "UndoableQueue");
;
var Dc = o(({ children: e, Layout: t, Sider: r, Header: s, Title: n, Footer: i, OffLayoutArea: a })=>{
    let { Layout: u, Footer: c, Header: p, Sider: l, Title: m, OffLayoutArea: y } = ge();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(t ?? u, {
        Sider: r ?? l,
        Header: s ?? p,
        Footer: i ?? c,
        Title: n ?? m,
        OffLayoutArea: a ?? y
    }, e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Uc, null));
}, "LayoutWrapper"), Uc = o(()=>{
    let { Prompt: e } = pe(), t = z(), { warnWhen: r, setWarnWhen: s } = vt(), n = o((i)=>(i.preventDefault(), i.returnValue = t("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes."), i.returnValue), "warnWhenListener");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(r && window.addEventListener("beforeunload", n), window.removeEventListener("beforeunload", n)), [
        r
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(e, {
        when: r,
        message: t("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes."),
        setWarnWhen: s
    });
}, "UnsavedPrompt");
;
function Ec({ redirectOnFail: e = !0, appendCurrentPathToQuery: t = !0, children: r, fallback: s, loading: n, params: i }) {
    var C;
    let a = ie(), u = oe(), c = !!(a != null && a.isProvided), p = !!(a != null && a.isLegacy), l = u === "legacy", m = Te(), y = Pe(), { useLocation: d } = pe(), T = d(), { isFetching: x, isSuccess: v, data: { authenticated: f, redirectTo: P } = {} } = wr({
        v3LegacyAuthProviderCompatible: p,
        params: i
    }), M = c ? p ? v : f : !0;
    if (!c) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, r ?? null);
    if (x) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, n ?? null);
    if (M) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, r ?? null);
    if (typeof s < "u") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, s ?? null);
    let Q = p ? typeof e == "string" ? e : "/login" : typeof e == "string" ? e : P, g = `${l ? T == null ? void 0 : T.pathname : m.pathname}`.replace(/(\?.*|#.*)$/, "");
    if (Q) {
        if (l) {
            let D = t ? `?to=${encodeURIComponent(g)}` : "";
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Mc, {
                to: `${Q}${D}`
            });
        }
        let h = (C = m.params) != null && C.to ? m.params.to : y({
            to: g,
            options: {
                keepQuery: !0
            },
            type: "path"
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Lc, {
            config: {
                to: Q,
                query: t && (h ?? "").length > 1 ? {
                    to: h
                } : void 0,
                type: "replace"
            }
        });
    }
    return null;
}
o(Ec, "Authenticated");
var Lc = o(({ config: e })=>{
    let t = Pe();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Lc.useEffect": ()=>{
            t(e);
        }
    }["Lc.useEffect"], [
        t,
        e
    ]), null;
}, "Redirect"), Mc = o(({ to: e })=>{
    let { replace: t } = he();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Mc.useEffect": ()=>{
            t(e);
        }
    }["Mc.useEffect"], [
        t,
        e
    ]), null;
}, "RedirectLegacy");
;
var Vo = o(()=>{
    let { useLocation: e } = pe(), { checkAuth: t } = xe(), r = e();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        t == null || t().catch(()=>!1);
    }, [
        r == null ? void 0 : r.pathname
    ]), null;
}, "RouteChangeHandler");
;
var Sc = o(({ resource: e, action: t, params: r, fallback: s, onUnauthorized: n, children: i, queryOptions: a, ...u })=>{
    let { id: c, resource: p, action: l = "" } = qe({
        resource: e,
        id: r == null ? void 0 : r.id
    }), m = t ?? l, y = r ?? {
        id: c,
        resource: p
    }, { data: d } = kr({
        resource: p == null ? void 0 : p.name,
        action: m,
        params: y,
        queryOptions: a
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        n && (d == null ? void 0 : d.can) === !1 && n({
            resource: p == null ? void 0 : p.name,
            action: m,
            reason: d == null ? void 0 : d.reason,
            params: y
        });
    }, [
        d == null ? void 0 : d.can
    ]), d != null && d.can ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(i) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(i, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, i) : (d == null ? void 0 : d.can) === !1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, s ?? null) : null;
}, "CanAccess");
;
var ta = [
    `
    .bg-top-announcement {
        border-bottom: 1px solid rgba(71, 235, 235, 0.15);
        background: radial-gradient(
                218.19% 111.8% at 0% 0%,
                rgba(71, 235, 235, 0.1) 0%,
                rgba(71, 235, 235, 0.2) 100%
            ),
            #14141f;
    }
    `,
    `
    .top-announcement-mask {
        mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        -webkit-mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        mask-repeat: repeat;
        -webkit-mask-repeat: repeat;
        background: rgba(71, 235, 235, 0.25);
    }
    `,
    `
    .banner {
        display: flex;
        @media (max-width: 1000px) {
            display: none;
        }
    }`,
    `
    .gh-link, .gh-link:hover, .gh-link:active, .gh-link:visited, .gh-link:focus {
        text-decoration: none;
        z-index: 9;
    }
    `,
    `
    @keyframes top-announcement-glow {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
    `
];
var kc = "If you find Refine useful, you can contribute to its growth by giving it a star on GitHub", Fc = o(({ containerStyle: e })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let t = document.createElement("style");
        document.head.appendChild(t), ta.forEach((r)=>{
            var s;
            return (s = t.sheet) == null ? void 0 : s.insertRule(r, t.sheet.cssRules.length);
        });
    }, []), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "banner bg-top-announcement",
        style: {
            width: "100%",
            height: "48px"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "200px",
            width: "100%",
            maxWidth: "100vw",
            height: "100%",
            borderBottom: "1px solid #47ebeb26",
            ...e
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "top-announcement-mask",
        style: {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderBottom: "1px solid #47ebeb26"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "relative",
            width: "960px",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            width: "calc(50% - 300px)",
            height: "100%",
            position: "relative"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Hr, {
        style: {
            animationDelay: "1.5s",
            position: "absolute",
            top: "2px",
            right: "220px"
        },
        id: "1"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Hr, {
        style: {
            animationDelay: "1s",
            position: "absolute",
            top: "8px",
            right: "100px",
            transform: "rotate(180deg)"
        },
        id: "2"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ra, {
        style: {
            position: "absolute",
            right: "10px"
        },
        id: "3"
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            width: "calc(50% - 300px)",
            height: "100%",
            position: "relative"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Hr, {
        style: {
            animationDelay: "2s",
            position: "absolute",
            top: "6px",
            right: "180px",
            transform: "rotate(180deg)"
        },
        id: "4"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Hr, {
        style: {
            animationDelay: "0.5s",
            transitionDelay: "1.3s",
            position: "absolute",
            top: "2px",
            right: "40px"
        },
        id: "5"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ra, {
        style: {
            position: "absolute",
            right: "-70px"
        },
        id: "6"
    })))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Qc, {
        text: kc
    })))), "GitHubBanner"), Qc = o(({ text: e })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
        className: "gh-link",
        href: "https://s.refine.dev/github-support",
        target: "_blank",
        rel: "noreferrer",
        style: {
            position: "absolute",
            height: "100%",
            padding: "0 60px",
            display: "flex",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "linear-gradient(90deg, rgba(31, 63, 72, 0.00) 0%, #1F3F48 10%, #1F3F48 90%, rgba(31, 63, 72, 0.00) 100%)"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            color: "#fff",
            display: "flex",
            flexDirection: "row",
            gap: "8px"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }
    }, "\u2B50\uFE0F"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text",
        style: {
            fontSize: "16px",
            lineHeight: "24px"
        }
    }, e), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }
    }, "\u2B50\uFE0F"))), "Text"), Hr = o(({ style: e, ...t })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 80,
        height: 40,
        fill: "none",
        style: {
            opacity: 1,
            animation: "top-announcement-glow 1s ease-in-out infinite alternate",
            ...e
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: 40,
        r: 40,
        fill: `url(#${t.id}-a)`,
        fillOpacity: .5
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: `${t.id}-a`,
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "matrix(0 40 -40 0 40 0)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#47EBEB"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#47EBEB",
        stopOpacity: 0
    })))), "GlowSmall"), ra = o(({ style: e, ...t })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 120,
        height: 48,
        fill: "none",
        ...t,
        style: {
            opacity: 1,
            animation: "top-announcement-glow 1s ease-in-out infinite alternate",
            ...e
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: 60,
        cy: 24,
        r: 60,
        fill: `url(#${t.id}-a)`,
        fillOpacity: .5
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("radialGradient", {
        id: `${t.id}-a`,
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "matrix(0 60 -60 0 60 24)",
        gradientUnits: "userSpaceOnUse"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#47EBEB"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: 1,
        stopColor: "#47EBEB",
        stopOpacity: 0
    })))), "GlowBig");
;
var Vc = o(({ status: e, elements: { success: t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($r, {
    translationKey: "autoSave.success",
    defaultMessage: "saved"
}), error: r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($r, {
    translationKey: "autoSave.error",
    defaultMessage: "auto save failure"
}), loading: s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($r, {
    translationKey: "autoSave.loading",
    defaultMessage: "saving..."
}), idle: n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($r, {
    translationKey: "autoSave.idle",
    defaultMessage: "waiting for changes"
}) } = {} })=>{
    switch(e){
        case "success":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, t);
        case "error":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, r);
        case "loading":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, s);
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, n);
    }
}, "AutoSaveIndicator"), $r = o(({ translationKey: e, defaultMessage: t })=>{
    let r = z();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, r(e, t));
}, "Message");
;
 //# sourceMappingURL=index.mjs.map
}}),
}]);

//# sourceMappingURL=08b5e_%40refinedev_core_dist_index_mjs_b56476._.js.map