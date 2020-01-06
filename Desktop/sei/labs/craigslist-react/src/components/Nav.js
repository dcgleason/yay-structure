import React from 'react';

function Nav() {
  return (
    <nav className="nav">
        <ul>
            <li>help</li>
            <li>safety</li>
            <li>privacy</li>
            <li>feedback</li>
            <li>terms</li>
            <li><div className="post">Post</div></li> 
         </ul>
     </nav>
  );
}

export default Nav;