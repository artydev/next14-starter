import Link from "next/link";

const Links = () => {
  return (
    <>
      <div className="sidebarlinks">
        <div>
          <Link href="/chat">
              <div>Chat!!!</div>

              </Link>
        </div>
        <div>
          <Link href="/rag">Rag</Link>
        </div>
      </div>
    </>
  );
};

export default Links;
