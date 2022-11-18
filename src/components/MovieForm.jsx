import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = ({ history }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>MovieForm - {id}</h1>;
      <button
        className="btn btn-primary btn-md"
        onClick={() => navigate("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
