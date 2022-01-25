var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/sunilsamuel/GIT/sunilsamuel-site/app/root.tsx
var root_exports = {};
__export(root_exports, {
  App: () => App,
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => AppWithProviders,
  handle: () => handle2,
  links: () => links,
  meta: () => meta
});
init_react();
var React20 = __toModule(require("react"));
var import_remix7 = __toModule(require_remix());

// app/components/spacer.tsx
init_react();
var React2 = __toModule(require("react"));
var spacerSizes = {
  "3xs": "h-6 lg:h-8",
  "2xs": "h-10 lg:h-12",
  xs: "h-20 lg:h-24",
  sm: "h-32 lg:h-36",
  base: "h-40 lg:h-48",
  lg: "h-56 lg:h-64"
};
function Spacer({
  size,
  className = ""
}) {
  return /* @__PURE__ */ React2.createElement("div", {
    className: `${className} ${spacerSizes[size]}`
  });
}

// route-module:/Users/sunilsamuel/GIT/sunilsamuel-site/app/root.tsx
var import_clsx13 = __toModule(require("clsx"));

// app/utils/theme-provider.tsx
init_react();
var React3 = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());
var Theme;
(function(Theme4) {
  Theme4["DARK"] = "dark";
  Theme4["LIGHT"] = "light";
})(Theme || (Theme = {}));
var themes = Object.values(Theme);
var ThemeContext = React3.createContext(void 0);
ThemeContext.displayName = "ThemeContext";
var prefersLightMQ = "(prefers-color-scheme: light)";
var getPreferredTheme = () => window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;
function ThemeProvider({
  children,
  specifiedTheme
}) {
  const [theme, setTheme] = React3.useState(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme))
        return specifiedTheme;
      else
        return null;
    }
    if (typeof window !== "object")
      return null;
    return getPreferredTheme();
  });
  const persistTheme = (0, import_remix2.useFetcher)();
  const persistThemeRef = React3.useRef(persistTheme);
  React3.useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  const mountRun = React3.useRef(false);
  React3.useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme)
      return;
    persistThemeRef.current.submit({ theme }, { action: "action/set-theme", method: "post" });
  }, [theme]);
  React3.useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.LIGHT : Theme.DARK);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return /* @__PURE__ */ React3.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}
var clientThemeCode = `
// hi there dear reader \u{1F44B}
// this is how I make certain we avoid a flash of the wrong theme. If you select
// a theme, then I'll know what you want in the future and you'll not see this
// script anymore.
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersLightMQ)}).matches
    ? 'light'
    : 'dark';
  
  const cl = document.documentElement.classList;
  
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Kent know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
  
  // the <dark-mode> and <light-mode> approach won't work for meta tags,
  // so we have to do it manually.
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Heya, could you let Kent know you're seeing this message? Thanks!",
    );
  }
})();
`;
function useTheme() {
  const context = React3.useContext(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-GUCV4HMU.css";

// app/styles/vendors.css
var vendors_default = "/build/_assets/vendors-IDG2BHXO.css";

// app/styles/app.css
var app_default = "/build/_assets/app-OK4FTA5O.css";

// app/styles/prose.css
var prose_default = "/build/_assets/prose-KMWPCMLN.css";

// app/components/errors.tsx
init_react();
var React19 = __toModule(require("react"));
var import_error_stack_parser = __toModule(require("error-stack-parser"));
var import_clsx12 = __toModule(require("clsx"));

// app/components/sections/hero-section.tsx
init_react();
var React8 = __toModule(require("react"));
var import_clsx5 = __toModule(require("clsx"));
var import_framer_motion2 = __toModule(require("framer-motion"));

// app/images.tsx
init_react();
var import_cloudinary_build_url = __toModule(require("cloudinary-build-url"));
(0, import_cloudinary_build_url.setConfig)({
  cloudName: "sunil-samuel-com"
});
var createImages = (images2) => {
  const imageBuilders = {};
  for (const [name, { id, alt }] of Object.entries(images2)) {
    imageBuilders[name] = getImageBuilder(id, alt);
  }
  return imageBuilders;
};
function getImageBuilder(id, alt = "") {
  function imageBuilder2(transformations) {
    return (0, import_cloudinary_build_url.buildImageUrl)(id, { transformations });
  }
  imageBuilder2.alt = alt;
  imageBuilder2.id = id;
  return imageBuilder2;
}
var images = createImages({
  sunilSignatureDarkMode: {
    id: "sunil/signature-dark-mode",
    alt: `Sunil's signature`
  },
  sunilSignatureLightMode: {
    id: "sunil/signature-light-mode",
    alt: `Sunil's signature`
  },
  sunilTransparentProfile: {
    id: "sunil/profile-transparent",
    alt: "Sunil Samuel"
  },
  sunilProfile: {
    id: "sunil/profile",
    alt: "Sunil Samuel"
  },
  sunilSnowSports: {
    id: "sunil/snow-sports",
    alt: "Sunil wearing snow clothes with skis and a snowboard"
  }
});
function getImgProps(imageBuilder2, {
  widths,
  sizes,
  transformations
}) {
  const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length);
  return {
    alt: imageBuilder2.alt,
    src: imageBuilder2(__spreadProps(__spreadValues({
      quality: "auto",
      format: "auto"
    }, transformations), {
      resize: __spreadValues({ width: averageSize }, transformations == null ? void 0 : transformations.resize)
    })),
    srcSet: widths.map((width) => [
      imageBuilder2(__spreadProps(__spreadValues({
        quality: "auto",
        format: "auto"
      }, transformations), {
        resize: __spreadValues({ width }, transformations == null ? void 0 : transformations.resize)
      })),
      `${width}w`
    ].join(" ")).join(", "),
    sizes: sizes.join(", ")
  };
}

// app/components/typography.tsx
init_react();
var React4 = __toModule(require("react"));
var import_clsx = __toModule(require("clsx"));
var fontSize = {
  h1: "leading-tight text-4xl md:text-5xl",
  h2: "leading-tight text-3xl md:text-4xl",
  h3: "text-2xl font-medium md:text-3xl",
  h4: "text-xl font-medium md:text-2xl",
  h5: "text-lg font-medium md:text-xl",
  h6: "text-lg font-medium"
};
var titleColors = {
  primary: "text-black dark:text-white",
  secondary: "text-gray-400 dark:text-blueGray-500"
};
function Title(_a) {
  var _b = _a, {
    variant = "primary",
    size,
    as,
    className
  } = _b, rest = __objRest(_b, [
    "variant",
    "size",
    "as",
    "className"
  ]);
  const Tag = as ?? size;
  return /* @__PURE__ */ React4.createElement(Tag, __spreadValues({
    className: (0, import_clsx.default)(fontSize[size], titleColors[variant], className)
  }, rest));
}
function H2(props) {
  return /* @__PURE__ */ React4.createElement(Title, __spreadProps(__spreadValues({}, props), {
    size: "h2"
  }));
}
function H3(props) {
  return /* @__PURE__ */ React4.createElement(Title, __spreadProps(__spreadValues({}, props), {
    size: "h3"
  }));
}
function H6(props) {
  return /* @__PURE__ */ React4.createElement(Title, __spreadProps(__spreadValues({}, props), {
    size: "h6"
  }));
}

// app/components/arrow-button.tsx
init_react();
var React6 = __toModule(require("react"));
var import_clsx3 = __toModule(require("clsx"));
var import_remix3 = __toModule(require_remix());
var import_framer_motion = __toModule(require("framer-motion"));

// app/components/icons/arrow-icon.tsx
init_react();
var import_clsx2 = __toModule(require("clsx"));
var React5 = __toModule(require("react"));
var rotationMap = {
  up: "rotate-180",
  right: "-rotate-90",
  down: "rotate-0",
  left: "rotate-90",
  "top-right": "-rotate-135"
};
function ArrowIcon({ direction, size = 32, className }) {
  return /* @__PURE__ */ React5.createElement("svg", {
    className: (0, import_clsx2.default)(className, "transform", rotationMap[direction]),
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React5.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z",
    fill: "currentColor"
  }));
}

// app/components/hooks/use-element-state.tsx
init_react();
var import_react = __toModule(require("react"));
function useElementState() {
  const ref = (0, import_react.useRef)(null);
  const [state, setState] = (0, import_react.useState)({
    focus: false,
    hover: false,
    active: false
  });
  const setRef = (0, import_react.useCallback)((element) => {
    ref.current = element;
  }, []);
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el)
      return;
    const pointerenter = () => setState((s) => __spreadProps(__spreadValues({}, s), { hover: true }));
    const pointerleave = () => setState((s) => __spreadProps(__spreadValues({}, s), { hover: false }));
    const focus = () => setState((s) => __spreadProps(__spreadValues({}, s), { focus: true }));
    const blur = () => setState((s) => __spreadProps(__spreadValues({}, s), { focus: false }));
    const pointerdown = () => {
      setState((s) => __spreadProps(__spreadValues({}, s), { active: true }));
      const pointerup = () => {
        setState((s) => __spreadProps(__spreadValues({}, s), { active: false }));
        window.removeEventListener("pointerup", pointerup);
        window.removeEventListener("pointercancel", pointerup);
      };
      window.addEventListener("pointerup", pointerup);
      window.addEventListener("pointercancel", pointerup);
    };
    const keydown = (event) => {
      if (event.key !== "Enter") {
        return;
      }
      setState((s) => __spreadProps(__spreadValues({}, s), { active: true }));
      const keyup = () => setState((s) => __spreadProps(__spreadValues({}, s), { active: false }));
      window.addEventListener("keyup", keyup, { once: true });
    };
    el.addEventListener("pointerenter", pointerenter);
    el.addEventListener("pointerleave", pointerleave);
    el.addEventListener("focus", focus);
    el.addEventListener("blur", blur);
    el.addEventListener("pointerdown", pointerdown);
    el.addEventListener("keydown", keydown);
    return () => {
      el.removeEventListener("pointerenter", pointerenter);
      el.removeEventListener("pointerleave", pointerleave);
      el.removeEventListener("focus", focus);
      el.removeEventListener("blur", blur);
      el.removeEventListener("pointerdown", pointerdown);
      el.removeEventListener("keydown", keydown);
    };
  }, []);
  const status = state.active ? "active" : state.focus ? "focus" : state.hover ? "hover" : "initial";
  return [setRef, status];
}

// app/components/arrow-button.tsx
var arrowVariants = {
  down: {
    initial: { y: 0 },
    hover: { y: 4 },
    focus: {
      y: [0, 4, 0],
      transition: { repeat: Infinity }
    },
    active: { y: 12 }
  },
  up: {
    initial: { y: 0 },
    hover: { y: -4 },
    focus: {
      y: [0, -4, 0],
      transition: { repeat: Infinity }
    },
    active: { y: -12 }
  },
  left: {
    initial: { x: 0 },
    hover: { x: -4 },
    focus: {
      x: [0, -4, 0],
      transition: { repeat: Infinity }
    },
    active: { x: -12 }
  },
  right: {
    initial: { x: 0 },
    hover: { x: 4 },
    focus: {
      x: [0, 4, 0],
      transition: { repeat: Infinity }
    },
    active: { x: 12 }
  },
  "top-right": {
    initial: { x: 0, y: 0 },
    hover: { x: 4, y: -4 },
    focus: {
      x: [0, 4, 0],
      y: [0, -4, 0],
      transition: { repeat: Infinity }
    },
    active: { x: 12, y: -12 }
  }
};
function getBaseProps({ textSize, className }) {
  return {
    className: (0, import_clsx3.default)("text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition", {
      "text-xl": textSize === "medium",
      "text-lg": textSize === "small"
    }, className)
  };
}
function ArrowButtonContent({
  children,
  direction = "right"
}) {
  const circumference = 28 * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const shouldReduceMotion = (0, import_framer_motion.useReducedMotion)();
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, children && (direction === "right" || direction === "up" || direction === "top-right") ? /* @__PURE__ */ React6.createElement("span", {
    className: "mr-8 text-xl font-medium"
  }, children) : null, /* @__PURE__ */ React6.createElement("div", {
    className: "relative inline-flex flex-none items-center justify-center p-1 w-14 h-14"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "absolute text-gray-200 dark:text-gray-600"
  }, /* @__PURE__ */ React6.createElement("svg", {
    width: "60",
    height: "60"
  }, /* @__PURE__ */ React6.createElement("circle", {
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "transparent",
    r: "28",
    cx: "30",
    cy: "30"
  }), /* @__PURE__ */ React6.createElement(import_framer_motion.motion.circle, {
    className: "text-primary",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "transparent",
    r: "28",
    cx: "30",
    cy: "30",
    style: { strokeDasharray, rotate: -90 },
    variants: {
      initial: { strokeDashoffset: circumference },
      hover: { strokeDashoffset: 0 },
      focus: { strokeDashoffset: 0 },
      active: { strokeDashoffset: 0 }
    },
    transition: __spreadValues({
      damping: 0
    }, shouldReduceMotion ? { duration: 0 } : null)
  }))), /* @__PURE__ */ React6.createElement(import_framer_motion.motion.span, {
    transition: shouldReduceMotion ? { duration: 0 } : {},
    variants: shouldReduceMotion ? {} : arrowVariants[direction]
  }, /* @__PURE__ */ React6.createElement(ArrowIcon, {
    direction
  }))), children && (direction === "left" || direction === "down") ? /* @__PURE__ */ React6.createElement("span", {
    className: "ml-8 text-xl font-medium"
  }, children) : null);
}
var MotionLink = (0, import_framer_motion.motion)(import_remix3.Link);
function ArrowLink(_a) {
  var _b = _a, { to, href } = _b, props = __objRest(_b, ["to", "href"]);
  const [ref, state] = useElementState();
  const shouldReduceMotion = (0, import_framer_motion.useReducedMotion)();
  if (href) {
    return /* @__PURE__ */ React6.createElement(import_framer_motion.motion.a, __spreadProps(__spreadValues({
      href
    }, getBaseProps(props)), {
      ref,
      animate: state,
      transition: shouldReduceMotion ? { duration: 0 } : {}
    }), /* @__PURE__ */ React6.createElement(ArrowButtonContent, __spreadValues({}, props)));
  } else if (to) {
    return /* @__PURE__ */ React6.createElement(MotionLink, __spreadProps(__spreadValues({
      to
    }, getBaseProps(props)), {
      ref,
      animate: state,
      transition: shouldReduceMotion ? { duration: 0 } : {}
    }), /* @__PURE__ */ React6.createElement(ArrowButtonContent, __spreadValues({}, props)));
  }
  throw new Error("Must provide either to or href to ArrowLink");
}

// app/components/grid.tsx
init_react();
var React7 = __toModule(require("react"));
var import_clsx4 = __toModule(require("clsx"));
var Grid = React7.forwardRef(function Grid2({ children, className, as: Tag = "div", featured, nested, rowGap }, ref) {
  return /* @__PURE__ */ React7.createElement(Tag, {
    ref,
    className: (0, import_clsx4.default)("relative", {
      "mx-10vw": !nested,
      "w-full": nested,
      "py-10 md:py-24 lg:pb-40 lg:pt-36": featured
    })
  }, featured ? /* @__PURE__ */ React7.createElement("div", {
    className: "absolute inset-0 -mx-5vw"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "bg-secondary mx-auto w-full max-w-8xl h-full rounded-lg"
  })) : null, /* @__PURE__ */ React7.createElement("div", {
    className: (0, import_clsx4.default)("relative grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12", {
      "mx-auto max-w-7xl": !nested,
      "gap-y-4 lg:gap-y-6": rowGap
    }, className)
  }, children));
});

// app/components/sections/hero-section.tsx
function HeroSection({
  action,
  title,
  subtitle,
  arrowUrl,
  arrowLabel,
  image,
  imageProps,
  imageSize = "medium",
  as = "header"
}) {
  const hasImage = false;
  const shouldReduceMotion = (0, import_framer_motion2.useReducedMotion)();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return /* @__PURE__ */ React8.createElement(Grid, {
    as,
    className: (0, import_clsx5.default)("lg:min-h-[40rem] lg: mb-24 pt-24 h-auto lg:pb-12", {
      "lg:mb-64": arrowLabel,
      "lg:mb-0": !arrowLabel
    })
  }, hasImage ? /* @__PURE__ */ React8.createElement("div", {
    className: (0, import_clsx5.default)("col-span-full mb-12 lg:mb-0", {
      "lg:col-start-7 lg:col-span-5 px-10": imageSize === "medium",
      "lg:col-start-6 lg:col-span-6 pl-10 flex items-start justify-end": imageSize === "large",
      "lg:col-start-6 lg:col-span-7 lg:px-0 lg:-mt-24 lg:-mr-5vw flex items-center justify-center": imageSize === "giant"
    })
  }, imageProps ? /* @__PURE__ */ React8.createElement(import_framer_motion2.motion.img, __spreadProps(__spreadValues({}, imageProps), {
    className: (0, import_clsx5.default)("w-full h-auto object-contain", {
      "max-h-50vh": imageSize === "medium",
      "max-h-75vh": imageSize === "giant"
    }, imageProps.className),
    initial: { scale: shouldReduceMotion ? 1 : 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.75 }
  })) : imageBuilder ? /* @__PURE__ */ React8.createElement(import_framer_motion2.motion.img, __spreadProps(__spreadValues({
    className: (0, import_clsx5.default)("w-full h-auto object-contain", {
      "max-h-50vh": imageSize === "medium",
      "max-h-75vh": imageSize === "giant"
    })
  }, getHeroImageProps(imageBuilder)), {
    initial: { scale: shouldReduceMotion ? 1 : 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.75 }
  })) : image) : null, /* @__PURE__ */ React8.createElement("div", {
    className: (0, import_clsx5.default)("col-span-full pt-6 lg:flex lg:flex-col lg:col-start-1 lg:row-start-1 lg:h-full", {
      "lg:col-span-5": hasImage,
      "lg:col-span-7": !hasImage
    })
  }, /* @__PURE__ */ React8.createElement(import_framer_motion2.motion.div, {
    className: "flex flex-auto flex-col",
    initial: "initial",
    animate: "visible",
    variants: {
      initial: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    }
  }, /* @__PURE__ */ React8.createElement(import_framer_motion2.motion.div, {
    variants: childVariants
  }, /* @__PURE__ */ React8.createElement(H2, {
    as: "h2"
  }, title)), subtitle ? /* @__PURE__ */ React8.createElement(import_framer_motion2.motion.div, {
    variants: childVariants
  }, /* @__PURE__ */ React8.createElement(H2, {
    as: "p",
    variant: "secondary",
    className: "mt-3"
  }, subtitle)) : null, action ? /* @__PURE__ */ React8.createElement(import_framer_motion2.motion.div, {
    variants: childVariants,
    className: "flex flex-col mt-14 space-y-4"
  }, action) : null), arrowUrl ? /* @__PURE__ */ React8.createElement(import_framer_motion2.motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 1 },
    className: "hidden pt-12 lg:block"
  }, /* @__PURE__ */ React8.createElement(ArrowLink, {
    to: arrowUrl,
    direction: "down",
    textSize: "small"
  }, arrowLabel)) : null));
}
function getHeroImageProps(imageBuilder2, transformations) {
  return getImgProps(imageBuilder2, {
    widths: [256, 550, 700, 900, 1300, 1800],
    sizes: [
      "(max-width: 1023px) 80vw",
      "(min-width: 1024px) and (max-width: 1279px) 50vw",
      "(min-width: 1280px) 900px"
    ],
    transformations
  });
}

// app/components/sections/blog-section.tsx
init_react();
var import_clsx11 = __toModule(require("clsx"));
var React18 = __toModule(require("react"));

// app/components/article-card.tsx
init_react();
var React16 = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
var import_clsx9 = __toModule(require("clsx"));
var import_format = __toModule(require("date-fns/format"));
var import_parseISO = __toModule(require("date-fns/parseISO"));

// app/components/clipboard-copy-button.tsx
init_react();
var import_clsx6 = __toModule(require("clsx"));
var React11 = __toModule(require("react"));

// app/components/icons/check-icon.tsx
init_react();
var React9 = __toModule(require("react"));
function CheckIcon() {
  return /* @__PURE__ */ React9.createElement("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React9.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
  }));
}

// app/components/icons/copy-icon.tsx
init_react();
var React10 = __toModule(require("react"));
function CopyIcon() {
  return /* @__PURE__ */ React10.createElement("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React10.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
  }), /* @__PURE__ */ React10.createElement("rect", {
    width: "10.5",
    height: "10.5",
    x: "8.75",
    y: "8.75",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    rx: "2"
  }));
}

// app/components/clipboard-copy-button.tsx
async function copyToClipboard(value) {
  try {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(value);
      return true;
    }
    const element = document.createElement("textarea");
    element.value = value;
    document.body.append(element);
    element.select();
    document.execCommand("copy");
    element.remove();
    return true;
  } catch {
    return false;
  }
}
var State;
(function(State2) {
  State2["Idle"] = "idle";
  State2["Copy"] = "copy";
  State2["Copied"] = "copied";
})(State || (State = {}));
function ClipboardCopyButton({
  value,
  className,
  variant = "responsive"
}) {
  const [state, setState] = React11.useState(State.Idle);
  React11.useEffect(() => {
    async function transition() {
      switch (state) {
        case State.Copy: {
          const res = await copyToClipboard(value);
          console.log("copied", res);
          setState(State.Copied);
          break;
        }
        case State.Copied: {
          setTimeout(() => {
            setState(State.Idle);
          }, 2e3);
          break;
        }
        default:
          break;
      }
    }
    void transition();
  }, [state, value]);
  return /* @__PURE__ */ React11.createElement("button", {
    onClick: () => setState(State.Copy),
    className: (0, import_clsx6.default)("p-3 text-black whitespace-nowrap text-lg font-medium bg-white rounded-lg focus:outline-none shadow hover:shadow-md group-hover:opacity-100 peer-hover:opacity-100 hover:opacity-100 peer-focus:opacity-100 focus:opacity-100 transition focus:ring-4 hover:ring-4 ring-team-current lg:opacity-0", { "lg:px-8 lg:py-4": variant === "responsive" }, className)
  }, /* @__PURE__ */ React11.createElement("span", {
    className: (0, import_clsx6.default)("hidden", { "lg:inline": variant === "responsive" })
  }, state === State.Copied ? "Copied to clipboard" : "Click to copy url"), /* @__PURE__ */ React11.createElement("span", {
    className: (0, import_clsx6.default)("inline", { "lg:hidden": variant === "responsive" })
  }, state === State.Copied ? /* @__PURE__ */ React11.createElement(CheckIcon, null) : /* @__PURE__ */ React11.createElement(CopyIcon, null)));
}

// app/components/blurrable-image.tsx
init_react();
var React13 = __toModule(require("react"));
var import_clsx7 = __toModule(require("clsx"));

// app/utils/misc.tsx
init_react();
var React12 = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());
var dateFns = __toModule(require("date-fns"));
var import_md5_hash = __toModule(require("md5-hash"));
var useSSRLayoutEffect = typeof window === "undefined" ? () => {
} : React12.useLayoutEffect;
var AnchorOrLink = React12.forwardRef(function AnchorOrLink2(props, ref) {
  var _b;
  const _a = props, {
    to,
    href,
    download,
    reload = false,
    prefetch,
    children
  } = _a, rest = __objRest(_a, [
    "to",
    "href",
    "download",
    "reload",
    "prefetch",
    "children"
  ]);
  let toUrl = "";
  let shouldUserRegularAnchor = reload || download;
  if (!shouldUserRegularAnchor && typeof href === "string") {
    shouldUserRegularAnchor = href.includes(":") || href.startsWith("#");
  }
  if (!shouldUserRegularAnchor && typeof to === "string") {
    toUrl = to;
    shouldUserRegularAnchor = to.includes(":");
  }
  if (!shouldUserRegularAnchor && typeof to === "object") {
    toUrl = `${to.pathname ?? ""}${to.hash ? `#${to.hash}` : ""}${to.search ? `?${to.search}` : ""}`;
    shouldUserRegularAnchor = (_b = to.pathname) == null ? void 0 : _b.includes(":");
  }
  if (shouldUserRegularAnchor) {
    return /* @__PURE__ */ React12.createElement("a", __spreadProps(__spreadValues({}, rest), {
      download,
      href: href ?? toUrl,
      ref
    }), children);
  } else {
    return /* @__PURE__ */ React12.createElement(import_remix4.Link, __spreadProps(__spreadValues({
      prefetch,
      to: to ?? href ?? ""
    }, rest), {
      ref
    }), children);
  }
});

// app/components/blurrable-image.tsx
function BlurrableImage(_a) {
  var _b = _a, {
    img,
    blurDataUrl
  } = _b, rest = __objRest(_b, [
    "img",
    "blurDataUrl"
  ]);
  const [visible, setVisible] = React13.useState(false);
  const jsImgElRef = React13.useRef(null);
  useSSRLayoutEffect(() => {
    var _a2;
    if ((_a2 = jsImgElRef.current) == null ? void 0 : _a2.complete)
      setVisible(true);
  }, []);
  React13.useEffect(() => {
    if (!jsImgElRef.current)
      return;
    if (jsImgElRef.current.complete)
      return;
    let current = true;
    jsImgElRef.current.addEventListener("load", () => {
      if (!jsImgElRef.current || !current)
        return;
      setTimeout(() => {
        setVisible(true);
      }, 0);
    });
    return () => {
      current = false;
    };
  }, []);
  const jsImgEl = React13.cloneElement(img, {
    ref: jsImgElRef,
    className: (0, import_clsx7.default)(img.props.className, "transition-opacity", {
      "opacity-0": !visible
    })
  });
  return /* @__PURE__ */ React13.createElement("div", __spreadValues({}, rest), blurDataUrl ? /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("img", {
    key: blurDataUrl,
    src: blurDataUrl,
    className: img.props.className,
    alt: img.props.alt
  }), /* @__PURE__ */ React13.createElement("div", {
    className: (0, import_clsx7.default)(img.props.className, "backdrop-blur-xl")
  })) : null, jsImgEl, /* @__PURE__ */ React13.createElement("noscript", null, img));
}

// app/utils/use-root-data.ts
init_react();

// app/utils/providers.tsx
init_react();
var React14 = __toModule(require("react"));
var import_remix5 = __toModule(require_remix());
function createSimpleContext(name) {
  const defaultValue = Symbol(`Default ${name} context value`);
  const Context = React14.createContext(defaultValue);
  Context.displayName = name;
  function useValue() {
    const value = React14.useContext(Context);
    if (value === defaultValue) {
      throw new Error(`use${name} must be used within ${name}Provider`);
    }
    if (!value) {
      throw new Error(`No value in ${name}Provider context. If the value is optional in this situation, try useOptional${name} instead of use${name}`);
    }
    return value;
  }
  function useOptionalValue() {
    const value = React14.useContext(Context);
    if (value === defaultValue) {
      throw new Error(`useOptional${name} must be used within ${name}Provider`);
    }
    return value;
  }
  return { Provider: Context.Provider, useValue, useOptionalValue };
}
var {
  Provider: ChatsEpisodeUIStateProvider,
  useValue: useChatsEpisodeUIState
} = createSimpleContext("ChatsEpisodeUIState");
function useMatchLoaderData(handleId) {
  const matches = (0, import_remix5.useMatches)();
  const match = matches.find(({ handle: handle3 }) => (handle3 == null ? void 0 : handle3.id) === handleId);
  if (!match) {
    throw new Error(`No active route has a handle ID of ${handleId}`);
  }
  return match.data;
}

// app/root.tsx
init_react();
var React15 = __toModule(require("react"));
var import_clsx8 = __toModule(require("clsx"));
var handle = {
  id: "root"
};
var Theme2;
(function(Theme4) {
  Theme4["DARK"] = "dark";
  Theme4["LIGHT"] = "light";
})(Theme2 || (Theme2 = {}));

// app/utils/use-root-data.ts
var useRootData = () => useMatchLoaderData(handle.id);

// app/components/article-card.tsx
function ArticleCard({
  leadingTeam,
  article: {
    readTime,
    slug,
    frontmatter,
    frontmatter: {
      date = (0, import_format.default)(new Date(), "yyyy-MM-ii"),
      title = "Untitled Post",
      bannerCloudinaryId,
      bannerBlurDataUrl
    }
  }
}) {
  const { requestInfo } = useRootData();
  const permalink = `${requestInfo.origin}/blog/${slug}`;
  return /* @__PURE__ */ React16.createElement("div", {
    className: (0, import_clsx9.default)("relative w-full", leadingTeam ? `set-color-team-current-${leadingTeam.toLowerCase()}` : null)
  }, /* @__PURE__ */ React16.createElement(import_remix6.Link, {
    prefetch: "intent",
    className: "group peer relative block w-full focus:outline-none",
    to: `/blog/${slug}`
  }, bannerCloudinaryId ? /* @__PURE__ */ React16.createElement(BlurrableImage, {
    key: bannerCloudinaryId,
    blurDataUrl: bannerBlurDataUrl,
    className: "aspect-h-4 aspect-w-3 rounded-lg"
  }) : /* @__PURE__ */ React16.createElement("div", {
    className: "aspect-h-4 aspect-w-3"
  }, /* @__PURE__ */ React16.createElement("div", {
    className: "focus-ring w-full rounded-lg transition"
  })), /* @__PURE__ */ React16.createElement("div", {
    className: "mt-8 text-blueGray-500 text-xl font-medium"
  }, (0, import_format.default)((0, import_parseISO.default)(date), "PPP"), " \u2014 ", (readTime == null ? void 0 : readTime.text) ?? "quick read"), /* @__PURE__ */ React16.createElement(H3, {
    as: "div",
    className: "mt-4"
  }, title)), leadingTeam ? /* @__PURE__ */ React16.createElement("div", {
    className: "absolute z-10 right-6 top-6 p-1 w-4 h-4 bg-team-current rounded-full lg:left-6"
  }) : null, /* @__PURE__ */ React16.createElement(ClipboardCopyButton, {
    value: permalink,
    className: "absolute z-10 left-6 top-6"
  }));
}

// app/components/sections/header-section.tsx
init_react();
var React17 = __toModule(require("react"));
var import_clsx10 = __toModule(require("clsx"));
function HeaderSection({
  ctaUrl,
  cta,
  title,
  subTitle,
  className,
  as
}) {
  return /* @__PURE__ */ React17.createElement(Grid, {
    as
  }, /* @__PURE__ */ React17.createElement("div", {
    className: (0, import_clsx10.default)("flex flex-col col-span-full space-y-10 lg:flex-row lg:items-end lg:justify-between lg:space-y-0", className)
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "space-y-2 lg:space-y-0"
  }, /* @__PURE__ */ React17.createElement(H2, null, title), /* @__PURE__ */ React17.createElement(H2, {
    variant: "secondary",
    as: "p"
  }, subTitle)), cta && ctaUrl ? /* @__PURE__ */ React17.createElement(ArrowLink, {
    to: ctaUrl,
    direction: "right"
  }, cta) : null));
}

// app/components/sections/blog-section.tsx
function BlogSection({
  articles,
  title,
  description,
  showArrowButton = true
}) {
  return /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement(HeaderSection, {
    title,
    subTitle: description,
    cta: showArrowButton ? "See the full blog" : void 0,
    ctaUrl: "/blog"
  }), /* @__PURE__ */ React18.createElement(Spacer, {
    size: "2xs"
  }), /* @__PURE__ */ React18.createElement(Grid, {
    className: "gap-y-16"
  }, articles.slice(0, 3).map((article, idx) => /* @__PURE__ */ React18.createElement("div", {
    key: article.slug,
    className: (0, import_clsx11.default)("col-span-4", {
      "hidden lg:block": idx >= 2
    })
  }, /* @__PURE__ */ React18.createElement(ArticleCard, {
    article
  })))));
}

// app/components/errors.tsx
function RedBox({ error }) {
  const [isVisible, setIsVisible] = React19.useState(true);
  const frames = import_error_stack_parser.default.parse(error);
  return /* @__PURE__ */ React19.createElement("div", {
    className: (0, import_clsx12.default)("fixed z-10 inset-0 flex items-center justify-center transition", {
      "opacity-0 pointer-events-none": !isVisible
    })
  }, /* @__PURE__ */ React19.createElement("button", {
    className: "absolute inset-0 block w-full h-full bg-black opacity-75",
    onClick: () => setIsVisible(false)
  }), /* @__PURE__ */ React19.createElement("div", {
    className: "border-lg text-primary relative mx-5vw my-16 p-12 max-h-75vh bg-red-500 rounded-lg overflow-y-auto"
  }, /* @__PURE__ */ React19.createElement(H2, null, error.message), /* @__PURE__ */ React19.createElement("div", null, frames.map((frame) => /* @__PURE__ */ React19.createElement("div", {
    key: [frame.fileName, frame.lineNumber, frame.columnNumber].join("-"),
    className: "pt-4"
  }, /* @__PURE__ */ React19.createElement(H6, {
    as: "div",
    className: "pt-2"
  }, frame.functionName), /* @__PURE__ */ React19.createElement("div", {
    className: "font-mono opacity-75"
  }, frame.fileName, ":", frame.lineNumber, ":", frame.columnNumber))))));
}
function ErrorPage({
  error,
  articles,
  heroProps
}) {
  if (articles == null ? void 0 : articles.length) {
    Object.assign(heroProps, {
      arrowUrl: "#articles",
      arrowLabel: "But wait, there is more!"
    });
  }
  return /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement("noscript", null, /* @__PURE__ */ React19.createElement("div", {
    style: {
      backgroundColor: "black",
      color: "white",
      padding: 30
    }
  }, /* @__PURE__ */ React19.createElement("h1", {
    style: { fontSize: "2em" }
  }, heroProps.title), /* @__PURE__ */ React19.createElement("p", {
    style: { fontSize: "1.5em" }
  }, heroProps.subtitle), /* @__PURE__ */ React19.createElement("small", null, "Also, this site works much better with JavaScript enabled..."))), /* @__PURE__ */ React19.createElement("main", {
    className: "relative"
  }, error && true ? /* @__PURE__ */ React19.createElement(RedBox, {
    error
  }) : null, /* @__PURE__ */ React19.createElement(HeroSection, __spreadValues({}, heroProps)), (articles == null ? void 0 : articles.length) ? /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement("div", {
    id: "articles"
  }), /* @__PURE__ */ React19.createElement(BlogSection, {
    articles,
    title: "Looking for something to read?",
    description: "Have a look at these articles."
  })) : null));
}

// route-module:/Users/sunilsamuel/GIT/sunilsamuel-site/app/root.tsx
var handle2 = {
  id: "root"
};
var Theme3;
(function(Theme4) {
  Theme4["DARK"] = "dark";
  Theme4["LIGHT"] = "light";
})(Theme3 || (Theme3 = {}));
var links = () => {
  return [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Matter-Medium.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Matter-Regular.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicons/apple-touch-icon.png"
    },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "stylesheet", href: vendors_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: prose_default },
    { rel: "stylesheet", href: app_default }
  ];
};
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  const [theme] = useTheme();
  console.log("*****************", theme);
  return /* @__PURE__ */ React20.createElement("html", {
    lang: "en",
    className: (0, import_clsx13.default)(theme, `set-color-team-current-blue`)
  }, /* @__PURE__ */ React20.createElement("head", null, /* @__PURE__ */ React20.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React20.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React20.createElement(import_remix7.Meta, null), /* @__PURE__ */ React20.createElement(import_remix7.Links, null), /* @__PURE__ */ React20.createElement("script", {
    crossOrigin: "anonymous",
    src: "https://polyfill.io/v3/polyfill.min.js?features=Intl%2CIntl.ListFormat"
  })), /* @__PURE__ */ React20.createElement("body", {
    className: "dark:bg-gray-900 bg-dark transition duration-500"
  }, /* @__PURE__ */ React20.createElement(import_remix7.Outlet, null), /* @__PURE__ */ React20.createElement(Spacer, {
    size: "base"
  }), /* @__PURE__ */ React20.createElement(import_remix7.ScrollRestoration, null), /* @__PURE__ */ React20.createElement(import_remix7.Scripts, null), /* @__PURE__ */ React20.createElement(import_remix7.LiveReload, null)));
}
function AppWithProviders() {
  return /* @__PURE__ */ React20.createElement(ThemeProvider, {
    specifiedTheme: Theme3.DARK
  }, /* @__PURE__ */ React20.createElement(App, null));
}
function ErrorBoundary({ error }) {
  console.error(error);
  const location = (0, import_remix7.useLocation)();
  return /* @__PURE__ */ React20.createElement("html", {
    lang: "en",
    className: "dark"
  }, /* @__PURE__ */ React20.createElement("head", null, /* @__PURE__ */ React20.createElement("title", null, "Oh no..."), /* @__PURE__ */ React20.createElement(import_remix7.Links, null)), /* @__PURE__ */ React20.createElement("body", {
    className: "dark:bg-gray-900 bg-white transition duration-500"
  }, /* @__PURE__ */ React20.createElement(ErrorPage, {
    heroProps: {
      title: "500 - Oh no, something did not go well.",
      subtitle: `"${location.pathname}" is currently not working. So sorry.`,
      action: /* @__PURE__ */ React20.createElement(ArrowLink, {
        href: "/"
      }, "Go home")
    }
  }), /* @__PURE__ */ React20.createElement(import_remix7.Scripts, null)));
}
function CatchBoundary() {
  const caught = (0, import_remix7.useCatch)();
  const location = (0, import_remix7.useLocation)();
  console.error("CatchBoundary", caught);
  if (caught.status === 404) {
    return /* @__PURE__ */ React20.createElement("html", {
      lang: "en",
      className: "dark"
    }, /* @__PURE__ */ React20.createElement("head", null, /* @__PURE__ */ React20.createElement("title", null, "Oh no..."), /* @__PURE__ */ React20.createElement(import_remix7.Links, null)), /* @__PURE__ */ React20.createElement("body", {
      className: "dark:bg-gray-900 bg-white transition duration-500"
    }, /* @__PURE__ */ React20.createElement(ErrorPage, {
      heroProps: {
        title: "404 - Oh no, you found a page that's missing stuff.",
        subtitle: `"${location.pathname}" is not a page on sunil-samuel.com. So sorry.`,
        action: /* @__PURE__ */ React20.createElement(ArrowLink, {
          href: "/"
        }, "Go home")
      }
    }), /* @__PURE__ */ React20.createElement(import_remix7.Scripts, null)));
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

// route-module:/Users/sunilsamuel/GIT/sunilsamuel-site/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs"))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zdW5pbHNhbXVlbC9HSVQvc3VuaWxzYW11ZWwtc2l0ZS9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc3BhY2VyLnRzeCIsICIuLi9hcHAvdXRpbHMvdGhlbWUtcHJvdmlkZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Vycm9ycy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zZWN0aW9uLnRzeCIsICIuLi9hcHAvaW1hZ2VzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy90eXBvZ3JhcGh5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hcnJvdy1idXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2ljb25zL2Fycm93LWljb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvb2tzL3VzZS1lbGVtZW50LXN0YXRlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ncmlkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9ibG9nLXNlY3Rpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2FydGljbGUtY2FyZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY2xpcGJvYXJkLWNvcHktYnV0dG9uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9pY29ucy9jaGVjay1pY29uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9pY29ucy9jb3B5LWljb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2JsdXJyYWJsZS1pbWFnZS50c3giLCAiLi4vYXBwL3V0aWxzL21pc2MudHN4IiwgIi4uL2FwcC91dGlscy91c2Utcm9vdC1kYXRhLnRzIiwgIi4uL2FwcC91dGlscy9wcm92aWRlcnMudHN4IiwgIi4uL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9oZWFkZXItc2VjdGlvbi50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zdW5pbHNhbXVlbC9HSVQvc3VuaWxzYW11ZWwtc2l0ZS9hcHAvcm91dGVzL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3N1bmlsc2FtdWVsL0dJVC9zdW5pbHNhbXVlbC1zaXRlL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9zdW5pbHNhbXVlbC9HSVQvc3VuaWxzYW11ZWwtc2l0ZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3N1bmlsc2FtdWVsL0dJVC9zdW5pbHNhbXVlbC1zaXRlL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG4gIHVzZUxvY2F0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7U3BhY2VyfSBmcm9tICcuL2NvbXBvbmVudHMvc3BhY2VyJ1xuaW1wb3J0IHR5cGUge0xpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHtcbiAgdXNlVGhlbWUsXG4gIFRoZW1lUHJvdmlkZXIsXG4gIE5vbkZsYXNoT2ZXcm9uZ1RoZW1lRWxzLFxuICBUaGVtZSxcbn0gZnJvbSAnLi91dGlscy90aGVtZS1wcm92aWRlcidcbmltcG9ydCB0YWlsd2luZFN0eWxlcyBmcm9tICd+L3N0eWxlcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgdmVuZG9yU3R5bGVzIGZyb20gJ34vc3R5bGVzL3ZlbmRvcnMuY3NzJ1xuaW1wb3J0IGFwcFN0eWxlcyBmcm9tICd+L3N0eWxlcy9hcHAuY3NzJ1xuaW1wb3J0IHByb3NlU3R5bGVzIGZyb20gJ34vc3R5bGVzL3Byb3NlLmNzcydcbi8vIGltcG9ydCBub1NjcmlwdFN0eWxlcyBmcm9tICcuL3N0eWxlcy9uby1zY3JpcHQuY3NzJ1xuaW1wb3J0IHtFcnJvclBhZ2V9IGZyb20gJy4vY29tcG9uZW50cy9lcnJvcnMnXG5pbXBvcnQgdHlwZSB7QXdhaXQsIFNWU0hhbmRsZSwgVXNlciB9IGZyb20gJ34vdHlwZXMnXG5pbXBvcnQge0Fycm93TGlua30gZnJvbSAnLi9jb21wb25lbnRzL2Fycm93LWJ1dHRvbidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZTogU1ZTSGFuZGxlICYge2lkOiBzdHJpbmd9ID0ge1xuICBpZDogJ3Jvb3QnLFxufVxuZW51bSBUaGVtZSB7XG4gIERBUksgPSAnZGFyaycsXG4gIExJR0hUID0gJ2xpZ2h0Jyxcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgYXM6ICdmb250JyxcbiAgICAgIGhyZWY6ICcvZm9udHMvTWF0dGVyLU1lZGl1bS53b2ZmMicsXG4gICAgICB0eXBlOiAnZm9udC93b2ZmMicsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgIGFzOiAnZm9udCcsXG4gICAgICBocmVmOiAnL2ZvbnRzL01hdHRlci1SZWd1bGFyLndvZmYyJyxcbiAgICAgIHR5cGU6ICdmb250L3dvZmYyJyxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgIGhyZWY6ICcvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmcnLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgcmVsOiAnaWNvbicsXG4gICAgLy8gICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAvLyAgIHNpemVzOiAnMzJ4MzInLFxuICAgIC8vICAgaHJlZjogJy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZycsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICByZWw6ICdpY29uJyxcbiAgICAvLyAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIC8vICAgc2l6ZXM6ICcxNngxNicsXG4gICAgLy8gICBocmVmOiAnL2Zhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAvLyB9LFxuICAgIC8vIHtyZWw6ICdtYW5pZmVzdCcsIGhyZWY6ICcvc2l0ZS53ZWJtYW5pZmVzdCd9LFxuICAgIHtyZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbyd9LFxuICAgIHtyZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogdmVuZG9yU3R5bGVzfSxcbiAgICB7cmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHRhaWx3aW5kU3R5bGVzfSxcbiAgICB7cmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHByb3NlU3R5bGVzfSxcbiAgICB7cmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGFwcFN0eWxlc30sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5cbmV4cG9ydCAgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbdGhlbWVdID0gdXNlVGhlbWUoKTtcbiAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKlwiLCB0aGVtZSlcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiAgIGNsYXNzTmFtZT17Y2xzeCh0aGVtZSwgYHNldC1jb2xvci10ZWFtLWN1cnJlbnQtYmx1ZWApfSA+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3BvbHlmaWxsLmlvL3YzL3BvbHlmaWxsLm1pbi5qcz9mZWF0dXJlcz1JbnRsJTJDSW50bC5MaXN0Rm9ybWF0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImRhcms6YmctZ3JheS05MDAgYmctZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTcGFjZXIgc2l6ZT1cImJhc2VcIiAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgey8qIDxzY3JpcHRcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBgd2luZG93LkVOViA9ICR7SlNPTi5zdHJpbmdpZnkoZGF0YS5FTlYpfTtgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+ICovfVxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBXaXRoUHJvdmlkZXJzKCkge1xuIC8vIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KClcbiAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHNwZWNpZmllZFRoZW1lPXtUaGVtZS5EQVJLfT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cblxuXG5cblxuXG5cblxuLy8gYmVzdCBlZmZvcnQsIGxhc3QgZGl0Y2ggZXJyb3IgYm91bmRhcnkuIFRoaXMgc2hvdWxkIG9ubHkgY2F0Y2ggcm9vdCBlcnJvcnNcbi8vIGFsbCBvdGhlciBlcnJvcnMgc2hvdWxkIGJlIGNhdWdodCBieSB0aGUgaW5kZXggcm91dGUgd2hpY2ggd2lsbCBpbmNsdWRlXG4vLyB0aGUgZm9vdGVyIGFuZCBzdHVmZiwgd2hpY2ggaXMgbXVjaCBiZXR0ZXIuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7ZXJyb3J9OiB7ZXJyb3I6IEVycm9yfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJkYXJrXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPHRpdGxlPk9oIG5vLi4uPC90aXRsZT5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJkYXJrOmJnLWdyYXktOTAwIGJnLXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwXCI+XG4gICAgICAgIDxFcnJvclBhZ2VcbiAgICAgICAgICBoZXJvUHJvcHM9e3tcbiAgICAgICAgICAgIHRpdGxlOiAnNTAwIC0gT2ggbm8sIHNvbWV0aGluZyBkaWQgbm90IGdvIHdlbGwuJyxcbiAgICAgICAgICAgIHN1YnRpdGxlOiBgXCIke2xvY2F0aW9uLnBhdGhuYW1lfVwiIGlzIGN1cnJlbnRseSBub3Qgd29ya2luZy4gU28gc29ycnkuYCxcbiAgICAgICAgICAgIC8vaW1hZ2U6IDxHcmltbWFjaW5nIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIiBhc3BlY3RSYXRpbz1cIjM6NFwiIC8+LFxuICAgICAgICAgICAgYWN0aW9uOiA8QXJyb3dMaW5rIGhyZWY9XCIvXCI+R28gaG9tZTwvQXJyb3dMaW5rPixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc29sZS5lcnJvcignQ2F0Y2hCb3VuZGFyeScsIGNhdWdodClcbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJkYXJrXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5PaCBuby4uLjwvdGl0bGU+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiZGFyazpiZy1ncmF5LTkwMCBiZy13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICAgIDxFcnJvclBhZ2VcbiAgICAgICAgICAgIGhlcm9Qcm9wcz17e1xuICAgICAgICAgICAgICB0aXRsZTogXCI0MDQgLSBPaCBubywgeW91IGZvdW5kIGEgcGFnZSB0aGF0J3MgbWlzc2luZyBzdHVmZi5cIixcbiAgICAgICAgICAgICAgc3VidGl0bGU6IGBcIiR7bG9jYXRpb24ucGF0aG5hbWV9XCIgaXMgbm90IGEgcGFnZSBvbiBzdW5pbC1zYW11ZWwuY29tLiBTbyBzb3JyeS5gLFxuICAgICAgICAgICAgIC8vIGltYWdlOiAoXG4gICAgICAgICAgIC8vICAgICA8TWlzc2luZ1NvbWV0aGluZyBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCIgYXNwZWN0UmF0aW89XCIzOjRcIiAvPlxuICAgICAgICAgICAgLy8gICksXG4gICAgICAgICAgICAgIGFjdGlvbjogPEFycm93TGluayBocmVmPVwiL1wiPkdvIGhvbWU8L0Fycm93TGluaz4sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBlcnJvcjogJHtjYXVnaHQuc3RhdHVzfWApXG59IiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzcGFjZXJTaXplcyA9IHtcbiAgJzN4cyc6ICdoLTYgbGc6aC04JyxcbiAgJzJ4cyc6ICdoLTEwIGxnOmgtMTInLFxuICB4czogJ2gtMjAgbGc6aC0yNCcsXG4gIHNtOiAnaC0zMiBsZzpoLTM2JyxcbiAgYmFzZTogJ2gtNDAgbGc6aC00OCcsXG4gIGxnOiAnaC01NiBsZzpoLTY0Jyxcbn1cblxuZnVuY3Rpb24gU3BhY2VyKHtcbiAgc2l6ZSxcbiAgY2xhc3NOYW1lID0gJycsXG59OiB7XG4gIHNpemU6IGtleW9mIHR5cGVvZiBzcGFjZXJTaXplc1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7c3BhY2VyU2l6ZXNbc2l6ZV19YH0gLz5cbn1cblxuZXhwb3J0IHtTcGFjZXJ9XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUZldGNoZXJ9IGZyb20gJ3JlbWl4J1xuXG5lbnVtIFRoZW1lIHtcbiAgREFSSyA9ICdkYXJrJyxcbiAgTElHSFQgPSAnbGlnaHQnLFxufVxuY29uc3QgdGhlbWVzOiBBcnJheTxUaGVtZT4gPSBPYmplY3QudmFsdWVzKFRoZW1lKVxuXG50eXBlIFRoZW1lQ29udGV4dFR5cGUgPSBbXG4gIFRoZW1lIHwgbnVsbCxcbiAgUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248VGhlbWUgfCBudWxsPj4sXG5dXG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8VGhlbWVDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4oXG4gIHVuZGVmaW5lZCxcbilcblRoZW1lQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdUaGVtZUNvbnRleHQnXG5cbmNvbnN0IHByZWZlcnNMaWdodE1RID0gJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJ1xuY29uc3QgZ2V0UHJlZmVycmVkVGhlbWUgPSAoKSA9PlxuICB3aW5kb3cubWF0Y2hNZWRpYShwcmVmZXJzTGlnaHRNUSkubWF0Y2hlcyA/IFRoZW1lLkxJR0hUIDogVGhlbWUuREFSS1xuXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIHNwZWNpZmllZFRoZW1lLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIHNwZWNpZmllZFRoZW1lOiBUaGVtZSB8IG51bGxcbn0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSBSZWFjdC51c2VTdGF0ZTxUaGVtZSB8IG51bGw+KCgpID0+IHtcbiAgICAvLyBPbiB0aGUgc2VydmVyLCBpZiB3ZSBkb24ndCBoYXZlIGEgc3BlY2lmaWVkIHRoZW1lIHRoZW4gd2Ugc2hvdWxkXG4gICAgLy8gcmV0dXJuIG51bGwgYW5kIHRoZSBjbGllbnRUaGVtZUNvZGUgd2lsbCBzZXQgdGhlIHRoZW1lIGZvciB1c1xuICAgIC8vIGJlZm9yZSBoeWRyYXRpb24uIFRoZW4gKGR1cmluZyBoeWRyYXRpb24pLCB0aGlzIGNvZGUgd2lsbCBnZXQgdGhlIHNhbWVcbiAgICAvLyB2YWx1ZSB0aGF0IGNsaWVudFRoZW1lQ29kZSBnb3Qgc28gaHlkcmF0aW9uIGlzIGhhcHB5LlxuICAgIGlmIChzcGVjaWZpZWRUaGVtZSkge1xuICAgICAgaWYgKHRoZW1lcy5pbmNsdWRlcyhzcGVjaWZpZWRUaGVtZSkpIHJldHVybiBzcGVjaWZpZWRUaGVtZVxuICAgICAgZWxzZSByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIHRoZXJlJ3Mgbm8gd2F5IGZvciB1cyB0byBrbm93IHdoYXQgdGhlIHRoZW1lIHNob3VsZCBiZSBpbiB0aGlzIGNvbnRleHRcbiAgICAvLyB0aGUgY2xpZW50IHdpbGwgaGF2ZSB0byBmaWd1cmUgaXQgb3V0IGJlZm9yZSBoeWRyYXRpb24uXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIGdldFByZWZlcnJlZFRoZW1lKClcbiAgfSlcblxuICBjb25zdCBwZXJzaXN0VGhlbWUgPSB1c2VGZXRjaGVyKClcbiAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgd2hlbiBwZXJzaXN0VGhlbWUgaXMgbWVtb2l6ZWQgcHJvcGVybHlcbiAgY29uc3QgcGVyc2lzdFRoZW1lUmVmID0gUmVhY3QudXNlUmVmKHBlcnNpc3RUaGVtZSlcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBwZXJzaXN0VGhlbWVSZWYuY3VycmVudCA9IHBlcnNpc3RUaGVtZVxuICB9LCBbcGVyc2lzdFRoZW1lXSlcblxuICBjb25zdCBtb3VudFJ1biA9IFJlYWN0LnVzZVJlZihmYWxzZSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbW91bnRSdW4uY3VycmVudCkge1xuICAgICAgbW91bnRSdW4uY3VycmVudCA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXRoZW1lKSByZXR1cm5cblxuICAgIHBlcnNpc3RUaGVtZVJlZi5jdXJyZW50LnN1Ym1pdChcbiAgICAgIHt0aGVtZX0sXG4gICAgICB7YWN0aW9uOiAnYWN0aW9uL3NldC10aGVtZScsIG1ldGhvZDogJ3Bvc3QnfSxcbiAgICApXG4gIH0sIFt0aGVtZV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEocHJlZmVyc0xpZ2h0TVEpXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgc2V0VGhlbWUobWVkaWFRdWVyeS5tYXRjaGVzID8gVGhlbWUuTElHSFQgOiBUaGVtZS5EQVJLKVxuICAgIH1cbiAgICBtZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICByZXR1cm4gKCkgPT4gbWVkaWFRdWVyeS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3RoZW1lLCBzZXRUaGVtZV19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmNvbnN0IGNsaWVudFRoZW1lQ29kZSA9IGBcbi8vIGhpIHRoZXJlIGRlYXIgcmVhZGVyIFx1RDgzRFx1REM0QlxuLy8gdGhpcyBpcyBob3cgSSBtYWtlIGNlcnRhaW4gd2UgYXZvaWQgYSBmbGFzaCBvZiB0aGUgd3JvbmcgdGhlbWUuIElmIHlvdSBzZWxlY3Rcbi8vIGEgdGhlbWUsIHRoZW4gSSdsbCBrbm93IHdoYXQgeW91IHdhbnQgaW4gdGhlIGZ1dHVyZSBhbmQgeW91J2xsIG5vdCBzZWUgdGhpc1xuLy8gc2NyaXB0IGFueW1vcmUuXG47KCgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB3aW5kb3cubWF0Y2hNZWRpYSgke0pTT04uc3RyaW5naWZ5KHByZWZlcnNMaWdodE1RKX0pLm1hdGNoZXNcbiAgICA/ICdsaWdodCdcbiAgICA6ICdkYXJrJztcbiAgXG4gIGNvbnN0IGNsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdDtcbiAgXG4gIGNvbnN0IHRoZW1lQWxyZWFkeUFwcGxpZWQgPSBjbC5jb250YWlucygnbGlnaHQnKSB8fCBjbC5jb250YWlucygnZGFyaycpO1xuICBpZiAodGhlbWVBbHJlYWR5QXBwbGllZCkge1xuICAgIC8vIHRoaXMgc2NyaXB0IHNob3VsZG4ndCBleGlzdCBpZiB0aGUgdGhlbWUgaXMgYWxyZWFkeSBhcHBsaWVkIVxuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiSGkgdGhlcmUsIGNvdWxkIHlvdSBsZXQgS2VudCBrbm93IHlvdSdyZSBzZWVpbmcgdGhpcyBtZXNzYWdlPyBUaGFua3MhXCIsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjbC5hZGQodGhlbWUpO1xuICB9XG4gIFxuICAvLyB0aGUgPGRhcmstbW9kZT4gYW5kIDxsaWdodC1tb2RlPiBhcHByb2FjaCB3b24ndCB3b3JrIGZvciBtZXRhIHRhZ3MsXG4gIC8vIHNvIHdlIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9Y29sb3Itc2NoZW1lXScpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICh0aGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICBtZXRhLmNvbnRlbnQgPSAnZGFyayBsaWdodCc7XG4gICAgfSBlbHNlIGlmICh0aGVtZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgbWV0YS5jb250ZW50ID0gJ2xpZ2h0IGRhcmsnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIkhleWEsIGNvdWxkIHlvdSBsZXQgS2VudCBrbm93IHlvdSdyZSBzZWVpbmcgdGhpcyBtZXNzYWdlPyBUaGFua3MhXCIsXG4gICAgKTtcbiAgfVxufSkoKTtcbmBcblxuZnVuY3Rpb24gaGFuZGxlRGFya0FuZExpZ2h0TW9kZUVscygpIHtcbiAgY29uc3QgdGhlbWUgPSBnZXRQcmVmZXJyZWRUaGVtZSgpXG4gIGNvbnN0IGRhcmtFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkYXJrLW1vZGUnKVxuICBjb25zdCBsaWdodEVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpZ2h0LW1vZGUnKVxuICBmb3IgKGNvbnN0IGRhcmtFbCBvZiBkYXJrRWxzKSB7XG4gICAgaWYgKHRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgZGFya0VsLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgZGFya0VsLnBhcmVudEVsZW1lbnQ/LmFwcGVuZChjaGlsZClcbiAgICAgIH1cbiAgICB9XG4gICAgZGFya0VsLnJlbW92ZSgpXG4gIH1cbiAgZm9yIChjb25zdCBsaWdodEVsIG9mIGxpZ2h0RWxzKSB7XG4gICAgaWYgKHRoZW1lID09PSAnbGlnaHQnKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGxpZ2h0RWwuY2hpbGROb2Rlcykge1xuICAgICAgICBsaWdodEVsLnBhcmVudEVsZW1lbnQ/LmFwcGVuZChjaGlsZClcbiAgICAgIH1cbiAgICB9XG4gICAgbGlnaHRFbC5yZW1vdmUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIE5vbkZsYXNoT2ZXcm9uZ1RoZW1lRWxzKHtzc3JUaGVtZX06IHtzc3JUaGVtZTogYm9vbGVhbn0pIHtcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVRoZW1lKClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qXG4gICAgICAgIE9uIHRoZSBzZXJ2ZXIsIFwidGhlbWVcIiBtaWdodCBiZSBgbnVsbGAsIHNvIGNsaWVudFRoZW1lQ29kZSBlbnN1cmVzIHRoYXRcbiAgICAgICAgdGhpcyBpcyBjb3JyZWN0IGJlZm9yZSBoeWRyYXRpb24uXG4gICAgICAqL31cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJjb2xvci1zY2hlbWVcIlxuICAgICAgICBjb250ZW50PXt0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdsaWdodCBkYXJrJyA6ICdkYXJrIGxpZ2h0J31cbiAgICAgIC8+XG4gICAgICB7LypcbiAgICAgICAgSWYgd2Uga25vdyB3aGF0IHRoZSB0aGVtZSBpcyBmcm9tIHRoZSBzZXJ2ZXIgdGhlbiB3ZSBkb24ndCBuZWVkXG4gICAgICAgIHRvIGRvIGZhbmN5IHRyaWNrcyBwcmlvciB0byBoeWRyYXRpb24gdG8gbWFrZSB0aGluZ3MgbWF0Y2guXG4gICAgICAqL31cbiAgICAgIHtzc3JUaGVtZSA/IG51bGwgOiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAvLyBOT1RFOiB3ZSBjYW5ub3QgdXNlIHR5cGU9XCJtb2R1bGVcIiBiZWNhdXNlIHRoYXQgYXV0b21hdGljYWxseSBtYWtlc1xuICAgICAgICAgIC8vIHRoZSBzY3JpcHQgXCJkZWZlclwiLiBUaGF0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSB3ZSBuZWVkXG4gICAgICAgICAgLy8gdGhpcyBzY3JpcHQgdG8gcnVuIHN5bmNocm9ub3VzbHkgYmVmb3JlIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudFxuICAgICAgICAgIC8vIGlzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNsaWVudFRoZW1lQ29kZX19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVRoZW1lIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBUaGVtZVByb3ZpZGVyJylcbiAgfVxuICByZXR1cm4gY29udGV4dFxufVxuXG4vKipcbiAqIFRoaXMgYWxsb3dzIHlvdSB0byByZW5kZXIgc29tZXRoaW5nIHRoYXQgZGVwZW5kcyBvbiB0aGUgdGhlbWUgd2l0aG91dFxuICogd29ycnlpbmcgYWJvdXQgd2hldGhlciBpdCdsbCBTU1IgcHJvcGVybHkgd2hlbiB3ZSBkb24ndCBhY3R1YWxseSBrbm93XG4gKiB0aGUgdXNlcidzIHByZWZlcnJlZCB0aGVtZS5cbiAqL1xuZnVuY3Rpb24gVGhlbWVkKHtcbiAgZGFyayxcbiAgbGlnaHQsXG4gIGluaXRpYWxPbmx5ID0gZmFsc2UsXG59OiB7XG4gIGRhcms6IFJlYWN0LlJlYWN0Tm9kZSB8IHN0cmluZ1xuICBsaWdodDogUmVhY3QuUmVhY3ROb2RlIHwgc3RyaW5nXG4gIGluaXRpYWxPbmx5PzogYm9vbGVhblxufSkge1xuICBjb25zdCBbdGhlbWVdID0gdXNlVGhlbWUoKVxuICBjb25zdCBbaW5pdGlhbFRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlKHRoZW1lKVxuICBjb25zdCB0aGVtZVRvUmVmZXJlbmNlID0gaW5pdGlhbE9ubHkgPyBpbml0aWFsVGhlbWUgOiB0aGVtZVxuICBjb25zdCBzZXJ2ZXJSZW5kZXJXaXRoVW5rbm93blRoZW1lID0gIXRoZW1lICYmIHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnXG4gIGlmIChzZXJ2ZXJSZW5kZXJXaXRoVW5rbm93blRoZW1lKSB7XG4gICAgLy8gc3RpY2sgdGhlbSBib3RoIGluIGFuZCBvdXIgbGl0dGxlIHNjcmlwdCB3aWxsIHVwZGF0ZSB0aGUgRE9NIHRvIG1hdGNoXG4gICAgLy8gd2hhdCB3ZSdsbCByZW5kZXIgaW4gdGhlIGNsaWVudCBkdXJpbmcgaHlkcmF0aW9uLlxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudCgnZGFyay1tb2RlJywgbnVsbCwgZGFyayl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KCdsaWdodC1tb2RlJywgbnVsbCwgbGlnaHQpfVxuICAgICAgPC8+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtbm8tdXNlbGVzcy1mcmFnbWVudFxuICAgIHJldHVybiA8Pnt0aGVtZVRvUmVmZXJlbmNlID09PSAnbGlnaHQnID8gbGlnaHQgOiBkYXJrfTwvPlxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVGhlbWUodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBUaGVtZSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHRoZW1lcy5pbmNsdWRlcyh2YWx1ZSBhcyBUaGVtZSlcbn1cblxuZXhwb3J0IHtcbiAgaGFuZGxlRGFya0FuZExpZ2h0TW9kZUVscyxcbiAgVGhlbWVQcm92aWRlcixcbiAgdXNlVGhlbWUsXG4gIHRoZW1lcyxcbiAgVGhlbWUsXG4gIGlzVGhlbWUsXG4gIFRoZW1lZCxcbiAgTm9uRmxhc2hPZldyb25nVGhlbWVFbHMsXG59XG4iLCAiaW1wb3J0IHt1c2VNYXRjaGVzfSBmcm9tICdyZW1peCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGVycm9yU3RhY2sgZnJvbSAnZXJyb3Itc3RhY2stcGFyc2VyJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB0eXBlIHtNZHhMaXN0SXRlbX0gZnJvbSAnfi90eXBlcydcbmltcG9ydCB7SGVyb1NlY3Rpb259IGZyb20gJy4vc2VjdGlvbnMvaGVyby1zZWN0aW9uJ1xuaW1wb3J0IHR5cGUge0hlcm9TZWN0aW9uUHJvcHN9IGZyb20gJy4vc2VjdGlvbnMvaGVyby1zZWN0aW9uJ1xuaW1wb3J0IHtCbG9nU2VjdGlvbn0gZnJvbSAnLi9zZWN0aW9ucy9ibG9nLXNlY3Rpb24nXG5pbXBvcnQge0gyLCBINn0gZnJvbSAnLi90eXBvZ3JhcGh5J1xuLy8gaW1wb3J0IHtHcmltbWFjaW5nLCBNaXNzaW5nU29tZXRoaW5nfSBmcm9tICcuL2tpZnMnXG5cbmZ1bmN0aW9uIFJlZEJveCh7ZXJyb3J9OiB7ZXJyb3I6IEVycm9yfSkge1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgZnJhbWVzID0gZXJyb3JTdGFjay5wYXJzZShlcnJvcilcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgJ2ZpeGVkIHotMTAgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uJyxcbiAgICAgICAge1xuICAgICAgICAgICdvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSc6ICFpc1Zpc2libGUsXG4gICAgICAgIH0sXG4gICAgICApfVxuICAgID5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBibG9jayB3LWZ1bGwgaC1mdWxsIGJnLWJsYWNrIG9wYWNpdHktNzVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1Zpc2libGUoZmFsc2UpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWxnIHRleHQtcHJpbWFyeSByZWxhdGl2ZSBteC01dncgbXktMTYgcC0xMiBtYXgtaC03NXZoIGJnLXJlZC01MDAgcm91bmRlZC1sZyBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgPEgyPntlcnJvci5tZXNzYWdlfTwvSDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2ZyYW1lcy5tYXAoZnJhbWUgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e1tmcmFtZS5maWxlTmFtZSwgZnJhbWUubGluZU51bWJlciwgZnJhbWUuY29sdW1uTnVtYmVyXS5qb2luKFxuICAgICAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxINiBhcz1cImRpdlwiIGNsYXNzTmFtZT1cInB0LTJcIj5cbiAgICAgICAgICAgICAgICB7ZnJhbWUuZnVuY3Rpb25OYW1lfVxuICAgICAgICAgICAgICA8L0g2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyBvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICAgICAge2ZyYW1lLmZpbGVOYW1lfTp7ZnJhbWUubGluZU51bWJlcn06e2ZyYW1lLmNvbHVtbk51bWJlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBFcnJvclBhZ2Uoe1xuICBlcnJvcixcbiAgYXJ0aWNsZXMsXG4gIGhlcm9Qcm9wcyxcbn06IHtcbiAgZXJyb3I/OiBFcnJvclxuICBhcnRpY2xlcz86IEFycmF5PE1keExpc3RJdGVtPlxuICBoZXJvUHJvcHM6IEhlcm9TZWN0aW9uUHJvcHNcbn0pIHtcbiAgaWYgKGFydGljbGVzPy5sZW5ndGgpIHtcbiAgICBPYmplY3QuYXNzaWduKGhlcm9Qcm9wcywge1xuICAgICAgYXJyb3dVcmw6ICcjYXJ0aWNsZXMnLFxuICAgICAgYXJyb3dMYWJlbDogJ0J1dCB3YWl0LCB0aGVyZSBpcyBtb3JlIScsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bm9zY3JpcHQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAzMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICcyZW0nfX0+e2hlcm9Qcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6ICcxLjVlbSd9fT57aGVyb1Byb3BzLnN1YnRpdGxlfTwvcD5cbiAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICBBbHNvLCB0aGlzIHNpdGUgd29ya3MgbXVjaCBiZXR0ZXIgd2l0aCBKYXZhU2NyaXB0IGVuYWJsZWQuLi5cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICB7ZXJyb3IgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyAoXG4gICAgICAgICAgPFJlZEJveCBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8SGVyb1NlY3Rpb24gey4uLmhlcm9Qcm9wc30gLz5cblxuICAgICAgICB7YXJ0aWNsZXM/Lmxlbmd0aCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFydGljbGVzXCIgLz5cbiAgICAgICAgICAgIDxCbG9nU2VjdGlvblxuICAgICAgICAgICAgICBhcnRpY2xlcz17YXJ0aWNsZXN9XG4gICAgICAgICAgICAgIHRpdGxlPVwiTG9va2luZyBmb3Igc29tZXRoaW5nIHRvIHJlYWQ/XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJIYXZlIGEgbG9vayBhdCB0aGVzZSBhcnRpY2xlcy5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gRm91ck9oRm91cih7YXJ0aWNsZXN9OiB7YXJ0aWNsZXM/OiBBcnJheTxNZHhMaXN0SXRlbT59KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKClcbiAgY29uc3QgbGFzdCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXVxuICBjb25zdCBwYXRobmFtZSA9IGxhc3Q/LnBhdGhuYW1lXG5cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JQYWdlXG4gICAgICBhcnRpY2xlcz17YXJ0aWNsZXN9XG4gICAgICBoZXJvUHJvcHM9e3tcbiAgICAgICAgdGl0bGU6IFwiNDA0IC0gT2ggbm8sIHlvdSBmb3VuZCBhIHBhZ2UgdGhhdCdzIG1pc3Npbmcgc3R1ZmYuXCIsXG4gICAgICAgIHN1YnRpdGxlOiBgXCIke3BhdGhuYW1lfVwiIGlzIG5vdCBhIHBhZ2Ugb24gc3VuaWwtc2FtdWVsLmNvbS4gU28gc29ycnkuYCxcbiAgICAgIC8vICBpbWFnZTogPE1pc3NpbmdTb21ldGhpbmcgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiIGFzcGVjdFJhdGlvPVwiMzo0XCIgLz4sXG4gICAgICB9fVxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gU2VydmVyRXJyb3Ioe1xuICBlcnJvcixcbiAgYXJ0aWNsZXMsXG59OiB7XG4gIGVycm9yPzogRXJyb3JcbiAgYXJ0aWNsZXM/OiBBcnJheTxNZHhMaXN0SXRlbT5cbn0pIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKVxuICBjb25zdCBsYXN0ID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdXG4gIGNvbnN0IHBhdGhuYW1lID0gbGFzdD8ucGF0aG5hbWVcblxuICByZXR1cm4gKFxuICAgIDxFcnJvclBhZ2VcbiAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgIGFydGljbGVzPXthcnRpY2xlc31cbiAgICAgIGhlcm9Qcm9wcz17e1xuICAgICAgICB0aXRsZTogJzUwMCAtIE9oIG5vLCBzb21ldGhpbmcgZGlkIG5vdCBnbyB3ZWxsLicsXG4gICAgICAgIHN1YnRpdGxlOiBgXCIke3BhdGhuYW1lfVwiIGlzIGN1cnJlbnRseSBub3Qgd29ya2luZy4gU28gc29ycnkuYCxcbiAgICAgICAvLyBpbWFnZTogPEdyaW1tYWNpbmcgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiIGFzcGVjdFJhdGlvPVwiMzo0XCIgLz4sXG4gICAgICB9fVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IHtFcnJvclBhZ2UsIFNlcnZlckVycm9yLCBGb3VyT2hGb3VyfVxuIiwgImltcG9ydCB0eXBlIHtUcmFuc2Zvcm1lck9wdGlvbn0gZnJvbSAnQGNsZC1hcGlzL3R5cGVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHR5cGUge0hUTUxNb3Rpb25Qcm9wc30gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7bW90aW9uLCB1c2VSZWR1Y2VkTW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHR5cGUge0ltYWdlQnVpbGRlcn0gZnJvbSAnfi9pbWFnZXMnXG5pbXBvcnQge2dldEltZ1Byb3BzfSBmcm9tICd+L2ltYWdlcydcbmltcG9ydCB7SDJ9IGZyb20gJy4uL3R5cG9ncmFwaHknXG5pbXBvcnQge0Fycm93TGlua30gZnJvbSAnLi4vYXJyb3ctYnV0dG9uJ1xuaW1wb3J0IHtHcmlkfSBmcm9tICcuLi9ncmlkJ1xuXG5leHBvcnQgdHlwZSBIZXJvU2VjdGlvblByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlXG4gIHN1YnRpdGxlPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlXG4gIGFjdGlvbj86IFJlYWN0LlJlYWN0Tm9kZVxuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlXG59ICYgKFxuICB8IHtcbiAgICAgIGltYWdlUHJvcHM/OiBIVE1MTW90aW9uUHJvcHM8J2ltZyc+XG4gICAgICBpbWFnZVNpemU/OiAnbWVkaXVtJyB8ICdsYXJnZScgfCAnZ2lhbnQnXG4gICAgICBpbWFnZT86IG5ldmVyXG4gICAgICBpbWFnZUJ1aWxkZXI/OiBuZXZlclxuICAgICAgaW1hZ2VUcmFuc2Zvcm1hdGlvbnM/OiBuZXZlclxuICAgIH1cbiAgfCB7XG4gICAgICBpbWFnZVByb3BzPzogbmV2ZXJcbiAgICAgIGltYWdlU2l6ZT86IG5ldmVyXG4gICAgICBpbWFnZT86IG5ldmVyXG4gICAgICBpbWFnZUJ1aWxkZXI/OiBuZXZlclxuICAgICAgaW1hZ2VUcmFuc2Zvcm1hdGlvbnM/OiBuZXZlclxuICAgIH1cbiAgfCB7XG4gICAgICBpbWFnZVByb3BzPzogbmV2ZXJcbiAgICAgIGltYWdlU2l6ZT86ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICdnaWFudCdcbiAgICAgIGltYWdlOiBSZWFjdC5SZWFjdE5vZGVcbiAgICAgIGltYWdlQnVpbGRlcj86IG5ldmVyXG4gICAgICBpbWFnZVRyYW5zZm9ybWF0aW9ucz86IG5ldmVyXG4gICAgfVxuICB8IHtcbiAgICAgIGltYWdlUHJvcHM/OiBuZXZlclxuICAgICAgaW1hZ2VTaXplPzogJ21lZGl1bScgfCAnbGFyZ2UnIHwgJ2dpYW50J1xuICAgICAgaW1hZ2U/OiBuZXZlclxuICAgICAvLyBpbWFnZUJ1aWxkZXI6IEltYWdlQnVpbGRlclxuICAgICAgaW1hZ2VUcmFuc2Zvcm1hdGlvbnM/OiBUcmFuc2Zvcm1lck9wdGlvblxuICAgIH1cbikgJlxuICAoXG4gICAgfCB7XG4gICAgICAgIGFycm93VXJsOiBzdHJpbmdcbiAgICAgICAgYXJyb3dMYWJlbDogc3RyaW5nXG4gICAgICB9XG4gICAgfCB7XG4gICAgICAgIGFycm93VXJsPzogbmV2ZXJcbiAgICAgICAgYXJyb3dMYWJlbD86IG5ldmVyXG4gICAgICB9XG4gIClcblxuZnVuY3Rpb24gSGVyb1NlY3Rpb24oe1xuICBhY3Rpb24sXG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgYXJyb3dVcmwsXG4gIGFycm93TGFiZWwsXG4gIGltYWdlLFxuICBpbWFnZVByb3BzLFxuIC8vIGltYWdlQnVpbGRlcixcbiAgaW1hZ2VTaXplID0gJ21lZGl1bScsXG4gIGFzID0gJ2hlYWRlcicsXG59OiBIZXJvU2VjdGlvblByb3BzKSB7XG4gIGNvbnN0IGhhc0ltYWdlID0gZmFsc2UgLy8gQm9vbGVhbihpbWFnZSA/PyBpbWFnZVByb3BzID8/IGltYWdlQnVpbGRlcilcbiAgY29uc3Qgc2hvdWxkUmVkdWNlTW90aW9uID0gdXNlUmVkdWNlZE1vdGlvbigpXG5cbiAgY29uc3QgY2hpbGRWYXJpYW50cyA9IHtcbiAgICBpbml0aWFsOiB7b3BhY2l0eTogMCwgeTogc2hvdWxkUmVkdWNlTW90aW9uID8gMCA6IDI1fSxcbiAgICB2aXNpYmxlOiB7b3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjoge2R1cmF0aW9uOiAwLjV9fSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGFzPXthc31cbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbGc6bWluLWgtWzQwcmVtXSBsZzogbWItMjQgcHQtMjQgaC1hdXRvIGxnOnBiLTEyJywge1xuICAgICAgICAnbGc6bWItNjQnOiBhcnJvd0xhYmVsLFxuICAgICAgICAnbGc6bWItMCc6ICFhcnJvd0xhYmVsLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2hhc0ltYWdlID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjb2wtc3Bhbi1mdWxsIG1iLTEyIGxnOm1iLTAnLCB7XG4gICAgICAgICAgICAnbGc6Y29sLXN0YXJ0LTcgbGc6Y29sLXNwYW4tNSBweC0xMCc6IGltYWdlU2l6ZSA9PT0gJ21lZGl1bScsXG4gICAgICAgICAgICAnbGc6Y29sLXN0YXJ0LTYgbGc6Y29sLXNwYW4tNiBwbC0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktZW5kJzpcbiAgICAgICAgICAgICAgaW1hZ2VTaXplID09PSAnbGFyZ2UnLFxuICAgICAgICAgICAgJ2xnOmNvbC1zdGFydC02IGxnOmNvbC1zcGFuLTcgbGc6cHgtMCBsZzotbXQtMjQgbGc6LW1yLTV2dyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic6XG4gICAgICAgICAgICAgIGltYWdlU2l6ZSA9PT0gJ2dpYW50JyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbWFnZVByb3BzID8gKFxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgey4uLmltYWdlUHJvcHN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAndy1mdWxsIGgtYXV0byBvYmplY3QtY29udGFpbicsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgJ21heC1oLTUwdmgnOiBpbWFnZVNpemUgPT09ICdtZWRpdW0nLFxuICAgICAgICAgICAgICAgICAgJ21heC1oLTc1dmgnOiBpbWFnZVNpemUgPT09ICdnaWFudCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbWFnZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgaW5pdGlhbD17e3NjYWxlOiBzaG91bGRSZWR1Y2VNb3Rpb24gPyAxIDogMS41LCBvcGFjaXR5OiAwfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17e3NjYWxlOiAxLCBvcGFjaXR5OiAxfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjc1fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IGltYWdlQnVpbGRlciA/IChcbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgndy1mdWxsIGgtYXV0byBvYmplY3QtY29udGFpbicsIHtcbiAgICAgICAgICAgICAgICAnbWF4LWgtNTB2aCc6IGltYWdlU2l6ZSA9PT0gJ21lZGl1bScsXG4gICAgICAgICAgICAgICAgJ21heC1oLTc1dmgnOiBpbWFnZVNpemUgPT09ICdnaWFudCcsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB7Li4uZ2V0SGVyb0ltYWdlUHJvcHMoaW1hZ2VCdWlsZGVyKX1cbiAgICAgICAgICAgICAgaW5pdGlhbD17e3NjYWxlOiBzaG91bGRSZWR1Y2VNb3Rpb24gPyAxIDogMS41LCBvcGFjaXR5OiAwfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17e3NjYWxlOiAxLCBvcGFjaXR5OiAxfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjc1fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgJ2NvbC1zcGFuLWZ1bGwgcHQtNiBsZzpmbGV4IGxnOmZsZXgtY29sIGxnOmNvbC1zdGFydC0xIGxnOnJvdy1zdGFydC0xIGxnOmgtZnVsbCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2xnOmNvbC1zcGFuLTUnOiBoYXNJbWFnZSxcbiAgICAgICAgICAgICdsZzpjb2wtc3Bhbi03JzogIWhhc0ltYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWF1dG8gZmxleC1jb2xcIlxuICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgIGluaXRpYWw6IHtvcGFjaXR5OiAwfSxcbiAgICAgICAgICAgIHZpc2libGU6IHtvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7c3RhZ2dlckNoaWxkcmVuOiAwLjJ9fSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2NoaWxkVmFyaWFudHN9PlxuICAgICAgICAgICAgPEgyIGFzPVwiaDJcIj57dGl0bGV9PC9IMj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICB7c3VidGl0bGUgPyAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17Y2hpbGRWYXJpYW50c30+XG4gICAgICAgICAgICAgIDxIMiBhcz1cInBcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgICAgICAgPC9IMj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7YWN0aW9uID8gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2NoaWxkVmFyaWFudHN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMTQgc3BhY2UteS00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FjdGlvbn1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB7YXJyb3dVcmwgPyAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OiAxfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tkZWxheTogMX19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gcHQtMTIgbGc6YmxvY2tcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0xpbmsgdG89e2Fycm93VXJsfSBkaXJlY3Rpb249XCJkb3duXCIgdGV4dFNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICB7YXJyb3dMYWJlbH1cbiAgICAgICAgICAgIDwvQXJyb3dMaW5rPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuZnVuY3Rpb24gZ2V0SGVyb0ltYWdlUHJvcHMoXG4gIGltYWdlQnVpbGRlcjogSW1hZ2VCdWlsZGVyLFxuICB0cmFuc2Zvcm1hdGlvbnM/OiBUcmFuc2Zvcm1lck9wdGlvbixcbikge1xuICByZXR1cm4gZ2V0SW1nUHJvcHMoaW1hZ2VCdWlsZGVyLCB7XG4gICAgd2lkdGhzOiBbMjU2LCA1NTAsIDcwMCwgOTAwLCAxMzAwLCAxODAwXSxcbiAgICBzaXplczogW1xuICAgICAgJyhtYXgtd2lkdGg6IDEwMjNweCkgODB2dycsXG4gICAgICAnKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSA1MHZ3JyxcbiAgICAgICcobWluLXdpZHRoOiAxMjgwcHgpIDkwMHB4JyxcbiAgICBdLFxuICAgIHRyYW5zZm9ybWF0aW9ucyxcbiAgfSlcbn1cblxuZXhwb3J0IHtIZXJvU2VjdGlvbiwgZ2V0SGVyb0ltYWdlUHJvcHN9XG4iLCAiaW1wb3J0IHR5cGUge1RyYW5zZm9ybWVyT3B0aW9ufSBmcm9tICdAY2xkLWFwaXMvdHlwZXMnXG5pbXBvcnQge3NldENvbmZpZywgYnVpbGRJbWFnZVVybH0gZnJvbSAnY2xvdWRpbmFyeS1idWlsZC11cmwnXG5cblxuc2V0Q29uZmlnKHtcbiAgY2xvdWROYW1lOiAnc3VuaWwtc2FtdWVsLWNvbScsXG59KVxuXG50eXBlIEltYWdlQnVpbGRlciA9IHtcbiAgKHRyYW5zZm9ybWF0aW9ucz86IFRyYW5zZm9ybWVyT3B0aW9uKTogc3RyaW5nXG4gIGFsdDogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbn1cbmNvbnN0IGNyZWF0ZUltYWdlcyA9IDxcbiAgSW1hZ2VUeXBlIGV4dGVuZHMgUmVjb3JkPHN0cmluZywge2lkOiBzdHJpbmc7IGFsdDogc3RyaW5nfT4sXG4+KFxuICBpbWFnZXM6IEltYWdlVHlwZSxcbikgPT4ge1xuICBjb25zdCBpbWFnZUJ1aWxkZXJzOiBSZWNvcmQ8c3RyaW5nLCBJbWFnZUJ1aWxkZXI+ID0ge31cbiAgZm9yIChjb25zdCBbbmFtZSwge2lkLCBhbHR9XSBvZiBPYmplY3QuZW50cmllcyhpbWFnZXMpKSB7XG4gICAgaW1hZ2VCdWlsZGVyc1tuYW1lXSA9IGdldEltYWdlQnVpbGRlcihpZCwgYWx0KVxuICB9XG4gIHJldHVybiBpbWFnZUJ1aWxkZXJzIGFzIHtbTmFtZSBpbiBrZXlvZiBJbWFnZVR5cGVdOiBJbWFnZUJ1aWxkZXJ9XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlQnVpbGRlcihpZDogc3RyaW5nLCBhbHQ6IHN0cmluZyA9ICcnKTogSW1hZ2VCdWlsZGVyIHtcbiAgZnVuY3Rpb24gaW1hZ2VCdWlsZGVyKHRyYW5zZm9ybWF0aW9ucz86IFRyYW5zZm9ybWVyT3B0aW9uKSB7XG4gICAgcmV0dXJuIGJ1aWxkSW1hZ2VVcmwoaWQsIHt0cmFuc2Zvcm1hdGlvbnN9KVxuICB9XG4gIGltYWdlQnVpbGRlci5hbHQgPSBhbHRcbiAgaW1hZ2VCdWlsZGVyLmlkID0gaWRcbiAgcmV0dXJuIGltYWdlQnVpbGRlclxufVxuXG5jb25zdCBpbWFnZXMgPSBjcmVhdGVJbWFnZXMoe1xuICBzdW5pbFNpZ25hdHVyZURhcmtNb2RlOiB7XG4gICAgaWQ6ICdzdW5pbC9zaWduYXR1cmUtZGFyay1tb2RlJyxcbiAgICBhbHQ6IGBTdW5pbCdzIHNpZ25hdHVyZWAsXG4gIH0sXG4gIHN1bmlsU2lnbmF0dXJlTGlnaHRNb2RlOiB7XG4gICAgaWQ6ICdzdW5pbC9zaWduYXR1cmUtbGlnaHQtbW9kZScsXG4gICAgYWx0OiBgU3VuaWwncyBzaWduYXR1cmVgLFxuICB9LFxuICBzdW5pbFRyYW5zcGFyZW50UHJvZmlsZToge1xuICAgIGlkOiAnc3VuaWwvcHJvZmlsZS10cmFuc3BhcmVudCcsXG4gICAgYWx0OiAnU3VuaWwgU2FtdWVsJyxcbiAgfSxcbiAgc3VuaWxQcm9maWxlOiB7XG4gICAgaWQ6ICdzdW5pbC9wcm9maWxlJyxcbiAgICBhbHQ6ICdTdW5pbCBTYW11ZWwnLFxuICB9LFxuICBzdW5pbFNub3dTcG9ydHM6IHtcbiAgICBpZDogJ3N1bmlsL3Nub3ctc3BvcnRzJyxcbiAgICBhbHQ6ICdTdW5pbCB3ZWFyaW5nIHNub3cgY2xvdGhlcyB3aXRoIHNraXMgYW5kIGEgc25vd2JvYXJkJyxcbiAgfVxufSlcblxuXG4vLyBjb25zdCBpbGx1c3RyYXRpb25JbWFnZXMgPSB7XG4vLyAgIHRlc2xhWTogaW1hZ2VzLnRlc2xhWSxcbi8vICAgc29sYXJQYW5lbHM6IGltYWdlcy5zb2xhclBhbmVscyxcbi8vICAgc25vd2JvYXJkOiBpbWFnZXMuc25vd2JvYXJkLFxuLy8gICBza2lzOiBpbWFnZXMuc2tpcyxcbi8vICAga2F5YWs6IGltYWdlcy5rYXlhayxcbi8vICAgb25ld2hlZWw6IGltYWdlcy5vbmV3aGVlbCxcbi8vICAgbWljcm9waG9uZTogaW1hZ2VzLm1pY3JvcGhvbmUsXG4vLyAgIGhlbG1ldDogaW1hZ2VzLmhlbG1ldCxcbi8vIH1cblxuZnVuY3Rpb24gZ2V0SW1nUHJvcHMoXG4gIGltYWdlQnVpbGRlcjogSW1hZ2VCdWlsZGVyLFxuICB7XG4gICAgd2lkdGhzLFxuICAgIHNpemVzLFxuICAgIHRyYW5zZm9ybWF0aW9ucyxcbiAgfToge1xuICAgIHdpZHRoczogQXJyYXk8bnVtYmVyPlxuICAgIHNpemVzOiBBcnJheTxzdHJpbmc+XG4gICAgdHJhbnNmb3JtYXRpb25zPzogVHJhbnNmb3JtZXJPcHRpb25cbiAgfSxcbikge1xuICBjb25zdCBhdmVyYWdlU2l6ZSA9IE1hdGguY2VpbCh3aWR0aHMucmVkdWNlKChhLCBzKSA9PiBhICsgcykgLyB3aWR0aHMubGVuZ3RoKVxuXG4gIHJldHVybiB7XG4gICAgYWx0OiBpbWFnZUJ1aWxkZXIuYWx0LFxuICAgIHNyYzogaW1hZ2VCdWlsZGVyKHtcbiAgICAgIHF1YWxpdHk6ICdhdXRvJyxcbiAgICAgIGZvcm1hdDogJ2F1dG8nLFxuICAgICAgLi4udHJhbnNmb3JtYXRpb25zLFxuICAgICAgcmVzaXplOiB7d2lkdGg6IGF2ZXJhZ2VTaXplLCAuLi50cmFuc2Zvcm1hdGlvbnM/LnJlc2l6ZX0sXG4gICAgfSksXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAod2lkdGggPT5cbiAgICAgICAgW1xuICAgICAgICAgIGltYWdlQnVpbGRlcih7XG4gICAgICAgICAgICBxdWFsaXR5OiAnYXV0bycsXG4gICAgICAgICAgICBmb3JtYXQ6ICdhdXRvJyxcbiAgICAgICAgICAgIC4uLnRyYW5zZm9ybWF0aW9ucyxcbiAgICAgICAgICAgIHJlc2l6ZToge3dpZHRoLCAuLi50cmFuc2Zvcm1hdGlvbnM/LnJlc2l6ZX0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYCR7d2lkdGh9d2AsXG4gICAgICAgIF0uam9pbignICcpLFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG4gICAgc2l6ZXM6IHNpemVzLmpvaW4oJywgJyksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U29jaWFsSW1hZ2VXaXRoUHJlVGl0bGUoe1xuICBvcmlnaW4sXG4gIHRpdGxlLFxuICBwcmVUaXRsZSxcbiAgZmVhdHVyZWRJbWFnZTogaW1nLFxuICB1cmwsXG59OiB7XG4gIG9yaWdpbjogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgcHJlVGl0bGU6IHN0cmluZ1xuICBmZWF0dXJlZEltYWdlOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbn0pIHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgdHlwZTogJzInLFxuICAgIHRpdGxlLFxuICAgIHByZVRpdGxlLFxuICAgIGltZyxcbiAgICB1cmwsXG4gIH0pXG4gIHJldHVybiBgJHtvcmlnaW59L2ltZy9zb2NpYWw/JHtwYXJhbXMudG9TdHJpbmcoKX1gXG59XG5cbmZ1bmN0aW9uIGdldEdlbmVyaWNTb2NpYWxJbWFnZSh7XG4gIG9yaWdpbixcbiAgd29yZHMsXG4gIGZlYXR1cmVkSW1hZ2U6IGltZyxcbiAgdXJsLFxufToge1xuICBvcmlnaW46IHN0cmluZ1xuICB3b3Jkczogc3RyaW5nXG4gIGZlYXR1cmVkSW1hZ2U6IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xufSkge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICB0eXBlOiAnMScsXG4gICAgd29yZHMsXG4gICAgaW1nLFxuICAgIHVybCxcbiAgfSlcbiAgcmV0dXJuIGAke29yaWdpbn0vaW1nL3NvY2lhbD8ke3BhcmFtcy50b1N0cmluZygpfWBcbn1cblxuZXhwb3J0IHtcbiAgaW1hZ2VzLFxuICBnZXRJbWdQcm9wcyxcbiAgZ2V0SW1hZ2VCdWlsZGVyLFxuICBnZXRHZW5lcmljU29jaWFsSW1hZ2UsXG4gIGdldFNvY2lhbEltYWdlV2l0aFByZVRpdGxlLFxuICAvL2lsbHVzdHJhdGlvbkltYWdlcyxcbn1cbmV4cG9ydCB0eXBlIHtJbWFnZUJ1aWxkZXJ9XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG50eXBlIFRpdGxlUHJvcHMgPSB7XG4gIHZhcmlhbnQ/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5J1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBpZD86IHN0cmluZ1xufSAmIChcbiAgfCB7Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZX1cbiAgfCB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICBfX2h0bWw6IHN0cmluZ1xuICAgICAgfVxuICAgIH1cbilcblxuY29uc3QgZm9udFNpemUgPSB7XG4gIGgxOiAnbGVhZGluZy10aWdodCB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCcsXG4gIGgyOiAnbGVhZGluZy10aWdodCB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCcsXG4gIGgzOiAndGV4dC0yeGwgZm9udC1tZWRpdW0gbWQ6dGV4dC0zeGwnLFxuICBoNDogJ3RleHQteGwgZm9udC1tZWRpdW0gbWQ6dGV4dC0yeGwnLFxuICBoNTogJ3RleHQtbGcgZm9udC1tZWRpdW0gbWQ6dGV4dC14bCcsXG4gIGg2OiAndGV4dC1sZyBmb250LW1lZGl1bScsXG59XG5cbmNvbnN0IHRpdGxlQ29sb3JzID0ge1xuICBwcmltYXJ5OiAndGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUnLFxuICBzZWNvbmRhcnk6ICd0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ibHVlR3JheS01MDAnLFxufVxuXG5mdW5jdGlvbiBUaXRsZSh7XG4gIHZhcmlhbnQgPSAncHJpbWFyeScsXG4gIHNpemUsXG4gIGFzLFxuICBjbGFzc05hbWUsXG4gIC4uLnJlc3Rcbn06IFRpdGxlUHJvcHMgJiB7c2l6ZToga2V5b2YgdHlwZW9mIGZvbnRTaXplfSkge1xuICBjb25zdCBUYWcgPSBhcyA/PyBzaXplXG4gIHJldHVybiAoXG4gICAgPFRhZ1xuICAgICAgY2xhc3NOYW1lPXtjbHN4KGZvbnRTaXplW3NpemVdLCB0aXRsZUNvbG9yc1t2YXJpYW50XSwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gSDEocHJvcHM6IFRpdGxlUHJvcHMpIHtcbiAgcmV0dXJuIDxUaXRsZSB7Li4ucHJvcHN9IHNpemU9XCJoMVwiIC8+XG59XG5cbmZ1bmN0aW9uIEgyKHByb3BzOiBUaXRsZVByb3BzKSB7XG4gIHJldHVybiA8VGl0bGUgey4uLnByb3BzfSBzaXplPVwiaDJcIiAvPlxufVxuXG5mdW5jdGlvbiBIMyhwcm9wczogVGl0bGVQcm9wcykge1xuICByZXR1cm4gPFRpdGxlIHsuLi5wcm9wc30gc2l6ZT1cImgzXCIgLz5cbn1cblxuZnVuY3Rpb24gSDQocHJvcHM6IFRpdGxlUHJvcHMpIHtcbiAgcmV0dXJuIDxUaXRsZSB7Li4ucHJvcHN9IHNpemU9XCJoNFwiIC8+XG59XG5cbmZ1bmN0aW9uIEg1KHByb3BzOiBUaXRsZVByb3BzKSB7XG4gIHJldHVybiA8VGl0bGUgey4uLnByb3BzfSBzaXplPVwiaDVcIiAvPlxufVxuXG5mdW5jdGlvbiBINihwcm9wczogVGl0bGVQcm9wcykge1xuICByZXR1cm4gPFRpdGxlIHsuLi5wcm9wc30gc2l6ZT1cImg2XCIgLz5cbn1cblxudHlwZSBQYXJhZ3JhcGhQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHByb3NlPzogYm9vbGVhblxuICB0ZXh0Q29sb3JDbGFzc05hbWU/OiBzdHJpbmdcbiAgYXM/OiBSZWFjdC5FbGVtZW50VHlwZVxufSAmICh7Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZX0gfCB7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtfX2h0bWw6IHN0cmluZ319KVxuXG5mdW5jdGlvbiBQYXJhZ3JhcGgoe1xuICBjbGFzc05hbWUsXG4gIHByb3NlID0gdHJ1ZSxcbiAgYXMgPSAncCcsXG4gIHRleHRDb2xvckNsYXNzTmFtZSA9ICd0ZXh0LXNlY29uZGFyeScsXG4gIC4uLnJlc3Rcbn06IFBhcmFncmFwaFByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGFzLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KCdtYXgtdy1mdWxsIHRleHQtbGcnLCB0ZXh0Q29sb3JDbGFzc05hbWUsIGNsYXNzTmFtZSwge1xuICAgICAgJ3Byb3NlIHByb3NlLWxpZ2h0IGRhcms6cHJvc2UtZGFyayc6IHByb3NlLFxuICAgIH0pLFxuICAgIC4uLnJlc3QsXG4gIH0pXG59XG5cbmV4cG9ydCB7SDEsIEgyLCBIMywgSDQsIEg1LCBINiwgUGFyYWdyYXBofVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7TGluaywgTGlua1Byb3BzfSBmcm9tICdyZW1peCdcbmltcG9ydCB7bW90aW9uLCB1c2VSZWR1Y2VkTW90aW9uLCBWYXJpYW50fSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHtBcnJvd0ljb24sIEFycm93SWNvblByb3BzfSBmcm9tICcuL2ljb25zL2Fycm93LWljb24nXG5pbXBvcnQge0g2fSBmcm9tICcuL3R5cG9ncmFwaHknXG5pbXBvcnQge0VsZW1lbnRTdGF0ZSwgdXNlRWxlbWVudFN0YXRlfSBmcm9tICcuL2hvb2tzL3VzZS1lbGVtZW50LXN0YXRlJ1xuXG5jb25zdCBhcnJvd1ZhcmlhbnRzOiBSZWNvcmQ8XG4gIEFycm93SWNvblByb3BzWydkaXJlY3Rpb24nXSxcbiAgUmVjb3JkPEVsZW1lbnRTdGF0ZSwgVmFyaWFudD5cbj4gPSB7XG4gIGRvd246IHtcbiAgICBpbml0aWFsOiB7eTogMH0sXG4gICAgaG92ZXI6IHt5OiA0fSxcbiAgICBmb2N1czoge1xuICAgICAgeTogWzAsIDQsIDBdLFxuICAgICAgdHJhbnNpdGlvbjoge3JlcGVhdDogSW5maW5pdHl9LFxuICAgIH0sXG4gICAgYWN0aXZlOiB7eTogMTJ9LFxuICB9LFxuICB1cDoge1xuICAgIGluaXRpYWw6IHt5OiAwfSxcbiAgICBob3Zlcjoge3k6IC00fSxcbiAgICBmb2N1czoge1xuICAgICAgeTogWzAsIC00LCAwXSxcbiAgICAgIHRyYW5zaXRpb246IHtyZXBlYXQ6IEluZmluaXR5fSxcbiAgICB9LFxuICAgIGFjdGl2ZToge3k6IC0xMn0sXG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBpbml0aWFsOiB7eDogMH0sXG4gICAgaG92ZXI6IHt4OiAtNH0sXG4gICAgZm9jdXM6IHtcbiAgICAgIHg6IFswLCAtNCwgMF0sXG4gICAgICB0cmFuc2l0aW9uOiB7cmVwZWF0OiBJbmZpbml0eX0sXG4gICAgfSxcbiAgICBhY3RpdmU6IHt4OiAtMTJ9LFxuICB9LFxuICByaWdodDoge1xuICAgIGluaXRpYWw6IHt4OiAwfSxcbiAgICBob3Zlcjoge3g6IDR9LFxuICAgIGZvY3VzOiB7XG4gICAgICB4OiBbMCwgNCwgMF0sXG4gICAgICB0cmFuc2l0aW9uOiB7cmVwZWF0OiBJbmZpbml0eX0sXG4gICAgfSxcbiAgICBhY3RpdmU6IHt4OiAxMn0sXG4gIH0sXG4gICd0b3AtcmlnaHQnOiB7XG4gICAgaW5pdGlhbDoge3g6IDAsIHk6IDB9LFxuICAgIGhvdmVyOiB7eDogNCwgeTogLTR9LFxuICAgIGZvY3VzOiB7XG4gICAgICB4OiBbMCwgNCwgMF0sXG4gICAgICB5OiBbMCwgLTQsIDBdLFxuICAgICAgdHJhbnNpdGlvbjoge3JlcGVhdDogSW5maW5pdHl9LFxuICAgIH0sXG4gICAgYWN0aXZlOiB7eDogMTIsIHk6IC0xMn0sXG4gIH0sXG59XG5cbnR5cGUgQXJyb3dCdXR0b25CYXNlUHJvcHMgPSB7XG4gIGRpcmVjdGlvbj86IEFycm93SWNvblByb3BzWydkaXJlY3Rpb24nXVxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB8IFJlYWN0LlJlYWN0Tm9kZVtdXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB0ZXh0U2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJ1xufVxuXG50eXBlIEFycm93TGlua1Byb3BzID0ge1xuICBkaXJlY3Rpb24/OiBBcnJvd0ljb25Qcm9wc1snZGlyZWN0aW9uJ11cbn0gJiAoe2hyZWY/OiBzdHJpbmc7IHRvPzogbmV2ZXJ9IHwge2hyZWY/OiBuZXZlcjsgdG86IExpbmtQcm9wc1sndG8nXX0pICZcbiAgQXJyb3dCdXR0b25CYXNlUHJvcHMgJiB7cHJlZmV0Y2g/OiAnaW50ZW50JyB8ICdyZW5kZXInIHwgJ25vbmUnfVxuXG50eXBlIEFycm93QnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2J1dHRvbiddWydvbkNsaWNrJ11cbiAgdHlwZT86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snYnV0dG9uJ11bJ3R5cGUnXVxufSAmIEFycm93QnV0dG9uQmFzZVByb3BzXG5cbi8vIHdoaWxlRm9jdXMgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHdoaWxlVGFwLCBzbyB3aGlsZSB3ZSBjYW4ndCBtb3ZlIHRoZSBhcnJvd1xuLy8gb24gZm9jdXMgKG9yIG9uIHRhcCksIHdlIGNhbiBzdGlsbCBjb2xvciBhbmQgYW5pbWF0ZSB0aGUgY2lyY2xlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZnJhbWVyL21vdGlvbi9pc3N1ZXMvMTIyMVxuZnVuY3Rpb24gZ2V0QmFzZVByb3BzKHt0ZXh0U2l6ZSwgY2xhc3NOYW1lfTogQXJyb3dCdXR0b25CYXNlUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBjbGFzc05hbWU6IGNsc3goXG4gICAgICAndGV4dC1wcmltYXJ5IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxlZnQgZm9udC1tZWRpdW0gZm9jdXM6b3V0bGluZS1ub25lIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24nLFxuICAgICAge1xuICAgICAgICAndGV4dC14bCc6IHRleHRTaXplID09PSAnbWVkaXVtJyxcbiAgICAgICAgJ3RleHQtbGcnOiB0ZXh0U2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWUsXG4gICAgKSxcbiAgfVxufVxuXG5mdW5jdGlvbiBBcnJvd0J1dHRvbkNvbnRlbnQoe1xuICBjaGlsZHJlbixcbiAgZGlyZWN0aW9uID0gJ3JpZ2h0Jyxcbn06IFBpY2s8QXJyb3dCdXR0b25CYXNlUHJvcHMsICdjaGlsZHJlbicgfCAnZGlyZWN0aW9uJz4pIHtcbiAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDI4ICogMiAqIE1hdGguUElcbiAgY29uc3Qgc3Ryb2tlRGFzaGFycmF5ID0gYCR7Y2lyY3VtZmVyZW5jZX0gJHtjaXJjdW1mZXJlbmNlfWBcbiAgY29uc3Qgc2hvdWxkUmVkdWNlTW90aW9uID0gdXNlUmVkdWNlZE1vdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NoaWxkcmVuICYmXG4gICAgICAoZGlyZWN0aW9uID09PSAncmlnaHQnIHx8XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ3VwJyB8fFxuICAgICAgICBkaXJlY3Rpb24gPT09ICd0b3AtcmlnaHQnKSA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItOCB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IGZsZXgtbm9uZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xIHctMTQgaC0xNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIj5cbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgcj1cIjI4XCJcbiAgICAgICAgICAgICAgY3g9XCIzMFwiXG4gICAgICAgICAgICAgIGN5PVwiMzBcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPG1vdGlvbi5jaXJjbGVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgcj1cIjI4XCJcbiAgICAgICAgICAgICAgY3g9XCIzMFwiXG4gICAgICAgICAgICAgIGN5PVwiMzBcIlxuICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZURhc2hhcnJheSwgcm90YXRlOiAtOTB9fVxuICAgICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICAgIGluaXRpYWw6IHtzdHJva2VEYXNob2Zmc2V0OiBjaXJjdW1mZXJlbmNlfSxcbiAgICAgICAgICAgICAgICBob3Zlcjoge3N0cm9rZURhc2hvZmZzZXQ6IDB9LFxuICAgICAgICAgICAgICAgIGZvY3VzOiB7c3Ryb2tlRGFzaG9mZnNldDogMH0sXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7c3Ryb2tlRGFzaG9mZnNldDogMH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICBkYW1waW5nOiAwLFxuICAgICAgICAgICAgICAgIC4uLihzaG91bGRSZWR1Y2VNb3Rpb24gPyB7ZHVyYXRpb246IDB9IDogbnVsbCksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICB0cmFuc2l0aW9uPXtzaG91bGRSZWR1Y2VNb3Rpb24gPyB7ZHVyYXRpb246IDB9IDoge319XG4gICAgICAgICAgdmFyaWFudHM9e3Nob3VsZFJlZHVjZU1vdGlvbiA/IHt9IDogYXJyb3dWYXJpYW50c1tkaXJlY3Rpb25dfVxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93SWNvbiBkaXJlY3Rpb249e2RpcmVjdGlvbn0gLz5cbiAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Y2hpbGRyZW4gJiYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtOCB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEFycm93QnV0dG9uKHtvbkNsaWNrLCB0eXBlLCAuLi5wcm9wc306IEFycm93QnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgW3JlZiwgc3RhdGVdID0gdXNlRWxlbWVudFN0YXRlKClcbiAgY29uc3Qgc2hvdWxkUmVkdWNlTW90aW9uID0gdXNlUmVkdWNlZE1vdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICB7Li4uZ2V0QmFzZVByb3BzKHByb3BzKX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgYW5pbWF0ZT17c3RhdGV9XG4gICAgICB0cmFuc2l0aW9uPXtzaG91bGRSZWR1Y2VNb3Rpb24gPyB7ZHVyYXRpb246IDB9IDoge319XG4gICAgPlxuICAgICAgPEFycm93QnV0dG9uQ29udGVudCB7Li4ucHJvcHN9IC8+XG4gICAgPC9tb3Rpb24uYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IE1vdGlvbkxpbmsgPSBtb3Rpb24oTGluaylcblxuZnVuY3Rpb24gQXJyb3dMaW5rKHt0bywgaHJlZiwgLi4ucHJvcHN9OiBBcnJvd0xpbmtQcm9wcykge1xuICBjb25zdCBbcmVmLCBzdGF0ZV0gPSB1c2VFbGVtZW50U3RhdGUoKVxuICBjb25zdCBzaG91bGRSZWR1Y2VNb3Rpb24gPSB1c2VSZWR1Y2VkTW90aW9uKClcblxuICBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8bW90aW9uLmFcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgey4uLmdldEJhc2VQcm9wcyhwcm9wcyl9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBhbmltYXRlPXtzdGF0ZX1cbiAgICAgICAgdHJhbnNpdGlvbj17c2hvdWxkUmVkdWNlTW90aW9uID8ge2R1cmF0aW9uOiAwfSA6IHt9fVxuICAgICAgPlxuICAgICAgICA8QXJyb3dCdXR0b25Db250ZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvbW90aW9uLmE+XG4gICAgKVxuICB9IGVsc2UgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb3Rpb25MaW5rXG4gICAgICAgIHRvPXt0b31cbiAgICAgICAgey4uLmdldEJhc2VQcm9wcyhwcm9wcyl9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBhbmltYXRlPXtzdGF0ZX1cbiAgICAgICAgdHJhbnNpdGlvbj17c2hvdWxkUmVkdWNlTW90aW9uID8ge2R1cmF0aW9uOiAwfSA6IHt9fVxuICAgICAgPlxuICAgICAgICA8QXJyb3dCdXR0b25Db250ZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvTW90aW9uTGluaz5cbiAgICApXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgZWl0aGVyIHRvIG9yIGhyZWYgdG8gQXJyb3dMaW5rJylcbn1cblxuZnVuY3Rpb24gQmFja0xpbmsoe1xuICB0byxcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbn06IHt0bzogTGlua1Byb3BzWyd0byddfSAmIFBpY2s8QXJyb3dMaW5rUHJvcHMsICdjbGFzc05hbWUnIHwgJ2NoaWxkcmVuJz4pIHtcbiAgY29uc3QgW3JlZiwgc3RhdGVdID0gdXNlRWxlbWVudFN0YXRlKClcbiAgY29uc3Qgc2hvdWxkUmVkdWNlTW90aW9uID0gdXNlUmVkdWNlZE1vdGlvbigpXG4gIHJldHVybiAoXG4gICAgPE1vdGlvbkxpbmtcbiAgICAgIHRvPXt0b31cbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgJ3RleHQtcHJpbWFyeSBmbGV4IGZvY3VzOm91dGxpbmUtbm9uZSBzcGFjZS14LTQnLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBhbmltYXRlPXtzdGF0ZX1cbiAgICAgIHRyYW5zaXRpb249e3Nob3VsZFJlZHVjZU1vdGlvbiA/IHtkdXJhdGlvbjogMH0gOiB7fX1cbiAgICA+XG4gICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgdmFyaWFudHM9e3Nob3VsZFJlZHVjZU1vdGlvbiA/IHt9IDogYXJyb3dWYXJpYW50cy5sZWZ0fVxuICAgICAgICB0cmFuc2l0aW9uPXtzaG91bGRSZWR1Y2VNb3Rpb24gPyB7ZHVyYXRpb246IDB9IDoge319XG4gICAgICA+XG4gICAgICAgIDxBcnJvd0ljb24gZGlyZWN0aW9uPVwibGVmdFwiIC8+XG4gICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgPEg2IGFzPVwic3BhblwiPntjaGlsZHJlbn08L0g2PlxuICAgIDwvTW90aW9uTGluaz5cbiAgKVxufVxuXG5leHBvcnQge0Fycm93QnV0dG9uLCBBcnJvd0xpbmssIEJhY2tMaW5rfVxuIiwgImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBBcnJvd0ljb25Qcm9wcyB7XG4gIGRpcmVjdGlvbjogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgfCAndG9wLXJpZ2h0J1xuICBzaXplPzogbnVtYmVyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3Qgcm90YXRpb25NYXAgPSB7XG4gIHVwOiAncm90YXRlLTE4MCcsXG4gIHJpZ2h0OiAnLXJvdGF0ZS05MCcsXG4gIGRvd246ICdyb3RhdGUtMCcsXG4gIGxlZnQ6ICdyb3RhdGUtOTAnLFxuICAndG9wLXJpZ2h0JzogJy1yb3RhdGUtMTM1Jyxcbn1cblxuZnVuY3Rpb24gQXJyb3dJY29uKHtkaXJlY3Rpb24sIHNpemUgPSAzMiwgY2xhc3NOYW1lfTogQXJyb3dJY29uUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCAndHJhbnNmb3JtJywgcm90YXRpb25NYXBbZGlyZWN0aW9uXSl9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xNS4xMDEgNS41VjIzLjEwOTRMOS40MDEwOCAxNy40MDk1TDguMTQ4MDcgMTguNjYxOUwxNS45ODYyIDI2LjVMMjMuODUyIDE4LjYzNDJMMjIuNTk5NiAxNy4zODE3TDE2Ljg3MjUgMjMuMTA5NFY1LjVIMTUuMTAxWlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQge0Fycm93SWNvbn1cbiIsICJpbXBvcnQge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgUmVmQ2FsbGJhY2ssIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IHR5cGUgRWxlbWVudFN0YXRlID0gJ2FjdGl2ZScgfCAnZm9jdXMnIHwgJ2hvdmVyJyB8ICdpbml0aWFsJ1xuXG4vLyBUaGlzIHN0YXJ0ZWQgYXMgYSB3b3JrIGFyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2ZyYW1lci9tb3Rpb24vaXNzdWVzLzEyMjEsXG4vLyBidXQgaXQncyBzbyBtdWNoIG1vcmUgbm93LiBUaGUgdmFyaWFudHMgaW4gZnJhbWVyIG1vdGlvbiBzdXBwb3J0IGhvdmVyLCBmb2N1c1xuLy8gYW5kIHRhcCwgd2hpbGUgdGhpcyBlZmZlY3QgYWxzbyBsaXN0ZW5zIHRvIHRoZSBrZXlwcmVzcywgc28gdGhhdCBgRW50ZXJgXG4vLyByZXN1bHRzIGluIGFuIGFjdGl2ZSBzdGF0ZSBhcyB3ZWxsLlxuZnVuY3Rpb24gdXNlRWxlbWVudFN0YXRlKCk6IFtSZWZDYWxsYmFjazxIVE1MRWxlbWVudD4sIEVsZW1lbnRTdGF0ZV0ge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBmb2N1czogZmFsc2UsXG4gICAgaG92ZXI6IGZhbHNlLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gIH0pXG5cbiAgY29uc3Qgc2V0UmVmOiBSZWZDYWxsYmFjazxIVE1MRWxlbWVudD4gPSB1c2VDYWxsYmFjayhlbGVtZW50ID0+IHtcbiAgICByZWYuY3VycmVudCA9IGVsZW1lbnRcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlbCA9IHJlZi5jdXJyZW50XG4gICAgaWYgKCFlbCkgcmV0dXJuXG5cbiAgICBjb25zdCBwb2ludGVyZW50ZXIgPSAoKSA9PiBzZXRTdGF0ZShzID0+ICh7Li4ucywgaG92ZXI6IHRydWV9KSlcbiAgICBjb25zdCBwb2ludGVybGVhdmUgPSAoKSA9PiBzZXRTdGF0ZShzID0+ICh7Li4ucywgaG92ZXI6IGZhbHNlfSkpXG4gICAgY29uc3QgZm9jdXMgPSAoKSA9PiBzZXRTdGF0ZShzID0+ICh7Li4ucywgZm9jdXM6IHRydWV9KSlcbiAgICBjb25zdCBibHVyID0gKCkgPT4gc2V0U3RhdGUocyA9PiAoey4uLnMsIGZvY3VzOiBmYWxzZX0pKVxuICAgIGNvbnN0IHBvaW50ZXJkb3duID0gKCkgPT4ge1xuICAgICAgc2V0U3RhdGUocyA9PiAoey4uLnMsIGFjdGl2ZTogdHJ1ZX0pKVxuXG4gICAgICAvLyBwb2ludGVyIGV2ZW50cyBjYW4gYmUgY2FuY2VsbGVkIGR1ZSB0byB3aGljaCBlbCB3b3VsZCBuZXZlciByZWNlaXZlXG4gICAgICAvLyBhIHBvaW50ZXJ1cCBub3IgcG9pbnRlcmNhbmNlbCBldmVudC4gTGlzdGVuIG9uIHRoZSB3aW5kb3cgZm9yIHRob3NlXG4gICAgICAvLyBhZnRlciB3ZSByZWNlaXZlZCB0aGUgcG9pbnRlcmRvd24gZXZlbnQsIGFuZCBvbmx5IGNhdGNoIGl0IG9uY2UuIEJ1dFxuICAgICAgLy8gbm90IHdpdGggeyBvbmNlOiB0cnVlIH0sIGJlY2F1c2Ugd2Ugd2FudCB0ZSByZW1vdmUgYm90aCBvZiB0aGVtLCBvbmNlXG4gICAgICAvLyBvZiB0aGVtIGhhcyBiZWVuIHJlY2VpdmVkLlxuICAgICAgY29uc3QgcG9pbnRlcnVwID0gKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZShzID0+ICh7Li4ucywgYWN0aXZlOiBmYWxzZX0pKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgcG9pbnRlcnVwKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHBvaW50ZXJ1cClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHBvaW50ZXJ1cClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgcG9pbnRlcnVwKVxuICAgIH1cblxuICAgIGNvbnN0IGtleWRvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09ICdFbnRlcicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKHMgPT4gKHsuLi5zLCBhY3RpdmU6IHRydWV9KSlcblxuICAgICAgLy8gd2hlbiBjbGlja2luZyBhIGxpbmssIHRoZSBrZXl1cCBkb2Vzbid0IG5lZWQgdG8gY29tZSBmcm9tIHRoZSBrZXlkb3duXG4gICAgICAvLyBlbGVtZW50LiBXZSBsaXN0ZW4gb24gdGhlIHdpbmRvdyBpbnN0ZWFkLCBidXQgb25seSBvbmNlLlxuICAgICAgY29uc3Qga2V5dXAgPSAoKSA9PiBzZXRTdGF0ZShzID0+ICh7Li4ucywgYWN0aXZlOiBmYWxzZX0pKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5dXAsIHtvbmNlOiB0cnVlfSlcbiAgICB9XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBwb2ludGVyZW50ZXIpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgcG9pbnRlcmxlYXZlKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXMpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXIpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBwb2ludGVyZG93bilcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bilcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBwb2ludGVyZW50ZXIpXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCBwb2ludGVybGVhdmUpXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzKVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXIpXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHBvaW50ZXJkb3duKVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd24pXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBzdGF0dXM6IEVsZW1lbnRTdGF0ZSA9IHN0YXRlLmFjdGl2ZVxuICAgID8gJ2FjdGl2ZSdcbiAgICA6IHN0YXRlLmZvY3VzXG4gICAgPyAnZm9jdXMnXG4gICAgOiBzdGF0ZS5ob3ZlclxuICAgID8gJ2hvdmVyJ1xuICAgIDogJ2luaXRpYWwnXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHN0YXR1c11cbn1cblxuZXhwb3J0IHt1c2VFbGVtZW50U3RhdGV9XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5pbnRlcmZhY2UgR3JpZFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBvdmVyZmxvdz86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGVcbiAgbmVzdGVkPzogYm9vbGVhblxuICByb3dHYXA/OiBib29sZWFuXG4gIGZlYXR1cmVkPzogYm9vbGVhblxufVxuXG5jb25zdCBHcmlkID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRWxlbWVudCwgR3JpZFByb3BzPihmdW5jdGlvbiBHcmlkKFxuICB7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgYXM6IFRhZyA9ICdkaXYnLCBmZWF0dXJlZCwgbmVzdGVkLCByb3dHYXB9LFxuICByZWYsXG4pIHtcbiAgcmV0dXJuIChcbiAgICA8VGFnXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgncmVsYXRpdmUnLCB7XG4gICAgICAgICdteC0xMHZ3JzogIW5lc3RlZCxcbiAgICAgICAgJ3ctZnVsbCc6IG5lc3RlZCxcbiAgICAgICAgJ3B5LTEwIG1kOnB5LTI0IGxnOnBiLTQwIGxnOnB0LTM2JzogZmVhdHVyZWQsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICB7ZmVhdHVyZWQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCAtbXgtNXZ3XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgbXgtYXV0byB3LWZ1bGwgbWF4LXctOHhsIGgtZnVsbCByb3VuZGVkLWxnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgJ3JlbGF0aXZlIGdyaWQgZ2FwLXgtNCBncmlkLWNvbHMtNCBtZDpncmlkLWNvbHMtOCBsZzpnYXAteC02IGxnOmdyaWQtY29scy0xMicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ214LWF1dG8gbWF4LXctN3hsJzogIW5lc3RlZCxcbiAgICAgICAgICAgICdnYXAteS00IGxnOmdhcC15LTYnOiByb3dHYXAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvVGFnPlxuICApXG59KVxuXG4vKipcbiAqIFVzZSBmb3IgZGV2ZWxvcG1lbnQgb25seSEgSXQgcmVuZGVycyB0aGUgZ3JpZCBjb2x1bW5zIGFuZCBnYXBzIGFzIHBhZ2Ugb3ZlcmxheVxuICovXG5mdW5jdGlvbiBHcmlkTGluZXMoKSB7XG4gIGlmIChFTlYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzxHcmlkTGluZXMgLz4gIHNob3VsZCBvbmx5IGJlIHVzZWQgZHVyaW5nIGRldmVsb3BtZW50JylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB6LTEwIGluc2V0LTAgcG9pbnRlci1ldmVudHMtbm9uZSBzZWxlY3Qtbm9uZVwiPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIHtBcnJheS5mcm9tKHtsZW5ndGg6IDEyfSkubWFwKChfLCBpZHgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgaC1zY3JlZW4gdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgYmctYmxhY2sgZGFyazpiZy13aGl0ZSBvcGFjaXR5LTEwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgdy1mdWxsIHRleHQtY2VudGVyIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAge2lkeCArIDF9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtHcmlkLCBHcmlkTGluZXN9XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUge01keExpc3RJdGVtfSBmcm9tICd+L3R5cGVzJ1xuaW1wb3J0IHtHcmlkfSBmcm9tICcuLi9ncmlkJ1xuaW1wb3J0IHtBcnRpY2xlQ2FyZH0gZnJvbSAnLi4vYXJ0aWNsZS1jYXJkJ1xuaW1wb3J0IHtIZWFkZXJTZWN0aW9ufSBmcm9tICcuL2hlYWRlci1zZWN0aW9uJ1xuaW1wb3J0IHtTcGFjZXJ9IGZyb20gJy4uL3NwYWNlcidcblxuaW50ZXJmYWNlIEJsb2dTZWN0aW9uUHJvcHMge1xuICBhcnRpY2xlczogQXJyYXk8TWR4TGlzdEl0ZW0+XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBzaG93QXJyb3dCdXR0b24/OiBib29sZWFuXG59XG5cbmZ1bmN0aW9uIEJsb2dTZWN0aW9uKHtcbiAgYXJ0aWNsZXMsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgc2hvd0Fycm93QnV0dG9uID0gdHJ1ZSxcbn06IEJsb2dTZWN0aW9uUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlclNlY3Rpb25cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBzdWJUaXRsZT17ZGVzY3JpcHRpb259XG4gICAgICAgIGN0YT17c2hvd0Fycm93QnV0dG9uID8gJ1NlZSB0aGUgZnVsbCBibG9nJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgY3RhVXJsPVwiL2Jsb2dcIlxuICAgICAgLz5cbiAgICAgIDxTcGFjZXIgc2l6ZT1cIjJ4c1wiIC8+XG4gICAgICA8R3JpZCBjbGFzc05hbWU9XCJnYXAteS0xNlwiPlxuICAgICAgICB7YXJ0aWNsZXMuc2xpY2UoMCwgMykubWFwKChhcnRpY2xlLCBpZHgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2FydGljbGUuc2x1Z31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY29sLXNwYW4tNCcsIHtcbiAgICAgICAgICAgICAgJ2hpZGRlbiBsZzpibG9jayc6IGlkeCA+PSAyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFydGljbGVDYXJkIGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCB7QmxvZ1NlY3Rpb259XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcbmltcG9ydCBwYXJzZUlTTyBmcm9tICdkYXRlLWZucy9wYXJzZUlTTydcbmltcG9ydCB0eXBlIHtNZHhMaXN0SXRlbSwgVGVhbX0gZnJvbSAnfi90eXBlcydcbmltcG9ydCB7Z2V0SW1hZ2VCdWlsZGVyLCBnZXRJbWdQcm9wc30gZnJvbSAnfi9pbWFnZXMnXG5pbXBvcnQge0gzfSBmcm9tICcuL3R5cG9ncmFwaHknXG5pbXBvcnQge0NsaXBib2FyZENvcHlCdXR0b259IGZyb20gJy4vY2xpcGJvYXJkLWNvcHktYnV0dG9uJ1xuLy8gaW1wb3J0IHtNaXNzaW5nU29tZXRoaW5nfSBmcm9tICcuL2tpZnMnXG5pbXBvcnQge0JsdXJyYWJsZUltYWdlfSBmcm9tICcuL2JsdXJyYWJsZS1pbWFnZSdcbmltcG9ydCB7dXNlUm9vdERhdGF9IGZyb20gJ34vdXRpbHMvdXNlLXJvb3QtZGF0YSdcbi8vIGltcG9ydCB7Z2V0QmFubmVyQWx0UHJvcCwgZ2V0QmFubmVyVGl0bGVQcm9wfSBmcm9tICd+L3V0aWxzL21keCdcblxuZnVuY3Rpb24gQXJ0aWNsZUNhcmQoe1xuICBsZWFkaW5nVGVhbSxcbiAgYXJ0aWNsZToge1xuICAgIHJlYWRUaW1lLFxuICAgIHNsdWcsXG4gICAgZnJvbnRtYXR0ZXIsXG4gICAgZnJvbnRtYXR0ZXI6IHtcbiAgICAgIGRhdGUgPSBmb3JtYXREYXRlKG5ldyBEYXRlKCksICd5eXl5LU1NLWlpJyksXG4gICAgICB0aXRsZSA9ICdVbnRpdGxlZCBQb3N0JyxcbiAgICAgIGJhbm5lckNsb3VkaW5hcnlJZCxcbiAgICAgIGJhbm5lckJsdXJEYXRhVXJsLFxuICAgIH0sXG4gIH0sXG59OiB7XG4gIGFydGljbGU6IE1keExpc3RJdGVtXG4gIGxlYWRpbmdUZWFtPzogVGVhbSB8IG51bGxcbn0pIHtcbiAgY29uc3Qge3JlcXVlc3RJbmZvfSA9IHVzZVJvb3REYXRhKClcbiAgY29uc3QgcGVybWFsaW5rID0gYCR7cmVxdWVzdEluZm8ub3JpZ2lufS9ibG9nLyR7c2x1Z31gXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICdyZWxhdGl2ZSB3LWZ1bGwnLFxuICAgICAgICBsZWFkaW5nVGVhbVxuICAgICAgICAgID8gYHNldC1jb2xvci10ZWFtLWN1cnJlbnQtJHtsZWFkaW5nVGVhbS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICA6IG51bGwsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxMaW5rXG4gICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcGVlciByZWxhdGl2ZSBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgdG89e2AvYmxvZy8ke3NsdWd9YH1cbiAgICAgID5cbiAgICAgICAge2Jhbm5lckNsb3VkaW5hcnlJZCA/IChcbiAgICAgICAgICA8Qmx1cnJhYmxlSW1hZ2VcbiAgICAgICAgICAgIGtleT17YmFubmVyQ2xvdWRpbmFyeUlkfVxuICAgICAgICAgICAgYmx1ckRhdGFVcmw9e2Jhbm5lckJsdXJEYXRhVXJsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LWgtNCBhc3BlY3Qtdy0zIHJvdW5kZWQtbGdcIlxuICAgICAgICAgIC8vICBpbWc9e1xuICAgICAgICAgIC8vICAgIDxpbWdcbiAgICAgICAgICAvLyAgICAgIHRpdGxlPXtmcm9udG1hdHRlci50aXRsZSA/PyBnZXRCYW5uZXJUaXRsZVByb3AoZnJvbnRtYXR0ZXIpfVxuICAgICAgICAgICAgICAgIC8vIHsuLi5nZXRJbWdQcm9wcyhcbiAgICAgICAgICAgICAgICAvLyAgIGdldEltYWdlQnVpbGRlcihcbiAgICAgICAgICAgICAgICAvLyAgICAgYmFubmVyQ2xvdWRpbmFyeUlkLFxuICAgICAgICAgICAgICAgIC8vICAgICBnZXRCYW5uZXJBbHRQcm9wKGZyb250bWF0dGVyKSxcbiAgICAgICAgICAgICAgICAvLyAgICksXG4gICAgICAgICAgICAgICAgLy8gICB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoczogWzI4MCwgNTYwLCA4NDAsIDExMDAsIDEzMDAsIDE2NTBdLFxuICAgICAgICAgICAgICAgIC8vICAgICBzaXplczogW1xuICAgICAgICAgICAgICAgIC8vICAgICAgICcobWF4LXdpZHRoOjYzOXB4KSA4MHZ3JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAnKG1pbi13aWR0aDo2NDBweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KSA0MHZ3JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAnKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjE2MjBweCkgMjV2dycsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgJzQyMHB4JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNmb3JtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgYmFja2dyb3VuZDogJ3JnYjplNmU5ZWUnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgIHJlc2l6ZToge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdHlwZTogJ2ZpbGwnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXNwZWN0UmF0aW86ICczOjQnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgIC8vICl9XG4gICAgICAgICAgICAgLy8gICBjbGFzc05hbWU9XCJmb2N1cy1yaW5nIHctZnVsbCByb3VuZGVkLWxnIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAvLyB0aGlzICAgLz5cbiAgICAgICAgICAgLy8gfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtaC00IGFzcGVjdC13LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9jdXMtcmluZyB3LWZ1bGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgey8qIDxNaXNzaW5nU29tZXRoaW5nIGFzcGVjdFJhdGlvPVwiMzo0XCIgLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdGV4dC1ibHVlR3JheS01MDAgdGV4dC14bCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIHtmb3JtYXREYXRlKHBhcnNlSVNPKGRhdGUpLCAnUFBQJyl9IFx1MjAxNCB7cmVhZFRpbWU/LnRleHQgPz8gJ3F1aWNrIHJlYWQnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEgzIGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IMz5cbiAgICAgIDwvTGluaz5cblxuICAgICAge2xlYWRpbmdUZWFtID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotMTAgcmlnaHQtNiB0b3AtNiBwLTEgdy00IGgtNCBiZy10ZWFtLWN1cnJlbnQgcm91bmRlZC1mdWxsIGxnOmxlZnQtNlwiIC8+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxDbGlwYm9hcmRDb3B5QnV0dG9uXG4gICAgICAgIHZhbHVlPXtwZXJtYWxpbmt9XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotMTAgbGVmdC02IHRvcC02XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtBcnRpY2xlQ2FyZH1cbiIsICJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0NoZWNrSWNvbn0gZnJvbSAnLi9pY29ucy9jaGVjay1pY29uJ1xuaW1wb3J0IHtDb3B5SWNvbn0gZnJvbSAnLi9pY29ucy9jb3B5LWljb24nXG5cbmFzeW5jIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCh2YWx1ZTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgaWYgKCdjbGlwYm9hcmQnIGluIG5hdmlnYXRvcikge1xuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodmFsdWUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWxlbWVudClcbiAgICBlbGVtZW50LnNlbGVjdCgpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICAgIGVsZW1lbnQucmVtb3ZlKClcblxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmludGVyZmFjZSBDbGlwYm9hcmRDb3B5QnV0dG9uUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB2YXJpYW50PzogJ3Jlc3BvbnNpdmUnIHwgJ2ljb24nXG59XG5cbmVudW0gU3RhdGUge1xuICBJZGxlID0gJ2lkbGUnLFxuICBDb3B5ID0gJ2NvcHknLFxuICBDb3BpZWQgPSAnY29waWVkJyxcbn1cblxuZnVuY3Rpb24gQ2xpcGJvYXJkQ29weUJ1dHRvbih7XG4gIHZhbHVlLFxuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQgPSAncmVzcG9uc2l2ZScsXG59OiBDbGlwYm9hcmRDb3B5QnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxTdGF0ZT4oU3RhdGUuSWRsZSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHRyYW5zaXRpb24oKSB7XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgU3RhdGUuQ29weToge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvcHlUb0NsaXBib2FyZCh2YWx1ZSlcbiAgICAgICAgICBjb25zb2xlLmxvZygnY29waWVkJywgcmVzKVxuICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkNvcGllZClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgU3RhdGUuQ29waWVkOiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZShTdGF0ZS5JZGxlKVxuICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHZvaWQgdHJhbnNpdGlvbigpXG4gIH0sIFtzdGF0ZSwgdmFsdWVdKVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdGUoU3RhdGUuQ29weSl9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICdwLTMgdGV4dC1ibGFjayB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LWxnIGZvbnQtbWVkaXVtIGJnLXdoaXRlIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIHNoYWRvdyBob3ZlcjpzaGFkb3ctbWQgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpvcGFjaXR5LTEwMCBwZWVyLWZvY3VzOm9wYWNpdHktMTAwIGZvY3VzOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gZm9jdXM6cmluZy00IGhvdmVyOnJpbmctNCByaW5nLXRlYW0tY3VycmVudCBsZzpvcGFjaXR5LTAnLFxuICAgICAgICB7J2xnOnB4LTggbGc6cHktNCc6IHZhcmlhbnQgPT09ICdyZXNwb25zaXZlJ30sXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KCdoaWRkZW4nLCB7J2xnOmlubGluZSc6IHZhcmlhbnQgPT09ICdyZXNwb25zaXZlJ30pfT5cbiAgICAgICAge3N0YXRlID09PSBTdGF0ZS5Db3BpZWQgPyAnQ29waWVkIHRvIGNsaXBib2FyZCcgOiAnQ2xpY2sgdG8gY29weSB1cmwnfVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KCdpbmxpbmUnLCB7J2xnOmhpZGRlbic6IHZhcmlhbnQgPT09ICdyZXNwb25zaXZlJ30pfT5cbiAgICAgICAge3N0YXRlID09PSBTdGF0ZS5Db3BpZWQgPyA8Q2hlY2tJY29uIC8+IDogPENvcHlJY29uIC8+fVxuICAgICAgPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCB7Q2xpcGJvYXJkQ29weUJ1dHRvbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gQ2hlY2tJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBkPVwiTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IHtDaGVja0ljb259XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIENvcHlJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBkPVwiTTYuNSAxNS4yNVYxNS4yNUM1LjUzMzUgMTUuMjUgNC43NSAxNC40NjY1IDQuNzUgMTMuNVY2Ljc1QzQuNzUgNS42NDU0MyA1LjY0NTQzIDQuNzUgNi43NSA0Ljc1SDEzLjVDMTQuNDY2NSA0Ljc1IDE1LjI1IDUuNTMzNSAxNS4yNSA2LjVWNi41XCJcbiAgICAgIC8+XG4gICAgICA8cmVjdFxuICAgICAgICB3aWR0aD1cIjEwLjVcIlxuICAgICAgICBoZWlnaHQ9XCIxMC41XCJcbiAgICAgICAgeD1cIjguNzVcIlxuICAgICAgICB5PVwiOC43NVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHJ4PVwiMlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCB7Q29weUljb259XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHt1c2VTU1JMYXlvdXRFZmZlY3R9IGZyb20gJ34vdXRpbHMvbWlzYydcblxuZnVuY3Rpb24gQmx1cnJhYmxlSW1hZ2Uoe1xuICBpbWcsXG4gIGJsdXJEYXRhVXJsLFxuICAuLi5yZXN0XG59OiB7XG4gIGltZzogSlNYLkVsZW1lbnQgJlxuICAgIFJlYWN0LlJlYWN0RWxlbWVudDxSZWFjdC5JbWdIVE1MQXR0cmlidXRlczxIVE1MSW1hZ2VFbGVtZW50Pj5cbiAgYmx1ckRhdGFVcmw/OiBzdHJpbmdcbn0gJiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGpzSW1nRWxSZWYgPSBSZWFjdC51c2VSZWY8SFRNTEltYWdlRWxlbWVudD4obnVsbClcblxuICAvLyBtYWtlIHRoaXMgaGFwcGVuIGFzYXBcbiAgLy8gaWYgaXQncyBhbHJhZHkgbG9hZGVkLCBkb24ndCBib3RoZXIgZmFkaW5nIGl0IGluLlxuICB1c2VTU1JMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChqc0ltZ0VsUmVmLmN1cnJlbnQ/LmNvbXBsZXRlKSBzZXRWaXNpYmxlKHRydWUpXG4gIH0sIFtdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFqc0ltZ0VsUmVmLmN1cnJlbnQpIHJldHVyblxuICAgIGlmIChqc0ltZ0VsUmVmLmN1cnJlbnQuY29tcGxldGUpIHJldHVyblxuXG4gICAgbGV0IGN1cnJlbnQgPSB0cnVlXG4gICAganNJbWdFbFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBpZiAoIWpzSW1nRWxSZWYuY3VycmVudCB8fCAhY3VycmVudCkgcmV0dXJuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgfSwgMClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QganNJbWdFbCA9IFJlYWN0LmNsb25lRWxlbWVudChpbWcsIHtcbiAgICByZWY6IGpzSW1nRWxSZWYsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGltZy5wcm9wcy5jbGFzc05hbWUsICd0cmFuc2l0aW9uLW9wYWNpdHknLCB7XG4gICAgICAnb3BhY2l0eS0wJzogIXZpc2libGUsXG4gICAgfSksXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5yZXN0fT5cbiAgICAgIHtibHVyRGF0YVVybCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBrZXk9e2JsdXJEYXRhVXJsfVxuICAgICAgICAgICAgc3JjPXtibHVyRGF0YVVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW1nLnByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIGFsdD17aW1nLnByb3BzLmFsdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGltZy5wcm9wcy5jbGFzc05hbWUsICdiYWNrZHJvcC1ibHVyLXhsJyl9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7anNJbWdFbH1cbiAgICAgIDxub3NjcmlwdD57aW1nfTwvbm9zY3JpcHQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtCbHVycmFibGVJbWFnZX1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHtIZWFkZXJzRnVuY3Rpb24sIExpbmtQcm9wc30gZnJvbSAncmVtaXgnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUge05vbk51bGxQcm9wZXJ0aWVzLCBVc2VyfSBmcm9tICd+L3R5cGVzJ1xuLy9pbXBvcnQge1RlYW19IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucydcbmltcG9ydCBtZDUgZnJvbSAnbWQ1LWhhc2gnXG5pbXBvcnQge2ltYWdlc30gZnJvbSAnLi4vaW1hZ2VzJ1xuLy9pbXBvcnQgdHlwZSB7Z2V0RW52fSBmcm9tICcuL2Vudi5zZXJ2ZXInXG5cblxuY29uc3QgZGVmYXVsdEF2YXRhclNpemUgPSAxMjhcbmZ1bmN0aW9uIGdldEF2YXRhcihcbiAgZW1haWw6IHN0cmluZyxcbiAge1xuICAgIHNpemUgPSBkZWZhdWx0QXZhdGFyU2l6ZSxcbiAgICBmYWxsYmFjayA9IGltYWdlcy5zdW5pbFByb2ZpbGUoe3Jlc2l6ZToge3dpZHRoOiBzaXplfX0pLFxuICAgIG9yaWdpbixcbiAgfToge3NpemU/OiBudW1iZXI7IGZhbGxiYWNrPzogc3RyaW5nIHwgbnVsbDsgb3JpZ2luPzogc3RyaW5nfSA9IHt9LFxuKSB7XG4gIGNvbnN0IGhhc2ggPSBtZDUoZW1haWwpXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoYGh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJHtoYXNofWApXG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzaXplJywgU3RyaW5nKHNpemUpKVxuICBpZiAoZmFsbGJhY2spIHtcbiAgICBpZiAob3JpZ2luICYmIGZhbGxiYWNrLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZmFsbGJhY2sgPSBgJHtvcmlnaW59JHtmYWxsYmFja31gXG4gICAgfVxuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdkZWZhdWx0JywgZmFsbGJhY2spXG4gIH1cbiAgcmV0dXJuIHVybC50b1N0cmluZygpXG59XG5cblxuZnVuY3Rpb24gZ2V0QXZhdGFyRm9yVXNlcihcbiAge2VtYWlsLCB0ZWFtLCBmaXJzdE5hbWV9OiBQaWNrPFVzZXIsICdlbWFpbCcgfCAndGVhbScgfCAnZmlyc3ROYW1lJz4sXG4gIHtzaXplID0gZGVmYXVsdEF2YXRhclNpemUsIG9yaWdpbn06IHtzaXplPzogbnVtYmVyOyBvcmlnaW4/OiBzdHJpbmd9ID0ge30sXG4pIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6IGdldEF2YXRhcihlbWFpbCwge1xuICAgICAgLy9mYWxsYmFjazogYXZhdGFyRmFsbGJhY2tzW3RlYW1dKHNpemUpLFxuICAgICAgc2l6ZSxcbiAgICAgIG9yaWdpbixcbiAgICB9KSxcbiAgICBhbHQ6IGZpcnN0TmFtZSxcbiAgfVxufVxuXG5cblxuY29uc3QgdXNlU1NSTGF5b3V0RWZmZWN0ID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAoKSA9PiB7fSA6IFJlYWN0LnVzZUxheW91dEVmZmVjdFxuXG50eXBlIEFuY2hvclByb3BzID0gUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gIFJlYWN0LkFuY2hvckhUTUxBdHRyaWJ1dGVzPEhUTUxBbmNob3JFbGVtZW50PixcbiAgSFRNTEFuY2hvckVsZW1lbnRcbj5cblxuY29uc3QgQW5jaG9yT3JMaW5rID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEFuY2hvckVsZW1lbnQsXG4gIEFuY2hvclByb3BzICYge1xuICAgIHJlbG9hZD86IGJvb2xlYW5cbiAgICB0bz86IExpbmtQcm9wc1sndG8nXVxuICAgIHByZWZldGNoPzogTGlua1Byb3BzWydwcmVmZXRjaCddXG4gIH1cbj4oZnVuY3Rpb24gQW5jaG9yT3JMaW5rKHByb3BzLCByZWYpIHtcbiAgY29uc3Qge1xuICAgIHRvLFxuICAgIGhyZWYsXG4gICAgZG93bmxvYWQsXG4gICAgcmVsb2FkID0gZmFsc2UsXG4gICAgcHJlZmV0Y2gsXG4gICAgY2hpbGRyZW4sXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHNcbiAgbGV0IHRvVXJsID0gJydcbiAgbGV0IHNob3VsZFVzZXJSZWd1bGFyQW5jaG9yID0gcmVsb2FkIHx8IGRvd25sb2FkXG5cbiAgaWYgKCFzaG91bGRVc2VyUmVndWxhckFuY2hvciAmJiB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICBzaG91bGRVc2VyUmVndWxhckFuY2hvciA9IGhyZWYuaW5jbHVkZXMoJzonKSB8fCBocmVmLnN0YXJ0c1dpdGgoJyMnKVxuICB9XG5cbiAgaWYgKCFzaG91bGRVc2VyUmVndWxhckFuY2hvciAmJiB0eXBlb2YgdG8gPT09ICdzdHJpbmcnKSB7XG4gICAgdG9VcmwgPSB0b1xuICAgIHNob3VsZFVzZXJSZWd1bGFyQW5jaG9yID0gdG8uaW5jbHVkZXMoJzonKVxuICB9XG5cbiAgaWYgKCFzaG91bGRVc2VyUmVndWxhckFuY2hvciAmJiB0eXBlb2YgdG8gPT09ICdvYmplY3QnKSB7XG4gICAgdG9VcmwgPSBgJHt0by5wYXRobmFtZSA/PyAnJ30ke3RvLmhhc2ggPyBgIyR7dG8uaGFzaH1gIDogJyd9JHtcbiAgICAgIHRvLnNlYXJjaCA/IGA/JHt0by5zZWFyY2h9YCA6ICcnXG4gICAgfWBcbiAgICBzaG91bGRVc2VyUmVndWxhckFuY2hvciA9IHRvLnBhdGhuYW1lPy5pbmNsdWRlcygnOicpXG4gIH1cblxuICBpZiAoc2hvdWxkVXNlclJlZ3VsYXJBbmNob3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgey4uLnJlc3R9IGRvd25sb2FkPXtkb3dubG9hZH0gaHJlZj17aHJlZiA/PyB0b1VybH0gcmVmPXtyZWZ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBwcmVmZXRjaD17cHJlZmV0Y2h9IHRvPXt0byA/PyBocmVmID8/ICcnfSB7Li4ucmVzdH0gcmVmPXtyZWZ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpbms+XG4gICAgKVxuICB9XG59KVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHNlY29uZHM6IG51bWJlcikge1xuICByZXR1cm4gZGF0ZUZucy5mb3JtYXQoZGF0ZUZucy5hZGRTZWNvbmRzKG5ldyBEYXRlKDApLCBzZWNvbmRzKSwgJ21tOnNzJylcbn1cblxuY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bTogbnVtYmVyKSA9PiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQobnVtKVxuXG5mdW5jdGlvbiBmb3JtYXRBYmJyZXZpYXRlZE51bWJlcihudW06IG51bWJlcikge1xuICByZXR1cm4gbnVtIDwgMV8wMDBcbiAgICA/IGZvcm1hdE51bWJlcihudW0pXG4gICAgOiBudW0gPCAxXzAwMF8wMDBcbiAgICA/IGAke2Zvcm1hdE51bWJlcihOdW1iZXIoKG51bSAvIDFfMDAwKS50b0ZpeGVkKDIpKSl9a2BcbiAgICA6IG51bSA8IDFfMDAwXzAwMF8wMDBcbiAgICA/IGAke2Zvcm1hdE51bWJlcihOdW1iZXIoKG51bSAvIDFfMDAwXzAwMCkudG9GaXhlZCgyKSkpfW1gXG4gICAgOiBudW0gPCAxXzAwMF8wMDBfMDAwXzAwMFxuICAgID8gYCR7Zm9ybWF0TnVtYmVyKE51bWJlcigobnVtIC8gMV8wMDBfMDAwXzAwMCkudG9GaXhlZCgyKSkpfWJgXG4gICAgOiAnYSBsb3QnXG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIHJldHVybiBkYXRlRm5zLmZvcm1hdChcbiAgICBkYXRlRm5zLmFkZChkYXRlRm5zLnBhcnNlSVNPKGRhdGVTdHJpbmcpLCB7XG4gICAgICBtaW51dGVzOiBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCksXG4gICAgfSksXG4gICAgJ1BQUCcsXG4gIClcbn1cblxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSByZXR1cm4gZXJyb3JcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIHJldHVybiAnVW5rbm93biBFcnJvcidcbn1cblxuZnVuY3Rpb24gZ2V0RXJyb3JTdGFjayhlcnJvcjogdW5rbm93bikge1xuICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykgcmV0dXJuIGVycm9yXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3Iuc3RhY2tcbiAgcmV0dXJuICdVbmtub3duIEVycm9yJ1xufVxuXG5mdW5jdGlvbiBnZXROb25OdWxsPFR5cGUgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBudWxsIHwgdW5kZWZpbmVkIHwgdW5rbm93bj4+KFxuICBvYmo6IFR5cGUsXG4pOiBOb25OdWxsUHJvcGVydGllczxUeXBlPiB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgYXNzZXJ0Tm9uTnVsbCh2YWwsIGBUaGUgdmFsdWUgb2YgJHtrZXl9IGlzIG51bGwgYnV0IGl0IHNob3VsZCBub3QgYmUuYClcbiAgfVxuICByZXR1cm4gb2JqIGFzIE5vbk51bGxQcm9wZXJ0aWVzPFR5cGU+XG59XG5cbmZ1bmN0aW9uIHR5cGVkQm9vbGVhbjxUPihcbiAgdmFsdWU6IFQsXG4pOiB2YWx1ZSBpcyBFeGNsdWRlPFQsICcnIHwgMCB8IGZhbHNlIHwgbnVsbCB8IHVuZGVmaW5lZD4ge1xuICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbn1cblxuZnVuY3Rpb24gYXNzZXJ0Tm9uTnVsbDxQb3NzaWJsZU51bGxUeXBlPihcbiAgcG9zc2libGVOdWxsOiBQb3NzaWJsZU51bGxUeXBlLFxuICBlcnJvck1lc3NhZ2U6IHN0cmluZyxcbik6IGFzc2VydHMgcG9zc2libGVOdWxsIGlzIEV4Y2x1ZGU8UG9zc2libGVOdWxsVHlwZSwgbnVsbCB8IHVuZGVmaW5lZD4ge1xuICBpZiAocG9zc2libGVOdWxsID09IG51bGwpIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpXG59XG5cbmZ1bmN0aW9uIGdldFJlcXVpcmVkRW52VmFyRnJvbU9iaihcbiAgb2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCB1bmRlZmluZWQ+LFxuICBrZXk6IHN0cmluZyxcbiAgZGV2VmFsdWU6IHN0cmluZyA9IGAke2tleX0tZGV2LXZhbHVlYCxcbikge1xuICBsZXQgdmFsdWUgPSBkZXZWYWx1ZVxuICBjb25zdCBlbnZWYWwgPSBvYmpba2V5XVxuICBpZiAoZW52VmFsKSB7XG4gICAgdmFsdWUgPSBlbnZWYWxcbiAgfSBlbHNlIGlmIChvYmouTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtrZXl9IGlzIGEgcmVxdWlyZWQgZW52IHZhcmlhYmxlYClcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWlyZWRTZXJ2ZXJFbnZWYXIoa2V5OiBzdHJpbmcsIGRldlZhbHVlPzogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRSZXF1aXJlZEVudlZhckZyb21PYmoocHJvY2Vzcy5lbnYsIGtleSwgZGV2VmFsdWUpXG59XG5cbi8vIGZ1bmN0aW9uIGdldFJlcXVpcmVkR2xvYmFsRW52VmFyKFxuLy8gICBrZXk6IGtleW9mIFJldHVyblR5cGU8dHlwZW9mIGdldEVudj4sXG4vLyAgIGRldlZhbHVlPzogc3RyaW5nLFxuLy8gKSB7XG4vLyAgIHJldHVybiBnZXRSZXF1aXJlZEVudlZhckZyb21PYmooRU5WLCBrZXksIGRldlZhbHVlKVxuLy8gfVxuXG5mdW5jdGlvbiBnZXREb21haW5VcmwocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBob3N0ID1cbiAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdYLUZvcndhcmRlZC1Ib3N0JykgPz8gcmVxdWVzdC5oZWFkZXJzLmdldCgnaG9zdCcpXG4gIGlmICghaG9zdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGRldGVybWluZSBkb21haW4gVVJMLicpXG4gIH1cbiAgY29uc3QgcHJvdG9jb2wgPSBob3N0LmluY2x1ZGVzKCdsb2NhbGhvc3QnKSA/ICdodHRwJyA6ICdodHRwcydcbiAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7aG9zdH1gXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2goczogc3RyaW5nKSB7XG4gIHJldHVybiBzLmVuZHNXaXRoKCcvJykgPyBzLnNsaWNlKDAsIC0xKSA6IHNcbn1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheVVybChyZXF1ZXN0SW5mbz86IHtvcmlnaW46IHN0cmluZzsgcGF0aDogc3RyaW5nfSkge1xuICByZXR1cm4gZ2V0VXJsKHJlcXVlc3RJbmZvKS5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLy8sICcnKVxufVxuXG5mdW5jdGlvbiBnZXRVcmwocmVxdWVzdEluZm8/OiB7b3JpZ2luOiBzdHJpbmc7IHBhdGg6IHN0cmluZ30pIHtcbiAgcmV0dXJuIHJlbW92ZVRyYWlsaW5nU2xhc2goXG4gICAgYCR7cmVxdWVzdEluZm8/Lm9yaWdpbiA/PyAnaHR0cHM6Ly9zdW5pbC1zYW11ZWwuY29tJ30ke1xuICAgICAgcmVxdWVzdEluZm8/LnBhdGggPz8gJydcbiAgICB9YCxcbiAgKVxufVxuXG5mdW5jdGlvbiB0b0Jhc2U2NChzdHJpbmc6IHN0cmluZykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyaW5nKS50b1N0cmluZygnYmFzZTY0JylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd2luZG93LmJ0b2Eoc3RyaW5nKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVzZVVwZGF0ZVF1ZXJ5U3RyaW5nVmFsdWVXaXRob3V0TmF2aWdhdGlvbihcbiAgcXVlcnlLZXk6IHN0cmluZyxcbiAgcXVlcnlWYWx1ZTogc3RyaW5nLFxuKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICBjb25zdCBvbGRRdWVyeSA9IGN1cnJlbnRTZWFyY2hQYXJhbXMuZ2V0KHF1ZXJ5S2V5KSA/PyAnJ1xuICAgIGlmIChxdWVyeVZhbHVlID09PSBvbGRRdWVyeSkgcmV0dXJuXG5cbiAgICBpZiAocXVlcnlWYWx1ZSkge1xuICAgICAgY3VycmVudFNlYXJjaFBhcmFtcy5zZXQocXVlcnlLZXksIHF1ZXJ5VmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRTZWFyY2hQYXJhbXMuZGVsZXRlKHF1ZXJ5S2V5KVxuICAgIH1cbiAgICBjb25zdCBuZXdVcmwgPSBbd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCBjdXJyZW50U2VhcmNoUGFyYW1zLnRvU3RyaW5nKCldXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAuam9pbignPycpXG4gICAgLy8gYWxyaWdodCwgbGV0J3MgdGFsayBhYm91dCB0aGlzLi4uXG4gICAgLy8gTm9ybWFsbHkgd2l0aCByZW1peCwgeW91J2QgdXBkYXRlIHRoZSBwYXJhbXMgdmlhIHVzZVNlYXJjaFBhcmFtcyBmcm9tIHJlYWN0LXJvdXRlci1kb21cbiAgICAvLyBhbmQgdXBkYXRpbmcgdGhlIHNlYXJjaCBwYXJhbXMgd2lsbCB0cmlnZ2VyIHRoZSBzZWFyY2ggdG8gdXBkYXRlIGZvciB5b3UuXG4gICAgLy8gSG93ZXZlciwgaXQgYWxzbyB0cmlnZ2VycyBhIG5hdmlnYXRpb24gdG8gdGhlIG5ldyB1cmwsIHdoaWNoIHdpbGwgdHJpZ2dlclxuICAgIC8vIHRoZSBsb2FkZXIgdG8gcnVuIHdoaWNoIHdlIGRvIG5vdCB3YW50IGJlY2F1c2UgYWxsIG91ciBkYXRhIGlzIGFscmVhZHlcbiAgICAvLyBvbiB0aGUgY2xpZW50IGFuZCB3ZSdyZSBqdXN0IGRvaW5nIGNsaWVudC1zaWRlIGZpbHRlcmluZyBvZiBkYXRhIHdlXG4gICAgLy8gYWxyZWFkeSBoYXZlLiBTbyB3ZSBtYW51YWxseSBjYWxsIGB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGVgIHRvIGF2b2lkXG4gICAgLy8gdGhlIHJvdXRlciBmcm9tIHRyaWdnZXJpbmcgdGhlIGxvYWRlci5cbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgJycsIG5ld1VybClcbiAgfSwgW3F1ZXJ5S2V5LCBxdWVyeVZhbHVlXSlcbn1cblxuZnVuY3Rpb24gZGVib3VuY2U8Q2FsbGJhY2sgZXh0ZW5kcyAoLi4uYXJnczogQXJyYXk8dW5rbm93bj4pID0+IHZvaWQ+KFxuICBmbjogQ2FsbGJhY2ssXG4gIGRlbGF5OiBudW1iZXIsXG4pIHtcbiAgbGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsXG4gIHJldHVybiAoLi4uYXJnczogUGFyYW1ldGVyczxDYWxsYmFjaz4pID0+IHtcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm4oLi4uYXJncylcbiAgICB9LCBkZWxheSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VEZWJvdW5jZTxDYWxsYmFjayBleHRlbmRzICguLi5hcmdzOiBBcnJheTx1bmtub3duPikgPT4gdW5rbm93bj4oXG4gIGNhbGxiYWNrOiBDYWxsYmFjayxcbiAgZGVsYXk6IG51bWJlcixcbikge1xuICBjb25zdCBjYWxsYmFja1JlZiA9IFJlYWN0LnVzZVJlZihjYWxsYmFjaylcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjYWxsYmFja1JlZi5jdXJyZW50ID0gY2FsbGJhY2tcbiAgfSlcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gZGVib3VuY2UoKC4uLmFyZ3MpID0+IGNhbGxiYWNrUmVmLmN1cnJlbnQoLi4uYXJncyksIGRlbGF5KSxcbiAgICBbZGVsYXldLFxuICApXG59XG5cbmNvbnN0IHJldXNlVXNlZnVsTG9hZGVySGVhZGVyczogSGVhZGVyc0Z1bmN0aW9uID0gKHtsb2FkZXJIZWFkZXJzfSkgPT4ge1xuICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICBjb25zdCB1c2VmdWxIZWFkZXJzID0gWydDYWNoZS1Db250cm9sJywgJ1ZhcnknLCAnU2VydmVyLVRpbWluZyddXG4gIGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiB1c2VmdWxIZWFkZXJzKSB7XG4gICAgaWYgKGxvYWRlckhlYWRlcnMuaGFzKGhlYWRlck5hbWUpKSB7XG4gICAgICBoZWFkZXJzLnNldChoZWFkZXJOYW1lLCBsb2FkZXJIZWFkZXJzLmdldChoZWFkZXJOYW1lKSEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhlYWRlcnNcbn1cblxuZnVuY3Rpb24gY2FsbEFsbDxBcmdzIGV4dGVuZHMgQXJyYXk8dW5rbm93bj4+KFxuICAuLi5mbnM6IEFycmF5PCgoLi4uYXJnczogQXJncykgPT4gdW5rbm93bikgfCB1bmRlZmluZWQ+XG4pIHtcbiAgcmV0dXJuICguLi5hcmdzOiBBcmdzKSA9PiBmbnMuZm9yRWFjaChmbiA9PiBmbj8uKC4uLmFyZ3MpKVxufVxuXG5mdW5jdGlvbiB1c2VEb3VibGVDaGVjaygpIHtcbiAgY29uc3QgW2RvdWJsZUNoZWNrLCBzZXREb3VibGVDaGVja10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBmdW5jdGlvbiBnZXRCdXR0b25Qcm9wcyhwcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snYnV0dG9uJ10pIHtcbiAgICBjb25zdCBvbkJsdXI6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snYnV0dG9uJ11bJ29uQmx1ciddID0gKCkgPT5cbiAgICAgIHNldERvdWJsZUNoZWNrKGZhbHNlKVxuXG4gICAgY29uc3Qgb25DbGljazogSlNYLkludHJpbnNpY0VsZW1lbnRzWydidXR0b24nXVsnb25DbGljayddID0gZG91YmxlQ2hlY2tcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHNldERvdWJsZUNoZWNrKHRydWUpXG4gICAgICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIG9uQmx1cjogY2FsbEFsbChvbkJsdXIsIHByb3BzPy5vbkJsdXIpLFxuICAgICAgb25DbGljazogY2FsbEFsbChvbkNsaWNrLCBwcm9wcz8ub25DbGljayksXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtkb3VibGVDaGVjaywgZ2V0QnV0dG9uUHJvcHN9XG59XG5cbmV4cG9ydCB7XG4gIGdldEF2YXRhcixcbiAgZ2V0QXZhdGFyRm9yVXNlcixcbiAgQW5jaG9yT3JMaW5rLFxuICBnZXRFcnJvck1lc3NhZ2UsXG4gIGdldEVycm9yU3RhY2ssXG4gIGdldE5vbk51bGwsXG4gIGFzc2VydE5vbk51bGwsXG4gIHVzZVVwZGF0ZVF1ZXJ5U3RyaW5nVmFsdWVXaXRob3V0TmF2aWdhdGlvbixcbiAgdXNlU1NSTGF5b3V0RWZmZWN0LFxuICB1c2VEb3VibGVDaGVjayxcbiAgdXNlRGVib3VuY2UsXG4gIHR5cGVkQm9vbGVhbixcbiAgZ2V0UmVxdWlyZWRTZXJ2ZXJFbnZWYXIsXG4gIC8vZ2V0UmVxdWlyZWRHbG9iYWxFbnZWYXIsXG4gIGdldERvbWFpblVybCxcbiAgZ2V0VXJsLFxuICBnZXREaXNwbGF5VXJsLFxuICB0b0Jhc2U2NCxcbiAgcmVtb3ZlVHJhaWxpbmdTbGFzaCxcbiAgcmV1c2VVc2VmdWxMb2FkZXJIZWFkZXJzLFxuXG4gIGZvcm1hdERhdGUsXG4gIGZvcm1hdFRpbWUsXG4gIGZvcm1hdE51bWJlcixcbiAgZm9ybWF0QWJicmV2aWF0ZWROdW1iZXIsXG59XG5leHBvcnQge2xpc3RpZnl9IGZyb20gJy4vbGlzdGlmeSdcbiIsICIvLyB0aGlzIGlzIG5lZWRlZCBieSB0aGluZ3MgdGhlIHJvb3QgbmVlZHMsIHNvIHRvIGF2b2lkIGNpcmN1bGFyIGRlcHMgd2UgaGF2ZSB0b1xuLy8gcHV0IGl0IGluIGl0cyBvd24gZmlsZSB3aGljaCBpcyBzaWxseSBJIGtub3cuLi5cblxuaW1wb3J0IHt1c2VNYXRjaExvYWRlckRhdGF9IGZyb20gJy4vcHJvdmlkZXJzJ1xuaW1wb3J0IHR5cGUge0xvYWRlckRhdGF9IGZyb20gJy4uL3Jvb3QnXG5pbXBvcnQge2hhbmRsZX0gZnJvbSAnLi4vcm9vdCdcblxuZXhwb3J0IGNvbnN0IHVzZVJvb3REYXRhID0gKCkgPT4gdXNlTWF0Y2hMb2FkZXJEYXRhPExvYWRlckRhdGE+KGhhbmRsZS5pZClcbmV4cG9ydCBmdW5jdGlvbiB1c2VVc2VyKCkge1xuICBjb25zdCB7dXNlcn0gPSB1c2VSb290RGF0YSgpXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKCdVc2VyIGlzIHJlcXVpcmVkIHdoZW4gdXNpbmcgdXNlVXNlcicpXG4gIHJldHVybiB1c2VyXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZU1hdGNoZXN9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUge1NWU0hhbmRsZX0gZnJvbSAnfi90eXBlcydcblxuZnVuY3Rpb24gY3JlYXRlU2ltcGxlQ29udGV4dDxDb250ZXh0VHlwZT4obmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IFN5bWJvbChgRGVmYXVsdCAke25hbWV9IGNvbnRleHQgdmFsdWVgKVxuICBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0VHlwZSB8IG51bGwgfCB0eXBlb2YgZGVmYXVsdFZhbHVlPihcbiAgICBkZWZhdWx0VmFsdWUsXG4gIClcbiAgQ29udGV4dC5kaXNwbGF5TmFtZSA9IG5hbWVcblxuICBmdW5jdGlvbiB1c2VWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dClcbiAgICBpZiAodmFsdWUgPT09IGRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2Uke25hbWV9IG11c3QgYmUgdXNlZCB3aXRoaW4gJHtuYW1lfVByb3ZpZGVyYClcbiAgICB9XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gdmFsdWUgaW4gJHtuYW1lfVByb3ZpZGVyIGNvbnRleHQuIElmIHRoZSB2YWx1ZSBpcyBvcHRpb25hbCBpbiB0aGlzIHNpdHVhdGlvbiwgdHJ5IHVzZU9wdGlvbmFsJHtuYW1lfSBpbnN0ZWFkIG9mIHVzZSR7bmFtZX1gLFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZU9wdGlvbmFsVmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpXG4gICAgaWYgKHZhbHVlID09PSBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlT3B0aW9uYWwke25hbWV9IG11c3QgYmUgdXNlZCB3aXRoaW4gJHtuYW1lfVByb3ZpZGVyYClcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByZXR1cm4ge1Byb3ZpZGVyOiBDb250ZXh0LlByb3ZpZGVyLCB1c2VWYWx1ZSwgdXNlT3B0aW9uYWxWYWx1ZX1cbn1cblxudHlwZSBDaGF0c0VwaXNvZGVVSVN0YXRlID0ge1xuICBzb3J0T3JkZXI6ICdkZXNjJyB8ICdhc2MnXG59XG5jb25zdCB7XG4gIFByb3ZpZGVyOiBDaGF0c0VwaXNvZGVVSVN0YXRlUHJvdmlkZXIsXG4gIHVzZVZhbHVlOiB1c2VDaGF0c0VwaXNvZGVVSVN0YXRlLFxufSA9IGNyZWF0ZVNpbXBsZUNvbnRleHQ8Q2hhdHNFcGlzb2RlVUlTdGF0ZT4oJ0NoYXRzRXBpc29kZVVJU3RhdGUnKVxuXG5mdW5jdGlvbiB1c2VNYXRjaExvYWRlckRhdGE8TG9hZGVyRGF0YT4oaGFuZGxlSWQ6IHN0cmluZykge1xuICBjb25zdCBtYXRjaGVzID0gdXNlTWF0Y2hlcygpXG4gIGNvbnN0IG1hdGNoID0gbWF0Y2hlcy5maW5kKFxuICAgICh7aGFuZGxlfSkgPT4gKGhhbmRsZSBhcyBTVlNIYW5kbGUgfCB1bmRlZmluZWQpPy5pZCA9PT0gaGFuZGxlSWQsXG4gIClcbiAgaWYgKCFtYXRjaCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gYWN0aXZlIHJvdXRlIGhhcyBhIGhhbmRsZSBJRCBvZiAke2hhbmRsZUlkfWApXG4gIH1cbiAgcmV0dXJuIG1hdGNoLmRhdGEgYXMgTG9hZGVyRGF0YVxufVxuZnVuY3Rpb24gdXNlT3B0aW9uYWxNYXRjaExvYWRlckRhdGE8TG9hZGVyRGF0YT4oaGFuZGxlSWQ6IHN0cmluZykge1xuICBjb25zdCBtYXRjaGVzID0gdXNlTWF0Y2hlcygpXG4gIHJldHVybiBtYXRjaGVzLmZpbmQoXG4gICAgKHtoYW5kbGV9KSA9PiAoaGFuZGxlIGFzIFNWU0hhbmRsZSB8IHVuZGVmaW5lZCk/LmlkID09PSBoYW5kbGVJZCxcbiAgKT8uZGF0YSBhcyBMb2FkZXJEYXRhIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVNpbXBsZUNvbnRleHQsXG4gIENoYXRzRXBpc29kZVVJU3RhdGVQcm92aWRlcixcbiAgdXNlQ2hhdHNFcGlzb2RlVUlTdGF0ZSxcbiAgdXNlTWF0Y2hMb2FkZXJEYXRhLFxuICB1c2VPcHRpb25hbE1hdGNoTG9hZGVyRGF0YSxcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG4gIHVzZUxvY2F0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7U3BhY2VyfSBmcm9tICcuL2NvbXBvbmVudHMvc3BhY2VyJ1xuaW1wb3J0IHR5cGUge0xpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHtcbiAgdXNlVGhlbWUsXG4gIFRoZW1lUHJvdmlkZXIsXG4gIE5vbkZsYXNoT2ZXcm9uZ1RoZW1lRWxzLFxuICBUaGVtZSxcbn0gZnJvbSAnLi91dGlscy90aGVtZS1wcm92aWRlcidcbmltcG9ydCB0YWlsd2luZFN0eWxlcyBmcm9tICd+L3N0eWxlcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgdmVuZG9yU3R5bGVzIGZyb20gJ34vc3R5bGVzL3ZlbmRvcnMuY3NzJ1xuaW1wb3J0IGFwcFN0eWxlcyBmcm9tICd+L3N0eWxlcy9hcHAuY3NzJ1xuaW1wb3J0IHByb3NlU3R5bGVzIGZyb20gJ34vc3R5bGVzL3Byb3NlLmNzcydcbi8vIGltcG9ydCBub1NjcmlwdFN0eWxlcyBmcm9tICcuL3N0eWxlcy9uby1zY3JpcHQuY3NzJ1xuaW1wb3J0IHtFcnJvclBhZ2V9IGZyb20gJy4vY29tcG9uZW50cy9lcnJvcnMnXG5pbXBvcnQgdHlwZSB7QXdhaXQsIFNWU0hhbmRsZSwgVXNlciB9IGZyb20gJ34vdHlwZXMnXG5pbXBvcnQge0Fycm93TGlua30gZnJvbSAnLi9jb21wb25lbnRzL2Fycm93LWJ1dHRvbidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZTogU1ZTSGFuZGxlICYge2lkOiBzdHJpbmd9ID0ge1xuICBpZDogJ3Jvb3QnLFxufVxuZW51bSBUaGVtZSB7XG4gIERBUksgPSAnZGFyaycsXG4gIExJR0hUID0gJ2xpZ2h0Jyxcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgYXM6ICdmb250JyxcbiAgICAgIGhyZWY6ICcvZm9udHMvTWF0dGVyLU1lZGl1bS53b2ZmMicsXG4gICAgICB0eXBlOiAnZm9udC93b2ZmMicsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgIGFzOiAnZm9udCcsXG4gICAgICBocmVmOiAnL2ZvbnRzL01hdHRlci1SZWd1bGFyLndvZmYyJyxcbiAgICAgIHR5cGU6ICdmb250L3dvZmYyJyxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgIGhyZWY6ICcvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmcnLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgcmVsOiAnaWNvbicsXG4gICAgLy8gICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAvLyAgIHNpemVzOiAnMzJ4MzInLFxuICAgIC8vICAgaHJlZjogJy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZycsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICByZWw6ICdpY29uJyxcbiAgICAvLyAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIC8vICAgc2l6ZXM6ICcxNngxNicsXG4gICAgLy8gICBocmVmOiAnL2Zhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAvLyB9LFxuICAgIC8vIHtyZWw6ICdtYW5pZmVzdCcsIGhyZWY6ICcvc2l0ZS53ZWJtYW5pZmVzdCd9LFxuICAgIHtyZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbyd9LFxuICAgIHtyZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogdmVuZG9yU3R5bGVzfSxcbiAgICB7cmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHRhaWx3aW5kU3R5bGVzfSxcbiAgICB7cmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHByb3NlU3R5bGVzfSxcbiAgICB7cmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGFwcFN0eWxlc30sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5cbmV4cG9ydCAgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbdGhlbWVdID0gdXNlVGhlbWUoKTtcbiAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKlwiLCB0aGVtZSlcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiAgIGNsYXNzTmFtZT17Y2xzeCh0aGVtZSwgYHNldC1jb2xvci10ZWFtLWN1cnJlbnQtYmx1ZWApfSA+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3BvbHlmaWxsLmlvL3YzL3BvbHlmaWxsLm1pbi5qcz9mZWF0dXJlcz1JbnRsJTJDSW50bC5MaXN0Rm9ybWF0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImRhcms6YmctZ3JheS05MDAgYmctZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTcGFjZXIgc2l6ZT1cImJhc2VcIiAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgey8qIDxzY3JpcHRcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBgd2luZG93LkVOViA9ICR7SlNPTi5zdHJpbmdpZnkoZGF0YS5FTlYpfTtgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+ICovfVxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBXaXRoUHJvdmlkZXJzKCkge1xuIC8vIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KClcbiAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHNwZWNpZmllZFRoZW1lPXtUaGVtZS5EQVJLfT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cblxuXG5cblxuXG5cblxuLy8gYmVzdCBlZmZvcnQsIGxhc3QgZGl0Y2ggZXJyb3IgYm91bmRhcnkuIFRoaXMgc2hvdWxkIG9ubHkgY2F0Y2ggcm9vdCBlcnJvcnNcbi8vIGFsbCBvdGhlciBlcnJvcnMgc2hvdWxkIGJlIGNhdWdodCBieSB0aGUgaW5kZXggcm91dGUgd2hpY2ggd2lsbCBpbmNsdWRlXG4vLyB0aGUgZm9vdGVyIGFuZCBzdHVmZiwgd2hpY2ggaXMgbXVjaCBiZXR0ZXIuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7ZXJyb3J9OiB7ZXJyb3I6IEVycm9yfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJkYXJrXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPHRpdGxlPk9oIG5vLi4uPC90aXRsZT5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJkYXJrOmJnLWdyYXktOTAwIGJnLXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwXCI+XG4gICAgICAgIDxFcnJvclBhZ2VcbiAgICAgICAgICBoZXJvUHJvcHM9e3tcbiAgICAgICAgICAgIHRpdGxlOiAnNTAwIC0gT2ggbm8sIHNvbWV0aGluZyBkaWQgbm90IGdvIHdlbGwuJyxcbiAgICAgICAgICAgIHN1YnRpdGxlOiBgXCIke2xvY2F0aW9uLnBhdGhuYW1lfVwiIGlzIGN1cnJlbnRseSBub3Qgd29ya2luZy4gU28gc29ycnkuYCxcbiAgICAgICAgICAgIC8vaW1hZ2U6IDxHcmltbWFjaW5nIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIiBhc3BlY3RSYXRpbz1cIjM6NFwiIC8+LFxuICAgICAgICAgICAgYWN0aW9uOiA8QXJyb3dMaW5rIGhyZWY9XCIvXCI+R28gaG9tZTwvQXJyb3dMaW5rPixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc29sZS5lcnJvcignQ2F0Y2hCb3VuZGFyeScsIGNhdWdodClcbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJkYXJrXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5PaCBuby4uLjwvdGl0bGU+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiZGFyazpiZy1ncmF5LTkwMCBiZy13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICAgIDxFcnJvclBhZ2VcbiAgICAgICAgICAgIGhlcm9Qcm9wcz17e1xuICAgICAgICAgICAgICB0aXRsZTogXCI0MDQgLSBPaCBubywgeW91IGZvdW5kIGEgcGFnZSB0aGF0J3MgbWlzc2luZyBzdHVmZi5cIixcbiAgICAgICAgICAgICAgc3VidGl0bGU6IGBcIiR7bG9jYXRpb24ucGF0aG5hbWV9XCIgaXMgbm90IGEgcGFnZSBvbiBzdW5pbC1zYW11ZWwuY29tLiBTbyBzb3JyeS5gLFxuICAgICAgICAgICAgIC8vIGltYWdlOiAoXG4gICAgICAgICAgIC8vICAgICA8TWlzc2luZ1NvbWV0aGluZyBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCIgYXNwZWN0UmF0aW89XCIzOjRcIiAvPlxuICAgICAgICAgICAgLy8gICksXG4gICAgICAgICAgICAgIGFjdGlvbjogPEFycm93TGluayBocmVmPVwiL1wiPkdvIGhvbWU8L0Fycm93TGluaz4sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBlcnJvcjogJHtjYXVnaHQuc3RhdHVzfWApXG59IiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7SDJ9IGZyb20gJy4uL3R5cG9ncmFwaHknXG5pbXBvcnQge0Fycm93TGlua30gZnJvbSAnLi4vYXJyb3ctYnV0dG9uJ1xuaW1wb3J0IHtHcmlkfSBmcm9tICcuLi9ncmlkJ1xuXG5pbnRlcmZhY2UgSGVhZGVyU2VjdGlvblByb3BzIHtcbiAgY3RhVXJsPzogc3RyaW5nXG4gIGN0YT86IHN0cmluZ1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlXG4gIHRpdGxlOiBzdHJpbmdcbiAgc3ViVGl0bGU6IHN0cmluZ1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gSGVhZGVyU2VjdGlvbih7XG4gIGN0YVVybCxcbiAgY3RhLFxuICB0aXRsZSxcbiAgc3ViVGl0bGUsXG4gIGNsYXNzTmFtZSxcbiAgYXMsXG59OiBIZWFkZXJTZWN0aW9uUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBhcz17YXN9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgJ2ZsZXggZmxleC1jb2wgY29sLXNwYW4tZnVsbCBzcGFjZS15LTEwIGxnOmZsZXgtcm93IGxnOml0ZW1zLWVuZCBsZzpqdXN0aWZ5LWJldHdlZW4gbGc6c3BhY2UteS0wJyxcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGxnOnNwYWNlLXktMFwiPlxuICAgICAgICAgIDxIMj57dGl0bGV9PC9IMj5cbiAgICAgICAgICA8SDIgdmFyaWFudD1cInNlY29uZGFyeVwiIGFzPVwicFwiPlxuICAgICAgICAgICAge3N1YlRpdGxlfVxuICAgICAgICAgIDwvSDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtjdGEgJiYgY3RhVXJsID8gKFxuICAgICAgICAgIDxBcnJvd0xpbmsgdG89e2N0YVVybH0gZGlyZWN0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHtjdGF9XG4gICAgICAgICAgPC9BcnJvd0xpbms+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9HcmlkPlxuICApXG59XG5cbmV4cG9ydCB7SGVhZGVyU2VjdGlvbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFJlbWl4PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFscy9ibG9nXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDE1bSBRdWlja3N0YXJ0IEJsb2cgVHV0b3JpYWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvam9rZXNcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVlcCBEaXZlIEpva2VzIEFwcCBUdXRvcmlhbFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgUmVtaXggRG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFB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
