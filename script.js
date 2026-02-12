 // ========= OPTIONS (edit freely) =========
  const OPTIONS = {
  platformMode: ["ImageFX", "Midjourney", "Stable Diffusion", "ChatGPT"],
  privateBrand: ["None"],

  characterType: [
    "fictional human character",
    "digital avatar character",
    "fantasy character",
    "paranormal character",
    "stylized illustration character"
  ],

  gender: ["Female", "Male", "Androgynous", "Non-binary", "Custom"],
  ageGroup: ["Child", "Teen", "Young Adult (20s)", "Adult (30s–40s)", "Mature (50+)"],

  stylePreset: [
    "hyper-realistic lifestyle photo",
    "cinematic editorial",
    "studio portrait"
  ],

  characterStyle: [
    
  // Realistic
  "Realistic Photo (Lifestyle)",
  "Realistic Editorial (High-End)",
  "Realistic Beauty (Gloss + Detail)",
  "Realistic Street Style (Urban)",

  // Stylized / Illustration
  "Stylized Cartoon (Painterly Pop)",
  "Stylized Cartoon (Clean Cel)",
  "Manhwa / Webtoon (Glossy Ink)",
  "Anime (Modern Clean)",

  // Chibi family
  "Chibi (Classic Cute)",
  "Chibi (Exaggerated Big-Head)",
  "Chibi (Super-Deformed / Tiny Body)",
  "Glossy 3D Chibi (Soft Shine)",
  "Ultra-Glossy 3D Chibi (High Shine)",

  // 3D / CGI
  "3D CGI Realistic",
  "Pixar-Style 3D",
  "Bratz-Inspired 3D",
  "Toy-Like Render (Controlled Gloss)",

  // Specialty
  "Dark Fantasy Stylized",
  "Soft Glam Illustration",
  "Luxury Influencer Render"
],
    bodyType: ["slim","curvy","plus-size","athletic","petite","tall statuesque"],
    complexion: ["deep brown","rich brown","medium brown","light brown","tan","olive","golden brown","porcelain"],
    undertone: ["warm undertone","neutral undertone","cool undertone","golden undertone","olive undertone"],
    expression: ["calm and focused","confident subtle smirk","soft smile","serious intense gaze","playful expression","cozy relaxed expression","boss energy expression","mysterious expression","flirty expression","peaceful expression"],
    pose: ["standing casually, relaxed posture","seated comfortably, legs tucked to the side","walking candidly mid-step","leaning against a wall, arms crossed","lounging on a couch, cozy posture","one hand on hip, confident stance","holding an item naturally, relaxed shoulders","looking over shoulder, soft attitude","hands in pockets, street style pose","sitting cross-legged, cozy vibe"],

    hairTexture: ["straight","wavy","curly","coily","kinky-curly"],
    hairStyle: ["sleek low bun","high ponytail","knotless braids","twists","loose curls","blowout","half-up half-down","bubble ponytail","space buns","short curly bob","braided ponytail"],
    hairLength: ["pixie","bob length","shoulder length","mid-back length","waist length"],
    hairPart: ["middle part","side part","no part","deep side part"],
    hairFinish: ["silky smooth finish","soft fluffy volume","defined curl definition","sleek edges","natural texture emphasis","high shine gloss"],
    hairAccessories: ["none","gold cuffs","hair clip","headband","silk scarf accent","pearls","bows"],

    baseFinish: ["dewy skin finish","soft matte finish","natural skin finish","glowy editorial finish","satin finish"],
    eyeMakeup: ["neutral browns","soft shimmer","smoky eye","pink-mauve tones","bronze glam","sharp liner + inner corner highlight","no-makeup makeup eyes","graphic liner accent"],
    lipStyle: ["glossy nude lips","matte nude lips","brown liner + gloss","red lip","soft ombré lip","deep berry lip","clear gloss","pink gloss"],

    lashStyle: ["natural wispy","soft volume","dramatic flutter","doll-eye","cat-eye mapping","spiky strip lash"],
    lashLength: ["short","medium","long","extra-long"],
    lashCurl: ["C-curl","D-curl","L-curl","soft curl"],
    lashDensity: ["light","medium","full","mega volume"],

    nailType: ["gel nails","acrylic nails","press-on nails"],
    nailLength: ["short","medium","long","extra-long"],
    nailShape: ["square","almond","coffin","stiletto","round"],
    nailFinish: ["glossy finish","matte finish","chrome reflective finish","glitter accent finish"],
    nailColor: ["nude","chocolate brown","glossy black","soft pink","red","milky white","silver chrome","gold chrome","espresso brown","deep burgundy"],
    nailArt: ["solid color","French tips","ombre fade","aura nails","marble effect","minimal line art","glazed donut","tortoise shell"],
    nailAccent: ["no accents","gold foil accents","rhinestone cuticle detail","3D charm accent","one accent nail"],

    outfitAesthetic: ["urban luxe streetwear","cozy chic neutrals","minimal upscale casual","editorial fashion vibe","dark romance edge","soft glam","boss babe corporate chic","street minimal","winter luxe","spring brunch chic"],
    outfitPieces: [
      "fitted turtleneck bodysuit with oversized wool coat",
      "oversized hoodie layered with cropped puffer jacket",
      "sleek dress with ribbed cardigan",
      "leather jacket with dark denim",
      "tailored blazer with fitted top and straight-leg pants",
      "matching knit set with long coat",
      "bodycon midi dress with trench coat"
    ],
    outfitFit: ["fitted silhouette","tailored fit","oversized layers","relaxed fit","snatched waist emphasis"],
    outfitFabric: ["soft knit","wool blend","denim","leather or faux leather","satin or silk","ribbed fabric","cashmere vibe"],
    outfitPattern: ["solid color","subtle texture","minimal print","plaid accent","monochrome","pinstripe"],
    shoes: ["clean white sneakers","chunky platform sneakers","knee-high boots","thigh-high boots","ankle boots","strappy heels","loafers"],
    colorScheme: ["neutral tones (black, brown, cream, gold accents)","monochrome black + silver","warm neutrals with soft beige highlights","dark moody palette with subtle neon accents","cream + camel + gold"],

    styleInfluence: ["original styling","designer-inspired silhouettes (no logos)","luxury-inspired styling (no logos)","streetwear editorial-inspired (no logos)"],

    theme: ["cozy urban reading vibe","nighttime city aesthetic","luxe café ambiance","minimal modern apartment vibe","rooftop skyline vibe","library corner vibe","studio backdrop vibe"],
    setting: ["urban luxe café with bookshelves and plush seating","modern city apartment book nook with warm lamp lighting","rooftop lounge with skyline bokeh","stylish library corner with marble and wood accents","minimal studio set, clean backdrop"],
    lighting: ["soft natural window light","warm ambient lamp lighting","moody cinematic lighting","neon city glow at night","golden hour sunlight","soft studio lighting"],
    view: ["full-body shot","three-quarter shot","waist-up portrait","close-up portrait"],
    angle: ["eye-level","slight low angle (power)","slight high angle (soft)","candid side angle","over-the-shoulder vibe"],
    lens: ["35mm cinematic depth of field","50mm portrait soft bokeh","wide angle clean modern look","editorial studio framing"],

    multiAccessories: ["gold hoop earrings","layered necklaces","stacked bangles","fashion glasses","sleek watch","statement rings","small shoulder bag (no logos)"],
    multiProps: ["holding a Kindle e-reader","holding a book","coffee cup nearby","stack of books nearby","open journal and pen","phone on table","soft throw blanket"]
  };

  // ========= UI Helpers =========
  const $ = (id) => document.getElementById(id);
  const KEY = "prompt_studio_presets_v1";

  function fillSelect(id, arr){
  const el = $(id);
  if (!el) return;

  el.innerHTML =
    `<option value="">— Select —</option>` +
    arr.map(v =>
      `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`
    ).join("");
}
  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  }
  function v(id){ return ($(id)?.value || "").trim(); }
  function randPick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

  function setVerbosityLabel(){
    const n = Number($("verbosity").value);
    $("verbosityLabel").textContent = n===1 ? "Minimal" : n===2 ? "Standard" : "Ultra";
  }

  function renderChips(containerId, items, max, warnId){
    const box = $(containerId);
    box.innerHTML = "";
    items.forEach((label, idx) => {
      const chip = document.createElement("label");
      chip.className = "chip";
      chip.innerHTML = `<input type="checkbox"><span>${escapeHtml(label)}</span>`;
      box.appendChild(chip);
      chip.querySelector("span").textContent = label;
      chip.querySelector("input").addEventListener("change", () => {
        const checked = box.querySelectorAll("input:checked").length;
        $(warnId).style.display = checked > max ? "" : "none";
        if(checked > max){
          chip.querySelector("input").checked = false;
          $(warnId).style.display = "";
        }
      });
    });
  }
  function getChipSelections(containerId){
    const box = $(containerId);
    const out = [];
    box.querySelectorAll("label.chip").forEach(ch => {
      const cb = ch.querySelector("input");
      const text = ch.querySelector("span")?.textContent || "";
      if(cb && cb.checked && text) out.push(text);
    });
    return out;
  }
  function setChipSelections(containerId, selections){
    const set = new Set(selections || []);
    $(containerId).querySelectorAll("label.chip").forEach(ch => {
      const cb = ch.querySelector("input");
      const text = ch.querySelector("span")?.textContent || "";
      cb.checked = set.has(text);
    });
  }

  // ========= Presets =========
  function loadPresets(){
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
  }
  function savePresets(p){ localStorage.setItem(KEY, JSON.stringify(p)); }
  function refreshPresetList(){
    const presets = loadPresets();
    const names = Object.keys(presets).sort((a,b)=>a.localeCompare(b));
    const sel = $("presetList");
    sel.innerHTML = names.length
      ? names.map(n=>`<option value="${escapeHtml(n)}">${escapeHtml(n)}</option>`).join("")
      : `<option value="">(no presets yet)</option>`;
  }

  function captureState(){
    const state = {
      platformMode: v("platformMode"),
      verbosity: Number($("verbosity").value),
      seed: v("seed"),
      negative: v("negative"),
      brandToggle: $("brandToggle").checked,
      privateBrand: v("privateBrand"),
      privateBrandNotes: v("privateBrandNotes"),

      characterType: v("characterType"),
      stylePreset: v("stylePreset"),
      bodyType: v("bodyType"),
      complexion: v("complexion"),
      undertone: v("undertone"),
      expression: v("expression"),
      pose: v("pose"),
      customCharacter: v("customCharacter"),

      hairTexture: v("hairTexture"),
      hairStyle: v("hairStyle"),
      hairLength: v("hairLength"),
      hairPart: v("hairPart"),
      hairFinish: v("hairFinish"),
      hairAccessories: v("hairAccessories"),
      customHair: v("customHair"),

      baseFinish: v("baseFinish"),
      eyeMakeup: v("eyeMakeup"),
      lipStyle: v("lipStyle"),
      lashStyle: v("lashStyle"),
      lashLength: v("lashLength"),
      lashCurl: v("lashCurl"),
      lashDensity: v("lashDensity"),

      nailType: v("nailType"),
      nailLength: v("nailLength"),
      nailShape: v("nailShape"),
      nailFinish: v("nailFinish"),
      nailColor: v("nailColor"),
      nailArt: v("nailArt"),
      nailAccent: v("nailAccent"),
      customBeauty: v("customBeauty"),

      outfitAesthetic: v("outfitAesthetic"),
      outfitPieces: v("outfitPieces"),
      outfitFit: v("outfitFit"),
      outfitFabric: v("outfitFabric"),
      outfitPattern: v("outfitPattern"),
      shoes: v("shoes"),
      colorScheme: v("colorScheme"),
      styleInfluence: v("styleInfluence"),
      customOutfit: v("customOutfit"),
      accessoriesMulti: getChipSelections("accessoryChips"),

      setting: v("setting"),
      lighting: v("lighting"),
      view: v("view"),
      angle: v("angle"),
      lens: v("lens"),
      theme: v("theme"),
      extraScene: v("extraScene"),
      propsMulti: getChipSelections("propChips"),
    };
    return state;
  }

  function applyState(s){
    if(!s) return;
    fillVal("platformMode", s.platformMode);
    $("verbosity").value = String(s.verbosity ?? 2); setVerbosityLabel();
    $("seed").value = s.seed || "";
    $("negative").value = s.negative || "";

    $("brandToggle").checked = !!s.brandToggle;
    toggleBrandFields();
    fillVal("privateBrand", s.privateBrand);
    $("privateBrandNotes").value = s.privateBrandNotes || "";

    fillVal("characterType", s.characterType);
    fillVal("stylePreset", s.stylePreset);
    fillVal("bodyType", s.bodyType);
    fillVal("complexion", s.complexion);
    fillVal("undertone", s.undertone);
    fillVal("expression", s.expression);
    fillVal("pose", s.pose);
    $("customCharacter").value = s.customCharacter || "";

    fillVal("hairTexture", s.hairTexture);
    fillVal("hairStyle", s.hairStyle);
    fillVal("hairLength", s.hairLength);
    fillVal("hairPart", s.hairPart);
    fillVal("hairFinish", s.hairFinish);
    fillVal("hairAccessories", s.hairAccessories);
    $("customHair").value = s.customHair || "";

    fillVal("baseFinish", s.baseFinish);
    fillVal("eyeMakeup", s.eyeMakeup);
    fillVal("lipStyle", s.lipStyle);
    fillVal("lashStyle", s.lashStyle);
    fillVal("lashLength", s.lashLength);
    fillVal("lashCurl", s.lashCurl);
    fillVal("lashDensity", s.lashDensity);

    fillVal("nailType", s.nailType);
    fillVal("nailLength", s.nailLength);
    fillVal("nailShape", s.nailShape);
    fillVal("nailFinish", s.nailFinish);
    fillVal("nailColor", s.nailColor);
    fillVal("nailArt", s.nailArt);
    fillVal("nailAccent", s.nailAccent);
    $("customBeauty").value = s.customBeauty || "";

    fillVal("outfitAesthetic", s.outfitAesthetic);
    fillVal("outfitPieces", s.outfitPieces);
    fillVal("outfitFit", s.outfitFit);
    fillVal("outfitFabric", s.outfitFabric);
    fillVal("outfitPattern", s.outfitPattern);
    fillVal("shoes", s.shoes);
    fillVal("colorScheme", s.colorScheme);
    fillVal("styleInfluence", s.styleInfluence);
    $("customOutfit").value = s.customOutfit || "";
    setChipSelections("accessoryChips", s.accessoriesMulti || []);

    fillVal("setting", s.setting);
    fillVal("lighting", s.lighting);
    fillVal("view", s.view);
    fillVal("angle", s.angle);
    fillVal("lens", s.lens);
    fillVal("theme", s.theme);
    $("extraScene").value = s.extraScene || "";
    setChipSelections("propChips", s.propsMulti || []);
  }

  function fillVal(id, val){
    if(!$(id)) return;
    if(val) $(id).value = val;
  }

  // ========= Prompt Builder =========
  function buildPrompt(){
    const s = captureState();
    const mode = s.platformMode;
    const vb = s.verbosity;
    const characterStyle = s.characterStyle;
    const gender = s.gender;
    const ageGroup = s.ageGroup;

    const accessories = (s.accessoriesMulti || []);
    const props = (s.propsMulti || []);
    const safeBrandLine = s.brandToggle ? "Style reference: luxury/designer-inspired (no logos)." : "";

    const subject = `Create an image of a ${s.characterType} in a ${s.stylePreset}${characterStyle ? `, ${characterStyle} style` : ""}.`;
    const appearance = `Gender: ${gender}. Age: ${ageGroup}. Body: ${s.bodyType}. Complexion: ${s.complexion} ...`
    const hair = `Hair: ${s.hairTexture} texture, ${s.hairStyle}, ${s.hairLength}, ${s.hairPart}, ${s.hairFinish}; accessories: ${s.hairAccessories}.`;
    const beauty = `Makeup: ${s.baseFinish}, eyes: ${s.eyeMakeup}, lips: ${s.lipStyle}. Lashes: ${s.lashStyle}, ${s.lashLength}, ${s.lashCurl}, ${s.lashDensity}. Nails: ${s.nailType}, ${s.nailLength}, ${s.nailShape}, ${s.nailColor}, ${s.nailFinish}, art: ${s.nailArt}, accent: ${s.nailAccent}.`;
    const outfit = `Outfit: ${s.outfitAesthetic} — ${s.outfitPieces}; fit: ${s.outfitFit}; fabric: ${s.outfitFabric}; pattern: ${s.outfitPattern}. Shoes: ${s.shoes}. Color scheme: ${s.colorScheme}. Influence: ${s.styleInfluence}.`;
    const extras = [
      accessories.length ? `Accessories: ${accessories.join(", ")}.` : "",
      props.length ? `Props: ${props.join(", ")}.` : "",
      s.customCharacter ? `Character notes: ${s.customCharacter}.` : "",
      s.customHair ? `Hair notes: ${s.customHair}.` : "",
      s.customBeauty ? `Beauty notes: ${s.customBeauty}.` : "",
      s.customOutfit ? `Outfit notes: ${s.customOutfit}.` : "",
      s.extraScene ? `Scene notes: ${s.extraScene}.` : "",
    ].filter(Boolean).join(" ");

    const scene = `Scene: ${s.setting}. Theme: ${s.theme}. Lighting: ${s.lighting}. Camera: ${s.view}, ${s.angle}, ${s.lens}.`;

    const constraints = `No logos, no brand marks, no text, no watermark.`;

    // verbosity
    const minimal = [subject, appearance, scene, safeBrandLine, constraints].filter(Boolean);
    const standard = [subject, appearance, hair, beauty, outfit, scene, extras, safeBrandLine, constraints].filter(Boolean);
    const ultra = [subject, appearance, hair, beauty, outfit, scene, extras, safeBrandLine, "Rendering: natural proportions, clean hands, realistic skin texture, cinematic depth of field.", constraints].filter(Boolean);

    const base = vb===1 ? minimal : vb===2 ? standard : ultra;

    // platform formatting
    if(mode === "ChatGPT"){
      return [
        "Subject: " + subject,
        "Appearance: " + appearance,
        "Hair: " + hair,
        "Beauty: " + beauty,
        "Outfit: " + outfit,
        "Scene & Camera: " + scene,
        extras ? ("Notes: " + extras) : "",
        safeBrandLine ? ("Style: " + safeBrandLine) : "",
        "Constraints: " + constraints,
        s.negative ? ("Negative: " + s.negative) : "",
        s.seed ? ("Seed: " + s.seed) : ""
      ].filter(Boolean).join("\n");
    }

    if(mode === "Microsoft Designer"){
      // single paragraph, concise
      const p = [subject, appearance, hair, outfit, scene, safeBrandLine, "No text, no logos."].filter(Boolean).join(" ");
      return p.replace(/\s+/g," ").trim();
    }

    if(mode === "Bing Image Creator"){
      const p = [subject, appearance, hair, outfit, scene, safeBrandLine, "No text, no logos."].filter(Boolean).join(" ");
      return p.replace(/\s+/g," ").trim();
    }

    if(mode === "Grok"){
      const p = [subject, appearance, hair, beauty, outfit, scene, extras, safeBrandLine, constraints].filter(Boolean).join("\n");
      return p + (s.seed ? `\nSeed: ${s.seed}.` : "");
    }

    if(mode === "Stable Diffusion"){
      return base.join("\n") +
        (s.negative ? `\nNegative: ${s.negative}` : "") +
        (s.seed ? `\nSeed: ${s.seed}` : "");
    }

    if(mode === "Midjourney"){
      const mj = base.join("\n") + (s.seed ? `\nSeed: ${s.seed}` : "");
      return mj + "\n--style raw --ar 4:5";
    }

    // ImageFX default
    return base.join("\n") +
      (s.negative ? `\nNegative: ${s.negative}` : "") +
      (s.seed ? `\nSeed: ${s.seed}` : "");
  }

  // ========= Actions =========
  function toggleBrandFields(){
    const on = $("brandToggle").checked;
    $("brandA").style.display = on ? "" : "none";
    $("brandB").style.display = on ? "" : "none";
  }

  function randomize(fields){
    fields.forEach(([id, arr]) => { $(id).value = randPick(arr); });
  }
  function randomizeChips(containerId, list, max){
    $(containerId).querySelectorAll("input[type=checkbox]").forEach(cb=>cb.checked=false);
    const n = Math.floor(Math.random()*(max+1));
    const picks = [...list].sort(()=>Math.random()-0.5).slice(0,n);
    setChipSelections(containerId, picks);
  }

  async function copyText(text){
    try { await navigator.clipboard.writeText(text); alert("Copied!"); }
    catch{
      const out = $("output"); out.focus(); out.select();
      document.execCommand("copy"); alert("Copied!");
    }
  }

  // ========= Init =========
  function init(){
    // fill selects
    Object.entries(OPTIONS).forEach(([k,arr])=>{
      if(k.startsWith("multi")) return;
      if($(k)) fillSelect(k, arr);
    });

    renderChips("accessoryChips", OPTIONS.multiAccessories, 3, "accWarn");
    renderChips("propChips", OPTIONS.multiProps, 3, "propWarn");

    $("verbosity").addEventListener("input", setVerbosityLabel);
    setVerbosityLabel();

    $("brandToggle").addEventListener("change", toggleBrandFields);

    $("btnGenerate").addEventListener("click", ()=> $("output").value = buildPrompt());
    $("btnCopy").addEventListener("click", ()=> copyText($("output").value || buildPrompt()));

    $("btnSave").addEventListener("click", ()=>{
      const name = v("presetName") || prompt("Preset name?");
      if(!name) return;
      const presets = loadPresets();
      presets[name] = captureState();
      savePresets(presets);
      refreshPresetList();
      $("presetName").value = name;
      alert("Preset saved.");
    });

    $("btnLoad").addEventListener("click", ()=>{
      const name = v("presetList");
      const presets = loadPresets();
      if(!name || !presets[name]) return alert("No preset selected.");
      applyState(presets[name]);
      $("output").value = buildPrompt();
    });

    $("btnExport").addEventListener("click", ()=>{
      const presets = loadPresets();
      const blob = new Blob([JSON.stringify(presets, null, 2)], {type:"application/json"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "prompt-studio-presets.json"; a.click();
      URL.revokeObjectURL(url);
    });

    $("btnImport").addEventListener("click", ()=> $("fileImport").click());
    $("fileImport").addEventListener("change", async (e)=>{
      const file = e.target.files?.[0]; if(!file) return;
      const text = await file.text();
      try{
        const imported = JSON.parse(text);
        const presets = loadPresets();
        Object.entries(imported).forEach(([k,val])=> presets[k]=val);
        savePresets(presets);
        refreshPresetList();
        alert("Imported presets.");
      } catch(err){
        alert("Import failed.");
      } finally {
        e.target.value = "";
      }
    });

    $("rndCharacter").addEventListener("click", ()=>{
      randomize([
        ["characterType", OPTIONS.characterType],
        ["stylePreset", OPTIONS.stylePreset],
        ["bodyType", OPTIONS.bodyType],
        ["complexion", OPTIONS.complexion],
        ["undertone", OPTIONS.undertone],
        ["expression", OPTIONS.expression],
        ["pose", OPTIONS.pose],
      ]);
      $("customCharacter").value = "";
    });

    $("rndHair").addEventListener("click", ()=>{
      randomize([
        ["hairTexture", OPTIONS.hairTexture],
        ["hairStyle", OPTIONS.hairStyle],
        ["hairLength", OPTIONS.hairLength],
        ["hairPart", OPTIONS.hairPart],
        ["hairFinish", OPTIONS.hairFinish],
        ["hairAccessories", OPTIONS.hairAccessories],
      ]);
      $("customHair").value = "";
    });

    $("rndBeauty").addEventListener("click", ()=>{
      randomize([
        ["baseFinish", OPTIONS.baseFinish],
        ["eyeMakeup", OPTIONS.eyeMakeup],
        ["lipStyle", OPTIONS.lipStyle],
        ["lashStyle", OPTIONS.lashStyle],
        ["lashLength", OPTIONS.lashLength],
        ["lashCurl", OPTIONS.lashCurl],
        ["lashDensity", OPTIONS.lashDensity],
        ["nailType", OPTIONS.nailType],
        ["nailLength", OPTIONS.nailLength],
        ["nailShape", OPTIONS.nailShape],
        ["nailFinish", OPTIONS.nailFinish],
        ["nailColor", OPTIONS.nailColor],
        ["nailArt", OPTIONS.nailArt],
        ["nailAccent", OPTIONS.nailAccent],
      ]);
      $("customBeauty").value = "";
    });

    $("rndOutfit").addEventListener("click", ()=>{
      randomize([
        ["outfitAesthetic", OPTIONS.outfitAesthetic],
        ["outfitPieces", OPTIONS.outfitPieces],
        ["outfitFit", OPTIONS.outfitFit],
        ["outfitFabric", OPTIONS.outfitFabric],
        ["outfitPattern", OPTIONS.outfitPattern],
        ["shoes", OPTIONS.shoes],
        ["colorScheme", OPTIONS.colorScheme],
        ["styleInfluence", OPTIONS.styleInfluence],
      ]);
      randomizeChips("accessoryChips", OPTIONS.multiAccessories, 3);
      $("customOutfit").value = "";
    });

    $("rndScene").addEventListener("click", ()=>{
      randomize([
        ["setting", OPTIONS.setting],
        ["lighting", OPTIONS.lighting],
        ["view", OPTIONS.view],
        ["angle", OPTIONS.angle],
        ["lens", OPTIONS.lens],
        ["theme", OPTIONS.theme],
      ]);
      randomizeChips("propChips", OPTIONS.multiProps, 3);
      $("extraScene").value = "";
    });

    refreshPresetList();
    $("output").value = buildPrompt();
  }
  // ===== CLEAR ALL (safe) =====
(function () {
  const clearBtn = document.getElementById("btnClear");
  if (!clearBtn) return;

  clearBtn.addEventListener("click", () => {

    // 1) Clear selects (dropdowns)
    document.querySelectorAll("select").forEach(sel => {
      sel.value = ""; // works with Patch 2 placeholder
      sel.dispatchEvent(new Event("change", { bubbles: true }));
    });

    // 2) Clear checkboxes (chips)
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
      cb.dispatchEvent(new Event("change", { bubbles: true }));
    });

    // 3) Clear text inputs (skip file/range)
    document.querySelectorAll("input").forEach(inp => {
      const t = (inp.type || "").toLowerCase();
      if (t === "checkbox" || t === "file" || t === "range") return;
      inp.value = "";
      inp.dispatchEvent(new Event("input", { bubbles: true }));
      inp.dispatchEvent(new Event("change", { bubbles: true }));
    });

    // 4) Clear textareas (keep output if you want)
    document.querySelectorAll("textarea").forEach(ta => {
      if (ta.id === "output") return; // remove this line if you want output cleared too
      ta.value = "";
      ta.dispatchEvent(new Event("input", { bubbles: true }));
      ta.dispatchEvent(new Event("change", { bubbles: true }));
    });

  });
})();
  document.addEventListener("DOMContentLoaded", init);
