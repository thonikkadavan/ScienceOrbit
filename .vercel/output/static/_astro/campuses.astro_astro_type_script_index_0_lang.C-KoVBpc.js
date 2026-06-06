import{c as f}from"./createBrowserClient.DLvzPopl.js";function o(){return f("https://pujvlziaqfsyjwtkbgxt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1anZsemlhcWZzeWp3dGtiZ3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTIwNzUsImV4cCI6MjA5MzA2ODA3NX0.OfOjbMAG6PUP6pG2Gyb25M1wAMlGAKde_IyWVmfMtUU")}async function m(){const a=document.getElementById("campuses-container");if(a)try{const t=await o(),{data:n,error:r}=await t.from("campuses").select("*").order("name");if(r)throw r;if(!n||n.length===0){a.innerHTML='<div class="empty-state">No campuses defined yet.</div>';return}a.innerHTML=`
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
              ${n.map(e=>`
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
      `,a.querySelectorAll(".btn-neu.danger").forEach(e=>{e.addEventListener("click",async()=>{const s=e.getAttribute("data-name");if(!confirm(`Delete campus "${s}"? This may affect student profiles.`))return;const u=e.getAttribute("data-id");e.disabled=!0,e.textContent="Deleting...";try{const i=await o(),{error:d}=await i.from("campuses").delete().eq("id",u);if(d)throw d;e.closest("tr")?.remove();const c=a.querySelector("tbody");c&&c.children.length===0&&(a.innerHTML='<div class="empty-state">No campuses defined yet.</div>')}catch(i){e.disabled=!1,e.textContent="Delete",alert("Failed to delete: "+(i instanceof Error?i.message:"Unknown error"))}})})}catch(t){a.innerHTML=`<div class="error-state">Failed to load: ${t instanceof Error?t.message:"Unknown error"}</div>`}}function l(a){if(!a)return"";const t=document.createElement("div");return t.textContent=a,t.innerHTML}document.getElementById("add-campus-form")?.addEventListener("submit",async a=>{a.preventDefault();const t=document.getElementById("campus-name"),n=document.getElementById("campus-error");if(!t||!n)return;n.textContent="";const r=t.value.trim();if(r){t.disabled=!0;try{const e=await o(),{error:s}=await e.from("campuses").insert({name:r});if(s)throw s;t.value="",m()}catch(e){n.textContent=e instanceof Error?e.message:"Failed to add campus"}finally{t.disabled=!1,t.focus()}}});m();
