import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-4 px-3 py-1 font-medium bg-green-500 text-black rounded hover:bg-green-50 hover:text-gray-950"
    >
      ← Back
    </button>
  );
};

export default BackButton;