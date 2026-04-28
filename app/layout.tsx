import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <head>
        <title>Balaraman Research Group</title>
        <meta name="description" content="Research group focused on innovative solutions in science and technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header className="header">
        <h1>Balaraman Research Group</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Balaraman Research Group. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

<style jsx>{` 
.layout { 
  display: flex; 
  flex-direction: column; 
  min-height: 100vh; 
}
.header { 
  background: #0044cc; 
  color: #ffffff; 
  padding: 1rem; 
}
.header nav ul { 
  list-style: none; 
  padding: 0; 
}
.header nav ul li { 
  display: inline; 
  margin-right: 1rem; 
}
.footer { 
  text-align: center; 
  padding: 1rem; 
  background: #f1f1f1; 
}
@media (max-width: 600px) { 
  .header nav ul li { 
    display: block; 
    margin: 0.5rem 0; 
  }
}
`}</style>
