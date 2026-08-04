"use strict";

const page = document.body;
const funnelTitle = page.dataset.funnel || "Funnel";
const currentStep = Number(page.dataset.step || 1);
const totalSteps = Number(page.dataset.total || 1);
const padStep = (step) => String(step).padStart(2, "0");

document.title = `${funnelTitle} | Step ${currentStep}`;

const main = document.createElement("main");
const eyebrow = document.createElement("span");
const heading = document.createElement("h1");
const message = document.createElement("p");
const location = document.createElement("code");
const navigation = document.createElement("nav");
const backToPortfolio = document.createElement("a");

eyebrow.className = "eyebrow";
eyebrow.textContent = `Step ${padStep(currentStep)} of ${padStep(totalSteps)} · Upload placeholder`;
heading.textContent = funnelTitle;
message.textContent = "Replace this placeholder index.html with the completed hard-coded funnel page. Keep this folder name and update the page CTA to point to the next local step.";
location.textContent = window.location.pathname;
navigation.setAttribute("aria-label", "Funnel step navigation");

if (currentStep > 1) {
  const previous = document.createElement("a");
  previous.href = `../step-${padStep(currentStep - 1)}/index.html`;
  previous.textContent = "Previous Step";
  navigation.append(previous);
}

if (currentStep < totalSteps) {
  const next = document.createElement("a");
  next.className = "next";
  next.href = `../step-${padStep(currentStep + 1)}/index.html`;
  next.textContent = "Go to Next Page";
  navigation.append(next);
}

backToPortfolio.className = "back";
backToPortfolio.href = "../../../index.html#projects";
backToPortfolio.textContent = "Back to Portfolio";
navigation.append(backToPortfolio);
main.append(eyebrow, heading, message, location, navigation);
page.append(main);

