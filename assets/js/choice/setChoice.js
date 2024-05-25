const choiceText = document.querySelector("#choice-text");

/**
 * Set the current choice in the page
 * @param {String} choice
 */
export const setChoice = (choice) => {
    choiceText.textContent = `"${choice}"`;
}
