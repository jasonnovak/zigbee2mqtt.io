"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51470],{39247:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>i});var n=a(1768);const o={},s=(0,a(69420).A)(o,[["render",function(e,t){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[11]||(t[11]=(0,n.Lk)("h1",{id:"osram-ac0251100nj-ac0251600nj-ac0251700nj",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#osram-ac0251100nj-ac0251600nj-ac0251700nj"},[(0,n.Lk)("span",null,"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"AC0251100NJ/AC0251600NJ/AC0251700NJ")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(a,{to:"/supported-devices/#v=OSRAM"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("OSRAM")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Smart+ switch mini")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, action, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AC0251100NJ-AC0251600NJ-AC0251700NJ.png",alt:"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ"})])],-1))])]),t[12]||(t[12]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>For the OSRAM Smart+ Switch Mini (AC0251100NJ/AC0251600NJ/AC0251700NJ) hold the Middle and Arrow Down Buttons for 10 Seconds to Reset the Device. Hold the Middle and Arrow Up Buttons for 3 Seconds to connect. If the Switch is connected hold Middle and Arrow Up Buttons for 3 Seconds to disconnect.</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>Actions</span></a></h3><h4 id="arrow-up" tabindex="-1"><a class="header-anchor" href="#arrow-up"><span>Arrow up</span></a></h4><p>causes &#39;on&#39; at short pressure; &#39;brightness_move_up&#39; at long pressure (&gt;1 sec); &#39;brightness_stop&#39; at long pressure release</p><h4 id="circle" tabindex="-1"><a class="header-anchor" href="#circle"><span>Circle</span></a></h4><p>causes &#39;brightness_move_to_level&#39; at short pressure; &#39;move_to_saturation&#39; at long pressure (&gt;1 sec); &#39;hue_stop&#39; at long pressure release</p><h4 id="arrow-down" tabindex="-1"><a class="header-anchor" href="#arrow-down"><span>Arrow down</span></a></h4><p>causes &#39;off&#39; at short pressure; &#39;brightness_move_down&#39; at long pressure (&gt;1 sec); &#39;brightness_stop&#39; at long pressure release</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',11)),(0,n.Lk)("p",null,[t[8]||(t[8]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,n.eW)("."))]),t[13]||(t[13]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[10]||(t[10]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,n.Fv)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>color_temperature_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>move_to_saturation</code>, <code>off</code>, <code>brightness_move_to_level</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8))])}]]),i=JSON.parse('{"path":"/devices/AC0251100NJ_AC0251600NJ_AC0251700NJ.html","title":"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ control via MQTT","description":"Integrate your OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-01T18:11:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728243899000},"filePathRelative":"devices/AC0251100NJ_AC0251600NJ_AC0251700NJ.md"}')}}]);