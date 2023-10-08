function Display1({stud}) {
    return (
      <div className="boxin1">
        {stud.map((t) => (
          <div className="bee1">
            <p>{t.id}</p>
            <p>{t.name}</p>
          </div>
        )
        )}
      </div>
    )
  }
  export default Display1