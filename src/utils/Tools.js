export const cutText = (text) => {
    let result = "";
    if (text.length <= 18) {
        return text;
    }
    for (let i = 0; i < text.length; i++) {
        result += text[i];
        if (result.length > 15) {
            result += ".."
            break
        }
    }

    return result
}
