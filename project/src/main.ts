import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

const faviconUrl = new URL('../favicon.ico', import.meta.url).href;

(function () {
  const userAgent = navigator.userAgent;

  setFavicon(faviconUrl);

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

