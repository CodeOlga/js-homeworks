const SwapiForm = () => {
  return (
      <div className="mb-3">
        <label htmlFor="basic-url" className="form-label">SWAPI</label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">https://swapi.dev/api/</span>
          <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" placeholder="people/1/" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon1">Get info</button>
        </div>
      </div>
  )
}

export default SwapiForm