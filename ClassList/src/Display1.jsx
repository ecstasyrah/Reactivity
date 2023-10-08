function Display1({stud}) {
    return (
      <div className="boxin">
        {stud.map((t) => (
          <div className="bee">
            <p>{t.id}</p>
            <p>{t.name}</p>
          </div>
        )
        )}
      </div>
    )
  }
  export default Display1