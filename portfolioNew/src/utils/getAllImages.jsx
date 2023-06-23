export default function getAllImages({ folder }) {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context(`../../assets/${folder}`, true, /\.(png|jpe?g|svg)$/)
  );

  const imagesArr = Object.values(images);
  return imagesArr;
}
