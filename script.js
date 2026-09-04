/* =========================================================
   HEADER
   ========================================================= */

const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
});


/* =========================================================
   MENU MOBILE
   ========================================================= */

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-expanded',
    String(open)
  );
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');

    menuToggle?.setAttribute(
      'aria-expanded',
      'false'
    );
  });
});


/* =========================================================
   ANIMAÇÕES DE ENTRADA
   ========================================================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll('.reveal')
  .forEach(el => observer.observe(el));


/* =========================================================
   CHATBOT DOCTORBOT
   ========================================================= */

const openChatbot = document.getElementById('openChatbot');
const closeChatbot = document.getElementById('closeChatbot');
const chatbotOverlay = document.getElementById('chatbotOverlay');


function openDoctorBot() {

  if (!chatbotOverlay) return;

  chatbotOverlay.classList.add('active');

  chatbotOverlay.setAttribute(
    'aria-hidden',
    'false'
  );

  openChatbot?.setAttribute(
    'aria-expanded',
    'true'
  );

  // Impede a página de rolar enquanto o chat estiver aberto
  document.body.style.overflow = 'hidden';

}


function closeDoctorBot() {

  if (!chatbotOverlay) return;

  chatbotOverlay.classList.remove('active');

  chatbotOverlay.setAttribute(
    'aria-hidden',
    'true'
  );

  openChatbot?.setAttribute(
    'aria-expanded',
    'false'
  );

  document.body.style.overflow = '';

}


openChatbot?.addEventListener(
  'click',
  openDoctorBot
);


closeChatbot?.addEventListener(
  'click',
  closeDoctorBot
);


/* =========================================================
   FECHAR CLICANDO FORA DO CHAT
   ========================================================= */

chatbotOverlay?.addEventListener(
  'click',
  (event) => {

    if (event.target === chatbotOverlay) {
      closeDoctorBot();
    }

  }
);


/* =========================================================
   FECHAR COM ESC
   ========================================================= */

document.addEventListener(
  'keydown',
  (event) => {

    if (
      event.key === 'Escape' &&
      chatbotOverlay?.classList.contains('active')
    ) {

      closeDoctorBot();

    }

  }
);
