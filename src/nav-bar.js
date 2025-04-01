function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateActiveSection() {
  const sections = document.querySelectorAll("main > section");
  const radios = document.querySelectorAll(".wrap input[type='radio']");
  
  let activeSectionId = null;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      activeSectionId = section.id;
    }
  }

  if (activeSectionId) {
    for (const radio of radios) {
      if (radio.id === `rd-${activeSectionId}`) {
        radio.checked = true;
      }
    }
  }
}

window.addEventListener("scroll", updateActiveSection);
