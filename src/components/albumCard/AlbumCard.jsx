const AlbumCard = ({ albumDatas }) => {
  return (
    <>
      {albumDatas.map((album, index) => {
        return (
          <div className="container card cursor-pointer hover:shadow-lg hover:shadow-[#fff]  lg:hover:-mt-4 transition-all duration-300" key={index}>
            <figure className="flex container">
              <img src={album.src} alt={`${album.name} + pict`} className="block w-full" />
            </figure>
            <div className="card-footer text-white mt-2 px-4 py-4">
              <h2 className="text-xl font-bold tracking-tight">{album.name}</h2>
              <p className="text-[#999] mt-2">{album.date}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AlbumCard;
