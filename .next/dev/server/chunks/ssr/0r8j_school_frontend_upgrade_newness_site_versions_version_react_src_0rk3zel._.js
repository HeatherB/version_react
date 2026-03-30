module.exports = [
"[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/i18n/routing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-rsc] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: [
        'en',
        'fr',
        'es'
    ],
    defaultLocale: 'en'
});
}),
"[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/i18n/request.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/i18n/routing.ts [app-rsc] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    let locale = await requestLocale;
    if (!locale || !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale)) {
        locale = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    }
    return {
        locale,
        messages: (await __turbopack_context__.f({
            "../../messages/en.json": {
                id: ()=>"[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/messages/en.json.[json].cjs [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/messages/en.json.[json].cjs [app-rsc] (ecmascript, async loader)")
            },
            "../../messages/fr.json": {
                id: ()=>"[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/messages/fr.json.[json].cjs [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/messages/fr.json.[json].cjs [app-rsc] (ecmascript, async loader)")
            }
        }).import(`../../messages/${locale}.json`)).default
    };
});
}),
"[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
// src/lib/db.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/node_modules/next-intl/dist/esm/development/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getMessages$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/node_modules/next-intl/dist/esm/development/server/react-server/getMessages.js [app-rsc] (ecmascript) <export default as getMessages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/lib/db.ts [app-rsc] (ecmascript)");
;
;
;
;
async function RootLayout({ children, params }) {
    const { locale } = await params;
    const messages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getMessages$3e$__["getMessages"])();
    const prismaData = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].recipe.findMany();
    console.log('prismaData ', prismaData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$school$2f$frontend_upgrade$2f$newness$2f$site_versions$2f$version_react$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
                messages: messages,
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/app/[locale]/layout.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/app/[locale]/layout.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/app/[locale]/layout.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Projects/school/frontend_upgrade/newness/site_versions/version_react/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=0r8j_school_frontend_upgrade_newness_site_versions_version_react_src_0rk3zel._.js.map