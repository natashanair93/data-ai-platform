/* @ds-bundle: {"format":4,"namespace":"DataAIPlatformDesignSystem_fa7517","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Pill","sourcePath":"components/display/Pill.jsx"},{"name":"StatusIndicator","sourcePath":"components/display/StatusIndicator.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Dropdown","sourcePath":"components/forms/Dropdown.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Icon","sourcePath":"components/foundations/Icon.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"01ed87d8cee4","components/actions/IconButton.jsx":"44e0313e75fc","components/display/Badge.jsx":"2c4096cd4404","components/display/Card.jsx":"6a391430595c","components/display/Pill.jsx":"109ce3ce4408","components/display/StatusIndicator.jsx":"b0e3851253bc","components/display/Tabs.jsx":"501cc7cd79d9","components/forms/Checkbox.jsx":"0ae279150fa5","components/forms/Dropdown.jsx":"1656228b618f","components/forms/Input.jsx":"0fca6c68e091","components/forms/SearchInput.jsx":"fad382233345","components/foundations/Icon.jsx":"b10dd71fd7e5","ui_kits/data-ai-platform/app.jsx":"d6c3a34c4d6b","ui_kits/data-ai-platform/data.js":"ac6822874e8d","ui_kits/data-ai-platform/doc-page.js":"f106e1b77ea0","ui_kits/data-ai-platform/print-app.jsx":"cab26d79dacd"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/foundations/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.DataAIPlatformDesignSystem_fa7517 = window.DataAIPlatformDesignSystem_fa7517 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Salt-style action button.
 * appearance × sentiment matrix. The Salt signature is UPPERCASE, tracked action text.
 */
function Button({
  children,
  appearance = "bordered",
  // "solid" | "bordered" | "transparent"
  sentiment = "neutral",
  // "accented" | "neutral" | "positive" | "negative" | "caution"
  disabled = false,
  fullWidth = false,
  startIcon = null,
  endIcon = null,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const sentimentColor = {
    accented: "var(--accent)",
    neutral: "var(--neutral)",
    positive: "var(--status-success)",
    negative: "var(--status-error)",
    caution: "var(--status-warning)"
  }[sentiment];
  const sentimentStrong = {
    accented: "var(--accent-strong)",
    neutral: "var(--neutral-strong)",
    positive: "var(--status-success-strong)",
    negative: "var(--status-error-strong)",
    caution: "var(--status-warning-strong)"
  }[sentiment];
  const sentimentWeakest = {
    accented: "var(--accent-weakest)",
    neutral: "var(--neutral-weakest)",
    positive: "var(--status-success-bg)",
    negative: "var(--status-error-bg)",
    caution: "var(--status-warning-bg)"
  }[sentiment];
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-sm)",
    height: "var(--size-base)",
    padding: "0 var(--space-lg)",
    width: fullWidth ? "100%" : "auto",
    border: "1px solid transparent",
    borderRadius: "var(--radius-control)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-body-size)",
    fontWeight: "var(--text-action-weight)",
    letterSpacing: "var(--text-action-letterspacing)",
    textTransform: "var(--text-action-transform)",
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--duration-fast) var(--easing-standard), border-color var(--duration-fast) var(--easing-standard)",
    whiteSpace: "nowrap",
    ...style
  };
  const variants = {
    solid: {
      background: sentimentColor,
      borderColor: sentimentColor,
      color: "var(--text-primary-alt)"
    },
    bordered: {
      background: "transparent",
      borderColor: sentimentColor,
      color: sentiment === "neutral" ? "var(--text-primary)" : sentimentStrong
    },
    transparent: {
      background: "transparent",
      borderColor: "transparent",
      color: sentiment === "neutral" ? "var(--text-primary)" : sentimentStrong
    }
  }[appearance];
  const [hover, setHover] = React.useState(false);
  let hoverStyle = {};
  if (hover && !disabled) {
    if (appearance === "solid") hoverStyle = {
      background: sentimentStrong,
      borderColor: sentimentStrong
    };else if (appearance === "bordered") hoverStyle = {
      background: sentimentWeakest
    };else hoverStyle = {
      background: "var(--surface-hover)"
    };
  }
  const iconStyle = {
    width: "var(--size-icon)",
    height: "var(--size-icon)",
    display: "inline-flex",
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants,
      ...hoverStyle
    }
  }, rest), startIcon && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, startIcon), children, endIcon && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, endIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only action. Pass an <Icon /> as children.
 */
function IconButton({
  children,
  appearance = "transparent",
  // "solid" | "bordered" | "transparent"
  sentiment = "neutral",
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const sentimentColor = {
    accented: "var(--accent)",
    neutral: "var(--neutral)",
    positive: "var(--status-success)",
    negative: "var(--status-error)",
    caution: "var(--status-warning)"
  }[sentiment];
  const sentimentStrong = {
    accented: "var(--accent-strong)",
    neutral: "var(--neutral-strong)",
    positive: "var(--status-success-strong)",
    negative: "var(--status-error-strong)",
    caution: "var(--status-warning-strong)"
  }[sentiment];
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "var(--size-base)",
    height: "var(--size-base)",
    padding: 0,
    border: "1px solid transparent",
    borderRadius: "var(--radius-control)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    color: sentiment === "neutral" ? "var(--text-secondary)" : sentimentStrong,
    background: "transparent",
    transition: "background var(--duration-fast) var(--easing-standard), color var(--duration-fast) var(--easing-standard)",
    ...style
  };
  const variants = {
    solid: {
      background: sentimentColor,
      borderColor: sentimentColor,
      color: "var(--text-primary-alt)"
    },
    bordered: {
      borderColor: sentimentColor
    },
    transparent: {}
  }[appearance];
  let hoverStyle = {};
  if (hover && !disabled) {
    if (appearance === "solid") hoverStyle = {
      background: sentimentStrong,
      borderColor: sentimentStrong
    };else hoverStyle = {
      background: "var(--surface-hover)",
      color: sentiment === "neutral" ? "var(--text-primary)" : sentimentStrong
    };
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants,
      ...hoverStyle
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small count or status label. Two forms:
 * `count` → numeric pill (e.g. notifications); otherwise a text status badge.
 */
function Badge({
  children,
  count,
  status = "neutral",
  // "neutral" | "info" | "success" | "warning" | "error"
  max = 99,
  style = {},
  ...rest
}) {
  const colors = {
    neutral: {
      bg: "var(--salt-color-gray-600)",
      fg: "var(--text-primary-alt)"
    },
    info: {
      bg: "var(--status-info)",
      fg: "var(--text-primary-alt)"
    },
    success: {
      bg: "var(--status-success)",
      fg: "var(--text-primary-alt)"
    },
    warning: {
      bg: "var(--status-warning)",
      fg: "var(--text-primary-alt)"
    },
    error: {
      bg: "var(--status-error)",
      fg: "var(--text-primary-alt)"
    }
  }[status];
  if (count != null) {
    const display = count > max ? `${max}+` : `${count}`;
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "18px",
        height: "18px",
        padding: "0 5px",
        borderRadius: "var(--radius-pill)",
        background: colors.bg,
        color: colors.fg,
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        fontWeight: "var(--font-weight-semibold)",
        lineHeight: 1,
        ...style
      }
    }, rest), display);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: "20px",
      padding: "0 8px",
      borderRadius: "var(--radius-sm)",
      background: colors.bg,
      color: colors.fg,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--font-weight-semibold)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the rounded, subtly-bordered container used for catalog items and
 * guide tiles. Resting state uses a border (no shadow); interactive cards lift
 * on hover.
 */
function Card({
  children,
  interactive = false,
  selected = false,
  /** Left accent stripe: true (accent blue) or a CSS color string. */
  accentBorder = false,
  padding = "var(--space-lg)",
  as = "div",
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const accentColor = accentBorder === true ? "var(--accent)" : accentBorder;
  const base = {
    display: "block",
    background: "var(--surface-primary)",
    border: `1px solid ${selected ? "var(--accent)" : "var(--border-subtle)"}`,
    borderLeft: accentColor ? `4px solid ${accentColor}` : undefined,
    borderRadius: "var(--radius-card)",
    padding,
    boxShadow: selected ? "0 0 0 1px var(--accent)" : "var(--elevation-card)",
    transition: "box-shadow var(--duration-fast) var(--easing-standard), border-color var(--duration-fast) var(--easing-standard), transform var(--duration-fast) var(--easing-standard)",
    cursor: interactive ? "pointer" : "default",
    textAlign: "left",
    width: "100%",
    color: "inherit",
    ...style
  };
  const hoverStyle = interactive && hover ? {
    boxShadow: "var(--elevation-card-hover)",
    borderColor: "var(--border-medium)",
    transform: "translateY(-1px)"
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...hoverStyle
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Domain → { fill bg, mid text/border, bold solid } token triplet.
const DOMAIN = {
  data: {
    fill: "var(--domain-data-fill)",
    text: "var(--domain-data-text)",
    bold: "var(--domain-data-bold)"
  },
  ai: {
    fill: "var(--domain-ai-fill)",
    text: "var(--domain-ai-text)",
    bold: "var(--domain-ai-bold)"
  },
  governance: {
    fill: "var(--domain-governance-fill)",
    text: "var(--domain-governance-text)",
    bold: "var(--domain-governance-bold)"
  },
  technical: {
    fill: "var(--domain-technical-fill)",
    text: "var(--domain-technical-text)",
    bold: "var(--domain-technical-bold)"
  },
  documentation: {
    fill: "var(--domain-documentation-fill)",
    text: "var(--domain-documentation-text)",
    bold: "var(--domain-documentation-bold)"
  },
  neutral: {
    fill: "var(--surface-secondary)",
    text: "var(--text-secondary)",
    bold: "var(--salt-color-gray-600)"
  }
};

// Entity-type aliases resolve to a domain.
const ALIAS = {
  dataset: "data",
  dashboard: "data",
  product: "data",
  stream: "data",
  model: "ai",
  agent: "ai",
  skill: "ai",
  glossary: "governance",
  process: "governance",
  report: "governance",
  application: "technical",
  api: "technical",
  notebook: "technical"
};

/**
 * Pill — a category / entity-type tag (e.g. DATASET, MODEL). Colored by the
 * domain it belongs to (Data · AI/ML · Governance · Technical · Documentation),
 * in one of three treatments: fill (default), outline, or solid.
 */
function Pill({
  children,
  category = "neutral",
  // domain OR entity-type alias
  variant = "fill",
  // "fill" | "outline" | "solid"
  startIcon = null,
  style = {},
  ...rest
}) {
  const key = DOMAIN[category] ? category : ALIAS[category] || "neutral";
  const c = DOMAIN[key];
  const treatment = {
    fill: {
      background: c.fill,
      border: "1px solid transparent",
      color: c.text
    },
    outline: {
      background: "transparent",
      border: `1px solid ${c.bold}`,
      color: c.text
    },
    solid: {
      background: c.bold,
      border: "1px solid transparent",
      color: "var(--text-primary-alt)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      height: "20px",
      padding: "0 9px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      fontWeight: "var(--font-weight-semibold)",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...treatment,
      ...style
    }
  }, rest), startIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: "12px",
      height: "12px"
    }
  }, startIcon), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Pill.jsx", error: String((e && e.message) || e) }); }

// components/display/StatusIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusIndicator — a status dot + optional label. Used for data quality,
 * certification, pipeline health, freshness, etc.
 */
function StatusIndicator({
  status = "info",
  // "info" | "success" | "warning" | "error" | "neutral"
  children,
  size = 8,
  style = {},
  ...rest
}) {
  const color = {
    info: "var(--status-info)",
    success: "var(--status-success)",
    warning: "var(--status-warning)",
    error: "var(--status-error)",
    neutral: "var(--salt-color-gray-400)"
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      color: "var(--text-primary)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: color,
      flexShrink: 0
    }
  }), children != null && /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { StatusIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatusIndicator.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
/**
 * Tabs — horizontal tab strip with an accent underline indicator.
 * Used on entity detail pages (Overview, Schema, Distributions, Ownership…).
 */
function Tabs({
  items = [],
  // [{ id, label, count?, icon? }]
  activeId,
  defaultActiveId,
  onChange,
  style = {}
}) {
  const isControlled = activeId !== undefined;
  const [internal, setInternal] = React.useState(defaultActiveId ?? (items[0] && items[0].id));
  const active = isControlled ? activeId : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-xl)",
      borderBottom: "1px solid var(--separator)",
      ...style
    }
  }, items.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-sm)",
        padding: "10px 0 12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body-size)",
        fontWeight: on ? "var(--font-weight-semibold)" : "var(--font-weight-regular)",
        color: on ? "var(--text-accent)" : "var(--text-secondary)",
        boxShadow: on ? "inset 0 calc(-1 * var(--size-indicator)) 0 0 var(--accent)" : "none",
        transition: "color var(--duration-fast) var(--easing-standard)",
        whiteSpace: "nowrap"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = "var(--text-primary)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = "var(--text-secondary)";
      }
    }, t.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: "var(--size-icon)",
        height: "var(--size-icon)"
      }
    }, t.icon), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: "var(--font-weight-semibold)",
        color: on ? "var(--text-accent)" : "var(--text-tertiary)",
        background: on ? "var(--accent-weakest)" : "var(--surface-secondary)",
        borderRadius: "var(--radius-pill)",
        padding: "1px 7px",
        lineHeight: "16px"
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — used heavily in the left-hand filter facets. Supports indeterminate.
 */
function Checkbox({
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  label,
  count,
  // optional trailing count e.g. facet result count
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const boxOn = on || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--text-body-line)",
      color: "var(--text-primary)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "16px",
      height: "16px",
      flexShrink: 0,
      border: `1px solid ${boxOn ? "var(--accent)" : "var(--border-strong)"}`,
      borderRadius: "3px",
      background: boxOn ? "var(--accent)" : "var(--surface-primary)",
      transition: "background var(--duration-fast), border-color var(--duration-fast)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "2px",
      background: "var(--text-primary-alt)"
    }
  }) : on ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    width: "11",
    height: "11",
    fill: "var(--text-primary-alt)",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 8.3 2.2 6l-.9.9 3.2 3.1L11 3.5l-.9-.9z"
  })) : null), label != null && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontSize: "var(--text-label-size)"
    }
  }, count));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropdown.jsx
try { (() => {
/**
 * Dropdown — a lightweight select. Click to open a menu of options.
 * (Cosmetic recreation of Salt's Dropdown; not a full listbox.)
 */
function Dropdown({
  options = [],
  // [{ value, label }] or ["A","B"]
  value,
  defaultValue,
  placeholder = "Select…",
  disabled = false,
  onChange,
  fullWidth = false,
  style = {}
}) {
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const selected = norm.find(o => o.value === current);
  const pick = v => {
    if (!isControlled) setInternal(v);
    setOpen(false);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: fullWidth ? "100%" : "220px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-sm)",
      width: "100%",
      height: "var(--size-base)",
      padding: "0 var(--space-md)",
      background: disabled ? "var(--surface-secondary)" : "var(--surface-primary)",
      border: `1px solid ${open ? "var(--accent)" : "var(--border-medium)"}`,
      borderBottom: `2px solid ${open ? "var(--accent)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-control)",
      boxShadow: open ? "0 0 0 2px var(--accent-weaker)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      color: selected ? "var(--text-primary)" : "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    width: "12",
    height: "12",
    fill: "var(--text-tertiary)",
    "aria-hidden": "true",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-fast)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l4 4 4-4",
    stroke: "var(--text-tertiary)",
    strokeWidth: "1.4",
    fill: "none"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 20,
      background: "var(--surface-primary)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-control)",
      boxShadow: "var(--elevation-menu)",
      padding: "var(--space-xs)",
      maxHeight: "260px",
      overflowY: "auto"
    }
  }, norm.map(o => {
    const active = o.value === current;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => pick(o.value),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px var(--space-md)",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontSize: "var(--text-body-size)",
        color: "var(--text-primary)",
        background: active ? "var(--surface-selected)" : "transparent"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = "var(--surface-hover)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, o.label, active && /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 12 12",
      width: "12",
      height: "12",
      fill: "var(--accent)",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4.5 8.3 2.2 6l-.9.9 3.2 3.1L11 3.5l-.9-.9z"
    })));
  })));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Salt style: subtle border with an accent
 * activation indicator on the bottom edge; accent outline on focus.
 */
function Input({
  value,
  defaultValue,
  placeholder,
  disabled = false,
  readOnly = false,
  validationStatus,
  // "error" | "warning" | "success"
  startAdornment = null,
  endAdornment = null,
  onChange,
  fullWidth = false,
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const statusColor = {
    error: "var(--status-error)",
    warning: "var(--status-warning)",
    success: "var(--status-success)"
  }[validationStatus];
  const borderColor = statusColor || (focus ? "var(--accent)" : "var(--border-medium)");
  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-sm)",
    width: fullWidth ? "100%" : "auto",
    minHeight: "var(--size-base)",
    padding: "0 var(--space-md)",
    background: disabled ? "var(--surface-secondary)" : "var(--surface-primary)",
    border: `1px solid ${borderColor}`,
    borderBottom: `2px solid ${statusColor || (focus ? "var(--accent)" : "var(--border-strong)")}`,
    borderRadius: "var(--radius-control)",
    boxShadow: focus && !statusColor ? "0 0 0 2px var(--accent-weaker)" : "none",
    opacity: disabled ? 0.6 : 1,
    transition: "border-color var(--duration-fast) var(--easing-standard), box-shadow var(--duration-fast) var(--easing-standard)",
    ...style
  };
  const adorn = {
    display: "inline-flex",
    color: "var(--text-tertiary)",
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, startAdornment && /*#__PURE__*/React.createElement("span", {
    style: adorn
  }, startAdornment), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--text-body-line)",
      color: "var(--text-primary)",
      ...inputStyle
    }
  }, rest)), endAdornment && /*#__PURE__*/React.createElement("span", {
    style: adorn
  }, endAdornment));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchInput — the platform's prominent global search field.
 * Left search glyph, placeholder, and a keyboard-shortcut hint (Ctrl+K) on the right.
 * Self-contained (inlines the search glyph) so it works anywhere.
 */
const SEARCH_SVG = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 12 12",
  width: "18",
  height: "18",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8.0002 9.00022C7.1645 9.628 6.12569 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 6.12571 9.62799 7.16453 9.00019 8.00023L12 11L11 12L8.0002 9.00022ZM9 5C9 7.20914 7.20914 9 5 9C2.79086 9 1 7.20914 1 5C1 2.79086 2.79086 1 5 1C7.20914 1 9 2.79086 9 5Z"
}));
function SearchInput({
  value,
  defaultValue,
  placeholder = "Search data products, datasets, dashboards…",
  shortcut = "Ctrl K",
  size = "large",
  // "large" | "medium"
  showSend = false,
  onChange,
  onSubmit,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const large = size === "large";
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-md)",
    width: "100%",
    height: large ? "56px" : "var(--size-base)",
    padding: large ? "0 8px 0 var(--space-lg)" : "0 var(--space-md)",
    background: "var(--surface-primary)",
    border: `1px solid ${focus ? "var(--accent)" : "var(--border-medium)"}`,
    borderRadius: large ? "var(--radius-lg)" : "var(--radius-control)",
    boxShadow: focus ? "0 0 0 2px var(--accent-weaker)" : "var(--shadow-lowest)",
    transition: "border-color var(--duration-fast) var(--easing-standard), box-shadow var(--duration-fast) var(--easing-standard)",
    ...style
  };
  return /*#__PURE__*/React.createElement("form", {
    role: "search",
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: focus ? "var(--accent)" : "var(--text-tertiary)",
      flexShrink: 0
    }
  }, SEARCH_SVG), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: large ? "16px" : "var(--text-body-size)",
      color: "var(--text-primary)"
    }
  }, rest)), shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "3px",
      flexShrink: 0
    }
  }, shortcut.split(" ").map(k => /*#__PURE__*/React.createElement("kbd", {
    key: k,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      lineHeight: 1,
      padding: "3px 6px",
      border: "1px solid var(--border-medium)",
      borderBottomWidth: "2px",
      borderRadius: "4px",
      background: "var(--surface-secondary)",
      color: "var(--text-secondary)"
    }
  }, k))), showSend && /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Search",
    style: {
      flexShrink: 0,
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "none",
      background: "var(--accent)",
      color: "#fff",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 15 22 11 13 2 9 22 2Z"
  }))));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — renders a Salt glyph by name, inheriting the current text color.
 * Glyph geometry is inlined so the component is fully self-contained.
 */
const ICONS = {
  "add": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M6.5 5.5H11V6.5H6.5V11H5.5V6.5H1V5.5H5.5V1H6.5V5.5Z\"></path>"
  },
  "api": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M0 5.98916L3 3L3.70711 3.70455L1.41421 5.98916L3.70711 8.28496L3 8.98951L0 5.98916Z\"></path> <path d=\"M12 6.01154L8.9993 9L8.29202 8.29561L10.5855 6.01154L8.29202 3.71628L8.9993 3.01189L12 6.01154Z\"></path> <path d=\"M6.95047 3.01123L4.00187 8.54394L4.89672 8.98953L7.84532 3.45683L6.95047 3.01123Z\"></path>"
  },
  "arrow-right": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M-2.12151e-07 5.5003L-1.6844e-07 6.5003L10.0862 6.5003L6.93994 9.64666L7.64706 10.3538L12.0005 6.0002L7.64712 1.64672L6.94 2.35381L10.0864 5.5003L-2.12151e-07 5.5003Z\"></path>"
  },
  "bar-chart": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M6 1H7V10H8V7H9V10H10V4H11V11H0V6H1V10H2V8H3V10H4V5H5V10H6V1Z\"></path>"
  },
  "bookmark": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 10L10 12V0H2V12L6 10ZM3 10.2338L6 8.83381L9 10.2338V1H3V10.2338Z\"></path>"
  },
  "checkmark": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.95193 9.29415L10 3.7286L8.9 2.70593L4.87544 7.16334L3.02731 5.44593L2 6.54509L4.95193 9.29415Z\"></path>"
  },
  "chevron-down": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M5.61816 8.59345L6 9L6.38184 8.59345L11 3.66089L10.2363 3L6 7.52409L1.76368 3L1 3.66089L5.61816 8.59345Z\"></path>"
  },
  "chevron-left": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M3.40655 5.61816L3 6L3.40655 6.38184L8.33911 11L9 10.2363L4.47591 6L9 1.76368L8.33911 1L3.40655 5.61816Z\"></path>"
  },
  "chevron-right": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M8.59345 5.61816L9 6L8.59345 6.38184L3.66089 11L3 10.2363L7.52409 6L3 1.76368L3.66089 1L8.59345 5.61816Z\"></path>"
  },
  "chevron-up": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M5.61816 3.40655L6 3L6.38184 3.40655L11 8.33911L10.2363 9L6 4.47591L1.76368 9L1 8.33911L5.61816 3.40655Z\"></path>"
  },
  "clock": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M6 3V6H3V7H7V3H6Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z\"></path>"
  },
  "close": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M5.99902 5.29199L9.88867 1.4043L10.5957 2.11133L6.70703 6L10.5957 9.88867L9.88867 10.5967L5.99902 6.70703L2.11035 10.5967L1.40332 9.88867L5.29199 6L1.40332 2.11133L2.11035 1.40332L5.99902 5.29199Z\"></path>"
  },
  "column-chooser": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0H12V12H0V0ZM1 3V4H4V5H1V6H4V7H1V8H4V9H1V11H5V3H1ZM6 3V4H9V5H6V6H9V7H6V8H9V9H6V11H11V3H6ZM11 1H1V2H11V1Z\"></path>"
  },
  "copy": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 0H8.70711L11 2.29289V9H8V12H1V3H4V0ZM5 1V8H10V4H7V1H5ZM8 1V3H10V2.70711L8.29289 1H8ZM2 4H4V9H7V11H2V4Z\"></path>"
  },
  "dashboard": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 7.99976C6.82837 7.99976 7.5 7.32813 7.5 6.49976C7.5 6.31338 7.46625 6.13451 7.404 5.96988L8.99325 4.38063L8.286 3.67338L6.75562 5.20376C6.53362 5.07401 6.27562 4.99976 6 4.99976C5.17163 4.99976 4.5 5.67138 4.5 6.49976C4.5 7.32813 5.17163 7.99976 6 7.99976ZM6.75 6.49975C6.75 6.91413 6.41438 7.24975 6 7.24975C5.58563 7.24975 5.25 6.91413 5.25 6.49975C5.25 6.08538 5.58563 5.74975 6 5.74975C6.41438 5.74975 6.75 6.08538 6.75 6.49975Z\"></path> <path d=\"M11.1971 10C11.7075 9.11763 12 8.09275 12 7C12 3.68613 9.31388 1 6 1C2.68613 1 0 3.68613 0 7C0 8.09275 0.292125 9.11763 0.8025 10H11.1971ZM10.9999 7C10.9999 7.711 10.8514 8.3875 10.584 8.99988H1.416C1.14825 8.3875 1.00013 7.711 1.00013 7H2.50012C2.50012 6.65238 2.55075 6.31675 2.64488 5.99988H1.09987C1.2885 5.06988 1.7355 4.234 2.36212 3.5695L3.42337 4.63075C3.65062 4.38363 3.91312 4.1695 4.20262 3.99588L3.11925 2.9125C3.8055 2.428 4.61888 2.11225 5.49975 2.0245V3.53538C5.66288 3.51213 5.83012 3.49975 5.99962 3.49975C6.16912 3.49975 6.33638 3.51175 6.4995 3.53538V2.0245C8.6925 2.24238 10.4685 3.87663 10.8994 5.99988H9.35437C9.4485 6.31675 9.4995 6.65238 9.4995 7H10.9999Z\"></path>"
  },
  "database": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M2 2.25H3V3.25H2V2.25Z\"></path> <path d=\"M3 8.75H2V9.75H3V8.75Z\"></path> <path d=\"M5 8.75H4V9.75H5V8.75Z\"></path> <path d=\"M5 2.25H4V3.25H5V2.25Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5.5V0H12V5.5H0ZM1 1H11V4.5H1V1Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 12V6.5H12V12H0ZM1 7.5H11V11H1V7.5Z\"></path>"
  },
  "document": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 12V0H9L11 2V12H1ZM10 11V4H7V1H2V11H10ZM10 2.41421V3H8V1H8.58579L10 2.41421Z\"></path>"
  },
  "download": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M5.49999 0H6.49999V7.11396L9.18197 4.43198L9.88908 5.13909L5.99999 9.02817L2.1109 5.13909L2.81801 4.43198L5.49999 7.11396V0Z\"></path> <path d=\"M12 11V12H0V11H12Z\"></path>"
  },
  "edit": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5637 0.292893C9.17318 -0.097631 8.54001 -0.0976311 8.14949 0.292893L6.73528 1.70711L10.2708 5.24264L11.685 3.82843C12.0755 3.4379 12.0755 2.80474 11.685 2.41421L9.5637 0.292893ZM9.21015 1.35355C9.01489 1.15829 8.6983 1.15829 8.50304 1.35355L8.14949 1.70711L10.2708 3.82843L10.6244 3.47487C10.8196 3.27961 10.8196 2.96303 10.6244 2.76777L9.21015 1.35355Z\"></path> <path d=\"M7.44238 3.82843L8.14949 4.53553L4.2604 8.42462C4.06514 8.61988 3.74856 8.61988 3.5533 8.42462C3.35803 8.22936 3.35803 7.91278 3.5533 7.71751L7.44238 3.82843Z\"></path> <path d=\"M8.8566 5.24264L9.5637 5.94975L5.32106 10.1924L0 12L1.78553 6.65686L5.99322 2.44917L6.70033 3.15628L2.66941 7.1872L1.87392 9.57367L2.40425 10.104L4.79073 9.30851L8.8566 5.24264Z\"></path>"
  },
  "error": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 0H9L12 3V9L9 12H3L0 9V3L3 0ZM1 3.41421L3.41421 1H8.58579L11 3.41421V8.58579L8.58579 11H3.41421L1 8.58579V3.41421Z\"></path> <path d=\"M5 2H7V7H5V2Z\"></path> <path d=\"M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z\"></path>"
  },
  "export": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M5 1H1V11H5V10H2L2 2H5V1Z\"></path> <path d=\"M4 6.50091V5.50091L10.094 5.50091L7.41199 2.81893L8.1191 2.11182L12.0082 6.00091L8.1191 9.89L7.41199 9.18289L10.094 6.50091L4 6.50091Z\"></path>"
  },
  "favorite": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M6.44797 0.301776C6.26572 -0.0744024 5.72804 -0.0737716 5.54632 0.302752L3.99604 3.51585L0.425599 4.19963C0.0420112 4.27317 -0.112744 4.73833 0.150124 5.02681L2.59619 7.71024L2.00421 11.3994C1.93997 11.8 2.35605 12.106 2.72025 11.9261L5.99666 10.3078L9.3473 11.9554C9.69283 12.0686 10.0541 11.7759 9.99399 11.4003L9.40298 7.71024L11.849 5.02681C12.1119 4.73833 11.9562 4.27316 11.5726 4.19963L8.00216 3.51585L6.44797 0.301776ZM7.32031 4.40155L10.5088 5.01218L8.33918 7.3942L8.85398 10.6024L5.99666 9.19389L3.14519 10.6014L3.66 7.3942L1.49038 5.01218L4.67887 4.40155L5.99861 1.66837L7.32031 4.40155Z\"></path>"
  },
  "filter": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.5 7L12 0H0L4.5 7V12H7.5V7ZM6.5 11V6.7063L10.1683 1H1.83167L5.5 6.7063V11H6.5Z\"></path>"
  },
  "folder-closed": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 12V2H6L4 1H0V12H12ZM3.76393 2L5.76393 3H11V4H1V2H3.76393ZM1 5V11H11V5H1Z\"></path>"
  },
  "globe": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM4.7931 10.8534C4.09331 9.933 3.59407 8.97663 3.30512 8H1.41604C2.03101 9.40751 3.2752 10.4772 4.7931 10.8534ZM1.10003 7H3.08408C3.03534 6.66826 3.01069 6.33489 3.01043 6.0004C3.01018 5.66564 3.03438 5.33198 3.0827 5H1.10003C1.03444 5.32311 1.00001 5.65753 1.00001 6C1.00001 6.34247 1.03444 6.67689 1.10003 7ZM1.41604 4H3.30258C3.5905 3.02365 4.08928 2.06752 4.79025 1.14734C3.27367 1.52419 2.0306 2.59337 1.41604 4ZM4.35237 4H7.61435C7.28564 3.08944 6.7379 2.18087 5.95916 1.29124C5.19731 2.18149 4.66569 3.09006 4.35237 4ZM8.92917 6.99997H10.9C10.9656 6.67686 11 6.34241 11 5.99995C11 5.6575 10.9656 5.32308 10.9 4.99997H8.90296C8.96087 5.36307 8.9899 5.72825 8.98962 6.09473C8.98938 6.39751 8.96914 6.69941 8.92917 6.99997ZM7.29466 10.8307C8.77269 10.4356 9.98092 9.38025 10.584 7.99997H8.72217C8.44956 8.96801 7.97059 9.91669 7.29466 10.8307ZM7.67666 7.99997H4.35521C4.68036 8.94158 5.23821 9.88175 6.04075 10.8017C6.82596 9.88109 7.36731 8.94094 7.67666 7.99997ZM8.66895 3.99996H10.584C9.95739 2.56581 8.67747 1.48241 7.12042 1.12598C7.84535 2.05204 8.36449 3.01545 8.66895 3.99996ZM4.09519 5C4.0382 5.33413 4.01013 5.66762 4.01038 5.99961C4.01061 6.33185 4.03925 6.6656 4.09679 7H7.9186C7.96581 6.69719 7.9893 6.39499 7.98955 6.094C7.98983 5.73077 7.9562 5.36572 7.88785 5H4.09519Z\"></path>"
  },
  "grid": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5V0H5V5H0ZM1 1H4V4H1V1Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 5V0H12V5H7ZM8 1H11V4H8V1Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 7V12H12V7H7ZM11 8H8V11H11V8Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 12V7H5V12H0ZM1 8H4V11H1V8Z\"></path>"
  },
  "help": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M6.08203 2.25C6.23047 2.25 6.375 2.26172 6.51562 2.28516C6.65625 2.30859 6.78906 2.33984 6.91406 2.37891C7.03906 2.42578 7.15625 2.48047 7.26562 2.54297C7.38281 2.60547 7.48828 2.67578 7.58203 2.75391C7.67578 2.83984 7.75781 2.93359 7.82812 3.03516C7.90625 3.13672 7.97266 3.24609 8.02734 3.36328C8.08203 3.48828 8.12109 3.62109 8.14453 3.76172C8.17578 3.89453 8.19141 4.04297 8.19141 4.20703C8.19141 4.31641 8.18359 4.41797 8.16797 4.51172C8.15234 4.60547 8.12891 4.69531 8.09766 4.78125C8.06641 4.86719 8.03125 4.94922 7.99219 5.02734C7.95312 5.09766 7.91016 5.16797 7.86328 5.23828L7.69922 5.44922C7.64453 5.51172 7.58203 5.57422 7.51172 5.63672C7.44922 5.70703 7.38281 5.77734 7.3125 5.84766C7.24219 5.91016 7.17188 5.97656 7.10156 6.04688C7.05469 6.08594 7.01172 6.125 6.97266 6.16406C6.93359 6.20312 6.89453 6.23828 6.85547 6.26953C6.82422 6.30078 6.79297 6.33594 6.76172 6.375C6.73828 6.40625 6.71484 6.44141 6.69141 6.48047C6.66797 6.51172 6.64844 6.54688 6.63281 6.58594C6.61719 6.625 6.60547 6.66797 6.59766 6.71484C6.58984 6.76172 6.58203 6.8125 6.57422 6.86719V7.41797H5.36719V6.66797C5.375 6.60547 5.38281 6.54688 5.39062 6.49219C5.39844 6.44531 5.41016 6.39844 5.42578 6.35156C5.44141 6.30469 5.46094 6.25781 5.48438 6.21094L5.55469 6.09375C5.58594 6.05469 5.62109 6.01562 5.66016 5.97656C5.69141 5.9375 5.72656 5.89453 5.76562 5.84766L5.90625 5.70703L6.67969 4.92188C6.76562 4.83594 6.82812 4.74219 6.86719 4.64062C6.90625 4.53125 6.92578 4.41016 6.92578 4.27734C6.92578 4.14453 6.90234 4.02734 6.85547 3.92578C6.81641 3.81641 6.75781 3.71875 6.67969 3.63281C6.59375 3.55469 6.49609 3.49609 6.38672 3.45703C6.27734 3.41016 6.16016 3.38672 6.03516 3.38672C5.89453 3.38672 5.76562 3.41406 5.64844 3.46875C5.53125 3.51562 5.42969 3.58594 5.34375 3.67969C5.25 3.77344 5.17578 3.87891 5.12109 3.99609C5.07422 4.11328 5.04297 4.23828 5.02734 4.37109L3.75 4.27734C3.77344 4.11328 3.80469 3.96094 3.84375 3.82031C3.88281 3.67969 3.93359 3.54688 3.99609 3.42188C4.05859 3.29688 4.13281 3.17969 4.21875 3.07031C4.30469 2.96094 4.39844 2.86328 4.5 2.77734C4.60156 2.69141 4.71094 2.61719 4.82812 2.55469C4.94531 2.48438 5.07031 2.42969 5.20312 2.39062C5.33594 2.34375 5.47266 2.30859 5.61328 2.28516C5.76172 2.26172 5.91797 2.25 6.08203 2.25Z\"></path> <path d=\"M5.96484 8.02734C6.07422 8.02734 6.17578 8.04688 6.26953 8.08594C6.36328 8.125 6.44922 8.17969 6.52734 8.25C6.60547 8.32812 6.66406 8.41406 6.70312 8.50781C6.75 8.59375 6.77344 8.6875 6.77344 8.78906C6.77344 8.89844 6.75391 9 6.71484 9.09375C6.67578 9.17969 6.61719 9.26172 6.53906 9.33984C6.46094 9.41797 6.37109 9.47656 6.26953 9.51562C6.17578 9.55469 6.07422 9.57422 5.96484 9.57422C5.91797 9.57422 5.86719 9.57031 5.8125 9.5625C5.76562 9.54688 5.71484 9.53125 5.66016 9.51562L5.51953 9.44531C5.48047 9.41406 5.44531 9.38281 5.41406 9.35156C5.375 9.32031 5.33984 9.28516 5.30859 9.24609C5.27734 9.19922 5.25391 9.15625 5.23828 9.11719C5.21484 9.07031 5.19531 9.02344 5.17969 8.97656C5.17188 8.92188 5.16797 8.86719 5.16797 8.8125C5.16797 8.70312 5.1875 8.60547 5.22656 8.51953C5.26562 8.42578 5.32422 8.33984 5.40234 8.26172C5.48047 8.18359 5.56641 8.125 5.66016 8.08594C5.75391 8.04688 5.85547 8.02734 5.96484 8.02734Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 12V0H0V12H12ZM0.996094 1.00781H11.0039V11.0039H0.996094V1.00781Z\"></path>"
  },
  "hierarchy": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5 4.5H3V5.5H5.5V4.5H11.5V7.5H5.5V6.5H3V9.5H5.5V8.5H11.5V11.5H5.5V10.5H2V4.5H0.5V0.5H4.5V4.5ZM6.5 10.5H10.5V9.5H6.5V10.5ZM6.5 6.5H10.5V5.5H6.5V6.5ZM1.5 3.5H3.5V1.5H1.5V3.5Z\"></path>"
  },
  "home": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 4.875L6 0L12 4.875L11 6L10 5.175V12H7V9H5V12H2V5.09451L0.875 6L0 4.875ZM3 4.28963V11H4V8H8V11H9V4.35L6 1.875L3 4.28963Z\"></path>"
  },
  "info": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M6 2C6.55228 2 7 2.44772 7 3C7 3.55228 6.55228 4 6 4C5.44772 4 5 3.55228 5 3C5 2.44772 5.44772 2 6 2Z\"></path> <path d=\"M7 5V10H5V5H7Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0V12H12V0H0ZM11 1H1V11H11V1Z\"></path>"
  },
  "key": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M4.5 8C4.5 8.55229 4.05228 9 3.5 9C2.94772 9 2.5 8.55229 2.5 8C2.5 7.44772 2.94772 7 3.5 7C4.05228 7 4.5 7.44772 4.5 8Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.5 6H10V4H12V0H9L4.3867 4.6133C4.10351 4.53936 3.80635 4.5 3.5 4.5C1.567 4.5 0 6.067 0 8C0 9.933 1.567 11.5 3.5 11.5C5.433 11.5 7 9.933 7 8C7 7.55408 6.91661 7.12764 6.76457 6.73543L7.5 6ZM9.4 1L4.64558 5.77733C4.30239 5.60009 3.91288 5.5 3.5 5.5C2.11929 5.5 1 6.61929 1 8C1 9.38071 2.11929 10.5 3.5 10.5C4.88071 10.5 6 9.38071 6 8C6 7.44626 5.81997 6.93457 5.51525 6.52027C5.51525 6.52027 6.6423 5.37188 7 5H9V3H11V1H9.4Z\"></path>"
  },
  "layers": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 4L1.5 5L0 6L1.5 7L0 8L6 12L12 8L10.5 7L12 6L10.5 5L12 4L6 0L0 4ZM9.59861 7.60092L6 10L2.40139 7.60093L1.80278 8L6 10.7981L10.1972 8L9.59861 7.60092ZM1.80278 6L2.40139 5.60093L6 8L9.59861 5.60092L10.1972 6L6 8.79815L1.80278 6ZM1.80278 4L6 6.79815L10.1972 4L6 1.20185L1.80278 4Z\"></path>"
  },
  "line-chart": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.5 4C11.3284 4 12 3.32843 12 2.5C12 1.67157 11.3284 1 10.5 1C9.67157 1 9 1.67157 9 2.5C9 2.93533 9.18545 3.32734 9.48165 3.60135L7.59886 8.00321C7.56618 8.00107 7.53322 8 7.5 8C7.34305 8 7.19174 8.0241 7.04954 8.06881L5.74569 6.33589C5.90629 6.09703 6 5.80946 6 5.5C6 4.67157 5.32843 4 4.5 4C3.67157 4 3 4.67157 3 5.5C3 5.86401 3.12966 6.19773 3.34533 6.45752L1.80163 9.03033L1.79617 9.02922C1.70043 9.01005 1.60139 8.99999 1.5 8.99999C0.671578 8.99999 0 9.67156 0 10.5C0 11.3284 0.671566 12 1.5 12C2.32843 12 3 11.3284 3 10.5C3 10.1352 2.8698 9.8009 2.65336 9.54089L4.19292 6.96854C4.29205 6.98916 4.39477 7 4.5 7C4.65427 7 4.80309 6.97672 4.94316 6.93346L6.25397 8.6646C6.09357 8.90336 6 9.19075 6 9.5C6 10.3284 6.67157 11 7.5 11C8.32843 11 9 10.3284 9 9.5C9 9.06436 8.81429 8.67211 8.51774 8.39807L10.4008 3.99677C10.4336 3.99891 10.4667 4 10.5 4ZM5.25 5.5C5.25 5.91421 4.91421 6.25 4.5 6.25C4.08579 6.25 3.75 5.91421 3.75 5.5C3.75 5.08579 4.08579 4.75 4.5 4.75C4.91421 4.75 5.25 5.08579 5.25 5.5ZM2.25 10.5C2.25 10.9142 1.91421 11.25 1.5 11.25C1.08579 11.25 0.75 10.9142 0.75 10.5C0.75 10.0858 1.08579 9.75 1.5 9.75C1.91421 9.75 2.25 10.0858 2.25 10.5ZM8.25 9.50001C8.25 9.91422 7.91421 10.25 7.5 10.25C7.08579 10.25 6.75 9.91422 6.75 9.50001C6.75 9.0858 7.08579 8.75001 7.5 8.75001C7.91421 8.75001 8.25 9.0858 8.25 9.50001ZM11.25 2.5C11.25 2.91421 10.9142 3.25 10.5 3.25C10.0858 3.25 9.75 2.91421 9.75 2.5C9.75 2.08579 10.0858 1.75 10.5 1.75C10.9142 1.75 11.25 2.08579 11.25 2.5Z\"></path>"
  },
  "list": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M4 2.5H11V3.5H4V2.5Z\"></path> <path d=\"M4 5.5H11V6.5H4V5.5Z\"></path> <path d=\"M4 8.5H11V9.5H4V8.5Z\"></path> <path d=\"M3 9C3 9.55228 2.55228 10 2 10C1.44772 10 1 9.55228 1 9C1 8.44771 1.44772 8 2 8C2.55228 8 3 8.44771 3 9Z\"></path> <path d=\"M3 6C3 6.55228 2.55228 7 2 7C1.44772 7 1 6.55228 1 6C1 5.44772 1.44772 5 2 5C2.55228 5 3 5.44772 3 6Z\"></path> <path d=\"M3 3C3 3.55228 2.55228 4 2 4C1.44772 4 1 3.55228 1 3C1 2.44772 1.44772 2 2 2C2.55228 2 3 2.44772 3 3Z\"></path>"
  },
  "locked": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M6.5 8.91465C7.0826 8.70873 7.5 8.15311 7.5 7.5C7.5 6.67157 6.82843 6 6 6C5.17157 6 4.5 6.67157 4.5 7.5C4.5 8.15311 4.9174 8.70873 5.5 8.91465V10H6.5V8.91465Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 4H0V12H12V4H10V2C10 0.895431 9.10457 0 8 0H4C2.89543 0 2 0.89543 2 2V4ZM3 2C3 1.44772 3.44772 1 4 1H8C8.55228 1 9 1.44772 9 2V4H3V2ZM1 11V5H11V11H1Z\"></path>"
  },
  "menu": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M0 1H12V3H0V1Z\"></path> <path d=\"M0 5H12V7H0V5Z\"></path> <path d=\"M12 9H0V11H12V9Z\"></path>"
  },
  "notification": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M2.00391 6V3C2.00391 2.58594 2.08203 2.19922 2.23828 1.83984C2.39453 1.47266 2.60547 1.15625 2.87109 0.890625C3.14453 0.617188 3.46484 0.398438 3.83203 0.234375C4.19922 0.078125 4.58984 0 5.00391 0H6.99609C7.41016 0 7.80078 0.078125 8.16797 0.234375C8.53516 0.398438 8.85156 0.617188 9.11719 0.890625C9.39062 1.15625 9.60547 1.47266 9.76172 1.83984C9.91797 2.19922 9.99609 2.58594 9.99609 3V6C10.0977 6.57031 10.2305 7.02344 10.3945 7.35938C10.5664 7.69531 10.7695 7.91016 11.0039 8.00391H12V9H0V8.00391H0.996094C1.23047 7.91016 1.42969 7.69531 1.59375 7.35938C1.76562 7.02344 1.90234 6.57031 2.00391 6ZM9.60938 8.00391C9.46875 7.76953 9.35156 7.5 9.25781 7.19531C9.16406 6.89062 9.08203 6.55078 9.01172 6.17578L9 6V3C9 2.45312 8.80469 1.98438 8.41406 1.59375C8.02344 1.20312 7.55078 1.00781 6.99609 1.00781H5.00391C4.44922 1.00781 3.97656 1.20312 3.58594 1.59375C3.19531 1.98438 3 2.45312 3 3V6L2.98828 6.17578C2.91797 6.55078 2.83594 6.89062 2.74219 7.19531C2.64844 7.5 2.53125 7.76953 2.39062 8.00391H9.60938ZM6 12C5.58594 12 5.23047 11.8633 4.93359 11.5898C4.64453 11.3242 4.5 11 4.5 10.6172C4.5 10.5312 4.5 10.4102 4.5 10.2539C4.5 10.0898 4.5 10.0078 4.5 10.0078C4.5 10.0078 4.59766 10.0078 4.79297 10.0078C4.98828 10.0078 5.39062 10.0078 6 10.0078C6.60938 10.0078 7.01172 10.0078 7.20703 10.0078C7.40234 10.0078 7.5 10.0078 7.5 10.0078C7.5 10.0078 7.5 10.0508 7.5 10.1367C7.5 10.2227 7.5 10.3828 7.5 10.6172C7.5 11 7.35156 11.3242 7.05469 11.5898C6.76562 11.8633 6.41406 12 6 12Z\"></path>"
  },
  "overflow-menu": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M1 5H3V7H1V5Z\"></path> <path d=\"M5 5H7V7H5V5Z\"></path> <path d=\"M11 5H9V7H11V5Z\"></path>"
  },
  "pie-chart": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M4.5 2.62598C2.77477 3.07002 1.5 4.63616 1.5 6.5C1.5 8.70914 3.29086 10.5 5.5 10.5V11.5C2.73858 11.5 0.5 9.26142 0.5 6.5C0.5 3.73858 2.73858 1.5 5.5 1.5V6.5H10.5C10.5 9.26142 8.26142 11.5 5.5 11.5V10.5C7.36384 10.5 8.92998 9.22523 9.37402 7.5H4.5V2.62598Z\"></path> <path d=\"M6.5 0.5C9.26142 0.5 11.5 2.73858 11.5 5.5H6.5V0.5ZM7.5 4.5H10.374C10.0122 3.09438 8.90561 1.98775 7.5 1.62598V4.5Z\"></path>"
  },
  "pin": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.71429 4.29683C3.50307 3.506 4.78181 3.5058 5.57084 4.29623L7 2.86455L6.28571 2.14841L8.42857 0L12 3.58069L9.85714 5.7291L9.14286 5.01296L7.71429 6.44524C8.50267 7.23631 8.50307 8.51896 7.71429 9.30979L7 10.0259L4.97444 7.99512L1.97991 10.9974L0 12L0.989963 10.0049L3.98449 7.0026L2 5.01296L2.71429 4.29683ZM7.69993 2.14841L8.42857 1.41788L10.5858 3.58069L9.85714 4.31122L9.14285 3.59508L6.30007 6.44524L7.00718 7.15418C7.40563 7.55367 7.40563 8.20136 7.00718 8.60085L7 8.60805L3.41421 5.01296L3.42139 5.00577C3.81985 4.60628 4.46587 4.60628 4.86432 5.00577L5.57143 5.71471L8.41421 2.86455L7.69993 2.14841Z\"></path>"
  },
  "search": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.0002 9.00022C7.1645 9.628 6.12569 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 6.12571 9.62799 7.16453 9.00019 8.00023L12 11L11 12L8.0002 9.00022ZM9 5C9 7.20914 7.20914 9 5 9C2.79086 9 1 7.20914 1 5C1 2.79086 2.79086 1 5 1C7.20914 1 9 2.79086 9 5Z\"></path>"
  },
  "settings": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.7519 2.61828C10.3682 2.84555 9.86535 2.79428 9.53553 2.46447C9.20572 2.13465 9.15445 1.63177 9.38172 1.24815C9.40996 1.20049 9.44249 1.15466 9.47933 1.11124C9.20667 0.916843 8.91706 0.744685 8.61314 0.597414C8.40596 0.497016 8.19212 0.408184 7.97248 0.33176C7.65827 0.222432 7.33218 0.138492 6.99665 0.0823975C6.99202 0.139227 6.98263 0.194713 6.96889 0.248456C6.85842 0.680545 6.46652 0.999999 6 0.999999C5.53348 0.999999 5.14158 0.680545 5.03111 0.248456C5.01737 0.194713 5.00798 0.139227 5.00335 0.0823975C4.66782 0.138492 4.34173 0.222432 4.02752 0.331759C3.80788 0.408184 3.59404 0.497014 3.38686 0.597412C3.08294 0.744683 2.79333 0.916843 2.52067 1.11124C2.55751 1.15466 2.59004 1.20049 2.61828 1.24815C2.84555 1.63177 2.79428 2.13465 2.46447 2.46447C2.13465 2.79428 1.63177 2.84555 1.24815 2.61828C1.20049 2.59004 1.15466 2.55751 1.11124 2.52067C0.916842 2.79333 0.744682 3.08294 0.597412 3.38686C0.497014 3.59404 0.408184 3.80788 0.331759 4.02752C0.222432 4.34173 0.138492 4.66782 0.0823975 5.00335C0.139228 5.00798 0.194715 5.01737 0.248459 5.03111C0.680547 5.14158 1 5.53349 1 6C1 6.46651 0.680547 6.85842 0.248458 6.96889C0.194714 6.98263 0.139228 6.99202 0.0823975 6.99665C0.138492 7.33218 0.222432 7.65827 0.33176 7.97248C0.408185 8.19212 0.497017 8.40595 0.597415 8.61314C0.744686 8.91706 0.916844 9.20667 1.11124 9.47933C1.15466 9.44249 1.20049 9.40996 1.24815 9.38172C1.63177 9.15445 2.13465 9.20572 2.46447 9.53553C2.79428 9.86535 2.84555 10.3682 2.61828 10.7519C2.59004 10.7995 2.55751 10.8453 2.52067 10.8888C2.79333 11.0832 3.08294 11.2553 3.38686 11.4026C3.59405 11.503 3.80788 11.5918 4.02752 11.6682C4.34173 11.7776 4.66782 11.8615 5.00335 11.9176C5.00798 11.8608 5.01737 11.8053 5.03111 11.7515C5.14158 11.3195 5.53349 11 6 11C6.46651 11 6.85842 11.3195 6.96889 11.7515C6.98263 11.8053 6.99202 11.8608 6.99665 11.9176C7.33218 11.8615 7.65827 11.7776 7.97248 11.6682C8.19212 11.5918 8.40595 11.503 8.61314 11.4026C8.91706 11.2553 9.20667 11.0832 9.47933 10.8888C9.44249 10.8453 9.40996 10.7995 9.38172 10.7519C9.15445 10.3682 9.20572 9.86535 9.53553 9.53553C9.86535 9.20572 10.3682 9.15445 10.7519 9.38172C10.7995 9.40996 10.8453 9.44249 10.8888 9.47933C11.0832 9.20667 11.2553 8.91706 11.4026 8.61314C11.503 8.40595 11.5918 8.19212 11.6682 7.97248C11.7776 7.65827 11.8615 7.33218 11.9176 6.99665C11.8608 6.99202 11.8053 6.98263 11.7515 6.96889C11.3195 6.85842 11 6.46651 11 6C11 5.53348 11.3195 5.14158 11.7515 5.03111C11.8053 5.01737 11.8608 5.00798 11.9176 5.00335C11.8615 4.66782 11.7776 4.34173 11.6682 4.02752C11.5918 3.80788 11.503 3.59405 11.4026 3.38686C11.2553 3.08294 11.0832 2.79333 10.8888 2.52067C10.8453 2.55751 10.7995 2.59004 10.7519 2.61828ZM6 2C6.63239 2 7.19591 1.70675 7.56233 1.24865C7.80163 1.32728 8.033 1.42352 8.25494 1.5359C8.19023 2.11881 8.38135 2.72449 8.82843 3.17157C9.27551 3.61865 9.88119 3.80977 10.4641 3.74506C10.5765 3.967 10.6727 4.19837 10.7514 4.43767C10.2933 4.80409 10 5.36761 10 6C10 6.63239 10.2933 7.19591 10.7513 7.56233C10.6727 7.80163 10.5765 8.033 10.4641 8.25494C9.88119 8.19023 9.27551 8.38135 8.82843 8.82843C8.38135 9.27551 8.19023 9.88119 8.25494 10.4641C8.033 10.5765 7.80162 10.6727 7.56233 10.7513C7.19591 10.2933 6.63239 10 6 10C5.36761 10 4.80409 10.2933 4.43767 10.7513C4.19837 10.6727 3.967 10.5765 3.74506 10.4641C3.80977 9.88119 3.61865 9.27551 3.17157 8.82843C2.72449 8.38135 2.11881 8.19023 1.5359 8.25494C1.42353 8.033 1.32728 7.80162 1.24865 7.56233C1.70674 7.19591 2 6.63239 2 6C2 5.36761 1.70675 4.80409 1.24865 4.43767C1.32728 4.19837 1.42352 3.967 1.5359 3.74506C2.11881 3.80978 2.72449 3.61865 3.17157 3.17157C3.61865 2.72449 3.80977 2.11881 3.74506 1.5359C3.967 1.42352 4.19837 1.32728 4.43767 1.24865C4.80409 1.70674 5.36761 2 6 2Z\"></path>"
  },
  "share": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.99999 3.99999C11.1046 3.99999 12 3.10455 12 1.99998C12 0.895405 11.1046 0 10 0C8.89545 0 8.00002 0.895429 8.00002 2C8.00002 2.14372 8.01516 2.28389 8.04397 2.41902L3.50848 4.68676C3.14183 4.26594 2.60197 3.99999 2 3.99999C0.895429 3.99999 0 4.89542 0 5.99999C0 7.10457 0.895429 8 2 8C2.60196 8 3.14182 7.73405 3.50846 7.31325L8.04395 9.58102C8.01517 9.71612 8 9.8563 8 10C8 11.1046 8.89542 12 10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C9.39803 8 8.85817 8.26595 8.49152 8.68676L3.95604 6.41901C3.98482 6.28388 3.99999 6.1437 3.99999 5.99999C3.99999 5.85629 3.98484 5.71612 3.95604 5.581L8.49153 3.31324C8.85818 3.73405 9.39803 3.99999 9.99999 3.99999ZM11 9.99999C11 10.5523 10.5523 11 9.99999 11C9.44771 11 8.99999 10.5523 8.99999 9.99999C8.99999 9.44771 9.44769 8.99999 9.99999 8.99999C10.5523 8.99999 11 9.44769 11 9.99999ZM2.99999 5.99994C2.99999 6.55222 2.55228 6.99993 2 6.99993C1.44772 6.99993 1.00001 6.55221 1.00001 5.99994C1.00001 5.44767 1.44771 4.99995 2 4.99995C2.55227 4.99995 2.99999 5.44766 2.99999 5.99994ZM11 1.99994C11 2.55222 10.5523 2.99993 9.99999 2.99993C9.44769 2.99993 8.99999 2.55221 8.99999 1.99994C8.99999 1.44766 9.44771 0.999948 9.99999 0.999948C10.5523 0.999948 11 1.44766 11 1.99994Z\"></path>"
  },
  "success-tick": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.87143 8.03274L10.0583 1.84595L11.119 2.90661L3.87142 10.1541L0.881042 7.16365L1.94171 6.103L3.87143 8.03274Z\"></path>"
  },
  "success": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.87125 8.03274L10.0581 1.84595L11.1188 2.90661L3.87123 10.1541L0.880859 7.16365L1.94152 6.103L3.87125 8.03274Z\"></path>"
  },
  "tag": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.41421 1L1.41421 7L5 10.5858L11 4.58579V1H7.41421ZM12 5L5 12L0 7L7 0H12V5Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 3.5C8 3.77614 8.22386 4 8.5 4C8.77614 4 9 3.77614 9 3.5C9 3.22386 8.77614 3 8.5 3C8.22386 3 8 3.22386 8 3.5ZM8.5 2C7.67157 2 7 2.67157 7 3.5C7 4.32843 7.67157 5 8.5 5C9.32843 5 10 4.32843 10 3.5C10 2.67157 9.32843 2 8.5 2Z\"></path>"
  },
  "user": {
    "vb": "0 0 12 12",
    "inner": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 11.0003V11.9961H6V12H0V11.0042C0 10.5513 0.136719 10.149 0.410156 9.79759C0.675781 9.44614 1.01562 9.20794 1.42969 9.08298C1.52344 9.04393 1.63281 9.00488 1.75781 8.96583C1.875 8.92678 2.01562 8.88383 2.17969 8.83697C2.21875 8.82916 2.26562 8.81744 2.32031 8.80182C2.375 8.7862 2.44922 8.76277 2.54297 8.73153C2.61328 8.71591 2.67969 8.70029 2.74219 8.68467C2.79687 8.66124 2.85156 8.64172 2.90625 8.6261C3.42969 8.4699 3.82422 8.29027 4.08984 8.08721C4.35547 7.88415 4.51953 7.62252 4.58203 7.30231C4.34766 7.0602 4.13281 6.77123 3.9375 6.43541C3.74219 6.09958 3.57812 5.74032 3.44531 5.35763C3.30469 4.97494 3.19531 4.58445 3.11719 4.18614C3.03906 3.78002 3 3.38562 3 3.00293C3 2.45623 3.07812 1.99154 3.23437 1.60885C3.39062 1.22616 3.60547 0.917671 3.87891 0.683372C4.15234 0.441264 4.46875 0.269445 4.82812 0.167915C5.19531 0.0585759 5.58594 0.00390625 6 0.00390625V0C6.41406 0 6.80469 0.0546697 7.17187 0.164009C7.53125 0.265539 7.84766 0.437358 8.12109 0.679466C8.39453 0.913765 8.60937 1.22226 8.76562 1.60495C8.92187 1.98763 9 2.45233 9 2.99902C9 3.38171 8.96094 3.77611 8.88281 4.18223C8.80469 4.58054 8.69531 4.97104 8.55469 5.35373C8.42187 5.73641 8.25781 6.09567 8.0625 6.4315C7.86719 6.76733 7.65234 7.0563 7.41797 7.2984C7.48047 7.61861 7.64453 7.88025 7.91016 8.08331C8.17578 8.28636 8.57031 8.46599 9.09375 8.62219C9.14844 8.63781 9.20312 8.65734 9.25781 8.68077C9.32031 8.69639 9.38672 8.71201 9.45703 8.72763C9.55078 8.75887 9.625 8.7823 9.67969 8.79792C9.73437 8.81354 9.78125 8.82525 9.82031 8.83306C9.98437 8.87992 10.125 8.92288 10.2422 8.96193C10.3672 9.00097 10.4766 9.04002 10.5703 9.07907C10.9844 9.20403 11.3242 9.44224 11.5898 9.79369C11.8633 10.1451 12 10.5473 12 11.0003ZM6 1.00748V1.01139C5.32812 1.01139 4.82812 1.16759 4.5 1.47999C4.16406 1.78458 3.99609 2.29222 3.99609 3.00293C3.99609 3.33095 4.03125 3.66678 4.10156 4.01041C4.16406 4.35405 4.25391 4.68598 4.37109 5.00618C4.48828 5.32639 4.625 5.62317 4.78125 5.89652C4.9375 6.17768 5.10937 6.41198 5.29687 6.59941L5.64844 6.96258L5.56641 7.46632C5.47266 8.01302 5.23047 8.45037 4.83984 8.77839C4.44922 9.0986 3.90234 9.36804 3.19922 9.58672C3.13672 9.60234 3.07812 9.62187 3.02344 9.6453C2.96094 9.66092 2.89062 9.67654 2.8125 9.69216C2.69531 9.73121 2.61719 9.75854 2.57812 9.77416C2.53125 9.78197 2.48828 9.78978 2.44922 9.79759C2.30078 9.84445 2.17578 9.8835 2.07422 9.91474C1.97266 9.94598 1.88672 9.97722 1.81641 10.0085L1.71094 10.0436C1.5 10.1061 1.32812 10.2271 1.19531 10.4068C1.0625 10.5864 0.996094 10.7856 0.996094 11.0042H6V11.0003H11.0039C11.0039 10.7816 10.9375 10.5825 10.8047 10.4029C10.6719 10.2232 10.5 10.1022 10.2891 10.0397L10.1836 10.0046C10.1133 9.97331 10.0273 9.94207 9.92578 9.91084C9.82422 9.87959 9.69922 9.84055 9.55078 9.79369C9.51172 9.78588 9.46875 9.77807 9.42187 9.77026C9.38281 9.75464 9.30469 9.7273 9.1875 9.68825C9.10937 9.67263 9.03906 9.65701 8.97656 9.64139C8.92187 9.61796 8.86328 9.59844 8.80078 9.58282C8.09766 9.36414 7.55078 9.09469 7.16016 8.77449C6.76953 8.44647 6.52734 8.00911 6.43359 7.46241L6.35156 6.95867L6.70312 6.59551C6.89062 6.40807 7.0625 6.17377 7.21875 5.89261C7.375 5.61926 7.51172 5.32249 7.62891 5.00228C7.74609 4.68207 7.83594 4.35015 7.89844 4.00651C7.96875 3.66287 8.00391 3.32704 8.00391 2.99902C8.00391 2.28832 7.83594 1.78067 7.5 1.47608C7.17187 1.16368 6.67187 1.00748 6 1.00748Z\"></path>"
  },
  "warning": {
    "vb": "0 0 12 12",
    "inner": "<path d=\"M5 8V5H7V8H5Z\"></path> <path d=\"M7 9.5C7 10.0523 6.55228 10.5 6 10.5C5.44772 10.5 5 10.0523 5 9.5C5 8.94772 5.44772 8.5 6 8.5C6.55228 8.5 7 8.94772 7 9.5Z\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 0L12 12H0L6 0ZM1.61803 11L6 2.23607L10.382 11H1.61803Z\"></path>"
  }
};
const iconNames = Object.keys(ICONS);
function Icon({
  name,
  size = "var(--size-icon)",
  color = "currentColor",
  style = {},
  title,
  ...rest
}) {
  const g = ICONS[name];
  if (!g) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: g.vb,
    width: size,
    height: size,
    fill: color,
    role: title ? "img" : "presentation",
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    style: {
      display: "inline-block",
      flexShrink: 0,
      verticalAlign: "middle",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? "<title>" + title + "</title>" : "") + g.inner
    }
  }, rest));
}
Object.assign(__ds_scope, { iconNames, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/data-ai-platform/app.jsx
try { (() => {
const {
  useState
} = React;
const DS = window.DataAIPlatformDesignSystem_fa7517;
const {
  Button,
  IconButton,
  Icon,
  SearchInput,
  Input,
  Checkbox,
  Dropdown,
  Card,
  Pill,
  Badge,
  StatusIndicator,
  Tabs
} = DS;
const {
  guides,
  arrivals,
  facets,
  entities,
  schemaTabs,
  detailTabs
} = window.KitData;
const typeMeta = {
  dataset: {
    label: "Dataset",
    domain: "data"
  },
  dashboard: {
    label: "Dashboard",
    domain: "data"
  },
  product: {
    label: "Data Product",
    domain: "data"
  },
  model: {
    label: "Model",
    domain: "ai"
  },
  agent: {
    label: "Agentic System",
    domain: "ai"
  },
  skill: {
    label: "Skill",
    domain: "ai"
  },
  glossary: {
    label: "Glossary Term",
    domain: "governance"
  }
};
const guideTone = {
  ai: {
    bg: "var(--salt-color-plum-100)",
    fg: "var(--salt-color-plum-500)",
    eyebrow: "var(--salt-color-plum-500)"
  },
  "data-blue": {
    bg: "var(--salt-color-blue-100)",
    fg: "var(--accent-strong)",
    eyebrow: "var(--accent-strong)"
  },
  governance: {
    bg: "var(--salt-color-olive-100)",
    fg: "var(--salt-color-olive-600)",
    eyebrow: "var(--salt-color-olive-600)"
  }
};
function PreviewBanner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      height: 40,
      background: "var(--salt-color-blue-100)",
      fontSize: 13,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "var(--surface-primary)",
      color: "var(--accent-strong)",
      borderRadius: 999,
      padding: "2px 10px",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".5px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  }), "PREVIEW"), "This environment is for conceptual purposes and user testing. Features may change as the site is actively updated.");
}
function Header({
  showSearch,
  onHome,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 28px",
      background: "var(--surface-primary)",
      borderBottom: "1px solid var(--separator)",
      position: "sticky",
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onHome,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 20,
      cursor: "pointer",
      flexShrink: 0
    }
  }, "Platform"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 620,
      margin: "0 auto"
    }
  }, showSearch && /*#__PURE__*/React.createElement(SearchInput, {
    size: "medium",
    placeholder: "Search the catalog\u2026",
    shortcut: "",
    onSubmit: onSearch
  })), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Account"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 18
  })));
}

/* ---------------- Home ---------------- */
function GuideCard({
  g
}) {
  const t = guideTone[g.tone];
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 210
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: t.bg,
      color: t.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".6px",
      color: t.eyebrow,
      marginBottom: 8
    }
  }, g.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      marginBottom: 8
    }
  }, g.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: "18px",
      color: "var(--text-secondary)",
      flex: 1
    }
  }, g.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--separator)",
      marginTop: 16,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13
  }))));
}
function HomeView({
  onSearch,
  onBrowse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "calc(100vh - 96px)",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg,#ffffff, #f5f7f8)",
      padding: "72px 24px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      lineHeight: 1.12,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      marginBottom: 40
    }
  }, "Discover the Firm's ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-strong)"
    }
  }, "Data and AI"), " capabilities."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 700,
      margin: "0 auto 24px"
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    size: "large",
    showSend: true,
    placeholder: "Search",
    onSubmit: onSearch
  })), /*#__PURE__*/React.createElement(Button, {
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "grid"
    }),
    onClick: onBrowse
  }, "Browse Catalog"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-secondary)",
      padding: "40px 40px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      marginBottom: 4
    }
  }, "Get started in Platform"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      color: "var(--text-secondary)",
      fontSize: 14
    }
  }, "Things you can do across the platform"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, guides.map(g => /*#__PURE__*/React.createElement(GuideCard, {
    key: g.title,
    g: g
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "48px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      marginBottom: 4
    }
  }, "New arrivals"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)",
      fontSize: 14
    }
  }, "Just added to Platform")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Show more ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, arrivals.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    style: {
      borderRadius: "var(--radius-card)",
      background: a.grad,
      height: 180,
      position: "relative",
      overflow: "hidden",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 72,
    style: {
      position: "absolute",
      left: "50%",
      top: "48%",
      transform: "translate(-50%,-50%)",
      color: a.color,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      bottom: 16,
      fontWeight: 600,
      fontSize: 16
    }
  }, a.name)))))));
}

/* ---------------- Results ---------------- */
function FacetRow({
  label,
  checked,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "5px 0",
      cursor: "pointer",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      flexShrink: 0,
      border: `1.5px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: checked,
    onChange: onToggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0
    }
  }), label);
}
function Sidebar() {
  const [sel, setSel] = useState("Dataset");
  const [fav, setFav] = useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 288,
      flexShrink: 0,
      borderRight: "1px solid var(--separator)",
      background: "var(--surface-primary)",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "22px 22px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 4
    }
  }, "Filters"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--separator)",
      margin: "10px 0 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Entity Type"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-up",
    size: 14,
    style: {
      color: "var(--text-tertiary)"
    }
  })), facets.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.section,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: ".5px",
      color: "var(--text-tertiary)",
      fontWeight: 600,
      marginBottom: 6
    }
  }, f.section), f.options.map(o => /*#__PURE__*/React.createElement(FacetRow, {
    key: o,
    label: o,
    checked: sel === o,
    onToggle: () => setSel(o)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--separator)",
      padding: "14px 22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "View my favorites"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFav(!fav),
    "aria-label": "Toggle favorites",
    style: {
      width: 40,
      height: 22,
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: fav ? "var(--accent)" : "var(--salt-color-gray-300)",
      position: "relative",
      transition: "background .15s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: fav ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      transition: "left .15s"
    }
  }))));
}
function ResultCard({
  e,
  onOpen
}) {
  const m = typeMeta[e.type];
  return /*#__PURE__*/React.createElement(Card, {
    accentBorder: "var(--accent)",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    category: e.type,
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      name: e.icon,
      size: 12
    }),
    style: {
      marginBottom: 10
    }
  }, m.label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      marginBottom: 6
    }
  }, e.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 13.5,
      lineHeight: "20px",
      color: "var(--text-secondary)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, e.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      fontSize: 12.5,
      color: "var(--text-tertiary)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 13
  }), " ", e.publisher), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder-closed",
    size: 13
  }), " ", e.dataspace), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), " ", e.updated))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      alignSelf: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    appearance: "solid",
    sentiment: "accented",
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }),
    onClick: () => onOpen(e)
  }, "View"))));
}
function ResultsView({
  query,
  onOpen,
  onClear
}) {
  const [sort, setSort] = useState("Relevance");
  const [page, setPage] = useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "calc(100vh - 96px)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "28px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26
    }
  }, "Results for ", /*#__PURE__*/React.createElement("span", {
    style: {}
  }, "\u201C", query || "risk", "\u201D")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontSize: 14
    }
  }, "1\u2013", entities.length, " of 54"), /*#__PURE__*/React.createElement("button", {
    onClick: onClear,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "var(--accent-strong)",
      color: "#fff",
      border: "none",
      borderRadius: 999,
      padding: "5px 12px",
      fontSize: 12.5,
      cursor: "pointer"
    }
  }, "Clear search ", /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 11
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, "Sort by"), /*#__PURE__*/React.createElement(Dropdown, {
    options: ["Relevance", "Recently updated", "Most used"],
    value: sort,
    onChange: setSort,
    style: {
      width: 180
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 16,
      background: "var(--salt-color-plum-100)",
      border: "1px solid var(--salt-color-plum-200, #e6b9fa)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 16,
    style: {
      color: "var(--salt-color-plum-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".6px",
      color: "var(--salt-color-plum-600)"
    }
  }, "AI OVERVIEW")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-error)",
      fontSize: 14
    }
  }, "API 502: Bad Gateway \u2014 /api/studio/overview"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600
    }
  }, "Retry"))), entities.map(e => /*#__PURE__*/React.createElement(ResultCard, {
    key: e.id,
    e: e,
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: pgBtn(false),
    onClick: () => setPage(Math.max(1, page - 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 12
  }), " Prev"), [1, 2, 3, 4, 5, 6].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setPage(p),
    style: pgBtn(p === page)
  }, p)), /*#__PURE__*/React.createElement("button", {
    style: pgBtn(false),
    onClick: () => setPage(Math.min(6, page + 1))
  }, "Next ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  }))))));
}
function pgBtn(active) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    minWidth: 34,
    height: 34,
    padding: "0 10px",
    justifyContent: "center",
    borderRadius: "var(--radius-control)",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "var(--font-body)",
    border: active ? "none" : "1px solid var(--border-medium)",
    background: active ? "var(--salt-color-ocean-600)" : "var(--surface-primary)",
    color: active ? "#fff" : "var(--text-primary)",
    fontWeight: active ? 600 : 400
  };
}

/* ---------------- Detail ---------------- */
function InfoRow({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "130px 1fr",
      gap: 12,
      padding: "9px 0",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, v));
}
function PanelCard({
  icon,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--separator)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontWeight: 600,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    style: {
      color: "var(--text-secondary)"
    }
  }), " ", title), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14,
    style: {
      color: "var(--text-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 18px"
    }
  }, children));
}
function DetailView({
  e,
  onBack,
  onSearch
}) {
  const [tab, setTab] = useState("Overview");
  const [schemaSel, setSchemaSel] = useState("Logical");
  const m = typeMeta[e.type];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "calc(100vh - 96px)",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "22px 40px 60px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-primary)",
      fontSize: 13,
      fontWeight: 600,
      fontFamily: "var(--font-body)",
      padding: 0,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 14
  }), " Search Results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--domain-data-text)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: e.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".6px",
      color: "var(--domain-data-text)"
    }
  }, m.label.toUpperCase())), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      marginBottom: 12
    }
  }, e.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 14.5,
      lineHeight: "22px",
      color: "var(--text-secondary)",
      maxWidth: 900
    }
  }, e.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    category: e.domain,
    variant: "fill"
  }, e.dataspace), /*#__PURE__*/React.createElement(StatusIndicator, {
    status: "success"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Available")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, e.uuid, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 14,
    style: {
      color: "var(--text-tertiary)",
      cursor: "pointer"
    }
  })))), /*#__PURE__*/React.createElement(Button, {
    appearance: "solid",
    sentiment: "accented",
    style: {
      flexShrink: 0
    }
  }, "Request access")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeId: tab,
    onChange: setTab,
    items: detailTabs.map(t => ({
      id: t,
      label: t
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, tab === "Overview" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr",
      gap: 18,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PanelCard, {
    icon: "document",
    title: "Dataset Details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoRow, {
    k: "Type",
    v: "Source"
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Lifecycle Status",
    v: e.lifecycle
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Availability Status",
    v: e.availability
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Is Restricted",
    v: e.restricted
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Is Federated",
    v: e.federated
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoRow, {
    k: "Dataspace",
    v: e.dataspace
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Owning Application",
    v: "\u2014"
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Publisher",
    v: e.publisher
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Data Product",
    v: "\u2014"
  })))), /*#__PURE__*/React.createElement(PanelCard, {
    icon: "user",
    title: "Ownership"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--separator)",
      borderRadius: "var(--radius-control)",
      padding: "12px 14px",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, e.owner), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, "Dataset Owner")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => ev.preventDefault(),
    style: {
      display: "inline-block",
      marginTop: 12,
      fontWeight: 600,
      fontSize: 13
    }
  }, "Show More")), /*#__PURE__*/React.createElement(PanelCard, {
    icon: "database",
    title: "Connectivity"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "database",
    size: 16,
    style: {
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13.5,
      fontFamily: "var(--font-mono)"
    }
  }, e.connectivity), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => ev.preventDefault(),
    style: {
      fontSize: 13
    }
  }, "View"))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => ev.preventDefault(),
    style: {
      display: "inline-block",
      marginTop: 12,
      fontWeight: 600,
      fontSize: 13
    }
  }, "Show More"))), tab === "Schema" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [["Logical", "Dataset Attributes"], ["Conceptual", "Conceptual Attributes"]].map(([t, s]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    selected: schemaSel === t,
    onClick: () => setSchemaSel(t),
    padding: "14px 16px",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "grid",
    size: 16,
    style: {
      color: "var(--text-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, s))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-secondary)",
      borderRadius: "var(--radius-card)",
      padding: "16px 20px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, schemaSel, " Attributes ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontWeight: 400
    }
  }, "(0)")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, schemaSel, " Attributes for this Dataset.")), /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveId: "Details",
    items: schemaTabs.map(t => ({
      id: t,
      label: t
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 0",
      textAlign: "center",
      color: "var(--text-tertiary)",
      fontSize: 14,
      background: "var(--surface-primary)"
    }
  }, "No ", schemaSel.toLowerCase(), " attributes available."))), ["Distributions", "Dataset Series", "Ownership", "Visualize Data", "Details"].includes(tab) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "60px 0",
      textAlign: "center",
      color: "var(--text-tertiary)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: tab === "Visualize Data" ? "bar-chart" : tab === "Ownership" ? "user" : "layers",
    size: 28,
    style: {
      color: "var(--border-strong)",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("div", null, tab, " \u2014 content omitted in this recreation.")))));
}

/* ---------------- App ---------------- */
function App() {
  const [view, setView] = useState({
    name: "home"
  });
  const query = view.query || "risk";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-primary)"
    }
  }, /*#__PURE__*/React.createElement(PreviewBanner, null), /*#__PURE__*/React.createElement(Header, {
    showSearch: view.name !== "home",
    onHome: () => setView({
      name: "home"
    }),
    onSearch: q => setView({
      name: "results",
      query: q || "risk"
    })
  }), view.name === "home" && /*#__PURE__*/React.createElement(HomeView, {
    onSearch: q => setView({
      name: "results",
      query: q || "risk"
    }),
    onBrowse: () => setView({
      name: "results",
      query: ""
    })
  }), view.name === "results" && /*#__PURE__*/React.createElement(ResultsView, {
    query: query,
    onOpen: e => setView({
      name: "detail",
      e,
      query
    }),
    onClear: () => setView({
      name: "home"
    })
  }), view.name === "detail" && /*#__PURE__*/React.createElement(DetailView, {
    e: view.e,
    onBack: () => setView({
      name: "results",
      query
    })
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/data-ai-platform/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/data-ai-platform/data.js
try { (() => {
// Sample content for the Platform UI kit. Illustrative, not real data.
window.KitData = {
  guides: [{
    eyebrow: "GUIDE",
    title: "Build an Agent",
    desc: "Build AI agents and workflows using a drag-and-drop visual editor.",
    icon: "layers",
    tone: "ai"
  }, {
    eyebrow: "GUIDE",
    title: "Manage Data",
    desc: "Register, discover, access and integrate data across the firm.",
    icon: "database",
    tone: "data-blue"
  }, {
    eyebrow: "GUIDE",
    title: "Explore Available Assets",
    desc: "Search for and access datasets, models, and AI assets across the firm.",
    icon: "grid",
    tone: "governance"
  }, {
    eyebrow: "GUIDE",
    title: "Access GenAI Models",
    desc: "Work with foundational GenAI models without any infrastructure setup.",
    icon: "api",
    tone: "ai"
  }],
  arrivals: [{
    name: "Support Copilot",
    type: "agent",
    icon: "help",
    grad: "linear-gradient(135deg,#faebfa,#f5e0ff)",
    color: "var(--salt-color-plum-500)"
  }, {
    name: "Counterparty Exposure",
    type: "dataset",
    icon: "database",
    grad: "linear-gradient(135deg,#e3fbff,#dcf7f7)",
    color: "var(--salt-color-ocean-500)"
  }],
  facets: [{
    section: "Data",
    options: ["Data Product", "Dataset", "Dashboard"]
  }, {
    section: "AI / ML",
    options: ["Agentic System", "Model", "Skill"]
  }, {
    section: "Governance",
    options: ["Glossary Term", "Process", "Report", "Use Case"]
  }, {
    section: "Technical Assets",
    options: ["Application", "API", "Notebook"]
  }],
  entities: [{
    id: "ors-residual",
    type: "dataset",
    domain: "data",
    icon: "database",
    name: "Operational Risk Summary Residual Risk Metric",
    desc: "This entity holds analytical data related to operational risk management and compliance monitoring. It provides detailed metrics on residual risks, control performance, and key risk indicators, enabling risk monitoring, reporting, and executive decision-making processes.",
    dataspace: "Corporate Controls",
    publisher: "ct_data_compass",
    owner: "Name not available (B061974)",
    updated: "Jul 10, 2026",
    uuid: "4ec5f327-4ee4-4faa-a9e8-3d0edc9330a0",
    lifecycle: "Proposed",
    availability: "Available",
    restricted: "false",
    federated: "false",
    connectivity: "ors_residual_risk_metric_trusted_v"
  }, {
    id: "cp-credit",
    type: "dataset",
    domain: "data",
    icon: "database",
    name: "Counterparty Credit Exposure",
    desc: "Daily counterparty credit exposure across derivatives and financing trades, aggregated by legal entity and netting set for risk monitoring.",
    dataspace: "Wholesale Credit Risk",
    publisher: "wcr_exposure_hub",
    owner: "Credit Risk Analytics",
    updated: "Jul 12, 2026",
    uuid: "8b21ac09-77de-4b1e-9c02-1f6ad0e441bc",
    lifecycle: "Published",
    availability: "Available",
    restricted: "true",
    federated: "false",
    connectivity: "cp_credit_exposure_daily_v"
  }, {
    id: "exec-revenue",
    type: "dashboard",
    domain: "data",
    icon: "bar-chart",
    name: "Executive Revenue Dashboard",
    desc: "Board-level revenue, margin and pipeline dashboard refreshed nightly across all lines of business and regions.",
    dataspace: "Finance Reporting",
    publisher: "fpna_reporting",
    owner: "FP&A",
    updated: "Jul 13, 2026",
    uuid: "1c9f4d22-6a8e-40b5-bb47-9e2c5f8ad310",
    lifecycle: "Published",
    availability: "Available",
    restricted: "false",
    federated: "true",
    connectivity: "exec_revenue_nightly_v"
  }, {
    id: "churn-v4",
    type: "model",
    domain: "ai",
    icon: "layers",
    name: "Churn Propensity Model v4",
    desc: "Gradient-boosted model scoring 30-day churn risk for active retail accounts. Serves batch and real-time inference via the model gateway.",
    dataspace: "Retention Data Science",
    publisher: "retention_ml",
    owner: "Retention ML",
    updated: "Jul 09, 2026",
    uuid: "a7f0c3e1-2b44-4d90-8e17-5c9b0f21d6aa",
    lifecycle: "Published",
    availability: "Available",
    restricted: "false",
    federated: "false",
    connectivity: "churn_propensity_v4_endpoint"
  }, {
    id: "trade-agent",
    type: "agent",
    domain: "ai",
    icon: "help",
    name: "Trade Surveillance Copilot",
    desc: "GenAI agent that triages surveillance alerts, drafts case narratives and cites supporting trade and communications evidence.",
    dataspace: "Markets Surveillance",
    publisher: "genai_platform",
    owner: "GenAI Platform",
    updated: "Jul 14, 2026",
    uuid: "d4e5f6a7-8899-4a0b-bc1d-2e3f40516273",
    lifecycle: "Beta",
    availability: "Available",
    restricted: "true",
    federated: "false",
    connectivity: "trade_surveillance_agent_v"
  }, {
    id: "kyc-glossary",
    type: "glossary",
    domain: "governance",
    icon: "document",
    name: "Beneficial Owner (KYC)",
    desc: "Governed glossary term defining beneficial ownership thresholds and identification requirements under the firm's KYC standard.",
    dataspace: "Financial Crime",
    publisher: "governance_office",
    owner: "Financial Crime",
    updated: "Jul 06, 2026",
    uuid: "f0112233-4455-4677-8899-aabbccddeeff",
    lifecycle: "Approved",
    availability: "Available",
    restricted: "false",
    federated: "false",
    connectivity: "—"
  }],
  schemaTabs: ["Details", "Annotations", "Governance", "Availability"],
  detailTabs: ["Overview", "Schema", "Distributions", "Dataset Series", "Ownership", "Visualize Data", "Details"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/data-ai-platform/data.js", error: String((e && e.message) || e) }); }

// ui_kits/data-ai-platform/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * On screen the document renders as a single continuous sheet on a desk
 * background (Google Docs' pageless view): you scroll one tall page card.
 * There is no manual page-splitting — write the whole document as normal
 * flow inside <doc-page> and the browser's print engine paginates it at
 * export.
 *
 * At print the component injects `@page { size: …; margin: 0 }` (which
 * leaves Chrome no margin box to draw its date/URL/page-count header in)
 * and moves the visual margin onto the sheet's own padding, so the printed
 * page has the same inset you see on screen. Standard break-hygiene rules
 * (`break-inside: avoid` on figures, code blocks, images and table rows;
 * `orphans/widows: 3`) are applied so paragraphs and groups split cleanly.
 * On screen and at print, headings default to `text-wrap: balance` and
 * body text (p, li, blockquote, figcaption) to `text-wrap: pretty`, so
 * the document avoids widowed/orphaned words; the defaults have zero
 * specificity, so any text-wrap you declare on those elements wins.
 * The component also marks the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page size="letter" margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 *
 * Attributes:
 *   size    — letter | a4 | legal (default letter)
 *   orientation — portrait (default) | landscape. For documents built to
 *           export, always set it explicitly. landscape swaps the named
 *           size's dimensions (letter landscape prints 11in × 8.5in).
 *   width / height — explicit CSS lengths, override `size` and
 *           `orientation`: the page IS the design's size (a poster
 *           printed at its true dimensions). With both set, the component
 *           also declares the page box as the preview size (a
 *           `meta[name="omelette-fixed-size"]` it injects at runtime,
 *           never overriding one you author), so the in-app preview
 *           scales the whole sheet into view.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the named
 *           paper: content lays out at exactly this size, and the
 *           component scales it to fit the printable area (centered
 *           horizontally, top-aligned), so e.g. a 960px-wide poster lands
 *           on one Letter page. Both must be set; they do not change the
 *           page box — `size`/`orientation` (or `width`/`height`)
 *           still name the paper. For pages WITHOUT running
 *           header/footer slots — the fit box fills the printable area
 *           and does not subtract slot heights.
 *   margin  — printable inset on every page (default 0.75in); margin="0"
 *           makes pages full-bleed (content then owns its own insets)
 *
 * Running header/footer (optional): give an element `slot="header"` or
 * `slot="footer"` and it repeats on every printed page via
 * `position: fixed`. To keep body text from sliding under it, the
 * component prints inside a single-cell table whose <thead>/<tfoot> are
 * spacers sized to the header/footer height — browsers repeat thead/tfoot
 * on every page, so each sheet's content starts below the header and ends
 * above the footer. On screen the header/footer render once at the
 * top/bottom of the sheet.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks: `break-before: page` on an element that must start
 *   a new page (a chapter, an appendix). Add your own kept-together
 *   blocks (callouts, stat tiles, cards) to a `break-inside: avoid`
 *   rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #ece8dd;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 14px rgba(20, 20, 19, 0.12);
      border-radius: 2px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
      } else if (typeof survivor._syncFixedSizeMeta === 'function') {
        // A departed true-size owner hands the page-global preview meta
        // to whatever true-size page remains (or it's removed).
        survivor._syncFixedSizeMeta();
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      this._vars.textContent = ':host{' + fitVars + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      tag.textContent = '@page { size: ' + this.pageWidth + ' ' + this.pageHeight + '; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/data-ai-platform/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/data-ai-platform/print-app.jsx
try { (() => {
const {
  useState
} = React;
const DS = window.DataAIPlatformDesignSystem_fa7517;
const {
  Button,
  IconButton,
  Icon,
  SearchInput,
  Input,
  Checkbox,
  Dropdown,
  Card,
  Pill,
  Badge,
  StatusIndicator,
  Tabs
} = DS;
const {
  guides,
  arrivals,
  facets,
  entities,
  schemaTabs,
  detailTabs
} = window.KitData;
const typeMeta = {
  dataset: {
    label: "Dataset",
    domain: "data"
  },
  dashboard: {
    label: "Dashboard",
    domain: "data"
  },
  product: {
    label: "Data Product",
    domain: "data"
  },
  model: {
    label: "Model",
    domain: "ai"
  },
  agent: {
    label: "Agentic System",
    domain: "ai"
  },
  skill: {
    label: "Skill",
    domain: "ai"
  },
  glossary: {
    label: "Glossary Term",
    domain: "governance"
  }
};
const guideTone = {
  ai: {
    bg: "var(--salt-color-plum-100)",
    fg: "var(--salt-color-plum-500)",
    eyebrow: "var(--salt-color-plum-500)"
  },
  "data-blue": {
    bg: "var(--salt-color-blue-100)",
    fg: "var(--accent-strong)",
    eyebrow: "var(--accent-strong)"
  },
  governance: {
    bg: "var(--salt-color-olive-100)",
    fg: "var(--salt-color-olive-600)",
    eyebrow: "var(--salt-color-olive-600)"
  }
};
function PreviewBanner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      height: 40,
      background: "var(--salt-color-blue-100)",
      fontSize: 13,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "var(--surface-primary)",
      color: "var(--accent-strong)",
      borderRadius: 999,
      padding: "2px 10px",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".5px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  }), "PREVIEW"), "This environment is for conceptual purposes and user testing. Features may change as the site is actively updated.");
}
function Header({
  showSearch,
  onHome,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 28px",
      background: "var(--surface-primary)",
      borderBottom: "1px solid var(--separator)",
      position: "static"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onHome,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 20,
      cursor: "pointer",
      flexShrink: 0
    }
  }, "Platform"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 620,
      margin: "0 auto"
    }
  }, showSearch && /*#__PURE__*/React.createElement(SearchInput, {
    size: "medium",
    placeholder: "Search the catalog\u2026",
    shortcut: "",
    onSubmit: onSearch
  })), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Account"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 18
  })));
}

/* ---------------- Home ---------------- */
function GuideCard({
  g
}) {
  const t = guideTone[g.tone];
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 210
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: t.bg,
      color: t.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".6px",
      color: t.eyebrow,
      marginBottom: 8
    }
  }, g.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      marginBottom: 8
    }
  }, g.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: "18px",
      color: "var(--text-secondary)",
      flex: 1
    }
  }, g.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--separator)",
      marginTop: 16,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13
  }))));
}
function HomeView({
  onSearch,
  onBrowse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {}
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg,#ffffff, #f5f7f8)",
      padding: "72px 24px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      lineHeight: 1.12,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      marginBottom: 40
    }
  }, "Discover the Firm's ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-strong)"
    }
  }, "Data and AI"), " capabilities."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 700,
      margin: "0 auto 24px"
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    size: "large",
    showSend: true,
    placeholder: "Search",
    onSubmit: onSearch
  })), /*#__PURE__*/React.createElement(Button, {
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "grid"
    }),
    onClick: onBrowse
  }, "Browse Catalog"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-secondary)",
      padding: "40px 40px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      marginBottom: 4
    }
  }, "Get started in Platform"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      color: "var(--text-secondary)",
      fontSize: 14
    }
  }, "Things you can do across the platform"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, guides.map(g => /*#__PURE__*/React.createElement(GuideCard, {
    key: g.title,
    g: g
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "48px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      marginBottom: 4
    }
  }, "New arrivals"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)",
      fontSize: 14
    }
  }, "Just added to Platform")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Show more ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, arrivals.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    style: {
      borderRadius: "var(--radius-card)",
      background: a.grad,
      height: 180,
      position: "relative",
      overflow: "hidden",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 72,
    style: {
      position: "absolute",
      left: "50%",
      top: "48%",
      transform: "translate(-50%,-50%)",
      color: a.color,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      bottom: 16,
      fontWeight: 600,
      fontSize: 16
    }
  }, a.name)))))));
}

/* ---------------- Results ---------------- */
function FacetRow({
  label,
  checked,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "5px 0",
      cursor: "pointer",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      flexShrink: 0,
      border: `1.5px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: checked,
    onChange: onToggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0
    }
  }), label);
}
function Sidebar() {
  const [sel, setSel] = useState("Dataset");
  const [fav, setFav] = useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 288,
      flexShrink: 0,
      borderRight: "1px solid var(--separator)",
      background: "var(--surface-primary)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "22px 22px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 4
    }
  }, "Filters"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--separator)",
      margin: "10px 0 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Entity Type"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-up",
    size: 14,
    style: {
      color: "var(--text-tertiary)"
    }
  })), facets.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.section,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: ".5px",
      color: "var(--text-tertiary)",
      fontWeight: 600,
      marginBottom: 6
    }
  }, f.section), f.options.map(o => /*#__PURE__*/React.createElement(FacetRow, {
    key: o,
    label: o,
    checked: sel === o,
    onToggle: () => setSel(o)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--separator)",
      padding: "14px 22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "View my favorites"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFav(!fav),
    "aria-label": "Toggle favorites",
    style: {
      width: 40,
      height: 22,
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: fav ? "var(--accent)" : "var(--salt-color-gray-300)",
      position: "relative",
      transition: "background .15s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: fav ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      transition: "left .15s"
    }
  }))));
}
function ResultCard({
  e,
  onOpen
}) {
  const m = typeMeta[e.type];
  return /*#__PURE__*/React.createElement(Card, {
    accentBorder: "var(--accent)",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    category: e.type,
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      name: e.icon,
      size: 12
    }),
    style: {
      marginBottom: 10
    }
  }, m.label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      marginBottom: 6
    }
  }, e.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 13.5,
      lineHeight: "20px",
      color: "var(--text-secondary)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, e.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      fontSize: 12.5,
      color: "var(--text-tertiary)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 13
  }), " ", e.publisher), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder-closed",
    size: 13
  }), " ", e.dataspace), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), " ", e.updated))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      alignSelf: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    appearance: "solid",
    sentiment: "accented",
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }),
    onClick: () => onOpen(e)
  }, "View"))));
}
function ResultsView({
  query,
  onOpen,
  onClear
}) {
  const [sort, setSort] = useState("Relevance");
  const [page, setPage] = useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: "28px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26
    }
  }, "Results for ", /*#__PURE__*/React.createElement("span", {
    style: {}
  }, "\u201C", query || "risk", "\u201D")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontSize: 14
    }
  }, "1\u2013", entities.length, " of 54"), /*#__PURE__*/React.createElement("button", {
    onClick: onClear,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "var(--accent-strong)",
      color: "#fff",
      border: "none",
      borderRadius: 999,
      padding: "5px 12px",
      fontSize: 12.5,
      cursor: "pointer"
    }
  }, "Clear search ", /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 11
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, "Sort by"), /*#__PURE__*/React.createElement(Dropdown, {
    options: ["Relevance", "Recently updated", "Most used"],
    value: sort,
    onChange: setSort,
    style: {
      width: 180
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 16,
      background: "var(--salt-color-plum-100)",
      border: "1px solid var(--salt-color-plum-200, #e6b9fa)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 16,
    style: {
      color: "var(--salt-color-plum-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".6px",
      color: "var(--salt-color-plum-600)"
    }
  }, "AI OVERVIEW")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-error)",
      fontSize: 14
    }
  }, "API 502: Bad Gateway \u2014 /api/studio/overview"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600
    }
  }, "Retry"))), entities.map(e => /*#__PURE__*/React.createElement(ResultCard, {
    key: e.id,
    e: e,
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: pgBtn(false),
    onClick: () => setPage(Math.max(1, page - 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 12
  }), " Prev"), [1, 2, 3, 4, 5, 6].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setPage(p),
    style: pgBtn(p === page)
  }, p)), /*#__PURE__*/React.createElement("button", {
    style: pgBtn(false),
    onClick: () => setPage(Math.min(6, page + 1))
  }, "Next ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  }))))));
}
function pgBtn(active) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    minWidth: 34,
    height: 34,
    padding: "0 10px",
    justifyContent: "center",
    borderRadius: "var(--radius-control)",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "var(--font-body)",
    border: active ? "none" : "1px solid var(--border-medium)",
    background: active ? "var(--salt-color-ocean-600)" : "var(--surface-primary)",
    color: active ? "#fff" : "var(--text-primary)",
    fontWeight: active ? 600 : 400
  };
}

/* ---------------- Detail ---------------- */
function InfoRow({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "130px 1fr",
      gap: 12,
      padding: "9px 0",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, v));
}
function PanelCard({
  icon,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--separator)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontWeight: 600,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    style: {
      color: "var(--text-secondary)"
    }
  }), " ", title), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14,
    style: {
      color: "var(--text-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 18px"
    }
  }, children));
}
function DetailView({
  e,
  onBack,
  onSearch
}) {
  const [tab, setTab] = useState("Overview");
  const [schemaSel, setSchemaSel] = useState("Logical");
  const m = typeMeta[e.type];
  return /*#__PURE__*/React.createElement("div", {
    style: {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "22px 40px 60px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-primary)",
      fontSize: 13,
      fontWeight: 600,
      fontFamily: "var(--font-body)",
      padding: 0,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 14
  }), " Search Results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--domain-data-text)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: e.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".6px",
      color: "var(--domain-data-text)"
    }
  }, m.label.toUpperCase())), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      marginBottom: 12
    }
  }, e.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 14.5,
      lineHeight: "22px",
      color: "var(--text-secondary)",
      maxWidth: 900
    }
  }, e.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    category: e.domain,
    variant: "fill"
  }, e.dataspace), /*#__PURE__*/React.createElement(StatusIndicator, {
    status: "success"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Available")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, e.uuid, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 14,
    style: {
      color: "var(--text-tertiary)",
      cursor: "pointer"
    }
  })))), /*#__PURE__*/React.createElement(Button, {
    appearance: "solid",
    sentiment: "accented",
    style: {
      flexShrink: 0
    }
  }, "Request access")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeId: tab,
    onChange: setTab,
    items: detailTabs.map(t => ({
      id: t,
      label: t
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, tab === "Overview" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr",
      gap: 18,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PanelCard, {
    icon: "document",
    title: "Dataset Details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoRow, {
    k: "Type",
    v: "Source"
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Lifecycle Status",
    v: e.lifecycle
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Availability Status",
    v: e.availability
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Is Restricted",
    v: e.restricted
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Is Federated",
    v: e.federated
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoRow, {
    k: "Dataspace",
    v: e.dataspace
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Owning Application",
    v: "\u2014"
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Publisher",
    v: e.publisher
  }), /*#__PURE__*/React.createElement(InfoRow, {
    k: "Data Product",
    v: "\u2014"
  })))), /*#__PURE__*/React.createElement(PanelCard, {
    icon: "user",
    title: "Ownership"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--separator)",
      borderRadius: "var(--radius-control)",
      padding: "12px 14px",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, e.owner), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, "Dataset Owner")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => ev.preventDefault(),
    style: {
      display: "inline-block",
      marginTop: 12,
      fontWeight: 600,
      fontSize: 13
    }
  }, "Show More")), /*#__PURE__*/React.createElement(PanelCard, {
    icon: "database",
    title: "Connectivity"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "database",
    size: 16,
    style: {
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13.5,
      fontFamily: "var(--font-mono)"
    }
  }, e.connectivity), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => ev.preventDefault(),
    style: {
      fontSize: 13
    }
  }, "View"))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => ev.preventDefault(),
    style: {
      display: "inline-block",
      marginTop: 12,
      fontWeight: 600,
      fontSize: 13
    }
  }, "Show More"))), tab === "Schema" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [["Logical", "Dataset Attributes"], ["Conceptual", "Conceptual Attributes"]].map(([t, s]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    selected: schemaSel === t,
    onClick: () => setSchemaSel(t),
    padding: "14px 16px",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "grid",
    size: 16,
    style: {
      color: "var(--text-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, s))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-secondary)",
      borderRadius: "var(--radius-card)",
      padding: "16px 20px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, schemaSel, " Attributes ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontWeight: 400
    }
  }, "(0)")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, schemaSel, " Attributes for this Dataset.")), /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveId: "Details",
    items: schemaTabs.map(t => ({
      id: t,
      label: t
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 0",
      textAlign: "center",
      color: "var(--text-tertiary)",
      fontSize: 14,
      background: "var(--surface-primary)"
    }
  }, "No ", schemaSel.toLowerCase(), " attributes available."))), ["Distributions", "Dataset Series", "Ownership", "Visualize Data", "Details"].includes(tab) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "60px 0",
      textAlign: "center",
      color: "var(--text-tertiary)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: tab === "Visualize Data" ? "bar-chart" : tab === "Ownership" ? "user" : "layers",
    size: 28,
    style: {
      color: "var(--border-strong)",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("div", null, tab, " \u2014 content omitted in this recreation.")))));
}

/* ---------------- Print composition ---------------- */
function PrintApp() {
  const noop = () => {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-primary)"
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PreviewBanner, null), /*#__PURE__*/React.createElement(Header, {
    showSearch: false,
    onHome: noop,
    onSearch: noop
  }), /*#__PURE__*/React.createElement(HomeView, {
    onSearch: noop,
    onBrowse: noop
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      breakBefore: "page"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    showSearch: true,
    onHome: noop,
    onSearch: noop
  }), /*#__PURE__*/React.createElement(ResultsView, {
    query: "risk",
    onOpen: noop,
    onClear: noop
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      breakBefore: "page"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    showSearch: true,
    onHome: noop,
    onSearch: noop
  }), /*#__PURE__*/React.createElement(DetailView, {
    e: entities[0],
    onBack: noop
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(PrintApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/data-ai-platform/print-app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.StatusIndicator = __ds_scope.StatusIndicator;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Icon = __ds_scope.Icon;

})();
