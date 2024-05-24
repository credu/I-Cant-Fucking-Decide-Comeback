/**
 * Destroy the parent element of target
 * @param {HTMLElement} target
 */
export const deleteParent = (target) => {
    target.parentElement.remove();
}
