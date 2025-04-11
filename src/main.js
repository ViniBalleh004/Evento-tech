// FAQ Toggle (usado em index.html)
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item h3');
    if (faqItems) {
      faqItems.forEach(item => {
        item.addEventListener('click', () => {
          item.parentElement.classList.toggle('active');
        });
      });
    }
  }
  
  // Formulário de Inscrição (usado em inscricao.html)
  function initializeForm() {
    const form = document.getElementById('inscricao-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        let inscricoes = JSON.parse(localStorage.getItem('inscricoes')) || [];
        inscricoes.push(data);
        localStorage.setItem('inscricoes', JSON.stringify(inscricoes));
        alert('Inscrição enviada com sucesso! Você será redirecionado para o site oficial do Web Summit Rio para finalizar sua inscrição.');
        window.location.href = 'https://rio.websummit.com/';
      });
    }
  }
  
  // Inicializar as funções quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', () => {
    initializeFAQ();
    initializeForm();
  });
