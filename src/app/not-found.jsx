import Link from "next/link";

const style = {
    color: "red",
    textAlign: "center"
}

const NotFound = () => {
  return (
    <div>
      <h2 style={style}>404 : Page non trouvée</h2>
      <Link href="/">Acceuil</Link>
    </div>
  );
};

export default NotFound;
