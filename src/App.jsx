import games from './games.json';

// Relative image paths are resolved against the site base (works on GitHub Pages).
const src = (p) => (/^(https?:)?\/\//.test(p) ? p : import.meta.env.BASE_URL + p);

export default function App() {
  return (
    <>
      <header className="header">
        <h1 className="logo">GAME VAULT</h1>
      </header>
      <main className="grid">
        {games.map((g) => (
          <a className="card" key={g.url} href={g.url} target="_blank" rel="noopener noreferrer">
            <div className="cover">
              <img src={src(g.image)} alt={g.title} loading="lazy" />
            </div>
            <h2 className="title">{g.title}</h2>
            <p className="desc">{g.description}</p>
          </a>
        ))}
      </main>
    </>
  );
}
