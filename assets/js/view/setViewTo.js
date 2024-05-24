const choiceView = document.querySelector("#choice-view");
const optionsView = document.querySelector("#options-view");

/**
 * Set the current visible screen
 * @param {"choices"|"options"} view
 */
export const setViewTo = (view) => {
    switch (view) {
        case "choices":
            choiceView.classList.remove("invisible");
            optionsView.classList.add("invisible");
            break;
        case "options":
            choiceView.classList.add("invisible");
            optionsView.classList.remove("invisible");
            break;
    }
}
