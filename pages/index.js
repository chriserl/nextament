import Head from "next/head";
import Link from "next/link";
import "../styles/Home.scss";

export default function Home() {
	return (
		<div className=".container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<p>Welcome to Erl's NextJs Starter</p>

				<div className="links">
					<Link href="/funny">
						<a>Link to funny page</a>
					</Link>
					<Link as="/templates/firstemplate" href="/templates/[templateId]">
						<a>First template link</a>
					</Link>
				</div>
			</main>
		</div>
	);
}
