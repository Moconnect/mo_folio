

$(document).ready(function () {
    // Function to update the progress bars based on scroll position
    function updateProgressBars() {
        $('.progress-bar').each(function () {
            const progressBar = $(this);
            const progressBarPosition = progressBar.offset().top;
            const scrollPosition = $(window).scrollTop();
            const windowHeight = $(window).height();

            // Check if the progress bar is in the viewport
            if (progressBarPosition < scrollPosition + windowHeight) {
                progressBar.css('width', progressBar.attr('aria-valuenow') + '%');
            }
        });
    }

    // Update progress bars on page load and scroll
    updateProgressBars();
    $(window).scroll(updateProgressBars);
});




// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
    // Initialize AOS library
    AOS.init();
  
    // Function to update the progress bars based on scroll position
    function updateProgressBars() {
      $('.progress-bar').each(function () {
        const progressBar = $(this);
        const progressBarWidth = progressBar.data('width');
        const progressBarPosition = progressBar.offset().top;
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
  
        // Check if the progress bar is in the viewport
        if (progressBarPosition < scrollPosition + windowHeight) {
          progressBar.css('width', progressBarWidth);
          progressBar.next('.progress-value').text(progressBarWidth);
        }
      });
    }
  
    // Update progress bars on page load and scroll
    updateProgressBars();
    $(window).scroll(updateProgressBars);
  });





  const rellax = new Rellax('.rellax'); // Use the appropriate selector

  





  const projects = [
    {
      title: "Abstract Help Landing Page",
      date: "March 2023",
      company: "Abstract.com",
      description: "This is abstract.com help center page i recreated or clone to look more good to users to be able to get in contact with the right help they need.",
      image: "images/web2.png",
    },
    // Add more project objects as needed
    {
      title: "Moore touch",
      date: "March 2023",
      company: "mooretouch.com",
      description: "mooretouch.com is a tatoe website landing page i created for a client to showcase the services, location and how customers can book for an appointment.",
      image: "images/web0.png",
    },
    {
      title: "Preficient investment company",
      date: "March 2023",
      company: "pfcoltd.com",
      description: "pfcoltd.com is an investment company landing page designed to provide our clients with comprehensive insights into our financial services, our strategic location, and how to get in touch with us.",
      image: "images/web00.png",
    },
    {
      title: "Quincy cakes",
      date: "March 2023",
      company: "Quincycake.com",
      description: "Quincycake.com, was proudly by me to present cake company's landing page, designed to showcase our delectable cake creations, our location, and how you can indulge in our sweet delights.",
      image: "images/web000.png",
    },
    {
      title: "shematic",
      date: "March 2023",
      company: "mooretouch.com",
      description: "shematic.com is an innovative website landing page i created for a client to showcase the services, location and how customers can connect with other company.",
      image: "images/web0000.png",
    },
    {
      title: "Moore touch",
      date: "March 2023",
      company: "mooretouch.com",
      description: "mooretouch.com is a tatoe website landing page i created for a client to showcase the services, location and how customers can book for an appointment.",
      image: "images/web00000.png",
    },
    {
      title: "Moore touch",
      date: "March 2023",
      company: "mooretouch.com",
      description: "mooretouch.com is a tatoe website landing page i created for a client to showcase the services, location and how customers can book for an appointment.",
      image: "images/web6.png",
    },
    {
      title: "Moore touch",
      date: "March 2023",
      company: "mooretouch.com",
      description: "mooretouch.com is a tatoe website landing page i created for a client to showcase the services, location and how customers can book for an appointment.",
      image: "images/website-1.png",
    },
    {
      title: "Samira content creator",
      date: "March 2023",
      company: "Samira",
      description: "mooretouch.com is a tatoe website landing page i created for a client to showcase the services, location and how customers can book for an appointment.",
      image: "images/web5.png",
    },
    {
      title: "Soft skin",
      date: "March 2023",
      company: "soft skin",
      description: "mooretouch.com is a tatoe website landing page i created for a client to showcase the services, location and how customers can book for an appointment.",
      image: "images/web3.png",
    },
  ];

  

const projectContainer = document.querySelector("#pro");

// Function to display a project
function displayProject(project) {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("col-lg-12", "mb-4", "d-lg-flex");
  projectDiv.innerHTML = `
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">Date: ${project.date}</p>
          <p class="card-text">Company: ${project.company}</p>
          <p class="card-text">Short Description: ${project.description}</p>
          <a href="#" class="btn btn-primary">Read More</a>
          <a href="#" class="btn btn-secondary">Share</a>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <img src="${project.image}" class="card-img-top" alt="${project.title}">
    </div>
  `;

  projectContainer.appendChild(projectDiv);
}

// Load projects dynamically
projects.forEach((project) => {
  displayProject(project);
});

