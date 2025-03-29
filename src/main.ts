import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

(function () {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Edg") || userAgent.includes("Trident") || userAgent.includes("MSIE")) {
      document.body.innerHTML = "<h2>このページはEdgeまたはInternet Exploerでは表示できません<br /> GoogleChrome、FirefoxまたはEdgeでのご利用をお願いいたします。</h2>";
      setTimeout(() => {
          window.location.href = "https://www.google.com/intl/ja_jp/chrome/";
      }, 5000);
  }
})();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
