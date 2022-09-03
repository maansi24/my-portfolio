// eslint-disable-next-line require-jsdoc
function scrollSmoothTo(elementId: string) {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

export { scrollSmoothTo };
