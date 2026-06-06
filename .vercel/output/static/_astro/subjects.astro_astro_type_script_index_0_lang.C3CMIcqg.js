import{c as b}from"./createBrowserClient.DLvzPopl.js";function i(){return b("https://pujvlziaqfsyjwtkbgxt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1anZsemlhcWZzeWp3dGtiZ3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTIwNzUsImV4cCI6MjA5MzA2ODA3NX0.OfOjbMAG6PUP6pG2Gyb25M1wAMlGAKde_IyWVmfMtUU")}async function u(){const n=document.getElementById("subjects-container");if(n)try{const t=await i(),{data:r,error:a}=await t.from("subjects").select("*").order("name");if(a)throw a;if(!r||r.length===0){n.innerHTML='<div class="empty-state">No subjects defined yet.</div>';return}n.innerHTML=`
        <div class="data-table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(e=>`
                <tr>
                  <td><strong>${l(e.name)}</strong></td>
                  <td>${new Date(e.created_at).toLocaleDateString()}</td>
                  <td>
                    <button class="btn-neu btn-neu-sm danger" data-id="${e.id}" data-name="${l(e.name)}">Delete</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,n.querySelectorAll(".btn-neu.danger").forEach(e=>{e.addEventListener("click",async()=>{const s=e.getAttribute("data-name");if(!confirm(`Delete subject "${s}"?`))return;const m=e.getAttribute("data-id");e.disabled=!0,e.textContent="Deleting...";try{const o=await i(),{error:c}=await o.from("subjects").delete().eq("id",m);if(c)throw c;e.closest("tr")?.remove();const d=n.querySelector("tbody");d&&d.children.length===0&&(n.innerHTML='<div class="empty-state">No subjects defined yet.</div>')}catch(o){e.disabled=!1,e.textContent="Delete",alert("Failed to delete: "+(o instanceof Error?o.message:"Unknown error"))}})})}catch(t){n.innerHTML=`<div class="error-state">Failed to load: ${t instanceof Error?t.message:"Unknown error"}</div>`}}function l(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}document.getElementById("add-subject-form")?.addEventListener("submit",async n=>{n.preventDefault();const t=document.getElementById("subject-name"),r=document.getElementById("subject-error");if(!t||!r)return;r.textContent="";const a=t.value.trim();if(a){t.disabled=!0;try{const e=await i(),{error:s}=await e.from("subjects").insert({name:a});if(s)throw s;t.value="",u()}catch(e){r.textContent=e instanceof Error?e.message:"Failed to add subject"}finally{t.disabled=!1,t.focus()}}});u();
