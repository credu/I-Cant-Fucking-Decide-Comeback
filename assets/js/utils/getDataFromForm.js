/**
 * Returns a object data from a form element
 * @param {HTMLFormElement} form
 * @returns {Object} A object with the form data
 */
export const getDataFromForm = (form) => {
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
}
