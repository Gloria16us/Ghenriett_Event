const eventManager = [
  // Each item in the event has a name, category, image, and description.
  {
      title: "Garden",
      category: "wedding",
      img: "1st-item.jpeg",
      desc: `A wedding decor for'#MAYOTO 2024.'`,
  },
  {
      title: "Reception",
      category: "Wedding",
      img: "./2nd-item.jpeg", 
      desc: `A Reception hall for #MAYOTO 2024.`,
  },
  {
      title: "Conference",
      category: "conference",
      img: "./3rd-item.jpeg",
      desc: `A conference design 2018.`,
  },
  {
      title: "Reception",
      category: "wedding",
      img: "./4th-item.jpeg",
      desc: `A Reception hall for #MAYOTO 2024.`,
  },
  {
      title: "Image5",
      category: "birthday",
      img: "./5th-item.jpeg",
      desc: `A Photo area for #MAYOTO 2024.`,
  },
  {
      title: "Image6",
      category: "conference",
      img: "./6th-item.jpeg",
      desc: `Garden for joining #MAYOTO 2024.`,
  },
  {
      title: "Image7",
      category: "wedding",
      img: "./7th-item.jpeg",
      desc: `A Photo area for #MAYOTO 2024.`,
  },
  {
      title: "Image8",
      category: "birthday",
      img: "./8th-item.jpeg",
      desc: `An Engagement for #MAYOTO 2024.`,
  },
  {
      title: "Image9",
      category: "conference",
      img: "./9th-item.jpeg",
      desc: `Bridal Shower for Aishat. 2023.`,
  },
  {
      title: "Image10",
      category: "burial",
      img: "./10th-item.jpeg",
      desc: `A wedding reception hall in 2020.`,
  },
  {
    title: "Image11",
    category: "Props sales",
    img: "./Props1.jpeg",
    desc: `A wedding reception hall in 2020.`,
},
];

 
 
 // Get parent element
 // This line finds the part of the webpage where we'll put our event items.
 const sectionCenter = document.querySelector(".section-center");
 // This line finds the part of the webpage where we'll put our filter buttons(the 4 buttons).
 const btnContainer = document.querySelector(".btn-container");
 
 // This part of the code waits for the webpage to finish loading before it runs the new js instruction.
 window.addEventListener("DOMContentLoaded", function () {
     // When the page is loaded, it show all the event items on js.
     displayEventItems(eventManager);
     // We also create buttons for filtering the event items.
     displayEventButtons(); //without this, the different classifications wont show
 });
 
 // This function takes a list of event items and shows them on the webpage.
 function displayEventItems(eventItems) {
     // We loop through each event item and create HTML to show it on the page.
     let displayEvent = eventItems.map(function (item) {
         // This part creates HTML for each event item.
         return `<article class="menu-item">
                        <img src=${item.img} alt=${item.title} class="photo" />

                        <div class="item-info">
                            <header>
                            <h4>${item.title}</h4>
                            <p class="item-text"> 
                                ${item.desc}
                            </p>
                        </div> 
                  </article>`;
     });  
 
     // We join all the HTML for event items into one big string.
     displayEvent = displayEvent.join("");
     // Then, we put this HTML into the section on the webpage where we show event items.
     sectionCenter.innerHTML = displayEvent;
 }
 
 // This function creates buttons for filtering event items by category.
 function displayEventButtons() {
     // First, we find out all unique categories from the event items.
     const categories = eventManager.reduce(
         function (values, item) {
             if (!values.includes(item.category)) {
                 values.push(item.category);
             }
             return values;
         },
         ["all"]
     );
 
     // Now, we create buttons for each category and put them on the webpage.
     const categoryBtns = categories
         .map(function (category) {
             return `<button type="button" class="filter-btn" data-id="${category}">
                         ${category}
                     </button>`;
         })
         .join("");
 
     // We put the buttons into the part of the webpage where filter buttons should go.
     btnContainer.innerHTML = categoryBtns;
 
     // Next, we add functionality to these filter buttons.
     const filterBtns = btnContainer.querySelectorAll(".filter-btn");
 
     // For each filter button, when clicked, we'll show only event items of that category.
     filterBtns.forEach(function (btn) {
         btn.addEventListener("click", function (e) {
             const category = e.currentTarget.dataset.id;

             const eventCategory = eventManager.filter(function (eventItem) {
                 if (eventItem.category === category) {
                     return eventItem;
                 }
             });
             
             // If "all" category is clicked, we'll show all event items.
             if (category === "all") {
                 displayEventItems(eventManager);
             } else {
                 // Otherwise, we'll show only event items of the clicked category.
                 displayEventItems(eventCategory);
             }
         });
     });
 }
