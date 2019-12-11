export const findbyTestAttribute=(component,attribute){
    const wrapperClass = component.find(`[data-test='${attribute}']`)
    return wrapperClass
}