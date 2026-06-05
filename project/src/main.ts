import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from './vite.svg'
import { setupCounter } from './counter.ts'

type TypekitConfig = {
  kitId: string;
  scriptTimeout: number;
  async: boolean;
};

type TypekitScriptElement = HTMLScriptElement & {
  readyState?: string;
  onreadystatechange?: () => void;
};

const faviconUrl = new URL('./favicon.ico', import.meta.url).href;

(function () {
  const userAgent = navigator.userAgent;

  setFavicon(faviconUrl);
  loadTypekit();

  if (userAgent.includes("Edg") || userAgent.includes("Trident") || userAgent.includes("MSIE")) {
      document.body.innerHTML =  `
      <script>
      (function(d) {
        var config = {
          kitId: 'top6hpz',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    </script>
      <h2 class='root'>このページはEdgeまたはInternet Exploerでは表示できません<br /> GoogleChrome、FirefoxまたはSafari等でのご利用をお願いいたします。</h2> 
 `;
      setTimeout(() => {
          window.location.href = "https://www.google.com/intl/ja_jp/chrome/";
      }, 5000);
  }
})();

function setFavicon(url: string) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = url;

  const existingIcons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
  existingIcons.forEach(el => el.remove());

  document.head.appendChild(link);
}

function loadTypekit() {
  const kitId = 'top6hpz';
  const scriptUrl = `https://use.typekit.net/${kitId}.js`;

  if (document.querySelector(`script[src="${scriptUrl}"]`)) {
    return;
  }

  const config: TypekitConfig = {
    kitId,
    scriptTimeout: 3000,
    async: true,
  };
  const html = document.documentElement;
  const timeout = window.setTimeout(() => {
    html.className = html.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
  }, config.scriptTimeout);
  const script = document.createElement('script') as TypekitScriptElement;
  const firstScript = document.getElementsByTagName('script')[0];
  let loaded = false;

  html.className += ' wf-loading';
  script.src = scriptUrl;
  script.async = config.async;
  script.onload = script.onreadystatechange = function () {
    const readyState = script.readyState;

    if (loaded || (readyState && readyState !== 'complete' && readyState !== 'loaded')) {
      return;
    }

    loaded = true;
    window.clearTimeout(timeout);

    try {
      const typekit = (window as Window & { Typekit?: { load: (config: TypekitConfig) => void } }).Typekit;
      typekit?.load(config);
    } catch {
      // Keep the original Typekit snippet behavior: fail silently if loading is blocked.
    }
  };
  firstScript.parentNode?.insertBefore(script, firstScript);
}

