"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[17647],{39353:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>o,data:()=>s});var i=n(1768);const a={},o=(0,n(69420).A)(a,[["render",function(e,t){const n=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[17]||(t[17]=(0,i.Lk)("h1",{id:"ikea-e1812",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ikea-e1812"},[(0,i.Lk)("span",null,"IKEA E1812")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"E1812")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(n,{to:"/supported-devices/#v=IKEA"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("IKEA")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"TRADFRI shortcut button")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"identify, battery, action, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1812.png",alt:"IKEA E1812"})])],-1))])]),t[18]||(t[18]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Pair the remote to Zigbee2MQTT by holding it close to the coordinator and pressing the inside button, next to the CR2032 battery, 4 times. The red light on the (front of the) remote will now flash a few times.</p><h3 id="troubleshooting-device-didn-t-respond-to-ota-request" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-didn-t-respond-to-ota-request"><span>Troubleshooting: Device didn&#39;t respond to OTA request</span></a></h3><p>To resolve the <code>Device didn&#39;t respond to OTA request</code> error, you can try to push a button on it, shortly before you start the update, to wake up the Remote. Sometimes it also helps keeping the device awake, by pushing a button repeatedly until you read the first &quot;Updating... 0.00%&quot; message (about 5s).</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3>',6)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("The ")),(0,i.bF)(n,{to:"/guide/usage/binding.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("binding")]))),_:1}),t[9]||(t[9]=(0,i.eW)(" functionality of this remote varies per firmware version:"))]),t[19]||(t[19]=(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.eW)("below 2.3.75: suppports binding to groups only. It can only be bound to 1 group at a time. By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to "),(0,i.Lk)("code",null,"zigbee2mqtt/bridge/request/device/unbind"),(0,i.eW)(" payload "),(0,i.Lk)("code",null,'{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}'),(0,i.eW)(". Wake up the device right before sending the commands by pressing a button on it.")]),(0,i.Lk)("li",null,"2.3.075 and greater: supports binding to devices only")],-1)),t[20]||(t[20]=(0,i.Lk)("h3",{id:"troubleshooting-no-battery-level",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#troubleshooting-no-battery-level"},[(0,i.Lk)("span",null,"Troubleshooting: no battery level")])],-1)),(0,i.Lk)("p",null,[t[11]||(t[11]=(0,i.eW)("It may help to remove the battery for a few seconds and after that reconfigure it via ")),(0,i.bF)(n,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigure"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("Configure")]))),_:1}),t[12]||(t[12]=(0,i.eW)(". Right before executing the Configure make sure to wake up the device by pressing a button on it."))]),t[21]||(t[21]=(0,i.Lk)("h3",{id:"actions",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#actions"},[(0,i.Lk)("span",null,"Actions")])],-1)),t[22]||(t[22]=(0,i.Lk)("p",null,[(0,i.eW)("Value "),(0,i.Lk)("code",null,"off"),(0,i.eW)(" is published when double-clicking the button.")],-1)),t[23]||(t[23]=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1)),(0,i.Lk)("p",null,[t[14]||(t[14]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[13]||(t[13]=[(0,i.eW)("OTA updates")]))),_:1}),t[15]||(t[15]=(0,i.eW)("."))]),t[24]||(t[24]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[16]||(t[16]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[25]||(t[25]=(0,i.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_up</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11))])}]]),s=JSON.parse('{"path":"/devices/E1812.html","title":"IKEA E1812 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E1812 control via MQTT","description":"Integrate your IKEA E1812 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-09T17:45:58.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting: Device didn\'t respond to OTA request","slug":"troubleshooting-device-didn-t-respond-to-ota-request","link":"#troubleshooting-device-didn-t-respond-to-ota-request","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Troubleshooting: no battery level","slug":"troubleshooting-no-battery-level","link":"#troubleshooting-no-battery-level","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728243899000},"filePathRelative":"devices/E1812.md"}')}}]);