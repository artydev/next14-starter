import Link from "next/link";

const Links = () => {
  return (
    <>
      <div>
        <Link href="/chat">Chat</Link>
        <Link href="/rag">Rag</Link>
      </div>
    </>
  );
};

export default Links;
