const parser = new DOMParser();

export function playerModal(props) {
    const { imgSrc, description, name } = props;

    return parser.parseFromString(
        `
        <div class="player-modal">
            <img src="${imgSrc}" alt="player image"/> 
            <span>${name}</span>
            <p>${description}</p>
        </div>
        `,
        "text/html"
    ).body.firstElementChild;
}






