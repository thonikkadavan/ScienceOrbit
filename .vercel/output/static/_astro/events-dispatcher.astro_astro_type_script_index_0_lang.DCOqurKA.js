import{c as b}from"./createBrowserClient.DLvzPopl.js";function h(){return b("https://pujvlziaqfsyjwtkbgxt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1anZsemlhcWZzeWp3dGtiZ3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTIwNzUsImV4cCI6MjA5MzA2ODA3NX0.OfOjbMAG6PUP6pG2Gyb25M1wAMlGAKde_IyWVmfMtUU")}function r(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}function d(n){return n instanceof Error?n.message:typeof n=="string"?n:"Request failed. Check console for details."}const o=h();document.querySelectorAll(".gov-tab").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".gov-tab").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".gov-panel").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.getElementById("panel-"+n.getAttribute("data-tab"))?.classList.add("active")})});async function u(){const n=document.getElementById("events-container");if(n)try{const{data:t,error:a}=await o.from("events").select("*").order("event_date",{ascending:!1}).limit(100);if(a)throw a;if(!t||t.length===0){n.innerHTML='<div class="empty-state">No events scheduled.</div>';return}n.innerHTML=`
        <div class="data-table-wrap">
          <table class="data-table">
            <thead><tr><th>Title</th><th>Date</th><th>Type</th><th>Live</th><th>Action</th></tr></thead>
            <tbody>
              ${t.map(e=>`
                <tr class="${e.is_live?"live":""}">
                  <td><strong>${r(e.title)}</strong></td>
                  <td style="font-size:13px;color:var(--color-on-surface-variant)">${new Date(e.event_date).toLocaleDateString()} ${new Date(e.event_date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</td>
                  <td><span class="campus-tag">${r(e.event_type||"—")}</span></td>
                  <td><span class="status-badge"><span class="status-dot ${e.is_live?"approved":"pending"}"></span><span class="status-label ${e.is_live?"approved":"pending"}">${e.is_live?"Live":"Offline"}</span></span></td>
                  <td>
                    <div style="display:flex;gap:0.35rem">
                      <button class="btn-neu btn-neu-sm" data-action="toggle-live" data-id="${e.id}" data-live="${e.is_live}">${e.is_live?"Take Offline":"Go Live"}</button>
                      <button class="btn-neu btn-neu-sm danger" data-action="delete-event" data-id="${e.id}" data-title="${r(e.title)}">Delete</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,n.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",async()=>{const s=e.getAttribute("data-action"),l=e.getAttribute("data-id");e.disabled=!0;try{if(s==="toggle-live"){const i=e.getAttribute("data-live")==="true";await o.from("events").update({is_live:!i}).eq("id",l)}else if(s==="delete-event"){const i=e.getAttribute("data-title");if(!confirm(`Delete event "${i}"?`)){e.disabled=!1;return}await o.from("events").delete().eq("id",l)}u(),m(),p()}catch(i){console.error("EventsDisp scheduler action:",i),e.disabled=!1,alert("Failed: "+d(i))}})})}catch(t){console.error("EventsDisp loadEvents:",t),n.innerHTML=`<div class="error-state">Failed to load: ${d(t)}</div>`}}document.getElementById("add-event-form")?.addEventListener("submit",async n=>{n.preventDefault();const t=document.getElementById("event-title"),a=document.getElementById("event-desc"),e=document.getElementById("event-date"),s=document.getElementById("event-type"),l=document.getElementById("event-category"),i=document.getElementById("event-icon"),f=document.getElementById("event-location"),g=document.getElementById("event-reg-url"),y=document.getElementById("event-live"),v=document.getElementById("event-error");if(!(!t||!e||!v)){if(v.textContent="",!t.value.trim()||!e.value){v.textContent="Title and date are required.";return}t.disabled=!0,e.disabled=!0;try{const{error:c}=await o.from("events").insert({title:t.value.trim(),description:a?.value?.trim()||"",event_date:new Date(e.value).toISOString(),event_type:s?.value||"webinar",category:l?.value?.trim()||"",icon:i?.value?.trim()||"event",location:f?.value?.trim()||"",registration_url:g?.value?.trim()||"",is_live:y?.checked||!1});if(c)throw c;t.value="",a&&(a.value=""),e&&(e.value=""),l&&(l.value=""),i&&(i.value=""),f&&(f.value=""),g&&(g.value=""),y&&(y.checked=!1),u(),m(),p()}catch(c){console.error("EventsDisp createEvent:",c),v.textContent=d(c)}finally{t.disabled=!1,e.disabled=!1}}});async function m(){const n=document.getElementById("live-container");if(n)try{const{data:t,error:a}=await o.from("events").select("*").order("is_live",{ascending:!1}).order("event_date",{ascending:!0}).limit(50);if(a)throw a;if(!t||t.length===0){n.innerHTML='<div class="empty-state">No events found.</div>';return}n.innerHTML=t.map(e=>`
        <div class="live-banner-card${e.is_live?" live":""}">
          <span class="material-symbols-outlined" style="font-size:24px;color:${e.is_live?"var(--color-error)":"var(--color-on-surface-variant)"}">${e.is_live?"podcasts":"radio_button_unchecked"}</span>
          <div class="lb-info">
            <div class="lb-title">${r(e.title)} <span class="campus-tag">${r(e.event_type||"—")}</span></div>
            <div class="lb-meta">${new Date(e.event_date).toLocaleDateString()} ${e.location?"· "+r(e.location):""}</div>
          </div>
          <button class="btn-neu btn-neu-sm ${e.is_live?"danger":""}" data-action="toggle-live-banner" data-id="${e.id}" data-live="${e.is_live}">${e.is_live?"Take Offline":"Go Live"}</button>
        </div>
      `).join(""),n.querySelectorAll("[data-action='toggle-live-banner']").forEach(e=>{e.addEventListener("click",async()=>{const s=e.getAttribute("data-id"),l=e.getAttribute("data-live")==="true";e.disabled=!0;try{await o.from("events").update({is_live:!l}).eq("id",s),m(),u(),p()}catch(i){console.error("EventsDisp liveToggle:",i),e.disabled=!1,alert("Failed: "+d(i))}})})}catch(t){console.error("EventsDisp loadLiveEvents:",t),n.innerHTML=`<div class="error-state">Failed: ${d(t)}</div>`}}async function p(){const n=document.getElementById("timeline-container");if(n)try{const t=new Date().toISOString(),{data:a,error:e}=await o.from("events").select("*").gte("event_date",t).order("event_date",{ascending:!0}).limit(20);if(e)throw e;if(!a||a.length===0){n.innerHTML='<div class="empty-state">No upcoming events.</div>';return}n.innerHTML=a.map((s,l)=>`
        <div class="timeline-item" style="${l===0?"border-left:3px solid var(--color-primary)":""}">
          <div class="timeline-date">${new Date(s.event_date).toLocaleDateString([],{month:"short",day:"numeric"})}</div>
          <div class="timeline-title">${r(s.title)}</div>
          <div class="timeline-type">${r(s.event_type||"")}</div>
          ${s.is_live?'<span class="status-badge"><span class="status-dot approved"></span><span class="status-label approved">LIVE</span></span>':""}
        </div>
      `).join("")}catch(t){console.error("EventsDisp loadTimeline:",t),n.innerHTML=`<div class="error-state">Failed: ${d(t)}</div>`}}u();m();p();
