const MEASUREMENT_ID = "G-R5QBMBZD1Z";
const GTAG_URL = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

const initializeGA = () => {
  window.gtag = (...args) => {
    console.log("arg: ", args);
    dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID);
};

const loadScript = (url) => {
  const scriptEl = document.createElement("script");
  scriptEl.setAttribute("src", url);
  scriptEl.async = true;
  scriptEl.onload = initializeGA;
  document.head.appendChild(scriptEl);
};

window.dataLayer = window.dataLayer || [];

loadScript(GTAG_URL);
