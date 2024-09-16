body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 1em 0;
}

h1 {
    margin: 0;
}

main {
    padding: 1em;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
}

.photo {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 300px;
}

.photo img {
    width: 100%;
    height: auto;
}

.photo p {
    padding: 0.5em;
    text-align: center;
}

footer {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 1em 0;
    position: absolute;
    bottom: 0;
    width: 100%;
}
