import { missions } from '../data/missions.mjs';

document.addEventListener("DOMContentLoaded", () => {
    // --- Populate the select ---
    const select = document.querySelector('select[name="mission"]');
    missions.forEach(mission => {
        const option = document.createElement("option");
        option.value = mission.name;      
        option.textContent = mission.name; 
        select.appendChild(option);
    });

    // --- Generate membership cards dynamically ---
    const container = document.querySelector(".membership-cards");

    missions.forEach((mission, index) => {
        const card = document.createElement("div");
        card.className = "membership-card";

        const h3 = document.createElement("h3");
        h3.textContent = mission.name;
        card.appendChild(h3);

        const btn = document.createElement("button");
        btn.type = "button";
        const modalId = `missionModal${index}`;
        btn.textContent = "Learn More";
        btn.addEventListener("click", () => openModal(modalId));
        card.appendChild(btn);

        container.appendChild(card);

        // Create modal for each mission
        const modal = document.createElement("div");
        modal.id = modalId;
        modal.className = "modal";

        modal.innerHTML = `
            <h2>${mission.name}</h2>
            <p>${mission.description}</p>
            <p><strong>Address:</strong> ${mission.address}</p>
            <p><strong>Phone:</strong> ${mission.phone}</p>
        `;

        // Create Close button and attach event
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", closeModal);
        modal.appendChild(closeBtn);

        document.body.appendChild(modal);
    });

    // --- Create backdrop for closing modal ---
    let backdrop = document.getElementById('modalBackdrop');
    if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.id = 'modalBackdrop';
        backdrop.className = 'modal-backdrop';
        document.body.appendChild(backdrop);
    }
    backdrop.addEventListener("click", closeModal);
});

// --- Modal functions ---
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.getElementById('modalBackdrop').classList.add('active');
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  document.getElementById('modalBackdrop').classList.remove('active');
}
