module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/theme/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultTheme",
    ()=>defaultTheme
]);
(()=>{
    const e = new Error("Cannot find module '@mui/material/styles'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const defaultTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#F5C518",
            light: "#f7d155",
            dark: "#c9a000",
            contrastText: "#000000"
        },
        secondary: {
            main: "#F5C518",
            contrastText: "#000000"
        },
        background: {
            default: "#121212",
            paper: "#1f1f1f"
        },
        text: {
            primary: "#ffffff",
            secondary: "#a0a0a0",
            disabled: "#555555"
        },
        error: {
            main: "#f44336"
        },
        warning: {
            main: "#F5C518"
        },
        info: {
            main: "#29b6f6"
        },
        success: {
            main: "#66bb6a"
        },
        divider: "#2c2c2c"
    },
    typography: {
        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.2
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.3
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.3
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.4
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 600,
            lineHeight: 1.4
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: 1.5
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.5
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: 1.43
        },
        button: {
            textTransform: "none",
            fontWeight: 500
        }
    },
    spacing: 8,
    shape: {
        borderRadius: 8
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollbarColor: "#F5C518 #121212"
                },
                body: {
                    scrollbarColor: "#F5C518 #121212",
                    "&::-webkit-scrollbar": {
                        width: "10px"
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "#121212",
                        boxShadow: "inset 0 0 0 1px #2c2c2c"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "linear-gradient(180deg, #f7d155 0%, #F5C518 55%, #c9a000 100%)",
                        borderRadius: "999px",
                        border: "2px solid #121212"
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        background: "linear-gradient(180deg, #ffe07a 0%, #F5C518 55%, #d4ab00 100%)"
                    }
                },
                a: {
                    color: "inherit",
                    textDecoration: "none"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
                }
            }
        }
    }
});
}),
"[project]/src/components/ThemeRegistry.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material-nextjs/v15-appRouter'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/material/styles'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ThemeRegistry({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppRouterCacheProvider, {
        options: {
            key: "mui",
            enableCssLayer: true
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeProvider, {
            theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTheme"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CssBaseline, {}, void 0, false, {
                    fileName: "[project]/src/components/ThemeRegistry.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ThemeRegistry.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeRegistry.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Providers.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0~b7-7m._.js.map