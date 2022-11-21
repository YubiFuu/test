fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        data.forEach((a) => {
            let figure = document.createElement("figure");
            let imageContainer = document.createElement("img");
            let figureTag = document.createElement("figcaption");
            imageContainer.src = a.download_url;
            figureTag.textContent = a.author;
            document.body.appendChild(figure);
            figure.appendChild(imageContainer);
            figure.appendChild(figureTag);
        });
    });
