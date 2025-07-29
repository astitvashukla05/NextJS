import Link from "next/link";

export default function notFound(){
    return(
        <main className="not-found">
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please check the URL or return to the <Link href="/" className="link"><span className="highlight">homepage</span></Link>.</p>
        </main>
    )
}