interface AlbumPageProps {
  id: number;
  userId: number;
  title: string;
}

const base_url = "https://jsonplaceholder.typicode.com/albums?_limit=15";

const AlbumsPage = async () => {
  const res = await fetch(base_url);
  const albums: AlbumPageProps[] = await res.json();

  return (
    <>
      <h1> This Is Albums</h1>
      <ul>
        {albums.map((album) => {
          return (
            <li key={album.id}>
              <p>{album.id}</p>
              <p>{album.title}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AlbumsPage;
