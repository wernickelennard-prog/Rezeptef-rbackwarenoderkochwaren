const rezepte = [
    // --- KOCHEN ---
    { 
        name: "Tacos", typ: "kochen", tags: ["hackfleisch", "mais", "käse", "tacos"], 
        zeit: "15 Min", temp: "Pfanne (hoch)",
        zutaten: ["4 Tacos", "200g Hackfleisch", "1 Dose Mais", "100g Käse"],
        anleitung: "1. Hackfleisch 10 Min. scharf anbraten. 2. Tacos im Ofen bei 150°C für 5 Min. wärmen. 3. Belegen.",
        veganOption: {
            name: "Linsen-Tacos", tags: ["linsen", "mais", "vegan", "tacos"], zeit: "20 Min", temp: "Topf & Pfanne",
            zutaten: ["4 Tacos", "150g rote Linsen", "1 Dose Mais", "Veganer Käse"],
            anleitung: "1. Linsen 15 Min. in Brühe kochen. 2. In der Pfanne mit Gewürzen 5 Min. anbraten. 3. Tacos füllen."
        }
    },
    { 
        name: "Spaghetti Carbonara", typ: "kochen", tags: ["pasta", "ei", "speck", "käse"], 
        zeit: "15 Min", temp: "Pfanne & Topf",
        zutaten: ["250g Pasta", "100g Speck", "2 Eigelb", "Parmesan"],
        anleitung: "1. Pasta kochen. 2. Speck knusprig braten. 3. Ei mit Käse mischen und unter die warmen Pasta heben.",
        veganOption: {
            name: "Räuchertofu-Carbonara", tags: ["pasta", "tofu", "vegan"], zeit: "15 Min", temp: "Pfanne",
            zutaten: ["250g Pasta", "100g Räuchertofu", "Hafersahne", "Hefeflocken"],
            anleitung: "1. Tofu scharf anbraten. 2. Sahne und Hefeflocken für die Cremigkeit dazu."
        }
    },
    { 
        name: "Rinderrouladen", typ: "kochen", tags: ["rind", "speck", "gurke"], 
        zeit: "120 Min", temp: "Schmoren (niedrig)",
        zutaten: ["2 Rinderrouladen", "Speck", "Saure Gurken", "Senf", "Fond"],
        anleitung: "1. Fleisch füllen und rollen. 2. Scharf anbraten. 3. In Fond 90 Min. schmoren.",
        veganOption: {
            name: "Wirsingrouladen", tags: ["wirsing", "pilze", "vegan"], zeit: "45 Min", temp: "Schmoren",
            zutaten: ["Wirsingblätter", "Pilze", "Reis"],
            anleitung: "Wirsing blanchieren, füllen und 25 Min. in Brühe garen."
        }
    },
    { 
        name: "Königsberger Klopse", typ: "kochen", tags: ["hack", "kapern"], 
        zeit: "35 Min", temp: "Sieden (leicht köchelnd)",
        zutaten: ["300g Hack", "Kapern", "Sahne"],
        anleitung: "1. Klopse 15 Min. in Brühe ziehen lassen. 2. Weiße Soße mit Kapern binden.",
        veganOption: {
            name: "Tofu-Klopse", tags: ["tofu", "kapern", "vegan"], zeit: "30 Min", temp: "Sieden",
            zutaten: ["250g Tofu", "Kapern", "Sojasahne"],
            anleitung: "Bällchen formen und in Kapern-Sojasahne erwärmen."
        }
    },
    { 
        name: "Wiener Schnitzel", typ: "kochen", tags: ["fleisch", "panade", "zitrone"], 
        zeit: "15 Min", temp: "Pfanne (viel Schmalz)",
        zutaten: ["2 Schnitzel", "Eier", "Panermehl"],
        anleitung: "Panieren und in reichlich Fett goldbraun ausbacken.",
        veganOption: {
            name: "Sellerieschnitzel", tags: ["sellerie", "panade", "vegan"], zeit: "20 Min", temp: "Pfanne",
            zutaten: ["Sellerieknolle", "Panade"],
            anleitung: "Sellerie vorkochen, panieren und braten."
        }
    },

    // --- BACKEN ---
    { 
        name: "Blaubeermuffins", typ: "backen", tags: ["beeren", "mehl", "zucker"], 
        zeit: "25 Min", temp: "180°C Umluft",
        zutaten: ["250g Mehl", "100g Zucker", "2 Eier", "Blaubeeren"],
        anleitung: "Teig mischen, Beeren unterheben und 20 Min. backen.",
        veganOption: {
            name: "Vegane Muffins", tags: ["beeren", "vegan"], zeit: "25 Min", temp: "180°C",
            zutaten: ["Mehl", "Apfelmark", "Hafermilch"],
            anleitung: "Eier durch Apfelmark ersetzen."
        }
    },
    { 
        name: "Zitronenkuchen", typ: "backen", tags: ["zitrone", "zucker"], 
        zeit: "50 Min", temp: "175°C Ober/Unterhitze",
        zutaten: ["250g Butter", "200g Zucker", "4 Eier", "2 Zitronen"],
        anleitung: "Rührteig backen und mit Zitronenguss überziehen.",
        veganOption: {
            name: "Veganer Zitronenkuchen", tags: ["zitrone", "vegan"], zeit: "50 Min", temp: "175°C",
            zutaten: ["Margarine", "Sprudelwasser", "Zitrone"],
            anleitung: "Sprudelwasser sorgt für die Lockerheit."
        }
    },
    { 
        name: "Donauwelle", typ: "backen", tags: ["kirschen", "schoko"], 
        zeit: "60 Min", temp: "180°C",
        zutaten: ["Kirschen", "Mehl", "Kakao", "Buttercreme"],
        anleitung: "Teig backen, Creme und Schokoguss schichten.",
        veganOption: {
            name: "Vegane Donauwelle", tags: ["kirschen", "vegan"], zeit: "60 Min", temp: "180°C",
            zutaten: ["Veganer Teig", "Sojapudding"],
            anleitung: "Vegane Buttercreme verwenden."
        }
    }
];

let aktuellerModus = '';
let ausgewähltesRezept = null;
let isVeganMode = false;

function openApp(mode) {
    aktuellerModus = mode;
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'block';
    document.getElementById('mode-title').innerText = mode === 'kochen' ? "🍳 Gourmet Küche" : "🥐 Backstube";
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
            (r.veganOption && r.veganOption.tags.some(tag => tag.includes(z)))
        );
        return mitZutaten ? hatÜbereinstimmung : !hatÜbereinstimmung;
    });

    ergebnisse.forEach(r => {
        const card = document.createElement('div');
        card.className = "recipe-card";
        card.innerHTML = `
            <span class="info-badge">${r.zeit}</span>
            <h3>${r.name}</h3>
            ${r.veganOption ? '<span style="float:right;">🌱</span>' : ''}
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
        <h2 style="margin-top:0;">${data.name}</h2>
        <div style="margin-bottom: 15px;">
            <span class="info-badge">🕒 ${data.zeit}</span>
            <span class="info-badge">🔥 ${data.temp}</span>
        </div>
        <div class="zutaten-box">
            <strong>Zutaten:</strong>
            <ul style="margin-top:10px; padding-left:20px;">${data.zutaten.map(z => `<li>${z}</li>`).join('')}</ul>
        </div>
        <strong>Schritte:</strong>
        <p style="line-height:1.6; padding: 15px; background:#fffde7; border-radius:12px;">${data.anleitung}</p>
    `;
}

function toggleVegan() { isVeganMode = !isVeganMode; renderModal(); }
function closeModal() { document.getElementById('recipe-modal').style.display = 'none'; }
window.onclick = (e) => { if (e.target.className === 'modal') closeModal(); };