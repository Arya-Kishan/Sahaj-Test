import Link from "next/link";

export default function InvalidLinkPage() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Invalid Link</h1>
        <p>The requested video link is not available. Please try again later.</p>
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          Go back to the home page
        </Link>
      </div>
    );
  }
  