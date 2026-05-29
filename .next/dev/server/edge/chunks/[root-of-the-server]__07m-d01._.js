(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__07m-d01._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/lib/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    providers: [
        {
            id: "tcss460",
            name: "TCSS 460 Auth",
            type: "oidc",
            issuer: process.env.AUTH_TCSS460_ISSUER,
            clientId: process.env.AUTH_TCSS460_CLIENT_ID,
            clientSecret: process.env.AUTH_TCSS460_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "openid profile email",
                    audience: process.env.AUTH_TCSS460_AUDIENCE
                }
            },
            checks: [
                "pkce",
                "state"
            ],
            client: {
                token_endpoint_auth_method: "client_secret_post"
            }
        }
    ],
    callbacks: {
        async jwt ({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
                token.idToken = account.id_token;
                token.accessTokenExpires = account.expires_at ? account.expires_at * 1000 : undefined;
            }
            return token;
        },
        async session ({ session, token }) {
            session.accessToken = token.accessToken;
            session.idToken = token.idToken;
            session.accessTokenExpires = token.accessTokenExpires;
            // `token.sub` is set by Auth.js from the OIDC id_token's `sub` claim.
            // ⚠ FOOTGUN: this is NOT necessarily the same as the access_token's `sub`,
            // and `backend-3` keys local user rows off the access_token sub (via
            // `resolveLocalUser`). For "is this resource mine?" checks against the
            // backend, decode `session.accessToken` directly — see `useMyLocalUserId`.
            // `session.user.id` here is convenient for greetings / display only.
            if (session.user && token.sub) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    session: {
        strategy: "jwt"
    }
});
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth"])((request)=>{
    if (!request.auth) {
        const signInUrl = new URL("/api/auth/signin", request.url);
        signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(signInUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
});
const config = {
    matcher: []
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__07m-d01._.js.map