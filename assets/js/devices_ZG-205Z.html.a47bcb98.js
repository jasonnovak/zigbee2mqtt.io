"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[32661],{53815:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>c});var o=i(1768);const a={},n=(0,i(69420).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"tuya-zg-205z",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#tuya-zg-205z"},[(0,o.Lk)("span",null,"Tuya ZG-205Z")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"ZG-205Z")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"5.8 GHz human presence sensor")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"presence, presence_state, target_distance, illuminance_lux, indicator, none_delay_time, move_detection_max, move_detection_min, small_move_detection_max, small_move_detection_min, breath_detection_max, breath_detection_min, move_sensitivity, breath_sensitivity, small_move_sensitivity, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-205Z.png",alt:"Tuya ZG-205Z"})])],-1))])]),t[9]||(t[9]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="presence-state-enum" tabindex="-1"><a class="header-anchor" href="#presence-state-enum"><span>Presence state (enum)</span></a></h3><p>The presence state. Value can be found in the published state on the <code>presence_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>presence</code>, <code>peaceful</code>, <code>small_movement</code>, <code>large_movement</code>.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric"><span>Target distance (numeric)</span></a></h3><p>Target distance. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>m</code>.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance (lux) (numeric)</span></a></h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="indicator-binary" tabindex="-1"><a class="header-anchor" href="#indicator-binary"><span>Indicator (binary)</span></a></h3><p>LED Indicator. Value can be found in the published state on the <code>indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> indicator is ON, if <code>OFF</code> OFF.</p><h3 id="none-delay-time-numeric" tabindex="-1"><a class="header-anchor" href="#none-delay-time-numeric"><span>None delay time (numeric)</span></a></h3><p>Hold delay time. Value can be found in the published state on the <code>none_delay_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;none_delay_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>28800</code>. The unit of this value is <code>Sec</code>.</p><h3 id="move-detection-max-numeric" tabindex="-1"><a class="header-anchor" href="#move-detection-max-numeric"><span>Move detection max (numeric)</span></a></h3><p>Move detection max distance. Value can be found in the published state on the <code>move_detection_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_detection_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>m</code>.</p><h3 id="move-detection-min-numeric" tabindex="-1"><a class="header-anchor" href="#move-detection-min-numeric"><span>Move detection min (numeric)</span></a></h3><p>Move detection min distance. Value can be found in the published state on the <code>move_detection_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_detection_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>m</code>.</p><h3 id="small-move-detection-max-numeric" tabindex="-1"><a class="header-anchor" href="#small-move-detection-max-numeric"><span>Small move detection max (numeric)</span></a></h3><p>Small move detection max distance. Value can be found in the published state on the <code>small_move_detection_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_move_detection_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="small-move-detection-min-numeric" tabindex="-1"><a class="header-anchor" href="#small-move-detection-min-numeric"><span>Small move detection min (numeric)</span></a></h3><p>Small move detection min distance. Value can be found in the published state on the <code>small_move_detection_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_move_detection_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="breath-detection-max-numeric" tabindex="-1"><a class="header-anchor" href="#breath-detection-max-numeric"><span>Breath detection max (numeric)</span></a></h3><p>Breath detection max distance. Value can be found in the published state on the <code>breath_detection_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_detection_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="breath-detection-min-numeric" tabindex="-1"><a class="header-anchor" href="#breath-detection-min-numeric"><span>Breath detection min (numeric)</span></a></h3><p>Breath detection min distance. Value can be found in the published state on the <code>breath_detection_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_detection_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="move-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#move-sensitivity-numeric"><span>Move sensitivity (numeric)</span></a></h3><p>Move sensitivity. Value can be found in the published state on the <code>move_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="breath-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#breath-sensitivity-numeric"><span>Breath sensitivity (numeric)</span></a></h3><p>Breath sensitivity. Value can be found in the published state on the <code>breath_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="small-move-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#small-move-sensitivity-numeric"><span>Small move sensitivity (numeric)</span></a></h3><p>Small Move sensitivity. Value can be found in the published state on the <code>small_move_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_move_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',34))])}]]),c=JSON.parse('{"path":"/devices/ZG-205Z.html","title":"Tuya ZG-205Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZG-205Z control via MQTT","description":"Integrate your Tuya ZG-205Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:40.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Presence state (enum)","slug":"presence-state-enum","link":"#presence-state-enum","children":[]},{"level":3,"title":"Target distance (numeric)","slug":"target-distance-numeric","link":"#target-distance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Indicator (binary)","slug":"indicator-binary","link":"#indicator-binary","children":[]},{"level":3,"title":"None delay time (numeric)","slug":"none-delay-time-numeric","link":"#none-delay-time-numeric","children":[]},{"level":3,"title":"Move detection max (numeric)","slug":"move-detection-max-numeric","link":"#move-detection-max-numeric","children":[]},{"level":3,"title":"Move detection min (numeric)","slug":"move-detection-min-numeric","link":"#move-detection-min-numeric","children":[]},{"level":3,"title":"Small move detection max (numeric)","slug":"small-move-detection-max-numeric","link":"#small-move-detection-max-numeric","children":[]},{"level":3,"title":"Small move detection min (numeric)","slug":"small-move-detection-min-numeric","link":"#small-move-detection-min-numeric","children":[]},{"level":3,"title":"Breath detection max (numeric)","slug":"breath-detection-max-numeric","link":"#breath-detection-max-numeric","children":[]},{"level":3,"title":"Breath detection min (numeric)","slug":"breath-detection-min-numeric","link":"#breath-detection-min-numeric","children":[]},{"level":3,"title":"Move sensitivity (numeric)","slug":"move-sensitivity-numeric","link":"#move-sensitivity-numeric","children":[]},{"level":3,"title":"Breath sensitivity (numeric)","slug":"breath-sensitivity-numeric","link":"#breath-sensitivity-numeric","children":[]},{"level":3,"title":"Small move sensitivity (numeric)","slug":"small-move-sensitivity-numeric","link":"#small-move-sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728243899000},"filePathRelative":"devices/ZG-205Z.md"}')}}]);