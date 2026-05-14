const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-lead-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = form.querySelector(".success");
    if (success) {
      success.style.display = "block";
      success.textContent = "Thanks. Your request has been prepared locally. Connect this form to your CRM or email service before paid campaigns.";
    }
  });
});

const planner = document.querySelector("[data-planner]");
if (planner) {
  const output = planner.querySelector("[data-planner-output]");
  planner.addEventListener("change", () => {
    const days = planner.querySelector("#days")?.value || "7";
    const style = planner.querySelector("#style")?.value || "classic";
    const routes = {
      classic: "Beijing for the Great Wall and Forbidden City, Xi'an for the Terracotta Army, Shanghai for the skyline.",
      nature: "Zhangjiajie for sandstone peaks, Guilin and Yangshuo for karst rivers, Yunnan for old towns and mountains.",
      family: "Beijing icons, Chengdu pandas and food, Shanghai museums and easy transport.",
      first: "Beijing, Xi'an, Chengdu and Shanghai with high-speed rail between major stops."
    };
    if (output) output.textContent = `${days} days: ${routes[style]}`;
  });
}
