import{_ as t,c as e,o as a,a5 as o}from"./chunks/framework.DcfbuPOr.js";const d="/assets/image-16.ndCHbah4.png",n="/assets/image-17.CznQugE5.png",u=JSON.parse('{"title":"QSpinBox整数数字选择","description":"","frontmatter":{},"headers":[],"relativePath":"python/PyQt6/215.md","filePath":"python/PyQt6/215.md"}'),p={name:"python/PyQt6/215.md"},r=o('<h1 id="qspinbox整数数字选择" tabindex="-1">QSpinBox整数数字选择 <a class="header-anchor" href="#qspinbox整数数字选择" aria-label="Permalink to &quot;QSpinBox整数数字选择&quot;">​</a></h1><p>QSpinBox是一个整数数字选择控件，该控件提供一对上下箭头，用户可以单击上下箭头选择数值，也可</p><p>以直接输入。如果输入的数值大于设置的最大值，或者小于设置的最小值，SpinBox将不会接受输入。</p><p>Input Widgets —&gt; Spin Box</p><table tabindex="0"><thead><tr><th><strong>方法</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>setValue()</td><td>设置控件的当前值</td></tr><tr><td>setMaximum()</td><td>设置最大值</td></tr><tr><td>setMinimum()</td><td>设置最小值</td></tr><tr><td>setRange()</td><td>设置取值范围(包括最大值和最小值)</td></tr><tr><td>setSingleStet()</td><td>单击上下箭头时的步长值</td></tr><tr><td>value()</td><td>获取控件中的值</td></tr><tr><td>setStepType()</td><td>QAbstractSpinBox::DefaultStepType：固定步长，可以通过 setSingleStep()<br>函数设置。<br>QAbstractSpinBox::AdaptiveDecimalStepType：自适应步长，根据数字的大<br>小自动调整步长。</td></tr><tr><td>setPrefix()</td><td>设置前缀</td></tr><tr><td>setSuffix()</td><td>设置后缀</td></tr></tbody></table><p><img src="'+d+'" alt="alt text" loading="lazy"></p><h1 id="qdoublespinbox小数数字选择" tabindex="-1">QDoubleSpinBox小数数字选择 <a class="header-anchor" href="#qdoublespinbox小数数字选择" aria-label="Permalink to &quot;QDoubleSpinBox小数数字选择&quot;">​</a></h1><p>Input Widgets —&gt; Double Spin Box</p><p>QDoubleSpinBox与QSpinBox控件类似，区别是，它用来选择小数数字，并且默认保留两位小数。</p><p>QDoubleSpinBox控件的使用方法与QSpinBox类似，但由于它处理的是小数数字，因此，该控件提供了一个setDecimals()方法，用来设置小数的位数。</p><p><img src="'+n+'" alt="alt text" loading="lazy"></p>',11),i=[r];function s(l,_,c,x,S,b){return a(),e("div",null,i)}const m=t(p,[["render",s]]);export{u as __pageData,m as default};