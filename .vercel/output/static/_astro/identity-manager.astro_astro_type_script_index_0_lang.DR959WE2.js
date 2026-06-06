import{c as w}from"./createBrowserClient.CUlolghZ.js";import"./warnDeprecatedPackage.BBO1xwN7.js";function A(){return w("https://pujvlziaqfsyjwtkbgxt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1anZsemlhcWZzeWp3dGtiZ3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTIwNzUsImV4cCI6MjA5MzA2ODA3NX0.OfOjbMAG6PUP6pG2Gyb25M1wAMlGAKde_IyWVmfMtUU")}function m(t){if(!t)return"";const a=document.createElement("div");return a.textContent=t,a.innerHTML}function u(t){return t instanceof Error?t.message:typeof t=="string"?t:"Request failed. Check console for details."}const s=A();document.querySelectorAll(".gov-tab").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".gov-tab").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".gov-panel").forEach(a=>a.classList.remove("active")),t.classList.add("active"),document.getElementById("panel-"+t.getAttribute("data-tab"))?.classList.add("active")})});async function b(){const t=document.getElementById("mentors-container");if(t)try{const{data:a,error:i}=await s.from("mentors").select("*").order("name");if(i)throw i;if(!a||a.length===0){t.innerHTML='<div class="empty-state">No mentors registered yet.</div>';return}t.innerHTML=`
        <div class="data-table-wrap">
          <table class="data-table">
            <thead><tr><th>Name</th><th>Created</th><th>Action</th></tr></thead>
            <tbody>
              ${a.map(n=>`
                <tr>
                  <td><strong>${m(n.name)}</strong></td>
                  <td>${new Date(n.created_at).toLocaleDateString()}</td>
                  <td><button class="btn-neu btn-neu-sm danger" data-id="${n.id}" data-name="${m(n.name)}">Delete</button></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,t.querySelectorAll(".btn-neu.danger").forEach(n=>{n.addEventListener("click",async()=>{const r=n.getAttribute("data-name");if(!confirm(`Delete mentor "${r}"? This may affect student profiles.`))return;const d=n.getAttribute("data-id");n.disabled=!0,n.textContent="Deleting...";try{const{error:e}=await s.from("mentors").delete().eq("id",d);if(e)throw e;n.closest("tr")?.remove();const l=t.querySelector("tbody");l&&l.children.length===0&&(t.innerHTML='<div class="empty-state">No mentors registered yet.</div>')}catch(e){console.error("IdentityManager mentorDelete:",e),n.disabled=!1,n.textContent="Delete",alert("Failed: "+u(e))}})})}catch(a){console.error("IdentityManager loadMentors:",a),t.innerHTML=`<div class="error-state">Failed to load: ${u(a)}</div>`}}document.getElementById("add-mentor-form")?.addEventListener("submit",async t=>{t.preventDefault();const a=document.getElementById("mentor-name"),i=document.getElementById("mentor-error");if(!a||!i)return;i.textContent="";const n=a.value.trim();if(n){a.disabled=!0;try{const{error:r}=await s.from("mentors").insert({name:n});if(r)throw r;a.value="",b()}catch(r){console.error("IdentityManager addMentor:",r),i.textContent=u(r)}finally{a.disabled=!1,a.focus()}}});let I=[],p="pending";document.querySelectorAll("[data-ach-view]").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll("[data-ach-view]").forEach(a=>a.classList.remove("active")),t.classList.add("active"),p=t.getAttribute("data-ach-view"),y(document.getElementById("achievement-search")?.value||"")})});async function h(){const t=document.getElementById("achievements-container");if(t)try{const{data:a,error:i}=await s.from("profiles").select("id, username, display_name, legal_name, milestones, campuses(name)").not("milestones","eq","[]").order("created_at",{ascending:!1});if(i)throw i;const{data:n,error:r}=await s.from("achievement_verifications").select("*");if(r)throw r;I={profiles:a||[],verifications:n||[]},y("")}catch(a){console.error("IdentityManager loadAchievements:",a),t.innerHTML=`<div class="error-state">Failed to load: ${u(a)}</div>`}}function y(t){const a=document.getElementById("achievements-container");if(!a)return;const{profiles:i,verifications:n}=I;if(!i||i.length===0){a.innerHTML='<div class="empty-state">No profiles with milestones found.</div>';return}const r=t?i.filter(e=>(e.display_name||e.username||"").toLowerCase().includes(t.toLowerCase())||(e.legal_name||"").toLowerCase().includes(t.toLowerCase())):i,d=[];for(const e of r){const l=Array.isArray(e.milestones)?e.milestones:[];for(let o=0;o<l.length;o++){const f=l[o],c=(n||[]).find(g=>g.profile_id===e.id&&g.milestone_index===o),v=c?.is_verified||!1;p==="pending"&&v||d.push({profileId:e.id,username:e.username||"—",displayName:e.display_name||e.legal_name||e.username||"Unknown",campus:e.campuses?.name||"—",idx:o,title:f.title||"Milestone "+(o+1),credentialUrl:f.credential_url||"",isVerified:v,verifiedAt:c?.verified_at||null})}}if(d.length===0){const e=p==="pending"?"No pending submissions. All milestones verified.":"No milestones found.";a.innerHTML=`<div class="empty-state">${e}</div>`;return}a.innerHTML=`
      <div style="margin-bottom:0.5rem;font-size:12px;color:var(--color-on-surface-variant)">${d.length} submission${d.length===1?"":"s"}</div>
      <div class="data-table-wrap">
        <table class="data-table">
          <thead><tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Milestone</th>
            <th>Proof</th>
            <th>Status</th>
            <th>Action</th>
          </tr></thead>
          <tbody>
            ${d.map(e=>`
              <tr>
                <td><code style="color:var(--color-primary)">${m(e.username)}</code></td>
                <td><strong>${m(e.displayName)}</strong></td>
                <td>${m(e.title)}</td>
                <td>${e.credentialUrl?`<a href="${m(e.credentialUrl)}" target="_blank" class="btn-neu btn-neu-sm" style="text-decoration:none;font-size:11px"><span class="material-symbols-outlined" style="font-size:14px">open_in_new</span> View</a>`:'<span style="color:var(--color-on-surface-variant);font-size:12px">No proof</span>'}</td>
                <td>
                  <span class="status-badge">
                    <span class="status-dot ${e.isVerified?"approved":"pending"}"></span>
                    <span class="status-label ${e.isVerified?"approved":"pending"}">${e.isVerified?"Verified":"Pending"}</span>
                  </span>
                  ${e.verifiedAt?`<br><small style="font-size:10px;color:var(--color-on-surface-variant)">${new Date(e.verifiedAt).toLocaleDateString()}</small>`:""}
                </td>
                <td>
                  <div style="display:flex;gap:0.35rem">
                    ${e.isVerified?`<button class="btn-neu btn-neu-sm danger" data-action="revoke" data-profile="${e.profileId}" data-idx="${e.idx}">Revoke</button>`:`<button class="btn-neu btn-neu-sm" data-action="approve" data-profile="${e.profileId}" data-idx="${e.idx}">Approve &amp; Sign</button>`}
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `,a.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",async()=>{const l=e.getAttribute("data-action"),o=e.getAttribute("data-profile"),f=parseInt(e.getAttribute("data-idx"));e.disabled=!0;try{const{data:c}=await s.auth.getUser(),v=c?.user?.id;l==="revoke"?await s.from("achievement_verifications").delete().eq("profile_id",o).eq("milestone_index",f):await s.from("achievement_verifications").upsert({profile_id:o,milestone_index:f,is_verified:!0,verified_by:v,verified_at:new Date().toISOString()},{onConflict:"profile_id, milestone_index"}),h()}catch(c){console.error("IdentityManager verify action:",c),e.disabled=!1,alert("Failed: "+u(c))}})})}document.getElementById("achievement-search")?.addEventListener("input",t=>{y(t.target.value)});document.getElementById("refresh-achievements")?.addEventListener("click",h);b();h();
