const regex = /₹[\d,]+/g; // Regex to match amounts like ₹15,000 or ₹7000

// text : whole string
// wordsToColor : ["text1","text2"]
// color : color for your text
export const ColorRandomTextInsideString = (text, wordsToColor, color = "#C18823") => {
    const regex = new RegExp(`\\b(${wordsToColor.join("|")})\\b`, "g");
    const parts = text.split(regex);

    return parts.map((part, index) =>
        wordsToColor.includes(part) ? (
            <span key={index} style={{ color: color }}>
                {part}
            </span>
        ) : (
            part
        )
    );
};