/* @ds-bundle: {"format":4,"namespace":"AuretteDesignSystem_2845d3","components":[{"name":"CategoryTile","sourcePath":"components/commerce/CategoryTile.jsx"},{"name":"FeatureMark","sourcePath":"components/commerce/FeatureMark.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"SectionHeader","sourcePath":"components/commerce/SectionHeader.jsx"},{"name":"StarRating","sourcePath":"components/commerce/StarRating.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"CarouselDots","sourcePath":"components/navigation/CarouselDots.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/CategoryTile.jsx":"9794b52315d7","components/commerce/FeatureMark.jsx":"fe8b9eea2e53","components/commerce/ProductCard.jsx":"2848a63f5362","components/commerce/SectionHeader.jsx":"cfe3677d3969","components/commerce/StarRating.jsx":"51410ed5a0d5","components/core/Badge.jsx":"6fdb7eadebf9","components/core/Button.jsx":"9c4a7e432a15","components/core/Card.jsx":"0384a938f273","components/core/Icon.jsx":"ead43090f3a4","components/core/IconButton.jsx":"96f9bf9557c0","components/core/Tag.jsx":"e27990c7b914","components/feedback/Dialog.jsx":"f7077b9c0c8b","components/feedback/Toast.jsx":"405c022e565c","components/feedback/Tooltip.jsx":"1e67d8874ace","components/forms/Checkbox.jsx":"1d39e7467b2b","components/forms/Input.jsx":"60cf4d83b895","components/forms/QuantityStepper.jsx":"81160841a86c","components/forms/Radio.jsx":"5f2e742bdc6a","components/forms/Select.jsx":"77aa18d5c32c","components/forms/Switch.jsx":"48f9c095de8d","components/navigation/Accordion.jsx":"17abb8f75a90","components/navigation/Breadcrumb.jsx":"b5ce24f5d2e2","components/navigation/CarouselDots.jsx":"ffd9cc86f432","components/navigation/Pagination.jsx":"5e7c44d2ae5d","components/navigation/Tabs.jsx":"47e467d6bc44","ui_kits/storefront/AboutScreen.jsx":"0a10eae88576","ui_kits/storefront/App.jsx":"1de8acf60b26","ui_kits/storefront/Chrome.jsx":"b492d05f1851","ui_kits/storefront/CollectionScreen.jsx":"7a8af407ae92","ui_kits/storefront/HomeScreen.jsx":"e109cd123a22","ui_kits/storefront/ProductScreen.jsx":"cdaafebc7dc1","ui_kits/storefront/data.js":"6c65ec762790"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AuretteDesignSystem_2845d3 = window.AuretteDesignSystem_2845d3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CategoryTile.jsx
try { (() => {
function CategoryTile({
  label,
  image,
  href = '#',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: ['au-cat', className].filter(Boolean).join(' '),
    href: href
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: label
  }), /*#__PURE__*/React.createElement("span", {
    className: "au-cat__veil"
  }), /*#__PURE__*/React.createElement("span", {
    className: "au-cat__label"
  }, /*#__PURE__*/React.createElement("span", null, label)));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  intro,
  action,
  align = 'between',
  className = ''
}) {
  const cls = ['au-sechead', align === 'center' ? 'au-sechead--center' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "au-sechead__stack"
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "au-sechead__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    className: "au-sechead__title"
  }, title) : null, intro ? /*#__PURE__*/React.createElement("p", {
    className: "au-sechead__intro"
  }, intro) : null), action || null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'ink',
  pill = false,
  className = '',
  ...rest
}) {
  const cls = ['au-badge', 'au-badge--' + tone, pill ? 'au-badge--pill' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'default',
  padding = 'md',
  as = 'div',
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = ['au-card', 'au-card--' + variant, 'au-card--pad-' + padding, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Aurette ships no icon binaries of its own. Lucide (thin-stroke line icons,
   loaded from unpkg) is the flagged stand-in — closest match to the hairline
   line-art in the homepage mockup. Stroke width is forced down to 1.25 so the
   glyphs read as jewelry-fine rather than UI-chunky. */
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
const cache = {};
function Icon({
  name,
  size = 18,
  stroke = 1.25,
  filled = false,
  label,
  style,
  ...rest
}) {
  const [markup, setMarkup] = React.useState(cache[name] || '');
  React.useEffect(() => {
    if (cache[name] !== undefined) {
      setMarkup(cache[name] || '');
      return;
    }
    let live = true;
    fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      cache[name] = t;
      if (live) setMarkup(t);
    }).catch(() => {
      cache[name] = '';
      if (live) setMarkup('');
    });
    return () => {
      live = false;
    };
  }, [name]);
  const html = markup.replace('<svg', '<svg stroke-width="' + stroke + '"');
  /* If the fetch failed we still want a glyph: fall back to the same SVG used as
     a CSS mask, tinted with currentColor. */
  if (!html) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: "au-icon",
      role: label ? 'img' : undefined,
      "aria-label": label,
      "aria-hidden": label ? undefined : 'true',
      style: {
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'url(' + CDN + name + '.svg)',
        maskImage: 'url(' + CDN + name + '.svg)',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'au-icon' + (filled ? ' au-icon--filled' : ''),
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      width: size,
      height: size,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/FeatureMark.jsx
try { (() => {
function FeatureMark({
  icon,
  title,
  note,
  iconSize = 26,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['au-feature', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-feature__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize,
    stroke: 1
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "au-feature__title"
  }, title), note ? /*#__PURE__*/React.createElement("span", {
    className: "au-feature__note"
  }, note) : null));
}
Object.assign(__ds_scope, { FeatureMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/FeatureMark.jsx", error: String((e && e.message) || e) }); }

// components/commerce/StarRating.jsx
try { (() => {
function StarRating({
  value = 5,
  max = 5,
  count,
  size = 13,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['au-stars', className].filter(Boolean).join(' '),
    role: "img",
    "aria-label": value + ' out of ' + max + ' stars'
  }, Array.from({
    length: max
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      opacity: i < Math.round(value) ? 1 : 0.22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: size,
    stroke: 1.25,
    filled: true
  }))), count !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "au-stars__count"
  }, count, " reviews") : null);
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  className = '',
  ...rest
}) {
  const cls = ['au-btn', 'au-btn--' + variant, 'au-btn--' + size, fullWidth ? 'au-btn--full' : '', disabled ? 'au-btn--disabled' : '', className].filter(Boolean).join(' ');
  const iconSize = size === 'sm' ? 14 : 16;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: iconSize
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }) : null);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'bare',
  size = 18,
  showLabel = false,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['au-iconbtn', 'au-iconbtn--' + variant, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": showLabel ? undefined : label,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }), showLabel ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  price,
  image,
  hoverImage,
  meta,
  badge,
  nameStyle = 'label',
  href = '#',
  onSave,
  onClick,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: ['au-product', className].filter(Boolean).join(' '),
    href: href,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-product__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name
  }), hoverImage ? /*#__PURE__*/React.createElement("img", {
    className: "au-product__alt",
    src: hoverImage,
    alt: ""
  }) : null, badge ? /*#__PURE__*/React.createElement("span", {
    className: "au-product__badge"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "champagne"
  }, badge)) : null, onSave ? /*#__PURE__*/React.createElement("span", {
    className: "au-product__save"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    label: 'Save ' + name,
    variant: "onImage",
    size: 16,
    onClick: e => {
      e.preventDefault();
      onSave(e);
    }
  })) : null), /*#__PURE__*/React.createElement("span", {
    className: "au-product__info"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'au-product__name' + (nameStyle === 'serif' ? ' au-product__name--serif' : '')
  }, name), meta ? /*#__PURE__*/React.createElement("span", {
    className: "au-product__meta"
  }, meta) : null, /*#__PURE__*/React.createElement("span", {
    className: "au-product__price"
  }, price)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onRemove,
  className = '',
  ...rest
}) {
  const cls = ['au-tag', selected ? 'au-tag--selected' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-pressed": selected
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    className: "au-tag__x",
    role: "button",
    "aria-label": "Remove filter",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  titleStyle = 'display',
  variant = 'center',
  onClose,
  children,
  footer,
  className = ''
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "au-scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: ['au-dialog', 'au-dialog--' + variant, className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("div", {
    className: "au-dialog__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'au-dialog__title' + (titleStyle === 'label' ? ' au-dialog__title--label' : '')
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: 18,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "au-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "au-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  open = false,
  message,
  tone = 'default',
  icon,
  onClose,
  className = ''
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: ['au-toast', 'au-toast--' + tone, className].filter(Boolean).join(' '),
    role: "status"
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("span", null, message), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "au-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['au-tooltip', className].filter(Boolean).join(' '),
    tabIndex: 0
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "au-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  className = '',
  ...rest
}) {
  const cls = ['au-check', disabled ? 'au-check--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "au-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 11,
    stroke: 2
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  variant = 'box',
  size = 'md',
  id,
  className = '',
  style,
  ...rest
}) {
  const fid = id || React.useId();
  const cls = ['au-input', variant === 'underline' ? 'au-input--underline' : '', size === 'sm' ? 'au-input--sm' : '', error ? 'au-input--invalid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: "au-field",
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "au-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: cls,
    "aria-invalid": error ? true : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "au-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "au-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 99,
  onChange,
  variant = 'box',
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const qty = value === undefined ? internal : value;
  const set = n => {
    const next = Math.min(max, Math.max(min, n));
    if (value === undefined) setInternal(next);
    if (onChange) onChange(next);
  };
  const cls = ['au-qty', variant === 'underline' ? 'au-qty--underline' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease quantity",
    disabled: qty <= min,
    onClick: () => set(qty - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "au-qty__value",
    "aria-live": "polite"
  }, qty), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase quantity",
    disabled: qty >= max,
    onClick: () => set(qty + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 14
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  onChange,
  className = '',
  ...rest
}) {
  const cls = ['au-check', 'au-check--radio', disabled ? 'au-check--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "au-check__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-check__dot"
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  variant = 'box',
  id,
  className = '',
  style,
  ...rest
}) {
  const fid = id || React.useId();
  const cls = ['au-select', variant === 'underline' ? 'au-select--underline' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: "au-field",
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "au-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    className: cls
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    className: "au-select__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14
  }))), hint ? /*#__PURE__*/React.createElement("span", {
    className: "au-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['au-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "au-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-switch__knob"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = null,
  allowMultiple = false,
  className = ''
}) {
  const [open, setOpen] = React.useState(defaultOpen === null ? [] : [defaultOpen]);
  const toggle = id => setOpen(cur => cur.includes(id) ? cur.filter(x => x !== id) : allowMultiple ? [...cur, id] : [id]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['au-acc', className].filter(Boolean).join(' ')
  }, items.map(it => {
    const isOpen = open.includes(it.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "au-acc__item",
      key: it.id
    }, /*#__PURE__*/React.createElement("button", {
      className: "au-acc__head",
      "aria-expanded": isOpen,
      onClick: () => toggle(it.id)
    }, it.title, /*#__PURE__*/React.createElement("span", {
      className: 'au-acc__icon' + (isOpen ? ' au-acc__icon--open' : '')
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 15
    }))), isOpen ? /*#__PURE__*/React.createElement("div", {
      className: "au-acc__body"
    }, it.body) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: ['au-breadcrumb', className].filter(Boolean).join(' '),
    "aria-label": "Breadcrumb"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "au-breadcrumb__sep"
  }, "/") : null, it.href && i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: it.href
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    className: "au-breadcrumb__current"
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CarouselDots.jsx
try { (() => {
function CarouselDots({
  count = 4,
  index = 0,
  onChange,
  tone = 'ink',
  className = ''
}) {
  const cls = ['au-dots', tone === 'onImage' ? 'au-dots--onImage' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, Array.from({
    length: count
  }, (_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "aria-label": 'Go to slide ' + (i + 1),
    "aria-current": i === index || undefined,
    className: 'au-dots__dot' + (i === index ? ' au-dots__dot--active' : ''),
    onClick: () => onChange && onChange(i)
  })));
}
Object.assign(__ds_scope, { CarouselDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CarouselDots.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pages = 1,
  onChange,
  className = ''
}) {
  const nums = Array.from({
    length: pages
  }, (_, i) => i + 1);
  const go = p => {
    if (onChange && p >= 1 && p <= pages) onChange(p);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: ['au-pager', className].filter(Boolean).join(' '),
    "aria-label": "Pagination"
  }, /*#__PURE__*/React.createElement("button", {
    className: "au-pager__num au-pager__arrow",
    "aria-label": "Previous page",
    disabled: page === 1,
    onClick: () => go(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 15
  })), nums.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    "aria-current": n === page ? 'page' : undefined,
    className: 'au-pager__num' + (n === page ? ' au-pager__num--active' : ''),
    onClick: () => go(n)
  }, n)), /*#__PURE__*/React.createElement("button", {
    className: "au-pager__num au-pager__arrow",
    "aria-label": "Next page",
    disabled: page === pages,
    onClick: () => go(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 15
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  align = 'start',
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].id || tabs[0])));
  const active = value === undefined ? internal : value;
  const pick = id => {
    if (value === undefined) setInternal(id);
    if (onChange) onChange(id);
  };
  const cls = ['au-tabs', align === 'center' ? 'au-tabs--center' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "tablist"
  }, tabs.map(t => {
    const id = t.id || t;
    const label = t.label || t;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active === id,
      className: 'au-tabs__tab' + (active === id ? ' au-tabs__tab--active' : ''),
      onClick: () => pick(id)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/AboutScreen.jsx
try { (() => {
const {
  SectionHeader,
  Button,
  FeatureMark,
  Accordion
} = window.AuretteDesignSystem_2845d3;
function AboutScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "st-wrap st-section--tight"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "center",
    eyebrow: "Our story",
    title: "A family business, from Wollongong.",
    intro: "Aurette started at a kitchen table on the New South Wales coast \u2014 three of us, a lot of sketches, and one rule: make jewellery we'd actually wear every day."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '0 var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hero-model.jpg",
    alt: "Aurette pieces worn together",
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "st-wrap st-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-prose"
  }, /*#__PURE__*/React.createElement("p", null, "We're a small family team, and everything still passes through our hands before it goes out the door. Pieces are made in small batches, which means we can change our minds, refine a curve, or stop making something that isn't right."), /*#__PURE__*/React.createElement("p", null, "Gold jewellery has spent a long time being treated as an occasion \u2014 something you're given, something you keep for later. We build for the opposite: pieces you put on in the morning and forget about, that hold up in salt water and at the gym, and that stack with whatever you already own."), /*#__PURE__*/React.createElement("p", {
    className: "au-italic",
    style: {
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-primary)'
    }
  }, "Designed to feel personal, not precious."), /*#__PURE__*/React.createElement("p", null, "If something isn't working \u2014 the size, the length, the way it sits \u2014 write to us. We'll usually answer the same day."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      alignSelf: 'flex-start'
    },
    onClick: () => go('collection')
  }, "Shop the collection"))), /*#__PURE__*/React.createElement("div", {
    className: "st-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-features"
  }, /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "droplet",
    title: "Waterproof",
    note: "Designed to last"
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "shield",
    title: "Tarnish resistant",
    note: "Timeless shine"
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "leaf",
    title: "Hypoallergenic",
    note: "Gentle on skin"
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "map",
    title: "Designed in Australia",
    note: "Locally inspired"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "st-wrap st-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-prose"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Good to know"
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      id: 'care',
      title: 'How do I care for it?',
      body: 'Wear it. Rinse it if it has been in salt water, and give it a wipe with a soft cloth. No polishing cloths needed on vermeil.'
    }, {
      id: 'size',
      title: 'How do I find my size?',
      body: 'Wrap a strip of paper around your finger, mark where it meets, and measure it in millimetres. Between two sizes, go up.'
    }, {
      id: 'returns',
      title: 'What about returns?',
      body: 'Placeholder — returns and exchange terms are not finalised yet.'
    }, {
      id: 'contact',
      title: 'Can I talk to a person?',
      body: 'Yes. Email hello@aurette.com.au and one of us will reply, usually the same day.'
    }]
  }))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/App.jsx
try { (() => {
const {
  Dialog,
  Toast,
  Button,
  QuantityStepper,
  Icon
} = window.AuretteDesignSystem_2845d3;
function App() {
  const [route, setRoute] = React.useState('home');
  const [productId, setProductId] = React.useState('twist-hoops');
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  const openProduct = id => {
    setProductId(id);
    go('product');
  };
  const add = (p, qty) => {
    setCart(cur => {
      const hit = cur.find(l => l.id === p.id);
      return hit ? cur.map(l => l.id === p.id ? {
        ...l,
        qty: l.qty + qty
      } : l) : [...cur, {
        ...p,
        qty
      }];
    });
    setToast(p.name + ' — added to your bag');
    setCartOpen(true);
  };
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);
  const count = cart.reduce((n, l) => n + l.qty, 0);
  const total = cart.reduce((n, l) => n + l.qty * parseInt(l.price.replace(/[^0-9]/g, ''), 10), 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "st-page"
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    go: go,
    cartCount: count,
    onCart: () => setCartOpen(true)
  }), route === 'home' ? /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    openProduct: openProduct
  }) : null, route === 'collection' ? /*#__PURE__*/React.createElement(CollectionScreen, {
    openProduct: openProduct
  }) : null, route === 'product' ? /*#__PURE__*/React.createElement(ProductScreen, {
    productId: productId,
    openProduct: openProduct,
    onAdd: add
  }) : null, route === 'about' ? /*#__PURE__*/React.createElement(AboutScreen, {
    go: go
  }) : null, /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Dialog, {
    open: cartOpen,
    variant: "drawer",
    titleStyle: "label",
    title: 'Your bag (' + count + ')',
    onClose: () => setCartOpen(false),
    footer: count ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg"
    }, 'Checkout — $' + total + ' AUD'), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setCartOpen(false)
    }, "Keep shopping")) : /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: () => {
        setCartOpen(false);
        go('collection');
      }
    }, "See what's new")
  }, count === 0 ? /*#__PURE__*/React.createElement("p", null, "Nothing in your bag yet \u2014 have a look at what's new.") : cart.map(l => /*#__PURE__*/React.createElement("div", {
    className: "st-cartline",
    key: l.id
  }, /*#__PURE__*/React.createElement("img", {
    src: l.image,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-product-name)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, l.meta, " \xB7 ", l.price), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: l.qty,
    max: 9,
    onChange: q => setCart(cur => cur.map(x => x.id === l.id ? {
      ...x,
      qty: q
    } : x))
  })))))), /*#__PURE__*/React.createElement(Toast, {
    open: !!toast,
    icon: "check",
    message: toast,
    onClose: () => setToast(null)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Chrome.jsx
try { (() => {
const {
  IconButton,
  Icon,
  Button,
  Input
} = window.AuretteDesignSystem_2845d3;
function Header({
  route,
  go,
  cartCount,
  onCart
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "st-ann"
  }, "Free shipping on orders over $150 AUD"), /*#__PURE__*/React.createElement("header", {
    className: "st-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-head__in"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "st-nav"
  }, /*#__PURE__*/React.createElement("button", {
    "data-active": route === 'collection',
    onClick: () => go('collection')
  }, "Shop"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('collection')
  }, "Collections"), /*#__PURE__*/React.createElement("button", {
    "data-active": route === 'about',
    onClick: () => go('about')
  }, "About"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('about')
  }, "Care")), /*#__PURE__*/React.createElement("span", {
    className: "st-logo",
    onClick: () => go('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.png",
    alt: "Aurette"
  })), /*#__PURE__*/React.createElement("div", {
    className: "st-util"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Search",
    showLabel: true,
    size: 15
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "user",
    label: "Account",
    showLabel: true,
    size: 15
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "shopping-bag",
    label: 'Cart (' + cartCount + ')',
    showLabel: true,
    size: 15,
    onClick: onCart
  })))));
}
function Footer() {
  const cols = [['Shop', ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'New arrivals', 'Best sellers']], ['Collections', ['Silk Collection', 'Mother of Pearl', 'Moissanite', 'Opal Collection', 'Essentials']], ['Information', ['Jewellery care', 'Size guide', 'Shipping & returns', 'Warranty', 'FAQs']], ['About', ['Our story', 'Sustainability', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "st-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-foot__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-foot__col"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.png",
    alt: "Aurette",
    style: {
      height: 60,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "au-italic",
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)'
    }
  }, "Thoughtfully different."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "instagram",
    label: "Instagram",
    size: 16
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bookmark",
    label: "Pinterest",
    size: 16
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "music",
    label: "TikTok",
    size: 16
  }))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    className: "st-foot__col",
    key: h
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-foot__h"
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    className: "st-foot__l",
    href: "#",
    key: i,
    onClick: e => e.preventDefault()
  }, i))))), /*#__PURE__*/React.createElement("div", {
    className: "st-foot__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Aurette 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "st-foot__l",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy policy"), /*#__PURE__*/React.createElement("a", {
    className: "st-foot__l",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Terms & conditions")), /*#__PURE__*/React.createElement("span", null, "Australia (AUD $)")));
}
function Newsletter() {
  return /*#__PURE__*/React.createElement("div", {
    className: "st-wrap st-section--tight",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-eyebrow"
  }, "Stay in the loop"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "New pieces, first look."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "A short note when something new lands. No daily emails, we promise."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-end',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "underline",
    placeholder: "Your email",
    style: {
      width: 280
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Join us")));
}
Object.assign(window, {
  Header,
  Footer,
  Newsletter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CollectionScreen.jsx
try { (() => {
const {
  Breadcrumb,
  SectionHeader,
  ProductCard,
  Tag,
  Select,
  Pagination,
  Icon
} = window.AuretteDesignSystem_2845d3;
function CollectionScreen({
  openProduct
}) {
  const d = window.AU_DATA;
  const [filters, setFilters] = React.useState(['Essentials']);
  const [page, setPage] = React.useState(1);
  const toggle = f => setFilters(cur => cur.includes(f) ? cur.filter(x => x !== f) : [...cur, f]);
  const chips = ['Essentials', '9ct solid gold', 'Gold vermeil', 'Under $150'];
  const shown = filters.length ? d.products.filter(p => filters.some(f => p.collection === f || p.meta === f || f === 'Under $150' && parseInt(p.price.slice(1)) < 150)) : d.products;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "st-wrap",
    style: {
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Shop',
      href: '#'
    }, {
      label: 'All jewellery'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "st-wrap st-section--tight",
    style: {
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "center",
    eyebrow: "Shop",
    title: "All jewellery",
    intro: "Hoops, pendants, rings and chains made to be worn together \u2014 and to be worn every day."
  })), /*#__PURE__*/React.createElement("div", {
    className: "st-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-filters"
  }, chips.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: filters.includes(c),
    onClick: () => toggle(c),
    onRemove: filters.includes(c) ? () => toggle(c) : undefined
  }, c))), /*#__PURE__*/React.createElement(Select, {
    variant: "underline",
    options: ['Featured', 'Newest', 'Price: low to high', 'Price: high to low'],
    style: {
      width: 190
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "st-wrap st-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-grid4",
    style: {
      rowGap: 'var(--space-12)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    price: p.price,
    meta: p.meta,
    image: p.image,
    hoverImage: p.alt,
    badge: p.badge,
    onSave: () => {},
    onClick: e => {
      e.preventDefault();
      openProduct(p.id);
    }
  }))), shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      textAlign: 'center',
      padding: 'var(--space-16) 0'
    }
  }, "Nothing matches that combination yet \u2014 try clearing a filter.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pages: 3,
    onChange: setPage
  }))));
}
Object.assign(window, {
  CollectionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CollectionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomeScreen.jsx
try { (() => {
const {
  Button,
  SectionHeader,
  ProductCard,
  CategoryTile,
  FeatureMark,
  StarRating,
  CarouselDots,
  Icon
} = window.AuretteDesignSystem_2845d3;
function HomeScreen({
  go,
  openProduct
}) {
  const d = window.AU_DATA;
  const [slide, setSlide] = React.useState(1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "st-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-eyebrow"
  }, "Thoughtfully different"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-hero)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Jewellery with", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "au-italic"
  }, "character.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-secondary)'
    }
  }, "Designed to elevate your everyday."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('collection')
  }, "Shop new arrivals"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('collection')
  }, "Explore collections"))), /*#__PURE__*/React.createElement("div", {
    className: "st-hero__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hero-model.jpg",
    alt: "Model wearing Aurette hoops and a fine chain"
  }), /*#__PURE__*/React.createElement("span", {
    className: "st-hero__dots"
  }, /*#__PURE__*/React.createElement(CarouselDots, {
    count: 4,
    index: slide,
    tone: "onImage",
    onChange: setSlide
  })))), /*#__PURE__*/React.createElement("section", {
    className: "st-wrap st-section--tight"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "New in",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => go('collection')
    }, "View all")
  }), /*#__PURE__*/React.createElement("div", {
    className: "st-grid4"
  }, d.products.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    price: p.price,
    image: p.image,
    hoverImage: p.alt,
    badge: p.badge,
    onSave: () => {},
    onClick: e => {
      e.preventDefault();
      openProduct(p.id);
    }
  })))), /*#__PURE__*/React.createElement("section", {
    className: "st-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-wrap st-section--tight st-grid2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'flex-start',
      paddingRight: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-eyebrow"
  }, "Why Aurette"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "Thoughtfully different."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      maxWidth: '38ch'
    }
  }, "We create jewellery that feels distinct, effortless and unmistakably you."), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => go('about')
  }, "Our story")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-2)'
    }
  }, d.categories.map(c => /*#__PURE__*/React.createElement(CategoryTile, {
    key: c.label,
    label: c.label,
    image: c.image,
    href: "#",
    className: "st-cat"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "st-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-features"
  }, /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "droplet",
    title: "Waterproof",
    note: "Designed to last"
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "shield",
    title: "Tarnish resistant",
    note: "Timeless shine"
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "leaf",
    title: "Hypoallergenic",
    note: "Gentle on skin"
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "map",
    title: "Designed in Australia",
    note: "Locally inspired"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "st-wrap st-section--tight st-proof"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-eyebrow"
  }, "Loved by thousands"), /*#__PURE__*/React.createElement(StarRating, {
    value: 5
  }), /*#__PURE__*/React.createElement("p", {
    className: "au-italic",
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-snug)',
      maxWidth: '26ch'
    }
  }, "\u201CBeautiful quality, stunning pieces and they go with everything.\u201D"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "\u2014 Olivia, Sydney"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Read more reviews")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-eyebrow"
  }, "@aurettejewels"), /*#__PURE__*/React.createElement("div", {
    className: "st-ugc"
  }, d.ugc.map((src, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    key: i,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: ""
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right"
  }, "Follow us"))), /*#__PURE__*/React.createElement(Newsletter, null));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductScreen.jsx
try { (() => {
const {
  Breadcrumb,
  Button,
  Tag,
  Select,
  QuantityStepper,
  Accordion,
  StarRating,
  FeatureMark,
  ProductCard,
  SectionHeader,
  Icon,
  IconButton
} = window.AuretteDesignSystem_2845d3;
function ProductScreen({
  productId,
  openProduct,
  onAdd
}) {
  const d = window.AU_DATA;
  const p = d.products.find(x => x.id === productId) || d.products[0];
  const gallery = [p.image, p.alt, '../../assets/img/ugc-4.jpg', '../../assets/img/hero-model.jpg'];
  const [shot, setShot] = React.useState(0);
  const [metal, setMetal] = React.useState(p.meta);
  const [qty, setQty] = React.useState(1);
  React.useEffect(() => {
    setShot(0);
    setMetal(p.meta);
    setQty(1);
  }, [productId]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "st-wrap",
    style: {
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: p.category,
      href: '#'
    }, {
      label: p.name
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "st-wrap st-section--tight st-pdp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-gal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-gal__thumbs"
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "data-active": i === shot,
    onClick: () => setShot(i)
  }, /*#__PURE__*/React.createElement("img", {
    src: g,
    alt: 'View ' + (i + 1)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "st-gal__main"
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[shot],
    alt: p.name
  }))), /*#__PURE__*/React.createElement("div", {
    className: "st-pdp__stack"
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-eyebrow"
  }, p.collection), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 'var(--text-2xl)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, p.price), /*#__PURE__*/React.createElement(StarRating, {
    value: 5,
    count: 214
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "Made to be worn every day \u2014 in the shower, at the beach, and with everything else you already own."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Metal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, ['9ct solid gold', 'Gold vermeil'].map(m => /*#__PURE__*/React.createElement(Tag, {
    key: m,
    selected: metal === m,
    onClick: () => setMetal(m)
  }, m)))), /*#__PURE__*/React.createElement(Select, {
    label: "Size",
    options: ['Small — 10mm', 'Medium — 12mm', 'Large — 15mm'],
    hint: "Not sure? Between two sizes, go up.",
    style: {
      maxWidth: 260
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "st-pdp__buy"
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty,
    max: 5
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onAdd(p, qty)
  }, "Add to bag \u2014 ", p.price), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Save for later",
    variant: "bordered"
  })), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: "details",
    items: [{
      id: 'details',
      title: 'Details',
      body: metal + '. ' + (p.category === 'Earrings' ? '12mm inner diameter, 2mm tube, butterfly backs included.' : 'Adjustable length, lobster clasp.') + ' Made in small batches in Wollongong.'
    }, {
      id: 'care',
      title: 'Care',
      body: 'Waterproof and tarnish resistant — you can wear it in the shower. Wipe with a soft cloth to bring the shine back.'
    }, {
      id: 'shipping',
      title: 'Shipping & returns',
      body: 'Free standard shipping over $150 AUD, 3–5 business days Australia-wide. Returns policy copy is not final yet — placeholder.'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "droplet",
    title: "Waterproof",
    iconSize: 22
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "shield",
    title: "Tarnish resistant",
    iconSize: 22
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "leaf",
    title: "Hypoallergenic",
    iconSize: 22
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "map",
    title: "Designed in Australia",
    iconSize: 22
  })))), /*#__PURE__*/React.createElement("section", {
    className: "st-wrap st-section--tight"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Wears well with"
  }), /*#__PURE__*/React.createElement("div", {
    className: "st-grid4"
  }, d.products.filter(x => x.id !== p.id).slice(0, 4).map(x => /*#__PURE__*/React.createElement(ProductCard, {
    key: x.id,
    nameStyle: "serif",
    name: x.name,
    price: x.price,
    image: x.image,
    hoverImage: x.alt,
    onClick: e => {
      e.preventDefault();
      openProduct(x.id);
    }
  })))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
window.AU_DATA = {
  products: [{
    id: 'twist-hoops',
    name: 'The Twist Hoops',
    price: '$129 AUD',
    meta: '9ct solid gold',
    category: 'Earrings',
    collection: 'Essentials',
    image: '../../assets/img/product-twist-hoops.jpg',
    alt: '../../assets/img/category-earrings.jpg',
    badge: 'New'
  }, {
    id: 'oval-pendant',
    name: 'The Oval Pendant',
    price: '$139 AUD',
    meta: 'Gold vermeil',
    category: 'Necklaces',
    collection: 'Silk Collection',
    image: '../../assets/img/product-oval-pendant.jpg',
    alt: '../../assets/img/category-necklaces.jpg'
  }, {
    id: 'wave-ring',
    name: 'The Wave Ring',
    price: '$119 AUD',
    meta: '9ct solid gold',
    category: 'Rings',
    collection: 'Essentials',
    image: '../../assets/img/product-wave-ring.jpg',
    alt: '../../assets/img/category-rings.jpg'
  }, {
    id: 'link-bracelet',
    name: 'The Link Bracelet',
    price: '$149 AUD',
    meta: 'Gold vermeil',
    category: 'Bracelets',
    collection: 'Essentials',
    image: '../../assets/img/product-link-bracelet.jpg',
    alt: '../../assets/img/category-bracelets.jpg'
  }, {
    id: 'signet',
    name: 'The Signet Ring',
    price: '$189 AUD',
    meta: '9ct solid gold',
    category: 'Rings',
    collection: 'Mother of Pearl',
    image: '../../assets/img/category-rings.jpg',
    alt: '../../assets/img/product-wave-ring.jpg'
  }, {
    id: 'huggies',
    name: 'The Everyday Huggies',
    price: '$99 AUD',
    meta: 'Gold vermeil',
    category: 'Earrings',
    collection: 'Essentials',
    image: '../../assets/img/category-earrings.jpg',
    alt: '../../assets/img/product-twist-hoops.jpg',
    badge: 'Best seller'
  }, {
    id: 'fine-chain',
    name: 'The Fine Chain',
    price: '$109 AUD',
    meta: 'Gold vermeil',
    category: 'Necklaces',
    collection: 'Essentials',
    image: '../../assets/img/ugc-3.jpg',
    alt: '../../assets/img/product-oval-pendant.jpg'
  }, {
    id: 'stacking-set',
    name: 'The Stacking Set',
    price: '$219 AUD',
    meta: 'Set of three',
    category: 'Rings',
    collection: 'Essentials',
    image: '../../assets/img/ugc-2.jpg',
    alt: '../../assets/img/category-rings.jpg',
    badge: 'Low stock'
  }],
  categories: [{
    label: 'Rings',
    image: '../../assets/img/category-rings.jpg'
  }, {
    label: 'Earrings',
    image: '../../assets/img/category-earrings.jpg'
  }, {
    label: 'Necklaces',
    image: '../../assets/img/category-necklaces.jpg'
  }, {
    label: 'Bracelets',
    image: '../../assets/img/category-bracelets.jpg'
  }],
  ugc: ['../../assets/img/ugc-1.jpg', '../../assets/img/ugc-2.jpg', '../../assets/img/ugc-3.jpg', '../../assets/img/ugc-4.jpg', '../../assets/img/ugc-5.jpg']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.FeatureMark = __ds_scope.FeatureMark;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.CarouselDots = __ds_scope.CarouselDots;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
