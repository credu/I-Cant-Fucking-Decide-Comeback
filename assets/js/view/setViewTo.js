const choiceView = document.querySelector("#choice-view");
const optionsView = document.querySelector("#options-view");

/**
 * Set the current visible screen
 * @param {"choices"|"options"} view
 */
export const setViewTo = (view) => {
    switch (view) {
        case "choices":
            window.history.pushState(null, "choice", "/I-Cant-Fucking-Decide-Comeback/choice.html");
            choiceView.classList.remove("invisible");
            optionsView.classList.add("invisible");
            break;
        case "options":
            window.history.pushState(null, "home", "/I-Cant-Fucking-Decide-Comeback/");
            choiceView.classList.add("invisible");
            optionsView.classList.remove("invisible");
            break;
    }
}
