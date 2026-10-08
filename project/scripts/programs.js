const programsData = [
    {
        id: "p1",
        title: "Primary Foundation Academy",
        category: "Primary",
        ageRange: "Ages 6 - 11",
        description: "Focuses on literacy, numeracy, social ethics, and basic scientific exploration.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "p2",
        title: "Middle School Exploration",
        category: "Middle",
        ageRange: "Ages 12 - 14",
        description: "Introduces integrated science, humanities, logic, and early digital literacy.",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "p3",
        title: "High School College Prep",
        category: "High School",
        ageRange: "Ages 15 - 18",
        description: "Advanced STEM tracks, literature analysis, career counseling, and university preparation.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#programs-container");
    const filterSelect = document.querySelector("#category-filter");

    renderPrograms(programsData, container);
    updateSavedCountUI();

    filterSelect.addEventListener("change", (e) => {
        const selectedCategory = e.target.value;
        if (selectedCategory === "all") {
            renderPrograms(programsData, container);
        } else {
            const filtered = programsData.filter(prog => prog.category === selectedCategory);
            renderPrograms(filtered, container);
        }
    });
});

function renderPrograms(items, targetElement) {
    if (!targetElement) return;

    if (items.length === 0) {
        targetElement.innerHTML = `<p class="info-card">No educational programs available for this selection.</p>`;
        return;
    }

    const savedBookmarks = getBookmarksFromStorage();

    const htmlContent = items.map(item => {
        const isBookmarked = savedBookmarks.includes(item.id);
        
        return `
            <article class="info-card">
                <img src="${item.image}" alt="${item.title}" width="400" height="250" loading="lazy">
                <h3>${item.title}</h3>
                <p><strong>Level:</strong> ${item.category} (${item.ageRange})</p>
                <p>${item.description}</p>
                <button 
                    class="action-button bookmark-btn" 
                    data-id="${item.id}">
                    ${isBookmarked ? "★ Bookmarked" : "☆ Save Program"}
                </button>
            </article>
        `;
    }).join("");

    targetElement.innerHTML = htmlContent;

    const buttons = targetElement.querySelectorAll(".bookmark-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => toggleBookmark(e.target.dataset.id));
    });
}

function toggleBookmark(programId) {
    let bookmarks = getBookmarksFromStorage();

    if (bookmarks.includes(programId)) {
        bookmarks = bookmarks.filter(id => id !== programId);
    } else {
        bookmarks.push(programId);
    }

    localStorage.setItem("wisdom_bookmarks", JSON.stringify(bookmarks));
    
    const filterSelect = document.querySelector("#category-filter");
    const currentCategory = filterSelect ? filterSelect.value : "all";
    const container = document.querySelector("#programs-container");

    const displayedList = currentCategory === "all" 
        ? programsData 
        : programsData.filter(p => p.category === currentCategory);

    renderPrograms(displayedList, container);
    updateSavedCountUI();
}

function getBookmarksFromStorage() {
    const data = localStorage.getItem("wisdom_bookmarks");
    return data ? JSON.parse(data) : [];
}

function updateSavedCountUI() {
    const countElement = document.querySelector("#saved-count");
    if (countElement) {
        const count = getBookmarksFromStorage().length;
        countElement.textContent = `${count}`;
    }
}
