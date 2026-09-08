const backgrounds = ["#F4B2B0", "#F7C7A3", "#EEDAA2", "#B9C7A1", "#9BC7D3", "#B5A5C7"];


function changeColor()

{
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomColor = backgrounds[randomIndex];
    document.body.style.backgroundColor = randomColor;
}
