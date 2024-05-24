/**
 * Returns a div element with a textarea and optionally a span for delete itself
 * @param {Number} position
 * @param {Boolean} canBeRemoved
 * @returns {HTMLDivElement}
 */
const generateOptionElement = (position, canBeRemoved) => {
    const div = document.createElement("div");
    div.classList.add("relative");

    const textArea = document.createElement("textarea");
    textArea.name = "option" + position;
    textArea.classList.add("p-4", "h-[200px]", "w-[200px]", "resize-none", "tracking-[1px]", "bg-[#f5f5f5]", "py-[15px]", "uppercase", "font-bold");
    textArea.placeholder = position === 0 ? "THIS" : position % 2 ? "OR THIS" : "OR THAT";
    textArea.required = true;
    div.append(textArea);

    if (canBeRemoved) {
        const span = document.createElement("span");
        span.classList.add("text-[13px]", "text-[rgb(102,102,102)]", "cursor-pointer", "absolute", "bottom-[-1.2em]", "right-0", "underline");
        span.textContent = "Remove";
        div.append(span);
    }

    return div;
}

/**
 * Adds a new textarea before of the button
 * @param {HTMLElement} optionsContainer
 * @param {Boolean} canBeRemoved
 */
export const renderOption = (optionsContainer, canBeRemoved) => {
    const optionList = optionsContainer.children;
    const optionCount = optionList.length;

    const element = generateOptionElement(optionCount, canBeRemoved);

    const lastOption = optionList[optionCount - 2];
    lastOption.insertAdjacentElement("afterend", element);
}
