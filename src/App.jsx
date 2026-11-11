import games from './games.json';

// Relative image paths are resolved against the site base (works on GitHub Pages).
const src = (p) => (/^(https?:)?\/\//.test(p) ? p : import.meta.env.BASE_URL + p);

const Play = () => <span className="play">PLAY GAME <i>→</i></span>;

export default function App() {
  const [featured, ...rest] = games;
  return (
    <>
      <header className="header">
        <img className="logo" src={src('logo.webp')} alt="MAX GAME VAULT" />
        <p className="subtitle">A COLLECTION OF WORLDS.</p>
      </header>

      <main className="wrap">
        {featured && (
          <a className="card featured" href={featured.url} target="_blank" rel="noopener noreferrer">
            <div className="cover">
              <img src={src(featured.image)} alt={featured.title} />
              <Play />
            </div>
            <div className="info">
              <span className="tag">FEATURED</span>
              <h2 className="title">{featured.title}</h2>
              <p className="desc">{featured.description}</p>
            </div>
          </a>
        )}

        <section className="grid">
          {rest.map((g) => (
            <a className="card" key={g.url} href={g.url} target="_blank" rel="noopener noreferrer">
              <div className="cover">
                <img src={src(g.image)} alt={g.title} loading="lazy" />
                <Play />
              </div>
              <h2 className="title">{g.title}</h2>
              <p className="desc">{g.description}</p>
            </a>
          ))}
        </section>
      </main>

      <footer className="footer">INDEPENDENT GAME COLLECTION</footer>
    </>
  );
}
