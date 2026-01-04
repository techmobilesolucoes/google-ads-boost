<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Assistência Técnica Independente em Celulares e Notebooks</title>

  <meta name="description" content="Assistência técnica independente em celulares, notebooks e computadores. Manutenção, troca de peças e atendimento via WhatsApp.">

  <!-- Open Graph -->
  <meta property="og:title" content="Assistência Técnica Independente">
  <meta property="og:description" content="Manutenção e reparos em celulares e notebooks. Atendimento rápido e profissional.">
  <meta property="og:image" content="https://raw.githubusercontent.com/techmobilesolucoes/paginacapturawhatsapp/refs/heads/main/frente%20cartao.jpeg">
  <meta property="og:type" content="website">

  <!-- Schema.org (SEM marcas) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tech Mobile",
    "telephone": "+5548998049084",
    "description": "Assistência técnica independente para celulares, notebooks e computadores.",
    "image": "https://raw.githubusercontent.com/techmobilesolucoes/paginacapturawhatsapp/refs/heads/main/frente%20cartao.jpeg"
  }
  </script>

  <style>
    :root{
      --bg:#07120f;
      --panel:rgba(2,6,8,.72);
      --text:#ffffff;
      --accent:#00a896;
      --whatsapp:#25D366;
      --radius:14px;
    }

    *{box-sizing:border-box}
    body{
      margin:0;
      font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
      background:var(--bg);
      color:var(--text);
    }

    .container{
      max-width:1100px;
      margin:auto;
      padding:20px;
    }

    .banner{
      height:300px;
      background:url('https://raw.githubusercontent.com/techmobilesolucoes/paginacapturawhatsapp/refs/heads/main/frente%20cartao.jpeg') center/cover no-repeat;
      border-radius:12px;
      margin-bottom:20px;
    }

    .panel{
      max-width:880px;
      margin:auto;
      background:var(--panel);
      padding:28px;
      border-radius:var(--radius);
      box-shadow:0 10px 40px rgba(0,0,0,.45);
    }

    h2{text-align:center;margin-bottom:20px}

    .services{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      gap:16px;
    }

    .service h3{text-align:center}

    ul{list-style:none;padding:0}
    li{
      background:rgba(255,255,255,.04);
      padding:10px;
      margin-bottom:8px;
      border-radius:8px;
      font-weight:600;
    }
    li::before{
      content:"✓";
      color:var(--accent);
      margin-right:8px;
    }

    .cta{text-align:center;margin-top:24px}
    .cta a{
      display:inline-flex;
      align-items:center;
      gap:10px;
      background:var(--whatsapp);
      color:#fff;
      padding:14px 20px;
      border-radius:12px;
      text-decoration:none;
      font-weight:700;
    }

    footer{
      text-align:center;
      margin-top:24px;
      font-size:.9rem;
      opacity:.85;
    }

    .legal{
      font-size:.8rem;
      opacity:.7;
      margin-top:12px;
    }
  </style>
</head>

<body>
<main class="container">

  <div class="banner" role="img" aria-label="Cartão da empresa"></div>

  <section class="panel">
    <h2>Nossos serviços</h2>

    <div class="services">
      <div class="service">
        <h3>Celulares</h3>
        <ul>
          <li>Troca de tela</li>
          <li>Troca de bateria</li>
          <li>Conector de carga</li>
          <li>Troca de vidro traseiro</li>
        </ul>
      </div>

      <div class="service">
        <h3>Notebooks</h3>
        <ul>
          <li>Troca de tela</li>
          <li>Troca de teclado</li>
          <li>Upgrade de memória e SSD</li>
	  <li>Manutenção preventiva</li>

        </ul>
      </div>
    </div>

    <div class="cta">
      <a href="https://wa.me/5548998049084?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20informações." target="_blank" rel="noopener">
        <img src="https://github.com/techmobilesolucoes/Home/blob/main/logo%20whatsapp.jpg?raw=true" width="22" alt="WhatsApp">
        Falar com um técnico
      </a>
    </div>
  </section>

  <footer>
    Atendimento de segunda a sábado — 8h às 20h
    <div class="legal">
      Tech Mobile é uma assistência técnica independente, sem vínculo com fabricantes ou marcas registradas.
    </div>
  </footer>

</main>
</body>
</html>
