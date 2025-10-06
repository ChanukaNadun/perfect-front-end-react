import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/common/Button";

function StudyPage() {
  const navigate = useNavigate();

   const studyPackLinks = [
     { link: "/", label: "Home" },
     { link: "/array-methods", label: "Array Methods" },
     { link: "/state", label: "State" },
     { link: "/memo", label: "Memo" },
     { link: "/memo", label: "Memo" },
     { link: "/state", label: "State" },
   ];

  const handleArrayNav = (link) => {
    navigate(link);
  }; 
  return (
    <div>
      <div className="container">
        <h1>Study Page</h1>
        {studyPackLinks.map((nav, index) => (
          <div key={index}>
            <Button key={index} onClick={() => handleArrayNav(nav.link)}>
              {nav.label}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyPage;
