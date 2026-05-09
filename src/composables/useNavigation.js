export const handleHome = () => {
  //go to section projects
  // ill change to "contact" when i have it
  const homeSection = document.getElementById('home')
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: 'smooth' })
  }
}

export const handleHireMe = () => {
  //go to section projects
  // ill change to "contact" when i have it
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

export const handleAboutMe = () => {
  //go to section projects
  // ill change to "contact" when i have it
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}

export const handleProjects = () => {
  //go to section projects
  // ill change to "contact" when i have it
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

export const handleDownloadCV = () => {
  window.open(`${window.location.origin}/CV.pdf`, "_blank")
}