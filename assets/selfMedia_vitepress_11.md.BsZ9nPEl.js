import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.DrOZDLiO.js";const u=JSON.parse('{"title":"VitePress学习","description":"","frontmatter":{},"headers":[],"relativePath":"selfMedia/vitepress/11.md","filePath":"selfMedia/vitepress/11.md"}'),i={name:"selfMedia/vitepress/11.md"},p=e(`<h1 id="vitepress学习" tabindex="-1">VitePress学习 <a class="header-anchor" href="#vitepress学习" aria-label="Permalink to &quot;VitePress学习&quot;">​</a></h1><p>本站所用到的代码，皆在笔记中有所记录，可自行参考学习。</p><h2 id="vitepress-是什么" tabindex="-1">VitePress 是什么？ <a class="header-anchor" href="#vitepress-是什么" aria-label="Permalink to &quot;VitePress 是什么？&quot;">​</a></h2><p>VitePress 是一个静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。</p><div class="tip custom-block"><p class="custom-block-title">参考：</p><p>详情介绍以及使用，可查看<a href="https://vitepress.dev/zh/" target="_blank" rel="noreferrer">VitePress中文官网</a></p></div><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">注意</p><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 18 及以上版本。</li><li>通过命令行界面 (CLI) 访问 VitePress 的终端。</li><li>支持Markdown语法的编辑器。 <ul><li>推荐 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> 及其<a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">官方 Vue 扩展</a>。</li></ul></li></ul></div><p>VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>回答几个简单的问题：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌  Welcome to VitePress!</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span>│  ./docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site title:</span></span>
<span class="line"><span>│  My Awesome Project</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site description:</span></span>
<span class="line"><span>│  A VitePress Site</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◆  Theme:</span></span>
<span class="line"><span>│  ● Default Theme (Out of the box, good-looking docs)</span></span>
<span class="line"><span>│  ○ Default Theme + Customization</span></span>
<span class="line"><span>│  ○ Custom Theme</span></span>
<span class="line"><span>└</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>至此，本地VitePress已经创建成功。</p><h2 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h2><p>如果正在构建一个独立的 VitePress 站点，可以在当前目录 (<code>./</code>) 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 VitePress，建议将站点搭建在嵌套目录 (例如 <code>./docs</code>) 中，以便它与项目的其余部分分开。</p><p>假设选择在 <code>./docs</code> 中搭建 VitePress 项目，生成的文件结构应该是这样的：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ api-examples.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>docs</code> 目录作为 VitePress 站点的项目<strong>根目录</strong>。<code>.vitepress</code> 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。</p><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><p>配置文件 (<code>.vitepress/config.js</code>) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 站点级选项</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;VitePress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Just playing around.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 主题级选项</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="源文件" tabindex="-1">源文件 <a class="header-anchor" href="#源文件" aria-label="Permalink to &quot;源文件&quot;">​</a></h2><p><code>.vitepress</code> 目录之外的 Markdown 文件被视为<strong>源文件</strong>。</p><p>VitePress 使用 <strong>基于文件的路由</strong>：每个 <code>.md</code> 文件将在相同的路径被编译成为 <code>.html</code> 文件。例如，<code>index.md</code> 将会被编译成 <code>index.html</code>，可以在生成的 VitePress 站点的根路径 <code>/</code> 进行访问。</p><h2 id="启动并运行" tabindex="-1">启动并运行 <a class="header-anchor" href="#启动并运行" aria-label="Permalink to &quot;启动并运行&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>以上分别代表启动本地文档服务，打包文档，启动打包后（dist）服务</p><p><code>docs:dev</code> 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后，开发服务应该会运行在 <code>http://localhost:5173</code> 上。在浏览器中访问 URL 以查看站点的运行。</p>`,30),l=[p];function t(r,c,d,h,o,k){return n(),a("div",null,l)}const m=s(i,[["render",t]]);export{u as __pageData,m as default};
