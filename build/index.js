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
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  handle: () => handle2,
  meta: () => meta
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/components/errors.tsx
init_react();
var React17 = __toModule(require("react"));
var import_error_stack_parser = __toModule(require("error-stack-parser"));
var import_clsx11 = __toModule(require("clsx"));

// app/components/sections/hero-section.tsx
init_react();
var React6 = __toModule(require("react"));
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
var React2 = __toModule(require("react"));
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
  return /* @__PURE__ */ React2.createElement(Tag, __spreadValues({
    className: (0, import_clsx.default)(fontSize[size], titleColors[variant], className)
  }, rest));
}
function H2(props) {
  return /* @__PURE__ */ React2.createElement(Title, __spreadProps(__spreadValues({}, props), {
    size: "h2"
  }));
}
function H3(props) {
  return /* @__PURE__ */ React2.createElement(Title, __spreadProps(__spreadValues({}, props), {
    size: "h3"
  }));
}
function H6(props) {
  return /* @__PURE__ */ React2.createElement(Title, __spreadProps(__spreadValues({}, props), {
    size: "h6"
  }));
}

// app/components/arrow-button.tsx
init_react();
var React4 = __toModule(require("react"));
var import_clsx3 = __toModule(require("clsx"));
var import_remix2 = __toModule(require_remix());
var import_framer_motion = __toModule(require("framer-motion"));

// app/components/icons/arrow-icon.tsx
init_react();
var import_clsx2 = __toModule(require("clsx"));
var React3 = __toModule(require("react"));
var rotationMap = {
  up: "rotate-180",
  right: "-rotate-90",
  down: "rotate-0",
  left: "rotate-90",
  "top-right": "-rotate-135"
};
function ArrowIcon({ direction, size = 32, className }) {
  return /* @__PURE__ */ React3.createElement("svg", {
    className: (0, import_clsx2.default)(className, "transform", rotationMap[direction]),
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React3.createElement("path", {
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
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, children && (direction === "right" || direction === "up" || direction === "top-right") ? /* @__PURE__ */ React4.createElement("span", {
    className: "mr-8 text-xl font-medium"
  }, children) : null, /* @__PURE__ */ React4.createElement("div", {
    className: "relative inline-flex flex-none items-center justify-center p-1 w-14 h-14"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "absolute text-gray-200 dark:text-gray-600"
  }, /* @__PURE__ */ React4.createElement("svg", {
    width: "60",
    height: "60"
  }, /* @__PURE__ */ React4.createElement("circle", {
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "transparent",
    r: "28",
    cx: "30",
    cy: "30"
  }), /* @__PURE__ */ React4.createElement(import_framer_motion.motion.circle, {
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
  }))), /* @__PURE__ */ React4.createElement(import_framer_motion.motion.span, {
    transition: shouldReduceMotion ? { duration: 0 } : {},
    variants: shouldReduceMotion ? {} : arrowVariants[direction]
  }, /* @__PURE__ */ React4.createElement(ArrowIcon, {
    direction
  }))), children && (direction === "left" || direction === "down") ? /* @__PURE__ */ React4.createElement("span", {
    className: "ml-8 text-xl font-medium"
  }, children) : null);
}
var MotionLink = (0, import_framer_motion.motion)(import_remix2.Link);
function ArrowLink(_a) {
  var _b = _a, { to, href } = _b, props = __objRest(_b, ["to", "href"]);
  const [ref, state] = useElementState();
  const shouldReduceMotion = (0, import_framer_motion.useReducedMotion)();
  if (href) {
    return /* @__PURE__ */ React4.createElement(import_framer_motion.motion.a, __spreadProps(__spreadValues({
      href
    }, getBaseProps(props)), {
      ref,
      animate: state,
      transition: shouldReduceMotion ? { duration: 0 } : {}
    }), /* @__PURE__ */ React4.createElement(ArrowButtonContent, __spreadValues({}, props)));
  } else if (to) {
    return /* @__PURE__ */ React4.createElement(MotionLink, __spreadProps(__spreadValues({
      to
    }, getBaseProps(props)), {
      ref,
      animate: state,
      transition: shouldReduceMotion ? { duration: 0 } : {}
    }), /* @__PURE__ */ React4.createElement(ArrowButtonContent, __spreadValues({}, props)));
  }
  throw new Error("Must provide either to or href to ArrowLink");
}

// app/components/grid.tsx
init_react();
var React5 = __toModule(require("react"));
var import_clsx4 = __toModule(require("clsx"));
var Grid = React5.forwardRef(function Grid2({ children, className, as: Tag = "div", featured, nested, rowGap }, ref) {
  return /* @__PURE__ */ React5.createElement(Tag, {
    ref,
    className: (0, import_clsx4.default)("relative", {
      "mx-10vw": !nested,
      "w-full": nested,
      "py-10 md:py-24 lg:pb-40 lg:pt-36": featured
    })
  }, featured ? /* @__PURE__ */ React5.createElement("div", {
    className: "absolute inset-0 -mx-5vw"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "bg-secondary mx-auto w-full max-w-8xl h-full rounded-lg"
  })) : null, /* @__PURE__ */ React5.createElement("div", {
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
  const hasImage = Boolean(image ?? imageProps ?? imageBuilder);
  const shouldReduceMotion = (0, import_framer_motion2.useReducedMotion)();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return /* @__PURE__ */ React6.createElement(Grid, {
    as,
    className: (0, import_clsx5.default)("lg:min-h-[40rem] lg: mb-24 pt-24 h-auto lg:pb-12", {
      "lg:mb-64": arrowLabel,
      "lg:mb-0": !arrowLabel
    })
  }, hasImage ? /* @__PURE__ */ React6.createElement("div", {
    className: (0, import_clsx5.default)("col-span-full mb-12 lg:mb-0", {
      "lg:col-start-7 lg:col-span-5 px-10": imageSize === "medium",
      "lg:col-start-6 lg:col-span-6 pl-10 flex items-start justify-end": imageSize === "large",
      "lg:col-start-6 lg:col-span-7 lg:px-0 lg:-mt-24 lg:-mr-5vw flex items-center justify-center": imageSize === "giant"
    })
  }, imageProps ? /* @__PURE__ */ React6.createElement(import_framer_motion2.motion.img, __spreadProps(__spreadValues({}, imageProps), {
    className: (0, import_clsx5.default)("w-full h-auto object-contain", {
      "max-h-50vh": imageSize === "medium",
      "max-h-75vh": imageSize === "giant"
    }, imageProps.className),
    initial: { scale: shouldReduceMotion ? 1 : 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.75 }
  })) : imageBuilder ? /* @__PURE__ */ React6.createElement(import_framer_motion2.motion.img, __spreadProps(__spreadValues({
    className: (0, import_clsx5.default)("w-full h-auto object-contain", {
      "max-h-50vh": imageSize === "medium",
      "max-h-75vh": imageSize === "giant"
    })
  }, getHeroImageProps(imageBuilder)), {
    initial: { scale: shouldReduceMotion ? 1 : 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.75 }
  })) : image) : null, /* @__PURE__ */ React6.createElement("div", {
    className: (0, import_clsx5.default)("col-span-full pt-6 lg:flex lg:flex-col lg:col-start-1 lg:row-start-1 lg:h-full", {
      "lg:col-span-5": hasImage,
      "lg:col-span-7": !hasImage
    })
  }, /* @__PURE__ */ React6.createElement(import_framer_motion2.motion.div, {
    className: "flex flex-auto flex-col",
    initial: "initial",
    animate: "visible",
    variants: {
      initial: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    }
  }, /* @__PURE__ */ React6.createElement(import_framer_motion2.motion.div, {
    variants: childVariants
  }, /* @__PURE__ */ React6.createElement(H2, {
    as: "h2"
  }, title)), subtitle ? /* @__PURE__ */ React6.createElement(import_framer_motion2.motion.div, {
    variants: childVariants
  }, /* @__PURE__ */ React6.createElement(H2, {
    as: "p",
    variant: "secondary",
    className: "mt-3"
  }, subtitle)) : null, action ? /* @__PURE__ */ React6.createElement(import_framer_motion2.motion.div, {
    variants: childVariants,
    className: "flex flex-col mt-14 space-y-4"
  }, action) : null), arrowUrl ? /* @__PURE__ */ React6.createElement(import_framer_motion2.motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 1 },
    className: "hidden pt-12 lg:block"
  }, /* @__PURE__ */ React6.createElement(ArrowLink, {
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
var import_clsx10 = __toModule(require("clsx"));
var React16 = __toModule(require("react"));

// app/components/article-card.tsx
init_react();
var React13 = __toModule(require("react"));
var import_remix5 = __toModule(require_remix());
var import_clsx8 = __toModule(require("clsx"));
var import_format = __toModule(require("date-fns/format"));
var import_parseISO = __toModule(require("date-fns/parseISO"));

// app/components/clipboard-copy-button.tsx
init_react();
var import_clsx6 = __toModule(require("clsx"));
var React9 = __toModule(require("react"));

// app/components/icons/check-icon.tsx
init_react();
var React7 = __toModule(require("react"));
function CheckIcon() {
  return /* @__PURE__ */ React7.createElement("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React7.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
  }));
}

// app/components/icons/copy-icon.tsx
init_react();
var React8 = __toModule(require("react"));
function CopyIcon() {
  return /* @__PURE__ */ React8.createElement("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React8.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
  }), /* @__PURE__ */ React8.createElement("rect", {
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
  const [state, setState] = React9.useState(State.Idle);
  React9.useEffect(() => {
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
  return /* @__PURE__ */ React9.createElement("button", {
    onClick: () => setState(State.Copy),
    className: (0, import_clsx6.default)("p-3 text-black whitespace-nowrap text-lg font-medium bg-white rounded-lg focus:outline-none shadow hover:shadow-md group-hover:opacity-100 peer-hover:opacity-100 hover:opacity-100 peer-focus:opacity-100 focus:opacity-100 transition focus:ring-4 hover:ring-4 ring-team-current lg:opacity-0", { "lg:px-8 lg:py-4": variant === "responsive" }, className)
  }, /* @__PURE__ */ React9.createElement("span", {
    className: (0, import_clsx6.default)("hidden", { "lg:inline": variant === "responsive" })
  }, state === State.Copied ? "Copied to clipboard" : "Click to copy url"), /* @__PURE__ */ React9.createElement("span", {
    className: (0, import_clsx6.default)("inline", { "lg:hidden": variant === "responsive" })
  }, state === State.Copied ? /* @__PURE__ */ React9.createElement(CheckIcon, null) : /* @__PURE__ */ React9.createElement(CopyIcon, null)));
}

// app/components/blurrable-image.tsx
init_react();
var React11 = __toModule(require("react"));
var import_clsx7 = __toModule(require("clsx"));

// app/utils/misc.tsx
init_react();
var React10 = __toModule(require("react"));
var import_remix3 = __toModule(require_remix());
var dateFns = __toModule(require("date-fns"));
var import_md5_hash = __toModule(require("md5-hash"));
var useSSRLayoutEffect = typeof window === "undefined" ? () => {
} : React10.useLayoutEffect;
var AnchorOrLink = React10.forwardRef(function AnchorOrLink2(props, ref) {
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
    return /* @__PURE__ */ React10.createElement("a", __spreadProps(__spreadValues({}, rest), {
      download,
      href: href ?? toUrl,
      ref
    }), children);
  } else {
    return /* @__PURE__ */ React10.createElement(import_remix3.Link, __spreadProps(__spreadValues({
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
  const [visible, setVisible] = React11.useState(false);
  const jsImgElRef = React11.useRef(null);
  useSSRLayoutEffect(() => {
    var _a2;
    if ((_a2 = jsImgElRef.current) == null ? void 0 : _a2.complete)
      setVisible(true);
  }, []);
  React11.useEffect(() => {
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
  const jsImgEl = React11.cloneElement(img, {
    ref: jsImgElRef,
    className: (0, import_clsx7.default)(img.props.className, "transition-opacity", {
      "opacity-0": !visible
    })
  });
  return /* @__PURE__ */ React11.createElement("div", __spreadValues({}, rest), blurDataUrl ? /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement("img", {
    key: blurDataUrl,
    src: blurDataUrl,
    className: img.props.className,
    alt: img.props.alt
  }), /* @__PURE__ */ React11.createElement("div", {
    className: (0, import_clsx7.default)(img.props.className, "backdrop-blur-xl")
  })) : null, jsImgEl, /* @__PURE__ */ React11.createElement("noscript", null, img));
}

// app/utils/use-root-data.ts
init_react();

// app/utils/providers.tsx
init_react();
var React12 = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());
function createSimpleContext(name) {
  const defaultValue = Symbol(`Default ${name} context value`);
  const Context = React12.createContext(defaultValue);
  Context.displayName = name;
  function useValue() {
    const value = React12.useContext(Context);
    if (value === defaultValue) {
      throw new Error(`use${name} must be used within ${name}Provider`);
    }
    if (!value) {
      throw new Error(`No value in ${name}Provider context. If the value is optional in this situation, try useOptional${name} instead of use${name}`);
    }
    return value;
  }
  function useOptionalValue() {
    const value = React12.useContext(Context);
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
  const matches = (0, import_remix4.useMatches)();
  const match = matches.find(({ handle: handle3 }) => (handle3 == null ? void 0 : handle3.id) === handleId);
  if (!match) {
    throw new Error(`No active route has a handle ID of ${handleId}`);
  }
  return match.data;
}

// app/root.tsx
init_react();
var handle = {
  id: "root"
};

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
  return /* @__PURE__ */ React13.createElement("div", {
    className: (0, import_clsx8.default)("relative w-full", leadingTeam ? `set-color-team-current-${leadingTeam.toLowerCase()}` : null)
  }, /* @__PURE__ */ React13.createElement(import_remix5.Link, {
    prefetch: "intent",
    className: "group peer relative block w-full focus:outline-none",
    to: `/blog/${slug}`
  }, bannerCloudinaryId ? /* @__PURE__ */ React13.createElement(BlurrableImage, {
    key: bannerCloudinaryId,
    blurDataUrl: bannerBlurDataUrl,
    className: "aspect-h-4 aspect-w-3 rounded-lg"
  }) : /* @__PURE__ */ React13.createElement("div", {
    className: "aspect-h-4 aspect-w-3"
  }, /* @__PURE__ */ React13.createElement("div", {
    className: "focus-ring w-full rounded-lg transition"
  })), /* @__PURE__ */ React13.createElement("div", {
    className: "mt-8 text-blueGray-500 text-xl font-medium"
  }, (0, import_format.default)((0, import_parseISO.default)(date), "PPP"), " \u2014 ", (readTime == null ? void 0 : readTime.text) ?? "quick read"), /* @__PURE__ */ React13.createElement(H3, {
    as: "div",
    className: "mt-4"
  }, title)), leadingTeam ? /* @__PURE__ */ React13.createElement("div", {
    className: "absolute z-10 right-6 top-6 p-1 w-4 h-4 bg-team-current rounded-full lg:left-6"
  }) : null, /* @__PURE__ */ React13.createElement(ClipboardCopyButton, {
    value: permalink,
    className: "absolute z-10 left-6 top-6"
  }));
}

// app/components/sections/header-section.tsx
init_react();
var React14 = __toModule(require("react"));
var import_clsx9 = __toModule(require("clsx"));
function HeaderSection({
  ctaUrl,
  cta,
  title,
  subTitle,
  className,
  as
}) {
  return /* @__PURE__ */ React14.createElement(Grid, {
    as
  }, /* @__PURE__ */ React14.createElement("div", {
    className: (0, import_clsx9.default)("flex flex-col col-span-full space-y-10 lg:flex-row lg:items-end lg:justify-between lg:space-y-0", className)
  }, /* @__PURE__ */ React14.createElement("div", {
    className: "space-y-2 lg:space-y-0"
  }, /* @__PURE__ */ React14.createElement(H2, null, title), /* @__PURE__ */ React14.createElement(H2, {
    variant: "secondary",
    as: "p"
  }, subTitle)), cta && ctaUrl ? /* @__PURE__ */ React14.createElement(ArrowLink, {
    to: ctaUrl,
    direction: "right"
  }, cta) : null));
}

// app/components/spacer.tsx
init_react();
var React15 = __toModule(require("react"));
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
  return /* @__PURE__ */ React15.createElement("div", {
    className: `${className} ${spacerSizes[size]}`
  });
}

// app/components/sections/blog-section.tsx
function BlogSection({
  articles,
  title,
  description,
  showArrowButton = true
}) {
  return /* @__PURE__ */ React16.createElement(React16.Fragment, null, /* @__PURE__ */ React16.createElement(HeaderSection, {
    title,
    subTitle: description,
    cta: showArrowButton ? "See the full blog" : void 0,
    ctaUrl: "/blog"
  }), /* @__PURE__ */ React16.createElement(Spacer, {
    size: "2xs"
  }), /* @__PURE__ */ React16.createElement(Grid, {
    className: "gap-y-16"
  }, articles.slice(0, 3).map((article, idx) => /* @__PURE__ */ React16.createElement("div", {
    key: article.slug,
    className: (0, import_clsx10.default)("col-span-4", {
      "hidden lg:block": idx >= 2
    })
  }, /* @__PURE__ */ React16.createElement(ArticleCard, {
    article
  })))));
}

// app/components/errors.tsx
function RedBox({ error }) {
  const [isVisible, setIsVisible] = React17.useState(true);
  const frames = import_error_stack_parser.default.parse(error);
  return /* @__PURE__ */ React17.createElement("div", {
    className: (0, import_clsx11.default)("fixed z-10 inset-0 flex items-center justify-center transition", {
      "opacity-0 pointer-events-none": !isVisible
    })
  }, /* @__PURE__ */ React17.createElement("button", {
    className: "absolute inset-0 block w-full h-full bg-black opacity-75",
    onClick: () => setIsVisible(false)
  }), /* @__PURE__ */ React17.createElement("div", {
    className: "border-lg text-primary relative mx-5vw my-16 p-12 max-h-75vh bg-red-500 rounded-lg overflow-y-auto"
  }, /* @__PURE__ */ React17.createElement(H2, null, error.message), /* @__PURE__ */ React17.createElement("div", null, frames.map((frame) => /* @__PURE__ */ React17.createElement("div", {
    key: [frame.fileName, frame.lineNumber, frame.columnNumber].join("-"),
    className: "pt-4"
  }, /* @__PURE__ */ React17.createElement(H6, {
    as: "div",
    className: "pt-2"
  }, frame.functionName), /* @__PURE__ */ React17.createElement("div", {
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
  return /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement("noscript", null, /* @__PURE__ */ React17.createElement("div", {
    style: {
      backgroundColor: "black",
      color: "white",
      padding: 30
    }
  }, /* @__PURE__ */ React17.createElement("h1", {
    style: { fontSize: "2em" }
  }, heroProps.title), /* @__PURE__ */ React17.createElement("p", {
    style: { fontSize: "1.5em" }
  }, heroProps.subtitle), /* @__PURE__ */ React17.createElement("small", null, "Also, this site works much better with JavaScript enabled..."))), /* @__PURE__ */ React17.createElement("main", {
    className: "relative"
  }, error && true ? /* @__PURE__ */ React17.createElement(RedBox, {
    error
  }) : null, /* @__PURE__ */ React17.createElement(HeroSection, __spreadValues({}, heroProps)), (articles == null ? void 0 : articles.length) ? /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement("div", {
    id: "articles"
  }), /* @__PURE__ */ React17.createElement(BlogSection, {
    articles,
    title: "Looking for something to read?",
    description: "Have a look at these articles."
  })) : null));
}

// route-module:/Users/sunilsamuel/GIT/sunilsamuel-site/app/root.tsx
var handle2 = {
  id: "root"
};
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix6.Meta, null), /* @__PURE__ */ React.createElement(import_remix6.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null), /* @__PURE__ */ React.createElement(import_remix6.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix6.Scripts, null), /* @__PURE__ */ React.createElement(import_remix6.LiveReload, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  const location = (0, import_remix6.useLocation)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "dark"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no..."), /* @__PURE__ */ React.createElement(import_remix6.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "dark:bg-gray-900 bg-white transition duration-500"
  }, /* @__PURE__ */ React.createElement(ErrorPage, {
    heroProps: {
      title: "500 - Oh no, something did not go well.",
      subtitle: `"${location.pathname}" is currently not working. So sorry.`,
      action: /* @__PURE__ */ React.createElement(ArrowLink, {
        href: "/"
      }, "Go home")
    }
  }), /* @__PURE__ */ React.createElement(import_remix6.Scripts, null)));
}

// route-module:/Users/sunilsamuel/GIT/sunilsamuel-site/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zdW5pbHNhbXVlbC9HSVQvc3VuaWxzYW11ZWwtc2l0ZS9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZXJyb3JzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLXNlY3Rpb24udHN4IiwgIi4uL2FwcC9pbWFnZXMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3R5cG9ncmFwaHkudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Fycm93LWJ1dHRvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvYXJyb3ctaWNvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaG9va3MvdXNlLWVsZW1lbnQtc3RhdGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2dyaWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1jYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jbGlwYm9hcmQtY29weS1idXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2ljb25zL2NoZWNrLWljb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2ljb25zL2NvcHktaWNvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYmx1cnJhYmxlLWltYWdlLnRzeCIsICIuLi9hcHAvdXRpbHMvbWlzYy50c3giLCAiLi4vYXBwL3V0aWxzL3VzZS1yb290LWRhdGEudHMiLCAiLi4vYXBwL3V0aWxzL3Byb3ZpZGVycy50c3giLCAiLi4vYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NlY3Rpb25zL2hlYWRlci1zZWN0aW9uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zcGFjZXIudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvc3VuaWxzYW11ZWwvR0lUL3N1bmlsc2FtdWVsLXNpdGUvYXBwL3JvdXRlcy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9zdW5pbHNhbXVlbC9HSVQvc3VuaWxzYW11ZWwtc2l0ZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc3VuaWxzYW11ZWwvR0lUL3N1bmlsc2FtdWVsLXNpdGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9zdW5pbHNhbXVlbC9HSVQvc3VuaWxzYW11ZWwtc2l0ZS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvY2F0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHtMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIEhlYWRlcnNGdW5jdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge0Vycm9yUGFnZX0gZnJvbSAnLi9jb21wb25lbnRzL2Vycm9ycydcbmltcG9ydCB0eXBlIHtBd2FpdCwgU1ZTSGFuZGxlLCBVc2VyfSBmcm9tICd+L3R5cGVzJ1xuaW1wb3J0IHtBcnJvd0xpbmt9IGZyb20gJy4vY29tcG9uZW50cy9hcnJvdy1idXR0b24nXG5cbmV4cG9ydCBjb25zdCBoYW5kbGU6IFNWU0hhbmRsZSAmIHtpZDogc3RyaW5nfSA9IHtcbiAgaWQ6ICdyb290Jyxcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cblxuXG5cblxuXG5cblxuXG4vLyBiZXN0IGVmZm9ydCwgbGFzdCBkaXRjaCBlcnJvciBib3VuZGFyeS4gVGhpcyBzaG91bGQgb25seSBjYXRjaCByb290IGVycm9yc1xuLy8gYWxsIG90aGVyIGVycm9ycyBzaG91bGQgYmUgY2F1Z2h0IGJ5IHRoZSBpbmRleCByb3V0ZSB3aGljaCB3aWxsIGluY2x1ZGVcbi8vIHRoZSBmb290ZXIgYW5kIHN0dWZmLCB3aGljaCBpcyBtdWNoIGJldHRlci5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHtlcnJvcn06IHtlcnJvcjogRXJyb3J9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImRhcmtcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+T2ggbm8uLi48L3RpdGxlPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImRhcms6YmctZ3JheS05MDAgYmctd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIj5cbiAgICAgICAgPEVycm9yUGFnZVxuICAgICAgICAgIGhlcm9Qcm9wcz17e1xuICAgICAgICAgICAgdGl0bGU6ICc1MDAgLSBPaCBubywgc29tZXRoaW5nIGRpZCBub3QgZ28gd2VsbC4nLFxuICAgICAgICAgICAgc3VidGl0bGU6IGBcIiR7bG9jYXRpb24ucGF0aG5hbWV9XCIgaXMgY3VycmVudGx5IG5vdCB3b3JraW5nLiBTbyBzb3JyeS5gLFxuICAgICAgICAgICAgLy9pbWFnZTogPEdyaW1tYWNpbmcgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiIGFzcGVjdFJhdGlvPVwiMzo0XCIgLz4sXG4gICAgICAgICAgICBhY3Rpb246IDxBcnJvd0xpbmsgaHJlZj1cIi9cIj5HbyBob21lPC9BcnJvd0xpbms+LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59IiwgImltcG9ydCB7dXNlTWF0Y2hlc30gZnJvbSAncmVtaXgnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBlcnJvclN0YWNrIGZyb20gJ2Vycm9yLXN0YWNrLXBhcnNlcidcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgdHlwZSB7TWR4TGlzdEl0ZW19IGZyb20gJ34vdHlwZXMnXG5pbXBvcnQge0hlcm9TZWN0aW9ufSBmcm9tICcuL3NlY3Rpb25zL2hlcm8tc2VjdGlvbidcbmltcG9ydCB0eXBlIHtIZXJvU2VjdGlvblByb3BzfSBmcm9tICcuL3NlY3Rpb25zL2hlcm8tc2VjdGlvbidcbmltcG9ydCB7QmxvZ1NlY3Rpb259IGZyb20gJy4vc2VjdGlvbnMvYmxvZy1zZWN0aW9uJ1xuaW1wb3J0IHtIMiwgSDZ9IGZyb20gJy4vdHlwb2dyYXBoeSdcbi8vIGltcG9ydCB7R3JpbW1hY2luZywgTWlzc2luZ1NvbWV0aGluZ30gZnJvbSAnLi9raWZzJ1xuXG5mdW5jdGlvbiBSZWRCb3goe2Vycm9yfToge2Vycm9yOiBFcnJvcn0pIHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IGZyYW1lcyA9IGVycm9yU3RhY2sucGFyc2UoZXJyb3IpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICdmaXhlZCB6LTEwIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbicsXG4gICAgICAgIHtcbiAgICAgICAgICAnb3BhY2l0eS0wIHBvaW50ZXItZXZlbnRzLW5vbmUnOiAhaXNWaXNpYmxlLFxuICAgICAgICB9LFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmxvY2sgdy1mdWxsIGgtZnVsbCBiZy1ibGFjayBvcGFjaXR5LTc1XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNWaXNpYmxlKGZhbHNlKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1sZyB0ZXh0LXByaW1hcnkgcmVsYXRpdmUgbXgtNXZ3IG15LTE2IHAtMTIgbWF4LWgtNzV2aCBiZy1yZWQtNTAwIHJvdW5kZWQtbGcgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgIDxIMj57ZXJyb3IubWVzc2FnZX08L0gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtmcmFtZXMubWFwKGZyYW1lID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtbZnJhbWUuZmlsZU5hbWUsIGZyYW1lLmxpbmVOdW1iZXIsIGZyYW1lLmNvbHVtbk51bWJlcl0uam9pbihcbiAgICAgICAgICAgICAgICAnLScsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SDYgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJwdC0yXCI+XG4gICAgICAgICAgICAgICAge2ZyYW1lLmZ1bmN0aW9uTmFtZX1cbiAgICAgICAgICAgICAgPC9INj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1vbm8gb3BhY2l0eS03NVwiPlxuICAgICAgICAgICAgICAgIHtmcmFtZS5maWxlTmFtZX06e2ZyYW1lLmxpbmVOdW1iZXJ9OntmcmFtZS5jb2x1bW5OdW1iZXJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gRXJyb3JQYWdlKHtcbiAgZXJyb3IsXG4gIGFydGljbGVzLFxuICBoZXJvUHJvcHMsXG59OiB7XG4gIGVycm9yPzogRXJyb3JcbiAgYXJ0aWNsZXM/OiBBcnJheTxNZHhMaXN0SXRlbT5cbiAgaGVyb1Byb3BzOiBIZXJvU2VjdGlvblByb3BzXG59KSB7XG4gIGlmIChhcnRpY2xlcz8ubGVuZ3RoKSB7XG4gICAgT2JqZWN0LmFzc2lnbihoZXJvUHJvcHMsIHtcbiAgICAgIGFycm93VXJsOiAnI2FydGljbGVzJyxcbiAgICAgIGFycm93TGFiZWw6ICdCdXQgd2FpdCwgdGhlcmUgaXMgbW9yZSEnLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5vc2NyaXB0PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgcGFkZGluZzogMzAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiAnMmVtJ319PntoZXJvUHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiAnMS41ZW0nfX0+e2hlcm9Qcm9wcy5zdWJ0aXRsZX08L3A+XG4gICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgQWxzbywgdGhpcyBzaXRlIHdvcmtzIG11Y2ggYmV0dGVyIHdpdGggSmF2YVNjcmlwdCBlbmFibGVkLi4uXG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25vc2NyaXB0PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAge2Vycm9yICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gKFxuICAgICAgICAgIDxSZWRCb3ggZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPEhlcm9TZWN0aW9uIHsuLi5oZXJvUHJvcHN9IC8+XG5cbiAgICAgICAge2FydGljbGVzPy5sZW5ndGggPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhcnRpY2xlc1wiIC8+XG4gICAgICAgICAgICA8QmxvZ1NlY3Rpb25cbiAgICAgICAgICAgICAgYXJ0aWNsZXM9e2FydGljbGVzfVxuICAgICAgICAgICAgICB0aXRsZT1cIkxvb2tpbmcgZm9yIHNvbWV0aGluZyB0byByZWFkP1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSGF2ZSBhIGxvb2sgYXQgdGhlc2UgYXJ0aWNsZXMuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEZvdXJPaEZvdXIoe2FydGljbGVzfToge2FydGljbGVzPzogQXJyYXk8TWR4TGlzdEl0ZW0+fSkge1xuICBjb25zdCBtYXRjaGVzID0gdXNlTWF0Y2hlcygpXG4gIGNvbnN0IGxhc3QgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV1cbiAgY29uc3QgcGF0aG5hbWUgPSBsYXN0Py5wYXRobmFtZVxuXG4gIHJldHVybiAoXG4gICAgPEVycm9yUGFnZVxuICAgICAgYXJ0aWNsZXM9e2FydGljbGVzfVxuICAgICAgaGVyb1Byb3BzPXt7XG4gICAgICAgIHRpdGxlOiBcIjQwNCAtIE9oIG5vLCB5b3UgZm91bmQgYSBwYWdlIHRoYXQncyBtaXNzaW5nIHN0dWZmLlwiLFxuICAgICAgICBzdWJ0aXRsZTogYFwiJHtwYXRobmFtZX1cIiBpcyBub3QgYSBwYWdlIG9uIHN1bmlsLXNhbXVlbC5jb20uIFNvIHNvcnJ5LmAsXG4gICAgICAvLyAgaW1hZ2U6IDxNaXNzaW5nU29tZXRoaW5nIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIiBhc3BlY3RSYXRpbz1cIjM6NFwiIC8+LFxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbmZ1bmN0aW9uIFNlcnZlckVycm9yKHtcbiAgZXJyb3IsXG4gIGFydGljbGVzLFxufToge1xuICBlcnJvcj86IEVycm9yXG4gIGFydGljbGVzPzogQXJyYXk8TWR4TGlzdEl0ZW0+XG59KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKClcbiAgY29uc3QgbGFzdCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXVxuICBjb25zdCBwYXRobmFtZSA9IGxhc3Q/LnBhdGhuYW1lXG5cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JQYWdlXG4gICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICBhcnRpY2xlcz17YXJ0aWNsZXN9XG4gICAgICBoZXJvUHJvcHM9e3tcbiAgICAgICAgdGl0bGU6ICc1MDAgLSBPaCBubywgc29tZXRoaW5nIGRpZCBub3QgZ28gd2VsbC4nLFxuICAgICAgICBzdWJ0aXRsZTogYFwiJHtwYXRobmFtZX1cIiBpcyBjdXJyZW50bHkgbm90IHdvcmtpbmcuIFNvIHNvcnJ5LmAsXG4gICAgICAgLy8gaW1hZ2U6IDxHcmltbWFjaW5nIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIiBhc3BlY3RSYXRpbz1cIjM6NFwiIC8+LFxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCB7RXJyb3JQYWdlLCBTZXJ2ZXJFcnJvciwgRm91ck9oRm91cn1cbiIsICJpbXBvcnQgdHlwZSB7VHJhbnNmb3JtZXJPcHRpb259IGZyb20gJ0BjbGQtYXBpcy90eXBlcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB0eXBlIHtIVE1MTW90aW9uUHJvcHN9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQge21vdGlvbiwgdXNlUmVkdWNlZE1vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB0eXBlIHtJbWFnZUJ1aWxkZXJ9IGZyb20gJ34vaW1hZ2VzJ1xuaW1wb3J0IHtnZXRJbWdQcm9wc30gZnJvbSAnfi9pbWFnZXMnXG5pbXBvcnQge0gyfSBmcm9tICcuLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHtBcnJvd0xpbmt9IGZyb20gJy4uL2Fycm93LWJ1dHRvbidcbmltcG9ydCB7R3JpZH0gZnJvbSAnLi4vZ3JpZCdcblxuZXhwb3J0IHR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZVxuICBzdWJ0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZVxuICBhY3Rpb24/OiBSZWFjdC5SZWFjdE5vZGVcbiAgYXM/OiBSZWFjdC5FbGVtZW50VHlwZVxufSAmIChcbiAgfCB7XG4gICAgICBpbWFnZVByb3BzPzogSFRNTE1vdGlvblByb3BzPCdpbWcnPlxuICAgICAgaW1hZ2VTaXplPzogJ21lZGl1bScgfCAnbGFyZ2UnIHwgJ2dpYW50J1xuICAgICAgaW1hZ2U/OiBuZXZlclxuICAgICAgaW1hZ2VCdWlsZGVyPzogbmV2ZXJcbiAgICAgIGltYWdlVHJhbnNmb3JtYXRpb25zPzogbmV2ZXJcbiAgICB9XG4gIHwge1xuICAgICAgaW1hZ2VQcm9wcz86IG5ldmVyXG4gICAgICBpbWFnZVNpemU/OiBuZXZlclxuICAgICAgaW1hZ2U/OiBuZXZlclxuICAgICAgaW1hZ2VCdWlsZGVyPzogbmV2ZXJcbiAgICAgIGltYWdlVHJhbnNmb3JtYXRpb25zPzogbmV2ZXJcbiAgICB9XG4gIHwge1xuICAgICAgaW1hZ2VQcm9wcz86IG5ldmVyXG4gICAgICBpbWFnZVNpemU/OiAnbWVkaXVtJyB8ICdsYXJnZScgfCAnZ2lhbnQnXG4gICAgICBpbWFnZTogUmVhY3QuUmVhY3ROb2RlXG4gICAgICBpbWFnZUJ1aWxkZXI/OiBuZXZlclxuICAgICAgaW1hZ2VUcmFuc2Zvcm1hdGlvbnM/OiBuZXZlclxuICAgIH1cbiAgfCB7XG4gICAgICBpbWFnZVByb3BzPzogbmV2ZXJcbiAgICAgIGltYWdlU2l6ZT86ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICdnaWFudCdcbiAgICAgIGltYWdlPzogbmV2ZXJcbiAgICAgLy8gaW1hZ2VCdWlsZGVyOiBJbWFnZUJ1aWxkZXJcbiAgICAgIGltYWdlVHJhbnNmb3JtYXRpb25zPzogVHJhbnNmb3JtZXJPcHRpb25cbiAgICB9XG4pICZcbiAgKFxuICAgIHwge1xuICAgICAgICBhcnJvd1VybDogc3RyaW5nXG4gICAgICAgIGFycm93TGFiZWw6IHN0cmluZ1xuICAgICAgfVxuICAgIHwge1xuICAgICAgICBhcnJvd1VybD86IG5ldmVyXG4gICAgICAgIGFycm93TGFiZWw/OiBuZXZlclxuICAgICAgfVxuICApXG5cbmZ1bmN0aW9uIEhlcm9TZWN0aW9uKHtcbiAgYWN0aW9uLFxuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIGFycm93VXJsLFxuICBhcnJvd0xhYmVsLFxuICBpbWFnZSxcbiAgaW1hZ2VQcm9wcyxcbiAvLyBpbWFnZUJ1aWxkZXIsXG4gIGltYWdlU2l6ZSA9ICdtZWRpdW0nLFxuICBhcyA9ICdoZWFkZXInLFxufTogSGVyb1NlY3Rpb25Qcm9wcykge1xuICBjb25zdCBoYXNJbWFnZSA9IEJvb2xlYW4oaW1hZ2UgPz8gaW1hZ2VQcm9wcyA/PyBpbWFnZUJ1aWxkZXIpXG4gIGNvbnN0IHNob3VsZFJlZHVjZU1vdGlvbiA9IHVzZVJlZHVjZWRNb3Rpb24oKVxuXG4gIGNvbnN0IGNoaWxkVmFyaWFudHMgPSB7XG4gICAgaW5pdGlhbDoge29wYWNpdHk6IDAsIHk6IHNob3VsZFJlZHVjZU1vdGlvbiA/IDAgOiAyNX0sXG4gICAgdmlzaWJsZToge29wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHtkdXJhdGlvbjogMC41fX0sXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkXG4gICAgICBhcz17YXN9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2xnOm1pbi1oLVs0MHJlbV0gbGc6IG1iLTI0IHB0LTI0IGgtYXV0byBsZzpwYi0xMicsIHtcbiAgICAgICAgJ2xnOm1iLTY0JzogYXJyb3dMYWJlbCxcbiAgICAgICAgJ2xnOm1iLTAnOiAhYXJyb3dMYWJlbCxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHtoYXNJbWFnZSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY29sLXNwYW4tZnVsbCBtYi0xMiBsZzptYi0wJywge1xuICAgICAgICAgICAgJ2xnOmNvbC1zdGFydC03IGxnOmNvbC1zcGFuLTUgcHgtMTAnOiBpbWFnZVNpemUgPT09ICdtZWRpdW0nLFxuICAgICAgICAgICAgJ2xnOmNvbC1zdGFydC02IGxnOmNvbC1zcGFuLTYgcGwtMTAgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCc6XG4gICAgICAgICAgICAgIGltYWdlU2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgICAgICAgICdsZzpjb2wtc3RhcnQtNiBsZzpjb2wtc3Bhbi03IGxnOnB4LTAgbGc6LW10LTI0IGxnOi1tci01dncgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInOlxuICAgICAgICAgICAgICBpbWFnZVNpemUgPT09ICdnaWFudCcsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICB7aW1hZ2VQcm9wcyA/IChcbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgIHsuLi5pbWFnZVByb3BzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgJ3ctZnVsbCBoLWF1dG8gb2JqZWN0LWNvbnRhaW4nLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICdtYXgtaC01MHZoJzogaW1hZ2VTaXplID09PSAnbWVkaXVtJyxcbiAgICAgICAgICAgICAgICAgICdtYXgtaC03NXZoJzogaW1hZ2VTaXplID09PSAnZ2lhbnQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2VQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGluaXRpYWw9e3tzY2FsZTogc2hvdWxkUmVkdWNlTW90aW9uID8gMSA6IDEuNSwgb3BhY2l0eTogMH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3tzY2FsZTogMSwgb3BhY2l0eTogMX19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC43NX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBpbWFnZUJ1aWxkZXIgPyAoXG4gICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3ctZnVsbCBoLWF1dG8gb2JqZWN0LWNvbnRhaW4nLCB7XG4gICAgICAgICAgICAgICAgJ21heC1oLTUwdmgnOiBpbWFnZVNpemUgPT09ICdtZWRpdW0nLFxuICAgICAgICAgICAgICAgICdtYXgtaC03NXZoJzogaW1hZ2VTaXplID09PSAnZ2lhbnQnLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgey4uLmdldEhlcm9JbWFnZVByb3BzKGltYWdlQnVpbGRlcil9XG4gICAgICAgICAgICAgIGluaXRpYWw9e3tzY2FsZTogc2hvdWxkUmVkdWNlTW90aW9uID8gMSA6IDEuNSwgb3BhY2l0eTogMH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3tzY2FsZTogMSwgb3BhY2l0eTogMX19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC43NX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICdjb2wtc3Bhbi1mdWxsIHB0LTYgbGc6ZmxleCBsZzpmbGV4LWNvbCBsZzpjb2wtc3RhcnQtMSBsZzpyb3ctc3RhcnQtMSBsZzpoLWZ1bGwnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdsZzpjb2wtc3Bhbi01JzogaGFzSW1hZ2UsXG4gICAgICAgICAgICAnbGc6Y29sLXNwYW4tNyc6ICFoYXNJbWFnZSxcbiAgICAgICAgICB9LFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1hdXRvIGZsZXgtY29sXCJcbiAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICBpbml0aWFsOiB7b3BhY2l0eTogMH0sXG4gICAgICAgICAgICB2aXNpYmxlOiB7b3BhY2l0eTogMSwgdHJhbnNpdGlvbjoge3N0YWdnZXJDaGlsZHJlbjogMC4yfX0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjaGlsZFZhcmlhbnRzfT5cbiAgICAgICAgICAgIDxIMiBhcz1cImgyXCI+e3RpdGxlfTwvSDI+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAge3N1YnRpdGxlID8gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2NoaWxkVmFyaWFudHN9PlxuICAgICAgICAgICAgICA8SDIgYXM9XCJwXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgIDwvSDI+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2FjdGlvbiA/IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtjaGlsZFZhcmlhbnRzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTE0IHNwYWNlLXktNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthY3Rpb259XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAge2Fycm93VXJsID8gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMH19XG4gICAgICAgICAgICBhbmltYXRlPXt7b3BhY2l0eTogMX19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZGVsYXk6IDF9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHB0LTEyIGxnOmJsb2NrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dMaW5rIHRvPXthcnJvd1VybH0gZGlyZWN0aW9uPVwiZG93blwiIHRleHRTaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAge2Fycm93TGFiZWx9XG4gICAgICAgICAgICA8L0Fycm93TGluaz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9HcmlkPlxuICApXG59XG5cbmZ1bmN0aW9uIGdldEhlcm9JbWFnZVByb3BzKFxuICBpbWFnZUJ1aWxkZXI6IEltYWdlQnVpbGRlcixcbiAgdHJhbnNmb3JtYXRpb25zPzogVHJhbnNmb3JtZXJPcHRpb24sXG4pIHtcbiAgcmV0dXJuIGdldEltZ1Byb3BzKGltYWdlQnVpbGRlciwge1xuICAgIHdpZHRoczogWzI1NiwgNTUwLCA3MDAsIDkwMCwgMTMwMCwgMTgwMF0sXG4gICAgc2l6ZXM6IFtcbiAgICAgICcobWF4LXdpZHRoOiAxMDIzcHgpIDgwdncnLFxuICAgICAgJyhtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkgNTB2dycsXG4gICAgICAnKG1pbi13aWR0aDogMTI4MHB4KSA5MDBweCcsXG4gICAgXSxcbiAgICB0cmFuc2Zvcm1hdGlvbnMsXG4gIH0pXG59XG5cbmV4cG9ydCB7SGVyb1NlY3Rpb24sIGdldEhlcm9JbWFnZVByb3BzfVxuIiwgImltcG9ydCB0eXBlIHtUcmFuc2Zvcm1lck9wdGlvbn0gZnJvbSAnQGNsZC1hcGlzL3R5cGVzJ1xuaW1wb3J0IHtzZXRDb25maWcsIGJ1aWxkSW1hZ2VVcmx9IGZyb20gJ2Nsb3VkaW5hcnktYnVpbGQtdXJsJ1xuXG5cbnNldENvbmZpZyh7XG4gIGNsb3VkTmFtZTogJ3N1bmlsLXNhbXVlbC1jb20nLFxufSlcblxudHlwZSBJbWFnZUJ1aWxkZXIgPSB7XG4gICh0cmFuc2Zvcm1hdGlvbnM/OiBUcmFuc2Zvcm1lck9wdGlvbik6IHN0cmluZ1xuICBhbHQ6IHN0cmluZ1xuICBpZDogc3RyaW5nXG59XG5jb25zdCBjcmVhdGVJbWFnZXMgPSA8XG4gIEltYWdlVHlwZSBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHtpZDogc3RyaW5nOyBhbHQ6IHN0cmluZ30+LFxuPihcbiAgaW1hZ2VzOiBJbWFnZVR5cGUsXG4pID0+IHtcbiAgY29uc3QgaW1hZ2VCdWlsZGVyczogUmVjb3JkPHN0cmluZywgSW1hZ2VCdWlsZGVyPiA9IHt9XG4gIGZvciAoY29uc3QgW25hbWUsIHtpZCwgYWx0fV0gb2YgT2JqZWN0LmVudHJpZXMoaW1hZ2VzKSkge1xuICAgIGltYWdlQnVpbGRlcnNbbmFtZV0gPSBnZXRJbWFnZUJ1aWxkZXIoaWQsIGFsdClcbiAgfVxuICByZXR1cm4gaW1hZ2VCdWlsZGVycyBhcyB7W05hbWUgaW4ga2V5b2YgSW1hZ2VUeXBlXTogSW1hZ2VCdWlsZGVyfVxufVxuXG5mdW5jdGlvbiBnZXRJbWFnZUJ1aWxkZXIoaWQ6IHN0cmluZywgYWx0OiBzdHJpbmcgPSAnJyk6IEltYWdlQnVpbGRlciB7XG4gIGZ1bmN0aW9uIGltYWdlQnVpbGRlcih0cmFuc2Zvcm1hdGlvbnM/OiBUcmFuc2Zvcm1lck9wdGlvbikge1xuICAgIHJldHVybiBidWlsZEltYWdlVXJsKGlkLCB7dHJhbnNmb3JtYXRpb25zfSlcbiAgfVxuICBpbWFnZUJ1aWxkZXIuYWx0ID0gYWx0XG4gIGltYWdlQnVpbGRlci5pZCA9IGlkXG4gIHJldHVybiBpbWFnZUJ1aWxkZXJcbn1cblxuY29uc3QgaW1hZ2VzID0gY3JlYXRlSW1hZ2VzKHtcbiAgc3VuaWxTaWduYXR1cmVEYXJrTW9kZToge1xuICAgIGlkOiAnc3VuaWwvc2lnbmF0dXJlLWRhcmstbW9kZScsXG4gICAgYWx0OiBgU3VuaWwncyBzaWduYXR1cmVgLFxuICB9LFxuICBzdW5pbFNpZ25hdHVyZUxpZ2h0TW9kZToge1xuICAgIGlkOiAnc3VuaWwvc2lnbmF0dXJlLWxpZ2h0LW1vZGUnLFxuICAgIGFsdDogYFN1bmlsJ3Mgc2lnbmF0dXJlYCxcbiAgfSxcbiAgc3VuaWxUcmFuc3BhcmVudFByb2ZpbGU6IHtcbiAgICBpZDogJ3N1bmlsL3Byb2ZpbGUtdHJhbnNwYXJlbnQnLFxuICAgIGFsdDogJ1N1bmlsIFNhbXVlbCcsXG4gIH0sXG4gIHN1bmlsUHJvZmlsZToge1xuICAgIGlkOiAnc3VuaWwvcHJvZmlsZScsXG4gICAgYWx0OiAnU3VuaWwgU2FtdWVsJyxcbiAgfSxcbiAgc3VuaWxTbm93U3BvcnRzOiB7XG4gICAgaWQ6ICdzdW5pbC9zbm93LXNwb3J0cycsXG4gICAgYWx0OiAnU3VuaWwgd2VhcmluZyBzbm93IGNsb3RoZXMgd2l0aCBza2lzIGFuZCBhIHNub3dib2FyZCcsXG4gIH1cbn0pXG5cblxuLy8gY29uc3QgaWxsdXN0cmF0aW9uSW1hZ2VzID0ge1xuLy8gICB0ZXNsYVk6IGltYWdlcy50ZXNsYVksXG4vLyAgIHNvbGFyUGFuZWxzOiBpbWFnZXMuc29sYXJQYW5lbHMsXG4vLyAgIHNub3dib2FyZDogaW1hZ2VzLnNub3dib2FyZCxcbi8vICAgc2tpczogaW1hZ2VzLnNraXMsXG4vLyAgIGtheWFrOiBpbWFnZXMua2F5YWssXG4vLyAgIG9uZXdoZWVsOiBpbWFnZXMub25ld2hlZWwsXG4vLyAgIG1pY3JvcGhvbmU6IGltYWdlcy5taWNyb3Bob25lLFxuLy8gICBoZWxtZXQ6IGltYWdlcy5oZWxtZXQsXG4vLyB9XG5cbmZ1bmN0aW9uIGdldEltZ1Byb3BzKFxuICBpbWFnZUJ1aWxkZXI6IEltYWdlQnVpbGRlcixcbiAge1xuICAgIHdpZHRocyxcbiAgICBzaXplcyxcbiAgICB0cmFuc2Zvcm1hdGlvbnMsXG4gIH06IHtcbiAgICB3aWR0aHM6IEFycmF5PG51bWJlcj5cbiAgICBzaXplczogQXJyYXk8c3RyaW5nPlxuICAgIHRyYW5zZm9ybWF0aW9ucz86IFRyYW5zZm9ybWVyT3B0aW9uXG4gIH0sXG4pIHtcbiAgY29uc3QgYXZlcmFnZVNpemUgPSBNYXRoLmNlaWwod2lkdGhzLnJlZHVjZSgoYSwgcykgPT4gYSArIHMpIC8gd2lkdGhzLmxlbmd0aClcblxuICByZXR1cm4ge1xuICAgIGFsdDogaW1hZ2VCdWlsZGVyLmFsdCxcbiAgICBzcmM6IGltYWdlQnVpbGRlcih7XG4gICAgICBxdWFsaXR5OiAnYXV0bycsXG4gICAgICBmb3JtYXQ6ICdhdXRvJyxcbiAgICAgIC4uLnRyYW5zZm9ybWF0aW9ucyxcbiAgICAgIHJlc2l6ZToge3dpZHRoOiBhdmVyYWdlU2l6ZSwgLi4udHJhbnNmb3JtYXRpb25zPy5yZXNpemV9LFxuICAgIH0pLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKHdpZHRoID0+XG4gICAgICAgIFtcbiAgICAgICAgICBpbWFnZUJ1aWxkZXIoe1xuICAgICAgICAgICAgcXVhbGl0eTogJ2F1dG8nLFxuICAgICAgICAgICAgZm9ybWF0OiAnYXV0bycsXG4gICAgICAgICAgICAuLi50cmFuc2Zvcm1hdGlvbnMsXG4gICAgICAgICAgICByZXNpemU6IHt3aWR0aCwgLi4udHJhbnNmb3JtYXRpb25zPy5yZXNpemV9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGAke3dpZHRofXdgLFxuICAgICAgICBdLmpvaW4oJyAnKSxcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuICAgIHNpemVzOiBzaXplcy5qb2luKCcsICcpLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvY2lhbEltYWdlV2l0aFByZVRpdGxlKHtcbiAgb3JpZ2luLFxuICB0aXRsZSxcbiAgcHJlVGl0bGUsXG4gIGZlYXR1cmVkSW1hZ2U6IGltZyxcbiAgdXJsLFxufToge1xuICBvcmlnaW46IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHByZVRpdGxlOiBzdHJpbmdcbiAgZmVhdHVyZWRJbWFnZTogc3RyaW5nXG4gIHVybDogc3RyaW5nXG59KSB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIHR5cGU6ICcyJyxcbiAgICB0aXRsZSxcbiAgICBwcmVUaXRsZSxcbiAgICBpbWcsXG4gICAgdXJsLFxuICB9KVxuICByZXR1cm4gYCR7b3JpZ2lufS9pbWcvc29jaWFsPyR7cGFyYW1zLnRvU3RyaW5nKCl9YFxufVxuXG5mdW5jdGlvbiBnZXRHZW5lcmljU29jaWFsSW1hZ2Uoe1xuICBvcmlnaW4sXG4gIHdvcmRzLFxuICBmZWF0dXJlZEltYWdlOiBpbWcsXG4gIHVybCxcbn06IHtcbiAgb3JpZ2luOiBzdHJpbmdcbiAgd29yZHM6IHN0cmluZ1xuICBmZWF0dXJlZEltYWdlOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbn0pIHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgdHlwZTogJzEnLFxuICAgIHdvcmRzLFxuICAgIGltZyxcbiAgICB1cmwsXG4gIH0pXG4gIHJldHVybiBgJHtvcmlnaW59L2ltZy9zb2NpYWw/JHtwYXJhbXMudG9TdHJpbmcoKX1gXG59XG5cbmV4cG9ydCB7XG4gIGltYWdlcyxcbiAgZ2V0SW1nUHJvcHMsXG4gIGdldEltYWdlQnVpbGRlcixcbiAgZ2V0R2VuZXJpY1NvY2lhbEltYWdlLFxuICBnZXRTb2NpYWxJbWFnZVdpdGhQcmVUaXRsZSxcbiAgLy9pbGx1c3RyYXRpb25JbWFnZXMsXG59XG5leHBvcnQgdHlwZSB7SW1hZ2VCdWlsZGVyfVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxudHlwZSBUaXRsZVByb3BzID0ge1xuICB2YXJpYW50PzogJ3ByaW1hcnknIHwgJ3NlY29uZGFyeSdcbiAgYXM/OiBSZWFjdC5FbGVtZW50VHlwZVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgaWQ/OiBzdHJpbmdcbn0gJiAoXG4gIHwge2NoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGV9XG4gIHwge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgX19odG1sOiBzdHJpbmdcbiAgICAgIH1cbiAgICB9XG4pXG5cbmNvbnN0IGZvbnRTaXplID0ge1xuICBoMTogJ2xlYWRpbmctdGlnaHQgdGV4dC00eGwgbWQ6dGV4dC01eGwnLFxuICBoMjogJ2xlYWRpbmctdGlnaHQgdGV4dC0zeGwgbWQ6dGV4dC00eGwnLFxuICBoMzogJ3RleHQtMnhsIGZvbnQtbWVkaXVtIG1kOnRleHQtM3hsJyxcbiAgaDQ6ICd0ZXh0LXhsIGZvbnQtbWVkaXVtIG1kOnRleHQtMnhsJyxcbiAgaDU6ICd0ZXh0LWxnIGZvbnQtbWVkaXVtIG1kOnRleHQteGwnLFxuICBoNjogJ3RleHQtbGcgZm9udC1tZWRpdW0nLFxufVxuXG5jb25zdCB0aXRsZUNvbG9ycyA9IHtcbiAgcHJpbWFyeTogJ3RleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlJyxcbiAgc2Vjb25kYXJ5OiAndGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtYmx1ZUdyYXktNTAwJyxcbn1cblxuZnVuY3Rpb24gVGl0bGUoe1xuICB2YXJpYW50ID0gJ3ByaW1hcnknLFxuICBzaXplLFxuICBhcyxcbiAgY2xhc3NOYW1lLFxuICAuLi5yZXN0XG59OiBUaXRsZVByb3BzICYge3NpemU6IGtleW9mIHR5cGVvZiBmb250U2l6ZX0pIHtcbiAgY29uc3QgVGFnID0gYXMgPz8gc2l6ZVxuICByZXR1cm4gKFxuICAgIDxUYWdcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChmb250U2l6ZVtzaXplXSwgdGl0bGVDb2xvcnNbdmFyaWFudF0sIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApXG59XG5cbmZ1bmN0aW9uIEgxKHByb3BzOiBUaXRsZVByb3BzKSB7XG4gIHJldHVybiA8VGl0bGUgey4uLnByb3BzfSBzaXplPVwiaDFcIiAvPlxufVxuXG5mdW5jdGlvbiBIMihwcm9wczogVGl0bGVQcm9wcykge1xuICByZXR1cm4gPFRpdGxlIHsuLi5wcm9wc30gc2l6ZT1cImgyXCIgLz5cbn1cblxuZnVuY3Rpb24gSDMocHJvcHM6IFRpdGxlUHJvcHMpIHtcbiAgcmV0dXJuIDxUaXRsZSB7Li4ucHJvcHN9IHNpemU9XCJoM1wiIC8+XG59XG5cbmZ1bmN0aW9uIEg0KHByb3BzOiBUaXRsZVByb3BzKSB7XG4gIHJldHVybiA8VGl0bGUgey4uLnByb3BzfSBzaXplPVwiaDRcIiAvPlxufVxuXG5mdW5jdGlvbiBINShwcm9wczogVGl0bGVQcm9wcykge1xuICByZXR1cm4gPFRpdGxlIHsuLi5wcm9wc30gc2l6ZT1cImg1XCIgLz5cbn1cblxuZnVuY3Rpb24gSDYocHJvcHM6IFRpdGxlUHJvcHMpIHtcbiAgcmV0dXJuIDxUaXRsZSB7Li4ucHJvcHN9IHNpemU9XCJoNlwiIC8+XG59XG5cbnR5cGUgUGFyYWdyYXBoUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwcm9zZT86IGJvb2xlYW5cbiAgdGV4dENvbG9yQ2xhc3NOYW1lPzogc3RyaW5nXG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGVcbn0gJiAoe2NoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGV9IHwge2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7X19odG1sOiBzdHJpbmd9fSlcblxuZnVuY3Rpb24gUGFyYWdyYXBoKHtcbiAgY2xhc3NOYW1lLFxuICBwcm9zZSA9IHRydWUsXG4gIGFzID0gJ3AnLFxuICB0ZXh0Q29sb3JDbGFzc05hbWUgPSAndGV4dC1zZWNvbmRhcnknLFxuICAuLi5yZXN0XG59OiBQYXJhZ3JhcGhQcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChhcywge1xuICAgIGNsYXNzTmFtZTogY2xzeCgnbWF4LXctZnVsbCB0ZXh0LWxnJywgdGV4dENvbG9yQ2xhc3NOYW1lLCBjbGFzc05hbWUsIHtcbiAgICAgICdwcm9zZSBwcm9zZS1saWdodCBkYXJrOnByb3NlLWRhcmsnOiBwcm9zZSxcbiAgICB9KSxcbiAgICAuLi5yZXN0LFxuICB9KVxufVxuXG5leHBvcnQge0gxLCBIMiwgSDMsIEg0LCBINSwgSDYsIFBhcmFncmFwaH1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQge0xpbmssIExpbmtQcm9wc30gZnJvbSAncmVtaXgnXG5pbXBvcnQge21vdGlvbiwgdXNlUmVkdWNlZE1vdGlvbiwgVmFyaWFudH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7QXJyb3dJY29uLCBBcnJvd0ljb25Qcm9wc30gZnJvbSAnLi9pY29ucy9hcnJvdy1pY29uJ1xuaW1wb3J0IHtINn0gZnJvbSAnLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHtFbGVtZW50U3RhdGUsIHVzZUVsZW1lbnRTdGF0ZX0gZnJvbSAnLi9ob29rcy91c2UtZWxlbWVudC1zdGF0ZSdcblxuY29uc3QgYXJyb3dWYXJpYW50czogUmVjb3JkPFxuICBBcnJvd0ljb25Qcm9wc1snZGlyZWN0aW9uJ10sXG4gIFJlY29yZDxFbGVtZW50U3RhdGUsIFZhcmlhbnQ+XG4+ID0ge1xuICBkb3duOiB7XG4gICAgaW5pdGlhbDoge3k6IDB9LFxuICAgIGhvdmVyOiB7eTogNH0sXG4gICAgZm9jdXM6IHtcbiAgICAgIHk6IFswLCA0LCAwXSxcbiAgICAgIHRyYW5zaXRpb246IHtyZXBlYXQ6IEluZmluaXR5fSxcbiAgICB9LFxuICAgIGFjdGl2ZToge3k6IDEyfSxcbiAgfSxcbiAgdXA6IHtcbiAgICBpbml0aWFsOiB7eTogMH0sXG4gICAgaG92ZXI6IHt5OiAtNH0sXG4gICAgZm9jdXM6IHtcbiAgICAgIHk6IFswLCAtNCwgMF0sXG4gICAgICB0cmFuc2l0aW9uOiB7cmVwZWF0OiBJbmZpbml0eX0sXG4gICAgfSxcbiAgICBhY3RpdmU6IHt5OiAtMTJ9LFxuICB9LFxuICBsZWZ0OiB7XG4gICAgaW5pdGlhbDoge3g6IDB9LFxuICAgIGhvdmVyOiB7eDogLTR9LFxuICAgIGZvY3VzOiB7XG4gICAgICB4OiBbMCwgLTQsIDBdLFxuICAgICAgdHJhbnNpdGlvbjoge3JlcGVhdDogSW5maW5pdHl9LFxuICAgIH0sXG4gICAgYWN0aXZlOiB7eDogLTEyfSxcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBpbml0aWFsOiB7eDogMH0sXG4gICAgaG92ZXI6IHt4OiA0fSxcbiAgICBmb2N1czoge1xuICAgICAgeDogWzAsIDQsIDBdLFxuICAgICAgdHJhbnNpdGlvbjoge3JlcGVhdDogSW5maW5pdHl9LFxuICAgIH0sXG4gICAgYWN0aXZlOiB7eDogMTJ9LFxuICB9LFxuICAndG9wLXJpZ2h0Jzoge1xuICAgIGluaXRpYWw6IHt4OiAwLCB5OiAwfSxcbiAgICBob3Zlcjoge3g6IDQsIHk6IC00fSxcbiAgICBmb2N1czoge1xuICAgICAgeDogWzAsIDQsIDBdLFxuICAgICAgeTogWzAsIC00LCAwXSxcbiAgICAgIHRyYW5zaXRpb246IHtyZXBlYXQ6IEluZmluaXR5fSxcbiAgICB9LFxuICAgIGFjdGl2ZToge3g6IDEyLCB5OiAtMTJ9LFxuICB9LFxufVxuXG50eXBlIEFycm93QnV0dG9uQmFzZVByb3BzID0ge1xuICBkaXJlY3Rpb24/OiBBcnJvd0ljb25Qcm9wc1snZGlyZWN0aW9uJ11cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfCBSZWFjdC5SZWFjdE5vZGVbXVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgdGV4dFNpemU/OiAnc21hbGwnIHwgJ21lZGl1bSdcbn1cblxudHlwZSBBcnJvd0xpbmtQcm9wcyA9IHtcbiAgZGlyZWN0aW9uPzogQXJyb3dJY29uUHJvcHNbJ2RpcmVjdGlvbiddXG59ICYgKHtocmVmPzogc3RyaW5nOyB0bz86IG5ldmVyfSB8IHtocmVmPzogbmV2ZXI7IHRvOiBMaW5rUHJvcHNbJ3RvJ119KSAmXG4gIEFycm93QnV0dG9uQmFzZVByb3BzICYge3ByZWZldGNoPzogJ2ludGVudCcgfCAncmVuZGVyJyB8ICdub25lJ31cblxudHlwZSBBcnJvd0J1dHRvblByb3BzID0ge1xuICBvbkNsaWNrPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydidXR0b24nXVsnb25DbGljayddXG4gIHR5cGU/OiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2J1dHRvbiddWyd0eXBlJ11cbn0gJiBBcnJvd0J1dHRvbkJhc2VQcm9wc1xuXG4vLyB3aGlsZUZvY3VzIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB3aGlsZVRhcCwgc28gd2hpbGUgd2UgY2FuJ3QgbW92ZSB0aGUgYXJyb3dcbi8vIG9uIGZvY3VzIChvciBvbiB0YXApLCB3ZSBjYW4gc3RpbGwgY29sb3IgYW5kIGFuaW1hdGUgdGhlIGNpcmNsZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2ZyYW1lci9tb3Rpb24vaXNzdWVzLzEyMjFcbmZ1bmN0aW9uIGdldEJhc2VQcm9wcyh7dGV4dFNpemUsIGNsYXNzTmFtZX06IEFycm93QnV0dG9uQmFzZVByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KFxuICAgICAgJ3RleHQtcHJpbWFyeSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZWZ0IGZvbnQtbWVkaXVtIGZvY3VzOm91dGxpbmUtbm9uZSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uJyxcbiAgICAgIHtcbiAgICAgICAgJ3RleHQteGwnOiB0ZXh0U2l6ZSA9PT0gJ21lZGl1bScsXG4gICAgICAgICd0ZXh0LWxnJzogdGV4dFNpemUgPT09ICdzbWFsbCcsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICksXG4gIH1cbn1cblxuZnVuY3Rpb24gQXJyb3dCdXR0b25Db250ZW50KHtcbiAgY2hpbGRyZW4sXG4gIGRpcmVjdGlvbiA9ICdyaWdodCcsXG59OiBQaWNrPEFycm93QnV0dG9uQmFzZVByb3BzLCAnY2hpbGRyZW4nIHwgJ2RpcmVjdGlvbic+KSB7XG4gIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyOCAqIDIgKiBNYXRoLlBJXG4gIGNvbnN0IHN0cm9rZURhc2hhcnJheSA9IGAke2NpcmN1bWZlcmVuY2V9ICR7Y2lyY3VtZmVyZW5jZX1gXG4gIGNvbnN0IHNob3VsZFJlZHVjZU1vdGlvbiA9IHVzZVJlZHVjZWRNb3Rpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjaGlsZHJlbiAmJlxuICAgICAgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyB8fFxuICAgICAgICBkaXJlY3Rpb24gPT09ICd1cCcgfHxcbiAgICAgICAgZGlyZWN0aW9uID09PSAndG9wLXJpZ2h0JykgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTggdGV4dC14bCBmb250LW1lZGl1bVwiPntjaGlsZHJlbn08L3NwYW4+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCBmbGV4LW5vbmUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMSB3LTE0IGgtMTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCI+XG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHI9XCIyOFwiXG4gICAgICAgICAgICAgIGN4PVwiMzBcIlxuICAgICAgICAgICAgICBjeT1cIjMwXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uY2lyY2xlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHI9XCIyOFwiXG4gICAgICAgICAgICAgIGN4PVwiMzBcIlxuICAgICAgICAgICAgICBjeT1cIjMwXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2VEYXNoYXJyYXksIHJvdGF0ZTogLTkwfX1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB7c3Ryb2tlRGFzaG9mZnNldDogY2lyY3VtZmVyZW5jZX0sXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtzdHJva2VEYXNob2Zmc2V0OiAwfSxcbiAgICAgICAgICAgICAgICBmb2N1czoge3N0cm9rZURhc2hvZmZzZXQ6IDB9LFxuICAgICAgICAgICAgICAgIGFjdGl2ZToge3N0cm9rZURhc2hvZmZzZXQ6IDB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgZGFtcGluZzogMCxcbiAgICAgICAgICAgICAgICAuLi4oc2hvdWxkUmVkdWNlTW90aW9uID8ge2R1cmF0aW9uOiAwfSA6IG51bGwpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgdHJhbnNpdGlvbj17c2hvdWxkUmVkdWNlTW90aW9uID8ge2R1cmF0aW9uOiAwfSA6IHt9fVxuICAgICAgICAgIHZhcmlhbnRzPXtzaG91bGRSZWR1Y2VNb3Rpb24gPyB7fSA6IGFycm93VmFyaWFudHNbZGlyZWN0aW9uXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0ljb24gZGlyZWN0aW9uPXtkaXJlY3Rpb259IC8+XG4gICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2NoaWxkcmVuICYmIChkaXJlY3Rpb24gPT09ICdsZWZ0JyB8fCBkaXJlY3Rpb24gPT09ICdkb3duJykgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTggdGV4dC14bCBmb250LW1lZGl1bVwiPntjaGlsZHJlbn08L3NwYW4+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBBcnJvd0J1dHRvbih7b25DbGljaywgdHlwZSwgLi4ucHJvcHN9OiBBcnJvd0J1dHRvblByb3BzKSB7XG4gIGNvbnN0IFtyZWYsIHN0YXRlXSA9IHVzZUVsZW1lbnRTdGF0ZSgpXG4gIGNvbnN0IHNob3VsZFJlZHVjZU1vdGlvbiA9IHVzZVJlZHVjZWRNb3Rpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5idXR0b25cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgey4uLmdldEJhc2VQcm9wcyhwcm9wcyl9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGFuaW1hdGU9e3N0YXRlfVxuICAgICAgdHJhbnNpdGlvbj17c2hvdWxkUmVkdWNlTW90aW9uID8ge2R1cmF0aW9uOiAwfSA6IHt9fVxuICAgID5cbiAgICAgIDxBcnJvd0J1dHRvbkNvbnRlbnQgey4uLnByb3BzfSAvPlxuICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgKVxufVxuXG5jb25zdCBNb3Rpb25MaW5rID0gbW90aW9uKExpbmspXG5cbmZ1bmN0aW9uIEFycm93TGluayh7dG8sIGhyZWYsIC4uLnByb3BzfTogQXJyb3dMaW5rUHJvcHMpIHtcbiAgY29uc3QgW3JlZiwgc3RhdGVdID0gdXNlRWxlbWVudFN0YXRlKClcbiAgY29uc3Qgc2hvdWxkUmVkdWNlTW90aW9uID0gdXNlUmVkdWNlZE1vdGlvbigpXG5cbiAgaWYgKGhyZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1vdGlvbi5hXG4gICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgIHsuLi5nZXRCYXNlUHJvcHMocHJvcHMpfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgYW5pbWF0ZT17c3RhdGV9XG4gICAgICAgIHRyYW5zaXRpb249e3Nob3VsZFJlZHVjZU1vdGlvbiA/IHtkdXJhdGlvbjogMH0gOiB7fX1cbiAgICAgID5cbiAgICAgICAgPEFycm93QnV0dG9uQ29udGVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L21vdGlvbi5hPlxuICAgIClcbiAgfSBlbHNlIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TW90aW9uTGlua1xuICAgICAgICB0bz17dG99XG4gICAgICAgIHsuLi5nZXRCYXNlUHJvcHMocHJvcHMpfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgYW5pbWF0ZT17c3RhdGV9XG4gICAgICAgIHRyYW5zaXRpb249e3Nob3VsZFJlZHVjZU1vdGlvbiA/IHtkdXJhdGlvbjogMH0gOiB7fX1cbiAgICAgID5cbiAgICAgICAgPEFycm93QnV0dG9uQ29udGVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L01vdGlvbkxpbms+XG4gICAgKVxuICB9XG4gIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGVpdGhlciB0byBvciBocmVmIHRvIEFycm93TGluaycpXG59XG5cbmZ1bmN0aW9uIEJhY2tMaW5rKHtcbiAgdG8sXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG59OiB7dG86IExpbmtQcm9wc1sndG8nXX0gJiBQaWNrPEFycm93TGlua1Byb3BzLCAnY2xhc3NOYW1lJyB8ICdjaGlsZHJlbic+KSB7XG4gIGNvbnN0IFtyZWYsIHN0YXRlXSA9IHVzZUVsZW1lbnRTdGF0ZSgpXG4gIGNvbnN0IHNob3VsZFJlZHVjZU1vdGlvbiA9IHVzZVJlZHVjZWRNb3Rpb24oKVxuICByZXR1cm4gKFxuICAgIDxNb3Rpb25MaW5rXG4gICAgICB0bz17dG99XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICd0ZXh0LXByaW1hcnkgZmxleCBmb2N1czpvdXRsaW5lLW5vbmUgc3BhY2UteC00JyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgYW5pbWF0ZT17c3RhdGV9XG4gICAgICB0cmFuc2l0aW9uPXtzaG91bGRSZWR1Y2VNb3Rpb24gPyB7ZHVyYXRpb246IDB9IDoge319XG4gICAgPlxuICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgIHZhcmlhbnRzPXtzaG91bGRSZWR1Y2VNb3Rpb24gPyB7fSA6IGFycm93VmFyaWFudHMubGVmdH1cbiAgICAgICAgdHJhbnNpdGlvbj17c2hvdWxkUmVkdWNlTW90aW9uID8ge2R1cmF0aW9uOiAwfSA6IHt9fVxuICAgICAgPlxuICAgICAgICA8QXJyb3dJY29uIGRpcmVjdGlvbj1cImxlZnRcIiAvPlxuICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgIDxINiBhcz1cInNwYW5cIj57Y2hpbGRyZW59PC9INj5cbiAgICA8L01vdGlvbkxpbms+XG4gIClcbn1cblxuZXhwb3J0IHtBcnJvd0J1dHRvbiwgQXJyb3dMaW5rLCBCYWNrTGlua31cbiIsICJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyb3dJY29uUHJvcHMge1xuICBkaXJlY3Rpb246ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3RvcC1yaWdodCdcbiAgc2l6ZT86IG51bWJlclxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHJvdGF0aW9uTWFwID0ge1xuICB1cDogJ3JvdGF0ZS0xODAnLFxuICByaWdodDogJy1yb3RhdGUtOTAnLFxuICBkb3duOiAncm90YXRlLTAnLFxuICBsZWZ0OiAncm90YXRlLTkwJyxcbiAgJ3RvcC1yaWdodCc6ICctcm90YXRlLTEzNScsXG59XG5cbmZ1bmN0aW9uIEFycm93SWNvbih7ZGlyZWN0aW9uLCBzaXplID0gMzIsIGNsYXNzTmFtZX06IEFycm93SWNvblByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgJ3RyYW5zZm9ybScsIHJvdGF0aW9uTWFwW2RpcmVjdGlvbl0pfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNMTUuMTAxIDUuNVYyMy4xMDk0TDkuNDAxMDggMTcuNDA5NUw4LjE0ODA3IDE4LjY2MTlMMTUuOTg2MiAyNi41TDIzLjg1MiAxOC42MzQyTDIyLjU5OTYgMTcuMzgxN0wxNi44NzI1IDIzLjEwOTRWNS41SDE1LjEwMVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IHtBcnJvd0ljb259XG4iLCAiaW1wb3J0IHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIFJlZkNhbGxiYWNrLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRTdGF0ZSA9ICdhY3RpdmUnIHwgJ2ZvY3VzJyB8ICdob3ZlcicgfCAnaW5pdGlhbCdcblxuLy8gVGhpcyBzdGFydGVkIGFzIGEgd29yayBhcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmFtZXIvbW90aW9uL2lzc3Vlcy8xMjIxLFxuLy8gYnV0IGl0J3Mgc28gbXVjaCBtb3JlIG5vdy4gVGhlIHZhcmlhbnRzIGluIGZyYW1lciBtb3Rpb24gc3VwcG9ydCBob3ZlciwgZm9jdXNcbi8vIGFuZCB0YXAsIHdoaWxlIHRoaXMgZWZmZWN0IGFsc28gbGlzdGVucyB0byB0aGUga2V5cHJlc3MsIHNvIHRoYXQgYEVudGVyYFxuLy8gcmVzdWx0cyBpbiBhbiBhY3RpdmUgc3RhdGUgYXMgd2VsbC5cbmZ1bmN0aW9uIHVzZUVsZW1lbnRTdGF0ZSgpOiBbUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+LCBFbGVtZW50U3RhdGVdIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgZm9jdXM6IGZhbHNlLFxuICAgIGhvdmVyOiBmYWxzZSxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICB9KVxuXG4gIGNvbnN0IHNldFJlZjogUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+ID0gdXNlQ2FsbGJhY2soZWxlbWVudCA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSBlbGVtZW50XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWwgPSByZWYuY3VycmVudFxuICAgIGlmICghZWwpIHJldHVyblxuXG4gICAgY29uc3QgcG9pbnRlcmVudGVyID0gKCkgPT4gc2V0U3RhdGUocyA9PiAoey4uLnMsIGhvdmVyOiB0cnVlfSkpXG4gICAgY29uc3QgcG9pbnRlcmxlYXZlID0gKCkgPT4gc2V0U3RhdGUocyA9PiAoey4uLnMsIGhvdmVyOiBmYWxzZX0pKVxuICAgIGNvbnN0IGZvY3VzID0gKCkgPT4gc2V0U3RhdGUocyA9PiAoey4uLnMsIGZvY3VzOiB0cnVlfSkpXG4gICAgY29uc3QgYmx1ciA9ICgpID0+IHNldFN0YXRlKHMgPT4gKHsuLi5zLCBmb2N1czogZmFsc2V9KSlcbiAgICBjb25zdCBwb2ludGVyZG93biA9ICgpID0+IHtcbiAgICAgIHNldFN0YXRlKHMgPT4gKHsuLi5zLCBhY3RpdmU6IHRydWV9KSlcblxuICAgICAgLy8gcG9pbnRlciBldmVudHMgY2FuIGJlIGNhbmNlbGxlZCBkdWUgdG8gd2hpY2ggZWwgd291bGQgbmV2ZXIgcmVjZWl2ZVxuICAgICAgLy8gYSBwb2ludGVydXAgbm9yIHBvaW50ZXJjYW5jZWwgZXZlbnQuIExpc3RlbiBvbiB0aGUgd2luZG93IGZvciB0aG9zZVxuICAgICAgLy8gYWZ0ZXIgd2UgcmVjZWl2ZWQgdGhlIHBvaW50ZXJkb3duIGV2ZW50LCBhbmQgb25seSBjYXRjaCBpdCBvbmNlLiBCdXRcbiAgICAgIC8vIG5vdCB3aXRoIHsgb25jZTogdHJ1ZSB9LCBiZWNhdXNlIHdlIHdhbnQgdGUgcmVtb3ZlIGJvdGggb2YgdGhlbSwgb25jZVxuICAgICAgLy8gb2YgdGhlbSBoYXMgYmVlbiByZWNlaXZlZC5cbiAgICAgIGNvbnN0IHBvaW50ZXJ1cCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUocyA9PiAoey4uLnMsIGFjdGl2ZTogZmFsc2V9KSlcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHBvaW50ZXJ1cClcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCBwb2ludGVydXApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBwb2ludGVydXApXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHBvaW50ZXJ1cClcbiAgICB9XG5cbiAgICBjb25zdCBrZXlkb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSAnRW50ZXInKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzZXRTdGF0ZShzID0+ICh7Li4ucywgYWN0aXZlOiB0cnVlfSkpXG5cbiAgICAgIC8vIHdoZW4gY2xpY2tpbmcgYSBsaW5rLCB0aGUga2V5dXAgZG9lc24ndCBuZWVkIHRvIGNvbWUgZnJvbSB0aGUga2V5ZG93blxuICAgICAgLy8gZWxlbWVudC4gV2UgbGlzdGVuIG9uIHRoZSB3aW5kb3cgaW5zdGVhZCwgYnV0IG9ubHkgb25jZS5cbiAgICAgIGNvbnN0IGtleXVwID0gKCkgPT4gc2V0U3RhdGUocyA9PiAoey4uLnMsIGFjdGl2ZTogZmFsc2V9KSlcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleXVwLCB7b25jZTogdHJ1ZX0pXG4gICAgfVxuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmVudGVyJywgcG9pbnRlcmVudGVyKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHBvaW50ZXJsZWF2ZSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgcG9pbnRlcmRvd24pXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd24pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmVudGVyJywgcG9pbnRlcmVudGVyKVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgcG9pbnRlcmxlYXZlKVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1cylcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyKVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBwb2ludGVyZG93bilcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3Qgc3RhdHVzOiBFbGVtZW50U3RhdGUgPSBzdGF0ZS5hY3RpdmVcbiAgICA/ICdhY3RpdmUnXG4gICAgOiBzdGF0ZS5mb2N1c1xuICAgID8gJ2ZvY3VzJ1xuICAgIDogc3RhdGUuaG92ZXJcbiAgICA/ICdob3ZlcidcbiAgICA6ICdpbml0aWFsJ1xuXG4gIHJldHVybiBbc2V0UmVmLCBzdGF0dXNdXG59XG5cbmV4cG9ydCB7dXNlRWxlbWVudFN0YXRlfVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW50ZXJmYWNlIEdyaWRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgb3ZlcmZsb3c/OiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlXG4gIG5lc3RlZD86IGJvb2xlYW5cbiAgcm93R2FwPzogYm9vbGVhblxuICBmZWF0dXJlZD86IGJvb2xlYW5cbn1cblxuY29uc3QgR3JpZCA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIEdyaWRQcm9wcz4oZnVuY3Rpb24gR3JpZChcbiAge2NoaWxkcmVuLCBjbGFzc05hbWUsIGFzOiBUYWcgPSAnZGl2JywgZmVhdHVyZWQsIG5lc3RlZCwgcm93R2FwfSxcbiAgcmVmLFxuKSB7XG4gIHJldHVybiAoXG4gICAgPFRhZ1xuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ3JlbGF0aXZlJywge1xuICAgICAgICAnbXgtMTB2dyc6ICFuZXN0ZWQsXG4gICAgICAgICd3LWZ1bGwnOiBuZXN0ZWQsXG4gICAgICAgICdweS0xMCBtZDpweS0yNCBsZzpwYi00MCBsZzpwdC0zNic6IGZlYXR1cmVkLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2ZlYXR1cmVkID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgLW14LTV2d1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IG14LWF1dG8gdy1mdWxsIG1heC13LTh4bCBoLWZ1bGwgcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICdyZWxhdGl2ZSBncmlkIGdhcC14LTQgZ3JpZC1jb2xzLTQgbWQ6Z3JpZC1jb2xzLTggbGc6Z2FwLXgtNiBsZzpncmlkLWNvbHMtMTInLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdteC1hdXRvIG1heC13LTd4bCc6ICFuZXN0ZWQsXG4gICAgICAgICAgICAnZ2FwLXktNCBsZzpnYXAteS02Jzogcm93R2FwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L1RhZz5cbiAgKVxufSlcblxuLyoqXG4gKiBVc2UgZm9yIGRldmVsb3BtZW50IG9ubHkhIEl0IHJlbmRlcnMgdGhlIGdyaWQgY29sdW1ucyBhbmQgZ2FwcyBhcyBwYWdlIG92ZXJsYXlcbiAqL1xuZnVuY3Rpb24gR3JpZExpbmVzKCkge1xuICBpZiAoRU5WLk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc8R3JpZExpbmVzIC8+ICBzaG91bGQgb25seSBiZSB1c2VkIGR1cmluZyBkZXZlbG9wbWVudCcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgei0xMCBpbnNldC0wIHBvaW50ZXItZXZlbnRzLW5vbmUgc2VsZWN0LW5vbmVcIj5cbiAgICAgIDxHcmlkPlxuICAgICAgICB7QXJyYXkuZnJvbSh7bGVuZ3RoOiAxMn0pLm1hcCgoXywgaWR4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGgtc2NyZWVuIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIGJnLWJsYWNrIGRhcms6Ymctd2hpdGUgb3BhY2l0eS0xMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgIHtpZHggKyAxfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7R3JpZCwgR3JpZExpbmVzfVxuIiwgImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHtNZHhMaXN0SXRlbX0gZnJvbSAnfi90eXBlcydcbmltcG9ydCB7R3JpZH0gZnJvbSAnLi4vZ3JpZCdcbmltcG9ydCB7QXJ0aWNsZUNhcmR9IGZyb20gJy4uL2FydGljbGUtY2FyZCdcbmltcG9ydCB7SGVhZGVyU2VjdGlvbn0gZnJvbSAnLi9oZWFkZXItc2VjdGlvbidcbmltcG9ydCB7U3BhY2VyfSBmcm9tICcuLi9zcGFjZXInXG5cbmludGVyZmFjZSBCbG9nU2VjdGlvblByb3BzIHtcbiAgYXJ0aWNsZXM6IEFycmF5PE1keExpc3RJdGVtPlxuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgc2hvd0Fycm93QnV0dG9uPzogYm9vbGVhblxufVxuXG5mdW5jdGlvbiBCbG9nU2VjdGlvbih7XG4gIGFydGljbGVzLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHNob3dBcnJvd0J1dHRvbiA9IHRydWUsXG59OiBCbG9nU2VjdGlvblByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXJTZWN0aW9uXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgc3ViVGl0bGU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICBjdGE9e3Nob3dBcnJvd0J1dHRvbiA/ICdTZWUgdGhlIGZ1bGwgYmxvZycgOiB1bmRlZmluZWR9XG4gICAgICAgIGN0YVVybD1cIi9ibG9nXCJcbiAgICAgIC8+XG4gICAgICA8U3BhY2VyIHNpemU9XCIyeHNcIiAvPlxuICAgICAgPEdyaWQgY2xhc3NOYW1lPVwiZ2FwLXktMTZcIj5cbiAgICAgICAge2FydGljbGVzLnNsaWNlKDAsIDMpLm1hcCgoYXJ0aWNsZSwgaWR4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXthcnRpY2xlLnNsdWd9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NvbC1zcGFuLTQnLCB7XG4gICAgICAgICAgICAgICdoaWRkZW4gbGc6YmxvY2snOiBpZHggPj0gMixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnRpY2xlQ2FyZCBhcnRpY2xlPXthcnRpY2xlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQge0Jsb2dTZWN0aW9ufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZW1peCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tICdkYXRlLWZucy9mb3JtYXQnXG5pbXBvcnQgcGFyc2VJU08gZnJvbSAnZGF0ZS1mbnMvcGFyc2VJU08nXG5pbXBvcnQgdHlwZSB7TWR4TGlzdEl0ZW0sIFRlYW19IGZyb20gJ34vdHlwZXMnXG5pbXBvcnQge2dldEltYWdlQnVpbGRlciwgZ2V0SW1nUHJvcHN9IGZyb20gJ34vaW1hZ2VzJ1xuaW1wb3J0IHtIM30gZnJvbSAnLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHtDbGlwYm9hcmRDb3B5QnV0dG9ufSBmcm9tICcuL2NsaXBib2FyZC1jb3B5LWJ1dHRvbidcbi8vIGltcG9ydCB7TWlzc2luZ1NvbWV0aGluZ30gZnJvbSAnLi9raWZzJ1xuaW1wb3J0IHtCbHVycmFibGVJbWFnZX0gZnJvbSAnLi9ibHVycmFibGUtaW1hZ2UnXG5pbXBvcnQge3VzZVJvb3REYXRhfSBmcm9tICd+L3V0aWxzL3VzZS1yb290LWRhdGEnXG4vLyBpbXBvcnQge2dldEJhbm5lckFsdFByb3AsIGdldEJhbm5lclRpdGxlUHJvcH0gZnJvbSAnfi91dGlscy9tZHgnXG5cbmZ1bmN0aW9uIEFydGljbGVDYXJkKHtcbiAgbGVhZGluZ1RlYW0sXG4gIGFydGljbGU6IHtcbiAgICByZWFkVGltZSxcbiAgICBzbHVnLFxuICAgIGZyb250bWF0dGVyLFxuICAgIGZyb250bWF0dGVyOiB7XG4gICAgICBkYXRlID0gZm9ybWF0RGF0ZShuZXcgRGF0ZSgpLCAneXl5eS1NTS1paScpLFxuICAgICAgdGl0bGUgPSAnVW50aXRsZWQgUG9zdCcsXG4gICAgICBiYW5uZXJDbG91ZGluYXJ5SWQsXG4gICAgICBiYW5uZXJCbHVyRGF0YVVybCxcbiAgICB9LFxuICB9LFxufToge1xuICBhcnRpY2xlOiBNZHhMaXN0SXRlbVxuICBsZWFkaW5nVGVhbT86IFRlYW0gfCBudWxsXG59KSB7XG4gIGNvbnN0IHtyZXF1ZXN0SW5mb30gPSB1c2VSb290RGF0YSgpXG4gIGNvbnN0IHBlcm1hbGluayA9IGAke3JlcXVlc3RJbmZvLm9yaWdpbn0vYmxvZy8ke3NsdWd9YFxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAncmVsYXRpdmUgdy1mdWxsJyxcbiAgICAgICAgbGVhZGluZ1RlYW1cbiAgICAgICAgICA/IGBzZXQtY29sb3ItdGVhbS1jdXJyZW50LSR7bGVhZGluZ1RlYW0udG9Mb3dlckNhc2UoKX1gXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8TGlua1xuICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHBlZXIgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgIHRvPXtgL2Jsb2cvJHtzbHVnfWB9XG4gICAgICA+XG4gICAgICAgIHtiYW5uZXJDbG91ZGluYXJ5SWQgPyAoXG4gICAgICAgICAgPEJsdXJyYWJsZUltYWdlXG4gICAgICAgICAgICBrZXk9e2Jhbm5lckNsb3VkaW5hcnlJZH1cbiAgICAgICAgICAgIGJsdXJEYXRhVXJsPXtiYW5uZXJCbHVyRGF0YVVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1oLTQgYXNwZWN0LXctMyByb3VuZGVkLWxnXCJcbiAgICAgICAgICAvLyAgaW1nPXtcbiAgICAgICAgICAvLyAgICA8aW1nXG4gICAgICAgICAgLy8gICAgICB0aXRsZT17ZnJvbnRtYXR0ZXIudGl0bGUgPz8gZ2V0QmFubmVyVGl0bGVQcm9wKGZyb250bWF0dGVyKX1cbiAgICAgICAgICAgICAgICAvLyB7Li4uZ2V0SW1nUHJvcHMoXG4gICAgICAgICAgICAgICAgLy8gICBnZXRJbWFnZUJ1aWxkZXIoXG4gICAgICAgICAgICAgICAgLy8gICAgIGJhbm5lckNsb3VkaW5hcnlJZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgZ2V0QmFubmVyQWx0UHJvcChmcm9udG1hdHRlciksXG4gICAgICAgICAgICAgICAgLy8gICApLFxuICAgICAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aHM6IFsyODAsIDU2MCwgODQwLCAxMTAwLCAxMzAwLCAxNjUwXSxcbiAgICAgICAgICAgICAgICAvLyAgICAgc2l6ZXM6IFtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAnKG1heC13aWR0aDo2MzlweCkgODB2dycsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgJyhtaW4td2lkdGg6NjQwcHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCkgNDB2dycsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgJyhtaW4td2lkdGg6MTAyNHB4KSBhbmQgKG1heC13aWR0aDoxNjIwcHgpIDI1dncnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICc0MjBweCcsXG4gICAgICAgICAgICAgICAgLy8gICAgIF0sXG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zZm9ybWF0aW9uczoge1xuICAgICAgICAgICAgICAgIC8vICAgICAgIGJhY2tncm91bmQ6ICdyZ2I6ZTZlOWVlJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICByZXNpemU6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHR5cGU6ICdmaWxsJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFzcGVjdFJhdGlvOiAnMzo0JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgICAvLyApfVxuICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPVwiZm9jdXMtcmluZyB3LWZ1bGwgcm91bmRlZC1sZyBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgLy8gdGhpcyAgIC8+XG4gICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LWgtNCBhc3BlY3Qtdy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvY3VzLXJpbmcgdy1mdWxsIHJvdW5kZWQtbGcgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgIHsvKiA8TWlzc2luZ1NvbWV0aGluZyBhc3BlY3RSYXRpbz1cIjM6NFwiIC8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtYmx1ZUdyYXktNTAwIHRleHQteGwgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICB7Zm9ybWF0RGF0ZShwYXJzZUlTTyhkYXRlKSwgJ1BQUCcpfSBcdTIwMTQge3JlYWRUaW1lPy50ZXh0ID8/ICdxdWljayByZWFkJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIMyBhcz1cImRpdlwiIGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSDM+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIHtsZWFkaW5nVGVhbSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIHJpZ2h0LTYgdG9wLTYgcC0xIHctNCBoLTQgYmctdGVhbS1jdXJyZW50IHJvdW5kZWQtZnVsbCBsZzpsZWZ0LTZcIiAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8Q2xpcGJvYXJkQ29weUJ1dHRvblxuICAgICAgICB2YWx1ZT17cGVybWFsaW5rfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIGxlZnQtNiB0b3AtNlwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7QXJ0aWNsZUNhcmR9XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDaGVja0ljb259IGZyb20gJy4vaWNvbnMvY2hlY2staWNvbidcbmltcG9ydCB7Q29weUljb259IGZyb20gJy4vaWNvbnMvY29weS1pY29uJ1xuXG5hc3luYyBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodmFsdWU6IHN0cmluZykge1xuICB0cnkge1xuICAgIGlmICgnY2xpcGJvYXJkJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHZhbHVlKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW1lbnQpXG4gICAgZWxlbWVudC5zZWxlY3QoKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgICBlbGVtZW50LnJlbW92ZSgpXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ2xpcGJvYXJkQ29weUJ1dHRvblByb3BzIHtcbiAgdmFsdWU6IHN0cmluZ1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgdmFyaWFudD86ICdyZXNwb25zaXZlJyB8ICdpY29uJ1xufVxuXG5lbnVtIFN0YXRlIHtcbiAgSWRsZSA9ICdpZGxlJyxcbiAgQ29weSA9ICdjb3B5JyxcbiAgQ29waWVkID0gJ2NvcGllZCcsXG59XG5cbmZ1bmN0aW9uIENsaXBib2FyZENvcHlCdXR0b24oe1xuICB2YWx1ZSxcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50ID0gJ3Jlc3BvbnNpdmUnLFxufTogQ2xpcGJvYXJkQ29weUJ1dHRvblByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8U3RhdGU+KFN0YXRlLklkbGUpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB0cmFuc2l0aW9uKCkge1xuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFN0YXRlLkNvcHk6IHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjb3B5VG9DbGlwYm9hcmQodmFsdWUpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NvcGllZCcsIHJlcylcbiAgICAgICAgICBzZXRTdGF0ZShTdGF0ZS5Db3BpZWQpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFN0YXRlLkNvcGllZDoge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUoU3RhdGUuSWRsZSlcbiAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICB2b2lkIHRyYW5zaXRpb24oKVxuICB9LCBbc3RhdGUsIHZhbHVlXSlcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKFN0YXRlLkNvcHkpfVxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAncC0zIHRleHQtYmxhY2sgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1sZyBmb250LW1lZGl1bSBiZy13aGl0ZSByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBzaGFkb3cgaG92ZXI6c2hhZG93LW1kIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHBlZXItaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6b3BhY2l0eS0xMDAgcGVlci1mb2N1czpvcGFjaXR5LTEwMCBmb2N1czpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uIGZvY3VzOnJpbmctNCBob3ZlcjpyaW5nLTQgcmluZy10ZWFtLWN1cnJlbnQgbGc6b3BhY2l0eS0wJyxcbiAgICAgICAgeydsZzpweC04IGxnOnB5LTQnOiB2YXJpYW50ID09PSAncmVzcG9uc2l2ZSd9LFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeCgnaGlkZGVuJywgeydsZzppbmxpbmUnOiB2YXJpYW50ID09PSAncmVzcG9uc2l2ZSd9KX0+XG4gICAgICAgIHtzdGF0ZSA9PT0gU3RhdGUuQ29waWVkID8gJ0NvcGllZCB0byBjbGlwYm9hcmQnIDogJ0NsaWNrIHRvIGNvcHkgdXJsJ31cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeCgnaW5saW5lJywgeydsZzpoaWRkZW4nOiB2YXJpYW50ID09PSAncmVzcG9uc2l2ZSd9KX0+XG4gICAgICAgIHtzdGF0ZSA9PT0gU3RhdGUuQ29waWVkID8gPENoZWNrSWNvbiAvPiA6IDxDb3B5SWNvbiAvPn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQge0NsaXBib2FyZENvcHlCdXR0b259XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIENoZWNrSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgZD1cIk01Ljc1IDEyLjg2NjVMOC4zMzk5NSAxNi40MTM4QzkuMTUxNzEgMTcuNTI1NiAxMC44MTc5IDE3LjUwNCAxMS42MDA2IDE2LjM3MTVMMTguMjUgNi43NVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCB7Q2hlY2tJY29ufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBDb3B5SWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgZD1cIk02LjUgMTUuMjVWMTUuMjVDNS41MzM1IDE1LjI1IDQuNzUgMTQuNDY2NSA0Ljc1IDEzLjVWNi43NUM0Ljc1IDUuNjQ1NDMgNS42NDU0MyA0Ljc1IDYuNzUgNC43NUgxMy41QzE0LjQ2NjUgNC43NSAxNS4yNSA1LjUzMzUgMTUuMjUgNi41VjYuNVwiXG4gICAgICAvPlxuICAgICAgPHJlY3RcbiAgICAgICAgd2lkdGg9XCIxMC41XCJcbiAgICAgICAgaGVpZ2h0PVwiMTAuNVwiXG4gICAgICAgIHg9XCI4Ljc1XCJcbiAgICAgICAgeT1cIjguNzVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICByeD1cIjJcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQge0NvcHlJY29ufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7dXNlU1NSTGF5b3V0RWZmZWN0fSBmcm9tICd+L3V0aWxzL21pc2MnXG5cbmZ1bmN0aW9uIEJsdXJyYWJsZUltYWdlKHtcbiAgaW1nLFxuICBibHVyRGF0YVVybCxcbiAgLi4ucmVzdFxufToge1xuICBpbWc6IEpTWC5FbGVtZW50ICZcbiAgICBSZWFjdC5SZWFjdEVsZW1lbnQ8UmVhY3QuSW1nSFRNTEF0dHJpYnV0ZXM8SFRNTEltYWdlRWxlbWVudD4+XG4gIGJsdXJEYXRhVXJsPzogc3RyaW5nXG59ICYgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+KSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBqc0ltZ0VsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpXG5cbiAgLy8gbWFrZSB0aGlzIGhhcHBlbiBhc2FwXG4gIC8vIGlmIGl0J3MgYWxyYWR5IGxvYWRlZCwgZG9uJ3QgYm90aGVyIGZhZGluZyBpdCBpbi5cbiAgdXNlU1NSTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoanNJbWdFbFJlZi5jdXJyZW50Py5jb21wbGV0ZSkgc2V0VmlzaWJsZSh0cnVlKVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghanNJbWdFbFJlZi5jdXJyZW50KSByZXR1cm5cbiAgICBpZiAoanNJbWdFbFJlZi5jdXJyZW50LmNvbXBsZXRlKSByZXR1cm5cblxuICAgIGxldCBjdXJyZW50ID0gdHJ1ZVxuICAgIGpzSW1nRWxSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgaWYgKCFqc0ltZ0VsUmVmLmN1cnJlbnQgfHwgIWN1cnJlbnQpIHJldHVyblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSlcbiAgICAgIH0sIDApXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjdXJyZW50ID0gZmFsc2VcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGpzSW1nRWwgPSBSZWFjdC5jbG9uZUVsZW1lbnQoaW1nLCB7XG4gICAgcmVmOiBqc0ltZ0VsUmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChpbWcucHJvcHMuY2xhc3NOYW1lLCAndHJhbnNpdGlvbi1vcGFjaXR5Jywge1xuICAgICAgJ29wYWNpdHktMCc6ICF2aXNpYmxlLFxuICAgIH0pLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucmVzdH0+XG4gICAgICB7Ymx1ckRhdGFVcmwgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAga2V5PXtibHVyRGF0YVVybH1cbiAgICAgICAgICAgIHNyYz17Ymx1ckRhdGFVcmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ltZy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBhbHQ9e2ltZy5wcm9wcy5hbHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChpbWcucHJvcHMuY2xhc3NOYW1lLCAnYmFja2Ryb3AtYmx1ci14bCcpfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2pzSW1nRWx9XG4gICAgICA8bm9zY3JpcHQ+e2ltZ308L25vc2NyaXB0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7Qmx1cnJhYmxlSW1hZ2V9XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7SGVhZGVyc0Z1bmN0aW9uLCBMaW5rUHJvcHN9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHtOb25OdWxsUHJvcGVydGllcywgVXNlcn0gZnJvbSAnfi90eXBlcydcbi8vaW1wb3J0IHtUZWFtfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgbWQ1IGZyb20gJ21kNS1oYXNoJ1xuaW1wb3J0IHtpbWFnZXN9IGZyb20gJy4uL2ltYWdlcydcbi8vaW1wb3J0IHR5cGUge2dldEVudn0gZnJvbSAnLi9lbnYuc2VydmVyJ1xuXG5cbmNvbnN0IGRlZmF1bHRBdmF0YXJTaXplID0gMTI4XG5mdW5jdGlvbiBnZXRBdmF0YXIoXG4gIGVtYWlsOiBzdHJpbmcsXG4gIHtcbiAgICBzaXplID0gZGVmYXVsdEF2YXRhclNpemUsXG4gICAgZmFsbGJhY2sgPSBpbWFnZXMuc3VuaWxQcm9maWxlKHtyZXNpemU6IHt3aWR0aDogc2l6ZX19KSxcbiAgICBvcmlnaW4sXG4gIH06IHtzaXplPzogbnVtYmVyOyBmYWxsYmFjaz86IHN0cmluZyB8IG51bGw7IG9yaWdpbj86IHN0cmluZ30gPSB7fSxcbikge1xuICBjb25zdCBoYXNoID0gbWQ1KGVtYWlsKVxuICBjb25zdCB1cmwgPSBuZXcgVVJMKGBodHRwczovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLyR7aGFzaH1gKVxuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc2l6ZScsIFN0cmluZyhzaXplKSlcbiAgaWYgKGZhbGxiYWNrKSB7XG4gICAgaWYgKG9yaWdpbiAmJiBmYWxsYmFjay5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGZhbGxiYWNrID0gYCR7b3JpZ2lufSR7ZmFsbGJhY2t9YFxuICAgIH1cbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnZGVmYXVsdCcsIGZhbGxiYWNrKVxuICB9XG4gIHJldHVybiB1cmwudG9TdHJpbmcoKVxufVxuXG5cbmZ1bmN0aW9uIGdldEF2YXRhckZvclVzZXIoXG4gIHtlbWFpbCwgdGVhbSwgZmlyc3ROYW1lfTogUGljazxVc2VyLCAnZW1haWwnIHwgJ3RlYW0nIHwgJ2ZpcnN0TmFtZSc+LFxuICB7c2l6ZSA9IGRlZmF1bHRBdmF0YXJTaXplLCBvcmlnaW59OiB7c2l6ZT86IG51bWJlcjsgb3JpZ2luPzogc3RyaW5nfSA9IHt9LFxuKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiBnZXRBdmF0YXIoZW1haWwsIHtcbiAgICAgIC8vZmFsbGJhY2s6IGF2YXRhckZhbGxiYWNrc1t0ZWFtXShzaXplKSxcbiAgICAgIHNpemUsXG4gICAgICBvcmlnaW4sXG4gICAgfSksXG4gICAgYWx0OiBmaXJzdE5hbWUsXG4gIH1cbn1cblxuXG5cbmNvbnN0IHVzZVNTUkxheW91dEVmZmVjdCA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gKCkgPT4ge30gOiBSZWFjdC51c2VMYXlvdXRFZmZlY3RcblxudHlwZSBBbmNob3JQcm9wcyA9IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICBSZWFjdC5BbmNob3JIVE1MQXR0cmlidXRlczxIVE1MQW5jaG9yRWxlbWVudD4sXG4gIEhUTUxBbmNob3JFbGVtZW50XG4+XG5cbmNvbnN0IEFuY2hvck9yTGluayA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxBbmNob3JFbGVtZW50LFxuICBBbmNob3JQcm9wcyAmIHtcbiAgICByZWxvYWQ/OiBib29sZWFuXG4gICAgdG8/OiBMaW5rUHJvcHNbJ3RvJ11cbiAgICBwcmVmZXRjaD86IExpbmtQcm9wc1sncHJlZmV0Y2gnXVxuICB9XG4+KGZ1bmN0aW9uIEFuY2hvck9yTGluayhwcm9wcywgcmVmKSB7XG4gIGNvbnN0IHtcbiAgICB0byxcbiAgICBocmVmLFxuICAgIGRvd25sb2FkLFxuICAgIHJlbG9hZCA9IGZhbHNlLFxuICAgIHByZWZldGNoLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzXG4gIGxldCB0b1VybCA9ICcnXG4gIGxldCBzaG91bGRVc2VyUmVndWxhckFuY2hvciA9IHJlbG9hZCB8fCBkb3dubG9hZFxuXG4gIGlmICghc2hvdWxkVXNlclJlZ3VsYXJBbmNob3IgJiYgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgc2hvdWxkVXNlclJlZ3VsYXJBbmNob3IgPSBocmVmLmluY2x1ZGVzKCc6JykgfHwgaHJlZi5zdGFydHNXaXRoKCcjJylcbiAgfVxuXG4gIGlmICghc2hvdWxkVXNlclJlZ3VsYXJBbmNob3IgJiYgdHlwZW9mIHRvID09PSAnc3RyaW5nJykge1xuICAgIHRvVXJsID0gdG9cbiAgICBzaG91bGRVc2VyUmVndWxhckFuY2hvciA9IHRvLmluY2x1ZGVzKCc6JylcbiAgfVxuXG4gIGlmICghc2hvdWxkVXNlclJlZ3VsYXJBbmNob3IgJiYgdHlwZW9mIHRvID09PSAnb2JqZWN0Jykge1xuICAgIHRvVXJsID0gYCR7dG8ucGF0aG5hbWUgPz8gJyd9JHt0by5oYXNoID8gYCMke3RvLmhhc2h9YCA6ICcnfSR7XG4gICAgICB0by5zZWFyY2ggPyBgPyR7dG8uc2VhcmNofWAgOiAnJ1xuICAgIH1gXG4gICAgc2hvdWxkVXNlclJlZ3VsYXJBbmNob3IgPSB0by5wYXRobmFtZT8uaW5jbHVkZXMoJzonKVxuICB9XG5cbiAgaWYgKHNob3VsZFVzZXJSZWd1bGFyQW5jaG9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIHsuLi5yZXN0fSBkb3dubG9hZD17ZG93bmxvYWR9IGhyZWY9e2hyZWYgPz8gdG9Vcmx9IHJlZj17cmVmfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgcHJlZmV0Y2g9e3ByZWZldGNofSB0bz17dG8gPz8gaHJlZiA/PyAnJ30gey4uLnJlc3R9IHJlZj17cmVmfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgfVxufSlcblxuZnVuY3Rpb24gZm9ybWF0VGltZShzZWNvbmRzOiBudW1iZXIpIHtcbiAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KGRhdGVGbnMuYWRkU2Vjb25kcyhuZXcgRGF0ZSgwKSwgc2Vjb25kcyksICdtbTpzcycpXG59XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9IChudW06IG51bWJlcikgPT4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KG51bSlcblxuZnVuY3Rpb24gZm9ybWF0QWJicmV2aWF0ZWROdW1iZXIobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIG51bSA8IDFfMDAwXG4gICAgPyBmb3JtYXROdW1iZXIobnVtKVxuICAgIDogbnVtIDwgMV8wMDBfMDAwXG4gICAgPyBgJHtmb3JtYXROdW1iZXIoTnVtYmVyKChudW0gLyAxXzAwMCkudG9GaXhlZCgyKSkpfWtgXG4gICAgOiBudW0gPCAxXzAwMF8wMDBfMDAwXG4gICAgPyBgJHtmb3JtYXROdW1iZXIoTnVtYmVyKChudW0gLyAxXzAwMF8wMDApLnRvRml4ZWQoMikpKX1tYFxuICAgIDogbnVtIDwgMV8wMDBfMDAwXzAwMF8wMDBcbiAgICA/IGAke2Zvcm1hdE51bWJlcihOdW1iZXIoKG51bSAvIDFfMDAwXzAwMF8wMDApLnRvRml4ZWQoMikpKX1iYFxuICAgIDogJ2EgbG90J1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICByZXR1cm4gZGF0ZUZucy5mb3JtYXQoXG4gICAgZGF0ZUZucy5hZGQoZGF0ZUZucy5wYXJzZUlTTyhkYXRlU3RyaW5nKSwge1xuICAgICAgbWludXRlczogbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLFxuICAgIH0pLFxuICAgICdQUFAnLFxuICApXG59XG5cbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcjogdW5rbm93bikge1xuICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykgcmV0dXJuIGVycm9yXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3IubWVzc2FnZVxuICByZXR1cm4gJ1Vua25vd24gRXJyb3InXG59XG5cbmZ1bmN0aW9uIGdldEVycm9yU3RhY2soZXJyb3I6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHJldHVybiBlcnJvclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yLnN0YWNrXG4gIHJldHVybiAnVW5rbm93biBFcnJvcidcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uTnVsbDxUeXBlIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgbnVsbCB8IHVuZGVmaW5lZCB8IHVua25vd24+PihcbiAgb2JqOiBUeXBlLFxuKTogTm9uTnVsbFByb3BlcnRpZXM8VHlwZT4ge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgIGFzc2VydE5vbk51bGwodmFsLCBgVGhlIHZhbHVlIG9mICR7a2V5fSBpcyBudWxsIGJ1dCBpdCBzaG91bGQgbm90IGJlLmApXG4gIH1cbiAgcmV0dXJuIG9iaiBhcyBOb25OdWxsUHJvcGVydGllczxUeXBlPlxufVxuXG5mdW5jdGlvbiB0eXBlZEJvb2xlYW48VD4oXG4gIHZhbHVlOiBULFxuKTogdmFsdWUgaXMgRXhjbHVkZTxULCAnJyB8IDAgfCBmYWxzZSB8IG51bGwgfCB1bmRlZmluZWQ+IHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG59XG5cbmZ1bmN0aW9uIGFzc2VydE5vbk51bGw8UG9zc2libGVOdWxsVHlwZT4oXG4gIHBvc3NpYmxlTnVsbDogUG9zc2libGVOdWxsVHlwZSxcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcsXG4pOiBhc3NlcnRzIHBvc3NpYmxlTnVsbCBpcyBFeGNsdWRlPFBvc3NpYmxlTnVsbFR5cGUsIG51bGwgfCB1bmRlZmluZWQ+IHtcbiAgaWYgKHBvc3NpYmxlTnVsbCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKVxufVxuXG5mdW5jdGlvbiBnZXRSZXF1aXJlZEVudlZhckZyb21PYmooXG4gIG9iajogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgdW5kZWZpbmVkPixcbiAga2V5OiBzdHJpbmcsXG4gIGRldlZhbHVlOiBzdHJpbmcgPSBgJHtrZXl9LWRldi12YWx1ZWAsXG4pIHtcbiAgbGV0IHZhbHVlID0gZGV2VmFsdWVcbiAgY29uc3QgZW52VmFsID0gb2JqW2tleV1cbiAgaWYgKGVudlZhbCkge1xuICAgIHZhbHVlID0gZW52VmFsXG4gIH0gZWxzZSBpZiAob2JqLk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7a2V5fSBpcyBhIHJlcXVpcmVkIGVudiB2YXJpYWJsZWApXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIGdldFJlcXVpcmVkU2VydmVyRW52VmFyKGtleTogc3RyaW5nLCBkZXZWYWx1ZT86IHN0cmluZykge1xuICByZXR1cm4gZ2V0UmVxdWlyZWRFbnZWYXJGcm9tT2JqKHByb2Nlc3MuZW52LCBrZXksIGRldlZhbHVlKVxufVxuXG4vLyBmdW5jdGlvbiBnZXRSZXF1aXJlZEdsb2JhbEVudlZhcihcbi8vICAga2V5OiBrZXlvZiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRFbnY+LFxuLy8gICBkZXZWYWx1ZT86IHN0cmluZyxcbi8vICkge1xuLy8gICByZXR1cm4gZ2V0UmVxdWlyZWRFbnZWYXJGcm9tT2JqKEVOViwga2V5LCBkZXZWYWx1ZSlcbi8vIH1cblxuZnVuY3Rpb24gZ2V0RG9tYWluVXJsKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgaG9zdCA9XG4gICAgcmVxdWVzdC5oZWFkZXJzLmdldCgnWC1Gb3J3YXJkZWQtSG9zdCcpID8/IHJlcXVlc3QuaGVhZGVycy5nZXQoJ2hvc3QnKVxuICBpZiAoIWhvc3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkZXRlcm1pbmUgZG9tYWluIFVSTC4nKVxuICB9XG4gIGNvbnN0IHByb3RvY29sID0gaG9zdC5pbmNsdWRlcygnbG9jYWxob3N0JykgPyAnaHR0cCcgOiAnaHR0cHMnXG4gIHJldHVybiBgJHtwcm90b2NvbH06Ly8ke2hvc3R9YFxufVxuXG5mdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHM6IHN0cmluZykge1xuICByZXR1cm4gcy5lbmRzV2l0aCgnLycpID8gcy5zbGljZSgwLCAtMSkgOiBzXG59XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlVcmwocmVxdWVzdEluZm8/OiB7b3JpZ2luOiBzdHJpbmc7IHBhdGg6IHN0cmluZ30pIHtcbiAgcmV0dXJuIGdldFVybChyZXF1ZXN0SW5mbykucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCAnJylcbn1cblxuZnVuY3Rpb24gZ2V0VXJsKHJlcXVlc3RJbmZvPzoge29yaWdpbjogc3RyaW5nOyBwYXRoOiBzdHJpbmd9KSB7XG4gIHJldHVybiByZW1vdmVUcmFpbGluZ1NsYXNoKFxuICAgIGAke3JlcXVlc3RJbmZvPy5vcmlnaW4gPz8gJ2h0dHBzOi8vc3VuaWwtc2FtdWVsLmNvbSd9JHtcbiAgICAgIHJlcXVlc3RJbmZvPy5wYXRoID8/ICcnXG4gICAgfWAsXG4gIClcbn1cblxuZnVuY3Rpb24gdG9CYXNlNjQoc3RyaW5nOiBzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHN0cmluZykudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdpbmRvdy5idG9hKHN0cmluZylcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VVcGRhdGVRdWVyeVN0cmluZ1ZhbHVlV2l0aG91dE5hdmlnYXRpb24oXG4gIHF1ZXJ5S2V5OiBzdHJpbmcsXG4gIHF1ZXJ5VmFsdWU6IHN0cmluZyxcbikge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgY29uc3Qgb2xkUXVlcnkgPSBjdXJyZW50U2VhcmNoUGFyYW1zLmdldChxdWVyeUtleSkgPz8gJydcbiAgICBpZiAocXVlcnlWYWx1ZSA9PT0gb2xkUXVlcnkpIHJldHVyblxuXG4gICAgaWYgKHF1ZXJ5VmFsdWUpIHtcbiAgICAgIGN1cnJlbnRTZWFyY2hQYXJhbXMuc2V0KHF1ZXJ5S2V5LCBxdWVyeVZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50U2VhcmNoUGFyYW1zLmRlbGV0ZShxdWVyeUtleSlcbiAgICB9XG4gICAgY29uc3QgbmV3VXJsID0gW3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgY3VycmVudFNlYXJjaFBhcmFtcy50b1N0cmluZygpXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJz8nKVxuICAgIC8vIGFscmlnaHQsIGxldCdzIHRhbGsgYWJvdXQgdGhpcy4uLlxuICAgIC8vIE5vcm1hbGx5IHdpdGggcmVtaXgsIHlvdSdkIHVwZGF0ZSB0aGUgcGFyYW1zIHZpYSB1c2VTZWFyY2hQYXJhbXMgZnJvbSByZWFjdC1yb3V0ZXItZG9tXG4gICAgLy8gYW5kIHVwZGF0aW5nIHRoZSBzZWFyY2ggcGFyYW1zIHdpbGwgdHJpZ2dlciB0aGUgc2VhcmNoIHRvIHVwZGF0ZSBmb3IgeW91LlxuICAgIC8vIEhvd2V2ZXIsIGl0IGFsc28gdHJpZ2dlcnMgYSBuYXZpZ2F0aW9uIHRvIHRoZSBuZXcgdXJsLCB3aGljaCB3aWxsIHRyaWdnZXJcbiAgICAvLyB0aGUgbG9hZGVyIHRvIHJ1biB3aGljaCB3ZSBkbyBub3Qgd2FudCBiZWNhdXNlIGFsbCBvdXIgZGF0YSBpcyBhbHJlYWR5XG4gICAgLy8gb24gdGhlIGNsaWVudCBhbmQgd2UncmUganVzdCBkb2luZyBjbGllbnQtc2lkZSBmaWx0ZXJpbmcgb2YgZGF0YSB3ZVxuICAgIC8vIGFscmVhZHkgaGF2ZS4gU28gd2UgbWFudWFsbHkgY2FsbCBgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlYCB0byBhdm9pZFxuICAgIC8vIHRoZSByb3V0ZXIgZnJvbSB0cmlnZ2VyaW5nIHRoZSBsb2FkZXIuXG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsICcnLCBuZXdVcmwpXG4gIH0sIFtxdWVyeUtleSwgcXVlcnlWYWx1ZV0pXG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlPENhbGxiYWNrIGV4dGVuZHMgKC4uLmFyZ3M6IEFycmF5PHVua25vd24+KSA9PiB2b2lkPihcbiAgZm46IENhbGxiYWNrLFxuICBkZWxheTogbnVtYmVyLFxuKSB7XG4gIGxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbFxuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8Q2FsbGJhY2s+KSA9PiB7XG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZuKC4uLmFyZ3MpXG4gICAgfSwgZGVsYXkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlRGVib3VuY2U8Q2FsbGJhY2sgZXh0ZW5kcyAoLi4uYXJnczogQXJyYXk8dW5rbm93bj4pID0+IHVua25vd24+KFxuICBjYWxsYmFjazogQ2FsbGJhY2ssXG4gIGRlbGF5OiBudW1iZXIsXG4pIHtcbiAgY29uc3QgY2FsbGJhY2tSZWYgPSBSZWFjdC51c2VSZWYoY2FsbGJhY2spXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2FsbGJhY2tSZWYuY3VycmVudCA9IGNhbGxiYWNrXG4gIH0pXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IGRlYm91bmNlKCguLi5hcmdzKSA9PiBjYWxsYmFja1JlZi5jdXJyZW50KC4uLmFyZ3MpLCBkZWxheSksXG4gICAgW2RlbGF5XSxcbiAgKVxufVxuXG5jb25zdCByZXVzZVVzZWZ1bExvYWRlckhlYWRlcnM6IEhlYWRlcnNGdW5jdGlvbiA9ICh7bG9hZGVySGVhZGVyc30pID0+IHtcbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgY29uc3QgdXNlZnVsSGVhZGVycyA9IFsnQ2FjaGUtQ29udHJvbCcsICdWYXJ5JywgJ1NlcnZlci1UaW1pbmcnXVxuICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgdXNlZnVsSGVhZGVycykge1xuICAgIGlmIChsb2FkZXJIZWFkZXJzLmhhcyhoZWFkZXJOYW1lKSkge1xuICAgICAgaGVhZGVycy5zZXQoaGVhZGVyTmFtZSwgbG9hZGVySGVhZGVycy5nZXQoaGVhZGVyTmFtZSkhKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoZWFkZXJzXG59XG5cbmZ1bmN0aW9uIGNhbGxBbGw8QXJncyBleHRlbmRzIEFycmF5PHVua25vd24+PihcbiAgLi4uZm5zOiBBcnJheTwoKC4uLmFyZ3M6IEFyZ3MpID0+IHVua25vd24pIHwgdW5kZWZpbmVkPlxuKSB7XG4gIHJldHVybiAoLi4uYXJnczogQXJncykgPT4gZm5zLmZvckVhY2goZm4gPT4gZm4/LiguLi5hcmdzKSlcbn1cblxuZnVuY3Rpb24gdXNlRG91YmxlQ2hlY2soKSB7XG4gIGNvbnN0IFtkb3VibGVDaGVjaywgc2V0RG91YmxlQ2hlY2tdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gZ2V0QnV0dG9uUHJvcHMocHJvcHM/OiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2J1dHRvbiddKSB7XG4gICAgY29uc3Qgb25CbHVyOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2J1dHRvbiddWydvbkJsdXInXSA9ICgpID0+XG4gICAgICBzZXREb3VibGVDaGVjayhmYWxzZSlcblxuICAgIGNvbnN0IG9uQ2xpY2s6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snYnV0dG9uJ11bJ29uQ2xpY2snXSA9IGRvdWJsZUNoZWNrXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBzZXREb3VibGVDaGVjayh0cnVlKVxuICAgICAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJvcHMsXG4gICAgICBvbkJsdXI6IGNhbGxBbGwob25CbHVyLCBwcm9wcz8ub25CbHVyKSxcbiAgICAgIG9uQ2xpY2s6IGNhbGxBbGwob25DbGljaywgcHJvcHM/Lm9uQ2xpY2spLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7ZG91YmxlQ2hlY2ssIGdldEJ1dHRvblByb3BzfVxufVxuXG5leHBvcnQge1xuICBnZXRBdmF0YXIsXG4gIGdldEF2YXRhckZvclVzZXIsXG4gIEFuY2hvck9yTGluayxcbiAgZ2V0RXJyb3JNZXNzYWdlLFxuICBnZXRFcnJvclN0YWNrLFxuICBnZXROb25OdWxsLFxuICBhc3NlcnROb25OdWxsLFxuICB1c2VVcGRhdGVRdWVyeVN0cmluZ1ZhbHVlV2l0aG91dE5hdmlnYXRpb24sXG4gIHVzZVNTUkxheW91dEVmZmVjdCxcbiAgdXNlRG91YmxlQ2hlY2ssXG4gIHVzZURlYm91bmNlLFxuICB0eXBlZEJvb2xlYW4sXG4gIGdldFJlcXVpcmVkU2VydmVyRW52VmFyLFxuICAvL2dldFJlcXVpcmVkR2xvYmFsRW52VmFyLFxuICBnZXREb21haW5VcmwsXG4gIGdldFVybCxcbiAgZ2V0RGlzcGxheVVybCxcbiAgdG9CYXNlNjQsXG4gIHJlbW92ZVRyYWlsaW5nU2xhc2gsXG4gIHJldXNlVXNlZnVsTG9hZGVySGVhZGVycyxcblxuICBmb3JtYXREYXRlLFxuICBmb3JtYXRUaW1lLFxuICBmb3JtYXROdW1iZXIsXG4gIGZvcm1hdEFiYnJldmlhdGVkTnVtYmVyLFxufVxuZXhwb3J0IHtsaXN0aWZ5fSBmcm9tICcuL2xpc3RpZnknXG4iLCAiLy8gdGhpcyBpcyBuZWVkZWQgYnkgdGhpbmdzIHRoZSByb290IG5lZWRzLCBzbyB0byBhdm9pZCBjaXJjdWxhciBkZXBzIHdlIGhhdmUgdG9cbi8vIHB1dCBpdCBpbiBpdHMgb3duIGZpbGUgd2hpY2ggaXMgc2lsbHkgSSBrbm93Li4uXG5cbmltcG9ydCB7dXNlTWF0Y2hMb2FkZXJEYXRhfSBmcm9tICcuL3Byb3ZpZGVycydcbmltcG9ydCB0eXBlIHtMb2FkZXJEYXRhfSBmcm9tICcuLi9yb290J1xuaW1wb3J0IHtoYW5kbGV9IGZyb20gJy4uL3Jvb3QnXG5cbmV4cG9ydCBjb25zdCB1c2VSb290RGF0YSA9ICgpID0+IHVzZU1hdGNoTG9hZGVyRGF0YTxMb2FkZXJEYXRhPihoYW5kbGUuaWQpXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcbiAgY29uc3Qge3VzZXJ9ID0gdXNlUm9vdERhdGEoKVxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcignVXNlciBpcyByZXF1aXJlZCB3aGVuIHVzaW5nIHVzZVVzZXInKVxuICByZXR1cm4gdXNlclxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VNYXRjaGVzfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHtTVlNIYW5kbGV9IGZyb20gJ34vdHlwZXMnXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZUNvbnRleHQ8Q29udGV4dFR5cGU+KG5hbWU6IHN0cmluZykge1xuICBjb25zdCBkZWZhdWx0VmFsdWUgPSBTeW1ib2woYERlZmF1bHQgJHtuYW1lfSBjb250ZXh0IHZhbHVlYClcbiAgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFR5cGUgfCBudWxsIHwgdHlwZW9mIGRlZmF1bHRWYWx1ZT4oXG4gICAgZGVmYXVsdFZhbHVlLFxuICApXG4gIENvbnRleHQuZGlzcGxheU5hbWUgPSBuYW1lXG5cbiAgZnVuY3Rpb24gdXNlVmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpXG4gICAgaWYgKHZhbHVlID09PSBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlJHtuYW1lfSBtdXN0IGJlIHVzZWQgd2l0aGluICR7bmFtZX1Qcm92aWRlcmApXG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5vIHZhbHVlIGluICR7bmFtZX1Qcm92aWRlciBjb250ZXh0LiBJZiB0aGUgdmFsdWUgaXMgb3B0aW9uYWwgaW4gdGhpcyBzaXR1YXRpb24sIHRyeSB1c2VPcHRpb25hbCR7bmFtZX0gaW5zdGVhZCBvZiB1c2Uke25hbWV9YCxcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiB1c2VPcHRpb25hbFZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KVxuICAgIGlmICh2YWx1ZSA9PT0gZGVmYXVsdFZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZU9wdGlvbmFsJHtuYW1lfSBtdXN0IGJlIHVzZWQgd2l0aGluICR7bmFtZX1Qcm92aWRlcmApXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHtQcm92aWRlcjogQ29udGV4dC5Qcm92aWRlciwgdXNlVmFsdWUsIHVzZU9wdGlvbmFsVmFsdWV9XG59XG5cbnR5cGUgQ2hhdHNFcGlzb2RlVUlTdGF0ZSA9IHtcbiAgc29ydE9yZGVyOiAnZGVzYycgfCAnYXNjJ1xufVxuY29uc3Qge1xuICBQcm92aWRlcjogQ2hhdHNFcGlzb2RlVUlTdGF0ZVByb3ZpZGVyLFxuICB1c2VWYWx1ZTogdXNlQ2hhdHNFcGlzb2RlVUlTdGF0ZSxcbn0gPSBjcmVhdGVTaW1wbGVDb250ZXh0PENoYXRzRXBpc29kZVVJU3RhdGU+KCdDaGF0c0VwaXNvZGVVSVN0YXRlJylcblxuZnVuY3Rpb24gdXNlTWF0Y2hMb2FkZXJEYXRhPExvYWRlckRhdGE+KGhhbmRsZUlkOiBzdHJpbmcpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKVxuICBjb25zdCBtYXRjaCA9IG1hdGNoZXMuZmluZChcbiAgICAoe2hhbmRsZX0pID0+IChoYW5kbGUgYXMgU1ZTSGFuZGxlIHwgdW5kZWZpbmVkKT8uaWQgPT09IGhhbmRsZUlkLFxuICApXG4gIGlmICghbWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGFjdGl2ZSByb3V0ZSBoYXMgYSBoYW5kbGUgSUQgb2YgJHtoYW5kbGVJZH1gKVxuICB9XG4gIHJldHVybiBtYXRjaC5kYXRhIGFzIExvYWRlckRhdGFcbn1cbmZ1bmN0aW9uIHVzZU9wdGlvbmFsTWF0Y2hMb2FkZXJEYXRhPExvYWRlckRhdGE+KGhhbmRsZUlkOiBzdHJpbmcpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKVxuICByZXR1cm4gbWF0Y2hlcy5maW5kKFxuICAgICh7aGFuZGxlfSkgPT4gKGhhbmRsZSBhcyBTVlNIYW5kbGUgfCB1bmRlZmluZWQpPy5pZCA9PT0gaGFuZGxlSWQsXG4gICk/LmRhdGEgYXMgTG9hZGVyRGF0YSB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQge1xuICBjcmVhdGVTaW1wbGVDb250ZXh0LFxuICBDaGF0c0VwaXNvZGVVSVN0YXRlUHJvdmlkZXIsXG4gIHVzZUNoYXRzRXBpc29kZVVJU3RhdGUsXG4gIHVzZU1hdGNoTG9hZGVyRGF0YSxcbiAgdXNlT3B0aW9uYWxNYXRjaExvYWRlckRhdGEsXG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvY2F0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHtMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIEhlYWRlcnNGdW5jdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge0Vycm9yUGFnZX0gZnJvbSAnLi9jb21wb25lbnRzL2Vycm9ycydcbmltcG9ydCB0eXBlIHtBd2FpdCwgU1ZTSGFuZGxlLCBVc2VyfSBmcm9tICd+L3R5cGVzJ1xuaW1wb3J0IHtBcnJvd0xpbmt9IGZyb20gJy4vY29tcG9uZW50cy9hcnJvdy1idXR0b24nXG5cbmV4cG9ydCBjb25zdCBoYW5kbGU6IFNWU0hhbmRsZSAmIHtpZDogc3RyaW5nfSA9IHtcbiAgaWQ6ICdyb290Jyxcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cblxuXG5cblxuXG5cblxuXG4vLyBiZXN0IGVmZm9ydCwgbGFzdCBkaXRjaCBlcnJvciBib3VuZGFyeS4gVGhpcyBzaG91bGQgb25seSBjYXRjaCByb290IGVycm9yc1xuLy8gYWxsIG90aGVyIGVycm9ycyBzaG91bGQgYmUgY2F1Z2h0IGJ5IHRoZSBpbmRleCByb3V0ZSB3aGljaCB3aWxsIGluY2x1ZGVcbi8vIHRoZSBmb290ZXIgYW5kIHN0dWZmLCB3aGljaCBpcyBtdWNoIGJldHRlci5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHtlcnJvcn06IHtlcnJvcjogRXJyb3J9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImRhcmtcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+T2ggbm8uLi48L3RpdGxlPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImRhcms6YmctZ3JheS05MDAgYmctd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIj5cbiAgICAgICAgPEVycm9yUGFnZVxuICAgICAgICAgIGhlcm9Qcm9wcz17e1xuICAgICAgICAgICAgdGl0bGU6ICc1MDAgLSBPaCBubywgc29tZXRoaW5nIGRpZCBub3QgZ28gd2VsbC4nLFxuICAgICAgICAgICAgc3VidGl0bGU6IGBcIiR7bG9jYXRpb24ucGF0aG5hbWV9XCIgaXMgY3VycmVudGx5IG5vdCB3b3JraW5nLiBTbyBzb3JyeS5gLFxuICAgICAgICAgICAgLy9pbWFnZTogPEdyaW1tYWNpbmcgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiIGFzcGVjdFJhdGlvPVwiMzo0XCIgLz4sXG4gICAgICAgICAgICBhY3Rpb246IDxBcnJvd0xpbmsgaHJlZj1cIi9cIj5HbyBob21lPC9BcnJvd0xpbms+LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59IiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7SDJ9IGZyb20gJy4uL3R5cG9ncmFwaHknXG5pbXBvcnQge0Fycm93TGlua30gZnJvbSAnLi4vYXJyb3ctYnV0dG9uJ1xuaW1wb3J0IHtHcmlkfSBmcm9tICcuLi9ncmlkJ1xuXG5pbnRlcmZhY2UgSGVhZGVyU2VjdGlvblByb3BzIHtcbiAgY3RhVXJsPzogc3RyaW5nXG4gIGN0YT86IHN0cmluZ1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlXG4gIHRpdGxlOiBzdHJpbmdcbiAgc3ViVGl0bGU6IHN0cmluZ1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gSGVhZGVyU2VjdGlvbih7XG4gIGN0YVVybCxcbiAgY3RhLFxuICB0aXRsZSxcbiAgc3ViVGl0bGUsXG4gIGNsYXNzTmFtZSxcbiAgYXMsXG59OiBIZWFkZXJTZWN0aW9uUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBhcz17YXN9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgJ2ZsZXggZmxleC1jb2wgY29sLXNwYW4tZnVsbCBzcGFjZS15LTEwIGxnOmZsZXgtcm93IGxnOml0ZW1zLWVuZCBsZzpqdXN0aWZ5LWJldHdlZW4gbGc6c3BhY2UteS0wJyxcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGxnOnNwYWNlLXktMFwiPlxuICAgICAgICAgIDxIMj57dGl0bGV9PC9IMj5cbiAgICAgICAgICA8SDIgdmFyaWFudD1cInNlY29uZGFyeVwiIGFzPVwicFwiPlxuICAgICAgICAgICAge3N1YlRpdGxlfVxuICAgICAgICAgIDwvSDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtjdGEgJiYgY3RhVXJsID8gKFxuICAgICAgICAgIDxBcnJvd0xpbmsgdG89e2N0YVVybH0gZGlyZWN0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHtjdGF9XG4gICAgICAgICAgPC9BcnJvd0xpbms+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9HcmlkPlxuICApXG59XG5cbmV4cG9ydCB7SGVhZGVyU2VjdGlvbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3Qgc3BhY2VyU2l6ZXMgPSB7XG4gICczeHMnOiAnaC02IGxnOmgtOCcsXG4gICcyeHMnOiAnaC0xMCBsZzpoLTEyJyxcbiAgeHM6ICdoLTIwIGxnOmgtMjQnLFxuICBzbTogJ2gtMzIgbGc6aC0zNicsXG4gIGJhc2U6ICdoLTQwIGxnOmgtNDgnLFxuICBsZzogJ2gtNTYgbGc6aC02NCcsXG59XG5cbmZ1bmN0aW9uIFNwYWNlcih7XG4gIHNpemUsXG4gIGNsYXNzTmFtZSA9ICcnLFxufToge1xuICBzaXplOiBrZXlvZiB0eXBlb2Ygc3BhY2VyU2l6ZXNcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59KSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSAke3NwYWNlclNpemVzW3NpemVdfWB9IC8+XG59XG5cbmV4cG9ydCB7U3BhY2VyfVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFJlbWl4PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFscy9ibG9nXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDE1bSBRdWlja3N0YXJ0IEJsb2cgVHV0b3JpYWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvam9rZXNcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVlcCBEaXZlIEpva2VzIEFwcCBUdXRvcmlhbFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgUmVtaXggRG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFB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
