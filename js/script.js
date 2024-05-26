function getEmojiOptions() {
    const emojis = [
        { value: "", display: "" },
        { value: "blue_circle", display: "🔵" },
        { value: "red_circle", display: "🔴" },
        { value: "green_circle", display: "🟢" },
        { value: "yellow_circle", display: "🟡" },
        { value: "blue_square", display: "🟦" },
        { value: "red_square", display: "🟥" },
        { value: "green_square", display: "🟩" },
        { value: "yellow_square", display: "🟨" },
        { value: "blue_heart", display: "💙" },
        { value: "red_heart", display: "❤️" },
        { value: "green_heart", display: "💚" },
        { value: "yellow_heart", display: "💛" },
        { value: "blue_star", display: "📘"}, 
        { value: "red_star", display: "📕"}, 
        { value: "green_star", display: "📗"}, 
        { value: "yellow_star", display: "📒" },
    ];

    return emojis.map(emoji => `<option value="${emoji.value}">${emoji.display}</option>`).join('');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.cell-select').forEach(select => {
        select.innerHTML = getEmojiOptions();
    });
    document.querySelectorAll('.cell-ans').forEach(select => {
        select.innerHTML = getEmojiOptions();
    });
});

