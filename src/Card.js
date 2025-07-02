function Card({ url, name, abbr }) {
  console.log(url);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "200px",
        width: "200px",
        border: "1px solid gray",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <img height={100} width={100} src={url} alt={abbr} />
      <span>{name}</span>
    </div>
  );
}

export default Card;
