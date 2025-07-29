import Link from "next/link";

export default function notFound(){
    return(
        <main className="not-found">
            <h1>Meal Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please check our exquisite meals <Link href="/" className="/meals"><span className="highlight">Meals</span></Link>.</p>
        </main>
    )
}