(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/HomeSignInButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeSignInButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/Login'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function HomeSignInButton({ callbackUrl }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MuiLink, {
        href: "#",
        underline: "hover",
        color: "primary.main",
        onClick: (event)=>{
            event.preventDefault();
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("tcss460", {
                callbackUrl
            });
        },
        sx: {
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            fontWeight: 700,
            textDecorationColor: "transparent",
            transition: "text-decoration-color 0.2s ease",
            "&:hover": {
                textDecorationColor: "currentColor"
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginIcon, {
                fontSize: "small"
            }, void 0, false, {
                fileName: "[project]/src/components/HomeSignInButton.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            "Sign in"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HomeSignInButton.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = HomeSignInButton;
var _c;
__turbopack_context__.k.register(_c, "HomeSignInButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fetchAPI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMovieById",
    ()=>getMovieById,
    "getPopularMovies",
    ()=>getPopularMovies,
    "getPopularTVShows",
    ()=>getPopularTVShows,
    "getTVShowById",
    ()=>getTVShowById
]);
const API_BASE = "https://tcss460-team-6-api.onrender.com";
async function getPopularMovies(page = 1) {
    const response = await fetch(`${API_BASE}/v1/media/movies/popular?page=${page}`);
    if (!response.ok) throw new Error(`Failed to fetch popular movies: ${response.statusText}`);
    return response.json();
}
async function getMovieById(id) {
    const response = await fetch(`${API_BASE}/v1/media/movies/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    return response.json();
}
async function getPopularTVShows(page = 1) {
    const response = await fetch(`${API_BASE}/v1/media/tv/popular?page=${page}`);
    if (!response.ok) throw new Error(`Failed to fetch popular TV shows: ${response.statusText}`);
    return response.json();
}
async function getTVShowById(id) {
    const response = await fetch(`${API_BASE}/v1/media/tv/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch TV show details: ${response.statusText}`);
    return response.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/format-display-year.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDisplayYear",
    ()=>formatDisplayYear,
    "formatDisplayYearFromDate",
    ()=>formatDisplayYearFromDate
]);
function formatDisplayYear(year) {
    if (!year || year <= 0) {
        return null;
    }
    return String(year);
}
function formatDisplayYearFromDate(date) {
    const yearText = date?.slice(0, 4) ?? "";
    const year = Number(yearText);
    if (!yearText || Number.isNaN(year) || year <= 0) {
        return null;
    }
    return yearText;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE,
    "ApiError",
    ()=>ApiError,
    "apiGet",
    ()=>apiGet
]);
const API_BASE = "https://tcss460-team-6-api.onrender.com";
class ApiError extends Error {
    status;
    statusText;
    constructor(status, statusText, message){
        super(message ?? `API request failed: ${status} ${statusText}`);
        this.name = "ApiError";
        this.status = status;
        this.statusText = statusText;
    }
}
async function apiGet(path) {
    const response = await fetch(`${API_BASE}${path}`);
    if (!response.ok) {
        throw new ApiError(response.status, response.statusText);
    }
    return response.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/media-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enrichedMovie",
    ()=>enrichedMovie,
    "enrichedTV",
    ()=>enrichedTV,
    "getTitleRatings",
    ()=>getTitleRatings,
    "popularMovies",
    ()=>popularMovies,
    "popularMoviesMultiPage",
    ()=>popularMoviesMultiPage,
    "popularTV",
    ()=>popularTV,
    "popularTVMultiPage",
    ()=>popularTVMultiPage,
    "searchMovies",
    ()=>searchMovies,
    "searchMoviesByCast",
    ()=>searchMoviesByCast,
    "searchTV",
    ()=>searchTV,
    "searchTVByCast",
    ()=>searchTVByCast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
function buildSearchParams(title, { page = 1, year, genreId }) {
    const params = new URLSearchParams({
        title,
        page: String(page)
    });
    if (year?.trim()) params.set("year", year.trim());
    if (genreId?.trim()) params.set("genreId", genreId.trim());
    return params;
}
function searchMovies(title, options = {}) {
    const params = buildSearchParams(title, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/media/movies?${params}`);
}
function searchTV(title, options = {}) {
    const params = buildSearchParams(title, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/media/tv?${params}`);
}
function popularMovies(page = 1) {
    const params = new URLSearchParams({
        page: String(page)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/media/movies/popular?${params}`);
}
function popularTV(page = 1) {
    const params = new URLSearchParams({
        page: String(page)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/media/tv/popular?${params}`);
}
function searchMoviesByCast(castName, page = 1) {
    const params = new URLSearchParams({
        name: castName,
        page: String(page)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/media/movies/by-cast?${params}`);
}
function searchTVByCast(castName, page = 1) {
    const params = new URLSearchParams({
        name: castName,
        page: String(page)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/media/tv/by-cast?${params}`);
}
async function popularMoviesMultiPage(pages = 4) {
    const requests = Array.from({
        length: pages
    }, (_, i)=>popularMovies(i + 1));
    const results = await Promise.allSettled(requests);
    return results.filter((r)=>r.status === "fulfilled").flatMap((r)=>r.value.results);
}
async function popularTVMultiPage(pages = 4) {
    const requests = Array.from({
        length: pages
    }, (_, i)=>popularTV(i + 1));
    const results = await Promise.allSettled(requests);
    return results.filter((r)=>r.status === "fulfilled").flatMap((r)=>r.value.results);
}
function enrichedMovie(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/media/movies/${id}/enriched`);
}
function enrichedTV(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/media/tv/${id}/enriched`);
}
function getTitleRatings(tmdbId, mediaType, page = 1) {
    const params = new URLSearchParams({
        mediaType,
        page: String(page)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/v1/ratings/${tmdbId}?${params}`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MediaPreviewModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaPreviewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/Close'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/Person'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetchAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetchAPI.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$display$2d$year$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format-display-year.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/media-api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function MediaPreviewModal({ mediaId, mediaType, onClose }) {
    _s();
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [communityRating, setCommunityRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingDetail, setLoadingDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isOpen = mediaId !== null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaPreviewModal.useEffect": ()=>{
            if (mediaId == null) {
                setDetail(null);
                setCommunityRating(null);
                setLoadingDetail(false);
                return;
            }
            let cancelled = false;
            const resolvedMediaId = mediaId;
            async function loadDetail() {
                setLoadingDetail(true);
                try {
                    const [result, ratings] = await Promise.all([
                        mediaType === "movie" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetchAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovieById"])(resolvedMediaId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetchAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTVShowById"])(resolvedMediaId),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTitleRatings"])(resolvedMediaId, mediaType)
                    ]);
                    if (!cancelled) {
                        setDetail(result);
                        setCommunityRating(ratings.totalRatings > 0 ? ratings.averageScore : null);
                    }
                } catch (err) {
                    if (!cancelled) {
                        console.error(err);
                        setDetail(null);
                        setCommunityRating(null);
                    }
                } finally{
                    if (!cancelled) {
                        setLoadingDetail(false);
                    }
                }
            }
            void loadDetail();
            return ({
                "MediaPreviewModal.useEffect": ()=>{
                    cancelled = true;
                }
            })["MediaPreviewModal.useEffect"];
        }
    }["MediaPreviewModal.useEffect"], [
        mediaId,
        mediaType
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
        open: isOpen,
        onClose: onClose,
        disableScrollLock: true,
        closeAfterTransition: true,
        slots: {
            backdrop: Backdrop
        },
        slotProps: {
            backdrop: {
                timeout: 500
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fade, {
            in: isOpen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                sx: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: {
                        xs: "90%",
                        sm: "80%",
                        md: "700px"
                    },
                    maxHeight: "90vh",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    borderRadius: 2,
                    outline: "none",
                    overflowY: "auto",
                    p: 0
                },
                children: loadingDetail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                    sx: {
                        p: 4,
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                        children: "Loading details..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MediaPreviewModal.tsx",
                        lineNumber: 123,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                    lineNumber: 122,
                    columnNumber: 13
                }, this) : detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                            sx: {
                                position: "relative",
                                height: "300px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                    onClick: onClose,
                                    sx: {
                                        position: "absolute",
                                        right: 8,
                                        top: 8,
                                        zIndex: 1,
                                        color: "white",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        "&:hover": {
                                            bgcolor: "rgba(0,0,0,0.7)"
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                    component: "img",
                                    src: detail.backdropUrl || detail.posterUrl || "",
                                    sx: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                    sx: {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "100%",
                                        p: 3,
                                        background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                                        color: "white"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                            variant: "h4",
                                            component: "h2",
                                            children: detail.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                            lineNumber: 164,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                            variant: "subtitle1",
                                            children: [
                                                mediaType === "movie" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$display$2d$year$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDisplayYear"])(detail.releaseYear) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$display$2d$year$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDisplayYearFromDate"])(detail.firstAirDate),
                                                mediaType === "movie" && ` • ${detail.runtimeMinutes ?? "?"} min`,
                                                mediaType === "tv" && ` • ${detail.totalSeasons ?? "?"} Seasons`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                            lineNumber: 167,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MediaPreviewModal.tsx",
                            lineNumber: 128,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                            sx: {
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stack, {
                                    direction: "row",
                                    spacing: 1,
                                    sx: {
                                        mb: 2,
                                        flexWrap: "wrap",
                                        rowGap: 1
                                    },
                                    children: [
                                        detail.genres.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                                label: g.name,
                                                size: "small"
                                            }, g.id, false, {
                                                fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                                lineNumber: 188,
                                                columnNumber: 23
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                            label: `TMDB ${detail.rating.toFixed(2)}/10`,
                                            color: "primary",
                                            size: "small",
                                            variant: "outlined"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                            label: communityRating == null ? "Members: No Ratings" : `Members ${(communityRating / 2).toFixed(1)}/5`,
                                            color: "secondary",
                                            size: "small",
                                            variant: "outlined"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 182,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                    variant: "h6",
                                    gutterBottom: true,
                                    children: "Overview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 208,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                    variant: "body1",
                                    color: "text.secondary",
                                    paragraph: true,
                                    children: detail.overview
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 211,
                                    columnNumber: 19
                                }, this),
                                mediaType === "movie" && detail.tagline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                    variant: "body2",
                                    sx: {
                                        fontStyle: "italic",
                                        mb: 2
                                    },
                                    children: [
                                        "“",
                                        detail.tagline,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 216,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {
                                    sx: {
                                        my: 2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 224,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                    variant: "h6",
                                    gutterBottom: true,
                                    children: "Cast"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 226,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stack, {
                                    direction: "row",
                                    spacing: 2,
                                    sx: {
                                        overflowX: "auto",
                                        pb: 1
                                    },
                                    children: detail.cast.slice(0, 5).map((member, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                            component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                            href: `/cast/${encodeURIComponent(member.name)}?image=${encodeURIComponent(member.profileUrl ?? "")}`,
                                            sx: {
                                                minWidth: "100px",
                                                textAlign: "center",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                textDecoration: "none",
                                                color: "inherit"
                                            },
                                            children: [
                                                member.profileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                                    component: "img",
                                                    src: member.profileUrl,
                                                    sx: {
                                                        width: "80px",
                                                        height: "120px",
                                                        objectFit: "cover",
                                                        borderRadius: 1,
                                                        mb: 1,
                                                        display: "block",
                                                        mx: "auto"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                                    sx: {
                                                        width: "80px",
                                                        height: "120px",
                                                        borderRadius: 1,
                                                        mb: 1,
                                                        mx: "auto",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        bgcolor: "rgba(255,255,255,0.08)",
                                                        border: "1px solid rgba(255,255,255,0.12)",
                                                        color: "rgba(255,255,255,0.35)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonIcon, {
                                                        sx: {
                                                            fontSize: 36
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                                    variant: "caption",
                                                    display: "block",
                                                    sx: {
                                                        fontWeight: "bold",
                                                        width: "100%"
                                                    },
                                                    children: member.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                                    variant: "caption",
                                                    color: "text.secondary",
                                                    display: "block",
                                                    sx: {
                                                        width: "100%"
                                                    },
                                                    children: member.character
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                            lineNumber: 235,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 229,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {
                                    sx: {
                                        my: 2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 301,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    href: `/media/${mediaType}/${detail.id}`,
                                    variant: "outlined",
                                    color: "primary",
                                    onClick: onClose,
                                    sx: {
                                        mt: 1
                                    },
                                    children: "View Full Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                                    lineNumber: 303,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MediaPreviewModal.tsx",
                            lineNumber: 181,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MediaPreviewModal.tsx",
                    lineNumber: 127,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MediaPreviewModal.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MediaPreviewModal.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MediaPreviewModal.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(MediaPreviewModal, "8vLsrH3I7VbGkB6e2k1I6YagTq0=");
_c = MediaPreviewModal;
var _c;
__turbopack_context__.k.register(_c, "MediaPreviewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CarouselTemplate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaPreviewModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MediaCarousel({ items, mediaType, infinite = true }) {
    _s();
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [highlightedId, setHighlightedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items[0]?.id ?? null);
    const isPreviewOpen = selectedId !== null;
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        width: 0
    });
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const snapPendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const wasEdgeScrollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const wheelStopTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isWheelScrollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hoverCenterIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerClientPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const hoverLockPointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchDragStartXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchDragLastXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const preventClickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const centerCandidateIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const centerHighlightTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemCount = items.length;
    const cardWidth = 180;
    const spacing = 220;
    const labelHeight = 56;
    const hoverEaseFactor = 0.1;
    const snapEaseFactor = 0.08;
    const wheelScrollFactor = 0.65;
    const touchScrollFactor = 0.65;
    const totalWidth = itemCount * spacing;
    const minOffset = -(Math.max(itemCount - 1, 0) * spacing);
    const normalizeOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MediaCarousel.useCallback[normalizeOffset]": (value)=>{
            if (!infinite || totalWidth <= 0) {
                return Math.min(0, Math.max(minOffset, value));
            }
            return value % totalWidth;
        }
    }["MediaCarousel.useCallback[normalizeOffset]"], [
        infinite,
        minOffset,
        totalWidth
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaCarousel.useEffect": ()=>{
            const updateBounds = {
                "MediaCarousel.useEffect.updateBounds": ()=>{
                    if (!carouselRef.current) return;
                    const { width } = carouselRef.current.getBoundingClientRect();
                    mousePos.current = {
                        width,
                        x: width / 2
                    };
                }
            }["MediaCarousel.useEffect.updateBounds"];
            updateBounds();
            window.addEventListener("resize", updateBounds);
            return ({
                "MediaCarousel.useEffect": ()=>window.removeEventListener("resize", updateBounds)
            })["MediaCarousel.useEffect"];
        }
    }["MediaCarousel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaCarousel.useEffect": ()=>{
            offsetRef.current = offset;
        }
    }["MediaCarousel.useEffect"], [
        offset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaCarousel.useEffect": ()=>{
            setHighlightedId(items[0]?.id ?? null);
            centerCandidateIndexRef.current = null;
        }
    }["MediaCarousel.useEffect"], [
        items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaCarousel.useEffect": ()=>{
            if (isPreviewOpen) {
                return;
            }
            isWheelScrollingRef.current = false;
            snapPendingRef.current = true;
            hoverCenterIndexRef.current = null;
            hoverLockPointerRef.current = null;
            touchDragStartXRef.current = null;
            touchDragLastXRef.current = null;
            touchDraggingRef.current = false;
            preventClickRef.current = false;
            if (wheelStopTimeoutRef.current) {
                clearTimeout(wheelStopTimeoutRef.current);
                wheelStopTimeoutRef.current = null;
            }
        }
    }["MediaCarousel.useEffect"], [
        isPreviewOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaCarousel.useEffect": ()=>{
            const animate = {
                "MediaCarousel.useEffect.animate": ()=>{
                    const { width } = mousePos.current;
                    if (!width) {
                        requestRef.current = requestAnimationFrame(animate);
                        return;
                    }
                    const isEdgeScrolling = false;
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    else if (wasEdgeScrollingRef.current) {
                        snapPendingRef.current = true;
                    }
                    if (!isPreviewOpen && !isEdgeScrolling && !isWheelScrollingRef.current && hoverCenterIndexRef.current != null && totalWidth > 0) {
                        setOffset({
                            "MediaCarousel.useEffect.animate": (prev)=>{
                                const baseTarget = -hoverCenterIndexRef.current * spacing;
                                const target = infinite ? [
                                    baseTarget - totalWidth,
                                    baseTarget,
                                    baseTarget + totalWidth
                                ].reduce({
                                    "MediaCarousel.useEffect.animate": (closest, candidate)=>Math.abs(candidate - prev) < Math.abs(closest - prev) ? candidate : closest
                                }["MediaCarousel.useEffect.animate"]) : normalizeOffset(baseTarget);
                                const delta = target - prev;
                                if (Math.abs(delta) < 0.5) {
                                    return target;
                                }
                                return prev + delta * hoverEaseFactor;
                            }
                        }["MediaCarousel.useEffect.animate"]);
                    } else if (!isPreviewOpen && !isEdgeScrolling && snapPendingRef.current && totalWidth > 0) {
                        setOffset({
                            "MediaCarousel.useEffect.animate": (prev)=>{
                                const nearestIndex = Math.round(prev / spacing);
                                const snapped = nearestIndex * spacing;
                                const delta = snapped - prev;
                                if (Math.abs(delta) < 0.5) {
                                    snapPendingRef.current = false;
                                    return snapped;
                                }
                                return prev + delta * snapEaseFactor;
                            }
                        }["MediaCarousel.useEffect.animate"]);
                    }
                    wasEdgeScrollingRef.current = isEdgeScrolling;
                    if (!isPreviewOpen && itemCount > 0) {
                        const currentOffset = offsetRef.current;
                        const nearestIndex = items.reduce({
                            "MediaCarousel.useEffect.animate.nearestIndex": (closestIndex, _item, index)=>{
                                let x = index * spacing + currentOffset;
                                if (infinite && totalWidth > 0) {
                                    x = x % totalWidth;
                                    if (x > totalWidth / 2) x -= totalWidth;
                                    if (x < -totalWidth / 2) x += totalWidth;
                                }
                                if (closestIndex === -1) {
                                    return index;
                                }
                                let closestX = closestIndex * spacing + currentOffset;
                                if (infinite && totalWidth > 0) {
                                    closestX = closestX % totalWidth;
                                    if (closestX > totalWidth / 2) closestX -= totalWidth;
                                    if (closestX < -totalWidth / 2) closestX += totalWidth;
                                }
                                return Math.abs(x) < Math.abs(closestX) ? index : closestIndex;
                            }
                        }["MediaCarousel.useEffect.animate.nearestIndex"], -1);
                        if (nearestIndex !== centerCandidateIndexRef.current) {
                            centerCandidateIndexRef.current = nearestIndex;
                            if (centerHighlightTimeoutRef.current) {
                                clearTimeout(centerHighlightTimeoutRef.current);
                            }
                            centerHighlightTimeoutRef.current = setTimeout({
                                "MediaCarousel.useEffect.animate": ()=>{
                                    const centeredItem = items[nearestIndex];
                                    if (centeredItem) {
                                        setHighlightedId(centeredItem.id);
                                    }
                                }
                            }["MediaCarousel.useEffect.animate"], 50);
                        }
                    }
                    requestRef.current = requestAnimationFrame(animate);
                }
            }["MediaCarousel.useEffect.animate"];
            requestRef.current = requestAnimationFrame(animate);
            return ({
                "MediaCarousel.useEffect": ()=>{
                    if (requestRef.current) cancelAnimationFrame(requestRef.current);
                    if (wheelStopTimeoutRef.current) clearTimeout(wheelStopTimeoutRef.current);
                    if (centerHighlightTimeoutRef.current) clearTimeout(centerHighlightTimeoutRef.current);
                }
            })["MediaCarousel.useEffect"];
        }
    }["MediaCarousel.useEffect"], [
        infinite,
        isPreviewOpen,
        itemCount,
        items,
        normalizeOffset,
        hoverEaseFactor,
        snapEaseFactor,
        spacing,
        totalWidth
    ]);
    const handleMouseMove = (e)=>{
        if (isPreviewOpen) return;
        pointerClientPosRef.current = {
            x: e.clientX,
            y: e.clientY
        };
        if (carouselRef.current) {
            const rect = carouselRef.current.getBoundingClientRect();
            mousePos.current = {
                x: e.clientX - rect.left,
                width: rect.width
            };
        }
    };
    const handleMouseLeave = ()=>{
        if (isPreviewOpen) return;
        if (carouselRef.current) {
            const { width } = carouselRef.current.getBoundingClientRect();
            mousePos.current = {
                width,
                x: width / 2
            };
            snapPendingRef.current = true;
            hoverCenterIndexRef.current = null;
            hoverLockPointerRef.current = null;
        }
    };
    const handleWheel = (e)=>{
        if (isPreviewOpen) return;
        const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        if (!horizontalIntent) return;
        e.preventDefault();
        snapPendingRef.current = false;
        hoverCenterIndexRef.current = null;
        hoverLockPointerRef.current = null;
        isWheelScrollingRef.current = true;
        setOffset((prev)=>normalizeOffset(prev - e.deltaX * wheelScrollFactor));
        if (wheelStopTimeoutRef.current) clearTimeout(wheelStopTimeoutRef.current);
        wheelStopTimeoutRef.current = setTimeout(()=>{
            isWheelScrollingRef.current = false;
            snapPendingRef.current = true;
        }, 80);
    };
    const handleItemClick = (id)=>{
        if (preventClickRef.current) {
            preventClickRef.current = false;
            return;
        }
        setSelectedId(id);
    };
    const handleClose = ()=>{
        setSelectedId(null);
    };
    const handleTouchStart = (e)=>{
        if (isPreviewOpen) {
            return;
        }
        const touch = e.touches[0];
        touchDragStartXRef.current = touch.clientX;
        touchDragLastXRef.current = touch.clientX;
        touchDraggingRef.current = false;
        preventClickRef.current = false;
        snapPendingRef.current = false;
        hoverCenterIndexRef.current = null;
        hoverLockPointerRef.current = null;
        isWheelScrollingRef.current = true;
    };
    const handleTouchMove = (e)=>{
        if (isPreviewOpen) {
            return;
        }
        const touch = e.touches[0];
        const lastX = touchDragLastXRef.current;
        const startX = touchDragStartXRef.current;
        if (lastX == null || startX == null) {
            return;
        }
        const deltaX = touch.clientX - lastX;
        const totalDelta = touch.clientX - startX;
        if (Math.abs(totalDelta) > 6) {
            touchDraggingRef.current = true;
            preventClickRef.current = true;
        }
        if (touchDraggingRef.current) {
            e.preventDefault();
            setOffset((prev)=>normalizeOffset(prev + deltaX * touchScrollFactor));
        }
        touchDragLastXRef.current = touch.clientX;
    };
    const handleTouchEnd = ()=>{
        if (isPreviewOpen) {
            return;
        }
        touchDragStartXRef.current = null;
        touchDragLastXRef.current = null;
        isWheelScrollingRef.current = false;
        snapPendingRef.current = true;
        window.setTimeout(()=>{
            touchDraggingRef.current = false;
            preventClickRef.current = false;
        }, 0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
        ref: carouselRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onWheel: handleWheel,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        sx: {
            width: "100%",
            height: {
                xs: "360px",
                sm: "400px",
                md: "460px"
            },
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            cursor: "crosshair",
            position: "relative",
            touchAction: isPreviewOpen ? "none" : "pan-y",
            pointerEvents: isPreviewOpen ? "none" : "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                sx: {
                    width: "100%",
                    height: {
                        xs: "280px",
                        sm: "300px",
                        md: "336px"
                    },
                    position: "relative"
                },
                children: items.map((item, index)=>{
                    // Calculate horizontal position with wrapping
                    let x = index * spacing + offset;
                    if (infinite && totalWidth > 0) {
                        x = x % totalWidth;
                        // Center the wrapping window around 0
                        if (x > totalWidth / 2) x -= totalWidth;
                        if (x < -totalWidth / 2) x += totalWidth;
                    }
                    // Subtle scale effect for cards near the center
                    const distanceFromCenter = Math.abs(x);
                    const scale = Math.max(0.8, 1.1 - distanceFromCenter / 1000);
                    const centerProximity = Math.max(0, 1 - distanceFromCenter / 900);
                    const imageBrightness = 0.62 + centerProximity * 0.55;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                        onClick: ()=>handleItemClick(item.id),
                        onMouseEnter: ()=>{
                            if (!isWheelScrollingRef.current && !wasEdgeScrollingRef.current) {
                                const pointer = pointerClientPosRef.current;
                                const lock = hoverLockPointerRef.current;
                                const pointerMovedEnough = !lock || Math.abs(pointer.x - lock.x) > 24 || Math.abs(pointer.y - lock.y) > 24;
                                if (!pointerMovedEnough) {
                                    return;
                                }
                                snapPendingRef.current = false;
                                hoverCenterIndexRef.current = index;
                                hoverLockPointerRef.current = pointer;
                            }
                        },
                        sx: {
                            position: "absolute",
                            width: `${cardWidth}px`,
                            height: `${280 + labelHeight}px`,
                            left: "50%",
                            top: "50%",
                            marginLeft: `-${cardWidth / 2}px`,
                            marginTop: `-${(280 + labelHeight) / 2}px`,
                            borderRadius: "8px",
                            overflow: "hidden",
                            border: highlightedId === item.id ? "3px solid #F5C518" : "3px solid transparent",
                            boxShadow: highlightedId === item.id ? "0 0 0 1px rgba(245,197,24,0.55), 0 0 24px rgba(245,197,24,0.45), 0 10px 30px rgba(0,0,0,0.5)" : "0 10px 30px rgba(0,0,0,0.5)",
                            cursor: "pointer",
                            transform: `translate3d(${x}px, 0, 0) scale(${scale})`,
                            zIndex: Math.round(100 - distanceFromCenter / 10),
                            willChange: "transform",
                            transition: "border-color 0.2s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                boxShadow: "0 0 20px #F5C518",
                                zIndex: 1000,
                                "& .poster-image": {
                                    transform: "scale(1.05)"
                                }
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                className: "poster-image",
                                sx: {
                                    position: "relative",
                                    width: "100%",
                                    height: "280px",
                                    transformOrigin: "center",
                                    transition: "transform 0.25s ease"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.posterUrl || (mediaType === "movie" ? "/movie-placeholder.svg" : "/tv-placeholder.svg"),
                                    alt: item.title,
                                    fill: true,
                                    sizes: "180px",
                                    style: {
                                        objectFit: "cover",
                                        filter: `brightness(${imageBrightness})`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarouselTemplate.tsx",
                                    lineNumber: 483,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarouselTemplate.tsx",
                                lineNumber: 473,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                className: "media-info",
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: `${labelHeight}px`,
                                    background: "transparent",
                                    color: "#F5C518",
                                    px: 1.5,
                                    py: 1,
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                    variant: "body2",
                                    sx: {
                                        fontWeight: "bold",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    },
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarouselTemplate.tsx",
                                    lineNumber: 513,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarouselTemplate.tsx",
                                lineNumber: 499,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/CarouselTemplate.tsx",
                        lineNumber: 417,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/CarouselTemplate.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mediaId: selectedId,
                mediaType: mediaType,
                onClose: handleClose
            }, void 0, false, {
                fileName: "[project]/src/components/CarouselTemplate.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CarouselTemplate.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
_s(MediaCarousel, "VmKdl/Bj/lXLLZTUpHhxwDHh4d8=");
_c = MediaCarousel;
var _c;
__turbopack_context__.k.register(_c, "MediaCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/media-filters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MEDIA_GENRES",
    ()=>MEDIA_GENRES,
    "getGenreNameById",
    ()=>getGenreNameById
]);
const MEDIA_GENRES = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    },
    {
        id: 10759,
        name: "Action & Adventure"
    },
    {
        id: 10762,
        name: "Kids"
    },
    {
        id: 10763,
        name: "News"
    },
    {
        id: 10764,
        name: "Reality"
    },
    {
        id: 10765,
        name: "Sci-Fi & Fantasy"
    },
    {
        id: 10766,
        name: "Soap"
    },
    {
        id: 10767,
        name: "Talk"
    },
    {
        id: 10768,
        name: "War & Politics"
    }
];
function getGenreNameById(id) {
    if (!id) return "";
    return MEDIA_GENRES.find((genre)=>genre.id === id)?.name ?? "";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SearchForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/Search'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/Tune'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeSignInButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HomeSignInButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/media-filters.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function SearchForm({ initialQ = "", initialMovies = false, initialTV = false, initialYear = "", initialGenreId = "", destination = "/search", compact = false, signInCallbackUrl }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQ);
    const [includeMovies, setIncludeMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMovies);
    const [includeTV, setIncludeTV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTV);
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialYear);
    const [genreId, setGenreId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialGenreId);
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchForm.useEffect": ()=>{
            setQ(initialQ);
        }
    }["SearchForm.useEffect"], [
        initialQ
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchForm.useEffect": ()=>{
            setIncludeMovies(initialMovies);
        }
    }["SearchForm.useEffect"], [
        initialMovies
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchForm.useEffect": ()=>{
            setIncludeTV(initialTV);
        }
    }["SearchForm.useEffect"], [
        initialTV
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchForm.useEffect": ()=>{
            setYear(initialYear);
        }
    }["SearchForm.useEffect"], [
        initialYear
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchForm.useEffect": ()=>{
            setGenreId(initialGenreId);
        }
    }["SearchForm.useEffect"], [
        initialGenreId
    ]);
    const canSearch = Boolean(q.trim());
    const open = Boolean(anchorEl);
    const showDefaultHelper = !includeMovies && !includeTV;
    const activeFilterCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchForm.useMemo[activeFilterCount]": ()=>{
            let count = 0;
            if (includeMovies) count += 1;
            if (includeTV) count += 1;
            if (year.trim()) count += 1;
            if (genreId.trim()) count += 1;
            return count;
        }
    }["SearchForm.useMemo[activeFilterCount]"], [
        genreId,
        includeMovies,
        includeTV,
        year
    ]);
    function runSearch() {
        if (!canSearch) return;
        const params = new URLSearchParams({
            page: "1"
        });
        if (q.trim()) params.set("q", q.trim());
        if (includeMovies) params.set("movies", "1");
        if (includeTV) params.set("tv", "1");
        if (year.trim()) params.set("year", year.trim());
        if (genreId.trim()) params.set("genreId", genreId.trim());
        router.push(`${destination}?${params}`);
    }
    function handleSubmit(e) {
        e.preventDefault();
        runSearch();
    }
    function resetFilters() {
        setIncludeMovies(false);
        setIncludeTV(false);
        setYear("");
        setGenreId("");
    }
    const filterSummary = [
        !includeMovies || !includeTV ? includeMovies ? "Movies only" : includeTV ? "TV only" : null : null,
        year.trim() ? `Year ${year.trim()}` : null,
        genreId.trim() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGenreNameById"])(Number(genreId)) || `Genre ${genreId.trim()}` : null
    ].filter(Boolean).join(" • ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
        component: "form",
        onSubmit: handleSubmit,
        sx: {
            display: "flex",
            gap: compact ? 1 : 2,
            flexWrap: "wrap",
            alignItems: "center",
            width: compact ? "100%" : "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                placeholder: "Search by title or cast member",
                value: q,
                onChange: (e)=>setQ(e.target.value),
                variant: "outlined",
                size: "small",
                sx: {
                    flexGrow: 1,
                    minWidth: compact ? {
                        xs: "100%",
                        md: 520
                    } : {
                        xs: "100%",
                        sm: 260
                    },
                    "& .MuiFormHelperText-root": {
                        color: "text.disabled"
                    }
                },
                autoFocus: !compact
            }, void 0, false, {
                fileName: "[project]/src/components/SearchForm.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                type: "button",
                variant: "outlined",
                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TuneIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 154,
                    columnNumber: 20
                }, this),
                onClick: (e)=>setAnchorEl(e.currentTarget),
                sx: {
                    whiteSpace: "nowrap",
                    width: {
                        xs: compact ? "calc(50% - 4px)" : "auto",
                        sm: "auto"
                    }
                },
                children: [
                    "Filters",
                    activeFilterCount > 0 ? ` (${activeFilterCount})` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchForm.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                type: "submit",
                variant: "contained",
                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 167,
                    columnNumber: 20
                }, this),
                disabled: !canSearch,
                sx: {
                    whiteSpace: "nowrap",
                    width: {
                        xs: compact ? "calc(50% - 4px)" : "auto",
                        sm: "auto"
                    }
                },
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/src/components/SearchForm.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            signInCallbackUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeSignInButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                callbackUrl: signInCallbackUrl
            }, void 0, false, {
                fileName: "[project]/src/components/SearchForm.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            !!filterSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                variant: "caption",
                color: "text.secondary",
                sx: {
                    width: "100%"
                },
                children: [
                    "Active filters: ",
                    filterSummary
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchForm.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popover, {
                open: open,
                anchorEl: anchorEl,
                onClose: ()=>setAnchorEl(null),
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                slotProps: {
                    paper: {
                        sx: {
                            width: {
                                xs: "calc(100vw - 32px)",
                                sm: 360
                            },
                            maxWidth: "calc(100vw - 32px)"
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                    sx: {
                        width: "100%",
                        p: 2,
                        display: "grid",
                        gap: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                            variant: "subtitle1",
                            fontWeight: "bold",
                            children: "Refine Search"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchForm.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormControlLabel, {
                                    control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                        checked: includeMovies,
                                        onChange: (e)=>setIncludeMovies(e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SearchForm.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    label: "Search movies"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchForm.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormControlLabel, {
                                    control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                        checked: includeTV,
                                        onChange: (e)=>setIncludeTV(e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SearchForm.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    label: "Search TV shows"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchForm.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchForm.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        showDefaultHelper && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                            variant: "caption",
                            color: "text.disabled",
                            children: "Search defaults to movies and TV shows."
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchForm.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                            fileName: "[project]/src/components/SearchForm.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                            label: "Release / Air Year",
                            value: year,
                            onChange: (e)=>setYear(e.target.value.replace(/[^\d]/g, "").slice(0, 4)),
                            size: "small",
                            placeholder: "e.g. 2024",
                            inputMode: "numeric"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchForm.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                            select: true,
                            label: "Genre",
                            value: genreId,
                            onChange: (e)=>setGenreId(String(e.target.value)),
                            size: "small",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                                    value: "",
                                    children: "Any genre"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchForm.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_GENRES"].map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                                        value: String(genre.id),
                                        children: genre.name
                                    }, genre.id, false, {
                                        fileName: "[project]/src/components/SearchForm.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchForm.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    type: "button",
                                    onClick: resetFilters,
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchForm.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    type: "button",
                                    variant: "contained",
                                    onClick: ()=>{
                                        setAnchorEl(null);
                                        runSearch();
                                    },
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchForm.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchForm.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SearchForm.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchForm.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(SearchForm, "TfRJnAwKdGNF/yd031VH/bKSRug=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SearchForm;
var _c;
__turbopack_context__.k.register(_c, "SearchForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HorizontalScroller.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HorizontalScroller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/ChevronLeft'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/ChevronRight'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HorizontalScroller({ children, infinite = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const childArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HorizontalScroller.useMemo[childArray]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children)
    }["HorizontalScroller.useMemo[childArray]"], [
        children
    ]);
    const [hasOverflow, setHasOverflow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(infinite);
    function scrollByAmount(direction) {
        if (!ref.current) return;
        const container = ref.current;
        const amount = Math.max(container.clientWidth * 0.8, 220);
        const delta = direction === "left" ? -amount : amount;
        container.scrollBy({
            left: delta,
            behavior: "smooth"
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HorizontalScroller.useEffect": ()=>{
            if (!ref.current) return;
            const container = ref.current;
            function updateOverflow() {
                setHasOverflow(infinite || container.scrollWidth - container.clientWidth > 1);
            }
            if (!infinite) {
                function handleWheel(e) {
                    const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY);
                    if (!horizontalIntent) return;
                    e.preventDefault();
                    container.scrollLeft += e.deltaX;
                }
                updateOverflow();
                const resizeObserver = new ResizeObserver(updateOverflow);
                resizeObserver.observe(container);
                window.addEventListener("resize", updateOverflow);
                container.addEventListener("wheel", handleWheel, {
                    passive: false
                });
                return ({
                    "HorizontalScroller.useEffect": ()=>{
                        resizeObserver.disconnect();
                        window.removeEventListener("resize", updateOverflow);
                        container.removeEventListener("wheel", handleWheel);
                    }
                })["HorizontalScroller.useEffect"];
            }
            let isAdjusting = false;
            function setInitialPosition() {
                const segmentWidth = container.scrollWidth / 3;
                if (segmentWidth > 0) {
                    container.scrollLeft = segmentWidth;
                }
            }
            function normalizeScroll() {
                if (isAdjusting) return;
                const segmentWidth = container.scrollWidth / 3;
                if (segmentWidth <= 0) return;
                if (container.scrollLeft < segmentWidth * 0.5) {
                    isAdjusting = true;
                    container.scrollLeft += segmentWidth;
                    isAdjusting = false;
                } else if (container.scrollLeft > segmentWidth * 1.5) {
                    isAdjusting = true;
                    container.scrollLeft -= segmentWidth;
                    isAdjusting = false;
                }
            }
            function handleWheel1(e) {
                const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY);
                if (!horizontalIntent) return;
                e.preventDefault();
                container.scrollLeft += e.deltaX;
                normalizeScroll();
            }
            function handleScroll() {
                normalizeScroll();
            }
            setInitialPosition();
            updateOverflow();
            const resizeObserver = new ResizeObserver({
                "HorizontalScroller.useEffect": ()=>{
                    setInitialPosition();
                    updateOverflow();
                }
            }["HorizontalScroller.useEffect"]);
            resizeObserver.observe(container);
            container.addEventListener("wheel", handleWheel1, {
                passive: false
            });
            container.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", setInitialPosition);
            return ({
                "HorizontalScroller.useEffect": ()=>{
                    resizeObserver.disconnect();
                    container.removeEventListener("wheel", handleWheel1);
                    container.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", setInitialPosition);
                }
            })["HorizontalScroller.useEffect"];
        }
    }["HorizontalScroller.useEffect"], [
        childArray.length,
        infinite
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
        sx: {
            position: "relative"
        },
        children: [
            hasOverflow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                "aria-label": "Scroll left",
                onClick: ()=>scrollByAmount("left"),
                sx: {
                    display: {
                        xs: "none",
                        md: "flex"
                    },
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 8,
                    zIndex: 2,
                    width: {
                        xs: 32,
                        sm: 40
                    },
                    borderRadius: 0,
                    bgcolor: "rgba(0,0,0,0.72)",
                    color: "primary.main",
                    border: "1px solid rgba(255,255,255,0.12)",
                    "&:hover": {
                        bgcolor: "rgba(0,0,0,0.88)"
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeftIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/HorizontalScroller.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HorizontalScroller.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                ref: ref,
                sx: {
                    display: "flex",
                    gap: 1.5,
                    overflowX: "auto",
                    pb: 1,
                    px: {
                        xs: 0,
                        md: 5.5
                    },
                    cursor: "grab",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                },
                children: infinite ? [
                    0,
                    1,
                    2
                ].map((copyIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                        sx: {
                            display: "flex",
                            gap: 1.5,
                            flexShrink: 0
                        },
                        children: childArray.map((child, childIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                sx: {
                                    display: "flex",
                                    flexShrink: 0
                                },
                                children: child
                            }, `${copyIndex}-${childIndex}`, false, {
                                fileName: "[project]/src/components/HorizontalScroller.tsx",
                                lineNumber: 172,
                                columnNumber: 19
                            }, this))
                    }, copyIndex, false, {
                        fileName: "[project]/src/components/HorizontalScroller.tsx",
                        lineNumber: 167,
                        columnNumber: 15
                    }, this)) : childArray
            }, void 0, false, {
                fileName: "[project]/src/components/HorizontalScroller.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            hasOverflow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                "aria-label": "Scroll right",
                onClick: ()=>scrollByAmount("right"),
                sx: {
                    display: {
                        xs: "none",
                        md: "flex"
                    },
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 8,
                    zIndex: 2,
                    width: {
                        xs: 32,
                        sm: 40
                    },
                    borderRadius: 0,
                    bgcolor: "rgba(0,0,0,0.72)",
                    color: "primary.main",
                    border: "1px solid rgba(255,255,255,0.12)",
                    "&:hover": {
                        bgcolor: "rgba(0,0,0,0.88)"
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRightIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/HorizontalScroller.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HorizontalScroller.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HorizontalScroller.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(HorizontalScroller, "PuVPeQ4jcDN+YTgp/SDqBsavabI=");
_c = HorizontalScroller;
var _c;
__turbopack_context__.k.register(_c, "HorizontalScroller");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GenreRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GenreRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HorizontalScroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HorizontalScroller.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaPreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$display$2d$year$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format-display-year.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function GenreRow({ genre, items, headingSx }) {
    _s();
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                variant: "h6",
                fontWeight: "bold",
                sx: {
                    mb: 1.5,
                    color: "primary.main",
                    ...headingSx
                },
                children: genre
            }, void 0, false, {
                fileName: "[project]/src/components/GenreRow.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HorizontalScroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                infinite: items.length >= 10,
                children: items.map((item)=>{
                    const year = item._type === "movie" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$display$2d$year$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDisplayYear"])(item.releaseYear) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$display$2d$year$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDisplayYearFromDate"])(item.firstAirDate);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        sx: {
                            minWidth: 140,
                            maxWidth: 140,
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardActionArea, {
                            onClick: ()=>setSelectedItem(item),
                            sx: {
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "stretch"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Box, {
                                    sx: {
                                        position: "relative"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardMedia, {
                                        component: "img",
                                        image: item.posterUrl ?? (item._type === "movie" ? "/movie-placeholder.svg" : "/tv-placeholder.svg"),
                                        alt: item.title,
                                        sx: {
                                            aspectRatio: "2/3",
                                            objectFit: "cover"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GenreRow.tsx",
                                        lineNumber: 66,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GenreRow.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                                    sx: {
                                        p: 1,
                                        "&:last-child": {
                                            pb: 1
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                            variant: "caption",
                                            fontWeight: "bold",
                                            display: "block",
                                            sx: {
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden"
                                            },
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GenreRow.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this),
                                        year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Typography, {
                                            variant: "caption",
                                            color: "text.secondary",
                                            children: year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GenreRow.tsx",
                                            lineNumber: 93,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GenreRow.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GenreRow.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this)
                    }, `${item._type}-${item.id}`, false, {
                        fileName: "[project]/src/components/GenreRow.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/GenreRow.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mediaId: selectedItem?.id ?? null,
                mediaType: selectedItem?._type ?? "movie",
                onClose: ()=>setSelectedItem(null)
            }, void 0, false, {
                fileName: "[project]/src/components/GenreRow.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GenreRow.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(GenreRow, "1YGeiIMlDw0BzM8kVWnRaE6POaA=");
_c = GenreRow;
var _c;
__turbopack_context__.k.register(_c, "GenreRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Application configuration
 * Centralized settings for the TCSS 460 demo application
 */ __turbopack_context__.s([
    "APP_CONFIG",
    ()=>APP_CONFIG
]);
const APP_CONFIG = {
    course: {
        code: "TCSS 460",
        name: "Client/Server Programming for Internet Applications",
        semester: "Spring 2026",
        university: "UW Tacoma",
        school: "School of Engineering and Technology"
    },
    app: {
        title: "7MDB",
        description: "Explore popular movies and TV shows"
    },
    routes: {
        home: "/",
        dashboard: "/dashboard",
        messagesPublic: "/messages",
        messagesView: "/messages/view",
        messagesSend: "/messages/send",
        debug: "/debug",
        profile: "/profile",
        userReviews: "/profile/reviews",
        search: "/search"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/UserAccountMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserAccountMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/ArrowDropDown'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/Logout'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/PersonOutline'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/RateReviewOutlined'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function UserAccountMenu({ label }) {
    _s();
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                color: "inherit",
                onClick: handleOpen,
                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowDropDownIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/UserAccountMenu.tsx",
                    lineNumber: 34,
                    columnNumber: 18
                }, this),
                sx: {
                    color: "text.secondary",
                    fontWeight: 600,
                    textTransform: "none",
                    px: 1.25,
                    minWidth: 0
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/UserAccountMenu.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Menu, {
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                slotProps: {
                    paper: {
                        sx: {
                            mt: 1,
                            minWidth: 260,
                            bgcolor: "#121212",
                            color: "common.white",
                            border: "1px solid",
                            borderColor: "rgba(255,255,255,0.12)"
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_CONFIG"].routes.profile,
                        onClick: handleClose,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonOutlineIcon, {
                                fontSize: "small",
                                sx: {
                                    mr: 1.5,
                                    opacity: 0.7
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserAccountMenu.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListItemText, {
                                primary: "View profile",
                                slotProps: {
                                    primary: {
                                        sx: {
                                            color: "rgba(255,255,255,0.85)"
                                        }
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserAccountMenu.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserAccountMenu.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_CONFIG"].routes.userReviews,
                        onClick: handleClose,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RateReviewOutlinedIcon, {
                                fontSize: "small",
                                sx: {
                                    mr: 1.5,
                                    opacity: 0.7
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserAccountMenu.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListItemText, {
                                primary: "Reviews, ratings, and comments",
                                slotProps: {
                                    primary: {
                                        sx: {
                                            color: "rgba(255,255,255,0.85)"
                                        }
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserAccountMenu.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserAccountMenu.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {
                        sx: {
                            borderColor: "rgba(255,255,255,0.08)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserAccountMenu.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                callbackUrl: "/"
                            }),
                        sx: {
                            color: "#ff6b6b",
                            "&:hover": {
                                bgcolor: "rgba(255,107,107,0.12)"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutIcon, {
                                fontSize: "small",
                                sx: {
                                    mr: 1.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserAccountMenu.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            "Sign out"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserAccountMenu.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserAccountMenu.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(UserAccountMenu, "+aMDa7FPcESUyQDF1vq0RSMn4/k=");
_c = UserAccountMenu;
var _c;
__turbopack_context__.k.register(_c, "UserAccountMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0.wbb-t._.js.map