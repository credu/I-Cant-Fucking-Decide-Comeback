import { deleteParent, getDataFromForm, getRandomElement } from "../utils/index.js";
import { renderOption } from "./renderOption.js";
import { setChoice } from "../choice/setChoice.js";
import { setViewTo } from "../view/setViewTo.js";

/**
 * Handles the click events of plus img and Remove span in the options container
 * @param {MouseEvent} event
 */
export const handleFormClick = (event) => {
    const target = event.target;
    const tagName = target.tagName;
    
    switch (tagName) {
        case "IMG":
            const form = target.closest("FORM");
            const canBeRemoved = true;
            renderOption(form, canBeRemoved);
            break;
        case "SPAN":
            deleteParent(target);
            break;
    }
}

export const handleFormReset = () => {
    setViewTo("options");
}

/**
 * Choices a random textarea value and displays it on screen
 * @param {SubmitEvent} event
 */
export const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = getDataFromForm(form);
    const optionList = Object.values(data);

    const option = getRandomElement(optionList);

    setChoice(option);
    setViewTo("choices");
}
