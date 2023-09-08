# React Carousel Component

This is a Carousel component built with Vite, a fast and minimalist development tool for building web applications. The idea is to have easy acess to already created react components to use in other projects. This Carousel is lighweight and fast with minimal code ready to be inplemented in any react site.

## Features

- Easy to use in re-use
- Auto slides 
- Supports videos
- Responsive to screen size 

## Installation

1. Clone the repository or download the source code.
2. Make sure you have Node.js and npm (Node Package Manager) installed on your system.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Run the following command to install the project dependencies:

```shell
npm install

```

5. Run the following command to run the project:

```shell
npm run dev
```
## Usage

Make sure to import the carousel and then call it like any other react component
ex:
```shell
    <Carousel>
        {images.map((image) => (
            <Carousel.slide key={someKey}>
                <Carousel.Image  src={image} />
            </Carousel.slide>
        )}
    </Carousel>

```



## Folder Structure

The project's folder structure is as follows:

    src/: Contains the application's source code.
        Carousel.jsx: The root component for the Carousel.
        Home.jsx: This is where we are using our carousel and dynamically feeding it the images.
        main.js: The entry point of the application.
    index.html: The HTML template for the application.
    package.json: The npm package configuration file.

## License

This project is licensed under the MIT License. Feel free to use and modify the code according to your needs.


## Acknowledgements

This Carousel component was developed using the Vite framework.

If you have any questions or need further assistance, please feel free to reach out.
