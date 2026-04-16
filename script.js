const rezepte = [
    // --- KOCHEN ---
    { 
        name: "Tacos", typ: "kochen", tags: ["hackfleisch", "mais", "käse", "tacos"], 
        zeit: "15 Min", temp: "Pfanne",
        zutaten: ["4 Tacos", "200g Hackfleisch", "1 Dose Mais", "100g Käse"],
        anleitung: "1. Hackfleisch 10 Min. scharf anbraten. 2. Tacos im Ofen bei 150°C wärmen. 3. Belegen.",
        veganOption: {
            name: "Linsen-Tacos", tags: ["linsen", "vegan"], zeit: "20 Min", temp: "Pfanne",
            zutaten: ["4 Tacos", "150g rote Linsen", "Mais", "Veganer Käse"],
            anleitung: "1. Linsen kochen. 2. Mit Gewürzen anbraten. 3. Tacos füllen."
        }
    },
    { 
        name: "Pasta Aglio e Olio", typ: "kochen", tags: ["pasta", "knoblauch", "öl"], 
        zeit: "12 Min", temp: "Topf & Pfanne",
        zutaten: ["200g Spaghetti", "3 Knoblauchzehen", "Olivenöl", "Chili"],
        anleitung: "1. Pasta al dente kochen. 2. Knoblauch in viel Öl goldbraun dünsten. 3. Pasta darin schwenken.",
        veganOption: { name: "Pasta Aglio e Olio (Vegan)", tags: ["vegan"], zeit: "12 Min", temp: "Topf", zutaten: ["Spaghetti", "Knoblauch", "Olivenöl"], anleitung: "Originalrezept ist bereits vegan!" }
    },
    { 
        name: "Spaghetti Carbonara", typ: "kochen", tags: ["pasta", "ei", "speck"], 
        zeit: "15 Min", temp: "Pfanne",
        zutaten: ["250g Pasta", "100g Speck", "2 Eigelb", "Parmesan"],
        anleitung: "1. Pasta kochen. 2. Speck braten. 3. Ei/Käse-Mix unter die heiße Pasta rühren.",
        veganOption: { name: "Tofu Carbonara", tags: ["tofu", "vegan"], zeit: "15 Min", temp: "Pfanne", zutaten: ["Pasta", "Räuchertofu", "Hafersahne"], anleitung: "Tofu braten und mit Sahne einkochen." }
    },
    { 
        name: "Lachs mit Gemüse", typ: "kochen", tags: ["fisch", "lachs", "gemüse"], 
        zeit: "25 Min", temp: "200°C Ofen",
        zutaten: ["Lachsfilet", "Brokkoli", "Zitrone", "Kartoffeln"],
        anleitung: "1. Gemüse klein schneiden. 2. Alles auf ein Blech legen. 3. 20 Min. backen.",
        veganOption: { name: "Ofengemüse mit Tofu", tags: ["vegan", "tofu"], zeit: "25 Min", temp: "Ofen", zutaten: ["Tofu", "Brokkoli", "Kartoffeln"], anleitung: "Tofu marinieren und mit Gemüse backen." }
    },
    { name: "Wiener Schnitzel", typ: "kochen", tags: ["fleisch", "panade"], zeit: "15 Min", temp: "Pfanne", zutaten: ["Kalbsschnitzel", "Ei", "Panermehl"], anleitung: "Panieren und goldbraun ausbacken." },

    // --- BACKEN ---
    { 
        name: "Blaubeermuffins", typ: "backen", tags: ["beeren", "mehl"], 
        zeit: "25 Min", temp: "180°C",
        zutaten: ["250g Mehl", "100g Zucker", "Blaubeeren"],
        anleitung: "Teig mischen, Beeren unterheben und 20 Min. backen.",
        veganOption: { name: "Vegane Muffins", tags: ["vegan"], zeit: "25 Min", temp: "180°C", zutaten: ["Mehl", "Apfelmark", "Hafermilch"], anleitung: "Eier durch Apfelmark ersetzen." }
    },
    { 
        name: "Schokokuchen", typ: "backen", tags: ["schokolade", "kakao"], 
        zeit: "45 Min", temp: "175°C",
        zutaten: ["200g Schokolade", "150g Butter", "3 Eier", "Mehl"],
        anleitung: "Schokolade schmelzen, mit restlichen Zutaten verrühren und backen.",
        veganOption: { name: "Veganer Schokokuchen", tags: ["vegan"], zeit: "45 Min", temp: "175°C", zutaten: ["Mehl", "Kakao", "Öl", "Sprudel"], anleitung: "Sprudel macht den Teig fluffig." }
    },
    { 
        name: "Apfelstrudel", typ: "backen", tags: ["apfel", "zimt", "teig"], 
        zeit: "50 Min", temp: "190°C",
        zutaten: ["Strudelteig", "4 Äpfel", "Zimt", "Zucker"],
        anleitung: "Äpfel schneiden, würzen, einrollen und goldgelb backen.",
        veganOption: { name: "Veganer Apfelstrudel", tags: ["vegan"], zeit: "50 Min", temp: "190°C", zutaten: ["Teig", "Äpfel", "Margarine"], anleitung: "Margarine statt Butter verwenden." }
    },
    { name: "Zitronenkuchen", typ: "backen", tags: ["zitrone"], zeit: "50 Min", temp: "175°C", zutaten: ["Butter", "Eier", "Zitrone"], anleitung: "Klassischen Rührteig backen." }
];

let aktuellerModus = '';
let ausgewähltesRezept = null;
let isVeganMode = false;

function openApp(mode) {
    aktuellerModus = mode;
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'block';
    document.getElementById('mode-title').innerHTML = mode === 'kochen' ? "<i class='fas fa-fire'></i> Gourmet Küche" : "<i class='fas fa-bread-slice'></i> Backstube";
    suche(true);
}

function goHome() {
    document.getElementById('home-screen').style.display = 'block';
    document.getElementById('app-screen').style.display = 'none';
}

function suche(mitZutaten) {
    const inputStr = document.getElementById('zutaten').value.toLowerCase();
    const meineZutaten = inputStr.split(',').map(z => z.trim()).filter(z => z !== "");
    const container = document.getElementById('results-container');
    container.innerHTML = "";

    const ergebnisse = rezepte.filter(r => {
        if (r.typ !== aktuellerModus) return false;
        if (meineZutaten.length === 0) return true;
        
        const hatÜbereinstimmung = meineZutaten.some(z => 
            r.tags.some(tag => tag.includes(z)) || 
            (r.veganOption && r.veganOption.tags && r.veganOption.tags.some(tag => tag.includes(z)))
        );
        return mitZutaten ? hatÜbereinstimmung : !hatÜbereinstimmung;
    });

    ergebnisse.forEach(r => {
        const card = document.createElement('div');
        card.className = "recipe-card";
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="info-badge"><i class="far fa-clock"></i> ${r.zeit}</span>
                ${r.veganOption ? '<i class="fas fa-leaf" style="color:#27ae60"></i>' : ''}
            </div>
            <h3>${r.name}</h3>
        `;
        card.onclick = () => showDetails(r);
        container.appendChild(card);
    });
}

function showDetails(r) {
    ausgewähltesRezept = r;
    isVeganMode = false;
    renderModal();
    document.getElementById('recipe-modal').style.display = 'flex';
}

function renderModal() {
    const r = ausgewähltesRezept;
    const data = isVeganMode && r.veganOption ? r.veganOption : r;
    const toggle = document.getElementById('vegan-toggle-btn');
    const body = document.getElementById('modal-body');

    toggle.style.display = r.veganOption ? 'flex' : 'none';
    toggle.className = isVeganMode ? 'vegan-toggle active' : 'vegan-toggle';
    document.getElementById('toggle-text').innerText = isVeganMode ? "Veggie-Modus" : "Standard-Modus";

    body.innerHTML = `
        <h2 style="margin-top:0; font-family:'Playfair Display', serif; font-size:2rem;">${data.name}</h2>
        <div style="margin-bottom: 20px; display:flex; gap:10px;">
            <span class="info-badge"><i class="far fa-clock"></i> ${data.zeit}</span>
            <span class="info-badge" style="background:#f1f3f5; color:#576574;"><i class="fas fa-temperature-half"></i> ${data.temp}</span>
        </div>
        <div class="zutaten-box">
            <strong style="color:var(--primary); font-size:1.1rem;">Zutaten:</strong>
            <ul style="margin-top:12px; padding-left:20px; color:var(--text-dim);">${data.zutaten.map(z => `<li>${z}</li>`).join('')}</ul>
        </div>
        <strong style="display:block; margin-bottom:10px;">Zubereitung:</strong>
        <div class="anleitungs-box">${data.anleitung}</div>
    `;
}

function toggleVegan() { isVeganMode = !isVeganMode; renderModal(); }
function closeModal() { document.getElementById('recipe-modal').style.display = 'none'; }
window.onclick = (e) => { if (e.target.className === 'modal') closeModal(); };
