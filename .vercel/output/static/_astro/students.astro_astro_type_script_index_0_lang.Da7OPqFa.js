import{c as p}from"./createBrowserClient.CUlolghZ.js";import"./warnDeprecatedPackage.BBO1xwN7.js";function y(){return p("https://pujvlziaqfsyjwtkbgxt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1anZsemlhcWZzeWp3dGtiZ3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTIwNzUsImV4cCI6MjA5MzA2ODA3NX0.OfOjbMAG6PUP6pG2Gyb25M1wAMlGAKde_IyWVmfMtUU")}async function u(){const s=document.getElementById("students-container");if(s)try{const e=await y(),{data:t,error:n}=await e.from("profiles").select("*, campuses(name)").eq("is_admin",!1).order("created_at",{ascending:!1});if(n)throw n;if(!t||t.length===0){s.innerHTML='<div class="empty-state">No students registered yet.</div>';return}s.innerHTML=`
        <div class="data-table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Legal Name</th>
                <th>Campus</th>
                <th>Status</th>
                <th style="text-align:right">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(a=>`
                <tr data-id="${a.id}">
                  <td><strong style="color:var(--color-primary-fixed)">@${o(a.username)}</strong></td>
                  <td class="editable-name">
                    <span class="name-display">${o(a.legal_name||"—")}</span>
                    <input class="name-input" style="display:none" value="${o(a.legal_name||"")}" />
                  </td>
                  <td>
                    <span class="campus-display campus-tag">${o(a.campuses?.name||"—")}</span>
                    <select class="campus-select" style="display:none">
                      ${JSON.parse(document.getElementById("campuses-data").getAttribute("data-campuses")).map(l=>`<option value="${l.id}" ${l.id===a.campus_id?"selected":""}>${o(l.name)}</option>`).join("")}
                    </select>
                  </td>
                  <td>
                    <div class="status-badge">
                      <span class="status-dot ${a.is_approved?"approved":"pending"}"></span>
                      <span class="status-label ${a.is_approved?"approved":"pending"}">
                        ${a.is_approved?"Approved":"Pending"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="action-btns">
                      <button class="btn-icon-neu btn-edit-name" title="Edit Name"><span class="material-symbols-outlined" style="font-size:18px">edit</span></button>
                      <button class="btn-icon-neu btn-edit-campus" title="Edit Campus"><span class="material-symbols-outlined" style="font-size:18px">domain</span></button>
                      <button class="btn-icon-neu btn-save" style="display:none"><span class="material-symbols-outlined" style="font-size:18px">check</span></button>
                      <button class="btn-icon-neu btn-cancel" style="display:none"><span class="material-symbols-outlined" style="font-size:18px">close</span></button>
                      <button class="btn-icon-neu danger btn-delete" title="Delete User"><span class="material-symbols-outlined" style="font-size:18px">delete</span></button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,m()}catch(e){s.innerHTML=`<div class="error-state">Failed to load: ${e instanceof Error?e.message:"Unknown error"}</div>`}}function m(){const s=y();document.querySelectorAll(".btn-delete").forEach(e=>{e.addEventListener("click",async()=>{if(!confirm("Delete this user permanently? This cannot be undone."))return;const t=e.closest("tr"),n=t?.getAttribute("data-id");if(n){e.disabled=!0,e.style.opacity="0.5";try{const a=await s,{data:l}=await a.from("profiles").select("avatar_url").eq("id",n).single();l?.avatar_url&&await a.storage.from("avatars").remove([l.avatar_url]);const{error:r}=await a.from("profiles").delete().eq("id",n);if(r)throw r;t?.remove();const i=document.querySelector("tbody");i&&i.children.length===0&&(document.getElementById("students-container").innerHTML='<div class="empty-state">No students registered yet.</div>')}catch(a){e.disabled=!1,e.style.opacity="1",alert("Failed to delete: "+(a instanceof Error?a.message:"Unknown error"))}}})}),document.querySelectorAll(".btn-edit-name").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest("tr"),n=t?.querySelector(".editable-name");n&&(n.querySelector(".name-display").style.display="none",n.querySelector(".name-input").style.display="block",e.style.display="none",t.querySelector(".btn-edit-campus").style.display="none",t.querySelector(".btn-delete").style.display="none",t.querySelector(".btn-save").style.display="",t.querySelector(".btn-cancel").style.display="")})}),document.querySelectorAll(".btn-edit-campus").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest("tr"),n=t?.querySelector("td:nth-child(3)");n&&(n.querySelector(".campus-display").style.display="none",n.querySelector(".campus-select").style.display="block",e.style.display="none",t.querySelector(".btn-edit-name").style.display="none",t.querySelector(".btn-delete").style.display="none",t.querySelector(".btn-save").style.display="",t.querySelector(".btn-cancel").style.display="")})}),document.querySelectorAll(".btn-cancel").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest("tr");d(t)})}),document.querySelectorAll(".btn-save").forEach(e=>{e.addEventListener("click",async()=>{const t=e.closest("tr"),n=t?.getAttribute("data-id");if(n){e.disabled=!0,e.style.opacity="0.5";try{const a=await s,l={},r=t?.querySelector(".name-input");r&&r.style.display!=="none"&&(l.legal_name=r.value.trim());const i=t?.querySelector(".campus-select");i&&i.style.display!=="none"&&(l.campus_id=i.value);const{error:c}=await a.from("profiles").update(l).eq("id",n);if(c)throw c;d(t),u()}catch(a){e.disabled=!1,e.style.opacity="1",alert("Failed to save: "+(a instanceof Error?a.message:"Unknown error"))}}})})}function d(s){s&&(s.querySelector(".name-display").style.display="",s.querySelector(".name-input").style.display="none",s.querySelector(".campus-display").style.display="",s.querySelector(".campus-select").style.display="none",s.querySelector(".btn-edit-name").style.display="",s.querySelector(".btn-edit-campus").style.display="",s.querySelector(".btn-delete").style.display="",s.querySelector(".btn-save").style.display="none",s.querySelector(".btn-cancel").style.display="none")}function o(s){if(!s)return"";const e=document.createElement("div");return e.textContent=s,e.innerHTML}u();
