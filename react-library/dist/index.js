import e from "react";
function n(n) {
  var t = n.children,
    a = n.options,
    l = n.value,
    o = n.onChange,
    r = n.id,
    c = n.name;
  return e.createElement(
    "div",
    { className: "selectComponent" },
    e.createElement(
      "select",
      { id: r, name: c, value: l, onChange: o },
      e.createElement("option", { value: "" }, "Select in dropdown list"),
      t ||
        (a &&
          a.map(function (n) {
            return e.createElement(
              "option",
              { key: n.value, value: n.value },
              n.label
            );
          }))
    )
  );
}
export { n as default };
