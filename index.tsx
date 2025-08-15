/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

function App() {
  const container = document.createElement('div');
  container.className = 'container';

  // State for the price
  let currentPrice = 0.07281;
  let lastPrice = currentPrice;

  // --- Header ---
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="logo">S</div>
    <h1>SyriaSlam</h1>
    <span class="symbol">(SYR)</span>
  `;

  // --- Price Display ---
  const priceDisplayCard = document.createElement('div');
  priceDisplayCard.className = 'card price-display';
  const priceLabel = document.createElement('h2');
  priceLabel.textContent = 'CURRENT VALUE (USD)';
  const priceValue = document.createElement('div');
  priceValue.className = 'price-value';
  const priceChange = document.createElement('span');
  priceChange.className = 'price-change';
  
  priceValue.append(document.createTextNode(''), priceChange);
  priceDisplayCard.append(priceLabel, priceValue);

  function updatePriceDisplay() {
      const priceString = currentPrice.toFixed(5);
      priceValue.childNodes[0].nodeValue = `$${priceString}`;

      const change = currentPrice - lastPrice;
      const changeClass = change >= 0 ? 'positive' : 'negative';
      const changeSymbol = change >= 0 ? '▲' : '▼';
      priceChange.textContent = `${changeSymbol} ${Math.abs(change).toFixed(5)}`;
      priceChange.className = `price-change ${changeClass}`;
  }

  // --- About Section ---
  const aboutSection = document.createElement('section');
  aboutSection.className = 'card about';
  aboutSection.innerHTML = `
    <h2>The Digital Bridge to a New Economy</h2>
    <p>SyriaSlam (SYR) is a decentralized digital currency designed to empower individuals and foster economic growth. Built on the highly efficient XRP Ledger, SYR enables fast, low-cost global transactions.</p>
  `;

  // --- Whitepaper Section ---
  const whitepaperSection = document.createElement('section');
  whitepaperSection.className = 'card whitepaper';
  whitepaperSection.innerHTML = `
    <h2>الورقة البيضاء: موجز تنفيذي</h2>
    <h3>1. المقدمة</h3>
    <p>تقدم الورقة البيضاء لـ SyriaSlam رؤية لإنشاء نظام مالي عالمي مفتوح ومتاح للجميع. في عالم تتزايد فيه العولمة، لا تزال الأنظمة المالية التقليدية تعاني من البطء والتكاليف المرتفعة والقيود الجغرافية. تم تصميم SyriaSlam (SYR) كحل جذري لهذه المشكلات، بالاعتماد على قوة وكفاءة شبكة XRP Ledger.</p>
    <h3>2. المشكلة</h3>
    <p>التحويلات المالية الدولية مكلفة وتستغرق أيامًا، مما يعيق التجارة العالمية ويؤثر على الأفراد الذين يعتمدون على التحويلات. بالإضافة إلى ذلك، يفتقر الملايين حول العالم إلى الوصول للخدمات المالية الأساسية. هذه الحواجز تخنق الابتكار وتحد من النمو الاقتصادي.</p>
    <h3>3. الحل: بروتوكول SyriaSlam</h3>
    <p>SYR هو رمز رقمي يعمل على شبكة XRP Ledger، وهي بنية تحتية مصممة للمدفوعات السريعة والآمنة. من خلال SYR، يمكن إتمام المعاملات عبر الحدود في غضون 3-5 ثوانٍ وبجزء ضئيل من السنت. هذا يفتح الباب أمام حالات استخدام جديدة، من المدفوعات الصغيرة الفورية إلى تسوية المعاملات التجارية الكبيرة بكفاءة عالية.</p>
    <h3>4. الرؤية المستقبلية</h3>
    <p>تطمح SyriaSlam لتكون أكثر من مجرد عملة رقمية، بل جسرًا نحو اقتصاد رقمي شامل ومترابط. نهدف إلى تمكين المطورين ورجال الأعمال من بناء تطبيقات مالية مبتكرة على أساس بروتوكولنا، مما يساهم في تحقيق الشمول المالي على مستوى العالم.</p>
  `;
  const whitepaperButton = document.createElement('button');
  whitepaperButton.className = 'whitepaper-button';
  whitepaperButton.textContent = 'Download Full Whitepaper (PDF)';
  whitepaperButton.onclick = () => {
    alert('The full SyriaSlam whitepaper is coming soon. Stay tuned for a deep dive into our technology and vision!');
  };
  whitepaperSection.appendChild(whitepaperButton);

  // --- Tokenomics Section ---
  const tokenomicsSection = document.createElement('section');
  tokenomicsSection.className = 'card token-details';
  tokenomicsSection.innerHTML = `
    <h2>البيانات الأساسية للعملة</h2>
    <ul>
      <li><strong>العدد الإجمالي:</strong> <span>1,000,000,000 SYR</span></li>
      <li><strong>الشبكة:</strong> <span>XRP Ledger (XRPL)</span></li>
      <li><strong>آلية الإجماع:</strong> <span>Ripple Protocol Consensus Algorithm (RPCA)</span></li>
      <li><strong>متوسط وقت التسوية:</strong> <span>~3-5 ثوانٍ</span></li>
      <li><strong>حالات الاستخدام:</strong> <span>مدفوعات عالمية فورية، ترميز الأصول، تمويل لامركزي (DeFi)</span></li>
    </ul>
    <p>تم تصميم اقتصاديات SyriaSlam للاستفادة من كفاءة واستقرار شبكة XRP Ledger.</p>
  `;

  // --- Technology Section ---
  const technologySection = document.createElement('section');
  technologySection.className = 'card technology';
  technologySection.innerHTML = `
    <h2>الأساس التقني</h2>
    <h3>مبنية على XRP Ledger</h3>
    <p>تعمل SYR كرمز مميز (Token) على شبكة XRP Ledger، مستفيدة من سرعتها الفائقة وأمانها المثبت وتكاليفها شبه المعدومة. هذا التكامل يسمح لـ SYR بالاستفادة من واحدة من أكثر الشبكات استقرارًا وكفاءة في عالم البلوك تشين للمدفوعات عبر الحدود.</p>
    <h3>الوظائف المتقدمة</h3>
    <p>تدعم شبكة XRP Ledger وظائف متقدمة مثل الضمانات والتحويلات المشروطة. ومع إضافة "Hooks" القادمة، ستتوفر إمكانيات عقود ذكية كاملة، مما يفتح الباب أمام تطبيقات لامركزية (dApps) أكثر تطورًا.</p>
    <h3>التوافق مع المحافظ</h3>
    <p>يمكن إدارة عملات SYR باستخدام أي محفظة تدعم أصول XRP Ledger، بما في ذلك المحفظة الرسمية (SyriaSlam Core) التي توفر تجربة مُحسّنة وميزات أمان إضافية.</p>
  `;

  // --- Features Section ---
  const featuresSection = document.createElement('section');
  featuresSection.className = 'features';
  const features = [
    { title: 'Global Payments', description: 'Leverage the XRP Ledger for near-instant cross-border transactions.' },
    { title: 'Proven Security', description: 'Your assets are protected by the robust and battle-tested XRPL consensus.' },
    { title: 'Ultra-Low Fees', description: 'Enjoy transaction fees costing fractions of a cent, perfect for any scale.' }
  ];

  features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'card feature-card';
    featureCard.innerHTML = `
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    `;
    featuresSection.appendChild(featureCard);
  });
  
  // --- Roadmap Section ---
  const roadmapSection = document.createElement('section');
  roadmapSection.className = 'card roadmap';
  roadmapSection.innerHTML = `
    <h2>خارطة الطريق</h2>
    <ul>
      <li><strong>الربع الثالث 2024:</strong> إصدار الرمز المميز SYR على الشبكة الرئيسية لـ XRP Ledger.</li>
      <li><strong>الربع الرابع 2024:</strong> إطلاق المحفظة الرسمية (SyriaSlam Core) وتكاملها مع الشبكة.</li>
      <li><strong>الربع الأول 2025:</strong> بناء شراكات مع بوابات الدفع وإدراج SYR في منصات التداول اللامركزية (DEX) على XRPL.</li>
      <li><strong>الربع الثاني 2025:</strong> استكشاف حالات استخدام متقدمة مثل ترميز الأصول وتطبيقات التمويل اللامركزي.</li>
    </ul>
  `;

  // --- CTA Section ---
  const ctaSection = document.createElement('section');
  ctaSection.className = 'card cta-section';
  ctaSection.innerHTML = `<h2>Ready to Join the Revolution?</h2>`;
  const ctaButton = document.createElement('button');
  ctaButton.className = 'cta-button';
  ctaButton.textContent = 'Acquire SYR';
  ctaButton.onclick = () => {
    alert('SyriaSlam (SYR) will be available on major exchanges soon. Stay tuned!');
  };
  ctaSection.appendChild(ctaButton);

  // --- Footer ---
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} SyriaSlam Foundation. All rights reserved.</p>`;

  // --- Assemble App ---
  container.append(header, priceDisplayCard, aboutSection, whitepaperSection, tokenomicsSection, technologySection, featuresSection, roadmapSection, ctaSection, footer);
  
  // --- Initialize & Interval ---
  updatePriceDisplay();
  setInterval(() => {
    lastPrice = currentPrice;
    const fluctuation = (Math.random() - 0.5) * 0.0005; // Smaller, more realistic fluctuation
    currentPrice += fluctuation;
    if (currentPrice < 0.01) { // Prevent price from going too low
      currentPrice = 0.01 + Math.random() * 0.01;
    }
    updatePriceDisplay();
  }, 2500);

  return container;
}

const root = document.getElementById('root');
if (root) {
  root.appendChild(App());
}