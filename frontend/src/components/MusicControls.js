
function MusicControls({ onBack, onStop, onNext }) {
  return (
    <div className="d-flex justify-content-center py-4">
      <button className="btn btn-outline-primary mx-2" onClick={onBack}>
        <i className="bi bi-skip-backward-fill"></i> Back
      </button>
      <button className="btn btn-outline-danger mx-2" onClick={onStop}>
        <i className="bi bi-stop-fill"></i> Stop
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={onNext}>
        <i className="bi bi-skip-forward-fill"></i> Next
      </button>
    </div>
  );
}

export default MusicControls;
