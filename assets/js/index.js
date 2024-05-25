import { handleFormClick, handleFormReset, handleFormSubmit } from "./options/optionsForm.js";

const decideForm = document.querySelector("#decide-form");

decideForm.addEventListener("click",  handleFormClick);
decideForm.addEventListener("reset",  handleFormReset);
decideForm.addEventListener("submit", handleFormSubmit);
