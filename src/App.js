import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component";
import {DocumentList} from "./components/document-list.component";
import {CreateDocument} from "./components/document-add.component";
import EditDocument from "./components/document-edit.component";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/document" element={<DocumentList />} />
          <Route exact path="/createDocument" element={<CreateDocument />} />
          <Route exact path="/editDocument" element={<EditDocument/>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
