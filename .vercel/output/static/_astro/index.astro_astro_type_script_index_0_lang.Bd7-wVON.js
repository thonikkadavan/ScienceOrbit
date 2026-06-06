import{c}from"./createBrowserClient.CUlolghZ.js";import"./warnDeprecatedPackage.BBO1xwN7.js";function l(){return c("https://pujvlziaqfsyjwtkbgxt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1anZsemlhcWZzeWp3dGtiZ3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTIwNzUsImV4cCI6MjA5MzA2ODA3NX0.OfOjbMAG6PUP6pG2Gyb25M1wAMlGAKde_IyWVmfMtUU")}async function u(){const t=document.getElementById("queue-container");if(t)try{const r=await l(),{data:n,error:o}=await r.from("profiles").select("*, campuses(name)").eq("is_approved",!1).eq("is_admin",!1).order("created_at",{ascending:!1});if(o)throw o;if(!n||n.length===0){t.innerHTML='<div class="empty-state">No pending registrations.</div>';return}t.innerHTML=`
        <div class="data-table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Legal Name</th>
                <th>Campus</th>
                <th>Registered</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${n.map(e=>`
                <tr>
                  <td><strong>${i(e.username)}</strong></td>
                  <td>${i(e.legal_name||"—")}</td>
                  <td>${i(e.campuses?.name||"—")}</td>
                  <td>${new Date(e.created_at).toLocaleDateString()}</td>
                  <td>
                    <button class="btn-neu" data-id="${e.id}">Approve</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,t.querySelectorAll(".btn-neu").forEach(e=>{e.addEventListener("click",async()=>{const d=e.getAttribute("data-id");e.disabled=!0,e.textContent="Approving...";try{const{error:a}=await r.from("profiles").update({is_approved:!0}).eq("id",d);if(a)throw a;e.closest("tr")?.remove();const s=t.querySelector("tbody");s&&s.children.length===0&&(t.innerHTML='<div class="empty-state">No pending registrations.</div>')}catch(a){e.disabled=!1,e.textContent="Approve",alert("Failed to approve: "+(a instanceof Error?a.message:"Unknown error"))}})})}catch(r){t.innerHTML=`<div class="error-state">Failed to load queue: ${r instanceof Error?r.message:"Unknown error"}</div>`}}function i(t){if(!t)return"";const r=document.createElement("div");return r.textContent=t,r.innerHTML}u();
