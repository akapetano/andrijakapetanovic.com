import Link from 'next/link';

export default function NavBar({ name }) {
  return (
    <nav className="nav">
      <div>
        <h2>{name}</h2>
      </div>
      <div className="linkContainer">
        {' '}
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Portfolio</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </div>

      <style jsx>
        {`
          .nav {
            position: fixed;
            background: #fff;
            top: 0;
            left: 0;
            width: 100%;
            height: 5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15%;
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
            z-index: 10;
            transition: all 0.3s ease-in-out;
          }

          h2 {
            font-size: 1rem;
            @media (max-width: ${({ theme }) => theme.tablet}) {
              margin-left: 2rem;
              font-size: 1rem;
            }
            @media (max-width: ${({ theme }) => theme.mobile}) {
              margin-left: 3rem;
            }
          }

          .linkContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </nav>
  );
}
