export const navigator = (to) => {
  window.history.pushState({}, "", to);
  const newPath = new PopStateEvent("navigate");
  window.dispatchEvent(newPath);
};
