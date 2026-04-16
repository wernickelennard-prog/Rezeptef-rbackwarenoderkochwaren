:root {
  --primary: #ff6b4a;
  --primary-glow: rgba(255, 107, 74, 0.2);
  --green: #27ae60;
  --dark: #1e272e;
  --text-dim: #576574;
  --bg-soft: #f4f7f9;
  --white: #ffffff;
  --radius: 24px;
}

* { -webkit-tap-highlight-color: transparent; box-sizing: border-box; outline: none; }

body { 
  margin: 0; 
  font-family: 'DM Sans', sans-serif; 
  background-color: var(--bg-soft);
  color: var(--dark);
  min-height: 100vh;
}

.app-container { max-width: 900px; margin: 0 auto; padding: 40px 20px; }

header { text-align: center; margin-bottom: 50px; }
.brand-logo { font-size: 4rem; color: var(--primary); margin-bottom: 10px; }
header h1 { font-family: 'Playfair Display', serif; font-size: 2.8rem; margin: 0; }
header p { color: var(--text-dim); margin-top: 5px; }

/* HERO CARDS */
.main-selection { display: flex; gap: 24px; margin-top: 30px; }

.hero-card { 
  flex: 1; height: 380px; border-radius: var(--radius); cursor: pointer; position: relative; overflow: hidden; 
  display: flex; align-items: flex-end; padding: 30px; color: white; 
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.hero-card:hover { transform: translateY(-12px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }

.hero-card::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.card-content { position: relative; z-index: 2; }
.hero-card h2 { font-size: 2rem; margin: 0; }
.hero-card p { opacity: 0.8; margin: 5px 0 0; font-size: 0.9rem; }

.hero-card.kochen { background: url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800') center/cover; }
.hero-card.backen { background: url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800') center/cover; }

/* NAVIGATION */
.top-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; }
.nav-circle-btn { 
  width: 50px; height: 50px; border-radius: 50%; background: var(--white); 
  border: none; cursor: pointer; font-size: 1.2rem; 
  box-shadow: 0 5px 15px rgba(0,0,0,0.08); transition: 0.3s;
}
.nav-circle-btn:hover { background: var(--primary); color: white; }

/* SEARCH BOX */
.search-box { 
  background: var(--white); padding: 30px; border-radius: var(--radius); 
  box-shadow: 0 10px 40px rgba(0,0,0,0.03); margin-bottom: 40px; 
}
.input-wrapper label { display: block; margin-bottom: 10px; font-weight: 700; font-size: 0.9rem; color: var(--text-dim); }
.input-wrapper label i { color: var(--primary); margin-right: 5px; }

input { 
  width: 100%; padding: 18px 24px; border: 2px solid #f1f3f5; 
  border-radius: 18px; font-size: 1rem; transition: 0.3s; background: #f8f9fa;
}
input:focus { border-color: var(--primary); background: white; box-shadow: 0 0 0 4px var(--primary-glow); }

.button-group { display: flex; gap: 12px; margin-top: 20px; }
.btn-main { flex: 2; background: var(--primary); color: white; border: none; padding: 18px; border-radius: 18px; font-weight: 700; cursor: pointer; font-size: 1rem; transition: 0.2s; }
.btn-sub { flex: 1; background: #f1f3f5; color: var(--text-dim); border: none; padding: 18px; border-radius: 18px; font-weight: 700; cursor: pointer; transition: 0.2s; }
.btn-main:hover { filter: brightness(1.1); transform: translateY(-2px); }

/* RECIPE CARDS */
.results-area { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.recipe-card { 
  background: var(--white); padding: 25px; border-radius: var(--radius); 
  cursor: pointer; transition: 0.3s; border: 1px solid transparent; 
  box-shadow: 0 8px 20px rgba(0,0,0,0.02); position: relative;
}
.recipe-card:hover { transform: translateY(-5px); border-color: var(--primary-glow); box-shadow: 0 12px 30px rgba(0,0,0,0.06); }
.recipe-card h3 { margin: 10px 0 0; font-family: 'Playfair Display', serif; }

.info-badge { 
  background: var(--primary-glow); color: var(--primary); 
  padding: 5px 12px; border-radius: 10px; font-size: 0.75rem; font-weight: 700;
}

/* MODAL */
.modal { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); display: none; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
.modal-content { 
  background: var(--white); padding: 35px; border-radius: 32px; width: 100%; 
  max-width: 550px; max-height: 85vh; overflow-y: auto; position: relative;
}
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
.close-modal { font-size: 1.5rem; cursor: pointer; color: var(--text-dim); }

.vegan-toggle { 
  display: flex; align-items: center; gap: 8px; background: #f1f3f5; 
  padding: 8px 18px; border-radius: 15px; cursor: pointer; font-weight: 700; font-size: 0.85rem;
}
.vegan-toggle.active { background: var(--green); color: white; }

.zutaten-box { 
  background: #fdfdfd; padding: 20px; border-radius: 20px; 
  border: 1px solid #f1f3f5; border-left: 5px solid var(--primary); margin: 20px 0; 
}
.anleitungs-box { 
  line-height: 1.7; padding: 20px; background: #fffcf9; 
  border-radius: 20px; border: 1px dashed var(--primary-glow); 
}

@media (max-width: 600px) {
  .main-selection { flex-direction: column; }
  header h1 { font-size: 2.2rem; }
  .hero-card { height: 200px; }
}
