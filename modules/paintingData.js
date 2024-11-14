export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 5, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Indian Maestro ${i + 1}`,
      artist: 'Raja Ravi Verma',
      imgSrc:`https://lh3.googleusercontent.com/eFtgd4J7my2rzadab6Sul5_1f2YJ4y8n1IefKJXS6aP_iWy83X2L6MGtyb37PfP1YvDB2zOQhR_jOrvo-GyvICygDA=s0`,
      width:100,
      height:100,
      description: `This is one of the masterpieces by Raja Ravi Verma, showcasing his unique style and art. Artwork ${
        i + 1
      } perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year ${i + 1900}`,
      link: 'https://artistro.com/blogs/news/30-most-famous-artworks-in-history-the-greatest-art-of-all-time?srsltid=AfmBOoq0XKyqpx-rQjfJ1rQ_dPBRL9peU-KCaqZm64v_1iqtfnDQbJf2',
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 5,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Great Avant-Garde Women Artist ${i+1}`,
      artist: 'Amrita Sher-Gil',
      imgSrc:`https://dhaaramagazine.in/wp-content/uploads/2023/08/Amrita-Sher-Gil.jpg`,
      width:100,
      height:100,
      description: `Artwork ${
        i + 5
      } by Amrita Sher-Gil is an great piece showcasing her remarkable ability to capture beauty and life.`,
      year: `Year ${i + 1895}`,
      link: 'https://artistro.com/blogs/news/30-most-famous-artworks-in-history-the-greatest-art-of-all-time?srsltid=AfmBOoq0XKyqpx-rQjfJ1rQ_dPBRL9peU-KCaqZm64v_1iqtfnDQbJf2',
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 5,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Greatness of Dutch ${i + 1}`,
      artist: 'Johannes Vermeer',
      imgSrc:`https://i0.wp.com/blog.creativeflair.org/wp-content/uploads/2023/03/download-5-1.webp?fit=409%2C330&ssl=1`,
      width:100,
      height:100,
      description: `With its striking use of color and brushwork, Artwork ${
        i + 9
      } is a testament to Vermeer's artistic genius.`,
      year: `Year ${i + 1640}`,
      link: 'https://artistro.com/blogs/news/30-most-famous-artworks-in-history-the-greatest-art-of-all-time?srsltid=AfmBOoq0XKyqpx-rQjfJ1rQ_dPBRL9peU-KCaqZm64v_1iqtfnDQbJf2',
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 5,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Greatest Ever ${i + 1}`,
      artist: 'Leonardo Da Vinci',
      imgSrc:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_G5r53TLdwVOLQvg50uLgGUCFiWya6IBgJw&s`,
      width:100,
      height:100,
      description: `Artwork ${
        i + 13
      } was an Italian polymath of the High Renaissance, best known for his dramatic and expressive artwork.`,
      year: `Year ${i + 1450}`,
      link: 'https://artistro.com/blogs/news/30-most-famous-artworks-in-history-the-greatest-art-of-all-time?srsltid=AfmBOoq0XKyqpx-rQjfJ1rQ_dPBRL9peU-KCaqZm64v_1iqtfnDQbJf2',
    },
  })),
];
