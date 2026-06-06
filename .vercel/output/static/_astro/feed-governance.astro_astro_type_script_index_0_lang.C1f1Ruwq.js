import{c as g}from"./createBrowserClient.DLvzPopl.js";function h(){return g("https://pujvlziaqfsyjwtkbgxt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1anZsemlhcWZzeWp3dGtiZ3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTIwNzUsImV4cCI6MjA5MzA2ODA3NX0.OfOjbMAG6PUP6pG2Gyb25M1wAMlGAKde_IyWVmfMtUU")}function c(i){if(!i)return"";const a=document.createElement("div");return a.textContent=i,a.innerHTML}function o(i){return i instanceof Error?i.message:typeof i=="string"?i:"Request failed. Check console for details."}document.querySelectorAll(".gov-tab").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".gov-tab").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".gov-panel").forEach(a=>a.classList.remove("active")),i.classList.add("active"),document.getElementById("panel-"+i.getAttribute("data-tab"))?.classList.add("active")})});let u=[];const d=h();async function p(){const i=document.getElementById("posts-container");if(i)try{const{data:a,error:n}=await d.from("posts").select("*").order("created_at",{ascending:!1}).limit(100);if(n)throw n;if(!a||a.length===0){i.innerHTML='<div class="empty-state">No posts found.</div>',u=[];return}u=a,f(a,"")}catch(a){console.error("FeedGov loadPosts:",a),i.innerHTML=`<div class="error-state">Failed to load: ${o(a)}</div>`}}function f(i,a){const n=document.getElementById("posts-container");if(!n)return;const e=a?i.filter(t=>(t.content||"").toLowerCase().includes(a.toLowerCase())||(t.tags||[]).some(s=>s.toLowerCase().includes(a.toLowerCase()))):i;if(e.length===0){n.innerHTML='<div class="empty-state">No matching posts.</div>';return}n.innerHTML=`
      <div style="margin-bottom:0.5rem;font-size:12px;color:var(--color-on-surface-variant)">${e.length} post${e.length===1?"":"s"}</div>
      ${e.map(t=>`
        <div class="post-card${t.is_pinned?" pinned":""}${t.is_hidden?" hidden":""}">
          <div class="post-avatar"><span class="material-symbols-outlined">person</span></div>
          <div class="post-body">
            <div class="post-meta">
              <strong>${c(t.user_id?.slice(0,8))}…</strong>
              <span>${new Date(t.created_at).toLocaleDateString()} ${new Date(t.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span>
              ${t.is_pinned?'<span class="status-badge"><span class="status-dot approved"></span><span class="status-label approved">Pinned</span></span>':""}
              ${t.is_hidden?'<span class="status-badge"><span class="status-dot pending"></span><span class="status-label pending">Hidden</span></span>':""}
              ${t.image_url?'<span class="material-symbols-outlined" style="font-size:14px;color:var(--color-primary-container)">image</span>':""}
              ${t.file_url?'<span class="material-symbols-outlined" style="font-size:14px;color:var(--color-primary-container)">attach_file</span>':""}
            </div>
            <div class="post-content">${c(t.content||"(no content)").slice(0,300)}</div>
            ${(t.tags||[]).length>0?`<div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-bottom:0.35rem">${t.tags.map(s=>`<span class="campus-tag">${c(s)}</span>`).join("")}</div>`:""}
            <div class="post-actions">
              <button class="btn-neu btn-neu-sm ${t.is_pinned?"danger":""}" data-action="toggle-pin" data-id="${t.id}" data-pinned="${t.is_pinned}">${t.is_pinned?"Unpin":"Pin"}</button>
              <button class="btn-neu btn-neu-sm ${t.is_hidden?"":"danger"}" data-action="toggle-hide" data-id="${t.id}" data-hidden="${t.is_hidden}">${t.is_hidden?"Show":"Hide"}</button>
              <button class="btn-neu btn-neu-sm danger" data-action="delete" data-id="${t.id}">Delete</button>
            </div>
          </div>
        </div>
      `).join("")}
    `,n.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",async()=>{const s=t.getAttribute("data-action"),r=t.getAttribute("data-id");t.disabled=!0;try{if(s==="toggle-pin"){const l=t.getAttribute("data-pinned")==="true";await d.from("posts").update({is_pinned:!l}).eq("id",r)}else if(s==="toggle-hide"){const l=t.getAttribute("data-hidden")==="true";await d.from("posts").update({is_hidden:!l}).eq("id",r)}else if(s==="delete"){if(!confirm("Delete this post permanently?")){t.disabled=!1;return}await d.from("posts").delete().eq("id",r)}p()}catch(l){console.error("FeedGov toggle action:",l),t.disabled=!1,alert("Action failed: "+o(l))}})})}document.getElementById("post-search")?.addEventListener("input",i=>{f(u,i.target.value)});document.getElementById("refresh-posts")?.addEventListener("click",p);async function m(){const i=document.getElementById("topics-container");if(i)try{const{data:a,error:n}=await d.from("trending_topics").select("*").order("display_order").order("created_at",{ascending:!1});if(n)throw n;if(!a||a.length===0){i.innerHTML='<div class="empty-state">No trending topics defined.</div>';return}i.innerHTML=`
        <div class="data-table-wrap">
          <table class="data-table">
            <thead><tr><th>Order</th><th>Hashtag</th><th>Display Count</th><th>Active</th><th>Action</th></tr></thead>
            <tbody>
              ${a.map(e=>`
                <tr>
                  <td><input class="order-input name-input" type="number" data-id="${e.id}" value="${e.display_order}" style="width:60px" /></td>
                  <td><strong>${c(e.hashtag)}</strong></td>
                  <td>${c(e.display_count||"—")}</td>
                  <td><span class="status-badge"><span class="status-dot ${e.is_active?"approved":"pending"}"></span><span class="status-label ${e.is_active?"approved":"pending"}">${e.is_active?"Active":"Inactive"}</span></span></td>
                  <td>
                    <div style="display:flex;gap:0.35rem">
                      <button class="btn-neu btn-neu-sm" data-action="toggle-topic" data-id="${e.id}" data-active="${e.is_active}">${e.is_active?"Deactivate":"Activate"}</button>
                      <button class="btn-neu btn-neu-sm danger" data-action="delete-topic" data-id="${e.id}">Delete</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,i.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-action"),s=e.getAttribute("data-id");e.disabled=!0;try{if(t==="toggle-topic"){const r=e.getAttribute("data-active")==="true";await d.from("trending_topics").update({is_active:!r}).eq("id",s)}else if(t==="delete-topic"){if(!confirm("Delete this trending topic?")){e.disabled=!1;return}await d.from("trending_topics").delete().eq("id",s)}m()}catch(r){console.error("FeedGov topic action:",r),e.disabled=!1,alert("Failed: "+o(r))}})}),i.querySelectorAll(".order-input").forEach(e=>{e.addEventListener("change",async()=>{const t=e.getAttribute("data-id"),s=parseInt(e.value)||0;await d.from("trending_topics").update({display_order:s}).eq("id",t)})})}catch(a){console.error("FeedGov loadTopics:",a),i.innerHTML=`<div class="error-state">Failed to load: ${o(a)}</div>`}}document.getElementById("add-topic-form")?.addEventListener("submit",async i=>{i.preventDefault();const a=document.getElementById("topic-hashtag"),n=document.getElementById("topic-count"),e=document.getElementById("topic-error");if(!a||!e)return;e.textContent="";const t=a.value.trim();if(t){a.disabled=!0;try{const{error:s}=await d.from("trending_topics").insert({hashtag:t,display_count:n?.value?.trim()||""});if(s)throw s;a.value="",n&&(n.value=""),m()}catch(s){console.error("FeedGov addTopic:",s),e.textContent=o(s)}finally{a.disabled=!1,a.focus()}}});async function v(){const i=document.getElementById("featured-container");if(i)try{const{data:a,error:n}=await d.from("featured_members").select("*, profiles!inner(username, display_name)").order("display_order").order("created_at",{ascending:!1});if(n)throw n;if(!a||a.length===0){i.innerHTML='<div class="empty-state">No featured members.</div>';return}i.innerHTML=`
        <div class="data-table-wrap">
          <table class="data-table">
            <thead><tr><th>Order</th><th>User</th><th>Active</th><th>Action</th></tr></thead>
            <tbody>
              ${a.map(e=>`
                <tr>
                  <td><input class="order-input name-input" type="number" data-id="${e.id}" value="${e.display_order}" style="width:60px" /></td>
                  <td><strong>${c(e.profiles?.display_name||e.profiles?.username||e.user_id.slice(0,8))}</strong> <small style="color:var(--color-on-surface-variant)">${c(e.user_id.slice(0,8))}…</small></td>
                  <td><span class="status-badge"><span class="status-dot ${e.is_active?"approved":"pending"}"></span><span class="status-label ${e.is_active?"approved":"pending"}">${e.is_active?"Active":"Inactive"}</span></span></td>
                  <td>
                    <div style="display:flex;gap:0.35rem">
                      <button class="btn-neu btn-neu-sm" data-action="toggle-featured" data-id="${e.id}" data-active="${e.is_active}">${e.is_active?"Deactivate":"Activate"}</button>
                      <button class="btn-neu btn-neu-sm danger" data-action="delete-featured" data-id="${e.id}">Remove</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,i.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-action"),s=e.getAttribute("data-id");e.disabled=!0;try{if(t==="toggle-featured"){const r=e.getAttribute("data-active")==="true";await d.from("featured_members").update({is_active:!r}).eq("id",s)}else if(t==="delete-featured"){if(!confirm("Remove this member from featured?")){e.disabled=!1;return}await d.from("featured_members").delete().eq("id",s)}v()}catch(r){console.error("FeedGov featured action:",r),e.disabled=!1,alert("Failed: "+o(r))}})}),i.querySelectorAll(".order-input").forEach(e=>{e.addEventListener("change",async()=>{const t=e.getAttribute("data-id"),s=parseInt(e.value)||0;await d.from("featured_members").update({display_order:s}).eq("id",t)})})}catch(a){console.error("FeedGov loadFeatured:",a),i.innerHTML=`<div class="error-state">Failed to load: ${o(a)}</div>`}}document.getElementById("add-featured-form")?.addEventListener("submit",async i=>{i.preventDefault();const a=document.getElementById("featured-user-id"),n=document.getElementById("featured-error");if(!a||!n)return;n.textContent="";const e=a.value.trim();if(e){a.disabled=!0;try{const{error:t}=await d.from("featured_members").insert({user_id:e});if(t)throw t;a.value="",v()}catch(t){console.error("FeedGov addFeatured:",t),n.textContent=o(t)}finally{a.disabled=!1,a.focus()}}});p();m();v();
